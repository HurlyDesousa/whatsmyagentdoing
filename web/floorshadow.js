// Per-floor shadows for the stacked office.
//
// One angled sun shadow covered every storey. The slabs do not cast, so a
// cat, a blob, or a shelf was the closest depth all the way down the ray and
// the floor below drew that shadow again.
//
// Straight-down volumes stop the bleed, but a box sitting on the floor then
// casts nothing beside itself: the overhead map only sees the bottom face,
// which is flush with the floor. The shadow people can see is the angled one.
//
// So each storey keeps an angled shadow light aimed like the sun, and two
// gates keep it on that storey:
//   1. Casters are on a per-floor layer. The shadow pass for a light only
//      draws that layer, so a shelf upstairs is not in the downstairs map.
//   2. The lighting shader drops the sample when the receiver's world Y is
//      outside that light's band, so a downstairs floor ignores an upstairs
//      map even if the angled frustum still overlaps it.
// The lights add no illumination. The real sun still colours the room and
// does not cast.

import * as THREE from 'three';

const DIR_LIGHT_START = '#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )';
const DIR_LIGHT_END = '#if ( NUM_RECT_AREA_LIGHTS > 0 )';

const DIR_LIGHT_BLOCK = `#ifndef FLOOR_SHADOW_LIGHTS
#define FLOOR_SHADOW_LIGHTS 0
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	float floorOcclusion = 1.0;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		#if UNROLLED_LOOP_INDEX < FLOOR_SHADOW_LIGHTS
		{
			float sh = ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
			if ( vFloorShadowY < floorShadowLow[ UNROLLED_LOOP_INDEX ] || vFloorShadowY > floorShadowHigh[ UNROLLED_LOOP_INDEX ] ) sh = 1.0;
			floorOcclusion *= sh;
		}
		#else
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		directLight.color *= floorOcclusion;
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
		#endif
		#else
		directLight.color *= floorOcclusion;
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
		#endif
	}
	#pragma unroll_loop_end
#endif
`;

// Bands are shared with every material. Index matches the floor-light order.
export const floorShadowLow = new Float32Array(4);
export const floorShadowHigh = new Float32Array(4);

export function setFloorShadowBand(index, floorY, above = 3, below = 0.45) {
  floorShadowLow[index] = floorY - below;
  floorShadowHigh[index] = floorY + above;
}

let installed = false;

export function installFloorShadowChunk() {
  if (installed) return;
  const chunk = THREE.ShaderChunk.lights_fragment_begin;
  const start = chunk.indexOf(DIR_LIGHT_START);
  const end = chunk.indexOf(DIR_LIGHT_END);
  if (start < 0 || end < 0 || end < start) {
    throw new Error('floor shadow: Three.js lighting chunk did not match r186');
  }
  THREE.ShaderChunk.lights_fragment_begin = chunk.slice(0, start) + DIR_LIGHT_BLOCK + chunk.slice(end);
  const guard = `#ifndef FLOOR_SHADOW_LIGHTS
#define FLOOR_SHADOW_LIGHTS 0
#endif
`;
  const pars = THREE.ShaderChunk.shadowmap_pars_vertex;
  if (!pars.includes('vFloorShadowY')) {
    THREE.ShaderChunk.shadowmap_pars_vertex = pars + `
${guard}#if FLOOR_SHADOW_LIGHTS > 0
varying float vFloorShadowY;
#endif
`;
    THREE.ShaderChunk.shadowmap_pars_fragment += `
${guard}#if FLOOR_SHADOW_LIGHTS > 0
uniform float floorShadowLow[4];
uniform float floorShadowHigh[4];
varying float vFloorShadowY;
#endif
`;
    THREE.ShaderChunk.shadowmap_vertex += `
#if FLOOR_SHADOW_LIGHTS > 0
#if defined( USE_SHADOWMAP )
	vFloorShadowY = worldPosition.y;
#endif
#endif
`;
  }
  installed = true;
}

const LIT = (m) => m && (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial || m.isMeshLambertMaterial || m.isMeshPhongMaterial || m.isMeshToonMaterial);

export function tagFloorShadowMaterials(root, count) {
  const n = count | 0;
  root.traverse((o) => {
    if (!o.isMesh || !o.material) return;
    const mats = Array.isArray(o.material) ? o.material : [o.material];
    for (const m of mats) {
      if (!LIT(m)) continue;
      if (!m.defines) m.defines = {};
      if (m.defines.FLOOR_SHADOW_LIGHTS !== n) {
        m.defines.FLOOR_SHADOW_LIGHTS = n;
        m.needsUpdate = true;
      }
      if (!m.userData.floorShadowHook) {
        m.userData.floorShadowHook = true;
        const prev = m.onBeforeCompile;
        m.onBeforeCompile = (shader, renderer) => {
          if (prev) prev(shader, renderer);
          shader.uniforms.floorShadowLow = { value: floorShadowLow };
          shader.uniforms.floorShadowHigh = { value: floorShadowHigh };
        };
        m.needsUpdate = true;
      }
    }
  });
}

// Layers 1.. are floors. Layer 0 stays on so the main camera still sees them.
export function floorLayerBit(fl) {
  return (fl | 0) + 2;
}

export function setObjectFloorLayer(root, fl) {
  const bit = floorLayerBit(fl);
  root.traverse((o) => {
    o.layers.disable(1);
    o.layers.disable(2);
    o.layers.disable(3);
    o.layers.enable(0);
    o.layers.enable(bit);
  });
}

// Angled like the office sun (offset is the light's position relative to the
// floor centre). The frustum is deep on purpose; the Y band and the caster
// layer are what stop it at the slab.
export function createFloorShadowLight({
  floorY, cx, cz, width, depth,
  offset = [-6, 18, -3],
  mapSize = 2048,
}) {
  const light = new THREE.DirectionalLight(0xffffff, 0);
  light.castShadow = true;
  light.shadow.mapSize.set(mapSize, mapSize);
  light.shadow.bias = -0.0006;
  light.shadow.normalBias = 0.02;
  light.position.set(cx + offset[0], floorY + offset[1], cz + offset[2]);
  light.target.position.set(cx, floorY + 0.6, cz);
  const sc = light.shadow.camera;
  const r = Math.max(width, depth) * 0.8 + 2;
  Object.assign(sc, { left: -r, right: r, top: r, bottom: -r, near: 1, far: offset[1] + 24 });
  sc.updateProjectionMatrix();
  return light;
}

export function mountFloorShadowLights(scene, lights, sun) {
  scene.remove(sun, sun.target);
  for (const light of lights) scene.add(light, light.target);
  scene.add(sun, sun.target);
}

// The shadow pass tests casters against the colour camera's layers. For each
// floor light, show only that floor's layer while its map is drawn.
export function bindFloorShadowPasses(renderer) {
  const shadowMap = renderer.shadowMap;
  if (!shadowMap || shadowMap.userData?.floorBound) return;
  const orig = shadowMap.render.bind(shadowMap);
  shadowMap.render = function (lights, scene, camera) {
    const prev = camera.layers.mask;
    const rest = [];
    try {
      for (const light of lights) {
        const layer = light.userData && light.userData.shadowLayer;
        if (layer == null) { rest.push(light); continue; }
        camera.layers.mask = layer;
        orig([light], scene, camera);
      }
      camera.layers.mask = prev;
      if (rest.length) orig(rest, scene, camera);
    } finally {
      camera.layers.mask = prev;
    }
  };
  shadowMap.userData = shadowMap.userData || {};
  shadowMap.userData.floorBound = true;
}

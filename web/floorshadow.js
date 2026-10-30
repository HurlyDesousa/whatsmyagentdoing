// Per-floor directional shadow volumes for the stacked office.
//
// One sun-sized shadow map cannot separate floors: the light is angled, the
// rooms are wide, and the floor slabs do not cast, so an avatar's depth is
// the closest hit all the way down the ray. The floor below then samples
// that same map and draws the oval with nobody standing on it.
//
// Each floor gets a straight-down shadow light whose near/far slab covers
// that storey only (walls and a few centimetres of slab, not the storey
// below). Those lights add no illumination — intensity is 0 — and the shader
// fold below multiplies their occlusion into the real sun. The sun itself
// does not cast, so it cannot punch a second copy of the shadow through.

import * as THREE from 'three';

const DIR_LIGHT_START = '#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )';
const DIR_LIGHT_END = '#if ( NUM_RECT_AREA_LIGHTS > 0 )';

// Floor-shadow lights occupy the first FLOOR_SHADOW_LIGHTS directional
// slots and must be the ones that cast. The sun comes after them and does
// not cast. With the define left at 0 this block matches stock Three.js.
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
		floorOcclusion *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
  installed = true;
}

const LIT = (m) => m && (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial || m.isMeshLambertMaterial || m.isMeshPhongMaterial || m.isMeshToonMaterial);

// Bake how many leading directional lights are shadow-only floor volumes.
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
    }
  });
}

// Straight down, so storeys do not overlap in light-space depth the way an
// angled sun does across a wide plan. `above` / `below` are metres of the
// volume relative to the floor plane.
export function createFloorShadowLight({
  floorY, cx, cz, width, depth,
  lightHeight = 8,
  above = 2.9,
  below = 0.42,
  pad = 1.5,
  mapSize = 2048,
}) {
  const light = new THREE.DirectionalLight(0xffffff, 0);
  light.castShadow = true;
  light.shadow.mapSize.set(mapSize, mapSize);
  // Bias is in 0..1 shadow-map units. The volume is only a few metres deep,
  // so a whole-building bias would be a couple of millimetres and acne.
  light.shadow.bias = -0.0025;
  light.shadow.normalBias = 0.035;
  // Looking straight down is parallel to the default camera up.
  light.shadow.camera.up.set(0, 0, -1);
  light.position.set(cx, floorY + lightHeight, cz);
  light.target.position.set(cx, floorY, cz);
  const sc = light.shadow.camera;
  sc.left = -width / 2 - pad;
  sc.right = width / 2 + pad;
  sc.top = depth / 2 + pad;
  sc.bottom = -depth / 2 - pad;
  sc.near = Math.max(0.1, lightHeight - above);
  sc.far = lightHeight + below;
  sc.updateProjectionMatrix();
  return light;
}

// Shadow-casting directionals must come first in the scene graph. Three.js
// lines their shadow maps up with that same index.
export function mountFloorShadowLights(scene, lights, sun) {
  scene.remove(sun, sun.target);
  for (const light of lights) scene.add(light, light.target);
  scene.add(sun, sun.target);
}

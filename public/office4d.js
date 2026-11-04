var Fm=0,cf=1,Um=2;var Js=1,Om=2,to=3,$n=0,an=1,je=2,Kn=0,eo=1,hf=2,uf=3,Pa=4,Bm=5;var js=100,km=101,zm=102,Hm=103,Gm=104,Vm=200,Wm=201,qm=202,Xm=203,ff=204,df=205,Ym=206,$m=207,Km=208,Zm=209,Jm=210,jm=211,Qm=212,t0=213,e0=214,Ql=0,tc=1,ec=2,Dr=3,nc=4,ic=5,sc=6,rc=7,Pc=0,n0=1,i0=2,hi=0,La=1,Na=2,Da=3,Qs=4,Fa=5,Ua=6,Oa=7,qu="attached",s0="detached",pf=300,ps=301,tr=302,Lc=303,Nc=304,Ba=306,Xn=1e3,Wn=1001,Fr=1002,Ve=1003,Dc=1004;var er=1005;var Ue=1006,no=1007;var Un=1008;var An=1009,mf=1010,gf=1011,io=1012,Fc=1013,ui=1014,On=1015,Ke=1016,Uc=1017,Oc=1018,so=1020,xf=35902,_f=35899,yf=1021,vf=1022,Bn=1023,Mi=1026,ms=1027,Bc=1028,kc=1029,gs=1030,zc=1031;var Hc=1033,ka=33776,za=33777,Ha=33778,Ga=33779,Gc=35840,Vc=35841,Wc=35842,qc=35843,Xc=36196,Yc=37492,$c=37496,Kc=37488,Zc=37489,Va=37490,Jc=37491,jc=37808,Qc=37809,th=37810,eh=37811,nh=37812,ih=37813,sh=37814,rh=37815,oh=37816,ah=37817,lh=37818,ch=37819,hh=37820,uh=37821,fh=36492,dh=36494,ph=36495,mh=36283,gh=36284,Wa=36285,xh=36286;var Bs=2300,ks=2301,Zl=2302,Xu=2303,Yu=2400,$u=2401,Ku=2402,r0=2500;var Mf=0,qa=1,ro=2,o0=3200;var Xa=0,a0=1,Xi="",ne="srgb",on="srgb-linear",Zo="linear",_e="srgb";var Jl=7680;var l0=519,c0=512,h0=513,u0=514,_h=515,f0=516,d0=517,yh=518,p0=519,bf=35044;var Sf="300 es",li=2e3,Ur=2001;function G_(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function V_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function m0(){let i=Or("canvas");return i.style.display="block",i}var Gp={},Br=null;function Jo(...i){let t="THREE."+i.shift();Br?Br("log",t,...i):console.log(t,...i)}function g0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Lt(...i){i=g0(i);let t="THREE."+i.shift();if(Br)Br("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=g0(i);let t="THREE."+i.shift();if(Br)Br("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Os(...i){let t=i.join(" ");t in Gp||(Gp[t]=!0,Lt(...i))}function x0(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _0={[Ql]:tc,[ec]:sc,[nc]:rc,[Dr]:ic,[tc]:Ql,[sc]:ec,[rc]:nc,[ic]:Dr},bi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vp=1234567,Xo=Math.PI/180,zs=180/Math.PI;function qn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function wf(i,t){return(i%t+t)%t}function W_(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function q_(i,t,e){return i!==t?(e-i)/(t-i):0}function Yo(i,t,e){return(1-e)*i+e*t}function X_(i,t,e,n){return Yo(i,t,1-Math.exp(-e*n))}function Y_(i,t=1){return t-Math.abs(wf(i,t*2)-t)}function $_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function K_(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Z_(i,t){return i+Math.floor(Math.random()*(t-i+1))}function J_(i,t){return i+Math.random()*(t-i)}function j_(i){return i*(.5-Math.random())}function Q_(i){i!==void 0&&(Vp=i);let t=Vp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ty(i){return i*Xo}function ey(i){return i*zs}function ny(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function iy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ry(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:Lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var oo={DEG2RAD:Xo,RAD2DEG:zs,generateUUID:qn,clamp:re,euclideanModulo:wf,mapLinear:W_,inverseLerp:q_,lerp:Yo,damp:X_,pingpong:Y_,smoothstep:$_,smootherstep:K_,randInt:Z_,randFloat:J_,randFloatSpread:j_,seededRandom:Q_,degToRad:ty,radToDeg:ey,isPowerOfTwo:ny,ceilPowerOfTwo:iy,floorPowerOfTwo:sy,setQuaternionFromProperEuler:ry,normalize:Ae,denormalize:ai},If=class If{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};If.prototype.isVector2=!0;var tt=If,dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Lt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pf=class Pf{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xu.copy(this).projectOnVector(t),this.sub(xu)}reflect(t){return this.sub(xu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pf.prototype.isVector3=!0;var I=Pf,xu=new I,Wp=new dn,Lf=class Lf{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],w=s[4],v=s[7],S=s[2],b=s[5],A=s[8];return r[0]=o*x+a*y+l*S,r[3]=o*m+a*w+l*b,r[6]=o*g+a*v+l*A,r[1]=c*x+h*y+u*S,r[4]=c*m+h*w+u*b,r[7]=c*g+h*v+u*A,r[2]=f*x+d*y+p*S,r[5]=f*m+d*w+p*b,r[8]=f*g+d*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_u.makeScale(t,e)),this}rotate(t){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_u.makeRotation(-t)),this}translate(t,e){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_u.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;var jt=Lf,_u=new jt,qp=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){let i={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(s.r=Nr(s.r),s.g=Nr(s.g),s.b=Nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xi?Zo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[on]:{primaries:t,whitePoint:n,transfer:Zo,toXYZ:qp,fromXYZ:Xp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ne},outputColorSpaceConfig:{drawingBufferColorSpace:ne}},[ne]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:qp,fromXYZ:Xp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ne}}}),i}var ee=oy();function ki(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mr,oc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mr===void 0&&(mr=Or("canvas")),mr.width=t.width,mr.height=t.height;let s=mr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=mr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Or("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ki(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ki(e[n]/255)*255):e[n]=ki(e[n]);return{data:e,width:t.width,height:t.height}}else return Lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ay=0,kr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yu(s[o].image)):r.push(yu(s[o]))}else r=yu(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function yu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Lt("Texture: Unable to serialize Texture."),{})}var ly=0,vu=new I,Ze=class i extends bi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=Ue,o=Un,a=Bn,l=An,c=i.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=qn(),this.name="",this.source=new kr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vu).x}get height(){return this.source.getSize(vu).y}get depth(){return this.source.getSize(vu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Lt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xn:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case Fr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xn:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case Fr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=pf;Ze.DEFAULT_ANISOTROPY=1;var Nf=class Nf{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(d+1)/2,S=(g+1)/2,b=(h+f)/4,A=(u+x)/4,_=(p+m)/4;return w>v&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=A/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nf.prototype.isVector4=!0;var xe=Nf,ac=class extends bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ze(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new kr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Be=class extends ac{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jo=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lc=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ic=class Ic{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ic().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/gr.setFromMatrixColumn(t,0).length(),r=1/gr.setFromMatrixColumn(t,1).length(),o=1/gr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cy,t,hy)}lookAt(t,e,n){let s=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ns.crossVectors(n,Pn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ns.crossVectors(n,Pn)),ns.normalize(),vl.crossVectors(Pn,ns),s[0]=ns.x,s[4]=vl.x,s[8]=Pn.x,s[1]=ns.y,s[5]=vl.y,s[9]=Pn.y,s[2]=ns.z,s[6]=vl.z,s[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],w=n[7],v=n[11],S=n[15],b=s[0],A=s[4],_=s[8],E=s[12],R=s[1],P=s[5],L=s[9],k=s[13],D=s[2],B=s[6],X=s[10],$=s[14],rt=s[3],K=s[7],et=s[11],z=s[15];return r[0]=o*b+a*R+l*D+c*rt,r[4]=o*A+a*P+l*B+c*K,r[8]=o*_+a*L+l*X+c*et,r[12]=o*E+a*k+l*$+c*z,r[1]=h*b+u*R+f*D+d*rt,r[5]=h*A+u*P+f*B+d*K,r[9]=h*_+u*L+f*X+d*et,r[13]=h*E+u*k+f*$+d*z,r[2]=p*b+x*R+m*D+g*rt,r[6]=p*A+x*P+m*B+g*K,r[10]=p*_+x*L+m*X+g*et,r[14]=p*E+x*k+m*$+g*z,r[3]=y*b+w*R+v*D+S*rt,r[7]=y*A+w*P+v*B+S*K,r[11]=y*_+w*L+v*X+S*et,r[15]=y*E+w*k+v*$+S*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*d-c*f,w=a*d-c*u,v=a*f-l*u,S=o*d-c*h,b=o*f-l*h,A=o*u-a*h;return e*(x*y-m*w+g*v)-n*(p*y-m*S+g*b)+s*(p*w-x*S+g*A)-r*(p*v-x*b+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-n*o,w=e*l-s*o,v=e*c-r*o,S=n*l-s*a,b=n*c-r*a,A=s*c-r*l,_=h*x-u*p,E=h*m-f*p,R=h*g-d*p,P=u*m-f*x,L=u*g-d*x,k=f*g-d*m,D=y*k-w*L+v*P+S*R-b*E+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(a*k-l*L+c*P)*B,t[1]=(s*L-n*k-r*P)*B,t[2]=(x*A-m*b+g*S)*B,t[3]=(f*b-u*A-d*S)*B,t[4]=(l*R-o*k-c*E)*B,t[5]=(e*k-s*R+r*E)*B,t[6]=(m*v-p*A-g*w)*B,t[7]=(h*A-f*v+d*w)*B,t[8]=(o*L-a*R+c*_)*B,t[9]=(n*R-e*L-r*_)*B,t[10]=(p*b-x*v+g*y)*B,t[11]=(u*v-h*b-d*y)*B,t[12]=(a*E-o*P-l*_)*B,t[13]=(e*P-n*E+s*_)*B,t[14]=(x*w-p*S-m*y)*B,t[15]=(h*S-u*w+f*y)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,w=l*h,v=l*u,S=n.x,b=n.y,A=n.z;return s[0]=(1-(x+g))*S,s[1]=(d+v)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+g))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(p+w)*A,s[9]=(m-y)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=gr.set(s[0],s[1],s[2]).length(),a=gr.set(s[4],s[5],s[6]).length(),l=gr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),si.copy(this);let c=1/o,h=1/a,u=1/l;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,e.setFromRotationMatrix(si),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=li,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===li)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ur)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=li,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===li)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ur)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ic.prototype.isMatrix4=!0;var Yt=Ic,gr=new I,si=new Yt,cy=new I(0,0,0),hy=new I(1,1,1),ns=new I,vl=new I,Pn=new I,Yp=new Yt,$p=new dn,Si=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $p.setFromEuler(this),this.setFromQuaternion($p,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uy=0,Kp=new I,xr=new dn,Li=new Yt,Ml=new I,Do=new I,fy=new I,dy=new dn,Zp=new I(1,0,0),Jp=new I(0,1,0),jp=new I(0,0,1),Qp={type:"added"},py={type:"removed"},_r={type:"childadded",child:null},Mu={type:"childremoved",child:null},ve=class i extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Si,n=new dn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new jt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.multiply(xr),this}rotateOnWorldAxis(t,e){return xr.setFromAxisAngle(t,e),this.quaternion.premultiply(xr),this}rotateX(t){return this.rotateOnAxis(Zp,t)}rotateY(t){return this.rotateOnAxis(Jp,t)}rotateZ(t){return this.rotateOnAxis(jp,t)}translateOnAxis(t,e){return Kp.copy(t).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zp,t)}translateY(t){return this.translateOnAxis(Jp,t)}translateZ(t){return this.translateOnAxis(jp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ml.copy(t):Ml.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Do,Ml,this.up):Li.lookAt(Ml,Do,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),xr.setFromRotationMatrix(Li),this.quaternion.premultiply(xr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qp),_r.child=t,this.dispatchEvent(_r),_r.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(py),Mu.child=t,this.dispatchEvent(Mu),Mu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Li.multiply(t.parent.matrixWorld)),t.applyMatrix4(Li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qp),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,fy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,dy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ve.DEFAULT_UP=new I(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oe=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},my={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(my)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},bl={h:0,s:0,l:0};function bu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=wf(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=bu(o,r,t+1/3),this.g=bu(o,r,t),this.b=bu(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=ne){function n(r){r!==void 0&&parseFloat(r)<1&&Lt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Lt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Lt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ne){let n=y0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Lt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ki(t.r),this.g=ki(t.g),this.b=ki(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ne){return ee.workingToColorSpace(fn.copy(this),t),Math.round(re(fn.r*255,0,255))*65536+Math.round(re(fn.g*255,0,255))*256+Math.round(re(fn.b*255,0,255))}getHexString(t=ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(fn.copy(this),e);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=ne){ee.workingToColorSpace(fn.copy(this),t);let e=fn.r,n=fn.g,s=fn.b;return t!==ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(is),this.setHSL(is.h+t,is.s+e,is.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(is),t.getHSL(bl);let n=Yo(is.h,bl.h,e),s=Yo(is.s,bl.s,e),r=Yo(is.l,bl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new dt;dt.NAMES=y0;var Hs=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ri=new I,Ni=new I,Su=new I,Di=new I,yr=new I,vr=new I,tm=new I,wu=new I,Eu=new I,Tu=new I,Au=new xe,Ru=new xe,Cu=new xe,Bi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ri.subVectors(t,e),s.cross(ri);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ri.subVectors(s,e),Ni.subVectors(n,e),Su.subVectors(t,e);let o=ri.dot(ri),a=ri.dot(Ni),l=ri.dot(Su),c=Ni.dot(Ni),h=Ni.dot(Su),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Au.setScalar(0),Ru.setScalar(0),Cu.setScalar(0),Au.fromBufferAttribute(t,e),Ru.fromBufferAttribute(t,n),Cu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Au,r.x),o.addScaledVector(Ru,r.y),o.addScaledVector(Cu,r.z),o}static isFrontFacing(t,e,n,s){return ri.subVectors(n,e),Ni.subVectors(t,e),ri.cross(Ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ri.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ri.cross(Ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;yr.subVectors(s,n),vr.subVectors(r,n),wu.subVectors(t,n);let l=yr.dot(wu),c=vr.dot(wu);if(l<=0&&c<=0)return e.copy(n);Eu.subVectors(t,s);let h=yr.dot(Eu),u=vr.dot(Eu);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(yr,o);Tu.subVectors(t,r);let d=yr.dot(Tu),p=vr.dot(Tu);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(vr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return tm.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(tm,a);let g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(yr,o).addScaledVector(vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},We=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(t.matrixWorld),this.expandByPoint(oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sl.copy(n.boundingBox)),Sl.applyMatrix4(t.matrixWorld),this.union(Sl)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,oi),oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fo),wl.subVectors(this.max,Fo),Mr.subVectors(t.a,Fo),br.subVectors(t.b,Fo),Sr.subVectors(t.c,Fo),ss.subVectors(br,Mr),rs.subVectors(Sr,br),Ns.subVectors(Mr,Sr);let e=[0,-ss.z,ss.y,0,-rs.z,rs.y,0,-Ns.z,Ns.y,ss.z,0,-ss.x,rs.z,0,-rs.x,Ns.z,0,-Ns.x,-ss.y,ss.x,0,-rs.y,rs.x,0,-Ns.y,Ns.x,0];return!Iu(e,Mr,br,Sr,wl)||(e=[1,0,0,0,1,0,0,0,1],!Iu(e,Mr,br,Sr,wl))?!1:(El.crossVectors(ss,rs),e=[El.x,El.y,El.z],Iu(e,Mr,br,Sr,wl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Fi=[new I,new I,new I,new I,new I,new I,new I,new I],oi=new I,Sl=new We,Mr=new I,br=new I,Sr=new I,ss=new I,rs=new I,Ns=new I,Fo=new I,wl=new I,El=new I,Ds=new I;function Iu(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ds.fromArray(i,r);let a=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=t.dot(Ds),c=e.dot(Ds),h=n.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var $e=new I,Tl=new tt,gy=0,ze=class extends bi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bf,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tl.fromBufferAttribute(this,e),Tl.applyMatrix3(t),this.setXY(e,Tl.x,Tl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix3(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qo=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ta=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},xy=new We,Uo=new I,Pu=new I,En=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xy.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);let e=Uo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Uo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(Pu)),this.expandByPoint(Uo.copy(t.center).sub(Pu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},_y=0,Vn=new Yt,Lu=new ve,wr=new I,Ln=new We,Oo=new We,en=new I,ye=class i extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(G_(t)?ta:Qo)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Vn.makeRotationFromQuaternion(t),this.applyMatrix4(Vn),this}rotateX(t){return Vn.makeRotationX(t),this.applyMatrix4(Vn),this}rotateY(t){return Vn.makeRotationY(t),this.applyMatrix4(Vn),this}rotateZ(t){return Vn.makeRotationZ(t),this.applyMatrix4(Vn),this}translate(t,e,n){return Vn.makeTranslation(t,e,n),this.applyMatrix4(Vn),this}scale(t,e,n){return Vn.makeScale(t,e,n),this.applyMatrix4(Vn),this}lookAt(t){return Lu.lookAt(t),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new We);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Oo.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Ln.min,Oo.min),Ln.expandByPoint(en),en.addVectors(Ln.max,Oo.max),Ln.expandByPoint(en)):(Ln.expandByPoint(Oo.min),Ln.expandByPoint(Oo.max))}Ln.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)en.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(en));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)en.fromBufferAttribute(a,c),l&&(wr.fromBufferAttribute(t,c),en.add(wr)),s=Math.max(s,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;let c=new I,h=new I,u=new I,f=new tt,d=new tt,p=new tt,x=new I,m=new I;function g(_,E,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[_].add(x),a[E].add(x),a[R].add(x),l[_].add(m),l[E].add(m),l[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,E=y.length;_<E;++_){let R=y[_],P=R.start,L=R.count;for(let k=P,D=P+L;k<D;k+=3)g(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new I,v=new I,S=new I,b=new I;function A(_){S.fromBufferAttribute(s,_),b.copy(S);let E=a[_];w.copy(E),w.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(b,E);let P=v.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,E=y.length;_<E;++_){let R=y[_],P=R.start,L=R.count;for(let k=P,D=P+L;k<D;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)en.fromBufferAttribute(t,e),en.normalize(),t.setXYZ(e,en.x,en.y,en.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new ze(f,h,u)}if(this.index===null)return Lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gs=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=bf,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Mn=new I,ls=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ai(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Jo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Jo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nu=new I,yy=new I,vy=new jt,Nn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Nu.subVectors(n,e).cross(yy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||vy.getNormalMatrix(t),s=this.coplanarPoint(Nu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},My=0,pn=class extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=eo,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=df,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jl,this.stencilZFail=Jl,this.stencilZPass=Jl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Lt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Lt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Nn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new tt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Gr=class extends pn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Er,Bo=new I,Tr=new I,Ar=new I,Rr=new tt,ko=new tt,v0=new Yt,Al=new I,zo=new I,Rl=new I,em=new tt,Du=new tt,nm=new tt,ea=class extends ve{constructor(t=new Gr){if(super(),this.isSprite=!0,this.type="Sprite",Er===void 0){Er=new ye;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Gs(e,5);Er.setIndex([0,1,2,0,2,3]),Er.setAttribute("position",new ls(n,3,0,!1)),Er.setAttribute("uv",new ls(n,2,3,!1))}this.geometry=Er,this.material=t,this.center=new tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Tr.setFromMatrixScale(this.matrixWorld),v0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ar.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Tr.multiplyScalar(-Ar.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Cl(Al.set(-.5,-.5,0),Ar,o,Tr,s,r),Cl(zo.set(.5,-.5,0),Ar,o,Tr,s,r),Cl(Rl.set(.5,.5,0),Ar,o,Tr,s,r),em.set(0,0),Du.set(1,0),nm.set(1,1);let a=t.ray.intersectTriangle(Al,zo,Rl,!1,Bo);if(a===null&&(Cl(zo.set(-.5,.5,0),Ar,o,Tr,s,r),Du.set(0,1),a=t.ray.intersectTriangle(Al,Rl,zo,!1,Bo),a===null))return;let l=t.ray.origin.distanceTo(Bo);l<t.near||l>t.far||e.push({distance:l,point:Bo.clone(),uv:Bi.getInterpolation(Bo,Al,zo,Rl,em,Du,nm,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Cl(i,t,e,n,s,r){Rr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ko.x=r*Rr.x-s*Rr.y,ko.y=s*Rr.x+r*Rr.y):ko.copy(Rr),i.copy(t),i.x+=ko.x,i.y+=ko.y,i.applyMatrix4(v0)}var Ui=new I,Fu=new I,Il=new I,Pl=new I,cs=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fu.copy(t).add(e).multiplyScalar(.5),Il.copy(e).sub(t).normalize(),Pl.copy(this.origin).sub(Fu);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Il),a=Pl.dot(this.direction),l=-Pl.dot(Il),c=Pl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fu).addScaledVector(Il,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(h),A,_,E,R,P,L,k,D,B,X,$,rt;if(v>=S&&v>=b?(E=l,L=u,B=p,rt=g,l>=0?(A=c,_=h,R=f,P=d,k=x,D=m,X=y,$=w):(A=h,_=c,R=d,P=f,k=m,D=x,X=w,$=y)):S>=b?(E=c,L=f,B=x,rt=y,c>=0?(A=h,_=l,R=d,P=u,k=m,D=p,X=w,$=g):(A=l,_=h,R=u,P=d,k=p,D=m,X=g,$=w)):(E=h,L=d,B=m,rt=w,h>=0?(A=l,_=c,R=u,P=f,k=p,D=x,X=g,$=y):(A=c,_=l,R=f,P=u,k=x,D=p,X=y,$=g)),E===0)return null;let K=A/E,et=_/E,z=1/E,ot=R-K*L,at=P-et*L,Dt=k-K*B,Ht=D-et*B,Jt=X-K*rt,Z=$-et*rt,Q=Jt*Ht-Z*Dt,pt=ot*Z-at*Jt,Ft=Dt*at-Ht*ot;if(s){if(Q<0||pt<0||Ft<0)return null}else if((Q<0||pt<0||Ft<0)&&(Q>0||pt>0||Ft>0))return null;let Tt=Q+pt+Ft;if(Tt===0)return null;let $t=z*(Q*L+pt*B+Ft*rt);return(Tt>0?$t<0:$t>0)?null:this.at($t/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Me=class extends pn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},im=new Yt,Fs=new cs,Ll=new En,sm=new I,Nl=new I,Dl=new I,Fl=new I,Uu=new I,Ul=new I,rm=new I,Ol=new I,Bt=class extends ve{constructor(t=new ye,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ul.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Uu.fromBufferAttribute(u,t),o?Ul.addScaledVector(Uu,h):Ul.addScaledVector(Uu.sub(e),h))}e.add(Ul)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(r),Fs.copy(t.ray).recast(t.near),!(Ll.containsPoint(Fs.origin)===!1&&(Fs.intersectSphere(Ll,sm)===null||Fs.origin.distanceToSquared(sm)>(t.far-t.near)**2))&&(im.copy(r).invert(),Fs.copy(t.ray).applyMatrix4(im),!(n.boundingBox!==null&&Fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=w;v<S;v+=3){let b=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);s=Bl(this,g,t,n,c,h,u,b,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=Bl(this,o,t,n,c,h,u,y,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=w;v<S;v+=3){let b=v,A=v+1,_=v+2;s=Bl(this,g,t,n,c,h,u,b,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,v=m+2;s=Bl(this,o,t,n,c,h,u,y,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function by(i,t,e,n,s,r,o,a){let l;if(t.side===an?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===$n,a),l===null)return null;Ol.copy(a),Ol.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ol);return c<e.near||c>e.far?null:{distance:c,point:Ol.clone(),object:i}}function Bl(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Nl),i.getVertexPosition(l,Dl),i.getVertexPosition(c,Fl);let h=by(i,t,e,n,Nl,Dl,Fl,rm);if(h){let u=new I;Bi.getBarycoord(rm,Nl,Dl,Fl,u),s&&(h.uv=Bi.getInterpolatedAttribute(s,a,l,c,u,new tt)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,a,l,c,u,new tt)),o&&(h.normal=Bi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Bi.getNormal(Nl,Dl,Fl,f.normal),h.face=f,h.barycoord=u}return h}var Ho=new xe,om=new xe,am=new xe,Sy=new xe,lm=new Yt,kl=new I,Ou=new En,cm=new Yt,Bu=new cs,na=class extends Bt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qu,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new We),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,kl),this.boundingBox.expandByPoint(kl)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new En),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,kl),this.boundingSphere.expandByPoint(kl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ou.copy(this.boundingSphere),Ou.applyMatrix4(s),t.ray.intersectsSphere(Ou)!==!1&&(cm.copy(s).invert(),Bu.copy(t.ray).applyMatrix4(cm),!(this.boundingBox!==null&&Bu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Bu)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new xe,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===qu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Lt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;om.fromBufferAttribute(s.attributes.skinIndex,t),am.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Ho.copy(e),e.set(0,0,0,0)):(Ho.set(...e,1),e.set(0,0,0)),Ho.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=am.getComponent(r);if(o!==0){let a=om.getComponent(r);lm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Sy.copy(Ho).applyMatrix4(lm),o)}}return e.isVector4&&(e.w=Ho.w),e.applyMatrix4(this.bindMatrixInverse)}},Vr=class extends ve{constructor(){super(),this.isBone=!0,this.type="Bone"}},Wr=class extends Ze{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ve,h=Ve,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hm=new Yt,wy=new Yt,ia=class i{constructor(t=[],e=[]){this.uuid=qn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Lt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:wy;hm.multiplyMatrices(a,e[r]),hm.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Wr(e,t,t,Bn,On);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(Lt("Skeleton: No bone found with UUID:",r),o=new Vr),this.bones.push(o),this.boneInverses.push(new Yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},zi=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Cr=new Yt,um=new Yt,zl=[],fm=new We,Ey=new Yt,Go=new Bt,Vo=new En,Vs=class extends Bt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Ey)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new We),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),fm.copy(t.boundingBox).applyMatrix4(Cr),this.boundingBox.union(fm)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Cr),Vo.copy(t.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(Vo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(n),t.ray.intersectsSphere(Vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cr),um.multiplyMatrices(n,Cr),Go.matrixWorld=um,Go.raycast(t,zl);for(let o=0,a=zl.length;o<a;o++){let l=zl[o];l.instanceId=r,l.object=this,e.push(l)}zl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,Bc,On));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Us=new En,Ty=new tt(.5,.5),Hl=new I,qr=class{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],w=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,g-p,S-y).normalize(),s[1].setComponents(c+o,d+h,g+p,S+y).normalize(),s[2].setComponents(c+a,d+u,g+x,S+w).normalize(),s[3].setComponents(c-a,d-u,g-x,S-w).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,g-m,S-v).normalize();else if(s[4].setComponents(c-l,d-f,g-m,S-v).normalize(),e===li)s[5].setComponents(c+l,d+f,g+m,S+v).normalize();else if(e===Ur)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){Us.center.set(0,0,0);let e=Ty.distanceTo(t.center);return Us.radius=.7071067811865476+e,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hl.x=s.normal.x>0?t.max.x:t.min.x,Hl.y=s.normal.y>0?t.max.y:t.min.y,Hl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xr=class extends pn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},cc=new I,hc=new I,dm=new Yt,Wo=new cs,Gl=new En,ku=new I,pm=new I,Ws=class extends ve{constructor(t=new ye,e=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)cc.fromBufferAttribute(e,s-1),hc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=cc.distanceTo(hc);t.setAttribute("lineDistance",new Zt(n,1))}else Lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gl.copy(n.boundingSphere),Gl.applyMatrix4(s),Gl.radius+=r,t.ray.intersectsSphere(Gl)===!1)return;dm.copy(s).invert(),Wo.copy(t.ray).applyMatrix4(dm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),w=Vl(this,t,Wo,l,g,y,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=Vl(this,t,Wo,l,x,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=Vl(this,t,Wo,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Vl(this,t,Wo,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vl(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(cc.fromBufferAttribute(a,s),hc.fromBufferAttribute(a,r),e.distanceSqToSegment(cc,hc,ku,pm)>n)return;ku.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ku);if(!(c<t.near||c>t.far))return{distance:c,point:pm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var mm=new I,gm=new I,sa=class extends Ws{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mm.fromBufferAttribute(e,s),gm.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mm.distanceTo(gm);t.setAttribute("lineDistance",new Zt(n,1))}else Lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ra=class extends Ws{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Yr=class extends pn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xm=new Yt,Zu=new cs,Wl=new En,ql=new I,oa=class extends ve{constructor(t=new ye,e=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(s),Wl.radius+=r,t.ray.intersectsSphere(Wl)===!1)return;xm.copy(s).invert(),Zu.copy(t.ray).applyMatrix4(xm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);ql.fromBufferAttribute(u,m),_m(ql,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)ql.fromBufferAttribute(u,p),_m(ql,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _m(i,t,e,n,s,r,o){let a=Zu.distanceSqToPoint(i);if(a<e){let l=new I;Zu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var aa=class extends Ze{constructor(t=[],e=ps,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ci=class extends Ze{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var hs=class extends Ze{constructor(t,e,n=ui,s,r,o,a=Ve,l=Ve,c,h=Mi,u=1){if(h!==Mi&&h!==ms)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},uc=class extends hs{constructor(t,e=ui,n=ps,s,r,o=Ve,a=Ve,l,c=Mi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},la=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mn=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function p(x,m,g,y,w,v,S,b,A,_,E){let R=v/A,P=S/_,L=v/2,k=S/2,D=b/2,B=A+1,X=_+1,$=0,rt=0,K=new I;for(let et=0;et<X;et++){let z=et*P-k;for(let ot=0;ot<B;ot++){let at=ot*R-L;K[x]=at*y,K[m]=z*w,K[g]=D,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=b>0?1:-1,h.push(K.x,K.y,K.z),u.push(ot/A),u.push(1-et/_),$+=1}}for(let et=0;et<_;et++)for(let z=0;z<A;z++){let ot=f+z+B*et,at=f+z+B*(et+1),Dt=f+(z+1)+B*(et+1),Ht=f+(z+1)+B*et;l.push(ot,at,Ht),l.push(at,Dt,Ht),rt+=6}a.addGroup(d,rt,E),d+=rt,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ca=class i extends ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=n*2+r,x=s+1,m=new I,g=new I;for(let y=0;y<=p;y++){let w=0,v=0,S=0,b=0;if(y<=n){let E=y/n,R=E*Math.PI/2;v=-h-t*Math.cos(R),S=t*Math.sin(R),b=-t*Math.cos(R),w=E*u}else if(y<=n+r){let E=(y-n)/r;v=-h+E*e,S=t,b=0,w=u+E*f}else{let E=(y-n-r)/n,R=E*Math.PI/2;v=h+t*Math.sin(R),S=t*Math.cos(R),b=t*Math.sin(R),w=u+f+E*u}let A=Math.max(0,Math.min(1,w/d)),_=0;y===0?_=.5/s:y===p&&(_=-.5/s);for(let E=0;E<=s;E++){let R=E/s,P=R*Math.PI*2,L=Math.sin(P),k=Math.cos(P);g.x=-S*k,g.y=v,g.z=S*L,a.push(g.x,g.y,g.z),m.set(-S*k,b,S*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+_,A)}if(y>0){let E=(y-1)*x;for(let R=0;R<s;R++){let P=E+R,L=E+R+1,k=y*x+R,D=y*x+R+1;o.push(P,L,k),o.push(L,D,k)}}}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ha=class i extends ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Dn=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(d,2));function y(){let v=new I,S=new I,b=0,A=(e-t)/n;for(let _=0;_<=r;_++){let E=[],R=_/r,P=R*(e-t)+t;for(let L=0;L<=s;L++){let k=L/s,D=k*l+a,B=Math.sin(D),X=Math.cos(D);S.x=P*B,S.y=-R*n+m,S.z=P*X,u.push(S.x,S.y,S.z),v.set(B,A,X).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-R),E.push(p++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let R=x[E][_],P=x[E+1][_],L=x[E+1][_+1],k=x[E][_+1];(t>0||E!==0)&&(h.push(R,P,k),b+=3),(e>0||E!==r-1)&&(h.push(P,L,k),b+=3)}c.addGroup(g,b,0),g+=b}function w(v){let S=p,b=new tt,A=new I,_=0,E=v===!0?t:e,R=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let L=0;L<=s;L++){let D=L/s*l+a,B=Math.cos(D),X=Math.sin(D);A.x=E*X,A.y=m*R,A.z=E*B,u.push(A.x,A.y,A.z),f.push(0,R,0),b.x=B*.5+.5,b.y=X*.5*R+.5,d.push(b.x,b.y),p++}for(let L=0;L<s;L++){let k=S+L,D=P+L;v===!0?h.push(D,D+1,k):h.push(D+1,D,k),_+=3}c.addGroup(g,_,v===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fc=class i extends ye{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new I,v=new I,S=new I;for(let b=0;b<e.length;b+=3)d(e[b+0],w),d(e[b+1],v),d(e[b+2],S),l(w,v,S,y)}function l(y,w,v,S){let b=S+1,A=[];for(let _=0;_<=b;_++){A[_]=[];let E=y.clone().lerp(v,_/b),R=w.clone().lerp(v,_/b),P=b-_;for(let L=0;L<=P;L++)L===0&&_===b?A[_][L]=E:A[_][L]=E.clone().lerp(R,L/P)}for(let _=0;_<b;_++)for(let E=0;E<2*(b-_)-1;E++){let R=Math.floor(E/2);E%2===0?(f(A[_][R+1]),f(A[_+1][R]),f(A[_][R])):(f(A[_][R+1]),f(A[_+1][R+1]),f(A[_+1][R]))}}function c(y){let w=new I;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(y),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let y=new I;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let v=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(v,1-S)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let w=o[y+0],v=o[y+2],S=o[y+4],b=Math.max(w,v,S),A=Math.min(w,v,S);b>.9&&A<.1&&(w<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,w){let v=y*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function p(){let y=new I,w=new I,v=new I,S=new I,b=new tt,A=new tt,_=new tt;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),b.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),S.copy(y).add(w).add(v).divideScalar(3);let P=m(S);x(b,R+0,y,P),x(A,R+2,w,P),x(_,R+4,v,P)}}function x(y,w,v,S){S<0&&y.x===1&&(o[w]=y.x-1),v.x===0&&v.z===0&&(o[w]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Lt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new tt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new Yt;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(re(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(re(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$r=class extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},dc=class extends $r{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ef(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var ym=new I,vm=new I,zu=new Ef,Hu=new Ef,Gu=new Ef,pc=class extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(vm.subVectors(s[0],s[1]).add(s[0]),c=vm);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ym.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ym),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),zu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),Hu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),Gu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(zu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Hu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Gu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(zu.calc(l),Hu.calc(l),Gu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Mm(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Ay(i,t){let e=1-i;return e*e*t}function Ry(i,t){return 2*(1-i)*i*t}function Cy(i,t){return i*i*t}function $o(i,t,e,n){return Ay(i,t)+Ry(i,e)+Cy(i,n)}function Iy(i,t){let e=1-i;return e*e*e*t}function Py(i,t){let e=1-i;return 3*e*e*i*t}function Ly(i,t){return 3*(1-i)*i*i*t}function Ny(i,t){return i*i*i*t}function Ko(i,t,e,n,s){return Iy(i,t)+Py(i,e)+Ly(i,n)+Ny(i,s)}var ua=class extends Fn{constructor(t=new tt,e=new tt,n=new tt,s=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(t,s.x,r.x,o.x,a.x),Ko(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mc=class extends Fn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(t,s.x,r.x,o.x,a.x),Ko(t,s.y,r.y,o.y,a.y),Ko(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends Fn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gc=class extends Fn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends Fn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($o(t,s.x,r.x,o.x),$o(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xc=class extends Fn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($o(t,s.x,r.x,o.x),$o(t,s.y,r.y,o.y),$o(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Mm(a,l.x,c.x,h.x,u.x),Mm(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new tt().fromArray(s))}return this}},Ju=Object.freeze({__proto__:null,ArcCurve:dc,CatmullRomCurve3:pc,CubicBezierCurve:ua,CubicBezierCurve3:mc,EllipseCurve:$r,LineCurve:fa,LineCurve3:gc,QuadraticBezierCurve:da,QuadraticBezierCurve3:xc,SplineCurve:pa}),_c=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ju[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ju[s.type]().fromJSON(s))}return this}},ma=class extends _c{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new fa(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new da(this.currentPoint.clone(),new tt(t,e),new tt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ua(this.currentPoint.clone(),new tt(t,e),new tt(n,s),new tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new pa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new $r(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},us=class extends ma{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new ma().fromJSON(s))}return this}};function Dy(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=M0(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ky(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ga(r,o,e,a,l,c,0),o}function M0(i,t,e,n,s){let r;if(s===Zy(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=bm(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=bm(o/n|0,i[o],i[o+1],r);return r&&Kr(r,r.next)&&(_a(r),r=r.next),r}function qs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Kr(e,e.next)||Oe(e.prev,e,e.next)===0)){if(_a(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ga(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Wy(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Uy(i,n,s,r):Fy(i)){t.push(l.i,i.i,c.i),_a(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Oy(qs(i),t),ga(i,t,e,n,s,r,2)):o===2&&By(i,t,e,n,s,r):ga(qs(i),t,e,n,s,r,1);break}}}function Fy(i){let t=i.prev,e=i,n=i.next;if(Oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&qo(s,a,r,l,o,c,p.x,p.y)&&Oe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Uy(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Oe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),g=ju(d,p,t,e,n),y=ju(x,m,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=g&&v&&v.z<=y;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&qo(a,h,l,u,c,f,w.x,w.y)&&Oe(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&qo(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&qo(a,h,l,u,c,f,w.x,w.y)&&Oe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&qo(a,h,l,u,c,f,v.x,v.y)&&Oe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Oy(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Kr(n,s)&&S0(n,e,e.next,s)&&xa(n,s)&&xa(s,n)&&(t.push(n.i,e.i,s.i),_a(e),_a(e.next),e=i=s),e=e.next}while(e!==i);return qs(e)}function By(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yy(o,a)){let l=w0(o,a);o=qs(o,o.next),l=qs(l,l.next),ga(o,t,e,n,s,r,0),ga(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ky(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=M0(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Xy(c))}s.sort(zy);for(let r=0;r<s.length;r++)e=Hy(s[r],e);return e}function zy(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Hy(i,t){let e=Gy(i,t);if(!e)return t;let n=w0(e,i);return qs(n,n.next),qs(e,e.next)}function Gy(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Kr(i,e))return e;do{if(Kr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&b0(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);xa(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Vy(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Vy(i,t){return Oe(i.prev,i,t.prev)<0&&Oe(t.next,i,i.next)<0}function Wy(i,t,e,n){let s=i;do s.z===0&&(s.z=ju(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,qy(s)}function qy(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ju(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Xy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function b0(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function qo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&b0(i,t,e,n,s,r,o,a)}function Yy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$y(i,t)&&(xa(i,t)&&xa(t,i)&&Ky(i,t)&&(Oe(i.prev,i,t.prev)||Oe(i,t.prev,t))||Kr(i,t)&&Oe(i.prev,i,i.next)>0&&Oe(t.prev,t,t.next)>0)}function Oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Kr(i,t){return i.x===t.x&&i.y===t.y}function S0(i,t,e,n){let s=Yl(Oe(i,t,e)),r=Yl(Oe(i,t,n)),o=Yl(Oe(e,n,i)),a=Yl(Oe(e,n,t));return!!(s!==r&&o!==a||s===0&&Xl(i,e,t)||r===0&&Xl(i,n,t)||o===0&&Xl(e,i,n)||a===0&&Xl(e,t,n))}function Xl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Yl(i){return i>0?1:i<0?-1:0}function $y(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&S0(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function xa(i,t){return Oe(i.prev,i,i.next)<0?Oe(i,t,i.next)>=0&&Oe(i,i.prev,t)>=0:Oe(i,t,i.prev)<0||Oe(i,i.next,t)<0}function Ky(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function w0(i,t){let e=Qu(i.i,i.x,i.y),n=Qu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function bm(i,t,e,n){let s=Qu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _a(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Qu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var tf=class{static triangulate(t,e,n=2){return Dy(t,e,n)}},yi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Sm(t),wm(n,t);let o=t.length;e.forEach(Sm);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,wm(n,e[l]);let a=tf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Sm(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function wm(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ya=class i extends ye{constructor(t=new us([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Jy,w,v=!1,S,b,A,_;if(g){w=g.getSpacedPoints(h),v=!0,f=!1;let st=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,st),b=new I,A=new I,_=new I}f||(m=0,d=0,p=0,x=0);let E=a.extractPoints(c),R=E.shape,P=E.holes;if(!yi.isClockWise(R)){R=R.reverse();for(let st=0,ct=P.length;st<ct;st++){let ht=P[st];yi.isClockWise(ht)&&(P[st]=ht.reverse())}}function k(st){let ht=10000000000000001e-36,ut=st[0];for(let gt=1;gt<=st.length;gt++){let Wt=gt%st.length,Gt=st[Wt],Kt=Gt.x-ut.x,Qt=Gt.y-ut.y,F=Kt*Kt+Qt*Qt,Se=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(ut.x),Math.abs(ut.y)),he=ht*Se*Se;if(F<=he){st.splice(Wt,1),gt--;continue}ut=Gt}}k(R),P.forEach(k);let D=P.length,B=R;for(let st=0;st<D;st++){let ct=P[st];R=R.concat(ct)}function X(st,ct,ht){return ct||Xt("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ct,ht)}let $=R.length;function rt(st,ct,ht){let ut,gt,Wt,Gt=st.x-ct.x,Kt=st.y-ct.y,Qt=ht.x-st.x,F=ht.y-st.y,Se=Gt*Gt+Kt*Kt,he=Gt*F-Kt*Qt;if(Math.abs(he)>Number.EPSILON){let C=Math.sqrt(Se),M=Math.sqrt(Qt*Qt+F*F),H=ct.x-Kt/C,q=ct.y+Gt/C,J=ht.x-F/M,ft=ht.y+Qt/M,mt=((J-H)*F-(ft-q)*Qt)/(Gt*F-Kt*Qt);ut=H+Gt*mt-st.x,gt=q+Kt*mt-st.y;let j=ut*ut+gt*gt;if(j<=2)return new tt(ut,gt);Wt=Math.sqrt(j/2)}else{let C=!1;Gt>Number.EPSILON?Qt>Number.EPSILON&&(C=!0):Gt<-Number.EPSILON?Qt<-Number.EPSILON&&(C=!0):Math.sign(Kt)===Math.sign(F)&&(C=!0),C?(ut=-Kt,gt=Gt,Wt=Math.sqrt(Se)):(ut=Gt,gt=Kt,Wt=Math.sqrt(Se/2))}return new tt(ut/Wt,gt/Wt)}let K=[];for(let st=0,ct=B.length,ht=ct-1,ut=st+1;st<ct;st++,ht++,ut++)ht===ct&&(ht=0),ut===ct&&(ut=0),K[st]=rt(B[st],B[ht],B[ut]);let et=[],z,ot=K.concat();for(let st=0,ct=D;st<ct;st++){let ht=P[st];z=[];for(let ut=0,gt=ht.length,Wt=gt-1,Gt=ut+1;ut<gt;ut++,Wt++,Gt++)Wt===gt&&(Wt=0),Gt===gt&&(Gt=0),z[ut]=rt(ht[ut],ht[Wt],ht[Gt]);et.push(z),ot=ot.concat(z)}let at;if(m===0)at=yi.triangulateShape(B,P);else{let st=[],ct=[];for(let ht=0;ht<m;ht++){let ut=ht/m,gt=d*Math.cos(ut*Math.PI/2),Wt=p*Math.sin(ut*Math.PI/2)+x;for(let Gt=0,Kt=B.length;Gt<Kt;Gt++){let Qt=X(B[Gt],K[Gt],Wt);pt(Qt.x,Qt.y,-gt),ut===0&&st.push(Qt)}for(let Gt=0,Kt=D;Gt<Kt;Gt++){let Qt=P[Gt];z=et[Gt];let F=[];for(let Se=0,he=Qt.length;Se<he;Se++){let C=X(Qt[Se],z[Se],Wt);pt(C.x,C.y,-gt),ut===0&&F.push(C)}ut===0&&ct.push(F)}}at=yi.triangulateShape(st,ct)}let Dt=at.length,Ht=p+x;for(let st=0;st<$;st++){let ct=f?X(R[st],ot[st],Ht):R[st];v?(A.copy(S.normals[0]).multiplyScalar(ct.x),b.copy(S.binormals[0]).multiplyScalar(ct.y),_.copy(w[0]).add(A).add(b),pt(_.x,_.y,_.z)):pt(ct.x,ct.y,0)}for(let st=1;st<=h;st++)for(let ct=0;ct<$;ct++){let ht=f?X(R[ct],ot[ct],Ht):R[ct];v?(A.copy(S.normals[st]).multiplyScalar(ht.x),b.copy(S.binormals[st]).multiplyScalar(ht.y),_.copy(w[st]).add(A).add(b),pt(_.x,_.y,_.z)):pt(ht.x,ht.y,u/h*st)}for(let st=m-1;st>=0;st--){let ct=st/m,ht=d*Math.cos(ct*Math.PI/2),ut=p*Math.sin(ct*Math.PI/2)+x;for(let gt=0,Wt=B.length;gt<Wt;gt++){let Gt=X(B[gt],K[gt],ut);pt(Gt.x,Gt.y,u+ht)}for(let gt=0,Wt=P.length;gt<Wt;gt++){let Gt=P[gt];z=et[gt];for(let Kt=0,Qt=Gt.length;Kt<Qt;Kt++){let F=X(Gt[Kt],z[Kt],ut);v?pt(F.x,F.y+w[h-1].y,w[h-1].x+ht):pt(F.x,F.y,u+ht)}}}Jt(),Z();function Jt(){let st=s.length/3;if(f){let ct=0,ht=$*ct;for(let ut=0;ut<Dt;ut++){let gt=at[ut];Ft(gt[2]+ht,gt[1]+ht,gt[0]+ht)}ct=h+m*2,ht=$*ct;for(let ut=0;ut<Dt;ut++){let gt=at[ut];Ft(gt[0]+ht,gt[1]+ht,gt[2]+ht)}}else{for(let ct=0;ct<Dt;ct++){let ht=at[ct];Ft(ht[2],ht[1],ht[0])}for(let ct=0;ct<Dt;ct++){let ht=at[ct];Ft(ht[0]+$*h,ht[1]+$*h,ht[2]+$*h)}}n.addGroup(st,s.length/3-st,0)}function Z(){let st=s.length/3,ct=0;Q(B,ct),ct+=B.length;for(let ht=0,ut=P.length;ht<ut;ht++){let gt=P[ht];Q(gt,ct),ct+=gt.length}n.addGroup(st,s.length/3-st,1)}function Q(st,ct){let ht=st.length;for(;--ht>=0;){let ut=ht,gt=ht-1;gt<0&&(gt=st.length-1);for(let Wt=0,Gt=h+m*2;Wt<Gt;Wt++){let Kt=$*Wt,Qt=$*(Wt+1),F=ct+ut+Kt,Se=ct+gt+Kt,he=ct+gt+Qt,C=ct+ut+Qt;Tt(F,Se,he,C)}}}function pt(st,ct,ht){l.push(st),l.push(ct),l.push(ht)}function Ft(st,ct,ht){$t(st),$t(ct),$t(ht);let ut=s.length/3,gt=y.generateTopUV(n,s,ut-3,ut-2,ut-1);Te(gt[0]),Te(gt[1]),Te(gt[2])}function Tt(st,ct,ht,ut){$t(st),$t(ct),$t(ut),$t(ct),$t(ht),$t(ut);let gt=s.length/3,Wt=y.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);Te(Wt[0]),Te(Wt[1]),Te(Wt[3]),Te(Wt[1]),Te(Wt[2]),Te(Wt[3])}function $t(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function Te(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jy(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ju[s.type]().fromJSON(s)),new i(n,t.options)}},Jy={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new tt(r,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(f,1-p),new tt(x,1-g)]:[new tt(a,1-l),new tt(h,1-u),new tt(d,1-p),new tt(m,1-g)]}};function jy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var va=class i extends fc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Zr=class i extends ye{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=re(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new tt,d=new I,p=new I,x=new I,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=e;y++){let w=n+y*h*s,v=Math.sin(w),S=Math.cos(w);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*S,o.push(u.x,u.y,u.z),f.x=y/e,f.y=b/(t.length-1),a.push(f.x,f.y);let A=l[3*b+0]*v,_=l[3*b+1],E=l[3*b+0]*S;c.push(A,_,E)}}for(let y=0;y<e;y++)for(let w=0;w<t.length-1;w++){let v=w+y*t.length,S=v,b=v+t.length,A=v+t.length+1,_=v+1;r.push(S,b,_),r.push(A,_,b)}this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ke=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*f-o;for(let w=0;w<c;w++){let v=w*u-r;p.push(v,-y,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,v=y+c*(g+1),S=y+1+c*(g+1),b=y+1+c*g;d.push(w,v,b),d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ma=class i extends ye{constructor(t=new us([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;yi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];yi.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=yi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],w=y[0]+u,v=y[1]+u,S=y[2]+u;n.push(w,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Qy(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function Qy(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Xs=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],w=g/n,v=o+w*a,S=t*Math.cos(v),b=Math.sqrt(t*t-S*S),A=0;g===0&&o===0?A=.5/e:g===n&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let E=_/e,R=s+E*r;u.x=-b*Math.cos(R),u.y=S,u.z=b*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+A,1-w),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let w=h[g][y+1],v=h[g][y],S=h[g+1][y],b=h[g+1][y+1];(g!==0||o>0)&&d.push(w,v,b),(g!==n-1||l<Math.PI)&&d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function nr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Em(s))s.isRenderTargetTexture?(Lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Em(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function gn(i){let t={};for(let e=0;e<i.length;e++){let n=nr(i[e]);for(let s in n)t[s]=n[s]}return t}function Em(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tv(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Tf(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}var ao={clone:nr,merge:gn},ev=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends pn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ev,this.fragmentShader=nv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=nr(t.uniforms),this.uniformsGroups=tv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Jr=class extends Je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},He=class extends pn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},qe=class extends He{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ba=class extends pn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xa,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Pc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yc=class extends pn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vc=class extends pn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function as(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function jl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function iv(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Tm(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function sv(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Mc=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yu,endingEnd:Yu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case $u:r=t,a=2*e-n;break;case Ku:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $u:o=t,l=2*n-e;break;case Ku:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-d)*m+(1.5+d)*x+.5*p,v=d*m-d*x;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+y*o[c+S]+w*o[l+S]+v*o[u+S];return r}},bc=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Sc=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wc=class extends wi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,y=u[g],w=u[g+1],v=t*f+p*2,S=h[v],b=h[v+1],A=ov(n,e,y,S,s);r[p]=E0(A,x,w,b,m)}return r}};function E0(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function rv(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ov(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=E0(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=rv(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Tn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=as(e,this.TimeBufferType),this.values=as(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:as(t.times,Array),values:as(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),jl(t.settings)&&(n.settings={inTangents:as(t.settings.inTangents,Array),outTangents:as(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Bs:e=this.InterpolantFactoryMethodDiscrete;break;case ks:e=this.InterpolantFactoryMethodLinear;break;case Zl:e=this.InterpolantFactoryMethodSmooth;break;case Xu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Lt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bs;case this.InterpolantFactoryMethodLinear:return ks;case this.InterpolantFactoryMethodSmooth:return Zl;case this.InterpolantFactoryMethodBezier:return Xu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;jl(this.settings)&&(Am(this.settings.inTangents,t),Am(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&V_(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,jl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Am(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=ks;var Hi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Bs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Sa=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};Sa.prototype.ValueTypeName="color";var Gi=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};Gi.prototype.ValueTypeName="number";var Ec=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vi=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ec(this.times,this.values,this.getValueSize(),t)}};Vi.prototype.ValueTypeName="quaternion";Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wi=class extends Tn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Bs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var fs=class extends Tn{constructor(t,e,n,s){super(t,e,n,s)}};fs.prototype.ValueTypeName="vector";var wa=class{constructor(t="",e=-1,n=[],s=r0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=qn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(lv(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Tn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=iv(l);l=Tm(l,1,h),c=Tm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Gi(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function av(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gi;case"vector":case"vector2":case"vector3":case"vector4":return fs;case"color":return Sa;case"quaternion":return Vi;case"bool":case"boolean":return Hi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function lv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=av(i.type);if(i.times===void 0){let n=[],s=[];sv(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),jl(i.settings)&&(e.settings={inTangents:as(i.settings.inTangents,Float32Array),outTangents:as(i.settings.outTangents,Float32Array)}),e}var vi={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Rm(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Rm(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Rm(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Tc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},T0=new Tc,Ei=class{constructor(t){this.manager=t!==void 0?t:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var Oi={},ef=class extends Error{constructor(t,e){super(t),this.response=e}},jr=class extends Ei{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=vi.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Oi[t]!==void 0){Oi[t].push({onLoad:e,onProgress:n,onError:s});return}Oi[t]=[],Oi[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Lt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Oi[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){y();function y(){u.read().then(({done:w,value:v})=>{if(w)g.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let b=0,A=h.length;b<A;b++){let _=h[b];_.onProgress&&_.onProgress(S)}g.enqueue(v),y()}},w=>{g.error(w)})}}});return new Response(m)}else throw new ef(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{vi.add(`file:${t}`,c);let h=Oi[t];delete Oi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Oi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Oi[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ir=new WeakMap,Ac=class extends Ei{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=vi.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=Ir.get(o);u===void 0&&(u=[],Ir.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=Or("img");function l(){h(),e&&e(this);let u=Ir.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Ir.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),vi.remove(`image:${t}`);let f=Ir.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Ir.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vi.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Ys=class extends Ei{constructor(t){super(t)}load(t,e,n,s){let r=new Ze,o=new Ac(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},$s=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ea=class extends $s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Vu=new Yt,Cm=new I,Im=new I,Qr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Cm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cm),Im.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Im),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Vu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ur||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Vu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$l=new I,Kl=new dn,_i=new I,Ta=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($l,Kl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Kl,_i.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose($l,Kl,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,Kl,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},os=new I,Pm=new tt,Lm=new tt,nn=class extends Ta{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){os.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(os.x,os.y).multiplyScalar(-t/os.z),os.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(os.x,os.y).multiplyScalar(-t/os.z)}getViewSize(t,e){return this.getViewBounds(t,Pm,Lm),e.subVectors(Lm,Pm)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},nf=class extends Qr{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=zs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Ks=class extends $s{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},sf=class extends Qr{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0}},Zs=class extends $s{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Yn=class extends Ta{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rf=class extends Qr{constructor(){super(new Yn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new rf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var qi=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Wu=new WeakMap,Aa=class extends Ei{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Lt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Lt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=vi.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Wu.has(o)===!0?(s&&s(Wu.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vi.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Wu.set(l,c),vi.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});vi.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Pr=-90,Lr=1,Rc=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(Pr,Lr,t,e);s.layers=this.layers,this.add(s);let r=new nn(Pr,Lr,t,e);r.layers=this.layers,this.add(r);let o=new nn(Pr,Lr,t,e);o.layers=this.layers,this.add(o);let a=new nn(Pr,Lr,t,e);a.layers=this.layers,this.add(a);let l=new nn(Pr,Lr,t,e);l.layers=this.layers,this.add(l);let c=new nn(Pr,Lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Cc=class extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Ra=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=cv.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function cv(){this._document.hidden===!1&&this.reset()}var Af="\\[\\]\\.:\\/",hv=new RegExp("["+Af+"]","g"),Rf="[^"+Af+"]",uv="[^"+Af.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",Rf),dv=/(WCOD+)?/.source.replace("WCOD",uv),pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rf),mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rf),gv=new RegExp("^"+fv+dv+pv+mv+"$"),xv=["material","materials","bones","map"],of=class{constructor(t,e,n){let s=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(hv,"")}static parseTrackName(t){let e=gv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Lt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=of;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var o2=new Float32Array(1);var Nm=new Yt,Ca=class{constructor(t,e,n=0,s=1/0){this.ray=new cs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nm.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nm),this}intersectObject(t,e=!0,n=[]){return af(t,this,n,e),n.sort(Dm),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)af(t[s],this,n,e);return n.sort(Dm),n}};function Dm(i,t){return i.distance-t.distance}function af(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)af(r[o],t,e,!0)}}var Ia=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Df=class Df{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Df.prototype.isMatrix2=!0;var lf=Df;function Cf(i,t,e,n){let s=_v(n);switch(e){case yf:return i*t;case Bc:return i*t/s.components*s.byteLength;case kc:return i*t/s.components*s.byteLength;case gs:return i*t*2/s.components*s.byteLength;case zc:return i*t*2/s.components*s.byteLength;case vf:return i*t*3/s.components*s.byteLength;case Bn:return i*t*4/s.components*s.byteLength;case Hc:return i*t*4/s.components*s.byteLength;case ka:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vc:case qc:return Math.max(i,16)*Math.max(t,8)/4;case Gc:case Wc:return Math.max(i,8)*Math.max(t,8)/2;case Xc:case Yc:case Kc:case Zc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case $c:case Va:case Jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case th:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case rh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case oh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ah:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fh:case dh:case ph:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mh:case gh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wa:case xh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _v(i){switch(i){case An:case mf:return{byteLength:1,components:1};case io:case gf:case Ke:return{byteLength:2,components:1};case Uc:case Oc:return{byteLength:2,components:4};case ui:case Fc:case On:return{byteLength:4,components:1};case xf:case _f:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function $0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function vv(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Av=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Iv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,pM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,PM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,JM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ob=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ab=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ib=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ub=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Qb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:Mv,alphahash_pars_fragment:bv,alphamap_fragment:Sv,alphamap_pars_fragment:wv,alphatest_fragment:Ev,alphatest_pars_fragment:Tv,aomap_fragment:Av,aomap_pars_fragment:Rv,batching_pars_vertex:Cv,batching_vertex:Iv,begin_vertex:Pv,beginnormal_vertex:Lv,bsdfs:Nv,iridescence_fragment:Dv,bumpmap_pars_fragment:Fv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Ov,clipping_planes_pars_vertex:Bv,clipping_planes_vertex:kv,color_fragment:zv,color_pars_fragment:Hv,color_pars_vertex:Gv,color_vertex:Vv,common:Wv,cube_uv_reflection_fragment:qv,defaultnormal_vertex:Xv,displacementmap_pars_vertex:Yv,displacementmap_vertex:$v,emissivemap_fragment:Kv,emissivemap_pars_fragment:Zv,colorspace_fragment:Jv,colorspace_pars_fragment:jv,envmap_fragment:Qv,envmap_common_pars_fragment:tM,envmap_pars_fragment:eM,envmap_pars_vertex:nM,envmap_physical_pars_fragment:dM,envmap_vertex:iM,fog_vertex:sM,fog_pars_vertex:rM,fog_fragment:oM,fog_pars_fragment:aM,gradientmap_pars_fragment:lM,lightmap_pars_fragment:cM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:uM,lights_pars_begin:fM,lights_toon_fragment:pM,lights_toon_pars_fragment:mM,lights_phong_fragment:gM,lights_phong_pars_fragment:xM,lights_physical_fragment:_M,lights_physical_pars_fragment:yM,lights_fragment_begin:vM,lights_fragment_maps:MM,lights_fragment_end:bM,lightprobes_pars_fragment:SM,logdepthbuf_fragment:wM,logdepthbuf_pars_fragment:EM,logdepthbuf_pars_vertex:TM,logdepthbuf_vertex:AM,map_fragment:RM,map_pars_fragment:CM,map_particle_fragment:IM,map_particle_pars_fragment:PM,metalnessmap_fragment:LM,metalnessmap_pars_fragment:NM,morphinstance_vertex:DM,morphcolor_vertex:FM,morphnormal_vertex:UM,morphtarget_pars_vertex:OM,morphtarget_vertex:BM,normal_fragment_begin:kM,normal_fragment_maps:zM,normal_pars_fragment:HM,normal_pars_vertex:GM,normal_vertex:VM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:qM,clearcoat_normal_fragment_maps:XM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:$M,opaque_fragment:KM,packing:ZM,premultiplied_alpha_fragment:JM,project_vertex:jM,dithering_fragment:QM,dithering_pars_fragment:tb,roughnessmap_fragment:eb,roughnessmap_pars_fragment:nb,shadowmap_pars_fragment:ib,shadowmap_pars_vertex:sb,shadowmap_vertex:rb,shadowmask_pars_fragment:ob,skinbase_vertex:ab,skinning_pars_vertex:lb,skinning_vertex:cb,skinnormal_vertex:hb,specularmap_fragment:ub,specularmap_pars_fragment:fb,tonemapping_fragment:db,tonemapping_pars_fragment:pb,transmission_fragment:mb,transmission_pars_fragment:gb,uv_pars_fragment:xb,uv_pars_vertex:_b,uv_vertex:yb,worldpos_vertex:vb,background_vert:Mb,background_frag:bb,backgroundCube_vert:Sb,backgroundCube_frag:wb,cube_vert:Eb,cube_frag:Tb,depth_vert:Ab,depth_frag:Rb,distance_vert:Cb,distance_frag:Ib,equirect_vert:Pb,equirect_frag:Lb,linedashed_vert:Nb,linedashed_frag:Db,meshbasic_vert:Fb,meshbasic_frag:Ub,meshlambert_vert:Ob,meshlambert_frag:Bb,meshmatcap_vert:kb,meshmatcap_frag:zb,meshnormal_vert:Hb,meshnormal_frag:Gb,meshphong_vert:Vb,meshphong_frag:Wb,meshphysical_vert:qb,meshphysical_frag:Xb,meshtoon_vert:Yb,meshtoon_frag:$b,points_vert:Kb,points_frag:Zb,shadow_vert:Jb,shadow_frag:jb,sprite_vert:Qb,sprite_frag:tS},bt={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Ai={basic:{uniforms:gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:gn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:gn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:gn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new dt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:gn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:gn([bt.points,bt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:gn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:gn([bt.common,bt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:gn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:gn([bt.sprite,bt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:gn([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:gn([bt.lights,bt.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Ai.physical={uniforms:gn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var vh={r:0,b:0,g:0},eS=new Yt,K0=new jt;K0.set(-1,0,0,0,1,0,0,0,1);function nS(i,t,e,n,s,r){let o=new dt(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let v=y.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(y){let w=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,w){let v=d(w);v&&(v.isCubeTexture||v.mapping===Ba)?(c===void 0&&(c=new Bt(new mn(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:nr(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eS.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(K0),c.material.toneMapped=ee.getTransfer(v.colorSpace)!==_e,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Bt(new ke(2,2),new Je({name:"BackgroundMaterial",uniforms:nr(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(vh,Tf(i)),e.buffers.color.setClear(vh.r,vh.g,vh.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function iS(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,L,k,D,B){let X=!1,$=u(P,D,k,L);r!==$&&(r=$,c(r.object)),X=d(P,D,k,B),X&&p(P,D,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(P,L,k,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,L,k,D){let B=D.wireframe===!0,X=n[L.id];X===void 0&&(X={},n[L.id]=X);let $=P.isInstancedMesh===!0?P.id:0,rt=X[$];rt===void 0&&(rt={},X[$]=rt);let K=rt[k.id];K===void 0&&(K={},rt[k.id]=K);let et=K[B];return et===void 0&&(et=f(l()),K[B]=et),et}function f(P){let L=[],k=[],D=[];for(let B=0;B<e;B++)L[B]=0,k[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,L,k,D){let B=r.attributes,X=L.attributes,$=0,rt=k.getAttributes();for(let K in rt)if(rt[K].location>=0){let z=B[K],ot=X[K];if(ot===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),z===void 0||z.attribute!==ot||ot&&z.data!==ot.data)return!0;$++}return r.attributesNum!==$||r.index!==D}function p(P,L,k,D){let B={},X=L.attributes,$=0,rt=k.getAttributes();for(let K in rt)if(rt[K].location>=0){let z=X[K];z===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));let ot={};ot.attribute=z,z&&z.data&&(ot.data=z.data),B[K]=ot,$++}r.attributes=B,r.attributesNum=$,r.index=D}function x(){let P=r.newAttributes;for(let L=0,k=P.length;L<k;L++)P[L]=0}function m(P){g(P,0)}function g(P,L){let k=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;k[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),B[P]!==L&&(i.vertexAttribDivisor(P,L),B[P]=L)}function y(){let P=r.newAttributes,L=r.enabledAttributes;for(let k=0,D=L.length;k<D;k++)L[k]!==P[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function w(P,L,k,D,B,X,$){$===!0?i.vertexAttribIPointer(P,L,k,B,X):i.vertexAttribPointer(P,L,k,D,B,X)}function v(P,L,k,D){x();let B=D.attributes,X=k.getAttributes(),$=L.defaultAttributeValues;for(let rt in X){let K=X[rt];if(K.location>=0){let et=B[rt];if(et===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(et=P.instanceColor)),et!==void 0){let z=et.normalized,ot=et.itemSize,at=t.get(et);if(at===void 0)continue;let Dt=at.buffer,Ht=at.type,Jt=at.bytesPerElement,Z=Ht===i.INT||Ht===i.UNSIGNED_INT||et.gpuType===Fc;if(et.isInterleavedBufferAttribute){let Q=et.data,pt=Q.stride,Ft=et.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<K.locationSize;Tt++)g(K.location+Tt,Q.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<K.locationSize;Tt++)m(K.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Tt=0;Tt<K.locationSize;Tt++)w(K.location+Tt,ot/K.locationSize,Ht,z,pt*Jt,(Ft+ot/K.locationSize*Tt)*Jt,Z)}else{if(et.isInstancedBufferAttribute){for(let Q=0;Q<K.locationSize;Q++)g(K.location+Q,et.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Q=0;Q<K.locationSize;Q++)m(K.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Dt);for(let Q=0;Q<K.locationSize;Q++)w(K.location+Q,ot/K.locationSize,Ht,z,ot*Jt,ot/K.locationSize*Q*Jt,Z)}}else if($!==void 0){let z=$[rt];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(K.location,z);break;case 3:i.vertexAttrib3fv(K.location,z);break;case 4:i.vertexAttrib4fv(K.location,z);break;default:i.vertexAttrib1fv(K.location,z)}}}}y()}function S(){E();for(let P in n){let L=n[P];for(let k in L){let D=L[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let k in L){let D=L[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P.id]}function A(P){for(let L in n){let k=n[L];for(let D in k){let B=k[D];if(B[P.id]===void 0)continue;let X=B[P.id];for(let $ in X)h(X[$].object),delete X[$];delete B[P.id]}}}function _(P){for(let L in n){let k=n[L],D=P.isInstancedMesh===!0?P.id:0,B=k[D];if(B!==void 0){for(let X in B){let $=B[X];for(let rt in $)h($[rt].object),delete $[rt];delete B[X]}delete k[D],Object.keys(k).length===0&&delete n[L]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function sS(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function rS(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===Ke&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==An&&A!==On&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Lt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:b}}function oS(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Nn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,w=y*4,v=g.clippingState||null;l.value=v,v=h(p,f,w,d);for(let S=0;S!==w;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=d;w!==x;++w,v+=4)o.copy(u[w]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var co=4,aS=6,lS=20,cS=256,Ya=new Yn,A0=new dt,Ff=null,Uf=0,Of=0,Bf=!1,hS=new I,ir=new I,uo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=hS}=r;Ff=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ff,Uf,Of),this._renderer.xr.enabled=Bf,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ps||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ff=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Ke,format:Bn,colorSpace:on,depthBuffer:!1},s=R0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=uS(r)),this._blurMaterial=dS(r,t,e),this._ggxMaterial=fS(r,t,e)}return s}_compileMaterial(t){let e=new Bt(new ye,t);this._renderer.compile(e,Ya)}_sceneToCubeUV(t,e,n,s,r){let l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(A0),u.toneMapping=hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new mn,new Me({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,g=!0):(m.color.copy(A0),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;lo(s,v*S,w>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ps||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;lo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ya)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-co?n-p+co:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,lo(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Ya),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,lo(t,m,g,3*x,2*x),s.setRenderTarget(t),s.render(a,Ya)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-co?s-this._lodMax+co:0),f=4*(this._cubeSize-h);lo(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Ya)}};function uS(i){let t=[],e=[],n=i,s=i-co+1+aS;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let g=0;g<u;g++){let y=g%3*2/3-1,w=g>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(v,d*f*g);for(let S=0;S<f;S++){let b=h[S*2]*2-1,A=h[S*2+1]*2-1;g===0?ir.set(1,A,b):g===1?ir.set(-b,1,-A):g===2?ir.set(-b,A,1):g===3?ir.set(-1,A,-b):g===4?ir.set(-b,-1,A):ir.set(b,A,-1),ir.toArray(x,(g*f+S)*d)}}let m=new ye;m.setAttribute("position",new ze(p,d)),m.setAttribute("outputDirection",new ze(x,d)),e.push(new Bt(m,null)),n>co&&n--}return{lodMeshes:e,sizeLods:t}}function R0(i,t,e){let n=new Be(i,t,e);return n.texture.mapping=Ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fS(i,t,e){return new Je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function dS(i,t,e){return new Je({name:"SphericalGaussianBlur",defines:{SAMPLES:lS,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function C0(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function I0(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bh=class extends Be{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new aa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new mn(5,5,5),r=new Je({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:Kn});r.uniforms.tEquirect.value=e;let o=new Bt(s,r),a=e.minFilter;return e.minFilter===Un&&(e.minFilter=Ue),new Rc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function pS(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Lc||d===Nc)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new bh(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Lc||d===Nc,x=d===ps||d===tr;if(p||x){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new uo(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new uo(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Lc?f.mapping=ps:d===Nc&&(f.mapping=tr),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function mS(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Os("WebGLRenderer: "+n+" extension not supported."),s}}}function gS(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let w=0,v=y.length;w<v;w+=3){let S=y[w+0],b=y[w+1],A=y[w+2];f.push(S,b,b,A,A,S)}}else{let y=p.array;x=p.version;for(let w=0,v=y.length/3-1;w<v;w+=3){let S=w+0,b=w+1,A=w+2;f.push(S,b,b,A,A,S)}}let m=new(p.count>=65535?ta:Qo)(f,1);m.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function xS(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function _S(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yS(i,t,e){let n=new WeakMap,s=new xe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*S*4*u),A=new jo(b,v,S,u);A.type=On,A.needsUpdate=!0;let _=w*4;for(let R=0;R<u;R++){let P=m[R],L=g[R],k=y[R],D=v*S*4*R;for(let B=0;B<P.count;B++){let X=B*_;d===!0&&(s.fromBufferAttribute(P,B),b[D+X+0]=s.x,b[D+X+1]=s.y,b[D+X+2]=s.z,b[D+X+3]=0),p===!0&&(s.fromBufferAttribute(L,B),b[D+X+4]=s.x,b[D+X+5]=s.y,b[D+X+6]=s.z,b[D+X+7]=0),x===!0&&(s.fromBufferAttribute(k,B),b[D+X+8]=s.x,b[D+X+9]=s.y,b[D+X+10]=s.z,b[D+X+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new tt(v,S)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function vS(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var MS={[La]:"LINEAR_TONE_MAPPING",[Na]:"REINHARD_TONE_MAPPING",[Da]:"CINEON_TONE_MAPPING",[Qs]:"ACES_FILMIC_TONE_MAPPING",[Ua]:"AGX_TONE_MAPPING",[Oa]:"NEUTRAL_TONE_MAPPING",[Fa]:"CUSTOM_TONE_MAPPING"};function bS(i,t,e,n,s,r){let o=new Be(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new ye;c.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let h=new Jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Bt(c,h),f=new Yn(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,y=[],w=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<y.length;b++){let A=y[b];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;let S=o.width,b=o.height;y.length>0&&a===null&&(a=new Be(S,b,{type:Ke,depthBuffer:!1,stencilBuffer:!1}),l=new Be(S,b,{type:Ke,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let _=y[A];_.setSize&&_.setSize(S,b)}},this.begin=function(v,S){if(x||v.toneMapping===hi&&y.length===0)return!1;if(g=S,S!==null){let b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=hi,!0},this.hasRenderPass=function(){return w},this.end=function(v,S){v.toneMapping=m,x=!0;let b=o,A=a;for(let _=0;_<y.length;_++){let E=y[_];E.enabled!==!1&&(E.render(v,A,b,S),E.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},ee.getTransfer(d)===_e&&(h.defines.SRGB_TRANSFER="");let _=MS[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(g),v.render(u,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Z0=new Ze,Hf=new hs(1,1),J0=new jo,j0=new lc,Q0=new aa,P0=[],L0=[],N0=new Float32Array(16),D0=new Float32Array(9),F0=new Float32Array(4);function fo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=P0[s];if(r===void 0&&(r=new Float32Array(s),P0[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Qe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function tn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Eh(i,t){let e=L0[t];e===void 0&&(e=new Int32Array(t),L0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function SS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2fv(this.addr,t),tn(e,t)}}function ES(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;i.uniform3fv(this.addr,t),tn(e,t)}}function TS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4fv(this.addr,t),tn(e,t)}}function AS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;F0.set(n),i.uniformMatrix2fv(this.addr,!1,F0),tn(e,n)}}function RS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;D0.set(n),i.uniformMatrix3fv(this.addr,!1,D0),tn(e,n)}}function CS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Qe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,n))return;N0.set(n),i.uniformMatrix4fv(this.addr,!1,N0),tn(e,n)}}function IS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function PS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2iv(this.addr,t),tn(e,t)}}function LS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3iv(this.addr,t),tn(e,t)}}function NS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4iv(this.addr,t),tn(e,t)}}function DS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function FS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;i.uniform2uiv(this.addr,t),tn(e,t)}}function US(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;i.uniform3uiv(this.addr,t),tn(e,t)}}function OS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;i.uniform4uiv(this.addr,t),tn(e,t)}}function BS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hf.compareFunction=e.isReversedDepthBuffer()?yh:_h,r=Hf):r=Z0,e.setTexture2D(t||r,s)}function kS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||j0,s)}function zS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Q0,s)}function HS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||J0,s)}function GS(i){switch(i){case 5126:return SS;case 35664:return wS;case 35665:return ES;case 35666:return TS;case 35674:return AS;case 35675:return RS;case 35676:return CS;case 5124:case 35670:return IS;case 35667:case 35671:return PS;case 35668:case 35672:return LS;case 35669:case 35673:return NS;case 5125:return DS;case 36294:return FS;case 36295:return US;case 36296:return OS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return zS;case 36289:case 36303:case 36311:case 36292:return HS}}function VS(i,t){i.uniform1fv(this.addr,t)}function WS(i,t){let e=fo(t,this.size,2);i.uniform2fv(this.addr,e)}function qS(i,t){let e=fo(t,this.size,3);i.uniform3fv(this.addr,e)}function XS(i,t){let e=fo(t,this.size,4);i.uniform4fv(this.addr,e)}function YS(i,t){let e=fo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function $S(i,t){let e=fo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function KS(i,t){let e=fo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ZS(i,t){i.uniform1iv(this.addr,t)}function JS(i,t){i.uniform2iv(this.addr,t)}function jS(i,t){i.uniform3iv(this.addr,t)}function QS(i,t){i.uniform4iv(this.addr,t)}function t1(i,t){i.uniform1uiv(this.addr,t)}function e1(i,t){i.uniform2uiv(this.addr,t)}function n1(i,t){i.uniform3uiv(this.addr,t)}function i1(i,t){i.uniform4uiv(this.addr,t)}function s1(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Hf:o=Z0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function r1(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||j0,r[o])}function o1(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Q0,r[o])}function a1(i,t,e){let n=this.cache,s=t.length,r=Eh(e,s);Qe(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||J0,r[o])}function l1(i){switch(i){case 5126:return VS;case 35664:return WS;case 35665:return qS;case 35666:return XS;case 35674:return YS;case 35675:return $S;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return jS;case 35669:case 35673:return QS;case 5125:return t1;case 36294:return e1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}var Gf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=GS(e.type)}},Vf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=l1(e.type)}},Wf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},kf=/(\w+)(\])?(\[|\.)?/g;function U0(i,t){i.seq.push(t),i.map[t.id]=t}function c1(i,t,e){let n=i.name,s=n.length;for(kf.lastIndex=0;;){let r=kf.exec(n),o=kf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){U0(e,c===void 0?new Gf(a,i,t):new Vf(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Wf(a),U0(e,u)),e=u}}}var ho=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);c1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function O0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var h1=37297,u1=0;function f1(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var B0=new jt;function d1(i){ee._getMatrix(B0,ee.workingColorSpace,i);let t=`mat3( ${B0.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case Zo:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Lt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function k0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+f1(i.getShaderSource(t),a)}else return r}function p1(i,t){let e=d1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var m1={[La]:"Linear",[Na]:"Reinhard",[Da]:"Cineon",[Qs]:"ACESFilmic",[Ua]:"AgX",[Oa]:"Neutral",[Fa]:"Custom"};function g1(i,t){let e=m1[t];return e===void 0?(Lt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mh=new I;function x1(){ee.getLuminanceCoefficients(Mh);let i=Mh.x.toFixed(4),t=Mh.y.toFixed(4),e=Mh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function y1(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function v1(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ka(i){return i!==""}function z0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function H0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(i){return i.replace(M1,S1)}var b1=new Map;function S1(i,t){let e=ae[t];if(e===void 0){let n=b1.get(t);if(n!==void 0)e=ae[n],Lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return qf(e)}var w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(i){return i.replace(w1,E1)}function E1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function V0(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var T1={[Js]:"SHADOWMAP_TYPE_PCF",[to]:"SHADOWMAP_TYPE_VSM"};function A1(i){return T1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var R1={[ps]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function C1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":R1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var I1={[tr]:"ENVMAP_MODE_REFRACTION"};function P1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":I1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var L1={[Pc]:"ENVMAP_BLENDING_MULTIPLY",[n0]:"ENVMAP_BLENDING_MIX",[i0]:"ENVMAP_BLENDING_ADD"};function N1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":L1[i.combine]||"ENVMAP_BLENDING_NONE"}function D1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function F1(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=A1(e),c=C1(e),h=P1(e),u=N1(e),f=D1(e),d=_1(e),p=y1(r),x=s.createProgram(),m,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ka).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ka).join(`
`),g.length>0&&(g+=`
`)):(m=[V0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),g=[V0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?ae.tonemapping_pars_fragment:"",e.toneMapping!==hi?g1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,p1("linearToOutputTexel",e.outputColorSpace),x1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ka).join(`
`)),o=qf(o),o=z0(o,e),o=H0(o,e),a=qf(a),a=z0(a,e),a=H0(a,e),o=G0(o),a=G0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Sf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=y+m+o,v=y+g+a,S=O0(s,s.VERTEX_SHADER,w),b=O0(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(b)||"",B=L.trim(),X=k.trim(),$=D.trim(),rt=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,b);else{let et=k0(s,S,"vertex"),z=k0(s,b,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+et+`
`+z)}else B!==""?Lt("WebGLProgram: Program Info Log:",B):(X===""||$==="")&&(K=!1);K&&(P.diagnostics={runnable:rt,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:g}})}s.deleteShader(S),s.deleteShader(b),_=new ho(s,x),E=v1(s,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,h1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var U1=0,Xf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Yf(t),e.set(t,n)),n}},Yf=class{constructor(t){this.id=U1++,this.code=t,this.usedTimes=0}};function O1(i){return i===gs||i===Va||i===Wa}function B1(i,t,e,n,s,r){let o=new zr,a=new Xf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,R,P,L,k){let D=P.fog,B=L.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,rt=t.get(_.envMap||X,$),K=rt&&rt.mapping===Ba?rt.image.height:null,et=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Lt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=z!==void 0?z.length:0,at=0;B.morphAttributes.position!==void 0&&(at=1),B.morphAttributes.normal!==void 0&&(at=2),B.morphAttributes.color!==void 0&&(at=3);let Dt,Ht,Jt,Z;if(et){let Ne=Ai[et];Dt=Ne.vertexShader,Ht=Ne.fragmentShader}else{Dt=_.vertexShader,Ht=_.fragmentShader;let Ne=a.getVertexShaderStage(_),we=a.getFragmentShaderStage(_);a.update(_,Ne,we),Jt=Ne.id,Z=we.id}let Q=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ft=L.isInstancedMesh===!0,Tt=L.isBatchedMesh===!0,$t=!!_.map,Te=!!_.matcap,st=!!rt,ct=!!_.aoMap,ht=!!_.lightMap,ut=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,Wt=!!_.displacementMap,Gt=!!_.emissiveMap,Kt=!!_.metalnessMap,Qt=!!_.roughnessMap,F=_.anisotropy>0,Se=_.clearcoat>0,he=_.dispersion>0,C=_.retroreflectivity>0,M=_.iridescence>0,H=_.sheen>0,q=_.transmission>0,J=F&&!!_.anisotropyMap,ft=Se&&!!_.clearcoatMap,mt=Se&&!!_.clearcoatNormalMap,j=Se&&!!_.clearcoatRoughnessMap,it=M&&!!_.iridescenceMap,xt=M&&!!_.iridescenceThicknessMap,Ut=H&&!!_.sheenColorMap,Mt=H&&!!_.sheenRoughnessMap,_t=!!_.specularMap,Ot=!!_.specularColorMap,qt=!!_.specularIntensityMap,te=q&&!!_.transmissionMap,O=q&&!!_.thicknessMap,yt=!!_.gradientMap,nt=!!_.alphaMap,vt=_.alphaTest>0,Et=!!_.alphaHash,lt=!!_.extensions,zt=hi;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Pt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:Ht,defines:_.defines,customVertexShaderID:Jt,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&L._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&L.instanceColor!==null,instancingMorph:Ft&&L.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$t,matcap:Te,envMap:st,envMapMode:st&&rt.mapping,envMapCubeUVHeight:K,aoMap:ct,lightMap:ht,bumpMap:ut,normalMap:gt,displacementMap:Wt,emissiveMap:Gt,normalMapObjectSpace:gt&&_.normalMapType===a0,normalMapTangentSpace:gt&&_.normalMapType===Xa,packedNormalMap:gt&&_.normalMapType===Xa&&O1(_.normalMap.format),metalnessMap:Kt,roughnessMap:Qt,anisotropy:F,anisotropyMap:J,clearcoat:Se,clearcoatMap:ft,clearcoatNormalMap:mt,clearcoatRoughnessMap:j,dispersion:he,retroreflection:C,iridescence:M,iridescenceMap:it,iridescenceThicknessMap:xt,sheen:H,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:_t,specularColorMap:Ot,specularIntensityMap:qt,transmission:q,transmissionMap:te,thicknessMap:O,gradientMap:yt,opaque:_.transparent===!1&&_.blending===eo&&_.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:Et,combine:_.combine,mapUv:$t&&p(_.map.channel),aoMapUv:ct&&p(_.aoMap.channel),lightMapUv:ht&&p(_.lightMap.channel),bumpMapUv:ut&&p(_.bumpMap.channel),normalMapUv:gt&&p(_.normalMap.channel),displacementMapUv:Wt&&p(_.displacementMap.channel),emissiveMapUv:Gt&&p(_.emissiveMap.channel),metalnessMapUv:Kt&&p(_.metalnessMap.channel),roughnessMapUv:Qt&&p(_.roughnessMap.channel),anisotropyMapUv:J&&p(_.anisotropyMap.channel),clearcoatMapUv:ft&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:mt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(_.sheenRoughnessMap.channel),specularMapUv:_t&&p(_.specularMap.channel),specularColorMapUv:Ot&&p(_.specularColorMap.channel),specularIntensityMapUv:qt&&p(_.specularIntensityMap.channel),transmissionMapUv:te&&p(_.transmissionMap.channel),thicknessMapUv:O&&p(_.thicknessMap.channel),alphaMapUv:nt&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(gt||F),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&($t||nt),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:at,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:$t&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===_e,decodeVideoTextureEmissive:Gt&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===_e,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===je,flipSided:_.side===an,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:lt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&_.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(E,_),y(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){let E=d[_.type],R;if(E){let P=Ai[E];R=ao.clone(P.uniforms)}else R=_.uniforms;return R}function v(_,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new F1(i,E,_,s),c.push(R),h.set(E,R)),R}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function b(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:A}}function k1(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function z1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function W0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function q0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},i[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,d,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let w=a(f,d,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(f,d,p,x,m,g){let y=a(f,d,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||z1),n.length>1&&n.sort(d||W0),s.length>1&&s.sort(d||W0)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function H1(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new q0,i.set(n,[o])):s>=r.length?(o=new q0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function G1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new dt};break;case"SpotLight":e={position:new I,direction:new I,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function V1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var W1=0;function q1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function X1(i){let t=new G1,e=V1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Yt,o=new Yt;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,y=0,w=0,v=0,S=0,b=0,A=0,_=0,E=0,R=0;c.sort(q1);for(let L=0,k=c.length;L<k;L++){let D=c[L],B=D.color,X=D.intensity,$=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===gs?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*X,u+=B.g*X,f+=B.b*X;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],X);R++}else if(D.isSunLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let et=D.shadow,z=e.get(D);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=rt;let ot=et.getViewportCount();for(let at=0;at<ot;at++)n.sunShadowMatrix[x+at]=et.getMatrix(at),n.sunShadowCascade[x+at]=et._cascadeData[at];x+=ot,p++}n.sun[d]=K,d++}else if(D.isDirectionalLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let et=D.shadow,z=e.get(D);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=K,m++}else if(D.isSpotLight){let K=t.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(B).multiplyScalar(X),K.distance=$,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[y]=K;let et=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,et.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=et.matrix,D.castShadow){let z=e.get(D);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=rt,A++}y++}else if(D.isRectAreaLight){let K=t.get(D);K.color.copy(B).multiplyScalar(X),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=K,w++}else if(D.isPointLight){let K=t.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){let et=D.shadow,z=e.get(D);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,z.shadowCameraNear=et.camera.near,z.shadowCameraFar=et.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=K,g++}else if(D.isHemisphereLight){let K=t.get(D);K.skyColor.copy(D.color).multiplyScalar(X),K.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[v]=K,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==_||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=d,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=_,P.numLightProbes=R,n.version=W1++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let v=c[y];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function X0(i){let t=new X1(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Y1(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new X0(i),t.set(s,[a])):r>=o.length?(a=new X0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Z1=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],J1=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Y0=new Yt,$a=new I,zf=new I;function j1(i,t,e){let n=new qr,s=new tt,r=new tt,o=new xe,a=new yc,l=new vc,c={},h=e.maxTextureSize,u={[$n]:an,[an]:$n,[je]:je},f=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:$1,fragmentShader:K1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new ye;p.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Bt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Js;let g=this.type;this.render=function(b,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Om&&(Lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Js);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Kn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=g!==this.type;k&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=b.length;D<B;D++){let X=b[D],$=X.shadow;if($===void 0){Lt("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let rt=$.getFrameExtents();s.multiply(rt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,$.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=K,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===to){if(X.isPointLight){Lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Be(s.x,s.y,{format:gs,type:Ke,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new hs(s.x,s.y,On),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Mi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ve,$.map.depthTexture.magFilter=Ve}else X.isPointLight?($.map=new bh(s.x),$.map.depthTexture=new uc(s.x,ui)):($.map=new Be(s.x,s.y),$.map.depthTexture=new hs(s.x,s.y,ui)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Mi,this.type===Js?($.map.depthTexture.compareFunction=K?yh:_h,$.map.depthTexture.minFilter=Ue,$.map.depthTexture.magFilter=Ue):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ve,$.map.depthTexture.magFilter=Ve);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let et=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,_);for(let z=0;z<et;z++){let ot=$.getCamera(z);if(X.isPointLight){let at=$.camera,Dt=$.matrix,Ht=X.distance||at.far;Ht!==at.far&&(at.far=Ht,at.updateProjectionMatrix()),$a.setFromMatrixPosition(X.matrixWorld),at.position.copy($a),zf.copy(at.position),zf.add(Z1[z]),at.up.copy(J1[z]),at.lookAt(zf),at.updateMatrixWorld(),Dt.makeTranslation(-$a.x,-$a.y,-$a.z),Y0.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Y0,at.coordinateSystem,at.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,z),i.clear();else{z===0&&(i.setRenderTarget($.map),i.clear());let at=$.getViewport(z);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),L.viewport(o)}n=$.getFrustum(z),v(A,_,ot,X,this.type)}$.isPointLightShadow!==!0&&this.type===to&&y($,_),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,P)};function y(b,A){let _=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new Be(s.x,s.y,{format:gs,type:Ke}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,_,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,_,d,x,null)}function w(b,A,_,E){let R=null,P=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=R.uuid,k=A.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let B=D[k];B===void 0&&(B=R.clone(),D[k]=B,A.addEventListener("dispose",S)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,E===to?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=_}return R}function v(b,A,_,E,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===to)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);let k=t.update(b),D=b.material;if(Array.isArray(D)){let B=k.groups;for(let X=0,$=B.length;X<$;X++){let rt=B[X],K=D[rt.materialIndex];if(K&&K.visible){let et=w(b,K,E,R);b.onBeforeShadow(i,b,A,_,k,et,rt),i.renderBufferDirect(_,null,k,et,b,rt),b.onAfterShadow(i,b,A,_,k,et,rt)}}}else if(D.visible){let B=w(b,D,E,R);b.onBeforeShadow(i,b,A,_,k,B,null),i.renderBufferDirect(_,null,k,B,b,null),b.onAfterShadow(i,b,A,_,k,B,null)}}let L=b.children;for(let k=0,D=L.length;k<D;k++)v(L[k],A,_,E,R)}function S(b){b.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Q1(i,t){function e(){let O=!1,yt=new xe,nt=null,vt=new xe(0,0,0,0);return{setMask:function(Et){nt!==Et&&!O&&(i.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){O=Et},setClear:function(Et,lt,zt,Pt,Ne){Ne===!0&&(Et*=Pt,lt*=Pt,zt*=Pt),yt.set(Et,lt,zt,Pt),vt.equals(yt)===!1&&(i.clearColor(Et,lt,zt,Pt),vt.copy(yt))},reset:function(){O=!1,nt=null,vt.set(-1,0,0,0)}}}function n(){let O=!1,yt=!1,nt=null,vt=null,Et=null;return{setReversed:function(lt){if(yt!==lt){let zt=t.get("EXT_clip_control");lt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),yt=lt;let Pt=Et;Et=null,this.setClear(Pt)}},getReversed:function(){return yt},setTest:function(lt){lt?Q(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(lt){nt!==lt&&!O&&(i.depthMask(lt),nt=lt)},setFunc:function(lt){if(yt&&(lt=_0[lt]),vt!==lt){switch(lt){case Ql:i.depthFunc(i.NEVER);break;case tc:i.depthFunc(i.ALWAYS);break;case ec:i.depthFunc(i.LESS);break;case Dr:i.depthFunc(i.LEQUAL);break;case nc:i.depthFunc(i.EQUAL);break;case ic:i.depthFunc(i.GEQUAL);break;case sc:i.depthFunc(i.GREATER);break;case rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=lt}},setLocked:function(lt){O=lt},setClear:function(lt){Et!==lt&&(Et=lt,yt&&(lt=1-lt),i.clearDepth(lt))},reset:function(){O=!1,nt=null,vt=null,Et=null,yt=!1}}}function s(){let O=!1,yt=null,nt=null,vt=null,Et=null,lt=null,zt=null,Pt=null,Ne=null;return{setTest:function(we){O||(we?Q(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(we){yt!==we&&!O&&(i.stencilMask(we),yt=we)},setFunc:function(we,ii,gi){(nt!==we||vt!==ii||Et!==gi)&&(i.stencilFunc(we,ii,gi),nt=we,vt=ii,Et=gi)},setOp:function(we,ii,gi){(lt!==we||zt!==ii||Pt!==gi)&&(i.stencilOp(we,ii,gi),lt=we,zt=ii,Pt=gi)},setLocked:function(we){O=we},setClear:function(we){Ne!==we&&(i.clearStencil(we),Ne=we)},reset:function(){O=!1,yt=null,nt=null,vt=null,Et=null,lt=null,zt=null,Pt=null,Ne=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,v=null,S=null,b=null,A=null,_=new dt(0,0,0),E=0,R=!1,P=null,L=null,k=null,D=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,rt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=rt>=1):K.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=rt>=2);let et=null,z={},ot=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),Dt=new xe().fromArray(ot),Ht=new xe().fromArray(at);function Jt(O,yt,nt,vt){let Et=new Uint8Array(4),lt=i.createTexture();i.bindTexture(O,lt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<nt;zt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(yt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return lt}let Z={};Z[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Dr),ut(!1),gt(cf),Q(i.CULL_FACE),ct(Kn);function Q(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function pt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ft(O,yt){return f[O]!==yt?(i.bindFramebuffer(O,yt),f[O]=yt,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=yt),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function Tt(O,yt){let nt=p,vt=!1;if(O){nt=d.get(yt),nt===void 0&&(nt=[],d.set(yt,nt));let Et=O.textures;if(nt.length!==Et.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,zt=Et.length;lt<zt;lt++)nt[lt]=i.COLOR_ATTACHMENT0+lt;nt.length=Et.length,vt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,vt=!0);vt&&i.drawBuffers(nt)}function $t(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let Te={[js]:i.FUNC_ADD,[km]:i.FUNC_SUBTRACT,[zm]:i.FUNC_REVERSE_SUBTRACT};Te[Hm]=i.MIN,Te[Gm]=i.MAX;let st={[Vm]:i.ZERO,[Wm]:i.ONE,[qm]:i.SRC_COLOR,[ff]:i.SRC_ALPHA,[Jm]:i.SRC_ALPHA_SATURATE,[Km]:i.DST_COLOR,[Ym]:i.DST_ALPHA,[Xm]:i.ONE_MINUS_SRC_COLOR,[df]:i.ONE_MINUS_SRC_ALPHA,[Zm]:i.ONE_MINUS_DST_COLOR,[$m]:i.ONE_MINUS_DST_ALPHA,[jm]:i.CONSTANT_COLOR,[Qm]:i.ONE_MINUS_CONSTANT_COLOR,[t0]:i.CONSTANT_ALPHA,[e0]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(O,yt,nt,vt,Et,lt,zt,Pt,Ne,we){if(O===Kn){m===!0&&(pt(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),O!==Bm){if(O!==g||we!==R){if((y!==js||S!==js)&&(i.blendEquation(i.FUNC_ADD),y=js,S=js),we)switch(O){case eo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hf:i.blendFunc(i.ONE,i.ONE);break;case uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",O);break}else switch(O){case eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uf:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pa:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",O);break}w=null,v=null,b=null,A=null,_.set(0,0,0),E=0,g=O,R=we}return}Et=Et||yt,lt=lt||nt,zt=zt||vt,(yt!==y||Et!==S)&&(i.blendEquationSeparate(Te[yt],Te[Et]),y=yt,S=Et),(nt!==w||vt!==v||lt!==b||zt!==A)&&(i.blendFuncSeparate(st[nt],st[vt],st[lt],st[zt]),w=nt,v=vt,b=lt,A=zt),(Pt.equals(_)===!1||Ne!==E)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Ne),_.copy(Pt),E=Ne),g=O,R=!1}function ht(O,yt){O.side===je?pt(i.CULL_FACE):Q(i.CULL_FACE);let nt=O.side===an;yt&&(nt=!nt),ut(nt),O.blending===eo&&O.transparent===!1?ct(Kn):ct(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let vt=O.stencilWrite;a.setTest(vt),vt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Gt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function gt(O){O!==Fm?(Q(i.CULL_FACE),O!==L&&(O===cf?i.cullFace(i.BACK):O===Um?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),L=O}function Wt(O){O!==k&&($&&i.lineWidth(O),k=O)}function Gt(O,yt,nt){O?(Q(i.POLYGON_OFFSET_FILL),(D!==yt||B!==nt)&&(D=yt,B=nt,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,nt))):pt(i.POLYGON_OFFSET_FILL)}function Kt(O){O?Q(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Qt(O){O===void 0&&(O=i.TEXTURE0+X-1),et!==O&&(i.activeTexture(O),et=O)}function F(O,yt,nt){nt===void 0&&(et===null?nt=i.TEXTURE0+X-1:nt=et);let vt=z[nt];vt===void 0&&(vt={type:void 0,texture:void 0},z[nt]=vt),(vt.type!==O||vt.texture!==yt)&&(et!==nt&&(i.activeTexture(nt),et=nt),i.bindTexture(O,yt||Z[O]),vt.type=O,vt.texture=yt)}function Se(){let O=z[et];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function he(){try{i.compressedTexImage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function M(){try{i.texSubImage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function ft(){try{i.texStorage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function mt(){try{i.texStorage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function j(){try{i.texImage2D(...arguments)}catch(O){Xt("WebGLState:",O)}}function it(){try{i.texImage3D(...arguments)}catch(O){Xt("WebGLState:",O)}}function xt(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function Ut(O,yt){u[O]!==yt&&(i.pixelStorei(O,yt),u[O]=yt)}function Mt(O){Dt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Dt.copy(O))}function _t(O){Ht.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ht.copy(O))}function Ot(O,yt){let nt=c.get(yt);nt===void 0&&(nt=new WeakMap,c.set(yt,nt));let vt=nt.get(O);vt===void 0&&(vt=i.getUniformBlockIndex(yt,O.name),nt.set(O,vt))}function qt(O,yt){let vt=c.get(yt).get(O);l.get(yt)!==vt&&(i.uniformBlockBinding(yt,vt,O.__bindingPointIndex),l.set(yt,vt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,z={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,v=null,S=null,b=null,A=null,_=new dt(0,0,0),E=0,R=!1,P=null,L=null,k=null,D=null,B=null,Dt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:pt,bindFramebuffer:Ft,drawBuffers:Tt,useProgram:$t,setBlending:ct,setMaterial:ht,setFlipSided:ut,setCullFace:gt,setLineWidth:Wt,setPolygonOffset:Gt,setScissorTest:Kt,activeTexture:Qt,bindTexture:F,unbindTexture:Se,compressedTexImage2D:he,compressedTexImage3D:C,texImage2D:j,texImage3D:it,pixelStorei:Ut,getParameter:xt,updateUBOMapping:Ot,uniformBlockBinding:qt,texStorage2D:ft,texStorage3D:mt,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:Mt,viewport:_t,reset:te}}function tw(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return p?new OffscreenCanvas(C,M):Or("canvas")}function m(C,M,H){let q=1,J=he(C);if((J.width>H||J.height>H)&&(q=H/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ft=Math.floor(q*J.width),mt=Math.floor(q*J.height);f===void 0&&(f=x(ft,mt));let j=M?x(ft,mt):f;return j.width=ft,j.height=mt,j.getContext("2d").drawImage(C,0,0,ft,mt),Lt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ft+"x"+mt+")."),j}else return"data"in C&&Lt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,M,H,q,J,ft=!1){if(C!==null){if(i[C]!==void 0)return i[C];Lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let mt;q&&(mt=t.get("EXT_texture_norm16"),mt||Lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8),H===i.UNSIGNED_SHORT&&mt&&(j=mt.R16_EXT),H===i.SHORT&&mt&&(j=mt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),M===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8),H===i.UNSIGNED_SHORT&&mt&&(j=mt.RG16_EXT),H===i.SHORT&&mt&&(j=mt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),M===i.RGB&&(H===i.UNSIGNED_SHORT&&mt&&(j=mt.RGB16_EXT),H===i.SHORT&&mt&&(j=mt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),M===i.RGBA){let it=ft?Zo:ee.getTransfer(J);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=it===_e?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&mt&&(j=mt.RGBA16_EXT),H===i.SHORT&&mt&&(j=mt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(C,M){let H;return C?M===null||M===ui||M===so?H=i.DEPTH24_STENCIL8:M===On?H=i.DEPTH32F_STENCIL8:M===io&&(H=i.DEPTH24_STENCIL8,Lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ui||M===so?H=i.DEPTH_COMPONENT24:M===On?H=i.DEPTH_COMPONENT32F:M===io&&(H=i.DEPTH_COMPONENT16),H}function b(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==Ue?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function _(C){let M=C.target;M.removeEventListener("dispose",_),P(M)}function E(C){let M=n.get(C);if(M.__webglInit===void 0)return;let H=C.source,q=d.get(H);if(q){let J=q[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(q).length===0&&d.delete(H)}n.remove(C)}function R(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let H=C.source,q=d.get(H);delete q[M.__cacheKey],o.memory.textures--}function P(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let J=0;J<M.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[q][J]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=C.textures;for(let q=0,J=H.length;q<J;q++){let ft=n.get(H[q]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(C)}let L=0;function k(){L=0}function D(){return L}function B(C){L=C}function X(){let C=L;return C>=s.maxTextures&&Lt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function $(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function rt(C,M){let H=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let q=C.image;if(q===null)Lt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Lt("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(H,C,M);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function K(C,M){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){pt(H,C,M);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function et(C,M){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){pt(H,C,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function z(C,M){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Ft(H,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let ot={[Xn]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},at={[Ve]:i.NEAREST,[Dc]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[Un]:i.LINEAR_MIPMAP_LINEAR},Dt={[c0]:i.NEVER,[p0]:i.ALWAYS,[h0]:i.LESS,[_h]:i.LEQUAL,[u0]:i.EQUAL,[yh]:i.GEQUAL,[f0]:i.GREATER,[d0]:i.NOTEQUAL};function Ht(C,M){if(M.type===On&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ue||M.magFilter===no||M.magFilter===er||M.magFilter===Un||M.minFilter===Ue||M.minFilter===no||M.minFilter===er||M.minFilter===Un)&&Lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ot[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,at[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ve||M.minFilter!==er&&M.minFilter!==Un||M.type===On&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Jt(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let q=M.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let ft=$(M);if(ft!==C.__cacheKey){J[ft]===void 0&&(J[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[ft].usedTimes++;let mt=J[C.__cacheKey];mt!==void 0&&(J[C.__cacheKey].usedTimes--,mt.usedTimes===0&&R(M)),C.__cacheKey=ft,C.__webglTexture=J[ft].texture}return H}function Z(C,M,H){return Math.floor(Math.floor(C/H)/M)}function Q(C,M,H,q){let ft=C.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,H,q,M.data);else{ft.sort((Ut,Mt)=>Ut.start-Mt.start);let mt=0;for(let Ut=1;Ut<ft.length;Ut++){let Mt=ft[mt],_t=ft[Ut],Ot=Mt.start+Mt.count,qt=Z(_t.start,M.width,4),te=Z(Mt.start,M.width,4);_t.start<=Ot+1&&qt===te&&Z(_t.start+_t.count-1,M.width,4)===qt?Mt.count=Math.max(Mt.count,_t.start+_t.count-Mt.start):(++mt,ft[mt]=_t)}ft.length=mt+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Ut=0,Mt=ft.length;Ut<Mt;Ut++){let _t=ft[Ut],Ot=Math.floor(_t.start/4),qt=Math.ceil(_t.count/4),te=Ot%M.width,O=Math.floor(Ot/M.width),yt=qt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,te,O,yt,nt,H,q,M.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function pt(C,M,H){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let J=Jt(C,M),ft=M.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+H);let mt=n.get(ft);if(ft.version!==mt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let nt=ee.getPrimaries(ee.workingColorSpace),vt=M.colorSpace===Xi?null:ee.getPrimaries(M.colorSpace),Et=M.colorSpace===Xi||nt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let it=m(M.image,!1,s.maxTextureSize);it=Se(M,it);let xt=r.convert(M.format,M.colorSpace),Ut=r.convert(M.type),Mt=v(M.internalFormat,xt,Ut,M.normalized,M.colorSpace,M.isVideoTexture);Ht(q,M);let _t,Ot=M.mipmaps,qt=M.isVideoTexture!==!0,te=mt.__version===void 0||J===!0,O=ft.dataReady,yt=b(M,it);if(M.isDepthTexture)Mt=S(M.format===ms,M.type),te&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Mt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Mt,it.width,it.height,0,xt,Ut,null));else if(M.isDataTexture)if(Ot.length>0){qt&&te&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,Ot[0].width,Ot[0].height);for(let nt=0,vt=Ot.length;nt<vt;nt++)_t=Ot[nt],qt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,_t.width,_t.height,xt,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,nt,Mt,_t.width,_t.height,0,xt,Ut,_t.data);M.generateMipmaps=!1}else qt?(te&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,it.width,it.height),O&&Q(M,it,xt,Ut)):e.texImage2D(i.TEXTURE_2D,0,Mt,it.width,it.height,0,xt,Ut,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Mt,Ot[0].width,Ot[0].height,it.depth);for(let nt=0,vt=Ot.length;nt<vt;nt++)if(_t=Ot[nt],M.format!==Bn)if(xt!==null)if(qt){if(O)if(M.layerUpdates.size>0){let Et=Cf(_t.width,_t.height,M.format,M.type);for(let lt of M.layerUpdates){let zt=_t.data.subarray(lt*Et/_t.data.BYTES_PER_ELEMENT,(lt+1)*Et/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,lt,_t.width,_t.height,1,xt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,it.depth,xt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Mt,_t.width,_t.height,it.depth,0,_t.data,0,0);else Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,_t.width,_t.height,it.depth,xt,Ut,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Mt,_t.width,_t.height,it.depth,0,xt,Ut,_t.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{qt&&te&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,Ot[0].width,Ot[0].height);for(let nt=0,vt=Ot.length;nt<vt;nt++)_t=Ot[nt],M.format!==Bn?xt!==null?qt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Mt,_t.width,_t.height,0,_t.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,_t.width,_t.height,xt,Ut,_t.data):e.texImage2D(i.TEXTURE_2D,nt,Mt,_t.width,_t.height,0,xt,Ut,_t.data)}else if(M.isDataArrayTexture)if(qt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Mt,it.width,it.height,it.depth),O)if(M.layerUpdates.size>0){let nt=Cf(it.width,it.height,M.format,M.type);for(let vt of M.layerUpdates){let Et=it.data.subarray(vt*nt/it.data.BYTES_PER_ELEMENT,(vt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,it.width,it.height,1,xt,Ut,Et)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,xt,Ut,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,it.width,it.height,it.depth,0,xt,Ut,it.data);else if(M.isData3DTexture)qt?(te&&e.texStorage3D(i.TEXTURE_3D,yt,Mt,it.width,it.height,it.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,xt,Ut,it.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,it.width,it.height,it.depth,0,xt,Ut,it.data);else if(M.isFramebufferTexture){if(te)if(qt)e.texStorage2D(i.TEXTURE_2D,yt,Mt,it.width,it.height);else{let nt=it.width,vt=it.height;for(let Et=0;Et<yt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Mt,nt,vt,0,xt,Ut,null),nt>>=1,vt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),u.add(M),nt.onpaint=vt=>{let Et=vt.changedElements;for(let lt of u)Et.includes(lt.image)&&(lt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let Et=i.RGBA,lt=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,lt,zt,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(qt&&te){let nt=he(Ot[0]);e.texStorage2D(i.TEXTURE_2D,yt,Mt,nt.width,nt.height)}for(let nt=0,vt=Ot.length;nt<vt;nt++)_t=Ot[nt],qt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,xt,Ut,_t):e.texImage2D(i.TEXTURE_2D,nt,Mt,xt,Ut,_t);M.generateMipmaps=!1}else if(qt){if(te){let nt=he(it);e.texStorage2D(i.TEXTURE_2D,yt,Mt,nt.width,nt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ut,it)}else e.texImage2D(i.TEXTURE_2D,0,Mt,xt,Ut,it);g(M)&&y(q),mt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ft(C,M,H){if(M.image.length!==6)return;let q=Jt(C,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let ft=n.get(J);if(J.version!==ft.__version||q===!0){e.activeTexture(i.TEXTURE0+H);let mt=ee.getPrimaries(ee.workingColorSpace),j=M.colorSpace===Xi?null:ee.getPrimaries(M.colorSpace),it=M.colorSpace===Xi||mt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let xt=M.isCompressedTexture||M.image[0].isCompressedTexture,Ut=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let lt=0;lt<6;lt++)!xt&&!Ut?Mt[lt]=m(M.image[lt],!0,s.maxCubemapSize):Mt[lt]=Ut?M.image[lt].image:M.image[lt],Mt[lt]=Se(M,Mt[lt]);let _t=Mt[0],Ot=r.convert(M.format,M.colorSpace),qt=r.convert(M.type),te=v(M.internalFormat,Ot,qt,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,yt=ft.__version===void 0||q===!0,nt=J.dataReady,vt=b(M,_t);Ht(i.TEXTURE_CUBE_MAP,M);let Et;if(xt){O&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,te,_t.width,_t.height);for(let lt=0;lt<6;lt++){Et=Mt[lt].mipmaps;for(let zt=0;zt<Et.length;zt++){let Pt=Et[zt];M.format!==Bn?Ot!==null?O?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt,0,0,Pt.width,Pt.height,Ot,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt,te,Pt.width,Pt.height,0,Pt.data):Lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt,0,0,Pt.width,Pt.height,Ot,qt,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt,te,Pt.width,Pt.height,0,Ot,qt,Pt.data)}}}else{if(Et=M.mipmaps,O&&yt){Et.length>0&&vt++;let lt=he(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,te,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Ut){O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Mt[lt].width,Mt[lt].height,Ot,qt,Mt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,te,Mt[lt].width,Mt[lt].height,0,Ot,qt,Mt[lt].data);for(let zt=0;zt<Et.length;zt++){let Ne=Et[zt].image[lt].image;O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt+1,0,0,Ne.width,Ne.height,Ot,qt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt+1,te,Ne.width,Ne.height,0,Ot,qt,Ne.data)}}else{O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ot,qt,Mt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,te,Ot,qt,Mt[lt]);for(let zt=0;zt<Et.length;zt++){let Pt=Et[zt];O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt+1,0,0,Ot,qt,Pt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,zt+1,te,Ot,qt,Pt.image[lt])}}}g(M)&&y(i.TEXTURE_CUBE_MAP),ft.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Tt(C,M,H,q,J,ft){let mt=r.convert(H.format,H.colorSpace),j=r.convert(H.type),it=v(H.internalFormat,mt,j,H.normalized,H.colorSpace),xt=n.get(M),Ut=n.get(H);if(Ut.__renderTarget=M,!xt.__hasExternalTextures){let Mt=Math.max(1,M.width>>ft),_t=Math.max(1,M.height>>ft);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ft,it,Mt,_t,M.depth,0,mt,j,null):e.texImage2D(J,ft,it,Mt,_t,0,mt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Qt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,Ut.__webglTexture,0,Kt(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,Ut.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(C,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let q=M.depthTexture,J=q&&q.isDepthTexture?q.type:null,ft=S(M.stencilBuffer,J),mt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Qt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(M),ft,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(M),ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,C)}else{let q=M.textures;for(let J=0;J<q.length;J++){let ft=q[J],mt=r.convert(ft.format,ft.colorSpace),j=r.convert(ft.type),it=v(ft.internalFormat,mt,j,ft.normalized,ft.colorSpace);Qt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Kt(M),it,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt(M),it,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,it,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(C,M,H){let q=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,M.depthTexture);let xt=r.convert(M.depthTexture.format),Ut=r.convert(M.depthTexture.type),Mt;M.depthTexture.format===Mi?Mt=i.DEPTH_COMPONENT24:M.depthTexture.format===ms&&(Mt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Mt,M.width,M.height,0,xt,Ut,null)}}else rt(M.depthTexture,0);let ft=J.__webglTexture,mt=Kt(M),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,it=M.depthTexture.format===ms?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Mi)Qt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,it,j,ft,0);else if(M.depthTexture.format===ms)Qt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,it,j,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(C){let M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)Te(M.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?Te(M.__webglFramebuffer[0],C,0):Te(M.__webglFramebuffer,C,0)}else if(H){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),$t(M.__webglDepthbuffer[q],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ft)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),$t(M.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,M,H){let q=n.get(C);M!==void 0&&Tt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&st(C)}function ht(C){let M=C.texture,H=n.get(C),q=n.get(M);C.addEventListener("dispose",_);let J=C.textures,ft=C.isWebGLCubeRenderTarget===!0,mt=J.length>1;if(mt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),ft){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let it=0;it<M.mipmaps.length;it++)H.__webglFramebuffer[j][it]=i.createFramebuffer()}else H.__webglFramebuffer[j]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)H.__webglFramebuffer[j]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(mt)for(let j=0,it=J.length;j<it;j++){let xt=n.get(J[j]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Qt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let it=J[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let xt=r.convert(it.format,it.colorSpace),Ut=r.convert(it.type),Mt=v(it.internalFormat,xt,Ut,it.normalized,it.colorSpace,C.isXRRenderTarget===!0),_t=Kt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),$t(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ht(i.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)Tt(H.__webglFramebuffer[j][it],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,it);else Tt(H.__webglFramebuffer[j],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(M)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let j=0,it=J.length;j<it;j++){let xt=J[j],Ut=n.get(xt),Mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ut.__webglTexture),Ht(Mt,xt),Tt(H.__webglFramebuffer,C,xt,i.COLOR_ATTACHMENT0+j,Mt,0),g(xt)&&y(Mt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,q.__webglTexture),Ht(j,M),M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)Tt(H.__webglFramebuffer[it],C,M,i.COLOR_ATTACHMENT0,j,it);else Tt(H.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,j,0);g(M)&&y(j),e.unbindTexture()}C.depthBuffer&&st(C)}function ut(C){let M=C.textures;for(let H=0,q=M.length;H<q;H++){let J=M[H];if(g(J)){let ft=w(C),mt=n.get(J).__webglTexture;e.bindTexture(ft,mt),y(ft),e.unbindTexture()}}}let gt=[],Wt=[];function Gt(C){if(C.samples>0){if(Qt(C)===!1){let M=C.textures,H=C.width,q=C.height,J=i.COLOR_BUFFER_BIT,ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(C),j=M.length>1;if(j)for(let xt=0;xt<M.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let it=C.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let xt=0;xt<M.length;xt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);let Ut=n.get(M[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,J,i.NEAREST),l===!0&&(gt.length=0,Wt.length=0,gt.push(i.COLOR_ATTACHMENT0+xt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(gt.push(ft),Wt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Wt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let xt=0;xt<M.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[xt]);let Ut=n.get(M[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Kt(C){return Math.min(s.maxSamples,C.samples)}function Qt(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Se(C,M){let H=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==on&&H!==Xi&&(ee.getTransfer(H)===_e?(q!==Bn||J!==An)&&Lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",H)),M}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=K,this.setTexture3D=et,this.setTextureCube=z,this.rebindTextures=ct,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ew(i,t){function e(n,s=Xi){let r,o=ee.getTransfer(s);if(n===An)return i.UNSIGNED_BYTE;if(n===Uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_f)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mf)return i.BYTE;if(n===gf)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===Fc)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Ke)return i.HALF_FLOAT;if(n===yf)return i.ALPHA;if(n===vf)return i.RGB;if(n===Bn)return i.RGBA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===Bc)return i.RED;if(n===kc)return i.RED_INTEGER;if(n===gs)return i.RG;if(n===zc)return i.RG_INTEGER;if(n===Hc)return i.RGBA_INTEGER;if(n===ka||n===za||n===Ha||n===Ga)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ka)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ka)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Vc||n===Wc||n===qc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xc||n===Yc||n===$c||n===Kc||n===Zc||n===Va||n===Jc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xc||n===Yc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===$c)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Kc)return r.COMPRESSED_R11_EAC;if(n===Zc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Va)return r.COMPRESSED_RG11_EAC;if(n===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jc||n===Qc||n===th||n===eh||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===hh||n===uh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Qc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===th)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ih)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ah)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ch)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uh)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fh||n===dh||n===ph)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fh)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ph)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===gh||n===Wa||n===xh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===mh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===so?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,$f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new la(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:nw,fragmentShader:iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bt(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kf=class extends bi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new $f,g={},y=e.getContextAttributes(),w=null,v=null,S=[],b=[],A=new tt,_=null,E=null,R=new nn;R.viewport=new xe;let P=new nn;P.viewport=new xe;let L=[R,P],k=new Cc,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=S[Z];return Q===void 0&&(Q=new Hr,S[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=S[Z];return Q===void 0&&(Q=new Hr,S[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=S[Z];return Q===void 0&&(Q=new Hr,S[Z]=Q),Q.getHandSpace()};function X(Z){let Q=b.indexOf(Z.inputSource);if(Q===-1)return;let pt=S[Q];pt!==void 0&&(pt.update(Z.inputSource,Z.frame,c||o),pt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",rt);for(let Z=0;Z<S.length;Z++){let Q=b[Z];Q!==null&&(b[Z]=null,S[Z].disconnect(Q))}D=null,B=null,m.reset();for(let Z in g)delete g[Z];if(t.setRenderTarget(w),d=null,f=null,u=null,s=null,v=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",rt),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ft=null,Tt=null;y.depth&&(Tt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=y.stencil?ms:Mi,Ft=y.stencil?so:ui);let $t={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer($t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Be(f.textureWidth,f.textureHeight,{format:Bn,type:An,depthTexture:new hs(f.textureWidth,f.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Be(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(Z){for(let Q=0;Q<Z.removed.length;Q++){let pt=Z.removed[Q],Ft=b.indexOf(pt);Ft>=0&&(b[Ft]=null,S[Ft].disconnect(pt))}for(let Q=0;Q<Z.added.length;Q++){let pt=Z.added[Q],Ft=b.indexOf(pt);if(Ft===-1){for(let $t=0;$t<S.length;$t++)if($t>=b.length){b.push(pt),Ft=$t;break}else if(b[$t]===null){b[$t]=pt,Ft=$t;break}if(Ft===-1)break}let Tt=S[Ft];Tt&&Tt.connect(pt)}}let K=new I,et=new I;function z(Z,Q,pt){K.setFromMatrixPosition(Q.matrixWorld),et.setFromMatrixPosition(pt.matrixWorld);let Ft=K.distanceTo(et),Tt=Q.projectionMatrix.elements,$t=pt.projectionMatrix.elements,Te=Tt[14]/(Tt[10]-1),st=Tt[14]/(Tt[10]+1),ct=(Tt[9]+1)/Tt[5],ht=(Tt[9]-1)/Tt[5],ut=(Tt[8]-1)/Tt[0],gt=($t[8]+1)/$t[0],Wt=Te*ut,Gt=Te*gt,Kt=Ft/(-ut+gt),Qt=Kt*-ut;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Qt),Z.translateZ(Kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Tt[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let F=Te+Kt,Se=st+Kt,he=Wt-Qt,C=Gt+(Ft-Qt),M=ct*st/Se*F,H=ht*st/Se*F;Z.projectionMatrix.makePerspective(he,C,M,H,F,Se),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,pt=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),k.near=P.near=R.near=Q,k.far=P.far=R.far=pt,(D!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,B=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Ft=Z.parent,Tt=k.cameras;ot(k,Ft);for(let $t=0;$t<Tt.length;$t++)ot(Tt[$t],Ft);Tt.length===2?z(k,R,P):k.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),at(Z,k,Ft)};function at(Z,Q,pt){pt===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(pt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=zs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return g[Z]};let Dt=null;function Ht(Z,Q){if(h=Q.getViewerPose(c||o),p=Q,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ft=!1;pt.length!==k.cameras.length&&(k.cameras.length=0,Ft=!0);for(let st=0;st<pt.length;st++){let ct=pt[st],ht=null;if(d!==null)ht=d.getViewport(ct);else{let gt=u.getViewSubImage(f,ct);ht=gt.viewport,st===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let ut=L[st];ut===void 0&&(ut=new nn,ut.layers.enable(st),ut.viewport=new xe,L[st]=ut),ut.matrix.fromArray(ct.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(ct.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),st===0&&(k.matrix.copy(ut.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ft===!0&&k.cameras.push(ut)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let st=u.getDepthInformation(pt[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let st=0;st<pt.length;st++){let ct=pt[st].camera;if(ct){let ht=g[ct];ht||(ht=new la,g[ct]=ht);let ut=u.getCameraImage(ct);ht.sourceTexture=ut}}}}for(let pt=0;pt<S.length;pt++){let Ft=b[pt],Tt=S[pt];Ft!==null&&Tt!==void 0&&Tt.update(Ft,Q,c||o)}Dt&&Dt(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Jt=new $0;Jt.setAnimationLoop(Ht),this.setAnimationLoop=function(Z){Dt=Z},this.dispose=function(){}}},sw=new Yt,tg=new jt;tg.set(-1,0,0,0,1,0,0,0,1);function rw(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Tf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===an&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===an&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),w=y.envMap,v=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===an&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ow(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",y));let A=S.program;n.updateUBOMapping(v,A);let _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){let S=u();v.__bindingPointIndex=S;let b=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let S=s[v.id],b=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=b.length;_<E;_++){let R=b[_];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],_,P,A);else d(R,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,b,A){if(x(v,S,b,A)===!0){let _=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let L=E[P],k=g(L);p(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function p(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function x(v,S,b,A){let _=v.value,E=S+"_"+b;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(v){let S=v.uniforms,b=0,A=16;for(let E=0,R=S.length;E<R;E++){let P=Array.isArray(S[E])?S[E]:[S[E]];for(let L=0,k=P.length;L<k;L++){let D=P[L],B=Array.isArray(D.value)?D.value:[D.value];for(let X=0,$=B.length;X<$;X++){let rt=B[X],K=g(rt),et=b%A,z=et%K.boundary,ot=et+z;b+=z,ot!==0&&A-ot<K.storage&&(b+=A-ot),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=K.storage}}}let _=b%A;return _>0&&(b+=A-_),v.__size=b,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Lt("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var aw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ti=null;function lw(){return Ti===null&&(Ti=new Wr(aw,16,16,gs,Ke),Ti.name="DFG_LUT",Ti.minFilter=Ue,Ti.magFilter=Ue,Ti.wrapS=Wn,Ti.wrapT=Wn,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}var Sh=class{constructor(t={}){let{canvas:e=m0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=An}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([Hc,zc,kc]),g=new Set([An,ui,io,so,Uc,Oc]),y=new Uint32Array(4),w=new Int32Array(4),v=new I,S=null,b=null,A=[],_=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,k=null,D=null,B=null;this._outputColorSpace=ne;let X=0,$=0,rt=null,K=-1,et=null,z=new xe,ot=new xe,at=null,Dt=new dt(0),Ht=0,Jt=e.width,Z=e.height,Q=1,pt=null,Ft=null,Tt=new xe(0,0,Jt,Z),$t=new xe(0,0,Jt,Z),Te=!1,st=new qr,ct=!1,ht=!1,ut=new Yt,gt=new I,Wt=new xe,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function Qt(){return rt===null?Q:1}let F=n;function Se(T,U){return e.getContext(T,U)}let he,C,M,H,q,J,ft,mt,j,it,xt,Ut,Mt,_t,Ot,qt,te,O,yt,nt,vt,Et,lt;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ne,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",ii,!1),F===null){let U="webgl2";if(F=Se(U,T),F===null)throw Se(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(T){throw e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",ii,!1),Xt("WebGLRenderer: "+T.message),T}function zt(){he=new mS(F),he.init(),vt=new ew(F,he),C=new rS(F,he,t,vt),M=new Q1(F,he),C.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),k=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),H=new _S(F),q=new k1,J=new tw(F,he,M,q,C,vt,H),ft=new pS(R),mt=new vv(F),Et=new iS(F,mt),j=new gS(F,mt,H,Et),it=new vS(F,j,mt,Et,H),O=new yS(F,C,J),Ot=new oS(q),xt=new B1(R,ft,he,C,Et,Ot),Ut=new rw(R,q),Mt=new H1,_t=new Y1(he),te=new nS(R,ft,M,it,p,l),qt=new j1(R,it,C),lt=new ow(F,H,C,M),yt=new sS(F,he,H),nt=new xS(F,he,H),H.programs=xt.programs,R.capabilities=C,R.extensions=he,R.properties=q,R.renderLists=Mt,R.shadowMap=qt,R.state=M,R.info=H}x!==An&&(E=new bS(x,e.width,e.height,a,s,r));let Pt=new Kf(R,F);this.xr=Pt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(Jt,Z,!1))},this.getSize=function(T){return T.set(Jt,Z)},this.setSize=function(T,U,Y=!0){if(Pt.isPresenting){Lt("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=T,Z=U,e.width=Math.floor(T*Q),e.height=Math.floor(U*Q),Y===!0&&(e.style.width=T+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Jt*Q,Z*Q).floor()},this.setDrawingBufferSize=function(T,U,Y){Jt=T,Z=U,Q=Y,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===An){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(Tt)},this.setViewport=function(T,U,Y,V){T.isVector4?Tt.set(T.x,T.y,T.z,T.w):Tt.set(T,U,Y,V),M.viewport(z.copy(Tt).multiplyScalar(Q).round())},this.getScissor=function(T){return T.copy($t)},this.setScissor=function(T,U,Y,V){T.isVector4?$t.set(T.x,T.y,T.z,T.w):$t.set(T,U,Y,V),M.scissor(ot.copy($t).multiplyScalar(Q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(T){M.setScissorTest(Te=T)},this.setOpaqueSort=function(T){pt=T},this.setTransparentSort=function(T){Ft=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Y=!0){let V=0;if(T){let W=!1;if(rt!==null){let wt=rt.texture.format;W=m.has(wt)}if(W){let wt=rt.texture.type,Rt=g.has(wt),St=te.getClearColor(),Ct=te.getClearAlpha(),Nt=St.r,se=St.g,ue=St.b;Rt?(y[0]=Nt,y[1]=se,y[2]=ue,y[3]=Ct,F.clearBufferuiv(F.COLOR,0,y)):(w[0]=Nt,w[1]=se,w[2]=ue,w[3]=Ct,F.clearBufferiv(F.COLOR,0,w))}else V|=F.COLOR_BUFFER_BIT}U&&(V|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ne,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",ii,!1),te.dispose(),Mt.dispose(),_t.dispose(),q.dispose(),ft.dispose(),it.dispose(),Et.dispose(),lt.dispose(),xt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Np),Pt.removeEventListener("sessionend",Dp),Ls.stop()};function Ne(T){T.preventDefault(),Jo("WebGLRenderer: Context Lost."),P=!0}function we(){Jo("WebGLRenderer: Context Restored."),P=!1;let T=H.autoReset,U=qt.enabled,Y=qt.autoUpdate,V=qt.needsUpdate,W=qt.type;zt(),H.autoReset=T,qt.enabled=U,qt.autoUpdate=Y,qt.needsUpdate=V,qt.type=W}function ii(T){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gi(T){let U=T.target;U.removeEventListener("dispose",gi),F_(U)}function F_(T){U_(T),q.remove(T)}function U_(T){let U=q.get(T).programs;U!==void 0&&(U.forEach(function(Y){xt.releaseProgram(Y)}),T.isShaderMaterial&&xt.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,V,W,wt){U===null&&(U=Gt);let Rt=W.isMesh&&W.matrixWorld.determinantAffine()<0,St=k_(T,U,Y,V,W);M.setMaterial(V,Rt);let Ct=Y.index,Nt=1;if(V.wireframe===!0){if(Ct=j.getWireframeAttribute(Y),Ct===void 0)return;Nt=2}let se=Y.drawRange,ue=Y.attributes.position,It=se.start*Nt,Ee=(se.start+se.count)*Nt;wt!==null&&(It=Math.max(It,wt.start*Nt),Ee=Math.min(Ee,(wt.start+wt.count)*Nt)),Ct!==null?(It=Math.max(It,0),Ee=Math.min(Ee,Ct.count)):ue!=null&&(It=Math.max(It,0),Ee=Math.min(Ee,ue.count));let Ye=Ee-It;if(Ye<0||Ye===1/0)return;Et.setup(W,V,St,Y,Ct);let Fe,Ie=yt;if(Ct!==null&&(Fe=mt.get(Ct),Ie=nt,Ie.setIndex(Fe)),W.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*Qt()),Ie.setMode(F.LINES)):Ie.setMode(F.TRIANGLES);else if(W.isLine){let hn=V.linewidth;hn===void 0&&(hn=1),M.setLineWidth(hn*Qt()),W.isLineSegments?Ie.setMode(F.LINES):W.isLineLoop?Ie.setMode(F.LINE_LOOP):Ie.setMode(F.LINE_STRIP)}else W.isPoints?Ie.setMode(F.POINTS):W.isSprite&&Ie.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Ie.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let hn=W._multiDrawStarts,At=W._multiDrawCounts,vn=W._multiDrawCount,ge=Ct?mt.get(Ct).bytesPerElement:1,Gn=q.get(V).currentProgram.getUniforms();for(let xi=0;xi<vn;xi++)Gn.setValue(F,"_gl_DrawID",xi),Ie.render(hn[xi]/ge,At[xi])}else if(W.isInstancedMesh)Ie.renderInstances(It,Ye,W.count);else if(Y.isInstancedBufferGeometry){let hn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,At=Math.min(Y.instanceCount,hn);Ie.renderInstances(It,Ye,At)}else Ie.render(It,Ye)};function Lp(T,U,Y,V){L!==null&&T.isNodeMaterial&&L.setObject(V,T),ct===!0&&Ot.setState(T,Y,!1),T.transparent===!0&&T.side===je&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,yl(T,U,V),T.side=$n,T.needsUpdate=!0,yl(T,U,V),T.side=je):yl(T,U,V)}this.compile=function(T,U,Y=null){Y===null&&(Y=T),L!==null&&L.renderStart(T,U,Y),b=_t.get(Y),b.init(U),_.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),ht=this.localClippingEnabled,ct=Ot.init(this.clippingPlanes,ht),ct===!0&&Ot.setGlobalState(this.clippingPlanes,U),L!==null&&qt.render(b.state.shadowsArray,Y,U);let V=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let wt=W.material;if(wt)if(Array.isArray(wt))for(let Rt=0;Rt<wt.length;Rt++){let St=wt[Rt];Lp(St,Y,U,W),V.add(St)}else Lp(wt,Y,U,W),V.add(wt)}),b=_.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(T,U,Y=null){let V=this.compile(T,U,Y);return new Promise(W=>{function wt(){if(V.forEach(function(Rt){let Ct=q.get(Rt).currentProgram;(Ct===void 0||Ct.isReady())&&V.delete(Rt)}),V.size===0){W(T);return}setTimeout(wt,10)}he.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let mu=null;function O_(T){mu&&mu(T)}function Np(){Ls.stop()}function Dp(){Ls.start()}let Ls=new $0;Ls.setAnimationLoop(O_),typeof self<"u"&&Ls.setContext(self),this.setAnimationLoop=function(T){mu=T,Pt.setAnimationLoop(T),T===null?Ls.stop():Ls.start()},Pt.addEventListener("sessionstart",Np),Pt.addEventListener("sessionend",Dp),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(T,U);let Y=Pt.enabled===!0&&Pt.isPresenting===!0,V=E!==null&&(rt===null||Y)&&E.begin(R,rt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(U),U=Pt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,rt),b=_t.get(T,_.length),b.init(U),b.state.textureUnits=J.getTextureUnits(),_.push(b),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(ut,li,U.reversedDepth),ht=this.localClippingEnabled,ct=Ot.init(this.clippingPlanes,ht),S=Mt.get(T,A.length),S.init(),A.push(S),Pt.enabled===!0&&Pt.isPresenting===!0){let Rt=R.xr.getDepthSensingMesh();Rt!==null&&gu(Rt,U,-1/0,R.sortObjects)}gu(T,U,0,R.sortObjects),S.finish(),L!==null&&L.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(pt,Ft),Kt=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,Kt&&te.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Ot.beginShadows();let W=b.state.shadowsArray;if(qt.render(W,T,U),ct===!0&&Ot.endShadows(),(V&&E.hasRenderPass())===!1){let Rt=S.opaque,St=S.transmissive;if(b.setupLights(),U.isArrayCamera){let Ct=U.cameras;if(St.length>0)for(let Nt=0,se=Ct.length;Nt<se;Nt++){let ue=Ct[Nt];Up(Rt,St,T,ue)}Kt&&te.render(T);for(let Nt=0,se=Ct.length;Nt<se;Nt++){let ue=Ct[Nt];Fp(S,T,ue,ue.viewport)}}else St.length>0&&Up(Rt,St,T,U),Kt&&te.render(T),Fp(S,T,U)}rt!==null&&$===0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt)),V&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),Et.resetDefaultState(),K=-1,et=null,_.pop(),_.length>0?(b=_[_.length-1],J.setTextureUnits(b.state.textureUnits),ct===!0&&Ot.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,L!==null&&L.renderEnd()};function gu(T,U,Y,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(st)){V&&Wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);let Rt=it.update(T),St=T.material;St.visible&&S.push(T,Rt,St,Y,Wt.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(st))){let Rt=it.update(T),St=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Wt.copy(T.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Wt.copy(Rt.boundingSphere.center)),Wt.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(St)){let Ct=Rt.groups;for(let Nt=0,se=Ct.length;Nt<se;Nt++){let ue=Ct[Nt],It=St[ue.materialIndex];It&&It.visible&&S.push(T,Rt,It,Y,Wt.z,ue,U)}}else St.visible&&S.push(T,Rt,St,Y,Wt.z,null,U)}}let wt=T.children;for(let Rt=0,St=wt.length;Rt<St;Rt++)gu(wt[Rt],U,Y,V)}function Fp(T,U,Y,V){let{opaque:W,transmissive:wt,transparent:Rt}=T;b.setupLightsView(Y),ct===!0&&Ot.setGlobalState(R.clippingPlanes,Y),V&&M.viewport(z.copy(V)),W.length>0&&_l(W,U,Y),wt.length>0&&_l(wt,U,Y),Rt.length>0&&_l(Rt,U,Y),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Up(T,U,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){let It=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new Be(1,1,{generateMipmaps:!0,type:It?Ke:An,minFilter:Un,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let wt=b.state.transmissionRenderTarget[V.id],Rt=V.viewport||z;wt.setSize(Rt.z*R.transmissionResolutionScale,Rt.w*R.transmissionResolutionScale);let St=R.getRenderTarget(),Ct=R.getActiveCubeFace(),Nt=R.getActiveMipmapLevel();R.setRenderTarget(wt),R.getClearColor(Dt),Ht=R.getClearAlpha(),Ht<1&&R.setClearColor(16777215,.5),R.clear(),Kt&&te.render(Y);let se=R.toneMapping;R.toneMapping=hi;let ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),ct===!0&&Ot.setGlobalState(R.clippingPlanes,V),_l(T,Y,V),J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt),he.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Ee=0,Ye=U.length;Ee<Ye;Ee++){let Fe=U[Ee],{object:Ie,geometry:hn,material:At,group:vn}=Fe;if(At.side===je&&Ie.layers.test(V.layers)){let ge=At.side;At.side=an,At.needsUpdate=!0,Op(Ie,Y,V,hn,At,vn),At.side=ge,At.needsUpdate=!0,It=!0}}It===!0&&(J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt))}R.setRenderTarget(St,Ct,Nt),R.setClearColor(Dt,Ht),ue!==void 0&&(V.viewport=ue),R.toneMapping=se}function _l(T,U,Y){let V=U.isScene===!0?U.overrideMaterial:null;for(let W=0,wt=T.length;W<wt;W++){let Rt=T[W],{object:St,geometry:Ct,group:Nt}=Rt,se=Rt.material;se.allowOverride===!0&&V!==null&&(se=V),St.layers.test(Y.layers)&&Op(St,U,Y,Ct,se,Nt)}}function Op(T,U,Y,V,W,wt){L!==null&&W.isNodeMaterial&&L.setObject(T,W),T.onBeforeRender(R,U,Y,V,W,wt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,U,Y,V,T,wt),W.transparent===!0&&W.side===je&&W.forceSinglePass===!1?(W.side=an,W.needsUpdate=!0,R.renderBufferDirect(Y,U,V,W,T,wt),W.side=$n,W.needsUpdate=!0,R.renderBufferDirect(Y,U,V,W,T,wt),W.side=je):R.renderBufferDirect(Y,U,V,W,T,wt),T.onAfterRender(R,U,Y,V,W,wt)}function yl(T,U,Y){U.isScene!==!0&&(U=Gt);let V=q.get(T),W=b.state.lights,wt=b.state.shadowsArray,Rt=W.state.version,St=xt.getParameters(T,W.state,wt,U,Y,b.state.lightProbeGridArray),Ct=xt.getProgramCacheKey(St),Nt=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let se=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=ft.get(T.envMap||V.environment,se),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Nt===void 0&&(T.addEventListener("dispose",gi),Nt=new Map,V.programs=Nt);let ue=Nt.get(Ct);if(ue!==void 0){if(V.currentProgram===ue&&V.lightsStateVersion===Rt)return kp(T,St),ue}else St.uniforms=xt.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,Y,St),T.onBeforeCompile(St,R),ue=xt.acquireProgram(St,Ct),Nt.set(Ct,ue),V.uniforms=St.uniforms;let It=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(It.clippingPlanes=Ot.uniform),kp(T,St),V.needsLights=H_(T),V.lightsStateVersion=Rt,V.needsLights&&(It.ambientLightColor.value=W.state.ambient,It.lightProbe.value=W.state.probe,It.sunLights.value=W.state.sun,It.sunLightShadows.value=W.state.sunShadow,It.directionalLights.value=W.state.directional,It.directionalLightShadows.value=W.state.directionalShadow,It.spotLights.value=W.state.spot,It.spotLightShadows.value=W.state.spotShadow,It.rectAreaLights.value=W.state.rectArea,It.ltc_1.value=W.state.rectAreaLTC1,It.ltc_2.value=W.state.rectAreaLTC2,It.pointLights.value=W.state.point,It.pointLightShadows.value=W.state.pointShadow,It.hemisphereLights.value=W.state.hemi,It.sunShadowMatrix.value=W.state.sunShadowMatrix,It.sunShadowCascade.value=W.state.sunShadowCascade,It.directionalShadowMatrix.value=W.state.directionalShadowMatrix,It.spotLightMatrix.value=W.state.spotLightMatrix,It.spotLightMap.value=W.state.spotLightMap,It.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=ue,V.uniformsList=null,ue}function Bp(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ho.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function kp(T,U){let Y=q.get(T);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function B_(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Y=0,V=T.length;Y<V;Y++){let W=T[Y];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function k_(T,U,Y,V,W){U.isScene!==!0&&(U=Gt),J.resetTextureUnits();let wt=U.fog,Rt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,St=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ee.workingColorSpace,Ct=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Nt=ft.get(V.envMap||Rt,Ct),se=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ue=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),It=!!Y.morphAttributes.position,Ee=!!Y.morphAttributes.normal,Ye=!!Y.morphAttributes.color,Fe=hi;V.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Fe=R.toneMapping);let Ie=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,hn=Ie!==void 0?Ie.length:0,At=q.get(V),vn=b.state.lights;if(ct===!0&&(ht===!0||T!==et)){let De=T===et&&V.id===K;Ot.setState(V,T,De)}let ge=!1;V.version===At.__version?(At.needsLights&&At.lightsStateVersion!==vn.state.version||At.outputColorSpace!==St||W.isBatchedMesh&&At.batching===!1||!W.isBatchedMesh&&At.batching===!0||W.isBatchedMesh&&At.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&At.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&At.instancing===!1||!W.isInstancedMesh&&At.instancing===!0||W.isSkinnedMesh&&At.skinning===!1||!W.isSkinnedMesh&&At.skinning===!0||W.isInstancedMesh&&At.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&At.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&At.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&At.instancingMorph===!1&&W.morphTexture!==null||At.envMap!==Nt||V.fog===!0&&At.fog!==wt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Ot.numPlanes||At.numIntersection!==Ot.numIntersection)||At.vertexAlphas!==se||At.vertexTangents!==ue||At.morphTargets!==It||At.morphNormals!==Ee||At.morphColors!==Ye||At.toneMapping!==Fe||At.morphTargetsCount!==hn||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,At.__version=V.version);let Gn=At.currentProgram;ge===!0&&(Gn=yl(V,U,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,Gn,At));let xi=!1,Qi=!1,dr=!1,Re=Gn.getUniforms(),Ge=At.uniforms;if(M.useProgram(Gn.program)&&(xi=!0,Qi=!0,dr=!0),V.id!==K&&(K=V.id,Qi=!0),At.needsLights){let De=B_(b.state.lightProbeGridArray,W);At.lightProbeGrid!==De&&(At.lightProbeGrid=De,Qi=!0)}if(xi||et!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Re.setValue(F,"projectionMatrix",T.projectionMatrix),Re.setValue(F,"viewMatrix",T.matrixWorldInverse);let es=Re.map.cameraPosition;es!==void 0&&es.setValue(F,gt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Re.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Re.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),et!==T&&(et=T,Qi=!0,dr=!0)}if(At.needsLights&&(vn.state.sunShadowMap.length>0&&Re.setValue(F,"sunShadowMap",vn.state.sunShadowMap,J),vn.state.directionalShadowMap.length>0&&Re.setValue(F,"directionalShadowMap",vn.state.directionalShadowMap,J),vn.state.spotShadowMap.length>0&&Re.setValue(F,"spotShadowMap",vn.state.spotShadowMap,J),vn.state.pointShadowMap.length>0&&Re.setValue(F,"pointShadowMap",vn.state.pointShadowMap,J)),W.isSkinnedMesh){Re.setOptional(F,W,"bindMatrix"),Re.setOptional(F,W,"bindMatrixInverse");let De=W.skeleton;De&&(De.boneTexture===null&&De.computeBoneTexture(),Re.setValue(F,"boneTexture",De.boneTexture,J))}W.isBatchedMesh&&(Re.setOptional(F,W,"batchingTexture"),Re.setValue(F,"batchingTexture",W._matricesTexture,J),Re.setOptional(F,W,"batchingIdTexture"),Re.setValue(F,"batchingIdTexture",W._indirectTexture,J),Re.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Re.setValue(F,"batchingColorTexture",W._colorsTexture,J));let ts=Y.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&O.update(W,Y,Gn),(Qi||At.receiveShadow!==W.receiveShadow)&&(At.receiveShadow=W.receiveShadow,Re.setValue(F,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Ge.envMapIntensity.value=U.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=lw()),Qi){if(Re.setValue(F,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&z_(Ge,dr),wt&&V.fog===!0&&Ut.refreshFogUniforms(Ge,wt),Ut.refreshMaterialUniforms(Ge,V,Q,Z,b.state.transmissionRenderTarget[T.id]),At.needsLights&&At.lightProbeGrid){let De=At.lightProbeGrid;Ge.probesSH.value=De.texture,Ge.probesMin.value.copy(De.boundingBox.min),Ge.probesMax.value.copy(De.boundingBox.max),Ge.probesResolution.value.copy(De.resolution)}ho.upload(F,Bp(At),Ge,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ho.upload(F,Bp(At),Ge,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Re.setValue(F,"center",W.center),Re.setValue(F,"modelViewMatrix",W.modelViewMatrix),Re.setValue(F,"normalMatrix",W.normalMatrix),Re.setValue(F,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let De=V.uniformsGroups;for(let es=0,pr=De.length;es<pr;es++){let Hp=De[es];lt.update(Hp,Gn),lt.bind(Hp,Gn)}}return Gn}function z_(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function H_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(T,U,Y){let V=q.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=U,q.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Y=q.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){rt=T,X=U,$=Y;let V=null,W=!1,wt=!1;if(T){let St=q.get(T);if(St.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,St.__webglFramebuffer),z.copy(T.viewport),ot.copy(T.scissor),at=T.scissorTest,M.viewport(z),M.scissor(ot),M.setScissorTest(at),K=-1;return}else if(St.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(St.__hasExternalTextures)J.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let se=T.depthTexture;if(St.__boundDepthTexture!==se){if(se!==null&&q.has(se)&&(T.width!==se.image.width||T.height!==se.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let Ct=T.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(wt=!0);let Nt=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Nt[U])?V=Nt[U][Y]:V=Nt[U],W=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?V=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Nt)?V=Nt[Y]:V=Nt,z.copy(T.viewport),ot.copy(T.scissor),at=T.scissorTest}else z.copy(Tt).multiplyScalar(Q).floor(),ot.copy($t).multiplyScalar(Q).floor(),at=Te;if(Y!==0&&(V=k),M.bindFramebuffer(F.FRAMEBUFFER,V)&&M.drawBuffers(T,V),M.viewport(z),M.scissor(ot),M.setScissorTest(at),W){let St=q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,Y)}else if(wt){let St=U;for(let Ct=0;Ct<T.textures.length;Ct++){let Nt=q.get(T.textures[Ct]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ct,Nt.__webglTexture,Y,St)}}else if(T!==null&&Y!==0){let St=q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,Y)}K=-1};function zp(T){let U=q.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=C.textureFormatReadable(T.format),U.__typeReadable=C.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Y,V,W,wt,Rt,St=0){if(!(T&&T.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){M.bindFramebuffer(F.FRAMEBUFFER,Ct);try{let Nt=T.textures[St],se=Nt.format,ue=Nt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let It=zp(Nt);if(It.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&Y>=0&&Y<=T.height-W&&F.readPixels(U,Y,V,W,vt.convert(se),vt.convert(ue),wt)}finally{let Nt=rt!==null?q.get(rt).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(T,U,Y,V,W,wt,Rt,St=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(U>=0&&U<=T.width-V&&Y>=0&&Y<=T.height-W){M.bindFramebuffer(F.FRAMEBUFFER,Ct);let Nt=T.textures[St],se=Nt.format,ue=Nt.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St);let It=zp(Nt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.bufferData(F.PIXEL_PACK_BUFFER,wt.byteLength,F.STREAM_READ),F.readPixels(U,Y,V,W,vt.convert(se),vt.convert(ue),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Ye=rt!==null?q.get(rt).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Ye);let Fe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await x0(F,Fe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ee),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,wt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Ee),F.deleteSync(Fe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Y=0){let V=Math.pow(2,-Y),W=Math.floor(T.image.width*V),wt=Math.floor(T.image.height*V),Rt=U!==null?U.x:0,St=U!==null?U.y:0;J.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Rt,St,W,wt),M.unbindTexture()},this.copyTextureToTexture=function(T,U,Y=null,V=null,W=0,wt=0){let Rt,St,Ct,Nt,se,ue,It,Ee,Ye,Fe=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(Y!==null)Rt=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,Ct=Y.isBox3?Y.max.z-Y.min.z:1,Nt=Y.min.x,se=Y.min.y,ue=Y.isBox3?Y.min.z:0;else{let Ge=Math.pow(2,-W);Rt=Math.floor(Fe.width*Ge),St=Math.floor(Fe.height*Ge),T.isDataArrayTexture?Ct=Fe.depth:T.isData3DTexture?Ct=Math.floor(Fe.depth*Ge):Ct=1,Nt=0,se=0,ue=0}V!==null?(It=V.x,Ee=V.y,Ye=V.z):(It=0,Ee=0,Ye=0);let Ie=vt.convert(U.format),hn=vt.convert(U.type),At;U.isData3DTexture?(J.setTexture3D(U,0),At=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),At=F.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),At=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let vn=M.getParameter(F.UNPACK_ROW_LENGTH),ge=M.getParameter(F.UNPACK_IMAGE_HEIGHT),Gn=M.getParameter(F.UNPACK_SKIP_PIXELS),xi=M.getParameter(F.UNPACK_SKIP_ROWS),Qi=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,Fe.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),M.pixelStorei(F.UNPACK_SKIP_ROWS,se),M.pixelStorei(F.UNPACK_SKIP_IMAGES,ue);let dr=T.isDataArrayTexture||T.isData3DTexture,Re=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Ge=q.get(T),ts=q.get(U),De=q.get(Ge.__renderTarget),es=q.get(ts.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,De.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let pr=0;pr<Ct;pr++)dr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(T).__webglTexture,W,ue+pr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(U).__webglTexture,wt,Ye+pr)),F.blitFramebuffer(Nt,se,Rt,St,It,Ee,Rt,St,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||q.has(T)){let Ge=q.get(T),ts=q.get(U);M.bindFramebuffer(F.READ_FRAMEBUFFER,D),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let De=0;De<Ct;De++)dr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ge.__webglTexture,W,ue+De):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ge.__webglTexture,W),Re?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ts.__webglTexture,wt,Ye+De):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ts.__webglTexture,wt),W!==0?F.blitFramebuffer(Nt,se,Rt,St,It,Ee,Rt,St,F.COLOR_BUFFER_BIT,F.NEAREST):Re?F.copyTexSubImage3D(At,wt,It,Ee,Ye+De,Nt,se,Rt,St):F.copyTexSubImage2D(At,wt,It,Ee,Nt,se,Rt,St);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Re?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(At,wt,It,Ee,Ye,Rt,St,Ct,Ie,hn,Fe.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(At,wt,It,Ee,Ye,Rt,St,Ct,Ie,Fe.data):F.texSubImage3D(At,wt,It,Ee,Ye,Rt,St,Ct,Ie,hn,Fe):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,wt,It,Ee,Rt,St,Ie,hn,Fe.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,wt,It,Ee,Fe.width,Fe.height,Ie,Fe.data):F.texSubImage2D(F.TEXTURE_2D,wt,It,Ee,Rt,St,Ie,hn,Fe);M.pixelStorei(F.UNPACK_ROW_LENGTH,vn),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ge),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Gn),M.pixelStorei(F.UNPACK_SKIP_ROWS,xi),M.pixelStorei(F.UNPACK_SKIP_IMAGES,Qi),wt===0&&U.generateMipmaps&&F.generateMipmap(At),M.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){X=0,$=0,rt=null,M.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}};var Th=class extends ve{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new tt(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},po=new I,eg=new Yt,ng=new Yt,ig=new I,sg=new I,Ah=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),eg.copy(x.matrixWorldInverse),ng.multiplyMatrices(x.projectionMatrix,eg),h(p,p,x),this.sortObjects&&d(p)},this.setSize=function(p,x){n=p,s=x,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=x+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,m=p.children.length;x<m;x++)c(p.children[x])}function h(p,x,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){po.setFromMatrixPosition(p.matrixWorld),po.applyMatrix4(ng);let g=po.z>=-1&&po.z<=1&&p.layers.test(m.layers)===!0,y=p.element;if(y.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(e,x,m);let v=100*p.center.x,S=100*p.center.y;y.style.transformOrigin=`${v}% ${S}%`;let b=-p.rotation2D,A=po.x*r+r,_=-po.y*o+o;y.style.transform=`translate(${-v}%, ${-S}%) translate(${A}px, ${_}px) rotate(${b}rad)`,y.parentNode!==l&&l.appendChild(y),p.onAfterRender(e,x,m)}let w={distanceToCameraSquared:u(m,p)};a.objects.set(p,w)}for(let g=0,y=p.children.length;g<y;g++)h(p.children[g],x,m)}function u(p,x){return ig.setFromMatrixPosition(p.matrixWorld),sg.setFromMatrixPosition(x.matrixWorld),ig.distanceToSquared(sg)}function f(p){let x=[];return p.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function d(p){let x=f(p).sort(function(g,y){if(g.renderOrder!==y.renderOrder)return y.renderOrder-g.renderOrder;let w=a.objects.get(g).distanceToCameraSquared,v=a.objects.get(y).distanceToCameraSquared;return w-v}),m=x.length;for(let g=0,y=x.length;g<y;g++)x[g].element.style.zIndex=m-g}}};function Zf(i,t){if(t===Mf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===ro||t===qa){let e=i.getIndex();if(e===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===ro)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}function rg(i){let t=new Map,e=new Map,n=i.clone();return og(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function og(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)og(i.children[n],t.children[n],e)}var go=class extends Ei{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new id(e)}),this.register(function(e){return new sd(e)}),this.register(function(e){return new dd(e)}),this.register(function(e){return new pd(e)}),this.register(function(e){return new md(e)}),this.register(function(e){return new od(e)}),this.register(function(e){return new ad(e)}),this.register(function(e){return new ld(e)}),this.register(function(e){return new cd(e)}),this.register(function(e){return new nd(e)}),this.register(function(e){return new hd(e)}),this.register(function(e){return new rd(e)}),this.register(function(e){return new fd(e)}),this.register(function(e){return new ud(e)}),this.register(function(e){return new td(e)}),this.register(function(e){return new Rh(e,ce.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new Rh(e,ce.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new gd(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=qi.extractUrlBase(t);o=qi.resolveURL(c,this.path)}else o=qi.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new jr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===ug){try{o[ce.KHR_BINARY_GLTF]=new xd(t)}catch(u){s&&s(u);return}r=JSON.parse(o[ce.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new wd(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ce.KHR_MATERIALS_UNLIT:o[u]=new ed;break;case ce.KHR_DRACO_MESH_COMPRESSION:o[u]=new _d(r,this.dracoLoader);break;case ce.KHR_TEXTURE_TRANSFORM:o[u]=new yd;break;case ce.KHR_MESH_QUANTIZATION:o[u]=new vd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function cw(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function Xe(i,t,e){let n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var ce={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},td=class{constructor(t){this.parser=t,this.name=ce.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,h=new dt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],on);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ds(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Zs(h),c.distance=u;break;case"spot":c=new Ks(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}},ed=class{constructor(){this.name=ce.KHR_MATERIALS_UNLIT}getMaterialType(){return Me}extendParams(t,e,n){let s=[];t.color=new dt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],on),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,ne))}return Promise.all(s)}},nd=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},id=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new tt(r,r)}return Promise.all(s)}},sd=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},rd=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},od=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SHEEN}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(e.sheenColor=new dt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],on)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,ne)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},ad=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},ld=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_VOLUME}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return e.attenuationColor=new dt().setRGB(r[0],r[1],r[2],on),Promise.all(s)}},cd=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_IOR}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},hd=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return e.specularColor=new dt().setRGB(r[0],r[1],r[2],on),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,ne)),Promise.all(s)}},ud=class{constructor(t){this.parser=t,this.name=ce.EXT_MATERIALS_BUMP}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}},fd=class{constructor(t){this.parser=t,this.name=ce.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Xe(this.parser,t,this.name)!==null?qe:null}extendMaterialParams(t,e){let n=Xe(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},dd=class{constructor(t){this.parser=t,this.name=ce.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},pd=class{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}},md=class{constructor(t){this.parser=t,this.name=ce.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}},Rh=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},gd=class{constructor(t){this.name=ce.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Zn.TRIANGLES&&c.mode!==Zn.TRIANGLE_STRIP&&c.mode!==Zn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new Yt,m=new I,g=new dn,y=new I(1,1,1),w=new Vs(p.geometry,p.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),w.setMatrixAt(S,x.compose(m,g,y));let v=null;for(let S in l)if(S==="_COLOR_0"){let b=l[S];w.instanceColor=new zi(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let A=w.geometry;v=new ye,v.name=A.name;for(let _ in A.attributes)v.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)v.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)v.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),w.geometry=v}let b=l[S];v.setAttribute(S,new zi(b.array,b.itemSize,b.normalized))}ve.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},ug="glTF",Za=12,ag={JSON:1313821514,BIN:5130562},xd=class{constructor(t){this.name=ce.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ug)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Za,r=new DataView(t,Za),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===ag.JSON){let c=new Uint8Array(t,Za+o,a);this.content=n.decode(c)}else if(l===ag.BIN){let c=Za+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_d=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ce.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=bd[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=bd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=mo[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,on,f)})})}},yd=class{constructor(){this.name=ce.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),s=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*s,t.offset.x,-t.repeat.x*s,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},vd=class{constructor(){this.name=ce.KHR_MESH_QUANTIZATION}},Ch=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,f=u*u,d=f*u,p=t*c,x=p-c,m=-2*d+3*f,g=d-f,y=1-m,w=g-f+u;for(let v=0;v!==a;v++){let S=o[x+v+a],b=o[x+v+l]*h,A=o[p+v+a],_=o[p+v]*h;r[v]=y*S+w*b+m*A+g*_}return r}},hw=new dn,Md=class extends Ch{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return hw.fromArray(r).normalize().toArray(r),r}},Zn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},mo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lg={9728:Ve,9729:Ue,9984:Dc,9985:no,9986:er,9987:Un},cg={33071:Wn,33648:Fr,10497:Xn},Jf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uw={CUBICSPLINE:void 0,LINEAR:ks,STEP:Bs},jf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new He({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$n})),i.DefaultMaterial}function sr(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Ri(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function dw(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function pw(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function mw(i){let t,e=i.extensions&&i.extensions[ce.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Qf(e.attributes):t=i.indices+":"+Qf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Qf(i.targets[n]);return t}function Qf(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function Sd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function gw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xw=new Yt,wd=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new cw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ys(this.options.manager):this.textureLoader=new Aa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return sr(r,a,s),Ri(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[ce.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(qi.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=Jf[s.type],a=mo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new ze(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Jf[s.type],c=mo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,w=e.cache.get(y);w||(x=new c(a,g*d,s.count*d/h),w=new Gs(x,d/h),e.cache.add(y,w)),m=new ls(w,l,f%d/h,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new ze(x,l,p);if(s.sparse!==void 0){let g=Jf.SCALAR,y=mo[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new y(o[1],w,s.sparse.count*g),b=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new ze(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=S.length;A<_;A++){let E=S[A];if(m.setX(E,b[A*l]),l>=2&&m.setY(E,b[A*l+1]),l>=3&&m.setZ(E,b[A*l+2]),l>=4&&m.setW(E,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=lg[f.magFilter]||Ue,h.minFilter=lg[f.minFilter]||Un,h.wrapS=cg[f.wrapS]||Xn,h.wrapT=cg[f.wrapT]||Xn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ve&&h.minFilter!==Ue,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;e.isImageBitmapLoader===!0&&(p=function(x){let m=new Ze(x);m.needsUpdate=!0,f(m)}),e.load(qi.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ri(u,o),u.userData.mimeType=o.mimeType||gw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ce.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ce.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ce.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Yr,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Xr,pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return He}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},l=r.extensions||{},c=[];if(l[ce.KHR_MATERIALS_UNLIT]){let u=s[ce.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new dt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],on),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,ne)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=je);let h=r.alphaMode||jf.OPAQUE;if(h===jf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===jf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Me&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new tt(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Me&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Me){let u=r.emissiveFactor;a.emissive=new dt().setRGB(u[0],u[1],u[2],on)}return r.emissiveTexture!==void 0&&o!==Me&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ne)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ri(u,r),e.associations.set(u,{materials:t}),r.extensions&&sr(s,u,r),u})}createUniqueName(t){let e=Pe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ce.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return hg(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=mw(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ce.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=hg(new ye,c,e),c.mode===Zn.TRIANGLE_STRIP?f=f.then(d=>Zf(d,qa)):c.mode===Zn.TRIANGLE_FAN&&(f=f.then(d=>Zf(d,ro))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?fw(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,y=c[d];if(m.mode===Zn.TRIANGLES||m.mode===Zn.TRIANGLE_STRIP||m.mode===Zn.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");w&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&v?new na(x,y):new Bt(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Zn.LINES)g=new sa(x,y);else if(m.mode===Zn.LINE_STRIP)g=new Ws(x,y);else if(m.mode===Zn.LINE_LOOP)g=new ra(x,y);else if(m.mode===Zn.POINTS)g=new oa(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&pw(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),Ri(g,r),m.extensions&&sr(s,g,m),e.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&sr(s,u[0],r),u[0];let f=new oe;r.extensions&&sr(s,f,r),e.associations.set(f,{meshes:t});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new nn(oo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Yn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Ri(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Yt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new ia(a,l)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let w=0,v=f.length;w<v;w++){let S=f[w],b=d[w],A=p[w],_=x[w],E=m[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,b,A,_,E);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let y=new wa(r,void 0,g);return Ri(y,s),y})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,xw)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new I().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Vr:c.length>1?h=new oe:c.length===1?h=c[0]:h=new ve,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ri(h,r),r.extensions&&sr(n,h,r),r.matrix!==void 0){let u=new Yt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new oe;n.name&&(r.name=s.createUniqueName(n.name)),Ri(r,n),n.extensions&&sr(e,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(rg(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof pn||f instanceof Ze)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}xs[r.path]===xs.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(xs[r.path]){case xs.weights:h=Gi;break;case xs.rotation:h=Vi;break;case xs.translation:case xs.scale:h=fs;break;default:switch(n.itemSize){case 1:h=Gi;break;case 2:case 3:default:h=fs;break}break}let u=s.interpolation!==void 0?uw[s.interpolation]:ks,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+"."+xs[r.path],e.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=Sd(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof Vi?Md:Ch;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function _w(i,t,e){let n=t.attributes,s=new We;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let h=Sd(mo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Sd(mo[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new En;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function hg(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=bd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return ee.workingColorSpace!==on&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ee.workingColorSpace}" not supported.`),Ri(i,t),_w(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?dw(i,t.targets,e):i})}var Ih=class extends Hs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new mn;t.deleteAttribute("uv");let e=new He({side:an}),n=new He,s=new Zs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Bt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Vs(t,n,6),a=new ve;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Bt(t,xo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Bt(t,xo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Bt(t,xo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Bt(t,xo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Bt(t,xo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Bt(t,xo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function xo(i){return new ba({color:0,emissive:16777215,emissiveIntensity:i})}var Ja=new I;function Jn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Ja.copy(t),Ja[n]=0,Ja.normalize();let c=.5*o/(o+a),h=1-Ja.angleTo(i)/l;return Math.sign(Ja[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Ph=class i extends mn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new I,m=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),d[y+0]=Jn(x,c,"z","y",r,n),d[y+1]=1-Jn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[y+0]=1-Jn(x,c,"z","y",r,n),d[y+1]=1-Jn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[y+0]=1-Jn(x,c,"x","z",r,t),d[y+1]=Jn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[y+0]=1-Jn(x,c,"x","z",r,t),d[y+1]=1-Jn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[y+0]=1-Jn(x,c,"x","y",r,t),d[y+1]=1-Jn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[y+0]=Jn(x,c,"x","y",r,t),d[y+1]=1-Jn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Lh=["#9CAA93","#86A4A1","#8E9DB1","#A49EB9","#BB9CA6","#C79F89","#CDB27F"],fg=["sofa","media","library","meeting"],dg=[.85,1.25],Ed="26,30,42",yw=.3,_g=[240,235,227],ie={x0:3.03,x1:8,z0:-.12,z1:4.7},vw=[[4.13,-.3],[4.13,3.9]],jn=128,rr=64,pg=.012,yg=["sofa","armchair_1","armchair_2","coffee_table"],Mw={oak:"#D9C39F",black:"#1C1C1E",graphite:"#3A3A3C",fabric_warm:"#C9C5BE",fabric_light:"#E2DFDA",pot_white:"#F1EFEB",bar_white:"#EBE9E4"},Td=["#ECE6DA","#D3CABA","#ABA294","#6B6762","#36363A","#BCA680"],bw=new dt(1,1,1),Sw=new dt("#F2EEE6"),Ad=new dt().setRGB(210/255,210/255,210/255,ne).r,vg=new Map,Mg=.4;function bg(i){let t=new Set,e=new Map;return i.forEach((n,s)=>{let r=ww(n.id)%Lh.length;if(i.length<=Lh.length)for(;t.has(r);)r=(r+1)%Lh.length;t.add(r),e.set(n.id,{accent:Lh[r],layout:fg[s%fg.length]})}),e}function ww(i){let t=2166136261;for(let e of String(i))t^=e.codePointAt(0),t=Math.imul(t,16777619);return t>>>0}var _o=new WeakMap;function Sg(i){let t={layouts:new Map,glb:[],mats:[]};return i.traverse(e=>{let n=/^style_(sofa|media|library|meeting)$/.exec(e.name);if(n&&t.layouts.set(n[1],e),yg.includes(e.name)&&t.glb.push(e),e.isMesh)for(let s of[].concat(e.material))s.userData.accent&&!t.mats.includes(s)&&t.mats.push(s)}),t}function wg(i,t){_o.has(i)||_o.set(i,Sg(i));let e=_o.get(i);for(let[s,r]of e.layouts)r.visible=s===t.layout;for(let s of e.glb)s.visible=t.layout==="sofa";let n=new dt(t.accent);for(let s of e.mats)Ew(s,s.userData.accent,n)}function Eg(i){_o.has(i)||_o.set(i,Sg(i));let t=_o.get(i);return[...t.layouts.values(),...t.glb]}function Ew(i,t,e){let n=/^rug/.test(t)?e.clone().lerp(Sw,.28):e;switch(t){case"rugtint":i.color.setRGB(Math.min(1,n.r/Ad),Math.min(1,n.g/Ad),Math.min(1,n.b/Ad));break;case"fabric":i.color.copy(n).multiplyScalar(.86);break;case"panelDark":i.color.copy(n).multiplyScalar(.6);break;case"book":i.color.copy(n).multiplyScalar(.78);break;case"rugEdge":i.color.copy(n).multiplyScalar(.74);break;case"screen":i.color.copy(n).lerp(bw,.2).multiplyScalar(.92);break;case"rug":(i.accentUniform?i.accentUniform.value:i.color).copy(n);break;default:i.color.copy(n)}}function Tg(i,t){if(yg.some(s=>!i.getObjectByName(s))||t.slice(0,5).some(s=>!s))return null;let e=new Id(i);Lw(e,i),Nw(e,i),Tw(e,i);let n={sofa:t.slice(0,5).map(s=>({pos:s.pos.clone(),yaw:s.yaw}))};return n.media=Rd(e,i,"media",Aw),n.library=Rd(e,i,"library",Rw),n.meeting=Rd(e,i,"meeting",Cw),{layouts:n}}var Id=class{constructor(t){this.open=t,this.found=new Map,t.traverse(e=>{if(e.isMesh)for(let n of[].concat(e.material))n.name&&!this.found.has(n.name)&&this.found.set(n.name,n)}),this.made=new Map}mat(t){return this.found.has(t)?this.found.get(t):(this.made.has(t)||this.made.set(t,new He({name:t,color:Mw[t]||"#CCCCCC",roughness:.7})),this.made.get(t))}accent(t,e="fabric_light",n={}){let s=`accent_${t}`;if(!this.made.has(s)){let r=this.mat(e).clone();r.name=s,r.userData={accent:t},Object.assign(r,n),this.made.set(s,r)}return this.made.get(s)}plain(t,e,n=.75){return this.made.has(t)||this.made.set(t,new He({name:t,color:e,roughness:n})),this.made.get(t)}add(t,e,n,s,r,o,a=0,l=0,c=0){let h=new Bt(e,n);return h.position.set(s,r,o),h.rotation.set(l,a,c,"YXZ"),t.add(h),h}rbox(t,e,n,s){return new Ph(t,e,n,2,Math.min(s,t/2-1e-4,e/2-1e-4,n/2-1e-4))}group(t,e,n,s=0){let r=new oe;return r.position.set(e,0,n),r.rotation.y=s,t.add(r),r}};function Rd(i,t,e,n){let s=new oe,r=vw.map(([u,f])=>({pts:Bg([...Dh(u,f,.15,14),[u+.34,f+.36]]),flat:!0})),o={shadows:r,rug:null},a=n(i,s,o),l=kw(r);vg.set(e,{layers:l,rug:o.rug});let c=new Bt(new ke(ie.x1-ie.x0,ie.z1-ie.z0).rotateX(-Math.PI/2),new Me({map:Pg(l),name:`style_patch_${e}`}));c.position.set((ie.x0+ie.x1)/2,.002,(ie.z0+ie.z1)/2),c.userData.bakedName=`style_patch_${e}`,s.add(c),o.rug&&Dw(i,s,o.rug,l,e);let h=Og(s,`style_${e}`);return h.visible=!1,t.add(h),a.map(([u,f,d,p])=>({pos:new I(u,f,d),yaw:p}))}function Tw(i,t){let e=new oe;e.name="style_sofa";let s=t.getObjectByName("sofa").position,r=i.rbox(.42,.4,.14,.065);for(let l of[-1,1])i.add(e,r,i.accent("fabric"),s.x+l*1.16,.655,s.z-.16,-l*.22,-.3);let o=new Me({name:"accent_rugtint",color:16777215,blending:Pa,premultipliedAlpha:!0,transparent:!0,depthWrite:!1});o.userData={accent:"rugtint"};let a=i.add(e,new ha(2.205,128).rotateX(-Math.PI/2),o,5.3,.0015,2.3);a.userData.keep=!0,a.renderOrder=-1,t.add(e)}function Aw(i,t,e){let n=i.mat("bar_white"),s=i.mat("oak"),r=i.mat("black"),o=3.44,a=2.45,l=2.7,c=.44,h=.46;i.add(t,i.rbox(c-.08,.05,l-.12,.01),r,o,.025,a),i.add(t,i.rbox(c,h-.08,l,.012),n,o,.05+(h-.08)/2,a),i.add(t,i.rbox(c+.02,.03,l+.02,.008),s,o,h-.015,a);for(let g of[-l/6,l/6])i.add(t,new mn(.004,h-.12,.006),r,o+c/2+.001,.05+(h-.08)/2,a+g);e.shadows.push({pts:Rn(o,a,c,l),y0:0,y1:h,core:.75});let u=2,f=1.125,d=h+.17+f/2,p=o-.02;i.add(t,i.rbox(.22,.012,.44,.006),r,p,h+.006,a),i.add(t,i.rbox(.035,.2,.12,.01),r,p-.02,h+.1,a),i.add(t,i.rbox(.032,f+.036,u+.036,.01),r,p,d,a);let x=new Me({name:"accent_screen",map:zw(),toneMapped:!1});x.userData={accent:"screen"},i.add(t,new ke(u,f).rotateY(Math.PI/2),x,p+.0165,d,a),e.shadows.push({pts:Rn(p,a,.032,u+.036),y0:d-f/2-.02,y1:d+f/2+.02});let m=[];for(let g of[1.75,3.3]){let w=Math.atan2(o-5.1,a-g);Rg(i,t,e,5.1,g,w),m.push(Ag(5.1,g,w,.48,.05))}return Cg(i,t,e,6,.5,2.5,0),e.rug={kind:"rect",x0:3.9,z0:.1,x1:7.65,z1:4.25,r:.08},[[5.15,.46,.5,0],[6,.46,.5,0],[6.85,.46,.5,0],...m]}function Rw(i,t,e){let n=kg(11);mg(i,t,e,(3.12+7.35)/2,.27,7.35-3.12,0,n),mg(i,t,e,3.3,(.45+3.75)/2,3.75-.45,Math.PI/2,n),Cg(i,t,e,3.97,2.15,2.45,Math.PI/2);let s=6.7,r=2.85,o=-.69;Rg(i,t,e,s,r,o),Iw(i,t,e,7.38,2.12),Pw(i,t,e,5.75,3.72);let a=i.open.getObjectByName("tree_3").clone(!0);a.position.set(6.85,.78,.27),a.scale.setScalar(.24),t.add(a);let l=new Zr([[0,0],[.045,0],[.06,.05],[.058,.12],[.03,.2],[.028,.23],[0,.23]].map(([c,h])=>new tt(c,h)),28);return i.add(t,l,i.mat("pot_white"),4.15,.78,.25),e.rug={kind:"round",cx:5.7,cz:2.4,r:1.72},[[3.97,.46,1.3,Math.PI/2],[3.97,.46,2.15,Math.PI/2],[3.97,.46,3,Math.PI/2],Ag(s,r,o,.48,.05),[5.75,.41,3.72,.3]]}function Cw(i,t,e){let n=i.mat("oak"),s=i.mat("black"),r=5.55,o=2.05,a=2.4,l=1.1,c=.74,h=new ya(Pd(a,l,l/2),{depth:.024,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:16});h.rotateX(Math.PI/2),i.add(t,h,n,r,c-.006,o);for(let f of[-1,1])i.add(t,new Dn(.04,.04,c-.05,20),s,r+f*.62,(c-.05)/2+.012,o),i.add(t,i.rbox(.09,.024,.74,.01),s,r+f*.62,.012,o),e.shadows.push({pts:Rn(r+f*.62,o,.08,.08),y0:0,y1:c-.04},{pts:Rn(r+f*.62,o,.09,.74),core:.55,blur:.02});e.shadows.push({pts:Pd(a,l,l/2).getPoints(12).map(f=>[r+f.x,o-f.y]),y0:c-.036,y1:c});let u=[];for(let f of[r-.8,r,r+.8])Nh(i,t,e,f,o-l/2-.47,0),u.push([f,.47,o-l/2-.47,0]);Nh(i,t,e,r-a/2-.5,o,Math.PI/2),u.push([r-a/2-.5,.47,o,Math.PI/2]),Nh(i,t,e,r+a/2+.5,o,-Math.PI/2),u.push([r+a/2+.5,.47,o,-Math.PI/2]);for(let f of[r-.42,r+.42])Nh(i,t,e,f,o+l/2+.3,Math.PI);return e.rug={kind:"rect",x0:3.35,z0:.42,x1:7.75,z1:3.68,r:.08},u}function Ag(i,t,e,n,s){return[i+Math.sin(e)*s,n,t+Math.cos(e)*s,e]}function Rg(i,t,e,n,s,r){let o=i.open.getObjectByName("armchair_1").clone(!0);o.position.set(n,0,s),o.rotation.set(0,r,0),t.add(o),e.shadows.push({pts:Rn(n,s,.95,.9,r),y0:0,y1:.37,core:.88,blur:.04},{pts:Rn(...or(n,s,0,-.38,r),.95,.16,r),y0:0,y1:.85},...[-.5,.5].map(a=>({pts:Rn(...or(n,s,a,0,r),.1,.8,r),y0:0,y1:.62})))}function Cg(i,t,e,n,s,r,o){let a=i.group(t,n,s,o),l=.46;i.add(a,i.rbox(r,.035,l,.012),i.mat("oak"),0,.322,0),i.add(a,i.rbox(r-.03,.115,l-.03,.05),i.mat("fabric_warm"),0,.395,0);let c=new Dn(.016,.014,.305,12);for(let h of[-1,1])for(let u of[-1,1]){let f=h*(r/2-.09),d=u*(l/2-.07);i.add(a,c,i.mat("black"),f,.1525,d);let[p,x]=or(n,s,f,d,o);e.shadows.push({pts:Rn(p,x,.03,.03),y0:0,y1:.3,core:.5,blur:.015})}e.shadows.push({pts:Rn(n,s,r,l,o),y0:.305,y1:.452,core:.22,blur:.1})}function Nh(i,t,e,n,s,r){let o=i.group(t,n,s,r),a=i.mat("graphite"),l=i.mat("black");i.add(o,i.rbox(.48,.07,.46,.03),a,0,.43,.01),i.add(o,i.rbox(.46,.33,.05,.022),a,0,.73,-.215,0,-.1);let c=new Dn(.011,.011,.395,10);for(let u of[-1,1])for(let f of[-1,1])i.add(o,c,l,u*.2,.1975,f*.18),e.shadows.push({pts:Rn(...or(n,s,u*.2,f*.18,r),.024,.024),y0:0,y1:.395,core:.45,blur:.012});let h=new Dn(.009,.009,.16,8);for(let u of[-1,1])i.add(o,h,l,u*.18,.54,-.205);e.shadows.push({pts:Rn(...or(n,s,0,.01,r),.48,.46,r),y0:.395,y1:.465,core:.16,blur:.08},{pts:Rn(...or(n,s,0,-.215,r),.46,.05,r),y0:.565,y1:.895})}function mg(i,t,e,n,s,r,o,a){let l=i.group(t,n,s,o),c=.36,h=.78,u=.022,f=i.mat("bar_white");i.add(l,i.rbox(r-.05,.05,c-.06,.008),i.mat("black"),0,.025,-.015),i.add(l,i.rbox(r,u,c,.004),f,0,.05+u/2,0),i.add(l,i.rbox(r+.012,.03,c+.012,.008),i.mat("oak"),0,h-.015,0),i.add(l,i.rbox(r,h-.08,.012,.003),f,0,.05+(h-.08)/2,-c/2+.006);let d=Math.max(1,Math.round(r/.82)),p=r/d;for(let m=0;m<=d;m++)i.add(l,i.rbox(u,h-.08,c,.004),f,-r/2+u/2+m*(r-u)/d,.05+(h-.08)/2,0);let x=.05+u+(h-.08-u)/2;i.add(l,i.rbox(r-u,u,c-.015,.004),f,0,x,.0075);for(let m=0;m<d;m++){let g=-r/2+m*p+u,y=g+p-u;gg(i,l,g,y,.05+u,x-u/2-(.05+u),c,a),gg(i,l,g,y,x+u/2,h-.03-(x+u/2),c,a)}e.shadows.push({pts:Rn(n,s,r,c,o),y0:0,y1:h,core:.72,blur:.03})}function gg(i,t,e,n,s,r,o,a){let l=()=>a()<.12?i.accent("book","fabric_light",{roughness:.75}):i.plain(`book_${Math.floor(a()*Td.length)}`,Td[Math.floor(a()*Td.length)]),c=-o/2+.016;if(a()<.16){let f=s;for(let d=0,p=2+Math.floor(a()*3);d<p;d++){let x=.028+a()*.014,m=.2+a()*.05,g=.16+a()*.05;i.add(t,new mn(m,x,g),l(),e+.04+m/2+(a()-.5)*.02,f+x/2,c+g/2,(a()-.5)*.12),f+=x}return}let h=n-.008-(a()<.55?.1+a()*.3:0),u=e+.006+a()*.05;for(;;){let f=.02+a()*.024,d=Math.min(r-.03,.19+a()*.11),p=.16+a()*.07;if(u+f>h)break;i.add(t,new mn(f,d,p),l(),u+f/2,s+d/2,c+p/2),u+=f+(a()<.12?.006:.0015)}}function Iw(i,t,e,n,s){let r=i.mat("black");i.add(t,new Dn(.15,.16,.018,32),r,n,.009,s),i.add(t,new Dn(.011,.011,1.3,10),r,n,.018+.65,s),i.add(t,new Dn(.16,.19,.26,40),i.mat("fabric_light"),n,1.43,s),e.shadows.push({pts:Dh(n,s,.16,16),y0:0,y1:.02,core:.5,blur:.02},{pts:Rn(n,s,.024,.024),y0:0,y1:1.3},{pts:Dh(n,s,.19,16),y0:1.3,y1:1.56})}function Pw(i,t,e,n,s){let r=[[0,0],[.27,0],[.295,.02],[.31,.12],[.31,.3],[.295,.375],[.26,.405],[0,.41]];i.add(t,new Zr(r.map(([o,a])=>new tt(o,a)),40),i.accent("fabric"),n,0,s),e.shadows.push({pts:Dh(n,s,.31,20),y0:0,y1:.41,core:.82,blur:.04})}function Lw(i,t){let e=new oe,n=1.26,s=2.05,r=3.35,o=1.33,a=-8,l=12,c=.062;i.add(e,i.rbox(.018,s,n,.006),i.accent("panelDark"),a+.009,o,r);let h=(n-.04-l*c)/(l-1),u=i.rbox(.026,s-.04,c,.008);for(let d=0;d<l;d++)i.add(e,u,i.accent("panel","fabric_light",{roughness:.9}),a+.018+.013,o,r-n/2+.02+c/2+d*(c+h));let f=Og(e,"style_panel");t.add(f)}function Nw(i,t){let e=t.getObjectByName("tree_1");e&&e.traverse(n=>{n.isMesh&&n.material.name==="pot_white"&&(n.material=i.accent("pot","pot_white"))})}function Dw(i,t,e,n,s){let r,o,a,l,c;e.kind==="round"?(o=e.cx,a=e.cz,l=c=e.r*2,r=new us().absarc(0,0,e.r,0,Math.PI*2,!1)):(o=(e.x0+e.x1)/2,a=(e.z0+e.z1)/2,l=e.x1-e.x0,c=e.z1-e.z0,r=Pd(l,c,e.r));let h={x0:o-l/2,x1:o+l/2,z0:a-c/2,z1:a+c/2},u=new Ma(r,40),f=u.attributes.position,d=u.attributes.uv;for(let g=0;g<d.count;g++)d.setXY(g,f.getX(g)/l+.5,f.getY(g)/c+.5);u.rotateX(-Math.PI/2);let p=new Me({name:`style_rug_${s}`,map:Ig(e,h,n)});p.userData={accent:"rug"};let x=i.add(t,u,p,o,pg,a);x.userData.bakedName=`style_rug_${s}`;let m=r.getPoints(40).map(g=>[g.x,-g.y]);i.add(t,Gw(m,pg),i.accent("rugEdge","fabric_light",{roughness:1,side:$n}),o,0,a)}function Fw(i){return i.kind==="round"?{x0:i.cx-i.r,x1:i.cx+i.r,z0:i.cz-i.r,z1:i.cz+i.r}:{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1}}function Ig(i,t,e,n=null){let s=Math.round((t.x1-t.x0)*jn),r=Math.round((t.z1-t.z0)*jn);return Ld(s,r,o=>{Uw(o,s,r,i,t,e,n?Mg:1),n&&(o.globalCompositeOperation="multiply",o.drawImage(Dg(n,t),0,0,s,r),o.globalCompositeOperation="source-over")})}function Uw(i,t,e,n,s,r,o){i.fillStyle="rgb(247,247,246)",i.fillRect(0,0,t,e),Fg(i,t,e,7,5);let a=.18*jn;i.strokeStyle="rgba(0,0,0,0.07)",i.lineWidth=1.5,i.beginPath(),n.kind==="round"?i.arc(t/2,e/2,t/2-a,0,Math.PI*2):Vw(i,a,a,t-a*2,e-a*2,Math.max(2,n.r*jn-a*.3)),i.stroke(),Ug(i,r,s,o)}function Pg(i,t=null){let e=Math.round((ie.x1-ie.x0)*jn),n=Math.round((ie.z1-ie.z0)*jn);return Ld(e,n,s=>{t?s.drawImage(Dg(t,ie),0,0,e,n):(s.fillStyle=`rgb(${_g.join(",")})`,s.fillRect(0,0,e,n)),Fg(s,e,n,3,0),s.fillStyle="rgba(60,50,40,0.035)";for(let r=-8;r<=8;r+=1.6)r>ie.x0&&r<ie.x1&&s.fillRect(Math.round((r-ie.x0)*jn),0,1,n);for(let r=-6;r<=6;r+=1.5)r>ie.z0&&r<ie.z1&&s.fillRect(0,Math.round((r-ie.z0)*jn),e,1);Ug(s,i,ie,t?Mg:1)})}function Lg(i){let t=new Map,e=Ow(i);if(!e)return t;let n=(s,r)=>e(s,r).map((o,a)=>Math.min(255,o/_g[a]*255));for(let[s,r]of vg)t.set(`style_patch_${s}`,Pg(r.layers,e)),r.rug&&t.set(`style_rug_${s}`,Ig(r.rug,Fw(r.rug),r.layers,n));return t}function Ow(i){let s=ja(128,96),r=s.getContext("2d",{willReadFrequently:!0});try{r.drawImage(i,0,0,128,96)}catch{return null}let o=r.getImageData(0,0,128,96).data,a=(u,f)=>{let d=Math.min(127,Math.max(0,Math.floor((u+8)*8))),x=(Math.min(95,Math.max(0,Math.floor((6-f)*8)))*128+d)*4;return[o[x],o[x+1],o[x+2]]},l=[];for(let u=0;u<=1.0001;u+=.025)for(let f of[.18,.4]){let d=ie.x0+u*(ie.x1-.12-ie.x0),p=ie.z0+u*(ie.z1-ie.z0);for(let[x,m]of[[ie.x0-f,p],[d,ie.z0-f],[d,ie.z1+f]])l.push({x:x-5.5,z:m-2.3,c:a(x,m)})}let c=u=>u[0]*.3+u[1]*.55+u[2]*.15,h=null;for(let u=0;u<4&&l.length>=12;u++){h=[0,1,2].map(d=>Bw(l,d));let f=h;l=l.filter(d=>c(d.c)>=c(xg(f,d.x,d.z))*.93)}return h&&((u,f)=>xg(h,u-5.5,f-2.3).map(d=>Math.max(0,Math.min(255,d))))}var Ng=(i,t)=>[1,i,t,i*i,t*t,i*t],xg=(i,t,e)=>i.map(n=>Ng(t,e).reduce((s,r,o)=>s+r*n[o],0));function Bw(i,t){let n=Array.from({length:6},()=>new Array(7).fill(0));for(let s of i){let r=Ng(s.x,s.z);for(let o=0;o<6;o++){for(let a=0;a<6;a++)n[o][a]+=r[o]*r[a];n[o][6]+=r[o]*s.c[t]}}for(let s=0;s<6;s++)n[s][s]+=1e-6;for(let s=0;s<6;s++){let r=s;for(let o=s+1;o<6;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);[n[s],n[r]]=[n[r],n[s]];for(let o=0;o<6;o++)if(o!==s){let a=n[o][s]/n[s][s];for(let l=s;l<=6;l++)n[o][l]-=a*n[s][l]}}return n.map((s,r)=>s[6]/s[r])}function Dg(i,t){let n=Math.max(2,Math.round((t.x1-t.x0)*16)),s=Math.max(2,Math.round((t.z1-t.z0)*16)),r=ja(n,s),o=r.getContext("2d"),a=o.createImageData(n,s);for(let l=0,c=0;l<s;l++)for(let h=0;h<n;h++,c+=4){let u=i(t.x0+(h+.5)/16,t.z0+(l+.5)/16);a.data[c]=u[0],a.data[c+1]=u[1],a.data[c+2]=u[2],a.data[c+3]=255}return o.putImageData(a,0,0),r}function Fg(i,t,e,n,s){let r=i.getImageData(0,0,t,e),o=r.data,a=kg(3);for(let l=0,c=0;l<e;l++){let h=s?l&1?s*.5:-s*.5:0;for(let u=0;u<t;u++,c+=4){let f=(a()-.5)*n+h;o[c]+=f,o[c+1]+=f,o[c+2]+=f}}i.putImageData(r,0,0)}function kw(i){let t=Math.round((ie.x1-ie.x0)*rr),e=Math.round((ie.z1-ie.z0)*rr),n=ja(t,e),s=ja(t,e),r=n.getContext("2d"),o=s.getContext("2d"),a=(l,c)=>[(l-ie.x0)*rr,(c-ie.z0)*rr];for(let l of i){if(l.flat)Cd(r,l.pts,a,.07*rr,`rgb(${Ed})`);else if(l.y1>0){let c=[l.y0,l.y1].flatMap(h=>l.pts.map(([u,f])=>[u+dg[0]*h,f+dg[1]*h]));Cd(r,Bg(c),a,(.035+.17*l.y1)*rr,`rgb(${Ed})`)}l.core&&Cd(o,l.pts,a,(l.blur??.03)*rr,`rgba(${Ed},${l.core})`)}return{plume:n,ao:s}}function Ug(i,t,e,n=1){let s=(ie.x0-e.x0)*jn,r=(ie.z0-e.z0)*jn,o=(ie.x1-ie.x0)*jn,a=(ie.z1-ie.z0)*jn;i.save(),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=yw*n,i.drawImage(t.plume,s,r,o,a),i.globalAlpha=n,i.drawImage(t.ao,s,r,o,a),i.restore()}function Cd(i,t,e,n,s){let r=n>.5?2e4:0;i.save(),r?(i.shadowColor=s,i.shadowBlur=n,i.shadowOffsetX=r,i.fillStyle="#000"):i.fillStyle=s,i.beginPath(),t.forEach(([o,a],l)=>{let[c,h]=e(o,a);l?i.lineTo(c-r,h):i.moveTo(c-r,h)}),i.closePath(),i.fill(),i.restore()}function zw(){return Ld(640,360,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e*.66);n.addColorStop(0,"#202020"),n.addColorStop(.7,"#8C8C8C"),n.addColorStop(1,"#B4B4B4"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=i.createRadialGradient(t*.64,e*.58,0,t*.64,e*.58,e*.42);s.addColorStop(0,"rgba(255,255,255,0.95)"),s.addColorStop(.08,"rgba(255,255,255,0.75)"),s.addColorStop(.1,"rgba(255,255,255,0.3)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,t,e),[[.6,"#6E6E6E","#555555",.05],[.7,"#474747","#333333",.07],[.82,"#2A2A2A","#181818",.06]].forEach(([a,l,c,h],u)=>{let f=i.createLinearGradient(0,e*a,0,e);f.addColorStop(0,l),f.addColorStop(1,c),i.fillStyle=f,i.beginPath(),i.moveTo(0,e);for(let d=0;d<=t;d+=8)i.lineTo(d,e*(a+h*Math.sin(d/t*Math.PI*(1.3+u*.7)+u*1.9)+h*.4*Math.sin(d/t*Math.PI*4.1+u)));i.lineTo(t,e),i.closePath(),i.fill()});let o=i.createLinearGradient(0,0,t*.6,e);o.addColorStop(0,"rgba(255,255,255,0.06)"),o.addColorStop(.5,"rgba(255,255,255,0.015)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,t,e)})}function Og(i,t){let e=new oe;e.name=t,i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(r=>{if(r.isMesh){if(r.material.map||r.userData.keep){s.push(r);return}n.has(r.material)||n.set(r.material,[]),n.get(r.material).push([r.geometry,r.matrixWorld])}});for(let[r,o]of n)e.add(new Bt(Hw(o),r));for(let r of s)r.matrixWorld.decompose(r.position,r.quaternion,r.scale),r.removeFromParent(),e.add(r);return e}function Hw(i){let t=i.map(([a,l])=>{let c=a.index?a.toNonIndexed():a.clone();for(let h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);return c.applyMatrix4(l)}),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=0;for(let a of t)n.set(a.attributes.position.array,r),s.set(a.attributes.normal.array,r),r+=a.attributes.position.count*3,a.dispose();let o=new ye;return o.setAttribute("position",new ze(n,3)),o.setAttribute("normal",new ze(s,3)),o.computeBoundingSphere(),o}function Gw(i,t){let e=[],n=[],s=i.reduce((a,l)=>a+l[0],0)/i.length,r=i.reduce((a,l)=>a+l[1],0)/i.length;for(let a=0;a<i.length;a++){let[l,c]=i[a],[h,u]=i[(a+1)%i.length],f=h-l,d=u-c;if(Math.hypot(f,d)<1e-6)continue;let p=d,x=-f;p*((l+h)/2-s)+x*((c+u)/2-r)<0&&(p=-p,x=-x);let m=Math.hypot(p,x);p/=m,x/=m;let g=[l,0,c],y=[l,t,c],w=[h,0,u],v=[h,t,u],S=-d*p+f*x>0?[g,w,v,g,v,y]:[g,v,w,g,y,v];for(let b of S)e.push(...b),n.push(p,0,x)}let o=new ye;return o.setAttribute("position",new Zt(e,3)),o.setAttribute("normal",new Zt(n,3)),o}function Pd(i,t,e){let n=new us,s=i/2-e,r=t/2-e;return n.moveTo(-s,-t/2),n.lineTo(s,-t/2),n.absarc(s,-r,e,-Math.PI/2,0,!1),n.lineTo(i/2,r),n.absarc(s,r,e,0,Math.PI/2,!1),n.lineTo(-s,t/2),n.absarc(-s,r,e,Math.PI/2,Math.PI,!1),n.lineTo(-i/2,-r),n.absarc(-s,-r,e,Math.PI,Math.PI*1.5,!1),n}function Vw(i,t,e,n,s,r){i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function or(i,t,e,n,s){let r=Math.cos(s),o=Math.sin(s);return[i+e*r+n*o,t-e*o+n*r]}function Rn(i,t,e,n,s=0){return[[-e/2,-n/2],[e/2,-n/2],[e/2,n/2],[-e/2,n/2]].map(([r,o])=>or(i,t,r,o,s))}function Dh(i,t,e,n){return Array.from({length:n},(s,r)=>[i+e*Math.cos(r/n*Math.PI*2),t+e*Math.sin(r/n*Math.PI*2)])}function Bg(i){let t=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of t.reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function ja(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Ld(i,t,e){let n=ja(i,t);e(n.getContext("2d",{willReadFrequently:!0}),i,t);let s=new ci(n);return s.colorSpace=ne,s.anisotropy=8,s}function kg(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Ww=20;var ti=.36,$i=1.6;var Yi=new tt(9.05,-2.6),qw=/^(desk|screen|lounge)_(\d{2})$/,Xw=/^lamp_(\d{2})$/,Fh=["floor_open","floor_closed","roof","elevator_shaft","elevator_cabin"];async function Vg(i){let t=null;try{if(new URLSearchParams(location.search).get("placeholder")==="1")throw new Error("?placeholder=1");let o=await Promise.race([new go().loadAsync(`${i}/office.glb`),new Promise((a,l)=>setTimeout(()=>l(new Error("timeout")),25e3))]);o.scene.updateMatrixWorld(!0),o.scene.getObjectByName("floor_open")?t=o.scene:console.info("[office] office.glb has no floor_open (v1 file): using the procedural v2 placeholder")}catch(o){console.warn("[office] office.glb failed to load, using the procedural placeholder:",o.message)}let e=!t||Fh.some(o=>!t.getObjectByName(o))?Gg():null,n={},s=[];for(let o of Fh){let a=t&&t.getObjectByName(o);a?n[o]=a:(n[o]=e.templates[o],s.push(o))}if(t){for(let o of Fh)s.includes(o)||Yw(n[o]);s.length&&console.warn("[office] placeholder used for missing nodes:",s.join(", "))}let r=Hg(n.floor_open);if(r.desks.filter(Boolean).length<Ww){console.warn("[office] floor_open has fewer than 20 desk_NN empties: using placeholder floor_open");let o=e||Gg();return n.floor_open=o.templates.floor_open,zg(n,Hg(n.floor_open),o.nightMaps,"placeholder")}return zg(n,r,e?e.nightMaps:new Map,t?s.length?"glb+placeholder":"glb":"placeholder")}function zg(i,t,e,n){let s=null;try{new URLSearchParams(location.search).get("floorstyle")!=="0"&&(s=Tg(i.floor_open,t.lounges))}catch(r){console.warn("[office] floor styles skipped:",r.message)}return{templates:i,spots:t,nightMaps:e,source:n,style:s}}function Yw(i){let t=new Map;i.traverse(e=>{if(!e.isMesh)return;let n=$w(e);if(!n)return;e.userData.bakedName=n;let s=e.material;if(!t.has(s)){let r=s.map||s.emissiveMap||s.lightMap||null;r&&(r.colorSpace=ne),t.set(s,new Me({map:r,color:r?16777215:s.color,name:s.name}))}e.material=t.get(s)})}function $w(i){for(let t=i;t;t=t.parent)if(t.name&&t.name.startsWith("baked_"))return t.name;return null}function Hg(i){let t={desks:[],screens:[],lounges:[],lamps:[]};i.updateMatrixWorld(!0);let e=new Yt().copy(i.matrixWorld).invert(),n=new Yt,s=new I,r=new dn,o=new I,a=new I;return i.traverse(l=>{let c=qw.exec(l.name),h=Xw.exec(l.name);if(!c&&!h)return;if(n.multiplyMatrices(e,l.matrixWorld).decompose(s,r,o),h){t.lamps[Number(h[1])-1]=s.clone();return}a.set(0,0,1).applyQuaternion(r);let u={pos:s.clone(),yaw:Math.atan2(a.x,a.z)};(c[1]==="desk"?t.desks:c[1]==="screen"?t.screens:t.lounges)[Number(c[2])-1]=u}),t}var Nd=.42,Wg=[-3.4,.8],qg=[-5.7,-3.9,-2.1,-.3,1.5],Uh=-2.1,Xg=8.8,Yg=1.1,$g=[[-5,-3.4],[-2.1,-3.4],[.8,-3.4],[-5,.8],[-2.1,.8],[.8,.8]];function Cn(i,t=.7,e=0,n=""){return new He({color:i,roughness:t,metalness:e,name:n})}function be(i,t,e,n,s,r,o,a){let l=new Bt(new mn(e,n,s),t);return l.position.set(r,o,a),i.add(l),l}function Qn(i,t,e,n,s,r,o,a,l=28){let c=new Bt(new Dn(e,n,s,l),t);return c.position.set(r,o,a),i.add(c),c}function yo(i,t,e,n,s,r=0){let o=new ve;return o.name=t,o.position.set(e,n,s),o.rotation.y=r,i.add(o),o}function vo(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new ci(n);return s.colorSpace=ne,s.anisotropy=8,s}function Gg(){let i={white:Cn(16053232,.8),oak:Cn(13215100,.6),black:Cn(1842206,.45,.3),fabric:Cn(14341839,1),laptop:Cn(13225168,.35,.75),sofa:Cn(13486529,.95),armchair:Cn(3815998,.8),pot:Cn(16184818,.55),leaf1:Cn(3963719,.75),leaf2:Cn(5937752,.75),leaf3:Cn(3107390,.75),trunk:Cn(7032634,.8),mug:Cn(16777215,.4),counter:Cn(15394785,.6),glass:new He({color:14083310,roughness:.05,transparent:!0,opacity:.14,side:je,depthWrite:!1}),shaftGlass:new He({color:14083310,roughness:.05,transparent:!0,opacity:.16,side:je,depthWrite:!1})},t=()=>new He({name:"night_lamp",color:2762532,emissive:16760944,emissiveIntensity:0,roughness:.5}),e=()=>new He({name:"night_screen",color:1316635,emissive:10473727,emissiveIntensity:0,roughness:.3}),n=new Map,s={},r=new oe;r.name="floor_open",s.floor_open=r,be(r,i.white,16.4,ti,12.4,0,-ti/2,0).name="slab";let o=Kw();n.set("baked_floor",o.night);let a=new Bt(new ke(16,12).rotateX(-Math.PI/2),new Me({map:o.day,name:"baked_floor"}));a.name="baked_floor",a.position.y=.002,r.add(a),be(r,i.white,.2,2.7,12.4,-8.1,1.35,0);let l=Zw();n.set("baked_wall_left",l.night);let c=new Bt(new ke(12,2.7).rotateY(Math.PI/2),new Me({map:l.day,name:"baked_wall_left"}));c.name="baked_wall_left",c.position.set(-7.995,1.35,0),r.add(c);let h=new Bt(new ke(16,2.7),i.glass);h.position.set(0,1.35,-6),r.add(h);for(let b=-8;b<=8.001;b+=2)be(r,i.black,.07,2.7,.08,b,1.35,-6);be(r,i.black,16.2,.07,.1,0,2.7,-6),be(r,i.black,16,.08,.1,0,.04,-6);let u=(b,A,_,E,R)=>{let P=new Bt(new ke(A,_).rotateY(Math.PI/2),new Me({color:1382171,name:b}));return P.name=b,P.position.set(-7.96,R,E),r.add(P),P};u("wall_screen",2.6,1.46,-4.3,1.5),u("task_board",3,1.5,.1,1.45);for(let[b,A,_,E]of[[2.68,1.54,-4.3,1.5],[3.08,1.58,.1,1.45]])be(r,i.black,.03,A,b,-7.985,E,_);let f=[];for(let b=0;b<2;b++){let A=Wg[b];be(r,i.oak,Xg,.05,Yg,Uh,.725,A);for(let _ of[-4.1,-1.4,1.4,4.1])for(let E of[-1,1])be(r,i.black,.05,.7,.05,Uh+_,.35,A+E*.48);for(let _ of[-4.1,4.1])be(r,i.black,.04,.04,.96,Uh+_,.1,A);for(let _=0;_<10;_++){let E=b*10+_+1,R=Math.floor(_/2),P=_%2===0,L=qg[R],k=P?-1:1;Qn(r,i.fabric,.26,.29,Nd,L,Nd/2,A+k*1.05),yo(r,`desk_${String(E).padStart(2,"0")}`,L,Nd,A+k*1.05,P?0:Math.PI);let D=new oe;D.position.set(L,.75,A+k*.3),D.rotation.y=P?Math.PI:0,be(D,i.laptop,.32,.012,.22,0,.006,0);let B=new oe;B.position.set(0,.012,-.11),B.rotation.x=-.3,be(B,i.laptop,.32,.21,.008,0,.105,0);let X=new Bt(new ke(.29,.18),e());X.name=`laptop_screen_${String(E).padStart(2,"0")}`,X.position.set(0,.105,.0045),B.add(X),D.add(B),r.add(D),f.push([E,X,P]),_%3===1&&Qn(r,i.mug,.04,.035,.09,L+.38,.795,A+k*.1,14)}}r.updateMatrixWorld(!0);for(let[b,A]of f){let _=A.getWorldPosition(new I),E=A.getWorldQuaternion(new dn);yo(r,`screen_${String(b).padStart(2,"0")}`,_.x,_.y,_.z).quaternion.copy(E)}$g.forEach(([b,A],_)=>{let E=new oe;E.position.set(b,2.05,A),Qn(E,i.black,.09,.2,.2,0,.06,0,24),Qn(E,i.black,.008,.008,.9,0,.6,0,6);let R=new Bt(new Xs(.075,16,12),t());R.position.y=-.07,E.add(R),r.add(E),yo(r,`lamp_${String(_+1).padStart(2,"0")}`,b,1.95,A)}),be(r,i.sofa,2.7,.42,.95,5.9,.21,.05),be(r,i.sofa,2.7,.52,.24,5.9,.68,-.36);for(let b of[-1,1])be(r,i.sofa,.26,.62,.95,5.9+b*1.22,.31+.1,.05);for(let b=0;b<3;b++)be(r,i.sofa,.8,.1,.66,5.05+b*.85,.47,.12);[[5.05,0],[5.9,1],[6.75,2]].forEach(([b],A)=>yo(r,`lounge_0${A+1}`,b,.52,.12,0));let d=(b,A,_)=>{let E=new oe;E.position.set(b,0,2.1),E.rotation.y=A,be(E,i.armchair,.9,.38,.9,0,.19,0),be(E,i.armchair,.2,.55,.9,-.35,.55,0);for(let R of[-1,1])be(E,i.armchair,.9,.2,.14,0,.5,R*.38);r.add(E),yo(r,_,b,.42,2.1,A)};d(4.15,Math.PI/2,"lounge_04"),d(7.65,-Math.PI/2,"lounge_05"),Qn(r,i.oak,.6,.6,.04,5.9,.38,2.1,40),Qn(r,i.black,.04,.04,.36,5.9,.18,2.1,10),be(r,i.counter,3.6,1,.6,6,.5,-5.6),be(r,i.oak,3.7,.05,.7,6,1.025,-5.6),be(r,i.black,.4,.4,.3,4.9,1.25,-5.7),Qn(r,i.mug,.04,.035,.09,5.5,1.095,-5.5,14),Qn(r,i.mug,.04,.035,.09,5.65,1.095,-5.45,14),Qn(r,i.black,.2,.2,.05,6.1,.66,-4.8,20),Qn(r,i.black,.03,.03,.64,6.1,.33,-4.8,8),yo(r,"lounge_06",6.1,.68,-4.8,0);let p=(b,A,_)=>{let E=new oe;E.position.set(b,0,A),E.scale.setScalar(_),Qn(E,i.pot,.3,.22,.6,0,.3,0),Qn(E,i.trunk,.04,.05,.9,0,.9,0,8),[[0,1.55,0,.5,i.leaf1],[.3,1.35,.15,.36,i.leaf2],[-.28,1.4,-.12,.34,i.leaf3],[.05,1.95,.05,.34,i.leaf2]].forEach(([R,P,L,k,D])=>{let B=new Bt(new va(k,2),D);B.position.set(R,P,L),E.add(B)}),r.add(E)};p(-7.2,5.2,1.25),p(7.6,-3.4,1),p(7.5,5,1.2);let x=new oe;x.name="floor_closed",s.floor_closed=x,be(x,i.white,16.4,ti,12.4,0,-ti/2,0);let m=Jw(),g=new He({name:"night_windows",map:m.diffuse,emissiveMap:m.emissive,emissive:16777215,emissiveIntensity:0,roughness:.22,metalness:.25});m.diffuse.wrapS=m.emissive.wrapS=Xn,[[0,6.2,0,16.4],[Math.PI,-6.2,0,16.4],[Math.PI/2,0,8.2,12.4],[-Math.PI/2,0,-8.2,12.4]].forEach(([b,A,_,E],R)=>{let P=new ke(E,1.24),L=P.attributes.uv,k=R*.29%1;for(let B=0;B<L.count;B++)L.setX(B,L.getX(B)*(E/25.6)+k);let D=new Bt(P,g);D.rotation.y=b,D.position.set(b===Math.PI/2?8.2:b===-Math.PI/2?-8.2:0,.62,A),x.add(D)});for(let b of[-1,1])for(let A of[-1,1])be(x,i.counter,.12,1.24,.12,b*8.2,.62,A*6.2);let w=new oe;w.name="roof",s.roof=w,be(w,i.white,16.4,ti,12.4,0,ti/2,0);for(let[b,A,_,E]of[[16.4,.16,0,6.12],[16.4,.16,0,-6.12],[.16,12.4,8.12,0],[.16,12.4,-8.12,0]])be(w,i.white,b,.34,A,_,ti+.17,E);for(let[b,A,_,E,R]of[[1.6,.8,1.1,-4,-2],[1.6,.8,1.1,-1.8,-2],[1.2,.6,1.2,4,2.5],[2.2,1.6,2,5.5,-3.5]])be(w,i.counter,b,A,_,E,ti+A/2,R),be(w,i.black,b*.8,.05,_*.8,E,ti+A+.02,R);let v=new oe;v.name="elevator_shaft",v.position.set(Yi.x,0,Yi.y),s.elevator_shaft=v;for(let b of[-1,1])for(let A of[-1,1])be(v,i.black,.06,1,.06,b*.72,.5,A*.72);for(let[b,A,_]of[[0,0,.72],[Math.PI,0,-.72],[Math.PI/2,.72,0],[-Math.PI/2,-.72,0]]){let E=new Bt(new ke(1.44,1),i.shaftGlass);E.rotation.y=b,E.position.set(A,.5,_),v.add(E)}let S=new oe;S.name="elevator_cabin",S.position.set(Yi.x,0,Yi.y),s.elevator_cabin=S,be(S,i.counter,1.3,.06,1.3,0,.03,0);for(let b of[-1,1])for(let A of[-1,1])be(S,i.black,.05,2.2,.05,b*.625,1.1,A*.625);for(let[b,A,_,E]of[[1.3,.05,0,.625],[1.3,.05,0,-.625],[.05,1.3,.625,0],[.05,1.3,-.625,0]])be(S,i.black,b,.05,A,_,2.175,E);for(let[b,A,_]of[[0,0,.625],[Math.PI,0,-.625],[Math.PI/2,.625,0],[-Math.PI/2,-.625,0]]){let E=new Bt(new ke(1.25,2.1),i.shaftGlass);E.rotation.y=b,E.position.set(A,1.1,_),S.add(E)}for(let b of Fh)s[b].traverse(A=>{A.isMesh&&!A.userData.bakedName&&/^baked_/.test(A.name)&&(A.userData.bakedName=A.name)});return{templates:s,nightMaps:n}}var ei=100,xn=i=>(i+8)*ei,_n=i=>(i+6)*ei;function Kw(){let i=16*ei,t=12*ei,e=[];for(let r of Wg){e.push(["rect",Uh,r,Xg+.2,Yg+.1]);for(let o=0;o<10;o++)e.push(["circle",qg[Math.floor(o/2)],r+(o%2?1.05:-1.05),.3,.3])}e.push(["rect",5.9,.05,2.9,1],["rect",4.15,2.1,.95,.95],["rect",7.65,2.1,.95,.95],["circle",5.9,2.1,.62,.62],["rect",6,-5.6,3.7,.7],["circle",-7.2,5.2,.4,.4],["circle",7.6,-3.4,.35,.35],["circle",7.5,5,.4,.4]);let n=vo(i,t,r=>{r.fillStyle="#F0ECE5",r.fillRect(0,0,i,t);let o=r.createLinearGradient(0,0,i,t);o.addColorStop(0,"#E9E4DC"),o.addColorStop(1,"#F6F3EE"),r.fillStyle=o,r.fillRect(0,0,i,t),r.fillStyle="#DDD9D0",r.beginPath(),r.arc(xn(5.9),_n(1.3),2.25*ei,0,7),r.fill(),r.fillStyle="#E6E2DA",r.beginPath(),r.arc(xn(5.9),_n(1.3),1.75*ei,0,7),r.fill(),r.save(),r.filter="blur(18px)";for(let c=-8;c<8;c+=2)r.fillStyle="rgba(255,250,238,0.55)",r.beginPath(),r.moveTo(xn(c+.15),_n(-6)),r.lineTo(xn(c+1.85),_n(-6)),r.lineTo(xn(c+1.85+5.2),_n(-6+3.9)),r.lineTo(xn(c+.15+5.2),_n(-6+3.9)),r.fill();r.restore(),Dd(r,e,"rgba(70,62,52,0.30)",.45,.55,14),Dd(r,e,"rgba(60,52,44,0.28)",0,0,5);let a=r.createLinearGradient(0,0,130,0);a.addColorStop(0,"rgba(90,80,70,0.30)"),a.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=a,r.fillRect(0,0,130,t);let l=r.createLinearGradient(0,0,0,90);l.addColorStop(0,"rgba(90,80,70,0.18)"),l.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=l,r.fillRect(0,0,i,90)}),s=vo(i,t,r=>{r.fillStyle="#222A3E",r.fillRect(0,0,i,t),r.fillStyle="#2A3248",r.beginPath(),r.arc(xn(5.9),_n(1.3),2.25*ei,0,7),r.fill(),r.save(),r.filter="blur(26px)";for(let a=-8;a<8;a+=2)r.fillStyle="rgba(120,150,230,0.10)",r.beginPath(),r.moveTo(xn(a+.15),_n(-6)),r.lineTo(xn(a+1.85),_n(-6)),r.lineTo(xn(a+1.85+5.2),_n(-6+3.9)),r.lineTo(xn(a+.15+5.2),_n(-6+3.9)),r.fill();r.restore();for(let[a,l]of $g.concat([[5.9,1.2]])){let c=2.3*ei,h=r.createRadialGradient(xn(a+.3),_n(l+.4),0,xn(a+.3),_n(l+.4),c);h.addColorStop(0,"rgba(255,196,130,0.5)"),h.addColorStop(1,"rgba(255,196,130,0)"),r.fillStyle=h,r.fillRect(xn(a+.3)-c,_n(l+.4)-c,c*2,c*2)}Dd(r,e,"rgba(5,7,14,0.55)",.35,.45,12);let o=r.createLinearGradient(0,0,130,0);o.addColorStop(0,"rgba(0,0,0,0.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(0,0,130,t)});return{day:n,night:s}}function Dd(i,t,e,n,s,r){i.save(),i.filter=`blur(${r}px)`,i.fillStyle=e;for(let[o,a,l,c,h]of t)o==="rect"?i.fillRect(xn(a+n-c/2),_n(l+s-h/2),c*ei,h*ei):(i.beginPath(),i.ellipse(xn(a+n),_n(l+s),c*ei,h*ei,0,0,7),i.fill());i.restore()}function Zw(){let e=vo(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#F7F6F3"),r.addColorStop(.7,"#F2F0EC"),r.addColorStop(1,"#E2DFD9"),s.fillStyle=r,s.fillRect(0,0,1200,270);let o=s.createLinearGradient(1060,0,1200,0);o.addColorStop(0,"rgba(120,110,100,0)"),o.addColorStop(1,"rgba(120,110,100,0.22)"),s.fillStyle=o,s.fillRect(1060,0,140,270)}),n=vo(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#242A3A"),r.addColorStop(.7,"#2A2F3E"),r.addColorStop(1,"#161A26"),s.fillStyle=r,s.fillRect(0,0,1200,270);for(let o of[300,700]){let a=s.createRadialGradient(o,120,0,o,120,320);a.addColorStop(0,"rgba(255,190,120,0.16)"),a.addColorStop(1,"rgba(255,190,120,0)"),s.fillStyle=a,s.fillRect(o-320,0,640,270)}});return{day:e,night:n}}function Jw(){let n=jw(7),s=vo(1024,64,(o,a,l)=>{let c=o.createLinearGradient(0,0,0,l);c.addColorStop(0,"#9AA7B5"),c.addColorStop(.5,"#6E7C8C"),c.addColorStop(1,"#58687A"),o.fillStyle=c,o.fillRect(0,0,a,l),o.fillStyle="#E8EAED";for(let h=0;h<=16;h++)o.fillRect(h*64-2,0,4,l);o.fillRect(0,0,a,4),o.fillRect(0,l-5,a,5),o.fillRect(0,l*.55,a,2)}),r=vo(1024,64,(o,a,l)=>{o.fillStyle="#000",o.fillRect(0,0,a,l);for(let c=0;c<16;c++){if(n()>.42)continue;let h=.45+n()*.35;o.fillStyle=`rgb(${Math.round(255*h)},${Math.round(196*h)},${Math.round(120*h)})`,o.fillRect(c*64+5,8,54,l*.55-10),o.fillRect(c*64+5,l*.55+5,54,l*.45-14)}});return{diffuse:s,emissive:r}}function jw(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var _s=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,ln=class{constructor(t=0,e=.5){this.x=t,this.v=0,this.target=t,this.response=e,this.delay=0,this.pending=null}to(t,e=0){return e>0?(this.pending=t,this.delay=e):(this.target=t,this.pending=null),this}snap(t){return this.x=this.target=t,this.v=0,this.pending=null,this}step(t){this.pending!==null&&(this.delay-=t,this.delay<=0&&(this.target=this.pending,this.pending=null));let e=_s?Math.min(this.response,.12):this.response,n=2*Math.PI/Math.max(e,.02),s=this.x-this.target,r=this.v+n*s,o=Math.exp(-n*t);return this.x=this.target+(s+r*t)*o,this.v=(this.v-n*r*t)*o,Math.abs(this.x-this.target)<1e-5&&Math.abs(this.v)<1e-5&&(this.x=this.target,this.v=0),this.x}get settled(){return this.x===this.target&&this.v===0&&this.pending===null}},Ce=(i,t,e)=>Math.min(e,Math.max(t,i)),di=(i,t,e)=>{let n=Ce((e-i)/(t-i),0,1);return n*n*(3-2*n)},Qa=(i,t,e)=>i+(t-i)*e;var ni='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',Kg={working:"#34C759",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF",idle:"#A1A1A6"},Zg={waiting_user:0,error:0,stuck:0,working:1,done:2,idle:3},Qw=/^tsk-\d+$/i,Od=!1,Qg=(async()=>{try{document.fonts&&await Promise.race([Promise.all([document.fonts.load("600 24px Inter","Today Tasks 0123456789"),document.fonts.load("500 24px Inter","Working events"),document.fonts.load("700 24px Inter","0123456789")]).then(()=>document.fonts.ready),new Promise(i=>setTimeout(i,2500))])}catch{}Od=!0})();function Jg(i){let t=(i.task||"").trim();return t&&!Qw.test(t)?t:(i.step||"").trim()}function tx(i){try{let t=i?new Date(i):new Date,e=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Sofia",hour:"2-digit",hour12:!1}).format(t);return Number(e)%24}catch{return new Date().getHours()}}function jg(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=new ci(e);return n.colorSpace=ne,n.anisotropy=8,n.minFilter=Un,n.generateMipmaps=!0,{c:e,g:e.getContext("2d"),tex:n}}function Oh(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function tE(i,t,e,n){let s=String(t).split(/\s+/).filter(Boolean),r=[],o="";for(let a=0;a<s.length;a++){let l=o?`${o} ${s[a]}`:s[a];if(i.measureText(l).width<=e||!o?o=l:(r.push(o),o=s[a]),r.length===n)break}if(r.length<n&&o&&r.push(o),r.length===n&&s.join(" ")!==r.join(" ")){let a=r[n-1];for(;a.length>1&&i.measureText(`${a}\u2026`).width>e;)a=a.slice(0,-1);r[n-1]=`${a.replace(/[\s,.;:]+$/,"")}\u2026`}return r}var Bh=class{constructor(t,e){this.screen=t?{mesh:t,...jg(1536,864),S:1.6,W:960,H:540}:null,this.board=e?{mesh:e,...jg(1800,900),S:1.8,W:1e3,H:500}:null;for(let n of[this.screen,this.board])n&&(n.mat=new Me({map:n.tex,name:n.mesh.name}),n.mesh.material=n.mat,n.drawn=null);this.screen&&(this.screen.mat.toneMapped=!1),this.sig="",this.data=null,this.accent=null,this.lastDraw=-1e9,this.dirty=!1,this.fontsAtDraw=!1}get materials(){return[this.screen?.mat,this.board?.mat].filter(Boolean)}setData(t){let e=this.signature(t);this.data=t,e!==this.sig&&(this.sig=e,this.dirty=!0)}setAccent(t){t!==this.accent&&(this.accent=t,this.dirty=!0,this.lastDraw=-1e9)}accentDot(t,e,n,s,r,o){t.fillText(e,n,s);let a=t.measureText(e).width;return t.fillStyle=this.accent,t.beginPath(),t.arc(n+a+o*1.3,r,o*.42,0,7),t.fill(),n+a+o*2.6}signature(t){let e=[t.floorName,t.hour,t.now];for(let n of t.bots)e.push(n.id,n.effective_status||n.status,Jg(n),n.color,n.today?.events,n.today?.tasks_done,n.today?.working_min,(n.today?.hourly||[]).join(","));return e.join("|")}tick(t,e){if(this.data&&(this.dirty||!this.fontsAtDraw&&Od)&&t-this.lastDraw>1e3&&(this.lastDraw=t,this.dirty=!1,this.fontsAtDraw=Od,this.screen&&this.drawScreen(this.data),this.board&&this.drawBoard(this.data)),this.screen){let n=.86*(1-.84*e);this.screen.mat.color.setRGB(n,n,n)}if(this.board){let n=1-.46*e;this.board.mat.color.setRGB(n,n*.97,n*.93)}}drawScreen(t){let{g:e,tex:n,S:s,W:r,H:o}=this.screen;e.setTransform(s,0,0,s,0,0);let a=e.createLinearGradient(0,0,0,o);a.addColorStop(0,"#14171C"),a.addColorStop(1,"#0B0D10"),e.fillStyle=a,e.fillRect(0,0,r,o);let l=e.createRadialGradient(r*.2,0,0,r*.2,0,r*.7);l.addColorStop(0,"rgba(52,199,89,0.10)"),l.addColorStop(1,"rgba(52,199,89,0)"),e.fillStyle=l,e.fillRect(0,0,r,o);let c=t.bots,h=c.filter(L=>(L.effective_status||L.status)==="working").length,u=Fd(c,L=>L.today?.events),f=Fd(c,L=>L.today?.tasks_done),d=Fd(c,L=>L.today?.working_min)/60,p=new Array(24).fill(0);for(let L of c)for(let k=0;k<24;k++)p[k]+=Number(L.today?.hourly?.[k])||0;e.textBaseline="alphabetic",e.fillStyle="#8E8E93",e.font=`500 32px ${ni}`;let x;this.accent?x=this.accentDot(e,"Today",44,62,51,20):(e.fillText("Today \xB7 ",44,62),x=44+e.measureText("Today \xB7 ").width),e.fillStyle="#F5F5F7",e.font=`650 40px ${ni}`,e.fillText(Ud(e,t.floorName||"",744-x),x,62),e.fillStyle="#34C759",e.beginPath(),e.arc(r-52,50,7,0,7),e.fill(),e.fillStyle="rgba(52,199,89,0.25)",e.beginPath(),e.arc(r-52,50,14,0,7),e.fill();let m=[[`${h} of ${c.length}`,"working now"],[String(u),"events today"],[String(f),"tasks done"],[d.toFixed(1),"hours worked"]],g=205,y=14,w=44,v=100;m.forEach(([L,k],D)=>{let B=w+D*(g+y);e.fillStyle="rgba(255,255,255,0.065)",Oh(e,B,v,g,108,18),e.fill(),e.fillStyle=D===0?"#34C759":"#F5F5F7",e.font=`700 42px ${ni}`,e.fillText(L,B+20,v+55),e.fillStyle="#8E8E93",e.font=`500 17px ${ni}`,e.fillText(k,B+20,v+86)});let S=44,b=r-88,A=250,_=220;e.fillStyle="#8E8E93",e.font=`500 17px ${ni}`,e.fillText("Events by hour",S,A-4);let E=Math.max(1,...p),R=b/24,P=R*.62;for(let L=0;L<24;L++){let k=S+L*R+(R-P)/2,D=p[L]>0?Math.max(8,p[L]/E*(_-20)):6,B=A+_-D,X=L===t.hour;e.save(),X&&(e.shadowColor="rgba(52,199,89,0.85)",e.shadowBlur=18),e.fillStyle=X?"#34C759":L>t.hour?"rgba(255,255,255,0.08)":p[L]>0?"rgba(52,199,89,0.55)":"rgba(255,255,255,0.10)",Oh(e,k,B,P,D,Math.min(5,P/2)),e.fill(),e.restore()}e.fillStyle="#6E6E73",e.font=`500 15px ${ni}`,e.textAlign="center";for(let L of[0,6,12,18])e.fillText(String(L).padStart(2,"0"),S+L*R+R/2,A+_+26);e.fillText("24",S+23*R+R/2+4,A+_+26),e.textAlign="left",n.needsUpdate=!0}drawBoard(t){let{g:e,tex:n,S:s,W:r,H:o}=this.board;e.setTransform(s,0,0,s,0,0),e.fillStyle="#F1F0EC",e.fillRect(0,0,r,o),e.fillStyle="#FAF9F6",e.fillRect(0,0,r,68),e.fillStyle="#E3E0D9",e.fillRect(0,68,r,2),e.fillStyle="#1D1D1F",e.font=`700 34px ${ni}`;let a;this.accent?a=this.accentDot(e,"Tasks",36,49,37,20):(e.fillText("Tasks",36,49),a=36+e.measureText("Tasks ").width),e.fillStyle="#6E6E73",e.font=`600 26px ${ni}`,e.fillText(`${this.accent?"":"\xB7 "}${Ud(e,t.floorName||"",420)}`,a,49);let l=[...t.bots].sort((g,y)=>(Zg[g.effective_status||g.status]??3)-(Zg[y.effective_status||y.status]??3)||String(g.name).localeCompare(String(y.name))),c=l.slice(0,8),h=l.length-c.length;h>0&&(e.textAlign="right",e.fillStyle="#515154",e.font=`700 28px ${ni}`,e.fillText(`+${h}`,r-36,49),e.textAlign="left"),c.length||(e.fillStyle="#8E8E93",e.font=`600 28px ${ni}`,e.fillText("Nobody on this floor yet",36,160));let u=4,f=30,d=16,p=90,x=(r-f*2-d*(u-1))/u,m=(o-p-28-d)/2;c.forEach((g,y)=>{let w=f+y%u*(x+d),v=p+Math.floor(y/u)*(m+d),S=g.effective_status||g.status;e.save(),e.shadowColor="rgba(40,36,30,0.18)",e.shadowBlur=14,e.shadowOffsetY=3,e.fillStyle="#FFFFFF",Oh(e,w,v,x,m,14),e.fill(),e.restore(),e.fillStyle=g.color||"#A1A1A6",Oh(e,w+10,v+12,9,m-24,4.5),e.fill(),e.fillStyle=Kg[S]||Kg.idle,e.beginPath(),e.arc(w+x-22,v+26,8,0,7),e.fill(),e.fillStyle="#1D1D1F",e.font=`700 25px ${ni}`,e.fillText(Ud(e,g.name||"",x-76),w+32,v+36),e.fillStyle="#3A3A3C",e.font=`600 21px ${ni}`,tE(e,Jg(g)||"\u2014",x-52,3).forEach((A,_)=>e.fillText(A,w+32,v+72+_*28))}),n.needsUpdate=!0}};function Fd(i,t){let e=0;for(let n of i)e+=Number(t(n))||0;return e}function Ud(i,t,e){let n=String(t);if(i.measureText(n).width<=e)return n;for(;n.length>1&&i.measureText(`${n}\u2026`).width>e;)n=n.slice(0,-1);return`${n.trimEnd()}\u2026`}var tl=20,Mo=.14,ex=.4,eE=7,nE=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,iE=2.2,Bd=[.2,.26,.42];function sE(i,t){return new Ys().loadAsync(`${i}/night/${encodeURIComponent(t)}.jpg`).then(e=>(e.flipY=!1,e.colorSpace=ne,e.anisotropy=8,e)).catch(()=>null)}var ar=class{constructor(t,e,n){this.b=t,this.kind=n,this.root=new oe,this.root.name=`${n}-instance`,this.obj=e.clone(!0),this.root.add(this.obj),this.alpha=1,this.mats=[],this.textures=[],this.screens=[],this.walls=null,this.floorId=null,n!=="shaft"&&n!=="cabin"&&this.obj.position.set(0,0,0);let s=new Map,r=Math.random();if(this.obj.traverse(o=>{if(!o.isMesh)return;let l=(Array.isArray(o.material)?o.material:[o.material]).map(h=>{let u=/^laptop_screen_\d\d$/.test(o.name),f=u?null:s.get(h);return f||(f=h.clone(),u||s.set(h,f),this.register(f,o,r)),f});o.material=Array.isArray(o.material)?l:l[0];let c=/^laptop_screen_(\d\d)$/.exec(o.name);c&&(this.screens[Number(c[1])-1]={mat:l[0],glow:0,target:0})}),n==="open"){let o=this.obj.getObjectByName("wall_screen"),a=this.obj.getObjectByName("task_board");(o||a)&&(this.walls=new Bh(o,a))}}register(t,e,n){this.mats.push(t);let s=e.userData.bakedName;if(s&&t.map&&!t.userData.nightPatched&&this.b.patchBaked(t,s),t.name==="night_lamp")t.emissive.getHex()===0&&t.emissive.set(16760944),t.emissiveIntensity=0,this.b.daylight.track(t,"lamp");else if(t.name==="night_windows"){if(t.emissive.getHex()===0&&t.emissive.set(16777215),t.emissiveIntensity=0,t.emissiveMap){let r=t.emissiveMap.clone(),o=t.map?t.map.clone():null;for(let a of[r,o])a&&(a.wrapS=a.wrapT=Xn,a.offset.x=n,a.needsUpdate=!0,this.textures.push(a));t.emissiveMap=r,o&&(t.map=o)}this.b.daylight.track(t,"windows")}else t.name==="night_screen"&&(t.emissive.getHex()===0&&t.emissive.set(10473727),t.emissiveIntensity=0)}setShown(t){this.alpha=t?1:0,this.root.visible=t}dispose(){for(let t of this.mats)this.b.daylight.untrack(t),t.dispose();for(let t of this.textures)t.dispose();this.root.removeFromParent()}},kh=class{constructor({scene:t,daylight:e,assets:n,baseUrl:s,renderer:r}){this.scene=t,this.daylight=e,this.assets=n,this.baseUrl=s,this.renderer=r,this.group=new oe,this.group.name="building",this.group.visible=!1,t.add(this.group),this.introDrop=!1,this.slots=[],this.byId=new Map,this.styles=new Map,this.activeIndex=-1,this.pool=[],this.sig="",this.floorData=null,this.nightRecs=new Map,this.roof=new ar(this,n.templates.roof,"roof"),this.roofLift=new ln(1,.5),this.group.add(this.roof.root),this.shaft=new ar(this,n.templates.elevator_shaft,"shaft"),this.cabin=new ar(this,n.templates.elevator_cabin,"cabin"),this.group.add(this.shaft.root,this.cabin.root),this.setupElevatorGeometry(),this.cabinY=new ln(0,.55),this.shaftTop=new ln(1,.55),this.lampPositions=Array.from({length:6},()=>new I),e.setLampSource(()=>{let o=this.activeOpen();if(!o)return null;let a=this.assets.spots.lamps;for(let l=0;l<6;l++){let c=a[l];this.lampPositions[l].set(c?c.x:0,c?c.y+o.root.position.y:-99,c?c.z:0)}return{positions:a.length?this.lampPositions:[],k:o.alpha}}),this.screenTargets=new Array(20).fill(0);for(let o=0;o<2;o++){let a=new ar(this,n.templates.floor_open,"open");a.setShown(!1),this.group.add(a.root),this.pool.push(a)}this.pulseT=-1,this.swapped=!0,this.blurPx=0}setupElevatorGeometry(){this.shaftH=1;for(let t of[this.shaft,this.cabin]){t.root.updateMatrixWorld(!0);let e=new We().setFromObject(t.obj);if(!Number.isFinite(e.min.y))continue;let n=e.getCenter(new I);t.obj.position.y-=e.min.y,(Math.abs(n.x-Yi.x)>1.5||Math.abs(n.z-Yi.y)>1.5)&&(t.obj.position.x+=Yi.x-n.x,t.obj.position.z+=Yi.y-n.z),t===this.shaft&&(this.shaftH=Math.max(.01,e.max.y-e.min.y))}}patchBaked(t,e){t.userData.nightPatched=!0;let n=this.nightRecs.get(e);if(!n){let a=this.assets.nightMaps.get(e),l=e.startsWith("style_");n={name:e,uMap:{value:a||t.map},uTint:{value:new I(...a?[1,1,1]:Bd)},dayMap:t.map,tex:null,state:a||l?"static":"idle",since:0},this.nightRecs.set(e,n)}let{uMap:s,uTint:r}=n,o=t.userData.accent?t.accentUniform={value:new dt(1,1,1)}:null;t.onBeforeCompile=a=>{a.uniforms.uNight=this.daylight.uNight,a.uniforms.uNightMap=s,a.uniforms.uNightTint=r,o&&(a.uniforms.uAccent=o),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform sampler2D uNightMap;
uniform vec3 uNightTint;${o?`
uniform vec3 uAccent;`:""}`).replace("#include <map_fragment>",`#ifdef USE_MAP
  vec4 dayC = texture2D( map, vMapUv );
  vec4 nightC = texture2D( uNightMap, vMapUv );
  nightC.rgb *= uNightTint;
  diffuseColor *= mix( dayC, nightC, uNight );
#endif`),o&&(a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= uAccent;`))},t.customProgramCacheKey=()=>o?"bothq-baked-night-accent":"bothq-baked-night"}updateNightMaps(t){let e=this.daylight.night;for(let n of this.nightRecs.values())n.state!=="static"&&(e>.01?(n.since=t,n.state==="idle"&&(n.state="loading",sE(this.baseUrl,n.name).then(s=>{if(!s){n.state="missing";return}n.dayMap&&(s.wrapS=n.dayMap.wrapS,s.wrapT=n.dayMap.wrapT,s.channel=n.dayMap.channel),n.tex=s,n.uMap.value=s,n.uTint.value.set(1,1,1),n.state="ready",n.name==="baked_floor"&&this.styleNight(s.image)}))):n.state==="ready"&&t-n.since>3e4&&(n.uMap.value=n.dayMap,n.uTint.value.set(...Bd),n.tex.dispose(),n.tex=null,n.state="idle",n.name==="baked_floor"&&this.styleNight(null)))}styleNight(t){let e=t&&this.assets.style?Lg(t):new Map;for(let n of this.nightRecs.values()){if(!n.name.startsWith("style_"))continue;n.styleNight&&(n.styleNight.dispose(),n.styleNight=null);let s=e.get(n.name);s?(n.styleNight=s,n.uMap.value=s,n.uTint.value.set(1,1,1)):(n.uMap.value=n.dayMap,n.uTint.value.set(...Bd))}}setFloors(t){let e=t.length?t:[{id:"_",name:"",order:1}],n=e.map(r=>r.id).join("|");if(e.forEach((r,o)=>{let a=this.byId.get(r.id);a&&(a.name=r.name,a.index=o)}),n===this.sig)return;this.sig=n,this.styles=this.assets.style?bg(e):new Map;let s=new Map(e.map((r,o)=>[r.id,o]));for(let r of this.slots)s.has(r.id)||this.disposeSlot(r);this.slots=e.map((r,o)=>{let a=this.byId.get(r.id);return a||(a={id:r.id,name:r.name,index:o,closed:new ar(this,this.assets.templates.floor_closed,"closed"),open:null,lift:new ln(1,.5),showOpen:!1},this.group.add(a.closed.root),a.closed.setShown(!1),this.byId.set(r.id,a)),a.index=o,a});for(let[r]of[...this.byId])s.has(r)||this.byId.delete(r);this.activeIndex=Math.min(this.activeIndex,this.slots.length-1),this.activeSlot&&this.applyStyle(this.activeSlot),this.retarget(!1)}applyStyle(t){let e=this.styles.get(t.id);if(!e||!t.open||(wg(t.open.obj,e),t.open.walls?.setAccent(e.accent),t!==this.activeSlot))return;let n=this.assets.spots.lounges;this.assets.style.layouts[e.layout].forEach((s,r)=>{let o=n[r];(!o||o.pos.distanceToSquared(s.pos)>1e-6||o.yaw!==s.yaw)&&(n[r]={pos:s.pos.clone(),yaw:s.yaw,lounge:!0})})}disposeSlot(t){t.closed.dispose(),t.open&&(this.pool=this.pool.filter(e=>e!==t.open),t.open.dispose())}get floorCount(){return this.slots.length}get activeSlot(){return this.slots[this.activeIndex]||null}get activeId(){return this.activeSlot?.id??null}get activeY(){return Math.max(0,this.activeIndex)*$i}activeOpen(){return this.activeSlot?.open||null}setActive(t,{intro:e=!1}={}){let n=this.slots.findIndex(o=>o.id===t);if(n<0)return!1;let s=this.activeIndex>=0&&n!==this.activeIndex;this.activeIndex=n;let r=this.slots[n];if(this.acquireOpen(r),this.applyStyle(r),e){for(let o of this.slots)o.lift.snap(1);this.roofLift.snap(1),this.group.visible=!0,this.introDrop=!0}return s&&!e&&!nE?(this.pulseT=0,this.swapped=!1):this.applyShown(),this.retarget(e),e&&(this.cabinY.snap(this.cabinY.target),this.shaftTop.snap(this.shaftTop.target)),!0}applyShown(){this.slots.forEach((t,e)=>{t.showOpen=e===this.activeIndex&&!!t.open})}retarget(t){let e=this.activeIndex;e<0||(this.slots.forEach((n,s)=>{s<=e?n.lift.to(0,t?.05+(e-s)*.08:0):n.lift.to(1)}),this.roofLift.to(1),this.cabinY.to(e*$i),this.shaftTop.to(Math.min(this.slots.length*$i,e*$i+iE+.35)))}acquireOpen(t){if(t.open)return t.open;let e=this.pool.find(s=>!this.slots.some(r=>r.open===s))||this.pool.reduce((s,r)=>r.alpha<s.alpha?r:s,this.pool[0]),n=this.slots.find(s=>s.open===e);return n&&(n.open=null,n.showOpen=!1),e.onSteal?.(),t.open=e,e.floorId=t.id,e.screens.forEach(s=>{s.glow=0,s.target=0}),e}setScreens(t){this.screenTargets=t}setDisplayData(t){this.floorData=t,this.activeOpen()?.walls?.setData(t)}prewarm(t){let e=[this.roof,this.shaft,this.cabin,...this.slots.map(a=>a.closed),...this.pool],n=e.map(a=>a.root.visible);e.forEach(a=>{a.root.visible=!0});let s=this.pool.flatMap(a=>Eg(a.obj)).filter(a=>!a.visible);s.forEach(a=>{a.visible=!0});let r=new Be(1,1,{type:Ke}),o=this.renderer.getRenderTarget();this.renderer.setRenderTarget(r),this.renderer.compile(this.scene,t),this.renderer.setRenderTarget(o),r.dispose(),s.forEach(a=>{a.visible=!1}),e.forEach((a,l)=>{a.root.visible=n[l]})}update(t,e){let n=this.activeIndex,s=this.daylight.night,r=this.slots.length;this.pulseT>=0&&(this.pulseT+=t,!this.swapped&&this.pulseT>=Mo&&(this.swapped=!0,this.applyShown()),this.pulseT>=Mo+ex&&(this.pulseT=-1));let o=this.pulseT<0?0:this.pulseT<Mo?di(0,Mo,this.pulseT):1-di(Mo,Mo+ex,this.pulseT),a=Math.round(o*eE*4)/4;a!==this.blurPx&&(this.blurPx=a,this.renderer.domElement.style.filter=a?`blur(${a}px)`:"");for(let d of this.slots){d.lift.step(t);let p=d.lift.x*(tl+Math.max(0,d.index-n)*$i),x=p<tl*.8,m=d.index*$i+p;d.closed.root.position.y=m,d.closed.setShown(x&&!d.showOpen),d.open&&(d.open.root.position.y=m,d.open.setShown(x&&d.showOpen),d.open.alpha&&this.updateOpen(d,t,e,s))}this.roofLift.step(t);let l=this.roofLift.x*(tl+Math.max(0,r-n)*$i);this.roof.root.position.y=r*$i-ti+l,this.roof.setShown(l<tl*.8),this.cabinY.step(t),this.shaftTop.step(t);let c=this.slots[n];this.introDrop&&(!c||c.lift.x<.001&&c.lift.pending===null)&&(this.introDrop=!1);let h=this.introDrop?c.lift.x*tl:0;this.cabin.root.position.y=this.cabinY.x+h;let u=-ti,f=Math.max(u+.1,this.shaftTop.x);this.shaft.root.position.y=u+h,this.shaft.root.scale.y=(f-u)/this.shaftH,this.updateNightMaps(e)}updateOpen(t,e,n,s){let r=t.open,o=1-Math.exp(-e*3.2),a=this.slots[this.activeIndex]===t;r.screens.forEach((l,c)=>{l&&(l.target=a&&this.screenTargets[c]||0,l.glow+=(l.target-l.glow)*o,l.mat.emissiveIntensity=l.glow*(.32+1.35*s)+s*.03)}),r.walls?.tick(n,s)}};var nx=.32,ix=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,rE=ix?3:5,oE=ix?5:10,aE=`
#include <packing>
#define BQ_LEVEL ${nx.toFixed(3)}
#define BQ_SEARCH ${rE}
#define BQ_TAPS ${oE}
uniform vec3 bqSun;                                       // linear sun on a lit floor, relative to its shade (0 = none)
uniform vec3 bqDir;                                       // unit, toward the sun (world)
uniform float bqDay;                                      // 1 - the night lightmap share
uniform vec3 bqAlbedo;                                    // this surface's sunlit colour in the bake
uniform sampler2D bqShadowMap;
uniform mat4 bqShadowMatrix;
uniform vec4 bqShadowInfo;                                // metres per uv (x, y), depth range (m), 1 = the map is ready
uniform vec3 bqLampPos[ 6 ];                              // the desk pendants (world)
uniform vec3 bqLamp;                                      // their light (linear colour x strength), 0 by day
uniform vec2 bqLampCone;                                  // cos of the outer and inner cone angle
uniform vec4 bqTable[ 4 ];                                // desk tops that shade the floor from the lamps: x0, z0, x1, z1
uniform vec4 bqTableY;                                    // their heights (world), < -50 = none
varying vec3 vBqWorld;
varying vec3 vBqNormal;
const vec3 BQ_LUMA = vec3( 0.2126, 0.7152, 0.0722 );
const vec2 BQ_DISK[ 12 ] = vec2[](
  vec2( -0.326, -0.406 ), vec2( 0.840, -0.074 ), vec2( -0.696, 0.457 ), vec2( 0.203, 0.621 ),
  vec2( 0.962, -0.195 ), vec2( -0.185, -0.893 ), vec2( 0.473, -0.480 ), vec2( 0.519, 0.767 ),
  vec2( -0.321, -0.933 ), vec2( -0.792, -0.598 ), vec2( 0.507, 0.064 ), vec2( 0.896, 0.412 ) );

float bqDepth( vec2 uv ) { return unpackRGBAToDepth( texture2D( bqShadowMap, uv ) ); }

// Bilinear depth compare (what hardware PCF does): the four nearest texels, weighted, so the filter has no grain.
float bqCompare( vec2 uv, float z ) {
  vec2 size = vec2( textureSize( bqShadowMap, 0 ) ), t = uv * size - 0.5, f = fract( t );
  vec2 base = ( floor( t ) + 0.5 ) / size, dx = vec2( 1.0 / size.x, 0.0 ), dy = vec2( 0.0, 1.0 / size.y );
  return mix( mix( step( z, bqDepth( base ) ), step( z, bqDepth( base + dx ) ), f.x ),
    mix( step( z, bqDepth( base + dy ) ), step( z, bqDepth( base + dx + dy ) ), f.x ), f.y );
}

// 1 = in the sun. The edge is soft in proportion to how far the shadow has travelled from its caster.
float bqVisible( vec3 p ) {
  vec4 c = bqShadowMatrix * vec4( p, 1.0 );
  vec3 s = c.xyz / c.w;
  if ( bqShadowInfo.w < 0.5 || s.x < 0.0 || s.x > 1.0 || s.y < 0.0 || s.y > 1.0 || s.z > 1.0 ) return 1.0;
  float z = s.z - 0.0006;
  vec2 search = 0.16 / bqShadowInfo.xy;
  float sum = 0.0, n = 0.0;
  for ( int i = 0; i < BQ_SEARCH; i ++ ) {
    float d = bqDepth( s.xy + BQ_DISK[ i ] * search );
    if ( d < z ) { sum += d; n += 1.0; }
  }
  if ( n == 0.0 && bqDepth( s.xy ) >= z ) return 1.0;
  float dist = n > 0.0 ? ( z - sum / n ) * bqShadowInfo.z : 0.0;
  vec2 r = ( 0.008 + 0.012 * dist ) / bqShadowInfo.xy;
  float lit = 0.0;
  for ( int i = 0; i < BQ_TAPS; i ++ ) lit += bqCompare( s.xy + BQ_DISK[ i ] * r, z );
  return lit / float( BQ_TAPS );
}

vec3 bqRelight( vec3 day ) {
  float floorish = step( 0.5, vBqNormal.y );              // walls were in the bake's shade: nothing to take out
  float level = mix( 1.0, BQ_LEVEL, floorish );
  // below the shade level only the darkest texels are occlusion (footprints, contacts); the rest are the cores of the
  // bake's own sun shadows (and floorstyle.js's, drawn the same way), which point one way all day: lifted to the shade
  float ao = dot( day, BQ_LUMA ) / max( level * dot( bqAlbedo, BQ_LUMA ), 1e-4 );
  vec3 shade = mix( day, bqAlbedo * level, floorish * smoothstep( 0.3, 0.75, ao ) );
  float facing = clamp( dot( vBqNormal, bqDir ) / max( bqDir.y, 0.25 ), 0.0, 1.5 );
  if ( facing <= 0.0 || bqSun.r + bqSun.g + bqSun.b <= 0.0 ) return shade;
  return shade * ( 1.0 + bqSun * ( facing * bqVisible( vBqWorld + vBqNormal * 0.025 ) ) );
}

// The pendants' warm pools: each lamp a soft downward cone (the same as the spot lights on the lit furniture), dimmed
// by the distance and the angle of incidence, and shaded where a desk top stands between the lamp and the floor.
vec3 bqLampPools() {
  vec3 sum = vec3( 0.0 );
  for ( int i = 0; i < 6; i ++ ) {
    vec3 d = bqLampPos[ i ] - vBqWorld;
    float len = length( d );
    if ( bqLampPos[ i ].y < -50.0 || len < 0.05 ) continue;
    vec3 l = d / len;
    float k = smoothstep( bqLampCone.x, bqLampCone.y, l.y ) * max( dot( vBqNormal, l ), 0.0 ) / ( len * len );
    for ( int j = 0; j < 4; j ++ ) {
      float y = bqTableY[ j ];
      if ( y < -50.0 || vBqWorld.y > y || bqLampPos[ i ].y < y ) continue;
      vec2 o = mix( vBqWorld.xz, bqLampPos[ i ].xz, ( y - vBqWorld.y ) / ( bqLampPos[ i ].y - vBqWorld.y ) );
      vec4 r = bqTable[ j ];
      k *= 1.0 - ( smoothstep( r.x - 0.06, r.x + 0.06, o.x ) - smoothstep( r.z - 0.06, r.z + 0.06, o.x ) )
        * ( smoothstep( r.y - 0.06, r.y + 0.06, o.y ) - smoothstep( r.w - 0.06, r.w + 0.06, o.y ) );
    }
    sum += k;
  }
  return bqAlbedo * bqLamp * sum;
}`,lE=`
#ifdef USE_MAP
  {
    vec3 bqD = texture2D( map, vMapUv ).rgb;
    diffuseColor.rgb += diffuse * ( bqRelight( bqD ) - bqD ) * bqDay;
    if ( bqLamp.r + bqLamp.g + bqLamp.b > 0.0 ) diffuseColor.rgb += bqLampPools();
  }
#endif`,kd=i=>(i/=255,i<=.04045?i/12.92:((i+.055)/1.055)**2.4),zd=new WeakMap;function cE(i){if(zd.has(i))return zd.get(i);let t=new I(.83,.82,.78);try{let e=i.image,n=96,s=Math.max(1,Math.round(96*e.height/e.width)),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(e,0,0,n,s);let a=o.getImageData(0,0,n,s).data,l=[];for(let u=0;u<a.length;u+=4){let f=kd(a[u]),d=kd(a[u+1]),p=kd(a[u+2]);l.push([.2126*f+.7152*d+.0722*p,f,d,p])}l.sort((u,f)=>u[0]-f[0]);let c=Math.floor(l.length*.88),h=Math.max(c+1,Math.floor(l.length*.98));t.set(0,0,0);for(let u=c;u<h;u++)t.x+=l[u][1],t.y+=l[u][2],t.z+=l[u][3];t.divideScalar(h-c)}catch{}return zd.set(i,t),t}function sx(i){let t={bqSun:{value:new dt(0,0,0)},bqDir:{value:new I(0,1,0)},bqDay:{value:1},bqShadowMap:{value:null},bqShadowMatrix:{value:i.shadow.matrix},bqShadowInfo:{value:new xe(1,1,1,0)},bqLampPos:{value:Array.from({length:6},()=>new I(0,-99,0))},bqLamp:{value:new dt(0,0,0)},bqLampCone:{value:new tt(.7,.9)},bqTable:{value:Array.from({length:4},()=>new xe)},bqTableY:{value:new xe(-99,-99,-99,-99)}};return{relight(e){if(e.userData.sunRelit||!e.map)return;e.userData.sunRelit=!0;let n={value:cE(e.map)},s=e.onBeforeCompile,r=e.customProgramCacheKey;e.onBeforeCompile=(o,a)=>{s.call(e,o,a),Object.assign(o.uniforms,t,{bqAlbedo:n}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBqWorld;
varying vec3 vBqNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
	vBqWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
	vBqNormal = normalize( mat3( modelMatrix ) * normal );`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${aE}`).replace("#include <color_fragment>",`${lE}
#include <color_fragment>`)},e.customProgramCacheKey=()=>`${r.call(e)}|sun`,e.needsUpdate=!0},update(e,n,s,r){t.bqDir.value.copy(e),t.bqSun.value.setRGB(...n,ne).multiplyScalar(Math.max(0,s)*(1/nx-1)),t.bqDay.value=r;let o=i.shadow.map,a=i.shadow.camera;t.bqShadowMap.value=o?o.texture:null,t.bqShadowInfo.value.set(a.right-a.left,a.top-a.bottom,a.far-a.near,o?1:0)},lamps(e,n,s,r,o){t.bqLampPos.value.forEach((a,l)=>{e?.[l]?a.copy(e[l]):a.set(0,-99,0)}),t.bqLamp.value.copy(n),t.bqLampCone.value.set(Math.cos(s),Math.cos(s*(1-r))),t.bqTable.value.forEach((a,l)=>{let c=o[l];c&&a.set(c.x0,c.z0,c.x1,c.z1)}),t.bqTableY.value.set(...[0,1,2,3].map(a=>o[a]?o[a].y:-99))}}}var pe=i=>{let t=new dt(i);return t.convertLinearToSRGB(),[t.r,t.g,t.b]},So=i=>i,hE=So({night:0,bake:0,lamps:0,windows:0,sunI:2.4,sunC:pe("#FFF1DE"),hemiI:1.05,hemiSky:pe("#F3F2F0"),hemiGnd:pe("#CFC8BE"),fillI:.35,fillC:pe("#E6EEFF"),envI:.5,exposure:1.05,shadow:.34,tint:[1.42,1.43,1.46],floorSun:.72,floorSunC:pe("#FFF6EC"),glassC:pe("#D2E4F2"),glassA:.22,glassE:.12}),uE=So({night:0,bake:0,lamps:0,windows:.05,sunI:2.6,sunC:pe("#FFEFD9"),hemiI:1,hemiSky:pe("#E1EAFF"),hemiGnd:pe("#C6CAD2"),fillI:.38,fillC:pe("#DCE6FF"),envI:.5,exposure:1.07,shadow:.36,tint:[2.05,2.15,2.35],floorSun:.72,floorSunC:pe("#FFEEDA"),glassC:pe("#A6CCF2"),glassA:.82,glassE:.5}),fE=So({night:0,bake:0,lamps:.15,windows:.15,sunI:2.8,sunC:pe("#FFA458"),hemiI:.85,hemiSky:pe("#FFD0A4"),hemiGnd:pe("#B48466"),fillI:.3,fillC:pe("#FFC9A4"),envI:.4,exposure:1.05,shadow:.4,tint:[2.3,1.32,.62],floorSun:1,floorSunC:pe("#FFD27E"),glassC:pe("#FFC064"),glassA:.86,glassE:1}),dE=So({night:.5,bake:.3,lamps:.6,windows:.4,sunI:.3,sunC:pe("#FFC9B0"),hemiI:.8,hemiSky:pe("#B9C2E6"),hemiGnd:pe("#8A8798"),fillI:.25,fillC:pe("#BFC8F0"),envI:.3,exposure:1.04,shadow:.3,tint:[1.3,1.32,1.48],floorSun:0,floorSunC:pe("#FFEBD2"),glassC:pe("#7F98CF"),glassA:.6,glassE:.45}),pE=So({night:.6,bake:.35,lamps:.85,windows:.7,sunI:.3,sunC:pe("#FF9070"),hemiI:.7,hemiSky:pe("#8C7896"),hemiGnd:pe("#3A3040"),fillI:.2,fillC:pe("#8A80B8"),envI:.28,exposure:1.03,shadow:.32,tint:[1.3,1.02,.84],floorSun:0,floorSunC:pe("#FFD27E"),glassC:pe("#4A5487"),glassA:.8,glassE:.5}),mE=So({night:1,bake:.6,lamps:1,windows:1,sunI:.2,sunC:pe("#8CA6FF"),hemiI:.4,hemiSky:pe("#6A6158"),hemiGnd:pe("#2A2420"),fillI:.15,fillC:pe("#8C8098"),envI:.2,exposure:1,shadow:.4,tint:[.95,.8,.62],floorSun:0,floorSunC:pe("#FFEBD2"),glassC:pe("#1A2A66"),glassA:.92,glassE:.5});function bo(i,t,e){let n={};for(let s in i)n[s]=Array.isArray(i[s])?i[s].map((r,o)=>Qa(r,t[s][o],e)):Qa(i[s],t[s],e);return n}var Ki=Math.PI/180,Hd={lat:42.7,dec:10,noon:760},gE={"Europe/Sofia":[42.7,23.3],"Europe/Kiev":[50.45,30.5],"Europe/Kyiv":[50.45,30.5],"Europe/Moscow":[55.75,37.6],"Europe/Warsaw":[52.2,21],"Europe/Berlin":[52.5,13.4],"Europe/Paris":[48.85,2.35],"Europe/London":[51.5,-.1],"Europe/Madrid":[40.4,-3.7],"Europe/Rome":[41.9,12.5],"Europe/Istanbul":[41,29],"Asia/Dubai":[25.2,55.3],"Asia/Kolkata":[28.6,77.2],"Asia/Singapore":[1.35,103.8],"Asia/Tokyo":[35.7,139.7],"Australia/Sydney":[-33.9,151.2],"America/New_York":[40.7,-74],"America/Chicago":[41.9,-87.6],"America/Denver":[39.7,-105],"America/Los_Angeles":[34.05,-118.25],"America/Sao_Paulo":[-23.55,-46.6]};function xE(i){if(i.has("lat")&&i.has("lon"))return[Number(i.get("lat")),Number(i.get("lon"))];let t=Intl.DateTimeFormat().resolvedOptions().timeZone;return gE[t]||[45,-new Date().getTimezoneOffset()/4]}function ux(i,t,e){let n=e*Ki,s=Math.asin(Math.sin(n)*Math.sin(t)+Math.cos(n)*Math.cos(t)*Math.cos(i)),r=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(n)-Math.tan(t)*Math.cos(n));return[s/Ki,r/Ki]}function _E(i,t,e){let n=i/864e5-10957.5,s=Ki*(357.5291+.98560028*n),r=s+Ki*(1.9148*Math.sin(s)+.02*Math.sin(2*s)+3e-4*Math.sin(3*s)+102.9372)+Math.PI,o=Ki*23.4397,a=Math.asin(Math.sin(o)*Math.sin(r)),l=Math.atan2(Math.sin(r)*Math.cos(o),Math.cos(r));return ux(Ki*(280.16+360.9856235*n+e)-l,a,t)}function yE(i){return ux(Ki*(i-Hd.noon)/4,Hd.dec*Ki,Hd.lat)}function vE(i,t){let e=di(-40,40,t),n=bo(bo(uE,fE,e),hE,di(4,30,i));n=bo(bo(dE,pE,e),n,di(-1.5,3,i)),n=bo(mE,n,di(-9,-1,i));let s=1-di(-6,2,i);return n.sunEl=Qa(Math.max(i,5),42,s),n.sunAz=Qa(Ce(270-.3*t,235,305),250,s),n}function ME(i,t){let e=t>0;return i<-5?"night":i<2?e?"dusk":"dawn":i<15?e?"golden":"dawn":"day"}function rx(i){let t=/^(\d{1,2}):(\d{2})$/.exec(String(i||"").trim());return t?Ce(Number(t[1]),0,24)*60+Ce(Number(t[2]),0,59):null}var bE=2e4,SE=2e3,ox=6,ax=16759668,wE=22,EE=4,lx=.78,cx=.75,ys={x:8.3,z:6.3,y0:-.05,y1:3},TE=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,AE=i=>i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshToonMaterial,hx=/^(slab|glass)/,RE=/^table_\d+$/;function fx({scene:i,renderer:t}){let e=new URLSearchParams(location.search);t.shadowMap.enabled=!0,t.shadowMap.type=Js;let n=new ds(16777215,1);n.castShadow=!0,n.shadow.mapSize.setScalar(TE?1024:2048),n.shadow.bias=-5e-4,n.shadow.normalBias=.02,n.shadow.radius=2;let s=new Ea(16777215,16777215,1),r=new ds(16777215,.4);r.position.set(6,5,8),i.add(n,n.target,s,r);let o=[];for(let z=0;z<ox;z++){let ot=new Ks(ax,0,0,lx,cx,2);ot.castShadow=!1,ot.position.set(0,-99,0),i.add(ot,ot.target),o.push(ot)}let a=new dt,l=[],c=sx(n),h=new Map,u=new Set,f=new Set,d={value:0},p={night:0,lampsK:0,windowsK:0,phase:"day",minutes:720,el:45,az:0,params:null},x=null,m=e.get("real")==="1",g=null,y=null,w=null,v=null,S=-1e9,b=-1e9,A=-1e9,_=new I,E=new I,R=new I,P=new dt,L=e.get("time");L&&L!=="auto"&&(x=rx(L));function k(z){x=z&&z!=="auto"?rx(z):null,b=S=-1e9}function D(){let z=new Date;if(x!==null&&!m)[p.el,p.az]=yE(x);else{x!==null&&z.setHours(Math.floor(x/60),x%60,0,0);let[ot,at]=xE(e);[p.el,p.az]=_E(z.getTime(),ot,at)}p.minutes=x!==null?x:z.getHours()*60+z.getMinutes()+z.getSeconds()/60,w=vE(p.el,p.az),p.phase=ME(p.el,p.az)}function B(){u.clear(),f.clear(),g.group.traverse(ot=>{if(ot.isMesh)for(let at of Array.isArray(ot.material)?ot.material:[ot.material])at.userData.nightPatched&&(u.add(at),c.relight(at)),at.name==="glass_pane"&&f.add(at)});let z=g.activeOpen();if(z?.root.traverse(ot=>{if(!ot.isMesh)return;let Dt=(Array.isArray(ot.material)?ot.material:[ot.material]).every(Ht=>AE(Ht)&&!Ht.transparent)&&!hx.test(ot.name)&&!hx.test(ot.parent?.name||"");ot.castShadow=ot.receiveShadow=Dt}),l=[],z){z.root.updateMatrixWorld(!0);for(let ot of z.obj.children){if(!RE.test(ot.name)||!ot.visible)continue;let at=new We().setFromObject(ot);l.push({x0:at.min.x,z0:at.min.z,x1:at.max.x,z1:at.max.z,y:at.max.y-z.root.position.y})}}}function X(){let z=g?.activeOpen()?.root;z?z.getWorldPosition(E):E.set(0,0,0);let ot=E.y;E.y+=(ys.y0+ys.y1)/2,n.target.position.copy(E),n.position.copy(E).addScaledVector(_,30);let at=n.shadow.camera;at.position.copy(n.position),at.lookAt(E),at.updateMatrixWorld();let Dt=1/0,Ht=-1/0,Jt=1/0,Z=-1/0,Q=1/0,pt=-1/0;for(let Ft=0;Ft<8;Ft++)R.set(E.x+(Ft&1?ys.x:-ys.x),ot+(Ft&2?ys.y1:ys.y0),E.z+(Ft&4?ys.z:-ys.z)),R.applyMatrix4(at.matrixWorldInverse),Dt=Math.min(Dt,R.x),Ht=Math.max(Ht,R.x),Jt=Math.min(Jt,R.y),Z=Math.max(Z,R.y),Q=Math.min(Q,R.z),pt=Math.max(pt,R.z);at.left=Dt-.1,at.right=Ht+.1,at.bottom=Jt-.1,at.top=Z+.1,at.near=Math.max(.1,-pt-.5),at.far=-Q+.5,at.updateProjectionMatrix()}function $(z){n.color.setRGB(...z.sunC,ne),n.intensity=z.sunI;let ot=oo.degToRad(z.sunEl),at=oo.degToRad(z.sunAz);_.set(Math.cos(ot)*Math.cos(at),Math.sin(ot),Math.cos(ot)*Math.sin(at)),X(),s.color.setRGB(...z.hemiSky,ne),s.groundColor.setRGB(...z.hemiGnd,ne),s.intensity=z.hemiI,r.color.setRGB(...z.fillC,ne),r.intensity=z.fillI,i.environmentIntensity=z.envI,t.toneMappingExposure=z.exposure,d.value=z.bake,p.night=z.night,p.lampsK=z.lamps,p.windowsK=z.windows;for(let[Dt,Ht]of h)Ht==="lamp"?Dt.emissiveIntensity=z.lamps*2.4:Ht==="windows"&&(Dt.emissiveIntensity=z.windows*1.7);for(let Dt of u)Dt.color.setRGB(...z.tint);P.setRGB(...z.glassC,ne);for(let Dt of f)Dt.color.copy(P),Dt.emissive.copy(P).multiplyScalar(z.glassE),Dt.opacity=z.glassA;c.update(_,z.floorSunC,z.floorSun,1-z.bake)}function rt(){let z=v?v():null,ot=z?z.k*p.lampsK:0;for(let Dt=0;Dt<ox;Dt++){let Ht=o[Dt],Jt=z&&z.positions[Dt];Jt?(Ht.position.copy(Jt),Ht.target.position.set(Jt.x,Jt.y-3,Jt.z),Ht.intensity=wE*ot):Ht.intensity=0}let at=g?.activeOpen()?.root.position.y??0;a.set(ax).multiplyScalar(EE*ot),c.lamps(ot>.001?z.positions:null,a,lx,cx,l.map(Dt=>({...Dt,y:Dt.y+at})))}function K(z,ot){if(ot-b>bE&&(b=ot,D()),g&&ot-A>SE&&(A=ot,B()),!y)y=w;else{let at=1-Math.exp(-z/.45);y=bo(y,w,at)}if(p.params=y,$(y),rt(),ot-S>1e3){S=ot;let at=document.documentElement;at.dataset.daylight!==p.phase&&(at.dataset.daylight=p.phase),at.style.setProperty("--night",y.night.toFixed(3))}}let et={uNight:d,state:p,update:K,setTime:k,track(z,ot){h.set(z,ot)},untrack(z){h.delete(z)},setLampSource(z){v=z},setBuilding(z){g=z,A=-1e9},get shadowOpacity(){return y?y.shadow:.3},get night(){return p.night}};return window.bothq=Object.assign(window.bothq||{},{setTime:k,daylight:p}),et}var dx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},CE=new Yn(-1,1,1,-1,0,1),Gd=class extends ye{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}},IE=new Gd,vs=class{constructor(t){this._mesh=new Bt(IE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,CE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var lr=class extends kn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Je?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ao.clone(t.uniforms),this.material=new Je({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new vs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var el=class extends kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},zh=class extends kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Hh=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new Be(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ke}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lr(dx),this.copyPass.material.blending=Kn,this.timer=new Ra}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}el!==void 0&&(o instanceof el?n=!0:o instanceof zh&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Gh=class extends kn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new dt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var nl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Vh=class extends kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ao.clone(nl.uniforms),this.material=new Jr({name:nl.name,uniforms:this.uniforms,vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader}),this._fsQuad=new vs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===La?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var cn={centre:[.5,.45],radii:[.82,.78],stops:[[0,"#FFFFFF"],[.5,"#F8F8FA"],[1,"#E6E7EB"]],shadow:"#0B0C11",layers:[{sigma:4,down:2,w:.4},{sigma:30,down:22,w:.4},{sigma:120,down:70,w:.34}]},Ms=i=>{let t=new dt;return t.setStyle(i,on),new I(t.r,t.g,t.b)},mx={stops:[[0,"#243056"],[.5,"#141A2E"],[1,"#080B18"]],shadow:"#000000"};function Vd(i=!1){let t=i?mx:cn,[e,n]=cn.centre,[s,r]=cn.radii,o=t.stops.map(([a,l])=>`${l} ${(a*100).toFixed(1)}%`).join(", ");return`radial-gradient(ellipse ${s*100}% ${r*100}% at ${e*100}% ${n*100}%, ${o})`}var px=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,PE=`
  uniform sampler2D tMap;
  uniform vec2 texel;
  uniform float sigma;
  varying vec2 vUv;
  void main() {
    if ( sigma < 0.01 ) { gl_FragColor = vec4( texture2D( tMap, vUv ).r ); return; }
    float r = min( ceil( sigma * 3.0 ), 40.0 );
    float s = 0.0, ws = 0.0;
    for ( int i = -40; i <= 40; i++ ) {
      float f = float( i );
      if ( abs( f ) > r ) continue;
      float w = exp( -f * f / ( 2.0 * sigma * sigma ) );
      s += texture2D( tMap, vUv + texel * f ).r * w;
      ws += w;
    }
    gl_FragColor = vec4( s / ws );
  }`,LE=`
  uniform sampler2D tDiffuse, tHold, tL0, tL1, tL2;
  uniform vec3 stop0, stop1, stop2, shadowC;
  uniform vec2 centre, radii, push[3];
  uniform vec3 layerW;
  uniform float stopMid;
  varying vec2 vUv;

  float hash( vec2 p ) { vec3 q = fract( vec3( p.xyx ) * 0.1031 ); q += dot( q, q.yzx + 33.33 ); return fract( ( q.x + q.y ) * q.z ); }

  void main() {
    vec4 c = texture2D( tDiffuse, vUv );

    // backdrop: pool of light in the middle, cool grey toward the corners (piecewise linear = the CSS gradient)
    float d = length( ( vUv - vec2( centre.x, 1.0 - centre.y ) ) / radii );
    vec3 bg = d < stopMid ? mix( stop0, stop1, d / stopMid ) : mix( stop1, stop2, clamp( ( d - stopMid ) / ( 1.0 - stopMid ), 0.0, 1.0 ) );

    // aura: each layer is the blurred silhouette, sampled a little above so it falls below; 2x makes a straight edge = 1
    float a0 = min( 1.0, 2.0 * texture2D( tL0, vUv + push[0] ).r ) * layerW.x;
    float a1 = min( 1.0, 2.0 * texture2D( tL1, vUv + push[1] ).r ) * layerW.y;
    float a2 = min( 1.0, 2.0 * texture2D( tL2, vUv + push[2] ).r ) * layerW.z;
    float dens = 1.0 - ( 1.0 - a0 ) * ( 1.0 - a1 ) * ( 1.0 - a2 );
    dens *= 1.0 - smoothstep( 0.5, 0.9, texture2D( tHold, vUv ).r );    // nothing inside the silhouette: clear glass stays clear
    bg = mix( bg, shadowC, dens );

    vec3 rgb = c.rgb + bg * ( 1.0 - c.a );                              // c is premultiplied
    float n = hash( gl_FragCoord.xy ) + hash( gl_FragCoord.xy + 17.31 ) - 1.0;   // triangular dither, +-1 level
    gl_FragColor = vec4( rgb + n / 255.0, 1.0 );
  }`;function NE(i,t){return new Be(Math.max(2,i),Math.max(2,t),{type:Ke,depthBuffer:!1,minFilter:Ue,magFilter:Ue,generateMipmaps:!1})}var Wh=class extends kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!0,this.maskMat=new Me({color:16777215,toneMapped:!1,side:je,depthTest:!1,depthWrite:!1,fog:!1}),this.blurMat=new Je({uniforms:{tMap:{value:null},texel:{value:new tt},sigma:{value:0}},vertexShader:px,fragmentShader:PE,depthTest:!1,depthWrite:!1});let[n,s,r]=cn.layers;this.composeMat=new Je({uniforms:{tDiffuse:{value:null},tHold:{value:null},tL0:{value:null},tL1:{value:null},tL2:{value:null},stop0:{value:Ms(cn.stops[0][1])},stop1:{value:Ms(cn.stops[1][1])},stop2:{value:Ms(cn.stops[2][1])},stopMid:{value:cn.stops[1][0]},shadowC:{value:Ms(cn.shadow)},centre:{value:new tt(...cn.centre)},radii:{value:new tt(...cn.radii)},push:{value:[new tt,new tt,new tt]},layerW:{value:new I(n.w,s.w,r.w)}},vertexShader:px,fragmentShader:LE,depthTest:!1,depthWrite:!1}),this.fsQuad=new vs(this.blurMat),this.t=null,this.size=new tt(1,1),this.setSize(1,1)}setTheme(t){let e=t?mx:cn,n=this.composeMat.uniforms;n.stop0.value.copy(Ms(e.stops[0][1])),n.stop1.value.copy(Ms(e.stops[1][1])),n.stop2.value.copy(Ms(e.stops[2][1])),n.shadowC.value.copy(Ms(e.shadow)),this.dark=!!t}setSize(t,e){this.size.set(t,e);let n=this.t;n&&Object.values(n).forEach(r=>r.dispose());let s=r=>NE(Math.round(t/r),Math.round(e/r));this.t={mask:s(4),cA:s(4),cB:s(4),mA:s(8),mB:s(8),hA:s(16),wA:s(32),wB:s(32)}}blur(t,e,n,s,r,o){let a=this.blurMat.uniforms;a.tMap.value=e.texture,a.texel.value.set(s/e.width,r/e.height),a.sigma.value=o,t.setRenderTarget(n),this.fsQuad.material=this.blurMat,this.fsQuad.render(t)}buildAura(t,e){let n={target:t.getRenderTarget(),auto:t.autoClear,color:t.getClearColor(new dt),alpha:t.getClearAlpha(),shadow:t.shadowMap.enabled},s=this.t;t.shadowMap.enabled=!1,t.autoClear=!0,t.setClearColor(0,0),t.setRenderTarget(s.mask);let r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.maskMat,t.render(this.scene,this.camera),this.scene.overrideMaterial=r,t.autoClear=!1;let o=cn.layers.map((a,l)=>Math.min(13,a.sigma*e/[4,8,32][l]));this.blur(t,s.mask,s.cB,1,0,o[0]),this.blur(t,s.cB,s.cA,0,1,o[0]),this.blur(t,s.mask,s.mB,0,0,0),this.blur(t,s.mB,s.hA,0,0,0),this.blur(t,s.hA,s.wA,0,0,0),this.blur(t,s.wA,s.wB,1,0,o[2]),this.blur(t,s.wB,s.wA,0,1,o[2]),this.blur(t,s.mB,s.mA,1,0,o[1]),this.blur(t,s.mA,s.mB,0,1,o[1]),t.setRenderTarget(n.target),t.autoClear=n.auto,t.setClearColor(n.color,n.alpha),t.shadowMap.enabled=n.shadow}render(t,e,n){let s=this.composeMat.uniforms,r=this.size.y,o=Math.max(.3,this.camera.zoom||1),a=r/1080*Math.pow(o,.55),l=1/(1+.35*Math.max(0,o-1));this.buildAura(t,a);let c=this.t;s.tDiffuse.value=n.texture,s.tHold.value=s.tL0.value=c.cA.texture,s.tL1.value=c.mB.texture,s.tL2.value=c.wA.texture,cn.layers.forEach((h,u)=>s.push.value[u].set(0,h.down*a/r)),s.layerW.value.set(cn.layers[0].w,cn.layers[1].w*l,cn.layers[2].w*l),this.fsQuad.material=this.composeMat,t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(),this.fsQuad.render(t)}dispose(){Object.values(this.t).forEach(t=>t.dispose()),this.maskMat.dispose(),this.blurMat.dispose(),this.composeMat.dispose(),this.fsQuad.dispose()}};var gx={name:"BotHQTiltShift",uniforms:{tDiffuse:{value:null},dir:{value:new tt(1,0)},focus:{value:.5},band:{value:.24},falloff:{value:.5},strength:{value:1.5}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 dir;
    uniform float focus, band, falloff, strength;
    varying vec2 vUv;
    void main() {
      float d = max( 0.0, abs( vUv.y - focus ) - band );
      float amt = smoothstep( 0.0, falloff, d );
      vec2 s = dir * strength * amt;
      vec4 c = texture2D( tDiffuse, vUv ) * 0.2270270270;
      c += texture2D( tDiffuse, vUv + s * 1.3846153846 ) * 0.3162162162;
      c += texture2D( tDiffuse, vUv - s * 1.3846153846 ) * 0.3162162162;
      c += texture2D( tDiffuse, vUv + s * 3.2307692308 ) * 0.0702702703;
      c += texture2D( tDiffuse, vUv - s * 3.2307692308 ) * 0.0702702703;
      gl_FragColor = c;
    }`};function DE(){return new URLSearchParams(location.search).get("tiltshift")!=="0"}function xx(i,t,e){let n=i.getSize(new tt),s=i.getPixelRatio(),r=new Be(n.x*s,n.y*s,{type:Ke,samples:4}),o=new Hh(i,r);o.setPixelRatio(s),o.renderTarget2.dispose(),o.renderTarget2=new Be(n.x*s,n.y*s,{type:Ke}),o.writeBuffer=o.renderTarget2,o.readBuffer=o.renderTarget1,o.addPass(new Gh(t,e));let a=new lr(gx),l=new lr(gx);a.enabled=l.enabled=DE(),o.addPass(a),o.addPass(l),o.addPass(new Vh);let c=new Wh(t,e);o.addPass(c);let h={composer:o,setSize(u,f){o.setPixelRatio(i.getPixelRatio()),o.setSize(u,f);let d=u*i.getPixelRatio(),p=f*i.getPixelRatio();a.uniforms.dir.value.set(1/d,0),l.uniforms.dir.value.set(0,1/p),this.base=1.05*i.getPixelRatio(),a.uniforms.strength.value=l.uniforms.strength.value=this.base},setDark(u){c.setTheme(!!u)},render(u,f,d=1){a.uniforms.focus.value=l.uniforms.focus.value=u,a.uniforms.strength.value=l.uniforms.strength.value=this.base*d,o.render(f)}};return h.setSize(n.x,n.y),h}var qh={working:"#34C759",idle:"#A1A1A6",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF"},FE={waiting_user:"Waiting for you",error:"Error",stuck:"Stuck?",done:"Done",working:"Working",idle:"Resting"},UE=Math.PI/4,Wd=.42,_x=1,qd=3.5,OE=.9,BE=1.2,kE=.034,zE=Yh([[0,"rgba(255,255,255,0.95)"],[.45,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),HE=Yh([[0,"rgba(0,0,0,0.38)"],[.6,"rgba(0,0,0,0.12)"],[1,"rgba(0,0,0,0)"]]),GE=Yh([[0,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.42)"],[1,"rgba(255,255,255,0)"]]),VE=Yh([[0,"rgba(255,255,255,0)"],[.6,"rgba(255,255,255,0)"],[.8,"rgba(255,255,255,0.95)"],[.9,"rgba(255,255,255,0.3)"],[1,"rgba(255,255,255,0)"]]),WE=new ke(2,2),qE=.95,Xh=class{constructor(t,e){this.id=t.id,this.ctx=e,this.phase=JE(t.id)%1e3/1e3*Math.PI*2,this.status=null,this.hovered=!1,this.selected=!1,this.anim=null,this.nextBlink=1+Math.random()*3,this.blinkT=-1,this.nextAction=1+Math.random()*2,this.hopCooldown=.6,this.retiring=!1,this.dead=!1,this.hostAlpha=1,this.tagKey="",this.yawS=new ln(Wd,.3),this.scaleS=new ln(1,.28),this.eyeX=new ln(0,.16),this.eyeY=new ln(0,.16),this.modelScale=1,this.root=new oe,this.pivot=new oe,this.modelWrap=new oe,this.pivot.add(this.modelWrap),this.root.add(this.pivot);let n=new Bt(new ke(.85,.85),new Me({map:HE,transparent:!0,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.006,n.renderOrder=1,this.pivot.add(n),this.ring=new Bt(new ke(1.5,1.5),new Me({map:zE,transparent:!0,depthWrite:!1,color:qh.idle,opacity:0})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=1,this.root.add(this.ring),this.tagEl=document.createElement("div"),this.tagEl.className="hqt",this.tagEl.dataset.mode="off",this.tagEl.innerHTML='<div class="hqt-pill"><i class="hqt-dot"></i><span class="hqt-text"></span></div><div class="hqt-stem"></div>',this.tagText=this.tagEl.querySelector(".hqt-text"),this.tag=new Th(this.tagEl),this.tag.center.set(.5,0),this.tag.position.y=_x+.24,this.tag.visible=!1,this.pivot.add(this.tag),this.setPlaceholderModel(t.color),e.parent.add(this.root)}setPlaceholderModel(t){let e=new Bt(new Xs(.46,40,28),XE(t));e.scale.set(1,.95,.82),e.position.y=.44;let n=new ca(.042,.085,6,12),s=new He({color:1315863,roughness:.25}),r=new Bt(n,s);r.position.set(-.12,.52,.36);let o=new Bt(n,s);o.position.set(.12,.52,.36);let a=new oe;a.add(e,r,o),this.modelScale=1,this.useModel(a,[r,o],!0)}setModel(t,e){let n=[];t.traverse(l=>{/^eye_[LR]/.test(l.name)&&n.push(l),l.isMesh&&e&&/body/.test(l.name+(l.parent?.name||""))&&(l.material=l.material.clone(),l.material.color.set(e))}),n=n.filter(l=>!n.some(c=>c!==l&&ZE(c,l)));let s=new We().setFromObject(t),r=s.getSize(new I),o=_x/Math.max(r.x,r.y,r.z,.01);t.scale.multiplyScalar(o),s.setFromObject(t);let a=s.getCenter(new I);t.position.x-=a.x,t.position.z-=a.z,t.position.y-=s.min.y,this.modelScale=t.scale.x||1,s.setFromObject(t),this.tag.position.y=s.max.y+.24,this.useModel(t,n,!1)}useModel(t,e,n){for(let s of this.pickMeshes||[])this.ctx.pickables.delete(s);this.modelWrap.clear(),this.modelWrap.add(t),this.eyes=e,this.eyeBase=e.map(s=>s.scale.y),this.eyePos=e.map(s=>s.position.clone()),this.pickMeshes=[],t.traverse(s=>{s.isMesh&&(s.userData.actorId=this.id,this.pickMeshes.push(s),this.retiring||this.ctx.pickables.add(s))}),this.placeholder=n}update(t,e,n){let s=t.effective_status||t.status,r=s!==this.status,o=this.status;this.status=s,this.bot=t;let a=qh[s]||qh.idle;this.ring.material.color.set(a),this.tagEl.dataset.status=s,this.tagEl.style.setProperty("--c",a),this.selected=n.selectedBot===t.id,this.renderTag(),e&&(!this.spot||this.spot.pos.distanceToSquared(e.pos)>1e-4)&&(this.spot?this.travelTo(e):this.dropIn(e),this.spot=e),this.ring.position.y=.012-(this.spot?this.spot.pos.y:0),r&&o&&(s==="done"?(this.celebrate(),this.hop(.45)):(s==="waiting_user"||s==="error")&&this.hop(.3))}renderTag(){let t=this.status,e=this.bot;if(!e)return;let n=t==="waiting_user"||t==="error"||t==="stuck",s=this.selected?"sel":n?"attn":this.hovered?"hover":"off",r=e.name||"";if(s==="attn"){let a=YE(t,e.step);r=this.hovered?`${e.name} \xB7 ${a}`:a}let o=`${s}|${t}|${r}`;o!==this.tagKey&&(this.tagKey=o,this.tagEl.dataset.mode=s,this.tagText.textContent=r,this.tagEl.title="")}spotIsLounge(){return!!this.spot&&this.spot.lounge}setHovered(t){this.hovered!==t&&(this.hovered=t,t&&!this.anim&&this.hop(.2),this.renderTag())}retire(){if(!this.retiring){this.retiring=!0,this.hovered=!1,this.scaleS.to(0);for(let t of this.pickMeshes||[])this.ctx.pickables.delete(t);this.tagEl.dataset.mode="off",this.tag.visible=!1}}dropIn(t){this.root.position.copy(t.pos),this.baseYaw=t.yaw,this.yawS.snap(t.yaw+Wd),this.anim={kind:"drop",t:-(this.ctx.dropDelay||0),dur:.75,from:2.4},this.scaleS.snap(this.ctx.dropDelay>0?.001:1),this.ctx.dropDelay>0&&this.scaleS.to(1,this.ctx.dropDelay)}travelTo(t){let e=this.root.position.clone(),n=e.distanceTo(t.pos);if(_s||n<.05){this.root.position.copy(t.pos),this.baseYaw=t.yaw;return}let s=new I().subVectors(t.pos,e);this.anim={kind:"travel",t:0,dur:Math.max(.8,n/2.6),from:e,to:t.pos.clone(),toYaw:t.yaw,travelYaw:Math.atan2(s.x,s.z)}}hop(t){_s||this.anim||this.retiring||(this.anim={kind:"hop",t:0,dur:.62,h:t})}celebrate(){if(_s||this.retiring)return;this.endCelebration();let t=new dt(qh.done),e=new Bt(WE,new Me({map:VE,color:t,transparent:!0,depthWrite:!1,opacity:0}));e.rotation.x=-Math.PI/2,e.position.y=this.ring.position.y+.003,e.renderOrder=2;let n=new ea(new Gr({map:GE,color:t,transparent:!0,depthWrite:!1,opacity:0}));n.position.y=Math.max(.3,this.tag.position.y-.24)*.55,n.renderOrder=2,this.root.add(e,n),this.fx={t:0,ripple:e,halo:n},this.joy=.75}endCelebration(){if(this.fx){for(let t of[this.fx.ripple,this.fx.halo])t.removeFromParent(),t.material.dispose();this.fx=null}}tickCelebration(t){let e=this.fx;e.t+=t;let n=e.t/qE;if(n>=1){this.endCelebration();return}let s=1-(1-n)**3;e.ripple.scale.setScalar(.4+1.6*s),e.ripple.material.opacity=.8*(1-n)**1.3;let r=Math.min(1,e.t/.55);e.halo.scale.setScalar(.8+1.3*(1-(1-r)**2)),e.halo.material.opacity=.6*Math.sin(Math.PI*r)}tick(t,e){let n=this.pivot,s=this.status,r=0,o=1,a=1,l=0,c=0,h=0;if(!_s){let S=Math.sin(e*2.1+this.phase);if(a=1+.018*S,o=1-.012*S,s==="working"&&(r=.012*Math.abs(Math.sin(e*9+this.phase)),l=.06),s==="stuck"&&(c=.09*Math.sin(e*1.3+this.phase)),s==="error"){let b=(e+this.phase)%1.6;b<.45&&(h=.03*Math.sin(b*70))}s==="waiting_user"&&!this.anim&&(this.nextAction-=t,this.nextAction<=0&&(this.hop(.32),this.nextAction=1.7+Math.random()*.6))}if(this.anim){let S=this.anim;S.t+=t;let b=Ce(S.t/S.dur,0,1);if(S.kind==="hop")({y:r,sx:o,sy:a}=$E(b,S.h));else if(S.kind==="drop"){S.t<0&&(r=S.from);let A=Math.min(1,b/.55);S.t>=0&&(r=S.from*(1-A*A)),b>.55&&({sx:o,sy:a}=yx((b-.55)/.45))}else if(S.kind==="travel"){let A=KE(b);this.root.position.lerpVectors(S.from,S.to,A);let _=Math.max(1,Math.round(S.dur/.42)),E=b*_%1;r=.55*Math.sin(E*Math.PI),a=1+.12*Math.sin(E*Math.PI),o=1-.07*Math.sin(E*Math.PI),this.baseYaw=b<.92?S.travelYaw:S.toYaw}S.t>=S.dur&&(S.kind==="travel"&&(this.root.position.copy(S.to),this.baseYaw=S.toYaw),this.anim=null)}let u=this.ctx.cursor,f=0,d=0,p=99;if(u?.active&&!this.retiring&&this.hostAlpha>.6){let S=u.x-this.root.position.x,b=u.z-this.root.position.z;p=Math.hypot(S,b),p<qd&&(f=di(qd,qd-1.3,p),d=Math.atan2(S,b))}this.hopCooldown-=t,p<OE&&this.hopCooldown<=0&&!this.anim&&!_s&&(this.hop(.26),this.hopCooldown=BE);let x=(this.baseYaw||0)+(this.anim?.kind==="travel"?0:Wd),m=x;if(this.hovered||this.selected)m=UE;else if(f>0){let b=!this.spotIsLounge()&&s!=="idle"?.8:1.9;m=x+Ce(Xd(d,x),-b,b)*f}this.yawS.target=this.yawS.x+Xd(m,this.yawS.x),this.yawS.step(t);let g=this.selected?1.06:1,y=this.scaleS.step(t);if(n.position.set(h,r,0),n.scale.set(o*g*y,a*g*y,o*g*y),n.rotation.set(l,this.yawS.x,c,"YXZ"),f>0&&!this.hovered&&!this.selected){let S=Xd(d,this.yawS.x);this.eyeX.to(Math.sin(Ce(S,-1.2,1.2))*kE*f),this.eyeY.to(-.012*f)}else this.eyeX.to(0),this.eyeY.to(0);this.eyeX.step(t),this.eyeY.step(t);let w=s==="working"?.14+.05*Math.sin(e*3+this.phase):s==="waiting_user"||s==="error"?.4+.25*(.5+.5*Math.sin(e*5)):s==="stuck"?.3+.15*Math.sin(e*2):0,v=this.selected?.8:this.hovered?Math.max(.4,w):w;this.ring.material.opacity=v*Ce(y,0,1),this.ring.scale.setScalar(this.selected?1.12:1),this.fx&&this.tickCelebration(t),this.tag.visible=this.tagEl.dataset.mode!=="off"&&this.hostAlpha>.5&&!this.retiring&&this.scaleS.x>.6,this.tickEyes(t),this.retiring&&this.scaleS.x<.03&&(this.dead=!0,this.dispose())}tickEyes(t){if(!this.eyes.length)return;let e=this.status,n=1;if(e==="idle"&&!this.spotIsLounge()?n=.12:e==="error"?n=.55:e==="stuck"&&(n=.7),n>.5&&!_s&&(this.nextBlink-=t,this.nextBlink<=0&&(this.blinkT=0,this.nextBlink=2.2+Math.random()*3.5),this.blinkT>=0)){this.blinkT+=t;let r=this.blinkT/.16;r>=1?this.blinkT=-1:n*=Math.max(.1,Math.abs(1-2*r))}this.joy>0&&(this.joy-=t,n=Math.min(n,.32));let s=1/this.modelScale;this.eyes.forEach((r,o)=>{r.scale.y=this.eyeBase[o]*n,r.position.x=this.eyePos[o].x+this.eyeX.x*s,r.position.y=this.eyePos[o].y+this.eyeY.x*s})}dispose(){this.endCelebration();for(let t of this.pickMeshes||[])this.ctx.pickables.delete(t);this.tagEl.remove(),this.root.removeFromParent()}};function XE(i){return new qe({color:i,roughness:.32,clearcoat:1,clearcoatRoughness:.18,sheen:.3})}function YE(i,t){let e=(t||"").trim();return i==="stuck"||!e?FE[i]||"":(e=e.charAt(0).toUpperCase()+e.slice(1),e.length>34?`${e.slice(0,33).trimEnd()}\u2026`:e)}function $E(i,t){if(i<.15){let e=i/.15;return{y:0,sx:1+.12*e,sy:1-.18*e}}if(i<.7){let e=(i-.15)/.55;return{y:t*Math.sin(e*Math.PI),sx:.93,sy:1.12}}return{y:0,...yx((i-.7)/.3)}}function yx(i){let t=Math.sin(i*Math.PI)*(1-i);return{sx:1+.16*t,sy:1-.2*t}}var KE=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Xd(i,t){return((i-t+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function ZE(i,t){for(let e=t.parent;e;e=e.parent)if(e===i)return!0;return!1}function JE(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Yh(i){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);for(let[r,o]of i)n.addColorStop(r,o);e.fillStyle=n,e.fillRect(0,0,128,128);let s=new ci(t);return s.colorSpace=ne,s}var Yd=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon"],vx=[...Yd,"rounded_cube","cone","trio"],Mx=["none","glasses","stem","antenna","bow"],jE=/^#?[0-9a-f]{6}$/i;function bx(i){if(typeof i!="string")return null;let t=i.trim().toLowerCase().replace(/[\s-]+/g,"_");return vx.includes(t)?t:null}function Sx(i){if(typeof i!="string")return"none";let t=i.trim().toLowerCase();return Mx.includes(t)?t:"none"}function wx(i){return typeof i=="string"&&jE.test(i.trim())?`#${i.trim().replace("#","").toUpperCase()}`:null}function $d(i){let t=2166136261,e=String(i);for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Ex(i){return Yd[($d(`shape:${i}`)>>>4)%Yd.length]}var il=i=>i*Math.PI/180,QE=(i,t,e)=>i+(t-i)*e;function tT(i,t,e,n=720){let s=[];for(let r=0;r<n;r++){let o=2*Math.PI*r/n,a=Math.cos(o),l=Math.sin(o),c=(Math.abs(a/i)**e+Math.abs(l/t)**e)**(-1/e);s.push([c*a,c*l])}return s}function eT(i,t,e){let n=[];for(let s=0;s<i;s++)n.push([t*Math.cos(il(e+360*s/i)),t*Math.sin(il(e+360*s/i))]);return n}function nT(i,t,e=24){let n=i.length,s=[];for(let o=0;o<n;o++){let a=[i[(o+1)%n][0]-i[o][0],i[(o+1)%n][1]-i[o][1]],l=Math.hypot(a[0],a[1]);s.push([a[1]/l,-a[0]/l])}let r=[];for(let o=0;o<n;o++){let a=s[(o+n-1)%n],l=Math.atan2(a[1],a[0]),c=Math.atan2(s[o][1],s[o][0]);for(;c<l;)c+=2*Math.PI;for(let h=0;h<e;h++){let u=QE(l,c,h/(e-1));r.push([i[o][0]+t*Math.cos(u),i[o][1]+t*Math.sin(u)])}}return r}function iT(i,t,e,n,s=1440){let r=[];for(let o=0;o<s;o++){let a=2*Math.PI*o/s,l=((1+Math.cos(i*(a-il(n))))/2)**e,c=t+(1-t)*l;r.push([c*Math.cos(a),c*Math.sin(a)])}return r}function sT(i,t=96){let e=[];for(let[o,a,l]of i)for(let c=0;c<t;c++){let h=2*Math.PI*c/t;e.push([o+l*Math.cos(h),a+l*Math.sin(h)])}e.sort((o,a)=>o[0]-a[0]||o[1]-a[1]);let n=(o,a,l)=>(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]),s=[],r=[];for(let o of e){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}for(let o=e.length-1;o>=0;o--){let a=e[o];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}return s.slice(0,-1).concat(r.slice(0,-1))}function rT(i,t=720){let e=[];for(let n=0;n<t;n++){let s=2*Math.PI*n/t,r=i[0];for(let o=1;2*o-1<i.length;o++)r+=i[2*o-1]*Math.cos(o*s)+(i[2*o]??0)*Math.sin(o*s);e.push([r*Math.cos(s),r*Math.sin(s)])}return e}function oT(i,t){let e=Math.cos(il(t)),n=Math.sin(il(t));return i.map(([s,r])=>[s*e-r*n,s*n+r*e])}function Tx(i){let t;if(i.kind==="sup")t=tT(i.a,i.b,i.n);else if(i.kind==="star")t=iT(i.k,i.rin,i.p,i.tip);else if(i.kind==="poly")t=nT(eT(i.n,i.R-i.rr,i.rot??90),i.rr),i.sy&&(t=t.map(([e,n])=>[e,n*i.sy]));else if(i.kind==="hull")t=sT(i.circles);else if(i.kind==="fourier")t=rT(i.c);else throw new Error(`outline ${i.kind}`);return i.rotate?oT(t,i.rotate):t}function Kd(i,t,e=[0,0]){let n=i.length,s=new Float64Array(t);for(let r=0;r<t;r++){let o=2*Math.PI*r/t,a=Math.cos(o),l=Math.sin(o),c=0;for(let h=0;h<n;h++){let u=i[h][0]-e[0],f=i[h][1]-e[1],d=i[(h+1)%n],p=d[0]-e[0]-u,x=d[1]-e[1]-f,m=a*x-l*p;if(Math.abs(m)<1e-12)continue;let g=(u*x-f*p)/m,y=(u*l-f*a)/m;y>=-1e-9&&y<=1+1e-9&&g>c&&(c=g)}s[r]=c}return s}function $h(i,t=1){let e=i.length,n=Float64Array.from(i);for(let s=0;s<t;s++){let r=new Float64Array(e);for(let o=0;o<e;o++)r[o]=.25*n[(o+e-1)%e]+.5*n[o]+.25*n[(o+1)%e];n=r}return n}var hr=.8,aT=.018;var Ax=.05,bs=i=>i*Math.PI/180,np=[1,0,0,0,1,0,0,0,1],Jh=(i,t)=>[i[0]*t[0]+i[1]*t[1]+i[2]*t[2],i[3]*t[0]+i[4]*t[1]+i[5]*t[2],i[6]*t[0]+i[7]*t[1]+i[8]*t[2]];function Ux(i,t){let e=new Array(9);for(let n=0;n<3;n++)for(let s=0;s<3;s++)e[n*3+s]=i[n*3]*t[s]+i[n*3+1]*t[3+s]+i[n*3+2]*t[6+s];return e}var op=i=>{let t=Math.cos(bs(i)),e=Math.sin(bs(i));return[t,-e,0,e,t,0,0,0,1]};function lT(i){let t=i[2];if(t>.99999)return np;let e=[-i[1],i[0],0],n=[0,-e[2],e[1],e[2],0,-e[0],-e[1],e[0],0],s=Ux(n,n);return np.map((r,o)=>r+n[o]+s[o]/(1+t))}var Eo=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},cr=(i,t,e)=>i+(t-i)*e,ip=class{constructor(t,e=hr){let n=t.N??88;this.N=n,this.D=e,this.th=Float64Array.from({length:n},(h,u)=>2*Math.PI*u/n);let s=Tx(t.outline),r=$h(Kd(s,n),t.smooth??1),o=[],a=[];for(let h=0;h<n;h++)o.push(r[h]*Math.cos(this.th[h])),a.push(r[h]*Math.sin(this.th[h]));let l=Math.max(Math.max(...o)-Math.min(...o),Math.max(...a)-Math.min(...a));this.r=r.map(h=>h*e/l),this.T=(t.depth??.5)*e/2,this.dome=t.dome??.1,this.nb=t.nb??7,this.flat=t.flat??[.45,.8],this.wall=(t.wall??0)*this.T;let c=t.bevel??.92;if(this.W=$h(this.r.map(h=>Math.min(c*this.T,.85*h)),3),t.inner){let h=$h(this.r.map((u,f)=>u-this.W[f]),t.inner);this.W=this.W.map((u,f)=>this.r[f]-Math.min(h[f],this.r[f]-.35*u))}this.centre=[0,0]}_interp(t,e){let n=this.N,s=(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*n,r=Math.floor(s)%n,o=s-Math.floor(s);return cr(t[r],t[(r+1)%n],o)}rimAt(t){let e=this._interp(this.r,t);return[this.centre[0]+e*Math.cos(t),this.centre[1]+e*Math.sin(t)]}zAt(t,e){let n=Math.atan2(e,t),s=this._interp(this.r,n),r=this._interp(this.W,n),o=Math.min(Math.hypot(t,e),s*.999),a=s-o;if(a>=r){let c=o/(s-r);return this.T*(1+this.dome*(1-c*c)**2)}let l=1-a/r;return this.wall+(this.T-this.wall)*Math.sqrt(Math.max(0,1-l*l))}nAt(t,e){return Ox(this,t,e)}rings(){let{r:t,W:e,T:n,dome:s,N:r,nb:o,wall:a}=this,l=[];for(let u of this.flat)l.push({rho:Float64Array.from({length:r},(f,d)=>u*(t[d]-e[d])),z:n*(1+s*(1-u*u)**2)});for(let u=0;u<=o;u++){let f=Math.PI/2*(u/o);l.push({rho:Float64Array.from({length:r},(d,p)=>t[p]-e[p]*(1-Math.sin(f))),z:a+(n-a)*Math.cos(f)})}let h=(a>0?l:l.slice(0,-1)).slice().reverse().map(u=>({rho:u.rho,z:-u.z}));return l.concat(h)}emit(t=[0,0,0]){let e=this.rings(),n=this.N,s=e.length,r=this.th,o=this.T*(1+this.dome),a=[[t[0],t[1],t[2]+o]];for(let u of e)for(let f=0;f<n;f++)a.push([t[0]+u.rho[f]*Math.cos(r[f]),t[1]+u.rho[f]*Math.sin(r[f]),t[2]+u.z]);a.push([t[0],t[1],t[2]-o]);let l=[];for(let u=0;u<n;u++)l.push([0,1+(u+1)%n,1+u]);for(let u=0;u<s-1;u++)for(let f=0;f<n;f++){let d=(f+1)%n;l.push([1+u*n+f,1+u*n+d,1+(u+1)*n+d,1+(u+1)*n+f])}let c=1+(s-1)*n,h=1+s*n;for(let u=0;u<n;u++)l.push([h,c+u,c+(u+1)%n]);return{V:a,F:l}}},sp=class{constructor(t,e=hr){this.D=e;let n=e,s=t.rr??.12*(e/hr),o=(t.width??.9)*e/2-s,a=n-s,l=Math.atan2(o,a-s),c=[[0,0],[o*.5,0],[o,0]],h=7,u=4;for(let x=1;x<=h;x++){let m=cr(-Math.PI/2,l,x/h);c.push([o+s*Math.cos(m),s+s*Math.sin(m)])}let f=Math.cos(l),d=Math.sin(l);for(let x=1;x<u;x++){let m=x/u;c.push([cr(o,0,m)+s*f,cr(s,a,m)+s*d])}for(let x=0;x<=h;x++){let m=cr(l,Math.PI/2,x/h);c.push([s*Math.cos(m),a+s*Math.sin(m)])}c[c.length-1][0]=0,this.prof=c,this.sectors=t.sectors??56,this.H=n,this.centre=[0,n*.45];let p=c.slice(1).concat(c.slice(1,-1).reverse().map(([x,m])=>[-x,m]));this.N=96,this.r=Kd(p,this.N,this.centre),this.side=c.slice(3)}rho(t){let e=this.side;if(t<=e[0][1])return e[0][0];for(let n=1;n<e.length;n++)if(t<=e[n][1])return cr(e[n-1][0],e[n][0],(t-e[n-1][1])/Math.max(1e-9,e[n][1]-e[n-1][1]));return 0}zAt(t,e){let n=this.rho(e),s=Math.min(Math.abs(t),n*.999);return Math.sqrt(Math.max(0,n*n-s*s))}nAt(t,e){return Ox(this,t,e)}rimAt(t){let e=(t%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*this.N,n=Math.floor(e)%this.N,s=e-Math.floor(e),r=cr(this.r[n],this.r[(n+1)%this.N],s);return[this.centre[0]+r*Math.cos(t),this.centre[1]+r*Math.sin(t)]}emit(t=[0,0,0]){let e=this.prof,n=this.sectors,s=[],r=[],o=[];for(let[a,l]of e){if(a<1e-9){o.push({pole:s.length}),s.push([t[0],t[1]+l,t[2]]);continue}let c=s.length;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;s.push([t[0]+a*Math.cos(u),t[1]+l,t[2]+a*Math.sin(u)])}o.push({start:c})}for(let a=0;a<o.length-1;a++){let l=o[a],c=o[a+1];for(let h=0;h<n;h++){let u=(h+1)%n;l.pole!==void 0?r.push([l.pole,c.start+u,c.start+h]):c.pole!==void 0?r.push([l.start+h,l.start+u,c.pole]):r.push([l.start+h,l.start+u,c.start+u,c.start+h])}}return{V:s,F:r}}};function Ox(i,t,e){let n=.004*(i.D/hr),s=(i.zAt(t+n,e)-i.zAt(t-n,e))/(2*n),r=(i.zAt(t,e+n)-i.zAt(t,e-n))/(2*n);return Eo([-s,-r,1])}var Bx=(i,t,e,n={})=>({kind:"poly",n:i,R:1,rr:t,rot:e,...n}),zn=(i,t,e,n,s)=>({c:i,sp:t,w:+(e/2.6).toFixed(3),h:e,pair:n,tilt:s}),cT={cloud:[.4644,-.0013,.0016,.0344,.0162,.0252,-.0051,-.0056,-.0039,.0193,-.0015,.0026,-.0043,-.0025,.0049,-.0053,.0015],star4:[.4131,1e-4,0,-3e-4,-.0167,-2e-4,-2e-4,.0736,.0341,-2e-4,-1e-4,2e-4,.0022,-4e-4,0,.0012,-4e-4,1e-4,-1e-4,-.0014,7e-4,2e-4,1e-4,.0027,.0053],clover:[.4623,0,0,.0045,-.0273,2e-4,-1e-4,-.0036,-.0449,-4e-4,1e-4,2e-4,8e-4,-4e-4,0,.0105,-.0056,0,2e-4,-.002,5e-4],bubble:[.4568,.0013,-.0022,.0313,.0104,-.0395,.0269,-.0026,.0079,.0083,.002,7e-4,.0027,-.0027,-1e-4,7e-4,-.0011],flower:[.4574,0,0,.0025,-.022,0,0,.0026,3e-4,2e-4,0,.0207,-.0284,0,0,.0046,.0035,-1e-4,-3e-4,.0023,-.002,0,1e-4,.0014,.0062,-1e-4,1e-4,-.0023,6e-4,3e-4,-2e-4,0,-3e-4,1e-4,3e-4,-.003,-.001,-1e-4,-1e-4,4e-4,-.0018],star6:[.4235,-1e-4,0,.0048,-.0394,0,0,-.0051,-.0014,4e-4,-1e-4,.0417,-.0574,4e-4,2e-4,.0021,.0032,-1e-4,-1e-4,-.003,-2e-4,1e-4,0,.001,.0033,1e-4,1e-4,.0058,-8e-4,-1e-4,3e-4,2e-4,-.0049,-1e-4,0,-6e-4,0]},wo=i=>({kind:"fourier",c:cT[i]}),hT={sphere:{type:"slab",outline:{kind:"sup",a:1,b:1,n:2},face:zn([.17,.218],.26,.272,25,36)},cloud:{type:"slab",N:96,smooth:0,inner:10,outline:wo("cloud"),face:zn([.161,.15],.214,.236,16,28)},rounded_square:{type:"slab",outline:{kind:"hull",circles:[[.146,.381,.107],[-.393,.195,.141],[-.149,-.383,.106],[.397,-.195,.139]]},face:zn([.08,.023],.18,.212,16,29)},star4:{type:"slab",N:112,smooth:0,depth:.3,bevel:.5,outline:wo("star4"),face:zn([.076,.086],.186,.191,16,28)},clover:{type:"slab",N:104,smooth:0,inner:10,outline:wo("clover"),face:zn([.062,.081],.212,.212,15,28)},bubble:{type:"slab",N:96,smooth:0,inner:8,outline:wo("bubble"),face:zn([.179,.087],.208,.214,16,24)},flower:{type:"slab",N:108,smooth:0,inner:10,outline:wo("flower"),face:zn([.107,.033],.179,.213,15,28)},drop:{type:"slab",outline:{kind:"hull",circles:[[.015,-.031,.419],[-.166,.34,.148]]},face:zn([.192,.145],.201,.227,16,27)},pill:{type:"slab",outline:{kind:"hull",circles:[[.149,.042,.339],[-.148,-.042,.34]]},face:zn([.144,.14],.267,.233,15,27)},triangle:{type:"slab",outline:{kind:"hull",circles:[[.723,-.02,.185],[-.23,.471,.319],[-.222,-.339,.41]]},face:zn([.145,.213],.201,.216,12,54)},pentagon:{type:"slab",outline:{kind:"hull",circles:[[.276,.325,.101],[-.184,.425,.177],[-.414,.049,.157],[-.202,-.411,.151],[.41,-.181,.211]]},face:zn([.075,.053],.203,.222,15,28)},star6:{type:"slab",N:108,smooth:0,depth:.3,bevel:.5,outline:wo("star6"),face:zn([.092,.017],.189,.202,16,28)},hexagon:{type:"slab",outline:{kind:"hull",circles:[[.264,.33,.112],[-.154,.4,.152],[-.404,.073,.162],[-.267,-.334,.108],[.153,-.399,.153],[.412,-.073,.155]]},face:zn([.1,.029],.275,.274,15,28)},rounded_cube:{type:"slab",outline:{...Bx(4,.27,45),rotate:18},depth:.74,bevel:.62,wall:.5,face:{c:[.04,.03],sp:.22,w:.1,h:.23,pair:12,tilt:25}},cone:{type:"lathe",face:{c:[0,.31],sp:.22,w:.105,h:.23,pair:0,tilt:0}},trio:{type:"trio"}},uT=[{key:"a",mat:0,D:.42,at:[-.2,.2,0],def:{type:"slab",N:48,nb:5,flat:[.5],outline:{kind:"sup",a:1,b:.93,n:2.4,rotate:5},face:{c:[.12,.08],sp:.25,w:.12,h:.25,pair:14,tilt:18}}},{key:"b",mat:1,D:.46,at:[.19,.23,.05],primary:!0,def:{type:"slab",N:48,nb:5,flat:[.5],outline:{...Bx(6,.3,90),rotate:-6},face:{c:[.03,-.02],sp:.26,w:.11,h:.25,pair:10,tilt:4}}},{key:"c",mat:2,D:.42,at:[.02,.57,-.09],host:!0,def:{type:"slab",N:60,nb:5,flat:[.5],depth:.4,bevel:.7,outline:{kind:"star",k:6,rin:.58,p:1.1,tip:90},face:{c:[0,-.07],sp:.25,w:.115,h:.24,pair:0,tilt:0}}}];function Rx(i,t){return i.type==="lathe"?new sp(i,t):new ip(i,t)}function Zh(i,t,e,n=16,s=10,r=2.7){let o=[[0,0,e]];for(let h=1;h<s;h++){let u=Math.PI*h/s;for(let f=0;f<n;f++){let d=2*Math.PI*f/n,p=Math.cos(d),x=Math.sin(d),m=(Math.abs(p)**r+Math.abs(x)**r)**(-1/r);o.push([i*Math.sin(u)*p*m,t*Math.sin(u)*x*m,e*Math.cos(u)])}}o.push([0,0,-e]);let a=[];for(let h=0;h<n;h++)a.push([0,1+(h+1)%n,1+h]);for(let h=0;h<s-2;h++)for(let u=0;u<n;u++){let f=(u+1)%n;a.push([1+h*n+u,1+h*n+f,1+(h+1)*n+f,1+(h+1)*n+u])}let l=o.length-1,c=1+(s-2)*n;for(let h=0;h<n;h++)a.push([l,c+h,c+(h+1)%n]);return{V:o,F:a}}function fT(i,t,e=22,n=8){let s=[],r=[];for(let o=0;o<e;o++){let a=2*Math.PI*o/e;for(let l=0;l<n;l++){let c=2*Math.PI*l/n;s.push([(i+t*Math.cos(c))*Math.cos(a),(i+t*Math.cos(c))*Math.sin(a),t*Math.sin(c)])}}for(let o=0;o<e;o++)for(let a=0;a<n;a++)r.push([o*n+a,(o+1)%e*n+a,(o+1)%e*n+(a+1)%n,o*n+(a+1)%n]);return{V:s,F:r}}function Kh(i,t,e=8){let n=i.length,s=[],r=[],o=(f,d)=>[f[0]-d[0],f[1]-d[1],f[2]-d[2]],a=(f,d)=>[f[1]*d[2]-f[2]*d[1],f[2]*d[0]-f[0]*d[2],f[0]*d[1]-f[1]*d[0]];for(let f=0;f<n;f++){let d=Eo(o(i[Math.min(f+1,n-1)],i[Math.max(f-1,0)])),p=a(d,[0,0,1]);Math.hypot(...p)<1e-6&&(p=a(d,[0,1,0])),p=Eo(p);let x=a(d,p);for(let m=0;m<e;m++){let g=2*Math.PI*m/e,y=Math.cos(g)*t[f],w=Math.sin(g)*t[f];s.push([i[f][0]+y*p[0]+w*x[0],i[f][1]+y*p[1]+w*x[1],i[f][2]+y*p[2]+w*x[2]])}}for(let f=0;f<n-1;f++)for(let d=0;d<e;d++){let p=(d+1)%e;r.push([f*e+d,f*e+p,(f+1)*e+p,(f+1)*e+d])}let l=Eo(o(i[1],i[0])),c=Eo(o(i[n-1],i[n-2])),h=s.length;s.push([i[0][0]-l[0]*t[0]*.5,i[0][1]-l[1]*t[0]*.5,i[0][2]-l[2]*t[0]*.5]);let u=s.length;s.push([i[n-1][0]+c[0]*t[n-1]*.8,i[n-1][1]+c[1]*t[n-1]*.8,i[n-1][2]+c[2]*t[n-1]*.8]);for(let f=0;f<e;f++){let d=(f+1)%e;r.push([h,d,f]),r.push([u,(n-1)*e+f,(n-1)*e+d])}return{V:s,F:r}}var Cx=(i,t,e,n)=>[0,1,2].map(s=>(1-n)**2*i[s]+2*(1-n)*n*t[s]+n*n*e[s]),sl=(i,t,e=[0,0,0])=>i.map(n=>{let s=Jh(t,n);return[s[0]+e[0],s[1]+e[1],s[2]+e[2]]});function kx(i,t,e,n,s=.7){let r=i.zAt(t,e),o=i.nAt(t,e),a=Eo([s*o[0],s*o[1],s*o[2]+(1-s)]);return{z:r,M:Ux(lT(a),op(n))}}function dT(i,t){let{body:e,at:n,D:s}=i,r={...i.face};t==="glasses"&&i.glasses&&(r.sp=Math.max(r.sp,.25),r.h=Math.min(r.h,.2),r.w=Math.min(r.w,.09));let o=[r.c[0]*s,r.c[1]*s],a=[Math.cos(bs(r.pair))*r.sp*s/2,Math.sin(bs(r.pair))*r.sp*s/2],l=r.w*s/2,c=r.h*s/2,h=.62*l,u=[];for(let[f,d]of[["L",[o[0]-a[0],o[1]-a[1]]],["R",[o[0]+a[0],o[1]+a[1]]]]){let{z:p,M:x}=kx(e,d[0],d[1],r.tilt),m=Zh(l,c,h,i.eyeSeg??16,i.eyeRings??10);u.push({side:f,c:d,M:x,centre:[d[0]+n[0],d[1]+n[1],p+.15*h+n[2]],V:sl(m.V,x),F:m.F})}return u}function Ix(i,t=0){let e=-Math.sin(bs(t)),n=Math.cos(bs(t)),s=-1/0,r=i.rimAt(Math.PI/2);for(let o=0;o<180;o++){let a=i.rimAt(2*Math.PI*o/180),l=a[0]*e+a[1]*n;l>s+1e-9&&(s=l,r=a)}return r}function Px(i,t,e,n){let{body:s,at:r,D:o}=t,a=o/hr,l=(h,u=0)=>[h[0]+r[0],h[1]+r[1],u+r[2]],c=[];if(i==="stem"){let h=Ix(s,20),u=[h[0]+.012*a,h[1]-.045*a,0],f=[u[0]-.035*a,u[1]+.09*a,0],d=[u[0]-.1*a,u[1]+.155*a,0],p=Array.from({length:11},(m,g)=>g/10),x=Kh(p.map(m=>l(Cx(u,f,d,m))),p.map(m=>a*(.045-.01*m)),8);c.push({...x,mat:0})}else if(i==="antenna"){let h=Ix(s),u=[h[0]-.01*a,h[1]-.06*a,0],f=[u[0]+.015*a,u[1]+.1*a,0],d=[u[0]+.05*a,u[1]+.2*a,0],p=Array.from({length:9},(w,v)=>v/8),x=Kh(p.map(w=>l(Cx(u,f,d,w))),p.map(w=>a*(.036-.008*w)),8);c.push({...x,mat:0});let m=.075*a,g=Zh(m,m,m,14,10,2),y=l([d[0]+.004*a,d[1]+.5*m],0);c.push({V:g.V.map(w=>[w[0]+y[0],w[1]+y[1],w[2]+y[2]]),F:g.F,mat:1})}else if(i==="bow"){let h=bs(64),u=s.rimAt(h),f=[u[0]*.93+(1-.93)*s.centre[0],u[1]*.93+(1-.93)*s.centre[1]],d=s.T!==void 0?s.T*.34:.08*a,p=h+Math.PI/2-bs(14),x=op(p*180/Math.PI),m=Zh(.13*a,.085*a,.06*a,14,9,2),g=Zh(.06*a,.06*a,.058*a,12,8,2),y=l(f,d);for(let w of[-1,1])c.push({V:sl(m.V,x,[y[0]+w*.12*a*Math.cos(p),y[1]+w*.12*a*Math.sin(p),y[2]-.004*a]),F:m.F,mat:1});c.push({V:sl(g.V,np,y),F:g.F,mat:1})}else if(i==="glasses"){let h=Math.min(.118,e.sp*.5-.006)*o,u=.017*o,f=[];for(let y of e.list){let{z:w,M:v}=kx(s,y.c[0],y.c[1],0,.7),S=[y.c[0],y.c[1],w+.004*a],b=fT(h,u,o<.6?14:24,o<.6?6:8);c.push({V:sl(b.V,v,l([S[0],S[1]],S[2])),F:b.F,mat:0}),f.push(y.c)}let[d,p]=f,x=Math.hypot(p[0]-d[0],p[1]-d[1]),m=[(p[0]-d[0])/x,(p[1]-d[1])/x],g=[];for(let y=0;y<5;y++){let w=y/4,v=d[0]+m[0]*h+(p[0]-d[0]-2*m[0]*h)*w,S=d[1]+m[1]*h+(p[1]-d[1]-2*m[1]*h)*w;g.push(l([v,S],s.zAt(v,S)+u*1.2+.006*a*Math.sin(Math.PI*w)))}c.push({...Kh(g,Array(5).fill(u),6),mat:0});for(let[y,w]of[[-1,d],[1,p]]){let v=[];for(let S=0;S<9;S++){let b=S/8,A=w[0]+y*m[0]*(h+b*(.4*o-h+.02*a)),_=w[1]+y*m[1]*(h+b*(.4*o-h+.02*a)),E=s.rimAt(Math.atan2(_-s.centre[1],A-s.centre[0])),R=Math.hypot(E[0]-s.centre[0],E[1]-s.centre[1])*.985,P=Math.hypot(A-s.centre[0],_-s.centre[1]);if(P>R){let L=R/P;A=s.centre[0]+(A-s.centre[0])*L,_=s.centre[1]+(_-s.centre[1])*L}v.push(l([A,_],s.zAt(A,_)+u*1.2))}c.push({...Kh(v,Array(9).fill(u*.9),6),mat:0})}}return c}function rp(i,t=e=>e){let e=[...new Set(i.map(a=>a.mat))].sort((a,l)=>a-l),n=[],s=[],r=[];for(let a of e){let l=s.length;for(let c of i){if(c.mat!==a)continue;let h=c.V.map(t),u=[];for(let p of c.F)p.length===3?u.push(p):(u.push([p[0],p[1],p[2]]),u.push([p[0],p[2],p[3]]));let f=0;for(let[p,x,m]of u){let g=h[p],y=h[x],w=h[m];f+=g[0]*(y[1]*w[2]-y[2]*w[1])+g[1]*(y[2]*w[0]-y[0]*w[2])+g[2]*(y[0]*w[1]-y[1]*w[0])}let d=n.length/3;for(let p of h)n.push(p[0],p[1],p[2]);for(let[p,x,m]of u)s.push(d+p,d+(f<0?m:x),d+(f<0?x:m))}r.push({start:l,count:s.length-l,materialIndex:a})}let o=new ye;o.setAttribute("position",new Zt(n,3)),o.setIndex(s);for(let a of r)o.addGroup(a.start,a.count,a.materialIndex);return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o}function pT(i){let t=hT[i];return t.type==="trio"?uT.map(e=>({body:Rx(e.def,e.D),at:e.at,D:e.D,face:e.def.face,mat:e.mat,primary:!!e.primary,host:!!e.host,glasses:!!e.primary,eyeSeg:12,eyeRings:8})):[{body:Rx(t,hr),at:[0,0,0],D:hr,face:t.face,mat:0,primary:!0,host:!0,glasses:!0}]}var Zd=new Map,Jd=new Map;function mT(i,t){let e=`${i}|${t}`;if(Zd.has(e))return Zd.get(e);let n=pT(i),s=op(t),r=m=>Jh(s,m),a=n.map(m=>({...m.body.emit(m.at),mat:m.mat})).map(m=>({...m,V:m.V.map(r)})),l=1/0;for(let m of a)for(let g of m.V)l=Math.min(l,g[1]);let c=.01,h=aT;for(let m of a)for(let g of m.V){let y=g[1]-l-h;g[1]=l+h+.5*(y+Math.sqrt(y*y+c*c))}let u=[1/0,1/0,1/0],f=[-1/0,-1/0,-1/0];for(let m of a)for(let g of m.V)for(let y=0;y<3;y++)u[y]=Math.min(u[y],g[y]),f[y]=Math.max(f[y],g[y]);let d=[-(u[0]+f[0])/2,-u[1],-(u[2]+f[2])/2],p=rp(a,m=>[m[0]+d[0],m[1]+d[1],m[2]+d[2]]),x={units:n,R:s,shift:d,geo:p,nMats:new Set(n.map(m=>m.mat)).size,tris:p.index.count/3};return Zd.set(e,x),x}function gT(i,t,e){let n=`${i}|${t}|${e}`;if(Jd.has(n))return Jd.get(n);let s=mT(i,t),{units:r,R:o,shift:a}=s,l=x=>{let m=Jh(o,x);return[m[0]+a[0],m[1]+a[1],m[2]+a[2]]},c=[],h=2,u=null;for(let x of r){let m=dT(x,e);e==="glasses"&&x.glasses&&(u={u:x,list:m,sp:Math.max(x.face.sp,.25)});for(let g of m){let y=x.primary?`eye_${g.side}`:`eye_${g.side}_${h}`,w=rp([{V:sl(g.V,o),F:g.F,mat:0}]);c.push({name:y,geo:w,pos:l(g.centre)})}x.primary||h++}let f=null;if(e!=="none"){let x=[];if(e==="glasses")u&&(x=Px("glasses",u.u,u,null));else{let m=r.find(g=>g.host)||r[0];x=Px(e,m,null,null)}if(x.length){let m=rp(x.map(w=>({...w,V:w.V.map(v=>Jh(o,v))})),w=>[w[0]+a[0],w[1]+a[1],w[2]+a[2]]),g=m.boundingBox.clone(),y=s.geo.boundingBox;g.min.max(y.min.clone().subScalar(Ax)),g.max.min(y.max.clone().addScalar(Ax)),m.boundingBox=g,f={geo:m,accent:x.some(w=>w.mat===1)}}}let d=s.tris;for(let x of c)d+=x.geo.index.count/3;f&&(d+=f.geo.index.count/3);let p={body:s,eyes:c,extra:f,tris:d};return Jd.set(n,p),p}var xT=.78,_T=.06;function zx(i){let t=new dt(i),e=.2126*t.r+.7152*t.g+.0722*t.b;return e>=xT?"light":e<_T?"dark":"mid"}var jd=new Map;function Lx(i){return jd.has(i)||jd.set(i,new qe({color:i,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.06})),jd.get(i)}var yT="#141417",Qd=new Map;function vT(){return Qd.has("dark")||Qd.set("dark",new qe({color:yT,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.04})),Qd.get("dark")}var tp=new Map;function MT(i,t=!1){let e=`${i}|${t}`;return tp.has(e)||tp.set(e,new qe(t?i==="glasses"?{color:"#ECECEF",roughness:.32,clearcoat:.8,clearcoatRoughness:.05}:{color:"#8A8D93",roughness:.4,clearcoat:.6,clearcoatRoughness:.06}:i==="glasses"?{color:"#101012",roughness:.45,clearcoat:.4,clearcoatRoughness:.06}:{color:"#3A3D40",roughness:.5,clearcoat:.3,clearcoatRoughness:.06})),tp.get(e)}var ep=new Map;function bT(i){return ep.has(i)||ep.set(i,new qe({color:i,roughness:.3,clearcoat:1,clearcoatRoughness:.06})),ep.get(i)}var Nx=["#FFD60A","#FF2D6F","#2D7BFF","#2FD067"];function ST(i){let t=new dt(i).convertLinearToSRGB(),e=zx(i)==="dark"?["#FFFFFF",...Nx]:Nx,n=e[0],s=-1;for(let r of e){let o=new dt(r).convertLinearToSRGB(),a=(t.r+o.r)/2,l=(2+a)*(t.r-o.r)**2+4*(t.g-o.g)**2+(3-a)*(t.b-o.b)**2;l>s&&(s=l,n=r)}return n}function wT(i){let t={};new dt(i).getHSL(t);let e=new dt().setHSL((t.h+150/360)%1,Math.max(t.s,.7),Math.min(.46,Math.max(.36,t.l*.85))),n=t.l<.22?new dt("#F4F4F6"):new dt("#111113");return[i,`#${e.getHexString().toUpperCase()}`,`#${n.getHexString().toUpperCase()}`]}var ET=["#000000","#A06B39","#FB2B3E","#FD690F","#F59312","#14C16F","#13B7A2","#1E86FC","#8F59F9","#F93498","#959595"],Dx=ET.slice(0,10);function Fx(){return 0}function Hx({shape:i,color:t,accessory:e,seed:n}={}){let s=String(n??"blob"),r=bx(i)??Ex(s),o=wx(t)??Dx[$d(`color:${s}`)%Dx.length],a=Sx(e),l=gT(r,Fx(s),a),c=l.body.nMats>1?wT(o):[o],h=c[l.body.nMats>1?a==="glasses"?1:2:0],u=new oe;u.name="blob";let f=new Bt(l.body.geo,l.body.nMats>1?c.map(Lx):Lx(o));f.name="body",u.add(f);for(let d of l.eyes){let p=new Bt(d.geo,vT());p.name=d.name,p.position.set(d.pos[0],d.pos[1],d.pos[2]),u.add(p)}if(l.extra){let d=MT(a==="glasses"?"glasses":"stem",zx(h)==="dark"),p=l.extra.accent?[d,bT(ST(o))]:d,x=new Bt(l.extra.geo,p);x.name="extra",u.add(x)}return u.userData={generated:!0,look:{shape:r,color:o,accessory:a},tris:l.tris,tilt:Fx(s)},u}var dp="/4d",pp=new I(1,1,1).normalize(),In={x:-.4,y:-.3,z:.3},Ss={w:35,h:22},TT=29.5,Ji={min:.75,max:3,focus:2},AT=230,RT=360,Wx=Math.sin(Math.atan(1/Math.SQRT2)),CT=[1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20],fe,ws,Vt,Ci,yn,Co,To,me,wn,iu=null,au=null,qx={currentFloor:null,selectedBot:null},Sn=new Map,As=new Set,mp=new Set,ap=new Map,Ro=[],su=new Ca,cl=new tt,Ii={active:!1,x:0,z:0},Gx=new Nn(new I(0,1,0),0),ol=new I,jh=new Ia,kt={x:new ln(In.x,.45),y:new ln(In.y,.55),z:new ln(In.z,.45),zoom:new ln(0,.4)},Zi=null,cp=!1,Le=null,Pi=new Map,Es=null,eu=!1,gp=0,Ts=0,hp=!1,pi=null,up=0,ru=null,hl=!0,ou=!1,lp=!1,IT=!1,Qh=1e3/30,PT=.9,bn=(()=>{let i=new URLSearchParams(location.search);return{floor:ou?null:i.get("floor"),from:i.get("from"),intro:i.get("intro"),hold:i.has("hold")?Number(i.get("hold")):null,cam:i.get("cam"),cursor:i.get("cursor")}})(),fp=!1,Xx=!1,LT=Vg(`${dp}/office`);function Yx(i,t={}){let e=++up;hl=!0,yn=i,Co=t,yn.classList.add("hq-scene"),NT(),pi=yn.querySelector(".hq-loading"),pi||(pi=document.createElement("div"),pi.className="hq-loading",pi.setAttribute("role","status"),pi.innerHTML='<span class="hq-loading-label">Building the office</span><span class="hq-loading-track"><i></i></span>',yn.append(pi)),fe=new Sh({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1}),fe.setPixelRatio(Math.min(devicePixelRatio,1.5)),fe.outputColorSpace=ne,fe.toneMapping=Qs,fe.toneMappingExposure=1.05,fe.setClearColor(0,0),fe.domElement.className="hq-canvas",yn.append(fe.domElement),ws=new Ah,ws.domElement.className="hq-labels",yn.append(ws.domElement),Ci=new Hs;let n=new uo(fe);Ci.environment=n.fromScene(new Ih,.04).texture,Ci.environmentIntensity=.55,To=fx({scene:Ci,renderer:fe}),document.documentElement.dataset.sky="studio",yn.style.background=Vd(al),Vt=new Yn(-1,1,1,-1,.1,240),Vt.position.copy(pp).multiplyScalar(80),Vt.lookAt(0,0,0),LT.then(s=>{if(e!==up||!fe)return;iu=s,me=new kh({scene:Ci,daylight:To,assets:s,baseUrl:`${dp}/office`,renderer:fe}),To.setBuilding(me),s.spots.lounges.forEach(o=>{o&&(o.lounge=!0)}),window.bothq=Object.assign(window.bothq||{},{source:s.source}),ll();let r=()=>{au&&xp()};Promise.race([Qg,new Promise(o=>setTimeout(o,1500))]).then(r,r)}),wn=xx(fe,Ci,Vt),al&&wn.setDark&&wn.setDark(!0),zT(),ru=new ResizeObserver(ll),ru.observe(yn),ll(),fe.setAnimationLoop(ZT),window.bothq=Object.assign(window.bothq||{},{scene:{get camera(){return Vt},get building(){return me},cam:kt,actors:Sn,get daylight(){return To},switchFloor:s=>me&&Kx(s,!1),settle:nu}})}function NT(){if(!document.querySelector('link[href*="scene.css"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="/4d/scene.css",document.head.append(i)}if(!document.querySelector('link[href*="family=Inter"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700&display=swap",document.head.append(i)}}function $x(i,t){au=i,qx={...t},me&&xp()}function xp(){let i=au,t=qx,e=[...i.floors].sort((f,d)=>(f.order??0)-(d.order??0));me.setFloors(e);let n=t.currentFloor&&e.some(f=>f.id===t.currentFloor)?t.currentFloor:e[0]?.id??"_";bn.floor&&e.some(f=>f.id===bn.floor)&&(n=bn.from&&!eu&&e.some(f=>f.id===bn.from)?bn.from:bn.floor),me.activeId!==n&&Kx(n,!eu),eu=!0;let s=me.activeOpen();if(!s)return;let r=Object.values(i.bots).filter(f=>f.floor===me.activeId),o=new Set(r.map(f=>f.id));for(let[f,d]of Sn)o.has(f)||(d.retire(),As.add(d),Sn.delete(f));let a=Math.max(1e-4,...r.map(f=>f.usage_share||0)),l=DT(r),c=new Array(20).fill(0),h=Math.max(0,gp+.55-Ts);for(let f of r){let d=Sn.get(f.id);d||(d=new Xh(f,{parent:s.root,inst:s,pickables:mp,confetti:XT,cursor:Ii,dropDelay:h}),Sn.set(f.id,d),FT(d,f));let p=(CT[(f.desk||1)-1]||1)-1,x=iu.spots.desks[p]||iu.spots.desks[0];(f.effective_status||f.status)==="working"&&!l.has(f.id)&&(c[p]=1),d.update(f,l.get(f.id)||x,{maxShare:a,selectedBot:t.selectedBot})}me.setScreens(c);let u=e.find(f=>f.id===me.activeId);if(me.setDisplayData({floorName:u?u.name:"",bots:r,hour:tx(i.now)}),Zi&&!Sn.has(Zi)&&(Zi=null),!hp){if(hp=!0,bn.intro==="0"&&nu(3.5),bn.from&&bn.floor&&xp(),bn.hold!==null&&(nu(bn.hold),fp=!0),bn.cursor){let[f,d]=bn.cursor.split(",").map(Number);Ii.active=!0,Ii.x=f,Ii.z=d,Xx=!0,nu(1.2)}if(bn.cam){let[f,d,p]=bn.cam.split(",").map(Number);kt.x.snap(f),kt.z.snap(d),kt.zoom.snap(Math.log(p||1))}}}function nu(i=3){let t=.03333333333333333;for(let e=0;e<i;e+=t){Ts+=t,e_(t),me.update(t,performance.now());for(let n of Sn.values())n.hostAlpha=me.activeOpen()?.alpha??1,n.tick(t,Ts);for(let n of As)n.tick(t,Ts),n.dead&&As.delete(n)}}function DT(i){let t=new Map,e=iu.spots.lounges.filter(Boolean);return i.filter(s=>(s.effective_status||s.status)==="idle").sort((s,r)=>(s.desk||0)-(r.desk||0)).slice(0,e.length).forEach((s,r)=>t.set(s.id,e[r])),t}function FT(i,t){let e=null,n=r=>{let o=`${r.avatar||r.id}|${r.color||""}|${JSON.stringify(r.look||null)}`;o!==e&&(e=o,(r.has_glb===!1?Promise.resolve(null):UT(r.avatar||r.id)).then(a=>{if(i.dead||e!==o)return;if(a)return i.setModel(a.clone(!0));let l=r.look||{};i.setModel(Hx({shape:l.shape,color:l.color||r.color,accessory:l.accessory,seed:r.id}))}))};n(t);let s=i.update.bind(i);i.update=(r,o,a)=>(n(r),s(r,o,a))}function UT(i){return ap.has(i)||ap.set(i,new go().loadAsync(`${dp}/blobs/${encodeURIComponent(i)}.glb`).then(t=>t.scene).catch(()=>null)),ap.get(i)}function Kx(i,t){for(let n of Sn.values())n.retire(),As.add(n);Sn.clear(),Zi=null,me.setActive(i,{intro:t});let e=me.activeY+In.y;kt.x.to(In.x),kt.z.to(In.z),kt.y.to(e),kt.zoom.to(0),t&&(kt.x.snap(In.x),kt.z.snap(In.z),kt.y.snap(e-2.6),kt.zoom.snap(Math.log(.86)),kt.y.to(e,.1),kt.zoom.to(0,.1)),gp=Ts,t&&(me.prewarm(Vt),OT())}var al=!1;function Zx(i){al=!!i,yn&&(yn.style.background=Vd(al)),wn&&wn.setDark&&wn.setDark(al)}function lu(){return fe?fe.domElement:null}function Jx(i){hl=!!i,hl&&fe&&ll()}function jx(){if(up++,hl=!1,fe){fe.setAnimationLoop(null);try{fe.dispose()}catch{}fe.domElement.remove()}try{wn?.composer?.dispose?.()}catch{}ws?.domElement.remove(),pi?.remove(),ru?.disconnect(),ru=null,yn&&yn.classList.remove("hq-scene","is-hovering"),Sn.clear(),As.clear(),Ro.length=0,mp.clear(),me=null,wn=null,To=null,Ci=null,Vt=null,fe=null,ws=null,yn=null,Co=null,pi=null,au=null,eu=!1,hp=!1,Zi=null,Le=null,Es=null,gp=0}function OT(){let i=pi;i&&(pi=null,i.classList.add("is-done"),setTimeout(()=>i.remove(),450),Co?.onReady?.())}function Qx(i){if(!me)return;if(i==="reset"){kt.x.to(In.x),kt.z.to(In.z),kt.y.to(me.activeY+In.y),kt.zoom.to(0);return}let t=Ce(Math.exp(kt.zoom.target)*(i==="in"?1.3:1/1.3),Ji.min,Ji.max);kt.zoom.to(Math.log(t))}function t_(i){let t=Sn.get(i);!t||!me||(kt.x.to(t.root.position.x),kt.z.to(t.root.position.z),kt.y.to(me.activeY+.6),kt.zoom.to(Math.log(Math.max(Math.exp(kt.zoom.target),Ji.focus))))}function e_(i){BT(),kt.x.step(i),kt.y.step(i),kt.z.step(i),kt.zoom.step(i);let t=Ce(Math.exp(kt.zoom.x),Ji.min*.85,Ji.max*1.1);Math.abs(t-Vt.zoom)>1e-5&&(Vt.zoom=t,Vt.updateProjectionMatrix()),ol.set(kt.x.x,kt.y.x,kt.z.x),Vt.position.copy(ol).addScaledVector(pp,80)}function BT(){kt.x.target=Ce(kt.x.target,-9.5,9.5),kt.z.target=Ce(kt.z.target,-7.5,7.5),kt.zoom.target=Ce(kt.zoom.target,Math.log(Ji.min),Math.log(Ji.max))}function ll(){if(!fe)return;let i=yn.clientWidth||1,t=yn.clientHeight||1;fe.setSize(i,t,!1),ws.setSize(i,t),wn?.setSize(i,t);let e=i/t,n=lp?Ss.w:Ss.w+(TT-Ss.w)*(1-Ce((i-560)/340,0,1)),s=Math.max(Ss.h,n/e)/2*(lp?PT:1);Vt.left=-s*e,Vt.right=s*e,Vt.top=s,Vt.bottom=-s;let r=lp?0:Ce((i-900)/600,0,1)*(RT-AT)/2;r>.5?Vt.setViewOffset(i,t,r,0,i,t):Vt.clearViewOffset(),Vt.updateProjectionMatrix()}var kT=()=>fe.domElement.clientHeight/((Vt.top-Vt.bottom)/Vt.zoom);function zT(){let i=fe.domElement;i.addEventListener("pointermove",GT),i.addEventListener("pointerleave",()=>{Ii.active=!1,i_(null)}),!ou&&(i.addEventListener("pointerdown",HT),i.addEventListener("pointerup",VT),i.addEventListener("pointercancel",t=>{Pi.delete(t.pointerId),Le=null,Es=null}),i.addEventListener("wheel",WT,{passive:!1}),i.addEventListener("contextmenu",t=>t.preventDefault()))}function cu(i){let t=fe.domElement.getBoundingClientRect();cl.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1)}function HT(i){if(fe.domElement.setPointerCapture?.(i.pointerId),cu(i),Pi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Pi.size===2){let[t,e]=[...Pi.values()];Es={d:Math.hypot(t.x-e.x,t.y-e.y),z:kt.zoom.target},Le=null;return}Le={id:i.pointerId,x0:i.clientX,y0:i.clientY,lx:i.clientX,ly:i.clientY,lt:performance.now(),panning:!1,vx:0,vz:0}}function GT(i){if(cu(i),Ii.active=!0,cp=!0,Pi.has(i.pointerId)&&Pi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Es&&Pi.size===2){let[h,u]=[...Pi.values()];kt.zoom.to(Es.z+Math.log(Math.hypot(h.x-u.x,h.y-u.y)/Es.d));return}if(!Le||Le.id!==i.pointerId||(!Le.panning&&Math.hypot(i.clientX-Le.x0,i.clientY-Le.y0)>5&&(Le.panning=!0),!Le.panning))return;let t=performance.now(),e=i.clientX-Le.lx,n=i.clientY-Le.ly,s=Math.max(.001,(t-Le.lt)/1e3);Le.lx=i.clientX,Le.ly=i.clientY,Le.lt=t;let r=kT(),o=-e/r,a=n/r/Wx,l=(o-a)/Math.SQRT2,c=(-o-a)/Math.SQRT2;kt.x.snap(Ce(kt.x.x+l,-9.5,9.5)),kt.z.snap(Ce(kt.z.x+c,-7.5,7.5)),Le.vx=Le.vx*.6+l/s*.4,Le.vz=Le.vz*.6+c/s*.4}function VT(i){if(Pi.delete(i.pointerId),Es){Pi.size<2&&(Es=null),Le=null;return}if(!Le||Le.id!==i.pointerId)return;let t=Le;if(Le=null,t.panning){let e=Ce(t.vx,-30,30),n=Ce(t.vz,-30,30);kt.x.v=e,kt.z.v=n,kt.x.to(kt.x.x+e*.12),kt.z.to(kt.z.x+n*.12);return}cu(i),Co.onSelectBot?.(n_())}function WT(i){i.preventDefault(),cu(i);let t=Math.exp(kt.zoom.target),e=Ce(t*Math.exp(-i.deltaY*(i.ctrlKey?.012:.0016)),Ji.min,Ji.max);if(e===t)return;let n=Vt.view?.enabled?Vt.view.offsetX/Vt.view.fullWidth*2:0,s=cl.x+n,r=cl.y,o=1/t-1/e,a=s*Vt.right*o,l=r*Vt.top*o/Wx;kt.x.to(kt.x.target+(a-l)/Math.SQRT2),kt.z.to(kt.z.target+(-a-l)/Math.SQRT2),kt.zoom.to(Math.log(e))}function n_(){su.setFromCamera(cl,Vt);let i=su.intersectObjects([...mp],!1)[0];return i?i.object.userData.actorId:null}function i_(i){i!==Zi&&(Zi&&Sn.get(Zi)?.setHovered(!1),Zi=i,i&&Sn.get(i)?.setHovered(!0),yn.classList.toggle("is-hovering",!!i),Co.onHoverBot?.(i))}var Vx=[3458905,689407,16752394,16732064,16738835,1357990],qT=new ke(.07,.035);function XT(i){let t=new oe;t.position.copy(i);let e=[];for(let n=0;n<36;n++){let s=new Bt(qT,new Me({color:Vx[n%Vx.length],side:je,transparent:!0})),r=Math.random()*Math.PI*2,o=2.2+Math.random()*1.6,a=.8+Math.random()*1.2;e.push({m:s,v:new I(Math.cos(r)*a,o,Math.sin(r)*a),spin:new I(Math.random()*9,Math.random()*9,0)}),t.add(s)}Ci.add(t),Ro.push({group:t,parts:e,t:0,life:1.6})}function YT(i){for(let t=Ro.length-1;t>=0;t--){let e=Ro[t];e.t+=i;for(let n of e.parts)n.v.y-=6.5*i,n.v.multiplyScalar(1-1.4*i),n.m.position.addScaledVector(n.v,i),n.m.rotation.x+=n.spin.x*i,n.m.rotation.y+=n.spin.y*i,n.m.material.opacity=Math.max(0,1-e.t/e.life);e.t>=e.life&&(e.group.removeFromParent(),e.parts.forEach(n=>n.m.material.dispose()),Ro.splice(t,1))}}function s_({width:i=1600,height:t=900,scale:e=1,box:n={x:.06,y:.06,w:.88,h:.76}}={}){let s=me?.activeOpen();if(!s||!wn)return null;let r=fe.getPixelRatio(),o=Math.min(fe.capabilities.maxTextureSize,fe.capabilities.maxRenderbufferSize||1/0),a=Math.max(1,Math.min(e,o/i,o/t)),l=Vt.zoom,c=Vt.position.clone(),h=[],u=p=>{p?.visible&&(p.visible=!1,h.push(p))};for(let p of Sn.values())u(p.ring);for(let p of As)u(p.root);for(let p of Ro)u(p.group);let f=s.walls,d=f?.data;try{if(d){let m={...d,floorName:`Floor ${me.activeIndex+1}`,bots:d.bots.map(g=>({...g,name:"",task:"",step:""}))};f.screen&&f.drawScreen(m),f.board&&f.drawBoard(m)}fe.setPixelRatio(a),fe.setSize(i,t,!1),wn.setSize(i,t),$T(i/t,n),Ao.set(0,me.cabinY.x+.7,0).project(Vt),wn.render(Ce(Ao.y*.5+.5,0,1),0,1);let p=document.createElement("canvas");p.width=i,p.height=t;let x=p.getContext("2d");return x.imageSmoothingQuality="high",x.drawImage(fe.domElement,0,0,i,t),p}finally{h.forEach(p=>{p.visible=!0}),d&&(f.screen&&f.drawScreen(d),f.board&&f.drawBoard(d)),fe.setPixelRatio(r),ll(),Vt.zoom=l,Vt.position.copy(c),Vt.updateProjectionMatrix(),Ao.set(0,me.cabinY.x+.7,0).project(Vt),wn.render(Ce(Ao.y*.5+.5,0,1),0,Ce(1.5/Vt.zoom,.25,1))}}var ur=new We,rl=new I;function $T(i,t){Vt.clearViewOffset(),Vt.zoom=1,Vt.position.set(In.x,me.activeY+In.y,In.z).addScaledVector(pp,80),Vt.updateMatrixWorld(!0),me.group.updateMatrixWorld(!0);let e=1/0,n=-1/0,s=1/0,r=-1/0,o=c=>{if(c.visible){if(c.isMesh&&c.geometry){c.geometry.boundingBox||c.geometry.computeBoundingBox(),ur.copy(c.geometry.boundingBox);for(let h=0;h<8;h++)rl.set(h&1?ur.max.x:ur.min.x,h&2?ur.max.y:ur.min.y,h&4?ur.max.z:ur.min.z).applyMatrix4(c.matrixWorld).applyMatrix4(Vt.matrixWorldInverse),e=Math.min(e,rl.x),n=Math.max(n,rl.x),s=Math.min(s,rl.y),r=Math.max(r,rl.y)}for(let h of c.children)o(h)}};o(me.group),Number.isFinite(e)||(e=-Ss.w/2,n=Ss.w/2,s=-Ss.h/2,r=Ss.h/2);let a=Math.max((r-s)/t.h,(n-e)/(t.w*i)),l=a*i;Vt.left=(e+n)/2-(t.x+t.w/2)*l,Vt.right=Vt.left+l,Vt.top=(s+r)/2+(t.y+t.h/2)*a,Vt.bottom=Vt.top-a,Vt.updateProjectionMatrix()}function KT(){Xx||!Ii.active||!me||(su.setFromCamera(cl,Vt),Gx.constant=-me.activeY,su.ray.intersectPlane(Gx,ol)?(Ii.x=ol.x,Ii.z=ol.z):Ii.active=!1)}var Ao=new I,tu=0;function ZT(i){if(!fe)return;if(!hl||document.hidden){jh.getDelta();return}if(ou){let s=i-tu;if(s<Qh-2)return;tu+=Math.max(1,Math.round(s/Qh))*Qh,i-tu>Qh/2&&(tu=i)}let t=fp?0:Math.min(jh.getDelta(),.05);fp&&jh.getDelta(),Ts=jh.elapsedTime;let e=performance.now();To.update(t,e),e_(t),me&&me.update(t,e),cp&&!Le?.panning&&(cp=!1,i_(n_())),KT();let n=me?.activeOpen()?.alpha??1;for(let s of Sn.values())s.hostAlpha=n,s.tick(t,Ts);for(let s of As)s.hostAlpha=s.ctx.inst.alpha,s.tick(t,Ts),s.dead&&As.delete(s);YT(t),wn?(Ao.set(0,(me?me.cabinY.x:0)+.7,0).project(Vt),wn.render(Ce(Ao.y*.5+.5,0,1),t,Ce(1.5/Vt.zoom,.25,1))):fe.render(Ci,Vt),ws&&(!ou||IT)&&ws.render(Ci,Vt),Co?.onFrame?.()}var JT="/4d/blobs/thumbs/",jT="/4d/brand/logo-mark.png";var p_="bothq.waitBlur",m_="bothq.dock",QT={working:"working",idle:"resting",waiting_user:"waiting for you",error:"error",stuck:"stuck",done:"done"},g_={working:"Working",idle:"Resting",waiting_user:"Waiting for you",error:"Error",stuck:"Stuck",done:"Done"},tA={working:["working","working"],waiting_user:["waiting","waiting"],error:["error","errors"],stuck:["stuck","stuck"],idle:["resting","resting"],done:["done","done"]},x_=[{key:"working",s:"working",lead:!0,n:i=>i.working},{key:"attention",s:"waiting_user",alert:!0,n:i=>i.waiting_user+i.stuck},{key:"error",s:"error",alert:!0,n:i=>i.error},{key:"idle",s:"idle",n:i=>i.idle},{key:"done",s:"done",n:i=>i.done,hideZero:!0}],eA={week:"Week",day:"Day",month:"Month"},nA={week:"Usage this week",day:"Usage today",month:"Usage this month"},Is={close:'<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',minus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',chev:'<svg class="bhq-chev" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',eyeOn:'<svg class="bhq-eye-on" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.9" fill="currentColor"/></svg>',eyeOff:'<svg class="bhq-eye-off" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity=".55"/><path d="M3 13L13 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M3.5 8.6l3 3 6-6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',share:'<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M10 12.2V2.9M6.7 6.1L10 2.8l3.3 3.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2 8.7H6A1.8 1.8 0 0 0 4.2 10.5v5A1.8 1.8 0 0 0 6 17.3h8a1.8 1.8 0 0 0 1.8-1.8v-5A1.8 1.8 0 0 0 14 8.7h-1.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'},ml=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},N=null;function iA(i){return{h:i||{},top:null,fl:null,panel:null,feed:null,zoom:null,dock:null,owned:[],last:{state:null,opts:{currentFloor:null,selectedBot:null}},skew:0,nowStr:null,floors:new Map,activeFloorId:null,cells:new Map,feedRows:new Map,feedOut:new Set,feedMode:null,feedFirst:!0,failedThumbs:new Set,mode:null,cardBot:null,teamFloor:null,teamReady:!1,ready:!1,keyHandler:null,ro:null,ro2:null,onResize:null,timer:null,fades:[],sh:null,phone:!1,land:!1,mqs:null,mqFn:null,ro3:null,cardY:0,cardStop:null,chipFloor:null}}function G(i,t,...e){let n=document.createElement(i);if(t)for(let s of Object.keys(t)){let r=t[s];r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:n.setAttribute(s,r===!0?"":String(r)))}for(let s of e)s!=null&&s!==!1&&n.append(s);return n}function fr(i){let t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstChild}function le(i,t){t=t==null?"":String(t),i.textContent!==t&&(i.textContent=t)}function de(i,t,e){e==null||e===!1?i.hasAttribute(t)&&i.removeAttribute(t):(e=e===!0?"":String(e),i.getAttribute(t)!==e&&i.setAttribute(t,e))}function sn(i,t){i.hidden!==!!t&&(i.hidden=!!t)}function Po(i,t,e){let n=i._vars||(i._vars={});n[t]!==e&&(n[t]=e,i.style.setProperty(t,e))}function Hn(i,t,e){i.classList.contains(t)!==!!e&&i.classList.toggle(t,!!e)}function r_(i,t,e){let n="_px_"+t;i[n]!==e&&(i[n]=e,i.style[t]=e+"px")}function gl(i,t,e){return Math.min(e,Math.max(t,i))}function sA(i){return i<10?"0"+i:String(i)}function Io(i,t,e){if(t=Math.max(0,Math.round(Number(t)||0)),i._to===t)return;let n=i._to==null?0:i._to;if(i._to=t,i._raf&&(cancelAnimationFrame(i._raf),i._raf=0),i._tm&&(clearTimeout(i._tm),i._tm=0),e===!1||ml.matches||n===t){i.textContent=String(t);return}let s=performance.now(),r=700,o=a=>{let l=gl((a-s)/r,0,1),c=1-Math.pow(1-l,3);i.textContent=String(Math.round(n+(t-n)*c)),i._raf=l<1?requestAnimationFrame(o):0};i._raf=requestAnimationFrame(o),i._tm=setTimeout(()=>{i._tm=0,i._to===t&&(i.textContent=String(t))},r+150)}function pl(i,t,e){return Math.abs(Math.trunc(i))===1?t:e}function yp(i,t){let e=tA[i]||[i,i];return pl(t,e[0],e[1])}function rn(i){let t=typeof i=="number"?i:Date.parse(i);return Number.isFinite(t)?t:null}var rA=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});function mi(i){return i==null?"":rA.format(new Date(i))}var __=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function oA(i){if(i&&i.now&&i.now!==N.nowStr){let t=rn(i.now);t!=null&&(N.skew=Date.now()-t,N.nowStr=i.now)}}function Ps(){return Date.now()-N.skew}function aA(i){let t=Math.floor(Math.max(0,i)/6e4);if(t<1)return"under a minute";if(t<60)return t+" min";let e=Math.floor(t/60),n=t%60;if(e<24)return n?e+" h "+n+" min":e+" h";let s=Math.floor(e/24),r=e%24;return r?s+" d "+r+" h":s+" d"}function lA(i){let t=Math.floor(i/6e4);if(t<1)return"under a minute";let e=Math.floor(t/1440),n=Math.floor(t%1440/60),s=t%60;return e>0?e+" d "+n+" h":n>0?n+" h "+s+" min":s+" min"}function Tp(i){let t=Ps()-i,e=Math.floor(t/6e4);if(e<1)return"just now";if(e<60)return e+" min ago";let n=Math.floor(e/60);return n<24?n+" h ago":Math.floor(n/24)+" d ago"}function cA(i){let t=Math.floor((Ps()-i)/6e4);if(t<1)return"now";if(t<60)return t+"m";let e=Math.floor(t/60);return e<24?e+"h":Math.floor(e/24)+"d"}function y_(i){let t=i&&i.unreported;if(!t)return"";let e=rn(t.from),n=rn(t.to);return"Worked (unreported)"+(n==null?"":" \xB7 "+(e==null?"":mi(e)+"\u2013")+mi(n))}function vp(i){let t=rn(i&&i.last_seen);return t==null?"never reported":"seen "+Tp(t)}function hA(i){let t=i-Ps();if(t<=0)return"due now";let e=Math.ceil(t/6e4);if(e<60)return"in "+e+" min";let n=Math.floor(e/60),s=e%60;if(n<6)return s?"in "+n+" h "+s+" min":"in "+n+" h";if(n<24)return"in "+n+" h";let r=new Date(i);return __[r.getDay()]+" "+mi(i)}function uA(i){let t=new Date(i);return __[t.getDay()]+" "+t.getDate()+"/"+sA(t.getMonth()+1)+" "+mi(i)}var fA=new Intl.NumberFormat("en-GB",{maximumFractionDigits:1});function dA(i){let t=Math.max(0,Number(i)||0)/60;return t<10?fA.format(t):String(Math.round(t))}function ji(i){return i&&(i.effective_status||i.status)||"idle"}function Cs(i){return QT[i]||i||""}function pA(i){return/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(i||"")}function mA(i){let t=String(i||"").match(/[\p{L}\p{N}]+/gu)||[];return t.length?t.length===1?Array.from(t[0]).slice(0,2).join("").toUpperCase():(Array.from(t[0])[0]+Array.from(t[1])[0]).toUpperCase():"?"}function Mp(i){let t=i.replace("#","");t.length===3&&(t=t.split("").map(n=>n+n).join(""));let e=n=>{let s=parseInt(t.slice(n,n+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function gA(i){let t=Mp(i),e=1.05/(t+.05),n=(t+.05)/(Mp("#1D1D1F")+.05);return e>=n?"#fff":"#1D1D1F"}function xl(i,t,e){for(let n=0;n<t.length;n++){let s=i.children[e+n];s!==t[n]&&i.insertBefore(t[n],s||null)}}function v_(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}function o_(i){try{return localStorage.getItem(i)}catch{return null}}function M_(i,t){try{localStorage.setItem(i,t)}catch{}}function bp(i){return i.classList.add("bhq-fade"),i.addEventListener("scroll",()=>b_(i),{passive:!0}),N.fades.push(i),i}function b_(i){let t=i.scrollHeight-i.clientHeight,e=t>2&&i.scrollTop>2,n=t>2&&i.scrollTop<t-2;Po(i,"--fade-t",e?"20px":"0px"),Po(i,"--fade-b",n?"22px":"0px"),de(i,"data-fade",e||n?"":null)}function uu(){for(let i of N.fades)b_(i)}function xA(i){let t={working:0,idle:0,waiting_user:0,error:0,stuck:0,done:0},e=i.bots;if(e&&typeof e=="object"&&Object.keys(e).length)for(let n of Object.keys(e)){let s=ji(e[n]);t[s]=(t[s]||0)+1}else if(i.summary&&typeof i.summary=="object")for(let n of Object.keys(t))t[n]=Number(i.summary[n])||0;return t}function Lo(i){i=i||{};let t=G("img",{class:"bhq-av-img",alt:"",draggable:"false",decoding:"async"}),e=G("span",{class:"bhq-av-fb","aria-hidden":"true"}),n=G("span",{class:"bhq-av"},t,e),s=i.orb===!1?null:G("i",{class:"bhq-orb","aria-hidden":"true"}),r=G("span",{class:"bhq-ava"+(i.cls?" "+i.cls:"")},n,s);return t.addEventListener("error",()=>{t._name&&N.failedThumbs.add(t._name),n.classList.add("is-fb")}),t.addEventListener("load",()=>n.classList.remove("is-fb")),{root:r,inner:n,img:t,fb:e}}function No(i,t,e){let n=t.avatar||t.id||"",s=pA(t.color)?t.color:"#A1A1A6";Po(i.root,"--c",s),Po(i.root,"--fg",gA(s)),Hn(i.root,"is-dark",Mp(s)<.04),de(i.root,"data-s",e||null),le(i.fb,mA(t.name)),i.img._name!==n&&(i.img._name=n,!n||N.failedThumbs.has(n)?(i.img.removeAttribute("src"),i.inner.classList.add("is-fb")):(i.inner.classList.remove("is-fb"),i.img.src=t.has_glb===!1?yA(t):JT+encodeURIComponent(n)+".png"))}var _A="/4d/blobs/lib/",a_=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon","rounded_cube","cone","trio"],l_=["000000","A06B39","FB2B3E","FD690F","F59312","14C16F","13B7A2","1E86FC","8F59F9","F93498","959595"];function yA(i){let t=a=>{let l=2166136261;for(let c of a)l=Math.imul(l^c.charCodeAt(0),16777619)>>>0;return l},e=String(i.id||i.name||""),n=i.look||{},s=a_.includes(n.shape)?n.shape:a_[(t(`shape:${e}`)>>>4)%13];s==="sphere"&&n.accessory==="stem"&&(s="sphere_stem");let r=/^#([0-9a-f]{6})$/i.exec(n.color||i.color||""),o=l_[t(`color:${e}`)%10];if(r){let a=f=>[0,2,4].map(d=>parseInt(f.slice(d,d+2),16)),[l,c,h]=a(r[1]),u=1/0;Math.max(l,c,h)-Math.min(l,c,h)<28&&(o=(l+c+h)/3<75?"000000":"959595",u=0);for(let f of l_){let[d,p,x]=a(f),m=(l+d)/2,g=(2+m/256)*(l-d)**2+4*(c-p)**2+(3-m/256)*(h-x)**2;g<u&&(u=g,o=f)}}return`${_A}${s}-${o}.png`}function pu(i){return N.owned.push(i),i}function Ap(){if(N){if(N.keyHandler&&document.removeEventListener("keydown",N.keyHandler),N.onResize&&removeEventListener("resize",N.onResize),N.ro&&N.ro.disconnect(),N.ro2&&N.ro2.disconnect(),N.ro3&&N.ro3.disconnect(),N.mqs&&N.mqFn)for(let i of N.mqs)i.removeEventListener("change",N.mqFn);N.phone&&document.documentElement.classList.remove("bhq-phone","bhq-land"),N.timer&&clearInterval(N.timer);for(let i of N.owned)i.parentNode&&i.remove();N=null}}function S_(i){Ap(),N=iA(i);let t=document.getElementById("topbar"),e=document.getElementById("floors"),n=document.getElementById("panel"),s=document.getElementById("feed");s||(s=pu(G("section",{id:"feed"})),document.body.append(s)),de(s,"aria-label","Activity feed");let r=document.getElementById("scene");r&&de(r,"aria-label","Office"),e&&de(e,"aria-label","Floors"),n&&de(n,"aria-label","Bot card and floor team"),t?vA(t):console.warn("[ui] #topbar not found"),e?MA(e):console.warn("[ui] #floors not found"),n?SA(n):console.warn("[ui] #panel not found"),wA(s),EA(),PA(e,s),FA(s),UA(),N.keyHandler=o=>{if(o.key!=="Escape"||o.defaultPrevented)return;let a=o.target;a&&(a.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))||N.last.opts.selectedBot&&N.h.onSelectBot&&N.h.onSelectBot(null)},document.addEventListener("keydown",N.keyHandler),N.timer=setInterval(()=>{document.hidden||!N.last.state||Rs("dock",()=>N.dock&&P_(N.last.state))},15e3)}function vA(i){i.textContent="";let t=G("span",{class:"bhq-num bhq-clock",text:"--:--"}),e=G("div",{class:"bhq-brand bhq-surface"},G("img",{class:"bhq-mark",src:jT,alt:"",draggable:"false"}),G("b",{class:"bhq-word",text:"Grok Bot Dashboard"}),G("span",{class:"bhq-sep","aria-hidden":"true"}),G("span",{class:"bhq-live"},G("i",{class:"bhq-dot bhq-live-dot","aria-hidden":"true"}),"Live \xB7 ",t)),n={},s=G("div",{class:"bhq-summary bhq-surface",role:"group","aria-label":"Bot statuses"});for(let p of x_){let x=G("b",{class:"bhq-num"}),m=G("span"),g=G("span",{class:"bhq-schip"+(p.lead?" bhq-schip--lead":""),"data-s":p.s},G("i",{class:"bhq-dot","data-s":p.s,"aria-hidden":"true"}),x,m);n[p.key]={el:g,num:x,label:m,cfg:p},s.append(g)}let r=G("span",{class:"bhq-usage-label",text:"Week"}),o=G("i"),a=G("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Usage limit"},o),l=G("b",{class:"bhq-num bhq-usage-pct"}),c=G("span",{class:"bhq-reset"}),h=G("div",{class:"bhq-usage bhq-surface",hidden:!0},r,a,l,G("span",{class:"bhq-sep","aria-hidden":"true"}),c),u=G("span",{class:"bhq-demo bhq-surface",text:"DEMO",hidden:!0,title:"Demo data, not real bots"}),f=G("button",{class:"bhq-share bhq-surface",type:"button","aria-label":"Share an image of your office",title:"Share"},fr(Is.share));f.addEventListener("click",()=>{N.h.onShare&&N.h.onShare(f)});let d=G("div",{class:"bhq-right"},f,u,h);i.append(e,s,d),N.top={root:i,clock:t,chips:n,summary:s,usage:h,usageLabel:r,meter:a,fill:o,pct:l,reset:c,demo:u}}function MA(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow");let t=G("div",{class:"bhq-car","aria-hidden":"true"}),e=G("div",{class:"bhq-shaft"},t),n=G("b",{class:"bhq-num"}),s=G("div",{class:"bhq-fscroll"},e);i.append(G("div",{class:"bhq-fhead"},G("span",{text:"Floors"}),n),s),N.fl={root:i,shaft:e,car:t,count:n,fscroll:s,carTop:null,carH:null,carShown:!1,ready:!1},typeof ResizeObserver=="function"&&(N.ro=new ResizeObserver(()=>I_()),N.ro.observe(e))}function bA(i){let t=G("span",{class:"bhq-num bhq-fnum"}),e=G("b",{class:"bhq-fname"}),n=G("span",{class:"bhq-fdots","aria-hidden":"true"}),s=G("span",{class:"bhq-num bhq-fcount"}),r=G("button",{class:"bhq-floor",type:"button","data-id":i},t,G("span",{class:"bhq-ftext"},e,n),s);return r.addEventListener("click",()=>{N.h.onSelectFloor&&N.h.onSelectFloor(i)}),{btn:r,num:t,name:e,dots:n,count:s,dotEls:[]}}function SA(i){i.textContent="";let t=G("h2",{class:"bhq-h2"}),e=G("span",{class:"bhq-tsub"}),n=G("b",{class:"bhq-num"}),s=G("b",{class:"bhq-num"}),r=G("b",{class:"bhq-num"}),o=G("em",{text:"waiting"}),a=G("em",{text:"errors"}),l=G("span",null,o,s),c=G("span",null,a,r),h=G("header",{class:"bhq-thead bhq-surface bhq-glow","data-s":"idle"},G("div",{class:"bhq-ttop"},t,e),G("div",{class:"bhq-tbot"},G("div",{class:"bhq-tbig"},n,G("span",{text:"working"})),G("div",{class:"bhq-tcounts"},l,c))),u=bp(G("div",{class:"bhq-members",role:"list"})),f=G("p",{class:"bhq-note",text:"Nobody here yet. A bot shows up when it logs its first step.",hidden:!0}),d=G("div",{class:"bhq-tcard bhq-surface bhq-glow"},u,f),p=G("section",{class:"bhq-team","aria-label":"Floor team"},h,d),x=G("button",{class:"bhq-close",type:"button","aria-label":"Close bot card",title:"Close (Esc)"},fr(Is.close));x.addEventListener("click",()=>{N.h.onSelectBot&&N.h.onSelectBot(null)});let m=Lo({cls:"bhq-ava--lg"}),g=G("h2",{class:"bhq-h2",tabindex:"-1"}),y=G("p",{class:"bhq-sub"}),w=G("i",{class:"bhq-dot","aria-hidden":"true"}),v=G("span"),S=G("span",{class:"bhq-status"},w,v),b=G("p",{class:"bhq-now"}),A=G("div",{class:"bhq-hero bhq-surface bhq-glow","data-s":"idle"},x,G("div",{class:"bhq-head"},m.root,G("div",{class:"bhq-head-text"},g,y)),S,b),_=G("p",{class:"bhq-task"}),E=G("div",{class:"bhq-block",hidden:!0},G("div",{class:"bhq-label",text:"Task"}),_),R=Q=>{let pt=G("b",{class:"bhq-num"}),Ft=G("small",{text:Q||""});return{root:G("div",{class:"bhq-stat"},pt,Ft),v:pt,l:Ft}},P=R(),L=R(),k=R("h worked"),D=G("div",{class:"bhq-stats"},P.root,L.root,k.root),B=G("div",{class:"bhq-label"}),X=G("i"),$=G("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Share of total usage"},X),rt=G("b",{class:"bhq-num"}),K=G("span",{class:"bhq-share"},rt," of all"),et=G("div",{class:"bhq-useblock"},B,G("div",{class:"bhq-use"},$,K)),z=G("ol",{class:"bhq-steps",role:"list"}),ot=G("div",{class:"bhq-stepsblock"},G("div",{class:"bhq-label",text:"Recent steps"}),z),at=bp(G("div",{class:"bhq-card-body"},E,D,et,ot)),Dt=G("button",{class:"bhq-cta",type:"button",text:"Open chat",disabled:!0,title:"No chat link yet"});Dt.addEventListener("click",()=>{let Q=N.last.state&&N.last.state.bots&&N.last.state.bots[N.cardBot];!Q||!Q.chat_url||Rp(Q.id,Q.chat_url)});let Ht=G("div",{class:"bhq-more bhq-surface bhq-glow bhq-glow--still"},at,G("div",{class:"bhq-card-foot"},Dt)),Jt=G("span",{class:"bhq-cgrab","aria-hidden":"true"}),Z=G("section",{class:"bhq-card",hidden:!0,"aria-label":"Bot card"},Jt,A,Ht);i.append(Z,p),N.panel={root:i,team:p,tcard:d,teamHead:h,teamTitle:t,teamSub:e,teamBig:n,nWait:s,nErr:r,rowWait:l,rowErr:c,lErr:a,list:u,teamEmpty:f,card:{root:Z,hero:A,body:at,av:m,name:g,where:y,status:S,stDot:w,stTxt:v,now:b,taskBlock:E,task:_,sSteps:P,sTasks:L,sHours:k,usageLabel:B,useBlock:et,fuel:$,fillBar:X,shareNum:rt,hist:z,histSig:null,cta:Dt,fresh:!0}}}function Rp(i,t){N.h.onOpenChat?N.h.onOpenChat(i,t):window.location.href=t}function wA(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow","bhq-glow--still");let t=G("ol",{class:"bhq-frows",role:"list","aria-live":"off"}),e=G("p",{class:"bhq-note",text:"No events yet.",hidden:!0});i.append(G("div",{class:"bhq-fhead"},G("span",{text:"Activity"})),t,e),N.feed={root:i,list:t,empty:e}}function EA(){let i=(e,n,s,r)=>{let o=G("button",{class:"bhq-zbtn "+e,type:"button","aria-label":s,title:s},fr(n));return o.addEventListener("click",()=>{N.h.onZoom&&N.h.onZoom(r)}),o},t=pu(G("div",{class:"bhq-zoom bhq-surface",role:"group","aria-label":"Scene zoom"},i("z-out",Is.minus,"Zoom out","out"),G("span",{class:"bhq-sep","aria-hidden":"true"}),i("z-in",Is.plus,"Zoom in","in")));document.body.append(t),N.zoom={root:t}}function hu(i,t,e){let n=G("span",{class:"bhq-dcount bhq-num",text:"0"}),s=bp(G("div",{class:"bhq-dbody-in"})),r=G("button",{class:"bhq-dtoggle",type:"button","aria-expanded":"false"},G("span",{class:"bhq-dtitle",text:t}),n),o=G("div",{class:"bhq-dh"+(e&&e.eye?" has-eye":"")},r),a=null;e&&e.eye&&(a=G("button",{class:"bhq-eye",type:"button","aria-pressed":"false","aria-label":"Hide this panel for the camera",title:"Hide for the camera"},fr(Is.eyeOn),fr(Is.eyeOff)),o.append(a)),o.append(fr(Is.chev));let l=G("section",{class:"bhq-dcard bhq-surface bhq-glow bhq-glow--still","aria-label":t,"data-dock":i},o,G("div",{class:"bhq-dbody"},s)),c={id:i,root:l,toggle:r,count:n,inner:s,eye:a,open:!1,shown:!1,rows:0};return r.addEventListener("click",()=>Cp(c,!c.shown)),c}var TA=44,AA=140,RA=92,CA=8;function IA(i,t){i.shown=!!t,Hn(i.root,"is-open",i.shown),de(i.toggle,"aria-expanded",i.shown?"true":"false"),i.inner.inert=!i.shown}function Cp(i,t,e=!0){i.open=!!t;let n=N.dock;if(i.open&&(n.lru=n.lru.filter(s=>s!==i),n.lru.push(i)),e){let s={};for(let r of["waiting","finished","routines"])s[r]=!!n[r].open;M_(m_,JSON.stringify(s))}Sp(n.avail==null?1/0:n.avail)}function Sp(i){let t=N.dock;t.avail=i;let e=[t.check,t.waiting,t.finished,t.routines],n=e.filter(o=>!o.root.hidden),s=new Set(n.filter(o=>o.open)),r=()=>n.reduce((o,a)=>o+(s.has(a)?a.rows?AA:RA:TA),0)+CA*Math.max(0,n.length-1);for(;s.size&&r()>i;){let o=t.lru.find(a=>s.has(a))||[...s][0];s.delete(o)}for(let o of e)IA(o,s.has(o))}function c_(i,t=!0){let e=N.dock;e.blurred=!!i,Hn(e.waiting.root,"is-blurred",e.blurred),de(e.waiting.eye,"aria-pressed",e.blurred?"true":"false"),de(e.waiting.eye,"aria-label",e.blurred?"Show this panel":"Hide this panel for the camera"),de(e.waiting.eye,"title",e.blurred?"Show":"Hide for the camera"),e.wlist.inert=e.blurred,t&&M_(p_,e.blurred?"1":"0")}function PA(i,t){let e=pu(G("aside",{class:"bhq-dock","aria-label":"Waiting on me, finished work and routines"})),n=hu("check","Status check"),s=hu("waiting","Waiting on me",{eye:!0}),r=hu("finished","Finished"),o=hu("routines","Routines"),a=G("div",{class:"bhq-wlist"}),l=G("p",{class:"bhq-note",text:"Nothing is waiting on you.",hidden:!0});s.inner.append(a,l);let c=G("ol",{class:"bhq-tl",role:"list"}),h=G("p",{class:"bhq-note",text:"Nothing finished in the last 24 hours.",hidden:!0});r.inner.append(c,h);let u=G("ul",{class:"bhq-rl",role:"list"}),f=G("p",{class:"bhq-note",text:"No routines scheduled.",hidden:!0});o.inner.append(u,f);let d=G("ul",{class:"bhq-ck",role:"list"}),p=G("p",{class:"bhq-note bhq-cknote"});n.inner.append(d,p),n.root.hidden=!0,e.append(n.root,s.root,r.root,o.root),document.body.append(e),N.dock={root:e,check:n,waiting:s,finished:r,routines:o,wlist:a,wempty:l,tl:c,fempty:h,rl:u,rempty:f,cl:d,cnote:p,lru:[],wrows:new Map,crows:new Map,checkT:null,finSig:null,finRefs:[],routSig:null,routRefs:[],copied:new Map,blurred:!1,floors:i,feed:t};let x=null;try{x=JSON.parse(o_(m_)||"null")}catch{x=null}for(let m of["routines","finished","waiting"])Cp(N.dock[m],x&&typeof x[m]=="boolean"?x[m]:m==="waiting",!1);s.eye.addEventListener("click",()=>c_(!N.dock.blurred)),c_(o_(p_)==="1",!1),N.onResize=()=>fl(),addEventListener("resize",N.onResize),typeof ResizeObserver=="function"&&(N.ro2=new ResizeObserver(()=>fl()),i&&N.ro2.observe(i),t&&N.ro2.observe(t)),fl()}function h_(i){return!!i&&i.getClientRects().length>0}function fl(){let i=N&&N.dock;if(!i)return;if(N.phone){Sp(1/0),uu();return}let t=24,e=h_(i.floors)?i.floors.offsetTop+i.floors.offsetHeight+10:96,n=h_(i.feed)?i.feed.offsetTop-10:innerHeight-t,s=Math.max(0,n-e);r_(i.root,"top",e),r_(i.root,"maxHeight",s),Sp(s),uu()}var LA="(max-width: 600px), (max-height: 500px) and (max-width: 950px)",NA="(max-height: 500px) and (orientation: landscape)",DA=6;function _p(i,t){return i*t*.55/(t+.55*Math.abs(i))}function w_(i){let t=i[i.length-1],e=i[0];for(let s of i)if(t.t-s.t<=100){e=s;break}let n=t.t-e.t;return n>0?(t.y-e.y)/n*1e3:0}function u_(i){return i/1e3*.998/(1-.998)}function wp(i,t,e,n,s,r,o){let a=Math.pow(2*Math.PI/(r||.36),2),l=2*(o||1)*Math.sqrt(a),c=i,h=e||0,u=performance.now(),f=0,d=!1,p=x=>{if(d)return;let m=Math.min(.032,Math.max(.001,(x-u)/1e3));if(u=x,h+=(-a*(c-t)-l*h)*m,c+=h*m,Math.abs(c-t)<.35&&Math.abs(h)<12){f=0,n(t),s&&s();return}n(c),f=requestAnimationFrame(p)};return f=requestAnimationFrame(p),()=>{d=!0,f&&cancelAnimationFrame(f)}}function f_(i,t){let e=null;i.addEventListener("pointerdown",s=>{if(!(!t.can(s)||s.pointerType==="mouse"&&s.button!==0)){e={id:s.pointerId,y0:s.clientY,s:t.begin(),hist:[{t:s.timeStamp,y:s.clientY}],moved:!1};try{i.setPointerCapture(s.pointerId)}catch{}}}),i.addEventListener("pointermove",s=>{if(!e||s.pointerId!==e.id)return;let r=s.clientY-e.y0;!e.moved&&Math.abs(r)<DA||(e.moved=!0,e.hist.push({t:s.timeStamp,y:s.clientY}),e.hist.length>8&&e.hist.shift(),t.move(e.s+r))});let n=s=>{if(!e||s.pointerId!==e.id)return;let r=e;e=null,t.end(r.moved,r.moved?w_(r.hist):0)};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n)}var fu={};function E_(i,t){fu[i]!==t&&(fu[i]=t,document.documentElement.style.setProperty(i,t))}function FA(i){let t=G("button",{class:"bhq-sgrab",type:"button","aria-expanded":"false","aria-label":"Expand panel"},G("i",{"aria-hidden":"true"})),e=G("div",{class:"bhq-shead"}),n=G("div",{class:"bhq-speek"},t,e),s=G("div",{class:"bhq-sbody"}),r=G("i",{class:"bhq-sprobe","aria-hidden":"true"}),o=pu(G("div",{class:"bhq-sheet",role:"region","aria-label":"Floor panel"},n,s,r));document.body.append(o);let a=N.sh={root:o,peek:n,body:s,grab:t,headSlot:e,probe:r,feed:i,y:0,H:0,travel:0,vis0:132,open:!1,busy:!1,cancel:null};a.start=new URLSearchParams(location.search).get("sheet")==="open";let l=d=>{let p=a.travel;du(d<0?-_p(-d,160):d>p?p+_p(d-p,160):d)},c=(d,p)=>{if(a.busy=!1,!d){dl(!a.open);return}dl(a.y+u_(p)<a.travel/2,p)};f_(n,{can:()=>N.phone&&!N.land,begin:()=>(a.cancel&&(a.cancel(),a.cancel=null),a.busy=!0,a.y),move:l,end:c}),t.addEventListener("click",d=>{d.detail===0&&dl(!a.open)});let h=null;s.addEventListener("touchstart",d=>{h=a.open&&!N.land&&d.touches.length===1&&s.scrollTop<=0?{y0:d.touches[0].clientY,on:!1,s:0,hist:[]}:null},{passive:!0}),s.addEventListener("touchmove",d=>{if(!h)return;let p=d.touches[0].clientY;if(!h.on){if(s.scrollTop>0||p-h.y0<-2){h=null;return}if(p-h.y0<3)return;h.on=!0,h.y0=p,h.s=a.y,a.busy=!0,a.cancel&&(a.cancel(),a.cancel=null)}d.cancelable&&d.preventDefault(),h.hist.push({t:d.timeStamp,y:p}),h.hist.length>8&&h.hist.shift(),l(h.s+(p-h.y0))},{passive:!1});let u=()=>{if(!h)return;let d=h;h=null,d.on&&c(!0,w_(d.hist))};s.addEventListener("touchend",u),s.addEventListener("touchcancel",u);let f=N.panel;if(f){let d=f.card;f_(d.root,{can:p=>N.phone&&!N.land&&!!p.target.closest(".bhq-hero, .bhq-cgrab")&&!p.target.closest("button"),begin:()=>(N.cardStop&&(N.cardStop(),N.cardStop=null),N.cardY),move:p=>{N.cardY=p<0?-_p(-p,120):p,ul(N.cardY)},end:(p,x)=>{if(!p)return;let m=N.cardY;if(m+u_(x)>130||x>900){let g=d.root.offsetHeight+24;N.cardStop=wp(m,g,x,y=>{N.cardY=y,ul(y)},()=>{N.cardStop=null,N.h.onSelectBot&&N.h.onSelectBot(null),setTimeout(()=>{N.mode==="card"&&(N.cardY=0,ul(0))},120)},.3,1)}else N.cardStop=wp(m,0,x,g=>{N.cardY=g,ul(g)},()=>{N.cardStop=null},.4,Math.abs(x)>600?.8:1)}})}typeof ResizeObserver=="function"&&(N.ro3=new ResizeObserver(()=>{Ep(),Ip()}),N.ro3.observe(o),N.ro3.observe(n),f&&N.ro3.observe(f.card.root))}function ul(i){N.panel.card.root.style.transform=i?"translate3d(0,"+i.toFixed(1)+"px,0)":""}function T_(){N.cardStop&&(N.cardStop(),N.cardStop=null),N.cardY=0,N.panel&&ul(0)}function du(i){let t=N.sh;t.y=i,t.root.style.transform="translate3d(0,"+i.toFixed(1)+"px,0)",t.body.style.opacity=gl((t.travel-i)/36,0,1).toFixed(2),Ip()}function dl(i,t,e){let n=N.sh;if(!n||!N.phone||(n.open=!!i,de(n.grab,"aria-expanded",n.open?"true":"false"),de(n.grab,"aria-label",n.open?"Collapse panel":"Expand panel"),Hn(n.root,"is-open",n.open),n.body.inert=!n.open&&!N.land,n.cancel&&(n.cancel(),n.cancel=null),N.land))return;let s=n.open?0:n.travel;if(e||ml.matches||document.hidden){du(s);return}n.cancel=wp(n.y,s,t||0,du,()=>{n.cancel=null},n.open?.4:.34,Math.abs(t||0)>600?.82:1)}function Ep(){let i=N&&N.sh;!i||!N.phone||(i.H=i.root.offsetHeight,i.vis0=i.peek.offsetHeight+i.probe.offsetHeight,i.travel=N.land?0:Math.max(0,i.H-i.vis0),E_("--bhq-peek",i.vis0+"px"),N.land?(i.root.style.transform="",i.body.style.opacity="",i.y=0):!i.busy&&!i.cancel&&du(i.open?0:i.travel))}function Ip(){let i=N&&N.sh;if(!i||!N.phone)return;let t=N.panel&&N.panel.card.root,e;N.land?e=0:N.mode==="card"&&t&&!t.hidden?e=t.offsetHeight:e=Math.max(0,i.H-gl(i.y,-40,i.travel)),E_("--bhq-vis",Math.round(e*10)/10+"px")}function UA(){if(typeof matchMedia!="function")return;let i=matchMedia(LA),t=matchMedia(NA);N.mqs=[i,t],N.mqFn=()=>OA(i.matches,i.matches&&t.matches),i.addEventListener("change",N.mqFn),t.addEventListener("change",N.mqFn),N.mqFn()}function OA(i,t){let e=N.phone,n=N.sh,s=N.dock,r=N.panel;N.phone=i,N.land=i&&t;let o=document.documentElement;if(o.classList.toggle("bhq-phone",i),o.classList.toggle("bhq-land",N.land),i&&!e)r&&n.headSlot.append(r.teamHead),n.body.append(...[s&&s.waiting.root,r&&r.tcard,s&&s.finished.root,s&&s.routines.root,n.feed].filter(Boolean)),n.open=n.start||N.land,n.start=!1,Ep(),dl(n.open,0,!0),N.chipFloor=null;else if(!i&&e){n.cancel&&(n.cancel(),n.cancel=null),n.root.style.transform="",n.body.style.opacity="",n.body.inert=!1,T_(),s&&s.root.append(s.waiting.root,s.finished.root,s.routines.root),r&&r.team.append(r.teamHead,r.tcard),n.feed&&(s&&s.root.parentNode?s.root.parentNode.insertBefore(n.feed,s.root):document.body.append(n.feed));for(let a of Object.keys(fu))document.documentElement.style.removeProperty(a);fu={}}else i&&(N.land&&(n.open=!0),Ep(),dl(n.open,0,!0));fl(),uu(),i&&N.last.state&&C_(N.activeFloorId)}function A_(i,t){if(!N||!i)return;t=t||{};let e={currentFloor:t.currentFloor||null,selectedBot:t.selectedBot||null};N.last={state:i,opts:e},oA(i),N.ready||(N.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.add("bhq-ready")))),Rs("topbar",()=>N.top&&BA(i)),Rs("floors",()=>N.fl&&zA(i,e)),Rs("panel",()=>N.panel&&HA(i,e)),Rs("feed",()=>N.feed&&$A(i)),Rs("dock",()=>N.dock&&P_(i)),Rs("zoom",()=>{N.zoom&&!N.zoom.root.isConnected&&document.body.append(N.zoom.root)}),Rs("fades",uu)}var d_=new Set;function Rs(i,t){try{t()}catch(e){d_.has(i)||(d_.add(i),console.error("[ui] render failed in "+i,e))}}function BA(i){let t=N.top;le(t.clock,mi(Date.now()));let e=xA(i);for(let r of x_){let o=t.chips[r.key],a=r.n(e),l=yp(r.s,a);Io(o.num,a),le(o.label,l),Hn(o.el,"is-zero",a===0),Hn(o.el,"is-alert",!!r.alert&&a>0),r.hideZero&&sn(o.el,a===0);let c=a+" "+l;r.key==="attention"&&e.stuck>0&&(c=e.waiting_user+" "+yp("waiting_user",e.waiting_user)+", "+e.stuck+" stuck"),de(o.el,"title",c)}let n=i.usage||{},s=Number.isFinite(n.total_used_pct)?gl(n.total_used_pct,0,100):null;if(sn(t.usage,s==null),s!=null){let r=s>=95?"error":s>=85?"warn":null;le(t.usageLabel,eA[n.period]||"Limit"),Po(t.meter,"--p",(s/100).toFixed(3)),le(t.pct,Math.round(s)+"%"),de(t.meter,"aria-valuenow",Math.round(s)),de(t.meter,"data-level",r),de(t.usage,"data-level",r);let o="",a=rn(n.resets_at);if(a!=null){let h=a-Ps();o=h>0?"resets in "+lA(h):"resetting now"}le(t.reset,o),sn(t.reset,!o);let l=t.reset.previousElementSibling;l&&sn(l,!o);let c=rn(n.updated_at);de(t.usage,"title",c!=null?"Updated at "+mi(c):null)}sn(t.demo,!i.demo)}function kA(i){let t=[];for(let e of["working","waiting_user","error","stuck","done","idle"]){let n=Number(i&&i[e])||0;n>0&&t.push(n+" "+yp(e,n))}return t.join(", ")}function R_(i,t){let e=i.bots||{};return Array.isArray(t.bots)?t.bots:Object.keys(e).filter(n=>e[n].floor===t.id)}function zA(i,t){let e=N.fl,n=i.bots||{},s=(i.floors||[]).slice().sort((a,l)=>(Number(l.order)||0)-(Number(a.order)||0)),r=new Set,o=s.some(a=>a.id===t.currentFloor)?t.currentFloor:null;N.activeFloorId=o,le(e.count,s.length),s.forEach((a,l)=>{let c=N.floors.get(a.id);c||(c=bA(a.id),N.floors.set(a.id,c)),r.add(a.id);let h=a.order!=null&&Number.isFinite(Number(a.order))?Number(a.order):s.length-l,u=R_(i,a);for(le(c.num,h),le(c.name,a.name||a.id),le(c.count,u.length);c.dotEls.length<u.length;){let p=G("i",{class:"bhq-dot"});c.dotEls.push(p),c.dots.append(p)}for(;c.dotEls.length>u.length;)c.dotEls.pop().remove();u.forEach((p,x)=>de(c.dotEls[x],"data-s",ji(n[p])));let f=null;for(let p of u){let x=ji(n[p]);if(x==="error"){f="error";break}(x==="waiting_user"||x==="stuck")&&(f="waiting_user")}de(c.btn,"data-alert",f);let d=kA(a.counts);de(c.btn,"aria-label","Floor "+h+", "+(a.name||a.id)+": "+u.length+" "+pl(u.length,"bot","bots")+(d?" ("+d+")":"")),de(c.btn,"title",d||null),de(c.btn,"aria-current",a.id===o?"true":null)});for(let[a,l]of N.floors)r.has(a)||(l.btn.remove(),N.floors.delete(a));xl(e.shaft,s.map(a=>N.floors.get(a.id).btn),1),I_(),C_(o)}function C_(i){let t=N.fl;if(!N.phone||!i||N.chipFloor===i)return;let e=N.floors.get(i);if(!e||!e.btn.offsetWidth)return;let n=N.chipFloor==null;N.chipFloor=i;let s=t.fscroll,r=e.btn.getBoundingClientRect(),o=s.getBoundingClientRect();s.scrollTo({left:Math.max(0,s.scrollLeft+(r.left-o.left)-(o.width-r.width)/2),behavior:n||ml.matches?"auto":"smooth"})}function I_(){let i=N&&N.fl;if(!i)return;let t=N.activeFloorId?N.floors.get(N.activeFloorId):null;if(!t||!t.btn.isConnected||!t.btn.offsetHeight){i.carShown&&(i.car.style.opacity="0",i.carShown=!1);return}let e=t.btn.offsetTop,n=t.btn.offsetHeight;(i.carTop!==e||i.carH!==n)&&(i.carTop=e,i.carH=n,i.car.style.transform="translateY("+e+"px)",i.car.style.height=n+"px"),i.carShown||(i.car.style.opacity="1",i.carShown=!0),i.ready||(i.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>i.shaft.classList.add("is-ready"))))}function HA(i,t){let e=N.panel,n=i.bots||{},s=(i.floors||[]).find(u=>u.id===t.currentFloor)||null,r=t.selectedBot?n[t.selectedBot]:null,o=r?"card":"team",a=N.mode,l=N.cardBot,c=e.team.contains(document.activeElement),h=e.card.root.contains(document.activeElement);if(o!==a&&(sn(e.team,o==="card"),sn(e.card.root,o==="team"),N.mode=o,o==="card"&&T_(),N.sh&&(Hn(N.sh.root,"is-away",o==="card"),Ip())),o==="card")N.cardBot!==r.id&&(N.cardBot=r.id,e.card.histSig=null,e.card.fresh=!0,e.card.body.scrollTop=0,a==="card"&&v_(e.card.root,"is-enter")),qA(i,r),a!=="card"&&c&&e.card.name.focus({preventScroll:!0});else if(N.cardBot=null,VA(i,s,t),a==="card"&&h){let u=N.cells.get(l);u&&u.btn.focus({preventScroll:!0})}}function GA(i){let t=Lo(),e=G("b",{class:"bhq-mname"}),n=G("span",{class:"bhq-mstep"}),s=G("span",{class:"bhq-mseen bhq-num"}),r=G("button",{class:"bhq-member",type:"button","data-id":i,role:"listitem"},t.root,G("span",{class:"bhq-mtext"},e,n),s);return r.addEventListener("click",()=>{N.h.onSelectBot&&N.h.onSelectBot(i)}),{btn:r,av:t,name:e,step:n,seen:s}}function VA(i,t,e){let n=N.panel,s=i.bots||{},r=t?R_(i,t):[];r=r.filter(d=>s[d]);let o=!0;N.teamFloor!==(t?t.id:null)&&(N.teamFloor=t?t.id:null,n.list.scrollTop=0,o=!N.teamReady,N.teamReady&&v_(n.list,"is-enter")),N.teamReady=!0,le(n.teamTitle,t?t.name||t.id:"No floor selected");let a=r.length,l=0,c=0,h=0;for(let d of r){let p=ji(s[d]);p==="working"?l++:p==="waiting_user"||p==="stuck"?c++:p==="error"&&h++}le(n.teamSub,t?a+" "+pl(a,"bot","bots"):N.phone?"Pick a floor above":"Pick a floor on the left"),de(n.teamHead,"data-s",l>0?"working":"idle"),Io(n.teamBig,l,o),Io(n.nWait,c,o),Io(n.nErr,h,o),le(n.lErr,h===1?"error":"errors"),Hn(n.rowWait,"is-zero",!c),Hn(n.rowErr,"is-zero",!h),sn(n.teamEmpty,a>0||!t);let u=new Set(r);for(let[d,p]of N.cells)u.has(d)||(p.btn.remove(),N.cells.delete(d));let f=r.map(d=>{let p=N.cells.get(d);p||(p=GA(d),N.cells.set(d,p));let x=s[d],m=ji(x);No(p.av,x,m),le(p.name,x.name||d);let g=m==="idle"?y_(x):"",y=m==="idle"&&x.status==="working";le(p.step,g||(y?Cs(m):x.step||Cs(m))),de(p.step,"data-u",g?"":null);let w=rn(x.last_seen);return le(p.seen,w==null?"\u2013":cA(w)),de(p.seen,"title",w==null?"No status line yet":"Last status line "+Tp(w)+" ("+mi(w)+")"),de(p.btn,"data-s",m),de(p.btn,"aria-label",(x.name||d)+", "+Cs(m)+", "+vp(x)),de(p.btn,"title",(x.name||d)+": "+Cs(m)+(x.step?". "+x.step:"")+" \xB7 "+vp(x)),p.btn});xl(n.list,f,0)}function WA(i){return G("li",{class:"bhq-step-row"},G("time",{class:"bhq-num",text:mi(rn(i.t))}),G("span",{text:i.step||Cs(i.status),title:i.step||""}))}function qA(i,t){let e=N.panel.card,n=ji(t),s=Ps(),r=!e.fresh;de(e.hero,"data-s",n),No(e.av,t,n),le(e.name,t.name||t.id);let o=(i.floors||[]).find(b=>b.id===t.floor),a=o&&(o.name||o.id)||t.group||"",l=Number.isFinite(Number(t.desk))&&t.desk!=null?" \xB7 desk "+Number(t.desk):"";le(e.where,a+l+" \xB7 "+vp(t)),de(e.stDot,"data-s",n);let c=rn(t.since),h=c==null?"":" \xB7 "+(s-c<6e4?"just now":aA(s-c));le(e.stTxt,(g_[n]||Cs(n))+h);let u=n==="idle"?y_(t):"";le(e.now,u||(n==="idle"&&t.status==="working"?"Went quiet after: "+(t.step||"a task"):t.step||"No data on the current step"));let f=typeof t.task=="string"?t.task.trim():"",d=!!f&&!/^tsk-\d+$/i.test(f)&&f!==(t.step||"").trim();sn(e.taskBlock,!d),le(e.task,d?f:"");let p=t.today||{},x=Number(p.events)||0,m=Number(p.tasks_done)||0;Io(e.sSteps.v,x,r),le(e.sSteps.l,pl(x,"step","steps")),Io(e.sTasks.v,m,r),le(e.sTasks.l,pl(m,"task","tasks")),le(e.sHours.v,dA(p.working_min));let g=i.usage&&i.usage.period;le(e.usageLabel,nA[g]||"Usage");let y=Number.isFinite(t.usage_share)?gl(t.usage_share,0,1):null;sn(e.useBlock,y==null),y!=null&&(Po(e.fuel,"--p",(y>0?Math.max(y,.02):0).toFixed(3)),de(e.fuel,"aria-valuenow",Math.round(y*100)),le(e.shareNum,Math.round(y*100)+"%"));let w=(t.history||[]).slice(0,4);w.length>1&&w[0].step===t.step&&(w=w.slice(1)),w=w.slice(0,3);let v=t.id+`
`+w.map(b=>b.t+"|"+b.status+"|"+b.step).join(`
`);if(v!==e.histSig){e.histSig=v,e.hist.textContent="",w.length||e.hist.append(G("li",{class:"bhq-step-empty",text:"No steps yet."}));for(let b of w)e.hist.append(WA(b))}let S=!!t.chat_url;e.cta.disabled===S&&(e.cta.disabled=!S),de(e.cta,"title",S?null:"No chat link yet"),e.fresh=!1}function XA(i,t){let e=t.bots&&t.bots[i.bot],n=i.name||e&&e.name||i.bot||"",s=i.status||"idle";return G("li",{class:"bhq-frow","data-s":s},G("time",{class:"bhq-num",text:mi(rn(i.t)),datetime:i.t||""}),G("i",{class:"bhq-dot","data-s":s,"aria-hidden":"true"}),G("span",{class:"bhq-ftxt"},G("b",{text:n})," "+(i.step||Cs(i.status))))}function YA(i){N.feedOut.add(i),i.classList.add("is-out");let t=()=>{i.remove(),N.feedOut.delete(i)};ml.matches?t():setTimeout(t,420)}function $A(i){let t=N.feed,e=(Array.isArray(i.feed)?i.feed:[]).slice(0,4),n=new Map,s=new Array(e.length);for(let c=e.length-1;c>=0;c--){let h=e[c],u=h.t+"|"+h.bot+"|"+h.status+"|"+h.step,f=n.get(u)||0;n.set(u,f+1),s[c]=f?u+"#"+f:u}let r=new Set(s);for(let[c,h]of N.feedRows)r.has(c)||(N.feedRows.delete(c),YA(h));let o=0;for(let c of s)N.feedRows.has(c)||o++;let a=!N.feedFirst&&o>0&&o<4&&!ml.matches,l=e.map((c,h)=>{let u=N.feedRows.get(s[h]);if(!u){if(u=XA(c,i),a){u.classList.add("is-new");let f=()=>u.classList.remove("is-new");u.addEventListener("animationend",f,{once:!0}),setTimeout(f,700)}N.feedRows.set(s[h],u)}return u});xl(t.list,l.concat([...N.feedOut]),0),sn(t.empty,e.length>0),N.feedFirst=!1}function P_(i){JA(i),QA(i),t2(i),i2(i),fl()}function Pp(i,t,e){return i.bots&&i.bots[t]||{id:t,name:e||t,avatar:t}}var KA=15*6e4;function ZA(i){let t=Lo({orb:!1}),e=G("b",{class:"bhq-ckname"}),n=G("span",{class:"bhq-ckat bhq-num"}),s=G("li",{class:"bhq-ckrow","data-id":i},t.root,e,n);return s.addEventListener("click",()=>{N.h.onSelectBot&&N.h.onSelectBot(i)}),{li:s,av:t,name:e,at:n}}function JA(i){let t=N.dock,e=i.check,n=e&&Array.isArray(e.bots)?e.bots:[];if(sn(t.check.root,!n.length),!n.length){t.checkT=null;return}t.checkT!==e.t&&(t.checkT=e.t,Cp(t.check,!0,!1));let s=rn(e.t)??Ps(),r=Ps()-s>KA,o=n.filter(c=>c.at).length;le(t.check.count,o+"/"+n.length),de(t.check.count,"data-s",o===n.length?"done":r?"error":"waiting_user"),t.check.rows=n.length,Hn(t.check.root,"has-rows",!0);let a=new Set,l=n.map(c=>{let h=c.id||c.name;a.add(h);let u=t.crows.get(h);u||(u=ZA(h),t.crows.set(h,u)),No(u.av,Pp(i,h,c.name),null),le(u.name,c.name||h);let f=rn(c.at);return de(u.li,"data-ok",f!=null?"yes":r?"no":"wait"),le(u.at,f!=null?"\u2713 "+mi(f):r?"no answer":"waiting\u2026"),u.li});for(let[c,h]of t.crows)a.has(c)||(h.li.remove(),t.crows.delete(c));xl(t.cl,l,0),le(t.cnote,o===n.length?"Every bot answered.":r?"Ask the bots that did not answer to re-read their instructions, or run the setup again.":"Started "+mi(s)+". Each bot ticks off when its own status line arrives.")}function jA(i){let t=Lo(),e=G("button",{class:"bhq-wname",type:"button"}),n=G("button",{class:"bhq-wbtn",type:"button",text:"Open chat",hidden:!0}),s=G("b"),r=G("span"),o=G("p",{class:"bhq-wtext"},s,r),a=G("div",{class:"bhq-wrow","data-id":i},t.root,G("div",{class:"bhq-wmain"},G("div",{class:"bhq-wtop"},e,n),o)),l=()=>{N.h.onSelectBot&&N.h.onSelectBot(i)};return e.addEventListener("click",l),a.addEventListener("click",c=>{c.target.closest("button")||l()}),n.addEventListener("click",()=>{let c=N.last.state&&N.last.state.bots&&N.last.state.bots[i];c&&c.chat_url&&Rp(i,c.chat_url)}),{row:a,av:t,name:e,btn:n,st:s,step:r}}function QA(i){let t=N.dock,e=i.bots||{},n=Object.keys(e).filter(a=>{let l=ji(e[a]);return l==="waiting_user"||l==="error"}).sort((a,l)=>(rn(e[l].last_event)||0)-(rn(e[a].last_event)||0)||String(e[a].name).localeCompare(String(e[l].name))),s=n.filter(a=>ji(e[a])==="error").length;le(t.waiting.count,n.length),t.waiting.rows=n.length,Hn(t.waiting.root,"has-rows",n.length>0),de(t.waiting.count,"data-s",s?"error":n.length?"waiting_user":null);let r=new Set(n);for(let[a,l]of t.wrows)r.has(a)||(l.row.remove(),t.wrows.delete(a));let o=n.map(a=>{let l=t.wrows.get(a);l||(l=jA(a),t.wrows.set(a,l));let c=e[a],h=ji(c);return de(l.row,"data-s",h),No(l.av,c,h),le(l.name,c.name||a),le(l.st,g_[h]||Cs(h)),le(l.step,c.step?" \xB7 "+c.step:""),sn(l.btn,!c.chat_url),l.row});xl(t.wlist,o,0),sn(t.wempty,n.length>0)}function t2(i){let t=N.dock,e=Array.isArray(i.finished);if(sn(t.finished.root,!e),!e)return;let n=Ps(),s=i.finished.map(o=>({e:o,t:rn(o&&o.t)})).filter(o=>o.e&&(o.t==null||n-o.t<=864e5)).sort((o,a)=>(a.t||0)-(o.t||0)).slice(0,60);le(t.finished.count,s.length),t.finished.rows=s.length,Hn(t.finished.root,"has-rows",s.length>0),sn(t.fempty,s.length>0);let r=s.map(o=>o.t+"|"+o.e.bot+"|"+o.e.step).join(`
`);r!==t.finSig&&(t.finSig=r,t.tl.textContent="",t.finRefs=s.map(o=>{let a=Pp(i,o.e.bot,o.e.name),l=Lo({orb:!1});No(l,a,null);let c=G("span",{class:"bhq-tl-time bhq-num"}),h=G("li",{class:"bhq-tl-row"},l.root,G("div",{class:"bhq-tl-main"},G("div",{class:"bhq-tl-top"},G("b",{class:"bhq-tl-name",text:o.e.name||a.name||o.e.bot||""}),c),G("div",{class:"bhq-tl-step",text:o.e.step||"done",title:o.e.step||""})));return t.tl.append(h),{time:c,t:o.t}}));for(let o of t.finRefs)le(o.time,o.t==null?"":Tp(o.t))}async function e2(i){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(i),!0}catch{}try{let t=G("textarea",{"aria-hidden":"true",tabindex:"-1",readonly:!0});t.value=i,t.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none",document.body.append(t),t.select();let e=document.execCommand("copy");return t.remove(),!!e}catch{return!1}}async function n2(i,t){let e=N.dock,n="pause routine "+i.routine,s=await e2(n);le(t.noteText,s?"Copied \u2014 paste it in the chat":"Could not copy \u2014 send: "+n);let r=t.key;clearTimeout(e.copied.get(r)),t.li.classList.add("is-copied"),e.copied.set(r,setTimeout(()=>{e.copied.delete(r),t.li.classList.remove("is-copied")},4200));let o=N.last.state&&N.last.state.bots&&N.last.state.bots[i.bot];o&&o.chat_url&&Rp(o.id,o.chat_url)}function i2(i){let t=N.dock,e=Array.isArray(i.routines);if(sn(t.routines.root,!e),!e)return;let n=i.routines.filter(r=>r&&r.routine).slice().sort((r,o)=>(rn(r.next_run)??1/0)-(rn(o.next_run)??1/0));le(t.routines.count,n.length),t.routines.rows=n.length,Hn(t.routines.root,"has-rows",n.length>0),sn(t.rempty,n.length>0);let s=n.map(r=>r.bot+"|"+r.routine+"|"+r.schedule+"|"+r.next_run+"|"+r.name).join(`
`);s!==t.routSig&&(t.routSig=s,t.rl.textContent="",t.routRefs=n.map(r=>{let o=Pp(i,r.bot,r.name),a=r.name||o.name||r.bot||"",l=r.bot+"|"+r.routine,c=Lo({orb:!1});No(c,o,null);let h=G("span",{class:"bhq-rnext bhq-num"}),u=G("span"),f=G("button",{class:"bhq-roff",type:"button",text:"Turn off",title:'Copies "pause routine '+r.routine+'" and opens the chat'}),d=G("li",{class:"bhq-rrow"+(t.copied.has(l)?" is-copied":"")},c.root,G("div",{class:"bhq-rmain"},G("div",{class:"bhq-rtop"},G("b",{class:"bhq-rname",text:r.routine,title:r.routine}),h),G("div",{class:"bhq-rbot"},G("span",{class:"bhq-rmeta",text:a+(r.schedule?" \xB7 "+r.schedule:""),title:a+(r.schedule?" \xB7 "+r.schedule:"")}),G("span",{class:"bhq-rnote",role:"status"},fr(Is.check),u),f))),p={li:d,next:h,noteText:u,key:l,t:rn(r.next_run)};return le(u,"Copied \u2014 paste it in the chat"),f.addEventListener("click",()=>n2(r,p)),t.rl.append(d),p}));for(let r of t.routRefs)le(r.next,r.t==null?"no date":hA(r.t)),de(r.next,"title",r.t==null?null:uA(r.t))}var L_={day:"13:00",evening:"18:50",night:"23:00"};function s2(i){let t=document.querySelector("#topbar .bhq-right");if(!t||t.querySelector(".bhq-qual"))return;let e=document.createElement("div");e.className="bhq-qual bhq-surface",e.setAttribute("role","group"),e.setAttribute("aria-label","Office quality");for(let[n,s]of[["mid","2D"],["high","3D"],["4d","4D"]]){let r=document.createElement("button");r.type="button",r.dataset.v=n,r.textContent=s,n==="4d"&&r.classList.add("on"),r.addEventListener("click",()=>i(n)),e.append(r)}t.prepend(e)}function r2(i){let t=document.querySelector("#topbar .bhq-right");if(!t||t.querySelector(".bhq-theme"))return;let e=document.createElement("button");e.type="button",e.className="bhq-theme bhq-surface",e.addEventListener("click",()=>i());let n=t.querySelector(".bhq-qual");t.insertBefore(e,n?n.nextSibling:t.firstChild),D_(e)}function D_(i){if(!i)return;let t=document.documentElement.dataset.theme==="dark";i.textContent=t?"Light":"Dark",i.title=t?"Switch to light mode":"Switch to dark mode",i.setAttribute("aria-pressed",t?"true":"false"),i.setAttribute("aria-label",i.title)}var N_=class{constructor(t,e={}){this.root=t,this.opts=e,this.kind="4d",this.isTower=!0,this.loaded=!1,this.visible=!0,this.framesShown=0,this.deskOf=new Map,this.plan={desks:Array.from({length:20},(n,s)=>s)},this.pal={dark:!1},this.sessions=[],this.extras=null,this.keyOf=new Map,this.towerFloors=[],this.focusKey=null,this.pickedId=null,this.viewFloorId=typeof e.towerFloor=="string"?e.towerFloor:null,this._lastSel=null,this._readyFired=!1,this.ready=new Promise(n=>{this.markReady=n}),Yx(t,{onReady:()=>{this.loaded=!0,this.canvas=lu(),this._readyFired||(this._readyFired=!0,this.markReady(!0))},onFrame:()=>{this.visible&&(this.framesShown++,this.canvas=this.canvas||lu(),this.opts.onFrame&&this.opts.onFrame(this))},onSelectBot:n=>this.selectBot(n)}),S_({onSelectBot:n=>this.selectBot(n),onSelectFloor:n=>this.setTowerFloor(n),onZoom:n=>Qx(n),onShare:()=>{let n=this.captureShare();if(!n)return;let s=document.createElement("a");s.href=n.toDataURL("image/png"),s.download="office.png",s.click()}}),s2(n=>{this.opts.onQuality&&this.opts.onQuality(n)}),r2(()=>{this.opts.onTheme&&this.opts.onTheme()}),this.canvas=lu(),this.syncLight(),this.setTheme(document.documentElement.dataset.theme==="dark")}selectBot(t){this.pickedId=t||null,this._followPick=!!t,this.update(this.sessions)}update(t){this.sessions=Array.isArray(t)?t:[];let e=globalThis.WallpaperFeed,n=e&&typeof e.towerState=="function"?e.towerState(this.sessions,this.extras||{}):{floors:[],bots:{}};this._state=n,this.towerFloors=(n.floors||[]).map(c=>({id:c.id,name:c.name})),this.keyOf=new Map;let s=n.bots||{};for(let c of this.sessions){let h=c.project||c.title||c.id||c.key,u=e&&e.botId?e.botId(h):String(h||"");s[u]||(u=Object.keys(s).find(f=>s[f].name===h)||u),s[u]&&this.keyOf.set(u,c.key)}let r=n.floors||[],o=this.viewFloorId&&r.some(c=>c.id===this.viewFloorId)?this.viewFloorId:null,a=this.pickedId&&s[this.pickedId]?this.pickedId:null;this.pickedId=a,a&&s[a].floor&&s[a].floor!==o&&this._followPick&&(o=s[a].floor),this._followPick=!1,o||(o=r.slice().sort((c,h)=>(h.bots?.length||0)-(c.bots?.length||0))[0]?.id||null),this.viewFloorId=o,this.deskOf=new Map;for(let[c,h]of this.keyOf){let u=s[c];u&&u.floor===o&&u.effective_status==="working"&&this.deskOf.set(h,(u.desk||1)-1)}let l={currentFloor:o,selectedBot:a};$x(n,l);try{A_(n,l)}catch(c){console.error(c)}a&&a!==this._lastSel&&(this._lastSel=a,t_(a)),a||(this._lastSel=null),this.opts.onFloors&&this.opts.onFloors(this.towerFloors)}_selectedId(t){if(!this.focusKey)return null;for(let[e,n]of this.keyOf)if(n===this.focusKey&&(!t||t[e]))return e;return null}setTowerFloor(t){this.viewFloorId=t,this._lastFocus=this.focusKey,this.update(this.sessions)}setVisible(t){this.visible=!!t,Jx(this.visible)}setTheme(t){try{Zx(!!t)}catch(e){console.error(e)}D_(document.querySelector(".bhq-theme"))}syncLight(){let t=globalThis.OFFICE_LIGHT||"now",e=Object.prototype.hasOwnProperty.call(L_,t)?L_[t]:null;globalThis.bothq&&typeof globalThis.bothq.setTime=="function"&&globalThis.bothq.setTime(e)}captureShare(){try{return s_()}catch(t){return console.error(t),null}}destroy(){try{Ap()}catch(t){console.error(t)}try{jx()}catch(t){console.error(t)}this.canvas=null}};export{N_ as Office4D};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

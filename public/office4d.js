var d0=0,Ld=1,f0=2;var mr=1,p0=2,vo=3,Jn=0,un=1,Qt=2,jn=0,bo=1,Nd=2,Dd=3,ja=4,m0=5;var gr=100,g0=101,x0=102,_0=103,y0=104,v0=200,b0=201,M0=202,S0=203,Fd=204,Ud=205,E0=206,w0=207,T0=208,A0=209,R0=210,C0=211,I0=212,P0=213,L0=214,bc=0,Mc=1,Sc=2,Qr=3,Ec=4,wc=5,Tc=6,Ac=7,Qc=0,N0=1,D0=2,mi=0,Qa=1,el=2,tl=3,xr=4,nl=5,il=6,sl=7,md="attached",F0="detached",Od=300,Is=301,_r=302,eh=303,th=304,rl=306,Kn=1e3,Yn=1001,eo=1002,Yt=1003,nh=1004;var yr=1005;var zt=1006,Mo=1007;var kn=1008;var Pn=1009,Bd=1010,kd=1011,So=1012,ih=1013,gi=1014,zn=1015,en=1016,sh=1017,rh=1018,Eo=1020,zd=35902,Hd=35899,Vd=1021,Gd=1022,Hn=1023,Ci=1026,Ps=1027,oh=1028,ah=1029,Ls=1030,lh=1031;var ch=1033,ol=33776,al=33777,ll=33778,cl=33779,hh=35840,uh=35841,dh=35842,fh=35843,ph=36196,mh=37492,gh=37496,xh=37488,_h=37489,hl=37490,yh=37491,vh=37808,bh=37809,Mh=37810,Sh=37811,Eh=37812,wh=37813,Th=37814,Ah=37815,Rh=37816,Ch=37817,Ih=37818,Ph=37819,Lh=37820,Nh=37821,Dh=36492,Fh=36494,Uh=36495,Oh=36283,Bh=36284,ul=36285,kh=36286;var nr=2300,ir=2301,_c=2302,gd=2303,xd=2400,_d=2401,yd=2402,U0=2500;var Wd=0,dl=1,wo=2,O0=3200;var fl=0,B0=1,ss="",ot="srgb",hn="srgb-linear",xa="linear",vt="srgb";var yc=7680;var k0=519,z0=512,H0=513,V0=514,zh=515,G0=516,W0=517,Hh=518,q0=519,qd=35044;var Xd="300 es",fi=2e3,to=2001;function ky(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function X0(){let i=no("canvas");return i.style.display="block",i}var ym={},io=null;function _a(...i){let e="THREE."+i.shift();io?io("log",e,...i):console.log(e,...i)}function Y0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=Y0(i);let e="THREE."+i.shift();if(io)io("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function $e(...i){i=Y0(i);let e="THREE."+i.shift();if(io)io("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function tr(...i){let e=i.join(" ");e in ym||(ym[e]=!0,Ne(...i))}function $0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var K0={[bc]:Mc,[Sc]:Tc,[Ec]:Ac,[Qr]:wc,[Mc]:bc,[Tc]:Sc,[Ac]:Ec,[wc]:Qr},Ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vm=1234567,fa=Math.PI/180,sr=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Yd(i,e){return(i%e+e)%e}function Hy(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Vy(i,e,t){return i!==e?(t-i)/(e-i):0}function pa(i,e,t){return(1-t)*i+t*e}function Gy(i,e,t,n){return pa(i,e,1-Math.exp(-t*n))}function Wy(i,e=1){return e-Math.abs(Yd(i,e*2)-e)}function qy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Yy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function $y(i,e){return i+Math.random()*(e-i)}function Ky(i){return i*(.5-Math.random())}function Zy(i){i!==void 0&&(vm=i);let e=vm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jy(i){return i*fa}function jy(i){return i*sr}function Qy(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ev(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nv(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*h,a*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var To={DEG2RAD:fa,RAD2DEG:sr,generateUUID:$n,clamp:ct,euclideanModulo:Yd,mapLinear:Hy,inverseLerp:Vy,lerp:pa,damp:Gy,pingpong:Wy,smoothstep:qy,smootherstep:Xy,randInt:Yy,randFloat:$y,randFloatSpread:Ky,seededRandom:Zy,degToRad:Jy,radToDeg:jy,isPowerOfTwo:Qy,ceilPowerOfTwo:ev,floorPowerOfTwo:tv,setQuaternionFromProperEuler:nv,normalize:Ct,denormalize:di},Qd=class Qd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Qd.prototype.isVector2=!0;var Q=Qd,xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),E=Math.sin(_);g=Math.sin(g*_)/E,a=Math.sin(a*_)/E,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-a*f,e[t+2]=c*p+h*f+a*d-l*u,e[t+3]=h*p-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ef=class ef{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ef.prototype.isVector3=!0;var I=ef,Hu=new I,bm=new xn,tf=class tf{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],E=s[4],v=s[7],S=s[2],M=s[5],A=s[8];return r[0]=o*x+a*_+l*S,r[3]=o*m+a*E+l*M,r[6]=o*g+a*v+l*A,r[1]=c*x+h*_+u*S,r[4]=c*m+h*E+u*M,r[7]=c*g+h*v+u*A,r[2]=d*x+f*_+p*S,r[5]=d*m+f*E+p*M,r[8]=d*g+f*v+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=t*u+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return tr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vu.makeScale(e,t)),this}rotate(e){return tr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vu.makeRotation(-e)),this}translate(e,t){return tr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};tf.prototype.isMatrix3=!0;var et=tf,Vu=new et,Mm=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iv(){let i={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=jr(s.r),s.g=jr(s.g),s.b=jr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?xa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return tr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return tr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hn]:{primaries:e,whitePoint:n,transfer:xa,toXYZ:Mm,fromXYZ:Sm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ot},outputColorSpaceConfig:{drawingBufferColorSpace:ot}},[ot]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Mm,fromXYZ:Sm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ot}}}),i}var rt=iv();function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function jr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Dr,Rc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=no("canvas")),Dr.width=e.width,Dr.height=e.height;let s=Dr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sv=0,so=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gu(s[o].image)):r.push(Gu(s[o]))}else r=Gu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var rv=0,Wu=new I,tn=class i extends Ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=zt,o=kn,a=Hn,l=Pn,c=i.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=$n(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wu).x}get height(){return this.source.getSize(Wu).y}get depth(){return this.source.getSize(Wu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Od;tn.DEFAULT_ANISOTROPY=1;var nf=class nf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,v=(f+1)/2,S=(g+1)/2,M=(h+d)/4,A=(u+x)/4,y=(p+m)/4;return E>v&&E>S?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=M/n,r=A/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=y/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};nf.prototype.isVector4=!0;var _t=nf,Cc=class extends Ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new so(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends Cc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ya=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var jc=class jc{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Fr.setFromMatrixColumn(e,0).length(),r=1/Fr.setFromMatrixColumn(e,1).length(),o=1/Fr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d+x*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=p*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-x*u}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ov,e,av)}lookAt(e,t,n){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),_s.crossVectors(n,Fn),_s.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),_s.crossVectors(n,Fn)),_s.normalize(),Vl.crossVectors(Fn,_s),s[0]=_s.x,s[4]=Vl.x,s[8]=Fn.x,s[1]=_s.y,s[5]=Vl.y,s[9]=Fn.y,s[2]=_s.z,s[6]=Vl.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],E=n[7],v=n[11],S=n[15],M=s[0],A=s[4],y=s[8],w=s[12],R=s[1],P=s[5],N=s[9],k=s[13],D=s[2],B=s[6],X=s[10],$=s[14],re=s[3],Z=s[7],te=s[11],z=s[15];return r[0]=o*M+a*R+l*D+c*re,r[4]=o*A+a*P+l*B+c*Z,r[8]=o*y+a*N+l*X+c*te,r[12]=o*w+a*k+l*$+c*z,r[1]=h*M+u*R+d*D+f*re,r[5]=h*A+u*P+d*B+f*Z,r[9]=h*y+u*N+d*X+f*te,r[13]=h*w+u*k+d*$+f*z,r[2]=p*M+x*R+m*D+g*re,r[6]=p*A+x*P+m*B+g*Z,r[10]=p*y+x*N+m*X+g*te,r[14]=p*w+x*k+m*$+g*z,r[3]=_*M+E*R+v*D+S*re,r[7]=_*A+E*P+v*B+S*Z,r[11]=_*y+E*N+v*X+S*te,r[15]=_*w+E*k+v*$+S*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],x=e[7],m=e[11],g=e[15],_=l*f-c*d,E=a*f-c*u,v=a*d-l*u,S=o*f-c*h,M=o*d-l*h,A=o*u-a*h;return t*(x*_-m*E+g*v)-n*(p*_-m*S+g*M)+s*(p*E-x*S+g*A)-r*(p*v-x*M+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],x=e[13],m=e[14],g=e[15],_=t*a-n*o,E=t*l-s*o,v=t*c-r*o,S=n*l-s*a,M=n*c-r*a,A=s*c-r*l,y=h*x-u*p,w=h*m-d*p,R=h*g-f*p,P=u*m-d*x,N=u*g-f*x,k=d*g-f*m,D=_*k-E*N+v*P+S*R-M*w+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return e[0]=(a*k-l*N+c*P)*B,e[1]=(s*N-n*k-r*P)*B,e[2]=(x*A-m*M+g*S)*B,e[3]=(d*M-u*A-f*S)*B,e[4]=(l*R-o*k-c*w)*B,e[5]=(t*k-s*R+r*w)*B,e[6]=(m*v-p*A-g*E)*B,e[7]=(h*A-d*v+f*E)*B,e[8]=(o*N-a*R+c*y)*B,e[9]=(n*R-t*N-r*y)*B,e[10]=(p*M-x*v+g*_)*B,e[11]=(u*v-h*M-f*_)*B,e[12]=(a*w-o*P-l*y)*B,e[13]=(t*P-n*w+s*y)*B,e[14]=(x*E-p*S-m*_)*B,e[15]=(h*S-u*E+d*_)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,_=l*c,E=l*h,v=l*u,S=n.x,M=n.y,A=n.z;return s[0]=(1-(x+g))*S,s[1]=(f+v)*S,s[2]=(p-E)*S,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(d+g))*M,s[6]=(m+_)*M,s[7]=0,s[8]=(p+E)*A,s[9]=(m-_)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Fr.set(s[0],s[1],s[2]).length(),a=Fr.set(s[4],s[5],s[6]).length(),l=Fr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ci.copy(this);let c=1/o,h=1/a,u=1/l;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=fi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===fi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===to)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=fi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===fi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===to)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};jc.prototype.isMatrix4=!0;var Ke=jc,Fr=new I,ci=new Ke,ov=new I(0,0,0),av=new I(1,1,1),_s=new I,Vl=new I,Fn=new I,Em=new Ke,wm=new xn,Pi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var ro=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},lv=0,Tm=new I,Ur=new xn,Wi=new Ke,Gl=new I,ta=new I,cv=new I,hv=new xn,Am=new I(1,0,0),Rm=new I(0,1,0),Cm=new I(0,0,1),Im={type:"added"},uv={type:"removed"},Or={type:"childadded",child:null},qu={type:"childremoved",child:null},bt=class i extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lv++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Pi,n=new xn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new et}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,t){return Ur.setFromAxisAngle(e,t),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gl.copy(e):Gl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(ta,Gl,this.up):Wi.lookAt(Gl,ta,this.up),this.quaternion.setFromRotationMatrix(Wi),s&&(Wi.extractRotation(s.matrixWorld),Ur.setFromRotationMatrix(Wi),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),Or.child=e,this.dispatchEvent(Or),Or.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uv),qu.child=e,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var it=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},dv={type:"move"},oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(dv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function Xu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=rt.workingColorSpace){if(e=Yd(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Xu(o,r,e+1/3),this.g=Xu(o,r,e),this.b=Xu(o,r,e-1/3)}return rt.colorSpaceToWorking(this,s),this}setStyle(e,t=ot){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ot){let n=Z0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return rt.workingToColorSpace(gn.copy(this),e),Math.round(ct(gn.r*255,0,255))*65536+Math.round(ct(gn.g*255,0,255))*256+Math.round(ct(gn.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.workingToColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=ot){rt.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(Wl);let n=pa(ys.h,Wl.h,t),s=pa(ys.s,Wl.s,t),r=pa(ys.l,Wl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new fe;fe.NAMES=Z0;var rr=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},hi=new I,qi=new I,Yu=new I,Xi=new I,Br=new I,kr=new I,Pm=new I,$u=new I,Ku=new I,Zu=new I,Ju=new _t,ju=new _t,Qu=new _t,Zi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),hi.subVectors(e,t),s.cross(hi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){hi.subVectors(s,t),qi.subVectors(n,t),Yu.subVectors(e,t);let o=hi.dot(hi),a=hi.dot(qi),l=hi.dot(Yu),c=qi.dot(qi),h=qi.dot(Yu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xi.x),l.addScaledVector(o,Xi.y),l.addScaledVector(a,Xi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ju.setScalar(0),ju.setScalar(0),Qu.setScalar(0),Ju.fromBufferAttribute(e,t),ju.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ju,r.x),o.addScaledVector(ju,r.y),o.addScaledVector(Qu,r.z),o}static isFrontFacing(e,t,n,s){return hi.subVectors(n,t),qi.subVectors(e,t),hi.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),hi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Br.subVectors(s,n),kr.subVectors(r,n),$u.subVectors(e,n);let l=Br.dot($u),c=kr.dot($u);if(l<=0&&c<=0)return t.copy(n);Ku.subVectors(e,s);let h=Br.dot(Ku),u=kr.dot(Ku);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Br,o);Zu.subVectors(e,r);let f=Br.dot(Zu),p=kr.dot(Zu);if(p>=0&&f<=p)return t.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(kr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Pm.subVectors(r,s),a=(u-h)/(u-h+(f-p)),t.copy(s).addScaledVector(Pm,a);let g=1/(m+x+d);return o=x*g,a=d*g,t.copy(n).addScaledVector(Br,o).addScaledVector(kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ui):ui.fromBufferAttribute(r,o),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ql.copy(n.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Xl.subVectors(this.max,na),zr.subVectors(e.a,na),Hr.subVectors(e.b,na),Vr.subVectors(e.c,na),vs.subVectors(Hr,zr),bs.subVectors(Vr,Hr),Js.subVectors(zr,Vr);let t=[0,-vs.z,vs.y,0,-bs.z,bs.y,0,-Js.z,Js.y,vs.z,0,-vs.x,bs.z,0,-bs.x,Js.z,0,-Js.x,-vs.y,vs.x,0,-bs.y,bs.x,0,-Js.y,Js.x,0];return!ed(t,zr,Hr,Vr,Xl)||(t=[1,0,0,0,1,0,0,0,1],!ed(t,zr,Hr,Vr,Xl))?!1:(Yl.crossVectors(vs,bs),t=[Yl.x,Yl.y,Yl.z],ed(t,zr,Hr,Vr,Xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new I,new I,new I,new I,new I,new I,new I,new I],ui=new I,ql=new $t,zr=new I,Hr=new I,Vr=new I,vs=new I,bs=new I,Js=new I,na=new I,Xl=new I,Yl=new I,js=new I;function ed(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){js.fromArray(i,r);let a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),l=e.dot(js),c=t.dot(js),h=n.dot(js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jt=new I,$l=new Q,fv=0,kt=class extends Ii{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qd,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var va=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ba=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},pv=new $t,ia=new I,td=new I,Cn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ia,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(td)),this.expandByPoint(ia.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},mv=0,Xn=new Ke,nd=new bt,Gr=new I,Un=new $t,sa=new $t,an=new I,Mt=class i extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ky(e)?ba:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Un.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Un.min,sa.min),Un.expandByPoint(an),an.addVectors(Un.max,sa.max),Un.expandByPoint(an)):(Un.expandByPoint(sa.min),Un.expandByPoint(sa.max))}Un.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(Gr.fromBufferAttribute(e,c),an.add(Gr)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new kt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new I,l[y]=new I;let c=new I,h=new I,u=new I,d=new Q,f=new Q,p=new Q,x=new I,m=new I;function g(y,w,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,R),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(P),a[y].add(x),a[w].add(x),a[R].add(x),l[y].add(m),l[w].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let y=0,w=_.length;y<w;++y){let R=_[y],P=R.start,N=R.count;for(let k=P,D=P+N;k<D;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new I,v=new I,S=new I,M=new I;function A(y){S.fromBufferAttribute(s,y),M.copy(S);let w=a[y];E.copy(w),E.sub(S.multiplyScalar(S.dot(w))).normalize(),v.crossVectors(M,w);let P=v.dot(l[y])<0?-1:1;o.setXYZW(y,E.x,E.y,E.z,P)}for(let y=0,w=_.length;y<w;++y){let R=_[y],P=R.start,N=R.count;for(let k=P,D=P+N;k<D;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new kt(d,h,u)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=qd,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},En=new I,Es=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=di(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=di(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=di(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=di(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},id=new I,gv=new I,xv=new et,On=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=id.subVectors(n,t).cross(gv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(id),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xv.getNormalMatrix(e),s=this.coplanarPoint(id).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},_v=0,_n=class extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=bo,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Ud,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yc,this.stencilZFail=yc,this.stencilZPass=yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new On().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Q().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ao=class extends _n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Wr,ra=new I,qr=new I,Xr=new I,Yr=new Q,oa=new Q,J0=new Ke,Kl=new I,aa=new I,Zl=new I,Lm=new Q,sd=new Q,Nm=new Q,Ma=class extends bt{constructor(e=new ao){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new or(t,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new Es(n,3,0,!1)),Wr.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),J0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Xr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Jl(Kl.set(-.5,-.5,0),Xr,o,qr,s,r),Jl(aa.set(.5,-.5,0),Xr,o,qr,s,r),Jl(Zl.set(.5,.5,0),Xr,o,qr,s,r),Lm.set(0,0),sd.set(1,0),Nm.set(1,1);let a=e.ray.intersectTriangle(Kl,aa,Zl,!1,ra);if(a===null&&(Jl(aa.set(-.5,.5,0),Xr,o,qr,s,r),sd.set(0,1),a=e.ray.intersectTriangle(Kl,Zl,aa,!1,ra),a===null))return;let l=e.ray.origin.distanceTo(ra);l<e.near||l>e.far||t.push({distance:l,point:ra.clone(),uv:Zi.getInterpolation(ra,Kl,aa,Zl,Lm,sd,Nm,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jl(i,e,t,n,s,r){Yr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(oa.x=r*Yr.x-s*Yr.y,oa.y=s*Yr.x+r*Yr.y):oa.copy(Yr),i.copy(e),i.x+=oa.x,i.y+=oa.y,i.applyMatrix4(J0)}var $i=new I,rd=new I,jl=new I,Ql=new I,ws=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){rd.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Ql.copy(this.origin).sub(rd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(jl),a=Ql.dot(this.direction),l=-Ql.dot(jl),c=Ql.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(rd).addScaledVector(jl,d),f}intersectSphere(e,t){if(e.radius<0)return null;$i.subVectors(e.center,this.origin);let n=$i.dot(this.direction),s=$i.dot($i)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,_=n.y-o.y,E=n.z-o.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(h),A,y,w,R,P,N,k,D,B,X,$,re;if(v>=S&&v>=M?(w=l,N=u,B=p,re=g,l>=0?(A=c,y=h,R=d,P=f,k=x,D=m,X=_,$=E):(A=h,y=c,R=f,P=d,k=m,D=x,X=E,$=_)):S>=M?(w=c,N=d,B=x,re=_,c>=0?(A=h,y=l,R=f,P=u,k=m,D=p,X=E,$=g):(A=l,y=h,R=u,P=f,k=p,D=m,X=g,$=E)):(w=h,N=f,B=m,re=E,h>=0?(A=l,y=c,R=u,P=d,k=p,D=x,X=g,$=_):(A=c,y=l,R=d,P=u,k=x,D=p,X=_,$=g)),w===0)return null;let Z=A/w,te=y/w,z=1/w,oe=R-Z*N,le=P-te*N,Oe=k-Z*B,Be=D-te*B,Ze=X-Z*re,K=$-te*re,ee=Ze*Be-K*Oe,me=oe*K-le*Ze,Ue=Oe*le-Be*oe;if(s){if(ee<0||me<0||Ue<0)return null}else if((ee<0||me<0||Ue<0)&&(ee>0||me>0||Ue>0))return null;let xe=ee+me+Ue;if(xe===0)return null;let qe=z*(ee*N+me*B+Ue*re);return(xe>0?qe<0:qe>0)?null:this.at(qe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dm=new Ke,Qs=new ws,ec=new Cn,Fm=new I,tc=new I,nc=new I,ic=new I,od=new I,sc=new I,Um=new I,rc=new I,Re=class extends bt{constructor(e=new Mt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){sc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(od.fromBufferAttribute(u,e),o?sc.addScaledVector(od,h):sc.addScaledVector(od.sub(t),h))}t.add(sc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ec.copy(n.boundingSphere),ec.applyMatrix4(r),Qs.copy(e.ray).recast(e.near),!(ec.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(ec,Fm)===null||Qs.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Dm.copy(r).invert(),Qs.copy(e.ray).applyMatrix4(Dm),!(n.boundingBox!==null&&Qs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=E;v<S;v+=3){let M=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);s=oc(this,g,e,n,c,h,u,M,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=oc(this,o,e,n,c,h,u,_,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],_=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=E;v<S;v+=3){let M=v,A=v+1,y=v+2;s=oc(this,g,e,n,c,h,u,M,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let _=m,E=m+1,v=m+2;s=oc(this,o,e,n,c,h,u,_,E,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function yv(i,e,t,n,s,r,o,a){let l;if(e.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;rc.copy(a),rc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rc);return c<t.near||c>t.far?null:{distance:c,point:rc.clone(),object:i}}function oc(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,tc),i.getVertexPosition(l,nc),i.getVertexPosition(c,ic);let h=yv(i,e,t,n,tc,nc,ic,Um);if(h){let u=new I;Zi.getBarycoord(Um,tc,nc,ic,u),s&&(h.uv=Zi.getInterpolatedAttribute(s,a,l,c,u,new Q)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=Zi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Zi.getNormal(tc,nc,ic,d.normal),h.face=d,h.barycoord=u}return h}var la=new _t,Om=new _t,Bm=new _t,vv=new _t,km=new Ke,ac=new I,ad=new Cn,zm=new Ke,ld=new ws,Sa=class extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=md,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $t),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ac),this.boundingBox.expandByPoint(ac)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ac),this.boundingSphere.expandByPoint(ac)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ad.copy(this.boundingSphere),ad.applyMatrix4(s),e.ray.intersectsSphere(ad)!==!1&&(zm.copy(s).invert(),ld.copy(e.ray).applyMatrix4(zm),!(this.boundingBox!==null&&ld.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ld)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===md?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===F0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Om.fromBufferAttribute(s.attributes.skinIndex,e),Bm.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(la.copy(t),t.set(0,0,0,0)):(la.set(...t,1),t.set(0,0,0)),la.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Bm.getComponent(r);if(o!==0){let a=Om.getComponent(r);km.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(vv.copy(la).applyMatrix4(km),o)}}return t.isVector4&&(t.w=la.w),t.applyMatrix4(this.bindMatrixInverse)}},lo=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},co=class extends tn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Yt,h=Yt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hm=new Ke,bv=new Ke,Ea=class i{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:bv;Hm.multiplyMatrices(a,t[r]),Hm.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new co(t,e,e,Hn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Ne("Skeleton: No bone found with UUID:",r),o=new lo),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},ji=class extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$r=new Ke,Vm=new Ke,lc=[],Gm=new $t,Mv=new Ke,ca=new Re,ha=new Cn,ar=class extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Mv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$r),Gm.copy(e.boundingBox).applyMatrix4($r),this.boundingBox.union(Gm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$r),ha.copy(e.boundingSphere).applyMatrix4($r),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$r),Vm.multiplyMatrices(n,$r),ca.matrixWorld=Vm,ca.raycast(e,lc);for(let o=0,a=lc.length;o<a;o++){let l=lc[o];l.instanceId=r,l.object=this,t.push(l)}lc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(s*this.count),s,this.count,oh,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},er=new Cn,Sv=new Q(.5,.5),cc=new I,ho=class{constructor(e=new On,t=new On,n=new On,s=new On,r=new On,o=new On){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],E=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,f-h,g-p,S-_).normalize(),s[1].setComponents(c+o,f+h,g+p,S+_).normalize(),s[2].setComponents(c+a,f+u,g+x,S+E).normalize(),s[3].setComponents(c-a,f-u,g-x,S-E).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,g-m,S-v).normalize();else if(s[4].setComponents(c-l,f-d,g-m,S-v).normalize(),t===fi)s[5].setComponents(c+l,f+d,g+m,S+v).normalize();else if(t===to)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);let t=Sv.distanceTo(e.center);return er.radius=.7071067811865476+t,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(cc.x=s.normal.x>0?e.max.x:e.min.x,cc.y=s.normal.y>0?e.max.y:e.min.y,cc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var uo=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Pc=new I,Lc=new I,Wm=new Ke,ua=new ws,hc=new Cn,cd=new I,qm=new I,lr=class extends bt{constructor(e=new Mt,t=new uo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pc.fromBufferAttribute(t,s-1),Lc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pc.distanceTo(Lc);e.setAttribute("lineDistance",new Qe(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(s),hc.radius+=r,e.ray.intersectsSphere(hc)===!1)return;Wm.copy(s).invert(),ua.copy(e.ray).applyMatrix4(Wm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),E=uc(this,e,ua,l,g,_,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=uc(this,e,ua,l,x,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let x=f,m=p-1;x<m;x+=c){let g=uc(this,e,ua,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=uc(this,e,ua,l,p-1,f,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function uc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Pc.fromBufferAttribute(a,s),Lc.fromBufferAttribute(a,r),t.distanceSqToSegment(Pc,Lc,cd,qm)>n)return;cd.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(cd);if(!(c<e.near||c>e.far))return{distance:c,point:qm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Xm=new I,Ym=new I,wa=class extends lr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Xm.fromBufferAttribute(t,s),Ym.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xm.distanceTo(Ym);e.setAttribute("lineDistance",new Qe(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends lr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fo=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$m=new Ke,vd=new ws,dc=new Cn,fc=new I,Aa=class extends bt{constructor(e=new Mt,t=new fo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dc.copy(n.boundingSphere),dc.applyMatrix4(s),dc.radius+=r,e.ray.intersectsSphere(dc)===!1)return;$m.copy(s).invert(),vd.copy(e.ray).applyMatrix4($m);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,x=f;p<x;p++){let m=c.getX(p);fc.fromBufferAttribute(u,m),Km(fc,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let p=d,x=f;p<x;p++)fc.fromBufferAttribute(u,p),Km(fc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Km(i,e,t,n,s,r,o){let a=vd.distanceSqToPoint(i);if(a<t){let l=new I;vd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Ra=class extends tn{constructor(e=[],t=Is,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pi=class extends tn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ts=class extends tn{constructor(e,t,n=gi,s,r,o,a=Yt,l=Yt,c,h=Ci,u=1){if(h!==Ci&&h!==Ps)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Nc=class extends Ts{constructor(e,t=gi,n=Is,s,r,o=Yt,a=Yt,l,c=Ci){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ca=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ht=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function p(x,m,g,_,E,v,S,M,A,y,w){let R=v/A,P=S/y,N=v/2,k=S/2,D=M/2,B=A+1,X=y+1,$=0,re=0,Z=new I;for(let te=0;te<X;te++){let z=te*P-k;for(let oe=0;oe<B;oe++){let le=oe*R-N;Z[x]=le*_,Z[m]=z*E,Z[g]=D,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=M>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(oe/A),u.push(1-te/y),$+=1}}for(let te=0;te<y;te++)for(let z=0;z<A;z++){let oe=d+z+B*te,le=d+z+B*(te+1),Oe=d+(z+1)+B*(te+1),Be=d+(z+1)+B*te;l.push(oe,le,Be),l.push(le,Oe,Be),re+=6}a.addGroup(f,re,w),f+=re,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ia=class i extends Mt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+r,x=s+1,m=new I,g=new I;for(let _=0;_<=p;_++){let E=0,v=0,S=0,M=0;if(_<=n){let w=_/n,R=w*Math.PI/2;v=-h-e*Math.cos(R),S=e*Math.sin(R),M=-e*Math.cos(R),E=w*u}else if(_<=n+r){let w=(_-n)/r;v=-h+w*t,S=e,M=0,E=u+w*d}else{let w=(_-n-r)/n,R=w*Math.PI/2;v=h+e*Math.sin(R),S=e*Math.cos(R),M=e*Math.sin(R),E=u+d+w*u}let A=Math.max(0,Math.min(1,E/f)),y=0;_===0?y=.5/s:_===p&&(y=-.5/s);for(let w=0;w<=s;w++){let R=w/s,P=R*Math.PI*2,N=Math.sin(P),k=Math.cos(P);g.x=-S*k,g.y=v,g.z=S*N,a.push(g.x,g.y,g.z),m.set(-S*k,M,S*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+y,A)}if(_>0){let w=(_-1)*x;for(let R=0;R<s;R++){let P=w+R,N=w+R+1,k=_*x+R,D=_*x+R+1;o.push(P,N,k),o.push(N,D,k)}}}this.setIndex(o),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Pa=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(a,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wn=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,x=[],m=n/2,g=0;_(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Qe(u,3)),this.setAttribute("normal",new Qe(d,3)),this.setAttribute("uv",new Qe(f,2));function _(){let v=new I,S=new I,M=0,A=(t-e)/n;for(let y=0;y<=r;y++){let w=[],R=y/r,P=R*(t-e)+e;for(let N=0;N<=s;N++){let k=N/s,D=k*l+a,B=Math.sin(D),X=Math.cos(D);S.x=P*B,S.y=-R*n+m,S.z=P*X,u.push(S.x,S.y,S.z),v.set(B,A,X).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-R),w.push(p++)}x.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){let R=x[w][y],P=x[w+1][y],N=x[w+1][y+1],k=x[w][y+1];(e>0||w!==0)&&(h.push(R,P,k),M+=3),(t>0||w!==r-1)&&(h.push(P,N,k),M+=3)}c.addGroup(g,M,0),g+=M}function E(v){let S=p,M=new Q,A=new I,y=0,w=v===!0?e:t,R=v===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*R,0),d.push(0,R,0),f.push(.5,.5),p++;let P=p;for(let N=0;N<=s;N++){let D=N/s*l+a,B=Math.cos(D),X=Math.sin(D);A.x=w*X,A.y=m*R,A.z=w*B,u.push(A.x,A.y,A.z),d.push(0,R,0),M.x=B*.5+.5,M.y=X*.5*R+.5,f.push(M.x,M.y),p++}for(let N=0;N<s;N++){let k=S+N,D=P+N;v===!0?h.push(D,D+1,k):h.push(D+1,D,k),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Dc=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let E=new I,v=new I,S=new I;for(let M=0;M<t.length;M+=3)f(t[M+0],E),f(t[M+1],v),f(t[M+2],S),l(E,v,S,_)}function l(_,E,v,S){let M=S+1,A=[];for(let y=0;y<=M;y++){A[y]=[];let w=_.clone().lerp(v,y/M),R=E.clone().lerp(v,y/M),P=M-y;for(let N=0;N<=P;N++)N===0&&y===M?A[y][N]=w:A[y][N]=w.clone().lerp(R,N/P)}for(let y=0;y<M;y++)for(let w=0;w<2*(M-y)-1;w++){let R=Math.floor(w/2);w%2===0?(d(A[y][R+1]),d(A[y+1][R]),d(A[y][R])):(d(A[y][R+1]),d(A[y+1][R+1]),d(A[y+1][R]))}}function c(_){let E=new I;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(_),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let _=new I;for(let E=0;E<r.length;E+=3){_.x=r[E+0],_.y=r[E+1],_.z=r[E+2];let v=m(_)/2/Math.PI+.5,S=g(_)/Math.PI+.5;o.push(v,1-S)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let E=o[_+0],v=o[_+2],S=o[_+4],M=Math.max(E,v,S),A=Math.min(E,v,S);M>.9&&A<.1&&(E<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,E){let v=_*3;E.x=e[v+0],E.y=e[v+1],E.z=e[v+2]}function p(){let _=new I,E=new I,v=new I,S=new I,M=new Q,A=new Q,y=new Q;for(let w=0,R=0;w<r.length;w+=9,R+=6){_.set(r[w+0],r[w+1],r[w+2]),E.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),M.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),S.copy(_).add(E).add(v).divideScalar(3);let P=m(S);x(M,R+0,_,P),x(A,R+2,E,P),x(y,R+4,v,P)}}function x(_,E,v,S){S<0&&_.x===1&&(o[E]=_.x-1),v.x===0&&v.z===0&&(o[E]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Q:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new Ke;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},po=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Q){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fc=class extends po{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $d(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Zm=new I,Jm=new I,hd=new $d,ud=new $d,dd=new $d,Uc=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Jm.subVectors(s[0],s[1]).add(s[0]),c=Jm);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Zm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Zm),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),hd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,x,m),ud.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,x,m),dd.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ud.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),dd.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(hd.calc(l),ud.calc(l),dd.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jm(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Ev(i,e){let t=1-i;return t*t*e}function wv(i,e){return 2*(1-i)*i*e}function Tv(i,e){return i*i*e}function ma(i,e,t,n){return Ev(i,e)+wv(i,t)+Tv(i,n)}function Av(i,e){let t=1-i;return t*t*t*e}function Rv(i,e){let t=1-i;return 3*t*t*i*e}function Cv(i,e){return 3*(1-i)*i*i*e}function Iv(i,e){return i*i*i*e}function ga(i,e,t,n,s){return Av(i,e)+Rv(i,t)+Cv(i,n)+Iv(i,s)}var La=class extends Bn{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ga(e,s.x,r.x,o.x,a.x),ga(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oc=class extends Bn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ga(e,s.x,r.x,o.x,a.x),ga(e,s.y,r.y,o.y,a.y),ga(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Na=class extends Bn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bc=class extends Bn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends Bn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ma(e,s.x,r.x,o.x),ma(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends Bn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ma(e,s.x,r.x,o.x),ma(e,s.y,r.y,o.y),ma(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fa=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(jm(a,l.x,c.x,h.x,u.x),jm(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Q().fromArray(s))}return this}},bd=Object.freeze({__proto__:null,ArcCurve:Fc,CatmullRomCurve3:Uc,CubicBezierCurve:La,CubicBezierCurve3:Oc,EllipseCurve:po,LineCurve:Na,LineCurve3:Bc,QuadraticBezierCurve:Da,QuadraticBezierCurve3:kc,SplineCurve:Fa}),zc=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bd[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new bd[s.type]().fromJSON(s))}return this}},Ua=class extends zc{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Na(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Da(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new La(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Fa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new po(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},As=class extends Ua{constructor(e){super(e),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ua().fromJSON(s))}return this}};function Pv(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=j0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Uv(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let d=t;d<s;d+=t){let f=i[d],p=i[d+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Oa(r,o,t,a,l,c,0),o}function j0(i,e,t,n,s){let r;if(s===Yv(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Qm(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Qm(o/n|0,i[o],i[o+1],r);return r&&mo(r,r.next)&&(ka(r),r=r.next),r}function cr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(mo(t,t.next)||Vt(t.prev,t,t.next)===0)){if(ka(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Oa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Hv(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Nv(i,n,s,r):Lv(i)){e.push(l.i,i.i,c.i),ka(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Dv(cr(i),e),Oa(i,e,t,n,s,r,2)):o===2&&Fv(i,e,t,n,s,r):Oa(cr(i),e,t,n,s,r,1);break}}}function Lv(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&da(s,a,r,l,o,c,p.x,p.y)&&Vt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Nv(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),p=Math.min(h,u,d),x=Math.max(a,l,c),m=Math.max(h,u,d),g=Md(f,p,e,t,n),_=Md(x,m,e,t,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=g&&v&&v.z<=_;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&da(a,h,l,u,c,d,E.x,E.y)&&Vt(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&da(a,h,l,u,c,d,v.x,v.y)&&Vt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=g;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&da(a,h,l,u,c,d,E.x,E.y)&&Vt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&da(a,h,l,u,c,d,v.x,v.y)&&Vt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Dv(i,e){let t=i;do{let n=t.prev,s=t.next.next;!mo(n,s)&&eg(n,t,t.next,s)&&Ba(n,s)&&Ba(s,n)&&(e.push(n.i,t.i,s.i),ka(t),ka(t.next),t=i=s),t=t.next}while(t!==i);return cr(t)}function Fv(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wv(o,a)){let l=tg(o,a);o=cr(o,o.next),l=cr(l,l.next),Oa(o,e,t,n,s,r,0),Oa(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Uv(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=j0(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gv(c))}s.sort(Ov);for(let r=0;r<s.length;r++)t=Bv(s[r],t);return t}function Ov(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Bv(i,e){let t=kv(i,e);if(!t)return e;let n=tg(t,i);return cr(n,n.next),cr(t,t.next)}function kv(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(mo(i,t))return t;do{if(mo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Q0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ba(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&zv(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function zv(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function Hv(i,e,t,n){let s=i;do s.z===0&&(s.z=Md(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vv(s)}function Vv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Md(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Gv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Q0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function da(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Q0(i,e,t,n,s,r,o,a)}function Wv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!qv(i,e)&&(Ba(i,e)&&Ba(e,i)&&Xv(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||mo(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function mo(i,e){return i.x===e.x&&i.y===e.y}function eg(i,e,t,n){let s=mc(Vt(i,e,t)),r=mc(Vt(i,e,n)),o=mc(Vt(t,n,i)),a=mc(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&pc(i,t,e)||r===0&&pc(i,n,e)||o===0&&pc(t,i,n)||a===0&&pc(t,e,n))}function pc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function mc(i){return i>0?1:i<0?-1:0}function qv(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&eg(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ba(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function Xv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function tg(i,e){let t=Sd(i.i,i.x,i.y),n=Sd(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qm(i,e,t,n){let s=Sd(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ka(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ed=class{static triangulate(e,t,n=2){return Pv(e,t,n)}},Ai=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];e0(e),t0(n,e);let o=e.length;t.forEach(e0);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,t0(n,t[l]);let a=Ed.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function e0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function t0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var za=class i extends Mt{constructor(e=new As([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Qe(s,3)),this.setAttribute("uv",new Qe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:$v,E,v=!1,S,M,A,y;if(g){E=g.getSpacedPoints(h),v=!0,d=!1;let se=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,se),M=new I,A=new I,y=new I}d||(m=0,f=0,p=0,x=0);let w=a.extractPoints(c),R=w.shape,P=w.holes;if(!Ai.isClockWise(R)){R=R.reverse();for(let se=0,ce=P.length;se<ce;se++){let he=P[se];Ai.isClockWise(he)&&(P[se]=he.reverse())}}function k(se){let he=10000000000000001e-36,ue=se[0];for(let ge=1;ge<=se.length;ge++){let Xe=ge%se.length,Ge=se[Xe],Je=Ge.x-ue.x,nt=Ge.y-ue.y,F=Je*Je+nt*nt,Tt=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(ue.x),Math.abs(ue.y)),ft=he*Tt*Tt;if(F<=ft){se.splice(Xe,1),ge--;continue}ue=Ge}}k(R),P.forEach(k);let D=P.length,B=R;for(let se=0;se<D;se++){let ce=P[se];R=R.concat(ce)}function X(se,ce,he){return ce||$e("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ce,he)}let $=R.length;function re(se,ce,he){let ue,ge,Xe,Ge=se.x-ce.x,Je=se.y-ce.y,nt=he.x-se.x,F=he.y-se.y,Tt=Ge*Ge+Je*Je,ft=Ge*F-Je*nt;if(Math.abs(ft)>Number.EPSILON){let C=Math.sqrt(Tt),b=Math.sqrt(nt*nt+F*F),H=ce.x-Je/C,q=ce.y+Ge/C,J=he.x-F/b,de=he.y+nt/b,pe=((J-H)*F-(de-q)*nt)/(Ge*F-Je*nt);ue=H+Ge*pe-se.x,ge=q+Je*pe-se.y;let j=ue*ue+ge*ge;if(j<=2)return new Q(ue,ge);Xe=Math.sqrt(j/2)}else{let C=!1;Ge>Number.EPSILON?nt>Number.EPSILON&&(C=!0):Ge<-Number.EPSILON?nt<-Number.EPSILON&&(C=!0):Math.sign(Je)===Math.sign(F)&&(C=!0),C?(ue=-Je,ge=Ge,Xe=Math.sqrt(Tt)):(ue=Ge,ge=Je,Xe=Math.sqrt(Tt/2))}return new Q(ue/Xe,ge/Xe)}let Z=[];for(let se=0,ce=B.length,he=ce-1,ue=se+1;se<ce;se++,he++,ue++)he===ce&&(he=0),ue===ce&&(ue=0),Z[se]=re(B[se],B[he],B[ue]);let te=[],z,oe=Z.concat();for(let se=0,ce=D;se<ce;se++){let he=P[se];z=[];for(let ue=0,ge=he.length,Xe=ge-1,Ge=ue+1;ue<ge;ue++,Xe++,Ge++)Xe===ge&&(Xe=0),Ge===ge&&(Ge=0),z[ue]=re(he[ue],he[Xe],he[Ge]);te.push(z),oe=oe.concat(z)}let le;if(m===0)le=Ai.triangulateShape(B,P);else{let se=[],ce=[];for(let he=0;he<m;he++){let ue=he/m,ge=f*Math.cos(ue*Math.PI/2),Xe=p*Math.sin(ue*Math.PI/2)+x;for(let Ge=0,Je=B.length;Ge<Je;Ge++){let nt=X(B[Ge],Z[Ge],Xe);me(nt.x,nt.y,-ge),ue===0&&se.push(nt)}for(let Ge=0,Je=D;Ge<Je;Ge++){let nt=P[Ge];z=te[Ge];let F=[];for(let Tt=0,ft=nt.length;Tt<ft;Tt++){let C=X(nt[Tt],z[Tt],Xe);me(C.x,C.y,-ge),ue===0&&F.push(C)}ue===0&&ce.push(F)}}le=Ai.triangulateShape(se,ce)}let Oe=le.length,Be=p+x;for(let se=0;se<$;se++){let ce=d?X(R[se],oe[se],Be):R[se];v?(A.copy(S.normals[0]).multiplyScalar(ce.x),M.copy(S.binormals[0]).multiplyScalar(ce.y),y.copy(E[0]).add(A).add(M),me(y.x,y.y,y.z)):me(ce.x,ce.y,0)}for(let se=1;se<=h;se++)for(let ce=0;ce<$;ce++){let he=d?X(R[ce],oe[ce],Be):R[ce];v?(A.copy(S.normals[se]).multiplyScalar(he.x),M.copy(S.binormals[se]).multiplyScalar(he.y),y.copy(E[se]).add(A).add(M),me(y.x,y.y,y.z)):me(he.x,he.y,u/h*se)}for(let se=m-1;se>=0;se--){let ce=se/m,he=f*Math.cos(ce*Math.PI/2),ue=p*Math.sin(ce*Math.PI/2)+x;for(let ge=0,Xe=B.length;ge<Xe;ge++){let Ge=X(B[ge],Z[ge],ue);me(Ge.x,Ge.y,u+he)}for(let ge=0,Xe=P.length;ge<Xe;ge++){let Ge=P[ge];z=te[ge];for(let Je=0,nt=Ge.length;Je<nt;Je++){let F=X(Ge[Je],z[Je],ue);v?me(F.x,F.y+E[h-1].y,E[h-1].x+he):me(F.x,F.y,u+he)}}}Ze(),K();function Ze(){let se=s.length/3;if(d){let ce=0,he=$*ce;for(let ue=0;ue<Oe;ue++){let ge=le[ue];Ue(ge[2]+he,ge[1]+he,ge[0]+he)}ce=h+m*2,he=$*ce;for(let ue=0;ue<Oe;ue++){let ge=le[ue];Ue(ge[0]+he,ge[1]+he,ge[2]+he)}}else{for(let ce=0;ce<Oe;ce++){let he=le[ce];Ue(he[2],he[1],he[0])}for(let ce=0;ce<Oe;ce++){let he=le[ce];Ue(he[0]+$*h,he[1]+$*h,he[2]+$*h)}}n.addGroup(se,s.length/3-se,0)}function K(){let se=s.length/3,ce=0;ee(B,ce),ce+=B.length;for(let he=0,ue=P.length;he<ue;he++){let ge=P[he];ee(ge,ce),ce+=ge.length}n.addGroup(se,s.length/3-se,1)}function ee(se,ce){let he=se.length;for(;--he>=0;){let ue=he,ge=he-1;ge<0&&(ge=se.length-1);for(let Xe=0,Ge=h+m*2;Xe<Ge;Xe++){let Je=$*Xe,nt=$*(Xe+1),F=ce+ue+Je,Tt=ce+ge+Je,ft=ce+ge+nt,C=ce+ue+nt;xe(F,Tt,ft,C)}}}function me(se,ce,he){l.push(se),l.push(ce),l.push(he)}function Ue(se,ce,he){qe(se),qe(ce),qe(he);let ue=s.length/3,ge=_.generateTopUV(n,s,ue-3,ue-2,ue-1);yt(ge[0]),yt(ge[1]),yt(ge[2])}function xe(se,ce,he,ue){qe(se),qe(ce),qe(ue),qe(ce),qe(he),qe(ue);let ge=s.length/3,Xe=_.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);yt(Xe[0]),yt(Xe[1]),yt(Xe[3]),yt(Xe[1]),yt(Xe[2]),yt(Xe[3])}function qe(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function yt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Kv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new bd[s.type]().fromJSON(s)),new i(n,e.options)}},$v={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(d,1-p),new Q(x,1-g)]:[new Q(a,1-l),new Q(h,1-u),new Q(f,1-p),new Q(m,1-g)]}};function Kv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ha=class i extends Dc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},go=class i extends Mt{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ct(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new I,d=new Q,f=new I,p=new I,x=new I,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let _=0;_<=t;_++){let E=n+_*h*s,v=Math.sin(E),S=Math.cos(E);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*S,o.push(u.x,u.y,u.z),d.x=_/t,d.y=M/(e.length-1),a.push(d.x,d.y);let A=l[3*M+0]*v,y=l[3*M+1],w=l[3*M+0]*S;c.push(A,y,w)}}for(let _=0;_<t;_++)for(let E=0;E<e.length-1;E++){let v=E+_*e.length,S=v,M=v+e.length,A=v+e.length+1,y=v+1;r.push(S,M,y),r.push(A,y,M)}this.setIndex(r),this.setAttribute("position",new Qe(o,3)),this.setAttribute("uv",new Qe(a,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Wt=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*d-o;for(let E=0;E<c;E++){let v=E*u-r;p.push(v,-_,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let E=_+c*g,v=_+c*(g+1),S=_+1+c*(g+1),M=_+1+c*g;f.push(E,v,M),f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Va=class i extends Mt{constructor(e=new As([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(r,3)),this.setAttribute("uv",new Qe(o,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;Ai.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let _=p[m];Ai.isClockWise(_)===!0&&(p[m]=_.reverse())}let x=Ai.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let _=p[m];f=f.concat(_)}for(let m=0,g=f.length;m<g;m++){let _=f[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){let _=x[m],E=_[0]+u,v=_[1]+u,S=_[2]+u;n.push(E,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Zv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Zv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var hr=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,f=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],E=g/n,v=o+E*a,S=e*Math.cos(v),M=Math.sqrt(e*e-S*S),A=0;g===0&&o===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let w=y/t,R=s+w*r;u.x=-M*Math.cos(R),u.y=S,u.z=M*Math.sin(R),p.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+A,1-E),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let E=h[g][_+1],v=h[g][_],S=h[g+1][_],M=h[g+1][_+1];(g!==0||o>0)&&f.push(E,v,M),(g!==n-1||l<Math.PI)&&f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new Qe(p,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function vr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(n0(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(n0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=vr(i[t]);for(let s in n)e[s]=n[s]}return e}function n0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Jv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var Ao={clone:vr,merge:yn},jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jv,this.fragmentShader=Qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Jv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new fe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xo=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},It=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kt=class extends It{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ga=class extends _n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fl,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Qc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hc=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Vc=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function eb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function i0(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function tb(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Gc=class extends Li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xd,endingEnd:xd}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _d:r=e,a=2*t-n;break;case yd:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _d:o=e,l=2*n-t;break;case yd:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,E=(-1-f)*m+(1.5+f)*x+.5*p,v=f*m-f*x;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+_*o[c+S]+E*o[l+S]+v*o[u+S];return r}},Wc=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},qc=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xc=class extends Li{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,_=u[g],E=u[g+1],v=e*d+p*2,S=h[v],M=h[v+1],A=ib(n,t,_,S,s);r[p]=ng(A,x,E,M,m)}return r}};function ng(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function nb(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function ib(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ng(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=nb(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ss(t,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ss(e.times,Array),values:Ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),vc(e.settings)&&(n.settings={inTangents:Ss(e.settings.inTangents,Array),outTangents:Ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Xc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case nr:t=this.InterpolantFactoryMethodDiscrete;break;case ir:t=this.InterpolantFactoryMethodLinear;break;case _c:t=this.InterpolantFactoryMethodSmooth;break;case gd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return nr;case this.InterpolantFactoryMethodLinear:return ir;case this.InterpolantFactoryMethodSmooth:return _c;case this.InterpolantFactoryMethodBezier:return gd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;vc(this.settings)&&(s0(this.settings.inTangents,e),s0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&zy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_c,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[d+p]||x!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,vc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function s0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=ir;var Qi=class extends In{constructor(e,t,n){super(e,t,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=nr;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Wa.prototype.ValueTypeName="color";var es=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};es.prototype.ValueTypeName="number";var Yc=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ts=class extends In{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends In{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=nr;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends In{constructor(e,t,n,s){super(e,t,n,s)}};Rs.prototype.ValueTypeName="vector";var qa=class{constructor(e="",t=-1,n=[],s=U0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(rb(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=eb(l);l=i0(l,1,h),c=i0(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new es(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function sb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return es;case"vector":case"vector2":case"vector3":case"vector4":return Rs;case"color":return Wa;case"quaternion":return ts;case"bool":case"boolean":return Qi;case"string":return ns}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function rb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=sb(i.type);if(i.times===void 0){let n=[],s=[];tb(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),vc(i.settings)&&(t.settings={inTangents:Ss(i.settings.inTangents,Float32Array),outTangents:Ss(i.settings.outTangents,Float32Array)}),t}var Ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(r0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!r0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function r0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var $c=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ig=new $c,Ni=class{constructor(e){this.manager=e!==void 0?e:ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki={},wd=class extends Error{constructor(e,t){super(e),this.response=t}},_o=class extends Ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ri.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ki[e]!==void 0){Ki[e].push({onLoad:t,onProgress:n,onError:s});return}Ki[e]=[],Ki[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ki[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,x=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:E,value:v})=>{if(E)g.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:f});for(let M=0,A=h.length;M<A;M++){let y=h[M];y.onProgress&&y.onProgress(S)}g.enqueue(v),_()}},E=>{g.error(E)})}}});return new Response(m)}else throw new wd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ri.add(`file:${e}`,c);let h=Ki[e];delete Ki[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Ki[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ki[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Kr=new WeakMap,Kc=class extends Ni{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ri.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Kr.get(o);u===void 0&&(u=[],Kr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=no("img");function l(){h(),t&&t(this);let u=Kr.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Kr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ri.remove(`image:${e}`);let d=Kr.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(u)}Kr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ri.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var ur=class extends Ni{constructor(e){super(e)}load(e,t,n,s){let r=new tn,o=new Kc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},dr=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xa=class extends dr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fd=new Ke,o0=new I,a0=new I,yo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;o0.setFromMatrixPosition(e.matrixWorld),t.position.copy(o0),a0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(a0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){fd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===to||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(fd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},gc=new I,xc=new xn,Ti=new I,Ya=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(gc,xc,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,xc,Ti.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(gc,xc,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(gc,xc,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ms=new I,l0=new Q,c0=new Q,ln=class extends Ya{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,l0,c0),t.subVectors(c0,l0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Td=class extends yo{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},fr=class extends dr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Td}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ad=class extends yo{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},pr=class extends dr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ad}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zn=class extends Ya{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rd=class extends yo{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends dr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Rd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var is=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var pd=new WeakMap,$a=class extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ri.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{pd.has(o)===!0?(s&&s(pd.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ri.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),pd.set(l,c),Ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ri.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Zr=-90,Jr=1,Zc=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Zr,Jr,e,t);s.layers=this.layers,this.add(s);let r=new ln(Zr,Jr,e,t);r.layers=this.layers,this.add(r);let o=new ln(Zr,Jr,e,t);o.layers=this.layers,this.add(o);let a=new ln(Zr,Jr,e,t);a.layers=this.layers,this.add(a);let l=new ln(Zr,Jr,e,t);l.layers=this.layers,this.add(l);let c=new ln(Zr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Jc=class extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ka=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ob.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ob(){this._document.hidden===!1&&this.reset()}var Zd="\\[\\]\\.:\\/",ab=new RegExp("["+Zd+"]","g"),Jd="[^"+Zd+"]",lb="[^"+Zd.replace("\\.","")+"]",cb=/((?:WC+[\/:])*)/.source.replace("WC",Jd),hb=/(WCOD+)?/.source.replace("WCOD",lb),ub=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jd),db=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jd),fb=new RegExp("^"+cb+hb+ub+db+"$"),pb=["material","materials","bones","map"],Cd=class{constructor(e,t,n){let s=n||Ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ab,"")}static parseTrackName(e){let t=fb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=Cd;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ER=new Float32Array(1);var h0=new Ke,Za=class{constructor(e,t,n=0,s=1/0){this.ray=new ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ro,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):$e("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return h0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(h0),this}intersectObject(e,t=!0,n=[]){return Id(e,this,n,t),n.sort(u0),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Id(e[s],this,n,t);return n.sort(u0),n}};function u0(i,e){return i.distance-e.distance}function Id(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Id(r[o],e,t,!0)}}var Ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var sf=class sf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};sf.prototype.isMatrix2=!0;var Pd=sf;function jd(i,e,t,n){let s=mb(n);switch(t){case Vd:return i*e;case oh:return i*e/s.components*s.byteLength;case ah:return i*e/s.components*s.byteLength;case Ls:return i*e*2/s.components*s.byteLength;case lh:return i*e*2/s.components*s.byteLength;case Gd:return i*e*3/s.components*s.byteLength;case Hn:return i*e*4/s.components*s.byteLength;case ch:return i*e*4/s.components*s.byteLength;case ol:case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uh:case fh:return Math.max(i,16)*Math.max(e,8)/4;case hh:case dh:return Math.max(i,8)*Math.max(e,8)/2;case ph:case mh:case xh:case _h:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gh:case hl:case yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ih:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Nh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dh:case Fh:case Uh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oh:case Bh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ul:case kh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mb(i){switch(i){case Pn:case Bd:return{byteLength:1,components:1};case So:case kd:case en:return{byteLength:2,components:1};case sh:case rh:return{byteLength:2,components:4};case gi:case ih:case zn:return{byteLength:4,components:1};case zd:case Hd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function wg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xb(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yb=`#ifdef USE_ALPHAHASH
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
#endif`,vb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
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
#endif`,wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tb=`#ifdef USE_BATCHING
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
#endif`,Ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ib=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
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
#endif`,Lb=`#ifdef USE_BUMPMAP
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
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hb=`#define PI 3.141592653589793
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
} // validated`,Vb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gb=`vec3 transformedNormal = objectNormal;
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
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$b="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rM=`#ifdef USE_GRADIENTMAP
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
}`,oM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hM=`#ifdef USE_ENVMAP
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
#endif`,uM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mM=`PhysicalMaterial material;
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
#endif`,gM=`uniform sampler2D dfgLUT;
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
}`,xM=`
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
#endif`,_M=`#if defined( RE_IndirectDiffuse )
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
#endif`,yM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,bM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,MM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,AM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,RM=`#if defined( USE_POINTS_UV )
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
#endif`,CM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`#ifdef USE_MORPHTARGETS
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
#endif`,FM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,HM=`#ifdef USE_NORMALMAP
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
#endif`,VM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$M=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iS=`float getShadowMask() {
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
}`,sS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rS=`#ifdef USE_SKINNING
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
#endif`,oS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aS=`#ifdef USE_SKINNING
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
#endif`,lS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dS=`#ifdef USE_TRANSMISSION
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
#endif`,fS=`#ifdef USE_TRANSMISSION
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
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_S=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yS=`uniform sampler2D t2D;
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`#include <common>
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
}`,wS=`#if DEPTH_PACKING == 3200
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
}`,TS=`#define DISTANCE
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
}`,AS=`#define DISTANCE
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
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`uniform float scale;
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
}`,PS=`uniform vec3 diffuse;
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
}`,LS=`#include <common>
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
}`,NS=`uniform vec3 diffuse;
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
}`,DS=`#define LAMBERT
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
}`,FS=`#define LAMBERT
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
}`,US=`#define MATCAP
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
}`,OS=`#define MATCAP
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
}`,BS=`#define NORMAL
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
}`,kS=`#define NORMAL
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
}`,zS=`#define PHONG
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
}`,HS=`#define PHONG
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
}`,VS=`#define STANDARD
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
}`,GS=`#define STANDARD
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
}`,WS=`#define TOON
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
}`,qS=`#define TOON
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
}`,XS=`uniform float size;
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
}`,YS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,KS=`uniform vec3 color;
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
}`,ZS=`uniform float rotation;
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
}`,JS=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:_b,alphahash_pars_fragment:yb,alphamap_fragment:vb,alphamap_pars_fragment:bb,alphatest_fragment:Mb,alphatest_pars_fragment:Sb,aomap_fragment:Eb,aomap_pars_fragment:wb,batching_pars_vertex:Tb,batching_vertex:Ab,begin_vertex:Rb,beginnormal_vertex:Cb,bsdfs:Ib,iridescence_fragment:Pb,bumpmap_pars_fragment:Lb,clipping_planes_fragment:Nb,clipping_planes_pars_fragment:Db,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Ub,color_fragment:Ob,color_pars_fragment:Bb,color_pars_vertex:kb,color_vertex:zb,common:Hb,cube_uv_reflection_fragment:Vb,defaultnormal_vertex:Gb,displacementmap_pars_vertex:Wb,displacementmap_vertex:qb,emissivemap_fragment:Xb,emissivemap_pars_fragment:Yb,colorspace_fragment:$b,colorspace_pars_fragment:Kb,envmap_fragment:Zb,envmap_common_pars_fragment:Jb,envmap_pars_fragment:jb,envmap_pars_vertex:Qb,envmap_physical_pars_fragment:hM,envmap_vertex:eM,fog_vertex:tM,fog_pars_vertex:nM,fog_fragment:iM,fog_pars_fragment:sM,gradientmap_pars_fragment:rM,lightmap_pars_fragment:oM,lights_lambert_fragment:aM,lights_lambert_pars_fragment:lM,lights_pars_begin:cM,lights_toon_fragment:uM,lights_toon_pars_fragment:dM,lights_phong_fragment:fM,lights_phong_pars_fragment:pM,lights_physical_fragment:mM,lights_physical_pars_fragment:gM,lights_fragment_begin:xM,lights_fragment_maps:_M,lights_fragment_end:yM,lightprobes_pars_fragment:vM,logdepthbuf_fragment:bM,logdepthbuf_pars_fragment:MM,logdepthbuf_pars_vertex:SM,logdepthbuf_vertex:EM,map_fragment:wM,map_pars_fragment:TM,map_particle_fragment:AM,map_particle_pars_fragment:RM,metalnessmap_fragment:CM,metalnessmap_pars_fragment:IM,morphinstance_vertex:PM,morphcolor_vertex:LM,morphnormal_vertex:NM,morphtarget_pars_vertex:DM,morphtarget_vertex:FM,normal_fragment_begin:UM,normal_fragment_maps:OM,normal_pars_fragment:BM,normal_pars_vertex:kM,normal_vertex:zM,normalmap_pars_fragment:HM,clearcoat_normal_fragment_begin:VM,clearcoat_normal_fragment_maps:GM,clearcoat_pars_fragment:WM,iridescence_pars_fragment:qM,opaque_fragment:XM,packing:YM,premultiplied_alpha_fragment:$M,project_vertex:KM,dithering_fragment:ZM,dithering_pars_fragment:JM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:QM,shadowmap_pars_fragment:eS,shadowmap_pars_vertex:tS,shadowmap_vertex:nS,shadowmask_pars_fragment:iS,skinbase_vertex:sS,skinning_pars_vertex:rS,skinning_vertex:oS,skinnormal_vertex:aS,specularmap_fragment:lS,specularmap_pars_fragment:cS,tonemapping_fragment:hS,tonemapping_pars_fragment:uS,transmission_fragment:dS,transmission_pars_fragment:fS,uv_pars_fragment:pS,uv_pars_vertex:mS,uv_vertex:gS,worldpos_vertex:xS,background_vert:_S,background_frag:yS,backgroundCube_vert:vS,backgroundCube_frag:bS,cube_vert:MS,cube_frag:SS,depth_vert:ES,depth_frag:wS,distance_vert:TS,distance_frag:AS,equirect_vert:RS,equirect_frag:CS,linedashed_vert:IS,linedashed_frag:PS,meshbasic_vert:LS,meshbasic_frag:NS,meshlambert_vert:DS,meshlambert_frag:FS,meshmatcap_vert:US,meshmatcap_frag:OS,meshnormal_vert:BS,meshnormal_frag:kS,meshphong_vert:zS,meshphong_frag:HS,meshphysical_vert:VS,meshphysical_frag:GS,meshtoon_vert:WS,meshtoon_frag:qS,points_vert:XS,points_frag:YS,shadow_vert:$S,shadow_frag:KS,sprite_vert:ZS,sprite_frag:JS},Se={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Fi={basic:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:yn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:yn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new fe(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:yn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:yn([Se.points,Se.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:yn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:yn([Se.common,Se.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:yn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:yn([Se.sprite,Se.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:yn([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:yn([Se.lights,Se.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Fi.physical={uniforms:yn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Vh={r:0,b:0,g:0},jS=new Ke,Tg=new et;Tg.set(-1,0,0,0,1,0,0,0,1);function QS(i,e,t,n,s,r){let o=new fe(0),a=s===!0?0:1,l,c,h=null,u=0,d=null;function f(_){let E=_.isScene===!0?_.background:null;if(E&&E.isTexture){let v=_.backgroundBlurriness>0;E=e.get(E,v)}return E}function p(_){let E=!1,v=f(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),E=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,E){let v=f(E);v&&(v.isCubeTexture||v.mapping===rl)?(c===void 0&&(c=new Re(new Ht(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:vr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jS.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tg),c.material.toneMapped=rt.getTransfer(v.colorSpace)!==vt,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Re(new Wt(2,2),new nn({name:"BackgroundMaterial",uniforms:vr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=rt.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,E){_.getRGB(Vh,Kd(i)),t.buffers.color.setClear(Vh.r,Vh.g,Vh.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,E=1){o.set(_),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function e1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(P,N,k,D,B){let X=!1,$=u(P,D,k,N);r!==$&&(r=$,c(r.object)),X=f(P,D,k,B),X&&p(P,D,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(P,N,k,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,N,k,D){let B=D.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let $=P.isInstancedMesh===!0?P.id:0,re=X[$];re===void 0&&(re={},X[$]=re);let Z=re[k.id];Z===void 0&&(Z={},re[k.id]=Z);let te=Z[B];return te===void 0&&(te=d(l()),Z[B]=te),te}function d(P){let N=[],k=[],D=[];for(let B=0;B<t;B++)N[B]=0,k[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,N,k,D){let B=r.attributes,X=N.attributes,$=0,re=k.getAttributes();for(let Z in re)if(re[Z].location>=0){let z=B[Z],oe=X[Z];if(oe===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),z===void 0||z.attribute!==oe||oe&&z.data!==oe.data)return!0;$++}return r.attributesNum!==$||r.index!==D}function p(P,N,k,D){let B={},X=N.attributes,$=0,re=k.getAttributes();for(let Z in re)if(re[Z].location>=0){let z=X[Z];z===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));let oe={};oe.attribute=z,z&&z.data&&(oe.data=z.data),B[Z]=oe,$++}r.attributes=B,r.attributesNum=$,r.index=D}function x(){let P=r.newAttributes;for(let N=0,k=P.length;N<k;N++)P[N]=0}function m(P){g(P,0)}function g(P,N){let k=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;k[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),B[P]!==N&&(i.vertexAttribDivisor(P,N),B[P]=N)}function _(){let P=r.newAttributes,N=r.enabledAttributes;for(let k=0,D=N.length;k<D;k++)N[k]!==P[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function E(P,N,k,D,B,X,$){$===!0?i.vertexAttribIPointer(P,N,k,B,X):i.vertexAttribPointer(P,N,k,D,B,X)}function v(P,N,k,D){x();let B=D.attributes,X=k.getAttributes(),$=N.defaultAttributeValues;for(let re in X){let Z=X[re];if(Z.location>=0){let te=B[re];if(te===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let z=te.normalized,oe=te.itemSize,le=e.get(te);if(le===void 0)continue;let Oe=le.buffer,Be=le.type,Ze=le.bytesPerElement,K=Be===i.INT||Be===i.UNSIGNED_INT||te.gpuType===ih;if(te.isInterleavedBufferAttribute){let ee=te.data,me=ee.stride,Ue=te.offset;if(ee.isInstancedInterleavedBuffer){for(let xe=0;xe<Z.locationSize;xe++)g(Z.location+xe,ee.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let xe=0;xe<Z.locationSize;xe++)m(Z.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let xe=0;xe<Z.locationSize;xe++)E(Z.location+xe,oe/Z.locationSize,Be,z,me*Ze,(Ue+oe/Z.locationSize*xe)*Ze,K)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<Z.locationSize;ee++)g(Z.location+ee,te.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<Z.locationSize;ee++)m(Z.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ee=0;ee<Z.locationSize;ee++)E(Z.location+ee,oe/Z.locationSize,Be,z,oe*Ze,oe/Z.locationSize*ee*Ze,K)}}else if($!==void 0){let z=$[re];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(Z.location,z);break;case 3:i.vertexAttrib3fv(Z.location,z);break;case 4:i.vertexAttrib4fv(Z.location,z);break;default:i.vertexAttrib1fv(Z.location,z)}}}}_()}function S(){w();for(let P in n){let N=n[P];for(let k in N){let D=N[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let k in N){let D=N[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P.id]}function A(P){for(let N in n){let k=n[N];for(let D in k){let B=k[D];if(B[P.id]===void 0)continue;let X=B[P.id];for(let $ in X)h(X[$].object),delete X[$];delete B[P.id]}}}function y(P){for(let N in n){let k=n[N],D=P.isInstancedMesh===!0?P.id:0,B=k[D];if(B!==void 0){for(let X in B){let $=B[X];for(let re in $)h($[re].object),delete $[re];delete B[X]}delete k[D],Object.keys(k).length===0&&delete n[N]}}}function w(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function t1(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function n1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===en&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&A!==zn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:E,maxFragmentUniforms:v,maxSamples:S,samples:M}}function i1(i){let e=this,t=null,n=0,s=!1,r=!1,o=new On,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,E=_*4,v=g.clippingState||null;l.value=v,v=h(p,d,E,f);for(let S=0;S!==E;++S)v[S]=t[S];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,v=f;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Co=4,s1=6,r1=20,o1=256,pl=new Zn,sg=new fe,rf=null,of=0,af=0,lf=!1,a1=new I,br=new I,Po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=a1}=r;rf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rf,of,af),this._renderer.xr.enabled=lf,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rf=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:en,format:Hn,colorSpace:hn,depthBuffer:!1},s=rg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=l1(r)),this._blurMaterial=h1(r,e,t),this._ggxMaterial=c1(r,e,t)}return s}_compileMaterial(e){let t=new Re(new Mt,e);this._renderer.compile(t,pl)}_sceneToCubeUV(e,t,n,s,r){let l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(sg),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Ht,new St({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,_=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,g=!0):(m.color.copy(sg),g=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let S=this._cubeSize;Ro(s,v*S,E>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(x,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Is||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=og());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ro(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,pl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Co?n-p+Co:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=p-t,Ro(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,pl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Ro(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,pl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Co?s-this._lodMax+Co:0),d=4*(this._cubeSize-h);Ro(t,u,d,3*h,2*h),o.setRenderTarget(t),o.render(l,pl)}};function l1(i){let e=[],t=[],n=i,s=i-Co+1+s1;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,p=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let g=0;g<u;g++){let _=g%3*2/3-1,E=g>2?0:-1,v=[_,E,0,_+2/3,E,0,_+2/3,E+1,0,_,E,0,_+2/3,E+1,0,_,E+1,0];p.set(v,f*d*g);for(let S=0;S<d;S++){let M=h[S*2]*2-1,A=h[S*2+1]*2-1;g===0?br.set(1,A,M):g===1?br.set(-M,1,-A):g===2?br.set(-M,A,1):g===3?br.set(-1,A,-M):g===4?br.set(-M,-1,A):br.set(M,A,-1),br.toArray(x,(g*d+S)*f)}}let m=new Mt;m.setAttribute("position",new kt(p,f)),m.setAttribute("outputDirection",new kt(x,f)),t.push(new Re(m,null)),n>Co&&n--}return{lodMeshes:t,sizeLods:e}}function rg(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c1(i,e,t){return new nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function h1(i,e,t){return new nn({name:"SphericalGaussianBlur",defines:{SAMPLES:r1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function og(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ag(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Xh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Wh=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ht(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:jn});r.uniforms.tEquirect.value=t;let o=new Re(s,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=zt),new Zc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function u1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===eh||f===th)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Wh(p.height);return x.fromEquirectangularTexture(i,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let f=d.mapping,p=f===eh||f===th,x=f===Is||f===_r;if(p||x){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new Po(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let _=d.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Po(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===eh?d.mapping=Is:f===th&&(d.mapping=_r),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function d1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&tr("WebGLRenderer: "+n+" extension not supported."),s}}}function f1(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(f!==null){let _=f.array;x=f.version;for(let E=0,v=_.length;E<v;E+=3){let S=_[E+0],M=_[E+1],A=_[E+2];d.push(S,M,M,A,A,S)}}else{let _=p.array;x=p.version;for(let E=0,v=_.length/3-1;E<v;E+=3){let S=E+0,M=E+1,A=E+2;d.push(S,M,M,A,A,S)}}let m=new(p.count>=65535?ba:va)(d,1);m.version=x;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function p1(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function m1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function g1(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let w=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let v=a.attributes.position.count*E,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*S*4*u),A=new ya(M,v,S,u);A.type=zn,A.needsUpdate=!0;let y=E*4;for(let R=0;R<u;R++){let P=m[R],N=g[R],k=_[R],D=v*S*4*R;for(let B=0;B<P.count;B++){let X=B*y;f===!0&&(s.fromBufferAttribute(P,B),M[D+X+0]=s.x,M[D+X+1]=s.y,M[D+X+2]=s.z,M[D+X+3]=0),p===!0&&(s.fromBufferAttribute(N,B),M[D+X+4]=s.x,M[D+X+5]=s.y,M[D+X+6]=s.z,M[D+X+7]=0),x===!0&&(s.fromBufferAttribute(k,B),M[D+X+8]=s.x,M[D+X+9]=s.y,M[D+X+10]=s.z,M[D+X+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Q(v,S)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function x1(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var _1={[Qa]:"LINEAR_TONE_MAPPING",[el]:"REINHARD_TONE_MAPPING",[tl]:"CINEON_TONE_MAPPING",[xr]:"ACES_FILMIC_TONE_MAPPING",[il]:"AGX_TONE_MAPPING",[sl]:"NEUTRAL_TONE_MAPPING",[nl]:"CUSTOM_TONE_MAPPING"};function y1(i,e,t,n,s,r){let o=new Gt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Mt;c.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let h=new xo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Re(c,h),d=new Zn(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,_=[],E=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<_.length;M++){let A=_[M];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){_=v,E=_.length>0&&_[0].isRenderPass===!0;let S=o.width,M=o.height;_.length>0&&a===null&&(a=new Gt(S,M,{type:en,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(S,M,{type:en,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let y=_[A];y.setSize&&y.setSize(S,M)}},this.begin=function(v,S){if(x||v.toneMapping===mi&&_.length===0)return!1;if(g=S,S!==null){let M=S.width,A=S.height;(o.width!==M||o.height!==A)&&this.setSize(M,A)}return E===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return E},this.end=function(v,S){v.toneMapping=m,x=!0;let M=o,A=a;for(let y=0;y<_.length;y++){let w=_[y];w.enabled!==!1&&(w.render(v,A,M,S),w.needsSwap!==!1&&(M=A,A=A===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},rt.getTransfer(f)===vt&&(h.defines.SRGB_TRANSFER="");let y=_1[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Ag=new tn,uf=new Ts(1,1),Rg=new ya,Cg=new Ic,Ig=new Ra,lg=[],cg=[],hg=new Float32Array(16),ug=new Float32Array(9),dg=new Float32Array(4);function Lo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lg[s];if(r===void 0&&(r=new Float32Array(s),lg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yh(i,e){let t=cg[e];t===void 0&&(t=new Int32Array(e),cg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function v1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function M1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function S1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function E1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;dg.set(n),i.uniformMatrix2fv(this.addr,!1,dg),rn(t,n)}}function w1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;ug.set(n),i.uniformMatrix3fv(this.addr,!1,ug),rn(t,n)}}function T1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;hg.set(n),i.uniformMatrix4fv(this.addr,!1,hg),rn(t,n)}}function A1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function C1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function I1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function P1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function L1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function N1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function D1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function F1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uf.compareFunction=t.isReversedDepthBuffer()?Hh:zh,r=uf):r=Ag,t.setTexture2D(e||r,s)}function U1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Cg,s)}function O1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ig,s)}function B1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rg,s)}function k1(i){switch(i){case 5126:return v1;case 35664:return b1;case 35665:return M1;case 35666:return S1;case 35674:return E1;case 35675:return w1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return R1;case 35668:case 35672:return C1;case 35669:case 35673:return I1;case 5125:return P1;case 36294:return L1;case 36295:return N1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return F1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return B1}}function z1(i,e){i.uniform1fv(this.addr,e)}function H1(i,e){let t=Lo(e,this.size,2);i.uniform2fv(this.addr,t)}function V1(i,e){let t=Lo(e,this.size,3);i.uniform3fv(this.addr,t)}function G1(i,e){let t=Lo(e,this.size,4);i.uniform4fv(this.addr,t)}function W1(i,e){let t=Lo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q1(i,e){let t=Lo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X1(i,e){let t=Lo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Y1(i,e){i.uniform1iv(this.addr,e)}function $1(i,e){i.uniform2iv(this.addr,e)}function K1(i,e){i.uniform3iv(this.addr,e)}function Z1(i,e){i.uniform4iv(this.addr,e)}function J1(i,e){i.uniform1uiv(this.addr,e)}function j1(i,e){i.uniform2uiv(this.addr,e)}function Q1(i,e){i.uniform3uiv(this.addr,e)}function eE(i,e){i.uniform4uiv(this.addr,e)}function tE(i,e,t){let n=this.cache,s=e.length,r=Yh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=uf:o=Ag;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function nE(i,e,t){let n=this.cache,s=e.length,r=Yh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Cg,r[o])}function iE(i,e,t){let n=this.cache,s=e.length,r=Yh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ig,r[o])}function sE(i,e,t){let n=this.cache,s=e.length,r=Yh(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rg,r[o])}function rE(i){switch(i){case 5126:return z1;case 35664:return H1;case 35665:return V1;case 35666:return G1;case 35674:return W1;case 35675:return q1;case 35676:return X1;case 5124:case 35670:return Y1;case 35667:case 35671:return $1;case 35668:case 35672:return K1;case 35669:case 35673:return Z1;case 5125:return J1;case 36294:return j1;case 36295:return Q1;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return sE}}var df=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k1(t.type)}},ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rE(t.type)}},pf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},cf=/(\w+)(\])?(\[|\.)?/g;function fg(i,e){i.seq.push(e),i.map[e.id]=e}function oE(i,e,t){let n=i.name,s=n.length;for(cf.lastIndex=0;;){let r=cf.exec(n),o=cf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fg(t,c===void 0?new df(a,i,e):new ff(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new pf(a),fg(t,u)),t=u}}}var Io=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);oE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function pg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var aE=37297,lE=0;function cE(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var mg=new et;function hE(i){rt._getMatrix(mg,rt.workingColorSpace,i);let e=`mat3( ${mg.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(i)){case xa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cE(i.getShaderSource(e),a)}else return r}function uE(i,e){let t=hE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var dE={[Qa]:"Linear",[el]:"Reinhard",[tl]:"Cineon",[xr]:"ACESFilmic",[il]:"AgX",[sl]:"Neutral",[nl]:"Custom"};function fE(i,e){let t=dE[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gh=new I;function pE(){rt.getLuminanceCoefficients(Gh);let i=Gh.x.toFixed(4),e=Gh.y.toFixed(4),t=Gh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function gE(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xE(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function gl(i){return i!==""}function xg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _E=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(i){return i.replace(_E,vE)}var yE=new Map;function vE(i,e){let t=ht[e];if(t===void 0){let n=yE.get(e);if(n!==void 0)t=ht[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mf(t)}var bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(i){return i.replace(bE,ME)}function ME(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vg(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var SE={[mr]:"SHADOWMAP_TYPE_PCF",[vo]:"SHADOWMAP_TYPE_VSM"};function EE(i){return SE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wE={[Is]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[rl]:"ENVMAP_TYPE_CUBE_UV"};function TE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var AE={[_r]:"ENVMAP_MODE_REFRACTION"};function RE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":AE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var CE={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[N0]:"ENVMAP_BLENDING_MIX",[D0]:"ENVMAP_BLENDING_ADD"};function IE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":CE[i.combine]||"ENVMAP_BLENDING_NONE"}function PE(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function LE(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=EE(t),c=TE(t),h=RE(t),u=IE(t),d=PE(t),f=mE(t),p=gE(r),x=s.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(gl).join(`
`),g.length>0&&(g+=`
`)):(m=[vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),g=[vg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ht.tonemapping_pars_fragment:"",t.toneMapping!==mi?fE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,uE("linearToOutputTexel",t.outputColorSpace),pE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gl).join(`
`)),o=mf(o),o=xg(o,t),o=_g(o,t),a=mf(a),a=xg(a,t),a=_g(a,t),o=yg(o),a=yg(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=_+m+o,v=_+g+a,S=pg(s,s.VERTEX_SHADER,E),M=pg(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,M),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(M)||"",B=N.trim(),X=k.trim(),$=D.trim(),re=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,M);else{let te=gg(s,S,"vertex"),z=gg(s,M,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+te+`
`+z)}else B!==""?Ne("WebGLProgram: Program Info Log:",B):(X===""||$==="")&&(Z=!1);Z&&(P.diagnostics={runnable:re,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:g}})}s.deleteShader(S),s.deleteShader(M),y=new Io(s,x),w=xE(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,aE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var NE=0,gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xf(e),t.set(e,n)),n}},xf=class{constructor(e){this.id=NE++,this.code=e,this.usedTimes=0}};function DE(i){return i===Ls||i===hl||i===ul}function FE(i,e,t,n,s,r){let o=new ro,a=new gf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,w,R,P,N,k){let D=P.fog,B=N.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,re=e.get(y.envMap||X,$),Z=re&&re.mapping===rl?re.image.height:null,te=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ne("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=z!==void 0?z.length:0,le=0;B.morphAttributes.position!==void 0&&(le=1),B.morphAttributes.normal!==void 0&&(le=2),B.morphAttributes.color!==void 0&&(le=3);let Oe,Be,Ze,K;if(te){let Ut=Fi[te];Oe=Ut.vertexShader,Be=Ut.fragmentShader}else{Oe=y.vertexShader,Be=y.fragmentShader;let Ut=a.getVertexShaderStage(y),At=a.getFragmentShaderStage(y);a.update(y,Ut,At),Ze=Ut.id,K=At.id}let ee=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,qe=!!y.map,yt=!!y.matcap,se=!!re,ce=!!y.aoMap,he=!!y.lightMap,ue=!!y.bumpMap&&y.wireframe===!1,ge=!!y.normalMap,Xe=!!y.displacementMap,Ge=!!y.emissiveMap,Je=!!y.metalnessMap,nt=!!y.roughnessMap,F=y.anisotropy>0,Tt=y.clearcoat>0,ft=y.dispersion>0,C=y.retroreflectivity>0,b=y.iridescence>0,H=y.sheen>0,q=y.transmission>0,J=F&&!!y.anisotropyMap,de=Tt&&!!y.clearcoatMap,pe=Tt&&!!y.clearcoatNormalMap,j=Tt&&!!y.clearcoatRoughnessMap,ie=b&&!!y.iridescenceMap,_e=b&&!!y.iridescenceThicknessMap,ke=H&&!!y.sheenColorMap,Me=H&&!!y.sheenRoughnessMap,ye=!!y.specularMap,ze=!!y.specularColorMap,Ye=!!y.specularIntensityMap,st=q&&!!y.transmissionMap,O=q&&!!y.thicknessMap,ve=!!y.gradientMap,ne=!!y.alphaMap,be=y.alphaTest>0,Te=!!y.alphaHash,ae=!!y.extensions,Ve=mi;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Le={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Oe,fragmentShader:Be,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:yt,envMap:se,envMapMode:se&&re.mapping,envMapCubeUVHeight:Z,aoMap:ce,lightMap:he,bumpMap:ue,normalMap:ge,displacementMap:Xe,emissiveMap:Ge,normalMapObjectSpace:ge&&y.normalMapType===B0,normalMapTangentSpace:ge&&y.normalMapType===fl,packedNormalMap:ge&&y.normalMapType===fl&&DE(y.normalMap.format),metalnessMap:Je,roughnessMap:nt,anisotropy:F,anisotropyMap:J,clearcoat:Tt,clearcoatMap:de,clearcoatNormalMap:pe,clearcoatRoughnessMap:j,dispersion:ft,retroreflection:C,iridescence:b,iridescenceMap:ie,iridescenceThicknessMap:_e,sheen:H,sheenColorMap:ke,sheenRoughnessMap:Me,specularMap:ye,specularColorMap:ze,specularIntensityMap:Ye,transmission:q,transmissionMap:st,thicknessMap:O,gradientMap:ve,opaque:y.transparent===!1&&y.blending===bo&&y.alphaToCoverage===!1,alphaMap:ne,alphaTest:be,alphaHash:Te,combine:y.combine,mapUv:qe&&p(y.map.channel),aoMapUv:ce&&p(y.aoMap.channel),lightMapUv:he&&p(y.lightMap.channel),bumpMapUv:ue&&p(y.bumpMap.channel),normalMapUv:ge&&p(y.normalMap.channel),displacementMapUv:Xe&&p(y.displacementMap.channel),emissiveMapUv:Ge&&p(y.emissiveMap.channel),metalnessMapUv:Je&&p(y.metalnessMap.channel),roughnessMapUv:nt&&p(y.roughnessMap.channel),anisotropyMapUv:J&&p(y.anisotropyMap.channel),clearcoatMapUv:de&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Me&&p(y.sheenRoughnessMap.channel),specularMapUv:ye&&p(y.specularMap.channel),specularColorMapUv:ze&&p(y.specularColorMap.channel),specularIntensityMapUv:Ye&&p(y.specularIntensityMap.channel),transmissionMapUv:st&&p(y.transmissionMap.channel),thicknessMapUv:O&&p(y.thicknessMap.channel),alphaMapUv:ne&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||F),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(qe||ne),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&ge===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:le,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:Ge&&y.emissiveMap.isVideoTexture===!0&&rt.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qt,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ae&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&y.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function m(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(w,y),_(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function g(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function E(y){let w=f[y.type],R;if(w){let P=Fi[w];R=Ao.clone(P.uniforms)}else R=y.uniforms;return R}function v(y,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new LE(i,w,y,s),c.push(R),h.set(w,R)),R}function S(y){if(--y.usedTimes===0){let w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){a.remove(y)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:A}}function UE(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function OE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Mg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let _=i[e];return _===void 0?(_={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},i[e]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=p,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=g),e++,_}function l(d,f,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let E=a(d,f,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):t.push(E)}function c(d,f,p,x,m,g){let _=a(d,f,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function h(d,f){t.length>1&&t.sort(d||OE),n.length>1&&n.sort(f||bg),s.length>1&&s.sort(f||bg)}function u(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function BE(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Mg,i.set(n,[o])):s>=r.length?(o=new Mg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function kE(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new fe};break;case"SpotLight":t={position:new I,direction:new I,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function zE(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var HE=0;function VE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function GE(i){let e=new kE,t=zE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ke,o=new Ke;function a(c){let h=0,u=0,d=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,_=0,E=0,v=0,S=0,M=0,A=0,y=0,w=0,R=0;c.sort(VE);for(let N=0,k=c.length;N<k;N++){let D=c[N],B=D.color,X=D.intensity,$=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ls?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*X,u+=B.g*X,d+=B.b*X;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],X);R++}else if(D.isSunLight){let Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=re;let oe=te.getViewportCount();for(let le=0;le<oe;le++)n.sunShadowMatrix[x+le]=te.getMatrix(le),n.sunShadowCascade[x+le]=te._cascadeData[le];x+=oe,p++}n.sun[f]=Z,f++}else if(D.isDirectionalLight){let Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=Z,m++}else if(D.isSpotLight){let Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(B).multiplyScalar(X),Z.distance=$,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[_]=Z;let te=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,te.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=te.matrix,D.castShadow){let z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=re,A++}_++}else if(D.isRectAreaLight){let Z=e.get(D);Z.color.copy(B).multiplyScalar(X),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[E]=Z,E++}else if(D.isPointLight){let Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,z.shadowCameraNear=te.camera.near,z.shadowCameraFar=te.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=Z,g++}else if(D.isHemisphereLight){let Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(X),Z.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[v]=Z,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==E||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==y||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=_,n.rectArea.length=E,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-w,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=R,P.sunLength=f,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=E,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=y,P.numLightProbes=R,n.version=HE++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,E=c.length;_<E;_++){let v=c[_];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Sg(i){let e=new GE(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function o(d){t.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function WE(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Sg(i),e.set(s,[a])):r>=o.length?(a=new Sg(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var qE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XE=`uniform sampler2D shadow_pass;
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
}`,YE=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],$E=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Eg=new Ke,ml=new I,hf=new I;function KE(i,e,t){let n=new ho,s=new Q,r=new Q,o=new _t,a=new Hc,l=new Vc,c={},h=t.maxTextureSize,u={[Jn]:un,[un]:Jn,[Qt]:Qt},d=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:qE,fragmentShader:XE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Mt;p.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Re(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mr;let g=this.type;this.render=function(M,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===p0&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mr);let w=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=g!==this.type;k&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=M.length;D<B;D++){let X=M[D],$=X.shadow;if($===void 0){Ne("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let re=$.getFrameExtents();s.multiply(re),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,$.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===vo){if(X.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Gt(s.x,s.y,{format:Ls,type:en,minFilter:zt,magFilter:zt,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new Ts(s.x,s.y,zn),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Ci,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Yt,$.map.depthTexture.magFilter=Yt}else X.isPointLight?($.map=new Wh(s.x),$.map.depthTexture=new Nc(s.x,gi)):($.map=new Gt(s.x,s.y),$.map.depthTexture=new Ts(s.x,s.y,gi)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Ci,this.type===mr?($.map.depthTexture.compareFunction=Z?Hh:zh,$.map.depthTexture.minFilter=zt,$.map.depthTexture.magFilter=zt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Yt,$.map.depthTexture.magFilter=Yt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let te=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,y);for(let z=0;z<te;z++){let oe=$.getCamera(z);if(X.isPointLight){let le=$.camera,Oe=$.matrix,Be=X.distance||le.far;Be!==le.far&&(le.far=Be,le.updateProjectionMatrix()),ml.setFromMatrixPosition(X.matrixWorld),le.position.copy(ml),hf.copy(le.position),hf.add(YE[z]),le.up.copy($E[z]),le.lookAt(hf),le.updateMatrixWorld(),Oe.makeTranslation(-ml.x,-ml.y,-ml.z),Eg.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Eg,le.coordinateSystem,le.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,z),i.clear();else{z===0&&(i.setRenderTarget($.map),i.clear());let le=$.getViewport(z);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),N.viewport(o)}n=$.getFrustum(z),v(A,y,oe,X,this.type)}$.isPointLightShadow!==!0&&this.type===vo&&_($,y),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(w,R,P)};function _(M,A){let y=e.update(x);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Gt(s.x,s.y,{format:Ls,type:en}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,y,d,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,y,f,x,null)}function E(M,A,y,w){let R=null,P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,k=A.uuid,D=c[N];D===void 0&&(D={},c[N]=D);let B=D[k];B===void 0&&(B=R.clone(),D[k]=B,A.addEventListener("dispose",S)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,w===vo?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=y}return R}function v(M,A,y,w,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===vo)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let k=e.update(M),D=M.material;if(Array.isArray(D)){let B=k.groups;for(let X=0,$=B.length;X<$;X++){let re=B[X],Z=D[re.materialIndex];if(Z&&Z.visible){let te=E(M,Z,w,R);M.onBeforeShadow(i,M,A,y,k,te,re),i.renderBufferDirect(y,null,k,te,M,re),M.onAfterShadow(i,M,A,y,k,te,re)}}}else if(D.visible){let B=E(M,D,w,R);M.onBeforeShadow(i,M,A,y,k,B,null),i.renderBufferDirect(y,null,k,B,M,null),M.onAfterShadow(i,M,A,y,k,B,null)}}let N=M.children;for(let k=0,D=N.length;k<D;k++)v(N[k],A,y,w,R)}function S(M){M.target.removeEventListener("dispose",S);for(let y in c){let w=c[y],R=M.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function ZE(i,e){function t(){let O=!1,ve=new _t,ne=null,be=new _t(0,0,0,0);return{setMask:function(Te){ne!==Te&&!O&&(i.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){O=Te},setClear:function(Te,ae,Ve,Le,Ut){Ut===!0&&(Te*=Le,ae*=Le,Ve*=Le),ve.set(Te,ae,Ve,Le),be.equals(ve)===!1&&(i.clearColor(Te,ae,Ve,Le),be.copy(ve))},reset:function(){O=!1,ne=null,be.set(-1,0,0,0)}}}function n(){let O=!1,ve=!1,ne=null,be=null,Te=null;return{setReversed:function(ae){if(ve!==ae){let Ve=e.get("EXT_clip_control");ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ve=ae;let Le=Te;Te=null,this.setClear(Le)}},getReversed:function(){return ve},setTest:function(ae){ae?ee(i.DEPTH_TEST):me(i.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!O&&(i.depthMask(ae),ne=ae)},setFunc:function(ae){if(ve&&(ae=K0[ae]),be!==ae){switch(ae){case bc:i.depthFunc(i.NEVER);break;case Mc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case Qr:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case wc:i.depthFunc(i.GEQUAL);break;case Tc:i.depthFunc(i.GREATER);break;case Ac:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=ae}},setLocked:function(ae){O=ae},setClear:function(ae){Te!==ae&&(Te=ae,ve&&(ae=1-ae),i.clearDepth(ae))},reset:function(){O=!1,ne=null,be=null,Te=null,ve=!1}}}function s(){let O=!1,ve=null,ne=null,be=null,Te=null,ae=null,Ve=null,Le=null,Ut=null;return{setTest:function(At){O||(At?ee(i.STENCIL_TEST):me(i.STENCIL_TEST))},setMask:function(At){ve!==At&&!O&&(i.stencilMask(At),ve=At)},setFunc:function(At,li,Ei){(ne!==At||be!==li||Te!==Ei)&&(i.stencilFunc(At,li,Ei),ne=At,be=li,Te=Ei)},setOp:function(At,li,Ei){(ae!==At||Ve!==li||Le!==Ei)&&(i.stencilOp(At,li,Ei),ae=At,Ve=li,Le=Ei)},setLocked:function(At){O=At},setClear:function(At){Ut!==At&&(i.clearStencil(At),Ut=At)},reset:function(){O=!1,ve=null,ne=null,be=null,Te=null,ae=null,Ve=null,Le=null,Ut=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,E=null,v=null,S=null,M=null,A=null,y=new fe(0,0,0),w=0,R=!1,P=null,N=null,k=null,D=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,re=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=re>=1):Z.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=re>=2);let te=null,z={},oe=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Oe=new _t().fromArray(oe),Be=new _t().fromArray(le);function Ze(O,ve,ne,be){let Te=new Uint8Array(4),ae=i.createTexture();i.bindTexture(O,ae),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ne;Ve++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ve+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ae}let K={};K[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(Qr),ue(!1),ge(Ld),ee(i.CULL_FACE),ce(jn);function ee(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function me(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ue(O,ve){return d[O]!==ve?(i.bindFramebuffer(O,ve),d[O]=ve,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function xe(O,ve){let ne=p,be=!1;if(O){ne=f.get(ve),ne===void 0&&(ne=[],f.set(ve,ne));let Te=O.textures;if(ne.length!==Te.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ve=Te.length;ae<Ve;ae++)ne[ae]=i.COLOR_ATTACHMENT0+ae;ne.length=Te.length,be=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,be=!0);be&&i.drawBuffers(ne)}function qe(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let yt={[gr]:i.FUNC_ADD,[g0]:i.FUNC_SUBTRACT,[x0]:i.FUNC_REVERSE_SUBTRACT};yt[_0]=i.MIN,yt[y0]=i.MAX;let se={[v0]:i.ZERO,[b0]:i.ONE,[M0]:i.SRC_COLOR,[Fd]:i.SRC_ALPHA,[R0]:i.SRC_ALPHA_SATURATE,[T0]:i.DST_COLOR,[E0]:i.DST_ALPHA,[S0]:i.ONE_MINUS_SRC_COLOR,[Ud]:i.ONE_MINUS_SRC_ALPHA,[A0]:i.ONE_MINUS_DST_COLOR,[w0]:i.ONE_MINUS_DST_ALPHA,[C0]:i.CONSTANT_COLOR,[I0]:i.ONE_MINUS_CONSTANT_COLOR,[P0]:i.CONSTANT_ALPHA,[L0]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(O,ve,ne,be,Te,ae,Ve,Le,Ut,At){if(O===jn){m===!0&&(me(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),O!==m0){if(O!==g||At!==R){if((_!==gr||S!==gr)&&(i.blendEquation(i.FUNC_ADD),_=gr,S=gr),At)switch(O){case bo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nd:i.blendFunc(i.ONE,i.ONE);break;case Dd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",O);break}else switch(O){case bo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nd:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dd:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ja:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",O);break}E=null,v=null,M=null,A=null,y.set(0,0,0),w=0,g=O,R=At}return}Te=Te||ve,ae=ae||ne,Ve=Ve||be,(ve!==_||Te!==S)&&(i.blendEquationSeparate(yt[ve],yt[Te]),_=ve,S=Te),(ne!==E||be!==v||ae!==M||Ve!==A)&&(i.blendFuncSeparate(se[ne],se[be],se[ae],se[Ve]),E=ne,v=be,M=ae,A=Ve),(Le.equals(y)===!1||Ut!==w)&&(i.blendColor(Le.r,Le.g,Le.b,Ut),y.copy(Le),w=Ut),g=O,R=!1}function he(O,ve){O.side===Qt?me(i.CULL_FACE):ee(i.CULL_FACE);let ne=O.side===un;ve&&(ne=!ne),ue(ne),O.blending===bo&&O.transparent===!1?ce(jn):ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let be=O.stencilWrite;a.setTest(be),be&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):me(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function ge(O){O!==d0?(ee(i.CULL_FACE),O!==N&&(O===Ld?i.cullFace(i.BACK):O===f0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):me(i.CULL_FACE),N=O}function Xe(O){O!==k&&($&&i.lineWidth(O),k=O)}function Ge(O,ve,ne){O?(ee(i.POLYGON_OFFSET_FILL),(D!==ve||B!==ne)&&(D=ve,B=ne,o.getReversed()&&(ve=-ve),i.polygonOffset(ve,ne))):me(i.POLYGON_OFFSET_FILL)}function Je(O){O?ee(i.SCISSOR_TEST):me(i.SCISSOR_TEST)}function nt(O){O===void 0&&(O=i.TEXTURE0+X-1),te!==O&&(i.activeTexture(O),te=O)}function F(O,ve,ne){ne===void 0&&(te===null?ne=i.TEXTURE0+X-1:ne=te);let be=z[ne];be===void 0&&(be={type:void 0,texture:void 0},z[ne]=be),(be.type!==O||be.texture!==ve)&&(te!==ne&&(i.activeTexture(ne),te=ne),i.bindTexture(O,ve||K[O]),be.type=O,be.texture=ve)}function Tt(){let O=z[te];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function b(){try{i.texSubImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function de(){try{i.texStorage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function pe(){try{i.texStorage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function j(){try{i.texImage2D(...arguments)}catch(O){$e("WebGLState:",O)}}function ie(){try{i.texImage3D(...arguments)}catch(O){$e("WebGLState:",O)}}function _e(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function ke(O,ve){u[O]!==ve&&(i.pixelStorei(O,ve),u[O]=ve)}function Me(O){Oe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Oe.copy(O))}function ye(O){Be.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Be.copy(O))}function ze(O,ve){let ne=c.get(ve);ne===void 0&&(ne=new WeakMap,c.set(ve,ne));let be=ne.get(O);be===void 0&&(be=i.getUniformBlockIndex(ve,O.name),ne.set(O,be))}function Ye(O,ve){let be=c.get(ve).get(O);l.get(ve)!==be&&(i.uniformBlockBinding(ve,be,O.__bindingPointIndex),l.set(ve,be))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,z={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,_=null,E=null,v=null,S=null,M=null,A=null,y=new fe(0,0,0),w=0,R=!1,P=null,N=null,k=null,D=null,B=null,Oe.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:me,bindFramebuffer:Ue,drawBuffers:xe,useProgram:qe,setBlending:ce,setMaterial:he,setFlipSided:ue,setCullFace:ge,setLineWidth:Xe,setPolygonOffset:Ge,setScissorTest:Je,activeTexture:nt,bindTexture:F,unbindTexture:Tt,compressedTexImage2D:ft,compressedTexImage3D:C,texImage2D:j,texImage3D:ie,pixelStorei:ke,getParameter:_e,updateUBOMapping:ze,uniformBlockBinding:Ye,texStorage2D:de,texStorage3D:pe,texSubImage2D:b,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:Me,viewport:ye,reset:st}}function JE(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u=new Set,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,b){return p?new OffscreenCanvas(C,b):no("canvas")}function m(C,b,H){let q=1,J=ft(C);if((J.width>H||J.height>H)&&(q=H/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let de=Math.floor(q*J.width),pe=Math.floor(q*J.height);d===void 0&&(d=x(de,pe));let j=b?x(de,pe):d;return j.width=de,j.height=pe,j.getContext("2d").drawImage(C,0,0,de,pe),Ne("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+de+"x"+pe+")."),j}else return"data"in C&&Ne("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,b,H,q,J,de=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;q&&(pe=e.get("EXT_texture_norm16"),pe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8),H===i.UNSIGNED_SHORT&&pe&&(j=pe.R16_EXT),H===i.SHORT&&pe&&(j=pe.R16_SNORM_EXT)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),b===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8),H===i.UNSIGNED_SHORT&&pe&&(j=pe.RG16_EXT),H===i.SHORT&&pe&&(j=pe.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_SHORT&&pe&&(j=pe.RGB16_EXT),H===i.SHORT&&pe&&(j=pe.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),b===i.RGBA){let ie=de?xa:rt.getTransfer(J);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=ie===vt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&pe&&(j=pe.RGBA16_EXT),H===i.SHORT&&pe&&(j=pe.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(C,b){let H;return C?b===null||b===gi||b===Eo?H=i.DEPTH24_STENCIL8:b===zn?H=i.DEPTH32F_STENCIL8:b===So&&(H=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===gi||b===Eo?H=i.DEPTH_COMPONENT24:b===zn?H=i.DEPTH_COMPONENT32F:b===So&&(H=i.DEPTH_COMPONENT16),H}function M(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==zt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){let b=C.target;b.removeEventListener("dispose",A),w(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function y(C){let b=C.target;b.removeEventListener("dispose",y),P(b)}function w(C){let b=n.get(C);if(b.__webglInit===void 0)return;let H=C.source,q=f.get(H);if(q){let J=q[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(q).length===0&&f.delete(H)}n.remove(C)}function R(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let H=C.source,q=f.get(H);delete q[b.__cacheKey],o.memory.textures--}function P(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let J=0;J<b.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(b.__webglFramebuffer[q][J]);else i.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)i.deleteFramebuffer(b.__webglFramebuffer[q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=C.textures;for(let q=0,J=H.length;q<J;q++){let de=n.get(H[q]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(C)}let N=0;function k(){N=0}function D(){return N}function B(C){N=C}function X(){let C=N;return C>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function $(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function re(C,b){let H=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let q=C.image;if(q===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{me(H,C,b);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function Z(C,b){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){me(H,C,b);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function te(C,b){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){me(H,C,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function z(C,b){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Ue(H,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let oe={[Kn]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},le={[Yt]:i.NEAREST,[nh]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[zt]:i.LINEAR,[Mo]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Oe={[z0]:i.NEVER,[q0]:i.ALWAYS,[H0]:i.LESS,[zh]:i.LEQUAL,[V0]:i.EQUAL,[Hh]:i.GEQUAL,[G0]:i.GREATER,[W0]:i.NOTEQUAL};function Be(C,b){if(b.type===zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===zt||b.magFilter===Mo||b.magFilter===yr||b.magFilter===kn||b.minFilter===zt||b.minFilter===Mo||b.minFilter===yr||b.minFilter===kn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,oe[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,oe[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,oe[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Oe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yt||b.minFilter!==yr&&b.minFilter!==kn||b.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Ze(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));let q=b.source,J=f.get(q);J===void 0&&(J={},f.set(q,J));let de=$(b);if(de!==C.__cacheKey){J[de]===void 0&&(J[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[de].usedTimes++;let pe=J[C.__cacheKey];pe!==void 0&&(J[C.__cacheKey].usedTimes--,pe.usedTimes===0&&R(b)),C.__cacheKey=de,C.__webglTexture=J[de].texture}return H}function K(C,b,H){return Math.floor(Math.floor(C/H)/b)}function ee(C,b,H,q){let de=C.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,q,b.data);else{de.sort((ke,Me)=>ke.start-Me.start);let pe=0;for(let ke=1;ke<de.length;ke++){let Me=de[pe],ye=de[ke],ze=Me.start+Me.count,Ye=K(ye.start,b.width,4),st=K(Me.start,b.width,4);ye.start<=ze+1&&Ye===st&&K(ye.start+ye.count-1,b.width,4)===Ye?Me.count=Math.max(Me.count,ye.start+ye.count-Me.start):(++pe,de[pe]=ye)}de.length=pe+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let ke=0,Me=de.length;ke<Me;ke++){let ye=de[ke],ze=Math.floor(ye.start/4),Ye=Math.ceil(ye.count/4),st=ze%b.width,O=Math.floor(ze/b.width),ve=Ye,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,st),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,st,O,ve,ne,H,q,b.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function me(C,b,H){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);let J=Ze(C,b),de=b.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+H);let pe=n.get(de);if(de.version!==pe.__version||J===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ne=rt.getPrimaries(rt.workingColorSpace),be=b.colorSpace===ss?null:rt.getPrimaries(b.colorSpace),Te=b.colorSpace===ss||ne===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ie=m(b.image,!1,s.maxTextureSize);ie=Tt(b,ie);let _e=r.convert(b.format,b.colorSpace),ke=r.convert(b.type),Me=v(b.internalFormat,_e,ke,b.normalized,b.colorSpace,b.isVideoTexture);Be(q,b);let ye,ze=b.mipmaps,Ye=b.isVideoTexture!==!0,st=pe.__version===void 0||J===!0,O=de.dataReady,ve=M(b,ie);if(b.isDepthTexture)Me=S(b.format===Ps,b.type),st&&(Ye?t.texStorage2D(i.TEXTURE_2D,1,Me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,_e,ke,null));else if(b.isDataTexture)if(ze.length>0){Ye&&st&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ze[0].width,ze[0].height);for(let ne=0,be=ze.length;ne<be;ne++)ye=ze[ne],Ye?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ye.width,ye.height,_e,ke,ye.data):t.texImage2D(i.TEXTURE_2D,ne,Me,ye.width,ye.height,0,_e,ke,ye.data);b.generateMipmaps=!1}else Ye?(st&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ie.width,ie.height),O&&ee(b,ie,_e,ke)):t.texImage2D(i.TEXTURE_2D,0,Me,ie.width,ie.height,0,_e,ke,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ze[0].width,ze[0].height,ie.depth);for(let ne=0,be=ze.length;ne<be;ne++)if(ye=ze[ne],b.format!==Hn)if(_e!==null)if(Ye){if(O)if(b.layerUpdates.size>0){let Te=jd(ye.width,ye.height,b.format,b.type);for(let ae of b.layerUpdates){let Ve=ye.data.subarray(ae*Te/ye.data.BYTES_PER_ELEMENT,(ae+1)*Te/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ae,ye.width,ye.height,1,_e,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ye.width,ye.height,ie.depth,_e,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Me,ye.width,ye.height,ie.depth,0,ye.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ye.width,ye.height,ie.depth,_e,ke,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Me,ye.width,ye.height,ie.depth,0,_e,ke,ye.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ye&&st&&t.texStorage2D(i.TEXTURE_2D,ve,Me,ze[0].width,ze[0].height);for(let ne=0,be=ze.length;ne<be;ne++)ye=ze[ne],b.format!==Hn?_e!==null?Ye?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ye.width,ye.height,_e,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Me,ye.width,ye.height,0,ye.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ye.width,ye.height,_e,ke,ye.data):t.texImage2D(i.TEXTURE_2D,ne,Me,ye.width,ye.height,0,_e,ke,ye.data)}else if(b.isDataArrayTexture)if(Ye){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Me,ie.width,ie.height,ie.depth),O)if(b.layerUpdates.size>0){let ne=jd(ie.width,ie.height,b.format,b.type);for(let be of b.layerUpdates){let Te=ie.data.subarray(be*ne/ie.data.BYTES_PER_ELEMENT,(be+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,ie.width,ie.height,1,_e,ke,Te)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,ke,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ie.width,ie.height,ie.depth,0,_e,ke,ie.data);else if(b.isData3DTexture)Ye?(st&&t.texStorage3D(i.TEXTURE_3D,ve,Me,ie.width,ie.height,ie.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,ke,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ie.width,ie.height,ie.depth,0,_e,ke,ie.data);else if(b.isFramebufferTexture){if(st)if(Ye)t.texStorage2D(i.TEXTURE_2D,ve,Me,ie.width,ie.height);else{let ne=ie.width,be=ie.height;for(let Te=0;Te<ve;Te++)t.texImage2D(i.TEXTURE_2D,Te,Me,ne,be,0,_e,ke,null),ne>>=1,be>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),u.add(b),ne.onpaint=be=>{let Te=be.changedElements;for(let ae of u)Te.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Te=i.RGBA,ae=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,ae,Ve,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ye&&st){let ne=ft(ze[0]);t.texStorage2D(i.TEXTURE_2D,ve,Me,ne.width,ne.height)}for(let ne=0,be=ze.length;ne<be;ne++)ye=ze[ne],Ye?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e,ke,ye):t.texImage2D(i.TEXTURE_2D,ne,Me,_e,ke,ye);b.generateMipmaps=!1}else if(Ye){if(st){let ne=ft(ie);t.texStorage2D(i.TEXTURE_2D,ve,Me,ne.width,ne.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,ke,ie)}else t.texImage2D(i.TEXTURE_2D,0,Me,_e,ke,ie);g(b)&&_(q),pe.__version=de.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ue(C,b,H){if(b.image.length!==6)return;let q=Ze(C,b),J=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let de=n.get(J);if(J.version!==de.__version||q===!0){t.activeTexture(i.TEXTURE0+H);let pe=rt.getPrimaries(rt.workingColorSpace),j=b.colorSpace===ss?null:rt.getPrimaries(b.colorSpace),ie=b.colorSpace===ss||pe===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let _e=b.isCompressedTexture||b.image[0].isCompressedTexture,ke=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ae=0;ae<6;ae++)!_e&&!ke?Me[ae]=m(b.image[ae],!0,s.maxCubemapSize):Me[ae]=ke?b.image[ae].image:b.image[ae],Me[ae]=Tt(b,Me[ae]);let ye=Me[0],ze=r.convert(b.format,b.colorSpace),Ye=r.convert(b.type),st=v(b.internalFormat,ze,Ye,b.normalized,b.colorSpace),O=b.isVideoTexture!==!0,ve=de.__version===void 0||q===!0,ne=J.dataReady,be=M(b,ye);Be(i.TEXTURE_CUBE_MAP,b);let Te;if(_e){O&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,ye.width,ye.height);for(let ae=0;ae<6;ae++){Te=Me[ae].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){let Le=Te[Ve];b.format!==Hn?ze!==null?O?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Le.width,Le.height,ze,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,st,Le.width,Le.height,0,Le.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Le.width,Le.height,ze,Ye,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,st,Le.width,Le.height,0,ze,Ye,Le.data)}}}else{if(Te=b.mipmaps,O&&ve){Te.length>0&&be++;let ae=ft(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ke){O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me[ae].width,Me[ae].height,ze,Ye,Me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,st,Me[ae].width,Me[ae].height,0,ze,Ye,Me[ae].data);for(let Ve=0;Ve<Te.length;Ve++){let Ut=Te[Ve].image[ae].image;O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Ut.width,Ut.height,ze,Ye,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,st,Ut.width,Ut.height,0,ze,Ye,Ut.data)}}else{O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ze,Ye,Me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,st,ze,Ye,Me[ae]);for(let Ve=0;Ve<Te.length;Ve++){let Le=Te[Ve];O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,ze,Ye,Le.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,st,ze,Ye,Le.image[ae])}}}g(b)&&_(i.TEXTURE_CUBE_MAP),de.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function xe(C,b,H,q,J,de){let pe=r.convert(H.format,H.colorSpace),j=r.convert(H.type),ie=v(H.internalFormat,pe,j,H.normalized,H.colorSpace),_e=n.get(b),ke=n.get(H);if(ke.__renderTarget=b,!_e.__hasExternalTextures){let Me=Math.max(1,b.width>>de),ye=Math.max(1,b.height>>de);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,de,ie,Me,ye,b.depth,0,pe,j,null):t.texImage2D(J,de,ie,Me,ye,0,pe,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),nt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,ke.__webglTexture,0,Je(b)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,ke.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(C,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let q=b.depthTexture,J=q&&q.isDepthTexture?q.type:null,de=S(b.stencilBuffer,J),pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;nt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(b),de,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(b),de,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,de,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,C)}else{let q=b.textures;for(let J=0;J<q.length;J++){let de=q[J],pe=r.convert(de.format,de.colorSpace),j=r.convert(de.type),ie=v(de.internalFormat,pe,j,de.normalized,de.colorSpace);nt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je(b),ie,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je(b),ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function yt(C,b,H){let q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(b.depthTexture);if(J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Be(i.TEXTURE_CUBE_MAP,b.depthTexture);let _e=r.convert(b.depthTexture.format),ke=r.convert(b.depthTexture.type),Me;b.depthTexture.format===Ci?Me=i.DEPTH_COMPONENT24:b.depthTexture.format===Ps&&(Me=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Me,b.width,b.height,0,_e,ke,null)}}else re(b.depthTexture,0);let de=J.__webglTexture,pe=Je(b),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ie=b.depthTexture.format===Ps?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ci)nt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,de,0);else if(b.depthTexture.format===Ps)nt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,de,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){let b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)yt(b.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?yt(b.__webglFramebuffer[0],C,0):yt(b.__webglFramebuffer,C,0)}else if(H){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),qe(b.__webglDepthbuffer[q],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,de)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),qe(b.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,b,H){let q=n.get(C);b!==void 0&&xe(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&se(C)}function he(C){let b=C.texture,H=n.get(C),q=n.get(b);C.addEventListener("dispose",y);let J=C.textures,de=C.isWebGLCubeRenderTarget===!0,pe=J.length>1;if(pe||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,o.memory.textures++),de){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let ie=0;ie<b.mipmaps.length;ie++)H.__webglFramebuffer[j][ie]=i.createFramebuffer()}else H.__webglFramebuffer[j]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)H.__webglFramebuffer[j]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(pe)for(let j=0,ie=J.length;j<ie;j++){let _e=n.get(J[j]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&nt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let ie=J[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let _e=r.convert(ie.format,ie.colorSpace),ke=r.convert(ie.type),Me=v(ie.internalFormat,_e,ke,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),ye=Je(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Be(i.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)xe(H.__webglFramebuffer[j][ie],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else xe(H.__webglFramebuffer[j],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(b)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let j=0,ie=J.length;j<ie;j++){let _e=J[j],ke=n.get(_e),Me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ke.__webglTexture),Be(Me,_e),xe(H.__webglFramebuffer,C,_e,i.COLOR_ATTACHMENT0+j,Me,0),g(_e)&&_(Me)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Be(j,b),b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)xe(H.__webglFramebuffer[ie],C,b,i.COLOR_ATTACHMENT0,j,ie);else xe(H.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,j,0);g(b)&&_(j),t.unbindTexture()}C.depthBuffer&&se(C)}function ue(C){let b=C.textures;for(let H=0,q=b.length;H<q;H++){let J=b[H];if(g(J)){let de=E(C),pe=n.get(J).__webglTexture;t.bindTexture(de,pe),_(de),t.unbindTexture()}}}let ge=[],Xe=[];function Ge(C){if(C.samples>0){if(nt(C)===!1){let b=C.textures,H=C.width,q=C.height,J=i.COLOR_BUFFER_BIT,de=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(C),j=b.length>1;if(j)for(let _e=0;_e<b.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ie=C.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let _e=0;_e<b.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[_e]);let ke=n.get(b[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,J,i.NEAREST),l===!0&&(ge.length=0,Xe.length=0,ge.push(i.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ge.push(de),Xe.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let _e=0;_e<b.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,pe.__webglColorRenderbuffer[_e]);let ke=n.get(b[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Je(C){return Math.min(s.maxSamples,C.samples)}function nt(C){let b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Tt(C,b){let H=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==hn&&H!==ss&&(rt.getTransfer(H)===vt?(q!==Hn||J!==Pn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",H)),b}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=re,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=z,this.rebindTextures=ce,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jE(i,e){function t(n,s=ss){let r,o=rt.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===sh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bd)return i.BYTE;if(n===kd)return i.SHORT;if(n===So)return i.UNSIGNED_SHORT;if(n===ih)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===en)return i.HALF_FLOAT;if(n===Vd)return i.ALPHA;if(n===Gd)return i.RGB;if(n===Hn)return i.RGBA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Ps)return i.DEPTH_STENCIL;if(n===oh)return i.RED;if(n===ah)return i.RED_INTEGER;if(n===Ls)return i.RG;if(n===lh)return i.RG_INTEGER;if(n===ch)return i.RGBA_INTEGER;if(n===ol||n===al||n===ll||n===cl)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===al)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===al)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ll)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===hh||n===uh||n===dh||n===fh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===hh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ph||n===mh||n===gh||n===xh||n===_h||n===hl||n===yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ph||n===mh)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===gh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===xh)return r.COMPRESSED_R11_EAC;if(n===_h)return r.COMPRESSED_SIGNED_R11_EAC;if(n===hl)return r.COMPRESSED_RG11_EAC;if(n===yh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vh||n===bh||n===Mh||n===Sh||n===Eh||n===wh||n===Th||n===Ah||n===Rh||n===Ch||n===Ih||n===Ph||n===Lh||n===Nh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Th)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ah)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ch)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ih)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ph)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nh)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dh||n===Fh||n===Uh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Dh)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===Bh||n===ul||n===kh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Oh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var QE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ew=`
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

}`,_f=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nn({vertexShader:QE,fragmentShader:ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends Ii{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new _f,g={},_=t.getContextAttributes(),E=null,v=null,S=[],M=[],A=new Q,y=null,w=null,R=new ln;R.viewport=new _t;let P=new ln;P.viewport=new _t;let N=[R,P],k=new Jc,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=S[K];return ee===void 0&&(ee=new oo,S[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=S[K];return ee===void 0&&(ee=new oo,S[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=S[K];return ee===void 0&&(ee=new oo,S[K]=ee),ee.getHandSpace()};function X(K){let ee=M.indexOf(K.inputSource);if(ee===-1)return;let me=S[ee];me!==void 0&&(me.update(K.inputSource,K.frame,c||o),me.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",re);for(let K=0;K<S.length;K++){let ee=M[K];ee!==null&&(M[K]=null,S[K].disconnect(ee))}D=null,B=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(E),f=null,d=null,u=null,s=null,v=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",re),_.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,xe=null;_.depth&&(xe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?Ps:Ci,Ue=_.stencil?Eo:gi);let qe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Gt(d.textureWidth,d.textureHeight,{format:Hn,type:Pn,depthTexture:new Ts(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Gt(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(K){for(let ee=0;ee<K.removed.length;ee++){let me=K.removed[ee],Ue=M.indexOf(me);Ue>=0&&(M[Ue]=null,S[Ue].disconnect(me))}for(let ee=0;ee<K.added.length;ee++){let me=K.added[ee],Ue=M.indexOf(me);if(Ue===-1){for(let qe=0;qe<S.length;qe++)if(qe>=M.length){M.push(me),Ue=qe;break}else if(M[qe]===null){M[qe]=me,Ue=qe;break}if(Ue===-1)break}let xe=S[Ue];xe&&xe.connect(me)}}let Z=new I,te=new I;function z(K,ee,me){Z.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);let Ue=Z.distanceTo(te),xe=ee.projectionMatrix.elements,qe=me.projectionMatrix.elements,yt=xe[14]/(xe[10]-1),se=xe[14]/(xe[10]+1),ce=(xe[9]+1)/xe[5],he=(xe[9]-1)/xe[5],ue=(xe[8]-1)/xe[0],ge=(qe[8]+1)/qe[0],Xe=yt*ue,Ge=yt*ge,Je=Ue/(-ue+ge),nt=Je*-ue;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(nt),K.translateZ(Je),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let F=yt+Je,Tt=se+Je,ft=Xe-nt,C=Ge+(Ue-nt),b=ce*se/Tt*F,H=he*se/Tt*F;K.projectionMatrix.makePerspective(ft,C,b,H,F,Tt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,me=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(me=m.depthFar)),k.near=P.near=R.near=ee,k.far=P.far=R.far=me,(D!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,B=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Ue=K.parent,xe=k.cameras;oe(k,Ue);for(let qe=0;qe<xe.length;qe++)oe(xe[qe],Ue);xe.length===2?z(k,R,P):k.projectionMatrix.copy(R.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),le(K,k,Ue)};function le(K,ee,me){me===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(me.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=sr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return g[K]};let Oe=null;function Be(K,ee){if(h=ee.getViewerPose(c||o),p=ee,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ue=!1;me.length!==k.cameras.length&&(k.cameras.length=0,Ue=!0);for(let se=0;se<me.length;se++){let ce=me[se],he=null;if(f!==null)he=f.getViewport(ce);else{let ge=u.getViewSubImage(d,ce);he=ge.viewport,se===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let ue=N[se];ue===void 0&&(ue=new ln,ue.layers.enable(se),ue.viewport=new _t,N[se]=ue),ue.matrix.fromArray(ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(he.x,he.y,he.width,he.height),se===0&&(k.matrix.copy(ue.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ue===!0&&k.cameras.push(ue)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let se=u.getDepthInformation(me[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let se=0;se<me.length;se++){let ce=me[se].camera;if(ce){let he=g[ce];he||(he=new Ca,g[ce]=he);let ue=u.getCameraImage(ce);he.sourceTexture=ue}}}}for(let me=0;me<S.length;me++){let Ue=M[me],xe=S[me];Ue!==null&&xe!==void 0&&xe.update(Ue,ee,c||o)}Oe&&Oe(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let Ze=new wg;Ze.setAnimationLoop(Be),this.setAnimationLoop=function(K){Oe=K},this.dispose=function(){}}},tw=new Ke,Pg=new et;Pg.set(-1,0,0,0,1,0,0,0,1);function nw(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Kd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,E,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===un&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===un&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),E=_.envMap,v=_.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(tw.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Pg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=E*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iw(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(m(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",_));let A=S.program;n.updateUBOMapping(v,A);let y=e.render.frame;r[v.id]!==y&&(d(v),r[v.id]=y)}function h(v){let S=u();v.__bindingPointIndex=S;let M=i.createBuffer(),A=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=s[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,w=M.length;y<w;y++){let R=M[y];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)f(R[P],y,P,A);else f(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,S,M,A){if(x(v,S,M,A)===!0){let y=v.__offset,w=v.value;if(Array.isArray(w)){let R=0;for(let P=0;P<w.length;P++){let N=w[P],k=g(N);p(N,v.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function x(v,S,M,A){let y=v.value,w=S+"_"+M;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{let R=A[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(v){let S=v.uniforms,M=0,A=16;for(let w=0,R=S.length;w<R;w++){let P=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,k=P.length;N<k;N++){let D=P[N],B=Array.isArray(D.value)?D.value:[D.value];for(let X=0,$=B.length;X<$;X++){let re=B[X],Z=g(re),te=M%A,z=te%Z.boundary,oe=te+z;M+=z,oe!==0&&A-oe<Z.storage&&(M+=A-oe),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=Z.storage}}}let y=M%A;return y>0&&(M+=A-y),v.__size=M,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",v),S}function _(v){let S=v.target;S.removeEventListener("dispose",_);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function E(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var sw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function rw(){return Di===null&&(Di=new co(sw,16,16,Ls,en),Di.name="DFG_LUT",Di.minFilter=zt,Di.magFilter=zt,Di.wrapS=Yn,Di.wrapT=Yn,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var qh=class{constructor(e={}){let{canvas:t=X0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Pn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([ch,lh,ah]),g=new Set([Pn,gi,So,Eo,sh,rh]),_=new Uint32Array(4),E=new Int32Array(4),v=new I,S=null,M=null,A=[],y=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,k=null,D=null,B=null;this._outputColorSpace=ot;let X=0,$=0,re=null,Z=-1,te=null,z=new _t,oe=new _t,le=null,Oe=new fe(0),Be=0,Ze=t.width,K=t.height,ee=1,me=null,Ue=null,xe=new _t(0,0,Ze,K),qe=new _t(0,0,Ze,K),yt=!1,se=new ho,ce=!1,he=!1,ue=new Ke,ge=new I,Xe=new _t,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function nt(){return re===null?ee:1}let F=n;function Tt(T,U){return t.getContext(T,U)}let ft,C,b,H,q,J,de,pe,j,ie,_e,ke,Me,ye,ze,Ye,st,O,ve,ne,be,Te,ae;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",At,!1),t.addEventListener("webglcontextcreationerror",li,!1),F===null){let U="webgl2";if(F=Tt(U,T),F===null)throw Tt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(T){throw t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",li,!1),$e("WebGLRenderer: "+T.message),T}function Ve(){ft=new d1(F),ft.init(),be=new jE(F,ft),C=new n1(F,ft,e,be),b=new ZE(F,ft),C.reversedDepthBuffer&&d&&b.buffers.depth.setReversed(!0),k=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),H=new m1(F),q=new UE,J=new JE(F,ft,b,q,C,be,H),de=new u1(R),pe=new xb(F),Te=new e1(F,pe),j=new f1(F,pe,H,Te),ie=new x1(F,j,pe,Te,H),O=new g1(F,C,J),ze=new i1(q),_e=new FE(R,de,ft,C,Te,ze),ke=new nw(R,q),Me=new BE,ye=new WE(ft),st=new QS(R,de,b,ie,p,l),Ye=new KE(R,ie,C),ae=new iw(F,H,C,b),ve=new t1(F,ft,H),ne=new p1(F,ft,H),H.programs=_e.programs,R.capabilities=C,R.extensions=ft,R.properties=q,R.renderLists=Me,R.shadowMap=Ye,R.state=b,R.info=H}x!==Pn&&(w=new y1(x,t.width,t.height,a,s,r));let Le=new yf(R,F);this.xr=Le,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Ze,K,!1))},this.getSize=function(T){return T.set(Ze,K)},this.setSize=function(T,U,Y=!0){if(Le.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}Ze=T,K=U,t.width=Math.floor(T*ee),t.height=Math.floor(U*ee),Y===!0&&(t.style.width=T+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Ze*ee,K*ee).floor()},this.setDrawingBufferSize=function(T,U,Y){Ze=T,K=U,ee=Y,t.width=Math.floor(T*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===Pn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,U,Y,G){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,U,Y,G),b.viewport(z.copy(xe).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(qe)},this.setScissor=function(T,U,Y,G){T.isVector4?qe.set(T.x,T.y,T.z,T.w):qe.set(T,U,Y,G),b.scissor(oe.copy(qe).multiplyScalar(ee).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(T){b.setScissorTest(yt=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){Ue=T},this.getClearColor=function(T){return T.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Y=!0){let G=0;if(T){let W=!1;if(re!==null){let we=re.texture.format;W=m.has(we)}if(W){let we=re.texture.type,Ce=g.has(we),Ee=st.getClearColor(),Ie=st.getClearAlpha(),Fe=Ee.r,lt=Ee.g,pt=Ee.b;Ce?(_[0]=Fe,_[1]=lt,_[2]=pt,_[3]=Ie,F.clearBufferuiv(F.COLOR,0,_)):(E[0]=Fe,E[1]=lt,E[2]=pt,E[3]=Ie,F.clearBufferiv(F.COLOR,0,E))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",At,!1),t.removeEventListener("webglcontextcreationerror",li,!1),st.dispose(),Me.dispose(),ye.dispose(),q.dispose(),de.dispose(),ie.dispose(),Te.dispose(),ae.dispose(),_e.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",hm),Le.removeEventListener("sessionend",um),Zs.stop()};function Ut(T){T.preventDefault(),_a("WebGLRenderer: Context Lost."),P=!0}function At(){_a("WebGLRenderer: Context Restored."),P=!1;let T=H.autoReset,U=Ye.enabled,Y=Ye.autoUpdate,G=Ye.needsUpdate,W=Ye.type;Ve(),H.autoReset=T,Ye.enabled=U,Ye.autoUpdate=Y,Ye.needsUpdate=G,Ye.type=W}function li(T){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ei(T){let U=T.target;U.removeEventListener("dispose",Ei),Ly(U)}function Ly(T){Ny(T),q.remove(T)}function Ny(T){let U=q.get(T).programs;U!==void 0&&(U.forEach(function(Y){_e.releaseProgram(Y)}),T.isShaderMaterial&&_e.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,G,W,we){U===null&&(U=Ge);let Ce=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ee=Uy(T,U,Y,G,W);b.setMaterial(G,Ce);let Ie=Y.index,Fe=1;if(G.wireframe===!0){if(Ie=j.getWireframeAttribute(Y),Ie===void 0)return;Fe=2}let lt=Y.drawRange,pt=Y.attributes.position,Pe=lt.start*Fe,Rt=(lt.start+lt.count)*Fe;we!==null&&(Pe=Math.max(Pe,we.start*Fe),Rt=Math.min(Rt,(we.start+we.count)*Fe)),Ie!==null?(Pe=Math.max(Pe,0),Rt=Math.min(Rt,Ie.count)):pt!=null&&(Pe=Math.max(Pe,0),Rt=Math.min(Rt,pt.count));let Jt=Rt-Pe;if(Jt<0||Jt===1/0)return;Te.setup(W,G,Ee,Y,Ie);let Bt,Dt=ve;if(Ie!==null&&(Bt=pe.get(Ie),Dt=ne,Dt.setIndex(Bt)),W.isMesh)G.wireframe===!0?(b.setLineWidth(G.wireframeLinewidth*nt()),Dt.setMode(F.LINES)):Dt.setMode(F.TRIANGLES);else if(W.isLine){let pn=G.linewidth;pn===void 0&&(pn=1),b.setLineWidth(pn*nt()),W.isLineSegments?Dt.setMode(F.LINES):W.isLineLoop?Dt.setMode(F.LINE_LOOP):Dt.setMode(F.LINE_STRIP)}else W.isPoints?Dt.setMode(F.POINTS):W.isSprite&&Dt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Dt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let pn=W._multiDrawStarts,Ae=W._multiDrawCounts,Sn=W._multiDrawCount,xt=Ie?pe.get(Ie).bytesPerElement:1,qn=q.get(G).currentProgram.getUniforms();for(let wi=0;wi<Sn;wi++)qn.setValue(F,"_gl_DrawID",wi),Dt.render(pn[wi]/xt,Ae[wi])}else if(W.isInstancedMesh)Dt.renderInstances(Pe,Jt,W.count);else if(Y.isInstancedBufferGeometry){let pn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ae=Math.min(Y.instanceCount,pn);Dt.renderInstances(Pe,Jt,Ae)}else Dt.render(Pe,Jt)};function cm(T,U,Y,G){N!==null&&T.isNodeMaterial&&N.setObject(G,T),ce===!0&&ze.setState(T,Y,!1),T.transparent===!0&&T.side===Qt&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,Hl(T,U,G),T.side=Jn,T.needsUpdate=!0,Hl(T,U,G),T.side=Qt):Hl(T,U,G)}this.compile=function(T,U,Y=null){Y===null&&(Y=T),N!==null&&N.renderStart(T,U,Y),M=ye.get(Y),M.init(U),y.push(M),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),N!==null&&N.updateLights(M.state.lightsArray),he=this.localClippingEnabled,ce=ze.init(this.clippingPlanes,he),ce===!0&&ze.setGlobalState(this.clippingPlanes,U),N!==null&&Ye.render(M.state.shadowsArray,Y,U);let G=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let we=W.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){let Ee=we[Ce];cm(Ee,Y,U,W),G.add(Ee)}else cm(we,Y,U,W),G.add(we)}),M=y.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(T,U,Y=null){let G=this.compile(T,U,Y);return new Promise(W=>{function we(){if(G.forEach(function(Ce){let Ie=q.get(Ce).currentProgram;(Ie===void 0||Ie.isReady())&&G.delete(Ce)}),G.size===0){W(T);return}setTimeout(we,10)}ft.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ku=null;function Dy(T){ku&&ku(T)}function hm(){Zs.stop()}function um(){Zs.start()}let Zs=new wg;Zs.setAnimationLoop(Dy),typeof self<"u"&&Zs.setContext(self),this.setAnimationLoop=function(T){ku=T,Le.setAnimationLoop(T),T===null?Zs.stop():Zs.start()},Le.addEventListener("sessionstart",hm),Le.addEventListener("sessionend",um),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,U);let Y=Le.enabled===!0&&Le.isPresenting===!0,G=w!==null&&(re===null||Y)&&w.begin(R,re);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(U),U=Le.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,re),M=ye.get(T,y.length),M.init(U),M.state.textureUnits=J.getTextureUnits(),y.push(M),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(ue,fi,U.reversedDepth),he=this.localClippingEnabled,ce=ze.init(this.clippingPlanes,he),S=Me.get(T,A.length),S.init(),A.push(S),Le.enabled===!0&&Le.isPresenting===!0){let Ce=R.xr.getDepthSensingMesh();Ce!==null&&zu(Ce,U,-1/0,R.sortObjects)}zu(T,U,0,R.sortObjects),S.finish(),N!==null&&N.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(me,Ue),Je=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Je&&st.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&ze.beginShadows();let W=M.state.shadowsArray;if(Ye.render(W,T,U),ce===!0&&ze.endShadows(),(G&&w.hasRenderPass())===!1){let Ce=S.opaque,Ee=S.transmissive;if(M.setupLights(),U.isArrayCamera){let Ie=U.cameras;if(Ee.length>0)for(let Fe=0,lt=Ie.length;Fe<lt;Fe++){let pt=Ie[Fe];fm(Ce,Ee,T,pt)}Je&&st.render(T);for(let Fe=0,lt=Ie.length;Fe<lt;Fe++){let pt=Ie[Fe];dm(S,T,pt,pt.viewport)}}else Ee.length>0&&fm(Ce,Ee,T,U),Je&&st.render(T),dm(S,T,U)}re!==null&&$===0&&(J.updateMultisampleRenderTarget(re),J.updateRenderTargetMipmap(re)),G&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),Te.resetDefaultState(),Z=-1,te=null,y.pop(),y.length>0?(M=y[y.length-1],J.setTextureUnits(M.state.textureUnits),ce===!0&&ze.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,N!==null&&N.renderEnd()};function zu(T,U,Y,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(se)){G&&Xe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);let Ce=ie.update(T),Ee=T.material;Ee.visible&&S.push(T,Ce,Ee,Y,Xe.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(se))){let Ce=ie.update(T),Ee=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xe.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Xe.copy(Ce.boundingSphere.center)),Xe.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Ee)){let Ie=Ce.groups;for(let Fe=0,lt=Ie.length;Fe<lt;Fe++){let pt=Ie[Fe],Pe=Ee[pt.materialIndex];Pe&&Pe.visible&&S.push(T,Ce,Pe,Y,Xe.z,pt,U)}}else Ee.visible&&S.push(T,Ce,Ee,Y,Xe.z,null,U)}}let we=T.children;for(let Ce=0,Ee=we.length;Ce<Ee;Ce++)zu(we[Ce],U,Y,G)}function dm(T,U,Y,G){let{opaque:W,transmissive:we,transparent:Ce}=T;M.setupLightsView(Y),ce===!0&&ze.setGlobalState(R.clippingPlanes,Y),G&&b.viewport(z.copy(G)),W.length>0&&zl(W,U,Y),we.length>0&&zl(we,U,Y),Ce.length>0&&zl(Ce,U,Y),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function fm(T,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let Pe=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new Gt(1,1,{generateMipmaps:!0,type:Pe?en:Pn,minFilter:kn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}let we=M.state.transmissionRenderTarget[G.id],Ce=G.viewport||z;we.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);let Ee=R.getRenderTarget(),Ie=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(Oe),Be=R.getClearAlpha(),Be<1&&R.setClearColor(16777215,.5),R.clear(),Je&&st.render(Y);let lt=R.toneMapping;R.toneMapping=mi;let pt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),ce===!0&&ze.setGlobalState(R.clippingPlanes,G),zl(T,Y,G),J.updateMultisampleRenderTarget(we),J.updateRenderTargetMipmap(we),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Rt=0,Jt=U.length;Rt<Jt;Rt++){let Bt=U[Rt],{object:Dt,geometry:pn,material:Ae,group:Sn}=Bt;if(Ae.side===Qt&&Dt.layers.test(G.layers)){let xt=Ae.side;Ae.side=un,Ae.needsUpdate=!0,pm(Dt,Y,G,pn,Ae,Sn),Ae.side=xt,Ae.needsUpdate=!0,Pe=!0}}Pe===!0&&(J.updateMultisampleRenderTarget(we),J.updateRenderTargetMipmap(we))}R.setRenderTarget(Ee,Ie,Fe),R.setClearColor(Oe,Be),pt!==void 0&&(G.viewport=pt),R.toneMapping=lt}function zl(T,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,we=T.length;W<we;W++){let Ce=T[W],{object:Ee,geometry:Ie,group:Fe}=Ce,lt=Ce.material;lt.allowOverride===!0&&G!==null&&(lt=G),Ee.layers.test(Y.layers)&&pm(Ee,U,Y,Ie,lt,Fe)}}function pm(T,U,Y,G,W,we){N!==null&&W.isNodeMaterial&&N.setObject(T,W),T.onBeforeRender(R,U,Y,G,W,we),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,U,Y,G,T,we),W.transparent===!0&&W.side===Qt&&W.forceSinglePass===!1?(W.side=un,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,T,we),W.side=Jn,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,T,we),W.side=Qt):R.renderBufferDirect(Y,U,G,W,T,we),T.onAfterRender(R,U,Y,G,W,we)}function Hl(T,U,Y){U.isScene!==!0&&(U=Ge);let G=q.get(T),W=M.state.lights,we=M.state.shadowsArray,Ce=W.state.version,Ee=_e.getParameters(T,W.state,we,U,Y,M.state.lightProbeGridArray),Ie=_e.getProgramCacheKey(Ee),Fe=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let lt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=de.get(T.envMap||G.environment,lt),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",Ei),Fe=new Map,G.programs=Fe);let pt=Fe.get(Ie);if(pt!==void 0){if(G.currentProgram===pt&&G.lightsStateVersion===Ce)return gm(T,Ee),pt}else Ee.uniforms=_e.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Y,Ee),T.onBeforeCompile(Ee,R),pt=_e.acquireProgram(Ee,Ie),Fe.set(Ie,pt),G.uniforms=Ee.uniforms;let Pe=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ze.uniform),gm(T,Ee),G.needsLights=By(T),G.lightsStateVersion=Ce,G.needsLights&&(Pe.ambientLightColor.value=W.state.ambient,Pe.lightProbe.value=W.state.probe,Pe.sunLights.value=W.state.sun,Pe.sunLightShadows.value=W.state.sunShadow,Pe.directionalLights.value=W.state.directional,Pe.directionalLightShadows.value=W.state.directionalShadow,Pe.spotLights.value=W.state.spot,Pe.spotLightShadows.value=W.state.spotShadow,Pe.rectAreaLights.value=W.state.rectArea,Pe.ltc_1.value=W.state.rectAreaLTC1,Pe.ltc_2.value=W.state.rectAreaLTC2,Pe.pointLights.value=W.state.point,Pe.pointLightShadows.value=W.state.pointShadow,Pe.hemisphereLights.value=W.state.hemi,Pe.sunShadowMatrix.value=W.state.sunShadowMatrix,Pe.sunShadowCascade.value=W.state.sunShadowCascade,Pe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pe.spotLightMatrix.value=W.state.spotLightMatrix,Pe.spotLightMap.value=W.state.spotLightMap,Pe.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=pt,G.uniformsList=null,pt}function mm(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Io.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function gm(T,U){let Y=q.get(T);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Fy(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=T.length;Y<G;Y++){let W=T[Y];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Uy(T,U,Y,G,W){U.isScene!==!0&&(U=Ge),J.resetTextureUnits();let we=U.fog,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,Ee=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:rt.workingColorSpace,Ie=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Fe=de.get(G.envMap||Ce,Ie),lt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!Y.morphAttributes.position,Rt=!!Y.morphAttributes.normal,Jt=!!Y.morphAttributes.color,Bt=mi;G.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Bt=R.toneMapping);let Dt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pn=Dt!==void 0?Dt.length:0,Ae=q.get(G),Sn=M.state.lights;if(ce===!0&&(he===!0||T!==te)){let Ot=T===te&&G.id===Z;ze.setState(G,T,Ot)}let xt=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Sn.state.version||Ae.outputColorSpace!==Ee||W.isBatchedMesh&&Ae.batching===!1||!W.isBatchedMesh&&Ae.batching===!0||W.isBatchedMesh&&Ae.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ae.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ae.instancing===!1||!W.isInstancedMesh&&Ae.instancing===!0||W.isSkinnedMesh&&Ae.skinning===!1||!W.isSkinnedMesh&&Ae.skinning===!0||W.isInstancedMesh&&Ae.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ae.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ae.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ae.instancingMorph===!1&&W.morphTexture!==null||Ae.envMap!==Fe||G.fog===!0&&Ae.fog!==we||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ze.numPlanes||Ae.numIntersection!==ze.numIntersection)||Ae.vertexAlphas!==lt||Ae.vertexTangents!==pt||Ae.morphTargets!==Pe||Ae.morphNormals!==Rt||Ae.morphColors!==Jt||Ae.toneMapping!==Bt||Ae.morphTargetsCount!==pn||!!Ae.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ae.__version=G.version);let qn=Ae.currentProgram;xt===!0&&(qn=Hl(G,U,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,qn,Ae));let wi=!1,ms=!1,Lr=!1,Pt=qn.getUniforms(),Xt=Ae.uniforms;if(b.useProgram(qn.program)&&(wi=!0,ms=!0,Lr=!0),G.id!==Z&&(Z=G.id,ms=!0),Ae.needsLights){let Ot=Fy(M.state.lightProbeGridArray,W);Ae.lightProbeGrid!==Ot&&(Ae.lightProbeGrid=Ot,ms=!0)}if(wi||te!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pt.setValue(F,"projectionMatrix",T.projectionMatrix),Pt.setValue(F,"viewMatrix",T.matrixWorldInverse);let xs=Pt.map.cameraPosition;xs!==void 0&&xs.setValue(F,ge.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Pt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),te!==T&&(te=T,ms=!0,Lr=!0)}if(Ae.needsLights&&(Sn.state.sunShadowMap.length>0&&Pt.setValue(F,"sunShadowMap",Sn.state.sunShadowMap,J),Sn.state.directionalShadowMap.length>0&&Pt.setValue(F,"directionalShadowMap",Sn.state.directionalShadowMap,J),Sn.state.spotShadowMap.length>0&&Pt.setValue(F,"spotShadowMap",Sn.state.spotShadowMap,J),Sn.state.pointShadowMap.length>0&&Pt.setValue(F,"pointShadowMap",Sn.state.pointShadowMap,J)),W.isSkinnedMesh){Pt.setOptional(F,W,"bindMatrix"),Pt.setOptional(F,W,"bindMatrixInverse");let Ot=W.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Pt.setValue(F,"boneTexture",Ot.boneTexture,J))}W.isBatchedMesh&&(Pt.setOptional(F,W,"batchingTexture"),Pt.setValue(F,"batchingTexture",W._matricesTexture,J),Pt.setOptional(F,W,"batchingIdTexture"),Pt.setValue(F,"batchingIdTexture",W._indirectTexture,J),Pt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Pt.setValue(F,"batchingColorTexture",W._colorsTexture,J));let gs=Y.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&O.update(W,Y,qn),(ms||Ae.receiveShadow!==W.receiveShadow)&&(Ae.receiveShadow=W.receiveShadow,Pt.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=rw()),ms){if(Pt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&Oy(Xt,Lr),we&&G.fog===!0&&ke.refreshFogUniforms(Xt,we),ke.refreshMaterialUniforms(Xt,G,ee,K,M.state.transmissionRenderTarget[T.id]),Ae.needsLights&&Ae.lightProbeGrid){let Ot=Ae.lightProbeGrid;Xt.probesSH.value=Ot.texture,Xt.probesMin.value.copy(Ot.boundingBox.min),Xt.probesMax.value.copy(Ot.boundingBox.max),Xt.probesResolution.value.copy(Ot.resolution)}Io.upload(F,mm(Ae),Xt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Io.upload(F,mm(Ae),Xt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pt.setValue(F,"center",W.center),Pt.setValue(F,"modelViewMatrix",W.modelViewMatrix),Pt.setValue(F,"normalMatrix",W.normalMatrix),Pt.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ot=G.uniformsGroups;for(let xs=0,Nr=Ot.length;xs<Nr;xs++){let _m=Ot[xs];ae.update(_m,qn),ae.bind(_m,qn)}}return qn}function Oy(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function By(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(T,U,Y){let G=q.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=U,q.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Y=q.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){re=T,X=U,$=Y;let G=null,W=!1,we=!1;if(T){let Ee=q.get(T);if(Ee.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,Ee.__webglFramebuffer),z.copy(T.viewport),oe.copy(T.scissor),le=T.scissorTest,b.viewport(z),b.scissor(oe),b.setScissorTest(le),Z=-1;return}else if(Ee.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(Ee.__hasExternalTextures)J.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let lt=T.depthTexture;if(Ee.__boundDepthTexture!==lt){if(lt!==null&&q.has(lt)&&(T.width!==lt.image.width||T.height!==lt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Fe=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?G=Fe[U][Y]:G=Fe[U],W=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?G=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[Y]:G=Fe,z.copy(T.viewport),oe.copy(T.scissor),le=T.scissorTest}else z.copy(xe).multiplyScalar(ee).floor(),oe.copy(qe).multiplyScalar(ee).floor(),le=yt;if(Y!==0&&(G=k),b.bindFramebuffer(F.FRAMEBUFFER,G)&&b.drawBuffers(T,G),b.viewport(z),b.scissor(oe),b.setScissorTest(le),W){let Ee=q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,Y)}else if(we){let Ee=U;for(let Ie=0;Ie<T.textures.length;Ie++){let Fe=q.get(T.textures[Ie]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,Y,Ee)}}else if(T!==null&&Y!==0){let Ee=q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ee.__webglTexture,Y)}Z=-1};function xm(T){let U=q.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=C.textureFormatReadable(T.format),U.__typeReadable=C.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Y,G,W,we,Ce,Ee=0){if(!(T&&T.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){b.bindFramebuffer(F.FRAMEBUFFER,Ie);try{let Fe=T.textures[Ee],lt=Fe.format,pt=Fe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ee);let Pe=xm(Fe);if(Pe.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&Y>=0&&Y<=T.height-W&&F.readPixels(U,Y,G,W,be.convert(lt),be.convert(pt),we)}finally{let Fe=re!==null?q.get(re).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,U,Y,G,W,we,Ce,Ee=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie)if(U>=0&&U<=T.width-G&&Y>=0&&Y<=T.height-W){b.bindFramebuffer(F.FRAMEBUFFER,Ie);let Fe=T.textures[Ee],lt=Fe.format,pt=Fe.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ee);let Pe=xm(Fe);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Rt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Rt),F.bufferData(F.PIXEL_PACK_BUFFER,we.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,W,be.convert(lt),be.convert(pt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Jt=re!==null?q.get(re).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Jt);let Bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $0(F,Bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Rt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,we),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Rt),F.deleteSync(Bt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(T.image.width*G),we=Math.floor(T.image.height*G),Ce=U!==null?U.x:0,Ee=U!==null?U.y:0;J.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Ce,Ee,W,we),b.unbindTexture()},this.copyTextureToTexture=function(T,U,Y=null,G=null,W=0,we=0){let Ce,Ee,Ie,Fe,lt,pt,Pe,Rt,Jt,Bt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(Y!==null)Ce=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Ie=Y.isBox3?Y.max.z-Y.min.z:1,Fe=Y.min.x,lt=Y.min.y,pt=Y.isBox3?Y.min.z:0;else{let Xt=Math.pow(2,-W);Ce=Math.floor(Bt.width*Xt),Ee=Math.floor(Bt.height*Xt),T.isDataArrayTexture?Ie=Bt.depth:T.isData3DTexture?Ie=Math.floor(Bt.depth*Xt):Ie=1,Fe=0,lt=0,pt=0}G!==null?(Pe=G.x,Rt=G.y,Jt=G.z):(Pe=0,Rt=0,Jt=0);let Dt=be.convert(U.format),pn=be.convert(U.type),Ae;U.isData3DTexture?(J.setTexture3D(U,0),Ae=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Ae=F.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Ae=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Sn=b.getParameter(F.UNPACK_ROW_LENGTH),xt=b.getParameter(F.UNPACK_IMAGE_HEIGHT),qn=b.getParameter(F.UNPACK_SKIP_PIXELS),wi=b.getParameter(F.UNPACK_SKIP_ROWS),ms=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,Bt.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Bt.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),b.pixelStorei(F.UNPACK_SKIP_ROWS,lt),b.pixelStorei(F.UNPACK_SKIP_IMAGES,pt);let Lr=T.isDataArrayTexture||T.isData3DTexture,Pt=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Xt=q.get(T),gs=q.get(U),Ot=q.get(Xt.__renderTarget),xs=q.get(gs.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,Ot.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,xs.__webglFramebuffer);for(let Nr=0;Nr<Ie;Nr++)Lr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(T).__webglTexture,W,pt+Nr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(U).__webglTexture,we,Jt+Nr)),F.blitFramebuffer(Fe,lt,Ce,Ee,Pe,Rt,Ce,Ee,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||q.has(T)){let Xt=q.get(T),gs=q.get(U);b.bindFramebuffer(F.READ_FRAMEBUFFER,D),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Ot=0;Ot<Ie;Ot++)Lr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Xt.__webglTexture,W,pt+Ot):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Xt.__webglTexture,W),Pt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,gs.__webglTexture,we,Jt+Ot):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,gs.__webglTexture,we),W!==0?F.blitFramebuffer(Fe,lt,Ce,Ee,Pe,Rt,Ce,Ee,F.COLOR_BUFFER_BIT,F.NEAREST):Pt?F.copyTexSubImage3D(Ae,we,Pe,Rt,Jt+Ot,Fe,lt,Ce,Ee):F.copyTexSubImage2D(Ae,we,Pe,Rt,Fe,lt,Ce,Ee);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ae,we,Pe,Rt,Jt,Ce,Ee,Ie,Dt,pn,Bt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,we,Pe,Rt,Jt,Ce,Ee,Ie,Dt,Bt.data):F.texSubImage3D(Ae,we,Pe,Rt,Jt,Ce,Ee,Ie,Dt,pn,Bt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,we,Pe,Rt,Ce,Ee,Dt,pn,Bt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,we,Pe,Rt,Bt.width,Bt.height,Dt,Bt.data):F.texSubImage2D(F.TEXTURE_2D,we,Pe,Rt,Ce,Ee,Dt,pn,Bt);b.pixelStorei(F.UNPACK_ROW_LENGTH,Sn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),b.pixelStorei(F.UNPACK_SKIP_PIXELS,qn),b.pixelStorei(F.UNPACK_SKIP_ROWS,wi),b.pixelStorei(F.UNPACK_SKIP_IMAGES,ms),we===0&&U.generateMipmaps&&F.generateMipmap(Ae),b.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){X=0,$=0,re=null,b.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}};var $h=class extends bt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Q(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},No=new I,Lg=new Ke,Ng=new Ke,Dg=new I,Fg=new I,Kh=class{constructor(e={}){let t=this,n,s,r,o,a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Lg.copy(x.matrixWorldInverse),Ng.multiplyMatrices(x.projectionMatrix,Lg),h(p,p,x),this.sortObjects&&f(p)},this.setSize=function(p,x){n=p,s=x,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=x+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,m=p.children.length;x<m;x++)c(p.children[x])}function h(p,x,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){No.setFromMatrixPosition(p.matrixWorld),No.applyMatrix4(Ng);let g=No.z>=-1&&No.z<=1&&p.layers.test(m.layers)===!0,_=p.element;if(_.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(t,x,m);let v=100*p.center.x,S=100*p.center.y;_.style.transformOrigin=`${v}% ${S}%`;let M=-p.rotation2D,A=No.x*r+r,y=-No.y*o+o;_.style.transform=`translate(${-v}%, ${-S}%) translate(${A}px, ${y}px) rotate(${M}rad)`,_.parentNode!==l&&l.appendChild(_),p.onAfterRender(t,x,m)}let E={distanceToCameraSquared:u(m,p)};a.objects.set(p,E)}for(let g=0,_=p.children.length;g<_;g++)h(p.children[g],x,m)}function u(p,x){return Dg.setFromMatrixPosition(p.matrixWorld),Fg.setFromMatrixPosition(x.matrixWorld),Dg.distanceToSquared(Fg)}function d(p){let x=[];return p.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function f(p){let x=d(p).sort(function(g,_){if(g.renderOrder!==_.renderOrder)return _.renderOrder-g.renderOrder;let E=a.objects.get(g).distanceToCameraSquared,v=a.objects.get(_).distanceToCameraSquared;return E-v}),m=x.length;for(let g=0,_=x.length;g<_;g++)x[g].element.style.zIndex=m-g}}};function vf(i,e){if(e===Wd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===wo||e===dl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===wo)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Ug(i){let e=new Map,t=new Map,n=i.clone();return Og(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Og(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Og(i.children[n],e.children[n],t)}var Fo=class extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Af(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Ef(t)}),this.register(function(t){return new Zh(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zh(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new zf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=is.extractUrlBase(e);o=is.resolveURL(c,this.path)}else o=is.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _o(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vg){try{o[ut.KHR_BINARY_GLTF]=new Hf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new $f(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ut.KHR_MATERIALS_UNLIT:o[u]=new wf;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[u]=new Vf(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[u]=new Gf;break;case ut.KHR_MESH_QUANTIZATION:o[u]=new Wf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ow(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Zt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ef=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new fe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],hn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Cs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new pr(h),c.distance=u;break;case"spot":c=new fr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ui(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},wf=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let s=[];e.color=new fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],hn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ot))}return Promise.all(s)}},Tf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(r,r)}return Promise.all(s)}},Rf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Cf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},If=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],hn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ot)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Pf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Lf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(r[0],r[1],r[2],hn),Promise.all(s)}},Nf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Df=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(r[0],r[1],r[2],hn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ot)),Promise.all(s)}},Ff=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Uf=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Zt(this.parser,e,this.name)!==null?Kt:null}extendMaterialParams(e,t){let n=Zt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Of=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Bf=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},kf=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Zh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},zf=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Qn.TRIANGLES&&c.mode!==Qn.TRIANGLE_STRIP&&c.mode!==Qn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let x=new Ke,m=new I,g=new xn,_=new I(1,1,1),E=new ar(p.geometry,p.material,d);for(let S=0;S<d;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&_.fromBufferAttribute(l.SCALE,S),E.setMatrixAt(S,x.compose(m,g,_));let v=null;for(let S in l)if(S==="_COLOR_0"){let M=l[S];E.instanceColor=new ji(M.array,M.itemSize,M.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let A=E.geometry;v=new Mt,v.name=A.name;for(let y in A.attributes)v.setAttribute(y,A.attributes[y]);for(let y in A.morphAttributes)v.morphAttributes[y]=A.morphAttributes[y];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let y of A.groups)v.addGroup(y.start,y.count,y.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),E.geometry=v}let M=l[S];v.setAttribute(S,new ji(M.array,M.itemSize,M.normalized))}bt.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Vg="glTF",xl=12,Bg={JSON:1313821514,BIN:5130562},Hf=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,xl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-xl,r=new DataView(e,xl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Bg.JSON){let c=new Uint8Array(e,xl+o,a);this.content=n.decode(c)}else if(l===Bg.BIN){let c=xl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Xf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Xf[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Do[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let p in f.attributes){let x=f.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(f)},a,c,hn,d)})})}},Gf=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Wf=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Jh=class extends Li{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,x=p-c,m=-2*f+3*d,g=f-d,_=1-m,E=g-d+u;for(let v=0;v!==a;v++){let S=o[x+v+a],M=o[x+v+l]*h,A=o[p+v+a],y=o[p+v]*h;r[v]=_*S+E*M+m*A+g*y}return r}},aw=new xn,qf=class extends Jh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return aw.fromArray(r).normalize().toArray(r),r}},Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Do={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kg={9728:Yt,9729:zt,9984:nh,9985:Mo,9986:yr,9987:kn},zg={33071:Yn,33648:eo,10497:Kn},bf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ns={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lw={CUBICSPLINE:void 0,LINEAR:ir,STEP:nr},Mf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cw(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new It({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function Mr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ui(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hw(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function uw(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dw(i){let e,t=i.extensions&&i.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sf(t.attributes):e=i.indices+":"+Sf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Sf(i.targets[n]);return e}function Sf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Yf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fw(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var pw=new Ke,$f=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ow,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ur(this.options.manager):this.textureLoader=new $a(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _o(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Mr(r,a,s),Ui(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(is.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=bf[s.type],a=Do[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new kt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=bf[s.type],c=Do[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(f&&f!==u){let g=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,E=t.cache.get(_);E||(x=new c(a,g*f,s.count*f/h),E=new or(x,f/h),t.cache.add(_,E)),m=new Es(E,l,d%f/h,p)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new kt(x,l,p);if(s.sparse!==void 0){let g=bf.SCALAR,_=Do[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new _(o[1],E,s.sparse.count*g),M=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=S.length;A<y;A++){let w=S[A];if(m.setX(w,M[A*l]),l>=2&&m.setY(w,M[A*l+1]),l>=3&&m.setZ(w,M[A*l+2]),l>=4&&m.setW(w,M[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=kg[d.magFilter]||zt,h.minFilter=kg[d.minFilter]||kn,h.wrapS=zg[d.wrapS]||Kn,h.wrapT=zg[d.wrapT]||Kn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==zt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(x){let m=new tn(x);m.needsUpdate=!0,d(m)}),t.load(is.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ui(u,o),u.userData.mimeType=o.mimeType||fw(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new fo,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new uo,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return It}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let u=s[ut.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new fe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],hn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ot)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qt);let h=r.alphaMode||Mf.OPAQUE;if(h===Mf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==St&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==St){let u=r.emissiveFactor;a.emissive=new fe().setRGB(u[0],u[1],u[2],hn)}return r.emissiveTexture!==void 0&&o!==St&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ot)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ui(u,r),t.associations.set(u,{materials:e}),r.extensions&&Mr(s,u,r),u})}createUniqueName(e){let t=Ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Hg(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=dw(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Hg(new Mt,c,t),c.mode===Qn.TRIANGLE_STRIP?d=d.then(f=>vf(f,dl)):c.mode===Qn.TRIANGLE_FAN&&(d=d.then(f=>vf(f,wo))),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?cw(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let x=h[f],m=o[f],g,_=c[f];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0){let E=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&v?new Sa(x,_):new Re(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Qn.LINES)g=new wa(x,_);else if(m.mode===Qn.LINE_STRIP)g=new lr(x,_);else if(m.mode===Qn.LINE_LOOP)g=new Ta(x,_);else if(m.mode===Qn.POINTS)g=new Aa(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&uw(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ui(g,r),m.extensions&&Mr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Mr(s,u[0],r),u[0];let d=new it;r.extensions&&Mr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(To.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ui(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ea(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],p=s.samplers[f.sampler],x=f.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let E=0,v=d.length;E<v;E++){let S=d[E],M=f[E],A=p[E],y=x[E],w=m[E];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,M,A,y,w);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let _=new qa(r,void 0,g);return Ui(_,s),_})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,pw)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,p=u[0];h.pivot=new I().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new lo:c.length>1?h=new it:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ui(h,r),r.extensions&&Mr(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new it;n.name&&(r.name=s.createUniqueName(n.name)),Ui(r,n),n.extensions&&Mr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let d=l[h];d.parent!==null?r.add(Ug(d)):r.add(d)}let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof _n||d instanceof tn)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}Ns[r.path]===Ns.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Ns[r.path]){case Ns.weights:h=es;break;case Ns.rotation:h=ts;break;case Ns.translation:case Ns.scale:h=Rs;break;default:switch(n.itemSize){case 1:h=es;break;case 2:case 3:default:h=Rs;break}break}let u=s.interpolation!==void 0?lw[s.interpolation]:ir,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let x=new h(l[f]+"."+Ns[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Yf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ts?qf:Jh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function mw(i,e,t){let n=e.attributes,s=new $t;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let h=Yf(Do[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let x=Yf(Do[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Cn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Hg(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Xf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return rt.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),Ui(i,e),mw(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?hw(i,e.targets,t):i})}var jh=class extends rr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Ht;e.deleteAttribute("uv");let t=new It({side:un}),n=new It,s=new pr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Re(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new ar(e,n,6),a=new bt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Re(e,Uo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Re(e,Uo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Re(e,Uo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Re(e,Uo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Re(e,Uo(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Re(e,Uo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Uo(i){return new Ga({color:0,emissive:16777215,emissiveIntensity:i})}var _l=new I;function ei(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;_l.copy(e),_l[n]=0,_l.normalize();let c=.5*o/(o+a),h=1-_l.angleTo(i)/l;return Math.sign(_l[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Qh=class i extends Ht{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,x=new I,m=.5/o;for(let g=0,_=0;g<u.length;g+=3,_+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,d[g+0]=c.x,d[g+1]=c.y,d[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),f[_+0]=ei(x,c,"z","y",r,n),f[_+1]=1-ei(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),f[_+0]=1-ei(x,c,"z","y",r,n),f[_+1]=1-ei(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),f[_+0]=1-ei(x,c,"x","z",r,e),f[_+1]=ei(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[_+0]=1-ei(x,c,"x","z",r,e),f[_+1]=1-ei(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[_+0]=1-ei(x,c,"x","y",r,e),f[_+1]=1-ei(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),f[_+0]=ei(x,c,"x","y",r,e),f[_+1]=1-ei(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var eu=["#9CAA93","#86A4A1","#8E9DB1","#A49EB9","#BB9CA6","#C79F89","#CDB27F"],Gg=["sofa","media","library","meeting"],Wg=[.85,1.25],Kf="26,30,42",gw=.3,Kg=[240,235,227],at={x0:3.03,x1:8,z0:-.12,z1:4.7},xw=[[4.13,-.3],[4.13,3.9]],ti=128,Sr=64,qg=.012,Zg=["sofa","armchair_1","armchair_2","coffee_table"],_w={oak:"#D9C39F",black:"#1C1C1E",graphite:"#3A3A3C",fabric_warm:"#C9C5BE",fabric_light:"#E2DFDA",pot_white:"#F1EFEB",bar_white:"#EBE9E4"},Zf=["#ECE6DA","#D3CABA","#ABA294","#6B6762","#36363A","#BCA680"],yw=new fe(1,1,1),vw=new fe("#F2EEE6"),Jf=new fe().setRGB(210/255,210/255,210/255,ot).r,Jg=new Map,jg=.4;function Qg(i){let e=new Set,t=new Map;return i.forEach((n,s)=>{let r=bw(n.id)%eu.length;if(i.length<=eu.length)for(;e.has(r);)r=(r+1)%eu.length;e.add(r),t.set(n.id,{accent:eu[r],layout:Gg[s%Gg.length]})}),t}function bw(i){let e=2166136261;for(let t of String(i))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var Oo=new WeakMap;function ex(i){let e={layouts:new Map,glb:[],mats:[]};return i.traverse(t=>{let n=/^style_(sofa|media|library|meeting)$/.exec(t.name);if(n&&e.layouts.set(n[1],t),Zg.includes(t.name)&&e.glb.push(t),t.isMesh)for(let s of[].concat(t.material))s.userData.accent&&!e.mats.includes(s)&&e.mats.push(s)}),e}function tx(i,e){Oo.has(i)||Oo.set(i,ex(i));let t=Oo.get(i);for(let[s,r]of t.layouts)r.visible=s===e.layout;for(let s of t.glb)s.visible=e.layout==="sofa";let n=new fe(e.accent);for(let s of t.mats)Mw(s,s.userData.accent,n)}function nx(i){Oo.has(i)||Oo.set(i,ex(i));let e=Oo.get(i);return[...e.layouts.values(),...e.glb]}function Mw(i,e,t){let n=/^rug/.test(e)?t.clone().lerp(vw,.28):t;switch(e){case"rugtint":i.color.setRGB(Math.min(1,n.r/Jf),Math.min(1,n.g/Jf),Math.min(1,n.b/Jf));break;case"fabric":i.color.copy(n).multiplyScalar(.86);break;case"panelDark":i.color.copy(n).multiplyScalar(.6);break;case"book":i.color.copy(n).multiplyScalar(.78);break;case"rugEdge":i.color.copy(n).multiplyScalar(.74);break;case"screen":i.color.copy(n).lerp(yw,.2).multiplyScalar(.92);break;case"rug":(i.accentUniform?i.accentUniform.value:i.color).copy(n);break;default:i.color.copy(n)}}function ix(i,e){if(Zg.some(s=>!i.getObjectByName(s))||e.slice(0,5).some(s=>!s))return null;let t=new ep(i);Cw(t,i),Iw(t,i),Sw(t,i);let n={sofa:e.slice(0,5).map(s=>({pos:s.pos.clone(),yaw:s.yaw}))};return n.media=jf(t,i,"media",Ew),n.library=jf(t,i,"library",ww),n.meeting=jf(t,i,"meeting",Tw),{layouts:n}}var ep=class{constructor(e){this.open=e,this.found=new Map,e.traverse(t=>{if(t.isMesh)for(let n of[].concat(t.material))n.name&&!this.found.has(n.name)&&this.found.set(n.name,n)}),this.made=new Map}mat(e){return this.found.has(e)?this.found.get(e):(this.made.has(e)||this.made.set(e,new It({name:e,color:_w[e]||"#CCCCCC",roughness:.7})),this.made.get(e))}accent(e,t="fabric_light",n={}){let s=`accent_${e}`;if(!this.made.has(s)){let r=this.mat(t).clone();r.name=s,r.userData={accent:e},Object.assign(r,n),this.made.set(s,r)}return this.made.get(s)}plain(e,t,n=.75){return this.made.has(e)||this.made.set(e,new It({name:e,color:t,roughness:n})),this.made.get(e)}add(e,t,n,s,r,o,a=0,l=0,c=0){let h=new Re(t,n);return h.position.set(s,r,o),h.rotation.set(l,a,c,"YXZ"),e.add(h),h}rbox(e,t,n,s){return new Qh(e,t,n,2,Math.min(s,e/2-1e-4,t/2-1e-4,n/2-1e-4))}group(e,t,n,s=0){let r=new it;return r.position.set(t,0,n),r.rotation.y=s,e.add(r),r}};function jf(i,e,t,n){let s=new it,r=xw.map(([u,d])=>({pts:mx([...nu(u,d,.15,14),[u+.34,d+.36]]),flat:!0})),o={shadows:r,rug:null},a=n(i,s,o),l=Uw(r);Jg.set(t,{layers:l,rug:o.rug});let c=new Re(new Wt(at.x1-at.x0,at.z1-at.z0).rotateX(-Math.PI/2),new St({map:lx(l),name:`style_patch_${t}`}));c.position.set((at.x0+at.x1)/2,.002,(at.z0+at.z1)/2),c.userData.bakedName=`style_patch_${t}`,s.add(c),o.rug&&Pw(i,s,o.rug,l,t);let h=px(s,`style_${t}`);return h.visible=!1,e.add(h),a.map(([u,d,f,p])=>({pos:new I(u,d,f),yaw:p}))}function Sw(i,e){let t=new it;t.name="style_sofa";let s=e.getObjectByName("sofa").position,r=i.rbox(.42,.4,.14,.065);for(let l of[-1,1])i.add(t,r,i.accent("fabric"),s.x+l*1.16,.655,s.z-.16,-l*.22,-.3);let o=new St({name:"accent_rugtint",color:16777215,blending:ja,premultipliedAlpha:!0,transparent:!0,depthWrite:!1});o.userData={accent:"rugtint"};let a=i.add(t,new Pa(2.205,128).rotateX(-Math.PI/2),o,5.3,.0015,2.3);a.userData.keep=!0,a.renderOrder=-1,e.add(t)}function Ew(i,e,t){let n=i.mat("bar_white"),s=i.mat("oak"),r=i.mat("black"),o=3.44,a=2.45,l=2.7,c=.44,h=.46;i.add(e,i.rbox(c-.08,.05,l-.12,.01),r,o,.025,a),i.add(e,i.rbox(c,h-.08,l,.012),n,o,.05+(h-.08)/2,a),i.add(e,i.rbox(c+.02,.03,l+.02,.008),s,o,h-.015,a);for(let g of[-l/6,l/6])i.add(e,new Ht(.004,h-.12,.006),r,o+c/2+.001,.05+(h-.08)/2,a+g);t.shadows.push({pts:Ln(o,a,c,l),y0:0,y1:h,core:.75});let u=2,d=1.125,f=h+.17+d/2,p=o-.02;i.add(e,i.rbox(.22,.012,.44,.006),r,p,h+.006,a),i.add(e,i.rbox(.035,.2,.12,.01),r,p-.02,h+.1,a),i.add(e,i.rbox(.032,d+.036,u+.036,.01),r,p,f,a);let x=new St({name:"accent_screen",map:Ow(),toneMapped:!1});x.userData={accent:"screen"},i.add(e,new Wt(u,d).rotateY(Math.PI/2),x,p+.0165,f,a),t.shadows.push({pts:Ln(p,a,.032,u+.036),y0:f-d/2-.02,y1:f+d/2+.02});let m=[];for(let g of[1.75,3.3]){let E=Math.atan2(o-5.1,a-g);rx(i,e,t,5.1,g,E),m.push(sx(5.1,g,E,.48,.05))}return ox(i,e,t,6,.5,2.5,0),t.rug={kind:"rect",x0:3.9,z0:.1,x1:7.65,z1:4.25,r:.08},[[5.15,.46,.5,0],[6,.46,.5,0],[6.85,.46,.5,0],...m]}function ww(i,e,t){let n=gx(11);Xg(i,e,t,(3.12+7.35)/2,.27,7.35-3.12,0,n),Xg(i,e,t,3.3,(.45+3.75)/2,3.75-.45,Math.PI/2,n),ox(i,e,t,3.97,2.15,2.45,Math.PI/2);let s=6.7,r=2.85,o=-.69;rx(i,e,t,s,r,o),Aw(i,e,t,7.38,2.12),Rw(i,e,t,5.75,3.72);let a=i.open.getObjectByName("tree_3").clone(!0);a.position.set(6.85,.78,.27),a.scale.setScalar(.24),e.add(a);let l=new go([[0,0],[.045,0],[.06,.05],[.058,.12],[.03,.2],[.028,.23],[0,.23]].map(([c,h])=>new Q(c,h)),28);return i.add(e,l,i.mat("pot_white"),4.15,.78,.25),t.rug={kind:"round",cx:5.7,cz:2.4,r:1.72},[[3.97,.46,1.3,Math.PI/2],[3.97,.46,2.15,Math.PI/2],[3.97,.46,3,Math.PI/2],sx(s,r,o,.48,.05),[5.75,.41,3.72,.3]]}function Tw(i,e,t){let n=i.mat("oak"),s=i.mat("black"),r=5.55,o=2.05,a=2.4,l=1.1,c=.74,h=new za(tp(a,l,l/2),{depth:.024,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:16});h.rotateX(Math.PI/2),i.add(e,h,n,r,c-.006,o);for(let d of[-1,1])i.add(e,new wn(.04,.04,c-.05,20),s,r+d*.62,(c-.05)/2+.012,o),i.add(e,i.rbox(.09,.024,.74,.01),s,r+d*.62,.012,o),t.shadows.push({pts:Ln(r+d*.62,o,.08,.08),y0:0,y1:c-.04},{pts:Ln(r+d*.62,o,.09,.74),core:.55,blur:.02});t.shadows.push({pts:tp(a,l,l/2).getPoints(12).map(d=>[r+d.x,o-d.y]),y0:c-.036,y1:c});let u=[];for(let d of[r-.8,r,r+.8])tu(i,e,t,d,o-l/2-.47,0),u.push([d,.47,o-l/2-.47,0]);tu(i,e,t,r-a/2-.5,o,Math.PI/2),u.push([r-a/2-.5,.47,o,Math.PI/2]),tu(i,e,t,r+a/2+.5,o,-Math.PI/2),u.push([r+a/2+.5,.47,o,-Math.PI/2]);for(let d of[r-.42,r+.42])tu(i,e,t,d,o+l/2+.3,Math.PI);return t.rug={kind:"rect",x0:3.35,z0:.42,x1:7.75,z1:3.68,r:.08},u}function sx(i,e,t,n,s){return[i+Math.sin(t)*s,n,e+Math.cos(t)*s,t]}function rx(i,e,t,n,s,r){let o=i.open.getObjectByName("armchair_1").clone(!0);o.position.set(n,0,s),o.rotation.set(0,r,0),e.add(o),t.shadows.push({pts:Ln(n,s,.95,.9,r),y0:0,y1:.37,core:.88,blur:.04},{pts:Ln(...Er(n,s,0,-.38,r),.95,.16,r),y0:0,y1:.85},...[-.5,.5].map(a=>({pts:Ln(...Er(n,s,a,0,r),.1,.8,r),y0:0,y1:.62})))}function ox(i,e,t,n,s,r,o){let a=i.group(e,n,s,o),l=.46;i.add(a,i.rbox(r,.035,l,.012),i.mat("oak"),0,.322,0),i.add(a,i.rbox(r-.03,.115,l-.03,.05),i.mat("fabric_warm"),0,.395,0);let c=new wn(.016,.014,.305,12);for(let h of[-1,1])for(let u of[-1,1]){let d=h*(r/2-.09),f=u*(l/2-.07);i.add(a,c,i.mat("black"),d,.1525,f);let[p,x]=Er(n,s,d,f,o);t.shadows.push({pts:Ln(p,x,.03,.03),y0:0,y1:.3,core:.5,blur:.015})}t.shadows.push({pts:Ln(n,s,r,l,o),y0:.305,y1:.452,core:.22,blur:.1})}function tu(i,e,t,n,s,r){let o=i.group(e,n,s,r),a=i.mat("graphite"),l=i.mat("black");i.add(o,i.rbox(.48,.07,.46,.03),a,0,.43,.01),i.add(o,i.rbox(.46,.33,.05,.022),a,0,.73,-.215,0,-.1);let c=new wn(.011,.011,.395,10);for(let u of[-1,1])for(let d of[-1,1])i.add(o,c,l,u*.2,.1975,d*.18),t.shadows.push({pts:Ln(...Er(n,s,u*.2,d*.18,r),.024,.024),y0:0,y1:.395,core:.45,blur:.012});let h=new wn(.009,.009,.16,8);for(let u of[-1,1])i.add(o,h,l,u*.18,.54,-.205);t.shadows.push({pts:Ln(...Er(n,s,0,.01,r),.48,.46,r),y0:.395,y1:.465,core:.16,blur:.08},{pts:Ln(...Er(n,s,0,-.215,r),.46,.05,r),y0:.565,y1:.895})}function Xg(i,e,t,n,s,r,o,a){let l=i.group(e,n,s,o),c=.36,h=.78,u=.022,d=i.mat("bar_white");i.add(l,i.rbox(r-.05,.05,c-.06,.008),i.mat("black"),0,.025,-.015),i.add(l,i.rbox(r,u,c,.004),d,0,.05+u/2,0),i.add(l,i.rbox(r+.012,.03,c+.012,.008),i.mat("oak"),0,h-.015,0),i.add(l,i.rbox(r,h-.08,.012,.003),d,0,.05+(h-.08)/2,-c/2+.006);let f=Math.max(1,Math.round(r/.82)),p=r/f;for(let m=0;m<=f;m++)i.add(l,i.rbox(u,h-.08,c,.004),d,-r/2+u/2+m*(r-u)/f,.05+(h-.08)/2,0);let x=.05+u+(h-.08-u)/2;i.add(l,i.rbox(r-u,u,c-.015,.004),d,0,x,.0075);for(let m=0;m<f;m++){let g=-r/2+m*p+u,_=g+p-u;Yg(i,l,g,_,.05+u,x-u/2-(.05+u),c,a),Yg(i,l,g,_,x+u/2,h-.03-(x+u/2),c,a)}t.shadows.push({pts:Ln(n,s,r,c,o),y0:0,y1:h,core:.72,blur:.03})}function Yg(i,e,t,n,s,r,o,a){let l=()=>a()<.12?i.accent("book","fabric_light",{roughness:.75}):i.plain(`book_${Math.floor(a()*Zf.length)}`,Zf[Math.floor(a()*Zf.length)]),c=-o/2+.016;if(a()<.16){let d=s;for(let f=0,p=2+Math.floor(a()*3);f<p;f++){let x=.028+a()*.014,m=.2+a()*.05,g=.16+a()*.05;i.add(e,new Ht(m,x,g),l(),t+.04+m/2+(a()-.5)*.02,d+x/2,c+g/2,(a()-.5)*.12),d+=x}return}let h=n-.008-(a()<.55?.1+a()*.3:0),u=t+.006+a()*.05;for(;;){let d=.02+a()*.024,f=Math.min(r-.03,.19+a()*.11),p=.16+a()*.07;if(u+d>h)break;i.add(e,new Ht(d,f,p),l(),u+d/2,s+f/2,c+p/2),u+=d+(a()<.12?.006:.0015)}}function Aw(i,e,t,n,s){let r=i.mat("black");i.add(e,new wn(.15,.16,.018,32),r,n,.009,s),i.add(e,new wn(.011,.011,1.3,10),r,n,.018+.65,s),i.add(e,new wn(.16,.19,.26,40),i.mat("fabric_light"),n,1.43,s),t.shadows.push({pts:nu(n,s,.16,16),y0:0,y1:.02,core:.5,blur:.02},{pts:Ln(n,s,.024,.024),y0:0,y1:1.3},{pts:nu(n,s,.19,16),y0:1.3,y1:1.56})}function Rw(i,e,t,n,s){let r=[[0,0],[.27,0],[.295,.02],[.31,.12],[.31,.3],[.295,.375],[.26,.405],[0,.41]];i.add(e,new go(r.map(([o,a])=>new Q(o,a)),40),i.accent("fabric"),n,0,s),t.shadows.push({pts:nu(n,s,.31,20),y0:0,y1:.41,core:.82,blur:.04})}function Cw(i,e){let t=new it,n=1.26,s=2.05,r=3.35,o=1.33,a=-8,l=12,c=.062;i.add(t,i.rbox(.018,s,n,.006),i.accent("panelDark"),a+.009,o,r);let h=(n-.04-l*c)/(l-1),u=i.rbox(.026,s-.04,c,.008);for(let f=0;f<l;f++)i.add(t,u,i.accent("panel","fabric_light",{roughness:.9}),a+.018+.013,o,r-n/2+.02+c/2+f*(c+h));let d=px(t,"style_panel");e.add(d)}function Iw(i,e){let t=e.getObjectByName("tree_1");t&&t.traverse(n=>{n.isMesh&&n.material.name==="pot_white"&&(n.material=i.accent("pot","pot_white"))})}function Pw(i,e,t,n,s){let r,o,a,l,c;t.kind==="round"?(o=t.cx,a=t.cz,l=c=t.r*2,r=new As().absarc(0,0,t.r,0,Math.PI*2,!1)):(o=(t.x0+t.x1)/2,a=(t.z0+t.z1)/2,l=t.x1-t.x0,c=t.z1-t.z0,r=tp(l,c,t.r));let h={x0:o-l/2,x1:o+l/2,z0:a-c/2,z1:a+c/2},u=new Va(r,40),d=u.attributes.position,f=u.attributes.uv;for(let g=0;g<f.count;g++)f.setXY(g,d.getX(g)/l+.5,d.getY(g)/c+.5);u.rotateX(-Math.PI/2);let p=new St({name:`style_rug_${s}`,map:ax(t,h,n)});p.userData={accent:"rug"};let x=i.add(e,u,p,o,qg,a);x.userData.bakedName=`style_rug_${s}`;let m=r.getPoints(40).map(g=>[g.x,-g.y]);i.add(e,kw(m,qg),i.accent("rugEdge","fabric_light",{roughness:1,side:Jn}),o,0,a)}function Lw(i){return i.kind==="round"?{x0:i.cx-i.r,x1:i.cx+i.r,z0:i.cz-i.r,z1:i.cz+i.r}:{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1}}function ax(i,e,t,n=null){let s=Math.round((e.x1-e.x0)*ti),r=Math.round((e.z1-e.z0)*ti);return np(s,r,o=>{Nw(o,s,r,i,e,t,n?jg:1),n&&(o.globalCompositeOperation="multiply",o.drawImage(ux(n,e),0,0,s,r),o.globalCompositeOperation="source-over")})}function Nw(i,e,t,n,s,r,o){i.fillStyle="rgb(247,247,246)",i.fillRect(0,0,e,t),dx(i,e,t,7,5);let a=.18*ti;i.strokeStyle="rgba(0,0,0,0.07)",i.lineWidth=1.5,i.beginPath(),n.kind==="round"?i.arc(e/2,t/2,e/2-a,0,Math.PI*2):zw(i,a,a,e-a*2,t-a*2,Math.max(2,n.r*ti-a*.3)),i.stroke(),fx(i,r,s,o)}function lx(i,e=null){let t=Math.round((at.x1-at.x0)*ti),n=Math.round((at.z1-at.z0)*ti);return np(t,n,s=>{e?s.drawImage(ux(e,at),0,0,t,n):(s.fillStyle=`rgb(${Kg.join(",")})`,s.fillRect(0,0,t,n)),dx(s,t,n,3,0),s.fillStyle="rgba(60,50,40,0.035)";for(let r=-8;r<=8;r+=1.6)r>at.x0&&r<at.x1&&s.fillRect(Math.round((r-at.x0)*ti),0,1,n);for(let r=-6;r<=6;r+=1.5)r>at.z0&&r<at.z1&&s.fillRect(0,Math.round((r-at.z0)*ti),t,1);fx(s,i,at,e?jg:1)})}function cx(i){let e=new Map,t=Dw(i);if(!t)return e;let n=(s,r)=>t(s,r).map((o,a)=>Math.min(255,o/Kg[a]*255));for(let[s,r]of Jg)e.set(`style_patch_${s}`,lx(r.layers,t)),r.rug&&e.set(`style_rug_${s}`,ax(r.rug,Lw(r.rug),r.layers,n));return e}function Dw(i){let s=yl(128,96),r=s.getContext("2d",{willReadFrequently:!0});try{r.drawImage(i,0,0,128,96)}catch{return null}let o=r.getImageData(0,0,128,96).data,a=(u,d)=>{let f=Math.min(127,Math.max(0,Math.floor((u+8)*8))),x=(Math.min(95,Math.max(0,Math.floor((6-d)*8)))*128+f)*4;return[o[x],o[x+1],o[x+2]]},l=[];for(let u=0;u<=1.0001;u+=.025)for(let d of[.18,.4]){let f=at.x0+u*(at.x1-.12-at.x0),p=at.z0+u*(at.z1-at.z0);for(let[x,m]of[[at.x0-d,p],[f,at.z0-d],[f,at.z1+d]])l.push({x:x-5.5,z:m-2.3,c:a(x,m)})}let c=u=>u[0]*.3+u[1]*.55+u[2]*.15,h=null;for(let u=0;u<4&&l.length>=12;u++){h=[0,1,2].map(f=>Fw(l,f));let d=h;l=l.filter(f=>c(f.c)>=c($g(d,f.x,f.z))*.93)}return h&&((u,d)=>$g(h,u-5.5,d-2.3).map(f=>Math.max(0,Math.min(255,f))))}var hx=(i,e)=>[1,i,e,i*i,e*e,i*e],$g=(i,e,t)=>i.map(n=>hx(e,t).reduce((s,r,o)=>s+r*n[o],0));function Fw(i,e){let n=Array.from({length:6},()=>new Array(7).fill(0));for(let s of i){let r=hx(s.x,s.z);for(let o=0;o<6;o++){for(let a=0;a<6;a++)n[o][a]+=r[o]*r[a];n[o][6]+=r[o]*s.c[e]}}for(let s=0;s<6;s++)n[s][s]+=1e-6;for(let s=0;s<6;s++){let r=s;for(let o=s+1;o<6;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);[n[s],n[r]]=[n[r],n[s]];for(let o=0;o<6;o++)if(o!==s){let a=n[o][s]/n[s][s];for(let l=s;l<=6;l++)n[o][l]-=a*n[s][l]}}return n.map((s,r)=>s[6]/s[r])}function ux(i,e){let n=Math.max(2,Math.round((e.x1-e.x0)*16)),s=Math.max(2,Math.round((e.z1-e.z0)*16)),r=yl(n,s),o=r.getContext("2d"),a=o.createImageData(n,s);for(let l=0,c=0;l<s;l++)for(let h=0;h<n;h++,c+=4){let u=i(e.x0+(h+.5)/16,e.z0+(l+.5)/16);a.data[c]=u[0],a.data[c+1]=u[1],a.data[c+2]=u[2],a.data[c+3]=255}return o.putImageData(a,0,0),r}function dx(i,e,t,n,s){let r=i.getImageData(0,0,e,t),o=r.data,a=gx(3);for(let l=0,c=0;l<t;l++){let h=s?l&1?s*.5:-s*.5:0;for(let u=0;u<e;u++,c+=4){let d=(a()-.5)*n+h;o[c]+=d,o[c+1]+=d,o[c+2]+=d}}i.putImageData(r,0,0)}function Uw(i){let e=Math.round((at.x1-at.x0)*Sr),t=Math.round((at.z1-at.z0)*Sr),n=yl(e,t),s=yl(e,t),r=n.getContext("2d"),o=s.getContext("2d"),a=(l,c)=>[(l-at.x0)*Sr,(c-at.z0)*Sr];for(let l of i){if(l.flat)Qf(r,l.pts,a,.07*Sr,`rgb(${Kf})`);else if(l.y1>0){let c=[l.y0,l.y1].flatMap(h=>l.pts.map(([u,d])=>[u+Wg[0]*h,d+Wg[1]*h]));Qf(r,mx(c),a,(.035+.17*l.y1)*Sr,`rgb(${Kf})`)}l.core&&Qf(o,l.pts,a,(l.blur??.03)*Sr,`rgba(${Kf},${l.core})`)}return{plume:n,ao:s}}function fx(i,e,t,n=1){let s=(at.x0-t.x0)*ti,r=(at.z0-t.z0)*ti,o=(at.x1-at.x0)*ti,a=(at.z1-at.z0)*ti;i.save(),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=gw*n,i.drawImage(e.plume,s,r,o,a),i.globalAlpha=n,i.drawImage(e.ao,s,r,o,a),i.restore()}function Qf(i,e,t,n,s){let r=n>.5?2e4:0;i.save(),r?(i.shadowColor=s,i.shadowBlur=n,i.shadowOffsetX=r,i.fillStyle="#000"):i.fillStyle=s,i.beginPath(),e.forEach(([o,a],l)=>{let[c,h]=t(o,a);l?i.lineTo(c-r,h):i.moveTo(c-r,h)}),i.closePath(),i.fill(),i.restore()}function Ow(){return np(640,360,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t*.66);n.addColorStop(0,"#202020"),n.addColorStop(.7,"#8C8C8C"),n.addColorStop(1,"#B4B4B4"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=i.createRadialGradient(e*.64,t*.58,0,e*.64,t*.58,t*.42);s.addColorStop(0,"rgba(255,255,255,0.95)"),s.addColorStop(.08,"rgba(255,255,255,0.75)"),s.addColorStop(.1,"rgba(255,255,255,0.3)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),[[.6,"#6E6E6E","#555555",.05],[.7,"#474747","#333333",.07],[.82,"#2A2A2A","#181818",.06]].forEach(([a,l,c,h],u)=>{let d=i.createLinearGradient(0,t*a,0,t);d.addColorStop(0,l),d.addColorStop(1,c),i.fillStyle=d,i.beginPath(),i.moveTo(0,t);for(let f=0;f<=e;f+=8)i.lineTo(f,t*(a+h*Math.sin(f/e*Math.PI*(1.3+u*.7)+u*1.9)+h*.4*Math.sin(f/e*Math.PI*4.1+u)));i.lineTo(e,t),i.closePath(),i.fill()});let o=i.createLinearGradient(0,0,e*.6,t);o.addColorStop(0,"rgba(255,255,255,0.06)"),o.addColorStop(.5,"rgba(255,255,255,0.015)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,e,t)})}function px(i,e){let t=new it;t.name=e,i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(r=>{if(r.isMesh){if(r.material.map||r.userData.keep){s.push(r);return}n.has(r.material)||n.set(r.material,[]),n.get(r.material).push([r.geometry,r.matrixWorld])}});for(let[r,o]of n)t.add(new Re(Bw(o),r));for(let r of s)r.matrixWorld.decompose(r.position,r.quaternion,r.scale),r.removeFromParent(),t.add(r);return t}function Bw(i){let e=i.map(([a,l])=>{let c=a.index?a.toNonIndexed():a.clone();for(let h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);return c.applyMatrix4(l)}),t=e.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of e)n.set(a.attributes.position.array,r),s.set(a.attributes.normal.array,r),r+=a.attributes.position.count*3,a.dispose();let o=new Mt;return o.setAttribute("position",new kt(n,3)),o.setAttribute("normal",new kt(s,3)),o.computeBoundingSphere(),o}function kw(i,e){let t=[],n=[],s=i.reduce((a,l)=>a+l[0],0)/i.length,r=i.reduce((a,l)=>a+l[1],0)/i.length;for(let a=0;a<i.length;a++){let[l,c]=i[a],[h,u]=i[(a+1)%i.length],d=h-l,f=u-c;if(Math.hypot(d,f)<1e-6)continue;let p=f,x=-d;p*((l+h)/2-s)+x*((c+u)/2-r)<0&&(p=-p,x=-x);let m=Math.hypot(p,x);p/=m,x/=m;let g=[l,0,c],_=[l,e,c],E=[h,0,u],v=[h,e,u],S=-f*p+d*x>0?[g,E,v,g,v,_]:[g,v,E,g,_,v];for(let M of S)t.push(...M),n.push(p,0,x)}let o=new Mt;return o.setAttribute("position",new Qe(t,3)),o.setAttribute("normal",new Qe(n,3)),o}function tp(i,e,t){let n=new As,s=i/2-t,r=e/2-t;return n.moveTo(-s,-e/2),n.lineTo(s,-e/2),n.absarc(s,-r,t,-Math.PI/2,0,!1),n.lineTo(i/2,r),n.absarc(s,r,t,0,Math.PI/2,!1),n.lineTo(-s,e/2),n.absarc(-s,r,t,Math.PI/2,Math.PI,!1),n.lineTo(-i/2,-r),n.absarc(-s,-r,t,Math.PI,Math.PI*1.5,!1),n}function zw(i,e,t,n,s,r){i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function Er(i,e,t,n,s){let r=Math.cos(s),o=Math.sin(s);return[i+t*r+n*o,e-t*o+n*r]}function Ln(i,e,t,n,s=0){return[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]].map(([r,o])=>Er(i,e,r,o,s))}function nu(i,e,t,n){return Array.from({length:n},(s,r)=>[i+t*Math.cos(r/n*Math.PI*2),e+t*Math.sin(r/n*Math.PI*2)])}function mx(i){let e=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of e){for(;n.length>=2&&t(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of e.reverse()){for(;s.length>=2&&t(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function yl(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function np(i,e,t){let n=yl(i,e);t(n.getContext("2d",{willReadFrequently:!0}),i,e);let s=new pi(n);return s.colorSpace=ot,s.anisotropy=8,s}function gx(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Hw=20;var ii=.36,os=1.6;var rs=new Q(9.05,-2.6),ru=Object.freeze([3,5,7,9]),Vw=/^(desk|screen|lounge)_(\d{2})$/,Gw=/^lamp_(\d{2})$/,iu=["floor_open","floor_closed","roof","elevator_shaft","elevator_cabin"],Ww=new Set(ru);async function bx(i){let e=null;try{if(new URLSearchParams(location.search).get("placeholder")==="1")throw new Error("?placeholder=1");let o=await Promise.race([new Fo().loadAsync(`${i}/office.glb`),new Promise((a,l)=>setTimeout(()=>l(new Error("timeout")),25e3))]);o.scene.updateMatrixWorld(!0),o.scene.getObjectByName("floor_open")?e=o.scene:console.info("[office] office.glb has no floor_open (v1 file): using the procedural v2 placeholder")}catch(o){console.warn("[office] office.glb failed to load, using the procedural placeholder:",o.message)}let t=!e||iu.some(o=>!e.getObjectByName(o))?vx():null,n={},s=[];for(let o of iu){let a=e&&e.getObjectByName(o);a?n[o]=a:(n[o]=t.templates[o],s.push(o))}if(e){for(let o of iu)s.includes(o)||Kw(n[o]);s.length&&console.warn("[office] placeholder used for missing nodes:",s.join(", "))}let r=yx(n.floor_open);if(r.desks.filter(Boolean).length<Hw){console.warn("[office] floor_open has fewer than 20 desk_NN empties: using placeholder floor_open");let o=t||vx();return n.floor_open=o.templates.floor_open,xx(n,yx(n.floor_open),o.nightMaps,"placeholder")}return xx(n,r,t?t.nightMaps:new Map,e?s.length?"glb+placeholder":"glb":"placeholder")}function xx(i,e,t,n){let s=null;try{new URLSearchParams(location.search).get("floorstyle")!=="0"&&(s=ix(i.floor_open,e.lounges))}catch(r){console.warn("[office] floor styles skipped:",r.message)}try{Yw(i.floor_open)}catch(r){console.warn("[office] dept divider skipped:",r.message)}try{$w(i.floor_open,e)}catch(r){console.warn("[office] manager desk skipped:",r.message)}try{qw(i.floor_open,e)}catch(r){console.warn("[office] removed workstations skipped:",r.message)}return{templates:i,spots:e,nightMaps:t,source:n,style:s}}function qw(i,e){if(!i||!e)return;let t=[],n=[],s=-2.7;for(let l of ru){let c=String(l).padStart(2,"0"),h=i.getObjectByName(`desk_${c}`),u=Math.floor((l-1)/2),d=[-5.7,-4,-2.3,-.6,1.1][u]??-2.3,f=h?h.position.x:d;t.push(h?h.position.clone():new I(f,ko,-3.9)),n.push({x:f,zMax:s}),h?.parent&&h.parent.remove(h);for(let p of["screen_","laptop_screen_"]){let x=i.getObjectByName(p+c);x?.parent&&x.parent.remove(x)}e.desks[l-1]=void 0,e.screens[l-1]=void 0}let r=i.getObjectByName("poufs");r&&_x(r,t,.55);let o=i.getObjectByName("laptops");o&&Xw(o,n,.55);let a=i.getObjectByName("mugs");a&&_x(a,t,.45)}function _x(i,e,t){Mx(i,(n,s,r)=>{let o=t*t;for(let a of e){let l=n-a.x,c=r-a.z;if(l*l+c*c<=o&&Math.abs(s-a.y)<1.4)return!0}return!1})}function Xw(i,e,t){Mx(i,(n,s,r)=>{if(s<.5||s>1.2)return!1;for(let o of e)if(Math.abs(n-o.x)<=t&&r<o.zMax)return!0;return!1})}function Mx(i,e){i.traverse(t=>{if(!t.isMesh||!t.geometry?.attributes?.position)return;let n=t.geometry,s=n.attributes.position,r=n.index,o=[],a=(l,c,h)=>{let u=(s.getX(l)+s.getX(c)+s.getX(h))/3,d=(s.getY(l)+s.getY(c)+s.getY(h))/3,f=(s.getZ(l)+s.getZ(c)+s.getZ(h))/3;return e(u,d,f)};if(r){for(let l=0;l<r.count;l+=3){let c=r.getX(l),h=r.getX(l+1),u=r.getX(l+2);a(c,h,u)||o.push(c,h,u)}n.setIndex(o)}else{for(let l=0;l<s.count;l+=3)a(l,l+1,l+2)||o.push(l,l+1,l+2);if(o.length!==s.count){let l=new Float32Array(o.length*3);for(let c=0;c<o.length;c++){let h=o[c];l[c*3]=s.getX(h),l[c*3+1]=s.getY(h),l[c*3+2]=s.getZ(h)}n.setAttribute("position",new kt(l,3)),n.deleteAttribute("normal"),n.deleteAttribute("uv")}}n.computeVertexNormals(),n.computeBoundingSphere()})}function Yw(i){if(!i||i.getObjectByName("dept_divider"))return;let e=new it;e.name="dept_divider";let t=new It({name:"dept_divider_frost",color:15265523,roughness:.35,metalness:.05,transparent:!0,opacity:.55,side:Qt,depthWrite:!1}),n=new It({name:"dept_divider_frame",color:1842206,roughness:.45,metalness:.3}),s=-3.15,r=1.49,o=-3.15,a=-2.79,l=o-s,c=a-r,h=Math.hypot(l,c),u=Math.atan2(-c,l),d=.72,f=1.28,p=.04,x=1.15,m=.41,g=h-m*2,_=g/3,E=m+_/2;for(let A=0;A<3;A++){let y=(E+A*_)/h,w=new it;w.position.set(s+l*y,d,r+c*y),w.rotation.y=u,w.add(new Re(new Ht(x,f,p),t));let R=x/2,P=f/2;for(let[N,k,D,B]of[[x+.04,.035,0,P+.01],[x+.04,.035,0,-P-.01],[.035,f+.04,-R-.01,0],[.035,f+.04,R+.01,0]]){let X=new Re(new Ht(N,k,p+.02),n);X.position.set(D,B,0),w.add(X)}e.add(w)}let v=new It({name:"dept_divider_oak",color:13215100,roughness:.6}),S=g+.15,M=new Re(new Ht(S,.05,.12),v);M.position.set((s+o)/2,.06,(r+a)/2),M.rotation.y=u,e.add(M),i.add(e)}function $w(i,e){if(!i||i.getObjectByName("manager_desk")||e.desks[20])return;let t=new it;t.name="manager_desk";let n=-6.7,s=-.85,r=new It({name:"manager_desk_oak",color:13215100,roughness:.55}),o=new It({name:"manager_desk_frame",color:1842206,roughness:.45,metalness:.3}),a=new It({name:"manager_desk_seat",color:3815998,roughness:.85}),l=new Re(new Ht(1.35,.05,.7),r);l.position.set(n,.725,s),t.add(l);for(let[g,_]of[[-.55,-.28],[.55,-.28],[-.55,.28],[.55,.28]]){let E=new Re(new Ht(.05,.7,.05),o);E.position.set(n+g,.35,s+_),t.add(E)}let c=n-.72,h=s,u=new Re(new wn(.24,.26,.08,20),a);u.position.set(c,.46,h),t.add(u);let d=new Re(new Ht(.08,.42,.42),a);d.position.set(c-.2,.72,h),t.add(d);let f=new Re(new wn(.04,.04,.38,12),o);f.position.set(c,.22,h),t.add(f);let p=new Re(new Ht(.32,.012,.22),new It({name:"manager_desk_laptop",color:13225168,roughness:.35,metalness:.75}));p.position.set(n+.1,.756,s),t.add(p);let x=new Re(new Ht(.32,.2,.008),p.material);x.position.set(n+.1,.86,s-.1),x.rotation.x=-.35,t.add(x),i.add(t);let m=new bt;m.name="desk_21",m.position.set(c,ko,h),m.rotation.y=Math.PI/2,i.add(m),e.desks[20]={pos:new I(c,ko,h),yaw:Math.PI/2}}function Kw(i){let e=new Map;i.traverse(t=>{if(!t.isMesh)return;let n=Zw(t);if(!n)return;t.userData.bakedName=n;let s=t.material;if(!e.has(s)){let r=s.map||s.emissiveMap||s.lightMap||null;r&&(r.colorSpace=ot),e.set(s,new St({map:r,color:r?16777215:s.color,name:s.name}))}t.material=e.get(s)})}function Zw(i){for(let e=i;e;e=e.parent)if(e.name&&e.name.startsWith("baked_"))return e.name;return null}function yx(i){let e={desks:[],screens:[],lounges:[],lamps:[]};i.updateMatrixWorld(!0);let t=new Ke().copy(i.matrixWorld).invert(),n=new Ke,s=new I,r=new xn,o=new I,a=new I;return i.traverse(l=>{let c=Vw.exec(l.name),h=Gw.exec(l.name);if(!c&&!h)return;if(n.multiplyMatrices(t,l.matrixWorld).decompose(s,r,o),h){e.lamps[Number(h[1])-1]=s.clone();return}a.set(0,0,1).applyQuaternion(r);let u={pos:s.clone(),yaw:Math.atan2(a.x,a.z)};(c[1]==="desk"?e.desks:c[1]==="screen"?e.screens:e.lounges)[Number(c[2])-1]=u}),e}var ko=.42,Sx=[-3.4,.8],Ex=[-5.7,-3.9,-2.1,-.3,1.5],su=-2.1,wx=8.8,Tx=1.1,Ax=[[-5,-3.4],[-2.1,-3.4],[.8,-3.4],[-5,.8],[-2.1,.8],[.8,.8]];function Nn(i,e=.7,t=0,n=""){return new It({color:i,roughness:e,metalness:t,name:n})}function Et(i,e,t,n,s,r,o,a){let l=new Re(new Ht(t,n,s),e);return l.position.set(r,o,a),i.add(l),l}function ni(i,e,t,n,s,r,o,a,l=28){let c=new Re(new wn(t,n,s,l),e);return c.position.set(r,o,a),i.add(c),c}function Bo(i,e,t,n,s,r=0){let o=new bt;return o.name=e,o.position.set(t,n,s),o.rotation.y=r,i.add(o),o}function zo(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new pi(n);return s.colorSpace=ot,s.anisotropy=8,s}function vx(){let i={white:Nn(16053232,.8),oak:Nn(13215100,.6),black:Nn(1842206,.45,.3),fabric:Nn(14341839,1),laptop:Nn(13225168,.35,.75),sofa:Nn(13486529,.95),armchair:Nn(3815998,.8),pot:Nn(16184818,.55),leaf1:Nn(3963719,.75),leaf2:Nn(5937752,.75),leaf3:Nn(3107390,.75),trunk:Nn(7032634,.8),mug:Nn(16777215,.4),counter:Nn(15394785,.6),glass:new It({color:14083310,roughness:.05,transparent:!0,opacity:.14,side:Qt,depthWrite:!1}),shaftGlass:new It({color:14083310,roughness:.05,transparent:!0,opacity:.16,side:Qt,depthWrite:!1})},e=()=>new It({name:"night_lamp",color:2762532,emissive:16760944,emissiveIntensity:0,roughness:.5}),t=()=>new It({name:"night_screen",color:1316635,emissive:10473727,emissiveIntensity:0,roughness:.3}),n=new Map,s={},r=new it;r.name="floor_open",s.floor_open=r,Et(r,i.white,16.4,ii,12.4,0,-ii/2,0).name="slab";let o=Jw();n.set("baked_floor",o.night);let a=new Re(new Wt(16,12).rotateX(-Math.PI/2),new St({map:o.day,name:"baked_floor"}));a.name="baked_floor",a.position.y=.002,r.add(a),Et(r,i.white,.2,2.7,12.4,-8.1,1.35,0);let l=jw();n.set("baked_wall_left",l.night);let c=new Re(new Wt(12,2.7).rotateY(Math.PI/2),new St({map:l.day,name:"baked_wall_left"}));c.name="baked_wall_left",c.position.set(-7.995,1.35,0),r.add(c);let h=new Re(new Wt(16,2.7),i.glass);h.position.set(0,1.35,-6),r.add(h);for(let M=-8;M<=8.001;M+=2)Et(r,i.black,.07,2.7,.08,M,1.35,-6);Et(r,i.black,16.2,.07,.1,0,2.7,-6),Et(r,i.black,16,.08,.1,0,.04,-6);let u=(M,A,y,w,R)=>{let P=new Re(new Wt(A,y).rotateY(Math.PI/2),new St({color:1382171,name:M}));return P.name=M,P.position.set(-7.96,R,w),r.add(P),P};u("wall_screen",2.6,1.46,-4.3,1.5),u("task_board",3,1.5,.1,1.45);for(let[M,A,y,w]of[[2.68,1.54,-4.3,1.5],[3.08,1.58,.1,1.45]])Et(r,i.black,.03,A,M,-7.985,w,y);let d=[];for(let M=0;M<2;M++){let A=Sx[M];Et(r,i.oak,wx,.05,Tx,su,.725,A);for(let y of[-4.1,-1.4,1.4,4.1])for(let w of[-1,1])Et(r,i.black,.05,.7,.05,su+y,.35,A+w*.48);for(let y of[-4.1,4.1])Et(r,i.black,.04,.04,.96,su+y,.1,A);for(let y=0;y<10;y++){let w=M*10+y+1,R=Math.floor(y/2),P=y%2===0,N=Ex[R],k=P?-1:1;if(Bo(r,`desk_${String(w).padStart(2,"0")}`,N,ko,A+k*1.05,P?0:Math.PI),Ww.has(w))continue;ni(r,i.fabric,.26,.29,ko,N,ko/2,A+k*1.05);let D=new it;D.position.set(N,.75,A+k*.3),D.rotation.y=P?Math.PI:0,Et(D,i.laptop,.32,.012,.22,0,.006,0);let B=new it;B.position.set(0,.012,-.11),B.rotation.x=-.3,Et(B,i.laptop,.32,.21,.008,0,.105,0);let X=new Re(new Wt(.29,.18),t());X.name=`laptop_screen_${String(w).padStart(2,"0")}`,X.position.set(0,.105,.0045),B.add(X),D.add(B),r.add(D),d.push([w,X,P]),y%3===1&&ni(r,i.mug,.04,.035,.09,N+.38,.795,A+k*.1,14)}}r.updateMatrixWorld(!0);for(let[M,A]of d){let y=A.getWorldPosition(new I),w=A.getWorldQuaternion(new xn);Bo(r,`screen_${String(M).padStart(2,"0")}`,y.x,y.y,y.z).quaternion.copy(w)}Ax.forEach(([M,A],y)=>{let w=new it;w.position.set(M,2.05,A),ni(w,i.black,.09,.2,.2,0,.06,0,24),ni(w,i.black,.008,.008,.9,0,.6,0,6);let R=new Re(new hr(.075,16,12),e());R.position.y=-.07,w.add(R),r.add(w),Bo(r,`lamp_${String(y+1).padStart(2,"0")}`,M,1.95,A)}),Et(r,i.sofa,2.7,.42,.95,5.9,.21,.05),Et(r,i.sofa,2.7,.52,.24,5.9,.68,-.36);for(let M of[-1,1])Et(r,i.sofa,.26,.62,.95,5.9+M*1.22,.31+.1,.05);for(let M=0;M<3;M++)Et(r,i.sofa,.8,.1,.66,5.05+M*.85,.47,.12);[[5.05,0],[5.9,1],[6.75,2]].forEach(([M],A)=>Bo(r,`lounge_0${A+1}`,M,.52,.12,0));let f=(M,A,y)=>{let w=new it;w.position.set(M,0,2.1),w.rotation.y=A,Et(w,i.armchair,.9,.38,.9,0,.19,0),Et(w,i.armchair,.2,.55,.9,-.35,.55,0);for(let R of[-1,1])Et(w,i.armchair,.9,.2,.14,0,.5,R*.38);r.add(w),Bo(r,y,M,.42,2.1,A)};f(4.15,Math.PI/2,"lounge_04"),f(7.65,-Math.PI/2,"lounge_05"),ni(r,i.oak,.6,.6,.04,5.9,.38,2.1,40),ni(r,i.black,.04,.04,.36,5.9,.18,2.1,10),Et(r,i.counter,3.6,1,.6,6,.5,-5.6),Et(r,i.oak,3.7,.05,.7,6,1.025,-5.6),Et(r,i.black,.4,.4,.3,4.9,1.25,-5.7),ni(r,i.mug,.04,.035,.09,5.5,1.095,-5.5,14),ni(r,i.mug,.04,.035,.09,5.65,1.095,-5.45,14),ni(r,i.black,.2,.2,.05,6.1,.66,-4.8,20),ni(r,i.black,.03,.03,.64,6.1,.33,-4.8,8),Bo(r,"lounge_06",6.1,.68,-4.8,0);let p=(M,A,y)=>{let w=new it;w.position.set(M,0,A),w.scale.setScalar(y),ni(w,i.pot,.3,.22,.6,0,.3,0),ni(w,i.trunk,.04,.05,.9,0,.9,0,8),[[0,1.55,0,.5,i.leaf1],[.3,1.35,.15,.36,i.leaf2],[-.28,1.4,-.12,.34,i.leaf3],[.05,1.95,.05,.34,i.leaf2]].forEach(([R,P,N,k,D])=>{let B=new Re(new Ha(k,2),D);B.position.set(R,P,N),w.add(B)}),r.add(w)};p(-7.2,5.2,1.25),p(7.6,-3.4,1),p(7.5,5,1.2);let x=new it;x.name="floor_closed",s.floor_closed=x,Et(x,i.white,16.4,ii,12.4,0,-ii/2,0);let m=Qw(),g=new It({name:"night_windows",map:m.diffuse,emissiveMap:m.emissive,emissive:16777215,emissiveIntensity:0,roughness:.22,metalness:.25});m.diffuse.wrapS=m.emissive.wrapS=Kn,[[0,6.2,0,16.4],[Math.PI,-6.2,0,16.4],[Math.PI/2,0,8.2,12.4],[-Math.PI/2,0,-8.2,12.4]].forEach(([M,A,y,w],R)=>{let P=new Wt(w,1.24),N=P.attributes.uv,k=R*.29%1;for(let B=0;B<N.count;B++)N.setX(B,N.getX(B)*(w/25.6)+k);let D=new Re(P,g);D.rotation.y=M,D.position.set(M===Math.PI/2?8.2:M===-Math.PI/2?-8.2:0,.62,A),x.add(D)});for(let M of[-1,1])for(let A of[-1,1])Et(x,i.counter,.12,1.24,.12,M*8.2,.62,A*6.2);let E=new it;E.name="roof",s.roof=E,Et(E,i.white,16.4,ii,12.4,0,ii/2,0);for(let[M,A,y,w]of[[16.4,.16,0,6.12],[16.4,.16,0,-6.12],[.16,12.4,8.12,0],[.16,12.4,-8.12,0]])Et(E,i.white,M,.34,A,y,ii+.17,w);for(let[M,A,y,w,R]of[[1.6,.8,1.1,-4,-2],[1.6,.8,1.1,-1.8,-2],[1.2,.6,1.2,4,2.5],[2.2,1.6,2,5.5,-3.5]])Et(E,i.counter,M,A,y,w,ii+A/2,R),Et(E,i.black,M*.8,.05,y*.8,w,ii+A+.02,R);let v=new it;v.name="elevator_shaft",v.position.set(rs.x,0,rs.y),s.elevator_shaft=v;for(let M of[-1,1])for(let A of[-1,1])Et(v,i.black,.06,1,.06,M*.72,.5,A*.72);for(let[M,A,y]of[[0,0,.72],[Math.PI,0,-.72],[Math.PI/2,.72,0],[-Math.PI/2,-.72,0]]){let w=new Re(new Wt(1.44,1),i.shaftGlass);w.rotation.y=M,w.position.set(A,.5,y),v.add(w)}let S=new it;S.name="elevator_cabin",S.position.set(rs.x,0,rs.y),s.elevator_cabin=S,Et(S,i.counter,1.3,.06,1.3,0,.03,0);for(let M of[-1,1])for(let A of[-1,1])Et(S,i.black,.05,2.2,.05,M*.625,1.1,A*.625);for(let[M,A,y,w]of[[1.3,.05,0,.625],[1.3,.05,0,-.625],[.05,1.3,.625,0],[.05,1.3,-.625,0]])Et(S,i.black,M,.05,A,y,2.175,w);for(let[M,A,y]of[[0,0,.625],[Math.PI,0,-.625],[Math.PI/2,.625,0],[-Math.PI/2,-.625,0]]){let w=new Re(new Wt(1.25,2.1),i.shaftGlass);w.rotation.y=M,w.position.set(A,1.1,y),S.add(w)}for(let M of iu)s[M].traverse(A=>{A.isMesh&&!A.userData.bakedName&&/^baked_/.test(A.name)&&(A.userData.bakedName=A.name)});return{templates:s,nightMaps:n}}var si=100,vn=i=>(i+8)*si,bn=i=>(i+6)*si;function Jw(){let i=16*si,e=12*si,t=[];for(let r of Sx){t.push(["rect",su,r,wx+.2,Tx+.1]);for(let o=0;o<10;o++)t.push(["circle",Ex[Math.floor(o/2)],r+(o%2?1.05:-1.05),.3,.3])}t.push(["rect",5.9,.05,2.9,1],["rect",4.15,2.1,.95,.95],["rect",7.65,2.1,.95,.95],["circle",5.9,2.1,.62,.62],["rect",6,-5.6,3.7,.7],["circle",-7.2,5.2,.4,.4],["circle",7.6,-3.4,.35,.35],["circle",7.5,5,.4,.4]);let n=zo(i,e,r=>{r.fillStyle="#F0ECE5",r.fillRect(0,0,i,e);let o=r.createLinearGradient(0,0,i,e);o.addColorStop(0,"#E9E4DC"),o.addColorStop(1,"#F6F3EE"),r.fillStyle=o,r.fillRect(0,0,i,e),r.fillStyle="#DDD9D0",r.beginPath(),r.arc(vn(5.9),bn(1.3),2.25*si,0,7),r.fill(),r.fillStyle="#E6E2DA",r.beginPath(),r.arc(vn(5.9),bn(1.3),1.75*si,0,7),r.fill(),r.save(),r.filter="blur(18px)";for(let c=-8;c<8;c+=2)r.fillStyle="rgba(255,250,238,0.55)",r.beginPath(),r.moveTo(vn(c+.15),bn(-6)),r.lineTo(vn(c+1.85),bn(-6)),r.lineTo(vn(c+1.85+5.2),bn(-6+3.9)),r.lineTo(vn(c+.15+5.2),bn(-6+3.9)),r.fill();r.restore(),ip(r,t,"rgba(70,62,52,0.30)",.45,.55,14),ip(r,t,"rgba(60,52,44,0.28)",0,0,5);let a=r.createLinearGradient(0,0,130,0);a.addColorStop(0,"rgba(90,80,70,0.30)"),a.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=a,r.fillRect(0,0,130,e);let l=r.createLinearGradient(0,0,0,90);l.addColorStop(0,"rgba(90,80,70,0.18)"),l.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=l,r.fillRect(0,0,i,90)}),s=zo(i,e,r=>{r.fillStyle="#222A3E",r.fillRect(0,0,i,e),r.fillStyle="#2A3248",r.beginPath(),r.arc(vn(5.9),bn(1.3),2.25*si,0,7),r.fill(),r.save(),r.filter="blur(26px)";for(let a=-8;a<8;a+=2)r.fillStyle="rgba(120,150,230,0.10)",r.beginPath(),r.moveTo(vn(a+.15),bn(-6)),r.lineTo(vn(a+1.85),bn(-6)),r.lineTo(vn(a+1.85+5.2),bn(-6+3.9)),r.lineTo(vn(a+.15+5.2),bn(-6+3.9)),r.fill();r.restore();for(let[a,l]of Ax.concat([[5.9,1.2]])){let c=2.3*si,h=r.createRadialGradient(vn(a+.3),bn(l+.4),0,vn(a+.3),bn(l+.4),c);h.addColorStop(0,"rgba(255,196,130,0.5)"),h.addColorStop(1,"rgba(255,196,130,0)"),r.fillStyle=h,r.fillRect(vn(a+.3)-c,bn(l+.4)-c,c*2,c*2)}ip(r,t,"rgba(5,7,14,0.55)",.35,.45,12);let o=r.createLinearGradient(0,0,130,0);o.addColorStop(0,"rgba(0,0,0,0.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(0,0,130,e)});return{day:n,night:s}}function ip(i,e,t,n,s,r){i.save(),i.filter=`blur(${r}px)`,i.fillStyle=t;for(let[o,a,l,c,h]of e)o==="rect"?i.fillRect(vn(a+n-c/2),bn(l+s-h/2),c*si,h*si):(i.beginPath(),i.ellipse(vn(a+n),bn(l+s),c*si,h*si,0,0,7),i.fill());i.restore()}function jw(){let t=zo(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#F7F6F3"),r.addColorStop(.7,"#F2F0EC"),r.addColorStop(1,"#E2DFD9"),s.fillStyle=r,s.fillRect(0,0,1200,270);let o=s.createLinearGradient(1060,0,1200,0);o.addColorStop(0,"rgba(120,110,100,0)"),o.addColorStop(1,"rgba(120,110,100,0.22)"),s.fillStyle=o,s.fillRect(1060,0,140,270)}),n=zo(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#242A3A"),r.addColorStop(.7,"#2A2F3E"),r.addColorStop(1,"#161A26"),s.fillStyle=r,s.fillRect(0,0,1200,270);for(let o of[300,700]){let a=s.createRadialGradient(o,120,0,o,120,320);a.addColorStop(0,"rgba(255,190,120,0.16)"),a.addColorStop(1,"rgba(255,190,120,0)"),s.fillStyle=a,s.fillRect(o-320,0,640,270)}});return{day:t,night:n}}function Qw(){let n=eT(7),s=zo(1024,64,(o,a,l)=>{let c=o.createLinearGradient(0,0,0,l);c.addColorStop(0,"#9AA7B5"),c.addColorStop(.5,"#6E7C8C"),c.addColorStop(1,"#58687A"),o.fillStyle=c,o.fillRect(0,0,a,l),o.fillStyle="#E8EAED";for(let h=0;h<=16;h++)o.fillRect(h*64-2,0,4,l);o.fillRect(0,0,a,4),o.fillRect(0,l-5,a,5),o.fillRect(0,l*.55,a,2)}),r=zo(1024,64,(o,a,l)=>{o.fillStyle="#000",o.fillRect(0,0,a,l);for(let c=0;c<16;c++){if(n()>.42)continue;let h=.45+n()*.35;o.fillStyle=`rgb(${Math.round(255*h)},${Math.round(196*h)},${Math.round(120*h)})`,o.fillRect(c*64+5,8,54,l*.55-10),o.fillRect(c*64+5,l*.55+5,54,l*.45-14)}});return{diffuse:s,emissive:r}}function eT(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ds=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,dn=class{constructor(e=0,t=.5){this.x=e,this.v=0,this.target=e,this.response=t,this.delay=0,this.pending=null}to(e,t=0){return t>0?(this.pending=e,this.delay=t):(this.target=e,this.pending=null),this}snap(e){return this.x=this.target=e,this.v=0,this.pending=null,this}step(e){this.pending!==null&&(this.delay-=e,this.delay<=0&&(this.target=this.pending,this.pending=null));let t=Ds?Math.min(this.response,.12):this.response,n=2*Math.PI/Math.max(t,.02),s=this.x-this.target,r=this.v+n*s,o=Math.exp(-n*e);return this.x=this.target+(s+r*e)*o,this.v=(this.v-n*r*e)*o,Math.abs(this.x-this.target)<1e-5&&Math.abs(this.v)<1e-5&&(this.x=this.target,this.v=0),this.x}get settled(){return this.x===this.target&&this.v===0&&this.pending===null}},Lt=(i,e,t)=>Math.min(t,Math.max(e,i)),_i=(i,e,t)=>{let n=Lt((t-i)/(e-i),0,1);return n*n*(3-2*n)},vl=(i,e,t)=>i+(e-i)*t;var ri='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',Rx={working:"#34C759",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF",idle:"#A1A1A6"},Cx={waiting_user:0,error:0,stuck:0,working:1,done:2,idle:3},tT=/^tsk-\d+$/i,op=!1,Lx=(async()=>{try{document.fonts&&await Promise.race([Promise.all([document.fonts.load("600 24px Inter","Today Tasks 0123456789"),document.fonts.load("500 24px Inter","Working events"),document.fonts.load("700 24px Inter","0123456789")]).then(()=>document.fonts.ready),new Promise(i=>setTimeout(i,2500))])}catch{}op=!0})();function Ix(i){let e=(i.task||"").trim();return e&&!tT.test(e)?e:(i.step||"").trim()}function Nx(i){try{let e=i?new Date(i):new Date,t=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Sofia",hour:"2-digit",hour12:!1}).format(e);return Number(t)%24}catch{return new Date().getHours()}}function Px(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=new pi(t);return n.colorSpace=ot,n.anisotropy=8,n.minFilter=kn,n.generateMipmaps=!0,{c:t,g:t.getContext("2d"),tex:n}}function ou(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function nT(i,e,t,n){let s=String(e).split(/\s+/).filter(Boolean),r=[],o="";for(let a=0;a<s.length;a++){let l=o?`${o} ${s[a]}`:s[a];if(i.measureText(l).width<=t||!o?o=l:(r.push(o),o=s[a]),r.length===n)break}if(r.length<n&&o&&r.push(o),r.length===n&&s.join(" ")!==r.join(" ")){let a=r[n-1];for(;a.length>1&&i.measureText(`${a}\u2026`).width>t;)a=a.slice(0,-1);r[n-1]=`${a.replace(/[\s,.;:]+$/,"")}\u2026`}return r}var au=class{constructor(e,t){this.screen=e?{mesh:e,...Px(1536,864),S:1.6,W:960,H:540}:null,this.board=t?{mesh:t,...Px(1800,900),S:1.8,W:1e3,H:500}:null;for(let n of[this.screen,this.board])n&&(n.mat=new St({map:n.tex,name:n.mesh.name}),n.mesh.material=n.mat,n.drawn=null);this.screen&&(this.screen.mat.toneMapped=!1),this.sig="",this.data=null,this.accent=null,this.lastDraw=-1e9,this.dirty=!1,this.fontsAtDraw=!1}get materials(){return[this.screen?.mat,this.board?.mat].filter(Boolean)}setData(e){let t=this.signature(e);this.data=e,t!==this.sig&&(this.sig=t,this.dirty=!0)}setAccent(e){e!==this.accent&&(this.accent=e,this.dirty=!0,this.lastDraw=-1e9)}accentDot(e,t,n,s,r,o){e.fillText(t,n,s);let a=e.measureText(t).width;return e.fillStyle=this.accent,e.beginPath(),e.arc(n+a+o*1.3,r,o*.42,0,7),e.fill(),n+a+o*2.6}signature(e){let t=[e.floorName,e.hour,e.now];for(let n of e.bots)t.push(n.id,n.effective_status||n.status,Ix(n),n.color,n.today?.events,n.today?.tasks_done,n.today?.working_min,(n.today?.hourly||[]).join(","));return t.join("|")}tick(e,t){if(this.data&&(this.dirty||!this.fontsAtDraw&&op)&&e-this.lastDraw>1e3&&(this.lastDraw=e,this.dirty=!1,this.fontsAtDraw=op,this.screen&&this.drawScreen(this.data),this.board&&this.drawBoard(this.data)),this.screen){let n=.86*(1-.84*t);this.screen.mat.color.setRGB(n,n,n)}if(this.board){let n=1-.46*t;this.board.mat.color.setRGB(n,n*.97,n*.93)}}drawScreen(e){let{g:t,tex:n,S:s,W:r,H:o}=this.screen;t.setTransform(s,0,0,s,0,0);let a=t.createLinearGradient(0,0,0,o);a.addColorStop(0,"#14171C"),a.addColorStop(1,"#0B0D10"),t.fillStyle=a,t.fillRect(0,0,r,o);let l=t.createRadialGradient(r*.2,0,0,r*.2,0,r*.7);l.addColorStop(0,"rgba(52,199,89,0.10)"),l.addColorStop(1,"rgba(52,199,89,0)"),t.fillStyle=l,t.fillRect(0,0,r,o);let c=e.bots,h=c.filter(N=>(N.effective_status||N.status)==="working").length,u=sp(c,N=>N.today?.events),d=sp(c,N=>N.today?.tasks_done),f=sp(c,N=>N.today?.working_min)/60,p=new Array(24).fill(0);for(let N of c)for(let k=0;k<24;k++)p[k]+=Number(N.today?.hourly?.[k])||0;t.textBaseline="alphabetic",t.fillStyle="#8E8E93",t.font=`500 32px ${ri}`;let x;this.accent?x=this.accentDot(t,"Today",44,62,51,20):(t.fillText("Today \xB7 ",44,62),x=44+t.measureText("Today \xB7 ").width),t.fillStyle="#F5F5F7",t.font=`650 40px ${ri}`,t.fillText(rp(t,e.floorName||"",744-x),x,62),t.fillStyle="#34C759",t.beginPath(),t.arc(r-52,50,7,0,7),t.fill(),t.fillStyle="rgba(52,199,89,0.25)",t.beginPath(),t.arc(r-52,50,14,0,7),t.fill();let m=[[`${h} of ${c.length}`,"working now"],[String(u),"events today"],[String(d),"tasks done"],[f.toFixed(1),"hours worked"]],g=205,_=14,E=44,v=100;m.forEach(([N,k],D)=>{let B=E+D*(g+_);t.fillStyle="rgba(255,255,255,0.065)",ou(t,B,v,g,108,18),t.fill(),t.fillStyle=D===0?"#34C759":"#F5F5F7",t.font=`700 42px ${ri}`,t.fillText(N,B+20,v+55),t.fillStyle="#8E8E93",t.font=`500 17px ${ri}`,t.fillText(k,B+20,v+86)});let S=44,M=r-88,A=250,y=220;t.fillStyle="#8E8E93",t.font=`500 17px ${ri}`,t.fillText("Events by hour",S,A-4);let w=Math.max(1,...p),R=M/24,P=R*.62;for(let N=0;N<24;N++){let k=S+N*R+(R-P)/2,D=p[N]>0?Math.max(8,p[N]/w*(y-20)):6,B=A+y-D,X=N===e.hour;t.save(),X&&(t.shadowColor="rgba(52,199,89,0.85)",t.shadowBlur=18),t.fillStyle=X?"#34C759":N>e.hour?"rgba(255,255,255,0.08)":p[N]>0?"rgba(52,199,89,0.55)":"rgba(255,255,255,0.10)",ou(t,k,B,P,D,Math.min(5,P/2)),t.fill(),t.restore()}t.fillStyle="#6E6E73",t.font=`500 15px ${ri}`,t.textAlign="center";for(let N of[0,6,12,18])t.fillText(String(N).padStart(2,"0"),S+N*R+R/2,A+y+26);t.fillText("24",S+23*R+R/2+4,A+y+26),t.textAlign="left",n.needsUpdate=!0}drawBoard(e){let{g:t,tex:n,S:s,W:r,H:o}=this.board;t.setTransform(s,0,0,s,0,0),t.fillStyle="#F1F0EC",t.fillRect(0,0,r,o),t.fillStyle="#FAF9F6",t.fillRect(0,0,r,68),t.fillStyle="#E3E0D9",t.fillRect(0,68,r,2),t.fillStyle="#1D1D1F",t.font=`700 34px ${ri}`;let a;this.accent?a=this.accentDot(t,"Tasks",36,49,37,20):(t.fillText("Tasks",36,49),a=36+t.measureText("Tasks ").width),t.fillStyle="#6E6E73",t.font=`600 26px ${ri}`,t.fillText(`${this.accent?"":"\xB7 "}${rp(t,e.floorName||"",420)}`,a,49);let l=[...e.bots].sort((g,_)=>(Cx[g.effective_status||g.status]??3)-(Cx[_.effective_status||_.status]??3)||String(g.name).localeCompare(String(_.name))),c=l.slice(0,8),h=l.length-c.length;h>0&&(t.textAlign="right",t.fillStyle="#515154",t.font=`700 28px ${ri}`,t.fillText(`+${h}`,r-36,49),t.textAlign="left"),c.length||(t.fillStyle="#8E8E93",t.font=`600 28px ${ri}`,t.fillText("Nobody on this floor yet",36,160));let u=4,d=30,f=16,p=90,x=(r-d*2-f*(u-1))/u,m=(o-p-28-f)/2;c.forEach((g,_)=>{let E=d+_%u*(x+f),v=p+Math.floor(_/u)*(m+f),S=g.effective_status||g.status;t.save(),t.shadowColor="rgba(40,36,30,0.18)",t.shadowBlur=14,t.shadowOffsetY=3,t.fillStyle="#FFFFFF",ou(t,E,v,x,m,14),t.fill(),t.restore(),t.fillStyle=g.color||"#A1A1A6",ou(t,E+10,v+12,9,m-24,4.5),t.fill(),t.fillStyle=Rx[S]||Rx.idle,t.beginPath(),t.arc(E+x-22,v+26,8,0,7),t.fill(),t.fillStyle="#1D1D1F",t.font=`700 25px ${ri}`,t.fillText(rp(t,g.name||"",x-76),E+32,v+36),t.fillStyle="#3A3A3C",t.font=`600 21px ${ri}`,nT(t,Ix(g)||"\u2014",x-52,3).forEach((A,y)=>t.fillText(A,E+32,v+72+y*28))}),n.needsUpdate=!0}};function sp(i,e){let t=0;for(let n of i)t+=Number(e(n))||0;return t}function rp(i,e,t){let n=String(e);if(i.measureText(n).width<=t)return n;for(;n.length>1&&i.measureText(`${n}\u2026`).width>t;)n=n.slice(0,-1);return`${n.trimEnd()}\u2026`}var bl=20,Ho=.14,Dx=.4,iT=7,sT=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,rT=2.2,ap=[.2,.26,.42];function oT(i,e){return new ur().loadAsync(`${i}/night/${encodeURIComponent(e)}.jpg`).then(t=>(t.flipY=!1,t.colorSpace=ot,t.anisotropy=8,t)).catch(()=>null)}var wr=class{constructor(e,t,n){this.b=e,this.kind=n,this.root=new it,this.root.name=`${n}-instance`,this.obj=t.clone(!0),this.root.add(this.obj),this.alpha=1,this.mats=[],this.textures=[],this.screens=[],this.walls=null,this.floorId=null,n!=="shaft"&&n!=="cabin"&&this.obj.position.set(0,0,0);let s=new Map,r=Math.random();if(this.obj.traverse(o=>{if(!o.isMesh)return;let l=(Array.isArray(o.material)?o.material:[o.material]).map(h=>{let u=/^laptop_screen_\d\d$/.test(o.name),d=u?null:s.get(h);return d||(d=h.clone(),u||s.set(h,d),this.register(d,o,r)),d});o.material=Array.isArray(o.material)?l:l[0];let c=/^laptop_screen_(\d\d)$/.exec(o.name);c&&(this.screens[Number(c[1])-1]={mat:l[0],glow:0,target:0})}),n==="open"){let o=this.obj.getObjectByName("wall_screen"),a=this.obj.getObjectByName("task_board");(o||a)&&(this.walls=new au(o,a))}}register(e,t,n){this.mats.push(e);let s=t.userData.bakedName;if(s&&e.map&&!e.userData.nightPatched&&this.b.patchBaked(e,s),e.name==="night_lamp")e.emissive.getHex()===0&&e.emissive.set(16760944),e.emissiveIntensity=0,this.b.daylight.track(e,"lamp");else if(e.name==="night_windows"){if(e.emissive.getHex()===0&&e.emissive.set(16777215),e.emissiveIntensity=0,e.emissiveMap){let r=e.emissiveMap.clone(),o=e.map?e.map.clone():null;for(let a of[r,o])a&&(a.wrapS=a.wrapT=Kn,a.offset.x=n,a.needsUpdate=!0,this.textures.push(a));e.emissiveMap=r,o&&(e.map=o)}this.b.daylight.track(e,"windows")}else e.name==="night_screen"&&(e.emissive.getHex()===0&&e.emissive.set(10473727),e.emissiveIntensity=0)}setShown(e){this.alpha=e?1:0,this.root.visible=e}dispose(){for(let e of this.mats)this.b.daylight.untrack(e),e.dispose();for(let e of this.textures)e.dispose();this.root.removeFromParent()}},lu=class{constructor({scene:e,daylight:t,assets:n,baseUrl:s,renderer:r}){this.scene=e,this.daylight=t,this.assets=n,this.baseUrl=s,this.renderer=r,this.group=new it,this.group.name="building",this.group.visible=!1,e.add(this.group),this.introDrop=!1,this.slots=[],this.byId=new Map,this.styles=new Map,this.activeIndex=-1,this.pool=[],this.sig="",this.floorData=null,this.nightRecs=new Map,this.roof=new wr(this,n.templates.roof,"roof"),this.roofLift=new dn(1,.5),this.group.add(this.roof.root),this.shaft=new wr(this,n.templates.elevator_shaft,"shaft"),this.cabin=new wr(this,n.templates.elevator_cabin,"cabin"),this.group.add(this.shaft.root,this.cabin.root),this.setupElevatorGeometry(),this.cabinY=new dn(0,.55),this.shaftTop=new dn(1,.55),this.lampPositions=Array.from({length:6},()=>new I),t.setLampSource(()=>{let o=this.activeOpen();if(!o)return null;let a=this.assets.spots.lamps;for(let l=0;l<6;l++){let c=a[l];this.lampPositions[l].set(c?c.x:0,c?c.y+o.root.position.y:-99,c?c.z:0)}return{positions:a.length?this.lampPositions:[],k:o.alpha}}),this.screenTargets=new Array(21).fill(0);for(let o=0;o<2;o++){let a=new wr(this,n.templates.floor_open,"open");a.setShown(!1),this.group.add(a.root),this.pool.push(a)}this.pulseT=-1,this.swapped=!0,this.blurPx=0}setupElevatorGeometry(){this.shaftH=1;for(let e of[this.shaft,this.cabin]){e.root.updateMatrixWorld(!0);let t=new $t().setFromObject(e.obj);if(!Number.isFinite(t.min.y))continue;let n=t.getCenter(new I);e.obj.position.y-=t.min.y,(Math.abs(n.x-rs.x)>1.5||Math.abs(n.z-rs.y)>1.5)&&(e.obj.position.x+=rs.x-n.x,e.obj.position.z+=rs.y-n.z),e===this.shaft&&(this.shaftH=Math.max(.01,t.max.y-t.min.y))}}patchBaked(e,t){e.userData.nightPatched=!0;let n=this.nightRecs.get(t);if(!n){let a=this.assets.nightMaps.get(t),l=t.startsWith("style_");n={name:t,uMap:{value:a||e.map},uTint:{value:new I(...a?[1,1,1]:ap)},dayMap:e.map,tex:null,state:a||l?"static":"idle",since:0},this.nightRecs.set(t,n)}let{uMap:s,uTint:r}=n,o=e.userData.accent?e.accentUniform={value:new fe(1,1,1)}:null;e.onBeforeCompile=a=>{a.uniforms.uNight=this.daylight.uNight,a.uniforms.uNightMap=s,a.uniforms.uNightTint=r,o&&(a.uniforms.uAccent=o),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform sampler2D uNightMap;
uniform vec3 uNightTint;${o?`
uniform vec3 uAccent;`:""}`).replace("#include <map_fragment>",`#ifdef USE_MAP
  vec4 dayC = texture2D( map, vMapUv );
  vec4 nightC = texture2D( uNightMap, vMapUv );
  nightC.rgb *= uNightTint;
  diffuseColor *= mix( dayC, nightC, uNight );
#endif`),o&&(a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= uAccent;`))},e.customProgramCacheKey=()=>o?"bothq-baked-night-accent":"bothq-baked-night"}updateNightMaps(e){let t=this.daylight.night;for(let n of this.nightRecs.values())n.state!=="static"&&(t>.01?(n.since=e,n.state==="idle"&&(n.state="loading",oT(this.baseUrl,n.name).then(s=>{if(!s){n.state="missing";return}n.dayMap&&(s.wrapS=n.dayMap.wrapS,s.wrapT=n.dayMap.wrapT,s.channel=n.dayMap.channel),n.tex=s,n.uMap.value=s,n.uTint.value.set(1,1,1),n.state="ready",n.name==="baked_floor"&&this.styleNight(s.image)}))):n.state==="ready"&&e-n.since>3e4&&(n.uMap.value=n.dayMap,n.uTint.value.set(...ap),n.tex.dispose(),n.tex=null,n.state="idle",n.name==="baked_floor"&&this.styleNight(null)))}styleNight(e){let t=e&&this.assets.style?cx(e):new Map;for(let n of this.nightRecs.values()){if(!n.name.startsWith("style_"))continue;n.styleNight&&(n.styleNight.dispose(),n.styleNight=null);let s=t.get(n.name);s?(n.styleNight=s,n.uMap.value=s,n.uTint.value.set(1,1,1)):(n.uMap.value=n.dayMap,n.uTint.value.set(...ap))}}setFloors(e){let t=e.length?e:[{id:"_",name:"",order:1}],n=t.map(r=>r.id).join("|");if(t.forEach((r,o)=>{let a=this.byId.get(r.id);a&&(a.name=r.name,a.index=o)}),n===this.sig)return;this.sig=n,this.styles=this.assets.style?Qg(t):new Map;let s=new Map(t.map((r,o)=>[r.id,o]));for(let r of this.slots)s.has(r.id)||this.disposeSlot(r);this.slots=t.map((r,o)=>{let a=this.byId.get(r.id);return a||(a={id:r.id,name:r.name,index:o,closed:new wr(this,this.assets.templates.floor_closed,"closed"),open:null,lift:new dn(1,.5),showOpen:!1},this.group.add(a.closed.root),a.closed.setShown(!1),this.byId.set(r.id,a)),a.index=o,a});for(let[r]of[...this.byId])s.has(r)||this.byId.delete(r);this.activeIndex=Math.min(this.activeIndex,this.slots.length-1),this.activeSlot&&this.applyStyle(this.activeSlot),this.retarget(!1)}applyStyle(e){let t=this.styles.get(e.id);if(!t||!e.open||(tx(e.open.obj,t),e.open.walls?.setAccent(t.accent),e!==this.activeSlot))return;let n=this.assets.spots.lounges;this.assets.style.layouts[t.layout].forEach((s,r)=>{let o=n[r];(!o||o.pos.distanceToSquared(s.pos)>1e-6||o.yaw!==s.yaw)&&(n[r]={pos:s.pos.clone(),yaw:s.yaw,lounge:!0})})}disposeSlot(e){e.closed.dispose(),e.open&&(this.pool=this.pool.filter(t=>t!==e.open),e.open.dispose())}get floorCount(){return this.slots.length}get activeSlot(){return this.slots[this.activeIndex]||null}get activeId(){return this.activeSlot?.id??null}get activeY(){return Math.max(0,this.activeIndex)*os}activeOpen(){return this.activeSlot?.open||null}setActive(e,{intro:t=!1}={}){let n=this.slots.findIndex(o=>o.id===e);if(n<0)return!1;let s=this.activeIndex>=0&&n!==this.activeIndex;this.activeIndex=n;let r=this.slots[n];if(this.acquireOpen(r),this.applyStyle(r),t){for(let o of this.slots)o.lift.snap(1);this.roofLift.snap(1),this.group.visible=!0,this.introDrop=!0}return s&&!t&&!sT?(this.pulseT=0,this.swapped=!1):this.applyShown(),this.retarget(t),t&&(this.cabinY.snap(this.cabinY.target),this.shaftTop.snap(this.shaftTop.target)),!0}applyShown(){this.slots.forEach((e,t)=>{e.showOpen=t===this.activeIndex&&!!e.open})}retarget(e){let t=this.activeIndex;t<0||(this.slots.forEach((n,s)=>{s<=t?n.lift.to(0,e?.05+(t-s)*.08:0):n.lift.to(1)}),this.roofLift.to(1),this.cabinY.to(t*os),this.shaftTop.to(Math.min(this.slots.length*os,t*os+rT+.35)))}acquireOpen(e){if(e.open)return e.open;let t=this.pool.find(s=>!this.slots.some(r=>r.open===s))||this.pool.reduce((s,r)=>r.alpha<s.alpha?r:s,this.pool[0]),n=this.slots.find(s=>s.open===t);return n&&(n.open=null,n.showOpen=!1),t.onSteal?.(),e.open=t,t.floorId=e.id,t.screens.forEach(s=>{s.glow=0,s.target=0}),t}setScreens(e){this.screenTargets=e}setDisplayData(e){this.floorData=e,this.activeOpen()?.walls?.setData(e)}prewarm(e){let t=[this.roof,this.shaft,this.cabin,...this.slots.map(a=>a.closed),...this.pool],n=t.map(a=>a.root.visible);t.forEach(a=>{a.root.visible=!0});let s=this.pool.flatMap(a=>nx(a.obj)).filter(a=>!a.visible);s.forEach(a=>{a.visible=!0});let r=new Gt(1,1,{type:en}),o=this.renderer.getRenderTarget();this.renderer.setRenderTarget(r),this.renderer.compile(this.scene,e),this.renderer.setRenderTarget(o),r.dispose(),s.forEach(a=>{a.visible=!1}),t.forEach((a,l)=>{a.root.visible=n[l]})}update(e,t){let n=this.activeIndex,s=this.daylight.night,r=this.slots.length;this.pulseT>=0&&(this.pulseT+=e,!this.swapped&&this.pulseT>=Ho&&(this.swapped=!0,this.applyShown()),this.pulseT>=Ho+Dx&&(this.pulseT=-1));let o=this.pulseT<0?0:this.pulseT<Ho?_i(0,Ho,this.pulseT):1-_i(Ho,Ho+Dx,this.pulseT),a=Math.round(o*iT*4)/4;a!==this.blurPx&&(this.blurPx=a,this.renderer.domElement.style.filter=a?`blur(${a}px)`:"");for(let f of this.slots){f.lift.step(e);let p=f.lift.x*(bl+Math.max(0,f.index-n)*os),x=p<bl*.8,m=f.index*os+p;f.closed.root.position.y=m,f.closed.setShown(x&&!f.showOpen),f.open&&(f.open.root.position.y=m,f.open.setShown(x&&f.showOpen),f.open.alpha&&this.updateOpen(f,e,t,s))}this.roofLift.step(e);let l=this.roofLift.x*(bl+Math.max(0,r-n)*os);this.roof.root.position.y=r*os-ii+l,this.roof.setShown(l<bl*.8),this.cabinY.step(e),this.shaftTop.step(e);let c=this.slots[n];this.introDrop&&(!c||c.lift.x<.001&&c.lift.pending===null)&&(this.introDrop=!1);let h=this.introDrop?c.lift.x*bl:0;this.cabin.root.position.y=this.cabinY.x+h;let u=-ii,d=Math.max(u+.1,this.shaftTop.x);this.shaft.root.position.y=u+h,this.shaft.root.scale.y=(d-u)/this.shaftH,this.updateNightMaps(t)}updateOpen(e,t,n,s){let r=e.open,o=1-Math.exp(-t*3.2),a=this.slots[this.activeIndex]===e;r.screens.forEach((l,c)=>{l&&(l.target=a&&this.screenTargets[c]||0,l.glow+=(l.target-l.glow)*o,l.mat.emissiveIntensity=l.glow*(.32+1.35*s)+s*.03)}),r.walls?.tick(n,s)}};var Fx=.32,Ux=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,aT=Ux?3:5,lT=Ux?5:10,cT=`
#include <packing>
#define BQ_LEVEL ${Fx.toFixed(3)}
#define BQ_SEARCH ${aT}
#define BQ_TAPS ${lT}
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
}`,hT=`
#ifdef USE_MAP
  {
    vec3 bqD = texture2D( map, vMapUv ).rgb;
    diffuseColor.rgb += diffuse * ( bqRelight( bqD ) - bqD ) * bqDay;
    if ( bqLamp.r + bqLamp.g + bqLamp.b > 0.0 ) diffuseColor.rgb += bqLampPools();
  }
#endif`,lp=i=>(i/=255,i<=.04045?i/12.92:((i+.055)/1.055)**2.4),cp=new WeakMap;function uT(i){if(cp.has(i))return cp.get(i);let e=new I(.83,.82,.78);try{let t=i.image,n=96,s=Math.max(1,Math.round(96*t.height/t.width)),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,n,s);let a=o.getImageData(0,0,n,s).data,l=[];for(let u=0;u<a.length;u+=4){let d=lp(a[u]),f=lp(a[u+1]),p=lp(a[u+2]);l.push([.2126*d+.7152*f+.0722*p,d,f,p])}l.sort((u,d)=>u[0]-d[0]);let c=Math.floor(l.length*.88),h=Math.max(c+1,Math.floor(l.length*.98));e.set(0,0,0);for(let u=c;u<h;u++)e.x+=l[u][1],e.y+=l[u][2],e.z+=l[u][3];e.divideScalar(h-c)}catch{}return cp.set(i,e),e}function Ox(i){let e={bqSun:{value:new fe(0,0,0)},bqDir:{value:new I(0,1,0)},bqDay:{value:1},bqShadowMap:{value:null},bqShadowMatrix:{value:i.shadow.matrix},bqShadowInfo:{value:new _t(1,1,1,0)},bqLampPos:{value:Array.from({length:6},()=>new I(0,-99,0))},bqLamp:{value:new fe(0,0,0)},bqLampCone:{value:new Q(.7,.9)},bqTable:{value:Array.from({length:4},()=>new _t)},bqTableY:{value:new _t(-99,-99,-99,-99)}};return{relight(t){if(t.userData.sunRelit||!t.map)return;t.userData.sunRelit=!0;let n={value:uT(t.map)},s=t.onBeforeCompile,r=t.customProgramCacheKey;t.onBeforeCompile=(o,a)=>{s.call(t,o,a),Object.assign(o.uniforms,e,{bqAlbedo:n}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBqWorld;
varying vec3 vBqNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
	vBqWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
	vBqNormal = normalize( mat3( modelMatrix ) * normal );`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${cT}`).replace("#include <color_fragment>",`${hT}
#include <color_fragment>`)},t.customProgramCacheKey=()=>`${r.call(t)}|sun`,t.needsUpdate=!0},update(t,n,s,r){e.bqDir.value.copy(t),e.bqSun.value.setRGB(...n,ot).multiplyScalar(Math.max(0,s)*(1/Fx-1)),e.bqDay.value=r;let o=i.shadow.map,a=i.shadow.camera;e.bqShadowMap.value=o?o.texture:null,e.bqShadowInfo.value.set(a.right-a.left,a.top-a.bottom,a.far-a.near,o?1:0)},lamps(t,n,s,r,o){e.bqLampPos.value.forEach((a,l)=>{t?.[l]?a.copy(t[l]):a.set(0,-99,0)}),e.bqLamp.value.copy(n),e.bqLampCone.value.set(Math.cos(s),Math.cos(s*(1-r))),e.bqTable.value.forEach((a,l)=>{let c=o[l];c&&a.set(c.x0,c.z0,c.x1,c.z1)}),e.bqTableY.value.set(...[0,1,2,3].map(a=>o[a]?o[a].y:-99))}}}var gt=i=>{let e=new fe(i);return e.convertLinearToSRGB(),[e.r,e.g,e.b]},Go=i=>i,dT=Go({night:0,bake:0,lamps:0,windows:0,sunI:2.4,sunC:gt("#FFF1DE"),hemiI:1.05,hemiSky:gt("#F3F2F0"),hemiGnd:gt("#CFC8BE"),fillI:.35,fillC:gt("#E6EEFF"),envI:.5,exposure:1.05,shadow:.34,tint:[1.42,1.43,1.46],floorSun:.72,floorSunC:gt("#FFF6EC"),glassC:gt("#D2E4F2"),glassA:.22,glassE:.12}),fT=Go({night:0,bake:0,lamps:0,windows:.05,sunI:2.6,sunC:gt("#FFEFD9"),hemiI:1,hemiSky:gt("#E1EAFF"),hemiGnd:gt("#C6CAD2"),fillI:.38,fillC:gt("#DCE6FF"),envI:.5,exposure:1.07,shadow:.36,tint:[2.05,2.15,2.35],floorSun:.72,floorSunC:gt("#FFEEDA"),glassC:gt("#A6CCF2"),glassA:.82,glassE:.5}),pT=Go({night:0,bake:0,lamps:.15,windows:.15,sunI:2.8,sunC:gt("#FFA458"),hemiI:.85,hemiSky:gt("#FFD0A4"),hemiGnd:gt("#B48466"),fillI:.3,fillC:gt("#FFC9A4"),envI:.4,exposure:1.05,shadow:.4,tint:[2.3,1.32,.62],floorSun:1,floorSunC:gt("#FFD27E"),glassC:gt("#FFC064"),glassA:.86,glassE:1}),mT=Go({night:.5,bake:.3,lamps:.6,windows:.4,sunI:.3,sunC:gt("#FFC9B0"),hemiI:.8,hemiSky:gt("#B9C2E6"),hemiGnd:gt("#8A8798"),fillI:.25,fillC:gt("#BFC8F0"),envI:.3,exposure:1.04,shadow:.3,tint:[1.3,1.32,1.48],floorSun:0,floorSunC:gt("#FFEBD2"),glassC:gt("#7F98CF"),glassA:.6,glassE:.45}),gT=Go({night:.6,bake:.35,lamps:.85,windows:.7,sunI:.3,sunC:gt("#FF9070"),hemiI:.7,hemiSky:gt("#8C7896"),hemiGnd:gt("#3A3040"),fillI:.2,fillC:gt("#8A80B8"),envI:.28,exposure:1.03,shadow:.32,tint:[1.3,1.02,.84],floorSun:0,floorSunC:gt("#FFD27E"),glassC:gt("#4A5487"),glassA:.8,glassE:.5}),xT=Go({night:1,bake:.6,lamps:1,windows:1,sunI:.2,sunC:gt("#8CA6FF"),hemiI:.4,hemiSky:gt("#6A6158"),hemiGnd:gt("#2A2420"),fillI:.15,fillC:gt("#8C8098"),envI:.2,exposure:1,shadow:.4,tint:[.95,.8,.62],floorSun:0,floorSunC:gt("#FFEBD2"),glassC:gt("#1A2A66"),glassA:.92,glassE:.5});function Vo(i,e,t){let n={};for(let s in i)n[s]=Array.isArray(i[s])?i[s].map((r,o)=>vl(r,e[s][o],t)):vl(i[s],e[s],t);return n}var as=Math.PI/180,hp={lat:42.7,dec:10,noon:760},_T={"Europe/Sofia":[42.7,23.3],"Europe/Kiev":[50.45,30.5],"Europe/Kyiv":[50.45,30.5],"Europe/Moscow":[55.75,37.6],"Europe/Warsaw":[52.2,21],"Europe/Berlin":[52.5,13.4],"Europe/Paris":[48.85,2.35],"Europe/London":[51.5,-.1],"Europe/Madrid":[40.4,-3.7],"Europe/Rome":[41.9,12.5],"Europe/Istanbul":[41,29],"Asia/Dubai":[25.2,55.3],"Asia/Kolkata":[28.6,77.2],"Asia/Singapore":[1.35,103.8],"Asia/Tokyo":[35.7,139.7],"Australia/Sydney":[-33.9,151.2],"America/New_York":[40.7,-74],"America/Chicago":[41.9,-87.6],"America/Denver":[39.7,-105],"America/Los_Angeles":[34.05,-118.25],"America/Sao_Paulo":[-23.55,-46.6]};function yT(i){if(i.has("lat")&&i.has("lon"))return[Number(i.get("lat")),Number(i.get("lon"))];let e=Intl.DateTimeFormat().resolvedOptions().timeZone;return _T[e]||[45,-new Date().getTimezoneOffset()/4]}function Wx(i,e,t){let n=t*as,s=Math.asin(Math.sin(n)*Math.sin(e)+Math.cos(n)*Math.cos(e)*Math.cos(i)),r=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(n)-Math.tan(e)*Math.cos(n));return[s/as,r/as]}function vT(i,e,t){let n=i/864e5-10957.5,s=as*(357.5291+.98560028*n),r=s+as*(1.9148*Math.sin(s)+.02*Math.sin(2*s)+3e-4*Math.sin(3*s)+102.9372)+Math.PI,o=as*23.4397,a=Math.asin(Math.sin(o)*Math.sin(r)),l=Math.atan2(Math.sin(r)*Math.cos(o),Math.cos(r));return Wx(as*(280.16+360.9856235*n+t)-l,a,e)}function bT(i){return Wx(as*(i-hp.noon)/4,hp.dec*as,hp.lat)}function MT(i,e){let t=_i(-40,40,e),n=Vo(Vo(fT,pT,t),dT,_i(4,30,i));n=Vo(Vo(mT,gT,t),n,_i(-1.5,3,i)),n=Vo(xT,n,_i(-9,-1,i));let s=1-_i(-6,2,i);return n.sunEl=vl(Math.max(i,5),42,s),n.sunAz=vl(Lt(270-.3*e,235,305),250,s),n}function ST(i,e){let t=e>0;return i<-5?"night":i<2?t?"dusk":"dawn":i<15?t?"golden":"dawn":"day"}function Bx(i){let e=/^(\d{1,2}):(\d{2})$/.exec(String(i||"").trim());return e?Lt(Number(e[1]),0,24)*60+Lt(Number(e[2]),0,59):null}var ET=2e4,wT=2e3,kx=6,zx=16759668,TT=22,AT=4,Hx=.78,Vx=.75,Fs={x:8.3,z:6.3,y0:-.05,y1:3},RT=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,CT=i=>i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshToonMaterial,Gx=/^(slab|glass)/,IT=/^table_\d+$/;function qx({scene:i,renderer:e}){let t=new URLSearchParams(location.search);e.shadowMap.enabled=!0,e.shadowMap.type=mr;let n=new Cs(16777215,1);n.castShadow=!0,n.shadow.mapSize.setScalar(RT?1024:2048),n.shadow.bias=-5e-4,n.shadow.normalBias=.02,n.shadow.radius=2;let s=new Xa(16777215,16777215,1),r=new Cs(16777215,.4);r.position.set(6,5,8),i.add(n,n.target,s,r);let o=[];for(let z=0;z<kx;z++){let oe=new fr(zx,0,0,Hx,Vx,2);oe.castShadow=!1,oe.position.set(0,-99,0),i.add(oe,oe.target),o.push(oe)}let a=new fe,l=[],c=Ox(n),h=new Map,u=new Set,d=new Set,f={value:0},p={night:0,lampsK:0,windowsK:0,phase:"day",minutes:720,el:45,az:0,params:null},x=null,m=t.get("real")==="1",g=null,_=null,E=null,v=null,S=-1e9,M=-1e9,A=-1e9,y=new I,w=new I,R=new I,P=new fe,N=t.get("time");N&&N!=="auto"&&(x=Bx(N));function k(z){x=z&&z!=="auto"?Bx(z):null,M=S=-1e9}function D(){let z=new Date;if(x!==null&&!m)[p.el,p.az]=bT(x);else{x!==null&&z.setHours(Math.floor(x/60),x%60,0,0);let[oe,le]=yT(t);[p.el,p.az]=vT(z.getTime(),oe,le)}p.minutes=x!==null?x:z.getHours()*60+z.getMinutes()+z.getSeconds()/60,E=MT(p.el,p.az),p.phase=ST(p.el,p.az)}function B(){u.clear(),d.clear(),g.group.traverse(oe=>{if(oe.isMesh)for(let le of Array.isArray(oe.material)?oe.material:[oe.material])le.userData.nightPatched&&(u.add(le),c.relight(le)),le.name==="glass_pane"&&d.add(le)});let z=g.activeOpen();if(z?.root.traverse(oe=>{if(!oe.isMesh)return;let Oe=(Array.isArray(oe.material)?oe.material:[oe.material]).every(Be=>CT(Be)&&!Be.transparent)&&!Gx.test(oe.name)&&!Gx.test(oe.parent?.name||"");oe.castShadow=oe.receiveShadow=Oe}),l=[],z){z.root.updateMatrixWorld(!0);for(let oe of z.obj.children){if(!IT.test(oe.name)||!oe.visible)continue;let le=new $t().setFromObject(oe);l.push({x0:le.min.x,z0:le.min.z,x1:le.max.x,z1:le.max.z,y:le.max.y-z.root.position.y})}}}function X(){let z=g?.activeOpen()?.root;z?z.getWorldPosition(w):w.set(0,0,0);let oe=w.y;w.y+=(Fs.y0+Fs.y1)/2,n.target.position.copy(w),n.position.copy(w).addScaledVector(y,30);let le=n.shadow.camera;le.position.copy(n.position),le.lookAt(w),le.updateMatrixWorld();let Oe=1/0,Be=-1/0,Ze=1/0,K=-1/0,ee=1/0,me=-1/0;for(let Ue=0;Ue<8;Ue++)R.set(w.x+(Ue&1?Fs.x:-Fs.x),oe+(Ue&2?Fs.y1:Fs.y0),w.z+(Ue&4?Fs.z:-Fs.z)),R.applyMatrix4(le.matrixWorldInverse),Oe=Math.min(Oe,R.x),Be=Math.max(Be,R.x),Ze=Math.min(Ze,R.y),K=Math.max(K,R.y),ee=Math.min(ee,R.z),me=Math.max(me,R.z);le.left=Oe-.1,le.right=Be+.1,le.bottom=Ze-.1,le.top=K+.1,le.near=Math.max(.1,-me-.5),le.far=-ee+.5,le.updateProjectionMatrix()}function $(z){n.color.setRGB(...z.sunC,ot),n.intensity=z.sunI;let oe=To.degToRad(z.sunEl),le=To.degToRad(z.sunAz);y.set(Math.cos(oe)*Math.cos(le),Math.sin(oe),Math.cos(oe)*Math.sin(le)),X(),s.color.setRGB(...z.hemiSky,ot),s.groundColor.setRGB(...z.hemiGnd,ot),s.intensity=z.hemiI,r.color.setRGB(...z.fillC,ot),r.intensity=z.fillI,i.environmentIntensity=z.envI,e.toneMappingExposure=z.exposure,f.value=z.bake,p.night=z.night,p.lampsK=z.lamps,p.windowsK=z.windows;for(let[Oe,Be]of h)Be==="lamp"?Oe.emissiveIntensity=z.lamps*2.4:Be==="windows"&&(Oe.emissiveIntensity=z.windows*1.7);for(let Oe of u)Oe.color.setRGB(...z.tint);P.setRGB(...z.glassC,ot);for(let Oe of d)Oe.color.copy(P),Oe.emissive.copy(P).multiplyScalar(z.glassE),Oe.opacity=z.glassA;c.update(y,z.floorSunC,z.floorSun,1-z.bake)}function re(){let z=v?v():null,oe=z?z.k*p.lampsK:0;for(let Oe=0;Oe<kx;Oe++){let Be=o[Oe],Ze=z&&z.positions[Oe];Ze?(Be.position.copy(Ze),Be.target.position.set(Ze.x,Ze.y-3,Ze.z),Be.intensity=TT*oe):Be.intensity=0}let le=g?.activeOpen()?.root.position.y??0;a.set(zx).multiplyScalar(AT*oe),c.lamps(oe>.001?z.positions:null,a,Hx,Vx,l.map(Oe=>({...Oe,y:Oe.y+le})))}function Z(z,oe){if(oe-M>ET&&(M=oe,D()),g&&oe-A>wT&&(A=oe,B()),!_)_=E;else{let le=1-Math.exp(-z/.45);_=Vo(_,E,le)}if(p.params=_,$(_),re(),oe-S>1e3){S=oe;let le=document.documentElement;le.dataset.daylight!==p.phase&&(le.dataset.daylight=p.phase),le.style.setProperty("--night",_.night.toFixed(3))}}let te={uNight:f,state:p,update:Z,setTime:k,track(z,oe){h.set(z,oe)},untrack(z){h.delete(z)},setLampSource(z){v=z},setBuilding(z){g=z,A=-1e9},get shadowOpacity(){return _?_.shadow:.3},get night(){return p.night}};return window.bothq=Object.assign(window.bothq||{},{setTime:k,daylight:p}),te}var Xx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},PT=new Zn(-1,1,1,-1,0,1),up=class extends Mt{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},LT=new up,Us=class{constructor(e){this._mesh=new Re(LT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,PT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Tr=class extends Vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ao.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Us(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ml=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},cu=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var hu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new Gt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:en}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tr(Xx),this.copyPass.material.blending=jn,this.timer=new Ka}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ml!==void 0&&(o instanceof Ml?n=!0:o instanceof cu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var uu=class extends Vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new fe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Sl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var du=class extends Vn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ao.clone(Sl.uniforms),this.material=new xo({name:Sl.name,uniforms:this.uniforms,vertexShader:Sl.vertexShader,fragmentShader:Sl.fragmentShader}),this._fsQuad=new Us(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},rt.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===el?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===il?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===nl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fn={centre:[.5,.45],radii:[.82,.78],stops:[[0,"#FFFFFF"],[.5,"#F8F8FA"],[1,"#E6E7EB"]],shadow:"#0B0C11",layers:[{sigma:4,down:2,w:.4},{sigma:30,down:22,w:.4},{sigma:120,down:70,w:.34}]},Os=i=>{let e=new fe;return e.setStyle(i,hn),new I(e.r,e.g,e.b)},$x={stops:[[0,"#243056"],[.5,"#141A2E"],[1,"#080B18"]],shadow:"#000000"};function dp(i=!1){let e=i?$x:fn,[t,n]=fn.centre,[s,r]=fn.radii,o=e.stops.map(([a,l])=>`${l} ${(a*100).toFixed(1)}%`).join(", ");return`radial-gradient(ellipse ${s*100}% ${r*100}% at ${t*100}% ${n*100}%, ${o})`}var Yx=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,NT=`
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
  }`,DT=`
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
  }`;function FT(i,e){return new Gt(Math.max(2,i),Math.max(2,e),{type:en,depthBuffer:!1,minFilter:zt,magFilter:zt,generateMipmaps:!1})}var fu=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.needsSwap=!0,this.maskMat=new St({color:16777215,toneMapped:!1,side:Qt,depthTest:!1,depthWrite:!1,fog:!1}),this.blurMat=new nn({uniforms:{tMap:{value:null},texel:{value:new Q},sigma:{value:0}},vertexShader:Yx,fragmentShader:NT,depthTest:!1,depthWrite:!1});let[n,s,r]=fn.layers;this.composeMat=new nn({uniforms:{tDiffuse:{value:null},tHold:{value:null},tL0:{value:null},tL1:{value:null},tL2:{value:null},stop0:{value:Os(fn.stops[0][1])},stop1:{value:Os(fn.stops[1][1])},stop2:{value:Os(fn.stops[2][1])},stopMid:{value:fn.stops[1][0]},shadowC:{value:Os(fn.shadow)},centre:{value:new Q(...fn.centre)},radii:{value:new Q(...fn.radii)},push:{value:[new Q,new Q,new Q]},layerW:{value:new I(n.w,s.w,r.w)}},vertexShader:Yx,fragmentShader:DT,depthTest:!1,depthWrite:!1}),this.fsQuad=new Us(this.blurMat),this.t=null,this.size=new Q(1,1),this.setSize(1,1)}setTheme(e){let t=e?$x:fn,n=this.composeMat.uniforms;n.stop0.value.copy(Os(t.stops[0][1])),n.stop1.value.copy(Os(t.stops[1][1])),n.stop2.value.copy(Os(t.stops[2][1])),n.shadowC.value.copy(Os(t.shadow)),this.dark=!!e}setSize(e,t){this.size.set(e,t);let n=this.t;n&&Object.values(n).forEach(r=>r.dispose());let s=r=>FT(Math.round(e/r),Math.round(t/r));this.t={mask:s(4),cA:s(4),cB:s(4),mA:s(8),mB:s(8),hA:s(16),wA:s(32),wB:s(32)}}blur(e,t,n,s,r,o){let a=this.blurMat.uniforms;a.tMap.value=t.texture,a.texel.value.set(s/t.width,r/t.height),a.sigma.value=o,e.setRenderTarget(n),this.fsQuad.material=this.blurMat,this.fsQuad.render(e)}buildAura(e,t){let n={target:e.getRenderTarget(),auto:e.autoClear,color:e.getClearColor(new fe),alpha:e.getClearAlpha(),shadow:e.shadowMap.enabled},s=this.t;e.shadowMap.enabled=!1,e.autoClear=!0,e.setClearColor(0,0),e.setRenderTarget(s.mask);let r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.maskMat,e.render(this.scene,this.camera),this.scene.overrideMaterial=r,e.autoClear=!1;let o=fn.layers.map((a,l)=>Math.min(13,a.sigma*t/[4,8,32][l]));this.blur(e,s.mask,s.cB,1,0,o[0]),this.blur(e,s.cB,s.cA,0,1,o[0]),this.blur(e,s.mask,s.mB,0,0,0),this.blur(e,s.mB,s.hA,0,0,0),this.blur(e,s.hA,s.wA,0,0,0),this.blur(e,s.wA,s.wB,1,0,o[2]),this.blur(e,s.wB,s.wA,0,1,o[2]),this.blur(e,s.mB,s.mA,1,0,o[1]),this.blur(e,s.mA,s.mB,0,1,o[1]),e.setRenderTarget(n.target),e.autoClear=n.auto,e.setClearColor(n.color,n.alpha),e.shadowMap.enabled=n.shadow}render(e,t,n){let s=this.composeMat.uniforms,r=this.size.y,o=Math.max(.3,this.camera.zoom||1),a=r/1080*Math.pow(o,.55),l=1/(1+.35*Math.max(0,o-1));this.buildAura(e,a);let c=this.t;s.tDiffuse.value=n.texture,s.tHold.value=s.tL0.value=c.cA.texture,s.tL1.value=c.mB.texture,s.tL2.value=c.wA.texture,fn.layers.forEach((h,u)=>s.push.value[u].set(0,h.down*a/r)),s.layerW.value.set(fn.layers[0].w,fn.layers[1].w*l,fn.layers[2].w*l),this.fsQuad.material=this.composeMat,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.fsQuad.render(e)}dispose(){Object.values(this.t).forEach(e=>e.dispose()),this.maskMat.dispose(),this.blurMat.dispose(),this.composeMat.dispose(),this.fsQuad.dispose()}};var Kx={name:"BotHQTiltShift",uniforms:{tDiffuse:{value:null},dir:{value:new Q(1,0)},focus:{value:.5},band:{value:.24},falloff:{value:.5},strength:{value:1.5}},vertexShader:`
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
    }`};function UT(){return new URLSearchParams(location.search).get("tiltshift")!=="0"}function Zx(i,e,t){let n=i.getSize(new Q),s=i.getPixelRatio(),r=new Gt(n.x*s,n.y*s,{type:en,samples:4}),o=new hu(i,r);o.setPixelRatio(s),o.renderTarget2.dispose(),o.renderTarget2=new Gt(n.x*s,n.y*s,{type:en}),o.writeBuffer=o.renderTarget2,o.readBuffer=o.renderTarget1,o.addPass(new uu(e,t));let a=new Tr(Kx),l=new Tr(Kx);a.enabled=l.enabled=UT(),o.addPass(a),o.addPass(l),o.addPass(new du);let c=new fu(e,t);o.addPass(c);let h={composer:o,setSize(u,d){o.setPixelRatio(i.getPixelRatio()),o.setSize(u,d);let f=u*i.getPixelRatio(),p=d*i.getPixelRatio();a.uniforms.dir.value.set(1/f,0),l.uniforms.dir.value.set(0,1/p),this.base=1.05*i.getPixelRatio(),a.uniforms.strength.value=l.uniforms.strength.value=this.base},setDark(u){c.setTheme(!!u)},render(u,d,f=1){a.uniforms.focus.value=l.uniforms.focus.value=u,a.uniforms.strength.value=l.uniforms.strength.value=this.base*f,o.render(d)}};return h.setSize(n.x,n.y),h}var pu={working:"#34C759",idle:"#A1A1A6",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF"},OT={waiting_user:"Waiting for you",error:"Error",stuck:"Stuck?",done:"Done",working:"Working",idle:"Resting"},BT=Math.PI/4,fp=.42,Jx=1,pp=3.5,kT=.9,zT=1.2,HT=.034,VT=gu([[0,"rgba(255,255,255,0.95)"],[.45,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),GT=gu([[0,"rgba(0,0,0,0.38)"],[.6,"rgba(0,0,0,0.12)"],[1,"rgba(0,0,0,0)"]]),WT=gu([[0,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.42)"],[1,"rgba(255,255,255,0)"]]),qT=gu([[0,"rgba(255,255,255,0)"],[.6,"rgba(255,255,255,0)"],[.8,"rgba(255,255,255,0.95)"],[.9,"rgba(255,255,255,0.3)"],[1,"rgba(255,255,255,0)"]]),XT=new Wt(2,2),YT=.95,mu=class{constructor(e,t){this.id=e.id,this.ctx=t,this.phase=QT(e.id)%1e3/1e3*Math.PI*2,this.status=null,this.hovered=!1,this.selected=!1,this.anim=null,this.nextBlink=1+Math.random()*3,this.blinkT=-1,this.nextAction=1+Math.random()*2,this.hopCooldown=.6,this.retiring=!1,this.dead=!1,this.hostAlpha=1,this.tagKey="",this.yawS=new dn(fp,.3),this.scaleS=new dn(1,.28),this.eyeX=new dn(0,.16),this.eyeY=new dn(0,.16),this.modelScale=1,this.root=new it,this.pivot=new it,this.modelWrap=new it,this.pivot.add(this.modelWrap),this.root.add(this.pivot);let n=new Re(new Wt(.85,.85),new St({map:GT,transparent:!0,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.006,n.renderOrder=1,this.pivot.add(n),this.ring=new Re(new Wt(1.5,1.5),new St({map:VT,transparent:!0,depthWrite:!1,color:pu.idle,opacity:0})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=1,this.root.add(this.ring),this.tagEl=document.createElement("div"),this.tagEl.className="hqt",this.tagEl.dataset.mode="off",this.tagEl.innerHTML='<div class="hqt-pill"><i class="hqt-dot"></i><span class="hqt-text"></span></div><div class="hqt-stem"></div>',this.tagText=this.tagEl.querySelector(".hqt-text"),this.tag=new $h(this.tagEl),this.tag.center.set(.5,0),this.tag.position.y=Jx+.24,this.tag.visible=!1,this.pivot.add(this.tag),this.setPlaceholderModel(e.color),t.parent.add(this.root)}setPlaceholderModel(e){let t=new Re(new hr(.46,40,28),$T(e));t.scale.set(1,.95,.82),t.position.y=.44;let n=new Ia(.042,.085,6,12),s=new It({color:1315863,roughness:.25}),r=new Re(n,s);r.position.set(-.12,.52,.36);let o=new Re(n,s);o.position.set(.12,.52,.36);let a=new it;a.add(t,r,o),this.modelScale=1,this.useModel(a,[r,o],!0)}setModel(e,t){let n=[];e.traverse(l=>{/^eye_[LR]/.test(l.name)&&n.push(l),l.isMesh&&t&&/body/.test(l.name+(l.parent?.name||""))&&(l.material=l.material.clone(),l.material.color.set(t))}),n=n.filter(l=>!n.some(c=>c!==l&&jT(c,l)));let s=new $t().setFromObject(e),r=s.getSize(new I),o=Jx/Math.max(r.x,r.y,r.z,.01);e.scale.multiplyScalar(o),s.setFromObject(e);let a=s.getCenter(new I);e.position.x-=a.x,e.position.z-=a.z,e.position.y-=s.min.y,this.modelScale=e.scale.x||1,s.setFromObject(e),this.tag.position.y=s.max.y+.24,this.useModel(e,n,!1)}useModel(e,t,n){for(let s of this.pickMeshes||[])this.ctx.pickables.delete(s);this.modelWrap.clear(),this.modelWrap.add(e),this.eyes=t,this.eyeBase=t.map(s=>s.scale.y),this.eyePos=t.map(s=>s.position.clone()),this.pickMeshes=[],e.traverse(s=>{s.isMesh&&(s.userData.actorId=this.id,this.pickMeshes.push(s),this.retiring||this.ctx.pickables.add(s))}),this.placeholder=n}update(e,t,n){let s=e.effective_status||e.status,r=s!==this.status,o=this.status;this.status=s,this.bot=e;let a=pu[s]||pu.idle;this.ring.material.color.set(a),this.tagEl.dataset.status=s,this.tagEl.style.setProperty("--c",a),this.selected=n.selectedBot===e.id,this.renderTag(),t&&(!this.spot||this.spot.pos.distanceToSquared(t.pos)>1e-4)&&(this.spot?this.travelTo(t):this.dropIn(t),this.spot=t),this.ring.position.y=.012-(this.spot?this.spot.pos.y:0),r&&o&&(s==="done"?(this.celebrate(),this.hop(.45)):(s==="waiting_user"||s==="error")&&this.hop(.3))}renderTag(){let e=this.status,t=this.bot;if(!t)return;let n=e==="waiting_user"||e==="error"||e==="stuck",s=this.selected?"sel":n?"attn":this.hovered?"hover":"off",r=t.name||"";if(s==="attn"){let a=KT(e,t.step);r=this.hovered?`${t.name} \xB7 ${a}`:a}let o=`${s}|${e}|${r}`;o!==this.tagKey&&(this.tagKey=o,this.tagEl.dataset.mode=s,this.tagText.textContent=r,this.tagEl.title="")}spotIsLounge(){return!!this.spot&&this.spot.lounge}setHovered(e){this.hovered!==e&&(this.hovered=e,e&&!this.anim&&this.hop(.2),this.renderTag())}retire(){if(!this.retiring){this.retiring=!0,this.hovered=!1,this.scaleS.to(0);for(let e of this.pickMeshes||[])this.ctx.pickables.delete(e);this.tagEl.dataset.mode="off",this.tag.visible=!1}}dropIn(e){this.root.position.copy(e.pos),this.baseYaw=e.yaw,this.yawS.snap(e.yaw+fp),this.anim={kind:"drop",t:-(this.ctx.dropDelay||0),dur:.75,from:2.4},this.scaleS.snap(this.ctx.dropDelay>0?.001:1),this.ctx.dropDelay>0&&this.scaleS.to(1,this.ctx.dropDelay)}travelTo(e){let t=this.root.position.clone(),n=t.distanceTo(e.pos);if(Ds||n<.05){this.root.position.copy(e.pos),this.baseYaw=e.yaw;return}let s=new I().subVectors(e.pos,t);this.anim={kind:"travel",t:0,dur:Math.max(.8,n/2.6),from:t,to:e.pos.clone(),toYaw:e.yaw,travelYaw:Math.atan2(s.x,s.z)}}hop(e){Ds||this.anim||this.retiring||(this.anim={kind:"hop",t:0,dur:.62,h:e})}celebrate(){if(Ds||this.retiring)return;this.endCelebration();let e=new fe(pu.done),t=new Re(XT,new St({map:qT,color:e,transparent:!0,depthWrite:!1,opacity:0}));t.rotation.x=-Math.PI/2,t.position.y=this.ring.position.y+.003,t.renderOrder=2;let n=new Ma(new ao({map:WT,color:e,transparent:!0,depthWrite:!1,opacity:0}));n.position.y=Math.max(.3,this.tag.position.y-.24)*.55,n.renderOrder=2,this.root.add(t,n),this.fx={t:0,ripple:t,halo:n},this.joy=.75}endCelebration(){if(this.fx){for(let e of[this.fx.ripple,this.fx.halo])e.removeFromParent(),e.material.dispose();this.fx=null}}tickCelebration(e){let t=this.fx;t.t+=e;let n=t.t/YT;if(n>=1){this.endCelebration();return}let s=1-(1-n)**3;t.ripple.scale.setScalar(.4+1.6*s),t.ripple.material.opacity=.8*(1-n)**1.3;let r=Math.min(1,t.t/.55);t.halo.scale.setScalar(.8+1.3*(1-(1-r)**2)),t.halo.material.opacity=.6*Math.sin(Math.PI*r)}tick(e,t){let n=this.pivot,s=this.status,r=0,o=1,a=1,l=0,c=0,h=0;if(!Ds){let S=Math.sin(t*2.1+this.phase);if(a=1+.018*S,o=1-.012*S,s==="working"&&(r=.012*Math.abs(Math.sin(t*9+this.phase)),l=.06),s==="stuck"&&(c=.09*Math.sin(t*1.3+this.phase)),s==="error"){let M=(t+this.phase)%1.6;M<.45&&(h=.03*Math.sin(M*70))}s==="waiting_user"&&!this.anim&&(this.nextAction-=e,this.nextAction<=0&&(this.hop(.32),this.nextAction=1.7+Math.random()*.6))}if(this.anim){let S=this.anim;S.t+=e;let M=Lt(S.t/S.dur,0,1);if(S.kind==="hop")({y:r,sx:o,sy:a}=ZT(M,S.h));else if(S.kind==="drop"){S.t<0&&(r=S.from);let A=Math.min(1,M/.55);S.t>=0&&(r=S.from*(1-A*A)),M>.55&&({sx:o,sy:a}=jx((M-.55)/.45))}else if(S.kind==="travel"){let A=JT(M);this.root.position.lerpVectors(S.from,S.to,A);let y=Math.max(1,Math.round(S.dur/.42)),w=M*y%1;r=.55*Math.sin(w*Math.PI),a=1+.12*Math.sin(w*Math.PI),o=1-.07*Math.sin(w*Math.PI),this.baseYaw=M<.92?S.travelYaw:S.toYaw}S.t>=S.dur&&(S.kind==="travel"&&(this.root.position.copy(S.to),this.baseYaw=S.toYaw),this.anim=null)}let u=this.ctx.cursor,d=0,f=0,p=99;if(u?.active&&!this.retiring&&this.hostAlpha>.6){let S=u.x-this.root.position.x,M=u.z-this.root.position.z;p=Math.hypot(S,M),p<pp&&(d=_i(pp,pp-1.3,p),f=Math.atan2(S,M))}this.hopCooldown-=e,p<kT&&this.hopCooldown<=0&&!this.anim&&!Ds&&(this.hop(.26),this.hopCooldown=zT);let x=(this.baseYaw||0)+(this.anim?.kind==="travel"?0:fp),m=x;if(this.hovered||this.selected)m=BT;else if(d>0){let M=!this.spotIsLounge()&&s!=="idle"?.8:1.9;m=x+Lt(mp(f,x),-M,M)*d}this.yawS.target=this.yawS.x+mp(m,this.yawS.x),this.yawS.step(e);let g=this.selected?1.06:1,_=this.scaleS.step(e);if(n.position.set(h,r,0),n.scale.set(o*g*_,a*g*_,o*g*_),n.rotation.set(l,this.yawS.x,c,"YXZ"),d>0&&!this.hovered&&!this.selected){let S=mp(f,this.yawS.x);this.eyeX.to(Math.sin(Lt(S,-1.2,1.2))*HT*d),this.eyeY.to(-.012*d)}else this.eyeX.to(0),this.eyeY.to(0);this.eyeX.step(e),this.eyeY.step(e);let E=s==="working"?.14+.05*Math.sin(t*3+this.phase):s==="waiting_user"||s==="error"?.4+.25*(.5+.5*Math.sin(t*5)):s==="stuck"?.3+.15*Math.sin(t*2):0,v=this.selected?.8:this.hovered?Math.max(.4,E):E;this.ring.material.opacity=v*Lt(_,0,1),this.ring.scale.setScalar(this.selected?1.12:1),this.fx&&this.tickCelebration(e),this.tag.visible=this.tagEl.dataset.mode!=="off"&&this.hostAlpha>.5&&!this.retiring&&this.scaleS.x>.6,this.tickEyes(e),this.retiring&&this.scaleS.x<.03&&(this.dead=!0,this.dispose())}tickEyes(e){if(!this.eyes.length)return;let t=this.status,n=1;if(t==="idle"&&!this.spotIsLounge()?n=.12:t==="error"?n=.55:t==="stuck"&&(n=.7),n>.5&&!Ds&&(this.nextBlink-=e,this.nextBlink<=0&&(this.blinkT=0,this.nextBlink=2.2+Math.random()*3.5),this.blinkT>=0)){this.blinkT+=e;let r=this.blinkT/.16;r>=1?this.blinkT=-1:n*=Math.max(.1,Math.abs(1-2*r))}this.joy>0&&(this.joy-=e,n=Math.min(n,.32));let s=1/this.modelScale;this.eyes.forEach((r,o)=>{r.scale.y=this.eyeBase[o]*n,r.position.x=this.eyePos[o].x+this.eyeX.x*s,r.position.y=this.eyePos[o].y+this.eyeY.x*s})}dispose(){this.endCelebration();for(let e of this.pickMeshes||[])this.ctx.pickables.delete(e);this.tagEl.remove(),this.root.removeFromParent()}};function $T(i){return new Kt({color:i,roughness:.32,clearcoat:1,clearcoatRoughness:.18,sheen:.3})}function KT(i,e){let t=(e||"").trim();return i==="stuck"||!t?OT[i]||"":(t=t.charAt(0).toUpperCase()+t.slice(1),t.length>34?`${t.slice(0,33).trimEnd()}\u2026`:t)}function ZT(i,e){if(i<.15){let t=i/.15;return{y:0,sx:1+.12*t,sy:1-.18*t}}if(i<.7){let t=(i-.15)/.55;return{y:e*Math.sin(t*Math.PI),sx:.93,sy:1.12}}return{y:0,...jx((i-.7)/.3)}}function jx(i){let e=Math.sin(i*Math.PI)*(1-i);return{sx:1+.16*e,sy:1-.2*e}}var JT=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function mp(i,e){return((i-e+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function jT(i,e){for(let t=e.parent;t;t=t.parent)if(t===i)return!0;return!1}function QT(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function gu(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);for(let[r,o]of i)n.addColorStop(r,o);t.fillStyle=n,t.fillRect(0,0,128,128);let s=new pi(e);return s.colorSpace=ot,s}var gp=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon"],Qx=[...gp,"rounded_cube","cone","trio"],e_=["none","glasses","stem","antenna","bow"],eA=/^#?[0-9a-f]{6}$/i;function t_(i){if(typeof i!="string")return null;let e=i.trim().toLowerCase().replace(/[\s-]+/g,"_");return Qx.includes(e)?e:null}function n_(i){if(typeof i!="string")return"none";let e=i.trim().toLowerCase();return e_.includes(e)?e:"none"}function i_(i){return typeof i=="string"&&eA.test(i.trim())?`#${i.trim().replace("#","").toUpperCase()}`:null}function xp(i){let e=2166136261,t=String(i);for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function s_(i){return gp[(xp(`shape:${i}`)>>>4)%gp.length]}var El=i=>i*Math.PI/180,tA=(i,e,t)=>i+(e-i)*t;function nA(i,e,t,n=720){let s=[];for(let r=0;r<n;r++){let o=2*Math.PI*r/n,a=Math.cos(o),l=Math.sin(o),c=(Math.abs(a/i)**t+Math.abs(l/e)**t)**(-1/t);s.push([c*a,c*l])}return s}function iA(i,e,t){let n=[];for(let s=0;s<i;s++)n.push([e*Math.cos(El(t+360*s/i)),e*Math.sin(El(t+360*s/i))]);return n}function sA(i,e,t=24){let n=i.length,s=[];for(let o=0;o<n;o++){let a=[i[(o+1)%n][0]-i[o][0],i[(o+1)%n][1]-i[o][1]],l=Math.hypot(a[0],a[1]);s.push([a[1]/l,-a[0]/l])}let r=[];for(let o=0;o<n;o++){let a=s[(o+n-1)%n],l=Math.atan2(a[1],a[0]),c=Math.atan2(s[o][1],s[o][0]);for(;c<l;)c+=2*Math.PI;for(let h=0;h<t;h++){let u=tA(l,c,h/(t-1));r.push([i[o][0]+e*Math.cos(u),i[o][1]+e*Math.sin(u)])}}return r}function rA(i,e,t,n,s=1440){let r=[];for(let o=0;o<s;o++){let a=2*Math.PI*o/s,l=((1+Math.cos(i*(a-El(n))))/2)**t,c=e+(1-e)*l;r.push([c*Math.cos(a),c*Math.sin(a)])}return r}function oA(i,e=96){let t=[];for(let[o,a,l]of i)for(let c=0;c<e;c++){let h=2*Math.PI*c/e;t.push([o+l*Math.cos(h),a+l*Math.sin(h)])}t.sort((o,a)=>o[0]-a[0]||o[1]-a[1]);let n=(o,a,l)=>(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]),s=[],r=[];for(let o of t){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}for(let o=t.length-1;o>=0;o--){let a=t[o];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}return s.slice(0,-1).concat(r.slice(0,-1))}function aA(i,e=720){let t=[];for(let n=0;n<e;n++){let s=2*Math.PI*n/e,r=i[0];for(let o=1;2*o-1<i.length;o++)r+=i[2*o-1]*Math.cos(o*s)+(i[2*o]??0)*Math.sin(o*s);t.push([r*Math.cos(s),r*Math.sin(s)])}return t}function lA(i,e){let t=Math.cos(El(e)),n=Math.sin(El(e));return i.map(([s,r])=>[s*t-r*n,s*n+r*t])}function r_(i){let e;if(i.kind==="sup")e=nA(i.a,i.b,i.n);else if(i.kind==="star")e=rA(i.k,i.rin,i.p,i.tip);else if(i.kind==="poly")e=sA(iA(i.n,i.R-i.rr,i.rot??90),i.rr),i.sy&&(e=e.map(([t,n])=>[t,n*i.sy]));else if(i.kind==="hull")e=oA(i.circles);else if(i.kind==="fourier")e=aA(i.c);else throw new Error(`outline ${i.kind}`);return i.rotate?lA(e,i.rotate):e}function _p(i,e,t=[0,0]){let n=i.length,s=new Float64Array(e);for(let r=0;r<e;r++){let o=2*Math.PI*r/e,a=Math.cos(o),l=Math.sin(o),c=0;for(let h=0;h<n;h++){let u=i[h][0]-t[0],d=i[h][1]-t[1],f=i[(h+1)%n],p=f[0]-t[0]-u,x=f[1]-t[1]-d,m=a*x-l*p;if(Math.abs(m)<1e-12)continue;let g=(u*x-d*p)/m,_=(u*l-d*a)/m;_>=-1e-9&&_<=1+1e-9&&g>c&&(c=g)}s[r]=c}return s}function xu(i,e=1){let t=i.length,n=Float64Array.from(i);for(let s=0;s<e;s++){let r=new Float64Array(t);for(let o=0;o<t;o++)r[o]=.25*n[(o+t-1)%t]+.5*n[o]+.25*n[(o+1)%t];n=r}return n}var Rr=.8,cA=.018;var o_=.05,Bs=i=>i*Math.PI/180,wp=[1,0,0,0,1,0,0,0,1],vu=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]];function m_(i,e){let t=new Array(9);for(let n=0;n<3;n++)for(let s=0;s<3;s++)t[n*3+s]=i[n*3]*e[s]+i[n*3+1]*e[3+s]+i[n*3+2]*e[6+s];return t}var Cp=i=>{let e=Math.cos(Bs(i)),t=Math.sin(Bs(i));return[e,-t,0,t,e,0,0,0,1]};function hA(i){let e=i[2];if(e>.99999)return wp;let t=[-i[1],i[0],0],n=[0,-t[2],t[1],t[2],0,-t[0],-t[1],t[0],0],s=m_(n,n);return wp.map((r,o)=>r+n[o]+s[o]/(1+e))}var qo=i=>{let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]},Ar=(i,e,t)=>i+(e-i)*t,Tp=class{constructor(e,t=Rr){let n=e.N??88;this.N=n,this.D=t,this.th=Float64Array.from({length:n},(h,u)=>2*Math.PI*u/n);let s=r_(e.outline),r=xu(_p(s,n),e.smooth??1),o=[],a=[];for(let h=0;h<n;h++)o.push(r[h]*Math.cos(this.th[h])),a.push(r[h]*Math.sin(this.th[h]));let l=Math.max(Math.max(...o)-Math.min(...o),Math.max(...a)-Math.min(...a));this.r=r.map(h=>h*t/l),this.T=(e.depth??.5)*t/2,this.dome=e.dome??.1,this.nb=e.nb??7,this.flat=e.flat??[.45,.8],this.wall=(e.wall??0)*this.T;let c=e.bevel??.92;if(this.W=xu(this.r.map(h=>Math.min(c*this.T,.85*h)),3),e.inner){let h=xu(this.r.map((u,d)=>u-this.W[d]),e.inner);this.W=this.W.map((u,d)=>this.r[d]-Math.min(h[d],this.r[d]-.35*u))}this.centre=[0,0]}_interp(e,t){let n=this.N,s=(t%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*n,r=Math.floor(s)%n,o=s-Math.floor(s);return Ar(e[r],e[(r+1)%n],o)}rimAt(e){let t=this._interp(this.r,e);return[this.centre[0]+t*Math.cos(e),this.centre[1]+t*Math.sin(e)]}zAt(e,t){let n=Math.atan2(t,e),s=this._interp(this.r,n),r=this._interp(this.W,n),o=Math.min(Math.hypot(e,t),s*.999),a=s-o;if(a>=r){let c=o/(s-r);return this.T*(1+this.dome*(1-c*c)**2)}let l=1-a/r;return this.wall+(this.T-this.wall)*Math.sqrt(Math.max(0,1-l*l))}nAt(e,t){return g_(this,e,t)}rings(){let{r:e,W:t,T:n,dome:s,N:r,nb:o,wall:a}=this,l=[];for(let u of this.flat)l.push({rho:Float64Array.from({length:r},(d,f)=>u*(e[f]-t[f])),z:n*(1+s*(1-u*u)**2)});for(let u=0;u<=o;u++){let d=Math.PI/2*(u/o);l.push({rho:Float64Array.from({length:r},(f,p)=>e[p]-t[p]*(1-Math.sin(d))),z:a+(n-a)*Math.cos(d)})}let h=(a>0?l:l.slice(0,-1)).slice().reverse().map(u=>({rho:u.rho,z:-u.z}));return l.concat(h)}emit(e=[0,0,0]){let t=this.rings(),n=this.N,s=t.length,r=this.th,o=this.T*(1+this.dome),a=[[e[0],e[1],e[2]+o]];for(let u of t)for(let d=0;d<n;d++)a.push([e[0]+u.rho[d]*Math.cos(r[d]),e[1]+u.rho[d]*Math.sin(r[d]),e[2]+u.z]);a.push([e[0],e[1],e[2]-o]);let l=[];for(let u=0;u<n;u++)l.push([0,1+(u+1)%n,1+u]);for(let u=0;u<s-1;u++)for(let d=0;d<n;d++){let f=(d+1)%n;l.push([1+u*n+d,1+u*n+f,1+(u+1)*n+f,1+(u+1)*n+d])}let c=1+(s-1)*n,h=1+s*n;for(let u=0;u<n;u++)l.push([h,c+u,c+(u+1)%n]);return{V:a,F:l}}},Ap=class{constructor(e,t=Rr){this.D=t;let n=t,s=e.rr??.12*(t/Rr),o=(e.width??.9)*t/2-s,a=n-s,l=Math.atan2(o,a-s),c=[[0,0],[o*.5,0],[o,0]],h=7,u=4;for(let x=1;x<=h;x++){let m=Ar(-Math.PI/2,l,x/h);c.push([o+s*Math.cos(m),s+s*Math.sin(m)])}let d=Math.cos(l),f=Math.sin(l);for(let x=1;x<u;x++){let m=x/u;c.push([Ar(o,0,m)+s*d,Ar(s,a,m)+s*f])}for(let x=0;x<=h;x++){let m=Ar(l,Math.PI/2,x/h);c.push([s*Math.cos(m),a+s*Math.sin(m)])}c[c.length-1][0]=0,this.prof=c,this.sectors=e.sectors??56,this.H=n,this.centre=[0,n*.45];let p=c.slice(1).concat(c.slice(1,-1).reverse().map(([x,m])=>[-x,m]));this.N=96,this.r=_p(p,this.N,this.centre),this.side=c.slice(3)}rho(e){let t=this.side;if(e<=t[0][1])return t[0][0];for(let n=1;n<t.length;n++)if(e<=t[n][1])return Ar(t[n-1][0],t[n][0],(e-t[n-1][1])/Math.max(1e-9,t[n][1]-t[n-1][1]));return 0}zAt(e,t){let n=this.rho(t),s=Math.min(Math.abs(e),n*.999);return Math.sqrt(Math.max(0,n*n-s*s))}nAt(e,t){return g_(this,e,t)}rimAt(e){let t=(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*this.N,n=Math.floor(t)%this.N,s=t-Math.floor(t),r=Ar(this.r[n],this.r[(n+1)%this.N],s);return[this.centre[0]+r*Math.cos(e),this.centre[1]+r*Math.sin(e)]}emit(e=[0,0,0]){let t=this.prof,n=this.sectors,s=[],r=[],o=[];for(let[a,l]of t){if(a<1e-9){o.push({pole:s.length}),s.push([e[0],e[1]+l,e[2]]);continue}let c=s.length;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;s.push([e[0]+a*Math.cos(u),e[1]+l,e[2]+a*Math.sin(u)])}o.push({start:c})}for(let a=0;a<o.length-1;a++){let l=o[a],c=o[a+1];for(let h=0;h<n;h++){let u=(h+1)%n;l.pole!==void 0?r.push([l.pole,c.start+u,c.start+h]):c.pole!==void 0?r.push([l.start+h,l.start+u,c.pole]):r.push([l.start+h,l.start+u,c.start+u,c.start+h])}}return{V:s,F:r}}};function g_(i,e,t){let n=.004*(i.D/Rr),s=(i.zAt(e+n,t)-i.zAt(e-n,t))/(2*n),r=(i.zAt(e,t+n)-i.zAt(e,t-n))/(2*n);return qo([-s,-r,1])}var x_=(i,e,t,n={})=>({kind:"poly",n:i,R:1,rr:e,rot:t,...n}),Gn=(i,e,t,n,s)=>({c:i,sp:e,w:+(t/2.6).toFixed(3),h:t,pair:n,tilt:s}),uA={cloud:[.4644,-.0013,.0016,.0344,.0162,.0252,-.0051,-.0056,-.0039,.0193,-.0015,.0026,-.0043,-.0025,.0049,-.0053,.0015],star4:[.4131,1e-4,0,-3e-4,-.0167,-2e-4,-2e-4,.0736,.0341,-2e-4,-1e-4,2e-4,.0022,-4e-4,0,.0012,-4e-4,1e-4,-1e-4,-.0014,7e-4,2e-4,1e-4,.0027,.0053],clover:[.4623,0,0,.0045,-.0273,2e-4,-1e-4,-.0036,-.0449,-4e-4,1e-4,2e-4,8e-4,-4e-4,0,.0105,-.0056,0,2e-4,-.002,5e-4],bubble:[.4568,.0013,-.0022,.0313,.0104,-.0395,.0269,-.0026,.0079,.0083,.002,7e-4,.0027,-.0027,-1e-4,7e-4,-.0011],flower:[.4574,0,0,.0025,-.022,0,0,.0026,3e-4,2e-4,0,.0207,-.0284,0,0,.0046,.0035,-1e-4,-3e-4,.0023,-.002,0,1e-4,.0014,.0062,-1e-4,1e-4,-.0023,6e-4,3e-4,-2e-4,0,-3e-4,1e-4,3e-4,-.003,-.001,-1e-4,-1e-4,4e-4,-.0018],star6:[.4235,-1e-4,0,.0048,-.0394,0,0,-.0051,-.0014,4e-4,-1e-4,.0417,-.0574,4e-4,2e-4,.0021,.0032,-1e-4,-1e-4,-.003,-2e-4,1e-4,0,.001,.0033,1e-4,1e-4,.0058,-8e-4,-1e-4,3e-4,2e-4,-.0049,-1e-4,0,-6e-4,0]},Wo=i=>({kind:"fourier",c:uA[i]}),dA={sphere:{type:"slab",outline:{kind:"sup",a:1,b:1,n:2},face:Gn([.17,.218],.26,.272,25,36)},cloud:{type:"slab",N:96,smooth:0,inner:10,outline:Wo("cloud"),face:Gn([.161,.15],.214,.236,16,28)},rounded_square:{type:"slab",outline:{kind:"hull",circles:[[.146,.381,.107],[-.393,.195,.141],[-.149,-.383,.106],[.397,-.195,.139]]},face:Gn([.08,.023],.18,.212,16,29)},star4:{type:"slab",N:112,smooth:0,depth:.3,bevel:.5,outline:Wo("star4"),face:Gn([.076,.086],.186,.191,16,28)},clover:{type:"slab",N:104,smooth:0,inner:10,outline:Wo("clover"),face:Gn([.062,.081],.212,.212,15,28)},bubble:{type:"slab",N:96,smooth:0,inner:8,outline:Wo("bubble"),face:Gn([.179,.087],.208,.214,16,24)},flower:{type:"slab",N:108,smooth:0,inner:10,outline:Wo("flower"),face:Gn([.107,.033],.179,.213,15,28)},drop:{type:"slab",outline:{kind:"hull",circles:[[.015,-.031,.419],[-.166,.34,.148]]},face:Gn([.192,.145],.201,.227,16,27)},pill:{type:"slab",outline:{kind:"hull",circles:[[.149,.042,.339],[-.148,-.042,.34]]},face:Gn([.144,.14],.267,.233,15,27)},triangle:{type:"slab",outline:{kind:"hull",circles:[[.723,-.02,.185],[-.23,.471,.319],[-.222,-.339,.41]]},face:Gn([.145,.213],.201,.216,12,54)},pentagon:{type:"slab",outline:{kind:"hull",circles:[[.276,.325,.101],[-.184,.425,.177],[-.414,.049,.157],[-.202,-.411,.151],[.41,-.181,.211]]},face:Gn([.075,.053],.203,.222,15,28)},star6:{type:"slab",N:108,smooth:0,depth:.3,bevel:.5,outline:Wo("star6"),face:Gn([.092,.017],.189,.202,16,28)},hexagon:{type:"slab",outline:{kind:"hull",circles:[[.264,.33,.112],[-.154,.4,.152],[-.404,.073,.162],[-.267,-.334,.108],[.153,-.399,.153],[.412,-.073,.155]]},face:Gn([.1,.029],.275,.274,15,28)},rounded_cube:{type:"slab",outline:{...x_(4,.27,45),rotate:18},depth:.74,bevel:.62,wall:.5,face:{c:[.04,.03],sp:.22,w:.1,h:.23,pair:12,tilt:25}},cone:{type:"lathe",face:{c:[0,.31],sp:.22,w:.105,h:.23,pair:0,tilt:0}},trio:{type:"trio"}},fA=[{key:"a",mat:0,D:.42,at:[-.2,.2,0],def:{type:"slab",N:48,nb:5,flat:[.5],outline:{kind:"sup",a:1,b:.93,n:2.4,rotate:5},face:{c:[.12,.08],sp:.25,w:.12,h:.25,pair:14,tilt:18}}},{key:"b",mat:1,D:.46,at:[.19,.23,.05],primary:!0,def:{type:"slab",N:48,nb:5,flat:[.5],outline:{...x_(6,.3,90),rotate:-6},face:{c:[.03,-.02],sp:.26,w:.11,h:.25,pair:10,tilt:4}}},{key:"c",mat:2,D:.42,at:[.02,.57,-.09],host:!0,def:{type:"slab",N:60,nb:5,flat:[.5],depth:.4,bevel:.7,outline:{kind:"star",k:6,rin:.58,p:1.1,tip:90},face:{c:[0,-.07],sp:.25,w:.115,h:.24,pair:0,tilt:0}}}];function a_(i,e){return i.type==="lathe"?new Ap(i,e):new Tp(i,e)}function yu(i,e,t,n=16,s=10,r=2.7){let o=[[0,0,t]];for(let h=1;h<s;h++){let u=Math.PI*h/s;for(let d=0;d<n;d++){let f=2*Math.PI*d/n,p=Math.cos(f),x=Math.sin(f),m=(Math.abs(p)**r+Math.abs(x)**r)**(-1/r);o.push([i*Math.sin(u)*p*m,e*Math.sin(u)*x*m,t*Math.cos(u)])}}o.push([0,0,-t]);let a=[];for(let h=0;h<n;h++)a.push([0,1+(h+1)%n,1+h]);for(let h=0;h<s-2;h++)for(let u=0;u<n;u++){let d=(u+1)%n;a.push([1+h*n+u,1+h*n+d,1+(h+1)*n+d,1+(h+1)*n+u])}let l=o.length-1,c=1+(s-2)*n;for(let h=0;h<n;h++)a.push([l,c+h,c+(h+1)%n]);return{V:o,F:a}}function pA(i,e,t=22,n=8){let s=[],r=[];for(let o=0;o<t;o++){let a=2*Math.PI*o/t;for(let l=0;l<n;l++){let c=2*Math.PI*l/n;s.push([(i+e*Math.cos(c))*Math.cos(a),(i+e*Math.cos(c))*Math.sin(a),e*Math.sin(c)])}}for(let o=0;o<t;o++)for(let a=0;a<n;a++)r.push([o*n+a,(o+1)%t*n+a,(o+1)%t*n+(a+1)%n,o*n+(a+1)%n]);return{V:s,F:r}}function _u(i,e,t=8){let n=i.length,s=[],r=[],o=(d,f)=>[d[0]-f[0],d[1]-f[1],d[2]-f[2]],a=(d,f)=>[d[1]*f[2]-d[2]*f[1],d[2]*f[0]-d[0]*f[2],d[0]*f[1]-d[1]*f[0]];for(let d=0;d<n;d++){let f=qo(o(i[Math.min(d+1,n-1)],i[Math.max(d-1,0)])),p=a(f,[0,0,1]);Math.hypot(...p)<1e-6&&(p=a(f,[0,1,0])),p=qo(p);let x=a(f,p);for(let m=0;m<t;m++){let g=2*Math.PI*m/t,_=Math.cos(g)*e[d],E=Math.sin(g)*e[d];s.push([i[d][0]+_*p[0]+E*x[0],i[d][1]+_*p[1]+E*x[1],i[d][2]+_*p[2]+E*x[2]])}}for(let d=0;d<n-1;d++)for(let f=0;f<t;f++){let p=(f+1)%t;r.push([d*t+f,d*t+p,(d+1)*t+p,(d+1)*t+f])}let l=qo(o(i[1],i[0])),c=qo(o(i[n-1],i[n-2])),h=s.length;s.push([i[0][0]-l[0]*e[0]*.5,i[0][1]-l[1]*e[0]*.5,i[0][2]-l[2]*e[0]*.5]);let u=s.length;s.push([i[n-1][0]+c[0]*e[n-1]*.8,i[n-1][1]+c[1]*e[n-1]*.8,i[n-1][2]+c[2]*e[n-1]*.8]);for(let d=0;d<t;d++){let f=(d+1)%t;r.push([h,f,d]),r.push([u,(n-1)*t+d,(n-1)*t+f])}return{V:s,F:r}}var l_=(i,e,t,n)=>[0,1,2].map(s=>(1-n)**2*i[s]+2*(1-n)*n*e[s]+n*n*t[s]),wl=(i,e,t=[0,0,0])=>i.map(n=>{let s=vu(e,n);return[s[0]+t[0],s[1]+t[1],s[2]+t[2]]});function __(i,e,t,n,s=.7){let r=i.zAt(e,t),o=i.nAt(e,t),a=qo([s*o[0],s*o[1],s*o[2]+(1-s)]);return{z:r,M:m_(hA(a),Cp(n))}}function mA(i,e){let{body:t,at:n,D:s}=i,r={...i.face};e==="glasses"&&i.glasses&&(r.sp=Math.max(r.sp,.25),r.h=Math.min(r.h,.2),r.w=Math.min(r.w,.09));let o=[r.c[0]*s,r.c[1]*s],a=[Math.cos(Bs(r.pair))*r.sp*s/2,Math.sin(Bs(r.pair))*r.sp*s/2],l=r.w*s/2,c=r.h*s/2,h=.62*l,u=[];for(let[d,f]of[["L",[o[0]-a[0],o[1]-a[1]]],["R",[o[0]+a[0],o[1]+a[1]]]]){let{z:p,M:x}=__(t,f[0],f[1],r.tilt),m=yu(l,c,h,i.eyeSeg??16,i.eyeRings??10);u.push({side:d,c:f,M:x,centre:[f[0]+n[0],f[1]+n[1],p+.15*h+n[2]],V:wl(m.V,x),F:m.F})}return u}function c_(i,e=0){let t=-Math.sin(Bs(e)),n=Math.cos(Bs(e)),s=-1/0,r=i.rimAt(Math.PI/2);for(let o=0;o<180;o++){let a=i.rimAt(2*Math.PI*o/180),l=a[0]*t+a[1]*n;l>s+1e-9&&(s=l,r=a)}return r}function h_(i,e,t,n){let{body:s,at:r,D:o}=e,a=o/Rr,l=(h,u=0)=>[h[0]+r[0],h[1]+r[1],u+r[2]],c=[];if(i==="stem"){let h=c_(s,20),u=[h[0]+.012*a,h[1]-.045*a,0],d=[u[0]-.035*a,u[1]+.09*a,0],f=[u[0]-.1*a,u[1]+.155*a,0],p=Array.from({length:11},(m,g)=>g/10),x=_u(p.map(m=>l(l_(u,d,f,m))),p.map(m=>a*(.045-.01*m)),8);c.push({...x,mat:0})}else if(i==="antenna"){let h=c_(s),u=[h[0]-.01*a,h[1]-.06*a,0],d=[u[0]+.015*a,u[1]+.1*a,0],f=[u[0]+.05*a,u[1]+.2*a,0],p=Array.from({length:9},(E,v)=>v/8),x=_u(p.map(E=>l(l_(u,d,f,E))),p.map(E=>a*(.036-.008*E)),8);c.push({...x,mat:0});let m=.075*a,g=yu(m,m,m,14,10,2),_=l([f[0]+.004*a,f[1]+.5*m],0);c.push({V:g.V.map(E=>[E[0]+_[0],E[1]+_[1],E[2]+_[2]]),F:g.F,mat:1})}else if(i==="bow"){let h=Bs(64),u=s.rimAt(h),d=[u[0]*.93+(1-.93)*s.centre[0],u[1]*.93+(1-.93)*s.centre[1]],f=s.T!==void 0?s.T*.34:.08*a,p=h+Math.PI/2-Bs(14),x=Cp(p*180/Math.PI),m=yu(.13*a,.085*a,.06*a,14,9,2),g=yu(.06*a,.06*a,.058*a,12,8,2),_=l(d,f);for(let E of[-1,1])c.push({V:wl(m.V,x,[_[0]+E*.12*a*Math.cos(p),_[1]+E*.12*a*Math.sin(p),_[2]-.004*a]),F:m.F,mat:1});c.push({V:wl(g.V,wp,_),F:g.F,mat:1})}else if(i==="glasses"){let h=Math.min(.118,t.sp*.5-.006)*o,u=.017*o,d=[];for(let _ of t.list){let{z:E,M:v}=__(s,_.c[0],_.c[1],0,.7),S=[_.c[0],_.c[1],E+.004*a],M=pA(h,u,o<.6?14:24,o<.6?6:8);c.push({V:wl(M.V,v,l([S[0],S[1]],S[2])),F:M.F,mat:0}),d.push(_.c)}let[f,p]=d,x=Math.hypot(p[0]-f[0],p[1]-f[1]),m=[(p[0]-f[0])/x,(p[1]-f[1])/x],g=[];for(let _=0;_<5;_++){let E=_/4,v=f[0]+m[0]*h+(p[0]-f[0]-2*m[0]*h)*E,S=f[1]+m[1]*h+(p[1]-f[1]-2*m[1]*h)*E;g.push(l([v,S],s.zAt(v,S)+u*1.2+.006*a*Math.sin(Math.PI*E)))}c.push({..._u(g,Array(5).fill(u),6),mat:0});for(let[_,E]of[[-1,f],[1,p]]){let v=[];for(let S=0;S<9;S++){let M=S/8,A=E[0]+_*m[0]*(h+M*(.4*o-h+.02*a)),y=E[1]+_*m[1]*(h+M*(.4*o-h+.02*a)),w=s.rimAt(Math.atan2(y-s.centre[1],A-s.centre[0])),R=Math.hypot(w[0]-s.centre[0],w[1]-s.centre[1])*.985,P=Math.hypot(A-s.centre[0],y-s.centre[1]);if(P>R){let N=R/P;A=s.centre[0]+(A-s.centre[0])*N,y=s.centre[1]+(y-s.centre[1])*N}v.push(l([A,y],s.zAt(A,y)+u*1.2))}c.push({..._u(v,Array(9).fill(u*.9),6),mat:0})}}return c}function Rp(i,e=t=>t){let t=[...new Set(i.map(a=>a.mat))].sort((a,l)=>a-l),n=[],s=[],r=[];for(let a of t){let l=s.length;for(let c of i){if(c.mat!==a)continue;let h=c.V.map(e),u=[];for(let p of c.F)p.length===3?u.push(p):(u.push([p[0],p[1],p[2]]),u.push([p[0],p[2],p[3]]));let d=0;for(let[p,x,m]of u){let g=h[p],_=h[x],E=h[m];d+=g[0]*(_[1]*E[2]-_[2]*E[1])+g[1]*(_[2]*E[0]-_[0]*E[2])+g[2]*(_[0]*E[1]-_[1]*E[0])}let f=n.length/3;for(let p of h)n.push(p[0],p[1],p[2]);for(let[p,x,m]of u)s.push(f+p,f+(d<0?m:x),f+(d<0?x:m))}r.push({start:l,count:s.length-l,materialIndex:a})}let o=new Mt;o.setAttribute("position",new Qe(n,3)),o.setIndex(s);for(let a of r)o.addGroup(a.start,a.count,a.materialIndex);return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o}function gA(i){let e=dA[i];return e.type==="trio"?fA.map(t=>({body:a_(t.def,t.D),at:t.at,D:t.D,face:t.def.face,mat:t.mat,primary:!!t.primary,host:!!t.host,glasses:!!t.primary,eyeSeg:12,eyeRings:8})):[{body:a_(e,Rr),at:[0,0,0],D:Rr,face:e.face,mat:0,primary:!0,host:!0,glasses:!0}]}var yp=new Map,vp=new Map;function xA(i,e){let t=`${i}|${e}`;if(yp.has(t))return yp.get(t);let n=gA(i),s=Cp(e),r=m=>vu(s,m),a=n.map(m=>({...m.body.emit(m.at),mat:m.mat})).map(m=>({...m,V:m.V.map(r)})),l=1/0;for(let m of a)for(let g of m.V)l=Math.min(l,g[1]);let c=.01,h=cA;for(let m of a)for(let g of m.V){let _=g[1]-l-h;g[1]=l+h+.5*(_+Math.sqrt(_*_+c*c))}let u=[1/0,1/0,1/0],d=[-1/0,-1/0,-1/0];for(let m of a)for(let g of m.V)for(let _=0;_<3;_++)u[_]=Math.min(u[_],g[_]),d[_]=Math.max(d[_],g[_]);let f=[-(u[0]+d[0])/2,-u[1],-(u[2]+d[2])/2],p=Rp(a,m=>[m[0]+f[0],m[1]+f[1],m[2]+f[2]]),x={units:n,R:s,shift:f,geo:p,nMats:new Set(n.map(m=>m.mat)).size,tris:p.index.count/3};return yp.set(t,x),x}function _A(i,e,t){let n=`${i}|${e}|${t}`;if(vp.has(n))return vp.get(n);let s=xA(i,e),{units:r,R:o,shift:a}=s,l=x=>{let m=vu(o,x);return[m[0]+a[0],m[1]+a[1],m[2]+a[2]]},c=[],h=2,u=null;for(let x of r){let m=mA(x,t);t==="glasses"&&x.glasses&&(u={u:x,list:m,sp:Math.max(x.face.sp,.25)});for(let g of m){let _=x.primary?`eye_${g.side}`:`eye_${g.side}_${h}`,E=Rp([{V:wl(g.V,o),F:g.F,mat:0}]);c.push({name:_,geo:E,pos:l(g.centre)})}x.primary||h++}let d=null;if(t!=="none"){let x=[];if(t==="glasses")u&&(x=h_("glasses",u.u,u,null));else{let m=r.find(g=>g.host)||r[0];x=h_(t,m,null,null)}if(x.length){let m=Rp(x.map(E=>({...E,V:E.V.map(v=>vu(o,v))})),E=>[E[0]+a[0],E[1]+a[1],E[2]+a[2]]),g=m.boundingBox.clone(),_=s.geo.boundingBox;g.min.max(_.min.clone().subScalar(o_)),g.max.min(_.max.clone().addScalar(o_)),m.boundingBox=g,d={geo:m,accent:x.some(E=>E.mat===1)}}}let f=s.tris;for(let x of c)f+=x.geo.index.count/3;d&&(f+=d.geo.index.count/3);let p={body:s,eyes:c,extra:d,tris:f};return vp.set(n,p),p}var yA=.78,vA=.06;function y_(i){let e=new fe(i),t=.2126*e.r+.7152*e.g+.0722*e.b;return t>=yA?"light":t<vA?"dark":"mid"}var bp=new Map;function u_(i){return bp.has(i)||bp.set(i,new Kt({color:i,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.06})),bp.get(i)}var bA="#141417",Mp=new Map;function MA(){return Mp.has("dark")||Mp.set("dark",new Kt({color:bA,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.04})),Mp.get("dark")}var Sp=new Map;function SA(i,e=!1){let t=`${i}|${e}`;return Sp.has(t)||Sp.set(t,new Kt(e?i==="glasses"?{color:"#ECECEF",roughness:.32,clearcoat:.8,clearcoatRoughness:.05}:{color:"#8A8D93",roughness:.4,clearcoat:.6,clearcoatRoughness:.06}:i==="glasses"?{color:"#101012",roughness:.45,clearcoat:.4,clearcoatRoughness:.06}:{color:"#3A3D40",roughness:.5,clearcoat:.3,clearcoatRoughness:.06})),Sp.get(t)}var Ep=new Map;function EA(i){return Ep.has(i)||Ep.set(i,new Kt({color:i,roughness:.3,clearcoat:1,clearcoatRoughness:.06})),Ep.get(i)}var d_=["#FFD60A","#FF2D6F","#2D7BFF","#2FD067"];function wA(i){let e=new fe(i).convertLinearToSRGB(),t=y_(i)==="dark"?["#FFFFFF",...d_]:d_,n=t[0],s=-1;for(let r of t){let o=new fe(r).convertLinearToSRGB(),a=(e.r+o.r)/2,l=(2+a)*(e.r-o.r)**2+4*(e.g-o.g)**2+(3-a)*(e.b-o.b)**2;l>s&&(s=l,n=r)}return n}function TA(i){let e={};new fe(i).getHSL(e);let t=new fe().setHSL((e.h+150/360)%1,Math.max(e.s,.7),Math.min(.46,Math.max(.36,e.l*.85))),n=e.l<.22?new fe("#F4F4F6"):new fe("#111113");return[i,`#${t.getHexString().toUpperCase()}`,`#${n.getHexString().toUpperCase()}`]}var AA=["#000000","#A06B39","#FB2B3E","#FD690F","#F59312","#14C16F","#13B7A2","#1E86FC","#8F59F9","#F93498","#959595"],f_=AA.slice(0,10);function p_(){return 0}function v_({shape:i,color:e,accessory:t,seed:n}={}){let s=String(n??"blob"),r=t_(i)??s_(s),o=i_(e)??f_[xp(`color:${s}`)%f_.length],a=n_(t),l=_A(r,p_(s),a),c=l.body.nMats>1?TA(o):[o],h=c[l.body.nMats>1?a==="glasses"?1:2:0],u=new it;u.name="blob";let d=new Re(l.body.geo,l.body.nMats>1?c.map(u_):u_(o));d.name="body",u.add(d);for(let f of l.eyes){let p=new Re(f.geo,MA());p.name=f.name,p.position.set(f.pos[0],f.pos[1],f.pos[2]),u.add(p)}if(l.extra){let f=SA(a==="glasses"?"glasses":"stem",y_(h)==="dark"),p=l.extra.accent?[f,EA(wA(o))]:f,x=new Re(l.extra.geo,p);x.name="extra",u.add(x)}return u.userData={generated:!0,look:{shape:r,color:o,accessory:a},tris:l.tris,tilt:p_(s)},u}var Up="/4d",Op=new I(1,1,1).normalize(),Dn={x:-.4,y:-.3,z:.3},ks={w:35,h:22},RA=29.5,hs={min:.75,max:3,focus:2},CA=230,IA=360,M_=Math.sin(Math.atan(1/Math.SQRT2)),S_=[1,3,5,7,9,2,4,6,8,10,11,13,15,17,19,12,14,16,18,20,21],PA=new Set(ru),mt,zs,We,Oi,cn,cs,Xo,dt,Rn,vi=null,Cu=null,E_={currentFloor:null,selectedBot:null},An=new Map,Ws=new Set,Bp=new Set,Ip=new Map,$o=[],Ko=new Za,Zo=new Q,Bi={active:!1,x:0,z:0},Tu=new On(new I(0,1,0),0),Hs=new I,bu=new Ja,He={x:new dn(Dn.x,.45),y:new dn(Dn.y,.55),z:new dn(Dn.z,.45),zoom:new dn(0,.4)},ls=null,Lp=!1,wt=null,ki=new Map,Vs=null,Eu=!1,kp=0,Gs=0,Np=!1,yi=null,Dp=0,Au=null,Cl=!0,Ru=!1,Pp=!1,LA=!1,Mu=1e3/30,NA=.9,Tn=(()=>{let i=new URLSearchParams(location.search);return{floor:Ru?null:i.get("floor"),from:i.get("from"),intro:i.get("intro"),hold:i.has("hold")?Number(i.get("hold")):null,cam:i.get("cam"),cursor:i.get("cursor")}})(),Fp=!1,w_=!1,DA=bx(`${Up}/office`);function T_(i,e={}){let t=++Dp;Cl=!0,cn=i,cs=e,cn.classList.add("hq-scene"),FA(),yi=cn.querySelector(".hq-loading"),yi||(yi=document.createElement("div"),yi.className="hq-loading",yi.setAttribute("role","status"),yi.innerHTML='<span class="hq-loading-label">Building the office</span><span class="hq-loading-track"><i></i></span>',cn.append(yi)),mt=new qh({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1}),mt.setPixelRatio(Math.min(devicePixelRatio,1.5)),mt.outputColorSpace=ot,mt.toneMapping=xr,mt.toneMappingExposure=1.05,mt.setClearColor(0,0),mt.domElement.className="hq-canvas",cn.append(mt.domElement),zs=new Kh,zs.domElement.className="hq-labels",cn.append(zs.domElement),Oi=new rr;let n=new Po(mt);Oi.environment=n.fromScene(new jh,.04).texture,Oi.environmentIntensity=.55,Xo=qx({scene:Oi,renderer:mt}),document.documentElement.dataset.sky="studio",cn.style.background=dp(Al),We=new Zn(-1,1,1,-1,.1,240),We.position.copy(Op).multiplyScalar(80),We.lookAt(0,0,0),DA.then(s=>{if(t!==Dp||!mt)return;vi=s,dt=new lu({scene:Oi,daylight:Xo,assets:s,baseUrl:`${Up}/office`,renderer:mt}),Xo.setBuilding(dt),s.spots.lounges.forEach(o=>{o&&(o.lounge=!0)}),window.bothq=Object.assign(window.bothq||{},{source:s.source}),Rl();let r=()=>{Cu&&zp()};Promise.race([Lx,new Promise(o=>setTimeout(o,1500))]).then(r,r)}),Rn=Zx(mt,Oi,We),Al&&Rn.setDark&&Rn.setDark(!0),VA(),Au=new ResizeObserver(Rl),Au.observe(cn),Rl(),mt.setAnimationLoop(QA),window.bothq=Object.assign(window.bothq||{},{scene:{get camera(){return We},get building(){return dt},cam:He,actors:An,get daylight(){return Xo},switchFloor:s=>dt&&R_(s,!1),settle:wu}})}function FA(){if(!document.querySelector('link[href*="scene.css"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="/4d/scene.css",document.head.append(i)}if(!document.querySelector('link[href*="family=Inter"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700&display=swap",document.head.append(i)}}function A_(i,e){Cu=i,E_={...e},dt&&zp()}function zp(){let i=Cu,e=E_,t=[...i.floors].sort((d,f)=>(d.order??0)-(f.order??0));dt.setFloors(t);let n=e.currentFloor&&t.some(d=>d.id===e.currentFloor)?e.currentFloor:t[0]?.id??"_";Tn.floor&&t.some(d=>d.id===Tn.floor)&&(n=Tn.from&&!Eu&&t.some(d=>d.id===Tn.from)?Tn.from:Tn.floor),dt.activeId!==n&&R_(n,!Eu),Eu=!0;let s=dt.activeOpen();if(!s)return;let r=Object.values(i.bots).filter(d=>d.floor===dt.activeId),o=new Set(r.map(d=>d.id));for(let[d,f]of An)o.has(d)||(f.retire(),Ws.add(f),An.delete(d));let a=Math.max(1e-4,...r.map(d=>d.usage_share||0)),l=UA(r),c=new Array(Math.max(20,vi.spots.desks.length)).fill(0),h=Math.max(0,kp+.55-Gs);for(let d of r){let f=An.get(d.id);f||(f=new mu(d,{parent:s.root,inst:s,pickables:Bp,confetti:KA,cursor:Bi,dropDelay:h}),An.set(d.id,f),OA(f,d));let p=(S_[(d.desk||1)-1]||1)-1,x=vi.spots.desks[p]||vi.spots.desks.find(Boolean);(d.effective_status||d.status)==="working"&&!l.has(d.id)&&vi.spots.desks[p]&&(c[p]=1),f.update(d,l.get(d.id)||x,{maxShare:a,selectedBot:e.selectedBot})}dt.setScreens(c);let u=t.find(d=>d.id===dt.activeId);if(dt.setDisplayData({floorName:u?u.name:"",bots:r,hour:Nx(i.now)}),ls&&!An.has(ls)&&(ls=null),!Np){if(Np=!0,Tn.intro==="0"&&wu(3.5),Tn.from&&Tn.floor&&zp(),Tn.hold!==null&&(wu(Tn.hold),Fp=!0),Tn.cursor){let[d,f]=Tn.cursor.split(",").map(Number);Bi.active=!0,Bi.x=d,Bi.z=f,w_=!0,wu(1.2)}if(Tn.cam){let[d,f,p]=Tn.cam.split(",").map(Number);He.x.snap(d),He.z.snap(f),He.zoom.snap(Math.log(p||1))}}}function wu(i=3){let e=.03333333333333333;for(let t=0;t<i;t+=e){Gs+=e,D_(e),dt.update(e,performance.now());for(let n of An.values())n.hostAlpha=dt.activeOpen()?.alpha??1,n.tick(e,Gs);for(let n of Ws)n.tick(e,Gs),n.dead&&Ws.delete(n)}}function UA(i){let e=new Map,t=vi.spots.lounges.filter(Boolean);return i.filter(s=>(s.effective_status||s.status)==="idle").sort((s,r)=>(s.desk||0)-(r.desk||0)).slice(0,t.length).forEach((s,r)=>e.set(s.id,t[r])),e}function OA(i,e){let t=null,n=r=>{let o=`${r.avatar||r.id}|${r.color||""}|${JSON.stringify(r.look||null)}`;o!==t&&(t=o,(r.has_glb===!1?Promise.resolve(null):BA(r.avatar||r.id)).then(a=>{if(i.dead||t!==o)return;if(a)return i.setModel(a.clone(!0));let l=r.look||{};i.setModel(v_({shape:l.shape,color:l.color||r.color,accessory:l.accessory,seed:r.id}))}))};n(e);let s=i.update.bind(i);i.update=(r,o,a)=>(n(r),s(r,o,a))}function BA(i){return Ip.has(i)||Ip.set(i,new Fo().loadAsync(`${Up}/blobs/${encodeURIComponent(i)}.glb`).then(e=>e.scene).catch(()=>null)),Ip.get(i)}function R_(i,e){for(let n of An.values())n.retire(),Ws.add(n);An.clear(),ls=null,dt.setActive(i,{intro:e});let t=dt.activeY+Dn.y;He.x.to(Dn.x),He.z.to(Dn.z),He.y.to(t),He.zoom.to(0),e&&(He.x.snap(Dn.x),He.z.snap(Dn.z),He.y.snap(t-2.6),He.zoom.snap(Math.log(.86)),He.y.to(t,.1),He.zoom.to(0,.1)),kp=Gs,e&&(dt.prewarm(We),kA())}var Al=!1;function C_(i){Al=!!i,cn&&(cn.style.background=dp(Al)),Rn&&Rn.setDark&&Rn.setDark(Al)}function Iu(){return mt?mt.domElement:null}function I_(i){Cl=!!i,Cl&&mt&&Rl()}function P_(){if(Dp++,Cl=!1,mt){mt.setAnimationLoop(null);try{mt.dispose()}catch{}mt.domElement.remove()}try{Rn?.composer?.dispose?.()}catch{}zs?.domElement.remove(),yi?.remove(),Au?.disconnect(),Au=null,cn&&cn.classList.remove("hq-scene","is-hovering"),An.clear(),Ws.clear(),$o.length=0,Bp.clear(),dt=null,Rn=null,Xo=null,Oi=null,We=null,mt=null,zs=null,cn=null,cs=null,yi=null,Cu=null,Eu=!1,Np=!1,ls=null,wt=null,Vs=null,kp=0}function kA(){let i=yi;i&&(yi=null,i.classList.add("is-done"),setTimeout(()=>i.remove(),450),cs?.onReady?.())}function L_(i){if(!dt)return;if(i==="reset"){He.x.to(Dn.x),He.z.to(Dn.z),He.y.to(dt.activeY+Dn.y),He.zoom.to(0);return}let e=Lt(Math.exp(He.zoom.target)*(i==="in"?1.3:1/1.3),hs.min,hs.max);He.zoom.to(Math.log(e))}function N_(i){let e=An.get(i);!e||!dt||(He.x.to(e.root.position.x),He.z.to(e.root.position.z),He.y.to(dt.activeY+.6),He.zoom.to(Math.log(Math.max(Math.exp(He.zoom.target),hs.focus))))}function D_(i){zA(),He.x.step(i),He.y.step(i),He.z.step(i),He.zoom.step(i);let e=Lt(Math.exp(He.zoom.x),hs.min*.85,hs.max*1.1);Math.abs(e-We.zoom)>1e-5&&(We.zoom=e,We.updateProjectionMatrix()),Hs.set(He.x.x,He.y.x,He.z.x),We.position.copy(Hs).addScaledVector(Op,80)}function zA(){He.x.target=Lt(He.x.target,-9.5,9.5),He.z.target=Lt(He.z.target,-7.5,7.5),He.zoom.target=Lt(He.zoom.target,Math.log(hs.min),Math.log(hs.max))}function Rl(){if(!mt)return;let i=cn.clientWidth||1,e=cn.clientHeight||1;mt.setSize(i,e,!1),zs.setSize(i,e),Rn?.setSize(i,e);let t=i/e,n=Pp?ks.w:ks.w+(RA-ks.w)*(1-Lt((i-560)/340,0,1)),s=Math.max(ks.h,n/t)/2*(Pp?NA:1);We.left=-s*t,We.right=s*t,We.top=s,We.bottom=-s;let r=Pp?0:Lt((i-900)/600,0,1)*(IA-CA)/2;r>.5?We.setViewOffset(i,e,r,0,i,e):We.clearViewOffset(),We.updateProjectionMatrix()}var HA=()=>mt.domElement.clientHeight/((We.top-We.bottom)/We.zoom);function VA(){let i=mt.domElement;i.addEventListener("pointermove",WA),i.addEventListener("pointerleave",()=>{Bi.active=!1,F_(null)}),!Ru&&(i.addEventListener("pointerdown",GA),i.addEventListener("pointerup",qA),i.addEventListener("pointercancel",e=>{ki.delete(e.pointerId),wt=null,Vs=null}),i.addEventListener("wheel",YA,{passive:!1}),i.addEventListener("contextmenu",e=>e.preventDefault()))}function Il(i){let e=mt.domElement.getBoundingClientRect();Zo.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1)}function GA(i){if(mt.domElement.setPointerCapture?.(i.pointerId),Il(i),ki.set(i.pointerId,{x:i.clientX,y:i.clientY}),ki.size===2){let[t,n]=[...ki.values()];Vs={d:Math.hypot(t.x-n.x,t.y-n.y),z:He.zoom.target},wt=null;return}let e=Hp();wt={id:i.pointerId,x0:i.clientX,y0:i.clientY,lx:i.clientX,ly:i.clientY,lt:performance.now(),panning:!1,seating:!1,seatBot:e,vx:0,vz:0}}function WA(i){if(Il(i),Bi.active=!0,Lp=!0,ki.has(i.pointerId)&&ki.set(i.pointerId,{x:i.clientX,y:i.clientY}),Vs&&ki.size===2){let[u,d]=[...ki.values()];He.zoom.to(Vs.z+Math.log(Math.hypot(u.x-d.x,u.y-d.y)/Vs.d));return}if(!wt||wt.id!==i.pointerId)return;let e=Math.hypot(i.clientX-wt.x0,i.clientY-wt.y0)>5;if(!wt.panning&&!wt.seating&&e&&(wt.seatBot&&cs.onAssignSeat?wt.seating=!0:wt.panning=!0),wt.seating){cn.classList.add("is-seating");return}if(!wt.panning)return;let t=performance.now(),n=i.clientX-wt.lx,s=i.clientY-wt.ly,r=Math.max(.001,(t-wt.lt)/1e3);wt.lx=i.clientX,wt.ly=i.clientY,wt.lt=t;let o=HA(),a=-n/o,l=s/o/M_,c=(a-l)/Math.SQRT2,h=(-a-l)/Math.SQRT2;He.x.snap(Lt(He.x.x+c,-9.5,9.5)),He.z.snap(Lt(He.z.x+h,-7.5,7.5)),wt.vx=wt.vx*.6+c/r*.4,wt.vz=wt.vz*.6+h/r*.4}function qA(i){if(ki.delete(i.pointerId),cn.classList.remove("is-seating"),Vs){ki.size<2&&(Vs=null),wt=null;return}if(!wt||wt.id!==i.pointerId)return;let e=wt;if(wt=null,e.seating&&e.seatBot){Il(i);let t=XA();t&&cs.onAssignSeat?.(e.seatBot,t),cs.onSelectBot?.(e.seatBot);return}if(e.panning){let t=Lt(e.vx,-30,30),n=Lt(e.vz,-30,30);He.x.v=t,He.z.v=n,He.x.to(He.x.x+t*.12),He.z.to(He.z.x+n*.12);return}Il(i),cs.onSelectBot?.(Hp())}function XA(){if(!vi||!vi.spots||!vi.spots.desks||(Ko.setFromCamera(Zo,We),dt&&(Tu.constant=-dt.activeY),!Ko.ray.intersectPlane(Tu,Hs)))return null;let i=Hs.x,e=Hs.z,t=null,n=1/0;for(let o=0;o<vi.spots.desks.length;o++){let a=vi.spots.desks[o];if(!a||!a.pos||PA.has(o+1))continue;let l=(a.pos.x-i)**2+(a.pos.z-e)**2;l<n&&(n=l,t=o)}if(t==null||n>4.5)return null;let s=t+1,r=S_.indexOf(s)+1;return r>0?r:s}function YA(i){i.preventDefault(),Il(i);let e=Math.exp(He.zoom.target),t=Lt(e*Math.exp(-i.deltaY*(i.ctrlKey?.012:.0016)),hs.min,hs.max);if(t===e)return;let n=We.view?.enabled?We.view.offsetX/We.view.fullWidth*2:0,s=Zo.x+n,r=Zo.y,o=1/e-1/t,a=s*We.right*o,l=r*We.top*o/M_;He.x.to(He.x.target+(a-l)/Math.SQRT2),He.z.to(He.z.target+(-a-l)/Math.SQRT2),He.zoom.to(Math.log(t))}function Hp(){Ko.setFromCamera(Zo,We);let i=Ko.intersectObjects([...Bp],!1)[0];return i?i.object.userData.actorId:null}function F_(i){i!==ls&&(ls&&An.get(ls)?.setHovered(!1),ls=i,i&&An.get(i)?.setHovered(!0),cn.classList.toggle("is-hovering",!!i),cs.onHoverBot?.(i))}var b_=[3458905,689407,16752394,16732064,16738835,1357990],$A=new Wt(.07,.035);function KA(i){let e=new it;e.position.copy(i);let t=[];for(let n=0;n<36;n++){let s=new Re($A,new St({color:b_[n%b_.length],side:Qt,transparent:!0})),r=Math.random()*Math.PI*2,o=2.2+Math.random()*1.6,a=.8+Math.random()*1.2;t.push({m:s,v:new I(Math.cos(r)*a,o,Math.sin(r)*a),spin:new I(Math.random()*9,Math.random()*9,0)}),e.add(s)}Oi.add(e),$o.push({group:e,parts:t,t:0,life:1.6})}function ZA(i){for(let e=$o.length-1;e>=0;e--){let t=$o[e];t.t+=i;for(let n of t.parts)n.v.y-=6.5*i,n.v.multiplyScalar(1-1.4*i),n.m.position.addScaledVector(n.v,i),n.m.rotation.x+=n.spin.x*i,n.m.rotation.y+=n.spin.y*i,n.m.material.opacity=Math.max(0,1-t.t/t.life);t.t>=t.life&&(t.group.removeFromParent(),t.parts.forEach(n=>n.m.material.dispose()),$o.splice(e,1))}}function U_({width:i=1600,height:e=900,scale:t=1,box:n={x:.06,y:.06,w:.88,h:.76}}={}){let s=dt?.activeOpen();if(!s||!Rn)return null;let r=mt.getPixelRatio(),o=Math.min(mt.capabilities.maxTextureSize,mt.capabilities.maxRenderbufferSize||1/0),a=Math.max(1,Math.min(t,o/i,o/e)),l=We.zoom,c=We.position.clone(),h=[],u=p=>{p?.visible&&(p.visible=!1,h.push(p))};for(let p of An.values())u(p.ring);for(let p of Ws)u(p.root);for(let p of $o)u(p.group);let d=s.walls,f=d?.data;try{if(f){let m={...f,floorName:`Floor ${dt.activeIndex+1}`,bots:f.bots.map(g=>({...g,name:"",task:"",step:""}))};d.screen&&d.drawScreen(m),d.board&&d.drawBoard(m)}mt.setPixelRatio(a),mt.setSize(i,e,!1),Rn.setSize(i,e),JA(i/e,n),Yo.set(0,dt.cabinY.x+.7,0).project(We),Rn.render(Lt(Yo.y*.5+.5,0,1),0,1);let p=document.createElement("canvas");p.width=i,p.height=e;let x=p.getContext("2d");return x.imageSmoothingQuality="high",x.drawImage(mt.domElement,0,0,i,e),p}finally{h.forEach(p=>{p.visible=!0}),f&&(d.screen&&d.drawScreen(f),d.board&&d.drawBoard(f)),mt.setPixelRatio(r),Rl(),We.zoom=l,We.position.copy(c),We.updateProjectionMatrix(),Yo.set(0,dt.cabinY.x+.7,0).project(We),Rn.render(Lt(Yo.y*.5+.5,0,1),0,Lt(1.5/We.zoom,.25,1))}}var Cr=new $t,Tl=new I;function JA(i,e){We.clearViewOffset(),We.zoom=1,We.position.set(Dn.x,dt.activeY+Dn.y,Dn.z).addScaledVector(Op,80),We.updateMatrixWorld(!0),dt.group.updateMatrixWorld(!0);let t=1/0,n=-1/0,s=1/0,r=-1/0,o=c=>{if(c.visible){if(c.isMesh&&c.geometry){c.geometry.boundingBox||c.geometry.computeBoundingBox(),Cr.copy(c.geometry.boundingBox);for(let h=0;h<8;h++)Tl.set(h&1?Cr.max.x:Cr.min.x,h&2?Cr.max.y:Cr.min.y,h&4?Cr.max.z:Cr.min.z).applyMatrix4(c.matrixWorld).applyMatrix4(We.matrixWorldInverse),t=Math.min(t,Tl.x),n=Math.max(n,Tl.x),s=Math.min(s,Tl.y),r=Math.max(r,Tl.y)}for(let h of c.children)o(h)}};o(dt.group),Number.isFinite(t)||(t=-ks.w/2,n=ks.w/2,s=-ks.h/2,r=ks.h/2);let a=Math.max((r-s)/e.h,(n-t)/(e.w*i)),l=a*i;We.left=(t+n)/2-(e.x+e.w/2)*l,We.right=We.left+l,We.top=(s+r)/2+(e.y+e.h/2)*a,We.bottom=We.top-a,We.updateProjectionMatrix()}function jA(){w_||!Bi.active||!dt||(Ko.setFromCamera(Zo,We),Tu.constant=-dt.activeY,Ko.ray.intersectPlane(Tu,Hs)?(Bi.x=Hs.x,Bi.z=Hs.z):Bi.active=!1)}var Yo=new I,Su=0;function QA(i){if(!mt)return;if(!Cl||document.hidden){bu.getDelta();return}if(Ru){let s=i-Su;if(s<Mu-2)return;Su+=Math.max(1,Math.round(s/Mu))*Mu,i-Su>Mu/2&&(Su=i)}let e=Fp?0:Math.min(bu.getDelta(),.05);Fp&&bu.getDelta(),Gs=bu.elapsedTime;let t=performance.now();Xo.update(e,t),D_(e),dt&&dt.update(e,t),Lp&&!wt?.panning&&(Lp=!1,F_(Hp())),jA();let n=dt?.activeOpen()?.alpha??1;for(let s of An.values())s.hostAlpha=n,s.tick(e,Gs);for(let s of Ws)s.hostAlpha=s.ctx.inst.alpha,s.tick(e,Gs),s.dead&&Ws.delete(s);ZA(e),Rn?(Yo.set(0,(dt?dt.cabinY.x:0)+.7,0).project(We),Rn.render(Lt(Yo.y*.5+.5,0,1),e,Lt(1.5/We.zoom,.25,1))):mt.render(Oi,We),zs&&(!Ru||LA)&&zs.render(Oi,We),cs?.onFrame?.()}var e2="/4d/blobs/thumbs/",t2="/4d/brand/logo-mark.png";var X_="bothq.waitBlur",Y_="bothq.dock",n2={working:"working",idle:"resting",waiting_user:"waiting for you",error:"error",stuck:"stuck",done:"done"},$_={working:"Working",idle:"Resting",waiting_user:"Waiting for you",error:"Error",stuck:"Stuck",done:"Done"},i2={working:["working","working"],waiting_user:["waiting","waiting"],error:["error","errors"],stuck:["stuck","stuck"],idle:["resting","resting"],done:["done","done"]},K_=[{key:"working",s:"working",lead:!0,n:i=>i.working},{key:"attention",s:"waiting_user",alert:!0,n:i=>i.waiting_user+i.stuck},{key:"error",s:"error",alert:!0,n:i=>i.error},{key:"idle",s:"idle",n:i=>i.idle},{key:"done",s:"done",n:i=>i.done,hideZero:!0}],s2={week:"Week",day:"Day",month:"Month"},r2={week:"Usage this week",day:"Usage today",month:"Usage this month"},Xs={close:'<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',minus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',chev:'<svg class="bhq-chev" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',eyeOn:'<svg class="bhq-eye-on" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.9" fill="currentColor"/></svg>',eyeOff:'<svg class="bhq-eye-off" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity=".55"/><path d="M3 13L13 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M3.5 8.6l3 3 6-6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',share:'<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M10 12.2V2.9M6.7 6.1L10 2.8l3.3 3.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2 8.7H6A1.8 1.8 0 0 0 4.2 10.5v5A1.8 1.8 0 0 0 6 17.3h8a1.8 1.8 0 0 0 1.8-1.8v-5A1.8 1.8 0 0 0 14 8.7h-1.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'},Fl=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},L=null;function o2(i){return{h:i||{},top:null,fl:null,panel:null,feed:null,zoom:null,dock:null,owned:[],last:{state:null,opts:{currentFloor:null,selectedBot:null}},skew:0,nowStr:null,floors:new Map,activeFloorId:null,cells:new Map,feedRows:new Map,feedOut:new Set,feedMode:null,feedFirst:!0,failedThumbs:new Set,mode:null,cardBot:null,teamFloor:null,teamReady:!1,ready:!1,keyHandler:null,ro:null,ro2:null,onResize:null,timer:null,fades:[],sh:null,phone:!1,land:!1,mqs:null,mqFn:null,ro3:null,cardY:0,cardStop:null,chipFloor:null}}function V(i,e,...t){let n=document.createElement(i);if(e)for(let s of Object.keys(e)){let r=e[s];r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:n.setAttribute(s,r===!0?"":String(r)))}for(let s of t)s!=null&&s!==!1&&n.append(s);return n}function Ir(i){let e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstChild}function tt(i,e){e=e==null?"":String(e),i.textContent!==e&&(i.textContent=e)}function je(i,e,t){t==null||t===!1?i.hasAttribute(e)&&i.removeAttribute(e):(t=t===!0?"":String(t),i.getAttribute(e)!==t&&i.setAttribute(e,t))}function qt(i,e){i.hidden!==!!e&&(i.hidden=!!e)}function jo(i,e,t){let n=i._vars||(i._vars={});n[e]!==t&&(n[e]=t,i.style.setProperty(e,t))}function Wn(i,e,t){i.classList.contains(e)!==!!t&&i.classList.toggle(e,!!t)}function O_(i,e,t){let n="_px_"+e;i[n]!==t&&(i[n]=t,i.style[e]=t+"px")}function Ul(i,e,t){return Math.min(t,Math.max(e,i))}function a2(i){return i<10?"0"+i:String(i)}function Jo(i,e,t){if(e=Math.max(0,Math.round(Number(e)||0)),i._to===e)return;let n=i._to==null?0:i._to;if(i._to=e,i._raf&&(cancelAnimationFrame(i._raf),i._raf=0),i._tm&&(clearTimeout(i._tm),i._tm=0),t===!1||Fl.matches||n===e){i.textContent=String(e);return}let s=performance.now(),r=700,o=a=>{let l=Ul((a-s)/r,0,1),c=1-Math.pow(1-l,3);i.textContent=String(Math.round(n+(e-n)*c)),i._raf=l<1?requestAnimationFrame(o):0};i._raf=requestAnimationFrame(o),i._tm=setTimeout(()=>{i._tm=0,i._to===e&&(i.textContent=String(e))},r+150)}function Dl(i,e,t){return Math.abs(Math.trunc(i))===1?e:t}function Gp(i,e){let t=i2[i]||[i,i];return Dl(e,t[0],t[1])}function on(i){let e=typeof i=="number"?i:Date.parse(i);return Number.isFinite(e)?e:null}var l2=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});function bi(i){return i==null?"":l2.format(new Date(i))}var Z_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function c2(i){if(i&&i.now&&i.now!==L.nowStr){let e=on(i.now);e!=null&&(L.skew=Date.now()-e,L.nowStr=i.now)}}function Ys(){return Date.now()-L.skew}function h2(i){let e=Math.floor(Math.max(0,i)/6e4);if(e<1)return"under a minute";if(e<60)return e+" min";let t=Math.floor(e/60),n=e%60;if(t<24)return n?t+" h "+n+" min":t+" h";let s=Math.floor(t/24),r=t%24;return r?s+" d "+r+" h":s+" d"}function J_(i){let e=Math.floor(i/6e4);if(e<1)return"under a minute";let t=Math.floor(e/1440),n=Math.floor(e%1440/60),s=e%60;return t>0?t+" d "+n+" h":n>0?n+" h "+s+" min":s+" min"}function Zp(i){let e=Ys()-i,t=Math.floor(e/6e4);if(t<1)return"just now";if(t<60)return t+" min ago";let n=Math.floor(t/60);return n<24?n+" h ago":Math.floor(n/24)+" d ago"}function u2(i){let e=Math.floor((Ys()-i)/6e4);if(e<1)return"now";if(e<60)return e+"m";let t=Math.floor(e/60);return t<24?t+"h":Math.floor(t/24)+"d"}function j_(i){let e=i&&i.unreported;if(!e)return"";let t=on(e.from),n=on(e.to);return"Worked (unreported)"+(n==null?"":" \xB7 "+(t==null?"":bi(t)+"\u2013")+bi(n))}function Wp(i){let e=on(i&&i.last_seen);return e==null?"never reported":"seen "+Zp(e)}function d2(i){let e=i-Ys();if(e<=0)return"due now";let t=Math.ceil(e/6e4);if(t<60)return"in "+t+" min";let n=Math.floor(t/60),s=t%60;if(n<6)return s?"in "+n+" h "+s+" min":"in "+n+" h";if(n<24)return"in "+n+" h";let r=new Date(i);return Z_[r.getDay()]+" "+bi(i)}function f2(i){let e=new Date(i);return Z_[e.getDay()]+" "+e.getDate()+"/"+a2(e.getMonth()+1)+" "+bi(i)}var p2=new Intl.NumberFormat("en-GB",{maximumFractionDigits:1});function m2(i){let e=Math.max(0,Number(i)||0)/60;return e<10?p2.format(e):String(Math.round(e))}function us(i){return i&&(i.effective_status||i.status)||"idle"}function qs(i){return n2[i]||i||""}function g2(i){return/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(i||"")}function x2(i){let e=String(i||"").match(/[\p{L}\p{N}]+/gu)||[];return e.length?e.length===1?Array.from(e[0]).slice(0,2).join("").toUpperCase():(Array.from(e[0])[0]+Array.from(e[1])[0]).toUpperCase():"?"}function qp(i){let e=i.replace("#","");e.length===3&&(e=e.split("").map(n=>n+n).join(""));let t=n=>{let s=parseInt(e.slice(n,n+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)};return .2126*t(0)+.7152*t(2)+.0722*t(4)}function _2(i){let e=qp(i),t=1.05/(e+.05),n=(e+.05)/(qp("#1D1D1F")+.05);return t>=n?"#fff":"#1D1D1F"}function Ol(i,e,t){for(let n=0;n<e.length;n++){let s=i.children[t+n];s!==e[n]&&i.insertBefore(e[n],s||null)}}function Q_(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}function B_(i){try{return localStorage.getItem(i)}catch{return null}}function ey(i,e){try{localStorage.setItem(i,e)}catch{}}function Xp(i){return i.classList.add("bhq-fade"),i.addEventListener("scroll",()=>ty(i),{passive:!0}),L.fades.push(i),i}function ty(i){let e=i.scrollHeight-i.clientHeight,t=e>2&&i.scrollTop>2,n=e>2&&i.scrollTop<e-2;jo(i,"--fade-t",t?"20px":"0px"),jo(i,"--fade-b",n?"22px":"0px"),je(i,"data-fade",t||n?"":null)}function Lu(){for(let i of L.fades)ty(i)}function y2(i){let e={working:0,idle:0,waiting_user:0,error:0,stuck:0,done:0},t=i.bots;if(t&&typeof t=="object"&&Object.keys(t).length)for(let n of Object.keys(t)){let s=us(t[n]);e[s]=(e[s]||0)+1}else if(i.summary&&typeof i.summary=="object")for(let n of Object.keys(e))e[n]=Number(i.summary[n])||0;return e}function Qo(i){i=i||{};let e=V("img",{class:"bhq-av-img",alt:"",draggable:"false",decoding:"async"}),t=V("span",{class:"bhq-av-fb","aria-hidden":"true"}),n=V("span",{class:"bhq-av"},e,t),s=i.orb===!1?null:V("i",{class:"bhq-orb","aria-hidden":"true"}),r=V("span",{class:"bhq-ava"+(i.cls?" "+i.cls:"")},n,s);return e.addEventListener("error",()=>{e._name&&L.failedThumbs.add(e._name),n.classList.add("is-fb")}),e.addEventListener("load",()=>n.classList.remove("is-fb")),{root:r,inner:n,img:e,fb:t}}function ea(i,e,t){let n=e.avatar||e.id||"",s=g2(e.color)?e.color:"#A1A1A6";jo(i.root,"--c",s),jo(i.root,"--fg",_2(s)),Wn(i.root,"is-dark",qp(s)<.04),je(i.root,"data-s",t||null),tt(i.fb,x2(e.name)),i.img._name!==n&&(i.img._name=n,!n||L.failedThumbs.has(n)?(i.img.removeAttribute("src"),i.inner.classList.add("is-fb")):(i.inner.classList.remove("is-fb"),i.img.src=e.has_glb===!1?b2(e):e2+encodeURIComponent(n)+".png"))}var v2="/4d/blobs/lib/",k_=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon","rounded_cube","cone","trio"],z_=["000000","A06B39","FB2B3E","FD690F","F59312","14C16F","13B7A2","1E86FC","8F59F9","F93498","959595"];function b2(i){let e=a=>{let l=2166136261;for(let c of a)l=Math.imul(l^c.charCodeAt(0),16777619)>>>0;return l},t=String(i.id||i.name||""),n=i.look||{},s=k_.includes(n.shape)?n.shape:k_[(e(`shape:${t}`)>>>4)%13];s==="sphere"&&n.accessory==="stem"&&(s="sphere_stem");let r=/^#([0-9a-f]{6})$/i.exec(n.color||i.color||""),o=z_[e(`color:${t}`)%10];if(r){let a=d=>[0,2,4].map(f=>parseInt(d.slice(f,f+2),16)),[l,c,h]=a(r[1]),u=1/0;Math.max(l,c,h)-Math.min(l,c,h)<28&&(o=(l+c+h)/3<75?"000000":"959595",u=0);for(let d of z_){let[f,p,x]=a(d),m=(l+f)/2,g=(2+m/256)*(l-f)**2+4*(c-p)**2+(3-m/256)*(h-x)**2;g<u&&(u=g,o=d)}}return`${v2}${s}-${o}.png`}function Fu(i){return L.owned.push(i),i}function Jp(){if(L){if(L.keyHandler&&document.removeEventListener("keydown",L.keyHandler),L.onResize&&removeEventListener("resize",L.onResize),L.ro&&L.ro.disconnect(),L.ro2&&L.ro2.disconnect(),L.ro3&&L.ro3.disconnect(),L.mqs&&L.mqFn)for(let i of L.mqs)i.removeEventListener("change",L.mqFn);L.phone&&document.documentElement.classList.remove("bhq-phone","bhq-land"),L.timer&&clearInterval(L.timer);for(let i of L.owned)i.parentNode&&i.remove();L=null}}function ny(i){Jp(),L=o2(i);let e=document.getElementById("topbar"),t=document.getElementById("floors"),n=document.getElementById("panel"),s=document.getElementById("feed");s||(s=Fu(V("section",{id:"feed"})),document.body.append(s)),je(s,"aria-label","Activity feed");let r=document.getElementById("scene");r&&je(r,"aria-label","Office"),t&&je(t,"aria-label","Floors"),n&&je(n,"aria-label","Bot card and floor team"),e?M2(e):console.warn("[ui] #topbar not found"),t?S2(t):console.warn("[ui] #floors not found"),n?w2(n):console.warn("[ui] #panel not found"),A2(s),R2(),D2(t,s),B2(s),k2(),L.keyHandler=o=>{if(o.key!=="Escape"||o.defaultPrevented)return;let a=o.target;a&&(a.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))||L.last.opts.selectedBot&&L.h.onSelectBot&&L.h.onSelectBot(null)},document.addEventListener("keydown",L.keyHandler),L.timer=setInterval(()=>{document.hidden||!L.last.state||(zi("topbar",()=>L.top&&cy(L.last.state)),zi("dock",()=>L.dock&&py(L.last.state)),zi("card-reset",()=>{let o=L.cardBot&&L.last.state.bots&&L.last.state.bots[L.cardBot];o&&L.panel&&fy(L.last.state,o)}))},15e3)}function M2(i){i.textContent="";let e=V("span",{class:"bhq-num bhq-clock",text:"--:--"}),t=V("div",{class:"bhq-brand bhq-surface"},V("img",{class:"bhq-mark",src:t2,alt:"",draggable:"false"}),V("b",{class:"bhq-word",text:"Grok Bot Dashboard"}),V("span",{class:"bhq-sep","aria-hidden":"true"}),V("span",{class:"bhq-live"},V("i",{class:"bhq-dot bhq-live-dot","aria-hidden":"true"}),"Live \xB7 ",e)),n={},s=V("div",{class:"bhq-summary bhq-surface",role:"group","aria-label":"Bot statuses"});for(let p of K_){let x=V("b",{class:"bhq-num"}),m=V("span"),g=V("span",{class:"bhq-schip"+(p.lead?" bhq-schip--lead":""),"data-s":p.s},V("i",{class:"bhq-dot","data-s":p.s,"aria-hidden":"true"}),x,m);n[p.key]={el:g,num:x,label:m,cfg:p},s.append(g)}let r=V("span",{class:"bhq-usage-label",text:"Week"}),o=V("i"),a=V("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Usage limit"},o),l=V("b",{class:"bhq-num bhq-usage-pct"}),c=V("span",{class:"bhq-reset"}),h=V("div",{class:"bhq-usage bhq-surface",hidden:!0},r,a,l,V("span",{class:"bhq-sep","aria-hidden":"true"}),c),u=V("span",{class:"bhq-demo bhq-surface",text:"DEMO",hidden:!0,title:"Demo data, not real bots"}),d=V("button",{class:"bhq-share bhq-surface",type:"button","aria-label":"Share an image of your office",title:"Share"},Ir(Xs.share));d.addEventListener("click",()=>{L.h.onShare&&L.h.onShare(d)});let f=V("div",{class:"bhq-right"},d,u,h);i.append(t,s,f),L.top={root:i,clock:e,chips:n,summary:s,usage:h,usageLabel:r,meter:a,fill:o,pct:l,reset:c,demo:u}}function S2(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow");let e=V("div",{class:"bhq-car","aria-hidden":"true"}),t=V("div",{class:"bhq-shaft"},e),n=V("b",{class:"bhq-num"}),s=V("div",{class:"bhq-fscroll"},t);i.append(V("div",{class:"bhq-fhead"},V("span",{text:"Floors"}),n),s),L.fl={root:i,shaft:t,car:e,count:n,fscroll:s,carTop:null,carH:null,carShown:!1,ready:!1},typeof ResizeObserver=="function"&&(L.ro=new ResizeObserver(()=>dy()),L.ro.observe(t))}function E2(i){let e=V("span",{class:"bhq-num bhq-fnum"}),t=V("b",{class:"bhq-fname"}),n=V("span",{class:"bhq-fdots","aria-hidden":"true"}),s=V("span",{class:"bhq-num bhq-fcount"}),r=V("button",{class:"bhq-floor",type:"button","data-id":i},e,V("span",{class:"bhq-ftext"},t,n),s);return r.addEventListener("click",()=>{L.h.onSelectFloor&&L.h.onSelectFloor(i)}),{btn:r,num:e,name:t,dots:n,count:s,dotEls:[]}}function w2(i){i.textContent="";let e=V("h2",{class:"bhq-h2"}),t=V("span",{class:"bhq-tsub"}),n=V("b",{class:"bhq-num"}),s=V("b",{class:"bhq-num"}),r=V("b",{class:"bhq-num"}),o=V("em",{text:"waiting"}),a=V("em",{text:"errors"}),l=V("span",null,o,s),c=V("span",null,a,r),h=V("header",{class:"bhq-thead bhq-surface bhq-glow","data-s":"idle"},V("div",{class:"bhq-ttop"},e,t),V("div",{class:"bhq-tbot"},V("div",{class:"bhq-tbig"},n,V("span",{text:"working"})),V("div",{class:"bhq-tcounts"},l,c))),u=Xp(V("div",{class:"bhq-members",role:"list"})),d=V("p",{class:"bhq-note",text:"Nobody here yet. A bot shows up when it logs its first step.",hidden:!0}),f=V("div",{class:"bhq-tcard bhq-surface bhq-glow"},u,d),p=V("section",{class:"bhq-team","aria-label":"Floor team"},h,f),x=V("button",{class:"bhq-close",type:"button","aria-label":"Close bot card",title:"Close (Esc)"},Ir(Xs.close));x.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(null)});let m=Qo({cls:"bhq-ava--lg"}),g=V("h2",{class:"bhq-h2",tabindex:"-1"}),_=V("p",{class:"bhq-sub"}),E=V("i",{class:"bhq-dot","aria-hidden":"true"}),v=V("span"),S=V("span",{class:"bhq-status"},E,v),M=V("p",{class:"bhq-now"}),A=V("div",{class:"bhq-hero bhq-surface bhq-glow","data-s":"idle"},x,V("div",{class:"bhq-head"},m.root,V("div",{class:"bhq-head-text"},g,_)),S,M),y=V("p",{class:"bhq-task"}),w=V("div",{class:"bhq-block",hidden:!0},V("div",{class:"bhq-label",text:"Task"}),y),R=xe=>{let qe=V("b",{class:"bhq-num"}),yt=V("small",{text:xe||""});return{root:V("div",{class:"bhq-stat"},qe,yt),v:qe,l:yt}},P=R(),N=R(),k=R("h worked"),D=V("div",{class:"bhq-stats"},P.root,N.root,k.root),B=V("div",{class:"bhq-label"}),X=V("i"),$=V("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Share of total usage"},X),re=V("b",{class:"bhq-num"}),Z=V("span",{class:"bhq-share"},re," of all"),te=V("span",{class:"bhq-card-reset"}),z=V("div",{class:"bhq-useblock"},B,V("div",{class:"bhq-use"},$,Z),te),oe=V("ol",{class:"bhq-steps",role:"list"}),le=V("div",{class:"bhq-stepsblock"},V("div",{class:"bhq-label",text:"Recent steps"}),oe),Oe=Xp(V("div",{class:"bhq-card-body"},w,D,z,le)),Be=V("button",{class:"bhq-cta bhq-cta--start",type:"button",text:"Start",hidden:!0,title:"Resume this Paperclip agent"});Be.addEventListener("click",()=>{let xe=Be.getAttribute("data-agent");xe&&iy(L.cardBot,xe)});let Ze=V("button",{class:"bhq-cta bhq-cta--clear",type:"button",text:"Clear error",hidden:!0,title:"Clear this Paperclip agent error (does not retry)"});Ze.addEventListener("click",()=>{let xe=Ze.getAttribute("data-agent");xe&&sy(L.cardBot,xe)});let K=V("button",{class:"bhq-cta",type:"button",text:"Open chat",disabled:!0,title:"Set Wallpaper feed in Settings to enable Open chat"});K.addEventListener("click",()=>{let xe=K.getAttribute("data-chat");xe&&jp(L.cardBot,xe)});let ee=V("div",{class:"bhq-more bhq-surface bhq-glow bhq-glow--still"},Oe,V("div",{class:"bhq-card-foot"},Be,Ze,K)),me=V("span",{class:"bhq-cgrab","aria-hidden":"true"}),Ue=V("section",{class:"bhq-card",hidden:!0,"aria-label":"Bot card"},me,A,ee);i.append(Ue,p),L.panel={root:i,team:p,tcard:f,teamHead:h,teamTitle:e,teamSub:t,teamBig:n,nWait:s,nErr:r,rowWait:l,rowErr:c,lErr:a,list:u,teamEmpty:d,card:{root:Ue,hero:A,body:Oe,av:m,name:g,where:_,status:S,stDot:E,stTxt:v,now:M,taskBlock:w,task:y,sSteps:P,sTasks:N,sHours:k,usageLabel:B,useBlock:z,fuel:$,fillBar:X,shareNum:re,reset:te,hist:oe,histSig:null,start:Be,clearErr:Ze,cta:K,fresh:!0}}}function jp(i,e){e&&(L.h.onOpenChat?L.h.onOpenChat(i,e):T2(e))}function iy(i,e){e&&L.h.onStartAgent&&L.h.onStartAgent(i,e)}function sy(i,e){e&&L.h.onClearErrorAgent&&L.h.onClearErrorAgent(i,e)}function T2(i){let e=document.createElement("a");e.href=i,e.rel="noopener",e.style.display="none",document.body.append(e),e.click(),e.remove()}function A2(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow","bhq-glow--still");let e=V("ol",{class:"bhq-frows",role:"list","aria-live":"off"}),t=V("p",{class:"bhq-note",text:"No events yet.",hidden:!0});i.append(V("div",{class:"bhq-fhead"},V("span",{text:"Activity"})),e,t),L.feed={root:i,list:e,empty:t}}function R2(){let i=(t,n,s,r)=>{let o=V("button",{class:"bhq-zbtn "+t,type:"button","aria-label":s,title:s},Ir(n));return o.addEventListener("click",()=>{L.h.onZoom&&L.h.onZoom(r)}),o},e=Fu(V("div",{class:"bhq-zoom bhq-surface",role:"group","aria-label":"Scene zoom"},i("z-out",Xs.minus,"Zoom out","out"),V("span",{class:"bhq-sep","aria-hidden":"true"}),i("z-in",Xs.plus,"Zoom in","in")));document.body.append(e),L.zoom={root:e}}function Pu(i,e,t){let n=V("span",{class:"bhq-dcount bhq-num",text:"0"}),s=Xp(V("div",{class:"bhq-dbody-in"})),r=V("button",{class:"bhq-dtoggle",type:"button","aria-expanded":"false"},V("span",{class:"bhq-dtitle",text:e}),n),o=V("div",{class:"bhq-dh"+(t&&t.eye?" has-eye":"")},r),a=null;t&&t.eye&&(a=V("button",{class:"bhq-eye",type:"button","aria-pressed":"false","aria-label":"Hide this panel for the camera",title:"Hide for the camera"},Ir(Xs.eyeOn),Ir(Xs.eyeOff)),o.append(a)),o.append(Ir(Xs.chev));let l=V("section",{class:"bhq-dcard bhq-surface bhq-glow bhq-glow--still","aria-label":e,"data-dock":i},o,V("div",{class:"bhq-dbody"},s)),c={id:i,root:l,toggle:r,count:n,inner:s,eye:a,open:!1,shown:!1,rows:0};return r.addEventListener("click",()=>Qp(c,!c.shown)),c}var C2=44,I2=140,P2=92,L2=8;function N2(i,e){i.shown=!!e,Wn(i.root,"is-open",i.shown),je(i.toggle,"aria-expanded",i.shown?"true":"false"),i.inner.inert=!i.shown}function Qp(i,e,t=!0){i.open=!!e;let n=L.dock;if(i.open&&(n.lru=n.lru.filter(s=>s!==i),n.lru.push(i)),t){let s={};for(let r of["waiting","finished","routines"])s[r]=!!n[r].open;ey(Y_,JSON.stringify(s))}Yp(n.avail==null?1/0:n.avail)}function Yp(i){let e=L.dock;e.avail=i;let t=[e.check,e.waiting,e.finished,e.routines],n=t.filter(o=>!o.root.hidden),s=new Set(n.filter(o=>o.open)),r=()=>n.reduce((o,a)=>o+(s.has(a)?a.rows?I2:P2:C2),0)+L2*Math.max(0,n.length-1);for(;s.size&&r()>i;){let o=e.lru.find(a=>s.has(a))||[...s][0];s.delete(o)}for(let o of t)N2(o,s.has(o))}function H_(i,e=!0){let t=L.dock;t.blurred=!!i,Wn(t.waiting.root,"is-blurred",t.blurred),je(t.waiting.eye,"aria-pressed",t.blurred?"true":"false"),je(t.waiting.eye,"aria-label",t.blurred?"Show this panel":"Hide this panel for the camera"),je(t.waiting.eye,"title",t.blurred?"Show":"Hide for the camera"),t.wlist.inert=t.blurred,e&&ey(X_,t.blurred?"1":"0")}function D2(i,e){let t=Fu(V("aside",{class:"bhq-dock","aria-label":"Waiting on me, finished work and routines"})),n=Pu("check","Status check"),s=Pu("waiting","Waiting on me",{eye:!0}),r=Pu("finished","Finished"),o=Pu("routines","Routines"),a=V("div",{class:"bhq-wlist"}),l=V("p",{class:"bhq-note",text:"Nothing is waiting on you.",hidden:!0});s.inner.append(a,l);let c=V("ol",{class:"bhq-tl",role:"list"}),h=V("p",{class:"bhq-note",text:"Nothing finished in the last 24 hours.",hidden:!0});r.inner.append(c,h);let u=V("ul",{class:"bhq-rl",role:"list"}),d=V("p",{class:"bhq-note",text:"No routines scheduled.",hidden:!0});o.inner.append(u,d);let f=V("ul",{class:"bhq-ck",role:"list"}),p=V("p",{class:"bhq-note bhq-cknote"});n.inner.append(f,p),n.root.hidden=!0,t.append(n.root,s.root,r.root,o.root),document.body.append(t),L.dock={root:t,check:n,waiting:s,finished:r,routines:o,wlist:a,wempty:l,tl:c,fempty:h,rl:u,rempty:d,cl:f,cnote:p,lru:[],wrows:new Map,crows:new Map,checkT:null,finSig:null,finRefs:[],routSig:null,routRefs:[],copied:new Map,blurred:!1,floors:i,feed:e};let x=null;try{x=JSON.parse(B_(Y_)||"null")}catch{x=null}for(let m of["routines","finished","waiting"])Qp(L.dock[m],x&&typeof x[m]=="boolean"?x[m]:m==="waiting",!1);s.eye.addEventListener("click",()=>H_(!L.dock.blurred)),H_(B_(X_)==="1",!1),L.onResize=()=>Ll(),addEventListener("resize",L.onResize),typeof ResizeObserver=="function"&&(L.ro2=new ResizeObserver(()=>Ll()),i&&L.ro2.observe(i),e&&L.ro2.observe(e)),Ll()}function V_(i){return!!i&&i.getClientRects().length>0}function Ll(){let i=L&&L.dock;if(!i)return;if(L.phone){Yp(1/0),Lu();return}let e=24,t=V_(i.floors)?i.floors.offsetTop+i.floors.offsetHeight+10:96,n=V_(i.feed)?i.feed.offsetTop-10:innerHeight-e,s=Math.max(0,n-t);O_(i.root,"top",t),O_(i.root,"maxHeight",s),Yp(s),Lu()}var F2="(max-width: 600px), (max-height: 500px) and (max-width: 950px)",U2="(max-height: 500px) and (orientation: landscape)",O2=6;function Vp(i,e){return i*e*.55/(e+.55*Math.abs(i))}function ry(i){let e=i[i.length-1],t=i[0];for(let s of i)if(e.t-s.t<=100){t=s;break}let n=e.t-t.t;return n>0?(e.y-t.y)/n*1e3:0}function G_(i){return i/1e3*.998/(1-.998)}function $p(i,e,t,n,s,r,o){let a=Math.pow(2*Math.PI/(r||.36),2),l=2*(o||1)*Math.sqrt(a),c=i,h=t||0,u=performance.now(),d=0,f=!1,p=x=>{if(f)return;let m=Math.min(.032,Math.max(.001,(x-u)/1e3));if(u=x,h+=(-a*(c-e)-l*h)*m,c+=h*m,Math.abs(c-e)<.35&&Math.abs(h)<12){d=0,n(e),s&&s();return}n(c),d=requestAnimationFrame(p)};return d=requestAnimationFrame(p),()=>{f=!0,d&&cancelAnimationFrame(d)}}function W_(i,e){let t=null;i.addEventListener("pointerdown",s=>{if(!(!e.can(s)||s.pointerType==="mouse"&&s.button!==0)){t={id:s.pointerId,y0:s.clientY,s:e.begin(),hist:[{t:s.timeStamp,y:s.clientY}],moved:!1};try{i.setPointerCapture(s.pointerId)}catch{}}}),i.addEventListener("pointermove",s=>{if(!t||s.pointerId!==t.id)return;let r=s.clientY-t.y0;!t.moved&&Math.abs(r)<O2||(t.moved=!0,t.hist.push({t:s.timeStamp,y:s.clientY}),t.hist.length>8&&t.hist.shift(),e.move(t.s+r))});let n=s=>{if(!t||s.pointerId!==t.id)return;let r=t;t=null,e.end(r.moved,r.moved?ry(r.hist):0)};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n)}var Nu={};function oy(i,e){Nu[i]!==e&&(Nu[i]=e,document.documentElement.style.setProperty(i,e))}function B2(i){let e=V("button",{class:"bhq-sgrab",type:"button","aria-expanded":"false","aria-label":"Expand panel"},V("i",{"aria-hidden":"true"})),t=V("div",{class:"bhq-shead"}),n=V("div",{class:"bhq-speek"},e,t),s=V("div",{class:"bhq-sbody"}),r=V("i",{class:"bhq-sprobe","aria-hidden":"true"}),o=Fu(V("div",{class:"bhq-sheet",role:"region","aria-label":"Floor panel"},n,s,r));document.body.append(o);let a=L.sh={root:o,peek:n,body:s,grab:e,headSlot:t,probe:r,feed:i,y:0,H:0,travel:0,vis0:132,open:!1,busy:!1,cancel:null};a.start=new URLSearchParams(location.search).get("sheet")==="open";let l=f=>{let p=a.travel;Du(f<0?-Vp(-f,160):f>p?p+Vp(f-p,160):f)},c=(f,p)=>{if(a.busy=!1,!f){Nl(!a.open);return}Nl(a.y+G_(p)<a.travel/2,p)};W_(n,{can:()=>L.phone&&!L.land,begin:()=>(a.cancel&&(a.cancel(),a.cancel=null),a.busy=!0,a.y),move:l,end:c}),e.addEventListener("click",f=>{f.detail===0&&Nl(!a.open)});let h=null;s.addEventListener("touchstart",f=>{h=a.open&&!L.land&&f.touches.length===1&&s.scrollTop<=0?{y0:f.touches[0].clientY,on:!1,s:0,hist:[]}:null},{passive:!0}),s.addEventListener("touchmove",f=>{if(!h)return;let p=f.touches[0].clientY;if(!h.on){if(s.scrollTop>0||p-h.y0<-2){h=null;return}if(p-h.y0<3)return;h.on=!0,h.y0=p,h.s=a.y,a.busy=!0,a.cancel&&(a.cancel(),a.cancel=null)}f.cancelable&&f.preventDefault(),h.hist.push({t:f.timeStamp,y:p}),h.hist.length>8&&h.hist.shift(),l(h.s+(p-h.y0))},{passive:!1});let u=()=>{if(!h)return;let f=h;h=null,f.on&&c(!0,ry(f.hist))};s.addEventListener("touchend",u),s.addEventListener("touchcancel",u);let d=L.panel;if(d){let f=d.card;W_(f.root,{can:p=>L.phone&&!L.land&&!!p.target.closest(".bhq-hero, .bhq-cgrab")&&!p.target.closest("button"),begin:()=>(L.cardStop&&(L.cardStop(),L.cardStop=null),L.cardY),move:p=>{L.cardY=p<0?-Vp(-p,120):p,Pl(L.cardY)},end:(p,x)=>{if(!p)return;let m=L.cardY;if(m+G_(x)>130||x>900){let g=f.root.offsetHeight+24;L.cardStop=$p(m,g,x,_=>{L.cardY=_,Pl(_)},()=>{L.cardStop=null,L.h.onSelectBot&&L.h.onSelectBot(null),setTimeout(()=>{L.mode==="card"&&(L.cardY=0,Pl(0))},120)},.3,1)}else L.cardStop=$p(m,0,x,g=>{L.cardY=g,Pl(g)},()=>{L.cardStop=null},.4,Math.abs(x)>600?.8:1)}})}typeof ResizeObserver=="function"&&(L.ro3=new ResizeObserver(()=>{Kp(),em()}),L.ro3.observe(o),L.ro3.observe(n),d&&L.ro3.observe(d.card.root))}function Pl(i){L.panel.card.root.style.transform=i?"translate3d(0,"+i.toFixed(1)+"px,0)":""}function ay(){L.cardStop&&(L.cardStop(),L.cardStop=null),L.cardY=0,L.panel&&Pl(0)}function Du(i){let e=L.sh;e.y=i,e.root.style.transform="translate3d(0,"+i.toFixed(1)+"px,0)",e.body.style.opacity=Ul((e.travel-i)/36,0,1).toFixed(2),em()}function Nl(i,e,t){let n=L.sh;if(!n||!L.phone||(n.open=!!i,je(n.grab,"aria-expanded",n.open?"true":"false"),je(n.grab,"aria-label",n.open?"Collapse panel":"Expand panel"),Wn(n.root,"is-open",n.open),n.body.inert=!n.open&&!L.land,n.cancel&&(n.cancel(),n.cancel=null),L.land))return;let s=n.open?0:n.travel;if(t||Fl.matches||document.hidden){Du(s);return}n.cancel=$p(n.y,s,e||0,Du,()=>{n.cancel=null},n.open?.4:.34,Math.abs(e||0)>600?.82:1)}function Kp(){let i=L&&L.sh;!i||!L.phone||(i.H=i.root.offsetHeight,i.vis0=i.peek.offsetHeight+i.probe.offsetHeight,i.travel=L.land?0:Math.max(0,i.H-i.vis0),oy("--bhq-peek",i.vis0+"px"),L.land?(i.root.style.transform="",i.body.style.opacity="",i.y=0):!i.busy&&!i.cancel&&Du(i.open?0:i.travel))}function em(){let i=L&&L.sh;if(!i||!L.phone)return;let e=L.panel&&L.panel.card.root,t;L.land?t=0:L.mode==="card"&&e&&!e.hidden?t=e.offsetHeight:t=Math.max(0,i.H-Ul(i.y,-40,i.travel)),oy("--bhq-vis",Math.round(t*10)/10+"px")}function k2(){if(typeof matchMedia!="function")return;let i=matchMedia(F2),e=matchMedia(U2);L.mqs=[i,e],L.mqFn=()=>z2(i.matches,i.matches&&e.matches),i.addEventListener("change",L.mqFn),e.addEventListener("change",L.mqFn),L.mqFn()}function z2(i,e){let t=L.phone,n=L.sh,s=L.dock,r=L.panel;L.phone=i,L.land=i&&e;let o=document.documentElement;if(o.classList.toggle("bhq-phone",i),o.classList.toggle("bhq-land",L.land),i&&!t)r&&n.headSlot.append(r.teamHead),n.body.append(...[s&&s.waiting.root,r&&r.tcard,s&&s.finished.root,s&&s.routines.root,n.feed].filter(Boolean)),n.open=n.start||L.land,n.start=!1,Kp(),Nl(n.open,0,!0),L.chipFloor=null;else if(!i&&t){n.cancel&&(n.cancel(),n.cancel=null),n.root.style.transform="",n.body.style.opacity="",n.body.inert=!1,ay(),s&&s.root.append(s.waiting.root,s.finished.root,s.routines.root),r&&r.team.append(r.teamHead,r.tcard),n.feed&&(s&&s.root.parentNode?s.root.parentNode.insertBefore(n.feed,s.root):document.body.append(n.feed));for(let a of Object.keys(Nu))document.documentElement.style.removeProperty(a);Nu={}}else i&&(L.land&&(n.open=!0),Kp(),Nl(n.open,0,!0));Ll(),Lu(),i&&L.last.state&&uy(L.activeFloorId)}function ly(i,e){if(!L||!i)return;e=e||{};let t={currentFloor:e.currentFloor||null,selectedBot:e.selectedBot||null};L.last={state:i,opts:t},c2(i),L.ready||(L.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.add("bhq-ready")))),zi("topbar",()=>L.top&&cy(i)),zi("floors",()=>L.fl&&V2(i,t)),zi("panel",()=>L.panel&&G2(i,t)),zi("feed",()=>L.feed&&K2(i)),zi("dock",()=>L.dock&&py(i)),zi("zoom",()=>{L.zoom&&!L.zoom.root.isConnected&&document.body.append(L.zoom.root)}),zi("fades",Lu)}var q_=new Set;function zi(i,e){try{e()}catch(t){q_.has(i)||(q_.add(i),console.error("[ui] render failed in "+i,t))}}function cy(i){let e=L.top;tt(e.clock,bi(Date.now()));let t=y2(i);for(let r of K_){let o=e.chips[r.key],a=r.n(t),l=Gp(r.s,a);Jo(o.num,a),tt(o.label,l),Wn(o.el,"is-zero",a===0),Wn(o.el,"is-alert",!!r.alert&&a>0),r.hideZero&&qt(o.el,a===0);let c=a+" "+l;r.key==="attention"&&t.stuck>0&&(c=t.waiting_user+" "+Gp("waiting_user",t.waiting_user)+", "+t.stuck+" stuck"),je(o.el,"title",c)}let n=i.usage||{},s=Number.isFinite(n.total_used_pct)?Ul(n.total_used_pct,0,100):null;if(qt(e.usage,s==null),s!=null){let r=s>=95?"error":s>=85?"warn":null;tt(e.usageLabel,s2[n.period]||"Limit"),jo(e.meter,"--p",(s/100).toFixed(3)),tt(e.pct,(Math.round(s*10)/10).toFixed(1)+"%"),je(e.meter,"aria-valuenow",Math.round(s)),je(e.meter,"data-level",r),je(e.usage,"data-level",r);let o="",a=on(n.resets_at);if(a!=null){let h=a-Ys();o=h>0?"resets in "+J_(h):"resetting now"}tt(e.reset,o),qt(e.reset,!o);let l=e.reset.previousElementSibling;l&&qt(l,!o);let c=on(n.updated_at);je(e.usage,"title",c!=null?"Updated at "+bi(c):null)}qt(e.demo,!i.demo)}function H2(i){let e=[];for(let t of["working","waiting_user","error","stuck","done","idle"]){let n=Number(i&&i[t])||0;n>0&&e.push(n+" "+Gp(t,n))}return e.join(", ")}function hy(i,e){let t=i.bots||{};return Array.isArray(e.bots)?e.bots:Object.keys(t).filter(n=>t[n].floor===e.id)}function V2(i,e){let t=L.fl,n=i.bots||{},s=(i.floors||[]).slice().sort((a,l)=>(Number(l.order)||0)-(Number(a.order)||0)),r=new Set,o=s.some(a=>a.id===e.currentFloor)?e.currentFloor:null;L.activeFloorId=o,tt(t.count,s.length),s.forEach((a,l)=>{let c=L.floors.get(a.id);c||(c=E2(a.id),L.floors.set(a.id,c)),r.add(a.id);let h=a.order!=null&&Number.isFinite(Number(a.order))?Number(a.order):s.length-l,u=hy(i,a);for(tt(c.num,h),tt(c.name,a.name||a.id),tt(c.count,u.length);c.dotEls.length<u.length;){let p=V("i",{class:"bhq-dot"});c.dotEls.push(p),c.dots.append(p)}for(;c.dotEls.length>u.length;)c.dotEls.pop().remove();u.forEach((p,x)=>je(c.dotEls[x],"data-s",us(n[p])));let d=null;for(let p of u){let x=us(n[p]);if(x==="error"){d="error";break}(x==="waiting_user"||x==="stuck")&&(d="waiting_user")}je(c.btn,"data-alert",d);let f=H2(a.counts);je(c.btn,"aria-label","Floor "+h+", "+(a.name||a.id)+": "+u.length+" "+Dl(u.length,"bot","bots")+(f?" ("+f+")":"")),je(c.btn,"title",f||null),je(c.btn,"aria-current",a.id===o?"true":null)});for(let[a,l]of L.floors)r.has(a)||(l.btn.remove(),L.floors.delete(a));Ol(t.shaft,s.map(a=>L.floors.get(a.id).btn),1),dy(),uy(o)}function uy(i){let e=L.fl;if(!L.phone||!i||L.chipFloor===i)return;let t=L.floors.get(i);if(!t||!t.btn.offsetWidth)return;let n=L.chipFloor==null;L.chipFloor=i;let s=e.fscroll,r=t.btn.getBoundingClientRect(),o=s.getBoundingClientRect();s.scrollTo({left:Math.max(0,s.scrollLeft+(r.left-o.left)-(o.width-r.width)/2),behavior:n||Fl.matches?"auto":"smooth"})}function dy(){let i=L&&L.fl;if(!i)return;let e=L.activeFloorId?L.floors.get(L.activeFloorId):null;if(!e||!e.btn.isConnected||!e.btn.offsetHeight){i.carShown&&(i.car.style.opacity="0",i.carShown=!1);return}let t=e.btn.offsetTop,n=e.btn.offsetHeight;(i.carTop!==t||i.carH!==n)&&(i.carTop=t,i.carH=n,i.car.style.transform="translateY("+t+"px)",i.car.style.height=n+"px"),i.carShown||(i.car.style.opacity="1",i.carShown=!0),i.ready||(i.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>i.shaft.classList.add("is-ready"))))}function G2(i,e){let t=L.panel,n=i.bots||{},s=(i.floors||[]).find(u=>u.id===e.currentFloor)||null,r=e.selectedBot?n[e.selectedBot]:null,o=r?"card":"team",a=L.mode,l=L.cardBot,c=t.team.contains(document.activeElement),h=t.card.root.contains(document.activeElement);if(o!==a&&(qt(t.team,o==="card"),qt(t.card.root,o==="team"),L.mode=o,o==="card"&&ay(),L.sh&&(Wn(L.sh.root,"is-away",o==="card"),em())),o==="card")L.cardBot!==r.id&&(L.cardBot=r.id,t.card.histSig=null,t.card.fresh=!0,t.card.body.scrollTop=0,a==="card"&&Q_(t.card.root,"is-enter")),fy(i,r),a!=="card"&&c&&t.card.name.focus({preventScroll:!0});else if(L.cardBot=null,q2(i,s,e),a==="card"&&h){let u=L.cells.get(l);u&&u.btn.focus({preventScroll:!0})}}function W2(i){let e=Qo(),t=V("b",{class:"bhq-mname"}),n=V("span",{class:"bhq-mstep"}),s=V("span",{class:"bhq-mseen bhq-num"}),r=V("button",{class:"bhq-member",type:"button","data-id":i,role:"listitem"},e.root,V("span",{class:"bhq-mtext"},t,n),s);return r.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(i)}),{btn:r,av:e,name:t,step:n,seen:s}}function q2(i,e,t){let n=L.panel,s=i.bots||{},r=e?hy(i,e):[];r=r.filter(f=>s[f]);let o=!0;L.teamFloor!==(e?e.id:null)&&(L.teamFloor=e?e.id:null,n.list.scrollTop=0,o=!L.teamReady,L.teamReady&&Q_(n.list,"is-enter")),L.teamReady=!0,tt(n.teamTitle,e?e.name||e.id:"No floor selected");let a=r.length,l=0,c=0,h=0;for(let f of r){let p=us(s[f]);p==="working"?l++:p==="waiting_user"||p==="stuck"?c++:p==="error"&&h++}tt(n.teamSub,e?a+" "+Dl(a,"bot","bots"):L.phone?"Pick a floor above":"Pick a floor on the left"),je(n.teamHead,"data-s",l>0?"working":"idle"),Jo(n.teamBig,l,o),Jo(n.nWait,c,o),Jo(n.nErr,h,o),tt(n.lErr,h===1?"error":"errors"),Wn(n.rowWait,"is-zero",!c),Wn(n.rowErr,"is-zero",!h),qt(n.teamEmpty,a>0||!e);let u=new Set(r);for(let[f,p]of L.cells)u.has(f)||(p.btn.remove(),L.cells.delete(f));let d=r.map(f=>{let p=L.cells.get(f);p||(p=W2(f),L.cells.set(f,p));let x=s[f],m=us(x);ea(p.av,x,m),tt(p.name,x.name||f);let g=m==="idle"?j_(x):"",_=m==="idle"&&x.status==="working";tt(p.step,g||(_?qs(m):x.step||qs(m))),je(p.step,"data-u",g?"":null);let E=on(x.last_seen);return tt(p.seen,E==null?"\u2013":u2(E)),je(p.seen,"title",E==null?"No status line yet":"Last status line "+Zp(E)+" ("+bi(E)+")"),je(p.btn,"data-s",m),je(p.btn,"aria-label",(x.name||f)+", "+qs(m)+", "+Wp(x)),je(p.btn,"title",(x.name||f)+": "+qs(m)+(x.step?". "+x.step:"")+" \xB7 "+Wp(x)),p.btn});Ol(n.list,d,0)}function X2(i){return V("li",{class:"bhq-step-row"},V("time",{class:"bhq-num",text:bi(on(i.t))}),V("span",{text:i.step||qs(i.status),title:i.step||""}))}function fy(i,e){let t=L.panel.card,n=us(e),s=Ys(),r=!t.fresh;je(t.hero,"data-s",n),ea(t.av,e,n),tt(t.name,e.name||e.id);let o=(i.floors||[]).find(P=>P.id===e.floor),a=o&&(o.name||o.id)||e.group||"",l=Number.isFinite(Number(e.desk))&&e.desk!=null?" \xB7 desk "+Number(e.desk):"";tt(t.where,a+l+" \xB7 "+Wp(e)),je(t.stDot,"data-s",n);let c=on(e.since),h=c==null?"":" \xB7 "+(s-c<6e4?"just now":h2(s-c));tt(t.stTxt,($_[n]||qs(n))+h);let u=n==="idle"?j_(e):"";tt(t.now,u||(n==="idle"&&e.status==="working"?"Went quiet after: "+(e.step||"a task"):e.step||"No data on the current step"));let d=typeof e.task=="string"?e.task.trim():"",f=!!d&&!/^tsk-\d+$/i.test(d)&&d!==(e.step||"").trim();qt(t.taskBlock,!f),tt(t.task,f?d:"");let p=e.today||{},x=Number(p.events)||0,m=Number(p.tasks_done)||0;Jo(t.sSteps.v,x,r),tt(t.sSteps.l,Dl(x,"step","steps")),Jo(t.sTasks.v,m,r),tt(t.sTasks.l,Dl(m,"task","tasks")),tt(t.sHours.v,m2(p.working_min));let g=i.usage&&i.usage.period;tt(t.usageLabel,r2[g]||"Usage");let _=Number.isFinite(e.usage_share)?Ul(e.usage_share,0,1):null;qt(t.useBlock,_==null),_!=null&&(jo(t.fuel,"--p",(_>0?Math.max(_,.02):0).toFixed(3)),je(t.fuel,"aria-valuenow",Math.round(_*100)),tt(t.shareNum,Math.round(_*100)+"%"));let E=on(i.usage&&i.usage.resets_at),v="";if(E!=null){let P=E-s;v=P>0?"resets in "+J_(P):"resetting now"}tt(t.reset,v),qt(t.reset,!v||_==null);let S=(e.history||[]).slice(0,4);S.length>1&&S[0].step===e.step&&(S=S.slice(1)),S=S.slice(0,3);let M=e.id+`
`+S.map(P=>P.t+"|"+P.status+"|"+P.step).join(`
`);if(M!==t.histSig){t.histSig=M,t.hist.textContent="",S.length||t.hist.append(V("li",{class:"bhq-step-empty",text:"No steps yet."}));for(let P of S)t.hist.append(X2(P))}let A=!!e.chat_url;t.cta.disabled===A&&(t.cta.disabled=!A),je(t.cta,"data-chat",A?e.chat_url:null);let y=A?"Open this bot chat":i.wallpaper_feed?"No chat link yet":"Set Wallpaper feed in Settings to enable Open chat";je(t.cta,"title",y);let w=(n==="waiting_user"||n==="stuck")&&!!e.paperclip_agent_id;qt(t.start,!w),je(t.start,"data-agent",w?e.paperclip_agent_id:null),je(t.start,"disabled",t.startBusy?"true":null),tt(t.start,t.startBusy?"Starting\u2026":"Start");let R=n==="error"&&!!e.paperclip_agent_id;qt(t.clearErr,!R),je(t.clearErr,"data-agent",R?e.paperclip_agent_id:null),je(t.clearErr,"disabled",t.clearErrBusy?"true":null),tt(t.clearErr,t.clearErrBusy?"Clearing\u2026":"Clear error"),t.fresh=!1}function Y2(i,e){let t=e.bots&&e.bots[i.bot],n=i.name||t&&t.name||i.bot||"",s=i.status||"idle";return V("li",{class:"bhq-frow","data-s":s},V("time",{class:"bhq-num",text:bi(on(i.t)),datetime:i.t||""}),V("i",{class:"bhq-dot","data-s":s,"aria-hidden":"true"}),V("span",{class:"bhq-ftxt"},V("b",{text:n})," "+(i.step||qs(i.status))))}function $2(i){L.feedOut.add(i),i.classList.add("is-out");let e=()=>{i.remove(),L.feedOut.delete(i)};Fl.matches?e():setTimeout(e,420)}function K2(i){let e=L.feed,t=(Array.isArray(i.feed)?i.feed:[]).slice(0,4),n=new Map,s=new Array(t.length);for(let c=t.length-1;c>=0;c--){let h=t[c],u=h.t+"|"+h.bot+"|"+h.status+"|"+h.step,d=n.get(u)||0;n.set(u,d+1),s[c]=d?u+"#"+d:u}let r=new Set(s);for(let[c,h]of L.feedRows)r.has(c)||(L.feedRows.delete(c),$2(h));let o=0;for(let c of s)L.feedRows.has(c)||o++;let a=!L.feedFirst&&o>0&&o<4&&!Fl.matches,l=t.map((c,h)=>{let u=L.feedRows.get(s[h]);if(!u){if(u=Y2(c,i),a){u.classList.add("is-new");let d=()=>u.classList.remove("is-new");u.addEventListener("animationend",d,{once:!0}),setTimeout(d,700)}L.feedRows.set(s[h],u)}return u});Ol(e.list,l.concat([...L.feedOut]),0),qt(e.empty,t.length>0),L.feedFirst=!1}function py(i){j2(i),eR(i),tR(i),sR(i),Ll()}function tm(i,e,t){return i.bots&&i.bots[e]||{id:e,name:t||e,avatar:e}}var Z2=15*6e4;function J2(i){let e=Qo({orb:!1}),t=V("b",{class:"bhq-ckname"}),n=V("span",{class:"bhq-ckat bhq-num"}),s=V("li",{class:"bhq-ckrow","data-id":i},e.root,t,n);return s.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(i)}),{li:s,av:e,name:t,at:n}}function j2(i){let e=L.dock,t=i.check,n=t&&Array.isArray(t.bots)?t.bots:[];if(qt(e.check.root,!n.length),!n.length){e.checkT=null;return}e.checkT!==t.t&&(e.checkT=t.t,Qp(e.check,!0,!1));let s=on(t.t)??Ys(),r=Ys()-s>Z2,o=n.filter(c=>c.at).length;tt(e.check.count,o+"/"+n.length),je(e.check.count,"data-s",o===n.length?"done":r?"error":"waiting_user"),e.check.rows=n.length,Wn(e.check.root,"has-rows",!0);let a=new Set,l=n.map(c=>{let h=c.id||c.name;a.add(h);let u=e.crows.get(h);u||(u=J2(h),e.crows.set(h,u)),ea(u.av,tm(i,h,c.name),null),tt(u.name,c.name||h);let d=on(c.at);return je(u.li,"data-ok",d!=null?"yes":r?"no":"wait"),tt(u.at,d!=null?"\u2713 "+bi(d):r?"no answer":"waiting\u2026"),u.li});for(let[c,h]of e.crows)a.has(c)||(h.li.remove(),e.crows.delete(c));Ol(e.cl,l,0),tt(e.cnote,o===n.length?"Every bot answered.":r?"Ask the bots that did not answer to re-read their instructions, or run the setup again.":"Started "+bi(s)+". Each bot ticks off when its own status line arrives.")}function Q2(i){let e=Qo(),t=V("button",{class:"bhq-wname",type:"button"}),n=V("button",{class:"bhq-wbtn bhq-wbtn--start",type:"button",text:"Start",hidden:!0}),s=V("button",{class:"bhq-wbtn bhq-wbtn--clear",type:"button",text:"Clear error",hidden:!0}),r=V("button",{class:"bhq-wbtn",type:"button",text:"Open chat",hidden:!0}),o=V("b"),a=V("span"),l=V("p",{class:"bhq-wtext"},o,a),c=V("div",{class:"bhq-wrow","data-id":i},e.root,V("div",{class:"bhq-wmain"},V("div",{class:"bhq-wtop"},t,n,s,r),l)),h=()=>{L.h.onSelectBot&&L.h.onSelectBot(i)};return t.addEventListener("click",h),c.addEventListener("click",u=>{u.target.closest("button")||h()}),n.addEventListener("click",u=>{u.stopPropagation();let d=n.getAttribute("data-agent");d&&iy(i,d)}),s.addEventListener("click",u=>{u.stopPropagation();let d=s.getAttribute("data-agent");d&&sy(i,d)}),r.addEventListener("click",u=>{u.stopPropagation();let d=r.getAttribute("data-chat");d&&jp(i,d)}),{row:c,av:e,name:t,start:n,clearErr:s,btn:r,st:o,step:a}}function eR(i){let e=L.dock,t=i.bots||{},n=Object.keys(t).filter(a=>{let l=us(t[a]);return l==="waiting_user"||l==="error"}).sort((a,l)=>(on(t[l].last_event)||0)-(on(t[a].last_event)||0)||String(t[a].name).localeCompare(String(t[l].name))),s=n.filter(a=>us(t[a])==="error").length;tt(e.waiting.count,n.length),e.waiting.rows=n.length,Wn(e.waiting.root,"has-rows",n.length>0),je(e.waiting.count,"data-s",s?"error":n.length?"waiting_user":null);let r=new Set(n);for(let[a,l]of e.wrows)r.has(a)||(l.row.remove(),e.wrows.delete(a));let o=n.map(a=>{let l=e.wrows.get(a);l||(l=Q2(a),e.wrows.set(a,l));let c=t[a],h=us(c);je(l.row,"data-s",h),ea(l.av,c,h),tt(l.name,c.name||a),tt(l.st,$_[h]||qs(h)),tt(l.step,c.step?" \xB7 "+c.step:"");let u=(h==="waiting_user"||h==="stuck")&&!!c.paperclip_agent_id;qt(l.start,!u),je(l.start,"data-agent",u?c.paperclip_agent_id:null);let d=h==="error"&&!!c.paperclip_agent_id;return qt(l.clearErr,!d),je(l.clearErr,"data-agent",d?c.paperclip_agent_id:null),qt(l.btn,!c.chat_url),je(l.btn,"data-chat",c.chat_url||null),l.row});Ol(e.wlist,o,0),qt(e.wempty,n.length>0)}function nm(i){if(!L||!L.panel||!L.panel.card)return;L.panel.card.startBusy=!!i;let e=L.panel.card;je(e.start,"disabled",i?"true":null),tt(e.start,i?"Starting\u2026":"Start")}function im(i){if(!L||!L.panel||!L.panel.card)return;L.panel.card.clearErrBusy=!!i;let e=L.panel.card;je(e.clearErr,"disabled",i?"true":null),tt(e.clearErr,i?"Clearing\u2026":"Clear error")}function tR(i){let e=L.dock,t=Array.isArray(i.finished);if(qt(e.finished.root,!t),!t)return;let n=Ys(),s=i.finished.map(o=>({e:o,t:on(o&&o.t)})).filter(o=>o.e&&(o.t==null||n-o.t<=864e5)).sort((o,a)=>(a.t||0)-(o.t||0)).slice(0,60);tt(e.finished.count,s.length),e.finished.rows=s.length,Wn(e.finished.root,"has-rows",s.length>0),qt(e.fempty,s.length>0);let r=s.map(o=>o.t+"|"+o.e.bot+"|"+o.e.step).join(`
`);r!==e.finSig&&(e.finSig=r,e.tl.textContent="",e.finRefs=s.map(o=>{let a=tm(i,o.e.bot,o.e.name),l=Qo({orb:!1});ea(l,a,null);let c=V("span",{class:"bhq-tl-time bhq-num"}),h=V("li",{class:"bhq-tl-row"},l.root,V("div",{class:"bhq-tl-main"},V("div",{class:"bhq-tl-top"},V("b",{class:"bhq-tl-name",text:o.e.name||a.name||o.e.bot||""}),c),V("div",{class:"bhq-tl-step",text:o.e.step||"done",title:o.e.step||""})));return e.tl.append(h),{time:c,t:o.t}}));for(let o of e.finRefs)tt(o.time,o.t==null?"":Zp(o.t))}async function nR(i){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(i),!0}catch{}try{let e=V("textarea",{"aria-hidden":"true",tabindex:"-1",readonly:!0});e.value=i,e.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none",document.body.append(e),e.select();let t=document.execCommand("copy");return e.remove(),!!t}catch{return!1}}async function iR(i,e){let t=L.dock,n="pause routine "+i.routine,s=await nR(n);tt(e.noteText,s?"Copied \u2014 paste it in the chat":"Could not copy \u2014 send: "+n);let r=e.key;clearTimeout(t.copied.get(r)),e.li.classList.add("is-copied"),t.copied.set(r,setTimeout(()=>{t.copied.delete(r),e.li.classList.remove("is-copied")},4200));let o=L.last.state&&L.last.state.bots&&L.last.state.bots[i.bot];o&&o.chat_url&&jp(o.id,o.chat_url)}function sR(i){let e=L.dock,t=Array.isArray(i.routines);if(qt(e.routines.root,!t),!t)return;let n=i.routines.filter(r=>r&&r.routine).slice().sort((r,o)=>(on(r.next_run)??1/0)-(on(o.next_run)??1/0));tt(e.routines.count,n.length),e.routines.rows=n.length,Wn(e.routines.root,"has-rows",n.length>0),qt(e.rempty,n.length>0);let s=n.map(r=>r.bot+"|"+r.routine+"|"+r.schedule+"|"+r.next_run+"|"+r.name).join(`
`);s!==e.routSig&&(e.routSig=s,e.rl.textContent="",e.routRefs=n.map(r=>{let o=tm(i,r.bot,r.name),a=r.name||o.name||r.bot||"",l=r.bot+"|"+r.routine,c=Qo({orb:!1});ea(c,o,null);let h=V("span",{class:"bhq-rnext bhq-num"}),u=V("span"),d=V("button",{class:"bhq-roff",type:"button",text:"Turn off",title:'Copies "pause routine '+r.routine+'" and opens the chat'}),f=V("li",{class:"bhq-rrow"+(e.copied.has(l)?" is-copied":"")},c.root,V("div",{class:"bhq-rmain"},V("div",{class:"bhq-rtop"},V("b",{class:"bhq-rname",text:r.routine,title:r.routine}),h),V("div",{class:"bhq-rbot"},V("span",{class:"bhq-rmeta",text:a+(r.schedule?" \xB7 "+r.schedule:""),title:a+(r.schedule?" \xB7 "+r.schedule:"")}),V("span",{class:"bhq-rnote",role:"status"},Ir(Xs.check),u),d))),p={li:f,next:h,noteText:u,key:l,t:on(r.next_run)};return tt(u,"Copied \u2014 paste it in the chat"),d.addEventListener("click",()=>iR(r,p)),e.rl.append(f),p}));for(let r of e.routRefs)tt(r.next,r.t==null?"no date":d2(r.t)),je(r.next,"title",r.t==null?null:f2(r.t))}var vy="bothq.sound",rR="/4d/audio/music-loop.m4a",Uu=45.714285714285715,sm=2,oR=.4,by=.75,My=.9,my=[72,74,76,79,81,84],gy=[76,79,81,84,86,88,91,93],aR='<svg class="bhq-snd-on" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3.2 7.6h2.9L10 4.5v11L6.1 12.4H3.2z" fill="currentColor"/><path d="M13 7.3a3.9 3.9 0 0 1 0 5.4M15.3 5.1a7 7 0 0 1 0 9.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',lR='<svg class="bhq-snd-off" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3.2 7.6h2.9L10 4.5v11L6.1 12.4H3.2z" fill="currentColor"/><path d="M13.2 8l4 4m0-4l-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',Gi=cR(),De=null,Vi=null,oi=null,ds=null,om=null,Ou=null,am=!1,Bl=!1,$s=null,kl=null,Nt={buf:null,loading:null,next:0,first:!0,timer:0,playing:!1,srcs:new Set},xy=new Map;function cR(){try{return{music:!0,fx:!0,...JSON.parse(localStorage.getItem(vy))}}catch{return{music:!0,fx:!0}}}function hR(){try{localStorage.setItem(vy,JSON.stringify(Gi))}catch{}}function Sy({slot:i,withMusic:e=!0}={}){if(am)return;am=!0,kl=new AbortController;let t=kl.signal;i&&mR(i,t);let n=()=>{try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}uR()&&(De.resume?.(),!Bl&&(Bl=!0,Gi.music&&e&&lm()))};for(let o of["pointerdown","keydown","touchend"])addEventListener(o,n,{capture:!0,signal:t});document.addEventListener("visibilitychange",()=>{if(!De||!Bl)return;let o=De.currentTime;Vi.gain.cancelScheduledValues(o),Vi.gain.setValueAtTime(Vi.gain.value,o),document.hidden?(Vi.gain.linearRampToValueAtTime(0,o+.4),setTimeout(()=>{document.hidden&&De.suspend?.()},500)):(De.resume?.(),Vi.gain.linearRampToValueAtTime(My,o+1.2))},{signal:t}),document.addEventListener("click",o=>{let a=o.target instanceof Element?o.target:null;if(!a)return;let l=a.closest(".bhq-dtoggle");if(l)return void queueMicrotask(()=>ai.panel(l.getAttribute("aria-expanded")==="true"));let c=a.closest(".bhq-sgrab");if(c)return void queueMicrotask(()=>ai.zoom(c.getAttribute("aria-expanded")==="true"?"in":"out",.4));a.closest(".bhq-eye")&&ai.tick()},{signal:t});let s=0,r=o=>{let a=performance.now();a-s>280&&ai.zoom(o.deltaY<0?"in":"out"),s=a};document.getElementById("office")?.addEventListener("wheel",r,{passive:!0,signal:t}),document.getElementById("scene")?.addEventListener("wheel",r,{passive:!0,signal:t}),Bl&&Gi.music&&e&&lm()}function Ey(){wy(),kl&&(kl.abort(),kl=null),$s&&($s.btn.remove(),$s.pop.remove(),$s=null),am=!1}function uR(){if(De)return!0;let i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;try{De=new i({latencyHint:"interactive"})}catch{return!1}let e=De.createDynamicsCompressor();e.threshold.value=-16,e.knee.value=8,e.ratio.value=3,e.attack.value=.004,e.release.value=.25,Vi=De.createGain(),Vi.gain.value=My,Vi.connect(e),e.connect(De.destination),oi=De.createGain(),oi.gain.value=0,oi.connect(Vi),ds=De.createGain(),ds.gain.value=Gi.fx?by:0,ds.connect(Vi);let t=De.createConvolver();t.buffer=dR(2.2,1.6),om=De.createGain(),om.connect(t),t.connect(ds),Ou=De.createBuffer(1,De.sampleRate*2,De.sampleRate);let n=Ou.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return!0}function dR(i,e){let t=De.sampleRate,n=Math.floor(i*t),s=Math.floor(.012*t),r=De.createBuffer(2,n,t);for(let o=0;o<2;o++){let a=r.getChannelData(o),l=0;for(let c=s;c<n;c++){let h=(c-s)/t,u=1-Math.exp(-2*Math.PI*(500+7e3*Math.exp(-h*1.8))/t);l+=u*(Math.random()*2-1-l),a[c]=l*Math.exp(-6.91*h/e)}}return r}async function lm(){if(!De||Nt.playing)return;Nt.playing=!0;try{Nt.buf||(Nt.buf=await(Nt.loading||(Nt.loading=fetch(rR).then(e=>e.arrayBuffer()).then(e=>new Promise((t,n)=>De.decodeAudioData(e,t,n))))))}catch{Nt.playing=!1,Nt.loading=null;return}if(!Nt.playing)return;let i=De.currentTime;oi.gain.cancelScheduledValues(i),oi.gain.setValueAtTime(oi.gain.value,i),oi.gain.linearRampToValueAtTime(oR,i+3),Nt.next=i+.05,Nt.first=!0,_y(),clearInterval(Nt.timer),Nt.timer=setInterval(_y,1e3)}function _y(){for(;Nt.playing&&Nt.next<De.currentTime+3;){let i=Nt.next,e=De.createBufferSource(),t=De.createGain();e.buffer=Nt.buf,Nt.first?t.gain.setValueAtTime(1,i):(t.gain.setValueAtTime(0,i),t.gain.linearRampToValueAtTime(1,i+sm)),t.gain.setValueAtTime(1,i+Uu),t.gain.linearRampToValueAtTime(0,i+Uu+sm),e.connect(t),t.connect(oi),e.start(i),e.stop(i+Uu+sm),Nt.srcs.add(e),e.onended=()=>Nt.srcs.delete(e),Nt.first=!1,Nt.next+=Uu}}function wy(){if(Nt.playing=!1,clearInterval(Nt.timer),!De)return;let i=De.currentTime;oi.gain.cancelScheduledValues(i),oi.gain.setValueAtTime(oi.gain.value,i),oi.gain.linearRampToValueAtTime(0,i+.8);for(let e of Nt.srcs)try{e.stop(i+.9)}catch{}Nt.srcs.clear()}var Ks=i=>440*2**((i-69)/12);function Mn(i,e){if(!De||!Bl||!Gi.fx||De.state!=="running"||document.hidden)return!1;if(!i)return!0;let t=performance.now();return t-(xy.get(i)||0)<e?!1:(xy.set(i,t),!0)}function fs(i=0,e=.2){let t=De.createGain(),n=t;if(De.createStereoPanner){let s=De.createStereoPanner();s.pan.value=i,t.connect(s),n=s}if(n.connect(ds),e){let s=De.createGain();s.gain.value=e,n.connect(s),s.connect(om)}return t}function Ty(i,e,t,n,s){i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(t,e+n),i.exponentialRampToValueAtTime(1e-4,e+n+s)}function Si(i,e,t,n,s,r,o,a){let l=De.createOscillator(),c=De.createGain();return l.type=i,l.frequency.setValueAtTime(e,t),Ty(c.gain,t,r,o,a),l.connect(c),c.connect(s),l.start(t),l.stop(t+n),l}function Hi(i,e=.45,t=0){let n=fs(t,.06),s=De.createBufferSource(),r=De.createBiquadFilter(),o=De.createGain();s.buffer=Ou,r.type="bandpass",r.frequency.value=3e3+Math.random()*600,r.Q.value=1.3,Ty(o.gain,i,e,.001,.022),s.connect(r),r.connect(o),o.connect(n),s.start(i,Math.random()*1.5),s.stop(i+.05),Si("sine",2100*(.96+Math.random()*.08),i,.04,n,e*.3,.001,.02),Si("sine",190,i,.07,n,e*.45,.001,.035)}function Pr(i,e,t,n=0,s=!1){let r=Ks(e),o=fs(n,.28);for(let[a,l]of[[1,t],[2,t*.22]])Si("sine",r*a*(s?1.35:.55),i,.36,o,l,.003,.3).frequency.exponentialRampToValueAtTime(r*a,i+.028)}function fR(i,e,t,n=0){let s=Ks(e),r=fs(n,.2),o=new Float32Array(48);for(let l=0;l<o.length;l++){let c=l/(o.length-1)*.36;o[l]=s*(1+.26*Math.exp(-13*c)*Math.sin(2*Math.PI*11*c))*(.86+.14*(1-Math.exp(-30*c)))}let a=Si("sine",s,i,.4,r,t,.002,.34);a.frequency.cancelScheduledValues(i),a.frequency.setValueCurveAtTime(o,i,.36)}function Mi(i,e,t,n=.15){let s=Ks(e),r=fs(n,.5),o=Si("sine",s,i,1.9,r,t,.002,1.6),a=De.createOscillator(),l=De.createGain();a.frequency.value=s*3,l.gain.setValueAtTime(s*.5,i),l.gain.exponentialRampToValueAtTime(s*.01,i+.6),a.connect(l),l.connect(o.frequency),a.start(i),a.stop(i+1.9),Si("sine",s*2,i,.7,r,t*.18,.002,.5)}function rm(i,e,t=.55,n=.3){let s=fs(0,.2),r=De.createBufferSource(),o=De.createBiquadFilter(),a=De.createGain(),[l,c]=e==="in"?[450,3600]:e==="out"?[3200,380]:[300,1500];r.buffer=Ou,r.loop=!0,o.type="bandpass",o.Q.value=.9,o.frequency.setValueAtTime(l,i),o.frequency.exponentialRampToValueAtTime(c,i+t),a.gain.setValueAtTime(1e-4,i),a.gain.linearRampToValueAtTime(n,i+t*(e==="in"?.6:.35)),a.gain.exponentialRampToValueAtTime(1e-4,i+t),r.connect(o),o.connect(a),a.connect(s),r.start(i,Math.random()),r.stop(i+t+.05)}function yy(i,e,t){let n=fs(0,.25),s=De.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(1800,i),s.frequency.exponentialRampToValueAtTime(400,i+.3),s.connect(n),Si("triangle",Ks(e),i,.5,s,t,.004,.42)}function pR(i){let e=2166136261;for(let t of String(i))e=Math.imul(e^t.charCodeAt(0),16777619);return my[(e>>>0)%my.length]}var ai={tick(){Mn("tick",40)&&Hi(De.currentTime,.35)},hover(i){!i||!Mn("hover:"+i,450)||!Mn("hover",70)||fR(De.currentTime+.01,pR(i),.16,(Math.random()-.5)*.5)},select(i){if(!Mn("select",120))return;let e=De.currentTime+.01;i?(Hi(e,.4),Pr(e+.02,79,.2,.3),Pr(e+.09,88,.17,.3)):(Pr(e,88,.12,.3,!0),Pr(e+.07,79,.1,.3,!0))},floor(i=0){if(!Mn("floor",150))return;let e=De.currentTime+.01;Hi(e,.4,-.4),rm(e+.01,"slide",.42,.22),Si("sine",95,e+.02,.25,fs(0,0),.22,.003,.16).frequency.exponentialRampToValueAtTime(70,e+.2),Mi(e+.16,gy[Math.max(0,Math.min(gy.length-1,i))],.12)},zoom(i,e=.55){Mn("zoom",200)&&rm(De.currentTime+.005,i==="in"?"in":"out",e,.2)},panel(i){if(!Mn("panel",120))return;let e=De.currentTime+.01;Hi(e,.35,-.35),Pr(e+.01,i?84:79,.13,-.35,!i)},status(i){if(!Mn("status",2500)||!Mn("status:"+i,6e3))return;let e=De.currentTime+.02;i==="waiting_user"?(Mi(e,88,.14),Mi(e+.2,84,.13)):i==="error"?(yy(e,69,.16),yy(e+.17,65,.15)):i==="done"&&(Mi(e,84,.08,.2),Mi(e+.08,88,.08,.25),Mi(e+.16,91,.08,.3))},pick(i=0,e=2){if(!Mn("pick",60))return;let t=De.currentTime+.005,n=[84,81,79,76][Math.round(i/Math.max(1,e-1)*3)];Hi(t,.32,.25),Pr(t+.012,n,.13,.25)},press(){if(!Mn("press",150))return;let i=De.currentTime+.005;Hi(i,.4),Mi(i+.02,84,.08,0),Mi(i+.09,91,.05,.1)},copied(){if(!Mn("copied",300))return;let i=De.currentTime+.005;Hi(i,.38),Mi(i+.03,84,.08,.1),Mi(i+.1,88,.08,.15),Mi(i+.17,91,.08,.2)},nav(){if(!Mn("nav",150))return;let i=De.currentTime+.005;Hi(i,.3),rm(i+.02,"out",.6,.14)},grab(){if(Mn("grab",80)){let i=De.currentTime+.005;Hi(i,.3),Pr(i+.01,79,.1,0)}},drop(){if(!Mn("drop",80))return;let i=De.currentTime+.005;Hi(i,.22),Si("sine",150,i,.16,fs(0,.1),.2,.003,.11).frequency.exponentialRampToValueAtTime(95,i+.1)},blink(){if(!Mn("blink",300))return;let i=De.currentTime+.005,e=fs(0,.22);Si("sine",Ks(81),i,.1,e,.08,.002,.07).frequency.exponentialRampToValueAtTime(Ks(76),i+.06),Si("sine",Ks(88),i+.19,.12,e,.05,.004,.08).frequency.exponentialRampToValueAtTime(Ks(93),i+.25)}};function mR(i,e){let t=document.createElement("button");t.type="button",t.className="bhq-snd bhq-surface",t.setAttribute("aria-label","Sound"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.innerHTML=aR+lR;let n=document.createElement("div");n.className="bhq-snd-pop bhq-surface",n.setAttribute("role","group"),n.setAttribute("aria-label","Sound"),n.hidden=!0;let s={};for(let[a,l]of[["music","Music"],["fx","Sounds"]]){let c=document.createElement("button");c.type="button",c.className="bhq-snd-row",c.setAttribute("role","switch"),c.innerHTML=`<span>${l}</span><i class="bhq-snd-sw" aria-hidden="true"></i>`,c.addEventListener("click",()=>gR(a,!Gi[a])),s[a]=c,n.append(c)}i.prepend(t),document.body.append(n);let r=()=>{let a=t.getBoundingClientRect();n.style.top=`${Math.round(a.bottom+8)}px`,n.style.right=`${Math.max(8,Math.round(innerWidth-a.right))}px`},o=a=>{a&&r(),n.hidden=!a,t.setAttribute("aria-expanded",a?"true":"false")};t.addEventListener("click",()=>o(n.hidden)),document.addEventListener("pointerdown",a=>{!n.hidden&&!n.contains(a.target)&&!t.contains(a.target)&&o(!1)},{signal:e}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!n.hidden&&o(!1)},{signal:e}),addEventListener("resize",()=>{n.hidden||r()},{signal:e}),$s={btn:t,pop:n,rows:s},Ay()}function Ay(){if($s){$s.btn.classList.toggle("is-off",!Gi.music&&!Gi.fx);for(let i of["music","fx"])$s.rows[i].setAttribute("aria-checked",Gi[i]?"true":"false")}}function gR(i,e){if(Gi[i]=e,hR(),Ay(),!!De&&(i==="music"&&(e?lm():wy()),i==="fx")){let t=De.currentTime;ds.gain.cancelScheduledValues(t),ds.gain.setValueAtTime(ds.gain.value,t),ds.gain.linearRampToValueAtTime(e?by:0,t+.15),e&&setTimeout(()=>ai.tick(),180)}}var Ry={day:"13:00",evening:"18:50",night:"23:00"};function xR(i){let e=document.querySelector("#topbar .bhq-right");if(!e||e.querySelector(".bhq-qual"))return;let t=document.createElement("div");t.className="bhq-qual bhq-surface",t.setAttribute("role","group"),t.setAttribute("aria-label","Office quality");for(let[n,s]of[["mid","2D"],["high","3D"],["4d","4D"]]){let r=document.createElement("button");r.type="button",r.dataset.v=n,r.textContent=s,n==="4d"&&r.classList.add("on"),r.addEventListener("click",()=>i(n)),t.append(r)}e.prepend(t)}function _R(i){let e=document.querySelector("#topbar .bhq-right");if(!e||e.querySelector(".bhq-theme"))return;let t=document.createElement("button");t.type="button",t.className="bhq-theme bhq-surface",t.addEventListener("click",()=>i());let n=e.querySelector(".bhq-qual");e.insertBefore(t,n?n.nextSibling:e.firstChild),Iy(t)}function Iy(i){if(!i)return;let e=document.documentElement.dataset.theme==="dark";i.textContent=e?"Light":"Dark",i.title=e?"Switch to light mode":"Switch to dark mode",i.setAttribute("aria-pressed",e?"true":"false"),i.setAttribute("aria-label",i.title)}var Cy=class{constructor(e,t={}){this.root=e,this.opts=t,this.kind="4d",this.isTower=!0,this.loaded=!1,this.visible=!0,this.framesShown=0,this.deskOf=new Map,this.plan={desks:Array.from({length:21},(r,o)=>o)},this.pal={dark:!1},this.sessions=[],this.extras=null,this.keyOf=new Map,this.towerFloors=[],this.focusKey=null,this.pickedId=null,this.viewFloorId=typeof t.towerFloor=="string"?t.towerFloor:null,this._lastSel=null,this._readyFired=!1,this.ready=new Promise(r=>{this.markReady=r}),T_(e,{onReady:()=>{this.loaded=!0,this.canvas=Iu(),this._readyFired||(this._readyFired=!0,this.markReady(!0))},onFrame:()=>{this.visible&&(this.framesShown++,this.canvas=this.canvas||Iu(),this.opts.onFrame&&this.opts.onFrame(this))},onSelectBot:r=>this.selectBot(r),onHoverBot:r=>ai.hover(r),onAssignSeat:(r,o)=>this.assignSeat(r,o)}),ny({onSelectBot:r=>this.selectBot(r),onSelectFloor:r=>this.setTowerFloor(r),onZoom:r=>{L_(r),ai.zoom(r)},onOpenChat:(r,o)=>yR(o),onStartAgent:(r,o)=>vR(o),onClearErrorAgent:(r,o)=>bR(o),onShare:()=>{let r=this.captureShare();if(!r)return;let o=document.createElement("a");o.href=r.toDataURL("image/png"),o.download="office.png",o.click()}}),xR(r=>{this.opts.onQuality&&this.opts.onQuality(r)}),_R(()=>{this.opts.onTheme&&this.opts.onTheme()}),Sy({slot:document.querySelector("#topbar .bhq-right")});let n=document.querySelector("#topbar .bhq-snd"),s=document.querySelector("#topbar .bhq-usage");n&&s&&s.parentElement&&s.parentElement.insertBefore(n,s),this.canvas=Iu(),this.syncLight(),this.setTheme(document.documentElement.dataset.theme==="dark")}selectBot(e){let t=e||null;t!==this.pickedId&&ai.select(!!t),this.pickedId=t,this._followPick=!!t,this.update(this.sessions)}assignSeat(e,t){let n=globalThis.WallpaperFeed;!n||typeof n.assignSeat!="function"||n.assignSeat(e,t)&&(ai.select(!0),this.update(this.sessions))}update(e){this.sessions=Array.isArray(e)?e:[];let t=globalThis.WallpaperFeed,n=t&&typeof t.towerState=="function"?t.towerState(this.sessions,this.extras||{}):{floors:[],bots:{}};this._state=n,this.towerFloors=(n.floors||[]).map(c=>({id:c.id,name:c.name})),this.keyOf=new Map;let s=n.bots||{};for(let c of this.sessions){let h=c.project||c.title||c.id||c.key,u=t&&t.botId?t.botId(h):String(h||"");s[u]||(u=Object.keys(s).find(d=>s[d].name===h)||u),s[u]&&this.keyOf.set(u,c.key)}let r=n.floors||[],o=this.viewFloorId&&r.some(c=>c.id===this.viewFloorId)?this.viewFloorId:null,a=this.pickedId&&s[this.pickedId]?this.pickedId:null;this.pickedId=a,a&&s[a].floor&&s[a].floor!==o&&this._followPick&&(o=s[a].floor),this._followPick=!1,o||(o=r.slice().sort((c,h)=>(h.bots?.length||0)-(c.bots?.length||0))[0]?.id||null),this.viewFloorId=o,this.deskOf=new Map;for(let[c,h]of this.keyOf){let u=s[c];u&&u.floor===o&&u.effective_status==="working"&&this.deskOf.set(h,(u.desk||1)-1)}let l={currentFloor:o,selectedBot:a};A_(n,l);try{ly(n,l)}catch(c){console.error(c)}this._soundStatus(n),a&&a!==this._lastSel&&(this._lastSel=a,N_(a)),a||(this._lastSel=null),this.opts.onFloors&&this.opts.onFloors(this.towerFloors)}_selectedId(e){if(!this.focusKey)return null;for(let[t,n]of this.keyOf)if(n===this.focusKey&&(!e||e[t]))return t;return null}setTowerFloor(e){if(e&&e!==this.viewFloorId){let n=(this._state&&this._state.floors||[]).slice().sort((s,r)=>(Number(s.order)||0)-(Number(r.order)||0)).findIndex(s=>s.id===e);n>=0&&ai.floor(n)}this.viewFloorId=e,this._lastFocus=this.focusKey,this.update(this.sessions)}_soundStatus(e){let t={},n=e&&e.bots||{};for(let[s,r]of Object.entries(n))t[s]=r.effective_status;if(this._lastStatus){let s=new Set;for(let[o,a]of Object.entries(t))this._lastStatus[o]&&this._lastStatus[o]!==a&&s.add(a);let r=["waiting_user","error","done"].find(o=>s.has(o));r&&ai.status(r)}this._lastStatus=t}setVisible(e){this.visible=!!e,I_(this.visible)}setTheme(e){try{C_(!!e)}catch(t){console.error(t)}Iy(document.querySelector(".bhq-theme"))}syncLight(){let e=globalThis.OFFICE_LIGHT||"now",t=Object.prototype.hasOwnProperty.call(Ry,e)?Ry[e]:null;globalThis.bothq&&typeof globalThis.bothq.setTime=="function"&&globalThis.bothq.setTime(t)}captureShare(){try{return U_()}catch(e){return console.error(e),null}}destroy(){try{Ey()}catch(e){console.error(e)}try{Jp()}catch(e){console.error(e)}try{P_()}catch(e){console.error(e)}this.canvas=null}};function yR(i){if(!i||!/^https:\/\//i.test(i))return;let e=typeof globalThis<"u"?globalThis.WallpaperFeed:null;if(e&&typeof e.isPaperclipChatUrl=="function"&&e.isPaperclipChatUrl(i)){MR(i);return}Py(i)}function Py(i){let e=document.createElement("a");e.href=i,e.rel="noopener",e.style.display="none",document.body.append(e),e.click(),e.remove()}async function vR(i){if(i){nm(!0);try{let e=await fetch("/api/paperclip/resume",{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify({agentId:i})}),t=await e.json().catch(()=>({}));(!e.ok||!t.ok)&&console.warn("[office] Start failed:",t&&t.error||`HTTP ${e.status}`)}catch(e){console.warn("[office] Start error:",e)}finally{nm(!1)}}}async function bR(i){if(i){im(!0);try{let e=await fetch("/api/paperclip/clear-error",{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify({agentId:i})}),t=await e.json().catch(()=>({}));(!e.ok||!t.ok)&&console.warn("[office] Clear error failed:",t&&t.error||`HTTP ${e.status}`)}catch(e){console.warn("[office] Clear error:",e)}finally{im(!1)}}}var ps=null;function MR(i){ps||(ps=SR());let e=ps;e.frame.src=i,e.open.href=i,e.root.hidden=!1,e.root.setAttribute("aria-hidden","false");try{e.closeBtn.focus()}catch{}}function Bu(){ps&&(ps.root.hidden=!0,ps.root.setAttribute("aria-hidden","true"),ps.frame.removeAttribute("src"))}function SR(){let i=document.createElement("div");i.className="bhq-pcchat",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Paperclip chat"),i.setAttribute("aria-hidden","true");let e=document.createElement("div");e.className="bhq-pcchat-sheet bhq-surface";let t=document.createElement("div");t.className="bhq-pcchat-head";let n=document.createElement("b");n.className="bhq-pcchat-title",n.textContent="Paperclip chat";let s=document.createElement("a");s.className="bhq-pcchat-open",s.textContent="Open full page",s.rel="noopener",s.addEventListener("click",l=>{l.preventDefault();let c=s.getAttribute("href");Bu(),c&&Py(c)});let r=document.createElement("button");r.className="bhq-pcchat-close",r.type="button",r.setAttribute("aria-label","Close chat"),r.textContent="\xD7",r.addEventListener("click",()=>Bu()),t.append(n,s,r);let o=document.createElement("p");o.className="bhq-pcchat-note",o.textContent="Uses your Paperclip board login. If the panel stays blank, open the full page.";let a=document.createElement("iframe");return a.className="bhq-pcchat-frame",a.title="Paperclip agent chat",a.setAttribute("referrerpolicy","no-referrer-when-downgrade"),a.setAttribute("allow","clipboard-read; clipboard-write"),e.append(t,o,a),i.append(e),i.addEventListener("click",l=>{l.target===i&&Bu()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&ps&&!ps.root.hidden&&Bu()}),document.body.append(i),{root:i,frame:a,open:s,closeBtn:r}}export{Cy as Office4D};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

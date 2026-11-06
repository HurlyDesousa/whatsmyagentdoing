var $0=0,pd=1,K0=2;var Cr=1,Z0=2,Go=3,ci=0,Sn=1,hn=2,hi=0,Wo=1,md=2,gd=3,Ml=4,J0=5;var Ir=100,j0=101,Q0=102,eg=103,tg=104,ng=200,ig=201,sg=202,rg=203,xd=204,_d=205,og=206,ag=207,lg=208,cg=209,hg=210,ug=211,fg=212,dg=213,pg=214,Xc=0,Yc=1,$c=2,So=3,Kc=4,Zc=5,Jc=6,jc=7,wh=0,mg=1,gg=2,Ai=0,Sl=1,wl=2,El=3,Pr=4,Tl=5,Al=6,Rl=7,Jf="attached",xg="detached",yd=300,Gs=301,Lr=302,Eh=303,Th=304,Cl=306,ai=1e3,ri=1001,wo=1002,nn=1003,Ah=1004;var Nr=1005;var $t=1006,qo=1007;var Jn=1008;var Vn=1009,vd=1010,bd=1011,Xo=1012,Rh=1013,Ri=1014,jn=1015,un=1016,Ch=1017,Ih=1018,Yo=1020,Md=35902,Sd=35899,wd=1021,Ed=1022,Qn=1023,Vi=1026,Ws=1027,Ph=1028,Lh=1029,qs=1030,Nh=1031;var Dh=1033,Il=33776,Pl=33777,Ll=33778,Nl=33779,Fh=35840,Uh=35841,Oh=35842,Bh=35843,kh=36196,zh=37492,Hh=37496,Vh=37488,Gh=37489,Dl=37490,Wh=37491,qh=37808,Xh=37809,Yh=37810,$h=37811,Kh=37812,Zh=37813,Jh=37814,jh=37815,Qh=37816,eu=37817,tu=37818,nu=37819,iu=37820,su=37821,ru=36492,ou=36494,au=36495,lu=36283,cu=36284,Fl=36285,hu=36286;var gr=2300,xr=2301,Gc=2302,jf=2303,Qf=2400,ed=2401,td=2402,_g=2500;var Td=0,Ul=1,$o=2,yg=3200;var Ol=0,vg=1,xs="",dt="srgb",Mn="srgb-linear",Ha="linear",Tt="srgb";var Wc=7680;var bg=519,Mg=512,Sg=513,wg=514,uu=515,Eg=516,Tg=517,fu=518,Ag=519,Ad=35044;var Rd="300 es",Ei=2e3,Eo=2001;function Fv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rg(){let i=To("canvas");return i.style.display="block",i}var t0={},Ao=null;function Va(...i){let e="THREE."+i.shift();Ao?Ao("log",e,...i):console.log(e,...i)}function Cg(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Fe(...i){i=Cg(i);let e="THREE."+i.shift();if(Ao)Ao("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=Cg(i);let e="THREE."+i.shift();if(Ao)Ao("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function mr(...i){let e=i.join(" ");e in t0||(t0[e]=!0,Fe(...i))}function Ig(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Pg={[Xc]:Yc,[$c]:Jc,[Kc]:jc,[So]:Zc,[Yc]:Xc,[Jc]:$c,[jc]:Kc,[Zc]:So},Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],n0=1234567,Oa=Math.PI/180,_r=180/Math.PI;function oi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[n&255]+Rn[n>>8&255]+Rn[n>>16&255]+Rn[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function Cd(i,e){return(i%e+e)%e}function Ov(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bv(i,e,t){return i!==e?(t-i)/(e-i):0}function Ba(i,e,t){return(1-t)*i+t*e}function kv(i,e,t,n){return Ba(i,e,1-Math.exp(-t*n))}function zv(i,e=1){return e-Math.abs(Cd(i,e*2)-e)}function Hv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Wv(i,e){return i+Math.random()*(e-i)}function qv(i){return i*(.5-Math.random())}function Xv(i){i!==void 0&&(n0=i);let e=n0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yv(i){return i*Oa}function $v(i){return i*_r}function Kv(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Zv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jv(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*p,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*p,a*l);break;case"ZYZ":i.set(c*p,c*d,a*h,a*l);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ko={DEG2RAD:Oa,RAD2DEG:_r,generateUUID:oi,clamp:gt,euclideanModulo:Cd,mapLinear:Ov,inverseLerp:Bv,lerp:Ba,damp:kv,pingpong:zv,smoothstep:Hv,smootherstep:Vv,randInt:Gv,randFloat:Wv,randFloatSpread:qv,seededRandom:Xv,degToRad:Yv,radToDeg:$v,isPowerOfTwo:Kv,ceilPowerOfTwo:Zv,floorPowerOfTwo:Jv,setQuaternionFromProperEuler:jv,normalize:Ft,denormalize:wi},Fd=class Fd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fd.prototype.isVector2=!0;var Q=Fd,In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||c!==f||l!==d||h!==p){let m=c*f+l*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+x*a}else{c=c*g+f*a,l=l*g+d*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+c*d-l*f,e[t+1]=c*p+h*f+l*u-a*d,e[t+2]=l*p+h*d+a*f-c*u,e[t+3]=h*p-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),p=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u+f*d*p;break;case"YZX":this._x=f*h*u+l*d*p,this._y=l*d*u+f*h*p,this._z=l*h*p-f*d*u,this._w=l*h*u-f*d*p;break;case"XZY":this._x=f*h*u-l*d*p,this._y=l*d*u-f*h*p,this._z=l*h*p+f*d*u,this._w=l*h*u+f*d*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Ud=class Ud{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(i0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(i0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sf.copy(this).projectOnVector(e),this.sub(Sf)}reflect(e){return this.sub(Sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ud.prototype.isVector3=!0;var I=Ud,Sf=new I,i0=new In,Od=class Od{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],w=s[4],_=s[7],v=s[2],M=s[5],T=s[8];return r[0]=o*x+a*y+c*v,r[3]=o*m+a*w+c*M,r[6]=o*g+a*_+c*T,r[1]=l*x+h*y+u*v,r[4]=l*m+h*w+u*M,r[7]=l*g+h*_+u*T,r[2]=f*x+d*y+p*v,r[5]=f*m+d*w+p*M,r[8]=f*g+d*_+p*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,p=t*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return mr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wf.makeScale(e,t)),this}rotate(e){return mr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wf.makeRotation(-e)),this}translate(e,t){return mr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Od.prototype.isMatrix3=!0;var ot=Od,wf=new ot,s0=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),r0=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qv(){let i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Tt&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(s.r=Mo(s.r),s.g=Mo(s.g),s.b=Mo(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xs?Ha:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:e,whitePoint:n,transfer:Ha,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dt},outputColorSpaceConfig:{drawingBufferColorSpace:dt}},[dt]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:s0,fromXYZ:r0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dt}}}),i}var ft=Qv();function hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var io,Qc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{io===void 0&&(io=To("canvas")),io.width=e.width,io.height=e.height;let s=io.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=io}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=To("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=hs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hs(t[n]/255)*255):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},eb=0,Ro=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ef(s[o].image)):r.push(Ef(s[o]))}else r=Ef(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ef(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var tb=0,Tf=new I,fn=class i extends Gi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ri,s=ri,r=$t,o=Jn,a=Qn,c=Vn,l=i.DEFAULT_ANISOTROPY,h=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=oi(),this.name="",this.source=new Ro(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tf).x}get height(){return this.source.getSize(Tf).y}get depth(){return this.source.getSize(Tf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ai:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ai:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=yd;fn.DEFAULT_ANISOTROPY=1;var Bd=class Bd{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,_=(d+1)/2,v=(g+1)/2,M=(h+f)/4,T=(u+x)/4,b=(p+m)/4;return w>_&&w>v?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=T/n):_>v?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=M/s,r=b/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=T/r,s=b/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bd.prototype.isVector4=!0;var wt=Bd,eh=class extends Gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new fn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:$t,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ro(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends eh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ga=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends fn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Sh=class Sh{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,p,x,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sh().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/so.setFromMatrixColumn(e,0).length(),r=1/so.setFromMatrixColumn(e,1).length(),o=1/so.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+p*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=p+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*u,p=l*h,x=l*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=c*h,t[4]=p*l-d,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=d*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*c,d=o*l,p=a*c,x=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nb,e,ib)}lookAt(e,t,n){let s=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ps.crossVectors(n,Yn),Ps.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ps.crossVectors(n,Yn)),Ps.normalize(),dc.crossVectors(Yn,Ps),s[0]=Ps.x,s[4]=dc.x,s[8]=Yn.x,s[1]=Ps.y,s[5]=dc.y,s[9]=Yn.y,s[2]=Ps.z,s[6]=dc.z,s[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],w=n[7],_=n[11],v=n[15],M=s[0],T=s[4],b=s[8],E=s[12],R=s[1],P=s[5],N=s[9],k=s[13],D=s[2],B=s[6],X=s[10],$=s[14],oe=s[3],Z=s[7],te=s[11],z=s[15];return r[0]=o*M+a*R+c*D+l*oe,r[4]=o*T+a*P+c*B+l*Z,r[8]=o*b+a*N+c*X+l*te,r[12]=o*E+a*k+c*$+l*z,r[1]=h*M+u*R+f*D+d*oe,r[5]=h*T+u*P+f*B+d*Z,r[9]=h*b+u*N+f*X+d*te,r[13]=h*E+u*k+f*$+d*z,r[2]=p*M+x*R+m*D+g*oe,r[6]=p*T+x*P+m*B+g*Z,r[10]=p*b+x*N+m*X+g*te,r[14]=p*E+x*k+m*$+g*z,r[3]=y*M+w*R+_*D+v*oe,r[7]=y*T+w*P+_*B+v*Z,r[11]=y*b+w*N+_*X+v*te,r[15]=y*E+w*k+_*$+v*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=c*d-l*f,w=a*d-l*u,_=a*f-c*u,v=o*d-l*h,M=o*f-c*h,T=o*u-a*h;return t*(x*y-m*w+g*_)-n*(p*y-m*v+g*M)+s*(p*w-x*v+g*T)-r*(p*_-x*M+m*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-n*o,w=t*c-s*o,_=t*l-r*o,v=n*c-s*a,M=n*l-r*a,T=s*l-r*c,b=h*x-u*p,E=h*m-f*p,R=h*g-d*p,P=u*m-f*x,N=u*g-d*x,k=f*g-d*m,D=y*k-w*N+_*P+v*R-M*E+T*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return e[0]=(a*k-c*N+l*P)*B,e[1]=(s*N-n*k-r*P)*B,e[2]=(x*T-m*M+g*v)*B,e[3]=(f*M-u*T-d*v)*B,e[4]=(c*R-o*k-l*E)*B,e[5]=(t*k-s*R+r*E)*B,e[6]=(m*_-p*T-g*w)*B,e[7]=(h*T-f*_+d*w)*B,e[8]=(o*N-a*R+l*b)*B,e[9]=(n*R-t*N-r*b)*B,e[10]=(p*M-x*_+g*y)*B,e[11]=(u*_-h*M-d*y)*B,e[12]=(a*E-o*P-c*b)*B,e[13]=(t*P-n*E+s*b)*B,e[14]=(x*w-p*v-m*y)*B,e[15]=(h*v-u*w+f*y)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=c*l,w=c*h,_=c*u,v=n.x,M=n.y,T=n.z;return s[0]=(1-(x+g))*v,s[1]=(d+_)*v,s[2]=(p-w)*v,s[3]=0,s[4]=(d-_)*M,s[5]=(1-(f+g))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(p+w)*T,s[9]=(m-y)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=so.set(s[0],s[1],s[2]).length(),a=so.set(s[4],s[5],s[6]).length(),c=so.set(s[8],s[9],s[10]).length();r<0&&(o=-o),bi.copy(this);let l=1/o,h=1/a,u=1/c;return bi.elements[0]*=l,bi.elements[1]*=l,bi.elements[2]*=l,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,t.setFromRotationMatrix(bi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=Ei,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(c)p=r/(o-r),x=o*r/(o-r);else if(a===Ei)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Eo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ei,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(c)p=1/(o-r),x=o/(o-r);else if(a===Ei)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Eo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Sh.prototype.isMatrix4=!0;var Qe=Sh,so=new I,bi=new Qe,nb=new I(0,0,0),ib=new I(1,1,1),Ps=new I,dc=new I,Yn=new I,o0=new Qe,a0=new In,Wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return o0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(o0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return a0.setFromEuler(this),this.setFromQuaternion(a0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var Co=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},sb=0,l0=new I,ro=new In,is=new Qe,pc=new I,Ea=new I,rb=new I,ob=new In,c0=new I(1,0,0),h0=new I(0,1,0),u0=new I(0,0,1),f0={type:"added"},ab={type:"removed"},oo={type:"childadded",child:null},Af={type:"childremoved",child:null},At=class i extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sb++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Wi,n=new In,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qe},normalMatrix:{value:new ot}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(c0,e)}rotateY(e){return this.rotateOnAxis(h0,e)}rotateZ(e){return this.rotateOnAxis(u0,e)}translateOnAxis(e,t){return l0.copy(e).applyQuaternion(this.quaternion),this.position.add(l0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(c0,e)}translateY(e){return this.translateOnAxis(h0,e)}translateZ(e){return this.translateOnAxis(u0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pc.copy(e):pc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Ea,pc,this.up):is.lookAt(pc,Ea,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),ro.setFromRotationMatrix(is),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(f0),oo.child=e,this.dispatchEvent(oo),oo.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ab),Af.child=e,this.dispatchEvent(Af),Af.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),is.multiply(e.parent.matrixWorld)),e.applyMatrix4(is),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(f0),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,rb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new I(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ht=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},lb={type:"move"},Io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(l,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;l.inputState.pinching&&f>d+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ht;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Rf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=Cd(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Rf(o,r,e+1/3),this.g=Rf(o,r,e),this.b=Rf(o,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=dt){function n(r){r!==void 0&&parseFloat(r)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){let n=Lg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Mo(e.r),this.g=Mo(e.g),this.b=Mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return ft.workingToColorSpace(Cn.copy(this),e),Math.round(gt(Cn.r*255,0,255))*65536+Math.round(gt(Cn.g*255,0,255))*256+Math.round(gt(Cn.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(Cn.copy(this),t);let n=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=dt){ft.workingToColorSpace(Cn.copy(this),e);let t=Cn.r,n=Cn.g,s=Cn.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(mc);let n=Ba(Ls.h,mc.h,t),s=Ba(Ls.s,mc.s,t),r=Ba(Ls.l,mc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new pe;pe.NAMES=Lg;var yr=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Mi=new I,ss=new I,Cf=new I,rs=new I,ao=new I,lo=new I,d0=new I,If=new I,Pf=new I,Lf=new I,Nf=new wt,Df=new wt,Ff=new wt,cs=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Mi.subVectors(e,t),s.cross(Mi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Mi.subVectors(s,t),ss.subVectors(n,t),Cf.subVectors(e,t);let o=Mi.dot(Mi),a=Mi.dot(ss),c=Mi.dot(Cf),l=ss.dot(ss),h=ss.dot(Cf),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,p=(o*h-a*c)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,rs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rs.x),c.addScaledVector(o,rs.y),c.addScaledVector(a,rs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Nf.setScalar(0),Df.setScalar(0),Ff.setScalar(0),Nf.fromBufferAttribute(e,t),Df.fromBufferAttribute(e,n),Ff.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Nf,r.x),o.addScaledVector(Df,r.y),o.addScaledVector(Ff,r.z),o}static isFrontFacing(e,t,n,s){return Mi.subVectors(n,t),ss.subVectors(e,t),Mi.cross(ss).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Mi.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ao.subVectors(s,n),lo.subVectors(r,n),If.subVectors(e,n);let c=ao.dot(If),l=lo.dot(If);if(c<=0&&l<=0)return t.copy(n);Pf.subVectors(e,s);let h=ao.dot(Pf),u=lo.dot(Pf);if(h>=0&&u<=h)return t.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ao,o);Lf.subVectors(e,r);let d=ao.dot(Lf),p=lo.dot(Lf);if(p>=0&&d<=p)return t.copy(r);let x=d*l-c*p;if(x<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(lo,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return d0.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(d0,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(ao,o).addScaledVector(lo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gc.copy(n.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),xc.subVectors(this.max,Ta),co.subVectors(e.a,Ta),ho.subVectors(e.b,Ta),uo.subVectors(e.c,Ta),Ns.subVectors(ho,co),Ds.subVectors(uo,ho),ur.subVectors(co,uo);let t=[0,-Ns.z,Ns.y,0,-Ds.z,Ds.y,0,-ur.z,ur.y,Ns.z,0,-Ns.x,Ds.z,0,-Ds.x,ur.z,0,-ur.x,-Ns.y,Ns.x,0,-Ds.y,Ds.x,0,-ur.y,ur.x,0];return!Uf(t,co,ho,uo,xc)||(t=[1,0,0,0,1,0,0,0,1],!Uf(t,co,ho,uo,xc))?!1:(_c.crossVectors(Ns,Ds),t=[_c.x,_c.y,_c.z],Uf(t,co,ho,uo,xc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},os=[new I,new I,new I,new I,new I,new I,new I,new I],Si=new I,gc=new sn,co=new I,ho=new I,uo=new I,Ns=new I,Ds=new I,ur=new I,Ta=new I,xc=new I,_c=new I,fr=new I;function Uf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){fr.fromArray(i,r);let a=s.x*Math.abs(fr.x)+s.y*Math.abs(fr.y)+s.z*Math.abs(fr.z),c=e.dot(fr),l=t.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var cn=new I,yc=new Q,cb=0,Yt=class extends Gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ad,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yc.fromBufferAttribute(this,t),yc.applyMatrix3(e),this.setXY(t,yc.x,yc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Wa=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var qa=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var rt=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},hb=new sn,Aa=new I,Of=new I,zn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hb.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);let t=Aa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Aa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(Of)),this.expandByPoint(Aa.copy(e.center).sub(Of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ub=0,si=new Qe,Bf=new At,fo=new I,$n=new sn,Ra=new sn,xn=new I,Rt=class i extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fv(e)?qa:Wa)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return Bf.lookAt(e),Bf.updateMatrix(),this.applyMatrix4(Bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ra.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors($n.min,Ra.min),$n.expandByPoint(xn),xn.addVectors($n.max,Ra.max),$n.expandByPoint(xn)):($n.expandByPoint(Ra.min),$n.expandByPoint(Ra.max))}$n.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xn.fromBufferAttribute(a,l),c&&(fo.fromBufferAttribute(e,l),xn.add(fo)),s=Math.max(s,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Yt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let b=0;b<n.count;b++)a[b]=new I,c[b]=new I;let l=new I,h=new I,u=new I,f=new Q,d=new Q,p=new Q,x=new I,m=new I;function g(b,E,R){l.fromBufferAttribute(n,b),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(l),u.sub(l),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[b].add(x),a[E].add(x),a[R].add(x),c[b].add(m),c[E].add(m),c[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let b=0,E=y.length;b<E;++b){let R=y[b],P=R.start,N=R.count;for(let k=P,D=P+N;k<D;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let w=new I,_=new I,v=new I,M=new I;function T(b){v.fromBufferAttribute(s,b),M.copy(v);let E=a[b];w.copy(E),w.sub(v.multiplyScalar(v.dot(E))).normalize(),_.crossVectors(M,E);let P=_.dot(c[b])<0?-1:1;o.setXYZW(b,w.x,w.y,w.z,P)}for(let b=0,E=y.length;b<E;++b){let R=y[b],P=R.start,N=R.count;for(let k=P,D=P+N;k<D;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let g=0;g<h;g++)f[p++]=l[d++]}return new Yt(f,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ad,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},On=new I,Os=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},kf=new I,fb=new I,db=new ot,Kn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=kf.subVectors(n,t).cross(fb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(kf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||db.getNormalMatrix(e),s=this.coplanarPoint(kf).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},pb=0,Pn=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=Wo,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=_d,this.blendEquation=Ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wc,this.stencilZFail=Wc,this.stencilZPass=Wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Q().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Po=class extends Pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},po,Ca=new I,mo=new I,go=new I,xo=new Q,Ia=new Q,Ng=new Qe,vc=new I,Pa=new I,bc=new I,p0=new Q,zf=new Q,m0=new Q,Xa=class extends At{constructor(e=new Po){if(super(),this.isSprite=!0,this.type="Sprite",po===void 0){po=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vr(t,5);po.setIndex([0,1,2,0,2,3]),po.setAttribute("position",new Os(n,3,0,!1)),po.setAttribute("uv",new Os(n,2,3,!1))}this.geometry=po,this.material=e,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),mo.setFromMatrixScale(this.matrixWorld),Ng.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),go.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&mo.multiplyScalar(-go.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Mc(vc.set(-.5,-.5,0),go,o,mo,s,r),Mc(Pa.set(.5,-.5,0),go,o,mo,s,r),Mc(bc.set(.5,.5,0),go,o,mo,s,r),p0.set(0,0),zf.set(1,0),m0.set(1,1);let a=e.ray.intersectTriangle(vc,Pa,bc,!1,Ca);if(a===null&&(Mc(Pa.set(-.5,.5,0),go,o,mo,s,r),zf.set(0,1),a=e.ray.intersectTriangle(vc,bc,Pa,!1,Ca),a===null))return;let c=e.ray.origin.distanceTo(Ca);c<e.near||c>e.far||t.push({distance:c,point:Ca.clone(),uv:cs.getInterpolation(Ca,vc,Pa,bc,p0,zf,m0,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Mc(i,e,t,n,s,r){xo.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ia.x=r*xo.x-s*xo.y,Ia.y=s*xo.x+r*xo.y):Ia.copy(xo),i.copy(e),i.x+=Ia.x,i.y+=Ia.y,i.applyMatrix4(Ng)}var as=new I,Hf=new I,Sc=new I,wc=new I,Bs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Hf.copy(e).add(t).multiplyScalar(.5),Sc.copy(t).sub(e).normalize(),wc.copy(this.origin).sub(Hf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Sc),a=wc.dot(this.direction),c=-wc.dot(Sc),l=wc.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*c-a,f=o*a-c,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=p?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hf).addScaledVector(Sc,f),d}intersectSphere(e,t){if(e.radius<0)return null;as.subVectors(e.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,_=Math.abs(c),v=Math.abs(l),M=Math.abs(h),T,b,E,R,P,N,k,D,B,X,$,oe;if(_>=v&&_>=M?(E=c,N=u,B=p,oe=g,c>=0?(T=l,b=h,R=f,P=d,k=x,D=m,X=y,$=w):(T=h,b=l,R=d,P=f,k=m,D=x,X=w,$=y)):v>=M?(E=l,N=f,B=x,oe=y,l>=0?(T=h,b=c,R=d,P=u,k=m,D=p,X=w,$=g):(T=c,b=h,R=u,P=d,k=p,D=m,X=g,$=w)):(E=h,N=d,B=m,oe=w,h>=0?(T=c,b=l,R=u,P=f,k=p,D=x,X=g,$=y):(T=l,b=c,R=f,P=u,k=x,D=p,X=y,$=g)),E===0)return null;let Z=T/E,te=b/E,z=1/E,ae=R-Z*N,ce=P-te*N,He=k-Z*B,Ve=D-te*B,tt=X-Z*oe,K=$-te*oe,ee=tt*Ve-K*He,ge=ae*K-ce*tt,ke=He*ce-Ve*ae;if(s){if(ee<0||ge<0||ke<0)return null}else if((ee<0||ge<0||ke<0)&&(ee>0||ge>0||ke>0))return null;let ye=ee+ge+ke;if(ye===0)return null;let Ke=z*(ee*N+ge*B+ke*oe);return(ye>0?Ke<0:Ke>0)?null:this.at(Ke/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},g0=new Qe,dr=new Bs,Ec=new zn,x0=new I,Tc=new I,Ac=new I,Rc=new I,Vf=new I,Cc=new I,_0=new I,Ic=new I,Ie=class extends At{constructor(e=new Rt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Cc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Vf.fromBufferAttribute(u,e),o?Cc.addScaledVector(Vf,h):Cc.addScaledVector(Vf.sub(t),h))}t.add(Cc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ec.copy(n.boundingSphere),Ec.applyMatrix4(r),dr.copy(e.ray).recast(e.near),!(Ec.containsPoint(dr.origin)===!1&&(dr.intersectSphere(Ec,x0)===null||dr.origin.distanceToSquared(x0)>(e.far-e.near)**2))&&(g0.copy(r).invert(),dr.copy(e.ray).applyMatrix4(g0),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,v=w;_<v;_+=3){let M=a.getX(_),T=a.getX(_+1),b=a.getX(_+2);s=Pc(this,g,e,n,l,h,u,M,T,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);s=Pc(this,o,e,n,l,h,u,y,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,v=w;_<v;_+=3){let M=_,T=_+1,b=_+2;s=Pc(this,g,e,n,l,h,u,M,T,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,_=m+2;s=Pc(this,o,e,n,l,h,u,y,w,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function mb(i,e,t,n,s,r,o,a){let c;if(e.side===Sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ci,a),c===null)return null;Ic.copy(a),Ic.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ic);return l<t.near||l>t.far?null:{distance:l,point:Ic.clone(),object:i}}function Pc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Tc),i.getVertexPosition(c,Ac),i.getVertexPosition(l,Rc);let h=mb(i,e,t,n,Tc,Ac,Rc,_0);if(h){let u=new I;cs.getBarycoord(_0,Tc,Ac,Rc,u),s&&(h.uv=cs.getInterpolatedAttribute(s,a,c,l,u,new Q)),r&&(h.uv1=cs.getInterpolatedAttribute(r,a,c,l,u,new Q)),o&&(h.normal=cs.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new I,materialIndex:0};cs.getNormal(Tc,Ac,Rc,f.normal),h.face=f,h.barycoord=u}return h}var La=new wt,y0=new wt,v0=new wt,gb=new wt,b0=new Qe,Lc=new I,Gf=new zn,M0=new Qe,Wf=new Bs,Ya=class extends Ie{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jf,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lc),this.boundingBox.expandByPoint(Lc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new zn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Lc),this.boundingSphere.expandByPoint(Lc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gf.copy(this.boundingSphere),Gf.applyMatrix4(s),e.ray.intersectsSphere(Gf)!==!1&&(M0.copy(s).invert(),Wf.copy(e.ray).applyMatrix4(M0),!(this.boundingBox!==null&&Wf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;y0.fromBufferAttribute(s.attributes.skinIndex,e),v0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(La.copy(t),t.set(0,0,0,0)):(La.set(...t,1),t.set(0,0,0)),La.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=v0.getComponent(r);if(o!==0){let a=y0.getComponent(r);b0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(gb.copy(La).applyMatrix4(b0),o)}}return t.isVector4&&(t.w=La.w),t.applyMatrix4(this.bindMatrixInverse)}},Lo=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},No=class extends fn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=nn,h=nn,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},S0=new Qe,xb=new Qe,$a=class i{constructor(e=[],t=[]){this.uuid=oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:xb;S0.multiplyMatrices(a,t[r]),S0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new No(t,e,e,Qn,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Fe("Skeleton: No bone found with UUID:",r),o=new Lo),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},us=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},_o=new Qe,w0=new Qe,Nc=[],E0=new sn,_b=new Qe,Na=new Ie,Da=new zn,br=class extends Ie{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_b)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_o),E0.copy(e.boundingBox).applyMatrix4(_o),this.boundingBox.union(E0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,_o),Da.copy(e.boundingSphere).applyMatrix4(_o),this.boundingSphere.union(Da)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Na.geometry=this.geometry,Na.material=this.material,Na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Da.copy(this.boundingSphere),Da.applyMatrix4(n),e.ray.intersectsSphere(Da)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,_o),w0.multiplyMatrices(n,_o),Na.matrixWorld=w0,Na.raycast(e,Nc);for(let o=0,a=Nc.length;o<a;o++){let c=Nc[o];c.instanceId=r,c.object=this,t.push(c)}Nc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new No(new Float32Array(s*this.count),s,this.count,Ph,jn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pr=new zn,yb=new Q(.5,.5),Dc=new I,Do=class{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],w=r[13],_=r[14],v=r[15];if(s[0].setComponents(l-o,d-h,g-p,v-y).normalize(),s[1].setComponents(l+o,d+h,g+p,v+y).normalize(),s[2].setComponents(l+a,d+u,g+x,v+w).normalize(),s[3].setComponents(l-a,d-u,g-x,v-w).normalize(),n)s[4].setComponents(c,f,m,_).normalize(),s[5].setComponents(l-c,d-f,g-m,v-_).normalize();else if(s[4].setComponents(l-c,d-f,g-m,v-_).normalize(),t===Ei)s[5].setComponents(l+c,d+f,g+m,v+_).normalize();else if(t===Eo)s[5].setComponents(c,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){pr.center.set(0,0,0);let t=yb.distanceTo(e.center);return pr.radius=.7071067811865476+t,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Dc.x=s.normal.x>0?e.max.x:e.min.x,Dc.y=s.normal.y>0?e.max.y:e.min.y,Dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Fo=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},nh=new I,ih=new I,T0=new Qe,Fa=new Bs,Fc=new zn,qf=new I,A0=new I,Mr=class extends At{constructor(e=new Rt,t=new Fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)nh.fromBufferAttribute(t,s-1),ih.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=nh.distanceTo(ih);e.setAttribute("lineDistance",new rt(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fc.copy(n.boundingSphere),Fc.applyMatrix4(s),Fc.radius+=r,e.ray.intersectsSphere(Fc)===!1)return;T0.copy(s).invert(),Fa.copy(e.ray).applyMatrix4(T0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=l){let g=h.getX(x),y=h.getX(x+1),w=Uc(this,e,Fa,c,g,y,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=Uc(this,e,Fa,c,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=l){let g=Uc(this,e,Fa,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=Uc(this,e,Fa,c,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(nh.fromBufferAttribute(a,s),ih.fromBufferAttribute(a,r),t.distanceSqToSegment(nh,ih,qf,A0)>n)return;qf.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(qf);if(!(l<e.near||l>e.far))return{distance:l,point:A0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var R0=new I,C0=new I,Ka=class extends Mr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)R0.fromBufferAttribute(t,s),C0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+R0.distanceTo(C0);e.setAttribute("lineDistance",new rt(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Za=class extends Mr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Uo=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},I0=new Qe,nd=new Bs,Oc=new zn,Bc=new I,Ja=class extends At{constructor(e=new Rt,t=new Uo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oc.copy(n.boundingSphere),Oc.applyMatrix4(s),Oc.radius+=r,e.ray.intersectsSphere(Oc)===!1)return;I0.copy(s).invert(),nd.copy(e.ray).applyMatrix4(I0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=l.getX(p);Bc.fromBufferAttribute(u,m),P0(Bc,m,c,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)Bc.fromBufferAttribute(u,p),P0(Bc,p,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function P0(i,e,t,n,s,r,o){let a=nd.distanceSqToPoint(i);if(a<t){let c=new I;nd.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ja=class extends fn{constructor(e=[],t=Gs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ti=class extends fn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ks=class extends fn{constructor(e,t,n=Ri,s,r,o,a=nn,c=nn,l,h=Vi,u=1){if(h!==Vi&&h!==Ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ro(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},sh=class extends ks{constructor(e,t=Ri,n=Gs,s,r,o=nn,a=nn,c,l=Vi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qa=class extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kt=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(h,3)),this.setAttribute("uv",new rt(u,2));function p(x,m,g,y,w,_,v,M,T,b,E){let R=_/T,P=v/b,N=_/2,k=v/2,D=M/2,B=T+1,X=b+1,$=0,oe=0,Z=new I;for(let te=0;te<X;te++){let z=te*P-k;for(let ae=0;ae<B;ae++){let ce=ae*R-N;Z[x]=ce*y,Z[m]=z*w,Z[g]=D,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=M>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ae/T),u.push(1-te/b),$+=1}}for(let te=0;te<b;te++)for(let z=0;z<T;z++){let ae=f+z+B*te,ce=f+z+B*(te+1),He=f+(z+1)+B*(te+1),Ve=f+(z+1)+B*te;c.push(ae,ce,Ve),c.push(ce,He,Ve),oe+=6}a.addGroup(d,oe,E),d+=oe,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},el=class i extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+r,x=s+1,m=new I,g=new I;for(let y=0;y<=p;y++){let w=0,_=0,v=0,M=0;if(y<=n){let E=y/n,R=E*Math.PI/2;_=-h-e*Math.cos(R),v=e*Math.sin(R),M=-e*Math.cos(R),w=E*u}else if(y<=n+r){let E=(y-n)/r;_=-h+E*t,v=e,M=0,w=u+E*f}else{let E=(y-n-r)/n,R=E*Math.PI/2;_=h+e*Math.sin(R),v=e*Math.cos(R),M=e*Math.sin(R),w=u+f+E*u}let T=Math.max(0,Math.min(1,w/d)),b=0;y===0?b=.5/s:y===p&&(b=-.5/s);for(let E=0;E<=s;E++){let R=E/s,P=R*Math.PI*2,N=Math.sin(P),k=Math.cos(P);g.x=-v*k,g.y=_,g.z=v*N,a.push(g.x,g.y,g.z),m.set(-v*k,M,v*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+b,T)}if(y>0){let E=(y-1)*x;for(let R=0;R<s;R++){let P=E+R,N=E+R+1,k=y*x+R,D=y*x+R+1;o.push(P,N,k),o.push(N,D,k)}}}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},tl=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new I,h=new Q;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bn=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new rt(u,3)),this.setAttribute("normal",new rt(f,3)),this.setAttribute("uv",new rt(d,2));function y(){let _=new I,v=new I,M=0,T=(t-e)/n;for(let b=0;b<=r;b++){let E=[],R=b/r,P=R*(t-e)+e;for(let N=0;N<=s;N++){let k=N/s,D=k*c+a,B=Math.sin(D),X=Math.cos(D);v.x=P*B,v.y=-R*n+m,v.z=P*X,u.push(v.x,v.y,v.z),_.set(B,T,X).normalize(),f.push(_.x,_.y,_.z),d.push(k,1-R),E.push(p++)}x.push(E)}for(let b=0;b<s;b++)for(let E=0;E<r;E++){let R=x[E][b],P=x[E+1][b],N=x[E+1][b+1],k=x[E][b+1];(e>0||E!==0)&&(h.push(R,P,k),M+=3),(t>0||E!==r-1)&&(h.push(P,N,k),M+=3)}l.addGroup(g,M,0),g+=M}function w(_){let v=p,M=new Q,T=new I,b=0,E=_===!0?e:t,R=_===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let N=0;N<=s;N++){let D=N/s*c+a,B=Math.cos(D),X=Math.sin(D);T.x=E*X,T.y=m*R,T.z=E*B,u.push(T.x,T.y,T.z),f.push(0,R,0),M.x=B*.5+.5,M.y=X*.5*R+.5,d.push(M.x,M.y),p++}for(let N=0;N<s;N++){let k=v+N,D=P+N;_===!0?h.push(D,D+1,k):h.push(D+1,D,k),b+=3}l.addGroup(g,b,_===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var rh=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(r.slice(),3)),this.setAttribute("uv",new rt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new I,_=new I,v=new I;for(let M=0;M<t.length;M+=3)d(t[M+0],w),d(t[M+1],_),d(t[M+2],v),c(w,_,v,y)}function c(y,w,_,v){let M=v+1,T=[];for(let b=0;b<=M;b++){T[b]=[];let E=y.clone().lerp(_,b/M),R=w.clone().lerp(_,b/M),P=M-b;for(let N=0;N<=P;N++)N===0&&b===M?T[b][N]=E:T[b][N]=E.clone().lerp(R,N/P)}for(let b=0;b<M;b++)for(let E=0;E<2*(M-b)-1;E++){let R=Math.floor(E/2);E%2===0?(f(T[b][R+1]),f(T[b+1][R]),f(T[b][R])):(f(T[b][R+1]),f(T[b+1][R+1]),f(T[b+1][R]))}}function l(y){let w=new I;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(y),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let y=new I;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let _=m(y)/2/Math.PI+.5,v=g(y)/Math.PI+.5;o.push(_,1-v)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let w=o[y+0],_=o[y+2],v=o[y+4],M=Math.max(w,_,v),T=Math.min(w,_,v);M>.9&&T<.1&&(w<.2&&(o[y+0]+=1),_<.2&&(o[y+2]+=1),v<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,w){let _=y*3;w.x=e[_+0],w.y=e[_+1],w.z=e[_+2]}function p(){let y=new I,w=new I,_=new I,v=new I,M=new Q,T=new Q,b=new Q;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),M.set(o[R+0],o[R+1]),T.set(o[R+2],o[R+3]),b.set(o[R+4],o[R+5]),v.copy(y).add(w).add(_).divideScalar(3);let P=m(v);x(M,R+0,y,P),x(T,R+2,w,P),x(b,R+4,_,P)}}function x(y,w,_,v){v<0&&y.x===1&&(o[w]=y.x-1),_.x===0&&_.z===0&&(o[w]=v/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Fe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Q:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,c=new Qe;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(gt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(gt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Oo=class extends Zn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Q){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oh=class extends Oo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Id(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var L0=new I,N0=new I,Xf=new Id,Yf=new Id,$f=new Id,ah=class extends Zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(N0.subVectors(s[0],s[1]).add(s[0]),l=N0);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(L0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=L0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Xf.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,p,x,m),Yf.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,p,x,m),$f.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Xf.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Yf.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),$f.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Xf.calc(c),Yf.calc(c),$f.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function D0(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function vb(i,e){let t=1-i;return t*t*e}function bb(i,e){return 2*(1-i)*i*e}function Mb(i,e){return i*i*e}function ka(i,e,t,n){return vb(i,e)+bb(i,t)+Mb(i,n)}function Sb(i,e){let t=1-i;return t*t*t*e}function wb(i,e){let t=1-i;return 3*t*t*i*e}function Eb(i,e){return 3*(1-i)*i*i*e}function Tb(i,e){return i*i*i*e}function za(i,e,t,n,s){return Sb(i,e)+wb(i,t)+Eb(i,n)+Tb(i,s)}var nl=class extends Zn{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(za(e,s.x,r.x,o.x,a.x),za(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lh=class extends Zn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(za(e,s.x,r.x,o.x,a.x),za(e,s.y,r.y,o.y,a.y),za(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},il=class extends Zn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends Zn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sl=class extends Zn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ka(e,s.x,r.x,o.x),ka(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hh=class extends Zn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ka(e,s.x,r.x,o.x),ka(e,s.y,r.y,o.y),ka(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},rl=class extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(D0(a,c.x,l.x,h.x,u.x),D0(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Q().fromArray(s))}return this}},id=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:ah,CubicBezierCurve:nl,CubicBezierCurve3:lh,EllipseCurve:Oo,LineCurve:il,LineCurve3:ch,QuadraticBezierCurve:sl,QuadraticBezierCurve3:hh,SplineCurve:rl}),uh=class extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new id[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new id[s.type]().fromJSON(s))}return this}},ol=class extends uh{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new il(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new sl(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new nl(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new rl(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new Oo(e,t,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zs=class extends ol{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ol().fromJSON(s))}return this}};function Ab(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Dg(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Lb(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,u=c;for(let f=t;f<s;f+=t){let d=i[f],p=i[f+1];d<a&&(a=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return al(r,o,t,a,c,l,0),o}function Dg(i,e,t,n,s){let r;if(s===Gb(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=F0(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=F0(o/n|0,i[o],i[o+1],r);return r&&Bo(r,r.next)&&(cl(r),r=r.next),r}function Sr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Bo(t,t.next)||Zt(t.prev,t,t.next)===0)){if(cl(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function al(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Ob(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Cb(i,n,s,r):Rb(i)){e.push(c.i,i.i,l.i),cl(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Ib(Sr(i),e),al(i,e,t,n,s,r,2)):o===2&&Pb(i,e,t,n,s,r):al(Sr(i),e,t,n,s,r,1);break}}}function Rb(i){let e=i.prev,t=i,n=i.next;if(Zt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),f=Math.max(s,r,o),d=Math.max(a,c,l),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Ua(s,a,r,c,o,l,p.x,p.y)&&Zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Cb(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Zt(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,c,l),p=Math.min(h,u,f),x=Math.max(a,c,l),m=Math.max(h,u,f),g=sd(d,p,e,t,n),y=sd(x,m,e,t,n),w=i.prevZ,_=i.nextZ;for(;w&&w.z>=g&&_&&_.z<=y;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Ua(a,h,c,u,l,f,w.x,w.y)&&Zt(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=d&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Ua(a,h,c,u,l,f,_.x,_.y)&&Zt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&Ua(a,h,c,u,l,f,w.x,w.y)&&Zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=m&&_!==s&&_!==o&&Ua(a,h,c,u,l,f,_.x,_.y)&&Zt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ib(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Bo(n,s)&&Ug(n,t,t.next,s)&&ll(n,s)&&ll(s,n)&&(e.push(n.i,t.i,s.i),cl(t),cl(t.next),t=i=s),t=t.next}while(t!==i);return Sr(t)}function Pb(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&zb(o,a)){let c=Og(o,a);o=Sr(o,o.next),c=Sr(c,c.next),al(o,e,t,n,s,r,0),al(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Lb(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Dg(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(kb(l))}s.sort(Nb);for(let r=0;r<s.length;r++)t=Db(s[r],t);return t}function Nb(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Db(i,e){let t=Fb(i,e);if(!t)return e;let n=Og(t,i);return Sr(n,n.next),Sr(t,t.next)}function Fb(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Bo(i,t))return t;do{if(Bo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Fg(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ll(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Ub(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Ub(i,e){return Zt(i.prev,i,e.prev)<0&&Zt(e.next,i,i.next)<0}function Ob(i,e,t,n){let s=i;do s.z===0&&(s.z=sd(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Bb(s)}function Bb(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function sd(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kb(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Fg(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ua(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Fg(i,e,t,n,s,r,o,a)}function zb(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Hb(i,e)&&(ll(i,e)&&ll(e,i)&&Vb(i,e)&&(Zt(i.prev,i,e.prev)||Zt(i,e.prev,e))||Bo(i,e)&&Zt(i.prev,i,i.next)>0&&Zt(e.prev,e,e.next)>0)}function Zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Bo(i,e){return i.x===e.x&&i.y===e.y}function Ug(i,e,t,n){let s=zc(Zt(i,e,t)),r=zc(Zt(i,e,n)),o=zc(Zt(t,n,i)),a=zc(Zt(t,n,e));return!!(s!==r&&o!==a||s===0&&kc(i,t,e)||r===0&&kc(i,n,e)||o===0&&kc(t,i,n)||a===0&&kc(t,e,n))}function kc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zc(i){return i>0?1:i<0?-1:0}function Hb(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ug(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ll(i,e){return Zt(i.prev,i,i.next)<0?Zt(i,e,i.next)>=0&&Zt(i,i.prev,e)>=0:Zt(i,e,i.prev)<0||Zt(i,i.next,e)<0}function Vb(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Og(i,e){let t=rd(i.i,i.x,i.y),n=rd(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function F0(i,e,t,n){let s=rd(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cl(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rd(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Gb(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var od=class{static triangulate(e,t,n=2){return Ab(e,t,n)}},zi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];U0(e),O0(n,e);let o=e.length;t.forEach(U0);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,O0(n,t[c]);let a=od.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function U0(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function O0(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var hl=class i extends Rt{constructor(e=new zs([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new rt(s,3)),this.setAttribute("uv",new rt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Wb,w,_=!1,v,M,T,b;if(g){w=g.getSpacedPoints(h),_=!0,f=!1;let se=g.isCatmullRomCurve3?g.closed:!1;v=g.computeFrenetFrames(h,se),M=new I,T=new I,b=new I}f||(m=0,d=0,p=0,x=0);let E=a.extractPoints(l),R=E.shape,P=E.holes;if(!zi.isClockWise(R)){R=R.reverse();for(let se=0,he=P.length;se<he;se++){let ue=P[se];zi.isClockWise(ue)&&(P[se]=ue.reverse())}}function k(se){let ue=10000000000000001e-36,fe=se[0];for(let xe=1;xe<=se.length;xe++){let Ze=xe%se.length,Ye=se[Ze],nt=Ye.x-fe.x,lt=Ye.y-fe.y,F=nt*nt+lt*lt,Lt=Math.max(Math.abs(Ye.x),Math.abs(Ye.y),Math.abs(fe.x),Math.abs(fe.y)),yt=ue*Lt*Lt;if(F<=yt){se.splice(Ze,1),xe--;continue}fe=Ye}}k(R),P.forEach(k);let D=P.length,B=R;for(let se=0;se<D;se++){let he=P[se];R=R.concat(he)}function X(se,he,ue){return he||je("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(he,ue)}let $=R.length;function oe(se,he,ue){let fe,xe,Ze,Ye=se.x-he.x,nt=se.y-he.y,lt=ue.x-se.x,F=ue.y-se.y,Lt=Ye*Ye+nt*nt,yt=Ye*F-nt*lt;if(Math.abs(yt)>Number.EPSILON){let C=Math.sqrt(Lt),S=Math.sqrt(lt*lt+F*F),H=he.x-nt/C,q=he.y+Ye/C,J=ue.x-F/S,de=ue.y+lt/S,me=((J-H)*F-(de-q)*lt)/(Ye*F-nt*lt);fe=H+Ye*me-se.x,xe=q+nt*me-se.y;let j=fe*fe+xe*xe;if(j<=2)return new Q(fe,xe);Ze=Math.sqrt(j/2)}else{let C=!1;Ye>Number.EPSILON?lt>Number.EPSILON&&(C=!0):Ye<-Number.EPSILON?lt<-Number.EPSILON&&(C=!0):Math.sign(nt)===Math.sign(F)&&(C=!0),C?(fe=-nt,xe=Ye,Ze=Math.sqrt(Lt)):(fe=Ye,xe=nt,Ze=Math.sqrt(Lt/2))}return new Q(fe/Ze,xe/Ze)}let Z=[];for(let se=0,he=B.length,ue=he-1,fe=se+1;se<he;se++,ue++,fe++)ue===he&&(ue=0),fe===he&&(fe=0),Z[se]=oe(B[se],B[ue],B[fe]);let te=[],z,ae=Z.concat();for(let se=0,he=D;se<he;se++){let ue=P[se];z=[];for(let fe=0,xe=ue.length,Ze=xe-1,Ye=fe+1;fe<xe;fe++,Ze++,Ye++)Ze===xe&&(Ze=0),Ye===xe&&(Ye=0),z[fe]=oe(ue[fe],ue[Ze],ue[Ye]);te.push(z),ae=ae.concat(z)}let ce;if(m===0)ce=zi.triangulateShape(B,P);else{let se=[],he=[];for(let ue=0;ue<m;ue++){let fe=ue/m,xe=d*Math.cos(fe*Math.PI/2),Ze=p*Math.sin(fe*Math.PI/2)+x;for(let Ye=0,nt=B.length;Ye<nt;Ye++){let lt=X(B[Ye],Z[Ye],Ze);ge(lt.x,lt.y,-xe),fe===0&&se.push(lt)}for(let Ye=0,nt=D;Ye<nt;Ye++){let lt=P[Ye];z=te[Ye];let F=[];for(let Lt=0,yt=lt.length;Lt<yt;Lt++){let C=X(lt[Lt],z[Lt],Ze);ge(C.x,C.y,-xe),fe===0&&F.push(C)}fe===0&&he.push(F)}}ce=zi.triangulateShape(se,he)}let He=ce.length,Ve=p+x;for(let se=0;se<$;se++){let he=f?X(R[se],ae[se],Ve):R[se];_?(T.copy(v.normals[0]).multiplyScalar(he.x),M.copy(v.binormals[0]).multiplyScalar(he.y),b.copy(w[0]).add(T).add(M),ge(b.x,b.y,b.z)):ge(he.x,he.y,0)}for(let se=1;se<=h;se++)for(let he=0;he<$;he++){let ue=f?X(R[he],ae[he],Ve):R[he];_?(T.copy(v.normals[se]).multiplyScalar(ue.x),M.copy(v.binormals[se]).multiplyScalar(ue.y),b.copy(w[se]).add(T).add(M),ge(b.x,b.y,b.z)):ge(ue.x,ue.y,u/h*se)}for(let se=m-1;se>=0;se--){let he=se/m,ue=d*Math.cos(he*Math.PI/2),fe=p*Math.sin(he*Math.PI/2)+x;for(let xe=0,Ze=B.length;xe<Ze;xe++){let Ye=X(B[xe],Z[xe],fe);ge(Ye.x,Ye.y,u+ue)}for(let xe=0,Ze=P.length;xe<Ze;xe++){let Ye=P[xe];z=te[xe];for(let nt=0,lt=Ye.length;nt<lt;nt++){let F=X(Ye[nt],z[nt],fe);_?ge(F.x,F.y+w[h-1].y,w[h-1].x+ue):ge(F.x,F.y,u+ue)}}}tt(),K();function tt(){let se=s.length/3;if(f){let he=0,ue=$*he;for(let fe=0;fe<He;fe++){let xe=ce[fe];ke(xe[2]+ue,xe[1]+ue,xe[0]+ue)}he=h+m*2,ue=$*he;for(let fe=0;fe<He;fe++){let xe=ce[fe];ke(xe[0]+ue,xe[1]+ue,xe[2]+ue)}}else{for(let he=0;he<He;he++){let ue=ce[he];ke(ue[2],ue[1],ue[0])}for(let he=0;he<He;he++){let ue=ce[he];ke(ue[0]+$*h,ue[1]+$*h,ue[2]+$*h)}}n.addGroup(se,s.length/3-se,0)}function K(){let se=s.length/3,he=0;ee(B,he),he+=B.length;for(let ue=0,fe=P.length;ue<fe;ue++){let xe=P[ue];ee(xe,he),he+=xe.length}n.addGroup(se,s.length/3-se,1)}function ee(se,he){let ue=se.length;for(;--ue>=0;){let fe=ue,xe=ue-1;xe<0&&(xe=se.length-1);for(let Ze=0,Ye=h+m*2;Ze<Ye;Ze++){let nt=$*Ze,lt=$*(Ze+1),F=he+fe+nt,Lt=he+xe+nt,yt=he+xe+lt,C=he+fe+lt;ye(F,Lt,yt,C)}}}function ge(se,he,ue){c.push(se),c.push(he),c.push(ue)}function ke(se,he,ue){Ke(se),Ke(he),Ke(ue);let fe=s.length/3,xe=y.generateTopUV(n,s,fe-3,fe-2,fe-1);Et(xe[0]),Et(xe[1]),Et(xe[2])}function ye(se,he,ue,fe){Ke(se),Ke(he),Ke(fe),Ke(he),Ke(ue),Ke(fe);let xe=s.length/3,Ze=y.generateSideWallUV(n,s,xe-6,xe-3,xe-2,xe-1);Et(Ze[0]),Et(Ze[1]),Et(Ze[3]),Et(Ze[1]),Et(Ze[2]),Et(Ze[3])}function Ke(se){s.push(c[se*3+0]),s.push(c[se*3+1]),s.push(c[se*3+2])}function Et(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qb(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new id[s.type]().fromJSON(s)),new i(n,e.options)}},Wb={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Q(r,o),new Q(a,c),new Q(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Q(o,1-c),new Q(l,1-u),new Q(f,1-p),new Q(x,1-g)]:[new Q(a,1-c),new Q(h,1-u),new Q(d,1-p),new Q(m,1-g)]}};function qb(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ul=class i extends rh{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ko=class i extends Rt{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=gt(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,u=new I,f=new Q,d=new I,p=new I,x=new I,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=t;y++){let w=n+y*h*s,_=Math.sin(w),v=Math.cos(w);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*_,u.y=e[M].y,u.z=e[M].x*v,o.push(u.x,u.y,u.z),f.x=y/t,f.y=M/(e.length-1),a.push(f.x,f.y);let T=c[3*M+0]*_,b=c[3*M+1],E=c[3*M+0]*v;l.push(T,b,E)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let _=w+y*e.length,v=_,M=_+e.length,T=_+e.length+1,b=_+1;r.push(v,M,b),r.push(T,b,M)}this.setIndex(r),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var jt=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*f-o;for(let w=0;w<l;w++){let _=w*u-r;p.push(_,-y,0),x.push(0,0,1),m.push(w/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){let w=y+l*g,_=y+l*(g+1),v=y+1+l*(g+1),M=y+1+l*g;d.push(w,_,M),d.push(_,v,M)}this.setIndex(d),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var fl=class i extends Rt{constructor(e=new zs([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new rt(s,3)),this.setAttribute("normal",new rt(r,3)),this.setAttribute("uv",new rt(o,2));function l(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;zi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];zi.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=zi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],w=y[0]+u,_=y[1]+u,v=y[2]+u;n.push(w,_,v),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Xb(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Xb(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var wr=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,f=new I,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],w=g/n,_=o+w*a,v=e*Math.cos(_),M=Math.sqrt(e*e-v*v),T=0;g===0&&o===0?T=.5/t:g===n&&c===Math.PI&&(T=-.5/t);for(let b=0;b<=t;b++){let E=b/t,R=s+E*r;u.x=-M*Math.cos(R),u.y=v,u.z=M*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+T,1-w),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let w=h[g][y+1],_=h[g][y],v=h[g+1][y],M=h[g+1][y+1];(g!==0||o>0)&&d.push(w,_,M),(g!==n-1||c<Math.PI)&&d.push(_,v,M)}this.setIndex(d),this.setAttribute("position",new rt(p,3)),this.setAttribute("normal",new rt(x,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(B0(s))s.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(B0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=Dr(i[t]);for(let s in n)e[s]=n[s]}return e}function B0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Yb(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Zo={clone:Dr,merge:Ln},$b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$b,this.fragmentShader=Kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Dr(e.uniforms),this.uniformsGroups=Yb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Qe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},zo=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ut=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},rn=class extends Ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var dl=class extends Pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ol,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=wh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fh=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dh=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Us(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function qc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Zb(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function k0(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Jb(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var qi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ph=class extends qi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qf,endingEnd:Qf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ed:r=e,a=2*t-n;break;case td:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ed:o=e,c=2*n-t;break;case td:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-d)*m+(1.5+d)*x+.5*p,_=d*m-d*x;for(let v=0;v!==a;++v)r[v]=g*o[h+v]+y*o[l+v]+w*o[c+v]+_*o[u+v];return r}},mh=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},gh=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},xh=class extends qi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[l+p],m=o[c+p],g=d*f+p*2,y=u[g],w=u[g+1],_=e*f+p*2,v=h[_],M=h[_+1],T=Qb(n,t,y,v,s);r[p]=Bg(T,x,w,M,m)}return r}};function Bg(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function jb(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Qb(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Bg(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=jb(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Hn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Us(t,this.TimeBufferType),this.values=Us(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Us(e.times,Array),values:Us(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),qc(e.settings)&&(n.settings={inTangents:Us(e.settings.inTangents,Array),outTangents:Us(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new xh(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case gr:t=this.InterpolantFactoryMethodDiscrete;break;case xr:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break;case jf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gr;case this.InterpolantFactoryMethodLinear:return xr;case this.InterpolantFactoryMethodSmooth:return Gc;case this.InterpolantFactoryMethodBezier:return jf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;qc(this.settings)&&(z0(this.settings.inTangents,e),z0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){je("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Uv(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,qc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function z0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=xr;var fs=class extends Hn{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=gr;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};pl.prototype.ValueTypeName="color";var ds=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};ds.prototype.ValueTypeName="number";var _h=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},ps=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}};ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;var ms=class extends Hn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=gr;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;var Hs=class extends Hn{constructor(e,t,n,s){super(e,t,n,s)}};Hs.prototype.ValueTypeName="vector";var ml=class{constructor(e="",t=-1,n=[],s=_g){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=oi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let h=Zb(c);c=k0(c,1,h),l=k0(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ds(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],h=l.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(l)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function eM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return pl;case"quaternion":return ps;case"bool":case"boolean":return fs;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function tM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=eM(i.type);if(i.times===void 0){let n=[],s=[];Jb(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),qc(i.settings)&&(t.settings={inTangents:Us(i.settings.inTangents,Float32Array),outTangents:Us(i.settings.outTangents,Float32Array)}),t}var Hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(H0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!H0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function H0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var yh=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],p=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kg=new yh,Xi=class{constructor(e){this.manager=e!==void 0?e:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls={},ad=class extends Error{constructor(e,t){super(e),this.response=t}},Ho=class extends Xi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ls[e]!==void 0){ls[e].push({onLoad:t,onProgress:n,onError:s});return}ls[e]=[],ls[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ls[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){y();function y(){u.read().then(({done:w,value:_})=>{if(w)g.close();else{x+=_.byteLength;let v=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let M=0,T=h.length;M<T;M++){let b=h[M];b.onProgress&&b.onProgress(v)}g.enqueue(_),y()}},w=>{g.error(w)})}}});return new Response(m)}else throw new ad(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{Hi.add(`file:${e}`,l);let h=ls[e];delete ls[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{let h=ls[e];if(h===void 0)throw this.manager.itemError(e),l;delete ls[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var yo=new WeakMap,vh=class extends Xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=yo.get(o);u===void 0&&(u=[],yo.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=To("img");function c(){h(),t&&t(this);let u=yo.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}yo.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Hi.remove(`image:${e}`);let f=yo.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}yo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Er=class extends Xi{constructor(e){super(e)}load(e,t,n,s){let r=new fn,o=new vh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Tr=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gl=class extends Tr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Kf=new Qe,V0=new I,G0=new I,Vo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;V0.setFromMatrixPosition(e.matrixWorld),t.position.copy(V0),G0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(G0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Kf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Kf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hc=new I,Vc=new In,ki=new I,xl=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Vc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Hc,Vc,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Vc,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fs=new I,W0=new Q,q0=new Q,_n=class extends xl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,W0,q0),t.subVectors(q0,W0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Oa*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ld=class extends Vo{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=_r*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ar=class extends Tr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ld}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},cd=class extends Vo{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0}},Rr=class extends Tr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},li=class extends xl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hd=class extends Vo{constructor(){super(new li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new hd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var gs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Zf=new WeakMap,_l=class extends Xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Zf.has(o)===!0?(s&&s(Zf.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Hi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Zf.set(c,l),Hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var vo=-90,bo=1,bh=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _n(vo,bo,e,t);s.layers=this.layers,this.add(s);let r=new _n(vo,bo,e,t);r.layers=this.layers,this.add(r);let o=new _n(vo,bo,e,t);o.layers=this.layers,this.add(o);let a=new _n(vo,bo,e,t);a.layers=this.layers,this.add(a);let c=new _n(vo,bo,e,t);c.layers=this.layers,this.add(c);let l=new _n(vo,bo,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Mh=class extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},yl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=nM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function nM(){this._document.hidden===!1&&this.reset()}var Ld="\\[\\]\\.:\\/",iM=new RegExp("["+Ld+"]","g"),Nd="[^"+Ld+"]",sM="[^"+Ld.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",Nd),oM=/(WCOD+)?/.source.replace("WCOD",sM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nd),lM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nd),cM=new RegExp("^"+rM+oM+aM+lM+"$"),hM=["material","materials","bones","map"],ud=class{constructor(e,t,n){let s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Vt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iM,"")}static parseTrackName(e){let t=cM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;je("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Vt.Composite=ud;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LC=new Float32Array(1);var X0=new Qe,vl=class{constructor(e,t,n=0,s=1/0){this.ray=new Bs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Co,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return X0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(X0),this}intersectObject(e,t=!0,n=[]){return fd(e,this,n,t),n.sort(Y0),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fd(e[s],this,n,t);return n.sort(Y0),n}};function Y0(i,e){return i.distance-e.distance}function fd(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)fd(r[o],e,t,!0)}}var bl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Fe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var kd=class kd{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};kd.prototype.isMatrix2=!0;var dd=kd;function Dd(i,e,t,n){let s=uM(n);switch(t){case wd:return i*e;case Ph:return i*e/s.components*s.byteLength;case Lh:return i*e/s.components*s.byteLength;case qs:return i*e*2/s.components*s.byteLength;case Nh:return i*e*2/s.components*s.byteLength;case Ed:return i*e*3/s.components*s.byteLength;case Qn:return i*e*4/s.components*s.byteLength;case Dh:return i*e*4/s.components*s.byteLength;case Il:case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uh:case Bh:return Math.max(i,16)*Math.max(e,8)/4;case Fh:case Oh:return Math.max(i,8)*Math.max(e,8)/2;case kh:case zh:case Vh:case Gh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hh:case Dl:case Wh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case iu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case su:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ru:case ou:case au:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lu:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fl:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uM(i){switch(i){case Vn:case vd:return{byteLength:1,components:1};case Xo:case bd:case un:return{byteLength:2,components:1};case Ch:case Ih:return{byteLength:2,components:4};case Ri:case Rh:case jn:return{byteLength:4,components:1};case Md:case Sd:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ax(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dM(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var pM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mM=`#ifdef USE_ALPHAHASH
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
#endif`,gM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
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
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MM=`#ifdef USE_BATCHING
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
#endif`,SM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AM=`#ifdef USE_IRIDESCENCE
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
#endif`,RM=`#ifdef USE_BUMPMAP
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,OM=`#define PI 3.141592653589793
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
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,HM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XM=`#ifdef USE_ENVMAP
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
#endif`,YM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
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
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,QM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tS=`#ifdef USE_GRADIENTMAP
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
}`,nS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,oS=`#ifdef USE_ENVMAP
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
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uS=`PhysicalMaterial material;
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
#endif`,fS=`uniform sampler2D dfgLUT;
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
}`,dS=`
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
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
#endif`,mS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,xS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wS=`#if defined( USE_POINTS_UV )
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
#endif`,ES=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IS=`#ifdef USE_MORPHTARGETS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,OS=`#ifdef USE_NORMALMAP
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
#endif`,BS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$S=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QS=`float getShadowMask() {
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
}`,e1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t1=`#ifdef USE_SKINNING
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
#endif`,n1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,l1=`#ifdef USE_TRANSMISSION
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
#endif`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,p1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m1=`uniform sampler2D t2D;
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
}`,g1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`#include <common>
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
}`,b1=`#if DEPTH_PACKING == 3200
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
}`,M1=`#define DISTANCE
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
}`,S1=`#define DISTANCE
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`uniform float scale;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 diffuse;
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
}`,I1=`#define LAMBERT
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
}`,P1=`#define LAMBERT
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
}`,L1=`#define MATCAP
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
}`,N1=`#define MATCAP
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
}`,D1=`#define NORMAL
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
}`,F1=`#define NORMAL
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
}`,U1=`#define PHONG
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
}`,O1=`#define PHONG
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
}`,B1=`#define STANDARD
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
}`,k1=`#define STANDARD
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
}`,z1=`#define TOON
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
}`,H1=`#define TOON
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
}`,V1=`uniform float size;
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
}`,G1=`uniform vec3 diffuse;
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
}`,W1=`#include <common>
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
}`,q1=`uniform vec3 color;
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
}`,X1=`uniform float rotation;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:pM,alphahash_pars_fragment:mM,alphamap_fragment:gM,alphamap_pars_fragment:xM,alphatest_fragment:_M,alphatest_pars_fragment:yM,aomap_fragment:vM,aomap_pars_fragment:bM,batching_pars_vertex:MM,batching_vertex:SM,begin_vertex:wM,beginnormal_vertex:EM,bsdfs:TM,iridescence_fragment:AM,bumpmap_pars_fragment:RM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:LM,color_fragment:NM,color_pars_fragment:DM,color_pars_vertex:FM,color_vertex:UM,common:OM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:kM,displacementmap_pars_vertex:zM,displacementmap_vertex:HM,emissivemap_fragment:VM,emissivemap_pars_fragment:GM,colorspace_fragment:WM,colorspace_pars_fragment:qM,envmap_fragment:XM,envmap_common_pars_fragment:YM,envmap_pars_fragment:$M,envmap_pars_vertex:KM,envmap_physical_pars_fragment:oS,envmap_vertex:ZM,fog_vertex:JM,fog_pars_vertex:jM,fog_fragment:QM,fog_pars_fragment:eS,gradientmap_pars_fragment:tS,lightmap_pars_fragment:nS,lights_lambert_fragment:iS,lights_lambert_pars_fragment:sS,lights_pars_begin:rS,lights_toon_fragment:aS,lights_toon_pars_fragment:lS,lights_phong_fragment:cS,lights_phong_pars_fragment:hS,lights_physical_fragment:uS,lights_physical_pars_fragment:fS,lights_fragment_begin:dS,lights_fragment_maps:pS,lights_fragment_end:mS,lightprobes_pars_fragment:gS,logdepthbuf_fragment:xS,logdepthbuf_pars_fragment:_S,logdepthbuf_pars_vertex:yS,logdepthbuf_vertex:vS,map_fragment:bS,map_pars_fragment:MS,map_particle_fragment:SS,map_particle_pars_fragment:wS,metalnessmap_fragment:ES,metalnessmap_pars_fragment:TS,morphinstance_vertex:AS,morphcolor_vertex:RS,morphnormal_vertex:CS,morphtarget_pars_vertex:IS,morphtarget_vertex:PS,normal_fragment_begin:LS,normal_fragment_maps:NS,normal_pars_fragment:DS,normal_pars_vertex:FS,normal_vertex:US,normalmap_pars_fragment:OS,clearcoat_normal_fragment_begin:BS,clearcoat_normal_fragment_maps:kS,clearcoat_pars_fragment:zS,iridescence_pars_fragment:HS,opaque_fragment:VS,packing:GS,premultiplied_alpha_fragment:WS,project_vertex:qS,dithering_fragment:XS,dithering_pars_fragment:YS,roughnessmap_fragment:$S,roughnessmap_pars_fragment:KS,shadowmap_pars_fragment:ZS,shadowmap_pars_vertex:JS,shadowmap_vertex:jS,shadowmask_pars_fragment:QS,skinbase_vertex:e1,skinning_pars_vertex:t1,skinning_vertex:n1,skinnormal_vertex:i1,specularmap_fragment:s1,specularmap_pars_fragment:r1,tonemapping_fragment:o1,tonemapping_pars_fragment:a1,transmission_fragment:l1,transmission_pars_fragment:c1,uv_pars_fragment:h1,uv_pars_vertex:u1,uv_vertex:f1,worldpos_vertex:d1,background_vert:p1,background_frag:m1,backgroundCube_vert:g1,backgroundCube_frag:x1,cube_vert:_1,cube_frag:y1,depth_vert:v1,depth_frag:b1,distance_vert:M1,distance_frag:S1,equirect_vert:w1,equirect_frag:E1,linedashed_vert:T1,linedashed_frag:A1,meshbasic_vert:R1,meshbasic_frag:C1,meshlambert_vert:I1,meshlambert_frag:P1,meshmatcap_vert:L1,meshmatcap_frag:N1,meshnormal_vert:D1,meshnormal_frag:F1,meshphong_vert:U1,meshphong_frag:O1,meshphysical_vert:B1,meshphysical_frag:k1,meshtoon_vert:z1,meshtoon_frag:H1,points_vert:V1,points_frag:G1,shadow_vert:W1,shadow_frag:q1,sprite_vert:X1,sprite_frag:Y1},Ee={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},$i={basic:{uniforms:Ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Ln([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Ln([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Ln([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new pe(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Ln([Ee.points,Ee.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Ln([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Ln([Ee.common,Ee.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Ln([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Ln([Ee.sprite,Ee.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Ln([Ee.common,Ee.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Ln([Ee.lights,Ee.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};$i.physical={uniforms:Ln([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var du={r:0,b:0,g:0},$1=new Qe,lx=new ot;lx.set(-1,0,0,0,1,0,0,0,1);function K1(i,e,t,n,s,r){let o=new pe(0),a=s===!0?0:1,c,l,h=null,u=0,f=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let _=y.backgroundBlurriness>0;w=e.get(w,_)}return w}function p(y){let w=!1,_=d(y);_===null?m(o,a):_&&_.isColor&&(m(_,1),w=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,w){let _=d(w);_&&(_.isCubeTexture||_.mapping===Cl)?(l===void 0&&(l=new Ie(new Kt(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Dr($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($1.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lx),l.material.toneMapped=ft.getTransfer(_.colorSpace)!==Tt,(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ie(new jt(2,2),new dn({name:"BackgroundMaterial",uniforms:Dr($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ft.getTransfer(_.colorSpace)!==Tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,w){y.getRGB(du,Pd(i)),t.buffers.color.setClear(du.r,du.g,du.b,w,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function Z1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,N,k,D,B){let X=!1,$=u(P,D,k,N);r!==$&&(r=$,l(r.object)),X=d(P,D,k,B),X&&p(P,D,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,_(P,N,k,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,N,k,D){let B=D.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let $=P.isInstancedMesh===!0?P.id:0,oe=X[$];oe===void 0&&(oe={},X[$]=oe);let Z=oe[k.id];Z===void 0&&(Z={},oe[k.id]=Z);let te=Z[B];return te===void 0&&(te=f(c()),Z[B]=te),te}function f(P){let N=[],k=[],D=[];for(let B=0;B<t;B++)N[B]=0,k[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,N,k,D){let B=r.attributes,X=N.attributes,$=0,oe=k.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let z=B[Z],ae=X[Z];if(ae===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor)),z===void 0||z.attribute!==ae||ae&&z.data!==ae.data)return!0;$++}return r.attributesNum!==$||r.index!==D}function p(P,N,k,D){let B={},X=N.attributes,$=0,oe=k.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let z=X[Z];z===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));let ae={};ae.attribute=z,z&&z.data&&(ae.data=z.data),B[Z]=ae,$++}r.attributes=B,r.attributesNum=$,r.index=D}function x(){let P=r.newAttributes;for(let N=0,k=P.length;N<k;N++)P[N]=0}function m(P){g(P,0)}function g(P,N){let k=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;k[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),B[P]!==N&&(i.vertexAttribDivisor(P,N),B[P]=N)}function y(){let P=r.newAttributes,N=r.enabledAttributes;for(let k=0,D=N.length;k<D;k++)N[k]!==P[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function w(P,N,k,D,B,X,$){$===!0?i.vertexAttribIPointer(P,N,k,B,X):i.vertexAttribPointer(P,N,k,D,B,X)}function _(P,N,k,D){x();let B=D.attributes,X=k.getAttributes(),$=N.defaultAttributeValues;for(let oe in X){let Z=X[oe];if(Z.location>=0){let te=B[oe];if(te===void 0&&(oe==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),oe==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let z=te.normalized,ae=te.itemSize,ce=e.get(te);if(ce===void 0)continue;let He=ce.buffer,Ve=ce.type,tt=ce.bytesPerElement,K=Ve===i.INT||Ve===i.UNSIGNED_INT||te.gpuType===Rh;if(te.isInterleavedBufferAttribute){let ee=te.data,ge=ee.stride,ke=te.offset;if(ee.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)g(Z.location+ye,ee.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<Z.locationSize;ye++)m(Z.location+ye);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ye=0;ye<Z.locationSize;ye++)w(Z.location+ye,ae/Z.locationSize,Ve,z,ge*tt,(ke+ae/Z.locationSize*ye)*tt,K)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<Z.locationSize;ee++)g(Z.location+ee,te.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<Z.locationSize;ee++)m(Z.location+ee);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ee=0;ee<Z.locationSize;ee++)w(Z.location+ee,ae/Z.locationSize,Ve,z,ae*tt,ae/Z.locationSize*ee*tt,K)}}else if($!==void 0){let z=$[oe];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(Z.location,z);break;case 3:i.vertexAttrib3fv(Z.location,z);break;case 4:i.vertexAttrib4fv(Z.location,z);break;default:i.vertexAttrib1fv(Z.location,z)}}}}y()}function v(){E();for(let P in n){let N=n[P];for(let k in N){let D=N[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let k in N){let D=N[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P.id]}function T(P){for(let N in n){let k=n[N];for(let D in k){let B=k[D];if(B[P.id]===void 0)continue;let X=B[P.id];for(let $ in X)h(X[$].object),delete X[$];delete B[P.id]}}}function b(P){for(let N in n){let k=n[N],D=P.isInstancedMesh===!0?P.id:0,B=k[D];if(B!==void 0){for(let X in B){let $=B[X];for(let oe in $)h($[oe].object),delete $[oe];delete B[X]}delete k[D],Object.keys(k).length===0&&delete n[N]}}}function E(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfObject:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function J1(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let d=0;d<h;d++)f+=l[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function j1(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Qn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let b=T===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Vn&&T!==jn&&!b&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Fe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:_,maxSamples:v,samples:M}}function Q1(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Kn,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,w=y*4,_=g.clippingState||null;c.value=_,_=h(p,f,w,d);for(let v=0;v!==w;++v)_[v]=t[v];g.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,p!==!0||m===null){let g=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,_=d;w!==x;++w,_+=4)o.copy(u[w]).applyMatrix4(y,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var jo=4,ew=6,tw=20,nw=256,Bl=new li,zg=new pe,zd=null,Hd=0,Vd=0,Gd=!1,iw=new I,Fr=new I,ea=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=iw}=r;zd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zd,Hd,Vd),this._renderer.xr.enabled=Gd,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Vd=this._renderer.getActiveMipmapLevel(),Gd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:un,format:Qn,colorSpace:Mn,depthBuffer:!1},s=Hg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sw(r)),this._blurMaterial=ow(r,e,t),this._ggxMaterial=rw(r,e,t)}return s}_compileMaterial(e){let t=new Ie(new Rt,e);this._renderer.compile(t,Bl)}_sceneToCubeUV(e,t,n,s,r){let c=new _n(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(zg),u.toneMapping=Ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ie(new Kt,new Ct({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(zg),g=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):_===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let v=this._cubeSize;Jo(s,_*v,w>2?v:0,v,v),u.setRenderTarget(s),g&&u.render(x,c),u.render(e,c)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Gs||e.mapping===Lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Bl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),f=l*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-jo?n-p+jo:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=p-t,Jo(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Bl),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,Jo(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,Bl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-jo?s-this._lodMax+jo:0),f=4*(this._cubeSize-h);Jo(t,u,f,3*h,2*h),o.setRenderTarget(t),o.render(c,Bl)}};function sw(i){let e=[],t=[],n=i,s=i-jo+1+ew;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let g=0;g<u;g++){let y=g%3*2/3-1,w=g>2?0:-1,_=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(_,d*f*g);for(let v=0;v<f;v++){let M=h[v*2]*2-1,T=h[v*2+1]*2-1;g===0?Fr.set(1,T,M):g===1?Fr.set(-M,1,-T):g===2?Fr.set(-M,T,1):g===3?Fr.set(-1,T,-M):g===4?Fr.set(-M,-1,T):Fr.set(M,T,-1),Fr.toArray(x,(g*f+v)*d)}}let m=new Rt;m.setAttribute("position",new Yt(p,d)),m.setAttribute("outputDirection",new Yt(x,d)),t.push(new Ie(m,null)),n>jo&&n--}return{lodMeshes:t,sizeLods:e}}function Hg(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=Cl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rw(i,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:nw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ow(i,e,t){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:tw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Vg(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Gg(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var mu=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ja(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:hi});r.uniforms.tEquirect.value=t;let o=new Ie(s,r),a=t.minFilter;return t.minFilter===Jn&&(t.minFilter=$t),new bh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function aw(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Eh||d===Th)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new mu(p.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",l),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Eh||d===Th,x=d===Gs||d===Lr;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new ea(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&c(y)?(n===null&&(n=new ea(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Eh?f.mapping=Gs:d===Th&&(f.mapping=Lr),f}function c(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function l(f){let d=f.target;d.removeEventListener("dispose",l);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function lw(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&mr("WebGLRenderer: "+n+" extension not supported."),s}}}function cw(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function l(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let w=0,_=y.length;w<_;w+=3){let v=y[w+0],M=y[w+1],T=y[w+2];f.push(v,M,M,T,T,v)}}else{let y=p.array;x=p.version;for(let w=0,_=y.length/3-1;w<_;w+=3){let v=w+0,M=w+1,T=w+2;f.push(v,M,M,T,T,v)}}let m=new(p.count>=65535?qa:Wa)(f,1);m.version=x;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function hw(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function uw(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function fw(i,e,t){let n=new WeakMap,s=new wt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let _=a.attributes.position.count*w,v=1;_>e.maxTextureSize&&(v=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*v*4*u),T=new Ga(M,_,v,u);T.type=jn,T.needsUpdate=!0;let b=w*4;for(let R=0;R<u;R++){let P=m[R],N=g[R],k=y[R],D=_*v*4*R;for(let B=0;B<P.count;B++){let X=B*b;d===!0&&(s.fromBufferAttribute(P,B),M[D+X+0]=s.x,M[D+X+1]=s.y,M[D+X+2]=s.z,M[D+X+3]=0),p===!0&&(s.fromBufferAttribute(N,B),M[D+X+4]=s.x,M[D+X+5]=s.y,M[D+X+6]=s.z,M[D+X+7]=0),x===!0&&(s.fromBufferAttribute(k,B),M[D+X+8]=s.x,M[D+X+9]=s.y,M[D+X+10]=s.z,M[D+X+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:T,size:new Q(_,v)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let p=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",p),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function dw(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var pw={[Sl]:"LINEAR_TONE_MAPPING",[wl]:"REINHARD_TONE_MAPPING",[El]:"CINEON_TONE_MAPPING",[Pr]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[Rl]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function mw(i,e,t,n,s,r){let o=new Jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Rt;l.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new rt([0,2,0,0,2,0],2));let h=new zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ie(l,h),f=new li(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,y=[],w=!1;this.setSize=function(_,v){o.setSize(_,v),a!==null&&a.setSize(_,v),c!==null&&c.setSize(_,v);for(let M=0;M<y.length;M++){let T=y[M];T.setSize&&T.setSize(_,v)}},this.setEffects=function(_){y=_,w=y.length>0&&y[0].isRenderPass===!0;let v=o.width,M=o.height;y.length>0&&a===null&&(a=new Jt(v,M,{type:un,depthBuffer:!1,stencilBuffer:!1}),c=new Jt(v,M,{type:un,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let b=y[T];b.setSize&&b.setSize(v,M)}},this.begin=function(_,v){if(x||_.toneMapping===Ai&&y.length===0)return!1;if(g=v,v!==null){let M=v.width,T=v.height;(o.width!==M||o.height!==T)&&this.setSize(M,T)}return w===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Ai,!0},this.hasRenderPass=function(){return w},this.end=function(_,v){_.toneMapping=m,x=!0;let M=o,T=a;for(let b=0;b<y.length;b++){let E=y[b];E.enabled!==!1&&(E.render(_,T,M,v),E.needsSwap!==!1&&(M=T,T=T===a?c:a))}if(d!==_.outputColorSpace||p!==_.toneMapping){d=_.outputColorSpace,p=_.toneMapping,h.defines={},ft.getTransfer(d)===Tt&&(h.defines.SRGB_TRANSFER="");let b=pw[p];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,_.setRenderTarget(g),_.render(u,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var cx=new fn,Xd=new ks(1,1),hx=new Ga,ux=new th,fx=new ja,Wg=[],qg=[],Xg=new Float32Array(16),Yg=new Float32Array(9),$g=new Float32Array(4);function ta(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wg[s];if(r===void 0&&(r=new Float32Array(s),Wg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _u(i,e){let t=qg[e];t===void 0&&(t=new Int32Array(e),qg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function gw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function xw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function _w(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function yw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function vw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;$g.set(n),i.uniformMatrix2fv(this.addr,!1,$g),mn(t,n)}}function bw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Yg.set(n),i.uniformMatrix3fv(this.addr,!1,Yg),mn(t,n)}}function Mw(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,n))return;Xg.set(n),i.uniformMatrix4fv(this.addr,!1,Xg),mn(t,n)}}function Sw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ww(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function Ew(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function Tw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function Aw(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Rw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function Cw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function Iw(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function Pw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xd.compareFunction=t.isReversedDepthBuffer()?fu:uu,r=Xd):r=cx,t.setTexture2D(e||r,s)}function Lw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ux,s)}function Nw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fx,s)}function Dw(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hx,s)}function Fw(i){switch(i){case 5126:return gw;case 35664:return xw;case 35665:return _w;case 35666:return yw;case 35674:return vw;case 35675:return bw;case 35676:return Mw;case 5124:case 35670:return Sw;case 35667:case 35671:return ww;case 35668:case 35672:return Ew;case 35669:case 35673:return Tw;case 5125:return Aw;case 36294:return Rw;case 36295:return Cw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Pw;case 35679:case 36299:case 36307:return Lw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Dw}}function Uw(i,e){i.uniform1fv(this.addr,e)}function Ow(i,e){let t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function Bw(i,e){let t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function kw(i,e){let t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function zw(i,e){let t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Hw(i,e){let t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Vw(i,e){let t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gw(i,e){i.uniform1iv(this.addr,e)}function Ww(i,e){i.uniform2iv(this.addr,e)}function qw(i,e){i.uniform3iv(this.addr,e)}function Xw(i,e){i.uniform4iv(this.addr,e)}function Yw(i,e){i.uniform1uiv(this.addr,e)}function $w(i,e){i.uniform2uiv(this.addr,e)}function Kw(i,e){i.uniform3uiv(this.addr,e)}function Zw(i,e){i.uniform4uiv(this.addr,e)}function Jw(i,e,t){let n=this.cache,s=e.length,r=_u(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Xd:o=cx;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function jw(i,e,t){let n=this.cache,s=e.length,r=_u(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||ux,r[o])}function Qw(i,e,t){let n=this.cache,s=e.length,r=_u(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||fx,r[o])}function eE(i,e,t){let n=this.cache,s=e.length,r=_u(t,s);pn(n,r)||(i.uniform1iv(this.addr,r),mn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hx,r[o])}function tE(i){switch(i){case 5126:return Uw;case 35664:return Ow;case 35665:return Bw;case 35666:return kw;case 35674:return zw;case 35675:return Hw;case 35676:return Vw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return qw;case 35669:case 35673:return Xw;case 5125:return Yw;case 36294:return $w;case 36295:return Kw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return jw;case 35680:case 36300:case 36308:case 36293:return Qw;case 36289:case 36303:case 36311:case 36292:return eE}}var Yd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fw(t.type)}},$d=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tE(t.type)}},Kd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Wd=/(\w+)(\])?(\[|\.)?/g;function Kg(i,e){i.seq.push(e),i.map[e.id]=e}function nE(i,e,t){let n=i.name,s=n.length;for(Wd.lastIndex=0;;){let r=Wd.exec(n),o=Wd.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Kg(t,l===void 0?new Yd(a,i,e):new $d(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Kd(a),Kg(t,u)),t=u}}}var Qo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);nE(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Zg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var iE=37297,sE=0;function rE(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Jg=new ot;function oE(i){ft._getMatrix(Jg,ft.workingColorSpace,i);let e=`mat3( ${Jg.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(i)){case Ha:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+rE(i.getShaderSource(e),a)}else return r}function aE(i,e){let t=oE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var lE={[Sl]:"Linear",[wl]:"Reinhard",[El]:"Cineon",[Pr]:"ACESFilmic",[Al]:"AgX",[Rl]:"Neutral",[Tl]:"Custom"};function cE(i,e){let t=lE[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var pu=new I;function hE(){ft.getLuminanceCoefficients(pu);let i=pu.x.toFixed(4),e=pu.y.toFixed(4),t=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zl).join(`
`)}function fE(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dE(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function zl(i){return i!==""}function Qg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ex(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var pE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(i){return i.replace(pE,gE)}var mE=new Map;function gE(i,e){let t=xt[e];if(t===void 0){let n=mE.get(e);if(n!==void 0)t=xt[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Zd(t)}var xE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(i){return i.replace(xE,_E)}function _E(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var yE={[Cr]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function vE(i){return yE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bE={[Gs]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE",[Cl]:"ENVMAP_TYPE_CUBE_UV"};function ME(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":bE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var SE={[Lr]:"ENVMAP_MODE_REFRACTION"};function wE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":SE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var EE={[wh]:"ENVMAP_BLENDING_MULTIPLY",[mg]:"ENVMAP_BLENDING_MIX",[gg]:"ENVMAP_BLENDING_ADD"};function TE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":EE[i.combine]||"ENVMAP_BLENDING_NONE"}function AE(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function RE(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=vE(t),l=ME(t),h=wE(t),u=TE(t),f=AE(t),d=uE(t),p=fE(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(zl).join(`
`),g.length>0&&(g+=`
`)):(m=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),g=[nx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?xt.tonemapping_pars_fragment:"",t.toneMapping!==Ai?cE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),hE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zl).join(`
`)),o=Zd(o),o=Qg(o,t),o=ex(o,t),a=Zd(a),a=Qg(a,t),a=ex(a,t),o=tx(o),a=tx(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=y+m+o,_=y+g+a,v=Zg(s,s.VERTEX_SHADER,w),M=Zg(s,s.FRAGMENT_SHADER,_);s.attachShader(x,v),s.attachShader(x,M),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(v)||"",D=s.getShaderInfoLog(M)||"",B=N.trim(),X=k.trim(),$=D.trim(),oe=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,v,M);else{let te=jg(s,v,"vertex"),z=jg(s,M,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+te+`
`+z)}else B!==""?Fe("WebGLProgram: Program Info Log:",B):(X===""||$==="")&&(Z=!1);Z&&(P.diagnostics={runnable:oe,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:g}})}s.deleteShader(v),s.deleteShader(M),b=new Qo(s,x),E=dE(s,x)}let b;this.getUniforms=function(){return b===void 0&&T(this),b};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,iE)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sE++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=M,this}var CE=0,Jd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jd(e),t.set(e,n)),n}},jd=class{constructor(e){this.id=CE++,this.code=e,this.usedTimes=0}};function IE(i){return i===qs||i===Dl||i===Fl}function PE(i,e,t,n,s,r){let o=new Co,a=new Jd,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function x(b,E,R,P,N,k){let D=P.fog,B=N.geometry,X=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?P.environment:null,$=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,oe=e.get(b.envMap||X,$),Z=oe&&oe.mapping===Cl?oe.image.height:null,te=d[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Fe("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ae=z!==void 0?z.length:0,ce=0;B.morphAttributes.position!==void 0&&(ce=1),B.morphAttributes.normal!==void 0&&(ce=2),B.morphAttributes.color!==void 0&&(ce=3);let He,Ve,tt,K;if(te){let Wt=$i[te];He=Wt.vertexShader,Ve=Wt.fragmentShader}else{He=b.vertexShader,Ve=b.fragmentShader;let Wt=a.getVertexShaderStage(b),Nt=a.getFragmentShaderStage(b);a.update(b,Wt,Nt),tt=Wt.id,K=Nt.id}let ee=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),ke=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,Ke=!!b.map,Et=!!b.matcap,se=!!oe,he=!!b.aoMap,ue=!!b.lightMap,fe=!!b.bumpMap&&b.wireframe===!1,xe=!!b.normalMap,Ze=!!b.displacementMap,Ye=!!b.emissiveMap,nt=!!b.metalnessMap,lt=!!b.roughnessMap,F=b.anisotropy>0,Lt=b.clearcoat>0,yt=b.dispersion>0,C=b.retroreflectivity>0,S=b.iridescence>0,H=b.sheen>0,q=b.transmission>0,J=F&&!!b.anisotropyMap,de=Lt&&!!b.clearcoatMap,me=Lt&&!!b.clearcoatNormalMap,j=Lt&&!!b.clearcoatRoughnessMap,ie=S&&!!b.iridescenceMap,ve=S&&!!b.iridescenceThicknessMap,Ge=H&&!!b.sheenColorMap,we=H&&!!b.sheenRoughnessMap,be=!!b.specularMap,We=!!b.specularColorMap,Je=!!b.specularIntensityMap,ut=q&&!!b.transmissionMap,O=q&&!!b.thicknessMap,Me=!!b.gradientMap,ne=!!b.alphaMap,Se=b.alphaTest>0,Re=!!b.alphaHash,le=!!b.extensions,Xe=Ai;b.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Xe=i.toneMapping);let De={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:Ve,defines:b.defines,customVertexShaderID:tt,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:ke,instancingColor:ke&&N.instanceColor!==null,instancingMorph:ke&&N.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Ke,matcap:Et,envMap:se,envMapMode:se&&oe.mapping,envMapCubeUVHeight:Z,aoMap:he,lightMap:ue,bumpMap:fe,normalMap:xe,displacementMap:Ze,emissiveMap:Ye,normalMapObjectSpace:xe&&b.normalMapType===vg,normalMapTangentSpace:xe&&b.normalMapType===Ol,packedNormalMap:xe&&b.normalMapType===Ol&&IE(b.normalMap.format),metalnessMap:nt,roughnessMap:lt,anisotropy:F,anisotropyMap:J,clearcoat:Lt,clearcoatMap:de,clearcoatNormalMap:me,clearcoatRoughnessMap:j,dispersion:yt,retroreflection:C,iridescence:S,iridescenceMap:ie,iridescenceThicknessMap:ve,sheen:H,sheenColorMap:Ge,sheenRoughnessMap:we,specularMap:be,specularColorMap:We,specularIntensityMap:Je,transmission:q,transmissionMap:ut,thicknessMap:O,gradientMap:Me,opaque:b.transparent===!1&&b.blending===Wo&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:Se,alphaHash:Re,combine:b.combine,mapUv:Ke&&p(b.map.channel),aoMapUv:he&&p(b.aoMap.channel),lightMapUv:ue&&p(b.lightMap.channel),bumpMapUv:fe&&p(b.bumpMap.channel),normalMapUv:xe&&p(b.normalMap.channel),displacementMapUv:Ze&&p(b.displacementMap.channel),emissiveMapUv:Ye&&p(b.emissiveMap.channel),metalnessMapUv:nt&&p(b.metalnessMap.channel),roughnessMapUv:lt&&p(b.roughnessMap.channel),anisotropyMapUv:J&&p(b.anisotropyMap.channel),clearcoatMapUv:de&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:we&&p(b.sheenRoughnessMap.channel),specularMapUv:be&&p(b.specularMap.channel),specularColorMapUv:We&&p(b.specularColorMap.channel),specularIntensityMapUv:Je&&p(b.specularIntensityMap.channel),transmissionMapUv:ut&&p(b.transmissionMap.channel),thicknessMapUv:O&&p(b.thicknessMap.channel),alphaMapUv:ne&&p(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(xe||F),vertexNormals:!!B.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Ke||ne),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||B.attributes.normal===void 0&&xe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ge,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ce,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ke&&b.map.isVideoTexture===!0&&ft.getTransfer(b.map.colorSpace)===Tt,decodeVideoTextureEmissive:Ye&&b.emissiveMap.isVideoTexture===!0&&ft.getTransfer(b.emissiveMap.colorSpace)===Tt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===hn,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:le&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&b.extensions.multiDraw===!0||ye)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)E.push(R),E.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(g(E,b),y(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function g(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numSunLights),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numSunLightShadows),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function y(b,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function w(b){let E=d[b.type],R;if(E){let P=$i[E];R=Zo.clone(P.uniforms)}else R=b.uniforms;return R}function _(b,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new RE(i,E,b,s),l.push(R),h.set(E,R)),R}function v(b){if(--b.usedTimes===0){let E=l.indexOf(b);l[E]=l[l.length-1],l.pop(),h.delete(b.cacheKey),b.destroy()}}function M(b){a.remove(b)}function T(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:v,releaseShaderCache:M,programs:l,dispose:T}}function LE(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function NE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ix(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sx(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function c(f,d,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let w=a(f,d,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function l(f,d,p,x,m,g){let y=a(f,d,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||NE),n.length>1&&n.sort(d||ix),s.length>1&&s.sort(d||ix)}function u(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function DE(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new sx,i.set(n,[o])):s>=r.length?(o=new sx,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function FE(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new pe};break;case"SpotLight":t={position:new I,direction:new I,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function UE(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var OE=0;function BE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kE(i){let e=new FE,t=UE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new Qe,o=new Qe;function a(l){let h=0,u=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,y=0,w=0,_=0,v=0,M=0,T=0,b=0,E=0,R=0;l.sort(BE);for(let N=0,k=l.length;N<k;N++){let D=l[N],B=D.color,X=D.intensity,$=D.distance,oe=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===qs?oe=D.shadow.map.texture:oe=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*X,u+=B.g*X,f+=B.b*X;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],X);R++}else if(D.isSunLight){let Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=oe;let ae=te.getViewportCount();for(let ce=0;ce<ae;ce++)n.sunShadowMatrix[x+ce]=te.getMatrix(ce),n.sunShadowCascade[x+ce]=te._cascadeData[ce];x+=ae,p++}n.sun[d]=Z,d++}else if(D.isDirectionalLight){let Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=D.shadow.matrix,v++}n.directional[m]=Z,m++}else if(D.isSpotLight){let Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(B).multiplyScalar(X),Z.distance=$,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[y]=Z;let te=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,te.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=te.matrix,D.castShadow){let z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=oe,T++}y++}else if(D.isRectAreaLight){let Z=e.get(D);Z.color.copy(B).multiplyScalar(X),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=Z,w++}else if(D.isPointLight){let Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,z.shadowCameraNear=te.camera.near,z.shadowCameraFar=te.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=oe,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=Z,g++}else if(D.isHemisphereLight){let Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(X),Z.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[_]=Z,_++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==_||P.numSunShadows!==p||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==T||P.numSpotMaps!==b||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+b-E,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=d,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=_,P.numSunShadows=p,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=T,P.numSpotMaps=b,P.numLightProbes=R,n.version=OE++)}function c(l,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,w=l.length;y<w;y++){let _=l[y];if(_.isSunLight){let v=n.sun[u];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),u++}else if(_.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(_.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),p++}else if(_.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),m++}}}return{setup:a,setupView:c,state:n}}function rx(i){let e=new kE(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function c(f){s.push(f)}function l(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function zE(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new rx(i),e.set(s,[a])):r>=o.length?(a=new rx(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var HE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VE=`uniform sampler2D shadow_pass;
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
}`,GE=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],WE=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],ox=new Qe,kl=new I,qd=new I;function qE(i,e,t){let n=new Do,s=new Q,r=new Q,o=new wt,a=new fh,c=new dh,l={},h=t.maxTextureSize,u={[ci]:Sn,[Sn]:ci,[hn]:hn},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:HE,fragmentShader:VE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Rt;p.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ie(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let g=this.type;this.render=function(M,T,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===Z0&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(hi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=g!==this.type;k&&T.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=M.length;D<B;D++){let X=M[D],$=X.shadow;if($===void 0){Fe("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let oe=$.getFrameExtents();s.multiply(oe),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,$.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Go){if(X.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Jt(s.x,s.y,{format:qs,type:un,minFilter:$t,magFilter:$t,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new ks(s.x,s.y,jn),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Vi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=nn,$.map.depthTexture.magFilter=nn}else X.isPointLight?($.map=new mu(s.x),$.map.depthTexture=new sh(s.x,Ri)):($.map=new Jt(s.x,s.y),$.map.depthTexture=new ks(s.x,s.y,Ri)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Vi,this.type===Cr?($.map.depthTexture.compareFunction=Z?fu:uu,$.map.depthTexture.minFilter=$t,$.map.depthTexture.magFilter=$t):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=nn,$.map.depthTexture.magFilter=nn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let te=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,b);for(let z=0;z<te;z++){let ae=$.getCamera(z);if(X.isPointLight){let ce=$.camera,He=$.matrix,Ve=X.distance||ce.far;Ve!==ce.far&&(ce.far=Ve,ce.updateProjectionMatrix()),kl.setFromMatrixPosition(X.matrixWorld),ce.position.copy(kl),qd.copy(ce.position),qd.add(GE[z]),ce.up.copy(WE[z]),ce.lookAt(qd),ce.updateMatrixWorld(),He.makeTranslation(-kl.x,-kl.y,-kl.z),ox.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),$._frustum.setFromProjectionMatrix(ox,ce.coordinateSystem,ce.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,z),i.clear();else{z===0&&(i.setRenderTarget($.map),i.clear());let ce=$.getViewport(z);o.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),N.viewport(o)}n=$.getFrustum(z),_(T,b,ae,X,this.type)}$.isPointLightShadow!==!0&&this.type===Go&&y($,b),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,P)};function y(M,T){let b=e.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new Jt(s.x,s.y,{format:qs,type:un}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(T,null,b,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(T,null,b,d,x,null)}function w(M,T,b,E){let R=null,P=b.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=b.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=R.uuid,k=T.uuid,D=l[N];D===void 0&&(D={},l[N]=D);let B=D[k];B===void 0&&(B=R.clone(),D[k]=B,T.addEventListener("dispose",v)),R=B}if(R.visible=T.visible,R.wireframe=T.wireframe,E===Go?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=b}return R}function _(M,T,b,E,R){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Go)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,M.matrixWorld);let k=e.update(M),D=M.material;if(Array.isArray(D)){let B=k.groups;for(let X=0,$=B.length;X<$;X++){let oe=B[X],Z=D[oe.materialIndex];if(Z&&Z.visible){let te=w(M,Z,E,R);M.onBeforeShadow(i,M,T,b,k,te,oe),i.renderBufferDirect(b,null,k,te,M,oe),M.onAfterShadow(i,M,T,b,k,te,oe)}}}else if(D.visible){let B=w(M,D,E,R);M.onBeforeShadow(i,M,T,b,k,B,null),i.renderBufferDirect(b,null,k,B,M,null),M.onAfterShadow(i,M,T,b,k,B,null)}}let N=M.children;for(let k=0,D=N.length;k<D;k++)_(N[k],T,b,E,R)}function v(M){M.target.removeEventListener("dispose",v);for(let b in l){let E=l[b],R=M.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function XE(i,e){function t(){let O=!1,Me=new wt,ne=null,Se=new wt(0,0,0,0);return{setMask:function(Re){ne!==Re&&!O&&(i.colorMask(Re,Re,Re,Re),ne=Re)},setLocked:function(Re){O=Re},setClear:function(Re,le,Xe,De,Wt){Wt===!0&&(Re*=De,le*=De,Xe*=De),Me.set(Re,le,Xe,De),Se.equals(Me)===!1&&(i.clearColor(Re,le,Xe,De),Se.copy(Me))},reset:function(){O=!1,ne=null,Se.set(-1,0,0,0)}}}function n(){let O=!1,Me=!1,ne=null,Se=null,Re=null;return{setReversed:function(le){if(Me!==le){let Xe=e.get("EXT_clip_control");le?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Me=le;let De=Re;Re=null,this.setClear(De)}},getReversed:function(){return Me},setTest:function(le){le?ee(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(le){ne!==le&&!O&&(i.depthMask(le),ne=le)},setFunc:function(le){if(Me&&(le=Pg[le]),Se!==le){switch(le){case Xc:i.depthFunc(i.NEVER);break;case Yc:i.depthFunc(i.ALWAYS);break;case $c:i.depthFunc(i.LESS);break;case So:i.depthFunc(i.LEQUAL);break;case Kc:i.depthFunc(i.EQUAL);break;case Zc:i.depthFunc(i.GEQUAL);break;case Jc:i.depthFunc(i.GREATER);break;case jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=le}},setLocked:function(le){O=le},setClear:function(le){Re!==le&&(Re=le,Me&&(le=1-le),i.clearDepth(le))},reset:function(){O=!1,ne=null,Se=null,Re=null,Me=!1}}}function s(){let O=!1,Me=null,ne=null,Se=null,Re=null,le=null,Xe=null,De=null,Wt=null;return{setTest:function(Nt){O||(Nt?ee(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Nt){Me!==Nt&&!O&&(i.stencilMask(Nt),Me=Nt)},setFunc:function(Nt,vi,Oi){(ne!==Nt||Se!==vi||Re!==Oi)&&(i.stencilFunc(Nt,vi,Oi),ne=Nt,Se=vi,Re=Oi)},setOp:function(Nt,vi,Oi){(le!==Nt||Xe!==vi||De!==Oi)&&(i.stencilOp(Nt,vi,Oi),le=Nt,Xe=vi,De=Oi)},setLocked:function(Nt){O=Nt},setClear:function(Nt){Wt!==Nt&&(i.clearStencil(Nt),Wt=Nt)},reset:function(){O=!1,Me=null,ne=null,Se=null,Re=null,le=null,Xe=null,De=null,Wt=null}}}let r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,_=null,v=null,M=null,T=null,b=new pe(0,0,0),E=0,R=!1,P=null,N=null,k=null,D=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,oe=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=oe>=2);let te=null,z={},ae=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),He=new wt().fromArray(ae),Ve=new wt().fromArray(ce);function tt(O,Me,ne,Se){let Re=new Uint8Array(4),le=i.createTexture();i.bindTexture(O,le),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<ne;Xe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(Me+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return le}let K={};K[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(So),fe(!1),xe(pd),ee(i.CULL_FACE),he(hi);function ee(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function ge(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function ke(O,Me){return f[O]!==Me?(i.bindFramebuffer(O,Me),f[O]=Me,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Me),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function ye(O,Me){let ne=p,Se=!1;if(O){ne=d.get(Me),ne===void 0&&(ne=[],d.set(Me,ne));let Re=O.textures;if(ne.length!==Re.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Xe=Re.length;le<Xe;le++)ne[le]=i.COLOR_ATTACHMENT0+le;ne.length=Re.length,Se=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,Se=!0);Se&&i.drawBuffers(ne)}function Ke(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let Et={[Ir]:i.FUNC_ADD,[j0]:i.FUNC_SUBTRACT,[Q0]:i.FUNC_REVERSE_SUBTRACT};Et[eg]=i.MIN,Et[tg]=i.MAX;let se={[ng]:i.ZERO,[ig]:i.ONE,[sg]:i.SRC_COLOR,[xd]:i.SRC_ALPHA,[hg]:i.SRC_ALPHA_SATURATE,[lg]:i.DST_COLOR,[og]:i.DST_ALPHA,[rg]:i.ONE_MINUS_SRC_COLOR,[_d]:i.ONE_MINUS_SRC_ALPHA,[cg]:i.ONE_MINUS_DST_COLOR,[ag]:i.ONE_MINUS_DST_ALPHA,[ug]:i.CONSTANT_COLOR,[fg]:i.ONE_MINUS_CONSTANT_COLOR,[dg]:i.CONSTANT_ALPHA,[pg]:i.ONE_MINUS_CONSTANT_ALPHA};function he(O,Me,ne,Se,Re,le,Xe,De,Wt,Nt){if(O===hi){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),O!==J0){if(O!==g||Nt!==R){if((y!==Ir||v!==Ir)&&(i.blendEquation(i.FUNC_ADD),y=Ir,v=Ir),Nt)switch(O){case Wo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case md:i.blendFunc(i.ONE,i.ONE);break;case gd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",O);break}else switch(O){case Wo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case md:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gd:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",O);break}w=null,_=null,M=null,T=null,b.set(0,0,0),E=0,g=O,R=Nt}return}Re=Re||Me,le=le||ne,Xe=Xe||Se,(Me!==y||Re!==v)&&(i.blendEquationSeparate(Et[Me],Et[Re]),y=Me,v=Re),(ne!==w||Se!==_||le!==M||Xe!==T)&&(i.blendFuncSeparate(se[ne],se[Se],se[le],se[Xe]),w=ne,_=Se,M=le,T=Xe),(De.equals(b)===!1||Wt!==E)&&(i.blendColor(De.r,De.g,De.b,Wt),b.copy(De),E=Wt),g=O,R=!1}function ue(O,Me){O.side===hn?ge(i.CULL_FACE):ee(i.CULL_FACE);let ne=O.side===Sn;Me&&(ne=!ne),fe(ne),O.blending===Wo&&O.transparent===!1?he(hi):he(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Se=O.stencilWrite;a.setTest(Se),Se&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ye(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function xe(O){O!==$0?(ee(i.CULL_FACE),O!==N&&(O===pd?i.cullFace(i.BACK):O===K0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),N=O}function Ze(O){O!==k&&($&&i.lineWidth(O),k=O)}function Ye(O,Me,ne){O?(ee(i.POLYGON_OFFSET_FILL),(D!==Me||B!==ne)&&(D=Me,B=ne,o.getReversed()&&(Me=-Me),i.polygonOffset(Me,ne))):ge(i.POLYGON_OFFSET_FILL)}function nt(O){O?ee(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function lt(O){O===void 0&&(O=i.TEXTURE0+X-1),te!==O&&(i.activeTexture(O),te=O)}function F(O,Me,ne){ne===void 0&&(te===null?ne=i.TEXTURE0+X-1:ne=te);let Se=z[ne];Se===void 0&&(Se={type:void 0,texture:void 0},z[ne]=Se),(Se.type!==O||Se.texture!==Me)&&(te!==ne&&(i.activeTexture(ne),te=ne),i.bindTexture(O,Me||K[O]),Se.type=O,Se.texture=Me)}function Lt(){let O=z[te];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function yt(){try{i.compressedTexImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function S(){try{i.texSubImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function de(){try{i.texStorage2D(...arguments)}catch(O){je("WebGLState:",O)}}function me(){try{i.texStorage3D(...arguments)}catch(O){je("WebGLState:",O)}}function j(){try{i.texImage2D(...arguments)}catch(O){je("WebGLState:",O)}}function ie(){try{i.texImage3D(...arguments)}catch(O){je("WebGLState:",O)}}function ve(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function Ge(O,Me){u[O]!==Me&&(i.pixelStorei(O,Me),u[O]=Me)}function we(O){He.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),He.copy(O))}function be(O){Ve.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ve.copy(O))}function We(O,Me){let ne=l.get(Me);ne===void 0&&(ne=new WeakMap,l.set(Me,ne));let Se=ne.get(O);Se===void 0&&(Se=i.getUniformBlockIndex(Me,O.name),ne.set(O,Se))}function Je(O,Me){let Se=l.get(Me).get(O);c.get(Me)!==Se&&(i.uniformBlockBinding(Me,Se,O.__bindingPointIndex),c.set(Me,Se))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,z={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,_=null,v=null,M=null,T=null,b=new pe(0,0,0),E=0,R=!1,P=null,N=null,k=null,D=null,B=null,He.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:ge,bindFramebuffer:ke,drawBuffers:ye,useProgram:Ke,setBlending:he,setMaterial:ue,setFlipSided:fe,setCullFace:xe,setLineWidth:Ze,setPolygonOffset:Ye,setScissorTest:nt,activeTexture:lt,bindTexture:F,unbindTexture:Lt,compressedTexImage2D:yt,compressedTexImage3D:C,texImage2D:j,texImage3D:ie,pixelStorei:Ge,getParameter:ve,updateUBOMapping:We,uniformBlockBinding:Je,texStorage2D:de,texStorage3D:me,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:we,viewport:be,reset:ut}}function YE(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return p?new OffscreenCanvas(C,S):To("canvas")}function m(C,S,H){let q=1,J=yt(C);if((J.width>H||J.height>H)&&(q=H/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let de=Math.floor(q*J.width),me=Math.floor(q*J.height);f===void 0&&(f=x(de,me));let j=S?x(de,me):f;return j.width=de,j.height=me,j.getContext("2d").drawImage(C,0,0,de,me),Fe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+de+"x"+me+")."),j}else return"data"in C&&Fe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(C,S,H,q,J,de=!1){if(C!==null){if(i[C]!==void 0)return i[C];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me;q&&(me=e.get("EXT_texture_norm16"),me||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8),H===i.UNSIGNED_SHORT&&me&&(j=me.R16_EXT),H===i.SHORT&&me&&(j=me.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),S===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8),H===i.UNSIGNED_SHORT&&me&&(j=me.RG16_EXT),H===i.SHORT&&me&&(j=me.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&me&&(j=me.RGB16_EXT),H===i.SHORT&&me&&(j=me.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),S===i.RGBA){let ie=de?Ha:ft.getTransfer(J);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=ie===Tt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&me&&(j=me.RGBA16_EXT),H===i.SHORT&&me&&(j=me.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(C,S){let H;return C?S===null||S===Ri||S===Yo?H=i.DEPTH24_STENCIL8:S===jn?H=i.DEPTH32F_STENCIL8:S===Xo&&(H=i.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ri||S===Yo?H=i.DEPTH_COMPONENT24:S===jn?H=i.DEPTH_COMPONENT32F:S===Xo&&(H=i.DEPTH_COMPONENT16),H}function M(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==nn&&C.minFilter!==$t?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){let S=C.target;S.removeEventListener("dispose",T),E(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function b(C){let S=C.target;S.removeEventListener("dispose",b),P(S)}function E(C){let S=n.get(C);if(S.__webglInit===void 0)return;let H=C.source,q=d.get(H);if(q){let J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(q).length===0&&d.delete(H)}n.remove(C)}function R(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let H=C.source,q=d.get(H);delete q[S.__cacheKey],o.memory.textures--}function P(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[q][J]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let H=C.textures;for(let q=0,J=H.length;q<J;q++){let de=n.get(H[q]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(C)}let N=0;function k(){N=0}function D(){return N}function B(C){N=C}function X(){let C=N;return C>=s.maxTextures&&Fe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function $(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function oe(C,S){let H=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let q=C.image;if(q===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,C,S);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function Z(C,S){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){ge(H,C,S);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function te(C,S){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){ge(H,C,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function z(C,S){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){ke(H,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}let ae={[ai]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},ce={[nn]:i.NEAREST,[Ah]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[$t]:i.LINEAR,[qo]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},He={[Mg]:i.NEVER,[Ag]:i.ALWAYS,[Sg]:i.LESS,[uu]:i.LEQUAL,[wg]:i.EQUAL,[fu]:i.GEQUAL,[Eg]:i.GREATER,[Tg]:i.NOTEQUAL};function Ve(C,S){if(S.type===jn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===$t||S.magFilter===qo||S.magFilter===Nr||S.magFilter===Jn||S.minFilter===$t||S.minFilter===qo||S.minFilter===Nr||S.minFilter===Jn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ae[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ae[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ae[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ce[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,He[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Nr&&S.minFilter!==Jn||S.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function tt(C,S){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));let q=S.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let de=$(S);if(de!==C.__cacheKey){J[de]===void 0&&(J[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[de].usedTimes++;let me=J[C.__cacheKey];me!==void 0&&(J[C.__cacheKey].usedTimes--,me.usedTimes===0&&R(S)),C.__cacheKey=de,C.__webglTexture=J[de].texture}return H}function K(C,S,H){return Math.floor(Math.floor(C/H)/S)}function ee(C,S,H,q){let de=C.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,q,S.data);else{de.sort((Ge,we)=>Ge.start-we.start);let me=0;for(let Ge=1;Ge<de.length;Ge++){let we=de[me],be=de[Ge],We=we.start+we.count,Je=K(be.start,S.width,4),ut=K(we.start,S.width,4);be.start<=We+1&&Je===ut&&K(be.start+be.count-1,S.width,4)===Je?we.count=Math.max(we.count,be.start+be.count-we.start):(++me,de[me]=be)}de.length=me+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ge=0,we=de.length;Ge<we;Ge++){let be=de[Ge],We=Math.floor(be.start/4),Je=Math.ceil(be.count/4),ut=We%S.width,O=Math.floor(We/S.width),Me=Je,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,ut,O,Me,ne,H,q,S.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function ge(C,S,H){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);let J=tt(C,S),de=S.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+H);let me=n.get(de);if(de.version!==me.__version||J===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ne=ft.getPrimaries(ft.workingColorSpace),Se=S.colorSpace===xs?null:ft.getPrimaries(S.colorSpace),Re=S.colorSpace===xs||ne===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=m(S.image,!1,s.maxTextureSize);ie=Lt(S,ie);let ve=r.convert(S.format,S.colorSpace),Ge=r.convert(S.type),we=_(S.internalFormat,ve,Ge,S.normalized,S.colorSpace,S.isVideoTexture);Ve(q,S);let be,We=S.mipmaps,Je=S.isVideoTexture!==!0,ut=me.__version===void 0||J===!0,O=de.dataReady,Me=M(S,ie);if(S.isDepthTexture)we=v(S.format===Ws,S.type),ut&&(Je?t.texStorage2D(i.TEXTURE_2D,1,we,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,ve,Ge,null));else if(S.isDataTexture)if(We.length>0){Je&&ut&&t.texStorage2D(i.TEXTURE_2D,Me,we,We[0].width,We[0].height);for(let ne=0,Se=We.length;ne<Se;ne++)be=We[ne],Je?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,be.width,be.height,ve,Ge,be.data):t.texImage2D(i.TEXTURE_2D,ne,we,be.width,be.height,0,ve,Ge,be.data);S.generateMipmaps=!1}else Je?(ut&&t.texStorage2D(i.TEXTURE_2D,Me,we,ie.width,ie.height),O&&ee(S,ie,ve,Ge)):t.texImage2D(i.TEXTURE_2D,0,we,ie.width,ie.height,0,ve,Ge,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Je&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,we,We[0].width,We[0].height,ie.depth);for(let ne=0,Se=We.length;ne<Se;ne++)if(be=We[ne],S.format!==Qn)if(ve!==null)if(Je){if(O)if(S.layerUpdates.size>0){let Re=Dd(be.width,be.height,S.format,S.type);for(let le of S.layerUpdates){let Xe=be.data.subarray(le*Re/be.data.BYTES_PER_ELEMENT,(le+1)*Re/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,le,be.width,be.height,1,ve,Xe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,ie.depth,ve,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,we,be.width,be.height,ie.depth,0,be.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,be.width,be.height,ie.depth,ve,Ge,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,we,be.width,be.height,ie.depth,0,ve,Ge,be.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Je&&ut&&t.texStorage2D(i.TEXTURE_2D,Me,we,We[0].width,We[0].height);for(let ne=0,Se=We.length;ne<Se;ne++)be=We[ne],S.format!==Qn?ve!==null?Je?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,we,be.width,be.height,0,be.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,be.width,be.height,ve,Ge,be.data):t.texImage2D(i.TEXTURE_2D,ne,we,be.width,be.height,0,ve,Ge,be.data)}else if(S.isDataArrayTexture)if(Je){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,we,ie.width,ie.height,ie.depth),O)if(S.layerUpdates.size>0){let ne=Dd(ie.width,ie.height,S.format,S.type);for(let Se of S.layerUpdates){let Re=ie.data.subarray(Se*ne/ie.data.BYTES_PER_ELEMENT,(Se+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,ie.width,ie.height,1,ve,Ge,Re)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ge,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ie.width,ie.height,ie.depth,0,ve,Ge,ie.data);else if(S.isData3DTexture)Je?(ut&&t.texStorage3D(i.TEXTURE_3D,Me,we,ie.width,ie.height,ie.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ge,ie.data)):t.texImage3D(i.TEXTURE_3D,0,we,ie.width,ie.height,ie.depth,0,ve,Ge,ie.data);else if(S.isFramebufferTexture){if(ut)if(Je)t.texStorage2D(i.TEXTURE_2D,Me,we,ie.width,ie.height);else{let ne=ie.width,Se=ie.height;for(let Re=0;Re<Me;Re++)t.texImage2D(i.TEXTURE_2D,Re,we,ne,Se,0,ve,Ge,null),ne>>=1,Se>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),u.add(S),ne.onpaint=Se=>{let Re=Se.changedElements;for(let le of u)Re.includes(le.image)&&(le.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Re=i.RGBA,le=i.RGBA,Xe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Re,le,Xe,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(We.length>0){if(Je&&ut){let ne=yt(We[0]);t.texStorage2D(i.TEXTURE_2D,Me,we,ne.width,ne.height)}for(let ne=0,Se=We.length;ne<Se;ne++)be=We[ne],Je?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ve,Ge,be):t.texImage2D(i.TEXTURE_2D,ne,we,ve,Ge,be);S.generateMipmaps=!1}else if(Je){if(ut){let ne=yt(ie);t.texStorage2D(i.TEXTURE_2D,Me,we,ne.width,ne.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ge,ie)}else t.texImage2D(i.TEXTURE_2D,0,we,ve,Ge,ie);g(S)&&y(q),me.__version=de.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ke(C,S,H){if(S.image.length!==6)return;let q=tt(C,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let de=n.get(J);if(J.version!==de.__version||q===!0){t.activeTexture(i.TEXTURE0+H);let me=ft.getPrimaries(ft.workingColorSpace),j=S.colorSpace===xs?null:ft.getPrimaries(S.colorSpace),ie=S.colorSpace===xs||me===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ve=S.isCompressedTexture||S.image[0].isCompressedTexture,Ge=S.image[0]&&S.image[0].isDataTexture,we=[];for(let le=0;le<6;le++)!ve&&!Ge?we[le]=m(S.image[le],!0,s.maxCubemapSize):we[le]=Ge?S.image[le].image:S.image[le],we[le]=Lt(S,we[le]);let be=we[0],We=r.convert(S.format,S.colorSpace),Je=r.convert(S.type),ut=_(S.internalFormat,We,Je,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,Me=de.__version===void 0||q===!0,ne=J.dataReady,Se=M(S,be);Ve(i.TEXTURE_CUBE_MAP,S);let Re;if(ve){O&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,ut,be.width,be.height);for(let le=0;le<6;le++){Re=we[le].mipmaps;for(let Xe=0;Xe<Re.length;Xe++){let De=Re[Xe];S.format!==Qn?We!==null?O?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe,0,0,De.width,De.height,We,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe,ut,De.width,De.height,0,De.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe,0,0,De.width,De.height,We,Je,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe,ut,De.width,De.height,0,We,Je,De.data)}}}else{if(Re=S.mipmaps,O&&Me){Re.length>0&&Se++;let le=yt(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,ut,le.width,le.height)}for(let le=0;le<6;le++)if(Ge){O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,we[le].width,we[le].height,We,Je,we[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ut,we[le].width,we[le].height,0,We,Je,we[le].data);for(let Xe=0;Xe<Re.length;Xe++){let Wt=Re[Xe].image[le].image;O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe+1,0,0,Wt.width,Wt.height,We,Je,Wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe+1,ut,Wt.width,Wt.height,0,We,Je,Wt.data)}}else{O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,We,Je,we[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ut,We,Je,we[le]);for(let Xe=0;Xe<Re.length;Xe++){let De=Re[Xe];O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe+1,0,0,We,Je,De.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Xe+1,ut,We,Je,De.image[le])}}}g(S)&&y(i.TEXTURE_CUBE_MAP),de.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ye(C,S,H,q,J,de){let me=r.convert(H.format,H.colorSpace),j=r.convert(H.type),ie=_(H.internalFormat,me,j,H.normalized,H.colorSpace),ve=n.get(S),Ge=n.get(H);if(Ge.__renderTarget=S,!ve.__hasExternalTextures){let we=Math.max(1,S.width>>de),be=Math.max(1,S.height>>de);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,de,ie,we,be,S.depth,0,me,j,null):t.texImage2D(J,de,ie,we,be,0,me,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),lt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,Ge.__webglTexture,0,nt(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,Ge.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(C,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,de=v(S.stencilBuffer,J),me=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;lt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(S),de,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(S),de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,C)}else{let q=S.textures;for(let J=0;J<q.length;J++){let de=q[J],me=r.convert(de.format,de.colorSpace),j=r.convert(de.type),ie=_(de.internalFormat,me,j,de.normalized,de.colorSpace);lt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt(S),ie,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt(S),ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(C,S,H){let q=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",T)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,S.depthTexture);let ve=r.convert(S.depthTexture.format),Ge=r.convert(S.depthTexture.type),we;S.depthTexture.format===Vi?we=i.DEPTH_COMPONENT24:S.depthTexture.format===Ws&&(we=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,we,S.width,S.height,0,ve,Ge,null)}}else oe(S.depthTexture,0);let de=J.__webglTexture,me=nt(S),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ie=S.depthTexture.format===Ws?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Vi)lt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,de,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,de,0);else if(S.depthTexture.format===Ws)lt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,de,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){let S=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)Et(S.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?Et(S.__webglFramebuffer[0],C,0):Et(S.__webglFramebuffer,C,0)}else if(H){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Ke(S.__webglDepthbuffer[q],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,de)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ke(S.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(C,S,H){let q=n.get(C);S!==void 0&&ye(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&se(C)}function ue(C){let S=C.texture,H=n.get(C),q=n.get(S);C.addEventListener("dispose",b);let J=C.textures,de=C.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),de){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let ie=0;ie<S.mipmaps.length;ie++)H.__webglFramebuffer[j][ie]=i.createFramebuffer()}else H.__webglFramebuffer[j]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)H.__webglFramebuffer[j]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(me)for(let j=0,ie=J.length;j<ie;j++){let ve=n.get(J[j]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&lt(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let ie=J[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let ve=r.convert(ie.format,ie.colorSpace),Ge=r.convert(ie.type),we=_(ie.internalFormat,ve,Ge,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),be=nt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,we,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)ye(H.__webglFramebuffer[j][ie],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else ye(H.__webglFramebuffer[j],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(S)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let j=0,ie=J.length;j<ie;j++){let ve=J[j],Ge=n.get(ve),we=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(we=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,Ge.__webglTexture),Ve(we,ve),ye(H.__webglFramebuffer,C,ve,i.COLOR_ATTACHMENT0+j,we,0),g(ve)&&y(we)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Ve(j,S),S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)ye(H.__webglFramebuffer[ie],C,S,i.COLOR_ATTACHMENT0,j,ie);else ye(H.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,j,0);g(S)&&y(j),t.unbindTexture()}C.depthBuffer&&se(C)}function fe(C){let S=C.textures;for(let H=0,q=S.length;H<q;H++){let J=S[H];if(g(J)){let de=w(C),me=n.get(J).__webglTexture;t.bindTexture(de,me),y(de),t.unbindTexture()}}}let xe=[],Ze=[];function Ye(C){if(C.samples>0){if(lt(C)===!1){let S=C.textures,H=C.width,q=C.height,J=i.COLOR_BUFFER_BIT,de=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(C),j=S.length>1;if(j)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ie=C.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let Ge=n.get(S[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,J,i.NEAREST),c===!0&&(xe.length=0,Ze.length=0,xe.push(i.COLOR_ATTACHMENT0+ve),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(xe.push(de),Ze.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,me.__webglColorRenderbuffer[ve]);let Ge=n.get(S[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function nt(C){return Math.min(s.maxSamples,C.samples)}function lt(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function F(C){let S=o.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Lt(C,S){let H=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Mn&&H!==xs&&(ft.getTransfer(H)===Tt?(q!==Qn||J!==Vn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",H)),S}function yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=te,this.setTextureCube=z,this.rebindTextures=he,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $E(i,e){function t(n,s=xs){let r,o=ft.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Ch)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ih)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vd)return i.BYTE;if(n===bd)return i.SHORT;if(n===Xo)return i.UNSIGNED_SHORT;if(n===Rh)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===wd)return i.ALPHA;if(n===Ed)return i.RGB;if(n===Qn)return i.RGBA;if(n===Vi)return i.DEPTH_COMPONENT;if(n===Ws)return i.DEPTH_STENCIL;if(n===Ph)return i.RED;if(n===Lh)return i.RED_INTEGER;if(n===qs)return i.RG;if(n===Nh)return i.RG_INTEGER;if(n===Dh)return i.RGBA_INTEGER;if(n===Il||n===Pl||n===Ll||n===Nl)if(o===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Il)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ll)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Il)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ll)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fh||n===Uh||n===Oh||n===Bh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kh||n===zh||n===Hh||n===Vh||n===Gh||n===Dl||n===Wh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kh||n===zh)return o===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vh)return r.COMPRESSED_R11_EAC;if(n===Gh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Dl)return r.COMPRESSED_RG11_EAC;if(n===Wh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===qh||n===Xh||n===Yh||n===$h||n===Kh||n===Zh||n===Jh||n===jh||n===Qh||n===eu||n===tu||n===nu||n===iu||n===su)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Jh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qh)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===su)return o===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ru||n===ou||n===au)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ru)return o===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ou)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===cu||n===Fl||n===hu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===lu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===cu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZE=`
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

}`,Qd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dn({vertexShader:KE,fragmentShader:ZE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ie(new jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ep=class extends Gi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new Qd,g={},y=t.getContextAttributes(),w=null,_=null,v=[],M=[],T=new Q,b=null,E=null,R=new _n;R.viewport=new wt;let P=new _n;P.viewport=new wt;let N=[R,P],k=new Mh,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ee=v[K];return ee===void 0&&(ee=new Io,v[K]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(K){let ee=v[K];return ee===void 0&&(ee=new Io,v[K]=ee),ee.getGripSpace()},this.getHand=function(K){let ee=v[K];return ee===void 0&&(ee=new Io,v[K]=ee),ee.getHandSpace()};function X(K){let ee=M.indexOf(K.inputSource);if(ee===-1)return;let ge=v[ee];ge!==void 0&&(ge.update(K.inputSource,K.frame,l||o),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",oe);for(let K=0;K<v.length;K++){let ee=M[K];ee!==null&&(M[K]=null,v[K].disconnect(ee))}D=null,B=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(w),d=null,f=null,u=null,s=null,_=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(T.width,T.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ke=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?Ws:Vi,ke=y.stencil?Yo:Ri);let Ke={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Jt(f.textureWidth,f.textureHeight,{format:Qn,type:Vn,depthTexture:new ks(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Jt(d.framebufferWidth,d.framebufferHeight,{format:Qn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(K){for(let ee=0;ee<K.removed.length;ee++){let ge=K.removed[ee],ke=M.indexOf(ge);ke>=0&&(M[ke]=null,v[ke].disconnect(ge))}for(let ee=0;ee<K.added.length;ee++){let ge=K.added[ee],ke=M.indexOf(ge);if(ke===-1){for(let Ke=0;Ke<v.length;Ke++)if(Ke>=M.length){M.push(ge),ke=Ke;break}else if(M[Ke]===null){M[Ke]=ge,ke=Ke;break}if(ke===-1)break}let ye=v[ke];ye&&ye.connect(ge)}}let Z=new I,te=new I;function z(K,ee,ge){Z.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(ge.matrixWorld);let ke=Z.distanceTo(te),ye=ee.projectionMatrix.elements,Ke=ge.projectionMatrix.elements,Et=ye[14]/(ye[10]-1),se=ye[14]/(ye[10]+1),he=(ye[9]+1)/ye[5],ue=(ye[9]-1)/ye[5],fe=(ye[8]-1)/ye[0],xe=(Ke[8]+1)/Ke[0],Ze=Et*fe,Ye=Et*xe,nt=ke/(-fe+xe),lt=nt*-fe;if(ee.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(lt),K.translateZ(nt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ye[10]===-1)K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let F=Et+nt,Lt=se+nt,yt=Ze-lt,C=Ye+(ke-lt),S=he*se/Lt*F,H=ue*se/Lt*F;K.projectionMatrix.makePerspective(yt,C,S,H,F,Lt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,ee){ee===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ee.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ee=K.near,ge=K.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),k.near=P.near=R.near=ee,k.far=P.far=R.far=ge,(D!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,B=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let ke=K.parent,ye=k.cameras;ae(k,ke);for(let Ke=0;Ke<ye.length;Ke++)ae(ye[Ke],ke);ye.length===2?z(k,R,P):k.projectionMatrix.copy(R.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),ce(K,k,ke)};function ce(K,ee,ge){ge===null?K.matrix.copy(ee.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(ee.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ee.projectionMatrix),K.projectionMatrixInverse.copy(ee.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_r*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(K){c=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return g[K]};let He=null;function Ve(K,ee){if(h=ee.getViewerPose(l||o),p=ee,h!==null){let ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ke=!1;ge.length!==k.cameras.length&&(k.cameras.length=0,ke=!0);for(let se=0;se<ge.length;se++){let he=ge[se],ue=null;if(d!==null)ue=d.getViewport(he);else{let xe=u.getViewSubImage(f,he);ue=xe.viewport,se===0&&(e.setRenderTargetTextures(_,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(_))}let fe=N[se];fe===void 0&&(fe=new _n,fe.layers.enable(se),fe.viewport=new wt,N[se]=fe),fe.matrix.fromArray(he.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(he.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ue.x,ue.y,ue.width,ue.height),se===0&&(k.matrix.copy(fe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ke===!0&&k.cameras.push(fe)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let se=u.getDepthInformation(ge[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let se=0;se<ge.length;se++){let he=ge[se].camera;if(he){let ue=g[he];ue||(ue=new Qa,g[he]=ue);let fe=u.getCameraImage(he);ue.sourceTexture=fe}}}}for(let ge=0;ge<v.length;ge++){let ke=M[ge],ye=v[ge];ke!==null&&ye!==void 0&&ye.update(ke,ee,l||o)}He&&He(K,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let tt=new ax;tt.setAnimationLoop(Ve),this.setAnimationLoop=function(K){He=K},this.dispose=function(){}}},JE=new Qe,dx=new ot;dx.set(-1,0,0,0,1,0,0,0,1);function jE(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Pd(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,y,w):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Sn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Sn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,_=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(JE.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Sn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function QE(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,v){let M=v.program;n.uniformBlockBinding(_,M)}function l(_,v){let M=s[_.id];M===void 0&&(m(_),M=h(_),s[_.id]=M,_.addEventListener("dispose",y));let T=v.program;n.updateUBOMapping(_,T);let b=e.render.frame;r[_.id]!==b&&(f(_),r[_.id]=b)}function h(_){let v=u();_.__bindingPointIndex=v;let M=i.createBuffer(),T=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let v=s[_.id],M=_.uniforms,T=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,E=M.length;b<E;b++){let R=M[b];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)d(R[P],b,P,T);else d(R,b,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,v,M,T){if(x(_,v,M,T)===!0){let b=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let N=E[P],k=g(N);p(N,_.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function p(_,v,M){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,M)}function x(_,v,M,T){let b=_.value,E=v+"_"+M;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:ArrayBuffer.isView(b)?T[E]=b.slice():T[E]=b.clone(),!0;{let R=T[E];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return T[E]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function m(_){let v=_.uniforms,M=0,T=16;for(let E=0,R=v.length;E<R;E++){let P=Array.isArray(v[E])?v[E]:[v[E]];for(let N=0,k=P.length;N<k;N++){let D=P[N],B=Array.isArray(D.value)?D.value:[D.value];for(let X=0,$=B.length;X<$;X++){let oe=B[X],Z=g(oe),te=M%T,z=te%Z.boundary,ae=te+z;M+=z,ae!==0&&T-ae<Z.storage&&(M+=T-ae),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=Z.storage}}}let b=M%T;return b>0&&(M+=T-b),_.__size=M,_.__cache={},this}function g(_){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",_),v}function y(_){let v=_.target;v.removeEventListener("dispose",y);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function w(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}var eT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function tT(){return Yi===null&&(Yi=new No(eT,16,16,qs,un),Yi.name="DFG_LUT",Yi.minFilter=$t,Yi.magFilter=$t,Yi.wrapS=ri,Yi.wrapT=ri,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var gu=class{constructor(e={}){let{canvas:t=Rg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Vn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([Dh,Nh,Lh]),g=new Set([Vn,Ri,Xo,Yo,Ch,Ih]),y=new Uint32Array(4),w=new Int32Array(4),_=new I,v=null,M=null,T=[],b=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,k=null,D=null,B=null;this._outputColorSpace=dt;let X=0,$=0,oe=null,Z=-1,te=null,z=new wt,ae=new wt,ce=null,He=new pe(0),Ve=0,tt=t.width,K=t.height,ee=1,ge=null,ke=null,ye=new wt(0,0,tt,K),Ke=new wt(0,0,tt,K),Et=!1,se=new Do,he=!1,ue=!1,fe=new Qe,xe=new I,Ze=new wt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function lt(){return oe===null?ee:1}let F=n;function Lt(A,U){return t.getContext(A,U)}let yt,C,S,H,q,J,de,me,j,ie,ve,Ge,we,be,We,Je,ut,O,Me,ne,Se,Re,le;try{let A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Wt,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",vi,!1),F===null){let U="webgl2";if(F=Lt(U,A),F===null)throw Lt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xe()}catch(A){throw t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",vi,!1),je("WebGLRenderer: "+A.message),A}function Xe(){yt=new lw(F),yt.init(),Se=new $E(F,yt),C=new j1(F,yt,e,Se),S=new XE(F,yt),C.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),k=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),H=new uw(F),q=new LE,J=new YE(F,yt,S,q,C,Se,H),de=new aw(R),me=new dM(F),Re=new Z1(F,me),j=new cw(F,me,H,Re),ie=new dw(F,j,me,Re,H),O=new fw(F,C,J),We=new Q1(q),ve=new PE(R,de,yt,C,Re,We),Ge=new jE(R,q),we=new DE,be=new zE(yt),ut=new K1(R,de,S,ie,p,c),Je=new qE(R,ie,C),le=new QE(F,H,C,S),Me=new J1(F,yt,H),ne=new hw(F,yt,H),H.programs=ve.programs,R.capabilities=C,R.extensions=yt,R.properties=q,R.renderLists=we,R.shadowMap=Je,R.state=S,R.info=H}x!==Vn&&(E=new mw(x,t.width,t.height,a,s,r));let De=new ep(R,F);this.xr=De,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(tt,K,!1))},this.getSize=function(A){return A.set(tt,K)},this.setSize=function(A,U,Y=!0){if(De.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=A,K=U,t.width=Math.floor(A*ee),t.height=Math.floor(U*ee),Y===!0&&(t.style.width=A+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(tt*ee,K*ee).floor()},this.setDrawingBufferSize=function(A,U,Y){tt=A,K=U,ee=Y,t.width=Math.floor(A*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,A,U)},this.setEffects=function(A){if(x===Vn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let U=0;U<A.length;U++)if(A[U].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,U,Y,G){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,U,Y,G),S.viewport(z.copy(ye).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(Ke)},this.setScissor=function(A,U,Y,G){A.isVector4?Ke.set(A.x,A.y,A.z,A.w):Ke.set(A,U,Y,G),S.scissor(ae.copy(Ke).multiplyScalar(ee).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(A){S.setScissorTest(Et=A)},this.setOpaqueSort=function(A){ge=A},this.setTransparentSort=function(A){ke=A},this.getClearColor=function(A){return A.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(A=!0,U=!0,Y=!0){let G=0;if(A){let W=!1;if(oe!==null){let Ae=oe.texture.format;W=m.has(Ae)}if(W){let Ae=oe.texture.type,Pe=g.has(Ae),Te=ut.getClearColor(),Le=ut.getClearAlpha(),Be=Te.r,mt=Te.g,vt=Te.b;Pe?(y[0]=Be,y[1]=mt,y[2]=vt,y[3]=Le,F.clearBufferuiv(F.COLOR,0,y)):(w[0]=Be,w[1]=mt,w[2]=vt,w[3]=Le,F.clearBufferiv(F.COLOR,0,w))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Wt,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",vi,!1),ut.dispose(),we.dispose(),be.dispose(),q.dispose(),de.dispose(),ie.dispose(),Re.dispose(),le.dispose(),ve.dispose(),De.dispose(),De.removeEventListener("sessionstart",Xm),De.removeEventListener("sessionend",Ym),hr.stop()};function Wt(A){A.preventDefault(),Va("WebGLRenderer: Context Lost."),P=!0}function Nt(){Va("WebGLRenderer: Context Restored."),P=!1;let A=H.autoReset,U=Je.enabled,Y=Je.autoUpdate,G=Je.needsUpdate,W=Je.type;Xe(),H.autoReset=A,Je.enabled=U,Je.autoUpdate=Y,Je.needsUpdate=G,Je.type=W}function vi(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oi(A){let U=A.target;U.removeEventListener("dispose",Oi),Rv(U)}function Rv(A){Cv(A),q.remove(A)}function Cv(A){let U=q.get(A).programs;U!==void 0&&(U.forEach(function(Y){ve.releaseProgram(Y)}),A.isShaderMaterial&&ve.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,Y,G,W,Ae){U===null&&(U=Ye);let Pe=W.isMesh&&W.matrixWorld.determinantAffine()<0,Te=Lv(A,U,Y,G,W);S.setMaterial(G,Pe);let Le=Y.index,Be=1;if(G.wireframe===!0){if(Le=j.getWireframeAttribute(Y),Le===void 0)return;Be=2}let mt=Y.drawRange,vt=Y.attributes.position,Ne=mt.start*Be,Dt=(mt.start+mt.count)*Be;Ae!==null&&(Ne=Math.max(Ne,Ae.start*Be),Dt=Math.min(Dt,(Ae.start+Ae.count)*Be)),Le!==null?(Ne=Math.max(Ne,0),Dt=Math.min(Dt,Le.count)):vt!=null&&(Ne=Math.max(Ne,0),Dt=Math.min(Dt,vt.count));let ln=Dt-Ne;if(ln<0||ln===1/0)return;Re.setup(W,G,Te,Y,Le);let Xt,Ht=Me;if(Le!==null&&(Xt=me.get(Le),Ht=ne,Ht.setIndex(Xt)),W.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*lt()),Ht.setMode(F.LINES)):Ht.setMode(F.TRIANGLES);else if(W.isLine){let An=G.linewidth;An===void 0&&(An=1),S.setLineWidth(An*lt()),W.isLineSegments?Ht.setMode(F.LINES):W.isLineLoop?Ht.setMode(F.LINE_LOOP):Ht.setMode(F.LINE_STRIP)}else W.isPoints?Ht.setMode(F.POINTS):W.isSprite&&Ht.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let An=W._multiDrawStarts,Ce=W._multiDrawCounts,Un=W._multiDrawCount,St=Le?me.get(Le).bytesPerElement:1,ii=q.get(G).currentProgram.getUniforms();for(let Bi=0;Bi<Un;Bi++)ii.setValue(F,"_gl_DrawID",Bi),Ht.render(An[Bi]/St,Ce[Bi])}else if(W.isInstancedMesh)Ht.renderInstances(Ne,ln,W.count);else if(Y.isInstancedBufferGeometry){let An=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ce=Math.min(Y.instanceCount,An);Ht.renderInstances(Ne,ln,Ce)}else Ht.render(Ne,ln)};function qm(A,U,Y,G){N!==null&&A.isNodeMaterial&&N.setObject(G,A),he===!0&&We.setState(A,Y,!1),A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,fc(A,U,G),A.side=ci,A.needsUpdate=!0,fc(A,U,G),A.side=hn):fc(A,U,G)}this.compile=function(A,U,Y=null){Y===null&&(Y=A),N!==null&&N.renderStart(A,U,Y),M=be.get(Y),M.init(U),b.push(M),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),A!==Y&&A.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),N!==null&&N.updateLights(M.state.lightsArray),ue=this.localClippingEnabled,he=We.init(this.clippingPlanes,ue),he===!0&&We.setGlobalState(this.clippingPlanes,U),N!==null&&Je.render(M.state.shadowsArray,Y,U);let G=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ae=W.material;if(Ae)if(Array.isArray(Ae))for(let Pe=0;Pe<Ae.length;Pe++){let Te=Ae[Pe];qm(Te,Y,U,W),G.add(Te)}else qm(Ae,Y,U,W),G.add(Ae)}),M=b.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(A,U,Y=null){let G=this.compile(A,U,Y);return new Promise(W=>{function Ae(){if(G.forEach(function(Pe){let Le=q.get(Pe).currentProgram;(Le===void 0||Le.isReady())&&G.delete(Pe)}),G.size===0){W(A);return}setTimeout(Ae,10)}yt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let bf=null;function Iv(A){bf&&bf(A)}function Xm(){hr.stop()}function Ym(){hr.start()}let hr=new ax;hr.setAnimationLoop(Iv),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(A){bf=A,De.setAnimationLoop(A),A===null?hr.stop():hr.start()},De.addEventListener("sessionstart",Xm),De.addEventListener("sessionend",Ym),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(A,U);let Y=De.enabled===!0&&De.isPresenting===!0,G=E!==null&&(oe===null||Y)&&E.begin(R,oe);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(U),U=De.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,U,oe),M=be.get(A,b.length),M.init(U),M.state.textureUnits=J.getTextureUnits(),b.push(M),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(fe,Ei,U.reversedDepth),ue=this.localClippingEnabled,he=We.init(this.clippingPlanes,ue),v=we.get(A,T.length),v.init(),T.push(v),De.enabled===!0&&De.isPresenting===!0){let Pe=R.xr.getDepthSensingMesh();Pe!==null&&Mf(Pe,U,-1/0,R.sortObjects)}Mf(A,U,0,R.sortObjects),v.finish(),N!==null&&N.updateLights(M.state.lightsArray),R.sortObjects===!0&&v.sort(ge,ke),nt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,nt&&ut.addToRenderList(v,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&We.beginShadows();let W=M.state.shadowsArray;if(Je.render(W,A,U),he===!0&&We.endShadows(),(G&&E.hasRenderPass())===!1){let Pe=v.opaque,Te=v.transmissive;if(M.setupLights(),U.isArrayCamera){let Le=U.cameras;if(Te.length>0)for(let Be=0,mt=Le.length;Be<mt;Be++){let vt=Le[Be];Km(Pe,Te,A,vt)}nt&&ut.render(A);for(let Be=0,mt=Le.length;Be<mt;Be++){let vt=Le[Be];$m(v,A,vt,vt.viewport)}}else Te.length>0&&Km(Pe,Te,A,U),nt&&ut.render(A),$m(v,A,U)}oe!==null&&$===0&&(J.updateMultisampleRenderTarget(oe),J.updateRenderTargetMipmap(oe)),G&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,U),Re.resetDefaultState(),Z=-1,te=null,b.pop(),b.length>0?(M=b[b.length-1],J.setTextureUnits(M.state.textureUnits),he===!0&&We.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?v=T[T.length-1]:v=null,N!==null&&N.renderEnd()};function Mf(A,U,Y,G){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(se)){G&&Ze.setFromMatrixPosition(A.matrixWorld).applyMatrix4(fe);let Pe=ie.update(A),Te=A.material;Te.visible&&v.push(A,Pe,Te,Y,Ze.z,null,U)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(se))){let Pe=ie.update(A),Te=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ze.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Ze.copy(Pe.boundingSphere.center)),Ze.applyMatrix4(A.matrixWorld).applyMatrix4(fe)),Array.isArray(Te)){let Le=Pe.groups;for(let Be=0,mt=Le.length;Be<mt;Be++){let vt=Le[Be],Ne=Te[vt.materialIndex];Ne&&Ne.visible&&v.push(A,Pe,Ne,Y,Ze.z,vt,U)}}else Te.visible&&v.push(A,Pe,Te,Y,Ze.z,null,U)}}let Ae=A.children;for(let Pe=0,Te=Ae.length;Pe<Te;Pe++)Mf(Ae[Pe],U,Y,G)}function $m(A,U,Y,G){let{opaque:W,transmissive:Ae,transparent:Pe}=A;M.setupLightsView(Y),he===!0&&We.setGlobalState(R.clippingPlanes,Y),G&&S.viewport(z.copy(G)),W.length>0&&uc(W,U,Y),Ae.length>0&&uc(Ae,U,Y),Pe.length>0&&uc(Pe,U,Y),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Km(A,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let Ne=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new Jt(1,1,{generateMipmaps:!0,type:Ne?un:Vn,minFilter:Jn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let Ae=M.state.transmissionRenderTarget[G.id],Pe=G.viewport||z;Ae.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);let Te=R.getRenderTarget(),Le=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(Ae),R.getClearColor(He),Ve=R.getClearAlpha(),Ve<1&&R.setClearColor(16777215,.5),R.clear(),nt&&ut.render(Y);let mt=R.toneMapping;R.toneMapping=Ai;let vt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),he===!0&&We.setGlobalState(R.clippingPlanes,G),uc(A,Y,G),J.updateMultisampleRenderTarget(Ae),J.updateRenderTargetMipmap(Ae),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Dt=0,ln=U.length;Dt<ln;Dt++){let Xt=U[Dt],{object:Ht,geometry:An,material:Ce,group:Un}=Xt;if(Ce.side===hn&&Ht.layers.test(G.layers)){let St=Ce.side;Ce.side=Sn,Ce.needsUpdate=!0,Zm(Ht,Y,G,An,Ce,Un),Ce.side=St,Ce.needsUpdate=!0,Ne=!0}}Ne===!0&&(J.updateMultisampleRenderTarget(Ae),J.updateRenderTargetMipmap(Ae))}R.setRenderTarget(Te,Le,Be),R.setClearColor(He,Ve),vt!==void 0&&(G.viewport=vt),R.toneMapping=mt}function uc(A,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Ae=A.length;W<Ae;W++){let Pe=A[W],{object:Te,geometry:Le,group:Be}=Pe,mt=Pe.material;mt.allowOverride===!0&&G!==null&&(mt=G),Te.layers.test(Y.layers)&&Zm(Te,U,Y,Le,mt,Be)}}function Zm(A,U,Y,G,W,Ae){N!==null&&W.isNodeMaterial&&N.setObject(A,W),A.onBeforeRender(R,U,Y,G,W,Ae),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(R,U,Y,G,A,Ae),W.transparent===!0&&W.side===hn&&W.forceSinglePass===!1?(W.side=Sn,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,A,Ae),W.side=ci,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,A,Ae),W.side=hn):R.renderBufferDirect(Y,U,G,W,A,Ae),A.onAfterRender(R,U,Y,G,W,Ae)}function fc(A,U,Y){U.isScene!==!0&&(U=Ye);let G=q.get(A),W=M.state.lights,Ae=M.state.shadowsArray,Pe=W.state.version,Te=ve.getParameters(A,W.state,Ae,U,Y,M.state.lightProbeGridArray),Le=ve.getProgramCacheKey(Te),Be=G.programs;G.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;G.envMap=de.get(A.envMap||G.environment,mt),G.envMapRotation=G.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Be===void 0&&(A.addEventListener("dispose",Oi),Be=new Map,G.programs=Be);let vt=Be.get(Le);if(vt!==void 0){if(G.currentProgram===vt&&G.lightsStateVersion===Pe)return jm(A,Te),vt}else Te.uniforms=ve.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,Y,Te),A.onBeforeCompile(Te,R),vt=ve.acquireProgram(Te,Le),Be.set(Le,vt),G.uniforms=Te.uniforms;let Ne=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=We.uniform),jm(A,Te),G.needsLights=Dv(A),G.lightsStateVersion=Pe,G.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.sunLights.value=W.state.sun,Ne.sunLightShadows.value=W.state.sunShadow,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.sunShadowMatrix.value=W.state.sunShadowMatrix,Ne.sunShadowCascade.value=W.state.sunShadowCascade,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=vt,G.uniformsList=null,vt}function Jm(A){if(A.uniformsList===null){let U=A.currentProgram.getUniforms();A.uniformsList=Qo.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function jm(A,U){let Y=q.get(A);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Pv(A,U){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=A.length;Y<G;Y++){let W=A[Y];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function Lv(A,U,Y,G,W){U.isScene!==!0&&(U=Ye),J.resetTextureUnits();let Ae=U.fog,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,Te=oe===null?R.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ft.workingColorSpace,Le=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Be=de.get(G.envMap||Pe,Le),mt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ne=!!Y.morphAttributes.position,Dt=!!Y.morphAttributes.normal,ln=!!Y.morphAttributes.color,Xt=Ai;G.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Xt=R.toneMapping);let Ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,An=Ht!==void 0?Ht.length:0,Ce=q.get(G),Un=M.state.lights;if(he===!0&&(ue===!0||A!==te)){let qt=A===te&&G.id===Z;We.setState(G,A,qt)}let St=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Un.state.version||Ce.outputColorSpace!==Te||W.isBatchedMesh&&Ce.batching===!1||!W.isBatchedMesh&&Ce.batching===!0||W.isBatchedMesh&&Ce.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ce.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ce.instancing===!1||!W.isInstancedMesh&&Ce.instancing===!0||W.isSkinnedMesh&&Ce.skinning===!1||!W.isSkinnedMesh&&Ce.skinning===!0||W.isInstancedMesh&&Ce.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ce.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ce.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ce.instancingMorph===!1&&W.morphTexture!==null||Ce.envMap!==Be||G.fog===!0&&Ce.fog!==Ae||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==We.numPlanes||Ce.numIntersection!==We.numIntersection)||Ce.vertexAlphas!==mt||Ce.vertexTangents!==vt||Ce.morphTargets!==Ne||Ce.morphNormals!==Dt||Ce.morphColors!==ln||Ce.toneMapping!==Xt||Ce.morphTargetsCount!==An||!!Ce.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(St=!0):(St=!0,Ce.__version=G.version);let ii=Ce.currentProgram;St===!0&&(ii=fc(G,U,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,ii,Ce));let Bi=!1,Rs=!1,to=!1,Bt=ii.getUniforms(),tn=Ce.uniforms;if(S.useProgram(ii.program)&&(Bi=!0,Rs=!0,to=!0),G.id!==Z&&(Z=G.id,Rs=!0),Ce.needsLights){let qt=Pv(M.state.lightProbeGridArray,W);Ce.lightProbeGrid!==qt&&(Ce.lightProbeGrid=qt,Rs=!0)}if(Bi||te!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(F,"projectionMatrix",A.projectionMatrix),Bt.setValue(F,"viewMatrix",A.matrixWorldInverse);let Is=Bt.map.cameraPosition;Is!==void 0&&Is.setValue(F,xe.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&Bt.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Bt.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,Rs=!0,to=!0)}if(Ce.needsLights&&(Un.state.sunShadowMap.length>0&&Bt.setValue(F,"sunShadowMap",Un.state.sunShadowMap,J),Un.state.directionalShadowMap.length>0&&Bt.setValue(F,"directionalShadowMap",Un.state.directionalShadowMap,J),Un.state.spotShadowMap.length>0&&Bt.setValue(F,"spotShadowMap",Un.state.spotShadowMap,J),Un.state.pointShadowMap.length>0&&Bt.setValue(F,"pointShadowMap",Un.state.pointShadowMap,J)),W.isSkinnedMesh){Bt.setOptional(F,W,"bindMatrix"),Bt.setOptional(F,W,"bindMatrixInverse");let qt=W.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Bt.setValue(F,"boneTexture",qt.boneTexture,J))}W.isBatchedMesh&&(Bt.setOptional(F,W,"batchingTexture"),Bt.setValue(F,"batchingTexture",W._matricesTexture,J),Bt.setOptional(F,W,"batchingIdTexture"),Bt.setValue(F,"batchingIdTexture",W._indirectTexture,J),Bt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Bt.setValue(F,"batchingColorTexture",W._colorsTexture,J));let Cs=Y.morphAttributes;if((Cs.position!==void 0||Cs.normal!==void 0||Cs.color!==void 0)&&O.update(W,Y,ii),(Rs||Ce.receiveShadow!==W.receiveShadow)&&(Ce.receiveShadow=W.receiveShadow,Bt.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=tT()),Rs){if(Bt.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ce.needsLights&&Nv(tn,to),Ae&&G.fog===!0&&Ge.refreshFogUniforms(tn,Ae),Ge.refreshMaterialUniforms(tn,G,ee,K,M.state.transmissionRenderTarget[A.id]),Ce.needsLights&&Ce.lightProbeGrid){let qt=Ce.lightProbeGrid;tn.probesSH.value=qt.texture,tn.probesMin.value.copy(qt.boundingBox.min),tn.probesMax.value.copy(qt.boundingBox.max),tn.probesResolution.value.copy(qt.resolution)}Qo.upload(F,Jm(Ce),tn,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qo.upload(F,Jm(Ce),tn,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Bt.setValue(F,"center",W.center),Bt.setValue(F,"modelViewMatrix",W.modelViewMatrix),Bt.setValue(F,"normalMatrix",W.normalMatrix),Bt.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let qt=G.uniformsGroups;for(let Is=0,no=qt.length;Is<no;Is++){let e0=qt[Is];le.update(e0,ii),le.bind(e0,ii)}}return ii}function Nv(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.sunLights.needsUpdate=U,A.sunLightShadows.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Dv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(A,U,Y){let G=q.get(A);G.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(A.texture).__webglTexture=U,q.get(A.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,U){let Y=q.get(A);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,Y=0){oe=A,X=U,$=Y;let G=null,W=!1,Ae=!1;if(A){let Te=q.get(A);if(Te.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(F.FRAMEBUFFER,Te.__webglFramebuffer),z.copy(A.viewport),ae.copy(A.scissor),ce=A.scissorTest,S.viewport(z),S.scissor(ae),S.setScissorTest(ce),Z=-1;return}else if(Te.__webglFramebuffer===void 0)J.setupRenderTarget(A);else if(Te.__hasExternalTextures)J.rebindTextures(A,q.get(A.texture).__webglTexture,q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let mt=A.depthTexture;if(Te.__boundDepthTexture!==mt){if(mt!==null&&q.has(mt)&&(A.width!==mt.image.width||A.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(A)}}let Le=A.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ae=!0);let Be=q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?G=Be[U][Y]:G=Be[U],W=!0):A.samples>0&&J.useMultisampledRTT(A)===!1?G=q.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?G=Be[Y]:G=Be,z.copy(A.viewport),ae.copy(A.scissor),ce=A.scissorTest}else z.copy(ye).multiplyScalar(ee).floor(),ae.copy(Ke).multiplyScalar(ee).floor(),ce=Et;if(Y!==0&&(G=k),S.bindFramebuffer(F.FRAMEBUFFER,G)&&S.drawBuffers(A,G),S.viewport(z),S.scissor(ae),S.setScissorTest(ce),W){let Te=q.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,Y)}else if(Ae){let Te=U;for(let Le=0;Le<A.textures.length;Le++){let Be=q.get(A.textures[Le]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Le,Be.__webglTexture,Y,Te)}}else if(A!==null&&Y!==0){let Te=q.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Te.__webglTexture,Y)}Z=-1};function Qm(A){let U=q.get(A);return(U.__readFormat!==A.format||U.__readType!==A.type)&&(U.__readFormat=A.format,U.__readType=A.type,U.__formatReadable=C.textureFormatReadable(A.format),U.__typeReadable=C.textureTypeReadable(A.type)),U}this.readRenderTargetPixels=function(A,U,Y,G,W,Ae,Pe,Te=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le){S.bindFramebuffer(F.FRAMEBUFFER,Le);try{let Be=A.textures[Te],mt=Be.format,vt=Be.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te);let Ne=Qm(Be);if(Ne.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-G&&Y>=0&&Y<=A.height-W&&F.readPixels(U,Y,G,W,Se.convert(mt),Se.convert(vt),Ae)}finally{let Be=oe!==null?q.get(oe).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,U,Y,G,W,Ae,Pe,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le)if(U>=0&&U<=A.width-G&&Y>=0&&Y<=A.height-W){S.bindFramebuffer(F.FRAMEBUFFER,Le);let Be=A.textures[Te],mt=Be.format,vt=Be.type;A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Te);let Ne=Qm(Be);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Dt),F.bufferData(F.PIXEL_PACK_BUFFER,Ae.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,W,Se.convert(mt),Se.convert(vt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let ln=oe!==null?q.get(oe).__webglFramebuffer:null;S.bindFramebuffer(F.FRAMEBUFFER,ln);let Xt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ig(F,Xt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ae),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Dt),F.deleteSync(Xt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(A.image.width*G),Ae=Math.floor(A.image.height*G),Pe=U!==null?U.x:0,Te=U!==null?U.y:0;J.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Pe,Te,W,Ae),S.unbindTexture()},this.copyTextureToTexture=function(A,U,Y=null,G=null,W=0,Ae=0){let Pe,Te,Le,Be,mt,vt,Ne,Dt,ln,Xt=A.isCompressedTexture?A.mipmaps[Ae]:A.image;if(Y!==null)Pe=Y.max.x-Y.min.x,Te=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Be=Y.min.x,mt=Y.min.y,vt=Y.isBox3?Y.min.z:0;else{let tn=Math.pow(2,-W);Pe=Math.floor(Xt.width*tn),Te=Math.floor(Xt.height*tn),A.isDataArrayTexture?Le=Xt.depth:A.isData3DTexture?Le=Math.floor(Xt.depth*tn):Le=1,Be=0,mt=0,vt=0}G!==null?(Ne=G.x,Dt=G.y,ln=G.z):(Ne=0,Dt=0,ln=0);let Ht=Se.convert(U.format),An=Se.convert(U.type),Ce;U.isData3DTexture?(J.setTexture3D(U,0),Ce=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Ce=F.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Ce=F.TEXTURE_2D),S.activeTexture(F.TEXTURE0),S.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),S.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),S.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Un=S.getParameter(F.UNPACK_ROW_LENGTH),St=S.getParameter(F.UNPACK_IMAGE_HEIGHT),ii=S.getParameter(F.UNPACK_SKIP_PIXELS),Bi=S.getParameter(F.UNPACK_SKIP_ROWS),Rs=S.getParameter(F.UNPACK_SKIP_IMAGES);S.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),S.pixelStorei(F.UNPACK_SKIP_PIXELS,Be),S.pixelStorei(F.UNPACK_SKIP_ROWS,mt),S.pixelStorei(F.UNPACK_SKIP_IMAGES,vt);let to=A.isDataArrayTexture||A.isData3DTexture,Bt=U.isDataArrayTexture||U.isData3DTexture;if(A.isDepthTexture){let tn=q.get(A),Cs=q.get(U),qt=q.get(tn.__renderTarget),Is=q.get(Cs.__renderTarget);S.bindFramebuffer(F.READ_FRAMEBUFFER,qt.__webglFramebuffer),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let no=0;no<Le;no++)to&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(A).__webglTexture,W,vt+no),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(U).__webglTexture,Ae,ln+no)),F.blitFramebuffer(Be,mt,Pe,Te,Ne,Dt,Pe,Te,F.DEPTH_BUFFER_BIT,F.NEAREST);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||q.has(A)){let tn=q.get(A),Cs=q.get(U);S.bindFramebuffer(F.READ_FRAMEBUFFER,D),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let qt=0;qt<Le;qt++)to?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,tn.__webglTexture,W,vt+qt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,tn.__webglTexture,W),Bt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Cs.__webglTexture,Ae,ln+qt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Cs.__webglTexture,Ae),W!==0?F.blitFramebuffer(Be,mt,Pe,Te,Ne,Dt,Pe,Te,F.COLOR_BUFFER_BIT,F.NEAREST):Bt?F.copyTexSubImage3D(Ce,Ae,Ne,Dt,ln+qt,Be,mt,Pe,Te):F.copyTexSubImage2D(Ce,Ae,Ne,Dt,Be,mt,Pe,Te);S.bindFramebuffer(F.READ_FRAMEBUFFER,null),S.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ce,Ae,Ne,Dt,ln,Pe,Te,Le,Ht,An,Xt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ce,Ae,Ne,Dt,ln,Pe,Te,Le,Ht,Xt.data):F.texSubImage3D(Ce,Ae,Ne,Dt,ln,Pe,Te,Le,Ht,An,Xt):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ae,Ne,Dt,Pe,Te,Ht,An,Xt.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ae,Ne,Dt,Xt.width,Xt.height,Ht,Xt.data):F.texSubImage2D(F.TEXTURE_2D,Ae,Ne,Dt,Pe,Te,Ht,An,Xt);S.pixelStorei(F.UNPACK_ROW_LENGTH,Un),S.pixelStorei(F.UNPACK_IMAGE_HEIGHT,St),S.pixelStorei(F.UNPACK_SKIP_PIXELS,ii),S.pixelStorei(F.UNPACK_SKIP_ROWS,Bi),S.pixelStorei(F.UNPACK_SKIP_IMAGES,Rs),Ae===0&&U.generateMipmaps&&F.generateMipmap(Ce),S.unbindTexture()},this.initRenderTarget=function(A){q.get(A).__webglFramebuffer===void 0&&J.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?J.setTextureCube(A,0):A.isData3DTexture?J.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?J.setTexture2DArray(A,0):J.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){X=0,$=0,oe=null,S.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};var yu=class extends At{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Q(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},na=new I,px=new Qe,mx=new Qe,gx=new I,xx=new I,vu=class{constructor(e={}){let t=this,n,s,r,o,a={objects:new WeakMap},c=e.element!==void 0?e.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),px.copy(x.matrixWorldInverse),mx.multiplyMatrices(x.projectionMatrix,px),h(p,p,x),this.sortObjects&&d(p)},this.setSize=function(p,x){n=p,s=x,r=n/2,o=s/2,c.style.width=p+"px",c.style.height=x+"px"};function l(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,m=p.children.length;x<m;x++)l(p.children[x])}function h(p,x,m){if(p.visible===!1){l(p);return}if(p.isCSS2DObject){na.setFromMatrixPosition(p.matrixWorld),na.applyMatrix4(mx);let g=na.z>=-1&&na.z<=1&&p.layers.test(m.layers)===!0,y=p.element;if(y.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(t,x,m);let _=100*p.center.x,v=100*p.center.y;y.style.transformOrigin=`${_}% ${v}%`;let M=-p.rotation2D,T=na.x*r+r,b=-na.y*o+o;y.style.transform=`translate(${-_}%, ${-v}%) translate(${T}px, ${b}px) rotate(${M}rad)`,y.parentNode!==c&&c.appendChild(y),p.onAfterRender(t,x,m)}let w={distanceToCameraSquared:u(m,p)};a.objects.set(p,w)}for(let g=0,y=p.children.length;g<y;g++)h(p.children[g],x,m)}function u(p,x){return gx.setFromMatrixPosition(p.matrixWorld),xx.setFromMatrixPosition(x.matrixWorld),gx.distanceToSquared(xx)}function f(p){let x=[];return p.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function d(p){let x=f(p).sort(function(g,y){if(g.renderOrder!==y.renderOrder)return y.renderOrder-g.renderOrder;let w=a.objects.get(g).distanceToCameraSquared,_=a.objects.get(y).distanceToCameraSquared;return w-_}),m=x.length;for(let g=0,y=x.length;g<y;g++)x[g].element.style.zIndex=m-g}}};function tp(i,e){if(e===Td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$o||e===Ul){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===$o)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function _x(i){let e=new Map,t=new Map,n=i.clone();return yx(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function yx(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)yx(i.children[n],e.children[n],t)}var sa=class extends Xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lp(t)}),this.register(function(t){return new cp(t)}),this.register(function(t){return new _p(t)}),this.register(function(t){return new yp(t)}),this.register(function(t){return new vp(t)}),this.register(function(t){return new up(t)}),this.register(function(t){return new fp(t)}),this.register(function(t){return new dp(t)}),this.register(function(t){return new pp(t)}),this.register(function(t){return new ap(t)}),this.register(function(t){return new mp(t)}),this.register(function(t){return new hp(t)}),this.register(function(t){return new xp(t)}),this.register(function(t){return new gp(t)}),this.register(function(t){return new rp(t)}),this.register(function(t){return new bu(t,_t.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bu(t,_t.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new bp(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=gs.extractUrlBase(e);o=gs.resolveURL(l,this.path)}else o=gs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ho(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wx){try{o[_t.KHR_BINARY_GLTF]=new Mp(e)}catch(u){s&&s(u);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Cp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case _t.KHR_MATERIALS_UNLIT:o[u]=new op;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[u]=new Sp(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[u]=new wp;break;case _t.KHR_MESH_QUANTIZATION:o[u]=new Ep;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function nT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function on(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},rp=class{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new pe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Mn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Vs(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Rr(h),l.distance=u;break;case"spot":l=new Ar(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Ki(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},op=class{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,dt))}return Promise.all(s)}},ap=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},lp=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(r,r)}return Promise.all(s)}},cp=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},hp=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},up=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Mn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,dt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},fp=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},dp=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(r[0],r[1],r[2],Mn),Promise.all(s)}},pp=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},mp=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(r[0],r[1],r[2],Mn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,dt)),Promise.all(s)}},gp=class{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},xp=class{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return on(this.parser,e,this.name)!==null?rn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},_p=class{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},yp=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},vp=class{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},bu=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},bp=class{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==ui.TRIANGLES&&l.mode!==ui.TRIANGLE_STRIP&&l.mode!==ui.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(let p of u){let x=new Qe,m=new I,g=new In,y=new I(1,1,1),w=new br(p.geometry,p.material,f);for(let v=0;v<f;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),w.setMatrixAt(v,x.compose(m,g,y));let _=null;for(let v in c)if(v==="_COLOR_0"){let M=c[v];w.instanceColor=new us(M.array,M.itemSize,M.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(_===null){let T=w.geometry;_=new Rt,_.name=T.name;for(let b in T.attributes)_.setAttribute(b,T.attributes[b]);for(let b in T.morphAttributes)_.morphAttributes[b]=T.morphAttributes[b];T.index!==null&&_.setIndex(T.index),_.morphTargetsRelative=T.morphTargetsRelative;for(let b of T.groups)_.addGroup(b.start,b.count,b.materialIndex);T.boundingBox!==null&&(_.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(_.boundingSphere=T.boundingSphere.clone()),_.drawRange.start=T.drawRange.start,_.drawRange.count=T.drawRange.count,_.userData=Object.assign({},T.userData),w.geometry=_}let M=c[v];_.setAttribute(v,new us(M.array,M.itemSize,M.normalized))}At.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},wx="glTF",Hl=12,vx={JSON:1313821514,BIN:5130562},Mp=class{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Hl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Hl,r=new DataView(e,Hl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===vx.JSON){let l=new Uint8Array(e,Hl+o,a);this.content=n.decode(l)}else if(c===vx.BIN){let l=Hl+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Sp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let h in o){let u=Ap[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Ap[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=ia[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=c[p];m!==void 0&&(x.normalized=m)}u(d)},a,l,Mn,f)})})}},wp=class{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Ep=class{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}},Mu=class extends qi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,p=e*l,x=p-l,m=-2*d+3*f,g=d-f,y=1-m,w=g-f+u;for(let _=0;_!==a;_++){let v=o[x+_+a],M=o[x+_+c]*h,T=o[p+_+a],b=o[p+_]*h;r[_]=y*v+w*M+m*T+g*b}return r}},iT=new In,Tp=class extends Mu{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return iT.fromArray(r).normalize().toArray(r),r}},ui={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},bx={9728:nn,9729:$t,9984:Ah,9985:qo,9986:Nr,9987:Jn},Mx={33071:ri,33648:wo,10497:ai},np={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ap={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sT={CUBICSPLINE:void 0,LINEAR:xr,STEP:gr},ip={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ci})),i.DefaultMaterial}function Ur(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ki(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function oT(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function aT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function lT(i){let e,t=i.extensions&&i.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sp(t.attributes):e=i.indices+":"+sp(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+sp(i.targets[n]);return e}function sp(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function cT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var hT=new Qe,Cp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new nT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Er(this.options.manager):this.textureLoader=new _l(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ho(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ur(r,a,s),Ki(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(gs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=np[s.type],a=ia[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Yt(l,o,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=np[s.type],l=ia[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,w=t.cache.get(y);w||(x=new l(a,g*d,s.count*d/h),w=new vr(x,d/h),t.cache.add(y,w)),m=new Os(w,c,f%d/h,p)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new Yt(x,c,p);if(s.sparse!==void 0){let g=np.SCALAR,y=ia[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,v=new y(o[1],w,s.sparse.count*g),M=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new Yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,b=v.length;T<b;T++){let E=v[T];if(m.setX(E,M[T*c]),c>=2&&m.setY(E,M[T*c+1]),c>=3&&m.setZ(E,M[T*c+2]),c>=4&&m.setW(E,M[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=bx[f.magFilter]||$t,h.minFilter=bx[f.minFilter]||Jn,h.wrapS=Mx[f.wrapS]||ai,h.wrapT=Mx[f.wrapT]||ai,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==nn&&h.minFilter!==$t,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(x){let m=new fn(x);m.needsUpdate=!0,f(m)}),t.load(gs.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),Ki(u,o),u.userData.mimeType=o.mimeType||cT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Uo,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Fo,Pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ut}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[_t.KHR_MATERIALS_UNLIT]){let u=s[_t.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Mn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,dt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=hn);let h=r.alphaMode||ip.OPAQUE;if(h===ip.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ip.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ct&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ct&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ct){let u=r.emissiveFactor;a.emissive=new pe().setRGB(u[0],u[1],u[2],Mn)}return r.emissiveTexture!==void 0&&o!==Ct&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,dt)),Promise.all(l).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ki(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ur(s,u,r),u})}createUniqueName(e){let t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Sx(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],h=lT(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Sx(new Rt,l,t),l.mode===ui.TRIANGLE_STRIP?f=f.then(d=>tp(d,Ul)):l.mode===ui.TRIANGLE_FAN&&(f=f.then(d=>tp(d,$o))),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let h=o[c].material===void 0?rT(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,y=l[d];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,_=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");w&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&_?new Ya(x,y):new Ie(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ui.LINES)g=new Ka(x,y);else if(m.mode===ui.LINE_STRIP)g=new Mr(x,y);else if(m.mode===ui.LINE_LOOP)g=new Za(x,y);else if(m.mode===ui.POINTS)g=new Ja(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&aT(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Ki(g,r),m.extensions&&Ur(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&Ur(s,u[0],r),u[0];let f=new ht;r.extensions&&Ur(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _n(Ko.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new li(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ki(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){let u=o[l];if(u){a.push(u);let f=new Qe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new $a(a,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",y)),l.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let w=0,_=f.length;w<_;w++){let v=f[w],M=d[w],T=p[w],b=x[w],E=m[w];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let R=n._createAnimationTracks(v,M,T,b,E);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let y=new ml(r,void 0,g);return Ki(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,hT)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new I().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new Lo:l.length>1?h=new ht:l.length===1?h=l[0]:h=new At,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ki(h,r),r.extensions&&Ur(n,h,r),r.matrix!==void 0){let u=new Qe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ht;n.name&&(r.name=s.createUniqueName(n.name)),Ki(r,n),n.extensions&&Ur(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++){let f=c[h];f.parent!==null?r.add(_x(f)):r.add(f)}let l=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Pn||f instanceof fn)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Xs[r.path]===Xs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let h;switch(Xs[r.path]){case Xs.weights:h=ds;break;case Xs.rotation:h=ps;break;case Xs.translation:case Xs.scale:h=Hs;break;default:switch(n.itemSize){case 1:h=ds;break;case 2:case 3:default:h=Hs;break}break}let u=s.interpolation!==void 0?sT[s.interpolation]:xr,f=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let x=new h(c[d]+"."+Xs[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Rp(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ps?Tp:Mu;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function uT(i,e,t){let n=e.attributes,s=new sn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){let h=Rp(ia[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Rp(ia[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new zn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Sx(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(let o in n){let a=Ap[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ft.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ft.workingColorSpace}" not supported.`),Ki(i,e),uT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?oT(i,e.targets,t):i})}var Su=class extends yr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Kt;e.deleteAttribute("uv");let t=new Ut({side:Sn}),n=new Ut,s=new Rr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ie(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new br(e,n,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new Ie(e,ra(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Ie(e,ra(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Ie(e,ra(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ie(e,ra(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Ie(e,ra(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Ie(e,ra(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ra(i){return new dl({color:0,emissive:16777215,emissiveIntensity:i})}var Vl=new I;function fi(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Vl.copy(e),Vl[n]=0,Vl.normalize();let l=.5*o/(o+a),h=1-Vl.angleTo(i)/c;return Math.sign(Vl[t])===1?h*l:a/(o+a)+l+l*(1-h)}var wu=class i extends Kt{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new I,l=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new I,m=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(c.fromArray(u,g),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[g+0]=h.x*Math.sign(c.x)+l.x*r,u[g+1]=h.y*Math.sign(c.y)+l.y*r,u[g+2]=h.z*Math.sign(c.z)+l.z*r,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/p)){case 0:x.set(1,0,0),d[y+0]=fi(x,l,"z","y",r,n),d[y+1]=1-fi(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),d[y+0]=1-fi(x,l,"z","y",r,n),d[y+1]=1-fi(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),d[y+0]=1-fi(x,l,"x","z",r,e),d[y+1]=fi(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),d[y+0]=1-fi(x,l,"x","z",r,e),d[y+1]=1-fi(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),d[y+0]=1-fi(x,l,"x","y",r,e),d[y+1]=1-fi(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),d[y+0]=fi(x,l,"x","y",r,e),d[y+1]=1-fi(x,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Eu=["#9CAA93","#86A4A1","#8E9DB1","#A49EB9","#BB9CA6","#C79F89","#CDB27F"],Ex=["sofa","media","library","meeting"],Tx=[.85,1.25],Ip="26,30,42",fT=.3,Px=[240,235,227],pt={x0:3.03,x1:8,z0:-.12,z1:4.7},dT=[[4.13,-.3],[4.13,3.9]],di=128,Or=64,Ax=.012,Lx=["sofa","armchair_1","armchair_2","coffee_table"],pT={oak:"#D9C39F",black:"#1C1C1E",graphite:"#3A3A3C",fabric_warm:"#C9C5BE",fabric_light:"#E2DFDA",pot_white:"#F1EFEB",bar_white:"#EBE9E4"},Pp=["#ECE6DA","#D3CABA","#ABA294","#6B6762","#36363A","#BCA680"],mT=new pe(1,1,1),gT=new pe("#F2EEE6"),Lp=new pe().setRGB(210/255,210/255,210/255,dt).r,Nx=new Map,Dx=.4;function Fx(i){let e=new Set,t=new Map;return i.forEach((n,s)=>{let r=xT(n.id)%Eu.length;if(i.length<=Eu.length)for(;e.has(r);)r=(r+1)%Eu.length;e.add(r),t.set(n.id,{accent:Eu[r],layout:Ex[s%Ex.length]})}),t}function xT(i){let e=2166136261;for(let t of String(i))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var oa=new WeakMap;function Ux(i){let e={layouts:new Map,glb:[],mats:[]};return i.traverse(t=>{let n=/^style_(sofa|media|library|meeting)$/.exec(t.name);if(n&&e.layouts.set(n[1],t),Lx.includes(t.name)&&e.glb.push(t),t.isMesh)for(let s of[].concat(t.material))s.userData.accent&&!e.mats.includes(s)&&e.mats.push(s)}),e}function Ox(i,e){oa.has(i)||oa.set(i,Ux(i));let t=oa.get(i);for(let[s,r]of t.layouts)r.visible=s===e.layout;for(let s of t.glb)s.visible=e.layout==="sofa";let n=new pe(e.accent);for(let s of t.mats)_T(s,s.userData.accent,n)}function Bx(i){oa.has(i)||oa.set(i,Ux(i));let e=oa.get(i);return[...e.layouts.values(),...e.glb]}function _T(i,e,t){let n=/^rug/.test(e)?t.clone().lerp(gT,.28):t;switch(e){case"rugtint":i.color.setRGB(Math.min(1,n.r/Lp),Math.min(1,n.g/Lp),Math.min(1,n.b/Lp));break;case"fabric":i.color.copy(n).multiplyScalar(.86);break;case"panelDark":i.color.copy(n).multiplyScalar(.6);break;case"book":i.color.copy(n).multiplyScalar(.78);break;case"rugEdge":i.color.copy(n).multiplyScalar(.74);break;case"screen":i.color.copy(n).lerp(mT,.2).multiplyScalar(.92);break;case"rug":(i.accentUniform?i.accentUniform.value:i.color).copy(n);break;default:i.color.copy(n)}}function kx(i,e){if(Lx.some(s=>!i.getObjectByName(s))||e.slice(0,5).some(s=>!s))return null;let t=new Fp(i);ET(t,i),TT(t,i),yT(t,i);let n={sofa:e.slice(0,5).map(s=>({pos:s.pos.clone(),yaw:s.yaw}))};return n.media=Np(t,i,"media",vT),n.library=Np(t,i,"library",bT),n.meeting=Np(t,i,"meeting",MT),{layouts:n}}var Fp=class{constructor(e){this.open=e,this.found=new Map,e.traverse(t=>{if(t.isMesh)for(let n of[].concat(t.material))n.name&&!this.found.has(n.name)&&this.found.set(n.name,n)}),this.made=new Map}mat(e){return this.found.has(e)?this.found.get(e):(this.made.has(e)||this.made.set(e,new Ut({name:e,color:pT[e]||"#CCCCCC",roughness:.7})),this.made.get(e))}accent(e,t="fabric_light",n={}){let s=`accent_${e}`;if(!this.made.has(s)){let r=this.mat(t).clone();r.name=s,r.userData={accent:e},Object.assign(r,n),this.made.set(s,r)}return this.made.get(s)}plain(e,t,n=.75){return this.made.has(e)||this.made.set(e,new Ut({name:e,color:t,roughness:n})),this.made.get(e)}add(e,t,n,s,r,o,a=0,c=0,l=0){let h=new Ie(t,n);return h.position.set(s,r,o),h.rotation.set(c,a,l,"YXZ"),e.add(h),h}rbox(e,t,n,s){return new wu(e,t,n,2,Math.min(s,e/2-1e-4,t/2-1e-4,n/2-1e-4))}group(e,t,n,s=0){let r=new ht;return r.position.set(t,0,n),r.rotation.y=s,e.add(r),r}};function Np(i,e,t,n){let s=new ht,r=dT.map(([u,f])=>({pts:Jx([...Au(u,f,.15,14),[u+.34,f+.36]]),flat:!0})),o={shadows:r,rug:null},a=n(i,s,o),c=LT(r);Nx.set(t,{layers:c,rug:o.rug});let l=new Ie(new jt(pt.x1-pt.x0,pt.z1-pt.z0).rotateX(-Math.PI/2),new Ct({map:Wx(c),name:`style_patch_${t}`}));l.position.set((pt.x0+pt.x1)/2,.002,(pt.z0+pt.z1)/2),l.userData.bakedName=`style_patch_${t}`,s.add(l),o.rug&&AT(i,s,o.rug,c,t);let h=Zx(s,`style_${t}`);return h.visible=!1,e.add(h),a.map(([u,f,d,p])=>({pos:new I(u,f,d),yaw:p}))}function yT(i,e){let t=new ht;t.name="style_sofa";let s=e.getObjectByName("sofa").position,r=i.rbox(.42,.4,.14,.065);for(let c of[-1,1])i.add(t,r,i.accent("fabric"),s.x+c*1.16,.655,s.z-.16,-c*.22,-.3);let o=new Ct({name:"accent_rugtint",color:16777215,blending:Ml,premultipliedAlpha:!0,transparent:!0,depthWrite:!1});o.userData={accent:"rugtint"};let a=i.add(t,new tl(2.205,128).rotateX(-Math.PI/2),o,5.3,.0015,2.3);a.userData.keep=!0,a.renderOrder=-1,e.add(t)}function vT(i,e,t){let n=i.mat("bar_white"),s=i.mat("oak"),r=i.mat("black"),o=3.44,a=2.45,c=2.7,l=.44,h=.46;i.add(e,i.rbox(l-.08,.05,c-.12,.01),r,o,.025,a),i.add(e,i.rbox(l,h-.08,c,.012),n,o,.05+(h-.08)/2,a),i.add(e,i.rbox(l+.02,.03,c+.02,.008),s,o,h-.015,a);for(let g of[-c/6,c/6])i.add(e,new Kt(.004,h-.12,.006),r,o+l/2+.001,.05+(h-.08)/2,a+g);t.shadows.push({pts:Gn(o,a,l,c),y0:0,y1:h,core:.75});let u=2,f=1.125,d=h+.17+f/2,p=o-.02;i.add(e,i.rbox(.22,.012,.44,.006),r,p,h+.006,a),i.add(e,i.rbox(.035,.2,.12,.01),r,p-.02,h+.1,a),i.add(e,i.rbox(.032,f+.036,u+.036,.01),r,p,d,a);let x=new Ct({name:"accent_screen",map:NT(),toneMapped:!1});x.userData={accent:"screen"},i.add(e,new jt(u,f).rotateY(Math.PI/2),x,p+.0165,d,a),t.shadows.push({pts:Gn(p,a,.032,u+.036),y0:d-f/2-.02,y1:d+f/2+.02});let m=[];for(let g of[1.75,3.3]){let w=Math.atan2(o-5.1,a-g);Hx(i,e,t,5.1,g,w),m.push(zx(5.1,g,w,.48,.05))}return Vx(i,e,t,6,.5,2.5,0),t.rug={kind:"rect",x0:3.9,z0:.1,x1:7.65,z1:4.25,r:.08},[[5.15,.46,.5,0],[6,.46,.5,0],[6.85,.46,.5,0],...m]}function bT(i,e,t){let n=jx(11);Rx(i,e,t,(3.12+7.35)/2,.27,7.35-3.12,0,n),Rx(i,e,t,3.3,(.45+3.75)/2,3.75-.45,Math.PI/2,n),Vx(i,e,t,3.97,2.15,2.45,Math.PI/2);let s=6.7,r=2.85,o=-.69;Hx(i,e,t,s,r,o),ST(i,e,t,7.38,2.12),wT(i,e,t,5.75,3.72);let a=i.open.getObjectByName("tree_3").clone(!0);a.position.set(6.85,.78,.27),a.scale.setScalar(.24),e.add(a);let c=new ko([[0,0],[.045,0],[.06,.05],[.058,.12],[.03,.2],[.028,.23],[0,.23]].map(([l,h])=>new Q(l,h)),28);return i.add(e,c,i.mat("pot_white"),4.15,.78,.25),t.rug={kind:"round",cx:5.7,cz:2.4,r:1.72},[[3.97,.46,1.3,Math.PI/2],[3.97,.46,2.15,Math.PI/2],[3.97,.46,3,Math.PI/2],zx(s,r,o,.48,.05),[5.75,.41,3.72,.3]]}function MT(i,e,t){let n=i.mat("oak"),s=i.mat("black"),r=5.55,o=2.05,a=2.4,c=1.1,l=.74,h=new hl(Up(a,c,c/2),{depth:.024,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:16});h.rotateX(Math.PI/2),i.add(e,h,n,r,l-.006,o);for(let f of[-1,1])i.add(e,new Bn(.04,.04,l-.05,20),s,r+f*.62,(l-.05)/2+.012,o),i.add(e,i.rbox(.09,.024,.74,.01),s,r+f*.62,.012,o),t.shadows.push({pts:Gn(r+f*.62,o,.08,.08),y0:0,y1:l-.04},{pts:Gn(r+f*.62,o,.09,.74),core:.55,blur:.02});t.shadows.push({pts:Up(a,c,c/2).getPoints(12).map(f=>[r+f.x,o-f.y]),y0:l-.036,y1:l});let u=[];for(let f of[r-.8,r,r+.8])Tu(i,e,t,f,o-c/2-.47,0),u.push([f,.47,o-c/2-.47,0]);Tu(i,e,t,r-a/2-.5,o,Math.PI/2),u.push([r-a/2-.5,.47,o,Math.PI/2]),Tu(i,e,t,r+a/2+.5,o,-Math.PI/2),u.push([r+a/2+.5,.47,o,-Math.PI/2]);for(let f of[r-.42,r+.42])Tu(i,e,t,f,o+c/2+.3,Math.PI);return t.rug={kind:"rect",x0:3.35,z0:.42,x1:7.75,z1:3.68,r:.08},u}function zx(i,e,t,n,s){return[i+Math.sin(t)*s,n,e+Math.cos(t)*s,t]}function Hx(i,e,t,n,s,r){let o=i.open.getObjectByName("armchair_1").clone(!0);o.position.set(n,0,s),o.rotation.set(0,r,0),e.add(o),t.shadows.push({pts:Gn(n,s,.95,.9,r),y0:0,y1:.37,core:.88,blur:.04},{pts:Gn(...Br(n,s,0,-.38,r),.95,.16,r),y0:0,y1:.85},...[-.5,.5].map(a=>({pts:Gn(...Br(n,s,a,0,r),.1,.8,r),y0:0,y1:.62})))}function Vx(i,e,t,n,s,r,o){let a=i.group(e,n,s,o),c=.46;i.add(a,i.rbox(r,.035,c,.012),i.mat("oak"),0,.322,0),i.add(a,i.rbox(r-.03,.115,c-.03,.05),i.mat("fabric_warm"),0,.395,0);let l=new Bn(.016,.014,.305,12);for(let h of[-1,1])for(let u of[-1,1]){let f=h*(r/2-.09),d=u*(c/2-.07);i.add(a,l,i.mat("black"),f,.1525,d);let[p,x]=Br(n,s,f,d,o);t.shadows.push({pts:Gn(p,x,.03,.03),y0:0,y1:.3,core:.5,blur:.015})}t.shadows.push({pts:Gn(n,s,r,c,o),y0:.305,y1:.452,core:.22,blur:.1})}function Tu(i,e,t,n,s,r){let o=i.group(e,n,s,r),a=i.mat("graphite"),c=i.mat("black");i.add(o,i.rbox(.48,.07,.46,.03),a,0,.43,.01),i.add(o,i.rbox(.46,.33,.05,.022),a,0,.73,-.215,0,-.1);let l=new Bn(.011,.011,.395,10);for(let u of[-1,1])for(let f of[-1,1])i.add(o,l,c,u*.2,.1975,f*.18),t.shadows.push({pts:Gn(...Br(n,s,u*.2,f*.18,r),.024,.024),y0:0,y1:.395,core:.45,blur:.012});let h=new Bn(.009,.009,.16,8);for(let u of[-1,1])i.add(o,h,c,u*.18,.54,-.205);t.shadows.push({pts:Gn(...Br(n,s,0,.01,r),.48,.46,r),y0:.395,y1:.465,core:.16,blur:.08},{pts:Gn(...Br(n,s,0,-.215,r),.46,.05,r),y0:.565,y1:.895})}function Rx(i,e,t,n,s,r,o,a){let c=i.group(e,n,s,o),l=.36,h=.78,u=.022,f=i.mat("bar_white");i.add(c,i.rbox(r-.05,.05,l-.06,.008),i.mat("black"),0,.025,-.015),i.add(c,i.rbox(r,u,l,.004),f,0,.05+u/2,0),i.add(c,i.rbox(r+.012,.03,l+.012,.008),i.mat("oak"),0,h-.015,0),i.add(c,i.rbox(r,h-.08,.012,.003),f,0,.05+(h-.08)/2,-l/2+.006);let d=Math.max(1,Math.round(r/.82)),p=r/d;for(let m=0;m<=d;m++)i.add(c,i.rbox(u,h-.08,l,.004),f,-r/2+u/2+m*(r-u)/d,.05+(h-.08)/2,0);let x=.05+u+(h-.08-u)/2;i.add(c,i.rbox(r-u,u,l-.015,.004),f,0,x,.0075);for(let m=0;m<d;m++){let g=-r/2+m*p+u,y=g+p-u;Cx(i,c,g,y,.05+u,x-u/2-(.05+u),l,a),Cx(i,c,g,y,x+u/2,h-.03-(x+u/2),l,a)}t.shadows.push({pts:Gn(n,s,r,l,o),y0:0,y1:h,core:.72,blur:.03})}function Cx(i,e,t,n,s,r,o,a){let c=()=>a()<.12?i.accent("book","fabric_light",{roughness:.75}):i.plain(`book_${Math.floor(a()*Pp.length)}`,Pp[Math.floor(a()*Pp.length)]),l=-o/2+.016;if(a()<.16){let f=s;for(let d=0,p=2+Math.floor(a()*3);d<p;d++){let x=.028+a()*.014,m=.2+a()*.05,g=.16+a()*.05;i.add(e,new Kt(m,x,g),c(),t+.04+m/2+(a()-.5)*.02,f+x/2,l+g/2,(a()-.5)*.12),f+=x}return}let h=n-.008-(a()<.55?.1+a()*.3:0),u=t+.006+a()*.05;for(;;){let f=.02+a()*.024,d=Math.min(r-.03,.19+a()*.11),p=.16+a()*.07;if(u+f>h)break;i.add(e,new Kt(f,d,p),c(),u+f/2,s+d/2,l+p/2),u+=f+(a()<.12?.006:.0015)}}function ST(i,e,t,n,s){let r=i.mat("black");i.add(e,new Bn(.15,.16,.018,32),r,n,.009,s),i.add(e,new Bn(.011,.011,1.3,10),r,n,.018+.65,s),i.add(e,new Bn(.16,.19,.26,40),i.mat("fabric_light"),n,1.43,s),t.shadows.push({pts:Au(n,s,.16,16),y0:0,y1:.02,core:.5,blur:.02},{pts:Gn(n,s,.024,.024),y0:0,y1:1.3},{pts:Au(n,s,.19,16),y0:1.3,y1:1.56})}function wT(i,e,t,n,s){let r=[[0,0],[.27,0],[.295,.02],[.31,.12],[.31,.3],[.295,.375],[.26,.405],[0,.41]];i.add(e,new ko(r.map(([o,a])=>new Q(o,a)),40),i.accent("fabric"),n,0,s),t.shadows.push({pts:Au(n,s,.31,20),y0:0,y1:.41,core:.82,blur:.04})}function ET(i,e){let t=new ht,n=1.26,s=2.05,r=3.35,o=1.33,a=-8,c=12,l=.062;i.add(t,i.rbox(.018,s,n,.006),i.accent("panelDark"),a+.009,o,r);let h=(n-.04-c*l)/(c-1),u=i.rbox(.026,s-.04,l,.008);for(let d=0;d<c;d++)i.add(t,u,i.accent("panel","fabric_light",{roughness:.9}),a+.018+.013,o,r-n/2+.02+l/2+d*(l+h));let f=Zx(t,"style_panel");e.add(f)}function TT(i,e){let t=e.getObjectByName("tree_1");t&&t.traverse(n=>{n.isMesh&&n.material.name==="pot_white"&&(n.material=i.accent("pot","pot_white"))})}function AT(i,e,t,n,s){let r,o,a,c,l;t.kind==="round"?(o=t.cx,a=t.cz,c=l=t.r*2,r=new zs().absarc(0,0,t.r,0,Math.PI*2,!1)):(o=(t.x0+t.x1)/2,a=(t.z0+t.z1)/2,c=t.x1-t.x0,l=t.z1-t.z0,r=Up(c,l,t.r));let h={x0:o-c/2,x1:o+c/2,z0:a-l/2,z1:a+l/2},u=new fl(r,40),f=u.attributes.position,d=u.attributes.uv;for(let g=0;g<d.count;g++)d.setXY(g,f.getX(g)/c+.5,f.getY(g)/l+.5);u.rotateX(-Math.PI/2);let p=new Ct({name:`style_rug_${s}`,map:Gx(t,h,n)});p.userData={accent:"rug"};let x=i.add(e,u,p,o,Ax,a);x.userData.bakedName=`style_rug_${s}`;let m=r.getPoints(40).map(g=>[g.x,-g.y]);i.add(e,FT(m,Ax),i.accent("rugEdge","fabric_light",{roughness:1,side:ci}),o,0,a)}function RT(i){return i.kind==="round"?{x0:i.cx-i.r,x1:i.cx+i.r,z0:i.cz-i.r,z1:i.cz+i.r}:{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1}}function Gx(i,e,t,n=null){let s=Math.round((e.x1-e.x0)*di),r=Math.round((e.z1-e.z0)*di);return Op(s,r,o=>{CT(o,s,r,i,e,t,n?Dx:1),n&&(o.globalCompositeOperation="multiply",o.drawImage(Yx(n,e),0,0,s,r),o.globalCompositeOperation="source-over")})}function CT(i,e,t,n,s,r,o){i.fillStyle="rgb(247,247,246)",i.fillRect(0,0,e,t),$x(i,e,t,7,5);let a=.18*di;i.strokeStyle="rgba(0,0,0,0.07)",i.lineWidth=1.5,i.beginPath(),n.kind==="round"?i.arc(e/2,t/2,e/2-a,0,Math.PI*2):UT(i,a,a,e-a*2,t-a*2,Math.max(2,n.r*di-a*.3)),i.stroke(),Kx(i,r,s,o)}function Wx(i,e=null){let t=Math.round((pt.x1-pt.x0)*di),n=Math.round((pt.z1-pt.z0)*di);return Op(t,n,s=>{e?s.drawImage(Yx(e,pt),0,0,t,n):(s.fillStyle=`rgb(${Px.join(",")})`,s.fillRect(0,0,t,n)),$x(s,t,n,3,0),s.fillStyle="rgba(60,50,40,0.035)";for(let r=-8;r<=8;r+=1.6)r>pt.x0&&r<pt.x1&&s.fillRect(Math.round((r-pt.x0)*di),0,1,n);for(let r=-6;r<=6;r+=1.5)r>pt.z0&&r<pt.z1&&s.fillRect(0,Math.round((r-pt.z0)*di),t,1);Kx(s,i,pt,e?Dx:1)})}function qx(i){let e=new Map,t=IT(i);if(!t)return e;let n=(s,r)=>t(s,r).map((o,a)=>Math.min(255,o/Px[a]*255));for(let[s,r]of Nx)e.set(`style_patch_${s}`,Wx(r.layers,t)),r.rug&&e.set(`style_rug_${s}`,Gx(r.rug,RT(r.rug),r.layers,n));return e}function IT(i){let s=Gl(128,96),r=s.getContext("2d",{willReadFrequently:!0});try{r.drawImage(i,0,0,128,96)}catch{return null}let o=r.getImageData(0,0,128,96).data,a=(u,f)=>{let d=Math.min(127,Math.max(0,Math.floor((u+8)*8))),x=(Math.min(95,Math.max(0,Math.floor((6-f)*8)))*128+d)*4;return[o[x],o[x+1],o[x+2]]},c=[];for(let u=0;u<=1.0001;u+=.025)for(let f of[.18,.4]){let d=pt.x0+u*(pt.x1-.12-pt.x0),p=pt.z0+u*(pt.z1-pt.z0);for(let[x,m]of[[pt.x0-f,p],[d,pt.z0-f],[d,pt.z1+f]])c.push({x:x-5.5,z:m-2.3,c:a(x,m)})}let l=u=>u[0]*.3+u[1]*.55+u[2]*.15,h=null;for(let u=0;u<4&&c.length>=12;u++){h=[0,1,2].map(d=>PT(c,d));let f=h;c=c.filter(d=>l(d.c)>=l(Ix(f,d.x,d.z))*.93)}return h&&((u,f)=>Ix(h,u-5.5,f-2.3).map(d=>Math.max(0,Math.min(255,d))))}var Xx=(i,e)=>[1,i,e,i*i,e*e,i*e],Ix=(i,e,t)=>i.map(n=>Xx(e,t).reduce((s,r,o)=>s+r*n[o],0));function PT(i,e){let n=Array.from({length:6},()=>new Array(7).fill(0));for(let s of i){let r=Xx(s.x,s.z);for(let o=0;o<6;o++){for(let a=0;a<6;a++)n[o][a]+=r[o]*r[a];n[o][6]+=r[o]*s.c[e]}}for(let s=0;s<6;s++)n[s][s]+=1e-6;for(let s=0;s<6;s++){let r=s;for(let o=s+1;o<6;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);[n[s],n[r]]=[n[r],n[s]];for(let o=0;o<6;o++)if(o!==s){let a=n[o][s]/n[s][s];for(let c=s;c<=6;c++)n[o][c]-=a*n[s][c]}}return n.map((s,r)=>s[6]/s[r])}function Yx(i,e){let n=Math.max(2,Math.round((e.x1-e.x0)*16)),s=Math.max(2,Math.round((e.z1-e.z0)*16)),r=Gl(n,s),o=r.getContext("2d"),a=o.createImageData(n,s);for(let c=0,l=0;c<s;c++)for(let h=0;h<n;h++,l+=4){let u=i(e.x0+(h+.5)/16,e.z0+(c+.5)/16);a.data[l]=u[0],a.data[l+1]=u[1],a.data[l+2]=u[2],a.data[l+3]=255}return o.putImageData(a,0,0),r}function $x(i,e,t,n,s){let r=i.getImageData(0,0,e,t),o=r.data,a=jx(3);for(let c=0,l=0;c<t;c++){let h=s?c&1?s*.5:-s*.5:0;for(let u=0;u<e;u++,l+=4){let f=(a()-.5)*n+h;o[l]+=f,o[l+1]+=f,o[l+2]+=f}}i.putImageData(r,0,0)}function LT(i){let e=Math.round((pt.x1-pt.x0)*Or),t=Math.round((pt.z1-pt.z0)*Or),n=Gl(e,t),s=Gl(e,t),r=n.getContext("2d"),o=s.getContext("2d"),a=(c,l)=>[(c-pt.x0)*Or,(l-pt.z0)*Or];for(let c of i){if(c.flat)Dp(r,c.pts,a,.07*Or,`rgb(${Ip})`);else if(c.y1>0){let l=[c.y0,c.y1].flatMap(h=>c.pts.map(([u,f])=>[u+Tx[0]*h,f+Tx[1]*h]));Dp(r,Jx(l),a,(.035+.17*c.y1)*Or,`rgb(${Ip})`)}c.core&&Dp(o,c.pts,a,(c.blur??.03)*Or,`rgba(${Ip},${c.core})`)}return{plume:n,ao:s}}function Kx(i,e,t,n=1){let s=(pt.x0-t.x0)*di,r=(pt.z0-t.z0)*di,o=(pt.x1-pt.x0)*di,a=(pt.z1-pt.z0)*di;i.save(),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=fT*n,i.drawImage(e.plume,s,r,o,a),i.globalAlpha=n,i.drawImage(e.ao,s,r,o,a),i.restore()}function Dp(i,e,t,n,s){let r=n>.5?2e4:0;i.save(),r?(i.shadowColor=s,i.shadowBlur=n,i.shadowOffsetX=r,i.fillStyle="#000"):i.fillStyle=s,i.beginPath(),e.forEach(([o,a],c)=>{let[l,h]=t(o,a);c?i.lineTo(l-r,h):i.moveTo(l-r,h)}),i.closePath(),i.fill(),i.restore()}function NT(){return Op(640,360,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t*.66);n.addColorStop(0,"#202020"),n.addColorStop(.7,"#8C8C8C"),n.addColorStop(1,"#B4B4B4"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=i.createRadialGradient(e*.64,t*.58,0,e*.64,t*.58,t*.42);s.addColorStop(0,"rgba(255,255,255,0.95)"),s.addColorStop(.08,"rgba(255,255,255,0.75)"),s.addColorStop(.1,"rgba(255,255,255,0.3)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),[[.6,"#6E6E6E","#555555",.05],[.7,"#474747","#333333",.07],[.82,"#2A2A2A","#181818",.06]].forEach(([a,c,l,h],u)=>{let f=i.createLinearGradient(0,t*a,0,t);f.addColorStop(0,c),f.addColorStop(1,l),i.fillStyle=f,i.beginPath(),i.moveTo(0,t);for(let d=0;d<=e;d+=8)i.lineTo(d,t*(a+h*Math.sin(d/e*Math.PI*(1.3+u*.7)+u*1.9)+h*.4*Math.sin(d/e*Math.PI*4.1+u)));i.lineTo(e,t),i.closePath(),i.fill()});let o=i.createLinearGradient(0,0,e*.6,t);o.addColorStop(0,"rgba(255,255,255,0.06)"),o.addColorStop(.5,"rgba(255,255,255,0.015)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,e,t)})}function Zx(i,e){let t=new ht;t.name=e,i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(r=>{if(r.isMesh){if(r.material.map||r.userData.keep){s.push(r);return}n.has(r.material)||n.set(r.material,[]),n.get(r.material).push([r.geometry,r.matrixWorld])}});for(let[r,o]of n)t.add(new Ie(DT(o),r));for(let r of s)r.matrixWorld.decompose(r.position,r.quaternion,r.scale),r.removeFromParent(),t.add(r);return t}function DT(i){let e=i.map(([a,c])=>{let l=a.index?a.toNonIndexed():a.clone();for(let h of Object.keys(l.attributes))h!=="position"&&h!=="normal"&&l.deleteAttribute(h);return l.applyMatrix4(c)}),t=e.reduce((a,c)=>a+c.attributes.position.count,0),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of e)n.set(a.attributes.position.array,r),s.set(a.attributes.normal.array,r),r+=a.attributes.position.count*3,a.dispose();let o=new Rt;return o.setAttribute("position",new Yt(n,3)),o.setAttribute("normal",new Yt(s,3)),o.computeBoundingSphere(),o}function FT(i,e){let t=[],n=[],s=i.reduce((a,c)=>a+c[0],0)/i.length,r=i.reduce((a,c)=>a+c[1],0)/i.length;for(let a=0;a<i.length;a++){let[c,l]=i[a],[h,u]=i[(a+1)%i.length],f=h-c,d=u-l;if(Math.hypot(f,d)<1e-6)continue;let p=d,x=-f;p*((c+h)/2-s)+x*((l+u)/2-r)<0&&(p=-p,x=-x);let m=Math.hypot(p,x);p/=m,x/=m;let g=[c,0,l],y=[c,e,l],w=[h,0,u],_=[h,e,u],v=-d*p+f*x>0?[g,w,_,g,_,y]:[g,_,w,g,y,_];for(let M of v)t.push(...M),n.push(p,0,x)}let o=new Rt;return o.setAttribute("position",new rt(t,3)),o.setAttribute("normal",new rt(n,3)),o}function Up(i,e,t){let n=new zs,s=i/2-t,r=e/2-t;return n.moveTo(-s,-e/2),n.lineTo(s,-e/2),n.absarc(s,-r,t,-Math.PI/2,0,!1),n.lineTo(i/2,r),n.absarc(s,r,t,0,Math.PI/2,!1),n.lineTo(-s,e/2),n.absarc(-s,r,t,Math.PI/2,Math.PI,!1),n.lineTo(-i/2,-r),n.absarc(-s,-r,t,Math.PI,Math.PI*1.5,!1),n}function UT(i,e,t,n,s,r){i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function Br(i,e,t,n,s){let r=Math.cos(s),o=Math.sin(s);return[i+t*r+n*o,e-t*o+n*r]}function Gn(i,e,t,n,s=0){return[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]].map(([r,o])=>Br(i,e,r,o,s))}function Au(i,e,t,n){return Array.from({length:n},(s,r)=>[i+t*Math.cos(r/n*Math.PI*2),e+t*Math.sin(r/n*Math.PI*2)])}function Jx(i){let e=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of e){for(;n.length>=2&&t(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of e.reverse()){for(;s.length>=2&&t(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function Gl(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Op(i,e,t){let n=Gl(i,e);t(n.getContext("2d",{willReadFrequently:!0}),i,e);let s=new Ti(n);return s.colorSpace=dt,s.anisotropy=8,s}function jx(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var OT=20;var mi=.36,ys=1.6;var _s=new Q(9.05,-2.6),Iu=Object.freeze([3,5,7,9]),BT=/^(desk|screen|lounge)_(\d{2})$/,kT=/^lamp_(\d{2})$/,Ru=["floor_open","floor_closed","roof","elevator_shaft","elevator_cabin"],zT=new Set(Iu);async function i_(i){let e=null;try{if(new URLSearchParams(location.search).get("placeholder")==="1")throw new Error("?placeholder=1");let o=await Promise.race([new sa().loadAsync(`${i}/office.glb`),new Promise((a,c)=>setTimeout(()=>c(new Error("timeout")),25e3))]);o.scene.updateMatrixWorld(!0),o.scene.getObjectByName("floor_open")?e=o.scene:console.info("[office] office.glb has no floor_open (v1 file): using the procedural v2 placeholder")}catch(o){console.warn("[office] office.glb failed to load, using the procedural placeholder:",o.message)}let t=!e||Ru.some(o=>!e.getObjectByName(o))?n_():null,n={},s=[];for(let o of Ru){let a=e&&e.getObjectByName(o);a?n[o]=a:(n[o]=t.templates[o],s.push(o))}if(e){for(let o of Ru)s.includes(o)||qT(n[o]);s.length&&console.warn("[office] placeholder used for missing nodes:",s.join(", "))}let r=t_(n.floor_open);if(r.desks.filter(Boolean).length<OT){console.warn("[office] floor_open has fewer than 20 desk_NN empties: using placeholder floor_open");let o=t||n_();return n.floor_open=o.templates.floor_open,Qx(n,t_(n.floor_open),o.nightMaps,"placeholder")}return Qx(n,r,t?t.nightMaps:new Map,e?s.length?"glb+placeholder":"glb":"placeholder")}function Qx(i,e,t,n){let s=null;try{new URLSearchParams(location.search).get("floorstyle")!=="0"&&(s=kx(i.floor_open,e.lounges))}catch(r){console.warn("[office] floor styles skipped:",r.message)}try{GT(i.floor_open)}catch(r){console.warn("[office] dept divider skipped:",r.message)}try{HT(i.floor_open,e)}catch(r){console.warn("[office] removed workstations skipped:",r.message)}try{WT(i.floor_open,e)}catch(r){console.warn("[office] manager desk skipped:",r.message)}return{templates:i,spots:e,nightMaps:t,source:n,style:s}}function HT(i,e){if(!i||!e)return;let t=[],n=[],s=-2.7;for(let c of Iu){let l=String(c).padStart(2,"0"),h=i.getObjectByName(`desk_${l}`),u=Math.floor((c-1)/2),f=[-5.7,-4,-2.3,-.6,1.1][u]??-2.3,d=h?h.position.x:f;t.push(h?h.position.clone():new I(d,la,-3.9)),n.push({x:d,zMax:s}),h?.parent&&h.parent.remove(h);for(let p of["screen_","laptop_screen_"]){let x=i.getObjectByName(p+l);x?.parent&&x.parent.remove(x)}e.desks[c-1]=void 0,e.screens[c-1]=void 0}let r=i.getObjectByName("poufs");r&&e_(r,t,.55);let o=i.getObjectByName("laptops");o&&VT(o,n,.55);let a=i.getObjectByName("mugs");a&&e_(a,t,.45)}function e_(i,e,t){s_(i,(n,s,r)=>{let o=t*t;for(let a of e){let c=n-a.x,l=r-a.z;if(c*c+l*l<=o&&Math.abs(s-a.y)<1.4)return!0}return!1})}function VT(i,e,t){s_(i,(n,s,r)=>{if(s<.5||s>1.2)return!1;for(let o of e)if(Math.abs(n-o.x)<=t&&r<o.zMax)return!0;return!1})}function s_(i,e){i.traverse(t=>{if(!t.isMesh||!t.geometry?.attributes?.position)return;let n=t.geometry,s=n.attributes.position,r=n.index,o=[],a=(c,l,h)=>{let u=(s.getX(c)+s.getX(l)+s.getX(h))/3,f=(s.getY(c)+s.getY(l)+s.getY(h))/3,d=(s.getZ(c)+s.getZ(l)+s.getZ(h))/3;return e(u,f,d)};if(r){for(let c=0;c<r.count;c+=3){let l=r.getX(c),h=r.getX(c+1),u=r.getX(c+2);a(l,h,u)||o.push(l,h,u)}n.setIndex(o)}else{for(let c=0;c<s.count;c+=3)a(c,c+1,c+2)||o.push(c,c+1,c+2);if(o.length!==s.count){let c=new Float32Array(o.length*3);for(let l=0;l<o.length;l++){let h=o[l];c[l*3]=s.getX(h),c[l*3+1]=s.getY(h),c[l*3+2]=s.getZ(h)}n.setAttribute("position",new Yt(c,3)),n.deleteAttribute("normal"),n.deleteAttribute("uv")}}n.computeVertexNormals(),n.computeBoundingSphere()})}function GT(i){if(!i||i.getObjectByName("dept_divider"))return;let e=new ht;e.name="dept_divider";let t=new Ut({name:"dept_divider_frost",color:15265523,roughness:.35,metalness:.05,transparent:!0,opacity:.55,side:hn,depthWrite:!1}),n=new Ut({name:"dept_divider_frame",color:1842206,roughness:.45,metalness:.3}),s=-3.15,r=1.49,o=-3.15,a=-2.79,c=o-s,l=a-r,h=Math.hypot(c,l),u=Math.atan2(-l,c),f=.72,d=1.28,p=.04,x=1.15,m=.41,g=h-m*2,y=g/3,w=m+y/2;for(let T=0;T<3;T++){let b=(w+T*y)/h,E=new ht;E.position.set(s+c*b,f,r+l*b),E.rotation.y=u,E.add(new Ie(new Kt(x,d,p),t));let R=x/2,P=d/2;for(let[N,k,D,B]of[[x+.04,.035,0,P+.01],[x+.04,.035,0,-P-.01],[.035,d+.04,-R-.01,0],[.035,d+.04,R+.01,0]]){let X=new Ie(new Kt(N,k,p+.02),n);X.position.set(D,B,0),E.add(X)}e.add(E)}let _=new Ut({name:"dept_divider_oak",color:13215100,roughness:.6}),v=g+.15,M=new Ie(new Kt(v,.05,.12),_);M.position.set((s+o)/2,.06,(r+a)/2),M.rotation.y=u,e.add(M),i.add(e)}function WT(i,e){if(!i||i.getObjectByName("manager_desk")||e.desks[20])return;let t=new ht;t.name="manager_desk";let n=-1.45,s=-3.75,r=new Ut({name:"manager_desk_oak",color:13215100,roughness:.55}),o=new Ut({name:"manager_desk_frame",color:1842206,roughness:.45,metalness:.3}),a=new Ut({name:"manager_desk_seat",color:3815998,roughness:.85}),c=new Ie(new Kt(1.35,.05,.7),r);c.position.set(n,.725,s),t.add(c);for(let[g,y]of[[-.55,-.28],[.55,-.28],[-.55,.28],[.55,.28]]){let w=new Ie(new Kt(.05,.7,.05),o);w.position.set(n+g,.35,s+y),t.add(w)}let l=n,h=s-.72,u=new Ie(new Bn(.24,.26,.08,20),a);u.position.set(l,.46,h),t.add(u);let f=new Ie(new Kt(.42,.42,.08),a);f.position.set(l,.72,h-.2),t.add(f);let d=new Ie(new Bn(.04,.04,.38,12),o);d.position.set(l,.22,h),t.add(d);let p=new Ie(new Kt(.32,.012,.22),new Ut({name:"manager_desk_laptop",color:13225168,roughness:.35,metalness:.75}));p.position.set(n,.756,s+.05),t.add(p);let x=new Ie(new Kt(.32,.2,.008),p.material);x.position.set(n,.86,s+.15),x.rotation.x=.35,t.add(x),i.add(t);let m=new At;m.name="desk_21",m.position.set(l,la,h),m.rotation.y=0,i.add(m),e.desks[20]={pos:new I(l,la,h),yaw:0}}function qT(i){let e=new Map;i.traverse(t=>{if(!t.isMesh)return;let n=XT(t);if(!n)return;t.userData.bakedName=n;let s=t.material;if(!e.has(s)){let r=s.map||s.emissiveMap||s.lightMap||null;r&&(r.colorSpace=dt),e.set(s,new Ct({map:r,color:r?16777215:s.color,name:s.name}))}t.material=e.get(s)})}function XT(i){for(let e=i;e;e=e.parent)if(e.name&&e.name.startsWith("baked_"))return e.name;return null}function t_(i){let e={desks:[],screens:[],lounges:[],lamps:[]};i.updateMatrixWorld(!0);let t=new Qe().copy(i.matrixWorld).invert(),n=new Qe,s=new I,r=new In,o=new I,a=new I;return i.traverse(c=>{let l=BT.exec(c.name),h=kT.exec(c.name);if(!l&&!h)return;if(n.multiplyMatrices(t,c.matrixWorld).decompose(s,r,o),h){e.lamps[Number(h[1])-1]=s.clone();return}a.set(0,0,1).applyQuaternion(r);let u={pos:s.clone(),yaw:Math.atan2(a.x,a.z)};(l[1]==="desk"?e.desks:l[1]==="screen"?e.screens:e.lounges)[Number(l[2])-1]=u}),e}var la=.42,r_=[-3.4,.8],o_=[-5.7,-3.9,-2.1,-.3,1.5],Cu=-2.1,a_=8.8,l_=1.1,c_=[[-5,-3.4],[-2.1,-3.4],[.8,-3.4],[-5,.8],[-2.1,.8],[.8,.8]];function Wn(i,e=.7,t=0,n=""){return new Ut({color:i,roughness:e,metalness:t,name:n})}function It(i,e,t,n,s,r,o,a){let c=new Ie(new Kt(t,n,s),e);return c.position.set(r,o,a),i.add(c),c}function pi(i,e,t,n,s,r,o,a,c=28){let l=new Ie(new Bn(t,n,s,c),e);return l.position.set(r,o,a),i.add(l),l}function aa(i,e,t,n,s,r=0){let o=new At;return o.name=e,o.position.set(t,n,s),o.rotation.y=r,i.add(o),o}function ca(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new Ti(n);return s.colorSpace=dt,s.anisotropy=8,s}function n_(){let i={white:Wn(16053232,.8),oak:Wn(13215100,.6),black:Wn(1842206,.45,.3),fabric:Wn(14341839,1),laptop:Wn(13225168,.35,.75),sofa:Wn(13486529,.95),armchair:Wn(3815998,.8),pot:Wn(16184818,.55),leaf1:Wn(3963719,.75),leaf2:Wn(5937752,.75),leaf3:Wn(3107390,.75),trunk:Wn(7032634,.8),mug:Wn(16777215,.4),counter:Wn(15394785,.6),glass:new Ut({color:14083310,roughness:.05,transparent:!0,opacity:.14,side:hn,depthWrite:!1}),shaftGlass:new Ut({color:14083310,roughness:.05,transparent:!0,opacity:.16,side:hn,depthWrite:!1})},e=()=>new Ut({name:"night_lamp",color:2762532,emissive:16760944,emissiveIntensity:0,roughness:.5}),t=()=>new Ut({name:"night_screen",color:1316635,emissive:10473727,emissiveIntensity:0,roughness:.3}),n=new Map,s={},r=new ht;r.name="floor_open",s.floor_open=r,It(r,i.white,16.4,mi,12.4,0,-mi/2,0).name="slab";let o=YT();n.set("baked_floor",o.night);let a=new Ie(new jt(16,12).rotateX(-Math.PI/2),new Ct({map:o.day,name:"baked_floor"}));a.name="baked_floor",a.position.y=.002,r.add(a),It(r,i.white,.2,2.7,12.4,-8.1,1.35,0);let c=$T();n.set("baked_wall_left",c.night);let l=new Ie(new jt(12,2.7).rotateY(Math.PI/2),new Ct({map:c.day,name:"baked_wall_left"}));l.name="baked_wall_left",l.position.set(-7.995,1.35,0),r.add(l);let h=new Ie(new jt(16,2.7),i.glass);h.position.set(0,1.35,-6),r.add(h);for(let M=-8;M<=8.001;M+=2)It(r,i.black,.07,2.7,.08,M,1.35,-6);It(r,i.black,16.2,.07,.1,0,2.7,-6),It(r,i.black,16,.08,.1,0,.04,-6);let u=(M,T,b,E,R)=>{let P=new Ie(new jt(T,b).rotateY(Math.PI/2),new Ct({color:1382171,name:M}));return P.name=M,P.position.set(-7.96,R,E),r.add(P),P};u("wall_screen",2.6,1.46,-4.3,1.5),u("task_board",3,1.5,.1,1.45);for(let[M,T,b,E]of[[2.68,1.54,-4.3,1.5],[3.08,1.58,.1,1.45]])It(r,i.black,.03,T,M,-7.985,E,b);let f=[];for(let M=0;M<2;M++){let T=r_[M];It(r,i.oak,a_,.05,l_,Cu,.725,T);for(let b of[-4.1,-1.4,1.4,4.1])for(let E of[-1,1])It(r,i.black,.05,.7,.05,Cu+b,.35,T+E*.48);for(let b of[-4.1,4.1])It(r,i.black,.04,.04,.96,Cu+b,.1,T);for(let b=0;b<10;b++){let E=M*10+b+1,R=Math.floor(b/2),P=b%2===0,N=o_[R],k=P?-1:1;if(aa(r,`desk_${String(E).padStart(2,"0")}`,N,la,T+k*1.05,P?0:Math.PI),zT.has(E))continue;pi(r,i.fabric,.26,.29,la,N,la/2,T+k*1.05);let D=new ht;D.position.set(N,.75,T+k*.3),D.rotation.y=P?Math.PI:0,It(D,i.laptop,.32,.012,.22,0,.006,0);let B=new ht;B.position.set(0,.012,-.11),B.rotation.x=-.3,It(B,i.laptop,.32,.21,.008,0,.105,0);let X=new Ie(new jt(.29,.18),t());X.name=`laptop_screen_${String(E).padStart(2,"0")}`,X.position.set(0,.105,.0045),B.add(X),D.add(B),r.add(D),f.push([E,X,P]),b%3===1&&pi(r,i.mug,.04,.035,.09,N+.38,.795,T+k*.1,14)}}r.updateMatrixWorld(!0);for(let[M,T]of f){let b=T.getWorldPosition(new I),E=T.getWorldQuaternion(new In);aa(r,`screen_${String(M).padStart(2,"0")}`,b.x,b.y,b.z).quaternion.copy(E)}c_.forEach(([M,T],b)=>{let E=new ht;E.position.set(M,2.05,T),pi(E,i.black,.09,.2,.2,0,.06,0,24),pi(E,i.black,.008,.008,.9,0,.6,0,6);let R=new Ie(new wr(.075,16,12),e());R.position.y=-.07,E.add(R),r.add(E),aa(r,`lamp_${String(b+1).padStart(2,"0")}`,M,1.95,T)}),It(r,i.sofa,2.7,.42,.95,5.9,.21,.05),It(r,i.sofa,2.7,.52,.24,5.9,.68,-.36);for(let M of[-1,1])It(r,i.sofa,.26,.62,.95,5.9+M*1.22,.31+.1,.05);for(let M=0;M<3;M++)It(r,i.sofa,.8,.1,.66,5.05+M*.85,.47,.12);[[5.05,0],[5.9,1],[6.75,2]].forEach(([M],T)=>aa(r,`lounge_0${T+1}`,M,.52,.12,0));let d=(M,T,b)=>{let E=new ht;E.position.set(M,0,2.1),E.rotation.y=T,It(E,i.armchair,.9,.38,.9,0,.19,0),It(E,i.armchair,.2,.55,.9,-.35,.55,0);for(let R of[-1,1])It(E,i.armchair,.9,.2,.14,0,.5,R*.38);r.add(E),aa(r,b,M,.42,2.1,T)};d(4.15,Math.PI/2,"lounge_04"),d(7.65,-Math.PI/2,"lounge_05"),pi(r,i.oak,.6,.6,.04,5.9,.38,2.1,40),pi(r,i.black,.04,.04,.36,5.9,.18,2.1,10),It(r,i.counter,3.6,1,.6,6,.5,-5.6),It(r,i.oak,3.7,.05,.7,6,1.025,-5.6),It(r,i.black,.4,.4,.3,4.9,1.25,-5.7),pi(r,i.mug,.04,.035,.09,5.5,1.095,-5.5,14),pi(r,i.mug,.04,.035,.09,5.65,1.095,-5.45,14),pi(r,i.black,.2,.2,.05,6.1,.66,-4.8,20),pi(r,i.black,.03,.03,.64,6.1,.33,-4.8,8),aa(r,"lounge_06",6.1,.68,-4.8,0);let p=(M,T,b)=>{let E=new ht;E.position.set(M,0,T),E.scale.setScalar(b),pi(E,i.pot,.3,.22,.6,0,.3,0),pi(E,i.trunk,.04,.05,.9,0,.9,0,8),[[0,1.55,0,.5,i.leaf1],[.3,1.35,.15,.36,i.leaf2],[-.28,1.4,-.12,.34,i.leaf3],[.05,1.95,.05,.34,i.leaf2]].forEach(([R,P,N,k,D])=>{let B=new Ie(new ul(k,2),D);B.position.set(R,P,N),E.add(B)}),r.add(E)};p(-7.2,5.2,1.25),p(7.6,-3.4,1),p(7.5,5,1.2);let x=new ht;x.name="floor_closed",s.floor_closed=x,It(x,i.white,16.4,mi,12.4,0,-mi/2,0);let m=KT(),g=new Ut({name:"night_windows",map:m.diffuse,emissiveMap:m.emissive,emissive:16777215,emissiveIntensity:0,roughness:.22,metalness:.25});m.diffuse.wrapS=m.emissive.wrapS=ai,[[0,6.2,0,16.4],[Math.PI,-6.2,0,16.4],[Math.PI/2,0,8.2,12.4],[-Math.PI/2,0,-8.2,12.4]].forEach(([M,T,b,E],R)=>{let P=new jt(E,1.24),N=P.attributes.uv,k=R*.29%1;for(let B=0;B<N.count;B++)N.setX(B,N.getX(B)*(E/25.6)+k);let D=new Ie(P,g);D.rotation.y=M,D.position.set(M===Math.PI/2?8.2:M===-Math.PI/2?-8.2:0,.62,T),x.add(D)});for(let M of[-1,1])for(let T of[-1,1])It(x,i.counter,.12,1.24,.12,M*8.2,.62,T*6.2);let w=new ht;w.name="roof",s.roof=w,It(w,i.white,16.4,mi,12.4,0,mi/2,0);for(let[M,T,b,E]of[[16.4,.16,0,6.12],[16.4,.16,0,-6.12],[.16,12.4,8.12,0],[.16,12.4,-8.12,0]])It(w,i.white,M,.34,T,b,mi+.17,E);for(let[M,T,b,E,R]of[[1.6,.8,1.1,-4,-2],[1.6,.8,1.1,-1.8,-2],[1.2,.6,1.2,4,2.5],[2.2,1.6,2,5.5,-3.5]])It(w,i.counter,M,T,b,E,mi+T/2,R),It(w,i.black,M*.8,.05,b*.8,E,mi+T+.02,R);let _=new ht;_.name="elevator_shaft",_.position.set(_s.x,0,_s.y),s.elevator_shaft=_;for(let M of[-1,1])for(let T of[-1,1])It(_,i.black,.06,1,.06,M*.72,.5,T*.72);for(let[M,T,b]of[[0,0,.72],[Math.PI,0,-.72],[Math.PI/2,.72,0],[-Math.PI/2,-.72,0]]){let E=new Ie(new jt(1.44,1),i.shaftGlass);E.rotation.y=M,E.position.set(T,.5,b),_.add(E)}let v=new ht;v.name="elevator_cabin",v.position.set(_s.x,0,_s.y),s.elevator_cabin=v,It(v,i.counter,1.3,.06,1.3,0,.03,0);for(let M of[-1,1])for(let T of[-1,1])It(v,i.black,.05,2.2,.05,M*.625,1.1,T*.625);for(let[M,T,b,E]of[[1.3,.05,0,.625],[1.3,.05,0,-.625],[.05,1.3,.625,0],[.05,1.3,-.625,0]])It(v,i.black,M,.05,T,b,2.175,E);for(let[M,T,b]of[[0,0,.625],[Math.PI,0,-.625],[Math.PI/2,.625,0],[-Math.PI/2,-.625,0]]){let E=new Ie(new jt(1.25,2.1),i.shaftGlass);E.rotation.y=M,E.position.set(T,1.1,b),v.add(E)}for(let M of Ru)s[M].traverse(T=>{T.isMesh&&!T.userData.bakedName&&/^baked_/.test(T.name)&&(T.userData.bakedName=T.name)});return{templates:s,nightMaps:n}}var gi=100,Nn=i=>(i+8)*gi,Dn=i=>(i+6)*gi;function YT(){let i=16*gi,e=12*gi,t=[];for(let r of r_){t.push(["rect",Cu,r,a_+.2,l_+.1]);for(let o=0;o<10;o++)t.push(["circle",o_[Math.floor(o/2)],r+(o%2?1.05:-1.05),.3,.3])}t.push(["rect",5.9,.05,2.9,1],["rect",4.15,2.1,.95,.95],["rect",7.65,2.1,.95,.95],["circle",5.9,2.1,.62,.62],["rect",6,-5.6,3.7,.7],["circle",-7.2,5.2,.4,.4],["circle",7.6,-3.4,.35,.35],["circle",7.5,5,.4,.4]);let n=ca(i,e,r=>{r.fillStyle="#F0ECE5",r.fillRect(0,0,i,e);let o=r.createLinearGradient(0,0,i,e);o.addColorStop(0,"#E9E4DC"),o.addColorStop(1,"#F6F3EE"),r.fillStyle=o,r.fillRect(0,0,i,e),r.fillStyle="#DDD9D0",r.beginPath(),r.arc(Nn(5.9),Dn(1.3),2.25*gi,0,7),r.fill(),r.fillStyle="#E6E2DA",r.beginPath(),r.arc(Nn(5.9),Dn(1.3),1.75*gi,0,7),r.fill(),r.save(),r.filter="blur(18px)";for(let l=-8;l<8;l+=2)r.fillStyle="rgba(255,250,238,0.55)",r.beginPath(),r.moveTo(Nn(l+.15),Dn(-6)),r.lineTo(Nn(l+1.85),Dn(-6)),r.lineTo(Nn(l+1.85+5.2),Dn(-6+3.9)),r.lineTo(Nn(l+.15+5.2),Dn(-6+3.9)),r.fill();r.restore(),Bp(r,t,"rgba(70,62,52,0.30)",.45,.55,14),Bp(r,t,"rgba(60,52,44,0.28)",0,0,5);let a=r.createLinearGradient(0,0,130,0);a.addColorStop(0,"rgba(90,80,70,0.30)"),a.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=a,r.fillRect(0,0,130,e);let c=r.createLinearGradient(0,0,0,90);c.addColorStop(0,"rgba(90,80,70,0.18)"),c.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=c,r.fillRect(0,0,i,90)}),s=ca(i,e,r=>{r.fillStyle="#222A3E",r.fillRect(0,0,i,e),r.fillStyle="#2A3248",r.beginPath(),r.arc(Nn(5.9),Dn(1.3),2.25*gi,0,7),r.fill(),r.save(),r.filter="blur(26px)";for(let a=-8;a<8;a+=2)r.fillStyle="rgba(120,150,230,0.10)",r.beginPath(),r.moveTo(Nn(a+.15),Dn(-6)),r.lineTo(Nn(a+1.85),Dn(-6)),r.lineTo(Nn(a+1.85+5.2),Dn(-6+3.9)),r.lineTo(Nn(a+.15+5.2),Dn(-6+3.9)),r.fill();r.restore();for(let[a,c]of c_.concat([[5.9,1.2]])){let l=2.3*gi,h=r.createRadialGradient(Nn(a+.3),Dn(c+.4),0,Nn(a+.3),Dn(c+.4),l);h.addColorStop(0,"rgba(255,196,130,0.5)"),h.addColorStop(1,"rgba(255,196,130,0)"),r.fillStyle=h,r.fillRect(Nn(a+.3)-l,Dn(c+.4)-l,l*2,l*2)}Bp(r,t,"rgba(5,7,14,0.55)",.35,.45,12);let o=r.createLinearGradient(0,0,130,0);o.addColorStop(0,"rgba(0,0,0,0.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(0,0,130,e)});return{day:n,night:s}}function Bp(i,e,t,n,s,r){i.save(),i.filter=`blur(${r}px)`,i.fillStyle=t;for(let[o,a,c,l,h]of e)o==="rect"?i.fillRect(Nn(a+n-l/2),Dn(c+s-h/2),l*gi,h*gi):(i.beginPath(),i.ellipse(Nn(a+n),Dn(c+s),l*gi,h*gi,0,0,7),i.fill());i.restore()}function $T(){let t=ca(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#F7F6F3"),r.addColorStop(.7,"#F2F0EC"),r.addColorStop(1,"#E2DFD9"),s.fillStyle=r,s.fillRect(0,0,1200,270);let o=s.createLinearGradient(1060,0,1200,0);o.addColorStop(0,"rgba(120,110,100,0)"),o.addColorStop(1,"rgba(120,110,100,0.22)"),s.fillStyle=o,s.fillRect(1060,0,140,270)}),n=ca(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#242A3A"),r.addColorStop(.7,"#2A2F3E"),r.addColorStop(1,"#161A26"),s.fillStyle=r,s.fillRect(0,0,1200,270);for(let o of[300,700]){let a=s.createRadialGradient(o,120,0,o,120,320);a.addColorStop(0,"rgba(255,190,120,0.16)"),a.addColorStop(1,"rgba(255,190,120,0)"),s.fillStyle=a,s.fillRect(o-320,0,640,270)}});return{day:t,night:n}}function KT(){let n=ZT(7),s=ca(1024,64,(o,a,c)=>{let l=o.createLinearGradient(0,0,0,c);l.addColorStop(0,"#9AA7B5"),l.addColorStop(.5,"#6E7C8C"),l.addColorStop(1,"#58687A"),o.fillStyle=l,o.fillRect(0,0,a,c),o.fillStyle="#E8EAED";for(let h=0;h<=16;h++)o.fillRect(h*64-2,0,4,c);o.fillRect(0,0,a,4),o.fillRect(0,c-5,a,5),o.fillRect(0,c*.55,a,2)}),r=ca(1024,64,(o,a,c)=>{o.fillStyle="#000",o.fillRect(0,0,a,c);for(let l=0;l<16;l++){if(n()>.42)continue;let h=.45+n()*.35;o.fillStyle=`rgb(${Math.round(255*h)},${Math.round(196*h)},${Math.round(120*h)})`,o.fillRect(l*64+5,8,54,c*.55-10),o.fillRect(l*64+5,c*.55+5,54,c*.45-14)}});return{diffuse:s,emissive:r}}function ZT(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ys=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,wn=class{constructor(e=0,t=.5){this.x=e,this.v=0,this.target=e,this.response=t,this.delay=0,this.pending=null}to(e,t=0){return t>0?(this.pending=e,this.delay=t):(this.target=e,this.pending=null),this}snap(e){return this.x=this.target=e,this.v=0,this.pending=null,this}step(e){this.pending!==null&&(this.delay-=e,this.delay<=0&&(this.target=this.pending,this.pending=null));let t=Ys?Math.min(this.response,.12):this.response,n=2*Math.PI/Math.max(t,.02),s=this.x-this.target,r=this.v+n*s,o=Math.exp(-n*e);return this.x=this.target+(s+r*e)*o,this.v=(this.v-n*r*e)*o,Math.abs(this.x-this.target)<1e-5&&Math.abs(this.v)<1e-5&&(this.x=this.target,this.v=0),this.x}get settled(){return this.x===this.target&&this.v===0&&this.pending===null}},kt=(i,e,t)=>Math.min(t,Math.max(e,i)),Ii=(i,e,t)=>{let n=kt((t-i)/(e-i),0,1);return n*n*(3-2*n)},Wl=(i,e,t)=>i+(e-i)*t;var xi='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',h_={working:"#34C759",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF",idle:"#A1A1A6"},u_={waiting_user:0,error:0,stuck:0,working:1,done:2,idle:3},JT=/^tsk-\d+$/i,Hp=!1,p_=(async()=>{try{document.fonts&&await Promise.race([Promise.all([document.fonts.load("600 24px Inter","Today Tasks 0123456789"),document.fonts.load("500 24px Inter","Working events"),document.fonts.load("700 24px Inter","0123456789")]).then(()=>document.fonts.ready),new Promise(i=>setTimeout(i,2500))])}catch{}Hp=!0})();function f_(i){let e=(i.task||"").trim();return e&&!JT.test(e)?e:(i.step||"").trim()}function m_(i){try{let e=i?new Date(i):new Date,t=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Sofia",hour:"2-digit",hour12:!1}).format(e);return Number(t)%24}catch{return new Date().getHours()}}function d_(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=new Ti(t);return n.colorSpace=dt,n.anisotropy=8,n.minFilter=Jn,n.generateMipmaps=!0,{c:t,g:t.getContext("2d"),tex:n}}function Pu(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function jT(i,e,t,n){let s=String(e).split(/\s+/).filter(Boolean),r=[],o="";for(let a=0;a<s.length;a++){let c=o?`${o} ${s[a]}`:s[a];if(i.measureText(c).width<=t||!o?o=c:(r.push(o),o=s[a]),r.length===n)break}if(r.length<n&&o&&r.push(o),r.length===n&&s.join(" ")!==r.join(" ")){let a=r[n-1];for(;a.length>1&&i.measureText(`${a}\u2026`).width>t;)a=a.slice(0,-1);r[n-1]=`${a.replace(/[\s,.;:]+$/,"")}\u2026`}return r}var Lu=class{constructor(e,t){this.screen=e?{mesh:e,...d_(1536,864),S:1.6,W:960,H:540}:null,this.board=t?{mesh:t,...d_(1800,900),S:1.8,W:1e3,H:500}:null;for(let n of[this.screen,this.board])n&&(n.mat=new Ct({map:n.tex,name:n.mesh.name}),n.mesh.material=n.mat,n.drawn=null);this.screen&&(this.screen.mat.toneMapped=!1),this.sig="",this.data=null,this.accent=null,this.lastDraw=-1e9,this.dirty=!1,this.fontsAtDraw=!1}get materials(){return[this.screen?.mat,this.board?.mat].filter(Boolean)}setData(e){let t=this.signature(e);this.data=e,t!==this.sig&&(this.sig=t,this.dirty=!0)}setAccent(e){e!==this.accent&&(this.accent=e,this.dirty=!0,this.lastDraw=-1e9)}accentDot(e,t,n,s,r,o){e.fillText(t,n,s);let a=e.measureText(t).width;return e.fillStyle=this.accent,e.beginPath(),e.arc(n+a+o*1.3,r,o*.42,0,7),e.fill(),n+a+o*2.6}signature(e){let t=[e.floorName,e.hour,e.now];for(let n of e.bots)t.push(n.id,n.effective_status||n.status,f_(n),n.color,n.today?.events,n.today?.tasks_done,n.today?.working_min,(n.today?.hourly||[]).join(","));return t.join("|")}tick(e,t){if(this.data&&(this.dirty||!this.fontsAtDraw&&Hp)&&e-this.lastDraw>1e3&&(this.lastDraw=e,this.dirty=!1,this.fontsAtDraw=Hp,this.screen&&this.drawScreen(this.data),this.board&&this.drawBoard(this.data)),this.screen){let n=.86*(1-.84*t);this.screen.mat.color.setRGB(n,n,n)}if(this.board){let n=1-.46*t;this.board.mat.color.setRGB(n,n*.97,n*.93)}}drawScreen(e){let{g:t,tex:n,S:s,W:r,H:o}=this.screen;t.setTransform(s,0,0,s,0,0);let a=t.createLinearGradient(0,0,0,o);a.addColorStop(0,"#14171C"),a.addColorStop(1,"#0B0D10"),t.fillStyle=a,t.fillRect(0,0,r,o);let c=t.createRadialGradient(r*.2,0,0,r*.2,0,r*.7);c.addColorStop(0,"rgba(52,199,89,0.10)"),c.addColorStop(1,"rgba(52,199,89,0)"),t.fillStyle=c,t.fillRect(0,0,r,o);let l=e.bots,h=l.filter(N=>(N.effective_status||N.status)==="working").length,u=kp(l,N=>N.today?.events),f=kp(l,N=>N.today?.tasks_done),d=kp(l,N=>N.today?.working_min)/60,p=new Array(24).fill(0);for(let N of l)for(let k=0;k<24;k++)p[k]+=Number(N.today?.hourly?.[k])||0;t.textBaseline="alphabetic",t.fillStyle="#8E8E93",t.font=`500 32px ${xi}`;let x;this.accent?x=this.accentDot(t,"Today",44,62,51,20):(t.fillText("Today \xB7 ",44,62),x=44+t.measureText("Today \xB7 ").width),t.fillStyle="#F5F5F7",t.font=`650 40px ${xi}`,t.fillText(zp(t,e.floorName||"",744-x),x,62),t.fillStyle="#34C759",t.beginPath(),t.arc(r-52,50,7,0,7),t.fill(),t.fillStyle="rgba(52,199,89,0.25)",t.beginPath(),t.arc(r-52,50,14,0,7),t.fill();let m=[[`${h} of ${l.length}`,"working now"],[String(u),"events today"],[String(f),"tasks done"],[d.toFixed(1),"hours worked"]],g=205,y=14,w=44,_=100;m.forEach(([N,k],D)=>{let B=w+D*(g+y);t.fillStyle="rgba(255,255,255,0.065)",Pu(t,B,_,g,108,18),t.fill(),t.fillStyle=D===0?"#34C759":"#F5F5F7",t.font=`700 42px ${xi}`,t.fillText(N,B+20,_+55),t.fillStyle="#8E8E93",t.font=`500 17px ${xi}`,t.fillText(k,B+20,_+86)});let v=44,M=r-88,T=250,b=220;t.fillStyle="#8E8E93",t.font=`500 17px ${xi}`,t.fillText("Events by hour",v,T-4);let E=Math.max(1,...p),R=M/24,P=R*.62;for(let N=0;N<24;N++){let k=v+N*R+(R-P)/2,D=p[N]>0?Math.max(8,p[N]/E*(b-20)):6,B=T+b-D,X=N===e.hour;t.save(),X&&(t.shadowColor="rgba(52,199,89,0.85)",t.shadowBlur=18),t.fillStyle=X?"#34C759":N>e.hour?"rgba(255,255,255,0.08)":p[N]>0?"rgba(52,199,89,0.55)":"rgba(255,255,255,0.10)",Pu(t,k,B,P,D,Math.min(5,P/2)),t.fill(),t.restore()}t.fillStyle="#6E6E73",t.font=`500 15px ${xi}`,t.textAlign="center";for(let N of[0,6,12,18])t.fillText(String(N).padStart(2,"0"),v+N*R+R/2,T+b+26);t.fillText("24",v+23*R+R/2+4,T+b+26),t.textAlign="left",n.needsUpdate=!0}drawBoard(e){let{g:t,tex:n,S:s,W:r,H:o}=this.board;t.setTransform(s,0,0,s,0,0),t.fillStyle="#F1F0EC",t.fillRect(0,0,r,o),t.fillStyle="#FAF9F6",t.fillRect(0,0,r,68),t.fillStyle="#E3E0D9",t.fillRect(0,68,r,2),t.fillStyle="#1D1D1F",t.font=`700 34px ${xi}`;let a;this.accent?a=this.accentDot(t,"Tasks",36,49,37,20):(t.fillText("Tasks",36,49),a=36+t.measureText("Tasks ").width),t.fillStyle="#6E6E73",t.font=`600 26px ${xi}`,t.fillText(`${this.accent?"":"\xB7 "}${zp(t,e.floorName||"",420)}`,a,49);let c=[...e.bots].sort((g,y)=>(u_[g.effective_status||g.status]??3)-(u_[y.effective_status||y.status]??3)||String(g.name).localeCompare(String(y.name))),l=c.slice(0,8),h=c.length-l.length;h>0&&(t.textAlign="right",t.fillStyle="#515154",t.font=`700 28px ${xi}`,t.fillText(`+${h}`,r-36,49),t.textAlign="left"),l.length||(t.fillStyle="#8E8E93",t.font=`600 28px ${xi}`,t.fillText("Nobody on this floor yet",36,160));let u=4,f=30,d=16,p=90,x=(r-f*2-d*(u-1))/u,m=(o-p-28-d)/2;l.forEach((g,y)=>{let w=f+y%u*(x+d),_=p+Math.floor(y/u)*(m+d),v=g.effective_status||g.status;t.save(),t.shadowColor="rgba(40,36,30,0.18)",t.shadowBlur=14,t.shadowOffsetY=3,t.fillStyle="#FFFFFF",Pu(t,w,_,x,m,14),t.fill(),t.restore(),t.fillStyle=g.color||"#A1A1A6",Pu(t,w+10,_+12,9,m-24,4.5),t.fill(),t.fillStyle=h_[v]||h_.idle,t.beginPath(),t.arc(w+x-22,_+26,8,0,7),t.fill(),t.fillStyle="#1D1D1F",t.font=`700 25px ${xi}`,t.fillText(zp(t,g.name||"",x-76),w+32,_+36),t.fillStyle="#3A3A3C",t.font=`600 21px ${xi}`,jT(t,f_(g)||"\u2014",x-52,3).forEach((T,b)=>t.fillText(T,w+32,_+72+b*28))}),n.needsUpdate=!0}};function kp(i,e){let t=0;for(let n of i)t+=Number(e(n))||0;return t}function zp(i,e,t){let n=String(e);if(i.measureText(n).width<=t)return n;for(;n.length>1&&i.measureText(`${n}\u2026`).width>t;)n=n.slice(0,-1);return`${n.trimEnd()}\u2026`}var ql=20,ha=.14,g_=.4,QT=7,eA=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,tA=2.2,Vp=[.2,.26,.42];function nA(i,e){return new Er().loadAsync(`${i}/night/${encodeURIComponent(e)}.jpg`).then(t=>(t.flipY=!1,t.colorSpace=dt,t.anisotropy=8,t)).catch(()=>null)}var kr=class{constructor(e,t,n){this.b=e,this.kind=n,this.root=new ht,this.root.name=`${n}-instance`,this.obj=t.clone(!0),this.root.add(this.obj),this.alpha=1,this.mats=[],this.textures=[],this.screens=[],this.walls=null,this.floorId=null,n!=="shaft"&&n!=="cabin"&&this.obj.position.set(0,0,0);let s=new Map,r=Math.random();if(this.obj.traverse(o=>{if(!o.isMesh)return;let c=(Array.isArray(o.material)?o.material:[o.material]).map(h=>{let u=/^laptop_screen_\d\d$/.test(o.name),f=u?null:s.get(h);return f||(f=h.clone(),u||s.set(h,f),this.register(f,o,r)),f});o.material=Array.isArray(o.material)?c:c[0];let l=/^laptop_screen_(\d\d)$/.exec(o.name);l&&(this.screens[Number(l[1])-1]={mat:c[0],glow:0,target:0})}),n==="open"){let o=this.obj.getObjectByName("wall_screen"),a=this.obj.getObjectByName("task_board");(o||a)&&(this.walls=new Lu(o,a))}}register(e,t,n){this.mats.push(e);let s=t.userData.bakedName;if(s&&e.map&&!e.userData.nightPatched&&this.b.patchBaked(e,s),e.name==="night_lamp")e.emissive.getHex()===0&&e.emissive.set(16760944),e.emissiveIntensity=0,this.b.daylight.track(e,"lamp");else if(e.name==="night_windows"){if(e.emissive.getHex()===0&&e.emissive.set(16777215),e.emissiveIntensity=0,e.emissiveMap){let r=e.emissiveMap.clone(),o=e.map?e.map.clone():null;for(let a of[r,o])a&&(a.wrapS=a.wrapT=ai,a.offset.x=n,a.needsUpdate=!0,this.textures.push(a));e.emissiveMap=r,o&&(e.map=o)}this.b.daylight.track(e,"windows")}else e.name==="night_screen"&&(e.emissive.getHex()===0&&e.emissive.set(10473727),e.emissiveIntensity=0)}setShown(e){this.alpha=e?1:0,this.root.visible=e}dispose(){for(let e of this.mats)this.b.daylight.untrack(e),e.dispose();for(let e of this.textures)e.dispose();this.root.removeFromParent()}},Nu=class{constructor({scene:e,daylight:t,assets:n,baseUrl:s,renderer:r}){this.scene=e,this.daylight=t,this.assets=n,this.baseUrl=s,this.renderer=r,this.group=new ht,this.group.name="building",this.group.visible=!1,e.add(this.group),this.introDrop=!1,this.slots=[],this.byId=new Map,this.styles=new Map,this.activeIndex=-1,this.pool=[],this.sig="",this.floorData=null,this.nightRecs=new Map,this.roof=new kr(this,n.templates.roof,"roof"),this.roofLift=new wn(1,.5),this.group.add(this.roof.root),this.shaft=new kr(this,n.templates.elevator_shaft,"shaft"),this.cabin=new kr(this,n.templates.elevator_cabin,"cabin"),this.group.add(this.shaft.root,this.cabin.root),this.setupElevatorGeometry(),this.cabinY=new wn(0,.55),this.shaftTop=new wn(1,.55),this.lampPositions=Array.from({length:6},()=>new I),t.setLampSource(()=>{let o=this.activeOpen();if(!o)return null;let a=this.assets.spots.lamps;for(let c=0;c<6;c++){let l=a[c];this.lampPositions[c].set(l?l.x:0,l?l.y+o.root.position.y:-99,l?l.z:0)}return{positions:a.length?this.lampPositions:[],k:o.alpha}}),this.screenTargets=new Array(21).fill(0);for(let o=0;o<2;o++){let a=new kr(this,n.templates.floor_open,"open");a.setShown(!1),this.group.add(a.root),this.pool.push(a)}this.pulseT=-1,this.swapped=!0,this.blurPx=0}setupElevatorGeometry(){this.shaftH=1;for(let e of[this.shaft,this.cabin]){e.root.updateMatrixWorld(!0);let t=new sn().setFromObject(e.obj);if(!Number.isFinite(t.min.y))continue;let n=t.getCenter(new I);e.obj.position.y-=t.min.y,(Math.abs(n.x-_s.x)>1.5||Math.abs(n.z-_s.y)>1.5)&&(e.obj.position.x+=_s.x-n.x,e.obj.position.z+=_s.y-n.z),e===this.shaft&&(this.shaftH=Math.max(.01,t.max.y-t.min.y))}}patchBaked(e,t){e.userData.nightPatched=!0;let n=this.nightRecs.get(t);if(!n){let a=this.assets.nightMaps.get(t),c=t.startsWith("style_");n={name:t,uMap:{value:a||e.map},uTint:{value:new I(...a?[1,1,1]:Vp)},dayMap:e.map,tex:null,state:a||c?"static":"idle",since:0},this.nightRecs.set(t,n)}let{uMap:s,uTint:r}=n,o=e.userData.accent?e.accentUniform={value:new pe(1,1,1)}:null;e.onBeforeCompile=a=>{a.uniforms.uNight=this.daylight.uNight,a.uniforms.uNightMap=s,a.uniforms.uNightTint=r,o&&(a.uniforms.uAccent=o),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform sampler2D uNightMap;
uniform vec3 uNightTint;${o?`
uniform vec3 uAccent;`:""}`).replace("#include <map_fragment>",`#ifdef USE_MAP
  vec4 dayC = texture2D( map, vMapUv );
  vec4 nightC = texture2D( uNightMap, vMapUv );
  nightC.rgb *= uNightTint;
  diffuseColor *= mix( dayC, nightC, uNight );
#endif`),o&&(a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= uAccent;`))},e.customProgramCacheKey=()=>o?"bothq-baked-night-accent":"bothq-baked-night"}updateNightMaps(e){let t=this.daylight.night;for(let n of this.nightRecs.values())n.state!=="static"&&(t>.01?(n.since=e,n.state==="idle"&&(n.state="loading",nA(this.baseUrl,n.name).then(s=>{if(!s){n.state="missing";return}n.dayMap&&(s.wrapS=n.dayMap.wrapS,s.wrapT=n.dayMap.wrapT,s.channel=n.dayMap.channel),n.tex=s,n.uMap.value=s,n.uTint.value.set(1,1,1),n.state="ready",n.name==="baked_floor"&&this.styleNight(s.image)}))):n.state==="ready"&&e-n.since>3e4&&(n.uMap.value=n.dayMap,n.uTint.value.set(...Vp),n.tex.dispose(),n.tex=null,n.state="idle",n.name==="baked_floor"&&this.styleNight(null)))}styleNight(e){let t=e&&this.assets.style?qx(e):new Map;for(let n of this.nightRecs.values()){if(!n.name.startsWith("style_"))continue;n.styleNight&&(n.styleNight.dispose(),n.styleNight=null);let s=t.get(n.name);s?(n.styleNight=s,n.uMap.value=s,n.uTint.value.set(1,1,1)):(n.uMap.value=n.dayMap,n.uTint.value.set(...Vp))}}setFloors(e){let t=e.length?e:[{id:"_",name:"",order:1}],n=t.map(r=>r.id).join("|");if(t.forEach((r,o)=>{let a=this.byId.get(r.id);a&&(a.name=r.name,a.index=o)}),n===this.sig)return;this.sig=n,this.styles=this.assets.style?Fx(t):new Map;let s=new Map(t.map((r,o)=>[r.id,o]));for(let r of this.slots)s.has(r.id)||this.disposeSlot(r);this.slots=t.map((r,o)=>{let a=this.byId.get(r.id);return a||(a={id:r.id,name:r.name,index:o,closed:new kr(this,this.assets.templates.floor_closed,"closed"),open:null,lift:new wn(1,.5),showOpen:!1},this.group.add(a.closed.root),a.closed.setShown(!1),this.byId.set(r.id,a)),a.index=o,a});for(let[r]of[...this.byId])s.has(r)||this.byId.delete(r);this.activeIndex=Math.min(this.activeIndex,this.slots.length-1),this.activeSlot&&this.applyStyle(this.activeSlot),this.retarget(!1)}applyStyle(e){let t=this.styles.get(e.id);if(!t||!e.open||(Ox(e.open.obj,t),e.open.walls?.setAccent(t.accent),e!==this.activeSlot))return;let n=this.assets.spots.lounges;this.assets.style.layouts[t.layout].forEach((s,r)=>{let o=n[r];(!o||o.pos.distanceToSquared(s.pos)>1e-6||o.yaw!==s.yaw)&&(n[r]={pos:s.pos.clone(),yaw:s.yaw,lounge:!0})})}disposeSlot(e){e.closed.dispose(),e.open&&(this.pool=this.pool.filter(t=>t!==e.open),e.open.dispose())}get floorCount(){return this.slots.length}get activeSlot(){return this.slots[this.activeIndex]||null}get activeId(){return this.activeSlot?.id??null}get activeY(){return Math.max(0,this.activeIndex)*ys}activeOpen(){return this.activeSlot?.open||null}setActive(e,{intro:t=!1}={}){let n=this.slots.findIndex(o=>o.id===e);if(n<0)return!1;let s=this.activeIndex>=0&&n!==this.activeIndex;this.activeIndex=n;let r=this.slots[n];if(this.acquireOpen(r),this.applyStyle(r),t){for(let o of this.slots)o.lift.snap(1);this.roofLift.snap(1),this.group.visible=!0,this.introDrop=!0}return s&&!t&&!eA?(this.pulseT=0,this.swapped=!1):this.applyShown(),this.retarget(t),t&&(this.cabinY.snap(this.cabinY.target),this.shaftTop.snap(this.shaftTop.target)),!0}applyShown(){this.slots.forEach((e,t)=>{e.showOpen=t===this.activeIndex&&!!e.open})}retarget(e){let t=this.activeIndex;t<0||(this.slots.forEach((n,s)=>{s<=t?n.lift.to(0,e?.05+(t-s)*.08:0):n.lift.to(1)}),this.roofLift.to(1),this.cabinY.to(t*ys),this.shaftTop.to(Math.min(this.slots.length*ys,t*ys+tA+.35)))}acquireOpen(e){if(e.open)return e.open;let t=this.pool.find(s=>!this.slots.some(r=>r.open===s))||this.pool.reduce((s,r)=>r.alpha<s.alpha?r:s,this.pool[0]),n=this.slots.find(s=>s.open===t);return n&&(n.open=null,n.showOpen=!1),t.onSteal?.(),e.open=t,t.floorId=e.id,t.screens.forEach(s=>{s.glow=0,s.target=0}),t}setScreens(e){this.screenTargets=e}setDisplayData(e){this.floorData=e,this.activeOpen()?.walls?.setData(e)}prewarm(e){let t=[this.roof,this.shaft,this.cabin,...this.slots.map(a=>a.closed),...this.pool],n=t.map(a=>a.root.visible);t.forEach(a=>{a.root.visible=!0});let s=this.pool.flatMap(a=>Bx(a.obj)).filter(a=>!a.visible);s.forEach(a=>{a.visible=!0});let r=new Jt(1,1,{type:un}),o=this.renderer.getRenderTarget();this.renderer.setRenderTarget(r),this.renderer.compile(this.scene,e),this.renderer.setRenderTarget(o),r.dispose(),s.forEach(a=>{a.visible=!1}),t.forEach((a,c)=>{a.root.visible=n[c]})}update(e,t){let n=this.activeIndex,s=this.daylight.night,r=this.slots.length;this.pulseT>=0&&(this.pulseT+=e,!this.swapped&&this.pulseT>=ha&&(this.swapped=!0,this.applyShown()),this.pulseT>=ha+g_&&(this.pulseT=-1));let o=this.pulseT<0?0:this.pulseT<ha?Ii(0,ha,this.pulseT):1-Ii(ha,ha+g_,this.pulseT),a=Math.round(o*QT*4)/4;a!==this.blurPx&&(this.blurPx=a,this.renderer.domElement.style.filter=a?`blur(${a}px)`:"");for(let d of this.slots){d.lift.step(e);let p=d.lift.x*(ql+Math.max(0,d.index-n)*ys),x=p<ql*.8,m=d.index*ys+p;d.closed.root.position.y=m,d.closed.setShown(x&&!d.showOpen),d.open&&(d.open.root.position.y=m,d.open.setShown(x&&d.showOpen),d.open.alpha&&this.updateOpen(d,e,t,s))}this.roofLift.step(e);let c=this.roofLift.x*(ql+Math.max(0,r-n)*ys);this.roof.root.position.y=r*ys-mi+c,this.roof.setShown(c<ql*.8),this.cabinY.step(e),this.shaftTop.step(e);let l=this.slots[n];this.introDrop&&(!l||l.lift.x<.001&&l.lift.pending===null)&&(this.introDrop=!1);let h=this.introDrop?l.lift.x*ql:0;this.cabin.root.position.y=this.cabinY.x+h;let u=-mi,f=Math.max(u+.1,this.shaftTop.x);this.shaft.root.position.y=u+h,this.shaft.root.scale.y=(f-u)/this.shaftH,this.updateNightMaps(t)}updateOpen(e,t,n,s){let r=e.open,o=1-Math.exp(-t*3.2),a=this.slots[this.activeIndex]===e;r.screens.forEach((c,l)=>{c&&(c.target=a&&this.screenTargets[l]||0,c.glow+=(c.target-c.glow)*o,c.mat.emissiveIntensity=c.glow*(.32+1.35*s)+s*.03)}),r.walls?.tick(n,s)}};var x_=.32,__=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,iA=__?3:5,sA=__?5:10,rA=`
#include <packing>
#define BQ_LEVEL ${x_.toFixed(3)}
#define BQ_SEARCH ${iA}
#define BQ_TAPS ${sA}
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
}`,oA=`
#ifdef USE_MAP
  {
    vec3 bqD = texture2D( map, vMapUv ).rgb;
    diffuseColor.rgb += diffuse * ( bqRelight( bqD ) - bqD ) * bqDay;
    if ( bqLamp.r + bqLamp.g + bqLamp.b > 0.0 ) diffuseColor.rgb += bqLampPools();
  }
#endif`,Gp=i=>(i/=255,i<=.04045?i/12.92:((i+.055)/1.055)**2.4),Wp=new WeakMap;function aA(i){if(Wp.has(i))return Wp.get(i);let e=new I(.83,.82,.78);try{let t=i.image,n=96,s=Math.max(1,Math.round(96*t.height/t.width)),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,n,s);let a=o.getImageData(0,0,n,s).data,c=[];for(let u=0;u<a.length;u+=4){let f=Gp(a[u]),d=Gp(a[u+1]),p=Gp(a[u+2]);c.push([.2126*f+.7152*d+.0722*p,f,d,p])}c.sort((u,f)=>u[0]-f[0]);let l=Math.floor(c.length*.88),h=Math.max(l+1,Math.floor(c.length*.98));e.set(0,0,0);for(let u=l;u<h;u++)e.x+=c[u][1],e.y+=c[u][2],e.z+=c[u][3];e.divideScalar(h-l)}catch{}return Wp.set(i,e),e}function y_(i){let e={bqSun:{value:new pe(0,0,0)},bqDir:{value:new I(0,1,0)},bqDay:{value:1},bqShadowMap:{value:null},bqShadowMatrix:{value:i.shadow.matrix},bqShadowInfo:{value:new wt(1,1,1,0)},bqLampPos:{value:Array.from({length:6},()=>new I(0,-99,0))},bqLamp:{value:new pe(0,0,0)},bqLampCone:{value:new Q(.7,.9)},bqTable:{value:Array.from({length:4},()=>new wt)},bqTableY:{value:new wt(-99,-99,-99,-99)}};return{relight(t){if(t.userData.sunRelit||!t.map)return;t.userData.sunRelit=!0;let n={value:aA(t.map)},s=t.onBeforeCompile,r=t.customProgramCacheKey;t.onBeforeCompile=(o,a)=>{s.call(t,o,a),Object.assign(o.uniforms,e,{bqAlbedo:n}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBqWorld;
varying vec3 vBqNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
	vBqWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
	vBqNormal = normalize( mat3( modelMatrix ) * normal );`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${rA}`).replace("#include <color_fragment>",`${oA}
#include <color_fragment>`)},t.customProgramCacheKey=()=>`${r.call(t)}|sun`,t.needsUpdate=!0},update(t,n,s,r){e.bqDir.value.copy(t),e.bqSun.value.setRGB(...n,dt).multiplyScalar(Math.max(0,s)*(1/x_-1)),e.bqDay.value=r;let o=i.shadow.map,a=i.shadow.camera;e.bqShadowMap.value=o?o.texture:null,e.bqShadowInfo.value.set(a.right-a.left,a.top-a.bottom,a.far-a.near,o?1:0)},lamps(t,n,s,r,o){e.bqLampPos.value.forEach((a,c)=>{t?.[c]?a.copy(t[c]):a.set(0,-99,0)}),e.bqLamp.value.copy(n),e.bqLampCone.value.set(Math.cos(s),Math.cos(s*(1-r))),e.bqTable.value.forEach((a,c)=>{let l=o[c];l&&a.set(l.x0,l.z0,l.x1,l.z1)}),e.bqTableY.value.set(...[0,1,2,3].map(a=>o[a]?o[a].y:-99))}}}var Mt=i=>{let e=new pe(i);return e.convertLinearToSRGB(),[e.r,e.g,e.b]},fa=i=>i,lA=fa({night:0,bake:0,lamps:0,windows:0,sunI:2.4,sunC:Mt("#FFF1DE"),hemiI:1.05,hemiSky:Mt("#F3F2F0"),hemiGnd:Mt("#CFC8BE"),fillI:.35,fillC:Mt("#E6EEFF"),envI:.5,exposure:1.05,shadow:.34,tint:[1.42,1.43,1.46],floorSun:.72,floorSunC:Mt("#FFF6EC"),glassC:Mt("#D2E4F2"),glassA:.22,glassE:.12}),cA=fa({night:0,bake:0,lamps:0,windows:.05,sunI:2.6,sunC:Mt("#FFEFD9"),hemiI:1,hemiSky:Mt("#E1EAFF"),hemiGnd:Mt("#C6CAD2"),fillI:.38,fillC:Mt("#DCE6FF"),envI:.5,exposure:1.07,shadow:.36,tint:[2.05,2.15,2.35],floorSun:.72,floorSunC:Mt("#FFEEDA"),glassC:Mt("#A6CCF2"),glassA:.82,glassE:.5}),hA=fa({night:0,bake:0,lamps:.15,windows:.15,sunI:2.8,sunC:Mt("#FFA458"),hemiI:.85,hemiSky:Mt("#FFD0A4"),hemiGnd:Mt("#B48466"),fillI:.3,fillC:Mt("#FFC9A4"),envI:.4,exposure:1.05,shadow:.4,tint:[2.3,1.32,.62],floorSun:1,floorSunC:Mt("#FFD27E"),glassC:Mt("#FFC064"),glassA:.86,glassE:1}),uA=fa({night:.5,bake:.3,lamps:.6,windows:.4,sunI:.3,sunC:Mt("#FFC9B0"),hemiI:.8,hemiSky:Mt("#B9C2E6"),hemiGnd:Mt("#8A8798"),fillI:.25,fillC:Mt("#BFC8F0"),envI:.3,exposure:1.04,shadow:.3,tint:[1.3,1.32,1.48],floorSun:0,floorSunC:Mt("#FFEBD2"),glassC:Mt("#7F98CF"),glassA:.6,glassE:.45}),fA=fa({night:.6,bake:.35,lamps:.85,windows:.7,sunI:.3,sunC:Mt("#FF9070"),hemiI:.7,hemiSky:Mt("#8C7896"),hemiGnd:Mt("#3A3040"),fillI:.2,fillC:Mt("#8A80B8"),envI:.28,exposure:1.03,shadow:.32,tint:[1.3,1.02,.84],floorSun:0,floorSunC:Mt("#FFD27E"),glassC:Mt("#4A5487"),glassA:.8,glassE:.5}),dA=fa({night:1,bake:.6,lamps:1,windows:1,sunI:.2,sunC:Mt("#8CA6FF"),hemiI:.4,hemiSky:Mt("#6A6158"),hemiGnd:Mt("#2A2420"),fillI:.15,fillC:Mt("#8C8098"),envI:.2,exposure:1,shadow:.4,tint:[.95,.8,.62],floorSun:0,floorSunC:Mt("#FFEBD2"),glassC:Mt("#1A2A66"),glassA:.92,glassE:.5});function ua(i,e,t){let n={};for(let s in i)n[s]=Array.isArray(i[s])?i[s].map((r,o)=>Wl(r,e[s][o],t)):Wl(i[s],e[s],t);return n}var vs=Math.PI/180,qp={lat:42.7,dec:10,noon:760},pA={"Europe/Sofia":[42.7,23.3],"Europe/Kiev":[50.45,30.5],"Europe/Kyiv":[50.45,30.5],"Europe/Moscow":[55.75,37.6],"Europe/Warsaw":[52.2,21],"Europe/Berlin":[52.5,13.4],"Europe/Paris":[48.85,2.35],"Europe/London":[51.5,-.1],"Europe/Madrid":[40.4,-3.7],"Europe/Rome":[41.9,12.5],"Europe/Istanbul":[41,29],"Asia/Dubai":[25.2,55.3],"Asia/Kolkata":[28.6,77.2],"Asia/Singapore":[1.35,103.8],"Asia/Tokyo":[35.7,139.7],"Australia/Sydney":[-33.9,151.2],"America/New_York":[40.7,-74],"America/Chicago":[41.9,-87.6],"America/Denver":[39.7,-105],"America/Los_Angeles":[34.05,-118.25],"America/Sao_Paulo":[-23.55,-46.6]};function mA(i){if(i.has("lat")&&i.has("lon"))return[Number(i.get("lat")),Number(i.get("lon"))];let e=Intl.DateTimeFormat().resolvedOptions().timeZone;return pA[e]||[45,-new Date().getTimezoneOffset()/4]}function T_(i,e,t){let n=t*vs,s=Math.asin(Math.sin(n)*Math.sin(e)+Math.cos(n)*Math.cos(e)*Math.cos(i)),r=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(n)-Math.tan(e)*Math.cos(n));return[s/vs,r/vs]}function gA(i,e,t){let n=i/864e5-10957.5,s=vs*(357.5291+.98560028*n),r=s+vs*(1.9148*Math.sin(s)+.02*Math.sin(2*s)+3e-4*Math.sin(3*s)+102.9372)+Math.PI,o=vs*23.4397,a=Math.asin(Math.sin(o)*Math.sin(r)),c=Math.atan2(Math.sin(r)*Math.cos(o),Math.cos(r));return T_(vs*(280.16+360.9856235*n+t)-c,a,e)}function xA(i){return T_(vs*(i-qp.noon)/4,qp.dec*vs,qp.lat)}function _A(i,e){let t=Ii(-40,40,e),n=ua(ua(cA,hA,t),lA,Ii(4,30,i));n=ua(ua(uA,fA,t),n,Ii(-1.5,3,i)),n=ua(dA,n,Ii(-9,-1,i));let s=1-Ii(-6,2,i);return n.sunEl=Wl(Math.max(i,5),42,s),n.sunAz=Wl(kt(270-.3*e,235,305),250,s),n}function yA(i,e){let t=e>0;return i<-5?"night":i<2?t?"dusk":"dawn":i<15?t?"golden":"dawn":"day"}function v_(i){let e=/^(\d{1,2}):(\d{2})$/.exec(String(i||"").trim());return e?kt(Number(e[1]),0,24)*60+kt(Number(e[2]),0,59):null}var vA=2e4,bA=2e3,b_=6,M_=16759668,MA=22,SA=4,S_=.78,w_=.75,$s={x:8.3,z:6.3,y0:-.05,y1:3},wA=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,EA=i=>i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshToonMaterial,E_=/^(slab|glass)/,TA=/^table_\d+$/;function A_({scene:i,renderer:e}){let t=new URLSearchParams(location.search);e.shadowMap.enabled=!0,e.shadowMap.type=Cr;let n=new Vs(16777215,1);n.castShadow=!0,n.shadow.mapSize.setScalar(wA?1024:2048),n.shadow.bias=-5e-4,n.shadow.normalBias=.02,n.shadow.radius=2;let s=new gl(16777215,16777215,1),r=new Vs(16777215,.4);r.position.set(6,5,8),i.add(n,n.target,s,r);let o=[];for(let z=0;z<b_;z++){let ae=new Ar(M_,0,0,S_,w_,2);ae.castShadow=!1,ae.position.set(0,-99,0),i.add(ae,ae.target),o.push(ae)}let a=new pe,c=[],l=y_(n),h=new Map,u=new Set,f=new Set,d={value:0},p={night:0,lampsK:0,windowsK:0,phase:"day",minutes:720,el:45,az:0,params:null},x=null,m=t.get("real")==="1",g=null,y=null,w=null,_=null,v=-1e9,M=-1e9,T=-1e9,b=new I,E=new I,R=new I,P=new pe,N=t.get("time");N&&N!=="auto"&&(x=v_(N));function k(z){x=z&&z!=="auto"?v_(z):null,M=v=-1e9}function D(){let z=new Date;if(x!==null&&!m)[p.el,p.az]=xA(x);else{x!==null&&z.setHours(Math.floor(x/60),x%60,0,0);let[ae,ce]=mA(t);[p.el,p.az]=gA(z.getTime(),ae,ce)}p.minutes=x!==null?x:z.getHours()*60+z.getMinutes()+z.getSeconds()/60,w=_A(p.el,p.az),p.phase=yA(p.el,p.az)}function B(){u.clear(),f.clear(),g.group.traverse(ae=>{if(ae.isMesh)for(let ce of Array.isArray(ae.material)?ae.material:[ae.material])ce.userData.nightPatched&&(u.add(ce),l.relight(ce)),ce.name==="glass_pane"&&f.add(ce)});let z=g.activeOpen();if(z?.root.traverse(ae=>{if(!ae.isMesh)return;let He=(Array.isArray(ae.material)?ae.material:[ae.material]).every(Ve=>EA(Ve)&&!Ve.transparent)&&!E_.test(ae.name)&&!E_.test(ae.parent?.name||"");ae.castShadow=ae.receiveShadow=He}),c=[],z){z.root.updateMatrixWorld(!0);for(let ae of z.obj.children){if(!TA.test(ae.name)||!ae.visible)continue;let ce=new sn().setFromObject(ae);c.push({x0:ce.min.x,z0:ce.min.z,x1:ce.max.x,z1:ce.max.z,y:ce.max.y-z.root.position.y})}}}function X(){let z=g?.activeOpen()?.root;z?z.getWorldPosition(E):E.set(0,0,0);let ae=E.y;E.y+=($s.y0+$s.y1)/2,n.target.position.copy(E),n.position.copy(E).addScaledVector(b,30);let ce=n.shadow.camera;ce.position.copy(n.position),ce.lookAt(E),ce.updateMatrixWorld();let He=1/0,Ve=-1/0,tt=1/0,K=-1/0,ee=1/0,ge=-1/0;for(let ke=0;ke<8;ke++)R.set(E.x+(ke&1?$s.x:-$s.x),ae+(ke&2?$s.y1:$s.y0),E.z+(ke&4?$s.z:-$s.z)),R.applyMatrix4(ce.matrixWorldInverse),He=Math.min(He,R.x),Ve=Math.max(Ve,R.x),tt=Math.min(tt,R.y),K=Math.max(K,R.y),ee=Math.min(ee,R.z),ge=Math.max(ge,R.z);ce.left=He-.1,ce.right=Ve+.1,ce.bottom=tt-.1,ce.top=K+.1,ce.near=Math.max(.1,-ge-.5),ce.far=-ee+.5,ce.updateProjectionMatrix()}function $(z){n.color.setRGB(...z.sunC,dt),n.intensity=z.sunI;let ae=Ko.degToRad(z.sunEl),ce=Ko.degToRad(z.sunAz);b.set(Math.cos(ae)*Math.cos(ce),Math.sin(ae),Math.cos(ae)*Math.sin(ce)),X(),s.color.setRGB(...z.hemiSky,dt),s.groundColor.setRGB(...z.hemiGnd,dt),s.intensity=z.hemiI,r.color.setRGB(...z.fillC,dt),r.intensity=z.fillI,i.environmentIntensity=z.envI,e.toneMappingExposure=z.exposure,d.value=z.bake,p.night=z.night,p.lampsK=z.lamps,p.windowsK=z.windows;for(let[He,Ve]of h)Ve==="lamp"?He.emissiveIntensity=z.lamps*2.4:Ve==="windows"&&(He.emissiveIntensity=z.windows*1.7);for(let He of u)He.color.setRGB(...z.tint);P.setRGB(...z.glassC,dt);for(let He of f)He.color.copy(P),He.emissive.copy(P).multiplyScalar(z.glassE),He.opacity=z.glassA;l.update(b,z.floorSunC,z.floorSun,1-z.bake)}function oe(){let z=_?_():null,ae=z?z.k*p.lampsK:0;for(let He=0;He<b_;He++){let Ve=o[He],tt=z&&z.positions[He];tt?(Ve.position.copy(tt),Ve.target.position.set(tt.x,tt.y-3,tt.z),Ve.intensity=MA*ae):Ve.intensity=0}let ce=g?.activeOpen()?.root.position.y??0;a.set(M_).multiplyScalar(SA*ae),l.lamps(ae>.001?z.positions:null,a,S_,w_,c.map(He=>({...He,y:He.y+ce})))}function Z(z,ae){if(ae-M>vA&&(M=ae,D()),g&&ae-T>bA&&(T=ae,B()),!y)y=w;else{let ce=1-Math.exp(-z/.45);y=ua(y,w,ce)}if(p.params=y,$(y),oe(),ae-v>1e3){v=ae;let ce=document.documentElement;ce.dataset.daylight!==p.phase&&(ce.dataset.daylight=p.phase),ce.style.setProperty("--night",y.night.toFixed(3))}}let te={uNight:d,state:p,update:Z,setTime:k,track(z,ae){h.set(z,ae)},untrack(z){h.delete(z)},setLampSource(z){_=z},setBuilding(z){g=z,T=-1e9},get shadowOpacity(){return y?y.shadow:.3},get night(){return p.night}};return window.bothq=Object.assign(window.bothq||{},{setTime:k,daylight:p}),te}var R_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},AA=new li(-1,1,1,-1,0,1),Xp=class extends Rt{constructor(){super(),this.setAttribute("position",new rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new rt([0,2,0,0,2,0],2))}},RA=new Xp,Ks=class{constructor(e){this._mesh=new Ie(RA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,AA)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var zr=class extends ei{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zo.clone(e.uniforms),this.material=new dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ks(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xl=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Du=class extends ei{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Fu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new zr(R_),this.copyPass.material.blending=hi,this.timer=new yl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xl!==void 0&&(o instanceof Xl?n=!0:o instanceof Du&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Uu=class extends ei{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Yl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ou=class extends ei{constructor(){super(),this.isOutputPass=!0,this.uniforms=Zo.clone(Yl.uniforms),this.material=new zo({name:Yl.name,uniforms:this.uniforms,vertexShader:Yl.vertexShader,fragmentShader:Yl.fragmentShader}),this._fsQuad=new Ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Sl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===El?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Tl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var En={centre:[.5,.45],radii:[.82,.78],stops:[[0,"#FFFFFF"],[.5,"#F8F8FA"],[1,"#E6E7EB"]],shadow:"#0B0C11",layers:[{sigma:4,down:2,w:.4},{sigma:30,down:22,w:.4},{sigma:120,down:70,w:.34}]},Zs=i=>{let e=new pe;return e.setStyle(i,Mn),new I(e.r,e.g,e.b)},I_={stops:[[0,"#243056"],[.5,"#141A2E"],[1,"#080B18"]],shadow:"#000000"};function Yp(i=!1){let e=i?I_:En,[t,n]=En.centre,[s,r]=En.radii,o=e.stops.map(([a,c])=>`${c} ${(a*100).toFixed(1)}%`).join(", ");return`radial-gradient(ellipse ${s*100}% ${r*100}% at ${t*100}% ${n*100}%, ${o})`}var C_=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,CA=`
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
  }`,IA=`
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
  }`;function PA(i,e){return new Jt(Math.max(2,i),Math.max(2,e),{type:un,depthBuffer:!1,minFilter:$t,magFilter:$t,generateMipmaps:!1})}var Bu=class extends ei{constructor(e,t){super(),this.scene=e,this.camera=t,this.needsSwap=!0,this.maskMat=new Ct({color:16777215,toneMapped:!1,side:hn,depthTest:!1,depthWrite:!1,fog:!1}),this.blurMat=new dn({uniforms:{tMap:{value:null},texel:{value:new Q},sigma:{value:0}},vertexShader:C_,fragmentShader:CA,depthTest:!1,depthWrite:!1});let[n,s,r]=En.layers;this.composeMat=new dn({uniforms:{tDiffuse:{value:null},tHold:{value:null},tL0:{value:null},tL1:{value:null},tL2:{value:null},stop0:{value:Zs(En.stops[0][1])},stop1:{value:Zs(En.stops[1][1])},stop2:{value:Zs(En.stops[2][1])},stopMid:{value:En.stops[1][0]},shadowC:{value:Zs(En.shadow)},centre:{value:new Q(...En.centre)},radii:{value:new Q(...En.radii)},push:{value:[new Q,new Q,new Q]},layerW:{value:new I(n.w,s.w,r.w)}},vertexShader:C_,fragmentShader:IA,depthTest:!1,depthWrite:!1}),this.fsQuad=new Ks(this.blurMat),this.t=null,this.size=new Q(1,1),this.setSize(1,1)}setTheme(e){let t=e?I_:En,n=this.composeMat.uniforms;n.stop0.value.copy(Zs(t.stops[0][1])),n.stop1.value.copy(Zs(t.stops[1][1])),n.stop2.value.copy(Zs(t.stops[2][1])),n.shadowC.value.copy(Zs(t.shadow)),this.dark=!!e}setSize(e,t){this.size.set(e,t);let n=this.t;n&&Object.values(n).forEach(r=>r.dispose());let s=r=>PA(Math.round(e/r),Math.round(t/r));this.t={mask:s(4),cA:s(4),cB:s(4),mA:s(8),mB:s(8),hA:s(16),wA:s(32),wB:s(32)}}blur(e,t,n,s,r,o){let a=this.blurMat.uniforms;a.tMap.value=t.texture,a.texel.value.set(s/t.width,r/t.height),a.sigma.value=o,e.setRenderTarget(n),this.fsQuad.material=this.blurMat,this.fsQuad.render(e)}buildAura(e,t){let n={target:e.getRenderTarget(),auto:e.autoClear,color:e.getClearColor(new pe),alpha:e.getClearAlpha(),shadow:e.shadowMap.enabled},s=this.t;e.shadowMap.enabled=!1,e.autoClear=!0,e.setClearColor(0,0),e.setRenderTarget(s.mask);let r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.maskMat,e.render(this.scene,this.camera),this.scene.overrideMaterial=r,e.autoClear=!1;let o=En.layers.map((a,c)=>Math.min(13,a.sigma*t/[4,8,32][c]));this.blur(e,s.mask,s.cB,1,0,o[0]),this.blur(e,s.cB,s.cA,0,1,o[0]),this.blur(e,s.mask,s.mB,0,0,0),this.blur(e,s.mB,s.hA,0,0,0),this.blur(e,s.hA,s.wA,0,0,0),this.blur(e,s.wA,s.wB,1,0,o[2]),this.blur(e,s.wB,s.wA,0,1,o[2]),this.blur(e,s.mB,s.mA,1,0,o[1]),this.blur(e,s.mA,s.mB,0,1,o[1]),e.setRenderTarget(n.target),e.autoClear=n.auto,e.setClearColor(n.color,n.alpha),e.shadowMap.enabled=n.shadow}render(e,t,n){let s=this.composeMat.uniforms,r=this.size.y,o=Math.max(.3,this.camera.zoom||1),a=r/1080*Math.pow(o,.55),c=1/(1+.35*Math.max(0,o-1));this.buildAura(e,a);let l=this.t;s.tDiffuse.value=n.texture,s.tHold.value=s.tL0.value=l.cA.texture,s.tL1.value=l.mB.texture,s.tL2.value=l.wA.texture,En.layers.forEach((h,u)=>s.push.value[u].set(0,h.down*a/r)),s.layerW.value.set(En.layers[0].w,En.layers[1].w*c,En.layers[2].w*c),this.fsQuad.material=this.composeMat,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.fsQuad.render(e)}dispose(){Object.values(this.t).forEach(e=>e.dispose()),this.maskMat.dispose(),this.blurMat.dispose(),this.composeMat.dispose(),this.fsQuad.dispose()}};var P_={name:"BotHQTiltShift",uniforms:{tDiffuse:{value:null},dir:{value:new Q(1,0)},focus:{value:.5},band:{value:.24},falloff:{value:.5},strength:{value:1.5}},vertexShader:`
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
    }`};function LA(){return new URLSearchParams(location.search).get("tiltshift")!=="0"}function L_(i,e,t){let n=i.getSize(new Q),s=i.getPixelRatio(),r=new Jt(n.x*s,n.y*s,{type:un,samples:4}),o=new Fu(i,r);o.setPixelRatio(s),o.renderTarget2.dispose(),o.renderTarget2=new Jt(n.x*s,n.y*s,{type:un}),o.writeBuffer=o.renderTarget2,o.readBuffer=o.renderTarget1,o.addPass(new Uu(e,t));let a=new zr(P_),c=new zr(P_);a.enabled=c.enabled=LA(),o.addPass(a),o.addPass(c),o.addPass(new Ou);let l=new Bu(e,t);o.addPass(l);let h={composer:o,setSize(u,f){o.setPixelRatio(i.getPixelRatio()),o.setSize(u,f);let d=u*i.getPixelRatio(),p=f*i.getPixelRatio();a.uniforms.dir.value.set(1/d,0),c.uniforms.dir.value.set(0,1/p),this.base=1.05*i.getPixelRatio(),a.uniforms.strength.value=c.uniforms.strength.value=this.base},setDark(u){l.setTheme(!!u)},render(u,f,d=1){a.uniforms.focus.value=c.uniforms.focus.value=u,a.uniforms.strength.value=c.uniforms.strength.value=this.base*d,o.render(f)}};return h.setSize(n.x,n.y),h}var Hu=Object.freeze(["coffee","fridge","window","plant","tasks","screen","couch","elevator","chat","pace"]),N_=Object.freeze([12e4,3e5]),D_=Object.freeze([3500,7e3]),et=-.85,mL=Object.freeze([-7,3.2]),NA=Object.freeze([-7,7]),ze=-7,yn=3.2,Gu=Object.freeze([-3.5,-1.95]),Wu=Object.freeze([.8,2.2]),Kl=Object.freeze([-6.85,2.25]),en=-3.15,re=3.9;var an=.48,_i=.46,DA=Object.freeze([-4.47,-3.9,-1.5,.3,2.7]),FA=.35,ku=-3.2,UA=2.8,_e=-5.2,Ot=1.8,ct=-3.55,Hr=2.7,F_=6.5,U_=Object.freeze([{name:"armchair_1",x0:3,x1:4.1,z0:2.29,z1:3.2},{name:"armchair_2",x0:6.5,x1:7.6,z0:2.29,z1:3.2},{name:"sofa",x0:3.69,x1:6.91,z0:.11,z1:1.08},{name:"coffee_table",x0:4.75,x1:5.85,z0:1.85,z1:2.95},{name:"tree_1",x0:6.24,x1:7.75,z0:-2.51,z1:-.9},{name:"tree_3",x0:2.37,x1:3.5,z0:-5.72,z1:-4.95},{name:"coffee_bar",x0:2.85,x1:6.35,z0:-5.53,z1:-4.67},{name:"bar_stools",x0:3.21,x1:5.99,z0:-4.34,z1:-3.96},{name:"service_panel",x0:6.7,x1:7.15,z0:-4.35,z1:-2.45},{name:"service_panel_mid",x0:4.15,x1:4.45,z0:-4.35,z1:-2.45},{name:"lounge_panel",x0:3.15,x1:3.45,z0:1.3,z1:2.3},{name:"conference_table",x0:4.35,x1:6.75,z0:1.5,z1:2.6}]);function $p(i,e){return i+Math.random()*(e-i)}function O_(i){let e=2166136261;for(let t of String(i))e^=t.codePointAt(0),e=Math.imul(e,16777619);return(e>>>0)/4294967295}function Yu(i={},e="sofa"){let t=(i.lounges||[]).filter(Boolean),n=(i.desks||[]).filter(Boolean),s=t[0]?{x:t[0].pos.x,y:an,z:t[0].pos.z+.85,yaw:Math.PI}:{x:5.9,y:an,z:1.4,yaw:Math.PI},r=t[1]||t[0]?(()=>{let g=t[1]||t[0];return{x:Math.min(Math.max(g.pos.x,4),6.2),y:g.pos.y??an,z:re,yaw:g.yaw||0,sit:.36,lounge:!0}})():{x:5.5,y:an,z:re,yaw:0,sit:.36,lounge:!0},o=e==="media"?{coffee:{x:3.7,y:an,z:2.45,yaw:-Math.PI/2},fridge:{x:3.55,y:an,z:1.2,yaw:-Math.PI/2}}:e==="meeting"?{coffee:{x:4.2,y:an,z:2.9,yaw:0},fridge:{x:6.9,y:an,z:2.9,yaw:Math.PI}}:{coffee:{x:3.85,y:an,z:re,yaw:Math.PI},fridge:{x:1.5,y:an,z:_e,yaw:Math.PI}},a={x:F_-1,y:an,z:re,yaw:-Math.PI/2},c={x:-2.1,y:an,z:-5.15,yaw:Math.PI},l={x:-6.85,y:an,z:.1,yaw:-Math.PI/2},h={x:-6.85,y:an,z:-4.3,yaw:-Math.PI/2},u={x:F_,y:an,z:re,yaw:Math.PI/2},f=n[Math.min(6,n.length-1)]||n[0],d=f?{x:f.pos.x+.85,y:an,z:f.pos.z,yaw:Math.atan2(-.85,0)}:{x:-.3,y:an,z:-2.2,yaw:0},p={x:-2,y:an,z:re,yaw:Math.PI/2},x={x:2.5,y:an,z:re,yaw:-Math.PI/2},m={coffee:{act:"coffee",...o.coffee},fridge:{act:"fridge",...o.fridge},window:{act:"window",...c},plant:{act:"plant",...a},tasks:{act:"tasks",...l},screen:{act:"screen",...h},couch:{act:"couch",...r},elevator:{act:"elevator",...u},chat:{act:"chat",...d},pace:{act:"pace",...p,waypoints:[p,x,p]}};return Hu.map(g=>{let y=m[g];return{act:g,pos:{x:y.x,y:y.y??an,z:y.z},yaw:y.yaw||0,sit:y.sit||0,lounge:!!y.lounge,waypoints:y.waypoints||null}})}function qu(i,e,t,n){return Math.min(i,e)<Math.max(t,n)&&Math.max(i,e)>Math.min(t,n)}function Xu(i,e){return qu(i,e,Gu[0],Gu[1])||qu(i,e,Wu[0],Wu[1])}function bs(i,e){return Math.min(i,e)<en&&Math.max(i,e)>en}function Gr(i){return i>-2.84&&i<1.54}function B_(i){return i+_i>Gu[0]&&i-_i<Gu[1]||i+_i>Wu[0]&&i-_i<Wu[1]}function Vr(i){return Math.abs(i-re)<.08||Math.abs(i-_e)<.08||Math.abs(i-ct)<.08?!1:Gr(i)||B_(i)}function Js(i){return DA.some(e=>Math.abs(i-e)<FA)}function OA(i,e,t){for(let n of U_)if(!(n.name==="sofa"&&Math.max(e,t)<=1.08&&Math.min(e,t)>=et-.05)&&i+_i>n.x0&&i-_i<n.x1&&qu(e,t,n.z0,n.z1))return!0;return!1}function Pi(i,e,t){for(let n of U_)if(t+_i>n.z0&&t-_i<n.z1&&qu(i,e,n.x0-_i,n.x1+_i))return!0;return!1}function Vu(i){return i>en-.15&&i<Kl[1]-.1}function qr(i){return Math.abs(i-ze)<.5?!1:i>Kl[0]-.05&&i<Kl[1]+.15}function k_(i){return Vu(i)||qr(i)||i>4.2&&i<6.9?!1:Ue(et,re,i)}function zu(i){return k_(i)}function Ue(i,e,t=null){if(t==null)return!Xu(i,e);if(Math.abs(t-ze)<.35)return!0;let n=o=>Math.abs(o-et)<1||o>-2.6&&o<-1.1,s=qr(t)&&n(i)&&n(e)&&(Js(e)||Js(i)||e>-2.6&&e<-1.1||i>-2.6&&i<-1.1);return!(t+_i>Kl[0]&&t-_i<Kl[1]&&Xu(i,e)&&!s||OA(t,i,e))}function BA(i,e,t=ze){let n=[t,ze,2.9,1.5,NA[1],5,-5];for(let s of n)if(Ue(i,e,s))return s;return ze}function kA(i,e=null){if(!Js(i))return null;let t=[et,re,_e,ct].filter(n=>Math.abs(n-i)>.15).sort((n,s)=>Math.abs(n-i)-Math.abs(s-i));for(let n of t)if(Ue(i,n,e))return n;return null}function $l(i,e){let t=i.x,n=i.z,s=e.x,r=e.z,o=e.y??i.y??an;if(Math.hypot(s-t,r-n)<1)return[{x:s,y:o,z:r}];if(!Xu(n,r)&&Math.abs(n-r)<.9&&Math.abs(t-s)<2.5&&!bs(t,s)&&!Js(n)&&!Js(r)&&Ue(n,r,t)&&Ue(n,r,s))return[{x:s,y:o,z:r}];let a=[],c=(_,v)=>{let M=a[a.length-1];M&&Math.hypot(M.x-_,M.z-v)<.08||!a.length&&Math.hypot(t-_,n-v)<.08||a.push({x:_,y:o,z:v})},l=t,h=n,u=()=>{if(!(Math.abs(l-ze)<.08)){if(Math.abs(h-re)<.08||Math.abs(h-_e)<.08){c(ze,h),l=ze;return}if(l>en&&(Vr(h)||bs(l,ze))){if(Vu(l)&&Math.abs(h-et)<.25){Pi(l,yn,et)||(c(yn,et),l=yn,h=et),Ue(h,ct,l)&&(c(l,ct),h=ct);let _=Math.min(l,Ot);Math.abs(l-_)>.08&&(c(_,h),l=_),Ue(h,_e,l)?(c(l,_e),h=_e):zu(l)&&(c(l,re),h=re),c(ze,Math.abs(h-re)<.08?re:_e),l=ze,h=Math.abs(h-re)<.08?re:_e;return}if(Vr(h)&&!Ue(h,re,l)&&!Ue(h,ct,l)&&!Ue(h,_e,l)){let _=[l+1,l-1,l+1.8,l-1.8,2.7,yn,1.5];for(let v of _)if(!(Math.abs(v-l)<.08)&&!(bs(l,v)&&Gr(h))&&!Pi(l,v,h)&&(Ue(h,re,v)||Ue(h,_e,v)||Ue(h,ct,v))){c(v,h),l=v;break}}if(Vr(h)&&(Ue(h,re,l)?(c(l,re),h=re):Ue(h,ct,l)?(c(l,ct),h=ct):Ue(h,_e,l)&&(c(l,_e),h=_e)),Math.abs(l-yn)>.08&&!bs(l,yn)&&!Vr(h)&&!Pi(l,yn,h)&&(c(yn,h),l=yn),Math.abs(h-_e)>.12&&Math.abs(h-re)>.12&&(Ue(h,ct,l)?(c(l,ct),h=ct):Ue(h,_e,l)&&(c(l,_e),h=_e)),Math.abs(h-_e)>.12){let _=Math.min(l,Ot);if(Math.abs(l-_)>.08&&!Pi(l,_,h)&&(c(_,h),l=_),Ue(h,_e,l))c(l,_e),h=_e;else if(Ue(h,re,l))c(l,re),h=re;else{if(Math.abs(h-ct)<.08&&l>Ot&&(c(Ot,ct),l=Ot),Ue(h,_e,l))c(l,_e),h=_e;else if(Ue(h,re,l))c(l,re),h=re;else{let M=BA(h,re,yn);if(Math.abs(M-l)>.08&&!Pi(l,M,h)&&!(bs(l,M)&&Gr(h))&&(c(M,h),l=M),Ue(h,re,l))c(l,re),h=re;else if(Ue(h,_e,l))c(l,_e),h=_e;else if(Ue(h,et,l)){c(l,et),h=et,Math.abs(l-yn)>.08&&!Pi(l,yn,h)&&(c(yn,h),l=yn),Ue(h,ct,l)&&(c(l,ct),h=ct);let T=Math.min(l,Ot);Math.abs(l-T)>.08&&(c(T,h),l=T),Ue(h,_e,l)?(c(l,_e),h=_e):Ue(h,re,l)&&(c(l,re),h=re)}else{c(ze,h),l=ze,c(ze,re),h=re;return}}let v=Math.abs(h-re)<.08?re:Math.abs(h-_e)<.08?_e:re;if(Math.abs(h-v)>.12&&Ue(h,v,l))c(l,v),h=v;else if(Math.abs(h-v)>.12){c(ze,h),l=ze,c(ze,v),h=v;return}c(ze,v),l=ze,h=v;return}}if(Math.abs(h-re)<.08){c(ze,re),l=ze,h=re;return}c(ze,_e),l=ze,h=_e;return}Vr(h)&&(Ue(h,re,l)?(c(l,re),h=re):Ue(h,_e,l)&&(c(l,_e),h=_e)),Math.abs(h-ct)<.08&&l>Ot&&(c(Ot,ct),l=Ot,Ue(h,_e,l)?(c(l,_e),h=_e):Ue(h,re,l)&&(c(l,re),h=re)),c(ze,h),l=ze}},f=_=>{if(Math.abs(l-_)<.08)return;let v=_;if(Math.abs(h-ct)<.08&&v>Hr&&(v=Hr),Math.abs(h-ct)<.08&&v<Ot&&l>Ot-.05&&(c(Ot,ct),l=Ot,Ue(h,_e,l)?(c(l,_e),h=_e):u()),(Vr(h)||Gr(h))&&bs(l,v)){Math.abs(h-re)>.12&&(zu(l)&&Math.abs(h-et)<.25||Ue(h,re,l)?(c(l,re),h=re):(u(),Math.abs(h-re)>.12&&(c(ze,re),h=re,l=ze))),c(v,re),l=v,h=re;return}if(Math.abs(h-_e)<.08&&v>Ot){c(Ot,_e),l=Ot,c(l,ct),h=ct,c(Math.min(v,Hr),ct),l=Math.min(v,Hr);return}(B_(h)||Pi(l,v,h))&&Math.abs(l-v)>.5&&(Ue(h,re,l)?(c(l,re),h=re):Ue(h,ct,l)?(c(l,ct),h=ct):Ue(h,_e,l)?(c(l,_e),h=_e):(u(),v=_)),Pi(l,v,h)&&(Ue(h,re,l)?(c(l,re),h=re):(u(),d(re))),Pi(l,v,h)?(c(v,re),l=v,h=re):(c(v,h),l=v)},d=_=>{if(!(Math.abs(h-_)<.12)){if(Ue(h,_,l)){c(l,_),h=_;return}u(),c(ze,_),h=_,l=ze}},p=(_,v)=>{if(Math.abs(l-_)<.08&&Math.abs(h-v)<.12)return;if(Math.abs(v-re)<.12||Math.abs(v-_e)<.12||Math.abs(v-ct)<.12){Math.abs(h-v)>.12&&(Ue(h,v,l)?(c(l,v),h=v):(u(),c(ze,v),h=v,l=ze)),Math.abs(l-_)>.08&&f(_);return}let M=bs(l,_)||l<en&&_>en||l>en&&_<en,T=qr(_)||v<re-.3&&v>et-.2||v<ku&&qr(_);if(M?(u(),Math.abs(h-re)>.12&&(c(ze,re),h=re,l=ze),!T&&Math.abs(l-_)>.08&&(c(_,re),l=_,h=re)):Math.abs(l-_)>.08&&(T||(Math.abs(l-_)>2&&(Vu(l)||_>yn-.5)?(Math.abs(h-re)>.12&&(zu(l)&&Math.abs(h-et)<.25||Ue(h,re,l)?(c(l,re),h=re):(u(),c(ze,re),h=re,l=ze)),c(_,re),l=_,h=re):(Math.abs(h-et)>.12&&Ue(h,et,l)&&(c(l,et),h=et),f(_)))),Math.abs(h-v)<.12)return;if(Math.abs(l-_)<.08&&Ue(h,v,_)){c(_,v),h=v,l=_;return}let b=()=>{Math.abs(h-et)<.15&&l>en||(l>en&&Math.abs(h-_e)<.15||(u(),Math.abs(h-_e)>.12&&(c(ze,_e),h=_e,l=ze)),(Math.abs(h-_e)<.15&&l<Ot-.05||Math.abs(h-_e)<.15&&l>Ot+.05)&&(c(Ot,_e),l=Ot,h=_e),Ue(h,ct,l)&&(c(l,ct),h=ct),Math.abs(l-yn)>.08&&Math.abs(h-ct)<.15&&(c(yn,ct),l=yn,h=ct),Ue(h,et,l)&&(c(l,et),h=et))},E=()=>{if(!(Math.abs(h-et)<.15&&l<en)){if((Math.abs(l-ze)>.08||Math.abs(h-re)>.15)&&(Math.abs(h-re)>.15&&Math.abs(h-_e)>.15&&u(),Math.abs(l-ze)>.08)){let R=Math.abs(h-_e)<.15?_e:re;Math.abs(h-R)>.12?(c(ze,R),h=R):c(ze,h),l=ze}c(ze,et),h=et,l=ze}};if(v<ku&&qr(_)){Math.abs(h-re)<.15?(Math.abs(l-ze)>.08&&(c(ze,re),l=ze),c(ze,_e),h=_e,l=ze):Math.abs(h-_e)>.12&&(u(),Math.abs(h-_e)>.12&&(c(ze,_e),h=_e,l=ze)),Math.abs(l-_)>.08&&(c(_,_e),l=_,h=_e),Math.abs(h-v)>.12&&(c(_,v),h=v,l=_);return}if(v>=UA-.25&&qr(_)){Math.abs(h-re)>.12&&(Ue(h,re,l)&&(Math.abs(h-et)>.15||zu(l))?(c(l,re),h=re):(u(),Math.abs(h-re)>.12&&(c(ze,re),h=re,l=ze))),Math.abs(l-_)>.08&&(c(_,re),l=_,h=re),Math.abs(h-v)>.12&&Ue(re,v,_)?(c(_,v),h=v,l=_):Math.abs(h-v)>.12&&(c(ze,re),c(ze,v),l=ze,h=v,c(_,v),l=_);return}if(qr(_)||v<re-.3&&v>et-.2){let R=_>en;(Math.abs(h-et)>.15||R&&l<en||!R&&l>en)&&(R?b():E()),Math.abs(h-et)<.15&&bs(l,_)&&(R?b():E()),Math.abs(l-_)>.08&&(c(_,et),l=_,h=et),Math.abs(h-v)>.12&&Ue(et,v,_)&&(c(_,v),h=v,l=_);return}Math.abs(h-et)>.12&&Ue(h,et,l)&&k_(l)&&(c(l,et),h=et),Math.abs(l-_)>.08&&f(_),Math.abs(h-v)>.12&&Ue(h,v,_)&&(c(_,v),h=v,l=_)};if(Js(h)){let _=kA(h,l);_!=null&&Ue(h,_,l)?(c(l,_),h=_):d(_??re)}if(Math.abs(t-s)<.55&&Xu(n,r)){if(t>en&&s>en||(u(),Math.abs(h-et)>.12&&(c(ze,et),h=et,l=ze)),p(s,r),!a.length)return[{x:s,y:o,z:r}];let _=a[a.length-1];return(Math.abs(_.x-s)>.05||Math.abs(_.z-r)>.05)&&(!Pi(_.x,s,_.z)&&Ue(_.z,r,s)?a.push({x:s,y:o,z:r}):p(s,r)),a}let x=r<=ct+.25&&s>Ot&&s<=Hr+.05,m=r<ku&&s<=Ot+.25,g=t>en&&s>en,y=t<en&&s<en;if(x)u(),d(_e),f(Ot),d(ct),f(Math.min(s,Hr)),Math.abs(h-r)>.12&&(c(l,r),h=r);else if(m||r<ku&&s<2.6){if(Vu(l)||l>en&&Gr(h))u(),d(_e);else if(Math.abs(h-_e)>.12)if(Ue(h,_e,l))c(l,_e),h=_e;else if(l>en&&Ue(h,ct,l)&&!Pi(l,Math.min(l,Ot),ct)){c(l,ct),h=ct;let _=Math.min(l,Ot);Math.abs(l-_)>.08&&(c(_,ct),l=_),c(l,_e),h=_e}else u(),d(_e);s<=Ot+.2?(f(s),Math.abs(h-r)>.12&&d(r)):(f(Ot),d(ct),f(Math.min(s,Hr)),Math.abs(h-r)>.12&&d(r))}else g?Math.abs(r-re)<.12?(Math.abs(h-re)>.12&&(Ue(h,re,l)?(c(l,re),h=re):d(re)),f(s)):Js(r)||Gr(r)||!Ue(et,r,s)||bs(l,s)?p(s,r):(Math.abs(h-et)>.12&&(Ue(h,et,l)?(c(l,et),h=et):d(et)),f(s),d(r)):y?(Math.abs(h-et)>.12&&(Ue(h,et,l)?(c(l,et),h=et):d(et)),p(s,r)):(u(),d(re),Math.abs(r-re)<.12?f(s):Js(r)||Gr(r)||Vr(r)?p(s,r):Ue(re,r,s)?(f(s),c(s,r),h=r):p(s,r));if(!a.length)return[{x:s,y:o,z:r}];let w=a[a.length-1];return(Math.abs(w.x-s)>.05||Math.abs(w.z-r)>.05)&&p(s,r),a}function Wr(i=!1){return i?$p(5e3,9e3):$p(N_[0],N_[1])}function zA(){return $p(D_[0],D_[1])}function HA(i,{busyIds:e=new Set,preferWorking:t=!1}={}){let n=(i||[]).filter(l=>l&&l.id&&!e.has(l.id));if(!n.length)return null;let s=n.filter(l=>(l.effective_status||l.status)!=="working"),r=n.filter(l=>(l.effective_status||l.status)==="working"),o;if(t&&r.length?o=r:s.length&&r.length?o=Math.random()>.2?s:r:o=s.length?s:r,!o.length)return null;let a=null,c=-1;for(let l of o){let h=O_(l.id)*.35+Math.random();h>c&&(a=l,c=h)}return a}function VA(i,e=null){let t=i||[];if(!t.length)return null;let n=t.filter(r=>r.act!==e),s=n.length?n:t;return s[Math.floor(Math.random()*s.length)]||null}function z_(i,{fast:e=!1}={}){return{floorId:i,nextAt:GA()+Wr(e)*(.4+O_(i)*.6),walkerId:null,phase:"idle",home:null,target:null,until:0,lastAct:null,fast:e}}function GA(){return typeof performance<"u"&&performance.now?performance.now():Date.now()}function H_(i,e){let t=e.now;if(i.phase==="idle"){if(t<i.nextAt)return i;let n=new Set(e.busyIds||[]);for(let c of e.bots||[])(e.isUserBusy?.(c.id)||e.isTraveling?.(c.id))&&n.add(c.id);let s=HA(e.bots,{busyIds:n}),r=VA(e.interacts,i.lastAct);if(!s||!r)return i.nextAt=t+Wr(i.fast),i;let o=e.homeSpotFor(s);if(!o?.pos)return i.nextAt=t+Wr(i.fast),i;let a;if(r.waypoints&&r.waypoints.length){a=[];let c=o.pos;for(let l of r.waypoints)a=a.concat($l(c,l)),c=l}else a=$l(o.pos,r.pos);return i.walkerId=s.id,i.phase="outbound",i.home={pos:{x:o.pos.x,y:o.pos.y,z:o.pos.z},yaw:o.yaw||0},i.target=r,i.lastAct=r.act,e.beginTrip?.(s.id),e.startTravel?.(s.id,a,r.yaw),i}if(!i.walkerId)return i.phase="idle",i.nextAt=t+Wr(i.fast),i;if(e.isUserBusy?.(i.walkerId))return e.clearAct?.(i.walkerId),e.releaseTrip?.(i.walkerId),i.phase="idle",i.walkerId=null,i.target=null,i.home=null,i.nextAt=t+Wr(i.fast),i;if(i.phase==="outbound")return e.isTraveling?.(i.walkerId)||(i.phase="act",i.until=t+zA()*(i.target?.act==="pace"?.55:1),e.setAct?.(i.walkerId,i.target?.act||"idle",i.target?.yaw||0)),i;if(i.phase==="act"){if(t<i.until)return i;let n=i.home;if(!n?.pos)return e.endTrip?.(i.walkerId),i.phase="idle",i.walkerId=null,i.nextAt=t+Wr(i.fast),i;let s=e.actorPos?.(i.walkerId)||n.pos,r=$l(s,n.pos);return i.phase="inbound",e.clearAct?.(i.walkerId),e.startTravel?.(i.walkerId,r,n.yaw),i}return i.phase==="inbound"&&(e.isTraveling?.(i.walkerId)||(e.clearAct?.(i.walkerId),e.endTrip?.(i.walkerId),i.phase="idle",i.walkerId=null,i.target=null,i.home=null,i.nextAt=t+Wr(i.fast))),i}function V_(i){if(!Array.isArray(i)||i.length!==Hu.length)throw new Error(`expected ${Hu.length} interacts, got ${i?.length}`);let e=new Set(i.map(t=>t.act));for(let t of Hu)if(!e.has(t))throw new Error(`missing interact ${t}`);return!0}var $u={working:"#34C759",idle:"#A1A1A6",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF"},WA={waiting_user:"Waiting for you",error:"Error",stuck:"Stuck?",done:"Done",working:"Working",idle:"Resting"},qA=Math.PI/4,Kp=.42,G_=1,Zp=3.5,XA=.9,YA=1.2,$A=.034,KA=Zu([[0,"rgba(255,255,255,0.95)"],[.45,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),ZA=Zu([[0,"rgba(0,0,0,0.38)"],[.6,"rgba(0,0,0,0.12)"],[1,"rgba(0,0,0,0)"]]),JA=Zu([[0,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.42)"],[1,"rgba(255,255,255,0)"]]),jA=Zu([[0,"rgba(255,255,255,0)"],[.6,"rgba(255,255,255,0)"],[.8,"rgba(255,255,255,0.95)"],[.9,"rgba(255,255,255,0.3)"],[1,"rgba(255,255,255,0)"]]),QA=new jt(2,2),e2=.95,Ku=class{constructor(e,t){this.id=e.id,this.ctx=t,this.phase=o2(e.id)%1e3/1e3*Math.PI*2,this.status=null,this.hovered=!1,this.selected=!1,this.anim=null,this.nextBlink=1+Math.random()*3,this.blinkT=-1,this.nextAction=1+Math.random()*2,this.hopCooldown=.6,this.retiring=!1,this.dead=!1,this.hostAlpha=1,this.tagKey="",this.userBusyUntil=0,this.ambientAct=null,this._pathQueue=null,this._ambientTrip=!1,this._reseatPending=!1,this.yawS=new wn(Kp,.3),this.scaleS=new wn(1,.28),this.eyeX=new wn(0,.16),this.eyeY=new wn(0,.16),this.modelScale=1,this.root=new ht,this.pivot=new ht,this.modelWrap=new ht,this.pivot.add(this.modelWrap),this.root.add(this.pivot);let n=new Ie(new jt(.85,.85),new Ct({map:ZA,transparent:!0,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.006,n.renderOrder=1,this.pivot.add(n),this.ring=new Ie(new jt(1.5,1.5),new Ct({map:KA,transparent:!0,depthWrite:!1,color:$u.idle,opacity:0})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=1,this.root.add(this.ring),this.tagEl=document.createElement("div"),this.tagEl.className="hqt",this.tagEl.dataset.mode="off",this.tagEl.innerHTML='<div class="hqt-pill"><i class="hqt-dot"></i><span class="hqt-text"></span></div><div class="hqt-stem"></div>',this.tagText=this.tagEl.querySelector(".hqt-text"),this.tag=new yu(this.tagEl),this.tag.center.set(.5,0),this.tag.position.y=G_+.24,this.tag.visible=!1,this.pivot.add(this.tag),this.setPlaceholderModel(e.color),t.parent.add(this.root)}setPlaceholderModel(e){let t=new Ie(new wr(.46,40,28),t2(e));t.scale.set(1,.95,.82),t.position.y=.44;let n=new el(.042,.085,6,12),s=new Ut({color:1315863,roughness:.25}),r=new Ie(n,s);r.position.set(-.12,.52,.36);let o=new Ie(n,s);o.position.set(.12,.52,.36);let a=new ht;a.add(t,r,o),this.modelScale=1,this.useModel(a,[r,o],!0)}setModel(e,t){let n=[];e.traverse(c=>{/^eye_[LR]/.test(c.name)&&n.push(c),c.isMesh&&t&&/body/.test(c.name+(c.parent?.name||""))&&(c.material=c.material.clone(),c.material.color.set(t))}),n=n.filter(c=>!n.some(l=>l!==c&&r2(l,c)));let s=new sn().setFromObject(e),r=s.getSize(new I),o=G_/Math.max(r.x,r.y,r.z,.01);e.scale.multiplyScalar(o),s.setFromObject(e);let a=s.getCenter(new I);e.position.x-=a.x,e.position.z-=a.z,e.position.y-=s.min.y,this.modelScale=e.scale.x||1,s.setFromObject(e),this.tag.position.y=s.max.y+.24,this.useModel(e,n,!1)}useModel(e,t,n){for(let s of this.pickMeshes||[])this.ctx.pickables.delete(s);this.modelWrap.clear(),this.modelWrap.add(e),this.eyes=t,this.eyeBase=t.map(s=>s.scale.y),this.eyePos=t.map(s=>s.position.clone()),this.pickMeshes=[],e.traverse(s=>{s.isMesh&&(s.userData.actorId=this.id,this.pickMeshes.push(s),this.retiring||this.ctx.pickables.add(s))}),this.placeholder=n}update(e,t,n){let s=e.effective_status||e.status,r=s!==this.status,o=this.status;this.status=s,this.bot=e;let a=$u[s]||$u.idle;this.ring.material.color.set(a),this.tagEl.dataset.status=s,this.tagEl.style.setProperty("--c",a),this.selected=n.selectedBot===e.id,this.renderTag(),t&&this._reseatPending?(this._reseatPending=!1,this._ambientTrip=!1,this.cancelTravel(),this.spot=t,!this.root.position||W_(this.root.position,t.pos)<.04?(this.root.position.copy(t.pos),this.baseYaw=t.yaw):this.travelTo(t)):t&&(!this.spot||W_(this.spot.pos,t.pos)>1e-4)&&(this._ambientTrip?this.spot=t:this.spot?(this.travelTo(t),this.spot=t):(this.dropIn(t),this.spot=t)),this.ring.position.y=.012-(this.spot?this.spot.pos.y:0),r&&o&&(s==="done"?(this.celebrate(),this.hop(.45)):(s==="waiting_user"||s==="error")&&this.hop(.3))}renderTag(){let e=this.status,t=this.bot;if(!t)return;let n=e==="waiting_user"||e==="error"||e==="stuck",s=this.selected?"sel":n?"attn":this.hovered?"hover":"off",r=t.name||"";if(s==="attn"){let a=n2(e,t.step);r=this.hovered?`${t.name} \xB7 ${a}`:a}let o=`${s}|${e}|${r}`;o!==this.tagKey&&(this.tagKey=o,this.tagEl.dataset.mode=s,this.tagText.textContent=r,this.tagEl.title="")}spotIsLounge(){return!!this.spot&&(this.spot.lounge||this.spot.meeting)}isUserBusy(e=performance.now()){return e<(this.userBusyUntil||0)}markUserBusy(e=12e3){this.userBusyUntil=Math.max(this.userBusyUntil||0,performance.now()+e),this.ambientAct=null,this._reseatPending=!0}setAmbientAct(e,t){this.ambientAct=e||null,t!=null&&(this.baseYaw=t)}clearAmbientAct(){this.ambientAct=null}isTraveling(){return!!(this.anim&&this.anim.kind==="travel")||!!(this._pathQueue&&this._pathQueue.length)}cancelTravel(){this.anim=null,this._pathQueue=null}beginAmbientTrip(){this._ambientTrip=!0,this.ambientAct=null}releaseAmbientTrip(){this._ambientTrip=!1,this.ambientAct=null}endAmbientTrip(){this._ambientTrip=!1,this.ambientAct=null,this.cancelTravel()}travelPath(e,t){let n=(e||[]).map(s=>({x:s.x,y:s.y??this.spot?.pos?.y??.48,z:s.z})).filter(s=>Number.isFinite(s.x)&&Number.isFinite(s.z));n.length&&(this._pathQueue=n.slice(1),this._pathFinalYaw=t,this.travelTo({pos:n[0],yaw:t??this.baseYaw??0},{direct:!0}))}setHovered(e){this.hovered!==e&&(this.hovered=e,e&&!this.anim&&this.hop(.2),this.renderTag())}retire(){if(!this.retiring){this.retiring=!0,this.hovered=!1,this.scaleS.to(0);for(let e of this.pickMeshes||[])this.ctx.pickables.delete(e);this.tagEl.dataset.mode="off",this.tag.visible=!1}}dropIn(e){this.root.position.copy(e.pos),this.baseYaw=e.yaw,this.yawS.snap(e.yaw+Kp),this.anim={kind:"drop",t:-(this.ctx.dropDelay||0),dur:.75,from:2.4},this.scaleS.snap(this.ctx.dropDelay>0?.001:1),this.ctx.dropDelay>0&&this.scaleS.to(1,this.ctx.dropDelay)}travelTo(e,{direct:t=!1}={}){let n=e.pos?.clone?e.pos.clone():new I(e.pos.x,e.pos.y??.48,e.pos.z),s=e.yaw??this._pathFinalYaw??this.baseYaw??0,r=this.root.position.clone(),o=r.distanceTo(n);if(!t&&!this._pathQueue?.length&&o>=1.2){this.travelPath($l(r,n),s);return}if(Ys||o<.05){this.root.position.copy(n),this.baseYaw=s,this._continuePath(s);return}let a=new I().subVectors(n,r);this.anim={kind:"travel",t:0,dur:Math.max(.8,o/2.6),from:r,to:n,toYaw:s,travelYaw:Math.atan2(a.x,a.z)}}_continuePath(e){if(!this._pathQueue||!this._pathQueue.length){this._pathQueue=null,e!=null&&(this.baseYaw=e);return}let t=this._pathQueue.shift(),n=this._pathQueue.length?Math.atan2(t.x-this.root.position.x,t.z-this.root.position.z):this._pathFinalYaw??e;this.travelTo({pos:t,yaw:n},{direct:!0})}hop(e){Ys||this.anim||this.retiring||(this.anim={kind:"hop",t:0,dur:.62,h:e})}celebrate(){if(Ys||this.retiring)return;this.endCelebration();let e=new pe($u.done),t=new Ie(QA,new Ct({map:jA,color:e,transparent:!0,depthWrite:!1,opacity:0}));t.rotation.x=-Math.PI/2,t.position.y=this.ring.position.y+.003,t.renderOrder=2;let n=new Xa(new Po({map:JA,color:e,transparent:!0,depthWrite:!1,opacity:0}));n.position.y=Math.max(.3,this.tag.position.y-.24)*.55,n.renderOrder=2,this.root.add(t,n),this.fx={t:0,ripple:t,halo:n},this.joy=.75}endCelebration(){if(this.fx){for(let e of[this.fx.ripple,this.fx.halo])e.removeFromParent(),e.material.dispose();this.fx=null}}tickCelebration(e){let t=this.fx;t.t+=e;let n=t.t/e2;if(n>=1){this.endCelebration();return}let s=1-(1-n)**3;t.ripple.scale.setScalar(.4+1.6*s),t.ripple.material.opacity=.8*(1-n)**1.3;let r=Math.min(1,t.t/.55);t.halo.scale.setScalar(.8+1.3*(1-(1-r)**2)),t.halo.material.opacity=.6*Math.sin(Math.PI*r)}tick(e,t){let n=this.pivot,s=this.status,r=0,o=1,a=1,c=0,l=0,h=0;if(!Ys){let v=Math.sin(t*2.1+this.phase);if(a=1+.018*v,o=1-.012*v,s==="working"&&!this.ambientAct){let M=Math.abs(Math.sin(t*12.5+this.phase)),T=Math.sin(t*6.2+this.phase);r=.022*M,c=.11+.05*T,l=.035*Math.sin(t*5.1+this.phase*1.3),a=1+.028*M,o=1-.018*M,this.nextAction-=e,this.nextAction<=0&&!this.anim&&(this.hop(.14+.06*Math.random()),this.nextAction=1.05+Math.random()*.85)}if(s==="stuck"&&(l=.09*Math.sin(t*1.3+this.phase)),s==="error"){let M=(t+this.phase)%1.6;M<.45&&(h=.03*Math.sin(M*70))}if(s==="waiting_user"&&!this.anim&&(this.nextAction-=e,this.nextAction<=0&&(this.hop(.32),this.nextAction=1.7+Math.random()*.6)),this.ambientAct&&!this.anim){let M=this.ambientAct;M==="coffee"||M==="fridge"||M==="plant"||M==="tasks"||M==="screen"?(c=.18+.04*Math.sin(t*4+this.phase),r=.01*Math.abs(Math.sin(t*5+this.phase))):M==="window"||M==="elevator"?(a=1.04+.02*Math.sin(t*2.4+this.phase),c=-.08):M==="chat"?l=.12*Math.sin(t*3.2+this.phase):M==="couch"&&(a=.92,r=-.02)}}if(this.anim){let v=this.anim;v.t+=e;let M=kt(v.t/v.dur,0,1);if(v.kind==="hop")({y:r,sx:o,sy:a}=i2(M,v.h));else if(v.kind==="drop"){v.t<0&&(r=v.from);let T=Math.min(1,M/.55);v.t>=0&&(r=v.from*(1-T*T)),M>.55&&({sx:o,sy:a}=q_((M-.55)/.45))}else if(v.kind==="travel"){let T=s2(M);this.root.position.lerpVectors(v.from,v.to,T);let b=Math.max(1,Math.round(v.dur/.42)),E=M*b%1;r=.55*Math.sin(E*Math.PI),a=1+.12*Math.sin(E*Math.PI),o=1-.07*Math.sin(E*Math.PI),this.baseYaw=M<.92?v.travelYaw:v.toYaw}v.t>=v.dur&&(v.kind==="travel"?(this.root.position.copy(v.to),this.baseYaw=v.toYaw,this.anim=null,this._continuePath(v.toYaw)):this.anim=null)}let u=this.ctx.cursor,f=0,d=0,p=99;if(u?.active&&!this.retiring&&this.hostAlpha>.6){let v=u.x-this.root.position.x,M=u.z-this.root.position.z;p=Math.hypot(v,M),p<Zp&&(f=Ii(Zp,Zp-1.3,p),d=Math.atan2(v,M))}this.hopCooldown-=e,p<XA&&this.hopCooldown<=0&&!this.anim&&!Ys&&(this.hop(.26),this.hopCooldown=YA);let x=(this.baseYaw||0)+(this.anim?.kind==="travel"?0:Kp),m=x;if(this.hovered||this.selected)m=qA;else if(f>0){let M=!this.spotIsLounge()&&s!=="idle"?.8:1.9;m=x+kt(Jp(d,x),-M,M)*f}this.yawS.target=this.yawS.x+Jp(m,this.yawS.x),this.yawS.step(e);let g=this.selected?1.06:1,y=this.scaleS.step(e);if(n.position.set(h,r,0),n.scale.set(o*g*y,a*g*y,o*g*y),n.rotation.set(c,this.yawS.x,l,"YXZ"),f>0&&!this.hovered&&!this.selected){let v=Jp(d,this.yawS.x);this.eyeX.to(Math.sin(kt(v,-1.2,1.2))*$A*f),this.eyeY.to(-.012*f)}else this.eyeX.to(0),this.eyeY.to(0);this.eyeX.step(e),this.eyeY.step(e);let w=s==="working"?.28+.14*Math.sin(t*4.2+this.phase):s==="waiting_user"||s==="error"?.4+.25*(.5+.5*Math.sin(t*5)):s==="stuck"?.3+.15*Math.sin(t*2):0,_=this.selected?.8:this.hovered?Math.max(.4,w):w;this.ring.material.opacity=_*kt(y,0,1),this.ring.scale.setScalar(this.selected?1.12:1),this.fx&&this.tickCelebration(e),this.tag.visible=this.tagEl.dataset.mode!=="off"&&this.hostAlpha>.5&&!this.retiring&&this.scaleS.x>.6,this.tickEyes(e),this.retiring&&this.scaleS.x<.03&&(this.dead=!0,this.dispose())}tickEyes(e){if(!this.eyes.length)return;let t=this.status,n=1;if(t==="idle"&&!this.spotIsLounge()?n=.12:t==="error"?n=.55:t==="stuck"&&(n=.7),n>.5&&!Ys&&(this.nextBlink-=e,this.nextBlink<=0&&(this.blinkT=0,this.nextBlink=2.2+Math.random()*3.5),this.blinkT>=0)){this.blinkT+=e;let r=this.blinkT/.16;r>=1?this.blinkT=-1:n*=Math.max(.1,Math.abs(1-2*r))}this.joy>0&&(this.joy-=e,n=Math.min(n,.32));let s=1/this.modelScale;this.eyes.forEach((r,o)=>{r.scale.y=this.eyeBase[o]*n,r.position.x=this.eyePos[o].x+this.eyeX.x*s,r.position.y=this.eyePos[o].y+this.eyeY.x*s})}dispose(){this.endCelebration();for(let e of this.pickMeshes||[])this.ctx.pickables.delete(e);this.tagEl.remove(),this.root.removeFromParent()}};function t2(i){return new rn({color:i,roughness:.32,clearcoat:1,clearcoatRoughness:.18,sheen:.3})}function W_(i,e){if(!i||!e)return 1/0;let t=i.x-e.x,n=(i.y||0)-(e.y||0),s=i.z-e.z;return t*t+n*n+s*s}function n2(i,e){let t=(e||"").trim();return i==="stuck"||!t?WA[i]||"":(t=t.charAt(0).toUpperCase()+t.slice(1),t.length>34?`${t.slice(0,33).trimEnd()}\u2026`:t)}function i2(i,e){if(i<.15){let t=i/.15;return{y:0,sx:1+.12*t,sy:1-.18*t}}if(i<.7){let t=(i-.15)/.55;return{y:e*Math.sin(t*Math.PI),sx:.93,sy:1.12}}return{y:0,...q_((i-.7)/.3)}}function q_(i){let e=Math.sin(i*Math.PI)*(1-i);return{sx:1+.16*e,sy:1-.2*e}}var s2=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Jp(i,e){return((i-e+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function r2(i,e){for(let t=e.parent;t;t=t.parent)if(t===i)return!0;return!1}function o2(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function Zu(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);for(let[r,o]of i)n.addColorStop(r,o);t.fillStyle=n,t.fillRect(0,0,128,128);let s=new Ti(e);return s.colorSpace=dt,s}var jp=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon"],X_=[...jp,"rounded_cube","cone","trio"],Y_=["none","glasses","stem","antenna","bow"],a2=/^#?[0-9a-f]{6}$/i;function $_(i){if(typeof i!="string")return null;let e=i.trim().toLowerCase().replace(/[\s-]+/g,"_");return X_.includes(e)?e:null}function K_(i){if(typeof i!="string")return"none";let e=i.trim().toLowerCase();return Y_.includes(e)?e:"none"}function Z_(i){return typeof i=="string"&&a2.test(i.trim())?`#${i.trim().replace("#","").toUpperCase()}`:null}function Qp(i){let e=2166136261,t=String(i);for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function J_(i){return jp[(Qp(`shape:${i}`)>>>4)%jp.length]}var Zl=i=>i*Math.PI/180,l2=(i,e,t)=>i+(e-i)*t;function c2(i,e,t,n=720){let s=[];for(let r=0;r<n;r++){let o=2*Math.PI*r/n,a=Math.cos(o),c=Math.sin(o),l=(Math.abs(a/i)**t+Math.abs(c/e)**t)**(-1/t);s.push([l*a,l*c])}return s}function h2(i,e,t){let n=[];for(let s=0;s<i;s++)n.push([e*Math.cos(Zl(t+360*s/i)),e*Math.sin(Zl(t+360*s/i))]);return n}function u2(i,e,t=24){let n=i.length,s=[];for(let o=0;o<n;o++){let a=[i[(o+1)%n][0]-i[o][0],i[(o+1)%n][1]-i[o][1]],c=Math.hypot(a[0],a[1]);s.push([a[1]/c,-a[0]/c])}let r=[];for(let o=0;o<n;o++){let a=s[(o+n-1)%n],c=Math.atan2(a[1],a[0]),l=Math.atan2(s[o][1],s[o][0]);for(;l<c;)l+=2*Math.PI;for(let h=0;h<t;h++){let u=l2(c,l,h/(t-1));r.push([i[o][0]+e*Math.cos(u),i[o][1]+e*Math.sin(u)])}}return r}function f2(i,e,t,n,s=1440){let r=[];for(let o=0;o<s;o++){let a=2*Math.PI*o/s,c=((1+Math.cos(i*(a-Zl(n))))/2)**t,l=e+(1-e)*c;r.push([l*Math.cos(a),l*Math.sin(a)])}return r}function d2(i,e=96){let t=[];for(let[o,a,c]of i)for(let l=0;l<e;l++){let h=2*Math.PI*l/e;t.push([o+c*Math.cos(h),a+c*Math.sin(h)])}t.sort((o,a)=>o[0]-a[0]||o[1]-a[1]);let n=(o,a,c)=>(a[0]-o[0])*(c[1]-o[1])-(a[1]-o[1])*(c[0]-o[0]),s=[],r=[];for(let o of t){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}for(let o=t.length-1;o>=0;o--){let a=t[o];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}return s.slice(0,-1).concat(r.slice(0,-1))}function p2(i,e=720){let t=[];for(let n=0;n<e;n++){let s=2*Math.PI*n/e,r=i[0];for(let o=1;2*o-1<i.length;o++)r+=i[2*o-1]*Math.cos(o*s)+(i[2*o]??0)*Math.sin(o*s);t.push([r*Math.cos(s),r*Math.sin(s)])}return t}function m2(i,e){let t=Math.cos(Zl(e)),n=Math.sin(Zl(e));return i.map(([s,r])=>[s*t-r*n,s*n+r*t])}function j_(i){let e;if(i.kind==="sup")e=c2(i.a,i.b,i.n);else if(i.kind==="star")e=f2(i.k,i.rin,i.p,i.tip);else if(i.kind==="poly")e=u2(h2(i.n,i.R-i.rr,i.rot??90),i.rr),i.sy&&(e=e.map(([t,n])=>[t,n*i.sy]));else if(i.kind==="hull")e=d2(i.circles);else if(i.kind==="fourier")e=p2(i.c);else throw new Error(`outline ${i.kind}`);return i.rotate?m2(e,i.rotate):e}function em(i,e,t=[0,0]){let n=i.length,s=new Float64Array(e);for(let r=0;r<e;r++){let o=2*Math.PI*r/e,a=Math.cos(o),c=Math.sin(o),l=0;for(let h=0;h<n;h++){let u=i[h][0]-t[0],f=i[h][1]-t[1],d=i[(h+1)%n],p=d[0]-t[0]-u,x=d[1]-t[1]-f,m=a*x-c*p;if(Math.abs(m)<1e-12)continue;let g=(u*x-f*p)/m,y=(u*c-f*a)/m;y>=-1e-9&&y<=1+1e-9&&g>l&&(l=g)}s[r]=l}return s}function Ju(i,e=1){let t=i.length,n=Float64Array.from(i);for(let s=0;s<e;s++){let r=new Float64Array(t);for(let o=0;o<t;o++)r[o]=.25*n[(o+t-1)%t]+.5*n[o]+.25*n[(o+1)%t];n=r}return n}var Yr=.8,g2=.018;var Q_=.05,js=i=>i*Math.PI/180,am=[1,0,0,0,1,0,0,0,1],ef=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]];function ly(i,e){let t=new Array(9);for(let n=0;n<3;n++)for(let s=0;s<3;s++)t[n*3+s]=i[n*3]*e[s]+i[n*3+1]*e[3+s]+i[n*3+2]*e[6+s];return t}var um=i=>{let e=Math.cos(js(i)),t=Math.sin(js(i));return[e,-t,0,t,e,0,0,0,1]};function x2(i){let e=i[2];if(e>.99999)return am;let t=[-i[1],i[0],0],n=[0,-t[2],t[1],t[2],0,-t[0],-t[1],t[0],0],s=ly(n,n);return am.map((r,o)=>r+n[o]+s[o]/(1+e))}var pa=i=>{let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]},Xr=(i,e,t)=>i+(e-i)*t,lm=class{constructor(e,t=Yr){let n=e.N??88;this.N=n,this.D=t,this.th=Float64Array.from({length:n},(h,u)=>2*Math.PI*u/n);let s=j_(e.outline),r=Ju(em(s,n),e.smooth??1),o=[],a=[];for(let h=0;h<n;h++)o.push(r[h]*Math.cos(this.th[h])),a.push(r[h]*Math.sin(this.th[h]));let c=Math.max(Math.max(...o)-Math.min(...o),Math.max(...a)-Math.min(...a));this.r=r.map(h=>h*t/c),this.T=(e.depth??.5)*t/2,this.dome=e.dome??.1,this.nb=e.nb??7,this.flat=e.flat??[.45,.8],this.wall=(e.wall??0)*this.T;let l=e.bevel??.92;if(this.W=Ju(this.r.map(h=>Math.min(l*this.T,.85*h)),3),e.inner){let h=Ju(this.r.map((u,f)=>u-this.W[f]),e.inner);this.W=this.W.map((u,f)=>this.r[f]-Math.min(h[f],this.r[f]-.35*u))}this.centre=[0,0]}_interp(e,t){let n=this.N,s=(t%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*n,r=Math.floor(s)%n,o=s-Math.floor(s);return Xr(e[r],e[(r+1)%n],o)}rimAt(e){let t=this._interp(this.r,e);return[this.centre[0]+t*Math.cos(e),this.centre[1]+t*Math.sin(e)]}zAt(e,t){let n=Math.atan2(t,e),s=this._interp(this.r,n),r=this._interp(this.W,n),o=Math.min(Math.hypot(e,t),s*.999),a=s-o;if(a>=r){let l=o/(s-r);return this.T*(1+this.dome*(1-l*l)**2)}let c=1-a/r;return this.wall+(this.T-this.wall)*Math.sqrt(Math.max(0,1-c*c))}nAt(e,t){return cy(this,e,t)}rings(){let{r:e,W:t,T:n,dome:s,N:r,nb:o,wall:a}=this,c=[];for(let u of this.flat)c.push({rho:Float64Array.from({length:r},(f,d)=>u*(e[d]-t[d])),z:n*(1+s*(1-u*u)**2)});for(let u=0;u<=o;u++){let f=Math.PI/2*(u/o);c.push({rho:Float64Array.from({length:r},(d,p)=>e[p]-t[p]*(1-Math.sin(f))),z:a+(n-a)*Math.cos(f)})}let h=(a>0?c:c.slice(0,-1)).slice().reverse().map(u=>({rho:u.rho,z:-u.z}));return c.concat(h)}emit(e=[0,0,0]){let t=this.rings(),n=this.N,s=t.length,r=this.th,o=this.T*(1+this.dome),a=[[e[0],e[1],e[2]+o]];for(let u of t)for(let f=0;f<n;f++)a.push([e[0]+u.rho[f]*Math.cos(r[f]),e[1]+u.rho[f]*Math.sin(r[f]),e[2]+u.z]);a.push([e[0],e[1],e[2]-o]);let c=[];for(let u=0;u<n;u++)c.push([0,1+(u+1)%n,1+u]);for(let u=0;u<s-1;u++)for(let f=0;f<n;f++){let d=(f+1)%n;c.push([1+u*n+f,1+u*n+d,1+(u+1)*n+d,1+(u+1)*n+f])}let l=1+(s-1)*n,h=1+s*n;for(let u=0;u<n;u++)c.push([h,l+u,l+(u+1)%n]);return{V:a,F:c}}},cm=class{constructor(e,t=Yr){this.D=t;let n=t,s=e.rr??.12*(t/Yr),o=(e.width??.9)*t/2-s,a=n-s,c=Math.atan2(o,a-s),l=[[0,0],[o*.5,0],[o,0]],h=7,u=4;for(let x=1;x<=h;x++){let m=Xr(-Math.PI/2,c,x/h);l.push([o+s*Math.cos(m),s+s*Math.sin(m)])}let f=Math.cos(c),d=Math.sin(c);for(let x=1;x<u;x++){let m=x/u;l.push([Xr(o,0,m)+s*f,Xr(s,a,m)+s*d])}for(let x=0;x<=h;x++){let m=Xr(c,Math.PI/2,x/h);l.push([s*Math.cos(m),a+s*Math.sin(m)])}l[l.length-1][0]=0,this.prof=l,this.sectors=e.sectors??56,this.H=n,this.centre=[0,n*.45];let p=l.slice(1).concat(l.slice(1,-1).reverse().map(([x,m])=>[-x,m]));this.N=96,this.r=em(p,this.N,this.centre),this.side=l.slice(3)}rho(e){let t=this.side;if(e<=t[0][1])return t[0][0];for(let n=1;n<t.length;n++)if(e<=t[n][1])return Xr(t[n-1][0],t[n][0],(e-t[n-1][1])/Math.max(1e-9,t[n][1]-t[n-1][1]));return 0}zAt(e,t){let n=this.rho(t),s=Math.min(Math.abs(e),n*.999);return Math.sqrt(Math.max(0,n*n-s*s))}nAt(e,t){return cy(this,e,t)}rimAt(e){let t=(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*this.N,n=Math.floor(t)%this.N,s=t-Math.floor(t),r=Xr(this.r[n],this.r[(n+1)%this.N],s);return[this.centre[0]+r*Math.cos(e),this.centre[1]+r*Math.sin(e)]}emit(e=[0,0,0]){let t=this.prof,n=this.sectors,s=[],r=[],o=[];for(let[a,c]of t){if(a<1e-9){o.push({pole:s.length}),s.push([e[0],e[1]+c,e[2]]);continue}let l=s.length;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;s.push([e[0]+a*Math.cos(u),e[1]+c,e[2]+a*Math.sin(u)])}o.push({start:l})}for(let a=0;a<o.length-1;a++){let c=o[a],l=o[a+1];for(let h=0;h<n;h++){let u=(h+1)%n;c.pole!==void 0?r.push([c.pole,l.start+u,l.start+h]):l.pole!==void 0?r.push([c.start+h,c.start+u,l.pole]):r.push([c.start+h,c.start+u,l.start+u,l.start+h])}}return{V:s,F:r}}};function cy(i,e,t){let n=.004*(i.D/Yr),s=(i.zAt(e+n,t)-i.zAt(e-n,t))/(2*n),r=(i.zAt(e,t+n)-i.zAt(e,t-n))/(2*n);return pa([-s,-r,1])}var hy=(i,e,t,n={})=>({kind:"poly",n:i,R:1,rr:e,rot:t,...n}),ti=(i,e,t,n,s)=>({c:i,sp:e,w:+(t/2.6).toFixed(3),h:t,pair:n,tilt:s}),_2={cloud:[.4644,-.0013,.0016,.0344,.0162,.0252,-.0051,-.0056,-.0039,.0193,-.0015,.0026,-.0043,-.0025,.0049,-.0053,.0015],star4:[.4131,1e-4,0,-3e-4,-.0167,-2e-4,-2e-4,.0736,.0341,-2e-4,-1e-4,2e-4,.0022,-4e-4,0,.0012,-4e-4,1e-4,-1e-4,-.0014,7e-4,2e-4,1e-4,.0027,.0053],clover:[.4623,0,0,.0045,-.0273,2e-4,-1e-4,-.0036,-.0449,-4e-4,1e-4,2e-4,8e-4,-4e-4,0,.0105,-.0056,0,2e-4,-.002,5e-4],bubble:[.4568,.0013,-.0022,.0313,.0104,-.0395,.0269,-.0026,.0079,.0083,.002,7e-4,.0027,-.0027,-1e-4,7e-4,-.0011],flower:[.4574,0,0,.0025,-.022,0,0,.0026,3e-4,2e-4,0,.0207,-.0284,0,0,.0046,.0035,-1e-4,-3e-4,.0023,-.002,0,1e-4,.0014,.0062,-1e-4,1e-4,-.0023,6e-4,3e-4,-2e-4,0,-3e-4,1e-4,3e-4,-.003,-.001,-1e-4,-1e-4,4e-4,-.0018],star6:[.4235,-1e-4,0,.0048,-.0394,0,0,-.0051,-.0014,4e-4,-1e-4,.0417,-.0574,4e-4,2e-4,.0021,.0032,-1e-4,-1e-4,-.003,-2e-4,1e-4,0,.001,.0033,1e-4,1e-4,.0058,-8e-4,-1e-4,3e-4,2e-4,-.0049,-1e-4,0,-6e-4,0]},da=i=>({kind:"fourier",c:_2[i]}),y2={sphere:{type:"slab",outline:{kind:"sup",a:1,b:1,n:2},face:ti([.17,.218],.26,.272,25,36)},cloud:{type:"slab",N:96,smooth:0,inner:10,outline:da("cloud"),face:ti([.161,.15],.214,.236,16,28)},rounded_square:{type:"slab",outline:{kind:"hull",circles:[[.146,.381,.107],[-.393,.195,.141],[-.149,-.383,.106],[.397,-.195,.139]]},face:ti([.08,.023],.18,.212,16,29)},star4:{type:"slab",N:112,smooth:0,depth:.3,bevel:.5,outline:da("star4"),face:ti([.076,.086],.186,.191,16,28)},clover:{type:"slab",N:104,smooth:0,inner:10,outline:da("clover"),face:ti([.062,.081],.212,.212,15,28)},bubble:{type:"slab",N:96,smooth:0,inner:8,outline:da("bubble"),face:ti([.179,.087],.208,.214,16,24)},flower:{type:"slab",N:108,smooth:0,inner:10,outline:da("flower"),face:ti([.107,.033],.179,.213,15,28)},drop:{type:"slab",outline:{kind:"hull",circles:[[.015,-.031,.419],[-.166,.34,.148]]},face:ti([.192,.145],.201,.227,16,27)},pill:{type:"slab",outline:{kind:"hull",circles:[[.149,.042,.339],[-.148,-.042,.34]]},face:ti([.144,.14],.267,.233,15,27)},triangle:{type:"slab",outline:{kind:"hull",circles:[[.723,-.02,.185],[-.23,.471,.319],[-.222,-.339,.41]]},face:ti([.145,.213],.201,.216,12,54)},pentagon:{type:"slab",outline:{kind:"hull",circles:[[.276,.325,.101],[-.184,.425,.177],[-.414,.049,.157],[-.202,-.411,.151],[.41,-.181,.211]]},face:ti([.075,.053],.203,.222,15,28)},star6:{type:"slab",N:108,smooth:0,depth:.3,bevel:.5,outline:da("star6"),face:ti([.092,.017],.189,.202,16,28)},hexagon:{type:"slab",outline:{kind:"hull",circles:[[.264,.33,.112],[-.154,.4,.152],[-.404,.073,.162],[-.267,-.334,.108],[.153,-.399,.153],[.412,-.073,.155]]},face:ti([.1,.029],.275,.274,15,28)},rounded_cube:{type:"slab",outline:{...hy(4,.27,45),rotate:18},depth:.74,bevel:.62,wall:.5,face:{c:[.04,.03],sp:.22,w:.1,h:.23,pair:12,tilt:25}},cone:{type:"lathe",face:{c:[0,.31],sp:.22,w:.105,h:.23,pair:0,tilt:0}},trio:{type:"trio"}},v2=[{key:"a",mat:0,D:.42,at:[-.2,.2,0],def:{type:"slab",N:48,nb:5,flat:[.5],outline:{kind:"sup",a:1,b:.93,n:2.4,rotate:5},face:{c:[.12,.08],sp:.25,w:.12,h:.25,pair:14,tilt:18}}},{key:"b",mat:1,D:.46,at:[.19,.23,.05],primary:!0,def:{type:"slab",N:48,nb:5,flat:[.5],outline:{...hy(6,.3,90),rotate:-6},face:{c:[.03,-.02],sp:.26,w:.11,h:.25,pair:10,tilt:4}}},{key:"c",mat:2,D:.42,at:[.02,.57,-.09],host:!0,def:{type:"slab",N:60,nb:5,flat:[.5],depth:.4,bevel:.7,outline:{kind:"star",k:6,rin:.58,p:1.1,tip:90},face:{c:[0,-.07],sp:.25,w:.115,h:.24,pair:0,tilt:0}}}];function ey(i,e){return i.type==="lathe"?new cm(i,e):new lm(i,e)}function Qu(i,e,t,n=16,s=10,r=2.7){let o=[[0,0,t]];for(let h=1;h<s;h++){let u=Math.PI*h/s;for(let f=0;f<n;f++){let d=2*Math.PI*f/n,p=Math.cos(d),x=Math.sin(d),m=(Math.abs(p)**r+Math.abs(x)**r)**(-1/r);o.push([i*Math.sin(u)*p*m,e*Math.sin(u)*x*m,t*Math.cos(u)])}}o.push([0,0,-t]);let a=[];for(let h=0;h<n;h++)a.push([0,1+(h+1)%n,1+h]);for(let h=0;h<s-2;h++)for(let u=0;u<n;u++){let f=(u+1)%n;a.push([1+h*n+u,1+h*n+f,1+(h+1)*n+f,1+(h+1)*n+u])}let c=o.length-1,l=1+(s-2)*n;for(let h=0;h<n;h++)a.push([c,l+h,l+(h+1)%n]);return{V:o,F:a}}function b2(i,e,t=22,n=8){let s=[],r=[];for(let o=0;o<t;o++){let a=2*Math.PI*o/t;for(let c=0;c<n;c++){let l=2*Math.PI*c/n;s.push([(i+e*Math.cos(l))*Math.cos(a),(i+e*Math.cos(l))*Math.sin(a),e*Math.sin(l)])}}for(let o=0;o<t;o++)for(let a=0;a<n;a++)r.push([o*n+a,(o+1)%t*n+a,(o+1)%t*n+(a+1)%n,o*n+(a+1)%n]);return{V:s,F:r}}function ju(i,e,t=8){let n=i.length,s=[],r=[],o=(f,d)=>[f[0]-d[0],f[1]-d[1],f[2]-d[2]],a=(f,d)=>[f[1]*d[2]-f[2]*d[1],f[2]*d[0]-f[0]*d[2],f[0]*d[1]-f[1]*d[0]];for(let f=0;f<n;f++){let d=pa(o(i[Math.min(f+1,n-1)],i[Math.max(f-1,0)])),p=a(d,[0,0,1]);Math.hypot(...p)<1e-6&&(p=a(d,[0,1,0])),p=pa(p);let x=a(d,p);for(let m=0;m<t;m++){let g=2*Math.PI*m/t,y=Math.cos(g)*e[f],w=Math.sin(g)*e[f];s.push([i[f][0]+y*p[0]+w*x[0],i[f][1]+y*p[1]+w*x[1],i[f][2]+y*p[2]+w*x[2]])}}for(let f=0;f<n-1;f++)for(let d=0;d<t;d++){let p=(d+1)%t;r.push([f*t+d,f*t+p,(f+1)*t+p,(f+1)*t+d])}let c=pa(o(i[1],i[0])),l=pa(o(i[n-1],i[n-2])),h=s.length;s.push([i[0][0]-c[0]*e[0]*.5,i[0][1]-c[1]*e[0]*.5,i[0][2]-c[2]*e[0]*.5]);let u=s.length;s.push([i[n-1][0]+l[0]*e[n-1]*.8,i[n-1][1]+l[1]*e[n-1]*.8,i[n-1][2]+l[2]*e[n-1]*.8]);for(let f=0;f<t;f++){let d=(f+1)%t;r.push([h,d,f]),r.push([u,(n-1)*t+f,(n-1)*t+d])}return{V:s,F:r}}var ty=(i,e,t,n)=>[0,1,2].map(s=>(1-n)**2*i[s]+2*(1-n)*n*e[s]+n*n*t[s]),Jl=(i,e,t=[0,0,0])=>i.map(n=>{let s=ef(e,n);return[s[0]+t[0],s[1]+t[1],s[2]+t[2]]});function uy(i,e,t,n,s=.7){let r=i.zAt(e,t),o=i.nAt(e,t),a=pa([s*o[0],s*o[1],s*o[2]+(1-s)]);return{z:r,M:ly(x2(a),um(n))}}function M2(i,e){let{body:t,at:n,D:s}=i,r={...i.face};e==="glasses"&&i.glasses&&(r.sp=Math.max(r.sp,.25),r.h=Math.min(r.h,.2),r.w=Math.min(r.w,.09));let o=[r.c[0]*s,r.c[1]*s],a=[Math.cos(js(r.pair))*r.sp*s/2,Math.sin(js(r.pair))*r.sp*s/2],c=r.w*s/2,l=r.h*s/2,h=.62*c,u=[];for(let[f,d]of[["L",[o[0]-a[0],o[1]-a[1]]],["R",[o[0]+a[0],o[1]+a[1]]]]){let{z:p,M:x}=uy(t,d[0],d[1],r.tilt),m=Qu(c,l,h,i.eyeSeg??16,i.eyeRings??10);u.push({side:f,c:d,M:x,centre:[d[0]+n[0],d[1]+n[1],p+.15*h+n[2]],V:Jl(m.V,x),F:m.F})}return u}function ny(i,e=0){let t=-Math.sin(js(e)),n=Math.cos(js(e)),s=-1/0,r=i.rimAt(Math.PI/2);for(let o=0;o<180;o++){let a=i.rimAt(2*Math.PI*o/180),c=a[0]*t+a[1]*n;c>s+1e-9&&(s=c,r=a)}return r}function iy(i,e,t,n){let{body:s,at:r,D:o}=e,a=o/Yr,c=(h,u=0)=>[h[0]+r[0],h[1]+r[1],u+r[2]],l=[];if(i==="stem"){let h=ny(s,20),u=[h[0]+.012*a,h[1]-.045*a,0],f=[u[0]-.035*a,u[1]+.09*a,0],d=[u[0]-.1*a,u[1]+.155*a,0],p=Array.from({length:11},(m,g)=>g/10),x=ju(p.map(m=>c(ty(u,f,d,m))),p.map(m=>a*(.045-.01*m)),8);l.push({...x,mat:0})}else if(i==="antenna"){let h=ny(s),u=[h[0]-.01*a,h[1]-.06*a,0],f=[u[0]+.015*a,u[1]+.1*a,0],d=[u[0]+.05*a,u[1]+.2*a,0],p=Array.from({length:9},(w,_)=>_/8),x=ju(p.map(w=>c(ty(u,f,d,w))),p.map(w=>a*(.036-.008*w)),8);l.push({...x,mat:0});let m=.075*a,g=Qu(m,m,m,14,10,2),y=c([d[0]+.004*a,d[1]+.5*m],0);l.push({V:g.V.map(w=>[w[0]+y[0],w[1]+y[1],w[2]+y[2]]),F:g.F,mat:1})}else if(i==="bow"){let h=js(64),u=s.rimAt(h),f=[u[0]*.93+(1-.93)*s.centre[0],u[1]*.93+(1-.93)*s.centre[1]],d=s.T!==void 0?s.T*.34:.08*a,p=h+Math.PI/2-js(14),x=um(p*180/Math.PI),m=Qu(.13*a,.085*a,.06*a,14,9,2),g=Qu(.06*a,.06*a,.058*a,12,8,2),y=c(f,d);for(let w of[-1,1])l.push({V:Jl(m.V,x,[y[0]+w*.12*a*Math.cos(p),y[1]+w*.12*a*Math.sin(p),y[2]-.004*a]),F:m.F,mat:1});l.push({V:Jl(g.V,am,y),F:g.F,mat:1})}else if(i==="glasses"){let h=Math.min(.118,t.sp*.5-.006)*o,u=.017*o,f=[];for(let y of t.list){let{z:w,M:_}=uy(s,y.c[0],y.c[1],0,.7),v=[y.c[0],y.c[1],w+.004*a],M=b2(h,u,o<.6?14:24,o<.6?6:8);l.push({V:Jl(M.V,_,c([v[0],v[1]],v[2])),F:M.F,mat:0}),f.push(y.c)}let[d,p]=f,x=Math.hypot(p[0]-d[0],p[1]-d[1]),m=[(p[0]-d[0])/x,(p[1]-d[1])/x],g=[];for(let y=0;y<5;y++){let w=y/4,_=d[0]+m[0]*h+(p[0]-d[0]-2*m[0]*h)*w,v=d[1]+m[1]*h+(p[1]-d[1]-2*m[1]*h)*w;g.push(c([_,v],s.zAt(_,v)+u*1.2+.006*a*Math.sin(Math.PI*w)))}l.push({...ju(g,Array(5).fill(u),6),mat:0});for(let[y,w]of[[-1,d],[1,p]]){let _=[];for(let v=0;v<9;v++){let M=v/8,T=w[0]+y*m[0]*(h+M*(.4*o-h+.02*a)),b=w[1]+y*m[1]*(h+M*(.4*o-h+.02*a)),E=s.rimAt(Math.atan2(b-s.centre[1],T-s.centre[0])),R=Math.hypot(E[0]-s.centre[0],E[1]-s.centre[1])*.985,P=Math.hypot(T-s.centre[0],b-s.centre[1]);if(P>R){let N=R/P;T=s.centre[0]+(T-s.centre[0])*N,b=s.centre[1]+(b-s.centre[1])*N}_.push(c([T,b],s.zAt(T,b)+u*1.2))}l.push({...ju(_,Array(9).fill(u*.9),6),mat:0})}}return l}function hm(i,e=t=>t){let t=[...new Set(i.map(a=>a.mat))].sort((a,c)=>a-c),n=[],s=[],r=[];for(let a of t){let c=s.length;for(let l of i){if(l.mat!==a)continue;let h=l.V.map(e),u=[];for(let p of l.F)p.length===3?u.push(p):(u.push([p[0],p[1],p[2]]),u.push([p[0],p[2],p[3]]));let f=0;for(let[p,x,m]of u){let g=h[p],y=h[x],w=h[m];f+=g[0]*(y[1]*w[2]-y[2]*w[1])+g[1]*(y[2]*w[0]-y[0]*w[2])+g[2]*(y[0]*w[1]-y[1]*w[0])}let d=n.length/3;for(let p of h)n.push(p[0],p[1],p[2]);for(let[p,x,m]of u)s.push(d+p,d+(f<0?m:x),d+(f<0?x:m))}r.push({start:c,count:s.length-c,materialIndex:a})}let o=new Rt;o.setAttribute("position",new rt(n,3)),o.setIndex(s);for(let a of r)o.addGroup(a.start,a.count,a.materialIndex);return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o}function S2(i){let e=y2[i];return e.type==="trio"?v2.map(t=>({body:ey(t.def,t.D),at:t.at,D:t.D,face:t.def.face,mat:t.mat,primary:!!t.primary,host:!!t.host,glasses:!!t.primary,eyeSeg:12,eyeRings:8})):[{body:ey(e,Yr),at:[0,0,0],D:Yr,face:e.face,mat:0,primary:!0,host:!0,glasses:!0}]}var tm=new Map,nm=new Map;function w2(i,e){let t=`${i}|${e}`;if(tm.has(t))return tm.get(t);let n=S2(i),s=um(e),r=m=>ef(s,m),a=n.map(m=>({...m.body.emit(m.at),mat:m.mat})).map(m=>({...m,V:m.V.map(r)})),c=1/0;for(let m of a)for(let g of m.V)c=Math.min(c,g[1]);let l=.01,h=g2;for(let m of a)for(let g of m.V){let y=g[1]-c-h;g[1]=c+h+.5*(y+Math.sqrt(y*y+l*l))}let u=[1/0,1/0,1/0],f=[-1/0,-1/0,-1/0];for(let m of a)for(let g of m.V)for(let y=0;y<3;y++)u[y]=Math.min(u[y],g[y]),f[y]=Math.max(f[y],g[y]);let d=[-(u[0]+f[0])/2,-u[1],-(u[2]+f[2])/2],p=hm(a,m=>[m[0]+d[0],m[1]+d[1],m[2]+d[2]]),x={units:n,R:s,shift:d,geo:p,nMats:new Set(n.map(m=>m.mat)).size,tris:p.index.count/3};return tm.set(t,x),x}function E2(i,e,t){let n=`${i}|${e}|${t}`;if(nm.has(n))return nm.get(n);let s=w2(i,e),{units:r,R:o,shift:a}=s,c=x=>{let m=ef(o,x);return[m[0]+a[0],m[1]+a[1],m[2]+a[2]]},l=[],h=2,u=null;for(let x of r){let m=M2(x,t);t==="glasses"&&x.glasses&&(u={u:x,list:m,sp:Math.max(x.face.sp,.25)});for(let g of m){let y=x.primary?`eye_${g.side}`:`eye_${g.side}_${h}`,w=hm([{V:Jl(g.V,o),F:g.F,mat:0}]);l.push({name:y,geo:w,pos:c(g.centre)})}x.primary||h++}let f=null;if(t!=="none"){let x=[];if(t==="glasses")u&&(x=iy("glasses",u.u,u,null));else{let m=r.find(g=>g.host)||r[0];x=iy(t,m,null,null)}if(x.length){let m=hm(x.map(w=>({...w,V:w.V.map(_=>ef(o,_))})),w=>[w[0]+a[0],w[1]+a[1],w[2]+a[2]]),g=m.boundingBox.clone(),y=s.geo.boundingBox;g.min.max(y.min.clone().subScalar(Q_)),g.max.min(y.max.clone().addScalar(Q_)),m.boundingBox=g,f={geo:m,accent:x.some(w=>w.mat===1)}}}let d=s.tris;for(let x of l)d+=x.geo.index.count/3;f&&(d+=f.geo.index.count/3);let p={body:s,eyes:l,extra:f,tris:d};return nm.set(n,p),p}var T2=.78,A2=.06;function fy(i){let e=new pe(i),t=.2126*e.r+.7152*e.g+.0722*e.b;return t>=T2?"light":t<A2?"dark":"mid"}var im=new Map;function sy(i){return im.has(i)||im.set(i,new rn({color:i,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.06})),im.get(i)}var R2="#141417",sm=new Map;function C2(){return sm.has("dark")||sm.set("dark",new rn({color:R2,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.04})),sm.get("dark")}var rm=new Map;function I2(i,e=!1){let t=`${i}|${e}`;return rm.has(t)||rm.set(t,new rn(e?i==="glasses"?{color:"#ECECEF",roughness:.32,clearcoat:.8,clearcoatRoughness:.05}:{color:"#8A8D93",roughness:.4,clearcoat:.6,clearcoatRoughness:.06}:i==="glasses"?{color:"#101012",roughness:.45,clearcoat:.4,clearcoatRoughness:.06}:{color:"#3A3D40",roughness:.5,clearcoat:.3,clearcoatRoughness:.06})),rm.get(t)}var om=new Map;function P2(i){return om.has(i)||om.set(i,new rn({color:i,roughness:.3,clearcoat:1,clearcoatRoughness:.06})),om.get(i)}var ry=["#FFD60A","#FF2D6F","#2D7BFF","#2FD067"];function L2(i){let e=new pe(i).convertLinearToSRGB(),t=fy(i)==="dark"?["#FFFFFF",...ry]:ry,n=t[0],s=-1;for(let r of t){let o=new pe(r).convertLinearToSRGB(),a=(e.r+o.r)/2,c=(2+a)*(e.r-o.r)**2+4*(e.g-o.g)**2+(3-a)*(e.b-o.b)**2;c>s&&(s=c,n=r)}return n}function N2(i){let e={};new pe(i).getHSL(e);let t=new pe().setHSL((e.h+150/360)%1,Math.max(e.s,.7),Math.min(.46,Math.max(.36,e.l*.85))),n=e.l<.22?new pe("#F4F4F6"):new pe("#111113");return[i,`#${t.getHexString().toUpperCase()}`,`#${n.getHexString().toUpperCase()}`]}var D2=["#000000","#A06B39","#FB2B3E","#FD690F","#F59312","#14C16F","#13B7A2","#1E86FC","#8F59F9","#F93498","#959595"],oy=D2.slice(0,10);function ay(){return 0}function dy({shape:i,color:e,accessory:t,seed:n}={}){let s=String(n??"blob"),r=$_(i)??J_(s),o=Z_(e)??oy[Qp(`color:${s}`)%oy.length],a=K_(t),c=E2(r,ay(s),a),l=c.body.nMats>1?N2(o):[o],h=l[c.body.nMats>1?a==="glasses"?1:2:0],u=new ht;u.name="blob";let f=new Ie(c.body.geo,c.body.nMats>1?l.map(sy):sy(o));f.name="body",u.add(f);for(let d of c.eyes){let p=new Ie(d.geo,C2());p.name=d.name,p.position.set(d.pos[0],d.pos[1],d.pos[2]),u.add(p)}if(c.extra){let d=I2(a==="glasses"?"glasses":"stem",fy(h)==="dark"),p=c.extra.accent?[d,P2(L2(o))]:d,x=new Ie(c.extra.geo,p);x.name="extra",u.add(x)}return u.userData={generated:!0,look:{shape:r,color:o,accessory:a},tris:c.tris,tilt:ay(s)},u}var _m="/4d",ym=new I(1,1,1).normalize(),qn={x:-.4,y:-.3,z:.3},Qs={w:35,h:22},F2=29.5,Ss={min:.75,max:3,focus:2},U2=230,O2=360,my=Math.sin(Math.atan(1/Math.SQRT2)),vm=[1,3,5,7,9,2,4,6,8,10,11,13,15,17,19,12,14,16,18,20,21],B2=new Set(Iu),bt,er,$e,Zi,vn,Ni,ma,it,kn,bn=null,Zr=null,gy={currentFloor:null,selectedBot:null},Gt=new Map,sr=new Set,bm=new Set,fm=new Map,xa=[],_a=new vl,ya=new Q,Ji={active:!1,x:0,z:0},af=new Kn(new I(0,1,0),0),tr=new I,tf=new bl,qe={x:new wn(qn.x,.45),y:new wn(qn.y,.55),z:new wn(qn.z,.45),zoom:new wn(0,.4)},Ms=null,pm=!1,Pt=null,ji=new Map,nr=null,rf=!1,Mm=0,ir=0,mm=!1,Li=null,gm=0,lf=null,tc=!0,cf=!1,dm=!1,k2=!1,nf=1e3/30,z2=.9,Tn=(()=>{let i=new URLSearchParams(location.search);return{floor:cf?null:i.get("floor"),from:i.get("from"),intro:i.get("intro"),hold:i.has("hold")?Number(i.get("hold")):null,cam:i.get("cam"),cursor:i.get("cursor"),ambient:i.get("ambient")==="1"||i.get("ambient")==="fast"}})(),xm=!1,xy=!1,Jr=new Map,Kr=null,jr=new Map,H2=i_(`${_m}/office`);function _y(i,e={}){let t=++gm;tc=!0,vn=i,Ni=e,vn.classList.add("hq-scene"),V2(),Li=vn.querySelector(".hq-loading"),Li||(Li=document.createElement("div"),Li.className="hq-loading",Li.setAttribute("role","status"),Li.innerHTML='<span class="hq-loading-label">Building the office</span><span class="hq-loading-track"><i></i></span>',vn.append(Li)),bt=new gu({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1}),bt.setPixelRatio(Math.min(devicePixelRatio,1.5)),bt.outputColorSpace=dt,bt.toneMapping=Pr,bt.toneMappingExposure=1.05,bt.setClearColor(0,0),bt.domElement.className="hq-canvas",vn.append(bt.domElement),er=new vu,er.domElement.className="hq-labels",vn.append(er.domElement),Zi=new yr;let n=new ea(bt);Zi.environment=n.fromScene(new Su,.04).texture,Zi.environmentIntensity=.55,ma=A_({scene:Zi,renderer:bt}),document.documentElement.dataset.sky="studio",vn.style.background=Yp(Ql),$e=new li(-1,1,1,-1,.1,240),$e.position.copy(ym).multiplyScalar(80),$e.lookAt(0,0,0),H2.then(s=>{if(t!==gm||!bt)return;bn=s,it=new Nu({scene:Zi,daylight:ma,assets:s,baseUrl:`${_m}/office`,renderer:bt}),ma.setBuilding(it),s.spots.lounges.forEach(o=>{o&&(o.lounge=!0)});try{Kr=Yu(s.spots,"sofa"),V_(Kr)}catch(o){console.warn("[ambient] interact catalog:",o.message),Kr=Yu(s.spots,"sofa")}window.bothq=Object.assign(window.bothq||{},{source:s.source,ambient:{interacts:()=>Kr,state:()=>Object.fromEntries([...Jr.entries()].map(([o,a])=>[o,{...a}])),force:o=>{let a=Jr.get(o);a&&(a.nextAt=0)}},sendToMeeting:o=>Sm(o),loungeAssign:jr}),ec();let r=()=>{Zr&&hf()};Promise.race([p_,new Promise(o=>setTimeout(o,1500))]).then(r,r)}),kn=L_(bt,Zi,$e),Ql&&kn.setDark&&kn.setDark(!0),Z2(),lf=new ResizeObserver(ec),lf.observe(vn),ec(),bt.setAnimationLoop(lR),window.bothq=Object.assign(window.bothq||{},{scene:{get camera(){return $e},get building(){return it},cam:qe,actors:Gt,get daylight(){return ma},switchFloor:s=>it&&wy(s,!1),settle:of}})}function V2(){if(!document.querySelector('link[href*="scene.css"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="/4d/scene.css",document.head.append(i)}if(!document.querySelector('link[href*="family=Inter"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700&display=swap",document.head.append(i)}}function yy(i,e){Zr=i,gy={...e},it&&hf()}function hf(){let i=Zr,e=gy,t=[...i.floors].sort((x,m)=>(x.order??0)-(m.order??0));it.setFloors(t);let n=e.currentFloor&&t.some(x=>x.id===e.currentFloor)?e.currentFloor:t[0]?.id??"_";Tn.floor&&t.some(x=>x.id===Tn.floor)&&(n=Tn.from&&!rf&&t.some(x=>x.id===Tn.from)?Tn.from:Tn.floor),it.activeId!==n&&wy(n,!rf),rf=!0;let s=it.activeOpen();if(!s)return;let r=Object.values(i.bots).filter(x=>x.floor===it.activeId),o=new Set(r.map(x=>x.id));for(let[x,m]of Gt)o.has(x)||(m.retire(),sr.add(m),Gt.delete(x));let a=Math.max(1e-4,...r.map(x=>x.usage_share||0)),c=vy(r);by(c,r);let l=it.styles?.get(it.activeId)?.layout||"sofa";Kr=Yu(bn.spots,l);let h=My(it.activeId),u=new Array(Math.max(20,bn.spots.desks.length)).fill(0),f=Math.max(0,Mm+.55-ir),d=new Map;for(let x of r){let m=Gt.get(x.id);m||(m=new Ku(x,{parent:s.root,inst:s,pickables:bm,confetti:sR,cursor:Ji,dropDelay:f}),Gt.set(x.id,m),q2(m,x));let g=(vm[(x.desk||1)-1]||1)-1,y=bn.spots.desks[g]||bn.spots.desks.find(Boolean),w=c.get(x.id)||y;d.set(x.id,w),(x.effective_status||x.status)==="working"&&!c.has(x.id)&&bn.spots.desks[g]&&(u[g]=1);let _=w;m.update(x,_,{maxShare:a,selectedBot:e.selectedBot})}Sy(h,r,d),it.setScreens(u);let p=t.find(x=>x.id===it.activeId);if(it.setDisplayData({floorName:p?p.name:"",bots:r,hour:m_(i.now)}),Ms&&!Gt.has(Ms)&&(Ms=null),!mm){if(mm=!0,Tn.intro==="0"&&of(3.5),Tn.from&&Tn.floor&&hf(),Tn.hold!==null&&(of(Tn.hold),xm=!0),Tn.cursor){let[x,m]=Tn.cursor.split(",").map(Number);Ji.active=!0,Ji.x=x,Ji.z=m,xy=!0,of(1.2)}if(Tn.cam){let[x,m,g]=Tn.cam.split(",").map(Number);qe.x.snap(x),qe.z.snap(m),qe.zoom.snap(Math.log(g||1))}}}function of(i=3){let e=.03333333333333333;for(let t=0;t<i;t+=e){ir+=e,Iy(e),it.update(e,performance.now());for(let n of Gt.values())n.hostAlpha=it.activeOpen()?.alpha??1,n.tick(e,ir);for(let n of sr)n.tick(e,ir),n.dead&&sr.delete(n)}}function vy(i){let e=new Map,t=bn.spots.lounges.filter(Boolean);return i.filter(s=>(s.effective_status||s.status)==="idle").sort((s,r)=>(s.desk||0)-(r.desk||0)).slice(0,t.length).forEach((s,r)=>e.set(s.id,t[r])),e}function G2(){try{let i=globalThis.WallpaperFeed;if(!i||typeof i.loadLoungeAssign!="function")return;let e=i.loadLoungeAssign()||{};jr.clear();for(let[t,n]of Object.entries(e))jr.set(t,n)}catch{}}function by(i,e){G2();let t=(bn.spots.lounges||[]).filter(Boolean);if(t.length)for(let n of e){let s=jr.get(n.id);if(s==null||!t[s])continue;let r=t[s];i.set(n.id,{pos:r.pos,yaw:r.yaw,lounge:!0,meeting:!0})}}function My(i){if(!i)return null;let e=Jr.get(i);return e||(e=z_(i,{fast:Tn.ambient}),Jr.set(i,e)),e.fast=Tn.ambient,e}function Sy(i,e,t){if(!i||!Kr)return;let n=performance.now();H_(i,{now:n,bots:e,interacts:Kr,busyIds:new Set([...Jr.values()].filter(s=>s!==i&&s.walkerId&&s.phase!=="idle").map(s=>s.walkerId)),homeSpotFor:s=>t.get(s.id),isUserBusy:s=>Gt.get(s)?.isUserBusy(n),isTraveling:s=>Gt.get(s)?.isTraveling(),beginTrip:s=>Gt.get(s)?.beginAmbientTrip(),endTrip:s=>Gt.get(s)?.endAmbientTrip(),releaseTrip:s=>Gt.get(s)?.releaseAmbientTrip(),startTravel:(s,r,o)=>Gt.get(s)?.travelPath(r,o),setAct:(s,r,o)=>Gt.get(s)?.setAmbientAct(r,o),clearAct:s=>Gt.get(s)?.clearAmbientAct(),actorPos:s=>{let r=Gt.get(s);return r?{x:r.root.position.x,y:r.root.position.y,z:r.root.position.z}:null}})}function Sm(i){if(!bn?.spots?.lounges||!it)return{ok:!1,reason:"loading"};let e=bn.spots.lounges.filter(Boolean);if(!e.length)return{ok:!1,reason:"no-meeting"};let n=it.styles?.get(it.activeId)?.layout==="meeting",s=new Set([...jr.entries()].filter(([c])=>c!==i).map(([,c])=>c));for(let[c,l]of Gt){if(c===i||!l.spotIsLounge())continue;let h=e.findIndex(u=>u&&l.spot&&l.spot.pos.distanceToSquared(u.pos)<.04);h>=0&&s.add(h)}let r=-1,o=n?[0,1,2,3,4,...e.map((c,l)=>l)].filter((c,l,h)=>c<e.length&&h.indexOf(c)===l):e.map((c,l)=>l);for(let c of o)if(!s.has(c)){r=c;break}if(r<0)return{ok:!1,reason:"full"};let a=Gt.get(i);a&&(a.markUserBusy(2e4),a.endAmbientTrip());for(let c of Jr.values())c.walkerId===i&&(c.phase="idle",c.walkerId=null,c.home=null,c.target=null);jr.set(i,r);try{let c=globalThis.WallpaperFeed;c&&typeof c.assignLounge=="function"&&c.assignLounge(i,r)}catch{}return Zr&&hf(),{ok:!0,lounge:r,meeting:n}}function W2(i){jr.delete(i);try{let e=globalThis.WallpaperFeed;e&&typeof e.clearLounge=="function"&&e.clearLounge(i)}catch{}}function q2(i,e){let t=null,n=r=>{let o=`${r.avatar||r.id}|${r.color||""}|${JSON.stringify(r.look||null)}`;o!==t&&(t=o,(r.has_glb===!1?Promise.resolve(null):X2(r.avatar||r.id)).then(a=>{if(i.dead||t!==o)return;if(a)return i.setModel(a.clone(!0));let c=r.look||{};i.setModel(dy({shape:c.shape,color:c.color||r.color,accessory:c.accessory,seed:r.id}))}))};n(e);let s=i.update.bind(i);i.update=(r,o,a)=>(n(r),s(r,o,a))}function X2(i){return fm.has(i)||fm.set(i,new sa().loadAsync(`${_m}/blobs/${encodeURIComponent(i)}.glb`).then(e=>e.scene).catch(()=>null)),fm.get(i)}function wy(i,e){for(let n of Gt.values())n.retire(),sr.add(n);Gt.clear(),Ms=null,it.setActive(i,{intro:e});let t=it.activeY+qn.y;qe.x.to(qn.x),qe.z.to(qn.z),qe.y.to(t),qe.zoom.to(0),e&&(qe.x.snap(qn.x),qe.z.snap(qn.z),qe.y.snap(t-2.6),qe.zoom.snap(Math.log(.86)),qe.y.to(t,.1),qe.zoom.to(0,.1)),Mm=ir,e&&(it.prewarm($e),Y2())}var Ql=!1;function Ey(i){Ql=!!i,vn&&(vn.style.background=Yp(Ql)),kn&&kn.setDark&&kn.setDark(Ql)}function uf(){return bt?bt.domElement:null}function Ty(i){tc=!!i,tc&&bt&&ec()}function Ay(){if(gm++,tc=!1,bt){bt.setAnimationLoop(null);try{bt.dispose()}catch{}bt.domElement.remove()}try{kn?.composer?.dispose?.()}catch{}er?.domElement.remove(),Li?.remove(),lf?.disconnect(),lf=null,vn&&vn.classList.remove("hq-scene","is-hovering"),Gt.clear(),sr.clear(),xa.length=0,bm.clear(),it=null,kn=null,ma=null,Zi=null,$e=null,bt=null,er=null,vn=null,Ni=null,Li=null,Zr=null,rf=!1,mm=!1,Ms=null,Pt=null,nr=null,Mm=0}function Y2(){let i=Li;i&&(Li=null,i.classList.add("is-done"),setTimeout(()=>i.remove(),450),Ni?.onReady?.())}function Ry(i){if(!it)return;if(i==="reset"){qe.x.to(qn.x),qe.z.to(qn.z),qe.y.to(it.activeY+qn.y),qe.zoom.to(0);return}let e=kt(Math.exp(qe.zoom.target)*(i==="in"?1.3:1/1.3),Ss.min,Ss.max);qe.zoom.to(Math.log(e))}function Cy(i){let e=Gt.get(i);!e||!it||(qe.x.to(e.root.position.x),qe.z.to(e.root.position.z),qe.y.to(it.activeY+.6),qe.zoom.to(Math.log(Math.max(Math.exp(qe.zoom.target),Ss.focus))))}function Iy(i){$2(),qe.x.step(i),qe.y.step(i),qe.z.step(i),qe.zoom.step(i);let e=kt(Math.exp(qe.zoom.x),Ss.min*.85,Ss.max*1.1);Math.abs(e-$e.zoom)>1e-5&&($e.zoom=e,$e.updateProjectionMatrix()),tr.set(qe.x.x,qe.y.x,qe.z.x),$e.position.copy(tr).addScaledVector(ym,80)}function $2(){qe.x.target=kt(qe.x.target,-9.5,9.5),qe.z.target=kt(qe.z.target,-7.5,7.5),qe.zoom.target=kt(qe.zoom.target,Math.log(Ss.min),Math.log(Ss.max))}function ec(){if(!bt)return;let i=vn.clientWidth||1,e=vn.clientHeight||1;bt.setSize(i,e,!1),er.setSize(i,e),kn?.setSize(i,e);let t=i/e,n=dm?Qs.w:Qs.w+(F2-Qs.w)*(1-kt((i-560)/340,0,1)),s=Math.max(Qs.h,n/t)/2*(dm?z2:1);$e.left=-s*t,$e.right=s*t,$e.top=s,$e.bottom=-s;let r=dm?0:kt((i-900)/600,0,1)*(O2-U2)/2;r>.5?$e.setViewOffset(i,e,r,0,i,e):$e.clearViewOffset(),$e.updateProjectionMatrix()}var K2=()=>bt.domElement.clientHeight/(($e.top-$e.bottom)/$e.zoom);function Z2(){let i=bt.domElement;i.addEventListener("pointermove",Q2),i.addEventListener("pointerleave",()=>{Ji.active=!1,Py(null)}),!cf&&(i.addEventListener("pointerdown",J2),i.addEventListener("pointerup",eR),i.addEventListener("pointercancel",e=>{ji.delete(e.pointerId),Pt=null,nr=null}),i.addEventListener("wheel",nR,{passive:!1}),i.addEventListener("contextmenu",j2))}function va(i){let e=bt.domElement.getBoundingClientRect();ya.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1)}function J2(i){if(i.button!=null&&i.button!==0)return;if(bt.domElement.setPointerCapture?.(i.pointerId),va(i),ji.set(i.pointerId,{x:i.clientX,y:i.clientY}),ji.size===2){let[t,n]=[...ji.values()];nr={d:Math.hypot(t.x-n.x,t.y-n.y),z:qe.zoom.target},Pt=null;return}let e=ff();Pt={id:i.pointerId,x0:i.clientX,y0:i.clientY,lx:i.clientX,ly:i.clientY,lt:performance.now(),panning:!1,seating:!1,seatBot:e,vx:0,vz:0}}function j2(i){i.preventDefault(),va(i);let e=ff();e&&Ni.onBotContextMenu&&Ni.onBotContextMenu(e,i.clientX,i.clientY)}function Q2(i){if(va(i),Ji.active=!0,pm=!0,ji.has(i.pointerId)&&ji.set(i.pointerId,{x:i.clientX,y:i.clientY}),nr&&ji.size===2){let[u,f]=[...ji.values()];qe.zoom.to(nr.z+Math.log(Math.hypot(u.x-f.x,u.y-f.y)/nr.d));return}if(!Pt||Pt.id!==i.pointerId)return;let e=Math.hypot(i.clientX-Pt.x0,i.clientY-Pt.y0)>5;if(!Pt.panning&&!Pt.seating&&e&&(Pt.seatBot&&Ni.onAssignSeat?Pt.seating=!0:Pt.panning=!0),Pt.seating){vn.classList.add("is-seating");return}if(!Pt.panning)return;let t=performance.now(),n=i.clientX-Pt.lx,s=i.clientY-Pt.ly,r=Math.max(.001,(t-Pt.lt)/1e3);Pt.lx=i.clientX,Pt.ly=i.clientY,Pt.lt=t;let o=K2(),a=-n/o,c=s/o/my,l=(a-c)/Math.SQRT2,h=(-a-c)/Math.SQRT2;qe.x.snap(kt(qe.x.x+l,-9.5,9.5)),qe.z.snap(kt(qe.z.x+h,-7.5,7.5)),Pt.vx=Pt.vx*.6+l/r*.4,Pt.vz=Pt.vz*.6+h/r*.4}function eR(i){if(ji.delete(i.pointerId),vn.classList.remove("is-seating"),nr){ji.size<2&&(nr=null),Pt=null;return}if(!Pt||Pt.id!==i.pointerId)return;let e=Pt;if(Pt=null,e.seating&&e.seatBot){va(i);let t=tR();if(t){W2(e.seatBot);let n=Gt.get(e.seatBot);n&&(n.markUserBusy(8e3),n.cancelTravel(),n.releaseAmbientTrip());for(let s of Jr.values())s.walkerId===e.seatBot&&(s.phase="idle",s.walkerId=null,s.home=null,s.target=null);Ni.onAssignSeat?.(e.seatBot,t)}Ni.onSelectBot?.(e.seatBot);return}if(e.panning){let t=kt(e.vx,-30,30),n=kt(e.vz,-30,30);qe.x.v=t,qe.z.v=n,qe.x.to(qe.x.x+t*.12),qe.z.to(qe.z.x+n*.12);return}va(i),Ni.onSelectBot?.(ff())}function tR(){if(!bn||!bn.spots||!bn.spots.desks||(_a.setFromCamera(ya,$e),it&&(af.constant=-it.activeY),!_a.ray.intersectPlane(af,tr)))return null;let i=tr.x,e=tr.z,t=null,n=1/0;for(let o=0;o<bn.spots.desks.length;o++){let a=bn.spots.desks[o];if(!a||!a.pos||B2.has(o+1))continue;let c=(a.pos.x-i)**2+(a.pos.z-e)**2;c<n&&(n=c,t=o)}if(t==null||n>4.5)return null;let s=t+1,r=vm.indexOf(s)+1;return r>0?r:s}function nR(i){i.preventDefault(),va(i);let e=Math.exp(qe.zoom.target),t=kt(e*Math.exp(-i.deltaY*(i.ctrlKey?.012:.0016)),Ss.min,Ss.max);if(t===e)return;let n=$e.view?.enabled?$e.view.offsetX/$e.view.fullWidth*2:0,s=ya.x+n,r=ya.y,o=1/e-1/t,a=s*$e.right*o,c=r*$e.top*o/my;qe.x.to(qe.x.target+(a-c)/Math.SQRT2),qe.z.to(qe.z.target+(-a-c)/Math.SQRT2),qe.zoom.to(Math.log(t))}function ff(){_a.setFromCamera(ya,$e);let i=_a.intersectObjects([...bm],!1)[0];return i?i.object.userData.actorId:null}function Py(i){i!==Ms&&(Ms&&Gt.get(Ms)?.setHovered(!1),Ms=i,i&&Gt.get(i)?.setHovered(!0),vn.classList.toggle("is-hovering",!!i),Ni.onHoverBot?.(i))}var py=[3458905,689407,16752394,16732064,16738835,1357990],iR=new jt(.07,.035);function sR(i){let e=new ht;e.position.copy(i);let t=[];for(let n=0;n<36;n++){let s=new Ie(iR,new Ct({color:py[n%py.length],side:hn,transparent:!0})),r=Math.random()*Math.PI*2,o=2.2+Math.random()*1.6,a=.8+Math.random()*1.2;t.push({m:s,v:new I(Math.cos(r)*a,o,Math.sin(r)*a),spin:new I(Math.random()*9,Math.random()*9,0)}),e.add(s)}Zi.add(e),xa.push({group:e,parts:t,t:0,life:1.6})}function rR(i){for(let e=xa.length-1;e>=0;e--){let t=xa[e];t.t+=i;for(let n of t.parts)n.v.y-=6.5*i,n.v.multiplyScalar(1-1.4*i),n.m.position.addScaledVector(n.v,i),n.m.rotation.x+=n.spin.x*i,n.m.rotation.y+=n.spin.y*i,n.m.material.opacity=Math.max(0,1-t.t/t.life);t.t>=t.life&&(t.group.removeFromParent(),t.parts.forEach(n=>n.m.material.dispose()),xa.splice(e,1))}}function Ly({width:i=1600,height:e=900,scale:t=1,box:n={x:.06,y:.06,w:.88,h:.76}}={}){let s=it?.activeOpen();if(!s||!kn)return null;let r=bt.getPixelRatio(),o=Math.min(bt.capabilities.maxTextureSize,bt.capabilities.maxRenderbufferSize||1/0),a=Math.max(1,Math.min(t,o/i,o/e)),c=$e.zoom,l=$e.position.clone(),h=[],u=p=>{p?.visible&&(p.visible=!1,h.push(p))};for(let p of Gt.values())u(p.ring);for(let p of sr)u(p.root);for(let p of xa)u(p.group);let f=s.walls,d=f?.data;try{if(d){let m={...d,floorName:`Floor ${it.activeIndex+1}`,bots:d.bots.map(g=>({...g,name:"",task:"",step:""}))};f.screen&&f.drawScreen(m),f.board&&f.drawBoard(m)}bt.setPixelRatio(a),bt.setSize(i,e,!1),kn.setSize(i,e),oR(i/e,n),ga.set(0,it.cabinY.x+.7,0).project($e),kn.render(kt(ga.y*.5+.5,0,1),0,1);let p=document.createElement("canvas");p.width=i,p.height=e;let x=p.getContext("2d");return x.imageSmoothingQuality="high",x.drawImage(bt.domElement,0,0,i,e),p}finally{h.forEach(p=>{p.visible=!0}),d&&(f.screen&&f.drawScreen(d),f.board&&f.drawBoard(d)),bt.setPixelRatio(r),ec(),$e.zoom=c,$e.position.copy(l),$e.updateProjectionMatrix(),ga.set(0,it.cabinY.x+.7,0).project($e),kn.render(kt(ga.y*.5+.5,0,1),0,kt(1.5/$e.zoom,.25,1))}}var $r=new sn,jl=new I;function oR(i,e){$e.clearViewOffset(),$e.zoom=1,$e.position.set(qn.x,it.activeY+qn.y,qn.z).addScaledVector(ym,80),$e.updateMatrixWorld(!0),it.group.updateMatrixWorld(!0);let t=1/0,n=-1/0,s=1/0,r=-1/0,o=l=>{if(l.visible){if(l.isMesh&&l.geometry){l.geometry.boundingBox||l.geometry.computeBoundingBox(),$r.copy(l.geometry.boundingBox);for(let h=0;h<8;h++)jl.set(h&1?$r.max.x:$r.min.x,h&2?$r.max.y:$r.min.y,h&4?$r.max.z:$r.min.z).applyMatrix4(l.matrixWorld).applyMatrix4($e.matrixWorldInverse),t=Math.min(t,jl.x),n=Math.max(n,jl.x),s=Math.min(s,jl.y),r=Math.max(r,jl.y)}for(let h of l.children)o(h)}};o(it.group),Number.isFinite(t)||(t=-Qs.w/2,n=Qs.w/2,s=-Qs.h/2,r=Qs.h/2);let a=Math.max((r-s)/e.h,(n-t)/(e.w*i)),c=a*i;$e.left=(t+n)/2-(e.x+e.w/2)*c,$e.right=$e.left+c,$e.top=(s+r)/2+(e.y+e.h/2)*a,$e.bottom=$e.top-a,$e.updateProjectionMatrix()}function aR(){xy||!Ji.active||!it||(_a.setFromCamera(ya,$e),af.constant=-it.activeY,_a.ray.intersectPlane(af,tr)?(Ji.x=tr.x,Ji.z=tr.z):Ji.active=!1)}var ga=new I,sf=0;function lR(i){if(!bt)return;if(!tc||document.hidden){tf.getDelta();return}if(cf){let s=i-sf;if(s<nf-2)return;sf+=Math.max(1,Math.round(s/nf))*nf,i-sf>nf/2&&(sf=i)}let e=xm?0:Math.min(tf.getDelta(),.05);xm&&tf.getDelta(),ir=tf.elapsedTime;let t=performance.now();ma.update(e,t),Iy(e),it&&it.update(e,t),pm&&!Pt?.panning&&(pm=!1,Py(ff())),aR();let n=it?.activeOpen()?.alpha??1;for(let s of Gt.values())s.hostAlpha=n,s.tick(e,ir);for(let s of sr)s.hostAlpha=s.ctx.inst.alpha,s.tick(e,ir),s.dead&&sr.delete(s);if(it?.activeId&&Zr&&bn){let s=Object.values(Zr.bots||{}).filter(a=>a.floor===it.activeId),r=vy(s);by(r,s);let o=new Map;for(let a of s){let c=(vm[(a.desk||1)-1]||1)-1,l=bn.spots.desks[c]||bn.spots.desks.find(Boolean);o.set(a.id,r.get(a.id)||l)}Sy(My(it.activeId),s,o)}rR(e),kn?(ga.set(0,(it?it.cabinY.x:0)+.7,0).project($e),kn.render(kt(ga.y*.5+.5,0,1),e,kt(1.5/$e.zoom,.25,1))):bt.render(Zi,$e),er&&(!cf||k2)&&er.render(Zi,$e),Ni?.onFrame?.()}var cR="/4d/blobs/thumbs/",hR="/4d/brand/logo-mark.png";var Vy="bothq.waitBlur",Gy="bothq.dock",uR={working:"working",idle:"resting",waiting_user:"waiting for you",error:"error",stuck:"stuck",done:"done"},Wy={working:"Working",idle:"Resting",waiting_user:"Waiting for you",error:"Error",stuck:"Stuck",done:"Done"},fR={working:["working","working"],waiting_user:["waiting","waiting"],error:["error","errors"],stuck:["stuck","stuck"],idle:["resting","resting"],done:["done","done"]},qy=[{key:"working",s:"working",lead:!0,n:i=>i.working},{key:"attention",s:"waiting_user",alert:!0,n:i=>i.waiting_user+i.stuck},{key:"error",s:"error",alert:!0,n:i=>i.error},{key:"idle",s:"idle",n:i=>i.idle},{key:"done",s:"done",n:i=>i.done,hideZero:!0}],dR={week:"Week",day:"Day",month:"Month"},pR={week:"Usage this week",day:"Usage today",month:"Usage this month"},or={close:'<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',minus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',chev:'<svg class="bhq-chev" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',eyeOn:'<svg class="bhq-eye-on" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.9" fill="currentColor"/></svg>',eyeOff:'<svg class="bhq-eye-off" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity=".55"/><path d="M3 13L13 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M3.5 8.6l3 3 6-6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',share:'<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M10 12.2V2.9M6.7 6.1L10 2.8l3.3 3.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2 8.7H6A1.8 1.8 0 0 0 4.2 10.5v5A1.8 1.8 0 0 0 6 17.3h8a1.8 1.8 0 0 0 1.8-1.8v-5A1.8 1.8 0 0 0 14 8.7h-1.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'},oc=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},L=null;function mR(i){return{h:i||{},top:null,fl:null,panel:null,feed:null,zoom:null,dock:null,owned:[],last:{state:null,opts:{currentFloor:null,selectedBot:null}},skew:0,nowStr:null,floors:new Map,activeFloorId:null,cells:new Map,feedRows:new Map,feedOut:new Set,feedMode:null,feedFirst:!0,failedThumbs:new Set,mode:null,cardBot:null,teamFloor:null,teamReady:!1,ready:!1,keyHandler:null,ro:null,ro2:null,onResize:null,timer:null,fades:[],sh:null,phone:!1,land:!1,mqs:null,mqFn:null,ro3:null,cardY:0,cardStop:null,chipFloor:null}}function V(i,e,...t){let n=document.createElement(i);if(e)for(let s of Object.keys(e)){let r=e[s];r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:n.setAttribute(s,r===!0?"":String(r)))}for(let s of t)s!=null&&s!==!1&&n.append(s);return n}function Qr(i){let e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstChild}function at(i,e){e=e==null?"":String(e),i.textContent!==e&&(i.textContent=e)}function st(i,e,t){t==null||t===!1?i.hasAttribute(e)&&i.removeAttribute(e):(t=t===!0?"":String(t),i.getAttribute(e)!==t&&i.setAttribute(e,t))}function Qt(i,e){i.hidden!==!!e&&(i.hidden=!!e)}function Ma(i,e,t){let n=i._vars||(i._vars={});n[e]!==t&&(n[e]=t,i.style.setProperty(e,t))}function ni(i,e,t){i.classList.contains(e)!==!!t&&i.classList.toggle(e,!!t)}function Ny(i,e,t){let n="_px_"+e;i[n]!==t&&(i[n]=t,i.style[e]=t+"px")}function ac(i,e,t){return Math.min(t,Math.max(e,i))}function gR(i){return i<10?"0"+i:String(i)}function ba(i,e,t){if(e=Math.max(0,Math.round(Number(e)||0)),i._to===e)return;let n=i._to==null?0:i._to;if(i._to=e,i._raf&&(cancelAnimationFrame(i._raf),i._raf=0),i._tm&&(clearTimeout(i._tm),i._tm=0),t===!1||oc.matches||n===e){i.textContent=String(e);return}let s=performance.now(),r=700,o=a=>{let c=ac((a-s)/r,0,1),l=1-Math.pow(1-c,3);i.textContent=String(Math.round(n+(e-n)*l)),i._raf=c<1?requestAnimationFrame(o):0};i._raf=requestAnimationFrame(o),i._tm=setTimeout(()=>{i._tm=0,i._to===e&&(i.textContent=String(e))},r+150)}function rc(i,e,t){return Math.abs(Math.trunc(i))===1?e:t}function Em(i,e){let t=fR[i]||[i,i];return rc(e,t[0],t[1])}function gn(i){let e=typeof i=="number"?i:Date.parse(i);return Number.isFinite(e)?e:null}var xR=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});function Di(i){return i==null?"":xR.format(new Date(i))}var Xy=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function _R(i){if(i&&i.now&&i.now!==L.nowStr){let e=gn(i.now);e!=null&&(L.skew=Date.now()-e,L.nowStr=i.now)}}function ar(){return Date.now()-L.skew}function yR(i){let e=Math.floor(Math.max(0,i)/6e4);if(e<1)return"under a minute";if(e<60)return e+" min";let t=Math.floor(e/60),n=e%60;if(t<24)return n?t+" h "+n+" min":t+" h";let s=Math.floor(t/24),r=t%24;return r?s+" d "+r+" h":s+" d"}function Yy(i){let e=Math.floor(i/6e4);if(e<1)return"under a minute";let t=Math.floor(e/1440),n=Math.floor(e%1440/60),s=e%60;return t>0?t+" d "+n+" h":n>0?n+" h "+s+" min":s+" min"}function Lm(i){let e=ar()-i,t=Math.floor(e/6e4);if(t<1)return"just now";if(t<60)return t+" min ago";let n=Math.floor(t/60);return n<24?n+" h ago":Math.floor(n/24)+" d ago"}function vR(i){let e=Math.floor((ar()-i)/6e4);if(e<1)return"now";if(e<60)return e+"m";let t=Math.floor(e/60);return t<24?t+"h":Math.floor(t/24)+"d"}function $y(i){let e=i&&i.unreported;if(!e)return"";let t=gn(e.from),n=gn(e.to);return"Worked (unreported)"+(n==null?"":" \xB7 "+(t==null?"":Di(t)+"\u2013")+Di(n))}function Tm(i){let e=gn(i&&i.last_seen);return e==null?"never reported":"seen "+Lm(e)}function bR(i){let e=i-ar();if(e<=0)return"due now";let t=Math.ceil(e/6e4);if(t<60)return"in "+t+" min";let n=Math.floor(t/60),s=t%60;if(n<6)return s?"in "+n+" h "+s+" min":"in "+n+" h";if(n<24)return"in "+n+" h";let r=new Date(i);return Xy[r.getDay()]+" "+Di(i)}function MR(i){let e=new Date(i);return Xy[e.getDay()]+" "+e.getDate()+"/"+gR(e.getMonth()+1)+" "+Di(i)}var SR=new Intl.NumberFormat("en-GB",{maximumFractionDigits:1});function wR(i){let e=Math.max(0,Number(i)||0)/60;return e<10?SR.format(e):String(Math.round(e))}function ws(i){return i&&(i.effective_status||i.status)||"idle"}function rr(i){return uR[i]||i||""}function ER(i){return/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(i||"")}function TR(i){let e=String(i||"").match(/[\p{L}\p{N}]+/gu)||[];return e.length?e.length===1?Array.from(e[0]).slice(0,2).join("").toUpperCase():(Array.from(e[0])[0]+Array.from(e[1])[0]).toUpperCase():"?"}function Am(i){let e=i.replace("#","");e.length===3&&(e=e.split("").map(n=>n+n).join(""));let t=n=>{let s=parseInt(e.slice(n,n+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)};return .2126*t(0)+.7152*t(2)+.0722*t(4)}function AR(i){let e=Am(i),t=1.05/(e+.05),n=(e+.05)/(Am("#1D1D1F")+.05);return t>=n?"#fff":"#1D1D1F"}function lc(i,e,t){for(let n=0;n<e.length;n++){let s=i.children[t+n];s!==e[n]&&i.insertBefore(e[n],s||null)}}function Ky(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}function Dy(i){try{return localStorage.getItem(i)}catch{return null}}function Zy(i,e){try{localStorage.setItem(i,e)}catch{}}function Rm(i){return i.classList.add("bhq-fade"),i.addEventListener("scroll",()=>Jy(i),{passive:!0}),L.fades.push(i),i}function Jy(i){let e=i.scrollHeight-i.clientHeight,t=e>2&&i.scrollTop>2,n=e>2&&i.scrollTop<e-2;Ma(i,"--fade-t",t?"20px":"0px"),Ma(i,"--fade-b",n?"22px":"0px"),st(i,"data-fade",t||n?"":null)}function pf(){for(let i of L.fades)Jy(i)}function RR(i){let e={working:0,idle:0,waiting_user:0,error:0,stuck:0,done:0},t=i.bots;if(t&&typeof t=="object"&&Object.keys(t).length)for(let n of Object.keys(t)){let s=ws(t[n]);e[s]=(e[s]||0)+1}else if(i.summary&&typeof i.summary=="object")for(let n of Object.keys(e))e[n]=Number(i.summary[n])||0;return e}function Sa(i){i=i||{};let e=V("img",{class:"bhq-av-img",alt:"",draggable:"false",decoding:"async"}),t=V("span",{class:"bhq-av-fb","aria-hidden":"true"}),n=V("span",{class:"bhq-av"},e,t),s=i.orb===!1?null:V("i",{class:"bhq-orb","aria-hidden":"true"}),r=V("span",{class:"bhq-ava"+(i.cls?" "+i.cls:"")},n,s);return e.addEventListener("error",()=>{e._name&&L.failedThumbs.add(e._name),n.classList.add("is-fb")}),e.addEventListener("load",()=>n.classList.remove("is-fb")),{root:r,inner:n,img:e,fb:t}}function wa(i,e,t){let n=e.avatar||e.id||"",s=ER(e.color)?e.color:"#A1A1A6";Ma(i.root,"--c",s),Ma(i.root,"--fg",AR(s)),ni(i.root,"is-dark",Am(s)<.04),st(i.root,"data-s",t||null),at(i.fb,TR(e.name)),i.img._name!==n&&(i.img._name=n,!n||L.failedThumbs.has(n)?(i.img.removeAttribute("src"),i.inner.classList.add("is-fb")):(i.inner.classList.remove("is-fb"),i.img.src=e.has_glb===!1?IR(e):cR+encodeURIComponent(n)+".png"))}var CR="/4d/blobs/lib/",Fy=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon","rounded_cube","cone","trio"],Uy=["000000","A06B39","FB2B3E","FD690F","F59312","14C16F","13B7A2","1E86FC","8F59F9","F93498","959595"];function IR(i){let e=a=>{let c=2166136261;for(let l of a)c=Math.imul(c^l.charCodeAt(0),16777619)>>>0;return c},t=String(i.id||i.name||""),n=i.look||{},s=Fy.includes(n.shape)?n.shape:Fy[(e(`shape:${t}`)>>>4)%13];s==="sphere"&&n.accessory==="stem"&&(s="sphere_stem");let r=/^#([0-9a-f]{6})$/i.exec(n.color||i.color||""),o=Uy[e(`color:${t}`)%10];if(r){let a=f=>[0,2,4].map(d=>parseInt(f.slice(d,d+2),16)),[c,l,h]=a(r[1]),u=1/0;Math.max(c,l,h)-Math.min(c,l,h)<28&&(o=(c+l+h)/3<75?"000000":"959595",u=0);for(let f of Uy){let[d,p,x]=a(f),m=(c+d)/2,g=(2+m/256)*(c-d)**2+4*(l-p)**2+(3-m/256)*(h-x)**2;g<u&&(u=g,o=f)}}return`${CR}${s}-${o}.png`}function xf(i){return L.owned.push(i),i}function Nm(){if(L){if(L.keyHandler&&document.removeEventListener("keydown",L.keyHandler),L.onResize&&removeEventListener("resize",L.onResize),L.ro&&L.ro.disconnect(),L.ro2&&L.ro2.disconnect(),L.ro3&&L.ro3.disconnect(),L.mqs&&L.mqFn)for(let i of L.mqs)i.removeEventListener("change",L.mqFn);L.phone&&document.documentElement.classList.remove("bhq-phone","bhq-land"),L.timer&&clearInterval(L.timer);for(let i of L.owned)i.parentNode&&i.remove();L=null}}function jy(i){Nm(),L=mR(i);let e=document.getElementById("topbar"),t=document.getElementById("floors"),n=document.getElementById("panel"),s=document.getElementById("feed");s||(s=xf(V("section",{id:"feed"})),document.body.append(s)),st(s,"aria-label","Activity feed");let r=document.getElementById("scene");r&&st(r,"aria-label","Office"),t&&st(t,"aria-label","Floors"),n&&st(n,"aria-label","Bot card and floor team"),e?PR(e):console.warn("[ui] #topbar not found"),t?LR(t):console.warn("[ui] #floors not found"),n?DR(n):console.warn("[ui] #panel not found"),UR(s),OR(),GR(t,s),YR(s),$R(),L.keyHandler=o=>{if(o.key!=="Escape"||o.defaultPrevented)return;let a=o.target;a&&(a.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))||L.last.opts.selectedBot&&L.h.onSelectBot&&L.h.onSelectBot(null)},document.addEventListener("keydown",L.keyHandler),L.timer=setInterval(()=>{document.hidden||!L.last.state||(Qi("topbar",()=>L.top&&rv(L.last.state)),Qi("dock",()=>L.dock&&hv(L.last.state)),Qi("card-reset",()=>{let o=L.cardBot&&L.last.state.bots&&L.last.state.bots[L.cardBot];o&&L.panel&&cv(L.last.state,o)}))},15e3)}function PR(i){i.textContent="";let e=V("span",{class:"bhq-num bhq-clock",text:"--:--"}),t=V("div",{class:"bhq-brand bhq-surface"},V("img",{class:"bhq-mark",src:hR,alt:"",draggable:"false"}),V("b",{class:"bhq-word",text:"Grok Bot Dashboard"}),V("span",{class:"bhq-sep","aria-hidden":"true"}),V("span",{class:"bhq-live"},V("i",{class:"bhq-dot bhq-live-dot","aria-hidden":"true"}),"Live \xB7 ",e)),n={},s=V("div",{class:"bhq-summary bhq-surface",role:"group","aria-label":"Bot statuses"});for(let p of qy){let x=V("b",{class:"bhq-num"}),m=V("span"),g=V("span",{class:"bhq-schip"+(p.lead?" bhq-schip--lead":""),"data-s":p.s},V("i",{class:"bhq-dot","data-s":p.s,"aria-hidden":"true"}),x,m);n[p.key]={el:g,num:x,label:m,cfg:p},s.append(g)}let r=V("span",{class:"bhq-usage-label",text:"Week"}),o=V("i"),a=V("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Usage limit"},o),c=V("b",{class:"bhq-num bhq-usage-pct"}),l=V("span",{class:"bhq-reset"}),h=V("div",{class:"bhq-usage bhq-surface",hidden:!0},r,a,c,V("span",{class:"bhq-sep","aria-hidden":"true"}),l),u=V("span",{class:"bhq-demo bhq-surface",text:"DEMO",hidden:!0,title:"Demo data, not real bots"}),f=V("button",{class:"bhq-share bhq-surface",type:"button","aria-label":"Share an image of your office",title:"Share"},Qr(or.share));f.addEventListener("click",()=>{L.h.onShare&&L.h.onShare(f)});let d=V("div",{class:"bhq-right"},f,u,h);i.append(t,s,d),L.top={root:i,clock:e,chips:n,summary:s,usage:h,usageLabel:r,meter:a,fill:o,pct:c,reset:l,demo:u}}function LR(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow");let e=V("div",{class:"bhq-car","aria-hidden":"true"}),t=V("div",{class:"bhq-shaft"},e),n=V("b",{class:"bhq-num"}),s=V("div",{class:"bhq-fscroll"},t);i.append(V("div",{class:"bhq-fhead"},V("span",{text:"Floors"}),n),s),L.fl={root:i,shaft:t,car:e,count:n,fscroll:s,carTop:null,carH:null,carShown:!1,ready:!1},typeof ResizeObserver=="function"&&(L.ro=new ResizeObserver(()=>lv()),L.ro.observe(t))}function NR(i){let e=V("span",{class:"bhq-num bhq-fnum"}),t=V("b",{class:"bhq-fname"}),n=V("span",{class:"bhq-fdots","aria-hidden":"true"}),s=V("span",{class:"bhq-num bhq-fcount"}),r=V("button",{class:"bhq-floor",type:"button","data-id":i},e,V("span",{class:"bhq-ftext"},t,n),s);return r.addEventListener("click",()=>{L.h.onSelectFloor&&L.h.onSelectFloor(i)}),{btn:r,num:e,name:t,dots:n,count:s,dotEls:[]}}function DR(i){i.textContent="";let e=V("h2",{class:"bhq-h2"}),t=V("span",{class:"bhq-tsub"}),n=V("b",{class:"bhq-num"}),s=V("b",{class:"bhq-num"}),r=V("b",{class:"bhq-num"}),o=V("em",{text:"waiting"}),a=V("em",{text:"errors"}),c=V("span",null,o,s),l=V("span",null,a,r),h=V("header",{class:"bhq-thead bhq-surface bhq-glow","data-s":"idle"},V("div",{class:"bhq-ttop"},e,t),V("div",{class:"bhq-tbot"},V("div",{class:"bhq-tbig"},n,V("span",{text:"working"})),V("div",{class:"bhq-tcounts"},c,l))),u=Rm(V("div",{class:"bhq-members",role:"list"})),f=V("p",{class:"bhq-note",text:"Nobody here yet. A bot shows up when it logs its first step.",hidden:!0}),d=V("div",{class:"bhq-tcard bhq-surface bhq-glow"},u,f),p=V("section",{class:"bhq-team","aria-label":"Floor team"},h,d),x=V("button",{class:"bhq-close",type:"button","aria-label":"Close bot card",title:"Close (Esc)"},Qr(or.close));x.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(null)});let m=Sa({cls:"bhq-ava--lg"}),g=V("h2",{class:"bhq-h2",tabindex:"-1"}),y=V("p",{class:"bhq-sub"}),w=V("i",{class:"bhq-dot","aria-hidden":"true"}),_=V("span"),v=V("span",{class:"bhq-status"},w,_),M=V("p",{class:"bhq-now"}),T=V("div",{class:"bhq-hero bhq-surface bhq-glow","data-s":"idle"},x,V("div",{class:"bhq-head"},m.root,V("div",{class:"bhq-head-text"},g,y)),v,M),b=V("p",{class:"bhq-task"}),E=V("div",{class:"bhq-block",hidden:!0},V("div",{class:"bhq-label",text:"Task"}),b),R=ye=>{let Ke=V("b",{class:"bhq-num"}),Et=V("small",{text:ye||""});return{root:V("div",{class:"bhq-stat"},Ke,Et),v:Ke,l:Et}},P=R(),N=R(),k=R("h worked"),D=V("div",{class:"bhq-stats"},P.root,N.root,k.root),B=V("div",{class:"bhq-label"}),X=V("i"),$=V("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Share of total usage"},X),oe=V("b",{class:"bhq-num"}),Z=V("span",{class:"bhq-share"},oe," of all"),te=V("span",{class:"bhq-card-reset"}),z=V("div",{class:"bhq-useblock"},B,V("div",{class:"bhq-use"},$,Z),te),ae=V("ol",{class:"bhq-steps",role:"list"}),ce=V("div",{class:"bhq-stepsblock"},V("div",{class:"bhq-label",text:"Recent steps"}),ae),He=Rm(V("div",{class:"bhq-card-body"},E,D,z,ce)),Ve=V("button",{class:"bhq-cta bhq-cta--start",type:"button",text:"Start",hidden:!0,title:"Resume this Paperclip agent"});Ve.addEventListener("click",()=>{let ye=Ve.getAttribute("data-agent");ye&&Qy(L.cardBot,ye)});let tt=V("button",{class:"bhq-cta bhq-cta--clear",type:"button",text:"Clear error",hidden:!0,title:"Clear this Paperclip agent error (does not retry)"});tt.addEventListener("click",()=>{let ye=tt.getAttribute("data-agent");ye&&ev(L.cardBot,ye)});let K=V("button",{class:"bhq-cta",type:"button",text:"Open chat",disabled:!0,title:"Set Wallpaper feed in Settings to enable Open chat"});K.addEventListener("click",()=>{let ye=K.getAttribute("data-chat");ye&&Dm(L.cardBot,ye)});let ee=V("div",{class:"bhq-more bhq-surface bhq-glow bhq-glow--still"},He,V("div",{class:"bhq-card-foot"},Ve,tt,K)),ge=V("span",{class:"bhq-cgrab","aria-hidden":"true"}),ke=V("section",{class:"bhq-card",hidden:!0,"aria-label":"Bot card"},ge,T,ee);i.append(ke,p),L.panel={root:i,team:p,tcard:d,teamHead:h,teamTitle:e,teamSub:t,teamBig:n,nWait:s,nErr:r,rowWait:c,rowErr:l,lErr:a,list:u,teamEmpty:f,card:{root:ke,hero:T,body:He,av:m,name:g,where:y,status:v,stDot:w,stTxt:_,now:M,taskBlock:E,task:b,sSteps:P,sTasks:N,sHours:k,usageLabel:B,useBlock:z,fuel:$,fillBar:X,shareNum:oe,reset:te,hist:ae,histSig:null,start:Ve,clearErr:tt,cta:K,fresh:!0}}}function Dm(i,e){e&&(L.h.onOpenChat?L.h.onOpenChat(i,e):FR(e))}function Qy(i,e){e&&L.h.onStartAgent&&L.h.onStartAgent(i,e)}function ev(i,e){e&&L.h.onClearErrorAgent&&L.h.onClearErrorAgent(i,e)}function FR(i){let e=document.createElement("a");e.href=i,e.rel="noopener",e.style.display="none",document.body.append(e),e.click(),e.remove()}function UR(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow","bhq-glow--still");let e=V("ol",{class:"bhq-frows",role:"list","aria-live":"off"}),t=V("p",{class:"bhq-note",text:"No events yet.",hidden:!0});i.append(V("div",{class:"bhq-fhead"},V("span",{text:"Activity"})),e,t),L.feed={root:i,list:e,empty:t}}function OR(){let i=(t,n,s,r)=>{let o=V("button",{class:"bhq-zbtn "+t,type:"button","aria-label":s,title:s},Qr(n));return o.addEventListener("click",()=>{L.h.onZoom&&L.h.onZoom(r)}),o},e=xf(V("div",{class:"bhq-zoom bhq-surface",role:"group","aria-label":"Scene zoom"},i("z-out",or.minus,"Zoom out","out"),V("span",{class:"bhq-sep","aria-hidden":"true"}),i("z-in",or.plus,"Zoom in","in")));document.body.append(e),L.zoom={root:e}}function df(i,e,t){let n=V("span",{class:"bhq-dcount bhq-num",text:"0"}),s=Rm(V("div",{class:"bhq-dbody-in"})),r=V("button",{class:"bhq-dtoggle",type:"button","aria-expanded":"false"},V("span",{class:"bhq-dtitle",text:e}),n),o=V("div",{class:"bhq-dh"+(t&&t.eye?" has-eye":"")},r),a=null;t&&t.eye&&(a=V("button",{class:"bhq-eye",type:"button","aria-pressed":"false","aria-label":"Hide this panel for the camera",title:"Hide for the camera"},Qr(or.eyeOn),Qr(or.eyeOff)),o.append(a)),o.append(Qr(or.chev));let c=V("section",{class:"bhq-dcard bhq-surface bhq-glow bhq-glow--still","aria-label":e,"data-dock":i},o,V("div",{class:"bhq-dbody"},s)),l={id:i,root:c,toggle:r,count:n,inner:s,eye:a,open:!1,shown:!1,rows:0};return r.addEventListener("click",()=>Fm(l,!l.shown)),l}var BR=44,kR=140,zR=92,HR=8;function VR(i,e){i.shown=!!e,ni(i.root,"is-open",i.shown),st(i.toggle,"aria-expanded",i.shown?"true":"false"),i.inner.inert=!i.shown}function Fm(i,e,t=!0){i.open=!!e;let n=L.dock;if(i.open&&(n.lru=n.lru.filter(s=>s!==i),n.lru.push(i)),t){let s={};for(let r of["waiting","finished","routines"])s[r]=!!n[r].open;Zy(Gy,JSON.stringify(s))}Cm(n.avail==null?1/0:n.avail)}function Cm(i){let e=L.dock;e.avail=i;let t=[e.check,e.waiting,e.finished,e.routines],n=t.filter(o=>!o.root.hidden),s=new Set(n.filter(o=>o.open)),r=()=>n.reduce((o,a)=>o+(s.has(a)?a.rows?kR:zR:BR),0)+HR*Math.max(0,n.length-1);for(;s.size&&r()>i;){let o=e.lru.find(a=>s.has(a))||[...s][0];s.delete(o)}for(let o of t)VR(o,s.has(o))}function Oy(i,e=!0){let t=L.dock;t.blurred=!!i,ni(t.waiting.root,"is-blurred",t.blurred),st(t.waiting.eye,"aria-pressed",t.blurred?"true":"false"),st(t.waiting.eye,"aria-label",t.blurred?"Show this panel":"Hide this panel for the camera"),st(t.waiting.eye,"title",t.blurred?"Show":"Hide for the camera"),t.wlist.inert=t.blurred,e&&Zy(Vy,t.blurred?"1":"0")}function GR(i,e){let t=xf(V("aside",{class:"bhq-dock","aria-label":"Waiting on me, finished work and routines"})),n=df("check","Status check"),s=df("waiting","Waiting on me",{eye:!0}),r=df("finished","Finished"),o=df("routines","Routines"),a=V("div",{class:"bhq-wlist"}),c=V("p",{class:"bhq-note",text:"Nothing is waiting on you.",hidden:!0});s.inner.append(a,c);let l=V("ol",{class:"bhq-tl",role:"list"}),h=V("p",{class:"bhq-note",text:"Nothing finished in the last 24 hours.",hidden:!0});r.inner.append(l,h);let u=V("ul",{class:"bhq-rl",role:"list"}),f=V("p",{class:"bhq-note",text:"No routines scheduled.",hidden:!0});o.inner.append(u,f);let d=V("ul",{class:"bhq-ck",role:"list"}),p=V("p",{class:"bhq-note bhq-cknote"});n.inner.append(d,p),n.root.hidden=!0,t.append(n.root,s.root,r.root,o.root),document.body.append(t),L.dock={root:t,check:n,waiting:s,finished:r,routines:o,wlist:a,wempty:c,tl:l,fempty:h,rl:u,rempty:f,cl:d,cnote:p,lru:[],wrows:new Map,crows:new Map,checkT:null,finSig:null,finRefs:[],routSig:null,routRefs:[],copied:new Map,blurred:!1,floors:i,feed:e};let x=null;try{x=JSON.parse(Dy(Gy)||"null")}catch{x=null}for(let m of["routines","finished","waiting"])Fm(L.dock[m],x&&typeof x[m]=="boolean"?x[m]:m==="waiting",!1);s.eye.addEventListener("click",()=>Oy(!L.dock.blurred)),Oy(Dy(Vy)==="1",!1),L.onResize=()=>ic(),addEventListener("resize",L.onResize),typeof ResizeObserver=="function"&&(L.ro2=new ResizeObserver(()=>ic()),i&&L.ro2.observe(i),e&&L.ro2.observe(e)),ic()}function By(i){return!!i&&i.getClientRects().length>0}function ic(){let i=L&&L.dock;if(!i)return;if(L.phone){Cm(1/0),pf();return}let e=24,t=By(i.floors)?i.floors.offsetTop+i.floors.offsetHeight+10:96,n=By(i.feed)?i.feed.offsetTop-10:innerHeight-e,s=Math.max(0,n-t);Ny(i.root,"top",t),Ny(i.root,"maxHeight",s),Cm(s),pf()}var WR="(max-width: 600px), (max-height: 500px) and (max-width: 950px)",qR="(max-height: 500px) and (orientation: landscape)",XR=6;function wm(i,e){return i*e*.55/(e+.55*Math.abs(i))}function tv(i){let e=i[i.length-1],t=i[0];for(let s of i)if(e.t-s.t<=100){t=s;break}let n=e.t-t.t;return n>0?(e.y-t.y)/n*1e3:0}function ky(i){return i/1e3*.998/(1-.998)}function Im(i,e,t,n,s,r,o){let a=Math.pow(2*Math.PI/(r||.36),2),c=2*(o||1)*Math.sqrt(a),l=i,h=t||0,u=performance.now(),f=0,d=!1,p=x=>{if(d)return;let m=Math.min(.032,Math.max(.001,(x-u)/1e3));if(u=x,h+=(-a*(l-e)-c*h)*m,l+=h*m,Math.abs(l-e)<.35&&Math.abs(h)<12){f=0,n(e),s&&s();return}n(l),f=requestAnimationFrame(p)};return f=requestAnimationFrame(p),()=>{d=!0,f&&cancelAnimationFrame(f)}}function zy(i,e){let t=null;i.addEventListener("pointerdown",s=>{if(!(!e.can(s)||s.pointerType==="mouse"&&s.button!==0)){t={id:s.pointerId,y0:s.clientY,s:e.begin(),hist:[{t:s.timeStamp,y:s.clientY}],moved:!1};try{i.setPointerCapture(s.pointerId)}catch{}}}),i.addEventListener("pointermove",s=>{if(!t||s.pointerId!==t.id)return;let r=s.clientY-t.y0;!t.moved&&Math.abs(r)<XR||(t.moved=!0,t.hist.push({t:s.timeStamp,y:s.clientY}),t.hist.length>8&&t.hist.shift(),e.move(t.s+r))});let n=s=>{if(!t||s.pointerId!==t.id)return;let r=t;t=null,e.end(r.moved,r.moved?tv(r.hist):0)};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n)}var mf={};function nv(i,e){mf[i]!==e&&(mf[i]=e,document.documentElement.style.setProperty(i,e))}function YR(i){let e=V("button",{class:"bhq-sgrab",type:"button","aria-expanded":"false","aria-label":"Expand panel"},V("i",{"aria-hidden":"true"})),t=V("div",{class:"bhq-shead"}),n=V("div",{class:"bhq-speek"},e,t),s=V("div",{class:"bhq-sbody"}),r=V("i",{class:"bhq-sprobe","aria-hidden":"true"}),o=xf(V("div",{class:"bhq-sheet",role:"region","aria-label":"Floor panel"},n,s,r));document.body.append(o);let a=L.sh={root:o,peek:n,body:s,grab:e,headSlot:t,probe:r,feed:i,y:0,H:0,travel:0,vis0:132,open:!1,busy:!1,cancel:null};a.start=new URLSearchParams(location.search).get("sheet")==="open";let c=d=>{let p=a.travel;gf(d<0?-wm(-d,160):d>p?p+wm(d-p,160):d)},l=(d,p)=>{if(a.busy=!1,!d){sc(!a.open);return}sc(a.y+ky(p)<a.travel/2,p)};zy(n,{can:()=>L.phone&&!L.land,begin:()=>(a.cancel&&(a.cancel(),a.cancel=null),a.busy=!0,a.y),move:c,end:l}),e.addEventListener("click",d=>{d.detail===0&&sc(!a.open)});let h=null;s.addEventListener("touchstart",d=>{h=a.open&&!L.land&&d.touches.length===1&&s.scrollTop<=0?{y0:d.touches[0].clientY,on:!1,s:0,hist:[]}:null},{passive:!0}),s.addEventListener("touchmove",d=>{if(!h)return;let p=d.touches[0].clientY;if(!h.on){if(s.scrollTop>0||p-h.y0<-2){h=null;return}if(p-h.y0<3)return;h.on=!0,h.y0=p,h.s=a.y,a.busy=!0,a.cancel&&(a.cancel(),a.cancel=null)}d.cancelable&&d.preventDefault(),h.hist.push({t:d.timeStamp,y:p}),h.hist.length>8&&h.hist.shift(),c(h.s+(p-h.y0))},{passive:!1});let u=()=>{if(!h)return;let d=h;h=null,d.on&&l(!0,tv(d.hist))};s.addEventListener("touchend",u),s.addEventListener("touchcancel",u);let f=L.panel;if(f){let d=f.card;zy(d.root,{can:p=>L.phone&&!L.land&&!!p.target.closest(".bhq-hero, .bhq-cgrab")&&!p.target.closest("button"),begin:()=>(L.cardStop&&(L.cardStop(),L.cardStop=null),L.cardY),move:p=>{L.cardY=p<0?-wm(-p,120):p,nc(L.cardY)},end:(p,x)=>{if(!p)return;let m=L.cardY;if(m+ky(x)>130||x>900){let g=d.root.offsetHeight+24;L.cardStop=Im(m,g,x,y=>{L.cardY=y,nc(y)},()=>{L.cardStop=null,L.h.onSelectBot&&L.h.onSelectBot(null),setTimeout(()=>{L.mode==="card"&&(L.cardY=0,nc(0))},120)},.3,1)}else L.cardStop=Im(m,0,x,g=>{L.cardY=g,nc(g)},()=>{L.cardStop=null},.4,Math.abs(x)>600?.8:1)}})}typeof ResizeObserver=="function"&&(L.ro3=new ResizeObserver(()=>{Pm(),Um()}),L.ro3.observe(o),L.ro3.observe(n),f&&L.ro3.observe(f.card.root))}function nc(i){L.panel.card.root.style.transform=i?"translate3d(0,"+i.toFixed(1)+"px,0)":""}function iv(){L.cardStop&&(L.cardStop(),L.cardStop=null),L.cardY=0,L.panel&&nc(0)}function gf(i){let e=L.sh;e.y=i,e.root.style.transform="translate3d(0,"+i.toFixed(1)+"px,0)",e.body.style.opacity=ac((e.travel-i)/36,0,1).toFixed(2),Um()}function sc(i,e,t){let n=L.sh;if(!n||!L.phone||(n.open=!!i,st(n.grab,"aria-expanded",n.open?"true":"false"),st(n.grab,"aria-label",n.open?"Collapse panel":"Expand panel"),ni(n.root,"is-open",n.open),n.body.inert=!n.open&&!L.land,n.cancel&&(n.cancel(),n.cancel=null),L.land))return;let s=n.open?0:n.travel;if(t||oc.matches||document.hidden){gf(s);return}n.cancel=Im(n.y,s,e||0,gf,()=>{n.cancel=null},n.open?.4:.34,Math.abs(e||0)>600?.82:1)}function Pm(){let i=L&&L.sh;!i||!L.phone||(i.H=i.root.offsetHeight,i.vis0=i.peek.offsetHeight+i.probe.offsetHeight,i.travel=L.land?0:Math.max(0,i.H-i.vis0),nv("--bhq-peek",i.vis0+"px"),L.land?(i.root.style.transform="",i.body.style.opacity="",i.y=0):!i.busy&&!i.cancel&&gf(i.open?0:i.travel))}function Um(){let i=L&&L.sh;if(!i||!L.phone)return;let e=L.panel&&L.panel.card.root,t;L.land?t=0:L.mode==="card"&&e&&!e.hidden?t=e.offsetHeight:t=Math.max(0,i.H-ac(i.y,-40,i.travel)),nv("--bhq-vis",Math.round(t*10)/10+"px")}function $R(){if(typeof matchMedia!="function")return;let i=matchMedia(WR),e=matchMedia(qR);L.mqs=[i,e],L.mqFn=()=>KR(i.matches,i.matches&&e.matches),i.addEventListener("change",L.mqFn),e.addEventListener("change",L.mqFn),L.mqFn()}function KR(i,e){let t=L.phone,n=L.sh,s=L.dock,r=L.panel;L.phone=i,L.land=i&&e;let o=document.documentElement;if(o.classList.toggle("bhq-phone",i),o.classList.toggle("bhq-land",L.land),i&&!t)r&&n.headSlot.append(r.teamHead),n.body.append(...[s&&s.waiting.root,r&&r.tcard,s&&s.finished.root,s&&s.routines.root,n.feed].filter(Boolean)),n.open=n.start||L.land,n.start=!1,Pm(),sc(n.open,0,!0),L.chipFloor=null;else if(!i&&t){n.cancel&&(n.cancel(),n.cancel=null),n.root.style.transform="",n.body.style.opacity="",n.body.inert=!1,iv(),s&&s.root.append(s.waiting.root,s.finished.root,s.routines.root),r&&r.team.append(r.teamHead,r.tcard),n.feed&&(s&&s.root.parentNode?s.root.parentNode.insertBefore(n.feed,s.root):document.body.append(n.feed));for(let a of Object.keys(mf))document.documentElement.style.removeProperty(a);mf={}}else i&&(L.land&&(n.open=!0),Pm(),sc(n.open,0,!0));ic(),pf(),i&&L.last.state&&av(L.activeFloorId)}function sv(i,e){if(!L||!i)return;e=e||{};let t={currentFloor:e.currentFloor||null,selectedBot:e.selectedBot||null};L.last={state:i,opts:t},_R(i),L.ready||(L.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.add("bhq-ready")))),Qi("topbar",()=>L.top&&rv(i)),Qi("floors",()=>L.fl&&JR(i,t)),Qi("panel",()=>L.panel&&jR(i,t)),Qi("feed",()=>L.feed&&sC(i)),Qi("dock",()=>L.dock&&hv(i)),Qi("zoom",()=>{L.zoom&&!L.zoom.root.isConnected&&document.body.append(L.zoom.root)}),Qi("fades",pf)}var Hy=new Set;function Qi(i,e){try{e()}catch(t){Hy.has(i)||(Hy.add(i),console.error("[ui] render failed in "+i,t))}}function rv(i){let e=L.top;at(e.clock,Di(Date.now()));let t=RR(i);for(let r of qy){let o=e.chips[r.key],a=r.n(t),c=Em(r.s,a);ba(o.num,a),at(o.label,c),ni(o.el,"is-zero",a===0),ni(o.el,"is-alert",!!r.alert&&a>0),r.hideZero&&Qt(o.el,a===0);let l=a+" "+c;r.key==="attention"&&t.stuck>0&&(l=t.waiting_user+" "+Em("waiting_user",t.waiting_user)+", "+t.stuck+" stuck"),st(o.el,"title",l)}let n=i.usage||{},s=Number.isFinite(n.total_used_pct)?ac(n.total_used_pct,0,100):null;if(Qt(e.usage,s==null),s!=null){let r=s>=95?"error":s>=85?"warn":null;at(e.usageLabel,dR[n.period]||"Limit"),Ma(e.meter,"--p",(s/100).toFixed(3)),at(e.pct,(Math.round(s*10)/10).toFixed(1)+"%"),st(e.meter,"aria-valuenow",Math.round(s)),st(e.meter,"data-level",r),st(e.usage,"data-level",r);let o="",a=gn(n.resets_at);if(a!=null){let h=a-ar();o=h>0?"resets in "+Yy(h):"resetting now"}at(e.reset,o),Qt(e.reset,!o);let c=e.reset.previousElementSibling;c&&Qt(c,!o);let l=gn(n.updated_at);st(e.usage,"title",l!=null?"Updated at "+Di(l):null)}Qt(e.demo,!i.demo)}function ZR(i){let e=[];for(let t of["working","waiting_user","error","stuck","done","idle"]){let n=Number(i&&i[t])||0;n>0&&e.push(n+" "+Em(t,n))}return e.join(", ")}function ov(i,e){let t=i.bots||{};return Array.isArray(e.bots)?e.bots:Object.keys(t).filter(n=>t[n].floor===e.id)}function JR(i,e){let t=L.fl,n=i.bots||{},s=(i.floors||[]).slice().sort((a,c)=>(Number(c.order)||0)-(Number(a.order)||0)),r=new Set,o=s.some(a=>a.id===e.currentFloor)?e.currentFloor:null;L.activeFloorId=o,at(t.count,s.length),s.forEach((a,c)=>{let l=L.floors.get(a.id);l||(l=NR(a.id),L.floors.set(a.id,l)),r.add(a.id);let h=a.order!=null&&Number.isFinite(Number(a.order))?Number(a.order):s.length-c,u=ov(i,a);for(at(l.num,h),at(l.name,a.name||a.id),at(l.count,u.length);l.dotEls.length<u.length;){let p=V("i",{class:"bhq-dot"});l.dotEls.push(p),l.dots.append(p)}for(;l.dotEls.length>u.length;)l.dotEls.pop().remove();u.forEach((p,x)=>st(l.dotEls[x],"data-s",ws(n[p])));let f=null;for(let p of u){let x=ws(n[p]);if(x==="error"){f="error";break}(x==="waiting_user"||x==="stuck")&&(f="waiting_user")}st(l.btn,"data-alert",f);let d=ZR(a.counts);st(l.btn,"aria-label","Floor "+h+", "+(a.name||a.id)+": "+u.length+" "+rc(u.length,"bot","bots")+(d?" ("+d+")":"")),st(l.btn,"title",d||null),st(l.btn,"aria-current",a.id===o?"true":null)});for(let[a,c]of L.floors)r.has(a)||(c.btn.remove(),L.floors.delete(a));lc(t.shaft,s.map(a=>L.floors.get(a.id).btn),1),lv(),av(o)}function av(i){let e=L.fl;if(!L.phone||!i||L.chipFloor===i)return;let t=L.floors.get(i);if(!t||!t.btn.offsetWidth)return;let n=L.chipFloor==null;L.chipFloor=i;let s=e.fscroll,r=t.btn.getBoundingClientRect(),o=s.getBoundingClientRect();s.scrollTo({left:Math.max(0,s.scrollLeft+(r.left-o.left)-(o.width-r.width)/2),behavior:n||oc.matches?"auto":"smooth"})}function lv(){let i=L&&L.fl;if(!i)return;let e=L.activeFloorId?L.floors.get(L.activeFloorId):null;if(!e||!e.btn.isConnected||!e.btn.offsetHeight){i.carShown&&(i.car.style.opacity="0",i.carShown=!1);return}let t=e.btn.offsetTop,n=e.btn.offsetHeight;(i.carTop!==t||i.carH!==n)&&(i.carTop=t,i.carH=n,i.car.style.transform="translateY("+t+"px)",i.car.style.height=n+"px"),i.carShown||(i.car.style.opacity="1",i.carShown=!0),i.ready||(i.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>i.shaft.classList.add("is-ready"))))}function jR(i,e){let t=L.panel,n=i.bots||{},s=(i.floors||[]).find(u=>u.id===e.currentFloor)||null,r=e.selectedBot?n[e.selectedBot]:null,o=r?"card":"team",a=L.mode,c=L.cardBot,l=t.team.contains(document.activeElement),h=t.card.root.contains(document.activeElement);if(o!==a&&(Qt(t.team,o==="card"),Qt(t.card.root,o==="team"),L.mode=o,o==="card"&&iv(),L.sh&&(ni(L.sh.root,"is-away",o==="card"),Um())),o==="card")L.cardBot!==r.id&&(L.cardBot=r.id,t.card.histSig=null,t.card.fresh=!0,t.card.body.scrollTop=0,a==="card"&&Ky(t.card.root,"is-enter")),cv(i,r),a!=="card"&&l&&t.card.name.focus({preventScroll:!0});else if(L.cardBot=null,eC(i,s,e),a==="card"&&h){let u=L.cells.get(c);u&&u.btn.focus({preventScroll:!0})}}function QR(i){let e=Sa(),t=V("b",{class:"bhq-mname"}),n=V("span",{class:"bhq-mstep"}),s=V("span",{class:"bhq-mseen bhq-num"}),r=V("button",{class:"bhq-member",type:"button","data-id":i,role:"listitem"},e.root,V("span",{class:"bhq-mtext"},t,n),s);return r.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(i)}),{btn:r,av:e,name:t,step:n,seen:s}}function eC(i,e,t){let n=L.panel,s=i.bots||{},r=e?ov(i,e):[];r=r.filter(d=>s[d]);let o=!0;L.teamFloor!==(e?e.id:null)&&(L.teamFloor=e?e.id:null,n.list.scrollTop=0,o=!L.teamReady,L.teamReady&&Ky(n.list,"is-enter")),L.teamReady=!0,at(n.teamTitle,e?e.name||e.id:"No floor selected");let a=r.length,c=0,l=0,h=0;for(let d of r){let p=ws(s[d]);p==="working"?c++:p==="waiting_user"||p==="stuck"?l++:p==="error"&&h++}at(n.teamSub,e?a+" "+rc(a,"bot","bots"):L.phone?"Pick a floor above":"Pick a floor on the left"),st(n.teamHead,"data-s",c>0?"working":"idle"),ba(n.teamBig,c,o),ba(n.nWait,l,o),ba(n.nErr,h,o),at(n.lErr,h===1?"error":"errors"),ni(n.rowWait,"is-zero",!l),ni(n.rowErr,"is-zero",!h),Qt(n.teamEmpty,a>0||!e);let u=new Set(r);for(let[d,p]of L.cells)u.has(d)||(p.btn.remove(),L.cells.delete(d));let f=r.map(d=>{let p=L.cells.get(d);p||(p=QR(d),L.cells.set(d,p));let x=s[d],m=ws(x);wa(p.av,x,m),at(p.name,x.name||d);let g=m==="idle"?$y(x):"",y=m==="idle"&&x.status==="working";at(p.step,g||(y?rr(m):x.step||rr(m))),st(p.step,"data-u",g?"":null);let w=gn(x.last_seen);return at(p.seen,w==null?"\u2013":vR(w)),st(p.seen,"title",w==null?"No status line yet":"Last status line "+Lm(w)+" ("+Di(w)+")"),st(p.btn,"data-s",m),st(p.btn,"aria-label",(x.name||d)+", "+rr(m)+", "+Tm(x)),st(p.btn,"title",(x.name||d)+": "+rr(m)+(x.step?". "+x.step:"")+" \xB7 "+Tm(x)),p.btn});lc(n.list,f,0)}function tC(i){return V("li",{class:"bhq-step-row"},V("time",{class:"bhq-num",text:Di(gn(i.t))}),V("span",{text:i.step||rr(i.status),title:i.step||""}))}function cv(i,e){let t=L.panel.card,n=ws(e),s=ar(),r=!t.fresh;st(t.hero,"data-s",n),wa(t.av,e,n),at(t.name,e.name||e.id);let o=(i.floors||[]).find(P=>P.id===e.floor),a=o&&(o.name||o.id)||e.group||"",c=Number.isFinite(Number(e.desk))&&e.desk!=null?" \xB7 desk "+Number(e.desk):"";at(t.where,a+c+" \xB7 "+Tm(e)),st(t.stDot,"data-s",n);let l=gn(e.since),h=l==null?"":" \xB7 "+(s-l<6e4?"just now":yR(s-l));at(t.stTxt,(Wy[n]||rr(n))+h);let u=n==="idle"?$y(e):"";at(t.now,u||(n==="idle"&&e.status==="working"?"Went quiet after: "+(e.step||"a task"):e.step||"No data on the current step"));let f=typeof e.task=="string"?e.task.trim():"",d=!!f&&!/^tsk-\d+$/i.test(f)&&f!==(e.step||"").trim();Qt(t.taskBlock,!d),at(t.task,d?f:"");let p=e.today||{},x=Number(p.events)||0,m=Number(p.tasks_done)||0;ba(t.sSteps.v,x,r),at(t.sSteps.l,rc(x,"step","steps")),ba(t.sTasks.v,m,r),at(t.sTasks.l,rc(m,"task","tasks")),at(t.sHours.v,wR(p.working_min));let g=i.usage&&i.usage.period;at(t.usageLabel,pR[g]||"Usage");let y=Number.isFinite(e.usage_share)?ac(e.usage_share,0,1):null;Qt(t.useBlock,y==null),y!=null&&(Ma(t.fuel,"--p",(y>0?Math.max(y,.02):0).toFixed(3)),st(t.fuel,"aria-valuenow",Math.round(y*100)),at(t.shareNum,Math.round(y*100)+"%"));let w=gn(i.usage&&i.usage.resets_at),_="";if(w!=null){let P=w-s;_=P>0?"resets in "+Yy(P):"resetting now"}at(t.reset,_),Qt(t.reset,!_||y==null);let v=(e.history||[]).slice(0,4);v.length>1&&v[0].step===e.step&&(v=v.slice(1)),v=v.slice(0,3);let M=e.id+`
`+v.map(P=>P.t+"|"+P.status+"|"+P.step).join(`
`);if(M!==t.histSig){t.histSig=M,t.hist.textContent="",v.length||t.hist.append(V("li",{class:"bhq-step-empty",text:"No steps yet."}));for(let P of v)t.hist.append(tC(P))}let T=!!e.chat_url;t.cta.disabled===T&&(t.cta.disabled=!T),st(t.cta,"data-chat",T?e.chat_url:null);let b=T?"Open this bot chat":i.wallpaper_feed?"No chat link yet":"Set Wallpaper feed in Settings to enable Open chat";st(t.cta,"title",b);let E=(n==="waiting_user"||n==="stuck")&&!!e.paperclip_agent_id;Qt(t.start,!E),st(t.start,"data-agent",E?e.paperclip_agent_id:null),st(t.start,"disabled",t.startBusy?"true":null),at(t.start,t.startBusy?"Starting\u2026":"Start");let R=n==="error"&&!!e.paperclip_agent_id;Qt(t.clearErr,!R),st(t.clearErr,"data-agent",R?e.paperclip_agent_id:null),st(t.clearErr,"disabled",t.clearErrBusy?"true":null),at(t.clearErr,t.clearErrBusy?"Clearing\u2026":"Clear error"),t.fresh=!1}function nC(i,e){let t=e.bots&&e.bots[i.bot],n=i.name||t&&t.name||i.bot||"",s=i.status||"idle";return V("li",{class:"bhq-frow","data-s":s},V("time",{class:"bhq-num",text:Di(gn(i.t)),datetime:i.t||""}),V("i",{class:"bhq-dot","data-s":s,"aria-hidden":"true"}),V("span",{class:"bhq-ftxt"},V("b",{text:n})," "+(i.step||rr(i.status))))}function iC(i){L.feedOut.add(i),i.classList.add("is-out");let e=()=>{i.remove(),L.feedOut.delete(i)};oc.matches?e():setTimeout(e,420)}function sC(i){let e=L.feed,t=(Array.isArray(i.feed)?i.feed:[]).slice(0,4),n=new Map,s=new Array(t.length);for(let l=t.length-1;l>=0;l--){let h=t[l],u=h.t+"|"+h.bot+"|"+h.status+"|"+h.step,f=n.get(u)||0;n.set(u,f+1),s[l]=f?u+"#"+f:u}let r=new Set(s);for(let[l,h]of L.feedRows)r.has(l)||(L.feedRows.delete(l),iC(h));let o=0;for(let l of s)L.feedRows.has(l)||o++;let a=!L.feedFirst&&o>0&&o<4&&!oc.matches,c=t.map((l,h)=>{let u=L.feedRows.get(s[h]);if(!u){if(u=nC(l,i),a){u.classList.add("is-new");let f=()=>u.classList.remove("is-new");u.addEventListener("animationend",f,{once:!0}),setTimeout(f,700)}L.feedRows.set(s[h],u)}return u});lc(e.list,c.concat([...L.feedOut]),0),Qt(e.empty,t.length>0),L.feedFirst=!1}function hv(i){aC(i),cC(i),hC(i),dC(i),ic()}function Om(i,e,t){return i.bots&&i.bots[e]||{id:e,name:t||e,avatar:e}}var rC=15*6e4;function oC(i){let e=Sa({orb:!1}),t=V("b",{class:"bhq-ckname"}),n=V("span",{class:"bhq-ckat bhq-num"}),s=V("li",{class:"bhq-ckrow","data-id":i},e.root,t,n);return s.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(i)}),{li:s,av:e,name:t,at:n}}function aC(i){let e=L.dock,t=i.check,n=t&&Array.isArray(t.bots)?t.bots:[];if(Qt(e.check.root,!n.length),!n.length){e.checkT=null;return}e.checkT!==t.t&&(e.checkT=t.t,Fm(e.check,!0,!1));let s=gn(t.t)??ar(),r=ar()-s>rC,o=n.filter(l=>l.at).length;at(e.check.count,o+"/"+n.length),st(e.check.count,"data-s",o===n.length?"done":r?"error":"waiting_user"),e.check.rows=n.length,ni(e.check.root,"has-rows",!0);let a=new Set,c=n.map(l=>{let h=l.id||l.name;a.add(h);let u=e.crows.get(h);u||(u=oC(h),e.crows.set(h,u)),wa(u.av,Om(i,h,l.name),null),at(u.name,l.name||h);let f=gn(l.at);return st(u.li,"data-ok",f!=null?"yes":r?"no":"wait"),at(u.at,f!=null?"\u2713 "+Di(f):r?"no answer":"waiting\u2026"),u.li});for(let[l,h]of e.crows)a.has(l)||(h.li.remove(),e.crows.delete(l));lc(e.cl,c,0),at(e.cnote,o===n.length?"Every bot answered.":r?"Ask the bots that did not answer to re-read their instructions, or run the setup again.":"Started "+Di(s)+". Each bot ticks off when its own status line arrives.")}function lC(i){let e=Sa(),t=V("button",{class:"bhq-wname",type:"button"}),n=V("button",{class:"bhq-wbtn bhq-wbtn--start",type:"button",text:"Start",hidden:!0}),s=V("button",{class:"bhq-wbtn bhq-wbtn--clear",type:"button",text:"Clear error",hidden:!0}),r=V("button",{class:"bhq-wbtn",type:"button",text:"Open chat",hidden:!0}),o=V("b"),a=V("span"),c=V("p",{class:"bhq-wtext"},o,a),l=V("div",{class:"bhq-wrow","data-id":i},e.root,V("div",{class:"bhq-wmain"},V("div",{class:"bhq-wtop"},t,n,s,r),c)),h=()=>{L.h.onSelectBot&&L.h.onSelectBot(i)};return t.addEventListener("click",h),l.addEventListener("click",u=>{u.target.closest("button")||h()}),n.addEventListener("click",u=>{u.stopPropagation();let f=n.getAttribute("data-agent");f&&Qy(i,f)}),s.addEventListener("click",u=>{u.stopPropagation();let f=s.getAttribute("data-agent");f&&ev(i,f)}),r.addEventListener("click",u=>{u.stopPropagation();let f=r.getAttribute("data-chat");f&&Dm(i,f)}),{row:l,av:e,name:t,start:n,clearErr:s,btn:r,st:o,step:a}}function cC(i){let e=L.dock,t=i.bots||{},n=Object.keys(t).filter(a=>{let c=ws(t[a]);return c==="waiting_user"||c==="error"}).sort((a,c)=>(gn(t[c].last_event)||0)-(gn(t[a].last_event)||0)||String(t[a].name).localeCompare(String(t[c].name))),s=n.filter(a=>ws(t[a])==="error").length;at(e.waiting.count,n.length),e.waiting.rows=n.length,ni(e.waiting.root,"has-rows",n.length>0),st(e.waiting.count,"data-s",s?"error":n.length?"waiting_user":null);let r=new Set(n);for(let[a,c]of e.wrows)r.has(a)||(c.row.remove(),e.wrows.delete(a));let o=n.map(a=>{let c=e.wrows.get(a);c||(c=lC(a),e.wrows.set(a,c));let l=t[a],h=ws(l);st(c.row,"data-s",h),wa(c.av,l,h),at(c.name,l.name||a),at(c.st,Wy[h]||rr(h)),at(c.step,l.step?" \xB7 "+l.step:"");let u=(h==="waiting_user"||h==="stuck")&&!!l.paperclip_agent_id;Qt(c.start,!u),st(c.start,"data-agent",u?l.paperclip_agent_id:null);let f=h==="error"&&!!l.paperclip_agent_id;return Qt(c.clearErr,!f),st(c.clearErr,"data-agent",f?l.paperclip_agent_id:null),Qt(c.btn,!l.chat_url),st(c.btn,"data-chat",l.chat_url||null),c.row});lc(e.wlist,o,0),Qt(e.wempty,n.length>0)}function Bm(i){if(!L||!L.panel||!L.panel.card)return;L.panel.card.startBusy=!!i;let e=L.panel.card;st(e.start,"disabled",i?"true":null),at(e.start,i?"Starting\u2026":"Start")}function km(i){if(!L||!L.panel||!L.panel.card)return;L.panel.card.clearErrBusy=!!i;let e=L.panel.card;st(e.clearErr,"disabled",i?"true":null),at(e.clearErr,i?"Clearing\u2026":"Clear error")}function hC(i){let e=L.dock,t=Array.isArray(i.finished);if(Qt(e.finished.root,!t),!t)return;let n=ar(),s=i.finished.map(o=>({e:o,t:gn(o&&o.t)})).filter(o=>o.e&&(o.t==null||n-o.t<=864e5)).sort((o,a)=>(a.t||0)-(o.t||0)).slice(0,60);at(e.finished.count,s.length),e.finished.rows=s.length,ni(e.finished.root,"has-rows",s.length>0),Qt(e.fempty,s.length>0);let r=s.map(o=>o.t+"|"+o.e.bot+"|"+o.e.step).join(`
`);r!==e.finSig&&(e.finSig=r,e.tl.textContent="",e.finRefs=s.map(o=>{let a=Om(i,o.e.bot,o.e.name),c=Sa({orb:!1});wa(c,a,null);let l=V("span",{class:"bhq-tl-time bhq-num"}),h=V("li",{class:"bhq-tl-row"},c.root,V("div",{class:"bhq-tl-main"},V("div",{class:"bhq-tl-top"},V("b",{class:"bhq-tl-name",text:o.e.name||a.name||o.e.bot||""}),l),V("div",{class:"bhq-tl-step",text:o.e.step||"done",title:o.e.step||""})));return e.tl.append(h),{time:l,t:o.t}}));for(let o of e.finRefs)at(o.time,o.t==null?"":Lm(o.t))}async function uC(i){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(i),!0}catch{}try{let e=V("textarea",{"aria-hidden":"true",tabindex:"-1",readonly:!0});e.value=i,e.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none",document.body.append(e),e.select();let t=document.execCommand("copy");return e.remove(),!!t}catch{return!1}}async function fC(i,e){let t=L.dock,n="pause routine "+i.routine,s=await uC(n);at(e.noteText,s?"Copied \u2014 paste it in the chat":"Could not copy \u2014 send: "+n);let r=e.key;clearTimeout(t.copied.get(r)),e.li.classList.add("is-copied"),t.copied.set(r,setTimeout(()=>{t.copied.delete(r),e.li.classList.remove("is-copied")},4200));let o=L.last.state&&L.last.state.bots&&L.last.state.bots[i.bot];o&&o.chat_url&&Dm(o.id,o.chat_url)}function dC(i){let e=L.dock,t=Array.isArray(i.routines);if(Qt(e.routines.root,!t),!t)return;let n=i.routines.filter(r=>r&&r.routine).slice().sort((r,o)=>(gn(r.next_run)??1/0)-(gn(o.next_run)??1/0));at(e.routines.count,n.length),e.routines.rows=n.length,ni(e.routines.root,"has-rows",n.length>0),Qt(e.rempty,n.length>0);let s=n.map(r=>r.bot+"|"+r.routine+"|"+r.schedule+"|"+r.next_run+"|"+r.name).join(`
`);s!==e.routSig&&(e.routSig=s,e.rl.textContent="",e.routRefs=n.map(r=>{let o=Om(i,r.bot,r.name),a=r.name||o.name||r.bot||"",c=r.bot+"|"+r.routine,l=Sa({orb:!1});wa(l,o,null);let h=V("span",{class:"bhq-rnext bhq-num"}),u=V("span"),f=V("button",{class:"bhq-roff",type:"button",text:"Turn off",title:'Copies "pause routine '+r.routine+'" and opens the chat'}),d=V("li",{class:"bhq-rrow"+(e.copied.has(c)?" is-copied":"")},l.root,V("div",{class:"bhq-rmain"},V("div",{class:"bhq-rtop"},V("b",{class:"bhq-rname",text:r.routine,title:r.routine}),h),V("div",{class:"bhq-rbot"},V("span",{class:"bhq-rmeta",text:a+(r.schedule?" \xB7 "+r.schedule:""),title:a+(r.schedule?" \xB7 "+r.schedule:"")}),V("span",{class:"bhq-rnote",role:"status"},Qr(or.check),u),f))),p={li:d,next:h,noteText:u,key:c,t:gn(r.next_run)};return at(u,"Copied \u2014 paste it in the chat"),f.addEventListener("click",()=>fC(r,p)),e.rl.append(d),p}));for(let r of e.routRefs)at(r.next,r.t==null?"no date":bR(r.t)),st(r.next,"title",r.t==null?null:MR(r.t))}var gv="bothq.sound",pC="/4d/audio/music-loop.m4a",_f=45.714285714285715,zm=2,mC=.4,xv=.75,_v=.9,uv=[72,74,76,79,81,84],fv=[76,79,81,84,86,88,91,93],gC='<svg class="bhq-snd-on" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3.2 7.6h2.9L10 4.5v11L6.1 12.4H3.2z" fill="currentColor"/><path d="M13 7.3a3.9 3.9 0 0 1 0 5.4M15.3 5.1a7 7 0 0 1 0 9.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',xC='<svg class="bhq-snd-off" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3.2 7.6h2.9L10 4.5v11L6.1 12.4H3.2z" fill="currentColor"/><path d="M13.2 8l4 4m0-4l-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',ns=_C(),Oe=null,ts=null,yi=null,Es=null,Vm=null,yf=null,Gm=!1,cc=!1,lr=null,hc=null,zt={buf:null,loading:null,next:0,first:!0,timer:0,playing:!1,srcs:new Set},dv=new Map;function _C(){try{return{music:!0,fx:!0,...JSON.parse(localStorage.getItem(gv))}}catch{return{music:!0,fx:!0}}}function yC(){try{localStorage.setItem(gv,JSON.stringify(ns))}catch{}}function yv({slot:i,withMusic:e=!0}={}){if(Gm)return;Gm=!0,hc=new AbortController;let t=hc.signal;i&&wC(i,t);let n=()=>{try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}vC()&&(Oe.resume?.(),!cc&&(cc=!0,ns.music&&e&&Wm()))};for(let o of["pointerdown","keydown","touchend"])addEventListener(o,n,{capture:!0,signal:t});document.addEventListener("visibilitychange",()=>{if(!Oe||!cc)return;let o=Oe.currentTime;ts.gain.cancelScheduledValues(o),ts.gain.setValueAtTime(ts.gain.value,o),document.hidden?(ts.gain.linearRampToValueAtTime(0,o+.4),setTimeout(()=>{document.hidden&&Oe.suspend?.()},500)):(Oe.resume?.(),ts.gain.linearRampToValueAtTime(_v,o+1.2))},{signal:t}),document.addEventListener("click",o=>{let a=o.target instanceof Element?o.target:null;if(!a)return;let c=a.closest(".bhq-dtoggle");if(c)return void queueMicrotask(()=>Xn.panel(c.getAttribute("aria-expanded")==="true"));let l=a.closest(".bhq-sgrab");if(l)return void queueMicrotask(()=>Xn.zoom(l.getAttribute("aria-expanded")==="true"?"in":"out",.4));a.closest(".bhq-eye")&&Xn.tick()},{signal:t});let s=0,r=o=>{let a=performance.now();a-s>280&&Xn.zoom(o.deltaY<0?"in":"out"),s=a};document.getElementById("office")?.addEventListener("wheel",r,{passive:!0,signal:t}),document.getElementById("scene")?.addEventListener("wheel",r,{passive:!0,signal:t}),cc&&ns.music&&e&&Wm()}function vv(){bv(),hc&&(hc.abort(),hc=null),lr&&(lr.btn.remove(),lr.pop.remove(),lr=null),Gm=!1}function vC(){if(Oe)return!0;let i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;try{Oe=new i({latencyHint:"interactive"})}catch{return!1}let e=Oe.createDynamicsCompressor();e.threshold.value=-16,e.knee.value=8,e.ratio.value=3,e.attack.value=.004,e.release.value=.25,ts=Oe.createGain(),ts.gain.value=_v,ts.connect(e),e.connect(Oe.destination),yi=Oe.createGain(),yi.gain.value=0,yi.connect(ts),Es=Oe.createGain(),Es.gain.value=ns.fx?xv:0,Es.connect(ts);let t=Oe.createConvolver();t.buffer=bC(2.2,1.6),Vm=Oe.createGain(),Vm.connect(t),t.connect(Es),yf=Oe.createBuffer(1,Oe.sampleRate*2,Oe.sampleRate);let n=yf.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return!0}function bC(i,e){let t=Oe.sampleRate,n=Math.floor(i*t),s=Math.floor(.012*t),r=Oe.createBuffer(2,n,t);for(let o=0;o<2;o++){let a=r.getChannelData(o),c=0;for(let l=s;l<n;l++){let h=(l-s)/t,u=1-Math.exp(-2*Math.PI*(500+7e3*Math.exp(-h*1.8))/t);c+=u*(Math.random()*2-1-c),a[l]=c*Math.exp(-6.91*h/e)}}return r}async function Wm(){if(!Oe||zt.playing)return;zt.playing=!0;try{zt.buf||(zt.buf=await(zt.loading||(zt.loading=fetch(pC).then(e=>e.arrayBuffer()).then(e=>new Promise((t,n)=>Oe.decodeAudioData(e,t,n))))))}catch{zt.playing=!1,zt.loading=null;return}if(!zt.playing)return;let i=Oe.currentTime;yi.gain.cancelScheduledValues(i),yi.gain.setValueAtTime(yi.gain.value,i),yi.gain.linearRampToValueAtTime(mC,i+3),zt.next=i+.05,zt.first=!0,pv(),clearInterval(zt.timer),zt.timer=setInterval(pv,1e3)}function pv(){for(;zt.playing&&zt.next<Oe.currentTime+3;){let i=zt.next,e=Oe.createBufferSource(),t=Oe.createGain();e.buffer=zt.buf,zt.first?t.gain.setValueAtTime(1,i):(t.gain.setValueAtTime(0,i),t.gain.linearRampToValueAtTime(1,i+zm)),t.gain.setValueAtTime(1,i+_f),t.gain.linearRampToValueAtTime(0,i+_f+zm),e.connect(t),t.connect(yi),e.start(i),e.stop(i+_f+zm),zt.srcs.add(e),e.onended=()=>zt.srcs.delete(e),zt.first=!1,zt.next+=_f}}function bv(){if(zt.playing=!1,clearInterval(zt.timer),!Oe)return;let i=Oe.currentTime;yi.gain.cancelScheduledValues(i),yi.gain.setValueAtTime(yi.gain.value,i),yi.gain.linearRampToValueAtTime(0,i+.8);for(let e of zt.srcs)try{e.stop(i+.9)}catch{}zt.srcs.clear()}var cr=i=>440*2**((i-69)/12);function Fn(i,e){if(!Oe||!cc||!ns.fx||Oe.state!=="running"||document.hidden)return!1;if(!i)return!0;let t=performance.now();return t-(dv.get(i)||0)<e?!1:(dv.set(i,t),!0)}function Ts(i=0,e=.2){let t=Oe.createGain(),n=t;if(Oe.createStereoPanner){let s=Oe.createStereoPanner();s.pan.value=i,t.connect(s),n=s}if(n.connect(Es),e){let s=Oe.createGain();s.gain.value=e,n.connect(s),s.connect(Vm)}return t}function Mv(i,e,t,n,s){i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(t,e+n),i.exponentialRampToValueAtTime(1e-4,e+n+s)}function Ui(i,e,t,n,s,r,o,a){let c=Oe.createOscillator(),l=Oe.createGain();return c.type=i,c.frequency.setValueAtTime(e,t),Mv(l.gain,t,r,o,a),c.connect(l),l.connect(s),c.start(t),c.stop(t+n),c}function es(i,e=.45,t=0){let n=Ts(t,.06),s=Oe.createBufferSource(),r=Oe.createBiquadFilter(),o=Oe.createGain();s.buffer=yf,r.type="bandpass",r.frequency.value=3e3+Math.random()*600,r.Q.value=1.3,Mv(o.gain,i,e,.001,.022),s.connect(r),r.connect(o),o.connect(n),s.start(i,Math.random()*1.5),s.stop(i+.05),Ui("sine",2100*(.96+Math.random()*.08),i,.04,n,e*.3,.001,.02),Ui("sine",190,i,.07,n,e*.45,.001,.035)}function eo(i,e,t,n=0,s=!1){let r=cr(e),o=Ts(n,.28);for(let[a,c]of[[1,t],[2,t*.22]])Ui("sine",r*a*(s?1.35:.55),i,.36,o,c,.003,.3).frequency.exponentialRampToValueAtTime(r*a,i+.028)}function MC(i,e,t,n=0){let s=cr(e),r=Ts(n,.2),o=new Float32Array(48);for(let c=0;c<o.length;c++){let l=c/(o.length-1)*.36;o[c]=s*(1+.26*Math.exp(-13*l)*Math.sin(2*Math.PI*11*l))*(.86+.14*(1-Math.exp(-30*l)))}let a=Ui("sine",s,i,.4,r,t,.002,.34);a.frequency.cancelScheduledValues(i),a.frequency.setValueCurveAtTime(o,i,.36)}function Fi(i,e,t,n=.15){let s=cr(e),r=Ts(n,.5),o=Ui("sine",s,i,1.9,r,t,.002,1.6),a=Oe.createOscillator(),c=Oe.createGain();a.frequency.value=s*3,c.gain.setValueAtTime(s*.5,i),c.gain.exponentialRampToValueAtTime(s*.01,i+.6),a.connect(c),c.connect(o.frequency),a.start(i),a.stop(i+1.9),Ui("sine",s*2,i,.7,r,t*.18,.002,.5)}function Hm(i,e,t=.55,n=.3){let s=Ts(0,.2),r=Oe.createBufferSource(),o=Oe.createBiquadFilter(),a=Oe.createGain(),[c,l]=e==="in"?[450,3600]:e==="out"?[3200,380]:[300,1500];r.buffer=yf,r.loop=!0,o.type="bandpass",o.Q.value=.9,o.frequency.setValueAtTime(c,i),o.frequency.exponentialRampToValueAtTime(l,i+t),a.gain.setValueAtTime(1e-4,i),a.gain.linearRampToValueAtTime(n,i+t*(e==="in"?.6:.35)),a.gain.exponentialRampToValueAtTime(1e-4,i+t),r.connect(o),o.connect(a),a.connect(s),r.start(i,Math.random()),r.stop(i+t+.05)}function mv(i,e,t){let n=Ts(0,.25),s=Oe.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(1800,i),s.frequency.exponentialRampToValueAtTime(400,i+.3),s.connect(n),Ui("triangle",cr(e),i,.5,s,t,.004,.42)}function SC(i){let e=2166136261;for(let t of String(i))e=Math.imul(e^t.charCodeAt(0),16777619);return uv[(e>>>0)%uv.length]}var Xn={tick(){Fn("tick",40)&&es(Oe.currentTime,.35)},hover(i){!i||!Fn("hover:"+i,450)||!Fn("hover",70)||MC(Oe.currentTime+.01,SC(i),.16,(Math.random()-.5)*.5)},select(i){if(!Fn("select",120))return;let e=Oe.currentTime+.01;i?(es(e,.4),eo(e+.02,79,.2,.3),eo(e+.09,88,.17,.3)):(eo(e,88,.12,.3,!0),eo(e+.07,79,.1,.3,!0))},floor(i=0){if(!Fn("floor",150))return;let e=Oe.currentTime+.01;es(e,.4,-.4),Hm(e+.01,"slide",.42,.22),Ui("sine",95,e+.02,.25,Ts(0,0),.22,.003,.16).frequency.exponentialRampToValueAtTime(70,e+.2),Fi(e+.16,fv[Math.max(0,Math.min(fv.length-1,i))],.12)},zoom(i,e=.55){Fn("zoom",200)&&Hm(Oe.currentTime+.005,i==="in"?"in":"out",e,.2)},panel(i){if(!Fn("panel",120))return;let e=Oe.currentTime+.01;es(e,.35,-.35),eo(e+.01,i?84:79,.13,-.35,!i)},status(i){if(!Fn("status",2500)||!Fn("status:"+i,6e3))return;let e=Oe.currentTime+.02;i==="waiting_user"?(Fi(e,88,.14),Fi(e+.2,84,.13)):i==="error"?(mv(e,69,.16),mv(e+.17,65,.15)):i==="done"&&(Fi(e,84,.08,.2),Fi(e+.08,88,.08,.25),Fi(e+.16,91,.08,.3))},pick(i=0,e=2){if(!Fn("pick",60))return;let t=Oe.currentTime+.005,n=[84,81,79,76][Math.round(i/Math.max(1,e-1)*3)];es(t,.32,.25),eo(t+.012,n,.13,.25)},press(){if(!Fn("press",150))return;let i=Oe.currentTime+.005;es(i,.4),Fi(i+.02,84,.08,0),Fi(i+.09,91,.05,.1)},copied(){if(!Fn("copied",300))return;let i=Oe.currentTime+.005;es(i,.38),Fi(i+.03,84,.08,.1),Fi(i+.1,88,.08,.15),Fi(i+.17,91,.08,.2)},nav(){if(!Fn("nav",150))return;let i=Oe.currentTime+.005;es(i,.3),Hm(i+.02,"out",.6,.14)},grab(){if(Fn("grab",80)){let i=Oe.currentTime+.005;es(i,.3),eo(i+.01,79,.1,0)}},drop(){if(!Fn("drop",80))return;let i=Oe.currentTime+.005;es(i,.22),Ui("sine",150,i,.16,Ts(0,.1),.2,.003,.11).frequency.exponentialRampToValueAtTime(95,i+.1)},blink(){if(!Fn("blink",300))return;let i=Oe.currentTime+.005,e=Ts(0,.22);Ui("sine",cr(81),i,.1,e,.08,.002,.07).frequency.exponentialRampToValueAtTime(cr(76),i+.06),Ui("sine",cr(88),i+.19,.12,e,.05,.004,.08).frequency.exponentialRampToValueAtTime(cr(93),i+.25)}};function wC(i,e){let t=document.createElement("button");t.type="button",t.className="bhq-snd bhq-surface",t.setAttribute("aria-label","Sound"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.innerHTML=gC+xC;let n=document.createElement("div");n.className="bhq-snd-pop bhq-surface",n.setAttribute("role","group"),n.setAttribute("aria-label","Sound"),n.hidden=!0;let s={};for(let[a,c]of[["music","Music"],["fx","Sounds"]]){let l=document.createElement("button");l.type="button",l.className="bhq-snd-row",l.setAttribute("role","switch"),l.innerHTML=`<span>${c}</span><i class="bhq-snd-sw" aria-hidden="true"></i>`,l.addEventListener("click",()=>EC(a,!ns[a])),s[a]=l,n.append(l)}i.prepend(t),document.body.append(n);let r=()=>{let a=t.getBoundingClientRect();n.style.top=`${Math.round(a.bottom+8)}px`,n.style.right=`${Math.max(8,Math.round(innerWidth-a.right))}px`},o=a=>{a&&r(),n.hidden=!a,t.setAttribute("aria-expanded",a?"true":"false")};t.addEventListener("click",()=>o(n.hidden)),document.addEventListener("pointerdown",a=>{!n.hidden&&!n.contains(a.target)&&!t.contains(a.target)&&o(!1)},{signal:e}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!n.hidden&&o(!1)},{signal:e}),addEventListener("resize",()=>{n.hidden||r()},{signal:e}),lr={btn:t,pop:n,rows:s},Sv()}function Sv(){if(lr){lr.btn.classList.toggle("is-off",!ns.music&&!ns.fx);for(let i of["music","fx"])lr.rows[i].setAttribute("aria-checked",ns[i]?"true":"false")}}function EC(i,e){if(ns[i]=e,yC(),Sv(),!!Oe&&(i==="music"&&(e?Wm():bv()),i==="fx")){let t=Oe.currentTime;Es.gain.cancelScheduledValues(t),Es.gain.setValueAtTime(Es.gain.value,t),Es.gain.linearRampToValueAtTime(e?xv:0,t+.15),e&&setTimeout(()=>Xn.tick(),180)}}var wv={day:"13:00",evening:"18:50",night:"23:00"};function TC(i){let e=document.querySelector("#topbar .bhq-right");if(!e||e.querySelector(".bhq-theme"))return;let t=document.createElement("button");t.type="button",t.className="bhq-theme bhq-surface",t.addEventListener("click",()=>i()),e.insertBefore(t,e.firstChild),Tv(t)}function Tv(i){if(!i)return;let e=document.documentElement.dataset.theme==="dark";i.textContent=e?"Light":"Dark",i.title=e?"Switch to light mode":"Switch to dark mode",i.setAttribute("aria-pressed",e?"true":"false"),i.setAttribute("aria-label",i.title)}var Ev=class{constructor(e,t={}){this.root=e,this.opts=t,this.kind="4d",this.isTower=!0,this.loaded=!1,this.visible=!0,this.framesShown=0,this.deskOf=new Map,this.plan={desks:Array.from({length:21},(r,o)=>o)},this.pal={dark:!1},this.sessions=[],this.extras=null,this.keyOf=new Map,this.towerFloors=[],this.focusKey=null,this.pickedId=null,this.viewFloorId=typeof t.towerFloor=="string"?t.towerFloor:null,this._lastSel=null,this._readyFired=!1,this.ready=new Promise(r=>{this.markReady=r}),_y(e,{onReady:()=>{this.loaded=!0,this.canvas=uf(),this._readyFired||(this._readyFired=!0,this.markReady(!0))},onFrame:()=>{this.visible&&(this.framesShown++,this.canvas=this.canvas||uf(),this.opts.onFrame&&this.opts.onFrame(this))},onSelectBot:r=>this.selectBot(r),onHoverBot:r=>Xn.hover(r),onAssignSeat:(r,o)=>this.assignSeat(r,o),onBotContextMenu:(r,o,a)=>this.showBotMenu(r,o,a)}),this._onDocPointer=r=>{this._botMenu&&!this._botMenu.hidden&&!this._botMenu.contains(r.target)&&this.hideBotMenu()},document.addEventListener("pointerdown",this._onDocPointer,!0),jy({onSelectBot:r=>this.selectBot(r),onSelectFloor:r=>this.setTowerFloor(r),onZoom:r=>{Ry(r),Xn.zoom(r)},onOpenChat:(r,o)=>AC(o),onStartAgent:(r,o)=>RC(o),onClearErrorAgent:(r,o)=>CC(o),onShare:()=>{let r=this.captureShare();if(!r)return;let o=document.createElement("a");o.href=r.toDataURL("image/png"),o.download="office.png",o.click()}}),TC(()=>{this.opts.onTheme&&this.opts.onTheme()}),yv({slot:document.querySelector("#topbar .bhq-right")});let n=document.querySelector("#topbar .bhq-snd"),s=document.querySelector("#topbar .bhq-usage");n&&s&&s.parentElement&&s.parentElement.insertBefore(n,s),this.canvas=uf(),this.syncLight(),this.setTheme(document.documentElement.dataset.theme==="dark")}selectBot(e){let t=e||null;t!==this.pickedId&&Xn.select(!!t),this.pickedId=t,this._followPick=!!t,this.update(this.sessions)}assignSeat(e,t){let n=globalThis.WallpaperFeed;if(!n||typeof n.assignSeat!="function")return;let s=this._state&&this._state.bots&&this._state.bots[e],r=s&&s.floor||this.viewFloorId,o=(this._state&&this._state.floors||[]).find(c=>c.id===r),a=o&&Array.isArray(o.bots)?o.bots:[];n.assignSeat(e,t,a)&&(Xn.select(!0),this.update(this.sessions))}ensureBotMenu(){if(this._botMenu)return this._botMenu;if(!document.getElementById("tower-bot-menu-style")){let o=document.createElement("style");o.id="tower-bot-menu-style",o.textContent=[".tower-bot-menu{position:fixed;z-index:60;min-width:188px;padding:6px;border-radius:10px;","border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.96);color:#1c1c1a;","box-shadow:0 10px 28px rgba(0,0,0,.16);font:13px/1.3 ui-sans-serif,system-ui,sans-serif;}",".tower-bot-menu[hidden]{display:none;}",".tower-bot-menu button,.tower-bot-menu .tower-bot-subhead{display:block;width:100%;text-align:left;border:0;","background:transparent;color:inherit;font:inherit;padding:7px 10px;border-radius:7px;cursor:pointer;}",".tower-bot-menu button:hover:not(:disabled){background:rgba(0,0,0,.06);}",".tower-bot-menu button:disabled{opacity:.38;cursor:default;}",".tower-bot-menu .tower-bot-subhead{font-weight:700;cursor:default;opacity:.72;padding-bottom:2px;}",".tower-bot-menu .tower-bot-floors{display:flex;flex-direction:column;gap:1px;margin:0 0 2px;}",".tower-bot-menu .tower-bot-note{display:none;margin:4px 6px 2px;font-size:12px;opacity:.75;}",".tower-bot-menu .tower-bot-note.is-on{display:block;}",'html[data-theme="dark"] .tower-bot-menu{background:rgba(28,28,30,.96);color:#f5f5f7;border-color:rgba(255,255,255,.12);}','html[data-theme="dark"] .tower-bot-menu button:hover:not(:disabled){background:rgba(255,255,255,.08);}'].join(""),document.head.appendChild(o)}let e=document.createElement("div");e.className="tower-bot-menu",e.hidden=!0,e.setAttribute("role","menu"),e.addEventListener("contextmenu",o=>o.preventDefault()),e.addEventListener("pointerenter",o=>o.stopPropagation());let t=document.createElement("div");t.className="tower-bot-floors",t.setAttribute("role","group"),t.setAttribute("aria-label","Destinations");let n=document.createElement("div");n.className="tower-bot-subhead",n.textContent="Move to floor";let s=document.createElement("div");s.className="tower-bot-floors",s.setAttribute("role","group"),s.setAttribute("aria-label","Other floors");let r=document.createElement("div");return r.className="tower-bot-note",r.setAttribute("role","status"),e.append(t,n,s,r),document.body.appendChild(e),e._actions=t,e._floors=s,e._note=r,this._botMenu=e,e}showBotMenu(e,t,n){let s=this._state,r=s&&s.bots&&s.bots[e];if(!r)return;let o=this.ensureBotMenu();o.dataset.key=e;let a=o._actions;a.textContent="";let c=o._floors;c.textContent="",o._note.classList.remove("is-on"),o._note.textContent="";let l=r.floor==="main-floor"||String(r.floor||"").startsWith("main-floor"),h=document.createElement("button");h.type="button",h.setAttribute("role","menuitem"),h.textContent="Send to meeting room",h.disabled=!l,h.title=l?"Sit at the conference table":"Meeting table is on Main Floor",h.addEventListener("click",_=>{if(_.preventDefault(),_.stopPropagation(),h.disabled){o._note.textContent="Meeting table is on Main Floor",o._note.classList.add("is-on");return}let v=Sm(e);if(!v||!v.ok){o._note.textContent=v?.reason==="full"?"No free conference chair":"Could not seat at meeting table",o._note.classList.add("is-on");return}Xn.select(!0),this.hideBotMenu(),this.update(this.sessions)}),a.appendChild(h);let f=(s.floors||[]).slice().sort((_,v)=>(Number(_.order)||0)-(Number(v.order)||0)).filter(_=>_.id!==r.floor);f.length||(o._note.textContent="No other floors",o._note.classList.add("is-on"));for(let _ of f){let v=(_.free_desks|0)<=0,M=document.createElement("button");M.type="button",M.setAttribute("role","menuitem"),M.dataset.floor=_.id,M.textContent=_.name||_.id,M.disabled=v,M.title=v?"Floor is full":`Move to ${_.name||_.id}`,M.addEventListener("click",T=>{if(T.preventDefault(),T.stopPropagation(),M.disabled){o._note.textContent="Floor is full \u2014 pick another",o._note.classList.add("is-on");return}this.moveBotToFloor(e,_.id,o)}),c.appendChild(M)}o.hidden=!1;let d=8,p=200,x=Math.min(360,72+f.length*34+24),m=t,g=n,y=window.innerWidth||1024,w=window.innerHeight||768;m+p>y-d&&(m=Math.max(d,y-p-d)),g+x>w-d&&(g=Math.max(d,w-x-d)),o.style.left=m+"px",o.style.top=g+"px"}hideBotMenu(){this._botMenu&&(this._botMenu.hidden=!0,this._botMenu.dataset.key="",this._botMenu._note&&(this._botMenu._note.classList.remove("is-on"),this._botMenu._note.textContent=""))}moveBotToFloor(e,t,n){let s=globalThis.WallpaperFeed;if(!s||typeof s.moveToFloor!="function")return;let r=this.viewFloorId,o=s.moveToFloor(e,t,this.sessions,this.extras||{});if(!o||!o.ok){let a=o&&o.reason,c=a==="full"?"Floor is full \u2014 agent stayed put":a==="missing"?"That floor is gone":a==="same"?"Already on that floor":"Could not move agent";n&&n._note&&(n._note.textContent=c,n._note.classList.add("is-on"));return}try{typeof s.clearLounge=="function"&&s.clearLounge(e)}catch{}try{let a=globalThis.bothq?.scene?.actors?.get?.(e);a&&typeof a.markUserBusy=="function"&&a.markUserBusy(8e3)}catch{}Xn.select(!0),this.viewFloorId=r,this._followPick=!1,this.hideBotMenu(),this.update(this.sessions)}update(e){this.sessions=Array.isArray(e)?e:[];let t=globalThis.WallpaperFeed,n=t&&typeof t.towerState=="function"?t.towerState(this.sessions,this.extras||{}):{floors:[],bots:{}};this._state=n,this.towerFloors=(n.floors||[]).map(l=>({id:l.id,name:l.name})),this.keyOf=new Map;let s=n.bots||{};for(let l of this.sessions){let h=l.project||l.title||l.id||l.key,u=t&&t.botId?t.botId(h):String(h||"");s[u]||(u=Object.keys(s).find(f=>s[f].name===h)||u),s[u]&&this.keyOf.set(u,l.key)}let r=n.floors||[],o=this.viewFloorId&&r.some(l=>l.id===this.viewFloorId)?this.viewFloorId:null,a=this.pickedId&&s[this.pickedId]?this.pickedId:null;this.pickedId=a,a&&s[a].floor&&s[a].floor!==o&&this._followPick&&(o=s[a].floor),this._followPick=!1,o||(o=r.slice().sort((l,h)=>(h.bots?.length||0)-(l.bots?.length||0))[0]?.id||null),this.viewFloorId=o,this.deskOf=new Map;for(let[l,h]of this.keyOf){let u=s[l];u&&u.floor===o&&u.effective_status==="working"&&this.deskOf.set(h,(u.desk||1)-1)}let c={currentFloor:o,selectedBot:a};yy(n,c);try{sv(n,c)}catch(l){console.error(l)}this._soundStatus(n),a&&a!==this._lastSel&&(this._lastSel=a,Cy(a)),a||(this._lastSel=null),this.opts.onFloors&&this.opts.onFloors(this.towerFloors)}_selectedId(e){if(!this.focusKey)return null;for(let[t,n]of this.keyOf)if(n===this.focusKey&&(!e||e[t]))return t;return null}setTowerFloor(e){if(e&&e!==this.viewFloorId){let n=(this._state&&this._state.floors||[]).slice().sort((s,r)=>(Number(s.order)||0)-(Number(r.order)||0)).findIndex(s=>s.id===e);n>=0&&Xn.floor(n)}this.viewFloorId=e,this._lastFocus=this.focusKey,this.update(this.sessions)}_soundStatus(e){let t={},n=e&&e.bots||{};for(let[s,r]of Object.entries(n))t[s]=r.effective_status;if(this._lastStatus){let s=new Set;for(let[o,a]of Object.entries(t))this._lastStatus[o]&&this._lastStatus[o]!==a&&s.add(a);let r=["waiting_user","error","done"].find(o=>s.has(o));r&&Xn.status(r)}this._lastStatus=t}setVisible(e){this.visible=!!e,Ty(this.visible)}setTheme(e){try{Ey(!!e)}catch(t){console.error(t)}Tv(document.querySelector(".bhq-theme"))}syncLight(){let e=globalThis.OFFICE_LIGHT||"now",t=Object.prototype.hasOwnProperty.call(wv,e)?wv[e]:null;globalThis.bothq&&typeof globalThis.bothq.setTime=="function"&&globalThis.bothq.setTime(t)}captureShare(){try{return Ly()}catch(e){return console.error(e),null}}destroy(){this._onDocPointer&&document.removeEventListener("pointerdown",this._onDocPointer,!0),this.hideBotMenu(),this._botMenu&&(this._botMenu.remove(),this._botMenu=null);try{vv()}catch(e){console.error(e)}try{Nm()}catch(e){console.error(e)}try{Ay()}catch(e){console.error(e)}this.canvas=null}};function AC(i){if(!i||!/^https:\/\//i.test(i))return;let e=typeof globalThis<"u"?globalThis.WallpaperFeed:null;if(e&&typeof e.isPaperclipChatUrl=="function"&&e.isPaperclipChatUrl(i)){IC(i);return}Av(i)}function Av(i){let e=document.createElement("a");e.href=i,e.rel="noopener",e.style.display="none",document.body.append(e),e.click(),e.remove()}async function RC(i){if(i){Bm(!0);try{let e=await fetch("/api/paperclip/resume",{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify({agentId:i})}),t=await e.json().catch(()=>({}));(!e.ok||!t.ok)&&console.warn("[office] Start failed:",t&&t.error||`HTTP ${e.status}`)}catch(e){console.warn("[office] Start error:",e)}finally{Bm(!1)}}}async function CC(i){if(i){km(!0);try{let e=await fetch("/api/paperclip/clear-error",{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify({agentId:i})}),t=await e.json().catch(()=>({}));(!e.ok||!t.ok)&&console.warn("[office] Clear error failed:",t&&t.error||`HTTP ${e.status}`)}catch(e){console.warn("[office] Clear error:",e)}finally{km(!1)}}}var As=null;function IC(i){As||(As=PC());let e=As;e.frame.src=i,e.open.href=i,e.root.hidden=!1,e.root.setAttribute("aria-hidden","false");try{e.closeBtn.focus()}catch{}}function vf(){As&&(As.root.hidden=!0,As.root.setAttribute("aria-hidden","true"),As.frame.removeAttribute("src"))}function PC(){let i=document.createElement("div");i.className="bhq-pcchat",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Paperclip chat"),i.setAttribute("aria-hidden","true");let e=document.createElement("div");e.className="bhq-pcchat-sheet bhq-surface";let t=document.createElement("div");t.className="bhq-pcchat-head";let n=document.createElement("b");n.className="bhq-pcchat-title",n.textContent="Paperclip chat";let s=document.createElement("a");s.className="bhq-pcchat-open",s.textContent="Open full page",s.rel="noopener",s.addEventListener("click",c=>{c.preventDefault();let l=s.getAttribute("href");vf(),l&&Av(l)});let r=document.createElement("button");r.className="bhq-pcchat-close",r.type="button",r.setAttribute("aria-label","Close chat"),r.textContent="\xD7",r.addEventListener("click",()=>vf()),t.append(n,s,r);let o=document.createElement("p");o.className="bhq-pcchat-note",o.textContent="Uses your Paperclip board login. If the panel stays blank, open the full page.";let a=document.createElement("iframe");return a.className="bhq-pcchat-frame",a.title="Paperclip agent chat",a.setAttribute("referrerpolicy","no-referrer-when-downgrade"),a.setAttribute("allow","clipboard-read; clipboard-write"),e.append(t,o,a),i.append(e),i.addEventListener("click",c=>{c.target===i&&vf()}),document.addEventListener("keydown",c=>{c.key==="Escape"&&As&&!As.root.hidden&&vf()}),document.body.append(i),{root:i,frame:a,open:s,closeBtn:r}}export{Ev as Office4D};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

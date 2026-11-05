var a0=0,If=1,l0=2;var fr=1,c0=2,xo=3,Jn=0,cn=1,en=2,jn=0,_o=1,Pf=2,Lf=3,Ya=4,h0=5;var dr=100,u0=101,f0=102,d0=103,p0=104,m0=200,g0=201,x0=202,_0=203,Nf=204,Df=205,y0=206,v0=207,b0=208,M0=209,S0=210,w0=211,E0=212,T0=213,A0=214,xc=0,_c=1,yc=2,Zr=3,vc=4,bc=5,Mc=6,Sc=7,Kc=0,R0=1,C0=2,pi=0,$a=1,Ka=2,Za=3,pr=4,Ja=5,ja=6,Qa=7,df="attached",I0="detached",Ff=300,Rs=301,mr=302,Zc=303,Jc=304,el=306,Kn=1e3,Yn=1001,Jr=1002,qt=1003,jc=1004;var gr=1005;var Bt=1006,yo=1007;var kn=1008;var In=1009,Uf=1010,Of=1011,vo=1012,Qc=1013,mi=1014,zn=1015,Jt=1016,eh=1017,th=1018,bo=1020,Bf=35902,kf=35899,zf=1021,Hf=1022,Hn=1023,Ri=1026,Cs=1027,nh=1028,ih=1029,Is=1030,sh=1031;var rh=1033,tl=33776,nl=33777,il=33778,sl=33779,oh=35840,ah=35841,lh=35842,ch=35843,hh=36196,uh=37492,fh=37496,dh=37488,ph=37489,rl=37490,mh=37491,gh=37808,xh=37809,_h=37810,yh=37811,vh=37812,bh=37813,Mh=37814,Sh=37815,wh=37816,Eh=37817,Th=37818,Ah=37819,Rh=37820,Ch=37821,Ih=36492,Ph=36494,Lh=36495,Nh=36283,Dh=36284,ol=36285,Fh=36286;var Qs=2300,er=2301,pc=2302,pf=2303,mf=2400,gf=2401,xf=2402,P0=2500;var Vf=0,al=1,Mo=2,L0=3200;var ll=0,N0=1,is="",it="srgb",ln="srgb-linear",fa="linear",yt="srgb";var mc=7680;var D0=519,F0=512,U0=513,O0=514,Uh=515,B0=516,k0=517,Oh=518,z0=519,Gf=35044;var Wf="300 es",fi=2e3,jr=2001;function Py(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ly(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function H0(){let i=Qr("canvas");return i.style.display="block",i}var pm={},eo=null;function da(...i){let e="THREE."+i.shift();eo?eo("log",e,...i):console.log(e,...i)}function V0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=V0(i);let e="THREE."+i.shift();if(eo)eo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=V0(i);let e="THREE."+i.shift();if(eo)eo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function js(...i){let e=i.join(" ");e in pm||(pm[e]=!0,Le(...i))}function G0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var W0={[xc]:_c,[yc]:Mc,[vc]:Sc,[Zr]:bc,[_c]:xc,[Mc]:yc,[Sc]:vc,[bc]:Zr},Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mm=1234567,la=Math.PI/180,tr=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function qf(i,e){return(i%e+e)%e}function Ny(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dy(i,e,t){return i!==e?(t-i)/(e-i):0}function ca(i,e,t){return(1-t)*i+t*e}function Fy(i,e,t,n){return ca(i,e,1-Math.exp(-t*n))}function Uy(i,e=1){return e-Math.abs(qf(i,e*2)-e)}function Oy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function By(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ky(i,e){return i+Math.floor(Math.random()*(e-i+1))}function zy(i,e){return i+Math.random()*(e-i)}function Hy(i){return i*(.5-Math.random())}function Vy(i){i!==void 0&&(mm=i);let e=mm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gy(i){return i*la}function Wy(i){return i*tr}function qy(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Xy(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Yy(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $y(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var So={DEG2RAD:la,RAD2DEG:tr,generateUUID:$n,clamp:at,euclideanModulo:qf,mapLinear:Ny,inverseLerp:Dy,lerp:ca,damp:Fy,pingpong:Uy,smoothstep:Oy,smootherstep:By,randInt:ky,randFloat:zy,randFloatSpread:Hy,seededRandom:Vy,degToRad:Gy,radToDeg:Wy,isPowerOfTwo:qy,ceilPowerOfTwo:Xy,floorPowerOfTwo:Yy,setQuaternionFromProperEuler:$y,normalize:Rt,denormalize:ui},Jf=class Jf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jf.prototype.isVector2=!0;var Q=Jf,mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-a*d,e[t+2]=c*p+h*d+a*f-l*u,e[t+3]=h*p-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jf=class jf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jf.prototype.isVector3=!0;var I=jf,Bu=new I,gm=new mn,Qf=class Qf{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],w=s[4],v=s[7],S=s[2],M=s[5],A=s[8];return r[0]=o*x+a*y+l*S,r[3]=o*m+a*w+l*M,r[6]=o*g+a*v+l*A,r[1]=c*x+h*y+u*S,r[4]=c*m+h*w+u*M,r[7]=c*g+h*v+u*A,r[2]=f*x+d*y+p*S,r[5]=f*m+d*w+p*M,r[8]=f*g+d*v+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=t*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ku.makeScale(e,t)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ku.makeRotation(-e)),this}translate(e,t){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qf.prototype.isMatrix3=!0;var Qe=Qf,ku=new Qe,xm=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ky(){let i={enabled:!0,workingColorSpace:ln,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===yt&&(s.r=Zi(s.r),s.g=Zi(s.g),s.b=Zi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(s.r=Kr(s.r),s.g=Kr(s.g),s.b=Kr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===is?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ln]:{primaries:e,whitePoint:n,transfer:fa,toXYZ:xm,fromXYZ:_m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:it},outputColorSpaceConfig:{drawingBufferColorSpace:it}},[it]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:xm,fromXYZ:_m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:it}}}),i}var nt=Ky();function Zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pr,wc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pr===void 0&&(Pr=Qr("canvas")),Pr.width=e.width,Pr.height=e.height;let s=Pr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Pr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zi(t[n]/255)*255):t[n]=Zi(t[n]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Zy=0,to=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(zu(s[o].image)):r.push(zu(s[o]))}else r=zu(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Jy=0,Hu=new I,jt=class i extends Ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=Bt,o=kn,a=Hn,l=In,c=i.DEFAULT_ANISOTROPY,h=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=$n(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ff)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kn:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kn:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Ff;jt.DEFAULT_ANISOTROPY=1;var ed=class ed{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,v=(d+1)/2,S=(g+1)/2,M=(h+f)/4,A=(u+x)/4,_=(p+m)/4;return w>v&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=M/n,r=A/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=_/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=_/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ed.prototype.isVector4=!0;var _t=ed,Ec=class extends Ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new jt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new to(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zt=class extends Ec{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pa=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends jt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $c=class $c{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Lr.setFromMatrixColumn(e,0).length(),r=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f+x*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-p,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;t[0]=f-x*a,t[4]=-o*u,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=x-f*u,t[8]=p*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-x*u}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=o*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=a*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jy,e,Qy)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),gs.crossVectors(n,Dn),gs.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),gs.crossVectors(n,Dn)),gs.normalize(),Bl.crossVectors(Dn,gs),s[0]=gs.x,s[4]=Bl.x,s[8]=Dn.x,s[1]=gs.y,s[5]=Bl.y,s[9]=Dn.y,s[2]=gs.z,s[6]=Bl.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],w=n[7],v=n[11],S=n[15],M=s[0],A=s[4],_=s[8],E=s[12],R=s[1],P=s[5],L=s[9],k=s[13],D=s[2],B=s[6],X=s[10],$=s[14],re=s[3],K=s[7],te=s[11],z=s[15];return r[0]=o*M+a*R+l*D+c*re,r[4]=o*A+a*P+l*B+c*K,r[8]=o*_+a*L+l*X+c*te,r[12]=o*E+a*k+l*$+c*z,r[1]=h*M+u*R+f*D+d*re,r[5]=h*A+u*P+f*B+d*K,r[9]=h*_+u*L+f*X+d*te,r[13]=h*E+u*k+f*$+d*z,r[2]=p*M+x*R+m*D+g*re,r[6]=p*A+x*P+m*B+g*K,r[10]=p*_+x*L+m*X+g*te,r[14]=p*E+x*k+m*$+g*z,r[3]=y*M+w*R+v*D+S*re,r[7]=y*A+w*P+v*B+S*K,r[11]=y*_+w*L+v*X+S*te,r[15]=y*E+w*k+v*$+S*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],x=e[7],m=e[11],g=e[15],y=l*d-c*f,w=a*d-c*u,v=a*f-l*u,S=o*d-c*h,M=o*f-l*h,A=o*u-a*h;return t*(x*y-m*w+g*v)-n*(p*y-m*S+g*M)+s*(p*w-x*S+g*A)-r*(p*v-x*M+m*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=t*a-n*o,w=t*l-s*o,v=t*c-r*o,S=n*l-s*a,M=n*c-r*a,A=s*c-r*l,_=h*x-u*p,E=h*m-f*p,R=h*g-d*p,P=u*m-f*x,L=u*g-d*x,k=f*g-d*m,D=y*k-w*L+v*P+S*R-M*E+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return e[0]=(a*k-l*L+c*P)*B,e[1]=(s*L-n*k-r*P)*B,e[2]=(x*A-m*M+g*S)*B,e[3]=(f*M-u*A-d*S)*B,e[4]=(l*R-o*k-c*E)*B,e[5]=(t*k-s*R+r*E)*B,e[6]=(m*v-p*A-g*w)*B,e[7]=(h*A-f*v+d*w)*B,e[8]=(o*L-a*R+c*_)*B,e[9]=(n*R-t*L-r*_)*B,e[10]=(p*M-x*v+g*y)*B,e[11]=(u*v-h*M-d*y)*B,e[12]=(a*E-o*P-l*_)*B,e[13]=(t*P-n*E+s*_)*B,e[14]=(x*w-p*S-m*y)*B,e[15]=(h*S-u*w+f*y)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,w=l*h,v=l*u,S=n.x,M=n.y,A=n.z;return s[0]=(1-(x+g))*S,s[1]=(d+v)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(d-v)*M,s[5]=(1-(f+g))*M,s[6]=(m+y)*M,s[7]=0,s[8]=(p+w)*A,s[9]=(m-y)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Lr.set(s[0],s[1],s[2]).length(),a=Lr.set(s[4],s[5],s[6]).length(),l=Lr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),li.copy(this);let c=1/o,h=1/a,u=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=fi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===fi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===jr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=fi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===fi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===jr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$c.prototype.isMatrix4=!0;var $e=$c,Lr=new I,li=new $e,jy=new I(0,0,0),Qy=new I(1,1,1),gs=new I,Bl=new I,Dn=new I,ym=new $e,vm=new mn,Ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ym,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ev=0,bm=new I,Nr=new mn,Gi=new $e,kl=new I,Zo=new I,tv=new I,nv=new mn,Mm=new I(1,0,0),Sm=new I(0,1,0),wm=new I(0,0,1),Em={type:"added"},iv={type:"removed"},Dr={type:"childadded",child:null},Vu={type:"childremoved",child:null},bt=class i extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Ii,n=new mn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Qe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Sm,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,t){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Sm,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kl.copy(e):kl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Zo,kl,this.up):Gi.lookAt(kl,Zo,this.up),this.quaternion.setFromRotationMatrix(Gi),s&&(Gi.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix(Gi),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Em),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(iv),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Em),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,tv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,nv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lt=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sv={type:"move"},io=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xs={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Gu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=qf(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gu(o,r,e+1/3),this.g=Gu(o,r,e),this.b=Gu(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=it){function n(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let n=q0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Kr(e.r),this.g=Kr(e.g),this.b=Kr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return nt.workingToColorSpace(pn.copy(this),e),Math.round(at(pn.r*255,0,255))*65536+Math.round(at(pn.g*255,0,255))*256+Math.round(at(pn.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(pn.copy(this),t);let n=pn.r,s=pn.g,r=pn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=it){nt.workingToColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,s=pn.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xs),this.setHSL(xs.h+e,xs.s+t,xs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xs),e.getHSL(zl);let n=ca(xs.h,zl.h,t),s=ca(xs.s,zl.s,t),r=ca(xs.l,zl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new pe;pe.NAMES=q0;var nr=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new I,Wi=new I,Wu=new I,qi=new I,Fr=new I,Ur=new I,Tm=new I,qu=new I,Xu=new I,Yu=new I,$u=new _t,Ku=new _t,Zu=new _t,Ki=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Wi.subVectors(n,t),Wu.subVectors(e,t);let o=ci.dot(ci),a=ci.dot(Wi),l=ci.dot(Wu),c=Wi.dot(Wi),h=Wi.dot(Wu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qi.x),l.addScaledVector(o,qi.y),l.addScaledVector(a,qi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return $u.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),$u.fromBufferAttribute(e,t),Ku.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($u,r.x),o.addScaledVector(Ku,r.y),o.addScaledVector(Zu,r.z),o}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Wi.subVectors(e,t),ci.cross(Wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),ci.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fr.subVectors(s,n),Ur.subVectors(r,n),qu.subVectors(e,n);let l=Fr.dot(qu),c=Ur.dot(qu);if(l<=0&&c<=0)return t.copy(n);Xu.subVectors(e,s);let h=Fr.dot(Xu),u=Ur.dot(Xu);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Fr,o);Yu.subVectors(e,r);let d=Fr.dot(Yu),p=Ur.dot(Yu);if(p>=0&&d<=p)return t.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Ur,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Tm.subVectors(r,s),a=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Tm,a);let g=1/(m+x+f);return o=x*g,a=f*g,t.copy(n).addScaledVector(Fr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xt=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hl.copy(n.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Vl.subVectors(this.max,Jo),Or.subVectors(e.a,Jo),Br.subVectors(e.b,Jo),kr.subVectors(e.c,Jo),_s.subVectors(Br,Or),ys.subVectors(kr,Br),$s.subVectors(Or,kr);let t=[0,-_s.z,_s.y,0,-ys.z,ys.y,0,-$s.z,$s.y,_s.z,0,-_s.x,ys.z,0,-ys.x,$s.z,0,-$s.x,-_s.y,_s.x,0,-ys.y,ys.x,0,-$s.y,$s.x,0];return!Ju(t,Or,Br,kr,Vl)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,Or,Br,kr,Vl))?!1:(Gl.crossVectors(_s,ys),t=[Gl.x,Gl.y,Gl.z],Ju(t,Or,Br,kr,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xi=[new I,new I,new I,new I,new I,new I,new I,new I],hi=new I,Hl=new Xt,Or=new I,Br=new I,kr=new I,_s=new I,ys=new I,$s=new I,Jo=new I,Vl=new I,Gl=new I,Ks=new I;function Ju(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ks.fromArray(i,r);let a=s.x*Math.abs(Ks.x)+s.y*Math.abs(Ks.y)+s.z*Math.abs(Ks.z),l=e.dot(Ks),c=t.dot(Ks),h=n.dot(Ks);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Zt=new I,Wl=new Q,rv=0,Vt=class extends Ci{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gf,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ma=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ga=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ov=new Xt,jo=new I,ju=new I,Rn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ov.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);let t=jo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(jo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(ju)),this.expandByPoint(jo.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},av=0,Xn=new $e,Qu=new bt,zr=new I,Fn=new Xt,Qo=new Xt,on=new I,vt=class i extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Py(e)?ga:ma)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,n){return Xn.makeTranslation(e,t,n),this.applyMatrix4(Xn),this}scale(e,t,n){return Xn.makeScale(e,t,n),this.applyMatrix4(Xn),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Fn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Fn.min,Qo.min),Fn.expandByPoint(on),on.addVectors(Fn.max,Qo.max),Fn.expandByPoint(on)):(Fn.expandByPoint(Qo.min),Fn.expandByPoint(Qo.max))}Fn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)on.fromBufferAttribute(a,c),l&&(zr.fromBufferAttribute(e,c),on.add(zr)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;let c=new I,h=new I,u=new I,f=new Q,d=new Q,p=new Q,x=new I,m=new I;function g(_,E,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[_].add(x),a[E].add(x),a[R].add(x),l[_].add(m),l[E].add(m),l[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,E=y.length;_<E;++_){let R=y[_],P=R.start,L=R.count;for(let k=P,D=P+L;k<D;k+=3)g(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let w=new I,v=new I,S=new I,M=new I;function A(_){S.fromBufferAttribute(s,_),M.copy(S);let E=a[_];w.copy(E),w.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(M,E);let P=v.dot(l[_])<0?-1:1;o.setXYZW(_,w.x,w.y,w.z,P)}for(let _=0,E=y.length;_<E;++_){let R=y[_],P=R.start,L=R.count;for(let k=P,D=P+L;k<D;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Vt(f,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ir=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gf,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},wn=new I,Ms=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){da("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){da("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ef=new I,lv=new I,cv=new Qe,Un=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ef.subVectors(n,t).cross(lv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ef),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||cv.getNormalMatrix(e),s=this.coplanarPoint(ef).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},hv=0,gn=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=_o,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Df,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mc,this.stencilZFail=mc,this.stencilZPass=mc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Un().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Q().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},so=class extends gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hr,ea=new I,Vr=new I,Gr=new I,Wr=new Q,ta=new Q,X0=new $e,ql=new I,na=new I,Xl=new I,Am=new Q,tf=new Q,Rm=new Q,xa=class extends bt{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ir(t,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new Ms(n,3,0,!1)),Hr.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),X0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Gr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Yl(ql.set(-.5,-.5,0),Gr,o,Vr,s,r),Yl(na.set(.5,-.5,0),Gr,o,Vr,s,r),Yl(Xl.set(.5,.5,0),Gr,o,Vr,s,r),Am.set(0,0),tf.set(1,0),Rm.set(1,1);let a=e.ray.intersectTriangle(ql,na,Xl,!1,ea);if(a===null&&(Yl(na.set(-.5,.5,0),Gr,o,Vr,s,r),tf.set(0,1),a=e.ray.intersectTriangle(ql,Xl,na,!1,ea),a===null))return;let l=e.ray.origin.distanceTo(ea);l<e.near||l>e.far||t.push({distance:l,point:ea.clone(),uv:Ki.getInterpolation(ea,ql,na,Xl,Am,tf,Rm,new Q),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Yl(i,e,t,n,s,r){Wr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ta.x=r*Wr.x-s*Wr.y,ta.y=s*Wr.x+r*Wr.y):ta.copy(Wr),i.copy(e),i.x+=ta.x,i.y+=ta.y,i.applyMatrix4(X0)}var Yi=new I,nf=new I,$l=new I,Kl=new I,Ss=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){nf.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),Kl.copy(this.origin).sub(nf);let r=e.distanceTo(t)*.5,o=-this.direction.dot($l),a=Kl.dot(this.direction),l=-Kl.dot($l),c=Kl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(nf).addScaledVector($l,f),d}intersectSphere(e,t){if(e.radius<0)return null;Yi.subVectors(e.center,this.origin);let n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,x=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(h),A,_,E,R,P,L,k,D,B,X,$,re;if(v>=S&&v>=M?(E=l,L=u,B=p,re=g,l>=0?(A=c,_=h,R=f,P=d,k=x,D=m,X=y,$=w):(A=h,_=c,R=d,P=f,k=m,D=x,X=w,$=y)):S>=M?(E=c,L=f,B=x,re=y,c>=0?(A=h,_=l,R=d,P=u,k=m,D=p,X=w,$=g):(A=l,_=h,R=u,P=d,k=p,D=m,X=g,$=w)):(E=h,L=d,B=m,re=w,h>=0?(A=l,_=c,R=u,P=f,k=p,D=x,X=g,$=y):(A=c,_=l,R=f,P=u,k=x,D=p,X=y,$=g)),E===0)return null;let K=A/E,te=_/E,z=1/E,oe=R-K*L,le=P-te*L,Ue=k-K*B,Oe=D-te*B,je=X-K*re,Z=$-te*re,ee=je*Oe-Z*Ue,de=oe*Z-le*je,Fe=Ue*le-Oe*oe;if(s){if(ee<0||de<0||Fe<0)return null}else if((ee<0||de<0||Fe<0)&&(ee>0||de>0||Fe>0))return null;let Ee=ee+de+Fe;if(Ee===0)return null;let Ke=z*(ee*L+de*B+Fe*re);return(Ee>0?Ke<0:Ke>0)?null:this.at(Ke/Ee,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class extends gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Cm=new $e,Zs=new Ss,Zl=new Rn,Im=new I,Jl=new I,jl=new I,Ql=new I,sf=new I,ec=new I,Pm=new I,tc=new I,ze=class extends bt{constructor(e=new vt,t=new Mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ec.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(sf.fromBufferAttribute(u,e),o?ec.addScaledVector(sf,h):ec.addScaledVector(sf.sub(t),h))}t.add(ec)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(r),Zs.copy(e.ray).recast(e.near),!(Zl.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Zl,Im)===null||Zs.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Cm.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Cm),!(n.boundingBox!==null&&Zs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=w;v<S;v+=3){let M=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);s=nc(this,g,e,n,c,h,u,M,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=nc(this,o,e,n,c,h,u,y,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=w;v<S;v+=3){let M=v,A=v+1,_=v+2;s=nc(this,g,e,n,c,h,u,M,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=m,w=m+1,v=m+2;s=nc(this,o,e,n,c,h,u,y,w,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function uv(i,e,t,n,s,r,o,a){let l;if(e.side===cn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;tc.copy(a),tc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(tc);return c<t.near||c>t.far?null:{distance:c,point:tc.clone(),object:i}}function nc(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Jl),i.getVertexPosition(l,jl),i.getVertexPosition(c,Ql);let h=uv(i,e,t,n,Jl,jl,Ql,Pm);if(h){let u=new I;Ki.getBarycoord(Pm,Jl,jl,Ql,u),s&&(h.uv=Ki.getInterpolatedAttribute(s,a,l,c,u,new Q)),r&&(h.uv1=Ki.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=Ki.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Ki.getNormal(Jl,jl,Ql,f.normal),h.face=f,h.barycoord=u}return h}var ia=new _t,Lm=new _t,Nm=new _t,fv=new _t,Dm=new $e,ic=new I,rf=new Rn,Fm=new $e,of=new Ss,_a=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=df,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ic),this.boundingBox.expandByPoint(ic)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Rn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ic),this.boundingSphere.expandByPoint(ic)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rf.copy(this.boundingSphere),rf.applyMatrix4(s),e.ray.intersectsSphere(rf)!==!1&&(Fm.copy(s).invert(),of.copy(e.ray).applyMatrix4(Fm),!(this.boundingBox!==null&&of.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,of)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===I0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Lm.fromBufferAttribute(s.attributes.skinIndex,e),Nm.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(ia.copy(t),t.set(0,0,0,0)):(ia.set(...t,1),t.set(0,0,0)),ia.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Nm.getComponent(r);if(o!==0){let a=Lm.getComponent(r);Dm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fv.copy(ia).applyMatrix4(Dm),o)}}return t.isVector4&&(t.w=ia.w),t.applyMatrix4(this.bindMatrixInverse)}},ro=class extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}},oo=class extends jt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,h=qt,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Um=new $e,dv=new $e,ya=class i{constructor(e=[],t=[]){this.uuid=$n(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:dv;Um.multiplyMatrices(a,t[r]),Um.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new oo(t,e,e,Hn,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Le("Skeleton: No bone found with UUID:",r),o=new ro),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ji=class extends Vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qr=new $e,Om=new $e,sc=[],Bm=new Xt,pv=new $e,sa=new ze,ra=new Rn,sr=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,pv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),Bm.copy(e.boundingBox).applyMatrix4(qr),this.boundingBox.union(Bm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qr),ra.copy(e.boundingSphere).applyMatrix4(qr),this.boundingSphere.union(ra)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(n),e.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qr),Om.multiplyMatrices(n,qr),sa.matrixWorld=Om,sa.raycast(e,sc);for(let o=0,a=sc.length;o<a;o++){let l=sc[o];l.instanceId=r,l.object=this,t.push(l)}sc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oo(new Float32Array(s*this.count),s,this.count,nh,zn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Js=new Rn,mv=new Q(.5,.5),rc=new I,ao=class{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,o=new Un){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],w=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,g-p,S-y).normalize(),s[1].setComponents(c+o,d+h,g+p,S+y).normalize(),s[2].setComponents(c+a,d+u,g+x,S+w).normalize(),s[3].setComponents(c-a,d-u,g-x,S-w).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,g-m,S-v).normalize();else if(s[4].setComponents(c-l,d-f,g-m,S-v).normalize(),t===fi)s[5].setComponents(c+l,d+f,g+m,S+v).normalize();else if(t===jr)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){Js.center.set(0,0,0);let t=mv.distanceTo(e.center);return Js.radius=.7071067811865476+t,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(rc.x=s.normal.x>0?e.max.x:e.min.x,rc.y=s.normal.y>0?e.max.y:e.min.y,rc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lo=class extends gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ac=new I,Rc=new I,km=new $e,oa=new Ss,oc=new Rn,af=new I,zm=new I,rr=class extends bt{constructor(e=new vt,t=new lo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ac.fromBufferAttribute(t,s-1),Rc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ac.distanceTo(Rc);e.setAttribute("lineDistance",new Je(n,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(s),oc.radius+=r,e.ray.intersectsSphere(oc)===!1)return;km.copy(s).invert(),oa.copy(e.ray).applyMatrix4(km);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),w=ac(this,e,oa,l,g,y,x);w&&t.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=ac(this,e,oa,l,x,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=ac(this,e,oa,l,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){let x=ac(this,e,oa,l,p-1,d,p-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ac(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Ac.fromBufferAttribute(a,s),Rc.fromBufferAttribute(a,r),t.distanceSqToSegment(Ac,Rc,af,zm)>n)return;af.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(af);if(!(c<e.near||c>e.far))return{distance:c,point:zm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Hm=new I,Vm=new I,va=class extends rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hm.fromBufferAttribute(t,s),Vm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hm.distanceTo(Vm);e.setAttribute("lineDistance",new Je(n,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ba=class extends rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},co=class extends gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gm=new $e,_f=new Ss,lc=new Rn,cc=new I,Ma=class extends bt{constructor(e=new vt,t=new co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(s),lc.radius+=r,e.ray.intersectsSphere(lc)===!1)return;Gm.copy(s).invert(),_f.copy(e.ray).applyMatrix4(Gm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);cc.fromBufferAttribute(u,m),Wm(cc,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)cc.fromBufferAttribute(u,p),Wm(cc,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Wm(i,e,t,n,s,r,o){let a=_f.distanceSqToPoint(i);if(a<t){let l=new I;_f.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Sa=class extends jt{constructor(e=[],t=Rs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},di=class extends jt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ws=class extends jt{constructor(e,t,n=mi,s,r,o,a=qt,l=qt,c,h=Ri,u=1){if(h!==Ri&&h!==Cs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Cc=class extends ws{constructor(e,t=mi,n=Rs,s,r,o=qt,a=qt,l,c=Ri){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wa=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xn=class i extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function p(x,m,g,y,w,v,S,M,A,_,E){let R=v/A,P=S/_,L=v/2,k=S/2,D=M/2,B=A+1,X=_+1,$=0,re=0,K=new I;for(let te=0;te<X;te++){let z=te*P-k;for(let oe=0;oe<B;oe++){let le=oe*R-L;K[x]=le*y,K[m]=z*w,K[g]=D,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=M>0?1:-1,h.push(K.x,K.y,K.z),u.push(oe/A),u.push(1-te/_),$+=1}}for(let te=0;te<_;te++)for(let z=0;z<A;z++){let oe=f+z+B*te,le=f+z+B*(te+1),Ue=f+(z+1)+B*(te+1),Oe=f+(z+1)+B*te;l.push(oe,le,Oe),l.push(le,Ue,Oe),re+=6}a.addGroup(d,re,E),d+=re,f+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ea=class i extends vt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=n*2+r,x=s+1,m=new I,g=new I;for(let y=0;y<=p;y++){let w=0,v=0,S=0,M=0;if(y<=n){let E=y/n,R=E*Math.PI/2;v=-h-e*Math.cos(R),S=e*Math.sin(R),M=-e*Math.cos(R),w=E*u}else if(y<=n+r){let E=(y-n)/r;v=-h+E*t,S=e,M=0,w=u+E*f}else{let E=(y-n-r)/n,R=E*Math.PI/2;v=h+e*Math.sin(R),S=e*Math.cos(R),M=e*Math.sin(R),w=u+f+E*u}let A=Math.max(0,Math.min(1,w/d)),_=0;y===0?_=.5/s:y===p&&(_=-.5/s);for(let E=0;E<=s;E++){let R=E/s,P=R*Math.PI*2,L=Math.sin(P),k=Math.cos(P);g.x=-S*k,g.y=v,g.z=S*L,a.push(g.x,g.y,g.z),m.set(-S*k,M,S*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+_,A)}if(y>0){let E=(y-1)*x;for(let R=0;R<s;R++){let P=E+R,L=E+R+1,k=y*x+R,D=y*x+R+1;o.push(P,L,k),o.push(L,D,k)}}}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ta=class i extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new I,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},On=class i extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(d,2));function y(){let v=new I,S=new I,M=0,A=(t-e)/n;for(let _=0;_<=r;_++){let E=[],R=_/r,P=R*(t-e)+e;for(let L=0;L<=s;L++){let k=L/s,D=k*l+a,B=Math.sin(D),X=Math.cos(D);S.x=P*B,S.y=-R*n+m,S.z=P*X,u.push(S.x,S.y,S.z),v.set(B,A,X).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-R),E.push(p++)}x.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){let R=x[E][_],P=x[E+1][_],L=x[E+1][_+1],k=x[E][_+1];(e>0||E!==0)&&(h.push(R,P,k),M+=3),(t>0||E!==r-1)&&(h.push(P,L,k),M+=3)}c.addGroup(g,M,0),g+=M}function w(v){let S=p,M=new Q,A=new I,_=0,E=v===!0?e:t,R=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let L=0;L<=s;L++){let D=L/s*l+a,B=Math.cos(D),X=Math.sin(D);A.x=E*X,A.y=m*R,A.z=E*B,u.push(A.x,A.y,A.z),f.push(0,R,0),M.x=B*.5+.5,M.y=X*.5*R+.5,d.push(M.x,M.y),p++}for(let L=0;L<s;L++){let k=S+L,D=P+L;v===!0?h.push(D,D+1,k):h.push(D+1,D,k),_+=3}c.addGroup(g,_,v===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ic=class i extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let w=new I,v=new I,S=new I;for(let M=0;M<t.length;M+=3)d(t[M+0],w),d(t[M+1],v),d(t[M+2],S),l(w,v,S,y)}function l(y,w,v,S){let M=S+1,A=[];for(let _=0;_<=M;_++){A[_]=[];let E=y.clone().lerp(v,_/M),R=w.clone().lerp(v,_/M),P=M-_;for(let L=0;L<=P;L++)L===0&&_===M?A[_][L]=E:A[_][L]=E.clone().lerp(R,L/P)}for(let _=0;_<M;_++)for(let E=0;E<2*(M-_)-1;E++){let R=Math.floor(E/2);E%2===0?(f(A[_][R+1]),f(A[_+1][R]),f(A[_][R])):(f(A[_][R+1]),f(A[_+1][R+1]),f(A[_+1][R]))}}function c(y){let w=new I;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(y),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let y=new I;for(let w=0;w<r.length;w+=3){y.x=r[w+0],y.y=r[w+1],y.z=r[w+2];let v=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(v,1-S)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let w=o[y+0],v=o[y+2],S=o[y+4],M=Math.max(w,v,S),A=Math.min(w,v,S);M>.9&&A<.1&&(w<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,w){let v=y*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function p(){let y=new I,w=new I,v=new I,S=new I,M=new Q,A=new Q,_=new Q;for(let E=0,R=0;E<r.length;E+=9,R+=6){y.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),M.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),S.copy(y).add(w).add(v).divideScalar(3);let P=m(S);x(M,R+0,y,P),x(A,R+2,w,P),x(_,R+4,v,P)}}function x(y,w,v,S){S<0&&y.x===1&&(o[w]=y.x-1),v.x===0&&v.z===0&&(o[w]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Q:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new $e;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(at(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(at(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ho=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Q){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pc=class extends ho{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xf(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var qm=new I,Xm=new I,lf=new Xf,cf=new Xf,hf=new Xf,Lc=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xm.subVectors(s[0],s[1]).add(s[0]),c=Xm);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qm.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qm),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),lf.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),cf.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),hf.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(lf.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),cf.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),hf.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(lf.calc(l),cf.calc(l),hf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ym(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function gv(i,e){let t=1-i;return t*t*e}function xv(i,e){return 2*(1-i)*i*e}function _v(i,e){return i*i*e}function ha(i,e,t,n){return gv(i,e)+xv(i,t)+_v(i,n)}function yv(i,e){let t=1-i;return t*t*t*e}function vv(i,e){let t=1-i;return 3*t*t*i*e}function bv(i,e){return 3*(1-i)*i*i*e}function Mv(i,e){return i*i*i*e}function ua(i,e,t,n,s){return yv(i,e)+vv(i,t)+bv(i,n)+Mv(i,s)}var Aa=class extends Bn{constructor(e=new Q,t=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ua(e,s.x,r.x,o.x,a.x),ua(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Nc=class extends Bn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ua(e,s.x,r.x,o.x,a.x),ua(e,s.y,r.y,o.y,a.y),ua(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends Bn{constructor(e=new Q,t=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Q){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends Bn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Bn{constructor(e=new Q,t=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Q){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ha(e,s.x,r.x,o.x),ha(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fc=class extends Bn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ha(e,s.x,r.x,o.x),ha(e,s.y,r.y,o.y),ha(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Q){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ym(a,l.x,c.x,h.x,u.x),Ym(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Q().fromArray(s))}return this}},yf=Object.freeze({__proto__:null,ArcCurve:Pc,CatmullRomCurve3:Lc,CubicBezierCurve:Aa,CubicBezierCurve3:Nc,EllipseCurve:ho,LineCurve:Ra,LineCurve3:Dc,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:Fc,SplineCurve:Ia}),Uc=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yf[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yf[s.type]().fromJSON(s))}return this}},Pa=class extends Uc{constructor(e){super(),this.type="Path",this.currentPoint=new Q,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ra(this.currentPoint.clone(),new Q(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ca(this.currentPoint.clone(),new Q(e,t),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Aa(this.currentPoint.clone(),new Q(e,t),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new ho(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Es=class extends Pa{constructor(e){super(e),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Pa().fromJSON(s))}return this}};function Sv(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Y0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Rv(i,e,r,t)),i.length>80*t){a=i[0],l=i[1];let h=a,u=l;for(let f=t;f<s;f+=t){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return La(r,o,t,a,l,c,0),o}function Y0(i,e,t,n,s){let r;if(s===kv(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=$m(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=$m(o/n|0,i[o],i[o+1],r);return r&&uo(r,r.next)&&(Da(r),r=r.next),r}function or(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(uo(t,t.next)||kt(t.prev,t,t.next)===0)){if(Da(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function La(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Nv(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Ev(i,n,s,r):wv(i)){e.push(l.i,i.i,c.i),Da(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Tv(or(i),e),La(i,e,t,n,s,r,2)):o===2&&Av(i,e,t,n,s,r):La(or(i),e,t,n,s,r,1);break}}}function wv(i){let e=i.prev,t=i,n=i.next;if(kt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&aa(s,a,r,l,o,c,p.x,p.y)&&kt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Ev(i,e,t,n){let s=i.prev,r=i,o=i.next;if(kt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),g=vf(d,p,e,t,n),y=vf(x,m,e,t,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=g&&v&&v.z<=y;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&aa(a,h,l,u,c,f,w.x,w.y)&&kt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&aa(a,h,l,u,c,f,v.x,v.y)&&kt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&aa(a,h,l,u,c,f,w.x,w.y)&&kt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&aa(a,h,l,u,c,f,v.x,v.y)&&kt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Tv(i,e){let t=i;do{let n=t.prev,s=t.next.next;!uo(n,s)&&K0(n,t,t.next,s)&&Na(n,s)&&Na(s,n)&&(e.push(n.i,t.i,s.i),Da(t),Da(t.next),t=i=s),t=t.next}while(t!==i);return or(t)}function Av(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Uv(o,a)){let l=Z0(o,a);o=or(o,o.next),l=or(l,l.next),La(o,e,t,n,s,r,0),La(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Rv(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Y0(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Fv(c))}s.sort(Cv);for(let r=0;r<s.length;r++)t=Iv(s[r],t);return t}function Cv(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Iv(i,e){let t=Pv(i,e);if(!t)return e;let n=Z0(t,i);return or(n,n.next),or(t,t.next)}function Pv(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(uo(i,t))return t;do{if(uo(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&$0(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Na(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Lv(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Lv(i,e){return kt(i.prev,i,e.prev)<0&&kt(e.next,i,i.next)<0}function Nv(i,e,t,n){let s=i;do s.z===0&&(s.z=vf(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Dv(s)}function Dv(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function vf(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Fv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function $0(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function aa(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&$0(i,e,t,n,s,r,o,a)}function Uv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ov(i,e)&&(Na(i,e)&&Na(e,i)&&Bv(i,e)&&(kt(i.prev,i,e.prev)||kt(i,e.prev,e))||uo(i,e)&&kt(i.prev,i,i.next)>0&&kt(e.prev,e,e.next)>0)}function kt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function uo(i,e){return i.x===e.x&&i.y===e.y}function K0(i,e,t,n){let s=uc(kt(i,e,t)),r=uc(kt(i,e,n)),o=uc(kt(t,n,i)),a=uc(kt(t,n,e));return!!(s!==r&&o!==a||s===0&&hc(i,t,e)||r===0&&hc(i,n,e)||o===0&&hc(t,i,n)||a===0&&hc(t,e,n))}function hc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function uc(i){return i>0?1:i<0?-1:0}function Ov(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&K0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Na(i,e){return kt(i.prev,i,i.next)<0?kt(i,e,i.next)>=0&&kt(i,i.prev,e)>=0:kt(i,e,i.prev)<0||kt(i,i.next,e)<0}function Bv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Z0(i,e){let t=bf(i.i,i.x,i.y),n=bf(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function $m(i,e,t,n){let s=bf(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function bf(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function kv(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Mf=class{static triangulate(e,t,n=2){return Sv(e,t,n)}},Ti=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Km(e),Zm(n,e);let o=e.length;t.forEach(Km);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Zm(n,t[l]);let a=Mf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Km(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zm(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Fa=class i extends vt{constructor(e=new Es([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Je(s,3)),this.setAttribute("uv",new Je(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:zv,w,v=!1,S,M,A,_;if(g){w=g.getSpacedPoints(h),v=!0,f=!1;let se=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,se),M=new I,A=new I,_=new I}f||(m=0,d=0,p=0,x=0);let E=a.extractPoints(c),R=E.shape,P=E.holes;if(!Ti.isClockWise(R)){R=R.reverse();for(let se=0,ce=P.length;se<ce;se++){let he=P[se];Ti.isClockWise(he)&&(P[se]=he.reverse())}}function k(se){let he=10000000000000001e-36,ue=se[0];for(let ge=1;ge<=se.length;ge++){let qe=ge%se.length,Ge=se[qe],Ze=Ge.x-ue.x,et=Ge.y-ue.y,F=Ze*Ze+et*et,wt=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(ue.x),Math.abs(ue.y)),ft=he*wt*wt;if(F<=ft){se.splice(qe,1),ge--;continue}ue=Ge}}k(R),P.forEach(k);let D=P.length,B=R;for(let se=0;se<D;se++){let ce=P[se];R=R.concat(ce)}function X(se,ce,he){return ce||Ye("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(ce,he)}let $=R.length;function re(se,ce,he){let ue,ge,qe,Ge=se.x-ce.x,Ze=se.y-ce.y,et=he.x-se.x,F=he.y-se.y,wt=Ge*Ge+Ze*Ze,ft=Ge*F-Ze*et;if(Math.abs(ft)>Number.EPSILON){let C=Math.sqrt(wt),b=Math.sqrt(et*et+F*F),H=ce.x-Ze/C,q=ce.y+Ge/C,J=he.x-F/b,fe=he.y+et/b,me=((J-H)*F-(fe-q)*et)/(Ge*F-Ze*et);ue=H+Ge*me-se.x,ge=q+Ze*me-se.y;let j=ue*ue+ge*ge;if(j<=2)return new Q(ue,ge);qe=Math.sqrt(j/2)}else{let C=!1;Ge>Number.EPSILON?et>Number.EPSILON&&(C=!0):Ge<-Number.EPSILON?et<-Number.EPSILON&&(C=!0):Math.sign(Ze)===Math.sign(F)&&(C=!0),C?(ue=-Ze,ge=Ge,qe=Math.sqrt(wt)):(ue=Ge,ge=Ze,qe=Math.sqrt(wt/2))}return new Q(ue/qe,ge/qe)}let K=[];for(let se=0,ce=B.length,he=ce-1,ue=se+1;se<ce;se++,he++,ue++)he===ce&&(he=0),ue===ce&&(ue=0),K[se]=re(B[se],B[he],B[ue]);let te=[],z,oe=K.concat();for(let se=0,ce=D;se<ce;se++){let he=P[se];z=[];for(let ue=0,ge=he.length,qe=ge-1,Ge=ue+1;ue<ge;ue++,qe++,Ge++)qe===ge&&(qe=0),Ge===ge&&(Ge=0),z[ue]=re(he[ue],he[qe],he[Ge]);te.push(z),oe=oe.concat(z)}let le;if(m===0)le=Ti.triangulateShape(B,P);else{let se=[],ce=[];for(let he=0;he<m;he++){let ue=he/m,ge=d*Math.cos(ue*Math.PI/2),qe=p*Math.sin(ue*Math.PI/2)+x;for(let Ge=0,Ze=B.length;Ge<Ze;Ge++){let et=X(B[Ge],K[Ge],qe);de(et.x,et.y,-ge),ue===0&&se.push(et)}for(let Ge=0,Ze=D;Ge<Ze;Ge++){let et=P[Ge];z=te[Ge];let F=[];for(let wt=0,ft=et.length;wt<ft;wt++){let C=X(et[wt],z[wt],qe);de(C.x,C.y,-ge),ue===0&&F.push(C)}ue===0&&ce.push(F)}}le=Ti.triangulateShape(se,ce)}let Ue=le.length,Oe=p+x;for(let se=0;se<$;se++){let ce=f?X(R[se],oe[se],Oe):R[se];v?(A.copy(S.normals[0]).multiplyScalar(ce.x),M.copy(S.binormals[0]).multiplyScalar(ce.y),_.copy(w[0]).add(A).add(M),de(_.x,_.y,_.z)):de(ce.x,ce.y,0)}for(let se=1;se<=h;se++)for(let ce=0;ce<$;ce++){let he=f?X(R[ce],oe[ce],Oe):R[ce];v?(A.copy(S.normals[se]).multiplyScalar(he.x),M.copy(S.binormals[se]).multiplyScalar(he.y),_.copy(w[se]).add(A).add(M),de(_.x,_.y,_.z)):de(he.x,he.y,u/h*se)}for(let se=m-1;se>=0;se--){let ce=se/m,he=d*Math.cos(ce*Math.PI/2),ue=p*Math.sin(ce*Math.PI/2)+x;for(let ge=0,qe=B.length;ge<qe;ge++){let Ge=X(B[ge],K[ge],ue);de(Ge.x,Ge.y,u+he)}for(let ge=0,qe=P.length;ge<qe;ge++){let Ge=P[ge];z=te[ge];for(let Ze=0,et=Ge.length;Ze<et;Ze++){let F=X(Ge[Ze],z[Ze],ue);v?de(F.x,F.y+w[h-1].y,w[h-1].x+he):de(F.x,F.y,u+he)}}}je(),Z();function je(){let se=s.length/3;if(f){let ce=0,he=$*ce;for(let ue=0;ue<Ue;ue++){let ge=le[ue];Fe(ge[2]+he,ge[1]+he,ge[0]+he)}ce=h+m*2,he=$*ce;for(let ue=0;ue<Ue;ue++){let ge=le[ue];Fe(ge[0]+he,ge[1]+he,ge[2]+he)}}else{for(let ce=0;ce<Ue;ce++){let he=le[ce];Fe(he[2],he[1],he[0])}for(let ce=0;ce<Ue;ce++){let he=le[ce];Fe(he[0]+$*h,he[1]+$*h,he[2]+$*h)}}n.addGroup(se,s.length/3-se,0)}function Z(){let se=s.length/3,ce=0;ee(B,ce),ce+=B.length;for(let he=0,ue=P.length;he<ue;he++){let ge=P[he];ee(ge,ce),ce+=ge.length}n.addGroup(se,s.length/3-se,1)}function ee(se,ce){let he=se.length;for(;--he>=0;){let ue=he,ge=he-1;ge<0&&(ge=se.length-1);for(let qe=0,Ge=h+m*2;qe<Ge;qe++){let Ze=$*qe,et=$*(qe+1),F=ce+ue+Ze,wt=ce+ge+Ze,ft=ce+ge+et,C=ce+ue+et;Ee(F,wt,ft,C)}}}function de(se,ce,he){l.push(se),l.push(ce),l.push(he)}function Fe(se,ce,he){Ke(se),Ke(ce),Ke(he);let ue=s.length/3,ge=y.generateTopUV(n,s,ue-3,ue-2,ue-1);At(ge[0]),At(ge[1]),At(ge[2])}function Ee(se,ce,he,ue){Ke(se),Ke(ce),Ke(ue),Ke(ce),Ke(he),Ke(ue);let ge=s.length/3,qe=y.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);At(qe[0]),At(qe[1]),At(qe[3]),At(qe[1]),At(qe[2]),At(qe[3])}function Ke(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function At(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yf[s.type]().fromJSON(s)),new i(n,e.options)}},zv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],p=e[s*3+2],x=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(f,1-p),new Q(x,1-g)]:[new Q(a,1-l),new Q(h,1-u),new Q(d,1-p),new Q(m,1-g)]}};function Hv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ua=class i extends Ic{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},fo=class i extends vt{constructor(e=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=at(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new I,f=new Q,d=new I,p=new I,x=new I,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=t;y++){let w=n+y*h*s,v=Math.sin(w),S=Math.cos(w);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*S,o.push(u.x,u.y,u.z),f.x=y/t,f.y=M/(e.length-1),a.push(f.x,f.y);let A=l[3*M+0]*v,_=l[3*M+1],E=l[3*M+0]*S;c.push(A,_,E)}}for(let y=0;y<t;y++)for(let w=0;w<e.length-1;w++){let v=w+y*e.length,S=v,M=v+e.length,A=v+e.length+1,_=v+1;r.push(S,M,_),r.push(A,_,M)}this.setIndex(r),this.setAttribute("position",new Je(o,3)),this.setAttribute("uv",new Je(a,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ht=class i extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*f-o;for(let w=0;w<c;w++){let v=w*u-r;p.push(v,-y,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,v=y+c*(g+1),S=y+1+c*(g+1),M=y+1+c*g;d.push(w,v,M),d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Oa=class i extends vt{constructor(e=new Es([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(r,3)),this.setAttribute("uv",new Je(o,2));function c(h){let u=s.length/3,f=h.extractPoints(t),d=f.shape,p=f.holes;Ti.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];Ti.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=Ti.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],w=y[0]+u,v=y[1]+u,S=y[2]+u;n.push(w,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Vv(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function Vv(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var ar=class i extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],w=g/n,v=o+w*a,S=e*Math.cos(v),M=Math.sqrt(e*e-S*S),A=0;g===0&&o===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let E=_/t,R=s+E*r;u.x=-M*Math.cos(R),u.y=S,u.z=M*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+A,1-w),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let w=h[g][y+1],v=h[g][y],S=h[g+1][y],M=h[g+1][y+1];(g!==0||o>0)&&d.push(w,v,M),(g!==n-1||l<Math.PI)&&d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new Je(p,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function xr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Jm(s))s.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Jm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=xr(i[t]);for(let s in n)e[s]=n[s]}return e}function Jm(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gv(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var wo={clone:xr,merge:_n},Wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wv,this.fragmentShader=qv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=Gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new pe().setHex(s.value);break;case"v2":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new $e().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},po=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Gt=class extends gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yt=class extends Gt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ba=class extends gn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=Kc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Oc=class extends gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bc=class extends gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function bs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Xv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function jm(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Yv(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var Pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},kc=class extends Pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mf,endingEnd:mf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gf:r=e,a=2*t-n;break;case xf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gf:o=e,l=2*n-t;break;case xf:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-d)*m+(1.5+d)*x+.5*p,v=d*m-d*x;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+y*o[c+S]+w*o[l+S]+v*o[u+S];return r}},zc=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Hc=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vc=class extends Pi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-t)/(s-t),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,y=u[g],w=u[g+1],v=e*f+p*2,S=h[v],M=h[v+1],A=Kv(n,t,y,S,s);r[p]=J0(A,x,w,M,m)}return r}};function J0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function $v(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Kv(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=J0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=$v(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=bs(t,this.TimeBufferType),this.values=bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:bs(e.times,Array),values:bs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),gc(e.settings)&&(n.settings={inTangents:bs(e.settings.inTangents,Array),outTangents:bs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break;case pf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return pc;case this.InterpolantFactoryMethodBezier:return pf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;gc(this.settings)&&(Qm(this.settings.inTangents,e),Qm(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ye("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ly(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=t[u+p];if(x!==t[f+p]||x!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,gc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qm(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Cn.prototype.ValueTypeName="";Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=er;var ji=class extends Cn{constructor(e,t,n){super(e,t,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Qs;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};ka.prototype.ValueTypeName="color";var Qi=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};Qi.prototype.ValueTypeName="number";var Gc=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},es=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Gc(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion";es.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Cn{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=Qs;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Cn{constructor(e,t,n,s){super(e,t,n,s)}};Ts.prototype.ValueTypeName="vector";var za=class{constructor(e="",t=-1,n=[],s=P0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=$n(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Jv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=Xv(l);l=jm(l,1,h),c=jm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Qi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Zv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return ka;case"quaternion":return es;case"bool":case"boolean":return ji;case"string":return ts}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Jv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Zv(i.type);if(i.times===void 0){let n=[],s=[];Yv(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),gc(i.settings)&&(t.settings={inTangents:bs(i.settings.inTangents,Float32Array),outTangents:bs(i.settings.outTangents,Float32Array)}),t}var Ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(e0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!e0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function e0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Wc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},j0=new Wc,Li=class{constructor(e){this.manager=e!==void 0?e:j0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Li.DEFAULT_MATERIAL_NAME="__DEFAULT";var $i={},Sf=class extends Error{constructor(e,t){super(e),this.response=t}},mo=class extends Li{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ai.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:n,onError:s});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=$i[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){y();function y(){u.read().then(({done:w,value:v})=>{if(w)g.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let M=0,A=h.length;M<A;M++){let _=h[M];_.onProgress&&_.onProgress(S)}g.enqueue(v),y()}},w=>{g.error(w)})}}});return new Response(m)}else throw new Sf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ai.add(`file:${e}`,c);let h=$i[e];delete $i[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=$i[e];if(h===void 0)throw this.manager.itemError(e),c;delete $i[e];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Xr=new WeakMap,qc=class extends Li{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ai.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Xr.get(o);u===void 0&&(u=[],Xr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Qr("img");function l(){h(),t&&t(this);let u=Xr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Xr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ai.remove(`image:${e}`);let f=Xr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}Xr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ai.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var lr=class extends Li{constructor(e){super(e)}load(e,t,n,s){let r=new jt,o=new qc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},cr=class extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ha=class extends cr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uf=new $e,t0=new I,n0=new I,go=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ao,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;t0.setFromMatrixPosition(e.matrixWorld),t.position.copy(t0),n0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===jr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(uf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fc=new I,dc=new mn,Ei=new I,Va=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fc,dc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,dc,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fc,dc,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fc,dc,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},vs=new I,i0=new Q,s0=new Q,an=class extends Va{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,t){return this.getViewBounds(e,i0,s0),t.subVectors(s0,i0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wf=class extends go{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},hr=class extends cr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new wf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ef=class extends go{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},ur=class extends cr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Zn=class extends Va{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tf=class extends go{constructor(){super(new Zn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Tf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ns=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ff=new WeakMap,Ga=class extends Li{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ai.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{ff.has(o)===!0?(s&&s(ff.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ff.set(l,c),Ai.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Yr=-90,$r=1,Xc=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(Yr,$r,e,t);s.layers=this.layers,this.add(s);let r=new an(Yr,$r,e,t);r.layers=this.layers,this.add(r);let o=new an(Yr,$r,e,t);o.layers=this.layers,this.add(o);let a=new an(Yr,$r,e,t);a.layers=this.layers,this.add(a);let l=new an(Yr,$r,e,t);l.layers=this.layers,this.add(l);let c=new an(Yr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Yc=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Wa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=jv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function jv(){this._document.hidden===!1&&this.reset()}var $f="\\[\\]\\.:\\/",Qv=new RegExp("["+$f+"]","g"),Kf="[^"+$f+"]",eb="[^"+$f.replace("\\.","")+"]",tb=/((?:WC+[\/:])*)/.source.replace("WC",Kf),nb=/(WCOD+)?/.source.replace("WCOD",eb),ib=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kf),sb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kf),rb=new RegExp("^"+tb+nb+ib+sb+"$"),ob=["material","materials","bones","map"],Af=class{constructor(e,t,n){let s=n||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Nt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qv,"")}static parseTrackName(e){let t=rb.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ob.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=Af;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lR=new Float32Array(1);var r0=new $e,qa=class{constructor(e,t,n=0,s=1/0){this.ray=new Ss(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new no,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return r0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(r0),this}intersectObject(e,t=!0,n=[]){return Rf(e,this,n,t),n.sort(o0),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Rf(e[s],this,n,t);return n.sort(o0),n}};function o0(i,e){return i.distance-e.distance}function Rf(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Rf(r[o],e,t,!0)}}var Xa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Le("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var td=class td{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};td.prototype.isMatrix2=!0;var Cf=td;function Zf(i,e,t,n){let s=ab(n);switch(t){case zf:return i*e;case nh:return i*e/s.components*s.byteLength;case ih:return i*e/s.components*s.byteLength;case Is:return i*e*2/s.components*s.byteLength;case sh:return i*e*2/s.components*s.byteLength;case Hf:return i*e*3/s.components*s.byteLength;case Hn:return i*e*4/s.components*s.byteLength;case rh:return i*e*4/s.components*s.byteLength;case tl:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case il:case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ah:case ch:return Math.max(i,16)*Math.max(e,8)/4;case oh:case lh:return Math.max(i,8)*Math.max(e,8)/2;case hh:case uh:case dh:case ph:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fh:case rl:case mh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _h:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Th:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ah:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ih:case Ph:case Lh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Nh:case Dh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ol:case Fh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ab(i){switch(i){case In:case Uf:return{byteLength:1,components:1};case vo:case Of:case Jt:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case mi:case Qc:case zn:return{byteLength:4,components:1};case Bf:case kf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function vg(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cb(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ub=`#ifdef USE_ALPHAHASH
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
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gb=`#ifdef USE_AOMAP
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
#endif`,xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_b=`#ifdef USE_BATCHING
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
#endif`,yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sb=`#ifdef USE_IRIDESCENCE
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
#endif`,wb=`#ifdef USE_BUMPMAP
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
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nb=`#define PI 3.141592653589793
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
} // validated`,Db=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
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
}`,jb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
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
#endif`,lM=`uniform sampler2D dfgLUT;
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
}`,cM=`
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vM=`#if defined( USE_POINTS_UV )
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
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
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
#endif`,AM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
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
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KM=`float getShadowMask() {
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
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,jM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,eS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`#include <common>
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
}`,xS=`#if DEPTH_PACKING == 3200
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
}`,_S=`#define DISTANCE
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
}`,yS=`#define DISTANCE
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
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
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
}`,SS=`uniform vec3 diffuse;
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
}`,wS=`#include <common>
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
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
}`,RS=`#define MATCAP
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
}`,CS=`#define MATCAP
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
}`,IS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,DS=`#define STANDARD
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
}`,FS=`#define STANDARD
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
}`,US=`#define TOON
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
}`,OS=`#define TOON
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
}`,BS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,HS=`uniform vec3 color;
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
}`,VS=`uniform float rotation;
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
}`,GS=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:hb,alphahash_pars_fragment:ub,alphamap_fragment:fb,alphamap_pars_fragment:db,alphatest_fragment:pb,alphatest_pars_fragment:mb,aomap_fragment:gb,aomap_pars_fragment:xb,batching_pars_vertex:_b,batching_vertex:yb,begin_vertex:vb,beginnormal_vertex:bb,bsdfs:Mb,iridescence_fragment:Sb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:Tb,clipping_planes_pars_vertex:Ab,clipping_planes_vertex:Rb,color_fragment:Cb,color_pars_fragment:Ib,color_pars_vertex:Pb,color_vertex:Lb,common:Nb,cube_uv_reflection_fragment:Db,defaultnormal_vertex:Fb,displacementmap_pars_vertex:Ub,displacementmap_vertex:Ob,emissivemap_fragment:Bb,emissivemap_pars_fragment:kb,colorspace_fragment:zb,colorspace_pars_fragment:Hb,envmap_fragment:Vb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Wb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:nM,envmap_vertex:Xb,fog_vertex:Yb,fog_pars_vertex:$b,fog_fragment:Kb,fog_pars_fragment:Zb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:jb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:sM,lights_phong_fragment:rM,lights_phong_pars_fragment:oM,lights_physical_fragment:aM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:hM,lights_fragment_end:uM,lightprobes_pars_fragment:fM,logdepthbuf_fragment:dM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:xM,map_pars_fragment:_M,map_particle_fragment:yM,map_particle_pars_fragment:vM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:MM,morphinstance_vertex:SM,morphcolor_vertex:wM,morphnormal_vertex:EM,morphtarget_pars_vertex:TM,morphtarget_vertex:AM,normal_fragment_begin:RM,normal_fragment_maps:CM,normal_pars_fragment:IM,normal_pars_vertex:PM,normal_vertex:LM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:FM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:OM,opaque_fragment:BM,packing:kM,premultiplied_alpha_fragment:zM,project_vertex:HM,dithering_fragment:VM,dithering_pars_fragment:GM,roughnessmap_fragment:WM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:YM,shadowmap_vertex:$M,shadowmask_pars_fragment:KM,skinbase_vertex:ZM,skinning_pars_vertex:JM,skinning_vertex:jM,skinnormal_vertex:QM,specularmap_fragment:eS,specularmap_pars_fragment:tS,tonemapping_fragment:nS,tonemapping_pars_fragment:iS,transmission_fragment:sS,transmission_pars_fragment:rS,uv_pars_fragment:oS,uv_pars_vertex:aS,uv_vertex:lS,worldpos_vertex:cS,background_vert:hS,background_frag:uS,backgroundCube_vert:fS,backgroundCube_frag:dS,cube_vert:pS,cube_frag:mS,depth_vert:gS,depth_frag:xS,distance_vert:_S,distance_frag:yS,equirect_vert:vS,equirect_frag:bS,linedashed_vert:MS,linedashed_frag:SS,meshbasic_vert:wS,meshbasic_frag:ES,meshlambert_vert:TS,meshlambert_frag:AS,meshmatcap_vert:RS,meshmatcap_frag:CS,meshnormal_vert:IS,meshnormal_frag:PS,meshphong_vert:LS,meshphong_frag:NS,meshphysical_vert:DS,meshphysical_frag:FS,meshtoon_vert:US,meshtoon_frag:OS,points_vert:BS,points_frag:kS,shadow_vert:zS,shadow_frag:HS,sprite_vert:VS,sprite_frag:GS},Me={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Di={basic:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new pe(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:_n([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:_n([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:_n([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new pe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:_n([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:_n([Me.points,Me.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:_n([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:_n([Me.common,Me.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:_n([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:_n([Me.sprite,Me.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:_n([Me.common,Me.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:_n([Me.lights,Me.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Di.physical={uniforms:_n([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Bh={r:0,b:0,g:0},WS=new $e,bg=new Qe;bg.set(-1,0,0,0,1,0,0,0,1);function qS(i,e,t,n,s,r){let o=new pe(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let v=y.backgroundBlurriness>0;w=e.get(w,v)}return w}function p(y){let w=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,w){let v=d(w);v&&(v.isCubeTexture||v.mapping===el)?(c===void 0&&(c=new ze(new xn(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:xr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bg),c.material.toneMapped=nt.getTransfer(v.colorSpace)!==yt,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new ze(new Ht(2,2),new Qt({name:"BackgroundMaterial",uniforms:xr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=nt.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Bh,Yf(i)),t.buffers.color.setClear(Bh.r,Bh.g,Bh.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function XS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,L,k,D,B){let X=!1,$=u(P,D,k,L);r!==$&&(r=$,c(r.object)),X=d(P,D,k,B),X&&p(P,D,k,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(P,L,k,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,L,k,D){let B=D.wireframe===!0,X=n[L.id];X===void 0&&(X={},n[L.id]=X);let $=P.isInstancedMesh===!0?P.id:0,re=X[$];re===void 0&&(re={},X[$]=re);let K=re[k.id];K===void 0&&(K={},re[k.id]=K);let te=K[B];return te===void 0&&(te=f(l()),K[B]=te),te}function f(P){let L=[],k=[],D=[];for(let B=0;B<t;B++)L[B]=0,k[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,L,k,D){let B=r.attributes,X=L.attributes,$=0,re=k.getAttributes();for(let K in re)if(re[K].location>=0){let z=B[K],oe=X[K];if(oe===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),z===void 0||z.attribute!==oe||oe&&z.data!==oe.data)return!0;$++}return r.attributesNum!==$||r.index!==D}function p(P,L,k,D){let B={},X=L.attributes,$=0,re=k.getAttributes();for(let K in re)if(re[K].location>=0){let z=X[K];z===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));let oe={};oe.attribute=z,z&&z.data&&(oe.data=z.data),B[K]=oe,$++}r.attributes=B,r.attributesNum=$,r.index=D}function x(){let P=r.newAttributes;for(let L=0,k=P.length;L<k;L++)P[L]=0}function m(P){g(P,0)}function g(P,L){let k=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;k[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),B[P]!==L&&(i.vertexAttribDivisor(P,L),B[P]=L)}function y(){let P=r.newAttributes,L=r.enabledAttributes;for(let k=0,D=L.length;k<D;k++)L[k]!==P[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function w(P,L,k,D,B,X,$){$===!0?i.vertexAttribIPointer(P,L,k,B,X):i.vertexAttribPointer(P,L,k,D,B,X)}function v(P,L,k,D){x();let B=D.attributes,X=k.getAttributes(),$=L.defaultAttributeValues;for(let re in X){let K=X[re];if(K.location>=0){let te=B[re];if(te===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),te!==void 0){let z=te.normalized,oe=te.itemSize,le=e.get(te);if(le===void 0)continue;let Ue=le.buffer,Oe=le.type,je=le.bytesPerElement,Z=Oe===i.INT||Oe===i.UNSIGNED_INT||te.gpuType===Qc;if(te.isInterleavedBufferAttribute){let ee=te.data,de=ee.stride,Fe=te.offset;if(ee.isInstancedInterleavedBuffer){for(let Ee=0;Ee<K.locationSize;Ee++)g(K.location+Ee,ee.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)m(K.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let Ee=0;Ee<K.locationSize;Ee++)w(K.location+Ee,oe/K.locationSize,Oe,z,de*je,(Fe+oe/K.locationSize*Ee)*je,Z)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<K.locationSize;ee++)g(K.location+ee,te.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<K.locationSize;ee++)m(K.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let ee=0;ee<K.locationSize;ee++)w(K.location+ee,oe/K.locationSize,Oe,z,oe*je,oe/K.locationSize*ee*je,Z)}}else if($!==void 0){let z=$[re];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(K.location,z);break;case 3:i.vertexAttrib3fv(K.location,z);break;case 4:i.vertexAttrib4fv(K.location,z);break;default:i.vertexAttrib1fv(K.location,z)}}}}y()}function S(){E();for(let P in n){let L=n[P];for(let k in L){let D=L[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let k in L){let D=L[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P.id]}function A(P){for(let L in n){let k=n[L];for(let D in k){let B=k[D];if(B[P.id]===void 0)continue;let X=B[P.id];for(let $ in X)h(X[$].object),delete X[$];delete B[P.id]}}}function _(P){for(let L in n){let k=n[L],D=P.isInstancedMesh===!0?P.id:0,B=k[D];if(B!==void 0){for(let X in B){let $=B[X];for(let re in $)h($[re].object),delete $[re];delete B[X]}delete k[D],Object.keys(k).length===0&&delete n[L]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function YS(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $S(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===Jt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==In&&A!==zn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:M}}function KS(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Un,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,w=y*4,v=g.clippingState||null;l.value=v,v=h(p,f,w,d);for(let S=0;S!==w;++S)v[S]=t[S];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=d;w!==x;++w,v+=4)o.copy(u[w]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var To=4,ZS=6,JS=20,jS=256,cl=new Zn,Q0=new pe,nd=null,id=0,sd=0,rd=!1,QS=new I,_r=new I,Ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=QS}=r;nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nd,id,sd),this._renderer.xr.enabled=rd,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===mr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nd=this._renderer.getRenderTarget(),id=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Jt,format:Hn,colorSpace:ln,depthBuffer:!1},s=eg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=e1(r)),this._blurMaterial=n1(r,e,t),this._ggxMaterial=t1(r,e,t)}return s}_compileMaterial(e){let t=new ze(new vt,e);this._renderer.compile(t,cl)}_sceneToCubeUV(e,t,n,s,r){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Q0),u.toneMapping=pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new xn,new Mt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Q0),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;Eo(s,v*S,w>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(x,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Rs||e.mapping===mr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,cl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-To?n-p+To:0),g=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,Eo(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,cl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Eo(e,m,g,3*x,2*x),s.setRenderTarget(e),s.render(a,cl)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-To?s-this._lodMax+To:0),f=4*(this._cubeSize-h);Eo(t,u,f,3*h,2*h),o.setRenderTarget(t),o.render(l,cl)}};function e1(i){let e=[],t=[],n=i,s=i-To+1+ZS;for(let r=0;r<s;r++){let o=Math.pow(2,n);e.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let g=0;g<u;g++){let y=g%3*2/3-1,w=g>2?0:-1,v=[y,w,0,y+2/3,w,0,y+2/3,w+1,0,y,w,0,y+2/3,w+1,0,y,w+1,0];p.set(v,d*f*g);for(let S=0;S<f;S++){let M=h[S*2]*2-1,A=h[S*2+1]*2-1;g===0?_r.set(1,A,M):g===1?_r.set(-M,1,-A):g===2?_r.set(-M,A,1):g===3?_r.set(-1,A,-M):g===4?_r.set(-M,-1,A):_r.set(M,A,-1),_r.toArray(x,(g*f+S)*d)}}let m=new vt;m.setAttribute("position",new Vt(p,d)),m.setAttribute("outputDirection",new Vt(x,d)),t.push(new ze(m,null)),n>To&&n--}return{lodMeshes:t,sizeLods:e}}function eg(i,e,t){let n=new zt(i,e,t);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Eo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function t1(i,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function n1(i,e,t){return new Qt({name:"SphericalGaussianBlur",defines:{SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function tg(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ng(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Vh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var zh=class extends zt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xn(5,5,5),r=new Qt({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:jn});r.uniforms.tEquirect.value=t;let o=new ze(s,r),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Bt),new Xc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}};function i1(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Zc||d===Jc)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new zh(p.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===Zc||d===Jc,x=d===Rs||d===mr;if(p||x){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Ro(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Ro(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Zc?f.mapping=Rs:d===Jc&&(f.mapping=mr),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function s1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&js("WebGLRenderer: "+n+" extension not supported."),s}}}function r1(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let w=0,v=y.length;w<v;w+=3){let S=y[w+0],M=y[w+1],A=y[w+2];f.push(S,M,M,A,A,S)}}else{let y=p.array;x=p.version;for(let w=0,v=y.length/3-1;w<v;w+=3){let S=w+0,M=w+1,A=w+2;f.push(S,M,M,A,A,S)}}let m=new(p.count>=65535?ga:ma)(f,1);m.version=x;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function o1(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),t.update(f,n,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];t.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function a1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ye("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function l1(i,e,t){let n=new WeakMap,s=new _t;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*S*4*u),A=new pa(M,v,S,u);A.type=zn,A.needsUpdate=!0;let _=w*4;for(let R=0;R<u;R++){let P=m[R],L=g[R],k=y[R],D=v*S*4*R;for(let B=0;B<P.count;B++){let X=B*_;d===!0&&(s.fromBufferAttribute(P,B),M[D+X+0]=s.x,M[D+X+1]=s.y,M[D+X+2]=s.z,M[D+X+3]=0),p===!0&&(s.fromBufferAttribute(L,B),M[D+X+4]=s.x,M[D+X+5]=s.y,M[D+X+6]=s.z,M[D+X+7]=0),x===!0&&(s.fromBufferAttribute(k,B),M[D+X+8]=s.x,M[D+X+9]=s.y,M[D+X+10]=s.z,M[D+X+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Q(v,S)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function c1(i,e,t,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var h1={[$a]:"LINEAR_TONE_MAPPING",[Ka]:"REINHARD_TONE_MAPPING",[Za]:"CINEON_TONE_MAPPING",[pr]:"ACES_FILMIC_TONE_MAPPING",[ja]:"AGX_TONE_MAPPING",[Qa]:"NEUTRAL_TONE_MAPPING",[Ja]:"CUSTOM_TONE_MAPPING"};function u1(i,e,t,n,s,r){let o=new zt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new vt;c.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Je([0,2,0,0,2,0],2));let h=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ze(c,h),f=new Zn(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,y=[],w=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<y.length;M++){let A=y[M];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){y=v,w=y.length>0&&y[0].isRenderPass===!0;let S=o.width,M=o.height;y.length>0&&a===null&&(a=new zt(S,M,{type:Jt,depthBuffer:!1,stencilBuffer:!1}),l=new zt(S,M,{type:Jt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let _=y[A];_.setSize&&_.setSize(S,M)}},this.begin=function(v,S){if(x||v.toneMapping===pi&&y.length===0)return!1;if(g=S,S!==null){let M=S.width,A=S.height;(o.width!==M||o.height!==A)&&this.setSize(M,A)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=pi,!0},this.hasRenderPass=function(){return w},this.end=function(v,S){v.toneMapping=m,x=!0;let M=o,A=a;for(let _=0;_<y.length;_++){let E=y[_];E.enabled!==!1&&(E.render(v,A,M,S),E.needsSwap!==!1&&(M=A,A=A===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},nt.getTransfer(d)===yt&&(h.defines.SRGB_TRANSFER="");let _=h1[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(u,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Mg=new jt,ld=new ws(1,1),Sg=new pa,wg=new Tc,Eg=new Sa,ig=[],sg=[],rg=new Float32Array(16),og=new Float32Array(9),ag=new Float32Array(4);function Co(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ig[s];if(r===void 0&&(r=new Float32Array(s),ig[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gh(i,e){let t=sg[e];t===void 0&&(t=new Int32Array(e),sg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function f1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function d1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2fv(this.addr,e),nn(t,e)}}function p1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;i.uniform3fv(this.addr,e),nn(t,e)}}function m1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4fv(this.addr,e),nn(t,e)}}function g1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;ag.set(n),i.uniformMatrix2fv(this.addr,!1,ag),nn(t,n)}}function x1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;og.set(n),i.uniformMatrix3fv(this.addr,!1,og),nn(t,n)}}function _1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;rg.set(n),i.uniformMatrix4fv(this.addr,!1,rg),nn(t,n)}}function y1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function v1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2iv(this.addr,e),nn(t,e)}}function b1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3iv(this.addr,e),nn(t,e)}}function M1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4iv(this.addr,e),nn(t,e)}}function S1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function w1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;i.uniform2uiv(this.addr,e),nn(t,e)}}function E1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;i.uniform3uiv(this.addr,e),nn(t,e)}}function T1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;i.uniform4uiv(this.addr,e),nn(t,e)}}function A1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ld.compareFunction=t.isReversedDepthBuffer()?Oh:Uh,r=ld):r=Mg,t.setTexture2D(e||r,s)}function R1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wg,s)}function C1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Eg,s)}function I1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sg,s)}function P1(i){switch(i){case 5126:return f1;case 35664:return d1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return x1;case 35676:return _1;case 5124:case 35670:return y1;case 35667:case 35671:return v1;case 35668:case 35672:return b1;case 35669:case 35673:return M1;case 5125:return S1;case 36294:return w1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return I1}}function L1(i,e){i.uniform1fv(this.addr,e)}function N1(i,e){let t=Co(e,this.size,2);i.uniform2fv(this.addr,t)}function D1(i,e){let t=Co(e,this.size,3);i.uniform3fv(this.addr,t)}function F1(i,e){let t=Co(e,this.size,4);i.uniform4fv(this.addr,t)}function U1(i,e){let t=Co(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function O1(i,e){let t=Co(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function B1(i,e){let t=Co(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function k1(i,e){i.uniform1iv(this.addr,e)}function z1(i,e){i.uniform2iv(this.addr,e)}function H1(i,e){i.uniform3iv(this.addr,e)}function V1(i,e){i.uniform4iv(this.addr,e)}function G1(i,e){i.uniform1uiv(this.addr,e)}function W1(i,e){i.uniform2uiv(this.addr,e)}function q1(i,e){i.uniform3uiv(this.addr,e)}function X1(i,e){i.uniform4uiv(this.addr,e)}function Y1(i,e,t){let n=this.cache,s=e.length,r=Gh(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ld:o=Mg;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function $1(i,e,t){let n=this.cache,s=e.length,r=Gh(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wg,r[o])}function K1(i,e,t){let n=this.cache,s=e.length,r=Gh(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Eg,r[o])}function Z1(i,e,t){let n=this.cache,s=e.length,r=Gh(t,s);tn(n,r)||(i.uniform1iv(this.addr,r),nn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sg,r[o])}function J1(i){switch(i){case 5126:return L1;case 35664:return N1;case 35665:return D1;case 35666:return F1;case 35674:return U1;case 35675:return O1;case 35676:return B1;case 5124:case 35670:return k1;case 35667:case 35671:return z1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return q1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return Y1;case 35679:case 36299:case 36307:return $1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Z1}}var cd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=P1(t.type)}},hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J1(t.type)}},ud=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},od=/(\w+)(\])?(\[|\.)?/g;function lg(i,e){i.seq.push(e),i.map[e.id]=e}function j1(i,e,t){let n=i.name,s=n.length;for(od.lastIndex=0;;){let r=od.exec(n),o=od.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){lg(t,c===void 0?new cd(a,i,e):new hd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ud(a),lg(t,u)),t=u}}}var Ao=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);j1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function cg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Q1=37297,ew=0;function tw(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var hg=new Qe;function nw(i){nt._getMatrix(hg,nt.workingColorSpace,i);let e=`mat3( ${hg.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case fa:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ug(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tw(i.getShaderSource(e),a)}else return r}function iw(i,e){let t=nw(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var sw={[$a]:"Linear",[Ka]:"Reinhard",[Za]:"Cineon",[pr]:"ACESFilmic",[ja]:"AgX",[Qa]:"Neutral",[Ja]:"Custom"};function rw(i,e){let t=sw[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var kh=new I;function ow(){nt.getLuminanceCoefficients(kh);let i=kh.x.toFixed(4),e=kh.y.toFixed(4),t=kh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function lw(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cw(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ul(i){return i!==""}function fg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(i){return i.replace(hw,fw)}var uw=new Map;function fw(i,e){let t=ct[e];if(t===void 0){let n=uw.get(e);if(n!==void 0)t=ct[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fd(t)}var dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(i){return i.replace(dw,pw)}function pw(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mg(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var mw={[fr]:"SHADOWMAP_TYPE_PCF",[xo]:"SHADOWMAP_TYPE_VSM"};function gw(i){return mw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xw={[Rs]:"ENVMAP_TYPE_CUBE",[mr]:"ENVMAP_TYPE_CUBE",[el]:"ENVMAP_TYPE_CUBE_UV"};function _w(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":xw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yw={[mr]:"ENVMAP_MODE_REFRACTION"};function vw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var bw={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[R0]:"ENVMAP_BLENDING_MIX",[C0]:"ENVMAP_BLENDING_ADD"};function Mw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":bw[i.combine]||"ENVMAP_BLENDING_NONE"}function Sw(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ww(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gw(t),c=_w(t),h=vw(t),u=Mw(t),f=Sw(t),d=aw(t),p=lw(r),x=s.createProgram(),m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ul).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ul).join(`
`),g.length>0&&(g+=`
`)):(m=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),g=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?ct.tonemapping_pars_fragment:"",t.toneMapping!==pi?rw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,iw("linearToOutputTexel",t.outputColorSpace),ow(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ul).join(`
`)),o=fd(o),o=fg(o,t),o=dg(o,t),a=fd(a),a=fg(a,t),a=dg(a,t),o=pg(o),a=pg(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=y+m+o,v=y+g+a,S=cg(s,s.VERTEX_SHADER,w),M=cg(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,M),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(M)||"",B=L.trim(),X=k.trim(),$=D.trim(),re=!0,K=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,M);else{let te=ug(s,S,"vertex"),z=ug(s,M,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+te+`
`+z)}else B!==""?Le("WebGLProgram: Program Info Log:",B):(X===""||$==="")&&(K=!1);K&&(P.diagnostics={runnable:re,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:g}})}s.deleteShader(S),s.deleteShader(M),_=new Ao(s,x),E=cw(s,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Q1)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ew++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=M,this}var Ew=0,dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pd(e),t.set(e,n)),n}},pd=class{constructor(e){this.id=Ew++,this.code=e,this.usedTimes=0}};function Tw(i){return i===Is||i===rl||i===ol}function Aw(i,e,t,n,s,r){let o=new no,a=new dd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,E,R,P,L,k){let D=P.fog,B=L.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,re=e.get(_.envMap||X,$),K=re&&re.mapping===el?re.image.height:null,te=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,oe=z!==void 0?z.length:0,le=0;B.morphAttributes.position!==void 0&&(le=1),B.morphAttributes.normal!==void 0&&(le=2),B.morphAttributes.color!==void 0&&(le=3);let Ue,Oe,je,Z;if(te){let Ft=Di[te];Ue=Ft.vertexShader,Oe=Ft.fragmentShader}else{Ue=_.vertexShader,Oe=_.fragmentShader;let Ft=a.getVertexShaderStage(_),Et=a.getFragmentShaderStage(_);a.update(_,Ft,Et),je=Ft.id,Z=Et.id}let ee=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),Fe=L.isInstancedMesh===!0,Ee=L.isBatchedMesh===!0,Ke=!!_.map,At=!!_.matcap,se=!!re,ce=!!_.aoMap,he=!!_.lightMap,ue=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,qe=!!_.displacementMap,Ge=!!_.emissiveMap,Ze=!!_.metalnessMap,et=!!_.roughnessMap,F=_.anisotropy>0,wt=_.clearcoat>0,ft=_.dispersion>0,C=_.retroreflectivity>0,b=_.iridescence>0,H=_.sheen>0,q=_.transmission>0,J=F&&!!_.anisotropyMap,fe=wt&&!!_.clearcoatMap,me=wt&&!!_.clearcoatNormalMap,j=wt&&!!_.clearcoatRoughnessMap,ie=b&&!!_.iridescenceMap,xe=b&&!!_.iridescenceThicknessMap,Be=H&&!!_.sheenColorMap,be=H&&!!_.sheenRoughnessMap,_e=!!_.specularMap,ke=!!_.specularColorMap,Xe=!!_.specularIntensityMap,tt=q&&!!_.transmissionMap,O=q&&!!_.thicknessMap,ye=!!_.gradientMap,ne=!!_.alphaMap,ve=_.alphaTest>0,Te=!!_.alphaHash,ae=!!_.extensions,Ve=pi;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ve=i.toneMapping);let Pe={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Ue,fragmentShader:Oe,defines:_.defines,customVertexShaderID:je,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ee,batchingColor:Ee&&L._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&L.instanceColor!==null,instancingMorph:Fe&&L.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ke,matcap:At,envMap:se,envMapMode:se&&re.mapping,envMapCubeUVHeight:K,aoMap:ce,lightMap:he,bumpMap:ue,normalMap:ge,displacementMap:qe,emissiveMap:Ge,normalMapObjectSpace:ge&&_.normalMapType===N0,normalMapTangentSpace:ge&&_.normalMapType===ll,packedNormalMap:ge&&_.normalMapType===ll&&Tw(_.normalMap.format),metalnessMap:Ze,roughnessMap:et,anisotropy:F,anisotropyMap:J,clearcoat:wt,clearcoatMap:fe,clearcoatNormalMap:me,clearcoatRoughnessMap:j,dispersion:ft,retroreflection:C,iridescence:b,iridescenceMap:ie,iridescenceThicknessMap:xe,sheen:H,sheenColorMap:Be,sheenRoughnessMap:be,specularMap:_e,specularColorMap:ke,specularIntensityMap:Xe,transmission:q,transmissionMap:tt,thicknessMap:O,gradientMap:ye,opaque:_.transparent===!1&&_.blending===_o&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:ve,alphaHash:Te,combine:_.combine,mapUv:Ke&&p(_.map.channel),aoMapUv:ce&&p(_.aoMap.channel),lightMapUv:he&&p(_.lightMap.channel),bumpMapUv:ue&&p(_.bumpMap.channel),normalMapUv:ge&&p(_.normalMap.channel),displacementMapUv:qe&&p(_.displacementMap.channel),emissiveMapUv:Ge&&p(_.emissiveMap.channel),metalnessMapUv:Ze&&p(_.metalnessMap.channel),roughnessMapUv:et&&p(_.roughnessMap.channel),anisotropyMapUv:J&&p(_.anisotropyMap.channel),clearcoatMapUv:fe&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(_.sheenRoughnessMap.channel),specularMapUv:_e&&p(_.specularMap.channel),specularColorMapUv:ke&&p(_.specularColorMap.channel),specularIntensityMapUv:Xe&&p(_.specularIntensityMap.channel),transmissionMapUv:tt&&p(_.transmissionMap.channel),thicknessMapUv:O&&p(_.thicknessMap.channel),alphaMapUv:ne&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||F),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Ke||ne),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:de,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:le,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ke&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:Ge&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===en,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ae&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&_.extensions.multiDraw===!0||Ee)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function m(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)E.push(R),E.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(E,_),y(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function w(_){let E=d[_.type],R;if(E){let P=Di[E];R=wo.clone(P.uniforms)}else R=_.uniforms;return R}function v(_,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new ww(i,E,_,s),c.push(R),h.set(E,R)),R}function S(_){if(--_.usedTimes===0){let E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function M(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:A}}function Rw(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Cw(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function gg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xg(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function l(f,d,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let w=a(f,d,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(f,d,p,x,m,g){let y=a(f,d,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(f,d){t.length>1&&t.sort(f||Cw),n.length>1&&n.sort(d||gg),s.length>1&&s.sort(d||gg)}function u(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Iw(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new xg,i.set(n,[o])):s>=r.length?(o=new xg,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Pw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new pe};break;case"SpotLight":t={position:new I,direction:new I,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":t={color:new pe,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Lw(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Nw=0;function Dw(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fw(i){let e=new Pw,t=Lw(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new $e,o=new $e;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,y=0,w=0,v=0,S=0,M=0,A=0,_=0,E=0,R=0;c.sort(Dw);for(let L=0,k=c.length;L<k;L++){let D=c[L],B=D.color,X=D.intensity,$=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Is?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*X,u+=B.g*X,f+=B.b*X;else if(D.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(D.sh.coefficients[K],X);R++}else if(D.isSunLight){let K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=re;let oe=te.getViewportCount();for(let le=0;le<oe;le++)n.sunShadowMatrix[x+le]=te.getMatrix(le),n.sunShadowCascade[x+le]=te._cascadeData[le];x+=oe,p++}n.sun[d]=K,d++}else if(D.isDirectionalLight){let K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=K,m++}else if(D.isSpotLight){let K=e.get(D);K.position.setFromMatrixPosition(D.matrixWorld),K.color.copy(B).multiplyScalar(X),K.distance=$,K.coneCos=Math.cos(D.angle),K.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),K.decay=D.decay,n.spot[y]=K;let te=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,te.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[y]=te.matrix,D.castShadow){let z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=re,A++}y++}else if(D.isRectAreaLight){let K=e.get(D);K.color.copy(B).multiplyScalar(X),K.halfWidth.set(D.width*.5,0,0),K.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=K,w++}else if(D.isPointLight){let K=e.get(D);if(K.color.copy(D.color).multiplyScalar(D.intensity),K.distance=D.distance,K.decay=D.decay,D.castShadow){let te=D.shadow,z=t.get(D);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,z.shadowCameraNear=te.camera.near,z.shadowCameraFar=te.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=re,n.pointShadowMatrix[g]=D.shadow.matrix,M++}n.point[g]=K,g++}else if(D.isHemisphereLight){let K=e.get(D);K.skyColor.copy(D.color).multiplyScalar(X),K.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[v]=K,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==_||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=d,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=_,P.numLightProbes=R,n.version=Nw++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let v=c[y];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function _g(i){let e=new Fw(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function o(f){t.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Uw(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _g(i),e.set(s,[a])):r>=o.length?(a=new _g(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
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
}`,kw=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],zw=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],yg=new $e,hl=new I,ad=new I;function Hw(i,e,t){let n=new ao,s=new Q,r=new Q,o=new _t,a=new Oc,l=new Bc,c={},h=t.maxTextureSize,u={[Jn]:cn,[cn]:Jn,[en]:en},f=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:Ow,fragmentShader:Bw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new vt;p.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ze(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fr;let g=this.type;this.render=function(M,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===c0&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=fr);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(jn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=g!==this.type;k&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=M.length;D<B;D++){let X=M[D],$=X.shadow;if($===void 0){Le("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let re=$.getFrameExtents();s.multiply(re),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/re.x),s.x=r.x*re.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/re.y),s.y=r.y*re.y,$.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=K,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===xo){if(X.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new zt(s.x,s.y,{format:Is,type:Jt,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new ws(s.x,s.y,zn),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Ri,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=qt,$.map.depthTexture.magFilter=qt}else X.isPointLight?($.map=new zh(s.x),$.map.depthTexture=new Cc(s.x,mi)):($.map=new zt(s.x,s.y),$.map.depthTexture=new ws(s.x,s.y,mi)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Ri,this.type===fr?($.map.depthTexture.compareFunction=K?Oh:Uh,$.map.depthTexture.minFilter=Bt,$.map.depthTexture.magFilter=Bt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=qt,$.map.depthTexture.magFilter=qt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let te=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,_);for(let z=0;z<te;z++){let oe=$.getCamera(z);if(X.isPointLight){let le=$.camera,Ue=$.matrix,Oe=X.distance||le.far;Oe!==le.far&&(le.far=Oe,le.updateProjectionMatrix()),hl.setFromMatrixPosition(X.matrixWorld),le.position.copy(hl),ad.copy(le.position),ad.add(kw[z]),le.up.copy(zw[z]),le.lookAt(ad),le.updateMatrixWorld(),Ue.makeTranslation(-hl.x,-hl.y,-hl.z),yg.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),$._frustum.setFromProjectionMatrix(yg,le.coordinateSystem,le.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,z),i.clear();else{z===0&&(i.setRenderTarget($.map),i.clear());let le=$.getViewport(z);o.set(r.x*le.x,r.y*le.y,r.x*le.z,r.y*le.w),L.viewport(o)}n=$.getFrustum(z),v(A,_,oe,X,this.type)}$.isPointLightShadow!==!0&&this.type===xo&&y($,_),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,P)};function y(M,A){let _=e.update(x);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new zt(s.x,s.y,{format:Is,type:Jt}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(A,null,_,f,x,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(A,null,_,d,x,null)}function w(M,A,_,E){let R=null,P=_.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=R.uuid,k=A.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let B=D[k];B===void 0&&(B=R.clone(),D[k]=B,A.addEventListener("dispose",S)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,E===xo?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=_}return R}function v(M,A,_,E,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===xo)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,M.matrixWorld);let k=e.update(M),D=M.material;if(Array.isArray(D)){let B=k.groups;for(let X=0,$=B.length;X<$;X++){let re=B[X],K=D[re.materialIndex];if(K&&K.visible){let te=w(M,K,E,R);M.onBeforeShadow(i,M,A,_,k,te,re),i.renderBufferDirect(_,null,k,te,M,re),M.onAfterShadow(i,M,A,_,k,te,re)}}}else if(D.visible){let B=w(M,D,E,R);M.onBeforeShadow(i,M,A,_,k,B,null),i.renderBufferDirect(_,null,k,B,M,null),M.onAfterShadow(i,M,A,_,k,B,null)}}let L=M.children;for(let k=0,D=L.length;k<D;k++)v(L[k],A,_,E,R)}function S(M){M.target.removeEventListener("dispose",S);for(let _ in c){let E=c[_],R=M.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Vw(i,e){function t(){let O=!1,ye=new _t,ne=null,ve=new _t(0,0,0,0);return{setMask:function(Te){ne!==Te&&!O&&(i.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){O=Te},setClear:function(Te,ae,Ve,Pe,Ft){Ft===!0&&(Te*=Pe,ae*=Pe,Ve*=Pe),ye.set(Te,ae,Ve,Pe),ve.equals(ye)===!1&&(i.clearColor(Te,ae,Ve,Pe),ve.copy(ye))},reset:function(){O=!1,ne=null,ve.set(-1,0,0,0)}}}function n(){let O=!1,ye=!1,ne=null,ve=null,Te=null;return{setReversed:function(ae){if(ye!==ae){let Ve=e.get("EXT_clip_control");ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ye=ae;let Pe=Te;Te=null,this.setClear(Pe)}},getReversed:function(){return ye},setTest:function(ae){ae?ee(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(ae){ne!==ae&&!O&&(i.depthMask(ae),ne=ae)},setFunc:function(ae){if(ye&&(ae=W0[ae]),ve!==ae){switch(ae){case xc:i.depthFunc(i.NEVER);break;case _c:i.depthFunc(i.ALWAYS);break;case yc:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case vc:i.depthFunc(i.EQUAL);break;case bc:i.depthFunc(i.GEQUAL);break;case Mc:i.depthFunc(i.GREATER);break;case Sc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ae}},setLocked:function(ae){O=ae},setClear:function(ae){Te!==ae&&(Te=ae,ye&&(ae=1-ae),i.clearDepth(ae))},reset:function(){O=!1,ne=null,ve=null,Te=null,ye=!1}}}function s(){let O=!1,ye=null,ne=null,ve=null,Te=null,ae=null,Ve=null,Pe=null,Ft=null;return{setTest:function(Et){O||(Et?ee(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(Et){ye!==Et&&!O&&(i.stencilMask(Et),ye=Et)},setFunc:function(Et,ai,Si){(ne!==Et||ve!==ai||Te!==Si)&&(i.stencilFunc(Et,ai,Si),ne=Et,ve=ai,Te=Si)},setOp:function(Et,ai,Si){(ae!==Et||Ve!==ai||Pe!==Si)&&(i.stencilOp(Et,ai,Si),ae=Et,Ve=ai,Pe=Si)},setLocked:function(Et){O=Et},setClear:function(Et){Ft!==Et&&(i.clearStencil(Et),Ft=Et)},reset:function(){O=!1,ye=null,ne=null,ve=null,Te=null,ae=null,Ve=null,Pe=null,Ft=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,v=null,S=null,M=null,A=null,_=new pe(0,0,0),E=0,R=!1,P=null,L=null,k=null,D=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,re=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(K)[1]),$=re>=1):K.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),$=re>=2);let te=null,z={},oe=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),Ue=new _t().fromArray(oe),Oe=new _t().fromArray(le);function je(O,ye,ne,ve){let Te=new Uint8Array(4),ae=i.createTexture();i.bindTexture(O,ae),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ne;Ve++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Te):i.texImage2D(ye+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Te);return ae}let Z={};Z[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(Zr),ue(!1),ge(If),ee(i.CULL_FACE),ce(jn);function ee(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function de(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Fe(O,ye){return f[O]!==ye?(i.bindFramebuffer(O,ye),f[O]=ye,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ye),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ee(O,ye){let ne=p,ve=!1;if(O){ne=d.get(ye),ne===void 0&&(ne=[],d.set(ye,ne));let Te=O.textures;if(ne.length!==Te.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ve=Te.length;ae<Ve;ae++)ne[ae]=i.COLOR_ATTACHMENT0+ae;ne.length=Te.length,ve=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ne)}function Ke(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let At={[dr]:i.FUNC_ADD,[u0]:i.FUNC_SUBTRACT,[f0]:i.FUNC_REVERSE_SUBTRACT};At[d0]=i.MIN,At[p0]=i.MAX;let se={[m0]:i.ZERO,[g0]:i.ONE,[x0]:i.SRC_COLOR,[Nf]:i.SRC_ALPHA,[S0]:i.SRC_ALPHA_SATURATE,[b0]:i.DST_COLOR,[y0]:i.DST_ALPHA,[_0]:i.ONE_MINUS_SRC_COLOR,[Df]:i.ONE_MINUS_SRC_ALPHA,[M0]:i.ONE_MINUS_DST_COLOR,[v0]:i.ONE_MINUS_DST_ALPHA,[w0]:i.CONSTANT_COLOR,[E0]:i.ONE_MINUS_CONSTANT_COLOR,[T0]:i.CONSTANT_ALPHA,[A0]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(O,ye,ne,ve,Te,ae,Ve,Pe,Ft,Et){if(O===jn){m===!0&&(de(i.BLEND),m=!1);return}if(m===!1&&(ee(i.BLEND),m=!0),O!==h0){if(O!==g||Et!==R){if((y!==dr||S!==dr)&&(i.blendEquation(i.FUNC_ADD),y=dr,S=dr),Et)switch(O){case _o:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pf:i.blendFunc(i.ONE,i.ONE);break;case Lf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",O);break}else switch(O){case _o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Lf:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ya:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",O);break}w=null,v=null,M=null,A=null,_.set(0,0,0),E=0,g=O,R=Et}return}Te=Te||ye,ae=ae||ne,Ve=Ve||ve,(ye!==y||Te!==S)&&(i.blendEquationSeparate(At[ye],At[Te]),y=ye,S=Te),(ne!==w||ve!==v||ae!==M||Ve!==A)&&(i.blendFuncSeparate(se[ne],se[ve],se[ae],se[Ve]),w=ne,v=ve,M=ae,A=Ve),(Pe.equals(_)===!1||Ft!==E)&&(i.blendColor(Pe.r,Pe.g,Pe.b,Ft),_.copy(Pe),E=Ft),g=O,R=!1}function he(O,ye){O.side===en?de(i.CULL_FACE):ee(i.CULL_FACE);let ne=O.side===cn;ye&&(ne=!ne),ue(ne),O.blending===_o&&O.transparent===!1?ce(jn):ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let ve=O.stencilWrite;a.setTest(ve),ve&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ge(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function ue(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function ge(O){O!==a0?(ee(i.CULL_FACE),O!==L&&(O===If?i.cullFace(i.BACK):O===l0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),L=O}function qe(O){O!==k&&($&&i.lineWidth(O),k=O)}function Ge(O,ye,ne){O?(ee(i.POLYGON_OFFSET_FILL),(D!==ye||B!==ne)&&(D=ye,B=ne,o.getReversed()&&(ye=-ye),i.polygonOffset(ye,ne))):de(i.POLYGON_OFFSET_FILL)}function Ze(O){O?ee(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function et(O){O===void 0&&(O=i.TEXTURE0+X-1),te!==O&&(i.activeTexture(O),te=O)}function F(O,ye,ne){ne===void 0&&(te===null?ne=i.TEXTURE0+X-1:ne=te);let ve=z[ne];ve===void 0&&(ve={type:void 0,texture:void 0},z[ne]=ve),(ve.type!==O||ve.texture!==ye)&&(te!==ne&&(i.activeTexture(ne),te=ne),i.bindTexture(O,ye||Z[O]),ve.type=O,ve.texture=ye)}function wt(){let O=z[te];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ft(){try{i.compressedTexImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function b(){try{i.texSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function fe(){try{i.texStorage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function me(){try{i.texStorage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function j(){try{i.texImage2D(...arguments)}catch(O){Ye("WebGLState:",O)}}function ie(){try{i.texImage3D(...arguments)}catch(O){Ye("WebGLState:",O)}}function xe(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function Be(O,ye){u[O]!==ye&&(i.pixelStorei(O,ye),u[O]=ye)}function be(O){Ue.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ue.copy(O))}function _e(O){Oe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Oe.copy(O))}function ke(O,ye){let ne=c.get(ye);ne===void 0&&(ne=new WeakMap,c.set(ye,ne));let ve=ne.get(O);ve===void 0&&(ve=i.getUniformBlockIndex(ye,O.name),ne.set(O,ve))}function Xe(O,ye){let ve=c.get(ye).get(O);l.get(ye)!==ve&&(i.uniformBlockBinding(ye,ve,O.__bindingPointIndex),l.set(ye,ve))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,z={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,w=null,v=null,S=null,M=null,A=null,_=new pe(0,0,0),E=0,R=!1,P=null,L=null,k=null,D=null,B=null,Ue.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ee,disable:de,bindFramebuffer:Fe,drawBuffers:Ee,useProgram:Ke,setBlending:ce,setMaterial:he,setFlipSided:ue,setCullFace:ge,setLineWidth:qe,setPolygonOffset:Ge,setScissorTest:Ze,activeTexture:et,bindTexture:F,unbindTexture:wt,compressedTexImage2D:ft,compressedTexImage3D:C,texImage2D:j,texImage3D:ie,pixelStorei:Be,getParameter:xe,updateUBOMapping:ke,uniformBlockBinding:Xe,texStorage2D:fe,texStorage3D:me,texSubImage2D:b,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:be,viewport:_e,reset:tt}}function Gw(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,b){return p?new OffscreenCanvas(C,b):Qr("canvas")}function m(C,b,H){let q=1,J=ft(C);if((J.width>H||J.height>H)&&(q=H/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let fe=Math.floor(q*J.width),me=Math.floor(q*J.height);f===void 0&&(f=x(fe,me));let j=b?x(fe,me):f;return j.width=fe,j.height=me,j.getContext("2d").drawImage(C,0,0,fe,me),Le("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+fe+"x"+me+")."),j}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,b,H,q,J,fe=!1){if(C!==null){if(i[C]!==void 0)return i[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let me;q&&(me=e.get("EXT_texture_norm16"),me||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8),H===i.UNSIGNED_SHORT&&me&&(j=me.R16_EXT),H===i.SHORT&&me&&(j=me.R16_SNORM_EXT)),b===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),b===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8),H===i.UNSIGNED_SHORT&&me&&(j=me.RG16_EXT),H===i.SHORT&&me&&(j=me.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),b===i.RGB&&(H===i.UNSIGNED_SHORT&&me&&(j=me.RGB16_EXT),H===i.SHORT&&me&&(j=me.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),b===i.RGBA){let ie=fe?fa:nt.getTransfer(J);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=ie===yt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&me&&(j=me.RGBA16_EXT),H===i.SHORT&&me&&(j=me.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(C,b){let H;return C?b===null||b===mi||b===bo?H=i.DEPTH24_STENCIL8:b===zn?H=i.DEPTH32F_STENCIL8:b===vo&&(H=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===mi||b===bo?H=i.DEPTH_COMPONENT24:b===zn?H=i.DEPTH_COMPONENT32F:b===vo&&(H=i.DEPTH_COMPONENT16),H}function M(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==Bt?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function A(C){let b=C.target;b.removeEventListener("dispose",A),E(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&u.delete(b)}function _(C){let b=C.target;b.removeEventListener("dispose",_),P(b)}function E(C){let b=n.get(C);if(b.__webglInit===void 0)return;let H=C.source,q=d.get(H);if(q){let J=q[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(q).length===0&&d.delete(H)}n.remove(C)}function R(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let H=C.source,q=d.get(H);delete q[b.__cacheKey],o.memory.textures--}function P(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(b.__webglFramebuffer[q]))for(let J=0;J<b.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(b.__webglFramebuffer[q][J]);else i.deleteFramebuffer(b.__webglFramebuffer[q]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[q])}else{if(Array.isArray(b.__webglFramebuffer))for(let q=0;q<b.__webglFramebuffer.length;q++)i.deleteFramebuffer(b.__webglFramebuffer[q]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let q=0;q<b.__webglColorRenderbuffer.length;q++)b.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[q]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=C.textures;for(let q=0,J=H.length;q<J;q++){let fe=n.get(H[q]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(C)}let L=0;function k(){L=0}function D(){return L}function B(C){L=C}function X(){let C=L;return C>=s.maxTextures&&Le("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function $(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function re(C,b){let H=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let q=C.image;if(q===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{de(H,C,b);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+b)}function K(C,b){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){de(H,C,b);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+b)}function te(C,b){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){de(H,C,b);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+b)}function z(C,b){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Fe(H,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+b)}let oe={[Kn]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},le={[qt]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[Bt]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[kn]:i.LINEAR_MIPMAP_LINEAR},Ue={[F0]:i.NEVER,[z0]:i.ALWAYS,[U0]:i.LESS,[Uh]:i.LEQUAL,[O0]:i.EQUAL,[Oh]:i.GEQUAL,[B0]:i.GREATER,[k0]:i.NOTEQUAL};function Oe(C,b){if(b.type===zn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Bt||b.magFilter===yo||b.magFilter===gr||b.magFilter===kn||b.minFilter===Bt||b.minFilter===yo||b.minFilter===gr||b.minFilter===kn)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,oe[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,oe[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,oe[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ue[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===qt||b.minFilter!==gr&&b.minFilter!==kn||b.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function je(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",A));let q=b.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let fe=$(b);if(fe!==C.__cacheKey){J[fe]===void 0&&(J[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[fe].usedTimes++;let me=J[C.__cacheKey];me!==void 0&&(J[C.__cacheKey].usedTimes--,me.usedTimes===0&&R(b)),C.__cacheKey=fe,C.__webglTexture=J[fe].texture}return H}function Z(C,b,H){return Math.floor(Math.floor(C/H)/b)}function ee(C,b,H,q){let fe=C.updateRanges;if(fe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,H,q,b.data);else{fe.sort((Be,be)=>Be.start-be.start);let me=0;for(let Be=1;Be<fe.length;Be++){let be=fe[me],_e=fe[Be],ke=be.start+be.count,Xe=Z(_e.start,b.width,4),tt=Z(be.start,b.width,4);_e.start<=ke+1&&Xe===tt&&Z(_e.start+_e.count-1,b.width,4)===Xe?be.count=Math.max(be.count,_e.start+_e.count-be.start):(++me,fe[me]=_e)}fe.length=me+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Be=0,be=fe.length;Be<be;Be++){let _e=fe[Be],ke=Math.floor(_e.start/4),Xe=Math.ceil(_e.count/4),tt=ke%b.width,O=Math.floor(ke/b.width),ye=Xe,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,tt,O,ye,ne,H,q,b.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function de(C,b,H){let q=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(q=i.TEXTURE_3D);let J=je(C,b),fe=b.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+H);let me=n.get(fe);if(fe.version!==me.__version||J===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ne=nt.getPrimaries(nt.workingColorSpace),ve=b.colorSpace===is?null:nt.getPrimaries(b.colorSpace),Te=b.colorSpace===is||ne===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ie=m(b.image,!1,s.maxTextureSize);ie=wt(b,ie);let xe=r.convert(b.format,b.colorSpace),Be=r.convert(b.type),be=v(b.internalFormat,xe,Be,b.normalized,b.colorSpace,b.isVideoTexture);Oe(q,b);let _e,ke=b.mipmaps,Xe=b.isVideoTexture!==!0,tt=me.__version===void 0||J===!0,O=fe.dataReady,ye=M(b,ie);if(b.isDepthTexture)be=S(b.format===Cs,b.type),tt&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,xe,Be,null));else if(b.isDataTexture)if(ke.length>0){Xe&&tt&&t.texStorage2D(i.TEXTURE_2D,ye,be,ke[0].width,ke[0].height);for(let ne=0,ve=ke.length;ne<ve;ne++)_e=ke[ne],Xe?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Be,_e.data):t.texImage2D(i.TEXTURE_2D,ne,be,_e.width,_e.height,0,xe,Be,_e.data);b.generateMipmaps=!1}else Xe?(tt&&t.texStorage2D(i.TEXTURE_2D,ye,be,ie.width,ie.height),O&&ee(b,ie,xe,Be)):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,xe,Be,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Xe&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,ke[0].width,ke[0].height,ie.depth);for(let ne=0,ve=ke.length;ne<ve;ne++)if(_e=ke[ne],b.format!==Hn)if(xe!==null)if(Xe){if(O)if(b.layerUpdates.size>0){let Te=Zf(_e.width,_e.height,b.format,b.type);for(let ae of b.layerUpdates){let Ve=_e.data.subarray(ae*Te/_e.data.BYTES_PER_ELEMENT,(ae+1)*Te/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,ae,_e.width,_e.height,1,xe,Ve)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ie.depth,xe,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,be,_e.width,_e.height,ie.depth,0,_e.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ie.depth,xe,Be,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,be,_e.width,_e.height,ie.depth,0,xe,Be,_e.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Xe&&tt&&t.texStorage2D(i.TEXTURE_2D,ye,be,ke[0].width,ke[0].height);for(let ne=0,ve=ke.length;ne<ve;ne++)_e=ke[ne],b.format!==Hn?xe!==null?Xe?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,be,_e.width,_e.height,0,_e.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,_e.width,_e.height,xe,Be,_e.data):t.texImage2D(i.TEXTURE_2D,ne,be,_e.width,_e.height,0,xe,Be,_e.data)}else if(b.isDataArrayTexture)if(Xe){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,ie.width,ie.height,ie.depth),O)if(b.layerUpdates.size>0){let ne=Zf(ie.width,ie.height,b.format,b.type);for(let ve of b.layerUpdates){let Te=ie.data.subarray(ve*ne/ie.data.BYTES_PER_ELEMENT,(ve+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,ie.width,ie.height,1,xe,Be,Te)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,xe,Be,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,xe,Be,ie.data);else if(b.isData3DTexture)Xe?(tt&&t.texStorage3D(i.TEXTURE_3D,ye,be,ie.width,ie.height,ie.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,xe,Be,ie.data)):t.texImage3D(i.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,xe,Be,ie.data);else if(b.isFramebufferTexture){if(tt)if(Xe)t.texStorage2D(i.TEXTURE_2D,ye,be,ie.width,ie.height);else{let ne=ie.width,ve=ie.height;for(let Te=0;Te<ye;Te++)t.texImage2D(i.TEXTURE_2D,Te,be,ne,ve,0,xe,Be,null),ne>>=1,ve>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),u.add(b),ne.onpaint=ve=>{let Te=ve.changedElements;for(let ae of u)Te.includes(ae.image)&&(ae.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Te=i.RGBA,ae=i.RGBA,Ve=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Te,ae,Ve,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Xe&&tt){let ne=ft(ke[0]);t.texStorage2D(i.TEXTURE_2D,ye,be,ne.width,ne.height)}for(let ne=0,ve=ke.length;ne<ve;ne++)_e=ke[ne],Xe?O&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,xe,Be,_e):t.texImage2D(i.TEXTURE_2D,ne,be,xe,Be,_e);b.generateMipmaps=!1}else if(Xe){if(tt){let ne=ft(ie);t.texStorage2D(i.TEXTURE_2D,ye,be,ne.width,ne.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Be,ie)}else t.texImage2D(i.TEXTURE_2D,0,be,xe,Be,ie);g(b)&&y(q),me.__version=fe.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Fe(C,b,H){if(b.image.length!==6)return;let q=je(C,b),J=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let fe=n.get(J);if(J.version!==fe.__version||q===!0){t.activeTexture(i.TEXTURE0+H);let me=nt.getPrimaries(nt.workingColorSpace),j=b.colorSpace===is?null:nt.getPrimaries(b.colorSpace),ie=b.colorSpace===is||me===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let xe=b.isCompressedTexture||b.image[0].isCompressedTexture,Be=b.image[0]&&b.image[0].isDataTexture,be=[];for(let ae=0;ae<6;ae++)!xe&&!Be?be[ae]=m(b.image[ae],!0,s.maxCubemapSize):be[ae]=Be?b.image[ae].image:b.image[ae],be[ae]=wt(b,be[ae]);let _e=be[0],ke=r.convert(b.format,b.colorSpace),Xe=r.convert(b.type),tt=v(b.internalFormat,ke,Xe,b.normalized,b.colorSpace),O=b.isVideoTexture!==!0,ye=fe.__version===void 0||q===!0,ne=J.dataReady,ve=M(b,_e);Oe(i.TEXTURE_CUBE_MAP,b);let Te;if(xe){O&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,tt,_e.width,_e.height);for(let ae=0;ae<6;ae++){Te=be[ae].mipmaps;for(let Ve=0;Ve<Te.length;Ve++){let Pe=Te[Ve];b.format!==Hn?ke!==null?O?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Pe.width,Pe.height,ke,Pe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,tt,Pe.width,Pe.height,0,Pe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,0,0,Pe.width,Pe.height,ke,Xe,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve,tt,Pe.width,Pe.height,0,ke,Xe,Pe.data)}}}else{if(Te=b.mipmaps,O&&ye){Te.length>0&&ve++;let ae=ft(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,tt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Be){O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,be[ae].width,be[ae].height,ke,Xe,be[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,tt,be[ae].width,be[ae].height,0,ke,Xe,be[ae].data);for(let Ve=0;Ve<Te.length;Ve++){let Ft=Te[Ve].image[ae].image;O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,Ft.width,Ft.height,ke,Xe,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,tt,Ft.width,Ft.height,0,ke,Xe,Ft.data)}}else{O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ke,Xe,be[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,tt,ke,Xe,be[ae]);for(let Ve=0;Ve<Te.length;Ve++){let Pe=Te[Ve];O?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,0,0,ke,Xe,Pe.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ve+1,tt,ke,Xe,Pe.image[ae])}}}g(b)&&y(i.TEXTURE_CUBE_MAP),fe.__version=J.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Ee(C,b,H,q,J,fe){let me=r.convert(H.format,H.colorSpace),j=r.convert(H.type),ie=v(H.internalFormat,me,j,H.normalized,H.colorSpace),xe=n.get(b),Be=n.get(H);if(Be.__renderTarget=b,!xe.__hasExternalTextures){let be=Math.max(1,b.width>>fe),_e=Math.max(1,b.height>>fe);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,fe,ie,be,_e,b.depth,0,me,j,null):t.texImage2D(J,fe,ie,be,_e,0,me,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,Be.__webglTexture,0,Ze(b)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,Be.__webglTexture,fe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(C,b,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let q=b.depthTexture,J=q&&q.isDepthTexture?q.type:null,fe=S(b.stencilBuffer,J),me=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(b),fe,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(b),fe,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,fe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,C)}else{let q=b.textures;for(let J=0;J<q.length;J++){let fe=q[J],me=r.convert(fe.format,fe.colorSpace),j=r.convert(fe.type),ie=v(fe.internalFormat,me,j,fe.normalized,fe.colorSpace);et(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze(b),ie,b.width,b.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze(b),ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(C,b,H){let q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(b.depthTexture);if(J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,b.depthTexture);let xe=r.convert(b.depthTexture.format),Be=r.convert(b.depthTexture.type),be;b.depthTexture.format===Ri?be=i.DEPTH_COMPONENT24:b.depthTexture.format===Cs&&(be=i.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,be,b.width,b.height,0,xe,Be,null)}}else re(b.depthTexture,0);let fe=J.__webglTexture,me=Ze(b),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ie=b.depthTexture.format===Cs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ri)et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,fe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,fe,0);else if(b.depthTexture.format===Cs)et(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,j,fe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,ie,j,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){let b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),q){let J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)At(b.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?At(b.__webglFramebuffer[0],C,0):At(b.__webglFramebuffer,C,0)}else if(H){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]===void 0)b.__webglDepthbuffer[q]=i.createRenderbuffer(),Ke(b.__webglDepthbuffer[q],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,fe)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ke(b.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,fe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(C,b,H){let q=n.get(C);b!==void 0&&Ee(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&se(C)}function he(C){let b=C.texture,H=n.get(C),q=n.get(b);C.addEventListener("dispose",_);let J=C.textures,fe=C.isWebGLCubeRenderTarget===!0,me=J.length>1;if(me||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=b.version,o.memory.textures++),fe){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let ie=0;ie<b.mipmaps.length;ie++)H.__webglFramebuffer[j][ie]=i.createFramebuffer()}else H.__webglFramebuffer[j]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)H.__webglFramebuffer[j]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(me)for(let j=0,ie=J.length;j<ie;j++){let xe=n.get(J[j]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&et(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let ie=J[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let xe=r.convert(ie.format,ie.colorSpace),Be=r.convert(ie.type),be=v(ie.internalFormat,xe,Be,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),_e=Ze(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,be,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Ee(H.__webglFramebuffer[j][ie],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else Ee(H.__webglFramebuffer[j],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(b)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let j=0,ie=J.length;j<ie;j++){let xe=J[j],Be=n.get(xe),be=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Be.__webglTexture),Oe(be,xe),Ee(H.__webglFramebuffer,C,xe,i.COLOR_ATTACHMENT0+j,be,0),g(xe)&&y(be)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Oe(j,b),b.mipmaps&&b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)Ee(H.__webglFramebuffer[ie],C,b,i.COLOR_ATTACHMENT0,j,ie);else Ee(H.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,j,0);g(b)&&y(j),t.unbindTexture()}C.depthBuffer&&se(C)}function ue(C){let b=C.textures;for(let H=0,q=b.length;H<q;H++){let J=b[H];if(g(J)){let fe=w(C),me=n.get(J).__webglTexture;t.bindTexture(fe,me),y(fe),t.unbindTexture()}}}let ge=[],qe=[];function Ge(C){if(C.samples>0){if(et(C)===!1){let b=C.textures,H=C.width,q=C.height,J=i.COLOR_BUFFER_BIT,fe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=n.get(C),j=b.length>1;if(j)for(let xe=0;xe<b.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let ie=C.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let xe=0;xe<b.length;xe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let Be=n.get(b[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,J,i.NEAREST),l===!0&&(ge.length=0,qe.length=0,ge.push(i.COLOR_ATTACHMENT0+xe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ge.push(fe),qe.push(fe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let xe=0;xe<b.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,me.__webglColorRenderbuffer[xe]);let Be=n.get(b[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ze(C){return Math.min(s.maxSamples,C.samples)}function et(C){let b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(C){let b=o.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function wt(C,b){let H=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==ln&&H!==is&&(nt.getTransfer(H)===yt?(q!==Hn||J!==In)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",H)),b}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=re,this.setTexture2DArray=K,this.setTexture3D=te,this.setTextureCube=z,this.rebindTextures=ce,this.setupRenderTarget=he,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ww(i,e){function t(n,s=is){let r,o=nt.getTransfer(s);if(n===In)return i.UNSIGNED_BYTE;if(n===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===th)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uf)return i.BYTE;if(n===Of)return i.SHORT;if(n===vo)return i.UNSIGNED_SHORT;if(n===Qc)return i.INT;if(n===mi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===Jt)return i.HALF_FLOAT;if(n===zf)return i.ALPHA;if(n===Hf)return i.RGB;if(n===Hn)return i.RGBA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Cs)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===ih)return i.RED_INTEGER;if(n===Is)return i.RG;if(n===sh)return i.RG_INTEGER;if(n===rh)return i.RGBA_INTEGER;if(n===tl||n===nl||n===il||n===sl)if(o===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===tl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===tl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===il)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oh||n===ah||n===lh||n===ch)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ah)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ch)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hh||n===uh||n===fh||n===dh||n===ph||n===rl||n===mh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hh||n===uh)return o===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===dh)return r.COMPRESSED_R11_EAC;if(n===ph)return r.COMPRESSED_SIGNED_R11_EAC;if(n===rl)return r.COMPRESSED_RG11_EAC;if(n===mh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gh||n===xh||n===_h||n===yh||n===vh||n===bh||n===Mh||n===Sh||n===wh||n===Eh||n===Th||n===Ah||n===Rh||n===Ch)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_h)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Eh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Th)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ah)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rh)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ch)return o===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ih||n===Ph||n===Lh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ih)return o===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ph)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nh||n===Dh||n===ol||n===Fh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
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

}`,md=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:qw,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gd=class extends Ci{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new md,g={},y=t.getContextAttributes(),w=null,v=null,S=[],M=[],A=new Q,_=null,E=null,R=new an;R.viewport=new _t;let P=new an;P.viewport=new _t;let L=[R,P],k=new Yc,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=S[Z];return ee===void 0&&(ee=new io,S[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=S[Z];return ee===void 0&&(ee=new io,S[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=S[Z];return ee===void 0&&(ee=new io,S[Z]=ee),ee.getHandSpace()};function X(Z){let ee=M.indexOf(Z.inputSource);if(ee===-1)return;let de=S[ee];de!==void 0&&(de.update(Z.inputSource,Z.frame,c||o),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",re);for(let Z=0;Z<S.length;Z++){let ee=M[Z];ee!==null&&(M[Z]=null,S[Z].disconnect(ee))}D=null,B=null,m.reset();for(let Z in g)delete g[Z];if(e.setRenderTarget(w),d=null,f=null,u=null,s=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),E!==null){let Z=E.camera;Z.fov=E.fov,Z.zoom=E.zoom,Z.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",re),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Fe=null,Ee=null;y.depth&&(Ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=y.stencil?Cs:Ri,Fe=y.stencil?bo:mi);let Ke={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new zt(f.textureWidth,f.textureHeight,{format:Hn,type:In,depthTexture:new ws(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let de={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new zt(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Z){for(let ee=0;ee<Z.removed.length;ee++){let de=Z.removed[ee],Fe=M.indexOf(de);Fe>=0&&(M[Fe]=null,S[Fe].disconnect(de))}for(let ee=0;ee<Z.added.length;ee++){let de=Z.added[ee],Fe=M.indexOf(de);if(Fe===-1){for(let Ke=0;Ke<S.length;Ke++)if(Ke>=M.length){M.push(de),Fe=Ke;break}else if(M[Ke]===null){M[Ke]=de,Fe=Ke;break}if(Fe===-1)break}let Ee=S[Fe];Ee&&Ee.connect(de)}}let K=new I,te=new I;function z(Z,ee,de){K.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);let Fe=K.distanceTo(te),Ee=ee.projectionMatrix.elements,Ke=de.projectionMatrix.elements,At=Ee[14]/(Ee[10]-1),se=Ee[14]/(Ee[10]+1),ce=(Ee[9]+1)/Ee[5],he=(Ee[9]-1)/Ee[5],ue=(Ee[8]-1)/Ee[0],ge=(Ke[8]+1)/Ke[0],qe=At*ue,Ge=At*ge,Ze=Fe/(-ue+ge),et=Ze*-ue;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(et),Z.translateZ(Ze),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ee[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let F=At+Ze,wt=se+Ze,ft=qe-et,C=Ge+(Fe-et),b=ce*se/wt*F,H=he*se/wt*F;Z.projectionMatrix.makePerspective(ft,C,b,H,F,wt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ee=Z.near,de=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(de=m.depthFar)),k.near=P.near=R.near=ee,k.far=P.far=R.far=de,(D!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,B=k.far),k.layers.mask=Z.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Fe=Z.parent,Ee=k.cameras;oe(k,Fe);for(let Ke=0;Ke<Ee.length;Ke++)oe(Ee[Ke],Fe);Ee.length===2?z(k,R,P):k.projectionMatrix.copy(R.projectionMatrix),E===null&&Z.isPerspectiveCamera&&(E={camera:Z,fov:Z.fov,zoom:Z.zoom}),le(Z,k,Fe)};function le(Z,ee,de){de===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=tr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(Z){return g[Z]};let Ue=null;function Oe(Z,ee){if(h=ee.getViewerPose(c||o),p=ee,h!==null){let de=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Fe=!1;de.length!==k.cameras.length&&(k.cameras.length=0,Fe=!0);for(let se=0;se<de.length;se++){let ce=de[se],he=null;if(d!==null)he=d.getViewport(ce);else{let ge=u.getViewSubImage(f,ce);he=ge.viewport,se===0&&(e.setRenderTargetTextures(v,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(v))}let ue=L[se];ue===void 0&&(ue=new an,ue.layers.enable(se),ue.viewport=new _t,L[se]=ue),ue.matrix.fromArray(ce.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ce.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(he.x,he.y,he.width,he.height),se===0&&(k.matrix.copy(ue.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Fe===!0&&k.cameras.push(ue)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let se=u.getDepthInformation(de[0]);se&&se.isValid&&se.texture&&m.init(se,s.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let se=0;se<de.length;se++){let ce=de[se].camera;if(ce){let he=g[ce];he||(he=new wa,g[ce]=he);let ue=u.getCameraImage(ce);he.sourceTexture=ue}}}}for(let de=0;de<S.length;de++){let Fe=M[de],Ee=S[de];Fe!==null&&Ee!==void 0&&Ee.update(Fe,ee,c||o)}Ue&&Ue(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),p=null}let je=new vg;je.setAnimationLoop(Oe),this.setAnimationLoop=function(Z){Ue=Z},this.dispose=function(){}}},Yw=new $e,Tg=new Qe;Tg.set(-1,0,0,0,1,0,0,0,1);function $w(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Yf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===cn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===cn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,v=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Tg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===cn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kw(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(m(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",y));let A=S.program;n.updateUBOMapping(v,A);let _=e.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){let S=u();v.__bindingPointIndex=S;let M=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let S=s[v.id],M=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let _=0,E=M.length;_<E;_++){let R=M[_];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],_,P,A);else d(R,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,M,A){if(x(v,S,M,A)===!0){let _=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let L=E[P],k=g(L);p(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function p(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function x(v,S,M,A){let _=v.value,E=S+"_"+M;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{let R=A[E];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(v){let S=v.uniforms,M=0,A=16;for(let E=0,R=S.length;E<R;E++){let P=Array.isArray(S[E])?S[E]:[S[E]];for(let L=0,k=P.length;L<k;L++){let D=P[L],B=Array.isArray(D.value)?D.value:[D.value];for(let X=0,$=B.length;X<$;X++){let re=B[X],K=g(re),te=M%A,z=te%K.boundary,oe=te+z;M+=z,oe!==0&&A-oe<K.storage&&(M+=A-oe),D.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=K.storage}}}let _=M%A;return _>0&&(M+=A-_),v.__size=M,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Zw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function Jw(){return Ni===null&&(Ni=new oo(Zw,16,16,Is,Jt),Ni.name="DFG_LUT",Ni.minFilter=Bt,Ni.magFilter=Bt,Ni.wrapS=Yn,Ni.wrapT=Yn,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var Hh=class{constructor(e={}){let{canvas:t=H0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=In}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([rh,sh,ih]),g=new Set([In,mi,vo,bo,eh,th]),y=new Uint32Array(4),w=new Int32Array(4),v=new I,S=null,M=null,A=[],_=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,k=null,D=null,B=null;this._outputColorSpace=it;let X=0,$=0,re=null,K=-1,te=null,z=new _t,oe=new _t,le=null,Ue=new pe(0),Oe=0,je=t.width,Z=t.height,ee=1,de=null,Fe=null,Ee=new _t(0,0,je,Z),Ke=new _t(0,0,je,Z),At=!1,se=new ao,ce=!1,he=!1,ue=new $e,ge=new I,qe=new _t,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function et(){return re===null?ee:1}let F=n;function wt(T,U){return t.getContext(T,U)}let ft,C,b,H,q,J,fe,me,j,ie,xe,Be,be,_e,ke,Xe,tt,O,ye,ne,ve,Te,ae;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",Et,!1),t.addEventListener("webglcontextcreationerror",ai,!1),F===null){let U="webgl2";if(F=wt(U,T),F===null)throw wt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(T){throw t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",ai,!1),Ye("WebGLRenderer: "+T.message),T}function Ve(){ft=new s1(F),ft.init(),ve=new Ww(F,ft),C=new $S(F,ft,e,ve),b=new Vw(F,ft),C.reversedDepthBuffer&&f&&b.buffers.depth.setReversed(!0),k=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),H=new a1(F),q=new Rw,J=new Gw(F,ft,b,q,C,ve,H),fe=new i1(R),me=new cb(F),Te=new XS(F,me),j=new r1(F,me,H,Te),ie=new c1(F,j,me,Te,H),O=new l1(F,C,J),ke=new KS(q),xe=new Aw(R,fe,ft,C,Te,ke),Be=new $w(R,q),be=new Iw,_e=new Uw(ft),tt=new qS(R,fe,b,ie,p,l),Xe=new Hw(R,ie,C),ae=new Kw(F,H,C,b),ye=new YS(F,ft,H),ne=new o1(F,ft,H),H.programs=xe.programs,R.capabilities=C,R.extensions=ft,R.properties=q,R.renderLists=be,R.shadowMap=Xe,R.state=b,R.info=H}x!==In&&(E=new u1(x,t.width,t.height,a,s,r));let Pe=new gd(R,F);this.xr=Pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(je,Z,!1))},this.getSize=function(T){return T.set(je,Z)},this.setSize=function(T,U,Y=!0){if(Pe.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}je=T,Z=U,t.width=Math.floor(T*ee),t.height=Math.floor(U*ee),Y===!0&&(t.style.width=T+"px",t.style.height=U+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(je*ee,Z*ee).floor()},this.setDrawingBufferSize=function(T,U,Y){je=T,Z=U,ee=Y,t.width=Math.floor(T*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===In){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,U,Y,G){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,U,Y,G),b.viewport(z.copy(Ee).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(Ke)},this.setScissor=function(T,U,Y,G){T.isVector4?Ke.set(T.x,T.y,T.z,T.w):Ke.set(T,U,Y,G),b.scissor(oe.copy(Ke).multiplyScalar(ee).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(T){b.setScissorTest(At=T)},this.setOpaqueSort=function(T){de=T},this.setTransparentSort=function(T){Fe=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Y=!0){let G=0;if(T){let W=!1;if(re!==null){let we=re.texture.format;W=m.has(we)}if(W){let we=re.texture.type,Re=g.has(we),Se=tt.getClearColor(),Ce=tt.getClearAlpha(),De=Se.r,ot=Se.g,dt=Se.b;Re?(y[0]=De,y[1]=ot,y[2]=dt,y[3]=Ce,F.clearBufferuiv(F.COLOR,0,y)):(w[0]=De,w[1]=ot,w[2]=dt,w[3]=Ce,F.clearBufferiv(F.COLOR,0,w))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Et,!1),t.removeEventListener("webglcontextcreationerror",ai,!1),tt.dispose(),be.dispose(),_e.dispose(),q.dispose(),fe.dispose(),ie.dispose(),Te.dispose(),ae.dispose(),xe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",rm),Pe.removeEventListener("sessionend",om),Ys.stop()};function Ft(T){T.preventDefault(),da("WebGLRenderer: Context Lost."),P=!0}function Et(){da("WebGLRenderer: Context Restored."),P=!1;let T=H.autoReset,U=Xe.enabled,Y=Xe.autoUpdate,G=Xe.needsUpdate,W=Xe.type;Ve(),H.autoReset=T,Xe.enabled=U,Xe.autoUpdate=Y,Xe.needsUpdate=G,Xe.type=W}function ai(T){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Si(T){let U=T.target;U.removeEventListener("dispose",Si),wy(U)}function wy(T){Ey(T),q.remove(T)}function Ey(T){let U=q.get(T).programs;U!==void 0&&(U.forEach(function(Y){xe.releaseProgram(Y)}),T.isShaderMaterial&&xe.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,G,W,we){U===null&&(U=Ge);let Re=W.isMesh&&W.matrixWorld.determinantAffine()<0,Se=Ry(T,U,Y,G,W);b.setMaterial(G,Re);let Ce=Y.index,De=1;if(G.wireframe===!0){if(Ce=j.getWireframeAttribute(Y),Ce===void 0)return;De=2}let ot=Y.drawRange,dt=Y.attributes.position,Ie=ot.start*De,Tt=(ot.start+ot.count)*De;we!==null&&(Ie=Math.max(Ie,we.start*De),Tt=Math.min(Tt,(we.start+we.count)*De)),Ce!==null?(Ie=Math.max(Ie,0),Tt=Math.min(Tt,Ce.count)):dt!=null&&(Ie=Math.max(Ie,0),Tt=Math.min(Tt,dt.count));let Kt=Tt-Ie;if(Kt<0||Kt===1/0)return;Te.setup(W,G,Se,Y,Ce);let Ot,Lt=ye;if(Ce!==null&&(Ot=me.get(Ce),Lt=ne,Lt.setIndex(Ot)),W.isMesh)G.wireframe===!0?(b.setLineWidth(G.wireframeLinewidth*et()),Lt.setMode(F.LINES)):Lt.setMode(F.TRIANGLES);else if(W.isLine){let fn=G.linewidth;fn===void 0&&(fn=1),b.setLineWidth(fn*et()),W.isLineSegments?Lt.setMode(F.LINES):W.isLineLoop?Lt.setMode(F.LINE_LOOP):Lt.setMode(F.LINE_STRIP)}else W.isPoints?Lt.setMode(F.POINTS):W.isSprite&&Lt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Lt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let fn=W._multiDrawStarts,Ae=W._multiDrawCounts,Sn=W._multiDrawCount,xt=Ce?me.get(Ce).bytesPerElement:1,qn=q.get(G).currentProgram.getUniforms();for(let wi=0;wi<Sn;wi++)qn.setValue(F,"_gl_DrawID",wi),Lt.render(fn[wi]/xt,Ae[wi])}else if(W.isInstancedMesh)Lt.renderInstances(Ie,Kt,W.count);else if(Y.isInstancedBufferGeometry){let fn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ae=Math.min(Y.instanceCount,fn);Lt.renderInstances(Ie,Kt,Ae)}else Lt.render(Ie,Kt)};function sm(T,U,Y,G){L!==null&&T.isNodeMaterial&&L.setObject(G,T),ce===!0&&ke.setState(T,Y,!1),T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,Ol(T,U,G),T.side=Jn,T.needsUpdate=!0,Ol(T,U,G),T.side=en):Ol(T,U,G)}this.compile=function(T,U,Y=null){Y===null&&(Y=T),L!==null&&L.renderStart(T,U,Y),M=_e.get(Y),M.init(U),_.push(M),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),he=this.localClippingEnabled,ce=ke.init(this.clippingPlanes,he),ce===!0&&ke.setGlobalState(this.clippingPlanes,U),L!==null&&Xe.render(M.state.shadowsArray,Y,U);let G=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let we=W.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){let Se=we[Re];sm(Se,Y,U,W),G.add(Se)}else sm(we,Y,U,W),G.add(we)}),M=_.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(T,U,Y=null){let G=this.compile(T,U,Y);return new Promise(W=>{function we(){if(G.forEach(function(Re){let Ce=q.get(Re).currentProgram;(Ce===void 0||Ce.isReady())&&G.delete(Re)}),G.size===0){W(T);return}setTimeout(we,10)}ft.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Uu=null;function Ty(T){Uu&&Uu(T)}function rm(){Ys.stop()}function om(){Ys.start()}let Ys=new vg;Ys.setAnimationLoop(Ty),typeof self<"u"&&Ys.setContext(self),this.setAnimationLoop=function(T){Uu=T,Pe.setAnimationLoop(T),T===null?Ys.stop():Ys.start()},Pe.addEventListener("sessionstart",rm),Pe.addEventListener("sessionend",om),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(T,U);let Y=Pe.enabled===!0&&Pe.isPresenting===!0,G=E!==null&&(re===null||Y)&&E.begin(R,re);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(U),U=Pe.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,re),M=_e.get(T,_.length),M.init(U),M.state.textureUnits=J.getTextureUnits(),_.push(M),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),se.setFromProjectionMatrix(ue,fi,U.reversedDepth),he=this.localClippingEnabled,ce=ke.init(this.clippingPlanes,he),S=be.get(T,A.length),S.init(),A.push(S),Pe.enabled===!0&&Pe.isPresenting===!0){let Re=R.xr.getDepthSensingMesh();Re!==null&&Ou(Re,U,-1/0,R.sortObjects)}Ou(T,U,0,R.sortObjects),S.finish(),L!==null&&L.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(de,Fe),Ze=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,Ze&&tt.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ce===!0&&ke.beginShadows();let W=M.state.shadowsArray;if(Xe.render(W,T,U),ce===!0&&ke.endShadows(),(G&&E.hasRenderPass())===!1){let Re=S.opaque,Se=S.transmissive;if(M.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(Se.length>0)for(let De=0,ot=Ce.length;De<ot;De++){let dt=Ce[De];lm(Re,Se,T,dt)}Ze&&tt.render(T);for(let De=0,ot=Ce.length;De<ot;De++){let dt=Ce[De];am(S,T,dt,dt.viewport)}}else Se.length>0&&lm(Re,Se,T,U),Ze&&tt.render(T),am(S,T,U)}re!==null&&$===0&&(J.updateMultisampleRenderTarget(re),J.updateRenderTargetMipmap(re)),G&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),Te.resetDefaultState(),K=-1,te=null,_.pop(),_.length>0?(M=_[_.length-1],J.setTextureUnits(M.state.textureUnits),ce===!0&&ke.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,L!==null&&L.renderEnd()};function Ou(T,U,Y,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(se)){G&&qe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ue);let Re=ie.update(T),Se=T.material;Se.visible&&S.push(T,Re,Se,Y,qe.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(se))){let Re=ie.update(T),Se=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),qe.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),qe.copy(Re.boundingSphere.center)),qe.applyMatrix4(T.matrixWorld).applyMatrix4(ue)),Array.isArray(Se)){let Ce=Re.groups;for(let De=0,ot=Ce.length;De<ot;De++){let dt=Ce[De],Ie=Se[dt.materialIndex];Ie&&Ie.visible&&S.push(T,Re,Ie,Y,qe.z,dt,U)}}else Se.visible&&S.push(T,Re,Se,Y,qe.z,null,U)}}let we=T.children;for(let Re=0,Se=we.length;Re<Se;Re++)Ou(we[Re],U,Y,G)}function am(T,U,Y,G){let{opaque:W,transmissive:we,transparent:Re}=T;M.setupLightsView(Y),ce===!0&&ke.setGlobalState(R.clippingPlanes,Y),G&&b.viewport(z.copy(G)),W.length>0&&Ul(W,U,Y),we.length>0&&Ul(we,U,Y),Re.length>0&&Ul(Re,U,Y),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function lm(T,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let Ie=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new zt(1,1,{generateMipmaps:!0,type:Ie?Jt:In,minFilter:kn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let we=M.state.transmissionRenderTarget[G.id],Re=G.viewport||z;we.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Ce=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(Ue),Oe=R.getClearAlpha(),Oe<1&&R.setClearColor(16777215,.5),R.clear(),Ze&&tt.render(Y);let ot=R.toneMapping;R.toneMapping=pi;let dt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),ce===!0&&ke.setGlobalState(R.clippingPlanes,G),Ul(T,Y,G),J.updateMultisampleRenderTarget(we),J.updateRenderTargetMipmap(we),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Tt=0,Kt=U.length;Tt<Kt;Tt++){let Ot=U[Tt],{object:Lt,geometry:fn,material:Ae,group:Sn}=Ot;if(Ae.side===en&&Lt.layers.test(G.layers)){let xt=Ae.side;Ae.side=cn,Ae.needsUpdate=!0,cm(Lt,Y,G,fn,Ae,Sn),Ae.side=xt,Ae.needsUpdate=!0,Ie=!0}}Ie===!0&&(J.updateMultisampleRenderTarget(we),J.updateRenderTargetMipmap(we))}R.setRenderTarget(Se,Ce,De),R.setClearColor(Ue,Oe),dt!==void 0&&(G.viewport=dt),R.toneMapping=ot}function Ul(T,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,we=T.length;W<we;W++){let Re=T[W],{object:Se,geometry:Ce,group:De}=Re,ot=Re.material;ot.allowOverride===!0&&G!==null&&(ot=G),Se.layers.test(Y.layers)&&cm(Se,U,Y,Ce,ot,De)}}function cm(T,U,Y,G,W,we){L!==null&&W.isNodeMaterial&&L.setObject(T,W),T.onBeforeRender(R,U,Y,G,W,we),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,U,Y,G,T,we),W.transparent===!0&&W.side===en&&W.forceSinglePass===!1?(W.side=cn,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,T,we),W.side=Jn,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,T,we),W.side=en):R.renderBufferDirect(Y,U,G,W,T,we),T.onAfterRender(R,U,Y,G,W,we)}function Ol(T,U,Y){U.isScene!==!0&&(U=Ge);let G=q.get(T),W=M.state.lights,we=M.state.shadowsArray,Re=W.state.version,Se=xe.getParameters(T,W.state,we,U,Y,M.state.lightProbeGridArray),Ce=xe.getProgramCacheKey(Se),De=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let ot=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=fe.get(T.envMap||G.environment,ot),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",Si),De=new Map,G.programs=De);let dt=De.get(Ce);if(dt!==void 0){if(G.currentProgram===dt&&G.lightsStateVersion===Re)return um(T,Se),dt}else Se.uniforms=xe.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,Y,Se),T.onBeforeCompile(Se,R),dt=xe.acquireProgram(Se,Ce),De.set(Ce,dt),G.uniforms=Se.uniforms;let Ie=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ie.clippingPlanes=ke.uniform),um(T,Se),G.needsLights=Iy(T),G.lightsStateVersion=Re,G.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.sunLights.value=W.state.sun,Ie.sunLightShadows.value=W.state.sunShadow,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.sunShadowMatrix.value=W.state.sunShadowMatrix,Ie.sunShadowCascade.value=W.state.sunShadowCascade,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=dt,G.uniformsList=null,dt}function hm(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Ao.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function um(T,U){let Y=q.get(T);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Ay(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=T.length;Y<G;Y++){let W=T[Y];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Ry(T,U,Y,G,W){U.isScene!==!0&&(U=Ge),J.resetTextureUnits();let we=U.fog,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,Se=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:nt.workingColorSpace,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=fe.get(G.envMap||Re,Ce),ot=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,dt=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!Y.morphAttributes.position,Tt=!!Y.morphAttributes.normal,Kt=!!Y.morphAttributes.color,Ot=pi;G.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ot=R.toneMapping);let Lt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,fn=Lt!==void 0?Lt.length:0,Ae=q.get(G),Sn=M.state.lights;if(ce===!0&&(he===!0||T!==te)){let Ut=T===te&&G.id===K;ke.setState(G,T,Ut)}let xt=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Sn.state.version||Ae.outputColorSpace!==Se||W.isBatchedMesh&&Ae.batching===!1||!W.isBatchedMesh&&Ae.batching===!0||W.isBatchedMesh&&Ae.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ae.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ae.instancing===!1||!W.isInstancedMesh&&Ae.instancing===!0||W.isSkinnedMesh&&Ae.skinning===!1||!W.isSkinnedMesh&&Ae.skinning===!0||W.isInstancedMesh&&Ae.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ae.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ae.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ae.instancingMorph===!1&&W.morphTexture!==null||Ae.envMap!==De||G.fog===!0&&Ae.fog!==we||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ke.numPlanes||Ae.numIntersection!==ke.numIntersection)||Ae.vertexAlphas!==ot||Ae.vertexTangents!==dt||Ae.morphTargets!==Ie||Ae.morphNormals!==Tt||Ae.morphColors!==Kt||Ae.toneMapping!==Ot||Ae.morphTargetsCount!==fn||!!Ae.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Ae.__version=G.version);let qn=Ae.currentProgram;xt===!0&&(qn=Ol(G,U,W),L&&G.isNodeMaterial&&L.onUpdateProgram(G,qn,Ae));let wi=!1,ds=!1,Cr=!1,Ct=qn.getUniforms(),Wt=Ae.uniforms;if(b.useProgram(qn.program)&&(wi=!0,ds=!0,Cr=!0),G.id!==K&&(K=G.id,ds=!0),Ae.needsLights){let Ut=Ay(M.state.lightProbeGridArray,W);Ae.lightProbeGrid!==Ut&&(Ae.lightProbeGrid=Ut,ds=!0)}if(wi||te!==T){b.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ct.setValue(F,"projectionMatrix",T.projectionMatrix),Ct.setValue(F,"viewMatrix",T.matrixWorldInverse);let ms=Ct.map.cameraPosition;ms!==void 0&&ms.setValue(F,ge.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Ct.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ct.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),te!==T&&(te=T,ds=!0,Cr=!0)}if(Ae.needsLights&&(Sn.state.sunShadowMap.length>0&&Ct.setValue(F,"sunShadowMap",Sn.state.sunShadowMap,J),Sn.state.directionalShadowMap.length>0&&Ct.setValue(F,"directionalShadowMap",Sn.state.directionalShadowMap,J),Sn.state.spotShadowMap.length>0&&Ct.setValue(F,"spotShadowMap",Sn.state.spotShadowMap,J),Sn.state.pointShadowMap.length>0&&Ct.setValue(F,"pointShadowMap",Sn.state.pointShadowMap,J)),W.isSkinnedMesh){Ct.setOptional(F,W,"bindMatrix"),Ct.setOptional(F,W,"bindMatrixInverse");let Ut=W.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Ct.setValue(F,"boneTexture",Ut.boneTexture,J))}W.isBatchedMesh&&(Ct.setOptional(F,W,"batchingTexture"),Ct.setValue(F,"batchingTexture",W._matricesTexture,J),Ct.setOptional(F,W,"batchingIdTexture"),Ct.setValue(F,"batchingIdTexture",W._indirectTexture,J),Ct.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Ct.setValue(F,"batchingColorTexture",W._colorsTexture,J));let ps=Y.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&O.update(W,Y,qn),(ds||Ae.receiveShadow!==W.receiveShadow)&&(Ae.receiveShadow=W.receiveShadow,Ct.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Jw()),ds){if(Ct.setValue(F,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&Cy(Wt,Cr),we&&G.fog===!0&&Be.refreshFogUniforms(Wt,we),Be.refreshMaterialUniforms(Wt,G,ee,Z,M.state.transmissionRenderTarget[T.id]),Ae.needsLights&&Ae.lightProbeGrid){let Ut=Ae.lightProbeGrid;Wt.probesSH.value=Ut.texture,Wt.probesMin.value.copy(Ut.boundingBox.min),Wt.probesMax.value.copy(Ut.boundingBox.max),Wt.probesResolution.value.copy(Ut.resolution)}Ao.upload(F,hm(Ae),Wt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ao.upload(F,hm(Ae),Wt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ct.setValue(F,"center",W.center),Ct.setValue(F,"modelViewMatrix",W.modelViewMatrix),Ct.setValue(F,"normalMatrix",W.normalMatrix),Ct.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ut=G.uniformsGroups;for(let ms=0,Ir=Ut.length;ms<Ir;ms++){let dm=Ut[ms];ae.update(dm,qn),ae.bind(dm,qn)}}return qn}function Cy(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Iy(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(T,U,Y){let G=q.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=U,q.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Y=q.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){re=T,X=U,$=Y;let G=null,W=!1,we=!1;if(T){let Se=q.get(T);if(Se.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,Se.__webglFramebuffer),z.copy(T.viewport),oe.copy(T.scissor),le=T.scissorTest,b.viewport(z),b.scissor(oe),b.setScissorTest(le),K=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(Se.__hasExternalTextures)J.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ot=T.depthTexture;if(Se.__boundDepthTexture!==ot){if(ot!==null&&q.has(ot)&&(T.width!==ot.image.width||T.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(we=!0);let De=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[U])?G=De[U][Y]:G=De[U],W=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?G=q.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[Y]:G=De,z.copy(T.viewport),oe.copy(T.scissor),le=T.scissorTest}else z.copy(Ee).multiplyScalar(ee).floor(),oe.copy(Ke).multiplyScalar(ee).floor(),le=At;if(Y!==0&&(G=k),b.bindFramebuffer(F.FRAMEBUFFER,G)&&b.drawBuffers(T,G),b.viewport(z),b.scissor(oe),b.setScissorTest(le),W){let Se=q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,Y)}else if(we){let Se=U;for(let Ce=0;Ce<T.textures.length;Ce++){let De=q.get(T.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,De.__webglTexture,Y,Se)}}else if(T!==null&&Y!==0){let Se=q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Se.__webglTexture,Y)}K=-1};function fm(T){let U=q.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=C.textureFormatReadable(T.format),U.__typeReadable=C.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Y,G,W,we,Re,Se=0){if(!(T&&T.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce){b.bindFramebuffer(F.FRAMEBUFFER,Ce);try{let De=T.textures[Se],ot=De.format,dt=De.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se);let Ie=fm(De);if(Ie.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&Y>=0&&Y<=T.height-W&&F.readPixels(U,Y,G,W,ve.convert(ot),ve.convert(dt),we)}finally{let De=re!==null?q.get(re).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,U,Y,G,W,we,Re,Se=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ce=Ce[Re]),Ce)if(U>=0&&U<=T.width-G&&Y>=0&&Y<=T.height-W){b.bindFramebuffer(F.FRAMEBUFFER,Ce);let De=T.textures[Se],ot=De.format,dt=De.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se);let Ie=fm(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.bufferData(F.PIXEL_PACK_BUFFER,we.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,W,ve.convert(ot),ve.convert(dt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Kt=re!==null?q.get(re).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Kt);let Ot=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await G0(F,Ot,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,we),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Tt),F.deleteSync(Ot),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(T.image.width*G),we=Math.floor(T.image.height*G),Re=U!==null?U.x:0,Se=U!==null?U.y:0;J.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Re,Se,W,we),b.unbindTexture()},this.copyTextureToTexture=function(T,U,Y=null,G=null,W=0,we=0){let Re,Se,Ce,De,ot,dt,Ie,Tt,Kt,Ot=T.isCompressedTexture?T.mipmaps[we]:T.image;if(Y!==null)Re=Y.max.x-Y.min.x,Se=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,De=Y.min.x,ot=Y.min.y,dt=Y.isBox3?Y.min.z:0;else{let Wt=Math.pow(2,-W);Re=Math.floor(Ot.width*Wt),Se=Math.floor(Ot.height*Wt),T.isDataArrayTexture?Ce=Ot.depth:T.isData3DTexture?Ce=Math.floor(Ot.depth*Wt):Ce=1,De=0,ot=0,dt=0}G!==null?(Ie=G.x,Tt=G.y,Kt=G.z):(Ie=0,Tt=0,Kt=0);let Lt=ve.convert(U.format),fn=ve.convert(U.type),Ae;U.isData3DTexture?(J.setTexture3D(U,0),Ae=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Ae=F.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Ae=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Sn=b.getParameter(F.UNPACK_ROW_LENGTH),xt=b.getParameter(F.UNPACK_IMAGE_HEIGHT),qn=b.getParameter(F.UNPACK_SKIP_PIXELS),wi=b.getParameter(F.UNPACK_SKIP_ROWS),ds=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,Ot.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ot.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,De),b.pixelStorei(F.UNPACK_SKIP_ROWS,ot),b.pixelStorei(F.UNPACK_SKIP_IMAGES,dt);let Cr=T.isDataArrayTexture||T.isData3DTexture,Ct=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Wt=q.get(T),ps=q.get(U),Ut=q.get(Wt.__renderTarget),ms=q.get(ps.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,Ut.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Ir=0;Ir<Ce;Ir++)Cr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(T).__webglTexture,W,dt+Ir),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(U).__webglTexture,we,Kt+Ir)),F.blitFramebuffer(De,ot,Re,Se,Ie,Tt,Re,Se,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||q.has(T)){let Wt=q.get(T),ps=q.get(U);b.bindFramebuffer(F.READ_FRAMEBUFFER,D),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Ut=0;Ut<Ce;Ut++)Cr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,W,dt+Ut):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,W),Ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ps.__webglTexture,we,Kt+Ut):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ps.__webglTexture,we),W!==0?F.blitFramebuffer(De,ot,Re,Se,Ie,Tt,Re,Se,F.COLOR_BUFFER_BIT,F.NEAREST):Ct?F.copyTexSubImage3D(Ae,we,Ie,Tt,Kt+Ut,De,ot,Re,Se):F.copyTexSubImage2D(Ae,we,Ie,Tt,De,ot,Re,Se);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ct?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ae,we,Ie,Tt,Kt,Re,Se,Ce,Lt,fn,Ot.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,we,Ie,Tt,Kt,Re,Se,Ce,Lt,Ot.data):F.texSubImage3D(Ae,we,Ie,Tt,Kt,Re,Se,Ce,Lt,fn,Ot):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,we,Ie,Tt,Re,Se,Lt,fn,Ot.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,we,Ie,Tt,Ot.width,Ot.height,Lt,Ot.data):F.texSubImage2D(F.TEXTURE_2D,we,Ie,Tt,Re,Se,Lt,fn,Ot);b.pixelStorei(F.UNPACK_ROW_LENGTH,Sn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xt),b.pixelStorei(F.UNPACK_SKIP_PIXELS,qn),b.pixelStorei(F.UNPACK_SKIP_ROWS,wi),b.pixelStorei(F.UNPACK_SKIP_IMAGES,ds),we===0&&U.generateMipmaps&&F.generateMipmap(Ae),b.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),b.unbindTexture()},this.resetState=function(){X=0,$=0,re=null,b.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Wh=class extends bt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Q(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this.rotation2D=e.rotation2D,this}},Io=new I,Ag=new $e,Rg=new $e,Cg=new I,Ig=new I,qh=class{constructor(e={}){let t=this,n,s,r,o,a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),Ag.copy(x.matrixWorldInverse),Rg.multiplyMatrices(x.projectionMatrix,Ag),h(p,p,x),this.sortObjects&&d(p)},this.setSize=function(p,x){n=p,s=x,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=x+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,m=p.children.length;x<m;x++)c(p.children[x])}function h(p,x,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Io.setFromMatrixPosition(p.matrixWorld),Io.applyMatrix4(Rg);let g=Io.z>=-1&&Io.z<=1&&p.layers.test(m.layers)===!0,y=p.element;if(y.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(t,x,m);let v=100*p.center.x,S=100*p.center.y;y.style.transformOrigin=`${v}% ${S}%`;let M=-p.rotation2D,A=Io.x*r+r,_=-Io.y*o+o;y.style.transform=`translate(${-v}%, ${-S}%) translate(${A}px, ${_}px) rotate(${M}rad)`,y.parentNode!==l&&l.appendChild(y),p.onAfterRender(t,x,m)}let w={distanceToCameraSquared:u(m,p)};a.objects.set(p,w)}for(let g=0,y=p.children.length;g<y;g++)h(p.children[g],x,m)}function u(p,x){return Cg.setFromMatrixPosition(p.matrixWorld),Ig.setFromMatrixPosition(x.matrixWorld),Cg.distanceToSquared(Ig)}function f(p){let x=[];return p.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function d(p){let x=f(p).sort(function(g,y){if(g.renderOrder!==y.renderOrder)return y.renderOrder-g.renderOrder;let w=a.objects.get(g).distanceToCameraSquared,v=a.objects.get(y).distanceToCameraSquared;return w-v}),m=x.length;for(let g=0,y=x.length;g<y;g++)x[g].element.style.zIndex=m-g}}};function xd(i,e){if(e===Vf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Mo||e===al){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Mo)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Pg(i){let e=new Map,t=new Map,n=i.clone();return Lg(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Lg(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Lg(i.children[n],e.children[n],t)}var Lo=class extends Li{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wd(t)}),this.register(function(t){return new Ed(t)}),this.register(function(t){return new Dd(t)}),this.register(function(t){return new Fd(t)}),this.register(function(t){return new Ud(t)}),this.register(function(t){return new Ad(t)}),this.register(function(t){return new Rd(t)}),this.register(function(t){return new Cd(t)}),this.register(function(t){return new Id(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Pd(t)}),this.register(function(t){return new Td(t)}),this.register(function(t){return new Nd(t)}),this.register(function(t){return new Ld(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new Xh(t,ut.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Xh(t,ut.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Od(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ns.extractUrlBase(e);o=ns.resolveURL(c,this.path)}else o=ns.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new mo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Og){try{o[ut.KHR_BINARY_GLTF]=new Bd(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ut.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new qd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case ut.KHR_MATERIALS_UNLIT:o[u]=new Md;break;case ut.KHR_DRACO_MESH_COMPRESSION:o[u]=new kd(r,this.dracoLoader);break;case ut.KHR_TEXTURE_TRANSFORM:o[u]=new zd;break;case ut.KHR_MESH_QUANTIZATION:o[u]=new Hd;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function jw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function $t(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var ut={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bd=class{constructor(e){this.parser=e,this.name=ut.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ln);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new As(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ur(h),c.distance=u;break;case"spot":c=new hr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Md=class{constructor(){this.name=ut.KHR_MATERIALS_UNLIT}getMaterialType(){return Mt}extendParams(e,t,n){let s=[];e.color=new pe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ln),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,it))}return Promise.all(s)}},Sd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},wd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Q(r,r)}return Promise.all(s)}},Ed=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Td=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Ad=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SHEEN}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new pe(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],ln)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,it)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Rd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Cd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_VOLUME}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new pe().setRGB(r[0],r[1],r[2],ln),Promise.all(s)}},Id=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_IOR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Pd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new pe().setRGB(r[0],r[1],r[2],ln),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,it)),Promise.all(s)}},Ld=class{constructor(e){this.parser=e,this.name=ut.EXT_MATERIALS_BUMP}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Nd=class{constructor(e){this.parser=e,this.name=ut.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $t(this.parser,e,this.name)!==null?Yt:null}extendMaterialParams(e,t){let n=$t(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Dd=class{constructor(e){this.parser=e,this.name=ut.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Fd=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Ud=class{constructor(e){this.parser=e,this.name=ut.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Xh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},Od=class{constructor(e){this.name=ut.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Qn.TRIANGLES&&c.mode!==Qn.TRIANGLE_STRIP&&c.mode!==Qn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new $e,m=new I,g=new mn,y=new I(1,1,1),w=new sr(p.geometry,p.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&y.fromBufferAttribute(l.SCALE,S),w.setMatrixAt(S,x.compose(m,g,y));let v=null;for(let S in l)if(S==="_COLOR_0"){let M=l[S];w.instanceColor=new Ji(M.array,M.itemSize,M.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let A=w.geometry;v=new vt,v.name=A.name;for(let _ in A.attributes)v.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)v.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)v.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),w.geometry=v}let M=l[S];v.setAttribute(S,new Ji(M.array,M.itemSize,M.normalized))}bt.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},Og="glTF",fl=12,Ng={JSON:1313821514,BIN:5130562},Bd=class{constructor(e){this.name=ut.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,fl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Og)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-fl,r=new DataView(e,fl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Ng.JSON){let c=new Uint8Array(e,fl+o,a);this.content=n.decode(c)}else if(l===Ng.BIN){let c=fl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},kd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ut.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Gd[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Gd[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[e.attributes[h]],d=Po[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,ln,f)})})}},zd=class{constructor(){this.name=ut.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Hd=class{constructor(){this.name=ut.KHR_MESH_QUANTIZATION}},Yh=class extends Pi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,p=e*c,x=p-c,m=-2*d+3*f,g=d-f,y=1-m,w=g-f+u;for(let v=0;v!==a;v++){let S=o[x+v+a],M=o[x+v+l]*h,A=o[p+v+a],_=o[p+v]*h;r[v]=y*S+w*M+m*A+g*_}return r}},Qw=new mn,Vd=class extends Yh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Qw.fromArray(r).normalize().toArray(r),r}},Qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Dg={9728:qt,9729:Bt,9984:jc,9985:yo,9986:gr,9987:kn},Fg={33071:Yn,33648:Jr,10497:Kn},_d={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eE={CUBICSPLINE:void 0,LINEAR:er,STEP:Qs},yd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Gt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function yr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nE(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function iE(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sE(i){let e,t=i.extensions&&i.extensions[ut.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vd(t.attributes):e=i.indices+":"+vd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+vd(i.targets[n]);return e}function vd(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Wd(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var oE=new $e,qd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new lr(this.options.manager):this.textureLoader=new Ga(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return yr(r,a,s),Fi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ut.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ns.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=_d[s.type],a=Po[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Vt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=_d[s.type],c=Po[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,w=t.cache.get(y);w||(x=new c(a,g*d,s.count*d/h),w=new ir(x,d/h),t.cache.add(y,w)),m=new Ms(w,l,f%d/h,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new Vt(x,l,p);if(s.sparse!==void 0){let g=_d.SCALAR,y=Po[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new y(o[1],w,s.sparse.count*g),M=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=S.length;A<_;A++){let E=S[A];if(m.setX(E,M[A*l]),l>=2&&m.setY(E,M[A*l+1]),l>=3&&m.setZ(E,M[A*l+2]),l>=4&&m.setW(E,M[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Dg[f.magFilter]||Bt,h.minFilter=Dg[f.minFilter]||kn,h.wrapS=Fg[f.wrapS]||Kn,h.wrapT=Fg[f.wrapT]||Kn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Bt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;t.isImageBitmapLoader===!0&&(p=function(x){let m=new jt(x);m.needsUpdate=!0,f(m)}),t.load(ns.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Fi(u,o),u.userData.mimeType=o.mimeType||rE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ut.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ut.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ut.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new co,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new lo,gn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Gt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ut.KHR_MATERIALS_UNLIT]){let u=s[ut.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new pe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ln),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,it)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=en);let h=r.alphaMode||yd.OPAQUE;if(h===yd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===yd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Mt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Mt){let u=r.emissiveFactor;a.emissive=new pe().setRGB(u[0],u[1],u[2],ln)}return r.emissiveTexture!==void 0&&o!==Mt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,it)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Fi(u,r),t.associations.set(u,{materials:e}),r.extensions&&yr(s,u,r),u})}createUniqueName(e){let t=Nt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ut.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ug(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=sE(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[ut.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ug(new vt,c,t),c.mode===Qn.TRIANGLE_STRIP?f=f.then(d=>xd(d,al)):c.mode===Qn.TRIANGLE_FAN&&(f=f.then(d=>xd(d,Mo))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?tE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,y=c[d];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");w&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&v?new _a(x,y):new ze(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Qn.LINES)g=new va(x,y);else if(m.mode===Qn.LINE_STRIP)g=new rr(x,y);else if(m.mode===Qn.LINE_LOOP)g=new ba(x,y);else if(m.mode===Qn.POINTS)g=new Ma(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&iE(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Fi(g,r),m.extensions&&yr(s,g,m),t.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&yr(s,u[0],r),u[0];let f=new lt;r.extensions&&yr(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new an(So.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new $e;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ya(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let w=0,v=f.length;w<v;w++){let S=f[w],M=d[w],A=p[w],_=x[w],E=m[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,M,A,_,E);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let y=new za(r,void 0,g);return Fi(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,oE)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new I().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new ro:c.length>1?h=new lt:c.length===1?h=c[0]:h=new bt,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Fi(h,r),r.extensions&&yr(n,h,r),r.matrix!==void 0){let u=new $e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new lt;n.name&&(r.name=s.createUniqueName(n.name)),Fi(r,n),n.extensions&&yr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Pg(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof gn||f instanceof jt)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ps[r.path]===Ps.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let h;switch(Ps[r.path]){case Ps.weights:h=Qi;break;case Ps.rotation:h=es;break;case Ps.translation:case Ps.scale:h=Ts;break;default:switch(n.itemSize){case 1:h=Qi;break;case 2:case 3:default:h=Ts;break}break}let u=s.interpolation!==void 0?eE[s.interpolation]:er,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+"."+Ps[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Wd(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof es?Vd:Yh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function aE(i,e,t){let n=e.attributes,s=new Xt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let h=Wd(Po[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=t.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=Wd(Po[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Rn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Ug(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Gd[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return nt.workingColorSpace!==ln&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),Fi(i,e),aE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?nE(i,e.targets,t):i})}var $h=class extends nr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new xn;e.deleteAttribute("uv");let t=new Gt({side:cn}),n=new Gt,s=new ur(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ze(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new sr(e,n,6),a=new bt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ze(e,No(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ze(e,No(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ze(e,No(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new ze(e,No(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new ze(e,No(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new ze(e,No(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function No(i){return new Ba({color:0,emissive:16777215,emissiveIntensity:i})}var dl=new I;function ei(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;dl.copy(e),dl[n]=0,dl.normalize();let c=.5*o/(o+a),h=1-dl.angleTo(i)/l;return Math.sign(dl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Kh=class i extends xn{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new I,m=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),d[y+0]=ei(x,c,"z","y",r,n),d[y+1]=1-ei(x,c,"y","z",r,t);break;case 1:x.set(-1,0,0),d[y+0]=1-ei(x,c,"z","y",r,n),d[y+1]=1-ei(x,c,"y","z",r,t);break;case 2:x.set(0,1,0),d[y+0]=1-ei(x,c,"x","z",r,e),d[y+1]=ei(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[y+0]=1-ei(x,c,"x","z",r,e),d[y+1]=1-ei(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[y+0]=1-ei(x,c,"x","y",r,e),d[y+1]=1-ei(x,c,"y","x",r,t);break;case 5:x.set(0,0,-1),d[y+0]=ei(x,c,"x","y",r,e),d[y+1]=1-ei(x,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var Zh=["#9CAA93","#86A4A1","#8E9DB1","#A49EB9","#BB9CA6","#C79F89","#CDB27F"],Bg=["sofa","media","library","meeting"],kg=[.85,1.25],Xd="26,30,42",lE=.3,Wg=[240,235,227],st={x0:3.03,x1:8,z0:-.12,z1:4.7},cE=[[4.13,-.3],[4.13,3.9]],ti=128,vr=64,zg=.012,qg=["sofa","armchair_1","armchair_2","coffee_table"],hE={oak:"#D9C39F",black:"#1C1C1E",graphite:"#3A3A3C",fabric_warm:"#C9C5BE",fabric_light:"#E2DFDA",pot_white:"#F1EFEB",bar_white:"#EBE9E4"},Yd=["#ECE6DA","#D3CABA","#ABA294","#6B6762","#36363A","#BCA680"],uE=new pe(1,1,1),fE=new pe("#F2EEE6"),$d=new pe().setRGB(210/255,210/255,210/255,it).r,Xg=new Map,Yg=.4;function $g(i){let e=new Set,t=new Map;return i.forEach((n,s)=>{let r=dE(n.id)%Zh.length;if(i.length<=Zh.length)for(;e.has(r);)r=(r+1)%Zh.length;e.add(r),t.set(n.id,{accent:Zh[r],layout:Bg[s%Bg.length]})}),t}function dE(i){let e=2166136261;for(let t of String(i))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var Do=new WeakMap;function Kg(i){let e={layouts:new Map,glb:[],mats:[]};return i.traverse(t=>{let n=/^style_(sofa|media|library|meeting)$/.exec(t.name);if(n&&e.layouts.set(n[1],t),qg.includes(t.name)&&e.glb.push(t),t.isMesh)for(let s of[].concat(t.material))s.userData.accent&&!e.mats.includes(s)&&e.mats.push(s)}),e}function Zg(i,e){Do.has(i)||Do.set(i,Kg(i));let t=Do.get(i);for(let[s,r]of t.layouts)r.visible=s===e.layout;for(let s of t.glb)s.visible=e.layout==="sofa";let n=new pe(e.accent);for(let s of t.mats)pE(s,s.userData.accent,n)}function Jg(i){Do.has(i)||Do.set(i,Kg(i));let e=Do.get(i);return[...e.layouts.values(),...e.glb]}function pE(i,e,t){let n=/^rug/.test(e)?t.clone().lerp(fE,.28):t;switch(e){case"rugtint":i.color.setRGB(Math.min(1,n.r/$d),Math.min(1,n.g/$d),Math.min(1,n.b/$d));break;case"fabric":i.color.copy(n).multiplyScalar(.86);break;case"panelDark":i.color.copy(n).multiplyScalar(.6);break;case"book":i.color.copy(n).multiplyScalar(.78);break;case"rugEdge":i.color.copy(n).multiplyScalar(.74);break;case"screen":i.color.copy(n).lerp(uE,.2).multiplyScalar(.92);break;case"rug":(i.accentUniform?i.accentUniform.value:i.color).copy(n);break;default:i.color.copy(n)}}function jg(i,e){if(qg.some(s=>!i.getObjectByName(s))||e.slice(0,5).some(s=>!s))return null;let t=new Jd(i);bE(t,i),ME(t,i),mE(t,i);let n={sofa:e.slice(0,5).map(s=>({pos:s.pos.clone(),yaw:s.yaw}))};return n.media=Kd(t,i,"media",gE),n.library=Kd(t,i,"library",xE),n.meeting=Kd(t,i,"meeting",_E),{layouts:n}}var Jd=class{constructor(e){this.open=e,this.found=new Map,e.traverse(t=>{if(t.isMesh)for(let n of[].concat(t.material))n.name&&!this.found.has(n.name)&&this.found.set(n.name,n)}),this.made=new Map}mat(e){return this.found.has(e)?this.found.get(e):(this.made.has(e)||this.made.set(e,new Gt({name:e,color:hE[e]||"#CCCCCC",roughness:.7})),this.made.get(e))}accent(e,t="fabric_light",n={}){let s=`accent_${e}`;if(!this.made.has(s)){let r=this.mat(t).clone();r.name=s,r.userData={accent:e},Object.assign(r,n),this.made.set(s,r)}return this.made.get(s)}plain(e,t,n=.75){return this.made.has(e)||this.made.set(e,new Gt({name:e,color:t,roughness:n})),this.made.get(e)}add(e,t,n,s,r,o,a=0,l=0,c=0){let h=new ze(t,n);return h.position.set(s,r,o),h.rotation.set(l,a,c,"YXZ"),e.add(h),h}rbox(e,t,n,s){return new Kh(e,t,n,2,Math.min(s,e/2-1e-4,t/2-1e-4,n/2-1e-4))}group(e,t,n,s=0){let r=new lt;return r.position.set(t,0,n),r.rotation.y=s,e.add(r),r}};function Kd(i,e,t,n){let s=new lt,r=cE.map(([u,f])=>({pts:hx([...jh(u,f,.15,14),[u+.34,f+.36]]),flat:!0})),o={shadows:r,rug:null},a=n(i,s,o),l=RE(r);Xg.set(t,{layers:l,rug:o.rug});let c=new ze(new Ht(st.x1-st.x0,st.z1-st.z0).rotateX(-Math.PI/2),new Mt({map:ix(l),name:`style_patch_${t}`}));c.position.set((st.x0+st.x1)/2,.002,(st.z0+st.z1)/2),c.userData.bakedName=`style_patch_${t}`,s.add(c),o.rug&&SE(i,s,o.rug,l,t);let h=cx(s,`style_${t}`);return h.visible=!1,e.add(h),a.map(([u,f,d,p])=>({pos:new I(u,f,d),yaw:p}))}function mE(i,e){let t=new lt;t.name="style_sofa";let s=e.getObjectByName("sofa").position,r=i.rbox(.42,.4,.14,.065);for(let l of[-1,1])i.add(t,r,i.accent("fabric"),s.x+l*1.16,.655,s.z-.16,-l*.22,-.3);let o=new Mt({name:"accent_rugtint",color:16777215,blending:Ya,premultipliedAlpha:!0,transparent:!0,depthWrite:!1});o.userData={accent:"rugtint"};let a=i.add(t,new Ta(2.205,128).rotateX(-Math.PI/2),o,5.3,.0015,2.3);a.userData.keep=!0,a.renderOrder=-1,e.add(t)}function gE(i,e,t){let n=i.mat("bar_white"),s=i.mat("oak"),r=i.mat("black"),o=3.44,a=2.45,l=2.7,c=.44,h=.46;i.add(e,i.rbox(c-.08,.05,l-.12,.01),r,o,.025,a),i.add(e,i.rbox(c,h-.08,l,.012),n,o,.05+(h-.08)/2,a),i.add(e,i.rbox(c+.02,.03,l+.02,.008),s,o,h-.015,a);for(let g of[-l/6,l/6])i.add(e,new xn(.004,h-.12,.006),r,o+c/2+.001,.05+(h-.08)/2,a+g);t.shadows.push({pts:Pn(o,a,c,l),y0:0,y1:h,core:.75});let u=2,f=1.125,d=h+.17+f/2,p=o-.02;i.add(e,i.rbox(.22,.012,.44,.006),r,p,h+.006,a),i.add(e,i.rbox(.035,.2,.12,.01),r,p-.02,h+.1,a),i.add(e,i.rbox(.032,f+.036,u+.036,.01),r,p,d,a);let x=new Mt({name:"accent_screen",map:CE(),toneMapped:!1});x.userData={accent:"screen"},i.add(e,new Ht(u,f).rotateY(Math.PI/2),x,p+.0165,d,a),t.shadows.push({pts:Pn(p,a,.032,u+.036),y0:d-f/2-.02,y1:d+f/2+.02});let m=[];for(let g of[1.75,3.3]){let w=Math.atan2(o-5.1,a-g);ex(i,e,t,5.1,g,w),m.push(Qg(5.1,g,w,.48,.05))}return tx(i,e,t,6,.5,2.5,0),t.rug={kind:"rect",x0:3.9,z0:.1,x1:7.65,z1:4.25,r:.08},[[5.15,.46,.5,0],[6,.46,.5,0],[6.85,.46,.5,0],...m]}function xE(i,e,t){let n=ux(11);Hg(i,e,t,(3.12+7.35)/2,.27,7.35-3.12,0,n),Hg(i,e,t,3.3,(.45+3.75)/2,3.75-.45,Math.PI/2,n),tx(i,e,t,3.97,2.15,2.45,Math.PI/2);let s=6.7,r=2.85,o=-.69;ex(i,e,t,s,r,o),yE(i,e,t,7.38,2.12),vE(i,e,t,5.75,3.72);let a=i.open.getObjectByName("tree_3").clone(!0);a.position.set(6.85,.78,.27),a.scale.setScalar(.24),e.add(a);let l=new fo([[0,0],[.045,0],[.06,.05],[.058,.12],[.03,.2],[.028,.23],[0,.23]].map(([c,h])=>new Q(c,h)),28);return i.add(e,l,i.mat("pot_white"),4.15,.78,.25),t.rug={kind:"round",cx:5.7,cz:2.4,r:1.72},[[3.97,.46,1.3,Math.PI/2],[3.97,.46,2.15,Math.PI/2],[3.97,.46,3,Math.PI/2],Qg(s,r,o,.48,.05),[5.75,.41,3.72,.3]]}function _E(i,e,t){let n=i.mat("oak"),s=i.mat("black"),r=5.55,o=2.05,a=2.4,l=1.1,c=.74,h=new Fa(jd(a,l,l/2),{depth:.024,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:16});h.rotateX(Math.PI/2),i.add(e,h,n,r,c-.006,o);for(let f of[-1,1])i.add(e,new On(.04,.04,c-.05,20),s,r+f*.62,(c-.05)/2+.012,o),i.add(e,i.rbox(.09,.024,.74,.01),s,r+f*.62,.012,o),t.shadows.push({pts:Pn(r+f*.62,o,.08,.08),y0:0,y1:c-.04},{pts:Pn(r+f*.62,o,.09,.74),core:.55,blur:.02});t.shadows.push({pts:jd(a,l,l/2).getPoints(12).map(f=>[r+f.x,o-f.y]),y0:c-.036,y1:c});let u=[];for(let f of[r-.8,r,r+.8])Jh(i,e,t,f,o-l/2-.47,0),u.push([f,.47,o-l/2-.47,0]);Jh(i,e,t,r-a/2-.5,o,Math.PI/2),u.push([r-a/2-.5,.47,o,Math.PI/2]),Jh(i,e,t,r+a/2+.5,o,-Math.PI/2),u.push([r+a/2+.5,.47,o,-Math.PI/2]);for(let f of[r-.42,r+.42])Jh(i,e,t,f,o+l/2+.3,Math.PI);return t.rug={kind:"rect",x0:3.35,z0:.42,x1:7.75,z1:3.68,r:.08},u}function Qg(i,e,t,n,s){return[i+Math.sin(t)*s,n,e+Math.cos(t)*s,t]}function ex(i,e,t,n,s,r){let o=i.open.getObjectByName("armchair_1").clone(!0);o.position.set(n,0,s),o.rotation.set(0,r,0),e.add(o),t.shadows.push({pts:Pn(n,s,.95,.9,r),y0:0,y1:.37,core:.88,blur:.04},{pts:Pn(...br(n,s,0,-.38,r),.95,.16,r),y0:0,y1:.85},...[-.5,.5].map(a=>({pts:Pn(...br(n,s,a,0,r),.1,.8,r),y0:0,y1:.62})))}function tx(i,e,t,n,s,r,o){let a=i.group(e,n,s,o),l=.46;i.add(a,i.rbox(r,.035,l,.012),i.mat("oak"),0,.322,0),i.add(a,i.rbox(r-.03,.115,l-.03,.05),i.mat("fabric_warm"),0,.395,0);let c=new On(.016,.014,.305,12);for(let h of[-1,1])for(let u of[-1,1]){let f=h*(r/2-.09),d=u*(l/2-.07);i.add(a,c,i.mat("black"),f,.1525,d);let[p,x]=br(n,s,f,d,o);t.shadows.push({pts:Pn(p,x,.03,.03),y0:0,y1:.3,core:.5,blur:.015})}t.shadows.push({pts:Pn(n,s,r,l,o),y0:.305,y1:.452,core:.22,blur:.1})}function Jh(i,e,t,n,s,r){let o=i.group(e,n,s,r),a=i.mat("graphite"),l=i.mat("black");i.add(o,i.rbox(.48,.07,.46,.03),a,0,.43,.01),i.add(o,i.rbox(.46,.33,.05,.022),a,0,.73,-.215,0,-.1);let c=new On(.011,.011,.395,10);for(let u of[-1,1])for(let f of[-1,1])i.add(o,c,l,u*.2,.1975,f*.18),t.shadows.push({pts:Pn(...br(n,s,u*.2,f*.18,r),.024,.024),y0:0,y1:.395,core:.45,blur:.012});let h=new On(.009,.009,.16,8);for(let u of[-1,1])i.add(o,h,l,u*.18,.54,-.205);t.shadows.push({pts:Pn(...br(n,s,0,.01,r),.48,.46,r),y0:.395,y1:.465,core:.16,blur:.08},{pts:Pn(...br(n,s,0,-.215,r),.46,.05,r),y0:.565,y1:.895})}function Hg(i,e,t,n,s,r,o,a){let l=i.group(e,n,s,o),c=.36,h=.78,u=.022,f=i.mat("bar_white");i.add(l,i.rbox(r-.05,.05,c-.06,.008),i.mat("black"),0,.025,-.015),i.add(l,i.rbox(r,u,c,.004),f,0,.05+u/2,0),i.add(l,i.rbox(r+.012,.03,c+.012,.008),i.mat("oak"),0,h-.015,0),i.add(l,i.rbox(r,h-.08,.012,.003),f,0,.05+(h-.08)/2,-c/2+.006);let d=Math.max(1,Math.round(r/.82)),p=r/d;for(let m=0;m<=d;m++)i.add(l,i.rbox(u,h-.08,c,.004),f,-r/2+u/2+m*(r-u)/d,.05+(h-.08)/2,0);let x=.05+u+(h-.08-u)/2;i.add(l,i.rbox(r-u,u,c-.015,.004),f,0,x,.0075);for(let m=0;m<d;m++){let g=-r/2+m*p+u,y=g+p-u;Vg(i,l,g,y,.05+u,x-u/2-(.05+u),c,a),Vg(i,l,g,y,x+u/2,h-.03-(x+u/2),c,a)}t.shadows.push({pts:Pn(n,s,r,c,o),y0:0,y1:h,core:.72,blur:.03})}function Vg(i,e,t,n,s,r,o,a){let l=()=>a()<.12?i.accent("book","fabric_light",{roughness:.75}):i.plain(`book_${Math.floor(a()*Yd.length)}`,Yd[Math.floor(a()*Yd.length)]),c=-o/2+.016;if(a()<.16){let f=s;for(let d=0,p=2+Math.floor(a()*3);d<p;d++){let x=.028+a()*.014,m=.2+a()*.05,g=.16+a()*.05;i.add(e,new xn(m,x,g),l(),t+.04+m/2+(a()-.5)*.02,f+x/2,c+g/2,(a()-.5)*.12),f+=x}return}let h=n-.008-(a()<.55?.1+a()*.3:0),u=t+.006+a()*.05;for(;;){let f=.02+a()*.024,d=Math.min(r-.03,.19+a()*.11),p=.16+a()*.07;if(u+f>h)break;i.add(e,new xn(f,d,p),l(),u+f/2,s+d/2,c+p/2),u+=f+(a()<.12?.006:.0015)}}function yE(i,e,t,n,s){let r=i.mat("black");i.add(e,new On(.15,.16,.018,32),r,n,.009,s),i.add(e,new On(.011,.011,1.3,10),r,n,.018+.65,s),i.add(e,new On(.16,.19,.26,40),i.mat("fabric_light"),n,1.43,s),t.shadows.push({pts:jh(n,s,.16,16),y0:0,y1:.02,core:.5,blur:.02},{pts:Pn(n,s,.024,.024),y0:0,y1:1.3},{pts:jh(n,s,.19,16),y0:1.3,y1:1.56})}function vE(i,e,t,n,s){let r=[[0,0],[.27,0],[.295,.02],[.31,.12],[.31,.3],[.295,.375],[.26,.405],[0,.41]];i.add(e,new fo(r.map(([o,a])=>new Q(o,a)),40),i.accent("fabric"),n,0,s),t.shadows.push({pts:jh(n,s,.31,20),y0:0,y1:.41,core:.82,blur:.04})}function bE(i,e){let t=new lt,n=1.26,s=2.05,r=3.35,o=1.33,a=-8,l=12,c=.062;i.add(t,i.rbox(.018,s,n,.006),i.accent("panelDark"),a+.009,o,r);let h=(n-.04-l*c)/(l-1),u=i.rbox(.026,s-.04,c,.008);for(let d=0;d<l;d++)i.add(t,u,i.accent("panel","fabric_light",{roughness:.9}),a+.018+.013,o,r-n/2+.02+c/2+d*(c+h));let f=cx(t,"style_panel");e.add(f)}function ME(i,e){let t=e.getObjectByName("tree_1");t&&t.traverse(n=>{n.isMesh&&n.material.name==="pot_white"&&(n.material=i.accent("pot","pot_white"))})}function SE(i,e,t,n,s){let r,o,a,l,c;t.kind==="round"?(o=t.cx,a=t.cz,l=c=t.r*2,r=new Es().absarc(0,0,t.r,0,Math.PI*2,!1)):(o=(t.x0+t.x1)/2,a=(t.z0+t.z1)/2,l=t.x1-t.x0,c=t.z1-t.z0,r=jd(l,c,t.r));let h={x0:o-l/2,x1:o+l/2,z0:a-c/2,z1:a+c/2},u=new Oa(r,40),f=u.attributes.position,d=u.attributes.uv;for(let g=0;g<d.count;g++)d.setXY(g,f.getX(g)/l+.5,f.getY(g)/c+.5);u.rotateX(-Math.PI/2);let p=new Mt({name:`style_rug_${s}`,map:nx(t,h,n)});p.userData={accent:"rug"};let x=i.add(e,u,p,o,zg,a);x.userData.bakedName=`style_rug_${s}`;let m=r.getPoints(40).map(g=>[g.x,-g.y]);i.add(e,PE(m,zg),i.accent("rugEdge","fabric_light",{roughness:1,side:Jn}),o,0,a)}function wE(i){return i.kind==="round"?{x0:i.cx-i.r,x1:i.cx+i.r,z0:i.cz-i.r,z1:i.cz+i.r}:{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1}}function nx(i,e,t,n=null){let s=Math.round((e.x1-e.x0)*ti),r=Math.round((e.z1-e.z0)*ti);return Qd(s,r,o=>{EE(o,s,r,i,e,t,n?Yg:1),n&&(o.globalCompositeOperation="multiply",o.drawImage(ox(n,e),0,0,s,r),o.globalCompositeOperation="source-over")})}function EE(i,e,t,n,s,r,o){i.fillStyle="rgb(247,247,246)",i.fillRect(0,0,e,t),ax(i,e,t,7,5);let a=.18*ti;i.strokeStyle="rgba(0,0,0,0.07)",i.lineWidth=1.5,i.beginPath(),n.kind==="round"?i.arc(e/2,t/2,e/2-a,0,Math.PI*2):LE(i,a,a,e-a*2,t-a*2,Math.max(2,n.r*ti-a*.3)),i.stroke(),lx(i,r,s,o)}function ix(i,e=null){let t=Math.round((st.x1-st.x0)*ti),n=Math.round((st.z1-st.z0)*ti);return Qd(t,n,s=>{e?s.drawImage(ox(e,st),0,0,t,n):(s.fillStyle=`rgb(${Wg.join(",")})`,s.fillRect(0,0,t,n)),ax(s,t,n,3,0),s.fillStyle="rgba(60,50,40,0.035)";for(let r=-8;r<=8;r+=1.6)r>st.x0&&r<st.x1&&s.fillRect(Math.round((r-st.x0)*ti),0,1,n);for(let r=-6;r<=6;r+=1.5)r>st.z0&&r<st.z1&&s.fillRect(0,Math.round((r-st.z0)*ti),t,1);lx(s,i,st,e?Yg:1)})}function sx(i){let e=new Map,t=TE(i);if(!t)return e;let n=(s,r)=>t(s,r).map((o,a)=>Math.min(255,o/Wg[a]*255));for(let[s,r]of Xg)e.set(`style_patch_${s}`,ix(r.layers,t)),r.rug&&e.set(`style_rug_${s}`,nx(r.rug,wE(r.rug),r.layers,n));return e}function TE(i){let s=pl(128,96),r=s.getContext("2d",{willReadFrequently:!0});try{r.drawImage(i,0,0,128,96)}catch{return null}let o=r.getImageData(0,0,128,96).data,a=(u,f)=>{let d=Math.min(127,Math.max(0,Math.floor((u+8)*8))),x=(Math.min(95,Math.max(0,Math.floor((6-f)*8)))*128+d)*4;return[o[x],o[x+1],o[x+2]]},l=[];for(let u=0;u<=1.0001;u+=.025)for(let f of[.18,.4]){let d=st.x0+u*(st.x1-.12-st.x0),p=st.z0+u*(st.z1-st.z0);for(let[x,m]of[[st.x0-f,p],[d,st.z0-f],[d,st.z1+f]])l.push({x:x-5.5,z:m-2.3,c:a(x,m)})}let c=u=>u[0]*.3+u[1]*.55+u[2]*.15,h=null;for(let u=0;u<4&&l.length>=12;u++){h=[0,1,2].map(d=>AE(l,d));let f=h;l=l.filter(d=>c(d.c)>=c(Gg(f,d.x,d.z))*.93)}return h&&((u,f)=>Gg(h,u-5.5,f-2.3).map(d=>Math.max(0,Math.min(255,d))))}var rx=(i,e)=>[1,i,e,i*i,e*e,i*e],Gg=(i,e,t)=>i.map(n=>rx(e,t).reduce((s,r,o)=>s+r*n[o],0));function AE(i,e){let n=Array.from({length:6},()=>new Array(7).fill(0));for(let s of i){let r=rx(s.x,s.z);for(let o=0;o<6;o++){for(let a=0;a<6;a++)n[o][a]+=r[o]*r[a];n[o][6]+=r[o]*s.c[e]}}for(let s=0;s<6;s++)n[s][s]+=1e-6;for(let s=0;s<6;s++){let r=s;for(let o=s+1;o<6;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);[n[s],n[r]]=[n[r],n[s]];for(let o=0;o<6;o++)if(o!==s){let a=n[o][s]/n[s][s];for(let l=s;l<=6;l++)n[o][l]-=a*n[s][l]}}return n.map((s,r)=>s[6]/s[r])}function ox(i,e){let n=Math.max(2,Math.round((e.x1-e.x0)*16)),s=Math.max(2,Math.round((e.z1-e.z0)*16)),r=pl(n,s),o=r.getContext("2d"),a=o.createImageData(n,s);for(let l=0,c=0;l<s;l++)for(let h=0;h<n;h++,c+=4){let u=i(e.x0+(h+.5)/16,e.z0+(l+.5)/16);a.data[c]=u[0],a.data[c+1]=u[1],a.data[c+2]=u[2],a.data[c+3]=255}return o.putImageData(a,0,0),r}function ax(i,e,t,n,s){let r=i.getImageData(0,0,e,t),o=r.data,a=ux(3);for(let l=0,c=0;l<t;l++){let h=s?l&1?s*.5:-s*.5:0;for(let u=0;u<e;u++,c+=4){let f=(a()-.5)*n+h;o[c]+=f,o[c+1]+=f,o[c+2]+=f}}i.putImageData(r,0,0)}function RE(i){let e=Math.round((st.x1-st.x0)*vr),t=Math.round((st.z1-st.z0)*vr),n=pl(e,t),s=pl(e,t),r=n.getContext("2d"),o=s.getContext("2d"),a=(l,c)=>[(l-st.x0)*vr,(c-st.z0)*vr];for(let l of i){if(l.flat)Zd(r,l.pts,a,.07*vr,`rgb(${Xd})`);else if(l.y1>0){let c=[l.y0,l.y1].flatMap(h=>l.pts.map(([u,f])=>[u+kg[0]*h,f+kg[1]*h]));Zd(r,hx(c),a,(.035+.17*l.y1)*vr,`rgb(${Xd})`)}l.core&&Zd(o,l.pts,a,(l.blur??.03)*vr,`rgba(${Xd},${l.core})`)}return{plume:n,ao:s}}function lx(i,e,t,n=1){let s=(st.x0-t.x0)*ti,r=(st.z0-t.z0)*ti,o=(st.x1-st.x0)*ti,a=(st.z1-st.z0)*ti;i.save(),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=lE*n,i.drawImage(e.plume,s,r,o,a),i.globalAlpha=n,i.drawImage(e.ao,s,r,o,a),i.restore()}function Zd(i,e,t,n,s){let r=n>.5?2e4:0;i.save(),r?(i.shadowColor=s,i.shadowBlur=n,i.shadowOffsetX=r,i.fillStyle="#000"):i.fillStyle=s,i.beginPath(),e.forEach(([o,a],l)=>{let[c,h]=t(o,a);l?i.lineTo(c-r,h):i.moveTo(c-r,h)}),i.closePath(),i.fill(),i.restore()}function CE(){return Qd(640,360,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t*.66);n.addColorStop(0,"#202020"),n.addColorStop(.7,"#8C8C8C"),n.addColorStop(1,"#B4B4B4"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=i.createRadialGradient(e*.64,t*.58,0,e*.64,t*.58,t*.42);s.addColorStop(0,"rgba(255,255,255,0.95)"),s.addColorStop(.08,"rgba(255,255,255,0.75)"),s.addColorStop(.1,"rgba(255,255,255,0.3)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,e,t),[[.6,"#6E6E6E","#555555",.05],[.7,"#474747","#333333",.07],[.82,"#2A2A2A","#181818",.06]].forEach(([a,l,c,h],u)=>{let f=i.createLinearGradient(0,t*a,0,t);f.addColorStop(0,l),f.addColorStop(1,c),i.fillStyle=f,i.beginPath(),i.moveTo(0,t);for(let d=0;d<=e;d+=8)i.lineTo(d,t*(a+h*Math.sin(d/e*Math.PI*(1.3+u*.7)+u*1.9)+h*.4*Math.sin(d/e*Math.PI*4.1+u)));i.lineTo(e,t),i.closePath(),i.fill()});let o=i.createLinearGradient(0,0,e*.6,t);o.addColorStop(0,"rgba(255,255,255,0.06)"),o.addColorStop(.5,"rgba(255,255,255,0.015)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,e,t)})}function cx(i,e){let t=new lt;t.name=e,i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(r=>{if(r.isMesh){if(r.material.map||r.userData.keep){s.push(r);return}n.has(r.material)||n.set(r.material,[]),n.get(r.material).push([r.geometry,r.matrixWorld])}});for(let[r,o]of n)t.add(new ze(IE(o),r));for(let r of s)r.matrixWorld.decompose(r.position,r.quaternion,r.scale),r.removeFromParent(),t.add(r);return t}function IE(i){let e=i.map(([a,l])=>{let c=a.index?a.toNonIndexed():a.clone();for(let h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);return c.applyMatrix4(l)}),t=e.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(t*3),s=new Float32Array(t*3),r=0;for(let a of e)n.set(a.attributes.position.array,r),s.set(a.attributes.normal.array,r),r+=a.attributes.position.count*3,a.dispose();let o=new vt;return o.setAttribute("position",new Vt(n,3)),o.setAttribute("normal",new Vt(s,3)),o.computeBoundingSphere(),o}function PE(i,e){let t=[],n=[],s=i.reduce((a,l)=>a+l[0],0)/i.length,r=i.reduce((a,l)=>a+l[1],0)/i.length;for(let a=0;a<i.length;a++){let[l,c]=i[a],[h,u]=i[(a+1)%i.length],f=h-l,d=u-c;if(Math.hypot(f,d)<1e-6)continue;let p=d,x=-f;p*((l+h)/2-s)+x*((c+u)/2-r)<0&&(p=-p,x=-x);let m=Math.hypot(p,x);p/=m,x/=m;let g=[l,0,c],y=[l,e,c],w=[h,0,u],v=[h,e,u],S=-d*p+f*x>0?[g,w,v,g,v,y]:[g,v,w,g,y,v];for(let M of S)t.push(...M),n.push(p,0,x)}let o=new vt;return o.setAttribute("position",new Je(t,3)),o.setAttribute("normal",new Je(n,3)),o}function jd(i,e,t){let n=new Es,s=i/2-t,r=e/2-t;return n.moveTo(-s,-e/2),n.lineTo(s,-e/2),n.absarc(s,-r,t,-Math.PI/2,0,!1),n.lineTo(i/2,r),n.absarc(s,r,t,0,Math.PI/2,!1),n.lineTo(-s,e/2),n.absarc(-s,r,t,Math.PI/2,Math.PI,!1),n.lineTo(-i/2,-r),n.absarc(-s,-r,t,Math.PI,Math.PI*1.5,!1),n}function LE(i,e,t,n,s,r){i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function br(i,e,t,n,s){let r=Math.cos(s),o=Math.sin(s);return[i+t*r+n*o,e-t*o+n*r]}function Pn(i,e,t,n,s=0){return[[-t/2,-n/2],[t/2,-n/2],[t/2,n/2],[-t/2,n/2]].map(([r,o])=>br(i,e,r,o,s))}function jh(i,e,t,n){return Array.from({length:n},(s,r)=>[i+t*Math.cos(r/n*Math.PI*2),e+t*Math.sin(r/n*Math.PI*2)])}function hx(i){let e=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),t=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of e){for(;n.length>=2&&t(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of e.reverse()){for(;s.length>=2&&t(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function pl(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,t}function Qd(i,e,t){let n=pl(i,e);t(n.getContext("2d",{willReadFrequently:!0}),i,e);let s=new di(n);return s.colorSpace=it,s.anisotropy=8,s}function ux(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var NE=20;var ii=.36,rs=1.6;var ss=new Q(9.05,-2.6),DE=/^(desk|screen|lounge)_(\d{2})$/,FE=/^lamp_(\d{2})$/,Qh=["floor_open","floor_closed","roof","elevator_shaft","elevator_cabin"];async function mx(i){let e=null;try{if(new URLSearchParams(location.search).get("placeholder")==="1")throw new Error("?placeholder=1");let o=await Promise.race([new Lo().loadAsync(`${i}/office.glb`),new Promise((a,l)=>setTimeout(()=>l(new Error("timeout")),25e3))]);o.scene.updateMatrixWorld(!0),o.scene.getObjectByName("floor_open")?e=o.scene:console.info("[office] office.glb has no floor_open (v1 file): using the procedural v2 placeholder")}catch(o){console.warn("[office] office.glb failed to load, using the procedural placeholder:",o.message)}let t=!e||Qh.some(o=>!e.getObjectByName(o))?px():null,n={},s=[];for(let o of Qh){let a=e&&e.getObjectByName(o);a?n[o]=a:(n[o]=t.templates[o],s.push(o))}if(e){for(let o of Qh)s.includes(o)||UE(n[o]);s.length&&console.warn("[office] placeholder used for missing nodes:",s.join(", "))}let r=dx(n.floor_open);if(r.desks.filter(Boolean).length<NE){console.warn("[office] floor_open has fewer than 20 desk_NN empties: using placeholder floor_open");let o=t||px();return n.floor_open=o.templates.floor_open,fx(n,dx(n.floor_open),o.nightMaps,"placeholder")}return fx(n,r,t?t.nightMaps:new Map,e?s.length?"glb+placeholder":"glb":"placeholder")}function fx(i,e,t,n){let s=null;try{new URLSearchParams(location.search).get("floorstyle")!=="0"&&(s=jg(i.floor_open,e.lounges))}catch(r){console.warn("[office] floor styles skipped:",r.message)}return{templates:i,spots:e,nightMaps:t,source:n,style:s}}function UE(i){let e=new Map;i.traverse(t=>{if(!t.isMesh)return;let n=OE(t);if(!n)return;t.userData.bakedName=n;let s=t.material;if(!e.has(s)){let r=s.map||s.emissiveMap||s.lightMap||null;r&&(r.colorSpace=it),e.set(s,new Mt({map:r,color:r?16777215:s.color,name:s.name}))}t.material=e.get(s)})}function OE(i){for(let e=i;e;e=e.parent)if(e.name&&e.name.startsWith("baked_"))return e.name;return null}function dx(i){let e={desks:[],screens:[],lounges:[],lamps:[]};i.updateMatrixWorld(!0);let t=new $e().copy(i.matrixWorld).invert(),n=new $e,s=new I,r=new mn,o=new I,a=new I;return i.traverse(l=>{let c=DE.exec(l.name),h=FE.exec(l.name);if(!c&&!h)return;if(n.multiplyMatrices(t,l.matrixWorld).decompose(s,r,o),h){e.lamps[Number(h[1])-1]=s.clone();return}a.set(0,0,1).applyQuaternion(r);let u={pos:s.clone(),yaw:Math.atan2(a.x,a.z)};(c[1]==="desk"?e.desks:c[1]==="screen"?e.screens:e.lounges)[Number(c[2])-1]=u}),e}var ep=.42,gx=[-3.4,.8],xx=[-5.7,-3.9,-2.1,-.3,1.5],eu=-2.1,_x=8.8,yx=1.1,vx=[[-5,-3.4],[-2.1,-3.4],[.8,-3.4],[-5,.8],[-2.1,.8],[.8,.8]];function Ln(i,e=.7,t=0,n=""){return new Gt({color:i,roughness:e,metalness:t,name:n})}function St(i,e,t,n,s,r,o,a){let l=new ze(new xn(t,n,s),e);return l.position.set(r,o,a),i.add(l),l}function ni(i,e,t,n,s,r,o,a,l=28){let c=new ze(new On(t,n,s,l),e);return c.position.set(r,o,a),i.add(c),c}function Fo(i,e,t,n,s,r=0){let o=new bt;return o.name=e,o.position.set(t,n,s),o.rotation.y=r,i.add(o),o}function Uo(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new di(n);return s.colorSpace=it,s.anisotropy=8,s}function px(){let i={white:Ln(16053232,.8),oak:Ln(13215100,.6),black:Ln(1842206,.45,.3),fabric:Ln(14341839,1),laptop:Ln(13225168,.35,.75),sofa:Ln(13486529,.95),armchair:Ln(3815998,.8),pot:Ln(16184818,.55),leaf1:Ln(3963719,.75),leaf2:Ln(5937752,.75),leaf3:Ln(3107390,.75),trunk:Ln(7032634,.8),mug:Ln(16777215,.4),counter:Ln(15394785,.6),glass:new Gt({color:14083310,roughness:.05,transparent:!0,opacity:.14,side:en,depthWrite:!1}),shaftGlass:new Gt({color:14083310,roughness:.05,transparent:!0,opacity:.16,side:en,depthWrite:!1})},e=()=>new Gt({name:"night_lamp",color:2762532,emissive:16760944,emissiveIntensity:0,roughness:.5}),t=()=>new Gt({name:"night_screen",color:1316635,emissive:10473727,emissiveIntensity:0,roughness:.3}),n=new Map,s={},r=new lt;r.name="floor_open",s.floor_open=r,St(r,i.white,16.4,ii,12.4,0,-ii/2,0).name="slab";let o=BE();n.set("baked_floor",o.night);let a=new ze(new Ht(16,12).rotateX(-Math.PI/2),new Mt({map:o.day,name:"baked_floor"}));a.name="baked_floor",a.position.y=.002,r.add(a),St(r,i.white,.2,2.7,12.4,-8.1,1.35,0);let l=kE();n.set("baked_wall_left",l.night);let c=new ze(new Ht(12,2.7).rotateY(Math.PI/2),new Mt({map:l.day,name:"baked_wall_left"}));c.name="baked_wall_left",c.position.set(-7.995,1.35,0),r.add(c);let h=new ze(new Ht(16,2.7),i.glass);h.position.set(0,1.35,-6),r.add(h);for(let M=-8;M<=8.001;M+=2)St(r,i.black,.07,2.7,.08,M,1.35,-6);St(r,i.black,16.2,.07,.1,0,2.7,-6),St(r,i.black,16,.08,.1,0,.04,-6);let u=(M,A,_,E,R)=>{let P=new ze(new Ht(A,_).rotateY(Math.PI/2),new Mt({color:1382171,name:M}));return P.name=M,P.position.set(-7.96,R,E),r.add(P),P};u("wall_screen",2.6,1.46,-4.3,1.5),u("task_board",3,1.5,.1,1.45);for(let[M,A,_,E]of[[2.68,1.54,-4.3,1.5],[3.08,1.58,.1,1.45]])St(r,i.black,.03,A,M,-7.985,E,_);let f=[];for(let M=0;M<2;M++){let A=gx[M];St(r,i.oak,_x,.05,yx,eu,.725,A);for(let _ of[-4.1,-1.4,1.4,4.1])for(let E of[-1,1])St(r,i.black,.05,.7,.05,eu+_,.35,A+E*.48);for(let _ of[-4.1,4.1])St(r,i.black,.04,.04,.96,eu+_,.1,A);for(let _=0;_<10;_++){let E=M*10+_+1,R=Math.floor(_/2),P=_%2===0,L=xx[R],k=P?-1:1;ni(r,i.fabric,.26,.29,ep,L,ep/2,A+k*1.05),Fo(r,`desk_${String(E).padStart(2,"0")}`,L,ep,A+k*1.05,P?0:Math.PI);let D=new lt;D.position.set(L,.75,A+k*.3),D.rotation.y=P?Math.PI:0,St(D,i.laptop,.32,.012,.22,0,.006,0);let B=new lt;B.position.set(0,.012,-.11),B.rotation.x=-.3,St(B,i.laptop,.32,.21,.008,0,.105,0);let X=new ze(new Ht(.29,.18),t());X.name=`laptop_screen_${String(E).padStart(2,"0")}`,X.position.set(0,.105,.0045),B.add(X),D.add(B),r.add(D),f.push([E,X,P]),_%3===1&&ni(r,i.mug,.04,.035,.09,L+.38,.795,A+k*.1,14)}}r.updateMatrixWorld(!0);for(let[M,A]of f){let _=A.getWorldPosition(new I),E=A.getWorldQuaternion(new mn);Fo(r,`screen_${String(M).padStart(2,"0")}`,_.x,_.y,_.z).quaternion.copy(E)}vx.forEach(([M,A],_)=>{let E=new lt;E.position.set(M,2.05,A),ni(E,i.black,.09,.2,.2,0,.06,0,24),ni(E,i.black,.008,.008,.9,0,.6,0,6);let R=new ze(new ar(.075,16,12),e());R.position.y=-.07,E.add(R),r.add(E),Fo(r,`lamp_${String(_+1).padStart(2,"0")}`,M,1.95,A)}),St(r,i.sofa,2.7,.42,.95,5.9,.21,.05),St(r,i.sofa,2.7,.52,.24,5.9,.68,-.36);for(let M of[-1,1])St(r,i.sofa,.26,.62,.95,5.9+M*1.22,.31+.1,.05);for(let M=0;M<3;M++)St(r,i.sofa,.8,.1,.66,5.05+M*.85,.47,.12);[[5.05,0],[5.9,1],[6.75,2]].forEach(([M],A)=>Fo(r,`lounge_0${A+1}`,M,.52,.12,0));let d=(M,A,_)=>{let E=new lt;E.position.set(M,0,2.1),E.rotation.y=A,St(E,i.armchair,.9,.38,.9,0,.19,0),St(E,i.armchair,.2,.55,.9,-.35,.55,0);for(let R of[-1,1])St(E,i.armchair,.9,.2,.14,0,.5,R*.38);r.add(E),Fo(r,_,M,.42,2.1,A)};d(4.15,Math.PI/2,"lounge_04"),d(7.65,-Math.PI/2,"lounge_05"),ni(r,i.oak,.6,.6,.04,5.9,.38,2.1,40),ni(r,i.black,.04,.04,.36,5.9,.18,2.1,10),St(r,i.counter,3.6,1,.6,6,.5,-5.6),St(r,i.oak,3.7,.05,.7,6,1.025,-5.6),St(r,i.black,.4,.4,.3,4.9,1.25,-5.7),ni(r,i.mug,.04,.035,.09,5.5,1.095,-5.5,14),ni(r,i.mug,.04,.035,.09,5.65,1.095,-5.45,14),ni(r,i.black,.2,.2,.05,6.1,.66,-4.8,20),ni(r,i.black,.03,.03,.64,6.1,.33,-4.8,8),Fo(r,"lounge_06",6.1,.68,-4.8,0);let p=(M,A,_)=>{let E=new lt;E.position.set(M,0,A),E.scale.setScalar(_),ni(E,i.pot,.3,.22,.6,0,.3,0),ni(E,i.trunk,.04,.05,.9,0,.9,0,8),[[0,1.55,0,.5,i.leaf1],[.3,1.35,.15,.36,i.leaf2],[-.28,1.4,-.12,.34,i.leaf3],[.05,1.95,.05,.34,i.leaf2]].forEach(([R,P,L,k,D])=>{let B=new ze(new Ua(k,2),D);B.position.set(R,P,L),E.add(B)}),r.add(E)};p(-7.2,5.2,1.25),p(7.6,-3.4,1),p(7.5,5,1.2);let x=new lt;x.name="floor_closed",s.floor_closed=x,St(x,i.white,16.4,ii,12.4,0,-ii/2,0);let m=zE(),g=new Gt({name:"night_windows",map:m.diffuse,emissiveMap:m.emissive,emissive:16777215,emissiveIntensity:0,roughness:.22,metalness:.25});m.diffuse.wrapS=m.emissive.wrapS=Kn,[[0,6.2,0,16.4],[Math.PI,-6.2,0,16.4],[Math.PI/2,0,8.2,12.4],[-Math.PI/2,0,-8.2,12.4]].forEach(([M,A,_,E],R)=>{let P=new Ht(E,1.24),L=P.attributes.uv,k=R*.29%1;for(let B=0;B<L.count;B++)L.setX(B,L.getX(B)*(E/25.6)+k);let D=new ze(P,g);D.rotation.y=M,D.position.set(M===Math.PI/2?8.2:M===-Math.PI/2?-8.2:0,.62,A),x.add(D)});for(let M of[-1,1])for(let A of[-1,1])St(x,i.counter,.12,1.24,.12,M*8.2,.62,A*6.2);let w=new lt;w.name="roof",s.roof=w,St(w,i.white,16.4,ii,12.4,0,ii/2,0);for(let[M,A,_,E]of[[16.4,.16,0,6.12],[16.4,.16,0,-6.12],[.16,12.4,8.12,0],[.16,12.4,-8.12,0]])St(w,i.white,M,.34,A,_,ii+.17,E);for(let[M,A,_,E,R]of[[1.6,.8,1.1,-4,-2],[1.6,.8,1.1,-1.8,-2],[1.2,.6,1.2,4,2.5],[2.2,1.6,2,5.5,-3.5]])St(w,i.counter,M,A,_,E,ii+A/2,R),St(w,i.black,M*.8,.05,_*.8,E,ii+A+.02,R);let v=new lt;v.name="elevator_shaft",v.position.set(ss.x,0,ss.y),s.elevator_shaft=v;for(let M of[-1,1])for(let A of[-1,1])St(v,i.black,.06,1,.06,M*.72,.5,A*.72);for(let[M,A,_]of[[0,0,.72],[Math.PI,0,-.72],[Math.PI/2,.72,0],[-Math.PI/2,-.72,0]]){let E=new ze(new Ht(1.44,1),i.shaftGlass);E.rotation.y=M,E.position.set(A,.5,_),v.add(E)}let S=new lt;S.name="elevator_cabin",S.position.set(ss.x,0,ss.y),s.elevator_cabin=S,St(S,i.counter,1.3,.06,1.3,0,.03,0);for(let M of[-1,1])for(let A of[-1,1])St(S,i.black,.05,2.2,.05,M*.625,1.1,A*.625);for(let[M,A,_,E]of[[1.3,.05,0,.625],[1.3,.05,0,-.625],[.05,1.3,.625,0],[.05,1.3,-.625,0]])St(S,i.black,M,.05,A,_,2.175,E);for(let[M,A,_]of[[0,0,.625],[Math.PI,0,-.625],[Math.PI/2,.625,0],[-Math.PI/2,-.625,0]]){let E=new ze(new Ht(1.25,2.1),i.shaftGlass);E.rotation.y=M,E.position.set(A,1.1,_),S.add(E)}for(let M of Qh)s[M].traverse(A=>{A.isMesh&&!A.userData.bakedName&&/^baked_/.test(A.name)&&(A.userData.bakedName=A.name)});return{templates:s,nightMaps:n}}var si=100,yn=i=>(i+8)*si,vn=i=>(i+6)*si;function BE(){let i=16*si,e=12*si,t=[];for(let r of gx){t.push(["rect",eu,r,_x+.2,yx+.1]);for(let o=0;o<10;o++)t.push(["circle",xx[Math.floor(o/2)],r+(o%2?1.05:-1.05),.3,.3])}t.push(["rect",5.9,.05,2.9,1],["rect",4.15,2.1,.95,.95],["rect",7.65,2.1,.95,.95],["circle",5.9,2.1,.62,.62],["rect",6,-5.6,3.7,.7],["circle",-7.2,5.2,.4,.4],["circle",7.6,-3.4,.35,.35],["circle",7.5,5,.4,.4]);let n=Uo(i,e,r=>{r.fillStyle="#F0ECE5",r.fillRect(0,0,i,e);let o=r.createLinearGradient(0,0,i,e);o.addColorStop(0,"#E9E4DC"),o.addColorStop(1,"#F6F3EE"),r.fillStyle=o,r.fillRect(0,0,i,e),r.fillStyle="#DDD9D0",r.beginPath(),r.arc(yn(5.9),vn(1.3),2.25*si,0,7),r.fill(),r.fillStyle="#E6E2DA",r.beginPath(),r.arc(yn(5.9),vn(1.3),1.75*si,0,7),r.fill(),r.save(),r.filter="blur(18px)";for(let c=-8;c<8;c+=2)r.fillStyle="rgba(255,250,238,0.55)",r.beginPath(),r.moveTo(yn(c+.15),vn(-6)),r.lineTo(yn(c+1.85),vn(-6)),r.lineTo(yn(c+1.85+5.2),vn(-6+3.9)),r.lineTo(yn(c+.15+5.2),vn(-6+3.9)),r.fill();r.restore(),tp(r,t,"rgba(70,62,52,0.30)",.45,.55,14),tp(r,t,"rgba(60,52,44,0.28)",0,0,5);let a=r.createLinearGradient(0,0,130,0);a.addColorStop(0,"rgba(90,80,70,0.30)"),a.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=a,r.fillRect(0,0,130,e);let l=r.createLinearGradient(0,0,0,90);l.addColorStop(0,"rgba(90,80,70,0.18)"),l.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=l,r.fillRect(0,0,i,90)}),s=Uo(i,e,r=>{r.fillStyle="#222A3E",r.fillRect(0,0,i,e),r.fillStyle="#2A3248",r.beginPath(),r.arc(yn(5.9),vn(1.3),2.25*si,0,7),r.fill(),r.save(),r.filter="blur(26px)";for(let a=-8;a<8;a+=2)r.fillStyle="rgba(120,150,230,0.10)",r.beginPath(),r.moveTo(yn(a+.15),vn(-6)),r.lineTo(yn(a+1.85),vn(-6)),r.lineTo(yn(a+1.85+5.2),vn(-6+3.9)),r.lineTo(yn(a+.15+5.2),vn(-6+3.9)),r.fill();r.restore();for(let[a,l]of vx.concat([[5.9,1.2]])){let c=2.3*si,h=r.createRadialGradient(yn(a+.3),vn(l+.4),0,yn(a+.3),vn(l+.4),c);h.addColorStop(0,"rgba(255,196,130,0.5)"),h.addColorStop(1,"rgba(255,196,130,0)"),r.fillStyle=h,r.fillRect(yn(a+.3)-c,vn(l+.4)-c,c*2,c*2)}tp(r,t,"rgba(5,7,14,0.55)",.35,.45,12);let o=r.createLinearGradient(0,0,130,0);o.addColorStop(0,"rgba(0,0,0,0.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(0,0,130,e)});return{day:n,night:s}}function tp(i,e,t,n,s,r){i.save(),i.filter=`blur(${r}px)`,i.fillStyle=t;for(let[o,a,l,c,h]of e)o==="rect"?i.fillRect(yn(a+n-c/2),vn(l+s-h/2),c*si,h*si):(i.beginPath(),i.ellipse(yn(a+n),vn(l+s),c*si,h*si,0,0,7),i.fill());i.restore()}function kE(){let t=Uo(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#F7F6F3"),r.addColorStop(.7,"#F2F0EC"),r.addColorStop(1,"#E2DFD9"),s.fillStyle=r,s.fillRect(0,0,1200,270);let o=s.createLinearGradient(1060,0,1200,0);o.addColorStop(0,"rgba(120,110,100,0)"),o.addColorStop(1,"rgba(120,110,100,0.22)"),s.fillStyle=o,s.fillRect(1060,0,140,270)}),n=Uo(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#242A3A"),r.addColorStop(.7,"#2A2F3E"),r.addColorStop(1,"#161A26"),s.fillStyle=r,s.fillRect(0,0,1200,270);for(let o of[300,700]){let a=s.createRadialGradient(o,120,0,o,120,320);a.addColorStop(0,"rgba(255,190,120,0.16)"),a.addColorStop(1,"rgba(255,190,120,0)"),s.fillStyle=a,s.fillRect(o-320,0,640,270)}});return{day:t,night:n}}function zE(){let n=HE(7),s=Uo(1024,64,(o,a,l)=>{let c=o.createLinearGradient(0,0,0,l);c.addColorStop(0,"#9AA7B5"),c.addColorStop(.5,"#6E7C8C"),c.addColorStop(1,"#58687A"),o.fillStyle=c,o.fillRect(0,0,a,l),o.fillStyle="#E8EAED";for(let h=0;h<=16;h++)o.fillRect(h*64-2,0,4,l);o.fillRect(0,0,a,4),o.fillRect(0,l-5,a,5),o.fillRect(0,l*.55,a,2)}),r=Uo(1024,64,(o,a,l)=>{o.fillStyle="#000",o.fillRect(0,0,a,l);for(let c=0;c<16;c++){if(n()>.42)continue;let h=.45+n()*.35;o.fillStyle=`rgb(${Math.round(255*h)},${Math.round(196*h)},${Math.round(120*h)})`,o.fillRect(c*64+5,8,54,l*.55-10),o.fillRect(c*64+5,l*.55+5,54,l*.45-14)}});return{diffuse:s,emissive:r}}function HE(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ls=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,hn=class{constructor(e=0,t=.5){this.x=e,this.v=0,this.target=e,this.response=t,this.delay=0,this.pending=null}to(e,t=0){return t>0?(this.pending=e,this.delay=t):(this.target=e,this.pending=null),this}snap(e){return this.x=this.target=e,this.v=0,this.pending=null,this}step(e){this.pending!==null&&(this.delay-=e,this.delay<=0&&(this.target=this.pending,this.pending=null));let t=Ls?Math.min(this.response,.12):this.response,n=2*Math.PI/Math.max(t,.02),s=this.x-this.target,r=this.v+n*s,o=Math.exp(-n*e);return this.x=this.target+(s+r*e)*o,this.v=(this.v-n*r*e)*o,Math.abs(this.x-this.target)<1e-5&&Math.abs(this.v)<1e-5&&(this.x=this.target,this.v=0),this.x}get settled(){return this.x===this.target&&this.v===0&&this.pending===null}},It=(i,e,t)=>Math.min(t,Math.max(e,i)),xi=(i,e,t)=>{let n=It((t-i)/(e-i),0,1);return n*n*(3-2*n)},ml=(i,e,t)=>i+(e-i)*t;var ri='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',bx={working:"#34C759",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF",idle:"#A1A1A6"},Mx={waiting_user:0,error:0,stuck:0,working:1,done:2,idle:3},VE=/^tsk-\d+$/i,sp=!1,Ex=(async()=>{try{document.fonts&&await Promise.race([Promise.all([document.fonts.load("600 24px Inter","Today Tasks 0123456789"),document.fonts.load("500 24px Inter","Working events"),document.fonts.load("700 24px Inter","0123456789")]).then(()=>document.fonts.ready),new Promise(i=>setTimeout(i,2500))])}catch{}sp=!0})();function Sx(i){let e=(i.task||"").trim();return e&&!VE.test(e)?e:(i.step||"").trim()}function Tx(i){try{let e=i?new Date(i):new Date,t=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Sofia",hour:"2-digit",hour12:!1}).format(e);return Number(t)%24}catch{return new Date().getHours()}}function wx(i,e){let t=document.createElement("canvas");t.width=i,t.height=e;let n=new di(t);return n.colorSpace=it,n.anisotropy=8,n.minFilter=kn,n.generateMipmaps=!0,{c:t,g:t.getContext("2d"),tex:n}}function tu(i,e,t,n,s,r){i.beginPath(),i.moveTo(e+r,t),i.arcTo(e+n,t,e+n,t+s,r),i.arcTo(e+n,t+s,e,t+s,r),i.arcTo(e,t+s,e,t,r),i.arcTo(e,t,e+n,t,r),i.closePath()}function GE(i,e,t,n){let s=String(e).split(/\s+/).filter(Boolean),r=[],o="";for(let a=0;a<s.length;a++){let l=o?`${o} ${s[a]}`:s[a];if(i.measureText(l).width<=t||!o?o=l:(r.push(o),o=s[a]),r.length===n)break}if(r.length<n&&o&&r.push(o),r.length===n&&s.join(" ")!==r.join(" ")){let a=r[n-1];for(;a.length>1&&i.measureText(`${a}\u2026`).width>t;)a=a.slice(0,-1);r[n-1]=`${a.replace(/[\s,.;:]+$/,"")}\u2026`}return r}var nu=class{constructor(e,t){this.screen=e?{mesh:e,...wx(1536,864),S:1.6,W:960,H:540}:null,this.board=t?{mesh:t,...wx(1800,900),S:1.8,W:1e3,H:500}:null;for(let n of[this.screen,this.board])n&&(n.mat=new Mt({map:n.tex,name:n.mesh.name}),n.mesh.material=n.mat,n.drawn=null);this.screen&&(this.screen.mat.toneMapped=!1),this.sig="",this.data=null,this.accent=null,this.lastDraw=-1e9,this.dirty=!1,this.fontsAtDraw=!1}get materials(){return[this.screen?.mat,this.board?.mat].filter(Boolean)}setData(e){let t=this.signature(e);this.data=e,t!==this.sig&&(this.sig=t,this.dirty=!0)}setAccent(e){e!==this.accent&&(this.accent=e,this.dirty=!0,this.lastDraw=-1e9)}accentDot(e,t,n,s,r,o){e.fillText(t,n,s);let a=e.measureText(t).width;return e.fillStyle=this.accent,e.beginPath(),e.arc(n+a+o*1.3,r,o*.42,0,7),e.fill(),n+a+o*2.6}signature(e){let t=[e.floorName,e.hour,e.now];for(let n of e.bots)t.push(n.id,n.effective_status||n.status,Sx(n),n.color,n.today?.events,n.today?.tasks_done,n.today?.working_min,(n.today?.hourly||[]).join(","));return t.join("|")}tick(e,t){if(this.data&&(this.dirty||!this.fontsAtDraw&&sp)&&e-this.lastDraw>1e3&&(this.lastDraw=e,this.dirty=!1,this.fontsAtDraw=sp,this.screen&&this.drawScreen(this.data),this.board&&this.drawBoard(this.data)),this.screen){let n=.86*(1-.84*t);this.screen.mat.color.setRGB(n,n,n)}if(this.board){let n=1-.46*t;this.board.mat.color.setRGB(n,n*.97,n*.93)}}drawScreen(e){let{g:t,tex:n,S:s,W:r,H:o}=this.screen;t.setTransform(s,0,0,s,0,0);let a=t.createLinearGradient(0,0,0,o);a.addColorStop(0,"#14171C"),a.addColorStop(1,"#0B0D10"),t.fillStyle=a,t.fillRect(0,0,r,o);let l=t.createRadialGradient(r*.2,0,0,r*.2,0,r*.7);l.addColorStop(0,"rgba(52,199,89,0.10)"),l.addColorStop(1,"rgba(52,199,89,0)"),t.fillStyle=l,t.fillRect(0,0,r,o);let c=e.bots,h=c.filter(L=>(L.effective_status||L.status)==="working").length,u=np(c,L=>L.today?.events),f=np(c,L=>L.today?.tasks_done),d=np(c,L=>L.today?.working_min)/60,p=new Array(24).fill(0);for(let L of c)for(let k=0;k<24;k++)p[k]+=Number(L.today?.hourly?.[k])||0;t.textBaseline="alphabetic",t.fillStyle="#8E8E93",t.font=`500 32px ${ri}`;let x;this.accent?x=this.accentDot(t,"Today",44,62,51,20):(t.fillText("Today \xB7 ",44,62),x=44+t.measureText("Today \xB7 ").width),t.fillStyle="#F5F5F7",t.font=`650 40px ${ri}`,t.fillText(ip(t,e.floorName||"",744-x),x,62),t.fillStyle="#34C759",t.beginPath(),t.arc(r-52,50,7,0,7),t.fill(),t.fillStyle="rgba(52,199,89,0.25)",t.beginPath(),t.arc(r-52,50,14,0,7),t.fill();let m=[[`${h} of ${c.length}`,"working now"],[String(u),"events today"],[String(f),"tasks done"],[d.toFixed(1),"hours worked"]],g=205,y=14,w=44,v=100;m.forEach(([L,k],D)=>{let B=w+D*(g+y);t.fillStyle="rgba(255,255,255,0.065)",tu(t,B,v,g,108,18),t.fill(),t.fillStyle=D===0?"#34C759":"#F5F5F7",t.font=`700 42px ${ri}`,t.fillText(L,B+20,v+55),t.fillStyle="#8E8E93",t.font=`500 17px ${ri}`,t.fillText(k,B+20,v+86)});let S=44,M=r-88,A=250,_=220;t.fillStyle="#8E8E93",t.font=`500 17px ${ri}`,t.fillText("Events by hour",S,A-4);let E=Math.max(1,...p),R=M/24,P=R*.62;for(let L=0;L<24;L++){let k=S+L*R+(R-P)/2,D=p[L]>0?Math.max(8,p[L]/E*(_-20)):6,B=A+_-D,X=L===e.hour;t.save(),X&&(t.shadowColor="rgba(52,199,89,0.85)",t.shadowBlur=18),t.fillStyle=X?"#34C759":L>e.hour?"rgba(255,255,255,0.08)":p[L]>0?"rgba(52,199,89,0.55)":"rgba(255,255,255,0.10)",tu(t,k,B,P,D,Math.min(5,P/2)),t.fill(),t.restore()}t.fillStyle="#6E6E73",t.font=`500 15px ${ri}`,t.textAlign="center";for(let L of[0,6,12,18])t.fillText(String(L).padStart(2,"0"),S+L*R+R/2,A+_+26);t.fillText("24",S+23*R+R/2+4,A+_+26),t.textAlign="left",n.needsUpdate=!0}drawBoard(e){let{g:t,tex:n,S:s,W:r,H:o}=this.board;t.setTransform(s,0,0,s,0,0),t.fillStyle="#F1F0EC",t.fillRect(0,0,r,o),t.fillStyle="#FAF9F6",t.fillRect(0,0,r,68),t.fillStyle="#E3E0D9",t.fillRect(0,68,r,2),t.fillStyle="#1D1D1F",t.font=`700 34px ${ri}`;let a;this.accent?a=this.accentDot(t,"Tasks",36,49,37,20):(t.fillText("Tasks",36,49),a=36+t.measureText("Tasks ").width),t.fillStyle="#6E6E73",t.font=`600 26px ${ri}`,t.fillText(`${this.accent?"":"\xB7 "}${ip(t,e.floorName||"",420)}`,a,49);let l=[...e.bots].sort((g,y)=>(Mx[g.effective_status||g.status]??3)-(Mx[y.effective_status||y.status]??3)||String(g.name).localeCompare(String(y.name))),c=l.slice(0,8),h=l.length-c.length;h>0&&(t.textAlign="right",t.fillStyle="#515154",t.font=`700 28px ${ri}`,t.fillText(`+${h}`,r-36,49),t.textAlign="left"),c.length||(t.fillStyle="#8E8E93",t.font=`600 28px ${ri}`,t.fillText("Nobody on this floor yet",36,160));let u=4,f=30,d=16,p=90,x=(r-f*2-d*(u-1))/u,m=(o-p-28-d)/2;c.forEach((g,y)=>{let w=f+y%u*(x+d),v=p+Math.floor(y/u)*(m+d),S=g.effective_status||g.status;t.save(),t.shadowColor="rgba(40,36,30,0.18)",t.shadowBlur=14,t.shadowOffsetY=3,t.fillStyle="#FFFFFF",tu(t,w,v,x,m,14),t.fill(),t.restore(),t.fillStyle=g.color||"#A1A1A6",tu(t,w+10,v+12,9,m-24,4.5),t.fill(),t.fillStyle=bx[S]||bx.idle,t.beginPath(),t.arc(w+x-22,v+26,8,0,7),t.fill(),t.fillStyle="#1D1D1F",t.font=`700 25px ${ri}`,t.fillText(ip(t,g.name||"",x-76),w+32,v+36),t.fillStyle="#3A3A3C",t.font=`600 21px ${ri}`,GE(t,Sx(g)||"\u2014",x-52,3).forEach((A,_)=>t.fillText(A,w+32,v+72+_*28))}),n.needsUpdate=!0}};function np(i,e){let t=0;for(let n of i)t+=Number(e(n))||0;return t}function ip(i,e,t){let n=String(e);if(i.measureText(n).width<=t)return n;for(;n.length>1&&i.measureText(`${n}\u2026`).width>t;)n=n.slice(0,-1);return`${n.trimEnd()}\u2026`}var gl=20,Oo=.14,Ax=.4,WE=7,qE=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,XE=2.2,rp=[.2,.26,.42];function YE(i,e){return new lr().loadAsync(`${i}/night/${encodeURIComponent(e)}.jpg`).then(t=>(t.flipY=!1,t.colorSpace=it,t.anisotropy=8,t)).catch(()=>null)}var Mr=class{constructor(e,t,n){this.b=e,this.kind=n,this.root=new lt,this.root.name=`${n}-instance`,this.obj=t.clone(!0),this.root.add(this.obj),this.alpha=1,this.mats=[],this.textures=[],this.screens=[],this.walls=null,this.floorId=null,n!=="shaft"&&n!=="cabin"&&this.obj.position.set(0,0,0);let s=new Map,r=Math.random();if(this.obj.traverse(o=>{if(!o.isMesh)return;let l=(Array.isArray(o.material)?o.material:[o.material]).map(h=>{let u=/^laptop_screen_\d\d$/.test(o.name),f=u?null:s.get(h);return f||(f=h.clone(),u||s.set(h,f),this.register(f,o,r)),f});o.material=Array.isArray(o.material)?l:l[0];let c=/^laptop_screen_(\d\d)$/.exec(o.name);c&&(this.screens[Number(c[1])-1]={mat:l[0],glow:0,target:0})}),n==="open"){let o=this.obj.getObjectByName("wall_screen"),a=this.obj.getObjectByName("task_board");(o||a)&&(this.walls=new nu(o,a))}}register(e,t,n){this.mats.push(e);let s=t.userData.bakedName;if(s&&e.map&&!e.userData.nightPatched&&this.b.patchBaked(e,s),e.name==="night_lamp")e.emissive.getHex()===0&&e.emissive.set(16760944),e.emissiveIntensity=0,this.b.daylight.track(e,"lamp");else if(e.name==="night_windows"){if(e.emissive.getHex()===0&&e.emissive.set(16777215),e.emissiveIntensity=0,e.emissiveMap){let r=e.emissiveMap.clone(),o=e.map?e.map.clone():null;for(let a of[r,o])a&&(a.wrapS=a.wrapT=Kn,a.offset.x=n,a.needsUpdate=!0,this.textures.push(a));e.emissiveMap=r,o&&(e.map=o)}this.b.daylight.track(e,"windows")}else e.name==="night_screen"&&(e.emissive.getHex()===0&&e.emissive.set(10473727),e.emissiveIntensity=0)}setShown(e){this.alpha=e?1:0,this.root.visible=e}dispose(){for(let e of this.mats)this.b.daylight.untrack(e),e.dispose();for(let e of this.textures)e.dispose();this.root.removeFromParent()}},iu=class{constructor({scene:e,daylight:t,assets:n,baseUrl:s,renderer:r}){this.scene=e,this.daylight=t,this.assets=n,this.baseUrl=s,this.renderer=r,this.group=new lt,this.group.name="building",this.group.visible=!1,e.add(this.group),this.introDrop=!1,this.slots=[],this.byId=new Map,this.styles=new Map,this.activeIndex=-1,this.pool=[],this.sig="",this.floorData=null,this.nightRecs=new Map,this.roof=new Mr(this,n.templates.roof,"roof"),this.roofLift=new hn(1,.5),this.group.add(this.roof.root),this.shaft=new Mr(this,n.templates.elevator_shaft,"shaft"),this.cabin=new Mr(this,n.templates.elevator_cabin,"cabin"),this.group.add(this.shaft.root,this.cabin.root),this.setupElevatorGeometry(),this.cabinY=new hn(0,.55),this.shaftTop=new hn(1,.55),this.lampPositions=Array.from({length:6},()=>new I),t.setLampSource(()=>{let o=this.activeOpen();if(!o)return null;let a=this.assets.spots.lamps;for(let l=0;l<6;l++){let c=a[l];this.lampPositions[l].set(c?c.x:0,c?c.y+o.root.position.y:-99,c?c.z:0)}return{positions:a.length?this.lampPositions:[],k:o.alpha}}),this.screenTargets=new Array(20).fill(0);for(let o=0;o<2;o++){let a=new Mr(this,n.templates.floor_open,"open");a.setShown(!1),this.group.add(a.root),this.pool.push(a)}this.pulseT=-1,this.swapped=!0,this.blurPx=0}setupElevatorGeometry(){this.shaftH=1;for(let e of[this.shaft,this.cabin]){e.root.updateMatrixWorld(!0);let t=new Xt().setFromObject(e.obj);if(!Number.isFinite(t.min.y))continue;let n=t.getCenter(new I);e.obj.position.y-=t.min.y,(Math.abs(n.x-ss.x)>1.5||Math.abs(n.z-ss.y)>1.5)&&(e.obj.position.x+=ss.x-n.x,e.obj.position.z+=ss.y-n.z),e===this.shaft&&(this.shaftH=Math.max(.01,t.max.y-t.min.y))}}patchBaked(e,t){e.userData.nightPatched=!0;let n=this.nightRecs.get(t);if(!n){let a=this.assets.nightMaps.get(t),l=t.startsWith("style_");n={name:t,uMap:{value:a||e.map},uTint:{value:new I(...a?[1,1,1]:rp)},dayMap:e.map,tex:null,state:a||l?"static":"idle",since:0},this.nightRecs.set(t,n)}let{uMap:s,uTint:r}=n,o=e.userData.accent?e.accentUniform={value:new pe(1,1,1)}:null;e.onBeforeCompile=a=>{a.uniforms.uNight=this.daylight.uNight,a.uniforms.uNightMap=s,a.uniforms.uNightTint=r,o&&(a.uniforms.uAccent=o),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform sampler2D uNightMap;
uniform vec3 uNightTint;${o?`
uniform vec3 uAccent;`:""}`).replace("#include <map_fragment>",`#ifdef USE_MAP
  vec4 dayC = texture2D( map, vMapUv );
  vec4 nightC = texture2D( uNightMap, vMapUv );
  nightC.rgb *= uNightTint;
  diffuseColor *= mix( dayC, nightC, uNight );
#endif`),o&&(a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= uAccent;`))},e.customProgramCacheKey=()=>o?"bothq-baked-night-accent":"bothq-baked-night"}updateNightMaps(e){let t=this.daylight.night;for(let n of this.nightRecs.values())n.state!=="static"&&(t>.01?(n.since=e,n.state==="idle"&&(n.state="loading",YE(this.baseUrl,n.name).then(s=>{if(!s){n.state="missing";return}n.dayMap&&(s.wrapS=n.dayMap.wrapS,s.wrapT=n.dayMap.wrapT,s.channel=n.dayMap.channel),n.tex=s,n.uMap.value=s,n.uTint.value.set(1,1,1),n.state="ready",n.name==="baked_floor"&&this.styleNight(s.image)}))):n.state==="ready"&&e-n.since>3e4&&(n.uMap.value=n.dayMap,n.uTint.value.set(...rp),n.tex.dispose(),n.tex=null,n.state="idle",n.name==="baked_floor"&&this.styleNight(null)))}styleNight(e){let t=e&&this.assets.style?sx(e):new Map;for(let n of this.nightRecs.values()){if(!n.name.startsWith("style_"))continue;n.styleNight&&(n.styleNight.dispose(),n.styleNight=null);let s=t.get(n.name);s?(n.styleNight=s,n.uMap.value=s,n.uTint.value.set(1,1,1)):(n.uMap.value=n.dayMap,n.uTint.value.set(...rp))}}setFloors(e){let t=e.length?e:[{id:"_",name:"",order:1}],n=t.map(r=>r.id).join("|");if(t.forEach((r,o)=>{let a=this.byId.get(r.id);a&&(a.name=r.name,a.index=o)}),n===this.sig)return;this.sig=n,this.styles=this.assets.style?$g(t):new Map;let s=new Map(t.map((r,o)=>[r.id,o]));for(let r of this.slots)s.has(r.id)||this.disposeSlot(r);this.slots=t.map((r,o)=>{let a=this.byId.get(r.id);return a||(a={id:r.id,name:r.name,index:o,closed:new Mr(this,this.assets.templates.floor_closed,"closed"),open:null,lift:new hn(1,.5),showOpen:!1},this.group.add(a.closed.root),a.closed.setShown(!1),this.byId.set(r.id,a)),a.index=o,a});for(let[r]of[...this.byId])s.has(r)||this.byId.delete(r);this.activeIndex=Math.min(this.activeIndex,this.slots.length-1),this.activeSlot&&this.applyStyle(this.activeSlot),this.retarget(!1)}applyStyle(e){let t=this.styles.get(e.id);if(!t||!e.open||(Zg(e.open.obj,t),e.open.walls?.setAccent(t.accent),e!==this.activeSlot))return;let n=this.assets.spots.lounges;this.assets.style.layouts[t.layout].forEach((s,r)=>{let o=n[r];(!o||o.pos.distanceToSquared(s.pos)>1e-6||o.yaw!==s.yaw)&&(n[r]={pos:s.pos.clone(),yaw:s.yaw,lounge:!0})})}disposeSlot(e){e.closed.dispose(),e.open&&(this.pool=this.pool.filter(t=>t!==e.open),e.open.dispose())}get floorCount(){return this.slots.length}get activeSlot(){return this.slots[this.activeIndex]||null}get activeId(){return this.activeSlot?.id??null}get activeY(){return Math.max(0,this.activeIndex)*rs}activeOpen(){return this.activeSlot?.open||null}setActive(e,{intro:t=!1}={}){let n=this.slots.findIndex(o=>o.id===e);if(n<0)return!1;let s=this.activeIndex>=0&&n!==this.activeIndex;this.activeIndex=n;let r=this.slots[n];if(this.acquireOpen(r),this.applyStyle(r),t){for(let o of this.slots)o.lift.snap(1);this.roofLift.snap(1),this.group.visible=!0,this.introDrop=!0}return s&&!t&&!qE?(this.pulseT=0,this.swapped=!1):this.applyShown(),this.retarget(t),t&&(this.cabinY.snap(this.cabinY.target),this.shaftTop.snap(this.shaftTop.target)),!0}applyShown(){this.slots.forEach((e,t)=>{e.showOpen=t===this.activeIndex&&!!e.open})}retarget(e){let t=this.activeIndex;t<0||(this.slots.forEach((n,s)=>{s<=t?n.lift.to(0,e?.05+(t-s)*.08:0):n.lift.to(1)}),this.roofLift.to(1),this.cabinY.to(t*rs),this.shaftTop.to(Math.min(this.slots.length*rs,t*rs+XE+.35)))}acquireOpen(e){if(e.open)return e.open;let t=this.pool.find(s=>!this.slots.some(r=>r.open===s))||this.pool.reduce((s,r)=>r.alpha<s.alpha?r:s,this.pool[0]),n=this.slots.find(s=>s.open===t);return n&&(n.open=null,n.showOpen=!1),t.onSteal?.(),e.open=t,t.floorId=e.id,t.screens.forEach(s=>{s.glow=0,s.target=0}),t}setScreens(e){this.screenTargets=e}setDisplayData(e){this.floorData=e,this.activeOpen()?.walls?.setData(e)}prewarm(e){let t=[this.roof,this.shaft,this.cabin,...this.slots.map(a=>a.closed),...this.pool],n=t.map(a=>a.root.visible);t.forEach(a=>{a.root.visible=!0});let s=this.pool.flatMap(a=>Jg(a.obj)).filter(a=>!a.visible);s.forEach(a=>{a.visible=!0});let r=new zt(1,1,{type:Jt}),o=this.renderer.getRenderTarget();this.renderer.setRenderTarget(r),this.renderer.compile(this.scene,e),this.renderer.setRenderTarget(o),r.dispose(),s.forEach(a=>{a.visible=!1}),t.forEach((a,l)=>{a.root.visible=n[l]})}update(e,t){let n=this.activeIndex,s=this.daylight.night,r=this.slots.length;this.pulseT>=0&&(this.pulseT+=e,!this.swapped&&this.pulseT>=Oo&&(this.swapped=!0,this.applyShown()),this.pulseT>=Oo+Ax&&(this.pulseT=-1));let o=this.pulseT<0?0:this.pulseT<Oo?xi(0,Oo,this.pulseT):1-xi(Oo,Oo+Ax,this.pulseT),a=Math.round(o*WE*4)/4;a!==this.blurPx&&(this.blurPx=a,this.renderer.domElement.style.filter=a?`blur(${a}px)`:"");for(let d of this.slots){d.lift.step(e);let p=d.lift.x*(gl+Math.max(0,d.index-n)*rs),x=p<gl*.8,m=d.index*rs+p;d.closed.root.position.y=m,d.closed.setShown(x&&!d.showOpen),d.open&&(d.open.root.position.y=m,d.open.setShown(x&&d.showOpen),d.open.alpha&&this.updateOpen(d,e,t,s))}this.roofLift.step(e);let l=this.roofLift.x*(gl+Math.max(0,r-n)*rs);this.roof.root.position.y=r*rs-ii+l,this.roof.setShown(l<gl*.8),this.cabinY.step(e),this.shaftTop.step(e);let c=this.slots[n];this.introDrop&&(!c||c.lift.x<.001&&c.lift.pending===null)&&(this.introDrop=!1);let h=this.introDrop?c.lift.x*gl:0;this.cabin.root.position.y=this.cabinY.x+h;let u=-ii,f=Math.max(u+.1,this.shaftTop.x);this.shaft.root.position.y=u+h,this.shaft.root.scale.y=(f-u)/this.shaftH,this.updateNightMaps(t)}updateOpen(e,t,n,s){let r=e.open,o=1-Math.exp(-t*3.2),a=this.slots[this.activeIndex]===e;r.screens.forEach((l,c)=>{l&&(l.target=a&&this.screenTargets[c]||0,l.glow+=(l.target-l.glow)*o,l.mat.emissiveIntensity=l.glow*(.32+1.35*s)+s*.03)}),r.walls?.tick(n,s)}};var Rx=.32,Cx=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,$E=Cx?3:5,KE=Cx?5:10,ZE=`
#include <packing>
#define BQ_LEVEL ${Rx.toFixed(3)}
#define BQ_SEARCH ${$E}
#define BQ_TAPS ${KE}
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
}`,JE=`
#ifdef USE_MAP
  {
    vec3 bqD = texture2D( map, vMapUv ).rgb;
    diffuseColor.rgb += diffuse * ( bqRelight( bqD ) - bqD ) * bqDay;
    if ( bqLamp.r + bqLamp.g + bqLamp.b > 0.0 ) diffuseColor.rgb += bqLampPools();
  }
#endif`,op=i=>(i/=255,i<=.04045?i/12.92:((i+.055)/1.055)**2.4),ap=new WeakMap;function jE(i){if(ap.has(i))return ap.get(i);let e=new I(.83,.82,.78);try{let t=i.image,n=96,s=Math.max(1,Math.round(96*t.height/t.width)),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(t,0,0,n,s);let a=o.getImageData(0,0,n,s).data,l=[];for(let u=0;u<a.length;u+=4){let f=op(a[u]),d=op(a[u+1]),p=op(a[u+2]);l.push([.2126*f+.7152*d+.0722*p,f,d,p])}l.sort((u,f)=>u[0]-f[0]);let c=Math.floor(l.length*.88),h=Math.max(c+1,Math.floor(l.length*.98));e.set(0,0,0);for(let u=c;u<h;u++)e.x+=l[u][1],e.y+=l[u][2],e.z+=l[u][3];e.divideScalar(h-c)}catch{}return ap.set(i,e),e}function Ix(i){let e={bqSun:{value:new pe(0,0,0)},bqDir:{value:new I(0,1,0)},bqDay:{value:1},bqShadowMap:{value:null},bqShadowMatrix:{value:i.shadow.matrix},bqShadowInfo:{value:new _t(1,1,1,0)},bqLampPos:{value:Array.from({length:6},()=>new I(0,-99,0))},bqLamp:{value:new pe(0,0,0)},bqLampCone:{value:new Q(.7,.9)},bqTable:{value:Array.from({length:4},()=>new _t)},bqTableY:{value:new _t(-99,-99,-99,-99)}};return{relight(t){if(t.userData.sunRelit||!t.map)return;t.userData.sunRelit=!0;let n={value:jE(t.map)},s=t.onBeforeCompile,r=t.customProgramCacheKey;t.onBeforeCompile=(o,a)=>{s.call(t,o,a),Object.assign(o.uniforms,e,{bqAlbedo:n}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBqWorld;
varying vec3 vBqNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
	vBqWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
	vBqNormal = normalize( mat3( modelMatrix ) * normal );`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${ZE}`).replace("#include <color_fragment>",`${JE}
#include <color_fragment>`)},t.customProgramCacheKey=()=>`${r.call(t)}|sun`,t.needsUpdate=!0},update(t,n,s,r){e.bqDir.value.copy(t),e.bqSun.value.setRGB(...n,it).multiplyScalar(Math.max(0,s)*(1/Rx-1)),e.bqDay.value=r;let o=i.shadow.map,a=i.shadow.camera;e.bqShadowMap.value=o?o.texture:null,e.bqShadowInfo.value.set(a.right-a.left,a.top-a.bottom,a.far-a.near,o?1:0)},lamps(t,n,s,r,o){e.bqLampPos.value.forEach((a,l)=>{t?.[l]?a.copy(t[l]):a.set(0,-99,0)}),e.bqLamp.value.copy(n),e.bqLampCone.value.set(Math.cos(s),Math.cos(s*(1-r))),e.bqTable.value.forEach((a,l)=>{let c=o[l];c&&a.set(c.x0,c.z0,c.x1,c.z1)}),e.bqTableY.value.set(...[0,1,2,3].map(a=>o[a]?o[a].y:-99))}}}var mt=i=>{let e=new pe(i);return e.convertLinearToSRGB(),[e.r,e.g,e.b]},ko=i=>i,QE=ko({night:0,bake:0,lamps:0,windows:0,sunI:2.4,sunC:mt("#FFF1DE"),hemiI:1.05,hemiSky:mt("#F3F2F0"),hemiGnd:mt("#CFC8BE"),fillI:.35,fillC:mt("#E6EEFF"),envI:.5,exposure:1.05,shadow:.34,tint:[1.42,1.43,1.46],floorSun:.72,floorSunC:mt("#FFF6EC"),glassC:mt("#D2E4F2"),glassA:.22,glassE:.12}),eT=ko({night:0,bake:0,lamps:0,windows:.05,sunI:2.6,sunC:mt("#FFEFD9"),hemiI:1,hemiSky:mt("#E1EAFF"),hemiGnd:mt("#C6CAD2"),fillI:.38,fillC:mt("#DCE6FF"),envI:.5,exposure:1.07,shadow:.36,tint:[2.05,2.15,2.35],floorSun:.72,floorSunC:mt("#FFEEDA"),glassC:mt("#A6CCF2"),glassA:.82,glassE:.5}),tT=ko({night:0,bake:0,lamps:.15,windows:.15,sunI:2.8,sunC:mt("#FFA458"),hemiI:.85,hemiSky:mt("#FFD0A4"),hemiGnd:mt("#B48466"),fillI:.3,fillC:mt("#FFC9A4"),envI:.4,exposure:1.05,shadow:.4,tint:[2.3,1.32,.62],floorSun:1,floorSunC:mt("#FFD27E"),glassC:mt("#FFC064"),glassA:.86,glassE:1}),nT=ko({night:.5,bake:.3,lamps:.6,windows:.4,sunI:.3,sunC:mt("#FFC9B0"),hemiI:.8,hemiSky:mt("#B9C2E6"),hemiGnd:mt("#8A8798"),fillI:.25,fillC:mt("#BFC8F0"),envI:.3,exposure:1.04,shadow:.3,tint:[1.3,1.32,1.48],floorSun:0,floorSunC:mt("#FFEBD2"),glassC:mt("#7F98CF"),glassA:.6,glassE:.45}),iT=ko({night:.6,bake:.35,lamps:.85,windows:.7,sunI:.3,sunC:mt("#FF9070"),hemiI:.7,hemiSky:mt("#8C7896"),hemiGnd:mt("#3A3040"),fillI:.2,fillC:mt("#8A80B8"),envI:.28,exposure:1.03,shadow:.32,tint:[1.3,1.02,.84],floorSun:0,floorSunC:mt("#FFD27E"),glassC:mt("#4A5487"),glassA:.8,glassE:.5}),sT=ko({night:1,bake:.6,lamps:1,windows:1,sunI:.2,sunC:mt("#8CA6FF"),hemiI:.4,hemiSky:mt("#6A6158"),hemiGnd:mt("#2A2420"),fillI:.15,fillC:mt("#8C8098"),envI:.2,exposure:1,shadow:.4,tint:[.95,.8,.62],floorSun:0,floorSunC:mt("#FFEBD2"),glassC:mt("#1A2A66"),glassA:.92,glassE:.5});function Bo(i,e,t){let n={};for(let s in i)n[s]=Array.isArray(i[s])?i[s].map((r,o)=>ml(r,e[s][o],t)):ml(i[s],e[s],t);return n}var os=Math.PI/180,lp={lat:42.7,dec:10,noon:760},rT={"Europe/Sofia":[42.7,23.3],"Europe/Kiev":[50.45,30.5],"Europe/Kyiv":[50.45,30.5],"Europe/Moscow":[55.75,37.6],"Europe/Warsaw":[52.2,21],"Europe/Berlin":[52.5,13.4],"Europe/Paris":[48.85,2.35],"Europe/London":[51.5,-.1],"Europe/Madrid":[40.4,-3.7],"Europe/Rome":[41.9,12.5],"Europe/Istanbul":[41,29],"Asia/Dubai":[25.2,55.3],"Asia/Kolkata":[28.6,77.2],"Asia/Singapore":[1.35,103.8],"Asia/Tokyo":[35.7,139.7],"Australia/Sydney":[-33.9,151.2],"America/New_York":[40.7,-74],"America/Chicago":[41.9,-87.6],"America/Denver":[39.7,-105],"America/Los_Angeles":[34.05,-118.25],"America/Sao_Paulo":[-23.55,-46.6]};function oT(i){if(i.has("lat")&&i.has("lon"))return[Number(i.get("lat")),Number(i.get("lon"))];let e=Intl.DateTimeFormat().resolvedOptions().timeZone;return rT[e]||[45,-new Date().getTimezoneOffset()/4]}function Ox(i,e,t){let n=t*os,s=Math.asin(Math.sin(n)*Math.sin(e)+Math.cos(n)*Math.cos(e)*Math.cos(i)),r=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(n)-Math.tan(e)*Math.cos(n));return[s/os,r/os]}function aT(i,e,t){let n=i/864e5-10957.5,s=os*(357.5291+.98560028*n),r=s+os*(1.9148*Math.sin(s)+.02*Math.sin(2*s)+3e-4*Math.sin(3*s)+102.9372)+Math.PI,o=os*23.4397,a=Math.asin(Math.sin(o)*Math.sin(r)),l=Math.atan2(Math.sin(r)*Math.cos(o),Math.cos(r));return Ox(os*(280.16+360.9856235*n+t)-l,a,e)}function lT(i){return Ox(os*(i-lp.noon)/4,lp.dec*os,lp.lat)}function cT(i,e){let t=xi(-40,40,e),n=Bo(Bo(eT,tT,t),QE,xi(4,30,i));n=Bo(Bo(nT,iT,t),n,xi(-1.5,3,i)),n=Bo(sT,n,xi(-9,-1,i));let s=1-xi(-6,2,i);return n.sunEl=ml(Math.max(i,5),42,s),n.sunAz=ml(It(270-.3*e,235,305),250,s),n}function hT(i,e){let t=e>0;return i<-5?"night":i<2?t?"dusk":"dawn":i<15?t?"golden":"dawn":"day"}function Px(i){let e=/^(\d{1,2}):(\d{2})$/.exec(String(i||"").trim());return e?It(Number(e[1]),0,24)*60+It(Number(e[2]),0,59):null}var uT=2e4,fT=2e3,Lx=6,Nx=16759668,dT=22,pT=4,Dx=.78,Fx=.75,Ns={x:8.3,z:6.3,y0:-.05,y1:3},mT=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,gT=i=>i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshToonMaterial,Ux=/^(slab|glass)/,xT=/^table_\d+$/;function Bx({scene:i,renderer:e}){let t=new URLSearchParams(location.search);e.shadowMap.enabled=!0,e.shadowMap.type=fr;let n=new As(16777215,1);n.castShadow=!0,n.shadow.mapSize.setScalar(mT?1024:2048),n.shadow.bias=-5e-4,n.shadow.normalBias=.02,n.shadow.radius=2;let s=new Ha(16777215,16777215,1),r=new As(16777215,.4);r.position.set(6,5,8),i.add(n,n.target,s,r);let o=[];for(let z=0;z<Lx;z++){let oe=new hr(Nx,0,0,Dx,Fx,2);oe.castShadow=!1,oe.position.set(0,-99,0),i.add(oe,oe.target),o.push(oe)}let a=new pe,l=[],c=Ix(n),h=new Map,u=new Set,f=new Set,d={value:0},p={night:0,lampsK:0,windowsK:0,phase:"day",minutes:720,el:45,az:0,params:null},x=null,m=t.get("real")==="1",g=null,y=null,w=null,v=null,S=-1e9,M=-1e9,A=-1e9,_=new I,E=new I,R=new I,P=new pe,L=t.get("time");L&&L!=="auto"&&(x=Px(L));function k(z){x=z&&z!=="auto"?Px(z):null,M=S=-1e9}function D(){let z=new Date;if(x!==null&&!m)[p.el,p.az]=lT(x);else{x!==null&&z.setHours(Math.floor(x/60),x%60,0,0);let[oe,le]=oT(t);[p.el,p.az]=aT(z.getTime(),oe,le)}p.minutes=x!==null?x:z.getHours()*60+z.getMinutes()+z.getSeconds()/60,w=cT(p.el,p.az),p.phase=hT(p.el,p.az)}function B(){u.clear(),f.clear(),g.group.traverse(oe=>{if(oe.isMesh)for(let le of Array.isArray(oe.material)?oe.material:[oe.material])le.userData.nightPatched&&(u.add(le),c.relight(le)),le.name==="glass_pane"&&f.add(le)});let z=g.activeOpen();if(z?.root.traverse(oe=>{if(!oe.isMesh)return;let Ue=(Array.isArray(oe.material)?oe.material:[oe.material]).every(Oe=>gT(Oe)&&!Oe.transparent)&&!Ux.test(oe.name)&&!Ux.test(oe.parent?.name||"");oe.castShadow=oe.receiveShadow=Ue}),l=[],z){z.root.updateMatrixWorld(!0);for(let oe of z.obj.children){if(!xT.test(oe.name)||!oe.visible)continue;let le=new Xt().setFromObject(oe);l.push({x0:le.min.x,z0:le.min.z,x1:le.max.x,z1:le.max.z,y:le.max.y-z.root.position.y})}}}function X(){let z=g?.activeOpen()?.root;z?z.getWorldPosition(E):E.set(0,0,0);let oe=E.y;E.y+=(Ns.y0+Ns.y1)/2,n.target.position.copy(E),n.position.copy(E).addScaledVector(_,30);let le=n.shadow.camera;le.position.copy(n.position),le.lookAt(E),le.updateMatrixWorld();let Ue=1/0,Oe=-1/0,je=1/0,Z=-1/0,ee=1/0,de=-1/0;for(let Fe=0;Fe<8;Fe++)R.set(E.x+(Fe&1?Ns.x:-Ns.x),oe+(Fe&2?Ns.y1:Ns.y0),E.z+(Fe&4?Ns.z:-Ns.z)),R.applyMatrix4(le.matrixWorldInverse),Ue=Math.min(Ue,R.x),Oe=Math.max(Oe,R.x),je=Math.min(je,R.y),Z=Math.max(Z,R.y),ee=Math.min(ee,R.z),de=Math.max(de,R.z);le.left=Ue-.1,le.right=Oe+.1,le.bottom=je-.1,le.top=Z+.1,le.near=Math.max(.1,-de-.5),le.far=-ee+.5,le.updateProjectionMatrix()}function $(z){n.color.setRGB(...z.sunC,it),n.intensity=z.sunI;let oe=So.degToRad(z.sunEl),le=So.degToRad(z.sunAz);_.set(Math.cos(oe)*Math.cos(le),Math.sin(oe),Math.cos(oe)*Math.sin(le)),X(),s.color.setRGB(...z.hemiSky,it),s.groundColor.setRGB(...z.hemiGnd,it),s.intensity=z.hemiI,r.color.setRGB(...z.fillC,it),r.intensity=z.fillI,i.environmentIntensity=z.envI,e.toneMappingExposure=z.exposure,d.value=z.bake,p.night=z.night,p.lampsK=z.lamps,p.windowsK=z.windows;for(let[Ue,Oe]of h)Oe==="lamp"?Ue.emissiveIntensity=z.lamps*2.4:Oe==="windows"&&(Ue.emissiveIntensity=z.windows*1.7);for(let Ue of u)Ue.color.setRGB(...z.tint);P.setRGB(...z.glassC,it);for(let Ue of f)Ue.color.copy(P),Ue.emissive.copy(P).multiplyScalar(z.glassE),Ue.opacity=z.glassA;c.update(_,z.floorSunC,z.floorSun,1-z.bake)}function re(){let z=v?v():null,oe=z?z.k*p.lampsK:0;for(let Ue=0;Ue<Lx;Ue++){let Oe=o[Ue],je=z&&z.positions[Ue];je?(Oe.position.copy(je),Oe.target.position.set(je.x,je.y-3,je.z),Oe.intensity=dT*oe):Oe.intensity=0}let le=g?.activeOpen()?.root.position.y??0;a.set(Nx).multiplyScalar(pT*oe),c.lamps(oe>.001?z.positions:null,a,Dx,Fx,l.map(Ue=>({...Ue,y:Ue.y+le})))}function K(z,oe){if(oe-M>uT&&(M=oe,D()),g&&oe-A>fT&&(A=oe,B()),!y)y=w;else{let le=1-Math.exp(-z/.45);y=Bo(y,w,le)}if(p.params=y,$(y),re(),oe-S>1e3){S=oe;let le=document.documentElement;le.dataset.daylight!==p.phase&&(le.dataset.daylight=p.phase),le.style.setProperty("--night",y.night.toFixed(3))}}let te={uNight:d,state:p,update:K,setTime:k,track(z,oe){h.set(z,oe)},untrack(z){h.delete(z)},setLampSource(z){v=z},setBuilding(z){g=z,A=-1e9},get shadowOpacity(){return y?y.shadow:.3},get night(){return p.night}};return window.bothq=Object.assign(window.bothq||{},{setTime:k,daylight:p}),te}var kx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Vn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},_T=new Zn(-1,1,1,-1,0,1),cp=class extends vt{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}},yT=new cp,Ds=class{constructor(e){this._mesh=new ze(yT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_T)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Sr=class extends Vn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=wo.clone(e.uniforms),this.material=new Qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ds(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var xl=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},su=class extends Vn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ru=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Q);this._width=n.width,this._height=n.height,t=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Jt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sr(kx),this.copyPass.material.blending=jn,this.timer=new Wa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xl!==void 0&&(o instanceof xl?n=!0:o instanceof su&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ou=class extends Vn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var _l={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var au=class extends Vn{constructor(){super(),this.isOutputPass=!0,this.uniforms=wo.clone(_l.uniforms),this.material=new po({name:_l.name,uniforms:this.uniforms,vertexShader:_l.vertexShader,fragmentShader:_l.fragmentShader}),this._fsQuad=new Ds(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$a?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ka?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Za?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===pr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ja?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ja&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var un={centre:[.5,.45],radii:[.82,.78],stops:[[0,"#FFFFFF"],[.5,"#F8F8FA"],[1,"#E6E7EB"]],shadow:"#0B0C11",layers:[{sigma:4,down:2,w:.4},{sigma:30,down:22,w:.4},{sigma:120,down:70,w:.34}]},Fs=i=>{let e=new pe;return e.setStyle(i,ln),new I(e.r,e.g,e.b)},Hx={stops:[[0,"#243056"],[.5,"#141A2E"],[1,"#080B18"]],shadow:"#000000"};function hp(i=!1){let e=i?Hx:un,[t,n]=un.centre,[s,r]=un.radii,o=e.stops.map(([a,l])=>`${l} ${(a*100).toFixed(1)}%`).join(", ");return`radial-gradient(ellipse ${s*100}% ${r*100}% at ${t*100}% ${n*100}%, ${o})`}var zx=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,vT=`
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
  }`,bT=`
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
  }`;function MT(i,e){return new zt(Math.max(2,i),Math.max(2,e),{type:Jt,depthBuffer:!1,minFilter:Bt,magFilter:Bt,generateMipmaps:!1})}var lu=class extends Vn{constructor(e,t){super(),this.scene=e,this.camera=t,this.needsSwap=!0,this.maskMat=new Mt({color:16777215,toneMapped:!1,side:en,depthTest:!1,depthWrite:!1,fog:!1}),this.blurMat=new Qt({uniforms:{tMap:{value:null},texel:{value:new Q},sigma:{value:0}},vertexShader:zx,fragmentShader:vT,depthTest:!1,depthWrite:!1});let[n,s,r]=un.layers;this.composeMat=new Qt({uniforms:{tDiffuse:{value:null},tHold:{value:null},tL0:{value:null},tL1:{value:null},tL2:{value:null},stop0:{value:Fs(un.stops[0][1])},stop1:{value:Fs(un.stops[1][1])},stop2:{value:Fs(un.stops[2][1])},stopMid:{value:un.stops[1][0]},shadowC:{value:Fs(un.shadow)},centre:{value:new Q(...un.centre)},radii:{value:new Q(...un.radii)},push:{value:[new Q,new Q,new Q]},layerW:{value:new I(n.w,s.w,r.w)}},vertexShader:zx,fragmentShader:bT,depthTest:!1,depthWrite:!1}),this.fsQuad=new Ds(this.blurMat),this.t=null,this.size=new Q(1,1),this.setSize(1,1)}setTheme(e){let t=e?Hx:un,n=this.composeMat.uniforms;n.stop0.value.copy(Fs(t.stops[0][1])),n.stop1.value.copy(Fs(t.stops[1][1])),n.stop2.value.copy(Fs(t.stops[2][1])),n.shadowC.value.copy(Fs(t.shadow)),this.dark=!!e}setSize(e,t){this.size.set(e,t);let n=this.t;n&&Object.values(n).forEach(r=>r.dispose());let s=r=>MT(Math.round(e/r),Math.round(t/r));this.t={mask:s(4),cA:s(4),cB:s(4),mA:s(8),mB:s(8),hA:s(16),wA:s(32),wB:s(32)}}blur(e,t,n,s,r,o){let a=this.blurMat.uniforms;a.tMap.value=t.texture,a.texel.value.set(s/t.width,r/t.height),a.sigma.value=o,e.setRenderTarget(n),this.fsQuad.material=this.blurMat,this.fsQuad.render(e)}buildAura(e,t){let n={target:e.getRenderTarget(),auto:e.autoClear,color:e.getClearColor(new pe),alpha:e.getClearAlpha(),shadow:e.shadowMap.enabled},s=this.t;e.shadowMap.enabled=!1,e.autoClear=!0,e.setClearColor(0,0),e.setRenderTarget(s.mask);let r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.maskMat,e.render(this.scene,this.camera),this.scene.overrideMaterial=r,e.autoClear=!1;let o=un.layers.map((a,l)=>Math.min(13,a.sigma*t/[4,8,32][l]));this.blur(e,s.mask,s.cB,1,0,o[0]),this.blur(e,s.cB,s.cA,0,1,o[0]),this.blur(e,s.mask,s.mB,0,0,0),this.blur(e,s.mB,s.hA,0,0,0),this.blur(e,s.hA,s.wA,0,0,0),this.blur(e,s.wA,s.wB,1,0,o[2]),this.blur(e,s.wB,s.wA,0,1,o[2]),this.blur(e,s.mB,s.mA,1,0,o[1]),this.blur(e,s.mA,s.mB,0,1,o[1]),e.setRenderTarget(n.target),e.autoClear=n.auto,e.setClearColor(n.color,n.alpha),e.shadowMap.enabled=n.shadow}render(e,t,n){let s=this.composeMat.uniforms,r=this.size.y,o=Math.max(.3,this.camera.zoom||1),a=r/1080*Math.pow(o,.55),l=1/(1+.35*Math.max(0,o-1));this.buildAura(e,a);let c=this.t;s.tDiffuse.value=n.texture,s.tHold.value=s.tL0.value=c.cA.texture,s.tL1.value=c.mB.texture,s.tL2.value=c.wA.texture,un.layers.forEach((h,u)=>s.push.value[u].set(0,h.down*a/r)),s.layerW.value.set(un.layers[0].w,un.layers[1].w*l,un.layers[2].w*l),this.fsQuad.material=this.composeMat,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(),this.fsQuad.render(e)}dispose(){Object.values(this.t).forEach(e=>e.dispose()),this.maskMat.dispose(),this.blurMat.dispose(),this.composeMat.dispose(),this.fsQuad.dispose()}};var Vx={name:"BotHQTiltShift",uniforms:{tDiffuse:{value:null},dir:{value:new Q(1,0)},focus:{value:.5},band:{value:.24},falloff:{value:.5},strength:{value:1.5}},vertexShader:`
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
    }`};function ST(){return new URLSearchParams(location.search).get("tiltshift")!=="0"}function Gx(i,e,t){let n=i.getSize(new Q),s=i.getPixelRatio(),r=new zt(n.x*s,n.y*s,{type:Jt,samples:4}),o=new ru(i,r);o.setPixelRatio(s),o.renderTarget2.dispose(),o.renderTarget2=new zt(n.x*s,n.y*s,{type:Jt}),o.writeBuffer=o.renderTarget2,o.readBuffer=o.renderTarget1,o.addPass(new ou(e,t));let a=new Sr(Vx),l=new Sr(Vx);a.enabled=l.enabled=ST(),o.addPass(a),o.addPass(l),o.addPass(new au);let c=new lu(e,t);o.addPass(c);let h={composer:o,setSize(u,f){o.setPixelRatio(i.getPixelRatio()),o.setSize(u,f);let d=u*i.getPixelRatio(),p=f*i.getPixelRatio();a.uniforms.dir.value.set(1/d,0),l.uniforms.dir.value.set(0,1/p),this.base=1.05*i.getPixelRatio(),a.uniforms.strength.value=l.uniforms.strength.value=this.base},setDark(u){c.setTheme(!!u)},render(u,f,d=1){a.uniforms.focus.value=l.uniforms.focus.value=u,a.uniforms.strength.value=l.uniforms.strength.value=this.base*d,o.render(f)}};return h.setSize(n.x,n.y),h}var cu={working:"#34C759",idle:"#A1A1A6",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF"},wT={waiting_user:"Waiting for you",error:"Error",stuck:"Stuck?",done:"Done",working:"Working",idle:"Resting"},ET=Math.PI/4,up=.42,Wx=1,fp=3.5,TT=.9,AT=1.2,RT=.034,CT=uu([[0,"rgba(255,255,255,0.95)"],[.45,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),IT=uu([[0,"rgba(0,0,0,0.38)"],[.6,"rgba(0,0,0,0.12)"],[1,"rgba(0,0,0,0)"]]),PT=uu([[0,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.42)"],[1,"rgba(255,255,255,0)"]]),LT=uu([[0,"rgba(255,255,255,0)"],[.6,"rgba(255,255,255,0)"],[.8,"rgba(255,255,255,0.95)"],[.9,"rgba(255,255,255,0.3)"],[1,"rgba(255,255,255,0)"]]),NT=new Ht(2,2),DT=.95,hu=class{constructor(e,t){this.id=e.id,this.ctx=t,this.phase=zT(e.id)%1e3/1e3*Math.PI*2,this.status=null,this.hovered=!1,this.selected=!1,this.anim=null,this.nextBlink=1+Math.random()*3,this.blinkT=-1,this.nextAction=1+Math.random()*2,this.hopCooldown=.6,this.retiring=!1,this.dead=!1,this.hostAlpha=1,this.tagKey="",this.yawS=new hn(up,.3),this.scaleS=new hn(1,.28),this.eyeX=new hn(0,.16),this.eyeY=new hn(0,.16),this.modelScale=1,this.root=new lt,this.pivot=new lt,this.modelWrap=new lt,this.pivot.add(this.modelWrap),this.root.add(this.pivot);let n=new ze(new Ht(.85,.85),new Mt({map:IT,transparent:!0,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.006,n.renderOrder=1,this.pivot.add(n),this.ring=new ze(new Ht(1.5,1.5),new Mt({map:CT,transparent:!0,depthWrite:!1,color:cu.idle,opacity:0})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=1,this.root.add(this.ring),this.tagEl=document.createElement("div"),this.tagEl.className="hqt",this.tagEl.dataset.mode="off",this.tagEl.innerHTML='<div class="hqt-pill"><i class="hqt-dot"></i><span class="hqt-text"></span></div><div class="hqt-stem"></div>',this.tagText=this.tagEl.querySelector(".hqt-text"),this.tag=new Wh(this.tagEl),this.tag.center.set(.5,0),this.tag.position.y=Wx+.24,this.tag.visible=!1,this.pivot.add(this.tag),this.setPlaceholderModel(e.color),t.parent.add(this.root)}setPlaceholderModel(e){let t=new ze(new ar(.46,40,28),FT(e));t.scale.set(1,.95,.82),t.position.y=.44;let n=new Ea(.042,.085,6,12),s=new Gt({color:1315863,roughness:.25}),r=new ze(n,s);r.position.set(-.12,.52,.36);let o=new ze(n,s);o.position.set(.12,.52,.36);let a=new lt;a.add(t,r,o),this.modelScale=1,this.useModel(a,[r,o],!0)}setModel(e,t){let n=[];e.traverse(l=>{/^eye_[LR]/.test(l.name)&&n.push(l),l.isMesh&&t&&/body/.test(l.name+(l.parent?.name||""))&&(l.material=l.material.clone(),l.material.color.set(t))}),n=n.filter(l=>!n.some(c=>c!==l&&kT(c,l)));let s=new Xt().setFromObject(e),r=s.getSize(new I),o=Wx/Math.max(r.x,r.y,r.z,.01);e.scale.multiplyScalar(o),s.setFromObject(e);let a=s.getCenter(new I);e.position.x-=a.x,e.position.z-=a.z,e.position.y-=s.min.y,this.modelScale=e.scale.x||1,s.setFromObject(e),this.tag.position.y=s.max.y+.24,this.useModel(e,n,!1)}useModel(e,t,n){for(let s of this.pickMeshes||[])this.ctx.pickables.delete(s);this.modelWrap.clear(),this.modelWrap.add(e),this.eyes=t,this.eyeBase=t.map(s=>s.scale.y),this.eyePos=t.map(s=>s.position.clone()),this.pickMeshes=[],e.traverse(s=>{s.isMesh&&(s.userData.actorId=this.id,this.pickMeshes.push(s),this.retiring||this.ctx.pickables.add(s))}),this.placeholder=n}update(e,t,n){let s=e.effective_status||e.status,r=s!==this.status,o=this.status;this.status=s,this.bot=e;let a=cu[s]||cu.idle;this.ring.material.color.set(a),this.tagEl.dataset.status=s,this.tagEl.style.setProperty("--c",a),this.selected=n.selectedBot===e.id,this.renderTag(),t&&(!this.spot||this.spot.pos.distanceToSquared(t.pos)>1e-4)&&(this.spot?this.travelTo(t):this.dropIn(t),this.spot=t),this.ring.position.y=.012-(this.spot?this.spot.pos.y:0),r&&o&&(s==="done"?(this.celebrate(),this.hop(.45)):(s==="waiting_user"||s==="error")&&this.hop(.3))}renderTag(){let e=this.status,t=this.bot;if(!t)return;let n=e==="waiting_user"||e==="error"||e==="stuck",s=this.selected?"sel":n?"attn":this.hovered?"hover":"off",r=t.name||"";if(s==="attn"){let a=UT(e,t.step);r=this.hovered?`${t.name} \xB7 ${a}`:a}let o=`${s}|${e}|${r}`;o!==this.tagKey&&(this.tagKey=o,this.tagEl.dataset.mode=s,this.tagText.textContent=r,this.tagEl.title="")}spotIsLounge(){return!!this.spot&&this.spot.lounge}setHovered(e){this.hovered!==e&&(this.hovered=e,e&&!this.anim&&this.hop(.2),this.renderTag())}retire(){if(!this.retiring){this.retiring=!0,this.hovered=!1,this.scaleS.to(0);for(let e of this.pickMeshes||[])this.ctx.pickables.delete(e);this.tagEl.dataset.mode="off",this.tag.visible=!1}}dropIn(e){this.root.position.copy(e.pos),this.baseYaw=e.yaw,this.yawS.snap(e.yaw+up),this.anim={kind:"drop",t:-(this.ctx.dropDelay||0),dur:.75,from:2.4},this.scaleS.snap(this.ctx.dropDelay>0?.001:1),this.ctx.dropDelay>0&&this.scaleS.to(1,this.ctx.dropDelay)}travelTo(e){let t=this.root.position.clone(),n=t.distanceTo(e.pos);if(Ls||n<.05){this.root.position.copy(e.pos),this.baseYaw=e.yaw;return}let s=new I().subVectors(e.pos,t);this.anim={kind:"travel",t:0,dur:Math.max(.8,n/2.6),from:t,to:e.pos.clone(),toYaw:e.yaw,travelYaw:Math.atan2(s.x,s.z)}}hop(e){Ls||this.anim||this.retiring||(this.anim={kind:"hop",t:0,dur:.62,h:e})}celebrate(){if(Ls||this.retiring)return;this.endCelebration();let e=new pe(cu.done),t=new ze(NT,new Mt({map:LT,color:e,transparent:!0,depthWrite:!1,opacity:0}));t.rotation.x=-Math.PI/2,t.position.y=this.ring.position.y+.003,t.renderOrder=2;let n=new xa(new so({map:PT,color:e,transparent:!0,depthWrite:!1,opacity:0}));n.position.y=Math.max(.3,this.tag.position.y-.24)*.55,n.renderOrder=2,this.root.add(t,n),this.fx={t:0,ripple:t,halo:n},this.joy=.75}endCelebration(){if(this.fx){for(let e of[this.fx.ripple,this.fx.halo])e.removeFromParent(),e.material.dispose();this.fx=null}}tickCelebration(e){let t=this.fx;t.t+=e;let n=t.t/DT;if(n>=1){this.endCelebration();return}let s=1-(1-n)**3;t.ripple.scale.setScalar(.4+1.6*s),t.ripple.material.opacity=.8*(1-n)**1.3;let r=Math.min(1,t.t/.55);t.halo.scale.setScalar(.8+1.3*(1-(1-r)**2)),t.halo.material.opacity=.6*Math.sin(Math.PI*r)}tick(e,t){let n=this.pivot,s=this.status,r=0,o=1,a=1,l=0,c=0,h=0;if(!Ls){let S=Math.sin(t*2.1+this.phase);if(a=1+.018*S,o=1-.012*S,s==="working"&&(r=.012*Math.abs(Math.sin(t*9+this.phase)),l=.06),s==="stuck"&&(c=.09*Math.sin(t*1.3+this.phase)),s==="error"){let M=(t+this.phase)%1.6;M<.45&&(h=.03*Math.sin(M*70))}s==="waiting_user"&&!this.anim&&(this.nextAction-=e,this.nextAction<=0&&(this.hop(.32),this.nextAction=1.7+Math.random()*.6))}if(this.anim){let S=this.anim;S.t+=e;let M=It(S.t/S.dur,0,1);if(S.kind==="hop")({y:r,sx:o,sy:a}=OT(M,S.h));else if(S.kind==="drop"){S.t<0&&(r=S.from);let A=Math.min(1,M/.55);S.t>=0&&(r=S.from*(1-A*A)),M>.55&&({sx:o,sy:a}=qx((M-.55)/.45))}else if(S.kind==="travel"){let A=BT(M);this.root.position.lerpVectors(S.from,S.to,A);let _=Math.max(1,Math.round(S.dur/.42)),E=M*_%1;r=.55*Math.sin(E*Math.PI),a=1+.12*Math.sin(E*Math.PI),o=1-.07*Math.sin(E*Math.PI),this.baseYaw=M<.92?S.travelYaw:S.toYaw}S.t>=S.dur&&(S.kind==="travel"&&(this.root.position.copy(S.to),this.baseYaw=S.toYaw),this.anim=null)}let u=this.ctx.cursor,f=0,d=0,p=99;if(u?.active&&!this.retiring&&this.hostAlpha>.6){let S=u.x-this.root.position.x,M=u.z-this.root.position.z;p=Math.hypot(S,M),p<fp&&(f=xi(fp,fp-1.3,p),d=Math.atan2(S,M))}this.hopCooldown-=e,p<TT&&this.hopCooldown<=0&&!this.anim&&!Ls&&(this.hop(.26),this.hopCooldown=AT);let x=(this.baseYaw||0)+(this.anim?.kind==="travel"?0:up),m=x;if(this.hovered||this.selected)m=ET;else if(f>0){let M=!this.spotIsLounge()&&s!=="idle"?.8:1.9;m=x+It(dp(d,x),-M,M)*f}this.yawS.target=this.yawS.x+dp(m,this.yawS.x),this.yawS.step(e);let g=this.selected?1.06:1,y=this.scaleS.step(e);if(n.position.set(h,r,0),n.scale.set(o*g*y,a*g*y,o*g*y),n.rotation.set(l,this.yawS.x,c,"YXZ"),f>0&&!this.hovered&&!this.selected){let S=dp(d,this.yawS.x);this.eyeX.to(Math.sin(It(S,-1.2,1.2))*RT*f),this.eyeY.to(-.012*f)}else this.eyeX.to(0),this.eyeY.to(0);this.eyeX.step(e),this.eyeY.step(e);let w=s==="working"?.14+.05*Math.sin(t*3+this.phase):s==="waiting_user"||s==="error"?.4+.25*(.5+.5*Math.sin(t*5)):s==="stuck"?.3+.15*Math.sin(t*2):0,v=this.selected?.8:this.hovered?Math.max(.4,w):w;this.ring.material.opacity=v*It(y,0,1),this.ring.scale.setScalar(this.selected?1.12:1),this.fx&&this.tickCelebration(e),this.tag.visible=this.tagEl.dataset.mode!=="off"&&this.hostAlpha>.5&&!this.retiring&&this.scaleS.x>.6,this.tickEyes(e),this.retiring&&this.scaleS.x<.03&&(this.dead=!0,this.dispose())}tickEyes(e){if(!this.eyes.length)return;let t=this.status,n=1;if(t==="idle"&&!this.spotIsLounge()?n=.12:t==="error"?n=.55:t==="stuck"&&(n=.7),n>.5&&!Ls&&(this.nextBlink-=e,this.nextBlink<=0&&(this.blinkT=0,this.nextBlink=2.2+Math.random()*3.5),this.blinkT>=0)){this.blinkT+=e;let r=this.blinkT/.16;r>=1?this.blinkT=-1:n*=Math.max(.1,Math.abs(1-2*r))}this.joy>0&&(this.joy-=e,n=Math.min(n,.32));let s=1/this.modelScale;this.eyes.forEach((r,o)=>{r.scale.y=this.eyeBase[o]*n,r.position.x=this.eyePos[o].x+this.eyeX.x*s,r.position.y=this.eyePos[o].y+this.eyeY.x*s})}dispose(){this.endCelebration();for(let e of this.pickMeshes||[])this.ctx.pickables.delete(e);this.tagEl.remove(),this.root.removeFromParent()}};function FT(i){return new Yt({color:i,roughness:.32,clearcoat:1,clearcoatRoughness:.18,sheen:.3})}function UT(i,e){let t=(e||"").trim();return i==="stuck"||!t?wT[i]||"":(t=t.charAt(0).toUpperCase()+t.slice(1),t.length>34?`${t.slice(0,33).trimEnd()}\u2026`:t)}function OT(i,e){if(i<.15){let t=i/.15;return{y:0,sx:1+.12*t,sy:1-.18*t}}if(i<.7){let t=(i-.15)/.55;return{y:e*Math.sin(t*Math.PI),sx:.93,sy:1.12}}return{y:0,...qx((i-.7)/.3)}}function qx(i){let e=Math.sin(i*Math.PI)*(1-i);return{sx:1+.16*e,sy:1-.2*e}}var BT=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function dp(i,e){return((i-e+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function kT(i,e){for(let t=e.parent;t;t=t.parent)if(t===i)return!0;return!1}function zT(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return e>>>0}function uu(i){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createRadialGradient(64,64,0,64,64,64);for(let[r,o]of i)n.addColorStop(r,o);t.fillStyle=n,t.fillRect(0,0,128,128);let s=new di(e);return s.colorSpace=it,s}var pp=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon"],Xx=[...pp,"rounded_cube","cone","trio"],Yx=["none","glasses","stem","antenna","bow"],HT=/^#?[0-9a-f]{6}$/i;function $x(i){if(typeof i!="string")return null;let e=i.trim().toLowerCase().replace(/[\s-]+/g,"_");return Xx.includes(e)?e:null}function Kx(i){if(typeof i!="string")return"none";let e=i.trim().toLowerCase();return Yx.includes(e)?e:"none"}function Zx(i){return typeof i=="string"&&HT.test(i.trim())?`#${i.trim().replace("#","").toUpperCase()}`:null}function mp(i){let e=2166136261,t=String(i);for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return e>>>0}function Jx(i){return pp[(mp(`shape:${i}`)>>>4)%pp.length]}var yl=i=>i*Math.PI/180,VT=(i,e,t)=>i+(e-i)*t;function GT(i,e,t,n=720){let s=[];for(let r=0;r<n;r++){let o=2*Math.PI*r/n,a=Math.cos(o),l=Math.sin(o),c=(Math.abs(a/i)**t+Math.abs(l/e)**t)**(-1/t);s.push([c*a,c*l])}return s}function WT(i,e,t){let n=[];for(let s=0;s<i;s++)n.push([e*Math.cos(yl(t+360*s/i)),e*Math.sin(yl(t+360*s/i))]);return n}function qT(i,e,t=24){let n=i.length,s=[];for(let o=0;o<n;o++){let a=[i[(o+1)%n][0]-i[o][0],i[(o+1)%n][1]-i[o][1]],l=Math.hypot(a[0],a[1]);s.push([a[1]/l,-a[0]/l])}let r=[];for(let o=0;o<n;o++){let a=s[(o+n-1)%n],l=Math.atan2(a[1],a[0]),c=Math.atan2(s[o][1],s[o][0]);for(;c<l;)c+=2*Math.PI;for(let h=0;h<t;h++){let u=VT(l,c,h/(t-1));r.push([i[o][0]+e*Math.cos(u),i[o][1]+e*Math.sin(u)])}}return r}function XT(i,e,t,n,s=1440){let r=[];for(let o=0;o<s;o++){let a=2*Math.PI*o/s,l=((1+Math.cos(i*(a-yl(n))))/2)**t,c=e+(1-e)*l;r.push([c*Math.cos(a),c*Math.sin(a)])}return r}function YT(i,e=96){let t=[];for(let[o,a,l]of i)for(let c=0;c<e;c++){let h=2*Math.PI*c/e;t.push([o+l*Math.cos(h),a+l*Math.sin(h)])}t.sort((o,a)=>o[0]-a[0]||o[1]-a[1]);let n=(o,a,l)=>(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]),s=[],r=[];for(let o of t){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}for(let o=t.length-1;o>=0;o--){let a=t[o];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}return s.slice(0,-1).concat(r.slice(0,-1))}function $T(i,e=720){let t=[];for(let n=0;n<e;n++){let s=2*Math.PI*n/e,r=i[0];for(let o=1;2*o-1<i.length;o++)r+=i[2*o-1]*Math.cos(o*s)+(i[2*o]??0)*Math.sin(o*s);t.push([r*Math.cos(s),r*Math.sin(s)])}return t}function KT(i,e){let t=Math.cos(yl(e)),n=Math.sin(yl(e));return i.map(([s,r])=>[s*t-r*n,s*n+r*t])}function jx(i){let e;if(i.kind==="sup")e=GT(i.a,i.b,i.n);else if(i.kind==="star")e=XT(i.k,i.rin,i.p,i.tip);else if(i.kind==="poly")e=qT(WT(i.n,i.R-i.rr,i.rot??90),i.rr),i.sy&&(e=e.map(([t,n])=>[t,n*i.sy]));else if(i.kind==="hull")e=YT(i.circles);else if(i.kind==="fourier")e=$T(i.c);else throw new Error(`outline ${i.kind}`);return i.rotate?KT(e,i.rotate):e}function gp(i,e,t=[0,0]){let n=i.length,s=new Float64Array(e);for(let r=0;r<e;r++){let o=2*Math.PI*r/e,a=Math.cos(o),l=Math.sin(o),c=0;for(let h=0;h<n;h++){let u=i[h][0]-t[0],f=i[h][1]-t[1],d=i[(h+1)%n],p=d[0]-t[0]-u,x=d[1]-t[1]-f,m=a*x-l*p;if(Math.abs(m)<1e-12)continue;let g=(u*x-f*p)/m,y=(u*l-f*a)/m;y>=-1e-9&&y<=1+1e-9&&g>c&&(c=g)}s[r]=c}return s}function fu(i,e=1){let t=i.length,n=Float64Array.from(i);for(let s=0;s<e;s++){let r=new Float64Array(t);for(let o=0;o<t;o++)r[o]=.25*n[(o+t-1)%t]+.5*n[o]+.25*n[(o+1)%t];n=r}return n}var Er=.8,ZT=.018;var Qx=.05,Us=i=>i*Math.PI/180,Sp=[1,0,0,0,1,0,0,0,1],mu=(i,e)=>[i[0]*e[0]+i[1]*e[1]+i[2]*e[2],i[3]*e[0]+i[4]*e[1]+i[5]*e[2],i[6]*e[0]+i[7]*e[1]+i[8]*e[2]];function l_(i,e){let t=new Array(9);for(let n=0;n<3;n++)for(let s=0;s<3;s++)t[n*3+s]=i[n*3]*e[s]+i[n*3+1]*e[3+s]+i[n*3+2]*e[6+s];return t}var Ap=i=>{let e=Math.cos(Us(i)),t=Math.sin(Us(i));return[e,-t,0,t,e,0,0,0,1]};function JT(i){let e=i[2];if(e>.99999)return Sp;let t=[-i[1],i[0],0],n=[0,-t[2],t[1],t[2],0,-t[0],-t[1],t[0],0],s=l_(n,n);return Sp.map((r,o)=>r+n[o]+s[o]/(1+e))}var Ho=i=>{let e=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/e,i[1]/e,i[2]/e]},wr=(i,e,t)=>i+(e-i)*t,wp=class{constructor(e,t=Er){let n=e.N??88;this.N=n,this.D=t,this.th=Float64Array.from({length:n},(h,u)=>2*Math.PI*u/n);let s=jx(e.outline),r=fu(gp(s,n),e.smooth??1),o=[],a=[];for(let h=0;h<n;h++)o.push(r[h]*Math.cos(this.th[h])),a.push(r[h]*Math.sin(this.th[h]));let l=Math.max(Math.max(...o)-Math.min(...o),Math.max(...a)-Math.min(...a));this.r=r.map(h=>h*t/l),this.T=(e.depth??.5)*t/2,this.dome=e.dome??.1,this.nb=e.nb??7,this.flat=e.flat??[.45,.8],this.wall=(e.wall??0)*this.T;let c=e.bevel??.92;if(this.W=fu(this.r.map(h=>Math.min(c*this.T,.85*h)),3),e.inner){let h=fu(this.r.map((u,f)=>u-this.W[f]),e.inner);this.W=this.W.map((u,f)=>this.r[f]-Math.min(h[f],this.r[f]-.35*u))}this.centre=[0,0]}_interp(e,t){let n=this.N,s=(t%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*n,r=Math.floor(s)%n,o=s-Math.floor(s);return wr(e[r],e[(r+1)%n],o)}rimAt(e){let t=this._interp(this.r,e);return[this.centre[0]+t*Math.cos(e),this.centre[1]+t*Math.sin(e)]}zAt(e,t){let n=Math.atan2(t,e),s=this._interp(this.r,n),r=this._interp(this.W,n),o=Math.min(Math.hypot(e,t),s*.999),a=s-o;if(a>=r){let c=o/(s-r);return this.T*(1+this.dome*(1-c*c)**2)}let l=1-a/r;return this.wall+(this.T-this.wall)*Math.sqrt(Math.max(0,1-l*l))}nAt(e,t){return c_(this,e,t)}rings(){let{r:e,W:t,T:n,dome:s,N:r,nb:o,wall:a}=this,l=[];for(let u of this.flat)l.push({rho:Float64Array.from({length:r},(f,d)=>u*(e[d]-t[d])),z:n*(1+s*(1-u*u)**2)});for(let u=0;u<=o;u++){let f=Math.PI/2*(u/o);l.push({rho:Float64Array.from({length:r},(d,p)=>e[p]-t[p]*(1-Math.sin(f))),z:a+(n-a)*Math.cos(f)})}let h=(a>0?l:l.slice(0,-1)).slice().reverse().map(u=>({rho:u.rho,z:-u.z}));return l.concat(h)}emit(e=[0,0,0]){let t=this.rings(),n=this.N,s=t.length,r=this.th,o=this.T*(1+this.dome),a=[[e[0],e[1],e[2]+o]];for(let u of t)for(let f=0;f<n;f++)a.push([e[0]+u.rho[f]*Math.cos(r[f]),e[1]+u.rho[f]*Math.sin(r[f]),e[2]+u.z]);a.push([e[0],e[1],e[2]-o]);let l=[];for(let u=0;u<n;u++)l.push([0,1+(u+1)%n,1+u]);for(let u=0;u<s-1;u++)for(let f=0;f<n;f++){let d=(f+1)%n;l.push([1+u*n+f,1+u*n+d,1+(u+1)*n+d,1+(u+1)*n+f])}let c=1+(s-1)*n,h=1+s*n;for(let u=0;u<n;u++)l.push([h,c+u,c+(u+1)%n]);return{V:a,F:l}}},Ep=class{constructor(e,t=Er){this.D=t;let n=t,s=e.rr??.12*(t/Er),o=(e.width??.9)*t/2-s,a=n-s,l=Math.atan2(o,a-s),c=[[0,0],[o*.5,0],[o,0]],h=7,u=4;for(let x=1;x<=h;x++){let m=wr(-Math.PI/2,l,x/h);c.push([o+s*Math.cos(m),s+s*Math.sin(m)])}let f=Math.cos(l),d=Math.sin(l);for(let x=1;x<u;x++){let m=x/u;c.push([wr(o,0,m)+s*f,wr(s,a,m)+s*d])}for(let x=0;x<=h;x++){let m=wr(l,Math.PI/2,x/h);c.push([s*Math.cos(m),a+s*Math.sin(m)])}c[c.length-1][0]=0,this.prof=c,this.sectors=e.sectors??56,this.H=n,this.centre=[0,n*.45];let p=c.slice(1).concat(c.slice(1,-1).reverse().map(([x,m])=>[-x,m]));this.N=96,this.r=gp(p,this.N,this.centre),this.side=c.slice(3)}rho(e){let t=this.side;if(e<=t[0][1])return t[0][0];for(let n=1;n<t.length;n++)if(e<=t[n][1])return wr(t[n-1][0],t[n][0],(e-t[n-1][1])/Math.max(1e-9,t[n][1]-t[n-1][1]));return 0}zAt(e,t){let n=this.rho(t),s=Math.min(Math.abs(e),n*.999);return Math.sqrt(Math.max(0,n*n-s*s))}nAt(e,t){return c_(this,e,t)}rimAt(e){let t=(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*this.N,n=Math.floor(t)%this.N,s=t-Math.floor(t),r=wr(this.r[n],this.r[(n+1)%this.N],s);return[this.centre[0]+r*Math.cos(e),this.centre[1]+r*Math.sin(e)]}emit(e=[0,0,0]){let t=this.prof,n=this.sectors,s=[],r=[],o=[];for(let[a,l]of t){if(a<1e-9){o.push({pole:s.length}),s.push([e[0],e[1]+l,e[2]]);continue}let c=s.length;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;s.push([e[0]+a*Math.cos(u),e[1]+l,e[2]+a*Math.sin(u)])}o.push({start:c})}for(let a=0;a<o.length-1;a++){let l=o[a],c=o[a+1];for(let h=0;h<n;h++){let u=(h+1)%n;l.pole!==void 0?r.push([l.pole,c.start+u,c.start+h]):c.pole!==void 0?r.push([l.start+h,l.start+u,c.pole]):r.push([l.start+h,l.start+u,c.start+u,c.start+h])}}return{V:s,F:r}}};function c_(i,e,t){let n=.004*(i.D/Er),s=(i.zAt(e+n,t)-i.zAt(e-n,t))/(2*n),r=(i.zAt(e,t+n)-i.zAt(e,t-n))/(2*n);return Ho([-s,-r,1])}var h_=(i,e,t,n={})=>({kind:"poly",n:i,R:1,rr:e,rot:t,...n}),Gn=(i,e,t,n,s)=>({c:i,sp:e,w:+(t/2.6).toFixed(3),h:t,pair:n,tilt:s}),jT={cloud:[.4644,-.0013,.0016,.0344,.0162,.0252,-.0051,-.0056,-.0039,.0193,-.0015,.0026,-.0043,-.0025,.0049,-.0053,.0015],star4:[.4131,1e-4,0,-3e-4,-.0167,-2e-4,-2e-4,.0736,.0341,-2e-4,-1e-4,2e-4,.0022,-4e-4,0,.0012,-4e-4,1e-4,-1e-4,-.0014,7e-4,2e-4,1e-4,.0027,.0053],clover:[.4623,0,0,.0045,-.0273,2e-4,-1e-4,-.0036,-.0449,-4e-4,1e-4,2e-4,8e-4,-4e-4,0,.0105,-.0056,0,2e-4,-.002,5e-4],bubble:[.4568,.0013,-.0022,.0313,.0104,-.0395,.0269,-.0026,.0079,.0083,.002,7e-4,.0027,-.0027,-1e-4,7e-4,-.0011],flower:[.4574,0,0,.0025,-.022,0,0,.0026,3e-4,2e-4,0,.0207,-.0284,0,0,.0046,.0035,-1e-4,-3e-4,.0023,-.002,0,1e-4,.0014,.0062,-1e-4,1e-4,-.0023,6e-4,3e-4,-2e-4,0,-3e-4,1e-4,3e-4,-.003,-.001,-1e-4,-1e-4,4e-4,-.0018],star6:[.4235,-1e-4,0,.0048,-.0394,0,0,-.0051,-.0014,4e-4,-1e-4,.0417,-.0574,4e-4,2e-4,.0021,.0032,-1e-4,-1e-4,-.003,-2e-4,1e-4,0,.001,.0033,1e-4,1e-4,.0058,-8e-4,-1e-4,3e-4,2e-4,-.0049,-1e-4,0,-6e-4,0]},zo=i=>({kind:"fourier",c:jT[i]}),QT={sphere:{type:"slab",outline:{kind:"sup",a:1,b:1,n:2},face:Gn([.17,.218],.26,.272,25,36)},cloud:{type:"slab",N:96,smooth:0,inner:10,outline:zo("cloud"),face:Gn([.161,.15],.214,.236,16,28)},rounded_square:{type:"slab",outline:{kind:"hull",circles:[[.146,.381,.107],[-.393,.195,.141],[-.149,-.383,.106],[.397,-.195,.139]]},face:Gn([.08,.023],.18,.212,16,29)},star4:{type:"slab",N:112,smooth:0,depth:.3,bevel:.5,outline:zo("star4"),face:Gn([.076,.086],.186,.191,16,28)},clover:{type:"slab",N:104,smooth:0,inner:10,outline:zo("clover"),face:Gn([.062,.081],.212,.212,15,28)},bubble:{type:"slab",N:96,smooth:0,inner:8,outline:zo("bubble"),face:Gn([.179,.087],.208,.214,16,24)},flower:{type:"slab",N:108,smooth:0,inner:10,outline:zo("flower"),face:Gn([.107,.033],.179,.213,15,28)},drop:{type:"slab",outline:{kind:"hull",circles:[[.015,-.031,.419],[-.166,.34,.148]]},face:Gn([.192,.145],.201,.227,16,27)},pill:{type:"slab",outline:{kind:"hull",circles:[[.149,.042,.339],[-.148,-.042,.34]]},face:Gn([.144,.14],.267,.233,15,27)},triangle:{type:"slab",outline:{kind:"hull",circles:[[.723,-.02,.185],[-.23,.471,.319],[-.222,-.339,.41]]},face:Gn([.145,.213],.201,.216,12,54)},pentagon:{type:"slab",outline:{kind:"hull",circles:[[.276,.325,.101],[-.184,.425,.177],[-.414,.049,.157],[-.202,-.411,.151],[.41,-.181,.211]]},face:Gn([.075,.053],.203,.222,15,28)},star6:{type:"slab",N:108,smooth:0,depth:.3,bevel:.5,outline:zo("star6"),face:Gn([.092,.017],.189,.202,16,28)},hexagon:{type:"slab",outline:{kind:"hull",circles:[[.264,.33,.112],[-.154,.4,.152],[-.404,.073,.162],[-.267,-.334,.108],[.153,-.399,.153],[.412,-.073,.155]]},face:Gn([.1,.029],.275,.274,15,28)},rounded_cube:{type:"slab",outline:{...h_(4,.27,45),rotate:18},depth:.74,bevel:.62,wall:.5,face:{c:[.04,.03],sp:.22,w:.1,h:.23,pair:12,tilt:25}},cone:{type:"lathe",face:{c:[0,.31],sp:.22,w:.105,h:.23,pair:0,tilt:0}},trio:{type:"trio"}},eA=[{key:"a",mat:0,D:.42,at:[-.2,.2,0],def:{type:"slab",N:48,nb:5,flat:[.5],outline:{kind:"sup",a:1,b:.93,n:2.4,rotate:5},face:{c:[.12,.08],sp:.25,w:.12,h:.25,pair:14,tilt:18}}},{key:"b",mat:1,D:.46,at:[.19,.23,.05],primary:!0,def:{type:"slab",N:48,nb:5,flat:[.5],outline:{...h_(6,.3,90),rotate:-6},face:{c:[.03,-.02],sp:.26,w:.11,h:.25,pair:10,tilt:4}}},{key:"c",mat:2,D:.42,at:[.02,.57,-.09],host:!0,def:{type:"slab",N:60,nb:5,flat:[.5],depth:.4,bevel:.7,outline:{kind:"star",k:6,rin:.58,p:1.1,tip:90},face:{c:[0,-.07],sp:.25,w:.115,h:.24,pair:0,tilt:0}}}];function e_(i,e){return i.type==="lathe"?new Ep(i,e):new wp(i,e)}function pu(i,e,t,n=16,s=10,r=2.7){let o=[[0,0,t]];for(let h=1;h<s;h++){let u=Math.PI*h/s;for(let f=0;f<n;f++){let d=2*Math.PI*f/n,p=Math.cos(d),x=Math.sin(d),m=(Math.abs(p)**r+Math.abs(x)**r)**(-1/r);o.push([i*Math.sin(u)*p*m,e*Math.sin(u)*x*m,t*Math.cos(u)])}}o.push([0,0,-t]);let a=[];for(let h=0;h<n;h++)a.push([0,1+(h+1)%n,1+h]);for(let h=0;h<s-2;h++)for(let u=0;u<n;u++){let f=(u+1)%n;a.push([1+h*n+u,1+h*n+f,1+(h+1)*n+f,1+(h+1)*n+u])}let l=o.length-1,c=1+(s-2)*n;for(let h=0;h<n;h++)a.push([l,c+h,c+(h+1)%n]);return{V:o,F:a}}function tA(i,e,t=22,n=8){let s=[],r=[];for(let o=0;o<t;o++){let a=2*Math.PI*o/t;for(let l=0;l<n;l++){let c=2*Math.PI*l/n;s.push([(i+e*Math.cos(c))*Math.cos(a),(i+e*Math.cos(c))*Math.sin(a),e*Math.sin(c)])}}for(let o=0;o<t;o++)for(let a=0;a<n;a++)r.push([o*n+a,(o+1)%t*n+a,(o+1)%t*n+(a+1)%n,o*n+(a+1)%n]);return{V:s,F:r}}function du(i,e,t=8){let n=i.length,s=[],r=[],o=(f,d)=>[f[0]-d[0],f[1]-d[1],f[2]-d[2]],a=(f,d)=>[f[1]*d[2]-f[2]*d[1],f[2]*d[0]-f[0]*d[2],f[0]*d[1]-f[1]*d[0]];for(let f=0;f<n;f++){let d=Ho(o(i[Math.min(f+1,n-1)],i[Math.max(f-1,0)])),p=a(d,[0,0,1]);Math.hypot(...p)<1e-6&&(p=a(d,[0,1,0])),p=Ho(p);let x=a(d,p);for(let m=0;m<t;m++){let g=2*Math.PI*m/t,y=Math.cos(g)*e[f],w=Math.sin(g)*e[f];s.push([i[f][0]+y*p[0]+w*x[0],i[f][1]+y*p[1]+w*x[1],i[f][2]+y*p[2]+w*x[2]])}}for(let f=0;f<n-1;f++)for(let d=0;d<t;d++){let p=(d+1)%t;r.push([f*t+d,f*t+p,(f+1)*t+p,(f+1)*t+d])}let l=Ho(o(i[1],i[0])),c=Ho(o(i[n-1],i[n-2])),h=s.length;s.push([i[0][0]-l[0]*e[0]*.5,i[0][1]-l[1]*e[0]*.5,i[0][2]-l[2]*e[0]*.5]);let u=s.length;s.push([i[n-1][0]+c[0]*e[n-1]*.8,i[n-1][1]+c[1]*e[n-1]*.8,i[n-1][2]+c[2]*e[n-1]*.8]);for(let f=0;f<t;f++){let d=(f+1)%t;r.push([h,d,f]),r.push([u,(n-1)*t+f,(n-1)*t+d])}return{V:s,F:r}}var t_=(i,e,t,n)=>[0,1,2].map(s=>(1-n)**2*i[s]+2*(1-n)*n*e[s]+n*n*t[s]),vl=(i,e,t=[0,0,0])=>i.map(n=>{let s=mu(e,n);return[s[0]+t[0],s[1]+t[1],s[2]+t[2]]});function u_(i,e,t,n,s=.7){let r=i.zAt(e,t),o=i.nAt(e,t),a=Ho([s*o[0],s*o[1],s*o[2]+(1-s)]);return{z:r,M:l_(JT(a),Ap(n))}}function nA(i,e){let{body:t,at:n,D:s}=i,r={...i.face};e==="glasses"&&i.glasses&&(r.sp=Math.max(r.sp,.25),r.h=Math.min(r.h,.2),r.w=Math.min(r.w,.09));let o=[r.c[0]*s,r.c[1]*s],a=[Math.cos(Us(r.pair))*r.sp*s/2,Math.sin(Us(r.pair))*r.sp*s/2],l=r.w*s/2,c=r.h*s/2,h=.62*l,u=[];for(let[f,d]of[["L",[o[0]-a[0],o[1]-a[1]]],["R",[o[0]+a[0],o[1]+a[1]]]]){let{z:p,M:x}=u_(t,d[0],d[1],r.tilt),m=pu(l,c,h,i.eyeSeg??16,i.eyeRings??10);u.push({side:f,c:d,M:x,centre:[d[0]+n[0],d[1]+n[1],p+.15*h+n[2]],V:vl(m.V,x),F:m.F})}return u}function n_(i,e=0){let t=-Math.sin(Us(e)),n=Math.cos(Us(e)),s=-1/0,r=i.rimAt(Math.PI/2);for(let o=0;o<180;o++){let a=i.rimAt(2*Math.PI*o/180),l=a[0]*t+a[1]*n;l>s+1e-9&&(s=l,r=a)}return r}function i_(i,e,t,n){let{body:s,at:r,D:o}=e,a=o/Er,l=(h,u=0)=>[h[0]+r[0],h[1]+r[1],u+r[2]],c=[];if(i==="stem"){let h=n_(s,20),u=[h[0]+.012*a,h[1]-.045*a,0],f=[u[0]-.035*a,u[1]+.09*a,0],d=[u[0]-.1*a,u[1]+.155*a,0],p=Array.from({length:11},(m,g)=>g/10),x=du(p.map(m=>l(t_(u,f,d,m))),p.map(m=>a*(.045-.01*m)),8);c.push({...x,mat:0})}else if(i==="antenna"){let h=n_(s),u=[h[0]-.01*a,h[1]-.06*a,0],f=[u[0]+.015*a,u[1]+.1*a,0],d=[u[0]+.05*a,u[1]+.2*a,0],p=Array.from({length:9},(w,v)=>v/8),x=du(p.map(w=>l(t_(u,f,d,w))),p.map(w=>a*(.036-.008*w)),8);c.push({...x,mat:0});let m=.075*a,g=pu(m,m,m,14,10,2),y=l([d[0]+.004*a,d[1]+.5*m],0);c.push({V:g.V.map(w=>[w[0]+y[0],w[1]+y[1],w[2]+y[2]]),F:g.F,mat:1})}else if(i==="bow"){let h=Us(64),u=s.rimAt(h),f=[u[0]*.93+(1-.93)*s.centre[0],u[1]*.93+(1-.93)*s.centre[1]],d=s.T!==void 0?s.T*.34:.08*a,p=h+Math.PI/2-Us(14),x=Ap(p*180/Math.PI),m=pu(.13*a,.085*a,.06*a,14,9,2),g=pu(.06*a,.06*a,.058*a,12,8,2),y=l(f,d);for(let w of[-1,1])c.push({V:vl(m.V,x,[y[0]+w*.12*a*Math.cos(p),y[1]+w*.12*a*Math.sin(p),y[2]-.004*a]),F:m.F,mat:1});c.push({V:vl(g.V,Sp,y),F:g.F,mat:1})}else if(i==="glasses"){let h=Math.min(.118,t.sp*.5-.006)*o,u=.017*o,f=[];for(let y of t.list){let{z:w,M:v}=u_(s,y.c[0],y.c[1],0,.7),S=[y.c[0],y.c[1],w+.004*a],M=tA(h,u,o<.6?14:24,o<.6?6:8);c.push({V:vl(M.V,v,l([S[0],S[1]],S[2])),F:M.F,mat:0}),f.push(y.c)}let[d,p]=f,x=Math.hypot(p[0]-d[0],p[1]-d[1]),m=[(p[0]-d[0])/x,(p[1]-d[1])/x],g=[];for(let y=0;y<5;y++){let w=y/4,v=d[0]+m[0]*h+(p[0]-d[0]-2*m[0]*h)*w,S=d[1]+m[1]*h+(p[1]-d[1]-2*m[1]*h)*w;g.push(l([v,S],s.zAt(v,S)+u*1.2+.006*a*Math.sin(Math.PI*w)))}c.push({...du(g,Array(5).fill(u),6),mat:0});for(let[y,w]of[[-1,d],[1,p]]){let v=[];for(let S=0;S<9;S++){let M=S/8,A=w[0]+y*m[0]*(h+M*(.4*o-h+.02*a)),_=w[1]+y*m[1]*(h+M*(.4*o-h+.02*a)),E=s.rimAt(Math.atan2(_-s.centre[1],A-s.centre[0])),R=Math.hypot(E[0]-s.centre[0],E[1]-s.centre[1])*.985,P=Math.hypot(A-s.centre[0],_-s.centre[1]);if(P>R){let L=R/P;A=s.centre[0]+(A-s.centre[0])*L,_=s.centre[1]+(_-s.centre[1])*L}v.push(l([A,_],s.zAt(A,_)+u*1.2))}c.push({...du(v,Array(9).fill(u*.9),6),mat:0})}}return c}function Tp(i,e=t=>t){let t=[...new Set(i.map(a=>a.mat))].sort((a,l)=>a-l),n=[],s=[],r=[];for(let a of t){let l=s.length;for(let c of i){if(c.mat!==a)continue;let h=c.V.map(e),u=[];for(let p of c.F)p.length===3?u.push(p):(u.push([p[0],p[1],p[2]]),u.push([p[0],p[2],p[3]]));let f=0;for(let[p,x,m]of u){let g=h[p],y=h[x],w=h[m];f+=g[0]*(y[1]*w[2]-y[2]*w[1])+g[1]*(y[2]*w[0]-y[0]*w[2])+g[2]*(y[0]*w[1]-y[1]*w[0])}let d=n.length/3;for(let p of h)n.push(p[0],p[1],p[2]);for(let[p,x,m]of u)s.push(d+p,d+(f<0?m:x),d+(f<0?x:m))}r.push({start:l,count:s.length-l,materialIndex:a})}let o=new vt;o.setAttribute("position",new Je(n,3)),o.setIndex(s);for(let a of r)o.addGroup(a.start,a.count,a.materialIndex);return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o}function iA(i){let e=QT[i];return e.type==="trio"?eA.map(t=>({body:e_(t.def,t.D),at:t.at,D:t.D,face:t.def.face,mat:t.mat,primary:!!t.primary,host:!!t.host,glasses:!!t.primary,eyeSeg:12,eyeRings:8})):[{body:e_(e,Er),at:[0,0,0],D:Er,face:e.face,mat:0,primary:!0,host:!0,glasses:!0}]}var xp=new Map,_p=new Map;function sA(i,e){let t=`${i}|${e}`;if(xp.has(t))return xp.get(t);let n=iA(i),s=Ap(e),r=m=>mu(s,m),a=n.map(m=>({...m.body.emit(m.at),mat:m.mat})).map(m=>({...m,V:m.V.map(r)})),l=1/0;for(let m of a)for(let g of m.V)l=Math.min(l,g[1]);let c=.01,h=ZT;for(let m of a)for(let g of m.V){let y=g[1]-l-h;g[1]=l+h+.5*(y+Math.sqrt(y*y+c*c))}let u=[1/0,1/0,1/0],f=[-1/0,-1/0,-1/0];for(let m of a)for(let g of m.V)for(let y=0;y<3;y++)u[y]=Math.min(u[y],g[y]),f[y]=Math.max(f[y],g[y]);let d=[-(u[0]+f[0])/2,-u[1],-(u[2]+f[2])/2],p=Tp(a,m=>[m[0]+d[0],m[1]+d[1],m[2]+d[2]]),x={units:n,R:s,shift:d,geo:p,nMats:new Set(n.map(m=>m.mat)).size,tris:p.index.count/3};return xp.set(t,x),x}function rA(i,e,t){let n=`${i}|${e}|${t}`;if(_p.has(n))return _p.get(n);let s=sA(i,e),{units:r,R:o,shift:a}=s,l=x=>{let m=mu(o,x);return[m[0]+a[0],m[1]+a[1],m[2]+a[2]]},c=[],h=2,u=null;for(let x of r){let m=nA(x,t);t==="glasses"&&x.glasses&&(u={u:x,list:m,sp:Math.max(x.face.sp,.25)});for(let g of m){let y=x.primary?`eye_${g.side}`:`eye_${g.side}_${h}`,w=Tp([{V:vl(g.V,o),F:g.F,mat:0}]);c.push({name:y,geo:w,pos:l(g.centre)})}x.primary||h++}let f=null;if(t!=="none"){let x=[];if(t==="glasses")u&&(x=i_("glasses",u.u,u,null));else{let m=r.find(g=>g.host)||r[0];x=i_(t,m,null,null)}if(x.length){let m=Tp(x.map(w=>({...w,V:w.V.map(v=>mu(o,v))})),w=>[w[0]+a[0],w[1]+a[1],w[2]+a[2]]),g=m.boundingBox.clone(),y=s.geo.boundingBox;g.min.max(y.min.clone().subScalar(Qx)),g.max.min(y.max.clone().addScalar(Qx)),m.boundingBox=g,f={geo:m,accent:x.some(w=>w.mat===1)}}}let d=s.tris;for(let x of c)d+=x.geo.index.count/3;f&&(d+=f.geo.index.count/3);let p={body:s,eyes:c,extra:f,tris:d};return _p.set(n,p),p}var oA=.78,aA=.06;function f_(i){let e=new pe(i),t=.2126*e.r+.7152*e.g+.0722*e.b;return t>=oA?"light":t<aA?"dark":"mid"}var yp=new Map;function s_(i){return yp.has(i)||yp.set(i,new Yt({color:i,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.06})),yp.get(i)}var lA="#141417",vp=new Map;function cA(){return vp.has("dark")||vp.set("dark",new Yt({color:lA,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.04})),vp.get("dark")}var bp=new Map;function hA(i,e=!1){let t=`${i}|${e}`;return bp.has(t)||bp.set(t,new Yt(e?i==="glasses"?{color:"#ECECEF",roughness:.32,clearcoat:.8,clearcoatRoughness:.05}:{color:"#8A8D93",roughness:.4,clearcoat:.6,clearcoatRoughness:.06}:i==="glasses"?{color:"#101012",roughness:.45,clearcoat:.4,clearcoatRoughness:.06}:{color:"#3A3D40",roughness:.5,clearcoat:.3,clearcoatRoughness:.06})),bp.get(t)}var Mp=new Map;function uA(i){return Mp.has(i)||Mp.set(i,new Yt({color:i,roughness:.3,clearcoat:1,clearcoatRoughness:.06})),Mp.get(i)}var r_=["#FFD60A","#FF2D6F","#2D7BFF","#2FD067"];function fA(i){let e=new pe(i).convertLinearToSRGB(),t=f_(i)==="dark"?["#FFFFFF",...r_]:r_,n=t[0],s=-1;for(let r of t){let o=new pe(r).convertLinearToSRGB(),a=(e.r+o.r)/2,l=(2+a)*(e.r-o.r)**2+4*(e.g-o.g)**2+(3-a)*(e.b-o.b)**2;l>s&&(s=l,n=r)}return n}function dA(i){let e={};new pe(i).getHSL(e);let t=new pe().setHSL((e.h+150/360)%1,Math.max(e.s,.7),Math.min(.46,Math.max(.36,e.l*.85))),n=e.l<.22?new pe("#F4F4F6"):new pe("#111113");return[i,`#${t.getHexString().toUpperCase()}`,`#${n.getHexString().toUpperCase()}`]}var pA=["#000000","#A06B39","#FB2B3E","#FD690F","#F59312","#14C16F","#13B7A2","#1E86FC","#8F59F9","#F93498","#959595"],o_=pA.slice(0,10);function a_(){return 0}function d_({shape:i,color:e,accessory:t,seed:n}={}){let s=String(n??"blob"),r=$x(i)??Jx(s),o=Zx(e)??o_[mp(`color:${s}`)%o_.length],a=Kx(t),l=rA(r,a_(s),a),c=l.body.nMats>1?dA(o):[o],h=c[l.body.nMats>1?a==="glasses"?1:2:0],u=new lt;u.name="blob";let f=new ze(l.body.geo,l.body.nMats>1?c.map(s_):s_(o));f.name="body",u.add(f);for(let d of l.eyes){let p=new ze(d.geo,cA());p.name=d.name,p.position.set(d.pos[0],d.pos[1],d.pos[2]),u.add(p)}if(l.extra){let d=hA(a==="glasses"?"glasses":"stem",f_(h)==="dark"),p=l.extra.accent?[d,uA(fA(o))]:d,x=new ze(l.extra.geo,p);x.name="extra",u.add(x)}return u.userData={generated:!0,look:{shape:r,color:o,accessory:a},tris:l.tris,tilt:a_(s)},u}var Dp="/4d",Fp=new I(1,1,1).normalize(),Nn={x:-.4,y:-.3,z:.3},Os={w:35,h:22},mA=29.5,ls={min:.75,max:3,focus:2},gA=230,xA=360,g_=Math.sin(Math.atan(1/Math.SQRT2)),_A=[1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20],pt,Bs,We,Ui,bn,qo,Vo,gt,An,bu=null,Eu=null,x_={currentFloor:null,selectedBot:null},Tn=new Map,Hs=new Set,Up=new Set,Rp=new Map,Wo=[],Mu=new qa,El=new Q,Oi={active:!1,x:0,z:0},p_=new Un(new I(0,1,0),0),Ml=new I,gu=new Xa,He={x:new hn(Nn.x,.45),y:new hn(Nn.y,.55),z:new hn(Nn.z,.45),zoom:new hn(0,.4)},as=null,Ip=!1,Dt=null,Bi=new Map,ks=null,yu=!1,Op=0,zs=0,Pp=!1,_i=null,Lp=0,Su=null,Tl=!0,wu=!1,Cp=!1,yA=!1,xu=1e3/30,vA=.9,En=(()=>{let i=new URLSearchParams(location.search);return{floor:wu?null:i.get("floor"),from:i.get("from"),intro:i.get("intro"),hold:i.has("hold")?Number(i.get("hold")):null,cam:i.get("cam"),cursor:i.get("cursor")}})(),Np=!1,__=!1,bA=mx(`${Dp}/office`);function y_(i,e={}){let t=++Lp;Tl=!0,bn=i,qo=e,bn.classList.add("hq-scene"),MA(),_i=bn.querySelector(".hq-loading"),_i||(_i=document.createElement("div"),_i.className="hq-loading",_i.setAttribute("role","status"),_i.innerHTML='<span class="hq-loading-label">Building the office</span><span class="hq-loading-track"><i></i></span>',bn.append(_i)),pt=new Hh({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1}),pt.setPixelRatio(Math.min(devicePixelRatio,1.5)),pt.outputColorSpace=it,pt.toneMapping=pr,pt.toneMappingExposure=1.05,pt.setClearColor(0,0),pt.domElement.className="hq-canvas",bn.append(pt.domElement),Bs=new qh,Bs.domElement.className="hq-labels",bn.append(Bs.domElement),Ui=new nr;let n=new Ro(pt);Ui.environment=n.fromScene(new $h,.04).texture,Ui.environmentIntensity=.55,Vo=Bx({scene:Ui,renderer:pt}),document.documentElement.dataset.sky="studio",bn.style.background=hp(Sl),We=new Zn(-1,1,1,-1,.1,240),We.position.copy(Fp).multiplyScalar(80),We.lookAt(0,0,0),bA.then(s=>{if(t!==Lp||!pt)return;bu=s,gt=new iu({scene:Ui,daylight:Vo,assets:s,baseUrl:`${Dp}/office`,renderer:pt}),Vo.setBuilding(gt),s.spots.lounges.forEach(o=>{o&&(o.lounge=!0)}),window.bothq=Object.assign(window.bothq||{},{source:s.source}),wl();let r=()=>{Eu&&Bp()};Promise.race([Ex,new Promise(o=>setTimeout(o,1500))]).then(r,r)}),An=Gx(pt,Ui,We),Sl&&An.setDark&&An.setDark(!0),CA(),Su=new ResizeObserver(wl),Su.observe(bn),wl(),pt.setAnimationLoop(kA),window.bothq=Object.assign(window.bothq||{},{scene:{get camera(){return We},get building(){return gt},cam:He,actors:Tn,get daylight(){return Vo},switchFloor:s=>gt&&b_(s,!1),settle:vu}})}function MA(){if(!document.querySelector('link[href*="scene.css"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="/4d/scene.css",document.head.append(i)}if(!document.querySelector('link[href*="family=Inter"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700&display=swap",document.head.append(i)}}function v_(i,e){Eu=i,x_={...e},gt&&Bp()}function Bp(){let i=Eu,e=x_,t=[...i.floors].sort((f,d)=>(f.order??0)-(d.order??0));gt.setFloors(t);let n=e.currentFloor&&t.some(f=>f.id===e.currentFloor)?e.currentFloor:t[0]?.id??"_";En.floor&&t.some(f=>f.id===En.floor)&&(n=En.from&&!yu&&t.some(f=>f.id===En.from)?En.from:En.floor),gt.activeId!==n&&b_(n,!yu),yu=!0;let s=gt.activeOpen();if(!s)return;let r=Object.values(i.bots).filter(f=>f.floor===gt.activeId),o=new Set(r.map(f=>f.id));for(let[f,d]of Tn)o.has(f)||(d.retire(),Hs.add(d),Tn.delete(f));let a=Math.max(1e-4,...r.map(f=>f.usage_share||0)),l=SA(r),c=new Array(20).fill(0),h=Math.max(0,Op+.55-zs);for(let f of r){let d=Tn.get(f.id);d||(d=new hu(f,{parent:s.root,inst:s,pickables:Up,confetti:FA,cursor:Oi,dropDelay:h}),Tn.set(f.id,d),wA(d,f));let p=(_A[(f.desk||1)-1]||1)-1,x=bu.spots.desks[p]||bu.spots.desks[0];(f.effective_status||f.status)==="working"&&!l.has(f.id)&&(c[p]=1),d.update(f,l.get(f.id)||x,{maxShare:a,selectedBot:e.selectedBot})}gt.setScreens(c);let u=t.find(f=>f.id===gt.activeId);if(gt.setDisplayData({floorName:u?u.name:"",bots:r,hour:Tx(i.now)}),as&&!Tn.has(as)&&(as=null),!Pp){if(Pp=!0,En.intro==="0"&&vu(3.5),En.from&&En.floor&&Bp(),En.hold!==null&&(vu(En.hold),Np=!0),En.cursor){let[f,d]=En.cursor.split(",").map(Number);Oi.active=!0,Oi.x=f,Oi.z=d,__=!0,vu(1.2)}if(En.cam){let[f,d,p]=En.cam.split(",").map(Number);He.x.snap(f),He.z.snap(d),He.zoom.snap(Math.log(p||1))}}}function vu(i=3){let e=.03333333333333333;for(let t=0;t<i;t+=e){zs+=e,A_(e),gt.update(e,performance.now());for(let n of Tn.values())n.hostAlpha=gt.activeOpen()?.alpha??1,n.tick(e,zs);for(let n of Hs)n.tick(e,zs),n.dead&&Hs.delete(n)}}function SA(i){let e=new Map,t=bu.spots.lounges.filter(Boolean);return i.filter(s=>(s.effective_status||s.status)==="idle").sort((s,r)=>(s.desk||0)-(r.desk||0)).slice(0,t.length).forEach((s,r)=>e.set(s.id,t[r])),e}function wA(i,e){let t=null,n=r=>{let o=`${r.avatar||r.id}|${r.color||""}|${JSON.stringify(r.look||null)}`;o!==t&&(t=o,(r.has_glb===!1?Promise.resolve(null):EA(r.avatar||r.id)).then(a=>{if(i.dead||t!==o)return;if(a)return i.setModel(a.clone(!0));let l=r.look||{};i.setModel(d_({shape:l.shape,color:l.color||r.color,accessory:l.accessory,seed:r.id}))}))};n(e);let s=i.update.bind(i);i.update=(r,o,a)=>(n(r),s(r,o,a))}function EA(i){return Rp.has(i)||Rp.set(i,new Lo().loadAsync(`${Dp}/blobs/${encodeURIComponent(i)}.glb`).then(e=>e.scene).catch(()=>null)),Rp.get(i)}function b_(i,e){for(let n of Tn.values())n.retire(),Hs.add(n);Tn.clear(),as=null,gt.setActive(i,{intro:e});let t=gt.activeY+Nn.y;He.x.to(Nn.x),He.z.to(Nn.z),He.y.to(t),He.zoom.to(0),e&&(He.x.snap(Nn.x),He.z.snap(Nn.z),He.y.snap(t-2.6),He.zoom.snap(Math.log(.86)),He.y.to(t,.1),He.zoom.to(0,.1)),Op=zs,e&&(gt.prewarm(We),TA())}var Sl=!1;function M_(i){Sl=!!i,bn&&(bn.style.background=hp(Sl)),An&&An.setDark&&An.setDark(Sl)}function Tu(){return pt?pt.domElement:null}function S_(i){Tl=!!i,Tl&&pt&&wl()}function w_(){if(Lp++,Tl=!1,pt){pt.setAnimationLoop(null);try{pt.dispose()}catch{}pt.domElement.remove()}try{An?.composer?.dispose?.()}catch{}Bs?.domElement.remove(),_i?.remove(),Su?.disconnect(),Su=null,bn&&bn.classList.remove("hq-scene","is-hovering"),Tn.clear(),Hs.clear(),Wo.length=0,Up.clear(),gt=null,An=null,Vo=null,Ui=null,We=null,pt=null,Bs=null,bn=null,qo=null,_i=null,Eu=null,yu=!1,Pp=!1,as=null,Dt=null,ks=null,Op=0}function TA(){let i=_i;i&&(_i=null,i.classList.add("is-done"),setTimeout(()=>i.remove(),450),qo?.onReady?.())}function E_(i){if(!gt)return;if(i==="reset"){He.x.to(Nn.x),He.z.to(Nn.z),He.y.to(gt.activeY+Nn.y),He.zoom.to(0);return}let e=It(Math.exp(He.zoom.target)*(i==="in"?1.3:1/1.3),ls.min,ls.max);He.zoom.to(Math.log(e))}function T_(i){let e=Tn.get(i);!e||!gt||(He.x.to(e.root.position.x),He.z.to(e.root.position.z),He.y.to(gt.activeY+.6),He.zoom.to(Math.log(Math.max(Math.exp(He.zoom.target),ls.focus))))}function A_(i){AA(),He.x.step(i),He.y.step(i),He.z.step(i),He.zoom.step(i);let e=It(Math.exp(He.zoom.x),ls.min*.85,ls.max*1.1);Math.abs(e-We.zoom)>1e-5&&(We.zoom=e,We.updateProjectionMatrix()),Ml.set(He.x.x,He.y.x,He.z.x),We.position.copy(Ml).addScaledVector(Fp,80)}function AA(){He.x.target=It(He.x.target,-9.5,9.5),He.z.target=It(He.z.target,-7.5,7.5),He.zoom.target=It(He.zoom.target,Math.log(ls.min),Math.log(ls.max))}function wl(){if(!pt)return;let i=bn.clientWidth||1,e=bn.clientHeight||1;pt.setSize(i,e,!1),Bs.setSize(i,e),An?.setSize(i,e);let t=i/e,n=Cp?Os.w:Os.w+(mA-Os.w)*(1-It((i-560)/340,0,1)),s=Math.max(Os.h,n/t)/2*(Cp?vA:1);We.left=-s*t,We.right=s*t,We.top=s,We.bottom=-s;let r=Cp?0:It((i-900)/600,0,1)*(xA-gA)/2;r>.5?We.setViewOffset(i,e,r,0,i,e):We.clearViewOffset(),We.updateProjectionMatrix()}var RA=()=>pt.domElement.clientHeight/((We.top-We.bottom)/We.zoom);function CA(){let i=pt.domElement;i.addEventListener("pointermove",PA),i.addEventListener("pointerleave",()=>{Oi.active=!1,C_(null)}),!wu&&(i.addEventListener("pointerdown",IA),i.addEventListener("pointerup",LA),i.addEventListener("pointercancel",e=>{Bi.delete(e.pointerId),Dt=null,ks=null}),i.addEventListener("wheel",NA,{passive:!1}),i.addEventListener("contextmenu",e=>e.preventDefault()))}function Au(i){let e=pt.domElement.getBoundingClientRect();El.set((i.clientX-e.left)/e.width*2-1,-((i.clientY-e.top)/e.height)*2+1)}function IA(i){if(pt.domElement.setPointerCapture?.(i.pointerId),Au(i),Bi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Bi.size===2){let[e,t]=[...Bi.values()];ks={d:Math.hypot(e.x-t.x,e.y-t.y),z:He.zoom.target},Dt=null;return}Dt={id:i.pointerId,x0:i.clientX,y0:i.clientY,lx:i.clientX,ly:i.clientY,lt:performance.now(),panning:!1,vx:0,vz:0}}function PA(i){if(Au(i),Oi.active=!0,Ip=!0,Bi.has(i.pointerId)&&Bi.set(i.pointerId,{x:i.clientX,y:i.clientY}),ks&&Bi.size===2){let[h,u]=[...Bi.values()];He.zoom.to(ks.z+Math.log(Math.hypot(h.x-u.x,h.y-u.y)/ks.d));return}if(!Dt||Dt.id!==i.pointerId||(!Dt.panning&&Math.hypot(i.clientX-Dt.x0,i.clientY-Dt.y0)>5&&(Dt.panning=!0),!Dt.panning))return;let e=performance.now(),t=i.clientX-Dt.lx,n=i.clientY-Dt.ly,s=Math.max(.001,(e-Dt.lt)/1e3);Dt.lx=i.clientX,Dt.ly=i.clientY,Dt.lt=e;let r=RA(),o=-t/r,a=n/r/g_,l=(o-a)/Math.SQRT2,c=(-o-a)/Math.SQRT2;He.x.snap(It(He.x.x+l,-9.5,9.5)),He.z.snap(It(He.z.x+c,-7.5,7.5)),Dt.vx=Dt.vx*.6+l/s*.4,Dt.vz=Dt.vz*.6+c/s*.4}function LA(i){if(Bi.delete(i.pointerId),ks){Bi.size<2&&(ks=null),Dt=null;return}if(!Dt||Dt.id!==i.pointerId)return;let e=Dt;if(Dt=null,e.panning){let t=It(e.vx,-30,30),n=It(e.vz,-30,30);He.x.v=t,He.z.v=n,He.x.to(He.x.x+t*.12),He.z.to(He.z.x+n*.12);return}Au(i),qo.onSelectBot?.(R_())}function NA(i){i.preventDefault(),Au(i);let e=Math.exp(He.zoom.target),t=It(e*Math.exp(-i.deltaY*(i.ctrlKey?.012:.0016)),ls.min,ls.max);if(t===e)return;let n=We.view?.enabled?We.view.offsetX/We.view.fullWidth*2:0,s=El.x+n,r=El.y,o=1/e-1/t,a=s*We.right*o,l=r*We.top*o/g_;He.x.to(He.x.target+(a-l)/Math.SQRT2),He.z.to(He.z.target+(-a-l)/Math.SQRT2),He.zoom.to(Math.log(t))}function R_(){Mu.setFromCamera(El,We);let i=Mu.intersectObjects([...Up],!1)[0];return i?i.object.userData.actorId:null}function C_(i){i!==as&&(as&&Tn.get(as)?.setHovered(!1),as=i,i&&Tn.get(i)?.setHovered(!0),bn.classList.toggle("is-hovering",!!i),qo.onHoverBot?.(i))}var m_=[3458905,689407,16752394,16732064,16738835,1357990],DA=new Ht(.07,.035);function FA(i){let e=new lt;e.position.copy(i);let t=[];for(let n=0;n<36;n++){let s=new ze(DA,new Mt({color:m_[n%m_.length],side:en,transparent:!0})),r=Math.random()*Math.PI*2,o=2.2+Math.random()*1.6,a=.8+Math.random()*1.2;t.push({m:s,v:new I(Math.cos(r)*a,o,Math.sin(r)*a),spin:new I(Math.random()*9,Math.random()*9,0)}),e.add(s)}Ui.add(e),Wo.push({group:e,parts:t,t:0,life:1.6})}function UA(i){for(let e=Wo.length-1;e>=0;e--){let t=Wo[e];t.t+=i;for(let n of t.parts)n.v.y-=6.5*i,n.v.multiplyScalar(1-1.4*i),n.m.position.addScaledVector(n.v,i),n.m.rotation.x+=n.spin.x*i,n.m.rotation.y+=n.spin.y*i,n.m.material.opacity=Math.max(0,1-t.t/t.life);t.t>=t.life&&(t.group.removeFromParent(),t.parts.forEach(n=>n.m.material.dispose()),Wo.splice(e,1))}}function I_({width:i=1600,height:e=900,scale:t=1,box:n={x:.06,y:.06,w:.88,h:.76}}={}){let s=gt?.activeOpen();if(!s||!An)return null;let r=pt.getPixelRatio(),o=Math.min(pt.capabilities.maxTextureSize,pt.capabilities.maxRenderbufferSize||1/0),a=Math.max(1,Math.min(t,o/i,o/e)),l=We.zoom,c=We.position.clone(),h=[],u=p=>{p?.visible&&(p.visible=!1,h.push(p))};for(let p of Tn.values())u(p.ring);for(let p of Hs)u(p.root);for(let p of Wo)u(p.group);let f=s.walls,d=f?.data;try{if(d){let m={...d,floorName:`Floor ${gt.activeIndex+1}`,bots:d.bots.map(g=>({...g,name:"",task:"",step:""}))};f.screen&&f.drawScreen(m),f.board&&f.drawBoard(m)}pt.setPixelRatio(a),pt.setSize(i,e,!1),An.setSize(i,e),OA(i/e,n),Go.set(0,gt.cabinY.x+.7,0).project(We),An.render(It(Go.y*.5+.5,0,1),0,1);let p=document.createElement("canvas");p.width=i,p.height=e;let x=p.getContext("2d");return x.imageSmoothingQuality="high",x.drawImage(pt.domElement,0,0,i,e),p}finally{h.forEach(p=>{p.visible=!0}),d&&(f.screen&&f.drawScreen(d),f.board&&f.drawBoard(d)),pt.setPixelRatio(r),wl(),We.zoom=l,We.position.copy(c),We.updateProjectionMatrix(),Go.set(0,gt.cabinY.x+.7,0).project(We),An.render(It(Go.y*.5+.5,0,1),0,It(1.5/We.zoom,.25,1))}}var Tr=new Xt,bl=new I;function OA(i,e){We.clearViewOffset(),We.zoom=1,We.position.set(Nn.x,gt.activeY+Nn.y,Nn.z).addScaledVector(Fp,80),We.updateMatrixWorld(!0),gt.group.updateMatrixWorld(!0);let t=1/0,n=-1/0,s=1/0,r=-1/0,o=c=>{if(c.visible){if(c.isMesh&&c.geometry){c.geometry.boundingBox||c.geometry.computeBoundingBox(),Tr.copy(c.geometry.boundingBox);for(let h=0;h<8;h++)bl.set(h&1?Tr.max.x:Tr.min.x,h&2?Tr.max.y:Tr.min.y,h&4?Tr.max.z:Tr.min.z).applyMatrix4(c.matrixWorld).applyMatrix4(We.matrixWorldInverse),t=Math.min(t,bl.x),n=Math.max(n,bl.x),s=Math.min(s,bl.y),r=Math.max(r,bl.y)}for(let h of c.children)o(h)}};o(gt.group),Number.isFinite(t)||(t=-Os.w/2,n=Os.w/2,s=-Os.h/2,r=Os.h/2);let a=Math.max((r-s)/e.h,(n-t)/(e.w*i)),l=a*i;We.left=(t+n)/2-(e.x+e.w/2)*l,We.right=We.left+l,We.top=(s+r)/2+(e.y+e.h/2)*a,We.bottom=We.top-a,We.updateProjectionMatrix()}function BA(){__||!Oi.active||!gt||(Mu.setFromCamera(El,We),p_.constant=-gt.activeY,Mu.ray.intersectPlane(p_,Ml)?(Oi.x=Ml.x,Oi.z=Ml.z):Oi.active=!1)}var Go=new I,_u=0;function kA(i){if(!pt)return;if(!Tl||document.hidden){gu.getDelta();return}if(wu){let s=i-_u;if(s<xu-2)return;_u+=Math.max(1,Math.round(s/xu))*xu,i-_u>xu/2&&(_u=i)}let e=Np?0:Math.min(gu.getDelta(),.05);Np&&gu.getDelta(),zs=gu.elapsedTime;let t=performance.now();Vo.update(e,t),A_(e),gt&&gt.update(e,t),Ip&&!Dt?.panning&&(Ip=!1,C_(R_())),BA();let n=gt?.activeOpen()?.alpha??1;for(let s of Tn.values())s.hostAlpha=n,s.tick(e,zs);for(let s of Hs)s.hostAlpha=s.ctx.inst.alpha,s.tick(e,zs),s.dead&&Hs.delete(s);UA(e),An?(Go.set(0,(gt?gt.cabinY.x:0)+.7,0).project(We),An.render(It(Go.y*.5+.5,0,1),e,It(1.5/We.zoom,.25,1))):pt.render(Ui,We),Bs&&(!wu||yA)&&Bs.render(Ui,We),qo?.onFrame?.()}var zA="/4d/blobs/thumbs/",HA="/4d/brand/logo-mark.png";var z_="bothq.waitBlur",H_="bothq.dock",VA={working:"working",idle:"resting",waiting_user:"waiting for you",error:"error",stuck:"stuck",done:"done"},V_={working:"Working",idle:"Resting",waiting_user:"Waiting for you",error:"Error",stuck:"Stuck",done:"Done"},GA={working:["working","working"],waiting_user:["waiting","waiting"],error:["error","errors"],stuck:["stuck","stuck"],idle:["resting","resting"],done:["done","done"]},G_=[{key:"working",s:"working",lead:!0,n:i=>i.working},{key:"attention",s:"waiting_user",alert:!0,n:i=>i.waiting_user+i.stuck},{key:"error",s:"error",alert:!0,n:i=>i.error},{key:"idle",s:"idle",n:i=>i.idle},{key:"done",s:"done",n:i=>i.done,hideZero:!0}],WA={week:"Week",day:"Day",month:"Month"},qA={week:"Usage this week",day:"Usage today",month:"Usage this month"},Gs={close:'<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',minus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',chev:'<svg class="bhq-chev" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',eyeOn:'<svg class="bhq-eye-on" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.9" fill="currentColor"/></svg>',eyeOff:'<svg class="bhq-eye-off" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity=".55"/><path d="M3 13L13 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M3.5 8.6l3 3 6-6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',share:'<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M10 12.2V2.9M6.7 6.1L10 2.8l3.3 3.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2 8.7H6A1.8 1.8 0 0 0 4.2 10.5v5A1.8 1.8 0 0 0 6 17.3h8a1.8 1.8 0 0 0 1.8-1.8v-5A1.8 1.8 0 0 0 14 8.7h-1.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'},Pl=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},N=null;function XA(i){return{h:i||{},top:null,fl:null,panel:null,feed:null,zoom:null,dock:null,owned:[],last:{state:null,opts:{currentFloor:null,selectedBot:null}},skew:0,nowStr:null,floors:new Map,activeFloorId:null,cells:new Map,feedRows:new Map,feedOut:new Set,feedMode:null,feedFirst:!0,failedThumbs:new Set,mode:null,cardBot:null,teamFloor:null,teamReady:!1,ready:!1,keyHandler:null,ro:null,ro2:null,onResize:null,timer:null,fades:[],sh:null,phone:!1,land:!1,mqs:null,mqFn:null,ro3:null,cardY:0,cardStop:null,chipFloor:null}}function V(i,e,...t){let n=document.createElement(i);if(e)for(let s of Object.keys(e)){let r=e[s];r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:n.setAttribute(s,r===!0?"":String(r)))}for(let s of t)s!=null&&s!==!1&&n.append(s);return n}function Ar(i){let e=document.createElement("template");return e.innerHTML=i.trim(),e.content.firstChild}function rt(i,e){e=e==null?"":String(e),i.textContent!==e&&(i.textContent=e)}function ht(i,e,t){t==null||t===!1?i.hasAttribute(e)&&i.removeAttribute(e):(t=t===!0?"":String(t),i.getAttribute(e)!==t&&i.setAttribute(e,t))}function sn(i,e){i.hidden!==!!e&&(i.hidden=!!e)}function Yo(i,e,t){let n=i._vars||(i._vars={});n[e]!==t&&(n[e]=t,i.style.setProperty(e,t))}function Wn(i,e,t){i.classList.contains(e)!==!!t&&i.classList.toggle(e,!!t)}function P_(i,e,t){let n="_px_"+e;i[n]!==t&&(i[n]=t,i.style[e]=t+"px")}function Ll(i,e,t){return Math.min(t,Math.max(e,i))}function YA(i){return i<10?"0"+i:String(i)}function Xo(i,e,t){if(e=Math.max(0,Math.round(Number(e)||0)),i._to===e)return;let n=i._to==null?0:i._to;if(i._to=e,i._raf&&(cancelAnimationFrame(i._raf),i._raf=0),i._tm&&(clearTimeout(i._tm),i._tm=0),t===!1||Pl.matches||n===e){i.textContent=String(e);return}let s=performance.now(),r=700,o=a=>{let l=Ll((a-s)/r,0,1),c=1-Math.pow(1-l,3);i.textContent=String(Math.round(n+(e-n)*c)),i._raf=l<1?requestAnimationFrame(o):0};i._raf=requestAnimationFrame(o),i._tm=setTimeout(()=>{i._tm=0,i._to===e&&(i.textContent=String(e))},r+150)}function Il(i,e,t){return Math.abs(Math.trunc(i))===1?e:t}function zp(i,e){let t=GA[i]||[i,i];return Il(e,t[0],t[1])}function rn(i){let e=typeof i=="number"?i:Date.parse(i);return Number.isFinite(e)?e:null}var $A=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});function yi(i){return i==null?"":$A.format(new Date(i))}var W_=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function KA(i){if(i&&i.now&&i.now!==N.nowStr){let e=rn(i.now);e!=null&&(N.skew=Date.now()-e,N.nowStr=i.now)}}function Ws(){return Date.now()-N.skew}function ZA(i){let e=Math.floor(Math.max(0,i)/6e4);if(e<1)return"under a minute";if(e<60)return e+" min";let t=Math.floor(e/60),n=e%60;if(t<24)return n?t+" h "+n+" min":t+" h";let s=Math.floor(t/24),r=t%24;return r?s+" d "+r+" h":s+" d"}function q_(i){let e=Math.floor(i/6e4);if(e<1)return"under a minute";let t=Math.floor(e/1440),n=Math.floor(e%1440/60),s=e%60;return t>0?t+" d "+n+" h":n>0?n+" h "+s+" min":s+" min"}function Yp(i){let e=Ws()-i,t=Math.floor(e/6e4);if(t<1)return"just now";if(t<60)return t+" min ago";let n=Math.floor(t/60);return n<24?n+" h ago":Math.floor(n/24)+" d ago"}function JA(i){let e=Math.floor((Ws()-i)/6e4);if(e<1)return"now";if(e<60)return e+"m";let t=Math.floor(e/60);return t<24?t+"h":Math.floor(t/24)+"d"}function X_(i){let e=i&&i.unreported;if(!e)return"";let t=rn(e.from),n=rn(e.to);return"Worked (unreported)"+(n==null?"":" \xB7 "+(t==null?"":yi(t)+"\u2013")+yi(n))}function Hp(i){let e=rn(i&&i.last_seen);return e==null?"never reported":"seen "+Yp(e)}function jA(i){let e=i-Ws();if(e<=0)return"due now";let t=Math.ceil(e/6e4);if(t<60)return"in "+t+" min";let n=Math.floor(t/60),s=t%60;if(n<6)return s?"in "+n+" h "+s+" min":"in "+n+" h";if(n<24)return"in "+n+" h";let r=new Date(i);return W_[r.getDay()]+" "+yi(i)}function QA(i){let e=new Date(i);return W_[e.getDay()]+" "+e.getDate()+"/"+YA(e.getMonth()+1)+" "+yi(i)}var e2=new Intl.NumberFormat("en-GB",{maximumFractionDigits:1});function t2(i){let e=Math.max(0,Number(i)||0)/60;return e<10?e2.format(e):String(Math.round(e))}function cs(i){return i&&(i.effective_status||i.status)||"idle"}function Vs(i){return VA[i]||i||""}function n2(i){return/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(i||"")}function i2(i){let e=String(i||"").match(/[\p{L}\p{N}]+/gu)||[];return e.length?e.length===1?Array.from(e[0]).slice(0,2).join("").toUpperCase():(Array.from(e[0])[0]+Array.from(e[1])[0]).toUpperCase():"?"}function Vp(i){let e=i.replace("#","");e.length===3&&(e=e.split("").map(n=>n+n).join(""));let t=n=>{let s=parseInt(e.slice(n,n+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)};return .2126*t(0)+.7152*t(2)+.0722*t(4)}function s2(i){let e=Vp(i),t=1.05/(e+.05),n=(e+.05)/(Vp("#1D1D1F")+.05);return t>=n?"#fff":"#1D1D1F"}function Nl(i,e,t){for(let n=0;n<e.length;n++){let s=i.children[t+n];s!==e[n]&&i.insertBefore(e[n],s||null)}}function Y_(i,e){i.classList.remove(e),i.offsetWidth,i.classList.add(e)}function L_(i){try{return localStorage.getItem(i)}catch{return null}}function $_(i,e){try{localStorage.setItem(i,e)}catch{}}function Gp(i){return i.classList.add("bhq-fade"),i.addEventListener("scroll",()=>K_(i),{passive:!0}),N.fades.push(i),i}function K_(i){let e=i.scrollHeight-i.clientHeight,t=e>2&&i.scrollTop>2,n=e>2&&i.scrollTop<e-2;Yo(i,"--fade-t",t?"20px":"0px"),Yo(i,"--fade-b",n?"22px":"0px"),ht(i,"data-fade",t||n?"":null)}function Cu(){for(let i of N.fades)K_(i)}function r2(i){let e={working:0,idle:0,waiting_user:0,error:0,stuck:0,done:0},t=i.bots;if(t&&typeof t=="object"&&Object.keys(t).length)for(let n of Object.keys(t)){let s=cs(t[n]);e[s]=(e[s]||0)+1}else if(i.summary&&typeof i.summary=="object")for(let n of Object.keys(e))e[n]=Number(i.summary[n])||0;return e}function $o(i){i=i||{};let e=V("img",{class:"bhq-av-img",alt:"",draggable:"false",decoding:"async"}),t=V("span",{class:"bhq-av-fb","aria-hidden":"true"}),n=V("span",{class:"bhq-av"},e,t),s=i.orb===!1?null:V("i",{class:"bhq-orb","aria-hidden":"true"}),r=V("span",{class:"bhq-ava"+(i.cls?" "+i.cls:"")},n,s);return e.addEventListener("error",()=>{e._name&&N.failedThumbs.add(e._name),n.classList.add("is-fb")}),e.addEventListener("load",()=>n.classList.remove("is-fb")),{root:r,inner:n,img:e,fb:t}}function Ko(i,e,t){let n=e.avatar||e.id||"",s=n2(e.color)?e.color:"#A1A1A6";Yo(i.root,"--c",s),Yo(i.root,"--fg",s2(s)),Wn(i.root,"is-dark",Vp(s)<.04),ht(i.root,"data-s",t||null),rt(i.fb,i2(e.name)),i.img._name!==n&&(i.img._name=n,!n||N.failedThumbs.has(n)?(i.img.removeAttribute("src"),i.inner.classList.add("is-fb")):(i.inner.classList.remove("is-fb"),i.img.src=e.has_glb===!1?a2(e):zA+encodeURIComponent(n)+".png"))}var o2="/4d/blobs/lib/",N_=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon","rounded_cube","cone","trio"],D_=["000000","A06B39","FB2B3E","FD690F","F59312","14C16F","13B7A2","1E86FC","8F59F9","F93498","959595"];function a2(i){let e=a=>{let l=2166136261;for(let c of a)l=Math.imul(l^c.charCodeAt(0),16777619)>>>0;return l},t=String(i.id||i.name||""),n=i.look||{},s=N_.includes(n.shape)?n.shape:N_[(e(`shape:${t}`)>>>4)%13];s==="sphere"&&n.accessory==="stem"&&(s="sphere_stem");let r=/^#([0-9a-f]{6})$/i.exec(n.color||i.color||""),o=D_[e(`color:${t}`)%10];if(r){let a=f=>[0,2,4].map(d=>parseInt(f.slice(d,d+2),16)),[l,c,h]=a(r[1]),u=1/0;Math.max(l,c,h)-Math.min(l,c,h)<28&&(o=(l+c+h)/3<75?"000000":"959595",u=0);for(let f of D_){let[d,p,x]=a(f),m=(l+d)/2,g=(2+m/256)*(l-d)**2+4*(c-p)**2+(3-m/256)*(h-x)**2;g<u&&(u=g,o=f)}}return`${o2}${s}-${o}.png`}function Lu(i){return N.owned.push(i),i}function $p(){if(N){if(N.keyHandler&&document.removeEventListener("keydown",N.keyHandler),N.onResize&&removeEventListener("resize",N.onResize),N.ro&&N.ro.disconnect(),N.ro2&&N.ro2.disconnect(),N.ro3&&N.ro3.disconnect(),N.mqs&&N.mqFn)for(let i of N.mqs)i.removeEventListener("change",N.mqFn);N.phone&&document.documentElement.classList.remove("bhq-phone","bhq-land"),N.timer&&clearInterval(N.timer);for(let i of N.owned)i.parentNode&&i.remove();N=null}}function Z_(i){$p(),N=XA(i);let e=document.getElementById("topbar"),t=document.getElementById("floors"),n=document.getElementById("panel"),s=document.getElementById("feed");s||(s=Lu(V("section",{id:"feed"})),document.body.append(s)),ht(s,"aria-label","Activity feed");let r=document.getElementById("scene");r&&ht(r,"aria-label","Office"),t&&ht(t,"aria-label","Floors"),n&&ht(n,"aria-label","Bot card and floor team"),e?l2(e):console.warn("[ui] #topbar not found"),t?c2(t):console.warn("[ui] #floors not found"),n?u2(n):console.warn("[ui] #panel not found"),d2(s),p2(),v2(t,s),w2(s),E2(),N.keyHandler=o=>{if(o.key!=="Escape"||o.defaultPrevented)return;let a=o.target;a&&(a.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))||N.last.opts.selectedBot&&N.h.onSelectBot&&N.h.onSelectBot(null)},document.addEventListener("keydown",N.keyHandler),N.timer=setInterval(()=>{document.hidden||!N.last.state||(ki("topbar",()=>N.top&&ty(N.last.state)),ki("dock",()=>N.dock&&oy(N.last.state)),ki("card-reset",()=>{let o=N.cardBot&&N.last.state.bots&&N.last.state.bots[N.cardBot];o&&N.panel&&ry(N.last.state,o)}))},15e3)}function l2(i){i.textContent="";let e=V("span",{class:"bhq-num bhq-clock",text:"--:--"}),t=V("div",{class:"bhq-brand bhq-surface"},V("img",{class:"bhq-mark",src:HA,alt:"",draggable:"false"}),V("b",{class:"bhq-word",text:"Grok Bot Dashboard"}),V("span",{class:"bhq-sep","aria-hidden":"true"}),V("span",{class:"bhq-live"},V("i",{class:"bhq-dot bhq-live-dot","aria-hidden":"true"}),"Live \xB7 ",e)),n={},s=V("div",{class:"bhq-summary bhq-surface",role:"group","aria-label":"Bot statuses"});for(let p of G_){let x=V("b",{class:"bhq-num"}),m=V("span"),g=V("span",{class:"bhq-schip"+(p.lead?" bhq-schip--lead":""),"data-s":p.s},V("i",{class:"bhq-dot","data-s":p.s,"aria-hidden":"true"}),x,m);n[p.key]={el:g,num:x,label:m,cfg:p},s.append(g)}let r=V("span",{class:"bhq-usage-label",text:"Week"}),o=V("i"),a=V("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Usage limit"},o),l=V("b",{class:"bhq-num bhq-usage-pct"}),c=V("span",{class:"bhq-reset"}),h=V("div",{class:"bhq-usage bhq-surface",hidden:!0},r,a,l,V("span",{class:"bhq-sep","aria-hidden":"true"}),c),u=V("span",{class:"bhq-demo bhq-surface",text:"DEMO",hidden:!0,title:"Demo data, not real bots"}),f=V("button",{class:"bhq-share bhq-surface",type:"button","aria-label":"Share an image of your office",title:"Share"},Ar(Gs.share));f.addEventListener("click",()=>{N.h.onShare&&N.h.onShare(f)});let d=V("div",{class:"bhq-right"},f,u,h);i.append(t,s,d),N.top={root:i,clock:e,chips:n,summary:s,usage:h,usageLabel:r,meter:a,fill:o,pct:l,reset:c,demo:u}}function c2(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow");let e=V("div",{class:"bhq-car","aria-hidden":"true"}),t=V("div",{class:"bhq-shaft"},e),n=V("b",{class:"bhq-num"}),s=V("div",{class:"bhq-fscroll"},t);i.append(V("div",{class:"bhq-fhead"},V("span",{text:"Floors"}),n),s),N.fl={root:i,shaft:t,car:e,count:n,fscroll:s,carTop:null,carH:null,carShown:!1,ready:!1},typeof ResizeObserver=="function"&&(N.ro=new ResizeObserver(()=>sy()),N.ro.observe(t))}function h2(i){let e=V("span",{class:"bhq-num bhq-fnum"}),t=V("b",{class:"bhq-fname"}),n=V("span",{class:"bhq-fdots","aria-hidden":"true"}),s=V("span",{class:"bhq-num bhq-fcount"}),r=V("button",{class:"bhq-floor",type:"button","data-id":i},e,V("span",{class:"bhq-ftext"},t,n),s);return r.addEventListener("click",()=>{N.h.onSelectFloor&&N.h.onSelectFloor(i)}),{btn:r,num:e,name:t,dots:n,count:s,dotEls:[]}}function u2(i){i.textContent="";let e=V("h2",{class:"bhq-h2"}),t=V("span",{class:"bhq-tsub"}),n=V("b",{class:"bhq-num"}),s=V("b",{class:"bhq-num"}),r=V("b",{class:"bhq-num"}),o=V("em",{text:"waiting"}),a=V("em",{text:"errors"}),l=V("span",null,o,s),c=V("span",null,a,r),h=V("header",{class:"bhq-thead bhq-surface bhq-glow","data-s":"idle"},V("div",{class:"bhq-ttop"},e,t),V("div",{class:"bhq-tbot"},V("div",{class:"bhq-tbig"},n,V("span",{text:"working"})),V("div",{class:"bhq-tcounts"},l,c))),u=Gp(V("div",{class:"bhq-members",role:"list"})),f=V("p",{class:"bhq-note",text:"Nobody here yet. A bot shows up when it logs its first step.",hidden:!0}),d=V("div",{class:"bhq-tcard bhq-surface bhq-glow"},u,f),p=V("section",{class:"bhq-team","aria-label":"Floor team"},h,d),x=V("button",{class:"bhq-close",type:"button","aria-label":"Close bot card",title:"Close (Esc)"},Ar(Gs.close));x.addEventListener("click",()=>{N.h.onSelectBot&&N.h.onSelectBot(null)});let m=$o({cls:"bhq-ava--lg"}),g=V("h2",{class:"bhq-h2",tabindex:"-1"}),y=V("p",{class:"bhq-sub"}),w=V("i",{class:"bhq-dot","aria-hidden":"true"}),v=V("span"),S=V("span",{class:"bhq-status"},w,v),M=V("p",{class:"bhq-now"}),A=V("div",{class:"bhq-hero bhq-surface bhq-glow","data-s":"idle"},x,V("div",{class:"bhq-head"},m.root,V("div",{class:"bhq-head-text"},g,y)),S,M),_=V("p",{class:"bhq-task"}),E=V("div",{class:"bhq-block",hidden:!0},V("div",{class:"bhq-label",text:"Task"}),_),R=de=>{let Fe=V("b",{class:"bhq-num"}),Ee=V("small",{text:de||""});return{root:V("div",{class:"bhq-stat"},Fe,Ee),v:Fe,l:Ee}},P=R(),L=R(),k=R("h worked"),D=V("div",{class:"bhq-stats"},P.root,L.root,k.root),B=V("div",{class:"bhq-label"}),X=V("i"),$=V("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Share of total usage"},X),re=V("b",{class:"bhq-num"}),K=V("span",{class:"bhq-share"},re," of all"),te=V("span",{class:"bhq-card-reset"}),z=V("div",{class:"bhq-useblock"},B,V("div",{class:"bhq-use"},$,K),te),oe=V("ol",{class:"bhq-steps",role:"list"}),le=V("div",{class:"bhq-stepsblock"},V("div",{class:"bhq-label",text:"Recent steps"}),oe),Ue=Gp(V("div",{class:"bhq-card-body"},E,D,z,le)),Oe=V("button",{class:"bhq-cta",type:"button",text:"Open chat",disabled:!0,title:"Set Wallpaper feed in Settings to enable Open chat"});Oe.addEventListener("click",()=>{let de=Oe.getAttribute("data-chat");de&&Kp(N.cardBot,de)});let je=V("div",{class:"bhq-more bhq-surface bhq-glow bhq-glow--still"},Ue,V("div",{class:"bhq-card-foot"},Oe)),Z=V("span",{class:"bhq-cgrab","aria-hidden":"true"}),ee=V("section",{class:"bhq-card",hidden:!0,"aria-label":"Bot card"},Z,A,je);i.append(ee,p),N.panel={root:i,team:p,tcard:d,teamHead:h,teamTitle:e,teamSub:t,teamBig:n,nWait:s,nErr:r,rowWait:l,rowErr:c,lErr:a,list:u,teamEmpty:f,card:{root:ee,hero:A,body:Ue,av:m,name:g,where:y,status:S,stDot:w,stTxt:v,now:M,taskBlock:E,task:_,sSteps:P,sTasks:L,sHours:k,usageLabel:B,useBlock:z,fuel:$,fillBar:X,shareNum:re,reset:te,hist:oe,histSig:null,cta:Oe,fresh:!0}}}function Kp(i,e){e&&(N.h.onOpenChat?N.h.onOpenChat(i,e):f2(e))}function f2(i){let e=document.createElement("a");e.href=i,e.rel="noopener",e.style.display="none",document.body.append(e),e.click(),e.remove()}function d2(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow","bhq-glow--still");let e=V("ol",{class:"bhq-frows",role:"list","aria-live":"off"}),t=V("p",{class:"bhq-note",text:"No events yet.",hidden:!0});i.append(V("div",{class:"bhq-fhead"},V("span",{text:"Activity"})),e,t),N.feed={root:i,list:e,empty:t}}function p2(){let i=(t,n,s,r)=>{let o=V("button",{class:"bhq-zbtn "+t,type:"button","aria-label":s,title:s},Ar(n));return o.addEventListener("click",()=>{N.h.onZoom&&N.h.onZoom(r)}),o},e=Lu(V("div",{class:"bhq-zoom bhq-surface",role:"group","aria-label":"Scene zoom"},i("z-out",Gs.minus,"Zoom out","out"),V("span",{class:"bhq-sep","aria-hidden":"true"}),i("z-in",Gs.plus,"Zoom in","in")));document.body.append(e),N.zoom={root:e}}function Ru(i,e,t){let n=V("span",{class:"bhq-dcount bhq-num",text:"0"}),s=Gp(V("div",{class:"bhq-dbody-in"})),r=V("button",{class:"bhq-dtoggle",type:"button","aria-expanded":"false"},V("span",{class:"bhq-dtitle",text:e}),n),o=V("div",{class:"bhq-dh"+(t&&t.eye?" has-eye":"")},r),a=null;t&&t.eye&&(a=V("button",{class:"bhq-eye",type:"button","aria-pressed":"false","aria-label":"Hide this panel for the camera",title:"Hide for the camera"},Ar(Gs.eyeOn),Ar(Gs.eyeOff)),o.append(a)),o.append(Ar(Gs.chev));let l=V("section",{class:"bhq-dcard bhq-surface bhq-glow bhq-glow--still","aria-label":e,"data-dock":i},o,V("div",{class:"bhq-dbody"},s)),c={id:i,root:l,toggle:r,count:n,inner:s,eye:a,open:!1,shown:!1,rows:0};return r.addEventListener("click",()=>Zp(c,!c.shown)),c}var m2=44,g2=140,x2=92,_2=8;function y2(i,e){i.shown=!!e,Wn(i.root,"is-open",i.shown),ht(i.toggle,"aria-expanded",i.shown?"true":"false"),i.inner.inert=!i.shown}function Zp(i,e,t=!0){i.open=!!e;let n=N.dock;if(i.open&&(n.lru=n.lru.filter(s=>s!==i),n.lru.push(i)),t){let s={};for(let r of["waiting","finished","routines"])s[r]=!!n[r].open;$_(H_,JSON.stringify(s))}Wp(n.avail==null?1/0:n.avail)}function Wp(i){let e=N.dock;e.avail=i;let t=[e.check,e.waiting,e.finished,e.routines],n=t.filter(o=>!o.root.hidden),s=new Set(n.filter(o=>o.open)),r=()=>n.reduce((o,a)=>o+(s.has(a)?a.rows?g2:x2:m2),0)+_2*Math.max(0,n.length-1);for(;s.size&&r()>i;){let o=e.lru.find(a=>s.has(a))||[...s][0];s.delete(o)}for(let o of t)y2(o,s.has(o))}function F_(i,e=!0){let t=N.dock;t.blurred=!!i,Wn(t.waiting.root,"is-blurred",t.blurred),ht(t.waiting.eye,"aria-pressed",t.blurred?"true":"false"),ht(t.waiting.eye,"aria-label",t.blurred?"Show this panel":"Hide this panel for the camera"),ht(t.waiting.eye,"title",t.blurred?"Show":"Hide for the camera"),t.wlist.inert=t.blurred,e&&$_(z_,t.blurred?"1":"0")}function v2(i,e){let t=Lu(V("aside",{class:"bhq-dock","aria-label":"Waiting on me, finished work and routines"})),n=Ru("check","Status check"),s=Ru("waiting","Waiting on me",{eye:!0}),r=Ru("finished","Finished"),o=Ru("routines","Routines"),a=V("div",{class:"bhq-wlist"}),l=V("p",{class:"bhq-note",text:"Nothing is waiting on you.",hidden:!0});s.inner.append(a,l);let c=V("ol",{class:"bhq-tl",role:"list"}),h=V("p",{class:"bhq-note",text:"Nothing finished in the last 24 hours.",hidden:!0});r.inner.append(c,h);let u=V("ul",{class:"bhq-rl",role:"list"}),f=V("p",{class:"bhq-note",text:"No routines scheduled.",hidden:!0});o.inner.append(u,f);let d=V("ul",{class:"bhq-ck",role:"list"}),p=V("p",{class:"bhq-note bhq-cknote"});n.inner.append(d,p),n.root.hidden=!0,t.append(n.root,s.root,r.root,o.root),document.body.append(t),N.dock={root:t,check:n,waiting:s,finished:r,routines:o,wlist:a,wempty:l,tl:c,fempty:h,rl:u,rempty:f,cl:d,cnote:p,lru:[],wrows:new Map,crows:new Map,checkT:null,finSig:null,finRefs:[],routSig:null,routRefs:[],copied:new Map,blurred:!1,floors:i,feed:e};let x=null;try{x=JSON.parse(L_(H_)||"null")}catch{x=null}for(let m of["routines","finished","waiting"])Zp(N.dock[m],x&&typeof x[m]=="boolean"?x[m]:m==="waiting",!1);s.eye.addEventListener("click",()=>F_(!N.dock.blurred)),F_(L_(z_)==="1",!1),N.onResize=()=>Rl(),addEventListener("resize",N.onResize),typeof ResizeObserver=="function"&&(N.ro2=new ResizeObserver(()=>Rl()),i&&N.ro2.observe(i),e&&N.ro2.observe(e)),Rl()}function U_(i){return!!i&&i.getClientRects().length>0}function Rl(){let i=N&&N.dock;if(!i)return;if(N.phone){Wp(1/0),Cu();return}let e=24,t=U_(i.floors)?i.floors.offsetTop+i.floors.offsetHeight+10:96,n=U_(i.feed)?i.feed.offsetTop-10:innerHeight-e,s=Math.max(0,n-t);P_(i.root,"top",t),P_(i.root,"maxHeight",s),Wp(s),Cu()}var b2="(max-width: 600px), (max-height: 500px) and (max-width: 950px)",M2="(max-height: 500px) and (orientation: landscape)",S2=6;function kp(i,e){return i*e*.55/(e+.55*Math.abs(i))}function J_(i){let e=i[i.length-1],t=i[0];for(let s of i)if(e.t-s.t<=100){t=s;break}let n=e.t-t.t;return n>0?(e.y-t.y)/n*1e3:0}function O_(i){return i/1e3*.998/(1-.998)}function qp(i,e,t,n,s,r,o){let a=Math.pow(2*Math.PI/(r||.36),2),l=2*(o||1)*Math.sqrt(a),c=i,h=t||0,u=performance.now(),f=0,d=!1,p=x=>{if(d)return;let m=Math.min(.032,Math.max(.001,(x-u)/1e3));if(u=x,h+=(-a*(c-e)-l*h)*m,c+=h*m,Math.abs(c-e)<.35&&Math.abs(h)<12){f=0,n(e),s&&s();return}n(c),f=requestAnimationFrame(p)};return f=requestAnimationFrame(p),()=>{d=!0,f&&cancelAnimationFrame(f)}}function B_(i,e){let t=null;i.addEventListener("pointerdown",s=>{if(!(!e.can(s)||s.pointerType==="mouse"&&s.button!==0)){t={id:s.pointerId,y0:s.clientY,s:e.begin(),hist:[{t:s.timeStamp,y:s.clientY}],moved:!1};try{i.setPointerCapture(s.pointerId)}catch{}}}),i.addEventListener("pointermove",s=>{if(!t||s.pointerId!==t.id)return;let r=s.clientY-t.y0;!t.moved&&Math.abs(r)<S2||(t.moved=!0,t.hist.push({t:s.timeStamp,y:s.clientY}),t.hist.length>8&&t.hist.shift(),e.move(t.s+r))});let n=s=>{if(!t||s.pointerId!==t.id)return;let r=t;t=null,e.end(r.moved,r.moved?J_(r.hist):0)};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n)}var Iu={};function j_(i,e){Iu[i]!==e&&(Iu[i]=e,document.documentElement.style.setProperty(i,e))}function w2(i){let e=V("button",{class:"bhq-sgrab",type:"button","aria-expanded":"false","aria-label":"Expand panel"},V("i",{"aria-hidden":"true"})),t=V("div",{class:"bhq-shead"}),n=V("div",{class:"bhq-speek"},e,t),s=V("div",{class:"bhq-sbody"}),r=V("i",{class:"bhq-sprobe","aria-hidden":"true"}),o=Lu(V("div",{class:"bhq-sheet",role:"region","aria-label":"Floor panel"},n,s,r));document.body.append(o);let a=N.sh={root:o,peek:n,body:s,grab:e,headSlot:t,probe:r,feed:i,y:0,H:0,travel:0,vis0:132,open:!1,busy:!1,cancel:null};a.start=new URLSearchParams(location.search).get("sheet")==="open";let l=d=>{let p=a.travel;Pu(d<0?-kp(-d,160):d>p?p+kp(d-p,160):d)},c=(d,p)=>{if(a.busy=!1,!d){Cl(!a.open);return}Cl(a.y+O_(p)<a.travel/2,p)};B_(n,{can:()=>N.phone&&!N.land,begin:()=>(a.cancel&&(a.cancel(),a.cancel=null),a.busy=!0,a.y),move:l,end:c}),e.addEventListener("click",d=>{d.detail===0&&Cl(!a.open)});let h=null;s.addEventListener("touchstart",d=>{h=a.open&&!N.land&&d.touches.length===1&&s.scrollTop<=0?{y0:d.touches[0].clientY,on:!1,s:0,hist:[]}:null},{passive:!0}),s.addEventListener("touchmove",d=>{if(!h)return;let p=d.touches[0].clientY;if(!h.on){if(s.scrollTop>0||p-h.y0<-2){h=null;return}if(p-h.y0<3)return;h.on=!0,h.y0=p,h.s=a.y,a.busy=!0,a.cancel&&(a.cancel(),a.cancel=null)}d.cancelable&&d.preventDefault(),h.hist.push({t:d.timeStamp,y:p}),h.hist.length>8&&h.hist.shift(),l(h.s+(p-h.y0))},{passive:!1});let u=()=>{if(!h)return;let d=h;h=null,d.on&&c(!0,J_(d.hist))};s.addEventListener("touchend",u),s.addEventListener("touchcancel",u);let f=N.panel;if(f){let d=f.card;B_(d.root,{can:p=>N.phone&&!N.land&&!!p.target.closest(".bhq-hero, .bhq-cgrab")&&!p.target.closest("button"),begin:()=>(N.cardStop&&(N.cardStop(),N.cardStop=null),N.cardY),move:p=>{N.cardY=p<0?-kp(-p,120):p,Al(N.cardY)},end:(p,x)=>{if(!p)return;let m=N.cardY;if(m+O_(x)>130||x>900){let g=d.root.offsetHeight+24;N.cardStop=qp(m,g,x,y=>{N.cardY=y,Al(y)},()=>{N.cardStop=null,N.h.onSelectBot&&N.h.onSelectBot(null),setTimeout(()=>{N.mode==="card"&&(N.cardY=0,Al(0))},120)},.3,1)}else N.cardStop=qp(m,0,x,g=>{N.cardY=g,Al(g)},()=>{N.cardStop=null},.4,Math.abs(x)>600?.8:1)}})}typeof ResizeObserver=="function"&&(N.ro3=new ResizeObserver(()=>{Xp(),Jp()}),N.ro3.observe(o),N.ro3.observe(n),f&&N.ro3.observe(f.card.root))}function Al(i){N.panel.card.root.style.transform=i?"translate3d(0,"+i.toFixed(1)+"px,0)":""}function Q_(){N.cardStop&&(N.cardStop(),N.cardStop=null),N.cardY=0,N.panel&&Al(0)}function Pu(i){let e=N.sh;e.y=i,e.root.style.transform="translate3d(0,"+i.toFixed(1)+"px,0)",e.body.style.opacity=Ll((e.travel-i)/36,0,1).toFixed(2),Jp()}function Cl(i,e,t){let n=N.sh;if(!n||!N.phone||(n.open=!!i,ht(n.grab,"aria-expanded",n.open?"true":"false"),ht(n.grab,"aria-label",n.open?"Collapse panel":"Expand panel"),Wn(n.root,"is-open",n.open),n.body.inert=!n.open&&!N.land,n.cancel&&(n.cancel(),n.cancel=null),N.land))return;let s=n.open?0:n.travel;if(t||Pl.matches||document.hidden){Pu(s);return}n.cancel=qp(n.y,s,e||0,Pu,()=>{n.cancel=null},n.open?.4:.34,Math.abs(e||0)>600?.82:1)}function Xp(){let i=N&&N.sh;!i||!N.phone||(i.H=i.root.offsetHeight,i.vis0=i.peek.offsetHeight+i.probe.offsetHeight,i.travel=N.land?0:Math.max(0,i.H-i.vis0),j_("--bhq-peek",i.vis0+"px"),N.land?(i.root.style.transform="",i.body.style.opacity="",i.y=0):!i.busy&&!i.cancel&&Pu(i.open?0:i.travel))}function Jp(){let i=N&&N.sh;if(!i||!N.phone)return;let e=N.panel&&N.panel.card.root,t;N.land?t=0:N.mode==="card"&&e&&!e.hidden?t=e.offsetHeight:t=Math.max(0,i.H-Ll(i.y,-40,i.travel)),j_("--bhq-vis",Math.round(t*10)/10+"px")}function E2(){if(typeof matchMedia!="function")return;let i=matchMedia(b2),e=matchMedia(M2);N.mqs=[i,e],N.mqFn=()=>T2(i.matches,i.matches&&e.matches),i.addEventListener("change",N.mqFn),e.addEventListener("change",N.mqFn),N.mqFn()}function T2(i,e){let t=N.phone,n=N.sh,s=N.dock,r=N.panel;N.phone=i,N.land=i&&e;let o=document.documentElement;if(o.classList.toggle("bhq-phone",i),o.classList.toggle("bhq-land",N.land),i&&!t)r&&n.headSlot.append(r.teamHead),n.body.append(...[s&&s.waiting.root,r&&r.tcard,s&&s.finished.root,s&&s.routines.root,n.feed].filter(Boolean)),n.open=n.start||N.land,n.start=!1,Xp(),Cl(n.open,0,!0),N.chipFloor=null;else if(!i&&t){n.cancel&&(n.cancel(),n.cancel=null),n.root.style.transform="",n.body.style.opacity="",n.body.inert=!1,Q_(),s&&s.root.append(s.waiting.root,s.finished.root,s.routines.root),r&&r.team.append(r.teamHead,r.tcard),n.feed&&(s&&s.root.parentNode?s.root.parentNode.insertBefore(n.feed,s.root):document.body.append(n.feed));for(let a of Object.keys(Iu))document.documentElement.style.removeProperty(a);Iu={}}else i&&(N.land&&(n.open=!0),Xp(),Cl(n.open,0,!0));Rl(),Cu(),i&&N.last.state&&iy(N.activeFloorId)}function ey(i,e){if(!N||!i)return;e=e||{};let t={currentFloor:e.currentFloor||null,selectedBot:e.selectedBot||null};N.last={state:i,opts:t},KA(i),N.ready||(N.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.add("bhq-ready")))),ki("topbar",()=>N.top&&ty(i)),ki("floors",()=>N.fl&&R2(i,t)),ki("panel",()=>N.panel&&C2(i,t)),ki("feed",()=>N.feed&&F2(i)),ki("dock",()=>N.dock&&oy(i)),ki("zoom",()=>{N.zoom&&!N.zoom.root.isConnected&&document.body.append(N.zoom.root)}),ki("fades",Cu)}var k_=new Set;function ki(i,e){try{e()}catch(t){k_.has(i)||(k_.add(i),console.error("[ui] render failed in "+i,t))}}function ty(i){let e=N.top;rt(e.clock,yi(Date.now()));let t=r2(i);for(let r of G_){let o=e.chips[r.key],a=r.n(t),l=zp(r.s,a);Xo(o.num,a),rt(o.label,l),Wn(o.el,"is-zero",a===0),Wn(o.el,"is-alert",!!r.alert&&a>0),r.hideZero&&sn(o.el,a===0);let c=a+" "+l;r.key==="attention"&&t.stuck>0&&(c=t.waiting_user+" "+zp("waiting_user",t.waiting_user)+", "+t.stuck+" stuck"),ht(o.el,"title",c)}let n=i.usage||{},s=Number.isFinite(n.total_used_pct)?Ll(n.total_used_pct,0,100):null;if(sn(e.usage,s==null),s!=null){let r=s>=95?"error":s>=85?"warn":null;rt(e.usageLabel,WA[n.period]||"Limit"),Yo(e.meter,"--p",(s/100).toFixed(3)),rt(e.pct,Math.round(s)+"%"),ht(e.meter,"aria-valuenow",Math.round(s)),ht(e.meter,"data-level",r),ht(e.usage,"data-level",r);let o="",a=rn(n.resets_at);if(a!=null){let h=a-Ws();o=h>0?"resets in "+q_(h):"resetting now"}rt(e.reset,o),sn(e.reset,!o);let l=e.reset.previousElementSibling;l&&sn(l,!o);let c=rn(n.updated_at);ht(e.usage,"title",c!=null?"Updated at "+yi(c):null)}sn(e.demo,!i.demo)}function A2(i){let e=[];for(let t of["working","waiting_user","error","stuck","done","idle"]){let n=Number(i&&i[t])||0;n>0&&e.push(n+" "+zp(t,n))}return e.join(", ")}function ny(i,e){let t=i.bots||{};return Array.isArray(e.bots)?e.bots:Object.keys(t).filter(n=>t[n].floor===e.id)}function R2(i,e){let t=N.fl,n=i.bots||{},s=(i.floors||[]).slice().sort((a,l)=>(Number(l.order)||0)-(Number(a.order)||0)),r=new Set,o=s.some(a=>a.id===e.currentFloor)?e.currentFloor:null;N.activeFloorId=o,rt(t.count,s.length),s.forEach((a,l)=>{let c=N.floors.get(a.id);c||(c=h2(a.id),N.floors.set(a.id,c)),r.add(a.id);let h=a.order!=null&&Number.isFinite(Number(a.order))?Number(a.order):s.length-l,u=ny(i,a);for(rt(c.num,h),rt(c.name,a.name||a.id),rt(c.count,u.length);c.dotEls.length<u.length;){let p=V("i",{class:"bhq-dot"});c.dotEls.push(p),c.dots.append(p)}for(;c.dotEls.length>u.length;)c.dotEls.pop().remove();u.forEach((p,x)=>ht(c.dotEls[x],"data-s",cs(n[p])));let f=null;for(let p of u){let x=cs(n[p]);if(x==="error"){f="error";break}(x==="waiting_user"||x==="stuck")&&(f="waiting_user")}ht(c.btn,"data-alert",f);let d=A2(a.counts);ht(c.btn,"aria-label","Floor "+h+", "+(a.name||a.id)+": "+u.length+" "+Il(u.length,"bot","bots")+(d?" ("+d+")":"")),ht(c.btn,"title",d||null),ht(c.btn,"aria-current",a.id===o?"true":null)});for(let[a,l]of N.floors)r.has(a)||(l.btn.remove(),N.floors.delete(a));Nl(t.shaft,s.map(a=>N.floors.get(a.id).btn),1),sy(),iy(o)}function iy(i){let e=N.fl;if(!N.phone||!i||N.chipFloor===i)return;let t=N.floors.get(i);if(!t||!t.btn.offsetWidth)return;let n=N.chipFloor==null;N.chipFloor=i;let s=e.fscroll,r=t.btn.getBoundingClientRect(),o=s.getBoundingClientRect();s.scrollTo({left:Math.max(0,s.scrollLeft+(r.left-o.left)-(o.width-r.width)/2),behavior:n||Pl.matches?"auto":"smooth"})}function sy(){let i=N&&N.fl;if(!i)return;let e=N.activeFloorId?N.floors.get(N.activeFloorId):null;if(!e||!e.btn.isConnected||!e.btn.offsetHeight){i.carShown&&(i.car.style.opacity="0",i.carShown=!1);return}let t=e.btn.offsetTop,n=e.btn.offsetHeight;(i.carTop!==t||i.carH!==n)&&(i.carTop=t,i.carH=n,i.car.style.transform="translateY("+t+"px)",i.car.style.height=n+"px"),i.carShown||(i.car.style.opacity="1",i.carShown=!0),i.ready||(i.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>i.shaft.classList.add("is-ready"))))}function C2(i,e){let t=N.panel,n=i.bots||{},s=(i.floors||[]).find(u=>u.id===e.currentFloor)||null,r=e.selectedBot?n[e.selectedBot]:null,o=r?"card":"team",a=N.mode,l=N.cardBot,c=t.team.contains(document.activeElement),h=t.card.root.contains(document.activeElement);if(o!==a&&(sn(t.team,o==="card"),sn(t.card.root,o==="team"),N.mode=o,o==="card"&&Q_(),N.sh&&(Wn(N.sh.root,"is-away",o==="card"),Jp())),o==="card")N.cardBot!==r.id&&(N.cardBot=r.id,t.card.histSig=null,t.card.fresh=!0,t.card.body.scrollTop=0,a==="card"&&Y_(t.card.root,"is-enter")),ry(i,r),a!=="card"&&c&&t.card.name.focus({preventScroll:!0});else if(N.cardBot=null,P2(i,s,e),a==="card"&&h){let u=N.cells.get(l);u&&u.btn.focus({preventScroll:!0})}}function I2(i){let e=$o(),t=V("b",{class:"bhq-mname"}),n=V("span",{class:"bhq-mstep"}),s=V("span",{class:"bhq-mseen bhq-num"}),r=V("button",{class:"bhq-member",type:"button","data-id":i,role:"listitem"},e.root,V("span",{class:"bhq-mtext"},t,n),s);return r.addEventListener("click",()=>{N.h.onSelectBot&&N.h.onSelectBot(i)}),{btn:r,av:e,name:t,step:n,seen:s}}function P2(i,e,t){let n=N.panel,s=i.bots||{},r=e?ny(i,e):[];r=r.filter(d=>s[d]);let o=!0;N.teamFloor!==(e?e.id:null)&&(N.teamFloor=e?e.id:null,n.list.scrollTop=0,o=!N.teamReady,N.teamReady&&Y_(n.list,"is-enter")),N.teamReady=!0,rt(n.teamTitle,e?e.name||e.id:"No floor selected");let a=r.length,l=0,c=0,h=0;for(let d of r){let p=cs(s[d]);p==="working"?l++:p==="waiting_user"||p==="stuck"?c++:p==="error"&&h++}rt(n.teamSub,e?a+" "+Il(a,"bot","bots"):N.phone?"Pick a floor above":"Pick a floor on the left"),ht(n.teamHead,"data-s",l>0?"working":"idle"),Xo(n.teamBig,l,o),Xo(n.nWait,c,o),Xo(n.nErr,h,o),rt(n.lErr,h===1?"error":"errors"),Wn(n.rowWait,"is-zero",!c),Wn(n.rowErr,"is-zero",!h),sn(n.teamEmpty,a>0||!e);let u=new Set(r);for(let[d,p]of N.cells)u.has(d)||(p.btn.remove(),N.cells.delete(d));let f=r.map(d=>{let p=N.cells.get(d);p||(p=I2(d),N.cells.set(d,p));let x=s[d],m=cs(x);Ko(p.av,x,m),rt(p.name,x.name||d);let g=m==="idle"?X_(x):"",y=m==="idle"&&x.status==="working";rt(p.step,g||(y?Vs(m):x.step||Vs(m))),ht(p.step,"data-u",g?"":null);let w=rn(x.last_seen);return rt(p.seen,w==null?"\u2013":JA(w)),ht(p.seen,"title",w==null?"No status line yet":"Last status line "+Yp(w)+" ("+yi(w)+")"),ht(p.btn,"data-s",m),ht(p.btn,"aria-label",(x.name||d)+", "+Vs(m)+", "+Hp(x)),ht(p.btn,"title",(x.name||d)+": "+Vs(m)+(x.step?". "+x.step:"")+" \xB7 "+Hp(x)),p.btn});Nl(n.list,f,0)}function L2(i){return V("li",{class:"bhq-step-row"},V("time",{class:"bhq-num",text:yi(rn(i.t))}),V("span",{text:i.step||Vs(i.status),title:i.step||""}))}function ry(i,e){let t=N.panel.card,n=cs(e),s=Ws(),r=!t.fresh;ht(t.hero,"data-s",n),Ko(t.av,e,n),rt(t.name,e.name||e.id);let o=(i.floors||[]).find(E=>E.id===e.floor),a=o&&(o.name||o.id)||e.group||"",l=Number.isFinite(Number(e.desk))&&e.desk!=null?" \xB7 desk "+Number(e.desk):"";rt(t.where,a+l+" \xB7 "+Hp(e)),ht(t.stDot,"data-s",n);let c=rn(e.since),h=c==null?"":" \xB7 "+(s-c<6e4?"just now":ZA(s-c));rt(t.stTxt,(V_[n]||Vs(n))+h);let u=n==="idle"?X_(e):"";rt(t.now,u||(n==="idle"&&e.status==="working"?"Went quiet after: "+(e.step||"a task"):e.step||"No data on the current step"));let f=typeof e.task=="string"?e.task.trim():"",d=!!f&&!/^tsk-\d+$/i.test(f)&&f!==(e.step||"").trim();sn(t.taskBlock,!d),rt(t.task,d?f:"");let p=e.today||{},x=Number(p.events)||0,m=Number(p.tasks_done)||0;Xo(t.sSteps.v,x,r),rt(t.sSteps.l,Il(x,"step","steps")),Xo(t.sTasks.v,m,r),rt(t.sTasks.l,Il(m,"task","tasks")),rt(t.sHours.v,t2(p.working_min));let g=i.usage&&i.usage.period;rt(t.usageLabel,qA[g]||"Usage");let y=Number.isFinite(e.usage_share)?Ll(e.usage_share,0,1):null;sn(t.useBlock,y==null),y!=null&&(Yo(t.fuel,"--p",(y>0?Math.max(y,.02):0).toFixed(3)),ht(t.fuel,"aria-valuenow",Math.round(y*100)),rt(t.shareNum,Math.round(y*100)+"%"));let w=rn(i.usage&&i.usage.resets_at),v="";if(w!=null){let E=w-s;v=E>0?"resets in "+q_(E):"resetting now"}rt(t.reset,v),sn(t.reset,!v||y==null);let S=(e.history||[]).slice(0,4);S.length>1&&S[0].step===e.step&&(S=S.slice(1)),S=S.slice(0,3);let M=e.id+`
`+S.map(E=>E.t+"|"+E.status+"|"+E.step).join(`
`);if(M!==t.histSig){t.histSig=M,t.hist.textContent="",S.length||t.hist.append(V("li",{class:"bhq-step-empty",text:"No steps yet."}));for(let E of S)t.hist.append(L2(E))}let A=!!e.chat_url;t.cta.disabled===A&&(t.cta.disabled=!A),ht(t.cta,"data-chat",A?e.chat_url:null);let _=A?"Open this bot chat":i.wallpaper_feed?"No chat link yet":"Set Wallpaper feed in Settings to enable Open chat";ht(t.cta,"title",_),t.fresh=!1}function N2(i,e){let t=e.bots&&e.bots[i.bot],n=i.name||t&&t.name||i.bot||"",s=i.status||"idle";return V("li",{class:"bhq-frow","data-s":s},V("time",{class:"bhq-num",text:yi(rn(i.t)),datetime:i.t||""}),V("i",{class:"bhq-dot","data-s":s,"aria-hidden":"true"}),V("span",{class:"bhq-ftxt"},V("b",{text:n})," "+(i.step||Vs(i.status))))}function D2(i){N.feedOut.add(i),i.classList.add("is-out");let e=()=>{i.remove(),N.feedOut.delete(i)};Pl.matches?e():setTimeout(e,420)}function F2(i){let e=N.feed,t=(Array.isArray(i.feed)?i.feed:[]).slice(0,4),n=new Map,s=new Array(t.length);for(let c=t.length-1;c>=0;c--){let h=t[c],u=h.t+"|"+h.bot+"|"+h.status+"|"+h.step,f=n.get(u)||0;n.set(u,f+1),s[c]=f?u+"#"+f:u}let r=new Set(s);for(let[c,h]of N.feedRows)r.has(c)||(N.feedRows.delete(c),D2(h));let o=0;for(let c of s)N.feedRows.has(c)||o++;let a=!N.feedFirst&&o>0&&o<4&&!Pl.matches,l=t.map((c,h)=>{let u=N.feedRows.get(s[h]);if(!u){if(u=N2(c,i),a){u.classList.add("is-new");let f=()=>u.classList.remove("is-new");u.addEventListener("animationend",f,{once:!0}),setTimeout(f,700)}N.feedRows.set(s[h],u)}return u});Nl(e.list,l.concat([...N.feedOut]),0),sn(e.empty,t.length>0),N.feedFirst=!1}function oy(i){B2(i),z2(i),H2(i),W2(i),Rl()}function jp(i,e,t){return i.bots&&i.bots[e]||{id:e,name:t||e,avatar:e}}var U2=15*6e4;function O2(i){let e=$o({orb:!1}),t=V("b",{class:"bhq-ckname"}),n=V("span",{class:"bhq-ckat bhq-num"}),s=V("li",{class:"bhq-ckrow","data-id":i},e.root,t,n);return s.addEventListener("click",()=>{N.h.onSelectBot&&N.h.onSelectBot(i)}),{li:s,av:e,name:t,at:n}}function B2(i){let e=N.dock,t=i.check,n=t&&Array.isArray(t.bots)?t.bots:[];if(sn(e.check.root,!n.length),!n.length){e.checkT=null;return}e.checkT!==t.t&&(e.checkT=t.t,Zp(e.check,!0,!1));let s=rn(t.t)??Ws(),r=Ws()-s>U2,o=n.filter(c=>c.at).length;rt(e.check.count,o+"/"+n.length),ht(e.check.count,"data-s",o===n.length?"done":r?"error":"waiting_user"),e.check.rows=n.length,Wn(e.check.root,"has-rows",!0);let a=new Set,l=n.map(c=>{let h=c.id||c.name;a.add(h);let u=e.crows.get(h);u||(u=O2(h),e.crows.set(h,u)),Ko(u.av,jp(i,h,c.name),null),rt(u.name,c.name||h);let f=rn(c.at);return ht(u.li,"data-ok",f!=null?"yes":r?"no":"wait"),rt(u.at,f!=null?"\u2713 "+yi(f):r?"no answer":"waiting\u2026"),u.li});for(let[c,h]of e.crows)a.has(c)||(h.li.remove(),e.crows.delete(c));Nl(e.cl,l,0),rt(e.cnote,o===n.length?"Every bot answered.":r?"Ask the bots that did not answer to re-read their instructions, or run the setup again.":"Started "+yi(s)+". Each bot ticks off when its own status line arrives.")}function k2(i){let e=$o(),t=V("button",{class:"bhq-wname",type:"button"}),n=V("button",{class:"bhq-wbtn",type:"button",text:"Open chat",hidden:!0}),s=V("b"),r=V("span"),o=V("p",{class:"bhq-wtext"},s,r),a=V("div",{class:"bhq-wrow","data-id":i},e.root,V("div",{class:"bhq-wmain"},V("div",{class:"bhq-wtop"},t,n),o)),l=()=>{N.h.onSelectBot&&N.h.onSelectBot(i)};return t.addEventListener("click",l),a.addEventListener("click",c=>{c.target.closest("button")||l()}),n.addEventListener("click",c=>{c.stopPropagation();let h=n.getAttribute("data-chat");h&&Kp(i,h)}),{row:a,av:e,name:t,btn:n,st:s,step:r}}function z2(i){let e=N.dock,t=i.bots||{},n=Object.keys(t).filter(a=>{let l=cs(t[a]);return l==="waiting_user"||l==="error"}).sort((a,l)=>(rn(t[l].last_event)||0)-(rn(t[a].last_event)||0)||String(t[a].name).localeCompare(String(t[l].name))),s=n.filter(a=>cs(t[a])==="error").length;rt(e.waiting.count,n.length),e.waiting.rows=n.length,Wn(e.waiting.root,"has-rows",n.length>0),ht(e.waiting.count,"data-s",s?"error":n.length?"waiting_user":null);let r=new Set(n);for(let[a,l]of e.wrows)r.has(a)||(l.row.remove(),e.wrows.delete(a));let o=n.map(a=>{let l=e.wrows.get(a);l||(l=k2(a),e.wrows.set(a,l));let c=t[a],h=cs(c);return ht(l.row,"data-s",h),Ko(l.av,c,h),rt(l.name,c.name||a),rt(l.st,V_[h]||Vs(h)),rt(l.step,c.step?" \xB7 "+c.step:""),sn(l.btn,!c.chat_url),ht(l.btn,"data-chat",c.chat_url||null),l.row});Nl(e.wlist,o,0),sn(e.wempty,n.length>0)}function H2(i){let e=N.dock,t=Array.isArray(i.finished);if(sn(e.finished.root,!t),!t)return;let n=Ws(),s=i.finished.map(o=>({e:o,t:rn(o&&o.t)})).filter(o=>o.e&&(o.t==null||n-o.t<=864e5)).sort((o,a)=>(a.t||0)-(o.t||0)).slice(0,60);rt(e.finished.count,s.length),e.finished.rows=s.length,Wn(e.finished.root,"has-rows",s.length>0),sn(e.fempty,s.length>0);let r=s.map(o=>o.t+"|"+o.e.bot+"|"+o.e.step).join(`
`);r!==e.finSig&&(e.finSig=r,e.tl.textContent="",e.finRefs=s.map(o=>{let a=jp(i,o.e.bot,o.e.name),l=$o({orb:!1});Ko(l,a,null);let c=V("span",{class:"bhq-tl-time bhq-num"}),h=V("li",{class:"bhq-tl-row"},l.root,V("div",{class:"bhq-tl-main"},V("div",{class:"bhq-tl-top"},V("b",{class:"bhq-tl-name",text:o.e.name||a.name||o.e.bot||""}),c),V("div",{class:"bhq-tl-step",text:o.e.step||"done",title:o.e.step||""})));return e.tl.append(h),{time:c,t:o.t}}));for(let o of e.finRefs)rt(o.time,o.t==null?"":Yp(o.t))}async function V2(i){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(i),!0}catch{}try{let e=V("textarea",{"aria-hidden":"true",tabindex:"-1",readonly:!0});e.value=i,e.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none",document.body.append(e),e.select();let t=document.execCommand("copy");return e.remove(),!!t}catch{return!1}}async function G2(i,e){let t=N.dock,n="pause routine "+i.routine,s=await V2(n);rt(e.noteText,s?"Copied \u2014 paste it in the chat":"Could not copy \u2014 send: "+n);let r=e.key;clearTimeout(t.copied.get(r)),e.li.classList.add("is-copied"),t.copied.set(r,setTimeout(()=>{t.copied.delete(r),e.li.classList.remove("is-copied")},4200));let o=N.last.state&&N.last.state.bots&&N.last.state.bots[i.bot];o&&o.chat_url&&Kp(o.id,o.chat_url)}function W2(i){let e=N.dock,t=Array.isArray(i.routines);if(sn(e.routines.root,!t),!t)return;let n=i.routines.filter(r=>r&&r.routine).slice().sort((r,o)=>(rn(r.next_run)??1/0)-(rn(o.next_run)??1/0));rt(e.routines.count,n.length),e.routines.rows=n.length,Wn(e.routines.root,"has-rows",n.length>0),sn(e.rempty,n.length>0);let s=n.map(r=>r.bot+"|"+r.routine+"|"+r.schedule+"|"+r.next_run+"|"+r.name).join(`
`);s!==e.routSig&&(e.routSig=s,e.rl.textContent="",e.routRefs=n.map(r=>{let o=jp(i,r.bot,r.name),a=r.name||o.name||r.bot||"",l=r.bot+"|"+r.routine,c=$o({orb:!1});Ko(c,o,null);let h=V("span",{class:"bhq-rnext bhq-num"}),u=V("span"),f=V("button",{class:"bhq-roff",type:"button",text:"Turn off",title:'Copies "pause routine '+r.routine+'" and opens the chat'}),d=V("li",{class:"bhq-rrow"+(e.copied.has(l)?" is-copied":"")},c.root,V("div",{class:"bhq-rmain"},V("div",{class:"bhq-rtop"},V("b",{class:"bhq-rname",text:r.routine,title:r.routine}),h),V("div",{class:"bhq-rbot"},V("span",{class:"bhq-rmeta",text:a+(r.schedule?" \xB7 "+r.schedule:""),title:a+(r.schedule?" \xB7 "+r.schedule:"")}),V("span",{class:"bhq-rnote",role:"status"},Ar(Gs.check),u),f))),p={li:d,next:h,noteText:u,key:l,t:rn(r.next_run)};return rt(u,"Copied \u2014 paste it in the chat"),f.addEventListener("click",()=>G2(r,p)),e.rl.append(d),p}));for(let r of e.routRefs)rt(r.next,r.t==null?"no date":jA(r.t)),ht(r.next,"title",r.t==null?null:QA(r.t))}var fy="bothq.sound",q2="/4d/audio/music-loop.m4a",Nu=45.714285714285715,Qp=2,X2=.4,dy=.75,py=.9,ay=[72,74,76,79,81,84],ly=[76,79,81,84,86,88,91,93],Y2='<svg class="bhq-snd-on" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3.2 7.6h2.9L10 4.5v11L6.1 12.4H3.2z" fill="currentColor"/><path d="M13 7.3a3.9 3.9 0 0 1 0 5.4M15.3 5.1a7 7 0 0 1 0 9.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',$2='<svg class="bhq-snd-off" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3.2 7.6h2.9L10 4.5v11L6.1 12.4H3.2z" fill="currentColor"/><path d="M13.2 8l4 4m0-4l-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',Vi=K2(),Ne=null,Hi=null,oi=null,hs=null,tm=null,Du=null,nm=!1,Dl=!1,qs=null,Fl=null,Pt={buf:null,loading:null,next:0,first:!0,timer:0,playing:!1,srcs:new Set},cy=new Map;function K2(){try{return{music:!0,fx:!0,...JSON.parse(localStorage.getItem(fy))}}catch{return{music:!0,fx:!0}}}function Z2(){try{localStorage.setItem(fy,JSON.stringify(Vi))}catch{}}function my({slot:i,withMusic:e=!0}={}){if(nm)return;nm=!0,Fl=new AbortController;let t=Fl.signal;i&&tR(i,t);let n=()=>{try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}J2()&&(Ne.resume?.(),!Dl&&(Dl=!0,Vi.music&&e&&im()))};for(let o of["pointerdown","keydown","touchend"])addEventListener(o,n,{capture:!0,signal:t});document.addEventListener("visibilitychange",()=>{if(!Ne||!Dl)return;let o=Ne.currentTime;Hi.gain.cancelScheduledValues(o),Hi.gain.setValueAtTime(Hi.gain.value,o),document.hidden?(Hi.gain.linearRampToValueAtTime(0,o+.4),setTimeout(()=>{document.hidden&&Ne.suspend?.()},500)):(Ne.resume?.(),Hi.gain.linearRampToValueAtTime(py,o+1.2))},{signal:t}),document.addEventListener("click",o=>{let a=o.target instanceof Element?o.target:null;if(!a)return;let l=a.closest(".bhq-dtoggle");if(l)return void queueMicrotask(()=>Mi.panel(l.getAttribute("aria-expanded")==="true"));let c=a.closest(".bhq-sgrab");if(c)return void queueMicrotask(()=>Mi.zoom(c.getAttribute("aria-expanded")==="true"?"in":"out",.4));a.closest(".bhq-eye")&&Mi.tick()},{signal:t});let s=0,r=o=>{let a=performance.now();a-s>280&&Mi.zoom(o.deltaY<0?"in":"out"),s=a};document.getElementById("office")?.addEventListener("wheel",r,{passive:!0,signal:t}),document.getElementById("scene")?.addEventListener("wheel",r,{passive:!0,signal:t}),Dl&&Vi.music&&e&&im()}function gy(){xy(),Fl&&(Fl.abort(),Fl=null),qs&&(qs.btn.remove(),qs.pop.remove(),qs=null),nm=!1}function J2(){if(Ne)return!0;let i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;try{Ne=new i({latencyHint:"interactive"})}catch{return!1}let e=Ne.createDynamicsCompressor();e.threshold.value=-16,e.knee.value=8,e.ratio.value=3,e.attack.value=.004,e.release.value=.25,Hi=Ne.createGain(),Hi.gain.value=py,Hi.connect(e),e.connect(Ne.destination),oi=Ne.createGain(),oi.gain.value=0,oi.connect(Hi),hs=Ne.createGain(),hs.gain.value=Vi.fx?dy:0,hs.connect(Hi);let t=Ne.createConvolver();t.buffer=j2(2.2,1.6),tm=Ne.createGain(),tm.connect(t),t.connect(hs),Du=Ne.createBuffer(1,Ne.sampleRate*2,Ne.sampleRate);let n=Du.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return!0}function j2(i,e){let t=Ne.sampleRate,n=Math.floor(i*t),s=Math.floor(.012*t),r=Ne.createBuffer(2,n,t);for(let o=0;o<2;o++){let a=r.getChannelData(o),l=0;for(let c=s;c<n;c++){let h=(c-s)/t,u=1-Math.exp(-2*Math.PI*(500+7e3*Math.exp(-h*1.8))/t);l+=u*(Math.random()*2-1-l),a[c]=l*Math.exp(-6.91*h/e)}}return r}async function im(){if(!Ne||Pt.playing)return;Pt.playing=!0;try{Pt.buf||(Pt.buf=await(Pt.loading||(Pt.loading=fetch(q2).then(e=>e.arrayBuffer()).then(e=>new Promise((t,n)=>Ne.decodeAudioData(e,t,n))))))}catch{Pt.playing=!1,Pt.loading=null;return}if(!Pt.playing)return;let i=Ne.currentTime;oi.gain.cancelScheduledValues(i),oi.gain.setValueAtTime(oi.gain.value,i),oi.gain.linearRampToValueAtTime(X2,i+3),Pt.next=i+.05,Pt.first=!0,hy(),clearInterval(Pt.timer),Pt.timer=setInterval(hy,1e3)}function hy(){for(;Pt.playing&&Pt.next<Ne.currentTime+3;){let i=Pt.next,e=Ne.createBufferSource(),t=Ne.createGain();e.buffer=Pt.buf,Pt.first?t.gain.setValueAtTime(1,i):(t.gain.setValueAtTime(0,i),t.gain.linearRampToValueAtTime(1,i+Qp)),t.gain.setValueAtTime(1,i+Nu),t.gain.linearRampToValueAtTime(0,i+Nu+Qp),e.connect(t),t.connect(oi),e.start(i),e.stop(i+Nu+Qp),Pt.srcs.add(e),e.onended=()=>Pt.srcs.delete(e),Pt.first=!1,Pt.next+=Nu}}function xy(){if(Pt.playing=!1,clearInterval(Pt.timer),!Ne)return;let i=Ne.currentTime;oi.gain.cancelScheduledValues(i),oi.gain.setValueAtTime(oi.gain.value,i),oi.gain.linearRampToValueAtTime(0,i+.8);for(let e of Pt.srcs)try{e.stop(i+.9)}catch{}Pt.srcs.clear()}var Xs=i=>440*2**((i-69)/12);function Mn(i,e){if(!Ne||!Dl||!Vi.fx||Ne.state!=="running"||document.hidden)return!1;if(!i)return!0;let t=performance.now();return t-(cy.get(i)||0)<e?!1:(cy.set(i,t),!0)}function us(i=0,e=.2){let t=Ne.createGain(),n=t;if(Ne.createStereoPanner){let s=Ne.createStereoPanner();s.pan.value=i,t.connect(s),n=s}if(n.connect(hs),e){let s=Ne.createGain();s.gain.value=e,n.connect(s),s.connect(tm)}return t}function _y(i,e,t,n,s){i.setValueAtTime(1e-4,e),i.linearRampToValueAtTime(t,e+n),i.exponentialRampToValueAtTime(1e-4,e+n+s)}function bi(i,e,t,n,s,r,o,a){let l=Ne.createOscillator(),c=Ne.createGain();return l.type=i,l.frequency.setValueAtTime(e,t),_y(c.gain,t,r,o,a),l.connect(c),c.connect(s),l.start(t),l.stop(t+n),l}function zi(i,e=.45,t=0){let n=us(t,.06),s=Ne.createBufferSource(),r=Ne.createBiquadFilter(),o=Ne.createGain();s.buffer=Du,r.type="bandpass",r.frequency.value=3e3+Math.random()*600,r.Q.value=1.3,_y(o.gain,i,e,.001,.022),s.connect(r),r.connect(o),o.connect(n),s.start(i,Math.random()*1.5),s.stop(i+.05),bi("sine",2100*(.96+Math.random()*.08),i,.04,n,e*.3,.001,.02),bi("sine",190,i,.07,n,e*.45,.001,.035)}function Rr(i,e,t,n=0,s=!1){let r=Xs(e),o=us(n,.28);for(let[a,l]of[[1,t],[2,t*.22]])bi("sine",r*a*(s?1.35:.55),i,.36,o,l,.003,.3).frequency.exponentialRampToValueAtTime(r*a,i+.028)}function Q2(i,e,t,n=0){let s=Xs(e),r=us(n,.2),o=new Float32Array(48);for(let l=0;l<o.length;l++){let c=l/(o.length-1)*.36;o[l]=s*(1+.26*Math.exp(-13*c)*Math.sin(2*Math.PI*11*c))*(.86+.14*(1-Math.exp(-30*c)))}let a=bi("sine",s,i,.4,r,t,.002,.34);a.frequency.cancelScheduledValues(i),a.frequency.setValueCurveAtTime(o,i,.36)}function vi(i,e,t,n=.15){let s=Xs(e),r=us(n,.5),o=bi("sine",s,i,1.9,r,t,.002,1.6),a=Ne.createOscillator(),l=Ne.createGain();a.frequency.value=s*3,l.gain.setValueAtTime(s*.5,i),l.gain.exponentialRampToValueAtTime(s*.01,i+.6),a.connect(l),l.connect(o.frequency),a.start(i),a.stop(i+1.9),bi("sine",s*2,i,.7,r,t*.18,.002,.5)}function em(i,e,t=.55,n=.3){let s=us(0,.2),r=Ne.createBufferSource(),o=Ne.createBiquadFilter(),a=Ne.createGain(),[l,c]=e==="in"?[450,3600]:e==="out"?[3200,380]:[300,1500];r.buffer=Du,r.loop=!0,o.type="bandpass",o.Q.value=.9,o.frequency.setValueAtTime(l,i),o.frequency.exponentialRampToValueAtTime(c,i+t),a.gain.setValueAtTime(1e-4,i),a.gain.linearRampToValueAtTime(n,i+t*(e==="in"?.6:.35)),a.gain.exponentialRampToValueAtTime(1e-4,i+t),r.connect(o),o.connect(a),a.connect(s),r.start(i,Math.random()),r.stop(i+t+.05)}function uy(i,e,t){let n=us(0,.25),s=Ne.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(1800,i),s.frequency.exponentialRampToValueAtTime(400,i+.3),s.connect(n),bi("triangle",Xs(e),i,.5,s,t,.004,.42)}function eR(i){let e=2166136261;for(let t of String(i))e=Math.imul(e^t.charCodeAt(0),16777619);return ay[(e>>>0)%ay.length]}var Mi={tick(){Mn("tick",40)&&zi(Ne.currentTime,.35)},hover(i){!i||!Mn("hover:"+i,450)||!Mn("hover",70)||Q2(Ne.currentTime+.01,eR(i),.16,(Math.random()-.5)*.5)},select(i){if(!Mn("select",120))return;let e=Ne.currentTime+.01;i?(zi(e,.4),Rr(e+.02,79,.2,.3),Rr(e+.09,88,.17,.3)):(Rr(e,88,.12,.3,!0),Rr(e+.07,79,.1,.3,!0))},floor(i=0){if(!Mn("floor",150))return;let e=Ne.currentTime+.01;zi(e,.4,-.4),em(e+.01,"slide",.42,.22),bi("sine",95,e+.02,.25,us(0,0),.22,.003,.16).frequency.exponentialRampToValueAtTime(70,e+.2),vi(e+.16,ly[Math.max(0,Math.min(ly.length-1,i))],.12)},zoom(i,e=.55){Mn("zoom",200)&&em(Ne.currentTime+.005,i==="in"?"in":"out",e,.2)},panel(i){if(!Mn("panel",120))return;let e=Ne.currentTime+.01;zi(e,.35,-.35),Rr(e+.01,i?84:79,.13,-.35,!i)},status(i){if(!Mn("status",2500)||!Mn("status:"+i,6e3))return;let e=Ne.currentTime+.02;i==="waiting_user"?(vi(e,88,.14),vi(e+.2,84,.13)):i==="error"?(uy(e,69,.16),uy(e+.17,65,.15)):i==="done"&&(vi(e,84,.08,.2),vi(e+.08,88,.08,.25),vi(e+.16,91,.08,.3))},pick(i=0,e=2){if(!Mn("pick",60))return;let t=Ne.currentTime+.005,n=[84,81,79,76][Math.round(i/Math.max(1,e-1)*3)];zi(t,.32,.25),Rr(t+.012,n,.13,.25)},press(){if(!Mn("press",150))return;let i=Ne.currentTime+.005;zi(i,.4),vi(i+.02,84,.08,0),vi(i+.09,91,.05,.1)},copied(){if(!Mn("copied",300))return;let i=Ne.currentTime+.005;zi(i,.38),vi(i+.03,84,.08,.1),vi(i+.1,88,.08,.15),vi(i+.17,91,.08,.2)},nav(){if(!Mn("nav",150))return;let i=Ne.currentTime+.005;zi(i,.3),em(i+.02,"out",.6,.14)},grab(){if(Mn("grab",80)){let i=Ne.currentTime+.005;zi(i,.3),Rr(i+.01,79,.1,0)}},drop(){if(!Mn("drop",80))return;let i=Ne.currentTime+.005;zi(i,.22),bi("sine",150,i,.16,us(0,.1),.2,.003,.11).frequency.exponentialRampToValueAtTime(95,i+.1)},blink(){if(!Mn("blink",300))return;let i=Ne.currentTime+.005,e=us(0,.22);bi("sine",Xs(81),i,.1,e,.08,.002,.07).frequency.exponentialRampToValueAtTime(Xs(76),i+.06),bi("sine",Xs(88),i+.19,.12,e,.05,.004,.08).frequency.exponentialRampToValueAtTime(Xs(93),i+.25)}};function tR(i,e){let t=document.createElement("button");t.type="button",t.className="bhq-snd bhq-surface",t.setAttribute("aria-label","Sound"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.innerHTML=Y2+$2;let n=document.createElement("div");n.className="bhq-snd-pop bhq-surface",n.setAttribute("role","group"),n.setAttribute("aria-label","Sound"),n.hidden=!0;let s={};for(let[a,l]of[["music","Music"],["fx","Sounds"]]){let c=document.createElement("button");c.type="button",c.className="bhq-snd-row",c.setAttribute("role","switch"),c.innerHTML=`<span>${l}</span><i class="bhq-snd-sw" aria-hidden="true"></i>`,c.addEventListener("click",()=>nR(a,!Vi[a])),s[a]=c,n.append(c)}i.prepend(t),document.body.append(n);let r=()=>{let a=t.getBoundingClientRect();n.style.top=`${Math.round(a.bottom+8)}px`,n.style.right=`${Math.max(8,Math.round(innerWidth-a.right))}px`},o=a=>{a&&r(),n.hidden=!a,t.setAttribute("aria-expanded",a?"true":"false")};t.addEventListener("click",()=>o(n.hidden)),document.addEventListener("pointerdown",a=>{!n.hidden&&!n.contains(a.target)&&!t.contains(a.target)&&o(!1)},{signal:e}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!n.hidden&&o(!1)},{signal:e}),addEventListener("resize",()=>{n.hidden||r()},{signal:e}),qs={btn:t,pop:n,rows:s},yy()}function yy(){if(qs){qs.btn.classList.toggle("is-off",!Vi.music&&!Vi.fx);for(let i of["music","fx"])qs.rows[i].setAttribute("aria-checked",Vi[i]?"true":"false")}}function nR(i,e){if(Vi[i]=e,Z2(),yy(),!!Ne&&(i==="music"&&(e?im():xy()),i==="fx")){let t=Ne.currentTime;hs.gain.cancelScheduledValues(t),hs.gain.setValueAtTime(hs.gain.value,t),hs.gain.linearRampToValueAtTime(e?dy:0,t+.15),e&&setTimeout(()=>Mi.tick(),180)}}var vy={day:"13:00",evening:"18:50",night:"23:00"};function iR(i){let e=document.querySelector("#topbar .bhq-right");if(!e||e.querySelector(".bhq-qual"))return;let t=document.createElement("div");t.className="bhq-qual bhq-surface",t.setAttribute("role","group"),t.setAttribute("aria-label","Office quality");for(let[n,s]of[["mid","2D"],["high","3D"],["4d","4D"]]){let r=document.createElement("button");r.type="button",r.dataset.v=n,r.textContent=s,n==="4d"&&r.classList.add("on"),r.addEventListener("click",()=>i(n)),t.append(r)}e.prepend(t)}function sR(i){let e=document.querySelector("#topbar .bhq-right");if(!e||e.querySelector(".bhq-theme"))return;let t=document.createElement("button");t.type="button",t.className="bhq-theme bhq-surface",t.addEventListener("click",()=>i());let n=e.querySelector(".bhq-qual");e.insertBefore(t,n?n.nextSibling:e.firstChild),My(t)}function My(i){if(!i)return;let e=document.documentElement.dataset.theme==="dark";i.textContent=e?"Light":"Dark",i.title=e?"Switch to light mode":"Switch to dark mode",i.setAttribute("aria-pressed",e?"true":"false"),i.setAttribute("aria-label",i.title)}var by=class{constructor(e,t={}){this.root=e,this.opts=t,this.kind="4d",this.isTower=!0,this.loaded=!1,this.visible=!0,this.framesShown=0,this.deskOf=new Map,this.plan={desks:Array.from({length:20},(r,o)=>o)},this.pal={dark:!1},this.sessions=[],this.extras=null,this.keyOf=new Map,this.towerFloors=[],this.focusKey=null,this.pickedId=null,this.viewFloorId=typeof t.towerFloor=="string"?t.towerFloor:null,this._lastSel=null,this._readyFired=!1,this.ready=new Promise(r=>{this.markReady=r}),y_(e,{onReady:()=>{this.loaded=!0,this.canvas=Tu(),this._readyFired||(this._readyFired=!0,this.markReady(!0))},onFrame:()=>{this.visible&&(this.framesShown++,this.canvas=this.canvas||Tu(),this.opts.onFrame&&this.opts.onFrame(this))},onSelectBot:r=>this.selectBot(r),onHoverBot:r=>Mi.hover(r)}),Z_({onSelectBot:r=>this.selectBot(r),onSelectFloor:r=>this.setTowerFloor(r),onZoom:r=>{E_(r),Mi.zoom(r)},onOpenChat:(r,o)=>rR(o),onShare:()=>{let r=this.captureShare();if(!r)return;let o=document.createElement("a");o.href=r.toDataURL("image/png"),o.download="office.png",o.click()}}),iR(r=>{this.opts.onQuality&&this.opts.onQuality(r)}),sR(()=>{this.opts.onTheme&&this.opts.onTheme()}),my({slot:document.querySelector("#topbar .bhq-right")});let n=document.querySelector("#topbar .bhq-snd"),s=document.querySelector("#topbar .bhq-usage");n&&s&&s.parentElement&&s.parentElement.insertBefore(n,s),this.canvas=Tu(),this.syncLight(),this.setTheme(document.documentElement.dataset.theme==="dark")}selectBot(e){let t=e||null;t!==this.pickedId&&Mi.select(!!t),this.pickedId=t,this._followPick=!!t,this.update(this.sessions)}update(e){this.sessions=Array.isArray(e)?e:[];let t=globalThis.WallpaperFeed,n=t&&typeof t.towerState=="function"?t.towerState(this.sessions,this.extras||{}):{floors:[],bots:{}};this._state=n,this.towerFloors=(n.floors||[]).map(c=>({id:c.id,name:c.name})),this.keyOf=new Map;let s=n.bots||{};for(let c of this.sessions){let h=c.project||c.title||c.id||c.key,u=t&&t.botId?t.botId(h):String(h||"");s[u]||(u=Object.keys(s).find(f=>s[f].name===h)||u),s[u]&&this.keyOf.set(u,c.key)}let r=n.floors||[],o=this.viewFloorId&&r.some(c=>c.id===this.viewFloorId)?this.viewFloorId:null,a=this.pickedId&&s[this.pickedId]?this.pickedId:null;this.pickedId=a,a&&s[a].floor&&s[a].floor!==o&&this._followPick&&(o=s[a].floor),this._followPick=!1,o||(o=r.slice().sort((c,h)=>(h.bots?.length||0)-(c.bots?.length||0))[0]?.id||null),this.viewFloorId=o,this.deskOf=new Map;for(let[c,h]of this.keyOf){let u=s[c];u&&u.floor===o&&u.effective_status==="working"&&this.deskOf.set(h,(u.desk||1)-1)}let l={currentFloor:o,selectedBot:a};v_(n,l);try{ey(n,l)}catch(c){console.error(c)}this._soundStatus(n),a&&a!==this._lastSel&&(this._lastSel=a,T_(a)),a||(this._lastSel=null),this.opts.onFloors&&this.opts.onFloors(this.towerFloors)}_selectedId(e){if(!this.focusKey)return null;for(let[t,n]of this.keyOf)if(n===this.focusKey&&(!e||e[t]))return t;return null}setTowerFloor(e){if(e&&e!==this.viewFloorId){let n=(this._state&&this._state.floors||[]).slice().sort((s,r)=>(Number(s.order)||0)-(Number(r.order)||0)).findIndex(s=>s.id===e);n>=0&&Mi.floor(n)}this.viewFloorId=e,this._lastFocus=this.focusKey,this.update(this.sessions)}_soundStatus(e){let t={},n=e&&e.bots||{};for(let[s,r]of Object.entries(n))t[s]=r.effective_status;if(this._lastStatus){let s=new Set;for(let[o,a]of Object.entries(t))this._lastStatus[o]&&this._lastStatus[o]!==a&&s.add(a);let r=["waiting_user","error","done"].find(o=>s.has(o));r&&Mi.status(r)}this._lastStatus=t}setVisible(e){this.visible=!!e,S_(this.visible)}setTheme(e){try{M_(!!e)}catch(t){console.error(t)}My(document.querySelector(".bhq-theme"))}syncLight(){let e=globalThis.OFFICE_LIGHT||"now",t=Object.prototype.hasOwnProperty.call(vy,e)?vy[e]:null;globalThis.bothq&&typeof globalThis.bothq.setTime=="function"&&globalThis.bothq.setTime(t)}captureShare(){try{return I_()}catch(e){return console.error(e),null}}destroy(){try{gy()}catch(e){console.error(e)}try{$p()}catch(e){console.error(e)}try{w_()}catch(e){console.error(e)}this.canvas=null}};function rR(i){if(!i||!/^https:\/\//i.test(i))return;let e=typeof globalThis<"u"?globalThis.WallpaperFeed:null;if(e&&typeof e.isPaperclipChatUrl=="function"&&e.isPaperclipChatUrl(i)){oR(i);return}Sy(i)}function Sy(i){let e=document.createElement("a");e.href=i,e.rel="noopener",e.style.display="none",document.body.append(e),e.click(),e.remove()}var fs=null;function oR(i){fs||(fs=aR());let e=fs;e.frame.src=i,e.open.href=i,e.root.hidden=!1,e.root.setAttribute("aria-hidden","false");try{e.closeBtn.focus()}catch{}}function Fu(){fs&&(fs.root.hidden=!0,fs.root.setAttribute("aria-hidden","true"),fs.frame.removeAttribute("src"))}function aR(){let i=document.createElement("div");i.className="bhq-pcchat",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Paperclip chat"),i.setAttribute("aria-hidden","true");let e=document.createElement("div");e.className="bhq-pcchat-sheet bhq-surface";let t=document.createElement("div");t.className="bhq-pcchat-head";let n=document.createElement("b");n.className="bhq-pcchat-title",n.textContent="Paperclip chat";let s=document.createElement("a");s.className="bhq-pcchat-open",s.textContent="Open full page",s.rel="noopener",s.addEventListener("click",l=>{l.preventDefault();let c=s.getAttribute("href");Fu(),c&&Sy(c)});let r=document.createElement("button");r.className="bhq-pcchat-close",r.type="button",r.setAttribute("aria-label","Close chat"),r.textContent="\xD7",r.addEventListener("click",()=>Fu()),t.append(n,s,r);let o=document.createElement("p");o.className="bhq-pcchat-note",o.textContent="Uses your Paperclip board login. If the panel stays blank, open the full page.";let a=document.createElement("iframe");return a.className="bhq-pcchat-frame",a.title="Paperclip agent chat",a.setAttribute("referrerpolicy","no-referrer-when-downgrade"),a.setAttribute("allow","clipboard-read; clipboard-write"),e.append(t,o,a),i.append(e),i.addEventListener("click",l=>{l.target===i&&Fu()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&fs&&!fs.root.hidden&&Fu()}),document.body.append(i),{root:i,frame:a,open:s,closeBtn:r}}export{by as Office4D};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

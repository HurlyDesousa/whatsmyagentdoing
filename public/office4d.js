var E0=0,qf=1,T0=2;var gr=1,A0=2,Eo=3,ti=0,pn=1,en=2,ei=0,To=1,Xf=2,Yf=3,ol=4,R0=5;var xr=100,C0=101,I0=102,P0=103,L0=104,N0=200,D0=201,F0=202,U0=203,$f=204,Kf=205,O0=206,B0=207,k0=208,z0=209,H0=210,V0=211,G0=212,W0=213,q0=214,Cc=0,Ic=1,Pc=2,so=3,Lc=4,Nc=5,Dc=6,Fc=7,ah=0,X0=1,Y0=2,xi=0,al=1,ll=2,cl=3,_r=4,hl=5,ul=6,fl=7,Rf="attached",$0="detached",Zf=300,Ps=301,yr=302,lh=303,ch=304,dl=306,jn=1e3,Zn=1001,ro=1002,$e=1003,hh=1004;var vr=1005;var He=1006,Ao=1007;var Vn=1008;var Nn=1009,Jf=1010,jf=1011,Ro=1012,uh=1013,_i=1014,Gn=1015,nn=1016,fh=1017,dh=1018,Co=1020,Qf=35902,td=35899,ed=1021,nd=1022,Wn=1023,Pi=1026,Ls=1027,ph=1028,mh=1029,Ns=1030,gh=1031;var xh=1033,pl=33776,ml=33777,gl=33778,xl=33779,_h=35840,yh=35841,vh=35842,bh=35843,Mh=36196,Sh=37492,wh=37496,Eh=37488,Th=37489,_l=37490,Ah=37491,Rh=37808,Ch=37809,Ih=37810,Ph=37811,Lh=37812,Nh=37813,Dh=37814,Fh=37815,Uh=37816,Oh=37817,Bh=37818,kh=37819,zh=37820,Hh=37821,Vh=36492,Gh=36494,Wh=36495,qh=36283,Xh=36284,yl=36285,Yh=36286;var ir=2300,sr=2301,Tc=2302,Cf=2303,If=2400,Pf=2401,Lf=2402,K0=2500;var id=0,vl=1,Io=2,Z0=3200;var bl=0,J0=1,os="",ae="srgb",dn="srgb-linear",Ea="linear",ve="srgb";var Ac=7680;var j0=519,Q0=512,tg=513,eg=514,$h=515,ng=516,ig=517,Kh=518,sg=519,sd=35044;var rd="300 es",mi=2e3,oo=2001;function cv(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ao(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rg(){let i=ao("canvas");return i.style.display="block",i}var Lm={},lo=null;function Ta(...i){let t="THREE."+i.shift();lo?lo("log",t,...i):console.log(t,...i)}function og(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Nt(...i){i=og(i);let t="THREE."+i.shift();if(lo)lo("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=og(i);let t="THREE."+i.shift();if(lo)lo("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function nr(...i){let t=i.join(" ");t in Lm||(Lm[t]=!0,Nt(...i))}function ag(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var lg={[Cc]:Ic,[Pc]:Dc,[Lc]:Fc,[so]:Nc,[Ic]:Cc,[Dc]:Pc,[Fc]:Lc,[Nc]:so},Li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nm=1234567,ba=Math.PI/180,rr=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]+"-"+yn[t&255]+yn[t>>8&255]+"-"+yn[t>>16&15|64]+yn[t>>24&255]+"-"+yn[e&63|128]+yn[e>>8&255]+"-"+yn[e>>16&255]+yn[e>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function od(i,t){return(i%t+t)%t}function uv(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fv(i,t,e){return i!==t?(e-i)/(t-i):0}function Ma(i,t,e){return(1-e)*i+e*t}function dv(i,t,e,n){return Ma(i,t,1-Math.exp(-e*n))}function pv(i,t=1){return t-Math.abs(od(i,t*2)-t)}function mv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gv(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xv(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _v(i,t){return i+Math.random()*(t-i)}function yv(i){return i*(.5-Math.random())}function vv(i){i!==void 0&&(Nm=i);let t=Nm+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function bv(i){return i*ba}function Mv(i){return i*rr}function Sv(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ev(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tv(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:Nt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ce(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Po={DEG2RAD:ba,RAD2DEG:rr,generateUUID:Jn,clamp:he,euclideanModulo:od,mapLinear:uv,inverseLerp:fv,lerp:Ma,damp:dv,pingpong:pv,smoothstep:mv,smootherstep:gv,randInt:xv,randFloat:_v,randFloatSpread:yv,seededRandom:vv,degToRad:bv,radToDeg:Mv,isPowerOfTwo:Sv,ceilPowerOfTwo:wv,floorPowerOfTwo:Ev,setQuaternionFromProperEuler:Tv,normalize:Ce,denormalize:pi},fd=class fd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fd.prototype.isVector2=!0;var Q=fd,bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let _=Math.acos(m),w=Math.sin(_);g=Math.sin(g*_)/w,a=Math.sin(a*_)/w,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},dd=class dd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qu.copy(this).projectOnVector(t),this.sub(Qu)}reflect(t){return this.sub(Qu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dd.prototype.isVector3=!0;var I=dd,Qu=new I,Dm=new bn,pd=class pd{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],_=s[1],w=s[4],v=s[7],S=s[2],b=s[5],A=s[8];return r[0]=o*x+a*_+l*S,r[3]=o*m+a*w+l*b,r[6]=o*g+a*v+l*A,r[1]=c*x+h*_+u*S,r[4]=c*m+h*w+u*b,r[7]=c*g+h*v+u*A,r[2]=f*x+d*_+p*S,r[5]=f*m+d*w+p*b,r[8]=f*g+d*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(tf.makeScale(t,e)),this}rotate(t){return nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(tf.makeRotation(-t)),this}translate(t,e){return nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(tf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};pd.prototype.isMatrix3=!0;var ee=pd,tf=new ee,Fm=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Av(){let i={enabled:!0,workingColorSpace:dn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=io(s.r),s.g=io(s.g),s.b=io(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?Ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dn]:{primaries:t,whitePoint:n,transfer:Ea,toXYZ:Fm,fromXYZ:Um,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ae},outputColorSpaceConfig:{drawingBufferColorSpace:ae}},[ae]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Fm,fromXYZ:Um,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ae}}}),i}var oe=Av();function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function io(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kr,Uc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{kr===void 0&&(kr=ao("canvas")),kr.width=t.width,kr.height=t.height;let s=kr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=kr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qi(e[n]/255)*255):e[n]=Qi(e[n]);return{data:e,width:t.width,height:t.height}}else return Nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rv=0,co=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rv++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ef(s[o].image)):r.push(ef(s[o]))}else r=ef(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ef(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Nt("Texture: Unable to serialize Texture."),{})}var Cv=0,nf=new I,sn=class i extends Li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=He,o=Vn,a=Wn,l=Nn,c=i.DEFAULT_ANISOTROPY,h=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=Jn(),this.name="",this.source=new co(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(nf).x}get height(){return this.source.getSize(nf).y}get depth(){return this.source.getSize(nf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jn:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case ro:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jn:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case ro:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Zf;sn.DEFAULT_ANISOTROPY=1;var md=class md{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(d+1)/2,S=(g+1)/2,b=(h+f)/4,A=(u+x)/4,y=(p+m)/4;return w>v&&w>S?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=b/n,r=A/n):v>S?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=y/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=A/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-x)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};md.prototype.isVector4=!0;var _e=md,Oc=class extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new co(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends Oc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Aa=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bc=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oh=class oh{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oh().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/zr.setFromMatrixColumn(t,0).length(),r=1/zr.setFromMatrixColumn(t,1).length(),o=1/zr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iv,t,Pv)}lookAt(t,e,n){let s=this.elements;return Bn.subVectors(t,e),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),ys.crossVectors(n,Bn),ys.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),ys.crossVectors(n,Bn)),ys.normalize(),Zl.crossVectors(Bn,ys),s[0]=ys.x,s[4]=Zl.x,s[8]=Bn.x,s[1]=ys.y,s[5]=Zl.y,s[9]=Bn.y,s[2]=ys.z,s[6]=Zl.z,s[10]=Bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],_=n[3],w=n[7],v=n[11],S=n[15],b=s[0],A=s[4],y=s[8],E=s[12],R=s[1],P=s[5],N=s[9],k=s[13],D=s[2],B=s[6],X=s[10],$=s[14],rt=s[3],Z=s[7],et=s[11],z=s[15];return r[0]=o*b+a*R+l*D+c*rt,r[4]=o*A+a*P+l*B+c*Z,r[8]=o*y+a*N+l*X+c*et,r[12]=o*E+a*k+l*$+c*z,r[1]=h*b+u*R+f*D+d*rt,r[5]=h*A+u*P+f*B+d*Z,r[9]=h*y+u*N+f*X+d*et,r[13]=h*E+u*k+f*$+d*z,r[2]=p*b+x*R+m*D+g*rt,r[6]=p*A+x*P+m*B+g*Z,r[10]=p*y+x*N+m*X+g*et,r[14]=p*E+x*k+m*$+g*z,r[3]=_*b+w*R+v*D+S*rt,r[7]=_*A+w*P+v*B+S*Z,r[11]=_*y+w*N+v*X+S*et,r[15]=_*E+w*k+v*$+S*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],m=t[11],g=t[15],_=l*d-c*f,w=a*d-c*u,v=a*f-l*u,S=o*d-c*h,b=o*f-l*h,A=o*u-a*h;return e*(x*_-m*w+g*v)-n*(p*_-m*S+g*b)+s*(p*w-x*S+g*A)-r*(p*v-x*b+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],m=t[14],g=t[15],_=e*a-n*o,w=e*l-s*o,v=e*c-r*o,S=n*l-s*a,b=n*c-r*a,A=s*c-r*l,y=h*x-u*p,E=h*m-f*p,R=h*g-d*p,P=u*m-f*x,N=u*g-d*x,k=f*g-d*m,D=_*k-w*N+v*P+S*R-b*E+A*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(a*k-l*N+c*P)*B,t[1]=(s*N-n*k-r*P)*B,t[2]=(x*A-m*b+g*S)*B,t[3]=(f*b-u*A-d*S)*B,t[4]=(l*R-o*k-c*E)*B,t[5]=(e*k-s*R+r*E)*B,t[6]=(m*v-p*A-g*w)*B,t[7]=(h*A-f*v+d*w)*B,t[8]=(o*N-a*R+c*y)*B,t[9]=(n*R-e*N-r*y)*B,t[10]=(p*b-x*v+g*_)*B,t[11]=(u*v-h*b-d*_)*B,t[12]=(a*E-o*P-l*y)*B,t[13]=(e*P-n*E+s*y)*B,t[14]=(x*w-p*S-m*_)*B,t[15]=(h*S-u*w+f*_)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,_=l*c,w=l*h,v=l*u,S=n.x,b=n.y,A=n.z;return s[0]=(1-(x+g))*S,s[1]=(d+v)*S,s[2]=(p-w)*S,s[3]=0,s[4]=(d-v)*b,s[5]=(1-(f+g))*b,s[6]=(m+_)*b,s[7]=0,s[8]=(p+w)*A,s[9]=(m-_)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=zr.set(s[0],s[1],s[2]).length(),a=zr.set(s[4],s[5],s[6]).length(),l=zr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ui.copy(this);let c=1/o,h=1/a,u=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,e.setFromRotationMatrix(ui),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=mi,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===mi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===oo)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===mi)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===oo)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};oh.prototype.isMatrix4=!0;var Kt=oh,zr=new I,ui=new Kt,Iv=new I(0,0,0),Pv=new I(1,1,1),ys=new I,Zl=new I,Bn=new I,Om=new Kt,Bm=new bn,Ni=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Om.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Om,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ni.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lv=0,km=new I,Hr=new bn,Xi=new Kt,Jl=new I,ca=new I,Nv=new I,Dv=new bn,zm=new I(1,0,0),Hm=new I(0,1,0),Vm=new I(0,0,1),Gm={type:"added"},Fv={type:"removed"},Vr={type:"childadded",child:null},sf={type:"childremoved",child:null},be=class i extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new Ni,n=new bn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ee}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(zm,t)}rotateY(t){return this.rotateOnAxis(Hm,t)}rotateZ(t){return this.rotateOnAxis(Vm,t)}translateOnAxis(t,e){return km.copy(t).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zm,t)}translateY(t){return this.translateOnAxis(Hm,t)}translateZ(t){return this.translateOnAxis(Vm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jl.copy(t):Jl.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(ca,Jl,this.up):Xi.lookAt(Jl,ca,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Hr.setFromRotationMatrix(Xi),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gm),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fv),sf.child=t,this.dispatchEvent(sf),sf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gm),Vr.child=t,this.dispatchEvent(Vr),Vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,t,Nv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,Dv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};be.DEFAULT_UP=new I(0,1,0);be.DEFAULT_MATRIX_AUTO_UPDATE=!0;be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Uv={type:"move"},uo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},jl={h:0,s:0,l:0};function rf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=od(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=rf(o,r,t+1/3),this.g=rf(o,r,t),this.b=rf(o,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=ae){function n(r){r!==void 0&&parseFloat(r)<1&&Nt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Nt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Nt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ae){let n=cg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Nt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ae){return oe.workingToColorSpace(vn.copy(this),t),Math.round(he(vn.r*255,0,255))*65536+Math.round(he(vn.g*255,0,255))*256+Math.round(he(vn.b*255,0,255))}getHexString(t=ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(vn.copy(this),e);let n=vn.r,s=vn.g,r=vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(vn.copy(this),e),t.r=vn.r,t.g=vn.g,t.b=vn.b,t}getStyle(t=ae){oe.workingToColorSpace(vn.copy(this),t);let e=vn.r,n=vn.g,s=vn.b;return t!==ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(vs),this.setHSL(vs.h+t,vs.s+e,vs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vs),t.getHSL(jl);let n=Ma(vs.h,jl.h,e),s=Ma(vs.s,jl.s,e),r=Ma(vs.l,jl.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new dt;dt.NAMES=cg;var or=class extends be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},fi=new I,Yi=new I,of=new I,$i=new I,Gr=new I,Wr=new I,Wm=new I,af=new I,lf=new I,cf=new I,hf=new _e,uf=new _e,ff=new _e,ji=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),fi.subVectors(t,e),s.cross(fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){fi.subVectors(s,e),Yi.subVectors(n,e),of.subVectors(t,e);let o=fi.dot(fi),a=fi.dot(Yi),l=fi.dot(of),c=Yi.dot(Yi),h=Yi.dot(of),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$i.x),l.addScaledVector(o,$i.y),l.addScaledVector(a,$i.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return hf.setScalar(0),uf.setScalar(0),ff.setScalar(0),hf.fromBufferAttribute(t,e),uf.fromBufferAttribute(t,n),ff.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hf,r.x),o.addScaledVector(uf,r.y),o.addScaledVector(ff,r.z),o}static isFrontFacing(t,e,n,s){return fi.subVectors(n,e),Yi.subVectors(t,e),fi.cross(Yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),fi.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Gr.subVectors(s,n),Wr.subVectors(r,n),af.subVectors(t,n);let l=Gr.dot(af),c=Wr.dot(af);if(l<=0&&c<=0)return e.copy(n);lf.subVectors(t,s);let h=Gr.dot(lf),u=Wr.dot(lf);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gr,o);cf.subVectors(t,r);let d=Gr.dot(cf),p=Wr.dot(cf);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Wr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Wm.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Wm,a);let g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(Gr,o).addScaledVector(Wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ke=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,di):di.fromBufferAttribute(r,o),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ql.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ql.copy(n.boundingBox)),Ql.applyMatrix4(t.matrixWorld),this.union(Ql)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ha),tc.subVectors(this.max,ha),qr.subVectors(t.a,ha),Xr.subVectors(t.b,ha),Yr.subVectors(t.c,ha),bs.subVectors(Xr,qr),Ms.subVectors(Yr,Xr),js.subVectors(qr,Yr);let e=[0,-bs.z,bs.y,0,-Ms.z,Ms.y,0,-js.z,js.y,bs.z,0,-bs.x,Ms.z,0,-Ms.x,js.z,0,-js.x,-bs.y,bs.x,0,-Ms.y,Ms.x,0,-js.y,js.x,0];return!df(e,qr,Xr,Yr,tc)||(e=[1,0,0,0,1,0,0,0,1],!df(e,qr,Xr,Yr,tc))?!1:(ec.crossVectors(bs,Ms),e=[ec.x,ec.y,ec.z],df(e,qr,Xr,Yr,tc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ki=[new I,new I,new I,new I,new I,new I,new I,new I],di=new I,Ql=new Ke,qr=new I,Xr=new I,Yr=new I,bs=new I,Ms=new I,js=new I,ha=new I,tc=new I,ec=new I,Qs=new I;function df(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qs.fromArray(i,r);let a=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),l=t.dot(Qs),c=e.dot(Qs),h=n.dot(Qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tn=new I,nc=new Q,Ov=0,ze=class extends Li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ov++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=sd,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nc.fromBufferAttribute(this,e),nc.applyMatrix3(t),this.setXY(e,nc.x,nc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ra=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ca=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var te=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bv=new Ke,ua=new I,pf=new I,Pn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bv.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ua.subVectors(t,this.center);let e=ua.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ua,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ua.copy(t.center).add(pf)),this.expandByPoint(ua.copy(t.center).sub(pf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},kv=0,Kn=new Kt,mf=new be,$r=new I,kn=new Ke,fa=new Ke,cn=new I,Me=class i extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cv(t)?Ca:Ra)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Kn.makeRotationFromQuaternion(t),this.applyMatrix4(Kn),this}rotateX(t){return Kn.makeRotationX(t),this.applyMatrix4(Kn),this}rotateY(t){return Kn.makeRotationY(t),this.applyMatrix4(Kn),this}rotateZ(t){return Kn.makeRotationZ(t),this.applyMatrix4(Kn),this}translate(t,e,n){return Kn.makeTranslation(t,e,n),this.applyMatrix4(Kn),this}scale(t,e,n){return Kn.makeScale(t,e,n),this.applyMatrix4(Kn),this}lookAt(t){return mf.lookAt(t),mf.updateMatrix(),this.applyMatrix4(mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];kn.setFromBufferAttribute(r),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,kn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,kn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(kn.min),this.boundingBox.expandByPoint(kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(kn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(kn.min,fa.min),kn.expandByPoint(cn),cn.addVectors(kn.max,fa.max),kn.expandByPoint(cn)):(kn.expandByPoint(fa.min),kn.expandByPoint(fa.max))}kn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)cn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(cn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(t,c),cn.add($r)),s=Math.max(s,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ze(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new I,l[y]=new I;let c=new I,h=new I,u=new I,f=new Q,d=new Q,p=new Q,x=new I,m=new I;function g(y,E,R){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[y].add(x),a[E].add(x),a[R].add(x),l[y].add(m),l[E].add(m),l[R].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,E=_.length;y<E;++y){let R=_[y],P=R.start,N=R.count;for(let k=P,D=P+N;k<D;k+=3)g(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new I,v=new I,S=new I,b=new I;function A(y){S.fromBufferAttribute(s,y),b.copy(S);let E=a[y];w.copy(E),w.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(b,E);let P=v.dot(l[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,P)}for(let y=0,E=_.length;y<E;++y){let R=_[y],P=R.start,N=R.count;for(let k=P,D=P+N;k<D;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new ze(f,h,u)}if(this.index===null)return Nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ar=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Rn=new I,Es=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gf=new I,zv=new I,Hv=new ee,zn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=gf.subVectors(n,e).cross(zv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(gf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hv.getNormalMatrix(t),s=this.coplanarPoint(gf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vv=0,Mn=class extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=To,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Kf,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ac,this.stencilZFail=Ac,this.stencilZPass=Ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Nt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new zn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Q().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},fo=class extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kr,da=new I,Zr=new I,Jr=new I,jr=new Q,pa=new Q,hg=new Kt,ic=new I,ma=new I,sc=new I,qm=new Q,xf=new Q,Xm=new Q,Ia=class extends be{constructor(t=new fo){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new Me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ar(e,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new Es(n,3,0,!1)),Kr.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=Kr,this.material=t,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&$t('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),hg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Jr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;rc(ic.set(-.5,-.5,0),Jr,o,Zr,s,r),rc(ma.set(.5,-.5,0),Jr,o,Zr,s,r),rc(sc.set(.5,.5,0),Jr,o,Zr,s,r),qm.set(0,0),xf.set(1,0),Xm.set(1,1);let a=t.ray.intersectTriangle(ic,ma,sc,!1,da);if(a===null&&(rc(ma.set(-.5,.5,0),Jr,o,Zr,s,r),xf.set(0,1),a=t.ray.intersectTriangle(ic,sc,ma,!1,da),a===null))return;let l=t.ray.origin.distanceTo(da);l<t.near||l>t.far||e.push({distance:l,point:da.clone(),uv:ji.getInterpolation(da,ic,ma,sc,qm,xf,Xm,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function rc(i,t,e,n,s,r){jr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(pa.x=r*jr.x-s*jr.y,pa.y=s*jr.x+r*jr.y):pa.copy(jr),i.copy(t),i.x+=pa.x,i.y+=pa.y,i.applyMatrix4(hg)}var Zi=new I,_f=new I,oc=new I,ac=new I,Ts=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,e),Zi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_f.copy(t).add(e).multiplyScalar(.5),oc.copy(e).sub(t).normalize(),ac.copy(this.origin).sub(_f);let r=t.distanceTo(e)*.5,o=-this.direction.dot(oc),a=ac.dot(this.direction),l=-ac.dot(oc),c=ac.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_f).addScaledVector(oc,f),d}intersectSphere(t,e){if(t.radius<0)return null;Zi.subVectors(t.center,this.origin);let n=Zi.dot(this.direction),s=Zi.dot(Zi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,_=n.y-o.y,w=n.z-o.z,v=Math.abs(l),S=Math.abs(c),b=Math.abs(h),A,y,E,R,P,N,k,D,B,X,$,rt;if(v>=S&&v>=b?(E=l,N=u,B=p,rt=g,l>=0?(A=c,y=h,R=f,P=d,k=x,D=m,X=_,$=w):(A=h,y=c,R=d,P=f,k=m,D=x,X=w,$=_)):S>=b?(E=c,N=f,B=x,rt=_,c>=0?(A=h,y=l,R=d,P=u,k=m,D=p,X=w,$=g):(A=l,y=h,R=u,P=d,k=p,D=m,X=g,$=w)):(E=h,N=d,B=m,rt=w,h>=0?(A=l,y=c,R=u,P=f,k=p,D=x,X=g,$=_):(A=c,y=l,R=f,P=u,k=x,D=p,X=_,$=g)),E===0)return null;let Z=A/E,et=y/E,z=1/E,ot=R-Z*N,lt=P-et*N,Ot=k-Z*B,Bt=D-et*B,Zt=X-Z*rt,K=$-et*rt,tt=Zt*Bt-K*Ot,mt=ot*K-lt*Zt,Ut=Ot*lt-Bt*ot;if(s){if(tt<0||mt<0||Ut<0)return null}else if((tt<0||mt<0||Ut<0)&&(tt>0||mt>0||Ut>0))return null;let xt=tt+mt+Ut;if(xt===0)return null;let qt=z*(tt*N+mt*B+Ut*rt);return(xt>0?qt<0:qt>0)?null:this.at(qt/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ym=new Kt,tr=new Ts,lc=new Pn,$m=new I,cc=new I,hc=new I,uc=new I,yf=new I,fc=new I,Km=new I,dc=new I,Rt=class extends be{constructor(t=new Me,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){fc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(yf.fromBufferAttribute(u,t),o?fc.addScaledVector(yf,h):fc.addScaledVector(yf.sub(e),h))}e.add(fc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(r),tr.copy(t.ray).recast(t.near),!(lc.containsPoint(tr.origin)===!1&&(tr.intersectSphere(lc,$m)===null||tr.origin.distanceToSquared($m)>(t.far-t.near)**2))&&(Ym.copy(r).invert(),tr.copy(t.ray).applyMatrix4(Ym),!(n.boundingBox!==null&&tr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,tr)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],_=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,S=w;v<S;v+=3){let b=a.getX(v),A=a.getX(v+1),y=a.getX(v+2);s=pc(this,g,t,n,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let _=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=pc(this,o,t,n,c,h,u,_,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],_=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,S=w;v<S;v+=3){let b=v,A=v+1,y=v+2;s=pc(this,g,t,n,c,h,u,b,A,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let _=m,w=m+1,v=m+2;s=pc(this,o,t,n,c,h,u,_,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Gv(i,t,e,n,s,r,o,a){let l;if(t.side===pn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ti,a),l===null)return null;dc.copy(a),dc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(dc);return c<e.near||c>e.far?null:{distance:c,point:dc.clone(),object:i}}function pc(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,cc),i.getVertexPosition(l,hc),i.getVertexPosition(c,uc);let h=Gv(i,t,e,n,cc,hc,uc,Km);if(h){let u=new I;ji.getBarycoord(Km,cc,hc,uc,u),s&&(h.uv=ji.getInterpolatedAttribute(s,a,l,c,u,new Q)),r&&(h.uv1=ji.getInterpolatedAttribute(r,a,l,c,u,new Q)),o&&(h.normal=ji.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};ji.getNormal(cc,hc,uc,f.normal),h.face=f,h.barycoord=u}return h}var ga=new _e,Zm=new _e,Jm=new _e,Wv=new _e,jm=new Kt,mc=new I,vf=new Pn,Qm=new Kt,bf=new Ts,Pa=class extends Rt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Rf,this.bindMatrix=new Kt,this.bindMatrixInverse=new Kt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ke),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,mc),this.boundingBox.expandByPoint(mc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,mc),this.boundingSphere.expandByPoint(mc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vf.copy(this.boundingSphere),vf.applyMatrix4(s),t.ray.intersectsSphere(vf)!==!1&&(Qm.copy(s).invert(),bf.copy(t.ray).applyMatrix4(Qm),!(this.boundingBox!==null&&bf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,bf)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new _e,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Rf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===$0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Nt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;Zm.fromBufferAttribute(s.attributes.skinIndex,t),Jm.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(ga.copy(e),e.set(0,0,0,0)):(ga.set(...e,1),e.set(0,0,0)),ga.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Jm.getComponent(r);if(o!==0){let a=Zm.getComponent(r);jm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Wv.copy(ga).applyMatrix4(jm),o)}}return e.isVector4&&(e.w=ga.w),e.applyMatrix4(this.bindMatrixInverse)}},po=class extends be{constructor(){super(),this.isBone=!0,this.type="Bone"}},mo=class extends sn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=$e,h=$e,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},t0=new Kt,qv=new Kt,La=class i{constructor(t=[],e=[]){this.uuid=Jn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Nt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Kt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Kt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:qv;t0.multiplyMatrices(a,e[r]),t0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new mo(e,t,t,Wn,Gn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(Nt("Skeleton: No bone found with UUID:",r),o=new po),this.bones.push(o),this.boneInverses.push(new Kt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},ts=class extends ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Qr=new Kt,e0=new Kt,gc=[],n0=new Ke,Xv=new Kt,xa=new Rt,_a=new Pn,lr=class extends Rt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Xv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qr),n0.copy(t.boundingBox).applyMatrix4(Qr),this.boundingBox.union(n0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Qr),_a.copy(t.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(_a)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(xa.geometry=this.geometry,xa.material=this.material,xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(n),t.ray.intersectsSphere(_a)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qr),e0.multiplyMatrices(n,Qr),xa.matrixWorld=e0,xa.raycast(t,gc);for(let o=0,a=gc.length;o<a;o++){let l=gc[o];l.instanceId=r,l.object=this,e.push(l)}gc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new mo(new Float32Array(s*this.count),s,this.count,ph,Gn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},er=new Pn,Yv=new Q(.5,.5),xc=new I,go=class{constructor(t=new zn,e=new zn,n=new zn,s=new zn,r=new zn,o=new zn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mi,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],_=r[12],w=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,d-h,g-p,S-_).normalize(),s[1].setComponents(c+o,d+h,g+p,S+_).normalize(),s[2].setComponents(c+a,d+u,g+x,S+w).normalize(),s[3].setComponents(c-a,d-u,g-x,S-w).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,g-m,S-v).normalize();else if(s[4].setComponents(c-l,d-f,g-m,S-v).normalize(),e===mi)s[5].setComponents(c+l,d+f,g+m,S+v).normalize();else if(e===oo)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(t){er.center.set(0,0,0);let e=Yv.distanceTo(t.center);return er.radius=.7071067811865476+e,er.applyMatrix4(t.matrixWorld),this.intersectsSphere(er)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(xc.x=s.normal.x>0?t.max.x:t.min.x,xc.y=s.normal.y>0?t.max.y:t.min.y,xc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var xo=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},kc=new I,zc=new I,i0=new Kt,ya=new Ts,_c=new Pn,Mf=new I,s0=new I,cr=class extends be{constructor(t=new Me,e=new xo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)kc.fromBufferAttribute(e,s-1),zc.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=kc.distanceTo(zc);t.setAttribute("lineDistance",new te(n,1))}else Nt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_c.copy(n.boundingSphere),_c.applyMatrix4(s),_c.radius+=r,t.ray.intersectsSphere(_c)===!1)return;i0.copy(s).invert(),ya.copy(t.ray).applyMatrix4(i0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),_=h.getX(x+1),w=yc(this,t,ya,l,g,_,x);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=yc(this,t,ya,l,x,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=yc(this,t,ya,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=yc(this,t,ya,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function yc(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(kc.fromBufferAttribute(a,s),zc.fromBufferAttribute(a,r),e.distanceSqToSegment(kc,zc,Mf,s0)>n)return;Mf.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Mf);if(!(c<t.near||c>t.far))return{distance:c,point:s0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var r0=new I,o0=new I,Na=class extends cr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)r0.fromBufferAttribute(e,s),o0.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+r0.distanceTo(o0);t.setAttribute("lineDistance",new te(n,1))}else Nt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Da=class extends cr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},_o=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},a0=new Kt,Nf=new Ts,vc=new Pn,bc=new I,Fa=class extends be{constructor(t=new Me,e=new _o){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(s),vc.radius+=r,t.ray.intersectsSphere(vc)===!1)return;a0.copy(s).invert(),Nf.copy(t.ray).applyMatrix4(a0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);bc.fromBufferAttribute(u,m),l0(bc,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)bc.fromBufferAttribute(u,p),l0(bc,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function l0(i,t,e,n,s,r,o){let a=Nf.distanceSqToPoint(i);if(a<e){let l=new I;Nf.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ua=class extends sn{constructor(t=[],e=Ps,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gi=class extends sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class extends sn{constructor(t,e,n=_i,s,r,o,a=$e,l=$e,c,h=Pi,u=1){if(h!==Pi&&h!==Ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new co(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Hc=class extends As{constructor(t,e=_i,n=Ps,s,r,o=$e,a=$e,l,c=Pi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Oa=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ve=class i extends Me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function p(x,m,g,_,w,v,S,b,A,y,E){let R=v/A,P=S/y,N=v/2,k=S/2,D=b/2,B=A+1,X=y+1,$=0,rt=0,Z=new I;for(let et=0;et<X;et++){let z=et*P-k;for(let ot=0;ot<B;ot++){let lt=ot*R-N;Z[x]=lt*_,Z[m]=z*w,Z[g]=D,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ot/A),u.push(1-et/y),$+=1}}for(let et=0;et<y;et++)for(let z=0;z<A;z++){let ot=f+z+B*et,lt=f+z+B*(et+1),Ot=f+(z+1)+B*(et+1),Bt=f+(z+1)+B*et;l.push(ot,lt,Bt),l.push(lt,Ot,Bt),rt+=6}a.addGroup(d,rt,E),d+=rt,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ba=class i extends Me{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=n*2+r,x=s+1,m=new I,g=new I;for(let _=0;_<=p;_++){let w=0,v=0,S=0,b=0;if(_<=n){let E=_/n,R=E*Math.PI/2;v=-h-t*Math.cos(R),S=t*Math.sin(R),b=-t*Math.cos(R),w=E*u}else if(_<=n+r){let E=(_-n)/r;v=-h+E*e,S=t,b=0,w=u+E*f}else{let E=(_-n-r)/n,R=E*Math.PI/2;v=h+t*Math.sin(R),S=t*Math.cos(R),b=t*Math.sin(R),w=u+f+E*u}let A=Math.max(0,Math.min(1,w/d)),y=0;_===0?y=.5/s:_===p&&(y=-.5/s);for(let E=0;E<=s;E++){let R=E/s,P=R*Math.PI*2,N=Math.sin(P),k=Math.cos(P);g.x=-S*k,g.y=v,g.z=S*N,a.push(g.x,g.y,g.z),m.set(-S*k,b,S*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+y,A)}if(_>0){let E=(_-1)*x;for(let R=0;R<s;R++){let P=E+R,N=E+R+1,k=_*x+R,D=_*x+R+1;o.push(P,N,k),o.push(N,D,k)}}}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ka=class i extends Me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new Q;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Cn=class i extends Me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(d,2));function _(){let v=new I,S=new I,b=0,A=(e-t)/n;for(let y=0;y<=r;y++){let E=[],R=y/r,P=R*(e-t)+t;for(let N=0;N<=s;N++){let k=N/s,D=k*l+a,B=Math.sin(D),X=Math.cos(D);S.x=P*B,S.y=-R*n+m,S.z=P*X,u.push(S.x,S.y,S.z),v.set(B,A,X).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-R),E.push(p++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let R=x[E][y],P=x[E+1][y],N=x[E+1][y+1],k=x[E][y+1];(t>0||E!==0)&&(h.push(R,P,k),b+=3),(e>0||E!==r-1)&&(h.push(P,N,k),b+=3)}c.addGroup(g,b,0),g+=b}function w(v){let S=p,b=new Q,A=new I,y=0,E=v===!0?t:e,R=v===!0?1:-1;for(let N=1;N<=s;N++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let N=0;N<=s;N++){let D=N/s*l+a,B=Math.cos(D),X=Math.sin(D);A.x=E*X,A.y=m*R,A.z=E*B,u.push(A.x,A.y,A.z),f.push(0,R,0),b.x=B*.5+.5,b.y=X*.5*R+.5,d.push(b.x,b.y),p++}for(let N=0;N<s;N++){let k=S+N,D=P+N;v===!0?h.push(D,D+1,k):h.push(D+1,D,k),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Vc=class i extends Me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){let w=new I,v=new I,S=new I;for(let b=0;b<e.length;b+=3)d(e[b+0],w),d(e[b+1],v),d(e[b+2],S),l(w,v,S,_)}function l(_,w,v,S){let b=S+1,A=[];for(let y=0;y<=b;y++){A[y]=[];let E=_.clone().lerp(v,y/b),R=w.clone().lerp(v,y/b),P=b-y;for(let N=0;N<=P;N++)N===0&&y===b?A[y][N]=E:A[y][N]=E.clone().lerp(R,N/P)}for(let y=0;y<b;y++)for(let E=0;E<2*(b-y)-1;E++){let R=Math.floor(E/2);E%2===0?(f(A[y][R+1]),f(A[y+1][R]),f(A[y][R])):(f(A[y][R+1]),f(A[y+1][R+1]),f(A[y+1][R]))}}function c(_){let w=new I;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(_),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function h(){let _=new I;for(let w=0;w<r.length;w+=3){_.x=r[w+0],_.y=r[w+1],_.z=r[w+2];let v=m(_)/2/Math.PI+.5,S=g(_)/Math.PI+.5;o.push(v,1-S)}p(),u()}function u(){for(let _=0;_<o.length;_+=6){let w=o[_+0],v=o[_+2],S=o[_+4],b=Math.max(w,v,S),A=Math.min(w,v,S);b>.9&&A<.1&&(w<.2&&(o[_+0]+=1),v<.2&&(o[_+2]+=1),S<.2&&(o[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,w){let v=_*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function p(){let _=new I,w=new I,v=new I,S=new I,b=new Q,A=new Q,y=new Q;for(let E=0,R=0;E<r.length;E+=9,R+=6){_.set(r[E+0],r[E+1],r[E+2]),w.set(r[E+3],r[E+4],r[E+5]),v.set(r[E+6],r[E+7],r[E+8]),b.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),y.set(o[R+4],o[R+5]),S.copy(_).add(w).add(v).divideScalar(3);let P=m(S);x(b,R+0,_,P),x(A,R+2,w,P),x(y,R+4,v,P)}}function x(_,w,v,S){S<0&&_.x===1&&(o[w]=_.x-1),v.x===0&&v.z===0&&(o[w]=S/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Nt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Q:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new Kt;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(he(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(he(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},yo=class extends Hn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Q){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gc=class extends yo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ad(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var c0=new I,h0=new I,Sf=new ad,wf=new ad,Ef=new ad,Wc=class extends Hn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(h0.subVectors(s[0],s[1]).add(s[0]),c=h0);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(c0.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=c0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Sf.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),wf.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),Ef.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Sf.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wf.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ef.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Sf.calc(l),wf.calc(l),Ef.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function u0(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function $v(i,t){let e=1-i;return e*e*t}function Kv(i,t){return 2*(1-i)*i*t}function Zv(i,t){return i*i*t}function Sa(i,t,e,n){return $v(i,t)+Kv(i,e)+Zv(i,n)}function Jv(i,t){let e=1-i;return e*e*e*t}function jv(i,t){let e=1-i;return 3*e*e*i*t}function Qv(i,t){return 3*(1-i)*i*i*t}function tb(i,t){return i*i*i*t}function wa(i,t,e,n,s){return Jv(i,t)+jv(i,e)+Qv(i,n)+tb(i,s)}var za=class extends Hn{constructor(t=new Q,e=new Q,n=new Q,s=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Q){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wa(t,s.x,r.x,o.x,a.x),wa(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qc=class extends Hn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(wa(t,s.x,r.x,o.x,a.x),wa(t,s.y,r.y,o.y,a.y),wa(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ha=class extends Hn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Xc=class extends Hn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends Hn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Sa(t,s.x,r.x,o.x),Sa(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Yc=class extends Hn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Sa(t,s.x,r.x,o.x),Sa(t,s.y,r.y,o.y),Sa(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends Hn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(u0(a,l.x,c.x,h.x,u.x),u0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Q().fromArray(s))}return this}},Df=Object.freeze({__proto__:null,ArcCurve:Gc,CatmullRomCurve3:Wc,CubicBezierCurve:za,CubicBezierCurve3:qc,EllipseCurve:yo,LineCurve:Ha,LineCurve3:Xc,QuadraticBezierCurve:Va,QuadraticBezierCurve3:Yc,SplineCurve:Ga}),$c=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Df[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Df[s.type]().fromJSON(s))}return this}},Wa=class extends $c{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ha(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Va(this.currentPoint.clone(),new Q(t,e),new Q(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new za(this.currentPoint.clone(),new Q(t,e),new Q(n,s),new Q(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ga(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new yo(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Rs=class extends Wa{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Wa().fromJSON(s))}return this}};function eb(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=ug(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ob(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return qa(r,o,e,a,l,c,0),o}function ug(i,t,e,n,s){let r;if(s===xb(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=f0(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=f0(o/n|0,i[o],i[o+1],r);return r&&vo(r,r.next)&&(Ya(r),r=r.next),r}function hr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(vo(e,e.next)||Ge(e.prev,e,e.next)===0)){if(Ya(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qa(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ub(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ib(i,n,s,r):nb(i)){t.push(l.i,i.i,c.i),Ya(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=sb(hr(i),t),qa(i,t,e,n,s,r,2)):o===2&&rb(i,t,e,n,s,r):qa(hr(i),t,e,n,s,r,1);break}}}function nb(i){let t=i.prev,e=i,n=i.next;if(Ge(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&va(s,a,r,l,o,c,p.x,p.y)&&Ge(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ib(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ge(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),g=Ff(d,p,t,e,n),_=Ff(x,m,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=g&&v&&v.z<=_;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&va(a,h,l,u,c,f,w.x,w.y)&&Ge(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&va(a,h,l,u,c,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=g;){if(w.x>=d&&w.x<=x&&w.y>=p&&w.y<=m&&w!==s&&w!==o&&va(a,h,l,u,c,f,w.x,w.y)&&Ge(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&va(a,h,l,u,c,f,v.x,v.y)&&Ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function sb(i,t){let e=i;do{let n=e.prev,s=e.next.next;!vo(n,s)&&dg(n,e,e.next,s)&&Xa(n,s)&&Xa(s,n)&&(t.push(n.i,e.i,s.i),Ya(e),Ya(e.next),e=i=s),e=e.next}while(e!==i);return hr(e)}function rb(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&pb(o,a)){let l=pg(o,a);o=hr(o,o.next),l=hr(l,l.next),qa(o,t,e,n,s,r,0),qa(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ob(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=ug(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(db(c))}s.sort(ab);for(let r=0;r<s.length;r++)e=lb(s[r],e);return e}function ab(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function lb(i,t){let e=cb(i,t);if(!e)return t;let n=pg(e,i);return hr(n,n.next),hr(e,e.next)}function cb(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(vo(i,e))return e;do{if(vo(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&fg(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Xa(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&hb(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function hb(i,t){return Ge(i.prev,i,t.prev)<0&&Ge(t.next,i,i.next)<0}function ub(i,t,e,n){let s=i;do s.z===0&&(s.z=Ff(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fb(s)}function fb(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ff(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function db(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fg(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function va(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&fg(i,t,e,n,s,r,o,a)}function pb(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!mb(i,t)&&(Xa(i,t)&&Xa(t,i)&&gb(i,t)&&(Ge(i.prev,i,t.prev)||Ge(i,t.prev,t))||vo(i,t)&&Ge(i.prev,i,i.next)>0&&Ge(t.prev,t,t.next)>0)}function Ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function vo(i,t){return i.x===t.x&&i.y===t.y}function dg(i,t,e,n){let s=Sc(Ge(i,t,e)),r=Sc(Ge(i,t,n)),o=Sc(Ge(e,n,i)),a=Sc(Ge(e,n,t));return!!(s!==r&&o!==a||s===0&&Mc(i,e,t)||r===0&&Mc(i,n,t)||o===0&&Mc(e,i,n)||a===0&&Mc(e,t,n))}function Mc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Sc(i){return i>0?1:i<0?-1:0}function mb(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dg(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xa(i,t){return Ge(i.prev,i,i.next)<0?Ge(i,t,i.next)>=0&&Ge(i,i.prev,t)>=0:Ge(i,t,i.prev)<0||Ge(i,i.next,t)<0}function gb(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pg(i,t){let e=Uf(i.i,i.x,i.y),n=Uf(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function f0(i,t,e,n){let s=Uf(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ya(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uf(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xb(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Of=class{static triangulate(t,e,n=2){return eb(t,e,n)}},Ci=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];d0(t),p0(n,t);let o=t.length;e.forEach(d0);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,p0(n,e[l]);let a=Of.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function d0(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function p0(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var $a=class i extends Me{constructor(t=new Rs([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:_b,w,v=!1,S,b,A,y;if(g){w=g.getSpacedPoints(h),v=!0,f=!1;let st=g.isCatmullRomCurve3?g.closed:!1;S=g.computeFrenetFrames(h,st),b=new I,A=new I,y=new I}f||(m=0,d=0,p=0,x=0);let E=a.extractPoints(c),R=E.shape,P=E.holes;if(!Ci.isClockWise(R)){R=R.reverse();for(let st=0,ct=P.length;st<ct;st++){let ht=P[st];Ci.isClockWise(ht)&&(P[st]=ht.reverse())}}function k(st){let ht=10000000000000001e-36,ut=st[0];for(let gt=1;gt<=st.length;gt++){let Xt=gt%st.length,Gt=st[Xt],Jt=Gt.x-ut.x,ie=Gt.y-ut.y,F=Jt*Jt+ie*ie,Te=Math.max(Math.abs(Gt.x),Math.abs(Gt.y),Math.abs(ut.x),Math.abs(ut.y)),de=ht*Te*Te;if(F<=de){st.splice(Xt,1),gt--;continue}ut=Gt}}k(R),P.forEach(k);let D=P.length,B=R;for(let st=0;st<D;st++){let ct=P[st];R=R.concat(ct)}function X(st,ct,ht){return ct||$t("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(ct,ht)}let $=R.length;function rt(st,ct,ht){let ut,gt,Xt,Gt=st.x-ct.x,Jt=st.y-ct.y,ie=ht.x-st.x,F=ht.y-st.y,Te=Gt*Gt+Jt*Jt,de=Gt*F-Jt*ie;if(Math.abs(de)>Number.EPSILON){let C=Math.sqrt(Te),M=Math.sqrt(ie*ie+F*F),H=ct.x-Jt/C,q=ct.y+Gt/C,J=ht.x-F/M,ft=ht.y+ie/M,pt=((J-H)*F-(ft-q)*ie)/(Gt*F-Jt*ie);ut=H+Gt*pt-st.x,gt=q+Jt*pt-st.y;let j=ut*ut+gt*gt;if(j<=2)return new Q(ut,gt);Xt=Math.sqrt(j/2)}else{let C=!1;Gt>Number.EPSILON?ie>Number.EPSILON&&(C=!0):Gt<-Number.EPSILON?ie<-Number.EPSILON&&(C=!0):Math.sign(Jt)===Math.sign(F)&&(C=!0),C?(ut=-Jt,gt=Gt,Xt=Math.sqrt(Te)):(ut=Gt,gt=Jt,Xt=Math.sqrt(Te/2))}return new Q(ut/Xt,gt/Xt)}let Z=[];for(let st=0,ct=B.length,ht=ct-1,ut=st+1;st<ct;st++,ht++,ut++)ht===ct&&(ht=0),ut===ct&&(ut=0),Z[st]=rt(B[st],B[ht],B[ut]);let et=[],z,ot=Z.concat();for(let st=0,ct=D;st<ct;st++){let ht=P[st];z=[];for(let ut=0,gt=ht.length,Xt=gt-1,Gt=ut+1;ut<gt;ut++,Xt++,Gt++)Xt===gt&&(Xt=0),Gt===gt&&(Gt=0),z[ut]=rt(ht[ut],ht[Xt],ht[Gt]);et.push(z),ot=ot.concat(z)}let lt;if(m===0)lt=Ci.triangulateShape(B,P);else{let st=[],ct=[];for(let ht=0;ht<m;ht++){let ut=ht/m,gt=d*Math.cos(ut*Math.PI/2),Xt=p*Math.sin(ut*Math.PI/2)+x;for(let Gt=0,Jt=B.length;Gt<Jt;Gt++){let ie=X(B[Gt],Z[Gt],Xt);mt(ie.x,ie.y,-gt),ut===0&&st.push(ie)}for(let Gt=0,Jt=D;Gt<Jt;Gt++){let ie=P[Gt];z=et[Gt];let F=[];for(let Te=0,de=ie.length;Te<de;Te++){let C=X(ie[Te],z[Te],Xt);mt(C.x,C.y,-gt),ut===0&&F.push(C)}ut===0&&ct.push(F)}}lt=Ci.triangulateShape(st,ct)}let Ot=lt.length,Bt=p+x;for(let st=0;st<$;st++){let ct=f?X(R[st],ot[st],Bt):R[st];v?(A.copy(S.normals[0]).multiplyScalar(ct.x),b.copy(S.binormals[0]).multiplyScalar(ct.y),y.copy(w[0]).add(A).add(b),mt(y.x,y.y,y.z)):mt(ct.x,ct.y,0)}for(let st=1;st<=h;st++)for(let ct=0;ct<$;ct++){let ht=f?X(R[ct],ot[ct],Bt):R[ct];v?(A.copy(S.normals[st]).multiplyScalar(ht.x),b.copy(S.binormals[st]).multiplyScalar(ht.y),y.copy(w[st]).add(A).add(b),mt(y.x,y.y,y.z)):mt(ht.x,ht.y,u/h*st)}for(let st=m-1;st>=0;st--){let ct=st/m,ht=d*Math.cos(ct*Math.PI/2),ut=p*Math.sin(ct*Math.PI/2)+x;for(let gt=0,Xt=B.length;gt<Xt;gt++){let Gt=X(B[gt],Z[gt],ut);mt(Gt.x,Gt.y,u+ht)}for(let gt=0,Xt=P.length;gt<Xt;gt++){let Gt=P[gt];z=et[gt];for(let Jt=0,ie=Gt.length;Jt<ie;Jt++){let F=X(Gt[Jt],z[Jt],ut);v?mt(F.x,F.y+w[h-1].y,w[h-1].x+ht):mt(F.x,F.y,u+ht)}}}Zt(),K();function Zt(){let st=s.length/3;if(f){let ct=0,ht=$*ct;for(let ut=0;ut<Ot;ut++){let gt=lt[ut];Ut(gt[2]+ht,gt[1]+ht,gt[0]+ht)}ct=h+m*2,ht=$*ct;for(let ut=0;ut<Ot;ut++){let gt=lt[ut];Ut(gt[0]+ht,gt[1]+ht,gt[2]+ht)}}else{for(let ct=0;ct<Ot;ct++){let ht=lt[ct];Ut(ht[2],ht[1],ht[0])}for(let ct=0;ct<Ot;ct++){let ht=lt[ct];Ut(ht[0]+$*h,ht[1]+$*h,ht[2]+$*h)}}n.addGroup(st,s.length/3-st,0)}function K(){let st=s.length/3,ct=0;tt(B,ct),ct+=B.length;for(let ht=0,ut=P.length;ht<ut;ht++){let gt=P[ht];tt(gt,ct),ct+=gt.length}n.addGroup(st,s.length/3-st,1)}function tt(st,ct){let ht=st.length;for(;--ht>=0;){let ut=ht,gt=ht-1;gt<0&&(gt=st.length-1);for(let Xt=0,Gt=h+m*2;Xt<Gt;Xt++){let Jt=$*Xt,ie=$*(Xt+1),F=ct+ut+Jt,Te=ct+gt+Jt,de=ct+gt+ie,C=ct+ut+ie;xt(F,Te,de,C)}}}function mt(st,ct,ht){l.push(st),l.push(ct),l.push(ht)}function Ut(st,ct,ht){qt(st),qt(ct),qt(ht);let ut=s.length/3,gt=_.generateTopUV(n,s,ut-3,ut-2,ut-1);ye(gt[0]),ye(gt[1]),ye(gt[2])}function xt(st,ct,ht,ut){qt(st),qt(ct),qt(ut),qt(ct),qt(ht),qt(ut);let gt=s.length/3,Xt=_.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);ye(Xt[0]),ye(Xt[1]),ye(Xt[3]),ye(Xt[1]),ye(Xt[2]),ye(Xt[3])}function qt(st){s.push(l[st*3+0]),s.push(l[st*3+1]),s.push(l[st*3+2])}function ye(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return yb(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Df[s.type]().fromJSON(s)),new i(n,t.options)}},_b={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new Q(r,o),new Q(a,l),new Q(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Q(o,1-l),new Q(c,1-u),new Q(f,1-p),new Q(x,1-g)]:[new Q(a,1-l),new Q(h,1-u),new Q(d,1-p),new Q(m,1-g)]}};function yb(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ka=class i extends Vc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},bo=class i extends Me{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=he(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new Q,d=new I,p=new I,x=new I,m=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let _=0;_<=e;_++){let w=n+_*h*s,v=Math.sin(w),S=Math.cos(w);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*v,u.y=t[b].y,u.z=t[b].x*S,o.push(u.x,u.y,u.z),f.x=_/e,f.y=b/(t.length-1),a.push(f.x,f.y);let A=l[3*b+0]*v,y=l[3*b+1],E=l[3*b+0]*S;c.push(A,y,E)}}for(let _=0;_<e;_++)for(let w=0;w<t.length-1;w++){let v=w+_*t.length,S=v,b=v+t.length,A=v+t.length+1,y=v+1;r.push(S,b,y),r.push(A,y,b)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var qe=class i extends Me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let _=g*f-o;for(let w=0;w<c;w++){let v=w*u-r;p.push(v,-_,0),x.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){let w=_+c*g,v=_+c*(g+1),S=_+1+c*(g+1),b=_+1+c*g;d.push(w,v,b),d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Za=class i extends Me{constructor(t=new Rs([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;Ci.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let _=p[m];Ci.isClockWise(_)===!0&&(p[m]=_.reverse())}let x=Ci.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let _=p[m];d=d.concat(_)}for(let m=0,g=d.length;m<g;m++){let _=d[m];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let m=0,g=x.length;m<g;m++){let _=x[m],w=_[0]+u,v=_[1]+u,S=_[2]+u;n.push(w,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return vb(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function vb(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var ur=class i extends Me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let _=[],w=g/n,v=o+w*a,S=t*Math.cos(v),b=Math.sqrt(t*t-S*S),A=0;g===0&&o===0?A=.5/e:g===n&&l===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){let E=y/e,R=s+E*r;u.x=-b*Math.cos(R),u.y=S,u.z=b*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+A,1-w),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<e;_++){let w=h[g][_+1],v=h[g][_],S=h[g+1][_],b=h[g+1][_+1];(g!==0||o>0)&&d.push(w,v,b),(g!==n-1||l<Math.PI)&&d.push(v,S,b)}this.setIndex(d),this.setAttribute("position",new te(p,3)),this.setAttribute("normal",new te(x,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function br(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(m0(s))s.isRenderTargetTexture?(Nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(m0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=br(i[e]);for(let s in n)t[s]=n[s]}return t}function m0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bb(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ld(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Lo={clone:br,merge:Sn},Mb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mb,this.fragmentShader=Sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=bb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new dt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Q().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new _e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Kt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Mo=class extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ie=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ze=class extends Ie{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ja=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=ah,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Kc=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Zc=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ws(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Rc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function wb(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function g0(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function Eb(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var Di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Jc=class extends Di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:If,endingEnd:If}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pf:r=t,a=2*e-n;break;case Lf:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pf:o=t,l=2*n-e;break;case Lf:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,_=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-d)*m+(1.5+d)*x+.5*p,v=d*m-d*x;for(let S=0;S!==a;++S)r[S]=g*o[h+S]+_*o[c+S]+w*o[l+S]+v*o[u+S];return r}},jc=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Qc=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},th=class extends Di{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,_=u[g],w=u[g+1],v=t*f+p*2,S=h[v],b=h[v+1],A=Ab(n,e,_,S,s);r[p]=mg(A,x,w,b,m)}return r}};function mg(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Tb(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ab(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=mg(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=Tb(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ws(e,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ws(t.times,Array),values:ws(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Rc(t.settings)&&(n.settings={inTangents:ws(t.settings.inTangents,Array),outTangents:ws(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new th(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ir:e=this.InterpolantFactoryMethodDiscrete;break;case sr:e=this.InterpolantFactoryMethodLinear;break;case Tc:e=this.InterpolantFactoryMethodSmooth;break;case Cf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Nt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return Tc;case this.InterpolantFactoryMethodBezier:return Cf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Rc(this.settings)&&(x0(this.settings.inTangents,t),x0(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&hv(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Rc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function x0(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=sr;var es=class extends Ln{constructor(t,e,n){super(t,e,n)}};es.prototype.ValueTypeName="bool";es.prototype.ValueBufferType=Array;es.prototype.DefaultInterpolation=ir;es.prototype.InterpolantFactoryMethodLinear=void 0;es.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="color";var ns=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};ns.prototype.ValueTypeName="number";var eh=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},is=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new eh(this.times,this.values,this.getValueSize(),t)}};is.prototype.ValueTypeName="quaternion";is.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Ln{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=ir;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Ln{constructor(t,e,n,s){super(t,e,n,s)}};Cs.prototype.ValueTypeName="vector";var Qa=class{constructor(t="",e=-1,n=[],s=K0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Cb(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=wb(l);l=g0(l,1,h),c=g0(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new ns(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function Rb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ns;case"vector":case"vector2":case"vector3":case"vector4":return Cs;case"color":return ja;case"quaternion":return is;case"bool":case"boolean":return es;case"string":return ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Cb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Rb(i.type);if(i.times===void 0){let n=[],s=[];Eb(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),Rc(i.settings)&&(e.settings={inTangents:ws(i.settings.inTangents,Float32Array),outTangents:ws(i.settings.outTangents,Float32Array)}),e}var Ii={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(_0(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!_0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _0(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var nh=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gg=new nh,Fi=class{constructor(t){this.manager=t!==void 0?t:gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Fi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ji={},Bf=class extends Error{constructor(t,e){super(t),this.response=e}},So=class extends Fi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ii.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Ji[t]!==void 0){Ji[t].push({onLoad:e,onProgress:n,onError:s});return}Ji[t]=[],Ji[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Nt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ji[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){_();function _(){u.read().then(({done:w,value:v})=>{if(w)g.close();else{x+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let b=0,A=h.length;b<A;b++){let y=h[b];y.onProgress&&y.onProgress(S)}g.enqueue(v),_()}},w=>{g.error(w)})}}});return new Response(m)}else throw new Bf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ii.add(`file:${t}`,c);let h=Ji[t];delete Ji[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Ji[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ji[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var to=new WeakMap,ih=class extends Fi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ii.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=to.get(o);u===void 0&&(u=[],to.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=ao("img");function l(){h(),e&&e(this);let u=to.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}to.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Ii.remove(`image:${t}`);let f=to.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}to.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ii.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var fr=class extends Fi{constructor(t){super(t)}load(t,e,n,s){let r=new sn,o=new ih(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},dr=class extends be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},tl=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Tf=new Kt,y0=new I,v0=new I,wo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;y0.setFromMatrixPosition(t.matrixWorld),e.position.copy(y0),v0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(v0),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Tf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Tf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===oo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Tf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wc=new I,Ec=new bn,Ri=new I,el=class extends be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wc,Ec,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Ec,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wc,Ec,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,Ec,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ss=new I,b0=new Q,M0=new Q,hn=class extends el{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z),Ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ss.x,Ss.y).multiplyScalar(-t/Ss.z)}getViewSize(t,e){return this.getViewBounds(t,b0,M0),e.subVectors(M0,b0)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ba*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},kf=class extends wo{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=rr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},pr=class extends dr{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new kf}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},zf=class extends wo{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},mr=class extends dr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zf}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Qn=class extends el{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Hf=class extends wo{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Is=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(be.DEFAULT_UP),this.updateMatrix(),this.target=new be,this.shadow=new Hf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var rs=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var Af=new WeakMap,nl=class extends Fi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Nt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Nt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ii.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{Af.has(o)===!0?(s&&s(Af.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ii.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),Af.set(l,c),Ii.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Ii.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var eo=-90,no=1,sh=class extends be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(eo,no,t,e);s.layers=this.layers,this.add(s);let r=new hn(eo,no,t,e);r.layers=this.layers,this.add(r);let o=new hn(eo,no,t,e);o.layers=this.layers,this.add(o);let a=new hn(eo,no,t,e);a.layers=this.layers,this.add(a);let l=new hn(eo,no,t,e);l.layers=this.layers,this.add(l);let c=new hn(eo,no,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===mi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},rh=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},il=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ib.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ib(){this._document.hidden===!1&&this.reset()}var cd="\\[\\]\\.:\\/",Pb=new RegExp("["+cd+"]","g"),hd="[^"+cd+"]",Lb="[^"+cd.replace("\\.","")+"]",Nb=/((?:WC+[\/:])*)/.source.replace("WC",hd),Db=/(WCOD+)?/.source.replace("WCOD",Lb),Fb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hd),Ub=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hd),Ob=new RegExp("^"+Nb+Db+Fb+Ub+"$"),Bb=["material","materials","bones","map"],Vf=class{constructor(t,e,n){let s=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Pb,"")}static parseTrackName(t){let e=Ob.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Nt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Vf;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tC=new Float32Array(1);var S0=new Kt,sl=class{constructor(t,e,n=0,s=1/0){this.ray=new Ts(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return S0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(S0),this}intersectObject(t,e=!0,n=[]){return Gf(t,this,n,e),n.sort(w0),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Gf(t[s],this,n,e);return n.sort(w0),n}};function w0(i,t){return i.distance-t.distance}function Gf(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Gf(r[o],t,e,!0)}}var rl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Nt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var gd=class gd{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};gd.prototype.isMatrix2=!0;var Wf=gd;function ud(i,t,e,n){let s=kb(n);switch(e){case ed:return i*t;case ph:return i*t/s.components*s.byteLength;case mh:return i*t/s.components*s.byteLength;case Ns:return i*t*2/s.components*s.byteLength;case gh:return i*t*2/s.components*s.byteLength;case nd:return i*t*3/s.components*s.byteLength;case Wn:return i*t*4/s.components*s.byteLength;case xh:return i*t*4/s.components*s.byteLength;case pl:case ml:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gl:case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yh:case bh:return Math.max(i,16)*Math.max(t,8)/4;case _h:case vh:return Math.max(i,8)*Math.max(t,8)/2;case Mh:case Sh:case Eh:case Th:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wh:case _l:case Ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ch:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Lh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Fh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case kh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vh:case Gh:case Wh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qh:case Xh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case yl:case Yh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kb(i){switch(i){case Nn:case Jf:return{byteLength:1,components:1};case Ro:case jf:case nn:return{byteLength:2,components:1};case fh:case dh:return{byteLength:2,components:4};case _i:case uh:case Gn:return{byteLength:4,components:1};case Qf:case td:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Bg(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hb(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gb=`#ifdef USE_ALPHAHASH
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
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$b=`#ifdef USE_AOMAP
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
#endif`,Kb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zb=`#ifdef USE_BATCHING
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
#endif`,Jb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uM=`#define PI 3.141592653589793
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
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,IM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,DM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
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
#endif`,zM=`uniform sampler2D dfgLUT;
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
}`,HM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jM=`#if defined( USE_POINTS_UV )
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
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
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
#endif`,rS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ES=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AS=`float getShadowMask() {
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
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CS=`#ifdef USE_SKINNING
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
#endif`,IS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PS=`#ifdef USE_SKINNING
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
#endif`,LS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,US=`#ifdef USE_TRANSMISSION
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
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,VS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GS=`uniform sampler2D t2D;
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$S=`#include <common>
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
}`,KS=`#if DEPTH_PACKING == 3200
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
}`,ZS=`#define DISTANCE
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
}`,JS=`#define DISTANCE
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
}`,jS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,s1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,o1=`#define MATCAP
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
}`,a1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,c1=`#define NORMAL
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
}`,h1=`#define PHONG
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
}`,u1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,x1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,y1=`uniform vec3 color;
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
}`,v1=`uniform float rotation;
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
}`,b1=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:Vb,alphahash_pars_fragment:Gb,alphamap_fragment:Wb,alphamap_pars_fragment:qb,alphatest_fragment:Xb,alphatest_pars_fragment:Yb,aomap_fragment:$b,aomap_pars_fragment:Kb,batching_pars_vertex:Zb,batching_vertex:Jb,begin_vertex:jb,beginnormal_vertex:Qb,bsdfs:tM,iridescence_fragment:eM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:oM,color_fragment:aM,color_pars_fragment:lM,color_pars_vertex:cM,color_vertex:hM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:dM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:xM,colorspace_fragment:_M,colorspace_pars_fragment:yM,envmap_fragment:vM,envmap_common_pars_fragment:bM,envmap_pars_fragment:MM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:DM,envmap_vertex:wM,fog_vertex:EM,fog_pars_vertex:TM,fog_fragment:AM,fog_pars_fragment:RM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:IM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:LM,lights_pars_begin:NM,lights_toon_fragment:FM,lights_toon_pars_fragment:UM,lights_phong_fragment:OM,lights_phong_pars_fragment:BM,lights_physical_fragment:kM,lights_physical_pars_fragment:zM,lights_fragment_begin:HM,lights_fragment_maps:VM,lights_fragment_end:GM,lightprobes_pars_fragment:WM,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:YM,logdepthbuf_vertex:$M,map_fragment:KM,map_pars_fragment:ZM,map_particle_fragment:JM,map_particle_pars_fragment:jM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:tS,morphinstance_vertex:eS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:sS,morphtarget_vertex:rS,normal_fragment_begin:oS,normal_fragment_maps:aS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:hS,normalmap_pars_fragment:uS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:dS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:gS,packing:xS,premultiplied_alpha_fragment:_S,project_vertex:yS,dithering_fragment:vS,dithering_pars_fragment:bS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:SS,shadowmap_pars_fragment:wS,shadowmap_pars_vertex:ES,shadowmap_vertex:TS,shadowmask_pars_fragment:AS,skinbase_vertex:RS,skinning_pars_vertex:CS,skinning_vertex:IS,skinnormal_vertex:PS,specularmap_fragment:LS,specularmap_pars_fragment:NS,tonemapping_fragment:DS,tonemapping_pars_fragment:FS,transmission_fragment:US,transmission_pars_fragment:OS,uv_pars_fragment:BS,uv_pars_vertex:kS,uv_vertex:zS,worldpos_vertex:HS,background_vert:VS,background_frag:GS,backgroundCube_vert:WS,backgroundCube_frag:qS,cube_vert:XS,cube_frag:YS,depth_vert:$S,depth_frag:KS,distance_vert:ZS,distance_frag:JS,equirect_vert:jS,equirect_frag:QS,linedashed_vert:t1,linedashed_frag:e1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:s1,meshlambert_frag:r1,meshmatcap_vert:o1,meshmatcap_frag:a1,meshnormal_vert:l1,meshnormal_frag:c1,meshphong_vert:h1,meshphong_frag:u1,meshphysical_vert:f1,meshphysical_frag:d1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:x1,shadow_vert:_1,shadow_frag:y1,sprite_vert:v1,sprite_frag:b1},St={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Oi={basic:{uniforms:Sn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Sn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Sn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Sn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Sn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new dt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Sn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Sn([St.points,St.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Sn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Sn([St.common,St.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Sn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Sn([St.sprite,St.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:Sn([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:Sn([St.lights,St.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Oi.physical={uniforms:Sn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Zh={r:0,b:0,g:0},M1=new Kt,kg=new ee;kg.set(-1,0,0,0,1,0,0,0,1);function S1(i,t,e,n,s,r){let o=new dt(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){let v=_.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(_){let w=!1,v=d(_);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let S=i.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,w){let v=d(w);v&&(v.isCubeTexture||v.mapping===dl)?(c===void 0&&(c=new Rt(new Ve(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:br(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kg),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==ve,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Rt(new qe(2,2),new rn({name:"BackgroundMaterial",uniforms:br(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==ve,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,w){_.getRGB(Zh,ld(i)),e.buffers.color.setClear(Zh.r,Zh.g,Zh.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,w=1){o.set(_),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,m(o,a)},render:p,addToRenderList:x,dispose:g}}function w1(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,N,k,D,B){let X=!1,$=u(P,D,k,N);r!==$&&(r=$,c(r.object)),X=d(P,D,k,B),X&&p(P,D,k,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(P,N,k,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,N,k,D){let B=D.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let $=P.isInstancedMesh===!0?P.id:0,rt=X[$];rt===void 0&&(rt={},X[$]=rt);let Z=rt[k.id];Z===void 0&&(Z={},rt[k.id]=Z);let et=Z[B];return et===void 0&&(et=f(l()),Z[B]=et),et}function f(P){let N=[],k=[],D=[];for(let B=0;B<e;B++)N[B]=0,k[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,N,k,D){let B=r.attributes,X=N.attributes,$=0,rt=k.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let z=B[Z],ot=X[Z];if(ot===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(ot=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(ot=P.instanceColor)),z===void 0||z.attribute!==ot||ot&&z.data!==ot.data)return!0;$++}return r.attributesNum!==$||r.index!==D}function p(P,N,k,D){let B={},X=N.attributes,$=0,rt=k.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let z=X[Z];z===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));let ot={};ot.attribute=z,z&&z.data&&(ot.data=z.data),B[Z]=ot,$++}r.attributes=B,r.attributesNum=$,r.index=D}function x(){let P=r.newAttributes;for(let N=0,k=P.length;N<k;N++)P[N]=0}function m(P){g(P,0)}function g(P,N){let k=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;k[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),B[P]!==N&&(i.vertexAttribDivisor(P,N),B[P]=N)}function _(){let P=r.newAttributes,N=r.enabledAttributes;for(let k=0,D=N.length;k<D;k++)N[k]!==P[k]&&(i.disableVertexAttribArray(k),N[k]=0)}function w(P,N,k,D,B,X,$){$===!0?i.vertexAttribIPointer(P,N,k,B,X):i.vertexAttribPointer(P,N,k,D,B,X)}function v(P,N,k,D){x();let B=D.attributes,X=k.getAttributes(),$=N.defaultAttributeValues;for(let rt in X){let Z=X[rt];if(Z.location>=0){let et=B[rt];if(et===void 0&&(rt==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),rt==="instanceColor"&&P.instanceColor&&(et=P.instanceColor)),et!==void 0){let z=et.normalized,ot=et.itemSize,lt=t.get(et);if(lt===void 0)continue;let Ot=lt.buffer,Bt=lt.type,Zt=lt.bytesPerElement,K=Bt===i.INT||Bt===i.UNSIGNED_INT||et.gpuType===uh;if(et.isInterleavedBufferAttribute){let tt=et.data,mt=tt.stride,Ut=et.offset;if(tt.isInstancedInterleavedBuffer){for(let xt=0;xt<Z.locationSize;xt++)g(Z.location+xt,tt.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let xt=0;xt<Z.locationSize;xt++)m(Z.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let xt=0;xt<Z.locationSize;xt++)w(Z.location+xt,ot/Z.locationSize,Bt,z,mt*Zt,(Ut+ot/Z.locationSize*xt)*Zt,K)}else{if(et.isInstancedBufferAttribute){for(let tt=0;tt<Z.locationSize;tt++)g(Z.location+tt,et.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let tt=0;tt<Z.locationSize;tt++)m(Z.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let tt=0;tt<Z.locationSize;tt++)w(Z.location+tt,ot/Z.locationSize,Bt,z,ot*Zt,ot/Z.locationSize*tt*Zt,K)}}else if($!==void 0){let z=$[rt];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(Z.location,z);break;case 3:i.vertexAttrib3fv(Z.location,z);break;case 4:i.vertexAttrib4fv(Z.location,z);break;default:i.vertexAttrib1fv(Z.location,z)}}}}_()}function S(){E();for(let P in n){let N=n[P];for(let k in N){let D=N[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P]}}function b(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let k in N){let D=N[k];for(let B in D){let X=D[B];for(let $ in X)h(X[$].object),delete X[$];delete D[B]}}delete n[P.id]}function A(P){for(let N in n){let k=n[N];for(let D in k){let B=k[D];if(B[P.id]===void 0)continue;let X=B[P.id];for(let $ in X)h(X[$].object),delete X[$];delete B[P.id]}}}function y(P){for(let N in n){let k=n[N],D=P.isInstancedMesh===!0?P.id:0,B=k[D];if(B!==void 0){for(let X in B){let $=B[X];for(let rt in $)h($[rt].object),delete $[rt];delete B[X]}delete k[D],Object.keys(k).length===0&&delete n[N]}}}function E(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function E1(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function T1(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Nn&&A!==Gn&&!y&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Nt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Nt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:b}}function A1(i){let t=this,e=null,n=0,s=!1,r=!1,o=new zn,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:n,w=_*4,v=g.clippingState||null;l.value=v,v=h(p,f,w,d);for(let S=0;S!==w;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,v=d;w!==x;++w,v+=4)o.copy(u[w]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Do=4,R1=6,C1=20,I1=256,Ml=new Qn,xg=new dt,xd=null,_d=0,yd=0,vd=!1,P1=new I,Mr=new I,Uo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=P1}=r;xd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xd,_d,yd),this._renderer.xr.enabled=vd,t.scissorTest=!1,No(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:nn,format:Wn,colorSpace:dn,depthBuffer:!1},s=_g(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_g(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=L1(r)),this._blurMaterial=D1(r,t,e),this._ggxMaterial=N1(r,t,e)}return s}_compileMaterial(t){let e=new Rt(new Me,t);this._renderer.compile(e,Ml)}_sceneToCubeUV(t,e,n,s,r){let l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(xg),u.toneMapping=xi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new Ve,new Se({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,_=t.background;_?_.isColor&&(m.color.copy(_),t.background=null,g=!0):(m.color.copy(xg),g=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let S=this._cubeSize;No(s,v*S,w>2?S:0,S,S),u.setRenderTarget(s),g&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ps||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;No(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ml)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-Do?n-p+Do:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,No(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Ml),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,No(t,m,g,3*x,2*x),s.setRenderTarget(t),s.render(a,Ml)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-Do?s-this._lodMax+Do:0),f=4*(this._cubeSize-h);No(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Ml)}};function L1(i){let t=[],e=[],n=i,s=i-Do+1+R1;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let g=0;g<u;g++){let _=g%3*2/3-1,w=g>2?0:-1,v=[_,w,0,_+2/3,w,0,_+2/3,w+1,0,_,w,0,_+2/3,w+1,0,_,w+1,0];p.set(v,d*f*g);for(let S=0;S<f;S++){let b=h[S*2]*2-1,A=h[S*2+1]*2-1;g===0?Mr.set(1,A,b):g===1?Mr.set(-b,1,-A):g===2?Mr.set(-b,A,1):g===3?Mr.set(-1,A,-b):g===4?Mr.set(-b,-1,A):Mr.set(b,A,-1),Mr.toArray(x,(g*f+S)*d)}}let m=new Me;m.setAttribute("position",new ze(p,d)),m.setAttribute("outputDirection",new ze(x,d)),e.push(new Rt(m,null)),n>Do&&n--}return{lodMeshes:e,sizeLods:t}}function _g(i,t,e){let n=new We(i,t,e);return n.texture.mapping=dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function N1(i,t,e){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function D1(i,t,e){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:C1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function yg(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function vg(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function tu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jh=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ua(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:ei});r.uniforms.tEquirect.value=e;let o=new Rt(s,r),a=e.minFilter;return e.minFilter===Vn&&(e.minFilter=He),new sh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function F1(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===lh||d===ch)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new jh(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===lh||d===ch,x=d===Ps||d===yr;if(p||x){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Uo(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return p&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new Uo(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===lh?f.mapping=Ps:d===ch&&(f.mapping=yr),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function U1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&nr("WebGLRenderer: "+n+" extension not supported."),s}}}function O1(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let w=0,v=_.length;w<v;w+=3){let S=_[w+0],b=_[w+1],A=_[w+2];f.push(S,b,b,A,A,S)}}else{let _=p.array;x=p.version;for(let w=0,v=_.length/3-1;w<v;w+=3){let S=w+0,b=w+1,A=w+2;f.push(S,b,b,A,A,S)}}let m=new(p.count>=65535?Ca:Ra)(f,1);m.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function B1(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function k1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z1(i,t,e){let n=new WeakMap,s=new _e;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let b=new Float32Array(v*S*4*u),A=new Aa(b,v,S,u);A.type=Gn,A.needsUpdate=!0;let y=w*4;for(let R=0;R<u;R++){let P=m[R],N=g[R],k=_[R],D=v*S*4*R;for(let B=0;B<P.count;B++){let X=B*y;d===!0&&(s.fromBufferAttribute(P,B),b[D+X+0]=s.x,b[D+X+1]=s.y,b[D+X+2]=s.z,b[D+X+3]=0),p===!0&&(s.fromBufferAttribute(N,B),b[D+X+4]=s.x,b[D+X+5]=s.y,b[D+X+6]=s.z,b[D+X+7]=0),x===!0&&(s.fromBufferAttribute(k,B),b[D+X+8]=s.x,b[D+X+9]=s.y,b[D+X+10]=s.z,b[D+X+11]=k.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Q(v,S)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function H1(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var V1={[al]:"LINEAR_TONE_MAPPING",[ll]:"REINHARD_TONE_MAPPING",[cl]:"CINEON_TONE_MAPPING",[_r]:"ACES_FILMIC_TONE_MAPPING",[ul]:"AGX_TONE_MAPPING",[fl]:"NEUTRAL_TONE_MAPPING",[hl]:"CUSTOM_TONE_MAPPING"};function G1(i,t,e,n,s,r){let o=new We(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Me;c.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new te([0,2,0,0,2,0],2));let h=new Mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Rt(c,h),f=new Qn(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,_=[],w=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let b=0;b<_.length;b++){let A=_[b];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){_=v,w=_.length>0&&_[0].isRenderPass===!0;let S=o.width,b=o.height;_.length>0&&a===null&&(a=new We(S,b,{type:nn,depthBuffer:!1,stencilBuffer:!1}),l=new We(S,b,{type:nn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<_.length;A++){let y=_[A];y.setSize&&y.setSize(S,b)}},this.begin=function(v,S){if(x||v.toneMapping===xi&&_.length===0)return!1;if(g=S,S!==null){let b=S.width,A=S.height;(o.width!==b||o.height!==A)&&this.setSize(b,A)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=xi,!0},this.hasRenderPass=function(){return w},this.end=function(v,S){v.toneMapping=m,x=!0;let b=o,A=a;for(let y=0;y<_.length;y++){let E=_[y];E.enabled!==!1&&(E.render(v,A,b,S),E.needsSwap!==!1&&(b=A,A=A===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},oe.getTransfer(d)===ve&&(h.defines.SRGB_TRANSFER="");let y=V1[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(g),v.render(u,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var zg=new sn,Sd=new As(1,1),Hg=new Aa,Vg=new Bc,Gg=new Ua,bg=[],Mg=[],Sg=new Float32Array(16),wg=new Float32Array(9),Eg=new Float32Array(4);function Oo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=bg[s];if(r===void 0&&(r=new Float32Array(s),bg[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function on(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function eu(i,t){let e=Mg[t];e===void 0&&(e=new Int32Array(t),Mg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function W1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function X1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(on(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function Y1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function $1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;Eg.set(n),i.uniformMatrix2fv(this.addr,!1,Eg),an(e,n)}}function K1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;wg.set(n),i.uniformMatrix3fv(this.addr,!1,wg),an(e,n)}}function Z1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(on(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(on(e,n))return;Sg.set(n),i.uniformMatrix4fv(this.addr,!1,Sg),an(e,n)}}function J1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function j1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function Q1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function tw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function ew(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(on(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function iw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(on(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function sw(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(on(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function rw(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sd.compareFunction=e.isReversedDepthBuffer()?Kh:$h,r=Sd):r=zg,e.setTexture2D(t||r,s)}function ow(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vg,s)}function aw(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gg,s)}function lw(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hg,s)}function cw(i){switch(i){case 5126:return W1;case 35664:return q1;case 35665:return X1;case 35666:return Y1;case 35674:return $1;case 35675:return K1;case 35676:return Z1;case 5124:case 35670:return J1;case 35667:case 35671:return j1;case 35668:case 35672:return Q1;case 35669:case 35673:return tw;case 5125:return ew;case 36294:return nw;case 36295:return iw;case 36296:return sw;case 35678:case 36198:case 36298:case 36306:case 35682:return rw;case 35679:case 36299:case 36307:return ow;case 35680:case 36300:case 36308:case 36293:return aw;case 36289:case 36303:case 36311:case 36292:return lw}}function hw(i,t){i.uniform1fv(this.addr,t)}function uw(i,t){let e=Oo(t,this.size,2);i.uniform2fv(this.addr,e)}function fw(i,t){let e=Oo(t,this.size,3);i.uniform3fv(this.addr,e)}function dw(i,t){let e=Oo(t,this.size,4);i.uniform4fv(this.addr,e)}function pw(i,t){let e=Oo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mw(i,t){let e=Oo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gw(i,t){let e=Oo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xw(i,t){i.uniform1iv(this.addr,t)}function _w(i,t){i.uniform2iv(this.addr,t)}function yw(i,t){i.uniform3iv(this.addr,t)}function vw(i,t){i.uniform4iv(this.addr,t)}function bw(i,t){i.uniform1uiv(this.addr,t)}function Mw(i,t){i.uniform2uiv(this.addr,t)}function Sw(i,t){i.uniform3uiv(this.addr,t)}function ww(i,t){i.uniform4uiv(this.addr,t)}function Ew(i,t,e){let n=this.cache,s=t.length,r=eu(e,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Sd:o=zg;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Tw(i,t,e){let n=this.cache,s=t.length,r=eu(e,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vg,r[o])}function Aw(i,t,e){let n=this.cache,s=t.length,r=eu(e,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gg,r[o])}function Rw(i,t,e){let n=this.cache,s=t.length,r=eu(e,s);on(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hg,r[o])}function Cw(i){switch(i){case 5126:return hw;case 35664:return uw;case 35665:return fw;case 35666:return dw;case 35674:return pw;case 35675:return mw;case 35676:return gw;case 5124:case 35670:return xw;case 35667:case 35671:return _w;case 35668:case 35672:return yw;case 35669:case 35673:return vw;case 5125:return bw;case 36294:return Mw;case 36295:return Sw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return Aw;case 36289:case 36303:case 36311:case 36292:return Rw}}var wd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cw(e.type)}},Ed=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cw(e.type)}},Td=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},bd=/(\w+)(\])?(\[|\.)?/g;function Tg(i,t){i.seq.push(t),i.map[t.id]=t}function Iw(i,t,e){let n=i.name,s=n.length;for(bd.lastIndex=0;;){let r=bd.exec(n),o=bd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Tg(e,c===void 0?new wd(a,i,t):new Ed(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Td(a),Tg(e,u)),e=u}}}var Fo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Iw(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Ag(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Pw=37297,Lw=0;function Nw(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Rg=new ee;function Dw(i){oe._getMatrix(Rg,oe.workingColorSpace,i);let t=`mat3( ${Rg.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Ea:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Nt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cg(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Nw(i.getShaderSource(t),a)}else return r}function Fw(i,t){let e=Dw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Uw={[al]:"Linear",[ll]:"Reinhard",[cl]:"Cineon",[_r]:"ACESFilmic",[ul]:"AgX",[fl]:"Neutral",[hl]:"Custom"};function Ow(i,t){let e=Uw[t];return e===void 0?(Nt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jh=new I;function Bw(){oe.getLuminanceCoefficients(Jh);let i=Jh.x.toFixed(4),t=Jh.y.toFixed(4),e=Jh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function zw(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hw(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function wl(i){return i!==""}function Ig(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(i){return i.replace(Vw,Ww)}var Gw=new Map;function Ww(i,t){let e=ue[t];if(e===void 0){let n=Gw.get(t);if(n!==void 0)e=ue[n],Nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ad(e)}var qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lg(i){return i.replace(qw,Xw)}function Xw(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ng(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Yw={[gr]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};function $w(i){return Yw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Kw={[Ps]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[dl]:"ENVMAP_TYPE_CUBE_UV"};function Zw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Jw={[yr]:"ENVMAP_MODE_REFRACTION"};function jw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Jw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qw={[ah]:"ENVMAP_BLENDING_MULTIPLY",[X0]:"ENVMAP_BLENDING_MIX",[Y0]:"ENVMAP_BLENDING_ADD"};function tE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qw[i.combine]||"ENVMAP_BLENDING_NONE"}function eE(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function nE(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=$w(e),c=Zw(e),h=jw(e),u=tE(e),f=eE(e),d=kw(e),p=zw(r),x=s.createProgram(),m,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(wl).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(wl).join(`
`),g.length>0&&(g+=`
`)):(m=[Ng(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),g=[Ng(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?ue.tonemapping_pars_fragment:"",e.toneMapping!==xi?Ow("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,Fw("linearToOutputTexel",e.outputColorSpace),Bw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wl).join(`
`)),o=Ad(o),o=Ig(o,e),o=Pg(o,e),a=Ad(a),a=Ig(a,e),a=Pg(a,e),o=Lg(o),a=Lg(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let w=_+m+o,v=_+g+a,S=Ag(s,s.VERTEX_SHADER,w),b=Ag(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(S)||"",D=s.getShaderInfoLog(b)||"",B=N.trim(),X=k.trim(),$=D.trim(),rt=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,b);else{let et=Cg(s,S,"vertex"),z=Cg(s,b,"fragment");$t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+et+`
`+z)}else B!==""?Nt("WebGLProgram: Program Info Log:",B):(X===""||$==="")&&(Z=!1);Z&&(P.diagnostics={runnable:rt,programLog:B,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:g}})}s.deleteShader(S),s.deleteShader(b),y=new Fo(s,x),E=Hw(s,x)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,Pw)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lw++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=b,this}var iE=0,Rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cd(t),e.set(t,n)),n}},Cd=class{constructor(t){this.id=iE++,this.code=t,this.usedTimes=0}};function sE(i){return i===Ns||i===_l||i===yl}function rE(i,t,e,n,s,r){let o=new ho,a=new Rd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,R,P,N,k){let D=P.fog,B=N.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,$=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,rt=t.get(y.envMap||X,$),Z=rt&&rt.mapping===dl?rt.image.height:null,et=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Nt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let z=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ot=z!==void 0?z.length:0,lt=0;B.morphAttributes.position!==void 0&&(lt=1),B.morphAttributes.normal!==void 0&&(lt=2),B.morphAttributes.color!==void 0&&(lt=3);let Ot,Bt,Zt,K;if(et){let Ue=Oi[et];Ot=Ue.vertexShader,Bt=Ue.fragmentShader}else{Ot=y.vertexShader,Bt=y.fragmentShader;let Ue=a.getVertexShaderStage(y),Ae=a.getFragmentShaderStage(y);a.update(y,Ue,Ae),Zt=Ue.id,K=Ae.id}let tt=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,xt=N.isBatchedMesh===!0,qt=!!y.map,ye=!!y.matcap,st=!!rt,ct=!!y.aoMap,ht=!!y.lightMap,ut=!!y.bumpMap&&y.wireframe===!1,gt=!!y.normalMap,Xt=!!y.displacementMap,Gt=!!y.emissiveMap,Jt=!!y.metalnessMap,ie=!!y.roughnessMap,F=y.anisotropy>0,Te=y.clearcoat>0,de=y.dispersion>0,C=y.retroreflectivity>0,M=y.iridescence>0,H=y.sheen>0,q=y.transmission>0,J=F&&!!y.anisotropyMap,ft=Te&&!!y.clearcoatMap,pt=Te&&!!y.clearcoatNormalMap,j=Te&&!!y.clearcoatRoughnessMap,it=M&&!!y.iridescenceMap,_t=M&&!!y.iridescenceThicknessMap,kt=H&&!!y.sheenColorMap,Mt=H&&!!y.sheenRoughnessMap,yt=!!y.specularMap,zt=!!y.specularColorMap,Yt=!!y.specularIntensityMap,re=q&&!!y.transmissionMap,O=q&&!!y.thicknessMap,vt=!!y.gradientMap,nt=!!y.alphaMap,bt=y.alphaTest>0,Tt=!!y.alphaHash,at=!!y.extensions,Vt=xi;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Lt={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:Ot,fragmentShader:Bt,defines:y.defines,customVertexShaderID:Zt,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:xt,batchingColor:xt&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qt,matcap:ye,envMap:st,envMapMode:st&&rt.mapping,envMapCubeUVHeight:Z,aoMap:ct,lightMap:ht,bumpMap:ut,normalMap:gt,displacementMap:Xt,emissiveMap:Gt,normalMapObjectSpace:gt&&y.normalMapType===J0,normalMapTangentSpace:gt&&y.normalMapType===bl,packedNormalMap:gt&&y.normalMapType===bl&&sE(y.normalMap.format),metalnessMap:Jt,roughnessMap:ie,anisotropy:F,anisotropyMap:J,clearcoat:Te,clearcoatMap:ft,clearcoatNormalMap:pt,clearcoatRoughnessMap:j,dispersion:de,retroreflection:C,iridescence:M,iridescenceMap:it,iridescenceThicknessMap:_t,sheen:H,sheenColorMap:kt,sheenRoughnessMap:Mt,specularMap:yt,specularColorMap:zt,specularIntensityMap:Yt,transmission:q,transmissionMap:re,thicknessMap:O,gradientMap:vt,opaque:y.transparent===!1&&y.blending===To&&y.alphaToCoverage===!1,alphaMap:nt,alphaTest:bt,alphaHash:Tt,combine:y.combine,mapUv:qt&&p(y.map.channel),aoMapUv:ct&&p(y.aoMap.channel),lightMapUv:ht&&p(y.lightMap.channel),bumpMapUv:ut&&p(y.bumpMap.channel),normalMapUv:gt&&p(y.normalMap.channel),displacementMapUv:Xt&&p(y.displacementMap.channel),emissiveMapUv:Gt&&p(y.emissiveMap.channel),metalnessMapUv:Jt&&p(y.metalnessMap.channel),roughnessMapUv:ie&&p(y.roughnessMap.channel),anisotropyMapUv:J&&p(y.anisotropyMap.channel),clearcoatMapUv:ft&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(y.sheenRoughnessMap.channel),specularMapUv:yt&&p(y.specularMap.channel),specularColorMapUv:zt&&p(y.specularColorMap.channel),specularIntensityMapUv:Yt&&p(y.specularIntensityMap.channel),transmissionMapUv:re&&p(y.transmissionMap.channel),thicknessMapUv:O&&p(y.thicknessMap.channel),alphaMapUv:nt&&p(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(gt||F),vertexNormals:!!B.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(qt||nt),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||B.attributes.normal===void 0&&gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:lt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:qt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===ve,decodeVideoTextureEmissive:Gt&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===ve,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:at&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&y.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(g(E,y),_(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function g(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function _(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let E=d[y.type],R;if(E){let P=Oi[E];R=Lo.clone(P.uniforms)}else R=y.uniforms;return R}function v(y,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new nE(i,E,y,s),c.push(R),h.set(E,R)),R}function S(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:A}}function oE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function aE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fg(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let _=i[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},i[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=p,_.materialVariant=o(f),_.groupOrder=x,_.renderOrder=f.renderOrder,_.z=m,_.group=g),t++,_}function l(f,d,p,x,m,g,_){_.reversedDepth===!0&&(m=-m);let w=a(f,d,p,x,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(f,d,p,x,m,g){let _=a(f,d,p,x,m,g);p.transmission>0?n.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,d){e.length>1&&e.sort(f||aE),n.length>1&&n.sort(d||Dg),s.length>1&&s.sort(d||Dg)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function lE(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Fg,i.set(n,[o])):s>=r.length?(o=new Fg,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function cE(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new dt};break;case"SpotLight":e={position:new I,direction:new I,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":e={color:new dt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function hE(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var uE=0;function fE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function dE(i){let t=new cE,e=hE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Kt,o=new Kt;function a(c){let h=0,u=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,_=0,w=0,v=0,S=0,b=0,A=0,y=0,E=0,R=0;c.sort(fE);for(let N=0,k=c.length;N<k;N++){let D=c[N],B=D.color,X=D.intensity,$=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ns?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*X,u+=B.g*X,f+=B.b*X;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(D.sh.coefficients[Z],X);R++}else if(D.isSunLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let et=D.shadow,z=e.get(D);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=rt;let ot=et.getViewportCount();for(let lt=0;lt<ot;lt++)n.sunShadowMatrix[x+lt]=et.getMatrix(lt),n.sunShadowCascade[x+lt]=et._cascadeData[lt];x+=ot,p++}n.sun[d]=Z,d++}else if(D.isDirectionalLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let et=D.shadow,z=e.get(D);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=D.shadow.matrix,S++}n.directional[m]=Z,m++}else if(D.isSpotLight){let Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(B).multiplyScalar(X),Z.distance=$,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,n.spot[_]=Z;let et=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,et.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[_]=et.matrix,D.castShadow){let z=e.get(D);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=rt,A++}_++}else if(D.isRectAreaLight){let Z=t.get(D);Z.color.copy(B).multiplyScalar(X),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=Z,w++}else if(D.isPointLight){let Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){let et=D.shadow,z=e.get(D);z.shadowIntensity=et.intensity,z.shadowBias=et.bias,z.shadowNormalBias=et.normalBias,z.shadowRadius=et.radius,z.shadowMapSize=et.mapSize,z.shadowCameraNear=et.camera.near,z.shadowCameraFar=et.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=rt,n.pointShadowMatrix[g]=D.shadow.matrix,b++}n.point[g]=Z,g++}else if(D.isHemisphereLight){let Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(X),Z.groundColor.copy(D.groundColor).multiplyScalar(X),n.hemi[v]=Z,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==S||P.numPointShadows!==b||P.numSpotShadows!==A||P.numSpotMaps!==y||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=_,n.rectArea.length=w,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=d,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=S,P.numPointShadows=b,P.numSpotShadows=A,P.numSpotMaps=y,P.numLightProbes=R,n.version=uE++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){let v=c[_];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(v.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=n.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Ug(i){let t=new dE(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function pE(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Ug(i),t.set(s,[a])):r>=o.length?(a=new Ug(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var mE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gE=`uniform sampler2D shadow_pass;
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
}`,xE=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],_E=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Og=new Kt,Sl=new I,Md=new I;function yE(i,t,e){let n=new go,s=new Q,r=new Q,o=new _e,a=new Kc,l=new Zc,c={},h=e.maxTextureSize,u={[ti]:pn,[pn]:ti,[en]:en},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:mE,fragmentShader:gE}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Me;p.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Rt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let g=this.type;this.render=function(b,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===A0&&(Nt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gr);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending(ei),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let k=g!==this.type;k&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=b.length;D<B;D++){let X=b[D],$=X.shadow;if($===void 0){Nt("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let rt=$.getFrameExtents();s.multiply(rt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,$.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Eo){if(X.isPointLight){Nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new We(s.x,s.y,{format:Ns,type:nn,minFilter:He,magFilter:He,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new As(s.x,s.y,Gn),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Pi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=$e,$.map.depthTexture.magFilter=$e}else X.isPointLight?($.map=new jh(s.x),$.map.depthTexture=new Hc(s.x,_i)):($.map=new We(s.x,s.y),$.map.depthTexture=new As(s.x,s.y,_i)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Pi,this.type===gr?($.map.depthTexture.compareFunction=Z?Kh:$h,$.map.depthTexture.minFilter=He,$.map.depthTexture.magFilter=He):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=$e,$.map.depthTexture.magFilter=$e);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let et=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,y);for(let z=0;z<et;z++){let ot=$.getCamera(z);if(X.isPointLight){let lt=$.camera,Ot=$.matrix,Bt=X.distance||lt.far;Bt!==lt.far&&(lt.far=Bt,lt.updateProjectionMatrix()),Sl.setFromMatrixPosition(X.matrixWorld),lt.position.copy(Sl),Md.copy(lt.position),Md.add(xE[z]),lt.up.copy(_E[z]),lt.lookAt(Md),lt.updateMatrixWorld(),Ot.makeTranslation(-Sl.x,-Sl.y,-Sl.z),Og.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Og,lt.coordinateSystem,lt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,z),i.clear();else{z===0&&(i.setRenderTarget($.map),i.clear());let lt=$.getViewport(z);o.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),N.viewport(o)}n=$.getFrustum(z),v(A,y,ot,X,this.type)}$.isPointLightShadow!==!0&&this.type===Eo&&_($,y),$.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,P)};function _(b,A){let y=t.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new We(s.x,s.y,{format:Ns,type:nn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,y,f,x,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,y,d,x,null)}function w(b,A,y,E){let R=null,P=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=R.uuid,k=A.uuid,D=c[N];D===void 0&&(D={},c[N]=D);let B=D[k];B===void 0&&(B=R.clone(),D[k]=B,A.addEventListener("dispose",S)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,E===Eo?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let N=i.properties.get(R);N.light=y}return R}function v(b,A,y,E,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===Eo)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);let k=t.update(b),D=b.material;if(Array.isArray(D)){let B=k.groups;for(let X=0,$=B.length;X<$;X++){let rt=B[X],Z=D[rt.materialIndex];if(Z&&Z.visible){let et=w(b,Z,E,R);b.onBeforeShadow(i,b,A,y,k,et,rt),i.renderBufferDirect(y,null,k,et,b,rt),b.onAfterShadow(i,b,A,y,k,et,rt)}}}else if(D.visible){let B=w(b,D,E,R);b.onBeforeShadow(i,b,A,y,k,B,null),i.renderBufferDirect(y,null,k,B,b,null),b.onAfterShadow(i,b,A,y,k,B,null)}}let N=b.children;for(let k=0,D=N.length;k<D;k++)v(N[k],A,y,E,R)}function S(b){b.target.removeEventListener("dispose",S);for(let y in c){let E=c[y],R=b.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function vE(i,t){function e(){let O=!1,vt=new _e,nt=null,bt=new _e(0,0,0,0);return{setMask:function(Tt){nt!==Tt&&!O&&(i.colorMask(Tt,Tt,Tt,Tt),nt=Tt)},setLocked:function(Tt){O=Tt},setClear:function(Tt,at,Vt,Lt,Ue){Ue===!0&&(Tt*=Lt,at*=Lt,Vt*=Lt),vt.set(Tt,at,Vt,Lt),bt.equals(vt)===!1&&(i.clearColor(Tt,at,Vt,Lt),bt.copy(vt))},reset:function(){O=!1,nt=null,bt.set(-1,0,0,0)}}}function n(){let O=!1,vt=!1,nt=null,bt=null,Tt=null;return{setReversed:function(at){if(vt!==at){let Vt=t.get("EXT_clip_control");at?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),vt=at;let Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return vt},setTest:function(at){at?tt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(at){nt!==at&&!O&&(i.depthMask(at),nt=at)},setFunc:function(at){if(vt&&(at=lg[at]),bt!==at){switch(at){case Cc:i.depthFunc(i.NEVER);break;case Ic:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case so:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Nc:i.depthFunc(i.GEQUAL);break;case Dc:i.depthFunc(i.GREATER);break;case Fc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=at}},setLocked:function(at){O=at},setClear:function(at){Tt!==at&&(Tt=at,vt&&(at=1-at),i.clearDepth(at))},reset:function(){O=!1,nt=null,bt=null,Tt=null,vt=!1}}}function s(){let O=!1,vt=null,nt=null,bt=null,Tt=null,at=null,Vt=null,Lt=null,Ue=null;return{setTest:function(Ae){O||(Ae?tt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(Ae){vt!==Ae&&!O&&(i.stencilMask(Ae),vt=Ae)},setFunc:function(Ae,hi,Ti){(nt!==Ae||bt!==hi||Tt!==Ti)&&(i.stencilFunc(Ae,hi,Ti),nt=Ae,bt=hi,Tt=Ti)},setOp:function(Ae,hi,Ti){(at!==Ae||Vt!==hi||Lt!==Ti)&&(i.stencilOp(Ae,hi,Ti),at=Ae,Vt=hi,Lt=Ti)},setLocked:function(Ae){O=Ae},setClear:function(Ae){Ue!==Ae&&(i.clearStencil(Ae),Ue=Ae)},reset:function(){O=!1,vt=null,nt=null,bt=null,Tt=null,at=null,Vt=null,Lt=null,Ue=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,_=null,w=null,v=null,S=null,b=null,A=null,y=new dt(0,0,0),E=0,R=!1,P=null,N=null,k=null,D=null,B=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,rt=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=rt>=2);let et=null,z={},ot=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),Ot=new _e().fromArray(ot),Bt=new _e().fromArray(lt);function Zt(O,vt,nt,bt){let Tt=new Uint8Array(4),at=i.createTexture();i.bindTexture(O,at),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<nt;Vt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(vt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return at}let K={};K[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(so),ut(!1),gt(qf),tt(i.CULL_FACE),ct(ei);function tt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function mt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ut(O,vt){return f[O]!==vt?(i.bindFramebuffer(O,vt),f[O]=vt,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function xt(O,vt){let nt=p,bt=!1;if(O){nt=d.get(vt),nt===void 0&&(nt=[],d.set(vt,nt));let Tt=O.textures;if(nt.length!==Tt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Vt=Tt.length;at<Vt;at++)nt[at]=i.COLOR_ATTACHMENT0+at;nt.length=Tt.length,bt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(nt)}function qt(O){return x!==O?(i.useProgram(O),x=O,!0):!1}let ye={[xr]:i.FUNC_ADD,[C0]:i.FUNC_SUBTRACT,[I0]:i.FUNC_REVERSE_SUBTRACT};ye[P0]=i.MIN,ye[L0]=i.MAX;let st={[N0]:i.ZERO,[D0]:i.ONE,[F0]:i.SRC_COLOR,[$f]:i.SRC_ALPHA,[H0]:i.SRC_ALPHA_SATURATE,[k0]:i.DST_COLOR,[O0]:i.DST_ALPHA,[U0]:i.ONE_MINUS_SRC_COLOR,[Kf]:i.ONE_MINUS_SRC_ALPHA,[z0]:i.ONE_MINUS_DST_COLOR,[B0]:i.ONE_MINUS_DST_ALPHA,[V0]:i.CONSTANT_COLOR,[G0]:i.ONE_MINUS_CONSTANT_COLOR,[W0]:i.CONSTANT_ALPHA,[q0]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(O,vt,nt,bt,Tt,at,Vt,Lt,Ue,Ae){if(O===ei){m===!0&&(mt(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),O!==R0){if(O!==g||Ae!==R){if((_!==xr||S!==xr)&&(i.blendEquation(i.FUNC_ADD),_=xr,S=xr),Ae)switch(O){case To:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xf:i.blendFunc(i.ONE,i.ONE);break;case Yf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ol:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",O);break}else switch(O){case To:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yf:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ol:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",O);break}w=null,v=null,b=null,A=null,y.set(0,0,0),E=0,g=O,R=Ae}return}Tt=Tt||vt,at=at||nt,Vt=Vt||bt,(vt!==_||Tt!==S)&&(i.blendEquationSeparate(ye[vt],ye[Tt]),_=vt,S=Tt),(nt!==w||bt!==v||at!==b||Vt!==A)&&(i.blendFuncSeparate(st[nt],st[bt],st[at],st[Vt]),w=nt,v=bt,b=at,A=Vt),(Lt.equals(y)===!1||Ue!==E)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Ue),y.copy(Lt),E=Ue),g=O,R=!1}function ht(O,vt){O.side===en?mt(i.CULL_FACE):tt(i.CULL_FACE);let nt=O.side===pn;vt&&(nt=!nt),ut(nt),O.blending===To&&O.transparent===!1?ct(ei):ct(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let bt=O.stencilWrite;a.setTest(bt),bt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Gt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function gt(O){O!==E0?(tt(i.CULL_FACE),O!==N&&(O===qf?i.cullFace(i.BACK):O===T0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),N=O}function Xt(O){O!==k&&($&&i.lineWidth(O),k=O)}function Gt(O,vt,nt){O?(tt(i.POLYGON_OFFSET_FILL),(D!==vt||B!==nt)&&(D=vt,B=nt,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,nt))):mt(i.POLYGON_OFFSET_FILL)}function Jt(O){O?tt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function ie(O){O===void 0&&(O=i.TEXTURE0+X-1),et!==O&&(i.activeTexture(O),et=O)}function F(O,vt,nt){nt===void 0&&(et===null?nt=i.TEXTURE0+X-1:nt=et);let bt=z[nt];bt===void 0&&(bt={type:void 0,texture:void 0},z[nt]=bt),(bt.type!==O||bt.texture!==vt)&&(et!==nt&&(i.activeTexture(nt),et=nt),i.bindTexture(O,vt||K[O]),bt.type=O,bt.texture=vt)}function Te(){let O=z[et];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function de(){try{i.compressedTexImage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function M(){try{i.texSubImage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function ft(){try{i.texStorage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function pt(){try{i.texStorage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function j(){try{i.texImage2D(...arguments)}catch(O){$t("WebGLState:",O)}}function it(){try{i.texImage3D(...arguments)}catch(O){$t("WebGLState:",O)}}function _t(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function kt(O,vt){u[O]!==vt&&(i.pixelStorei(O,vt),u[O]=vt)}function Mt(O){Ot.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ot.copy(O))}function yt(O){Bt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Bt.copy(O))}function zt(O,vt){let nt=c.get(vt);nt===void 0&&(nt=new WeakMap,c.set(vt,nt));let bt=nt.get(O);bt===void 0&&(bt=i.getUniformBlockIndex(vt,O.name),nt.set(O,bt))}function Yt(O,vt){let bt=c.get(vt).get(O);l.get(vt)!==bt&&(i.uniformBlockBinding(vt,bt,O.__bindingPointIndex),l.set(vt,bt))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,z={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,_=null,w=null,v=null,S=null,b=null,A=null,y=new dt(0,0,0),E=0,R=!1,P=null,N=null,k=null,D=null,B=null,Ot.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:mt,bindFramebuffer:Ut,drawBuffers:xt,useProgram:qt,setBlending:ct,setMaterial:ht,setFlipSided:ut,setCullFace:gt,setLineWidth:Xt,setPolygonOffset:Gt,setScissorTest:Jt,activeTexture:ie,bindTexture:F,unbindTexture:Te,compressedTexImage2D:de,compressedTexImage3D:C,texImage2D:j,texImage3D:it,pixelStorei:kt,getParameter:_t,updateUBOMapping:zt,uniformBlockBinding:Yt,texStorage2D:ft,texStorage3D:pt,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:Mt,viewport:yt,reset:re}}function bE(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return p?new OffscreenCanvas(C,M):ao("canvas")}function m(C,M,H){let q=1,J=de(C);if((J.width>H||J.height>H)&&(q=H/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ft=Math.floor(q*J.width),pt=Math.floor(q*J.height);f===void 0&&(f=x(ft,pt));let j=M?x(ft,pt):f;return j.width=ft,j.height=pt,j.getContext("2d").drawImage(C,0,0,ft,pt),Nt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ft+"x"+pt+")."),j}else return"data"in C&&Nt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function _(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,M,H,q,J,ft=!1){if(C!==null){if(i[C]!==void 0)return i[C];Nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pt;q&&(pt=t.get("EXT_texture_norm16"),pt||Nt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=M;if(M===i.RED&&(H===i.FLOAT&&(j=i.R32F),H===i.HALF_FLOAT&&(j=i.R16F),H===i.UNSIGNED_BYTE&&(j=i.R8),H===i.UNSIGNED_SHORT&&pt&&(j=pt.R16_EXT),H===i.SHORT&&pt&&(j=pt.R16_SNORM_EXT)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.R8UI),H===i.UNSIGNED_SHORT&&(j=i.R16UI),H===i.UNSIGNED_INT&&(j=i.R32UI),H===i.BYTE&&(j=i.R8I),H===i.SHORT&&(j=i.R16I),H===i.INT&&(j=i.R32I)),M===i.RG&&(H===i.FLOAT&&(j=i.RG32F),H===i.HALF_FLOAT&&(j=i.RG16F),H===i.UNSIGNED_BYTE&&(j=i.RG8),H===i.UNSIGNED_SHORT&&pt&&(j=pt.RG16_EXT),H===i.SHORT&&pt&&(j=pt.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RG8UI),H===i.UNSIGNED_SHORT&&(j=i.RG16UI),H===i.UNSIGNED_INT&&(j=i.RG32UI),H===i.BYTE&&(j=i.RG8I),H===i.SHORT&&(j=i.RG16I),H===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGB8UI),H===i.UNSIGNED_SHORT&&(j=i.RGB16UI),H===i.UNSIGNED_INT&&(j=i.RGB32UI),H===i.BYTE&&(j=i.RGB8I),H===i.SHORT&&(j=i.RGB16I),H===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),H===i.UNSIGNED_INT&&(j=i.RGBA32UI),H===i.BYTE&&(j=i.RGBA8I),H===i.SHORT&&(j=i.RGBA16I),H===i.INT&&(j=i.RGBA32I)),M===i.RGB&&(H===i.UNSIGNED_SHORT&&pt&&(j=pt.RGB16_EXT),H===i.SHORT&&pt&&(j=pt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),M===i.RGBA){let it=ft?Ea:oe.getTransfer(J);H===i.FLOAT&&(j=i.RGBA32F),H===i.HALF_FLOAT&&(j=i.RGBA16F),H===i.UNSIGNED_BYTE&&(j=it===ve?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&pt&&(j=pt.RGBA16_EXT),H===i.SHORT&&pt&&(j=pt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(C,M){let H;return C?M===null||M===_i||M===Co?H=i.DEPTH24_STENCIL8:M===Gn?H=i.DEPTH32F_STENCIL8:M===Ro&&(H=i.DEPTH24_STENCIL8,Nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===_i||M===Co?H=i.DEPTH_COMPONENT24:M===Gn?H=i.DEPTH_COMPONENT32F:M===Ro&&(H=i.DEPTH_COMPONENT16),H}function b(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==$e&&C.minFilter!==He?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function y(C){let M=C.target;M.removeEventListener("dispose",y),P(M)}function E(C){let M=n.get(C);if(M.__webglInit===void 0)return;let H=C.source,q=d.get(H);if(q){let J=q[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(q).length===0&&d.delete(H)}n.remove(C)}function R(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let H=C.source,q=d.get(H);delete q[M.__cacheKey],o.memory.textures--}function P(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let J=0;J<M.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[q][J]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=C.textures;for(let q=0,J=H.length;q<J;q++){let ft=n.get(H[q]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(C)}let N=0;function k(){N=0}function D(){return N}function B(C){N=C}function X(){let C=N;return C>=s.maxTextures&&Nt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function $(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function rt(C,M){let H=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let q=C.image;if(q===null)Nt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Nt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(H,C,M);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function Z(C,M){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){mt(H,C,M);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function et(C,M){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){mt(H,C,M);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function z(C,M){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){Ut(H,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let ot={[jn]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[ro]:i.MIRRORED_REPEAT},lt={[$e]:i.NEAREST,[hh]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[Ao]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},Ot={[Q0]:i.NEVER,[sg]:i.ALWAYS,[tg]:i.LESS,[$h]:i.LEQUAL,[eg]:i.EQUAL,[Kh]:i.GEQUAL,[ng]:i.GREATER,[ig]:i.NOTEQUAL};function Bt(C,M){if(M.type===Gn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===He||M.magFilter===Ao||M.magFilter===vr||M.magFilter===Vn||M.minFilter===He||M.minFilter===Ao||M.minFilter===vr||M.minFilter===Vn)&&Nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ot[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ot[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ot[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$e||M.minFilter!==vr&&M.minFilter!==Vn||M.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Zt(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let q=M.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let ft=$(M);if(ft!==C.__cacheKey){J[ft]===void 0&&(J[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[ft].usedTimes++;let pt=J[C.__cacheKey];pt!==void 0&&(J[C.__cacheKey].usedTimes--,pt.usedTimes===0&&R(M)),C.__cacheKey=ft,C.__webglTexture=J[ft].texture}return H}function K(C,M,H){return Math.floor(Math.floor(C/H)/M)}function tt(C,M,H,q){let ft=C.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,H,q,M.data);else{ft.sort((kt,Mt)=>kt.start-Mt.start);let pt=0;for(let kt=1;kt<ft.length;kt++){let Mt=ft[pt],yt=ft[kt],zt=Mt.start+Mt.count,Yt=K(yt.start,M.width,4),re=K(Mt.start,M.width,4);yt.start<=zt+1&&Yt===re&&K(yt.start+yt.count-1,M.width,4)===Yt?Mt.count=Math.max(Mt.count,yt.start+yt.count-Mt.start):(++pt,ft[pt]=yt)}ft.length=pt+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let kt=0,Mt=ft.length;kt<Mt;kt++){let yt=ft[kt],zt=Math.floor(yt.start/4),Yt=Math.ceil(yt.count/4),re=zt%M.width,O=Math.floor(zt/M.width),vt=Yt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,re),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,re,O,vt,nt,H,q,M.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function mt(C,M,H){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);let J=Zt(C,M),ft=M.source;e.bindTexture(q,C.__webglTexture,i.TEXTURE0+H);let pt=n.get(ft);if(ft.version!==pt.__version||J===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let nt=oe.getPrimaries(oe.workingColorSpace),bt=M.colorSpace===os?null:oe.getPrimaries(M.colorSpace),Tt=M.colorSpace===os||nt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let it=m(M.image,!1,s.maxTextureSize);it=Te(M,it);let _t=r.convert(M.format,M.colorSpace),kt=r.convert(M.type),Mt=v(M.internalFormat,_t,kt,M.normalized,M.colorSpace,M.isVideoTexture);Bt(q,M);let yt,zt=M.mipmaps,Yt=M.isVideoTexture!==!0,re=pt.__version===void 0||J===!0,O=ft.dataReady,vt=b(M,it);if(M.isDepthTexture)Mt=S(M.format===Ls,M.type),re&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,Mt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Mt,it.width,it.height,0,_t,kt,null));else if(M.isDataTexture)if(zt.length>0){Yt&&re&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,zt[0].width,zt[0].height);for(let nt=0,bt=zt.length;nt<bt;nt++)yt=zt[nt],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,_t,kt,yt.data):e.texImage2D(i.TEXTURE_2D,nt,Mt,yt.width,yt.height,0,_t,kt,yt.data);M.generateMipmaps=!1}else Yt?(re&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,it.width,it.height),O&&tt(M,it,_t,kt)):e.texImage2D(i.TEXTURE_2D,0,Mt,it.width,it.height,0,_t,kt,it.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Yt&&re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,zt[0].width,zt[0].height,it.depth);for(let nt=0,bt=zt.length;nt<bt;nt++)if(yt=zt[nt],M.format!==Wn)if(_t!==null)if(Yt){if(O)if(M.layerUpdates.size>0){let Tt=ud(yt.width,yt.height,M.format,M.type);for(let at of M.layerUpdates){let Vt=yt.data.subarray(at*Tt/yt.data.BYTES_PER_ELEMENT,(at+1)*Tt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,at,yt.width,yt.height,1,_t,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,it.depth,_t,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,Mt,yt.width,yt.height,it.depth,0,yt.data,0,0);else Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,yt.width,yt.height,it.depth,_t,kt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,Mt,yt.width,yt.height,it.depth,0,_t,kt,yt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Yt&&re&&e.texStorage2D(i.TEXTURE_2D,vt,Mt,zt[0].width,zt[0].height);for(let nt=0,bt=zt.length;nt<bt;nt++)yt=zt[nt],M.format!==Wn?_t!==null?Yt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,_t,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,Mt,yt.width,yt.height,0,yt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,yt.width,yt.height,_t,kt,yt.data):e.texImage2D(i.TEXTURE_2D,nt,Mt,yt.width,yt.height,0,_t,kt,yt.data)}else if(M.isDataArrayTexture)if(Yt){if(re&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Mt,it.width,it.height,it.depth),O)if(M.layerUpdates.size>0){let nt=ud(it.width,it.height,M.format,M.type);for(let bt of M.layerUpdates){let Tt=it.data.subarray(bt*nt/it.data.BYTES_PER_ELEMENT,(bt+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,it.width,it.height,1,_t,kt,Tt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,_t,kt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,it.width,it.height,it.depth,0,_t,kt,it.data);else if(M.isData3DTexture)Yt?(re&&e.texStorage3D(i.TEXTURE_3D,vt,Mt,it.width,it.height,it.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,_t,kt,it.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,it.width,it.height,it.depth,0,_t,kt,it.data);else if(M.isFramebufferTexture){if(re)if(Yt)e.texStorage2D(i.TEXTURE_2D,vt,Mt,it.width,it.height);else{let nt=it.width,bt=it.height;for(let Tt=0;Tt<vt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Mt,nt,bt,0,_t,kt,null),nt>>=1,bt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),u.add(M),nt.onpaint=bt=>{let Tt=bt.changedElements;for(let at of u)Tt.includes(at.image)&&(at.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let Tt=i.RGBA,at=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,at,Vt,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(Yt&&re){let nt=de(zt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Mt,nt.width,nt.height)}for(let nt=0,bt=zt.length;nt<bt;nt++)yt=zt[nt],Yt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,_t,kt,yt):e.texImage2D(i.TEXTURE_2D,nt,Mt,_t,kt,yt);M.generateMipmaps=!1}else if(Yt){if(re){let nt=de(it);e.texStorage2D(i.TEXTURE_2D,vt,Mt,nt.width,nt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,kt,it)}else e.texImage2D(i.TEXTURE_2D,0,Mt,_t,kt,it);g(M)&&_(q),pt.__version=ft.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ut(C,M,H){if(M.image.length!==6)return;let q=Zt(C,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let ft=n.get(J);if(J.version!==ft.__version||q===!0){e.activeTexture(i.TEXTURE0+H);let pt=oe.getPrimaries(oe.workingColorSpace),j=M.colorSpace===os?null:oe.getPrimaries(M.colorSpace),it=M.colorSpace===os||pt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let _t=M.isCompressedTexture||M.image[0].isCompressedTexture,kt=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let at=0;at<6;at++)!_t&&!kt?Mt[at]=m(M.image[at],!0,s.maxCubemapSize):Mt[at]=kt?M.image[at].image:M.image[at],Mt[at]=Te(M,Mt[at]);let yt=Mt[0],zt=r.convert(M.format,M.colorSpace),Yt=r.convert(M.type),re=v(M.internalFormat,zt,Yt,M.normalized,M.colorSpace),O=M.isVideoTexture!==!0,vt=ft.__version===void 0||q===!0,nt=J.dataReady,bt=b(M,yt);Bt(i.TEXTURE_CUBE_MAP,M);let Tt;if(_t){O&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,re,yt.width,yt.height);for(let at=0;at<6;at++){Tt=Mt[at].mipmaps;for(let Vt=0;Vt<Tt.length;Vt++){let Lt=Tt[Vt];M.format!==Wn?zt!==null?O?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,Lt.width,Lt.height,zt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,re,Lt.width,Lt.height,0,Lt.data):Nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,0,0,Lt.width,Lt.height,zt,Yt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt,re,Lt.width,Lt.height,0,zt,Yt,Lt.data)}}}else{if(Tt=M.mipmaps,O&&vt){Tt.length>0&&bt++;let at=de(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,re,at.width,at.height)}for(let at=0;at<6;at++)if(kt){O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Mt[at].width,Mt[at].height,zt,Yt,Mt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,re,Mt[at].width,Mt[at].height,0,zt,Yt,Mt[at].data);for(let Vt=0;Vt<Tt.length;Vt++){let Ue=Tt[Vt].image[at].image;O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,Ue.width,Ue.height,zt,Yt,Ue.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,re,Ue.width,Ue.height,0,zt,Yt,Ue.data)}}else{O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,zt,Yt,Mt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,re,zt,Yt,Mt[at]);for(let Vt=0;Vt<Tt.length;Vt++){let Lt=Tt[Vt];O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,0,0,zt,Yt,Lt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt+1,re,zt,Yt,Lt.image[at])}}}g(M)&&_(i.TEXTURE_CUBE_MAP),ft.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function xt(C,M,H,q,J,ft){let pt=r.convert(H.format,H.colorSpace),j=r.convert(H.type),it=v(H.internalFormat,pt,j,H.normalized,H.colorSpace),_t=n.get(M),kt=n.get(H);if(kt.__renderTarget=M,!_t.__hasExternalTextures){let Mt=Math.max(1,M.width>>ft),yt=Math.max(1,M.height>>ft);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,ft,it,Mt,yt,M.depth,0,pt,j,null):e.texImage2D(J,ft,it,Mt,yt,0,pt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ie(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,kt.__webglTexture,0,Jt(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,kt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(C,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let q=M.depthTexture,J=q&&q.isDepthTexture?q.type:null,ft=S(M.stencilBuffer,J),pt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ie(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(M),ft,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(M),ft,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ft,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,C)}else{let q=M.textures;for(let J=0;J<q.length;J++){let ft=q[J],pt=r.convert(ft.format,ft.colorSpace),j=r.convert(ft.type),it=v(ft.internalFormat,pt,j,ft.normalized,ft.colorSpace);ie(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(M),it,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(M),it,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,it,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(C,M,H){let q=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=n.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,M.depthTexture);let _t=r.convert(M.depthTexture.format),kt=r.convert(M.depthTexture.type),Mt;M.depthTexture.format===Pi?Mt=i.DEPTH_COMPONENT24:M.depthTexture.format===Ls&&(Mt=i.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Mt,M.width,M.height,0,_t,kt,null)}}else rt(M.depthTexture,0);let ft=J.__webglTexture,pt=Jt(M),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,it=M.depthTexture.format===Ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Pi)ie(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,ft,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,it,j,ft,0);else if(M.depthTexture.format===Ls)ie(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,j,ft,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,it,j,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(C){let M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(H)for(let q=0;q<6;q++)ye(M.__webglFramebuffer[q],C,q);else{let q=C.texture.mipmaps;q&&q.length>0?ye(M.__webglFramebuffer[0],C,0):ye(M.__webglFramebuffer,C,0)}else if(H){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),qt(M.__webglDepthbuffer[q],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ft)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),qt(M.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,M,H){let q=n.get(C);M!==void 0&&xt(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&st(C)}function ht(C){let M=C.texture,H=n.get(C),q=n.get(M);C.addEventListener("dispose",y);let J=C.textures,ft=C.isWebGLCubeRenderTarget===!0,pt=J.length>1;if(pt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),ft){H.__webglFramebuffer=[];for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[j]=[];for(let it=0;it<M.mipmaps.length;it++)H.__webglFramebuffer[j][it]=i.createFramebuffer()}else H.__webglFramebuffer[j]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let j=0;j<M.mipmaps.length;j++)H.__webglFramebuffer[j]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(pt)for(let j=0,it=J.length;j<it;j++){let _t=n.get(J[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ie(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let j=0;j<J.length;j++){let it=J[j];H.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[j]);let _t=r.convert(it.format,it.colorSpace),kt=r.convert(it.type),Mt=v(it.internalFormat,_t,kt,it.normalized,it.colorSpace,C.isXRRenderTarget===!0),yt=Jt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,Mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,H.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(H.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,M);for(let j=0;j<6;j++)if(M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)xt(H.__webglFramebuffer[j][it],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,it);else xt(H.__webglFramebuffer[j],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(M)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let j=0,it=J.length;j<it;j++){let _t=J[j],kt=n.get(_t),Mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,kt.__webglTexture),Bt(Mt,_t),xt(H.__webglFramebuffer,C,_t,i.COLOR_ATTACHMENT0+j,Mt,0),g(_t)&&_(Mt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,q.__webglTexture),Bt(j,M),M.mipmaps&&M.mipmaps.length>0)for(let it=0;it<M.mipmaps.length;it++)xt(H.__webglFramebuffer[it],C,M,i.COLOR_ATTACHMENT0,j,it);else xt(H.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,j,0);g(M)&&_(j),e.unbindTexture()}C.depthBuffer&&st(C)}function ut(C){let M=C.textures;for(let H=0,q=M.length;H<q;H++){let J=M[H];if(g(J)){let ft=w(C),pt=n.get(J).__webglTexture;e.bindTexture(ft,pt),_(ft),e.unbindTexture()}}}let gt=[],Xt=[];function Gt(C){if(C.samples>0){if(ie(C)===!1){let M=C.textures,H=C.width,q=C.height,J=i.COLOR_BUFFER_BIT,ft=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(C),j=M.length>1;if(j)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let it=C.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);let kt=n.get(M[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,J,i.NEAREST),l===!0&&(gt.length=0,Xt.length=0,gt.push(i.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(gt.push(ft),Xt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,pt.__webglColorRenderbuffer[_t]);let kt=n.get(M[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Jt(C){return Math.min(s.maxSamples,C.samples)}function ie(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function F(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function Te(C,M){let H=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==dn&&H!==os&&(oe.getTransfer(H)===ve?(q!==Wn||J!==Nn)&&Nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",H)),M}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=z,this.rebindTextures=ct,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ME(i,t){function e(n,s=os){let r,o=oe.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===fh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===td)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jf)return i.BYTE;if(n===jf)return i.SHORT;if(n===Ro)return i.UNSIGNED_SHORT;if(n===uh)return i.INT;if(n===_i)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===ed)return i.ALPHA;if(n===nd)return i.RGB;if(n===Wn)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===Ls)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===mh)return i.RED_INTEGER;if(n===Ns)return i.RG;if(n===gh)return i.RG_INTEGER;if(n===xh)return i.RGBA_INTEGER;if(n===pl||n===ml||n===gl||n===xl)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ml)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_h||n===yh||n===vh||n===bh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===_h)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mh||n===Sh||n===wh||n===Eh||n===Th||n===_l||n===Ah)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mh||n===Sh)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eh)return r.COMPRESSED_R11_EAC;if(n===Th)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_l)return r.COMPRESSED_RG11_EAC;if(n===Ah)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rh||n===Ch||n===Ih||n===Ph||n===Lh||n===Nh||n===Dh||n===Fh||n===Uh||n===Oh||n===Bh||n===kh||n===zh||n===Hh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Rh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ch)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ih)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ph)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hh)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vh||n===Gh||n===Wh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vh)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qh||n===Xh||n===yl||n===Yh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Co?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var SE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wE=`
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

}`,Id=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Oa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new rn({vertexShader:SE,fragmentShader:wE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rt(new qe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pd=class extends Li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new Id,g={},_=e.getContextAttributes(),w=null,v=null,S=[],b=[],A=new Q,y=null,E=null,R=new hn;R.viewport=new _e;let P=new hn;P.viewport=new _e;let N=[R,P],k=new rh,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=S[K];return tt===void 0&&(tt=new uo,S[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=S[K];return tt===void 0&&(tt=new uo,S[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=S[K];return tt===void 0&&(tt=new uo,S[K]=tt),tt.getHandSpace()};function X(K){let tt=b.indexOf(K.inputSource);if(tt===-1)return;let mt=S[tt];mt!==void 0&&(mt.update(K.inputSource,K.frame,c||o),mt.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",rt);for(let K=0;K<S.length;K++){let tt=b[K];tt!==null&&(b[K]=null,S[K].disconnect(tt))}D=null,B=null,m.reset();for(let K in g)delete g[K];if(t.setRenderTarget(w),d=null,f=null,u=null,s=null,v=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),E!==null){let K=E.camera;K.fov=E.fov,K.zoom=E.zoom,K.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",rt),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ut=null,xt=null;_.depth&&(xt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=_.stencil?Ls:Pi,Ut=_.stencil?Co:_i);let qt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new We(f.textureWidth,f.textureHeight,{format:Wn,type:Nn,depthTexture:new As(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let mt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new We(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(K){for(let tt=0;tt<K.removed.length;tt++){let mt=K.removed[tt],Ut=b.indexOf(mt);Ut>=0&&(b[Ut]=null,S[Ut].disconnect(mt))}for(let tt=0;tt<K.added.length;tt++){let mt=K.added[tt],Ut=b.indexOf(mt);if(Ut===-1){for(let qt=0;qt<S.length;qt++)if(qt>=b.length){b.push(mt),Ut=qt;break}else if(b[qt]===null){b[qt]=mt,Ut=qt;break}if(Ut===-1)break}let xt=S[Ut];xt&&xt.connect(mt)}}let Z=new I,et=new I;function z(K,tt,mt){Z.setFromMatrixPosition(tt.matrixWorld),et.setFromMatrixPosition(mt.matrixWorld);let Ut=Z.distanceTo(et),xt=tt.projectionMatrix.elements,qt=mt.projectionMatrix.elements,ye=xt[14]/(xt[10]-1),st=xt[14]/(xt[10]+1),ct=(xt[9]+1)/xt[5],ht=(xt[9]-1)/xt[5],ut=(xt[8]-1)/xt[0],gt=(qt[8]+1)/qt[0],Xt=ye*ut,Gt=ye*gt,Jt=Ut/(-ut+gt),ie=Jt*-ut;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ie),K.translateZ(Jt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xt[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let F=ye+Jt,Te=st+Jt,de=Xt-ie,C=Gt+(Ut-ie),M=ct*st/Te*F,H=ht*st/Te*F;K.projectionMatrix.makePerspective(de,C,M,H,F,Te),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ot(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let tt=K.near,mt=K.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),k.near=P.near=R.near=tt,k.far=P.far=R.far=mt,(D!==k.near||B!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,B=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,P.layers.mask=k.layers.mask&-3;let Ut=K.parent,xt=k.cameras;ot(k,Ut);for(let qt=0;qt<xt.length;qt++)ot(xt[qt],Ut);xt.length===2?z(k,R,P):k.projectionMatrix.copy(R.projectionMatrix),E===null&&K.isPerspectiveCamera&&(E={camera:K,fov:K.fov,zoom:K.zoom}),lt(K,k,Ut)};function lt(K,tt,mt){mt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=rr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return g[K]};let Ot=null;function Bt(K,tt){if(h=tt.getViewerPose(c||o),p=tt,h!==null){let mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ut=!1;mt.length!==k.cameras.length&&(k.cameras.length=0,Ut=!0);for(let st=0;st<mt.length;st++){let ct=mt[st],ht=null;if(d!==null)ht=d.getViewport(ct);else{let gt=u.getViewSubImage(f,ct);ht=gt.viewport,st===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let ut=N[st];ut===void 0&&(ut=new hn,ut.layers.enable(st),ut.viewport=new _e,N[st]=ut),ut.matrix.fromArray(ct.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(ct.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(ht.x,ht.y,ht.width,ht.height),st===0&&(k.matrix.copy(ut.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ut===!0&&k.cameras.push(ut)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let st=u.getDepthInformation(mt[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let st=0;st<mt.length;st++){let ct=mt[st].camera;if(ct){let ht=g[ct];ht||(ht=new Oa,g[ct]=ht);let ut=u.getCameraImage(ct);ht.sourceTexture=ut}}}}for(let mt=0;mt<S.length;mt++){let Ut=b[mt],xt=S[mt];Ut!==null&&xt!==void 0&&xt.update(Ut,tt,c||o)}Ot&&Ot(K,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}let Zt=new Bg;Zt.setAnimationLoop(Bt),this.setAnimationLoop=function(K){Ot=K},this.dispose=function(){}}},EE=new Kt,Wg=new ee;Wg.set(-1,0,0,0,1,0,0,0,1);function TE(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,ld(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,w,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,_,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===pn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===pn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),w=_.envMap,v=_.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(EE.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=w*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,_){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===pn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function AE(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let b=S.program;n.uniformBlockBinding(v,b)}function c(v,S){let b=s[v.id];b===void 0&&(m(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",_));let A=S.program;n.updateUBOMapping(v,A);let y=t.render.frame;r[v.id]!==y&&(f(v),r[v.id]=y)}function h(v){let S=u();v.__bindingPointIndex=S;let b=i.createBuffer(),A=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let S=s[v.id],b=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let y=0,E=b.length;y<E;y++){let R=b[y];if(Array.isArray(R))for(let P=0,N=R.length;P<N;P++)d(R[P],y,P,A);else d(R,y,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,S,b,A){if(x(v,S,b,A)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let N=E[P],k=g(N);p(N,v.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function p(v,S,b){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,b)}function x(v,S,b,A){let y=v.value,E=S+"_"+b;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{let R=A[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(v){let S=v.uniforms,b=0,A=16;for(let E=0,R=S.length;E<R;E++){let P=Array.isArray(S[E])?S[E]:[S[E]];for(let N=0,k=P.length;N<k;N++){let D=P[N],B=Array.isArray(D.value)?D.value:[D.value];for(let X=0,$=B.length;X<$;X++){let rt=B[X],Z=g(rt),et=b%A,z=et%Z.boundary,ot=et+z;b+=z,ot!==0&&A-ot<Z.storage&&(b+=A-ot),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=Z.storage}}}let y=b%A;return y>0&&(b+=A-y),v.__size=b,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Nt("WebGLRenderer: Unsupported uniform value type.",v),S}function _(v){let S=v.target;S.removeEventListener("dispose",_);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:w}}var RE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;function CE(){return Ui===null&&(Ui=new mo(RE,16,16,Ns,nn),Ui.name="DFG_LUT",Ui.minFilter=He,Ui.magFilter=He,Ui.wrapS=Zn,Ui.wrapT=Zn,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var Qh=class{constructor(t={}){let{canvas:e=rg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Nn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([xh,gh,mh]),g=new Set([Nn,_i,Ro,Co,fh,dh]),_=new Uint32Array(4),w=new Int32Array(4),v=new I,S=null,b=null,A=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,N=null,k=null,D=null,B=null;this._outputColorSpace=ae;let X=0,$=0,rt=null,Z=-1,et=null,z=new _e,ot=new _e,lt=null,Ot=new dt(0),Bt=0,Zt=e.width,K=e.height,tt=1,mt=null,Ut=null,xt=new _e(0,0,Zt,K),qt=new _e(0,0,Zt,K),ye=!1,st=new go,ct=!1,ht=!1,ut=new Kt,gt=new I,Xt=new _e,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function ie(){return rt===null?tt:1}let F=n;function Te(T,U){return e.getContext(T,U)}let de,C,M,H,q,J,ft,pt,j,it,_t,kt,Mt,yt,zt,Yt,re,O,vt,nt,bt,Tt,at;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ue,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",hi,!1),F===null){let U="webgl2";if(F=Te(U,T),F===null)throw Te(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(T){throw e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",hi,!1),$t("WebGLRenderer: "+T.message),T}function Vt(){de=new U1(F),de.init(),bt=new ME(F,de),C=new T1(F,de,t,bt),M=new vE(F,de),C.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),k=F.createFramebuffer(),D=F.createFramebuffer(),B=F.createFramebuffer(),H=new k1(F),q=new oE,J=new bE(F,de,M,q,C,bt,H),ft=new F1(R),pt=new Hb(F),Tt=new w1(F,pt),j=new O1(F,pt,H,Tt),it=new H1(F,j,pt,Tt,H),O=new z1(F,C,J),zt=new A1(q),_t=new rE(R,ft,de,C,Tt,zt),kt=new TE(R,q),Mt=new lE,yt=new pE(de),re=new S1(R,ft,M,it,p,l),Yt=new yE(R,it,C),at=new AE(F,H,C,M),vt=new E1(F,de,H),nt=new B1(F,de,H),H.programs=_t.programs,R.capabilities=C,R.extensions=de,R.properties=q,R.renderLists=Mt,R.shadowMap=Yt,R.state=M,R.info=H}x!==Nn&&(E=new G1(x,e.width,e.height,a,s,r));let Lt=new Pd(R,F);this.xr=Lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let T=de.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=de.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize(Zt,K,!1))},this.getSize=function(T){return T.set(Zt,K)},this.setSize=function(T,U,Y=!0){if(Lt.isPresenting){Nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=T,K=U,e.width=Math.floor(T*tt),e.height=Math.floor(U*tt),Y===!0&&(e.style.width=T+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Zt*tt,K*tt).floor()},this.setDrawingBufferSize=function(T,U,Y){Zt=T,K=U,tt=Y,e.width=Math.floor(T*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(x===Nn){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Nt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(z)},this.getViewport=function(T){return T.copy(xt)},this.setViewport=function(T,U,Y,G){T.isVector4?xt.set(T.x,T.y,T.z,T.w):xt.set(T,U,Y,G),M.viewport(z.copy(xt).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(qt)},this.setScissor=function(T,U,Y,G){T.isVector4?qt.set(T.x,T.y,T.z,T.w):qt.set(T,U,Y,G),M.scissor(ot.copy(qt).multiplyScalar(tt).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(T){M.setScissorTest(ye=T)},this.setOpaqueSort=function(T){mt=T},this.setTransparentSort=function(T){Ut=T},this.getClearColor=function(T){return T.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,Y=!0){let G=0;if(T){let W=!1;if(rt!==null){let Et=rt.texture.format;W=m.has(Et)}if(W){let Et=rt.texture.type,Ct=g.has(Et),wt=re.getClearColor(),It=re.getClearAlpha(),Ft=wt.r,ce=wt.g,pe=wt.b;Ct?(_[0]=Ft,_[1]=ce,_[2]=pe,_[3]=It,F.clearBufferuiv(F.COLOR,0,_)):(w[0]=Ft,w[1]=ce,w[2]=pe,w[3]=It,F.clearBufferiv(F.COLOR,0,w))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Ue,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",hi,!1),re.dispose(),Mt.dispose(),yt.dispose(),q.dispose(),ft.dispose(),it.dispose(),Tt.dispose(),at.dispose(),_t.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Sm),Lt.removeEventListener("sessionend",wm),Js.stop()};function Ue(T){T.preventDefault(),Ta("WebGLRenderer: Context Lost."),P=!0}function Ae(){Ta("WebGLRenderer: Context Restored."),P=!1;let T=H.autoReset,U=Yt.enabled,Y=Yt.autoUpdate,G=Yt.needsUpdate,W=Yt.type;Vt(),H.autoReset=T,Yt.enabled=U,Yt.autoUpdate=Y,Yt.needsUpdate=G,Yt.type=W}function hi(T){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ti(T){let U=T.target;U.removeEventListener("dispose",Ti),nv(U)}function nv(T){iv(T),q.remove(T)}function iv(T){let U=q.get(T).programs;U!==void 0&&(U.forEach(function(Y){_t.releaseProgram(Y)}),T.isShaderMaterial&&_t.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,Y,G,W,Et){U===null&&(U=Gt);let Ct=W.isMesh&&W.matrixWorld.determinantAffine()<0,wt=ov(T,U,Y,G,W);M.setMaterial(G,Ct);let It=Y.index,Ft=1;if(G.wireframe===!0){if(It=j.getWireframeAttribute(Y),It===void 0)return;Ft=2}let ce=Y.drawRange,pe=Y.attributes.position,Pt=ce.start*Ft,Re=(ce.start+ce.count)*Ft;Et!==null&&(Pt=Math.max(Pt,Et.start*Ft),Re=Math.min(Re,(Et.start+Et.count)*Ft)),It!==null?(Pt=Math.max(Pt,0),Re=Math.min(Re,It.count)):pe!=null&&(Pt=Math.max(Pt,0),Re=Math.min(Re,pe.count));let Qe=Re-Pt;if(Qe<0||Qe===1/0)return;Tt.setup(W,G,wt,Y,It);let ke,De=vt;if(It!==null&&(ke=pt.get(It),De=nt,De.setIndex(ke)),W.isMesh)G.wireframe===!0?(M.setLineWidth(G.wireframeLinewidth*ie()),De.setMode(F.LINES)):De.setMode(F.TRIANGLES);else if(W.isLine){let _n=G.linewidth;_n===void 0&&(_n=1),M.setLineWidth(_n*ie()),W.isLineSegments?De.setMode(F.LINES):W.isLineLoop?De.setMode(F.LINE_LOOP):De.setMode(F.LINE_STRIP)}else W.isPoints?De.setMode(F.POINTS):W.isSprite&&De.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(de.get("WEBGL_multi_draw"))De.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let _n=W._multiDrawStarts,At=W._multiDrawCounts,An=W._multiDrawCount,xe=It?pt.get(It).bytesPerElement:1,$n=q.get(G).currentProgram.getUniforms();for(let Ai=0;Ai<An;Ai++)$n.setValue(F,"_gl_DrawID",Ai),De.render(_n[Ai]/xe,At[Ai])}else if(W.isInstancedMesh)De.renderInstances(Pt,Qe,W.count);else if(Y.isInstancedBufferGeometry){let _n=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,At=Math.min(Y.instanceCount,_n);De.renderInstances(Pt,Qe,At)}else De.render(Pt,Qe)};function Mm(T,U,Y,G){N!==null&&T.isNodeMaterial&&N.setObject(G,T),ct===!0&&zt.setState(T,Y,!1),T.transparent===!0&&T.side===en&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,Kl(T,U,G),T.side=ti,T.needsUpdate=!0,Kl(T,U,G),T.side=en):Kl(T,U,G)}this.compile=function(T,U,Y=null){Y===null&&(Y=T),N!==null&&N.renderStart(T,U,Y),b=yt.get(Y),b.init(U),y.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==Y&&T.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),ht=this.localClippingEnabled,ct=zt.init(this.clippingPlanes,ht),ct===!0&&zt.setGlobalState(this.clippingPlanes,U),N!==null&&Yt.render(b.state.shadowsArray,Y,U);let G=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Et=W.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){let wt=Et[Ct];Mm(wt,Y,U,W),G.add(wt)}else Mm(Et,Y,U,W),G.add(Et)}),b=y.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(T,U,Y=null){let G=this.compile(T,U,Y);return new Promise(W=>{function Et(){if(G.forEach(function(Ct){let It=q.get(Ct).currentProgram;(It===void 0||It.isReady())&&G.delete(Ct)}),G.size===0){W(T);return}setTimeout(Et,10)}de.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ju=null;function sv(T){Ju&&Ju(T)}function Sm(){Js.stop()}function wm(){Js.start()}let Js=new Bg;Js.setAnimationLoop(sv),typeof self<"u"&&Js.setContext(self),this.setAnimationLoop=function(T){Ju=T,Lt.setAnimationLoop(T),T===null?Js.stop():Js.start()},Lt.addEventListener("sessionstart",Sm),Lt.addEventListener("sessionend",wm),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,U);let Y=Lt.enabled===!0&&Lt.isPresenting===!0,G=E!==null&&(rt===null||Y)&&E.begin(R,rt);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,rt),b=yt.get(T,y.length),b.init(U),b.state.textureUnits=J.getTextureUnits(),y.push(b),ut.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),st.setFromProjectionMatrix(ut,mi,U.reversedDepth),ht=this.localClippingEnabled,ct=zt.init(this.clippingPlanes,ht),S=Mt.get(T,A.length),S.init(),A.push(S),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=R.xr.getDepthSensingMesh();Ct!==null&&ju(Ct,U,-1/0,R.sortObjects)}ju(T,U,0,R.sortObjects),S.finish(),N!==null&&N.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(mt,Ut),Jt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Jt&&re.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&zt.beginShadows();let W=b.state.shadowsArray;if(Yt.render(W,T,U),ct===!0&&zt.endShadows(),(G&&E.hasRenderPass())===!1){let Ct=S.opaque,wt=S.transmissive;if(b.setupLights(),U.isArrayCamera){let It=U.cameras;if(wt.length>0)for(let Ft=0,ce=It.length;Ft<ce;Ft++){let pe=It[Ft];Tm(Ct,wt,T,pe)}Jt&&re.render(T);for(let Ft=0,ce=It.length;Ft<ce;Ft++){let pe=It[Ft];Em(S,T,pe,pe.viewport)}}else wt.length>0&&Tm(Ct,wt,T,U),Jt&&re.render(T),Em(S,T,U)}rt!==null&&$===0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt)),G&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),Tt.resetDefaultState(),Z=-1,et=null,y.pop(),y.length>0?(b=y[y.length-1],J.setTextureUnits(b.state.textureUnits),ct===!0&&zt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,N!==null&&N.renderEnd()};function ju(T,U,Y,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(st)){G&&Xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);let Ct=it.update(T),wt=T.material;wt.visible&&S.push(T,Ct,wt,Y,Xt.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(st))){let Ct=it.update(T),wt=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Xt.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Xt.copy(Ct.boundingSphere.center)),Xt.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(wt)){let It=Ct.groups;for(let Ft=0,ce=It.length;Ft<ce;Ft++){let pe=It[Ft],Pt=wt[pe.materialIndex];Pt&&Pt.visible&&S.push(T,Ct,Pt,Y,Xt.z,pe,U)}}else wt.visible&&S.push(T,Ct,wt,Y,Xt.z,null,U)}}let Et=T.children;for(let Ct=0,wt=Et.length;Ct<wt;Ct++)ju(Et[Ct],U,Y,G)}function Em(T,U,Y,G){let{opaque:W,transmissive:Et,transparent:Ct}=T;b.setupLightsView(Y),ct===!0&&zt.setGlobalState(R.clippingPlanes,Y),G&&M.viewport(z.copy(G)),W.length>0&&$l(W,U,Y),Et.length>0&&$l(Et,U,Y),Ct.length>0&&$l(Ct,U,Y),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Tm(T,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Pt=de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new We(1,1,{generateMipmaps:!0,type:Pt?nn:Nn,minFilter:Vn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Et=b.state.transmissionRenderTarget[G.id],Ct=G.viewport||z;Et.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);let wt=R.getRenderTarget(),It=R.getActiveCubeFace(),Ft=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(Ot),Bt=R.getClearAlpha(),Bt<1&&R.setClearColor(16777215,.5),R.clear(),Jt&&re.render(Y);let ce=R.toneMapping;R.toneMapping=xi;let pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),ct===!0&&zt.setGlobalState(R.clippingPlanes,G),$l(T,Y,G),J.updateMultisampleRenderTarget(Et),J.updateRenderTargetMipmap(Et),de.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Re=0,Qe=U.length;Re<Qe;Re++){let ke=U[Re],{object:De,geometry:_n,material:At,group:An}=ke;if(At.side===en&&De.layers.test(G.layers)){let xe=At.side;At.side=pn,At.needsUpdate=!0,Am(De,Y,G,_n,At,An),At.side=xe,At.needsUpdate=!0,Pt=!0}}Pt===!0&&(J.updateMultisampleRenderTarget(Et),J.updateRenderTargetMipmap(Et))}R.setRenderTarget(wt,It,Ft),R.setClearColor(Ot,Bt),pe!==void 0&&(G.viewport=pe),R.toneMapping=ce}function $l(T,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Et=T.length;W<Et;W++){let Ct=T[W],{object:wt,geometry:It,group:Ft}=Ct,ce=Ct.material;ce.allowOverride===!0&&G!==null&&(ce=G),wt.layers.test(Y.layers)&&Am(wt,U,Y,It,ce,Ft)}}function Am(T,U,Y,G,W,Et){N!==null&&W.isNodeMaterial&&N.setObject(T,W),T.onBeforeRender(R,U,Y,G,W,Et),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,U,Y,G,T,Et),W.transparent===!0&&W.side===en&&W.forceSinglePass===!1?(W.side=pn,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,T,Et),W.side=ti,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,T,Et),W.side=en):R.renderBufferDirect(Y,U,G,W,T,Et),T.onAfterRender(R,U,Y,G,W,Et)}function Kl(T,U,Y){U.isScene!==!0&&(U=Gt);let G=q.get(T),W=b.state.lights,Et=b.state.shadowsArray,Ct=W.state.version,wt=_t.getParameters(T,W.state,Et,U,Y,b.state.lightProbeGridArray),It=_t.getProgramCacheKey(wt),Ft=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let ce=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=ft.get(T.envMap||G.environment,ce),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ft===void 0&&(T.addEventListener("dispose",Ti),Ft=new Map,G.programs=Ft);let pe=Ft.get(It);if(pe!==void 0){if(G.currentProgram===pe&&G.lightsStateVersion===Ct)return Cm(T,wt),pe}else wt.uniforms=_t.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,Y,wt),T.onBeforeCompile(wt,R),pe=_t.acquireProgram(wt,It),Ft.set(It,pe),G.uniforms=wt.uniforms;let Pt=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=zt.uniform),Cm(T,wt),G.needsLights=lv(T),G.lightsStateVersion=Ct,G.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.sunLights.value=W.state.sun,Pt.sunLightShadows.value=W.state.sunShadow,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.sunShadowMatrix.value=W.state.sunShadowMatrix,Pt.sunShadowCascade.value=W.state.sunShadowCascade,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=pe,G.uniformsList=null,pe}function Rm(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Fo.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Cm(T,U){let Y=q.get(T);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function rv(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=T.length;Y<G;Y++){let W=T[Y];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function ov(T,U,Y,G,W){U.isScene!==!0&&(U=Gt),J.resetTextureUnits();let Et=U.fog,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,wt=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:oe.workingColorSpace,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ft=ft.get(G.envMap||Ct,It),ce=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pe=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!Y.morphAttributes.position,Re=!!Y.morphAttributes.normal,Qe=!!Y.morphAttributes.color,ke=xi;G.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ke=R.toneMapping);let De=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_n=De!==void 0?De.length:0,At=q.get(G),An=b.state.lights;if(ct===!0&&(ht===!0||T!==et)){let Oe=T===et&&G.id===Z;zt.setState(G,T,Oe)}let xe=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==An.state.version||At.outputColorSpace!==wt||W.isBatchedMesh&&At.batching===!1||!W.isBatchedMesh&&At.batching===!0||W.isBatchedMesh&&At.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&At.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&At.instancing===!1||!W.isInstancedMesh&&At.instancing===!0||W.isSkinnedMesh&&At.skinning===!1||!W.isSkinnedMesh&&At.skinning===!0||W.isInstancedMesh&&At.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&At.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&At.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&At.instancingMorph===!1&&W.morphTexture!==null||At.envMap!==Ft||G.fog===!0&&At.fog!==Et||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==zt.numPlanes||At.numIntersection!==zt.numIntersection)||At.vertexAlphas!==ce||At.vertexTangents!==pe||At.morphTargets!==Pt||At.morphNormals!==Re||At.morphColors!==Qe||At.toneMapping!==ke||At.morphTargetsCount!==_n||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,At.__version=G.version);let $n=At.currentProgram;xe===!0&&($n=Kl(G,U,W),N&&G.isNodeMaterial&&N.onUpdateProgram(G,$n,At));let Ai=!1,gs=!1,Or=!1,Pe=$n.getUniforms(),Ye=At.uniforms;if(M.useProgram($n.program)&&(Ai=!0,gs=!0,Or=!0),G.id!==Z&&(Z=G.id,gs=!0),At.needsLights){let Oe=rv(b.state.lightProbeGridArray,W);At.lightProbeGrid!==Oe&&(At.lightProbeGrid=Oe,gs=!0)}if(Ai||et!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Pe.setValue(F,"projectionMatrix",T.projectionMatrix),Pe.setValue(F,"viewMatrix",T.matrixWorldInverse);let _s=Pe.map.cameraPosition;_s!==void 0&&_s.setValue(F,gt.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&Pe.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pe.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),et!==T&&(et=T,gs=!0,Or=!0)}if(At.needsLights&&(An.state.sunShadowMap.length>0&&Pe.setValue(F,"sunShadowMap",An.state.sunShadowMap,J),An.state.directionalShadowMap.length>0&&Pe.setValue(F,"directionalShadowMap",An.state.directionalShadowMap,J),An.state.spotShadowMap.length>0&&Pe.setValue(F,"spotShadowMap",An.state.spotShadowMap,J),An.state.pointShadowMap.length>0&&Pe.setValue(F,"pointShadowMap",An.state.pointShadowMap,J)),W.isSkinnedMesh){Pe.setOptional(F,W,"bindMatrix"),Pe.setOptional(F,W,"bindMatrixInverse");let Oe=W.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),Pe.setValue(F,"boneTexture",Oe.boneTexture,J))}W.isBatchedMesh&&(Pe.setOptional(F,W,"batchingTexture"),Pe.setValue(F,"batchingTexture",W._matricesTexture,J),Pe.setOptional(F,W,"batchingIdTexture"),Pe.setValue(F,"batchingIdTexture",W._indirectTexture,J),Pe.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&Pe.setValue(F,"batchingColorTexture",W._colorsTexture,J));let xs=Y.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&O.update(W,Y,$n),(gs||At.receiveShadow!==W.receiveShadow)&&(At.receiveShadow=W.receiveShadow,Pe.setValue(F,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ye.envMapIntensity.value=U.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=CE()),gs){if(Pe.setValue(F,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&av(Ye,Or),Et&&G.fog===!0&&kt.refreshFogUniforms(Ye,Et),kt.refreshMaterialUniforms(Ye,G,tt,K,b.state.transmissionRenderTarget[T.id]),At.needsLights&&At.lightProbeGrid){let Oe=At.lightProbeGrid;Ye.probesSH.value=Oe.texture,Ye.probesMin.value.copy(Oe.boundingBox.min),Ye.probesMax.value.copy(Oe.boundingBox.max),Ye.probesResolution.value.copy(Oe.resolution)}Fo.upload(F,Rm(At),Ye,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fo.upload(F,Rm(At),Ye,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pe.setValue(F,"center",W.center),Pe.setValue(F,"modelViewMatrix",W.modelViewMatrix),Pe.setValue(F,"normalMatrix",W.normalMatrix),Pe.setValue(F,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Oe=G.uniformsGroups;for(let _s=0,Br=Oe.length;_s<Br;_s++){let Pm=Oe[_s];at.update(Pm,$n),at.bind(Pm,$n)}}return $n}function av(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function lv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(T,U,Y){let G=q.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=U,q.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let Y=q.get(T);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,Y=0){rt=T,X=U,$=Y;let G=null,W=!1,Et=!1;if(T){let wt=q.get(T);if(wt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(F.FRAMEBUFFER,wt.__webglFramebuffer),z.copy(T.viewport),ot.copy(T.scissor),lt=T.scissorTest,M.viewport(z),M.scissor(ot),M.setScissorTest(lt),Z=-1;return}else if(wt.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(wt.__hasExternalTextures)J.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let ce=T.depthTexture;if(wt.__boundDepthTexture!==ce){if(ce!==null&&q.has(ce)&&(T.width!==ce.image.width||T.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}let It=T.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let Ft=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?G=Ft[U][Y]:G=Ft[U],W=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?G=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Ft)?G=Ft[Y]:G=Ft,z.copy(T.viewport),ot.copy(T.scissor),lt=T.scissorTest}else z.copy(xt).multiplyScalar(tt).floor(),ot.copy(qt).multiplyScalar(tt).floor(),lt=ye;if(Y!==0&&(G=k),M.bindFramebuffer(F.FRAMEBUFFER,G)&&M.drawBuffers(T,G),M.viewport(z),M.scissor(ot),M.setScissorTest(lt),W){let wt=q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,Y)}else if(Et){let wt=U;for(let It=0;It<T.textures.length;It++){let Ft=q.get(T.textures[It]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+It,Ft.__webglTexture,Y,wt)}}else if(T!==null&&Y!==0){let wt=q.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wt.__webglTexture,Y)}Z=-1};function Im(T){let U=q.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=C.textureFormatReadable(T.format),U.__typeReadable=C.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,Y,G,W,Et,Ct,wt=0){if(!(T&&T.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){M.bindFramebuffer(F.FRAMEBUFFER,It);try{let Ft=T.textures[wt],ce=Ft.format,pe=Ft.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+wt);let Pt=Im(Ft);if(Pt.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&Y>=0&&Y<=T.height-W&&F.readPixels(U,Y,G,W,bt.convert(ce),bt.convert(pe),Et)}finally{let Ft=rt!==null?q.get(rt).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(T,U,Y,G,W,Et,Ct,wt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(U>=0&&U<=T.width-G&&Y>=0&&Y<=T.height-W){M.bindFramebuffer(F.FRAMEBUFFER,It);let Ft=T.textures[wt],ce=Ft.format,pe=Ft.type;T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+wt);let Pt=Im(Ft);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Re=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.bufferData(F.PIXEL_PACK_BUFFER,Et.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,W,bt.convert(ce),bt.convert(pe),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Qe=rt!==null?q.get(rt).__webglFramebuffer:null;M.bindFramebuffer(F.FRAMEBUFFER,Qe);let ke=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ag(F,ke,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Re),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Et),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(Re),F.deleteSync(ke),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(T.image.width*G),Et=Math.floor(T.image.height*G),Ct=U!==null?U.x:0,wt=U!==null?U.y:0;J.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,Ct,wt,W,Et),M.unbindTexture()},this.copyTextureToTexture=function(T,U,Y=null,G=null,W=0,Et=0){let Ct,wt,It,Ft,ce,pe,Pt,Re,Qe,ke=T.isCompressedTexture?T.mipmaps[Et]:T.image;if(Y!==null)Ct=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Ft=Y.min.x,ce=Y.min.y,pe=Y.isBox3?Y.min.z:0;else{let Ye=Math.pow(2,-W);Ct=Math.floor(ke.width*Ye),wt=Math.floor(ke.height*Ye),T.isDataArrayTexture?It=ke.depth:T.isData3DTexture?It=Math.floor(ke.depth*Ye):It=1,Ft=0,ce=0,pe=0}G!==null?(Pt=G.x,Re=G.y,Qe=G.z):(Pt=0,Re=0,Qe=0);let De=bt.convert(U.format),_n=bt.convert(U.type),At;U.isData3DTexture?(J.setTexture3D(U,0),At=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),At=F.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),At=F.TEXTURE_2D),M.activeTexture(F.TEXTURE0),M.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let An=M.getParameter(F.UNPACK_ROW_LENGTH),xe=M.getParameter(F.UNPACK_IMAGE_HEIGHT),$n=M.getParameter(F.UNPACK_SKIP_PIXELS),Ai=M.getParameter(F.UNPACK_SKIP_ROWS),gs=M.getParameter(F.UNPACK_SKIP_IMAGES);M.pixelStorei(F.UNPACK_ROW_LENGTH,ke.width),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ke.height),M.pixelStorei(F.UNPACK_SKIP_PIXELS,Ft),M.pixelStorei(F.UNPACK_SKIP_ROWS,ce),M.pixelStorei(F.UNPACK_SKIP_IMAGES,pe);let Or=T.isDataArrayTexture||T.isData3DTexture,Pe=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Ye=q.get(T),xs=q.get(U),Oe=q.get(Ye.__renderTarget),_s=q.get(xs.__renderTarget);M.bindFramebuffer(F.READ_FRAMEBUFFER,Oe.__webglFramebuffer),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,_s.__webglFramebuffer);for(let Br=0;Br<It;Br++)Or&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(T).__webglTexture,W,pe+Br),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(U).__webglTexture,Et,Qe+Br)),F.blitFramebuffer(Ft,ce,Ct,wt,Pt,Re,Ct,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||q.has(T)){let Ye=q.get(T),xs=q.get(U);M.bindFramebuffer(F.READ_FRAMEBUFFER,D),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Oe=0;Oe<It;Oe++)Or?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ye.__webglTexture,W,pe+Oe):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ye.__webglTexture,W),Pe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xs.__webglTexture,Et,Qe+Oe):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xs.__webglTexture,Et),W!==0?F.blitFramebuffer(Ft,ce,Ct,wt,Pt,Re,Ct,wt,F.COLOR_BUFFER_BIT,F.NEAREST):Pe?F.copyTexSubImage3D(At,Et,Pt,Re,Qe+Oe,Ft,ce,Ct,wt):F.copyTexSubImage2D(At,Et,Pt,Re,Ft,ce,Ct,wt);M.bindFramebuffer(F.READ_FRAMEBUFFER,null),M.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Pe?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(At,Et,Pt,Re,Qe,Ct,wt,It,De,_n,ke.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(At,Et,Pt,Re,Qe,Ct,wt,It,De,ke.data):F.texSubImage3D(At,Et,Pt,Re,Qe,Ct,wt,It,De,_n,ke):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Et,Pt,Re,Ct,wt,De,_n,ke.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Et,Pt,Re,ke.width,ke.height,De,ke.data):F.texSubImage2D(F.TEXTURE_2D,Et,Pt,Re,Ct,wt,De,_n,ke);M.pixelStorei(F.UNPACK_ROW_LENGTH,An),M.pixelStorei(F.UNPACK_IMAGE_HEIGHT,xe),M.pixelStorei(F.UNPACK_SKIP_PIXELS,$n),M.pixelStorei(F.UNPACK_SKIP_ROWS,Ai),M.pixelStorei(F.UNPACK_SKIP_IMAGES,gs),Et===0&&U.generateMipmaps&&F.generateMipmap(At),M.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){X=0,$=0,rt=null,M.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var nu=class extends be{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Q(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},Bo=new I,qg=new Kt,Xg=new Kt,Yg=new I,$g=new I,iu=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),qg.copy(x.matrixWorldInverse),Xg.multiplyMatrices(x.projectionMatrix,qg),h(p,p,x),this.sortObjects&&d(p)},this.setSize=function(p,x){n=p,s=x,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=x+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,m=p.children.length;x<m;x++)c(p.children[x])}function h(p,x,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){Bo.setFromMatrixPosition(p.matrixWorld),Bo.applyMatrix4(Xg);let g=Bo.z>=-1&&Bo.z<=1&&p.layers.test(m.layers)===!0,_=p.element;if(_.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(e,x,m);let v=100*p.center.x,S=100*p.center.y;_.style.transformOrigin=`${v}% ${S}%`;let b=-p.rotation2D,A=Bo.x*r+r,y=-Bo.y*o+o;_.style.transform=`translate(${-v}%, ${-S}%) translate(${A}px, ${y}px) rotate(${b}rad)`,_.parentNode!==l&&l.appendChild(_),p.onAfterRender(e,x,m)}let w={distanceToCameraSquared:u(m,p)};a.objects.set(p,w)}for(let g=0,_=p.children.length;g<_;g++)h(p.children[g],x,m)}function u(p,x){return Yg.setFromMatrixPosition(p.matrixWorld),$g.setFromMatrixPosition(x.matrixWorld),Yg.distanceToSquared($g)}function f(p){let x=[];return p.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function d(p){let x=f(p).sort(function(g,_){if(g.renderOrder!==_.renderOrder)return _.renderOrder-g.renderOrder;let w=a.objects.get(g).distanceToCameraSquared,v=a.objects.get(_).distanceToCameraSquared;return w-v}),m=x.length;for(let g=0,_=x.length;g<_;g++)x[g].element.style.zIndex=m-g}}};function Ld(i,t){if(t===id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Io||t===vl){let e=i.getIndex();if(e===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===Io)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}function Kg(i){let t=new Map,e=new Map,n=i.clone();return Zg(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Zg(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Zg(i.children[n],t.children[n],e)}var zo=class extends Fi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new kd(e)}),this.register(function(e){return new zd(e)}),this.register(function(e){return new Kd(e)}),this.register(function(e){return new Zd(e)}),this.register(function(e){return new Jd(e)}),this.register(function(e){return new Vd(e)}),this.register(function(e){return new Gd(e)}),this.register(function(e){return new Wd(e)}),this.register(function(e){return new qd(e)}),this.register(function(e){return new Bd(e)}),this.register(function(e){return new Xd(e)}),this.register(function(e){return new Hd(e)}),this.register(function(e){return new $d(e)}),this.register(function(e){return new Yd(e)}),this.register(function(e){return new Ud(e)}),this.register(function(e){return new su(e,fe.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new su(e,fe.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new jd(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=rs.extractUrlBase(t);o=rs.resolveURL(c,this.path)}else o=rs.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new So(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===ex){try{o[fe.KHR_BINARY_GLTF]=new Qd(t)}catch(u){s&&s(u);return}r=JSON.parse(o[fe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new op(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case fe.KHR_MATERIALS_UNLIT:o[u]=new Od;break;case fe.KHR_DRACO_MESH_COMPRESSION:o[u]=new tp(r,this.dracoLoader);break;case fe.KHR_TEXTURE_TRANSFORM:o[u]=new ep;break;case fe.KHR_MESH_QUANTIZATION:o[u]=new np;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function IE(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function Je(i,t,e){let n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ud=class{constructor(t){this.parser=t,this.name=fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,h=new dt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],dn);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Is(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new mr(h),c.distance=u;break;case"spot":c=new pr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}},Od=class{constructor(){this.name=fe.KHR_MATERIALS_UNLIT}getMaterialType(){return Se}extendParams(t,e,n){let s=[];t.color=new dt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],dn),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,ae))}return Promise.all(s)}},Bd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},kd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Q(r,r)}return Promise.all(s)}},zd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Hd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Vd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SHEEN}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(e.sheenColor=new dt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],dn)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,ae)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Gd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Wd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_VOLUME}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return e.attenuationColor=new dt().setRGB(r[0],r[1],r[2],dn),Promise.all(s)}},qd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_IOR}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},Xd=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return e.specularColor=new dt().setRGB(r[0],r[1],r[2],dn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,ae)),Promise.all(s)}},Yd=class{constructor(t){this.parser=t,this.name=fe.EXT_MATERIALS_BUMP}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}},$d=class{constructor(t){this.parser=t,this.name=fe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Je(this.parser,t,this.name)!==null?Ze:null}extendMaterialParams(t,e){let n=Je(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Kd=class{constructor(t){this.parser=t,this.name=fe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Zd=class{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}},Jd=class{constructor(t){this.parser=t,this.name=fe.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}},su=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},jd=class{constructor(t){this.name=fe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new Kt,m=new I,g=new bn,_=new I(1,1,1),w=new lr(p.geometry,p.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,S),l.SCALE&&_.fromBufferAttribute(l.SCALE,S),w.setMatrixAt(S,x.compose(m,g,_));let v=null;for(let S in l)if(S==="_COLOR_0"){let b=l[S];w.instanceColor=new ts(b.array,b.itemSize,b.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let A=w.geometry;v=new Me,v.name=A.name;for(let y in A.attributes)v.setAttribute(y,A.attributes[y]);for(let y in A.morphAttributes)v.morphAttributes[y]=A.morphAttributes[y];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let y of A.groups)v.addGroup(y.start,y.count,y.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),w.geometry=v}let b=l[S];v.setAttribute(S,new ts(b.array,b.itemSize,b.normalized))}be.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},ex="glTF",El=12,Jg={JSON:1313821514,BIN:5130562},Qd=class{constructor(t){this.name=fe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,El),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==ex)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-El,r=new DataView(t,El),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===Jg.JSON){let c=new Uint8Array(t,El+o,a);this.content=n.decode(c)}else if(l===Jg.BIN){let c=El+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tp=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=fe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=sp[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=sp[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=ko[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,dn,f)})})}},ep=class{constructor(){this.name=fe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),s=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*s,t.offset.x,-t.repeat.x*s,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},np=class{constructor(){this.name=fe.KHR_MESH_QUANTIZATION}},ru=class extends Di{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,f=u*u,d=f*u,p=t*c,x=p-c,m=-2*d+3*f,g=d-f,_=1-m,w=g-f+u;for(let v=0;v!==a;v++){let S=o[x+v+a],b=o[x+v+l]*h,A=o[p+v+a],y=o[p+v]*h;r[v]=_*S+w*b+m*A+g*y}return r}},PE=new bn,ip=class extends ru{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return PE.fromArray(r).normalize().toArray(r),r}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ko={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jg={9728:$e,9729:He,9984:hh,9985:Ao,9986:vr,9987:Vn},Qg={33071:Zn,33648:ro,10497:jn},Nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ds={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},LE={CUBICSPLINE:void 0,LINEAR:sr,STEP:ir},Dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NE(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ie({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ti})),i.DefaultMaterial}function Sr(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Bi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function DE(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function FE(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function UE(i){let t,e=i.extensions&&i.extensions[fe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Fd(e.attributes):t=i.indices+":"+Fd(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Fd(i.targets[n]);return t}function Fd(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function rp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var BE=new Kt,op=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new IE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new fr(this.options.manager):this.textureLoader=new nl(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new So(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Sr(r,a,s),Bi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[fe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(rs.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=Nd[s.type],a=ko[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new ze(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Nd[s.type],c=ko[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,w=e.cache.get(_);w||(x=new c(a,g*d,s.count*d/h),w=new ar(x,d/h),e.cache.add(_,w)),m=new Es(w,l,f%d/h,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new ze(x,l,p);if(s.sparse!==void 0){let g=Nd.SCALAR,_=ko[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,S=new _(o[1],w,s.sparse.count*g),b=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new ze(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,y=S.length;A<y;A++){let E=S[A];if(m.setX(E,b[A*l]),l>=2&&m.setY(E,b[A*l+1]),l>=3&&m.setZ(E,b[A*l+2]),l>=4&&m.setW(E,b[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=jg[f.magFilter]||He,h.minFilter=jg[f.minFilter]||Vn,h.wrapS=Qg[f.wrapS]||jn,h.wrapT=Qg[f.wrapT]||jn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$e&&h.minFilter!==He,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;e.isImageBitmapLoader===!0&&(p=function(x){let m=new sn(x);m.needsUpdate=!0,f(m)}),e.load(rs.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Bi(u,o),u.userData.mimeType=o.mimeType||OE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[fe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[fe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[fe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new _o,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new xo,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Ie}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},l=r.extensions||{},c=[];if(l[fe.KHR_MATERIALS_UNLIT]){let u=s[fe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new dt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],dn),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,ae)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=en);let h=r.alphaMode||Dd.OPAQUE;if(h===Dd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Dd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Se&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Q(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Se&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Se){let u=r.emissiveFactor;a.emissive=new dt().setRGB(u[0],u[1],u[2],dn)}return r.emissiveTexture!==void 0&&o!==Se&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,ae)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Bi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Sr(s,u,r),u})}createUniqueName(t){let e=Fe.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return tx(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=UE(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[fe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=tx(new Me,c,e),c.mode===ni.TRIANGLE_STRIP?f=f.then(d=>Ld(d,vl)):c.mode===ni.TRIANGLE_FAN&&(f=f.then(d=>Ld(d,Io))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?NE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,_=c[d];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");w&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&v?new Pa(x,_):new Rt(x,_),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===ni.LINES)g=new Na(x,_);else if(m.mode===ni.LINE_STRIP)g=new cr(x,_);else if(m.mode===ni.LINE_LOOP)g=new Da(x,_);else if(m.mode===ni.POINTS)g=new Fa(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&FE(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),Bi(g,r),m.extensions&&Sr(s,g,m),e.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Sr(s,u[0],r),u[0];let f=new se;r.extensions&&Sr(s,f,r),e.associations.set(f,{meshes:t});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new hn(Po.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Qn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Bi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Kt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new La(a,l)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,_=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",_)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let w=0,v=f.length;w<v;w++){let S=f[w],b=d[w],A=p[w],y=x[w],E=m[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,b,A,y,E);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let _=new Qa(r,void 0,g);return Bi(_,s),_})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,BE)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new I().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new po:c.length>1?h=new se:c.length===1?h=c[0]:h=new be,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Bi(h,r),r.extensions&&Sr(n,h,r),r.matrix!==void 0){let u=new Kt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new se;n.name&&(r.name=s.createUniqueName(n.name)),Bi(r,n),n.extensions&&Sr(e,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(Kg(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof Mn||f instanceof sn)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Ds[r.path]===Ds.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(Ds[r.path]){case Ds.weights:h=ns;break;case Ds.rotation:h=is;break;case Ds.translation:case Ds.scale:h=Cs;break;default:switch(n.itemSize){case 1:h=ns;break;case 2:case 3:default:h=Cs;break}break}let u=s.interpolation!==void 0?LE[s.interpolation]:sr,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+"."+Ds[r.path],e.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=rp(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof is?ip:ru;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function kE(i,t,e){let n=t.attributes,s=new Ke;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let h=rp(ko[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=rp(ko[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function tx(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=sp[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return oe.workingColorSpace!==dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${oe.workingColorSpace}" not supported.`),Bi(i,t),kE(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?DE(i,t.targets,e):i})}var ou=class extends or{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ve;t.deleteAttribute("uv");let e=new Ie({side:pn}),n=new Ie,s=new mr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Rt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new lr(t,n,6),a=new be;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Rt(t,Ho(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Rt(t,Ho(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Rt(t,Ho(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Rt(t,Ho(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Rt(t,Ho(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Rt(t,Ho(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ho(i){return new Ja({color:0,emissive:16777215,emissiveIntensity:i})}var Tl=new I;function ii(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Tl.copy(t),Tl[n]=0,Tl.normalize();let c=.5*o/(o+a),h=1-Tl.angleTo(i)/l;return Math.sign(Tl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var au=class i extends Ve{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new I,m=.5/o;for(let g=0,_=0;g<u.length;g+=3,_+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),d[_+0]=ii(x,c,"z","y",r,n),d[_+1]=1-ii(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[_+0]=1-ii(x,c,"z","y",r,n),d[_+1]=1-ii(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[_+0]=1-ii(x,c,"x","z",r,t),d[_+1]=ii(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[_+0]=1-ii(x,c,"x","z",r,t),d[_+1]=1-ii(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[_+0]=1-ii(x,c,"x","y",r,t),d[_+1]=1-ii(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[_+0]=ii(x,c,"x","y",r,t),d[_+1]=1-ii(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var lu=["#9CAA93","#86A4A1","#8E9DB1","#A49EB9","#BB9CA6","#C79F89","#CDB27F"],nx=["sofa","media","library","meeting"],ix=[.85,1.25],ap="26,30,42",zE=.3,lx=[240,235,227],le={x0:3.03,x1:8,z0:-.12,z1:4.7},HE=[[4.13,-.3],[4.13,3.9]],si=128,wr=64,sx=.012,cx=["sofa","armchair_1","armchair_2","coffee_table"],VE={oak:"#D9C39F",black:"#1C1C1E",graphite:"#3A3A3C",fabric_warm:"#C9C5BE",fabric_light:"#E2DFDA",pot_white:"#F1EFEB",bar_white:"#EBE9E4"},lp=["#ECE6DA","#D3CABA","#ABA294","#6B6762","#36363A","#BCA680"],GE=new dt(1,1,1),WE=new dt("#F2EEE6"),cp=new dt().setRGB(210/255,210/255,210/255,ae).r,hx=new Map,ux=.4;function fx(i){let t=new Set,e=new Map;return i.forEach((n,s)=>{let r=qE(n.id)%lu.length;if(i.length<=lu.length)for(;t.has(r);)r=(r+1)%lu.length;t.add(r),e.set(n.id,{accent:lu[r],layout:nx[s%nx.length]})}),e}function qE(i){let t=2166136261;for(let e of String(i))t^=e.codePointAt(0),t=Math.imul(t,16777619);return t>>>0}var Vo=new WeakMap;function dx(i){let t={layouts:new Map,glb:[],mats:[]};return i.traverse(e=>{let n=/^style_(sofa|media|library|meeting)$/.exec(e.name);if(n&&t.layouts.set(n[1],e),cx.includes(e.name)&&t.glb.push(e),e.isMesh)for(let s of[].concat(e.material))s.userData.accent&&!t.mats.includes(s)&&t.mats.push(s)}),t}function px(i,t){Vo.has(i)||Vo.set(i,dx(i));let e=Vo.get(i);for(let[s,r]of e.layouts)r.visible=s===t.layout;for(let s of e.glb)s.visible=t.layout==="sofa";let n=new dt(t.accent);for(let s of e.mats)XE(s,s.userData.accent,n)}function mx(i){Vo.has(i)||Vo.set(i,dx(i));let t=Vo.get(i);return[...t.layouts.values(),...t.glb]}function XE(i,t,e){let n=/^rug/.test(t)?e.clone().lerp(WE,.28):e;switch(t){case"rugtint":i.color.setRGB(Math.min(1,n.r/cp),Math.min(1,n.g/cp),Math.min(1,n.b/cp));break;case"fabric":i.color.copy(n).multiplyScalar(.86);break;case"panelDark":i.color.copy(n).multiplyScalar(.6);break;case"book":i.color.copy(n).multiplyScalar(.78);break;case"rugEdge":i.color.copy(n).multiplyScalar(.74);break;case"screen":i.color.copy(n).lerp(GE,.2).multiplyScalar(.92);break;case"rug":(i.accentUniform?i.accentUniform.value:i.color).copy(n);break;default:i.color.copy(n)}}function gx(i,t){if(cx.some(s=>!i.getObjectByName(s))||t.slice(0,5).some(s=>!s))return null;let e=new fp(i);QE(e,i),tT(e,i),YE(e,i);let n={sofa:t.slice(0,5).map(s=>({pos:s.pos.clone(),yaw:s.yaw}))};return n.media=hp(e,i,"media",$E),n.library=hp(e,i,"library",KE),n.meeting=hp(e,i,"meeting",ZE),{layouts:n}}var fp=class{constructor(t){this.open=t,this.found=new Map,t.traverse(e=>{if(e.isMesh)for(let n of[].concat(e.material))n.name&&!this.found.has(n.name)&&this.found.set(n.name,n)}),this.made=new Map}mat(t){return this.found.has(t)?this.found.get(t):(this.made.has(t)||this.made.set(t,new Ie({name:t,color:VE[t]||"#CCCCCC",roughness:.7})),this.made.get(t))}accent(t,e="fabric_light",n={}){let s=`accent_${t}`;if(!this.made.has(s)){let r=this.mat(e).clone();r.name=s,r.userData={accent:t},Object.assign(r,n),this.made.set(s,r)}return this.made.get(s)}plain(t,e,n=.75){return this.made.has(t)||this.made.set(t,new Ie({name:t,color:e,roughness:n})),this.made.get(t)}add(t,e,n,s,r,o,a=0,l=0,c=0){let h=new Rt(e,n);return h.position.set(s,r,o),h.rotation.set(l,a,c,"YXZ"),t.add(h),h}rbox(t,e,n,s){return new au(t,e,n,2,Math.min(s,t/2-1e-4,e/2-1e-4,n/2-1e-4))}group(t,e,n,s=0){let r=new se;return r.position.set(e,0,n),r.rotation.y=s,t.add(r),r}};function hp(i,t,e,n){let s=new se,r=HE.map(([u,f])=>({pts:Rx([...hu(u,f,.15,14),[u+.34,f+.36]]),flat:!0})),o={shadows:r,rug:null},a=n(i,s,o),l=oT(r);hx.set(e,{layers:l,rug:o.rug});let c=new Rt(new qe(le.x1-le.x0,le.z1-le.z0).rotateX(-Math.PI/2),new Se({map:bx(l),name:`style_patch_${e}`}));c.position.set((le.x0+le.x1)/2,.002,(le.z0+le.z1)/2),c.userData.bakedName=`style_patch_${e}`,s.add(c),o.rug&&eT(i,s,o.rug,l,e);let h=Ax(s,`style_${e}`);return h.visible=!1,t.add(h),a.map(([u,f,d,p])=>({pos:new I(u,f,d),yaw:p}))}function YE(i,t){let e=new se;e.name="style_sofa";let s=t.getObjectByName("sofa").position,r=i.rbox(.42,.4,.14,.065);for(let l of[-1,1])i.add(e,r,i.accent("fabric"),s.x+l*1.16,.655,s.z-.16,-l*.22,-.3);let o=new Se({name:"accent_rugtint",color:16777215,blending:ol,premultipliedAlpha:!0,transparent:!0,depthWrite:!1});o.userData={accent:"rugtint"};let a=i.add(e,new ka(2.205,128).rotateX(-Math.PI/2),o,5.3,.0015,2.3);a.userData.keep=!0,a.renderOrder=-1,t.add(e)}function $E(i,t,e){let n=i.mat("bar_white"),s=i.mat("oak"),r=i.mat("black"),o=3.44,a=2.45,l=2.7,c=.44,h=.46;i.add(t,i.rbox(c-.08,.05,l-.12,.01),r,o,.025,a),i.add(t,i.rbox(c,h-.08,l,.012),n,o,.05+(h-.08)/2,a),i.add(t,i.rbox(c+.02,.03,l+.02,.008),s,o,h-.015,a);for(let g of[-l/6,l/6])i.add(t,new Ve(.004,h-.12,.006),r,o+c/2+.001,.05+(h-.08)/2,a+g);e.shadows.push({pts:Dn(o,a,c,l),y0:0,y1:h,core:.75});let u=2,f=1.125,d=h+.17+f/2,p=o-.02;i.add(t,i.rbox(.22,.012,.44,.006),r,p,h+.006,a),i.add(t,i.rbox(.035,.2,.12,.01),r,p-.02,h+.1,a),i.add(t,i.rbox(.032,f+.036,u+.036,.01),r,p,d,a);let x=new Se({name:"accent_screen",map:aT(),toneMapped:!1});x.userData={accent:"screen"},i.add(t,new qe(u,f).rotateY(Math.PI/2),x,p+.0165,d,a),e.shadows.push({pts:Dn(p,a,.032,u+.036),y0:d-f/2-.02,y1:d+f/2+.02});let m=[];for(let g of[1.75,3.3]){let w=Math.atan2(o-5.1,a-g);_x(i,t,e,5.1,g,w),m.push(xx(5.1,g,w,.48,.05))}return yx(i,t,e,6,.5,2.5,0),e.rug={kind:"rect",x0:3.9,z0:.1,x1:7.65,z1:4.25,r:.08},[[5.15,.46,.5,0],[6,.46,.5,0],[6.85,.46,.5,0],...m]}function KE(i,t,e){let n=Cx(11);rx(i,t,e,(3.12+7.35)/2,.27,7.35-3.12,0,n),rx(i,t,e,3.3,(.45+3.75)/2,3.75-.45,Math.PI/2,n),yx(i,t,e,3.97,2.15,2.45,Math.PI/2);let s=6.7,r=2.85,o=-.69;_x(i,t,e,s,r,o),JE(i,t,e,7.38,2.12),jE(i,t,e,5.75,3.72);let a=i.open.getObjectByName("tree_3").clone(!0);a.position.set(6.85,.78,.27),a.scale.setScalar(.24),t.add(a);let l=new bo([[0,0],[.045,0],[.06,.05],[.058,.12],[.03,.2],[.028,.23],[0,.23]].map(([c,h])=>new Q(c,h)),28);return i.add(t,l,i.mat("pot_white"),4.15,.78,.25),e.rug={kind:"round",cx:5.7,cz:2.4,r:1.72},[[3.97,.46,1.3,Math.PI/2],[3.97,.46,2.15,Math.PI/2],[3.97,.46,3,Math.PI/2],xx(s,r,o,.48,.05),[5.75,.41,3.72,.3]]}function ZE(i,t,e){let n=i.mat("oak"),s=i.mat("black"),r=5.55,o=2.05,a=2.4,l=1.1,c=.74,h=new $a(dp(a,l,l/2),{depth:.024,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:16});h.rotateX(Math.PI/2),i.add(t,h,n,r,c-.006,o);for(let f of[-1,1])i.add(t,new Cn(.04,.04,c-.05,20),s,r+f*.62,(c-.05)/2+.012,o),i.add(t,i.rbox(.09,.024,.74,.01),s,r+f*.62,.012,o),e.shadows.push({pts:Dn(r+f*.62,o,.08,.08),y0:0,y1:c-.04},{pts:Dn(r+f*.62,o,.09,.74),core:.55,blur:.02});e.shadows.push({pts:dp(a,l,l/2).getPoints(12).map(f=>[r+f.x,o-f.y]),y0:c-.036,y1:c});let u=[];for(let f of[r-.8,r,r+.8])cu(i,t,e,f,o-l/2-.47,0),u.push([f,.47,o-l/2-.47,0]);cu(i,t,e,r-a/2-.5,o,Math.PI/2),u.push([r-a/2-.5,.47,o,Math.PI/2]),cu(i,t,e,r+a/2+.5,o,-Math.PI/2),u.push([r+a/2+.5,.47,o,-Math.PI/2]);for(let f of[r-.42,r+.42])cu(i,t,e,f,o+l/2+.3,Math.PI);return e.rug={kind:"rect",x0:3.35,z0:.42,x1:7.75,z1:3.68,r:.08},u}function xx(i,t,e,n,s){return[i+Math.sin(e)*s,n,t+Math.cos(e)*s,e]}function _x(i,t,e,n,s,r){let o=i.open.getObjectByName("armchair_1").clone(!0);o.position.set(n,0,s),o.rotation.set(0,r,0),t.add(o),e.shadows.push({pts:Dn(n,s,.95,.9,r),y0:0,y1:.37,core:.88,blur:.04},{pts:Dn(...Er(n,s,0,-.38,r),.95,.16,r),y0:0,y1:.85},...[-.5,.5].map(a=>({pts:Dn(...Er(n,s,a,0,r),.1,.8,r),y0:0,y1:.62})))}function yx(i,t,e,n,s,r,o){let a=i.group(t,n,s,o),l=.46;i.add(a,i.rbox(r,.035,l,.012),i.mat("oak"),0,.322,0),i.add(a,i.rbox(r-.03,.115,l-.03,.05),i.mat("fabric_warm"),0,.395,0);let c=new Cn(.016,.014,.305,12);for(let h of[-1,1])for(let u of[-1,1]){let f=h*(r/2-.09),d=u*(l/2-.07);i.add(a,c,i.mat("black"),f,.1525,d);let[p,x]=Er(n,s,f,d,o);e.shadows.push({pts:Dn(p,x,.03,.03),y0:0,y1:.3,core:.5,blur:.015})}e.shadows.push({pts:Dn(n,s,r,l,o),y0:.305,y1:.452,core:.22,blur:.1})}function cu(i,t,e,n,s,r){let o=i.group(t,n,s,r),a=i.mat("graphite"),l=i.mat("black");i.add(o,i.rbox(.48,.07,.46,.03),a,0,.43,.01),i.add(o,i.rbox(.46,.33,.05,.022),a,0,.73,-.215,0,-.1);let c=new Cn(.011,.011,.395,10);for(let u of[-1,1])for(let f of[-1,1])i.add(o,c,l,u*.2,.1975,f*.18),e.shadows.push({pts:Dn(...Er(n,s,u*.2,f*.18,r),.024,.024),y0:0,y1:.395,core:.45,blur:.012});let h=new Cn(.009,.009,.16,8);for(let u of[-1,1])i.add(o,h,l,u*.18,.54,-.205);e.shadows.push({pts:Dn(...Er(n,s,0,.01,r),.48,.46,r),y0:.395,y1:.465,core:.16,blur:.08},{pts:Dn(...Er(n,s,0,-.215,r),.46,.05,r),y0:.565,y1:.895})}function rx(i,t,e,n,s,r,o,a){let l=i.group(t,n,s,o),c=.36,h=.78,u=.022,f=i.mat("bar_white");i.add(l,i.rbox(r-.05,.05,c-.06,.008),i.mat("black"),0,.025,-.015),i.add(l,i.rbox(r,u,c,.004),f,0,.05+u/2,0),i.add(l,i.rbox(r+.012,.03,c+.012,.008),i.mat("oak"),0,h-.015,0),i.add(l,i.rbox(r,h-.08,.012,.003),f,0,.05+(h-.08)/2,-c/2+.006);let d=Math.max(1,Math.round(r/.82)),p=r/d;for(let m=0;m<=d;m++)i.add(l,i.rbox(u,h-.08,c,.004),f,-r/2+u/2+m*(r-u)/d,.05+(h-.08)/2,0);let x=.05+u+(h-.08-u)/2;i.add(l,i.rbox(r-u,u,c-.015,.004),f,0,x,.0075);for(let m=0;m<d;m++){let g=-r/2+m*p+u,_=g+p-u;ox(i,l,g,_,.05+u,x-u/2-(.05+u),c,a),ox(i,l,g,_,x+u/2,h-.03-(x+u/2),c,a)}e.shadows.push({pts:Dn(n,s,r,c,o),y0:0,y1:h,core:.72,blur:.03})}function ox(i,t,e,n,s,r,o,a){let l=()=>a()<.12?i.accent("book","fabric_light",{roughness:.75}):i.plain(`book_${Math.floor(a()*lp.length)}`,lp[Math.floor(a()*lp.length)]),c=-o/2+.016;if(a()<.16){let f=s;for(let d=0,p=2+Math.floor(a()*3);d<p;d++){let x=.028+a()*.014,m=.2+a()*.05,g=.16+a()*.05;i.add(t,new Ve(m,x,g),l(),e+.04+m/2+(a()-.5)*.02,f+x/2,c+g/2,(a()-.5)*.12),f+=x}return}let h=n-.008-(a()<.55?.1+a()*.3:0),u=e+.006+a()*.05;for(;;){let f=.02+a()*.024,d=Math.min(r-.03,.19+a()*.11),p=.16+a()*.07;if(u+f>h)break;i.add(t,new Ve(f,d,p),l(),u+f/2,s+d/2,c+p/2),u+=f+(a()<.12?.006:.0015)}}function JE(i,t,e,n,s){let r=i.mat("black");i.add(t,new Cn(.15,.16,.018,32),r,n,.009,s),i.add(t,new Cn(.011,.011,1.3,10),r,n,.018+.65,s),i.add(t,new Cn(.16,.19,.26,40),i.mat("fabric_light"),n,1.43,s),e.shadows.push({pts:hu(n,s,.16,16),y0:0,y1:.02,core:.5,blur:.02},{pts:Dn(n,s,.024,.024),y0:0,y1:1.3},{pts:hu(n,s,.19,16),y0:1.3,y1:1.56})}function jE(i,t,e,n,s){let r=[[0,0],[.27,0],[.295,.02],[.31,.12],[.31,.3],[.295,.375],[.26,.405],[0,.41]];i.add(t,new bo(r.map(([o,a])=>new Q(o,a)),40),i.accent("fabric"),n,0,s),e.shadows.push({pts:hu(n,s,.31,20),y0:0,y1:.41,core:.82,blur:.04})}function QE(i,t){let e=new se,n=1.26,s=2.05,r=3.35,o=1.33,a=-8,l=12,c=.062;i.add(e,i.rbox(.018,s,n,.006),i.accent("panelDark"),a+.009,o,r);let h=(n-.04-l*c)/(l-1),u=i.rbox(.026,s-.04,c,.008);for(let d=0;d<l;d++)i.add(e,u,i.accent("panel","fabric_light",{roughness:.9}),a+.018+.013,o,r-n/2+.02+c/2+d*(c+h));let f=Ax(e,"style_panel");t.add(f)}function tT(i,t){let e=t.getObjectByName("tree_1");e&&e.traverse(n=>{n.isMesh&&n.material.name==="pot_white"&&(n.material=i.accent("pot","pot_white"))})}function eT(i,t,e,n,s){let r,o,a,l,c;e.kind==="round"?(o=e.cx,a=e.cz,l=c=e.r*2,r=new Rs().absarc(0,0,e.r,0,Math.PI*2,!1)):(o=(e.x0+e.x1)/2,a=(e.z0+e.z1)/2,l=e.x1-e.x0,c=e.z1-e.z0,r=dp(l,c,e.r));let h={x0:o-l/2,x1:o+l/2,z0:a-c/2,z1:a+c/2},u=new Za(r,40),f=u.attributes.position,d=u.attributes.uv;for(let g=0;g<d.count;g++)d.setXY(g,f.getX(g)/l+.5,f.getY(g)/c+.5);u.rotateX(-Math.PI/2);let p=new Se({name:`style_rug_${s}`,map:vx(e,h,n)});p.userData={accent:"rug"};let x=i.add(t,u,p,o,sx,a);x.userData.bakedName=`style_rug_${s}`;let m=r.getPoints(40).map(g=>[g.x,-g.y]);i.add(t,cT(m,sx),i.accent("rugEdge","fabric_light",{roughness:1,side:ti}),o,0,a)}function nT(i){return i.kind==="round"?{x0:i.cx-i.r,x1:i.cx+i.r,z0:i.cz-i.r,z1:i.cz+i.r}:{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1}}function vx(i,t,e,n=null){let s=Math.round((t.x1-t.x0)*si),r=Math.round((t.z1-t.z0)*si);return pp(s,r,o=>{iT(o,s,r,i,t,e,n?ux:1),n&&(o.globalCompositeOperation="multiply",o.drawImage(wx(n,t),0,0,s,r),o.globalCompositeOperation="source-over")})}function iT(i,t,e,n,s,r,o){i.fillStyle="rgb(247,247,246)",i.fillRect(0,0,t,e),Ex(i,t,e,7,5);let a=.18*si;i.strokeStyle="rgba(0,0,0,0.07)",i.lineWidth=1.5,i.beginPath(),n.kind==="round"?i.arc(t/2,e/2,t/2-a,0,Math.PI*2):hT(i,a,a,t-a*2,e-a*2,Math.max(2,n.r*si-a*.3)),i.stroke(),Tx(i,r,s,o)}function bx(i,t=null){let e=Math.round((le.x1-le.x0)*si),n=Math.round((le.z1-le.z0)*si);return pp(e,n,s=>{t?s.drawImage(wx(t,le),0,0,e,n):(s.fillStyle=`rgb(${lx.join(",")})`,s.fillRect(0,0,e,n)),Ex(s,e,n,3,0),s.fillStyle="rgba(60,50,40,0.035)";for(let r=-8;r<=8;r+=1.6)r>le.x0&&r<le.x1&&s.fillRect(Math.round((r-le.x0)*si),0,1,n);for(let r=-6;r<=6;r+=1.5)r>le.z0&&r<le.z1&&s.fillRect(0,Math.round((r-le.z0)*si),e,1);Tx(s,i,le,t?ux:1)})}function Mx(i){let t=new Map,e=sT(i);if(!e)return t;let n=(s,r)=>e(s,r).map((o,a)=>Math.min(255,o/lx[a]*255));for(let[s,r]of hx)t.set(`style_patch_${s}`,bx(r.layers,e)),r.rug&&t.set(`style_rug_${s}`,vx(r.rug,nT(r.rug),r.layers,n));return t}function sT(i){let s=Al(128,96),r=s.getContext("2d",{willReadFrequently:!0});try{r.drawImage(i,0,0,128,96)}catch{return null}let o=r.getImageData(0,0,128,96).data,a=(u,f)=>{let d=Math.min(127,Math.max(0,Math.floor((u+8)*8))),x=(Math.min(95,Math.max(0,Math.floor((6-f)*8)))*128+d)*4;return[o[x],o[x+1],o[x+2]]},l=[];for(let u=0;u<=1.0001;u+=.025)for(let f of[.18,.4]){let d=le.x0+u*(le.x1-.12-le.x0),p=le.z0+u*(le.z1-le.z0);for(let[x,m]of[[le.x0-f,p],[d,le.z0-f],[d,le.z1+f]])l.push({x:x-5.5,z:m-2.3,c:a(x,m)})}let c=u=>u[0]*.3+u[1]*.55+u[2]*.15,h=null;for(let u=0;u<4&&l.length>=12;u++){h=[0,1,2].map(d=>rT(l,d));let f=h;l=l.filter(d=>c(d.c)>=c(ax(f,d.x,d.z))*.93)}return h&&((u,f)=>ax(h,u-5.5,f-2.3).map(d=>Math.max(0,Math.min(255,d))))}var Sx=(i,t)=>[1,i,t,i*i,t*t,i*t],ax=(i,t,e)=>i.map(n=>Sx(t,e).reduce((s,r,o)=>s+r*n[o],0));function rT(i,t){let n=Array.from({length:6},()=>new Array(7).fill(0));for(let s of i){let r=Sx(s.x,s.z);for(let o=0;o<6;o++){for(let a=0;a<6;a++)n[o][a]+=r[o]*r[a];n[o][6]+=r[o]*s.c[t]}}for(let s=0;s<6;s++)n[s][s]+=1e-6;for(let s=0;s<6;s++){let r=s;for(let o=s+1;o<6;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);[n[s],n[r]]=[n[r],n[s]];for(let o=0;o<6;o++)if(o!==s){let a=n[o][s]/n[s][s];for(let l=s;l<=6;l++)n[o][l]-=a*n[s][l]}}return n.map((s,r)=>s[6]/s[r])}function wx(i,t){let n=Math.max(2,Math.round((t.x1-t.x0)*16)),s=Math.max(2,Math.round((t.z1-t.z0)*16)),r=Al(n,s),o=r.getContext("2d"),a=o.createImageData(n,s);for(let l=0,c=0;l<s;l++)for(let h=0;h<n;h++,c+=4){let u=i(t.x0+(h+.5)/16,t.z0+(l+.5)/16);a.data[c]=u[0],a.data[c+1]=u[1],a.data[c+2]=u[2],a.data[c+3]=255}return o.putImageData(a,0,0),r}function Ex(i,t,e,n,s){let r=i.getImageData(0,0,t,e),o=r.data,a=Cx(3);for(let l=0,c=0;l<e;l++){let h=s?l&1?s*.5:-s*.5:0;for(let u=0;u<t;u++,c+=4){let f=(a()-.5)*n+h;o[c]+=f,o[c+1]+=f,o[c+2]+=f}}i.putImageData(r,0,0)}function oT(i){let t=Math.round((le.x1-le.x0)*wr),e=Math.round((le.z1-le.z0)*wr),n=Al(t,e),s=Al(t,e),r=n.getContext("2d"),o=s.getContext("2d"),a=(l,c)=>[(l-le.x0)*wr,(c-le.z0)*wr];for(let l of i){if(l.flat)up(r,l.pts,a,.07*wr,`rgb(${ap})`);else if(l.y1>0){let c=[l.y0,l.y1].flatMap(h=>l.pts.map(([u,f])=>[u+ix[0]*h,f+ix[1]*h]));up(r,Rx(c),a,(.035+.17*l.y1)*wr,`rgb(${ap})`)}l.core&&up(o,l.pts,a,(l.blur??.03)*wr,`rgba(${ap},${l.core})`)}return{plume:n,ao:s}}function Tx(i,t,e,n=1){let s=(le.x0-e.x0)*si,r=(le.z0-e.z0)*si,o=(le.x1-le.x0)*si,a=(le.z1-le.z0)*si;i.save(),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=zE*n,i.drawImage(t.plume,s,r,o,a),i.globalAlpha=n,i.drawImage(t.ao,s,r,o,a),i.restore()}function up(i,t,e,n,s){let r=n>.5?2e4:0;i.save(),r?(i.shadowColor=s,i.shadowBlur=n,i.shadowOffsetX=r,i.fillStyle="#000"):i.fillStyle=s,i.beginPath(),t.forEach(([o,a],l)=>{let[c,h]=e(o,a);l?i.lineTo(c-r,h):i.moveTo(c-r,h)}),i.closePath(),i.fill(),i.restore()}function aT(){return pp(640,360,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e*.66);n.addColorStop(0,"#202020"),n.addColorStop(.7,"#8C8C8C"),n.addColorStop(1,"#B4B4B4"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=i.createRadialGradient(t*.64,e*.58,0,t*.64,e*.58,e*.42);s.addColorStop(0,"rgba(255,255,255,0.95)"),s.addColorStop(.08,"rgba(255,255,255,0.75)"),s.addColorStop(.1,"rgba(255,255,255,0.3)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,t,e),[[.6,"#6E6E6E","#555555",.05],[.7,"#474747","#333333",.07],[.82,"#2A2A2A","#181818",.06]].forEach(([a,l,c,h],u)=>{let f=i.createLinearGradient(0,e*a,0,e);f.addColorStop(0,l),f.addColorStop(1,c),i.fillStyle=f,i.beginPath(),i.moveTo(0,e);for(let d=0;d<=t;d+=8)i.lineTo(d,e*(a+h*Math.sin(d/t*Math.PI*(1.3+u*.7)+u*1.9)+h*.4*Math.sin(d/t*Math.PI*4.1+u)));i.lineTo(t,e),i.closePath(),i.fill()});let o=i.createLinearGradient(0,0,t*.6,e);o.addColorStop(0,"rgba(255,255,255,0.06)"),o.addColorStop(.5,"rgba(255,255,255,0.015)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,t,e)})}function Ax(i,t){let e=new se;e.name=t,i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(r=>{if(r.isMesh){if(r.material.map||r.userData.keep){s.push(r);return}n.has(r.material)||n.set(r.material,[]),n.get(r.material).push([r.geometry,r.matrixWorld])}});for(let[r,o]of n)e.add(new Rt(lT(o),r));for(let r of s)r.matrixWorld.decompose(r.position,r.quaternion,r.scale),r.removeFromParent(),e.add(r);return e}function lT(i){let t=i.map(([a,l])=>{let c=a.index?a.toNonIndexed():a.clone();for(let h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);return c.applyMatrix4(l)}),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=0;for(let a of t)n.set(a.attributes.position.array,r),s.set(a.attributes.normal.array,r),r+=a.attributes.position.count*3,a.dispose();let o=new Me;return o.setAttribute("position",new ze(n,3)),o.setAttribute("normal",new ze(s,3)),o.computeBoundingSphere(),o}function cT(i,t){let e=[],n=[],s=i.reduce((a,l)=>a+l[0],0)/i.length,r=i.reduce((a,l)=>a+l[1],0)/i.length;for(let a=0;a<i.length;a++){let[l,c]=i[a],[h,u]=i[(a+1)%i.length],f=h-l,d=u-c;if(Math.hypot(f,d)<1e-6)continue;let p=d,x=-f;p*((l+h)/2-s)+x*((c+u)/2-r)<0&&(p=-p,x=-x);let m=Math.hypot(p,x);p/=m,x/=m;let g=[l,0,c],_=[l,t,c],w=[h,0,u],v=[h,t,u],S=-d*p+f*x>0?[g,w,v,g,v,_]:[g,v,w,g,_,v];for(let b of S)e.push(...b),n.push(p,0,x)}let o=new Me;return o.setAttribute("position",new te(e,3)),o.setAttribute("normal",new te(n,3)),o}function dp(i,t,e){let n=new Rs,s=i/2-e,r=t/2-e;return n.moveTo(-s,-t/2),n.lineTo(s,-t/2),n.absarc(s,-r,e,-Math.PI/2,0,!1),n.lineTo(i/2,r),n.absarc(s,r,e,0,Math.PI/2,!1),n.lineTo(-s,t/2),n.absarc(-s,r,e,Math.PI/2,Math.PI,!1),n.lineTo(-i/2,-r),n.absarc(-s,-r,e,Math.PI,Math.PI*1.5,!1),n}function hT(i,t,e,n,s,r){i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Er(i,t,e,n,s){let r=Math.cos(s),o=Math.sin(s);return[i+e*r+n*o,t-e*o+n*r]}function Dn(i,t,e,n,s=0){return[[-e/2,-n/2],[e/2,-n/2],[e/2,n/2],[-e/2,n/2]].map(([r,o])=>Er(i,t,r,o,s))}function hu(i,t,e,n){return Array.from({length:n},(s,r)=>[i+e*Math.cos(r/n*Math.PI*2),t+e*Math.sin(r/n*Math.PI*2)])}function Rx(i){let t=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of t.reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function Al(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function pp(i,t,e){let n=Al(i,t);e(n.getContext("2d",{willReadFrequently:!0}),i,t);let s=new gi(n);return s.colorSpace=ae,s.anisotropy=8,s}function Cx(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var uT=20;var oi=.36,ls=1.6;var as=new Q(9.05,-2.6),du=Object.freeze([3,5,7,9]),fT=/^(desk|screen|lounge)_(\d{2})$/,dT=/^lamp_(\d{2})$/,uu=["floor_open","floor_closed","roof","elevator_shaft","elevator_cabin"],pT=new Set(du);async function Dx(i){let t=null;try{if(new URLSearchParams(location.search).get("placeholder")==="1")throw new Error("?placeholder=1");let o=await Promise.race([new zo().loadAsync(`${i}/office.glb`),new Promise((a,l)=>setTimeout(()=>l(new Error("timeout")),25e3))]);o.scene.updateMatrixWorld(!0),o.scene.getObjectByName("floor_open")?t=o.scene:console.info("[office] office.glb has no floor_open (v1 file): using the procedural v2 placeholder")}catch(o){console.warn("[office] office.glb failed to load, using the procedural placeholder:",o.message)}let e=!t||uu.some(o=>!t.getObjectByName(o))?Nx():null,n={},s=[];for(let o of uu){let a=t&&t.getObjectByName(o);a?n[o]=a:(n[o]=e.templates[o],s.push(o))}if(t){for(let o of uu)s.includes(o)||yT(n[o]);s.length&&console.warn("[office] placeholder used for missing nodes:",s.join(", "))}let r=Lx(n.floor_open);if(r.desks.filter(Boolean).length<uT){console.warn("[office] floor_open has fewer than 20 desk_NN empties: using placeholder floor_open");let o=e||Nx();return n.floor_open=o.templates.floor_open,Ix(n,Lx(n.floor_open),o.nightMaps,"placeholder")}return Ix(n,r,e?e.nightMaps:new Map,t?s.length?"glb+placeholder":"glb":"placeholder")}function Ix(i,t,e,n){let s=null;try{new URLSearchParams(location.search).get("floorstyle")!=="0"&&(s=gx(i.floor_open,t.lounges))}catch(r){console.warn("[office] floor styles skipped:",r.message)}try{xT(i.floor_open)}catch(r){console.warn("[office] dept divider skipped:",r.message)}try{mT(i.floor_open,t)}catch(r){console.warn("[office] removed workstations skipped:",r.message)}try{_T(i.floor_open,t)}catch(r){console.warn("[office] manager desk skipped:",r.message)}return{templates:i,spots:t,nightMaps:e,source:n,style:s}}function mT(i,t){if(!i||!t)return;let e=[],n=[],s=-2.7;for(let l of du){let c=String(l).padStart(2,"0"),h=i.getObjectByName(`desk_${c}`),u=Math.floor((l-1)/2),f=[-5.7,-4,-2.3,-.6,1.1][u]??-2.3,d=h?h.position.x:f;e.push(h?h.position.clone():new I(d,Wo,-3.9)),n.push({x:d,zMax:s}),h?.parent&&h.parent.remove(h);for(let p of["screen_","laptop_screen_"]){let x=i.getObjectByName(p+c);x?.parent&&x.parent.remove(x)}t.desks[l-1]=void 0,t.screens[l-1]=void 0}let r=i.getObjectByName("poufs");r&&Px(r,e,.55);let o=i.getObjectByName("laptops");o&&gT(o,n,.55);let a=i.getObjectByName("mugs");a&&Px(a,e,.45)}function Px(i,t,e){Fx(i,(n,s,r)=>{let o=e*e;for(let a of t){let l=n-a.x,c=r-a.z;if(l*l+c*c<=o&&Math.abs(s-a.y)<1.4)return!0}return!1})}function gT(i,t,e){Fx(i,(n,s,r)=>{if(s<.5||s>1.2)return!1;for(let o of t)if(Math.abs(n-o.x)<=e&&r<o.zMax)return!0;return!1})}function Fx(i,t){i.traverse(e=>{if(!e.isMesh||!e.geometry?.attributes?.position)return;let n=e.geometry,s=n.attributes.position,r=n.index,o=[],a=(l,c,h)=>{let u=(s.getX(l)+s.getX(c)+s.getX(h))/3,f=(s.getY(l)+s.getY(c)+s.getY(h))/3,d=(s.getZ(l)+s.getZ(c)+s.getZ(h))/3;return t(u,f,d)};if(r){for(let l=0;l<r.count;l+=3){let c=r.getX(l),h=r.getX(l+1),u=r.getX(l+2);a(c,h,u)||o.push(c,h,u)}n.setIndex(o)}else{for(let l=0;l<s.count;l+=3)a(l,l+1,l+2)||o.push(l,l+1,l+2);if(o.length!==s.count){let l=new Float32Array(o.length*3);for(let c=0;c<o.length;c++){let h=o[c];l[c*3]=s.getX(h),l[c*3+1]=s.getY(h),l[c*3+2]=s.getZ(h)}n.setAttribute("position",new ze(l,3)),n.deleteAttribute("normal"),n.deleteAttribute("uv")}}n.computeVertexNormals(),n.computeBoundingSphere()})}function xT(i){if(!i||i.getObjectByName("dept_divider"))return;let t=new se;t.name="dept_divider";let e=new Ie({name:"dept_divider_frost",color:15265523,roughness:.35,metalness:.05,transparent:!0,opacity:.55,side:en,depthWrite:!1}),n=new Ie({name:"dept_divider_frame",color:1842206,roughness:.45,metalness:.3}),s=-3.15,r=1.49,o=-3.15,a=-2.79,l=o-s,c=a-r,h=Math.hypot(l,c),u=Math.atan2(-c,l),f=.72,d=1.28,p=.04,x=1.15,m=.41,g=h-m*2,_=g/3,w=m+_/2;for(let A=0;A<3;A++){let y=(w+A*_)/h,E=new se;E.position.set(s+l*y,f,r+c*y),E.rotation.y=u,E.add(new Rt(new Ve(x,d,p),e));let R=x/2,P=d/2;for(let[N,k,D,B]of[[x+.04,.035,0,P+.01],[x+.04,.035,0,-P-.01],[.035,d+.04,-R-.01,0],[.035,d+.04,R+.01,0]]){let X=new Rt(new Ve(N,k,p+.02),n);X.position.set(D,B,0),E.add(X)}t.add(E)}let v=new Ie({name:"dept_divider_oak",color:13215100,roughness:.6}),S=g+.15,b=new Rt(new Ve(S,.05,.12),v);b.position.set((s+o)/2,.06,(r+a)/2),b.rotation.y=u,t.add(b),i.add(t)}function _T(i,t){if(!i||i.getObjectByName("manager_desk")||t.desks[20])return;let e=new se;e.name="manager_desk";let n=-1.45,s=-3.75,r=new Ie({name:"manager_desk_oak",color:13215100,roughness:.55}),o=new Ie({name:"manager_desk_frame",color:1842206,roughness:.45,metalness:.3}),a=new Ie({name:"manager_desk_seat",color:3815998,roughness:.85}),l=new Rt(new Ve(1.35,.05,.7),r);l.position.set(n,.725,s),e.add(l);for(let[g,_]of[[-.55,-.28],[.55,-.28],[-.55,.28],[.55,.28]]){let w=new Rt(new Ve(.05,.7,.05),o);w.position.set(n+g,.35,s+_),e.add(w)}let c=n,h=s-.72,u=new Rt(new Cn(.24,.26,.08,20),a);u.position.set(c,.46,h),e.add(u);let f=new Rt(new Ve(.42,.42,.08),a);f.position.set(c,.72,h-.2),e.add(f);let d=new Rt(new Cn(.04,.04,.38,12),o);d.position.set(c,.22,h),e.add(d);let p=new Rt(new Ve(.32,.012,.22),new Ie({name:"manager_desk_laptop",color:13225168,roughness:.35,metalness:.75}));p.position.set(n,.756,s+.05),e.add(p);let x=new Rt(new Ve(.32,.2,.008),p.material);x.position.set(n,.86,s+.15),x.rotation.x=.35,e.add(x),i.add(e);let m=new be;m.name="desk_21",m.position.set(c,Wo,h),m.rotation.y=0,i.add(m),t.desks[20]={pos:new I(c,Wo,h),yaw:0}}function yT(i){let t=new Map;i.traverse(e=>{if(!e.isMesh)return;let n=vT(e);if(!n)return;e.userData.bakedName=n;let s=e.material;if(!t.has(s)){let r=s.map||s.emissiveMap||s.lightMap||null;r&&(r.colorSpace=ae),t.set(s,new Se({map:r,color:r?16777215:s.color,name:s.name}))}e.material=t.get(s)})}function vT(i){for(let t=i;t;t=t.parent)if(t.name&&t.name.startsWith("baked_"))return t.name;return null}function Lx(i){let t={desks:[],screens:[],lounges:[],lamps:[]};i.updateMatrixWorld(!0);let e=new Kt().copy(i.matrixWorld).invert(),n=new Kt,s=new I,r=new bn,o=new I,a=new I;return i.traverse(l=>{let c=fT.exec(l.name),h=dT.exec(l.name);if(!c&&!h)return;if(n.multiplyMatrices(e,l.matrixWorld).decompose(s,r,o),h){t.lamps[Number(h[1])-1]=s.clone();return}a.set(0,0,1).applyQuaternion(r);let u={pos:s.clone(),yaw:Math.atan2(a.x,a.z)};(c[1]==="desk"?t.desks:c[1]==="screen"?t.screens:t.lounges)[Number(c[2])-1]=u}),t}var Wo=.42,Ux=[-3.4,.8],Ox=[-5.7,-3.9,-2.1,-.3,1.5],fu=-2.1,Bx=8.8,kx=1.1,zx=[[-5,-3.4],[-2.1,-3.4],[.8,-3.4],[-5,.8],[-2.1,.8],[.8,.8]];function Fn(i,t=.7,e=0,n=""){return new Ie({color:i,roughness:t,metalness:e,name:n})}function we(i,t,e,n,s,r,o,a){let l=new Rt(new Ve(e,n,s),t);return l.position.set(r,o,a),i.add(l),l}function ri(i,t,e,n,s,r,o,a,l=28){let c=new Rt(new Cn(e,n,s,l),t);return c.position.set(r,o,a),i.add(c),c}function Go(i,t,e,n,s,r=0){let o=new be;return o.name=t,o.position.set(e,n,s),o.rotation.y=r,i.add(o),o}function qo(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new gi(n);return s.colorSpace=ae,s.anisotropy=8,s}function Nx(){let i={white:Fn(16053232,.8),oak:Fn(13215100,.6),black:Fn(1842206,.45,.3),fabric:Fn(14341839,1),laptop:Fn(13225168,.35,.75),sofa:Fn(13486529,.95),armchair:Fn(3815998,.8),pot:Fn(16184818,.55),leaf1:Fn(3963719,.75),leaf2:Fn(5937752,.75),leaf3:Fn(3107390,.75),trunk:Fn(7032634,.8),mug:Fn(16777215,.4),counter:Fn(15394785,.6),glass:new Ie({color:14083310,roughness:.05,transparent:!0,opacity:.14,side:en,depthWrite:!1}),shaftGlass:new Ie({color:14083310,roughness:.05,transparent:!0,opacity:.16,side:en,depthWrite:!1})},t=()=>new Ie({name:"night_lamp",color:2762532,emissive:16760944,emissiveIntensity:0,roughness:.5}),e=()=>new Ie({name:"night_screen",color:1316635,emissive:10473727,emissiveIntensity:0,roughness:.3}),n=new Map,s={},r=new se;r.name="floor_open",s.floor_open=r,we(r,i.white,16.4,oi,12.4,0,-oi/2,0).name="slab";let o=bT();n.set("baked_floor",o.night);let a=new Rt(new qe(16,12).rotateX(-Math.PI/2),new Se({map:o.day,name:"baked_floor"}));a.name="baked_floor",a.position.y=.002,r.add(a),we(r,i.white,.2,2.7,12.4,-8.1,1.35,0);let l=MT();n.set("baked_wall_left",l.night);let c=new Rt(new qe(12,2.7).rotateY(Math.PI/2),new Se({map:l.day,name:"baked_wall_left"}));c.name="baked_wall_left",c.position.set(-7.995,1.35,0),r.add(c);let h=new Rt(new qe(16,2.7),i.glass);h.position.set(0,1.35,-6),r.add(h);for(let b=-8;b<=8.001;b+=2)we(r,i.black,.07,2.7,.08,b,1.35,-6);we(r,i.black,16.2,.07,.1,0,2.7,-6),we(r,i.black,16,.08,.1,0,.04,-6);let u=(b,A,y,E,R)=>{let P=new Rt(new qe(A,y).rotateY(Math.PI/2),new Se({color:1382171,name:b}));return P.name=b,P.position.set(-7.96,R,E),r.add(P),P};u("wall_screen",2.6,1.46,-4.3,1.5),u("task_board",3,1.5,.1,1.45);for(let[b,A,y,E]of[[2.68,1.54,-4.3,1.5],[3.08,1.58,.1,1.45]])we(r,i.black,.03,A,b,-7.985,E,y);let f=[];for(let b=0;b<2;b++){let A=Ux[b];we(r,i.oak,Bx,.05,kx,fu,.725,A);for(let y of[-4.1,-1.4,1.4,4.1])for(let E of[-1,1])we(r,i.black,.05,.7,.05,fu+y,.35,A+E*.48);for(let y of[-4.1,4.1])we(r,i.black,.04,.04,.96,fu+y,.1,A);for(let y=0;y<10;y++){let E=b*10+y+1,R=Math.floor(y/2),P=y%2===0,N=Ox[R],k=P?-1:1;if(Go(r,`desk_${String(E).padStart(2,"0")}`,N,Wo,A+k*1.05,P?0:Math.PI),pT.has(E))continue;ri(r,i.fabric,.26,.29,Wo,N,Wo/2,A+k*1.05);let D=new se;D.position.set(N,.75,A+k*.3),D.rotation.y=P?Math.PI:0,we(D,i.laptop,.32,.012,.22,0,.006,0);let B=new se;B.position.set(0,.012,-.11),B.rotation.x=-.3,we(B,i.laptop,.32,.21,.008,0,.105,0);let X=new Rt(new qe(.29,.18),e());X.name=`laptop_screen_${String(E).padStart(2,"0")}`,X.position.set(0,.105,.0045),B.add(X),D.add(B),r.add(D),f.push([E,X,P]),y%3===1&&ri(r,i.mug,.04,.035,.09,N+.38,.795,A+k*.1,14)}}r.updateMatrixWorld(!0);for(let[b,A]of f){let y=A.getWorldPosition(new I),E=A.getWorldQuaternion(new bn);Go(r,`screen_${String(b).padStart(2,"0")}`,y.x,y.y,y.z).quaternion.copy(E)}zx.forEach(([b,A],y)=>{let E=new se;E.position.set(b,2.05,A),ri(E,i.black,.09,.2,.2,0,.06,0,24),ri(E,i.black,.008,.008,.9,0,.6,0,6);let R=new Rt(new ur(.075,16,12),t());R.position.y=-.07,E.add(R),r.add(E),Go(r,`lamp_${String(y+1).padStart(2,"0")}`,b,1.95,A)}),we(r,i.sofa,2.7,.42,.95,5.9,.21,.05),we(r,i.sofa,2.7,.52,.24,5.9,.68,-.36);for(let b of[-1,1])we(r,i.sofa,.26,.62,.95,5.9+b*1.22,.31+.1,.05);for(let b=0;b<3;b++)we(r,i.sofa,.8,.1,.66,5.05+b*.85,.47,.12);[[5.05,0],[5.9,1],[6.75,2]].forEach(([b],A)=>Go(r,`lounge_0${A+1}`,b,.52,.12,0));let d=(b,A,y)=>{let E=new se;E.position.set(b,0,2.1),E.rotation.y=A,we(E,i.armchair,.9,.38,.9,0,.19,0),we(E,i.armchair,.2,.55,.9,-.35,.55,0);for(let R of[-1,1])we(E,i.armchair,.9,.2,.14,0,.5,R*.38);r.add(E),Go(r,y,b,.42,2.1,A)};d(4.15,Math.PI/2,"lounge_04"),d(7.65,-Math.PI/2,"lounge_05"),ri(r,i.oak,.6,.6,.04,5.9,.38,2.1,40),ri(r,i.black,.04,.04,.36,5.9,.18,2.1,10),we(r,i.counter,3.6,1,.6,6,.5,-5.6),we(r,i.oak,3.7,.05,.7,6,1.025,-5.6),we(r,i.black,.4,.4,.3,4.9,1.25,-5.7),ri(r,i.mug,.04,.035,.09,5.5,1.095,-5.5,14),ri(r,i.mug,.04,.035,.09,5.65,1.095,-5.45,14),ri(r,i.black,.2,.2,.05,6.1,.66,-4.8,20),ri(r,i.black,.03,.03,.64,6.1,.33,-4.8,8),Go(r,"lounge_06",6.1,.68,-4.8,0);let p=(b,A,y)=>{let E=new se;E.position.set(b,0,A),E.scale.setScalar(y),ri(E,i.pot,.3,.22,.6,0,.3,0),ri(E,i.trunk,.04,.05,.9,0,.9,0,8),[[0,1.55,0,.5,i.leaf1],[.3,1.35,.15,.36,i.leaf2],[-.28,1.4,-.12,.34,i.leaf3],[.05,1.95,.05,.34,i.leaf2]].forEach(([R,P,N,k,D])=>{let B=new Rt(new Ka(k,2),D);B.position.set(R,P,N),E.add(B)}),r.add(E)};p(-7.2,5.2,1.25),p(7.6,-3.4,1),p(7.5,5,1.2);let x=new se;x.name="floor_closed",s.floor_closed=x,we(x,i.white,16.4,oi,12.4,0,-oi/2,0);let m=ST(),g=new Ie({name:"night_windows",map:m.diffuse,emissiveMap:m.emissive,emissive:16777215,emissiveIntensity:0,roughness:.22,metalness:.25});m.diffuse.wrapS=m.emissive.wrapS=jn,[[0,6.2,0,16.4],[Math.PI,-6.2,0,16.4],[Math.PI/2,0,8.2,12.4],[-Math.PI/2,0,-8.2,12.4]].forEach(([b,A,y,E],R)=>{let P=new qe(E,1.24),N=P.attributes.uv,k=R*.29%1;for(let B=0;B<N.count;B++)N.setX(B,N.getX(B)*(E/25.6)+k);let D=new Rt(P,g);D.rotation.y=b,D.position.set(b===Math.PI/2?8.2:b===-Math.PI/2?-8.2:0,.62,A),x.add(D)});for(let b of[-1,1])for(let A of[-1,1])we(x,i.counter,.12,1.24,.12,b*8.2,.62,A*6.2);let w=new se;w.name="roof",s.roof=w,we(w,i.white,16.4,oi,12.4,0,oi/2,0);for(let[b,A,y,E]of[[16.4,.16,0,6.12],[16.4,.16,0,-6.12],[.16,12.4,8.12,0],[.16,12.4,-8.12,0]])we(w,i.white,b,.34,A,y,oi+.17,E);for(let[b,A,y,E,R]of[[1.6,.8,1.1,-4,-2],[1.6,.8,1.1,-1.8,-2],[1.2,.6,1.2,4,2.5],[2.2,1.6,2,5.5,-3.5]])we(w,i.counter,b,A,y,E,oi+A/2,R),we(w,i.black,b*.8,.05,y*.8,E,oi+A+.02,R);let v=new se;v.name="elevator_shaft",v.position.set(as.x,0,as.y),s.elevator_shaft=v;for(let b of[-1,1])for(let A of[-1,1])we(v,i.black,.06,1,.06,b*.72,.5,A*.72);for(let[b,A,y]of[[0,0,.72],[Math.PI,0,-.72],[Math.PI/2,.72,0],[-Math.PI/2,-.72,0]]){let E=new Rt(new qe(1.44,1),i.shaftGlass);E.rotation.y=b,E.position.set(A,.5,y),v.add(E)}let S=new se;S.name="elevator_cabin",S.position.set(as.x,0,as.y),s.elevator_cabin=S,we(S,i.counter,1.3,.06,1.3,0,.03,0);for(let b of[-1,1])for(let A of[-1,1])we(S,i.black,.05,2.2,.05,b*.625,1.1,A*.625);for(let[b,A,y,E]of[[1.3,.05,0,.625],[1.3,.05,0,-.625],[.05,1.3,.625,0],[.05,1.3,-.625,0]])we(S,i.black,b,.05,A,y,2.175,E);for(let[b,A,y]of[[0,0,.625],[Math.PI,0,-.625],[Math.PI/2,.625,0],[-Math.PI/2,-.625,0]]){let E=new Rt(new qe(1.25,2.1),i.shaftGlass);E.rotation.y=b,E.position.set(A,1.1,y),S.add(E)}for(let b of uu)s[b].traverse(A=>{A.isMesh&&!A.userData.bakedName&&/^baked_/.test(A.name)&&(A.userData.bakedName=A.name)});return{templates:s,nightMaps:n}}var ai=100,wn=i=>(i+8)*ai,En=i=>(i+6)*ai;function bT(){let i=16*ai,t=12*ai,e=[];for(let r of Ux){e.push(["rect",fu,r,Bx+.2,kx+.1]);for(let o=0;o<10;o++)e.push(["circle",Ox[Math.floor(o/2)],r+(o%2?1.05:-1.05),.3,.3])}e.push(["rect",5.9,.05,2.9,1],["rect",4.15,2.1,.95,.95],["rect",7.65,2.1,.95,.95],["circle",5.9,2.1,.62,.62],["rect",6,-5.6,3.7,.7],["circle",-7.2,5.2,.4,.4],["circle",7.6,-3.4,.35,.35],["circle",7.5,5,.4,.4]);let n=qo(i,t,r=>{r.fillStyle="#F0ECE5",r.fillRect(0,0,i,t);let o=r.createLinearGradient(0,0,i,t);o.addColorStop(0,"#E9E4DC"),o.addColorStop(1,"#F6F3EE"),r.fillStyle=o,r.fillRect(0,0,i,t),r.fillStyle="#DDD9D0",r.beginPath(),r.arc(wn(5.9),En(1.3),2.25*ai,0,7),r.fill(),r.fillStyle="#E6E2DA",r.beginPath(),r.arc(wn(5.9),En(1.3),1.75*ai,0,7),r.fill(),r.save(),r.filter="blur(18px)";for(let c=-8;c<8;c+=2)r.fillStyle="rgba(255,250,238,0.55)",r.beginPath(),r.moveTo(wn(c+.15),En(-6)),r.lineTo(wn(c+1.85),En(-6)),r.lineTo(wn(c+1.85+5.2),En(-6+3.9)),r.lineTo(wn(c+.15+5.2),En(-6+3.9)),r.fill();r.restore(),mp(r,e,"rgba(70,62,52,0.30)",.45,.55,14),mp(r,e,"rgba(60,52,44,0.28)",0,0,5);let a=r.createLinearGradient(0,0,130,0);a.addColorStop(0,"rgba(90,80,70,0.30)"),a.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=a,r.fillRect(0,0,130,t);let l=r.createLinearGradient(0,0,0,90);l.addColorStop(0,"rgba(90,80,70,0.18)"),l.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=l,r.fillRect(0,0,i,90)}),s=qo(i,t,r=>{r.fillStyle="#222A3E",r.fillRect(0,0,i,t),r.fillStyle="#2A3248",r.beginPath(),r.arc(wn(5.9),En(1.3),2.25*ai,0,7),r.fill(),r.save(),r.filter="blur(26px)";for(let a=-8;a<8;a+=2)r.fillStyle="rgba(120,150,230,0.10)",r.beginPath(),r.moveTo(wn(a+.15),En(-6)),r.lineTo(wn(a+1.85),En(-6)),r.lineTo(wn(a+1.85+5.2),En(-6+3.9)),r.lineTo(wn(a+.15+5.2),En(-6+3.9)),r.fill();r.restore();for(let[a,l]of zx.concat([[5.9,1.2]])){let c=2.3*ai,h=r.createRadialGradient(wn(a+.3),En(l+.4),0,wn(a+.3),En(l+.4),c);h.addColorStop(0,"rgba(255,196,130,0.5)"),h.addColorStop(1,"rgba(255,196,130,0)"),r.fillStyle=h,r.fillRect(wn(a+.3)-c,En(l+.4)-c,c*2,c*2)}mp(r,e,"rgba(5,7,14,0.55)",.35,.45,12);let o=r.createLinearGradient(0,0,130,0);o.addColorStop(0,"rgba(0,0,0,0.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(0,0,130,t)});return{day:n,night:s}}function mp(i,t,e,n,s,r){i.save(),i.filter=`blur(${r}px)`,i.fillStyle=e;for(let[o,a,l,c,h]of t)o==="rect"?i.fillRect(wn(a+n-c/2),En(l+s-h/2),c*ai,h*ai):(i.beginPath(),i.ellipse(wn(a+n),En(l+s),c*ai,h*ai,0,0,7),i.fill());i.restore()}function MT(){let e=qo(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#F7F6F3"),r.addColorStop(.7,"#F2F0EC"),r.addColorStop(1,"#E2DFD9"),s.fillStyle=r,s.fillRect(0,0,1200,270);let o=s.createLinearGradient(1060,0,1200,0);o.addColorStop(0,"rgba(120,110,100,0)"),o.addColorStop(1,"rgba(120,110,100,0.22)"),s.fillStyle=o,s.fillRect(1060,0,140,270)}),n=qo(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#242A3A"),r.addColorStop(.7,"#2A2F3E"),r.addColorStop(1,"#161A26"),s.fillStyle=r,s.fillRect(0,0,1200,270);for(let o of[300,700]){let a=s.createRadialGradient(o,120,0,o,120,320);a.addColorStop(0,"rgba(255,190,120,0.16)"),a.addColorStop(1,"rgba(255,190,120,0)"),s.fillStyle=a,s.fillRect(o-320,0,640,270)}});return{day:e,night:n}}function ST(){let n=wT(7),s=qo(1024,64,(o,a,l)=>{let c=o.createLinearGradient(0,0,0,l);c.addColorStop(0,"#9AA7B5"),c.addColorStop(.5,"#6E7C8C"),c.addColorStop(1,"#58687A"),o.fillStyle=c,o.fillRect(0,0,a,l),o.fillStyle="#E8EAED";for(let h=0;h<=16;h++)o.fillRect(h*64-2,0,4,l);o.fillRect(0,0,a,4),o.fillRect(0,l-5,a,5),o.fillRect(0,l*.55,a,2)}),r=qo(1024,64,(o,a,l)=>{o.fillStyle="#000",o.fillRect(0,0,a,l);for(let c=0;c<16;c++){if(n()>.42)continue;let h=.45+n()*.35;o.fillStyle=`rgb(${Math.round(255*h)},${Math.round(196*h)},${Math.round(120*h)})`,o.fillRect(c*64+5,8,54,l*.55-10),o.fillRect(c*64+5,l*.55+5,54,l*.45-14)}});return{diffuse:s,emissive:r}}function wT(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Fs=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,mn=class{constructor(t=0,e=.5){this.x=t,this.v=0,this.target=t,this.response=e,this.delay=0,this.pending=null}to(t,e=0){return e>0?(this.pending=t,this.delay=e):(this.target=t,this.pending=null),this}snap(t){return this.x=this.target=t,this.v=0,this.pending=null,this}step(t){this.pending!==null&&(this.delay-=t,this.delay<=0&&(this.target=this.pending,this.pending=null));let e=Fs?Math.min(this.response,.12):this.response,n=2*Math.PI/Math.max(e,.02),s=this.x-this.target,r=this.v+n*s,o=Math.exp(-n*t);return this.x=this.target+(s+r*t)*o,this.v=(this.v-n*r*t)*o,Math.abs(this.x-this.target)<1e-5&&Math.abs(this.v)<1e-5&&(this.x=this.target,this.v=0),this.x}get settled(){return this.x===this.target&&this.v===0&&this.pending===null}},Le=(i,t,e)=>Math.min(e,Math.max(t,i)),vi=(i,t,e)=>{let n=Le((e-i)/(t-i),0,1);return n*n*(3-2*n)},Rl=(i,t,e)=>i+(t-i)*e;var li='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',Hx={working:"#34C759",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF",idle:"#A1A1A6"},Vx={waiting_user:0,error:0,stuck:0,working:1,done:2,idle:3},ET=/^tsk-\d+$/i,_p=!1,qx=(async()=>{try{document.fonts&&await Promise.race([Promise.all([document.fonts.load("600 24px Inter","Today Tasks 0123456789"),document.fonts.load("500 24px Inter","Working events"),document.fonts.load("700 24px Inter","0123456789")]).then(()=>document.fonts.ready),new Promise(i=>setTimeout(i,2500))])}catch{}_p=!0})();function Gx(i){let t=(i.task||"").trim();return t&&!ET.test(t)?t:(i.step||"").trim()}function Xx(i){try{let t=i?new Date(i):new Date,e=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Sofia",hour:"2-digit",hour12:!1}).format(t);return Number(e)%24}catch{return new Date().getHours()}}function Wx(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=new gi(e);return n.colorSpace=ae,n.anisotropy=8,n.minFilter=Vn,n.generateMipmaps=!0,{c:e,g:e.getContext("2d"),tex:n}}function pu(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function TT(i,t,e,n){let s=String(t).split(/\s+/).filter(Boolean),r=[],o="";for(let a=0;a<s.length;a++){let l=o?`${o} ${s[a]}`:s[a];if(i.measureText(l).width<=e||!o?o=l:(r.push(o),o=s[a]),r.length===n)break}if(r.length<n&&o&&r.push(o),r.length===n&&s.join(" ")!==r.join(" ")){let a=r[n-1];for(;a.length>1&&i.measureText(`${a}\u2026`).width>e;)a=a.slice(0,-1);r[n-1]=`${a.replace(/[\s,.;:]+$/,"")}\u2026`}return r}var mu=class{constructor(t,e){this.screen=t?{mesh:t,...Wx(1536,864),S:1.6,W:960,H:540}:null,this.board=e?{mesh:e,...Wx(1800,900),S:1.8,W:1e3,H:500}:null;for(let n of[this.screen,this.board])n&&(n.mat=new Se({map:n.tex,name:n.mesh.name}),n.mesh.material=n.mat,n.drawn=null);this.screen&&(this.screen.mat.toneMapped=!1),this.sig="",this.data=null,this.accent=null,this.lastDraw=-1e9,this.dirty=!1,this.fontsAtDraw=!1}get materials(){return[this.screen?.mat,this.board?.mat].filter(Boolean)}setData(t){let e=this.signature(t);this.data=t,e!==this.sig&&(this.sig=e,this.dirty=!0)}setAccent(t){t!==this.accent&&(this.accent=t,this.dirty=!0,this.lastDraw=-1e9)}accentDot(t,e,n,s,r,o){t.fillText(e,n,s);let a=t.measureText(e).width;return t.fillStyle=this.accent,t.beginPath(),t.arc(n+a+o*1.3,r,o*.42,0,7),t.fill(),n+a+o*2.6}signature(t){let e=[t.floorName,t.hour,t.now];for(let n of t.bots)e.push(n.id,n.effective_status||n.status,Gx(n),n.color,n.today?.events,n.today?.tasks_done,n.today?.working_min,(n.today?.hourly||[]).join(","));return e.join("|")}tick(t,e){if(this.data&&(this.dirty||!this.fontsAtDraw&&_p)&&t-this.lastDraw>1e3&&(this.lastDraw=t,this.dirty=!1,this.fontsAtDraw=_p,this.screen&&this.drawScreen(this.data),this.board&&this.drawBoard(this.data)),this.screen){let n=.86*(1-.84*e);this.screen.mat.color.setRGB(n,n,n)}if(this.board){let n=1-.46*e;this.board.mat.color.setRGB(n,n*.97,n*.93)}}drawScreen(t){let{g:e,tex:n,S:s,W:r,H:o}=this.screen;e.setTransform(s,0,0,s,0,0);let a=e.createLinearGradient(0,0,0,o);a.addColorStop(0,"#14171C"),a.addColorStop(1,"#0B0D10"),e.fillStyle=a,e.fillRect(0,0,r,o);let l=e.createRadialGradient(r*.2,0,0,r*.2,0,r*.7);l.addColorStop(0,"rgba(52,199,89,0.10)"),l.addColorStop(1,"rgba(52,199,89,0)"),e.fillStyle=l,e.fillRect(0,0,r,o);let c=t.bots,h=c.filter(N=>(N.effective_status||N.status)==="working").length,u=gp(c,N=>N.today?.events),f=gp(c,N=>N.today?.tasks_done),d=gp(c,N=>N.today?.working_min)/60,p=new Array(24).fill(0);for(let N of c)for(let k=0;k<24;k++)p[k]+=Number(N.today?.hourly?.[k])||0;e.textBaseline="alphabetic",e.fillStyle="#8E8E93",e.font=`500 32px ${li}`;let x;this.accent?x=this.accentDot(e,"Today",44,62,51,20):(e.fillText("Today \xB7 ",44,62),x=44+e.measureText("Today \xB7 ").width),e.fillStyle="#F5F5F7",e.font=`650 40px ${li}`,e.fillText(xp(e,t.floorName||"",744-x),x,62),e.fillStyle="#34C759",e.beginPath(),e.arc(r-52,50,7,0,7),e.fill(),e.fillStyle="rgba(52,199,89,0.25)",e.beginPath(),e.arc(r-52,50,14,0,7),e.fill();let m=[[`${h} of ${c.length}`,"working now"],[String(u),"events today"],[String(f),"tasks done"],[d.toFixed(1),"hours worked"]],g=205,_=14,w=44,v=100;m.forEach(([N,k],D)=>{let B=w+D*(g+_);e.fillStyle="rgba(255,255,255,0.065)",pu(e,B,v,g,108,18),e.fill(),e.fillStyle=D===0?"#34C759":"#F5F5F7",e.font=`700 42px ${li}`,e.fillText(N,B+20,v+55),e.fillStyle="#8E8E93",e.font=`500 17px ${li}`,e.fillText(k,B+20,v+86)});let S=44,b=r-88,A=250,y=220;e.fillStyle="#8E8E93",e.font=`500 17px ${li}`,e.fillText("Events by hour",S,A-4);let E=Math.max(1,...p),R=b/24,P=R*.62;for(let N=0;N<24;N++){let k=S+N*R+(R-P)/2,D=p[N]>0?Math.max(8,p[N]/E*(y-20)):6,B=A+y-D,X=N===t.hour;e.save(),X&&(e.shadowColor="rgba(52,199,89,0.85)",e.shadowBlur=18),e.fillStyle=X?"#34C759":N>t.hour?"rgba(255,255,255,0.08)":p[N]>0?"rgba(52,199,89,0.55)":"rgba(255,255,255,0.10)",pu(e,k,B,P,D,Math.min(5,P/2)),e.fill(),e.restore()}e.fillStyle="#6E6E73",e.font=`500 15px ${li}`,e.textAlign="center";for(let N of[0,6,12,18])e.fillText(String(N).padStart(2,"0"),S+N*R+R/2,A+y+26);e.fillText("24",S+23*R+R/2+4,A+y+26),e.textAlign="left",n.needsUpdate=!0}drawBoard(t){let{g:e,tex:n,S:s,W:r,H:o}=this.board;e.setTransform(s,0,0,s,0,0),e.fillStyle="#F1F0EC",e.fillRect(0,0,r,o),e.fillStyle="#FAF9F6",e.fillRect(0,0,r,68),e.fillStyle="#E3E0D9",e.fillRect(0,68,r,2),e.fillStyle="#1D1D1F",e.font=`700 34px ${li}`;let a;this.accent?a=this.accentDot(e,"Tasks",36,49,37,20):(e.fillText("Tasks",36,49),a=36+e.measureText("Tasks ").width),e.fillStyle="#6E6E73",e.font=`600 26px ${li}`,e.fillText(`${this.accent?"":"\xB7 "}${xp(e,t.floorName||"",420)}`,a,49);let l=[...t.bots].sort((g,_)=>(Vx[g.effective_status||g.status]??3)-(Vx[_.effective_status||_.status]??3)||String(g.name).localeCompare(String(_.name))),c=l.slice(0,8),h=l.length-c.length;h>0&&(e.textAlign="right",e.fillStyle="#515154",e.font=`700 28px ${li}`,e.fillText(`+${h}`,r-36,49),e.textAlign="left"),c.length||(e.fillStyle="#8E8E93",e.font=`600 28px ${li}`,e.fillText("Nobody on this floor yet",36,160));let u=4,f=30,d=16,p=90,x=(r-f*2-d*(u-1))/u,m=(o-p-28-d)/2;c.forEach((g,_)=>{let w=f+_%u*(x+d),v=p+Math.floor(_/u)*(m+d),S=g.effective_status||g.status;e.save(),e.shadowColor="rgba(40,36,30,0.18)",e.shadowBlur=14,e.shadowOffsetY=3,e.fillStyle="#FFFFFF",pu(e,w,v,x,m,14),e.fill(),e.restore(),e.fillStyle=g.color||"#A1A1A6",pu(e,w+10,v+12,9,m-24,4.5),e.fill(),e.fillStyle=Hx[S]||Hx.idle,e.beginPath(),e.arc(w+x-22,v+26,8,0,7),e.fill(),e.fillStyle="#1D1D1F",e.font=`700 25px ${li}`,e.fillText(xp(e,g.name||"",x-76),w+32,v+36),e.fillStyle="#3A3A3C",e.font=`600 21px ${li}`,TT(e,Gx(g)||"\u2014",x-52,3).forEach((A,y)=>e.fillText(A,w+32,v+72+y*28))}),n.needsUpdate=!0}};function gp(i,t){let e=0;for(let n of i)e+=Number(t(n))||0;return e}function xp(i,t,e){let n=String(t);if(i.measureText(n).width<=e)return n;for(;n.length>1&&i.measureText(`${n}\u2026`).width>e;)n=n.slice(0,-1);return`${n.trimEnd()}\u2026`}var Cl=20,Xo=.14,Yx=.4,AT=7,RT=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,CT=2.2,yp=[.2,.26,.42];function IT(i,t){return new fr().loadAsync(`${i}/night/${encodeURIComponent(t)}.jpg`).then(e=>(e.flipY=!1,e.colorSpace=ae,e.anisotropy=8,e)).catch(()=>null)}var Tr=class{constructor(t,e,n){this.b=t,this.kind=n,this.root=new se,this.root.name=`${n}-instance`,this.obj=e.clone(!0),this.root.add(this.obj),this.alpha=1,this.mats=[],this.textures=[],this.screens=[],this.walls=null,this.floorId=null,n!=="shaft"&&n!=="cabin"&&this.obj.position.set(0,0,0);let s=new Map,r=Math.random();if(this.obj.traverse(o=>{if(!o.isMesh)return;let l=(Array.isArray(o.material)?o.material:[o.material]).map(h=>{let u=/^laptop_screen_\d\d$/.test(o.name),f=u?null:s.get(h);return f||(f=h.clone(),u||s.set(h,f),this.register(f,o,r)),f});o.material=Array.isArray(o.material)?l:l[0];let c=/^laptop_screen_(\d\d)$/.exec(o.name);c&&(this.screens[Number(c[1])-1]={mat:l[0],glow:0,target:0})}),n==="open"){let o=this.obj.getObjectByName("wall_screen"),a=this.obj.getObjectByName("task_board");(o||a)&&(this.walls=new mu(o,a))}}register(t,e,n){this.mats.push(t);let s=e.userData.bakedName;if(s&&t.map&&!t.userData.nightPatched&&this.b.patchBaked(t,s),t.name==="night_lamp")t.emissive.getHex()===0&&t.emissive.set(16760944),t.emissiveIntensity=0,this.b.daylight.track(t,"lamp");else if(t.name==="night_windows"){if(t.emissive.getHex()===0&&t.emissive.set(16777215),t.emissiveIntensity=0,t.emissiveMap){let r=t.emissiveMap.clone(),o=t.map?t.map.clone():null;for(let a of[r,o])a&&(a.wrapS=a.wrapT=jn,a.offset.x=n,a.needsUpdate=!0,this.textures.push(a));t.emissiveMap=r,o&&(t.map=o)}this.b.daylight.track(t,"windows")}else t.name==="night_screen"&&(t.emissive.getHex()===0&&t.emissive.set(10473727),t.emissiveIntensity=0)}setShown(t){this.alpha=t?1:0,this.root.visible=t}dispose(){for(let t of this.mats)this.b.daylight.untrack(t),t.dispose();for(let t of this.textures)t.dispose();this.root.removeFromParent()}},gu=class{constructor({scene:t,daylight:e,assets:n,baseUrl:s,renderer:r}){this.scene=t,this.daylight=e,this.assets=n,this.baseUrl=s,this.renderer=r,this.group=new se,this.group.name="building",this.group.visible=!1,t.add(this.group),this.introDrop=!1,this.slots=[],this.byId=new Map,this.styles=new Map,this.activeIndex=-1,this.pool=[],this.sig="",this.floorData=null,this.nightRecs=new Map,this.roof=new Tr(this,n.templates.roof,"roof"),this.roofLift=new mn(1,.5),this.group.add(this.roof.root),this.shaft=new Tr(this,n.templates.elevator_shaft,"shaft"),this.cabin=new Tr(this,n.templates.elevator_cabin,"cabin"),this.group.add(this.shaft.root,this.cabin.root),this.setupElevatorGeometry(),this.cabinY=new mn(0,.55),this.shaftTop=new mn(1,.55),this.lampPositions=Array.from({length:6},()=>new I),e.setLampSource(()=>{let o=this.activeOpen();if(!o)return null;let a=this.assets.spots.lamps;for(let l=0;l<6;l++){let c=a[l];this.lampPositions[l].set(c?c.x:0,c?c.y+o.root.position.y:-99,c?c.z:0)}return{positions:a.length?this.lampPositions:[],k:o.alpha}}),this.screenTargets=new Array(21).fill(0);for(let o=0;o<2;o++){let a=new Tr(this,n.templates.floor_open,"open");a.setShown(!1),this.group.add(a.root),this.pool.push(a)}this.pulseT=-1,this.swapped=!0,this.blurPx=0}setupElevatorGeometry(){this.shaftH=1;for(let t of[this.shaft,this.cabin]){t.root.updateMatrixWorld(!0);let e=new Ke().setFromObject(t.obj);if(!Number.isFinite(e.min.y))continue;let n=e.getCenter(new I);t.obj.position.y-=e.min.y,(Math.abs(n.x-as.x)>1.5||Math.abs(n.z-as.y)>1.5)&&(t.obj.position.x+=as.x-n.x,t.obj.position.z+=as.y-n.z),t===this.shaft&&(this.shaftH=Math.max(.01,e.max.y-e.min.y))}}patchBaked(t,e){t.userData.nightPatched=!0;let n=this.nightRecs.get(e);if(!n){let a=this.assets.nightMaps.get(e),l=e.startsWith("style_");n={name:e,uMap:{value:a||t.map},uTint:{value:new I(...a?[1,1,1]:yp)},dayMap:t.map,tex:null,state:a||l?"static":"idle",since:0},this.nightRecs.set(e,n)}let{uMap:s,uTint:r}=n,o=t.userData.accent?t.accentUniform={value:new dt(1,1,1)}:null;t.onBeforeCompile=a=>{a.uniforms.uNight=this.daylight.uNight,a.uniforms.uNightMap=s,a.uniforms.uNightTint=r,o&&(a.uniforms.uAccent=o),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform sampler2D uNightMap;
uniform vec3 uNightTint;${o?`
uniform vec3 uAccent;`:""}`).replace("#include <map_fragment>",`#ifdef USE_MAP
  vec4 dayC = texture2D( map, vMapUv );
  vec4 nightC = texture2D( uNightMap, vMapUv );
  nightC.rgb *= uNightTint;
  diffuseColor *= mix( dayC, nightC, uNight );
#endif`),o&&(a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= uAccent;`))},t.customProgramCacheKey=()=>o?"bothq-baked-night-accent":"bothq-baked-night"}updateNightMaps(t){let e=this.daylight.night;for(let n of this.nightRecs.values())n.state!=="static"&&(e>.01?(n.since=t,n.state==="idle"&&(n.state="loading",IT(this.baseUrl,n.name).then(s=>{if(!s){n.state="missing";return}n.dayMap&&(s.wrapS=n.dayMap.wrapS,s.wrapT=n.dayMap.wrapT,s.channel=n.dayMap.channel),n.tex=s,n.uMap.value=s,n.uTint.value.set(1,1,1),n.state="ready",n.name==="baked_floor"&&this.styleNight(s.image)}))):n.state==="ready"&&t-n.since>3e4&&(n.uMap.value=n.dayMap,n.uTint.value.set(...yp),n.tex.dispose(),n.tex=null,n.state="idle",n.name==="baked_floor"&&this.styleNight(null)))}styleNight(t){let e=t&&this.assets.style?Mx(t):new Map;for(let n of this.nightRecs.values()){if(!n.name.startsWith("style_"))continue;n.styleNight&&(n.styleNight.dispose(),n.styleNight=null);let s=e.get(n.name);s?(n.styleNight=s,n.uMap.value=s,n.uTint.value.set(1,1,1)):(n.uMap.value=n.dayMap,n.uTint.value.set(...yp))}}setFloors(t){let e=t.length?t:[{id:"_",name:"",order:1}],n=e.map(r=>r.id).join("|");if(e.forEach((r,o)=>{let a=this.byId.get(r.id);a&&(a.name=r.name,a.index=o)}),n===this.sig)return;this.sig=n,this.styles=this.assets.style?fx(e):new Map;let s=new Map(e.map((r,o)=>[r.id,o]));for(let r of this.slots)s.has(r.id)||this.disposeSlot(r);this.slots=e.map((r,o)=>{let a=this.byId.get(r.id);return a||(a={id:r.id,name:r.name,index:o,closed:new Tr(this,this.assets.templates.floor_closed,"closed"),open:null,lift:new mn(1,.5),showOpen:!1},this.group.add(a.closed.root),a.closed.setShown(!1),this.byId.set(r.id,a)),a.index=o,a});for(let[r]of[...this.byId])s.has(r)||this.byId.delete(r);this.activeIndex=Math.min(this.activeIndex,this.slots.length-1),this.activeSlot&&this.applyStyle(this.activeSlot),this.retarget(!1)}applyStyle(t){let e=this.styles.get(t.id);if(!e||!t.open||(px(t.open.obj,e),t.open.walls?.setAccent(e.accent),t!==this.activeSlot))return;let n=this.assets.spots.lounges;this.assets.style.layouts[e.layout].forEach((s,r)=>{let o=n[r];(!o||o.pos.distanceToSquared(s.pos)>1e-6||o.yaw!==s.yaw)&&(n[r]={pos:s.pos.clone(),yaw:s.yaw,lounge:!0})})}disposeSlot(t){t.closed.dispose(),t.open&&(this.pool=this.pool.filter(e=>e!==t.open),t.open.dispose())}get floorCount(){return this.slots.length}get activeSlot(){return this.slots[this.activeIndex]||null}get activeId(){return this.activeSlot?.id??null}get activeY(){return Math.max(0,this.activeIndex)*ls}activeOpen(){return this.activeSlot?.open||null}setActive(t,{intro:e=!1}={}){let n=this.slots.findIndex(o=>o.id===t);if(n<0)return!1;let s=this.activeIndex>=0&&n!==this.activeIndex;this.activeIndex=n;let r=this.slots[n];if(this.acquireOpen(r),this.applyStyle(r),e){for(let o of this.slots)o.lift.snap(1);this.roofLift.snap(1),this.group.visible=!0,this.introDrop=!0}return s&&!e&&!RT?(this.pulseT=0,this.swapped=!1):this.applyShown(),this.retarget(e),e&&(this.cabinY.snap(this.cabinY.target),this.shaftTop.snap(this.shaftTop.target)),!0}applyShown(){this.slots.forEach((t,e)=>{t.showOpen=e===this.activeIndex&&!!t.open})}retarget(t){let e=this.activeIndex;e<0||(this.slots.forEach((n,s)=>{s<=e?n.lift.to(0,t?.05+(e-s)*.08:0):n.lift.to(1)}),this.roofLift.to(1),this.cabinY.to(e*ls),this.shaftTop.to(Math.min(this.slots.length*ls,e*ls+CT+.35)))}acquireOpen(t){if(t.open)return t.open;let e=this.pool.find(s=>!this.slots.some(r=>r.open===s))||this.pool.reduce((s,r)=>r.alpha<s.alpha?r:s,this.pool[0]),n=this.slots.find(s=>s.open===e);return n&&(n.open=null,n.showOpen=!1),e.onSteal?.(),t.open=e,e.floorId=t.id,e.screens.forEach(s=>{s.glow=0,s.target=0}),e}setScreens(t){this.screenTargets=t}setDisplayData(t){this.floorData=t,this.activeOpen()?.walls?.setData(t)}prewarm(t){let e=[this.roof,this.shaft,this.cabin,...this.slots.map(a=>a.closed),...this.pool],n=e.map(a=>a.root.visible);e.forEach(a=>{a.root.visible=!0});let s=this.pool.flatMap(a=>mx(a.obj)).filter(a=>!a.visible);s.forEach(a=>{a.visible=!0});let r=new We(1,1,{type:nn}),o=this.renderer.getRenderTarget();this.renderer.setRenderTarget(r),this.renderer.compile(this.scene,t),this.renderer.setRenderTarget(o),r.dispose(),s.forEach(a=>{a.visible=!1}),e.forEach((a,l)=>{a.root.visible=n[l]})}update(t,e){let n=this.activeIndex,s=this.daylight.night,r=this.slots.length;this.pulseT>=0&&(this.pulseT+=t,!this.swapped&&this.pulseT>=Xo&&(this.swapped=!0,this.applyShown()),this.pulseT>=Xo+Yx&&(this.pulseT=-1));let o=this.pulseT<0?0:this.pulseT<Xo?vi(0,Xo,this.pulseT):1-vi(Xo,Xo+Yx,this.pulseT),a=Math.round(o*AT*4)/4;a!==this.blurPx&&(this.blurPx=a,this.renderer.domElement.style.filter=a?`blur(${a}px)`:"");for(let d of this.slots){d.lift.step(t);let p=d.lift.x*(Cl+Math.max(0,d.index-n)*ls),x=p<Cl*.8,m=d.index*ls+p;d.closed.root.position.y=m,d.closed.setShown(x&&!d.showOpen),d.open&&(d.open.root.position.y=m,d.open.setShown(x&&d.showOpen),d.open.alpha&&this.updateOpen(d,t,e,s))}this.roofLift.step(t);let l=this.roofLift.x*(Cl+Math.max(0,r-n)*ls);this.roof.root.position.y=r*ls-oi+l,this.roof.setShown(l<Cl*.8),this.cabinY.step(t),this.shaftTop.step(t);let c=this.slots[n];this.introDrop&&(!c||c.lift.x<.001&&c.lift.pending===null)&&(this.introDrop=!1);let h=this.introDrop?c.lift.x*Cl:0;this.cabin.root.position.y=this.cabinY.x+h;let u=-oi,f=Math.max(u+.1,this.shaftTop.x);this.shaft.root.position.y=u+h,this.shaft.root.scale.y=(f-u)/this.shaftH,this.updateNightMaps(e)}updateOpen(t,e,n,s){let r=t.open,o=1-Math.exp(-e*3.2),a=this.slots[this.activeIndex]===t;r.screens.forEach((l,c)=>{l&&(l.target=a&&this.screenTargets[c]||0,l.glow+=(l.target-l.glow)*o,l.mat.emissiveIntensity=l.glow*(.32+1.35*s)+s*.03)}),r.walls?.tick(n,s)}};var $x=.32,Kx=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,PT=Kx?3:5,LT=Kx?5:10,NT=`
#include <packing>
#define BQ_LEVEL ${$x.toFixed(3)}
#define BQ_SEARCH ${PT}
#define BQ_TAPS ${LT}
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
}`,DT=`
#ifdef USE_MAP
  {
    vec3 bqD = texture2D( map, vMapUv ).rgb;
    diffuseColor.rgb += diffuse * ( bqRelight( bqD ) - bqD ) * bqDay;
    if ( bqLamp.r + bqLamp.g + bqLamp.b > 0.0 ) diffuseColor.rgb += bqLampPools();
  }
#endif`,vp=i=>(i/=255,i<=.04045?i/12.92:((i+.055)/1.055)**2.4),bp=new WeakMap;function FT(i){if(bp.has(i))return bp.get(i);let t=new I(.83,.82,.78);try{let e=i.image,n=96,s=Math.max(1,Math.round(96*e.height/e.width)),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(e,0,0,n,s);let a=o.getImageData(0,0,n,s).data,l=[];for(let u=0;u<a.length;u+=4){let f=vp(a[u]),d=vp(a[u+1]),p=vp(a[u+2]);l.push([.2126*f+.7152*d+.0722*p,f,d,p])}l.sort((u,f)=>u[0]-f[0]);let c=Math.floor(l.length*.88),h=Math.max(c+1,Math.floor(l.length*.98));t.set(0,0,0);for(let u=c;u<h;u++)t.x+=l[u][1],t.y+=l[u][2],t.z+=l[u][3];t.divideScalar(h-c)}catch{}return bp.set(i,t),t}function Zx(i){let t={bqSun:{value:new dt(0,0,0)},bqDir:{value:new I(0,1,0)},bqDay:{value:1},bqShadowMap:{value:null},bqShadowMatrix:{value:i.shadow.matrix},bqShadowInfo:{value:new _e(1,1,1,0)},bqLampPos:{value:Array.from({length:6},()=>new I(0,-99,0))},bqLamp:{value:new dt(0,0,0)},bqLampCone:{value:new Q(.7,.9)},bqTable:{value:Array.from({length:4},()=>new _e)},bqTableY:{value:new _e(-99,-99,-99,-99)}};return{relight(e){if(e.userData.sunRelit||!e.map)return;e.userData.sunRelit=!0;let n={value:FT(e.map)},s=e.onBeforeCompile,r=e.customProgramCacheKey;e.onBeforeCompile=(o,a)=>{s.call(e,o,a),Object.assign(o.uniforms,t,{bqAlbedo:n}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBqWorld;
varying vec3 vBqNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
	vBqWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
	vBqNormal = normalize( mat3( modelMatrix ) * normal );`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${NT}`).replace("#include <color_fragment>",`${DT}
#include <color_fragment>`)},e.customProgramCacheKey=()=>`${r.call(e)}|sun`,e.needsUpdate=!0},update(e,n,s,r){t.bqDir.value.copy(e),t.bqSun.value.setRGB(...n,ae).multiplyScalar(Math.max(0,s)*(1/$x-1)),t.bqDay.value=r;let o=i.shadow.map,a=i.shadow.camera;t.bqShadowMap.value=o?o.texture:null,t.bqShadowInfo.value.set(a.right-a.left,a.top-a.bottom,a.far-a.near,o?1:0)},lamps(e,n,s,r,o){t.bqLampPos.value.forEach((a,l)=>{e?.[l]?a.copy(e[l]):a.set(0,-99,0)}),t.bqLamp.value.copy(n),t.bqLampCone.value.set(Math.cos(s),Math.cos(s*(1-r))),t.bqTable.value.forEach((a,l)=>{let c=o[l];c&&a.set(c.x0,c.z0,c.x1,c.z1)}),t.bqTableY.value.set(...[0,1,2,3].map(a=>o[a]?o[a].y:-99))}}}var ge=i=>{let t=new dt(i);return t.convertLinearToSRGB(),[t.r,t.g,t.b]},$o=i=>i,UT=$o({night:0,bake:0,lamps:0,windows:0,sunI:2.4,sunC:ge("#FFF1DE"),hemiI:1.05,hemiSky:ge("#F3F2F0"),hemiGnd:ge("#CFC8BE"),fillI:.35,fillC:ge("#E6EEFF"),envI:.5,exposure:1.05,shadow:.34,tint:[1.42,1.43,1.46],floorSun:.72,floorSunC:ge("#FFF6EC"),glassC:ge("#D2E4F2"),glassA:.22,glassE:.12}),OT=$o({night:0,bake:0,lamps:0,windows:.05,sunI:2.6,sunC:ge("#FFEFD9"),hemiI:1,hemiSky:ge("#E1EAFF"),hemiGnd:ge("#C6CAD2"),fillI:.38,fillC:ge("#DCE6FF"),envI:.5,exposure:1.07,shadow:.36,tint:[2.05,2.15,2.35],floorSun:.72,floorSunC:ge("#FFEEDA"),glassC:ge("#A6CCF2"),glassA:.82,glassE:.5}),BT=$o({night:0,bake:0,lamps:.15,windows:.15,sunI:2.8,sunC:ge("#FFA458"),hemiI:.85,hemiSky:ge("#FFD0A4"),hemiGnd:ge("#B48466"),fillI:.3,fillC:ge("#FFC9A4"),envI:.4,exposure:1.05,shadow:.4,tint:[2.3,1.32,.62],floorSun:1,floorSunC:ge("#FFD27E"),glassC:ge("#FFC064"),glassA:.86,glassE:1}),kT=$o({night:.5,bake:.3,lamps:.6,windows:.4,sunI:.3,sunC:ge("#FFC9B0"),hemiI:.8,hemiSky:ge("#B9C2E6"),hemiGnd:ge("#8A8798"),fillI:.25,fillC:ge("#BFC8F0"),envI:.3,exposure:1.04,shadow:.3,tint:[1.3,1.32,1.48],floorSun:0,floorSunC:ge("#FFEBD2"),glassC:ge("#7F98CF"),glassA:.6,glassE:.45}),zT=$o({night:.6,bake:.35,lamps:.85,windows:.7,sunI:.3,sunC:ge("#FF9070"),hemiI:.7,hemiSky:ge("#8C7896"),hemiGnd:ge("#3A3040"),fillI:.2,fillC:ge("#8A80B8"),envI:.28,exposure:1.03,shadow:.32,tint:[1.3,1.02,.84],floorSun:0,floorSunC:ge("#FFD27E"),glassC:ge("#4A5487"),glassA:.8,glassE:.5}),HT=$o({night:1,bake:.6,lamps:1,windows:1,sunI:.2,sunC:ge("#8CA6FF"),hemiI:.4,hemiSky:ge("#6A6158"),hemiGnd:ge("#2A2420"),fillI:.15,fillC:ge("#8C8098"),envI:.2,exposure:1,shadow:.4,tint:[.95,.8,.62],floorSun:0,floorSunC:ge("#FFEBD2"),glassC:ge("#1A2A66"),glassA:.92,glassE:.5});function Yo(i,t,e){let n={};for(let s in i)n[s]=Array.isArray(i[s])?i[s].map((r,o)=>Rl(r,t[s][o],e)):Rl(i[s],t[s],e);return n}var cs=Math.PI/180,Mp={lat:42.7,dec:10,noon:760},VT={"Europe/Sofia":[42.7,23.3],"Europe/Kiev":[50.45,30.5],"Europe/Kyiv":[50.45,30.5],"Europe/Moscow":[55.75,37.6],"Europe/Warsaw":[52.2,21],"Europe/Berlin":[52.5,13.4],"Europe/Paris":[48.85,2.35],"Europe/London":[51.5,-.1],"Europe/Madrid":[40.4,-3.7],"Europe/Rome":[41.9,12.5],"Europe/Istanbul":[41,29],"Asia/Dubai":[25.2,55.3],"Asia/Kolkata":[28.6,77.2],"Asia/Singapore":[1.35,103.8],"Asia/Tokyo":[35.7,139.7],"Australia/Sydney":[-33.9,151.2],"America/New_York":[40.7,-74],"America/Chicago":[41.9,-87.6],"America/Denver":[39.7,-105],"America/Los_Angeles":[34.05,-118.25],"America/Sao_Paulo":[-23.55,-46.6]};function GT(i){if(i.has("lat")&&i.has("lon"))return[Number(i.get("lat")),Number(i.get("lon"))];let t=Intl.DateTimeFormat().resolvedOptions().timeZone;return VT[t]||[45,-new Date().getTimezoneOffset()/4]}function i_(i,t,e){let n=e*cs,s=Math.asin(Math.sin(n)*Math.sin(t)+Math.cos(n)*Math.cos(t)*Math.cos(i)),r=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(n)-Math.tan(t)*Math.cos(n));return[s/cs,r/cs]}function WT(i,t,e){let n=i/864e5-10957.5,s=cs*(357.5291+.98560028*n),r=s+cs*(1.9148*Math.sin(s)+.02*Math.sin(2*s)+3e-4*Math.sin(3*s)+102.9372)+Math.PI,o=cs*23.4397,a=Math.asin(Math.sin(o)*Math.sin(r)),l=Math.atan2(Math.sin(r)*Math.cos(o),Math.cos(r));return i_(cs*(280.16+360.9856235*n+e)-l,a,t)}function qT(i){return i_(cs*(i-Mp.noon)/4,Mp.dec*cs,Mp.lat)}function XT(i,t){let e=vi(-40,40,t),n=Yo(Yo(OT,BT,e),UT,vi(4,30,i));n=Yo(Yo(kT,zT,e),n,vi(-1.5,3,i)),n=Yo(HT,n,vi(-9,-1,i));let s=1-vi(-6,2,i);return n.sunEl=Rl(Math.max(i,5),42,s),n.sunAz=Rl(Le(270-.3*t,235,305),250,s),n}function YT(i,t){let e=t>0;return i<-5?"night":i<2?e?"dusk":"dawn":i<15?e?"golden":"dawn":"day"}function Jx(i){let t=/^(\d{1,2}):(\d{2})$/.exec(String(i||"").trim());return t?Le(Number(t[1]),0,24)*60+Le(Number(t[2]),0,59):null}var $T=2e4,KT=2e3,jx=6,Qx=16759668,ZT=22,JT=4,t_=.78,e_=.75,Us={x:8.3,z:6.3,y0:-.05,y1:3},jT=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,QT=i=>i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshToonMaterial,n_=/^(slab|glass)/,tA=/^table_\d+$/;function s_({scene:i,renderer:t}){let e=new URLSearchParams(location.search);t.shadowMap.enabled=!0,t.shadowMap.type=gr;let n=new Is(16777215,1);n.castShadow=!0,n.shadow.mapSize.setScalar(jT?1024:2048),n.shadow.bias=-5e-4,n.shadow.normalBias=.02,n.shadow.radius=2;let s=new tl(16777215,16777215,1),r=new Is(16777215,.4);r.position.set(6,5,8),i.add(n,n.target,s,r);let o=[];for(let z=0;z<jx;z++){let ot=new pr(Qx,0,0,t_,e_,2);ot.castShadow=!1,ot.position.set(0,-99,0),i.add(ot,ot.target),o.push(ot)}let a=new dt,l=[],c=Zx(n),h=new Map,u=new Set,f=new Set,d={value:0},p={night:0,lampsK:0,windowsK:0,phase:"day",minutes:720,el:45,az:0,params:null},x=null,m=e.get("real")==="1",g=null,_=null,w=null,v=null,S=-1e9,b=-1e9,A=-1e9,y=new I,E=new I,R=new I,P=new dt,N=e.get("time");N&&N!=="auto"&&(x=Jx(N));function k(z){x=z&&z!=="auto"?Jx(z):null,b=S=-1e9}function D(){let z=new Date;if(x!==null&&!m)[p.el,p.az]=qT(x);else{x!==null&&z.setHours(Math.floor(x/60),x%60,0,0);let[ot,lt]=GT(e);[p.el,p.az]=WT(z.getTime(),ot,lt)}p.minutes=x!==null?x:z.getHours()*60+z.getMinutes()+z.getSeconds()/60,w=XT(p.el,p.az),p.phase=YT(p.el,p.az)}function B(){u.clear(),f.clear(),g.group.traverse(ot=>{if(ot.isMesh)for(let lt of Array.isArray(ot.material)?ot.material:[ot.material])lt.userData.nightPatched&&(u.add(lt),c.relight(lt)),lt.name==="glass_pane"&&f.add(lt)});let z=g.activeOpen();if(z?.root.traverse(ot=>{if(!ot.isMesh)return;let Ot=(Array.isArray(ot.material)?ot.material:[ot.material]).every(Bt=>QT(Bt)&&!Bt.transparent)&&!n_.test(ot.name)&&!n_.test(ot.parent?.name||"");ot.castShadow=ot.receiveShadow=Ot}),l=[],z){z.root.updateMatrixWorld(!0);for(let ot of z.obj.children){if(!tA.test(ot.name)||!ot.visible)continue;let lt=new Ke().setFromObject(ot);l.push({x0:lt.min.x,z0:lt.min.z,x1:lt.max.x,z1:lt.max.z,y:lt.max.y-z.root.position.y})}}}function X(){let z=g?.activeOpen()?.root;z?z.getWorldPosition(E):E.set(0,0,0);let ot=E.y;E.y+=(Us.y0+Us.y1)/2,n.target.position.copy(E),n.position.copy(E).addScaledVector(y,30);let lt=n.shadow.camera;lt.position.copy(n.position),lt.lookAt(E),lt.updateMatrixWorld();let Ot=1/0,Bt=-1/0,Zt=1/0,K=-1/0,tt=1/0,mt=-1/0;for(let Ut=0;Ut<8;Ut++)R.set(E.x+(Ut&1?Us.x:-Us.x),ot+(Ut&2?Us.y1:Us.y0),E.z+(Ut&4?Us.z:-Us.z)),R.applyMatrix4(lt.matrixWorldInverse),Ot=Math.min(Ot,R.x),Bt=Math.max(Bt,R.x),Zt=Math.min(Zt,R.y),K=Math.max(K,R.y),tt=Math.min(tt,R.z),mt=Math.max(mt,R.z);lt.left=Ot-.1,lt.right=Bt+.1,lt.bottom=Zt-.1,lt.top=K+.1,lt.near=Math.max(.1,-mt-.5),lt.far=-tt+.5,lt.updateProjectionMatrix()}function $(z){n.color.setRGB(...z.sunC,ae),n.intensity=z.sunI;let ot=Po.degToRad(z.sunEl),lt=Po.degToRad(z.sunAz);y.set(Math.cos(ot)*Math.cos(lt),Math.sin(ot),Math.cos(ot)*Math.sin(lt)),X(),s.color.setRGB(...z.hemiSky,ae),s.groundColor.setRGB(...z.hemiGnd,ae),s.intensity=z.hemiI,r.color.setRGB(...z.fillC,ae),r.intensity=z.fillI,i.environmentIntensity=z.envI,t.toneMappingExposure=z.exposure,d.value=z.bake,p.night=z.night,p.lampsK=z.lamps,p.windowsK=z.windows;for(let[Ot,Bt]of h)Bt==="lamp"?Ot.emissiveIntensity=z.lamps*2.4:Bt==="windows"&&(Ot.emissiveIntensity=z.windows*1.7);for(let Ot of u)Ot.color.setRGB(...z.tint);P.setRGB(...z.glassC,ae);for(let Ot of f)Ot.color.copy(P),Ot.emissive.copy(P).multiplyScalar(z.glassE),Ot.opacity=z.glassA;c.update(y,z.floorSunC,z.floorSun,1-z.bake)}function rt(){let z=v?v():null,ot=z?z.k*p.lampsK:0;for(let Ot=0;Ot<jx;Ot++){let Bt=o[Ot],Zt=z&&z.positions[Ot];Zt?(Bt.position.copy(Zt),Bt.target.position.set(Zt.x,Zt.y-3,Zt.z),Bt.intensity=ZT*ot):Bt.intensity=0}let lt=g?.activeOpen()?.root.position.y??0;a.set(Qx).multiplyScalar(JT*ot),c.lamps(ot>.001?z.positions:null,a,t_,e_,l.map(Ot=>({...Ot,y:Ot.y+lt})))}function Z(z,ot){if(ot-b>$T&&(b=ot,D()),g&&ot-A>KT&&(A=ot,B()),!_)_=w;else{let lt=1-Math.exp(-z/.45);_=Yo(_,w,lt)}if(p.params=_,$(_),rt(),ot-S>1e3){S=ot;let lt=document.documentElement;lt.dataset.daylight!==p.phase&&(lt.dataset.daylight=p.phase),lt.style.setProperty("--night",_.night.toFixed(3))}}let et={uNight:d,state:p,update:Z,setTime:k,track(z,ot){h.set(z,ot)},untrack(z){h.delete(z)},setLampSource(z){v=z},setBuilding(z){g=z,A=-1e9},get shadowOpacity(){return _?_.shadow:.3},get night(){return p.night}};return window.bothq=Object.assign(window.bothq||{},{setTime:k,daylight:p}),et}var r_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var qn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},eA=new Qn(-1,1,1,-1,0,1),Sp=class extends Me{constructor(){super(),this.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new te([0,2,0,0,2,0],2))}},nA=new Sp,Os=class{constructor(t){this._mesh=new Rt(nA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,eA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ar=class extends qn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Lo.clone(t.uniforms),this.material=new rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Os(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Il=class extends qn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},xu=class extends qn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var _u=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ar(r_),this.copyPass.material.blending=ei,this.timer=new il}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Il!==void 0&&(o instanceof Il?n=!0:o instanceof xu&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var yu=class extends qn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new dt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Pl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var vu=class extends qn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Lo.clone(Pl.uniforms),this.material=new Mo({name:Pl.name,uniforms:this.uniforms,vertexShader:Pl.vertexShader,fragmentShader:Pl.fragmentShader}),this._fsQuad=new Os(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===ve&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===al?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_r?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ul?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===hl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var gn={centre:[.5,.45],radii:[.82,.78],stops:[[0,"#FFFFFF"],[.5,"#F8F8FA"],[1,"#E6E7EB"]],shadow:"#0B0C11",layers:[{sigma:4,down:2,w:.4},{sigma:30,down:22,w:.4},{sigma:120,down:70,w:.34}]},Bs=i=>{let t=new dt;return t.setStyle(i,dn),new I(t.r,t.g,t.b)},a_={stops:[[0,"#243056"],[.5,"#141A2E"],[1,"#080B18"]],shadow:"#000000"};function wp(i=!1){let t=i?a_:gn,[e,n]=gn.centre,[s,r]=gn.radii,o=t.stops.map(([a,l])=>`${l} ${(a*100).toFixed(1)}%`).join(", ");return`radial-gradient(ellipse ${s*100}% ${r*100}% at ${e*100}% ${n*100}%, ${o})`}var o_=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,iA=`
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
  }`,sA=`
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
  }`;function rA(i,t){return new We(Math.max(2,i),Math.max(2,t),{type:nn,depthBuffer:!1,minFilter:He,magFilter:He,generateMipmaps:!1})}var bu=class extends qn{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!0,this.maskMat=new Se({color:16777215,toneMapped:!1,side:en,depthTest:!1,depthWrite:!1,fog:!1}),this.blurMat=new rn({uniforms:{tMap:{value:null},texel:{value:new Q},sigma:{value:0}},vertexShader:o_,fragmentShader:iA,depthTest:!1,depthWrite:!1});let[n,s,r]=gn.layers;this.composeMat=new rn({uniforms:{tDiffuse:{value:null},tHold:{value:null},tL0:{value:null},tL1:{value:null},tL2:{value:null},stop0:{value:Bs(gn.stops[0][1])},stop1:{value:Bs(gn.stops[1][1])},stop2:{value:Bs(gn.stops[2][1])},stopMid:{value:gn.stops[1][0]},shadowC:{value:Bs(gn.shadow)},centre:{value:new Q(...gn.centre)},radii:{value:new Q(...gn.radii)},push:{value:[new Q,new Q,new Q]},layerW:{value:new I(n.w,s.w,r.w)}},vertexShader:o_,fragmentShader:sA,depthTest:!1,depthWrite:!1}),this.fsQuad=new Os(this.blurMat),this.t=null,this.size=new Q(1,1),this.setSize(1,1)}setTheme(t){let e=t?a_:gn,n=this.composeMat.uniforms;n.stop0.value.copy(Bs(e.stops[0][1])),n.stop1.value.copy(Bs(e.stops[1][1])),n.stop2.value.copy(Bs(e.stops[2][1])),n.shadowC.value.copy(Bs(e.shadow)),this.dark=!!t}setSize(t,e){this.size.set(t,e);let n=this.t;n&&Object.values(n).forEach(r=>r.dispose());let s=r=>rA(Math.round(t/r),Math.round(e/r));this.t={mask:s(4),cA:s(4),cB:s(4),mA:s(8),mB:s(8),hA:s(16),wA:s(32),wB:s(32)}}blur(t,e,n,s,r,o){let a=this.blurMat.uniforms;a.tMap.value=e.texture,a.texel.value.set(s/e.width,r/e.height),a.sigma.value=o,t.setRenderTarget(n),this.fsQuad.material=this.blurMat,this.fsQuad.render(t)}buildAura(t,e){let n={target:t.getRenderTarget(),auto:t.autoClear,color:t.getClearColor(new dt),alpha:t.getClearAlpha(),shadow:t.shadowMap.enabled},s=this.t;t.shadowMap.enabled=!1,t.autoClear=!0,t.setClearColor(0,0),t.setRenderTarget(s.mask);let r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.maskMat,t.render(this.scene,this.camera),this.scene.overrideMaterial=r,t.autoClear=!1;let o=gn.layers.map((a,l)=>Math.min(13,a.sigma*e/[4,8,32][l]));this.blur(t,s.mask,s.cB,1,0,o[0]),this.blur(t,s.cB,s.cA,0,1,o[0]),this.blur(t,s.mask,s.mB,0,0,0),this.blur(t,s.mB,s.hA,0,0,0),this.blur(t,s.hA,s.wA,0,0,0),this.blur(t,s.wA,s.wB,1,0,o[2]),this.blur(t,s.wB,s.wA,0,1,o[2]),this.blur(t,s.mB,s.mA,1,0,o[1]),this.blur(t,s.mA,s.mB,0,1,o[1]),t.setRenderTarget(n.target),t.autoClear=n.auto,t.setClearColor(n.color,n.alpha),t.shadowMap.enabled=n.shadow}render(t,e,n){let s=this.composeMat.uniforms,r=this.size.y,o=Math.max(.3,this.camera.zoom||1),a=r/1080*Math.pow(o,.55),l=1/(1+.35*Math.max(0,o-1));this.buildAura(t,a);let c=this.t;s.tDiffuse.value=n.texture,s.tHold.value=s.tL0.value=c.cA.texture,s.tL1.value=c.mB.texture,s.tL2.value=c.wA.texture,gn.layers.forEach((h,u)=>s.push.value[u].set(0,h.down*a/r)),s.layerW.value.set(gn.layers[0].w,gn.layers[1].w*l,gn.layers[2].w*l),this.fsQuad.material=this.composeMat,t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(),this.fsQuad.render(t)}dispose(){Object.values(this.t).forEach(t=>t.dispose()),this.maskMat.dispose(),this.blurMat.dispose(),this.composeMat.dispose(),this.fsQuad.dispose()}};var l_={name:"BotHQTiltShift",uniforms:{tDiffuse:{value:null},dir:{value:new Q(1,0)},focus:{value:.5},band:{value:.24},falloff:{value:.5},strength:{value:1.5}},vertexShader:`
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
    }`};function oA(){return new URLSearchParams(location.search).get("tiltshift")!=="0"}function c_(i,t,e){let n=i.getSize(new Q),s=i.getPixelRatio(),r=new We(n.x*s,n.y*s,{type:nn,samples:4}),o=new _u(i,r);o.setPixelRatio(s),o.renderTarget2.dispose(),o.renderTarget2=new We(n.x*s,n.y*s,{type:nn}),o.writeBuffer=o.renderTarget2,o.readBuffer=o.renderTarget1,o.addPass(new yu(t,e));let a=new Ar(l_),l=new Ar(l_);a.enabled=l.enabled=oA(),o.addPass(a),o.addPass(l),o.addPass(new vu);let c=new bu(t,e);o.addPass(c);let h={composer:o,setSize(u,f){o.setPixelRatio(i.getPixelRatio()),o.setSize(u,f);let d=u*i.getPixelRatio(),p=f*i.getPixelRatio();a.uniforms.dir.value.set(1/d,0),l.uniforms.dir.value.set(0,1/p),this.base=1.05*i.getPixelRatio(),a.uniforms.strength.value=l.uniforms.strength.value=this.base},setDark(u){c.setTheme(!!u)},render(u,f,d=1){a.uniforms.focus.value=l.uniforms.focus.value=u,a.uniforms.strength.value=l.uniforms.strength.value=this.base*d,o.render(f)}};return h.setSize(n.x,n.y),h}var Su=Object.freeze(["coffee","fridge","window","plant","tasks","screen","couch","elevator","chat","pace"]),h_=Object.freeze([12e4,3e5]),u_=Object.freeze([3500,7e3]),Ko=-1.3,Mu=Object.freeze([-7,3.2]),je=.48;function Ep(i,t){return i+Math.random()*(t-i)}function d_(i){let t=2166136261;for(let e of String(i))t^=e.codePointAt(0),t=Math.imul(t,16777619);return(t>>>0)/4294967295}function wu(i={},t="sofa"){let e=(i.lounges||[]).filter(Boolean),n=(i.desks||[]).filter(Boolean),s=e[0]?{x:e[0].pos.x,y:je,z:e[0].pos.z+.85,yaw:Math.PI}:{x:5.9,y:je,z:1.4,yaw:Math.PI},r=e[1]||e[0]?(()=>{let g=e[1]||e[0];return{x:g.pos.x,y:g.pos.y??je,z:g.pos.z,yaw:g.yaw||0,sit:.36,lounge:!0}})():{x:5.9,y:je,z:.12,yaw:0,sit:.36,lounge:!0},o=t==="media"?{coffee:{x:3.7,y:je,z:2.45,yaw:-Math.PI/2},fridge:{x:3.55,y:je,z:1.2,yaw:-Math.PI/2}}:t==="meeting"?{coffee:{x:4.2,y:je,z:2.9,yaw:0},fridge:{x:6.9,y:je,z:2.9,yaw:Math.PI}}:{coffee:{x:s.x-.55,y:je,z:s.z,yaw:s.yaw},fridge:{x:6.55,y:je,z:-4.55,yaw:Math.PI}},a={x:7.35,y:je,z:-3.15,yaw:-Math.PI/2},l={x:-2.1,y:je,z:-5.15,yaw:Math.PI},c={x:-6.85,y:je,z:.1,yaw:-Math.PI/2},h={x:-6.85,y:je,z:-4.3,yaw:-Math.PI/2},u={x:7.55,y:je,z:-2.6,yaw:Math.PI/2},f=n[Math.min(6,n.length-1)]||n[0],d=f?{x:f.pos.x+.85,y:je,z:f.pos.z,yaw:Math.atan2(-.85,0)}:{x:-.3,y:je,z:-2.2,yaw:0},p={x:-4,y:je,z:Ko,yaw:Math.PI/2},x={x:1.2,y:je,z:Ko,yaw:-Math.PI/2},m={coffee:{act:"coffee",...o.coffee},fridge:{act:"fridge",...o.fridge},window:{act:"window",...l},plant:{act:"plant",...a},tasks:{act:"tasks",...c},screen:{act:"screen",...h},couch:{act:"couch",...r},elevator:{act:"elevator",...u},chat:{act:"chat",...d},pace:{act:"pace",...p,waypoints:[p,x,p]}};return Su.map(g=>{let _=m[g];return{act:g,pos:{x:_.x,y:_.y??je,z:_.z},yaw:_.yaw||0,sit:_.sit||0,lounge:!!_.lounge,waypoints:_.waypoints||null}})}function f_(i,t){let e=(i+t)/2;return Math.abs(e-Mu[0])<=Math.abs(e-Mu[1])?Mu[0]:Mu[1]}function aA(i,t){let e=Math.min(i,t),n=Math.max(i,t);return e<-2.85&&n>-3.95||e<1.35&&n>.25}function Ll(i,t){let e=i.x,n=i.z,s=t.x,r=t.z,o=t.y??i.y??je;if(Math.hypot(s-e,r-n)<1.2)return[{x:s,y:o,z:r}];if(!aA(n,r)&&Math.abs(n-r)<1.4)return[{x:s,y:o,z:r}];let l=f_(e,s),c=[],h=(d,p)=>{let x=c[c.length-1];x&&Math.hypot(x.x-d,x.z-p)<.08||Math.hypot(e-d,n-p)<.08&&!c.length||c.push({x:d,y:o,z:p})};Math.abs(e-l)>.35&&h(l,n),Math.abs(n-Ko)>.35&&h(l,Ko);let u=f_(s,s);u!==l&&Math.abs(s-l)>2.5&&h(u,Ko);let f=c.length?c[c.length-1].x:l;return Math.abs(r-Ko)>.35&&h(f,r),h(s,r),c.length?c:[{x:s,y:o,z:r}]}function Rr(i=!1){return i?Ep(5e3,9e3):Ep(h_[0],h_[1])}function lA(){return Ep(u_[0],u_[1])}function cA(i,{busyIds:t=new Set,preferWorking:e=!1}={}){let n=(i||[]).filter(c=>c&&c.id&&!t.has(c.id));if(!n.length)return null;let s=n.filter(c=>(c.effective_status||c.status)!=="working"),r=n.filter(c=>(c.effective_status||c.status)==="working"),o=!e&&s.length&&Math.random()>.2||s.length?s:r;if(!o.length)return null;let a=null,l=-1;for(let c of o){let h=d_(c.id)*.35+Math.random();h>l&&(a=c,l=h)}return a}function hA(i,t=null){let e=i||[];if(!e.length)return null;let n=e.filter(r=>r.act!==t),s=n.length?n:e;return s[Math.floor(Math.random()*s.length)]||null}function p_(i,{fast:t=!1}={}){return{floorId:i,nextAt:uA()+Rr(t)*(.4+d_(i)*.6),walkerId:null,phase:"idle",home:null,target:null,until:0,lastAct:null,fast:t}}function uA(){return typeof performance<"u"&&performance.now?performance.now():Date.now()}function m_(i,t){let e=t.now;if(i.phase==="idle"){if(e<i.nextAt)return i;let n=new Set(t.busyIds||[]);for(let l of t.bots||[])(t.isUserBusy?.(l.id)||t.isTraveling?.(l.id))&&n.add(l.id);let s=cA(t.bots,{busyIds:n}),r=hA(t.interacts,i.lastAct);if(!s||!r)return i.nextAt=e+Rr(i.fast),i;let o=t.homeSpotFor(s);if(!o?.pos)return i.nextAt=e+Rr(i.fast),i;let a;if(r.waypoints&&r.waypoints.length){a=[];let l=o.pos;for(let c of r.waypoints)a=a.concat(Ll(l,c)),l=c}else a=Ll(o.pos,r.pos);return i.walkerId=s.id,i.phase="outbound",i.home={pos:{x:o.pos.x,y:o.pos.y,z:o.pos.z},yaw:o.yaw||0},i.target=r,i.lastAct=r.act,t.beginTrip?.(s.id),t.startTravel?.(s.id,a,r.yaw),i}if(!i.walkerId)return i.phase="idle",i.nextAt=e+Rr(i.fast),i;if(t.isUserBusy?.(i.walkerId))return t.clearAct?.(i.walkerId),t.endTrip?.(i.walkerId),i.phase="idle",i.walkerId=null,i.target=null,i.home=null,i.nextAt=e+Rr(i.fast),i;if(i.phase==="outbound")return t.isTraveling?.(i.walkerId)||(i.phase="act",i.until=e+lA()*(i.target?.act==="pace"?.55:1),t.setAct?.(i.walkerId,i.target?.act||"idle",i.target?.yaw||0)),i;if(i.phase==="act"){if(e<i.until)return i;let n=i.home;if(!n?.pos)return t.endTrip?.(i.walkerId),i.phase="idle",i.walkerId=null,i.nextAt=e+Rr(i.fast),i;let s=t.actorPos?.(i.walkerId)||n.pos,r=Ll(s,n.pos);return i.phase="inbound",t.clearAct?.(i.walkerId),t.startTravel?.(i.walkerId,r,n.yaw),i}return i.phase==="inbound"&&(t.isTraveling?.(i.walkerId)||(t.clearAct?.(i.walkerId),t.endTrip?.(i.walkerId),i.phase="idle",i.walkerId=null,i.target=null,i.home=null,i.nextAt=e+Rr(i.fast))),i}function g_(i){if(!Array.isArray(i)||i.length!==Su.length)throw new Error(`expected ${Su.length} interacts, got ${i?.length}`);let t=new Set(i.map(e=>e.act));for(let e of Su)if(!t.has(e))throw new Error(`missing interact ${e}`);return!0}var Eu={working:"#34C759",idle:"#A1A1A6",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF"},fA={waiting_user:"Waiting for you",error:"Error",stuck:"Stuck?",done:"Done",working:"Working",idle:"Resting"},dA=Math.PI/4,Tp=.42,x_=1,Ap=3.5,pA=.9,mA=1.2,gA=.034,xA=Au([[0,"rgba(255,255,255,0.95)"],[.45,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),_A=Au([[0,"rgba(0,0,0,0.38)"],[.6,"rgba(0,0,0,0.12)"],[1,"rgba(0,0,0,0)"]]),yA=Au([[0,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.42)"],[1,"rgba(255,255,255,0)"]]),vA=Au([[0,"rgba(255,255,255,0)"],[.6,"rgba(255,255,255,0)"],[.8,"rgba(255,255,255,0.95)"],[.9,"rgba(255,255,255,0.3)"],[1,"rgba(255,255,255,0)"]]),bA=new qe(2,2),MA=.95,Tu=class{constructor(t,e){this.id=t.id,this.ctx=e,this.phase=RA(t.id)%1e3/1e3*Math.PI*2,this.status=null,this.hovered=!1,this.selected=!1,this.anim=null,this.nextBlink=1+Math.random()*3,this.blinkT=-1,this.nextAction=1+Math.random()*2,this.hopCooldown=.6,this.retiring=!1,this.dead=!1,this.hostAlpha=1,this.tagKey="",this.userBusyUntil=0,this.ambientAct=null,this._pathQueue=null,this._ambientTrip=!1,this._reseatPending=!1,this.yawS=new mn(Tp,.3),this.scaleS=new mn(1,.28),this.eyeX=new mn(0,.16),this.eyeY=new mn(0,.16),this.modelScale=1,this.root=new se,this.pivot=new se,this.modelWrap=new se,this.pivot.add(this.modelWrap),this.root.add(this.pivot);let n=new Rt(new qe(.85,.85),new Se({map:_A,transparent:!0,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.006,n.renderOrder=1,this.pivot.add(n),this.ring=new Rt(new qe(1.5,1.5),new Se({map:xA,transparent:!0,depthWrite:!1,color:Eu.idle,opacity:0})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=1,this.root.add(this.ring),this.tagEl=document.createElement("div"),this.tagEl.className="hqt",this.tagEl.dataset.mode="off",this.tagEl.innerHTML='<div class="hqt-pill"><i class="hqt-dot"></i><span class="hqt-text"></span></div><div class="hqt-stem"></div>',this.tagText=this.tagEl.querySelector(".hqt-text"),this.tag=new nu(this.tagEl),this.tag.center.set(.5,0),this.tag.position.y=x_+.24,this.tag.visible=!1,this.pivot.add(this.tag),this.setPlaceholderModel(t.color),e.parent.add(this.root)}setPlaceholderModel(t){let e=new Rt(new ur(.46,40,28),SA(t));e.scale.set(1,.95,.82),e.position.y=.44;let n=new Ba(.042,.085,6,12),s=new Ie({color:1315863,roughness:.25}),r=new Rt(n,s);r.position.set(-.12,.52,.36);let o=new Rt(n,s);o.position.set(.12,.52,.36);let a=new se;a.add(e,r,o),this.modelScale=1,this.useModel(a,[r,o],!0)}setModel(t,e){let n=[];t.traverse(l=>{/^eye_[LR]/.test(l.name)&&n.push(l),l.isMesh&&e&&/body/.test(l.name+(l.parent?.name||""))&&(l.material=l.material.clone(),l.material.color.set(e))}),n=n.filter(l=>!n.some(c=>c!==l&&AA(c,l)));let s=new Ke().setFromObject(t),r=s.getSize(new I),o=x_/Math.max(r.x,r.y,r.z,.01);t.scale.multiplyScalar(o),s.setFromObject(t);let a=s.getCenter(new I);t.position.x-=a.x,t.position.z-=a.z,t.position.y-=s.min.y,this.modelScale=t.scale.x||1,s.setFromObject(t),this.tag.position.y=s.max.y+.24,this.useModel(t,n,!1)}useModel(t,e,n){for(let s of this.pickMeshes||[])this.ctx.pickables.delete(s);this.modelWrap.clear(),this.modelWrap.add(t),this.eyes=e,this.eyeBase=e.map(s=>s.scale.y),this.eyePos=e.map(s=>s.position.clone()),this.pickMeshes=[],t.traverse(s=>{s.isMesh&&(s.userData.actorId=this.id,this.pickMeshes.push(s),this.retiring||this.ctx.pickables.add(s))}),this.placeholder=n}update(t,e,n){let s=t.effective_status||t.status,r=s!==this.status,o=this.status;this.status=s,this.bot=t;let a=Eu[s]||Eu.idle;this.ring.material.color.set(a),this.tagEl.dataset.status=s,this.tagEl.style.setProperty("--c",a),this.selected=n.selectedBot===t.id,this.renderTag(),e&&this._reseatPending?(this._reseatPending=!1,this._ambientTrip=!1,this.cancelTravel(),this.spot=e,!this.root.position||__(this.root.position,e.pos)<.04?(this.root.position.copy(e.pos),this.baseYaw=e.yaw):this.travelTo(e)):e&&(!this.spot||__(this.spot.pos,e.pos)>1e-4)&&(this._ambientTrip?this.spot=e:this.spot?(this.travelTo(e),this.spot=e):(this.dropIn(e),this.spot=e)),this.ring.position.y=.012-(this.spot?this.spot.pos.y:0),r&&o&&(s==="done"?(this.celebrate(),this.hop(.45)):(s==="waiting_user"||s==="error")&&this.hop(.3))}renderTag(){let t=this.status,e=this.bot;if(!e)return;let n=t==="waiting_user"||t==="error"||t==="stuck",s=this.selected?"sel":n?"attn":this.hovered?"hover":"off",r=e.name||"";if(s==="attn"){let a=wA(t,e.step);r=this.hovered?`${e.name} \xB7 ${a}`:a}let o=`${s}|${t}|${r}`;o!==this.tagKey&&(this.tagKey=o,this.tagEl.dataset.mode=s,this.tagText.textContent=r,this.tagEl.title="")}spotIsLounge(){return!!this.spot&&(this.spot.lounge||this.spot.meeting)}isUserBusy(t=performance.now()){return t<(this.userBusyUntil||0)}markUserBusy(t=12e3){this.userBusyUntil=Math.max(this.userBusyUntil||0,performance.now()+t),this.ambientAct=null,this._reseatPending=!0}setAmbientAct(t,e){this.ambientAct=t||null,e!=null&&(this.baseYaw=e)}clearAmbientAct(){this.ambientAct=null}isTraveling(){return!!(this.anim&&this.anim.kind==="travel")||!!(this._pathQueue&&this._pathQueue.length)}cancelTravel(){this.anim=null,this._pathQueue=null}beginAmbientTrip(){this._ambientTrip=!0,this.ambientAct=null}endAmbientTrip(){this._ambientTrip=!1,this.ambientAct=null,this.cancelTravel()}travelPath(t,e){let n=(t||[]).map(s=>({x:s.x,y:s.y??this.spot?.pos?.y??.48,z:s.z})).filter(s=>Number.isFinite(s.x)&&Number.isFinite(s.z));n.length&&(this._pathQueue=n.slice(1),this._pathFinalYaw=e,this.travelTo({pos:n[0],yaw:e??this.baseYaw??0},{direct:!0}))}setHovered(t){this.hovered!==t&&(this.hovered=t,t&&!this.anim&&this.hop(.2),this.renderTag())}retire(){if(!this.retiring){this.retiring=!0,this.hovered=!1,this.scaleS.to(0);for(let t of this.pickMeshes||[])this.ctx.pickables.delete(t);this.tagEl.dataset.mode="off",this.tag.visible=!1}}dropIn(t){this.root.position.copy(t.pos),this.baseYaw=t.yaw,this.yawS.snap(t.yaw+Tp),this.anim={kind:"drop",t:-(this.ctx.dropDelay||0),dur:.75,from:2.4},this.scaleS.snap(this.ctx.dropDelay>0?.001:1),this.ctx.dropDelay>0&&this.scaleS.to(1,this.ctx.dropDelay)}travelTo(t,{direct:e=!1}={}){let n=t.pos?.clone?t.pos.clone():new I(t.pos.x,t.pos.y??.48,t.pos.z),s=t.yaw??this._pathFinalYaw??this.baseYaw??0,r=this.root.position.clone(),o=r.distanceTo(n);if(!e&&!this._pathQueue?.length&&o>=1.2){this.travelPath(Ll(r,n),s);return}if(Fs||o<.05){this.root.position.copy(n),this.baseYaw=s,this._continuePath(s);return}let a=new I().subVectors(n,r);this.anim={kind:"travel",t:0,dur:Math.max(.8,o/2.6),from:r,to:n,toYaw:s,travelYaw:Math.atan2(a.x,a.z)}}_continuePath(t){if(!this._pathQueue||!this._pathQueue.length){this._pathQueue=null,t!=null&&(this.baseYaw=t);return}let e=this._pathQueue.shift(),n=this._pathQueue.length?Math.atan2(e.x-this.root.position.x,e.z-this.root.position.z):this._pathFinalYaw??t;this.travelTo({pos:e,yaw:n},{direct:!0})}hop(t){Fs||this.anim||this.retiring||(this.anim={kind:"hop",t:0,dur:.62,h:t})}celebrate(){if(Fs||this.retiring)return;this.endCelebration();let t=new dt(Eu.done),e=new Rt(bA,new Se({map:vA,color:t,transparent:!0,depthWrite:!1,opacity:0}));e.rotation.x=-Math.PI/2,e.position.y=this.ring.position.y+.003,e.renderOrder=2;let n=new Ia(new fo({map:yA,color:t,transparent:!0,depthWrite:!1,opacity:0}));n.position.y=Math.max(.3,this.tag.position.y-.24)*.55,n.renderOrder=2,this.root.add(e,n),this.fx={t:0,ripple:e,halo:n},this.joy=.75}endCelebration(){if(this.fx){for(let t of[this.fx.ripple,this.fx.halo])t.removeFromParent(),t.material.dispose();this.fx=null}}tickCelebration(t){let e=this.fx;e.t+=t;let n=e.t/MA;if(n>=1){this.endCelebration();return}let s=1-(1-n)**3;e.ripple.scale.setScalar(.4+1.6*s),e.ripple.material.opacity=.8*(1-n)**1.3;let r=Math.min(1,e.t/.55);e.halo.scale.setScalar(.8+1.3*(1-(1-r)**2)),e.halo.material.opacity=.6*Math.sin(Math.PI*r)}tick(t,e){let n=this.pivot,s=this.status,r=0,o=1,a=1,l=0,c=0,h=0;if(!Fs){let S=Math.sin(e*2.1+this.phase);if(a=1+.018*S,o=1-.012*S,s==="working"&&!this.ambientAct){let b=Math.abs(Math.sin(e*12.5+this.phase)),A=Math.sin(e*6.2+this.phase);r=.022*b,l=.11+.05*A,c=.035*Math.sin(e*5.1+this.phase*1.3),a=1+.028*b,o=1-.018*b,this.nextAction-=t,this.nextAction<=0&&!this.anim&&(this.hop(.14+.06*Math.random()),this.nextAction=1.05+Math.random()*.85)}if(s==="stuck"&&(c=.09*Math.sin(e*1.3+this.phase)),s==="error"){let b=(e+this.phase)%1.6;b<.45&&(h=.03*Math.sin(b*70))}if(s==="waiting_user"&&!this.anim&&(this.nextAction-=t,this.nextAction<=0&&(this.hop(.32),this.nextAction=1.7+Math.random()*.6)),this.ambientAct&&!this.anim){let b=this.ambientAct;b==="coffee"||b==="fridge"||b==="plant"||b==="tasks"||b==="screen"?(l=.18+.04*Math.sin(e*4+this.phase),r=.01*Math.abs(Math.sin(e*5+this.phase))):b==="window"||b==="elevator"?(a=1.04+.02*Math.sin(e*2.4+this.phase),l=-.08):b==="chat"?c=.12*Math.sin(e*3.2+this.phase):b==="couch"&&(a=.92,r=-.02)}}if(this.anim){let S=this.anim;S.t+=t;let b=Le(S.t/S.dur,0,1);if(S.kind==="hop")({y:r,sx:o,sy:a}=EA(b,S.h));else if(S.kind==="drop"){S.t<0&&(r=S.from);let A=Math.min(1,b/.55);S.t>=0&&(r=S.from*(1-A*A)),b>.55&&({sx:o,sy:a}=y_((b-.55)/.45))}else if(S.kind==="travel"){let A=TA(b);this.root.position.lerpVectors(S.from,S.to,A);let y=Math.max(1,Math.round(S.dur/.42)),E=b*y%1;r=.55*Math.sin(E*Math.PI),a=1+.12*Math.sin(E*Math.PI),o=1-.07*Math.sin(E*Math.PI),this.baseYaw=b<.92?S.travelYaw:S.toYaw}S.t>=S.dur&&(S.kind==="travel"?(this.root.position.copy(S.to),this.baseYaw=S.toYaw,this.anim=null,this._continuePath(S.toYaw)):this.anim=null)}let u=this.ctx.cursor,f=0,d=0,p=99;if(u?.active&&!this.retiring&&this.hostAlpha>.6){let S=u.x-this.root.position.x,b=u.z-this.root.position.z;p=Math.hypot(S,b),p<Ap&&(f=vi(Ap,Ap-1.3,p),d=Math.atan2(S,b))}this.hopCooldown-=t,p<pA&&this.hopCooldown<=0&&!this.anim&&!Fs&&(this.hop(.26),this.hopCooldown=mA);let x=(this.baseYaw||0)+(this.anim?.kind==="travel"?0:Tp),m=x;if(this.hovered||this.selected)m=dA;else if(f>0){let b=!this.spotIsLounge()&&s!=="idle"?.8:1.9;m=x+Le(Rp(d,x),-b,b)*f}this.yawS.target=this.yawS.x+Rp(m,this.yawS.x),this.yawS.step(t);let g=this.selected?1.06:1,_=this.scaleS.step(t);if(n.position.set(h,r,0),n.scale.set(o*g*_,a*g*_,o*g*_),n.rotation.set(l,this.yawS.x,c,"YXZ"),f>0&&!this.hovered&&!this.selected){let S=Rp(d,this.yawS.x);this.eyeX.to(Math.sin(Le(S,-1.2,1.2))*gA*f),this.eyeY.to(-.012*f)}else this.eyeX.to(0),this.eyeY.to(0);this.eyeX.step(t),this.eyeY.step(t);let w=s==="working"?.28+.14*Math.sin(e*4.2+this.phase):s==="waiting_user"||s==="error"?.4+.25*(.5+.5*Math.sin(e*5)):s==="stuck"?.3+.15*Math.sin(e*2):0,v=this.selected?.8:this.hovered?Math.max(.4,w):w;this.ring.material.opacity=v*Le(_,0,1),this.ring.scale.setScalar(this.selected?1.12:1),this.fx&&this.tickCelebration(t),this.tag.visible=this.tagEl.dataset.mode!=="off"&&this.hostAlpha>.5&&!this.retiring&&this.scaleS.x>.6,this.tickEyes(t),this.retiring&&this.scaleS.x<.03&&(this.dead=!0,this.dispose())}tickEyes(t){if(!this.eyes.length)return;let e=this.status,n=1;if(e==="idle"&&!this.spotIsLounge()?n=.12:e==="error"?n=.55:e==="stuck"&&(n=.7),n>.5&&!Fs&&(this.nextBlink-=t,this.nextBlink<=0&&(this.blinkT=0,this.nextBlink=2.2+Math.random()*3.5),this.blinkT>=0)){this.blinkT+=t;let r=this.blinkT/.16;r>=1?this.blinkT=-1:n*=Math.max(.1,Math.abs(1-2*r))}this.joy>0&&(this.joy-=t,n=Math.min(n,.32));let s=1/this.modelScale;this.eyes.forEach((r,o)=>{r.scale.y=this.eyeBase[o]*n,r.position.x=this.eyePos[o].x+this.eyeX.x*s,r.position.y=this.eyePos[o].y+this.eyeY.x*s})}dispose(){this.endCelebration();for(let t of this.pickMeshes||[])this.ctx.pickables.delete(t);this.tagEl.remove(),this.root.removeFromParent()}};function SA(i){return new Ze({color:i,roughness:.32,clearcoat:1,clearcoatRoughness:.18,sheen:.3})}function __(i,t){if(!i||!t)return 1/0;let e=i.x-t.x,n=(i.y||0)-(t.y||0),s=i.z-t.z;return e*e+n*n+s*s}function wA(i,t){let e=(t||"").trim();return i==="stuck"||!e?fA[i]||"":(e=e.charAt(0).toUpperCase()+e.slice(1),e.length>34?`${e.slice(0,33).trimEnd()}\u2026`:e)}function EA(i,t){if(i<.15){let e=i/.15;return{y:0,sx:1+.12*e,sy:1-.18*e}}if(i<.7){let e=(i-.15)/.55;return{y:t*Math.sin(e*Math.PI),sx:.93,sy:1.12}}return{y:0,...y_((i-.7)/.3)}}function y_(i){let t=Math.sin(i*Math.PI)*(1-i);return{sx:1+.16*t,sy:1-.2*t}}var TA=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Rp(i,t){return((i-t+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function AA(i,t){for(let e=t.parent;e;e=e.parent)if(e===i)return!0;return!1}function RA(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Au(i){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);for(let[r,o]of i)n.addColorStop(r,o);e.fillStyle=n,e.fillRect(0,0,128,128);let s=new gi(t);return s.colorSpace=ae,s}var Cp=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon"],v_=[...Cp,"rounded_cube","cone","trio"],b_=["none","glasses","stem","antenna","bow"],CA=/^#?[0-9a-f]{6}$/i;function M_(i){if(typeof i!="string")return null;let t=i.trim().toLowerCase().replace(/[\s-]+/g,"_");return v_.includes(t)?t:null}function S_(i){if(typeof i!="string")return"none";let t=i.trim().toLowerCase();return b_.includes(t)?t:"none"}function w_(i){return typeof i=="string"&&CA.test(i.trim())?`#${i.trim().replace("#","").toUpperCase()}`:null}function Ip(i){let t=2166136261,e=String(i);for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function E_(i){return Cp[(Ip(`shape:${i}`)>>>4)%Cp.length]}var Nl=i=>i*Math.PI/180,IA=(i,t,e)=>i+(t-i)*e;function PA(i,t,e,n=720){let s=[];for(let r=0;r<n;r++){let o=2*Math.PI*r/n,a=Math.cos(o),l=Math.sin(o),c=(Math.abs(a/i)**e+Math.abs(l/t)**e)**(-1/e);s.push([c*a,c*l])}return s}function LA(i,t,e){let n=[];for(let s=0;s<i;s++)n.push([t*Math.cos(Nl(e+360*s/i)),t*Math.sin(Nl(e+360*s/i))]);return n}function NA(i,t,e=24){let n=i.length,s=[];for(let o=0;o<n;o++){let a=[i[(o+1)%n][0]-i[o][0],i[(o+1)%n][1]-i[o][1]],l=Math.hypot(a[0],a[1]);s.push([a[1]/l,-a[0]/l])}let r=[];for(let o=0;o<n;o++){let a=s[(o+n-1)%n],l=Math.atan2(a[1],a[0]),c=Math.atan2(s[o][1],s[o][0]);for(;c<l;)c+=2*Math.PI;for(let h=0;h<e;h++){let u=IA(l,c,h/(e-1));r.push([i[o][0]+t*Math.cos(u),i[o][1]+t*Math.sin(u)])}}return r}function DA(i,t,e,n,s=1440){let r=[];for(let o=0;o<s;o++){let a=2*Math.PI*o/s,l=((1+Math.cos(i*(a-Nl(n))))/2)**e,c=t+(1-t)*l;r.push([c*Math.cos(a),c*Math.sin(a)])}return r}function FA(i,t=96){let e=[];for(let[o,a,l]of i)for(let c=0;c<t;c++){let h=2*Math.PI*c/t;e.push([o+l*Math.cos(h),a+l*Math.sin(h)])}e.sort((o,a)=>o[0]-a[0]||o[1]-a[1]);let n=(o,a,l)=>(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]),s=[],r=[];for(let o of e){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}for(let o=e.length-1;o>=0;o--){let a=e[o];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}return s.slice(0,-1).concat(r.slice(0,-1))}function UA(i,t=720){let e=[];for(let n=0;n<t;n++){let s=2*Math.PI*n/t,r=i[0];for(let o=1;2*o-1<i.length;o++)r+=i[2*o-1]*Math.cos(o*s)+(i[2*o]??0)*Math.sin(o*s);e.push([r*Math.cos(s),r*Math.sin(s)])}return e}function OA(i,t){let e=Math.cos(Nl(t)),n=Math.sin(Nl(t));return i.map(([s,r])=>[s*e-r*n,s*n+r*e])}function T_(i){let t;if(i.kind==="sup")t=PA(i.a,i.b,i.n);else if(i.kind==="star")t=DA(i.k,i.rin,i.p,i.tip);else if(i.kind==="poly")t=NA(LA(i.n,i.R-i.rr,i.rot??90),i.rr),i.sy&&(t=t.map(([e,n])=>[e,n*i.sy]));else if(i.kind==="hull")t=FA(i.circles);else if(i.kind==="fourier")t=UA(i.c);else throw new Error(`outline ${i.kind}`);return i.rotate?OA(t,i.rotate):t}function Pp(i,t,e=[0,0]){let n=i.length,s=new Float64Array(t);for(let r=0;r<t;r++){let o=2*Math.PI*r/t,a=Math.cos(o),l=Math.sin(o),c=0;for(let h=0;h<n;h++){let u=i[h][0]-e[0],f=i[h][1]-e[1],d=i[(h+1)%n],p=d[0]-e[0]-u,x=d[1]-e[1]-f,m=a*x-l*p;if(Math.abs(m)<1e-12)continue;let g=(u*x-f*p)/m,_=(u*l-f*a)/m;_>=-1e-9&&_<=1+1e-9&&g>c&&(c=g)}s[r]=c}return s}function Ru(i,t=1){let e=i.length,n=Float64Array.from(i);for(let s=0;s<t;s++){let r=new Float64Array(e);for(let o=0;o<e;o++)r[o]=.25*n[(o+e-1)%e]+.5*n[o]+.25*n[(o+1)%e];n=r}return n}var Ir=.8,BA=.018;var A_=.05,ks=i=>i*Math.PI/180,Bp=[1,0,0,0,1,0,0,0,1],Pu=(i,t)=>[i[0]*t[0]+i[1]*t[1]+i[2]*t[2],i[3]*t[0]+i[4]*t[1]+i[5]*t[2],i[6]*t[0]+i[7]*t[1]+i[8]*t[2]];function U_(i,t){let e=new Array(9);for(let n=0;n<3;n++)for(let s=0;s<3;s++)e[n*3+s]=i[n*3]*t[s]+i[n*3+1]*t[3+s]+i[n*3+2]*t[6+s];return e}var Vp=i=>{let t=Math.cos(ks(i)),e=Math.sin(ks(i));return[t,-e,0,e,t,0,0,0,1]};function kA(i){let t=i[2];if(t>.99999)return Bp;let e=[-i[1],i[0],0],n=[0,-e[2],e[1],e[2],0,-e[0],-e[1],e[0],0],s=U_(n,n);return Bp.map((r,o)=>r+n[o]+s[o]/(1+t))}var Jo=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},Cr=(i,t,e)=>i+(t-i)*e,kp=class{constructor(t,e=Ir){let n=t.N??88;this.N=n,this.D=e,this.th=Float64Array.from({length:n},(h,u)=>2*Math.PI*u/n);let s=T_(t.outline),r=Ru(Pp(s,n),t.smooth??1),o=[],a=[];for(let h=0;h<n;h++)o.push(r[h]*Math.cos(this.th[h])),a.push(r[h]*Math.sin(this.th[h]));let l=Math.max(Math.max(...o)-Math.min(...o),Math.max(...a)-Math.min(...a));this.r=r.map(h=>h*e/l),this.T=(t.depth??.5)*e/2,this.dome=t.dome??.1,this.nb=t.nb??7,this.flat=t.flat??[.45,.8],this.wall=(t.wall??0)*this.T;let c=t.bevel??.92;if(this.W=Ru(this.r.map(h=>Math.min(c*this.T,.85*h)),3),t.inner){let h=Ru(this.r.map((u,f)=>u-this.W[f]),t.inner);this.W=this.W.map((u,f)=>this.r[f]-Math.min(h[f],this.r[f]-.35*u))}this.centre=[0,0]}_interp(t,e){let n=this.N,s=(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*n,r=Math.floor(s)%n,o=s-Math.floor(s);return Cr(t[r],t[(r+1)%n],o)}rimAt(t){let e=this._interp(this.r,t);return[this.centre[0]+e*Math.cos(t),this.centre[1]+e*Math.sin(t)]}zAt(t,e){let n=Math.atan2(e,t),s=this._interp(this.r,n),r=this._interp(this.W,n),o=Math.min(Math.hypot(t,e),s*.999),a=s-o;if(a>=r){let c=o/(s-r);return this.T*(1+this.dome*(1-c*c)**2)}let l=1-a/r;return this.wall+(this.T-this.wall)*Math.sqrt(Math.max(0,1-l*l))}nAt(t,e){return O_(this,t,e)}rings(){let{r:t,W:e,T:n,dome:s,N:r,nb:o,wall:a}=this,l=[];for(let u of this.flat)l.push({rho:Float64Array.from({length:r},(f,d)=>u*(t[d]-e[d])),z:n*(1+s*(1-u*u)**2)});for(let u=0;u<=o;u++){let f=Math.PI/2*(u/o);l.push({rho:Float64Array.from({length:r},(d,p)=>t[p]-e[p]*(1-Math.sin(f))),z:a+(n-a)*Math.cos(f)})}let h=(a>0?l:l.slice(0,-1)).slice().reverse().map(u=>({rho:u.rho,z:-u.z}));return l.concat(h)}emit(t=[0,0,0]){let e=this.rings(),n=this.N,s=e.length,r=this.th,o=this.T*(1+this.dome),a=[[t[0],t[1],t[2]+o]];for(let u of e)for(let f=0;f<n;f++)a.push([t[0]+u.rho[f]*Math.cos(r[f]),t[1]+u.rho[f]*Math.sin(r[f]),t[2]+u.z]);a.push([t[0],t[1],t[2]-o]);let l=[];for(let u=0;u<n;u++)l.push([0,1+(u+1)%n,1+u]);for(let u=0;u<s-1;u++)for(let f=0;f<n;f++){let d=(f+1)%n;l.push([1+u*n+f,1+u*n+d,1+(u+1)*n+d,1+(u+1)*n+f])}let c=1+(s-1)*n,h=1+s*n;for(let u=0;u<n;u++)l.push([h,c+u,c+(u+1)%n]);return{V:a,F:l}}},zp=class{constructor(t,e=Ir){this.D=e;let n=e,s=t.rr??.12*(e/Ir),o=(t.width??.9)*e/2-s,a=n-s,l=Math.atan2(o,a-s),c=[[0,0],[o*.5,0],[o,0]],h=7,u=4;for(let x=1;x<=h;x++){let m=Cr(-Math.PI/2,l,x/h);c.push([o+s*Math.cos(m),s+s*Math.sin(m)])}let f=Math.cos(l),d=Math.sin(l);for(let x=1;x<u;x++){let m=x/u;c.push([Cr(o,0,m)+s*f,Cr(s,a,m)+s*d])}for(let x=0;x<=h;x++){let m=Cr(l,Math.PI/2,x/h);c.push([s*Math.cos(m),a+s*Math.sin(m)])}c[c.length-1][0]=0,this.prof=c,this.sectors=t.sectors??56,this.H=n,this.centre=[0,n*.45];let p=c.slice(1).concat(c.slice(1,-1).reverse().map(([x,m])=>[-x,m]));this.N=96,this.r=Pp(p,this.N,this.centre),this.side=c.slice(3)}rho(t){let e=this.side;if(t<=e[0][1])return e[0][0];for(let n=1;n<e.length;n++)if(t<=e[n][1])return Cr(e[n-1][0],e[n][0],(t-e[n-1][1])/Math.max(1e-9,e[n][1]-e[n-1][1]));return 0}zAt(t,e){let n=this.rho(e),s=Math.min(Math.abs(t),n*.999);return Math.sqrt(Math.max(0,n*n-s*s))}nAt(t,e){return O_(this,t,e)}rimAt(t){let e=(t%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*this.N,n=Math.floor(e)%this.N,s=e-Math.floor(e),r=Cr(this.r[n],this.r[(n+1)%this.N],s);return[this.centre[0]+r*Math.cos(t),this.centre[1]+r*Math.sin(t)]}emit(t=[0,0,0]){let e=this.prof,n=this.sectors,s=[],r=[],o=[];for(let[a,l]of e){if(a<1e-9){o.push({pole:s.length}),s.push([t[0],t[1]+l,t[2]]);continue}let c=s.length;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;s.push([t[0]+a*Math.cos(u),t[1]+l,t[2]+a*Math.sin(u)])}o.push({start:c})}for(let a=0;a<o.length-1;a++){let l=o[a],c=o[a+1];for(let h=0;h<n;h++){let u=(h+1)%n;l.pole!==void 0?r.push([l.pole,c.start+u,c.start+h]):c.pole!==void 0?r.push([l.start+h,l.start+u,c.pole]):r.push([l.start+h,l.start+u,c.start+u,c.start+h])}}return{V:s,F:r}}};function O_(i,t,e){let n=.004*(i.D/Ir),s=(i.zAt(t+n,e)-i.zAt(t-n,e))/(2*n),r=(i.zAt(t,e+n)-i.zAt(t,e-n))/(2*n);return Jo([-s,-r,1])}var B_=(i,t,e,n={})=>({kind:"poly",n:i,R:1,rr:t,rot:e,...n}),Xn=(i,t,e,n,s)=>({c:i,sp:t,w:+(e/2.6).toFixed(3),h:e,pair:n,tilt:s}),zA={cloud:[.4644,-.0013,.0016,.0344,.0162,.0252,-.0051,-.0056,-.0039,.0193,-.0015,.0026,-.0043,-.0025,.0049,-.0053,.0015],star4:[.4131,1e-4,0,-3e-4,-.0167,-2e-4,-2e-4,.0736,.0341,-2e-4,-1e-4,2e-4,.0022,-4e-4,0,.0012,-4e-4,1e-4,-1e-4,-.0014,7e-4,2e-4,1e-4,.0027,.0053],clover:[.4623,0,0,.0045,-.0273,2e-4,-1e-4,-.0036,-.0449,-4e-4,1e-4,2e-4,8e-4,-4e-4,0,.0105,-.0056,0,2e-4,-.002,5e-4],bubble:[.4568,.0013,-.0022,.0313,.0104,-.0395,.0269,-.0026,.0079,.0083,.002,7e-4,.0027,-.0027,-1e-4,7e-4,-.0011],flower:[.4574,0,0,.0025,-.022,0,0,.0026,3e-4,2e-4,0,.0207,-.0284,0,0,.0046,.0035,-1e-4,-3e-4,.0023,-.002,0,1e-4,.0014,.0062,-1e-4,1e-4,-.0023,6e-4,3e-4,-2e-4,0,-3e-4,1e-4,3e-4,-.003,-.001,-1e-4,-1e-4,4e-4,-.0018],star6:[.4235,-1e-4,0,.0048,-.0394,0,0,-.0051,-.0014,4e-4,-1e-4,.0417,-.0574,4e-4,2e-4,.0021,.0032,-1e-4,-1e-4,-.003,-2e-4,1e-4,0,.001,.0033,1e-4,1e-4,.0058,-8e-4,-1e-4,3e-4,2e-4,-.0049,-1e-4,0,-6e-4,0]},Zo=i=>({kind:"fourier",c:zA[i]}),HA={sphere:{type:"slab",outline:{kind:"sup",a:1,b:1,n:2},face:Xn([.17,.218],.26,.272,25,36)},cloud:{type:"slab",N:96,smooth:0,inner:10,outline:Zo("cloud"),face:Xn([.161,.15],.214,.236,16,28)},rounded_square:{type:"slab",outline:{kind:"hull",circles:[[.146,.381,.107],[-.393,.195,.141],[-.149,-.383,.106],[.397,-.195,.139]]},face:Xn([.08,.023],.18,.212,16,29)},star4:{type:"slab",N:112,smooth:0,depth:.3,bevel:.5,outline:Zo("star4"),face:Xn([.076,.086],.186,.191,16,28)},clover:{type:"slab",N:104,smooth:0,inner:10,outline:Zo("clover"),face:Xn([.062,.081],.212,.212,15,28)},bubble:{type:"slab",N:96,smooth:0,inner:8,outline:Zo("bubble"),face:Xn([.179,.087],.208,.214,16,24)},flower:{type:"slab",N:108,smooth:0,inner:10,outline:Zo("flower"),face:Xn([.107,.033],.179,.213,15,28)},drop:{type:"slab",outline:{kind:"hull",circles:[[.015,-.031,.419],[-.166,.34,.148]]},face:Xn([.192,.145],.201,.227,16,27)},pill:{type:"slab",outline:{kind:"hull",circles:[[.149,.042,.339],[-.148,-.042,.34]]},face:Xn([.144,.14],.267,.233,15,27)},triangle:{type:"slab",outline:{kind:"hull",circles:[[.723,-.02,.185],[-.23,.471,.319],[-.222,-.339,.41]]},face:Xn([.145,.213],.201,.216,12,54)},pentagon:{type:"slab",outline:{kind:"hull",circles:[[.276,.325,.101],[-.184,.425,.177],[-.414,.049,.157],[-.202,-.411,.151],[.41,-.181,.211]]},face:Xn([.075,.053],.203,.222,15,28)},star6:{type:"slab",N:108,smooth:0,depth:.3,bevel:.5,outline:Zo("star6"),face:Xn([.092,.017],.189,.202,16,28)},hexagon:{type:"slab",outline:{kind:"hull",circles:[[.264,.33,.112],[-.154,.4,.152],[-.404,.073,.162],[-.267,-.334,.108],[.153,-.399,.153],[.412,-.073,.155]]},face:Xn([.1,.029],.275,.274,15,28)},rounded_cube:{type:"slab",outline:{...B_(4,.27,45),rotate:18},depth:.74,bevel:.62,wall:.5,face:{c:[.04,.03],sp:.22,w:.1,h:.23,pair:12,tilt:25}},cone:{type:"lathe",face:{c:[0,.31],sp:.22,w:.105,h:.23,pair:0,tilt:0}},trio:{type:"trio"}},VA=[{key:"a",mat:0,D:.42,at:[-.2,.2,0],def:{type:"slab",N:48,nb:5,flat:[.5],outline:{kind:"sup",a:1,b:.93,n:2.4,rotate:5},face:{c:[.12,.08],sp:.25,w:.12,h:.25,pair:14,tilt:18}}},{key:"b",mat:1,D:.46,at:[.19,.23,.05],primary:!0,def:{type:"slab",N:48,nb:5,flat:[.5],outline:{...B_(6,.3,90),rotate:-6},face:{c:[.03,-.02],sp:.26,w:.11,h:.25,pair:10,tilt:4}}},{key:"c",mat:2,D:.42,at:[.02,.57,-.09],host:!0,def:{type:"slab",N:60,nb:5,flat:[.5],depth:.4,bevel:.7,outline:{kind:"star",k:6,rin:.58,p:1.1,tip:90},face:{c:[0,-.07],sp:.25,w:.115,h:.24,pair:0,tilt:0}}}];function R_(i,t){return i.type==="lathe"?new zp(i,t):new kp(i,t)}function Iu(i,t,e,n=16,s=10,r=2.7){let o=[[0,0,e]];for(let h=1;h<s;h++){let u=Math.PI*h/s;for(let f=0;f<n;f++){let d=2*Math.PI*f/n,p=Math.cos(d),x=Math.sin(d),m=(Math.abs(p)**r+Math.abs(x)**r)**(-1/r);o.push([i*Math.sin(u)*p*m,t*Math.sin(u)*x*m,e*Math.cos(u)])}}o.push([0,0,-e]);let a=[];for(let h=0;h<n;h++)a.push([0,1+(h+1)%n,1+h]);for(let h=0;h<s-2;h++)for(let u=0;u<n;u++){let f=(u+1)%n;a.push([1+h*n+u,1+h*n+f,1+(h+1)*n+f,1+(h+1)*n+u])}let l=o.length-1,c=1+(s-2)*n;for(let h=0;h<n;h++)a.push([l,c+h,c+(h+1)%n]);return{V:o,F:a}}function GA(i,t,e=22,n=8){let s=[],r=[];for(let o=0;o<e;o++){let a=2*Math.PI*o/e;for(let l=0;l<n;l++){let c=2*Math.PI*l/n;s.push([(i+t*Math.cos(c))*Math.cos(a),(i+t*Math.cos(c))*Math.sin(a),t*Math.sin(c)])}}for(let o=0;o<e;o++)for(let a=0;a<n;a++)r.push([o*n+a,(o+1)%e*n+a,(o+1)%e*n+(a+1)%n,o*n+(a+1)%n]);return{V:s,F:r}}function Cu(i,t,e=8){let n=i.length,s=[],r=[],o=(f,d)=>[f[0]-d[0],f[1]-d[1],f[2]-d[2]],a=(f,d)=>[f[1]*d[2]-f[2]*d[1],f[2]*d[0]-f[0]*d[2],f[0]*d[1]-f[1]*d[0]];for(let f=0;f<n;f++){let d=Jo(o(i[Math.min(f+1,n-1)],i[Math.max(f-1,0)])),p=a(d,[0,0,1]);Math.hypot(...p)<1e-6&&(p=a(d,[0,1,0])),p=Jo(p);let x=a(d,p);for(let m=0;m<e;m++){let g=2*Math.PI*m/e,_=Math.cos(g)*t[f],w=Math.sin(g)*t[f];s.push([i[f][0]+_*p[0]+w*x[0],i[f][1]+_*p[1]+w*x[1],i[f][2]+_*p[2]+w*x[2]])}}for(let f=0;f<n-1;f++)for(let d=0;d<e;d++){let p=(d+1)%e;r.push([f*e+d,f*e+p,(f+1)*e+p,(f+1)*e+d])}let l=Jo(o(i[1],i[0])),c=Jo(o(i[n-1],i[n-2])),h=s.length;s.push([i[0][0]-l[0]*t[0]*.5,i[0][1]-l[1]*t[0]*.5,i[0][2]-l[2]*t[0]*.5]);let u=s.length;s.push([i[n-1][0]+c[0]*t[n-1]*.8,i[n-1][1]+c[1]*t[n-1]*.8,i[n-1][2]+c[2]*t[n-1]*.8]);for(let f=0;f<e;f++){let d=(f+1)%e;r.push([h,d,f]),r.push([u,(n-1)*e+f,(n-1)*e+d])}return{V:s,F:r}}var C_=(i,t,e,n)=>[0,1,2].map(s=>(1-n)**2*i[s]+2*(1-n)*n*t[s]+n*n*e[s]),Dl=(i,t,e=[0,0,0])=>i.map(n=>{let s=Pu(t,n);return[s[0]+e[0],s[1]+e[1],s[2]+e[2]]});function k_(i,t,e,n,s=.7){let r=i.zAt(t,e),o=i.nAt(t,e),a=Jo([s*o[0],s*o[1],s*o[2]+(1-s)]);return{z:r,M:U_(kA(a),Vp(n))}}function WA(i,t){let{body:e,at:n,D:s}=i,r={...i.face};t==="glasses"&&i.glasses&&(r.sp=Math.max(r.sp,.25),r.h=Math.min(r.h,.2),r.w=Math.min(r.w,.09));let o=[r.c[0]*s,r.c[1]*s],a=[Math.cos(ks(r.pair))*r.sp*s/2,Math.sin(ks(r.pair))*r.sp*s/2],l=r.w*s/2,c=r.h*s/2,h=.62*l,u=[];for(let[f,d]of[["L",[o[0]-a[0],o[1]-a[1]]],["R",[o[0]+a[0],o[1]+a[1]]]]){let{z:p,M:x}=k_(e,d[0],d[1],r.tilt),m=Iu(l,c,h,i.eyeSeg??16,i.eyeRings??10);u.push({side:f,c:d,M:x,centre:[d[0]+n[0],d[1]+n[1],p+.15*h+n[2]],V:Dl(m.V,x),F:m.F})}return u}function I_(i,t=0){let e=-Math.sin(ks(t)),n=Math.cos(ks(t)),s=-1/0,r=i.rimAt(Math.PI/2);for(let o=0;o<180;o++){let a=i.rimAt(2*Math.PI*o/180),l=a[0]*e+a[1]*n;l>s+1e-9&&(s=l,r=a)}return r}function P_(i,t,e,n){let{body:s,at:r,D:o}=t,a=o/Ir,l=(h,u=0)=>[h[0]+r[0],h[1]+r[1],u+r[2]],c=[];if(i==="stem"){let h=I_(s,20),u=[h[0]+.012*a,h[1]-.045*a,0],f=[u[0]-.035*a,u[1]+.09*a,0],d=[u[0]-.1*a,u[1]+.155*a,0],p=Array.from({length:11},(m,g)=>g/10),x=Cu(p.map(m=>l(C_(u,f,d,m))),p.map(m=>a*(.045-.01*m)),8);c.push({...x,mat:0})}else if(i==="antenna"){let h=I_(s),u=[h[0]-.01*a,h[1]-.06*a,0],f=[u[0]+.015*a,u[1]+.1*a,0],d=[u[0]+.05*a,u[1]+.2*a,0],p=Array.from({length:9},(w,v)=>v/8),x=Cu(p.map(w=>l(C_(u,f,d,w))),p.map(w=>a*(.036-.008*w)),8);c.push({...x,mat:0});let m=.075*a,g=Iu(m,m,m,14,10,2),_=l([d[0]+.004*a,d[1]+.5*m],0);c.push({V:g.V.map(w=>[w[0]+_[0],w[1]+_[1],w[2]+_[2]]),F:g.F,mat:1})}else if(i==="bow"){let h=ks(64),u=s.rimAt(h),f=[u[0]*.93+(1-.93)*s.centre[0],u[1]*.93+(1-.93)*s.centre[1]],d=s.T!==void 0?s.T*.34:.08*a,p=h+Math.PI/2-ks(14),x=Vp(p*180/Math.PI),m=Iu(.13*a,.085*a,.06*a,14,9,2),g=Iu(.06*a,.06*a,.058*a,12,8,2),_=l(f,d);for(let w of[-1,1])c.push({V:Dl(m.V,x,[_[0]+w*.12*a*Math.cos(p),_[1]+w*.12*a*Math.sin(p),_[2]-.004*a]),F:m.F,mat:1});c.push({V:Dl(g.V,Bp,_),F:g.F,mat:1})}else if(i==="glasses"){let h=Math.min(.118,e.sp*.5-.006)*o,u=.017*o,f=[];for(let _ of e.list){let{z:w,M:v}=k_(s,_.c[0],_.c[1],0,.7),S=[_.c[0],_.c[1],w+.004*a],b=GA(h,u,o<.6?14:24,o<.6?6:8);c.push({V:Dl(b.V,v,l([S[0],S[1]],S[2])),F:b.F,mat:0}),f.push(_.c)}let[d,p]=f,x=Math.hypot(p[0]-d[0],p[1]-d[1]),m=[(p[0]-d[0])/x,(p[1]-d[1])/x],g=[];for(let _=0;_<5;_++){let w=_/4,v=d[0]+m[0]*h+(p[0]-d[0]-2*m[0]*h)*w,S=d[1]+m[1]*h+(p[1]-d[1]-2*m[1]*h)*w;g.push(l([v,S],s.zAt(v,S)+u*1.2+.006*a*Math.sin(Math.PI*w)))}c.push({...Cu(g,Array(5).fill(u),6),mat:0});for(let[_,w]of[[-1,d],[1,p]]){let v=[];for(let S=0;S<9;S++){let b=S/8,A=w[0]+_*m[0]*(h+b*(.4*o-h+.02*a)),y=w[1]+_*m[1]*(h+b*(.4*o-h+.02*a)),E=s.rimAt(Math.atan2(y-s.centre[1],A-s.centre[0])),R=Math.hypot(E[0]-s.centre[0],E[1]-s.centre[1])*.985,P=Math.hypot(A-s.centre[0],y-s.centre[1]);if(P>R){let N=R/P;A=s.centre[0]+(A-s.centre[0])*N,y=s.centre[1]+(y-s.centre[1])*N}v.push(l([A,y],s.zAt(A,y)+u*1.2))}c.push({...Cu(v,Array(9).fill(u*.9),6),mat:0})}}return c}function Hp(i,t=e=>e){let e=[...new Set(i.map(a=>a.mat))].sort((a,l)=>a-l),n=[],s=[],r=[];for(let a of e){let l=s.length;for(let c of i){if(c.mat!==a)continue;let h=c.V.map(t),u=[];for(let p of c.F)p.length===3?u.push(p):(u.push([p[0],p[1],p[2]]),u.push([p[0],p[2],p[3]]));let f=0;for(let[p,x,m]of u){let g=h[p],_=h[x],w=h[m];f+=g[0]*(_[1]*w[2]-_[2]*w[1])+g[1]*(_[2]*w[0]-_[0]*w[2])+g[2]*(_[0]*w[1]-_[1]*w[0])}let d=n.length/3;for(let p of h)n.push(p[0],p[1],p[2]);for(let[p,x,m]of u)s.push(d+p,d+(f<0?m:x),d+(f<0?x:m))}r.push({start:l,count:s.length-l,materialIndex:a})}let o=new Me;o.setAttribute("position",new te(n,3)),o.setIndex(s);for(let a of r)o.addGroup(a.start,a.count,a.materialIndex);return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o}function qA(i){let t=HA[i];return t.type==="trio"?VA.map(e=>({body:R_(e.def,e.D),at:e.at,D:e.D,face:e.def.face,mat:e.mat,primary:!!e.primary,host:!!e.host,glasses:!!e.primary,eyeSeg:12,eyeRings:8})):[{body:R_(t,Ir),at:[0,0,0],D:Ir,face:t.face,mat:0,primary:!0,host:!0,glasses:!0}]}var Lp=new Map,Np=new Map;function XA(i,t){let e=`${i}|${t}`;if(Lp.has(e))return Lp.get(e);let n=qA(i),s=Vp(t),r=m=>Pu(s,m),a=n.map(m=>({...m.body.emit(m.at),mat:m.mat})).map(m=>({...m,V:m.V.map(r)})),l=1/0;for(let m of a)for(let g of m.V)l=Math.min(l,g[1]);let c=.01,h=BA;for(let m of a)for(let g of m.V){let _=g[1]-l-h;g[1]=l+h+.5*(_+Math.sqrt(_*_+c*c))}let u=[1/0,1/0,1/0],f=[-1/0,-1/0,-1/0];for(let m of a)for(let g of m.V)for(let _=0;_<3;_++)u[_]=Math.min(u[_],g[_]),f[_]=Math.max(f[_],g[_]);let d=[-(u[0]+f[0])/2,-u[1],-(u[2]+f[2])/2],p=Hp(a,m=>[m[0]+d[0],m[1]+d[1],m[2]+d[2]]),x={units:n,R:s,shift:d,geo:p,nMats:new Set(n.map(m=>m.mat)).size,tris:p.index.count/3};return Lp.set(e,x),x}function YA(i,t,e){let n=`${i}|${t}|${e}`;if(Np.has(n))return Np.get(n);let s=XA(i,t),{units:r,R:o,shift:a}=s,l=x=>{let m=Pu(o,x);return[m[0]+a[0],m[1]+a[1],m[2]+a[2]]},c=[],h=2,u=null;for(let x of r){let m=WA(x,e);e==="glasses"&&x.glasses&&(u={u:x,list:m,sp:Math.max(x.face.sp,.25)});for(let g of m){let _=x.primary?`eye_${g.side}`:`eye_${g.side}_${h}`,w=Hp([{V:Dl(g.V,o),F:g.F,mat:0}]);c.push({name:_,geo:w,pos:l(g.centre)})}x.primary||h++}let f=null;if(e!=="none"){let x=[];if(e==="glasses")u&&(x=P_("glasses",u.u,u,null));else{let m=r.find(g=>g.host)||r[0];x=P_(e,m,null,null)}if(x.length){let m=Hp(x.map(w=>({...w,V:w.V.map(v=>Pu(o,v))})),w=>[w[0]+a[0],w[1]+a[1],w[2]+a[2]]),g=m.boundingBox.clone(),_=s.geo.boundingBox;g.min.max(_.min.clone().subScalar(A_)),g.max.min(_.max.clone().addScalar(A_)),m.boundingBox=g,f={geo:m,accent:x.some(w=>w.mat===1)}}}let d=s.tris;for(let x of c)d+=x.geo.index.count/3;f&&(d+=f.geo.index.count/3);let p={body:s,eyes:c,extra:f,tris:d};return Np.set(n,p),p}var $A=.78,KA=.06;function z_(i){let t=new dt(i),e=.2126*t.r+.7152*t.g+.0722*t.b;return e>=$A?"light":e<KA?"dark":"mid"}var Dp=new Map;function L_(i){return Dp.has(i)||Dp.set(i,new Ze({color:i,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.06})),Dp.get(i)}var ZA="#141417",Fp=new Map;function JA(){return Fp.has("dark")||Fp.set("dark",new Ze({color:ZA,roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.04})),Fp.get("dark")}var Up=new Map;function jA(i,t=!1){let e=`${i}|${t}`;return Up.has(e)||Up.set(e,new Ze(t?i==="glasses"?{color:"#ECECEF",roughness:.32,clearcoat:.8,clearcoatRoughness:.05}:{color:"#8A8D93",roughness:.4,clearcoat:.6,clearcoatRoughness:.06}:i==="glasses"?{color:"#101012",roughness:.45,clearcoat:.4,clearcoatRoughness:.06}:{color:"#3A3D40",roughness:.5,clearcoat:.3,clearcoatRoughness:.06})),Up.get(e)}var Op=new Map;function QA(i){return Op.has(i)||Op.set(i,new Ze({color:i,roughness:.3,clearcoat:1,clearcoatRoughness:.06})),Op.get(i)}var N_=["#FFD60A","#FF2D6F","#2D7BFF","#2FD067"];function t2(i){let t=new dt(i).convertLinearToSRGB(),e=z_(i)==="dark"?["#FFFFFF",...N_]:N_,n=e[0],s=-1;for(let r of e){let o=new dt(r).convertLinearToSRGB(),a=(t.r+o.r)/2,l=(2+a)*(t.r-o.r)**2+4*(t.g-o.g)**2+(3-a)*(t.b-o.b)**2;l>s&&(s=l,n=r)}return n}function e2(i){let t={};new dt(i).getHSL(t);let e=new dt().setHSL((t.h+150/360)%1,Math.max(t.s,.7),Math.min(.46,Math.max(.36,t.l*.85))),n=t.l<.22?new dt("#F4F4F6"):new dt("#111113");return[i,`#${e.getHexString().toUpperCase()}`,`#${n.getHexString().toUpperCase()}`]}var n2=["#000000","#A06B39","#FB2B3E","#FD690F","#F59312","#14C16F","#13B7A2","#1E86FC","#8F59F9","#F93498","#959595"],D_=n2.slice(0,10);function F_(){return 0}function H_({shape:i,color:t,accessory:e,seed:n}={}){let s=String(n??"blob"),r=M_(i)??E_(s),o=w_(t)??D_[Ip(`color:${s}`)%D_.length],a=S_(e),l=YA(r,F_(s),a),c=l.body.nMats>1?e2(o):[o],h=c[l.body.nMats>1?a==="glasses"?1:2:0],u=new se;u.name="blob";let f=new Rt(l.body.geo,l.body.nMats>1?c.map(L_):L_(o));f.name="body",u.add(f);for(let d of l.eyes){let p=new Rt(d.geo,JA());p.name=d.name,p.position.set(d.pos[0],d.pos[1],d.pos[2]),u.add(p)}if(l.extra){let d=jA(a==="glasses"?"glasses":"stem",z_(h)==="dark"),p=l.extra.accent?[d,QA(t2(o))]:d,x=new Rt(l.extra.geo,p);x.name="extra",u.add(x)}return u.userData={generated:!0,look:{shape:r,color:o,accessory:a},tris:l.tris,tilt:F_(s)},u}var Kp="/4d",Zp=new I(1,1,1).normalize(),Un={x:-.4,y:-.3,z:.3},zs={w:35,h:22},i2=29.5,us={min:.75,max:3,focus:2},s2=230,r2=360,G_=Math.sin(Math.atan(1/Math.SQRT2)),Jp=[1,3,5,7,9,2,4,6,8,10,11,13,15,17,19,12,14,16,18,20,21],o2=new Set(du),me,Hs,Wt,ki,un,Mi,jo,jt,In,fn=null,Nr=null,W_={currentFloor:null,selectedBot:null},Be=new Map,qs=new Set,jp=new Set,Gp=new Map,ta=[],ea=new sl,na=new Q,zi={active:!1,x:0,z:0},Ou=new zn(new I(0,1,0),0),Vs=new I,Lu=new rl,Ht={x:new mn(Un.x,.45),y:new mn(Un.y,.55),z:new mn(Un.z,.45),zoom:new mn(0,.4)},hs=null,qp=!1,Ee=null,Hi=new Map,Gs=null,Fu=!1,Qp=0,Ws=0,Xp=!1,bi=null,Yp=0,Bu=null,Bl=!0,ku=!1,Wp=!1,a2=!1,Nu=1e3/30,l2=.9,xn=(()=>{let i=new URLSearchParams(location.search);return{floor:ku?null:i.get("floor"),from:i.get("from"),intro:i.get("intro"),hold:i.has("hold")?Number(i.get("hold")):null,cam:i.get("cam"),cursor:i.get("cursor"),ambient:i.get("ambient")==="1"||i.get("ambient")==="fast"}})(),$p=!1,q_=!1,ia=new Map,Lr=null,Dr=new Map,c2=Dx(`${Kp}/office`);function X_(i,t={}){let e=++Yp;Bl=!0,un=i,Mi=t,un.classList.add("hq-scene"),h2(),bi=un.querySelector(".hq-loading"),bi||(bi=document.createElement("div"),bi.className="hq-loading",bi.setAttribute("role","status"),bi.innerHTML='<span class="hq-loading-label">Building the office</span><span class="hq-loading-track"><i></i></span>',un.append(bi)),me=new Qh({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1}),me.setPixelRatio(Math.min(devicePixelRatio,1.5)),me.outputColorSpace=ae,me.toneMapping=_r,me.toneMappingExposure=1.05,me.setClearColor(0,0),me.domElement.className="hq-canvas",un.append(me.domElement),Hs=new iu,Hs.domElement.className="hq-labels",un.append(Hs.domElement),ki=new or;let n=new Uo(me);ki.environment=n.fromScene(new ou,.04).texture,ki.environmentIntensity=.55,jo=s_({scene:ki,renderer:me}),document.documentElement.dataset.sky="studio",un.style.background=wp(Ul),Wt=new Qn(-1,1,1,-1,.1,240),Wt.position.copy(Zp).multiplyScalar(80),Wt.lookAt(0,0,0),c2.then(s=>{if(e!==Yp||!me)return;fn=s,jt=new gu({scene:ki,daylight:jo,assets:s,baseUrl:`${Kp}/office`,renderer:me}),jo.setBuilding(jt),s.spots.lounges.forEach(o=>{o&&(o.lounge=!0)});try{Lr=wu(s.spots,"sofa"),g_(Lr)}catch(o){console.warn("[ambient] interact catalog:",o.message),Lr=wu(s.spots,"sofa")}window.bothq=Object.assign(window.bothq||{},{source:s.source,ambient:{interacts:()=>Lr,state:()=>Object.fromEntries([...ia.entries()].map(([o,a])=>[o,{...a}])),force:o=>{let a=ia.get(o);a&&(a.nextAt=0)}},sendToMeeting:o=>tm(o),loungeAssign:Dr}),Ol();let r=()=>{Nr&&zu()};Promise.race([qx,new Promise(o=>setTimeout(o,1500))]).then(r,r)}),In=c_(me,ki,Wt),Ul&&In.setDark&&In.setDark(!0),_2(),Bu=new ResizeObserver(Ol),Bu.observe(un),Ol(),me.setAnimationLoop(I2),window.bothq=Object.assign(window.bothq||{},{scene:{get camera(){return Wt},get building(){return jt},cam:Ht,actors:Be,get daylight(){return jo},switchFloor:s=>jt&&j_(s,!1),settle:Uu}})}function h2(){if(!document.querySelector('link[href*="scene.css"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="/4d/scene.css",document.head.append(i)}if(!document.querySelector('link[href*="family=Inter"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700&display=swap",document.head.append(i)}}function Y_(i,t){Nr=i,W_={...t},jt&&zu()}function zu(){let i=Nr,t=W_,e=[...i.floors].sort((x,m)=>(x.order??0)-(m.order??0));jt.setFloors(e);let n=t.currentFloor&&e.some(x=>x.id===t.currentFloor)?t.currentFloor:e[0]?.id??"_";xn.floor&&e.some(x=>x.id===xn.floor)&&(n=xn.from&&!Fu&&e.some(x=>x.id===xn.from)?xn.from:xn.floor),jt.activeId!==n&&j_(n,!Fu),Fu=!0;let s=jt.activeOpen();if(!s)return;let r=Object.values(i.bots).filter(x=>x.floor===jt.activeId),o=new Set(r.map(x=>x.id));for(let[x,m]of Be)o.has(x)||(m.retire(),qs.add(m),Be.delete(x));let a=Math.max(1e-4,...r.map(x=>x.usage_share||0)),l=$_(r);K_(l,r);let c=jt.styles?.get(jt.activeId)?.layout||"sofa";Lr=wu(fn.spots,c);let h=Z_(jt.activeId),u=new Array(Math.max(20,fn.spots.desks.length)).fill(0),f=Math.max(0,Qp+.55-Ws),d=new Map;for(let x of r){let m=Be.get(x.id);m||(m=new Tu(x,{parent:s.root,inst:s,pickables:jp,confetti:T2,cursor:zi,dropDelay:f}),Be.set(x.id,m),d2(m,x));let g=(Jp[(x.desk||1)-1]||1)-1,_=fn.spots.desks[g]||fn.spots.desks.find(Boolean),w=l.get(x.id)||_;d.set(x.id,w),(x.effective_status||x.status)==="working"&&!l.has(x.id)&&fn.spots.desks[g]&&(u[g]=1);let v=w;m.update(x,v,{maxShare:a,selectedBot:t.selectedBot})}J_(h,r,d),jt.setScreens(u);let p=e.find(x=>x.id===jt.activeId);if(jt.setDisplayData({floorName:p?p.name:"",bots:r,hour:Xx(i.now)}),hs&&!Be.has(hs)&&(hs=null),!Xp){if(Xp=!0,xn.intro==="0"&&Uu(3.5),xn.from&&xn.floor&&zu(),xn.hold!==null&&(Uu(xn.hold),$p=!0),xn.cursor){let[x,m]=xn.cursor.split(",").map(Number);zi.active=!0,zi.x=x,zi.z=m,q_=!0,Uu(1.2)}if(xn.cam){let[x,m,g]=xn.cam.split(",").map(Number);Ht.x.snap(x),Ht.z.snap(m),Ht.zoom.snap(Math.log(g||1))}}}function Uu(i=3){let t=.03333333333333333;for(let e=0;e<i;e+=t){Ws+=t,sy(t),jt.update(t,performance.now());for(let n of Be.values())n.hostAlpha=jt.activeOpen()?.alpha??1,n.tick(t,Ws);for(let n of qs)n.tick(t,Ws),n.dead&&qs.delete(n)}}function $_(i){let t=new Map,e=fn.spots.lounges.filter(Boolean);return i.filter(s=>(s.effective_status||s.status)==="idle").sort((s,r)=>(s.desk||0)-(r.desk||0)).slice(0,e.length).forEach((s,r)=>t.set(s.id,e[r])),t}function u2(){try{let i=globalThis.WallpaperFeed;if(!i||typeof i.loadLoungeAssign!="function")return;let t=i.loadLoungeAssign()||{};Dr.clear();for(let[e,n]of Object.entries(t))Dr.set(e,n)}catch{}}function K_(i,t){u2();let e=(fn.spots.lounges||[]).filter(Boolean);if(e.length)for(let n of t){let s=Dr.get(n.id);if(s==null||!e[s])continue;let r=e[s];i.set(n.id,{pos:r.pos,yaw:r.yaw,lounge:!0,meeting:!0})}}function Z_(i){if(!i)return null;let t=ia.get(i);return t||(t=p_(i,{fast:xn.ambient}),ia.set(i,t)),t.fast=xn.ambient,t}function J_(i,t,e){if(!i||!Lr)return;let n=performance.now();m_(i,{now:n,bots:t,interacts:Lr,busyIds:new Set([...ia.values()].filter(s=>s!==i&&s.walkerId&&s.phase!=="idle").map(s=>s.walkerId)),homeSpotFor:s=>e.get(s.id),isUserBusy:s=>Be.get(s)?.isUserBusy(n),isTraveling:s=>Be.get(s)?.isTraveling(),beginTrip:s=>Be.get(s)?.beginAmbientTrip(),endTrip:s=>Be.get(s)?.endAmbientTrip(),startTravel:(s,r,o)=>Be.get(s)?.travelPath(r,o),setAct:(s,r,o)=>Be.get(s)?.setAmbientAct(r,o),clearAct:s=>Be.get(s)?.clearAmbientAct(),actorPos:s=>{let r=Be.get(s);return r?{x:r.root.position.x,y:r.root.position.y,z:r.root.position.z}:null}})}function tm(i){if(!fn?.spots?.lounges||!jt)return{ok:!1,reason:"loading"};let t=fn.spots.lounges.filter(Boolean);if(!t.length)return{ok:!1,reason:"no-meeting"};let n=jt.styles?.get(jt.activeId)?.layout==="meeting",s=new Set([...Dr.entries()].filter(([l])=>l!==i).map(([,l])=>l));for(let[l,c]of Be){if(l===i||!c.spotIsLounge())continue;let h=t.findIndex(u=>u&&c.spot&&c.spot.pos.distanceToSquared(u.pos)<.04);h>=0&&s.add(h)}let r=-1,o=n?[0,1,2,3,4,...t.map((l,c)=>c)].filter((l,c,h)=>l<t.length&&h.indexOf(l)===c):t.map((l,c)=>c);for(let l of o)if(!s.has(l)){r=l;break}if(r<0)return{ok:!1,reason:"full"};let a=Be.get(i);a&&(a.markUserBusy(2e4),a.endAmbientTrip());for(let l of ia.values())l.walkerId===i&&(l.phase="idle",l.walkerId=null,l.home=null,l.target=null);Dr.set(i,r);try{let l=globalThis.WallpaperFeed;l&&typeof l.assignLounge=="function"&&l.assignLounge(i,r)}catch{}return Nr&&zu(),{ok:!0,lounge:r,meeting:n}}function f2(i){Dr.delete(i);try{let t=globalThis.WallpaperFeed;t&&typeof t.clearLounge=="function"&&t.clearLounge(i)}catch{}}function d2(i,t){let e=null,n=r=>{let o=`${r.avatar||r.id}|${r.color||""}|${JSON.stringify(r.look||null)}`;o!==e&&(e=o,(r.has_glb===!1?Promise.resolve(null):p2(r.avatar||r.id)).then(a=>{if(i.dead||e!==o)return;if(a)return i.setModel(a.clone(!0));let l=r.look||{};i.setModel(H_({shape:l.shape,color:l.color||r.color,accessory:l.accessory,seed:r.id}))}))};n(t);let s=i.update.bind(i);i.update=(r,o,a)=>(n(r),s(r,o,a))}function p2(i){return Gp.has(i)||Gp.set(i,new zo().loadAsync(`${Kp}/blobs/${encodeURIComponent(i)}.glb`).then(t=>t.scene).catch(()=>null)),Gp.get(i)}function j_(i,t){for(let n of Be.values())n.retire(),qs.add(n);Be.clear(),hs=null,jt.setActive(i,{intro:t});let e=jt.activeY+Un.y;Ht.x.to(Un.x),Ht.z.to(Un.z),Ht.y.to(e),Ht.zoom.to(0),t&&(Ht.x.snap(Un.x),Ht.z.snap(Un.z),Ht.y.snap(e-2.6),Ht.zoom.snap(Math.log(.86)),Ht.y.to(e,.1),Ht.zoom.to(0,.1)),Qp=Ws,t&&(jt.prewarm(Wt),m2())}var Ul=!1;function Q_(i){Ul=!!i,un&&(un.style.background=wp(Ul)),In&&In.setDark&&In.setDark(Ul)}function Hu(){return me?me.domElement:null}function ty(i){Bl=!!i,Bl&&me&&Ol()}function ey(){if(Yp++,Bl=!1,me){me.setAnimationLoop(null);try{me.dispose()}catch{}me.domElement.remove()}try{In?.composer?.dispose?.()}catch{}Hs?.domElement.remove(),bi?.remove(),Bu?.disconnect(),Bu=null,un&&un.classList.remove("hq-scene","is-hovering"),Be.clear(),qs.clear(),ta.length=0,jp.clear(),jt=null,In=null,jo=null,ki=null,Wt=null,me=null,Hs=null,un=null,Mi=null,bi=null,Nr=null,Fu=!1,Xp=!1,hs=null,Ee=null,Gs=null,Qp=0}function m2(){let i=bi;i&&(bi=null,i.classList.add("is-done"),setTimeout(()=>i.remove(),450),Mi?.onReady?.())}function ny(i){if(!jt)return;if(i==="reset"){Ht.x.to(Un.x),Ht.z.to(Un.z),Ht.y.to(jt.activeY+Un.y),Ht.zoom.to(0);return}let t=Le(Math.exp(Ht.zoom.target)*(i==="in"?1.3:1/1.3),us.min,us.max);Ht.zoom.to(Math.log(t))}function iy(i){let t=Be.get(i);!t||!jt||(Ht.x.to(t.root.position.x),Ht.z.to(t.root.position.z),Ht.y.to(jt.activeY+.6),Ht.zoom.to(Math.log(Math.max(Math.exp(Ht.zoom.target),us.focus))))}function sy(i){g2(),Ht.x.step(i),Ht.y.step(i),Ht.z.step(i),Ht.zoom.step(i);let t=Le(Math.exp(Ht.zoom.x),us.min*.85,us.max*1.1);Math.abs(t-Wt.zoom)>1e-5&&(Wt.zoom=t,Wt.updateProjectionMatrix()),Vs.set(Ht.x.x,Ht.y.x,Ht.z.x),Wt.position.copy(Vs).addScaledVector(Zp,80)}function g2(){Ht.x.target=Le(Ht.x.target,-9.5,9.5),Ht.z.target=Le(Ht.z.target,-7.5,7.5),Ht.zoom.target=Le(Ht.zoom.target,Math.log(us.min),Math.log(us.max))}function Ol(){if(!me)return;let i=un.clientWidth||1,t=un.clientHeight||1;me.setSize(i,t,!1),Hs.setSize(i,t),In?.setSize(i,t);let e=i/t,n=Wp?zs.w:zs.w+(i2-zs.w)*(1-Le((i-560)/340,0,1)),s=Math.max(zs.h,n/e)/2*(Wp?l2:1);Wt.left=-s*e,Wt.right=s*e,Wt.top=s,Wt.bottom=-s;let r=Wp?0:Le((i-900)/600,0,1)*(r2-s2)/2;r>.5?Wt.setViewOffset(i,t,r,0,i,t):Wt.clearViewOffset(),Wt.updateProjectionMatrix()}var x2=()=>me.domElement.clientHeight/((Wt.top-Wt.bottom)/Wt.zoom);function _2(){let i=me.domElement;i.addEventListener("pointermove",b2),i.addEventListener("pointerleave",()=>{zi.active=!1,ry(null)}),!ku&&(i.addEventListener("pointerdown",y2),i.addEventListener("pointerup",M2),i.addEventListener("pointercancel",t=>{Hi.delete(t.pointerId),Ee=null,Gs=null}),i.addEventListener("wheel",w2,{passive:!1}),i.addEventListener("contextmenu",v2))}function sa(i){let t=me.domElement.getBoundingClientRect();na.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1)}function y2(i){if(i.button!=null&&i.button!==0)return;if(me.domElement.setPointerCapture?.(i.pointerId),sa(i),Hi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Hi.size===2){let[e,n]=[...Hi.values()];Gs={d:Math.hypot(e.x-n.x,e.y-n.y),z:Ht.zoom.target},Ee=null;return}let t=Vu();Ee={id:i.pointerId,x0:i.clientX,y0:i.clientY,lx:i.clientX,ly:i.clientY,lt:performance.now(),panning:!1,seating:!1,seatBot:t,vx:0,vz:0}}function v2(i){i.preventDefault(),sa(i);let t=Vu();t&&Mi.onBotContextMenu&&Mi.onBotContextMenu(t,i.clientX,i.clientY)}function b2(i){if(sa(i),zi.active=!0,qp=!0,Hi.has(i.pointerId)&&Hi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Gs&&Hi.size===2){let[u,f]=[...Hi.values()];Ht.zoom.to(Gs.z+Math.log(Math.hypot(u.x-f.x,u.y-f.y)/Gs.d));return}if(!Ee||Ee.id!==i.pointerId)return;let t=Math.hypot(i.clientX-Ee.x0,i.clientY-Ee.y0)>5;if(!Ee.panning&&!Ee.seating&&t&&(Ee.seatBot&&Mi.onAssignSeat?Ee.seating=!0:Ee.panning=!0),Ee.seating){un.classList.add("is-seating");return}if(!Ee.panning)return;let e=performance.now(),n=i.clientX-Ee.lx,s=i.clientY-Ee.ly,r=Math.max(.001,(e-Ee.lt)/1e3);Ee.lx=i.clientX,Ee.ly=i.clientY,Ee.lt=e;let o=x2(),a=-n/o,l=s/o/G_,c=(a-l)/Math.SQRT2,h=(-a-l)/Math.SQRT2;Ht.x.snap(Le(Ht.x.x+c,-9.5,9.5)),Ht.z.snap(Le(Ht.z.x+h,-7.5,7.5)),Ee.vx=Ee.vx*.6+c/r*.4,Ee.vz=Ee.vz*.6+h/r*.4}function M2(i){if(Hi.delete(i.pointerId),un.classList.remove("is-seating"),Gs){Hi.size<2&&(Gs=null),Ee=null;return}if(!Ee||Ee.id!==i.pointerId)return;let t=Ee;if(Ee=null,t.seating&&t.seatBot){sa(i);let e=S2();if(e){f2(t.seatBot);let n=Be.get(t.seatBot);n&&(n.markUserBusy(8e3),n.endAmbientTrip()),Mi.onAssignSeat?.(t.seatBot,e)}Mi.onSelectBot?.(t.seatBot);return}if(t.panning){let e=Le(t.vx,-30,30),n=Le(t.vz,-30,30);Ht.x.v=e,Ht.z.v=n,Ht.x.to(Ht.x.x+e*.12),Ht.z.to(Ht.z.x+n*.12);return}sa(i),Mi.onSelectBot?.(Vu())}function S2(){if(!fn||!fn.spots||!fn.spots.desks||(ea.setFromCamera(na,Wt),jt&&(Ou.constant=-jt.activeY),!ea.ray.intersectPlane(Ou,Vs)))return null;let i=Vs.x,t=Vs.z,e=null,n=1/0;for(let o=0;o<fn.spots.desks.length;o++){let a=fn.spots.desks[o];if(!a||!a.pos||o2.has(o+1))continue;let l=(a.pos.x-i)**2+(a.pos.z-t)**2;l<n&&(n=l,e=o)}if(e==null||n>4.5)return null;let s=e+1,r=Jp.indexOf(s)+1;return r>0?r:s}function w2(i){i.preventDefault(),sa(i);let t=Math.exp(Ht.zoom.target),e=Le(t*Math.exp(-i.deltaY*(i.ctrlKey?.012:.0016)),us.min,us.max);if(e===t)return;let n=Wt.view?.enabled?Wt.view.offsetX/Wt.view.fullWidth*2:0,s=na.x+n,r=na.y,o=1/t-1/e,a=s*Wt.right*o,l=r*Wt.top*o/G_;Ht.x.to(Ht.x.target+(a-l)/Math.SQRT2),Ht.z.to(Ht.z.target+(-a-l)/Math.SQRT2),Ht.zoom.to(Math.log(e))}function Vu(){ea.setFromCamera(na,Wt);let i=ea.intersectObjects([...jp],!1)[0];return i?i.object.userData.actorId:null}function ry(i){i!==hs&&(hs&&Be.get(hs)?.setHovered(!1),hs=i,i&&Be.get(i)?.setHovered(!0),un.classList.toggle("is-hovering",!!i),Mi.onHoverBot?.(i))}var V_=[3458905,689407,16752394,16732064,16738835,1357990],E2=new qe(.07,.035);function T2(i){let t=new se;t.position.copy(i);let e=[];for(let n=0;n<36;n++){let s=new Rt(E2,new Se({color:V_[n%V_.length],side:en,transparent:!0})),r=Math.random()*Math.PI*2,o=2.2+Math.random()*1.6,a=.8+Math.random()*1.2;e.push({m:s,v:new I(Math.cos(r)*a,o,Math.sin(r)*a),spin:new I(Math.random()*9,Math.random()*9,0)}),t.add(s)}ki.add(t),ta.push({group:t,parts:e,t:0,life:1.6})}function A2(i){for(let t=ta.length-1;t>=0;t--){let e=ta[t];e.t+=i;for(let n of e.parts)n.v.y-=6.5*i,n.v.multiplyScalar(1-1.4*i),n.m.position.addScaledVector(n.v,i),n.m.rotation.x+=n.spin.x*i,n.m.rotation.y+=n.spin.y*i,n.m.material.opacity=Math.max(0,1-e.t/e.life);e.t>=e.life&&(e.group.removeFromParent(),e.parts.forEach(n=>n.m.material.dispose()),ta.splice(t,1))}}function oy({width:i=1600,height:t=900,scale:e=1,box:n={x:.06,y:.06,w:.88,h:.76}}={}){let s=jt?.activeOpen();if(!s||!In)return null;let r=me.getPixelRatio(),o=Math.min(me.capabilities.maxTextureSize,me.capabilities.maxRenderbufferSize||1/0),a=Math.max(1,Math.min(e,o/i,o/t)),l=Wt.zoom,c=Wt.position.clone(),h=[],u=p=>{p?.visible&&(p.visible=!1,h.push(p))};for(let p of Be.values())u(p.ring);for(let p of qs)u(p.root);for(let p of ta)u(p.group);let f=s.walls,d=f?.data;try{if(d){let m={...d,floorName:`Floor ${jt.activeIndex+1}`,bots:d.bots.map(g=>({...g,name:"",task:"",step:""}))};f.screen&&f.drawScreen(m),f.board&&f.drawBoard(m)}me.setPixelRatio(a),me.setSize(i,t,!1),In.setSize(i,t),R2(i/t,n),Qo.set(0,jt.cabinY.x+.7,0).project(Wt),In.render(Le(Qo.y*.5+.5,0,1),0,1);let p=document.createElement("canvas");p.width=i,p.height=t;let x=p.getContext("2d");return x.imageSmoothingQuality="high",x.drawImage(me.domElement,0,0,i,t),p}finally{h.forEach(p=>{p.visible=!0}),d&&(f.screen&&f.drawScreen(d),f.board&&f.drawBoard(d)),me.setPixelRatio(r),Ol(),Wt.zoom=l,Wt.position.copy(c),Wt.updateProjectionMatrix(),Qo.set(0,jt.cabinY.x+.7,0).project(Wt),In.render(Le(Qo.y*.5+.5,0,1),0,Le(1.5/Wt.zoom,.25,1))}}var Pr=new Ke,Fl=new I;function R2(i,t){Wt.clearViewOffset(),Wt.zoom=1,Wt.position.set(Un.x,jt.activeY+Un.y,Un.z).addScaledVector(Zp,80),Wt.updateMatrixWorld(!0),jt.group.updateMatrixWorld(!0);let e=1/0,n=-1/0,s=1/0,r=-1/0,o=c=>{if(c.visible){if(c.isMesh&&c.geometry){c.geometry.boundingBox||c.geometry.computeBoundingBox(),Pr.copy(c.geometry.boundingBox);for(let h=0;h<8;h++)Fl.set(h&1?Pr.max.x:Pr.min.x,h&2?Pr.max.y:Pr.min.y,h&4?Pr.max.z:Pr.min.z).applyMatrix4(c.matrixWorld).applyMatrix4(Wt.matrixWorldInverse),e=Math.min(e,Fl.x),n=Math.max(n,Fl.x),s=Math.min(s,Fl.y),r=Math.max(r,Fl.y)}for(let h of c.children)o(h)}};o(jt.group),Number.isFinite(e)||(e=-zs.w/2,n=zs.w/2,s=-zs.h/2,r=zs.h/2);let a=Math.max((r-s)/t.h,(n-e)/(t.w*i)),l=a*i;Wt.left=(e+n)/2-(t.x+t.w/2)*l,Wt.right=Wt.left+l,Wt.top=(s+r)/2+(t.y+t.h/2)*a,Wt.bottom=Wt.top-a,Wt.updateProjectionMatrix()}function C2(){q_||!zi.active||!jt||(ea.setFromCamera(na,Wt),Ou.constant=-jt.activeY,ea.ray.intersectPlane(Ou,Vs)?(zi.x=Vs.x,zi.z=Vs.z):zi.active=!1)}var Qo=new I,Du=0;function I2(i){if(!me)return;if(!Bl||document.hidden){Lu.getDelta();return}if(ku){let s=i-Du;if(s<Nu-2)return;Du+=Math.max(1,Math.round(s/Nu))*Nu,i-Du>Nu/2&&(Du=i)}let t=$p?0:Math.min(Lu.getDelta(),.05);$p&&Lu.getDelta(),Ws=Lu.elapsedTime;let e=performance.now();jo.update(t,e),sy(t),jt&&jt.update(t,e),qp&&!Ee?.panning&&(qp=!1,ry(Vu())),C2();let n=jt?.activeOpen()?.alpha??1;for(let s of Be.values())s.hostAlpha=n,s.tick(t,Ws);for(let s of qs)s.hostAlpha=s.ctx.inst.alpha,s.tick(t,Ws),s.dead&&qs.delete(s);if(jt?.activeId&&Nr&&fn){let s=Object.values(Nr.bots||{}).filter(a=>a.floor===jt.activeId),r=$_(s);K_(r,s);let o=new Map;for(let a of s){let l=(Jp[(a.desk||1)-1]||1)-1,c=fn.spots.desks[l]||fn.spots.desks.find(Boolean);o.set(a.id,r.get(a.id)||c)}J_(Z_(jt.activeId),s,o)}A2(t),In?(Qo.set(0,(jt?jt.cabinY.x:0)+.7,0).project(Wt),In.render(Le(Qo.y*.5+.5,0,1),t,Le(1.5/Wt.zoom,.25,1))):me.render(ki,Wt),Hs&&(!ku||a2)&&Hs.render(ki,Wt),Mi?.onFrame?.()}var P2="/4d/blobs/thumbs/",L2="/4d/brand/logo-mark.png";var gy="bothq.waitBlur",xy="bothq.dock",N2={working:"working",idle:"resting",waiting_user:"waiting for you",error:"error",stuck:"stuck",done:"done"},_y={working:"Working",idle:"Resting",waiting_user:"Waiting for you",error:"Error",stuck:"Stuck",done:"Done"},D2={working:["working","working"],waiting_user:["waiting","waiting"],error:["error","errors"],stuck:["stuck","stuck"],idle:["resting","resting"],done:["done","done"]},yy=[{key:"working",s:"working",lead:!0,n:i=>i.working},{key:"attention",s:"waiting_user",alert:!0,n:i=>i.waiting_user+i.stuck},{key:"error",s:"error",alert:!0,n:i=>i.error},{key:"idle",s:"idle",n:i=>i.idle},{key:"done",s:"done",n:i=>i.done,hideZero:!0}],F2={week:"Week",day:"Day",month:"Month"},U2={week:"Usage this week",day:"Usage today",month:"Usage this month"},Ys={close:'<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',plus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M8 3v10M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',minus:'<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M3 8h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>',chev:'<svg class="bhq-chev" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',eyeOn:'<svg class="bhq-eye-on" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="8" cy="8" r="1.9" fill="currentColor"/></svg>',eyeOff:'<svg class="bhq-eye-off" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M1.6 8s2.4-4.4 6.4-4.4S14.4 8 14.4 8 12 12.4 8 12.4 1.6 8 1.6 8z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity=".55"/><path d="M3 13L13 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M3.5 8.6l3 3 6-6.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',share:'<svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M10 12.2V2.9M6.7 6.1L10 2.8l3.3 3.3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2 8.7H6A1.8 1.8 0 0 0 4.2 10.5v5A1.8 1.8 0 0 0 6 17.3h8a1.8 1.8 0 0 0 1.8-1.8v-5A1.8 1.8 0 0 0 14 8.7h-1.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>'},Gl=typeof matchMedia=="function"?matchMedia("(prefers-reduced-motion: reduce)"):{matches:!1},L=null;function O2(i){return{h:i||{},top:null,fl:null,panel:null,feed:null,zoom:null,dock:null,owned:[],last:{state:null,opts:{currentFloor:null,selectedBot:null}},skew:0,nowStr:null,floors:new Map,activeFloorId:null,cells:new Map,feedRows:new Map,feedOut:new Set,feedMode:null,feedFirst:!0,failedThumbs:new Set,mode:null,cardBot:null,teamFloor:null,teamReady:!1,ready:!1,keyHandler:null,ro:null,ro2:null,onResize:null,timer:null,fades:[],sh:null,phone:!1,land:!1,mqs:null,mqFn:null,ro3:null,cardY:0,cardStop:null,chipFloor:null}}function V(i,t,...e){let n=document.createElement(i);if(t)for(let s of Object.keys(t)){let r=t[s];r==null||r===!1||(s==="class"?n.className=r:s==="text"?n.textContent=r:n.setAttribute(s,r===!0?"":String(r)))}for(let s of e)s!=null&&s!==!1&&n.append(s);return n}function Fr(i){let t=document.createElement("template");return t.innerHTML=i.trim(),t.content.firstChild}function ne(i,t){t=t==null?"":String(t),i.textContent!==t&&(i.textContent=t)}function Qt(i,t,e){e==null||e===!1?i.hasAttribute(t)&&i.removeAttribute(t):(e=e===!0?"":String(e),i.getAttribute(t)!==e&&i.setAttribute(t,e))}function Xe(i,t){i.hidden!==!!t&&(i.hidden=!!t)}function oa(i,t,e){let n=i._vars||(i._vars={});n[t]!==e&&(n[t]=e,i.style.setProperty(t,e))}function Yn(i,t,e){i.classList.contains(t)!==!!e&&i.classList.toggle(t,!!e)}function ay(i,t,e){let n="_px_"+t;i[n]!==e&&(i[n]=e,i.style[t]=e+"px")}function Wl(i,t,e){return Math.min(e,Math.max(t,i))}function B2(i){return i<10?"0"+i:String(i)}function ra(i,t,e){if(t=Math.max(0,Math.round(Number(t)||0)),i._to===t)return;let n=i._to==null?0:i._to;if(i._to=t,i._raf&&(cancelAnimationFrame(i._raf),i._raf=0),i._tm&&(clearTimeout(i._tm),i._tm=0),e===!1||Gl.matches||n===t){i.textContent=String(t);return}let s=performance.now(),r=700,o=a=>{let l=Wl((a-s)/r,0,1),c=1-Math.pow(1-l,3);i.textContent=String(Math.round(n+(t-n)*c)),i._raf=l<1?requestAnimationFrame(o):0};i._raf=requestAnimationFrame(o),i._tm=setTimeout(()=>{i._tm=0,i._to===t&&(i.textContent=String(t))},r+150)}function Vl(i,t,e){return Math.abs(Math.trunc(i))===1?t:e}function nm(i,t){let e=D2[i]||[i,i];return Vl(t,e[0],e[1])}function ln(i){let t=typeof i=="number"?i:Date.parse(i);return Number.isFinite(t)?t:null}var k2=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hour12:!1});function Si(i){return i==null?"":k2.format(new Date(i))}var vy=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];function z2(i){if(i&&i.now&&i.now!==L.nowStr){let t=ln(i.now);t!=null&&(L.skew=Date.now()-t,L.nowStr=i.now)}}function $s(){return Date.now()-L.skew}function H2(i){let t=Math.floor(Math.max(0,i)/6e4);if(t<1)return"under a minute";if(t<60)return t+" min";let e=Math.floor(t/60),n=t%60;if(e<24)return n?e+" h "+n+" min":e+" h";let s=Math.floor(e/24),r=e%24;return r?s+" d "+r+" h":s+" d"}function by(i){let t=Math.floor(i/6e4);if(t<1)return"under a minute";let e=Math.floor(t/1440),n=Math.floor(t%1440/60),s=t%60;return e>0?e+" d "+n+" h":n>0?n+" h "+s+" min":s+" min"}function cm(i){let t=$s()-i,e=Math.floor(t/6e4);if(e<1)return"just now";if(e<60)return e+" min ago";let n=Math.floor(e/60);return n<24?n+" h ago":Math.floor(n/24)+" d ago"}function V2(i){let t=Math.floor(($s()-i)/6e4);if(t<1)return"now";if(t<60)return t+"m";let e=Math.floor(t/60);return e<24?e+"h":Math.floor(e/24)+"d"}function My(i){let t=i&&i.unreported;if(!t)return"";let e=ln(t.from),n=ln(t.to);return"Worked (unreported)"+(n==null?"":" \xB7 "+(e==null?"":Si(e)+"\u2013")+Si(n))}function im(i){let t=ln(i&&i.last_seen);return t==null?"never reported":"seen "+cm(t)}function G2(i){let t=i-$s();if(t<=0)return"due now";let e=Math.ceil(t/6e4);if(e<60)return"in "+e+" min";let n=Math.floor(e/60),s=e%60;if(n<6)return s?"in "+n+" h "+s+" min":"in "+n+" h";if(n<24)return"in "+n+" h";let r=new Date(i);return vy[r.getDay()]+" "+Si(i)}function W2(i){let t=new Date(i);return vy[t.getDay()]+" "+t.getDate()+"/"+B2(t.getMonth()+1)+" "+Si(i)}var q2=new Intl.NumberFormat("en-GB",{maximumFractionDigits:1});function X2(i){let t=Math.max(0,Number(i)||0)/60;return t<10?q2.format(t):String(Math.round(t))}function fs(i){return i&&(i.effective_status||i.status)||"idle"}function Xs(i){return N2[i]||i||""}function Y2(i){return/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(i||"")}function $2(i){let t=String(i||"").match(/[\p{L}\p{N}]+/gu)||[];return t.length?t.length===1?Array.from(t[0]).slice(0,2).join("").toUpperCase():(Array.from(t[0])[0]+Array.from(t[1])[0]).toUpperCase():"?"}function sm(i){let t=i.replace("#","");t.length===3&&(t=t.split("").map(n=>n+n).join(""));let e=n=>{let s=parseInt(t.slice(n,n+2),16)/255;return s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)};return .2126*e(0)+.7152*e(2)+.0722*e(4)}function K2(i){let t=sm(i),e=1.05/(t+.05),n=(t+.05)/(sm("#1D1D1F")+.05);return e>=n?"#fff":"#1D1D1F"}function ql(i,t,e){for(let n=0;n<t.length;n++){let s=i.children[e+n];s!==t[n]&&i.insertBefore(t[n],s||null)}}function Sy(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}function ly(i){try{return localStorage.getItem(i)}catch{return null}}function wy(i,t){try{localStorage.setItem(i,t)}catch{}}function rm(i){return i.classList.add("bhq-fade"),i.addEventListener("scroll",()=>Ey(i),{passive:!0}),L.fades.push(i),i}function Ey(i){let t=i.scrollHeight-i.clientHeight,e=t>2&&i.scrollTop>2,n=t>2&&i.scrollTop<t-2;oa(i,"--fade-t",e?"20px":"0px"),oa(i,"--fade-b",n?"22px":"0px"),Qt(i,"data-fade",e||n?"":null)}function Wu(){for(let i of L.fades)Ey(i)}function Z2(i){let t={working:0,idle:0,waiting_user:0,error:0,stuck:0,done:0},e=i.bots;if(e&&typeof e=="object"&&Object.keys(e).length)for(let n of Object.keys(e)){let s=fs(e[n]);t[s]=(t[s]||0)+1}else if(i.summary&&typeof i.summary=="object")for(let n of Object.keys(t))t[n]=Number(i.summary[n])||0;return t}function aa(i){i=i||{};let t=V("img",{class:"bhq-av-img",alt:"",draggable:"false",decoding:"async"}),e=V("span",{class:"bhq-av-fb","aria-hidden":"true"}),n=V("span",{class:"bhq-av"},t,e),s=i.orb===!1?null:V("i",{class:"bhq-orb","aria-hidden":"true"}),r=V("span",{class:"bhq-ava"+(i.cls?" "+i.cls:"")},n,s);return t.addEventListener("error",()=>{t._name&&L.failedThumbs.add(t._name),n.classList.add("is-fb")}),t.addEventListener("load",()=>n.classList.remove("is-fb")),{root:r,inner:n,img:t,fb:e}}function la(i,t,e){let n=t.avatar||t.id||"",s=Y2(t.color)?t.color:"#A1A1A6";oa(i.root,"--c",s),oa(i.root,"--fg",K2(s)),Yn(i.root,"is-dark",sm(s)<.04),Qt(i.root,"data-s",e||null),ne(i.fb,$2(t.name)),i.img._name!==n&&(i.img._name=n,!n||L.failedThumbs.has(n)?(i.img.removeAttribute("src"),i.inner.classList.add("is-fb")):(i.inner.classList.remove("is-fb"),i.img.src=t.has_glb===!1?j2(t):P2+encodeURIComponent(n)+".png"))}var J2="/4d/blobs/lib/",cy=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon","rounded_cube","cone","trio"],hy=["000000","A06B39","FB2B3E","FD690F","F59312","14C16F","13B7A2","1E86FC","8F59F9","F93498","959595"];function j2(i){let t=a=>{let l=2166136261;for(let c of a)l=Math.imul(l^c.charCodeAt(0),16777619)>>>0;return l},e=String(i.id||i.name||""),n=i.look||{},s=cy.includes(n.shape)?n.shape:cy[(t(`shape:${e}`)>>>4)%13];s==="sphere"&&n.accessory==="stem"&&(s="sphere_stem");let r=/^#([0-9a-f]{6})$/i.exec(n.color||i.color||""),o=hy[t(`color:${e}`)%10];if(r){let a=f=>[0,2,4].map(d=>parseInt(f.slice(d,d+2),16)),[l,c,h]=a(r[1]),u=1/0;Math.max(l,c,h)-Math.min(l,c,h)<28&&(o=(l+c+h)/3<75?"000000":"959595",u=0);for(let f of hy){let[d,p,x]=a(f),m=(l+d)/2,g=(2+m/256)*(l-d)**2+4*(c-p)**2+(3-m/256)*(h-x)**2;g<u&&(u=g,o=f)}}return`${J2}${s}-${o}.png`}function Yu(i){return L.owned.push(i),i}function hm(){if(L){if(L.keyHandler&&document.removeEventListener("keydown",L.keyHandler),L.onResize&&removeEventListener("resize",L.onResize),L.ro&&L.ro.disconnect(),L.ro2&&L.ro2.disconnect(),L.ro3&&L.ro3.disconnect(),L.mqs&&L.mqFn)for(let i of L.mqs)i.removeEventListener("change",L.mqFn);L.phone&&document.documentElement.classList.remove("bhq-phone","bhq-land"),L.timer&&clearInterval(L.timer);for(let i of L.owned)i.parentNode&&i.remove();L=null}}function Ty(i){hm(),L=O2(i);let t=document.getElementById("topbar"),e=document.getElementById("floors"),n=document.getElementById("panel"),s=document.getElementById("feed");s||(s=Yu(V("section",{id:"feed"})),document.body.append(s)),Qt(s,"aria-label","Activity feed");let r=document.getElementById("scene");r&&Qt(r,"aria-label","Office"),e&&Qt(e,"aria-label","Floors"),n&&Qt(n,"aria-label","Bot card and floor team"),t?Q2(t):console.warn("[ui] #topbar not found"),e?tR(e):console.warn("[ui] #floors not found"),n?nR(n):console.warn("[ui] #panel not found"),sR(s),rR(),uR(e,s),mR(s),gR(),L.keyHandler=o=>{if(o.key!=="Escape"||o.defaultPrevented)return;let a=o.target;a&&(a.isContentEditable||/^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName))||L.last.opts.selectedBot&&L.h.onSelectBot&&L.h.onSelectBot(null)},document.addEventListener("keydown",L.keyHandler),L.timer=setInterval(()=>{document.hidden||!L.last.state||(Vi("topbar",()=>L.top&&Ny(L.last.state)),Vi("dock",()=>L.dock&&By(L.last.state)),Vi("card-reset",()=>{let o=L.cardBot&&L.last.state.bots&&L.last.state.bots[L.cardBot];o&&L.panel&&Oy(L.last.state,o)}))},15e3)}function Q2(i){i.textContent="";let t=V("span",{class:"bhq-num bhq-clock",text:"--:--"}),e=V("div",{class:"bhq-brand bhq-surface"},V("img",{class:"bhq-mark",src:L2,alt:"",draggable:"false"}),V("b",{class:"bhq-word",text:"Grok Bot Dashboard"}),V("span",{class:"bhq-sep","aria-hidden":"true"}),V("span",{class:"bhq-live"},V("i",{class:"bhq-dot bhq-live-dot","aria-hidden":"true"}),"Live \xB7 ",t)),n={},s=V("div",{class:"bhq-summary bhq-surface",role:"group","aria-label":"Bot statuses"});for(let p of yy){let x=V("b",{class:"bhq-num"}),m=V("span"),g=V("span",{class:"bhq-schip"+(p.lead?" bhq-schip--lead":""),"data-s":p.s},V("i",{class:"bhq-dot","data-s":p.s,"aria-hidden":"true"}),x,m);n[p.key]={el:g,num:x,label:m,cfg:p},s.append(g)}let r=V("span",{class:"bhq-usage-label",text:"Week"}),o=V("i"),a=V("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Usage limit"},o),l=V("b",{class:"bhq-num bhq-usage-pct"}),c=V("span",{class:"bhq-reset"}),h=V("div",{class:"bhq-usage bhq-surface",hidden:!0},r,a,l,V("span",{class:"bhq-sep","aria-hidden":"true"}),c),u=V("span",{class:"bhq-demo bhq-surface",text:"DEMO",hidden:!0,title:"Demo data, not real bots"}),f=V("button",{class:"bhq-share bhq-surface",type:"button","aria-label":"Share an image of your office",title:"Share"},Fr(Ys.share));f.addEventListener("click",()=>{L.h.onShare&&L.h.onShare(f)});let d=V("div",{class:"bhq-right"},f,u,h);i.append(e,s,d),L.top={root:i,clock:t,chips:n,summary:s,usage:h,usageLabel:r,meter:a,fill:o,pct:l,reset:c,demo:u}}function tR(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow");let t=V("div",{class:"bhq-car","aria-hidden":"true"}),e=V("div",{class:"bhq-shaft"},t),n=V("b",{class:"bhq-num"}),s=V("div",{class:"bhq-fscroll"},e);i.append(V("div",{class:"bhq-fhead"},V("span",{text:"Floors"}),n),s),L.fl={root:i,shaft:e,car:t,count:n,fscroll:s,carTop:null,carH:null,carShown:!1,ready:!1},typeof ResizeObserver=="function"&&(L.ro=new ResizeObserver(()=>Uy()),L.ro.observe(e))}function eR(i){let t=V("span",{class:"bhq-num bhq-fnum"}),e=V("b",{class:"bhq-fname"}),n=V("span",{class:"bhq-fdots","aria-hidden":"true"}),s=V("span",{class:"bhq-num bhq-fcount"}),r=V("button",{class:"bhq-floor",type:"button","data-id":i},t,V("span",{class:"bhq-ftext"},e,n),s);return r.addEventListener("click",()=>{L.h.onSelectFloor&&L.h.onSelectFloor(i)}),{btn:r,num:t,name:e,dots:n,count:s,dotEls:[]}}function nR(i){i.textContent="";let t=V("h2",{class:"bhq-h2"}),e=V("span",{class:"bhq-tsub"}),n=V("b",{class:"bhq-num"}),s=V("b",{class:"bhq-num"}),r=V("b",{class:"bhq-num"}),o=V("em",{text:"waiting"}),a=V("em",{text:"errors"}),l=V("span",null,o,s),c=V("span",null,a,r),h=V("header",{class:"bhq-thead bhq-surface bhq-glow","data-s":"idle"},V("div",{class:"bhq-ttop"},t,e),V("div",{class:"bhq-tbot"},V("div",{class:"bhq-tbig"},n,V("span",{text:"working"})),V("div",{class:"bhq-tcounts"},l,c))),u=rm(V("div",{class:"bhq-members",role:"list"})),f=V("p",{class:"bhq-note",text:"Nobody here yet. A bot shows up when it logs its first step.",hidden:!0}),d=V("div",{class:"bhq-tcard bhq-surface bhq-glow"},u,f),p=V("section",{class:"bhq-team","aria-label":"Floor team"},h,d),x=V("button",{class:"bhq-close",type:"button","aria-label":"Close bot card",title:"Close (Esc)"},Fr(Ys.close));x.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(null)});let m=aa({cls:"bhq-ava--lg"}),g=V("h2",{class:"bhq-h2",tabindex:"-1"}),_=V("p",{class:"bhq-sub"}),w=V("i",{class:"bhq-dot","aria-hidden":"true"}),v=V("span"),S=V("span",{class:"bhq-status"},w,v),b=V("p",{class:"bhq-now"}),A=V("div",{class:"bhq-hero bhq-surface bhq-glow","data-s":"idle"},x,V("div",{class:"bhq-head"},m.root,V("div",{class:"bhq-head-text"},g,_)),S,b),y=V("p",{class:"bhq-task"}),E=V("div",{class:"bhq-block",hidden:!0},V("div",{class:"bhq-label",text:"Task"}),y),R=xt=>{let qt=V("b",{class:"bhq-num"}),ye=V("small",{text:xt||""});return{root:V("div",{class:"bhq-stat"},qt,ye),v:qt,l:ye}},P=R(),N=R(),k=R("h worked"),D=V("div",{class:"bhq-stats"},P.root,N.root,k.root),B=V("div",{class:"bhq-label"}),X=V("i"),$=V("span",{class:"bhq-slider",role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-label":"Share of total usage"},X),rt=V("b",{class:"bhq-num"}),Z=V("span",{class:"bhq-share"},rt," of all"),et=V("span",{class:"bhq-card-reset"}),z=V("div",{class:"bhq-useblock"},B,V("div",{class:"bhq-use"},$,Z),et),ot=V("ol",{class:"bhq-steps",role:"list"}),lt=V("div",{class:"bhq-stepsblock"},V("div",{class:"bhq-label",text:"Recent steps"}),ot),Ot=rm(V("div",{class:"bhq-card-body"},E,D,z,lt)),Bt=V("button",{class:"bhq-cta bhq-cta--start",type:"button",text:"Start",hidden:!0,title:"Resume this Paperclip agent"});Bt.addEventListener("click",()=>{let xt=Bt.getAttribute("data-agent");xt&&Ay(L.cardBot,xt)});let Zt=V("button",{class:"bhq-cta bhq-cta--clear",type:"button",text:"Clear error",hidden:!0,title:"Clear this Paperclip agent error (does not retry)"});Zt.addEventListener("click",()=>{let xt=Zt.getAttribute("data-agent");xt&&Ry(L.cardBot,xt)});let K=V("button",{class:"bhq-cta",type:"button",text:"Open chat",disabled:!0,title:"Set Wallpaper feed in Settings to enable Open chat"});K.addEventListener("click",()=>{let xt=K.getAttribute("data-chat");xt&&um(L.cardBot,xt)});let tt=V("div",{class:"bhq-more bhq-surface bhq-glow bhq-glow--still"},Ot,V("div",{class:"bhq-card-foot"},Bt,Zt,K)),mt=V("span",{class:"bhq-cgrab","aria-hidden":"true"}),Ut=V("section",{class:"bhq-card",hidden:!0,"aria-label":"Bot card"},mt,A,tt);i.append(Ut,p),L.panel={root:i,team:p,tcard:d,teamHead:h,teamTitle:t,teamSub:e,teamBig:n,nWait:s,nErr:r,rowWait:l,rowErr:c,lErr:a,list:u,teamEmpty:f,card:{root:Ut,hero:A,body:Ot,av:m,name:g,where:_,status:S,stDot:w,stTxt:v,now:b,taskBlock:E,task:y,sSteps:P,sTasks:N,sHours:k,usageLabel:B,useBlock:z,fuel:$,fillBar:X,shareNum:rt,reset:et,hist:ot,histSig:null,start:Bt,clearErr:Zt,cta:K,fresh:!0}}}function um(i,t){t&&(L.h.onOpenChat?L.h.onOpenChat(i,t):iR(t))}function Ay(i,t){t&&L.h.onStartAgent&&L.h.onStartAgent(i,t)}function Ry(i,t){t&&L.h.onClearErrorAgent&&L.h.onClearErrorAgent(i,t)}function iR(i){let t=document.createElement("a");t.href=i,t.rel="noopener",t.style.display="none",document.body.append(t),t.click(),t.remove()}function sR(i){i.textContent="",i.classList.add("bhq-surface","bhq-glow","bhq-glow--still");let t=V("ol",{class:"bhq-frows",role:"list","aria-live":"off"}),e=V("p",{class:"bhq-note",text:"No events yet.",hidden:!0});i.append(V("div",{class:"bhq-fhead"},V("span",{text:"Activity"})),t,e),L.feed={root:i,list:t,empty:e}}function rR(){let i=(e,n,s,r)=>{let o=V("button",{class:"bhq-zbtn "+e,type:"button","aria-label":s,title:s},Fr(n));return o.addEventListener("click",()=>{L.h.onZoom&&L.h.onZoom(r)}),o},t=Yu(V("div",{class:"bhq-zoom bhq-surface",role:"group","aria-label":"Scene zoom"},i("z-out",Ys.minus,"Zoom out","out"),V("span",{class:"bhq-sep","aria-hidden":"true"}),i("z-in",Ys.plus,"Zoom in","in")));document.body.append(t),L.zoom={root:t}}function Gu(i,t,e){let n=V("span",{class:"bhq-dcount bhq-num",text:"0"}),s=rm(V("div",{class:"bhq-dbody-in"})),r=V("button",{class:"bhq-dtoggle",type:"button","aria-expanded":"false"},V("span",{class:"bhq-dtitle",text:t}),n),o=V("div",{class:"bhq-dh"+(e&&e.eye?" has-eye":"")},r),a=null;e&&e.eye&&(a=V("button",{class:"bhq-eye",type:"button","aria-pressed":"false","aria-label":"Hide this panel for the camera",title:"Hide for the camera"},Fr(Ys.eyeOn),Fr(Ys.eyeOff)),o.append(a)),o.append(Fr(Ys.chev));let l=V("section",{class:"bhq-dcard bhq-surface bhq-glow bhq-glow--still","aria-label":t,"data-dock":i},o,V("div",{class:"bhq-dbody"},s)),c={id:i,root:l,toggle:r,count:n,inner:s,eye:a,open:!1,shown:!1,rows:0};return r.addEventListener("click",()=>fm(c,!c.shown)),c}var oR=44,aR=140,lR=92,cR=8;function hR(i,t){i.shown=!!t,Yn(i.root,"is-open",i.shown),Qt(i.toggle,"aria-expanded",i.shown?"true":"false"),i.inner.inert=!i.shown}function fm(i,t,e=!0){i.open=!!t;let n=L.dock;if(i.open&&(n.lru=n.lru.filter(s=>s!==i),n.lru.push(i)),e){let s={};for(let r of["waiting","finished","routines"])s[r]=!!n[r].open;wy(xy,JSON.stringify(s))}om(n.avail==null?1/0:n.avail)}function om(i){let t=L.dock;t.avail=i;let e=[t.check,t.waiting,t.finished,t.routines],n=e.filter(o=>!o.root.hidden),s=new Set(n.filter(o=>o.open)),r=()=>n.reduce((o,a)=>o+(s.has(a)?a.rows?aR:lR:oR),0)+cR*Math.max(0,n.length-1);for(;s.size&&r()>i;){let o=t.lru.find(a=>s.has(a))||[...s][0];s.delete(o)}for(let o of e)hR(o,s.has(o))}function uy(i,t=!0){let e=L.dock;e.blurred=!!i,Yn(e.waiting.root,"is-blurred",e.blurred),Qt(e.waiting.eye,"aria-pressed",e.blurred?"true":"false"),Qt(e.waiting.eye,"aria-label",e.blurred?"Show this panel":"Hide this panel for the camera"),Qt(e.waiting.eye,"title",e.blurred?"Show":"Hide for the camera"),e.wlist.inert=e.blurred,t&&wy(gy,e.blurred?"1":"0")}function uR(i,t){let e=Yu(V("aside",{class:"bhq-dock","aria-label":"Waiting on me, finished work and routines"})),n=Gu("check","Status check"),s=Gu("waiting","Waiting on me",{eye:!0}),r=Gu("finished","Finished"),o=Gu("routines","Routines"),a=V("div",{class:"bhq-wlist"}),l=V("p",{class:"bhq-note",text:"Nothing is waiting on you.",hidden:!0});s.inner.append(a,l);let c=V("ol",{class:"bhq-tl",role:"list"}),h=V("p",{class:"bhq-note",text:"Nothing finished in the last 24 hours.",hidden:!0});r.inner.append(c,h);let u=V("ul",{class:"bhq-rl",role:"list"}),f=V("p",{class:"bhq-note",text:"No routines scheduled.",hidden:!0});o.inner.append(u,f);let d=V("ul",{class:"bhq-ck",role:"list"}),p=V("p",{class:"bhq-note bhq-cknote"});n.inner.append(d,p),n.root.hidden=!0,e.append(n.root,s.root,r.root,o.root),document.body.append(e),L.dock={root:e,check:n,waiting:s,finished:r,routines:o,wlist:a,wempty:l,tl:c,fempty:h,rl:u,rempty:f,cl:d,cnote:p,lru:[],wrows:new Map,crows:new Map,checkT:null,finSig:null,finRefs:[],routSig:null,routRefs:[],copied:new Map,blurred:!1,floors:i,feed:t};let x=null;try{x=JSON.parse(ly(xy)||"null")}catch{x=null}for(let m of["routines","finished","waiting"])fm(L.dock[m],x&&typeof x[m]=="boolean"?x[m]:m==="waiting",!1);s.eye.addEventListener("click",()=>uy(!L.dock.blurred)),uy(ly(gy)==="1",!1),L.onResize=()=>zl(),addEventListener("resize",L.onResize),typeof ResizeObserver=="function"&&(L.ro2=new ResizeObserver(()=>zl()),i&&L.ro2.observe(i),t&&L.ro2.observe(t)),zl()}function fy(i){return!!i&&i.getClientRects().length>0}function zl(){let i=L&&L.dock;if(!i)return;if(L.phone){om(1/0),Wu();return}let t=24,e=fy(i.floors)?i.floors.offsetTop+i.floors.offsetHeight+10:96,n=fy(i.feed)?i.feed.offsetTop-10:innerHeight-t,s=Math.max(0,n-e);ay(i.root,"top",e),ay(i.root,"maxHeight",s),om(s),Wu()}var fR="(max-width: 600px), (max-height: 500px) and (max-width: 950px)",dR="(max-height: 500px) and (orientation: landscape)",pR=6;function em(i,t){return i*t*.55/(t+.55*Math.abs(i))}function Cy(i){let t=i[i.length-1],e=i[0];for(let s of i)if(t.t-s.t<=100){e=s;break}let n=t.t-e.t;return n>0?(t.y-e.y)/n*1e3:0}function dy(i){return i/1e3*.998/(1-.998)}function am(i,t,e,n,s,r,o){let a=Math.pow(2*Math.PI/(r||.36),2),l=2*(o||1)*Math.sqrt(a),c=i,h=e||0,u=performance.now(),f=0,d=!1,p=x=>{if(d)return;let m=Math.min(.032,Math.max(.001,(x-u)/1e3));if(u=x,h+=(-a*(c-t)-l*h)*m,c+=h*m,Math.abs(c-t)<.35&&Math.abs(h)<12){f=0,n(t),s&&s();return}n(c),f=requestAnimationFrame(p)};return f=requestAnimationFrame(p),()=>{d=!0,f&&cancelAnimationFrame(f)}}function py(i,t){let e=null;i.addEventListener("pointerdown",s=>{if(!(!t.can(s)||s.pointerType==="mouse"&&s.button!==0)){e={id:s.pointerId,y0:s.clientY,s:t.begin(),hist:[{t:s.timeStamp,y:s.clientY}],moved:!1};try{i.setPointerCapture(s.pointerId)}catch{}}}),i.addEventListener("pointermove",s=>{if(!e||s.pointerId!==e.id)return;let r=s.clientY-e.y0;!e.moved&&Math.abs(r)<pR||(e.moved=!0,e.hist.push({t:s.timeStamp,y:s.clientY}),e.hist.length>8&&e.hist.shift(),t.move(e.s+r))});let n=s=>{if(!e||s.pointerId!==e.id)return;let r=e;e=null,t.end(r.moved,r.moved?Cy(r.hist):0)};i.addEventListener("pointerup",n),i.addEventListener("pointercancel",n)}var qu={};function Iy(i,t){qu[i]!==t&&(qu[i]=t,document.documentElement.style.setProperty(i,t))}function mR(i){let t=V("button",{class:"bhq-sgrab",type:"button","aria-expanded":"false","aria-label":"Expand panel"},V("i",{"aria-hidden":"true"})),e=V("div",{class:"bhq-shead"}),n=V("div",{class:"bhq-speek"},t,e),s=V("div",{class:"bhq-sbody"}),r=V("i",{class:"bhq-sprobe","aria-hidden":"true"}),o=Yu(V("div",{class:"bhq-sheet",role:"region","aria-label":"Floor panel"},n,s,r));document.body.append(o);let a=L.sh={root:o,peek:n,body:s,grab:t,headSlot:e,probe:r,feed:i,y:0,H:0,travel:0,vis0:132,open:!1,busy:!1,cancel:null};a.start=new URLSearchParams(location.search).get("sheet")==="open";let l=d=>{let p=a.travel;Xu(d<0?-em(-d,160):d>p?p+em(d-p,160):d)},c=(d,p)=>{if(a.busy=!1,!d){Hl(!a.open);return}Hl(a.y+dy(p)<a.travel/2,p)};py(n,{can:()=>L.phone&&!L.land,begin:()=>(a.cancel&&(a.cancel(),a.cancel=null),a.busy=!0,a.y),move:l,end:c}),t.addEventListener("click",d=>{d.detail===0&&Hl(!a.open)});let h=null;s.addEventListener("touchstart",d=>{h=a.open&&!L.land&&d.touches.length===1&&s.scrollTop<=0?{y0:d.touches[0].clientY,on:!1,s:0,hist:[]}:null},{passive:!0}),s.addEventListener("touchmove",d=>{if(!h)return;let p=d.touches[0].clientY;if(!h.on){if(s.scrollTop>0||p-h.y0<-2){h=null;return}if(p-h.y0<3)return;h.on=!0,h.y0=p,h.s=a.y,a.busy=!0,a.cancel&&(a.cancel(),a.cancel=null)}d.cancelable&&d.preventDefault(),h.hist.push({t:d.timeStamp,y:p}),h.hist.length>8&&h.hist.shift(),l(h.s+(p-h.y0))},{passive:!1});let u=()=>{if(!h)return;let d=h;h=null,d.on&&c(!0,Cy(d.hist))};s.addEventListener("touchend",u),s.addEventListener("touchcancel",u);let f=L.panel;if(f){let d=f.card;py(d.root,{can:p=>L.phone&&!L.land&&!!p.target.closest(".bhq-hero, .bhq-cgrab")&&!p.target.closest("button"),begin:()=>(L.cardStop&&(L.cardStop(),L.cardStop=null),L.cardY),move:p=>{L.cardY=p<0?-em(-p,120):p,kl(L.cardY)},end:(p,x)=>{if(!p)return;let m=L.cardY;if(m+dy(x)>130||x>900){let g=d.root.offsetHeight+24;L.cardStop=am(m,g,x,_=>{L.cardY=_,kl(_)},()=>{L.cardStop=null,L.h.onSelectBot&&L.h.onSelectBot(null),setTimeout(()=>{L.mode==="card"&&(L.cardY=0,kl(0))},120)},.3,1)}else L.cardStop=am(m,0,x,g=>{L.cardY=g,kl(g)},()=>{L.cardStop=null},.4,Math.abs(x)>600?.8:1)}})}typeof ResizeObserver=="function"&&(L.ro3=new ResizeObserver(()=>{lm(),dm()}),L.ro3.observe(o),L.ro3.observe(n),f&&L.ro3.observe(f.card.root))}function kl(i){L.panel.card.root.style.transform=i?"translate3d(0,"+i.toFixed(1)+"px,0)":""}function Py(){L.cardStop&&(L.cardStop(),L.cardStop=null),L.cardY=0,L.panel&&kl(0)}function Xu(i){let t=L.sh;t.y=i,t.root.style.transform="translate3d(0,"+i.toFixed(1)+"px,0)",t.body.style.opacity=Wl((t.travel-i)/36,0,1).toFixed(2),dm()}function Hl(i,t,e){let n=L.sh;if(!n||!L.phone||(n.open=!!i,Qt(n.grab,"aria-expanded",n.open?"true":"false"),Qt(n.grab,"aria-label",n.open?"Collapse panel":"Expand panel"),Yn(n.root,"is-open",n.open),n.body.inert=!n.open&&!L.land,n.cancel&&(n.cancel(),n.cancel=null),L.land))return;let s=n.open?0:n.travel;if(e||Gl.matches||document.hidden){Xu(s);return}n.cancel=am(n.y,s,t||0,Xu,()=>{n.cancel=null},n.open?.4:.34,Math.abs(t||0)>600?.82:1)}function lm(){let i=L&&L.sh;!i||!L.phone||(i.H=i.root.offsetHeight,i.vis0=i.peek.offsetHeight+i.probe.offsetHeight,i.travel=L.land?0:Math.max(0,i.H-i.vis0),Iy("--bhq-peek",i.vis0+"px"),L.land?(i.root.style.transform="",i.body.style.opacity="",i.y=0):!i.busy&&!i.cancel&&Xu(i.open?0:i.travel))}function dm(){let i=L&&L.sh;if(!i||!L.phone)return;let t=L.panel&&L.panel.card.root,e;L.land?e=0:L.mode==="card"&&t&&!t.hidden?e=t.offsetHeight:e=Math.max(0,i.H-Wl(i.y,-40,i.travel)),Iy("--bhq-vis",Math.round(e*10)/10+"px")}function gR(){if(typeof matchMedia!="function")return;let i=matchMedia(fR),t=matchMedia(dR);L.mqs=[i,t],L.mqFn=()=>xR(i.matches,i.matches&&t.matches),i.addEventListener("change",L.mqFn),t.addEventListener("change",L.mqFn),L.mqFn()}function xR(i,t){let e=L.phone,n=L.sh,s=L.dock,r=L.panel;L.phone=i,L.land=i&&t;let o=document.documentElement;if(o.classList.toggle("bhq-phone",i),o.classList.toggle("bhq-land",L.land),i&&!e)r&&n.headSlot.append(r.teamHead),n.body.append(...[s&&s.waiting.root,r&&r.tcard,s&&s.finished.root,s&&s.routines.root,n.feed].filter(Boolean)),n.open=n.start||L.land,n.start=!1,lm(),Hl(n.open,0,!0),L.chipFloor=null;else if(!i&&e){n.cancel&&(n.cancel(),n.cancel=null),n.root.style.transform="",n.body.style.opacity="",n.body.inert=!1,Py(),s&&s.root.append(s.waiting.root,s.finished.root,s.routines.root),r&&r.team.append(r.teamHead,r.tcard),n.feed&&(s&&s.root.parentNode?s.root.parentNode.insertBefore(n.feed,s.root):document.body.append(n.feed));for(let a of Object.keys(qu))document.documentElement.style.removeProperty(a);qu={}}else i&&(L.land&&(n.open=!0),lm(),Hl(n.open,0,!0));zl(),Wu(),i&&L.last.state&&Fy(L.activeFloorId)}function Ly(i,t){if(!L||!i)return;t=t||{};let e={currentFloor:t.currentFloor||null,selectedBot:t.selectedBot||null};L.last={state:i,opts:e},z2(i),L.ready||(L.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>document.documentElement.classList.add("bhq-ready")))),Vi("topbar",()=>L.top&&Ny(i)),Vi("floors",()=>L.fl&&yR(i,e)),Vi("panel",()=>L.panel&&vR(i,e)),Vi("feed",()=>L.feed&&TR(i)),Vi("dock",()=>L.dock&&By(i)),Vi("zoom",()=>{L.zoom&&!L.zoom.root.isConnected&&document.body.append(L.zoom.root)}),Vi("fades",Wu)}var my=new Set;function Vi(i,t){try{t()}catch(e){my.has(i)||(my.add(i),console.error("[ui] render failed in "+i,e))}}function Ny(i){let t=L.top;ne(t.clock,Si(Date.now()));let e=Z2(i);for(let r of yy){let o=t.chips[r.key],a=r.n(e),l=nm(r.s,a);ra(o.num,a),ne(o.label,l),Yn(o.el,"is-zero",a===0),Yn(o.el,"is-alert",!!r.alert&&a>0),r.hideZero&&Xe(o.el,a===0);let c=a+" "+l;r.key==="attention"&&e.stuck>0&&(c=e.waiting_user+" "+nm("waiting_user",e.waiting_user)+", "+e.stuck+" stuck"),Qt(o.el,"title",c)}let n=i.usage||{},s=Number.isFinite(n.total_used_pct)?Wl(n.total_used_pct,0,100):null;if(Xe(t.usage,s==null),s!=null){let r=s>=95?"error":s>=85?"warn":null;ne(t.usageLabel,F2[n.period]||"Limit"),oa(t.meter,"--p",(s/100).toFixed(3)),ne(t.pct,(Math.round(s*10)/10).toFixed(1)+"%"),Qt(t.meter,"aria-valuenow",Math.round(s)),Qt(t.meter,"data-level",r),Qt(t.usage,"data-level",r);let o="",a=ln(n.resets_at);if(a!=null){let h=a-$s();o=h>0?"resets in "+by(h):"resetting now"}ne(t.reset,o),Xe(t.reset,!o);let l=t.reset.previousElementSibling;l&&Xe(l,!o);let c=ln(n.updated_at);Qt(t.usage,"title",c!=null?"Updated at "+Si(c):null)}Xe(t.demo,!i.demo)}function _R(i){let t=[];for(let e of["working","waiting_user","error","stuck","done","idle"]){let n=Number(i&&i[e])||0;n>0&&t.push(n+" "+nm(e,n))}return t.join(", ")}function Dy(i,t){let e=i.bots||{};return Array.isArray(t.bots)?t.bots:Object.keys(e).filter(n=>e[n].floor===t.id)}function yR(i,t){let e=L.fl,n=i.bots||{},s=(i.floors||[]).slice().sort((a,l)=>(Number(l.order)||0)-(Number(a.order)||0)),r=new Set,o=s.some(a=>a.id===t.currentFloor)?t.currentFloor:null;L.activeFloorId=o,ne(e.count,s.length),s.forEach((a,l)=>{let c=L.floors.get(a.id);c||(c=eR(a.id),L.floors.set(a.id,c)),r.add(a.id);let h=a.order!=null&&Number.isFinite(Number(a.order))?Number(a.order):s.length-l,u=Dy(i,a);for(ne(c.num,h),ne(c.name,a.name||a.id),ne(c.count,u.length);c.dotEls.length<u.length;){let p=V("i",{class:"bhq-dot"});c.dotEls.push(p),c.dots.append(p)}for(;c.dotEls.length>u.length;)c.dotEls.pop().remove();u.forEach((p,x)=>Qt(c.dotEls[x],"data-s",fs(n[p])));let f=null;for(let p of u){let x=fs(n[p]);if(x==="error"){f="error";break}(x==="waiting_user"||x==="stuck")&&(f="waiting_user")}Qt(c.btn,"data-alert",f);let d=_R(a.counts);Qt(c.btn,"aria-label","Floor "+h+", "+(a.name||a.id)+": "+u.length+" "+Vl(u.length,"bot","bots")+(d?" ("+d+")":"")),Qt(c.btn,"title",d||null),Qt(c.btn,"aria-current",a.id===o?"true":null)});for(let[a,l]of L.floors)r.has(a)||(l.btn.remove(),L.floors.delete(a));ql(e.shaft,s.map(a=>L.floors.get(a.id).btn),1),Uy(),Fy(o)}function Fy(i){let t=L.fl;if(!L.phone||!i||L.chipFloor===i)return;let e=L.floors.get(i);if(!e||!e.btn.offsetWidth)return;let n=L.chipFloor==null;L.chipFloor=i;let s=t.fscroll,r=e.btn.getBoundingClientRect(),o=s.getBoundingClientRect();s.scrollTo({left:Math.max(0,s.scrollLeft+(r.left-o.left)-(o.width-r.width)/2),behavior:n||Gl.matches?"auto":"smooth"})}function Uy(){let i=L&&L.fl;if(!i)return;let t=L.activeFloorId?L.floors.get(L.activeFloorId):null;if(!t||!t.btn.isConnected||!t.btn.offsetHeight){i.carShown&&(i.car.style.opacity="0",i.carShown=!1);return}let e=t.btn.offsetTop,n=t.btn.offsetHeight;(i.carTop!==e||i.carH!==n)&&(i.carTop=e,i.carH=n,i.car.style.transform="translateY("+e+"px)",i.car.style.height=n+"px"),i.carShown||(i.car.style.opacity="1",i.carShown=!0),i.ready||(i.ready=!0,requestAnimationFrame(()=>requestAnimationFrame(()=>i.shaft.classList.add("is-ready"))))}function vR(i,t){let e=L.panel,n=i.bots||{},s=(i.floors||[]).find(u=>u.id===t.currentFloor)||null,r=t.selectedBot?n[t.selectedBot]:null,o=r?"card":"team",a=L.mode,l=L.cardBot,c=e.team.contains(document.activeElement),h=e.card.root.contains(document.activeElement);if(o!==a&&(Xe(e.team,o==="card"),Xe(e.card.root,o==="team"),L.mode=o,o==="card"&&Py(),L.sh&&(Yn(L.sh.root,"is-away",o==="card"),dm())),o==="card")L.cardBot!==r.id&&(L.cardBot=r.id,e.card.histSig=null,e.card.fresh=!0,e.card.body.scrollTop=0,a==="card"&&Sy(e.card.root,"is-enter")),Oy(i,r),a!=="card"&&c&&e.card.name.focus({preventScroll:!0});else if(L.cardBot=null,MR(i,s,t),a==="card"&&h){let u=L.cells.get(l);u&&u.btn.focus({preventScroll:!0})}}function bR(i){let t=aa(),e=V("b",{class:"bhq-mname"}),n=V("span",{class:"bhq-mstep"}),s=V("span",{class:"bhq-mseen bhq-num"}),r=V("button",{class:"bhq-member",type:"button","data-id":i,role:"listitem"},t.root,V("span",{class:"bhq-mtext"},e,n),s);return r.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(i)}),{btn:r,av:t,name:e,step:n,seen:s}}function MR(i,t,e){let n=L.panel,s=i.bots||{},r=t?Dy(i,t):[];r=r.filter(d=>s[d]);let o=!0;L.teamFloor!==(t?t.id:null)&&(L.teamFloor=t?t.id:null,n.list.scrollTop=0,o=!L.teamReady,L.teamReady&&Sy(n.list,"is-enter")),L.teamReady=!0,ne(n.teamTitle,t?t.name||t.id:"No floor selected");let a=r.length,l=0,c=0,h=0;for(let d of r){let p=fs(s[d]);p==="working"?l++:p==="waiting_user"||p==="stuck"?c++:p==="error"&&h++}ne(n.teamSub,t?a+" "+Vl(a,"bot","bots"):L.phone?"Pick a floor above":"Pick a floor on the left"),Qt(n.teamHead,"data-s",l>0?"working":"idle"),ra(n.teamBig,l,o),ra(n.nWait,c,o),ra(n.nErr,h,o),ne(n.lErr,h===1?"error":"errors"),Yn(n.rowWait,"is-zero",!c),Yn(n.rowErr,"is-zero",!h),Xe(n.teamEmpty,a>0||!t);let u=new Set(r);for(let[d,p]of L.cells)u.has(d)||(p.btn.remove(),L.cells.delete(d));let f=r.map(d=>{let p=L.cells.get(d);p||(p=bR(d),L.cells.set(d,p));let x=s[d],m=fs(x);la(p.av,x,m),ne(p.name,x.name||d);let g=m==="idle"?My(x):"",_=m==="idle"&&x.status==="working";ne(p.step,g||(_?Xs(m):x.step||Xs(m))),Qt(p.step,"data-u",g?"":null);let w=ln(x.last_seen);return ne(p.seen,w==null?"\u2013":V2(w)),Qt(p.seen,"title",w==null?"No status line yet":"Last status line "+cm(w)+" ("+Si(w)+")"),Qt(p.btn,"data-s",m),Qt(p.btn,"aria-label",(x.name||d)+", "+Xs(m)+", "+im(x)),Qt(p.btn,"title",(x.name||d)+": "+Xs(m)+(x.step?". "+x.step:"")+" \xB7 "+im(x)),p.btn});ql(n.list,f,0)}function SR(i){return V("li",{class:"bhq-step-row"},V("time",{class:"bhq-num",text:Si(ln(i.t))}),V("span",{text:i.step||Xs(i.status),title:i.step||""}))}function Oy(i,t){let e=L.panel.card,n=fs(t),s=$s(),r=!e.fresh;Qt(e.hero,"data-s",n),la(e.av,t,n),ne(e.name,t.name||t.id);let o=(i.floors||[]).find(P=>P.id===t.floor),a=o&&(o.name||o.id)||t.group||"",l=Number.isFinite(Number(t.desk))&&t.desk!=null?" \xB7 desk "+Number(t.desk):"";ne(e.where,a+l+" \xB7 "+im(t)),Qt(e.stDot,"data-s",n);let c=ln(t.since),h=c==null?"":" \xB7 "+(s-c<6e4?"just now":H2(s-c));ne(e.stTxt,(_y[n]||Xs(n))+h);let u=n==="idle"?My(t):"";ne(e.now,u||(n==="idle"&&t.status==="working"?"Went quiet after: "+(t.step||"a task"):t.step||"No data on the current step"));let f=typeof t.task=="string"?t.task.trim():"",d=!!f&&!/^tsk-\d+$/i.test(f)&&f!==(t.step||"").trim();Xe(e.taskBlock,!d),ne(e.task,d?f:"");let p=t.today||{},x=Number(p.events)||0,m=Number(p.tasks_done)||0;ra(e.sSteps.v,x,r),ne(e.sSteps.l,Vl(x,"step","steps")),ra(e.sTasks.v,m,r),ne(e.sTasks.l,Vl(m,"task","tasks")),ne(e.sHours.v,X2(p.working_min));let g=i.usage&&i.usage.period;ne(e.usageLabel,U2[g]||"Usage");let _=Number.isFinite(t.usage_share)?Wl(t.usage_share,0,1):null;Xe(e.useBlock,_==null),_!=null&&(oa(e.fuel,"--p",(_>0?Math.max(_,.02):0).toFixed(3)),Qt(e.fuel,"aria-valuenow",Math.round(_*100)),ne(e.shareNum,Math.round(_*100)+"%"));let w=ln(i.usage&&i.usage.resets_at),v="";if(w!=null){let P=w-s;v=P>0?"resets in "+by(P):"resetting now"}ne(e.reset,v),Xe(e.reset,!v||_==null);let S=(t.history||[]).slice(0,4);S.length>1&&S[0].step===t.step&&(S=S.slice(1)),S=S.slice(0,3);let b=t.id+`
`+S.map(P=>P.t+"|"+P.status+"|"+P.step).join(`
`);if(b!==e.histSig){e.histSig=b,e.hist.textContent="",S.length||e.hist.append(V("li",{class:"bhq-step-empty",text:"No steps yet."}));for(let P of S)e.hist.append(SR(P))}let A=!!t.chat_url;e.cta.disabled===A&&(e.cta.disabled=!A),Qt(e.cta,"data-chat",A?t.chat_url:null);let y=A?"Open this bot chat":i.wallpaper_feed?"No chat link yet":"Set Wallpaper feed in Settings to enable Open chat";Qt(e.cta,"title",y);let E=(n==="waiting_user"||n==="stuck")&&!!t.paperclip_agent_id;Xe(e.start,!E),Qt(e.start,"data-agent",E?t.paperclip_agent_id:null),Qt(e.start,"disabled",e.startBusy?"true":null),ne(e.start,e.startBusy?"Starting\u2026":"Start");let R=n==="error"&&!!t.paperclip_agent_id;Xe(e.clearErr,!R),Qt(e.clearErr,"data-agent",R?t.paperclip_agent_id:null),Qt(e.clearErr,"disabled",e.clearErrBusy?"true":null),ne(e.clearErr,e.clearErrBusy?"Clearing\u2026":"Clear error"),e.fresh=!1}function wR(i,t){let e=t.bots&&t.bots[i.bot],n=i.name||e&&e.name||i.bot||"",s=i.status||"idle";return V("li",{class:"bhq-frow","data-s":s},V("time",{class:"bhq-num",text:Si(ln(i.t)),datetime:i.t||""}),V("i",{class:"bhq-dot","data-s":s,"aria-hidden":"true"}),V("span",{class:"bhq-ftxt"},V("b",{text:n})," "+(i.step||Xs(i.status))))}function ER(i){L.feedOut.add(i),i.classList.add("is-out");let t=()=>{i.remove(),L.feedOut.delete(i)};Gl.matches?t():setTimeout(t,420)}function TR(i){let t=L.feed,e=(Array.isArray(i.feed)?i.feed:[]).slice(0,4),n=new Map,s=new Array(e.length);for(let c=e.length-1;c>=0;c--){let h=e[c],u=h.t+"|"+h.bot+"|"+h.status+"|"+h.step,f=n.get(u)||0;n.set(u,f+1),s[c]=f?u+"#"+f:u}let r=new Set(s);for(let[c,h]of L.feedRows)r.has(c)||(L.feedRows.delete(c),ER(h));let o=0;for(let c of s)L.feedRows.has(c)||o++;let a=!L.feedFirst&&o>0&&o<4&&!Gl.matches,l=e.map((c,h)=>{let u=L.feedRows.get(s[h]);if(!u){if(u=wR(c,i),a){u.classList.add("is-new");let f=()=>u.classList.remove("is-new");u.addEventListener("animationend",f,{once:!0}),setTimeout(f,700)}L.feedRows.set(s[h],u)}return u});ql(t.list,l.concat([...L.feedOut]),0),Xe(t.empty,e.length>0),L.feedFirst=!1}function By(i){CR(i),PR(i),LR(i),FR(i),zl()}function pm(i,t,e){return i.bots&&i.bots[t]||{id:t,name:e||t,avatar:t}}var AR=15*6e4;function RR(i){let t=aa({orb:!1}),e=V("b",{class:"bhq-ckname"}),n=V("span",{class:"bhq-ckat bhq-num"}),s=V("li",{class:"bhq-ckrow","data-id":i},t.root,e,n);return s.addEventListener("click",()=>{L.h.onSelectBot&&L.h.onSelectBot(i)}),{li:s,av:t,name:e,at:n}}function CR(i){let t=L.dock,e=i.check,n=e&&Array.isArray(e.bots)?e.bots:[];if(Xe(t.check.root,!n.length),!n.length){t.checkT=null;return}t.checkT!==e.t&&(t.checkT=e.t,fm(t.check,!0,!1));let s=ln(e.t)??$s(),r=$s()-s>AR,o=n.filter(c=>c.at).length;ne(t.check.count,o+"/"+n.length),Qt(t.check.count,"data-s",o===n.length?"done":r?"error":"waiting_user"),t.check.rows=n.length,Yn(t.check.root,"has-rows",!0);let a=new Set,l=n.map(c=>{let h=c.id||c.name;a.add(h);let u=t.crows.get(h);u||(u=RR(h),t.crows.set(h,u)),la(u.av,pm(i,h,c.name),null),ne(u.name,c.name||h);let f=ln(c.at);return Qt(u.li,"data-ok",f!=null?"yes":r?"no":"wait"),ne(u.at,f!=null?"\u2713 "+Si(f):r?"no answer":"waiting\u2026"),u.li});for(let[c,h]of t.crows)a.has(c)||(h.li.remove(),t.crows.delete(c));ql(t.cl,l,0),ne(t.cnote,o===n.length?"Every bot answered.":r?"Ask the bots that did not answer to re-read their instructions, or run the setup again.":"Started "+Si(s)+". Each bot ticks off when its own status line arrives.")}function IR(i){let t=aa(),e=V("button",{class:"bhq-wname",type:"button"}),n=V("button",{class:"bhq-wbtn bhq-wbtn--start",type:"button",text:"Start",hidden:!0}),s=V("button",{class:"bhq-wbtn bhq-wbtn--clear",type:"button",text:"Clear error",hidden:!0}),r=V("button",{class:"bhq-wbtn",type:"button",text:"Open chat",hidden:!0}),o=V("b"),a=V("span"),l=V("p",{class:"bhq-wtext"},o,a),c=V("div",{class:"bhq-wrow","data-id":i},t.root,V("div",{class:"bhq-wmain"},V("div",{class:"bhq-wtop"},e,n,s,r),l)),h=()=>{L.h.onSelectBot&&L.h.onSelectBot(i)};return e.addEventListener("click",h),c.addEventListener("click",u=>{u.target.closest("button")||h()}),n.addEventListener("click",u=>{u.stopPropagation();let f=n.getAttribute("data-agent");f&&Ay(i,f)}),s.addEventListener("click",u=>{u.stopPropagation();let f=s.getAttribute("data-agent");f&&Ry(i,f)}),r.addEventListener("click",u=>{u.stopPropagation();let f=r.getAttribute("data-chat");f&&um(i,f)}),{row:c,av:t,name:e,start:n,clearErr:s,btn:r,st:o,step:a}}function PR(i){let t=L.dock,e=i.bots||{},n=Object.keys(e).filter(a=>{let l=fs(e[a]);return l==="waiting_user"||l==="error"}).sort((a,l)=>(ln(e[l].last_event)||0)-(ln(e[a].last_event)||0)||String(e[a].name).localeCompare(String(e[l].name))),s=n.filter(a=>fs(e[a])==="error").length;ne(t.waiting.count,n.length),t.waiting.rows=n.length,Yn(t.waiting.root,"has-rows",n.length>0),Qt(t.waiting.count,"data-s",s?"error":n.length?"waiting_user":null);let r=new Set(n);for(let[a,l]of t.wrows)r.has(a)||(l.row.remove(),t.wrows.delete(a));let o=n.map(a=>{let l=t.wrows.get(a);l||(l=IR(a),t.wrows.set(a,l));let c=e[a],h=fs(c);Qt(l.row,"data-s",h),la(l.av,c,h),ne(l.name,c.name||a),ne(l.st,_y[h]||Xs(h)),ne(l.step,c.step?" \xB7 "+c.step:"");let u=(h==="waiting_user"||h==="stuck")&&!!c.paperclip_agent_id;Xe(l.start,!u),Qt(l.start,"data-agent",u?c.paperclip_agent_id:null);let f=h==="error"&&!!c.paperclip_agent_id;return Xe(l.clearErr,!f),Qt(l.clearErr,"data-agent",f?c.paperclip_agent_id:null),Xe(l.btn,!c.chat_url),Qt(l.btn,"data-chat",c.chat_url||null),l.row});ql(t.wlist,o,0),Xe(t.wempty,n.length>0)}function mm(i){if(!L||!L.panel||!L.panel.card)return;L.panel.card.startBusy=!!i;let t=L.panel.card;Qt(t.start,"disabled",i?"true":null),ne(t.start,i?"Starting\u2026":"Start")}function gm(i){if(!L||!L.panel||!L.panel.card)return;L.panel.card.clearErrBusy=!!i;let t=L.panel.card;Qt(t.clearErr,"disabled",i?"true":null),ne(t.clearErr,i?"Clearing\u2026":"Clear error")}function LR(i){let t=L.dock,e=Array.isArray(i.finished);if(Xe(t.finished.root,!e),!e)return;let n=$s(),s=i.finished.map(o=>({e:o,t:ln(o&&o.t)})).filter(o=>o.e&&(o.t==null||n-o.t<=864e5)).sort((o,a)=>(a.t||0)-(o.t||0)).slice(0,60);ne(t.finished.count,s.length),t.finished.rows=s.length,Yn(t.finished.root,"has-rows",s.length>0),Xe(t.fempty,s.length>0);let r=s.map(o=>o.t+"|"+o.e.bot+"|"+o.e.step).join(`
`);r!==t.finSig&&(t.finSig=r,t.tl.textContent="",t.finRefs=s.map(o=>{let a=pm(i,o.e.bot,o.e.name),l=aa({orb:!1});la(l,a,null);let c=V("span",{class:"bhq-tl-time bhq-num"}),h=V("li",{class:"bhq-tl-row"},l.root,V("div",{class:"bhq-tl-main"},V("div",{class:"bhq-tl-top"},V("b",{class:"bhq-tl-name",text:o.e.name||a.name||o.e.bot||""}),c),V("div",{class:"bhq-tl-step",text:o.e.step||"done",title:o.e.step||""})));return t.tl.append(h),{time:c,t:o.t}}));for(let o of t.finRefs)ne(o.time,o.t==null?"":cm(o.t))}async function NR(i){try{if(navigator.clipboard&&window.isSecureContext)return await navigator.clipboard.writeText(i),!0}catch{}try{let t=V("textarea",{"aria-hidden":"true",tabindex:"-1",readonly:!0});t.value=i,t.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none",document.body.append(t),t.select();let e=document.execCommand("copy");return t.remove(),!!e}catch{return!1}}async function DR(i,t){let e=L.dock,n="pause routine "+i.routine,s=await NR(n);ne(t.noteText,s?"Copied \u2014 paste it in the chat":"Could not copy \u2014 send: "+n);let r=t.key;clearTimeout(e.copied.get(r)),t.li.classList.add("is-copied"),e.copied.set(r,setTimeout(()=>{e.copied.delete(r),t.li.classList.remove("is-copied")},4200));let o=L.last.state&&L.last.state.bots&&L.last.state.bots[i.bot];o&&o.chat_url&&um(o.id,o.chat_url)}function FR(i){let t=L.dock,e=Array.isArray(i.routines);if(Xe(t.routines.root,!e),!e)return;let n=i.routines.filter(r=>r&&r.routine).slice().sort((r,o)=>(ln(r.next_run)??1/0)-(ln(o.next_run)??1/0));ne(t.routines.count,n.length),t.routines.rows=n.length,Yn(t.routines.root,"has-rows",n.length>0),Xe(t.rempty,n.length>0);let s=n.map(r=>r.bot+"|"+r.routine+"|"+r.schedule+"|"+r.next_run+"|"+r.name).join(`
`);s!==t.routSig&&(t.routSig=s,t.rl.textContent="",t.routRefs=n.map(r=>{let o=pm(i,r.bot,r.name),a=r.name||o.name||r.bot||"",l=r.bot+"|"+r.routine,c=aa({orb:!1});la(c,o,null);let h=V("span",{class:"bhq-rnext bhq-num"}),u=V("span"),f=V("button",{class:"bhq-roff",type:"button",text:"Turn off",title:'Copies "pause routine '+r.routine+'" and opens the chat'}),d=V("li",{class:"bhq-rrow"+(t.copied.has(l)?" is-copied":"")},c.root,V("div",{class:"bhq-rmain"},V("div",{class:"bhq-rtop"},V("b",{class:"bhq-rname",text:r.routine,title:r.routine}),h),V("div",{class:"bhq-rbot"},V("span",{class:"bhq-rmeta",text:a+(r.schedule?" \xB7 "+r.schedule:""),title:a+(r.schedule?" \xB7 "+r.schedule:"")}),V("span",{class:"bhq-rnote",role:"status"},Fr(Ys.check),u),f))),p={li:d,next:h,noteText:u,key:l,t:ln(r.next_run)};return ne(u,"Copied \u2014 paste it in the chat"),f.addEventListener("click",()=>DR(r,p)),t.rl.append(d),p}));for(let r of t.routRefs)ne(r.next,r.t==null?"no date":G2(r.t)),Qt(r.next,"title",r.t==null?null:W2(r.t))}var Wy="bothq.sound",UR="/4d/audio/music-loop.m4a",$u=45.714285714285715,xm=2,OR=.4,qy=.75,Xy=.9,ky=[72,74,76,79,81,84],zy=[76,79,81,84,86,88,91,93],BR='<svg class="bhq-snd-on" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3.2 7.6h2.9L10 4.5v11L6.1 12.4H3.2z" fill="currentColor"/><path d="M13 7.3a3.9 3.9 0 0 1 0 5.4M15.3 5.1a7 7 0 0 1 0 9.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',kR='<svg class="bhq-snd-off" viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M3.2 7.6h2.9L10 4.5v11L6.1 12.4H3.2z" fill="currentColor"/><path d="M13.2 8l4 4m0-4l-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',qi=zR(),Dt=null,Wi=null,ci=null,ds=null,ym=null,Ku=null,vm=!1,Xl=!1,Ks=null,Yl=null,Ne={buf:null,loading:null,next:0,first:!0,timer:0,playing:!1,srcs:new Set},Hy=new Map;function zR(){try{return{music:!0,fx:!0,...JSON.parse(localStorage.getItem(Wy))}}catch{return{music:!0,fx:!0}}}function HR(){try{localStorage.setItem(Wy,JSON.stringify(qi))}catch{}}function Yy({slot:i,withMusic:t=!0}={}){if(vm)return;vm=!0,Yl=new AbortController;let e=Yl.signal;i&&XR(i,e);let n=()=>{try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}VR()&&(Dt.resume?.(),!Xl&&(Xl=!0,qi.music&&t&&bm()))};for(let o of["pointerdown","keydown","touchend"])addEventListener(o,n,{capture:!0,signal:e});document.addEventListener("visibilitychange",()=>{if(!Dt||!Xl)return;let o=Dt.currentTime;Wi.gain.cancelScheduledValues(o),Wi.gain.setValueAtTime(Wi.gain.value,o),document.hidden?(Wi.gain.linearRampToValueAtTime(0,o+.4),setTimeout(()=>{document.hidden&&Dt.suspend?.()},500)):(Dt.resume?.(),Wi.gain.linearRampToValueAtTime(Xy,o+1.2))},{signal:e}),document.addEventListener("click",o=>{let a=o.target instanceof Element?o.target:null;if(!a)return;let l=a.closest(".bhq-dtoggle");if(l)return void queueMicrotask(()=>On.panel(l.getAttribute("aria-expanded")==="true"));let c=a.closest(".bhq-sgrab");if(c)return void queueMicrotask(()=>On.zoom(c.getAttribute("aria-expanded")==="true"?"in":"out",.4));a.closest(".bhq-eye")&&On.tick()},{signal:e});let s=0,r=o=>{let a=performance.now();a-s>280&&On.zoom(o.deltaY<0?"in":"out"),s=a};document.getElementById("office")?.addEventListener("wheel",r,{passive:!0,signal:e}),document.getElementById("scene")?.addEventListener("wheel",r,{passive:!0,signal:e}),Xl&&qi.music&&t&&bm()}function $y(){Ky(),Yl&&(Yl.abort(),Yl=null),Ks&&(Ks.btn.remove(),Ks.pop.remove(),Ks=null),vm=!1}function VR(){if(Dt)return!0;let i=window.AudioContext||window.webkitAudioContext;if(!i)return!1;try{Dt=new i({latencyHint:"interactive"})}catch{return!1}let t=Dt.createDynamicsCompressor();t.threshold.value=-16,t.knee.value=8,t.ratio.value=3,t.attack.value=.004,t.release.value=.25,Wi=Dt.createGain(),Wi.gain.value=Xy,Wi.connect(t),t.connect(Dt.destination),ci=Dt.createGain(),ci.gain.value=0,ci.connect(Wi),ds=Dt.createGain(),ds.gain.value=qi.fx?qy:0,ds.connect(Wi);let e=Dt.createConvolver();e.buffer=GR(2.2,1.6),ym=Dt.createGain(),ym.connect(e),e.connect(ds),Ku=Dt.createBuffer(1,Dt.sampleRate*2,Dt.sampleRate);let n=Ku.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;return!0}function GR(i,t){let e=Dt.sampleRate,n=Math.floor(i*e),s=Math.floor(.012*e),r=Dt.createBuffer(2,n,e);for(let o=0;o<2;o++){let a=r.getChannelData(o),l=0;for(let c=s;c<n;c++){let h=(c-s)/e,u=1-Math.exp(-2*Math.PI*(500+7e3*Math.exp(-h*1.8))/e);l+=u*(Math.random()*2-1-l),a[c]=l*Math.exp(-6.91*h/t)}}return r}async function bm(){if(!Dt||Ne.playing)return;Ne.playing=!0;try{Ne.buf||(Ne.buf=await(Ne.loading||(Ne.loading=fetch(UR).then(t=>t.arrayBuffer()).then(t=>new Promise((e,n)=>Dt.decodeAudioData(t,e,n))))))}catch{Ne.playing=!1,Ne.loading=null;return}if(!Ne.playing)return;let i=Dt.currentTime;ci.gain.cancelScheduledValues(i),ci.gain.setValueAtTime(ci.gain.value,i),ci.gain.linearRampToValueAtTime(OR,i+3),Ne.next=i+.05,Ne.first=!0,Vy(),clearInterval(Ne.timer),Ne.timer=setInterval(Vy,1e3)}function Vy(){for(;Ne.playing&&Ne.next<Dt.currentTime+3;){let i=Ne.next,t=Dt.createBufferSource(),e=Dt.createGain();t.buffer=Ne.buf,Ne.first?e.gain.setValueAtTime(1,i):(e.gain.setValueAtTime(0,i),e.gain.linearRampToValueAtTime(1,i+xm)),e.gain.setValueAtTime(1,i+$u),e.gain.linearRampToValueAtTime(0,i+$u+xm),t.connect(e),e.connect(ci),t.start(i),t.stop(i+$u+xm),Ne.srcs.add(t),t.onended=()=>Ne.srcs.delete(t),Ne.first=!1,Ne.next+=$u}}function Ky(){if(Ne.playing=!1,clearInterval(Ne.timer),!Dt)return;let i=Dt.currentTime;ci.gain.cancelScheduledValues(i),ci.gain.setValueAtTime(ci.gain.value,i),ci.gain.linearRampToValueAtTime(0,i+.8);for(let t of Ne.srcs)try{t.stop(i+.9)}catch{}Ne.srcs.clear()}var Zs=i=>440*2**((i-69)/12);function Tn(i,t){if(!Dt||!Xl||!qi.fx||Dt.state!=="running"||document.hidden)return!1;if(!i)return!0;let e=performance.now();return e-(Hy.get(i)||0)<t?!1:(Hy.set(i,e),!0)}function ps(i=0,t=.2){let e=Dt.createGain(),n=e;if(Dt.createStereoPanner){let s=Dt.createStereoPanner();s.pan.value=i,e.connect(s),n=s}if(n.connect(ds),t){let s=Dt.createGain();s.gain.value=t,n.connect(s),s.connect(ym)}return e}function Zy(i,t,e,n,s){i.setValueAtTime(1e-4,t),i.linearRampToValueAtTime(e,t+n),i.exponentialRampToValueAtTime(1e-4,t+n+s)}function Ei(i,t,e,n,s,r,o,a){let l=Dt.createOscillator(),c=Dt.createGain();return l.type=i,l.frequency.setValueAtTime(t,e),Zy(c.gain,e,r,o,a),l.connect(c),c.connect(s),l.start(e),l.stop(e+n),l}function Gi(i,t=.45,e=0){let n=ps(e,.06),s=Dt.createBufferSource(),r=Dt.createBiquadFilter(),o=Dt.createGain();s.buffer=Ku,r.type="bandpass",r.frequency.value=3e3+Math.random()*600,r.Q.value=1.3,Zy(o.gain,i,t,.001,.022),s.connect(r),r.connect(o),o.connect(n),s.start(i,Math.random()*1.5),s.stop(i+.05),Ei("sine",2100*(.96+Math.random()*.08),i,.04,n,t*.3,.001,.02),Ei("sine",190,i,.07,n,t*.45,.001,.035)}function Ur(i,t,e,n=0,s=!1){let r=Zs(t),o=ps(n,.28);for(let[a,l]of[[1,e],[2,e*.22]])Ei("sine",r*a*(s?1.35:.55),i,.36,o,l,.003,.3).frequency.exponentialRampToValueAtTime(r*a,i+.028)}function WR(i,t,e,n=0){let s=Zs(t),r=ps(n,.2),o=new Float32Array(48);for(let l=0;l<o.length;l++){let c=l/(o.length-1)*.36;o[l]=s*(1+.26*Math.exp(-13*c)*Math.sin(2*Math.PI*11*c))*(.86+.14*(1-Math.exp(-30*c)))}let a=Ei("sine",s,i,.4,r,e,.002,.34);a.frequency.cancelScheduledValues(i),a.frequency.setValueCurveAtTime(o,i,.36)}function wi(i,t,e,n=.15){let s=Zs(t),r=ps(n,.5),o=Ei("sine",s,i,1.9,r,e,.002,1.6),a=Dt.createOscillator(),l=Dt.createGain();a.frequency.value=s*3,l.gain.setValueAtTime(s*.5,i),l.gain.exponentialRampToValueAtTime(s*.01,i+.6),a.connect(l),l.connect(o.frequency),a.start(i),a.stop(i+1.9),Ei("sine",s*2,i,.7,r,e*.18,.002,.5)}function _m(i,t,e=.55,n=.3){let s=ps(0,.2),r=Dt.createBufferSource(),o=Dt.createBiquadFilter(),a=Dt.createGain(),[l,c]=t==="in"?[450,3600]:t==="out"?[3200,380]:[300,1500];r.buffer=Ku,r.loop=!0,o.type="bandpass",o.Q.value=.9,o.frequency.setValueAtTime(l,i),o.frequency.exponentialRampToValueAtTime(c,i+e),a.gain.setValueAtTime(1e-4,i),a.gain.linearRampToValueAtTime(n,i+e*(t==="in"?.6:.35)),a.gain.exponentialRampToValueAtTime(1e-4,i+e),r.connect(o),o.connect(a),a.connect(s),r.start(i,Math.random()),r.stop(i+e+.05)}function Gy(i,t,e){let n=ps(0,.25),s=Dt.createBiquadFilter();s.type="lowpass",s.frequency.setValueAtTime(1800,i),s.frequency.exponentialRampToValueAtTime(400,i+.3),s.connect(n),Ei("triangle",Zs(t),i,.5,s,e,.004,.42)}function qR(i){let t=2166136261;for(let e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return ky[(t>>>0)%ky.length]}var On={tick(){Tn("tick",40)&&Gi(Dt.currentTime,.35)},hover(i){!i||!Tn("hover:"+i,450)||!Tn("hover",70)||WR(Dt.currentTime+.01,qR(i),.16,(Math.random()-.5)*.5)},select(i){if(!Tn("select",120))return;let t=Dt.currentTime+.01;i?(Gi(t,.4),Ur(t+.02,79,.2,.3),Ur(t+.09,88,.17,.3)):(Ur(t,88,.12,.3,!0),Ur(t+.07,79,.1,.3,!0))},floor(i=0){if(!Tn("floor",150))return;let t=Dt.currentTime+.01;Gi(t,.4,-.4),_m(t+.01,"slide",.42,.22),Ei("sine",95,t+.02,.25,ps(0,0),.22,.003,.16).frequency.exponentialRampToValueAtTime(70,t+.2),wi(t+.16,zy[Math.max(0,Math.min(zy.length-1,i))],.12)},zoom(i,t=.55){Tn("zoom",200)&&_m(Dt.currentTime+.005,i==="in"?"in":"out",t,.2)},panel(i){if(!Tn("panel",120))return;let t=Dt.currentTime+.01;Gi(t,.35,-.35),Ur(t+.01,i?84:79,.13,-.35,!i)},status(i){if(!Tn("status",2500)||!Tn("status:"+i,6e3))return;let t=Dt.currentTime+.02;i==="waiting_user"?(wi(t,88,.14),wi(t+.2,84,.13)):i==="error"?(Gy(t,69,.16),Gy(t+.17,65,.15)):i==="done"&&(wi(t,84,.08,.2),wi(t+.08,88,.08,.25),wi(t+.16,91,.08,.3))},pick(i=0,t=2){if(!Tn("pick",60))return;let e=Dt.currentTime+.005,n=[84,81,79,76][Math.round(i/Math.max(1,t-1)*3)];Gi(e,.32,.25),Ur(e+.012,n,.13,.25)},press(){if(!Tn("press",150))return;let i=Dt.currentTime+.005;Gi(i,.4),wi(i+.02,84,.08,0),wi(i+.09,91,.05,.1)},copied(){if(!Tn("copied",300))return;let i=Dt.currentTime+.005;Gi(i,.38),wi(i+.03,84,.08,.1),wi(i+.1,88,.08,.15),wi(i+.17,91,.08,.2)},nav(){if(!Tn("nav",150))return;let i=Dt.currentTime+.005;Gi(i,.3),_m(i+.02,"out",.6,.14)},grab(){if(Tn("grab",80)){let i=Dt.currentTime+.005;Gi(i,.3),Ur(i+.01,79,.1,0)}},drop(){if(!Tn("drop",80))return;let i=Dt.currentTime+.005;Gi(i,.22),Ei("sine",150,i,.16,ps(0,.1),.2,.003,.11).frequency.exponentialRampToValueAtTime(95,i+.1)},blink(){if(!Tn("blink",300))return;let i=Dt.currentTime+.005,t=ps(0,.22);Ei("sine",Zs(81),i,.1,t,.08,.002,.07).frequency.exponentialRampToValueAtTime(Zs(76),i+.06),Ei("sine",Zs(88),i+.19,.12,t,.05,.004,.08).frequency.exponentialRampToValueAtTime(Zs(93),i+.25)}};function XR(i,t){let e=document.createElement("button");e.type="button",e.className="bhq-snd bhq-surface",e.setAttribute("aria-label","Sound"),e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded","false"),e.innerHTML=BR+kR;let n=document.createElement("div");n.className="bhq-snd-pop bhq-surface",n.setAttribute("role","group"),n.setAttribute("aria-label","Sound"),n.hidden=!0;let s={};for(let[a,l]of[["music","Music"],["fx","Sounds"]]){let c=document.createElement("button");c.type="button",c.className="bhq-snd-row",c.setAttribute("role","switch"),c.innerHTML=`<span>${l}</span><i class="bhq-snd-sw" aria-hidden="true"></i>`,c.addEventListener("click",()=>YR(a,!qi[a])),s[a]=c,n.append(c)}i.prepend(e),document.body.append(n);let r=()=>{let a=e.getBoundingClientRect();n.style.top=`${Math.round(a.bottom+8)}px`,n.style.right=`${Math.max(8,Math.round(innerWidth-a.right))}px`},o=a=>{a&&r(),n.hidden=!a,e.setAttribute("aria-expanded",a?"true":"false")};e.addEventListener("click",()=>o(n.hidden)),document.addEventListener("pointerdown",a=>{!n.hidden&&!n.contains(a.target)&&!e.contains(a.target)&&o(!1)},{signal:t}),document.addEventListener("keydown",a=>{a.key==="Escape"&&!n.hidden&&o(!1)},{signal:t}),addEventListener("resize",()=>{n.hidden||r()},{signal:t}),Ks={btn:e,pop:n,rows:s},Jy()}function Jy(){if(Ks){Ks.btn.classList.toggle("is-off",!qi.music&&!qi.fx);for(let i of["music","fx"])Ks.rows[i].setAttribute("aria-checked",qi[i]?"true":"false")}}function YR(i,t){if(qi[i]=t,HR(),Jy(),!!Dt&&(i==="music"&&(t?bm():Ky()),i==="fx")){let e=Dt.currentTime;ds.gain.cancelScheduledValues(e),ds.gain.setValueAtTime(ds.gain.value,e),ds.gain.linearRampToValueAtTime(t?qy:0,e+.15),t&&setTimeout(()=>On.tick(),180)}}var jy={day:"13:00",evening:"18:50",night:"23:00"};function $R(i){let t=document.querySelector("#topbar .bhq-right");if(!t||t.querySelector(".bhq-theme"))return;let e=document.createElement("button");e.type="button",e.className="bhq-theme bhq-surface",e.addEventListener("click",()=>i()),t.insertBefore(e,t.firstChild),tv(e)}function tv(i){if(!i)return;let t=document.documentElement.dataset.theme==="dark";i.textContent=t?"Light":"Dark",i.title=t?"Switch to light mode":"Switch to dark mode",i.setAttribute("aria-pressed",t?"true":"false"),i.setAttribute("aria-label",i.title)}var Qy=class{constructor(t,e={}){this.root=t,this.opts=e,this.kind="4d",this.isTower=!0,this.loaded=!1,this.visible=!0,this.framesShown=0,this.deskOf=new Map,this.plan={desks:Array.from({length:21},(r,o)=>o)},this.pal={dark:!1},this.sessions=[],this.extras=null,this.keyOf=new Map,this.towerFloors=[],this.focusKey=null,this.pickedId=null,this.viewFloorId=typeof e.towerFloor=="string"?e.towerFloor:null,this._lastSel=null,this._readyFired=!1,this.ready=new Promise(r=>{this.markReady=r}),X_(t,{onReady:()=>{this.loaded=!0,this.canvas=Hu(),this._readyFired||(this._readyFired=!0,this.markReady(!0))},onFrame:()=>{this.visible&&(this.framesShown++,this.canvas=this.canvas||Hu(),this.opts.onFrame&&this.opts.onFrame(this))},onSelectBot:r=>this.selectBot(r),onHoverBot:r=>On.hover(r),onAssignSeat:(r,o)=>this.assignSeat(r,o),onBotContextMenu:(r,o,a)=>this.showBotMenu(r,o,a)}),this._onDocPointer=r=>{this._botMenu&&!this._botMenu.hidden&&!this._botMenu.contains(r.target)&&this.hideBotMenu()},document.addEventListener("pointerdown",this._onDocPointer,!0),Ty({onSelectBot:r=>this.selectBot(r),onSelectFloor:r=>this.setTowerFloor(r),onZoom:r=>{ny(r),On.zoom(r)},onOpenChat:(r,o)=>KR(o),onStartAgent:(r,o)=>ZR(o),onClearErrorAgent:(r,o)=>JR(o),onShare:()=>{let r=this.captureShare();if(!r)return;let o=document.createElement("a");o.href=r.toDataURL("image/png"),o.download="office.png",o.click()}}),$R(()=>{this.opts.onTheme&&this.opts.onTheme()}),Yy({slot:document.querySelector("#topbar .bhq-right")});let n=document.querySelector("#topbar .bhq-snd"),s=document.querySelector("#topbar .bhq-usage");n&&s&&s.parentElement&&s.parentElement.insertBefore(n,s),this.canvas=Hu(),this.syncLight(),this.setTheme(document.documentElement.dataset.theme==="dark")}selectBot(t){let e=t||null;e!==this.pickedId&&On.select(!!e),this.pickedId=e,this._followPick=!!e,this.update(this.sessions)}assignSeat(t,e){let n=globalThis.WallpaperFeed;if(!n||typeof n.assignSeat!="function")return;let s=this._state&&this._state.bots&&this._state.bots[t],r=s&&s.floor||this.viewFloorId,o=(this._state&&this._state.floors||[]).find(l=>l.id===r),a=o&&Array.isArray(o.bots)?o.bots:[];n.assignSeat(t,e,a)&&(On.select(!0),this.update(this.sessions))}ensureBotMenu(){if(this._botMenu)return this._botMenu;if(!document.getElementById("tower-bot-menu-style")){let o=document.createElement("style");o.id="tower-bot-menu-style",o.textContent=[".tower-bot-menu{position:fixed;z-index:60;min-width:188px;padding:6px;border-radius:10px;","border:1px solid rgba(0,0,0,.12);background:rgba(255,255,255,.96);color:#1c1c1a;","box-shadow:0 10px 28px rgba(0,0,0,.16);font:13px/1.3 ui-sans-serif,system-ui,sans-serif;}",".tower-bot-menu[hidden]{display:none;}",".tower-bot-menu button,.tower-bot-menu .tower-bot-subhead{display:block;width:100%;text-align:left;border:0;","background:transparent;color:inherit;font:inherit;padding:7px 10px;border-radius:7px;cursor:pointer;}",".tower-bot-menu button:hover:not(:disabled){background:rgba(0,0,0,.06);}",".tower-bot-menu button:disabled{opacity:.38;cursor:default;}",".tower-bot-menu .tower-bot-subhead{font-weight:700;cursor:default;opacity:.72;padding-bottom:2px;}",".tower-bot-menu .tower-bot-floors{display:flex;flex-direction:column;gap:1px;margin:0 0 2px;}",".tower-bot-menu .tower-bot-note{display:none;margin:4px 6px 2px;font-size:12px;opacity:.75;}",".tower-bot-menu .tower-bot-note.is-on{display:block;}",'html[data-theme="dark"] .tower-bot-menu{background:rgba(28,28,30,.96);color:#f5f5f7;border-color:rgba(255,255,255,.12);}','html[data-theme="dark"] .tower-bot-menu button:hover:not(:disabled){background:rgba(255,255,255,.08);}'].join(""),document.head.appendChild(o)}let t=document.createElement("div");t.className="tower-bot-menu",t.hidden=!0,t.setAttribute("role","menu"),t.addEventListener("contextmenu",o=>o.preventDefault()),t.addEventListener("pointerenter",o=>o.stopPropagation());let e=document.createElement("div");e.className="tower-bot-floors",e.setAttribute("role","group"),e.setAttribute("aria-label","Destinations");let n=document.createElement("div");n.className="tower-bot-subhead",n.textContent="Move to floor";let s=document.createElement("div");s.className="tower-bot-floors",s.setAttribute("role","group"),s.setAttribute("aria-label","Other floors");let r=document.createElement("div");return r.className="tower-bot-note",r.setAttribute("role","status"),t.append(e,n,s,r),document.body.appendChild(t),t._actions=e,t._floors=s,t._note=r,this._botMenu=t,t}showBotMenu(t,e,n){let s=this._state,r=s&&s.bots&&s.bots[t];if(!r)return;let o=this.ensureBotMenu();o.dataset.key=t;let a=o._actions;a.textContent="";let l=o._floors;l.textContent="",o._note.classList.remove("is-on"),o._note.textContent="";let c=r.floor==="main-floor"||String(r.floor||"").startsWith("main-floor"),h=document.createElement("button");h.type="button",h.setAttribute("role","menuitem"),h.textContent="Send to meeting room",h.disabled=!c,h.title=c?"Sit at the conference table":"Meeting table is on Main Floor",h.addEventListener("click",v=>{if(v.preventDefault(),v.stopPropagation(),h.disabled){o._note.textContent="Meeting table is on Main Floor",o._note.classList.add("is-on");return}let S=tm(t);if(!S||!S.ok){o._note.textContent=S?.reason==="full"?"No free conference chair":"Could not seat at meeting table",o._note.classList.add("is-on");return}On.select(!0),this.hideBotMenu(),this.update(this.sessions)}),a.appendChild(h);let f=(s.floors||[]).slice().sort((v,S)=>(Number(v.order)||0)-(Number(S.order)||0)).filter(v=>v.id!==r.floor);f.length||(o._note.textContent="No other floors",o._note.classList.add("is-on"));for(let v of f){let S=(v.free_desks|0)<=0,b=document.createElement("button");b.type="button",b.setAttribute("role","menuitem"),b.dataset.floor=v.id,b.textContent=v.name||v.id,b.disabled=S,b.title=S?"Floor is full":`Move to ${v.name||v.id}`,b.addEventListener("click",A=>{if(A.preventDefault(),A.stopPropagation(),b.disabled){o._note.textContent="Floor is full \u2014 pick another",o._note.classList.add("is-on");return}this.moveBotToFloor(t,v.id,o)}),l.appendChild(b)}o.hidden=!1;let d=8,p=200,x=Math.min(360,72+f.length*34+24),m=e,g=n,_=window.innerWidth||1024,w=window.innerHeight||768;m+p>_-d&&(m=Math.max(d,_-p-d)),g+x>w-d&&(g=Math.max(d,w-x-d)),o.style.left=m+"px",o.style.top=g+"px"}hideBotMenu(){this._botMenu&&(this._botMenu.hidden=!0,this._botMenu.dataset.key="",this._botMenu._note&&(this._botMenu._note.classList.remove("is-on"),this._botMenu._note.textContent=""))}moveBotToFloor(t,e,n){let s=globalThis.WallpaperFeed;if(!s||typeof s.moveToFloor!="function")return;let r=this.viewFloorId,o=s.moveToFloor(t,e,this.sessions,this.extras||{});if(!o||!o.ok){let a=o&&o.reason,l=a==="full"?"Floor is full \u2014 agent stayed put":a==="missing"?"That floor is gone":a==="same"?"Already on that floor":"Could not move agent";n&&n._note&&(n._note.textContent=l,n._note.classList.add("is-on"));return}try{typeof s.clearLounge=="function"&&s.clearLounge(t)}catch{}On.select(!0),this.viewFloorId=r,this._followPick=!1,this.hideBotMenu(),this.update(this.sessions)}update(t){this.sessions=Array.isArray(t)?t:[];let e=globalThis.WallpaperFeed,n=e&&typeof e.towerState=="function"?e.towerState(this.sessions,this.extras||{}):{floors:[],bots:{}};this._state=n,this.towerFloors=(n.floors||[]).map(c=>({id:c.id,name:c.name})),this.keyOf=new Map;let s=n.bots||{};for(let c of this.sessions){let h=c.project||c.title||c.id||c.key,u=e&&e.botId?e.botId(h):String(h||"");s[u]||(u=Object.keys(s).find(f=>s[f].name===h)||u),s[u]&&this.keyOf.set(u,c.key)}let r=n.floors||[],o=this.viewFloorId&&r.some(c=>c.id===this.viewFloorId)?this.viewFloorId:null,a=this.pickedId&&s[this.pickedId]?this.pickedId:null;this.pickedId=a,a&&s[a].floor&&s[a].floor!==o&&this._followPick&&(o=s[a].floor),this._followPick=!1,o||(o=r.slice().sort((c,h)=>(h.bots?.length||0)-(c.bots?.length||0))[0]?.id||null),this.viewFloorId=o,this.deskOf=new Map;for(let[c,h]of this.keyOf){let u=s[c];u&&u.floor===o&&u.effective_status==="working"&&this.deskOf.set(h,(u.desk||1)-1)}let l={currentFloor:o,selectedBot:a};Y_(n,l);try{Ly(n,l)}catch(c){console.error(c)}this._soundStatus(n),a&&a!==this._lastSel&&(this._lastSel=a,iy(a)),a||(this._lastSel=null),this.opts.onFloors&&this.opts.onFloors(this.towerFloors)}_selectedId(t){if(!this.focusKey)return null;for(let[e,n]of this.keyOf)if(n===this.focusKey&&(!t||t[e]))return e;return null}setTowerFloor(t){if(t&&t!==this.viewFloorId){let n=(this._state&&this._state.floors||[]).slice().sort((s,r)=>(Number(s.order)||0)-(Number(r.order)||0)).findIndex(s=>s.id===t);n>=0&&On.floor(n)}this.viewFloorId=t,this._lastFocus=this.focusKey,this.update(this.sessions)}_soundStatus(t){let e={},n=t&&t.bots||{};for(let[s,r]of Object.entries(n))e[s]=r.effective_status;if(this._lastStatus){let s=new Set;for(let[o,a]of Object.entries(e))this._lastStatus[o]&&this._lastStatus[o]!==a&&s.add(a);let r=["waiting_user","error","done"].find(o=>s.has(o));r&&On.status(r)}this._lastStatus=e}setVisible(t){this.visible=!!t,ty(this.visible)}setTheme(t){try{Q_(!!t)}catch(e){console.error(e)}tv(document.querySelector(".bhq-theme"))}syncLight(){let t=globalThis.OFFICE_LIGHT||"now",e=Object.prototype.hasOwnProperty.call(jy,t)?jy[t]:null;globalThis.bothq&&typeof globalThis.bothq.setTime=="function"&&globalThis.bothq.setTime(e)}captureShare(){try{return oy()}catch(t){return console.error(t),null}}destroy(){this._onDocPointer&&document.removeEventListener("pointerdown",this._onDocPointer,!0),this.hideBotMenu(),this._botMenu&&(this._botMenu.remove(),this._botMenu=null);try{$y()}catch(t){console.error(t)}try{hm()}catch(t){console.error(t)}try{ey()}catch(t){console.error(t)}this.canvas=null}};function KR(i){if(!i||!/^https:\/\//i.test(i))return;let t=typeof globalThis<"u"?globalThis.WallpaperFeed:null;if(t&&typeof t.isPaperclipChatUrl=="function"&&t.isPaperclipChatUrl(i)){jR(i);return}ev(i)}function ev(i){let t=document.createElement("a");t.href=i,t.rel="noopener",t.style.display="none",document.body.append(t),t.click(),t.remove()}async function ZR(i){if(i){mm(!0);try{let t=await fetch("/api/paperclip/resume",{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify({agentId:i})}),e=await t.json().catch(()=>({}));(!t.ok||!e.ok)&&console.warn("[office] Start failed:",e&&e.error||`HTTP ${t.status}`)}catch(t){console.warn("[office] Start error:",t)}finally{mm(!1)}}}async function JR(i){if(i){gm(!0);try{let t=await fetch("/api/paperclip/clear-error",{method:"POST",credentials:"same-origin",headers:{"content-type":"application/json"},body:JSON.stringify({agentId:i})}),e=await t.json().catch(()=>({}));(!t.ok||!e.ok)&&console.warn("[office] Clear error failed:",e&&e.error||`HTTP ${t.status}`)}catch(t){console.warn("[office] Clear error:",t)}finally{gm(!1)}}}var ms=null;function jR(i){ms||(ms=QR());let t=ms;t.frame.src=i,t.open.href=i,t.root.hidden=!1,t.root.setAttribute("aria-hidden","false");try{t.closeBtn.focus()}catch{}}function Zu(){ms&&(ms.root.hidden=!0,ms.root.setAttribute("aria-hidden","true"),ms.frame.removeAttribute("src"))}function QR(){let i=document.createElement("div");i.className="bhq-pcchat",i.hidden=!0,i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.setAttribute("aria-label","Paperclip chat"),i.setAttribute("aria-hidden","true");let t=document.createElement("div");t.className="bhq-pcchat-sheet bhq-surface";let e=document.createElement("div");e.className="bhq-pcchat-head";let n=document.createElement("b");n.className="bhq-pcchat-title",n.textContent="Paperclip chat";let s=document.createElement("a");s.className="bhq-pcchat-open",s.textContent="Open full page",s.rel="noopener",s.addEventListener("click",l=>{l.preventDefault();let c=s.getAttribute("href");Zu(),c&&ev(c)});let r=document.createElement("button");r.className="bhq-pcchat-close",r.type="button",r.setAttribute("aria-label","Close chat"),r.textContent="\xD7",r.addEventListener("click",()=>Zu()),e.append(n,s,r);let o=document.createElement("p");o.className="bhq-pcchat-note",o.textContent="Uses your Paperclip board login. If the panel stays blank, open the full page.";let a=document.createElement("iframe");return a.className="bhq-pcchat-frame",a.title="Paperclip agent chat",a.setAttribute("referrerpolicy","no-referrer-when-downgrade"),a.setAttribute("allow","clipboard-read; clipboard-write"),t.append(e,o,a),i.append(t),i.addEventListener("click",l=>{l.target===i&&Zu()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&ms&&!ms.root.hidden&&Zu()}),document.body.append(i),{root:i,frame:a,open:s,closeBtn:r}}export{Qy as Office4D};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

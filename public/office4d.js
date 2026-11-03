var Wp=0,Pu=1,Xp=2;var Us=1,qp=2,zr=3,zn=0,tn=1,Ke=2,kn=0,kr=1,Lu=2,Nu=3,fa=4,Yp=5;var Os=100,$p=101,Kp=102,Zp=103,Jp=104,jp=200,Qp=201,tm=202,em=203,Du=204,Fu=205,nm=206,im=207,sm=208,rm=209,om=210,am=211,lm=212,cm=213,hm=214,wl=0,Al=1,Rl=2,yr=3,Cl=4,Il=5,Pl=6,Ll=7,sc=0,um=1,fm=2,ei=0,da=1,pa=2,ma=3,Bs=4,ga=5,xa=6,_a=7,pu="attached",dm="detached",Uu=300,ss=301,zs=302,rc=303,oc=304,ya=306,On=1e3,Fn=1001,vr=1002,ze=1003,ac=1004;var ks=1005;var Le=1006,Hr=1007;var Rn=1008;var yn=1009,Ou=1010,Bu=1011,Gr=1012,lc=1013,ni=1014,Cn=1015,Xe=1016,cc=1017,hc=1018,Vr=1020,zu=35902,ku=35899,Hu=1021,Gu=1022,In=1023,fi=1026,rs=1027,uc=1028,fc=1029,os=1030,dc=1031;var pc=1033,va=33776,Ma=33777,Sa=33778,ba=33779,mc=35840,gc=35841,xc=35842,_c=35843,yc=36196,vc=37492,Mc=37496,Sc=37488,bc=37489,Ea=37490,Ec=37491,Tc=37808,wc=37809,Ac=37810,Rc=37811,Cc=37812,Ic=37813,Pc=37814,Lc=37815,Nc=37816,Dc=37817,Fc=37818,Uc=37819,Oc=37820,Bc=37821,zc=36492,kc=36494,Hc=36495,Gc=36283,Vc=36284,Ta=36285,Wc=36286;var bs=2300,Es=2301,bl=2302,mu=2303,gu=2400,xu=2401,_u=2402,pm=2500;var Vu=0,wa=1,Wr=2,mm=3200;var Aa=0,gm=1,Bi="",te="srgb",qe="srgb-linear",Po="linear",pe="srgb";var El=7680;var xm=519,_m=512,ym=513,vm=514,Xc=515,Mm=516,Sm=517,qc=518,bm=519,Wu=35044;var Xu="300 es",Qn=2e3,Mr=2001;function vx(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Em(){let i=Sr("canvas");return i.style.display="block",i}var Jd={},br=null;function Lo(...i){let t="THREE."+i.shift();br?br("log",t,...i):console.log(t,...i)}function Tm(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function It(...i){i=Tm(i);let t="THREE."+i.shift();if(br)br("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=Tm(i);let t="THREE."+i.shift();if(br)br("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ss(...i){let t=i.join(" ");t in Jd||(Jd[t]=!0,It(...i))}function wm(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Am={[wl]:Al,[Rl]:Pl,[Cl]:Ll,[yr]:Il,[Al]:wl,[Pl]:Rl,[Ll]:Cl,[Il]:yr},di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=1234567,Ao=Math.PI/180,Ts=180/Math.PI;function Un(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function qu(i,t){return(i%t+t)%t}function Sx(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function bx(i,t,e){return i!==t?(e-i)/(t-i):0}function Ro(i,t,e){return(1-e)*i+e*t}function Ex(i,t,e,n){return Ro(i,t,1-Math.exp(-e*n))}function Tx(i,t=1){return t-Math.abs(qu(i,t*2)-t)}function wx(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ax(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Rx(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Cx(i,t){return i+Math.random()*(t-i)}function Ix(i){return i*(.5-Math.random())}function Px(i){i!==void 0&&(jd=i);let t=jd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Lx(i){return i*Ao}function Nx(i){return i*Ts}function Dx(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Fx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ux(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ox(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),p=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*h,a*c);break;default:It("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Xr={DEG2RAD:Ao,RAD2DEG:Ts,generateUUID:Un,clamp:ie,euclideanModulo:qu,mapLinear:Sx,inverseLerp:bx,lerp:Ro,damp:Ex,pingpong:Tx,smoothstep:wx,smootherstep:Ax,randInt:Rx,randFloat:Cx,randFloatSpread:Ix,seededRandom:Px,degToRad:Lx,radToDeg:Nx,isPowerOfTwo:Dx,ceilPowerOfTwo:Fx,floorPowerOfTwo:Ux,setQuaternionFromProperEuler:Ox,normalize:be,denormalize:jn},ju=class ju{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ju.prototype.isVector2=!0;var J=ju,on=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*x;m<0&&(f=-f,d=-d,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),E=Math.sin(y);g=Math.sin(g*y)/E,a=Math.sin(a*y)/E,l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+p*a,u=u*g+x*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-a*d,t[e+2]=c*p+h*d+a*f-l*u,t[e+3]=h*p-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:It("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qu=class Qu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kh.copy(this).projectOnVector(t),this.sub(kh)}reflect(t){return this.sub(kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qu.prototype.isVector3=!0;var I=Qu,kh=new I,Qd=new on,tf=class tf{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],x=s[0],m=s[3],g=s[6],y=s[1],E=s[4],v=s[7],b=s[2],S=s[5],A=s[8];return r[0]=o*x+a*y+l*b,r[3]=o*m+a*E+l*S,r[6]=o*g+a*v+l*A,r[1]=c*x+h*y+u*b,r[4]=c*m+h*E+u*S,r[7]=c*g+h*v+u*A,r[2]=f*x+d*y+p*b,r[5]=f*m+d*E+p*S,r[8]=f*g+d*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,p=e*u+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ss("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hh.makeScale(t,e)),this}rotate(t){return Ss("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hh.makeRotation(-t)),this}translate(t,e){return Ss("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tf.prototype.isMatrix3=!0;var Kt=tf,Hh=new Kt,tp=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bx(){let i={enabled:!0,workingColorSpace:qe,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?Po:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qe]:{primaries:t,whitePoint:n,transfer:Po,toXYZ:tp,fromXYZ:ep,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:te},outputColorSpaceConfig:{drawingBufferColorSpace:te}},[te]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:tp,fromXYZ:ep,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:te}}}),i}var Qt=Bx();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var tr,Nl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{tr===void 0&&(tr=Sr("canvas")),tr.width=t.width,tr.height=t.height;let s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=tr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Sr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return It("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},zx=0,Er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Gh(s[o].image)):r.push(Gh(s[o]))}else r=Gh(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Gh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(It("Texture: Unable to serialize Texture."),{})}var kx=0,Vh=new I,Ye=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=Le,o=Rn,a=In,l=yn,c=i.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Un(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){It(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case On:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case On:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Uu;Ye.DEFAULT_ANISOTROPY=1;var ef=class ef{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,v=(d+1)/2,b=(g+1)/2,S=(h+f)/4,A=(u+x)/4,_=(p+m)/4;return E>v&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=S/n,r=A/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=_/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=_/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ef.prototype.isVector4=!0;var de=ef,Dl=class extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ye(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Er(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},De=class extends Dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},No=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fl=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ic=class ic{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ic().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),o=1/er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-p,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=p*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hx,t,Gx)}lookAt(t,e,n){let s=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),qi.crossVectors(n,bn),qi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),qi.crossVectors(n,bn)),qi.normalize(),Ya.crossVectors(bn,qi),s[0]=qi.x,s[4]=Ya.x,s[8]=bn.x,s[1]=qi.y,s[5]=Ya.y,s[9]=bn.y,s[2]=qi.z,s[6]=Ya.z,s[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],x=n[6],m=n[10],g=n[14],y=n[3],E=n[7],v=n[11],b=n[15],S=s[0],A=s[4],_=s[8],T=s[12],R=s[1],P=s[5],L=s[9],B=s[13],N=s[2],O=s[6],X=s[10],q=s[14],st=s[3],Y=s[7],tt=s[11],z=s[15];return r[0]=o*S+a*R+l*N+c*st,r[4]=o*A+a*P+l*O+c*Y,r[8]=o*_+a*L+l*X+c*tt,r[12]=o*T+a*B+l*q+c*z,r[1]=h*S+u*R+f*N+d*st,r[5]=h*A+u*P+f*O+d*Y,r[9]=h*_+u*L+f*X+d*tt,r[13]=h*T+u*B+f*q+d*z,r[2]=p*S+x*R+m*N+g*st,r[6]=p*A+x*P+m*O+g*Y,r[10]=p*_+x*L+m*X+g*tt,r[14]=p*T+x*B+m*q+g*z,r[3]=y*S+E*R+v*N+b*st,r[7]=y*A+E*P+v*O+b*Y,r[11]=y*_+E*L+v*X+b*tt,r[15]=y*T+E*B+v*q+b*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],x=t[7],m=t[11],g=t[15],y=l*d-c*f,E=a*d-c*u,v=a*f-l*u,b=o*d-c*h,S=o*f-l*h,A=o*u-a*h;return e*(x*y-m*E+g*v)-n*(p*y-m*b+g*S)+s*(p*E-x*b+g*A)-r*(p*v-x*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],x=t[13],m=t[14],g=t[15],y=e*a-n*o,E=e*l-s*o,v=e*c-r*o,b=n*l-s*a,S=n*c-r*a,A=s*c-r*l,_=h*x-u*p,T=h*m-f*p,R=h*g-d*p,P=u*m-f*x,L=u*g-d*x,B=f*g-d*m,N=y*B-E*L+v*P+b*R-S*T+A*_;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(a*B-l*L+c*P)*O,t[1]=(s*L-n*B-r*P)*O,t[2]=(x*A-m*S+g*b)*O,t[3]=(f*S-u*A-d*b)*O,t[4]=(l*R-o*B-c*T)*O,t[5]=(e*B-s*R+r*T)*O,t[6]=(m*v-p*A-g*E)*O,t[7]=(h*A-f*v+d*E)*O,t[8]=(o*L-a*R+c*_)*O,t[9]=(n*R-e*L-r*_)*O,t[10]=(p*S-x*v+g*y)*O,t[11]=(u*v-h*S-d*y)*O,t[12]=(a*T-o*P-l*_)*O,t[13]=(e*P-n*T+s*_)*O,t[14]=(x*E-p*b-m*y)*O,t[15]=(h*b-u*E+f*y)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,p=r*u,x=o*h,m=o*u,g=a*u,y=l*c,E=l*h,v=l*u,b=n.x,S=n.y,A=n.z;return s[0]=(1-(x+g))*b,s[1]=(d+v)*b,s[2]=(p-E)*b,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(f+g))*S,s[6]=(m+y)*S,s[7]=0,s[8]=(p+E)*A,s[9]=(m-y)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=er.set(s[0],s[1],s[2]).length(),a=er.set(s[4],s[5],s[6]).length(),l=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Kn.copy(this);let c=1/o,h=1/a,u=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=h,Kn.elements[5]*=h,Kn.elements[6]*=h,Kn.elements[8]*=u,Kn.elements[9]*=u,Kn.elements[10]*=u,e.setFromRotationMatrix(Kn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Qn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Mr)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Qn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Qn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===Mr)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ic.prototype.isMatrix4=!0;var Wt=ic,er=new I,Kn=new Wt,Hx=new I(0,0,0),Gx=new I(1,1,1),qi=new I,Ya=new I,bn=new I,np=new Wt,ip=new on,pi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:It("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return np.makeRotationFromQuaternion(t),this.setFromRotationMatrix(np,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ip.setFromEuler(this),this.setFromQuaternion(ip,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Vx=0,sp=new I,nr=new on,Ei=new Wt,$a=new I,mo=new I,Wx=new I,Xx=new on,rp=new I(1,0,0),op=new I(0,1,0),ap=new I(0,0,1),lp={type:"added"},qx={type:"removed"},ir={type:"childadded",child:null},Wh={type:"childremoved",child:null},ge=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new pi,n=new on,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new Kt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.multiply(nr),this}rotateOnWorldAxis(t,e){return nr.setFromAxisAngle(t,e),this.quaternion.premultiply(nr),this}rotateX(t){return this.rotateOnAxis(rp,t)}rotateY(t){return this.rotateOnAxis(op,t)}rotateZ(t){return this.rotateOnAxis(ap,t)}translateOnAxis(t,e){return sp.copy(t).applyQuaternion(this.quaternion),this.position.add(sp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rp,t)}translateY(t){return this.translateOnAxis(op,t)}translateZ(t){return this.translateOnAxis(ap,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$a.copy(t):$a.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(mo,$a,this.up):Ei.lookAt($a,mo,this.up),this.quaternion.setFromRotationMatrix(Ei),s&&(Ei.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Ei),this.quaternion.premultiply(nr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lp),ir.child=t,this.dispatchEvent(ir),ir.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qx),Wh.child=t,this.dispatchEvent(Wh),Wh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lp),ir.child=t,this.dispatchEvent(ir),ir.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,t,Wx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,Xx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ge.DEFAULT_UP=new I(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var se=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yx={type:"move"},wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Xh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=qu(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Xh(o,r,t+1/3),this.g=Xh(o,r,t),this.b=Xh(o,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=te){function n(r){r!==void 0&&parseFloat(r)<1&&It("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:It("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);It("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=te){let n=Rm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):It("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=te){return Qt.workingToColorSpace(rn.copy(this),t),Math.round(ie(rn.r*255,0,255))*65536+Math.round(ie(rn.g*255,0,255))*256+Math.round(ie(rn.b*255,0,255))}getHexString(t=te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(rn.copy(this),e);let n=rn.r,s=rn.g,r=rn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=te){Qt.workingToColorSpace(rn.copy(this),t);let e=rn.r,n=rn.g,s=rn.b;return t!==te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Ka);let n=Ro(Yi.h,Ka.h,e),s=Ro(Yi.s,Ka.s,e),r=Ro(Yi.l,Ka.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ut;ut.NAMES=Rm;var ws=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Zn=new I,Ti=new I,qh=new I,wi=new I,sr=new I,rr=new I,cp=new I,Yh=new I,$h=new I,Kh=new I,Zh=new de,Jh=new de,jh=new de,Ii=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Zn.subVectors(t,e),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Zn.subVectors(s,e),Ti.subVectors(n,e),qh.subVectors(t,e);let o=Zn.dot(Zn),a=Zn.dot(Ti),l=Zn.dot(qh),c=Ti.dot(Ti),h=Ti.dot(qh),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,p=(o*h-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(o,wi.y),l.addScaledVector(a,wi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Zh.setScalar(0),Jh.setScalar(0),jh.setScalar(0),Zh.fromBufferAttribute(t,e),Jh.fromBufferAttribute(t,n),jh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Zh,r.x),o.addScaledVector(Jh,r.y),o.addScaledVector(jh,r.z),o}static isFrontFacing(t,e,n,s){return Zn.subVectors(n,e),Ti.subVectors(t,e),Zn.cross(Ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Zn.cross(Ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;sr.subVectors(s,n),rr.subVectors(r,n),Yh.subVectors(t,n);let l=sr.dot(Yh),c=rr.dot(Yh);if(l<=0&&c<=0)return e.copy(n);$h.subVectors(t,s);let h=sr.dot($h),u=rr.dot($h);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(sr,o);Kh.subVectors(t,r);let d=sr.dot(Kh),p=rr.dot(Kh);if(p>=0&&d<=p)return e.copy(r);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(rr,a);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return cp.subVectors(r,s),a=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(cp,a);let g=1/(m+x+f);return o=x*g,a=f*g,e.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ke=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(t.matrixWorld),this.union(Za)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(go),Ja.subVectors(this.max,go),or.subVectors(t.a,go),ar.subVectors(t.b,go),lr.subVectors(t.c,go),$i.subVectors(ar,or),Ki.subVectors(lr,ar),_s.subVectors(or,lr);let e=[0,-$i.z,$i.y,0,-Ki.z,Ki.y,0,-_s.z,_s.y,$i.z,0,-$i.x,Ki.z,0,-Ki.x,_s.z,0,-_s.x,-$i.y,$i.x,0,-Ki.y,Ki.x,0,-_s.y,_s.x,0];return!Qh(e,or,ar,lr,Ja)||(e=[1,0,0,0,1,0,0,0,1],!Qh(e,or,ar,lr,Ja))?!1:(ja.crossVectors($i,Ki),e=[ja.x,ja.y,ja.z],Qh(e,or,ar,lr,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ai=[new I,new I,new I,new I,new I,new I,new I,new I],Jn=new I,Za=new ke,or=new I,ar=new I,lr=new I,$i=new I,Ki=new I,_s=new I,go=new I,Ja=new I,ja=new I,ys=new I;function Qh(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ys.fromArray(i,r);let a=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=t.dot(ys),c=e.dot(ys),h=n.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var We=new I,Qa=new J,$x=0,Ue=class extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$x++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wu,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qa.fromBufferAttribute(this,e),Qa.applyMatrix3(t),this.setXY(e,Qa.x,Qa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Do=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fo=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kx=new ke,xo=new I,tu=new I,xn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xo.subVectors(t,this.center);let e=xo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(xo,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xo.copy(t.center).add(tu)),this.expandByPoint(xo.copy(t.center).sub(tu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Zx=0,Dn=new Wt,eu=new ge,cr=new I,En=new ke,_o=new ke,je=new I,me=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vx(t)?Fo:Do)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Dn.makeRotationFromQuaternion(t),this.applyMatrix4(Dn),this}rotateX(t){return Dn.makeRotationX(t),this.applyMatrix4(Dn),this}rotateY(t){return Dn.makeRotationY(t),this.applyMatrix4(Dn),this}rotateZ(t){return Dn.makeRotationZ(t),this.applyMatrix4(Dn),this}translate(t,e,n){return Dn.makeTranslation(t,e,n),this.applyMatrix4(Dn),this}scale(t,e,n){return Dn.makeScale(t,e,n),this.applyMatrix4(Dn),this}lookAt(t){return eu.lookAt(t),eu.updateMatrix(),this.applyMatrix4(eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&It("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];_o.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(En.min,_o.min),En.expandByPoint(je),je.addVectors(En.max,_o.max),En.expandByPoint(je)):(En.expandByPoint(_o.min),En.expandByPoint(_o.max))}En.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)je.fromBufferAttribute(a,c),l&&(cr.fromBufferAttribute(t,c),je.add(cr)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ue(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new I,l[_]=new I;let c=new I,h=new I,u=new I,f=new J,d=new J,p=new J,x=new I,m=new I;function g(_,T,R){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),h.sub(c),u.sub(c),d.sub(f),p.sub(f);let P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),a[_].add(x),a[T].add(x),a[R].add(x),l[_].add(m),l[T].add(m),l[R].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let _=0,T=y.length;_<T;++_){let R=y[_],P=R.start,L=R.count;for(let B=P,N=P+L;B<N;B+=3)g(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new I,v=new I,b=new I,S=new I;function A(_){b.fromBufferAttribute(s,_),S.copy(b);let T=a[_];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(S,T);let P=v.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,P)}for(let _=0,T=y.length;_<T;++_){let R=y[_],P=R.start,L=R.count;for(let B=P,N=P+L;B<N;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new Ue(f,h,u)}if(this.index===null)return It("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wu,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},pn=new I,ji=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix4(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.applyNormalMatrix(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pn.fromBufferAttribute(this,e),pn.transformDirection(t),this.setXYZ(e,pn.x,pn.y,pn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=jn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=jn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=jn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=jn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Lo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Lo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nu=new I,Jx=new I,jx=new Kt,Tn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=nu.subVectors(n,e).cross(Jx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(nu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jx.getNormalMatrix(t),s=this.coplanarPoint(nu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Qx=0,an=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=kr,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Fu,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=El,this.stencilZFail=El,this.stencilZPass=El,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){It(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){It(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ut().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new J().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new J().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ar=class extends an{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hr,yo=new I,ur=new I,fr=new I,dr=new J,vo=new J,Cm=new Wt,tl=new I,Mo=new I,el=new I,hp=new J,iu=new J,up=new J,Uo=class extends ge{constructor(t=new Ar){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new me;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new As(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new ji(n,3,0,!1)),hr.setAttribute("uv",new ji(n,2,3,!1))}this.geometry=hr,this.material=t,this.center=new J(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Vt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Cm.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),fr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-fr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;nl(tl.set(-.5,-.5,0),fr,o,ur,s,r),nl(Mo.set(.5,-.5,0),fr,o,ur,s,r),nl(el.set(.5,.5,0),fr,o,ur,s,r),hp.set(0,0),iu.set(1,0),up.set(1,1);let a=t.ray.intersectTriangle(tl,Mo,el,!1,yo);if(a===null&&(nl(Mo.set(-.5,.5,0),fr,o,ur,s,r),iu.set(0,1),a=t.ray.intersectTriangle(tl,el,Mo,!1,yo),a===null))return;let l=t.ray.origin.distanceTo(yo);l<t.near||l>t.far||e.push({distance:l,point:yo.clone(),uv:Ii.getInterpolation(yo,tl,Mo,el,hp,iu,up,new J),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function nl(i,t,e,n,s,r){dr.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(vo.x=r*dr.x-s*dr.y,vo.y=s*dr.x+r*dr.y):vo.copy(dr),i.copy(t),i.x+=vo.x,i.y+=vo.y,i.applyMatrix4(Cm)}var Ri=new I,su=new I,il=new I,sl=new I,Qi=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ri.copy(this.origin).addScaledVector(this.direction,e),Ri.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){su.copy(t).add(e).multiplyScalar(.5),il.copy(e).sub(t).normalize(),sl.copy(this.origin).sub(su);let r=t.distanceTo(e)*.5,o=-this.direction.dot(il),a=sl.dot(this.direction),l=-sl.dot(il),c=sl.lengthSq(),h=Math.abs(1-o*o),u,f,d,p;if(h>0)if(u=o*l-a,f=o*a-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(su).addScaledVector(il,f),d}intersectSphere(t,e){if(t.radius<0)return null;Ri.subVectors(t.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ri)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,y=n.y-o.y,E=n.z-o.z,v=Math.abs(l),b=Math.abs(c),S=Math.abs(h),A,_,T,R,P,L,B,N,O,X,q,st;if(v>=b&&v>=S?(T=l,L=u,O=p,st=g,l>=0?(A=c,_=h,R=f,P=d,B=x,N=m,X=y,q=E):(A=h,_=c,R=d,P=f,B=m,N=x,X=E,q=y)):b>=S?(T=c,L=f,O=x,st=y,c>=0?(A=h,_=l,R=d,P=u,B=m,N=p,X=E,q=g):(A=l,_=h,R=u,P=d,B=p,N=m,X=g,q=E)):(T=h,L=d,O=m,st=E,h>=0?(A=l,_=c,R=u,P=f,B=p,N=x,X=g,q=y):(A=c,_=l,R=f,P=u,B=x,N=p,X=y,q=g)),T===0)return null;let Y=A/T,tt=_/T,z=1/T,rt=R-Y*L,ot=P-tt*L,Ot=B-Y*O,zt=N-tt*O,Jt=X-Y*st,$=q-tt*st,Q=Jt*zt-$*Ot,pt=rt*$-ot*Jt,Ut=Ot*ot-zt*rt;if(s){if(Q<0||pt<0||Ut<0)return null}else if((Q<0||pt<0||Ut<0)&&(Q>0||pt>0||Ut>0))return null;let Et=Q+pt+Ut;if(Et===0)return null;let qt=z*(Q*L+pt*O+Ut*st);return(Et>0?qt<0:qt>0)?null:this.at(qt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class extends an{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fp=new Wt,vs=new Qi,rl=new xn,dp=new I,ol=new I,al=new I,ll=new I,ru=new I,cl=new I,pp=new I,hl=new I,Dt=class extends ge{constructor(t=new me,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){cl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ru.fromBufferAttribute(u,t),o?cl.addScaledVector(ru,h):cl.addScaledVector(ru.sub(e),h))}e.add(cl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(r),vs.copy(t.ray).recast(t.near),!(rl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(rl,dp)===null||vs.origin.distanceToSquared(dp)>(t.far-t.near)**2))&&(fp.copy(r).invert(),vs.copy(t.ray).applyMatrix4(fp),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=E;v<b;v+=3){let S=a.getX(v),A=a.getX(v+1),_=a.getX(v+2);s=ul(this,g,t,n,c,h,u,S,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=a.getX(m),E=a.getX(m+1),v=a.getX(m+2);s=ul(this,o,t,n,c,h,u,y,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=f.length;p<x;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,b=E;v<b;v+=3){let S=v,A=v+1,_=v+2;s=ul(this,g,t,n,c,h,u,S,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=p,g=x;m<g;m+=3){let y=m,E=m+1,v=m+2;s=ul(this,o,t,n,c,h,u,y,E,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function t_(i,t,e,n,s,r,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===zn,a),l===null)return null;hl.copy(a),hl.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(hl);return c<e.near||c>e.far?null:{distance:c,point:hl.clone(),object:i}}function ul(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,ol),i.getVertexPosition(l,al),i.getVertexPosition(c,ll);let h=t_(i,t,e,n,ol,al,ll,pp);if(h){let u=new I;Ii.getBarycoord(pp,ol,al,ll,u),s&&(h.uv=Ii.getInterpolatedAttribute(s,a,l,c,u,new J)),r&&(h.uv1=Ii.getInterpolatedAttribute(r,a,l,c,u,new J)),o&&(h.normal=Ii.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Ii.getNormal(ol,al,ll,f.normal),h.face=f,h.barycoord=u}return h}var So=new de,mp=new de,gp=new de,e_=new de,xp=new Wt,fl=new I,ou=new xn,_p=new Wt,au=new Qi,Oo=class extends Dt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pu,this.bindMatrix=new Wt,this.bindMatrixInverse=new Wt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ke),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fl),this.boundingBox.expandByPoint(fl)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,fl),this.boundingSphere.expandByPoint(fl)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ou.copy(this.boundingSphere),ou.applyMatrix4(s),t.ray.intersectsSphere(ou)!==!1&&(_p.copy(s).invert(),au.copy(t.ray).applyMatrix4(_p),!(this.boundingBox!==null&&au.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,au)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new de,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===pu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dm?this.bindMatrixInverse.copy(this.bindMatrix).invert():It("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;mp.fromBufferAttribute(s.attributes.skinIndex,t),gp.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(So.copy(e),e.set(0,0,0,0)):(So.set(...e,1),e.set(0,0,0)),So.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=gp.getComponent(r);if(o!==0){let a=mp.getComponent(r);xp.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(e_.copy(So).applyMatrix4(xp),o)}}return e.isVector4&&(e.w=So.w),e.applyMatrix4(this.bindMatrixInverse)}},Rr=class extends ge{constructor(){super(),this.isBone=!0,this.type="Bone"}},Cr=class extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ze,h=ze,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yp=new Wt,n_=new Wt,Bo=class i{constructor(t=[],e=[]){this.uuid=Un(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){It("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Wt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new Wt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:n_;yp.multiplyMatrices(a,e[r]),yp.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Cr(e,t,t,In,Cn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],o=e[r];o===void 0&&(It("Skeleton: No bone found with UUID:",r),o=new Rr),this.bones.push(o),this.boneInverses.push(new Wt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=n[s];t.boneInverses.push(a.toArray())}return t}},Li=class extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},pr=new Wt,vp=new Wt,dl=[],Mp=new ke,i_=new Wt,bo=new Dt,Eo=new xn,Rs=class extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,i_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),Mp.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(Mp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pr),Eo.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(Eo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(bo.geometry=this.geometry,bo.material=this.material,bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eo.copy(this.boundingSphere),Eo.applyMatrix4(n),t.ray.intersectsSphere(Eo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),vp.multiplyMatrices(n,pr),bo.matrixWorld=vp,bo.raycast(t,dl);for(let o=0,a=dl.length;o<a;o++){let l=dl[o];l.instanceId=r,l.object=this,e.push(l)}dl.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cr(new Float32Array(s*this.count),s,this.count,uc,Cn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ms=new xn,s_=new J(.5,.5),pl=new I,Ir=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],x=r[9],m=r[10],g=r[11],y=r[12],E=r[13],v=r[14],b=r[15];if(s[0].setComponents(c-o,d-h,g-p,b-y).normalize(),s[1].setComponents(c+o,d+h,g+p,b+y).normalize(),s[2].setComponents(c+a,d+u,g+x,b+E).normalize(),s[3].setComponents(c-a,d-u,g-x,b-E).normalize(),n)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,g-m,b-v).normalize();else if(s[4].setComponents(c-l,d-f,g-m,b-v).normalize(),e===Qn)s[5].setComponents(c+l,d+f,g+m,b+v).normalize();else if(e===Mr)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(t){Ms.center.set(0,0,0);let e=s_.distanceTo(t.center);return Ms.radius=.7071067811865476+e,Ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(pl.x=s.normal.x>0?t.max.x:t.min.x,pl.y=s.normal.y>0?t.max.y:t.min.y,pl.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pr=class extends an{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ul=new I,Ol=new I,Sp=new Wt,To=new Qi,ml=new xn,lu=new I,bp=new I,Cs=class extends ge{constructor(t=new me,e=new Pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ul.fromBufferAttribute(e,s-1),Ol.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ul.distanceTo(Ol);t.setAttribute("lineDistance",new $t(n,1))}else It("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(s),ml.radius+=r,t.ray.intersectsSphere(ml)===!1)return;Sp.copy(s).invert(),To.copy(t.ray).applyMatrix4(Sp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=h.getX(x),y=h.getX(x+1),E=gl(this,t,To,l,g,y,x);E&&e.push(E)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(d),g=gl(this,t,To,l,x,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,m=p-1;x<m;x+=c){let g=gl(this,t,To,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=gl(this,t,To,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function gl(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Ul.fromBufferAttribute(a,s),Ol.fromBufferAttribute(a,r),e.distanceSqToSegment(Ul,Ol,lu,bp)>n)return;lu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(lu);if(!(c<t.near||c>t.far))return{distance:c,point:bp.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ep=new I,Tp=new I,zo=class extends Cs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ep.fromBufferAttribute(e,s),Tp.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ep.distanceTo(Tp);t.setAttribute("lineDistance",new $t(n,1))}else It("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ko=class extends Cs{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Lr=class extends an{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},wp=new Wt,yu=new Qi,xl=new xn,_l=new I,Ho=class extends ge{constructor(t=new me,e=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),xl.radius+=r,t.ray.intersectsSphere(xl)===!1)return;wp.copy(s).invert(),yu.copy(t.ray).applyMatrix4(wp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,x=d;p<x;p++){let m=c.getX(p);_l.fromBufferAttribute(u,m),Ap(_l,m,l,s,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=f,x=d;p<x;p++)_l.fromBufferAttribute(u,p),Ap(_l,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ap(i,t,e,n,s,r,o){let a=yu.distanceSqToPoint(i);if(a<e){let l=new I;yu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Go=class extends Ye{constructor(t=[],e=ss,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ti=class extends Ye{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ts=class extends Ye{constructor(t,e,n=ni,s,r,o,a=ze,l=ze,c,h=fi,u=1){if(h!==fi&&h!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Bl=class extends ts{constructor(t,e=ni,n=ss,s,r,o=ze,a=ze,l,c=fi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vo=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ln=class i extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function p(x,m,g,y,E,v,b,S,A,_,T){let R=v/A,P=b/_,L=v/2,B=b/2,N=S/2,O=A+1,X=_+1,q=0,st=0,Y=new I;for(let tt=0;tt<X;tt++){let z=tt*P-B;for(let rt=0;rt<O;rt++){let ot=rt*R-L;Y[x]=ot*y,Y[m]=z*E,Y[g]=N,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[g]=S>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(rt/A),u.push(1-tt/_),q+=1}}for(let tt=0;tt<_;tt++)for(let z=0;z<A;z++){let rt=f+z+O*tt,ot=f+z+O*(tt+1),Ot=f+(z+1)+O*(tt+1),zt=f+(z+1)+O*tt;l.push(rt,ot,zt),l.push(ot,Ot,zt),st+=6}a.addGroup(d,st,T),d+=st,f+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Wo=class i extends me{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,p=n*2+r,x=s+1,m=new I,g=new I;for(let y=0;y<=p;y++){let E=0,v=0,b=0,S=0;if(y<=n){let T=y/n,R=T*Math.PI/2;v=-h-t*Math.cos(R),b=t*Math.sin(R),S=-t*Math.cos(R),E=T*u}else if(y<=n+r){let T=(y-n)/r;v=-h+T*e,b=t,S=0,E=u+T*f}else{let T=(y-n-r)/n,R=T*Math.PI/2;v=h+t*Math.sin(R),b=t*Math.cos(R),S=t*Math.sin(R),E=u+f+T*u}let A=Math.max(0,Math.min(1,E/d)),_=0;y===0?_=.5/s:y===p&&(_=-.5/s);for(let T=0;T<=s;T++){let R=T/s,P=R*Math.PI*2,L=Math.sin(P),B=Math.cos(P);g.x=-b*B,g.y=v,g.z=b*L,a.push(g.x,g.y,g.z),m.set(-b*B,S,b*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+_,A)}if(y>0){let T=(y-1)*x;for(let R=0;R<s;R++){let P=T+R,L=T+R+1,B=y*x+R,N=y*x+R+1;o.push(P,L,B),o.push(L,N,B)}}}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Xo=class i extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new J;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},wn=class i extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,x=[],m=n/2,g=0;y(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(d,2));function y(){let v=new I,b=new I,S=0,A=(e-t)/n;for(let _=0;_<=r;_++){let T=[],R=_/r,P=R*(e-t)+t;for(let L=0;L<=s;L++){let B=L/s,N=B*l+a,O=Math.sin(N),X=Math.cos(N);b.x=P*O,b.y=-R*n+m,b.z=P*X,u.push(b.x,b.y,b.z),v.set(O,A,X).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-R),T.push(p++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let R=x[T][_],P=x[T+1][_],L=x[T+1][_+1],B=x[T][_+1];(t>0||T!==0)&&(h.push(R,P,B),S+=3),(e>0||T!==r-1)&&(h.push(P,L,B),S+=3)}c.addGroup(g,S,0),g+=S}function E(v){let b=p,S=new J,A=new I,_=0,T=v===!0?t:e,R=v===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*R,0),f.push(0,R,0),d.push(.5,.5),p++;let P=p;for(let L=0;L<=s;L++){let N=L/s*l+a,O=Math.cos(N),X=Math.sin(N);A.x=T*X,A.y=m*R,A.z=T*O,u.push(A.x,A.y,A.z),f.push(0,R,0),S.x=O*.5+.5,S.y=X*.5*R+.5,d.push(S.x,S.y),p++}for(let L=0;L<s;L++){let B=b+L,N=P+L;v===!0?h.push(N,N+1,B):h.push(N+1,N,B),_+=3}c.addGroup(g,_,v===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zl=class i extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new I,v=new I,b=new I;for(let S=0;S<e.length;S+=3)d(e[S+0],E),d(e[S+1],v),d(e[S+2],b),l(E,v,b,y)}function l(y,E,v,b){let S=b+1,A=[];for(let _=0;_<=S;_++){A[_]=[];let T=y.clone().lerp(v,_/S),R=E.clone().lerp(v,_/S),P=S-_;for(let L=0;L<=P;L++)L===0&&_===S?A[_][L]=T:A[_][L]=T.clone().lerp(R,L/P)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){let R=Math.floor(T/2);T%2===0?(f(A[_][R+1]),f(A[_+1][R]),f(A[_][R])):(f(A[_][R+1]),f(A[_+1][R+1]),f(A[_+1][R]))}}function c(y){let E=new I;for(let v=0;v<r.length;v+=3)E.x=r[v+0],E.y=r[v+1],E.z=r[v+2],E.normalize().multiplyScalar(y),r[v+0]=E.x,r[v+1]=E.y,r[v+2]=E.z}function h(){let y=new I;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let v=m(y)/2/Math.PI+.5,b=g(y)/Math.PI+.5;o.push(v,1-b)}p(),u()}function u(){for(let y=0;y<o.length;y+=6){let E=o[y+0],v=o[y+2],b=o[y+4],S=Math.max(E,v,b),A=Math.min(E,v,b);S>.9&&A<.1&&(E<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),b<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,E){let v=y*3;E.x=t[v+0],E.y=t[v+1],E.z=t[v+2]}function p(){let y=new I,E=new I,v=new I,b=new I,S=new J,A=new J,_=new J;for(let T=0,R=0;T<r.length;T+=9,R+=6){y.set(r[T+0],r[T+1],r[T+2]),E.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),S.set(o[R+0],o[R+1]),A.set(o[R+2],o[R+3]),_.set(o[R+4],o[R+5]),b.copy(y).add(E).add(v).divideScalar(3);let P=m(b);x(S,R+0,y,P),x(A,R+2,E,P),x(_,R+4,v,P)}}function x(y,E,v,b){b<0&&y.x===1&&(o[E]=y.x-1),v.x===0&&v.z===0&&(o[E]=b/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var An=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){It("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new J:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],o=[],a=new I,l=new Wt;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ie(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ie(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends An{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new J){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},kl=class extends Nr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Rp=new I,Cp=new I,cu=new Yu,hu=new Yu,uu=new Yu,Hl=class extends An{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Cp.subVectors(s[0],s[1]).add(s[0]),c=Cp);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Rp.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Rp),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),cu.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,x,m),hu.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,x,m),uu.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(cu.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),hu.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),uu.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(cu.calc(l),hu.calc(l),uu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ip(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function r_(i,t){let e=1-i;return e*e*t}function o_(i,t){return 2*(1-i)*i*t}function a_(i,t){return i*i*t}function Co(i,t,e,n){return r_(i,t)+o_(i,e)+a_(i,n)}function l_(i,t){let e=1-i;return e*e*e*t}function c_(i,t){let e=1-i;return 3*e*e*i*t}function h_(i,t){return 3*(1-i)*i*i*t}function u_(i,t){return i*i*i*t}function Io(i,t,e,n,s){return l_(i,t)+c_(i,e)+h_(i,n)+u_(i,s)}var qo=class extends An{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(t,s.x,r.x,o.x,a.x),Io(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Gl=class extends An{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(t,s.x,r.x,o.x,a.x),Io(t,s.y,r.y,o.y,a.y),Io(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Yo=class extends An{constructor(t=new J,e=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new J){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vl=class extends An{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends An{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Co(t,s.x,r.x,o.x),Co(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wl=class extends An{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Co(t,s.x,r.x,o.x),Co(t,s.y,r.y,o.y),Co(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ko=class extends An{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new J){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ip(a,l.x,c.x,h.x,u.x),Ip(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new J().fromArray(s))}return this}},vu=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:Hl,CubicBezierCurve:qo,CubicBezierCurve3:Gl,EllipseCurve:Nr,LineCurve:Yo,LineCurve3:Vl,QuadraticBezierCurve:$o,QuadraticBezierCurve3:Wl,SplineCurve:Ko}),Xl=class extends An{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new vu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new vu[s.type]().fromJSON(s))}return this}},Zo=class extends Xl{constructor(t){super(),this.type="Path",this.currentPoint=new J,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Yo(this.currentPoint.clone(),new J(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new $o(this.currentPoint.clone(),new J(t,e),new J(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new qo(this.currentPoint.clone(),new J(t,e),new J(n,s),new J(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ko(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new Nr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},es=class extends Zo{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Zo().fromJSON(s))}return this}};function f_(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Im(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=x_(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<s;f+=e){let d=i[f],p=i[f+1];d<a&&(a=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Jo(r,o,e,a,l,c,0),o}function Im(i,t,e,n,s){let r;if(s===R_(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Pp(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Pp(o/n|0,i[o],i[o+1],r);return r&&Dr(r,r.next)&&(Qo(r),r=r.next),r}function Is(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Dr(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Qo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Jo(i,t,e,n,s,r,o){if(!i)return;!o&&r&&S_(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?p_(i,n,s,r):d_(i)){t.push(l.i,i.i,c.i),Qo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=m_(Is(i),t),Jo(i,t,e,n,s,r,2)):o===2&&g_(i,t,e,n,s,r):Jo(Is(i),t,e,n,s,r,1);break}}}function d_(i){let t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&wo(s,a,r,l,o,c,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function p_(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ne(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),p=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),g=Mu(d,p,t,e,n),y=Mu(x,m,t,e,n),E=i.prevZ,v=i.nextZ;for(;E&&E.z>=g&&v&&v.z<=y;){if(E.x>=d&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&wo(a,h,l,u,c,f,E.x,E.y)&&Ne(E.prev,E,E.next)>=0||(E=E.prevZ,v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&wo(a,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=x&&E.y>=p&&E.y<=m&&E!==s&&E!==o&&wo(a,h,l,u,c,f,E.x,E.y)&&Ne(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&wo(a,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function m_(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Dr(n,s)&&Lm(n,e,e.next,s)&&jo(n,s)&&jo(s,n)&&(t.push(n.i,e.i,s.i),Qo(e),Qo(e.next),e=i=s),e=e.next}while(e!==i);return Is(e)}function g_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T_(o,a)){let l=Nm(o,a);o=Is(o,o.next),l=Is(l,l.next),Jo(o,t,e,n,s,r,0),Jo(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function x_(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Im(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(E_(c))}s.sort(__);for(let r=0;r<s.length;r++)e=y_(s[r],e);return e}function __(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function y_(i,t){let e=v_(i,t);if(!e)return t;let n=Nm(e,i);return Is(n,n.next),Is(e,e.next)}function v_(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Dr(i,e))return e;do{if(Dr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Pm(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);jo(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&M_(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function M_(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function S_(i,t,e,n){let s=i;do s.z===0&&(s.z=Mu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,b_(s)}function b_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Mu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function E_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Pm(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function wo(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Pm(i,t,e,n,s,r,o,a)}function T_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!w_(i,t)&&(jo(i,t)&&jo(t,i)&&A_(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||Dr(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Dr(i,t){return i.x===t.x&&i.y===t.y}function Lm(i,t,e,n){let s=vl(Ne(i,t,e)),r=vl(Ne(i,t,n)),o=vl(Ne(e,n,i)),a=vl(Ne(e,n,t));return!!(s!==r&&o!==a||s===0&&yl(i,e,t)||r===0&&yl(i,n,t)||o===0&&yl(e,i,n)||a===0&&yl(e,t,n))}function yl(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vl(i){return i>0?1:i<0?-1:0}function w_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function jo(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function A_(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nm(i,t){let e=Su(i.i,i.x,i.y),n=Su(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Pp(i,t,e,n){let s=Su(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Su(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function R_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var bu=class{static triangulate(t,e,n=2){return f_(t,e,n)}},hi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Lp(t),Np(n,t);let o=t.length;e.forEach(Lp);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Np(n,e[l]);let a=bu.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Lp(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Np(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ta=class i extends me{constructor(t=new es([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:C_,E,v=!1,b,S,A,_;if(g){E=g.getSpacedPoints(h),v=!0,f=!1;let nt=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,nt),S=new I,A=new I,_=new I}f||(m=0,d=0,p=0,x=0);let T=a.extractPoints(c),R=T.shape,P=T.holes;if(!hi.isClockWise(R)){R=R.reverse();for(let nt=0,at=P.length;nt<at;nt++){let lt=P[nt];hi.isClockWise(lt)&&(P[nt]=lt.reverse())}}function B(nt){let lt=10000000000000001e-36,ct=nt[0];for(let dt=1;dt<=nt.length;dt++){let Ht=dt%nt.length,Bt=nt[Ht],Yt=Bt.x-ct.x,Zt=Bt.y-ct.y,D=Yt*Yt+Zt*Zt,ye=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ct.x),Math.abs(ct.y)),ae=lt*ye*ye;if(D<=ae){nt.splice(Ht,1),dt--;continue}ct=Bt}}B(R),P.forEach(B);let N=P.length,O=R;for(let nt=0;nt<N;nt++){let at=P[nt];R=R.concat(at)}function X(nt,at,lt){return at||Vt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,lt)}let q=R.length;function st(nt,at,lt){let ct,dt,Ht,Bt=nt.x-at.x,Yt=nt.y-at.y,Zt=lt.x-nt.x,D=lt.y-nt.y,ye=Bt*Bt+Yt*Yt,ae=Bt*D-Yt*Zt;if(Math.abs(ae)>Number.EPSILON){let C=Math.sqrt(ye),M=Math.sqrt(Zt*Zt+D*D),k=at.x-Yt/C,V=at.y+Bt/C,K=lt.x-D/M,ht=lt.y+Zt/M,ft=((K-k)*D-(ht-V)*Zt)/(Bt*D-Yt*Zt);ct=k+Bt*ft-nt.x,dt=V+Yt*ft-nt.y;let Z=ct*ct+dt*dt;if(Z<=2)return new J(ct,dt);Ht=Math.sqrt(Z/2)}else{let C=!1;Bt>Number.EPSILON?Zt>Number.EPSILON&&(C=!0):Bt<-Number.EPSILON?Zt<-Number.EPSILON&&(C=!0):Math.sign(Yt)===Math.sign(D)&&(C=!0),C?(ct=-Yt,dt=Bt,Ht=Math.sqrt(ye)):(ct=Bt,dt=Yt,Ht=Math.sqrt(ye/2))}return new J(ct/Ht,dt/Ht)}let Y=[];for(let nt=0,at=O.length,lt=at-1,ct=nt+1;nt<at;nt++,lt++,ct++)lt===at&&(lt=0),ct===at&&(ct=0),Y[nt]=st(O[nt],O[lt],O[ct]);let tt=[],z,rt=Y.concat();for(let nt=0,at=N;nt<at;nt++){let lt=P[nt];z=[];for(let ct=0,dt=lt.length,Ht=dt-1,Bt=ct+1;ct<dt;ct++,Ht++,Bt++)Ht===dt&&(Ht=0),Bt===dt&&(Bt=0),z[ct]=st(lt[ct],lt[Ht],lt[Bt]);tt.push(z),rt=rt.concat(z)}let ot;if(m===0)ot=hi.triangulateShape(O,P);else{let nt=[],at=[];for(let lt=0;lt<m;lt++){let ct=lt/m,dt=d*Math.cos(ct*Math.PI/2),Ht=p*Math.sin(ct*Math.PI/2)+x;for(let Bt=0,Yt=O.length;Bt<Yt;Bt++){let Zt=X(O[Bt],Y[Bt],Ht);pt(Zt.x,Zt.y,-dt),ct===0&&nt.push(Zt)}for(let Bt=0,Yt=N;Bt<Yt;Bt++){let Zt=P[Bt];z=tt[Bt];let D=[];for(let ye=0,ae=Zt.length;ye<ae;ye++){let C=X(Zt[ye],z[ye],Ht);pt(C.x,C.y,-dt),ct===0&&D.push(C)}ct===0&&at.push(D)}}ot=hi.triangulateShape(nt,at)}let Ot=ot.length,zt=p+x;for(let nt=0;nt<q;nt++){let at=f?X(R[nt],rt[nt],zt):R[nt];v?(A.copy(b.normals[0]).multiplyScalar(at.x),S.copy(b.binormals[0]).multiplyScalar(at.y),_.copy(E[0]).add(A).add(S),pt(_.x,_.y,_.z)):pt(at.x,at.y,0)}for(let nt=1;nt<=h;nt++)for(let at=0;at<q;at++){let lt=f?X(R[at],rt[at],zt):R[at];v?(A.copy(b.normals[nt]).multiplyScalar(lt.x),S.copy(b.binormals[nt]).multiplyScalar(lt.y),_.copy(E[nt]).add(A).add(S),pt(_.x,_.y,_.z)):pt(lt.x,lt.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){let at=nt/m,lt=d*Math.cos(at*Math.PI/2),ct=p*Math.sin(at*Math.PI/2)+x;for(let dt=0,Ht=O.length;dt<Ht;dt++){let Bt=X(O[dt],Y[dt],ct);pt(Bt.x,Bt.y,u+lt)}for(let dt=0,Ht=P.length;dt<Ht;dt++){let Bt=P[dt];z=tt[dt];for(let Yt=0,Zt=Bt.length;Yt<Zt;Yt++){let D=X(Bt[Yt],z[Yt],ct);v?pt(D.x,D.y+E[h-1].y,E[h-1].x+lt):pt(D.x,D.y,u+lt)}}}Jt(),$();function Jt(){let nt=s.length/3;if(f){let at=0,lt=q*at;for(let ct=0;ct<Ot;ct++){let dt=ot[ct];Ut(dt[2]+lt,dt[1]+lt,dt[0]+lt)}at=h+m*2,lt=q*at;for(let ct=0;ct<Ot;ct++){let dt=ot[ct];Ut(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let at=0;at<Ot;at++){let lt=ot[at];Ut(lt[2],lt[1],lt[0])}for(let at=0;at<Ot;at++){let lt=ot[at];Ut(lt[0]+q*h,lt[1]+q*h,lt[2]+q*h)}}n.addGroup(nt,s.length/3-nt,0)}function $(){let nt=s.length/3,at=0;Q(O,at),at+=O.length;for(let lt=0,ct=P.length;lt<ct;lt++){let dt=P[lt];Q(dt,at),at+=dt.length}n.addGroup(nt,s.length/3-nt,1)}function Q(nt,at){let lt=nt.length;for(;--lt>=0;){let ct=lt,dt=lt-1;dt<0&&(dt=nt.length-1);for(let Ht=0,Bt=h+m*2;Ht<Bt;Ht++){let Yt=q*Ht,Zt=q*(Ht+1),D=at+ct+Yt,ye=at+dt+Yt,ae=at+dt+Zt,C=at+ct+Zt;Et(D,ye,ae,C)}}}function pt(nt,at,lt){l.push(nt),l.push(at),l.push(lt)}function Ut(nt,at,lt){qt(nt),qt(at),qt(lt);let ct=s.length/3,dt=y.generateTopUV(n,s,ct-3,ct-2,ct-1);Se(dt[0]),Se(dt[1]),Se(dt[2])}function Et(nt,at,lt,ct){qt(nt),qt(at),qt(ct),qt(at),qt(lt),qt(ct);let dt=s.length/3,Ht=y.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);Se(Ht[0]),Se(Ht[1]),Se(Ht[3]),Se(Ht[1]),Se(Ht[2]),Se(Ht[3])}function qt(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function Se(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return I_(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new vu[s.type]().fromJSON(s)),new i(n,t.options)}},C_={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new J(r,o),new J(a,l),new J(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new J(o,1-l),new J(c,1-u),new J(f,1-p),new J(x,1-g)]:[new J(a,1-l),new J(h,1-u),new J(d,1-p),new J(m,1-g)]}};function I_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ea=class i extends zl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Fr=class i extends me{constructor(t=[new J(0,-.5),new J(.5,0),new J(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ie(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new J,d=new I,p=new I,x=new I,m=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(p)}for(let y=0;y<=e;y++){let E=n+y*h*s,v=Math.sin(E),b=Math.cos(E);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*b,o.push(u.x,u.y,u.z),f.x=y/e,f.y=S/(t.length-1),a.push(f.x,f.y);let A=l[3*S+0]*v,_=l[3*S+1],T=l[3*S+0]*b;c.push(A,_,T)}}for(let y=0;y<e;y++)for(let E=0;E<t.length-1;E++){let v=E+y*t.length,b=v,S=v+t.length,A=v+t.length+1,_=v+1;r.push(b,S,_),r.push(A,_,S)}this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Fe=class i extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let y=g*f-o;for(let E=0;E<c;E++){let v=E*u-r;p.push(v,-y,0),x.push(0,0,1),m.push(E/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let E=y+c*g,v=y+c*(g+1),b=y+1+c*(g+1),S=y+1+c*g;d.push(E,v,S),d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var na=class i extends me{constructor(t=new es([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(o,2));function c(h){let u=s.length/3,f=h.extractPoints(e),d=f.shape,p=f.holes;hi.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){let y=p[m];hi.isClockWise(y)===!0&&(p[m]=y.reverse())}let x=hi.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){let y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){let y=d[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,g=x.length;m<g;m++){let y=x[m],E=y[0]+u,v=y[1]+u,b=y[2]+u;n.push(E,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return P_(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let o=e[t.shapes[s]];n.push(o)}return new i(n,t.curveSegments)}};function P_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var Ps=class i extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],p=[],x=[],m=[];for(let g=0;g<=n;g++){let y=[],E=g/n,v=o+E*a,b=t*Math.cos(v),S=Math.sqrt(t*t-b*b),A=0;g===0&&o===0?A=.5/e:g===n&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,R=s+T*r;u.x=-S*Math.cos(R),u.y=b,u.z=S*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(T+A,1-E),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let E=h[g][y+1],v=h[g][y],b=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&d.push(E,v,S),(g!==n-1||l<Math.PI)&&d.push(v,b,S)}this.setIndex(d),this.setAttribute("position",new $t(p,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Hs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dp(s))s.isRenderTargetTexture?(It("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dp(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=Hs(i[e]);for(let s in n)t[s]=n[s]}return t}function Dp(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function L_(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function $u(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var qr={clone:Hs,merge:cn},N_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends an{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N_,this.fragmentShader=D_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=L_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ut().setHex(s.value);break;case"v2":this.uniforms[n].value=new J().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new de().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Wt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ur=class extends $e{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oe=class extends an{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},He=class extends Oe{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ia=class extends an{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=sc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ql=class extends an{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Yl=class extends an{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ji(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Tl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function F_(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function Fp(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=e[r]*t;for(let l=0;l!==t;++l)s[o++]=i[a+l]}return s}function U_(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=i[s++];while(r!==void 0)}var mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},$l=class extends mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gu,endingEnd:gu}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case xu:r=t,a=2*e-n;break;case _u:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xu:o=t,l=2*n-e;break;case _u:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-e)/(s-e),x=p*p,m=x*p,g=-f*m+2*f*x-f*p,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*p+1,E=(-1-d)*m+(1.5+d)*x+.5*p,v=d*m-d*x;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+y*o[c+b]+E*o[l+b]+v*o[u+b];return r}},Kl=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},Zl=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Jl=class extends mi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(s-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=d*f+p*2,y=u[g],E=u[g+1],v=t*f+p*2,b=h[v],S=h[v+1],A=B_(n,e,y,b,s);r[p]=Dm(A,x,E,S,m)}return r}};function Dm(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function O_(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function B_(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Dm(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=O_(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var _n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ji(e,this.TimeBufferType),this.values=Ji(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ji(t.times,Array),values:Ji(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Tl(t.settings)&&(n.settings={inTangents:Ji(t.settings.inTangents,Array),outTangents:Ji(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Jl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case bs:e=this.InterpolantFactoryMethodDiscrete;break;case Es:e=this.InterpolantFactoryMethodLinear;break;case bl:e=this.InterpolantFactoryMethodSmooth;break;case mu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return It("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bs;case this.InterpolantFactoryMethodLinear:return Es;case this.InterpolantFactoryMethodSmooth:return bl;case this.InterpolantFactoryMethodBezier:return mu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Tl(this.settings)&&(Up(this.settings.inTangents,t),Up(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Vt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Mx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Up(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Es;var Ni=class extends _n{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=bs;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};sa.prototype.ValueTypeName="color";var Di=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};Di.prototype.ValueTypeName="number";var jl=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)on.slerpFlat(r,0,o,c-a,o,c,l);return r}},Fi=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new jl(this.times,this.values,this.getValueSize(),t)}};Fi.prototype.ValueTypeName="quaternion";Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends _n{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=bs;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};ns.prototype.ValueTypeName="vector";var ra=class{constructor(t="",e=-1,n=[],s=pm){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(k_(n[o]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(_n.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=F_(l);l=Fp(l,1,h),c=Fp(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Di(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){let c=t[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],f=s[u];f||(s[u]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],e,n));return o}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function z_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return ns;case"color":return sa;case"quaternion":return Fi;case"bool":case"boolean":return Ni;case"string":return Ui}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function k_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=z_(i.type);if(i.times===void 0){let n=[],s=[];U_(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),Tl(i.settings)&&(e.settings={inTangents:Ji(i.settings.inTangents,Float32Array),outTangents:Ji(i.settings.outTangents,Float32Array)}),e}var ui={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Op(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Op(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Op(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ql=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fm=new Ql,gi=class{constructor(t){this.manager=t!==void 0?t:Fm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ci={},Eu=class extends Error{constructor(t,e){super(t),this.response=e}},Or=class extends gi{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=ui.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Ci[t]!==void 0){Ci[t].push({onLoad:e,onProgress:n,onError:s});return}Ci[t]=[],Ci[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&It("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ci[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,x=0,m=new ReadableStream({start(g){y();function y(){u.read().then(({done:E,value:v})=>{if(E)g.close();else{x+=v.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:x,total:d});for(let S=0,A=h.length;S<A;S++){let _=h[S];_.onProgress&&_.onProgress(b)}g.enqueue(v),y()}},E=>{g.error(E)})}}});return new Response(m)}else throw new Eu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{ui.add(`file:${t}`,c);let h=Ci[t];delete Ci[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{let h=Ci[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ci[t];for(let u=0,f=h.length;u<f;u++){let d=h[u];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var mr=new WeakMap,tc=class extends gi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ui.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=mr.get(o);u===void 0&&(u=[],mr.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=Sr("img");function l(){h(),e&&e(this);let u=mr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}mr.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),ui.remove(`image:${t}`);let f=mr.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(u)}mr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ui.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Ls=class extends gi{constructor(t){super(t)}load(t,e,n,s){let r=new Ye,o=new tc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ns=class extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},oa=class extends Ns{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},fu=new Wt,Bp=new I,zp=new I,Br=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new Wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bp),zp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Mr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(fu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ml=new I,Sl=new on,ci=new I,aa=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ml,Sl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,ci.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ml,Sl,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ml,Sl,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zi=new I,kp=new J,Hp=new J,Qe=class extends aa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ts*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-t/Zi.z)}getViewSize(t,e){return this.getViewBounds(t,kp,Hp),e.subVectors(Hp,kp)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ao*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Tu=class extends Br{constructor(){super(new Qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ts*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Ds=class extends Ns{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Tu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},wu=class extends Br{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0}},Fs=class extends Ns{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Bn=class extends aa{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Au=class extends Br{constructor(){super(new Bn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends Ns{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Au}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Oi=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var du=new WeakMap,la=class extends gi{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&It("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&It("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=ui.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{du.has(o)===!0?(s&&s(du.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ui.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),du.set(l,c),ui.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});ui.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var gr=-90,xr=1,ec=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qe(gr,xr,t,e);s.layers=this.layers,this.add(s);let r=new Qe(gr,xr,t,e);r.layers=this.layers,this.add(r);let o=new Qe(gr,xr,t,e);o.layers=this.layers,this.add(o);let a=new Qe(gr,xr,t,e);a.layers=this.layers,this.add(a);let l=new Qe(gr,xr,t,e);l.layers=this.layers,this.add(l);let c=new Qe(gr,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},nc=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ca=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=H_.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function H_(){this._document.hidden===!1&&this.reset()}var Ku="\\[\\]\\.:\\/",G_=new RegExp("["+Ku+"]","g"),Zu="[^"+Ku+"]",V_="[^"+Ku.replace("\\.","")+"]",W_=/((?:WC+[\/:])*)/.source.replace("WC",Zu),X_=/(WCOD+)?/.source.replace("WCOD",V_),q_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),Y_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),$_=new RegExp("^"+W_+X_+q_+Y_+"$"),K_=["material","materials","bones","map"],Ru=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G_,"")}static parseTrackName(t){let e=$_.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);K_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){It("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Ru;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CT=new Float32Array(1);var Gp=new Wt,ha=class{constructor(t,e,n=0,s=1/0){this.ray=new Qi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Tr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Gp.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gp),this}intersectObject(t,e=!0,n=[]){return Cu(t,this,n,e),n.sort(Vp),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Cu(t[s],this,n,e);return n.sort(Vp),n}};function Vp(i,t){return i.distance-t.distance}function Cu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Cu(r[o],t,e,!0)}}var ua=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,It("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var nf=class nf{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};nf.prototype.isMatrix2=!0;var Iu=nf;function Ju(i,t,e,n){let s=Z_(n);switch(e){case Hu:return i*t;case uc:return i*t/s.components*s.byteLength;case fc:return i*t/s.components*s.byteLength;case os:return i*t*2/s.components*s.byteLength;case dc:return i*t*2/s.components*s.byteLength;case Gu:return i*t*3/s.components*s.byteLength;case In:return i*t*4/s.components*s.byteLength;case pc:return i*t*4/s.components*s.byteLength;case va:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:case _c:return Math.max(i,16)*Math.max(t,8)/4;case mc:case xc:return Math.max(i,8)*Math.max(t,8)/2;case yc:case vc:case Sc:case bc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ea:case Ec:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zc:case kc:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Gc:case Vc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ta:case Wc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Z_(i){switch(i){case yn:case Ou:return{byteLength:1,components:1};case Gr:case Bu:case Xe:return{byteLength:2,components:1};case cc:case hc:return{byteLength:2,components:4};case ni:case lc:case Cn:return{byteLength:4,components:1};case zu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?It("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function i0(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function j_(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],x=u[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Q_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
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
#endif`,ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ry=`#ifdef USE_AOMAP
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
#endif`,oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ay=`#ifdef USE_BATCHING
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
#endif`,ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fy=`#ifdef USE_IRIDESCENCE
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
#endif`,dy=`#ifdef USE_BUMPMAP
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
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,My=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sy=`#define PI 3.141592653589793
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
} // validated`,by=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ey=`vec3 transformedNormal = objectNormal;
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
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,By=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
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
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xy=`#ifdef USE_ENVMAP
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
#endif`,qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
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
#endif`,Jy=`uniform sampler2D dfgLUT;
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
}`,jy=`
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cv=`#if defined( USE_POINTS_UV )
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
#endif`,hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mv=`#ifdef USE_MORPHTARGETS
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
#endif`,gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_v=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sv=`#ifdef USE_NORMALMAP
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
#endif`,bv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ev=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Av=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ov=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bv=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gv=`#ifdef USE_SKINNING
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
#endif`,Vv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#ifdef USE_TRANSMISSION
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
#endif`,Kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
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
}`,oM=`#if DEPTH_PACKING == 3200
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
}`,aM=`#define DISTANCE
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
}`,lM=`#define DISTANCE
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
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
}`,fM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define LAMBERT
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
}`,xM=`#define MATCAP
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
}`,_M=`#define MATCAP
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
}`,yM=`#define NORMAL
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
}`,vM=`#define NORMAL
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
}`,MM=`#define PHONG
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
}`,SM=`#define PHONG
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
}`,bM=`#define STANDARD
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
}`,EM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,wM=`#define TOON
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
}`,AM=`uniform float size;
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
}`,RM=`uniform vec3 diffuse;
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
}`,CM=`#include <common>
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
}`,IM=`uniform vec3 color;
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
}`,PM=`uniform float rotation;
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
}`,LM=`uniform vec3 diffuse;
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
}`,re={alphahash_fragment:Q_,alphahash_pars_fragment:ty,alphamap_fragment:ey,alphamap_pars_fragment:ny,alphatest_fragment:iy,alphatest_pars_fragment:sy,aomap_fragment:ry,aomap_pars_fragment:oy,batching_pars_vertex:ay,batching_vertex:ly,begin_vertex:cy,beginnormal_vertex:hy,bsdfs:uy,iridescence_fragment:fy,bumpmap_pars_fragment:dy,clipping_planes_fragment:py,clipping_planes_pars_fragment:my,clipping_planes_pars_vertex:gy,clipping_planes_vertex:xy,color_fragment:_y,color_pars_fragment:yy,color_pars_vertex:vy,color_vertex:My,common:Sy,cube_uv_reflection_fragment:by,defaultnormal_vertex:Ey,displacementmap_pars_vertex:Ty,displacementmap_vertex:wy,emissivemap_fragment:Ay,emissivemap_pars_fragment:Ry,colorspace_fragment:Cy,colorspace_pars_fragment:Iy,envmap_fragment:Py,envmap_common_pars_fragment:Ly,envmap_pars_fragment:Ny,envmap_pars_vertex:Dy,envmap_physical_pars_fragment:Xy,envmap_vertex:Fy,fog_vertex:Uy,fog_pars_vertex:Oy,fog_fragment:By,fog_pars_fragment:zy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Hy,lights_lambert_fragment:Gy,lights_lambert_pars_fragment:Vy,lights_pars_begin:Wy,lights_toon_fragment:qy,lights_toon_pars_fragment:Yy,lights_phong_fragment:$y,lights_phong_pars_fragment:Ky,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:jy,lights_fragment_maps:Qy,lights_fragment_end:tv,lightprobes_pars_fragment:ev,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:rv,map_fragment:ov,map_pars_fragment:av,map_particle_fragment:lv,map_particle_pars_fragment:cv,metalnessmap_fragment:hv,metalnessmap_pars_fragment:uv,morphinstance_vertex:fv,morphcolor_vertex:dv,morphnormal_vertex:pv,morphtarget_pars_vertex:mv,morphtarget_vertex:gv,normal_fragment_begin:xv,normal_fragment_maps:_v,normal_pars_fragment:yv,normal_pars_vertex:vv,normal_vertex:Mv,normalmap_pars_fragment:Sv,clearcoat_normal_fragment_begin:bv,clearcoat_normal_fragment_maps:Ev,clearcoat_pars_fragment:Tv,iridescence_pars_fragment:wv,opaque_fragment:Av,packing:Rv,premultiplied_alpha_fragment:Cv,project_vertex:Iv,dithering_fragment:Pv,dithering_pars_fragment:Lv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Dv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Ov,shadowmask_pars_fragment:Bv,skinbase_vertex:zv,skinning_pars_vertex:kv,skinning_vertex:Hv,skinnormal_vertex:Gv,specularmap_fragment:Vv,specularmap_pars_fragment:Wv,tonemapping_fragment:Xv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:$v,uv_pars_fragment:Kv,uv_pars_vertex:Zv,uv_vertex:Jv,worldpos_vertex:jv,background_vert:Qv,background_frag:tM,backgroundCube_vert:eM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:sM,depth_vert:rM,depth_frag:oM,distance_vert:aM,distance_frag:lM,equirect_vert:cM,equirect_frag:hM,linedashed_vert:uM,linedashed_frag:fM,meshbasic_vert:dM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:gM,meshmatcap_vert:xM,meshmatcap_frag:_M,meshnormal_vert:yM,meshnormal_frag:vM,meshphong_vert:MM,meshphong_frag:SM,meshphysical_vert:bM,meshphysical_frag:EM,meshtoon_vert:TM,meshtoon_frag:wM,points_vert:AM,points_frag:RM,shadow_vert:CM,shadow_frag:IM,sprite_vert:PM,sprite_frag:LM},vt={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},_i={basic:{uniforms:cn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:cn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:cn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:cn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:cn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new ut(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:cn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:cn([vt.points,vt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:cn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:cn([vt.common,vt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:cn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:cn([vt.sprite,vt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distance:{uniforms:cn([vt.common,vt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distance_vert,fragmentShader:re.distance_frag},shadow:{uniforms:cn([vt.lights,vt.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};_i.physical={uniforms:cn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};var Yc={r:0,b:0,g:0},NM=new Wt,s0=new Kt;s0.set(-1,0,0,0,1,0,0,0,1);function DM(i,t,e,n,s,r){let o=new ut(0),a=s===!0?0:1,l,c,h=null,u=0,f=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let v=y.backgroundBlurriness>0;E=t.get(E,v)}return E}function p(y){let E=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,E){let v=d(E);v&&(v.isCubeTexture||v.mapping===ya)?(c===void 0&&(c=new Dt(new ln(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:Hs(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(NM.makeRotationFromEuler(E.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(s0),c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==pe,(h!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Dt(new Fe(2,2),new $e({name:"BackgroundMaterial",uniforms:Hs(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,E){y.getRGB(Yc,$u(i)),e.buffers.color.setClear(Yc.r,Yc.g,Yc.b,E,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:x,dispose:g}}function FM(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(P,L,B,N,O){let X=!1,q=u(P,N,B,L);r!==q&&(r=q,c(r.object)),X=d(P,N,B,O),X&&p(P,N,B,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(P,L,B,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function u(P,L,B,N){let O=N.wireframe===!0,X=n[L.id];X===void 0&&(X={},n[L.id]=X);let q=P.isInstancedMesh===!0?P.id:0,st=X[q];st===void 0&&(st={},X[q]=st);let Y=st[B.id];Y===void 0&&(Y={},st[B.id]=Y);let tt=Y[O];return tt===void 0&&(tt=f(l()),Y[O]=tt),tt}function f(P){let L=[],B=[],N=[];for(let O=0;O<e;O++)L[O]=0,B[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:N,object:P,attributes:{},index:null}}function d(P,L,B,N){let O=r.attributes,X=L.attributes,q=0,st=B.getAttributes();for(let Y in st)if(st[Y].location>=0){let z=O[Y],rt=X[Y];if(rt===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),z===void 0||z.attribute!==rt||rt&&z.data!==rt.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function p(P,L,B,N){let O={},X=L.attributes,q=0,st=B.getAttributes();for(let Y in st)if(st[Y].location>=0){let z=X[Y];z===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(z=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(z=P.instanceColor));let rt={};rt.attribute=z,z&&z.data&&(rt.data=z.data),O[Y]=rt,q++}r.attributes=O,r.attributesNum=q,r.index=N}function x(){let P=r.newAttributes;for(let L=0,B=P.length;L<B;L++)P[L]=0}function m(P){g(P,0)}function g(P,L){let B=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;B[P]=1,N[P]===0&&(i.enableVertexAttribArray(P),N[P]=1),O[P]!==L&&(i.vertexAttribDivisor(P,L),O[P]=L)}function y(){let P=r.newAttributes,L=r.enabledAttributes;for(let B=0,N=L.length;B<N;B++)L[B]!==P[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function E(P,L,B,N,O,X,q){q===!0?i.vertexAttribIPointer(P,L,B,O,X):i.vertexAttribPointer(P,L,B,N,O,X)}function v(P,L,B,N){x();let O=N.attributes,X=B.getAttributes(),q=L.defaultAttributeValues;for(let st in X){let Y=X[st];if(Y.location>=0){let tt=O[st];if(tt===void 0&&(st==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),st==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){let z=tt.normalized,rt=tt.itemSize,ot=t.get(tt);if(ot===void 0)continue;let Ot=ot.buffer,zt=ot.type,Jt=ot.bytesPerElement,$=zt===i.INT||zt===i.UNSIGNED_INT||tt.gpuType===lc;if(tt.isInterleavedBufferAttribute){let Q=tt.data,pt=Q.stride,Ut=tt.offset;if(Q.isInstancedInterleavedBuffer){for(let Et=0;Et<Y.locationSize;Et++)g(Y.location+Et,Q.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Et=0;Et<Y.locationSize;Et++)m(Y.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Et=0;Et<Y.locationSize;Et++)E(Y.location+Et,rt/Y.locationSize,zt,z,pt*Jt,(Ut+rt/Y.locationSize*Et)*Jt,$)}else{if(tt.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)g(Y.location+Q,tt.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Q=0;Q<Y.locationSize;Q++)m(Y.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Q=0;Q<Y.locationSize;Q++)E(Y.location+Q,rt/Y.locationSize,zt,z,rt*Jt,rt/Y.locationSize*Q*Jt,$)}}else if(q!==void 0){let z=q[st];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(Y.location,z);break;case 3:i.vertexAttrib3fv(Y.location,z);break;case 4:i.vertexAttrib4fv(Y.location,z);break;default:i.vertexAttrib1fv(Y.location,z)}}}}y()}function b(){T();for(let P in n){let L=n[P];for(let B in L){let N=L[B];for(let O in N){let X=N[O];for(let q in X)h(X[q].object),delete X[q];delete N[O]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let B in L){let N=L[B];for(let O in N){let X=N[O];for(let q in X)h(X[q].object),delete X[q];delete N[O]}}delete n[P.id]}function A(P){for(let L in n){let B=n[L];for(let N in B){let O=B[N];if(O[P.id]===void 0)continue;let X=O[P.id];for(let q in X)h(X[q].object),delete X[q];delete O[P.id]}}}function _(P){for(let L in n){let B=n[L],N=P.isInstancedMesh===!0?P.id:0,O=B[N];if(O!==void 0){for(let X in O){let q=O[X];for(let st in q)h(q[st].object),delete q[st];delete O[X]}delete B[N],Object.keys(B).length===0&&delete n[L]}}}function T(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function UM(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function OM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==In&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===Xe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==yn&&A!==Cn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(It("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&It("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:v,maxSamples:b,samples:S}}function BM(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Tn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=i.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,E=y*4,v=g.clippingState||null;l.value=v,v=h(p,f,E,d);for(let b=0;b!==E;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let E=0,v=d;E!==x;++E,v+=4)o.copy(u[E]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var $r=4,zM=6,kM=20,HM=256,Ra=new Bn,Um=new ut,sf=null,rf=0,of=0,af=!1,GM=new I,Gs=new I,Zr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=GM}=r;sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sf,rf,of),this._renderer.xr.enabled=af,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Xe,format:In,colorSpace:qe,depthBuffer:!1},s=Om(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Om(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=VM(r)),this._blurMaterial=XM(r,t,e),this._ggxMaterial=WM(r,t,e)}return s}_compileMaterial(t){let e=new Dt(new me,t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,n,s,r){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Um),u.toneMapping=ei,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Dt(new ln,new xe({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,g=!0):(m.color.copy(Um),g=!0);for(let E=0;E<6;E++){let v=E%3;v===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):v===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Yr(s,v*b,E>2?b:0,b,b),u.setRenderTarget(s),g&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ss||t.mapping===zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Yr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ra)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:p}=this,x=this._sizeLods[n],m=3*x*(n>p-$r?n-p+$r:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Yr(r,m,g,3*x,2*x),s.setRenderTarget(r),s.render(a,Ra),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Yr(t,m,g,3*x,2*x),s.setRenderTarget(t),s.render(a,Ra)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-$r?s-this._lodMax+$r:0),f=4*(this._cubeSize-h);Yr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Ra)}};function VM(i){let t=[],e=[],n=i,s=i-$r+1+zM;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,p=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let g=0;g<u;g++){let y=g%3*2/3-1,E=g>2?0:-1,v=[y,E,0,y+2/3,E,0,y+2/3,E+1,0,y,E,0,y+2/3,E+1,0,y,E+1,0];p.set(v,d*f*g);for(let b=0;b<f;b++){let S=h[b*2]*2-1,A=h[b*2+1]*2-1;g===0?Gs.set(1,A,S):g===1?Gs.set(-S,1,-A):g===2?Gs.set(-S,A,1):g===3?Gs.set(-1,A,-S):g===4?Gs.set(-S,-1,A):Gs.set(S,A,-1),Gs.toArray(x,(g*f+b)*d)}}let m=new me;m.setAttribute("position",new Ue(p,d)),m.setAttribute("outputDirection",new Ue(x,d)),e.push(new Dt(m,null)),n>$r&&n--}return{lodMeshes:e,sizeLods:t}}function Om(i,t,e){let n=new De(i,t,e);return n.texture.mapping=ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function WM(i,t,e){return new $e({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function XM(i,t,e){return new $e({name:"SphericalGaussianBlur",defines:{SAMPLES:kM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Bm(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function zm(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kc=class extends De{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Go(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:kn});r.uniforms.tEquirect.value=e;let o=new Dt(s,r),a=e.minFilter;return e.minFilter===Rn&&(e.minFilter=Le),new ec(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function qM(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===rc||d===oc)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new Kc(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===rc||d===oc,x=d===ss||d===zs;if(p||x){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new Zr(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new Zr(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===rc?f.mapping=ss:d===oc&&(f.mapping=zs),f}function l(f){let d=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function YM(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ss("WebGLRenderer: "+n+" extension not supported."),s}}}function $M(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(d!==null){let y=d.array;x=d.version;for(let E=0,v=y.length;E<v;E+=3){let b=y[E+0],S=y[E+1],A=y[E+2];f.push(b,S,S,A,A,b)}}else{let y=p.array;x=p.version;for(let E=0,v=y.length/3-1;E<v;E+=3){let b=E+0,S=E+1,A=E+2;f.push(b,S,S,A,A,b)}}let m=new(p.count>=65535?Fo:Do)(f,1);m.version=x;let g=r.get(u);g&&t.remove(g),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function KM(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ZM(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function JM(i,t,e){let n=new WeakMap,s=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let T=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;d===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let v=a.attributes.position.count*E,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*b*4*u),A=new No(S,v,b,u);A.type=Cn,A.needsUpdate=!0;let _=E*4;for(let R=0;R<u;R++){let P=m[R],L=g[R],B=y[R],N=v*b*4*R;for(let O=0;O<P.count;O++){let X=O*_;d===!0&&(s.fromBufferAttribute(P,O),S[N+X+0]=s.x,S[N+X+1]=s.y,S[N+X+2]=s.z,S[N+X+3]=0),p===!0&&(s.fromBufferAttribute(L,O),S[N+X+4]=s.x,S[N+X+5]=s.y,S[N+X+6]=s.z,S[N+X+7]=0),x===!0&&(s.fromBufferAttribute(B,O),S[N+X+8]=s.x,S[N+X+9]=s.y,S[N+X+10]=s.z,S[N+X+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new J(v,b)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function jM(i,t,e,n,s){let r=new WeakMap;function o(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var QM={[da]:"LINEAR_TONE_MAPPING",[pa]:"REINHARD_TONE_MAPPING",[ma]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[xa]:"AGX_TONE_MAPPING",[_a]:"NEUTRAL_TONE_MAPPING",[ga]:"CUSTOM_TONE_MAPPING"};function tS(i,t,e,n,s,r){let o=new De(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new me;c.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new $t([0,2,0,0,2,0],2));let h=new Ur({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Dt(c,h),f=new Bn(-1,1,1,-1,0,1),d=null,p=null,x=!1,m,g=null,y=[],E=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),l!==null&&l.setSize(v,b);for(let S=0;S<y.length;S++){let A=y[S];A.setSize&&A.setSize(v,b)}},this.setEffects=function(v){y=v,E=y.length>0&&y[0].isRenderPass===!0;let b=o.width,S=o.height;y.length>0&&a===null&&(a=new De(b,S,{type:Xe,depthBuffer:!1,stencilBuffer:!1}),l=new De(b,S,{type:Xe,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<y.length;A++){let _=y[A];_.setSize&&_.setSize(b,S)}},this.begin=function(v,b){if(x||v.toneMapping===ei&&y.length===0)return!1;if(g=b,b!==null){let S=b.width,A=b.height;(o.width!==S||o.height!==A)&&this.setSize(S,A)}return E===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=ei,!0},this.hasRenderPass=function(){return E},this.end=function(v,b){v.toneMapping=m,x=!0;let S=o,A=a;for(let _=0;_<y.length;_++){let T=y[_];T.enabled!==!1&&(T.render(v,A,S,b),T.needsSwap!==!1&&(S=A,A=A===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,h.defines={},Qt.getTransfer(d)===pe&&(h.defines.SRGB_TRANSFER="");let _=QM[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(g),v.render(u,f),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var r0=new Ye,hf=new ts(1,1),o0=new No,a0=new Fl,l0=new Go,km=[],Hm=[],Gm=new Float32Array(16),Vm=new Float32Array(9),Wm=new Float32Array(4);function Jr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=km[s];if(r===void 0&&(r=new Float32Array(s),km[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jc(i,t){let e=Hm[t];e===void 0&&(e=new Int32Array(t),Hm[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function eS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function nS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function iS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function sS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function rS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Wm.set(n),i.uniformMatrix2fv(this.addr,!1,Wm),Je(e,n)}}function oS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Vm.set(n),i.uniformMatrix3fv(this.addr,!1,Vm),Je(e,n)}}function aS(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;Gm.set(n),i.uniformMatrix4fv(this.addr,!1,Gm),Je(e,n)}}function lS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function cS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function hS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function uS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function fS(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function pS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function mS(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function gS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(hf.compareFunction=e.isReversedDepthBuffer()?qc:Xc,r=hf):r=r0,e.setTexture2D(t||r,s)}function xS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||a0,s)}function _S(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||l0,s)}function yS(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||o0,s)}function vS(i){switch(i){case 5126:return eS;case 35664:return nS;case 35665:return iS;case 35666:return sS;case 35674:return rS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return hS;case 35669:case 35673:return uS;case 5125:return fS;case 36294:return dS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return xS;case 35680:case 36300:case 36308:case 36293:return _S;case 36289:case 36303:case 36311:case 36292:return yS}}function MS(i,t){i.uniform1fv(this.addr,t)}function SS(i,t){let e=Jr(t,this.size,2);i.uniform2fv(this.addr,e)}function bS(i,t){let e=Jr(t,this.size,3);i.uniform3fv(this.addr,e)}function ES(i,t){let e=Jr(t,this.size,4);i.uniform4fv(this.addr,e)}function TS(i,t){let e=Jr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wS(i,t){let e=Jr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function AS(i,t){let e=Jr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function RS(i,t){i.uniform1iv(this.addr,t)}function CS(i,t){i.uniform2iv(this.addr,t)}function IS(i,t){i.uniform3iv(this.addr,t)}function PS(i,t){i.uniform4iv(this.addr,t)}function LS(i,t){i.uniform1uiv(this.addr,t)}function NS(i,t){i.uniform2uiv(this.addr,t)}function DS(i,t){i.uniform3uiv(this.addr,t)}function FS(i,t){i.uniform4uiv(this.addr,t)}function US(i,t,e){let n=this.cache,s=t.length,r=jc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=hf:o=r0;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function OS(i,t,e){let n=this.cache,s=t.length,r=jc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||a0,r[o])}function BS(i,t,e){let n=this.cache,s=t.length,r=jc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||l0,r[o])}function zS(i,t,e){let n=this.cache,s=t.length,r=jc(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||o0,r[o])}function kS(i){switch(i){case 5126:return MS;case 35664:return SS;case 35665:return bS;case 35666:return ES;case 35674:return TS;case 35675:return wS;case 35676:return AS;case 5124:case 35670:return RS;case 35667:case 35671:return CS;case 35668:case 35672:return IS;case 35669:case 35673:return PS;case 5125:return LS;case 36294:return NS;case 36295:return DS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return OS;case 35680:case 36300:case 36308:case 36293:return BS;case 36289:case 36303:case 36311:case 36292:return zS}}var uf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vS(e.type)}},ff=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kS(e.type)}},df=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},lf=/(\w+)(\])?(\[|\.)?/g;function Xm(i,t){i.seq.push(t),i.map[t.id]=t}function HS(i,t,e){let n=i.name,s=n.length;for(lf.lastIndex=0;;){let r=lf.exec(n),o=lf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xm(e,c===void 0?new uf(a,i,t):new ff(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new df(a),Xm(e,u)),e=u}}}var Kr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);HS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function qm(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var GS=37297,VS=0;function WS(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Ym=new Kt;function XS(i){Qt._getMatrix(Ym,Qt.workingColorSpace,i);let t=`mat3( ${Ym.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Po:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return It("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $m(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+WS(i.getShaderSource(t),a)}else return r}function qS(i,t){let e=XS(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var YS={[da]:"Linear",[pa]:"Reinhard",[ma]:"Cineon",[Bs]:"ACESFilmic",[xa]:"AgX",[_a]:"Neutral",[ga]:"Custom"};function $S(i,t){let e=YS[t];return e===void 0?(It("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $c=new I;function KS(){Qt.getLuminanceCoefficients($c);let i=$c.x.toFixed(4),t=$c.y.toFixed(4),e=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ia).join(`
`)}function JS(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jS(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ia(i){return i!==""}function Km(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zm(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(i){return i.replace(QS,eb)}var tb=new Map;function eb(i,t){let e=re[t];if(e===void 0){let n=tb.get(t);if(n!==void 0)e=re[n],It('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return pf(e)}var nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(i){return i.replace(nb,ib)}function ib(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function jm(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var sb={[Us]:"SHADOWMAP_TYPE_PCF",[zr]:"SHADOWMAP_TYPE_VSM"};function rb(i){return sb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ob={[ss]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[ya]:"ENVMAP_TYPE_CUBE_UV"};function ab(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ob[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var lb={[zs]:"ENVMAP_MODE_REFRACTION"};function cb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hb={[sc]:"ENVMAP_BLENDING_MULTIPLY",[um]:"ENVMAP_BLENDING_MIX",[fm]:"ENVMAP_BLENDING_ADD"};function ub(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":hb[i.combine]||"ENVMAP_BLENDING_NONE"}function fb(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function db(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=rb(e),c=ab(e),h=cb(e),u=ub(e),f=fb(e),d=ZS(e),p=JS(r),x=s.createProgram(),m,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ia).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ia).join(`
`),g.length>0&&(g+=`
`)):(m=[jm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ia).join(`
`),g=[jm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?re.tonemapping_pars_fragment:"",e.toneMapping!==ei?$S("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,qS("linearToOutputTexel",e.outputColorSpace),KS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ia).join(`
`)),o=pf(o),o=Km(o,e),o=Zm(o,e),a=pf(a),a=Km(a,e),a=Zm(a,e),o=Jm(o),a=Jm(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Xu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let E=y+m+o,v=y+g+a,b=qm(s,s.VERTEX_SHADER,E),S=qm(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(b)||"",N=s.getShaderInfoLog(S)||"",O=L.trim(),X=B.trim(),q=N.trim(),st=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,S);else{let tt=$m(s,b,"vertex"),z=$m(s,S,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+tt+`
`+z)}else O!==""?It("WebGLProgram: Program Info Log:",O):(X===""||q==="")&&(Y=!1);Y&&(P.diagnostics={runnable:st,programLog:O,vertexShader:{log:X,prefix:m},fragmentShader:{log:q,prefix:g}})}s.deleteShader(b),s.deleteShader(S),_=new Kr(s,x),T=jS(s,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,GS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=VS++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=S,this}var pb=0,mf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gf(t),e.set(t,n)),n}},gf=class{constructor(t){this.id=pb++,this.code=t,this.usedTimes=0}};function mb(i){return i===os||i===Ea||i===Ta}function gb(i,t,e,n,s,r){let o=new Tr,a=new mf,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,R,P,L,B){let N=P.fog,O=L.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||X,q),Y=st&&st.mapping===ya?st.image.height:null,tt=d[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&It("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,rt=z!==void 0?z.length:0,ot=0;O.morphAttributes.position!==void 0&&(ot=1),O.morphAttributes.normal!==void 0&&(ot=2),O.morphAttributes.color!==void 0&&(ot=3);let Ot,zt,Jt,$;if(tt){let Ce=_i[tt];Ot=Ce.vertexShader,zt=Ce.fragmentShader}else{Ot=_.vertexShader,zt=_.fragmentShader;let Ce=a.getVertexShaderStage(_),ve=a.getFragmentShaderStage(_);a.update(_,Ce,ve),Jt=Ce.id,$=ve.id}let Q=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),Ut=L.isInstancedMesh===!0,Et=L.isBatchedMesh===!0,qt=!!_.map,Se=!!_.matcap,nt=!!st,at=!!_.aoMap,lt=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,dt=!!_.normalMap,Ht=!!_.displacementMap,Bt=!!_.emissiveMap,Yt=!!_.metalnessMap,Zt=!!_.roughnessMap,D=_.anisotropy>0,ye=_.clearcoat>0,ae=_.dispersion>0,C=_.retroreflectivity>0,M=_.iridescence>0,k=_.sheen>0,V=_.transmission>0,K=D&&!!_.anisotropyMap,ht=ye&&!!_.clearcoatMap,ft=ye&&!!_.clearcoatNormalMap,Z=ye&&!!_.clearcoatRoughnessMap,et=M&&!!_.iridescenceMap,mt=M&&!!_.iridescenceThicknessMap,Lt=k&&!!_.sheenColorMap,yt=k&&!!_.sheenRoughnessMap,gt=!!_.specularMap,Nt=!!_.specularColorMap,Gt=!!_.specularIntensityMap,jt=V&&!!_.transmissionMap,U=V&&!!_.thicknessMap,xt=!!_.gradientMap,j=!!_.alphaMap,_t=_.alphaTest>0,bt=!!_.alphaHash,it=!!_.extensions,Ft=ei;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let Ct={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:Ot,fragmentShader:zt,defines:_.defines,customVertexShaderID:Jt,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Et,batchingColor:Et&&L._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&L.instanceColor!==null,instancingMorph:Ut&&L.morphTexture!==null,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qt,matcap:Se,envMap:nt,envMapMode:nt&&st.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:lt,bumpMap:ct,normalMap:dt,displacementMap:Ht,emissiveMap:Bt,normalMapObjectSpace:dt&&_.normalMapType===gm,normalMapTangentSpace:dt&&_.normalMapType===Aa,packedNormalMap:dt&&_.normalMapType===Aa&&mb(_.normalMap.format),metalnessMap:Yt,roughnessMap:Zt,anisotropy:D,anisotropyMap:K,clearcoat:ye,clearcoatMap:ht,clearcoatNormalMap:ft,clearcoatRoughnessMap:Z,dispersion:ae,retroreflection:C,iridescence:M,iridescenceMap:et,iridescenceThicknessMap:mt,sheen:k,sheenColorMap:Lt,sheenRoughnessMap:yt,specularMap:gt,specularColorMap:Nt,specularIntensityMap:Gt,transmission:V,transmissionMap:jt,thicknessMap:U,gradientMap:xt,opaque:_.transparent===!1&&_.blending===kr&&_.alphaToCoverage===!1,alphaMap:j,alphaTest:_t,alphaHash:bt,combine:_.combine,mapUv:qt&&p(_.map.channel),aoMapUv:at&&p(_.aoMap.channel),lightMapUv:lt&&p(_.lightMap.channel),bumpMapUv:ct&&p(_.bumpMap.channel),normalMapUv:dt&&p(_.normalMap.channel),displacementMapUv:Ht&&p(_.displacementMap.channel),emissiveMapUv:Bt&&p(_.emissiveMap.channel),metalnessMapUv:Yt&&p(_.metalnessMap.channel),roughnessMapUv:Zt&&p(_.roughnessMap.channel),anisotropyMapUv:K&&p(_.anisotropyMap.channel),clearcoatMapUv:ht&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:yt&&p(_.sheenRoughnessMap.channel),specularMapUv:gt&&p(_.specularMap.channel),specularColorMapUv:Nt&&p(_.specularColorMap.channel),specularIntensityMapUv:Gt&&p(_.specularIntensityMap.channel),transmissionMapUv:jt&&p(_.transmissionMap.channel),thicknessMapUv:U&&p(_.thicknessMap.channel),alphaMapUv:j&&p(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(dt||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!O.attributes.uv&&(qt||j),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:pt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:ot,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:qt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:Bt&&_.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ke,flipSided:_.side===tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(g(T,_),y(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function y(_,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){let T=d[_.type],R;if(T){let P=_i[T];R=qr.clone(P.uniforms)}else R=_.uniforms;return R}function v(_,T){let R=h.get(T);return R!==void 0?++R.usedTimes:(R=new db(i,T,_,s),c.push(R),h.set(T,R)),R}function b(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){a.remove(_)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:A}}function xb(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _b(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function t0(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,x,m,g){let y=i[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},i[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=x,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,d,p,x,m,g,y){y.reversedDepth===!0&&(m=-m);let E=a(f,d,p,x,m,g);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(f,d,p,x,m,g){let y=a(f,d,p,x,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):e.unshift(y)}function h(f,d){e.length>1&&e.sort(f||_b),n.length>1&&n.sort(d||Qm),s.length>1&&s.sort(d||Qm)}function u(){for(let f=t,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function yb(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new t0,i.set(n,[o])):s>=r.length?(o=new t0,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new ut};break;case"SpotLight":e={position:new I,direction:new I,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Mb(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Sb=0;function bb(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eb(i){let t=new vb,e=Mb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Wt,o=new Wt;function a(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,x=0,m=0,g=0,y=0,E=0,v=0,b=0,S=0,A=0,_=0,T=0,R=0;c.sort(bb);for(let L=0,B=c.length;L<B;L++){let N=c[L],O=N.color,X=N.intensity,q=N.distance,st=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===os?st=N.shadow.map.texture:st=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=O.r*X,u+=O.g*X,f+=O.b*X;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],X);R++}else if(N.isSunLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,z=e.get(N);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[p]=z,n.sunShadowMap[p]=st;let rt=tt.getViewportCount();for(let ot=0;ot<rt;ot++)n.sunShadowMatrix[x+ot]=tt.getMatrix(ot),n.sunShadowCascade[x+ot]=tt._cascadeData[ot];x+=rt,p++}n.sun[d]=Y,d++}else if(N.isDirectionalLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,z=e.get(N);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=st,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=Y,m++}else if(N.isSpotLight){let Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(O).multiplyScalar(X),Y.distance=q,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[y]=Y;let tt=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,tt.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[y]=tt.matrix,N.castShadow){let z=e.get(N);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,n.spotShadow[y]=z,n.spotShadowMap[y]=st,A++}y++}else if(N.isRectAreaLight){let Y=t.get(N);Y.color.copy(O).multiplyScalar(X),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[E]=Y,E++}else if(N.isPointLight){let Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){let tt=N.shadow,z=e.get(N);z.shadowIntensity=tt.intensity,z.shadowBias=tt.bias,z.shadowNormalBias=tt.normalBias,z.shadowRadius=tt.radius,z.shadowMapSize=tt.mapSize,z.shadowCameraNear=tt.camera.near,z.shadowCameraFar=tt.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=st,n.pointShadowMatrix[g]=N.shadow.matrix,S++}n.point[g]=Y,g++}else if(N.isHemisphereLight){let Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(X),Y.groundColor.copy(N.groundColor).multiplyScalar(X),n.hemi[v]=Y,v++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==g||P.spotLength!==y||P.rectAreaLength!==E||P.hemiLength!==v||P.numSunShadows!==p||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==A||P.numSpotMaps!==_||P.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=E,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.sunLength=d,P.directionalLength=m,P.pointLength=g,P.spotLength=y,P.rectAreaLength=E,P.hemiLength=v,P.numSunShadows=p,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=A,P.numSpotMaps=_,P.numLightProbes=R,n.version=Sb++)}function l(c,h){let u=0,f=0,d=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let y=0,E=c.length;y<E;y++){let v=c[y];if(v.isSunLight){let b=n.sun[u];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(v.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function e0(i){let t=new Eb(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Tb(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new e0(i),t.set(s,[a])):r>=o.length?(a=new e0(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ab=`uniform sampler2D shadow_pass;
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
}`,Rb=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Cb=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],n0=new Wt,Ca=new I,cf=new I;function Ib(i,t,e){let n=new Ir,s=new J,r=new J,o=new de,a=new ql,l=new Yl,c={},h=e.maxTextureSize,u={[zn]:tn,[tn]:zn,[Ke]:Ke},f=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:wb,fragmentShader:Ab}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new me;p.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Dt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Us;let g=this.type;this.render=function(S,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===qp&&(It("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Us);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(kn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=g!==this.type;B&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=S.length;N<O;N++){let X=S[N],q=X.shadow;if(q===void 0){It("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let st=q.getFrameExtents();s.multiply(st),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,q.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Y,q.map===null||B===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===zr){if(X.isPointLight){It("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new De(s.x,s.y,{format:os,type:Xe,minFilter:Le,magFilter:Le,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new ts(s.x,s.y,Cn),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=fi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ze,q.map.depthTexture.magFilter=ze}else X.isPointLight?(q.map=new Kc(s.x),q.map.depthTexture=new Bl(s.x,ni)):(q.map=new De(s.x,s.y),q.map.depthTexture=new ts(s.x,s.y,ni)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=fi,this.type===Us?(q.map.depthTexture.compareFunction=Y?qc:Xc,q.map.depthTexture.minFilter=Le,q.map.depthTexture.magFilter=Le):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=ze,q.map.depthTexture.magFilter=ze);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let tt=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();X.isPointLight!==!0&&q.updateMatrices(X,_);for(let z=0;z<tt;z++){let rt=q.getCamera(z);if(X.isPointLight){let ot=q.camera,Ot=q.matrix,zt=X.distance||ot.far;zt!==ot.far&&(ot.far=zt,ot.updateProjectionMatrix()),Ca.setFromMatrixPosition(X.matrixWorld),ot.position.copy(Ca),cf.copy(ot.position),cf.add(Rb[z]),ot.up.copy(Cb[z]),ot.lookAt(cf),ot.updateMatrixWorld(),Ot.makeTranslation(-Ca.x,-Ca.y,-Ca.z),n0.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),q._frustum.setFromProjectionMatrix(n0,ot.coordinateSystem,ot.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,z),i.clear();else{z===0&&(i.setRenderTarget(q.map),i.clear());let ot=q.getViewport(z);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),L.viewport(o)}n=q.getFrustum(z),v(A,_,rt,X,this.type)}q.isPointLightShadow!==!0&&this.type===zr&&y(q,_),q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(T,R,P)};function y(S,A){let _=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new De(s.x,s.y,{format:os,type:Xe}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,_,f,x,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,_,d,x,null)}function E(S,A,_,T){let R=null,P=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=R.uuid,B=A.uuid,N=c[L];N===void 0&&(N={},c[L]=N);let O=N[B];O===void 0&&(O=R.clone(),N[B]=O,A.addEventListener("dispose",b)),R=O}if(R.visible=A.visible,R.wireframe=A.wireframe,T===zr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=i.properties.get(R);L.light=_}return R}function v(S,A,_,T,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===zr)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let B=t.update(S),N=S.material;if(Array.isArray(N)){let O=B.groups;for(let X=0,q=O.length;X<q;X++){let st=O[X],Y=N[st.materialIndex];if(Y&&Y.visible){let tt=E(S,Y,T,R);S.onBeforeShadow(i,S,A,_,B,tt,st),i.renderBufferDirect(_,null,B,tt,S,st),S.onAfterShadow(i,S,A,_,B,tt,st)}}}else if(N.visible){let O=E(S,N,T,R);S.onBeforeShadow(i,S,A,_,B,O,null),i.renderBufferDirect(_,null,B,O,S,null),S.onAfterShadow(i,S,A,_,B,O,null)}}let L=S.children;for(let B=0,N=L.length;B<N;B++)v(L[B],A,_,T,R)}function b(S){S.target.removeEventListener("dispose",b);for(let _ in c){let T=c[_],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Pb(i,t){function e(){let U=!1,xt=new de,j=null,_t=new de(0,0,0,0);return{setMask:function(bt){j!==bt&&!U&&(i.colorMask(bt,bt,bt,bt),j=bt)},setLocked:function(bt){U=bt},setClear:function(bt,it,Ft,Ct,Ce){Ce===!0&&(bt*=Ct,it*=Ct,Ft*=Ct),xt.set(bt,it,Ft,Ct),_t.equals(xt)===!1&&(i.clearColor(bt,it,Ft,Ct),_t.copy(xt))},reset:function(){U=!1,j=null,_t.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,j=null,_t=null,bt=null;return{setReversed:function(it){if(xt!==it){let Ft=t.get("EXT_clip_control");it?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=it;let Ct=bt;bt=null,this.setClear(Ct)}},getReversed:function(){return xt},setTest:function(it){it?Q(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(it){j!==it&&!U&&(i.depthMask(it),j=it)},setFunc:function(it){if(xt&&(it=Am[it]),_t!==it){switch(it){case wl:i.depthFunc(i.NEVER);break;case Al:i.depthFunc(i.ALWAYS);break;case Rl:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Cl:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Pl:i.depthFunc(i.GREATER);break;case Ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=it}},setLocked:function(it){U=it},setClear:function(it){bt!==it&&(bt=it,xt&&(it=1-it),i.clearDepth(it))},reset:function(){U=!1,j=null,_t=null,bt=null,xt=!1}}}function s(){let U=!1,xt=null,j=null,_t=null,bt=null,it=null,Ft=null,Ct=null,Ce=null;return{setTest:function(ve){U||(ve?Q(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ve){xt!==ve&&!U&&(i.stencilMask(ve),xt=ve)},setFunc:function(ve,$n,ai){(j!==ve||_t!==$n||bt!==ai)&&(i.stencilFunc(ve,$n,ai),j=ve,_t=$n,bt=ai)},setOp:function(ve,$n,ai){(it!==ve||Ft!==$n||Ct!==ai)&&(i.stencilOp(ve,$n,ai),it=ve,Ft=$n,Ct=ai)},setLocked:function(ve){U=ve},setClear:function(ve){Ce!==ve&&(i.clearStencil(ve),Ce=ve)},reset:function(){U=!1,xt=null,j=null,_t=null,bt=null,it=null,Ft=null,Ct=null,Ce=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,E=null,v=null,b=null,S=null,A=null,_=new ut(0,0,0),T=0,R=!1,P=null,L=null,B=null,N=null,O=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,st=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),q=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),q=st>=2);let tt=null,z={},rt=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),Ot=new de().fromArray(rt),zt=new de().fromArray(ot);function Jt(U,xt,j,_t){let bt=new Uint8Array(4),it=i.createTexture();i.bindTexture(U,it),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<j;Ft++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(xt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return it}let $={};$[i.TEXTURE_2D]=Jt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=Jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=Jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=Jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(yr),ct(!1),dt(Pu),Q(i.CULL_FACE),at(kn);function Q(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function pt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ut(U,xt){return f[U]!==xt?(i.bindFramebuffer(U,xt),f[U]=xt,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xt),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Et(U,xt){let j=p,_t=!1;if(U){j=d.get(xt),j===void 0&&(j=[],d.set(xt,j));let bt=U.textures;if(j.length!==bt.length||j[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ft=bt.length;it<Ft;it++)j[it]=i.COLOR_ATTACHMENT0+it;j.length=bt.length,_t=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,_t=!0);_t&&i.drawBuffers(j)}function qt(U){return x!==U?(i.useProgram(U),x=U,!0):!1}let Se={[Os]:i.FUNC_ADD,[$p]:i.FUNC_SUBTRACT,[Kp]:i.FUNC_REVERSE_SUBTRACT};Se[Zp]=i.MIN,Se[Jp]=i.MAX;let nt={[jp]:i.ZERO,[Qp]:i.ONE,[tm]:i.SRC_COLOR,[Du]:i.SRC_ALPHA,[om]:i.SRC_ALPHA_SATURATE,[sm]:i.DST_COLOR,[nm]:i.DST_ALPHA,[em]:i.ONE_MINUS_SRC_COLOR,[Fu]:i.ONE_MINUS_SRC_ALPHA,[rm]:i.ONE_MINUS_DST_COLOR,[im]:i.ONE_MINUS_DST_ALPHA,[am]:i.CONSTANT_COLOR,[lm]:i.ONE_MINUS_CONSTANT_COLOR,[cm]:i.CONSTANT_ALPHA,[hm]:i.ONE_MINUS_CONSTANT_ALPHA};function at(U,xt,j,_t,bt,it,Ft,Ct,Ce,ve){if(U===kn){m===!0&&(pt(i.BLEND),m=!1);return}if(m===!1&&(Q(i.BLEND),m=!0),U!==Yp){if(U!==g||ve!==R){if((y!==Os||b!==Os)&&(i.blendEquation(i.FUNC_ADD),y=Os,b=Os),ve)switch(U){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lu:i.blendFunc(i.ONE,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",U);break}else switch(U){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nu:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fa:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",U);break}E=null,v=null,S=null,A=null,_.set(0,0,0),T=0,g=U,R=ve}return}bt=bt||xt,it=it||j,Ft=Ft||_t,(xt!==y||bt!==b)&&(i.blendEquationSeparate(Se[xt],Se[bt]),y=xt,b=bt),(j!==E||_t!==v||it!==S||Ft!==A)&&(i.blendFuncSeparate(nt[j],nt[_t],nt[it],nt[Ft]),E=j,v=_t,S=it,A=Ft),(Ct.equals(_)===!1||Ce!==T)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Ce),_.copy(Ct),T=Ce),g=U,R=!1}function lt(U,xt){U.side===Ke?pt(i.CULL_FACE):Q(i.CULL_FACE);let j=U.side===tn;xt&&(j=!j),ct(j),U.blending===kr&&U.transparent===!1?at(kn):at(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let _t=U.stencilWrite;a.setTest(_t),_t&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Bt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function dt(U){U!==Wp?(Q(i.CULL_FACE),U!==L&&(U===Pu?i.cullFace(i.BACK):U===Xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),L=U}function Ht(U){U!==B&&(q&&i.lineWidth(U),B=U)}function Bt(U,xt,j){U?(Q(i.POLYGON_OFFSET_FILL),(N!==xt||O!==j)&&(N=xt,O=j,o.getReversed()&&(xt=-xt),i.polygonOffset(xt,j))):pt(i.POLYGON_OFFSET_FILL)}function Yt(U){U?Q(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function Zt(U){U===void 0&&(U=i.TEXTURE0+X-1),tt!==U&&(i.activeTexture(U),tt=U)}function D(U,xt,j){j===void 0&&(tt===null?j=i.TEXTURE0+X-1:j=tt);let _t=z[j];_t===void 0&&(_t={type:void 0,texture:void 0},z[j]=_t),(_t.type!==U||_t.texture!==xt)&&(tt!==j&&(i.activeTexture(j),tt=j),i.bindTexture(U,xt||$[U]),_t.type=U,_t.texture=xt)}function ye(){let U=z[tt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ae(){try{i.compressedTexImage2D(...arguments)}catch(U){Vt("WebGLState:",U)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(U){Vt("WebGLState:",U)}}function M(){try{i.texSubImage2D(...arguments)}catch(U){Vt("WebGLState:",U)}}function k(){try{i.texSubImage3D(...arguments)}catch(U){Vt("WebGLState:",U)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Vt("WebGLState:",U)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Vt("WebGLState:",U)}}function ht(){try{i.texStorage2D(...arguments)}catch(U){Vt("WebGLState:",U)}}function ft(){try{i.texStorage3D(...arguments)}catch(U){Vt("WebGLState:",U)}}function Z(){try{i.texImage2D(...arguments)}catch(U){Vt("WebGLState:",U)}}function et(){try{i.texImage3D(...arguments)}catch(U){Vt("WebGLState:",U)}}function mt(U){return u[U]!==void 0?u[U]:i.getParameter(U)}function Lt(U,xt){u[U]!==xt&&(i.pixelStorei(U,xt),u[U]=xt)}function yt(U){Ot.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Ot.copy(U))}function gt(U){zt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),zt.copy(U))}function Nt(U,xt){let j=c.get(xt);j===void 0&&(j=new WeakMap,c.set(xt,j));let _t=j.get(U);_t===void 0&&(_t=i.getUniformBlockIndex(xt,U.name),j.set(U,_t))}function Gt(U,xt){let _t=c.get(xt).get(U);l.get(xt)!==_t&&(i.uniformBlockBinding(xt,_t,U.__bindingPointIndex),l.set(xt,_t))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},tt=null,z={},f={},d=new WeakMap,p=[],x=null,m=!1,g=null,y=null,E=null,v=null,b=null,S=null,A=null,_=new ut(0,0,0),T=0,R=!1,P=null,L=null,B=null,N=null,O=null,Ot.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Q,disable:pt,bindFramebuffer:Ut,drawBuffers:Et,useProgram:qt,setBlending:at,setMaterial:lt,setFlipSided:ct,setCullFace:dt,setLineWidth:Ht,setPolygonOffset:Bt,setScissorTest:Yt,activeTexture:Zt,bindTexture:D,unbindTexture:ye,compressedTexImage2D:ae,compressedTexImage3D:C,texImage2D:Z,texImage3D:et,pixelStorei:Lt,getParameter:mt,updateUBOMapping:Nt,uniformBlockBinding:Gt,texStorage2D:ht,texStorage3D:ft,texSubImage2D:M,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:yt,viewport:gt,reset:jt}}function Lb(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap,u=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,M){return p?new OffscreenCanvas(C,M):Sr("canvas")}function m(C,M,k){let V=1,K=ae(C);if((K.width>k||K.height>k)&&(V=k/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ht=Math.floor(V*K.width),ft=Math.floor(V*K.height);f===void 0&&(f=x(ht,ft));let Z=M?x(ht,ft):f;return Z.width=ht,Z.height=ft,Z.getContext("2d").drawImage(C,0,0,ht,ft),It("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ht+"x"+ft+")."),Z}else return"data"in C&&It("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),C;return C}function g(C){return C.generateMipmaps}function y(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,M,k,V,K,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];It("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;V&&(ft=t.get("EXT_texture_norm16"),ft||It("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===i.RED&&(k===i.FLOAT&&(Z=i.R32F),k===i.HALF_FLOAT&&(Z=i.R16F),k===i.UNSIGNED_BYTE&&(Z=i.R8),k===i.UNSIGNED_SHORT&&ft&&(Z=ft.R16_EXT),k===i.SHORT&&ft&&(Z=ft.R16_SNORM_EXT)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.R8UI),k===i.UNSIGNED_SHORT&&(Z=i.R16UI),k===i.UNSIGNED_INT&&(Z=i.R32UI),k===i.BYTE&&(Z=i.R8I),k===i.SHORT&&(Z=i.R16I),k===i.INT&&(Z=i.R32I)),M===i.RG&&(k===i.FLOAT&&(Z=i.RG32F),k===i.HALF_FLOAT&&(Z=i.RG16F),k===i.UNSIGNED_BYTE&&(Z=i.RG8),k===i.UNSIGNED_SHORT&&ft&&(Z=ft.RG16_EXT),k===i.SHORT&&ft&&(Z=ft.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RG8UI),k===i.UNSIGNED_SHORT&&(Z=i.RG16UI),k===i.UNSIGNED_INT&&(Z=i.RG32UI),k===i.BYTE&&(Z=i.RG8I),k===i.SHORT&&(Z=i.RG16I),k===i.INT&&(Z=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),k===i.UNSIGNED_INT&&(Z=i.RGB32UI),k===i.BYTE&&(Z=i.RGB8I),k===i.SHORT&&(Z=i.RGB16I),k===i.INT&&(Z=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),k===i.UNSIGNED_INT&&(Z=i.RGBA32UI),k===i.BYTE&&(Z=i.RGBA8I),k===i.SHORT&&(Z=i.RGBA16I),k===i.INT&&(Z=i.RGBA32I)),M===i.RGB&&(k===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGB16_EXT),k===i.SHORT&&ft&&(Z=ft.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),M===i.RGBA){let et=ht?Po:Qt.getTransfer(K);k===i.FLOAT&&(Z=i.RGBA32F),k===i.HALF_FLOAT&&(Z=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Z=et===pe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ft&&(Z=ft.RGBA16_EXT),k===i.SHORT&&ft&&(Z=ft.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function b(C,M){let k;return C?M===null||M===ni||M===Vr?k=i.DEPTH24_STENCIL8:M===Cn?k=i.DEPTH32F_STENCIL8:M===Gr&&(k=i.DEPTH24_STENCIL8,It("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ni||M===Vr?k=i.DEPTH_COMPONENT24:M===Cn?k=i.DEPTH_COMPONENT32F:M===Gr&&(k=i.DEPTH_COMPONENT16),k}function S(C,M){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==Le?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){let M=C.target;M.removeEventListener("dispose",A),T(M),M.isVideoTexture&&h.delete(M),M.isHTMLTexture&&u.delete(M)}function _(C){let M=C.target;M.removeEventListener("dispose",_),P(M)}function T(C){let M=n.get(C);if(M.__webglInit===void 0)return;let k=C.source,V=d.get(k);if(V){let K=V[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(C),Object.keys(V).length===0&&d.delete(k)}n.remove(C)}function R(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let k=C.source,V=d.get(k);delete V[M.__cacheKey],o.memory.textures--}function P(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let K=0;K<M.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[V][K]);else i.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)i.deleteFramebuffer(M.__webglFramebuffer[V]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=C.textures;for(let V=0,K=k.length;V<K;V++){let ht=n.get(k[V]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),o.memory.textures--),n.remove(k[V])}n.remove(C)}let L=0;function B(){L=0}function N(){return L}function O(C){L=C}function X(){let C=L;return C>=s.maxTextures&&It("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function q(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function st(C,M){let k=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let V=C.image;if(V===null)It("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)It("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(k,C,M);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function Y(C,M){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){pt(k,C,M);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function tt(C,M){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){pt(k,C,M);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function z(C,M){let k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Ut(k,C,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}let rt={[On]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[vr]:i.MIRRORED_REPEAT},ot={[ze]:i.NEAREST,[ac]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},Ot={[_m]:i.NEVER,[bm]:i.ALWAYS,[ym]:i.LESS,[Xc]:i.LEQUAL,[vm]:i.EQUAL,[qc]:i.GEQUAL,[Mm]:i.GREATER,[Sm]:i.NOTEQUAL};function zt(C,M){if(M.type===Cn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Le||M.magFilter===Hr||M.magFilter===ks||M.magFilter===Rn||M.minFilter===Le||M.minFilter===Hr||M.minFilter===ks||M.minFilter===Rn)&&It("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,rt[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,rt[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,rt[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ot[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ze||M.minFilter!==ks&&M.minFilter!==Rn||M.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Jt(C,M){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));let V=M.source,K=d.get(V);K===void 0&&(K={},d.set(V,K));let ht=q(M);if(ht!==C.__cacheKey){K[ht]===void 0&&(K[ht]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),K[ht].usedTimes++;let ft=K[C.__cacheKey];ft!==void 0&&(K[C.__cacheKey].usedTimes--,ft.usedTimes===0&&R(M)),C.__cacheKey=ht,C.__webglTexture=K[ht].texture}return k}function $(C,M,k){return Math.floor(Math.floor(C/k)/M)}function Q(C,M,k,V){let ht=C.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,k,V,M.data);else{ht.sort((Lt,yt)=>Lt.start-yt.start);let ft=0;for(let Lt=1;Lt<ht.length;Lt++){let yt=ht[ft],gt=ht[Lt],Nt=yt.start+yt.count,Gt=$(gt.start,M.width,4),jt=$(yt.start,M.width,4);gt.start<=Nt+1&&Gt===jt&&$(gt.start+gt.count-1,M.width,4)===Gt?yt.count=Math.max(yt.count,gt.start+gt.count-yt.start):(++ft,ht[ft]=gt)}ht.length=ft+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),et=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Lt=0,yt=ht.length;Lt<yt;Lt++){let gt=ht[Lt],Nt=Math.floor(gt.start/4),Gt=Math.ceil(gt.count/4),jt=Nt%M.width,U=Math.floor(Nt/M.width),xt=Gt,j=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,jt,U,xt,j,k,V,M.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,et),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function pt(C,M,k){let V=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=i.TEXTURE_3D);let K=Jt(C,M),ht=M.source;e.bindTexture(V,C.__webglTexture,i.TEXTURE0+k);let ft=n.get(ht);if(ht.version!==ft.__version||K===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let j=Qt.getPrimaries(Qt.workingColorSpace),_t=M.colorSpace===Bi?null:Qt.getPrimaries(M.colorSpace),bt=M.colorSpace===Bi||j===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let et=m(M.image,!1,s.maxTextureSize);et=ye(M,et);let mt=r.convert(M.format,M.colorSpace),Lt=r.convert(M.type),yt=v(M.internalFormat,mt,Lt,M.normalized,M.colorSpace,M.isVideoTexture);zt(V,M);let gt,Nt=M.mipmaps,Gt=M.isVideoTexture!==!0,jt=ft.__version===void 0||K===!0,U=ht.dataReady,xt=S(M,et);if(M.isDepthTexture)yt=b(M.format===rs,M.type),jt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,yt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,yt,et.width,et.height,0,mt,Lt,null));else if(M.isDataTexture)if(Nt.length>0){Gt&&jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Nt[0].width,Nt[0].height);for(let j=0,_t=Nt.length;j<_t;j++)gt=Nt[j],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(i.TEXTURE_2D,j,yt,gt.width,gt.height,0,mt,Lt,gt.data);M.generateMipmaps=!1}else Gt?(jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,et.width,et.height),U&&Q(M,et,mt,Lt)):e.texImage2D(i.TEXTURE_2D,0,yt,et.width,et.height,0,mt,Lt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Gt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,Nt[0].width,Nt[0].height,et.depth);for(let j=0,_t=Nt.length;j<_t;j++)if(gt=Nt[j],M.format!==In)if(mt!==null)if(Gt){if(U)if(M.layerUpdates.size>0){let bt=Ju(gt.width,gt.height,M.format,M.type);for(let it of M.layerUpdates){let Ft=gt.data.subarray(it*bt/gt.data.BYTES_PER_ELEMENT,(it+1)*bt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,it,gt.width,gt.height,1,mt,Ft)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,et.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,yt,gt.width,gt.height,et.depth,0,gt.data,0,0);else It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,gt.width,gt.height,et.depth,mt,Lt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,yt,gt.width,gt.height,et.depth,0,mt,Lt,gt.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Gt&&jt&&e.texStorage2D(i.TEXTURE_2D,xt,yt,Nt[0].width,Nt[0].height);for(let j=0,_t=Nt.length;j<_t;j++)gt=Nt[j],M.format!==In?mt!==null?Gt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,yt,gt.width,gt.height,0,gt.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(i.TEXTURE_2D,j,yt,gt.width,gt.height,0,mt,Lt,gt.data)}else if(M.isDataArrayTexture)if(Gt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,yt,et.width,et.height,et.depth),U)if(M.layerUpdates.size>0){let j=Ju(et.width,et.height,M.format,M.type);for(let _t of M.layerUpdates){let bt=et.data.subarray(_t*j/et.data.BYTES_PER_ELEMENT,(_t+1)*j/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,et.width,et.height,1,mt,Lt,bt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,mt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,et.width,et.height,et.depth,0,mt,Lt,et.data);else if(M.isData3DTexture)Gt?(jt&&e.texStorage3D(i.TEXTURE_3D,xt,yt,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,mt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,yt,et.width,et.height,et.depth,0,mt,Lt,et.data);else if(M.isFramebufferTexture){if(jt)if(Gt)e.texStorage2D(i.TEXTURE_2D,xt,yt,et.width,et.height);else{let j=et.width,_t=et.height;for(let bt=0;bt<xt;bt++)e.texImage2D(i.TEXTURE_2D,bt,yt,j,_t,0,mt,Lt,null),j>>=1,_t>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),et.parentNode!==j){j.appendChild(et),u.add(M),j.onpaint=_t=>{let bt=_t.changedElements;for(let it of u)bt.includes(it.image)&&(it.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,et);else{let bt=i.RGBA,it=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,bt,it,Ft,et)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Gt&&jt){let j=ae(Nt[0]);e.texStorage2D(i.TEXTURE_2D,xt,yt,j.width,j.height)}for(let j=0,_t=Nt.length;j<_t;j++)gt=Nt[j],Gt?U&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt,Lt,gt):e.texImage2D(i.TEXTURE_2D,j,yt,mt,Lt,gt);M.generateMipmaps=!1}else if(Gt){if(jt){let j=ae(et);e.texStorage2D(i.TEXTURE_2D,xt,yt,j.width,j.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,yt,mt,Lt,et);g(M)&&y(V),ft.__version=ht.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ut(C,M,k){if(M.image.length!==6)return;let V=Jt(C,M),K=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);let ht=n.get(K);if(K.version!==ht.__version||V===!0){e.activeTexture(i.TEXTURE0+k);let ft=Qt.getPrimaries(Qt.workingColorSpace),Z=M.colorSpace===Bi?null:Qt.getPrimaries(M.colorSpace),et=M.colorSpace===Bi||ft===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let mt=M.isCompressedTexture||M.image[0].isCompressedTexture,Lt=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let it=0;it<6;it++)!mt&&!Lt?yt[it]=m(M.image[it],!0,s.maxCubemapSize):yt[it]=Lt?M.image[it].image:M.image[it],yt[it]=ye(M,yt[it]);let gt=yt[0],Nt=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type),jt=v(M.internalFormat,Nt,Gt,M.normalized,M.colorSpace),U=M.isVideoTexture!==!0,xt=ht.__version===void 0||V===!0,j=K.dataReady,_t=S(M,gt);zt(i.TEXTURE_CUBE_MAP,M);let bt;if(mt){U&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,jt,gt.width,gt.height);for(let it=0;it<6;it++){bt=yt[it].mipmaps;for(let Ft=0;Ft<bt.length;Ft++){let Ct=bt[Ft];M.format!==In?Nt!==null?U?j&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,0,0,Ct.width,Ct.height,Nt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,jt,Ct.width,Ct.height,0,Ct.data):It("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,0,0,Ct.width,Ct.height,Nt,Gt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft,jt,Ct.width,Ct.height,0,Nt,Gt,Ct.data)}}}else{if(bt=M.mipmaps,U&&xt){bt.length>0&&_t++;let it=ae(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,jt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,yt[it].width,yt[it].height,Nt,Gt,yt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,jt,yt[it].width,yt[it].height,0,Nt,Gt,yt[it].data);for(let Ft=0;Ft<bt.length;Ft++){let Ce=bt[Ft].image[it].image;U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,0,0,Ce.width,Ce.height,Nt,Gt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,jt,Ce.width,Ce.height,0,Nt,Gt,Ce.data)}}else{U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Nt,Gt,yt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,jt,Nt,Gt,yt[it]);for(let Ft=0;Ft<bt.length;Ft++){let Ct=bt[Ft];U?j&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,0,0,Nt,Gt,Ct.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ft+1,jt,Nt,Gt,Ct.image[it])}}}g(M)&&y(i.TEXTURE_CUBE_MAP),ht.__version=K.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Et(C,M,k,V,K,ht){let ft=r.convert(k.format,k.colorSpace),Z=r.convert(k.type),et=v(k.internalFormat,ft,Z,k.normalized,k.colorSpace),mt=n.get(M),Lt=n.get(k);if(Lt.__renderTarget=M,!mt.__hasExternalTextures){let yt=Math.max(1,M.width>>ht),gt=Math.max(1,M.height>>ht);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ht,et,yt,gt,M.depth,0,ft,Z,null):e.texImage2D(K,ht,et,yt,gt,0,ft,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Zt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,Lt.__webglTexture,0,Yt(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,Lt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(C,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let V=M.depthTexture,K=V&&V.isDepthTexture?V.type:null,ht=b(M.stencilBuffer,K),ft=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Zt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(M),ht,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(M),ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ht,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,C)}else{let V=M.textures;for(let K=0;K<V.length;K++){let ht=V[K],ft=r.convert(ht.format,ht.colorSpace),Z=r.convert(ht.type),et=v(ht.internalFormat,ft,Z,ht.normalized,ht.colorSpace);Zt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt(M),et,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt(M),et,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,et,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(C,M,k){let V=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),zt(i.TEXTURE_CUBE_MAP,M.depthTexture);let mt=r.convert(M.depthTexture.format),Lt=r.convert(M.depthTexture.type),yt;M.depthTexture.format===fi?yt=i.DEPTH_COMPONENT24:M.depthTexture.format===rs&&(yt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,yt,M.width,M.height,0,mt,Lt,null)}}else st(M.depthTexture,0);let ht=K.__webglTexture,ft=Yt(M),Z=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,et=M.depthTexture.format===rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===fi)Zt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Z,ht,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,et,Z,ht,0);else if(M.depthTexture.format===rs)Zt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,Z,ht,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,et,Z,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(C){let M=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=V}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)Se(M.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?Se(M.__webglFramebuffer[0],C,0):Se(M.__webglFramebuffer,C,0)}else if(k){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=i.createRenderbuffer(),qt(M.__webglDepthbuffer[V],C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ht)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),qt(M.__webglDepthbuffer,C,!1);else{let K=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function at(C,M,k){let V=n.get(C);M!==void 0&&Et(V.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&nt(C)}function lt(C){let M=C.texture,k=n.get(C),V=n.get(M);C.addEventListener("dispose",_);let K=C.textures,ht=C.isWebGLCubeRenderTarget===!0,ft=K.length>1;if(ft||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=M.version,o.memory.textures++),ht){k.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[Z]=[];for(let et=0;et<M.mipmaps.length;et++)k.__webglFramebuffer[Z][et]=i.createFramebuffer()}else k.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)k.__webglFramebuffer[Z]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Z=0,et=K.length;Z<et;Z++){let mt=n.get(K[Z]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&Zt(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let et=K[Z];k.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Z]);let mt=r.convert(et.format,et.colorSpace),Lt=r.convert(et.type),yt=v(et.internalFormat,mt,Lt,et.normalized,et.colorSpace,C.isXRRenderTarget===!0),gt=Yt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,yt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,k.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),zt(i.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)Et(k.__webglFramebuffer[Z][et],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,et);else Et(k.__webglFramebuffer[Z],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);g(M)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Z=0,et=K.length;Z<et;Z++){let mt=K[Z],Lt=n.get(mt),yt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(yt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,Lt.__webglTexture),zt(yt,mt),Et(k.__webglFramebuffer,C,mt,i.COLOR_ATTACHMENT0+Z,yt,0),g(mt)&&y(yt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),zt(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let et=0;et<M.mipmaps.length;et++)Et(k.__webglFramebuffer[et],C,M,i.COLOR_ATTACHMENT0,Z,et);else Et(k.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,Z,0);g(M)&&y(Z),e.unbindTexture()}C.depthBuffer&&nt(C)}function ct(C){let M=C.textures;for(let k=0,V=M.length;k<V;k++){let K=M[k];if(g(K)){let ht=E(C),ft=n.get(K).__webglTexture;e.bindTexture(ht,ft),y(ht),e.unbindTexture()}}}let dt=[],Ht=[];function Bt(C){if(C.samples>0){if(Zt(C)===!1){let M=C.textures,k=C.width,V=C.height,K=i.COLOR_BUFFER_BIT,ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(C),Z=M.length>1;if(Z)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let et=C.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Lt=n.get(M[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,k,V,0,0,k,V,K,i.NEAREST),l===!0&&(dt.length=0,Ht.length=0,dt.push(i.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(dt.push(ht),Ht.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Lt=n.get(M[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Yt(C){return Math.min(s.maxSamples,C.samples)}function Zt(C){let M=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function D(C){let M=o.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ye(C,M){let k=C.colorSpace,V=C.format,K=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==qe&&k!==Bi&&(Qt.getTransfer(k)===pe?(V!==In||K!==yn)&&It("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",k)),M}function ae(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=O,this.setTexture2D=st,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=z,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Nb(i,t){function e(n,s=Bi){let r,o=Qt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===hc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ku)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ou)return i.BYTE;if(n===Bu)return i.SHORT;if(n===Gr)return i.UNSIGNED_SHORT;if(n===lc)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Xe)return i.HALF_FLOAT;if(n===Hu)return i.ALPHA;if(n===Gu)return i.RGB;if(n===In)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===rs)return i.DEPTH_STENCIL;if(n===uc)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===os)return i.RG;if(n===dc)return i.RG_INTEGER;if(n===pc)return i.RGBA_INTEGER;if(n===va||n===Ma||n===Sa||n===ba)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mc||n===gc||n===xc||n===_c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Ea||n===Ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===vc)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sc)return r.COMPRESSED_R11_EAC;if(n===bc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ea)return r.COMPRESSED_RG11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Tc||n===wc||n===Ac||n===Rc||n===Cc||n===Ic||n===Pc||n===Lc||n===Nc||n===Dc||n===Fc||n===Uc||n===Oc||n===Bc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zc||n===kc||n===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zc)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Gc||n===Vc||n===Ta||n===Wc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
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

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:Db,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_f=class extends di{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,x=typeof XRWebGLBinding<"u",m=new xf,g={},y=e.getContextAttributes(),E=null,v=null,b=[],S=[],A=new J,_=null,T=null,R=new Qe;R.viewport=new de;let P=new Qe;P.viewport=new de;let L=[R,P],B=new nc,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=b[$];return Q===void 0&&(Q=new wr,b[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=b[$];return Q===void 0&&(Q=new wr,b[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=b[$];return Q===void 0&&(Q=new wr,b[$]=Q),Q.getHandSpace()};function X($){let Q=S.indexOf($.inputSource);if(Q===-1)return;let pt=b[Q];pt!==void 0&&(pt.update($.inputSource,$.frame,c||o),pt.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",st);for(let $=0;$<b.length;$++){let Q=S[$];Q!==null&&(S[$]=null,b[$].disconnect(Q))}N=null,O=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(E),d=null,f=null,u=null,s=null,v=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&It("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&It("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",q),s.addEventListener("inputsourceschange",st),y.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ut=null,Et=null;y.depth&&(Et=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=y.stencil?rs:fi,Ut=y.stencil?Vr:ni);let qt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(qt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new De(f.textureWidth,f.textureHeight,{format:In,type:yn,depthTexture:new ts(f.textureWidth,f.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new De(d.framebufferWidth,d.framebufferHeight,{format:In,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st($){for(let Q=0;Q<$.removed.length;Q++){let pt=$.removed[Q],Ut=S.indexOf(pt);Ut>=0&&(S[Ut]=null,b[Ut].disconnect(pt))}for(let Q=0;Q<$.added.length;Q++){let pt=$.added[Q],Ut=S.indexOf(pt);if(Ut===-1){for(let qt=0;qt<b.length;qt++)if(qt>=S.length){S.push(pt),Ut=qt;break}else if(S[qt]===null){S[qt]=pt,Ut=qt;break}if(Ut===-1)break}let Et=b[Ut];Et&&Et.connect(pt)}}let Y=new I,tt=new I;function z($,Q,pt){Y.setFromMatrixPosition(Q.matrixWorld),tt.setFromMatrixPosition(pt.matrixWorld);let Ut=Y.distanceTo(tt),Et=Q.projectionMatrix.elements,qt=pt.projectionMatrix.elements,Se=Et[14]/(Et[10]-1),nt=Et[14]/(Et[10]+1),at=(Et[9]+1)/Et[5],lt=(Et[9]-1)/Et[5],ct=(Et[8]-1)/Et[0],dt=(qt[8]+1)/qt[0],Ht=Se*ct,Bt=Se*dt,Yt=Ut/(-ct+dt),Zt=Yt*-ct;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Zt),$.translateZ(Yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Et[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let D=Se+Yt,ye=nt+Yt,ae=Ht-Zt,C=Bt+(Ut-Zt),M=at*nt/ye*D,k=lt*nt/ye*D;$.projectionMatrix.makePerspective(ae,C,M,k,D,ye),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function rt($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let Q=$.near,pt=$.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),B.near=P.near=R.near=Q,B.far=P.far=R.far=pt,(N!==B.near||O!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,O=B.far),B.layers.mask=$.layers.mask|6,R.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let Ut=$.parent,Et=B.cameras;rt(B,Ut);for(let qt=0;qt<Et.length;qt++)rt(Et[qt],Ut);Et.length===2?z(B,R,P):B.projectionMatrix.copy(R.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),ot($,B,Ut)};function ot($,Q,pt){pt===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(pt.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ts*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return g[$]};let Ot=null;function zt($,Q){if(h=Q.getViewerPose(c||o),p=Q,h!==null){let pt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ut=!1;pt.length!==B.cameras.length&&(B.cameras.length=0,Ut=!0);for(let nt=0;nt<pt.length;nt++){let at=pt[nt],lt=null;if(d!==null)lt=d.getViewport(at);else{let dt=u.getViewSubImage(f,at);lt=dt.viewport,nt===0&&(t.setRenderTargetTextures(v,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(v))}let ct=L[nt];ct===void 0&&(ct=new Qe,ct.layers.enable(nt),ct.viewport=new de,L[nt]=ct),ct.matrix.fromArray(at.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(at.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),nt===0&&(B.matrix.copy(ct.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ut===!0&&B.cameras.push(ct)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let nt=u.getDepthInformation(pt[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<pt.length;nt++){let at=pt[nt].camera;if(at){let lt=g[at];lt||(lt=new Vo,g[at]=lt);let ct=u.getCameraImage(at);lt.sourceTexture=ct}}}}for(let pt=0;pt<b.length;pt++){let Ut=S[pt],Et=b[pt];Ut!==null&&Et!==void 0&&Et.update(Ut,Q,c||o)}Ot&&Ot($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Jt=new i0;Jt.setAnimationLoop(zt),this.setAnimationLoop=function($){Ot=$},this.dispose=function(){}}},Ub=new Wt,c0=new Kt;c0.set(-1,0,0,0,1,0,0,0,1);function Ob(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$u(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,E,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,E):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===tn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===tn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),E=y.envMap,v=y.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Ub.makeRotationFromEuler(v)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(c0),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,E){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=E*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===tn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Bb(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){let S=b.program;n.uniformBlockBinding(v,S)}function c(v,b){let S=s[v.id];S===void 0&&(m(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",y));let A=b.program;n.updateUBOMapping(v,A);let _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function h(v){let b=u();v.__bindingPointIndex=b;let S=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let b=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let _=0,T=S.length;_<T;_++){let R=S[_];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],_,P,A);else d(R,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,b,S,A){if(x(v,b,S,A)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let P=0;P<T.length;P++){let L=T[P],B=g(L);p(L,v.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function p(v,b,S){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,S)}function x(v,b,S,A){let _=v.value,T=b+"_"+S;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function m(v){let b=v.uniforms,S=0,A=16;for(let T=0,R=b.length;T<R;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let L=0,B=P.length;L<B;L++){let N=P[L],O=Array.isArray(N.value)?N.value:[N.value];for(let X=0,q=O.length;X<q;X++){let st=O[X],Y=g(st),tt=S%A,z=tt%Y.boundary,rt=tt+z;S+=z,rt!==0&&A-rt<Y.storage&&(S+=A-rt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Y.storage}}}let _=S%A;return _>0&&(S+=A-_),v.__size=S,v.__cache={},this}function g(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?It("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):It("WebGLRenderer: Unsupported uniform value type.",v),b}function y(v){let b=v.target;b.removeEventListener("dispose",y);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:E}}var zb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xi=null;function kb(){return xi===null&&(xi=new Cr(zb,16,16,os,Xe),xi.name="DFG_LUT",xi.minFilter=Le,xi.magFilter=Le,xi.wrapS=Fn,xi.wrapT=Fn,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}var Zc=class{constructor(t={}){let{canvas:e=Em(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=yn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,m=new Set([pc,dc,fc]),g=new Set([yn,ni,Gr,Vr,cc,hc]),y=new Uint32Array(4),E=new Int32Array(4),v=new I,b=null,S=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,B=null,N=null,O=null;this._outputColorSpace=te;let X=0,q=0,st=null,Y=-1,tt=null,z=new de,rt=new de,ot=null,Ot=new ut(0),zt=0,Jt=e.width,$=e.height,Q=1,pt=null,Ut=null,Et=new de(0,0,Jt,$),qt=new de(0,0,Jt,$),Se=!1,nt=new Ir,at=!1,lt=!1,ct=new Wt,dt=new I,Ht=new de,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function Zt(){return st===null?Q:1}let D=n;function ye(w,F){return e.getContext(w,F)}let ae,C,M,k,V,K,ht,ft,Z,et,mt,Lt,yt,gt,Nt,Gt,jt,U,xt,j,_t,bt,it;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",$n,!1),D===null){let F="webgl2";if(D=ye(F,w),D===null)throw ye(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(w){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),Vt("WebGLRenderer: "+w.message),w}function Ft(){ae=new YM(D),ae.init(),_t=new Nb(D,ae),C=new OM(D,ae,t,_t),M=new Pb(D,ae),C.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),B=D.createFramebuffer(),N=D.createFramebuffer(),O=D.createFramebuffer(),k=new ZM(D),V=new xb,K=new Lb(D,ae,M,V,C,_t,k),ht=new qM(R),ft=new j_(D),bt=new FM(D,ft),Z=new $M(D,ft,k,bt),et=new jM(D,Z,ft,bt,k),U=new JM(D,C,K),Nt=new BM(V),mt=new gb(R,ht,ae,C,bt,Nt),Lt=new Ob(R,V),yt=new yb,gt=new Tb(ae),jt=new DM(R,ht,M,et,p,l),Gt=new Ib(R,et,C),it=new Bb(D,k,C,M),xt=new UM(D,ae,k),j=new KM(D,ae,k),k.programs=mt.programs,R.capabilities=C,R.extensions=ae,R.properties=V,R.renderLists=yt,R.shadowMap=Gt,R.state=M,R.info=k}x!==yn&&(T=new tS(x,e.width,e.height,a,s,r));let Ct=new _f(R,D);this.xr=Ct,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=ae.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=ae.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(Jt,$,!1))},this.getSize=function(w){return w.set(Jt,$)},this.setSize=function(w,F,W=!0){if(Ct.isPresenting){It("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=w,$=F,e.width=Math.floor(w*Q),e.height=Math.floor(F*Q),W===!0&&(e.style.width=w+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(Jt*Q,$*Q).floor()},this.setDrawingBufferSize=function(w,F,W){Jt=w,$=F,Q=W,e.width=Math.floor(w*W),e.height=Math.floor(F*W),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===yn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){It("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(Et)},this.setViewport=function(w,F,W,H){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,F,W,H),M.viewport(z.copy(Et).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(qt)},this.setScissor=function(w,F,W,H){w.isVector4?qt.set(w.x,w.y,w.z,w.w):qt.set(w,F,W,H),M.scissor(rt.copy(qt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){M.setScissorTest(Se=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){Ut=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,W=!0){let H=0;if(w){let G=!1;if(st!==null){let St=st.texture.format;G=m.has(St)}if(G){let St=st.texture.type,wt=g.has(St),Mt=jt.getClearColor(),At=jt.getClearAlpha(),Pt=Mt.r,ne=Mt.g,le=Mt.b;wt?(y[0]=Pt,y[1]=ne,y[2]=le,y[3]=At,D.clearBufferuiv(D.COLOR,0,y)):(E[0]=Pt,E[1]=ne,E[2]=le,E[3]=At,D.clearBufferiv(D.COLOR,0,E))}else H|=D.COLOR_BUFFER_BIT}F&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",$n,!1),jt.dispose(),yt.dispose(),gt.dispose(),V.dispose(),ht.dispose(),et.dispose(),bt.dispose(),it.dispose(),mt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Gd),Ct.removeEventListener("sessionend",Vd),xs.stop()};function Ce(w){w.preventDefault(),Lo("WebGLRenderer: Context Lost."),P=!0}function ve(){Lo("WebGLRenderer: Context Restored."),P=!1;let w=k.autoReset,F=Gt.enabled,W=Gt.autoUpdate,H=Gt.needsUpdate,G=Gt.type;Ft(),k.autoReset=w,Gt.enabled=F,Gt.autoUpdate=W,Gt.needsUpdate=H,Gt.type=G}function $n(w){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ai(w){let F=w.target;F.removeEventListener("dispose",ai),dx(F)}function dx(w){px(w),V.remove(w)}function px(w){let F=V.get(w).programs;F!==void 0&&(F.forEach(function(W){mt.releaseProgram(W)}),w.isShaderMaterial&&mt.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,W,H,G,St){F===null&&(F=Bt);let wt=G.isMesh&&G.matrixWorld.determinantAffine()<0,Mt=xx(w,F,W,H,G);M.setMaterial(H,wt);let At=W.index,Pt=1;if(H.wireframe===!0){if(At=Z.getWireframeAttribute(W),At===void 0)return;Pt=2}let ne=W.drawRange,le=W.attributes.position,Rt=ne.start*Pt,Me=(ne.start+ne.count)*Pt;St!==null&&(Rt=Math.max(Rt,St.start*Pt),Me=Math.min(Me,(St.start+St.count)*Pt)),At!==null?(Rt=Math.max(Rt,0),Me=Math.min(Me,At.count)):le!=null&&(Rt=Math.max(Rt,0),Me=Math.min(Me,le.count));let Ve=Me-Rt;if(Ve<0||Ve===1/0)return;bt.setup(G,H,Mt,W,At);let Pe,Te=xt;if(At!==null&&(Pe=ft.get(At),Te=j,Te.setIndex(Pe)),G.isMesh)H.wireframe===!0?(M.setLineWidth(H.wireframeLinewidth*Zt()),Te.setMode(D.LINES)):Te.setMode(D.TRIANGLES);else if(G.isLine){let nn=H.linewidth;nn===void 0&&(nn=1),M.setLineWidth(nn*Zt()),G.isLineSegments?Te.setMode(D.LINES):G.isLineLoop?Te.setMode(D.LINE_LOOP):Te.setMode(D.LINE_STRIP)}else G.isPoints?Te.setMode(D.POINTS):G.isSprite&&Te.setMode(D.TRIANGLES);if(G.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))Te.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let nn=G._multiDrawStarts,Tt=G._multiDrawCounts,dn=G._multiDrawCount,fe=At?ft.get(At).bytesPerElement:1,Nn=V.get(H).currentProgram.getUniforms();for(let li=0;li<dn;li++)Nn.setValue(D,"_gl_DrawID",li),Te.render(nn[li]/fe,Tt[li])}else if(G.isInstancedMesh)Te.renderInstances(Rt,Ve,G.count);else if(W.isInstancedBufferGeometry){let nn=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,nn);Te.renderInstances(Rt,Ve,Tt)}else Te.render(Rt,Ve)};function Hd(w,F,W,H){L!==null&&w.isNodeMaterial&&L.setObject(H,w),at===!0&&Nt.setState(w,W,!1),w.transparent===!0&&w.side===Ke&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,qa(w,F,H),w.side=zn,w.needsUpdate=!0,qa(w,F,H),w.side=Ke):qa(w,F,H)}this.compile=function(w,F,W=null){W===null&&(W=w),L!==null&&L.renderStart(w,F,W),S=gt.get(W),S.init(F),_.push(S),W.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),w!==W&&w.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(S.pushLight(G),G.castShadow&&S.pushShadow(G))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),lt=this.localClippingEnabled,at=Nt.init(this.clippingPlanes,lt),at===!0&&Nt.setGlobalState(this.clippingPlanes,F),L!==null&&Gt.render(S.state.shadowsArray,W,F);let H=new Set;return w.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let St=G.material;if(St)if(Array.isArray(St))for(let wt=0;wt<St.length;wt++){let Mt=St[wt];Hd(Mt,W,F,G),H.add(Mt)}else Hd(St,W,F,G),H.add(St)}),S=_.pop(),L!==null&&L.renderEnd(),H},this.compileAsync=function(w,F,W=null){let H=this.compile(w,F,W);return new Promise(G=>{function St(){if(H.forEach(function(wt){let At=V.get(wt).currentProgram;(At===void 0||At.isReady())&&H.delete(wt)}),H.size===0){G(w);return}setTimeout(St,10)}ae.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Bh=null;function mx(w){Bh&&Bh(w)}function Gd(){xs.stop()}function Vd(){xs.start()}let xs=new i0;xs.setAnimationLoop(mx),typeof self<"u"&&xs.setContext(self),this.setAnimationLoop=function(w){Bh=w,Ct.setAnimationLoop(w),w===null?xs.stop():xs.start()},Ct.addEventListener("sessionstart",Gd),Ct.addEventListener("sessionend",Vd),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(w,F);let W=Ct.enabled===!0&&Ct.isPresenting===!0,H=T!==null&&(st===null||W)&&T.begin(R,st);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(F),F=Ct.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,F,st),S=gt.get(w,_.length),S.init(F),S.state.textureUnits=K.getTextureUnits(),_.push(S),ct.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(ct,Qn,F.reversedDepth),lt=this.localClippingEnabled,at=Nt.init(this.clippingPlanes,lt),b=yt.get(w,A.length),b.init(),A.push(b),Ct.enabled===!0&&Ct.isPresenting===!0){let wt=R.xr.getDepthSensingMesh();wt!==null&&zh(wt,F,-1/0,R.sortObjects)}zh(w,F,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(pt,Ut),Yt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Yt&&jt.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Nt.beginShadows();let G=S.state.shadowsArray;if(Gt.render(G,w,F),at===!0&&Nt.endShadows(),(H&&T.hasRenderPass())===!1){let wt=b.opaque,Mt=b.transmissive;if(S.setupLights(),F.isArrayCamera){let At=F.cameras;if(Mt.length>0)for(let Pt=0,ne=At.length;Pt<ne;Pt++){let le=At[Pt];Xd(wt,Mt,w,le)}Yt&&jt.render(w);for(let Pt=0,ne=At.length;Pt<ne;Pt++){let le=At[Pt];Wd(b,w,le,le.viewport)}}else Mt.length>0&&Xd(wt,Mt,w,F),Yt&&jt.render(w),Wd(b,w,F)}st!==null&&q===0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st)),H&&T.end(R),w.isScene===!0&&w.onAfterRender(R,w,F),bt.resetDefaultState(),Y=-1,tt=null,_.pop(),_.length>0?(S=_[_.length-1],K.setTextureUnits(S.state.textureUnits),at===!0&&Nt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,L!==null&&L.renderEnd()};function zh(w,F,W,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLightProbeGrid)S.pushLightProbeGrid(w);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(nt)){H&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ct);let wt=et.update(w),Mt=w.material;Mt.visible&&b.push(w,wt,Mt,W,Ht.z,null,F)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(nt))){let wt=et.update(w),Mt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Ht.copy(wt.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(ct)),Array.isArray(Mt)){let At=wt.groups;for(let Pt=0,ne=At.length;Pt<ne;Pt++){let le=At[Pt],Rt=Mt[le.materialIndex];Rt&&Rt.visible&&b.push(w,wt,Rt,W,Ht.z,le,F)}}else Mt.visible&&b.push(w,wt,Mt,W,Ht.z,null,F)}}let St=w.children;for(let wt=0,Mt=St.length;wt<Mt;wt++)zh(St[wt],F,W,H)}function Wd(w,F,W,H){let{opaque:G,transmissive:St,transparent:wt}=w;S.setupLightsView(W),at===!0&&Nt.setGlobalState(R.clippingPlanes,W),H&&M.viewport(z.copy(H)),G.length>0&&Xa(G,F,W),St.length>0&&Xa(St,F,W),wt.length>0&&Xa(wt,F,W),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Xd(w,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[H.id]===void 0){let Rt=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[H.id]=new De(1,1,{generateMipmaps:!0,type:Rt?Xe:yn,minFilter:Rn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let St=S.state.transmissionRenderTarget[H.id],wt=H.viewport||z;St.setSize(wt.z*R.transmissionResolutionScale,wt.w*R.transmissionResolutionScale);let Mt=R.getRenderTarget(),At=R.getActiveCubeFace(),Pt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(Ot),zt=R.getClearAlpha(),zt<1&&R.setClearColor(16777215,.5),R.clear(),Yt&&jt.render(W);let ne=R.toneMapping;R.toneMapping=ei;let le=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),S.setupLightsView(H),at===!0&&Nt.setGlobalState(R.clippingPlanes,H),Xa(w,W,H),K.updateMultisampleRenderTarget(St),K.updateRenderTargetMipmap(St),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Me=0,Ve=F.length;Me<Ve;Me++){let Pe=F[Me],{object:Te,geometry:nn,material:Tt,group:dn}=Pe;if(Tt.side===Ke&&Te.layers.test(H.layers)){let fe=Tt.side;Tt.side=tn,Tt.needsUpdate=!0,qd(Te,W,H,nn,Tt,dn),Tt.side=fe,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(K.updateMultisampleRenderTarget(St),K.updateRenderTargetMipmap(St))}R.setRenderTarget(Mt,At,Pt),R.setClearColor(Ot,zt),le!==void 0&&(H.viewport=le),R.toneMapping=ne}function Xa(w,F,W){let H=F.isScene===!0?F.overrideMaterial:null;for(let G=0,St=w.length;G<St;G++){let wt=w[G],{object:Mt,geometry:At,group:Pt}=wt,ne=wt.material;ne.allowOverride===!0&&H!==null&&(ne=H),Mt.layers.test(W.layers)&&qd(Mt,F,W,At,ne,Pt)}}function qd(w,F,W,H,G,St){L!==null&&G.isNodeMaterial&&L.setObject(w,G),w.onBeforeRender(R,F,W,H,G,St),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),G.onBeforeRender(R,F,W,H,w,St),G.transparent===!0&&G.side===Ke&&G.forceSinglePass===!1?(G.side=tn,G.needsUpdate=!0,R.renderBufferDirect(W,F,H,G,w,St),G.side=zn,G.needsUpdate=!0,R.renderBufferDirect(W,F,H,G,w,St),G.side=Ke):R.renderBufferDirect(W,F,H,G,w,St),w.onAfterRender(R,F,W,H,G,St)}function qa(w,F,W){F.isScene!==!0&&(F=Bt);let H=V.get(w),G=S.state.lights,St=S.state.shadowsArray,wt=G.state.version,Mt=mt.getParameters(w,G.state,St,F,W,S.state.lightProbeGridArray),At=mt.getProgramCacheKey(Mt),Pt=H.programs;H.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let ne=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;H.envMap=ht.get(w.envMap||H.environment,ne),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Pt===void 0&&(w.addEventListener("dispose",ai),Pt=new Map,H.programs=Pt);let le=Pt.get(At);if(le!==void 0){if(H.currentProgram===le&&H.lightsStateVersion===wt)return $d(w,Mt),le}else Mt.uniforms=mt.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,W,Mt),w.onBeforeCompile(Mt,R),le=mt.acquireProgram(Mt,At),Pt.set(At,le),H.uniforms=Mt.uniforms;let Rt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Rt.clippingPlanes=Nt.uniform),$d(w,Mt),H.needsLights=yx(w),H.lightsStateVersion=wt,H.needsLights&&(Rt.ambientLightColor.value=G.state.ambient,Rt.lightProbe.value=G.state.probe,Rt.sunLights.value=G.state.sun,Rt.sunLightShadows.value=G.state.sunShadow,Rt.directionalLights.value=G.state.directional,Rt.directionalLightShadows.value=G.state.directionalShadow,Rt.spotLights.value=G.state.spot,Rt.spotLightShadows.value=G.state.spotShadow,Rt.rectAreaLights.value=G.state.rectArea,Rt.ltc_1.value=G.state.rectAreaLTC1,Rt.ltc_2.value=G.state.rectAreaLTC2,Rt.pointLights.value=G.state.point,Rt.pointLightShadows.value=G.state.pointShadow,Rt.hemisphereLights.value=G.state.hemi,Rt.sunShadowMatrix.value=G.state.sunShadowMatrix,Rt.sunShadowCascade.value=G.state.sunShadowCascade,Rt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Rt.spotLightMatrix.value=G.state.spotLightMatrix,Rt.spotLightMap.value=G.state.spotLightMap,Rt.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=S.state.lightProbeGridArray.length>0,H.currentProgram=le,H.uniformsList=null,le}function Yd(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Kr.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function $d(w,F){let W=V.get(w);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function gx(w,F){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let W=0,H=w.length;W<H;W++){let G=w[W];if(G.texture!==null&&G.boundingBox.containsPoint(v))return G}return null}function xx(w,F,W,H,G){F.isScene!==!0&&(F=Bt),K.resetTextureUnits();let St=F.fog,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,Mt=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Qt.workingColorSpace,At=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Pt=ht.get(H.envMap||wt,At),ne=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,le=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Rt=!!W.morphAttributes.position,Me=!!W.morphAttributes.normal,Ve=!!W.morphAttributes.color,Pe=ei;H.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Pe=R.toneMapping);let Te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,nn=Te!==void 0?Te.length:0,Tt=V.get(H),dn=S.state.lights;if(at===!0&&(lt===!0||w!==tt)){let Ie=w===tt&&H.id===Y;Nt.setState(H,w,Ie)}let fe=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==dn.state.version||Tt.outputColorSpace!==Mt||G.isBatchedMesh&&Tt.batching===!1||!G.isBatchedMesh&&Tt.batching===!0||G.isBatchedMesh&&Tt.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Tt.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Tt.instancing===!1||!G.isInstancedMesh&&Tt.instancing===!0||G.isSkinnedMesh&&Tt.skinning===!1||!G.isSkinnedMesh&&Tt.skinning===!0||G.isInstancedMesh&&Tt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Tt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Tt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Tt.instancingMorph===!1&&G.morphTexture!==null||Tt.envMap!==Pt||H.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Nt.numPlanes||Tt.numIntersection!==Nt.numIntersection)||Tt.vertexAlphas!==ne||Tt.vertexTangents!==le||Tt.morphTargets!==Rt||Tt.morphNormals!==Me||Tt.morphColors!==Ve||Tt.toneMapping!==Pe||Tt.morphTargetsCount!==nn||!!Tt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(fe=!0):(fe=!0,Tt.__version=H.version);let Nn=Tt.currentProgram;fe===!0&&(Nn=qa(H,F,G),L&&H.isNodeMaterial&&L.onUpdateProgram(H,Nn,Tt));let li=!1,Vi=!1,js=!1,Ee=Nn.getUniforms(),Be=Tt.uniforms;if(M.useProgram(Nn.program)&&(li=!0,Vi=!0,js=!0),H.id!==Y&&(Y=H.id,Vi=!0),Tt.needsLights){let Ie=gx(S.state.lightProbeGridArray,G);Tt.lightProbeGrid!==Ie&&(Tt.lightProbeGrid=Ie,Vi=!0)}if(li||tt!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ee.setValue(D,"projectionMatrix",w.projectionMatrix),Ee.setValue(D,"viewMatrix",w.matrixWorldInverse);let Xi=Ee.map.cameraPosition;Xi!==void 0&&Xi.setValue(D,dt.setFromMatrixPosition(w.matrixWorld)),C.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),tt!==w&&(tt=w,Vi=!0,js=!0)}if(Tt.needsLights&&(dn.state.sunShadowMap.length>0&&Ee.setValue(D,"sunShadowMap",dn.state.sunShadowMap,K),dn.state.directionalShadowMap.length>0&&Ee.setValue(D,"directionalShadowMap",dn.state.directionalShadowMap,K),dn.state.spotShadowMap.length>0&&Ee.setValue(D,"spotShadowMap",dn.state.spotShadowMap,K),dn.state.pointShadowMap.length>0&&Ee.setValue(D,"pointShadowMap",dn.state.pointShadowMap,K)),G.isSkinnedMesh){Ee.setOptional(D,G,"bindMatrix"),Ee.setOptional(D,G,"bindMatrixInverse");let Ie=G.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ee.setValue(D,"boneTexture",Ie.boneTexture,K))}G.isBatchedMesh&&(Ee.setOptional(D,G,"batchingTexture"),Ee.setValue(D,"batchingTexture",G._matricesTexture,K),Ee.setOptional(D,G,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",G._indirectTexture,K),Ee.setOptional(D,G,"batchingColorTexture"),G._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",G._colorsTexture,K));let Wi=W.morphAttributes;if((Wi.position!==void 0||Wi.normal!==void 0||Wi.color!==void 0)&&U.update(G,W,Nn),(Vi||Tt.receiveShadow!==G.receiveShadow)&&(Tt.receiveShadow=G.receiveShadow,Ee.setValue(D,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Be.envMapIntensity.value=F.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=kb()),Vi){if(Ee.setValue(D,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&_x(Be,js),St&&H.fog===!0&&Lt.refreshFogUniforms(Be,St),Lt.refreshMaterialUniforms(Be,H,Q,$,S.state.transmissionRenderTarget[w.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ie=Tt.lightProbeGrid;Be.probesSH.value=Ie.texture,Be.probesMin.value.copy(Ie.boundingBox.min),Be.probesMax.value.copy(Ie.boundingBox.max),Be.probesResolution.value.copy(Ie.resolution)}Kr.upload(D,Yd(Tt),Be,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Kr.upload(D,Yd(Tt),Be,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(D,"center",G.center),Ee.setValue(D,"modelViewMatrix",G.modelViewMatrix),Ee.setValue(D,"normalMatrix",G.normalMatrix),Ee.setValue(D,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){let Ie=H.uniformsGroups;for(let Xi=0,Qs=Ie.length;Xi<Qs;Xi++){let Zd=Ie[Xi];it.update(Zd,Nn),it.bind(Zd,Nn)}}return Nn}function _x(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.sunLights.needsUpdate=F,w.sunLightShadows.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function yx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(w,F,W){let H=V.get(w);H.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(w.texture).__webglTexture=F,V.get(w.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let W=V.get(w);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,W=0){st=w,X=F,q=W;let H=null,G=!1,St=!1;if(w){let Mt=V.get(w);if(Mt.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(D.FRAMEBUFFER,Mt.__webglFramebuffer),z.copy(w.viewport),rt.copy(w.scissor),ot=w.scissorTest,M.viewport(z),M.scissor(rt),M.setScissorTest(ot),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Mt.__hasExternalTextures)K.rebindTextures(w,V.get(w.texture).__webglTexture,V.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ne=w.depthTexture;if(Mt.__boundDepthTexture!==ne){if(ne!==null&&V.has(ne)&&(w.width!==ne.image.width||w.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}let At=w.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(St=!0);let Pt=V.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Pt[F])?H=Pt[F][W]:H=Pt[F],G=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?H=V.get(w).__webglMultisampledFramebuffer:Array.isArray(Pt)?H=Pt[W]:H=Pt,z.copy(w.viewport),rt.copy(w.scissor),ot=w.scissorTest}else z.copy(Et).multiplyScalar(Q).floor(),rt.copy(qt).multiplyScalar(Q).floor(),ot=Se;if(W!==0&&(H=B),M.bindFramebuffer(D.FRAMEBUFFER,H)&&M.drawBuffers(w,H),M.viewport(z),M.scissor(rt),M.setScissorTest(ot),G){let Mt=V.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,W)}else if(St){let Mt=F;for(let At=0;At<w.textures.length;At++){let Pt=V.get(w.textures[At]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+At,Pt.__webglTexture,W,Mt)}}else if(w!==null&&W!==0){let Mt=V.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,W)}Y=-1};function Kd(w){let F=V.get(w);return(F.__readFormat!==w.format||F.__readType!==w.type)&&(F.__readFormat=w.format,F.__readType=w.type,F.__formatReadable=C.textureFormatReadable(w.format),F.__typeReadable=C.textureTypeReadable(w.type)),F}this.readRenderTargetPixels=function(w,F,W,H,G,St,wt,Mt=0){if(!(w&&w.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At){M.bindFramebuffer(D.FRAMEBUFFER,At);try{let Pt=w.textures[Mt],ne=Pt.format,le=Pt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt);let Rt=Kd(Pt);if(Rt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&W>=0&&W<=w.height-G&&D.readPixels(F,W,H,G,_t.convert(ne),_t.convert(le),St)}finally{let Pt=st!==null?V.get(st).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(w,F,W,H,G,St,wt,Mt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=V.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&wt!==void 0&&(At=At[wt]),At)if(F>=0&&F<=w.width-H&&W>=0&&W<=w.height-G){M.bindFramebuffer(D.FRAMEBUFFER,At);let Pt=w.textures[Mt],ne=Pt.format,le=Pt.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt);let Rt=Kd(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.bufferData(D.PIXEL_PACK_BUFFER,St.byteLength,D.STREAM_READ),D.readPixels(F,W,H,G,_t.convert(ne),_t.convert(le),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ve=st!==null?V.get(st).__webglFramebuffer:null;M.bindFramebuffer(D.FRAMEBUFFER,Ve);let Pe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await wm(D,Pe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,St),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Me),D.deleteSync(Pe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,W=0){let H=Math.pow(2,-W),G=Math.floor(w.image.width*H),St=Math.floor(w.image.height*H),wt=F!==null?F.x:0,Mt=F!==null?F.y:0;K.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,wt,Mt,G,St),M.unbindTexture()},this.copyTextureToTexture=function(w,F,W=null,H=null,G=0,St=0){let wt,Mt,At,Pt,ne,le,Rt,Me,Ve,Pe=w.isCompressedTexture?w.mipmaps[St]:w.image;if(W!==null)wt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,At=W.isBox3?W.max.z-W.min.z:1,Pt=W.min.x,ne=W.min.y,le=W.isBox3?W.min.z:0;else{let Be=Math.pow(2,-G);wt=Math.floor(Pe.width*Be),Mt=Math.floor(Pe.height*Be),w.isDataArrayTexture?At=Pe.depth:w.isData3DTexture?At=Math.floor(Pe.depth*Be):At=1,Pt=0,ne=0,le=0}H!==null?(Rt=H.x,Me=H.y,Ve=H.z):(Rt=0,Me=0,Ve=0);let Te=_t.convert(F.format),nn=_t.convert(F.type),Tt;F.isData3DTexture?(K.setTexture3D(F,0),Tt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(K.setTexture2DArray(F,0),Tt=D.TEXTURE_2D_ARRAY):(K.setTexture2D(F,0),Tt=D.TEXTURE_2D),M.activeTexture(D.TEXTURE0),M.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let dn=M.getParameter(D.UNPACK_ROW_LENGTH),fe=M.getParameter(D.UNPACK_IMAGE_HEIGHT),Nn=M.getParameter(D.UNPACK_SKIP_PIXELS),li=M.getParameter(D.UNPACK_SKIP_ROWS),Vi=M.getParameter(D.UNPACK_SKIP_IMAGES);M.pixelStorei(D.UNPACK_ROW_LENGTH,Pe.width),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pe.height),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Pt),M.pixelStorei(D.UNPACK_SKIP_ROWS,ne),M.pixelStorei(D.UNPACK_SKIP_IMAGES,le);let js=w.isDataArrayTexture||w.isData3DTexture,Ee=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let Be=V.get(w),Wi=V.get(F),Ie=V.get(Be.__renderTarget),Xi=V.get(Wi.__renderTarget);M.bindFramebuffer(D.READ_FRAMEBUFFER,Ie.__webglFramebuffer),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let Qs=0;Qs<At;Qs++)js&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(w).__webglTexture,G,le+Qs),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,V.get(F).__webglTexture,St,Ve+Qs)),D.blitFramebuffer(Pt,ne,wt,Mt,Rt,Me,wt,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(G!==0||w.isRenderTargetTexture||V.has(w)){let Be=V.get(w),Wi=V.get(F);M.bindFramebuffer(D.READ_FRAMEBUFFER,N),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let Ie=0;Ie<At;Ie++)js?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Be.__webglTexture,G,le+Ie):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Be.__webglTexture,G),Ee?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Wi.__webglTexture,St,Ve+Ie):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Wi.__webglTexture,St),G!==0?D.blitFramebuffer(Pt,ne,wt,Mt,Rt,Me,wt,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):Ee?D.copyTexSubImage3D(Tt,St,Rt,Me,Ve+Ie,Pt,ne,wt,Mt):D.copyTexSubImage2D(Tt,St,Rt,Me,Pt,ne,wt,Mt);M.bindFramebuffer(D.READ_FRAMEBUFFER,null),M.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ee?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Tt,St,Rt,Me,Ve,wt,Mt,At,Te,nn,Pe.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,St,Rt,Me,Ve,wt,Mt,At,Te,Pe.data):D.texSubImage3D(Tt,St,Rt,Me,Ve,wt,Mt,At,Te,nn,Pe):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,St,Rt,Me,wt,Mt,Te,nn,Pe.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,St,Rt,Me,Pe.width,Pe.height,Te,Pe.data):D.texSubImage2D(D.TEXTURE_2D,St,Rt,Me,wt,Mt,Te,nn,Pe);M.pixelStorei(D.UNPACK_ROW_LENGTH,dn),M.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),M.pixelStorei(D.UNPACK_SKIP_PIXELS,Nn),M.pixelStorei(D.UNPACK_SKIP_ROWS,li),M.pixelStorei(D.UNPACK_SKIP_IMAGES,Vi),St===0&&F.generateMipmaps&&D.generateMipmap(Tt),M.unbindTexture()},this.initRenderTarget=function(w){V.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){X=0,q=0,st=null,M.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Qc=class extends ge{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new J(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}},jr=new I,h0=new Wt,u0=new Wt,f0=new I,d0=new I,th=class{constructor(t={}){let e=this,n,s,r,o,a={objects:new WeakMap},l=t.element!==void 0?t.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:s}},this.render=function(p,x){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),h0.copy(x.matrixWorldInverse),u0.multiplyMatrices(x.projectionMatrix,h0),h(p,p,x),this.sortObjects&&d(p)},this.setSize=function(p,x){n=p,s=x,r=n/2,o=s/2,l.style.width=p+"px",l.style.height=x+"px"};function c(p){p.isCSS2DObject&&(p.element.style.display="none");for(let x=0,m=p.children.length;x<m;x++)c(p.children[x])}function h(p,x,m){if(p.visible===!1){c(p);return}if(p.isCSS2DObject){jr.setFromMatrixPosition(p.matrixWorld),jr.applyMatrix4(u0);let g=jr.z>=-1&&jr.z<=1&&p.layers.test(m.layers)===!0,y=p.element;if(y.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(e,x,m);let v=100*p.center.x,b=100*p.center.y;y.style.transformOrigin=`${v}% ${b}%`;let S=-p.rotation2D,A=jr.x*r+r,_=-jr.y*o+o;y.style.transform=`translate(${-v}%, ${-b}%) translate(${A}px, ${_}px) rotate(${S}rad)`,y.parentNode!==l&&l.appendChild(y),p.onAfterRender(e,x,m)}let E={distanceToCameraSquared:u(m,p)};a.objects.set(p,E)}for(let g=0,y=p.children.length;g<y;g++)h(p.children[g],x,m)}function u(p,x){return f0.setFromMatrixPosition(p.matrixWorld),d0.setFromMatrixPosition(x.matrixWorld),f0.distanceToSquared(d0)}function f(p){let x=[];return p.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function d(p){let x=f(p).sort(function(g,y){if(g.renderOrder!==y.renderOrder)return y.renderOrder-g.renderOrder;let E=a.objects.get(g).distanceToCameraSquared,v=a.objects.get(y).distanceToCameraSquared;return E-v}),m=x.length;for(let g=0,y=x.length;g<y;g++)x[g].element.style.zIndex=m-g}}};function yf(i,t){if(t===Vu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===Wr||t===wa){let e=i.getIndex();if(e===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===Wr)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}function p0(i){let t=new Map,e=new Map,n=i.clone();return m0(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=t.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function m0(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)m0(i.children[n],t.children[n],e)}var to=class extends gi{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new wf(e)}),this.register(function(e){return new Af(e)}),this.register(function(e){return new Uf(e)}),this.register(function(e){return new Of(e)}),this.register(function(e){return new Bf(e)}),this.register(function(e){return new Cf(e)}),this.register(function(e){return new If(e)}),this.register(function(e){return new Pf(e)}),this.register(function(e){return new Lf(e)}),this.register(function(e){return new Tf(e)}),this.register(function(e){return new Nf(e)}),this.register(function(e){return new Rf(e)}),this.register(function(e){return new Ff(e)}),this.register(function(e){return new Df(e)}),this.register(function(e){return new bf(e)}),this.register(function(e){return new eh(e,oe.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new eh(e,oe.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new zf(e)})}load(t,e,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Oi.extractUrlBase(t);o=Oi.resolveURL(c,this.path)}else o=Oi.extractUrlBase(t);this.manager.itemStart(t);let a=function(c){s?s(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new Or(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===v0){try{o[oe.KHR_BINARY_GLTF]=new kf(t)}catch(u){s&&s(u);return}r=JSON.parse(o[oe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yf(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case oe.KHR_MATERIALS_UNLIT:o[u]=new Ef;break;case oe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Hf(r,this.dracoLoader);break;case oe.KHR_TEXTURE_TRANSFORM:o[u]=new Gf;break;case oe.KHR_MESH_QUANTIZATION:o[u]=new Vf;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function Hb(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function Ge(i,t,e){let n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bf=class{constructor(t){this.parser=t,this.name=oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],c,h=new ut(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],qe);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new is(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fs(h),c.distance=u;break;case"spot":c=new Ds(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),s=Promise.resolve(c),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}},Ef=class{constructor(){this.name=oe.KHR_MATERIALS_UNLIT}getMaterialType(){return xe}extendParams(t,e,n){let s=[];t.color=new ut(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],qe),t.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,te))}return Promise.all(s)}},Tf=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},wf=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new J(r,r)}return Promise.all(s)}},Af=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_DISPERSION}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Rf=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Cf=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SHEEN}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(e.sheenColor=new ut(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],qe)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,te)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},If=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Pf=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_VOLUME}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return e.attenuationColor=new ut().setRGB(r[0],r[1],r[2],qe),Promise.all(s)}},Lf=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IOR}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},Nf=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SPECULAR}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return e.specularColor=new ut().setRGB(r[0],r[1],r[2],qe),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,te)),Promise.all(s)}},Df=class{constructor(t){this.parser=t,this.name=oe.EXT_MATERIALS_BUMP}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ff=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return Ge(this.parser,t,this.name)!==null?He:null}extendMaterialParams(t,e){let n=Ge(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Uf=class{constructor(t){this.parser=t,this.name=oe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}},Of=class{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}},Bf=class{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let o=r.extensions[e],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(t,o.source,l)}},eh=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}},zf=class{constructor(t){this.name=oe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Hn.TRIANGLES&&c.mode!==Hn.TRIANGLE_STRIP&&c.mode!==Hn.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],f=c[0].count,d=[];for(let p of u){let x=new Wt,m=new I,g=new on,y=new I(1,1,1),E=new Rs(p.geometry,p.material,f);for(let b=0;b<f;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),E.setMatrixAt(b,x.compose(m,g,y));let v=null;for(let b in l)if(b==="_COLOR_0"){let S=l[b];E.instanceColor=new Li(S.array,S.itemSize,S.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(v===null){let A=E.geometry;v=new me,v.name=A.name;for(let _ in A.attributes)v.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)v.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)v.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),E.geometry=v}let S=l[b];v.setAttribute(b,new Li(S.array,S.itemSize,S.normalized))}ge.prototype.copy.call(E,p),this.parser.assignFinalMaterial(E),d.push(E)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}},v0="glTF",Pa=12,g0={JSON:1313821514,BIN:5130562},kf=class{constructor(t){this.name=oe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,Pa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==v0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Pa,r=new DataView(t,Pa),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===g0.JSON){let c=new Uint8Array(t,Pa+o,a);this.content=n.decode(c)}else if(l===g0.BIN){let c=Pa+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hf=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=oe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Xf[h]||h.toLowerCase();a[u]=o[h]}for(let h in t.attributes){let u=Xf[h]||h.toLowerCase();if(o[h]!==void 0){let f=n.accessors[t.attributes[h]],d=Qr[f.componentType];c[u]=d.name,l[u]=f.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(let p in d.attributes){let x=d.attributes[p],m=l[p];m!==void 0&&(x.normalized=m)}u(d)},a,c,qe,f)})})}},Gf=class{constructor(){this.name=oe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),s=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*s,t.offset.x,-t.repeat.x*s,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},Vf=class{constructor(){this.name=oe.KHR_MESH_QUANTIZATION}},nh=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let o=0;o!==s;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-e,u=(n-e)/h,f=u*u,d=f*u,p=t*c,x=p-c,m=-2*d+3*f,g=d-f,y=1-m,E=g-f+u;for(let v=0;v!==a;v++){let b=o[x+v+a],S=o[x+v+l]*h,A=o[p+v+a],_=o[p+v]*h;r[v]=y*b+E*S+m*A+g*_}return r}},Gb=new on,Wf=class extends nh{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return Gb.fromArray(r).normalize().toArray(r),r}},Hn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},x0={9728:ze,9729:Le,9984:ac,9985:Hr,9986:ks,9987:Rn},_0={33071:Fn,33648:vr,10497:On},vf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},as={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vb={CUBICSPLINE:void 0,LINEAR:Es,STEP:bs},Mf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Wb(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Oe({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zn})),i.DefaultMaterial}function Vs(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function yi(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Xb(i,t,e){let n=!1,s=!1,r=!1;for(let c=0,h=t.length;c<h;c++){let u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){let u=t[c];if(n){let f=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){let f=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],f=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function qb(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Yb(i){let t,e=i.extensions&&i.extensions[oe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Sf(e.attributes):t=i.indices+":"+Sf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+Sf(i.targets[n]);return t}function Sf(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function qf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $b(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Kb=new Wt,Yf=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Hb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ls(this.options.manager):this.textureLoader=new la(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Or(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Vs(r,a,s),yi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let o=e[s].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let o=t[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[oe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Oi.resolveURL(e.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let o=vf[s.type],a=Qr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ue(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=vf[s.type],c=Qr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,x,m;if(d&&d!==u){let g=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,E=e.cache.get(y);E||(x=new c(a,g*d,s.count*d/h),E=new As(x,d/h),e.cache.add(y,E)),m=new ji(E,l,f%d/h,p)}else a===null?x=new c(s.count*l):x=new c(a,f,s.count*l),m=new Ue(x,l,p);if(s.sparse!==void 0){let g=vf.SCALAR,y=Qr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,b=new y(o[1],E,s.sparse.count*g),S=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Ue(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=b.length;A<_;A++){let T=b[A];if(m.setX(T,S[A*l]),l>=2&&m.setY(T,S[A*l+1]),l>=3&&m.setZ(T,S[A*l+2]),l>=4&&m.setW(T,S[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){let s=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return h.magFilter=x0[f.magFilter]||Le,h.minFilter=x0[f.minFilter]||Rn,h.wrapS=_0[f.wrapS]||On,h.wrapT=_0[f.wrapT]||On,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ze&&h.minFilter!==Le,s.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());let o=s.images[t],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let f=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(f,d){let p=f;e.isImageBitmapLoader===!0&&(p=function(x){let m=new Ye(x);m.needsUpdate=!0,f(m)}),e.load(Oi.resolveURL(u,r.path),p,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),yi(u,o),u.userData.mimeType=o.mimeType||$b(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[oe.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[oe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[oe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),t[e]=o,o})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Lr,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Pr,an.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Oe}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],o,a={},l=r.extensions||{},c=[];if(l[oe.KHR_MATERIALS_UNLIT]){let u=s[oe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ut(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],qe),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,te)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=Ke);let h=r.alphaMode||Mf.OPAQUE;if(h===Mf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Mf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==xe&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new J(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==xe&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==xe){let u=r.emissiveFactor;a.emissive=new ut().setRGB(u[0],u[1],u[2],qe)}return r.emissiveTexture!==void 0&&o!==xe&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,te)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),yi(u,r),e.associations.set(u,{materials:t}),r.extensions&&Vs(s,u,r),u})}createUniqueName(t){let e=we.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return y0(l,a,e)})}let o=[];for(let a=0,l=t.length;a<l;a++){let c=t[a],h=Yb(c),u=s[h];if(u)o.push(u.promise);else{let f;c.extensions&&c.extensions[oe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=y0(new me,c,e),c.mode===Hn.TRIANGLE_STRIP?f=f.then(d=>yf(d,wa)):c.mode===Hn.TRIANGLE_FAN&&(f=f.then(d=>yf(d,Wr))),s[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?Wb(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let d=0,p=h.length;d<p;d++){let x=h[d],m=o[d],g,y=c[d];if(m.mode===Hn.TRIANGLES||m.mode===Hn.TRIANGLE_STRIP||m.mode===Hn.TRIANGLE_FAN||m.mode===void 0){let E=r.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");E&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=E&&v?new Oo(x,y):new Dt(x,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Hn.LINES)g=new zo(x,y);else if(m.mode===Hn.LINE_STRIP)g=new Cs(x,y);else if(m.mode===Hn.LINE_LOOP)g=new ko(x,y);else if(m.mode===Hn.POINTS)g=new Ho(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&qb(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),yi(g,r),m.extensions&&Vs(s,g,m),e.assignFinalMaterial(g),u.push(g)}for(let d=0,p=u.length;d<p;d++)e.associations.set(u[d],{meshes:t,primitives:d});if(u.length===1)return r.extensions&&Vs(s,u[0],r),u[0];let f=new se;r.extensions&&Vs(s,f,r),e.associations.set(f,{meshes:t});for(let d=0,p=u.length;d<p;d++)f.add(u[d]);return f})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Qe(Xr.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new Bn(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),yi(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let f=new Wt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Bo(a,l)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){let d=s.channels[u],p=s.samplers[d.sampler],x=d.target,m=x.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let f=u[0],d=u[1],p=u[2],x=u[3],m=u[4],g=[];for(let E=0,v=f.length;E<v;E++){let b=f[E],S=d[E],A=p[E],_=x[E],T=m[E];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let R=n._createAnimationTracks(b,S,A,_,T);if(R)for(let P=0;P<R.length;P++)g.push(R[P])}let y=new ra(r,void 0,g);return yi(y,s),y})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],f=c[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,Kb)});for(let d=0,p=u.length;d<p;d++)h.add(u[d]);if(h.userData.pivot!==void 0&&u.length>0){let d=h.userData.pivot,p=u[0];h.pivot=new I().fromArray(d),h.position.x-=d[0],h.position.y-=d[1],h.position.z-=d[2],p.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Rr:c.length>1?h=new se:c.length===1?h=c[0]:h=new ge,h!==c[0])for(let u=0,f=c.length;u<f;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),yi(h,r),r.extensions&&Vs(n,h,r),r.matrix!==void 0){let u=new Wt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new se;n.name&&(r.name=s.createUniqueName(n.name)),yi(r,n),n.extensions&&Vs(e,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++){let f=l[h];f.parent!==null?r.add(p0(f)):r.add(f)}let c=h=>{let u=new Map;for(let[f,d]of s.associations)(f instanceof an||f instanceof Ye)&&u.set(f,d);return h.traverse(f=>{let d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=c(r),r})}_createAnimationTracks(t,e,n,s,r){let o=[],a=t.name?t.name:t.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}as[r.path]===as.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(a);let h;switch(as[r.path]){case as.weights:h=Di;break;case as.rotation:h=Fi;break;case as.translation:case as.scale:h=ns;break;default:switch(n.itemSize){case 1:h=Di;break;case 2:case 3:default:h=ns;break}break}let u=s.interpolation!==void 0?Vb[s.interpolation]:Es,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let x=new h(l[d]+"."+as[r.path],e.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),o.push(x)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=qf(e.constructor),s=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof Fi?Wf:nh;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Zb(i,t,e){let n=t.attributes,s=new ke;if(n.POSITION!==void 0){let a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),a.normalized){let h=qf(Qr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let a=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let f=e.json.accessors[u.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let x=qf(Qr[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new xn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function y0(i,t,e){let n=t.attributes,s=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Xf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(t.indices!==void 0&&!i.index){let o=e.getDependency("accessor",t.indices).then(function(a){i.setIndex(a)});s.push(o)}return Qt.workingColorSpace!==qe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),yi(i,t),Zb(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Xb(i,t.targets,e):i})}var ih=class extends ws{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new ln;t.deleteAttribute("uv");let e=new Oe({side:tn}),n=new Oe,s=new Fs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Rs(t,n,6),a=new ge;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Dt(t,eo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Dt(t,eo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Dt(t,eo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Dt(t,eo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Dt(t,eo(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Dt(t,eo(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function eo(i){return new ia({color:0,emissive:16777215,emissiveIntensity:i})}var La=new I;function Gn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;La.copy(t),La[n]=0,La.normalize();let c=.5*o/(o+a),h=1-La.angleTo(i)/l;return Math.sign(La[e])===1?h*c:a/(o+a)+c+c*(1-h)}var sh=class i extends ln{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,x=new I,m=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*r,u[g+1]=h.y*Math.sign(l.y)+c.y*r,u[g+2]=h.z*Math.sign(l.z)+c.z*r,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:x.set(1,0,0),d[y+0]=Gn(x,c,"z","y",r,n),d[y+1]=1-Gn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),d[y+0]=1-Gn(x,c,"z","y",r,n),d[y+1]=1-Gn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),d[y+0]=1-Gn(x,c,"x","z",r,t),d[y+1]=Gn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),d[y+0]=1-Gn(x,c,"x","z",r,t),d[y+1]=1-Gn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),d[y+0]=1-Gn(x,c,"x","y",r,t),d[y+1]=1-Gn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),d[y+0]=Gn(x,c,"x","y",r,t),d[y+1]=1-Gn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var rh=["#9CAA93","#86A4A1","#8E9DB1","#A49EB9","#BB9CA6","#C79F89","#CDB27F"],M0=["sofa","media","library","meeting"],S0=[.85,1.25],$f="26,30,42",Jb=.3,A0=[240,235,227],ee={x0:3.03,x1:8,z0:-.12,z1:4.7},jb=[[4.13,-.3],[4.13,3.9]],Vn=128,Ws=64,b0=.012,R0=["sofa","armchair_1","armchair_2","coffee_table"],Qb={oak:"#D9C39F",black:"#1C1C1E",graphite:"#3A3A3C",fabric_warm:"#C9C5BE",fabric_light:"#E2DFDA",pot_white:"#F1EFEB",bar_white:"#EBE9E4"},Kf=["#ECE6DA","#D3CABA","#ABA294","#6B6762","#36363A","#BCA680"],t1=new ut(1,1,1),e1=new ut("#F2EEE6"),Zf=new ut().setRGB(210/255,210/255,210/255,te).r,C0=new Map,I0=.4;function P0(i){let t=new Set,e=new Map;return i.forEach((n,s)=>{let r=n1(n.id)%rh.length;if(i.length<=rh.length)for(;t.has(r);)r=(r+1)%rh.length;t.add(r),e.set(n.id,{accent:rh[r],layout:M0[s%M0.length]})}),e}function n1(i){let t=2166136261;for(let e of String(i))t^=e.codePointAt(0),t=Math.imul(t,16777619);return t>>>0}var no=new WeakMap;function L0(i){let t={layouts:new Map,glb:[],mats:[]};return i.traverse(e=>{let n=/^style_(sofa|media|library|meeting)$/.exec(e.name);if(n&&t.layouts.set(n[1],e),R0.includes(e.name)&&t.glb.push(e),e.isMesh)for(let s of[].concat(e.material))s.userData.accent&&!t.mats.includes(s)&&t.mats.push(s)}),t}function N0(i,t){no.has(i)||no.set(i,L0(i));let e=no.get(i);for(let[s,r]of e.layouts)r.visible=s===t.layout;for(let s of e.glb)s.visible=t.layout==="sofa";let n=new ut(t.accent);for(let s of e.mats)i1(s,s.userData.accent,n)}function D0(i){no.has(i)||no.set(i,L0(i));let t=no.get(i);return[...t.layouts.values(),...t.glb]}function i1(i,t,e){let n=/^rug/.test(t)?e.clone().lerp(e1,.28):e;switch(t){case"rugtint":i.color.setRGB(Math.min(1,n.r/Zf),Math.min(1,n.g/Zf),Math.min(1,n.b/Zf));break;case"fabric":i.color.copy(n).multiplyScalar(.86);break;case"panelDark":i.color.copy(n).multiplyScalar(.6);break;case"book":i.color.copy(n).multiplyScalar(.78);break;case"rugEdge":i.color.copy(n).multiplyScalar(.74);break;case"screen":i.color.copy(n).lerp(t1,.2).multiplyScalar(.92);break;case"rug":(i.accentUniform?i.accentUniform.value:i.color).copy(n);break;default:i.color.copy(n)}}function F0(i,t){if(R0.some(s=>!i.getObjectByName(s))||t.slice(0,5).some(s=>!s))return null;let e=new Qf(i);h1(e,i),u1(e,i),s1(e,i);let n={sofa:t.slice(0,5).map(s=>({pos:s.pos.clone(),yaw:s.yaw}))};return n.media=Jf(e,i,"media",r1),n.library=Jf(e,i,"library",o1),n.meeting=Jf(e,i,"meeting",a1),{layouts:n}}var Qf=class{constructor(t){this.open=t,this.found=new Map,t.traverse(e=>{if(e.isMesh)for(let n of[].concat(e.material))n.name&&!this.found.has(n.name)&&this.found.set(n.name,n)}),this.made=new Map}mat(t){return this.found.has(t)?this.found.get(t):(this.made.has(t)||this.made.set(t,new Oe({name:t,color:Qb[t]||"#CCCCCC",roughness:.7})),this.made.get(t))}accent(t,e="fabric_light",n={}){let s=`accent_${t}`;if(!this.made.has(s)){let r=this.mat(e).clone();r.name=s,r.userData={accent:t},Object.assign(r,n),this.made.set(s,r)}return this.made.get(s)}plain(t,e,n=.75){return this.made.has(t)||this.made.set(t,new Oe({name:t,color:e,roughness:n})),this.made.get(t)}add(t,e,n,s,r,o,a=0,l=0,c=0){let h=new Dt(e,n);return h.position.set(s,r,o),h.rotation.set(l,a,c,"YXZ"),t.add(h),h}rbox(t,e,n,s){return new sh(t,e,n,2,Math.min(s,t/2-1e-4,e/2-1e-4,n/2-1e-4))}group(t,e,n,s=0){let r=new se;return r.position.set(e,0,n),r.rotation.y=s,t.add(r),r}};function Jf(i,t,e,n){let s=new se,r=jb.map(([u,f])=>({pts:Y0([...ah(u,f,.15,14),[u+.34,f+.36]]),flat:!0})),o={shadows:r,rug:null},a=n(i,s,o),l=x1(r);C0.set(e,{layers:l,rug:o.rug});let c=new Dt(new Fe(ee.x1-ee.x0,ee.z1-ee.z0).rotateX(-Math.PI/2),new xe({map:k0(l),name:`style_patch_${e}`}));c.position.set((ee.x0+ee.x1)/2,.002,(ee.z0+ee.z1)/2),c.userData.bakedName=`style_patch_${e}`,s.add(c),o.rug&&f1(i,s,o.rug,l,e);let h=q0(s,`style_${e}`);return h.visible=!1,t.add(h),a.map(([u,f,d,p])=>({pos:new I(u,f,d),yaw:p}))}function s1(i,t){let e=new se;e.name="style_sofa";let s=t.getObjectByName("sofa").position,r=i.rbox(.42,.4,.14,.065);for(let l of[-1,1])i.add(e,r,i.accent("fabric"),s.x+l*1.16,.655,s.z-.16,-l*.22,-.3);let o=new xe({name:"accent_rugtint",color:16777215,blending:fa,premultipliedAlpha:!0,transparent:!0,depthWrite:!1});o.userData={accent:"rugtint"};let a=i.add(e,new Xo(2.205,128).rotateX(-Math.PI/2),o,5.3,.0015,2.3);a.userData.keep=!0,a.renderOrder=-1,t.add(e)}function r1(i,t,e){let n=i.mat("bar_white"),s=i.mat("oak"),r=i.mat("black"),o=3.44,a=2.45,l=2.7,c=.44,h=.46;i.add(t,i.rbox(c-.08,.05,l-.12,.01),r,o,.025,a),i.add(t,i.rbox(c,h-.08,l,.012),n,o,.05+(h-.08)/2,a),i.add(t,i.rbox(c+.02,.03,l+.02,.008),s,o,h-.015,a);for(let g of[-l/6,l/6])i.add(t,new ln(.004,h-.12,.006),r,o+c/2+.001,.05+(h-.08)/2,a+g);e.shadows.push({pts:vn(o,a,c,l),y0:0,y1:h,core:.75});let u=2,f=1.125,d=h+.17+f/2,p=o-.02;i.add(t,i.rbox(.22,.012,.44,.006),r,p,h+.006,a),i.add(t,i.rbox(.035,.2,.12,.01),r,p-.02,h+.1,a),i.add(t,i.rbox(.032,f+.036,u+.036,.01),r,p,d,a);let x=new xe({name:"accent_screen",map:_1(),toneMapped:!1});x.userData={accent:"screen"},i.add(t,new Fe(u,f).rotateY(Math.PI/2),x,p+.0165,d,a),e.shadows.push({pts:vn(p,a,.032,u+.036),y0:d-f/2-.02,y1:d+f/2+.02});let m=[];for(let g of[1.75,3.3]){let E=Math.atan2(o-5.1,a-g);O0(i,t,e,5.1,g,E),m.push(U0(5.1,g,E,.48,.05))}return B0(i,t,e,6,.5,2.5,0),e.rug={kind:"rect",x0:3.9,z0:.1,x1:7.65,z1:4.25,r:.08},[[5.15,.46,.5,0],[6,.46,.5,0],[6.85,.46,.5,0],...m]}function o1(i,t,e){let n=$0(11);E0(i,t,e,(3.12+7.35)/2,.27,7.35-3.12,0,n),E0(i,t,e,3.3,(.45+3.75)/2,3.75-.45,Math.PI/2,n),B0(i,t,e,3.97,2.15,2.45,Math.PI/2);let s=6.7,r=2.85,o=-.69;O0(i,t,e,s,r,o),l1(i,t,e,7.38,2.12),c1(i,t,e,5.75,3.72);let a=i.open.getObjectByName("tree_3").clone(!0);a.position.set(6.85,.78,.27),a.scale.setScalar(.24),t.add(a);let l=new Fr([[0,0],[.045,0],[.06,.05],[.058,.12],[.03,.2],[.028,.23],[0,.23]].map(([c,h])=>new J(c,h)),28);return i.add(t,l,i.mat("pot_white"),4.15,.78,.25),e.rug={kind:"round",cx:5.7,cz:2.4,r:1.72},[[3.97,.46,1.3,Math.PI/2],[3.97,.46,2.15,Math.PI/2],[3.97,.46,3,Math.PI/2],U0(s,r,o,.48,.05),[5.75,.41,3.72,.3]]}function a1(i,t,e){let n=i.mat("oak"),s=i.mat("black"),r=5.55,o=2.05,a=2.4,l=1.1,c=.74,h=new ta(td(a,l,l/2),{depth:.024,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:16});h.rotateX(Math.PI/2),i.add(t,h,n,r,c-.006,o);for(let f of[-1,1])i.add(t,new wn(.04,.04,c-.05,20),s,r+f*.62,(c-.05)/2+.012,o),i.add(t,i.rbox(.09,.024,.74,.01),s,r+f*.62,.012,o),e.shadows.push({pts:vn(r+f*.62,o,.08,.08),y0:0,y1:c-.04},{pts:vn(r+f*.62,o,.09,.74),core:.55,blur:.02});e.shadows.push({pts:td(a,l,l/2).getPoints(12).map(f=>[r+f.x,o-f.y]),y0:c-.036,y1:c});let u=[];for(let f of[r-.8,r,r+.8])oh(i,t,e,f,o-l/2-.47,0),u.push([f,.47,o-l/2-.47,0]);oh(i,t,e,r-a/2-.5,o,Math.PI/2),u.push([r-a/2-.5,.47,o,Math.PI/2]),oh(i,t,e,r+a/2+.5,o,-Math.PI/2),u.push([r+a/2+.5,.47,o,-Math.PI/2]);for(let f of[r-.42,r+.42])oh(i,t,e,f,o+l/2+.3,Math.PI);return e.rug={kind:"rect",x0:3.35,z0:.42,x1:7.75,z1:3.68,r:.08},u}function U0(i,t,e,n,s){return[i+Math.sin(e)*s,n,t+Math.cos(e)*s,e]}function O0(i,t,e,n,s,r){let o=i.open.getObjectByName("armchair_1").clone(!0);o.position.set(n,0,s),o.rotation.set(0,r,0),t.add(o),e.shadows.push({pts:vn(n,s,.95,.9,r),y0:0,y1:.37,core:.88,blur:.04},{pts:vn(...Xs(n,s,0,-.38,r),.95,.16,r),y0:0,y1:.85},...[-.5,.5].map(a=>({pts:vn(...Xs(n,s,a,0,r),.1,.8,r),y0:0,y1:.62})))}function B0(i,t,e,n,s,r,o){let a=i.group(t,n,s,o),l=.46;i.add(a,i.rbox(r,.035,l,.012),i.mat("oak"),0,.322,0),i.add(a,i.rbox(r-.03,.115,l-.03,.05),i.mat("fabric_warm"),0,.395,0);let c=new wn(.016,.014,.305,12);for(let h of[-1,1])for(let u of[-1,1]){let f=h*(r/2-.09),d=u*(l/2-.07);i.add(a,c,i.mat("black"),f,.1525,d);let[p,x]=Xs(n,s,f,d,o);e.shadows.push({pts:vn(p,x,.03,.03),y0:0,y1:.3,core:.5,blur:.015})}e.shadows.push({pts:vn(n,s,r,l,o),y0:.305,y1:.452,core:.22,blur:.1})}function oh(i,t,e,n,s,r){let o=i.group(t,n,s,r),a=i.mat("graphite"),l=i.mat("black");i.add(o,i.rbox(.48,.07,.46,.03),a,0,.43,.01),i.add(o,i.rbox(.46,.33,.05,.022),a,0,.73,-.215,0,-.1);let c=new wn(.011,.011,.395,10);for(let u of[-1,1])for(let f of[-1,1])i.add(o,c,l,u*.2,.1975,f*.18),e.shadows.push({pts:vn(...Xs(n,s,u*.2,f*.18,r),.024,.024),y0:0,y1:.395,core:.45,blur:.012});let h=new wn(.009,.009,.16,8);for(let u of[-1,1])i.add(o,h,l,u*.18,.54,-.205);e.shadows.push({pts:vn(...Xs(n,s,0,.01,r),.48,.46,r),y0:.395,y1:.465,core:.16,blur:.08},{pts:vn(...Xs(n,s,0,-.215,r),.46,.05,r),y0:.565,y1:.895})}function E0(i,t,e,n,s,r,o,a){let l=i.group(t,n,s,o),c=.36,h=.78,u=.022,f=i.mat("bar_white");i.add(l,i.rbox(r-.05,.05,c-.06,.008),i.mat("black"),0,.025,-.015),i.add(l,i.rbox(r,u,c,.004),f,0,.05+u/2,0),i.add(l,i.rbox(r+.012,.03,c+.012,.008),i.mat("oak"),0,h-.015,0),i.add(l,i.rbox(r,h-.08,.012,.003),f,0,.05+(h-.08)/2,-c/2+.006);let d=Math.max(1,Math.round(r/.82)),p=r/d;for(let m=0;m<=d;m++)i.add(l,i.rbox(u,h-.08,c,.004),f,-r/2+u/2+m*(r-u)/d,.05+(h-.08)/2,0);let x=.05+u+(h-.08-u)/2;i.add(l,i.rbox(r-u,u,c-.015,.004),f,0,x,.0075);for(let m=0;m<d;m++){let g=-r/2+m*p+u,y=g+p-u;T0(i,l,g,y,.05+u,x-u/2-(.05+u),c,a),T0(i,l,g,y,x+u/2,h-.03-(x+u/2),c,a)}e.shadows.push({pts:vn(n,s,r,c,o),y0:0,y1:h,core:.72,blur:.03})}function T0(i,t,e,n,s,r,o,a){let l=()=>a()<.12?i.accent("book","fabric_light",{roughness:.75}):i.plain(`book_${Math.floor(a()*Kf.length)}`,Kf[Math.floor(a()*Kf.length)]),c=-o/2+.016;if(a()<.16){let f=s;for(let d=0,p=2+Math.floor(a()*3);d<p;d++){let x=.028+a()*.014,m=.2+a()*.05,g=.16+a()*.05;i.add(t,new ln(m,x,g),l(),e+.04+m/2+(a()-.5)*.02,f+x/2,c+g/2,(a()-.5)*.12),f+=x}return}let h=n-.008-(a()<.55?.1+a()*.3:0),u=e+.006+a()*.05;for(;;){let f=.02+a()*.024,d=Math.min(r-.03,.19+a()*.11),p=.16+a()*.07;if(u+f>h)break;i.add(t,new ln(f,d,p),l(),u+f/2,s+d/2,c+p/2),u+=f+(a()<.12?.006:.0015)}}function l1(i,t,e,n,s){let r=i.mat("black");i.add(t,new wn(.15,.16,.018,32),r,n,.009,s),i.add(t,new wn(.011,.011,1.3,10),r,n,.018+.65,s),i.add(t,new wn(.16,.19,.26,40),i.mat("fabric_light"),n,1.43,s),e.shadows.push({pts:ah(n,s,.16,16),y0:0,y1:.02,core:.5,blur:.02},{pts:vn(n,s,.024,.024),y0:0,y1:1.3},{pts:ah(n,s,.19,16),y0:1.3,y1:1.56})}function c1(i,t,e,n,s){let r=[[0,0],[.27,0],[.295,.02],[.31,.12],[.31,.3],[.295,.375],[.26,.405],[0,.41]];i.add(t,new Fr(r.map(([o,a])=>new J(o,a)),40),i.accent("fabric"),n,0,s),e.shadows.push({pts:ah(n,s,.31,20),y0:0,y1:.41,core:.82,blur:.04})}function h1(i,t){let e=new se,n=1.26,s=2.05,r=3.35,o=1.33,a=-8,l=12,c=.062;i.add(e,i.rbox(.018,s,n,.006),i.accent("panelDark"),a+.009,o,r);let h=(n-.04-l*c)/(l-1),u=i.rbox(.026,s-.04,c,.008);for(let d=0;d<l;d++)i.add(e,u,i.accent("panel","fabric_light",{roughness:.9}),a+.018+.013,o,r-n/2+.02+c/2+d*(c+h));let f=q0(e,"style_panel");t.add(f)}function u1(i,t){let e=t.getObjectByName("tree_1");e&&e.traverse(n=>{n.isMesh&&n.material.name==="pot_white"&&(n.material=i.accent("pot","pot_white"))})}function f1(i,t,e,n,s){let r,o,a,l,c;e.kind==="round"?(o=e.cx,a=e.cz,l=c=e.r*2,r=new es().absarc(0,0,e.r,0,Math.PI*2,!1)):(o=(e.x0+e.x1)/2,a=(e.z0+e.z1)/2,l=e.x1-e.x0,c=e.z1-e.z0,r=td(l,c,e.r));let h={x0:o-l/2,x1:o+l/2,z0:a-c/2,z1:a+c/2},u=new na(r,40),f=u.attributes.position,d=u.attributes.uv;for(let g=0;g<d.count;g++)d.setXY(g,f.getX(g)/l+.5,f.getY(g)/c+.5);u.rotateX(-Math.PI/2);let p=new xe({name:`style_rug_${s}`,map:z0(e,h,n)});p.userData={accent:"rug"};let x=i.add(t,u,p,o,b0,a);x.userData.bakedName=`style_rug_${s}`;let m=r.getPoints(40).map(g=>[g.x,-g.y]);i.add(t,v1(m,b0),i.accent("rugEdge","fabric_light",{roughness:1,side:zn}),o,0,a)}function d1(i){return i.kind==="round"?{x0:i.cx-i.r,x1:i.cx+i.r,z0:i.cz-i.r,z1:i.cz+i.r}:{x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1}}function z0(i,t,e,n=null){let s=Math.round((t.x1-t.x0)*Vn),r=Math.round((t.z1-t.z0)*Vn);return ed(s,r,o=>{p1(o,s,r,i,t,e,n?I0:1),n&&(o.globalCompositeOperation="multiply",o.drawImage(V0(n,t),0,0,s,r),o.globalCompositeOperation="source-over")})}function p1(i,t,e,n,s,r,o){i.fillStyle="rgb(247,247,246)",i.fillRect(0,0,t,e),W0(i,t,e,7,5);let a=.18*Vn;i.strokeStyle="rgba(0,0,0,0.07)",i.lineWidth=1.5,i.beginPath(),n.kind==="round"?i.arc(t/2,e/2,t/2-a,0,Math.PI*2):M1(i,a,a,t-a*2,e-a*2,Math.max(2,n.r*Vn-a*.3)),i.stroke(),X0(i,r,s,o)}function k0(i,t=null){let e=Math.round((ee.x1-ee.x0)*Vn),n=Math.round((ee.z1-ee.z0)*Vn);return ed(e,n,s=>{t?s.drawImage(V0(t,ee),0,0,e,n):(s.fillStyle=`rgb(${A0.join(",")})`,s.fillRect(0,0,e,n)),W0(s,e,n,3,0),s.fillStyle="rgba(60,50,40,0.035)";for(let r=-8;r<=8;r+=1.6)r>ee.x0&&r<ee.x1&&s.fillRect(Math.round((r-ee.x0)*Vn),0,1,n);for(let r=-6;r<=6;r+=1.5)r>ee.z0&&r<ee.z1&&s.fillRect(0,Math.round((r-ee.z0)*Vn),e,1);X0(s,i,ee,t?I0:1)})}function H0(i){let t=new Map,e=m1(i);if(!e)return t;let n=(s,r)=>e(s,r).map((o,a)=>Math.min(255,o/A0[a]*255));for(let[s,r]of C0)t.set(`style_patch_${s}`,k0(r.layers,e)),r.rug&&t.set(`style_rug_${s}`,z0(r.rug,d1(r.rug),r.layers,n));return t}function m1(i){let s=Na(128,96),r=s.getContext("2d",{willReadFrequently:!0});try{r.drawImage(i,0,0,128,96)}catch{return null}let o=r.getImageData(0,0,128,96).data,a=(u,f)=>{let d=Math.min(127,Math.max(0,Math.floor((u+8)*8))),x=(Math.min(95,Math.max(0,Math.floor((6-f)*8)))*128+d)*4;return[o[x],o[x+1],o[x+2]]},l=[];for(let u=0;u<=1.0001;u+=.025)for(let f of[.18,.4]){let d=ee.x0+u*(ee.x1-.12-ee.x0),p=ee.z0+u*(ee.z1-ee.z0);for(let[x,m]of[[ee.x0-f,p],[d,ee.z0-f],[d,ee.z1+f]])l.push({x:x-5.5,z:m-2.3,c:a(x,m)})}let c=u=>u[0]*.3+u[1]*.55+u[2]*.15,h=null;for(let u=0;u<4&&l.length>=12;u++){h=[0,1,2].map(d=>g1(l,d));let f=h;l=l.filter(d=>c(d.c)>=c(w0(f,d.x,d.z))*.93)}return h&&((u,f)=>w0(h,u-5.5,f-2.3).map(d=>Math.max(0,Math.min(255,d))))}var G0=(i,t)=>[1,i,t,i*i,t*t,i*t],w0=(i,t,e)=>i.map(n=>G0(t,e).reduce((s,r,o)=>s+r*n[o],0));function g1(i,t){let n=Array.from({length:6},()=>new Array(7).fill(0));for(let s of i){let r=G0(s.x,s.z);for(let o=0;o<6;o++){for(let a=0;a<6;a++)n[o][a]+=r[o]*r[a];n[o][6]+=r[o]*s.c[t]}}for(let s=0;s<6;s++)n[s][s]+=1e-6;for(let s=0;s<6;s++){let r=s;for(let o=s+1;o<6;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);[n[s],n[r]]=[n[r],n[s]];for(let o=0;o<6;o++)if(o!==s){let a=n[o][s]/n[s][s];for(let l=s;l<=6;l++)n[o][l]-=a*n[s][l]}}return n.map((s,r)=>s[6]/s[r])}function V0(i,t){let n=Math.max(2,Math.round((t.x1-t.x0)*16)),s=Math.max(2,Math.round((t.z1-t.z0)*16)),r=Na(n,s),o=r.getContext("2d"),a=o.createImageData(n,s);for(let l=0,c=0;l<s;l++)for(let h=0;h<n;h++,c+=4){let u=i(t.x0+(h+.5)/16,t.z0+(l+.5)/16);a.data[c]=u[0],a.data[c+1]=u[1],a.data[c+2]=u[2],a.data[c+3]=255}return o.putImageData(a,0,0),r}function W0(i,t,e,n,s){let r=i.getImageData(0,0,t,e),o=r.data,a=$0(3);for(let l=0,c=0;l<e;l++){let h=s?l&1?s*.5:-s*.5:0;for(let u=0;u<t;u++,c+=4){let f=(a()-.5)*n+h;o[c]+=f,o[c+1]+=f,o[c+2]+=f}}i.putImageData(r,0,0)}function x1(i){let t=Math.round((ee.x1-ee.x0)*Ws),e=Math.round((ee.z1-ee.z0)*Ws),n=Na(t,e),s=Na(t,e),r=n.getContext("2d"),o=s.getContext("2d"),a=(l,c)=>[(l-ee.x0)*Ws,(c-ee.z0)*Ws];for(let l of i){if(l.flat)jf(r,l.pts,a,.07*Ws,`rgb(${$f})`);else if(l.y1>0){let c=[l.y0,l.y1].flatMap(h=>l.pts.map(([u,f])=>[u+S0[0]*h,f+S0[1]*h]));jf(r,Y0(c),a,(.035+.17*l.y1)*Ws,`rgb(${$f})`)}l.core&&jf(o,l.pts,a,(l.blur??.03)*Ws,`rgba(${$f},${l.core})`)}return{plume:n,ao:s}}function X0(i,t,e,n=1){let s=(ee.x0-e.x0)*Vn,r=(ee.z0-e.z0)*Vn,o=(ee.x1-ee.x0)*Vn,a=(ee.z1-ee.z0)*Vn;i.save(),i.imageSmoothingEnabled=!0,i.imageSmoothingQuality="high",i.globalAlpha=Jb*n,i.drawImage(t.plume,s,r,o,a),i.globalAlpha=n,i.drawImage(t.ao,s,r,o,a),i.restore()}function jf(i,t,e,n,s){let r=n>.5?2e4:0;i.save(),r?(i.shadowColor=s,i.shadowBlur=n,i.shadowOffsetX=r,i.fillStyle="#000"):i.fillStyle=s,i.beginPath(),t.forEach(([o,a],l)=>{let[c,h]=e(o,a);l?i.lineTo(c-r,h):i.moveTo(c-r,h)}),i.closePath(),i.fill(),i.restore()}function _1(){return ed(640,360,(i,t,e)=>{let n=i.createLinearGradient(0,0,0,e*.66);n.addColorStop(0,"#202020"),n.addColorStop(.7,"#8C8C8C"),n.addColorStop(1,"#B4B4B4"),i.fillStyle=n,i.fillRect(0,0,t,e);let s=i.createRadialGradient(t*.64,e*.58,0,t*.64,e*.58,e*.42);s.addColorStop(0,"rgba(255,255,255,0.95)"),s.addColorStop(.08,"rgba(255,255,255,0.75)"),s.addColorStop(.1,"rgba(255,255,255,0.3)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,t,e),[[.6,"#6E6E6E","#555555",.05],[.7,"#474747","#333333",.07],[.82,"#2A2A2A","#181818",.06]].forEach(([a,l,c,h],u)=>{let f=i.createLinearGradient(0,e*a,0,e);f.addColorStop(0,l),f.addColorStop(1,c),i.fillStyle=f,i.beginPath(),i.moveTo(0,e);for(let d=0;d<=t;d+=8)i.lineTo(d,e*(a+h*Math.sin(d/t*Math.PI*(1.3+u*.7)+u*1.9)+h*.4*Math.sin(d/t*Math.PI*4.1+u)));i.lineTo(t,e),i.closePath(),i.fill()});let o=i.createLinearGradient(0,0,t*.6,e);o.addColorStop(0,"rgba(255,255,255,0.06)"),o.addColorStop(.5,"rgba(255,255,255,0.015)"),o.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=o,i.fillRect(0,0,t,e)})}function q0(i,t){let e=new se;e.name=t,i.updateMatrixWorld(!0);let n=new Map,s=[];i.traverse(r=>{if(r.isMesh){if(r.material.map||r.userData.keep){s.push(r);return}n.has(r.material)||n.set(r.material,[]),n.get(r.material).push([r.geometry,r.matrixWorld])}});for(let[r,o]of n)e.add(new Dt(y1(o),r));for(let r of s)r.matrixWorld.decompose(r.position,r.quaternion,r.scale),r.removeFromParent(),e.add(r);return e}function y1(i){let t=i.map(([a,l])=>{let c=a.index?a.toNonIndexed():a.clone();for(let h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);return c.applyMatrix4(l)}),e=t.reduce((a,l)=>a+l.attributes.position.count,0),n=new Float32Array(e*3),s=new Float32Array(e*3),r=0;for(let a of t)n.set(a.attributes.position.array,r),s.set(a.attributes.normal.array,r),r+=a.attributes.position.count*3,a.dispose();let o=new me;return o.setAttribute("position",new Ue(n,3)),o.setAttribute("normal",new Ue(s,3)),o.computeBoundingSphere(),o}function v1(i,t){let e=[],n=[],s=i.reduce((a,l)=>a+l[0],0)/i.length,r=i.reduce((a,l)=>a+l[1],0)/i.length;for(let a=0;a<i.length;a++){let[l,c]=i[a],[h,u]=i[(a+1)%i.length],f=h-l,d=u-c;if(Math.hypot(f,d)<1e-6)continue;let p=d,x=-f;p*((l+h)/2-s)+x*((c+u)/2-r)<0&&(p=-p,x=-x);let m=Math.hypot(p,x);p/=m,x/=m;let g=[l,0,c],y=[l,t,c],E=[h,0,u],v=[h,t,u],b=-d*p+f*x>0?[g,E,v,g,v,y]:[g,v,E,g,y,v];for(let S of b)e.push(...S),n.push(p,0,x)}let o=new me;return o.setAttribute("position",new $t(e,3)),o.setAttribute("normal",new $t(n,3)),o}function td(i,t,e){let n=new es,s=i/2-e,r=t/2-e;return n.moveTo(-s,-t/2),n.lineTo(s,-t/2),n.absarc(s,-r,e,-Math.PI/2,0,!1),n.lineTo(i/2,r),n.absarc(s,r,e,0,Math.PI/2,!1),n.lineTo(-s,t/2),n.absarc(-s,r,e,Math.PI/2,Math.PI,!1),n.lineTo(-i/2,-r),n.absarc(-s,-r,e,Math.PI,Math.PI*1.5,!1),n}function M1(i,t,e,n,s,r){i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function Xs(i,t,e,n,s){let r=Math.cos(s),o=Math.sin(s);return[i+e*r+n*o,t-e*o+n*r]}function vn(i,t,e,n,s=0){return[[-e/2,-n/2],[e/2,-n/2],[e/2,n/2],[-e/2,n/2]].map(([r,o])=>Xs(i,t,r,o,s))}function ah(i,t,e,n){return Array.from({length:n},(s,r)=>[i+e*Math.cos(r/n*Math.PI*2),t+e*Math.sin(r/n*Math.PI*2)])}function Y0(i){let t=i.slice().sort((r,o)=>r[0]-o[0]||r[1]-o[1]),e=(r,o,a)=>(o[0]-r[0])*(a[1]-r[1])-(o[1]-r[1])*(a[0]-r[0]),n=[],s=[];for(let r of t){for(;n.length>=2&&e(n[n.length-2],n[n.length-1],r)<=0;)n.pop();n.push(r)}for(let r of t.reverse()){for(;s.length>=2&&e(s[s.length-2],s[s.length-1],r)<=0;)s.pop();s.push(r)}return n.slice(0,-1).concat(s.slice(0,-1))}function Na(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function ed(i,t,e){let n=Na(i,t);e(n.getContext("2d",{willReadFrequently:!0}),i,t);let s=new ti(n);return s.colorSpace=te,s.anisotropy=8,s}function $0(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var S1=20;var Xn=.36,ki=1.6;var zi=new J(9.05,-2.6),b1=/^(desk|screen|lounge)_(\d{2})$/,E1=/^lamp_(\d{2})$/,lh=["floor_open","floor_closed","roof","elevator_shaft","elevator_cabin"];async function j0(i){let t=null;try{if(new URLSearchParams(location.search).get("placeholder")==="1")throw new Error("?placeholder=1");let o=await Promise.race([new to().loadAsync(`${i}/office.glb`),new Promise((a,l)=>setTimeout(()=>l(new Error("timeout")),25e3))]);o.scene.updateMatrixWorld(!0),o.scene.getObjectByName("floor_open")?t=o.scene:console.info("[office] office.glb has no floor_open (v1 file): using the procedural v2 placeholder")}catch(o){console.warn("[office] office.glb failed to load, using the procedural placeholder:",o.message)}let e=!t||lh.some(o=>!t.getObjectByName(o))?J0():null,n={},s=[];for(let o of lh){let a=t&&t.getObjectByName(o);a?n[o]=a:(n[o]=e.templates[o],s.push(o))}if(t){for(let o of lh)s.includes(o)||T1(n[o]);s.length&&console.warn("[office] placeholder used for missing nodes:",s.join(", "))}let r=Z0(n.floor_open);if(r.desks.filter(Boolean).length<S1){console.warn("[office] floor_open has fewer than 20 desk_NN empties: using placeholder floor_open");let o=e||J0();return n.floor_open=o.templates.floor_open,K0(n,Z0(n.floor_open),o.nightMaps,"placeholder")}return K0(n,r,e?e.nightMaps:new Map,t?s.length?"glb+placeholder":"glb":"placeholder")}function K0(i,t,e,n){let s=null;try{new URLSearchParams(location.search).get("floorstyle")!=="0"&&(s=F0(i.floor_open,t.lounges))}catch(r){console.warn("[office] floor styles skipped:",r.message)}return{templates:i,spots:t,nightMaps:e,source:n,style:s}}function T1(i){let t=new Map;i.traverse(e=>{if(!e.isMesh)return;let n=w1(e);if(!n)return;e.userData.bakedName=n;let s=e.material;if(!t.has(s)){let r=s.map||s.emissiveMap||s.lightMap||null;r&&(r.colorSpace=te),t.set(s,new xe({map:r,color:r?16777215:s.color,name:s.name}))}e.material=t.get(s)})}function w1(i){for(let t=i;t;t=t.parent)if(t.name&&t.name.startsWith("baked_"))return t.name;return null}function Z0(i){let t={desks:[],screens:[],lounges:[],lamps:[]};i.updateMatrixWorld(!0);let e=new Wt().copy(i.matrixWorld).invert(),n=new Wt,s=new I,r=new on,o=new I,a=new I;return i.traverse(l=>{let c=b1.exec(l.name),h=E1.exec(l.name);if(!c&&!h)return;if(n.multiplyMatrices(e,l.matrixWorld).decompose(s,r,o),h){t.lamps[Number(h[1])-1]=s.clone();return}a.set(0,0,1).applyQuaternion(r);let u={pos:s.clone(),yaw:Math.atan2(a.x,a.z)};(c[1]==="desk"?t.desks:c[1]==="screen"?t.screens:t.lounges)[Number(c[2])-1]=u}),t}var nd=.42,Q0=[-3.4,.8],tg=[-5.7,-3.9,-2.1,-.3,1.5],ch=-2.1,eg=8.8,ng=1.1,ig=[[-5,-3.4],[-2.1,-3.4],[.8,-3.4],[-5,.8],[-2.1,.8],[.8,.8]];function Mn(i,t=.7,e=0,n=""){return new Oe({color:i,roughness:t,metalness:e,name:n})}function _e(i,t,e,n,s,r,o,a){let l=new Dt(new ln(e,n,s),t);return l.position.set(r,o,a),i.add(l),l}function Wn(i,t,e,n,s,r,o,a,l=28){let c=new Dt(new wn(e,n,s,l),t);return c.position.set(r,o,a),i.add(c),c}function io(i,t,e,n,s,r=0){let o=new ge;return o.name=t,o.position.set(e,n,s),o.rotation.y=r,i.add(o),o}function so(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new ti(n);return s.colorSpace=te,s.anisotropy=8,s}function J0(){let i={white:Mn(16053232,.8),oak:Mn(13215100,.6),black:Mn(1842206,.45,.3),fabric:Mn(14341839,1),laptop:Mn(13225168,.35,.75),sofa:Mn(13486529,.95),armchair:Mn(3815998,.8),pot:Mn(16184818,.55),leaf1:Mn(3963719,.75),leaf2:Mn(5937752,.75),leaf3:Mn(3107390,.75),trunk:Mn(7032634,.8),mug:Mn(16777215,.4),counter:Mn(15394785,.6),glass:new Oe({color:14083310,roughness:.05,transparent:!0,opacity:.14,side:Ke,depthWrite:!1}),shaftGlass:new Oe({color:14083310,roughness:.05,transparent:!0,opacity:.16,side:Ke,depthWrite:!1})},t=()=>new Oe({name:"night_lamp",color:2762532,emissive:16760944,emissiveIntensity:0,roughness:.5}),e=()=>new Oe({name:"night_screen",color:1316635,emissive:10473727,emissiveIntensity:0,roughness:.3}),n=new Map,s={},r=new se;r.name="floor_open",s.floor_open=r,_e(r,i.white,16.4,Xn,12.4,0,-Xn/2,0).name="slab";let o=A1();n.set("baked_floor",o.night);let a=new Dt(new Fe(16,12).rotateX(-Math.PI/2),new xe({map:o.day,name:"baked_floor"}));a.name="baked_floor",a.position.y=.002,r.add(a),_e(r,i.white,.2,2.7,12.4,-8.1,1.35,0);let l=R1();n.set("baked_wall_left",l.night);let c=new Dt(new Fe(12,2.7).rotateY(Math.PI/2),new xe({map:l.day,name:"baked_wall_left"}));c.name="baked_wall_left",c.position.set(-7.995,1.35,0),r.add(c);let h=new Dt(new Fe(16,2.7),i.glass);h.position.set(0,1.35,-6),r.add(h);for(let S=-8;S<=8.001;S+=2)_e(r,i.black,.07,2.7,.08,S,1.35,-6);_e(r,i.black,16.2,.07,.1,0,2.7,-6),_e(r,i.black,16,.08,.1,0,.04,-6);let u=(S,A,_,T,R)=>{let P=new Dt(new Fe(A,_).rotateY(Math.PI/2),new xe({color:1382171,name:S}));return P.name=S,P.position.set(-7.96,R,T),r.add(P),P};u("wall_screen",2.6,1.46,-4.3,1.5),u("task_board",3,1.5,.1,1.45);for(let[S,A,_,T]of[[2.68,1.54,-4.3,1.5],[3.08,1.58,.1,1.45]])_e(r,i.black,.03,A,S,-7.985,T,_);let f=[];for(let S=0;S<2;S++){let A=Q0[S];_e(r,i.oak,eg,.05,ng,ch,.725,A);for(let _ of[-4.1,-1.4,1.4,4.1])for(let T of[-1,1])_e(r,i.black,.05,.7,.05,ch+_,.35,A+T*.48);for(let _ of[-4.1,4.1])_e(r,i.black,.04,.04,.96,ch+_,.1,A);for(let _=0;_<10;_++){let T=S*10+_+1,R=Math.floor(_/2),P=_%2===0,L=tg[R],B=P?-1:1;Wn(r,i.fabric,.26,.29,nd,L,nd/2,A+B*1.05),io(r,`desk_${String(T).padStart(2,"0")}`,L,nd,A+B*1.05,P?0:Math.PI);let N=new se;N.position.set(L,.75,A+B*.3),N.rotation.y=P?Math.PI:0,_e(N,i.laptop,.32,.012,.22,0,.006,0);let O=new se;O.position.set(0,.012,-.11),O.rotation.x=-.3,_e(O,i.laptop,.32,.21,.008,0,.105,0);let X=new Dt(new Fe(.29,.18),e());X.name=`laptop_screen_${String(T).padStart(2,"0")}`,X.position.set(0,.105,.0045),O.add(X),N.add(O),r.add(N),f.push([T,X,P]),_%3===1&&Wn(r,i.mug,.04,.035,.09,L+.38,.795,A+B*.1,14)}}r.updateMatrixWorld(!0);for(let[S,A]of f){let _=A.getWorldPosition(new I),T=A.getWorldQuaternion(new on);io(r,`screen_${String(S).padStart(2,"0")}`,_.x,_.y,_.z).quaternion.copy(T)}ig.forEach(([S,A],_)=>{let T=new se;T.position.set(S,2.05,A),Wn(T,i.black,.09,.2,.2,0,.06,0,24),Wn(T,i.black,.008,.008,.9,0,.6,0,6);let R=new Dt(new Ps(.075,16,12),t());R.position.y=-.07,T.add(R),r.add(T),io(r,`lamp_${String(_+1).padStart(2,"0")}`,S,1.95,A)}),_e(r,i.sofa,2.7,.42,.95,5.9,.21,.05),_e(r,i.sofa,2.7,.52,.24,5.9,.68,-.36);for(let S of[-1,1])_e(r,i.sofa,.26,.62,.95,5.9+S*1.22,.31+.1,.05);for(let S=0;S<3;S++)_e(r,i.sofa,.8,.1,.66,5.05+S*.85,.47,.12);[[5.05,0],[5.9,1],[6.75,2]].forEach(([S],A)=>io(r,`lounge_0${A+1}`,S,.52,.12,0));let d=(S,A,_)=>{let T=new se;T.position.set(S,0,2.1),T.rotation.y=A,_e(T,i.armchair,.9,.38,.9,0,.19,0),_e(T,i.armchair,.2,.55,.9,-.35,.55,0);for(let R of[-1,1])_e(T,i.armchair,.9,.2,.14,0,.5,R*.38);r.add(T),io(r,_,S,.42,2.1,A)};d(4.15,Math.PI/2,"lounge_04"),d(7.65,-Math.PI/2,"lounge_05"),Wn(r,i.oak,.6,.6,.04,5.9,.38,2.1,40),Wn(r,i.black,.04,.04,.36,5.9,.18,2.1,10),_e(r,i.counter,3.6,1,.6,6,.5,-5.6),_e(r,i.oak,3.7,.05,.7,6,1.025,-5.6),_e(r,i.black,.4,.4,.3,4.9,1.25,-5.7),Wn(r,i.mug,.04,.035,.09,5.5,1.095,-5.5,14),Wn(r,i.mug,.04,.035,.09,5.65,1.095,-5.45,14),Wn(r,i.black,.2,.2,.05,6.1,.66,-4.8,20),Wn(r,i.black,.03,.03,.64,6.1,.33,-4.8,8),io(r,"lounge_06",6.1,.68,-4.8,0);let p=(S,A,_)=>{let T=new se;T.position.set(S,0,A),T.scale.setScalar(_),Wn(T,i.pot,.3,.22,.6,0,.3,0),Wn(T,i.trunk,.04,.05,.9,0,.9,0,8),[[0,1.55,0,.5,i.leaf1],[.3,1.35,.15,.36,i.leaf2],[-.28,1.4,-.12,.34,i.leaf3],[.05,1.95,.05,.34,i.leaf2]].forEach(([R,P,L,B,N])=>{let O=new Dt(new ea(B,2),N);O.position.set(R,P,L),T.add(O)}),r.add(T)};p(-7.2,5.2,1.25),p(7.6,-3.4,1),p(7.5,5,1.2);let x=new se;x.name="floor_closed",s.floor_closed=x,_e(x,i.white,16.4,Xn,12.4,0,-Xn/2,0);let m=C1(),g=new Oe({name:"night_windows",map:m.diffuse,emissiveMap:m.emissive,emissive:16777215,emissiveIntensity:0,roughness:.22,metalness:.25});m.diffuse.wrapS=m.emissive.wrapS=On,[[0,6.2,0,16.4],[Math.PI,-6.2,0,16.4],[Math.PI/2,0,8.2,12.4],[-Math.PI/2,0,-8.2,12.4]].forEach(([S,A,_,T],R)=>{let P=new Fe(T,1.24),L=P.attributes.uv,B=R*.29%1;for(let O=0;O<L.count;O++)L.setX(O,L.getX(O)*(T/25.6)+B);let N=new Dt(P,g);N.rotation.y=S,N.position.set(S===Math.PI/2?8.2:S===-Math.PI/2?-8.2:0,.62,A),x.add(N)});for(let S of[-1,1])for(let A of[-1,1])_e(x,i.counter,.12,1.24,.12,S*8.2,.62,A*6.2);let E=new se;E.name="roof",s.roof=E,_e(E,i.white,16.4,Xn,12.4,0,Xn/2,0);for(let[S,A,_,T]of[[16.4,.16,0,6.12],[16.4,.16,0,-6.12],[.16,12.4,8.12,0],[.16,12.4,-8.12,0]])_e(E,i.white,S,.34,A,_,Xn+.17,T);for(let[S,A,_,T,R]of[[1.6,.8,1.1,-4,-2],[1.6,.8,1.1,-1.8,-2],[1.2,.6,1.2,4,2.5],[2.2,1.6,2,5.5,-3.5]])_e(E,i.counter,S,A,_,T,Xn+A/2,R),_e(E,i.black,S*.8,.05,_*.8,T,Xn+A+.02,R);let v=new se;v.name="elevator_shaft",v.position.set(zi.x,0,zi.y),s.elevator_shaft=v;for(let S of[-1,1])for(let A of[-1,1])_e(v,i.black,.06,1,.06,S*.72,.5,A*.72);for(let[S,A,_]of[[0,0,.72],[Math.PI,0,-.72],[Math.PI/2,.72,0],[-Math.PI/2,-.72,0]]){let T=new Dt(new Fe(1.44,1),i.shaftGlass);T.rotation.y=S,T.position.set(A,.5,_),v.add(T)}let b=new se;b.name="elevator_cabin",b.position.set(zi.x,0,zi.y),s.elevator_cabin=b,_e(b,i.counter,1.3,.06,1.3,0,.03,0);for(let S of[-1,1])for(let A of[-1,1])_e(b,i.black,.05,2.2,.05,S*.625,1.1,A*.625);for(let[S,A,_,T]of[[1.3,.05,0,.625],[1.3,.05,0,-.625],[.05,1.3,.625,0],[.05,1.3,-.625,0]])_e(b,i.black,S,.05,A,_,2.175,T);for(let[S,A,_]of[[0,0,.625],[Math.PI,0,-.625],[Math.PI/2,.625,0],[-Math.PI/2,-.625,0]]){let T=new Dt(new Fe(1.25,2.1),i.shaftGlass);T.rotation.y=S,T.position.set(A,1.1,_),b.add(T)}for(let S of lh)s[S].traverse(A=>{A.isMesh&&!A.userData.bakedName&&/^baked_/.test(A.name)&&(A.userData.bakedName=A.name)});return{templates:s,nightMaps:n}}var qn=100,hn=i=>(i+8)*qn,un=i=>(i+6)*qn;function A1(){let i=16*qn,t=12*qn,e=[];for(let r of Q0){e.push(["rect",ch,r,eg+.2,ng+.1]);for(let o=0;o<10;o++)e.push(["circle",tg[Math.floor(o/2)],r+(o%2?1.05:-1.05),.3,.3])}e.push(["rect",5.9,.05,2.9,1],["rect",4.15,2.1,.95,.95],["rect",7.65,2.1,.95,.95],["circle",5.9,2.1,.62,.62],["rect",6,-5.6,3.7,.7],["circle",-7.2,5.2,.4,.4],["circle",7.6,-3.4,.35,.35],["circle",7.5,5,.4,.4]);let n=so(i,t,r=>{r.fillStyle="#F0ECE5",r.fillRect(0,0,i,t);let o=r.createLinearGradient(0,0,i,t);o.addColorStop(0,"#E9E4DC"),o.addColorStop(1,"#F6F3EE"),r.fillStyle=o,r.fillRect(0,0,i,t),r.fillStyle="#DDD9D0",r.beginPath(),r.arc(hn(5.9),un(1.3),2.25*qn,0,7),r.fill(),r.fillStyle="#E6E2DA",r.beginPath(),r.arc(hn(5.9),un(1.3),1.75*qn,0,7),r.fill(),r.save(),r.filter="blur(18px)";for(let c=-8;c<8;c+=2)r.fillStyle="rgba(255,250,238,0.55)",r.beginPath(),r.moveTo(hn(c+.15),un(-6)),r.lineTo(hn(c+1.85),un(-6)),r.lineTo(hn(c+1.85+5.2),un(-6+3.9)),r.lineTo(hn(c+.15+5.2),un(-6+3.9)),r.fill();r.restore(),id(r,e,"rgba(70,62,52,0.30)",.45,.55,14),id(r,e,"rgba(60,52,44,0.28)",0,0,5);let a=r.createLinearGradient(0,0,130,0);a.addColorStop(0,"rgba(90,80,70,0.30)"),a.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=a,r.fillRect(0,0,130,t);let l=r.createLinearGradient(0,0,0,90);l.addColorStop(0,"rgba(90,80,70,0.18)"),l.addColorStop(1,"rgba(90,80,70,0)"),r.fillStyle=l,r.fillRect(0,0,i,90)}),s=so(i,t,r=>{r.fillStyle="#222A3E",r.fillRect(0,0,i,t),r.fillStyle="#2A3248",r.beginPath(),r.arc(hn(5.9),un(1.3),2.25*qn,0,7),r.fill(),r.save(),r.filter="blur(26px)";for(let a=-8;a<8;a+=2)r.fillStyle="rgba(120,150,230,0.10)",r.beginPath(),r.moveTo(hn(a+.15),un(-6)),r.lineTo(hn(a+1.85),un(-6)),r.lineTo(hn(a+1.85+5.2),un(-6+3.9)),r.lineTo(hn(a+.15+5.2),un(-6+3.9)),r.fill();r.restore();for(let[a,l]of ig.concat([[5.9,1.2]])){let c=2.3*qn,h=r.createRadialGradient(hn(a+.3),un(l+.4),0,hn(a+.3),un(l+.4),c);h.addColorStop(0,"rgba(255,196,130,0.5)"),h.addColorStop(1,"rgba(255,196,130,0)"),r.fillStyle=h,r.fillRect(hn(a+.3)-c,un(l+.4)-c,c*2,c*2)}id(r,e,"rgba(5,7,14,0.55)",.35,.45,12);let o=r.createLinearGradient(0,0,130,0);o.addColorStop(0,"rgba(0,0,0,0.45)"),o.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=o,r.fillRect(0,0,130,t)});return{day:n,night:s}}function id(i,t,e,n,s,r){i.save(),i.filter=`blur(${r}px)`,i.fillStyle=e;for(let[o,a,l,c,h]of t)o==="rect"?i.fillRect(hn(a+n-c/2),un(l+s-h/2),c*qn,h*qn):(i.beginPath(),i.ellipse(hn(a+n),un(l+s),c*qn,h*qn,0,0,7),i.fill());i.restore()}function R1(){let e=so(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#F7F6F3"),r.addColorStop(.7,"#F2F0EC"),r.addColorStop(1,"#E2DFD9"),s.fillStyle=r,s.fillRect(0,0,1200,270);let o=s.createLinearGradient(1060,0,1200,0);o.addColorStop(0,"rgba(120,110,100,0)"),o.addColorStop(1,"rgba(120,110,100,0.22)"),s.fillStyle=o,s.fillRect(1060,0,140,270)}),n=so(1200,270,s=>{let r=s.createLinearGradient(0,0,0,270);r.addColorStop(0,"#242A3A"),r.addColorStop(.7,"#2A2F3E"),r.addColorStop(1,"#161A26"),s.fillStyle=r,s.fillRect(0,0,1200,270);for(let o of[300,700]){let a=s.createRadialGradient(o,120,0,o,120,320);a.addColorStop(0,"rgba(255,190,120,0.16)"),a.addColorStop(1,"rgba(255,190,120,0)"),s.fillStyle=a,s.fillRect(o-320,0,640,270)}});return{day:e,night:n}}function C1(){let n=I1(7),s=so(1024,64,(o,a,l)=>{let c=o.createLinearGradient(0,0,0,l);c.addColorStop(0,"#9AA7B5"),c.addColorStop(.5,"#6E7C8C"),c.addColorStop(1,"#58687A"),o.fillStyle=c,o.fillRect(0,0,a,l),o.fillStyle="#E8EAED";for(let h=0;h<=16;h++)o.fillRect(h*64-2,0,4,l);o.fillRect(0,0,a,4),o.fillRect(0,l-5,a,5),o.fillRect(0,l*.55,a,2)}),r=so(1024,64,(o,a,l)=>{o.fillStyle="#000",o.fillRect(0,0,a,l);for(let c=0;c<16;c++){if(n()>.42)continue;let h=.45+n()*.35;o.fillStyle=`rgb(${Math.round(255*h)},${Math.round(196*h)},${Math.round(120*h)})`,o.fillRect(c*64+5,8,54,l*.55-10),o.fillRect(c*64+5,l*.55+5,54,l*.45-14)}});return{diffuse:s,emissive:r}}function I1(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var ls=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,en=class{constructor(t=0,e=.5){this.x=t,this.v=0,this.target=t,this.response=e,this.delay=0,this.pending=null}to(t,e=0){return e>0?(this.pending=t,this.delay=e):(this.target=t,this.pending=null),this}snap(t){return this.x=this.target=t,this.v=0,this.pending=null,this}step(t){this.pending!==null&&(this.delay-=t,this.delay<=0&&(this.target=this.pending,this.pending=null));let e=ls?Math.min(this.response,.12):this.response,n=2*Math.PI/Math.max(e,.02),s=this.x-this.target,r=this.v+n*s,o=Math.exp(-n*t);return this.x=this.target+(s+r*t)*o,this.v=(this.v-n*r*t)*o,Math.abs(this.x-this.target)<1e-5&&Math.abs(this.v)<1e-5&&(this.x=this.target,this.v=0),this.x}get settled(){return this.x===this.target&&this.v===0&&this.pending===null}},Ae=(i,t,e)=>Math.min(e,Math.max(t,i)),si=(i,t,e)=>{let n=Ae((e-i)/(t-i),0,1);return n*n*(3-2*n)},Da=(i,t,e)=>i+(t-i)*e;var Yn='Inter, system-ui, -apple-system, "Segoe UI", sans-serif',sg={working:"#34C759",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF",idle:"#A1A1A6"},rg={waiting_user:0,error:0,stuck:0,working:1,done:2,idle:3},P1=/^tsk-\d+$/i,od=!1,lg=(async()=>{try{document.fonts&&await Promise.race([Promise.all([document.fonts.load("600 24px Inter","Today Tasks 0123456789"),document.fonts.load("500 24px Inter","Working events"),document.fonts.load("700 24px Inter","0123456789")]).then(()=>document.fonts.ready),new Promise(i=>setTimeout(i,2500))])}catch{}od=!0})();function og(i){let t=(i.task||"").trim();return t&&!P1.test(t)?t:(i.step||"").trim()}function cg(i){try{let t=i?new Date(i):new Date,e=new Intl.DateTimeFormat("en-GB",{timeZone:"Europe/Sofia",hour:"2-digit",hour12:!1}).format(t);return Number(e)%24}catch{return new Date().getHours()}}function ag(i,t){let e=document.createElement("canvas");e.width=i,e.height=t;let n=new ti(e);return n.colorSpace=te,n.anisotropy=8,n.minFilter=Rn,n.generateMipmaps=!0,{c:e,g:e.getContext("2d"),tex:n}}function hh(i,t,e,n,s,r){i.beginPath(),i.moveTo(t+r,e),i.arcTo(t+n,e,t+n,e+s,r),i.arcTo(t+n,e+s,t,e+s,r),i.arcTo(t,e+s,t,e,r),i.arcTo(t,e,t+n,e,r),i.closePath()}function L1(i,t,e,n){let s=String(t).split(/\s+/).filter(Boolean),r=[],o="";for(let a=0;a<s.length;a++){let l=o?`${o} ${s[a]}`:s[a];if(i.measureText(l).width<=e||!o?o=l:(r.push(o),o=s[a]),r.length===n)break}if(r.length<n&&o&&r.push(o),r.length===n&&s.join(" ")!==r.join(" ")){let a=r[n-1];for(;a.length>1&&i.measureText(`${a}\u2026`).width>e;)a=a.slice(0,-1);r[n-1]=`${a.replace(/[\s,.;:]+$/,"")}\u2026`}return r}var uh=class{constructor(t,e){this.screen=t?{mesh:t,...ag(1536,864),S:1.6,W:960,H:540}:null,this.board=e?{mesh:e,...ag(1800,900),S:1.8,W:1e3,H:500}:null;for(let n of[this.screen,this.board])n&&(n.mat=new xe({map:n.tex,name:n.mesh.name}),n.mesh.material=n.mat,n.drawn=null);this.screen&&(this.screen.mat.toneMapped=!1),this.sig="",this.data=null,this.accent=null,this.lastDraw=-1e9,this.dirty=!1,this.fontsAtDraw=!1}get materials(){return[this.screen?.mat,this.board?.mat].filter(Boolean)}setData(t){let e=this.signature(t);this.data=t,e!==this.sig&&(this.sig=e,this.dirty=!0)}setAccent(t){t!==this.accent&&(this.accent=t,this.dirty=!0,this.lastDraw=-1e9)}accentDot(t,e,n,s,r,o){t.fillText(e,n,s);let a=t.measureText(e).width;return t.fillStyle=this.accent,t.beginPath(),t.arc(n+a+o*1.3,r,o*.42,0,7),t.fill(),n+a+o*2.6}signature(t){let e=[t.floorName,t.hour,t.now];for(let n of t.bots)e.push(n.id,n.effective_status||n.status,og(n),n.color,n.today?.events,n.today?.tasks_done,n.today?.working_min,(n.today?.hourly||[]).join(","));return e.join("|")}tick(t,e){if(this.data&&(this.dirty||!this.fontsAtDraw&&od)&&t-this.lastDraw>1e3&&(this.lastDraw=t,this.dirty=!1,this.fontsAtDraw=od,this.screen&&this.drawScreen(this.data),this.board&&this.drawBoard(this.data)),this.screen){let n=.86*(1-.84*e);this.screen.mat.color.setRGB(n,n,n)}if(this.board){let n=1-.46*e;this.board.mat.color.setRGB(n,n*.97,n*.93)}}drawScreen(t){let{g:e,tex:n,S:s,W:r,H:o}=this.screen;e.setTransform(s,0,0,s,0,0);let a=e.createLinearGradient(0,0,0,o);a.addColorStop(0,"#14171C"),a.addColorStop(1,"#0B0D10"),e.fillStyle=a,e.fillRect(0,0,r,o);let l=e.createRadialGradient(r*.2,0,0,r*.2,0,r*.7);l.addColorStop(0,"rgba(52,199,89,0.10)"),l.addColorStop(1,"rgba(52,199,89,0)"),e.fillStyle=l,e.fillRect(0,0,r,o);let c=t.bots,h=c.filter(L=>(L.effective_status||L.status)==="working").length,u=sd(c,L=>L.today?.events),f=sd(c,L=>L.today?.tasks_done),d=sd(c,L=>L.today?.working_min)/60,p=new Array(24).fill(0);for(let L of c)for(let B=0;B<24;B++)p[B]+=Number(L.today?.hourly?.[B])||0;e.textBaseline="alphabetic",e.fillStyle="#8E8E93",e.font=`500 32px ${Yn}`;let x;this.accent?x=this.accentDot(e,"Today",44,62,51,20):(e.fillText("Today \xB7 ",44,62),x=44+e.measureText("Today \xB7 ").width),e.fillStyle="#F5F5F7",e.font=`650 40px ${Yn}`,e.fillText(rd(e,t.floorName||"",744-x),x,62),e.fillStyle="#34C759",e.beginPath(),e.arc(r-52,50,7,0,7),e.fill(),e.fillStyle="rgba(52,199,89,0.25)",e.beginPath(),e.arc(r-52,50,14,0,7),e.fill();let m=[[`${h} of ${c.length}`,"working now"],[String(u),"events today"],[String(f),"tasks done"],[d.toFixed(1),"hours worked"]],g=205,y=14,E=44,v=100;m.forEach(([L,B],N)=>{let O=E+N*(g+y);e.fillStyle="rgba(255,255,255,0.065)",hh(e,O,v,g,108,18),e.fill(),e.fillStyle=N===0?"#34C759":"#F5F5F7",e.font=`700 42px ${Yn}`,e.fillText(L,O+20,v+55),e.fillStyle="#8E8E93",e.font=`500 17px ${Yn}`,e.fillText(B,O+20,v+86)});let b=44,S=r-88,A=250,_=220;e.fillStyle="#8E8E93",e.font=`500 17px ${Yn}`,e.fillText("Events by hour",b,A-4);let T=Math.max(1,...p),R=S/24,P=R*.62;for(let L=0;L<24;L++){let B=b+L*R+(R-P)/2,N=p[L]>0?Math.max(8,p[L]/T*(_-20)):6,O=A+_-N,X=L===t.hour;e.save(),X&&(e.shadowColor="rgba(52,199,89,0.85)",e.shadowBlur=18),e.fillStyle=X?"#34C759":L>t.hour?"rgba(255,255,255,0.08)":p[L]>0?"rgba(52,199,89,0.55)":"rgba(255,255,255,0.10)",hh(e,B,O,P,N,Math.min(5,P/2)),e.fill(),e.restore()}e.fillStyle="#6E6E73",e.font=`500 15px ${Yn}`,e.textAlign="center";for(let L of[0,6,12,18])e.fillText(String(L).padStart(2,"0"),b+L*R+R/2,A+_+26);e.fillText("24",b+23*R+R/2+4,A+_+26),e.textAlign="left",n.needsUpdate=!0}drawBoard(t){let{g:e,tex:n,S:s,W:r,H:o}=this.board;e.setTransform(s,0,0,s,0,0),e.fillStyle="#F1F0EC",e.fillRect(0,0,r,o),e.fillStyle="#FAF9F6",e.fillRect(0,0,r,68),e.fillStyle="#E3E0D9",e.fillRect(0,68,r,2),e.fillStyle="#1D1D1F",e.font=`700 34px ${Yn}`;let a;this.accent?a=this.accentDot(e,"Tasks",36,49,37,20):(e.fillText("Tasks",36,49),a=36+e.measureText("Tasks ").width),e.fillStyle="#6E6E73",e.font=`600 26px ${Yn}`,e.fillText(`${this.accent?"":"\xB7 "}${rd(e,t.floorName||"",420)}`,a,49);let l=[...t.bots].sort((g,y)=>(rg[g.effective_status||g.status]??3)-(rg[y.effective_status||y.status]??3)||String(g.name).localeCompare(String(y.name))),c=l.slice(0,8),h=l.length-c.length;h>0&&(e.textAlign="right",e.fillStyle="#515154",e.font=`700 28px ${Yn}`,e.fillText(`+${h}`,r-36,49),e.textAlign="left"),c.length||(e.fillStyle="#8E8E93",e.font=`600 28px ${Yn}`,e.fillText("Nobody on this floor yet",36,160));let u=4,f=30,d=16,p=90,x=(r-f*2-d*(u-1))/u,m=(o-p-28-d)/2;c.forEach((g,y)=>{let E=f+y%u*(x+d),v=p+Math.floor(y/u)*(m+d),b=g.effective_status||g.status;e.save(),e.shadowColor="rgba(40,36,30,0.18)",e.shadowBlur=14,e.shadowOffsetY=3,e.fillStyle="#FFFFFF",hh(e,E,v,x,m,14),e.fill(),e.restore(),e.fillStyle=g.color||"#A1A1A6",hh(e,E+10,v+12,9,m-24,4.5),e.fill(),e.fillStyle=sg[b]||sg.idle,e.beginPath(),e.arc(E+x-22,v+26,8,0,7),e.fill(),e.fillStyle="#1D1D1F",e.font=`700 25px ${Yn}`,e.fillText(rd(e,g.name||"",x-76),E+32,v+36),e.fillStyle="#3A3A3C",e.font=`600 21px ${Yn}`,L1(e,og(g)||"\u2014",x-52,3).forEach((A,_)=>e.fillText(A,E+32,v+72+_*28))}),n.needsUpdate=!0}};function sd(i,t){let e=0;for(let n of i)e+=Number(t(n))||0;return e}function rd(i,t,e){let n=String(t);if(i.measureText(n).width<=e)return n;for(;n.length>1&&i.measureText(`${n}\u2026`).width>e;)n=n.slice(0,-1);return`${n.trimEnd()}\u2026`}var Fa=20,ro=.14,hg=.4,N1=7,D1=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,F1=2.2,ad=[.2,.26,.42];function U1(i,t){return new Ls().loadAsync(`${i}/night/${encodeURIComponent(t)}.jpg`).then(e=>(e.flipY=!1,e.colorSpace=te,e.anisotropy=8,e)).catch(()=>null)}var qs=class{constructor(t,e,n){this.b=t,this.kind=n,this.root=new se,this.root.name=`${n}-instance`,this.obj=e.clone(!0),this.root.add(this.obj),this.alpha=1,this.mats=[],this.textures=[],this.screens=[],this.walls=null,this.floorId=null,n!=="shaft"&&n!=="cabin"&&this.obj.position.set(0,0,0);let s=new Map,r=Math.random();if(this.obj.traverse(o=>{if(!o.isMesh)return;let l=(Array.isArray(o.material)?o.material:[o.material]).map(h=>{let u=/^laptop_screen_\d\d$/.test(o.name),f=u?null:s.get(h);return f||(f=h.clone(),u||s.set(h,f),this.register(f,o,r)),f});o.material=Array.isArray(o.material)?l:l[0];let c=/^laptop_screen_(\d\d)$/.exec(o.name);c&&(this.screens[Number(c[1])-1]={mat:l[0],glow:0,target:0})}),n==="open"){let o=this.obj.getObjectByName("wall_screen"),a=this.obj.getObjectByName("task_board");(o||a)&&(this.walls=new uh(o,a))}}register(t,e,n){this.mats.push(t);let s=e.userData.bakedName;if(s&&t.map&&!t.userData.nightPatched&&this.b.patchBaked(t,s),t.name==="night_lamp")t.emissive.getHex()===0&&t.emissive.set(16760944),t.emissiveIntensity=0,this.b.daylight.track(t,"lamp");else if(t.name==="night_windows"){if(t.emissive.getHex()===0&&t.emissive.set(16777215),t.emissiveIntensity=0,t.emissiveMap){let r=t.emissiveMap.clone(),o=t.map?t.map.clone():null;for(let a of[r,o])a&&(a.wrapS=a.wrapT=On,a.offset.x=n,a.needsUpdate=!0,this.textures.push(a));t.emissiveMap=r,o&&(t.map=o)}this.b.daylight.track(t,"windows")}else t.name==="night_screen"&&(t.emissive.getHex()===0&&t.emissive.set(10473727),t.emissiveIntensity=0)}setShown(t){this.alpha=t?1:0,this.root.visible=t}dispose(){for(let t of this.mats)this.b.daylight.untrack(t),t.dispose();for(let t of this.textures)t.dispose();this.root.removeFromParent()}},fh=class{constructor({scene:t,daylight:e,assets:n,baseUrl:s,renderer:r}){this.scene=t,this.daylight=e,this.assets=n,this.baseUrl=s,this.renderer=r,this.group=new se,this.group.name="building",this.group.visible=!1,t.add(this.group),this.introDrop=!1,this.slots=[],this.byId=new Map,this.styles=new Map,this.activeIndex=-1,this.pool=[],this.sig="",this.floorData=null,this.nightRecs=new Map,this.roof=new qs(this,n.templates.roof,"roof"),this.roofLift=new en(1,.5),this.group.add(this.roof.root),this.shaft=new qs(this,n.templates.elevator_shaft,"shaft"),this.cabin=new qs(this,n.templates.elevator_cabin,"cabin"),this.group.add(this.shaft.root,this.cabin.root),this.setupElevatorGeometry(),this.cabinY=new en(0,.55),this.shaftTop=new en(1,.55),this.lampPositions=Array.from({length:6},()=>new I),e.setLampSource(()=>{let o=this.activeOpen();if(!o)return null;let a=this.assets.spots.lamps;for(let l=0;l<6;l++){let c=a[l];this.lampPositions[l].set(c?c.x:0,c?c.y+o.root.position.y:-99,c?c.z:0)}return{positions:a.length?this.lampPositions:[],k:o.alpha}}),this.screenTargets=new Array(20).fill(0);for(let o=0;o<2;o++){let a=new qs(this,n.templates.floor_open,"open");a.setShown(!1),this.group.add(a.root),this.pool.push(a)}this.pulseT=-1,this.swapped=!0,this.blurPx=0}setupElevatorGeometry(){this.shaftH=1;for(let t of[this.shaft,this.cabin]){t.root.updateMatrixWorld(!0);let e=new ke().setFromObject(t.obj);if(!Number.isFinite(e.min.y))continue;let n=e.getCenter(new I);t.obj.position.y-=e.min.y,(Math.abs(n.x-zi.x)>1.5||Math.abs(n.z-zi.y)>1.5)&&(t.obj.position.x+=zi.x-n.x,t.obj.position.z+=zi.y-n.z),t===this.shaft&&(this.shaftH=Math.max(.01,e.max.y-e.min.y))}}patchBaked(t,e){t.userData.nightPatched=!0;let n=this.nightRecs.get(e);if(!n){let a=this.assets.nightMaps.get(e),l=e.startsWith("style_");n={name:e,uMap:{value:a||t.map},uTint:{value:new I(...a?[1,1,1]:ad)},dayMap:t.map,tex:null,state:a||l?"static":"idle",since:0},this.nightRecs.set(e,n)}let{uMap:s,uTint:r}=n,o=t.userData.accent?t.accentUniform={value:new ut(1,1,1)}:null;t.onBeforeCompile=a=>{a.uniforms.uNight=this.daylight.uNight,a.uniforms.uNightMap=s,a.uniforms.uNightTint=r,o&&(a.uniforms.uAccent=o),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight;
uniform sampler2D uNightMap;
uniform vec3 uNightTint;${o?`
uniform vec3 uAccent;`:""}`).replace("#include <map_fragment>",`#ifdef USE_MAP
  vec4 dayC = texture2D( map, vMapUv );
  vec4 nightC = texture2D( uNightMap, vMapUv );
  nightC.rgb *= uNightTint;
  diffuseColor *= mix( dayC, nightC, uNight );
#endif`),o&&(a.fragmentShader=a.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb *= uAccent;`))},t.customProgramCacheKey=()=>o?"bothq-baked-night-accent":"bothq-baked-night"}updateNightMaps(t){let e=this.daylight.night;for(let n of this.nightRecs.values())n.state!=="static"&&(e>.01?(n.since=t,n.state==="idle"&&(n.state="loading",U1(this.baseUrl,n.name).then(s=>{if(!s){n.state="missing";return}n.dayMap&&(s.wrapS=n.dayMap.wrapS,s.wrapT=n.dayMap.wrapT,s.channel=n.dayMap.channel),n.tex=s,n.uMap.value=s,n.uTint.value.set(1,1,1),n.state="ready",n.name==="baked_floor"&&this.styleNight(s.image)}))):n.state==="ready"&&t-n.since>3e4&&(n.uMap.value=n.dayMap,n.uTint.value.set(...ad),n.tex.dispose(),n.tex=null,n.state="idle",n.name==="baked_floor"&&this.styleNight(null)))}styleNight(t){let e=t&&this.assets.style?H0(t):new Map;for(let n of this.nightRecs.values()){if(!n.name.startsWith("style_"))continue;n.styleNight&&(n.styleNight.dispose(),n.styleNight=null);let s=e.get(n.name);s?(n.styleNight=s,n.uMap.value=s,n.uTint.value.set(1,1,1)):(n.uMap.value=n.dayMap,n.uTint.value.set(...ad))}}setFloors(t){let e=t.length?t:[{id:"_",name:"",order:1}],n=e.map(r=>r.id).join("|");if(e.forEach((r,o)=>{let a=this.byId.get(r.id);a&&(a.name=r.name,a.index=o)}),n===this.sig)return;this.sig=n,this.styles=this.assets.style?P0(e):new Map;let s=new Map(e.map((r,o)=>[r.id,o]));for(let r of this.slots)s.has(r.id)||this.disposeSlot(r);this.slots=e.map((r,o)=>{let a=this.byId.get(r.id);return a||(a={id:r.id,name:r.name,index:o,closed:new qs(this,this.assets.templates.floor_closed,"closed"),open:null,lift:new en(1,.5),showOpen:!1},this.group.add(a.closed.root),a.closed.setShown(!1),this.byId.set(r.id,a)),a.index=o,a});for(let[r]of[...this.byId])s.has(r)||this.byId.delete(r);this.activeIndex=Math.min(this.activeIndex,this.slots.length-1),this.activeSlot&&this.applyStyle(this.activeSlot),this.retarget(!1)}applyStyle(t){let e=this.styles.get(t.id);if(!e||!t.open||(N0(t.open.obj,e),t.open.walls?.setAccent(e.accent),t!==this.activeSlot))return;let n=this.assets.spots.lounges;this.assets.style.layouts[e.layout].forEach((s,r)=>{let o=n[r];(!o||o.pos.distanceToSquared(s.pos)>1e-6||o.yaw!==s.yaw)&&(n[r]={pos:s.pos.clone(),yaw:s.yaw,lounge:!0})})}disposeSlot(t){t.closed.dispose(),t.open&&(this.pool=this.pool.filter(e=>e!==t.open),t.open.dispose())}get floorCount(){return this.slots.length}get activeSlot(){return this.slots[this.activeIndex]||null}get activeId(){return this.activeSlot?.id??null}get activeY(){return Math.max(0,this.activeIndex)*ki}activeOpen(){return this.activeSlot?.open||null}setActive(t,{intro:e=!1}={}){let n=this.slots.findIndex(o=>o.id===t);if(n<0)return!1;let s=this.activeIndex>=0&&n!==this.activeIndex;this.activeIndex=n;let r=this.slots[n];if(this.acquireOpen(r),this.applyStyle(r),e){for(let o of this.slots)o.lift.snap(1);this.roofLift.snap(1),this.group.visible=!0,this.introDrop=!0}return s&&!e&&!D1?(this.pulseT=0,this.swapped=!1):this.applyShown(),this.retarget(e),e&&(this.cabinY.snap(this.cabinY.target),this.shaftTop.snap(this.shaftTop.target)),!0}applyShown(){this.slots.forEach((t,e)=>{t.showOpen=e===this.activeIndex&&!!t.open})}retarget(t){let e=this.activeIndex;e<0||(this.slots.forEach((n,s)=>{s<=e?n.lift.to(0,t?.05+(e-s)*.08:0):n.lift.to(1)}),this.roofLift.to(1),this.cabinY.to(e*ki),this.shaftTop.to(Math.min(this.slots.length*ki,e*ki+F1+.35)))}acquireOpen(t){if(t.open)return t.open;let e=this.pool.find(s=>!this.slots.some(r=>r.open===s))||this.pool.reduce((s,r)=>r.alpha<s.alpha?r:s,this.pool[0]),n=this.slots.find(s=>s.open===e);return n&&(n.open=null,n.showOpen=!1),e.onSteal?.(),t.open=e,e.floorId=t.id,e.screens.forEach(s=>{s.glow=0,s.target=0}),e}setScreens(t){this.screenTargets=t}setDisplayData(t){this.floorData=t,this.activeOpen()?.walls?.setData(t)}prewarm(t){let e=[this.roof,this.shaft,this.cabin,...this.slots.map(a=>a.closed),...this.pool],n=e.map(a=>a.root.visible);e.forEach(a=>{a.root.visible=!0});let s=this.pool.flatMap(a=>D0(a.obj)).filter(a=>!a.visible);s.forEach(a=>{a.visible=!0});let r=new De(1,1,{type:Xe}),o=this.renderer.getRenderTarget();this.renderer.setRenderTarget(r),this.renderer.compile(this.scene,t),this.renderer.setRenderTarget(o),r.dispose(),s.forEach(a=>{a.visible=!1}),e.forEach((a,l)=>{a.root.visible=n[l]})}update(t,e){let n=this.activeIndex,s=this.daylight.night,r=this.slots.length;this.pulseT>=0&&(this.pulseT+=t,!this.swapped&&this.pulseT>=ro&&(this.swapped=!0,this.applyShown()),this.pulseT>=ro+hg&&(this.pulseT=-1));let o=this.pulseT<0?0:this.pulseT<ro?si(0,ro,this.pulseT):1-si(ro,ro+hg,this.pulseT),a=Math.round(o*N1*4)/4;a!==this.blurPx&&(this.blurPx=a,this.renderer.domElement.style.filter=a?`blur(${a}px)`:"");for(let d of this.slots){d.lift.step(t);let p=d.lift.x*(Fa+Math.max(0,d.index-n)*ki),x=p<Fa*.8,m=d.index*ki+p;d.closed.root.position.y=m,d.closed.setShown(x&&!d.showOpen),d.open&&(d.open.root.position.y=m,d.open.setShown(x&&d.showOpen),d.open.alpha&&this.updateOpen(d,t,e,s))}this.roofLift.step(t);let l=this.roofLift.x*(Fa+Math.max(0,r-n)*ki);this.roof.root.position.y=r*ki-Xn+l,this.roof.setShown(l<Fa*.8),this.cabinY.step(t),this.shaftTop.step(t);let c=this.slots[n];this.introDrop&&(!c||c.lift.x<.001&&c.lift.pending===null)&&(this.introDrop=!1);let h=this.introDrop?c.lift.x*Fa:0;this.cabin.root.position.y=this.cabinY.x+h;let u=-Xn,f=Math.max(u+.1,this.shaftTop.x);this.shaft.root.position.y=u+h,this.shaft.root.scale.y=(f-u)/this.shaftH,this.updateNightMaps(e)}updateOpen(t,e,n,s){let r=t.open,o=1-Math.exp(-e*3.2),a=this.slots[this.activeIndex]===t;r.screens.forEach((l,c)=>{l&&(l.target=a&&this.screenTargets[c]||0,l.glow+=(l.target-l.glow)*o,l.mat.emissiveIntensity=l.glow*(.32+1.35*s)+s*.03)}),r.walls?.tick(n,s)}};var ug=.32,fg=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,O1=fg?3:5,B1=fg?5:10,z1=`
#include <packing>
#define BQ_LEVEL ${ug.toFixed(3)}
#define BQ_SEARCH ${O1}
#define BQ_TAPS ${B1}
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
}`,k1=`
#ifdef USE_MAP
  {
    vec3 bqD = texture2D( map, vMapUv ).rgb;
    diffuseColor.rgb += diffuse * ( bqRelight( bqD ) - bqD ) * bqDay;
    if ( bqLamp.r + bqLamp.g + bqLamp.b > 0.0 ) diffuseColor.rgb += bqLampPools();
  }
#endif`,ld=i=>(i/=255,i<=.04045?i/12.92:((i+.055)/1.055)**2.4),cd=new WeakMap;function H1(i){if(cd.has(i))return cd.get(i);let t=new I(.83,.82,.78);try{let e=i.image,n=96,s=Math.max(1,Math.round(96*e.height/e.width)),r=document.createElement("canvas");r.width=n,r.height=s;let o=r.getContext("2d",{willReadFrequently:!0});o.drawImage(e,0,0,n,s);let a=o.getImageData(0,0,n,s).data,l=[];for(let u=0;u<a.length;u+=4){let f=ld(a[u]),d=ld(a[u+1]),p=ld(a[u+2]);l.push([.2126*f+.7152*d+.0722*p,f,d,p])}l.sort((u,f)=>u[0]-f[0]);let c=Math.floor(l.length*.88),h=Math.max(c+1,Math.floor(l.length*.98));t.set(0,0,0);for(let u=c;u<h;u++)t.x+=l[u][1],t.y+=l[u][2],t.z+=l[u][3];t.divideScalar(h-c)}catch{}return cd.set(i,t),t}function dg(i){let t={bqSun:{value:new ut(0,0,0)},bqDir:{value:new I(0,1,0)},bqDay:{value:1},bqShadowMap:{value:null},bqShadowMatrix:{value:i.shadow.matrix},bqShadowInfo:{value:new de(1,1,1,0)},bqLampPos:{value:Array.from({length:6},()=>new I(0,-99,0))},bqLamp:{value:new ut(0,0,0)},bqLampCone:{value:new J(.7,.9)},bqTable:{value:Array.from({length:4},()=>new de)},bqTableY:{value:new de(-99,-99,-99,-99)}};return{relight(e){if(e.userData.sunRelit||!e.map)return;e.userData.sunRelit=!0;let n={value:H1(e.map)},s=e.onBeforeCompile,r=e.customProgramCacheKey;e.onBeforeCompile=(o,a)=>{s.call(e,o,a),Object.assign(o.uniforms,t,{bqAlbedo:n}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vBqWorld;
varying vec3 vBqNormal;`).replace("#include <project_vertex>",`#include <project_vertex>
	vBqWorld = ( modelMatrix * vec4( transformed, 1.0 ) ).xyz;
	vBqNormal = normalize( mat3( modelMatrix ) * normal );`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${z1}`).replace("#include <color_fragment>",`${k1}
#include <color_fragment>`)},e.customProgramCacheKey=()=>`${r.call(e)}|sun`,e.needsUpdate=!0},update(e,n,s,r){t.bqDir.value.copy(e),t.bqSun.value.setRGB(...n,te).multiplyScalar(Math.max(0,s)*(1/ug-1)),t.bqDay.value=r;let o=i.shadow.map,a=i.shadow.camera;t.bqShadowMap.value=o?o.texture:null,t.bqShadowInfo.value.set(a.right-a.left,a.top-a.bottom,a.far-a.near,o?1:0)},lamps(e,n,s,r,o){t.bqLampPos.value.forEach((a,l)=>{e?.[l]?a.copy(e[l]):a.set(0,-99,0)}),t.bqLamp.value.copy(n),t.bqLampCone.value.set(Math.cos(s),Math.cos(s*(1-r))),t.bqTable.value.forEach((a,l)=>{let c=o[l];c&&a.set(c.x0,c.z0,c.x1,c.z1)}),t.bqTableY.value.set(...[0,1,2,3].map(a=>o[a]?o[a].y:-99))}}}var he=i=>{let t=new ut(i);return t.convertLinearToSRGB(),[t.r,t.g,t.b]},ao=i=>i,G1=ao({night:0,bake:0,lamps:0,windows:0,sunI:2.4,sunC:he("#FFF1DE"),hemiI:1.05,hemiSky:he("#F3F2F0"),hemiGnd:he("#CFC8BE"),fillI:.35,fillC:he("#E6EEFF"),envI:.5,exposure:1.05,shadow:.34,tint:[1.42,1.43,1.46],floorSun:.72,floorSunC:he("#FFF6EC"),glassC:he("#D2E4F2"),glassA:.22,glassE:.12}),V1=ao({night:0,bake:0,lamps:0,windows:.05,sunI:2.6,sunC:he("#FFEFD9"),hemiI:1,hemiSky:he("#E1EAFF"),hemiGnd:he("#C6CAD2"),fillI:.38,fillC:he("#DCE6FF"),envI:.5,exposure:1.07,shadow:.36,tint:[2.05,2.15,2.35],floorSun:.72,floorSunC:he("#FFEEDA"),glassC:he("#A6CCF2"),glassA:.82,glassE:.5}),W1=ao({night:0,bake:0,lamps:.15,windows:.15,sunI:2.8,sunC:he("#FFA458"),hemiI:.85,hemiSky:he("#FFD0A4"),hemiGnd:he("#B48466"),fillI:.3,fillC:he("#FFC9A4"),envI:.4,exposure:1.05,shadow:.4,tint:[2.3,1.32,.62],floorSun:1,floorSunC:he("#FFD27E"),glassC:he("#FFC064"),glassA:.86,glassE:1}),X1=ao({night:.5,bake:.3,lamps:.6,windows:.4,sunI:.3,sunC:he("#FFC9B0"),hemiI:.8,hemiSky:he("#B9C2E6"),hemiGnd:he("#8A8798"),fillI:.25,fillC:he("#BFC8F0"),envI:.3,exposure:1.04,shadow:.3,tint:[1.3,1.32,1.48],floorSun:0,floorSunC:he("#FFEBD2"),glassC:he("#7F98CF"),glassA:.6,glassE:.45}),q1=ao({night:.6,bake:.35,lamps:.85,windows:.7,sunI:.3,sunC:he("#FF9070"),hemiI:.7,hemiSky:he("#8C7896"),hemiGnd:he("#3A3040"),fillI:.2,fillC:he("#8A80B8"),envI:.28,exposure:1.03,shadow:.32,tint:[1.3,1.02,.84],floorSun:0,floorSunC:he("#FFD27E"),glassC:he("#4A5487"),glassA:.8,glassE:.5}),Y1=ao({night:1,bake:.6,lamps:1,windows:1,sunI:.2,sunC:he("#8CA6FF"),hemiI:.4,hemiSky:he("#6A6158"),hemiGnd:he("#2A2420"),fillI:.15,fillC:he("#8C8098"),envI:.2,exposure:1,shadow:.4,tint:[.95,.8,.62],floorSun:0,floorSunC:he("#FFEBD2"),glassC:he("#1A2A66"),glassA:.92,glassE:.5});function oo(i,t,e){let n={};for(let s in i)n[s]=Array.isArray(i[s])?i[s].map((r,o)=>Da(r,t[s][o],e)):Da(i[s],t[s],e);return n}var Hi=Math.PI/180,hd={lat:42.7,dec:10,noon:760},$1={"Europe/Sofia":[42.7,23.3],"Europe/Kiev":[50.45,30.5],"Europe/Kyiv":[50.45,30.5],"Europe/Moscow":[55.75,37.6],"Europe/Warsaw":[52.2,21],"Europe/Berlin":[52.5,13.4],"Europe/Paris":[48.85,2.35],"Europe/London":[51.5,-.1],"Europe/Madrid":[40.4,-3.7],"Europe/Rome":[41.9,12.5],"Europe/Istanbul":[41,29],"Asia/Dubai":[25.2,55.3],"Asia/Kolkata":[28.6,77.2],"Asia/Singapore":[1.35,103.8],"Asia/Tokyo":[35.7,139.7],"Australia/Sydney":[-33.9,151.2],"America/New_York":[40.7,-74],"America/Chicago":[41.9,-87.6],"America/Denver":[39.7,-105],"America/Los_Angeles":[34.05,-118.25],"America/Sao_Paulo":[-23.55,-46.6]};function K1(i){if(i.has("lat")&&i.has("lon"))return[Number(i.get("lat")),Number(i.get("lon"))];let t=Intl.DateTimeFormat().resolvedOptions().timeZone;return $1[t]||[45,-new Date().getTimezoneOffset()/4]}function vg(i,t,e){let n=e*Hi,s=Math.asin(Math.sin(n)*Math.sin(t)+Math.cos(n)*Math.cos(t)*Math.cos(i)),r=Math.atan2(Math.sin(i),Math.cos(i)*Math.sin(n)-Math.tan(t)*Math.cos(n));return[s/Hi,r/Hi]}function Z1(i,t,e){let n=i/864e5-10957.5,s=Hi*(357.5291+.98560028*n),r=s+Hi*(1.9148*Math.sin(s)+.02*Math.sin(2*s)+3e-4*Math.sin(3*s)+102.9372)+Math.PI,o=Hi*23.4397,a=Math.asin(Math.sin(o)*Math.sin(r)),l=Math.atan2(Math.sin(r)*Math.cos(o),Math.cos(r));return vg(Hi*(280.16+360.9856235*n+e)-l,a,t)}function J1(i){return vg(Hi*(i-hd.noon)/4,hd.dec*Hi,hd.lat)}function j1(i,t){let e=si(-40,40,t),n=oo(oo(V1,W1,e),G1,si(4,30,i));n=oo(oo(X1,q1,e),n,si(-1.5,3,i)),n=oo(Y1,n,si(-9,-1,i));let s=1-si(-6,2,i);return n.sunEl=Da(Math.max(i,5),42,s),n.sunAz=Da(Ae(270-.3*t,235,305),250,s),n}function Q1(i,t){let e=t>0;return i<-5?"night":i<2?e?"dusk":"dawn":i<15?e?"golden":"dawn":"day"}function pg(i){let t=/^(\d{1,2}):(\d{2})$/.exec(String(i||"").trim());return t?Ae(Number(t[1]),0,24)*60+Ae(Number(t[2]),0,59):null}var tE=2e4,eE=2e3,mg=6,gg=16759668,nE=22,iE=4,xg=.78,_g=.75,cs={x:8.3,z:6.3,y0:-.05,y1:3},sE=typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches,rE=i=>i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshToonMaterial,yg=/^(slab|glass)/,oE=/^table_\d+$/;function Mg({scene:i,renderer:t}){let e=new URLSearchParams(location.search);t.shadowMap.enabled=!0,t.shadowMap.type=Us;let n=new is(16777215,1);n.castShadow=!0,n.shadow.mapSize.setScalar(sE?1024:2048),n.shadow.bias=-5e-4,n.shadow.normalBias=.02,n.shadow.radius=2;let s=new oa(16777215,16777215,1),r=new is(16777215,.4);r.position.set(6,5,8),i.add(n,n.target,s,r);let o=[];for(let z=0;z<mg;z++){let rt=new Ds(gg,0,0,xg,_g,2);rt.castShadow=!1,rt.position.set(0,-99,0),i.add(rt,rt.target),o.push(rt)}let a=new ut,l=[],c=dg(n),h=new Map,u=new Set,f=new Set,d={value:0},p={night:0,lampsK:0,windowsK:0,phase:"day",minutes:720,el:45,az:0,params:null},x=null,m=e.get("real")==="1",g=null,y=null,E=null,v=null,b=-1e9,S=-1e9,A=-1e9,_=new I,T=new I,R=new I,P=new ut,L=e.get("time");L&&L!=="auto"&&(x=pg(L));function B(z){x=z&&z!=="auto"?pg(z):null,S=b=-1e9}function N(){let z=new Date;if(x!==null&&!m)[p.el,p.az]=J1(x);else{x!==null&&z.setHours(Math.floor(x/60),x%60,0,0);let[rt,ot]=K1(e);[p.el,p.az]=Z1(z.getTime(),rt,ot)}p.minutes=x!==null?x:z.getHours()*60+z.getMinutes()+z.getSeconds()/60,E=j1(p.el,p.az),p.phase=Q1(p.el,p.az)}function O(){u.clear(),f.clear(),g.group.traverse(rt=>{if(rt.isMesh)for(let ot of Array.isArray(rt.material)?rt.material:[rt.material])ot.userData.nightPatched&&(u.add(ot),c.relight(ot)),ot.name==="glass_pane"&&f.add(ot)});let z=g.activeOpen();if(z?.root.traverse(rt=>{if(!rt.isMesh)return;let Ot=(Array.isArray(rt.material)?rt.material:[rt.material]).every(zt=>rE(zt)&&!zt.transparent)&&!yg.test(rt.name)&&!yg.test(rt.parent?.name||"");rt.castShadow=rt.receiveShadow=Ot}),l=[],z){z.root.updateMatrixWorld(!0);for(let rt of z.obj.children){if(!oE.test(rt.name)||!rt.visible)continue;let ot=new ke().setFromObject(rt);l.push({x0:ot.min.x,z0:ot.min.z,x1:ot.max.x,z1:ot.max.z,y:ot.max.y-z.root.position.y})}}}function X(){let z=g?.activeOpen()?.root;z?z.getWorldPosition(T):T.set(0,0,0);let rt=T.y;T.y+=(cs.y0+cs.y1)/2,n.target.position.copy(T),n.position.copy(T).addScaledVector(_,30);let ot=n.shadow.camera;ot.position.copy(n.position),ot.lookAt(T),ot.updateMatrixWorld();let Ot=1/0,zt=-1/0,Jt=1/0,$=-1/0,Q=1/0,pt=-1/0;for(let Ut=0;Ut<8;Ut++)R.set(T.x+(Ut&1?cs.x:-cs.x),rt+(Ut&2?cs.y1:cs.y0),T.z+(Ut&4?cs.z:-cs.z)),R.applyMatrix4(ot.matrixWorldInverse),Ot=Math.min(Ot,R.x),zt=Math.max(zt,R.x),Jt=Math.min(Jt,R.y),$=Math.max($,R.y),Q=Math.min(Q,R.z),pt=Math.max(pt,R.z);ot.left=Ot-.1,ot.right=zt+.1,ot.bottom=Jt-.1,ot.top=$+.1,ot.near=Math.max(.1,-pt-.5),ot.far=-Q+.5,ot.updateProjectionMatrix()}function q(z){n.color.setRGB(...z.sunC,te),n.intensity=z.sunI;let rt=Xr.degToRad(z.sunEl),ot=Xr.degToRad(z.sunAz);_.set(Math.cos(rt)*Math.cos(ot),Math.sin(rt),Math.cos(rt)*Math.sin(ot)),X(),s.color.setRGB(...z.hemiSky,te),s.groundColor.setRGB(...z.hemiGnd,te),s.intensity=z.hemiI,r.color.setRGB(...z.fillC,te),r.intensity=z.fillI,i.environmentIntensity=z.envI,t.toneMappingExposure=z.exposure,d.value=z.bake,p.night=z.night,p.lampsK=z.lamps,p.windowsK=z.windows;for(let[Ot,zt]of h)zt==="lamp"?Ot.emissiveIntensity=z.lamps*2.4:zt==="windows"&&(Ot.emissiveIntensity=z.windows*1.7);for(let Ot of u)Ot.color.setRGB(...z.tint);P.setRGB(...z.glassC,te);for(let Ot of f)Ot.color.copy(P),Ot.emissive.copy(P).multiplyScalar(z.glassE),Ot.opacity=z.glassA;c.update(_,z.floorSunC,z.floorSun,1-z.bake)}function st(){let z=v?v():null,rt=z?z.k*p.lampsK:0;for(let Ot=0;Ot<mg;Ot++){let zt=o[Ot],Jt=z&&z.positions[Ot];Jt?(zt.position.copy(Jt),zt.target.position.set(Jt.x,Jt.y-3,Jt.z),zt.intensity=nE*rt):zt.intensity=0}let ot=g?.activeOpen()?.root.position.y??0;a.set(gg).multiplyScalar(iE*rt),c.lamps(rt>.001?z.positions:null,a,xg,_g,l.map(Ot=>({...Ot,y:Ot.y+ot})))}function Y(z,rt){if(rt-S>tE&&(S=rt,N()),g&&rt-A>eE&&(A=rt,O()),!y)y=E;else{let ot=1-Math.exp(-z/.45);y=oo(y,E,ot)}if(p.params=y,q(y),st(),rt-b>1e3){b=rt;let ot=document.documentElement;ot.dataset.daylight!==p.phase&&(ot.dataset.daylight=p.phase),ot.style.setProperty("--night",y.night.toFixed(3))}}let tt={uNight:d,state:p,update:Y,setTime:B,track(z,rt){h.set(z,rt)},untrack(z){h.delete(z)},setLampSource(z){v=z},setBuilding(z){g=z,A=-1e9},get shadowOpacity(){return y?y.shadow:.3},get night(){return p.night}};return window.bothq=Object.assign(window.bothq||{},{setTime:B,daylight:p}),tt}var Sg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Pn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},aE=new Bn(-1,1,1,-1,0,1),ud=class extends me{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},lE=new ud,hs=class{constructor(t){this._mesh=new Dt(lE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,aE)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ys=class extends Pn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof $e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qr.clone(t.uniforms),this.material=new $e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new hs(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ua=class extends Pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},dh=class extends Pn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ph=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new J);this._width=n.width,this._height=n.height,e=new De(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xe}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ys(Sg),this.copyPass.material.blending=kn,this.timer=new ca}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ua!==void 0&&(o instanceof Ua?n=!0:o instanceof dh&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new J);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var mh=class extends Pn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ut}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Oa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var gh=class extends Pn{constructor(){super(),this.isOutputPass=!0,this.uniforms=qr.clone(Oa.uniforms),this.material=new Ur({name:Oa.name,uniforms:this.uniforms,vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===da?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ma?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===_a?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ga&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fn={centre:[.5,.45],radii:[.82,.78],stops:[[0,"#FFFFFF"],[.5,"#F8F8FA"],[1,"#E6E7EB"]],shadow:"#0B0C11",layers:[{sigma:4,down:2,w:.4},{sigma:30,down:22,w:.4},{sigma:120,down:70,w:.34}]},xh=i=>{let t=new ut;return t.setStyle(i,qe),new I(t.r,t.g,t.b)};function Eg(){let[i,t]=fn.centre,[e,n]=fn.radii,s=fn.stops.map(([r,o])=>`${o} ${(r*100).toFixed(1)}%`).join(", ");return`radial-gradient(ellipse ${e*100}% ${n*100}% at ${i*100}% ${t*100}%, ${s})`}var bg=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); }`,cE=`
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
  }`,hE=`
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
  }`;function uE(i,t){return new De(Math.max(2,i),Math.max(2,t),{type:Xe,depthBuffer:!1,minFilter:Le,magFilter:Le,generateMipmaps:!1})}var _h=class extends Pn{constructor(t,e){super(),this.scene=t,this.camera=e,this.needsSwap=!0,this.maskMat=new xe({color:16777215,toneMapped:!1,side:Ke,depthTest:!1,depthWrite:!1,fog:!1}),this.blurMat=new $e({uniforms:{tMap:{value:null},texel:{value:new J},sigma:{value:0}},vertexShader:bg,fragmentShader:cE,depthTest:!1,depthWrite:!1});let[n,s,r]=fn.layers;this.composeMat=new $e({uniforms:{tDiffuse:{value:null},tHold:{value:null},tL0:{value:null},tL1:{value:null},tL2:{value:null},stop0:{value:xh(fn.stops[0][1])},stop1:{value:xh(fn.stops[1][1])},stop2:{value:xh(fn.stops[2][1])},stopMid:{value:fn.stops[1][0]},shadowC:{value:xh(fn.shadow)},centre:{value:new J(...fn.centre)},radii:{value:new J(...fn.radii)},push:{value:[new J,new J,new J]},layerW:{value:new I(n.w,s.w,r.w)}},vertexShader:bg,fragmentShader:hE,depthTest:!1,depthWrite:!1}),this.fsQuad=new hs(this.blurMat),this.t=null,this.size=new J(1,1),this.setSize(1,1)}setSize(t,e){this.size.set(t,e);let n=this.t;n&&Object.values(n).forEach(r=>r.dispose());let s=r=>uE(Math.round(t/r),Math.round(e/r));this.t={mask:s(4),cA:s(4),cB:s(4),mA:s(8),mB:s(8),hA:s(16),wA:s(32),wB:s(32)}}blur(t,e,n,s,r,o){let a=this.blurMat.uniforms;a.tMap.value=e.texture,a.texel.value.set(s/e.width,r/e.height),a.sigma.value=o,t.setRenderTarget(n),this.fsQuad.material=this.blurMat,this.fsQuad.render(t)}buildAura(t,e){let n={target:t.getRenderTarget(),auto:t.autoClear,color:t.getClearColor(new ut),alpha:t.getClearAlpha(),shadow:t.shadowMap.enabled},s=this.t;t.shadowMap.enabled=!1,t.autoClear=!0,t.setClearColor(0,0),t.setRenderTarget(s.mask);let r=this.scene.overrideMaterial;this.scene.overrideMaterial=this.maskMat,t.render(this.scene,this.camera),this.scene.overrideMaterial=r,t.autoClear=!1;let o=fn.layers.map((a,l)=>Math.min(13,a.sigma*e/[4,8,32][l]));this.blur(t,s.mask,s.cB,1,0,o[0]),this.blur(t,s.cB,s.cA,0,1,o[0]),this.blur(t,s.mask,s.mB,0,0,0),this.blur(t,s.mB,s.hA,0,0,0),this.blur(t,s.hA,s.wA,0,0,0),this.blur(t,s.wA,s.wB,1,0,o[2]),this.blur(t,s.wB,s.wA,0,1,o[2]),this.blur(t,s.mB,s.mA,1,0,o[1]),this.blur(t,s.mA,s.mB,0,1,o[1]),t.setRenderTarget(n.target),t.autoClear=n.auto,t.setClearColor(n.color,n.alpha),t.shadowMap.enabled=n.shadow}render(t,e,n){let s=this.composeMat.uniforms,r=this.size.y,o=Math.max(.3,this.camera.zoom||1),a=r/1080*Math.pow(o,.55),l=1/(1+.35*Math.max(0,o-1));this.buildAura(t,a);let c=this.t;s.tDiffuse.value=n.texture,s.tHold.value=s.tL0.value=c.cA.texture,s.tL1.value=c.mB.texture,s.tL2.value=c.wA.texture,fn.layers.forEach((h,u)=>s.push.value[u].set(0,h.down*a/r)),s.layerW.value.set(fn.layers[0].w,fn.layers[1].w*l,fn.layers[2].w*l),this.fsQuad.material=this.composeMat,t.setRenderTarget(this.renderToScreen?null:e),this.clear&&t.clear(),this.fsQuad.render(t)}dispose(){Object.values(this.t).forEach(t=>t.dispose()),this.maskMat.dispose(),this.blurMat.dispose(),this.composeMat.dispose(),this.fsQuad.dispose()}};var Tg={name:"BotHQTiltShift",uniforms:{tDiffuse:{value:null},dir:{value:new J(1,0)},focus:{value:.5},band:{value:.24},falloff:{value:.5},strength:{value:1.5}},vertexShader:`
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
    }`};function fE(){return new URLSearchParams(location.search).get("tiltshift")!=="0"}function wg(i,t,e){let n=i.getSize(new J),s=i.getPixelRatio(),r=new De(n.x*s,n.y*s,{type:Xe,samples:4}),o=new ph(i,r);o.setPixelRatio(s),o.renderTarget2.dispose(),o.renderTarget2=new De(n.x*s,n.y*s,{type:Xe}),o.writeBuffer=o.renderTarget2,o.readBuffer=o.renderTarget1,o.addPass(new mh(t,e));let a=new Ys(Tg),l=new Ys(Tg);a.enabled=l.enabled=fE(),o.addPass(a),o.addPass(l),o.addPass(new gh);let c=new _h(t,e);o.addPass(c);let h={composer:o,setSize(u,f){o.setPixelRatio(i.getPixelRatio()),o.setSize(u,f);let d=u*i.getPixelRatio(),p=f*i.getPixelRatio();a.uniforms.dir.value.set(1/d,0),l.uniforms.dir.value.set(0,1/p),this.base=1.05*i.getPixelRatio(),a.uniforms.strength.value=l.uniforms.strength.value=this.base},render(u,f,d=1){a.uniforms.focus.value=l.uniforms.focus.value=u,a.uniforms.strength.value=l.uniforms.strength.value=this.base*d,o.render(f)}};return h.setSize(n.x,n.y),h}var yh={working:"#34C759",idle:"#A1A1A6",waiting_user:"#FF9F0A",error:"#FF3B30",stuck:"#FF9500",done:"#0A84FF"},dE={waiting_user:"Waiting for you",error:"Error",stuck:"Stuck?",done:"Done",working:"Working",idle:"Resting"},pE=Math.PI/4,fd=.42,Ag=1,dd=3.5,mE=.9,gE=1.2,xE=.034,_E=Mh([[0,"rgba(255,255,255,0.95)"],[.45,"rgba(255,255,255,0.55)"],[1,"rgba(255,255,255,0)"]]),yE=Mh([[0,"rgba(0,0,0,0.38)"],[.6,"rgba(0,0,0,0.12)"],[1,"rgba(0,0,0,0)"]]),vE=Mh([[0,"rgba(255,255,255,0.9)"],[.32,"rgba(255,255,255,0.42)"],[1,"rgba(255,255,255,0)"]]),ME=Mh([[0,"rgba(255,255,255,0)"],[.6,"rgba(255,255,255,0)"],[.8,"rgba(255,255,255,0.95)"],[.9,"rgba(255,255,255,0.3)"],[1,"rgba(255,255,255,0)"]]),SE=new Fe(2,2),bE=.95,vh=class{constructor(t,e){this.id=t.id,this.ctx=e,this.phase=CE(t.id)%1e3/1e3*Math.PI*2,this.status=null,this.hovered=!1,this.selected=!1,this.anim=null,this.nextBlink=1+Math.random()*3,this.blinkT=-1,this.nextAction=1+Math.random()*2,this.hopCooldown=.6,this.retiring=!1,this.dead=!1,this.hostAlpha=1,this.tagKey="",this.yawS=new en(fd,.3),this.scaleS=new en(1,.28),this.eyeX=new en(0,.16),this.eyeY=new en(0,.16),this.modelScale=1,this.root=new se,this.pivot=new se,this.modelWrap=new se,this.pivot.add(this.modelWrap),this.root.add(this.pivot);let n=new Dt(new Fe(.85,.85),new xe({map:yE,transparent:!0,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.y=.006,n.renderOrder=1,this.pivot.add(n),this.ring=new Dt(new Fe(1.5,1.5),new xe({map:_E,transparent:!0,depthWrite:!1,color:yh.idle,opacity:0})),this.ring.rotation.x=-Math.PI/2,this.ring.renderOrder=1,this.root.add(this.ring),this.tagEl=document.createElement("div"),this.tagEl.className="hqt",this.tagEl.dataset.mode="off",this.tagEl.innerHTML='<div class="hqt-pill"><i class="hqt-dot"></i><span class="hqt-text"></span></div><div class="hqt-stem"></div>',this.tagText=this.tagEl.querySelector(".hqt-text"),this.tag=new Qc(this.tagEl),this.tag.center.set(.5,0),this.tag.position.y=Ag+.24,this.tag.visible=!1,this.pivot.add(this.tag),this.setPlaceholderModel(t.color),e.parent.add(this.root)}setPlaceholderModel(t){let e=new Dt(new Ps(.46,40,28),EE(t));e.scale.set(1,.95,.82),e.position.y=.44;let n=new Wo(.042,.085,6,12),s=new Oe({color:16777215,roughness:.25,emissive:16777215,emissiveIntensity:.15}),r=new Dt(n,s);r.position.set(-.12,.52,.36);let o=new Dt(n,s);o.position.set(.12,.52,.36);let a=new se;a.add(e,r,o),this.modelScale=1,this.useModel(a,[r,o],!0)}setModel(t,e){let n=[];t.traverse(l=>{/^eye_[LR]/.test(l.name)&&n.push(l),l.isMesh&&e&&/body/.test(l.name+(l.parent?.name||""))&&(l.material=l.material.clone(),l.material.color.set(e))}),n=n.filter(l=>!n.some(c=>c!==l&&RE(c,l)));let s=new ke().setFromObject(t),r=s.getSize(new I),o=Ag/Math.max(r.x,r.y,r.z,.01);t.scale.multiplyScalar(o),s.setFromObject(t);let a=s.getCenter(new I);t.position.x-=a.x,t.position.z-=a.z,t.position.y-=s.min.y,this.modelScale=t.scale.x||1,s.setFromObject(t),this.tag.position.y=s.max.y+.24,this.useModel(t,n,!1)}useModel(t,e,n){for(let s of this.pickMeshes||[])this.ctx.pickables.delete(s);this.modelWrap.clear(),this.modelWrap.add(t),this.eyes=e,this.eyeBase=e.map(s=>s.scale.y),this.eyePos=e.map(s=>s.position.clone()),this.pickMeshes=[],t.traverse(s=>{s.isMesh&&(s.userData.actorId=this.id,this.pickMeshes.push(s),this.retiring||this.ctx.pickables.add(s))}),this.placeholder=n}update(t,e,n){let s=t.effective_status||t.status,r=s!==this.status,o=this.status;this.status=s,this.bot=t;let a=yh[s]||yh.idle;this.ring.material.color.set(a),this.tagEl.dataset.status=s,this.tagEl.style.setProperty("--c",a),this.selected=n.selectedBot===t.id,this.renderTag(),e&&(!this.spot||this.spot.pos.distanceToSquared(e.pos)>1e-4)&&(this.spot?this.travelTo(e):this.dropIn(e),this.spot=e),this.ring.position.y=.012-(this.spot?this.spot.pos.y:0),r&&o&&(s==="done"?(this.celebrate(),this.hop(.45)):(s==="waiting_user"||s==="error")&&this.hop(.3))}renderTag(){let t=this.status,e=this.bot;if(!e)return;let n=t==="waiting_user"||t==="error"||t==="stuck",s=this.selected?"sel":n?"attn":this.hovered?"hover":"off",r=e.name||"";if(s==="attn"){let a=TE(t,e.step);r=this.hovered?`${e.name} \xB7 ${a}`:a}let o=`${s}|${t}|${r}`;o!==this.tagKey&&(this.tagKey=o,this.tagEl.dataset.mode=s,this.tagText.textContent=r,this.tagEl.title="")}spotIsLounge(){return!!this.spot&&this.spot.lounge}setHovered(t){this.hovered!==t&&(this.hovered=t,t&&!this.anim&&this.hop(.2),this.renderTag())}retire(){if(!this.retiring){this.retiring=!0,this.hovered=!1,this.scaleS.to(0);for(let t of this.pickMeshes||[])this.ctx.pickables.delete(t);this.tagEl.dataset.mode="off",this.tag.visible=!1}}dropIn(t){this.root.position.copy(t.pos),this.baseYaw=t.yaw,this.yawS.snap(t.yaw+fd),this.anim={kind:"drop",t:-(this.ctx.dropDelay||0),dur:.75,from:2.4},this.scaleS.snap(this.ctx.dropDelay>0?.001:1),this.ctx.dropDelay>0&&this.scaleS.to(1,this.ctx.dropDelay)}travelTo(t){let e=this.root.position.clone(),n=e.distanceTo(t.pos);if(ls||n<.05){this.root.position.copy(t.pos),this.baseYaw=t.yaw;return}let s=new I().subVectors(t.pos,e);this.anim={kind:"travel",t:0,dur:Math.max(.8,n/2.6),from:e,to:t.pos.clone(),toYaw:t.yaw,travelYaw:Math.atan2(s.x,s.z)}}hop(t){ls||this.anim||this.retiring||(this.anim={kind:"hop",t:0,dur:.62,h:t})}celebrate(){if(ls||this.retiring)return;this.endCelebration();let t=new ut(yh.done),e=new Dt(SE,new xe({map:ME,color:t,transparent:!0,depthWrite:!1,opacity:0}));e.rotation.x=-Math.PI/2,e.position.y=this.ring.position.y+.003,e.renderOrder=2;let n=new Uo(new Ar({map:vE,color:t,transparent:!0,depthWrite:!1,opacity:0}));n.position.y=Math.max(.3,this.tag.position.y-.24)*.55,n.renderOrder=2,this.root.add(e,n),this.fx={t:0,ripple:e,halo:n},this.joy=.75}endCelebration(){if(this.fx){for(let t of[this.fx.ripple,this.fx.halo])t.removeFromParent(),t.material.dispose();this.fx=null}}tickCelebration(t){let e=this.fx;e.t+=t;let n=e.t/bE;if(n>=1){this.endCelebration();return}let s=1-(1-n)**3;e.ripple.scale.setScalar(.4+1.6*s),e.ripple.material.opacity=.8*(1-n)**1.3;let r=Math.min(1,e.t/.55);e.halo.scale.setScalar(.8+1.3*(1-(1-r)**2)),e.halo.material.opacity=.6*Math.sin(Math.PI*r)}tick(t,e){let n=this.pivot,s=this.status,r=0,o=1,a=1,l=0,c=0,h=0;if(!ls){let b=Math.sin(e*2.1+this.phase);if(a=1+.018*b,o=1-.012*b,s==="working"&&(r=.012*Math.abs(Math.sin(e*9+this.phase)),l=.06),s==="stuck"&&(c=.09*Math.sin(e*1.3+this.phase)),s==="error"){let S=(e+this.phase)%1.6;S<.45&&(h=.03*Math.sin(S*70))}s==="waiting_user"&&!this.anim&&(this.nextAction-=t,this.nextAction<=0&&(this.hop(.32),this.nextAction=1.7+Math.random()*.6))}if(this.anim){let b=this.anim;b.t+=t;let S=Ae(b.t/b.dur,0,1);if(b.kind==="hop")({y:r,sx:o,sy:a}=wE(S,b.h));else if(b.kind==="drop"){b.t<0&&(r=b.from);let A=Math.min(1,S/.55);b.t>=0&&(r=b.from*(1-A*A)),S>.55&&({sx:o,sy:a}=Rg((S-.55)/.45))}else if(b.kind==="travel"){let A=AE(S);this.root.position.lerpVectors(b.from,b.to,A);let _=Math.max(1,Math.round(b.dur/.42)),T=S*_%1;r=.55*Math.sin(T*Math.PI),a=1+.12*Math.sin(T*Math.PI),o=1-.07*Math.sin(T*Math.PI),this.baseYaw=S<.92?b.travelYaw:b.toYaw}b.t>=b.dur&&(b.kind==="travel"&&(this.root.position.copy(b.to),this.baseYaw=b.toYaw),this.anim=null)}let u=this.ctx.cursor,f=0,d=0,p=99;if(u?.active&&!this.retiring&&this.hostAlpha>.6){let b=u.x-this.root.position.x,S=u.z-this.root.position.z;p=Math.hypot(b,S),p<dd&&(f=si(dd,dd-1.3,p),d=Math.atan2(b,S))}this.hopCooldown-=t,p<mE&&this.hopCooldown<=0&&!this.anim&&!ls&&(this.hop(.26),this.hopCooldown=gE);let x=(this.baseYaw||0)+(this.anim?.kind==="travel"?0:fd),m=x;if(this.hovered||this.selected)m=pE;else if(f>0){let S=!this.spotIsLounge()&&s!=="idle"?.8:1.9;m=x+Ae(pd(d,x),-S,S)*f}this.yawS.target=this.yawS.x+pd(m,this.yawS.x),this.yawS.step(t);let g=this.selected?1.06:1,y=this.scaleS.step(t);if(n.position.set(h,r,0),n.scale.set(o*g*y,a*g*y,o*g*y),n.rotation.set(l,this.yawS.x,c,"YXZ"),f>0&&!this.hovered&&!this.selected){let b=pd(d,this.yawS.x);this.eyeX.to(Math.sin(Ae(b,-1.2,1.2))*xE*f),this.eyeY.to(-.012*f)}else this.eyeX.to(0),this.eyeY.to(0);this.eyeX.step(t),this.eyeY.step(t);let E=s==="working"?.14+.05*Math.sin(e*3+this.phase):s==="waiting_user"||s==="error"?.4+.25*(.5+.5*Math.sin(e*5)):s==="stuck"?.3+.15*Math.sin(e*2):0,v=this.selected?.8:this.hovered?Math.max(.4,E):E;this.ring.material.opacity=v*Ae(y,0,1),this.ring.scale.setScalar(this.selected?1.12:1),this.fx&&this.tickCelebration(t),this.tag.visible=this.tagEl.dataset.mode!=="off"&&this.hostAlpha>.5&&!this.retiring&&this.scaleS.x>.6,this.tickEyes(t),this.retiring&&this.scaleS.x<.03&&(this.dead=!0,this.dispose())}tickEyes(t){if(!this.eyes.length)return;let e=this.status,n=1;if(e==="idle"&&!this.spotIsLounge()?n=.12:e==="error"?n=.55:e==="stuck"&&(n=.7),n>.5&&!ls&&(this.nextBlink-=t,this.nextBlink<=0&&(this.blinkT=0,this.nextBlink=2.2+Math.random()*3.5),this.blinkT>=0)){this.blinkT+=t;let r=this.blinkT/.16;r>=1?this.blinkT=-1:n*=Math.max(.1,Math.abs(1-2*r))}this.joy>0&&(this.joy-=t,n=Math.min(n,.32));let s=1/this.modelScale;this.eyes.forEach((r,o)=>{r.scale.y=this.eyeBase[o]*n,r.position.x=this.eyePos[o].x+this.eyeX.x*s,r.position.y=this.eyePos[o].y+this.eyeY.x*s})}dispose(){this.endCelebration();for(let t of this.pickMeshes||[])this.ctx.pickables.delete(t);this.tagEl.remove(),this.root.removeFromParent()}};function EE(i){return new He({color:i,roughness:.32,clearcoat:1,clearcoatRoughness:.18,sheen:.3})}function TE(i,t){let e=(t||"").trim();return i==="stuck"||!e?dE[i]||"":(e=e.charAt(0).toUpperCase()+e.slice(1),e.length>34?`${e.slice(0,33).trimEnd()}\u2026`:e)}function wE(i,t){if(i<.15){let e=i/.15;return{y:0,sx:1+.12*e,sy:1-.18*e}}if(i<.7){let e=(i-.15)/.55;return{y:t*Math.sin(e*Math.PI),sx:.93,sy:1.12}}return{y:0,...Rg((i-.7)/.3)}}function Rg(i){let t=Math.sin(i*Math.PI)*(1-i);return{sx:1+.16*t,sy:1-.2*t}}var AE=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function pd(i,t){return((i-t+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI}function RE(i,t){for(let e=t.parent;e;e=e.parent)if(e===i)return!0;return!1}function CE(i){let t=2166136261;for(let e=0;e<i.length;e++)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Mh(i){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createRadialGradient(64,64,0,64,64,64);for(let[r,o]of i)n.addColorStop(r,o);e.fillStyle=n,e.fillRect(0,0,128,128);let s=new ti(t);return s.colorSpace=te,s}var md=["sphere","cloud","rounded_square","star4","clover","bubble","flower","drop","pill","triangle","pentagon","star6","hexagon"],Cg=[...md,"rounded_cube","cone","trio"],Ig=["none","glasses","stem","antenna","bow"],IE=/^#?[0-9a-f]{6}$/i;function Pg(i){if(typeof i!="string")return null;let t=i.trim().toLowerCase().replace(/[\s-]+/g,"_");return Cg.includes(t)?t:null}function Lg(i){if(typeof i!="string")return"none";let t=i.trim().toLowerCase();return Ig.includes(t)?t:"none"}function Ng(i){return typeof i=="string"&&IE.test(i.trim())?`#${i.trim().replace("#","").toUpperCase()}`:null}function gd(i){let t=2166136261,e=String(i);for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Dg(i){return md[(gd(`shape:${i}`)>>>4)%md.length]}var Ba=i=>i*Math.PI/180,PE=(i,t,e)=>i+(t-i)*e;function LE(i,t,e,n=720){let s=[];for(let r=0;r<n;r++){let o=2*Math.PI*r/n,a=Math.cos(o),l=Math.sin(o),c=(Math.abs(a/i)**e+Math.abs(l/t)**e)**(-1/e);s.push([c*a,c*l])}return s}function NE(i,t,e){let n=[];for(let s=0;s<i;s++)n.push([t*Math.cos(Ba(e+360*s/i)),t*Math.sin(Ba(e+360*s/i))]);return n}function DE(i,t,e=24){let n=i.length,s=[];for(let o=0;o<n;o++){let a=[i[(o+1)%n][0]-i[o][0],i[(o+1)%n][1]-i[o][1]],l=Math.hypot(a[0],a[1]);s.push([a[1]/l,-a[0]/l])}let r=[];for(let o=0;o<n;o++){let a=s[(o+n-1)%n],l=Math.atan2(a[1],a[0]),c=Math.atan2(s[o][1],s[o][0]);for(;c<l;)c+=2*Math.PI;for(let h=0;h<e;h++){let u=PE(l,c,h/(e-1));r.push([i[o][0]+t*Math.cos(u),i[o][1]+t*Math.sin(u)])}}return r}function FE(i,t,e,n,s=1440){let r=[];for(let o=0;o<s;o++){let a=2*Math.PI*o/s,l=((1+Math.cos(i*(a-Ba(n))))/2)**e,c=t+(1-t)*l;r.push([c*Math.cos(a),c*Math.sin(a)])}return r}function UE(i,t=96){let e=[];for(let[o,a,l]of i)for(let c=0;c<t;c++){let h=2*Math.PI*c/t;e.push([o+l*Math.cos(h),a+l*Math.sin(h)])}e.sort((o,a)=>o[0]-a[0]||o[1]-a[1]);let n=(o,a,l)=>(a[0]-o[0])*(l[1]-o[1])-(a[1]-o[1])*(l[0]-o[0]),s=[],r=[];for(let o of e){for(;s.length>=2&&n(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}for(let o=e.length-1;o>=0;o--){let a=e[o];for(;r.length>=2&&n(r[r.length-2],r[r.length-1],a)<=0;)r.pop();r.push(a)}return s.slice(0,-1).concat(r.slice(0,-1))}function OE(i,t=720){let e=[];for(let n=0;n<t;n++){let s=2*Math.PI*n/t,r=i[0];for(let o=1;2*o-1<i.length;o++)r+=i[2*o-1]*Math.cos(o*s)+(i[2*o]??0)*Math.sin(o*s);e.push([r*Math.cos(s),r*Math.sin(s)])}return e}function BE(i,t){let e=Math.cos(Ba(t)),n=Math.sin(Ba(t));return i.map(([s,r])=>[s*e-r*n,s*n+r*e])}function Fg(i){let t;if(i.kind==="sup")t=LE(i.a,i.b,i.n);else if(i.kind==="star")t=FE(i.k,i.rin,i.p,i.tip);else if(i.kind==="poly")t=DE(NE(i.n,i.R-i.rr,i.rot??90),i.rr),i.sy&&(t=t.map(([e,n])=>[e,n*i.sy]));else if(i.kind==="hull")t=UE(i.circles);else if(i.kind==="fourier")t=OE(i.c);else throw new Error(`outline ${i.kind}`);return i.rotate?BE(t,i.rotate):t}function xd(i,t,e=[0,0]){let n=i.length,s=new Float64Array(t);for(let r=0;r<t;r++){let o=2*Math.PI*r/t,a=Math.cos(o),l=Math.sin(o),c=0;for(let h=0;h<n;h++){let u=i[h][0]-e[0],f=i[h][1]-e[1],d=i[(h+1)%n],p=d[0]-e[0]-u,x=d[1]-e[1]-f,m=a*x-l*p;if(Math.abs(m)<1e-12)continue;let g=(u*x-f*p)/m,y=(u*l-f*a)/m;y>=-1e-9&&y<=1+1e-9&&g>c&&(c=g)}s[r]=c}return s}function Sh(i,t=1){let e=i.length,n=Float64Array.from(i);for(let s=0;s<t;s++){let r=new Float64Array(e);for(let o=0;o<e;o++)r[o]=.25*n[(o+e-1)%e]+.5*n[o]+.25*n[(o+1)%e];n=r}return n}var Ks=.8,zE=.018;var Ug=.05,us=i=>i*Math.PI/180,Ed=[1,0,0,0,1,0,0,0,1],Th=(i,t)=>[i[0]*t[0]+i[1]*t[1]+i[2]*t[2],i[3]*t[0]+i[4]*t[1]+i[5]*t[2],i[6]*t[0]+i[7]*t[1]+i[8]*t[2]];function Xg(i,t){let e=new Array(9);for(let n=0;n<3;n++)for(let s=0;s<3;s++)e[n*3+s]=i[n*3]*t[s]+i[n*3+1]*t[3+s]+i[n*3+2]*t[6+s];return e}var Rd=i=>{let t=Math.cos(us(i)),e=Math.sin(us(i));return[t,-e,0,e,t,0,0,0,1]};function kE(i){let t=i[2];if(t>.99999)return Ed;let e=[-i[1],i[0],0],n=[0,-e[2],e[1],e[2],0,-e[0],-e[1],e[0],0],s=Xg(n,n);return Ed.map((r,o)=>r+n[o]+s[o]/(1+t))}var co=i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},$s=(i,t,e)=>i+(t-i)*e,Td=class{constructor(t,e=Ks){let n=t.N??88;this.N=n,this.D=e,this.th=Float64Array.from({length:n},(h,u)=>2*Math.PI*u/n);let s=Fg(t.outline),r=Sh(xd(s,n),t.smooth??1),o=[],a=[];for(let h=0;h<n;h++)o.push(r[h]*Math.cos(this.th[h])),a.push(r[h]*Math.sin(this.th[h]));let l=Math.max(Math.max(...o)-Math.min(...o),Math.max(...a)-Math.min(...a));this.r=r.map(h=>h*e/l),this.T=(t.depth??.5)*e/2,this.dome=t.dome??.1,this.nb=t.nb??7,this.flat=t.flat??[.45,.8],this.wall=(t.wall??0)*this.T;let c=t.bevel??.92;if(this.W=Sh(this.r.map(h=>Math.min(c*this.T,.85*h)),3),t.inner){let h=Sh(this.r.map((u,f)=>u-this.W[f]),t.inner);this.W=this.W.map((u,f)=>this.r[f]-Math.min(h[f],this.r[f]-.35*u))}this.centre=[0,0]}_interp(t,e){let n=this.N,s=(e%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*n,r=Math.floor(s)%n,o=s-Math.floor(s);return $s(t[r],t[(r+1)%n],o)}rimAt(t){let e=this._interp(this.r,t);return[this.centre[0]+e*Math.cos(t),this.centre[1]+e*Math.sin(t)]}zAt(t,e){let n=Math.atan2(e,t),s=this._interp(this.r,n),r=this._interp(this.W,n),o=Math.min(Math.hypot(t,e),s*.999),a=s-o;if(a>=r){let c=o/(s-r);return this.T*(1+this.dome*(1-c*c)**2)}let l=1-a/r;return this.wall+(this.T-this.wall)*Math.sqrt(Math.max(0,1-l*l))}nAt(t,e){return qg(this,t,e)}rings(){let{r:t,W:e,T:n,dome:s,N:r,nb:o,wall:a}=this,l=[];for(let u of this.flat)l.push({rho:Float64Array.from({length:r},(f,d)=>u*(t[d]-e[d])),z:n*(1+s*(1-u*u)**2)});for(let u=0;u<=o;u++){let f=Math.PI/2*(u/o);l.push({rho:Float64Array.from({length:r},(d,p)=>t[p]-e[p]*(1-Math.sin(f))),z:a+(n-a)*Math.cos(f)})}let h=(a>0?l:l.slice(0,-1)).slice().reverse().map(u=>({rho:u.rho,z:-u.z}));return l.concat(h)}emit(t=[0,0,0]){let e=this.rings(),n=this.N,s=e.length,r=this.th,o=this.T*(1+this.dome),a=[[t[0],t[1],t[2]+o]];for(let u of e)for(let f=0;f<n;f++)a.push([t[0]+u.rho[f]*Math.cos(r[f]),t[1]+u.rho[f]*Math.sin(r[f]),t[2]+u.z]);a.push([t[0],t[1],t[2]-o]);let l=[];for(let u=0;u<n;u++)l.push([0,1+(u+1)%n,1+u]);for(let u=0;u<s-1;u++)for(let f=0;f<n;f++){let d=(f+1)%n;l.push([1+u*n+f,1+u*n+d,1+(u+1)*n+d,1+(u+1)*n+f])}let c=1+(s-1)*n,h=1+s*n;for(let u=0;u<n;u++)l.push([h,c+u,c+(u+1)%n]);return{V:a,F:l}}},wd=class{constructor(t,e=Ks){this.D=e;let n=e,s=t.rr??.12*(e/Ks),o=(t.width??.9)*e/2-s,a=n-s,l=Math.atan2(o,a-s),c=[[0,0],[o*.5,0],[o,0]],h=7,u=4;for(let x=1;x<=h;x++){let m=$s(-Math.PI/2,l,x/h);c.push([o+s*Math.cos(m),s+s*Math.sin(m)])}let f=Math.cos(l),d=Math.sin(l);for(let x=1;x<u;x++){let m=x/u;c.push([$s(o,0,m)+s*f,$s(s,a,m)+s*d])}for(let x=0;x<=h;x++){let m=$s(l,Math.PI/2,x/h);c.push([s*Math.cos(m),a+s*Math.sin(m)])}c[c.length-1][0]=0,this.prof=c,this.sectors=t.sectors??56,this.H=n,this.centre=[0,n*.45];let p=c.slice(1).concat(c.slice(1,-1).reverse().map(([x,m])=>[-x,m]));this.N=96,this.r=xd(p,this.N,this.centre),this.side=c.slice(3)}rho(t){let e=this.side;if(t<=e[0][1])return e[0][0];for(let n=1;n<e.length;n++)if(t<=e[n][1])return $s(e[n-1][0],e[n][0],(t-e[n-1][1])/Math.max(1e-9,e[n][1]-e[n-1][1]));return 0}zAt(t,e){let n=this.rho(e),s=Math.min(Math.abs(t),n*.999);return Math.sqrt(Math.max(0,n*n-s*s))}nAt(t,e){return qg(this,t,e)}rimAt(t){let e=(t%(2*Math.PI)+2*Math.PI)%(2*Math.PI)/(2*Math.PI)*this.N,n=Math.floor(e)%this.N,s=e-Math.floor(e),r=$s(this.r[n],this.r[(n+1)%this.N],s);return[this.centre[0]+r*Math.cos(t),this.centre[1]+r*Math.sin(t)]}emit(t=[0,0,0]){let e=this.prof,n=this.sectors,s=[],r=[],o=[];for(let[a,l]of e){if(a<1e-9){o.push({pole:s.length}),s.push([t[0],t[1]+l,t[2]]);continue}let c=s.length;for(let h=0;h<n;h++){let u=2*Math.PI*h/n;s.push([t[0]+a*Math.cos(u),t[1]+l,t[2]+a*Math.sin(u)])}o.push({start:c})}for(let a=0;a<o.length-1;a++){let l=o[a],c=o[a+1];for(let h=0;h<n;h++){let u=(h+1)%n;l.pole!==void 0?r.push([l.pole,c.start+u,c.start+h]):c.pole!==void 0?r.push([l.start+h,l.start+u,c.pole]):r.push([l.start+h,l.start+u,c.start+u,c.start+h])}}return{V:s,F:r}}};function qg(i,t,e){let n=.004*(i.D/Ks),s=(i.zAt(t+n,e)-i.zAt(t-n,e))/(2*n),r=(i.zAt(t,e+n)-i.zAt(t,e-n))/(2*n);return co([-s,-r,1])}var Yg=(i,t,e,n={})=>({kind:"poly",n:i,R:1,rr:t,rot:e,...n}),Ln=(i,t,e,n,s)=>({c:i,sp:t,w:+(e/2.6).toFixed(3),h:e,pair:n,tilt:s}),HE={cloud:[.4644,-.0013,.0016,.0344,.0162,.0252,-.0051,-.0056,-.0039,.0193,-.0015,.0026,-.0043,-.0025,.0049,-.0053,.0015],star4:[.4131,1e-4,0,-3e-4,-.0167,-2e-4,-2e-4,.0736,.0341,-2e-4,-1e-4,2e-4,.0022,-4e-4,0,.0012,-4e-4,1e-4,-1e-4,-.0014,7e-4,2e-4,1e-4,.0027,.0053],clover:[.4623,0,0,.0045,-.0273,2e-4,-1e-4,-.0036,-.0449,-4e-4,1e-4,2e-4,8e-4,-4e-4,0,.0105,-.0056,0,2e-4,-.002,5e-4],bubble:[.4568,.0013,-.0022,.0313,.0104,-.0395,.0269,-.0026,.0079,.0083,.002,7e-4,.0027,-.0027,-1e-4,7e-4,-.0011],flower:[.4574,0,0,.0025,-.022,0,0,.0026,3e-4,2e-4,0,.0207,-.0284,0,0,.0046,.0035,-1e-4,-3e-4,.0023,-.002,0,1e-4,.0014,.0062,-1e-4,1e-4,-.0023,6e-4,3e-4,-2e-4,0,-3e-4,1e-4,3e-4,-.003,-.001,-1e-4,-1e-4,4e-4,-.0018],star6:[.4235,-1e-4,0,.0048,-.0394,0,0,-.0051,-.0014,4e-4,-1e-4,.0417,-.0574,4e-4,2e-4,.0021,.0032,-1e-4,-1e-4,-.003,-2e-4,1e-4,0,.001,.0033,1e-4,1e-4,.0058,-8e-4,-1e-4,3e-4,2e-4,-.0049,-1e-4,0,-6e-4,0]},lo=i=>({kind:"fourier",c:HE[i]}),GE={sphere:{type:"slab",outline:{kind:"sup",a:1,b:1,n:2},face:Ln([.17,.218],.26,.272,25,36)},cloud:{type:"slab",N:96,smooth:0,inner:10,outline:lo("cloud"),face:Ln([.161,.15],.214,.236,16,28)},rounded_square:{type:"slab",outline:{kind:"hull",circles:[[.146,.381,.107],[-.393,.195,.141],[-.149,-.383,.106],[.397,-.195,.139]]},face:Ln([.08,.023],.18,.212,16,29)},star4:{type:"slab",N:112,smooth:0,depth:.3,bevel:.5,outline:lo("star4"),face:Ln([.076,.086],.186,.191,16,28)},clover:{type:"slab",N:104,smooth:0,inner:10,outline:lo("clover"),face:Ln([.062,.081],.212,.212,15,28)},bubble:{type:"slab",N:96,smooth:0,inner:8,outline:lo("bubble"),face:Ln([.179,.087],.208,.214,16,24)},flower:{type:"slab",N:108,smooth:0,inner:10,outline:lo("flower"),face:Ln([.107,.033],.179,.213,15,28)},drop:{type:"slab",outline:{kind:"hull",circles:[[.015,-.031,.419],[-.166,.34,.148]]},face:Ln([.192,.145],.201,.227,16,27)},pill:{type:"slab",outline:{kind:"hull",circles:[[.149,.042,.339],[-.148,-.042,.34]]},face:Ln([.144,.14],.267,.233,15,27)},triangle:{type:"slab",outline:{kind:"hull",circles:[[.723,-.02,.185],[-.23,.471,.319],[-.222,-.339,.41]]},face:Ln([.145,.213],.201,.216,12,54)},pentagon:{type:"slab",outline:{kind:"hull",circles:[[.276,.325,.101],[-.184,.425,.177],[-.414,.049,.157],[-.202,-.411,.151],[.41,-.181,.211]]},face:Ln([.075,.053],.203,.222,15,28)},star6:{type:"slab",N:108,smooth:0,depth:.3,bevel:.5,outline:lo("star6"),face:Ln([.092,.017],.189,.202,16,28)},hexagon:{type:"slab",outline:{kind:"hull",circles:[[.264,.33,.112],[-.154,.4,.152],[-.404,.073,.162],[-.267,-.334,.108],[.153,-.399,.153],[.412,-.073,.155]]},face:Ln([.1,.029],.275,.274,15,28)},rounded_cube:{type:"slab",outline:{...Yg(4,.27,45),rotate:18},depth:.74,bevel:.62,wall:.5,face:{c:[.04,.03],sp:.22,w:.1,h:.23,pair:12,tilt:25}},cone:{type:"lathe",face:{c:[0,.31],sp:.22,w:.105,h:.23,pair:0,tilt:0}},trio:{type:"trio"}},VE=[{key:"a",mat:0,D:.42,at:[-.2,.2,0],def:{type:"slab",N:48,nb:5,flat:[.5],outline:{kind:"sup",a:1,b:.93,n:2.4,rotate:5},face:{c:[.12,.08],sp:.25,w:.12,h:.25,pair:14,tilt:18}}},{key:"b",mat:1,D:.46,at:[.19,.23,.05],primary:!0,def:{type:"slab",N:48,nb:5,flat:[.5],outline:{...Yg(6,.3,90),rotate:-6},face:{c:[.03,-.02],sp:.26,w:.11,h:.25,pair:10,tilt:4}}},{key:"c",mat:2,D:.42,at:[.02,.57,-.09],host:!0,def:{type:"slab",N:60,nb:5,flat:[.5],depth:.4,bevel:.7,outline:{kind:"star",k:6,rin:.58,p:1.1,tip:90},face:{c:[0,-.07],sp:.25,w:.115,h:.24,pair:0,tilt:0}}}];function Og(i,t){return i.type==="lathe"?new wd(i,t):new Td(i,t)}function Eh(i,t,e,n=16,s=10,r=2.7){let o=[[0,0,e]];for(let h=1;h<s;h++){let u=Math.PI*h/s;for(let f=0;f<n;f++){let d=2*Math.PI*f/n,p=Math.cos(d),x=Math.sin(d),m=(Math.abs(p)**r+Math.abs(x)**r)**(-1/r);o.push([i*Math.sin(u)*p*m,t*Math.sin(u)*x*m,e*Math.cos(u)])}}o.push([0,0,-e]);let a=[];for(let h=0;h<n;h++)a.push([0,1+(h+1)%n,1+h]);for(let h=0;h<s-2;h++)for(let u=0;u<n;u++){let f=(u+1)%n;a.push([1+h*n+u,1+h*n+f,1+(h+1)*n+f,1+(h+1)*n+u])}let l=o.length-1,c=1+(s-2)*n;for(let h=0;h<n;h++)a.push([l,c+h,c+(h+1)%n]);return{V:o,F:a}}function WE(i,t,e=22,n=8){let s=[],r=[];for(let o=0;o<e;o++){let a=2*Math.PI*o/e;for(let l=0;l<n;l++){let c=2*Math.PI*l/n;s.push([(i+t*Math.cos(c))*Math.cos(a),(i+t*Math.cos(c))*Math.sin(a),t*Math.sin(c)])}}for(let o=0;o<e;o++)for(let a=0;a<n;a++)r.push([o*n+a,(o+1)%e*n+a,(o+1)%e*n+(a+1)%n,o*n+(a+1)%n]);return{V:s,F:r}}function bh(i,t,e=8){let n=i.length,s=[],r=[],o=(f,d)=>[f[0]-d[0],f[1]-d[1],f[2]-d[2]],a=(f,d)=>[f[1]*d[2]-f[2]*d[1],f[2]*d[0]-f[0]*d[2],f[0]*d[1]-f[1]*d[0]];for(let f=0;f<n;f++){let d=co(o(i[Math.min(f+1,n-1)],i[Math.max(f-1,0)])),p=a(d,[0,0,1]);Math.hypot(...p)<1e-6&&(p=a(d,[0,1,0])),p=co(p);let x=a(d,p);for(let m=0;m<e;m++){let g=2*Math.PI*m/e,y=Math.cos(g)*t[f],E=Math.sin(g)*t[f];s.push([i[f][0]+y*p[0]+E*x[0],i[f][1]+y*p[1]+E*x[1],i[f][2]+y*p[2]+E*x[2]])}}for(let f=0;f<n-1;f++)for(let d=0;d<e;d++){let p=(d+1)%e;r.push([f*e+d,f*e+p,(f+1)*e+p,(f+1)*e+d])}let l=co(o(i[1],i[0])),c=co(o(i[n-1],i[n-2])),h=s.length;s.push([i[0][0]-l[0]*t[0]*.5,i[0][1]-l[1]*t[0]*.5,i[0][2]-l[2]*t[0]*.5]);let u=s.length;s.push([i[n-1][0]+c[0]*t[n-1]*.8,i[n-1][1]+c[1]*t[n-1]*.8,i[n-1][2]+c[2]*t[n-1]*.8]);for(let f=0;f<e;f++){let d=(f+1)%e;r.push([h,d,f]),r.push([u,(n-1)*e+f,(n-1)*e+d])}return{V:s,F:r}}var Bg=(i,t,e,n)=>[0,1,2].map(s=>(1-n)**2*i[s]+2*(1-n)*n*t[s]+n*n*e[s]),za=(i,t,e=[0,0,0])=>i.map(n=>{let s=Th(t,n);return[s[0]+e[0],s[1]+e[1],s[2]+e[2]]});function $g(i,t,e,n,s=.7){let r=i.zAt(t,e),o=i.nAt(t,e),a=co([s*o[0],s*o[1],s*o[2]+(1-s)]);return{z:r,M:Xg(kE(a),Rd(n))}}function XE(i,t){let{body:e,at:n,D:s}=i,r={...i.face};t==="glasses"&&i.glasses&&(r.sp=Math.max(r.sp,.25),r.h=Math.min(r.h,.2),r.w=Math.min(r.w,.09));let o=[r.c[0]*s,r.c[1]*s],a=[Math.cos(us(r.pair))*r.sp*s/2,Math.sin(us(r.pair))*r.sp*s/2],l=r.w*s/2,c=r.h*s/2,h=.62*l,u=[];for(let[f,d]of[["L",[o[0]-a[0],o[1]-a[1]]],["R",[o[0]+a[0],o[1]+a[1]]]]){let{z:p,M:x}=$g(e,d[0],d[1],r.tilt),m=Eh(l,c,h,i.eyeSeg??16,i.eyeRings??10);u.push({side:f,c:d,M:x,centre:[d[0]+n[0],d[1]+n[1],p+.15*h+n[2]],V:za(m.V,x),F:m.F})}return u}function zg(i,t=0){let e=-Math.sin(us(t)),n=Math.cos(us(t)),s=-1/0,r=i.rimAt(Math.PI/2);for(let o=0;o<180;o++){let a=i.rimAt(2*Math.PI*o/180),l=a[0]*e+a[1]*n;l>s+1e-9&&(s=l,r=a)}return r}function kg(i,t,e,n){let{body:s,at:r,D:o}=t,a=o/Ks,l=(h,u=0)=>[h[0]+r[0],h[1]+r[1],u+r[2]],c=[];if(i==="stem"){let h=zg(s,20),u=[h[0]+.012*a,h[1]-.045*a,0],f=[u[0]-.035*a,u[1]+.09*a,0],d=[u[0]-.1*a,u[1]+.155*a,0],p=Array.from({length:11},(m,g)=>g/10),x=bh(p.map(m=>l(Bg(u,f,d,m))),p.map(m=>a*(.045-.01*m)),8);c.push({...x,mat:0})}else if(i==="antenna"){let h=zg(s),u=[h[0]-.01*a,h[1]-.06*a,0],f=[u[0]+.015*a,u[1]+.1*a,0],d=[u[0]+.05*a,u[1]+.2*a,0],p=Array.from({length:9},(E,v)=>v/8),x=bh(p.map(E=>l(Bg(u,f,d,E))),p.map(E=>a*(.036-.008*E)),8);c.push({...x,mat:0});let m=.075*a,g=Eh(m,m,m,14,10,2),y=l([d[0]+.004*a,d[1]+.5*m],0);c.push({V:g.V.map(E=>[E[0]+y[0],E[1]+y[1],E[2]+y[2]]),F:g.F,mat:1})}else if(i==="bow"){let h=us(64),u=s.rimAt(h),f=[u[0]*.93+(1-.93)*s.centre[0],u[1]*.93+(1-.93)*s.centre[1]],d=s.T!==void 0?s.T*.34:.08*a,p=h+Math.PI/2-us(14),x=Rd(p*180/Math.PI),m=Eh(.13*a,.085*a,.06*a,14,9,2),g=Eh(.06*a,.06*a,.058*a,12,8,2),y=l(f,d);for(let E of[-1,1])c.push({V:za(m.V,x,[y[0]+E*.12*a*Math.cos(p),y[1]+E*.12*a*Math.sin(p),y[2]-.004*a]),F:m.F,mat:1});c.push({V:za(g.V,Ed,y),F:g.F,mat:1})}else if(i==="glasses"){let h=Math.min(.118,e.sp*.5-.006)*o,u=.017*o,f=[];for(let y of e.list){let{z:E,M:v}=$g(s,y.c[0],y.c[1],0,.7),b=[y.c[0],y.c[1],E+.004*a],S=WE(h,u,o<.6?14:24,o<.6?6:8);c.push({V:za(S.V,v,l([b[0],b[1]],b[2])),F:S.F,mat:0}),f.push(y.c)}let[d,p]=f,x=Math.hypot(p[0]-d[0],p[1]-d[1]),m=[(p[0]-d[0])/x,(p[1]-d[1])/x],g=[];for(let y=0;y<5;y++){let E=y/4,v=d[0]+m[0]*h+(p[0]-d[0]-2*m[0]*h)*E,b=d[1]+m[1]*h+(p[1]-d[1]-2*m[1]*h)*E;g.push(l([v,b],s.zAt(v,b)+u*1.2+.006*a*Math.sin(Math.PI*E)))}c.push({...bh(g,Array(5).fill(u),6),mat:0});for(let[y,E]of[[-1,d],[1,p]]){let v=[];for(let b=0;b<9;b++){let S=b/8,A=E[0]+y*m[0]*(h+S*(.4*o-h+.02*a)),_=E[1]+y*m[1]*(h+S*(.4*o-h+.02*a)),T=s.rimAt(Math.atan2(_-s.centre[1],A-s.centre[0])),R=Math.hypot(T[0]-s.centre[0],T[1]-s.centre[1])*.985,P=Math.hypot(A-s.centre[0],_-s.centre[1]);if(P>R){let L=R/P;A=s.centre[0]+(A-s.centre[0])*L,_=s.centre[1]+(_-s.centre[1])*L}v.push(l([A,_],s.zAt(A,_)+u*1.2))}c.push({...bh(v,Array(9).fill(u*.9),6),mat:0})}}return c}function Ad(i,t=e=>e){let e=[...new Set(i.map(a=>a.mat))].sort((a,l)=>a-l),n=[],s=[],r=[];for(let a of e){let l=s.length;for(let c of i){if(c.mat!==a)continue;let h=c.V.map(t),u=[];for(let p of c.F)p.length===3?u.push(p):(u.push([p[0],p[1],p[2]]),u.push([p[0],p[2],p[3]]));let f=0;for(let[p,x,m]of u){let g=h[p],y=h[x],E=h[m];f+=g[0]*(y[1]*E[2]-y[2]*E[1])+g[1]*(y[2]*E[0]-y[0]*E[2])+g[2]*(y[0]*E[1]-y[1]*E[0])}let d=n.length/3;for(let p of h)n.push(p[0],p[1],p[2]);for(let[p,x,m]of u)s.push(d+p,d+(f<0?m:x),d+(f<0?x:m))}r.push({start:l,count:s.length-l,materialIndex:a})}let o=new me;o.setAttribute("position",new $t(n,3)),o.setIndex(s);for(let a of r)o.addGroup(a.start,a.count,a.materialIndex);return o.computeVertexNormals(),o.computeBoundingBox(),o.computeBoundingSphere(),o}function qE(i){let t=GE[i];return t.type==="trio"?VE.map(e=>({body:Og(e.def,e.D),at:e.at,D:e.D,face:e.def.face,mat:e.mat,primary:!!e.primary,host:!!e.host,glasses:!!e.primary,eyeSeg:12,eyeRings:8})):[{body:Og(t,Ks),at:[0,0,0],D:Ks,face:t.face,mat:0,primary:!0,host:!0,glasses:!0}]}var _d=new Map,yd=new Map;function YE(i,t){let e=`${i}|${t}`;if(_d.has(e))return _d.get(e);let n=qE(i),s=Rd(t),r=m=>Th(s,m),a=n.map(m=>({...m.body.emit(m.at),mat:m.mat})).map(m=>({...m,V:m.V.map(r)})),l=1/0;for(let m of a)for(let g of m.V)l=Math.min(l,g[1]);let c=.01,h=zE;for(let m of a)for(let g of m.V){let y=g[1]-l-h;g[1]=l+h+.5*(y+Math.sqrt(y*y+c*c))}let u=[1/0,1/0,1/0],f=[-1/0,-1/0,-1/0];for(let m of a)for(let g of m.V)for(let y=0;y<3;y++)u[y]=Math.min(u[y],g[y]),f[y]=Math.max(f[y],g[y]);let d=[-(u[0]+f[0])/2,-u[1],-(u[2]+f[2])/2],p=Ad(a,m=>[m[0]+d[0],m[1]+d[1],m[2]+d[2]]),x={units:n,R:s,shift:d,geo:p,nMats:new Set(n.map(m=>m.mat)).size,tris:p.index.count/3};return _d.set(e,x),x}function $E(i,t,e){let n=`${i}|${t}|${e}`;if(yd.has(n))return yd.get(n);let s=YE(i,t),{units:r,R:o,shift:a}=s,l=x=>{let m=Th(o,x);return[m[0]+a[0],m[1]+a[1],m[2]+a[2]]},c=[],h=2,u=null;for(let x of r){let m=XE(x,e);e==="glasses"&&x.glasses&&(u={u:x,list:m,sp:Math.max(x.face.sp,.25)});for(let g of m){let y=x.primary?`eye_${g.side}`:`eye_${g.side}_${h}`,E=Ad([{V:za(g.V,o),F:g.F,mat:0}]);c.push({name:y,geo:E,pos:l(g.centre)})}x.primary||h++}let f=null;if(e!=="none"){let x=[];if(e==="glasses")u&&(x=kg("glasses",u.u,u,null));else{let m=r.find(g=>g.host)||r[0];x=kg(e,m,null,null)}if(x.length){let m=Ad(x.map(E=>({...E,V:E.V.map(v=>Th(o,v))})),E=>[E[0]+a[0],E[1]+a[1],E[2]+a[2]]),g=m.boundingBox.clone(),y=s.geo.boundingBox;g.min.max(y.min.clone().subScalar(Ug)),g.max.min(y.max.clone().addScalar(Ug)),m.boundingBox=g,f={geo:m,accent:x.some(E=>E.mat===1)}}}let d=s.tris;for(let x of c)d+=x.geo.index.count/3;f&&(d+=f.geo.index.count/3);let p={body:s,eyes:c,extra:f,tris:d};return yd.set(n,p),p}var KE=.78,ZE=.06;function Cd(i){let t=new ut(i),e=.2126*t.r+.7152*t.g+.0722*t.b;return e>=KE?"light":e<ZE?"dark":"mid"}function JE(i){let t=Cd(i);if(t==="light")return"dark";let e=new ut(i).convertLinearToSRGB();return t==="mid"&&Math.max(e.r,e.g,e.b)-Math.min(e.r,e.g,e.b)<.12?"bright":"white"}var vd=new Map;function Hg(i){return vd.has(i)||vd.set(i,new He({color:i,roughness:.3,metalness:0,clearcoat:1,clearcoatRoughness:.06})),vd.get(i)}var Md=new Map;function jE(i="white"){let t=i==="bright"?.42:.1;return Md.has(i)||Md.set(i,new He(i==="dark"?{color:"#141417",roughness:.2,metalness:0,clearcoat:1,clearcoatRoughness:.04}:{color:16777215,roughness:.22,metalness:0,clearcoat:.6,clearcoatRoughness:.05,emissive:new ut().setRGB(t,t,t,qe)})),Md.get(i)}var Sd=new Map;function QE(i,t=!1){let e=`${i}|${t}`;return Sd.has(e)||Sd.set(e,new He(t?i==="glasses"?{color:"#ECECEF",roughness:.32,clearcoat:.8,clearcoatRoughness:.05}:{color:"#8A8D93",roughness:.4,clearcoat:.6,clearcoatRoughness:.06}:i==="glasses"?{color:"#101012",roughness:.45,clearcoat:.4,clearcoatRoughness:.06}:{color:"#3A3D40",roughness:.5,clearcoat:.3,clearcoatRoughness:.06})),Sd.get(e)}var bd=new Map;function tT(i){return bd.has(i)||bd.set(i,new He({color:i,roughness:.3,clearcoat:1,clearcoatRoughness:.06})),bd.get(i)}var Gg=["#FFD60A","#FF2D6F","#2D7BFF","#2FD067"];function eT(i){let t=new ut(i).convertLinearToSRGB(),e=Cd(i)==="dark"?["#FFFFFF",...Gg]:Gg,n=e[0],s=-1;for(let r of e){let o=new ut(r).convertLinearToSRGB(),a=(t.r+o.r)/2,l=(2+a)*(t.r-o.r)**2+4*(t.g-o.g)**2+(3-a)*(t.b-o.b)**2;l>s&&(s=l,n=r)}return n}function nT(i){let t={};new ut(i).getHSL(t);let e=new ut().setHSL((t.h+150/360)%1,Math.max(t.s,.7),Math.min(.46,Math.max(.36,t.l*.85))),n=t.l<.22?new ut("#F4F4F6"):new ut("#111113");return[i,`#${e.getHexString().toUpperCase()}`,`#${n.getHexString().toUpperCase()}`]}var iT=["#000000","#A06B39","#FB2B3E","#FD690F","#F59312","#14C16F","#13B7A2","#1E86FC","#8F59F9","#F93498","#959595"],Vg=iT.slice(0,10);function Wg(){return 0}function Kg({shape:i,color:t,accessory:e,seed:n}={}){let s=String(n??"blob"),r=Pg(i)??Dg(s),o=Ng(t)??Vg[gd(`color:${s}`)%Vg.length],a=Lg(e),l=$E(r,Wg(s),a),c=l.body.nMats>1?nT(o):[o],h=p=>c[l.body.nMats>1?{2:0,3:2}[p.split("_")[2]]??1:0],u=c[l.body.nMats>1?a==="glasses"?1:2:0],f=new se;f.name="blob";let d=new Dt(l.body.geo,l.body.nMats>1?c.map(Hg):Hg(o));d.name="body",f.add(d);for(let p of l.eyes){let x=new Dt(p.geo,jE(JE(h(p.name))));x.name=p.name,x.position.set(p.pos[0],p.pos[1],p.pos[2]),f.add(x)}if(l.extra){let p=QE(a==="glasses"?"glasses":"stem",Cd(u)==="dark"),x=l.extra.accent?[p,tT(eT(o))]:p,m=new Dt(l.extra.geo,x);m.name="extra",f.add(m)}return f.userData={generated:!0,look:{shape:r,color:o,accessory:a},tris:l.tris,tilt:Wg(s)},f}var Ud="/4d",Od=new I(1,1,1).normalize(),oi={x:-.4,y:-.3,z:.3},fs={w:35,h:22},sT=29.5,Js={min:.75,max:3,focus:2},rT=230,oT=360,jg=Math.sin(Math.atan(1/Math.SQRT2)),aT=[1,3,5,7,9,11,13,15,17,19,2,4,6,8,10,12,14,16,18,20],ce,ds,kt,vi,Sn,po,ho,ue,Mi,Ph=null,Fh=null,Qg={currentFloor:null,selectedBot:null},gn=new Map,gs=new Set,Bd=new Set,Id=new Map,fo=[],Lh=new ha,Va=new J,Si={active:!1,x:0,z:0},Zg=new Tn(new I(0,1,0),0),Ha=new I,wh=new ua,Xt={x:new en(oi.x,.45),y:new en(oi.y,.55),z:new en(oi.z,.45),zoom:new en(0,.4)},Gi=null,Ld=!1,Re=null,bi=new Map,ps=null,Ch=!1,zd=0,ms=0,Nd=!1,ri=null,Dd=0,Nh=null,Wa=!0,Dh=!1,Pd=!0,lT=!1,Ah=1e3/30,cT=.9,mn=(()=>{let i=new URLSearchParams(location.search);return{floor:Dh?null:i.get("floor"),from:i.get("from"),intro:i.get("intro"),hold:i.has("hold")?Number(i.get("hold")):null,cam:i.get("cam"),cursor:i.get("cursor")}})(),Fd=!1,tx=!1,hT=j0(`${Ud}/office`);function ex(i,t={}){let e=++Dd;Wa=!0,Sn=i,po=t,Sn.classList.add("hq-scene"),uT(),ri=Sn.querySelector(".hq-loading"),ri||(ri=document.createElement("div"),ri.className="hq-loading",ri.setAttribute("role","status"),ri.innerHTML='<span class="hq-loading-label">Building the office</span><span class="hq-loading-track"><i></i></span>',Sn.append(ri)),ce=new Zc({antialias:!0,alpha:!0,powerPreference:"default",failIfMajorPerformanceCaveat:!1}),ce.setPixelRatio(Math.min(devicePixelRatio,1.5)),ce.outputColorSpace=te,ce.toneMapping=Bs,ce.toneMappingExposure=1.05,ce.setClearColor(0,0),ce.domElement.className="hq-canvas",Sn.append(ce.domElement),ds=new th,ds.domElement.className="hq-labels",Sn.append(ds.domElement),vi=new ws;let n=new Zr(ce);vi.environment=n.fromScene(new ih,.04).texture,vi.environmentIntensity=.55,ho=Mg({scene:vi,renderer:ce}),document.documentElement.dataset.sky="studio",Sn.style.background=Eg(),kt=new Bn(-1,1,1,-1,.1,240),kt.position.copy(Od).multiplyScalar(80),kt.lookAt(0,0,0),hT.then(s=>{if(e!==Dd||!ce)return;Ph=s,ue=new fh({scene:vi,daylight:ho,assets:s,baseUrl:`${Ud}/office`,renderer:ce}),ho.setBuilding(ue),s.spots.lounges.forEach(o=>{o&&(o.lounge=!0)}),window.bothq=Object.assign(window.bothq||{},{source:s.source}),Ga();let r=()=>{Fh&&kd()};Promise.race([lg,new Promise(o=>setTimeout(o,1500))]).then(r,r)}),Mi=wg(ce,vi,kt),_T(),Nh=new ResizeObserver(Ga),Nh.observe(Sn),Ga(),ce.setAnimationLoop(RT),window.bothq=Object.assign(window.bothq||{},{scene:{get camera(){return kt},get building(){return ue},cam:Xt,actors:gn,get daylight(){return ho},switchFloor:s=>ue&&ix(s,!1),settle:Ih}})}function uT(){if(!document.querySelector('link[href*="scene.css"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="/4d/scene.css",document.head.append(i)}if(!document.querySelector('link[href*="family=Inter"]')){let i=document.createElement("link");i.rel="stylesheet",i.href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;650;700&display=swap",document.head.append(i)}}function nx(i,t){Fh=i,Qg={...t},ue&&kd()}function kd(){let i=Fh,t=Qg,e=[...i.floors].sort((f,d)=>(f.order??0)-(d.order??0));ue.setFloors(e);let n=t.currentFloor&&e.some(f=>f.id===t.currentFloor)?t.currentFloor:e[0]?.id??"_";mn.floor&&e.some(f=>f.id===mn.floor)&&(n=mn.from&&!Ch&&e.some(f=>f.id===mn.from)?mn.from:mn.floor),ue.activeId!==n&&ix(n,!Ch),Ch=!0;let s=ue.activeOpen();if(!s)return;let r=Object.values(i.bots).filter(f=>f.floor===ue.activeId),o=new Set(r.map(f=>f.id));for(let[f,d]of gn)o.has(f)||(d.retire(),gs.add(d),gn.delete(f));let a=Math.max(1e-4,...r.map(f=>f.usage_share||0)),l=fT(r),c=new Array(20).fill(0),h=Math.max(0,zd+.55-ms);for(let f of r){let d=gn.get(f.id);d||(d=new vh(f,{parent:s.root,inst:s,pickables:Bd,confetti:ET,cursor:Si,dropDelay:h}),gn.set(f.id,d),dT(d,f));let p=(aT[(f.desk||1)-1]||1)-1,x=Ph.spots.desks[p]||Ph.spots.desks[0];(f.effective_status||f.status)==="working"&&!l.has(f.id)&&(c[p]=1),d.update(f,l.get(f.id)||x,{maxShare:a,selectedBot:t.selectedBot})}ue.setScreens(c);let u=e.find(f=>f.id===ue.activeId);if(ue.setDisplayData({floorName:u?u.name:"",bots:r,hour:cg(i.now)}),Gi&&!gn.has(Gi)&&(Gi=null),!Nd){if(Nd=!0,mn.intro==="0"&&Ih(3.5),mn.from&&mn.floor&&kd(),mn.hold!==null&&(Ih(mn.hold),Fd=!0),mn.cursor){let[f,d]=mn.cursor.split(",").map(Number);Si.active=!0,Si.x=f,Si.z=d,tx=!0,Ih(1.2)}if(mn.cam){let[f,d,p]=mn.cam.split(",").map(Number);Xt.x.snap(f),Xt.z.snap(d),Xt.zoom.snap(Math.log(p||1))}}}function Ih(i=3){let t=.03333333333333333;for(let e=0;e<i;e+=t){ms+=t,ax(t),ue.update(t,performance.now());for(let n of gn.values())n.hostAlpha=ue.activeOpen()?.alpha??1,n.tick(t,ms);for(let n of gs)n.tick(t,ms),n.dead&&gs.delete(n)}}function fT(i){let t=new Map,e=Ph.spots.lounges.filter(Boolean);return i.filter(s=>(s.effective_status||s.status)==="idle").sort((s,r)=>(s.desk||0)-(r.desk||0)).slice(0,e.length).forEach((s,r)=>t.set(s.id,e[r])),t}function dT(i,t){let e=null,n=r=>{let o=`${r.avatar||r.id}|${r.color||""}|${JSON.stringify(r.look||null)}`;o!==e&&(e=o,(r.has_glb===!1?Promise.resolve(null):pT(r.avatar||r.id)).then(a=>{if(i.dead||e!==o)return;if(a)return i.setModel(a.clone(!0));let l=r.look||{};i.setModel(Kg({shape:l.shape,color:l.color||r.color,accessory:l.accessory,seed:r.id}))}))};n(t);let s=i.update.bind(i);i.update=(r,o,a)=>(n(r),s(r,o,a))}function pT(i){return Id.has(i)||Id.set(i,new to().loadAsync(`${Ud}/blobs/${encodeURIComponent(i)}.glb`).then(t=>t.scene).catch(()=>null)),Id.get(i)}function ix(i,t){for(let n of gn.values())n.retire(),gs.add(n);gn.clear(),Gi=null,ue.setActive(i,{intro:t});let e=ue.activeY+oi.y;Xt.x.to(oi.x),Xt.z.to(oi.z),Xt.y.to(e),Xt.zoom.to(0),t&&(Xt.x.snap(oi.x),Xt.z.snap(oi.z),Xt.y.snap(e-2.6),Xt.zoom.snap(Math.log(.86)),Xt.y.to(e,.1),Xt.zoom.to(0,.1)),zd=ms,t&&(ue.prewarm(kt),mT())}function Uh(){return ce?ce.domElement:null}function sx(i){Wa=!!i,Wa&&ce&&Ga()}function rx(){if(Dd++,Wa=!1,ce){ce.setAnimationLoop(null);try{ce.dispose()}catch{}ce.domElement.remove()}try{Mi?.composer?.dispose?.()}catch{}ds?.domElement.remove(),ri?.remove(),Nh?.disconnect(),Nh=null,Sn&&Sn.classList.remove("hq-scene","is-hovering"),gn.clear(),gs.clear(),fo.length=0,Bd.clear(),ue=null,Mi=null,ho=null,vi=null,kt=null,ce=null,ds=null,Sn=null,po=null,ri=null,Fh=null,Ch=!1,Nd=!1,Gi=null,Re=null,ps=null,zd=0}function mT(){let i=ri;i&&(ri=null,i.classList.add("is-done"),setTimeout(()=>i.remove(),450),po?.onReady?.())}function ox(i){let t=gn.get(i);!t||!ue||(Xt.x.to(t.root.position.x),Xt.z.to(t.root.position.z),Xt.y.to(ue.activeY+.6),Xt.zoom.to(Math.log(Math.max(Math.exp(Xt.zoom.target),Js.focus))))}function ax(i){gT(),Xt.x.step(i),Xt.y.step(i),Xt.z.step(i),Xt.zoom.step(i);let t=Ae(Math.exp(Xt.zoom.x),Js.min*.85,Js.max*1.1);Math.abs(t-kt.zoom)>1e-5&&(kt.zoom=t,kt.updateProjectionMatrix()),Ha.set(Xt.x.x,Xt.y.x,Xt.z.x),kt.position.copy(Ha).addScaledVector(Od,80)}function gT(){Xt.x.target=Ae(Xt.x.target,-9.5,9.5),Xt.z.target=Ae(Xt.z.target,-7.5,7.5),Xt.zoom.target=Ae(Xt.zoom.target,Math.log(Js.min),Math.log(Js.max))}function Ga(){if(!ce)return;let i=Sn.clientWidth||1,t=Sn.clientHeight||1;ce.setSize(i,t,!1),ds.setSize(i,t),Mi?.setSize(i,t);let e=i/t,n=Pd?fs.w:fs.w+(sT-fs.w)*(1-Ae((i-560)/340,0,1)),s=Math.max(fs.h,n/e)/2*(Pd?cT:1);kt.left=-s*e,kt.right=s*e,kt.top=s,kt.bottom=-s;let r=Pd?0:Ae((i-900)/600,0,1)*(oT-rT)/2;r>.5?kt.setViewOffset(i,t,r,0,i,t):kt.clearViewOffset(),kt.updateProjectionMatrix()}var xT=()=>ce.domElement.clientHeight/((kt.top-kt.bottom)/kt.zoom);function _T(){let i=ce.domElement;i.addEventListener("pointermove",vT),i.addEventListener("pointerleave",()=>{Si.active=!1,cx(null)}),!Dh&&(i.addEventListener("pointerdown",yT),i.addEventListener("pointerup",MT),i.addEventListener("pointercancel",t=>{bi.delete(t.pointerId),Re=null,ps=null}),i.addEventListener("wheel",ST,{passive:!1}),i.addEventListener("contextmenu",t=>t.preventDefault()))}function Oh(i){let t=ce.domElement.getBoundingClientRect();Va.set((i.clientX-t.left)/t.width*2-1,-((i.clientY-t.top)/t.height)*2+1)}function yT(i){if(ce.domElement.setPointerCapture?.(i.pointerId),Oh(i),bi.set(i.pointerId,{x:i.clientX,y:i.clientY}),bi.size===2){let[t,e]=[...bi.values()];ps={d:Math.hypot(t.x-e.x,t.y-e.y),z:Xt.zoom.target},Re=null;return}Re={id:i.pointerId,x0:i.clientX,y0:i.clientY,lx:i.clientX,ly:i.clientY,lt:performance.now(),panning:!1,vx:0,vz:0}}function vT(i){if(Oh(i),Si.active=!0,Ld=!0,bi.has(i.pointerId)&&bi.set(i.pointerId,{x:i.clientX,y:i.clientY}),ps&&bi.size===2){let[h,u]=[...bi.values()];Xt.zoom.to(ps.z+Math.log(Math.hypot(h.x-u.x,h.y-u.y)/ps.d));return}if(!Re||Re.id!==i.pointerId||(!Re.panning&&Math.hypot(i.clientX-Re.x0,i.clientY-Re.y0)>5&&(Re.panning=!0),!Re.panning))return;let t=performance.now(),e=i.clientX-Re.lx,n=i.clientY-Re.ly,s=Math.max(.001,(t-Re.lt)/1e3);Re.lx=i.clientX,Re.ly=i.clientY,Re.lt=t;let r=xT(),o=-e/r,a=n/r/jg,l=(o-a)/Math.SQRT2,c=(-o-a)/Math.SQRT2;Xt.x.snap(Ae(Xt.x.x+l,-9.5,9.5)),Xt.z.snap(Ae(Xt.z.x+c,-7.5,7.5)),Re.vx=Re.vx*.6+l/s*.4,Re.vz=Re.vz*.6+c/s*.4}function MT(i){if(bi.delete(i.pointerId),ps){bi.size<2&&(ps=null),Re=null;return}if(!Re||Re.id!==i.pointerId)return;let t=Re;if(Re=null,t.panning){let e=Ae(t.vx,-30,30),n=Ae(t.vz,-30,30);Xt.x.v=e,Xt.z.v=n,Xt.x.to(Xt.x.x+e*.12),Xt.z.to(Xt.z.x+n*.12);return}Oh(i),po.onSelectBot?.(lx())}function ST(i){i.preventDefault(),Oh(i);let t=Math.exp(Xt.zoom.target),e=Ae(t*Math.exp(-i.deltaY*(i.ctrlKey?.012:.0016)),Js.min,Js.max);if(e===t)return;let n=kt.view?.enabled?kt.view.offsetX/kt.view.fullWidth*2:0,s=Va.x+n,r=Va.y,o=1/t-1/e,a=s*kt.right*o,l=r*kt.top*o/jg;Xt.x.to(Xt.x.target+(a-l)/Math.SQRT2),Xt.z.to(Xt.z.target+(-a-l)/Math.SQRT2),Xt.zoom.to(Math.log(e))}function lx(){Lh.setFromCamera(Va,kt);let i=Lh.intersectObjects([...Bd],!1)[0];return i?i.object.userData.actorId:null}function cx(i){i!==Gi&&(Gi&&gn.get(Gi)?.setHovered(!1),Gi=i,i&&gn.get(i)?.setHovered(!0),Sn.classList.toggle("is-hovering",!!i),po.onHoverBot?.(i))}var Jg=[3458905,689407,16752394,16732064,16738835,1357990],bT=new Fe(.07,.035);function ET(i){let t=new se;t.position.copy(i);let e=[];for(let n=0;n<36;n++){let s=new Dt(bT,new xe({color:Jg[n%Jg.length],side:Ke,transparent:!0})),r=Math.random()*Math.PI*2,o=2.2+Math.random()*1.6,a=.8+Math.random()*1.2;e.push({m:s,v:new I(Math.cos(r)*a,o,Math.sin(r)*a),spin:new I(Math.random()*9,Math.random()*9,0)}),t.add(s)}vi.add(t),fo.push({group:t,parts:e,t:0,life:1.6})}function TT(i){for(let t=fo.length-1;t>=0;t--){let e=fo[t];e.t+=i;for(let n of e.parts)n.v.y-=6.5*i,n.v.multiplyScalar(1-1.4*i),n.m.position.addScaledVector(n.v,i),n.m.rotation.x+=n.spin.x*i,n.m.rotation.y+=n.spin.y*i,n.m.material.opacity=Math.max(0,1-e.t/e.life);e.t>=e.life&&(e.group.removeFromParent(),e.parts.forEach(n=>n.m.material.dispose()),fo.splice(t,1))}}function hx({width:i=1600,height:t=900,scale:e=1,box:n={x:.06,y:.06,w:.88,h:.76}}={}){let s=ue?.activeOpen();if(!s||!Mi)return null;let r=ce.getPixelRatio(),o=Math.min(ce.capabilities.maxTextureSize,ce.capabilities.maxRenderbufferSize||1/0),a=Math.max(1,Math.min(e,o/i,o/t)),l=kt.zoom,c=kt.position.clone(),h=[],u=p=>{p?.visible&&(p.visible=!1,h.push(p))};for(let p of gn.values())u(p.ring);for(let p of gs)u(p.root);for(let p of fo)u(p.group);let f=s.walls,d=f?.data;try{if(d){let m={...d,floorName:`Floor ${ue.activeIndex+1}`,bots:d.bots.map(g=>({...g,name:"",task:"",step:""}))};f.screen&&f.drawScreen(m),f.board&&f.drawBoard(m)}ce.setPixelRatio(a),ce.setSize(i,t,!1),Mi.setSize(i,t),wT(i/t,n),uo.set(0,ue.cabinY.x+.7,0).project(kt),Mi.render(Ae(uo.y*.5+.5,0,1),0,1);let p=document.createElement("canvas");p.width=i,p.height=t;let x=p.getContext("2d");return x.imageSmoothingQuality="high",x.drawImage(ce.domElement,0,0,i,t),p}finally{h.forEach(p=>{p.visible=!0}),d&&(f.screen&&f.drawScreen(d),f.board&&f.drawBoard(d)),ce.setPixelRatio(r),Ga(),kt.zoom=l,kt.position.copy(c),kt.updateProjectionMatrix(),uo.set(0,ue.cabinY.x+.7,0).project(kt),Mi.render(Ae(uo.y*.5+.5,0,1),0,Ae(1.5/kt.zoom,.25,1))}}var Zs=new ke,ka=new I;function wT(i,t){kt.clearViewOffset(),kt.zoom=1,kt.position.set(oi.x,ue.activeY+oi.y,oi.z).addScaledVector(Od,80),kt.updateMatrixWorld(!0),ue.group.updateMatrixWorld(!0);let e=1/0,n=-1/0,s=1/0,r=-1/0,o=c=>{if(c.visible){if(c.isMesh&&c.geometry){c.geometry.boundingBox||c.geometry.computeBoundingBox(),Zs.copy(c.geometry.boundingBox);for(let h=0;h<8;h++)ka.set(h&1?Zs.max.x:Zs.min.x,h&2?Zs.max.y:Zs.min.y,h&4?Zs.max.z:Zs.min.z).applyMatrix4(c.matrixWorld).applyMatrix4(kt.matrixWorldInverse),e=Math.min(e,ka.x),n=Math.max(n,ka.x),s=Math.min(s,ka.y),r=Math.max(r,ka.y)}for(let h of c.children)o(h)}};o(ue.group),Number.isFinite(e)||(e=-fs.w/2,n=fs.w/2,s=-fs.h/2,r=fs.h/2);let a=Math.max((r-s)/t.h,(n-e)/(t.w*i)),l=a*i;kt.left=(e+n)/2-(t.x+t.w/2)*l,kt.right=kt.left+l,kt.top=(s+r)/2+(t.y+t.h/2)*a,kt.bottom=kt.top-a,kt.updateProjectionMatrix()}function AT(){tx||!Si.active||!ue||(Lh.setFromCamera(Va,kt),Zg.constant=-ue.activeY,Lh.ray.intersectPlane(Zg,Ha)?(Si.x=Ha.x,Si.z=Ha.z):Si.active=!1)}var uo=new I,Rh=0;function RT(i){if(!ce)return;if(!Wa||document.hidden){wh.getDelta();return}if(Dh){let s=i-Rh;if(s<Ah-2)return;Rh+=Math.max(1,Math.round(s/Ah))*Ah,i-Rh>Ah/2&&(Rh=i)}let t=Fd?0:Math.min(wh.getDelta(),.05);Fd&&wh.getDelta(),ms=wh.elapsedTime;let e=performance.now();ho.update(t,e),ax(t),ue&&ue.update(t,e),Ld&&!Re?.panning&&(Ld=!1,cx(lx())),AT();let n=ue?.activeOpen()?.alpha??1;for(let s of gn.values())s.hostAlpha=n,s.tick(t,ms);for(let s of gs)s.hostAlpha=s.ctx.inst.alpha,s.tick(t,ms),s.dead&&gs.delete(s);TT(t),Mi?(uo.set(0,(ue?ue.cabinY.x:0)+.7,0).project(kt),Mi.render(Ae(uo.y*.5+.5,0,1),t,Ae(1.5/kt.zoom,.25,1))):ce.render(vi,kt),ds&&(!Dh||lT)&&ds.render(vi,kt),po?.onFrame?.()}var ux={day:"13:00",evening:"18:50",night:"23:00"},fx=class{constructor(t,e={}){this.root=t,this.opts=e,this.kind="4d",this.isTower=!0,this.loaded=!1,this.visible=!0,this.framesShown=0,this.deskOf=new Map,this.plan={desks:Array.from({length:20},(n,s)=>s)},this.pal={dark:!1},this.sessions=[],this.keyOf=new Map,this.towerFloors=[],this.focusKey=null,this.viewFloorId=typeof e.towerFloor=="string"?e.towerFloor:null,this._lastSel=null,this._readyFired=!1,this.ready=new Promise(n=>{this.markReady=n}),ex(t,{onReady:()=>{this.loaded=!0,this.canvas=Uh(),this._readyFired||(this._readyFired=!0,this.markReady(!0))},onFrame:()=>{this.visible&&(this.framesShown++,this.canvas=this.canvas||Uh(),this.opts.onFrame&&this.opts.onFrame(this))},onSelectBot:n=>{let s=n?this.keyOf.get(n):null,r=s?this.sessions.find(o=>o.key===s):null;this.opts.onHover&&this.opts.onHover(r||null,null,!0)}}),this.canvas=Uh(),this.syncLight()}update(t){this.sessions=Array.isArray(t)?t:[];let e=globalThis.WallpaperFeed,n=e&&typeof e.towerState=="function"?e.towerState(this.sessions):{floors:[],bots:{}};this.towerFloors=(n.floors||[]).map(l=>({id:l.id,name:l.name})),this.keyOf=new Map;let s=n.bots||{};for(let l of this.sessions){let c=l.project||l.title||l.id||l.key,h=e&&e.botId?e.botId(c):String(c||"");s[h]||(h=Object.keys(s).find(u=>s[u].name===c)||h),s[h]&&this.keyOf.set(h,l.key)}let r=n.floors||[],o=this.viewFloorId&&r.some(l=>l.id===this.viewFloorId)?this.viewFloorId:null,a=this._selectedId(s);a&&s[a]&&this.focusKey!==this._lastFocus&&(o=s[a].floor),o||(o=r.slice().sort((l,c)=>(c.bots?.length||0)-(l.bots?.length||0))[0]?.id||null),this.viewFloorId=o,this._lastFocus=this.focusKey,this.deskOf=new Map;for(let[l,c]of this.keyOf){let h=s[l];h&&h.floor===o&&h.effective_status==="working"&&this.deskOf.set(c,(h.desk||1)-1)}nx(n,{currentFloor:o,selectedBot:a}),a&&a!==this._lastSel&&(this._lastSel=a,ox(a)),a||(this._lastSel=null),this.opts.onFloors&&this.opts.onFloors(this.towerFloors)}_selectedId(t){if(!this.focusKey)return null;for(let[e,n]of this.keyOf)if(n===this.focusKey&&(!t||t[e]))return e;return null}setTowerFloor(t){this.viewFloorId=t,this._lastFocus=this.focusKey,this.update(this.sessions)}setVisible(t){this.visible=!!t,sx(this.visible)}syncLight(){let t=globalThis.OFFICE_LIGHT||"now",e=Object.prototype.hasOwnProperty.call(ux,t)?ux[t]:null;globalThis.bothq&&typeof globalThis.bothq.setTime=="function"&&globalThis.bothq.setTime(e)}captureShare(){try{return hx()}catch(t){return console.error(t),null}}destroy(){try{rx()}catch(t){console.error(t)}this.canvas=null}};export{fx as Office4D};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

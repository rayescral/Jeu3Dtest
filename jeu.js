(()=>{var Jl="160";var tf=0,Fc=1,nf=2;var ja=1,sf=2,jn=3,gi=0,$t=1,At=2;var fi=0,Ls=1,_a=2,Bc=3,zc=4,rf=5,Di=100,af=101,of=102,kc=103,Hc=104,lf=200,cf=201,hf=202,uf=203,il=204,sl=205,df=206,ff=207,pf=208,mf=209,gf=210,xf=211,_f=212,vf=213,yf=214,Mf=0,Ef=1,bf=2,va=3,Sf=4,Tf=5,wf=6,Af=7,mu=0,Rf=1,Cf=2,pi=0,Pf=1,Lf=2,If=3,Kl=4,Uf=5,Df=6;var gu=300,Ds=301,Ns=302,rl=303,al=304,Qa=306,hn=1e3,Cn=1001,ol=1002,tn=1003,Gc=1004;var bo=1005;var _n=1006,Nf=1007;var dr=1008;var mi=1009,Of=1010,Ff=1011,jl=1012,xu=1013,ui=1014,di=1015,fr=1016,_u=1017,vu=1018,Fi=1020,Bf=1021,Pn=1023,zf=1024,kf=1025,Bi=1026,Os=1027,Hf=1028,yu=1029,Gf=1030,Mu=1031,Eu=1033,So=33776,To=33777,wo=33778,Ao=33779,Vc=35840,Wc=35841,Xc=35842,qc=35843,bu=36196,$c=37492,Yc=37496,Zc=37808,Jc=37809,Kc=37810,jc=37811,Qc=37812,eh=37813,th=37814,nh=37815,ih=37816,sh=37817,rh=37818,ah=37819,oh=37820,lh=37821,Ro=36492,ch=36494,hh=36495,Vf=36283,uh=36284,dh=36285,fh=36286;var ya=2300,Ma=2301,Co=2302,ph=2400,mh=2401,gh=2402;var Su=3e3,zi=3001,Wf=3200,Xf=3201,Tu=0,qf=1,vn="",pt="srgb",ti="srgb-linear",Ql="display-p3",eo="display-p3-linear",Ea="linear",_t="srgb",ba="rec709",Sa="p3";var os=7680;var xh=519,$f=512,Yf=513,Zf=514,wu=515,Jf=516,Kf=517,jf=518,Qf=519,ll=35044;var _h="300 es",cl=1035,ei=2e3,Ta=2001,xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vh=1234567,rr=Math.PI/180,pr=180/Math.PI;function Fn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Bt(i,e,t){return Math.max(e,Math.min(t,i))}function ec(i,e){return(i%e+e)%e}function ep(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function tp(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function np(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function ip(i,e=1){return e-Math.abs(ec(i,e*2)-e)}function sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function rp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ap(i,e){return i+Math.floor(Math.random()*(e-i+1))}function op(i,e){return i+Math.random()*(e-i)}function lp(i){return i*(.5-Math.random())}function cp(i){i!==void 0&&(vh=i);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hp(i){return i*rr}function up(i){return i*pr}function hl(i){return(i&i-1)===0&&i!==0}function dp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),p=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*p,o*c);break;case"YZY":i.set(l*p,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*p,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ji={DEG2RAD:rr,RAD2DEG:pr,generateUUID:Fn,clamp:Bt,euclideanModulo:ec,mapLinear:ep,inverseLerp:tp,lerp:ar,damp:np,pingpong:ip,smoothstep:sp,smootherstep:rp,randInt:ap,randFloat:op,randFloatSpread:lp,seededRandom:cp,degToRad:hp,radToDeg:up,isPowerOfTwo:hl,ceilPowerOfTwo:dp,floorPowerOfTwo:wa,setQuaternionFromProperEuler:fp,normalize:dt,denormalize:On},fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],f=n[5],_=n[8],v=s[0],g=s[3],d=s[6],m=s[1],x=s[4],y=s[7],R=s[2],b=s[5],w=s[8];return r[0]=a*v+o*m+l*R,r[3]=a*g+o*x+l*b,r[6]=a*d+o*y+l*w,r[1]=c*v+h*m+u*R,r[4]=c*g+h*x+u*b,r[7]=c*d+h*y+u*w,r[2]=p*v+f*m+_*R,r[5]=p*g+f*x+_*b,r[8]=p*d+f*y+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,p=o*l-h*r,f=c*r-a*l,_=t*u+n*p+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=p*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Po=new tt;function Au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Aa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pp(){let i=Aa("canvas");return i.style.display="block",i}var yh={};function or(i){i in yh||(yh[i]=!0,console.warn(i))}var Mh=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eh=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[ti]:{transfer:Ea,primaries:ba,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:_t,primaries:ba,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[eo]:{transfer:Ea,primaries:Sa,toReference:i=>i.applyMatrix3(Eh),fromReference:i=>i.applyMatrix3(Mh)},[Ql]:{transfer:_t,primaries:Sa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Eh),fromReference:i=>i.applyMatrix3(Mh).convertLinearToSRGB()}},mp=new Set([ti,eo]),ft={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!mp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Gr[e].toReference,s=Gr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===vn?Ea:Gr[i].transfer}};function Is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ls,Ra=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ls===void 0&&(ls=Aa("canvas")),ls.width=e.width,ls.height=e.height;let n=ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Is(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Is(t[n]/255)*255):t[n]=Is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gp=0,Ca=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Io(s[a].image)):r.push(Io(s[a]))}else r=Io(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Io(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xp=0,yn=class i extends xi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=_n,a=dr,o=Pn,l=mi,c=i.DEFAULT_ANISOTROPY,h=vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Fn(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zi?pt:vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hn:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hn:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?zi:Su}set encoding(e){or("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zi?pt:vn}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=gu;yn.DEFAULT_ANISOTROPY=1;var zt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],p=l[1],f=l[5],_=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(f+1)/2,R=(d+1)/2,b=(h+p)/4,w=(u+v)/4,C=(_+g)/4;return x>y&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=b/n,r=w/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=C/r),this.set(n,s,r,t),this}let m=Math.sqrt((g-_)*(g-_)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(m)<.001&&(m=1),this.x=(g-_)/m,this.y=(u-v)/m,this.z=(p-h)/m,this.w=Math.acos((c+f+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ul=class extends xi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(or("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zi?pt:vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ca(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ni=class extends ul{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Pa=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dl=class extends yn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],p=r[a+0],f=r[a+1],_=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=f,e[t+2]=_,e[t+3]=v;return}if(u!==v||l!==p||c!==f||h!==_){let g=1-o,d=l*p+c*f+h*_+u*v,m=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let R=Math.sqrt(x),b=Math.atan2(R,d*m);g=Math.sin(g*b)/R,o=Math.sin(o*b)/R}let y=o*m;if(l=l*g+p*y,c=c*g+f*y,h=h*g+_*y,u=u*g+v*y,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*f-c*p,e[t+1]=l*_+h*p+c*u-o*f,e[t+2]=c*_+h*f+o*p-l*u,e[t+3]=h*_-o*u-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),p=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*h*u+c*f*_,this._y=c*f*u-p*h*_,this._z=c*h*_+p*f*u,this._w=c*h*u-p*f*_;break;case"YXZ":this._x=p*h*u+c*f*_,this._y=c*f*u-p*h*_,this._z=c*h*_-p*f*u,this._w=c*h*u+p*f*_;break;case"ZXY":this._x=p*h*u-c*f*_,this._y=c*f*u+p*h*_,this._z=c*h*_+p*f*u,this._w=c*h*u-p*f*_;break;case"ZYX":this._x=p*h*u-c*f*_,this._y=c*f*u+p*h*_,this._z=c*h*_-p*f*u,this._w=c*h*u+p*f*_;break;case"YZX":this._x=p*h*u+c*f*_,this._y=c*f*u+p*h*_,this._z=c*h*_-p*f*u,this._w=c*h*u-p*f*_;break;case"XZY":this._x=p*h*u-c*f*_,this._y=c*f*u-p*h*_,this._z=c*h*_+p*f*u,this._w=c*h*u+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],p=n+o+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Uo=new D,bh=new Bn,ii=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vr.copy(n.boundingBox)),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Wr.subVectors(this.max,Js),cs.subVectors(e.a,Js),hs.subVectors(e.b,Js),us.subVectors(e.c,Js),ai.subVectors(hs,cs),oi.subVectors(us,hs),Ci.subVectors(cs,us);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ci.z,Ci.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ci.z,0,-Ci.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ci.y,Ci.x,0];return!Do(t,cs,hs,us,Wr)||(t=[1,0,0,0,1,0,0,0,1],!Do(t,cs,hs,us,Wr))?!1:(Xr.crossVectors(ai,oi),t=[Xr.x,Xr.y,Xr.z],Do(t,cs,hs,us,Wr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$n=[new D,new D,new D,new D,new D,new D,new D,new D],wn=new D,Vr=new ii,cs=new D,hs=new D,us=new D,ai=new D,oi=new D,Ci=new D,Js=new D,Wr=new D,Xr=new D,Pi=new D;function Do(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _p=new ii,Ks=new D,No=new D,ki=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_p.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);let t=Ks.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ks,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(No.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(No)),this.expandByPoint(Ks.copy(e.center).sub(No))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Yn=new D,Oo=new D,qr=new D,li=new D,Fo=new D,$r=new D,Bo=new D,La=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Oo.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(Oo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(qr),o=li.dot(this.direction),l=-li.dot(qr),c=li.lengthSq(),h=Math.abs(1-a*a),u,p,f,_;if(h>0)if(u=a*l-o,p=a*o-l,_=r*h,u>=0)if(p>=-_)if(p<=_){let v=1/h;u*=v,p*=v,f=u*(u+a*p+2*o)+p*(a*u+p+2*l)+c}else p=r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;else p=-r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;else p<=-_?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+p*(p+2*l)+c):p<=_?(u=0,p=Math.min(Math.max(-r,-l),r),f=p*(p+2*l)+c):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+p*(p+2*l)+c);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),f=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oo).addScaledVector(qr,p),f}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-p.z)*u,l=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,l=(e.min.z-p.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,s,r){Fo.subVectors(t,e),$r.subVectors(n,e),Bo.crossVectors(Fo,$r);let a=this.direction.dot(Bo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);let l=o*this.direction.dot($r.crossVectors(li,$r));if(l<0)return null;let c=o*this.direction.dot(Fo.cross(li));if(c<0||l+c>a)return null;let h=-o*li.dot(Bo);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,p,f,_,v,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,p,f,_,v,g)}set(e,t,n,s,r,a,o,l,c,h,u,p,f,_,v,g){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=_,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),r=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let p=a*h,f=a*u,_=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=p-v*c,t[9]=-o*l,t[2]=v-p*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*h,f=l*u,_=c*h,v=c*u;t[0]=p+v*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=v+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*h,f=l*u,_=c*h,v=c*u;t[0]=p-v*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=v-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*h,f=a*u,_=o*h,v=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=p*c+v,t[1]=l*u,t[5]=v*c+p,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,f=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=v-p*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=p-v*u}else if(e.order==="XZY"){let p=a*l,f=a*c,_=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=p*u+v,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=v*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,yp)}lookAt(e,t,n){let s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ci.crossVectors(n,ln),ci.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ci.crossVectors(n,ln)),ci.normalize(),Yr.crossVectors(ln,ci),s[0]=ci.x,s[4]=Yr.x,s[8]=ln.x,s[1]=ci.y,s[5]=Yr.y,s[9]=ln.y,s[2]=ci.z,s[6]=Yr.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],f=n[13],_=n[2],v=n[6],g=n[10],d=n[14],m=n[3],x=n[7],y=n[11],R=n[15],b=s[0],w=s[4],C=s[8],M=s[12],S=s[1],N=s[5],H=s[9],ee=s[13],P=s[2],O=s[6],z=s[10],q=s[14],Z=s[3],$=s[7],ie=s[11],Q=s[15];return r[0]=a*b+o*S+l*P+c*Z,r[4]=a*w+o*N+l*O+c*$,r[8]=a*C+o*H+l*z+c*ie,r[12]=a*M+o*ee+l*q+c*Q,r[1]=h*b+u*S+p*P+f*Z,r[5]=h*w+u*N+p*O+f*$,r[9]=h*C+u*H+p*z+f*ie,r[13]=h*M+u*ee+p*q+f*Q,r[2]=_*b+v*S+g*P+d*Z,r[6]=_*w+v*N+g*O+d*$,r[10]=_*C+v*H+g*z+d*ie,r[14]=_*M+v*ee+g*q+d*Q,r[3]=m*b+x*S+y*P+R*Z,r[7]=m*w+x*N+y*O+R*$,r[11]=m*C+x*H+y*z+R*ie,r[15]=m*M+x*ee+y*q+R*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],p=e[10],f=e[14],_=e[3],v=e[7],g=e[11],d=e[15];return _*(+r*l*u-s*c*u-r*o*p+n*c*p+s*o*f-n*l*f)+v*(+t*l*f-t*c*p+r*a*p-s*a*f+s*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*p+s*a*u-n*a*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],p=e[10],f=e[11],_=e[12],v=e[13],g=e[14],d=e[15],m=u*g*c-v*p*c+v*l*f-o*g*f-u*l*d+o*p*d,x=_*p*c-h*g*c-_*l*f+a*g*f+h*l*d-a*p*d,y=h*v*c-_*u*c+_*o*f-a*v*f-h*o*d+a*u*d,R=_*u*l-h*v*l-_*o*p+a*v*p+h*o*g-a*u*g,b=t*m+n*x+s*y+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=m*w,e[1]=(v*p*r-u*g*r-v*s*f+n*g*f+u*s*d-n*p*d)*w,e[2]=(o*g*r-v*l*r+v*s*c-n*g*c-o*s*d+n*l*d)*w,e[3]=(u*l*r-o*p*r-u*s*c+n*p*c+o*s*f-n*l*f)*w,e[4]=x*w,e[5]=(h*g*r-_*p*r+_*s*f-t*g*f-h*s*d+t*p*d)*w,e[6]=(_*l*r-a*g*r-_*s*c+t*g*c+a*s*d-t*l*d)*w,e[7]=(a*p*r-h*l*r+h*s*c-t*p*c-a*s*f+t*l*f)*w,e[8]=y*w,e[9]=(_*u*r-h*v*r-_*n*f+t*v*f+h*n*d-t*u*d)*w,e[10]=(a*v*r-_*o*r+_*n*c-t*v*c-a*n*d+t*o*d)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*w,e[12]=R*w,e[13]=(h*v*s-_*u*s+_*n*p-t*v*p-h*n*g+t*u*g)*w,e[14]=(_*o*s-a*v*s-_*n*l+t*v*l+a*n*g-t*o*g)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*p+t*o*p)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,p=r*c,f=r*h,_=r*u,v=a*h,g=a*u,d=o*u,m=l*c,x=l*h,y=l*u,R=n.x,b=n.y,w=n.z;return s[0]=(1-(v+d))*R,s[1]=(f+y)*R,s[2]=(_-x)*R,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(p+d))*b,s[6]=(g+m)*b,s[7]=0,s[8]=(_+x)*w,s[9]=(g-m)*w,s[10]=(1-(p+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ds.set(s[0],s[1],s[2]).length(),a=ds.set(s[4],s[5],s[6]).length(),o=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let c=1/r,h=1/a,u=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,t.setFromRotationMatrix(An),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ei){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),f,_;if(o===ei)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ta)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ei){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),p=(t+e)*c,f=(n+s)*h,_,v;if(o===ei)_=(a+r)*u,v=-2*u;else if(o===Ta)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ds=new D,An=new vt,vp=new D(0,0,0),yp=new D(1,1,1),ci=new D,Yr=new D,ln=new D,Sh=new vt,Th=new Bn,Ia=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],p=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Th.setFromEuler(this),this.setFromQuaternion(Th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ia.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mp=0,wh=new D,fs=new Bn,Zn=new vt,Zr=new D,js=new D,Ep=new D,bp=new Bn,Ah=new D(1,0,0),Rh=new D(0,1,0),Ch=new D(0,0,1),Sp={type:"added"},Tp={type:"removed"},Zt=class i extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Ia,n=new Bn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new vt},normalMatrix:{value:new tt}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Ah,e)}rotateY(e){return this.rotateOnAxis(Rh,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return wh.copy(e).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ah,e)}translateY(e){return this.translateOnAxis(Rh,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(js,Zr,this.up):Zn.lookAt(Zr,js,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Zn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tp)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,Ep),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,bp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),p=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Zt.DEFAULT_UP=new D(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new D,Jn=new D,zo=new D,Kn=new D,ps=new D,ms=new D,Ph=new D,ko=new D,Ho=new D,Go=new D,Jr=!1,Oi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),Jn.subVectors(n,t),zo.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(Jn),l=Rn.dot(zo),c=Jn.dot(Jn),h=Jn.dot(zo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let p=1/u,f=(c*l-o*h)*p,_=(a*h-o*l)*p;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),Jn.subVectors(e,t),Rn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Rn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,n),ms.subVectors(r,n),ko.subVectors(e,n);let l=ps.dot(ko),c=ms.dot(ko);if(l<=0&&c<=0)return t.copy(n);Ho.subVectors(e,s);let h=ps.dot(Ho),u=ms.dot(Ho);if(h>=0&&u<=h)return t.copy(s);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ps,a);Go.subVectors(e,r);let f=ps.dot(Go),_=ms.dot(Go);if(_>=0&&f<=_)return t.copy(r);let v=f*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(ms,o);let g=h*_-f*u;if(g<=0&&u-h>=0&&f-_>=0)return Ph.subVectors(r,s),o=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(Ph,o);let d=1/(g+v+p);return a=v*d,o=p*d,t.copy(n).addScaledVector(ps,a).addScaledVector(ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function Vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ft.workingColorSpace){if(e=ec(e,1),t=Bt(t,0,1),n=Bt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vo(a,r,e+1/3),this.g=Vo(a,r,e),this.b=Vo(a,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Ru[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=Lo(e.r),this.g=Lo(e.g),this.b=Lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return ft.fromWorkingColorSpace(qt.copy(this),e),Math.round(Bt(qt.r*255,0,255))*65536+Math.round(Bt(qt.g*255,0,255))*256+Math.round(Bt(qt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=pt){ft.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Kr);let n=ar(hi.h,Kr.h,t),s=ar(hi.s,Kr.s,t),r=ar(hi.l,Kr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new He;He.NAMES=Ru;var wp=0,_i=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=Ls,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==il&&(n.blendSrc=this.blendSrc),this.blendDst!==sl&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},un=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new D,jr=new fe,Yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix3(e),this.setXY(t,jr.x,jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ll&&(e.usage=this.usage),e}};var Ua=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Da=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Ap=0,xn=new vt,Wo=new Zt,gs=new D,cn=new ii,Qs=new ii,Ft=new D,Ht=class i extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Da:Ua)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Wo.lookAt(e),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(cn.min,Qs.min),cn.expandByPoint(Ft),Ft.addVectors(cn.max,Qs.max),cn.expandByPoint(Ft)):(cn.expandByPoint(Qs.min),cn.expandByPoint(Qs.max))}cn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(gs.fromBufferAttribute(e,c),Ft.add(gs)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let S=0;S<o;S++)c[S]=new D,h[S]=new D;let u=new D,p=new D,f=new D,_=new fe,v=new fe,g=new fe,d=new D,m=new D;function x(S,N,H){u.fromArray(s,S*3),p.fromArray(s,N*3),f.fromArray(s,H*3),_.fromArray(a,S*2),v.fromArray(a,N*2),g.fromArray(a,H*2),p.sub(u),f.sub(u),v.sub(_),g.sub(_);let ee=1/(v.x*g.y-g.x*v.y);isFinite(ee)&&(d.copy(p).multiplyScalar(g.y).addScaledVector(f,-v.y).multiplyScalar(ee),m.copy(f).multiplyScalar(v.x).addScaledVector(p,-g.x).multiplyScalar(ee),c[S].add(d),c[N].add(d),c[H].add(d),h[S].add(m),h[N].add(m),h[H].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let S=0,N=y.length;S<N;++S){let H=y[S],ee=H.start,P=H.count;for(let O=ee,z=ee+P;O<z;O+=3)x(n[O+0],n[O+1],n[O+2])}let R=new D,b=new D,w=new D,C=new D;function M(S){w.fromArray(r,S*3),C.copy(w);let N=c[S];R.copy(N),R.sub(w.multiplyScalar(w.dot(N))).normalize(),b.crossVectors(C,N);let ee=b.dot(h[S])<0?-1:1;l[S*4]=R.x,l[S*4+1]=R.y,l[S*4+2]=R.z,l[S*4+3]=ee}for(let S=0,N=y.length;S<N;++S){let H=y[S],ee=H.start,P=H.count;for(let O=ee,z=ee+P;O<z;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let p=0,f=e.count;p<f;p+=3){let _=e.getX(p+0),v=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,f=t.count;p<f;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,p=new c.constructor(l.length*h),f=0,_=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let d=0;d<h;d++)p[_++]=c[f++]}return new Yt(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let p=c[h],f=e(p,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=new vt,Li=new La,Qr=new ki,Ih=new D,xs=new D,_s=new D,vs=new D,Xo=new D,ea=new D,ta=new fe,na=new fe,ia=new fe,Uh=new D,Dh=new D,Nh=new D,sa=new D,ra=new D,se=class extends Zt{constructor(e=new Ht,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ea.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Xo.fromBufferAttribute(u,e),a?ea.addScaledVector(Xo,h):ea.addScaledVector(Xo.sub(t),h))}t.add(ea)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Qr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Qr,Ih)===null||Li.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){let g=p[_],d=a[g.materialIndex],m=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let y=m,R=x;y<R;y+=3){let b=o.getX(y),w=o.getX(y+1),C=o.getX(y+2);s=aa(this,d,e,n,c,h,u,b,w,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=_,d=v;g<d;g+=3){let m=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);s=aa(this,a,e,n,c,h,u,m,x,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=p.length;_<v;_++){let g=p[_],d=a[g.materialIndex],m=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=m,R=x;y<R;y+=3){let b=y,w=y+1,C=y+2;s=aa(this,d,e,n,c,h,u,b,w,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=_,d=v;g<d;g+=3){let m=g,x=g+1,y=g+2;s=aa(this,a,e,n,c,h,u,m,x,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Rp(i,e,t,n,s,r,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===gi,o),l===null)return null;ra.copy(o),ra.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:i}}function aa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xs),i.getVertexPosition(l,_s),i.getVertexPosition(c,vs);let h=Rp(i,e,t,n,xs,_s,vs,sa);if(h){s&&(ta.fromBufferAttribute(s,o),na.fromBufferAttribute(s,l),ia.fromBufferAttribute(s,c),h.uv=Oi.getInterpolation(sa,xs,_s,vs,ta,na,ia,new fe)),r&&(ta.fromBufferAttribute(r,o),na.fromBufferAttribute(r,l),ia.fromBufferAttribute(r,c),h.uv1=Oi.getInterpolation(sa,xs,_s,vs,ta,na,ia,new fe),h.uv2=h.uv1),a&&(Uh.fromBufferAttribute(a,o),Dh.fromBufferAttribute(a,l),Nh.fromBufferAttribute(a,c),h.normal=Oi.getInterpolation(sa,xs,_s,vs,Uh,Dh,Nh,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Oi.getNormal(xs,_s,vs,u.normal),h.face=u}return h}var Je=class i extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],p=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function _(v,g,d,m,x,y,R,b,w,C,M){let S=y/w,N=R/C,H=y/2,ee=R/2,P=b/2,O=w+1,z=C+1,q=0,Z=0,$=new D;for(let ie=0;ie<z;ie++){let Q=ie*N-ee;for(let de=0;de<O;de++){let W=de*S-H;$[v]=W*m,$[g]=Q*x,$[d]=P,c.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[d]=b>0?1:-1,h.push($.x,$.y,$.z),u.push(de/w),u.push(1-ie/C),q+=1}}for(let ie=0;ie<C;ie++)for(let Q=0;Q<w;Q++){let de=p+Q+O*ie,W=p+Q+O*(ie+1),k=p+(Q+1)+O*(ie+1),K=p+(Q+1)+O*ie;l.push(de,W,K),l.push(W,k,K),Z+=6}o.addGroup(f,Z,M),f+=Z,p+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Fs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=Fs(i[t]);for(let s in n)e[s]=n[s]}return e}function Cp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cu(i){return i.getRenderTarget()===null?i.outputColorSpace:ft.workingColorSpace}var Pp={clone:Fs,merge:en},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Cp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Na=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},nn=class extends Na{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ys=-90,Ms=1,fl=class extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new nn(ys,Ms,e,t);s.layers=this.layers,this.add(s);let r=new nn(ys,Ms,e,t);r.layers=this.layers,this.add(r);let a=new nn(ys,Ms,e,t);a.layers=this.layers,this.add(a);let o=new nn(ys,Ms,e,t);o.layers=this.layers,this.add(o);let l=new nn(ys,Ms,e,t);l.layers=this.layers,this.add(l);let c=new nn(ys,Ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,p,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Oa=class extends yn{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pl=class extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(or("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zi?pt:vn),this.texture=new Oa(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Je(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:fi});r.uniforms.tEquirect.value=t;let a=new se(s,r),o=t.minFilter;return t.minFilter===dr&&(t.minFilter=_n),new fl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},qo=new D,Up=new D,Dp=new tt,Qn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=qo.subVectors(n,t).cross(Up.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dp.getNormalMatrix(e),s=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new ki,oa=new D,gr=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],p=s[7],f=s[8],_=s[9],v=s[10],g=s[11],d=s[12],m=s[13],x=s[14],y=s[15];if(n[0].setComponents(l-r,p-c,g-f,y-d).normalize(),n[1].setComponents(l+r,p+c,g+f,y+d).normalize(),n[2].setComponents(l+a,p+h,g+_,y+m).normalize(),n[3].setComponents(l-a,p-h,g-_,y-m).normalize(),n[4].setComponents(l-o,p-u,g-v,y-x).normalize(),t===ei)n[5].setComponents(l+o,p+u,g+v,y+x).normalize();else if(t===Ta)n[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Np(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,p=c.usage,f=u.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,u,p),c.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let p=h.array,f=h._updateRange,_=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&_.length===0&&i.bufferSubData(u,0,p),_.length!==0){for(let v=0,g=_.length;v<g;v++){let d=_[v];t?i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):i.bufferSubData(u,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):i.bufferSubData(u,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var $e=class i extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,p=t/l,f=[],_=[],v=[],g=[];for(let d=0;d<h;d++){let m=d*p-a;for(let x=0;x<c;x++){let y=x*u-r;_.push(y,-m,0),v.push(0,0,1),g.push(x/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let m=0;m<o;m++){let x=m+c*d,y=m+c*(d+1),R=m+1+c*(d+1),b=m+1+c*d;f.push(x,y,b),f.push(y,R,b)}this.setIndex(f),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fp=`#ifdef USE_ALPHAHASH
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
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gp=`#ifdef USE_AOMAP
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
#endif`,Vp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Jp=`#ifdef USE_BUMPMAP
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
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,am=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,om=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,um=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dm="gl_FragColor = linearToOutputTexel( gl_FragColor );",fm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ym=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bm=`#ifdef USE_GRADIENTMAP
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
}`,Sm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Cm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Om=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qm=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Km=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s0=`#ifdef USE_NORMALMAP
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
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,T0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,C0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H0=`#include <common>
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
}`,G0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,V0=`#define DISTANCE
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
}`,W0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,K0=`#define LAMBERT
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
}`,j0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Q0=`#define MATCAP
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
}`,eg=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tg=`#define NORMAL
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
}`,ng=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ig=`#define PHONG
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
}`,sg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,rg=`#define STANDARD
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
}`,ag=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,og=`#define TOON
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
}`,lg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cg=`uniform float size;
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
}`,hg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ug=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,pg=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ze={alphahash_fragment:Op,alphahash_pars_fragment:Fp,alphamap_fragment:Bp,alphamap_pars_fragment:zp,alphatest_fragment:kp,alphatest_pars_fragment:Hp,aomap_fragment:Gp,aomap_pars_fragment:Vp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:qp,beginnormal_vertex:$p,bsdfs:Yp,iridescence_fragment:Zp,bumpmap_pars_fragment:Jp,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Qp,clipping_planes_vertex:em,color_fragment:tm,color_pars_fragment:nm,color_pars_vertex:im,color_vertex:sm,common:rm,cube_uv_reflection_fragment:am,defaultnormal_vertex:om,displacementmap_pars_vertex:lm,displacementmap_vertex:cm,emissivemap_fragment:hm,emissivemap_pars_fragment:um,colorspace_fragment:dm,colorspace_pars_fragment:fm,envmap_fragment:pm,envmap_common_pars_fragment:mm,envmap_pars_fragment:gm,envmap_pars_vertex:xm,envmap_physical_pars_fragment:Cm,envmap_vertex:_m,fog_vertex:vm,fog_pars_vertex:ym,fog_fragment:Mm,fog_pars_fragment:Em,gradientmap_pars_fragment:bm,lightmap_fragment:Sm,lightmap_pars_fragment:Tm,lights_lambert_fragment:wm,lights_lambert_pars_fragment:Am,lights_pars_begin:Rm,lights_toon_fragment:Pm,lights_toon_pars_fragment:Lm,lights_phong_fragment:Im,lights_phong_pars_fragment:Um,lights_physical_fragment:Dm,lights_physical_pars_fragment:Nm,lights_fragment_begin:Om,lights_fragment_maps:Fm,lights_fragment_end:Bm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Hm,logdepthbuf_vertex:Gm,map_fragment:Vm,map_pars_fragment:Wm,map_particle_fragment:Xm,map_particle_pars_fragment:qm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Ym,morphcolor_vertex:Zm,morphnormal_vertex:Jm,morphtarget_pars_vertex:Km,morphtarget_vertex:jm,normal_fragment_begin:Qm,normal_fragment_maps:e0,normal_pars_fragment:t0,normal_pars_vertex:n0,normal_vertex:i0,normalmap_pars_fragment:s0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:l0,opaque_fragment:c0,packing:h0,premultiplied_alpha_fragment:u0,project_vertex:d0,dithering_fragment:f0,dithering_pars_fragment:p0,roughnessmap_fragment:m0,roughnessmap_pars_fragment:g0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:_0,shadowmap_vertex:v0,shadowmask_pars_fragment:y0,skinbase_vertex:M0,skinning_pars_vertex:E0,skinning_vertex:b0,skinnormal_vertex:S0,specularmap_fragment:T0,specularmap_pars_fragment:w0,tonemapping_fragment:A0,tonemapping_pars_fragment:R0,transmission_fragment:C0,transmission_pars_fragment:P0,uv_pars_fragment:L0,uv_pars_vertex:I0,uv_vertex:U0,worldpos_vertex:D0,background_vert:N0,background_frag:O0,backgroundCube_vert:F0,backgroundCube_frag:B0,cube_vert:z0,cube_frag:k0,depth_vert:H0,depth_frag:G0,distanceRGBA_vert:V0,distanceRGBA_frag:W0,equirect_vert:X0,equirect_frag:q0,linedashed_vert:$0,linedashed_frag:Y0,meshbasic_vert:Z0,meshbasic_frag:J0,meshlambert_vert:K0,meshlambert_frag:j0,meshmatcap_vert:Q0,meshmatcap_frag:eg,meshnormal_vert:tg,meshnormal_frag:ng,meshphong_vert:ig,meshphong_frag:sg,meshphysical_vert:rg,meshphysical_frag:ag,meshtoon_vert:og,meshtoon_frag:lg,points_vert:cg,points_frag:hg,shadow_vert:ug,shadow_frag:dg,sprite_vert:fg,sprite_frag:pg},ye={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Nn={basic:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:en([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:en([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new He(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:en([ye.points,ye.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:en([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:en([ye.common,ye.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:en([ye.sprite,ye.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:en([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:en([ye.lights,ye.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Nn.physical={uniforms:en([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var la={r:0,b:0,g:0};function mg(i,e,t,n,s,r,a){let o=new He(0),l=r===!0?0:1,c,h,u=null,p=0,f=null;function _(g,d){let m=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),m=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||m)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Qa)?(h===void 0&&(h=new se(new Je(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Fs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ft.getTransfer(x.colorSpace)!==_t,(u!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new se(new $e(2,2),new Ln({name:"BackgroundMaterial",uniforms:Fs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,d){g.getRGB(la,Cu(i)),n.buffers.color.setClear(la.r,la.g,la.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(g,d=1){o.set(g),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:_}}function gg(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,h=!1;function u(P,O,z,q,Z){let $=!1;if(a){let ie=v(q,z,O);c!==ie&&(c=ie,f(c.object)),$=d(P,q,z,Z),$&&m(P,q,z,Z)}else{let ie=O.wireframe===!0;(c.geometry!==q.id||c.program!==z.id||c.wireframe!==ie)&&(c.geometry=q.id,c.program=z.id,c.wireframe=ie,$=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,C(P,O,z,q),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function _(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function v(P,O,z){let q=z.wireframe===!0,Z=o[P.id];Z===void 0&&(Z={},o[P.id]=Z);let $=Z[O.id];$===void 0&&($={},Z[O.id]=$);let ie=$[q];return ie===void 0&&(ie=g(p()),$[q]=ie),ie}function g(P){let O=[],z=[],q=[];for(let Z=0;Z<s;Z++)O[Z]=0,z[Z]=0,q[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:q,object:P,attributes:{},index:null}}function d(P,O,z,q){let Z=c.attributes,$=O.attributes,ie=0,Q=z.getAttributes();for(let de in Q)if(Q[de].location>=0){let k=Z[de],K=$[de];if(K===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),k===void 0||k.attribute!==K||K&&k.data!==K.data)return!0;ie++}return c.attributesNum!==ie||c.index!==q}function m(P,O,z,q){let Z={},$=O.attributes,ie=0,Q=z.getAttributes();for(let de in Q)if(Q[de].location>=0){let k=$[de];k===void 0&&(de==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),de==="instanceColor"&&P.instanceColor&&(k=P.instanceColor));let K={};K.attribute=k,k&&k.data&&(K.data=k.data),Z[de]=K,ie++}c.attributes=Z,c.attributesNum=ie,c.index=q}function x(){let P=c.newAttributes;for(let O=0,z=P.length;O<z;O++)P[O]=0}function y(P){R(P,0)}function R(P,O){let z=c.newAttributes,q=c.enabledAttributes,Z=c.attributeDivisors;z[P]=1,q[P]===0&&(i.enableVertexAttribArray(P),q[P]=1),Z[P]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,O),Z[P]=O)}function b(){let P=c.newAttributes,O=c.enabledAttributes;for(let z=0,q=O.length;z<q;z++)O[z]!==P[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function w(P,O,z,q,Z,$,ie){ie===!0?i.vertexAttribIPointer(P,O,z,Z,$):i.vertexAttribPointer(P,O,z,q,Z,$)}function C(P,O,z,q){if(n.isWebGL2===!1&&(P.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Z=q.attributes,$=z.getAttributes(),ie=O.defaultAttributeValues;for(let Q in $){let de=$[Q];if(de.location>=0){let W=Z[Q];if(W===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(W=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(W=P.instanceColor)),W!==void 0){let k=W.normalized,K=W.itemSize,j=t.get(W);if(j===void 0)continue;let me=j.buffer,Ce=j.type,Ae=j.bytesPerElement,_e=n.isWebGL2===!0&&(Ce===i.INT||Ce===i.UNSIGNED_INT||W.gpuType===xu);if(W.isInterleavedBufferAttribute){let Fe=W.data,U=Fe.stride,ge=W.offset;if(Fe.isInstancedInterleavedBuffer){for(let Y=0;Y<de.locationSize;Y++)R(de.location+Y,Fe.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Fe.meshPerAttribute*Fe.count)}else for(let Y=0;Y<de.locationSize;Y++)y(de.location+Y);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Y=0;Y<de.locationSize;Y++)w(de.location+Y,K/de.locationSize,Ce,k,U*Ae,(ge+K/de.locationSize*Y)*Ae,_e)}else{if(W.isInstancedBufferAttribute){for(let Fe=0;Fe<de.locationSize;Fe++)R(de.location+Fe,W.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Fe=0;Fe<de.locationSize;Fe++)y(de.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Fe=0;Fe<de.locationSize;Fe++)w(de.location+Fe,K/de.locationSize,Ce,k,K*Ae,K/de.locationSize*Fe*Ae,_e)}}else if(ie!==void 0){let k=ie[Q];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(de.location,k);break;case 3:i.vertexAttrib3fv(de.location,k);break;case 4:i.vertexAttrib4fv(de.location,k);break;default:i.vertexAttrib1fv(de.location,k)}}}}b()}function M(){H();for(let P in o){let O=o[P];for(let z in O){let q=O[z];for(let Z in q)_(q[Z].object),delete q[Z];delete O[z]}delete o[P]}}function S(P){if(o[P.id]===void 0)return;let O=o[P.id];for(let z in O){let q=O[z];for(let Z in q)_(q[Z].object),delete q[Z];delete O[z]}delete o[P.id]}function N(P){for(let O in o){let z=o[O];if(z[P.id]===void 0)continue;let q=z[P.id];for(let Z in q)_(q[Z].object),delete q[Z];delete z[P.id]}}function H(){ee(),h=!0,c!==l&&(c=l,f(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:H,resetDefaultState:ee,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:y,disableUnusedAttributes:b}}function xg(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,p){if(p===0)return;let f,_;if(s)f=i,_="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,u,p),t.update(u,r,p)}function c(h,u,p){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<p;_++)this.render(h[_],u[_]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,p);let _=0;for(let v=0;v<p;v++)_+=u[v];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function _g(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,y=a||e.has("OES_texture_float"),R=x&&y,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:m,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:b}}function vg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qn,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||s;return s=p,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){t=h(u,p,0)},this.setState=function(u,p,f){let _=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!g)r?h(null):c();else{let m=r?0:n,x=m*4,y=d.clippingState||null;l.value=y,y=h(_,p,x,f);for(let R=0;R!==x;++R)y[R]=t[R];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,p,f,_){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,_!==!0||g===null){let d=f+v*4,m=p.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<d)&&(g=new Float32Array(d));for(let x=0,y=f;x!==v;++x,y+=4)a.copy(u[x]).applyMatrix4(m,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function yg(i){let e=new WeakMap;function t(a,o){return o===rl?a.mapping=Ds:o===al&&(a.mapping=Ns),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===rl||o===al)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new pl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fa=class extends Na{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rs=4,Oh=[.125,.215,.35,.446,.526,.582],Ni=20,$o=new Fa,Fh=new He,Yo=null,Zo=0,Jo=0,Ui=(1+Math.sqrt(5))/2,Es=1/Ui,Bh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ui,Es),new D(0,Ui,-Es),new D(Es,0,Ui),new D(-Es,0,Ui),new D(Ui,Es,0),new D(-Ui,Es,0)],Bs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Yo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yo,Zo,Jo),e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:fr,format:Pn,colorSpace:ti,depthBuffer:!1},s=zh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mg(r)),this._blurMaterial=Eg(r,e,t)}return s}_compileMaterial(e){let t=new se(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,s){let o=new nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Fh),h.toneMapping=pi,h.autoClear=!1;let f=new un({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),_=new se(new Je,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Fh),v=!0);for(let d=0;d<6;d++){let m=d%3;m===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):m===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let x=this._cubeSize;ca(s,m*x,d>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ds||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bh[(s-1)%Bh.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new se(this._lodPlanes[s],c),p=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ni-1),v=r/_,g=isFinite(r)?1+Math.floor(h*v):Ni;g>Ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ni}`);let d=[],m=0;for(let w=0;w<Ni;++w){let C=w/v,M=Math.exp(-C*C/2);d.push(M),w===0?m+=M:w<g&&(m+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/m;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-n;let y=this._sizeLods[s],R=3*y*(s>x-Rs?s-x+Rs:0),b=4*(this._cubeSize-y);ca(t,R,b,3*y,2*y),l.setRenderTarget(t),l.render(u,$o)}};function Mg(i){let e=[],t=[],n=[],s=i,r=i-Rs+1+Oh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Rs?l=Oh[a-i+Rs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,v=3,g=2,d=1,m=new Float32Array(v*_*f),x=new Float32Array(g*_*f),y=new Float32Array(d*_*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,C=b>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];m.set(M,v*_*b),x.set(p,g*_*b);let S=[b,b,b,b,b,b];y.set(S,d*_*b)}let R=new Ht;R.setAttribute("position",new Yt(m,v)),R.setAttribute("uv",new Yt(x,g)),R.setAttribute("faceIndex",new Yt(y,d)),e.push(R),s>Rs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zh(i,e,t){let n=new ni(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Eg(i,e,t){let n=new Float32Array(Ni),s=new D(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function kh(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Hh(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===rl||l===al,h=l===Ds||l===Ns;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Bs(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new Bs(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Sg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Tg(i,e,t,n){let s={},r=new WeakMap;function a(u){let p=u.target;p.index!==null&&e.remove(p.index);for(let _ in p.attributes)e.remove(p.attributes[_]);for(let _ in p.morphAttributes){let v=p.morphAttributes[_];for(let g=0,d=v.length;g<d;g++)e.remove(v[g])}p.removeEventListener("dispose",a),delete s[p.id];let f=r.get(p);f&&(e.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(u){let p=u.attributes;for(let _ in p)e.update(p[_],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let _ in f){let v=f[_];for(let g=0,d=v.length;g<d;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(u){let p=[],f=u.index,_=u.attributes.position,v=0;if(f!==null){let m=f.array;v=f.version;for(let x=0,y=m.length;x<y;x+=3){let R=m[x+0],b=m[x+1],w=m[x+2];p.push(R,b,b,w,w,R)}}else if(_!==void 0){let m=_.array;v=_.version;for(let x=0,y=m.length/3-1;x<y;x+=3){let R=x+0,b=x+1,w=x+2;p.push(R,b,b,w,w,R)}}else return;let g=new(Au(p)?Da:Ua)(p,1);g.version=v;let d=r.get(u);d&&e.remove(d),r.set(u,g)}function h(u){let p=r.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function wg(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,_){i.drawElements(r,_,o,f*l),t.update(_,r,1)}function u(f,_,v){if(v===0)return;let g,d;if(s)g=i,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](r,_,o,f*l,v),t.update(_,r,v)}function p(f,_,v){if(v===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<v;d++)this.render(f[d]/l,_[d]);else{g.multiDrawElementsWEBGL(r,_,0,o,f,0,v);let d=0;for(let m=0;m<v;m++)d+=_[m];t.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function Ag(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rg(i,e){return i[0]-e[0]}function Cg(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Pg(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=f!==void 0?f.length:0,v=r.get(h);if(v===void 0||v.count!==_){let P=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",P)};v!==void 0&&v.texture.dispose();let m=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],w=h.morphAttributes.color||[],C=0;m===!0&&(C=1),x===!0&&(C=2),y===!0&&(C=3);let M=h.attributes.position.count*C,S=1;M>e.maxTextureSize&&(S=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let N=new Float32Array(M*S*4*_),H=new Pa(N,M,S,_);H.type=di,H.needsUpdate=!0;let ee=C*4;for(let O=0;O<_;O++){let z=R[O],q=b[O],Z=w[O],$=M*S*4*O;for(let ie=0;ie<z.count;ie++){let Q=ie*ee;m===!0&&(a.fromBufferAttribute(z,ie),N[$+Q+0]=a.x,N[$+Q+1]=a.y,N[$+Q+2]=a.z,N[$+Q+3]=0),x===!0&&(a.fromBufferAttribute(q,ie),N[$+Q+4]=a.x,N[$+Q+5]=a.y,N[$+Q+6]=a.z,N[$+Q+7]=0),y===!0&&(a.fromBufferAttribute(Z,ie),N[$+Q+8]=a.x,N[$+Q+9]=a.y,N[$+Q+10]=a.z,N[$+Q+11]=Z.itemSize===4?a.w:1)}}v={count:_,texture:H,size:new fe(M,S)},r.set(h,v),h.addEventListener("dispose",P)}let g=0;for(let m=0;m<p.length;m++)g+=p[m];let d=h.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",p),u.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{let f=p===void 0?0:p.length,_=n[h.id];if(_===void 0||_.length!==f){_=[];for(let x=0;x<f;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<f;x++){let y=_[x];y[0]=x,y[1]=p[x]}_.sort(Cg);for(let x=0;x<8;x++)x<f&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Rg);let v=h.morphAttributes.position,g=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let y=o[x],R=y[0],b=y[1];R!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+x)!==v[R]&&h.setAttribute("morphTarget"+x,v[R]),g&&h.getAttribute("morphNormal"+x)!==g[R]&&h.setAttribute("morphNormal"+x,g[R]),s[x]=b,d+=b):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),g&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let m=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",m),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Lg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ba=class extends yn{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Bi,h!==Bi&&h!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=ui),n===void 0&&h===Os&&(n=Fi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lu=new yn,Iu=new Ba(1,1);Iu.compareFunction=wu;var Uu=new Pa,Du=new dl,Nu=new Oa,Gh=[],Vh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function to(i,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ig(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Og(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),Ut(t,n)}}function Fg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),Ut(t,n)}}function Bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),Ut(t,n)}}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function $g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Iu:Lu;t.setTexture2D(e||r,s)}function Yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Du,s)}function Zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nu,s)}function Jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Uu,s)}function Kg(i){switch(i){case 5126:return Ig;case 35664:return Ug;case 35665:return Dg;case 35666:return Ng;case 35674:return Og;case 35675:return Fg;case 35676:return Bg;case 5124:case 35670:return zg;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function jg(i,e){i.uniform1fv(this.addr,e)}function Qg(i,e){let t=Vs(e,this.size,2);i.uniform2fv(this.addr,t)}function ex(i,e){let t=Vs(e,this.size,3);i.uniform3fv(this.addr,t)}function tx(i,e){let t=Vs(e,this.size,4);i.uniform4fv(this.addr,t)}function nx(i,e){let t=Vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ix(i,e){let t=Vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sx(i,e){let t=Vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rx(i,e){i.uniform1iv(this.addr,e)}function ax(i,e){i.uniform2iv(this.addr,e)}function ox(i,e){i.uniform3iv(this.addr,e)}function lx(i,e){i.uniform4iv(this.addr,e)}function cx(i,e){i.uniform1uiv(this.addr,e)}function hx(i,e){i.uniform2uiv(this.addr,e)}function ux(i,e){i.uniform3uiv(this.addr,e)}function dx(i,e){i.uniform4uiv(this.addr,e)}function fx(i,e,t){let n=this.cache,s=e.length,r=to(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Lu,r[a])}function px(i,e,t){let n=this.cache,s=e.length,r=to(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Du,r[a])}function mx(i,e,t){let n=this.cache,s=e.length,r=to(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nu,r[a])}function gx(i,e,t){let n=this.cache,s=e.length,r=to(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Uu,r[a])}function xx(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return sx;case 5124:case 35670:return rx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return lx;case 5125:return cx;case 36294:return hx;case 36295:return ux;case 36296:return dx;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}var ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}},gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xx(t.type)}},xl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ko=/(\w+)(\])?(\[|\.)?/g;function $h(i,e){i.seq.push(e),i.map[e.id]=e}function _x(i,e,t){let n=i.name,s=n.length;for(Ko.lastIndex=0;;){let r=Ko.exec(n),a=Ko.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$h(t,c===void 0?new ml(o,i,e):new gl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new xl(o),$h(t,u)),t=u}}}var Us=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);_x(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var vx=37297,yx=0;function Mx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ex(i){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i),n;switch(e===t?n="":e===Sa&&t===ba?n="LinearDisplayP3ToLinearSRGB":e===ba&&t===Sa&&(n="LinearSRGBToLinearDisplayP3"),i){case ti:case eo:return[n,"LinearTransferOETF"];case pt:case Ql:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Zh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mx(i.getShaderSource(e),a)}else return s}function bx(i,e){let t=Ex(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Sx(i,e){let t;switch(e){case Pf:t="Linear";break;case Lf:t="Reinhard";break;case If:t="OptimizedCineon";break;case Kl:t="ACESFilmic";break;case Df:t="AgX";break;case Uf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Cs).join(`
`)}function Ax(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Cs(i){return i!==""}function Jh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function _l(i){return i.replace(Cx,Lx)}var Px=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Lx(i,e){let t=Ze[e];if(t===void 0){let n=Px.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _l(t)}var Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(i){return i.replace(Ix,Ux)}function Ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ja?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===sf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Nx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ox(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Fx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Rf:e="ENVMAP_BLENDING_MIX";break;case Cf:e="ENVMAP_BLENDING_ADD";break}return e}function Bx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Dx(t),c=Nx(t),h=Ox(t),u=Fx(t),p=Bx(t),f=t.isWebGL2?"":Tx(t),_=wx(t),v=Ax(r),g=s.createProgram(),d,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),d.length>0&&(d+=`
`),m=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Cs).join(`
`),m.length>0&&(m+=`
`)):(d=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),m=[f,Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?Ze.tonemapping_pars_fragment:"",t.toneMapping!==pi?Sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,bx("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cs).join(`
`)),a=_l(a),a=Jh(a,t),a=Kh(a,t),o=_l(o),o=Jh(o,t),o=Kh(o,t),a=jh(a),o=jh(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=x+d+a,R=x+m+o,b=Yh(s,s.VERTEX_SHADER,y),w=Yh(s,s.FRAGMENT_SHADER,R);s.attachShader(g,b),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(H){if(i.debug.checkShaderErrors){let ee=s.getProgramInfoLog(g).trim(),P=s.getShaderInfoLog(b).trim(),O=s.getShaderInfoLog(w).trim(),z=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,w);else{let Z=Zh(s,b,"vertex"),$=Zh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+ee+`
`+Z+`
`+$)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(P===""||O==="")&&(q=!1);q&&(H.diagnostics={runnable:z,programLog:ee,vertexShader:{log:P,prefix:d},fragmentShader:{log:O,prefix:m}})}s.deleteShader(b),s.deleteShader(w),M=new Us(s,g),S=Rx(s,g)}let M;this.getUniforms=function(){return M===void 0&&C(this),M};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,vx)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}var kx=0,vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yl(e),t.set(e,n)),n}},yl=class{constructor(e){this.id=kx++,this.code=e,this.usedTimes=0}};function Hx(i,e,t,n,s,r,a){let o=new mr,l=new vl,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,p=s.vertexTextures,f=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function g(M,S,N,H,ee){let P=H.fog,O=ee.geometry,z=M.isMeshStandardMaterial?H.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||z),Z=q&&q.mapping===Qa?q.image.height:null,$=_[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let ie=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=ie!==void 0?ie.length:0,de=0;O.morphAttributes.position!==void 0&&(de=1),O.morphAttributes.normal!==void 0&&(de=2),O.morphAttributes.color!==void 0&&(de=3);let W,k,K,j;if($){let Kt=Nn[$];W=Kt.vertexShader,k=Kt.fragmentShader}else W=M.vertexShader,k=M.fragmentShader,l.update(M),K=l.getVertexShaderID(M),j=l.getFragmentShaderID(M);let me=i.getRenderTarget(),Ce=ee.isInstancedMesh===!0,Ae=ee.isBatchedMesh===!0,_e=!!M.map,Fe=!!M.matcap,U=!!q,ge=!!M.aoMap,Y=!!M.lightMap,xe=!!M.bumpMap,J=!!M.normalMap,Le=!!M.displacementMap,be=!!M.emissiveMap,T=!!M.metalnessMap,E=!!M.roughnessMap,B=M.anisotropy>0,ue=M.clearcoat>0,ce=M.iridescence>0,oe=M.sheen>0,Re=M.transmission>0,Me=B&&!!M.anisotropyMap,Se=ue&&!!M.clearcoatMap,Ne=ue&&!!M.clearcoatNormalMap,ke=ue&&!!M.clearcoatRoughnessMap,he=ce&&!!M.iridescenceMap,st=ce&&!!M.iridescenceThicknessMap,Ke=oe&&!!M.sheenColorMap,We=oe&&!!M.sheenRoughnessMap,De=!!M.specularMap,we=!!M.specularColorMap,I=!!M.specularIntensityMap,te=Re&&!!M.transmissionMap,ve=Re&&!!M.thicknessMap,le=!!M.gradientMap,re=!!M.alphaMap,L=M.alphaTest>0,ae=!!M.alphaHash,pe=!!M.extensions,Ie=!!O.attributes.uv1,Oe=!!O.attributes.uv2,ht=!!O.attributes.uv3,ut=pi;return M.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ut=i.toneMapping),{isWebGL2:h,shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:k,defines:M.defines,customVertexShaderID:K,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ae,instancing:Ce,instancingColor:Ce&&ee.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ti,map:_e,matcap:Fe,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:Z,aoMap:ge,lightMap:Y,bumpMap:xe,normalMap:J,displacementMap:p&&Le,emissiveMap:be,normalMapObjectSpace:J&&M.normalMapType===qf,normalMapTangentSpace:J&&M.normalMapType===Tu,metalnessMap:T,roughnessMap:E,anisotropy:B,anisotropyMap:Me,clearcoat:ue,clearcoatMap:Se,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ke,iridescence:ce,iridescenceMap:he,iridescenceThicknessMap:st,sheen:oe,sheenColorMap:Ke,sheenRoughnessMap:We,specularMap:De,specularColorMap:we,specularIntensityMap:I,transmission:Re,transmissionMap:te,thicknessMap:ve,gradientMap:le,opaque:M.transparent===!1&&M.blending===Ls,alphaMap:re,alphaTest:L,alphaHash:ae,combine:M.combine,mapUv:_e&&v(M.map.channel),aoMapUv:ge&&v(M.aoMap.channel),lightMapUv:Y&&v(M.lightMap.channel),bumpMapUv:xe&&v(M.bumpMap.channel),normalMapUv:J&&v(M.normalMap.channel),displacementMapUv:Le&&v(M.displacementMap.channel),emissiveMapUv:be&&v(M.emissiveMap.channel),metalnessMapUv:T&&v(M.metalnessMap.channel),roughnessMapUv:E&&v(M.roughnessMap.channel),anisotropyMapUv:Me&&v(M.anisotropyMap.channel),clearcoatMapUv:Se&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&v(M.sheenRoughnessMap.channel),specularMapUv:De&&v(M.specularMap.channel),specularColorMapUv:we&&v(M.specularColorMap.channel),specularIntensityMapUv:I&&v(M.specularIntensityMap.channel),transmissionMapUv:te&&v(M.transmissionMap.channel),thicknessMapUv:ve&&v(M.thicknessMap.channel),alphaMapUv:re&&v(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(J||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Oe,vertexUv3s:ht,pointsUvs:ee.isPoints===!0&&!!O.attributes.uv&&(_e||re),fog:!!P,useFog:M.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:de,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,useLegacyLights:i._useLegacyLights,decodeVideoTexture:_e&&M.map.isVideoTexture===!0&&ft.getTransfer(M.map.colorSpace)===_t,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===At,flipSided:M.side===$t,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(m(S,M),x(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function m(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function y(M){let S=_[M.type],N;if(S){let H=Nn[S];N=Pp.clone(H.uniforms)}else N=M.uniforms;return N}function R(M,S){let N;for(let H=0,ee=c.length;H<ee;H++){let P=c[H];if(P.cacheKey===S){N=P,++N.usedTimes;break}}return N===void 0&&(N=new zx(i,S,M,r),c.push(N)),N}function b(M){if(--M.usedTimes===0){let S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:R,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function Gx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function eu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function tu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,p,f,_,v,g){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:_,renderOrder:u.renderOrder,z:v,group:g},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=g),e++,d}function o(u,p,f,_,v,g){let d=a(u,p,f,_,v,g);f.transmission>0?n.push(d):f.transparent===!0?s.push(d):t.push(d)}function l(u,p,f,_,v,g){let d=a(u,p,f,_,v,g);f.transmission>0?n.unshift(d):f.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,p){t.length>1&&t.sort(u||Vx),n.length>1&&n.sort(p||eu),s.length>1&&s.sort(p||eu)}function h(){for(let u=e,p=i.length;u<p;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Wx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new tu,i.set(n,[a])):s>=r.length?(a=new tu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function qx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $x=0;function Yx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zx(i,e){let t=new Xx,n=qx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,a=new vt,o=new vt;function l(h,u){let p=0,f=0,_=0;for(let H=0;H<9;H++)s.probe[H].set(0,0,0);let v=0,g=0,d=0,m=0,x=0,y=0,R=0,b=0,w=0,C=0,M=0;h.sort(Yx);let S=u===!0?Math.PI:1;for(let H=0,ee=h.length;H<ee;H++){let P=h[H],O=P.color,z=P.intensity,q=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)p+=O.r*z*S,f+=O.g*z*S,_+=O.b*z*S;else if(P.isLightProbe){for(let $=0;$<9;$++)s.probe[$].addScaledVector(P.sh.coefficients[$],z);M++}else if(P.isDirectionalLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){let ie=P.shadow,Q=n.get(P);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,s.directionalShadow[v]=Q,s.directionalShadowMap[v]=Z,s.directionalShadowMatrix[v]=P.shadow.matrix,y++}s.directional[v]=$,v++}else if(P.isSpotLight){let $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(O).multiplyScalar(z*S),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,s.spot[d]=$;let ie=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,ie.updateMatrices(P),P.castShadow&&C++),s.spotLightMatrix[d]=ie.matrix,P.castShadow){let Q=n.get(P);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,s.spotShadow[d]=Q,s.spotShadowMap[d]=Z,b++}d++}else if(P.isRectAreaLight){let $=t.get(P);$.color.copy(O).multiplyScalar(z),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),s.rectArea[m]=$,m++}else if(P.isPointLight){let $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity*S),$.distance=P.distance,$.decay=P.decay,P.castShadow){let ie=P.shadow,Q=n.get(P);Q.shadowBias=ie.bias,Q.shadowNormalBias=ie.normalBias,Q.shadowRadius=ie.radius,Q.shadowMapSize=ie.mapSize,Q.shadowCameraNear=ie.camera.near,Q.shadowCameraFar=ie.camera.far,s.pointShadow[g]=Q,s.pointShadowMap[g]=Z,s.pointShadowMatrix[g]=P.shadow.matrix,R++}s.point[g]=$,g++}else if(P.isHemisphereLight){let $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(z*S),$.groundColor.copy(P.groundColor).multiplyScalar(z*S),s.hemi[x]=$,x++}}m>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_FLOAT_1,s.rectAreaLTC2=ye.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ye.LTC_HALF_1,s.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=f,s.ambient[2]=_;let N=s.hash;(N.directionalLength!==v||N.pointLength!==g||N.spotLength!==d||N.rectAreaLength!==m||N.hemiLength!==x||N.numDirectionalShadows!==y||N.numPointShadows!==R||N.numSpotShadows!==b||N.numSpotMaps!==w||N.numLightProbes!==M)&&(s.directional.length=v,s.spot.length=d,s.rectArea.length=m,s.point.length=g,s.hemi.length=x,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=b+w-C,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=C,s.numLightProbes=M,N.directionalLength=v,N.pointLength=g,N.spotLength=d,N.rectAreaLength=m,N.hemiLength=x,N.numDirectionalShadows=y,N.numPointShadows=R,N.numSpotShadows=b,N.numSpotMaps=w,N.numLightProbes=M,s.version=$x++)}function c(h,u){let p=0,f=0,_=0,v=0,g=0,d=u.matrixWorldInverse;for(let m=0,x=h.length;m<x;m++){let y=h[m];if(y.isDirectionalLight){let R=s.directional[p];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),p++}else if(y.isSpotLight){let R=s.spot[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),_++}else if(y.isRectAreaLight){let R=s.rectArea[v];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),o.identity(),a.copy(y.matrixWorld),a.premultiply(d),o.extractRotation(a),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){let R=s.point[f];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(d),f++}else if(y.isHemisphereLight){let R=s.hemi[g];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(d),g++}}}return{setup:l,setupView:c,state:s}}function nu(i,e){let t=new Zx(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jx(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new nu(i,e),t.set(r,[l])):a>=o.length?(l=new nu(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ml=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},El=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Qx(i,e,t){let n=new gr,s=new fe,r=new fe,a=new zt,o=new Ml({depthPacking:Xf}),l=new El,c={},h=t.maxTextureSize,u={[gi]:$t,[$t]:gi,[At]:At},p=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Kx,fragmentShader:jx}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ht;_.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new se(_,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let d=this.type;this.render=function(b,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;let M=i.getRenderTarget(),S=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),H=i.state;H.setBlending(fi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let ee=d!==jn&&this.type===jn,P=d===jn&&this.type!==jn;for(let O=0,z=b.length;O<z;O++){let q=b[O],Z=q.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let $=Z.getFrameExtents();if(s.multiply($),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,Z.mapSize.y=r.y)),Z.map===null||ee===!0||P===!0){let Q=this.type!==jn?{minFilter:tn,magFilter:tn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new ni(s.x,s.y,Q),Z.map.texture.name=q.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let ie=Z.getViewportCount();for(let Q=0;Q<ie;Q++){let de=Z.getViewport(Q);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),H.viewport(a),Z.updateMatrices(q,Q),n=Z.getFrustum(),y(w,C,Z.camera,q,this.type)}Z.isPointLightShadow!==!0&&this.type===jn&&m(Z,C),Z.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(M,S,N)};function m(b,w){let C=e.update(v);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ni(s.x,s.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,C,p,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,C,f,v,null)}function x(b,w,C,M){let S=null,N=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)S=N;else if(S=C.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let H=S.uuid,ee=w.uuid,P=c[H];P===void 0&&(P={},c[H]=P);let O=P[ee];O===void 0&&(O=S.clone(),P[ee]=O,w.addEventListener("dispose",R)),S=O}if(S.visible=w.visible,S.wireframe=w.wireframe,M===jn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let H=i.properties.get(S);H.light=C}return S}function y(b,w,C,M,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===jn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let ee=e.update(b),P=b.material;if(Array.isArray(P)){let O=ee.groups;for(let z=0,q=O.length;z<q;z++){let Z=O[z],$=P[Z.materialIndex];if($&&$.visible){let ie=x(b,$,M,S);b.onBeforeShadow(i,b,w,C,ee,ie,Z),i.renderBufferDirect(C,null,ee,ie,b,Z),b.onAfterShadow(i,b,w,C,ee,ie,Z)}}}else if(P.visible){let O=x(b,P,M,S);b.onBeforeShadow(i,b,w,C,ee,O,null),i.renderBufferDirect(C,null,ee,O,b,null),b.onAfterShadow(i,b,w,C,ee,O,null)}}let H=b.children;for(let ee=0,P=H.length;ee<P;ee++)y(H[ee],w,C,M,S)}function R(b){b.target.removeEventListener("dispose",R);for(let C in c){let M=c[C],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function e_(i,e,t){let n=t.isWebGL2;function s(){let L=!1,ae=new zt,pe=null,Ie=new zt(0,0,0,0);return{setMask:function(Oe){pe!==Oe&&!L&&(i.colorMask(Oe,Oe,Oe,Oe),pe=Oe)},setLocked:function(Oe){L=Oe},setClear:function(Oe,ht,ut,Nt,Kt){Kt===!0&&(Oe*=Nt,ht*=Nt,ut*=Nt),ae.set(Oe,ht,ut,Nt),Ie.equals(ae)===!1&&(i.clearColor(Oe,ht,ut,Nt),Ie.copy(ae))},reset:function(){L=!1,pe=null,Ie.set(-1,0,0,0)}}}function r(){let L=!1,ae=null,pe=null,Ie=null;return{setTest:function(Oe){Oe?Ae(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Oe){ae!==Oe&&!L&&(i.depthMask(Oe),ae=Oe)},setFunc:function(Oe){if(pe!==Oe){switch(Oe){case Mf:i.depthFunc(i.NEVER);break;case Ef:i.depthFunc(i.ALWAYS);break;case bf:i.depthFunc(i.LESS);break;case va:i.depthFunc(i.LEQUAL);break;case Sf:i.depthFunc(i.EQUAL);break;case Tf:i.depthFunc(i.GEQUAL);break;case wf:i.depthFunc(i.GREATER);break;case Af:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Oe}},setLocked:function(Oe){L=Oe},setClear:function(Oe){Ie!==Oe&&(i.clearDepth(Oe),Ie=Oe)},reset:function(){L=!1,ae=null,pe=null,Ie=null}}}function a(){let L=!1,ae=null,pe=null,Ie=null,Oe=null,ht=null,ut=null,Nt=null,Kt=null;return{setTest:function(gt){L||(gt?Ae(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(gt){ae!==gt&&!L&&(i.stencilMask(gt),ae=gt)},setFunc:function(gt,jt,Dn){(pe!==gt||Ie!==jt||Oe!==Dn)&&(i.stencilFunc(gt,jt,Dn),pe=gt,Ie=jt,Oe=Dn)},setOp:function(gt,jt,Dn){(ht!==gt||ut!==jt||Nt!==Dn)&&(i.stencilOp(gt,jt,Dn),ht=gt,ut=jt,Nt=Dn)},setLocked:function(gt){L=gt},setClear:function(gt){Kt!==gt&&(i.clearStencil(gt),Kt=gt)},reset:function(){L=!1,ae=null,pe=null,Ie=null,Oe=null,ht=null,ut=null,Nt=null,Kt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,p={},f={},_=new WeakMap,v=[],g=null,d=!1,m=null,x=null,y=null,R=null,b=null,w=null,C=null,M=new He(0,0,0),S=0,N=!1,H=null,ee=null,P=null,O=null,z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,$=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Z=$>=1):ie.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Z=$>=2);let Q=null,de={},W=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),K=new zt().fromArray(W),j=new zt().fromArray(k);function me(L,ae,pe,Ie){let Oe=new Uint8Array(4),ht=i.createTexture();i.bindTexture(L,ht),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<pe;ut++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ae,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(ae+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return ht}let Ce={};Ce[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ce[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ce[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(i.DEPTH_TEST),l.setFunc(va),be(!1),T(Fc),Ae(i.CULL_FACE),J(fi);function Ae(L){p[L]!==!0&&(i.enable(L),p[L]=!0)}function _e(L){p[L]!==!1&&(i.disable(L),p[L]=!1)}function Fe(L,ae){return f[L]!==ae?(i.bindFramebuffer(L,ae),f[L]=ae,n&&(L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ae),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ae)),!0):!1}function U(L,ae){let pe=v,Ie=!1;if(L)if(pe=_.get(ae),pe===void 0&&(pe=[],_.set(ae,pe)),L.isWebGLMultipleRenderTargets){let Oe=L.texture;if(pe.length!==Oe.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,ut=Oe.length;ht<ut;ht++)pe[ht]=i.COLOR_ATTACHMENT0+ht;pe.length=Oe.length,Ie=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,Ie=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,Ie=!0);Ie&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function ge(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let Y={[Di]:i.FUNC_ADD,[af]:i.FUNC_SUBTRACT,[of]:i.FUNC_REVERSE_SUBTRACT};if(n)Y[kc]=i.MIN,Y[Hc]=i.MAX;else{let L=e.get("EXT_blend_minmax");L!==null&&(Y[kc]=L.MIN_EXT,Y[Hc]=L.MAX_EXT)}let xe={[lf]:i.ZERO,[cf]:i.ONE,[hf]:i.SRC_COLOR,[il]:i.SRC_ALPHA,[gf]:i.SRC_ALPHA_SATURATE,[pf]:i.DST_COLOR,[df]:i.DST_ALPHA,[uf]:i.ONE_MINUS_SRC_COLOR,[sl]:i.ONE_MINUS_SRC_ALPHA,[mf]:i.ONE_MINUS_DST_COLOR,[ff]:i.ONE_MINUS_DST_ALPHA,[xf]:i.CONSTANT_COLOR,[_f]:i.ONE_MINUS_CONSTANT_COLOR,[vf]:i.CONSTANT_ALPHA,[yf]:i.ONE_MINUS_CONSTANT_ALPHA};function J(L,ae,pe,Ie,Oe,ht,ut,Nt,Kt,gt){if(L===fi){d===!0&&(_e(i.BLEND),d=!1);return}if(d===!1&&(Ae(i.BLEND),d=!0),L!==rf){if(L!==m||gt!==N){if((x!==Di||b!==Di)&&(i.blendEquation(i.FUNC_ADD),x=Di,b=Di),gt)switch(L){case Ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.ONE,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,R=null,w=null,C=null,M.set(0,0,0),S=0,m=L,N=gt}return}Oe=Oe||ae,ht=ht||pe,ut=ut||Ie,(ae!==x||Oe!==b)&&(i.blendEquationSeparate(Y[ae],Y[Oe]),x=ae,b=Oe),(pe!==y||Ie!==R||ht!==w||ut!==C)&&(i.blendFuncSeparate(xe[pe],xe[Ie],xe[ht],xe[ut]),y=pe,R=Ie,w=ht,C=ut),(Nt.equals(M)===!1||Kt!==S)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Kt),M.copy(Nt),S=Kt),m=L,N=!1}function Le(L,ae){L.side===At?_e(i.CULL_FACE):Ae(i.CULL_FACE);let pe=L.side===$t;ae&&(pe=!pe),be(pe),L.blending===Ls&&L.transparent===!1?J(fi):J(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let Ie=L.stencilWrite;c.setTest(Ie),Ie&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(L){H!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),H=L)}function T(L){L!==tf?(Ae(i.CULL_FACE),L!==ee&&(L===Fc?i.cullFace(i.BACK):L===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),ee=L}function E(L){L!==P&&(Z&&i.lineWidth(L),P=L)}function B(L,ae,pe){L?(Ae(i.POLYGON_OFFSET_FILL),(O!==ae||z!==pe)&&(i.polygonOffset(ae,pe),O=ae,z=pe)):_e(i.POLYGON_OFFSET_FILL)}function ue(L){L?Ae(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function ce(L){L===void 0&&(L=i.TEXTURE0+q-1),Q!==L&&(i.activeTexture(L),Q=L)}function oe(L,ae,pe){pe===void 0&&(Q===null?pe=i.TEXTURE0+q-1:pe=Q);let Ie=de[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},de[pe]=Ie),(Ie.type!==L||Ie.texture!==ae)&&(Q!==pe&&(i.activeTexture(pe),Q=pe),i.bindTexture(L,ae||Ce[L]),Ie.type=L,Ie.texture=ae)}function Re(){let L=de[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Me(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function We(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function I(L){K.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),K.copy(L))}function te(L){j.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function ve(L,ae){let pe=u.get(ae);pe===void 0&&(pe=new WeakMap,u.set(ae,pe));let Ie=pe.get(L);Ie===void 0&&(Ie=i.getUniformBlockIndex(ae,L.name),pe.set(L,Ie))}function le(L,ae){let Ie=u.get(ae).get(L);h.get(ae)!==Ie&&(i.uniformBlockBinding(ae,Ie,L.__bindingPointIndex),h.set(ae,Ie))}function re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},Q=null,de={},f={},_=new WeakMap,v=[],g=null,d=!1,m=null,x=null,y=null,R=null,b=null,w=null,C=null,M=new He(0,0,0),S=0,N=!1,H=null,ee=null,P=null,O=null,z=null,K.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:_e,bindFramebuffer:Fe,drawBuffers:U,useProgram:ge,setBlending:J,setMaterial:Le,setFlipSided:be,setCullFace:T,setLineWidth:E,setPolygonOffset:B,setScissorTest:ue,activeTexture:ce,bindTexture:oe,unbindTexture:Re,compressedTexImage2D:Me,compressedTexImage3D:Se,texImage2D:De,texImage3D:we,updateUBOMapping:ve,uniformBlockBinding:le,texStorage2D:Ke,texStorage3D:We,texSubImage2D:Ne,texSubImage3D:ke,compressedTexSubImage2D:he,compressedTexSubImage3D:st,scissor:I,viewport:te,reset:re}}function t_(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,E){return f?new OffscreenCanvas(T,E):Aa("canvas")}function v(T,E,B,ue){let ce=1;if((T.width>ue||T.height>ue)&&(ce=ue/Math.max(T.width,T.height)),ce<1||E===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let oe=E?wa:Math.floor,Re=oe(ce*T.width),Me=oe(ce*T.height);u===void 0&&(u=_(Re,Me));let Se=B?_(Re,Me):u;return Se.width=Re,Se.height=Me,Se.getContext("2d").drawImage(T,0,0,Re,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Re+"x"+Me+")."),Se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function g(T){return hl(T.width)&&hl(T.height)}function d(T){return o?!1:T.wrapS!==Cn||T.wrapT!==Cn||T.minFilter!==tn&&T.minFilter!==_n}function m(T,E){return T.generateMipmaps&&E&&T.minFilter!==tn&&T.minFilter!==_n}function x(T){i.generateMipmap(T)}function y(T,E,B,ue,ce=!1){if(o===!1)return E;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let oe=E;if(E===i.RED&&(B===i.FLOAT&&(oe=i.R32F),B===i.HALF_FLOAT&&(oe=i.R16F),B===i.UNSIGNED_BYTE&&(oe=i.R8)),E===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(oe=i.R8UI),B===i.UNSIGNED_SHORT&&(oe=i.R16UI),B===i.UNSIGNED_INT&&(oe=i.R32UI),B===i.BYTE&&(oe=i.R8I),B===i.SHORT&&(oe=i.R16I),B===i.INT&&(oe=i.R32I)),E===i.RG&&(B===i.FLOAT&&(oe=i.RG32F),B===i.HALF_FLOAT&&(oe=i.RG16F),B===i.UNSIGNED_BYTE&&(oe=i.RG8)),E===i.RGBA){let Re=ce?Ea:ft.getTransfer(ue);B===i.FLOAT&&(oe=i.RGBA32F),B===i.HALF_FLOAT&&(oe=i.RGBA16F),B===i.UNSIGNED_BYTE&&(oe=Re===_t?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function R(T,E,B){return m(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?E.mipmaps.length:1}function b(T){return T===tn||T===Gc||T===bo?i.NEAREST:i.LINEAR}function w(T){let E=T.target;E.removeEventListener("dispose",w),M(E),E.isVideoTexture&&h.delete(E)}function C(T){let E=T.target;E.removeEventListener("dispose",C),N(E)}function M(T){let E=n.get(T);if(E.__webglInit===void 0)return;let B=T.source,ue=p.get(B);if(ue){let ce=ue[E.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&S(T),Object.keys(ue).length===0&&p.delete(B)}n.remove(T)}function S(T){let E=n.get(T);i.deleteTexture(E.__webglTexture);let B=T.source,ue=p.get(B);delete ue[E.__cacheKey],a.memory.textures--}function N(T){let E=T.texture,B=n.get(T),ue=n.get(E);if(ue.__webglTexture!==void 0&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(B.__webglFramebuffer[ce]))for(let oe=0;oe<B.__webglFramebuffer[ce].length;oe++)i.deleteFramebuffer(B.__webglFramebuffer[ce][oe]);else i.deleteFramebuffer(B.__webglFramebuffer[ce]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[ce])}else{if(Array.isArray(B.__webglFramebuffer))for(let ce=0;ce<B.__webglFramebuffer.length;ce++)i.deleteFramebuffer(B.__webglFramebuffer[ce]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ce=0;ce<B.__webglColorRenderbuffer.length;ce++)B.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[ce]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ce=0,oe=E.length;ce<oe;ce++){let Re=n.get(E[ce]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),a.memory.textures--),n.remove(E[ce])}n.remove(E),n.remove(T)}let H=0;function ee(){H=0}function P(){let T=H;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),H+=1,T}function O(T){let E=[];return E.push(T.wrapS),E.push(T.wrapT),E.push(T.wrapR||0),E.push(T.magFilter),E.push(T.minFilter),E.push(T.anisotropy),E.push(T.internalFormat),E.push(T.format),E.push(T.type),E.push(T.generateMipmaps),E.push(T.premultiplyAlpha),E.push(T.flipY),E.push(T.unpackAlignment),E.push(T.colorSpace),E.join()}function z(T,E){let B=n.get(T);if(T.isVideoTexture&&Le(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){let ue=T.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(B,T,E);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+E)}function q(T,E){let B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+E)}function Z(T,E){let B=n.get(T);if(T.version>0&&B.__version!==T.version){K(B,T,E);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+E)}function $(T,E){let B=n.get(T);if(T.version>0&&B.__version!==T.version){j(B,T,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+E)}let ie={[hn]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[ol]:i.MIRRORED_REPEAT},Q={[tn]:i.NEAREST,[Gc]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[Nf]:i.LINEAR_MIPMAP_NEAREST,[dr]:i.LINEAR_MIPMAP_LINEAR},de={[$f]:i.NEVER,[Qf]:i.ALWAYS,[Yf]:i.LESS,[wu]:i.LEQUAL,[Zf]:i.EQUAL,[jf]:i.GEQUAL,[Jf]:i.GREATER,[Kf]:i.NOTEQUAL};function W(T,E,B){if(B?(i.texParameteri(T,i.TEXTURE_WRAP_S,ie[E.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ie[E.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ie[E.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Q[E.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Q[E.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Cn||E.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,b(E.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==tn&&E.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,de[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ue=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===tn||E.minFilter!==bo&&E.minFilter!==dr||E.type===di&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===fr&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(T,ue.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function k(T,E){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,E.addEventListener("dispose",w));let ue=E.source,ce=p.get(ue);ce===void 0&&(ce={},p.set(ue,ce));let oe=O(E);if(oe!==T.__cacheKey){ce[oe]===void 0&&(ce[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ce[oe].usedTimes++;let Re=ce[T.__cacheKey];Re!==void 0&&(ce[T.__cacheKey].usedTimes--,Re.usedTimes===0&&S(E)),T.__cacheKey=oe,T.__webglTexture=ce[oe].texture}return B}function K(T,E,B){let ue=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=i.TEXTURE_3D);let ce=k(T,E),oe=E.source;t.bindTexture(ue,T.__webglTexture,i.TEXTURE0+B);let Re=n.get(oe);if(oe.version!==Re.__version||ce===!0){t.activeTexture(i.TEXTURE0+B);let Me=ft.getPrimaries(ft.workingColorSpace),Se=E.colorSpace===vn?null:ft.getPrimaries(E.colorSpace),Ne=E.colorSpace===vn||Me===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ke=d(E)&&g(E.image)===!1,he=v(E.image,ke,!1,s.maxTextureSize);he=be(E,he);let st=g(he)||o,Ke=r.convert(E.format,E.colorSpace),We=r.convert(E.type),De=y(E.internalFormat,Ke,We,E.colorSpace,E.isVideoTexture);W(ue,E,st);let we,I=E.mipmaps,te=o&&E.isVideoTexture!==!0&&De!==bu,ve=Re.__version===void 0||ce===!0,le=R(E,he,st);if(E.isDepthTexture)De=i.DEPTH_COMPONENT,o?E.type===di?De=i.DEPTH_COMPONENT32F:E.type===ui?De=i.DEPTH_COMPONENT24:E.type===Fi?De=i.DEPTH24_STENCIL8:De=i.DEPTH_COMPONENT16:E.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Bi&&De===i.DEPTH_COMPONENT&&E.type!==jl&&E.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=ui,We=r.convert(E.type)),E.format===Os&&De===i.DEPTH_COMPONENT&&(De=i.DEPTH_STENCIL,E.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Fi,We=r.convert(E.type))),ve&&(te?t.texStorage2D(i.TEXTURE_2D,1,De,he.width,he.height):t.texImage2D(i.TEXTURE_2D,0,De,he.width,he.height,0,Ke,We,null));else if(E.isDataTexture)if(I.length>0&&st){te&&ve&&t.texStorage2D(i.TEXTURE_2D,le,De,I[0].width,I[0].height);for(let re=0,L=I.length;re<L;re++)we=I[re],te?t.texSubImage2D(i.TEXTURE_2D,re,0,0,we.width,we.height,Ke,We,we.data):t.texImage2D(i.TEXTURE_2D,re,De,we.width,we.height,0,Ke,We,we.data);E.generateMipmaps=!1}else te?(ve&&t.texStorage2D(i.TEXTURE_2D,le,De,he.width,he.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,he.width,he.height,Ke,We,he.data)):t.texImage2D(i.TEXTURE_2D,0,De,he.width,he.height,0,Ke,We,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,De,I[0].width,I[0].height,he.depth);for(let re=0,L=I.length;re<L;re++)we=I[re],E.format!==Pn?Ke!==null?te?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,he.depth,Ke,we.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,De,we.width,we.height,he.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,we.width,we.height,he.depth,Ke,We,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,De,we.width,we.height,he.depth,0,Ke,We,we.data)}else{te&&ve&&t.texStorage2D(i.TEXTURE_2D,le,De,I[0].width,I[0].height);for(let re=0,L=I.length;re<L;re++)we=I[re],E.format!==Pn?Ke!==null?te?t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,we.width,we.height,Ke,we.data):t.compressedTexImage2D(i.TEXTURE_2D,re,De,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?t.texSubImage2D(i.TEXTURE_2D,re,0,0,we.width,we.height,Ke,We,we.data):t.texImage2D(i.TEXTURE_2D,re,De,we.width,we.height,0,Ke,We,we.data)}else if(E.isDataArrayTexture)te?(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,De,he.width,he.height,he.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ke,We,he.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,he.width,he.height,he.depth,0,Ke,We,he.data);else if(E.isData3DTexture)te?(ve&&t.texStorage3D(i.TEXTURE_3D,le,De,he.width,he.height,he.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ke,We,he.data)):t.texImage3D(i.TEXTURE_3D,0,De,he.width,he.height,he.depth,0,Ke,We,he.data);else if(E.isFramebufferTexture){if(ve)if(te)t.texStorage2D(i.TEXTURE_2D,le,De,he.width,he.height);else{let re=he.width,L=he.height;for(let ae=0;ae<le;ae++)t.texImage2D(i.TEXTURE_2D,ae,De,re,L,0,Ke,We,null),re>>=1,L>>=1}}else if(I.length>0&&st){te&&ve&&t.texStorage2D(i.TEXTURE_2D,le,De,I[0].width,I[0].height);for(let re=0,L=I.length;re<L;re++)we=I[re],te?t.texSubImage2D(i.TEXTURE_2D,re,0,0,Ke,We,we):t.texImage2D(i.TEXTURE_2D,re,De,Ke,We,we);E.generateMipmaps=!1}else te?(ve&&t.texStorage2D(i.TEXTURE_2D,le,De,he.width,he.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ke,We,he)):t.texImage2D(i.TEXTURE_2D,0,De,Ke,We,he);m(E,st)&&x(ue),Re.__version=oe.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function j(T,E,B){if(E.image.length!==6)return;let ue=k(T,E),ce=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let oe=n.get(ce);if(ce.version!==oe.__version||ue===!0){t.activeTexture(i.TEXTURE0+B);let Re=ft.getPrimaries(ft.workingColorSpace),Me=E.colorSpace===vn?null:ft.getPrimaries(E.colorSpace),Se=E.colorSpace===vn||Re===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,ke=E.image[0]&&E.image[0].isDataTexture,he=[];for(let re=0;re<6;re++)!Ne&&!ke?he[re]=v(E.image[re],!1,!0,s.maxCubemapSize):he[re]=ke?E.image[re].image:E.image[re],he[re]=be(E,he[re]);let st=he[0],Ke=g(st)||o,We=r.convert(E.format,E.colorSpace),De=r.convert(E.type),we=y(E.internalFormat,We,De,E.colorSpace),I=o&&E.isVideoTexture!==!0,te=oe.__version===void 0||ue===!0,ve=R(E,st,Ke);W(i.TEXTURE_CUBE_MAP,E,Ke);let le;if(Ne){I&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,we,st.width,st.height);for(let re=0;re<6;re++){le=he[re].mipmaps;for(let L=0;L<le.length;L++){let ae=le[L];E.format!==Pn?We!==null?I?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,We,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,we,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,0,0,ae.width,ae.height,We,De,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L,we,ae.width,ae.height,0,We,De,ae.data)}}}else{le=E.mipmaps,I&&te&&(le.length>0&&ve++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,we,he[0].width,he[0].height));for(let re=0;re<6;re++)if(ke){I?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,he[re].width,he[re].height,We,De,he[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,we,he[re].width,he[re].height,0,We,De,he[re].data);for(let L=0;L<le.length;L++){let pe=le[L].image[re].image;I?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,pe.width,pe.height,We,De,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,we,pe.width,pe.height,0,We,De,pe.data)}}else{I?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,We,De,he[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,we,We,De,he[re]);for(let L=0;L<le.length;L++){let ae=le[L];I?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,0,0,We,De,ae.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,L+1,we,We,De,ae.image[re])}}}m(E,Ke)&&x(i.TEXTURE_CUBE_MAP),oe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}T.__version=E.version}function me(T,E,B,ue,ce,oe){let Re=r.convert(B.format,B.colorSpace),Me=r.convert(B.type),Se=y(B.internalFormat,Re,Me,B.colorSpace);if(!n.get(E).__hasExternalTextures){let ke=Math.max(1,E.width>>oe),he=Math.max(1,E.height>>oe);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,oe,Se,ke,he,E.depth,0,Re,Me,null):t.texImage2D(ce,oe,Se,ke,he,0,Re,Me,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),J(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ce,n.get(B).__webglTexture,0,xe(E)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ce,n.get(B).__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(T,E,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),E.depthBuffer&&!E.stencilBuffer){let ue=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||J(E)){let ce=E.depthTexture;ce&&ce.isDepthTexture&&(ce.type===di?ue=i.DEPTH_COMPONENT32F:ce.type===ui&&(ue=i.DEPTH_COMPONENT24));let oe=xe(E);J(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,ue,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,ue,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ue,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(E.depthBuffer&&E.stencilBuffer){let ue=xe(E);B&&J(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,E.width,E.height):J(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let ue=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ce=0;ce<ue.length;ce++){let oe=ue[ce],Re=r.convert(oe.format,oe.colorSpace),Me=r.convert(oe.type),Se=y(oe.internalFormat,Re,Me,oe.colorSpace),Ne=xe(E);B&&J(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Se,E.width,E.height):J(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Se,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Se,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(T,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),z(E.depthTexture,0);let ue=n.get(E.depthTexture).__webglTexture,ce=xe(E);if(E.depthTexture.format===Bi)J(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ue,0);else if(E.depthTexture.format===Os)J(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function _e(T){let E=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!E.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,T)}else if(B){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]=i.createRenderbuffer(),Ce(E.__webglDepthbuffer[ue],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Ce(E.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(T,E,B){let ue=n.get(T);E!==void 0&&me(ue.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&_e(T)}function U(T){let E=T.texture,B=n.get(T),ue=n.get(E);T.addEventListener("dispose",C),T.isWebGLMultipleRenderTargets!==!0&&(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=E.version,a.memory.textures++);let ce=T.isWebGLCubeRenderTarget===!0,oe=T.isWebGLMultipleRenderTargets===!0,Re=g(T)||o;if(ce){B.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(o&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[Me]=[];for(let Se=0;Se<E.mipmaps.length;Se++)B.__webglFramebuffer[Me][Se]=i.createFramebuffer()}else B.__webglFramebuffer[Me]=i.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)B.__webglFramebuffer[Me]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(oe)if(s.drawBuffers){let Me=T.texture;for(let Se=0,Ne=Me.length;Se<Ne;Se++){let ke=n.get(Me[Se]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&J(T)===!1){let Me=oe?E:[E];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Se=0;Se<Me.length;Se++){let Ne=Me[Se];B.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Se]);let ke=r.convert(Ne.format,Ne.colorSpace),he=r.convert(Ne.type),st=y(Ne.internalFormat,ke,he,Ne.colorSpace,T.isXRRenderTarget===!0),Ke=xe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,st,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,B.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),W(i.TEXTURE_CUBE_MAP,E,Re);for(let Me=0;Me<6;Me++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)me(B.__webglFramebuffer[Me][Se],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Se);else me(B.__webglFramebuffer[Me],T,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(E,Re)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){let Me=T.texture;for(let Se=0,Ne=Me.length;Se<Ne;Se++){let ke=Me[Se],he=n.get(ke);t.bindTexture(i.TEXTURE_2D,he.__webglTexture),W(i.TEXTURE_2D,ke,Re),me(B.__webglFramebuffer,T,ke,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),m(ke,Re)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let Me=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?Me=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,ue.__webglTexture),W(Me,E,Re),o&&E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)me(B.__webglFramebuffer[Se],T,E,i.COLOR_ATTACHMENT0,Me,Se);else me(B.__webglFramebuffer,T,E,i.COLOR_ATTACHMENT0,Me,0);m(E,Re)&&x(Me),t.unbindTexture()}T.depthBuffer&&_e(T)}function ge(T){let E=g(T)||o,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ue=0,ce=B.length;ue<ce;ue++){let oe=B[ue];if(m(oe,E)){let Re=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Me=n.get(oe).__webglTexture;t.bindTexture(Re,Me),x(Re),t.unbindTexture()}}}function Y(T){if(o&&T.samples>0&&J(T)===!1){let E=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,ue=T.height,ce=i.COLOR_BUFFER_BIT,oe=[],Re=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(T),Se=T.isWebGLMultipleRenderTargets===!0;if(Se)for(let Ne=0;Ne<E.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){oe.push(i.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&oe.push(Re);let ke=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(ke===!1&&(T.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),Se&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ne]),ke===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Re]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Re])),Se){let he=n.get(E[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,he,0)}i.blitFramebuffer(0,0,B,ue,0,0,B,ue,ce,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let Ne=0;Ne<E.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Me.__webglColorRenderbuffer[Ne]);let ke=n.get(E[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function xe(T){return Math.min(s.maxSamples,T.samples)}function J(T){let E=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Le(T){let E=a.render.frame;h.get(T)!==E&&(h.set(T,E),T.update())}function be(T,E){let B=T.colorSpace,ue=T.format,ce=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===cl||B!==ti&&B!==vn&&(ft.getTransfer(B)===_t?o===!1?e.has("EXT_sRGB")===!0&&ue===Pn?(T.format=cl,T.minFilter=_n,T.generateMipmaps=!1):E=Ra.sRGBToLinear(E):(ue!==Pn||ce!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),E}this.allocateTextureUnit=P,this.resetTextureUnits=ee,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=$,this.rebindTextures=Fe,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=J}function n_(i,e,t){let n=t.isWebGL2;function s(r,a=vn){let o,l=ft.getTransfer(a);if(r===mi)return i.UNSIGNED_BYTE;if(r===_u)return i.UNSIGNED_SHORT_4_4_4_4;if(r===vu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Of)return i.BYTE;if(r===Ff)return i.SHORT;if(r===jl)return i.UNSIGNED_SHORT;if(r===xu)return i.INT;if(r===ui)return i.UNSIGNED_INT;if(r===di)return i.FLOAT;if(r===fr)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Bf)return i.ALPHA;if(r===Pn)return i.RGBA;if(r===zf)return i.LUMINANCE;if(r===kf)return i.LUMINANCE_ALPHA;if(r===Bi)return i.DEPTH_COMPONENT;if(r===Os)return i.DEPTH_STENCIL;if(r===cl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Hf)return i.RED;if(r===yu)return i.RED_INTEGER;if(r===Gf)return i.RG;if(r===Mu)return i.RG_INTEGER;if(r===Eu)return i.RGBA_INTEGER;if(r===So||r===To||r===wo||r===Ao)if(l===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===So)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===So)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vc||r===Wc||r===Xc||r===qc)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Vc)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wc)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xc)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qc)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===$c||r===Yc)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===$c)return l===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Yc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zc||r===Jc||r===Kc||r===jc||r===Qc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===ah||r===oh||r===lh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Zc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qc)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===eh)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===th)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nh)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ih)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sh)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rh)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ah)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oh)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lh)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ro||r===ch||r===hh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Ro)return l===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ch)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vf||r===uh||r===dh||r===fh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ro)return o.COMPRESSED_RED_RGTC1_EXT;if(r===uh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var bl=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ge=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},i_={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&p>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ge;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sl=class extends xi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,p=null,f=null,_=null,v=t.getContextAttributes(),g=null,d=null,m=[],x=[],y=new fe,R=null,b=new nn;b.layers.enable(1),b.viewport=new zt;let w=new nn;w.layers.enable(2),w.viewport=new zt;let C=[b,w],M=new bl;M.layers.enable(1),M.layers.enable(2);let S=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let k=m[W];return k===void 0&&(k=new lr,m[W]=k),k.getTargetRaySpace()},this.getControllerGrip=function(W){let k=m[W];return k===void 0&&(k=new lr,m[W]=k),k.getGripSpace()},this.getHand=function(W){let k=m[W];return k===void 0&&(k=new lr,m[W]=k),k.getHandSpace()};function H(W){let k=x.indexOf(W.inputSource);if(k===-1)return;let K=m[k];K!==void 0&&(K.update(W.inputSource,W.frame,c||a),K.dispatchEvent({type:W.type,data:W.inputSource}))}function ee(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",P);for(let W=0;W<m.length;W++){let k=x[W];k!==null&&(x[W]=null,m[W].disconnect(k))}S=null,N=null,e.setRenderTarget(g),f=null,p=null,u=null,s=null,d=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let k={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,k),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),d=new ni(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let k=null,K=null,j=null;v.depth&&(j=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,k=v.stencil?Os:Bi,K=v.stencil?Fi:ui);let me={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};u=new XRWebGLBinding(s,t),p=u.createProjectionLayer(me),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),d=new ni(p.textureWidth,p.textureHeight,{format:Pn,type:mi,depthTexture:new Ba(p.textureWidth,p.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});let Ce=e.properties.get(d);Ce.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(W){for(let k=0;k<W.removed.length;k++){let K=W.removed[k],j=x.indexOf(K);j>=0&&(x[j]=null,m[j].disconnect(K))}for(let k=0;k<W.added.length;k++){let K=W.added[k],j=x.indexOf(K);if(j===-1){for(let Ce=0;Ce<m.length;Ce++)if(Ce>=x.length){x.push(K),j=Ce;break}else if(x[Ce]===null){x[Ce]=K,j=Ce;break}if(j===-1)break}let me=m[j];me&&me.connect(K)}}let O=new D,z=new D;function q(W,k,K){O.setFromMatrixPosition(k.matrixWorld),z.setFromMatrixPosition(K.matrixWorld);let j=O.distanceTo(z),me=k.projectionMatrix.elements,Ce=K.projectionMatrix.elements,Ae=me[14]/(me[10]-1),_e=me[14]/(me[10]+1),Fe=(me[9]+1)/me[5],U=(me[9]-1)/me[5],ge=(me[8]-1)/me[0],Y=(Ce[8]+1)/Ce[0],xe=Ae*ge,J=Ae*Y,Le=j/(-ge+Y),be=Le*-ge;k.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(be),W.translateZ(Le),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let T=Ae+Le,E=_e+Le,B=xe-be,ue=J+(j-be),ce=Fe*_e/E*T,oe=U*_e/E*T;W.projectionMatrix.makePerspective(B,ue,ce,oe,T,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Z(W,k){k===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(k.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;M.near=w.near=b.near=W.near,M.far=w.far=b.far=W.far,(S!==M.near||N!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,N=M.far);let k=W.parent,K=M.cameras;Z(M,k);for(let j=0;j<K.length;j++)Z(K[j],k);K.length===2?q(M,b,w):M.projectionMatrix.copy(b.projectionMatrix),$(W,M,k)};function $(W,k,K){K===null?W.matrix.copy(k.matrixWorld):(W.matrix.copy(K.matrixWorld),W.matrix.invert(),W.matrix.multiply(k.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(k.projectionMatrix),W.projectionMatrixInverse.copy(k.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=pr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)};let ie=null;function Q(W,k){if(h=k.getViewerPose(c||a),_=k,h!==null){let K=h.views;f!==null&&(e.setRenderTargetFramebuffer(d,f.framebuffer),e.setRenderTarget(d));let j=!1;K.length!==M.cameras.length&&(M.cameras.length=0,j=!0);for(let me=0;me<K.length;me++){let Ce=K[me],Ae=null;if(f!==null)Ae=f.getViewport(Ce);else{let Fe=u.getViewSubImage(p,Ce);Ae=Fe.viewport,me===0&&(e.setRenderTargetTextures(d,Fe.colorTexture,p.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(d))}let _e=C[me];_e===void 0&&(_e=new nn,_e.layers.enable(me),_e.viewport=new zt,C[me]=_e),_e.matrix.fromArray(Ce.transform.matrix),_e.matrix.decompose(_e.position,_e.quaternion,_e.scale),_e.projectionMatrix.fromArray(Ce.projectionMatrix),_e.projectionMatrixInverse.copy(_e.projectionMatrix).invert(),_e.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),me===0&&(M.matrix.copy(_e.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),j===!0&&M.cameras.push(_e)}}for(let K=0;K<m.length;K++){let j=x[K],me=m[K];j!==null&&me!==void 0&&me.update(j,k,c||a)}ie&&ie(W,k),k.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:k}),_=null}let de=new Pu;de.setAnimationLoop(Q),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}};function s_(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Cu(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,m,x,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(g,d):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d)):d.isMeshStandardMaterial?(r(g,d),p(g,d),d.isMeshPhysicalMaterial&&f(g,d,y)):d.isMeshMatcapMaterial?(r(g,d),_(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),v(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,m,x):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===$t&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===$t&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);let m=e.get(d).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,m,x){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*m,g.scale.value=x*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function p(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function f(g,d,m){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){let m=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r_(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,x){let y=x.program;n.uniformBlockBinding(m,y)}function c(m,x){let y=s[m.id];y===void 0&&(_(m),y=h(m),s[m.id]=y,m.addEventListener("dispose",g));let R=x.program;n.updateUBOMapping(m,R);let b=e.render.frame;r[m.id]!==b&&(p(m),r[m.id]=b)}function h(m){let x=u();m.__bindingPointIndex=x;let y=i.createBuffer(),R=m.__size,b=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(m){let x=s[m.id],y=m.uniforms,R=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let b=0,w=y.length;b<w;b++){let C=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,S=C.length;M<S;M++){let N=C[M];if(f(N,b,M,R)===!0){let H=N.__offset,ee=Array.isArray(N.value)?N.value:[N.value],P=0;for(let O=0;O<ee.length;O++){let z=ee[O],q=v(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,H+P,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,P),P+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(m,x,y,R){let b=m.value,w=x+"_"+y;if(R[w]===void 0)return typeof b=="number"||typeof b=="boolean"?R[w]=b:R[w]=b.clone(),!0;{let C=R[w];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return R[w]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(m){let x=m.uniforms,y=0,R=16;for(let w=0,C=x.length;w<C;w++){let M=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,N=M.length;S<N;S++){let H=M[S],ee=Array.isArray(H.value)?H.value:[H.value];for(let P=0,O=ee.length;P<O;P++){let z=ee[P],q=v(z),Z=y%R;Z!==0&&R-Z<q.boundary&&(y+=R-Z),H.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=q.storage}}}let b=y%R;return b>0&&(y+=R-b),m.__size=y,m.__cache={},this}function v(m){let x={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(x.boundary=4,x.storage=4):m.isVector2?(x.boundary=8,x.storage=8):m.isVector3||m.isColor?(x.boundary=16,x.storage=12):m.isVector4?(x.boundary=16,x.storage=16):m.isMatrix3?(x.boundary=48,x.storage=48):m.isMatrix4?(x.boundary=64,x.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),x}function g(m){let x=m.target;x.removeEventListener("dispose",g);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let m in s)i.deleteBuffer(s[m]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var xr=class{constructor(e={}){let{canvas:t=pp(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let f=new Uint32Array(4),_=new Int32Array(4),v=null,g=null,d=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;let x=this,y=!1,R=0,b=0,w=null,C=-1,M=null,S=new zt,N=new zt,H=null,ee=new He(0),P=0,O=t.width,z=t.height,q=1,Z=null,$=null,ie=new zt(0,0,O,z),Q=new zt(0,0,O,z),de=!1,W=new gr,k=!1,K=!1,j=null,me=new vt,Ce=new fe,Ae=new D,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return w===null?q:1}let U=n;function ge(A,F){for(let V=0;V<A.length;V++){let X=A[V],G=t.getContext(X,F);if(G!==null)return G}return null}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jl}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ae,!1),U===null){let F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),U=ge(F,A),U===null)throw ge(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Y,xe,J,Le,be,T,E,B,ue,ce,oe,Re,Me,Se,Ne,ke,he,st,Ke,We,De,we,I,te;function ve(){Y=new Sg(U),xe=new _g(U,Y,e),Y.init(xe),we=new n_(U,Y,xe),J=new e_(U,Y,xe),Le=new Ag(U),be=new Gx,T=new t_(U,Y,J,be,xe,we,Le),E=new yg(x),B=new bg(x),ue=new Np(U,xe),I=new gg(U,Y,ue,xe),ce=new Tg(U,ue,Le,I),oe=new Lg(U,ce,ue,Le),Ke=new Pg(U,xe,T),ke=new vg(be),Re=new Hx(x,E,B,Y,xe,I,ke),Me=new s_(x,be),Se=new Wx,Ne=new Jx(Y,xe),st=new mg(x,E,B,J,oe,p,l),he=new Qx(x,oe,xe),te=new r_(U,Le,xe,J),We=new xg(U,Y,Le,xe),De=new wg(U,Y,Le,xe),Le.programs=Re.programs,x.capabilities=xe,x.extensions=Y,x.properties=be,x.renderLists=Se,x.shadowMap=he,x.state=J,x.info=Le}ve();let le=new Sl(x,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Y.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Y.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(O,z,!1))},this.getSize=function(A){return A.set(O,z)},this.setSize=function(A,F,V=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,z=F,t.width=Math.floor(A*q),t.height=Math.floor(F*q),V===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set(O*q,z*q).floor()},this.setDrawingBufferSize=function(A,F,V){O=A,z=F,q=V,t.width=Math.floor(A*V),t.height=Math.floor(F*V),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,F,V,X){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,F,V,X),J.viewport(S.copy(ie).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,F,V,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,F,V,X),J.scissor(N.copy(Q).multiplyScalar(q).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(A){J.setScissorTest(de=A)},this.setOpaqueSort=function(A){Z=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(A=!0,F=!0,V=!0){let X=0;if(A){let G=!1;if(w!==null){let Te=w.texture.format;G=Te===Eu||Te===Mu||Te===yu}if(G){let Te=w.texture.type,Ue=Te===mi||Te===ui||Te===jl||Te===Fi||Te===_u||Te===vu,ze=st.getClearColor(),Xe=st.getClearAlpha(),je=ze.r,qe=ze.g,Ye=ze.b;Ue?(f[0]=je,f[1]=qe,f[2]=Ye,f[3]=Xe,U.clearBufferuiv(U.COLOR,0,f)):(_[0]=je,_[1]=qe,_[2]=Ye,_[3]=Xe,U.clearBufferiv(U.COLOR,0,_))}else X|=U.COLOR_BUFFER_BIT}F&&(X|=U.DEPTH_BUFFER_BIT),V&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Se.dispose(),Ne.dispose(),be.dispose(),E.dispose(),B.dispose(),oe.dispose(),I.dispose(),te.dispose(),Re.dispose(),le.dispose(),le.removeEventListener("sessionstart",Kt),le.removeEventListener("sessionend",gt),j&&(j.dispose(),j=null),jt.stop()};function re(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;let A=Le.autoReset,F=he.enabled,V=he.autoUpdate,X=he.needsUpdate,G=he.type;ve(),Le.autoReset=A,he.enabled=F,he.autoUpdate=V,he.needsUpdate=X,he.type=G}function ae(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function pe(A){let F=A.target;F.removeEventListener("dispose",pe),Ie(F)}function Ie(A){Oe(A),be.remove(A)}function Oe(A){let F=be.get(A).programs;F!==void 0&&(F.forEach(function(V){Re.releaseProgram(V)}),A.isShaderMaterial&&Re.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,V,X,G,Te){F===null&&(F=_e);let Ue=G.isMesh&&G.matrixWorld.determinant()<0,ze=Kd(A,F,V,X,G);J.setMaterial(X,Ue);let Xe=V.index,je=1;if(X.wireframe===!0){if(Xe=ce.getWireframeAttribute(V),Xe===void 0)return;je=2}let qe=V.drawRange,Ye=V.attributes.position,Rt=qe.start*je,on=(qe.start+qe.count)*je;Te!==null&&(Rt=Math.max(Rt,Te.start*je),on=Math.min(on,(Te.start+Te.count)*je)),Xe!==null?(Rt=Math.max(Rt,0),on=Math.min(on,Xe.count)):Ye!=null&&(Rt=Math.max(Rt,0),on=Math.min(on,Ye.count));let Ot=on-Rt;if(Ot<0||Ot===1/0)return;I.setup(G,X,ze,V,Xe);let qn,bt=We;if(Xe!==null&&(qn=ue.get(Xe),bt=De,bt.setIndex(qn)),G.isMesh)X.wireframe===!0?(J.setLineWidth(X.wireframeLinewidth*Fe()),bt.setMode(U.LINES)):bt.setMode(U.TRIANGLES);else if(G.isLine){let et=X.linewidth;et===void 0&&(et=1),J.setLineWidth(et*Fe()),G.isLineSegments?bt.setMode(U.LINES):G.isLineLoop?bt.setMode(U.LINE_LOOP):bt.setMode(U.LINE_STRIP)}else G.isPoints?bt.setMode(U.POINTS):G.isSprite&&bt.setMode(U.TRIANGLES);if(G.isBatchedMesh)bt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)bt.renderInstances(Rt,Ot,G.count);else if(V.isInstancedBufferGeometry){let et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,vo=Math.min(V.instanceCount,et);bt.renderInstances(Rt,Ot,vo)}else bt.render(Rt,Ot)};function ht(A,F,V){A.transparent===!0&&A.side===At&&A.forceSinglePass===!1?(A.side=$t,A.needsUpdate=!0,Hr(A,F,V),A.side=gi,A.needsUpdate=!0,Hr(A,F,V),A.side=At):Hr(A,F,V)}this.compile=function(A,F,V=null){V===null&&(V=A),g=Ne.get(V),g.init(),m.push(g),V.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),A!==V&&A.traverseVisible(function(G){G.isLight&&G.layers.test(F.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights(x._useLegacyLights);let X=new Set;return A.traverse(function(G){let Te=G.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){let ze=Te[Ue];ht(ze,V,G),X.add(ze)}else ht(Te,V,G),X.add(Te)}),m.pop(),g=null,X},this.compileAsync=function(A,F,V=null){let X=this.compile(A,F,V);return new Promise(G=>{function Te(){if(X.forEach(function(Ue){be.get(Ue).currentProgram.isReady()&&X.delete(Ue)}),X.size===0){G(A);return}setTimeout(Te,10)}Y.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let ut=null;function Nt(A){ut&&ut(A)}function Kt(){jt.stop()}function gt(){jt.start()}let jt=new Pu;jt.setAnimationLoop(Nt),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(A){ut=A,le.setAnimationLoop(A),A===null?jt.stop():jt.start()},le.addEventListener("sessionstart",Kt),le.addEventListener("sessionend",gt),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,w),g=Ne.get(A,m.length),g.init(),m.push(g),me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(me),K=this.localClippingEnabled,k=ke.init(this.clippingPlanes,K),v=Se.get(A,d.length),v.init(),d.push(v),Dn(A,F,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Z,$),this.info.render.frame++,k===!0&&ke.beginShadows();let V=g.state.shadowsArray;if(he.render(V,A,F),k===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(v,A),g.setupLights(x._useLegacyLights),F.isArrayCamera){let X=F.cameras;for(let G=0,Te=X.length;G<Te;G++){let Ue=X[G];Lc(v,A,Ue,Ue.viewport)}}else Lc(v,A,F);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(x,A,F),I.resetDefaultState(),C=-1,M=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Dn(A,F,V,X){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||W.intersectsSprite(A)){X&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);let Ue=oe.update(A),ze=A.material;ze.visible&&v.push(A,Ue,ze,V,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||W.intersectsObject(A))){let Ue=oe.update(A),ze=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Ae.copy(Ue.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(ze)){let Xe=Ue.groups;for(let je=0,qe=Xe.length;je<qe;je++){let Ye=Xe[je],Rt=ze[Ye.materialIndex];Rt&&Rt.visible&&v.push(A,Ue,Rt,V,Ae.z,Ye)}}else ze.visible&&v.push(A,Ue,ze,V,Ae.z,null)}}let Te=A.children;for(let Ue=0,ze=Te.length;Ue<ze;Ue++)Dn(Te[Ue],F,V,X)}function Lc(A,F,V,X){let G=A.opaque,Te=A.transmissive,Ue=A.transparent;g.setupLightsView(V),k===!0&&ke.setGlobalState(x.clippingPlanes,V),Te.length>0&&Jd(G,Te,F,V),X&&J.viewport(S.copy(X)),G.length>0&&kr(G,F,V),Te.length>0&&kr(Te,F,V),Ue.length>0&&kr(Ue,F,V),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function Jd(A,F,V,X){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;let Te=xe.isWebGL2;j===null&&(j=new ni(1,1,{generateMipmaps:!0,type:Y.has("EXT_color_buffer_half_float")?fr:mi,minFilter:dr,samples:Te?4:0})),x.getDrawingBufferSize(Ce),Te?j.setSize(Ce.x,Ce.y):j.setSize(wa(Ce.x),wa(Ce.y));let Ue=x.getRenderTarget();x.setRenderTarget(j),x.getClearColor(ee),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear();let ze=x.toneMapping;x.toneMapping=pi,kr(A,V,X),T.updateMultisampleRenderTarget(j),T.updateRenderTargetMipmap(j);let Xe=!1;for(let je=0,qe=F.length;je<qe;je++){let Ye=F[je],Rt=Ye.object,on=Ye.geometry,Ot=Ye.material,qn=Ye.group;if(Ot.side===At&&Rt.layers.test(X.layers)){let bt=Ot.side;Ot.side=$t,Ot.needsUpdate=!0,Ic(Rt,V,X,on,Ot,qn),Ot.side=bt,Ot.needsUpdate=!0,Xe=!0}}Xe===!0&&(T.updateMultisampleRenderTarget(j),T.updateRenderTargetMipmap(j)),x.setRenderTarget(Ue),x.setClearColor(ee,P),x.toneMapping=ze}function kr(A,F,V){let X=F.isScene===!0?F.overrideMaterial:null;for(let G=0,Te=A.length;G<Te;G++){let Ue=A[G],ze=Ue.object,Xe=Ue.geometry,je=X===null?Ue.material:X,qe=Ue.group;ze.layers.test(V.layers)&&Ic(ze,F,V,Xe,je,qe)}}function Ic(A,F,V,X,G,Te){A.onBeforeRender(x,F,V,X,G,Te),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(x,F,V,X,A,Te),G.transparent===!0&&G.side===At&&G.forceSinglePass===!1?(G.side=$t,G.needsUpdate=!0,x.renderBufferDirect(V,F,X,G,A,Te),G.side=gi,G.needsUpdate=!0,x.renderBufferDirect(V,F,X,G,A,Te),G.side=At):x.renderBufferDirect(V,F,X,G,A,Te),A.onAfterRender(x,F,V,X,G,Te)}function Hr(A,F,V){F.isScene!==!0&&(F=_e);let X=be.get(A),G=g.state.lights,Te=g.state.shadowsArray,Ue=G.state.version,ze=Re.getParameters(A,G.state,Te,F,V),Xe=Re.getProgramCacheKey(ze),je=X.programs;X.environment=A.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(A.isMeshStandardMaterial?B:E).get(A.envMap||X.environment),je===void 0&&(A.addEventListener("dispose",pe),je=new Map,X.programs=je);let qe=je.get(Xe);if(qe!==void 0){if(X.currentProgram===qe&&X.lightsStateVersion===Ue)return Dc(A,ze),qe}else ze.uniforms=Re.getUniforms(A),A.onBuild(V,ze,x),A.onBeforeCompile(ze,x),qe=Re.acquireProgram(ze,Xe),je.set(Xe,qe),X.uniforms=ze.uniforms;let Ye=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ye.clippingPlanes=ke.uniform),Dc(A,ze),X.needsLights=Qd(A),X.lightsStateVersion=Ue,X.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=qe,X.uniformsList=null,qe}function Uc(A){if(A.uniformsList===null){let F=A.currentProgram.getUniforms();A.uniformsList=Us.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Dc(A,F){let V=be.get(A);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Kd(A,F,V,X,G){F.isScene!==!0&&(F=_e),T.resetTextureUnits();let Te=F.fog,Ue=X.isMeshStandardMaterial?F.environment:null,ze=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ti,Xe=(X.isMeshStandardMaterial?B:E).get(X.envMap||Ue),je=X.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,qe=!!V.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ye=!!V.morphAttributes.position,Rt=!!V.morphAttributes.normal,on=!!V.morphAttributes.color,Ot=pi;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ot=x.toneMapping);let qn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,bt=qn!==void 0?qn.length:0,et=be.get(X),vo=g.state.lights;if(k===!0&&(K===!0||A!==M)){let gn=A===M&&X.id===C;ke.setState(X,A,gn)}let wt=!1;X.version===et.__version?(et.needsLights&&et.lightsStateVersion!==vo.state.version||et.outputColorSpace!==ze||G.isBatchedMesh&&et.batching===!1||!G.isBatchedMesh&&et.batching===!0||G.isInstancedMesh&&et.instancing===!1||!G.isInstancedMesh&&et.instancing===!0||G.isSkinnedMesh&&et.skinning===!1||!G.isSkinnedMesh&&et.skinning===!0||G.isInstancedMesh&&et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&et.instancingColor===!1&&G.instanceColor!==null||et.envMap!==Xe||X.fog===!0&&et.fog!==Te||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==ke.numPlanes||et.numIntersection!==ke.numIntersection)||et.vertexAlphas!==je||et.vertexTangents!==qe||et.morphTargets!==Ye||et.morphNormals!==Rt||et.morphColors!==on||et.toneMapping!==Ot||xe.isWebGL2===!0&&et.morphTargetsCount!==bt)&&(wt=!0):(wt=!0,et.__version=X.version);let Ai=et.currentProgram;wt===!0&&(Ai=Hr(X,F,G));let Nc=!1,Zs=!1,yo=!1,Wt=Ai.getUniforms(),Ri=et.uniforms;if(J.useProgram(Ai.program)&&(Nc=!0,Zs=!0,yo=!0),X.id!==C&&(C=X.id,Zs=!0),Nc||M!==A){Wt.setValue(U,"projectionMatrix",A.projectionMatrix),Wt.setValue(U,"viewMatrix",A.matrixWorldInverse);let gn=Wt.map.cameraPosition;gn!==void 0&&gn.setValue(U,Ae.setFromMatrixPosition(A.matrixWorld)),xe.logarithmicDepthBuffer&&Wt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Wt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Zs=!0,yo=!0)}if(G.isSkinnedMesh){Wt.setOptional(U,G,"bindMatrix"),Wt.setOptional(U,G,"bindMatrixInverse");let gn=G.skeleton;gn&&(xe.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Wt.setValue(U,"boneTexture",gn.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Wt.setOptional(U,G,"batchingTexture"),Wt.setValue(U,"batchingTexture",G._matricesTexture,T));let Mo=V.morphAttributes;if((Mo.position!==void 0||Mo.normal!==void 0||Mo.color!==void 0&&xe.isWebGL2===!0)&&Ke.update(G,V,Ai),(Zs||et.receiveShadow!==G.receiveShadow)&&(et.receiveShadow=G.receiveShadow,Wt.setValue(U,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ri.envMap.value=Xe,Ri.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),Zs&&(Wt.setValue(U,"toneMappingExposure",x.toneMappingExposure),et.needsLights&&jd(Ri,yo),Te&&X.fog===!0&&Me.refreshFogUniforms(Ri,Te),Me.refreshMaterialUniforms(Ri,X,q,z,j),Us.upload(U,Uc(et),Ri,T)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Us.upload(U,Uc(et),Ri,T),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Wt.setValue(U,"center",G.center),Wt.setValue(U,"modelViewMatrix",G.modelViewMatrix),Wt.setValue(U,"normalMatrix",G.normalMatrix),Wt.setValue(U,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let gn=X.uniformsGroups;for(let Eo=0,ef=gn.length;Eo<ef;Eo++)if(xe.isWebGL2){let Oc=gn[Eo];te.update(Oc,Ai),te.bind(Oc,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function jd(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function Qd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,F,V){be.get(A.texture).__webglTexture=F,be.get(A.depthTexture).__webglTexture=V;let X=be.get(A);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=V===void 0,X.__autoAllocateDepthBuffer||Y.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,F){let V=be.get(A);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,V=0){w=A,R=F,b=V;let X=!0,G=null,Te=!1,Ue=!1;if(A){let Xe=be.get(A);Xe.__useDefaultFramebuffer!==void 0?(J.bindFramebuffer(U.FRAMEBUFFER,null),X=!1):Xe.__webglFramebuffer===void 0?T.setupRenderTarget(A):Xe.__hasExternalTextures&&T.rebindTextures(A,be.get(A.texture).__webglTexture,be.get(A.depthTexture).__webglTexture);let je=A.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ue=!0);let qe=be.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?G=qe[F][V]:G=qe[F],Te=!0):xe.isWebGL2&&A.samples>0&&T.useMultisampledRTT(A)===!1?G=be.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?G=qe[V]:G=qe,S.copy(A.viewport),N.copy(A.scissor),H=A.scissorTest}else S.copy(ie).multiplyScalar(q).floor(),N.copy(Q).multiplyScalar(q).floor(),H=de;if(J.bindFramebuffer(U.FRAMEBUFFER,G)&&xe.drawBuffers&&X&&J.drawBuffers(A,G),J.viewport(S),J.scissor(N),J.setScissorTest(H),Te){let Xe=be.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,Xe.__webglTexture,V)}else if(Ue){let Xe=be.get(A.texture),je=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xe.__webglTexture,V||0,je)}C=-1},this.readRenderTargetPixels=function(A,F,V,X,G,Te,Ue){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=be.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){J.bindFramebuffer(U.FRAMEBUFFER,ze);try{let Xe=A.texture,je=Xe.format,qe=Xe.type;if(je!==Pn&&we.convert(je)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ye=qe===fr&&(Y.has("EXT_color_buffer_half_float")||xe.isWebGL2&&Y.has("EXT_color_buffer_float"));if(qe!==mi&&we.convert(qe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(qe===di&&(xe.isWebGL2||Y.has("OES_texture_float")||Y.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-X&&V>=0&&V<=A.height-G&&U.readPixels(F,V,X,G,we.convert(je),we.convert(qe),Te)}finally{let Xe=w!==null?be.get(w).__webglFramebuffer:null;J.bindFramebuffer(U.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(A,F,V=0){let X=Math.pow(2,-V),G=Math.floor(F.image.width*X),Te=Math.floor(F.image.height*X);T.setTexture2D(F,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,A.x,A.y,G,Te),J.unbindTexture()},this.copyTextureToTexture=function(A,F,V,X=0){let G=F.image.width,Te=F.image.height,Ue=we.convert(V.format),ze=we.convert(V.type);T.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,A.x,A.y,G,Te,Ue,ze,F.image.data):F.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,A.x,A.y,F.mipmaps[0].width,F.mipmaps[0].height,Ue,F.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,X,A.x,A.y,Ue,ze,F.image),X===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),J.unbindTexture()},this.copyTextureToTexture3D=function(A,F,V,X,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Te=A.max.x-A.min.x+1,Ue=A.max.y-A.min.y+1,ze=A.max.z-A.min.z+1,Xe=we.convert(X.format),je=we.convert(X.type),qe;if(X.isData3DTexture)T.setTexture3D(X,0),qe=U.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)T.setTexture2DArray(X,0),qe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);let Ye=U.getParameter(U.UNPACK_ROW_LENGTH),Rt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),on=U.getParameter(U.UNPACK_SKIP_PIXELS),Ot=U.getParameter(U.UNPACK_SKIP_ROWS),qn=U.getParameter(U.UNPACK_SKIP_IMAGES),bt=V.isCompressedTexture?V.mipmaps[G]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,bt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,bt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,A.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,A.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(qe,G,F.x,F.y,F.z,Te,Ue,ze,Xe,je,bt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(qe,G,F.x,F.y,F.z,Te,Ue,ze,Xe,bt.data)):U.texSubImage3D(qe,G,F.x,F.y,F.z,Te,Ue,ze,Xe,je,bt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ye),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,on),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ot),U.pixelStorei(U.UNPACK_SKIP_IMAGES,qn),G===0&&X.generateMipmaps&&U.generateMipmap(qe),J.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),J.unbindTexture()},this.resetState=function(){R=0,b=0,w=null,J.reset(),I.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ql?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===eo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?zi:Su}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zi?pt:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Tl=class extends xr{};Tl.prototype.isWebGL1Renderer=!0;var za=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new He(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zs=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},wl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ll,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qt=new D,ka=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hi=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bs,er=new D,Ss=new D,Ts=new D,ws=new fe,tr=new fe,Ou=new vt,ha=new D,nr=new D,ua=new D,iu=new fe,jo=new fe,su=new fe,ks=class extends Zt{constructor(e=new Hi){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Ht;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wl(t,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new ka(n,3,0,!1)),bs.setAttribute("uv",new ka(n,2,3,!1))}this.geometry=bs,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),Ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;da(ha.set(-.5,-.5,0),Ts,a,Ss,s,r),da(nr.set(.5,-.5,0),Ts,a,Ss,s,r),da(ua.set(.5,.5,0),Ts,a,Ss,s,r),iu.set(0,0),jo.set(1,0),su.set(1,1);let o=e.ray.intersectTriangle(ha,nr,ua,!1,er);if(o===null&&(da(nr.set(-.5,.5,0),Ts,a,Ss,s,r),jo.set(0,1),o=e.ray.intersectTriangle(ha,ua,nr,!1,er),o===null))return;let l=e.ray.origin.distanceTo(er);l<e.near||l>e.far||t.push({distance:l,point:er.clone(),uv:Oi.getInterpolation(er,ha,nr,ua,iu,jo,su,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function da(i,e,t,n,s,r){ws.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(tr.x=r*ws.x-s*ws.y,tr.y=s*ws.x+r*ws.y):tr.copy(ws),i.copy(e),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(Ou)}var Ha=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new vt,ru=new vt,fa=[],au=new ii,a_=new vt,ir=new se,sr=new ki,_r=class extends se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ha(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,a_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),au.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(au)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),sr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ir.geometry=this.geometry,ir.material=this.material,ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),ru.multiplyMatrices(n,As),ir.matrixWorld=ru,ir.raycast(e,fa);for(let a=0,o=fa.length;a<o;a++){let l=fa[a];l.instanceId=r,l.object=this,t.push(l)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ha(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var dn=class extends yn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],p=n[s+1]-h,f=(a-h)/p;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new fe:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new D,s=[],r=[],a=[],o=new D,l=new vt;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Bt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Bt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vr=class extends Mn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new fe,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*u+this.aX,c=p*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Al=class extends vr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let p=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;p*=h,f*=h,s(a,o,p,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var pa=new D,Qo=new nc,el=new nc,tl=new nc,Rl=class extends Mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(pa.subVectors(s[0],s[1]).add(s[0]),c=pa);let u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(pa.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pa),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(p),f),g=Math.pow(p.distanceToSquared(h),f);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Qo.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,_,v,g),el.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,_,v,g),tl.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,_,v,g)}else this.curveType==="catmullrom"&&(Qo.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),el.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),tl.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Qo.calc(l),el.calc(l),tl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ou(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function o_(i,e){let t=1-i;return t*t*e}function l_(i,e){return 2*(1-i)*i*e}function c_(i,e){return i*i*e}function cr(i,e,t,n){return o_(i,e)+l_(i,t)+c_(i,n)}function h_(i,e){let t=1-i;return t*t*t*e}function u_(i,e){let t=1-i;return 3*t*t*i*e}function d_(i,e){return 3*(1-i)*i*i*e}function f_(i,e){return i*i*i*e}function hr(i,e,t,n,s){return h_(i,e)+u_(i,t)+d_(i,n)+f_(i,s)}var Ga=class extends Mn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(e,s.x,r.x,a.x,o.x),hr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cl=class extends Mn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(e,s.x,r.x,a.x,o.x),hr(e,s.y,r.y,a.y,o.y),hr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends Mn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pl=class extends Mn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends Mn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ll=class extends Mn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y),cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xa=class extends Mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ou(o,l.x,c.x,h.x,u.x),ou(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Il=Object.freeze({__proto__:null,ArcCurve:Al,CatmullRomCurve3:Rl,CubicBezierCurve:Ga,CubicBezierCurve3:Cl,EllipseCurve:vr,LineCurve:Va,LineCurve3:Pl,QuadraticBezierCurve:Wa,QuadraticBezierCurve3:Ll,SplineCurve:Xa}),Ul=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Il[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Il[s.type]().fromJSON(s))}return this}},Gi=class extends Ul{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Va(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wa(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ga(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new vr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vi=class i extends Ht{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Bt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new D,p=new fe,f=new D,_=new D,v=new D,g=0,d=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:g=e[m+1].x-e[m].x,d=e[m+1].y-e[m].y,f.x=d*1,f.y=-g,f.z=d*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[m+1].x-e[m].x,d=e[m+1].y-e[m].y,f.x=d*1,f.y=-g,f.z=d*0,_.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(_)}for(let m=0;m<=t;m++){let x=n+m*h*s,y=Math.sin(x),R=Math.cos(x);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*y,u.y=e[b].y,u.z=e[b].x*R,a.push(u.x,u.y,u.z),p.x=m/t,p.y=b/(e.length-1),o.push(p.x,p.y);let w=l[3*b+0]*y,C=l[3*b+1],M=l[3*b+0]*R;c.push(w,C,M)}}for(let m=0;m<t;m++)for(let x=0;x<e.length-1;x++){let y=x+m*e.length,R=y,b=y+e.length,w=y+e.length+1,C=y+1;r.push(R,b,C),r.push(w,C,b)}this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("uv",new lt(o,2)),this.setAttribute("normal",new lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},vi=class i extends Vi{constructor(e=1,t=1,n=4,s=8){let r=new Gi;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},Hs=class i extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new D,h=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=t;u++,p+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},rt=class i extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],p=[],f=[],_=0,v=[],g=n/2,d=0;m(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(f,2));function m(){let y=new D,R=new D,b=0,w=(t-e)/n;for(let C=0;C<=r;C++){let M=[],S=C/r,N=S*(t-e)+e;for(let H=0;H<=s;H++){let ee=H/s,P=ee*l+o,O=Math.sin(P),z=Math.cos(P);R.x=N*O,R.y=-S*n+g,R.z=N*z,u.push(R.x,R.y,R.z),y.set(O,w,z).normalize(),p.push(y.x,y.y,y.z),f.push(ee,1-S),M.push(_++)}v.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){let S=v[M][C],N=v[M+1][C],H=v[M+1][C+1],ee=v[M][C+1];h.push(S,N,ee),h.push(N,H,ee),b+=6}c.addGroup(d,b,0),d+=b}function x(y){let R=_,b=new fe,w=new D,C=0,M=y===!0?e:t,S=y===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,g*S,0),p.push(0,S,0),f.push(.5,.5),_++;let N=_;for(let H=0;H<=s;H++){let P=H/s*l+o,O=Math.cos(P),z=Math.sin(P);w.x=M*z,w.y=g*S,w.z=M*O,u.push(w.x,w.y,w.z),p.push(0,S,0),b.x=O*.5+.5,b.y=z*.5*S+.5,f.push(b.x,b.y),_++}for(let H=0;H<s;H++){let ee=R+H,P=N+H;y===!0?h.push(P,P+1,ee):h.push(P+1,P,ee),C+=3}c.addGroup(d,C,y===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Dl=class i extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let x=new D,y=new D,R=new D;for(let b=0;b<t.length;b+=3)f(t[b+0],x),f(t[b+1],y),f(t[b+2],R),l(x,y,R,m)}function l(m,x,y,R){let b=R+1,w=[];for(let C=0;C<=b;C++){w[C]=[];let M=m.clone().lerp(y,C/b),S=x.clone().lerp(y,C/b),N=b-C;for(let H=0;H<=N;H++)H===0&&C===b?w[C][H]=M:w[C][H]=M.clone().lerp(S,H/N)}for(let C=0;C<b;C++)for(let M=0;M<2*(b-C)-1;M++){let S=Math.floor(M/2);M%2===0?(p(w[C][S+1]),p(w[C+1][S]),p(w[C][S])):(p(w[C][S+1]),p(w[C+1][S+1]),p(w[C+1][S]))}}function c(m){let x=new D;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(m),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){let m=new D;for(let x=0;x<r.length;x+=3){m.x=r[x+0],m.y=r[x+1],m.z=r[x+2];let y=g(m)/2/Math.PI+.5,R=d(m)/Math.PI+.5;a.push(y,1-R)}_(),u()}function u(){for(let m=0;m<a.length;m+=6){let x=a[m+0],y=a[m+2],R=a[m+4],b=Math.max(x,y,R),w=Math.min(x,y,R);b>.9&&w<.1&&(x<.2&&(a[m+0]+=1),y<.2&&(a[m+2]+=1),R<.2&&(a[m+4]+=1))}}function p(m){r.push(m.x,m.y,m.z)}function f(m,x){let y=m*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){let m=new D,x=new D,y=new D,R=new D,b=new fe,w=new fe,C=new fe;for(let M=0,S=0;M<r.length;M+=9,S+=6){m.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),b.set(a[S+0],a[S+1]),w.set(a[S+2],a[S+3]),C.set(a[S+4],a[S+5]),R.copy(m).add(x).add(y).divideScalar(3);let N=g(R);v(b,S+0,m,N),v(w,S+2,x,N),v(C,S+4,y,N)}}function v(m,x,y,R){R<0&&m.x===1&&(a[x]=m.x-1),y.x===0&&y.z===0&&(a[x]=R/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function d(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Wi=class extends Gi{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Gi().fromJSON(s))}return this}},p_={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Fu(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,p,f;if(n&&(r=v_(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let _=t;_<s;_+=t)u=i[_],p=i[_+1],u<o&&(o=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return yr(r,a,t,o,l,f,0),a}};function Fu(i,e,t,n,s){let r,a;if(s===P_(i,e,t,n)>0)for(r=e;r<t;r+=n)a=lu(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=lu(r,i[r],i[r+1],a);return a&&no(a,a.next)&&(Er(a),a=a.next),a}function Xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(no(t,t.next)||St(t.prev,t,t.next)===0)){if(Er(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function yr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&S_(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?g_(i,n,s,r):m_(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Er(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=x_(Xi(i),e,t),yr(i,e,t,n,s,r,2)):a===2&&__(i,e,t,n,s,r):yr(Xi(i),e,t,n,s,r,1);break}}}function m_(i){let e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,_=n.next;for(;_!==e;){if(_.x>=h&&_.x<=p&&_.y>=u&&_.y<=f&&Ps(s,o,r,l,a,c,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function g_(i,e,t,n){let s=i.prev,r=i,a=i.next;if(St(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,p=a.y,f=o<l?o<c?o:c:l<c?l:c,_=h<u?h<p?h:p:u<p?u:p,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>p?h:p:u>p?u:p,d=Nl(f,_,e,t,n),m=Nl(v,g,e,t,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=d&&y&&y.z<=m;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=g&&x!==s&&x!==a&&Ps(o,h,l,u,c,p,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=v&&y.y>=_&&y.y<=g&&y!==s&&y!==a&&Ps(o,h,l,u,c,p,y.x,y.y)&&St(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=d;){if(x.x>=f&&x.x<=v&&x.y>=_&&x.y<=g&&x!==s&&x!==a&&Ps(o,h,l,u,c,p,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=m;){if(y.x>=f&&y.x<=v&&y.y>=_&&y.y<=g&&y!==s&&y!==a&&Ps(o,h,l,u,c,p,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function x_(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!no(s,r)&&Bu(s,n,n.next,r)&&Mr(s,r)&&Mr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Er(n),Er(n.next),n=i=r),n=n.next}while(n!==i);return Xi(n)}function __(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&A_(a,o)){let l=zu(a,o);a=Xi(a,a.next),l=Xi(l,l.next),yr(a,e,t,n,s,r,0),yr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function v_(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Fu(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(w_(c));for(s.sort(y_),r=0;r<s.length;r++)t=M_(s[r],t);return t}function y_(i,e){return i.x-e.x}function M_(i,e){let t=E_(i,e);if(!t)return e;let n=zu(t,i);return Xi(n,n.next),Xi(t,t.next)}function E_(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ps(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Mr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&b_(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function b_(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function S_(i,e,t,n){let s=i;do s.z===0&&(s.z=Nl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,T_(s)}function T_(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function Nl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function w_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ps(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function A_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!R_(i,e)&&(Mr(i,e)&&Mr(e,i)&&C_(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||no(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function no(i,e){return i.x===e.x&&i.y===e.y}function Bu(i,e,t,n){let s=ga(St(i,e,t)),r=ga(St(i,e,n)),a=ga(St(t,n,i)),o=ga(St(t,n,e));return!!(s!==r&&a!==o||s===0&&ma(i,t,e)||r===0&&ma(i,n,e)||a===0&&ma(t,i,n)||o===0&&ma(t,e,n))}function ma(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ga(i){return i>0?1:i<0?-1:0}function R_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Mr(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function C_(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function zu(i,e){let t=new Ol(i.i,i.x,i.y),n=new Ol(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function lu(i,e,t,n){let s=new Ol(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Er(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ol(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ur=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];cu(e),hu(n,e);let a=e.length;t.forEach(cu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,hu(n,t[l]);let o=p_.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function cu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function hu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var qi=class i extends Ht{constructor(e=new Wi([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:L_,x,y=!1,R,b,w,C;d&&(x=d.getSpacedPoints(h),y=!0,p=!1,R=d.computeFrenetFrames(h,!1),b=new D,w=new D,C=new D),p||(g=0,f=0,_=0,v=0);let M=o.extractPoints(c),S=M.shape,N=M.holes;if(!ur.isClockWise(S)){S=S.reverse();for(let U=0,ge=N.length;U<ge;U++){let Y=N[U];ur.isClockWise(Y)&&(N[U]=Y.reverse())}}let ee=ur.triangulateShape(S,N),P=S;for(let U=0,ge=N.length;U<ge;U++){let Y=N[U];S=S.concat(Y)}function O(U,ge,Y){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ge,Y)}let z=S.length,q=ee.length;function Z(U,ge,Y){let xe,J,Le,be=U.x-ge.x,T=U.y-ge.y,E=Y.x-U.x,B=Y.y-U.y,ue=be*be+T*T,ce=be*B-T*E;if(Math.abs(ce)>Number.EPSILON){let oe=Math.sqrt(ue),Re=Math.sqrt(E*E+B*B),Me=ge.x-T/oe,Se=ge.y+be/oe,Ne=Y.x-B/Re,ke=Y.y+E/Re,he=((Ne-Me)*B-(ke-Se)*E)/(be*B-T*E);xe=Me+be*he-U.x,J=Se+T*he-U.y;let st=xe*xe+J*J;if(st<=2)return new fe(xe,J);Le=Math.sqrt(st/2)}else{let oe=!1;be>Number.EPSILON?E>Number.EPSILON&&(oe=!0):be<-Number.EPSILON?E<-Number.EPSILON&&(oe=!0):Math.sign(T)===Math.sign(B)&&(oe=!0),oe?(xe=-T,J=be,Le=Math.sqrt(ue)):(xe=be,J=T,Le=Math.sqrt(ue/2))}return new fe(xe/Le,J/Le)}let $=[];for(let U=0,ge=P.length,Y=ge-1,xe=U+1;U<ge;U++,Y++,xe++)Y===ge&&(Y=0),xe===ge&&(xe=0),$[U]=Z(P[U],P[Y],P[xe]);let ie=[],Q,de=$.concat();for(let U=0,ge=N.length;U<ge;U++){let Y=N[U];Q=[];for(let xe=0,J=Y.length,Le=J-1,be=xe+1;xe<J;xe++,Le++,be++)Le===J&&(Le=0),be===J&&(be=0),Q[xe]=Z(Y[xe],Y[Le],Y[be]);ie.push(Q),de=de.concat(Q)}for(let U=0;U<g;U++){let ge=U/g,Y=f*Math.cos(ge*Math.PI/2),xe=_*Math.sin(ge*Math.PI/2)+v;for(let J=0,Le=P.length;J<Le;J++){let be=O(P[J],$[J],xe);me(be.x,be.y,-Y)}for(let J=0,Le=N.length;J<Le;J++){let be=N[J];Q=ie[J];for(let T=0,E=be.length;T<E;T++){let B=O(be[T],Q[T],xe);me(B.x,B.y,-Y)}}}let W=_+v;for(let U=0;U<z;U++){let ge=p?O(S[U],de[U],W):S[U];y?(w.copy(R.normals[0]).multiplyScalar(ge.x),b.copy(R.binormals[0]).multiplyScalar(ge.y),C.copy(x[0]).add(w).add(b),me(C.x,C.y,C.z)):me(ge.x,ge.y,0)}for(let U=1;U<=h;U++)for(let ge=0;ge<z;ge++){let Y=p?O(S[ge],de[ge],W):S[ge];y?(w.copy(R.normals[U]).multiplyScalar(Y.x),b.copy(R.binormals[U]).multiplyScalar(Y.y),C.copy(x[U]).add(w).add(b),me(C.x,C.y,C.z)):me(Y.x,Y.y,u/h*U)}for(let U=g-1;U>=0;U--){let ge=U/g,Y=f*Math.cos(ge*Math.PI/2),xe=_*Math.sin(ge*Math.PI/2)+v;for(let J=0,Le=P.length;J<Le;J++){let be=O(P[J],$[J],xe);me(be.x,be.y,u+Y)}for(let J=0,Le=N.length;J<Le;J++){let be=N[J];Q=ie[J];for(let T=0,E=be.length;T<E;T++){let B=O(be[T],Q[T],xe);y?me(B.x,B.y+x[h-1].y,x[h-1].x+Y):me(B.x,B.y,u+Y)}}}k(),K();function k(){let U=s.length/3;if(p){let ge=0,Y=z*ge;for(let xe=0;xe<q;xe++){let J=ee[xe];Ce(J[2]+Y,J[1]+Y,J[0]+Y)}ge=h+g*2,Y=z*ge;for(let xe=0;xe<q;xe++){let J=ee[xe];Ce(J[0]+Y,J[1]+Y,J[2]+Y)}}else{for(let ge=0;ge<q;ge++){let Y=ee[ge];Ce(Y[2],Y[1],Y[0])}for(let ge=0;ge<q;ge++){let Y=ee[ge];Ce(Y[0]+z*h,Y[1]+z*h,Y[2]+z*h)}}n.addGroup(U,s.length/3-U,0)}function K(){let U=s.length/3,ge=0;j(P,ge),ge+=P.length;for(let Y=0,xe=N.length;Y<xe;Y++){let J=N[Y];j(J,ge),ge+=J.length}n.addGroup(U,s.length/3-U,1)}function j(U,ge){let Y=U.length;for(;--Y>=0;){let xe=Y,J=Y-1;J<0&&(J=U.length-1);for(let Le=0,be=h+g*2;Le<be;Le++){let T=z*Le,E=z*(Le+1),B=ge+xe+T,ue=ge+J+T,ce=ge+J+E,oe=ge+xe+E;Ae(B,ue,ce,oe)}}}function me(U,ge,Y){l.push(U),l.push(ge),l.push(Y)}function Ce(U,ge,Y){_e(U),_e(ge),_e(Y);let xe=s.length/3,J=m.generateTopUV(n,s,xe-3,xe-2,xe-1);Fe(J[0]),Fe(J[1]),Fe(J[2])}function Ae(U,ge,Y,xe){_e(U),_e(ge),_e(xe),_e(ge),_e(Y),_e(xe);let J=s.length/3,Le=m.generateSideWallUV(n,s,J-6,J-3,J-2,J-1);Fe(Le[0]),Fe(Le[1]),Fe(Le[3]),Fe(Le[1]),Fe(Le[2]),Fe(Le[3])}function _e(U){s.push(l[U*3+0]),s.push(l[U*3+1]),s.push(l[U*3+2])}function Fe(U){r.push(U.x),r.push(U.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return I_(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Il[s.type]().fromJSON(s)),new i(n,e.options)}},L_={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new fe(r,a),new fe(o,l),new fe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],p=e[s*3],f=e[s*3+1],_=e[s*3+2],v=e[r*3],g=e[r*3+1],d=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-u),new fe(p,1-_),new fe(v,1-d)]:[new fe(o,1-l),new fe(h,1-u),new fe(f,1-_),new fe(g,1-d)]}};function I_(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qa=class i extends Dl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var sn=class i extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,p=new D,f=[],_=[],v=[],g=[];for(let d=0;d<=n;d++){let m=[],x=d/n,y=0;d===0&&a===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let b=R/t;u.x=-e*Math.cos(s+b*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+b*r)*Math.sin(a+x*o),_.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),g.push(b+y,1-x),m.push(c++)}h.push(m)}for(let d=0;d<n;d++)for(let m=0;m<t;m++){let x=h[d][m+1],y=h[d][m],R=h[d+1][m],b=h[d+1][m+1];(d!==0||a>0)&&f.push(x,y,b),(d!==n-1||l<Math.PI)&&f.push(y,R,b)}this.setIndex(f),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $i=class i extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,u=new D,p=new D;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){let v=_/s*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){let v=(s+1)*f+_-1,g=(s+1)*(f-1)+_-1,d=(s+1)*(f-1)+_,m=(s+1)*f+_;a.push(v,g,m),a.push(g,d,m)}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ee=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function xa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function U_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ph,endingEnd:ph}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mh:r=e,o=2*t-n;break;case gh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mh:a=e,l=2*n-t;break;case gh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),v=_*_,g=v*_,d=-p*g+2*p*v-p*_,m=(1+p)*g+(-1.5-2*p)*v+(-.5+p)*_+1,x=(-1-f)*g+(1.5+f)*v+.5*_,y=f*g-f*v;for(let R=0;R!==o;++R)r[R]=d*a[h+R]+m*a[c+R]+x*a[l+R]+y*a[u+R];return r}},Bl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*u+a[l+p]*h;return r}},zl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xa(t,this.TimeBufferType),this.values=xa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:xa(e.times,Array),values:xa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case Co:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return Co}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&U_(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Co,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,p=u-n,f=u+n;for(let _=0;_!==n;++_){let v=t[u+_];if(v!==t[p+_]||v!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,p=a*n;for(let f=0;f!==n;++f)t[p+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ma;var Yi=class extends In{};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ya;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends In{};kl.prototype.ValueTypeName="color";var Hl=class extends In{};Hl.prototype.ValueTypeName="number";var Gl=class extends Gs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Bn.slerpFlat(r,0,a,c-o,a,c,l);return r}},br=class extends In{InterpolantFactoryMethodLinear(e){return new Gl(this.times,this.values,this.getValueSize(),e)}};br.prototype.ValueTypeName="quaternion";br.prototype.DefaultInterpolation=Ma;br.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends In{};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ya;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vl=class extends In{};Vl.prototype.ValueTypeName="vector";var Wl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},D_=new Wl,Xl=class{constructor(e){this.manager=e!==void 0?e:D_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends Zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},$a=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},nl=new vt,uu=new D,du=new D,ql=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var $l=class extends ql{constructor(){super(new Fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ya=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Za=class extends Sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ja=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=fu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function fu(){return(typeof performance>"u"?Date:performance).now()}var ic="\\[\\]\\.:\\/",N_=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",O_="[^"+ic.replace("\\.","")+"]",F_=/((?:WC+[\/:])*)/.source.replace("WC",sc),B_=/(WCOD+)?/.source.replace("WCOD",O_),z_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),k_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),H_=new RegExp("^"+F_+B_+z_+k_+"$"),G_=["material","materials","bones","map"],Yl=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N_,"")}static parseTrackName(e){let t=H_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);G_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Yl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fv=new Float32Array(1);var Ka=class{constructor(e,t,n=0,s=1/0){this.ray=new La(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Zl(e,this,n,t),n.sort(pu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Zl(e[s],this,n,t);return n.sort(pu),n}};function pu(i,e){return i.distance-e.distance}function Zl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Zl(s[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);var Qe={balls:{name:"Tube de balles",short:"Balles",cost:3.2,market:6.9,box:12,shelf:10,level:1,color:"#e8f04a"},water:{name:"Eau min\xE9rale 50 cl",short:"Eau",cost:.35,market:1.5,box:24,shelf:12,level:1,color:"#7cc4f0"},iso:{name:"Boisson isotonique",short:"Isotonique",cost:.9,market:2.8,box:18,shelf:12,level:2,color:"#ff8a3d"},grip:{name:"Surgrip (x3)",short:"Surgrips",cost:2.1,market:6.5,box:20,shelf:12,level:2,color:"#f2f2f2"},racket:{name:"Raquette de tennis",short:"Raquette",cost:48,market:109,box:4,shelf:4,level:3,color:"#2f6fe0"},padelballs:{name:"Balles de padel",short:"Balles padel",cost:3.4,market:7.5,box:12,shelf:10,level:3,color:"#c8f04a"},padelracket:{name:"Raquette de padel",short:"Pala padel",cost:42,market:95,box:4,shelf:4,level:5,color:"#111111"},cap:{name:"Casquette du club",short:"Casquette",cost:5.5,market:18,box:10,shelf:8,level:4,color:"#1f8a5b"}},Ki=Object.keys(Qe),rn={clay:{name:"Terre battue",sport:"tennis",wear:.24},hard:{name:"R\xE9sine",sport:"tennis",wear:.12},padel:{name:"Padel",sport:"padel",wear:.1}},Lt=[{id:"T1",label:"Court 1",surface:"clay",price:0,level:1},{id:"T2",label:"Court 2",surface:"hard",price:3200,level:2},{id:"P1",label:"Padel 1",surface:"padel",price:5200,level:3},{id:"T3",label:"Court 3",surface:"clay",price:6500,level:4},{id:"P2",label:"Padel 2",surface:"padel",price:7500,level:5},{id:"T4",label:"Court 4",surface:"hard",price:9e3,level:6},{id:"P3",label:"Padel 3",surface:"padel",price:10500,level:7}],Tr=450,ku=2,ji={lockers:{name:"Vestiaires r\xE9nov\xE9s",desc:"+40 licenci\xE9s possibles et clients plus satisfaits",price:3500,level:3},bar:{name:"Coin buvette",desc:"Les joueurs ach\xE8tent plus souvent une boisson",price:2500,level:2},lights:{name:"\xC9clairage des courts",desc:"Le club reste ouvert jusqu'\xE0 23 h",price:6e3,level:4}},Hn={reception:{name:"H\xF4te d'accueil",desc:"Encaisse les clients quand tu n'es pas au comptoir",salary:95,level:3},keeper:{name:"Agent d'entretien",desc:"Brosse les terrains us\xE9s",salary:80,level:4}},Qi={tennis:{name:"Location court de tennis (1 h)",market:16},padel:{name:"Location terrain de padel (1 h)",market:30},licence:{name:"Licence annuelle",market:85}},kn=[0,120,350,750,1350,2200,3300,4800,6600,9e3],Hu=i=>{let e=1;for(;e<kn.length&&i>=kn[e];)e++;return e},rc=8,Gu=21,Vu=23,Wu=2500,Xu=12;var Be={minX:-10,maxX:10,minZ:0,maxZ:14,height:4.2},wr=2.4,Mt={minX:-8.5,maxX:-3,minZ:6.6,maxZ:7.4,top:1.02},$u={x:-5.6,z:5.8},Ar=[0,1,2,3,4,5].map(i=>({x:-5.6,z:8.3+i*.95})),ac={x:-7.75,z:6.95},so={x:-6.55,z:6.95},oc={x:-3.55,z:7.05},Rr={x:-4.7,z:7},lc={x:2.2,z:14},yi={x:0,z:30},ro={x:0,z:15.4},Cr={x:0,z:12.6},Pr={x:0,z:1.3},Lr={x:0,z:-1.8},cc=[{x:1.4,z:11.6},{x:2.4,z:11.6},{x:3.4,z:11.6},{x:4.4,z:11.6},{x:1.4,z:12.7},{x:2.4,z:12.7},{x:3.4,z:12.7},{x:4.4,z:12.7},{x:-1.6,z:3.2},{x:-1.6,z:4.2},{x:-1.6,z:5.2},{x:1.6,z:3.2},{x:1.6,z:4.2},{x:1.6,z:5.2}],Ir={x:6.2,z:17.6},hc=[{x:-9.3,z:13.3},{x:9.3,z:13.3},{x:-1.9,z:.6},{x:1.9,z:.6}],uc={x:3.4,z:13.5,w:3.6,d:.42},Mi=[{x:9.45,z:3.1,facing:-Math.PI/2},{x:9.45,z:5.6,facing:-Math.PI/2},{x:9.45,z:8.1,facing:-Math.PI/2},{x:9.45,z:10.6,facing:-Math.PI/2},{x:4.3,z:.45,facing:0},{x:6.9,z:.45,facing:0}].map((i,e)=>({...i,id:e,w:2.1,d:.6,browse:{x:i.x+Math.sin(i.facing)*1.25,z:i.z+Math.cos(i.facing)*1.25}})),Un={w:18.3,l:36.6},es={w:12,l:22},io=-4,En={T1:{cx:-11,cz:io-Un.l/2,route:[{x:0,z:-2},{x:-11,z:-2},{x:-11,z:-5.2}]},T2:{cx:11,cz:io-Un.l/2,route:[{x:0,z:-2},{x:11,z:-2},{x:11,z:-5.2}]},P1:{cx:-31,cz:io-es.l/2,door:1,route:[{x:0,z:-2},{x:-24.6,z:-2},{x:-24.6,z:-15}]},P2:{cx:31,cz:io-es.l/2,door:-1,route:[{x:0,z:-2},{x:24.6,z:-2},{x:24.6,z:-15}]},T3:{cx:-11,cz:-44-Un.l/2,route:[{x:0,z:-2},{x:0,z:-42.3},{x:-11,z:-42.3},{x:-11,z:-45.2}]},T4:{cx:11,cz:-44-Un.l/2,route:[{x:0,z:-2},{x:0,z:-42.3},{x:11,z:-42.3},{x:11,z:-45.2}]},P3:{cx:-31,cz:-30-es.l/2,door:1,route:[{x:0,z:-2},{x:-22.5,z:-2},{x:-22.5,z:-41},{x:-24.6,z:-41}]}};function ao(i,e){let t=En[i],n=t.door;return[{x:t.cx+5.7*n,z:t.cz+.3*e},{x:t.cx+4.4*n,z:t.cz+.3*e},{x:t.cx+4.2*n,z:t.cz+1.2*e}]}var oo=-2.2,Yu={x:-1.8,z:8.6};function dc(i,e){let t=En[i];return e==="tennis"?[{x:t.cx,z:t.cz+13.2,side:1},{x:t.cx,z:t.cz-13.2,side:-1}]:[{x:t.cx-2.4,z:t.cz+7.2,side:1},{x:t.cx+2.4,z:t.cz+7.2,side:1},{x:t.cx-2.4,z:t.cz-7.2,side:-1},{x:t.cx+2.4,z:t.cz-7.2,side:-1}]}var Zu={minX:-44,maxX:44,minZ:-86,maxZ:34};function fc(){let e=[],t=(r,a,o,l)=>e.push({minX:r,maxX:a,minZ:o,maxZ:l}),n=wr/2;t(Be.minX,-n,Be.maxZ-.25/2,Be.maxZ+.25/2),t(n,Be.maxX,Be.maxZ-.25/2,Be.maxZ+.25/2),t(Be.minX,-n,Be.minZ-.25/2,Be.minZ+.25/2),t(n,Be.maxX,Be.minZ-.25/2,Be.minZ+.25/2),t(Be.minX-.25/2,Be.minX+.25/2,Be.minZ,Be.maxZ),t(Be.maxX-.25/2,Be.maxX+.25/2,Be.minZ,Be.maxZ),e.push({...Mt});for(let r of hc)e.push({minX:r.x-.3,maxX:r.x+.3,minZ:r.z-.3,maxZ:r.z+.3});let s=uc;return e.push({minX:s.x-s.w/2,maxX:s.x+s.w/2,minZ:s.z-s.d/2,maxZ:s.z+s.d/2}),e}function Ju(i){let e=Math.abs(Math.sin(i.facing))<.5,t=(e?i.w:i.d)/2,n=(e?i.d:i.w)/2;return{minX:i.x-t,maxX:i.x+t,minZ:i.z-n,maxZ:i.z+n}}function Ku(i,e){let t=En[i],n=.15;if(e==="tennis"){let c=Un,h=.9,u=t.cx-c.w/2,p=t.cx+c.w/2,f=t.cz+c.l/2,_=t.cz-c.l/2;return[{minX:u,maxX:t.cx-h,minZ:f-n,maxZ:f+n},{minX:t.cx+h,maxX:p,minZ:f-n,maxZ:f+n},{minX:u,maxX:p,minZ:_-n,maxZ:_+n},{minX:u-n,maxX:u+n,minZ:_,maxZ:f},{minX:p-n,maxX:p+n,minZ:_,maxZ:f},{minX:t.cx-6.4,maxX:t.cx+6.4,minZ:t.cz-.06,maxZ:t.cz+.06},{minX:t.cx-7.8,maxX:t.cx-7,minZ:t.cz-.4,maxZ:t.cz+.4},...[-2.2,2.2].map(v=>({minX:t.cx-8.15,maxX:t.cx-7.65,minZ:t.cz+v-.8,maxZ:t.cz+v+.8})),...qu(t,c.w/2+.6,9)]}let s=t.cx-5,r=t.cx+5,a=t.cz-10,o=t.cz+10,l=.75;return[{minX:s,maxX:r,minZ:o-n,maxZ:o+n},{minX:s,maxX:r,minZ:a-n,maxZ:a+n},{minX:s-n,maxX:s+n,minZ:t.cz+l,maxZ:o},{minX:s-n,maxX:s+n,minZ:a,maxZ:t.cz-l},{minX:r-n,maxX:r+n,minZ:t.cz+l,maxZ:o},{minX:r-n,maxX:r+n,minZ:a,maxZ:t.cz-l},{minX:t.cx-4.6,maxX:t.cx+4.6,minZ:t.cz-.05,maxZ:t.cz+.05},...qu(t,5.8,6)]}function qu(i,e,t){let n=[];for(let s of[-1,1])for(let r of[-1,1]){let a=i.cx+s*e,o=i.cz+r*t;n.push({minX:a-.15,maxX:a+.15,minZ:o-.15,maxZ:o+.15})}return n}var at=(i,e,t)=>Math.max(e,Math.min(t,i)),Ur=(i,e,t)=>i+(e-i)*t,Dt=(i,e,t,n)=>Ur(i,e,1-Math.exp(-t*n));function ju(i,e,t,n){let s=(e-i)%(Math.PI*2);return s>Math.PI&&(s-=Math.PI*2),s<-Math.PI&&(s+=Math.PI*2),i+s*(1-Math.exp(-t*n))}var xt=(i=0,e=1)=>i+Math.random()*(e-i),Qu=(i,e)=>Math.floor(xt(i,e+1)),ed=i=>i[Math.floor(Math.random()*i.length)],Ei=i=>Math.round(i*10)/10,Ve=i=>`${i.toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})} \u20AC`,ts=i=>`${Math.round(i).toLocaleString("fr-FR")} \u20AC`,td=i=>{let e=Math.floor(i/60)%24,t=Math.floor(i%60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`},nd=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);var id=2,V_=1.45,W_=75,X_=50,q_=16,$_=3,Y_=18;function pc(){let i={};for(let e of Ki)i[e]=Ei(Qe[e].market);for(let e of Object.keys(Qi))i[e]=Qi[e].market;return{version:1,money:Wu,day:1,minute:rc*60,open:!1,dayStarted:!1,xp:0,level:1,licences:Xu,satisfaction:.62,prices:i,courts:Object.fromEntries(Lt.map((e,t)=>[e.id,{built:t===0,wear:0}])),shelves:Mi.map((e,t)=>({built:t<ku,levels:Array.from({length:$_},()=>({product:null,qty:0}))})),boxes:[],orders:[],staff:{reception:!1,keeper:!1},upgrades:{lockers:!1,bar:!1,lights:!1},stats:sd(),nextId:1,objectives:[]}}function sd(){return{courts:0,shop:0,licenceFees:0,orders:0,build:0,salaries:0,upkeep:0,customers:0,happy:0,angry:0,newLicences:0,sessions:0}}var lo=class i{constructor(e,t={}){this.s=e,this.h=new Proxy(t,{get:(n,s)=>n[s]??(()=>{})}),this.persons=[],this.customers=[],this.queue=[],this.court={};for(let n of Lt)this.court[n.id]={reservedBy:null,playing:!1,cleaning:!1};this.counter={cust:null,items:[],phase:"idle",total:0,method:null,given:0,autoT:0},this.staff={reception:null,keeper:null},this.lobbyUsed=new Set,this.dayOver=!1,this.orderTimer=0}id(){return this.s.nextId++}get closeMinute(){return(this.s.upgrades.lights?Vu:Gu)*60}get capacity(){let e=25;for(let t of Lt)this.s.courts[t.id].built&&(e+=rn[t.surface].sport==="padel"?30:25);return this.s.upgrades.lockers&&(e+=40),e}unlocked(e){return this.s.level>=e}earn(e,t){this.s.money+=e,this.s.stats[t]+=e}spend(e,t){return this.s.money<e-1e-6?!1:(this.s.money-=e,this.s.stats[t]+=e,!0)}addXp(e){this.s.xp+=e;let t=Hu(this.s.xp);t>this.s.level&&(this.s.level=t,this.h.levelUp(t,this.unlocksAt(t)))}unlocksAt(e){let t=[];for(let n of Ki)Qe[n].level===e&&t.push(Qe[n].name);for(let n of Lt)n.level===e&&n.price&&t.push(`${n.label} (${rn[n.surface].name})`);for(let n of Object.keys(Hn))Hn[n].level===e&&t.push(Hn[n].name);for(let n of Object.keys(ji))ji[n].level===e&&t.push(ji[n].name);return t}xpProgress(){let e=this.s.level,t=kn[e-1],n=kn[e]??kn[kn.length-1]*2;return at((this.s.xp-t)/(n-t),0,1)}spawnPerson(e,t=yi){let n={id:this.id(),role:e,x:t.x+xt(-1.5,1.5),z:t.z+xt(-.5,.5),rot:Math.PI,speed:V_*xt(.88,1.12),path:[],action:"idle",look:null,seed:Math.random(),holdsRacket:!1};return this.persons.push(n),this.h.spawnPerson(n),n}despawnPerson(e){let t=this.persons.indexOf(e);t>=0&&this.persons.splice(t,1),e.lobby!=null&&this.lobbyUsed.delete(e.lobby),this.h.despawnPerson(e)}goTo(e,t){e.path=t.map(n=>({x:n.x,z:n.z}))}arrived(e){return e.path.length===0}movePerson(e,t){if(!e.path.length){e.action==="walk"&&(e.action="idle");return}let n=e.path[0],s=n.x-e.x,r=n.z-e.z,a=Math.hypot(s,r),o=e.speed*t;a<=o||a<.02?(e.x=n.x,e.z=n.z,e.path.shift()):(e.x+=s/a*o,e.z+=r/a*o),a>.01&&(e.rot=Math.atan2(s,r)),e.action="walk"}takeLobby(e){for(let t=0;t<cc.length;t++)if(!this.lobbyUsed.has(t))return this.lobbyUsed.add(t),e.lobby=t,cc[t];return e.lobby=null,{x:xt(-1,4),z:xt(10.5,12.8)}}freeLobby(e){e.lobby!=null&&(this.lobbyUsed.delete(e.lobby),e.lobby=null)}pathOut(e){let t=[];return e.z<0&&t.push(Lr,Pr),t.push({x:xt(-.4,.4),z:Cr.z},ro,{x:yi.x+xt(-2,2),z:yi.z}),t}spawnCustomer(e){let t={id:this.id(),kind:e,persons:[],state:"arrive",timer:0,wants:[],basket:[],court:null,sport:null,mood:1,queueT:0,waitT:0},n=1;if(e==="book"){let s=this.builtSports();t.sport=s.includes("padel")&&(s.length===1||Math.random()<.45)?"padel":"tennis",n=t.sport==="padel"?4:2;let r=this.s.upgrades.bar?.65:.3;Math.random()<r&&t.wants.push(ed(this.unlockedProducts(["water","iso"]))),Math.random()<.18&&t.wants.push(t.sport==="padel"?"padelballs":"balls")}else if(e==="shop"){let s=Math.random()<.6?1:Qu(2,3),r=this.unlockedProducts(Ki);for(let a=0;a<s;a++)t.wants.push(this.weightedProduct(r))}t.wants=t.wants.filter(s=>s&&this.unlocked(Qe[s].level)),t.wants=[...new Set(t.wants)];for(let s=0;s<n;s++){let r=this.spawnPerson(s===0?"leader":"partner",{x:yi.x+s*.7,z:yi.z+s*.5});r.cust=t,r.holdsRacket=e==="book",this.goTo(r,[ro,{x:Cr.x+xt(-.6,.6),z:Cr.z+xt(-.3,.3)}]),t.persons.push(r)}return t.leader=t.persons[0],this.customers.push(t),this.s.stats.customers++,t}builtSports(){let e=new Set;for(let t of Lt)this.s.courts[t.id].built&&e.add(rn[t.surface].sport);return[...e]}unlockedProducts(e){return e.filter(t=>this.unlocked(Qe[t].level))}weightedProduct(e){let t={balls:5,water:4,iso:3,grip:3,racket:1,padelballs:3,padelracket:1,cap:1.5};this.builtSports().includes("padel")||(t.padelballs=.3,t.padelracket=.2);let n=e.reduce((r,a)=>r+(t[a]??1),0),s=Math.random()*n;for(let r of e)if(s-=t[r]??1,s<=0)return r;return e[0]}say(e,t,n="bad"){this.h.bubble(e,t,n)}upset(e,t,n){e.mood=at(e.mood-t,0,1),n&&this.say(e.leader,n)}updateCustomer(e,t){let n=e.leader;switch(e.state){case"arrive":if(!this.arrived(n))break;for(let s of e.persons)s!==n&&this.goTo(s,[this.takeLobby(s)]);e.wants.length?this.nextWant(e):e.kind==="book"?this.findCourt(e):this.joinQueue(e);break;case"toShelf":this.arrived(n)&&(e.state="browse",e.timer=xt(1.2,2.2),n.action="browse",n.look=e.shelfLook);break;case"browse":e.timer-=t,e.timer<=0&&(n.look=null,this.takeFromShelf(e));break;case"waitCourt":e.waitT+=t,e.timer-=t,e.timer<=0&&(e.timer=1,this.reserveCourt(e)?this.joinQueue(e):(e.waitT>X_||!this.s.open)&&(this.upset(e,.45,"Aucun terrain libre\u2026"),this.leave(e)));break;case"queue":{e.queueT+=t,this.queue.indexOf(e)===0&&this.arrived(n)&&!this.counter.cust?this.beginCheckout(e):e.queueT>W_*(.8+this.s.satisfaction*.5)&&(this.upset(e,.55,"Trop d'attente !"),this.leaveQueue(e),this.leave(e));break}case"counter":e.queueT+=t,this.counter.idleT>45&&(this.upset(e,.5,"Il n'y a personne \xE0 l'accueil ?"),this.cancelCheckout(),this.leave(e));break;case"toCourt":e.persons.every(s=>this.arrived(s))&&this.startSession(e);break;case"playing":e.timer-=t,e.timer<=0&&this.endSession(e);break;case"leave":e.persons.every(s=>this.arrived(s))&&this.removeCustomer(e);break}}nextWant(e){let t=e.leader;for(;e.wants.length;){let n=e.wants.shift(),s=this.findShelfWith(n,t);if(!s){this.upset(e,.15,`Plus de ${Qe[n].short.toLowerCase()} !`);continue}e.want=n,e.shelf=s.index;let r=Mi[s.index];this.goTo(t,[{x:r.browse.x+xt(-.5,.5),z:r.browse.z+xt(-.15,.15)}]),e.shelfLook={x:r.x,z:r.z},e.state="toShelf";return}this.afterShopping(e)}findShelfWith(e,t){let n=null;return this.s.shelves.forEach((s,r)=>{if(s.built&&s.levels.some(a=>a.product===e&&a.qty>0)){let a=nd(t,Mi[r].browse);(!n||a<n.d)&&(n={index:r,d:a})}}),n}takeFromShelf(e){let t=this.s.shelves[e.shelf],n=t.levels.findIndex(a=>a.product===e.want&&a.qty>0),s=Qe[e.want],r=this.s.prices[e.want];if(n<0)this.upset(e,.15,`Plus de ${s.short.toLowerCase()} !`);else if(r>s.market*1.35||r>s.market*1.15&&Math.random()<(r/s.market-1.15)*4)this.upset(e,.12,"Trop cher !");else{let a=t.levels[n],o=Math.min(a.qty,s.cost>20||Math.random()<.7?1:2);a.qty-=o;for(let l=0;l<o;l++)e.basket.push({kind:"product",product:e.want,price:r,label:s.name});this.h.shelfChanged(e.shelf)}this.nextWant(e)}afterShopping(e){if(e.kind==="book")return this.findCourt(e);if(!e.basket.length)return this.leave(e);this.joinQueue(e)}freeCourt(e){for(let t of Lt){let n=this.s.courts[t.id],s=this.court[t.id];if(!(!n.built||rn[t.surface].sport!==e)&&!(s.reservedBy||s.cleaning||n.wear>=.9))return t.id}return null}reserveCourt(e){let t=this.freeCourt(e.sport);if(!t)return!1;this.court[t].reservedBy=e.id,e.court=t;let n=this.s.prices[e.sport];return e.basket.push({kind:"booking",court:t,price:n,label:`${Lt.find(s=>s.id===t).label} \xB7 1 h`}),this.h.courtChanged(t),!0}findCourt(e){if(this.reserveCourt(e))return this.joinQueue(e);e.state="waitCourt",e.timer=1,e.waitT=0,this.goTo(e.leader,[this.takeLobby(e.leader)]),Math.random()<.6&&this.say(e.leader,"On attend qu'un terrain se lib\xE8re","info")}releaseCourt(e){e.court&&this.court[e.court].reservedBy===e.id&&(this.court[e.court].reservedBy=null,this.court[e.court].playing=!1,this.h.courtChanged(e.court))}courtPath(e,t,n,s){let r=En[t],a=[];if(e.z>0&&(e.x<oo&&a.push(Yu),a.push({x:xt(-.4,.4),z:Pr.z},Lr)),a.push(...r.route),s==="padel")a.push(...ao(t,n.side));else if(n.side<0){let o=r.cx+(Un.w/2-.8)*(n.x>=r.cx?1:-1);a.push({x:o,z:r.cz+2},{x:o,z:r.cz-2})}return a.push({x:n.x,z:n.z}),a}courtExit(e,t,n){let s=En[t],r=[];if(n==="padel")r.push(...ao(t,e.z>=s.cz?1:-1).reverse());else if(e.z<s.cz-1){let a=s.cx+(Un.w/2-.8)*(e.x>=s.cx?1:-1);r.push({x:a,z:s.cz-2},{x:a,z:s.cz+2})}return r.push(...[...s.route].reverse()),r}startSession(e){e.state="playing",e.timer=xt(32,44);let t=this.s.courts[e.court];this.court[e.court].playing=!0,t.wear>.5&&this.upset(e,.25,t.wear>.75?"Le terrain est dans un \xE9tat\u2026":"Terrain mal entretenu");let n=dc(e.court,e.sport);e.persons.forEach((s,r)=>{s.action="play",s.rot=n[r].side>0?Math.PI:0}),this.s.stats.sessions++,this.h.courtSession(e.court,e.persons,!0,e.sport)}endSession(e){let t=this.s.courts[e.court],n=Lt.find(s=>s.id===e.court).surface;t.wear=at(t.wear+rn[n].wear*xt(.8,1.2),0,1),this.h.courtSession(e.court,e.persons,!1,e.sport);for(let s of e.persons)s.action="idle",this.goTo(s,[...this.courtExit(s,e.court,e.sport),Lr,Pr,{x:xt(-.4,.4),z:Cr.z},ro,{x:yi.x+xt(-2,2),z:yi.z}]);this.releaseCourt(e),e.state="leave"}joinQueue(e){if(this.queue.length>=Ar.length)return this.upset(e,.4,"Il y a trop de monde !"),this.leave(e);this.queue.push(e),e.state="queue",this.freeLobby(e.leader),this.goTo(e.leader,this.queuePath(e.leader,Ar[this.queue.length-1]))}queuePath(e,t){return e.x<oo-.5&&e.z>7.8?[t]:[{x:oo,z:t.z},t]}leaveQueue(e){let t=this.queue.indexOf(e);t<0||(this.queue.splice(t,1),this.queue.forEach((n,s)=>{s>=t&&this.goTo(n.leader,[Ar[s]])}))}beginCheckout(e){e.state="counter",e.leader.rot=Math.PI;let t=this.counter;t.cust=e,t.phase="scan",t.idleT=0,t.autoT=0,e.kind==="licence"&&e.basket.push({kind:"licence",price:this.s.prices.licence,label:"Licence annuelle"}),t.items=e.basket.map((n,s)=>({...n,uid:this.id(),scanned:!1,index:s})),t.total=0,t.method=null,t.given=0,this.h.counterChanged(t)}scan(e){let t=this.counter;if(t.phase!=="scan")return!1;let n=t.items.find(s=>s.uid===e&&!s.scanned);return n?(n.scanned=!0,t.total=Ei(t.total+n.price),t.idleT=0,this.h.sound("beep"),t.items.every(s=>s.scanned)&&this.askPayment(),this.h.counterChanged(t),!0):!1}askPayment(){let e=this.counter;e.phase="pay",e.method=Math.random()<(e.total>40?.7:.5)?"card":"cash",e.method==="cash"&&(e.given=i.cashGiven(e.total))}static cashGiven(e){if(Math.random()<.15)return e;let t=Math.round(e*100),n=[];for(let r of[100,500,1e3,2e3,5e3,1e4]){let a=Math.ceil(t/r)*r;(a>t||r===1e4)&&n.push(a)}let s=n[Math.min(n.length-1,Math.floor(Math.random()*Math.min(3,n.length)))];return Math.max(s,t)/100}payCard(e){let t=this.counter;return t.phase!=="pay"||t.method!=="card"?!1:Math.abs(e-t.total)>.004?(this.h.sound("error"),!1):(this.completeCheckout(t.total,!0),!0)}payCash(e){let t=this.counter;if(t.phase!=="pay"||t.method!=="cash")return null;let n=Math.round((t.given-t.total)*100),s=Math.round(e*100);return s<n&&this.upset(t.cust,.35,"Vous ne m'avez pas rendu assez !"),this.completeCheckout(t.given-e,s===n),s===n?"ok":s<n?"short":"over"}completeCheckout(e,t){let n=this.counter,s=n.cust,r=n.total>0?e/n.total:1,a=t?2:0;for(let o of n.items){let l=o.kind==="booking"?"courts":o.kind==="licence"?"licenceFees":"shop";this.earn(o.price*r,l),a+=o.kind==="booking"?12:o.kind==="licence"?18:2}s.kind==="licence"&&(this.s.licences++,this.s.stats.newLicences++),this.addXp(a),this.h.sound("cash"),s.mood=at(s.mood-at((s.queueT-25)/70,0,.35),0,1),s.mood>.85&&Math.random()<.4&&this.say(s.leader,"Merci, bonne journ\xE9e !","good"),this.queue.shift(),this.queue.forEach((o,l)=>this.goTo(o.leader,[Ar[l]])),n.cust=null,n.items=[],n.phase="idle",n.total=0,n.method=null,n.given=0,this.h.counterChanged(n),s.kind==="book"?this.sendToCourt(s):this.leave(s)}cancelCheckout(){let e=this.counter;if(!e.cust)return;let t=e.cust;this.leaveQueue(t),e.cust=null,e.items=[],e.phase="idle",this.h.counterChanged(e)}sendToCourt(e){e.state="toCourt";let t=dc(e.court,e.sport);e.persons.forEach((n,s)=>{this.freeLobby(n),this.goTo(n,this.courtPath(n,e.court,t[s],e.sport))})}leave(e){this.releaseCourt(e),e.state="leave";for(let t of e.persons)this.freeLobby(t),t.look=null,this.goTo(t,this.pathOut(t))}removeCustomer(e){for(let n of e.persons)this.despawnPerson(n);let t=this.customers.indexOf(e);t>=0&&this.customers.splice(t,1),this.leaveQueue(e),this.releaseCourt(e),this.s.satisfaction=at(this.s.satisfaction*.9+e.mood*.1,0,1),e.mood>=.75?this.s.stats.happy++:e.mood<.5&&this.s.stats.angry++}order(e,t){let n=Qe[e];if(!n||!this.unlocked(n.level)||t<1)return!1;let s=Ei(n.cost*n.box*t);return this.spend(s,"orders")?(this.s.orders.push({product:e,boxes:t,eta:8}),this.h.sound("order"),!0):!1}deliver(e){for(let t=0;t<e.boxes;t++){let n=this.freePalletSlot(),s={id:this.id(),product:e.product,qty:Qe[e.product].box,...n,held:!1};this.s.boxes.push(s),this.h.boxAdded(s)}this.h.notify(`Livraison arriv\xE9e : ${e.boxes} carton${e.boxes>1?"s":""} de ${Qe[e.product].short.toLowerCase()}`,"info")}freePalletSlot(){let e=new Set(this.s.boxes.filter(t=>t.pallet!=null).map(t=>t.pallet));for(let t=0;t<Y_;t++)if(!e.has(t))return{pallet:t,...Z_(t)};return{pallet:null,x:Ir.x+xt(-2.5,2.5),z:Ir.z+xt(1.2,2.5),y:0}}pickBox(e){return e.held?!1:(e.held=!0,e.pallet=null,!0)}dropBox(e,t,n,s=0){e.held=!1,e.x=t,e.z=n,e.y=s,this.h.boxMoved(e)}shelfLevelCap(e){return Qe[e].shelf}placeItem(e,t,n){let s=this.s.shelves[t];if(!s?.built||e.qty<=0)return"none";let r=s.levels[n];return r.product&&r.product!==e.product&&r.qty>0?"other":r.qty>=this.shelfLevelCap(e.product)?"full":(r.product=e.product,r.qty++,e.qty--,this.h.shelfChanged(t),e.qty===0&&this.removeBox(e),"ok")}takeItem(e,t,n){let s=this.s.shelves[t]?.levels[n];return!s||s.product!==e.product||s.qty<=0?"none":e.qty>=Qe[e.product].box?"full":(s.qty--,e.qty++,s.qty===0&&(s.product=null),this.h.shelfChanged(t),"ok")}clearLevel(e,t){let n=this.s.shelves[e]?.levels[t];n&&n.qty===0&&(n.product=null,this.h.shelfChanged(e))}removeBox(e){let t=this.s.boxes.indexOf(e);t>=0&&this.s.boxes.splice(t,1),this.h.boxRemoved(e)}buildCourt(e){let t=Lt.find(s=>s.id===e),n=this.s.courts[e];return!t||n.built||!this.unlocked(t.level)||!this.spend(t.price,"build")?!1:(n.built=!0,n.wear=0,this.addXp(40),this.h.courtChanged(e,!0),this.h.notify(`${t.label} construit !`,"good"),!0)}buyShelf(){let e=this.s.shelves.findIndex(t=>!t.built);return e<0||!this.spend(Tr,"build")?!1:(this.s.shelves[e].built=!0,this.h.shelfBuilt(e),!0)}buyUpgrade(e){let t=ji[e];return!t||this.s.upgrades[e]||!this.unlocked(t.level)||!this.spend(t.price,"build")?!1:(this.s.upgrades[e]=!0,this.h.upgradeBought(e),!0)}setStaff(e,t){return t&&!this.unlocked(Hn[e].level)?!1:(this.s.staff[e]=t,this.syncStaff(),!0)}syncStaff(){for(let e of Object.keys(Hn)){let t=this.s.staff[e],n=this.staff[e];if(t&&!n){let s=e==="reception"?$u:{x:3.5,z:-2.6},r=this.spawnPerson(e,s);r.x=s.x,r.z=s.z,r.rot=e==="reception"?0:Math.PI,r.job={state:"idle",timer:0},this.staff[e]=r}else!t&&n&&(this.despawnPerson(n),this.staff[e]=null)}}setPrice(e,t){this.s.prices[e]=Math.max(.1,Ei(t)),this.h.pricesChanged(e)}canClean(e){return this.s.courts[e].built&&!this.court[e].playing}clean(e){return this.canClean(e)?(this.s.courts[e].wear=0,this.addXp(4),this.h.courtChanged(e),!0):!1}updateStaff(e,t){let n=this.staff.reception;if(n){n.rot=0;let r=this.counter;if(r.cust&&!t.playerAtCounter)if(r.autoT+=e,r.phase==="scan"&&r.autoT>.9){r.autoT=0;let a=r.items.find(o=>!o.scanned);a&&this.scan(a.uid)}else r.phase==="pay"&&r.autoT>2.2&&(r.method==="card"?this.payCard(r.total):this.payCash(Ei(r.given-r.total)))}let s=this.staff.keeper;if(s){let r=s.job;if(r.state==="idle"){if(r.timer-=e,r.timer<=0){r.timer=3;let a=null;for(let o of Lt){let l=this.s.courts[o.id],c=this.court[o.id];l.built&&l.wear>=.45&&!c.reservedBy&&!c.cleaning&&(!a||l.wear>this.s.courts[a].wear)&&(a=o.id)}if(a){this.court[a].cleaning=!0,r.court=a,r.state="go";let o=En[a],l=rn[Lt.find(h=>h.id===a).surface].sport,c=l==="padel"?[...ao(a,1),{x:o.cx,z:o.cz+4}]:[{x:o.cx,z:o.cz+6}];r.sport=l,this.goTo(s,[...s.z>0?[Pr,Lr]:[],...o.route,...c])}}}else r.state==="go"&&this.arrived(s)?(r.state="clean",r.timer=7,s.action="clean"):r.state==="clean"?(r.timer-=e,r.timer<=0&&(this.s.courts[r.court].wear=0,this.court[r.court].cleaning=!1,this.h.courtChanged(r.court),r.state="back",s.action="idle",this.goTo(s,[...this.courtExit(s,r.court,r.sport),{x:3.5,z:-2.6}]))):r.state==="back"&&this.arrived(s)&&(r.state="idle",r.timer=2,s.rot=Math.PI)}}toggleOpen(){return this.dayOver?this.s.open:!this.s.open&&this.s.minute>=this.closeMinute-30?(this.h.notify("Trop tard pour ouvrir aujourd'hui","bad"),!1):(this.s.open=!this.s.open,this.s.open&&!this.s.dayStarted&&(this.s.dayStarted=!0,this.h.dayStarted?.()),this.h.openChanged(this.s.open),this.s.open)}arrivalRate(){let e=this.s.minute/60,t=e<11?.75:e<14?1.25:e<17?.85:e<20?1.45:.9;return(.8+.07*this.s.licences)*t*(.55+.9*this.s.satisfaction)}pickKind(){let e=this.builtSports().length>0,t=at(1-this.s.licences/this.capacity,0,1),n=Lt.filter(l=>this.s.courts[l.id].built).length,s=.22*t,r=e?Math.min(.55,.22+.08*n):0,a=.38,o=Math.random()*(s+r+a);return o<r?"book":o<r+a?"shop":"licence"}canEndDay(){return!!this.s.dayStarted&&!this.s.open&&this.customers.length===0&&!this.dayOver}update(e,t={}){if(this.dayOver)return;let n=this.s;n.dayStarted&&(n.minute+=e*id);for(let s of Object.values(this.court))s.reservedBy==null&&(s.playing=!1);this.counter.idleT=(this.counter.idleT||0)+(this.counter.cust?e:0),t.playerAtCounter&&(this.counter.idleT=0),n.open&&(n.minute>=this.closeMinute?(n.open=!1,this.h.openChanged(!1),this.h.notify("Fermeture : plus de nouveaux clients aujourd'hui","info")):this.customers.length<q_&&Math.random()<this.arrivalRate()/60*id*e&&this.spawnCustomer(this.pickKind()));for(let s of[...n.orders])s.eta-=e,s.eta<=0&&(n.orders.splice(n.orders.indexOf(s),1),this.deliver(s));for(let s of this.persons)s.action!=="play"&&this.movePerson(s,e);for(let s of[...this.customers])this.updateCustomer(s,e);if(this.updateStaff(e,t),!n.open&&n.minute>=this.closeMinute+60&&this.customers.length){for(let s of[...this.customers])s.mood=Math.min(s.mood,.7),this.removeCustomer(s);this.cancelCheckout(),this.queue.length=0}n.dayStarted&&!n.open&&n.minute>=this.closeMinute&&this.customers.length===0&&this.endDay()}endDay(){if(this.dayOver)return;this.dayOver=!0;let e=this.s,t=e.stats;e.open=!1;let n=0;for(let l of Object.keys(Hn))e.staff[l]&&(n+=Hn[l].salary);let s=30;for(let l of Lt)e.courts[l.id].built&&(s+=l.surface==="clay"?30:22);e.money-=n+s,t.salaries+=n,t.upkeep+=s;let r=e.licences,a=Math.round(e.licences*(e.satisfaction-.55)*.12+(e.satisfaction>.7?1:0));e.licences=at(e.licences+a,5,this.capacity);let o={day:e.day,...t,licences:e.licences,licenceDrift:e.licences-r,satisfaction:e.satisfaction,money:e.money,level:e.level};return this.h.dayEnded(o),o}nextDay(){let e=this.s;e.day++,e.minute=rc*60,e.open=!1,e.dayStarted=!1,e.stats=sd(),this.dayOver=!1;for(let t of[...this.customers])this.removeCustomer(t);this.queue.length=0,this.lobbyUsed.clear();for(let t of Object.keys(this.court))Object.assign(this.court[t],{reservedBy:null,playing:!1,cleaning:!1});this.staff.keeper&&(this.staff.keeper.job={state:"idle",timer:0},this.staff.keeper.path=[],this.staff.keeper.x=3.5,this.staff.keeper.z=-2.6),this.h.openChanged(!1)}serialize(){let e=JSON.parse(JSON.stringify(this.s));return e.boxes=e.boxes.map(t=>({...t,held:!1})),e}};function Z_(i){let e=Math.floor(i/6),t=i%6;return{x:Ir.x+(t%3-1)*.62,z:Ir.z+(Math.floor(t/3)-.5)*.62,y:.15+e*.46}}function rd(i){let e=i.map(s=>s.index?s.toNonIndexed():s),t=Object.keys(e[0].attributes),n=new Ht;for(let s of t){let r=e[0].attributes[s].itemSize,a=e.reduce((c,h)=>c+h.attributes[s].array.length,0),o=new Float32Array(a),l=0;for(let c of e)o.set(c.attributes[s].array,l),l+=c.attributes[s].array.length;n.setAttribute(s,new Yt(o,r))}return n}var mc=new Map;function Ct(i,e,t,{repeat:n=null,srgb:s=!0,mips:r=!0}={}){let a=document.createElement("canvas");a.width=i,a.height=e;let o=a.getContext("2d",{willReadFrequently:!0});t(o,i,e);let l=new dn(a);return s&&(l.colorSpace=pt),l.anisotropy=4,n&&(l.wrapS=l.wrapT=hn,l.repeat.set(n[0],n[1])),l.generateMipmaps=r,l}function bn(i,e,t,{scale:n=64,alpha:s=.08,color:r="0,0,0",seed:a=1}={}){let o=Math.ceil(e/n)+2,l=Math.ceil(t/n)+2,c=a*9301,h=()=>(c=c*16807%2147483647)/2147483647,u=Array.from({length:l},()=>Array.from({length:o},h)),p=i.getImageData(0,0,e,t),f=p.data,[_,v,g]=r.split(",").map(Number);for(let d=0;d<t;d++){let m=d/n,x=Math.floor(m),y=m-x,R=y*y*(3-2*y);for(let b=0;b<e;b++){let w=b/n,C=Math.floor(w),M=w-C,S=M*M*(3-2*M),N=u[x][C],H=u[x][C+1],ee=u[x+1][C],P=u[x+1][C+1],z=(N+(H-N)*S+(ee+(P-ee)*S-(N+(H-N)*S))*R-.5)*2*s,q=(d*e+b)*4;z>0?(f[q]+=(255-f[q])*z,f[q+1]+=(255-f[q+1])*z,f[q+2]+=(255-f[q+2])*z):(f[q]+=(f[q]-_)*z,f[q+1]+=(f[q+1]-v)*z,f[q+2]+=(f[q+2]-g)*z)}}i.putImageData(p,0,0)}function Ws(i,e,t,n,s,r=[1,2]){for(let a=0;a<n;a++){i.fillStyle=s[a%s.length];let o=r[0]+Math.random()*(r[1]-r[0]);i.fillRect(Math.random()*e,Math.random()*t,o,o)}}function an(i,e){return mc.has(i)||mc.set(i,e()),mc.get(i)}var ad=()=>an("grass",()=>Ct(512,512,(i,e,t)=>{i.fillStyle="#4f8a35",i.fillRect(0,0,e,t),bn(i,e,t,{scale:96,alpha:.18,seed:3}),bn(i,e,t,{scale:18,alpha:.12,seed:7});for(let n=0;n<9e3;n++){let s=Math.random()*e,r=Math.random()*t,a=3+Math.random()*5;i.strokeStyle=Math.random()<.5?"rgba(120,170,70,0.35)":"rgba(40,80,30,0.35)",i.beginPath(),i.moveTo(s,r),i.lineTo(s+(Math.random()-.5)*2,r-a),i.stroke()}},{repeat:[60,60]})),od=()=>an("wood",()=>Ct(1024,1024,(i,e,t)=>{let n=t/8;for(let s=0;s<8;s++){let r=-Math.random()*300;for(;r<e;){let a=260+Math.random()*260,o=150+Math.random()*35;i.fillStyle=`rgb(${o+25},${o-15},${o-60})`,i.fillRect(r,s*n,a,n);for(let l=0;l<14;l++){i.strokeStyle=`rgba(90,55,25,${.05+Math.random()*.08})`,i.lineWidth=1+Math.random()*2;let c=s*n+Math.random()*n;i.beginPath(),i.moveTo(r,c),i.bezierCurveTo(r+a*.3,c+(Math.random()-.5)*10,r+a*.6,c+(Math.random()-.5)*10,r+a,c),i.stroke()}i.fillStyle="rgba(40,25,10,0.55)",i.fillRect(r,s*n,2,n),r+=a}i.fillStyle="rgba(40,25,10,0.5)",i.fillRect(0,s*n,e,2)}bn(i,e,t,{scale:128,alpha:.06,seed:11})},{repeat:[5,4]})),ld=()=>an("concrete",()=>Ct(512,512,(i,e,t)=>{i.fillStyle="#b9b6ae",i.fillRect(0,0,e,t),bn(i,e,t,{scale:80,alpha:.12,seed:5}),Ws(i,e,t,4e3,["rgba(80,80,80,0.25)","rgba(255,255,255,0.25)"]),i.strokeStyle="rgba(70,70,70,0.35)",i.lineWidth=2,i.strokeRect(0,0,e,t)},{repeat:[1,1]})),cd=()=>an("asphalt",()=>Ct(512,512,(i,e,t)=>{i.fillStyle="#4a4b4e",i.fillRect(0,0,e,t),bn(i,e,t,{scale:60,alpha:.1,seed:9}),Ws(i,e,t,12e3,["rgba(20,20,20,0.5)","rgba(140,140,140,0.35)"],[1,2.5])},{repeat:[12,12]})),hd=()=>an("gravel",()=>Ct(512,512,(i,e,t)=>{i.fillStyle="#a89c86",i.fillRect(0,0,e,t),Ws(i,e,t,16e3,["#8f8470","#c4b9a3","#766b58","#d8cfbd"],[1.5,4])},{repeat:[6,10]})),ud=()=>an("wall",()=>Ct(256,256,(i,e,t)=>{i.fillStyle="#efece6",i.fillRect(0,0,e,t),bn(i,e,t,{scale:48,alpha:.03,seed:13})},{repeat:[4,1]})),dd=()=>an("clad",()=>Ct(512,512,(i,e,t)=>{for(let n=0;n<e;n+=32){let s=120+Math.random()*25;i.fillStyle=`rgb(${s+40},${s+5},${s-30})`,i.fillRect(n,0,32,t),i.fillStyle="rgba(30,20,10,0.5)",i.fillRect(n,0,2,t)}bn(i,e,t,{scale:64,alpha:.08,seed:17})},{repeat:[6,1]}));function fd(i,e,t,n,s,r){let a=e/n,o=e/2,l=t/2,c=23.77*a,h=10.97*a,u=8.23*a,p=6.4*a,f=Math.max(3,.05*a);i.fillStyle=r;let _=(v,g,d,m)=>i.fillRect(v,g,d,m);_(o-h/2,l-c/2,h,f),_(o-h/2,l+c/2-f,h,f),_(o-h/2,l-c/2,f,c),_(o+h/2-f,l-c/2,f,c),_(o-u/2,l-c/2,f,c),_(o+u/2-f,l-c/2,f,c),_(o-u/2,l-p-f/2,u,f),_(o-u/2,l+p-f/2,u,f),_(o-f/2,l-p,f,p*2),_(o-f/2,l-c/2,f,.15*a),_(o-f/2,l+c/2-.15*a,f,.15*a)}var pd=()=>an("clay",()=>Ct(1024,2048,(i,e,t)=>{i.fillStyle="#c4643a",i.fillRect(0,0,e,t),bn(i,e,t,{scale:160,alpha:.1,seed:21}),bn(i,e,t,{scale:22,alpha:.07,seed:23}),Ws(i,e,t,4e4,["rgba(120,45,20,0.35)","rgba(230,140,90,0.3)"],[1,2]),fd(i,e,t,18.3,36.6,"rgba(250,246,238,0.95)")})),md=()=>an("hard",()=>Ct(1024,2048,(i,e,t)=>{i.fillStyle="#3d7a5a",i.fillRect(0,0,e,t);let n=e/18.3;i.fillStyle="#2f5d9e",i.fillRect(e/2-10.97*n/2,t/2-23.77*n/2,10.97*n,23.77*n),bn(i,e,t,{scale:90,alpha:.05,seed:31}),Ws(i,e,t,3e4,["rgba(255,255,255,0.05)","rgba(0,0,0,0.05)"],[1,2]),fd(i,e,t,18.3,36.6,"#f4f4f0")})),gd=()=>an("padel",()=>Ct(1024,2048,(i,e,t)=>{i.fillStyle="#2a64b8",i.fillRect(0,0,e,t),Ws(i,e,t,9e4,["rgba(80,140,230,0.4)","rgba(15,45,110,0.4)"],[1,2]),bn(i,e,t,{scale:120,alpha:.05,seed:41});let n=e/10,s=e/2,r=t/2,a=.05*n;i.fillStyle="#f4f4f0",i.fillRect(s-5*n,r-6.95*n-a/2,10*n,a),i.fillRect(s-5*n,r+6.95*n-a/2,10*n,a),i.fillRect(s-a/2,r-6.95*n,a,13.9*n)})),gc=i=>an("wear-"+i,()=>Ct(512,1024,(e,t,n)=>{e.clearRect(0,0,t,n);let s=t/(i==="padel"?10:18.3),r=i==="padel"?[n/2-7.2*s,n/2+7.2*s]:[n/2-12*s,n/2+12*s];for(let a of r)for(let o=0;o<260;o++){let l=t/2+(Math.random()-.5)*t*.55,c=a+(Math.random()-.5)*3.5*s;e.fillStyle=i==="clay"?"rgba(110,40,15,0.5)":"rgba(40,40,30,0.25)",e.save(),e.translate(l,c),e.rotate(Math.random()*Math.PI),e.fillRect(-2,-5,4+Math.random()*4,10+Math.random()*20),e.restore()}for(let a=0;a<120;a++){let o=Math.random()*t,l=Math.random()*n;e.fillStyle=i==="clay"?"rgba(235,170,120,0.35)":"rgba(120,110,80,0.2)",e.beginPath(),e.ellipse(o,l,4+Math.random()*10,2+Math.random()*5,Math.random()*3,0,Math.PI*2),e.fill()}for(let a=0;a<90;a++){let o=Math.random()*t,l=Math.random()*n;e.fillStyle=["#8a5a24","#a87a2e","#6d4a1e"][a%3],e.save(),e.translate(o,l),e.rotate(Math.random()*6),e.beginPath(),e.ellipse(0,0,5,2.5,0,0,Math.PI*2),e.fill(),e.restore()}})),Dr=(i,e,t=16,n=2,s=[1,1])=>an("mesh-"+i,()=>Ct(64,64,(r,a,o)=>{r.clearRect(0,0,a,o),r.strokeStyle=e,r.lineWidth=n,r.beginPath();for(let l=0;l<=a;l+=t)r.moveTo(l,0),r.lineTo(l,o),r.moveTo(0,l),r.lineTo(a,l);r.stroke()},{repeat:s})),xd=i=>an("box-"+i,()=>Ct(256,256,(e,t,n)=>{e.fillStyle="#c9a26b",e.fillRect(0,0,t,n),bn(e,t,n,{scale:40,alpha:.08,seed:51}),e.fillStyle="rgba(120,85,40,0.35)";for(let r=0;r<n;r+=6)e.fillRect(0,r,t,1);e.fillStyle="rgba(210,190,150,0.85)",e.fillRect(t/2-18,0,36,n);let s=Qe[i];e.fillStyle="#fbfaf6",e.fillRect(28,150,t-56,78),e.fillStyle=s.color,e.fillRect(28,150,18,78),e.fillStyle="#1b2420",e.font="700 26px Outfit, Arial, sans-serif",e.textBaseline="middle",e.fillText(s.short,58,176),e.font="500 18px Outfit, Arial, sans-serif",e.fillStyle="#56605a",e.fillText(`x${s.box}`,58,206)}));function _d(i,{w:e=512,h:t=128,bg:n="#ffffff",fg:s="#1b2420",font:r="700 64px Outfit, Arial, sans-serif",accent:a=null}={}){return Ct(e,t,o=>{o.fillStyle=n,o.fillRect(0,0,e,t),a&&(o.fillStyle=a,o.fillRect(0,t-t*.12,e,t*.12)),o.fillStyle=s,o.font=r,o.textAlign="center",o.textBaseline="middle",o.fillText(i,e/2,t/2)})}var co=i=>an("lbl-"+i,()=>Ct(256,128,(e,t,n)=>{let s=Qe[i],r={balls:["#1d3f8f","#e8f04a","ACE"],padelballs:["#0f7a54","#c8f04a","PADEL"],water:["#dff1fb","#2a7cc0","SOURCE"],iso:["#ff8a3d","#ffffff","BOOST"]},[a,o,l]=r[i]||["#ffffff",s.color,s.short];e.fillStyle=a,e.fillRect(0,0,t,n),e.fillStyle=o,e.font="800 54px Outfit, Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(l,t/2,n/2+2),e.fillRect(0,8,t,6),e.fillRect(0,n-14,t,6)}));var J_=`
  varying vec3 vDir;
  void main() {
    vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww;
  }`,K_=`
  uniform vec3 uTop, uHorizon, uGround, uSunColor, uSunDir;
  varying vec3 vDir;
  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = h > 0.0 ? mix(uHorizon, uTop, pow(clamp(h, 0.0, 1.0), 0.55)) : mix(uHorizon, uGround, clamp(-h * 4.0, 0.0, 1.0));
    float s = max(dot(d, normalize(uSunDir)), 0.0);
    col += uSunColor * (pow(s, 900.0) * 6.0 + pow(s, 12.0) * 0.35);
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`,Gn=[{h:6,top:2439782,hor:15312505,sun:16756848},{h:9,top:4949713,hor:13624306,sun:16773592},{h:13,top:4161488,hor:14018805,sun:16777215},{h:18,top:4882372,hor:15260868,sun:16769712},{h:20.3,top:3428492,hor:15769706,sun:16751184},{h:21.5,top:1450570,hor:5917290,sun:16742976},{h:23.5,top:659496,hor:1976130,sun:2241365}];function j_(i){let e=Gn[0],t=Gn[Gn.length-1];for(let r=0;r<Gn.length-1;r++)if(i>=Gn[r].h&&i<=Gn[r+1].h){e=Gn[r],t=Gn[r+1];break}i>Gn[Gn.length-1].h&&(e=t);let n=e===t?0:at((i-e.h)/(t.h-e.h),0,1),s=(r,a)=>new He(r).lerp(new He(a),n);return{top:s(e.top,t.top),hor:s(e.hor,t.hor),sun:s(e.sun,t.sun)}}function Md(i,e){let t=new Ln({uniforms:{uTop:{value:new He},uHorizon:{value:new He},uGround:{value:new He(3820082)},uSunColor:{value:new He},uSunDir:{value:new D(0,1,0)}},vertexShader:J_,fragmentShader:K_,side:$t,depthWrite:!1}),n=new se(new sn(500,32,16),t);n.frustumCulled=!1,n.renderOrder=-1,i.add(n),i.fog=new za(13624306,90,260);let s=new Bs(e),r=new zs,a=new se(new sn(50,32,16),t);r.add(a);let o=null,l=new Ya(16777215,3);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:160}),l.shadow.bias=-4e-4,l.shadow.normalBias=.03,i.add(l,l.target);let c=new $a(14675967,9077362,1);i.add(c);let h=new Za(16774116,.9);i.add(h);let u=new se(new $e(240,260),new Ee({map:ad(),roughness:.95}));u.rotation.x=-Math.PI/2,u.position.set(0,0,-25),u.receiveShadow=!0,i.add(u);let p=ld(),f=(k,K,j,me,Ce=.015)=>{let Ae=p.clone();Ae.needsUpdate=!0,Ae.wrapS=Ae.wrapT=hn,Ae.repeat.set(Math.max(1,(K-k)/2),Math.max(1,(me-j)/2));let _e=new se(new $e(K-k,me-j),new Ee({map:Ae,roughness:.9}));_e.rotation.x=-Math.PI/2,_e.position.set((k+K)/2,Ce,(j+me)/2),_e.receiveShadow=!0,i.add(_e)};f(-13,13,14,21),f(-1.6,1.6,21,26),f(-37,37,-3.4,-.6),f(-1.5,1.5,-44,-3.4),f(-12,12,-43.6,-41),f(-24,-21,-42,-3.4),f(-26,-23,-42,-3.4,.016),f(23,26,-16,-3.4,.016),f(-10.4,10.4,-.6,.02,.02);let _=new se(new $e(44,14),new Ee({map:cd(),roughness:.92}));_.rotation.x=-Math.PI/2,_.position.set(0,.01,31),_.receiveShadow=!0,i.add(_);let v=new Ee({color:15921902,roughness:.7});for(let k=-20;k<=20;k+=2.6)if(!(Math.abs(k)<2.5))for(let K of[26.2,35.8]){let j=new se(new $e(.12,4.6),v);j.rotation.x=-Math.PI/2,j.position.set(k,.02,K),i.add(j)}let g=[13685977,1911354,9051164,15921906,3104158,3817285],d=[],m=(k,K,j,me)=>d.push({minX:k-j,maxX:k+j,minZ:K-me,maxZ:K+me});[[-15.6,26.2],[-10.4,35.8],[7.8,26.2],[13,26.2],[-5.2,26.2],[18.2,35.8]].forEach(([k,K],j)=>{i.add(tv(k,K,g[j%g.length],K>30?Math.PI:0)),m(k,K,1,2.35)});let x=new rt(.18,.28,3.2,10).translate(0,1.6,0),y=new Ee({color:5980976,roughness:.9}),b=rd([[0,0,0,2.1],[1.3,-.4,.4,1.5],[-1.2,-.3,-.5,1.6],[.3,1.1,-.6,1.5],[-.4,.7,1.1,1.4],[.6,-.8,-1.2,1.3]].map(([k,K,j,me])=>new sn(me,20,14).translate(k,K,j))),w=new Ee({color:4880946,roughness:.85}),C=[],M=(k,K)=>{if(k>-14&&k<14&&K>-4&&K<39)return!0;for(let j of Object.values(En))if(Math.abs(k-j.cx)<14&&K<j.cz+22&&K>j.cz-22)return!0;return Math.abs(k)<3&&K<0};for(let k=0;k<400&&C.length<70;k++){let K=(Math.random()*2-1)*70,j=-95+Math.random()*150;M(K,j)||Math.abs(K)<44&&j>-86&&j<0&&Math.random()<.7||C.push([K,j,.8+Math.random()*.6])}for(let k=-40;k<=40;k+=8)Math.abs(k)>16&&C.push([k,40,1.1]);let S=new _r(x,y,C.length),N=new _r(b,w,C.length),H=new vt,ee=new Bn,P=new D,O=new D,z=new He;C.forEach(([k,K,j],me)=>{m(k,K,.32*j,.32*j),ee.setFromAxisAngle(new D(0,1,0),Math.random()*6.28),H.compose(O.set(k,0,K),ee,P.set(j,j,j)),S.setMatrixAt(me,H),H.compose(O.set(k,4.2*j,K),ee,P.set(j,j*(.9+Math.random()*.3),j)),N.setMatrixAt(me,H),N.setColorAt(me,z.setHSL(.24+Math.random()*.06,.45,.3+Math.random()*.1))}),S.castShadow=N.castShadow=!0,N.receiveShadow=!0,i.add(S,N);let q=new Ee({color:4156204,roughness:.95});for(let[k,K]of[[-22,-2],[2,22]]){m((k+K)/2,22.6,(K-k)/2,.45);let j=new se(new Je(K-k,1.1,.9),q);j.position.set((k+K)/2,.55,22.6),j.castShadow=j.receiveShadow=!0,i.add(j)}let Z=_d("TENNIS CLUB DES PLATANES",{w:1024,h:160,bg:"#1f6b4a",fg:"#ffffff",font:"700 70px Outfit, Arial, sans-serif",accent:"#e4f05a"}),$=new se(new Je(5.2,.8,.12),[new Ee({color:2059082}),new Ee({color:2059082}),new Ee({color:2059082}),new Ee({color:2059082}),new Ee({map:Z,roughness:.5}),new Ee({map:Z,roughness:.5})]);$.position.set(-6,2.2,23.2),$.castShadow=!0;let ie=new Ee({color:2764595,metalness:.6,roughness:.4});for(let k of[-1,1]){let K=new se(new rt(.06,.06,2.6,10),ie);K.position.set(-6+k*2.3,1.3,23.2),m(-6+k*2.3,23.2,.12,.12),i.add(K)}i.add($);let Q=-10,de=new D;function W(k,K){let j=k/60,me=j_(j);t.uniforms.uTop.value.copy(me.top),t.uniforms.uHorizon.value.copy(me.hor),t.uniforms.uSunColor.value.copy(me.sun);let Ce=at((j-6)/15,0,1),Ae=Math.sin(Ce*Math.PI)*Ji.degToRad(62)-(j>21?(j-21)*.08:0),_e=Ur(Ji.degToRad(100),Ji.degToRad(265),Ce);de.set(Math.sin(_e)*Math.cos(Ae),Math.sin(Ae),-Math.cos(_e)*Math.cos(Ae)*.6+.35).normalize(),t.uniforms.uSunDir.value.copy(de);let Fe=at(de.y*6,0,1);if(l.color.copy(me.sun),l.intensity=3.2*Fe,c.intensity=Ur(.35,.85,at(de.y*3+.15,0,1)),h.intensity=Ur(.75,.9,Fe),c.color.copy(me.top).lerp(new He(16777215),.55).lerp(new He(16767400),at(1-de.y*6,0,1)*.6),i.fog.color.copy(me.hor),l.position.copy(K).addScaledVector(de,80),l.target.position.copy(K),Math.abs(j-Q)>1.5){Q=j;let U=o;o=s.fromScene(r,.04),i.traverse(ge=>{if(ge.material)for(let Y of[].concat(ge.material))Y.userData.reflective&&(Y.envMap=o.texture,Y.needsUpdate=!Y.userData.hadEnv,Y.userData.hadEnv=!0)}),U?.dispose()}return{night:1-Fe,hour:j}}return{setTime:W,sun:l,colliders:d}}function Ed(i){let e=new Wi;return i.forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n)),e}var Q_=Ed([[-2.15,.3],[2.1,.3],[2.2,.55],[2.15,.85],[1.2,.98],[.6,1.42],[-1,1.45],[-1.9,1.05],[-2.2,.95],[-2.25,.5]]),ev=Ed([[1.05,1],[.52,1.36],[-.95,1.38],[-1.72,1.04]]),vd=null,yd=null;function tv(i,e,t,n){vd??(vd=new qi(Q_,{depth:1.6,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:5,curveSegments:8}).translate(0,0,-.8)),yd??(yd=new qi(ev,{depth:1.66,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:3}).translate(0,0,-.83));let s=new Ge,r=new Ee({color:t,roughness:.25,metalness:.5});r.userData.reflective=!0;let a=new Ee({color:1713200,roughness:.05,metalness:.6});a.userData.reflective=!0;let o=new se(vd,r),l=new se(yd,a);s.add(o,l);let c=new Ee({color:1381653,roughness:.9}),h=new Ee({color:12106946,metalness:.8,roughness:.3});for(let u of[-1.35,1.35])for(let p of[-.86,.86]){let f=new se(new rt(.34,.34,.24,20).rotateX(Math.PI/2),c);f.position.set(u,.34,p);let _=new se(new rt(.2,.2,.25,16).rotateX(Math.PI/2),h);_.position.copy(f.position),s.add(f,_)}return s.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),s.position.set(i,0,e),s.rotation.y=n+Math.PI/2,s}var fn=(i,e={})=>new Ee({color:i,roughness:.55,...e}),bd=i=>(i.userData.reflective=!0,i),ne={},nv={balls:[.5,.32,.36],water:[.5,.3,.36],iso:[.46,.26,.34],grip:[.4,.2,.3],racket:[.36,.2,.78],padelballs:[.5,.32,.36],padelracket:[.5,.2,.6],cap:[.5,.28,.4]};function iv(i){let e=new Ge;switch(i){case"balls":case"padelballs":{let t=co(i),n=new se(ne.tube??(ne.tube=new rt(.038,.038,.24,20,1,!0)),new Ee({map:t,roughness:.3,side:At}));n.position.y=.12;let s=new se(ne.tubeCap??(ne.tubeCap=new rt(.041,.041,.025,20)),ne.white??(ne.white=fn(16119282,{roughness:.4})));s.position.y=.245;let r=new se(ne.tubeBottom??(ne.tubeBottom=new rt(.039,.039,.01,20)),ne.metal??(ne.metal=bd(fn(12106946,{metalness:.8,roughness:.3}))));r.position.y=.005,e.add(n,s,r);break}case"water":{ne.bottle??(ne.bottle=new Vi([[0,0],[.032,0],[.034,.01],[.034,.13],[.03,.16],[.014,.19],[.012,.2],[0,.2]].map(a=>new fe(a[0],a[1])),20));let t=ne.waterMat??(ne.waterMat=new Ee({color:13625847,roughness:.08,transparent:!0,opacity:.55})),n=new se(ne.bottle,t),s=new se(ne.bottleLabel??(ne.bottleLabel=new rt(.0345,.0345,.06,20,1,!0)),new Ee({map:co("water"),roughness:.5}));s.position.y=.08;let r=new se(ne.bottleCap??(ne.bottleCap=new rt(.014,.014,.018,12)),ne.blueCap??(ne.blueCap=fn(2784448,{roughness:.4})));r.position.y=.205,e.add(n,s,r);break}case"iso":{let t=new se(ne.can??(ne.can=new rt(.033,.033,.15,20)),new Ee({map:co("iso"),metalness:.5,roughness:.3}));t.position.y=.075;let n=new se(ne.canTop??(ne.canTop=new rt(.028,.033,.012,20)),ne.metal??(ne.metal=bd(fn(12106946,{metalness:.8,roughness:.3}))));n.position.y=.156,e.add(t,n);break}case"grip":{let t=new se(ne.gripBox??(ne.gripBox=new Je(.09,.2,.04)),[fn(16777215),fn(16777215),fn(1778720),fn(1778720),new Ee({map:sv(),roughness:.5}),fn(16777215)]);t.position.y=.1,e.add(t);break}case"racket":case"padelracket":e.add(xc(i==="padelracket"));break;case"cap":{let t=new se(ne.capCrown??(ne.capCrown=new sn(.1,24,12,0,Math.PI*2,0,Math.PI/2)),ne.capMat??(ne.capMat=fn(2067035,{roughness:.8})));t.scale.set(1,.75,1.05);let n=new se(ne.visor??(ne.visor=new rt(.1,.1,.008,24,1,!1,-Math.PI/2,Math.PI)),ne.capMat);n.scale.set(.9,1,.9),n.position.set(0,.004,.06),e.add(t,n);break}}return e.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),e}function sv(){return ne.gripLabel??(ne.gripLabel=(()=>{let i=document.createElement("canvas");i.width=64,i.height=128;let e=i.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,64,128),e.fillStyle="#e04a4a",e.fillRect(0,20,64,24),e.fillStyle="#1b2420",e.font="700 18px Outfit, Arial",e.textAlign="center",e.fillText("GRIP",32,80),e.font="500 13px Outfit, Arial",e.fillText("x3",32,102);let t=new dn(i);return t.colorSpace=pt,t})())}function xc(i=!1){let e=new Ge;if(i){let t=new Wi;t.absellipse(0,0,.13,.15,0,Math.PI*2);let n=[];for(let o=-2;o<=2;o++)for(let l=-2;l<=2;l++){if(o*o+l*l>6)continue;let c=new Gi;c.absarc(o*.045,l*.05,.009,0,Math.PI*2,!0),n.push(c)}t.holes=n;let s=new se(ne.padelHead??(ne.padelHead=new qi(t,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24})),ne.padelMat??(ne.padelMat=new Ee({color:1382170,roughness:.3})));s.position.set(0,.36,-.017);let r=new se(ne.padelStripe??(ne.padelStripe=new $i(.14,.008,8,40)),ne.lime??(ne.lime=fn(13168714,{roughness:.4})));r.scale.set(.93,1.07,1),r.position.set(0,.36,0);let a=new se(ne.padelHandle??(ne.padelHandle=new rt(.017,.019,.16,12)),ne.gripMat??(ne.gripMat=fn(2236962,{roughness:.9})));a.position.y=.11,e.add(s,r,a)}else{let t=new se(ne.frame??(ne.frame=new $i(.13,.011,10,48)),ne.frameMat??(ne.frameMat=new Ee({color:3108832,roughness:.3})));t.scale.set(.8,1.05,1),t.position.y=.47;let n=new se(ne.strings??(ne.strings=new Hs(.128,32)),ne.stringMat??(ne.stringMat=new Ee({map:rv(),transparent:!0,side:At,roughness:.6,depthWrite:!1})));n.scale.set(.8,1.05,1),n.position.y=.47;let s=ne.throat??(ne.throat=new rt(.008,.01,.17,8));for(let a of[-1,1]){let o=new se(s,ne.frameMat);o.position.set(a*.035,.27,0),o.rotation.z=a*.28,e.add(o)}let r=new se(ne.handle??(ne.handle=new rt(.016,.018,.2,8)),ne.gripMat??(ne.gripMat=fn(2236962,{roughness:.9})));r.position.y=.1,e.add(t,n,r)}return e.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),e}function rv(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.strokeStyle="rgba(245,245,235,0.9)",e.lineWidth=1.4;for(let n=4;n<128;n+=8)e.beginPath(),e.moveTo(n,0),e.lineTo(n,128),e.moveTo(0,n),e.lineTo(128,n),e.stroke();let t=new dn(i);return t.colorSpace=pt,t}var ho={};function uo(i){return ho[i]??(ho[i]=iv(i)),ho[i].clone()}function Sd(i){var c;let[e,t,n]=nv[i],s=xd(i),r=ne[c="boxMat-"+i]??(ne[c]=new Ee({map:s,roughness:.85})),a=ne.boxPlain??(ne.boxPlain=new Ee({color:13214315,roughness:.85})),o=new se(new Je(e,t,n),[r,r,a,a,r,r]);o.castShadow=!0,o.receiveShadow=!0;let l=new se(new $e(.07,n+.002),ne.tape??(ne.tape=new Ee({color:14205850,roughness:.4})));return l.rotation.x=-Math.PI/2,l.position.y=t/2+.002,o.add(l),o.userData.size=[e,t,n],o}var kt=(i,e={})=>new Ee({color:i,roughness:.6,...e});function mt(i,e,t,n,s,r,a,{cast:o=!0,receive:l=!0}={}){let c=new se(new Je(i,e,t),n);return c.position.set(s,r,a),c.castShadow=o,c.receiveShadow=l,c}function Xs(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=new dn(n);r.colorSpace=pt,r.anisotropy=4;let a={tex:r,redraw:(...o)=>{t(s,i,e,...o),r.needsUpdate=!0}};return a.redraw(),a}function Td(i,e){let t=new Ge;i.add(t);let n=Be.height,s=Be.maxX-Be.minX,r=Be.maxZ-Be.minZ,a=(Be.minX+Be.maxX)/2,o=(Be.minZ+Be.maxZ)/2,l=new se(new $e(s,r),new Ee({map:od(),roughness:.45}));l.rotation.x=-Math.PI/2,l.position.set(a,.025,o),l.receiveShadow=!0,t.add(l);let c=new Ee({map:ud(),roughness:.9}),h=new Ee({map:dd(),roughness:.75}),u=.25,p=wr/2,f=I=>["+x","-x","+y","-y","+z","-z"].map(te=>te===I?h:c),_=(I,te,ve,le,re,L,ae)=>t.add(mt(I,te,ve,f(ae),le,re,L)),v=s/2-p;_(v,n,u,Be.minX+v/2,n/2,Be.minZ,"-z"),_(v,n,u,Be.maxX-v/2,n/2,Be.minZ,"-z"),_(wr,n-2.5,u,0,2.5+(n-2.5)/2,Be.minZ,"-z"),_(u,n,r,Be.minX,n/2,o,"-x"),_(u,n,r,Be.maxX,n/2,o,"+x");let g=kt(2764595,{metalness:.7,roughness:.35});g.userData.reflective=!0;let d=new Ee({color:12572902,roughness:.05,metalness:.1,transparent:!0,opacity:.18,envMapIntensity:1.5,depthWrite:!1});d.userData.reflective=!0;let m=Be.maxZ;for(let I=Be.minX;I<=Be.maxX+.01;I+=2.5)Math.abs(I)<p+.05||t.add(mt(.1,n,.14,g,I,n/2,m));for(let I of[-p,p])t.add(mt(.12,n,.16,g,I,n/2,m));t.add(mt(s,.14,.16,g,a,n-.07,m)),t.add(mt(s,.12,.16,g,a,2.55,m)),t.add(mt(v,.3,.16,g,Be.minX+v/2,.15,m)),t.add(mt(v,.3,.16,g,Be.maxX-v/2,.15,m));for(let I of[-1,1]){let te=new se(new $e(v,n-.3),d);te.position.set(I*(p+v/2),.3+(n-.3)/2,m),t.add(te)}let x=new se(new $e(wr,n-2.55),d);x.position.set(0,2.55+(n-2.55)/2,m),t.add(x);for(let I of[-1,1]){let te=new Ge,ve=new se(new $e(1.05,2.35),d);ve.position.set(0,1.25,0),te.add(ve);for(let[le,re,L,ae]of[[1.2,.07,0,.035],[1.2,.07,0,2.465],[.07,2.5,-.565,1.25],[.07,2.5,.565,1.25]])te.add(mt(le,re,.05,g,L,ae,0,{cast:!1}));te.position.set(I*(p+.6),0,m+.12),t.add(te)}let y=kt(3883077,{roughness:.8});t.add(mt(s+1.4,.35,r+2.2,y,a,n+.17,o+.6));let R=new Ee({color:2059082,roughness:.5});t.add(mt(s+1.45,.5,.12,R,a,n+.15,Be.maxZ+1.75));let b=Xs(1024,160,(I,te,ve)=>{I.fillStyle="#1f6b4a",I.fillRect(0,0,te,ve),I.fillStyle="#ffffff",I.font="800 92px Outfit, Arial, sans-serif",I.textAlign="center",I.textBaseline="middle",I.fillText("TENNIS \xB7 PADEL",te/2,ve/2+4)}),w=new se(new $e(4.6,.72),new Ee({map:b.tex,emissive:16777215,emissiveMap:b.tex,emissiveIntensity:.25}));w.position.set(0,n+.95,Be.maxZ+1.6),t.add(w),t.add(mt(4.8,.85,.1,y,0,n+.95,Be.maxZ+1.54));let C=new se(new $e(s,r),kt(16052974,{roughness:.95}));C.rotation.x=Math.PI/2,C.position.set(a,n-.01,o),t.add(C);let M=new Ee({color:16777215,emissive:16774888,emissiveIntensity:1.2});for(let I=-7;I<=7;I+=3.5)for(let te=2.5;te<=12;te+=3.2){let ve=new se(new $e(1.2,1.2),M);ve.rotation.x=Math.PI/2,ve.position.set(I,n-.03,te),t.add(ve)}let S=Mt.maxX-Mt.minX,N=Mt.maxZ-Mt.minZ,H=(Mt.minX+Mt.maxX)/2,ee=(Mt.minZ+Mt.maxZ)/2;t.add(mt(S,Mt.top-.04,N-.1,[h,h,c,c,h,c],H,(Mt.top-.04)/2,ee+.05));let P=new Ee({color:16118767,roughness:.25});P.userData.reflective=!0,t.add(mt(S+.1,.05,N+.12,P,H,Mt.top-.02,ee));let O=mt(1.5,.008,.5,kt(2238251,{roughness:.9}),Rr.x,Mt.top+.004,Rr.z,{cast:!1});t.add(O);let z=new Ge;z.position.set(ac.x,Mt.top,ac.z),z.rotation.y=Math.PI;let q=kt(12172996,{metalness:.8,roughness:.3});q.userData.reflective=!0,z.add(mt(.42,.02,.3,q,0,.01,0));let Z=Xs(512,320,(I,te,ve)=>{let le=I.createLinearGradient(0,0,te,ve);le.addColorStop(0,"#1f6b4a"),le.addColorStop(1,"#0f3d2a"),I.fillStyle=le,I.fillRect(0,0,te,ve),I.fillStyle="#e4f05a",I.beginPath(),I.arc(te/2,ve/2-30,38,0,Math.PI*2),I.fill(),I.strokeStyle="#ffffff",I.lineWidth=5,I.beginPath(),I.arc(te/2-52,ve/2-30,38,-.6,.6),I.stroke(),I.beginPath(),I.arc(te/2+52,ve/2-30,38,Math.PI-.6,Math.PI+.6),I.stroke(),I.fillStyle="#ffffff",I.font="700 40px Outfit, Arial",I.textAlign="center",I.fillText("ClubOS",te/2,ve/2+50),I.font="500 22px Outfit, Arial",I.fillStyle="rgba(255,255,255,0.7)",I.fillText("Appuie sur E",te/2,ve/2+88)}),$=new Ge;$.position.set(0,.02,-.15),$.rotation.x=.28,$.add(mt(.42,.28,.012,q,0,.14,0));let ie=new se(new $e(.39,.25),new Ee({map:Z.tex,emissive:16777215,emissiveMap:Z.tex,emissiveIntensity:.9}));ie.position.set(0,.14,.007),$.add(ie),z.add($),t.add(z),z.traverse(I=>{I.isMesh&&(I.userData.interact={kind:"laptop"})}),e.push(z);let Q=new Ge;Q.position.set(so.x,Mt.top,so.z);let de=kt(1974822,{roughness:.45});Q.add(mt(.06,.25,.06,de,0,.13,.05));let W=Xs(512,384,De),k=new Ge;k.position.set(0,.36,.02),k.rotation.y=Math.PI,k.rotation.x=-.15,k.add(mt(.44,.33,.04,de,0,0,0));let K=new se(new $e(.41,.3),new Ee({map:W.tex,emissive:16777215,emissiveMap:W.tex,emissiveIntensity:.85}));K.position.z=.021,k.add(K),Q.add(k),t.add(Q);let j=mt(.46,.12,.42,de,so.x,Mt.top-.12,Mt.minZ-.05);j.userData.interact={kind:"cash"},e.push(j),t.add(j);let me=mt(.08,.14,.08,de,-5.7,Mt.top+.07,6.85);t.add(me);let Ce=new se(new $e(.05,.05),new un({color:16722474}));Ce.position.set(-5.7,Mt.top+.1,6.895),t.add(Ce);let Ae=new Ge;Ae.position.set(oc.x,Mt.top,oc.z),Ae.add(mt(.09,.03,.17,de,0,.015,0));let _e=Xs(128,96,(I,te,ve,le="")=>{I.fillStyle="#c8e6c9",I.fillRect(0,0,te,ve),I.fillStyle="#123",I.font="700 22px monospace",I.textAlign="center",I.fillText(le||"CB",te/2,ve/2+8)}),Fe=new se(new $e(.07,.05),new un({map:_e.tex}));Fe.rotation.x=-Math.PI/2+.3,Fe.position.set(0,.033,.04),Ae.add(Fe),Ae.traverse(I=>{I.isMesh&&(I.userData.interact={kind:"card"})}),e.push(Ae),t.add(Ae);let U=Xs(512,256,(I,te,ve,le=!1)=>{I.fillStyle="#fbfaf6",I.fillRect(0,0,te,ve),I.strokeStyle=le?"#2e9c5d":"#c0392b",I.lineWidth=18,I.strokeRect(9,9,te-18,ve-18),I.fillStyle=le?"#2e9c5d":"#c0392b",I.font="800 120px Outfit, Arial",I.textAlign="center",I.textBaseline="middle",I.fillText(le?"OUVERT":"FERM\xC9",te/2,ve/2+6)}),ge=new Ge;ge.position.set(lc.x,1.7,lc.z-.08);let Y=new se(new Je(.8,.4,.02),[de,de,de,de,new Ee({map:U.tex,roughness:.5}),new Ee({map:U.tex,roughness:.5})]);ge.add(Y);for(let I of[-1,1]){let te=new se(new rt(.003,.003,.6),de);te.position.set(I*.3,.5,0),ge.add(te)}ge.traverse(I=>{I.isMesh&&(I.userData.interact={kind:"sign"})}),e.push(ge),t.add(ge);let xe=kt(9136709,{roughness:.6});t.add(mt(4,.05,.3,xe,-6,1.75,Be.minZ+.3)),t.add(mt(4,.05,.3,xe,-6,2.35,Be.minZ+.3));let J=new Ee({color:13936698,metalness:1,roughness:.22});J.userData.reflective=!0;let Le=new Vi([[0,0],[.07,0],[.07,.02],[.02,.04],[.02,.12],[.08,.16],[.09,.26],[0,.26]].map(I=>new fe(I[0],I[1])),24);for(let I=0;I<7;I++){let te=new se(Le,J),ve=.7+I%3*.25;te.scale.setScalar(ve),te.position.set(-7.6+I*.5,I%2?1.775:2.375,Be.minZ+.3),te.castShadow=!0,t.add(te)}[["TOURNOI D'\xC9T\xC9","Simple & double \xB7 12 au 20 juillet","#d9673a"],["\xC9COLE DE TENNIS","Mini-tennis d\xE8s 5 ans","#2f6fe0"],["D\xC9COUVRE LE PADEL","S\xE9ance d'initiation gratuite","#1f6b4a"]].forEach(([I,te,ve],le)=>{let re=Ct(400,560,(ae,pe,Ie)=>{ae.fillStyle=ve,ae.fillRect(0,0,pe,Ie),ae.fillStyle="rgba(255,255,255,0.12)",ae.beginPath(),ae.arc(pe*.75,Ie*.3,150,0,Math.PI*2),ae.fill(),ae.fillStyle="#e4f05a",ae.beginPath(),ae.arc(pe*.72,Ie*.32,60,0,Math.PI*2),ae.fill(),ae.fillStyle="#ffffff",ae.font="800 46px Outfit, Arial",ae.textAlign="left",I.split(" ").forEach((ht,ut)=>ae.fillText(ht,30,Ie*.6+ut*50)),ae.font="500 24px Outfit, Arial",ae.fillText(te,30,Ie-40)}),L=new se(new $e(.8,1.12),new Ee({map:re,roughness:.6}));L.position.set(Be.minX+.14,2,9+le*1.2),L.rotation.y=Math.PI/2,t.add(L)});let T=Xs(256,256,(I,te,ve,le=480)=>{I.clearRect(0,0,te,ve),I.fillStyle="#ffffff",I.beginPath(),I.arc(te/2,ve/2,120,0,Math.PI*2),I.fill(),I.strokeStyle="#1b2420",I.lineWidth=10,I.stroke();for(let ae=0;ae<12;ae++){let pe=ae/12*Math.PI*2;I.lineWidth=6,I.beginPath(),I.moveTo(te/2+Math.sin(pe)*100,ve/2-Math.cos(pe)*100),I.lineTo(te/2+Math.sin(pe)*86,ve/2-Math.cos(pe)*86),I.stroke()}let re=le/60%12/12*Math.PI*2,L=le%60/60*Math.PI*2;I.lineCap="round",I.lineWidth=10,I.beginPath(),I.moveTo(te/2,ve/2),I.lineTo(te/2+Math.sin(re)*58,ve/2-Math.cos(re)*58),I.stroke(),I.lineWidth=6,I.beginPath(),I.moveTo(te/2,ve/2),I.lineTo(te/2+Math.sin(L)*90,ve/2-Math.cos(L)*90),I.stroke()}),E=new se(new Hs(.3,32),new Ee({map:T.tex,transparent:!0,roughness:.4}));E.position.set(-2.2,3.1,Be.minZ+.14),t.add(E);let B=kt(2830131,{roughness:.5}),ue=kt(4160052,{roughness:.8}),ce=new qa(.42,2);for(let{x:I,z:te}of hc){t.add(mt(.5,.55,.5,B,I,.275,te));let ve=new se(ce,ue);ve.position.set(I,.95,te),ve.scale.set(1,1.3,1),ve.castShadow=!0,t.add(ve)}t.add(mt(2,.012,1.2,kt(3813926,{roughness:1}),0,.03,13.2,{cast:!1}));let oe=kt(10517074,{roughness:.6}),Re=kt(3159354,{metalness:.6,roughness:.4});{let I=uc;t.add(mt(I.w,.06,I.d,oe,I.x,.46,I.z));for(let te of[I.x-I.w/2+.2,I.x+I.w/2-.2])t.add(mt(.06,.44,.38,Re,te,.22,I.z))}let Me=new Ge;t.add(Me);let Se={},Ne=(I,te)=>{Se[I]??(Se[I]=Ct(256,160,(le,re,L)=>{le.fillStyle="#fbfaf6",le.fillRect(0,0,re,L),le.fillStyle=te,le.fillRect(0,0,re,44),le.fillStyle="#ffffff",le.font="700 26px Outfit, Arial",le.textAlign="center",le.fillText(I.split("|")[0],re/2,31),le.fillStyle="#1b2420",le.font="600 30px Outfit, Arial",le.fillText(I.split("|")[1]??"",re/2,104)}));let ve=new se(new Je(.16,.006,.1),[kt(16777215),kt(16777215),new Ee({map:Se[I]}),kt(16777215),kt(16777215),kt(16777215)]);return ve.position.y=.004,ve},ke=new Map;function he(I){let te=new Set(I.items.map(le=>le.uid));for(let[le,re]of ke)te.has(le)||(Me.remove(re),ke.delete(le));let ve=I.items.length;I.items.forEach((le,re)=>{let L=ke.get(le.uid);if(!L){le.kind==="product"?L=uo(le.product):le.kind==="booking"?L=Ne(`R\xC9SERVATION|${le.label.split(" \xB7")[0]}`,"#d9673a"):L=Ne("LICENCE|Saison 2026","#1f6b4a");let pe=new Ge;pe.add(L);let Ie=new se(new Je(.2,.28,.2),new un({visible:!1}));Ie.position.y=.12,pe.add(Ie),(le.product==="racket"||le.product==="padelracket")&&(L.rotation.x=-Math.PI/2,L.position.y=.03),pe.traverse(Oe=>{Oe.userData.interact={kind:"scan",uid:le.uid}}),pe.userData.uid=le.uid,Me.add(pe),ke.set(le.uid,pe),L=pe}let ae=Rr.x-.55+(ve===1?.55:re/(ve-1)*1.1);L.userData.home=new D(ae,Mt.top+.01,Rr.z+(re%2?.08:-.06)),L.userData.placed||(L.position.copy(L.userData.home).add(new D(0,0,.4)),L.userData.placed=!0),L.userData.scanned=le.scanned,L.traverse(pe=>{pe.userData.interact&&(pe.userData.interact.done=le.scanned)})}),W.redraw(I)}let st=new D(-3.95,Mt.top+.02,7);function Ke(I){for(let te of ke.values()){let ve=te.userData.scanned?st:te.userData.home;te.position.lerp(ve,1-Math.exp(-10*I));let le=te.userData.scanned?Math.max(.01,te.scale.x-I*2.5):1;te.scale.setScalar(le),te.visible=le>.02}}let We=mt(.3,.32,.18,kt(13214315,{roughness:.9}),st.x,Mt.top+.16,st.z);t.add(We);function De(I,te,ve,le=null){if(I.fillStyle="#0f1418",I.fillRect(0,0,te,ve),I.fillStyle="#1f6b4a",I.fillRect(0,0,te,44),I.fillStyle="#ffffff",I.font="700 24px Outfit, Arial",I.textAlign="left",I.fillText("CAISSE",16,30),!le||!le.cust){I.fillStyle="rgba(255,255,255,0.5)",I.font="500 26px Outfit, Arial",I.textAlign="center",I.fillText("En attente d'un client",te/2,ve/2+10);return}I.font="500 22px Outfit, Arial";let re=76;for(let L of le.items.filter(ae=>ae.scanned).slice(-6))I.fillStyle="#d7dee3",I.textAlign="left",I.fillText(L.label,16,re),I.textAlign="right",I.fillText(Ve(L.price),te-16,re),re+=32;I.fillStyle="#e4f05a",I.font="800 34px Outfit, Arial",I.textAlign="left",I.fillText("TOTAL",16,ve-80),I.textAlign="right",I.fillText(Ve(le.total),te-16,ve-80),le.phase==="pay"&&(I.font="600 24px Outfit, Arial",I.fillStyle="#ffffff",I.textAlign="left",le.method==="card"?I.fillText("Paiement par carte",16,ve-34):(I.fillText(`Donn\xE9 ${Ve(le.given)}`,16,ve-34),I.textAlign="right",I.fillStyle="#7ee39a",I.fillText(`\xC0 rendre ${Ve(le.given-le.total)}`,te-16,ve-34)))}let we=-1;return{showCounter:he,animateCounter:Ke,setOpen:I=>U.redraw(I),setTerminal:I=>_e.redraw(I),update(I,te){Math.floor(I)!==we&&(we=Math.floor(I),T.redraw(I)),w.material.emissiveIntensity=.25+te*1.2}}}var av=[.16,.72,1.28],bi=2.1,si=.6,ov={balls:[5,2,.15,.2],padelballs:[5,2,.15,.2],water:[6,2,.13,.2],iso:[6,2,.13,.2],grip:[6,2,.14,.2],racket:[2,2,.8,.24],padelracket:[2,2,.8,.26],cap:[4,2,.32,.24]},_c=new Ee({color:2896182,metalness:.7,roughness:.35}),lv=new Ee({color:15921129,roughness:.5}),cv=new Ee({color:2059082,roughness:.7});function hv(){let i=document.createElement("canvas");i.width=512,i.height=96;let e=new dn(i);return e.colorSpace=pt,e.anisotropy=4,{c:i,t:e}}function uv(i,e,t,n){let s=i.c.getContext("2d"),r=i.c.width,a=i.c.height;s.fillStyle=e?"#fbfaf6":"#e9e6df",s.fillRect(0,0,r,a),e?(s.fillStyle=Qe[e].color,s.fillRect(0,0,14,a),s.fillStyle="#1b2420",s.font="600 34px Outfit, Arial",s.textAlign="left",s.textBaseline="middle",s.fillText(Qe[e].short,30,a/2),s.textAlign="right",s.font="800 44px Outfit, Arial",s.fillStyle="#c0392b",s.fillText(Ve(t),r-18,a/2+2),n===0&&(s.fillStyle="rgba(192,57,43,0.12)",s.fillRect(0,0,r,a))):(s.fillStyle="#8a918d",s.font="500 30px Outfit, Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("Emplacement libre",r/2,a/2)),i.t.needsUpdate=!0}function wd(i,e,t){let n=Mi.map((a,o)=>{let l=new Ge;l.position.set(a.x,0,a.z),l.rotation.y=a.facing,i.add(l);let c=new se(new $e(bi,si),new un({color:2059082,transparent:!0,opacity:.18}));return c.rotation.x=-Math.PI/2,c.position.y=.03,l.add(c),{slot:a,g:l,mark:c,built:null,levels:[]}});function s(a,o){let l=new Ge;a.g.add(l);let c=(h,u,p,f,_)=>{let v=new se(h,u);return v.position.set(p,f,_),v.castShadow=v.receiveShadow=!0,l.add(v),v};for(let h of[-bi/2+.03,bi/2-.03])for(let u of[-si/2+.03,si/2-.03])c(new Je(.04,1.9,.04),_c,h,.95,u);c(new Je(bi,1.75,.02),cv,0,.98,-si/2+.01),c(new Je(bi,.06,si),_c,0,1.9,0),a.levels=av.map((h,u)=>{c(new Je(bi-.02,.03,si-.04),lv,0,h-.015,.01);let p=hv(),f=new se(new $e(.5,.094),new Ee({map:p.t,roughness:.5}));f.position.set(0,h-.05,si/2-.005),l.add(f);let _=new se(new Je(bi-.02,.05,.01),_c);_.position.set(0,h-.05,si/2-.02),l.add(_);let v=new se(new Je(bi-.1,.5,si),new un({visible:!1}));v.position.set(0,h+.25,.02),v.userData.interact={kind:"shelf",shelf:o,level:u},l.add(v),e.push(v);let g=new Ge;return g.position.set(0,h,0),l.add(g),{tag:p,items:g,y:h,key:""}}),a.built=l,a.mark.visible=!1}function r(a){let o=n[a],l=t.shelves[a];l.built&&!o.built&&s(o,a),l.built&&l.levels.forEach((c,h)=>{let u=o.levels[h],p=c.product?t.prices[c.product]:0,f=`${c.product}|${c.qty}|${p}`;if(f===u.key||(u.key=f,uv(u.tag,c.product,p,c.qty),u.items.clear(),!c.product))return;let[_,v,g,d]=ov[c.product];for(let m=0;m<c.qty;m++){let x=Math.floor(m/_),y=m%_,R=uo(c.product),b=(y-(_-1)/2)*g,w=.12-x*d;c.product==="racket"||c.product==="padelracket"?(R.rotation.set(-Math.PI/2,0,Math.PI/2),R.position.set(b+.3,.025,w-.02)):R.position.set(b,0,w),u.items.add(R)}})}return n.forEach((a,o)=>r(o)),{refresh:r,refreshAll:()=>n.forEach((a,o)=>r(o)),invalidate:()=>{for(let a of n)for(let o of a.levels)o.key="";n.forEach((a,o)=>r(o))}}}var ns=(i,e={})=>new Ee({color:i,roughness:.6,...e}),vc=ns(2046508,{metalness:.5,roughness:.45}),Si=ns(1382427,{metalness:.5,roughness:.4}),Sn=ns(16053488,{roughness:.5});function Et(i,e,t=0,n=0,s=0,r=!0){let a=new se(i,e);return a.position.set(t,n,s),a.castShadow=r,a.receiveShadow=!0,a}function dv(i,e,t=2){let n=new Ge;if(t>0){let a=new se(new $e(i,t),ns(1919541,{roughness:.9,side:At}));a.position.y=t/2,a.castShadow=!0,n.add(a)}let s=Dr("fence","rgba(40,60,50,0.9)",16,2).clone();s.needsUpdate=!0,s.wrapS=s.wrapT=hn,s.repeat.set(i*6,(e-t)*6);let r=new se(new $e(i,e-t),new Ee({map:s,alphaTest:.3,side:At,roughness:.6}));return r.position.y=t+(e-t)/2,n.add(r),n}function Ad(i,e,t){let n=new Ge;n.add(Et(new rt(.09,.12,8,10),Si,0,4,0));let s=Et(new Je(.9,.25,.45),Si,0,8.1,.2);s.rotation.x=.5;let r=new se(new $e(.8,.38),new un({color:3816768,side:At}));r.position.set(0,8,.44),r.rotation.x=-1.07;let a=new ks(new Hi({map:pv(),color:16773584,transparent:!0,blending:_a,depthWrite:!1}));return a.scale.set(3.2,3.2,1),a.position.set(0,7.95,.5),a.visible=!1,r.userData.glow=a,n.add(s,r,a),n.position.set(i,0,e),n.rotation.y=t,{g:n,lens:r}}var fv=null;function pv(){return fv??(fv=Ct(64,64,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,240,200,0.6)"),n.addColorStop(1,"rgba(255,240,200,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)}))}function fo(i,e){return Ct(512,300,(t,n,s)=>{t.fillStyle="#fbfaf6",t.fillRect(0,0,n,s),t.fillStyle=e,t.fillRect(0,0,n,70),t.fillStyle="#ffffff",t.font="800 44px Outfit, Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(i[0],n/2,37),t.fillStyle="#1b2420",t.font="600 38px Outfit, Arial",i.slice(1).forEach((r,a)=>t.fillText(r,n/2,130+a*62))})}function mv(i){let e=new Ge,t=Un,n=i.surface==="clay"?pd():md(),s=Et(new $e(t.w,t.l),new Ee({map:n,roughness:i.surface==="clay"?.95:.7}),0,.03,0,!1);s.rotation.x=-Math.PI/2,s.userData.interact={kind:"court",court:i.id},e.add(s);let r=new se(new $e(t.w,t.l),new Ee({map:gc(i.surface),transparent:!0,opacity:0,depthWrite:!1,roughness:1}));r.rotation.x=-Math.PI/2,r.position.y=.036,r.receiveShadow=!0,e.add(r);for(let m of[-1,1])e.add(Et(new rt(.04,.04,1.07,12),vc,m*6.4,.535,0));let a=Dr("net2","rgba(15,15,15,1)",16,1.5).clone();a.needsUpdate=!0,a.wrapS=a.wrapT=hn,a.repeat.set(12.8*4,.95*4);let o=new se(new $e(12.8,.95),new Ee({map:a,transparent:!0,opacity:.9,depthWrite:!1,side:At}));o.position.y=.52,o.castShadow=!0,e.add(o),e.add(Et(new Je(12.8,.06,.03),Sn,0,.99,0)),e.add(Et(new Je(.05,.92,.02),Sn,0,.5,0));let l=3.5,c=-t.w/2,h=t.w/2,u=-t.l/2,p=t.l/2,f=(m,x,y,R)=>{let b=Math.hypot(y-m,R-x),w=dv(b,l,x===R?2:0);w.position.set((m+y)/2,0,(x+R)/2),w.rotation.y=Math.atan2(y-m,R-x)-Math.PI/2,e.add(w);let C=Math.ceil(b/3);for(let M=0;M<=C;M++)e.add(Et(new rt(.04,.04,l,8),vc,m+(y-m)*M/C,l/2,x+(R-x)*M/C))};f(c,p,-.9,p),f(.9,p,h,p),f(c,u,h,u),f(c,u,c,p),f(h,u,h,p),e.add(Et(new Je(1.8,.06,.06),vc,0,2.3,p));let _=new Ge;for(let[m,x]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]])_.add(Et(new rt(.025,.025,1.8),Sn,m,.9,x));_.add(Et(new Je(.7,.06,.7),Sn,0,1.8,0)),_.add(Et(new Je(.05,.5,.7),Sn,-.33,2.08,0)),_.position.set(-7.4,0,0),e.add(_);let v=ns(10517074,{roughness:.6});for(let m of[-2.2,2.2])e.add(Et(new Je(.42,.05,1.6),v,-7.9,.46,m)),e.add(Et(new Je(.06,.44,.06),Si,-7.9,.22,m-.7)),e.add(Et(new Je(.06,.44,.06),Si,-7.9,.22,m+.7));let g=new se(new $e(1.2,.7),new Ee({map:fo([i.label.toUpperCase()],i.surface==="clay"?"#d9673a":"#2f5d9e")}));g.position.set(2.2,2.6,p+.05),e.add(g);let d=[[c-.6,-9,Math.PI/2],[c-.6,9,Math.PI/2],[h+.6,-9,-Math.PI/2],[h+.6,9,-Math.PI/2]].map(([m,x,y])=>{let R=Ad(m,x,y);return e.add(R.g),R.lens});return{g:e,wear:r,lights:d,surface:s}}function gv(i){let e=new Ge,t=Et(new $e(es.w,es.l),ns(10132116,{roughness:.9}),0,.025,0,!1);t.rotation.x=-Math.PI/2,e.add(t);let n=Et(new $e(10,20),new Ee({map:gd(),roughness:.9}),0,.032,0,!1);n.rotation.x=-Math.PI/2,n.userData.interact={kind:"court",court:i.id},e.add(n);let s=new se(new $e(10,20),new Ee({map:gc("padel"),transparent:!0,opacity:0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.038,e.add(s);let r=new Ee({color:14085362,roughness:.05,metalness:.1,transparent:!0,opacity:.22,side:At,depthWrite:!1,envMapIntensity:1.6});r.userData.reflective=!0;let a=(p,f,_,v,g,d)=>{let m=new se(new $e(p,f),r);m.position.set(_,v,g),m.rotation.y=d,e.add(m)},o=(p,f,_,v,g,d)=>{let m=Dr("padelmesh","rgba(20,20,20,0.9)",12,2).clone();m.needsUpdate=!0,m.wrapS=m.wrapT=hn,m.repeat.set(p*6,f*6);let x=new se(new $e(p,f),new Ee({map:m,alphaTest:.3,side:At}));x.position.set(_,v,g),x.rotation.y=d,e.add(x)};for(let p of[-1,1]){for(let f=0;f<5;f++)a(1.96,3,-4+f*2,1.5,p*10,0);o(10,1,0,3.5,p*10,0)}for(let p of[-1,1])for(let f of[-1,1])a(1.96,3,p*5,1.5,f*9,Math.PI/2),a(1.96,2,p*5,1,f*7,Math.PI/2),o(5.25,3,p*5,1.5,f*(.75+5.25/2+0),Math.PI/2);for(let p of[-1,1])for(let f=-10;f<=10;f+=2)e.add(Et(new Je(.08,f===-10||f===10?4:3,.08),Si,p*5,(f===-10||f===10?4:3)/2,f));for(let p of[-1,1])for(let f=-4;f<=4;f+=2)e.add(Et(new Je(.08,4,.08),Si,f,2,p*10));let l=Dr("net2","rgba(15,15,15,1)",16,1.5).clone();l.needsUpdate=!0,l.wrapS=l.wrapT=hn,l.repeat.set(9.2*4,.86*4);let c=new se(new $e(9.2,.86),new Ee({map:l,transparent:!0,opacity:.9,depthWrite:!1,side:At}));c.position.y=.48,e.add(c),e.add(Et(new Je(9.2,.05,.03),Sn,0,.9,0));for(let p of[-1,1])e.add(Et(new rt(.04,.04,.95),Si,p*4.6,.47,0));let h=new se(new $e(1.2,.7),new Ee({map:fo([i.label.toUpperCase()],"#1f6b4a")}));h.position.set(0,3.5,10.06),e.add(h);let u=[[-5.8,-6,Math.PI/2],[-5.8,6,Math.PI/2],[5.8,-6,-Math.PI/2],[5.8,6,-Math.PI/2]].map(([p,f,_])=>{let v=Ad(p,f,_);return e.add(v.g),v.lens});return{g:e,wear:s,lights:u,surface:n}}function xv(i,e){let t=new Ge,n=e==="tennis"?Un:es,s=hd().clone();s.needsUpdate=!0,s.wrapS=s.wrapT=hn,s.repeat.set(n.w/3,n.l/3);let r=Et(new $e(n.w,n.l),new Ee({map:s,roughness:1}),0,.02,0,!1);r.rotation.x=-Math.PI/2,t.add(r);let a=ns(16738842,{roughness:.7}),o=[[-n.w/2,-n.l/2],[n.w/2,-n.l/2],[n.w/2,n.l/2],[-n.w/2,n.l/2]];o.forEach(([u,p],f)=>{t.add(Et(new rt(.04,.04,1),Sn,u,.5,p));let[_,v]=o[(f+1)%4],g=Math.hypot(_-u,v-p),d=Et(new Je(g,.06,.01),a,(u+_)/2,.85,(p+v)/2,!1);d.rotation.y=-Math.atan2(v-p,_-u),t.add(d)});let l=new Ge,c=new Ee({map:fo([i.label.toUpperCase(),rn[i.surface].name,"",""],"#d9673a"),roughness:.6}),h=new se(new Je(1.8,1.05,.05),[Sn,Sn,Sn,Sn,c,Sn]);h.position.y=1.5,h.castShadow=!0,l.add(h);for(let u of[-1,1])l.add(Et(new rt(.035,.035,1.5),Si,u*.75,.75,-.03));return l.position.set(0,0,n.l/2-1.2),t.add(l),{g:t,signMat:c,def:i}}function Rd(i,e,t,n){let s={},r=null;for(let d of Lt){let m=En[d.id],x=rn[d.surface].sport,y=new Ge;y.position.set(m.cx,0,m.cz),i.add(y),s[d.id]={def:d,slot:m,sport:x,root:y,built:null,plot:null}}function a(d){let m=[d.def.label.toUpperCase(),rn[d.def.surface].name,ts(d.def.price),e.level>=d.def.level?"\xC0 construire":`Niveau ${d.def.level} requis`];d.plot.signMat.map?.dispose(),d.plot.signMat.map=fo(m,e.level>=d.def.level?"#1f6b4a":"#8a918d"),d.plot.signMat.needsUpdate=!0}function o(d){let m=s[d],x=e.courts[d];x.built&&!m.built&&(m.plot&&(m.root.remove(m.plot.g),m.plot=null),m.built=m.sport==="tennis"?mv(m.def):gv(m.def),m.root.add(m.built.g),t.push(m.built.surface)),!x.built&&!m.plot&&(m.plot=xv(m.def,m.sport),m.root.add(m.plot.g)),m.plot&&a(m),m.built&&(m.built.wear.material.opacity=at(x.wear*1.1,0,1),g(m))}for(let d of Object.keys(s))o(d);let l=new sn(.033,12,10),c=new Ee({color:15003738,roughness:.6,emissive:2107392}),h=new Map;function u(d,m,x,y){let R=new se(l,c);R.castShadow=!0,i.add(R);let b={id:d,persons:m,sport:x,viewOf:y,ball:R,hitter:0,receiver:1,t:0,dur:1,from:new D,bounce:new D,to:new D,pause:1.2};h.set(d,b),f(b,!0)}function p(d){let m=h.get(d);if(m){i.remove(m.ball);for(let x of m.persons){let y=m.viewOf(x);y&&(y.offsetX=0,y.offsetZ=0)}h.delete(d)}}function f(d,m=!1){let x=En[d.id],y=d.persons.map(O=>O.z>=x.cz?1:-1);m&&(d.hitter=0);let R=y[d.hitter],b=d.persons.map((O,z)=>z).filter(O=>y[O]!==R);d.receiver=b[Math.floor(Math.random()*b.length)];let w=d.persons[d.hitter],C=d.persons[d.receiver],M=d.viewOf(w),S=d.viewOf(C);d.from.set(w.x+(M?.offsetX??0),1,w.z);let N=d.sport==="tennis"?4.2:3.6,H=d.sport==="tennis"?xt(4,10.5):xt(2.5,8);d.bounce.set(x.cx+xt(-N,N),.03,x.cz-R*H);let ee=d.sport==="tennis"?3.6:2.2;d.targetOffset=at(d.bounce.x-C.x,-ee,ee),d.to.set(C.x+d.targetOffset,1,C.z);let P=d.from.distanceTo(d.to);d.dur=(d.sport==="tennis"?.9:.75)+P*.028,d.t=0,d.swung=!1,M&&M.swing(),n?.(d.from)}function _(d){for(let m of h.values()){if(m.pause>0){m.pause-=d,m.ball.visible=!1;continue}m.ball.visible=!0,m.t+=d;let x=at(m.t/m.dur,0,1),y=.62;if(x<y){let w=x/y;m.ball.position.lerpVectors(m.from,m.bounce,w),m.ball.position.y=Ji.lerp(m.from.y,.03,w)+Math.sin(w*Math.PI)*(m.sport==="tennis"?1.5:1.1)}else{let w=(x-y)/(1-y);m.ball.position.lerpVectors(m.bounce,m.to,w),m.ball.position.y=Ji.lerp(.03,m.to.y,w)+Math.sin(w*Math.PI)*.7}let R=m.persons[m.receiver],b=m.viewOf(R);b&&(b.offsetX+=(m.targetOffset-b.offsetX)*(1-Math.exp(-4*d)));for(let w of m.persons){if(w===R)continue;let C=m.viewOf(w);C&&(C.offsetX*=Math.exp(-2*d))}!m.swung&&m.t>m.dur-.3&&(m.swung=!0,b?.swing()),x>=1&&(m.hitter=m.receiver,Math.random()<.12&&(m.pause=xt(1.5,3)),f(m))}}function v(d){if(d!==r){r=d;for(let m of Object.values(s))g(m)}}function g(d){if(!d.built)return;let m=!!r;for(let y of d.built.lights)y.material.color.set(m?16773846:3816768),y.userData.glow.visible=m;let x=d.built.surface.material;x.emissive.set(m?16777215:0),x.emissiveMap=m?x.map:null,x.emissiveIntensity=m?.45:0,x.needsUpdate=!0}return{refresh:o,refreshAll:()=>Object.keys(s).forEach(o),startSession:u,endSession:p,update:_,setNight:v,views:s}}var _v=[15979187,15251604,13209190,10249796,7226928,16243909],vv=[2825492,5913122,9200185,14201450,1710618,10506797,13224393],yv=[16777215,2059082,3108832,14699082,15911244,8015830,1382170,16747069,4175782,16032696],Mv=[16777215,1780292,1382170,3817544,2772858],it={},yc=new Map,Vn=(i,e=.7)=>{let t=i+":"+e;return yc.has(t)||yc.set(t,new Ee({color:i,roughness:e})),yc.get(t)};function po(i,e,t){var s;it[s="cap"+i+e]??(it[s]=new vi(e,i,6,14).translate(0,-i/2-e*.3,0));let n=new se(it["cap"+i+e],t);return n.castShadow=!0,n}function Cd(i){let e=bv(Math.floor(i.seed*1e9)),t=C=>C[Math.floor(e()*C.length)],n=i.role==="reception"||i.role==="keeper",s=Vn(t(_v),.6),r=Vn(t(vv),.8),a=Vn(n?i.role==="reception"?2059082:7043642:t(yv),.75),o=Vn(n?1780292:t(Mv),.75),l=Vn(n?2763306:16053488,.5),c=e()<.48,h=.92+e()*.16,u=new Ge,p=new Ge;u.add(p);let f=new Ge;f.position.y=.92,p.add(f);let _=new se(it.pelvis??(it.pelvis=new vi(.15,.08,6,14).rotateZ(Math.PI/2)),o);_.scale.set(1,1,.75),_.castShadow=!0,f.add(_);let v=new se(it.torso??(it.torso=new vi(.16,.34,8,16).translate(0,.3,0)),a);if(v.scale.set(1.05,1,c?.68:.72),v.castShadow=!0,f.add(v),c&&!n&&e()<.6){let C=new se(it.skirt??(it.skirt=new rt(.16,.25,.26,18,1,!0).translate(0,-.08,0)),Vn(o.color.getHex(),.75));C.material.side=At,C.castShadow=!0,f.add(C)}let g=new Ge;g.position.y=.66,f.add(g);let d=new se(it.neck??(it.neck=new rt(.05,.055,.1,10).translate(0,.04,0)),s);g.add(d);let m=new se(it.head??(it.head=new sn(.115,24,18)),s);m.scale.set(.92,1.08,1),m.position.y=.2,m.castShadow=!0,g.add(m);let x=new se(it.hair??(it.hair=new sn(.122,24,14,0,Math.PI*2,0,Math.PI*.55)),r);if(x.scale.set(.95,1.08,1.04),x.position.set(0,.215,-.012),x.rotation.x=-.25,g.add(x),c&&e()<.7){let C=new se(it.tail??(it.tail=new vi(.035,.14,4,8)),r);C.position.set(0,.18,-.13),C.rotation.x=.5,g.add(C)}if(!n&&e()<.3){let C=new se(it.band??(it.band=new $i(.112,.016,8,24)),Vn(16777215,.8));C.rotation.x=Math.PI/2-.15,C.position.y=.25,g.add(C)}for(let C of[-1,1]){let M=new se(it.eye??(it.eye=new sn(.012,8,6)),Vn(1776411,.3));M.position.set(C*.04,.215,.103),g.add(M)}let y={};for(let[C,M]of[["L",1],["R",-1]]){let S=new Ge;S.position.set(.215*M,.55,0),f.add(S);let N=po(.2,.05,a);S.add(N);let H=new Ge;H.position.y=-.27,S.add(H);let ee=po(.19,.042,s);H.add(ee);let P=new Ge;P.position.y=-.27,H.add(P),P.add(new se(it.hand??(it.hand=new sn(.045,12,10)),s)),y["shoulder"+C]=S,y["elbow"+C]=H,y["hand"+C]=P;let O=new Ge;O.position.set(.095*M,.9,0),p.add(O);let z=po(.3,.07,c&&!n?s:o);O.add(z);let q=new Ge;q.position.y=-.42,O.add(q);let Z=po(.3,.055,n?o:s);q.add(Z);let $=new se(it.foot??(it.foot=new vi(.05,.12,4,10).rotateX(Math.PI/2).translate(0,-.42,.04)),l);$.castShadow=!0,q.add($),y["hip"+C]=O,y["knee"+C]=q}let R=null;i.holdsRacket&&(R=xc(i.cust?.sport==="padel"),R.rotation.x=Math.PI/2,R.position.set(0,-.02,.02),R.scale.setScalar(1),y.handR.add(R));let b=null;if(i.role==="keeper"){b=new Ge;let C=new se(new rt(.015,.015,1.4,8),Vn(10189386,.6));C.position.y=-.5;let M=new se(new Je(.9,.06,.14),Vn(3815994,.9));M.position.y=-1.2,b.add(C,M),b.rotation.x=.5,y.handR.add(b)}return u.scale.setScalar(h),u.traverse(C=>{C.isMesh&&(C.receiveShadow=!1)}),{root:u,body:p,hips:f,neck:g,limbs:y,racket:R,phase:e()*10,speed:0,swingT:-1,lastX:i.x,lastZ:i.z,offsetX:0,offsetZ:0,lookYaw:0,bubble:null,bubbleT:0,swing(){this.swingT=0},update(C,M){let S=(M.x-this.lastX)/Math.max(C,1e-4),N=(M.z-this.lastZ)/Math.max(C,1e-4);this.lastX=M.x,this.lastZ=M.z;let H=Math.min(3,Math.hypot(S,N));this.speed=Dt(this.speed,H,10,C),u.position.set(M.x+this.offsetX,0,M.z+this.offsetZ);let ee=M.rot;M.look&&M.action==="browse"&&(ee=Math.atan2(M.look.x-M.x,M.look.z-M.z)),u.rotation.y=ju(u.rotation.y,ee,10,C);let P=this.limbs,O=at(this.speed/1.4,0,1.4);this.phase+=C*(2.2+this.speed*3.2);let z=Math.sin(this.phase),q=z*.55*O,Z=-z*.55*O,$=Math.max(0,-Math.cos(this.phase))*.8*O,ie=Math.max(0,Math.cos(this.phase))*.8*O,Q=-z*.45*O,de=z*.45*O,W=-.25,k=-.25,K=.06,j=-.06,me=Math.abs(Math.cos(this.phase))*.035*O,Ce=0,Ae=.03*O;if(M.action==="play"){let _e=1-O;$+=.35*_e,ie+=.35*_e,q-=.2*_e,Z-=.2*_e,Ae+=.18*_e,me-=.06*_e,de=-.7,k=-.9,Q=-.4,W=-.8,me+=Math.abs(Math.sin(this.phase*1.8))*.025*_e}else if(M.action==="browse")de=-1+Math.sin(this.phase*.7)*.15,k=-.4,this.neck.rotation.x=.15;else if(M.action==="clean"){let _e=Math.sin(this.phase*1.4);de=-.6+_e*.35,Q=-.6+_e*.35,k=-.5,W=-.5,Ae+=.2}else M.role==="reception"&&(de=-.35,Q=-.35,k=-1.2,W=-1.2);if(M.action!=="browse"&&(this.neck.rotation.x=Dt(this.neck.rotation.x,0,6,C)),this.swingT>=0){this.swingT+=C;let _e=this.swingT/.55;_e>=1?this.swingT=-1:(Ce=_e<.4?-.9*(_e/.4):-.9+1.8*Math.min(1,(_e-.4)/.35),de=-1.2,k=-.3,j=_e<.4?-.9:.4)}P.hipL.rotation.x=Dt(P.hipL.rotation.x,-q,14,C),P.hipR.rotation.x=Dt(P.hipR.rotation.x,-Z,14,C),P.kneeL.rotation.x=Dt(P.kneeL.rotation.x,$,14,C),P.kneeR.rotation.x=Dt(P.kneeR.rotation.x,ie,14,C),P.shoulderL.rotation.x=Dt(P.shoulderL.rotation.x,Q,12,C),P.shoulderR.rotation.x=Dt(P.shoulderR.rotation.x,de,16,C),P.shoulderL.rotation.z=Dt(P.shoulderL.rotation.z,K,12,C),P.shoulderR.rotation.z=Dt(P.shoulderR.rotation.z,j,16,C),P.elbowL.rotation.x=Dt(P.elbowL.rotation.x,W,12,C),P.elbowR.rotation.x=Dt(P.elbowR.rotation.x,k,12,C),this.hips.rotation.y=Dt(this.hips.rotation.y,Ce,16,C),this.hips.rotation.x=Dt(this.hips.rotation.x,Ae,8,C),this.body.position.y=me,this.bubble&&(this.bubbleT-=C,this.bubble.material.opacity=at(this.bubbleT/.4,0,1),this.bubble.position.y=2.15+(1-at(this.bubbleT/3,0,1))*.15,this.bubbleT<=0&&(u.remove(this.bubble),this.bubble.material.map.dispose(),this.bubble.material.dispose(),this.bubble=null))},say(C,M){this.bubble&&(u.remove(this.bubble),this.bubble.material.map.dispose(),this.bubble.material.dispose());let S=Ev(C,M),N=new ks(new Hi({map:S,transparent:!0,depthTest:!1})),H=S.image.width/S.image.height;N.scale.set(.42*H,.42,1),N.position.y=2.15,N.renderOrder=10,u.add(N),this.bubble=N,this.bubbleT=3.2}}}function Ev(i,e){let t=document.createElement("canvas"),n=t.getContext("2d");n.font="600 34px Outfit, Arial, sans-serif";let s=Math.ceil(n.measureText(i).width)+56,r=76;t.width=s,t.height=r+16;let a=t.getContext("2d");a.font="600 34px Outfit, Arial, sans-serif";let o=e==="good"?"#e9f8ee":e==="info"?"#ffffff":"#fff1ec",l=e==="good"?"#2e9c5d":e==="info"?"#9aa5a0":"#d9673a";a.fillStyle=o,a.strokeStyle=l,a.lineWidth=4,a.beginPath(),a.roundRect(2,2,s-4,r-4,30),a.fill(),a.stroke(),a.beginPath(),a.moveTo(s/2-12,r-3),a.lineTo(s/2,r+12),a.lineTo(s/2+12,r-3),a.fill(),a.fillStyle="#1b2420",a.textAlign="center",a.textBaseline="middle",a.fillText(i,s/2,r/2);let c=new dn(t);return c.colorSpace=pt,c}function bv(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Pd(i){let e=new Set,t={keys:e,lookX:0,lookY:0,locked:!1,fallback:!1,uiOpen:!1,onKey:null,onClick:null,onLockChange:null};addEventListener("keydown",l=>{t.uiOpen&&l.code!=="Escape"&&l.code!=="Tab"||(["Space","Tab","ArrowUp","ArrowDown"].includes(l.code)&&l.preventDefault(),l.repeat||t.onKey?.(l.code,l),e.add(l.code))}),addEventListener("keyup",l=>e.delete(l.code)),addEventListener("blur",()=>e.clear());let n=null,s=0,r=()=>{t.locked||t.fallback||(s++,s>=2&&(t.fallback=!0),t.onLockChange?.(!1,"fail"))},a=()=>{if(t.locked||t.uiOpen||t.fallback)return;let l=!1,c=()=>{l||t.locked||(l=!0,clearTimeout(n),r())};try{if(!i.requestPointerLock)return c();clearTimeout(n),n=setTimeout(c,700);let h=i.requestPointerLock();h&&h.catch&&h.catch(c)}catch{c()}};t.requestLock=a,t.exitLock=()=>{try{document.pointerLockElement&&document.exitPointerLock()}catch{}},document.addEventListener("pointerlockchange",()=>{let l=t.locked;t.locked=document.pointerLockElement===i,t.locked&&(clearTimeout(n),s=0),t.onLockChange?.(t.locked,l&&!t.locked?"exit":"change")}),document.addEventListener("pointerlockerror",r);let o=null;return i.addEventListener("mousedown",l=>{if(!t.uiOpen){if(t.locked){t.onClick?.(l.button===2?"secondary":"primary","down");return}if(!t.fallback){a();return}o={x:l.clientX,y:l.clientY,moved:0,button:l.button}}}),addEventListener("mouseup",l=>{if(t.locked){t.onClick?.(l.button===2?"secondary":"primary","up");return}o&&o.moved<6&&!t.uiOpen&&t.onClick?.(o.button===2?"secondary":"primary","down"),o=null}),addEventListener("mousemove",l=>{if(!t.uiOpen){if(t.locked){t.lookX+=l.movementX,t.lookY+=l.movementY;return}if(o){let c=l.clientX-o.x,h=l.clientY-o.y;o.moved+=Math.abs(c)+Math.abs(h),o.x=l.clientX,o.y=l.clientY,o.moved>=6&&(t.lookX+=c*1.6,t.lookY+=h*1.6)}}}),i.addEventListener("contextmenu",l=>l.preventDefault()),t.down=(...l)=>l.some(c=>e.has(c)),t.consumeLook=()=>{let l=[t.lookX,t.lookY];return t.lookX=t.lookY=0,l},t}var Sv=1.66,Ti=.3,mo=class{constructor(e){this.camera=e,this.pos=new D(0,0,18),this.yaw=Math.PI,this.pitch=-.05,this.vel=new fe,this.y=0,this.vy=0,this.bob=0,this.held=null,this.ray=new Ka,this.sensitivity=.0022,e.rotation.order="YXZ"}update(e,t,n,s){let[r,a]=t.consumeLook();this.yaw-=r*this.sensitivity,this.pitch=at(this.pitch-a*this.sensitivity,-1.45,1.45);let o=0,l=0;t.uiOpen||(t.down("KeyW","ArrowUp")&&(l-=1),t.down("KeyS","ArrowDown")&&(l+=1),t.down("KeyA","ArrowLeft")&&(o-=1),t.down("KeyD","ArrowRight")&&(o+=1));let c=Math.hypot(o,l)||1,h=t.down("ShiftLeft","ShiftRight")?5.6:3.6,u=Math.sin(this.yaw),p=Math.cos(this.yaw),f=(o*p+l*u)/c*h,_=(-o*u+l*p)/c*h;this.vel.x=Dt(this.vel.x,o||l?f:0,12,e),this.vel.y=Dt(this.vel.y,o||l?_:0,12,e),this.pos.x+=this.vel.x*e,this.resolve(n),this.pos.z+=this.vel.y*e,this.resolve(n),this.pos.x=at(this.pos.x,s.minX,s.maxX),this.pos.z=at(this.pos.z,s.minZ,s.maxZ);let v=this.y<=0;v&&!t.uiOpen&&t.down("Space")&&(this.vy=4.6),this.vy-=15*e,this.y=Math.max(0,this.y+this.vy*e),this.y===0&&this.vy<0&&(this.vy=0);let g=v?Math.hypot(this.vel.x,this.vel.y):0;this.bob+=e*g*2.2;let d=Math.sin(this.bob*2)*.03*Math.min(1,g/3);this.camera.position.set(this.pos.x,Sv+this.y+d,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0),this.stepPhase=this.bob}pushFrom(e){for(let t of e){let n=this.pos.x-t.x,s=this.pos.z-t.z,r=Math.hypot(n,s),a=Ti+.28;r<a&&r>1e-4&&(this.pos.x=t.x+n/r*a,this.pos.z=t.z+s/r*a)}}resolve(e){for(let t of e){let n=at(this.pos.x,t.minX,t.maxX),s=at(this.pos.z,t.minZ,t.maxZ),r=this.pos.x-n,a=this.pos.z-s,o=Math.hypot(r,a);if(o<Ti)if(o>1e-6)this.pos.x=n+r/o*Ti,this.pos.z=s+a/o*Ti;else{let l=[[t.minX-Ti-this.pos.x,0],[t.maxX+Ti-this.pos.x,0],[0,t.minZ-Ti-this.pos.z],[0,t.maxZ+Ti-this.pos.z]];l.sort((c,h)=>Math.hypot(...c)-Math.hypot(...h)),this.pos.x+=l[0][0],this.pos.z+=l[0][1]}}}aim(e,t=3.2){this.ray.setFromCamera(new fe(0,0),this.camera),this.ray.far=t;let n=this.ray.intersectObjects(e,!0);for(let s of n){let r=s.object;for(;r&&!r.userData.interact;)r=r.parent;if(r)return{...r.userData.interact,point:s.point,distance:s.distance,object:r}}return null}floorPoint(e=3){this.ray.setFromCamera(new fe(0,0),this.camera);let t=this.ray.ray.direction,n=this.ray.ray.origin;if(t.y>-.05)return null;let s=-n.y/t.y;return s>e?null:new D(n.x+t.x*s,0,n.z+t.z*s)}hold(e,t){this.held={box:e,mesh:t},this.camera.add(t),t.position.set(0,-.38,-.62),t.rotation.set(.08,0,0),t.traverse(n=>{n.castShadow=!1})}release(){let e=this.held;return e?(this.camera.remove(e.mesh),e.mesh.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),this.held=null,e):null}animateHeld(e){if(!this.held)return;let t=this.held.mesh;t.position.y=Dt(t.position.y,-.38+Math.sin(this.bob*2)*.012,10,e)}};function Ld(){let i=null,e=null,t=!1,n=null;function s(){if(i){i.state==="suspended"&&i.resume();return}let o=window.AudioContext||window.webkitAudioContext;o&&(i=new o,e=i.createGain(),e.gain.value=.8,e.connect(i.destination))}function r(o,l,{type:c="sine",vol:h=.2,slide:u=null,delay:p=0,attack:f=.005}={}){if(!i||t)return;let _=i.currentTime+p,v=i.createOscillator(),g=i.createGain();v.type=c,v.frequency.setValueAtTime(o,_),u&&v.frequency.exponentialRampToValueAtTime(u,_+l),g.gain.setValueAtTime(0,_),g.gain.linearRampToValueAtTime(h,_+f),g.gain.exponentialRampToValueAtTime(1e-4,_+l),v.connect(g).connect(e),v.start(_),v.stop(_+l+.05)}function a(o,{vol:l=.2,freq:c=1500,q:h=1,type:u="bandpass",delay:p=0}={}){if(!i||t)return;let f=i.currentTime+p,_=Math.ceil(i.sampleRate*o),v=i.createBuffer(1,_,i.sampleRate),g=v.getChannelData(0);for(let y=0;y<_;y++)g[y]=(Math.random()*2-1)*(1-y/_);let d=i.createBufferSource(),m=i.createBiquadFilter(),x=i.createGain();d.buffer=v,m.type=u,m.frequency.value=c,m.Q.value=h,x.gain.value=l,d.connect(m).connect(x).connect(e),d.start(f)}return{init:s,get muted(){return t},toggle(){return t=!t,e&&(e.gain.value=t?0:.8),t},beep:()=>r(1850,.09,{type:"square",vol:.06}),cash:()=>{a(.12,{vol:.25,freq:3e3}),r(2400,.4,{vol:.08,delay:.05}),r(3200,.5,{vol:.06,delay:.08})},card:()=>{r(1200,.08,{type:"square",vol:.05}),r(1600,.12,{type:"square",vol:.05,delay:.1})},error:()=>{r(220,.18,{type:"square",vol:.06}),r(180,.22,{type:"square",vol:.06,delay:.16})},click:()=>r(900,.03,{type:"square",vol:.03}),coin:()=>{r(2600,.08,{type:"triangle",vol:.06}),r(3400,.1,{type:"triangle",vol:.04,delay:.03})},note:()=>a(.08,{vol:.15,freq:4e3,q:.5}),pick:()=>a(.12,{vol:.18,freq:700,q:.7}),place:()=>{a(.05,{vol:.2,freq:1200}),r(320,.06,{vol:.05})},order:()=>{r(660,.1,{vol:.08}),r(880,.14,{vol:.08,delay:.1})},notify:()=>{r(880,.12,{vol:.07}),r(1320,.18,{vol:.06,delay:.1})},level:()=>[523,659,784,1046].forEach((o,l)=>r(o,.25,{type:"triangle",vol:.1,delay:l*.11})),build:()=>{a(.25,{vol:.25,freq:400}),[392,523,659].forEach((o,l)=>r(o,.3,{type:"triangle",vol:.08,delay:.2+l*.1}))},ball(o){let l=Math.max(0,1-o/45)**2*.35;l<.01||(a(.05,{vol:l,freq:1100,q:2}),r(420,.07,{vol:l*.4,slide:260}))},step:()=>a(.06,{vol:.035,freq:500,q:.8}),bird(){let o=2400+Math.random()*1600;for(let l=0;l<3+Math.floor(Math.random()*3);l++)r(o*(1+Math.random()*.2),.08,{vol:.02,slide:o*1.3,delay:l*.12})},brushing(o){if(!i||t){n&&(n.stop(),n=null);return}if(o&&!n){let l=i.sampleRate,c=i.createBuffer(1,l,i.sampleRate),h=c.getChannelData(0);for(let _=0;_<l;_++)h[_]=(Math.random()*2-1)*(.5+.5*Math.sin(_/l*Math.PI*6)**2);let u=i.createBufferSource();u.buffer=c,u.loop=!0;let p=i.createBiquadFilter();p.type="bandpass",p.frequency.value=900;let f=i.createGain();f.gain.value=.12,u.connect(p).connect(f).connect(e),u.start(),n=u}else!o&&n&&(n.stop(),n=null)}}}var Mc={balls:'<svg viewBox="0 0 48 48"><rect x="15" y="6" width="18" height="36" rx="4" fill="#1d3f8f"/><rect x="14" y="4" width="20" height="5" rx="2" fill="#f5f5f2"/><circle cx="24" cy="16" r="6" fill="#e8f04a"/><circle cx="24" cy="29" r="6" fill="#e8f04a"/></svg>',padelballs:'<svg viewBox="0 0 48 48"><rect x="15" y="6" width="18" height="36" rx="4" fill="#0f7a54"/><rect x="14" y="4" width="20" height="5" rx="2" fill="#f5f5f2"/><circle cx="24" cy="16" r="6" fill="#c8f04a"/><circle cx="24" cy="29" r="6" fill="#c8f04a"/></svg>',water:'<svg viewBox="0 0 48 48"><path d="M20 6h8v5l4 5v24a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3V16l4-5z" fill="#cfe9f7" stroke="#7cb5d6" stroke-width="1.5"/><rect x="20" y="3" width="8" height="5" rx="1" fill="#2a7cc0"/><rect x="16" y="24" width="16" height="8" fill="#2a7cc0"/></svg>',iso:'<svg viewBox="0 0 48 48"><rect x="15" y="8" width="18" height="34" rx="3" fill="#ff8a3d"/><rect x="16" y="6" width="16" height="4" rx="2" fill="#b8bcc2"/><rect x="15" y="20" width="18" height="6" fill="#fff"/></svg>',grip:'<svg viewBox="0 0 48 48"><rect x="14" y="5" width="20" height="38" rx="2" fill="#fff" stroke="#c9cfcc"/><rect x="14" y="11" width="20" height="7" fill="#e04a4a"/><path d="M18 24l12 4M18 30l12 4M18 36l12 4" stroke="#1b2420" stroke-width="2"/></svg>',racket:'<svg viewBox="0 0 48 48"><ellipse cx="24" cy="16" rx="10" ry="13" fill="none" stroke="#2f6fe0" stroke-width="3"/><path d="M17 20h14M17 14h14M21 5v22M27 5v22" stroke="#c9cfcc" stroke-width="1"/><path d="M24 29v15" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>',padelracket:'<svg viewBox="0 0 48 48"><ellipse cx="24" cy="17" rx="11" ry="13" fill="#15171a"/><g fill="#c8f04a"><circle cx="20" cy="13" r="1.6"/><circle cx="28" cy="13" r="1.6"/><circle cx="24" cy="18" r="1.6"/><circle cx="20" cy="22" r="1.6"/><circle cx="28" cy="22" r="1.6"/></g><path d="M24 30v14" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>',cap:'<svg viewBox="0 0 48 48"><path d="M9 30a15 15 0 0 1 30 0z" fill="#1f8a5b"/><path d="M28 30h14a3 3 0 0 1-3 4H28z" fill="#167048"/><circle cx="24" cy="15" r="2" fill="#167048"/></svg>'},ri={cart:'<svg viewBox="0 0 24 24"><path d="M3 4h2l2.4 11h11l2-8H6.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="19.5" r="1.5" fill="currentColor"/><circle cx="17" cy="19.5" r="1.5" fill="currentColor"/></svg>',tag:'<svg viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7.5" cy="8.5" r="1.5" fill="currentColor"/></svg>',court:'<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 12h14M8 7h8M8 17h8M12 7v10" stroke="currentColor" stroke-width="1.5"/></svg>',club:'<svg viewBox="0 0 24 24"><path d="M3 10l9-6 9 6v10H3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 20v-6h6v6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',stats:'<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',people:'<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="9" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 14.5a5 5 0 0 1 6 5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="currentColor"/></svg>',close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>'};var Jt=i=>document.getElementById(i),Id=[{id:"order",text:"Ouvre l'ordinateur de l'accueil (E) et commande des tubes de balles"},{id:"pick",text:"R\xE9cup\xE8re le carton livr\xE9 devant le club (E)"},{id:"shelf",text:"Range les balles sur une \xE9tag\xE8re de la boutique (clic gauche)"},{id:"open",text:"Retourne la pancarte de l'entr\xE9e sur OUVERT (E) : la journ\xE9e commence"},{id:"serve",text:"Encaisse ton premier client au comptoir"},{id:"clean",text:"Brosse le court quand il est us\xE9 (maintiens E)"}];function Ud(){let i="",e=Jt("toasts");function t(n){let s="";for(let r=1;r<=5;r++){let a=Math.max(0,Math.min(1,n-(r-1)));s+=`<span class="star" style="--fill:${(a*100).toFixed(0)}%">${ri.star}</span>`}return s}return{update(n,s){let r=n.s,a=[Math.round(r.money*100),r.level,Math.floor(n.xpProgress()*100),r.licences,Math.round(r.satisfaction*50),Math.floor(r.minute),r.open,r.day,n.capacity,r.dayStarted].join("|");if(a!==i){i=a,Jt("hud-money").textContent=Ve(r.money),Jt("hud-level").textContent=r.level,Jt("hud-xp").style.width=`${(n.xpProgress()*100).toFixed(1)}%`,Jt("hud-licences").textContent=`${r.licences} / ${n.capacity}`,Jt("hud-stars").innerHTML=t(r.satisfaction*5),Jt("hud-day").textContent=`Jour ${r.day}`,Jt("hud-clock").textContent=td(r.minute);let u=Jt("hud-status");u.textContent=r.open?"Ouvert":r.dayStarted?"Ferm\xE9":"Pr\xE9paration",u.className="status "+(r.open?"open":r.dayStarted?"closed":"prep"),Jt("prep").hidden=!!r.dayStarted}let o=Jt("hint");s.hint!==this.lastHint&&(this.lastHint=s.hint,s.hint?(o.innerHTML=s.hint,o.hidden=!1):o.hidden=!0),!!s.target!==this.lastTarget&&(this.lastTarget=!!s.target,Jt("crosshair").classList.toggle("active",this.lastTarget));let l=Jt("progress");s.progress>0?(l.hidden=!1,l.style.setProperty("--p",`${(s.progress*100).toFixed(1)}%`)):l.hidden||(l.hidden=!0);let c=Jt("held"),h=s.held?`${s.held.product}|${s.held.qty}`:"";h!==this.lastHeld&&(this.lastHeld=h,s.held?(c.hidden=!1,c.innerHTML=`<b>${Qe[s.held.product].name}</b><span>${s.held.qty} / ${Qe[s.held.product].box}</span><small>G : poser le carton</small>`):c.hidden=!0)},checkout(n){let s=Jt("checkout");if(!n.cust){s.hidden=!0;return}s.hidden=!1;let r=n.items.map(o=>`<li class="${o.scanned?"done":""}"><span>${o.label}</span><b>${o.scanned?Ve(o.price):"\u2014"}</b></li>`).join(""),a;n.phase==="scan"?a="Clique sur chaque article pos\xE9 sur le comptoir pour le scanner":n.method==="card"?a="Paiement par carte : clique sur le terminal de paiement":a=`Esp\xE8ces : le client donne ${Ve(n.given)}. Clique sur le tiroir-caisse pour rendre la monnaie`,s.innerHTML=`<header><span>Client au comptoir</span><b>${Ve(n.total)}</b></header><ul>${r}</ul><p>${a}</p>`},notify(n,s="info"){let r=document.createElement("div");for(r.className=`toast ${s}`,r.textContent=n,e.prepend(r),setTimeout(()=>r.classList.add("out"),4200),setTimeout(()=>r.remove(),4700);e.children.length>5;)e.lastChild.remove()},objectives(n){let s=Jt("objectives"),r=Id.filter(a=>!n.includes(a.id));if(!r.length){s.hidden=!0;return}s.hidden=!1,s.innerHTML=`<h3>Prise en main</h3><ol>${Id.map(a=>`<li class="${n.includes(a.id)?"done":a===r[0]?"current":""}">${a.text}</li>`).join("")}</ol>`}}}var Tv=i=>document.getElementById(i),Dd=[["shop","Commandes",ri.cart],["prices","Prix",ri.tag],["courts","Terrains",ri.court],["club","Club",ri.club],["report","Bilan",ri.stats]];function Nd(i,{onClose:e,onEndDay:t,sound:n}){let s=Tv("computer"),r="shop",a={};function o(){let m=i.s.orders.map(x=>`<li>${x.boxes} \xD7 ${Qe[x.product].short} <span class="muted">livraison dans ${Math.ceil(x.eta)} s</span></li>`).join("");return m?`<h3>En cours de livraison</h3><ul class="pending">${m}</ul>`:""}function l(){return`<span class="pc-money">${Ve(i.s.money)}</span>`}function c(){let m=Object.entries(a).reduce((R,[b,w])=>R+Qe[b].cost*Qe[b].box*w,0),x=Ki.map(R=>{let b=Qe[R],w=i.s.level<b.level,C=a[R]||0,M=b.cost*b.box;return`<article class="card ${w?"locked":""}">
        <div class="thumb">${Mc[R]}</div>
        <div class="info"><h4>${b.name}</h4><p>Carton de ${b.box} \xB7 ${Ve(M)}</p>
          <p class="muted">Prix conseill\xE9 ${Ve(b.market)} / unit\xE9</p></div>
        ${w?`<span class="lock">Niveau ${b.level}</span>`:`
        <div class="stepper"><button data-act="dec" data-id="${R}" aria-label="Retirer un carton">\u2212</button><span>${C}</span><button data-act="inc" data-id="${R}" aria-label="Ajouter un carton">+</button></div>`}
      </article>`}).join(""),y=o();return`<div class="pc-split"><section class="grid">${x}</section>
      <aside class="cart"><h3>Panier</h3>
        ${Object.keys(a).filter(R=>a[R]>0).map(R=>`<div class="cart-line"><span>${a[R]} \xD7 ${Qe[R].short}</span><b>${Ve(Qe[R].cost*Qe[R].box*a[R])}</b></div>`).join("")||'<p class="muted">Ajoute des cartons avec +</p>'}
        <div class="cart-total"><span>Total</span><b>${Ve(m)}</b></div>
        <button class="primary" data-act="buy" ${m<=0||m>i.s.money?"disabled":""}>Commander</button>
        ${m>i.s.money?'<p class="warn">Fonds insuffisants</p>':""}
        <p class="muted small">Les cartons sont livr\xE9s sur la palette devant l'entr\xE9e.</p>
        <div id="pc-pending">${y}</div>
      </aside></div>`}function h(m,x,y,R,b=""){let w=i.s.prices[m],C=y?(w-y)/w*100:null,M=w/R,S=M>1.3?["bad","Trop cher : les clients refusent"]:M>1.12?["mid","Un peu cher"]:M<.85?["mid","Bon march\xE9"]:["good","Prix juste"];return`<tr><td class="pname">${b}<span>${x}</span></td>
      <td>${y?Ve(y):"\u2014"}</td><td>${Ve(R)}</td>
      <td><div class="stepper price"><button data-act="p-" data-key="${m}" aria-label="Baisser">\u2212</button><input data-key="${m}" value="${w.toFixed(2).replace(".",",")}" inputmode="decimal" aria-label="Prix de ${x}"><button data-act="p+" data-key="${m}" aria-label="Augmenter">+</button></div></td>
      <td>${C===null?"\u2014":`${C.toFixed(0)} %`}</td><td><span class="pill ${S[0]}">${S[1]}</span></td></tr>`}function u(){let m=Ki.filter(y=>i.s.level>=Qe[y].level).map(y=>h(y,Qe[y].name,Qe[y].cost,Qe[y].market,`<i class="mini">${Mc[y]}</i>`)).join(""),x=Object.keys(Qi).filter(y=>y!=="padel"||i.builtSports().includes("padel")).map(y=>h(y,Qi[y].name,0,Qi[y].market)).join("");return`<table class="prices"><thead><tr><th>Article</th><th>Co\xFBt</th><th>Conseill\xE9</th><th>Ton prix</th><th>Marge</th><th></th></tr></thead>
      <tbody>${m}<tr class="sep"><td colspan="6">Prestations</td></tr>${x}</tbody></table>
      <p class="muted small">Au-del\xE0 de 30 % au-dessus du prix conseill\xE9, les clients n'ach\xE8tent plus. Les \xE9tiquettes en rayon se mettent \xE0 jour toutes seules.</p>`}function p(){return`<section class="grid courts">${Lt.map(m=>{let x=i.s.courts[m.id],y=i.court[m.id],R=rn[m.surface],b=i.s.level<m.level,w;x.built?w=y.playing?'<span class="pill mid">Partie en cours</span>':y.reservedBy?'<span class="pill mid">R\xE9serv\xE9</span>':'<span class="pill good">Libre</span>':w=b?`<span class="lock">Niveau ${m.level}</span>`:'<span class="pill">\xC0 construire</span>';let C=x.built?`<div class="wear"><span>Usure</span><div class="bar"><i style="width:${(x.wear*100).toFixed(0)}%" class="${x.wear>.6?"bad":x.wear>.35?"mid":""}"></i></div></div>`:"";return`<article class="card court ${m.surface}">
        <div class="court-swatch"></div>
        <div class="info"><h4>${m.label}</h4><p>${R.name}${R.sport==="padel"?"":" \xB7 tennis"}</p>${C}</div>
        <div class="actions">${w}${!x.built&&!b?`<button class="primary" data-act="build" data-id="${m.id}" ${i.s.money<m.price?"disabled":""}>Construire \xB7 ${ts(m.price)}</button>`:""}</div>
      </article>`}).join("")}</section>
    <p class="muted small">Un terrain us\xE9 fait fuir les joueurs. Brosse-le en maintenant E dessus, ou embauche un agent d'entretien.</p>`}function f(){let m=i.s.shelves.filter(b=>b.built).length,x=i.s.shelves.length,y=Object.entries(ji).map(([b,w])=>{let C=i.s.upgrades[b],M=i.s.level<w.level;return`<article class="row-card"><div><h4>${w.name}</h4><p class="muted">${w.desc}</p></div>
        ${C?'<span class="pill good">Install\xE9</span>':M?`<span class="lock">Niveau ${w.level}</span>`:`<button class="primary" data-act="upgrade" data-id="${b}" ${i.s.money<w.price?"disabled":""}>${ts(w.price)}</button>`}</article>`}).join(""),R=Object.entries(Hn).map(([b,w])=>{let C=i.s.staff[b],M=i.s.level<w.level;return`<article class="row-card"><div><h4>${w.name}</h4><p class="muted">${w.desc} \xB7 ${ts(w.salary)} par jour</p></div>
        ${M?`<span class="lock">Niveau ${w.level}</span>`:`<button class="${C?"ghost":"primary"}" data-act="staff" data-id="${b}">${C?"Licencier":"Embaucher"}</button>`}</article>`}).join("");return`<h3>Boutique</h3>
      <article class="row-card"><div><h4>\xC9tag\xE8res</h4><p class="muted">${m} sur ${x} install\xE9es</p></div>
        ${m<x?`<button class="primary" data-act="shelf" ${i.s.money<Tr?"disabled":""}>Ajouter \xB7 ${ts(Tr)}</button>`:'<span class="pill good">Complet</span>'}</article>
      <h3>Am\xE9nagements</h3>${y}<h3>Personnel</h3>${R}`}function _(){let m=i.s,x=m.stats,y=x.courts+x.shop+x.licenceFees,R=x.orders+x.build,b=kn[m.level]?`${m.xp} / ${kn[m.level]} XP`:`${m.xp} XP`,w=i.canEndDay();return`<div class="kpis">
        <div><span>Recettes du jour</span><b>${Ve(y)}</b></div>
        <div><span>D\xE9penses du jour</span><b>${Ve(R)}</b></div>
        <div><span>Licenci\xE9s</span><b>${m.licences} / ${i.capacity}</b></div>
        <div><span>Niveau ${m.level}</span><b>${b}</b></div>
      </div>
      <table class="report"><tbody>
        <tr><td>Locations de terrains</td><td>${Ve(x.courts)}</td></tr>
        <tr><td>Boutique</td><td>${Ve(x.shop)}</td></tr>
        <tr><td>Licences</td><td>${Ve(x.licenceFees)}</td></tr>
        <tr><td>Commandes</td><td>\u2212${Ve(x.orders)}</td></tr>
        <tr><td>Travaux et \xE9quipements</td><td>\u2212${Ve(x.build)}</td></tr>
        <tr><td>Clients servis aujourd'hui</td><td>${x.customers}</td></tr>
        <tr><td>Parties jou\xE9es</td><td>${x.sessions}</td></tr>
      </tbody></table>
      <div class="end-day">
        <p class="muted">${w?"Le club est ferm\xE9 et vide : tu peux terminer la journ\xE9e.":m.open?"Retourne la pancarte sur FERM\xC9 et attends le d\xE9part des derniers clients pour terminer la journ\xE9e plus t\xF4t.":"Attends le d\xE9part des derniers clients."}</p>
        <button class="primary" data-act="endday" ${w?"":"disabled"}>Terminer la journ\xE9e</button>
      </div>`}function v(){let m={shop:c,prices:u,courts:p,club:f,report:_};s.innerHTML=`<div class="laptop"><div class="pc">
      <nav>${Dd.map(([x,y,R])=>`<button class="${x===r?"on":""}" data-tab="${x}">${R}<span>${y}</span></button>`).join("")}</nav>
      <main><header><h2>${Dd.find(x=>x[0]===r)[1]}</h2>${l()}<button class="close" data-act="close" aria-label="Fermer l'ordinateur">${ri.close}</button></header>
      <div class="pc-body">${m[r]()}</div></main></div></div>`}function g(m){let x=parseFloat(String(m.value).replace(",","."));Number.isFinite(x)&&x>0&&i.setPrice(m.dataset.key,at(x,.1,9999)),v()}s.addEventListener("click",m=>{let x=m.target.closest("button");if(!x)return;if(n.click(),x.dataset.tab){r=x.dataset.tab,v();return}let y=x.dataset.act,R=x.dataset.id,b=x.dataset.key;if(y==="close")return e();if(y==="inc"&&(a[R]=Math.min(20,(a[R]||0)+1)),y==="dec"&&(a[R]=Math.max(0,(a[R]||0)-1)),y==="buy"){let w=!0;for(let[C,M]of Object.entries(a))M>0&&(w=i.order(C,M)&&w);for(let C of Object.keys(a))delete a[C];w||n.error()}if((y==="p-"||y==="p+")&&i.setPrice(b,Ei(i.s.prices[b]+(y==="p+"?.1:-.1)*(m.shiftKey?10:1))),y==="build"&&(i.buildCourt(R)?n.build():n.error()),y==="shelf"&&(i.buyShelf()?n.build():n.error()),y==="upgrade"&&(i.buyUpgrade(R)?n.build():n.error()),y==="staff"&&i.setStaff(R,!i.s.staff[R]),y==="endday"){t();return}v()}),s.addEventListener("change",m=>{m.target.matches("input[data-key]")&&g(m.target)}),s.addEventListener("keydown",m=>{m.key==="Enter"&&m.target.matches("input[data-key]")&&g(m.target)});let d=null;return{open(m){m&&(r=m),v(),s.hidden=!1,clearInterval(d);let x=i.canEndDay();d=setInterval(()=>{if(s.hidden)return;let y=s.querySelector(".pc-money");y&&(y.textContent=Ve(i.s.money));let R=s.querySelector("#pc-pending");R&&(R.innerHTML=o()),r==="report"&&i.canEndDay()!==x&&(x=i.canEndDay(),v())},500)},close(){s.hidden=!0,clearInterval(d)},get isOpen(){return!s.hidden},render:v}}var wv=i=>document.getElementById(i),Av=[50,20,10,5],Rv=[2,1,.5,.2,.1];function Od(i,{sound:e,onClose:t,notify:n,onPaid:s}){let r=wv("payment"),a=null,o="",l=[],c=()=>Math.round(l.reduce((m,x)=>m+x,0)*100)/100;function h(){return`<div class="terminal">
      <div class="term-screen"><small>Montant \xE0 d\xE9biter</small><b>${o?`${o.replace(".",",")} \u20AC`:"0,00 \u20AC"}</b></div>
      <div class="keypad">
        ${["1","2","3","4","5","6","7","8","9",",","0","\u232B"].map(x=>`<button data-key="${x}">${x}</button>`).join("")}
        <button class="red" data-key="esc">Annuler</button><button class="green wide" data-key="ok">Valider</button>
      </div>
      <p class="muted small">Le total s'affiche sur l'\xE9cran de la caisse : ${Ve(i.counter.total)}. Clavier : chiffres, virgule, Entr\xE9e.</p>
    </div>`}function u(){let m=i.counter,x=Math.round((m.given-m.total)*100)/100,y=c(),R=Math.abs(y-x)<.001?"good":y>x?"over":"short";return`<div class="drawer">
      <div class="drawer-head">
        <div><span>Total</span><b>${Ve(m.total)}</b></div>
        <div><span>Re\xE7u</span><b>${Ve(m.given)}</b></div>
        <div class="due"><span>\xC0 rendre</span><b>${Ve(x)}</b></div>
      </div>
      <div class="tray">
        ${Av.map(b=>`<button class="note n${b}" data-v="${b}"><span>${b} \u20AC</span></button>`).join("")}
        ${Rv.map(b=>`<button class="coin c${String(b).replace(".","")}" data-v="${b}"><span>${b>=1?b+" \u20AC":Math.round(b*100)+" c"}</span></button>`).join("")}
      </div>
      <div class="given">
        <div class="chips">${l.map((b,w)=>`<button class="chip" data-i="${w}" title="Reprendre">${Ve(b)}</button>`).join("")||'<span class="muted">Clique sur les billets et les pi\xE8ces \xE0 rendre</span>'}</div>
        <div class="given-total ${R}"><span>Rendu</span><b>${Ve(y)}</b></div>
      </div>
      <div class="drawer-actions"><button class="ghost" data-act="clear">Tout reprendre</button><button class="green" data-act="ok">Rendre la monnaie</button></div>
    </div>`}function p(){r.innerHTML=`<div class="pay-card"><header><h2>${a==="card"?"Terminal de paiement":"Tiroir-caisse"}</h2>
      <button class="close" data-act="close" aria-label="Fermer">\xD7</button></header>${a==="card"?h():u()}</div>`}function f(m){if(m==="esc")return d();if(m==="ok")return _();if(m==="\u232B")o=o.slice(0,-1);else if(m===","||m===".")o.includes(".")||(o=(o||"0")+".");else if(/^\d$/.test(m)){let[,x]=o.split(".");if(x!==void 0&&x.length>=2||o.replace(".","").length>=6)return;o=o==="0"?m:o+m}e.click(),p()}function _(){let m=parseFloat(o||"0");i.payCard(m)?(e.card(),g()):(e.error(),n("Montant incorrect : v\xE9rifie le total affich\xE9 en caisse","bad"),o="",p())}function v(){let m=i.payCash(c());m==="ok"?n("Monnaie exacte, merci !","good"):m==="short"?n("Il manquait de la monnaie : le client est m\xE9content","bad"):m==="over"&&n("Tu as rendu trop de monnaie","bad"),g()}function g(){d(),s?.()}function d(){r.hidden=!0,a=null,t()}return r.addEventListener("click",m=>{let x=m.target.closest("button");if(x){if(x.dataset.act==="close")return d();if(a==="card"&&x.dataset.key)return f(x.dataset.key);a==="cash"&&(x.dataset.v?(l.push(parseFloat(x.dataset.v)),x.dataset.v>=5?e.note():e.coin(),p()):x.dataset.i?(l.splice(+x.dataset.i,1),e.click(),p()):x.dataset.act==="clear"?(l=[],p()):x.dataset.act==="ok"&&v())}}),addEventListener("keydown",m=>{if(!r.hidden){if(m.key==="Escape")return m.preventDefault(),d();a==="card"?/^\d$/.test(m.key)?f(m.key):m.key===","||m.key==="."?f(","):m.key==="Backspace"?f("\u232B"):m.key==="Enter"&&_():a==="cash"&&m.key==="Enter"&&v()}}),{open(m){a=m,o="",l=[],p(),r.hidden=!1},close:d,get isOpen(){return!r.hidden}}}var ot=i=>document.getElementById(i);function Bd(i){let e=ot("error");e&&(e.hidden=!1,e.querySelector("code").textContent=String(i).slice(0,400))}addEventListener("error",i=>Bd(i.message));addEventListener("unhandledrejection",i=>Bd(i.reason?.message??i.reason));var Rc="tennis-club-sim-save-v1",pn=new xr({antialias:!0,powerPreference:"high-performance"}),ss="high";try{ss=localStorage.getItem("tennis-club-quality")||"high"}catch{}var Sc=1,Wn=1,go=16,Ec=0;function zd(){Sc=ss==="high"?Math.min(devicePixelRatio,1.25):.75,Wn=1,pn.setPixelRatio(Sc),pn.shadowMap.enabled=ss==="high",mn?.traverse(i=>{i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(e=>{e.needsUpdate=!0})}),Cc?.()}pn.shadowMap.type=ja;pn.toneMapping=Kl;pn.toneMappingExposure=1;ot("game").appendChild(pn.domElement);var mn=new zs,wi=new nn(70,1,.05,600);mn.add(wi);function Cc(){pn.setSize(innerWidth,innerHeight),wi.aspect=innerWidth/innerHeight,wi.updateProjectionMatrix()}addEventListener("resize",Cc);zd();var Xn=[],Tc=Md(mn,pn),as=Td(mn,Xn),Tt=Ld(),Gt=Ud(),ct=Pd(pn.domElement),nt=new mo(wi);nt.yaw=0;var Pe=null,xo=null,is=null,zr=null,$s=null,rs=fc(),qs=new Map,Fr=new Map,Vt="menu",Tn={target:null,hint:"",progress:0,held:null};function kd(){try{return!!localStorage.getItem(Rc)}catch{return!1}}function _o(){if(!Pe)return!1;try{return localStorage.setItem(Rc,JSON.stringify(Pe.serialize())),!0}catch{return!1}}function Cv(){try{let i=localStorage.getItem(Rc);if(!i)return null;let e=JSON.parse(i);return!e||e.version!==1?null:(e.dayStarted??(e.dayStarted=e.minute>8*60+1),e)}catch{return null}}function wc(){rs=[...fc(),...Tc.colliders],Pe.s.shelves.forEach((i,e)=>{i.built&&rs.push(Ju(Mi[e]))});for(let i of Lt)Pe.s.courts[i.id].built&&rs.push(...Ku(i.id,rn[i.surface].sport))}function Hd(i){let e=Sd(i.product);e.position.set(i.x,(i.y??0)+e.userData.size[1]/2,i.z),e.rotation.y=i.id*1.7%.4-.2,e.userData.interact={kind:"box",id:i.id},mn.add(e),Xn.push(e),Fr.set(i.id,e)}function Pv(i){let e=Fr.get(i.id);if(!e)return;nt.held?.box===i&&nt.release(),e.parent?.remove(e);let t=Xn.indexOf(e);t>=0&&Xn.splice(t,1),Fr.delete(i.id)}function Ys(i){!Pe||Pe.s.objectives.includes(i)||(Pe.s.objectives.push(i),Gt.objectives(Pe.s.objectives))}var Gd={spawnPerson(i){let e=Cd(i);qs.set(i.id,e),e.root.position.set(i.x,0,i.z),mn.add(e.root)},despawnPerson(i){let e=qs.get(i.id);e&&(mn.remove(e.root),qs.delete(i.id))},bubble(i,e,t){qs.get(i.id)?.say(e,t)},shelfChanged(i){xo?.refresh(i)},shelfBuilt(i){xo?.refresh(i),wc(),Gt.notify("Nouvelle \xE9tag\xE8re install\xE9e","good")},counterChanged(i){as.showCounter(i),Gt.checkout(i)},boxAdded(i){Hd(i)},boxRemoved(i){Pv(i)},boxMoved(i){let e=Fr.get(i.id);e&&e.position.set(i.x,(i.y??0)+e.userData.size[1]/2,i.z)},courtChanged(i,e){is?.refresh(i),e&&wc()},courtSession(i,e,t,n){t?is.startSession(i,e,n,s=>qs.get(s.id)):is.endSession(i)},notify(i,e){Gt.notify(i,e),Tt.notify()},sound(i){Tt[i]?.(),i==="order"&&Ys("order"),i==="cash"&&Xd()&&Ys("serve")},levelUp(i,e){Tt.level(),Ac(i,e),is?.refreshAll()},dayEnded(i){Lv(i)},openChanged(i){as.setOpen(i)},pricesChanged(){xo?.invalidate()},upgradeBought(i){Gt.notify("Am\xE9nagement install\xE9","good")}};function Pc(i){Pe=new lo(i,Gd),xo=wd(mn,Xn,Pe.s),is=Rd(mn,Pe.s,Xn,e=>Tt.ball(e.distanceTo(wi.position)));for(let e of Pe.s.boxes)e.held=!1,Hd(e);Pe.syncStaff(),wc(),as.setOpen(!1),as.showCounter(Pe.counter),zr=Nd(Pe,{onClose:Or,sound:Tt,onEndDay:()=>{Or(),Pe.canEndDay()&&Pe.endDay()}}),$s=Od(Pe,{sound:Tt,onClose:Or,notify:(e,t)=>Gt.notify(e,t)}),nt.pos.set(0,0,19),nt.yaw=0,nt.pitch=-.05,Gt.objectives(Pe.s.objectives),Vt="play",ot("menu").hidden=!0,ot("hud").hidden=!1,Tt.init(),ct.requestLock(),Gt.notify(`Jour ${Pe.s.day} : le club ouvre \xE0 8 h. Retourne la pancarte quand tu es pr\xEAt.`,"info")}function Br(i){ct.uiOpen=!0,ct.exitLock(),i==="computer"&&zr.open(),(i==="card"||i==="cash")&&$s.open(i)}function Or(){zr?.close(),$s?.isOpen&&$s.close(),Vt==="play"&&(ct.uiOpen=!1,ct.requestLock())}function Vd(){Vt==="play"&&(Vt="pause",ct.uiOpen=!0,zr?.close(),ot("pause").hidden=!1,ot("save-status").textContent="")}function Wd(){Vt="play",ot("pause").hidden=!0,ct.uiOpen=!1,ct.requestLock()}function Ac(i,e){let t=ot("levelup");t.innerHTML=`<div><span>Niveau ${i}</span><b>Le club grandit !</b>${e.length?`<p>D\xE9bloqu\xE9 : ${e.join(" \xB7 ")}</p>`:""}</div>`,t.hidden=!1,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),clearTimeout(Ac.t),Ac.t=setTimeout(()=>{t.hidden=!0},5200)}function Lv(i){Vt="summary",ct.uiOpen=!0,ct.exitLock(),zr?.close(),$s?.isOpen&&$s.close();let e=i.courts+i.shop+i.licenceFees,t=i.orders+i.build+i.salaries+i.upkeep,n=i.licenceDrift;ot("summary").innerHTML=`<div class="sheet">
    <p class="kicker">Fin de journ\xE9e</p><h2>Bilan du jour ${i.day}</h2>
    <div class="sum-grid">
      <section><h3>Recettes</h3>
        <dl><dt>Locations de terrains</dt><dd>${Ve(i.courts)}</dd><dt>Boutique</dt><dd>${Ve(i.shop)}</dd><dt>Licences</dt><dd>${Ve(i.licenceFees)}</dd></dl>
        <p class="total">${Ve(e)}</p></section>
      <section><h3>D\xE9penses</h3>
        <dl><dt>Commandes</dt><dd>${Ve(i.orders)}</dd><dt>Travaux</dt><dd>${Ve(i.build)}</dd><dt>Salaires</dt><dd>${Ve(i.salaries)}</dd><dt>Entretien et charges</dt><dd>${Ve(i.upkeep)}</dd></dl>
        <p class="total neg">\u2212${Ve(t)}</p></section>
    </div>
    <div class="sum-kpis">
      <div><span>R\xE9sultat</span><b class="${e-t>=0?"pos":"neg"}">${e-t>=0?"+":""}${Ve(e-t)}</b></div>
      <div><span>Clients</span><b>${i.customers}</b><small>${i.happy} satisfaits \xB7 ${i.angry} m\xE9contents</small></div>
      <div><span>Licenci\xE9s</span><b>${i.licences}</b><small>${i.newLicences} nouvelles licences${n?` \xB7 ${n>0?"+":""}${n} bouche-\xE0-oreille`:""}</small></div>
      <div><span>Satisfaction</span><b>${(i.satisfaction*5).toFixed(1)} / 5</b></div>
    </div>
    <button class="primary" id="btn-next-day">Jour suivant</button>
    <p class="muted small" id="sum-save"></p>
  </div>`,ot("summary").hidden=!1,ot("sum-save").textContent=_o()?"Partie sauvegard\xE9e.":"Sauvegarde impossible dans ce navigateur : la partie continue sans.",ot("btn-next-day").addEventListener("click",()=>{Pe.nextDay(),as.showCounter(Pe.counter),Gt.checkout(Pe.counter),ot("summary").hidden=!0,Vt="play",ct.uiOpen=!1,ct.requestLock(),_o(),Gt.notify(`Jour ${Pe.s.day} : bonne journ\xE9e !`,"info")})}function Xd(){return nt.pos.x>-9.8&&nt.pos.x<-2.6&&nt.pos.z>3.8&&nt.pos.z<6.6}ct.onLockChange=(i,e)=>{e==="exit"&&Vt==="play"&&!ct.uiOpen&&Vd()};ct.onKey=i=>{if(i==="Escape")return Vt==="pause"?Wd():ct.uiOpen&&Vt==="play"?Or():Vt==="play"&&ct.fallback?Vd():void 0;Vt!=="play"||ct.uiOpen||(i==="KeyE"&&qd(),i==="KeyG"&&$d(),i==="Tab"&&Br("computer"),i==="KeyM"&&(ot("btn-mute").textContent=Tt.toggle()?"Activer le son":"Couper le son"))};ct.onClick=(i,e)=>{if(Vt!=="play"||ct.uiOpen||e!=="down")return;let t=Tn.target;if(!t)return;let n=nt.held?.box;if(i==="primary")if(n&&t.kind==="shelf"){let s=Pe.placeItem(n,t.shelf,t.level);s==="ok"?(Tt.place(),Ys("shelf")):s==="full"?(Gt.notify("Cette tablette est pleine","bad"),Tt.error()):s==="other"?(Gt.notify("Un autre produit est d\xE9j\xE0 rang\xE9 ici","bad"),Tt.error()):s==="none"&&(Gt.notify("Ach\xE8te d'abord cette \xE9tag\xE8re sur l'ordinateur","bad"),Tt.error())}else t.kind==="scan"&&!t.done?Pe.scan(t.uid):t.kind==="card"&&Pe.counter.phase==="pay"&&Pe.counter.method==="card"?Br("card"):t.kind==="cash"&&Pe.counter.phase==="pay"&&Pe.counter.method==="cash"&&Br("cash");else if(i==="secondary")if(n&&t.kind==="shelf"){let s=Pe.takeItem(n,t.shelf,t.level);s==="ok"?Tt.pick():s==="full"&&Gt.notify("Le carton est plein","bad")}else!n&&t.kind==="shelf"&&Pe.clearLevel(t.shelf,t.level)};function qd(){let i=Tn.target;if(i){if(i.kind==="box"&&!nt.held){let e=Pe.s.boxes.find(s=>s.id===i.id);if(!e||!Pe.pickBox(e))return;let t=Fr.get(e.id);mn.remove(t);let n=Xn.indexOf(t);n>=0&&Xn.splice(n,1),nt.hold(e,t),Tt.pick(),Ys("pick")}else if(i.kind==="laptop")Br("computer");else if(i.kind==="sign"){let e=Pe.toggleOpen();Tt.click(),e&&(Ys("open"),Gt.notify("Le club est ouvert : les premiers clients arrivent","good"))}}}function $d(){if(!nt.held)return;let i=nt.held,e=nt.floorPoint(2.2)??new D(nt.pos.x-Math.sin(nt.yaw)*.9,0,nt.pos.z-Math.cos(nt.yaw)*.9);for(let t of rs)if(e.x>t.minX-.3&&e.x<t.maxX+.3&&e.z>t.minZ-.3&&e.z<t.maxZ+.3){e.set(nt.pos.x-Math.sin(nt.yaw)*.7,0,nt.pos.z-Math.cos(nt.yaw)*.7);break}nt.release(),mn.add(i.mesh),Xn.push(i.mesh),i.mesh.rotation.set(0,nt.yaw,0),Pe.dropBox(i.box,e.x,e.z,0),Tt.place()}function Iv(i){Tn.target=nt.aim(Xn,3.4);let e=Tn.target,t=nt.held?.box;Tn.held=t?{product:t.product,qty:t.qty}:null;let n="",s=r=>`<kbd>${r}</kbd>`;if(e){if(e.kind==="shelf"){let r=Pe.s.shelves[e.shelf].levels[e.level],a=r.product?`${Qe[r.product].short} \xB7 ${r.qty} / ${Qe[r.product].shelf}`:"Emplacement libre";t?r.product&&r.product!==t.product&&r.qty>0?n=`${a}<br><span class="warn">Un autre produit est rang\xE9 ici</span>`:n=`${a}<br>${s("Clic gauche")} Ranger \xB7 ${s("Clic droit")} Reprendre`:n=r.product&&r.qty===0?`${a}<br>${s("Clic droit")} Retirer l'\xE9tiquette`:a}else if(e.kind==="box"&&!t){let r=Pe.s.boxes.find(a=>a.id===e.id);r&&(n=`${s("E")} Prendre le carton \xB7 ${Qe[r.product].short} (${r.qty})`)}else if(e.kind==="laptop")n=`${s("E")} Utiliser l'ordinateur`;else if(e.kind==="sign")n=`${s("E")} ${Pe.s.open?"Fermer le club":"Ouvrir le club"}`;else if(e.kind==="scan"&&!e.done)n=`${s("Clic")} Scanner l'article`;else if(e.kind==="card")n=Pe.counter.phase==="pay"&&Pe.counter.method==="card"?`${s("Clic")} Encaisser par carte`:"Terminal de paiement";else if(e.kind==="cash")n=Pe.counter.phase==="pay"&&Pe.counter.method==="cash"?`${s("Clic")} Ouvrir le tiroir-caisse`:"Tiroir-caisse";else if(e.kind==="court"){let r=Pe.s.courts[e.court];Pe.canClean(e.court)?r.wear>.02?n=`${s("Maintenir E")} Brosser le terrain \xB7 usure ${(r.wear*100).toFixed(0)} %`:n="Terrain impeccable":n="Partie en cours"}}e?.kind==="court"&&ct.down("KeyE")&&Pe.canClean(e.court)&&Pe.s.courts[e.court].wear>.02?(Tn.progress+=i/2.8,Tt.brushing(!0),Tn.progress>=1&&(Pe.clean(e.court),Tn.progress=0,Tt.brushing(!1),Tt.place(),Ys("clean"),Gt.notify("Terrain bross\xE9","good"))):(Tn.progress=0,Tt.brushing(!1)),Tn.hint=n}ot("btn-new").addEventListener("click",()=>{kd()&&!Uv()||Pc(pc())});function Uv(){let i=ot("btn-new");return i.dataset.confirm?!0:(i.dataset.confirm="1",i.textContent="\xC9craser la sauvegarde ?",setTimeout(()=>{i.dataset.confirm="",i.textContent="Nouvelle partie"},3e3),!1)}ot("btn-continue").addEventListener("click",()=>{let i=Cv();i&&Pc(i)});ot("btn-continue").hidden=!kd();ot("btn-resume").addEventListener("click",Wd);ot("btn-save").addEventListener("click",()=>{ot("save-status").textContent=_o()?"Partie sauvegard\xE9e.":"Sauvegarde impossible dans ce navigateur."});ot("btn-quit").addEventListener("click",()=>{_o(),location.reload()});ot("click-to-play").addEventListener("click",()=>ct.requestLock());ot("btn-mute").addEventListener("click",i=>{i.currentTarget.textContent=Tt.toggle()?"Activer le son":"Couper le son"});var Yd=ot("btn-quality"),Zd=()=>{Yd.textContent=ss==="high"?"Graphismes : haute qualit\xE9":"Graphismes : mode \xE9conomie"};Zd();Yd.addEventListener("click",()=>{ss=ss==="high"?"low":"high";try{localStorage.setItem("tennis-club-quality",ss)}catch{}zd(),Zd()});var Dv=new Ja,Nr=0,bc=4,Fd=0;function Nv(i){if(go+=(i*1e3-go)*.05,Ec+=i,Ec<1.5||document.hidden)return;Ec=0;let e=Wn;go>24&&Wn>.55?Wn=Math.max(.55,Wn-.1):go<15&&Wn<1&&(Wn=Math.min(1,Wn+.05)),Wn!==e&&(pn.setPixelRatio(Sc*Wn),Cc())}function Ov(){let i=Dv.getDelta(),e=Math.min(i,.05);if(i<.5&&Nv(i),Vt==="menu")Nr+=e*.05,wi.position.set(Math.sin(Nr)*26,7+Math.sin(Nr*.7)*1.5,30+Math.cos(Nr)*8),wi.lookAt(0,2,4),Tc.setTime(10.5*60+Math.sin(Nr)*30,new D(0,0,5));else{Vt==="play"&&(Pe.update(e,{playerAtCounter:Xd()}),nt.update(e,ct,rs,Zu),nt.pushFrom(Pe.persons),nt.resolve(rs),Iv(e),Math.floor(nt.stepPhase/Math.PI)!==Fd&&(Fd=Math.floor(nt.stepPhase/Math.PI),Tt.step()),bc-=e,bc<=0&&(bc=5+Math.random()*12,Pe.s.minute<20*60&&(nt.pos.z<0||nt.pos.z>14)&&Tt.bird()));for(let r of Pe.persons)qs.get(r.id)?.update(e,r);is.update(e),as.animateCounter(e),nt.animateHeld(e);let{night:t}=Tc.setTime(Pe.s.minute,nt.pos);as.update(Pe.s.minute,t),is.setNight(t>.35&&Pe.s.upgrades.lights),Gt.update(Pe,Tn);let n=ct.locked||ct.fallback||Vt!=="play"||ct.uiOpen;ot("click-to-play").hidden!==n&&(ot("click-to-play").hidden=n);let s=!(ct.fallback&&Vt==="play"&&!ct.uiOpen);ot("look-help").hidden!==s&&(ot("look-help").hidden=s)}pn.render(mn,wi)}pn.setAnimationLoop(Ov);ot("loading").hidden=!0;window.__club={get club(){return Pe},colliders:()=>rs,renderer:pn,scene:mn,player:nt,startGame:Pc,createState:pc,hooks:Gd,interact:qd,input:ct,ui:Tn,openUi:Br,closeUi:Or,dropHeld:$d};})();

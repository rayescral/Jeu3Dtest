(()=>{var ih="170";var dp=0,ru=1,fp=2;var wa=1,pp=2,pi=3,ki=0,nn=1,Tt=2,Ni=0,$s=1,jo=2,ou=3,au=4,mp=5,is=100,gp=101,xp=102,vp=103,yp=104,_p=200,Mp=201,bp=202,Ep=203,Pl=204,Il=205,Sp=206,Tp=207,wp=208,Ap=209,Rp=210,Cp=211,Pp=212,Ip=213,Lp=214,Ll=0,Dl=1,Ul=2,Ks=3,Nl=4,Ol=5,kl=6,zl=7,xd=0,Dp=1,Up=2,Oi=0,Np=1,Op=2,kp=3,sh=4,zp=5,Fp=6,Bp=7;var vd=300,js=301,Qs=302,Fl=303,Bl=304,Aa=306,$t=1e3,rs=1001,Hl=1002,Sn=1003,Hp=1004;var vo=1005;var jn=1006,Ka=1007;var os=1008;var vi=1009,yd=1010,_d=1011,Vr=1012,rh=1013,as=1014,Qn=1015,Qr=1016,oh=1017,ah=1018,er=1020,Md=35902,bd=1021,Ed=1022,Bn=1023,Sd=1024,Td=1025,Zs=1026,tr=1027,lh=1028,ch=1029,wd=1030,hh=1031;var uh=1033,$o=33776,Zo=33777,Yo=33778,Jo=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,ql=36196,$l=37492,Zl=37496,Yl=37808,Jl=37809,Kl=37810,jl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,lc=37821,Ko=36492,cc=36494,hc=36495,Ad=36283,uc=36284,dc=36285,fc=36286;var Qo=2300,pc=2301,ja=2302,lu=2400,cu=2401,hu=2402;var Vp=3200,Gp=3201;var Rd=0,Wp=1,Di="",Ct="srgb",ar="srgb-linear",Ra="linear",bt="srgb";var ws=7680;var uu=519,Xp=512,qp=513,$p=514,Cd=515,Zp=516,Yp=517,Jp=518,Kp=519,mc=35044;var du="300 es",gi=2e3,ea=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=1234567,Or=Math.PI/180,Gr=180/Math.PI;function ei(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function dh(i,e){return(i%e+e)%e}function jp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Qp(i,e,t){return i!==e?(t-i)/(e-i):0}function kr(i,e,t){return(1-t)*i+t*e}function em(i,e,t,n){return kr(i,e,1-Math.exp(-t*n))}function tm(i,e=1){return e-Math.abs(dh(i,e*2)-e)}function nm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function im(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function sm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function rm(i,e){return i+Math.random()*(e-i)}function om(i){return i*(.5-Math.random())}function am(i){i!==void 0&&(fu=i);let e=fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lm(i){return i*Or}function cm(i){return i*Gr}function hm(i){return(i&i-1)===0&&i!==0}function um(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function fm(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),d=o((e+n)/2),u=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*d,l*u,l*h,a*c);break;case"YZY":i.set(l*h,a*d,l*u,a*c);break;case"ZXZ":i.set(l*u,l*h,a*d,a*c);break;case"XZX":i.set(a*d,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*d,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*d,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ms={DEG2RAD:Or,RAD2DEG:Gr,generateUUID:ei,clamp:qt,euclideanModulo:dh,mapLinear:jp,inverseLerp:Qp,lerp:kr,damp:em,pingpong:tm,smoothstep:nm,smootherstep:im,randInt:sm,randFloat:rm,randFloatSpread:om,seededRandom:am,degToRad:lm,radToDeg:cm,isPowerOfTwo:hm,ceilPowerOfTwo:um,floorPowerOfTwo:dm,setQuaternionFromProperEuler:fm,normalize:vt,denormalize:Fn},fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=a,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],u=n[7],h=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],x=s[1],_=s[4],v=s[7],I=s[2],S=s[5],w=s[8];return r[0]=o*M+a*x+l*I,r[3]=o*m+a*_+l*S,r[6]=o*p+a*v+l*w,r[1]=c*M+d*x+u*I,r[4]=c*m+d*_+u*S,r[7]=c*p+d*v+u*w,r[2]=h*M+f*x+g*I,r[5]=h*m+f*_+g*S,r[8]=h*p+f*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*r*d+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=d*o-a*c,h=a*l-d*r,f=c*r-o*l,g=t*u+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return e[0]=u*M,e[1]=(s*c-d*n)*M,e[2]=(a*n-s*o)*M,e[3]=h*M,e[4]=(d*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qa.makeScale(e,t)),this}rotate(e){return this.premultiply(Qa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qa=new ot;function Pd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ta(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pm(){let i=ta("canvas");return i.style.display="block",i}var pu={};function Ur(i){i in pu||(pu[i]=!0,console.warn(i))}function mm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function gm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var ht={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===bt&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===bt&&(i.r=Ys(i.r),i.g=Ys(i.g),i.b=Ys(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?Ra:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mu=[.64,.33,.3,.6,.15,.06],gu=[.2126,.7152,.0722],xu=[.3127,.329],vu=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yu=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ht.define({[ar]:{primaries:mu,whitePoint:xu,transfer:Ra,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:gu,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:mu,whitePoint:xu,transfer:bt,toXYZ:vu,fromXYZ:yu,luminanceCoefficients:gu,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}});var As,gc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=ta("canvas")),As.width=e.width,As.height=e.height;let n=As.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=As}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vm=0,na=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(el(s[o].image)):r.push(el(s[o]))}else r=el(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function el(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ym=0,xn=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=rs,s=rs,r=jn,o=os,a=Bn,l=vi,c=i.DEFAULT_ANISOTROPY,d=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=ei(),this.name="",this.source=new na(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $t:e.x=e.x-Math.floor(e.x);break;case rs:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $t:e.y=e.y-Math.floor(e.y);break;case rs:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=vd;xn.DEFAULT_ANISOTROPY=1;var zt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,v=(f+1)/2,I=(p+1)/2,S=(d+h)/4,w=(u+M)/4,C=(g+m)/4;return _>v&&_>I?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=S/n,r=w/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=C/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=C/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(u-M)*(u-M)+(h-d)*(h-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-M)/x,this.z=(h-d)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xc=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new xn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new na(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends xc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ia=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vc=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],h=r[o+0],f=r[o+1],g=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=M;return}if(u!==M||l!==h||c!==f||d!==g){let m=1-a,p=l*h+c*f+d*g+u*M,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let I=Math.sqrt(_),S=Math.atan2(I,p*x);m=Math.sin(m*S)/I,a=Math.sin(a*S)/I}let v=a*x;if(l=l*m+h*v,c=c*m+f*v,d=d*m+g*v,u=u*m+M*v,m===1-a){let I=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=I,c*=I,d*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[o],h=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-a*f,e[t+2]=c*g+d*f+a*h-l*u,e[t+3]=d*g-a*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(s/2),u=a(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=n+a+u;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(d-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+s*c-r*l,this._y=s*d+o*l+r*a-n*c,this._z=r*d+o*c+n*l-s*a,this._w=o*d-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=s*u+this._y*h,this._z=r*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),d=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*d,this.y=n+l*d+a*c-r*u,this.z=s+l*u+r*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return tl.copy(this).projectOnVector(e),this.sub(tl)}reflect(e){return this.sub(tl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tl=new O,_u=new ti,_i=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),_o.subVectors(this.max,Tr),Rs.subVectors(e.a,Tr),Cs.subVectors(e.b,Tr),Ps.subVectors(e.c,Tr),Ai.subVectors(Cs,Rs),Ri.subVectors(Ps,Cs),Ji.subVectors(Rs,Ps);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Ji.z,Ji.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Ji.z,0,-Ji.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Ji.y,Ji.x,0];return!nl(t,Rs,Cs,Ps,_o)||(t=[1,0,0,0,1,0,0,0,1],!nl(t,Rs,Cs,Ps,_o))?!1:(Mo.crossVectors(Ai,Ri),t=[Mo.x,Mo.y,Mo.z],nl(t,Rs,Cs,Ps,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ci=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,yo=new _i,Rs=new O,Cs=new O,Ps=new O,Ai=new O,Ri=new O,Ji=new O,Tr=new O,_o=new O,Mo=new O,Ki=new O;function nl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ki.fromArray(i,r);let a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),d=n.dot(Ki);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var _m=new _i,wr=new O,il=new O,ls=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_m.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(wr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(il)),this.expandByPoint(wr.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new O,sl=new O,bo=new O,Ci=new O,rl=new O,Eo=new O,ol=new O,sa=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){sl.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(sl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=Ci.dot(this.direction),l=-Ci.dot(bo),c=Ci.lengthSq(),d=Math.abs(1-o*o),u,h,f,g;if(d>0)if(u=o*l-a,h=o*a-l,g=r*d,u>=0)if(h>=-g)if(h<=g){let M=1/d;u*=M,h*=M,f=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h=-r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*r+a)),h=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(u=Math.max(0,-(o*r+a)),h=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+h*(h+2*l)+c);else h=o>0?-r:r,u=Math.max(0,-(o*h+a)),f=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sl).addScaledVector(bo,h),f}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let n=hi.dot(this.direction),s=hi.dot(hi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,s,r){rl.subVectors(t,e),Eo.subVectors(n,e),ol.crossVectors(rl,Eo);let o=this.direction.dot(ol),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let l=a*this.direction.dot(Eo.crossVectors(Ci,Eo));if(l<0)return null;let c=a*this.direction.dot(rl.cross(Ci));if(c<0||l+c>o)return null;let d=-a*Ci.dot(ol);return d<0?null:this.at(d/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yt=class i{constructor(e,t,n,s,r,o,a,l,c,d,u,h,f,g,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,d,u,h,f,g,M,m)}set(e,t,n,s,r,o,a,l,c,d,u,h,f,g,M,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let h=o*d,f=o*u,g=a*d,M=a*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-M*c,t[9]=-a*l,t[2]=M-h*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){let h=l*d,f=l*u,g=c*d,M=c*u;t[0]=h+M*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*d,t[9]=-a,t[2]=f*a-g,t[6]=M+h*a,t[10]=o*l}else if(e.order==="ZXY"){let h=l*d,f=l*u,g=c*d,M=c*u;t[0]=h-M*a,t[4]=-o*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*d,t[9]=M-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let h=o*d,f=o*u,g=a*d,M=a*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+M,t[1]=l*u,t[5]=M*c+h,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let h=o*l,f=o*c,g=a*l,M=a*c;t[0]=l*d,t[4]=M-h*u,t[8]=g*u+f,t[1]=u,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-M*u}else if(e.order==="XZY"){let h=o*l,f=o*c,g=a*l,M=a*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+M,t[5]=o*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*d,t[10]=M*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mm,e,bm)}lookAt(e,t,n){let s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Pi.crossVectors(n,bn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Pi.crossVectors(n,bn)),Pi.normalize(),So.crossVectors(bn,Pi),s[0]=Pi.x,s[4]=So.x,s[8]=bn.x,s[1]=Pi.y,s[5]=So.y,s[9]=bn.y,s[2]=Pi.z,s[6]=So.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],u=n[5],h=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],x=n[3],_=n[7],v=n[11],I=n[15],S=s[0],w=s[4],C=s[8],b=s[12],y=s[1],A=s[5],F=s[9],k=s[13],X=s[2],te=s[6],z=s[10],ee=s[14],Y=s[3],ue=s[7],ve=s[11],ye=s[15];return r[0]=o*S+a*y+l*X+c*Y,r[4]=o*w+a*A+l*te+c*ue,r[8]=o*C+a*F+l*z+c*ve,r[12]=o*b+a*k+l*ee+c*ye,r[1]=d*S+u*y+h*X+f*Y,r[5]=d*w+u*A+h*te+f*ue,r[9]=d*C+u*F+h*z+f*ve,r[13]=d*b+u*k+h*ee+f*ye,r[2]=g*S+M*y+m*X+p*Y,r[6]=g*w+M*A+m*te+p*ue,r[10]=g*C+M*F+m*z+p*ve,r[14]=g*b+M*k+m*ee+p*ye,r[3]=x*S+_*y+v*X+I*Y,r[7]=x*w+_*A+v*te+I*ue,r[11]=x*C+_*F+v*z+I*ve,r[15]=x*b+_*k+v*ee+I*ye,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],M=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*h+n*c*h+s*a*f-n*l*f)+M*(+t*l*f-t*c*h+r*o*h-s*o*f+s*c*d-r*l*d)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*d-n*c*d)+p*(-s*a*d-t*l*u+t*a*h+s*o*u-n*o*h+n*l*d)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],M=e[13],m=e[14],p=e[15],x=u*m*c-M*h*c+M*l*f-a*m*f-u*l*p+a*h*p,_=g*h*c-d*m*c-g*l*f+o*m*f+d*l*p-o*h*p,v=d*M*c-g*u*c+g*a*f-o*M*f-d*a*p+o*u*p,I=g*u*l-d*M*l-g*a*h+o*M*h+d*a*m-o*u*m,S=t*x+n*_+s*v+r*I;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=x*w,e[1]=(M*h*r-u*m*r-M*s*f+n*m*f+u*s*p-n*h*p)*w,e[2]=(a*m*r-M*l*r+M*s*c-n*m*c-a*s*p+n*l*p)*w,e[3]=(u*l*r-a*h*r-u*s*c+n*h*c+a*s*f-n*l*f)*w,e[4]=_*w,e[5]=(d*m*r-g*h*r+g*s*f-t*m*f-d*s*p+t*h*p)*w,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*w,e[7]=(o*h*r-d*l*r+d*s*c-t*h*c-o*s*f+t*l*f)*w,e[8]=v*w,e[9]=(g*u*r-d*M*r-g*n*f+t*M*f+d*n*p-t*u*p)*w,e[10]=(o*M*r-g*a*r+g*n*c-t*M*c-o*n*p+t*a*p)*w,e[11]=(d*a*r-o*u*r-d*n*c+t*u*c+o*n*f-t*a*f)*w,e[12]=I*w,e[13]=(d*M*s-g*u*s+g*n*h-t*M*h-d*n*m+t*u*m)*w,e[14]=(g*a*s-o*M*s-g*n*l+t*M*l+o*n*m-t*a*m)*w,e[15]=(o*u*s-d*a*s+d*n*l-t*u*l-o*n*h+t*a*h)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,d=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,d*a+n,d*l-s*o,0,c*l-s*a,d*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,d=o+o,u=a+a,h=r*c,f=r*d,g=r*u,M=o*d,m=o*u,p=a*u,x=l*c,_=l*d,v=l*u,I=n.x,S=n.y,w=n.z;return s[0]=(1-(M+p))*I,s[1]=(f+v)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(f-v)*S,s[5]=(1-(h+p))*S,s[6]=(m+x)*S,s[7]=0,s[8]=(g+_)*w,s[9]=(m-x)*w,s[10]=(1-(h+M))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Is.set(s[0],s[1],s[2]).length(),o=Is.set(s[4],s[5],s[6]).length(),a=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],kn.copy(this);let c=1/r,d=1/o,u=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,t.setFromRotationMatrix(kn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=gi){let l=this.elements,c=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),f,g;if(a===gi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ea)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=gi){let l=this.elements,c=1/(t-e),d=1/(n-s),u=1/(o-r),h=(t+e)*c,f=(n+s)*d,g,M;if(a===gi)g=(o+r)*u,M=-2*u;else if(a===ea)g=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new O,kn=new yt,Mm=new O(0,0,0),bm=new O(1,1,1),Pi=new O,So=new O,bn=new O,Mu=new yt,bu=new ti,ni=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],d=s[9],u=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Em=0,Eu=new O,Ls=new ti,ui=new yt,To=new O,Ar=new O,Sm=new O,Tm=new ti,Su=new O(1,0,0),Tu=new O(0,1,0),wu=new O(0,0,1),Au={type:"added"},wm={type:"removed"},Ds={type:"childadded",child:null},al={type:"childremoved",child:null},rn=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new ni,n=new ti,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new ot}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Su,e)}rotateY(e){return this.rotateOnAxis(Tu,e)}rotateZ(e){return this.rotateOnAxis(wu,e)}translateOnAxis(e,t){return Eu.copy(e).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Su,e)}translateY(e){return this.translateOnAxis(Tu,e)}translateZ(e){return this.translateOnAxis(wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Ar,To,this.up):ui.lookAt(To,Ar,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ui),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Au),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wm),al.child=e,this.dispatchEvent(al),al.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Au),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Tm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),u=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};rn.DEFAULT_UP=new O(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new O,di=new O,ll=new O,fi=new O,Us=new O,Ns=new O,Ru=new O,cl=new O,hl=new O,ul=new O,dl=new zt,fl=new zt,pl=new zt,Ui=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),di.subVectors(n,t),ll.subVectors(e,t);let o=zn.dot(zn),a=zn.dot(di),l=zn.dot(ll),c=di.dot(di),d=di.dot(ll),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let h=1/u,f=(c*l-a*d)*h,g=(o*d-a*l)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(o,fi.y),l.addScaledVector(a,fi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return dl.setScalar(0),fl.setScalar(0),pl.setScalar(0),dl.fromBufferAttribute(e,t),fl.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(dl,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(pl,r.z),o}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),di.subVectors(e,t),zn.cross(di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),zn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Us.subVectors(s,n),Ns.subVectors(r,n),cl.subVectors(e,n);let l=Us.dot(cl),c=Ns.dot(cl);if(l<=0&&c<=0)return t.copy(n);hl.subVectors(e,s);let d=Us.dot(hl),u=Ns.dot(hl);if(d>=0&&u<=d)return t.copy(s);let h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(Us,o);ul.subVectors(e,r);let f=Us.dot(ul),g=Ns.dot(ul);if(g>=0&&f<=g)return t.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Ns,a);let m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Ru.subVectors(r,s),a=(u-d)/(u-d+(f-g)),t.copy(s).addScaledVector(Ru,a);let p=1/(m+M+h);return o=M*p,a=h*p,t.copy(n).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},wo={h:0,s:0,l:0};function ml(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=ht.workingColorSpace){if(e=dh(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ml(o,r,e+1/3),this.g=ml(o,r,e),this.b=ml(o,r,e-1/3)}return ht.toWorkingColorSpace(this,s),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return ht.fromWorkingColorSpace(tn.copy(this),e),Math.round(qt(tn.r*255,0,255))*65536+Math.round(qt(tn.g*255,0,255))*256+Math.round(qt(tn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=d<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Ct){ht.fromWorkingColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(wo);let n=kr(Ii.h,wo.h,t),s=kr(Ii.s,wo.s,t),r=kr(Ii.l,wo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new tt;tt.NAMES=Id;var Am=0,Fi=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ei(),this.name="",this.blending=$s,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Il,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pl&&(n.blendSrc=this.blendSrc),this.blendDst!==Il&&(n.blendDst=this.blendDst),this.blendEquation!==is&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},on=class extends Fi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new O,Ao=new fe,sn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mc&&(e.usage=this.usage),e}};var ra=class extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var oa=class extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _t=class extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rm=0,Rn=new yt,gl=new rn,Os=new O,En=new _i,Rr=new _i,Xt=new O,Kt=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?oa:ra)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(En.min,Rr.min),En.expandByPoint(Xt),Xt.addVectors(En.max,Rr.max),En.expandByPoint(Xt)):(En.expandByPoint(Rr.min),En.expandByPoint(Rr.max))}En.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Xt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Xt.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(e,c),Xt.add(Os)),s=Math.max(s,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new O,l[C]=new O;let c=new O,d=new O,u=new O,h=new fe,f=new fe,g=new fe,M=new O,m=new O;function p(C,b,y){c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,b),u.fromBufferAttribute(n,y),h.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,y),d.sub(c),u.sub(c),f.sub(h),g.sub(h);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(M.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(A),a[C].add(M),a[b].add(M),a[y].add(M),l[C].add(m),l[b].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,b=x.length;C<b;++C){let y=x[C],A=y.start,F=y.count;for(let k=A,X=A+F;k<X;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let _=new O,v=new O,I=new O,S=new O;function w(C){I.fromBufferAttribute(s,C),S.copy(I);let b=a[C];_.copy(b),_.sub(I.multiplyScalar(I.dot(b))).normalize(),v.crossVectors(S,b);let A=v.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,A)}for(let C=0,b=x.length;C<b;++C){let y=x[C],A=y.start,F=y.count;for(let k=A,X=A+F;k<X;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,d=new O,u=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),M=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),d.subVectors(o,r),u.subVectors(s,r),d.cross(u),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,u=a.normalized,h=new c.constructor(l.length*d),f=0,g=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new sn(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let d=0,u=c.length;d<u;d++){let h=c[d],f=e(h,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){let f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],u=r[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cu=new yt,ji=new sa,Ro=new ls,Pu=new O,Co=new O,Po=new O,Io=new O,xl=new O,Lo=new O,Iu=new O,Do=new O,G=class extends rn{constructor(e=new Kt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=a[l],u=r[l];d!==0&&(xl.fromBufferAttribute(u,e),o?Lo.addScaledVector(xl,d):Lo.addScaledVector(xl.sub(t),d))}t.add(Lo)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Ro.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Ro,Pu)===null||ji.origin.distanceToSquared(Pu)>(e.far-e.near)**2))&&(Cu.copy(r).invert(),ji.copy(e.ray).applyMatrix4(Cu),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){let m=h[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,I=_;v<I;v+=3){let S=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);s=Uo(this,p,e,n,c,d,u,S,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let x=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);s=Uo(this,o,e,n,c,d,u,x,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=h.length;g<M;g++){let m=h[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,I=_;v<I;v+=3){let S=v,w=v+1,C=v+2;s=Uo(this,p,e,n,c,d,u,S,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let x=m,_=m+1,v=m+2;s=Uo(this,o,e,n,c,d,u,x,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Cm(i,e,t,n,s,r,o,a){let l;if(e.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ki,a),l===null)return null;Do.copy(a),Do.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:i}}function Uo(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Co),i.getVertexPosition(l,Po),i.getVertexPosition(c,Io);let d=Cm(i,e,t,n,Co,Po,Io,Iu);if(d){let u=new O;Ui.getBarycoord(Iu,Co,Po,Io,u),s&&(d.uv=Ui.getInterpolatedAttribute(s,a,l,c,u,new fe)),r&&(d.uv1=Ui.getInterpolatedAttribute(r,a,l,c,u,new fe)),o&&(d.normal=Ui.getInterpolatedAttribute(o,a,l,c,u,new O),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new O,materialIndex:0};Ui.getNormal(Co,Po,Io,h.normal),d.face=h,d.barycoord=u}return d}var je=class i extends Kt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],d=[],u=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(d,3)),this.setAttribute("uv",new _t(u,2));function g(M,m,p,x,_,v,I,S,w,C,b){let y=v/w,A=I/C,F=v/2,k=I/2,X=S/2,te=w+1,z=C+1,ee=0,Y=0,ue=new O;for(let ve=0;ve<z;ve++){let ye=ve*A-k;for(let we=0;we<te;we++){let me=we*y-F;ue[M]=me*x,ue[m]=ye*_,ue[p]=X,c.push(ue.x,ue.y,ue.z),ue[M]=0,ue[m]=0,ue[p]=S>0?1:-1,d.push(ue.x,ue.y,ue.z),u.push(we/w),u.push(1-ve/C),ee+=1}}for(let ve=0;ve<C;ve++)for(let ye=0;ye<w;ye++){let we=h+ye+te*ve,me=h+ye+te*(ve+1),B=h+(ye+1)+te*(ve+1),Z=h+(ye+1)+te*ve;l.push(we,me,Z),l.push(me,B,Z),Y+=6}a.addGroup(f,Y,b),f+=Y,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){let e={};for(let t=0;t<i.length;t++){let n=nr(i[t]);for(let s in n)e[s]=n[s]}return e}function Pm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ld(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Im={clone:nr,merge:dn},Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Fi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},aa=class extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Li=new O,Lu=new fe,Du=new fe,fn=class extends aa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Lu,Du),t.subVectors(Du,Lu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,zs=1,yc=class extends rn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new fn(ks,zs,e,t);s.layers=this.layers,this.add(s);let r=new fn(ks,zs,e,t);r.layers=this.layers,this.add(r);let o=new fn(ks,zs,e,t);o.layers=this.layers,this.add(o);let a=new fn(ks,zs,e,t);a.layers=this.layers,this.add(a);let l=new fn(ks,zs,e,t);l.layers=this.layers,this.add(l);let c=new fn(ks,zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},la=class extends xn{constructor(e,t,n,s,r,o,a,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,n,s,r,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_c=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new la(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ni});r.uniforms.tEquirect.value=t;let o=new G(s,r),a=t.minFilter;return t.minFilter===os&&(t.minFilter=jn),new yc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},vl=new O,Um=new O,Nm=new ot,mi=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=vl.subVectors(n,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nm.getNormalMatrix(e),s=this.coplanarPoint(vl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qi=new ls,No=new O,Xr=class{constructor(e=new mi,t=new mi,n=new mi,s=new mi,r=new mi,o=new mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],d=s[5],u=s[6],h=s[7],f=s[8],g=s[9],M=s[10],m=s[11],p=s[12],x=s[13],_=s[14],v=s[15];if(n[0].setComponents(l-r,h-c,m-f,v-p).normalize(),n[1].setComponents(l+r,h+c,m+f,v+p).normalize(),n[2].setComponents(l+o,h+d,m+g,v+x).normalize(),n[3].setComponents(l-o,h-d,m-g,v-x).normalize(),n[4].setComponents(l-a,h-u,m-M,v-_).normalize(),t===gi)n[5].setComponents(l+a,h+u,m+M,v+_).normalize();else if(t===ea)n[5].setComponents(a,u,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(No.x=s.normal.x>0?e.max.x:e.min.x,No.y=s.normal.y>0?e.max.y:e.min.y,No.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Om(i){let e=new WeakMap;function t(a,l){let c=a.array,d=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){let g=u[h],M=u[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,u[h]=M)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){let M=u[f];i.bufferSubData(c,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var We=class i extends Kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,d=l+1,u=e/a,h=t/l,f=[],g=[],M=[],m=[];for(let p=0;p<d;p++){let x=p*h-o;for(let _=0;_<c;_++){let v=_*u-r;g.push(v,-x,0),M.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let _=x+c*p,v=x+c*(p+1),I=x+1+c*(p+1),S=x+1+c*p;f.push(_,v,S),f.push(v,I,S)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},km=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
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
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gm=`#ifdef USE_AOMAP
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
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xm=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
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
#endif`,Km=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,o0=`#define PI 3.141592653589793
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
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l0=`vec3 transformedNormal = objectNormal;
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
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",p0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,m0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
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
}`,T0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,w0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,R0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,C0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,P0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,L0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,N0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,O0=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q0=`#if defined( USE_POINTS_UV )
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
#endif`,$0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,J0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
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
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rg=`#ifdef USE_NORMALMAP
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
#endif`,og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ug=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,_g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,bg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Sg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ag=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ig=`#ifdef USE_TRANSMISSION
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
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kg=`uniform sampler2D t2D;
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
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
}`,Gg=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Wg=`#define DISTANCE
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
}`,Xg=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zg=`uniform float scale;
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
}`,Yg=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Kg=`uniform vec3 diffuse;
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
}`,jg=`#define LAMBERT
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
}`,Qg=`#define LAMBERT
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
}`,ex=`#define MATCAP
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
}`,tx=`#define MATCAP
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
}`,nx=`#define NORMAL
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
}`,ix=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sx=`#define PHONG
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
}`,rx=`#define PHONG
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
}`,ox=`#define STANDARD
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
}`,ax=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,cx=`#define TOON
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
}`,hx=`uniform float size;
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
}`,ux=`uniform vec3 diffuse;
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
}`,dx=`#include <common>
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
}`,fx=`uniform vec3 color;
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
}`,px=`uniform float rotation;
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
}`,mx=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:km,alphahash_pars_fragment:zm,alphamap_fragment:Fm,alphamap_pars_fragment:Bm,alphatest_fragment:Hm,alphatest_pars_fragment:Vm,aomap_fragment:Gm,aomap_pars_fragment:Wm,batching_pars_vertex:Xm,batching_vertex:qm,begin_vertex:$m,beginnormal_vertex:Zm,bsdfs:Ym,iridescence_fragment:Jm,bumpmap_pars_fragment:Km,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Qm,clipping_planes_pars_vertex:e0,clipping_planes_vertex:t0,color_fragment:n0,color_pars_fragment:i0,color_pars_vertex:s0,color_vertex:r0,common:o0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:l0,displacementmap_pars_vertex:c0,displacementmap_vertex:h0,emissivemap_fragment:u0,emissivemap_pars_fragment:d0,colorspace_fragment:f0,colorspace_pars_fragment:p0,envmap_fragment:m0,envmap_common_pars_fragment:g0,envmap_pars_fragment:x0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:C0,envmap_vertex:y0,fog_vertex:_0,fog_pars_vertex:M0,fog_fragment:b0,fog_pars_fragment:E0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:T0,lights_lambert_fragment:w0,lights_lambert_pars_fragment:A0,lights_pars_begin:R0,lights_toon_fragment:P0,lights_toon_pars_fragment:I0,lights_phong_fragment:L0,lights_phong_pars_fragment:D0,lights_physical_fragment:U0,lights_physical_pars_fragment:N0,lights_fragment_begin:O0,lights_fragment_maps:k0,lights_fragment_end:z0,logdepthbuf_fragment:F0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:V0,map_fragment:G0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:$0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:Y0,morphcolor_vertex:J0,morphnormal_vertex:K0,morphtarget_pars_vertex:j0,morphtarget_vertex:Q0,normal_fragment_begin:eg,normal_fragment_maps:tg,normal_pars_fragment:ng,normal_pars_vertex:ig,normal_vertex:sg,normalmap_pars_fragment:rg,clearcoat_normal_fragment_begin:og,clearcoat_normal_fragment_maps:ag,clearcoat_pars_fragment:lg,iridescence_pars_fragment:cg,opaque_fragment:hg,packing:ug,premultiplied_alpha_fragment:dg,project_vertex:fg,dithering_fragment:pg,dithering_pars_fragment:mg,roughnessmap_fragment:gg,roughnessmap_pars_fragment:xg,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:yg,shadowmap_vertex:_g,shadowmask_pars_fragment:Mg,skinbase_vertex:bg,skinning_pars_vertex:Eg,skinning_vertex:Sg,skinnormal_vertex:Tg,specularmap_fragment:wg,specularmap_pars_fragment:Ag,tonemapping_fragment:Rg,tonemapping_pars_fragment:Cg,transmission_fragment:Pg,transmission_pars_fragment:Ig,uv_pars_fragment:Lg,uv_pars_vertex:Dg,uv_vertex:Ug,worldpos_vertex:Ng,background_vert:Og,background_frag:kg,backgroundCube_vert:zg,backgroundCube_frag:Fg,cube_vert:Bg,cube_frag:Hg,depth_vert:Vg,depth_frag:Gg,distanceRGBA_vert:Wg,distanceRGBA_frag:Xg,equirect_vert:qg,equirect_frag:$g,linedashed_vert:Zg,linedashed_frag:Yg,meshbasic_vert:Jg,meshbasic_frag:Kg,meshlambert_vert:jg,meshlambert_frag:Qg,meshmatcap_vert:ex,meshmatcap_frag:tx,meshnormal_vert:nx,meshnormal_frag:ix,meshphong_vert:sx,meshphong_frag:rx,meshphysical_vert:ox,meshphysical_frag:ax,meshtoon_vert:lx,meshtoon_frag:cx,points_vert:hx,points_frag:ux,shadow_vert:dx,shadow_frag:fx,sprite_vert:px,sprite_frag:mx},Ae={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Kn={basic:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:dn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:dn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new tt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:dn([Ae.points,Ae.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:dn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:dn([Ae.common,Ae.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:dn([Ae.sprite,Ae.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:dn([Ae.common,Ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:dn([Ae.lights,Ae.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Kn.physical={uniforms:dn([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Oo={r:0,b:0,g:0},es=new ni,gx=new yt;function xx(i,e,t,n,s,r,o){let a=new tt(0),l=r===!0?0:1,c,d,u=null,h=0,f=null;function g(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function M(x){let _=!1,v=g(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===Aa)?(d===void 0&&(d=new G(new je(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:nr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),es.copy(_.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(gx.makeRotationFromEuler(es)),d.material.toneMapped=ht.getTransfer(v.colorSpace)!==bt,(u!==v||h!==v.version||f!==i.toneMapping)&&(d.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new G(new We(2,2),new Cn({name:"BackgroundMaterial",uniforms:nr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,_){x.getRGB(Oo,Ld(i)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(x,_=1){a.set(x),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:M,addToRenderList:m}}function vx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(y,A,F,k,X){let te=!1,z=u(k,F,A);r!==z&&(r=z,c(r.object)),te=f(y,k,F,X),te&&g(y,k,F,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,v(y,A,F,k),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function u(y,A,F){let k=F.wireframe===!0,X=n[y.id];X===void 0&&(X={},n[y.id]=X);let te=X[A.id];te===void 0&&(te={},X[A.id]=te);let z=te[k];return z===void 0&&(z=h(l()),te[k]=z),z}function h(y){let A=[],F=[],k=[];for(let X=0;X<t;X++)A[X]=0,F[X]=0,k[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:F,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,A,F,k){let X=r.attributes,te=A.attributes,z=0,ee=F.getAttributes();for(let Y in ee)if(ee[Y].location>=0){let ve=X[Y],ye=te[Y];if(ye===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ye=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ye=y.instanceColor)),ve===void 0||ve.attribute!==ye||ye&&ve.data!==ye.data)return!0;z++}return r.attributesNum!==z||r.index!==k}function g(y,A,F,k){let X={},te=A.attributes,z=0,ee=F.getAttributes();for(let Y in ee)if(ee[Y].location>=0){let ve=te[Y];ve===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(ve=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(ve=y.instanceColor));let ye={};ye.attribute=ve,ve&&ve.data&&(ye.data=ve.data),X[Y]=ye,z++}r.attributes=X,r.attributesNum=z,r.index=k}function M(){let y=r.newAttributes;for(let A=0,F=y.length;A<F;A++)y[A]=0}function m(y){p(y,0)}function p(y,A){let F=r.newAttributes,k=r.enabledAttributes,X=r.attributeDivisors;F[y]=1,k[y]===0&&(i.enableVertexAttribArray(y),k[y]=1),X[y]!==A&&(i.vertexAttribDivisor(y,A),X[y]=A)}function x(){let y=r.newAttributes,A=r.enabledAttributes;for(let F=0,k=A.length;F<k;F++)A[F]!==y[F]&&(i.disableVertexAttribArray(F),A[F]=0)}function _(y,A,F,k,X,te,z){z===!0?i.vertexAttribIPointer(y,A,F,X,te):i.vertexAttribPointer(y,A,F,k,X,te)}function v(y,A,F,k){M();let X=k.attributes,te=F.getAttributes(),z=A.defaultAttributeValues;for(let ee in te){let Y=te[ee];if(Y.location>=0){let ue=X[ee];if(ue===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(ue=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(ue=y.instanceColor)),ue!==void 0){let ve=ue.normalized,ye=ue.itemSize,we=e.get(ue);if(we===void 0)continue;let me=we.buffer,B=we.type,Z=we.bytesPerElement,ae=B===i.INT||B===i.UNSIGNED_INT||ue.gpuType===rh;if(ue.isInterleavedBufferAttribute){let de=ue.data,Se=de.stride,Ce=ue.offset;if(de.isInstancedInterleavedBuffer){for(let ze=0;ze<Y.locationSize;ze++)p(Y.location+ze,de.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ze=0;ze<Y.locationSize;ze++)m(Y.location+ze);i.bindBuffer(i.ARRAY_BUFFER,me);for(let ze=0;ze<Y.locationSize;ze++)_(Y.location+ze,ye/Y.locationSize,B,ve,Se*Z,(Ce+ye/Y.locationSize*ze)*Z,ae)}else{if(ue.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)p(Y.location+de,ue.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let de=0;de<Y.locationSize;de++)m(Y.location+de);i.bindBuffer(i.ARRAY_BUFFER,me);for(let de=0;de<Y.locationSize;de++)_(Y.location+de,ye/Y.locationSize,B,ve,ye*Z,ye/Y.locationSize*de*Z,ae)}}else if(z!==void 0){let ve=z[ee];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(Y.location,ve);break;case 3:i.vertexAttrib3fv(Y.location,ve);break;case 4:i.vertexAttrib4fv(Y.location,ve);break;default:i.vertexAttrib1fv(Y.location,ve)}}}}x()}function I(){C();for(let y in n){let A=n[y];for(let F in A){let k=A[F];for(let X in k)d(k[X].object),delete k[X];delete A[F]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let F in A){let k=A[F];for(let X in k)d(k[X].object),delete k[X];delete A[F]}delete n[y.id]}function w(y){for(let A in n){let F=n[A];if(F[y.id]===void 0)continue;let k=F[y.id];for(let X in k)d(k[X].object),delete k[X];delete F[y.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:M,enableAttribute:m,disableUnusedAttributes:x}}function yx(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function o(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function a(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,n,1)}function l(c,d,u,h){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,u);let g=0;for(let M=0;M<u;M++)g+=d[M]*h[M];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _x(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===Qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==vi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Qn&&!C)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:I,maxSamples:S}}function Mx(i){let e=this,t=null,n=0,s=!1,r=!1,o=new mi,a=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let f=u.length!==0||h||n!==0||s;return s=h,n=u.length,f},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){let g=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?d(null):c();else{let x=r?0:n,_=x*4,v=p.clippingState||null;l.value=v,v=d(g,h,_,f);for(let I=0;I!==_;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,h,f,g){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==M;++_,v+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function bx(i){let e=new WeakMap;function t(o,a){return a===Fl?o.mapping=js:a===Bl&&(o.mapping=Qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Fl||a===Bl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new _c(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ca=class extends aa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xs=4,Uu=[.125,.215,.35,.446,.526,.582],ss=20,yl=new ca,Nu=new tt,_l=null,Ml=0,bl=0,El=!1,ns=(1+Math.sqrt(5))/2,Fs=1/ns,Ou=[new O(-ns,Fs,0),new O(ns,Fs,0),new O(-Fs,0,ns),new O(Fs,0,ns),new O(0,ns,-Fs),new O(0,ns,Fs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],ir=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){_l=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,Ml,bl),this._renderer.xr.enabled=El,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Qr,format:Bn,colorSpace:ar,depthBuffer:!1},s=ku(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(r)),this._blurMaterial=Sx(r,e,t)}return s}_compileMaterial(e){let t=new G(this._lodPlanes[0],e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,n,s){let a=new fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(Nu),d.toneMapping=Oi,d.autoClear=!1;let f=new on({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new G(new je,f),M=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,M=!0):(f.color.copy(Nu),M=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;ko(s,x*_,p>2?_:0,_,_),d.setRenderTarget(s),M&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;ko(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ou[(s-r-1)%Ou.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,u=new G(this._lodPlanes[s],c),h=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ss-1),M=r/g,m=isFinite(r)?1+Math.floor(d*M):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],x=0;for(let w=0;w<ss;++w){let C=w/M,b=Math.exp(-C*C/2);p.push(b),w===0?x+=b:w<m&&(x+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;let v=this._sizeLods[s],I=3*v*(s>_-Xs?s-_+Xs:0),S=4*(this._cubeSize-v);ko(t,I,S,3*v,2*v),l.setRenderTarget(t),l.render(u,yl)}};function Ex(i){let e=[],t=[],n=[],s=i,r=i-Xs+1+Uu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Xs?l=Uu[o-i+Xs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,M=3,m=2,p=1,x=new Float32Array(M*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,C=S>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(b,M*g*S),_.set(h,m*g*S);let y=[S,S,S,S,S,S];v.set(y,p*g*S)}let I=new Kt;I.setAttribute("position",new sn(x,M)),I.setAttribute("uv",new sn(_,m)),I.setAttribute("faceIndex",new sn(v,p)),e.push(I),s>Xs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ku(i,e,t){let n=new yi(i,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Sx(i,e,t){let n=new Float32Array(ss),s=new O(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function zu(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fh(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Fu(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function fh(){return`

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
	`}function Tx(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Fl||l===Bl,d=l===js||l===Qs;if(c||d){let u=e.get(a),h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new ir(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||d&&f&&s(f)?(t===null&&(t=new ir(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Ax(i,e,t,n){let s={},r=new WeakMap;function o(u){let h=u.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let M=h.morphAttributes[g];for(let m=0,p=M.length;m<p;m++)e.remove(M[m])}h.removeEventListener("dispose",o),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(u){let h=u.attributes;for(let g in h)e.update(h[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let M=f[g];for(let m=0,p=M.length;m<p;m++)e.update(M[m],i.ARRAY_BUFFER)}}function c(u){let h=[],f=u.index,g=u.attributes.position,M=0;if(f!==null){let x=f.array;M=f.version;for(let _=0,v=x.length;_<v;_+=3){let I=x[_+0],S=x[_+1],w=x[_+2];h.push(I,S,S,w,w,I)}}else if(g!==void 0){let x=g.array;M=g.version;for(let _=0,v=x.length/3-1;_<v;_+=3){let I=_+0,S=_+1,w=_+2;h.push(I,S,S,w,w,I)}}else return;let m=new(Pd(h)?oa:ra)(h,1);m.version=M;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){let h=r.get(u);if(h){let f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function Rx(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*o,g),t.update(f,n,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(h,f,g,M){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/o,f[p],M[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,M,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*M[x];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Cx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Px(i,e,t){let n=new WeakMap,s=new zt;function r(o,a,l){let c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0,h=n.get(a);if(h===void 0||h.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),M===!0&&(_=3);let v=a.attributes.position.count*_,I=1;v>e.maxTextureSize&&(I=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*I*4*u),w=new ia(S,v,I,u);w.type=Qn,w.needsUpdate=!0;let C=_*4;for(let y=0;y<u;y++){let A=m[y],F=p[y],k=x[y],X=v*I*4*y;for(let te=0;te<A.count;te++){let z=te*C;f===!0&&(s.fromBufferAttribute(A,te),S[X+z+0]=s.x,S[X+z+1]=s.y,S[X+z+2]=s.z,S[X+z+3]=0),g===!0&&(s.fromBufferAttribute(F,te),S[X+z+4]=s.x,S[X+z+5]=s.y,S[X+z+6]=s.z,S[X+z+7]=0),M===!0&&(s.fromBufferAttribute(k,te),S[X+z+8]=s.x,S[X+z+9]=s.y,S[X+z+10]=s.z,S[X+z+11]=k.itemSize===4?s.w:1)}}h={count:u,texture:w,size:new fe(v,I)},n.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Ix(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,d=l.geometry,u=e.get(l,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ha=class extends xn{constructor(e,t,n,s,r,o,a,l,c,d=Zs){if(d!==Zs&&d!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Zs&&(n=as),n===void 0&&d===tr&&(n=er),super(null,s,r,o,a,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ud=new xn,Bu=new ha(1,1),Nd=new ia,Od=new vc,kd=new la,Hu=[],Vu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function lr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hu[s];if(r===void 0&&(r=new Float32Array(s),Hu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ca(i,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function Ux(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function Ox(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Xu.set(n),i.uniformMatrix2fv(this.addr,!1,Xu),Gt(t,n)}}function kx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Wu.set(n),i.uniformMatrix3fv(this.addr,!1,Wu),Gt(t,n)}}function zx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Gu.set(n),i.uniformMatrix4fv(this.addr,!1,Gu),Gt(t,n)}}function Fx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function Hx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function Vx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function Gx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function Xx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function qx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function $x(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Bu.compareFunction=Cd,r=Bu):r=Ud,t.setTexture2D(e||r,s)}function Zx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Od,s)}function Yx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kd,s)}function Jx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nd,s)}function Kx(i){switch(i){case 5126:return Lx;case 35664:return Dx;case 35665:return Ux;case 35666:return Nx;case 35674:return Ox;case 35675:return kx;case 35676:return zx;case 5124:case 35670:return Fx;case 35667:case 35671:return Bx;case 35668:case 35672:return Hx;case 35669:case 35673:return Vx;case 5125:return Gx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Jx}}function jx(i,e){i.uniform1fv(this.addr,e)}function Qx(i,e){let t=lr(e,this.size,2);i.uniform2fv(this.addr,t)}function ev(i,e){let t=lr(e,this.size,3);i.uniform3fv(this.addr,t)}function tv(i,e){let t=lr(e,this.size,4);i.uniform4fv(this.addr,t)}function nv(i,e){let t=lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function iv(i,e){let t=lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sv(i,e){let t=lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rv(i,e){i.uniform1iv(this.addr,e)}function ov(i,e){i.uniform2iv(this.addr,e)}function av(i,e){i.uniform3iv(this.addr,e)}function lv(i,e){i.uniform4iv(this.addr,e)}function cv(i,e){i.uniform1uiv(this.addr,e)}function hv(i,e){i.uniform2uiv(this.addr,e)}function uv(i,e){i.uniform3uiv(this.addr,e)}function dv(i,e){i.uniform4uiv(this.addr,e)}function fv(i,e,t){let n=this.cache,s=e.length,r=Ca(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Ud,r[o])}function pv(i,e,t){let n=this.cache,s=e.length,r=Ca(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function mv(i,e,t){let n=this.cache,s=e.length,r=Ca(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||kd,r[o])}function gv(i,e,t){let n=this.cache,s=e.length,r=Ca(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Nd,r[o])}function xv(i){switch(i){case 5126:return jx;case 35664:return Qx;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return sv;case 5124:case 35670:return rv;case 35667:case 35671:return ov;case 35668:case 35672:return av;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return hv;case 36295:return uv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return fv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kx(t.type)}},bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}},Ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function qu(i,e){i.seq.push(e),i.map[e.id]=e}function vv(i,e,t){let n=i.name,s=n.length;for(Sl.lastIndex=0;;){let r=Sl.exec(n),o=Sl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qu(t,c===void 0?new Mc(a,i,e):new bc(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Ec(a),qu(t,u)),t=u}}}var Js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vv(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function $u(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var yv=37297,_v=0;function Mv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Zu=new ot;function bv(i){ht._getMatrix(Zu,ht.workingColorSpace,i);let e=`mat3( ${Zu.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Ra:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Yu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mv(i.getShaderSource(e),o)}else return s}function Ev(i,e){let t=bv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sv(i,e){let t;switch(e){case Np:t="Linear";break;case Op:t="Reinhard";break;case kp:t="Cineon";break;case sh:t="ACESFilmic";break;case Fp:t="AgX";break;case Bp:t="Neutral";break;case zp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zo=new O;function Tv(){ht.getLuminanceCoefficients(zo);let i=zo.x.toFixed(4),e=zo.y.toFixed(4),t=zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nr).join(`
`)}function Av(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Nr(i){return i!==""}function Ju(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ku(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sc(i){return i.replace(Cv,Iv)}var Pv=new Map;function Iv(i,e){let t=at[e];if(t===void 0){let n=Pv.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sc(t)}var Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(Lv,Dv)}function Dv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Uv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wa?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case js:case Qs:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ov(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function kv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xd:e="ENVMAP_BLENDING_MULTIPLY";break;case Dp:e="ENVMAP_BLENDING_MIX";break;case Up:e="ENVMAP_BLENDING_ADD";break}return e}function zv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fv(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Uv(t),c=Nv(t),d=Ov(t),u=kv(t),h=zv(t),f=wv(t),g=Av(r),M=s.createProgram(),m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?at.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Ev("linearToOutputTexel",t.outputColorSpace),Tv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nr).join(`
`)),o=Sc(o),o=Ju(o,t),o=Ku(o,t),a=Sc(a),a=Ju(a,t),a=Ku(a,t),o=ju(o),a=ju(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=x+m+o,v=x+p+a,I=$u(s,s.VERTEX_SHADER,_),S=$u(s,s.FRAGMENT_SHADER,v);s.attachShader(M,I),s.attachShader(M,S),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function w(A){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(M).trim(),k=s.getShaderInfoLog(I).trim(),X=s.getShaderInfoLog(S).trim(),te=!0,z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,I,S);else{let ee=Yu(s,I,"vertex"),Y=Yu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+F+`
`+ee+`
`+Y)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||X==="")&&(z=!1);z&&(A.diagnostics={runnable:te,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(I),s.deleteShader(S),C=new Js(s,M),b=Rv(s,M)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(M,yv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=S,this}var Bv=0,Tc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wc(e),t.set(e,n)),n}},wc=class{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}};function Hv(i,e,t,n,s,r,o){let a=new Wr,l=new Tc,c=new Set,d=[],u=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,A,F,k){let X=F.fog,te=k.geometry,z=b.isMeshStandardMaterial?F.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),Y=ee&&ee.mapping===Aa?ee.image.height:null,ue=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let ve=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ye=ve!==void 0?ve.length:0,we=0;te.morphAttributes.position!==void 0&&(we=1),te.morphAttributes.normal!==void 0&&(we=2),te.morphAttributes.color!==void 0&&(we=3);let me,B,Z,ae;if(ue){let et=Kn[ue];me=et.vertexShader,B=et.fragmentShader}else me=b.vertexShader,B=b.fragmentShader,l.update(b),Z=l.getVertexShaderID(b),ae=l.getFragmentShaderID(b);let de=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ce=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,Ye=!!b.map,j=!!b.matcap,le=!!ee,L=!!b.aoMap,ke=!!b.lightMap,he=!!b.bumpMap,Pe=!!b.normalMap,Me=!!b.displacementMap,Ee=!!b.emissiveMap,Ie=!!b.metalnessMap,R=!!b.roughnessMap,E=b.anisotropy>0,q=b.clearcoat>0,ie=b.dispersion>0,oe=b.iridescence>0,ne=b.sheen>0,Re=b.transmission>0,be=E&&!!b.anisotropyMap,Te=q&&!!b.clearcoatMap,nt=q&&!!b.clearcoatNormalMap,pe=q&&!!b.clearcoatRoughnessMap,Ne=oe&&!!b.iridescenceMap,Be=oe&&!!b.iridescenceThicknessMap,$e=ne&&!!b.sheenColorMap,Le=ne&&!!b.sheenRoughnessMap,N=!!b.specularMap,se=!!b.specularColorMap,xe=!!b.specularIntensityMap,D=Re&&!!b.transmissionMap,ce=Re&&!!b.thicknessMap,W=!!b.gradientMap,P=!!b.alphaMap,$=b.alphaTest>0,Q=!!b.alphaHash,ge=!!b.extensions,Je=Oi;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=i.toneMapping);let ut={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:me,fragmentShader:B,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ze,batchingColor:ze&&k._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&k.instanceColor!==null,instancingMorph:Ce&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ar,alphaToCoverage:!!b.alphaToCoverage,map:Ye,matcap:j,envMap:le,envMapMode:le&&ee.mapping,envMapCubeUVHeight:Y,aoMap:L,lightMap:ke,bumpMap:he,normalMap:Pe,displacementMap:h&&Me,emissiveMap:Ee,normalMapObjectSpace:Pe&&b.normalMapType===Wp,normalMapTangentSpace:Pe&&b.normalMapType===Rd,metalnessMap:Ie,roughnessMap:R,anisotropy:E,anisotropyMap:be,clearcoat:q,clearcoatMap:Te,clearcoatNormalMap:nt,clearcoatRoughnessMap:pe,dispersion:ie,iridescence:oe,iridescenceMap:Ne,iridescenceThicknessMap:Be,sheen:ne,sheenColorMap:$e,sheenRoughnessMap:Le,specularMap:N,specularColorMap:se,specularIntensityMap:xe,transmission:Re,transmissionMap:D,thicknessMap:ce,gradientMap:W,opaque:b.transparent===!1&&b.blending===$s&&b.alphaToCoverage===!1,alphaMap:P,alphaTest:$,alphaHash:Q,combine:b.combine,mapUv:Ye&&M(b.map.channel),aoMapUv:L&&M(b.aoMap.channel),lightMapUv:ke&&M(b.lightMap.channel),bumpMapUv:he&&M(b.bumpMap.channel),normalMapUv:Pe&&M(b.normalMap.channel),displacementMapUv:Me&&M(b.displacementMap.channel),emissiveMapUv:Ee&&M(b.emissiveMap.channel),metalnessMapUv:Ie&&M(b.metalnessMap.channel),roughnessMapUv:R&&M(b.roughnessMap.channel),anisotropyMapUv:be&&M(b.anisotropyMap.channel),clearcoatMapUv:Te&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:nt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&M(b.sheenRoughnessMap.channel),specularMapUv:N&&M(b.specularMap.channel),specularColorMapUv:se&&M(b.specularColorMap.channel),specularIntensityMapUv:xe&&M(b.specularIntensityMap.channel),transmissionMapUv:D&&M(b.transmissionMap.channel),thicknessMapUv:ce&&M(b.thicknessMap.channel),alphaMapUv:P&&M(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Pe||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!te.attributes.uv&&(Ye||P),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Se,skinning:k.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:Ye&&b.map.isVideoTexture===!0&&ht.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:Ee&&b.emissiveMap.isVideoTexture===!0&&ht.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tt,flipSided:b.side===nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(b){let y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)y.push(A),y.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(x(y,b),_(y,b),y.push(i.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function x(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function _(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let y=g[b.type],A;if(y){let F=Kn[y];A=Im.clone(F.uniforms)}else A=b.uniforms;return A}function I(b,y){let A;for(let F=0,k=d.length;F<k;F++){let X=d[F];if(X.cacheKey===y){A=X,++A.usedTimes;break}}return A===void 0&&(A=new Fv(i,y,b,r),d.push(A)),A}function S(b){if(--b.usedTimes===0){let y=d.indexOf(b);d[y]=d[d.length-1],d.pop(),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:S,releaseShaderCache:w,programs:d,dispose:C}}function Vv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Gv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ed(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function td(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,h,f,g,M,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:M,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=M,p.group=m),e++,p}function a(u,h,f,g,M,m){let p=o(u,h,f,g,M,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,h,f,g,M,m){let p=o(u,h,f,g,M,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||Gv),n.length>1&&n.sort(h||ed),s.length>1&&s.sort(h||ed)}function d(){for(let u=e,h=i.length;u<h;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:d,sort:c}}function Wv(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new td,i.set(n,[o])):s>=r.length?(o=new td,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Xv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new tt};break;case"SpotLight":t={position:new O,direction:new O,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function qv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $v=0;function Zv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yv(i){let e=new Xv,t=qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new yt,o=new yt;function a(c){let d=0,u=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,x=0,_=0,v=0,I=0,S=0,w=0;c.sort(Zv);for(let b=0,y=c.length;b<y;b++){let A=c[b],F=A.color,k=A.intensity,X=A.distance,te=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=F.r*k,u+=F.g*k,h+=F.b*k;else if(A.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(A.sh.coefficients[z],k);w++}else if(A.isDirectionalLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let ee=A.shadow,Y=t.get(A);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=te,n.directionalShadowMatrix[f]=A.shadow.matrix,x++}n.directional[f]=z,f++}else if(A.isSpotLight){let z=e.get(A);z.position.setFromMatrixPosition(A.matrixWorld),z.color.copy(F).multiplyScalar(k),z.distance=X,z.coneCos=Math.cos(A.angle),z.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),z.decay=A.decay,n.spot[M]=z;let ee=A.shadow;if(A.map&&(n.spotLightMap[I]=A.map,I++,ee.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[M]=ee.matrix,A.castShadow){let Y=t.get(A);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,n.spotShadow[M]=Y,n.spotShadowMap[M]=te,v++}M++}else if(A.isRectAreaLight){let z=e.get(A);z.color.copy(F).multiplyScalar(k),z.halfWidth.set(A.width*.5,0,0),z.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=z,m++}else if(A.isPointLight){let z=e.get(A);if(z.color.copy(A.color).multiplyScalar(A.intensity),z.distance=A.distance,z.decay=A.decay,A.castShadow){let ee=A.shadow,Y=t.get(A);Y.shadowIntensity=ee.intensity,Y.shadowBias=ee.bias,Y.shadowNormalBias=ee.normalBias,Y.shadowRadius=ee.radius,Y.shadowMapSize=ee.mapSize,Y.shadowCameraNear=ee.camera.near,Y.shadowCameraFar=ee.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=z,g++}else if(A.isHemisphereLight){let z=e.get(A);z.skyColor.copy(A.color).multiplyScalar(k),z.groundColor.copy(A.groundColor).multiplyScalar(k),n.hemi[p]=z,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=h;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==M||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==I||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+I-S,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=M,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=I,C.numLightProbes=w,n.version=$v++)}function l(c,d){let u=0,h=0,f=0,g=0,M=0,m=d.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(_.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){let v=n.hemi[M];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function nd(i){let e=new Yv(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function o(d){n.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Jv(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new nd(i),e.set(s,[a])):r>=o.length?(a=new nd(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ac=class extends Fi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rc=class extends Fi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jv=`uniform sampler2D shadow_pass;
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
}`;function Qv(i,e,t){let n=new Xr,s=new fe,r=new fe,o=new zt,a=new Ac({depthPacking:Gp}),l=new Rc,c={},d=t.maxTextureSize,u={[ki]:nn,[nn]:ki,[Tt]:Tt},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Kv,fragmentShader:jv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new G(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let p=this.type;this.render=function(S,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let b=i.getRenderTarget(),y=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ni),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==pi&&this.type===pi,X=p===pi&&this.type!==pi;for(let te=0,z=S.length;te<z;te++){let ee=S[te],Y=ee.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ue=Y.getFrameExtents();if(s.multiply(ue),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ue.x),s.x=r.x*ue.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ue.y),s.y=r.y*ue.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||X===!0){let ye=this.type!==pi?{minFilter:Sn,magFilter:Sn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new yi(s.x,s.y,ye),Y.map.texture.name=ee.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let ve=Y.getViewportCount();for(let ye=0;ye<ve;ye++){let we=Y.getViewport(ye);o.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),F.viewport(o),Y.updateMatrices(ee,ye),n=Y.getFrustum(),v(w,C,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===pi&&x(Y,C),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,y,A)};function x(S,w){let C=e.update(M);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new yi(s.x,s.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(w,null,C,h,M,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(w,null,C,f,M,null)}function _(S,w,C,b){let y=null,A=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)y=A;else if(y=C.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=y.uuid,k=w.uuid,X=c[F];X===void 0&&(X={},c[F]=X);let te=X[k];te===void 0&&(te=y.clone(),X[k]=te,w.addEventListener("dispose",I)),y=te}if(y.visible=w.visible,y.wireframe=w.wireframe,b===pi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=i.properties.get(y);F.light=C}return y}function v(S,w,C,b,y){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===pi)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let k=e.update(S),X=S.material;if(Array.isArray(X)){let te=k.groups;for(let z=0,ee=te.length;z<ee;z++){let Y=te[z],ue=X[Y.materialIndex];if(ue&&ue.visible){let ve=_(S,ue,b,y);S.onBeforeShadow(i,S,w,C,k,ve,Y),i.renderBufferDirect(C,null,k,ve,S,Y),S.onAfterShadow(i,S,w,C,k,ve,Y)}}}else if(X.visible){let te=_(S,X,b,y);S.onBeforeShadow(i,S,w,C,k,te,null),i.renderBufferDirect(C,null,k,te,S,null),S.onAfterShadow(i,S,w,C,k,te,null)}}let F=S.children;for(let k=0,X=F.length;k<X;k++)v(F[k],w,C,b,y)}function I(S){S.target.removeEventListener("dispose",I);for(let C in c){let b=c[C],y=S.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}var ey={[Ll]:Dl,[Ul]:kl,[Nl]:zl,[Ks]:Ol,[Dl]:Ll,[kl]:Ul,[zl]:Nl,[Ol]:Ks};function ty(i,e){function t(){let D=!1,ce=new zt,W=null,P=new zt(0,0,0,0);return{setMask:function($){W!==$&&!D&&(i.colorMask($,$,$,$),W=$)},setLocked:function($){D=$},setClear:function($,Q,ge,Je,ut){ut===!0&&($*=Je,Q*=Je,ge*=Je),ce.set($,Q,ge,Je),P.equals(ce)===!1&&(i.clearColor($,Q,ge,Je),P.copy(ce))},reset:function(){D=!1,W=null,P.set(-1,0,0,0)}}}function n(){let D=!1,ce=!1,W=null,P=null,$=null;return{setReversed:function(Q){if(ce!==Q){let ge=e.get("EXT_clip_control");ce?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT);let Je=$;$=null,this.setClear(Je)}ce=Q},getReversed:function(){return ce},setTest:function(Q){Q?de(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Q){W!==Q&&!D&&(i.depthMask(Q),W=Q)},setFunc:function(Q){if(ce&&(Q=ey[Q]),P!==Q){switch(Q){case Ll:i.depthFunc(i.NEVER);break;case Dl:i.depthFunc(i.ALWAYS);break;case Ul:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Nl:i.depthFunc(i.EQUAL);break;case Ol:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case zl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}P=Q}},setLocked:function(Q){D=Q},setClear:function(Q){$!==Q&&(ce&&(Q=1-Q),i.clearDepth(Q),$=Q)},reset:function(){D=!1,W=null,P=null,$=null,ce=!1}}}function s(){let D=!1,ce=null,W=null,P=null,$=null,Q=null,ge=null,Je=null,ut=null;return{setTest:function(et){D||(et?de(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(et){ce!==et&&!D&&(i.stencilMask(et),ce=et)},setFunc:function(et,Qt,hn){(W!==et||P!==Qt||$!==hn)&&(i.stencilFunc(et,Qt,hn),W=et,P=Qt,$=hn)},setOp:function(et,Qt,hn){(Q!==et||ge!==Qt||Je!==hn)&&(i.stencilOp(et,Qt,hn),Q=et,ge=Qt,Je=hn)},setLocked:function(et){D=et},setClear:function(et){ut!==et&&(i.clearStencil(et),ut=et)},reset:function(){D=!1,ce=null,W=null,P=null,$=null,Q=null,ge=null,Je=null,ut=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,d={},u={},h=new WeakMap,f=[],g=null,M=!1,m=null,p=null,x=null,_=null,v=null,I=null,S=null,w=new tt(0,0,0),C=0,b=!1,y=null,A=null,F=null,k=null,X=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ee=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=ee>=1):Y.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=ee>=2);let ue=null,ve={},ye=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),me=new zt().fromArray(ye),B=new zt().fromArray(we);function Z(D,ce,W,P){let $=new Uint8Array(4),Q=i.createTexture();i.bindTexture(D,Q),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<W;ge++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,P,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(ce+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return Q}let ae={};ae[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Ks),he(!1),Pe(ru),de(i.CULL_FACE),L(Ni);function de(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function Se(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function Ce(D,ce){return u[D]!==ce?(i.bindFramebuffer(D,ce),u[D]=ce,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function ze(D,ce){let W=f,P=!1;if(D){W=h.get(ce),W===void 0&&(W=[],h.set(ce,W));let $=D.textures;if(W.length!==$.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,ge=$.length;Q<ge;Q++)W[Q]=i.COLOR_ATTACHMENT0+Q;W.length=$.length,P=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,P=!0);P&&i.drawBuffers(W)}function Ye(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let j={[is]:i.FUNC_ADD,[gp]:i.FUNC_SUBTRACT,[xp]:i.FUNC_REVERSE_SUBTRACT};j[vp]=i.MIN,j[yp]=i.MAX;let le={[_p]:i.ZERO,[Mp]:i.ONE,[bp]:i.SRC_COLOR,[Pl]:i.SRC_ALPHA,[Rp]:i.SRC_ALPHA_SATURATE,[wp]:i.DST_COLOR,[Sp]:i.DST_ALPHA,[Ep]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[Ap]:i.ONE_MINUS_DST_COLOR,[Tp]:i.ONE_MINUS_DST_ALPHA,[Cp]:i.CONSTANT_COLOR,[Pp]:i.ONE_MINUS_CONSTANT_COLOR,[Ip]:i.CONSTANT_ALPHA,[Lp]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ce,W,P,$,Q,ge,Je,ut,et){if(D===Ni){M===!0&&(Se(i.BLEND),M=!1);return}if(M===!1&&(de(i.BLEND),M=!0),D!==mp){if(D!==m||et!==b){if((p!==is||v!==is)&&(i.blendEquation(i.FUNC_ADD),p=is,v=is),et)switch(D){case $s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case $s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,_=null,I=null,S=null,w.set(0,0,0),C=0,m=D,b=et}return}$=$||ce,Q=Q||W,ge=ge||P,(ce!==p||$!==v)&&(i.blendEquationSeparate(j[ce],j[$]),p=ce,v=$),(W!==x||P!==_||Q!==I||ge!==S)&&(i.blendFuncSeparate(le[W],le[P],le[Q],le[ge]),x=W,_=P,I=Q,S=ge),(Je.equals(w)===!1||ut!==C)&&(i.blendColor(Je.r,Je.g,Je.b,ut),w.copy(Je),C=ut),m=D,b=!1}function ke(D,ce){D.side===Tt?Se(i.CULL_FACE):de(i.CULL_FACE);let W=D.side===nn;ce&&(W=!W),he(W),D.blending===$s&&D.transparent===!1?L(Ni):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let P=D.stencilWrite;a.setTest(P),P&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function he(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function Pe(D){D!==dp?(de(i.CULL_FACE),D!==A&&(D===ru?i.cullFace(i.BACK):D===fp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),A=D}function Me(D){D!==F&&(z&&i.lineWidth(D),F=D)}function Ee(D,ce,W){D?(de(i.POLYGON_OFFSET_FILL),(k!==ce||X!==W)&&(i.polygonOffset(ce,W),k=ce,X=W)):Se(i.POLYGON_OFFSET_FILL)}function Ie(D){D?de(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function R(D){D===void 0&&(D=i.TEXTURE0+te-1),ue!==D&&(i.activeTexture(D),ue=D)}function E(D,ce,W){W===void 0&&(ue===null?W=i.TEXTURE0+te-1:W=ue);let P=ve[W];P===void 0&&(P={type:void 0,texture:void 0},ve[W]=P),(P.type!==D||P.texture!==ce)&&(ue!==W&&(i.activeTexture(W),ue=W),i.bindTexture(D,ce||ae[D]),P.type=D,P.texture=ce)}function q(){let D=ve[ue];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(D){me.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),me.copy(D))}function Le(D){B.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),B.copy(D))}function N(D,ce){let W=c.get(ce);W===void 0&&(W=new WeakMap,c.set(ce,W));let P=W.get(D);P===void 0&&(P=i.getUniformBlockIndex(ce,D.name),W.set(D,P))}function se(D,ce){let P=c.get(ce).get(D);l.get(ce)!==P&&(i.uniformBlockBinding(ce,P,D.__bindingPointIndex),l.set(ce,P))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ue=null,ve={},u={},h=new WeakMap,f=[],g=null,M=!1,m=null,p=null,x=null,_=null,v=null,I=null,S=null,w=new tt(0,0,0),C=0,b=!1,y=null,A=null,F=null,k=null,X=null,me.set(0,0,i.canvas.width,i.canvas.height),B.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Se,bindFramebuffer:Ce,drawBuffers:ze,useProgram:Ye,setBlending:L,setMaterial:ke,setFlipSided:he,setCullFace:Pe,setLineWidth:Me,setPolygonOffset:Ee,setScissorTest:Ie,activeTexture:R,bindTexture:E,unbindTexture:q,compressedTexImage2D:ie,compressedTexImage3D:oe,texImage2D:Ne,texImage3D:Be,updateUBOMapping:N,uniformBlockBinding:se,texStorage2D:nt,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:Re,compressedTexSubImage2D:be,compressedTexSubImage3D:Te,scissor:$e,viewport:Le,reset:xe}}function id(i,e,t,n){let s=ny(n);switch(t){case bd:return i*e;case Sd:return i*e;case Td:return i*e*2;case lh:return i*e/s.components*s.byteLength;case ch:return i*e/s.components*s.byteLength;case wd:return i*e*2/s.components*s.byteLength;case hh:return i*e*2/s.components*s.byteLength;case Ed:return i*e*3/s.components*s.byteLength;case Bn:return i*e*4/s.components*s.byteLength;case uh:return i*e*4/s.components*s.byteLength;case $o:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(i,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(i,8)*Math.max(e,8)/2;case ql:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ko:case cc:case hc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ad:case uc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case dc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ny(i){switch(i){case vi:case yd:return{byteLength:1,components:1};case Vr:case _d:case Qr:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case as:case rh:case Qn:return{byteLength:4,components:1};case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function iy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,d=new WeakMap,u,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return f?new OffscreenCanvas(R,E):ta("canvas")}function M(R,E,q){let ie=1,oe=Ie(R);if((oe.width>q||oe.height>q)&&(ie=q/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ne=Math.floor(ie*oe.width),Re=Math.floor(ie*oe.height);u===void 0&&(u=g(ne,Re));let be=E?g(ne,Re):u;return be.width=ne,be.height=Re,be.getContext("2d").drawImage(R,0,0,ne,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ne+"x"+Re+")."),be}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,E,q,ie,oe=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=E;if(E===i.RED&&(q===i.FLOAT&&(ne=i.R32F),q===i.HALF_FLOAT&&(ne=i.R16F),q===i.UNSIGNED_BYTE&&(ne=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.R8UI),q===i.UNSIGNED_SHORT&&(ne=i.R16UI),q===i.UNSIGNED_INT&&(ne=i.R32UI),q===i.BYTE&&(ne=i.R8I),q===i.SHORT&&(ne=i.R16I),q===i.INT&&(ne=i.R32I)),E===i.RG&&(q===i.FLOAT&&(ne=i.RG32F),q===i.HALF_FLOAT&&(ne=i.RG16F),q===i.UNSIGNED_BYTE&&(ne=i.RG8)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RG8UI),q===i.UNSIGNED_SHORT&&(ne=i.RG16UI),q===i.UNSIGNED_INT&&(ne=i.RG32UI),q===i.BYTE&&(ne=i.RG8I),q===i.SHORT&&(ne=i.RG16I),q===i.INT&&(ne=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),q===i.UNSIGNED_INT&&(ne=i.RGB32UI),q===i.BYTE&&(ne=i.RGB8I),q===i.SHORT&&(ne=i.RGB16I),q===i.INT&&(ne=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),q===i.UNSIGNED_INT&&(ne=i.RGBA32UI),q===i.BYTE&&(ne=i.RGBA8I),q===i.SHORT&&(ne=i.RGBA16I),q===i.INT&&(ne=i.RGBA32I)),E===i.RGB&&q===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),E===i.RGBA){let Re=oe?Ra:ht.getTransfer(ie);q===i.FLOAT&&(ne=i.RGBA32F),q===i.HALF_FLOAT&&(ne=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ne=Re===bt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function v(R,E){let q;return R?E===null||E===as||E===er?q=i.DEPTH24_STENCIL8:E===Qn?q=i.DEPTH32F_STENCIL8:E===Vr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===as||E===er?q=i.DEPTH_COMPONENT24:E===Qn?q=i.DEPTH_COMPONENT32F:E===Vr&&(q=i.DEPTH_COMPONENT16),q}function I(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Sn&&R.minFilter!==jn?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function S(R){let E=R.target;E.removeEventListener("dispose",S),C(E),E.isVideoTexture&&d.delete(E)}function w(R){let E=R.target;E.removeEventListener("dispose",w),y(E)}function C(R){let E=n.get(R);if(E.__webglInit===void 0)return;let q=R.source,ie=h.get(q);if(ie){let oe=ie[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&b(R),Object.keys(ie).length===0&&h.delete(q)}n.remove(R)}function b(R){let E=n.get(R);i.deleteTexture(E.__webglTexture);let q=R.source,ie=h.get(q);delete ie[E.__cacheKey],o.memory.textures--}function y(R){let E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let oe=0;oe<E.__webglFramebuffer[ie].length;oe++)i.deleteFramebuffer(E.__webglFramebuffer[ie][oe]);else i.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[ie]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let q=R.textures;for(let ie=0,oe=q.length;ie<oe;ie++){let ne=n.get(q[ie]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(q[ie])}n.remove(R)}let A=0;function F(){A=0}function k(){let R=A;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),A+=1,R}function X(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function te(R,E){let q=n.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){let ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(q,R,E);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function z(R,E){let q=n.get(R);if(R.version>0&&q.__version!==R.version){B(q,R,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function ee(R,E){let q=n.get(R);if(R.version>0&&q.__version!==R.version){B(q,R,E);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function Y(R,E){let q=n.get(R);if(R.version>0&&q.__version!==R.version){Z(q,R,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}let ue={[$t]:i.REPEAT,[rs]:i.CLAMP_TO_EDGE,[Hl]:i.MIRRORED_REPEAT},ve={[Sn]:i.NEAREST,[Hp]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[jn]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[os]:i.LINEAR_MIPMAP_LINEAR},ye={[Xp]:i.NEVER,[Kp]:i.ALWAYS,[qp]:i.LESS,[Cd]:i.LEQUAL,[$p]:i.EQUAL,[Jp]:i.GEQUAL,[Zp]:i.GREATER,[Yp]:i.NOTEQUAL};function we(R,E){if(E.type===Qn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===jn||E.magFilter===Ka||E.magFilter===vo||E.magFilter===os||E.minFilter===jn||E.minFilter===Ka||E.minFilter===vo||E.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ue[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ue[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ue[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ve[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ve[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ye[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Sn||E.minFilter!==vo&&E.minFilter!==os||E.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function me(R,E){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",S));let ie=E.source,oe=h.get(ie);oe===void 0&&(oe={},h.set(ie,oe));let ne=X(E);if(ne!==R.__cacheKey){oe[ne]===void 0&&(oe[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[ne].usedTimes++;let Re=oe[R.__cacheKey];Re!==void 0&&(oe[R.__cacheKey].usedTimes--,Re.usedTimes===0&&b(E)),R.__cacheKey=ne,R.__webglTexture=oe[ne].texture}return q}function B(R,E,q){let ie=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=i.TEXTURE_3D);let oe=me(R,E),ne=E.source;t.bindTexture(ie,R.__webglTexture,i.TEXTURE0+q);let Re=n.get(ne);if(ne.version!==Re.__version||oe===!0){t.activeTexture(i.TEXTURE0+q);let be=ht.getPrimaries(ht.workingColorSpace),Te=E.colorSpace===Di?null:ht.getPrimaries(E.colorSpace),nt=E.colorSpace===Di||be===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let pe=M(E.image,!1,s.maxTextureSize);pe=Ee(E,pe);let Ne=r.convert(E.format,E.colorSpace),Be=r.convert(E.type),$e=_(E.internalFormat,Ne,Be,E.colorSpace,E.isVideoTexture);we(ie,E);let Le,N=E.mipmaps,se=E.isVideoTexture!==!0,xe=Re.__version===void 0||oe===!0,D=ne.dataReady,ce=I(E,pe);if(E.isDepthTexture)$e=v(E.format===tr,E.type),xe&&(se?t.texStorage2D(i.TEXTURE_2D,1,$e,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,$e,pe.width,pe.height,0,Ne,Be,null));else if(E.isDataTexture)if(N.length>0){se&&xe&&t.texStorage2D(i.TEXTURE_2D,ce,$e,N[0].width,N[0].height);for(let W=0,P=N.length;W<P;W++)Le=N[W],se?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,Ne,Be,Le.data):t.texImage2D(i.TEXTURE_2D,W,$e,Le.width,Le.height,0,Ne,Be,Le.data);E.generateMipmaps=!1}else se?(xe&&t.texStorage2D(i.TEXTURE_2D,ce,$e,pe.width,pe.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Ne,Be,pe.data)):t.texImage2D(i.TEXTURE_2D,0,$e,pe.width,pe.height,0,Ne,Be,pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){se&&xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,$e,N[0].width,N[0].height,pe.depth);for(let W=0,P=N.length;W<P;W++)if(Le=N[W],E.format!==Bn)if(Ne!==null)if(se){if(D)if(E.layerUpdates.size>0){let $=id(Le.width,Le.height,E.format,E.type);for(let Q of E.layerUpdates){let ge=Le.data.subarray(Q*$/Le.data.BYTES_PER_ELEMENT,(Q+1)*$/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Q,Le.width,Le.height,1,Ne,ge)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,pe.depth,Ne,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,$e,Le.width,Le.height,pe.depth,0,Le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Le.width,Le.height,pe.depth,Ne,Be,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,$e,Le.width,Le.height,pe.depth,0,Ne,Be,Le.data)}else{se&&xe&&t.texStorage2D(i.TEXTURE_2D,ce,$e,N[0].width,N[0].height);for(let W=0,P=N.length;W<P;W++)Le=N[W],E.format!==Bn?Ne!==null?se?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,Ne,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,W,$e,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Le.width,Le.height,Ne,Be,Le.data):t.texImage2D(i.TEXTURE_2D,W,$e,Le.width,Le.height,0,Ne,Be,Le.data)}else if(E.isDataArrayTexture)if(se){if(xe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,$e,pe.width,pe.height,pe.depth),D)if(E.layerUpdates.size>0){let W=id(pe.width,pe.height,E.format,E.type);for(let P of E.layerUpdates){let $=pe.data.subarray(P*W/pe.data.BYTES_PER_ELEMENT,(P+1)*W/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,P,pe.width,pe.height,1,Ne,Be,$)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ne,Be,pe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$e,pe.width,pe.height,pe.depth,0,Ne,Be,pe.data);else if(E.isData3DTexture)se?(xe&&t.texStorage3D(i.TEXTURE_3D,ce,$e,pe.width,pe.height,pe.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ne,Be,pe.data)):t.texImage3D(i.TEXTURE_3D,0,$e,pe.width,pe.height,pe.depth,0,Ne,Be,pe.data);else if(E.isFramebufferTexture){if(xe)if(se)t.texStorage2D(i.TEXTURE_2D,ce,$e,pe.width,pe.height);else{let W=pe.width,P=pe.height;for(let $=0;$<ce;$++)t.texImage2D(i.TEXTURE_2D,$,$e,W,P,0,Ne,Be,null),W>>=1,P>>=1}}else if(N.length>0){if(se&&xe){let W=Ie(N[0]);t.texStorage2D(i.TEXTURE_2D,ce,$e,W.width,W.height)}for(let W=0,P=N.length;W<P;W++)Le=N[W],se?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,Ne,Be,Le):t.texImage2D(i.TEXTURE_2D,W,$e,Ne,Be,Le);E.generateMipmaps=!1}else if(se){if(xe){let W=Ie(pe);t.texStorage2D(i.TEXTURE_2D,ce,$e,W.width,W.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,Be,pe)}else t.texImage2D(i.TEXTURE_2D,0,$e,Ne,Be,pe);m(E)&&p(ie),Re.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function Z(R,E,q){if(E.image.length!==6)return;let ie=me(R,E),oe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);let ne=n.get(oe);if(oe.version!==ne.__version||ie===!0){t.activeTexture(i.TEXTURE0+q);let Re=ht.getPrimaries(ht.workingColorSpace),be=E.colorSpace===Di?null:ht.getPrimaries(E.colorSpace),Te=E.colorSpace===Di||Re===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let nt=E.isCompressedTexture||E.image[0].isCompressedTexture,pe=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let P=0;P<6;P++)!nt&&!pe?Ne[P]=M(E.image[P],!0,s.maxCubemapSize):Ne[P]=pe?E.image[P].image:E.image[P],Ne[P]=Ee(E,Ne[P]);let Be=Ne[0],$e=r.convert(E.format,E.colorSpace),Le=r.convert(E.type),N=_(E.internalFormat,$e,Le,E.colorSpace),se=E.isVideoTexture!==!0,xe=ne.__version===void 0||ie===!0,D=oe.dataReady,ce=I(E,Be);we(i.TEXTURE_CUBE_MAP,E);let W;if(nt){se&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,N,Be.width,Be.height);for(let P=0;P<6;P++){W=Ne[P].mipmaps;for(let $=0;$<W.length;$++){let Q=W[$];E.format!==Bn?$e!==null?se?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,$,0,0,Q.width,Q.height,$e,Q.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,$,N,Q.width,Q.height,0,Q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,$,0,0,Q.width,Q.height,$e,Le,Q.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,$,N,Q.width,Q.height,0,$e,Le,Q.data)}}}else{if(W=E.mipmaps,se&&xe){W.length>0&&ce++;let P=Ie(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,N,P.width,P.height)}for(let P=0;P<6;P++)if(pe){se?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Ne[P].width,Ne[P].height,$e,Le,Ne[P].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,N,Ne[P].width,Ne[P].height,0,$e,Le,Ne[P].data);for(let $=0;$<W.length;$++){let ge=W[$].image[P].image;se?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,$+1,0,0,ge.width,ge.height,$e,Le,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,$+1,N,ge.width,ge.height,0,$e,Le,ge.data)}}else{se?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,$e,Le,Ne[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,N,$e,Le,Ne[P]);for(let $=0;$<W.length;$++){let Q=W[$];se?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,$+1,0,0,$e,Le,Q.image[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,$+1,N,$e,Le,Q.image[P])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),ne.__version=oe.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ae(R,E,q,ie,oe,ne){let Re=r.convert(q.format,q.colorSpace),be=r.convert(q.type),Te=_(q.internalFormat,Re,be,q.colorSpace),nt=n.get(E),pe=n.get(q);if(pe.__renderTarget=E,!nt.__hasExternalTextures){let Ne=Math.max(1,E.width>>ne),Be=Math.max(1,E.height>>ne);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,ne,Te,Ne,Be,E.depth,0,Re,be,null):t.texImage2D(oe,ne,Te,Ne,Be,0,Re,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,oe,pe.__webglTexture,0,he(E)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,oe,pe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function de(R,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){let ie=E.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,ne=v(E.stencilBuffer,oe),Re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=he(E);Pe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ne,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ne,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,R)}else{let ie=E.textures;for(let oe=0;oe<ie.length;oe++){let ne=ie[oe],Re=r.convert(ne.format,ne.colorSpace),be=r.convert(ne.type),Te=_(ne.internalFormat,Re,be,ne.colorSpace),nt=he(E);q&&Pe(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Te,E.width,E.height):Pe(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,Te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Te,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ie=n.get(E.depthTexture);ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),te(E.depthTexture,0);let oe=ie.__webglTexture,ne=he(E);if(E.depthTexture.format===Zs)Pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(E.depthTexture.format===tr)Pe(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Ce(R){let E=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let ie=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){let oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",oe)};ie.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=ie}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Se(E.__webglFramebuffer,R)}else if(q){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=i.createRenderbuffer(),de(E.__webglDepthbuffer[ie],R,!1);else{let oe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),de(E.__webglDepthbuffer,R,!1);else{let ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,oe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(R,E,q){let ie=n.get(R);E!==void 0&&ae(ie.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ce(R)}function Ye(R){let E=R.texture,q=n.get(R),ie=n.get(E);R.addEventListener("dispose",w);let oe=R.textures,ne=R.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=E.version,o.memory.textures++),ne){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Te=0;Te<E.mipmaps.length;Te++)q.__webglFramebuffer[be][Te]=i.createFramebuffer()}else q.__webglFramebuffer[be]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)q.__webglFramebuffer[be]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Re)for(let be=0,Te=oe.length;be<Te;be++){let nt=n.get(oe[be]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Pe(R)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let be=0;be<oe.length;be++){let Te=oe[be];q.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[be]);let nt=r.convert(Te.format,Te.colorSpace),pe=r.convert(Te.type),Ne=_(Te.internalFormat,nt,pe,Te.colorSpace,R.isXRRenderTarget===!0),Be=he(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Ne,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,q.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),de(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),we(i.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ae(q.__webglFramebuffer[be][Te],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Te);else ae(q.__webglFramebuffer[be],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let be=0,Te=oe.length;be<Te;be++){let nt=oe[be],pe=n.get(nt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),we(i.TEXTURE_2D,nt),ae(q.__webglFramebuffer,R,nt,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),m(nt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ie.__webglTexture),we(be,E),E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)ae(q.__webglFramebuffer[Te],R,E,i.COLOR_ATTACHMENT0,be,Te);else ae(q.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,be,0);m(E)&&p(be),t.unbindTexture()}R.depthBuffer&&Ce(R)}function j(R){let E=R.textures;for(let q=0,ie=E.length;q<ie;q++){let oe=E[q];if(m(oe)){let ne=x(R),Re=n.get(oe).__webglTexture;t.bindTexture(ne,Re),p(ne),t.unbindTexture()}}}let le=[],L=[];function ke(R){if(R.samples>0){if(Pe(R)===!1){let E=R.textures,q=R.width,ie=R.height,oe=i.COLOR_BUFFER_BIT,ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(R),be=E.length>1;if(be)for(let Te=0;Te<E.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Te]);let nt=n.get(E[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,q,ie,0,0,q,ie,oe,i.NEAREST),l===!0&&(le.length=0,L.length=0,le.push(i.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(le.push(ne),L.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Te=0;Te<E.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Te]);let nt=n.get(E[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function he(R){return Math.min(s.maxSamples,R.samples)}function Pe(R){let E=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(R){let E=o.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function Ee(R,E){let q=R.colorSpace,ie=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==ar&&q!==Di&&(ht.getTransfer(q)===bt?(ie!==Bn||oe!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}function Ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=te,this.setTexture2DArray=z,this.setTexture3D=ee,this.setTextureCube=Y,this.rebindTextures=ze,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Pe}function sy(i,e){function t(n,s=Di){let r,o=ht.getTransfer(s);if(n===vi)return i.UNSIGNED_BYTE;if(n===oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ah)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Md)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yd)return i.BYTE;if(n===_d)return i.SHORT;if(n===Vr)return i.UNSIGNED_SHORT;if(n===rh)return i.INT;if(n===as)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Qr)return i.HALF_FLOAT;if(n===bd)return i.ALPHA;if(n===Ed)return i.RGB;if(n===Bn)return i.RGBA;if(n===Sd)return i.LUMINANCE;if(n===Td)return i.LUMINANCE_ALPHA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===lh)return i.RED;if(n===ch)return i.RED_INTEGER;if(n===wd)return i.RG;if(n===hh)return i.RG_INTEGER;if(n===uh)return i.RGBA_INTEGER;if(n===$o||n===Zo||n===Yo||n===Jo)if(o===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Gl||n===Wl||n===Xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===$l||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===$l)return o===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yl||n===Jl||n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===oc||n===ac||n===lc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ql)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ec)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===tc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ic)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ac)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lc)return o===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ko||n===cc||n===hc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ko)return o===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ad||n===uc||n===dc||n===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Cc=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Oe=class extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ry={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Oe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},oy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ay=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new xn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:oy,fragmentShader:ay,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new We(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ic=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null,M=new Pc,m=t.getContextAttributes(),p=null,x=null,_=[],v=[],I=new fe,S=null,w=new fn;w.viewport=new zt;let C=new fn;C.viewport=new zt;let b=[w,C],y=new Cc,A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Z=_[B];return Z===void 0&&(Z=new zr,_[B]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(B){let Z=_[B];return Z===void 0&&(Z=new zr,_[B]=Z),Z.getGripSpace()},this.getHand=function(B){let Z=_[B];return Z===void 0&&(Z=new zr,_[B]=Z),Z.getHandSpace()};function k(B){let Z=v.indexOf(B.inputSource);if(Z===-1)return;let ae=_[Z];ae!==void 0&&(ae.update(B.inputSource,B.frame,c||o),ae.dispatchEvent({type:B.type,data:B.inputSource}))}function X(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",te);for(let B=0;B<_.length;B++){let Z=v[B];Z!==null&&(v[B]=null,_[B].disconnect(Z))}A=null,F=null,M.reset(),e.setRenderTarget(p),f=null,h=null,u=null,s=null,x=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",X),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new yi(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ae=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?tr:Zs,ae=m.stencil?er:as);let Se={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};u=new XRWebGLBinding(s,t),h=u.createProjectionLayer(Se),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new yi(h.textureWidth,h.textureHeight,{format:Bn,type:vi,depthTexture:new ha(h.textureWidth,h.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),me.setContext(s),me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function te(B){for(let Z=0;Z<B.removed.length;Z++){let ae=B.removed[Z],de=v.indexOf(ae);de>=0&&(v[de]=null,_[de].disconnect(ae))}for(let Z=0;Z<B.added.length;Z++){let ae=B.added[Z],de=v.indexOf(ae);if(de===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=v.length){v.push(ae),de=Ce;break}else if(v[Ce]===null){v[Ce]=ae,de=Ce;break}if(de===-1)break}let Se=_[de];Se&&Se.connect(ae)}}let z=new O,ee=new O;function Y(B,Z,ae){z.setFromMatrixPosition(Z.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);let de=z.distanceTo(ee),Se=Z.projectionMatrix.elements,Ce=ae.projectionMatrix.elements,ze=Se[14]/(Se[10]-1),Ye=Se[14]/(Se[10]+1),j=(Se[9]+1)/Se[5],le=(Se[9]-1)/Se[5],L=(Se[8]-1)/Se[0],ke=(Ce[8]+1)/Ce[0],he=ze*L,Pe=ze*ke,Me=de/(-L+ke),Ee=Me*-L;if(Z.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ee),B.translateZ(Me),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Se[10]===-1)B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Ie=ze+Me,R=Ye+Me,E=he-Ee,q=Pe+(de-Ee),ie=j*Ye/R*Ie,oe=le*Ye/R*Ie;B.projectionMatrix.makePerspective(E,q,ie,oe,Ie,R),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function ue(B,Z){Z===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Z.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let Z=B.near,ae=B.far;M.texture!==null&&(M.depthNear>0&&(Z=M.depthNear),M.depthFar>0&&(ae=M.depthFar)),y.near=C.near=w.near=Z,y.far=C.far=w.far=ae,(A!==y.near||F!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,F=y.far),w.layers.mask=B.layers.mask|2,C.layers.mask=B.layers.mask|4,y.layers.mask=w.layers.mask|C.layers.mask;let de=B.parent,Se=y.cameras;ue(y,de);for(let Ce=0;Ce<Se.length;Ce++)ue(Se[Ce],de);Se.length===2?Y(y,w,C):y.projectionMatrix.copy(w.projectionMatrix),ve(B,y,de)};function ve(B,Z,ae){ae===null?B.matrix.copy(Z.matrixWorld):(B.matrix.copy(ae.matrixWorld),B.matrix.invert(),B.matrix.multiply(Z.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Z.projectionMatrix),B.projectionMatrixInverse.copy(Z.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Gr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(y)};let ye=null;function we(B,Z){if(d=Z.getViewerPose(c||o),g=Z,d!==null){let ae=d.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let de=!1;ae.length!==y.cameras.length&&(y.cameras.length=0,de=!0);for(let Ce=0;Ce<ae.length;Ce++){let ze=ae[Ce],Ye=null;if(f!==null)Ye=f.getViewport(ze);else{let le=u.getViewSubImage(h,ze);Ye=le.viewport,Ce===0&&(e.setRenderTargetTextures(x,le.colorTexture,h.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(x))}let j=b[Ce];j===void 0&&(j=new fn,j.layers.enable(Ce),j.viewport=new zt,b[Ce]=j),j.matrix.fromArray(ze.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ze.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),Ce===0&&(y.matrix.copy(j.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),de===!0&&y.cameras.push(j)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")){let Ce=u.getDepthInformation(ae[0]);Ce&&Ce.isValid&&Ce.texture&&M.init(e,Ce,s.renderState)}}for(let ae=0;ae<_.length;ae++){let de=v[ae],Se=_[ae];de!==null&&Se!==void 0&&Se.update(de,Z,c||o)}ye&&ye(B,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let me=new Dd;me.setAnimationLoop(we),this.setAnimationLoop=function(B){ye=B},this.dispose=function(){}}},ts=new ni,ly=new yt;function cy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ld(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),_=x.envMap,v=x.envMapRotation;_&&(m.envMap.value=_,ts.copy(v),ts.x*=-1,ts.y*=-1,ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(ts)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function hy(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){let v=_.program;n.uniformBlockBinding(x,v)}function c(x,_){let v=s[x.id];v===void 0&&(g(x),v=d(x),s[x.id]=v,x.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(x,I);let S=e.render.frame;r[x.id]!==S&&(h(x),r[x.id]=S)}function d(x){let _=u();x.__bindingPointIndex=_;let v=i.createBuffer(),I=x.__size,S=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let _=s[x.id],v=x.uniforms,I=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let S=0,w=v.length;S<w;S++){let C=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,y=C.length;b<y;b++){let A=C[b];if(f(A,S,b,I)===!0){let F=A.__offset,k=Array.isArray(A.value)?A.value:[A.value],X=0;for(let te=0;te<k.length;te++){let z=k[te],ee=M(z);typeof z=="number"||typeof z=="boolean"?(A.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,F+X,A.__data)):z.isMatrix3?(A.__data[0]=z.elements[0],A.__data[1]=z.elements[1],A.__data[2]=z.elements[2],A.__data[3]=0,A.__data[4]=z.elements[3],A.__data[5]=z.elements[4],A.__data[6]=z.elements[5],A.__data[7]=0,A.__data[8]=z.elements[6],A.__data[9]=z.elements[7],A.__data[10]=z.elements[8],A.__data[11]=0):(z.toArray(A.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,v,I){let S=x.value,w=_+"_"+v;if(I[w]===void 0)return typeof S=="number"||typeof S=="boolean"?I[w]=S:I[w]=S.clone(),!0;{let C=I[w];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return I[w]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(x){let _=x.uniforms,v=0,I=16;for(let w=0,C=_.length;w<C;w++){let b=Array.isArray(_[w])?_[w]:[_[w]];for(let y=0,A=b.length;y<A;y++){let F=b[y],k=Array.isArray(F.value)?F.value:[F.value];for(let X=0,te=k.length;X<te;X++){let z=k[X],ee=M(z),Y=v%I,ue=Y%ee.boundary,ve=Y+ue;v+=ue,ve!==0&&I-ve<ee.storage&&(v+=I-ve),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=ee.storage}}}let S=v%I;return S>0&&(v+=I-S),x.__size=v,x.__cache={},this}function M(x){let _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){let _=x.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var ua=class{constructor(e={}){let{canvas:t=pm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),M=new Int32Array(4),m=null,p=null,x=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this.toneMapping=Oi,this.toneMappingExposure=1;let v=this,I=!1,S=0,w=0,C=null,b=-1,y=null,A=new zt,F=new zt,k=null,X=new tt(0),te=0,z=t.width,ee=t.height,Y=1,ue=null,ve=null,ye=new zt(0,0,z,ee),we=new zt(0,0,z,ee),me=!1,B=new Xr,Z=!1,ae=!1,de=new yt,Se=new yt,Ce=new O,ze=new zt,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function le(){return C===null?Y:1}let L=n;function ke(T,H){return t.getContext(T,H)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ih}`),t.addEventListener("webglcontextlost",P,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",Q,!1),L===null){let H="webgl2";if(L=ke(H,T),L===null)throw ke(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let he,Pe,Me,Ee,Ie,R,E,q,ie,oe,ne,Re,be,Te,nt,pe,Ne,Be,$e,Le,N,se,xe,D;function ce(){he=new wx(L),he.init(),se=new sy(L,he),Pe=new _x(L,he,e,se),Me=new ty(L,he),Pe.reverseDepthBuffer&&h&&Me.buffers.depth.setReversed(!0),Ee=new Cx(L),Ie=new Vv,R=new iy(L,he,Me,Ie,Pe,se,Ee),E=new bx(v),q=new Tx(v),ie=new Om(L),xe=new vx(L,ie),oe=new Ax(L,ie,Ee,xe),ne=new Ix(L,oe,ie,Ee),$e=new Px(L,Pe,R),pe=new Mx(Ie),Re=new Hv(v,E,q,he,Pe,xe,pe),be=new cy(v,Ie),Te=new Wv,nt=new Jv(he),Be=new xx(v,E,q,Me,ne,f,l),Ne=new Qv(v,ne,Pe),D=new hy(L,Ee,Pe,Me),Le=new yx(L,he,Ee),N=new Rx(L,he,Ee),Ee.programs=Re.programs,v.capabilities=Pe,v.extensions=he,v.properties=Ie,v.renderLists=Te,v.shadowMap=Ne,v.state=Me,v.info=Ee}ce();let W=new Ic(v,L);this.xr=W,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=he.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=he.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(z,ee,!1))},this.getSize=function(T){return T.set(z,ee)},this.setSize=function(T,H,J=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=T,ee=H,t.width=Math.floor(T*Y),t.height=Math.floor(H*Y),J===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(z*Y,ee*Y).floor()},this.setDrawingBufferSize=function(T,H,J){z=T,ee=H,Y=J,t.width=Math.floor(T*J),t.height=Math.floor(H*J),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(ye)},this.setViewport=function(T,H,J,K){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,H,J,K),Me.viewport(A.copy(ye).multiplyScalar(Y).round())},this.getScissor=function(T){return T.copy(we)},this.setScissor=function(T,H,J,K){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,H,J,K),Me.scissor(F.copy(we).multiplyScalar(Y).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(T){Me.setScissorTest(me=T)},this.setOpaqueSort=function(T){ue=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(T=!0,H=!0,J=!0){let K=0;if(T){let V=!1;if(C!==null){let _e=C.texture.format;V=_e===uh||_e===hh||_e===ch}if(V){let _e=C.texture.type,De=_e===vi||_e===as||_e===Vr||_e===er||_e===oh||_e===ah,He=Be.getClearColor(),Ve=Be.getClearAlpha(),it=He.r,rt=He.g,Ge=He.b;De?(g[0]=it,g[1]=rt,g[2]=Ge,g[3]=Ve,L.clearBufferuiv(L.COLOR,0,g)):(M[0]=it,M[1]=rt,M[2]=Ge,M[3]=Ve,L.clearBufferiv(L.COLOR,0,M))}else K|=L.COLOR_BUFFER_BIT}H&&(K|=L.DEPTH_BUFFER_BIT),J&&(K|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",P,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Te.dispose(),nt.dispose(),Ie.dispose(),E.dispose(),q.dispose(),ne.dispose(),xe.dispose(),D.dispose(),Re.dispose(),W.dispose(),W.removeEventListener("sessionstart",Kh),W.removeEventListener("sessionend",jh),Yi.stop()};function P(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let T=Ee.autoReset,H=Ne.enabled,J=Ne.autoUpdate,K=Ne.needsUpdate,V=Ne.type;ce(),Ee.autoReset=T,Ne.enabled=H,Ne.autoUpdate=J,Ne.needsUpdate=K,Ne.type=V}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ge(T){let H=T.target;H.removeEventListener("dispose",ge),Je(H)}function Je(T){ut(T),Ie.remove(T)}function ut(T){let H=Ie.get(T).programs;H!==void 0&&(H.forEach(function(J){Re.releaseProgram(J)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,J,K,V,_e){H===null&&(H=Ye);let De=V.isMesh&&V.matrixWorld.determinant()<0,He=cp(T,H,J,K,V);Me.setMaterial(K,De);let Ve=J.index,it=1;if(K.wireframe===!0){if(Ve=oe.getWireframeAttribute(J),Ve===void 0)return;it=2}let rt=J.drawRange,Ge=J.attributes.position,dt=rt.start*it,St=(rt.start+rt.count)*it;_e!==null&&(dt=Math.max(dt,_e.start*it),St=Math.min(St,(_e.start+_e.count)*it)),Ve!==null?(dt=Math.max(dt,0),St=Math.min(St,Ve.count)):Ge!=null&&(dt=Math.max(dt,0),St=Math.min(St,Ge.count));let At=St-dt;if(At<0||At===1/0)return;xe.setup(V,K,He,J,Ve);let gn,ft=Le;if(Ve!==null&&(gn=ie.get(Ve),ft=N,ft.setIndex(gn)),V.isMesh)K.wireframe===!0?(Me.setLineWidth(K.wireframeLinewidth*le()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(V.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),Me.setLineWidth(qe*le()),V.isLineSegments?ft.setMode(L.LINES):V.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else V.isPoints?ft.setMode(L.POINTS):V.isSprite&&ft.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ft.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(he.get("WEBGL_multi_draw"))ft.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let qe=V._multiDrawStarts,li=V._multiDrawCounts,pt=V._multiDrawCount,Nn=Ve?ie.get(Ve).bytesPerElement:1,Ts=Ie.get(K).currentProgram.getUniforms();for(let Mn=0;Mn<pt;Mn++)Ts.setValue(L,"_gl_DrawID",Mn),ft.render(qe[Mn]/Nn,li[Mn])}else if(V.isInstancedMesh)ft.renderInstances(dt,At,V.count);else if(J.isInstancedBufferGeometry){let qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,li=Math.min(J.instanceCount,qe);ft.renderInstances(dt,At,li)}else ft.render(dt,At)};function et(T,H,J){T.transparent===!0&&T.side===Tt&&T.forceSinglePass===!1?(T.side=nn,T.needsUpdate=!0,xo(T,H,J),T.side=ki,T.needsUpdate=!0,xo(T,H,J),T.side=Tt):xo(T,H,J)}this.compile=function(T,H,J=null){J===null&&(J=T),p=nt.get(J),p.init(H),_.push(p),J.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==J&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let K=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _e=V.material;if(_e)if(Array.isArray(_e))for(let De=0;De<_e.length;De++){let He=_e[De];et(He,J,V),K.add(He)}else et(_e,J,V),K.add(_e)}),_.pop(),p=null,K},this.compileAsync=function(T,H,J=null){let K=this.compile(T,H,J);return new Promise(V=>{function _e(){if(K.forEach(function(De){Ie.get(De).currentProgram.isReady()&&K.delete(De)}),K.size===0){V(T);return}setTimeout(_e,10)}he.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Qt=null;function hn(T){Qt&&Qt(T)}function Kh(){Yi.stop()}function jh(){Yi.start()}let Yi=new Dd;Yi.setAnimationLoop(hn),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(T){Qt=T,W.setAnimationLoop(T),T===null?Yi.stop():Yi.start()},W.addEventListener("sessionstart",Kh),W.addEventListener("sessionend",jh),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(H),H=W.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,H,C),p=nt.get(T,_.length),p.init(H),_.push(p),Se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),B.setFromProjectionMatrix(Se),ae=this.localClippingEnabled,Z=pe.init(this.clippingPlanes,ae),m=Te.get(T,x.length),m.init(),x.push(m),W.enabled===!0&&W.isPresenting===!0){let _e=v.xr.getDepthSensingMesh();_e!==null&&Ja(_e,H,-1/0,v.sortObjects)}Ja(T,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ue,ve),j=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,j&&Be.addToRenderList(m,T),this.info.render.frame++,Z===!0&&pe.beginShadows();let J=p.state.shadowsArray;Ne.render(J,T,H),Z===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){let _e=H.cameras;if(V.length>0)for(let De=0,He=_e.length;De<He;De++){let Ve=_e[De];eu(K,V,T,Ve)}j&&Be.render(T);for(let De=0,He=_e.length;De<He;De++){let Ve=_e[De];Qh(m,T,Ve,Ve.viewport)}}else V.length>0&&eu(K,V,T,H),j&&Be.render(T),Qh(m,T,H);C!==null&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,H),xe.resetDefaultState(),b=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],Z===!0&&pe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function Ja(T,H,J,K){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){K&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);let De=ne.update(T),He=T.material;He.visible&&m.push(T,De,He,J,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){let De=ne.update(T),He=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ze.copy(De.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(He)){let Ve=De.groups;for(let it=0,rt=Ve.length;it<rt;it++){let Ge=Ve[it],dt=He[Ge.materialIndex];dt&&dt.visible&&m.push(T,De,dt,J,ze.z,Ge)}}else He.visible&&m.push(T,De,He,J,ze.z,null)}}let _e=T.children;for(let De=0,He=_e.length;De<He;De++)Ja(_e[De],H,J,K)}function Qh(T,H,J,K){let V=T.opaque,_e=T.transmissive,De=T.transparent;p.setupLightsView(J),Z===!0&&pe.setGlobalState(v.clippingPlanes,J),K&&Me.viewport(A.copy(K)),V.length>0&&go(V,H,J),_e.length>0&&go(_e,H,J),De.length>0&&go(De,H,J),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function eu(T,H,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new yi(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float")?Qr:vi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let _e=p.state.transmissionRenderTarget[K.id],De=K.viewport||A;_e.setSize(De.z,De.w);let He=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(X),te=v.getClearAlpha(),te<1&&v.setClearColor(16777215,.5),v.clear(),j&&Be.render(J);let Ve=v.toneMapping;v.toneMapping=Oi;let it=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Z===!0&&pe.setGlobalState(v.clippingPlanes,K),go(T,J,K),R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e),he.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ge=0,dt=H.length;Ge<dt;Ge++){let St=H[Ge],At=St.object,gn=St.geometry,ft=St.material,qe=St.group;if(ft.side===Tt&&At.layers.test(K.layers)){let li=ft.side;ft.side=nn,ft.needsUpdate=!0,tu(At,J,K,gn,ft,qe),ft.side=li,ft.needsUpdate=!0,rt=!0}}rt===!0&&(R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e))}v.setRenderTarget(He),v.setClearColor(X,te),it!==void 0&&(K.viewport=it),v.toneMapping=Ve}function go(T,H,J){let K=H.isScene===!0?H.overrideMaterial:null;for(let V=0,_e=T.length;V<_e;V++){let De=T[V],He=De.object,Ve=De.geometry,it=K===null?De.material:K,rt=De.group;He.layers.test(J.layers)&&tu(He,H,J,Ve,it,rt)}}function tu(T,H,J,K,V,_e){T.onBeforeRender(v,H,J,K,V,_e),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(v,H,J,K,T,_e),V.transparent===!0&&V.side===Tt&&V.forceSinglePass===!1?(V.side=nn,V.needsUpdate=!0,v.renderBufferDirect(J,H,K,V,T,_e),V.side=ki,V.needsUpdate=!0,v.renderBufferDirect(J,H,K,V,T,_e),V.side=Tt):v.renderBufferDirect(J,H,K,V,T,_e),T.onAfterRender(v,H,J,K,V,_e)}function xo(T,H,J){H.isScene!==!0&&(H=Ye);let K=Ie.get(T),V=p.state.lights,_e=p.state.shadowsArray,De=V.state.version,He=Re.getParameters(T,V.state,_e,H,J),Ve=Re.getProgramCacheKey(He),it=K.programs;K.environment=T.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(T.isMeshStandardMaterial?q:E).get(T.envMap||K.environment),K.envMapRotation=K.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,it===void 0&&(T.addEventListener("dispose",ge),it=new Map,K.programs=it);let rt=it.get(Ve);if(rt!==void 0){if(K.currentProgram===rt&&K.lightsStateVersion===De)return iu(T,He),rt}else He.uniforms=Re.getUniforms(T),T.onBeforeCompile(He,v),rt=Re.acquireProgram(He,Ve),it.set(Ve,rt),K.uniforms=He.uniforms;let Ge=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=pe.uniform),iu(T,He),K.needsLights=up(T),K.lightsStateVersion=De,K.needsLights&&(Ge.ambientLightColor.value=V.state.ambient,Ge.lightProbe.value=V.state.probe,Ge.directionalLights.value=V.state.directional,Ge.directionalLightShadows.value=V.state.directionalShadow,Ge.spotLights.value=V.state.spot,Ge.spotLightShadows.value=V.state.spotShadow,Ge.rectAreaLights.value=V.state.rectArea,Ge.ltc_1.value=V.state.rectAreaLTC1,Ge.ltc_2.value=V.state.rectAreaLTC2,Ge.pointLights.value=V.state.point,Ge.pointLightShadows.value=V.state.pointShadow,Ge.hemisphereLights.value=V.state.hemi,Ge.directionalShadowMap.value=V.state.directionalShadowMap,Ge.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ge.spotShadowMap.value=V.state.spotShadowMap,Ge.spotLightMatrix.value=V.state.spotLightMatrix,Ge.spotLightMap.value=V.state.spotLightMap,Ge.pointShadowMap.value=V.state.pointShadowMap,Ge.pointShadowMatrix.value=V.state.pointShadowMatrix),K.currentProgram=rt,K.uniformsList=null,rt}function nu(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=Js.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function iu(T,H){let J=Ie.get(T);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function cp(T,H,J,K,V){H.isScene!==!0&&(H=Ye),R.resetTextureUnits();let _e=H.fog,De=K.isMeshStandardMaterial?H.environment:null,He=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ar,Ve=(K.isMeshStandardMaterial?q:E).get(K.envMap||De),it=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,rt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!J.morphAttributes.position,dt=!!J.morphAttributes.normal,St=!!J.morphAttributes.color,At=Oi;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(At=v.toneMapping);let gn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ft=gn!==void 0?gn.length:0,qe=Ie.get(K),li=p.state.lights;if(Z===!0&&(ae===!0||T!==y)){let An=T===y&&K.id===b;pe.setState(K,T,An)}let pt=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==li.state.version||qe.outputColorSpace!==He||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isBatchedMesh&&qe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&qe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qe.instancingMorph===!1&&V.morphTexture!==null||qe.envMap!==Ve||K.fog===!0&&qe.fog!==_e||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==pe.numPlanes||qe.numIntersection!==pe.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==rt||qe.morphTargets!==Ge||qe.morphNormals!==dt||qe.morphColors!==St||qe.toneMapping!==At||qe.morphTargetsCount!==ft)&&(pt=!0):(pt=!0,qe.__version=K.version);let Nn=qe.currentProgram;pt===!0&&(Nn=xo(K,H,V));let Ts=!1,Mn=!1,Er=!1,Rt=Nn.getUniforms(),Jn=qe.uniforms;if(Me.useProgram(Nn.program)&&(Ts=!0,Mn=!0,Er=!0),K.id!==b&&(b=K.id,Mn=!0),Ts||y!==T){Me.buffers.depth.getReversed()?(de.copy(T.projectionMatrix),gm(de),xm(de),Rt.setValue(L,"projectionMatrix",de)):Rt.setValue(L,"projectionMatrix",T.projectionMatrix),Rt.setValue(L,"viewMatrix",T.matrixWorldInverse);let Ti=Rt.map.cameraPosition;Ti!==void 0&&Ti.setValue(L,Ce.setFromMatrixPosition(T.matrixWorld)),Pe.logarithmicDepthBuffer&&Rt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Rt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),y!==T&&(y=T,Mn=!0,Er=!0)}if(V.isSkinnedMesh){Rt.setOptional(L,V,"bindMatrix"),Rt.setOptional(L,V,"bindMatrixInverse");let An=V.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Rt.setValue(L,"boneTexture",An.boneTexture,R))}V.isBatchedMesh&&(Rt.setOptional(L,V,"batchingTexture"),Rt.setValue(L,"batchingTexture",V._matricesTexture,R),Rt.setOptional(L,V,"batchingIdTexture"),Rt.setValue(L,"batchingIdTexture",V._indirectTexture,R),Rt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Rt.setValue(L,"batchingColorTexture",V._colorsTexture,R));let Sr=J.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&$e.update(V,J,Nn),(Mn||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,Rt.setValue(L,"receiveShadow",V.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Jn.envMap.value=Ve,Jn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(Jn.envMapIntensity.value=H.environmentIntensity),Mn&&(Rt.setValue(L,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&hp(Jn,Er),_e&&K.fog===!0&&be.refreshFogUniforms(Jn,_e),be.refreshMaterialUniforms(Jn,K,Y,ee,p.state.transmissionRenderTarget[T.id]),Js.upload(L,nu(qe),Jn,R)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Js.upload(L,nu(qe),Jn,R),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Rt.setValue(L,"center",V.center),Rt.setValue(L,"modelViewMatrix",V.modelViewMatrix),Rt.setValue(L,"normalMatrix",V.normalMatrix),Rt.setValue(L,"modelMatrix",V.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let An=K.uniformsGroups;for(let Ti=0,wi=An.length;Ti<wi;Ti++){let su=An[Ti];D.update(su,Nn),D.bind(su,Nn)}}return Nn}function hp(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function up(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,H,J){Ie.get(T.texture).__webglTexture=H,Ie.get(T.depthTexture).__webglTexture=J;let K=Ie.get(T);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=J===void 0,K.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){let J=Ie.get(T);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,J=0){C=T,S=H,w=J;let K=!0,V=null,_e=!1,De=!1;if(T){let Ve=Ie.get(T);if(Ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),K=!1;else if(Ve.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(Ve.__hasExternalTextures)R.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ge=T.depthTexture;if(Ve.__boundDepthTexture!==Ge){if(Ge!==null&&Ie.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}let it=T.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(De=!0);let rt=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(rt[H])?V=rt[H][J]:V=rt[H],_e=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?V=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(rt)?V=rt[J]:V=rt,A.copy(T.viewport),F.copy(T.scissor),k=T.scissorTest}else A.copy(ye).multiplyScalar(Y).floor(),F.copy(we).multiplyScalar(Y).floor(),k=me;if(Me.bindFramebuffer(L.FRAMEBUFFER,V)&&K&&Me.drawBuffers(T,V),Me.viewport(A),Me.scissor(F),Me.setScissorTest(k),_e){let Ve=Ie.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ve.__webglTexture,J)}else if(De){let Ve=Ie.get(T.texture),it=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ve.__webglTexture,J||0,it)}b=-1},this.readRenderTargetPixels=function(T,H,J,K,V,_e,De){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(He=He[De]),He){Me.bindFramebuffer(L.FRAMEBUFFER,He);try{let Ve=T.texture,it=Ve.format,rt=Ve.type;if(!Pe.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-K&&J>=0&&J<=T.height-V&&L.readPixels(H,J,K,V,se.convert(it),se.convert(rt),_e)}finally{let Ve=C!==null?Ie.get(C).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(T,H,J,K,V,_e,De){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(He=He[De]),He){let Ve=T.texture,it=Ve.format,rt=Ve.type;if(!Pe.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-K&&J>=0&&J<=T.height-V){Me.bindFramebuffer(L.FRAMEBUFFER,He);let Ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),L.readPixels(H,J,K,V,se.convert(it),se.convert(rt),0);let dt=C!==null?Ie.get(C).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,dt);let St=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await mm(L,St,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(Ge),L.deleteSync(St),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,J=0){T.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);let K=Math.pow(2,-J),V=Math.floor(T.image.width*K),_e=Math.floor(T.image.height*K),De=H!==null?H.x:0,He=H!==null?H.y:0;R.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,J,0,0,De,He,V,_e),Me.unbindTexture()},this.copyTextureToTexture=function(T,H,J=null,K=null,V=0){T.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,T=arguments[1],H=arguments[2],V=arguments[3]||0,J=null);let _e,De,He,Ve,it,rt,Ge,dt,St,At=T.isCompressedTexture?T.mipmaps[V]:T.image;J!==null?(_e=J.max.x-J.min.x,De=J.max.y-J.min.y,He=J.isBox3?J.max.z-J.min.z:1,Ve=J.min.x,it=J.min.y,rt=J.isBox3?J.min.z:0):(_e=At.width,De=At.height,He=At.depth||1,Ve=0,it=0,rt=0),K!==null?(Ge=K.x,dt=K.y,St=K.z):(Ge=0,dt=0,St=0);let gn=se.convert(H.format),ft=se.convert(H.type),qe;H.isData3DTexture?(R.setTexture3D(H,0),qe=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(R.setTexture2DArray(H,0),qe=L.TEXTURE_2D_ARRAY):(R.setTexture2D(H,0),qe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);let li=L.getParameter(L.UNPACK_ROW_LENGTH),pt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Nn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ts=L.getParameter(L.UNPACK_SKIP_ROWS),Mn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,it),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rt);let Er=T.isDataArrayTexture||T.isData3DTexture,Rt=H.isDataArrayTexture||H.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Jn=Ie.get(T),Sr=Ie.get(H),An=Ie.get(Jn.__renderTarget),Ti=Ie.get(Sr.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,An.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let wi=0;wi<He;wi++)Er&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.get(T).__webglTexture,V,rt+wi),T.isDepthTexture?(Rt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.get(H).__webglTexture,V,St+wi),L.blitFramebuffer(Ve,it,_e,De,Ge,dt,_e,De,L.DEPTH_BUFFER_BIT,L.NEAREST)):Rt?L.copyTexSubImage3D(qe,V,Ge,dt,St+wi,Ve,it,_e,De):L.copyTexSubImage2D(qe,V,Ge,dt,St+wi,Ve,it,_e,De);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Rt?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(qe,V,Ge,dt,St,_e,De,He,gn,ft,At.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(qe,V,Ge,dt,St,_e,De,He,gn,At.data):L.texSubImage3D(qe,V,Ge,dt,St,_e,De,He,gn,ft,At):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,V,Ge,dt,_e,De,gn,ft,At.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,V,Ge,dt,At.width,At.height,gn,At.data):L.texSubImage2D(L.TEXTURE_2D,V,Ge,dt,_e,De,gn,ft,At);L.pixelStorei(L.UNPACK_ROW_LENGTH,li),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Nn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ts),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Mn),V===0&&H.generateMipmaps&&L.generateMipmap(qe),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,H,J=null,K=null,V=0){return T.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,K=arguments[1]||null,T=arguments[2],H=arguments[3],V=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,J,K,V)},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){S=0,w=0,C=null,Me.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var da=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sr=class extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Lc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new O,fa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),s=vt(s,this.array),r=vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cs=class extends Fi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bs,Cr=new O,Hs=new O,Vs=new O,Gs=new fe,Pr=new fe,zd=new yt,Fo=new O,Ir=new O,Bo=new O,sd=new fe,Tl=new fe,rd=new fe,rr=class extends rn{constructor(e=new cs){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Kt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lc(t,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new fa(n,3,0,!1)),Bs.setAttribute("uv",new fa(n,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hs.setFromMatrixScale(this.matrixWorld),zd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hs.multiplyScalar(-Vs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Ho(Fo.set(-.5,-.5,0),Vs,o,Hs,s,r),Ho(Ir.set(.5,-.5,0),Vs,o,Hs,s,r),Ho(Bo.set(.5,.5,0),Vs,o,Hs,s,r),sd.set(0,0),Tl.set(1,0),rd.set(1,1);let a=e.ray.intersectTriangle(Fo,Ir,Bo,!1,Cr);if(a===null&&(Ho(Ir.set(-.5,.5,0),Vs,o,Hs,s,r),Tl.set(0,1),a=e.ray.intersectTriangle(Fo,Bo,Ir,!1,Cr),a===null))return;let l=e.ray.origin.distanceTo(Cr);l<e.near||l>e.far||t.push({distance:l,point:Cr.clone(),uv:Ui.getInterpolation(Cr,Fo,Ir,Bo,sd,Tl,rd,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ho(i,e,t,n,s,r){Gs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Pr.x=r*Gs.x-s*Gs.y,Pr.y=s*Gs.x+r*Gs.y):Pr.copy(Gs),i.copy(e),i.x+=Pr.x,i.y+=Pr.y,i.applyMatrix4(zd)}var Dc=class extends xn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Sn,d=Sn,u,h){super(null,o,a,l,c,d,s,r,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pa=class extends sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new yt,od=new yt,Vo=[],ad=new _i,uy=new yt,Lr=new G,Dr=new ls,qr=class extends G{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,uy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),ad.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Dr.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Lr.geometry=this.geometry,Lr.material=this.material,Lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ws),od.multiplyMatrices(n,Ws),Lr.matrixWorld=od,Lr.raycast(e,Vo);for(let o=0,a=Vo.length;o<a;o++){let l=Vo[o];l.instanceId=r,l.object=this,t.push(l)}Vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dc(new Float32Array(s*this.count),s,this.count,lh,Qn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var pn=class extends xn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let d=n[s],h=n[s+1]-d,f=(o-d)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new fe:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new O,s=[],r=[],o=[],a=new O,l=new yt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),h=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(qt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends Pn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*d-f*u+this.aX,c=h*u+f*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uc=class extends $r{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ph(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,d,u){let h=(o-r)/c-(a-r)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+u)+(l-a)/u;h*=d,f*=d,s(o,a,h,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Go=new O,wl=new ph,Al=new ph,Rl=new ph,Nc=class extends Pn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,d;this.closed||a>0?c=s[(a-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),c=Go);let u=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?d=s[(a+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Go),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),M=Math.pow(u.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(d),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),wl.initNonuniformCatmullRom(c.x,u.x,h.x,d.x,g,M,m),Al.initNonuniformCatmullRom(c.y,u.y,h.y,d.y,g,M,m),Rl.initNonuniformCatmullRom(c.z,u.z,h.z,d.z,g,M,m)}else this.curveType==="catmullrom"&&(wl.initCatmullRom(c.x,u.x,h.x,d.x,this.tension),Al.initCatmullRom(c.y,u.y,h.y,d.y,this.tension),Rl.initCatmullRom(c.z,u.z,h.z,d.z,this.tension));return n.set(wl.calc(l),Al.calc(l),Rl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ld(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function dy(i,e){let t=1-i;return t*t*e}function fy(i,e){return 2*(1-i)*i*e}function py(i,e){return i*i*e}function Fr(i,e,t,n){return dy(i,e)+fy(i,t)+py(i,n)}function my(i,e){let t=1-i;return t*t*t*e}function gy(i,e){let t=1-i;return 3*t*t*i*e}function xy(i,e){return 3*(1-i)*i*i*e}function vy(i,e){return i*i*i*e}function Br(i,e,t,n,s){return my(i,e)+gy(i,t)+xy(i,n)+vy(i,s)}var ma=class extends Pn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(e,s.x,r.x,o.x,a.x),Br(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Oc=class extends Pn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Br(e,s.x,r.x,o.x,a.x),Br(e,s.y,r.y,o.y,a.y),Br(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends Pn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends Pn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Pn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zc=class extends Pn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Fr(e,s.x,r.x,o.x),Fr(e,s.y,r.y,o.y),Fr(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],d=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ld(a,l.x,c.x,d.x,u.x),ld(a,l.y,c.y,d.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new fe().fromArray(s))}return this}},Fc=Object.freeze({__proto__:null,ArcCurve:Uc,CatmullRomCurve3:Nc,CubicBezierCurve:ma,CubicBezierCurve3:Oc,EllipseCurve:$r,LineCurve:ga,LineCurve3:kc,QuadraticBezierCurve:xa,QuadraticBezierCurve3:zc,SplineCurve:va}),Bc=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Fc[s.type]().fromJSON(s))}return this}},hs=class extends Bc{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ga(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xa(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new ma(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new va(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new $r(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Bi=class i extends Kt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=qt(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],d=1/t,u=new O,h=new fe,f=new O,g=new O,M=new O,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(M.x,M.y,M.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(g)}for(let x=0;x<=t;x++){let _=n+x*d*s,v=Math.sin(_),I=Math.cos(_);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*v,u.y=e[S].y,u.z=e[S].x*I,o.push(u.x,u.y,u.z),h.x=x/t,h.y=S/(e.length-1),a.push(h.x,h.y);let w=l[3*S+0]*v,C=l[3*S+1],b=l[3*S+0]*I;c.push(w,C,b)}}for(let x=0;x<t;x++)for(let _=0;_<e.length-1;_++){let v=_+x*e.length,I=v,S=v+e.length,w=v+e.length+1,C=v+1;r.push(I,S,C),r.push(w,C,S)}this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("uv",new _t(a,2)),this.setAttribute("normal",new _t(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ii=class i extends Bi{constructor(e=1,t=1,n=4,s=8){let r=new hs;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},us=class i extends Kt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,d=new fe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[h]/e+1)/2,d.y=(o[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xe=class i extends Kt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],h=[],f=[],g=0,M=[],m=n/2,p=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new _t(u,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(f,2));function x(){let v=new O,I=new O,S=0,w=(t-e)/n;for(let C=0;C<=r;C++){let b=[],y=C/r,A=y*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,X=k*l+a,te=Math.sin(X),z=Math.cos(X);I.x=A*te,I.y=-y*n+m,I.z=A*z,u.push(I.x,I.y,I.z),v.set(te,w,z).normalize(),h.push(v.x,v.y,v.z),f.push(k,1-y),b.push(g++)}M.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){let y=M[b][C],A=M[b+1][C],F=M[b+1][C+1],k=M[b][C+1];(e>0||b!==0)&&(d.push(y,A,k),S+=3),(t>0||b!==r-1)&&(d.push(A,F,k),S+=3)}c.addGroup(p,S,0),p+=S}function _(v){let I=g,S=new fe,w=new O,C=0,b=v===!0?e:t,y=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*y,0),h.push(0,y,0),f.push(.5,.5),g++;let A=g;for(let F=0;F<=s;F++){let X=F/s*l+a,te=Math.cos(X),z=Math.sin(X);w.x=b*z,w.y=m*y,w.z=b*te,u.push(w.x,w.y,w.z),h.push(0,y,0),S.x=te*.5+.5,S.y=z*.5*y+.5,f.push(S.x,S.y),g++}for(let F=0;F<s;F++){let k=I+F,X=A+F;v===!0?d.push(X,X+1,k):d.push(X+1,X,k),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zr=class i extends Xe{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hc=class i extends Kt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),d(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let _=new O,v=new O,I=new O;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],v),f(t[S+2],I),l(_,v,I,x)}function l(x,_,v,I){let S=I+1,w=[];for(let C=0;C<=S;C++){w[C]=[];let b=x.clone().lerp(v,C/S),y=_.clone().lerp(v,C/S),A=S-C;for(let F=0;F<=A;F++)F===0&&C===S?w[C][F]=b:w[C][F]=b.clone().lerp(y,F/A)}for(let C=0;C<S;C++)for(let b=0;b<2*(S-C)-1;b++){let y=Math.floor(b/2);b%2===0?(h(w[C][y+1]),h(w[C+1][y]),h(w[C][y])):(h(w[C][y+1]),h(w[C+1][y+1]),h(w[C+1][y]))}}function c(x){let _=new O;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(x),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function d(){let x=new O;for(let _=0;_<r.length;_+=3){x.x=r[_+0],x.y=r[_+1],x.z=r[_+2];let v=m(x)/2/Math.PI+.5,I=p(x)/Math.PI+.5;o.push(v,1-I)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let _=o[x+0],v=o[x+2],I=o[x+4],S=Math.max(_,v,I),w=Math.min(_,v,I);S>.9&&w<.1&&(_<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),I<.2&&(o[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function f(x,_){let v=x*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function g(){let x=new O,_=new O,v=new O,I=new O,S=new fe,w=new fe,C=new fe;for(let b=0,y=0;b<r.length;b+=9,y+=6){x.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),S.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),I.copy(x).add(_).add(v).divideScalar(3);let A=m(I);M(S,y+0,x,A),M(w,y+2,_,A),M(C,y+4,v,A)}}function M(x,_,v,I){I<0&&x.x===1&&(o[_]=x.x-1),v.x===0&&v.z===0&&(o[_]=I/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var si=class extends hs{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new hs().fromJSON(s))}return this}},yy={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Fd(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,d,u,h,f;if(n&&(r=Sy(i,e,r,t)),i.length>80*t){a=c=i[0],l=d=i[1];for(let g=t;g<s;g+=t)u=i[g],h=i[g+1],u<a&&(a=u),h<l&&(l=h),u>c&&(c=u),h>d&&(d=h);f=Math.max(c-a,d-l),f=f!==0?32767/f:0}return Yr(r,o,t,a,l,f,0),o}};function Fd(i,e,t,n,s){let r,o;if(s===Ny(i,e,t,n)>0)for(r=e;r<t;r+=n)o=cd(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=cd(r,i[r],i[r+1],o);return o&&Pa(o,o.next)&&(Kr(o),o=o.next),o}function ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Pa(t,t.next)||Nt(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Yr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Cy(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?My(i,n,s,r):_y(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),Kr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=by(ds(i),e,t),Yr(i,e,t,n,s,r,2)):o===2&&Ey(i,e,t,n,s,r):Yr(ds(i),e,t,n,s,r,1);break}}}function _y(i){let e=i.prev,t=i,n=i.next;if(Nt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,h=s>r?s>o?s:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=h&&g.y>=u&&g.y<=f&&qs(s,a,r,l,o,c,g.x,g.y)&&Nt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function My(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Nt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,d=s.y,u=r.y,h=o.y,f=a<l?a<c?a:c:l<c?l:c,g=d<u?d<h?d:h:u<h?u:h,M=a>l?a>c?a:c:l>c?l:c,m=d>u?d>h?d:h:u>h?u:h,p=Vc(f,g,e,t,n),x=Vc(M,m,e,t,n),_=i.prevZ,v=i.nextZ;for(;_&&_.z>=p&&v&&v.z<=x;){if(_.x>=f&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&qs(a,d,l,u,c,h,_.x,_.y)&&Nt(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&qs(a,d,l,u,c,h,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=M&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&qs(a,d,l,u,c,h,_.x,_.y)&&Nt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=M&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&qs(a,d,l,u,c,h,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function by(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Pa(s,r)&&Bd(s,n,n.next,r)&&Jr(s,r)&&Jr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Kr(n),Kr(n.next),n=i=r),n=n.next}while(n!==i);return ds(n)}function Ey(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ly(o,a)){let l=Hd(o,a);o=ds(o,o.next),l=ds(l,l.next),Yr(o,e,t,n,s,r,0),Yr(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Sy(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Fd(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Iy(c));for(s.sort(Ty),r=0;r<s.length;r++)t=wy(s[r],t);return t}function Ty(i,e){return i.x-e.x}function wy(i,e){let t=Ay(i,e);if(!t)return e;let n=Hd(t,i);return ds(n,n.next),ds(t,t.next)}function Ay(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let h=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>n&&(n=h,s=t.x<t.next.x?t:t.next,h===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,d=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&qs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Jr(t,i)&&(u<d||u===d&&(t.x>s.x||t.x===s.x&&Ry(s,t)))&&(s=t,d=u)),t=t.next;while(t!==a);return s}function Ry(i,e){return Nt(i.prev,i,e.prev)<0&&Nt(e.next,i,i.next)<0}function Cy(i,e,t,n){let s=i;do s.z===0&&(s.z=Vc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Py(s)}function Py(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Vc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Iy(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qs(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ly(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Dy(i,e)&&(Jr(i,e)&&Jr(e,i)&&Uy(i,e)&&(Nt(i.prev,i,e.prev)||Nt(i,e.prev,e))||Pa(i,e)&&Nt(i.prev,i,i.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Pa(i,e){return i.x===e.x&&i.y===e.y}function Bd(i,e,t,n){let s=Xo(Nt(i,e,t)),r=Xo(Nt(i,e,n)),o=Xo(Nt(t,n,i)),a=Xo(Nt(t,n,e));return!!(s!==r&&o!==a||s===0&&Wo(i,t,e)||r===0&&Wo(i,n,e)||o===0&&Wo(t,i,n)||a===0&&Wo(t,e,n))}function Wo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Xo(i){return i>0?1:i<0?-1:0}function Dy(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Bd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Jr(i,e){return Nt(i.prev,i,i.next)<0?Nt(i,e,i.next)>=0&&Nt(i,i.prev,e)>=0:Nt(i,e,i.prev)<0||Nt(i,i.next,e)<0}function Uy(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Hd(i,e){let t=new Gc(i.i,i.x,i.y),n=new Gc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cd(i,e,t,n){let s=new Gc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Gc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ny(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Hr=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];hd(e),ud(n,e);let o=e.length;t.forEach(hd);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,ud(n,t[l]);let a=yy.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function hd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ud(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Hn=class i extends Kt{constructor(e=new si([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Oy,_,v=!1,I,S,w,C;p&&(_=p.getSpacedPoints(d),v=!0,h=!1,I=p.computeFrenetFrames(d,!1),S=new O,w=new O,C=new O),h||(m=0,f=0,g=0,M=0);let b=a.extractPoints(c),y=b.shape,A=b.holes;if(!Hr.isClockWise(y)){y=y.reverse();for(let j=0,le=A.length;j<le;j++){let L=A[j];Hr.isClockWise(L)&&(A[j]=L.reverse())}}let k=Hr.triangulateShape(y,A),X=y;for(let j=0,le=A.length;j<le;j++){let L=A[j];y=y.concat(L)}function te(j,le,L){return le||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(le,L)}let z=y.length,ee=k.length;function Y(j,le,L){let ke,he,Pe,Me=j.x-le.x,Ee=j.y-le.y,Ie=L.x-j.x,R=L.y-j.y,E=Me*Me+Ee*Ee,q=Me*R-Ee*Ie;if(Math.abs(q)>Number.EPSILON){let ie=Math.sqrt(E),oe=Math.sqrt(Ie*Ie+R*R),ne=le.x-Ee/ie,Re=le.y+Me/ie,be=L.x-R/oe,Te=L.y+Ie/oe,nt=((be-ne)*R-(Te-Re)*Ie)/(Me*R-Ee*Ie);ke=ne+Me*nt-j.x,he=Re+Ee*nt-j.y;let pe=ke*ke+he*he;if(pe<=2)return new fe(ke,he);Pe=Math.sqrt(pe/2)}else{let ie=!1;Me>Number.EPSILON?Ie>Number.EPSILON&&(ie=!0):Me<-Number.EPSILON?Ie<-Number.EPSILON&&(ie=!0):Math.sign(Ee)===Math.sign(R)&&(ie=!0),ie?(ke=-Ee,he=Me,Pe=Math.sqrt(E)):(ke=Me,he=Ee,Pe=Math.sqrt(E/2))}return new fe(ke/Pe,he/Pe)}let ue=[];for(let j=0,le=X.length,L=le-1,ke=j+1;j<le;j++,L++,ke++)L===le&&(L=0),ke===le&&(ke=0),ue[j]=Y(X[j],X[L],X[ke]);let ve=[],ye,we=ue.concat();for(let j=0,le=A.length;j<le;j++){let L=A[j];ye=[];for(let ke=0,he=L.length,Pe=he-1,Me=ke+1;ke<he;ke++,Pe++,Me++)Pe===he&&(Pe=0),Me===he&&(Me=0),ye[ke]=Y(L[ke],L[Pe],L[Me]);ve.push(ye),we=we.concat(ye)}for(let j=0;j<m;j++){let le=j/m,L=f*Math.cos(le*Math.PI/2),ke=g*Math.sin(le*Math.PI/2)+M;for(let he=0,Pe=X.length;he<Pe;he++){let Me=te(X[he],ue[he],ke);de(Me.x,Me.y,-L)}for(let he=0,Pe=A.length;he<Pe;he++){let Me=A[he];ye=ve[he];for(let Ee=0,Ie=Me.length;Ee<Ie;Ee++){let R=te(Me[Ee],ye[Ee],ke);de(R.x,R.y,-L)}}}let me=g+M;for(let j=0;j<z;j++){let le=h?te(y[j],we[j],me):y[j];v?(w.copy(I.normals[0]).multiplyScalar(le.x),S.copy(I.binormals[0]).multiplyScalar(le.y),C.copy(_[0]).add(w).add(S),de(C.x,C.y,C.z)):de(le.x,le.y,0)}for(let j=1;j<=d;j++)for(let le=0;le<z;le++){let L=h?te(y[le],we[le],me):y[le];v?(w.copy(I.normals[j]).multiplyScalar(L.x),S.copy(I.binormals[j]).multiplyScalar(L.y),C.copy(_[j]).add(w).add(S),de(C.x,C.y,C.z)):de(L.x,L.y,u/d*j)}for(let j=m-1;j>=0;j--){let le=j/m,L=f*Math.cos(le*Math.PI/2),ke=g*Math.sin(le*Math.PI/2)+M;for(let he=0,Pe=X.length;he<Pe;he++){let Me=te(X[he],ue[he],ke);de(Me.x,Me.y,u+L)}for(let he=0,Pe=A.length;he<Pe;he++){let Me=A[he];ye=ve[he];for(let Ee=0,Ie=Me.length;Ee<Ie;Ee++){let R=te(Me[Ee],ye[Ee],ke);v?de(R.x,R.y+_[d-1].y,_[d-1].x+L):de(R.x,R.y,u+L)}}}B(),Z();function B(){let j=s.length/3;if(h){let le=0,L=z*le;for(let ke=0;ke<ee;ke++){let he=k[ke];Se(he[2]+L,he[1]+L,he[0]+L)}le=d+m*2,L=z*le;for(let ke=0;ke<ee;ke++){let he=k[ke];Se(he[0]+L,he[1]+L,he[2]+L)}}else{for(let le=0;le<ee;le++){let L=k[le];Se(L[2],L[1],L[0])}for(let le=0;le<ee;le++){let L=k[le];Se(L[0]+z*d,L[1]+z*d,L[2]+z*d)}}n.addGroup(j,s.length/3-j,0)}function Z(){let j=s.length/3,le=0;ae(X,le),le+=X.length;for(let L=0,ke=A.length;L<ke;L++){let he=A[L];ae(he,le),le+=he.length}n.addGroup(j,s.length/3-j,1)}function ae(j,le){let L=j.length;for(;--L>=0;){let ke=L,he=L-1;he<0&&(he=j.length-1);for(let Pe=0,Me=d+m*2;Pe<Me;Pe++){let Ee=z*Pe,Ie=z*(Pe+1),R=le+ke+Ee,E=le+he+Ee,q=le+he+Ie,ie=le+ke+Ie;Ce(R,E,q,ie)}}}function de(j,le,L){l.push(j),l.push(le),l.push(L)}function Se(j,le,L){ze(j),ze(le),ze(L);let ke=s.length/3,he=x.generateTopUV(n,s,ke-3,ke-2,ke-1);Ye(he[0]),Ye(he[1]),Ye(he[2])}function Ce(j,le,L,ke){ze(j),ze(le),ze(ke),ze(le),ze(L),ze(ke);let he=s.length/3,Pe=x.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);Ye(Pe[0]),Ye(Pe[1]),Ye(Pe[3]),Ye(Pe[1]),Ye(Pe[2]),Ye(Pe[3])}function ze(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Ye(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ky(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Fc[s.type]().fromJSON(s)),new i(n,e.options)}},Oy={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new fe(r,o),new fe(a,l),new fe(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],u=e[n*3+2],h=e[s*3],f=e[s*3+1],g=e[s*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new fe(o,1-l),new fe(c,1-u),new fe(h,1-g),new fe(M,1-p)]:[new fe(a,1-l),new fe(d,1-u),new fe(f,1-g),new fe(m,1-p)]}};function ky(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ya=class i extends Hc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ht=class i extends Kt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,d=[],u=new O,h=new O,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let x=[],_=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){let S=I/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),h.copy(u).normalize(),M.push(h.x,h.y,h.z),m.push(S+v,1-_),x.push(c++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let _=d[p][x+1],v=d[p][x],I=d[p+1][x],S=d[p+1][x+1];(p!==0||o>0)&&f.push(_,v,S),(p!==n-1||l<Math.PI)&&f.push(v,I,S)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(M,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hi=class i extends Kt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],d=new O,u=new O,h=new O;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let M=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(M),u.y=(e+t*Math.cos(m))*Math.sin(M),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let M=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(M,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(l,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var re=class extends Fi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rd,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function qo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function zy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var or=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wc=class extends or{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cu:r=e,a=2*t-n;break;case hu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:o=e,l=2*n-t;break;case hu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=o*d}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),M=g*g,m=M*g,p=-h*m+2*h*M-h*g,x=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*g+1,_=(-1-f)*m+(1.5+f)*M+.5*g,v=f*m-f*M;for(let I=0;I!==a;++I)r[I]=p*o[d+I]+x*o[c+I]+_*o[l+I]+v*o[u+I];return r}},Xc=class extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(n-t)/(s-t),u=1-d;for(let h=0;h!==a;++h)r[h]=o[c+h]*u+o[l+h]*d;return r}},qc=class extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qo(t,this.TimeBufferType),this.values=qo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qo(e.times,Array),values:qo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qo:t=this.InterpolantFactoryMethodDiscrete;break;case pc:t=this.InterpolantFactoryMethodLinear;break;case ja:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qo;case this.InterpolantFactoryMethodLinear:return pc;case this.InterpolantFactoryMethodSmooth:return ja}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&zy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ja,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,h=u-n,f=u+n;for(let g=0;g!==n;++g){let M=t[u+g];if(M!==t[h+g]||M!==t[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=pc;var fs=class extends Vn{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Qo;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var $c=class extends Vn{};$c.prototype.ValueTypeName="color";var Zc=class extends Vn{};Zc.prototype.ValueTypeName="number";var Yc=class extends or{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let d=c+a;c!==d;c+=4)ti.slerpFlat(r,0,o,c-a,o,c,l);return r}},_a=class extends Vn{InterpolantFactoryMethodLinear(e){return new Yc(this.times,this.values,this.getValueSize(),e)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends Vn{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Qo;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Jc=class extends Vn{};Jc.prototype.ValueTypeName="vector";var Kc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){a++,r===!1&&s.onStart!==void 0&&s.onStart(d,o,a),r=!0},this.itemEnd=function(d){o++,s.onProgress!==void 0&&s.onProgress(d,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,h=c.length;u<h;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}},Fy=new Kc,jc=class{constructor(e){this.manager=e!==void 0?e:Fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};jc.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=class extends rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ma=class extends jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Cl=new yt,dd=new O,fd=new O,Qc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dd.setFromMatrixPosition(e.matrixWorld),t.position.copy(dd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),Cl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var eh=class extends Qc{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ba=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new eh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ea=class extends jr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=pd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function pd(){return performance.now()}var mh="\\[\\]\\.:\\/",By=new RegExp("["+mh+"]","g"),gh="[^"+mh+"]",Hy="[^"+mh.replace("\\.","")+"]",Vy=/((?:WC+[\/:])*)/.source.replace("WC",gh),Gy=/(WCOD+)?/.source.replace("WCOD",Hy),Wy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gh),Xy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gh),qy=new RegExp("^"+Vy+Gy+Wy+Xy+"$"),$y=["material","materials","bones","map"],th=class{constructor(e,t,n){let s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},It=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(By,"")}static parseTrackName(e){let t=qy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);$y.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};It.Composite=th;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Y_=new Float32Array(1);var md=new yt,Ta=class{constructor(e,t,n=0,s=1/0){this.ray=new sa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return md.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(md),this}intersectObject(e,t=!0,n=[]){return nh(e,this,n,t),n.sort(gd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nh(e[s],this,n,t);return n.sort(gd),n}};function gd(i,e){return i.distance-e.distance}function nh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)nh(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);var Fe={balls:{name:"Tube de balles",short:"Balles",cost:3.2,market:6.9,box:12,shelf:10,level:1,color:"#e8f04a"},water:{name:"Eau min\xE9rale 50 cl",short:"Eau",cost:.35,market:1.5,box:24,shelf:12,level:1,color:"#7cc4f0"},iso:{name:"Boisson isotonique",short:"Isotonique",cost:.9,market:2.8,box:18,shelf:12,level:2,color:"#ff8a3d"},grip:{name:"Surgrip (x3)",short:"Surgrips",cost:2.1,market:6.5,box:20,shelf:12,level:2,color:"#f2f2f2"},energy:{name:"Barre \xE9nerg\xE9tique",short:"Barre",cost:.6,market:2.2,box:24,shelf:12,level:2,color:"#b5651d"},wristband:{name:"Poignets \xE9ponge (x2)",short:"Poignets",cost:1.8,market:6,box:20,shelf:12,level:2,color:"#e04a4a"},strings:{name:"Bobine de cordage",short:"Cordage",cost:6,market:16,box:10,shelf:10,level:3,color:"#f2c94c"},padelballs:{name:"Balles de padel",short:"Balles padel",cost:3.4,market:7.5,box:12,shelf:10,level:3,color:"#c8f04a"},racketJunior:{name:"Raquette junior Strata 25",short:"Strata Junior",brand:"Strata",cost:22,market:49,box:4,shelf:4,level:3,color:"#ff5fa2",racket:"tennis"},racket:{name:"Raquette Volta Pro 100",short:"Volta Pro",brand:"Volta",cost:48,market:109,box:4,shelf:4,level:3,color:"#2f6fe0",racket:"tennis"},racketHexa:{name:"Raquette Hexa Power 105",short:"Hexa Power",brand:"Hexa",cost:70,market:159,box:4,shelf:4,level:4,color:"#e8a21a",racket:"tennis"},racketAero:{name:"Raquette Aerion Tour 98",short:"Aerion Tour",brand:"Aerion",cost:95,market:219,box:4,shelf:4,level:5,color:"#d63a3a",racket:"tennis"},racketTitan:{name:"Raquette Titan Graphite",short:"Titan",brand:"Titan",cost:130,market:299,box:4,shelf:4,level:7,color:"#18191c",racket:"tennis"},padelracket:{name:"Pala Kraken Control",short:"Kraken",brand:"Kraken",cost:42,market:95,box:4,shelf:4,level:5,color:"#111111",racket:"padel"},padelPro:{name:"Pala Vibra Carbon Attack",short:"Vibra Carbon",brand:"Vibra",cost:110,market:249,box:4,shelf:4,level:6,color:"#7a4fd6",racket:"padel"},cap:{name:"Casquette du club",short:"Casquette",cost:5.5,market:18,box:10,shelf:8,level:4,color:"#1f8a5b"},towel:{name:"Serviette brod\xE9e",short:"Serviette",cost:4,market:14,box:12,shelf:8,level:4,color:"#3fb7a6"},tshirt:{name:"T-shirt du club",short:"T-shirt",cost:7,market:24,box:12,shelf:8,level:5,color:"#ffffff"},shoes:{name:"Chaussures Courtline",short:"Chaussures",cost:38,market:89,box:4,shelf:4,level:6,color:"#f4f4f0"},bag:{name:"Sac thermobag",short:"Sac",cost:30,market:75,box:4,shelf:4,level:7,color:"#1c1f24"},beer:{name:"Bi\xE8re pression",short:"Bi\xE8re",cost:.8,market:3.5,box:24,shelf:12,level:2,color:"#f2b632",zone:"bar"},soda:{name:"Soda en canette",short:"Soda",cost:.45,market:2.2,box:24,shelf:12,level:2,color:"#d62d2d",zone:"bar"},coffee:{name:"Caf\xE9",short:"Caf\xE9",cost:.2,market:1.5,box:30,shelf:12,level:2,color:"#6b4226",zone:"bar"},juice:{name:"Jus d'orange",short:"Jus",cost:.6,market:2.5,box:18,shelf:12,level:4,color:"#ffa31a",zone:"bar"},sandwich:{name:"Sandwich jambon-beurre",short:"Sandwich",cost:1.5,market:4.5,box:12,shelf:8,level:3,color:"#e9c46a",zone:"snack"},panini:{name:"Panini trois fromages",short:"Panini",cost:1.8,market:5.5,box:12,shelf:8,level:3,color:"#d4a373",zone:"snack"},pizza:{name:"Part de pizza",short:"Pizza",cost:1.3,market:3.9,box:12,shelf:8,level:4,color:"#e76f51",zone:"snack"},cookie:{name:"Cookie maison",short:"Cookie",cost:.35,market:1.8,box:24,shelf:12,level:3,color:"#a0703c",zone:"snack"}};for(let i of Object.values(Fe))i.zone??(i.zone="shop");var Mi=Object.keys(Fe),xh={shop:"Boutique",bar:"Buvette",snack:"Snack"},an={clay:{name:"Terre battue",sport:"tennis",wear:.24},hard:{name:"R\xE9sine",sport:"tennis",wear:.12},padel:{name:"Padel",sport:"padel",wear:.1}},Lt=[{id:"T1",label:"Court 1",surface:"clay",price:0,level:1},{id:"T2",label:"Court 2",surface:"hard",price:3200,level:2},{id:"P1",label:"Padel 1",surface:"padel",price:5200,level:3},{id:"T3",label:"Court 3",surface:"clay",price:6500,level:4},{id:"P2",label:"Padel 2",surface:"padel",price:7500,level:5},{id:"T4",label:"Court 4",surface:"hard",price:9e3,level:6},{id:"P3",label:"Padel 3",surface:"padel",price:10500,level:7}],Tn={buvette:{name:"Buvette",desc:"Bi\xE8re, sodas et caf\xE9s servis au comptoir, terrasse avec tables",price:2500,level:2,build:60,zone:"bar"},parking:{name:"Parking payant",desc:"Barri\xE8re et horodateur : chaque voiture paie le stationnement",price:1200,level:2,build:25},snack:{name:"Snack",desc:"Sandwichs, paninis, pizzas et cookies, surtout \xE0 l'heure du d\xE9jeuner",price:4500,level:3,build:90,zone:"snack"}},eo=450,Vd=2,Vi={lockers:{name:"Vestiaires r\xE9nov\xE9s",desc:"+40 licenci\xE9s possibles et clients plus satisfaits",price:3500,level:3},lights:{name:"\xC9clairage des courts",desc:"Le club reste ouvert jusqu'\xE0 23 h",price:6e3,level:4}},vn={security:{name:"Agent de s\xE9curit\xE9",desc:"Fait sortir les joueurs qui d\xE9passent leur cr\xE9neau",salary:85,level:2},reception:{name:"H\xF4te d'accueil",desc:"Encaisse les clients quand tu n'es pas au comptoir",salary:95,level:3},barman:{name:"Serveur de buvette",desc:"Sert les clients de la buvette",salary:70,level:3,needs:"buvette"},cook:{name:"Employ\xE9 du snack",desc:"Sert les clients du snack",salary:75,level:4,needs:"snack"},keeper:{name:"Agent d'entretien",desc:"Brosse les terrains us\xE9s",salary:80,level:4}},Wn={tennis:{name:"Location court de tennis (1 h)",market:16},padel:{name:"Location terrain de padel (1 h)",market:30},licence:{name:"Licence annuelle",market:85},parking:{name:"Ticket de parking",market:2}},yn={calm:{name:"Journ\xE9e ordinaire",desc:"Rien de sp\xE9cial aujourd'hui.",weight:4},tournament:{name:"Tournoi interne",desc:"Beaucoup de r\xE9servations et de spectateurs assoiff\xE9s.",weight:1.4,book:1.7,bar:1.8,xp:1.2},heatwave:{name:"Canicule",desc:"Il fait tr\xE8s chaud : boissons et serviettes s'arrachent.",weight:1.2,drinks:2.2,book:.85,bar:1.6},rain:{name:"Averses",desc:"Moins de parties, mais la boutique et le snack tournent.",weight:1,book:.45,shop:1.3,snack:1.4,bar:1.2},champion:{name:"Visite d'une championne",desc:"Une joueuse pro signe des autographes : foule et ventes de raquettes.",weight:.8,rate:1.5,rackets:3,xp:1.3},promo:{name:"Promo fournisseur",desc:"Un article est 40 % moins cher \xE0 commander aujourd'hui.",weight:1},inspection:{name:"Visite de la ligue",desc:"Un inspecteur passe \xE0 16 h : des terrains propres rapportent une prime.",weight:.9},kids:{name:"Mercredi des enfants",desc:"Stage junior : raquettes junior, cookies et sodas tr\xE8s demand\xE9s.",weight:.9,juniors:3,snack:1.4}},vh=[{id:"shopItems",text:i=>`Vends ${i} articles en boutique`,base:8,per:3,reward:120},{id:"bookings",text:i=>`Encaisse ${i} r\xE9servations de terrain`,base:3,per:1,reward:150},{id:"licences",text:i=>`Signe ${i} nouvelles licences`,base:1,per:.5,reward:160},{id:"barItems",text:i=>`Sers ${i} consommations \xE0 la buvette`,base:8,per:3,reward:150,needs:"buvette"},{id:"snackItems",text:i=>`Sers ${i} plats au snack`,base:6,per:2,reward:170,needs:"snack"},{id:"rackets",text:i=>`Vends ${i} raquette${i>1?"s":""}`,base:1,per:.4,reward:200,level:3},{id:"evictions",text:i=>`Fais sortir ${i} groupe${i>1?"s":""} qui d\xE9passe${i>1?"nt":""} son cr\xE9neau`,base:1,per:.3,reward:120}],ri=[0,120,350,750,1350,2200,3300,4800,6600,9e3],Gd=i=>{let e=1;for(;e<ri.length&&i>=ri[e];)e++;return e},yh=8,Wd=21,Xd=23,qd=2500,$d=4;var Ke={minX:-10,maxX:10,minZ:0,maxZ:14,height:4.2},to=2.4,Dt={minX:-8.5,maxX:-3,minZ:6.6,maxZ:7.4,top:1.02},_h={x:-5.6,z:5.8},no=[0,1,2,3,4,5].map(i=>({x:-5.6,z:8.3+i*.95})),Mh={x:-7.75,z:6.95},Da={x:-6.55,z:6.95},bh={x:-3.55,z:7.05},io={x:-4.7,z:7},Eh={x:2.2,z:14},cr={x:0,z:30},hr={x:0,z:15.4},ur={x:0,z:12.6},dr={x:0,z:1.3},fr={x:0,z:-1.8},Sh=[{x:1.4,z:11.6},{x:2.4,z:11.6},{x:3.4,z:11.6},{x:4.4,z:11.6},{x:1.4,z:12.7},{x:2.4,z:12.7},{x:3.4,z:12.7},{x:4.4,z:12.7},{x:-1.6,z:3.2},{x:-1.6,z:4.2},{x:-1.6,z:5.2},{x:1.6,z:3.2},{x:1.6,z:4.2},{x:1.6,z:5.2}],so={x:6.2,z:17.6},Th=[{x:-9.3,z:13.3},{x:9.3,z:13.3},{x:-1.9,z:.6},{x:1.9,z:.6}],wh={x:3.4,z:13.5,w:3.6,d:.42},Zy=[{x:9.45,z:3.1,facing:-Math.PI/2},{x:9.45,z:5.6,facing:-Math.PI/2},{x:9.45,z:8.1,facing:-Math.PI/2},{x:9.45,z:10.6,facing:-Math.PI/2},{x:4.3,z:.45,facing:0},{x:6.9,z:.45,facing:0}].map(i=>({...i,zone:"shop"}));function Zd(i,e){let t=l=>l*i,n=Math.min(t(13),t(20)),s=Math.max(t(13),t(20)),r=t(16.5),o=[[t(19.2),10.4],[t(19.2),12.8],[t(13.8),10.4],[t(13.8),12.8]].map(([l,c])=>({x:l,z:c})),a=[];for(let l of o){let c=l.x+(r>l.x?.9:-.9);a.push({x:c,z:l.z,look:l},{x:l.x,z:l.z+.85,look:l},{x:l.x,z:l.z-.85,look:l})}return{side:i,zone:e,x0:n,x1:s,z0:3,z1:8.2,cx:r,counter:{minX:n,maxX:s,minZ:7.8,maxZ:8.6,top:1.05},door:{x:i<0?s:n,z0:4.6,z1:5.8},staff:{x:r,z:7},queue:[0,1,2,3,4].map(l=>({x:r,z:9.3+l*.9})),approach:{x:t(12),z:15.4},entry:{x:r,z:13.9},tables:o,seats:a,shelves:[t(18.2),t(14.8)].map(l=>({x:l,z:3.45,facing:0,zone:e}))}}var Ot={buvette:Zd(-1,"bar"),snack:Zd(1,"snack")},Zt=[...Zy,...Ot.buvette.shelves.map(i=>({...i,stand:"buvette"})),...Ot.snack.shelves.map(i=>({...i,stand:"snack"}))].map((i,e)=>({...i,id:e,w:2.1,d:.6,browse:{x:i.x+Math.sin(i.facing)*1.25,z:i.z+Math.cos(i.facing)*1.25}})),vs=31,pr={inX:-60,outX:70,barrierX:-23},ln=[];for(let i of[26.2,35.8])for(let e of[-18.7,-16.1,-13.5,-10.9,-8.3,-5.7,4.7,7.3,9.9,12.5,15.1,17.7])ln.push({x:e,z:i,row:i<31?1:-1});var mr=[0,23],gs={x:-24.8,z:28},Ah=i=>({x:i.x+1.3,z:i.z}),Rh={x:3.2,z:16.2},Xn={w:18.3,l:36.6},xs={w:12,l:22},Ia=-4,cn={T1:{cx:-11,cz:Ia-Xn.l/2,route:[{x:0,z:-2},{x:-11,z:-2},{x:-11,z:-5.2}]},T2:{cx:11,cz:Ia-Xn.l/2,route:[{x:0,z:-2},{x:11,z:-2},{x:11,z:-5.2}]},P1:{cx:-31,cz:Ia-xs.l/2,door:1,route:[{x:0,z:-2},{x:-24.6,z:-2},{x:-24.6,z:-15}]},P2:{cx:31,cz:Ia-xs.l/2,door:-1,route:[{x:0,z:-2},{x:24.6,z:-2},{x:24.6,z:-15}]},T3:{cx:-11,cz:-44-Xn.l/2,route:[{x:0,z:-2},{x:0,z:-42.3},{x:-11,z:-42.3},{x:-11,z:-45.2}]},T4:{cx:11,cz:-44-Xn.l/2,route:[{x:0,z:-2},{x:0,z:-42.3},{x:11,z:-42.3},{x:11,z:-45.2}]},P3:{cx:-31,cz:-30-xs.l/2,door:1,route:[{x:0,z:-2},{x:-22.5,z:-2},{x:-22.5,z:-41},{x:-24.6,z:-41}]}};function Ua(i,e){let t=cn[i],n=t.door;return[{x:t.cx+5.7*n,z:t.cz+.3*e},{x:t.cx+4.4*n,z:t.cz+.3*e},{x:t.cx+4.2*n,z:t.cz+1.2*e}]}var Na=-2.2,Jd={x:-1.8,z:8.6};function Ch(i,e){let t=cn[i];return e==="tennis"?[{x:t.cx,z:t.cz+13.2,side:1},{x:t.cx,z:t.cz-13.2,side:-1}]:[{x:t.cx-2.4,z:t.cz+7.2,side:1},{x:t.cx+2.4,z:t.cz+7.2,side:1},{x:t.cx-2.4,z:t.cz-7.2,side:-1},{x:t.cx+2.4,z:t.cz-7.2,side:-1}]}var Kd={minX:-44,maxX:44,minZ:-86,maxZ:34};function Ph(){let e=[],t=(r,o,a,l)=>e.push({minX:r,maxX:o,minZ:a,maxZ:l}),n=to/2;t(Ke.minX,-n,Ke.maxZ-.25/2,Ke.maxZ+.25/2),t(n,Ke.maxX,Ke.maxZ-.25/2,Ke.maxZ+.25/2),t(Ke.minX,-n,Ke.minZ-.25/2,Ke.minZ+.25/2),t(n,Ke.maxX,Ke.minZ-.25/2,Ke.minZ+.25/2),t(Ke.minX-.25/2,Ke.minX+.25/2,Ke.minZ,Ke.maxZ),t(Ke.maxX-.25/2,Ke.maxX+.25/2,Ke.minZ,Ke.maxZ),e.push({...Dt});for(let r of Th)e.push({minX:r.x-.3,maxX:r.x+.3,minZ:r.z-.3,maxZ:r.z+.3});let s=wh;return e.push({minX:s.x-s.w/2,maxX:s.x+s.w/2,minZ:s.z-s.d/2,maxZ:s.z+s.d/2}),e}function jd(i,e){let t=Ot[i],n=.25,s=[];if(!e)return[{minX:t.x0-.5,maxX:t.x1+.5,minZ:t.z0-.5,maxZ:t.z1+.5}];s.push({minX:t.x0,maxX:t.x1,minZ:t.z0-n/2,maxZ:t.z0+n/2});let r=t.side<0?t.x0:t.x1;s.push({minX:r-n/2,maxX:r+n/2,minZ:t.z0,maxZ:t.z1});let o=t.door.x;s.push({minX:o-n/2,maxX:o+n/2,minZ:t.z0,maxZ:t.door.z0}),s.push({minX:o-n/2,maxX:o+n/2,minZ:t.door.z1,maxZ:t.z1}),s.push({minX:t.x0,maxX:t.x1,minZ:t.counter.minZ,maxZ:t.counter.maxZ});for(let a of t.tables)s.push({minX:a.x-.5,maxX:a.x+.5,minZ:a.z-.5,maxZ:a.z+.5});return s}function Qd(i){return i?[{minX:gs.x-.3,maxX:gs.x+.3,minZ:gs.z-.25,maxZ:gs.z+.25}]:[]}var Ih=i=>({minX:i.x-.95,maxX:i.x+.95,minZ:i.z-2.3,maxZ:i.z+2.3});function ef(i){let e=Math.abs(Math.sin(i.facing))<.5,t=(e?i.w:i.d)/2,n=(e?i.d:i.w)/2;return{minX:i.x-t,maxX:i.x+t,minZ:i.z-n,maxZ:i.z+n}}function tf(i,e){let t=cn[i],n=.15;if(e==="tennis"){let c=Xn,d=.9,u=t.cx-c.w/2,h=t.cx+c.w/2,f=t.cz+c.l/2,g=t.cz-c.l/2;return[{minX:u,maxX:t.cx-d,minZ:f-n,maxZ:f+n},{minX:t.cx+d,maxX:h,minZ:f-n,maxZ:f+n},{minX:u,maxX:h,minZ:g-n,maxZ:g+n},{minX:u-n,maxX:u+n,minZ:g,maxZ:f},{minX:h-n,maxX:h+n,minZ:g,maxZ:f},{minX:t.cx-6.4,maxX:t.cx+6.4,minZ:t.cz-.06,maxZ:t.cz+.06},{minX:t.cx-7.8,maxX:t.cx-7,minZ:t.cz-.4,maxZ:t.cz+.4},...[-2.2,2.2].map(M=>({minX:t.cx-8.15,maxX:t.cx-7.65,minZ:t.cz+M-.8,maxZ:t.cz+M+.8})),...Yd(t,c.w/2+.6,9)]}let s=t.cx-5,r=t.cx+5,o=t.cz-10,a=t.cz+10,l=.75;return[{minX:s,maxX:r,minZ:a-n,maxZ:a+n},{minX:s,maxX:r,minZ:o-n,maxZ:o+n},{minX:s-n,maxX:s+n,minZ:t.cz+l,maxZ:a},{minX:s-n,maxX:s+n,minZ:o,maxZ:t.cz-l},{minX:r-n,maxX:r+n,minZ:t.cz+l,maxZ:a},{minX:r-n,maxX:r+n,minZ:o,maxZ:t.cz-l},{minX:t.cx-4.6,maxX:t.cx+4.6,minZ:t.cz-.05,maxZ:t.cz+.05},...Yd(t,5.8,6)]}function Yd(i,e,t){let n=[];for(let s of[-1,1])for(let r of[-1,1]){let o=i.cx+s*e,a=i.cz+r*t;n.push({minX:o-.15,maxX:o+.15,minZ:a-.15,maxZ:a+.15})}return n}function gr(i,e){let t=vs-.8,n=vs+.8,s=pr;if(!e){let r=Math.max(i.x-5,s.barrierX+1.5);return[{a:{x:s.inX,z:t},b:{x:s.barrierX-6,z:t},v:11},{a:{x:s.barrierX-6,z:t},b:{x:r,z:t},v:6.5},{a:{x:r,z:t},c:{x:i.x,z:t},b:{x:i.x,z:i.z},v:3}]}return[{a:{x:i.x,z:i.z},c:{x:i.x,z:n},b:{x:i.x-4,z:n},v:2,reverse:!0},{a:{x:i.x-4,z:n},b:{x:26,z:n},v:7.5},{a:{x:26,z:n},b:{x:s.outX,z:n},v:11}]}function La(i,e){if(!i.c)return{x:i.a.x+(i.b.x-i.a.x)*e,z:i.a.z+(i.b.z-i.a.z)*e};let t=1-e;return{x:t*t*i.a.x+2*t*e*i.c.x+e*e*i.b.x,z:t*t*i.a.z+2*t*e*i.c.z+e*e*i.b.z}}function nf(i){if(!i.c)return Math.hypot(i.b.x-i.a.x,i.b.z-i.a.z);let e=0,t=i.a;for(let n=1;n<=16;n++){let s=La(i,n/16);e+=Math.hypot(s.x-t.x,s.z-t.z),t=s}return e}var Lh=i=>i.reduce((e,t)=>e+nf(t)/t.v,0);function Oa(i,e){for(let t of i){let n=nf(t)/t.v;if(e<=n||t===i[i.length-1]){let s=Math.min(1,Math.max(0,e/n)),r=La(t,s),o=La(t,Math.min(1,s+.01)),a=La(t,Math.max(0,s-.01)),l=Math.atan2(o.x-a.x,o.z-a.z);return t.reverse&&(l+=Math.PI),{x:r.x,z:r.z,heading:l}}e-=n}return null}var lt=(i,e,t)=>Math.max(e,Math.min(t,i)),ro=(i,e,t)=>i+(e-i)*t,Wt=(i,e,t,n)=>ro(i,e,1-Math.exp(-t*n));function sf(i,e,t,n){let s=(e-i)%(Math.PI*2);return s>Math.PI&&(s-=Math.PI*2),s<-Math.PI&&(s+=Math.PI*2),i+s*(1-Math.exp(-t*n))}var mt=(i=0,e=1)=>i+Math.random()*(e-i),Dh=(i,e)=>Math.floor(mt(i,e+1)),Gi=i=>i[Math.floor(Math.random()*i.length)],qn=i=>Math.round(i*10)/10,Ze=i=>`${i.toLocaleString("fr-FR",{minimumFractionDigits:2,maximumFractionDigits:2})} \u20AC`,oi=i=>`${Math.round(i).toLocaleString("fr-FR")} \u20AC`,rf=i=>{let e=Math.floor(i/60)%24,t=Math.floor(i%60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`},of=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);var af=2,Yy=1.45,Jy=75,Ky=50,lf=45,jy=18,Qy=.28,e_=80,t_=3,n_=18,za=2,i_={bar:"bar",snack:"snack"};function Nh(){let i={version:za,money:qd,day:1,minute:yh*60,open:!1,dayStarted:!1,xp:0,level:1,licences:$d,satisfaction:.62,prices:{},courts:Object.fromEntries(Lt.map((e,t)=>[e.id,{built:t===0,wear:0}])),shelves:[],boxes:[],orders:[],staff:{},upgrades:{lockers:!1,lights:!1},facilities:{},stats:Oh(),nextId:1,objectives:[],event:{id:"calm"},challenge:null};return cf(i),i.challenge={id:"shopItems",target:5,reward:100,done:!1},i}function cf(i){var e,t,n,s,r;i.prices??(i.prices={}),i.shelves??(i.shelves=[]),i.staff??(i.staff={}),i.facilities??(i.facilities={}),i.upgrades??(i.upgrades={}),i.boxes??(i.boxes=[]),i.orders??(i.orders=[]),i.objectives??(i.objectives=[]);for(let o of Mi)(e=i.prices)[o]??(e[o]=qn(Fe[o].market));for(let o of Object.keys(Wn))(t=i.prices)[o]??(t[o]=Wn[o].market);Zt.forEach((o,a)=>{var l;(l=i.shelves)[a]??(l[a]={built:o.zone==="shop"&&a<Vd,levels:Array.from({length:t_},()=>({product:null,qty:0}))})});for(let o of Object.keys(vn))(n=i.staff)[o]??(n[o]=!1);for(let o of Object.keys(Tn))(s=i.facilities)[o]??(s[o]={built:!1,building:!1,progress:0});i.upgrades.bar&&(i.facilities.buvette={built:!0,building:!1,progress:1},Zt.forEach((o,a)=>{o.stand==="buvette"&&(i.shelves[a].built=!0)})),delete i.upgrades.bar;for(let o of Object.keys(Vi))(r=i.upgrades)[o]??(r[o]=!1);return i.stats={...Oh(),...i.stats},i.event??(i.event={id:"calm"}),i.challenge??(i.challenge=null),i.version=za,i}function Oh(){return{courts:0,shop:0,licenceFees:0,bar:0,snack:0,parking:0,tips:0,bonus:0,orders:0,build:0,salaries:0,upkeep:0,customers:0,happy:0,angry:0,newLicences:0,sessions:0,shopItems:0,bookings:0,barItems:0,snackItems:0,rackets:0,evictions:0,cars:0}}var ka=class i{constructor(e,t={}){this.s=cf(e),this.h=new Proxy(t,{get:(n,s)=>n[s]??(()=>{})}),this.persons=[],this.customers=[],this.queue=[],this.court={};for(let n of Lt)this.court[n.id]={reservedBy:null,playing:!1,cleaning:!1,overtime:!1};this.counter={cust:null,items:[],phase:"idle",total:0,method:null,given:0,autoT:0},this.staff={};for(let n of Object.keys(vn))this.staff[n]=null;this.lobbyUsed=new Set,this.stand={};for(let n of Object.keys(Ot))this.stand[n]={queue:[],seats:new Set,autoT:0};this.cars=[],this.dayOver=!1,this.inspected=!1}id(){return this.s.nextId++}get closeMinute(){return(this.s.upgrades.lights?Xd:Wd)*60}get capacity(){let e=25;for(let t of Lt)this.s.courts[t.id].built&&(e+=an[t.surface].sport==="padel"?30:25);return this.s.upgrades.lockers&&(e+=40),this.built("buvette")&&(e+=5),this.built("snack")&&(e+=5),e}get event(){return yn[this.s.event?.id]??yn.calm}ev(e){return this.event[e]??1}unlocked(e){return this.s.level>=e}built(e){return!!this.s.facilities[e]?.built}productAvailable(e){let t=Fe[e];return!t||!this.unlocked(t.level)?!1:t.zone==="bar"?this.built("buvette"):t.zone==="snack"?this.built("snack"):!0}unitCost(e){return Fe[e].cost*(this.s.event?.id==="promo"&&this.s.event.product===e?.6:1)}earn(e,t){this.s.money+=e,this.s.stats[t]+=e}spend(e,t){return this.s.money<e-1e-6?!1:(this.s.money-=e,this.s.stats[t]+=e,!0)}addXp(e){this.s.xp+=Math.round(e*this.ev("xp"));let t=Gd(this.s.xp);t>this.s.level&&(this.s.level=t,this.h.levelUp(t,this.unlocksAt(t)))}unlocksAt(e){let t=[];for(let n of Mi)Fe[n].level===e&&t.push(Fe[n].name);for(let n of Lt)n.level===e&&n.price&&t.push(`${n.label} (${an[n.surface].name})`);for(let n of Object.keys(Tn))Tn[n].level===e&&t.push(Tn[n].name);for(let n of Object.keys(vn))vn[n].level===e&&t.push(vn[n].name);for(let n of Object.keys(Vi))Vi[n].level===e&&t.push(Vi[n].name);return t}xpProgress(){let e=this.s.level,t=ri[e-1],n=ri[e]??ri[ri.length-1]*2;return lt((this.s.xp-t)/(n-t),0,1)}count(e,t=1){this.s.stats[e]+=t;let n=this.s.challenge;if(!n||n.done)return;({shopItems:"shopItems",bookings:"bookings",licences:"newLicences",barItems:"barItems",snackItems:"snackItems",rackets:"rackets",evictions:"evictions"})[n.id]===e&&this.s.stats[e]>=n.target&&(n.done=!0,this.earn(n.reward,"bonus"),this.addXp(30),this.h.notify(`D\xE9fi r\xE9ussi ! +${n.reward} \u20AC`,"good"),this.h.sound("level"),this.h.challengeChanged())}spawnPerson(e,t=cr,n={}){let s={id:this.id(),role:e,x:t.x+mt(-1.5,1.5),z:t.z+mt(-.5,.5),rot:Math.PI,speed:Yy*mt(.88,1.12),path:[],action:"idle",look:null,seed:Math.random(),holdsRacket:!1,hidden:!1,...n};return this.persons.push(s),this.h.spawnPerson(s),s}despawnPerson(e){let t=this.persons.indexOf(e);t>=0&&this.persons.splice(t,1),e.lobby!=null&&this.lobbyUsed.delete(e.lobby),this.freeSeat(e),this.h.despawnPerson(e)}goTo(e,t){e.path=t.map(n=>({x:n.x,z:n.z}))}arrived(e){return e.path.length===0}movePerson(e,t){if(!e.path.length){e.action==="walk"&&(e.action="idle");return}let n=e.path[0],s=n.x-e.x,r=n.z-e.z,o=Math.hypot(s,r),a=e.speed*t;o<=a||o<.02?(e.x=n.x,e.z=n.z,e.path.shift()):(e.x+=s/o*a,e.z+=r/o*a),o>.01&&(e.rot=Math.atan2(s,r)),e.action="walk"}takeLobby(e){for(let t=0;t<Sh.length;t++)if(!this.lobbyUsed.has(t))return this.lobbyUsed.add(t),e.lobby=t,Sh[t];return e.lobby=null,{x:mt(-1,4),z:mt(10.5,12.8)}}freeLobby(e){e.lobby!=null&&(this.lobbyUsed.delete(e.lobby),e.lobby=null)}standAt(e){for(let[t,n]of Object.entries(Ot))if(Math.abs(e.x-n.cx)<4.2&&e.z>8.6&&e.z<14.6)return t;return null}pathOut(e,t=e.cust){let n=[],s=this.standAt(e);if(s){let r=Ot[s];n.push({x:r.cx,z:e.z},r.entry,r.approach,hr)}else e.z<0&&n.push(fr,dr),n.push({x:mt(-.4,.4),z:ur.z},hr);return n.push(...this.exitTail(t)),n}exitTail(e){let t=e?.car;if(t){let n=Ah(ln[t.spot]);return[{x:mt(-.8,.8),z:30},{x:n.x,z:vs},n]}return[{x:cr.x+mt(-2,2),z:cr.z}]}entryHead(e,t){let n=e.car,s=[];return n&&s.push({x:t.x,z:vs},{x:mt(-.8,.8),z:30}),s.push(hr),s}freeSpot(){let e=new Set([...mr,...this.cars.map(n=>n.spot)]),t=ln.map((n,s)=>s).filter(n=>!e.has(n));return t.length?(t.sort((n,s)=>Math.abs(ln[n].x)-Math.abs(ln[s].x)+mt(-4,4)),t[0]):null}carArrived(e){let t=e.cust;e.state="parked",this.h.carParked(e);let n=Ah(ln[e.spot]);if(t.persons.forEach((s,r)=>{s.x=n.x,s.z=n.z+(r%2?.5:-.5)*Math.ceil(r/2)*.7,s.hidden=!1}),this.built("parking")){let s=this.s.prices.parking;this.earn(s,"parking"),this.s.stats.cars++,s>Wn.parking.market*1.6&&this.upset(t,Math.min(.4,(s/Wn.parking.market-1.6)*.25+.1),"Le parking est hors de prix !")}t.state="arrive",this.routeArrival(t)}carDepart(e){e.state!=="leaving"&&(e.state="leaving",e.t=0,e.dur=Lh(gr(ln[e.spot],!0)),this.h.carLeave(e))}updateCars(e){for(let t of[...this.cars])t.t+=e,t.state==="arriving"&&t.t>=t.dur?this.carArrived(t):t.state==="leaving"&&t.t>=t.dur&&(this.cars.splice(this.cars.indexOf(t),1),this.h.carRemoved(t))}spawnCustomer(e){let t={id:this.id(),kind:e,persons:[],state:"arrive",timer:0,wants:[],basket:[],court:null,sport:null,mood:1,queueT:0,waitT:0};t.vip=this.s.level>=2&&Math.random()<.07;let n=1;if(e==="book"){let r=this.builtSports();t.sport=r.includes("padel")&&(r.length===1||Math.random()<.45)?"padel":"tennis",n=t.sport==="padel"?4:2,Math.random()<.3*this.ev("drinks")&&t.wants.push(Gi(["water","iso"])),Math.random()<.18&&t.wants.push(t.sport==="padel"?"padelballs":"balls"),Math.random()<.08&&t.wants.push(Gi(["grip","energy","wristband"]))}else if(e==="shop"){let r=Math.random()<.6?1:Dh(2,3),o=Mi.filter(a=>Fe[a].zone==="shop"&&this.unlocked(Fe[a].level));for(let a=0;a<r;a++)t.wants.push(this.weightedProduct(o))}else(e==="drink"||e==="food")&&(n=Math.random()<.5?1:Dh(2,3));t.wants=[...new Set(t.wants.filter(r=>r&&this.productAvailable(r)))];let s=Math.random()<.75?this.freeSpot():null;s!=null&&(t.car={id:this.id(),spot:s,cust:t,state:"arriving",t:0,color:Math.floor(Math.random()*8),dur:Lh(gr(ln[s],!1))},this.cars.push(t.car),t.state="driving");for(let r=0;r<n;r++){let o=this.spawnPerson(r===0?"leader":"partner",{x:cr.x+r*.7,z:cr.z+r*.5},{cust:t,holdsRacket:e==="book",hidden:!!t.car});t.persons.push(o)}return t.leader=t.persons[0],t.car?this.h.carArrive(t.car):this.routeArrival(t),this.customers.push(t),this.s.stats.customers++,t}routeArrival(e){let t=e.kind==="drink"?"buvette":e.kind==="food"?"snack":null;for(let n of e.persons){let s=this.entryHead(e,n);t?this.goTo(n,[...s,Ot[t].approach,Ot[t].entry]):this.goTo(n,[...s,{x:ur.x+mt(-.6,.6),z:ur.z+mt(-.3,.3)}])}}builtSports(){let e=new Set;for(let t of Lt)this.s.courts[t.id].built&&e.add(an[t.surface].sport);return[...e]}unlockedProducts(e){return e.filter(t=>this.productAvailable(t))}weightedProduct(e){let t={balls:5,water:4,iso:3,grip:3,energy:2.5,wristband:1.5,strings:1.2,padelballs:3,racketJunior:.8,racket:1,racketHexa:.7,racketAero:.5,racketTitan:.3,padelracket:.9,padelPro:.5,cap:1.5,towel:1.2,tshirt:1.2,shoes:.6,bag:.4};for(let r of["water","iso","towel"])t[r]*=this.ev("drinks");for(let r of Mi)Fe[r].racket&&(t[r]*=this.ev("rackets"));t.racketJunior*=this.ev("juniors"),this.builtSports().includes("padel")||(t.padelballs=.3,t.padelracket=.2,t.padelPro=.1);let n=e.reduce((r,o)=>r+(t[o]??1),0),s=Math.random()*n;for(let r of e)if(s-=t[r]??1,s<=0)return r;return e[0]}say(e,t,n="bad"){this.h.bubble(e,t,n)}upset(e,t,n){e.mood=lt(e.mood-t,0,1),n&&this.say(e.leader,n)}updateCustomer(e,t){let n=e.leader;switch(e.state){case"driving":break;case"arrive":if(e.kind==="drink"||e.kind==="food"){e.persons.every(s=>this.arrived(s))&&this.joinStand(e,e.kind==="drink"?"buvette":"snack");break}if(!this.arrived(n))break;for(let s of e.persons)s!==n&&this.goTo(s,[this.takeLobby(s)]);e.wants.length?this.nextWant(e):e.kind==="book"?this.findCourt(e):this.joinQueue(e);break;case"toShelf":this.arrived(n)&&(e.state="browse",e.timer=mt(1.2,2.2),n.action="browse",n.look=e.shelfLook);break;case"browse":e.timer-=t,e.timer<=0&&(n.look=null,this.takeFromShelf(e));break;case"waitCourt":e.waitT+=t,e.timer-=t,e.timer<=0&&(e.timer=1,this.reserveCourt(e)?this.joinQueue(e):e.waitT>Ky||!this.s.open?(this.upset(e,.45,"Aucun terrain libre\u2026"),this.leave(e)):e.waitT>18&&Math.random()<.05&&this.anyOvertime()&&this.say(n,"Ils ont fini, ceux-l\xE0 ?!"));break;case"queue":{e.queueT+=t,this.queue.indexOf(e)===0&&this.arrived(n)&&!this.counter.cust?this.beginCheckout(e):e.queueT>Jy*(.8+this.s.satisfaction*.5)&&(this.upset(e,.55,"Trop d'attente !"),this.leaveQueue(e),this.leave(e));break}case"counter":e.queueT+=t,this.counter.idleT>45&&(this.upset(e,.5,"Il n'y a personne \xE0 l'accueil ?"),this.cancelCheckout(),this.leave(e));break;case"toCourt":e.persons.every(s=>this.arrived(s))&&this.startSession(e);break;case"playing":e.timer-=t,e.timer<=0&&this.endSession(e);break;case"overtime":e.overT+=t,e.refuseT=Math.max(0,(e.refuseT??0)-t),e.overT>e_?(this.say(n,"Bon, on y va\u2026","info"),this.finishSession(e)):Math.random()<t/14&&this.say(Gi(e.persons),Gi(["Encore un jeu !","Dernier point !","On finit le set !","Balle de match !"]),"info");break;case"standQueue":{e.queueT+=t,this.stand[e.stand].queue[0]===e&&this.arrived(n)?this.beginStandOrder(e):e.queueT>lf*1.6*(.8+this.s.satisfaction*.5)&&(this.upset(e,.45,"\xC7a n'avance pas\u2026"),this.leaveStand(e),this.leave(e));break}case"standOrder":e.orderT+=t,e.orderT>lf*(.8+this.s.satisfaction*.5)&&(this.upset(e,.5,"Il n'y a personne pour servir ?"),this.leaveStand(e),this.leave(e));break;case"terrace":e.timer-=t,(e.timer<=0||!this.s.open&&this.s.minute>this.closeMinute+20)&&this.leave(e);break;case"leave":e.persons.every(s=>this.arrived(s))&&this.removeCustomer(e);break}}nextWant(e){let t=e.leader;for(;e.wants.length;){let n=e.wants.shift(),s=this.findShelfWith(n,t);if(!s){this.upset(e,.15,`Plus de ${Fe[n].short.toLowerCase()} !`);continue}e.want=n,e.shelf=s.index;let r=Zt[s.index];this.goTo(t,[{x:r.browse.x+mt(-.5,.5),z:r.browse.z+mt(-.15,.15)}]),e.shelfLook={x:r.x,z:r.z},e.state="toShelf";return}this.afterShopping(e)}findShelfWith(e,t){let n=null;return this.s.shelves.forEach((s,r)=>{if(!(!s.built||Zt[r].zone!=="shop")&&s.levels.some(o=>o.product===e&&o.qty>0)){let o=of(t,Zt[r].browse);(!n||o<n.d)&&(n={index:r,d:o})}}),n}priceRefused(e,t){let n=Fe[e]?.market??Wn[e]?.market;return t>n*1.35||t>n*1.15&&Math.random()<(t/n-1.15)*4}takeFromShelf(e){let t=this.s.shelves[e.shelf],n=t.levels.findIndex(o=>o.product===e.want&&o.qty>0),s=Fe[e.want],r=this.s.prices[e.want];if(n<0)this.upset(e,.15,`Plus de ${s.short.toLowerCase()} !`);else if(this.priceRefused(e.want,r))this.upset(e,.12,"Trop cher !");else{let o=t.levels[n],a=Math.min(o.qty,s.cost>20||Math.random()<.7?1:2);o.qty-=a;for(let l=0;l<a;l++)e.basket.push({kind:"product",product:e.want,price:r,label:s.name});this.h.shelfChanged(e.shelf)}this.nextWant(e)}afterShopping(e){if(e.kind==="book")return this.findCourt(e);if(!e.basket.length)return this.leave(e);this.joinQueue(e)}freeCourt(e){for(let t of Lt){let n=this.s.courts[t.id],s=this.court[t.id];if(!(!n.built||an[t.surface].sport!==e)&&!(s.reservedBy||s.cleaning||n.wear>=.9))return t.id}return null}reserveCourt(e){let t=this.freeCourt(e.sport);if(!t)return!1;this.court[t].reservedBy=e.id,e.court=t;let n=this.s.prices[e.sport];return e.basket.push({kind:"booking",court:t,price:n,label:`${Lt.find(s=>s.id===t).label} \xB7 1 h`}),this.h.courtChanged(t),!0}findCourt(e){if(this.reserveCourt(e))return this.joinQueue(e);e.state="waitCourt",e.timer=1,e.waitT=0,this.goTo(e.leader,[this.takeLobby(e.leader)]),Math.random()<.6&&this.say(e.leader,"On attend qu'un terrain se lib\xE8re","info")}releaseCourt(e){e.court&&this.court[e.court].reservedBy===e.id&&(Object.assign(this.court[e.court],{reservedBy:null,playing:!1,overtime:!1}),this.h.courtChanged(e.court))}anyOvertime(){return Object.values(this.court).some(e=>e.overtime)}courtPath(e,t,n,s){let r=cn[t],o=[];if(e.z>0&&(e.x<Na&&o.push(Jd),o.push({x:mt(-.4,.4),z:dr.z},fr)),o.push(...r.route),s==="padel")o.push(...Ua(t,n.side));else if(n.side<0){let a=r.cx+(Xn.w/2-.8)*(n.x>=r.cx?1:-1);o.push({x:a,z:r.cz+2},{x:a,z:r.cz-2})}return o.push({x:n.x,z:n.z}),o}courtExit(e,t,n){let s=cn[t],r=[];if(n==="padel")r.push(...Ua(t,e.z>=s.cz?1:-1).reverse());else if(e.z<s.cz-1){let o=s.cx+(Xn.w/2-.8)*(e.x>=s.cx?1:-1);r.push({x:o,z:s.cz-2},{x:o,z:s.cz+2})}return r.push(...[...s.route].reverse()),r}startSession(e){e.state="playing",e.timer=mt(32,44);let t=this.s.courts[e.court];this.court[e.court].playing=!0,t.wear>.5&&this.upset(e,.25,t.wear>.75?"Le terrain est dans un \xE9tat\u2026":"Terrain mal entretenu");let n=Ch(e.court,e.sport);e.persons.forEach((s,r)=>{s.action="play",s.rot=n[r].side>0?Math.PI:0}),this.s.stats.sessions++,this.h.courtSession(e.court,e.persons,!0,e.sport)}endSession(e){if(!e.overtimeDone&&Math.random()<Qy){e.overtimeDone=!0,e.state="overtime",e.overT=0,this.court[e.court].overtime=!0;let t=Lt.find(n=>n.id===e.court).label;this.h.notify(`${t} : les joueurs d\xE9passent leur cr\xE9neau ! Va les faire sortir (E) ou embauche un agent de s\xE9curit\xE9.`,"bad"),this.say(e.leader,"On finit le set !","info"),this.h.courtChanged(e.court);return}this.finishSession(e)}finishSession(e){let t=this.s.courts[e.court],n=Lt.find(l=>l.id===e.court).surface;t.wear=lt(t.wear+an[n].wear*mt(.8,1.2)*(e.state==="overtime"?1.3:1),0,1),this.h.courtSession(e.court,e.persons,!1,e.sport);let s=e.court,r=e.sport;this.releaseCourt(e),e.court=null;for(let l of e.persons)l.action="idle";let o=this.built("buvette")&&Math.random()<.4*this.ev("bar"),a=!o&&this.built("snack")&&Math.random()<.22*this.ev("snack");if(o||a){let l=o?"buvette":"snack",c=Ot[l];for(let d of e.persons){let u=this.courtExit(d,s,r);this.goTo(d,[...u,{x:c.approach.x,z:-2},c.approach,c.entry])}e.kind=o?"drink":"food",e.state="arrive";return}for(let l of e.persons)this.goTo(l,[...this.courtExit(l,s,r),...this.pathOut({x:0,z:-2},e)]);e.state="leave"}evict(e,t="player"){let n=this.customers.find(s=>s.state==="overtime"&&s.court===e);if(!n)return"none";if(t==="player"){if(n.refuseT>0)return"wait";if(Math.random()<.3)return n.refuseT=2.5,this.say(n.leader,Gi(["Encore 5 minutes !","Juste ce jeu-l\xE0 !","On a presque fini !"]),"bad"),"refused"}return this.say(n.leader,t==="guard"?"D'accord, d'accord\u2026":"Pardon, on y va !","info"),n.mood=lt(n.mood-.05,0,1),this.count("evictions"),this.addXp(5),this.finishSession(n),"ok"}joinQueue(e){if(this.queue.length>=no.length)return this.upset(e,.4,"Il y a trop de monde !"),this.leave(e);this.queue.push(e),e.state="queue",this.freeLobby(e.leader),this.goTo(e.leader,this.queuePath(e.leader,no[this.queue.length-1]))}queuePath(e,t){return e.x<Na-.5&&e.z>7.8?[t]:[{x:Na,z:t.z},t]}leaveQueue(e){let t=this.queue.indexOf(e);t<0||(this.queue.splice(t,1),this.queue.forEach((n,s)=>{s>=t&&this.goTo(n.leader,[no[s]])}))}beginCheckout(e){e.state="counter",e.leader.rot=Math.PI;let t=this.counter;t.cust=e,t.phase="scan",t.idleT=0,t.autoT=0,e.kind==="licence"&&e.basket.push({kind:"licence",price:this.s.prices.licence,label:"Licence annuelle"}),t.items=e.basket.map((n,s)=>({...n,uid:this.id(),scanned:!1,index:s})),t.total=0,t.method=null,t.given=0,this.h.counterChanged(t)}scan(e){let t=this.counter;if(t.phase!=="scan")return!1;let n=t.items.find(s=>s.uid===e&&!s.scanned);return n?(n.scanned=!0,t.total=qn(t.total+n.price),t.idleT=0,this.h.sound("beep"),t.items.every(s=>s.scanned)&&this.askPayment(),this.h.counterChanged(t),!0):!1}askPayment(){let e=this.counter;e.phase="pay",e.method=Math.random()<(e.total>40?.7:.5)?"card":"cash",e.method==="cash"&&(e.given=i.cashGiven(e.total))}static cashGiven(e){if(Math.random()<.15)return e;let t=Math.round(e*100),n=[];for(let r of[100,500,1e3,2e3,5e3,1e4]){let o=Math.ceil(t/r)*r;(o>t||r===1e4)&&n.push(o)}let s=n[Math.min(n.length-1,Math.floor(Math.random()*Math.min(3,n.length)))];return Math.max(s,t)/100}payCard(e){let t=this.counter;return t.phase!=="pay"||t.method!=="card"?!1:Math.abs(e-t.total)>.004?(this.h.sound("error"),!1):(this.completeCheckout(t.total,!0),!0)}payCash(e){let t=this.counter;if(t.phase!=="pay"||t.method!=="cash")return null;let n=Math.round((t.given-t.total)*100),s=Math.round(e*100);return s<n&&this.upset(t.cust,.35,"Vous ne m'avez pas rendu assez !"),this.completeCheckout(t.given-e,s===n),s===n?"ok":s<n?"short":"over"}completeCheckout(e,t){let n=this.counter,s=n.cust,r=n.total>0?e/n.total:1,o=t?2:0;for(let a of n.items){let l=a.kind==="booking"?"courts":a.kind==="licence"?"licenceFees":"shop";this.earn(a.price*r,l),o+=a.kind==="booking"?12:a.kind==="licence"?18:2,a.kind==="product"&&(this.count("shopItems"),Fe[a.product].racket&&this.count("rackets")),a.kind==="booking"&&this.count("bookings")}if(s.kind==="licence"&&(this.s.licences++,this.count("newLicences")),this.addXp(o),this.h.sound("cash"),s.mood=lt(s.mood-lt((s.queueT-25)/70,0,.35),0,1),s.vip&&s.queueT<35){let a=qn(n.total*.12+2);this.earn(a,"tips"),this.say(s.leader,`Gardez la monnaie ! (+${a.toFixed(2).replace(".",",")} \u20AC)`,"good")}else s.mood>.85&&Math.random()<.4&&this.say(s.leader,"Merci, bonne journ\xE9e !","good");this.queue.shift(),this.queue.forEach((a,l)=>this.goTo(a.leader,[no[l]])),n.cust=null,n.items=[],n.phase="idle",n.total=0,n.method=null,n.given=0,this.h.counterChanged(n),s.kind==="book"?this.sendToCourt(s):this.leave(s)}cancelCheckout(){let e=this.counter;if(!e.cust)return;let t=e.cust;this.leaveQueue(t),e.cust=null,e.items=[],e.phase="idle",this.h.counterChanged(e)}sendToCourt(e){e.state="toCourt";let t=Ch(e.court,e.sport);e.persons.forEach((n,s)=>{this.freeLobby(n),this.goTo(n,this.courtPath(n,e.court,t[s],e.sport))})}standPath(e,t,n){let s=Ot[t];return this.standAt(e)===t?[{x:s.cx,z:e.z},n]:[s.approach,s.entry,n]}takeSeat(e,t){let n=this.stand[t],s=Ot[t];for(let r=0;r<s.seats.length;r++)if(!n.seats.has(r))return n.seats.add(r),e.seat={key:t,i:r},s.seats[r];return{x:s.cx+mt(-1.2,1.2),z:mt(13.2,14.2)}}freeSeat(e){e.seat&&(this.stand[e.seat.key].seats.delete(e.seat.i),e.seat=null)}joinStand(e,t){let n=this.stand[t],s=Ot[t];if(e.stand=t,!this.built(t))return this.leave(e);if(n.queue.length>=s.queue.length)return this.upset(e,.35,"Trop de monde \xE0 la "+(t==="buvette"?"buvette":"caisse du snack")+" !"),this.leave(e);n.queue.push(e),e.state="standQueue",e.queueT=0;let r=e.leader;this.goTo(r,this.standPath(r,t,s.queue[n.queue.length-1]));for(let o of e.persons)if(o!==r){let a=this.takeSeat(o,t);this.goTo(o,[...this.standPath(o,t,{x:s.cx,z:a.z}),a]),o.look=a.look??null}}leaveStand(e){let t=this.stand[e.stand];if(!t)return;let n=t.queue.indexOf(e);if(n<0)return;t.queue.splice(n,1);let s=Ot[e.stand];t.queue.forEach((r,o)=>{o>=n&&this.goTo(r.leader,[{x:s.cx,z:r.leader.z},s.queue[o]])}),this.h.standChanged(e.stand)}beginStandOrder(e){let t=e.stand;e.state="standOrder",e.orderT=0,e.leader.rot=Math.PI;let n=e.persons.length,s={},r=l=>{l&&this.productAvailable(l)&&(s[l]=(s[l]||0)+1)},o=this.s.minute/60;for(let l=0;l<n;l++)if(t==="buvette"){let c={beer:o<11?.6:4,soda:2*this.ev("drinks"),coffee:o<11?5:1.2,juice:1.4*this.ev("drinks")};r(Uh(c,d=>this.productAvailable(d)))}else{let c=o>=11.5&&o<14.5,d={sandwich:c?4:1.5,panini:c?3:1,pizza:c?3:1.2,cookie:c?.8:3*this.ev("juniors")};r(Uh(d,u=>this.productAvailable(u))),Math.random()<.3&&r("cookie")}if(e.order=Object.entries(s).map(([l,c])=>({product:l,qty:c})),!e.order.length)return this.leaveStand(e),this.leave(e);let a=e.order.map(l=>`${l.qty} ${Fe[l.product].short.toLowerCase()}${l.qty>1&&!/s$/.test(Fe[l.product].short)?"s":""}`).join(" + ");this.say(e.leader,`${a}, svp !`,"info"),this.h.standChanged(t)}standOrder(e){let t=this.stand[e].queue[0];return t&&t.state==="standOrder"?t:null}standStock(e,t){let n=0;return this.s.shelves.forEach((s,r)=>{if(s.built&&Zt[r].stand===e)for(let o of s.levels)o.product===t&&(n+=o.qty)}),n}takeStandStock(e,t,n){let s=0;return this.s.shelves.forEach((r,o)=>{if(!(!r.built||Zt[o].stand!==e||s>=n))for(let a of r.levels){if(a.product!==t)continue;let l=Math.min(a.qty,n-s);a.qty-=l,s+=l,l&&this.h.shelfChanged(o)}}),s}serveStand(e){let t=this.standOrder(e);if(!t)return"none";let n=0,s=0,r=null,o=!1;for(let d of t.order){let u=this.s.prices[d.product];if(this.priceRefused(d.product,u)){o=!0;continue}let h=this.takeStandStock(e,d.product,d.qty);h<d.qty&&(r=d.product),n+=h*u,s+=h}let a=e==="buvette"?"bar":"snack";if(s===0)return this.upset(t,.35,o?"C'est bien trop cher !":`Plus de ${Fe[r??t.order[0].product].short.toLowerCase()} ?!`),this.leaveStand(t),this.leave(t),this.h.sound("error"),"empty";if(r?this.upset(t,.15,`Il n'y a plus de ${Fe[r].short.toLowerCase()}\u2026`):o&&this.upset(t,.1,"Trop cher, je ne prends pas tout"),this.earn(qn(n),i_[a]),this.count(a==="bar"?"barItems":"snackItems",s),this.addXp(2*s),t.vip||t.orderT<6){let d=t.vip?qn(n*.2+1):.5;(t.vip||Math.random()<.35)&&(this.earn(d,"tips"),this.say(t.leader,`Merci ! (+${d.toFixed(2).replace(".",",")} \u20AC de pourboire)`,"good"))}else!r&&Math.random()<.3&&this.say(t.leader,e==="buvette"?"Sant\xE9 !":"\xC7a a l'air bon !","good");t.mood=lt(t.mood-lt((t.queueT+t.orderT-30)/90,0,.3),0,1),this.h.sound("cash"),this.h.standServed(e,t.order),this.leaveStand(t),t.state="terrace",t.timer=mt(14,24);let l=t.leader,c=this.takeSeat(l,e);return this.goTo(l,[{x:Ot[e].cx,z:c.z},c]),l.look=c.look??null,"ok"}leave(e){this.releaseCourt(e),e.stand&&this.leaveStand(e),this.counter.cust===e&&this.cancelCheckout(),this.leaveQueue(e),e.state="leave";for(let t of e.persons)this.freeLobby(t),this.freeSeat(t),t.look=null,this.goTo(t,this.pathOut(t,e))}removeCustomer(e){for(let n of e.persons)this.despawnPerson(n);let t=this.customers.indexOf(e);t>=0&&this.customers.splice(t,1),this.leaveQueue(e),e.stand&&this.leaveStand(e),this.releaseCourt(e),e.car&&(e.car.state==="arriving"?(this.cars.splice(this.cars.indexOf(e.car),1),this.h.carRemoved(e.car)):this.carDepart(e.car)),this.s.satisfaction=lt(this.s.satisfaction*.9+e.mood*.1,0,1),e.mood>=.75?this.s.stats.happy++:e.mood<.5&&this.s.stats.angry++}order(e,t){let n=Fe[e];if(!n||!this.productAvailable(e)||t<1)return!1;let s=qn(this.unitCost(e)*n.box*t);return this.spend(s,"orders")?(this.s.orders.push({product:e,boxes:t,eta:8}),this.h.sound("order"),!0):!1}deliver(e){for(let t=0;t<e.boxes;t++){let n=this.freePalletSlot(),s={id:this.id(),product:e.product,qty:Fe[e.product].box,...n,held:!1};this.s.boxes.push(s),this.h.boxAdded(s)}this.h.notify(`Livraison arriv\xE9e : ${e.boxes} carton${e.boxes>1?"s":""} de ${Fe[e.product].short.toLowerCase()}`,"info")}freePalletSlot(){let e=new Set(this.s.boxes.filter(t=>t.pallet!=null).map(t=>t.pallet));for(let t=0;t<n_;t++)if(!e.has(t))return{pallet:t,...s_(t)};return{pallet:null,x:so.x+mt(-2.5,2.5),z:so.z+mt(1.2,2.5),y:0}}pickBox(e){return e.held?!1:(e.held=!0,e.pallet=null,!0)}dropBox(e,t,n,s=0){e.held=!1,e.x=t,e.z=n,e.y=s,this.h.boxMoved(e)}shelfLevelCap(e){return Fe[e].shelf}placeItem(e,t,n){let s=this.s.shelves[t];if(!s?.built||e.qty<=0)return"none";if(Zt[t].zone!==Fe[e.product].zone)return"zone";let r=s.levels[n];return r.product&&r.product!==e.product&&r.qty>0?"other":r.qty>=this.shelfLevelCap(e.product)?"full":(r.product=e.product,r.qty++,e.qty--,this.h.shelfChanged(t),e.qty===0&&this.removeBox(e),"ok")}takeItem(e,t,n){let s=this.s.shelves[t]?.levels[n];return!s||s.product!==e.product||s.qty<=0?"none":e.qty>=Fe[e.product].box?"full":(s.qty--,e.qty++,s.qty===0&&(s.product=null),this.h.shelfChanged(t),"ok")}clearLevel(e,t){let n=this.s.shelves[e]?.levels[t];n&&n.qty===0&&(n.product=null,this.h.shelfChanged(e))}removeBox(e){let t=this.s.boxes.indexOf(e);t>=0&&this.s.boxes.splice(t,1),this.h.boxRemoved(e)}buildCourt(e){let t=Lt.find(s=>s.id===e),n=this.s.courts[e];return!t||n.built||!this.unlocked(t.level)||!this.spend(t.price,"build")?!1:(n.built=!0,n.wear=0,this.addXp(40),this.h.courtChanged(e,!0),this.h.notify(`${t.label} construit !`,"good"),!0)}buyShelf(){let e=this.s.shelves.findIndex((t,n)=>!t.built&&Zt[n].zone==="shop");return e<0||!this.spend(eo,"build")?!1:(this.s.shelves[e].built=!0,this.h.shelfBuilt(e),!0)}buyUpgrade(e){let t=Vi[e];return!t||this.s.upgrades[e]||!this.unlocked(t.level)||!this.spend(t.price,"build")?!1:(this.s.upgrades[e]=!0,this.h.upgradeBought(e),!0)}buyFacility(e){let t=Tn[e],n=this.s.facilities[e];return!t||n.built||n.building||!this.unlocked(t.level)||!this.spend(t.price,"build")?!1:(n.building=!0,n.progress=0,this.h.facilityChanged(e,!1),this.h.notify(`Chantier lanc\xE9 : ${t.name}. Les ouvriers sont au travail !`,"good"),!0)}updateBuilds(e){for(let[t,n]of Object.entries(this.s.facilities))if(n.building)if(n.progress=Math.min(1,n.progress+e/Tn[t].build),n.progress>=1){n.building=!1,n.built=!0,Zt.forEach((r,o)=>{r.stand===t&&(this.s.shelves[o].built=!0,this.h.shelfBuilt(o,!0))}),this.addXp(30),this.syncStaff(),this.h.facilityChanged(t,!0);let s={buvette:"Commande des boissons sur l'ordinateur et range-les dans le frigo de la buvette.",snack:"Commande des sandwichs sur l'ordinateur et range-les dans la vitrine du snack.",parking:"Le prix du ticket se r\xE8gle dans l'onglet Prix."};this.h.notify(`${Tn[t].name} termin\xE9 ! ${s[t]??""}`,"good")}else this.h.facilityProgress(t,n.progress)}canHire(e){let t=vn[e];return this.unlocked(t.level)&&(!t.needs||this.built(t.needs))}setStaff(e,t){return t&&!this.canHire(e)?!1:(this.s.staff[e]=t,this.syncStaff(),!0)}staffHome(e){return e==="reception"?_h:e==="keeper"?{x:3.5,z:-2.6}:e==="security"?Rh:e==="barman"?Ot.buvette.staff:e==="cook"?Ot.snack.staff:_h}syncStaff(){for(let e of Object.keys(vn)){let t=this.s.staff[e]&&(!vn[e].needs||this.built(vn[e].needs)),n=this.staff[e];if(t&&!n){let s=this.staffHome(e),r=this.spawnPerson(e,s);r.x=s.x,r.z=s.z,r.rot=e==="keeper"?Math.PI:0,r.job={state:"idle",timer:0},this.staff[e]=r}else!t&&n&&(this.despawnPerson(n),this.staff[e]=null)}}setPrice(e,t){this.s.prices[e]=Math.max(.1,qn(t)),this.h.pricesChanged(e)}canClean(e){return this.s.courts[e].built&&!this.court[e].playing}clean(e){return this.canClean(e)?(this.s.courts[e].wear=0,this.addXp(4),this.h.courtChanged(e),!0):!1}updateStaff(e,t){let n=this.staff.reception;if(n){n.rot=0;let s=this.counter;if(s.cust&&!t.playerAtCounter)if(s.autoT+=e,s.phase==="scan"&&s.autoT>.9){s.autoT=0;let r=s.items.find(o=>!o.scanned);r&&this.scan(r.uid)}else s.phase==="pay"&&s.autoT>2.2&&(s.method==="card"?this.payCard(s.total):this.payCash(qn(s.given-s.total)))}for(let[s,r]of[["buvette","barman"],["snack","cook"]]){let o=this.staff[r],a=this.stand[s];o&&(o.rot=0,this.standOrder(s)&&t.playerAtStand!==s?(a.autoT+=e,o.action="serve",a.autoT>2.6&&(a.autoT=0,this.serveStand(s))):(a.autoT=0,o.action==="serve"&&(o.action="idle")))}this.updateKeeper(e),this.updateSecurity(e)}updateKeeper(e){let t=this.staff.keeper;if(!t)return;let n=t.job;if(n.state==="idle"){if(n.timer-=e,n.timer<=0){n.timer=3;let s=null;for(let r of Lt){let o=this.s.courts[r.id],a=this.court[r.id];o.built&&o.wear>=.45&&!a.reservedBy&&!a.cleaning&&(!s||o.wear>this.s.courts[s].wear)&&(s=r.id)}if(s){this.court[s].cleaning=!0,n.court=s,n.state="go";let r=cn[s],o=an[Lt.find(l=>l.id===s).surface].sport,a=o==="padel"?[...Ua(s,1),{x:r.cx,z:r.cz+4}]:[{x:r.cx,z:r.cz+6}];n.sport=o,this.goTo(t,[...t.z>0?[dr,fr]:[],...r.route,...a])}}}else n.state==="go"&&this.arrived(t)?(n.state="clean",n.timer=7,t.action="clean"):n.state==="clean"?(n.timer-=e,n.timer<=0&&(this.s.courts[n.court].wear=0,this.court[n.court].cleaning=!1,this.h.courtChanged(n.court),n.state="back",t.action="idle",this.goTo(t,[...this.courtExit(t,n.court,n.sport),{x:3.5,z:-2.6}]))):n.state==="back"&&this.arrived(t)&&(n.state="idle",n.timer=2,t.rot=Math.PI)}updateSecurity(e){let t=this.staff.security;if(!t)return;let n=t.job;if(n.state==="idle"){if(n.timer-=e,n.timer>0)return;n.timer=1.5;let s=this.customers.find(r=>r.state==="overtime"&&r.overT>3);if(!s)return;n.court=s.court,n.state="go",this.say(t,"J'y vais !","info"),this.goTo(t,[hr,ur,dr,fr,...cn[s.court].route])}else n.state==="go"&&this.arrived(t)?(this.court[n.court].overtime&&(this.say(t,"Le cr\xE9neau est termin\xE9, merci !","info"),this.h.sound("whistle")),n.state="talk",n.timer=1.6):n.state==="talk"?(n.timer-=e,n.timer<=0&&(this.court[n.court].overtime&&this.evict(n.court,"guard"),n.state="back",this.goTo(t,[...[...cn[n.court].route].reverse(),fr,dr,ur,hr,Rh]))):n.state==="back"&&this.arrived(t)&&(n.state="idle",n.timer=1,t.rot=0)}toggleOpen(){return this.dayOver?this.s.open:!this.s.open&&this.s.minute>=this.closeMinute-30?(this.h.notify("Trop tard pour ouvrir aujourd'hui","bad"),!1):(this.s.open=!this.s.open,this.s.open&&!this.s.dayStarted&&(this.s.dayStarted=!0,this.h.dayStarted?.()),this.h.openChanged(this.s.open),this.s.open)}arrivalRate(){let e=this.s.minute/60,t=e<11?.75:e<14?1.25:e<17?.85:e<20?1.45:.9,n=(1.7+.075*this.s.licences)*t*(.55+.9*this.s.satisfaction)*this.ev("rate");return this.built("buvette")&&(n+=.5*t),this.built("snack")&&(n+=e>=11.5&&e<14.5?1.4:.3),this.built("parking")&&(n*=lt(1.25-.25*this.s.prices.parking/Wn.parking.market,.4,1.05)),n}pickKind(){let e=this.s.minute/60,t=Lt.filter(u=>this.s.courts[u.id].built).length,n=lt(1-this.s.licences/this.capacity,0,1),s=t?(.05+.07*t)*(this.s.level<=1?.8:1)*this.ev("book"):0;this.customers.filter(u=>u.kind==="book"&&!u.court&&u.state!=="leave"&&u.state!=="terrace").length>=t&&(s*=.1);let o=.42*this.ev("shop"),a=.13*n,l=this.built("buvette")?.24*this.ev("bar")*(e>=17?1.5:1):0,c=this.built("snack")?(e>=11.5&&e<14.5?.5:.1)*this.ev("snack"):0,d=Math.random()*(s+o+a+l+c);return d<s?"book":d<s+o?"shop":d<s+o+a?"licence":d<s+o+a+l?"drink":"food"}canEndDay(){return!!this.s.dayStarted&&!this.s.open&&this.customers.length===0&&!this.dayOver}update(e,t={}){if(this.dayOver)return;let n=this.s;n.dayStarted&&(n.minute+=e*af);for(let s of Object.values(this.court))s.reservedBy==null&&(s.playing=!1,s.overtime=!1);this.counter.idleT=(this.counter.idleT||0)+(this.counter.cust?e:0),t.playerAtCounter&&(this.counter.idleT=0),this.updateBuilds(e),n.open&&(n.minute>=this.closeMinute?(n.open=!1,this.h.openChanged(!1),this.h.notify("Fermeture : plus de nouveaux clients aujourd'hui","info")):this.customers.length<jy&&Math.random()<this.arrivalRate()/60*af*e&&this.spawnCustomer(this.pickKind())),n.event?.id==="inspection"&&!this.inspected&&n.minute>=16*60&&this.inspect();for(let s of[...n.orders])s.eta-=e,s.eta<=0&&(n.orders.splice(n.orders.indexOf(s),1),this.deliver(s));this.updateCars(e);for(let s of this.persons)s.action!=="play"&&!s.hidden&&this.movePerson(s,e);for(let s of[...this.customers])this.updateCustomer(s,e);if(this.updateStaff(e,t),!n.open&&n.minute>=this.closeMinute+60&&this.customers.length){for(let s of[...this.customers])s.mood=Math.min(s.mood,.7),this.removeCustomer(s);this.cancelCheckout(),this.queue.length=0}n.dayStarted&&!n.open&&n.minute>=this.closeMinute&&this.customers.length===0&&this.endDay()}inspect(){this.inspected=!0,Lt.filter(n=>this.s.courts[n.id].built).every(n=>this.s.courts[n.id].wear<.45)?(this.earn(300,"bonus"),this.s.satisfaction=lt(this.s.satisfaction+.05,0,1),this.addXp(40),this.h.notify("Visite de la ligue : terrains impeccables ! Prime de 300 \u20AC","good")):(this.s.satisfaction=lt(this.s.satisfaction-.04,0,1),this.h.notify("Visite de la ligue : l'inspecteur trouve les terrains mal entretenus\u2026","bad"))}endDay(){if(this.dayOver)return;this.dayOver=!0;let e=this.s,t=e.stats;e.open=!1;let n=0;for(let l of Object.keys(vn))e.staff[l]&&this.staff[l]&&(n+=vn[l].salary);let s=30;for(let l of Lt)e.courts[l.id].built&&(s+=l.surface==="clay"?30:22);this.built("buvette")&&(s+=15),this.built("snack")&&(s+=25),e.money-=n+s,t.salaries+=n,t.upkeep+=s;let r=e.licences,o=Math.round(e.licences*(e.satisfaction-.55)*.12+(e.satisfaction>.7?1:0));e.licences=lt(e.licences+o,3,this.capacity);let a={day:e.day,...t,licences:e.licences,licenceDrift:e.licences-r,satisfaction:e.satisfaction,money:e.money,level:e.level,event:e.event?.id,challenge:e.challenge?{...e.challenge,text:oo(e.challenge)}:null};return this.h.dayEnded(a),a}nextDay(){let e=this.s;e.day++,e.minute=yh*60,e.open=!1,e.dayStarted=!1,e.stats=Oh(),this.dayOver=!1,this.inspected=!1;for(let t of[...this.customers])this.removeCustomer(t);for(let t of[...this.cars])this.h.carRemoved(t);this.cars.length=0,this.queue.length=0,this.lobbyUsed.clear();for(let t of Object.values(this.stand))t.queue.length=0,t.seats.clear(),t.autoT=0;for(let t of Object.keys(this.court))Object.assign(this.court[t],{reservedBy:null,playing:!1,cleaning:!1,overtime:!1});for(let[t,n]of Object.entries(this.staff)){if(!n)continue;let s=this.staffHome(t);n.job={state:"idle",timer:0},n.path=[],n.x=s.x,n.z=s.z,n.action="idle"}this.rollDay(),this.h.openChanged(!1)}rollDay(){let e=this.s,t=Object.keys(yn).filter(a=>!(a==="tournament"&&e.level<2)),n=Uh(Object.fromEntries(t.map(a=>[a,yn[a].weight])));if(e.event={id:n},n==="promo"){let a=Mi.filter(l=>this.productAvailable(l));e.event.product=Gi(a)}let s=vh.filter(a=>(!a.needs||this.built(a.needs))&&(!a.level||this.unlocked(a.level))),r=Gi(s),o=Math.max(1,Math.round(r.base+r.per*(e.level-1)));e.challenge={id:r.id,target:o,reward:Math.round(r.reward*(1+(e.level-1)*.25)/10)*10,done:!1},this.h.challengeChanged()}serialize(){let e=JSON.parse(JSON.stringify(this.s));return e.boxes=e.boxes.map(t=>({...t,held:!1})),e}};function oo(i){let e=vh.find(t=>t.id===i.id);return e?e.text(i.target):""}var hf={shopItems:"shopItems",bookings:"bookings",licences:"newLicences",barItems:"barItems",snackItems:"snackItems",rackets:"rackets",evictions:"evictions"};function Uh(i,e=()=>!0){let t=Object.keys(i).filter(r=>i[r]>0&&e(r));if(!t.length)return null;let n=t.reduce((r,o)=>r+i[o],0),s=Math.random()*n;for(let r of t)if(s-=i[r],s<=0)return r;return t[t.length-1]}function s_(i){let e=Math.floor(i/6),t=i%6;return{x:so.x+(t%3-1)*.62,z:so.z+(Math.floor(t/3)-.5)*.62,y:.15+e*.46}}var kh=new Map;function wt(i,e,t,{repeat:n=null,srgb:s=!0,mips:r=!0}={}){let o=document.createElement("canvas");o.width=i,o.height=e;let a=o.getContext("2d",{willReadFrequently:!0});t(a,i,e);let l=new pn(o);return s&&(l.colorSpace=Ct),l.anisotropy=4,n&&(l.wrapS=l.wrapT=$t,l.repeat.set(n[0],n[1])),l.generateMipmaps=r,l}function In(i,e,t,{scale:n=64,alpha:s=.08,color:r="0,0,0",seed:o=1}={}){let a=Math.ceil(e/n)+2,l=Math.ceil(t/n)+2,c=o*9301,d=()=>(c=c*16807%2147483647)/2147483647,u=Array.from({length:l},()=>Array.from({length:a},d)),h=i.getImageData(0,0,e,t),f=h.data,[g,M,m]=r.split(",").map(Number);for(let p=0;p<t;p++){let x=p/n,_=Math.floor(x),v=x-_,I=v*v*(3-2*v);for(let S=0;S<e;S++){let w=S/n,C=Math.floor(w),b=w-C,y=b*b*(3-2*b),A=u[_][C],F=u[_][C+1],k=u[_+1][C],X=u[_+1][C+1],z=(A+(F-A)*y+(k+(X-k)*y-(A+(F-A)*y))*I-.5)*2*s,ee=(p*e+S)*4;z>0?(f[ee]+=(255-f[ee])*z,f[ee+1]+=(255-f[ee+1])*z,f[ee+2]+=(255-f[ee+2])*z):(f[ee]+=(f[ee]-g)*z,f[ee+1]+=(f[ee+1]-M)*z,f[ee+2]+=(f[ee+2]-m)*z)}}i.putImageData(h,0,0)}function xr(i,e,t,n,s,r=[1,2]){for(let o=0;o<n;o++){i.fillStyle=s[o%s.length];let a=r[0]+Math.random()*(r[1]-r[0]);i.fillRect(Math.random()*e,Math.random()*t,a,a)}}function _n(i,e){return kh.has(i)||kh.set(i,e()),kh.get(i)}var uf=()=>_n("grass",()=>wt(512,512,(i,e,t)=>{i.fillStyle="#4f8a35",i.fillRect(0,0,e,t),In(i,e,t,{scale:96,alpha:.18,seed:3}),In(i,e,t,{scale:18,alpha:.12,seed:7});for(let n=0;n<9e3;n++){let s=Math.random()*e,r=Math.random()*t,o=3+Math.random()*5;i.strokeStyle=Math.random()<.5?"rgba(120,170,70,0.35)":"rgba(40,80,30,0.35)",i.beginPath(),i.moveTo(s,r),i.lineTo(s+(Math.random()-.5)*2,r-o),i.stroke()}},{repeat:[60,60]})),df=()=>_n("wood",()=>wt(1024,1024,(i,e,t)=>{let n=t/8;for(let s=0;s<8;s++){let r=-Math.random()*300;for(;r<e;){let o=260+Math.random()*260,a=150+Math.random()*35;i.fillStyle=`rgb(${a+25},${a-15},${a-60})`,i.fillRect(r,s*n,o,n);for(let l=0;l<14;l++){i.strokeStyle=`rgba(90,55,25,${.05+Math.random()*.08})`,i.lineWidth=1+Math.random()*2;let c=s*n+Math.random()*n;i.beginPath(),i.moveTo(r,c),i.bezierCurveTo(r+o*.3,c+(Math.random()-.5)*10,r+o*.6,c+(Math.random()-.5)*10,r+o,c),i.stroke()}i.fillStyle="rgba(40,25,10,0.55)",i.fillRect(r,s*n,2,n),r+=o}i.fillStyle="rgba(40,25,10,0.5)",i.fillRect(0,s*n,e,2)}In(i,e,t,{scale:128,alpha:.06,seed:11})},{repeat:[5,4]})),Fa=()=>_n("concrete",()=>wt(512,512,(i,e,t)=>{i.fillStyle="#b9b6ae",i.fillRect(0,0,e,t),In(i,e,t,{scale:80,alpha:.12,seed:5}),xr(i,e,t,4e3,["rgba(80,80,80,0.25)","rgba(255,255,255,0.25)"]),i.strokeStyle="rgba(70,70,70,0.35)",i.lineWidth=2,i.strokeRect(0,0,e,t)},{repeat:[1,1]})),zh=()=>_n("asphalt",()=>wt(512,512,(i,e,t)=>{i.fillStyle="#4a4b4e",i.fillRect(0,0,e,t),In(i,e,t,{scale:60,alpha:.1,seed:9}),xr(i,e,t,12e3,["rgba(20,20,20,0.5)","rgba(140,140,140,0.35)"],[1,2.5])},{repeat:[12,12]})),ff=()=>_n("gravel",()=>wt(512,512,(i,e,t)=>{i.fillStyle="#a89c86",i.fillRect(0,0,e,t),xr(i,e,t,16e3,["#8f8470","#c4b9a3","#766b58","#d8cfbd"],[1.5,4])},{repeat:[6,10]})),pf=()=>_n("wall",()=>wt(256,256,(i,e,t)=>{i.fillStyle="#efece6",i.fillRect(0,0,e,t),In(i,e,t,{scale:48,alpha:.03,seed:13})},{repeat:[4,1]})),Ba=()=>_n("clad",()=>wt(512,512,(i,e,t)=>{for(let n=0;n<e;n+=32){let s=120+Math.random()*25;i.fillStyle=`rgb(${s+40},${s+5},${s-30})`,i.fillRect(n,0,32,t),i.fillStyle="rgba(30,20,10,0.5)",i.fillRect(n,0,2,t)}In(i,e,t,{scale:64,alpha:.08,seed:17})},{repeat:[6,1]}));function mf(i,e,t,n,s,r){let o=e/n,a=e/2,l=t/2,c=23.77*o,d=10.97*o,u=8.23*o,h=6.4*o,f=Math.max(3,.05*o);i.fillStyle=r;let g=(M,m,p,x)=>i.fillRect(M,m,p,x);g(a-d/2,l-c/2,d,f),g(a-d/2,l+c/2-f,d,f),g(a-d/2,l-c/2,f,c),g(a+d/2-f,l-c/2,f,c),g(a-u/2,l-c/2,f,c),g(a+u/2-f,l-c/2,f,c),g(a-u/2,l-h-f/2,u,f),g(a-u/2,l+h-f/2,u,f),g(a-f/2,l-h,f,h*2),g(a-f/2,l-c/2,f,.15*o),g(a-f/2,l+c/2-.15*o,f,.15*o)}var gf=()=>_n("clay",()=>wt(1024,2048,(i,e,t)=>{i.fillStyle="#c4643a",i.fillRect(0,0,e,t),In(i,e,t,{scale:160,alpha:.1,seed:21}),In(i,e,t,{scale:22,alpha:.07,seed:23}),xr(i,e,t,4e4,["rgba(120,45,20,0.35)","rgba(230,140,90,0.3)"],[1,2]),mf(i,e,t,18.3,36.6,"rgba(250,246,238,0.95)")})),xf=()=>_n("hard",()=>wt(1024,2048,(i,e,t)=>{i.fillStyle="#3d7a5a",i.fillRect(0,0,e,t);let n=e/18.3;i.fillStyle="#2f5d9e",i.fillRect(e/2-10.97*n/2,t/2-23.77*n/2,10.97*n,23.77*n),In(i,e,t,{scale:90,alpha:.05,seed:31}),xr(i,e,t,3e4,["rgba(255,255,255,0.05)","rgba(0,0,0,0.05)"],[1,2]),mf(i,e,t,18.3,36.6,"#f4f4f0")})),vf=()=>_n("padel",()=>wt(1024,2048,(i,e,t)=>{i.fillStyle="#2a64b8",i.fillRect(0,0,e,t),xr(i,e,t,9e4,["rgba(80,140,230,0.4)","rgba(15,45,110,0.4)"],[1,2]),In(i,e,t,{scale:120,alpha:.05,seed:41});let n=e/10,s=e/2,r=t/2,o=.05*n;i.fillStyle="#f4f4f0",i.fillRect(s-5*n,r-6.95*n-o/2,10*n,o),i.fillRect(s-5*n,r+6.95*n-o/2,10*n,o),i.fillRect(s-o/2,r-6.95*n,o,13.9*n)})),Fh=i=>_n("wear-"+i,()=>wt(512,1024,(e,t,n)=>{e.clearRect(0,0,t,n);let s=t/(i==="padel"?10:18.3),r=i==="padel"?[n/2-7.2*s,n/2+7.2*s]:[n/2-12*s,n/2+12*s];for(let o of r)for(let a=0;a<260;a++){let l=t/2+(Math.random()-.5)*t*.55,c=o+(Math.random()-.5)*3.5*s;e.fillStyle=i==="clay"?"rgba(110,40,15,0.5)":"rgba(40,40,30,0.25)",e.save(),e.translate(l,c),e.rotate(Math.random()*Math.PI),e.fillRect(-2,-5,4+Math.random()*4,10+Math.random()*20),e.restore()}for(let o=0;o<120;o++){let a=Math.random()*t,l=Math.random()*n;e.fillStyle=i==="clay"?"rgba(235,170,120,0.35)":"rgba(120,110,80,0.2)",e.beginPath(),e.ellipse(a,l,4+Math.random()*10,2+Math.random()*5,Math.random()*3,0,Math.PI*2),e.fill()}for(let o=0;o<90;o++){let a=Math.random()*t,l=Math.random()*n;e.fillStyle=["#8a5a24","#a87a2e","#6d4a1e"][o%3],e.save(),e.translate(a,l),e.rotate(Math.random()*6),e.beginPath(),e.ellipse(0,0,5,2.5,0,0,Math.PI*2),e.fill(),e.restore()}})),ao=(i,e,t=16,n=2,s=[1,1])=>_n("mesh-"+i,()=>wt(64,64,(r,o,a)=>{r.clearRect(0,0,o,a),r.strokeStyle=e,r.lineWidth=n,r.beginPath();for(let l=0;l<=o;l+=t)r.moveTo(l,0),r.lineTo(l,a),r.moveTo(0,l),r.lineTo(o,l);r.stroke()},{repeat:s})),yf=i=>_n("box-"+i,()=>wt(256,256,(e,t,n)=>{e.fillStyle="#c9a26b",e.fillRect(0,0,t,n),In(e,t,n,{scale:40,alpha:.08,seed:51}),e.fillStyle="rgba(120,85,40,0.35)";for(let r=0;r<n;r+=6)e.fillRect(0,r,t,1);e.fillStyle="rgba(210,190,150,0.85)",e.fillRect(t/2-18,0,36,n);let s=Fe[i];e.fillStyle="#fbfaf6",e.fillRect(28,150,t-56,78),e.fillStyle=s.color,e.fillRect(28,150,18,78),e.fillStyle="#1b2420",e.font="700 26px Outfit, Arial, sans-serif",e.textBaseline="middle",e.fillText(s.short,58,176),e.font="500 18px Outfit, Arial, sans-serif",e.fillStyle="#56605a",e.fillText(`x${s.box}`,58,206)}));function _f(i,{w:e=512,h:t=128,bg:n="#ffffff",fg:s="#1b2420",font:r="700 64px Outfit, Arial, sans-serif",accent:o=null}={}){return wt(e,t,a=>{a.fillStyle=n,a.fillRect(0,0,e,t),o&&(a.fillStyle=o,a.fillRect(0,t-t*.12,e,t*.12)),a.fillStyle=s,a.font=r,a.textAlign="center",a.textBaseline="middle",a.fillText(i,e/2,t/2)})}var bi=i=>_n("lbl-"+i,()=>wt(256,128,(e,t,n)=>{let s=Fe[i],r={balls:["#1d3f8f","#e8f04a","ACE"],padelballs:["#0f7a54","#c8f04a","PADEL"],water:["#dff1fb","#2a7cc0","SOURCE"],iso:["#ff8a3d","#ffffff","BOOST"],energy:["#b5651d","#ffe9a8","POWER"],shoes:["#ffffff","#f26b3a","COURTLINE"],beer:["#f2e6c4","#7a1f1f","BLONDE"],soda:["#d62d2d","#ffffff","FIZZ"],coffee:["#f4efe6","#6b4226","CAF\xC9"],juice:["#ffa31a","#ffffff","ORANGE"]},[o,a,l]=r[i]||["#ffffff",s.color,s.short];e.fillStyle=o,e.fillRect(0,0,t,n),e.fillStyle=a,e.font="800 54px Outfit, Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(l,t/2,n/2+2),e.fillRect(0,8,t,6),e.fillRect(0,n-14,t,6)}));var ct=(i,e={})=>new re({color:i,roughness:.55,...e}),lo=i=>(i.userData.reflective=!0,i),U={},bf={balls:[.5,.32,.36],water:[.5,.3,.36],iso:[.46,.26,.34],grip:[.4,.2,.3],padelballs:[.5,.32,.36],cap:[.5,.28,.4],energy:[.36,.16,.26],wristband:[.36,.18,.28],strings:[.42,.22,.34],towel:[.5,.3,.4],tshirt:[.52,.28,.4],shoes:[.6,.3,.42],bag:[.8,.34,.4],beer:[.5,.3,.36],soda:[.44,.18,.3],coffee:[.4,.2,.3],juice:[.46,.28,.34],sandwich:[.46,.2,.36],panini:[.46,.2,.36],pizza:[.46,.12,.46],cookie:[.36,.16,.28]};for(let[i,e]of Object.entries(Fe))e.racket&&(bf[i]=e.racket==="padel"?[.5,.2,.6]:[.36,.2,.78]);function r_(i){var t;let e=new Oe;switch(i){case"balls":case"padelballs":{let n=bi(i),s=new G(U.tube??(U.tube=new Xe(.038,.038,.24,20,1,!0)),new re({map:n,roughness:.3,side:Tt}));s.position.y=.12;let r=new G(U.tubeCap??(U.tubeCap=new Xe(.041,.041,.025,20)),U.white??(U.white=ct(16119282,{roughness:.4})));r.position.y=.245;let o=new G(U.tubeBottom??(U.tubeBottom=new Xe(.039,.039,.01,20)),U.metal??(U.metal=lo(ct(12106946,{metalness:.8,roughness:.3}))));o.position.y=.005,e.add(s,r,o);break}case"water":{U.bottle??(U.bottle=new Bi([[0,0],[.032,0],[.034,.01],[.034,.13],[.03,.16],[.014,.19],[.012,.2],[0,.2]].map(a=>new fe(a[0],a[1])),20));let n=U.waterMat??(U.waterMat=new re({color:13625847,roughness:.08,transparent:!0,opacity:.55})),s=new G(U.bottle,n),r=new G(U.bottleLabel??(U.bottleLabel=new Xe(.0345,.0345,.06,20,1,!0)),new re({map:bi("water"),roughness:.5}));r.position.y=.08;let o=new G(U.bottleCap??(U.bottleCap=new Xe(.014,.014,.018,12)),U.blueCap??(U.blueCap=ct(2784448,{roughness:.4})));o.position.y=.205,e.add(s,r,o);break}case"iso":{let n=new G(U.can??(U.can=new Xe(.033,.033,.15,20)),new re({map:bi("iso"),metalness:.5,roughness:.3}));n.position.y=.075;let s=new G(U.canTop??(U.canTop=new Xe(.028,.033,.012,20)),U.metal??(U.metal=lo(ct(12106946,{metalness:.8,roughness:.3}))));s.position.y=.156,e.add(n,s);break}case"grip":{let n=new G(U.gripBox??(U.gripBox=new je(.09,.2,.04)),[ct(16777215),ct(16777215),ct(1778720),ct(1778720),new re({map:o_(),roughness:.5}),ct(16777215)]);n.position.y=.1,e.add(n);break}case"energy":{let n=new G(U.energy??(U.energy=new je(.12,.025,.045)),new re({map:bi("energy"),roughness:.4}));n.position.y=.0125,e.add(n);break}case"wristband":{for(let n of[-.03,.03]){let s=new G(U.wrist??(U.wrist=new Hi(.03,.014,10,20)),U.wristMat??(U.wristMat=ct(14699082,{roughness:.95})));s.rotation.x=Math.PI/2,s.position.set(n,.014,0),e.add(s)}break}case"strings":{let n=new G(U.reel??(U.reel=new Xe(.06,.06,.04,24)),U.reelMat??(U.reelMat=ct(15911244,{roughness:.35})));n.position.y=.02;let s=new G(U.hub??(U.hub=new Xe(.022,.022,.045,16)),U.dark??(U.dark=ct(1778720)));s.position.y=.02,e.add(n,s);break}case"towel":case"tshirt":{let n=i==="towel"?4175782:16777215,s=new G(U.fold??(U.fold=Mf(.2,.05,.16,.015)),U[t="fold"+i]??(U[t]=ct(n,{roughness:.95})));s.position.y=.025,e.add(s);let r=new G(U.logoGeo??(U.logoGeo=new us(.025,16)),U.logoMat??(U.logoMat=ct(2059082,{roughness:.9})));r.rotation.x=-Math.PI/2,r.position.set(0,.051,.02),e.add(r);break}case"shoes":{let n=new G(U.shoebox??(U.shoebox=new je(.3,.11,.18)),[ct(15887162),ct(15887162),new re({map:bi("shoes"),roughness:.6}),ct(15887162),ct(15887162),ct(15887162)]);n.position.y=.055,e.add(n);break}case"bag":{let n=new G(U.bagGeo??(U.bagGeo=new ii(.1,.5,6,16).rotateZ(Math.PI/2)),U.bagMat??(U.bagMat=ct(1842980,{roughness:.6})));n.scale.set(1,1,.75),n.position.y=.1;let s=new G(U.bagStripe??(U.bagStripe=new Xe(.102,.102,.05,20,1,!0).rotateZ(Math.PI/2)),U.stripeMat??(U.stripeMat=ct(15003738,{roughness:.5})));s.scale.set(1,1,.75),s.position.y=.1,e.add(n,s);break}case"beer":{U.beerBottle??(U.beerBottle=new Bi([[0,0],[.03,0],[.031,.01],[.031,.12],[.02,.16],[.012,.19],[.013,.215],[0,.215]].map(o=>new fe(o[0],o[1])),18));let n=new G(U.beerBottle,U.beerGlass??(U.beerGlass=lo(new re({color:5911048,roughness:.12,metalness:.1})))),s=new G(U.beerLabel??(U.beerLabel=new Xe(.0315,.0315,.05,18,1,!0)),new re({map:bi("beer"),roughness:.5}));s.position.y=.07;let r=new G(U.crown??(U.crown=new Xe(.0145,.0145,.01,12)),U.gold??(U.gold=lo(ct(13938487,{metalness:.8,roughness:.3}))));r.position.y=.218,e.add(n,s,r);break}case"soda":case"juice":{let n=i==="juice",s=new G(n?U.carton??(U.carton=new je(.06,.16,.06)):U.can??(U.can=new Xe(.033,.033,.15,20)),new re({map:bi(i),metalness:n?0:.5,roughness:.35}));if(s.position.y=n?.08:.075,e.add(s),!n){let r=new G(U.canTop??(U.canTop=new Xe(.028,.033,.012,20)),U.metal??(U.metal=lo(ct(12106946,{metalness:.8,roughness:.3}))));r.position.y=.156,e.add(r)}break}case"coffee":{let n=new G(U.cup??(U.cup=new Xe(.04,.03,.1,18)),new re({map:bi("coffee"),roughness:.6}));n.position.y=.05;let s=new G(U.cupLid??(U.cupLid=new Xe(.042,.042,.012,18)),U.dark??(U.dark=ct(1778720)));s.position.y=.105,e.add(n,s);break}case"sandwich":{let n=new si;n.moveTo(-.07,0),n.lineTo(.07,0),n.lineTo(0,.1),n.closePath();let s=U.wedge??(U.wedge=new Hn(n,{depth:.06,bevelEnabled:!1}).translate(0,0,-.03)),r=new G(s,U.wedgeMat??(U.wedgeMat=new re({color:15398132,roughness:.15,transparent:!0,opacity:.55}))),o=new G(U.breadGeo??(U.breadGeo=new Hn(n,{depth:.05,bevelEnabled:!1}).translate(0,0,-.025).scale(.9,.9,1)),U.bread??(U.bread=ct(15320170,{roughness:.9})));o.position.y=.005,e.add(r,o);break}case"panini":{let n=new G(U.panini??(U.panini=Mf(.16,.035,.1,.015)),U.paniniMat??(U.paniniMat=ct(13935475,{roughness:.85})));n.position.y=.018,e.add(n);for(let s=-2;s<=2;s++){let r=new G(U.grill??(U.grill=new je(.008,.002,.09)),U.grillMat??(U.grillMat=ct(7028254)));r.position.set(s*.028,.036,0),e.add(r)}break}case"pizza":{let n=new si;n.moveTo(0,0),n.lineTo(-.06,.15),n.quadraticCurveTo(0,.17,.06,.15),n.closePath();let s=new G(U.slice??(U.slice=new Hn(n,{depth:.012,bevelEnabled:!1}).rotateX(-Math.PI/2).translate(0,0,.075)),U.pizzaMat??(U.pizzaMat=ct(15167313,{roughness:.8})));e.add(s);for(let[r,o]of[[0,0],[-.02,-.04],[.02,-.03]]){let a=new G(U.pep??(U.pep=new Xe(.012,.012,.004,10)),U.pepMat??(U.pepMat=ct(10166822,{roughness:.7})));a.position.set(r,.014,o),e.add(a)}break}case"cookie":{let n=new G(U.cookie??(U.cookie=new Xe(.035,.035,.012,16)),U.cookieMat??(U.cookieMat=ct(12618314,{roughness:.95})));n.position.y=.006,e.add(n);for(let[s,r]of[[.01,.01],[-.015,.005],[.005,-.017]]){let o=new G(U.chip??(U.chip=new Ht(.005,6,4)),U.chipMat??(U.chipMat=ct(3875860)));o.position.set(s,.013,r),e.add(o)}break}default:Fe[i]?.racket&&e.add(Bh(Fe[i].racket==="padel",Fe[i].color,i));break;case"cap":{let n=new G(U.capCrown??(U.capCrown=new Ht(.1,24,12,0,Math.PI*2,0,Math.PI/2)),U.capMat??(U.capMat=ct(2067035,{roughness:.8})));n.scale.set(1,.75,1.05);let s=new G(U.visor??(U.visor=new Xe(.1,.1,.008,24,1,!1,-Math.PI/2,Math.PI)),U.capMat);s.scale.set(.9,1,.9),s.position.set(0,.004,.06),e.add(n,s);break}}return e.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e}function o_(){return U.gripLabel??(U.gripLabel=(()=>{let i=document.createElement("canvas");i.width=64,i.height=128;let e=i.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,64,128),e.fillStyle="#e04a4a",e.fillRect(0,20,64,24),e.fillStyle="#1b2420",e.font="700 18px Outfit, Arial",e.textAlign="center",e.fillText("GRIP",32,80),e.font="500 13px Outfit, Arial",e.fillText("x3",32,102);let t=new pn(i);return t.colorSpace=Ct,t})())}function Bh(i=!1,e=null,t=null){var r;let n=new Oe,s=e!=null?U[r="acc"+e]??(U[r]=new re({color:e,roughness:.3})):null;if(i){let o=new si;o.absellipse(0,0,.13,.15,0,Math.PI*2);let a=[];for(let u=-2;u<=2;u++)for(let h=-2;h<=2;h++){if(u*u+h*h>6)continue;let f=new hs;f.absarc(u*.045,h*.05,.009,0,Math.PI*2,!0),a.push(f)}o.holes=a;let l=new G(U.padelHead??(U.padelHead=new Hn(o,{depth:.035,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24})),U.padelMat??(U.padelMat=new re({color:1382170,roughness:.3})));l.position.set(0,.36,-.017);let c=new G(U.padelStripe??(U.padelStripe=new Hi(.14,.008,8,40)),t==="padelracket"||!s?U.lime??(U.lime=ct(13168714,{roughness:.4})):s);c.scale.set(.93,1.07,1),c.position.set(0,.36,0);let d=new G(U.padelHandle??(U.padelHandle=new Xe(.017,.019,.16,12)),U.gripMat??(U.gripMat=ct(2236962,{roughness:.9})));d.position.y=.11,n.add(l,c,d)}else{let o=s??U.frameMat??(U.frameMat=new re({color:3108832,roughness:.3})),a=new G(U.frame??(U.frame=new Hi(.13,.011,10,48)),o);a.scale.set(.8,1.05,1),a.position.y=.47;let l=new G(U.strings??(U.strings=new us(.128,32)),U.stringMat??(U.stringMat=new re({map:a_(),transparent:!0,side:Tt,roughness:.6,depthWrite:!1})));l.scale.set(.8,1.05,1),l.position.y=.47;let c=U.throat??(U.throat=new Xe(.008,.01,.17,8));for(let u of[-1,1]){let h=new G(c,o);h.position.set(u*.035,.27,0),h.rotation.z=u*.28,n.add(h)}let d=new G(U.handle??(U.handle=new Xe(.016,.018,.2,8)),U.gripMat??(U.gripMat=ct(2236962,{roughness:.9})));d.position.y=.1,n.add(a,l,d)}return n.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),n}function a_(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.strokeStyle="rgba(245,245,235,0.9)",e.lineWidth=1.4;for(let n=4;n<128;n+=8)e.beginPath(),e.moveTo(n,0),e.lineTo(n,128),e.moveTo(0,n),e.lineTo(128,n),e.stroke();let t=new pn(i);return t.colorSpace=Ct,t}function Mf(i,e,t,n){let s=new si,r=-i/2,o=-t/2;return s.moveTo(r+n,o),s.lineTo(r+i-n,o),s.quadraticCurveTo(r+i,o,r+i,o+n),s.lineTo(r+i,o+t-n),s.quadraticCurveTo(r+i,o+t,r+i-n,o+t),s.lineTo(r+n,o+t),s.quadraticCurveTo(r,o+t,r,o+t-n),s.lineTo(r,o+n),s.quadraticCurveTo(r,o,r+n,o),new Hn(s,{depth:e,bevelEnabled:!1}).rotateX(-Math.PI/2).translate(0,-e/2,0)}var Ha={};function vr(i){return Ha[i]??(Ha[i]=r_(i)),Ha[i].clone()}function Ef(i){var c;let[e,t,n]=bf[i],s=yf(i),r=U[c="boxMat-"+i]??(U[c]=new re({map:s,roughness:.85})),o=U.boxPlain??(U.boxPlain=new re({color:13214315,roughness:.85})),a=new G(new je(e,t,n),[r,r,o,o,r,r]);a.castShadow=!0,a.receiveShadow=!0;let l=new G(new We(.07,n+.002),U.tape??(U.tape=new re({color:14205850,roughness:.4})));return l.rotation.x=-Math.PI/2,l.position.y=t/2+.002,a.add(l),a.userData.size=[e,t,n],a}var l_=[15979187,15251604,13209190,10249796,7226928,16243909],c_=[2825492,5913122,9200185,14201450,1710618,10506797,13224393],h_=[16777215,2059082,3108832,14699082,15911244,8015830,1382170,16747069,4175782,16032696],u_=[16777215,1780292,1382170,3817544,2772858],Qe={},Hh=new Map,wn=(i,e=.7)=>{let t=i+":"+e;return Hh.has(t)||Hh.set(t,new re({color:i,roughness:e})),Hh.get(t)};function Va(i,e,t){var s;Qe[s="cap"+i+e]??(Qe[s]=new ii(e,i,6,14).translate(0,-i/2-e*.3,0));let n=new G(Qe["cap"+i+e],t);return n.castShadow=!0,n}function Ga(i){let e=f_(Math.floor(i.seed*1e9)),t=y=>y[Math.floor(e()*y.length)],n={reception:2059082,keeper:7043642,security:1382170,barman:15921904,cook:16777215,worker:16747546},s=i.role in n,r=!!i.cust?.vip,o=wn(t(l_),.6),a=wn(t(c_),.8),l=wn(s?n[i.role]:r?13938487:t(h_),.75),c=wn(s?i.role==="worker"?3099243:1780292:t(u_),.75),d=wn(s?2763306:16053488,.5),u=e()<.48,h=.92+e()*.16,f=new Oe,g=new Oe;f.add(g);let M=new Oe;M.position.y=.92,g.add(M);let m=new G(Qe.pelvis??(Qe.pelvis=new ii(.15,.08,6,14).rotateZ(Math.PI/2)),c);m.scale.set(1,1,.75),m.castShadow=!0,M.add(m);let p=new G(Qe.torso??(Qe.torso=new ii(.16,.34,8,16).translate(0,.3,0)),l);if(p.scale.set(1.05,1,u?.68:.72),p.castShadow=!0,M.add(p),u&&!s&&e()<.6){let y=new G(Qe.skirt??(Qe.skirt=new Xe(.16,.25,.26,18,1,!0).translate(0,-.08,0)),wn(c.color.getHex(),.75));y.material.side=Tt,y.castShadow=!0,M.add(y)}let x=new Oe;x.position.y=.66,M.add(x);let _=new G(Qe.neck??(Qe.neck=new Xe(.05,.055,.1,10).translate(0,.04,0)),o);x.add(_);let v=new G(Qe.head??(Qe.head=new Ht(.115,24,18)),o);v.scale.set(.92,1.08,1),v.position.y=.2,v.castShadow=!0,x.add(v);let I=new G(Qe.hair??(Qe.hair=new Ht(.122,24,14,0,Math.PI*2,0,Math.PI*.55)),a);if(I.scale.set(.95,1.08,1.04),I.position.set(0,.215,-.012),I.rotation.x=-.25,x.add(I),u&&e()<.7){let y=new G(Qe.tail??(Qe.tail=new ii(.035,.14,4,8)),a);y.position.set(0,.18,-.13),y.rotation.x=.5,x.add(y)}if(i.role==="worker"||i.role==="cook"){let y=new G(i.role==="worker"?Qe.helmet??(Qe.helmet=new Ht(.13,20,10,0,Math.PI*2,0,Math.PI/2)):Qe.toque??(Qe.toque=new Xe(.11,.1,.16,16)),wn(i.role==="worker"?16765466:16777215,.5));y.position.y=i.role==="worker"?.24:.36,y.castShadow=!0,x.add(y)}else if(i.role==="security"){let y=new G(Qe.secCap??(Qe.secCap=new Ht(.122,20,10,0,Math.PI*2,0,Math.PI/2)),wn(1382170,.7));y.position.y=.23,y.scale.set(1,.8,1.05),x.add(y)}else if(r){let y=new G(Qe.glasses??(Qe.glasses=new je(.17,.035,.02)),wn(1118481,.2));y.position.set(0,.215,.105),x.add(y)}else if(!s&&e()<.3){let y=new G(Qe.band??(Qe.band=new Hi(.112,.016,8,24)),wn(16777215,.8));y.rotation.x=Math.PI/2-.15,y.position.y=.25,x.add(y)}for(let y of[-1,1]){let A=new G(Qe.eye??(Qe.eye=new Ht(.012,8,6)),wn(1776411,.3));A.position.set(y*.04,.215,.103),x.add(A)}let S={};for(let[y,A]of[["L",1],["R",-1]]){let F=new Oe;F.position.set(.215*A,.55,0),M.add(F);let k=Va(.2,.05,l);F.add(k);let X=new Oe;X.position.y=-.27,F.add(X);let te=Va(.19,.042,o);X.add(te);let z=new Oe;z.position.y=-.27,X.add(z),z.add(new G(Qe.hand??(Qe.hand=new Ht(.045,12,10)),o)),S["shoulder"+y]=F,S["elbow"+y]=X,S["hand"+y]=z;let ee=new Oe;ee.position.set(.095*A,.9,0),g.add(ee);let Y=Va(.3,.07,u&&!s?o:c);ee.add(Y);let ue=new Oe;ue.position.y=-.42,ee.add(ue);let ve=Va(.3,.055,s?c:o);ue.add(ve);let ye=new G(Qe.foot??(Qe.foot=new ii(.05,.12,4,10).rotateX(Math.PI/2).translate(0,-.42,.04)),d);ye.castShadow=!0,ue.add(ye),S["hip"+y]=ee,S["knee"+y]=ue}let w=null;if(i.holdsRacket){let y=i.cust?.sport==="padel";w=Bh(y,t(y?[13168714,8015830,16747069]:[3108832,15245850,14039610,1579292,16736162])),w.rotation.x=Math.PI/2,w.position.set(0,-.02,.02),w.scale.setScalar(1),S.handR.add(w)}let C=null;if(i.role==="keeper"){C=new Oe;let y=new G(new Xe(.015,.015,1.4,8),wn(10189386,.6));y.position.y=-.5;let A=new G(new je(.9,.06,.14),wn(3815994,.9));A.position.y=-1.2,C.add(y,A),C.rotation.x=.5,S.handR.add(C)}return f.scale.setScalar(h),f.traverse(y=>{y.isMesh&&(y.receiveShadow=!1)}),{root:f,body:g,hips:M,neck:x,limbs:S,racket:w,phase:e()*10,speed:0,swingT:-1,lastX:i.x,lastZ:i.z,offsetX:0,offsetZ:0,lookYaw:0,bubble:null,bubbleT:0,swing(){this.swingT=0},update(y,A){let F=(A.x-this.lastX)/Math.max(y,1e-4),k=(A.z-this.lastZ)/Math.max(y,1e-4);this.lastX=A.x,this.lastZ=A.z,f.visible=!A.hidden;let X=Math.min(3,Math.hypot(F,k));this.speed=Wt(this.speed,X,10,y),f.position.set(A.x+this.offsetX,0,A.z+this.offsetZ);let te=A.rot;A.look&&A.action==="browse"&&(te=Math.atan2(A.look.x-A.x,A.look.z-A.z)),f.rotation.y=sf(f.rotation.y,te,10,y);let z=this.limbs,ee=lt(this.speed/1.4,0,1.4);this.phase+=y*(2.2+this.speed*3.2);let Y=Math.sin(this.phase),ue=Y*.55*ee,ve=-Y*.55*ee,ye=Math.max(0,-Math.cos(this.phase))*.8*ee,we=Math.max(0,Math.cos(this.phase))*.8*ee,me=-Y*.45*ee,B=Y*.45*ee,Z=-.25,ae=-.25,de=.06,Se=-.06,Ce=Math.abs(Math.cos(this.phase))*.035*ee,ze=0,Ye=.03*ee;if(A.action==="play"){let j=1-ee;ye+=.35*j,we+=.35*j,ue-=.2*j,ve-=.2*j,Ye+=.18*j,Ce-=.06*j,B=-.7,ae=-.9,me=-.4,Z=-.8,Ce+=Math.abs(Math.sin(this.phase*1.8))*.025*j}else if(A.action==="browse")B=-1+Math.sin(this.phase*.7)*.15,ae=-.4,this.neck.rotation.x=.15;else if(A.action==="clean"){let j=Math.sin(this.phase*1.4);B=-.6+j*.35,me=-.6+j*.35,ae=-.5,Z=-.5,Ye+=.2}else if(A.action==="serve")B=-.9+Math.sin(this.phase*1.3)*.2,ae=-.6,me=-.4,Z=-1;else if(A.action==="hammer"){let j=Math.sin(this.phase*3.2);B=-1.6+Math.max(0,j)*1.2,ae=-.4,me=-.6,Z=-.6,Ye+=.15}else A.role==="reception"||A.role==="barman"||A.role==="cook"?(B=-.35,me=-.35,ae=-1.2,Z=-1.2):A.role==="security"&&(B=.15,me=.15,ae=-.2,Z=-.2);if(A.action!=="browse"&&(this.neck.rotation.x=Wt(this.neck.rotation.x,0,6,y)),this.swingT>=0){this.swingT+=y;let j=this.swingT/.55;j>=1?this.swingT=-1:(ze=j<.4?-.9*(j/.4):-.9+1.8*Math.min(1,(j-.4)/.35),B=-1.2,ae=-.3,Se=j<.4?-.9:.4)}z.hipL.rotation.x=Wt(z.hipL.rotation.x,-ue,14,y),z.hipR.rotation.x=Wt(z.hipR.rotation.x,-ve,14,y),z.kneeL.rotation.x=Wt(z.kneeL.rotation.x,ye,14,y),z.kneeR.rotation.x=Wt(z.kneeR.rotation.x,we,14,y),z.shoulderL.rotation.x=Wt(z.shoulderL.rotation.x,me,12,y),z.shoulderR.rotation.x=Wt(z.shoulderR.rotation.x,B,16,y),z.shoulderL.rotation.z=Wt(z.shoulderL.rotation.z,de,12,y),z.shoulderR.rotation.z=Wt(z.shoulderR.rotation.z,Se,16,y),z.elbowL.rotation.x=Wt(z.elbowL.rotation.x,Z,12,y),z.elbowR.rotation.x=Wt(z.elbowR.rotation.x,ae,12,y),this.hips.rotation.y=Wt(this.hips.rotation.y,ze,16,y),this.hips.rotation.x=Wt(this.hips.rotation.x,Ye,8,y),this.body.position.y=Ce,this.bubble&&(this.bubbleT-=y,this.bubble.material.opacity=lt(this.bubbleT/.4,0,1),this.bubble.position.y=2.15+(1-lt(this.bubbleT/3,0,1))*.15,this.bubbleT<=0&&(f.remove(this.bubble),this.bubble.material.map.dispose(),this.bubble.material.dispose(),this.bubble=null))},say(y,A){this.bubble&&(f.remove(this.bubble),this.bubble.material.map.dispose(),this.bubble.material.dispose());let F=d_(y,A),k=new rr(new cs({map:F,transparent:!0,depthTest:!1})),X=F.image.width/F.image.height;k.scale.set(.42*X,.42,1),k.position.y=2.15,k.renderOrder=10,f.add(k),this.bubble=k,this.bubbleT=3.2}}}function d_(i,e){let t=document.createElement("canvas"),n=t.getContext("2d");n.font="600 34px Outfit, Arial, sans-serif";let s=Math.ceil(n.measureText(i).width)+56,r=76;t.width=s,t.height=r+16;let o=t.getContext("2d");o.font="600 34px Outfit, Arial, sans-serif";let a=e==="good"?"#e9f8ee":e==="info"?"#ffffff":"#fff1ec",l=e==="good"?"#2e9c5d":e==="info"?"#9aa5a0":"#d9673a";o.fillStyle=a,o.strokeStyle=l,o.lineWidth=4,o.beginPath(),o.roundRect(2,2,s-4,r-4,30),o.fill(),o.stroke(),o.beginPath(),o.moveTo(s/2-12,r-3),o.lineTo(s/2,r+12),o.lineTo(s/2+12,r-3),o.fill(),o.fillStyle="#1b2420",o.textAlign="center",o.textBaseline="middle",o.fillText(i,s/2,r/2);let c=new pn(t);return c.colorSpace=Ct,c}function f_(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Ft=(i,e={})=>new re({color:i,roughness:.7,...e}),$n=2.8,p_={buvette:{title:"BUVETTE",stripe:["#c0392b","#fbfaf6"],wall:7031342,accent:12597547,items:["beer","soda","coffee","juice"]},snack:{title:"SNACK",stripe:["#f2c94c","#1f6b4a"],wall:3108698,accent:15911244,items:["sandwich","panini","pizza","cookie"]}};function Pt(i,e,t,n,{cast:s=!0,receive:r=!0}={}){let o=new G(new je(i,e,t),n);return o.castShadow=s,o.receiveShadow=r,o}function yr(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=new pn(n);return r.colorSpace=Ct,r.anisotropy=4,{tex:r,redraw:(...o)=>{s.clearRect(0,0,i,e),t(s,i,e,...o),r.needsUpdate=!0}}}var Sf=(i,e)=>wt(256,64,(t,n,s)=>{for(let r=0;r<8;r++)t.fillStyle=r%2?e:i,t.fillRect(r*n/8,0,n/8,s);t.fillStyle="rgba(0,0,0,0.12)",t.fillRect(0,s-6,n,6)});function Tf(i,e,t){let n={};for(let u of Object.keys(Ot))n[u]=r(u);let s=a();function r(u){let h=Ot[u],f=p_[u],g=Tn[u],M=new Oe;i.add(M);let m=h.x1-h.x0,p=h.z1-h.z0,x=(h.x0+h.x1)/2,_=(h.z0+h.z1)/2,v={key:u,S:h,root:M,parts:[],workers:[],built:!1,buildingShown:!1},I=new Oe,S=new G(new We(m,p+6),new on({color:2059082,transparent:!0,opacity:.12,depthWrite:!1}));S.rotation.x=-Math.PI/2,S.position.set(x,.03,_+3),I.add(S);let w=yr(512,320,(P,$,Q,ge)=>{P.fillStyle="#fbfaf6",P.fillRect(0,0,$,Q),P.fillStyle="#1f6b4a",P.fillRect(0,0,$,70),P.fillStyle="#fff",P.font="800 44px Outfit, Arial",P.textAlign="center",P.textBaseline="middle",P.fillText(ge[0],$/2,36),P.fillStyle="#1b2420",P.font="600 34px Outfit, Arial",ge.slice(1).forEach((Je,ut)=>P.fillText(Je,$/2,120+ut*58))}),C=new G(new We(1.6,1),new re({map:w.tex,roughness:.6}));C.position.set(x,1.5,h.z1+3.5);for(let P of[-.7,.7]){let $=Pt(.06,2,.06,Ft(7031342));$.position.set(x+P,1,h.z1+3.48),I.add($)}I.add(C),M.add(I),v.plot=I,v.plotSign=w;let b=new Oe,y=new re({map:wt(128,64,(P,$,Q)=>{P.fillStyle="#f4f4f0",P.fillRect(0,0,$,Q),P.fillStyle="#d9673a";for(let ge=-2;ge<6;ge++)P.beginPath(),P.moveTo(ge*32,Q),P.lineTo(ge*32+16,Q),P.lineTo(ge*32+48,0),P.lineTo(ge*32+32,0),P.fill()}),roughness:.6,side:Tt}),A=h.x0-.6,F=h.x1+.6,k=h.z0-.6,X=h.z1+.6,te=(P,$,Q,ge)=>{let Je=Math.hypot(Q-P,ge-$),ut=new G(new We(Je,1.1),y);ut.position.set((P+Q)/2,.6,($+ge)/2),ut.rotation.y=-Math.atan2(ge-$,Q-P),b.add(ut);for(let et=0;et<=Math.ceil(Je/2);et++){let Qt=et/Math.ceil(Je/2),hn=Pt(.5,.12,.25,Ft(3817285));hn.position.set(P+(Q-P)*Qt,.06,$+(ge-$)*Qt),b.add(hn)}};te(A,k,F,k),te(A,X,F,X),te(A,k,A,X),te(F,k,F,X);let z=yr(512,256,(P,$,Q,ge)=>{P.fillStyle="#ffd21a",P.fillRect(0,0,$,Q),P.fillStyle="#1b2420",P.font="800 40px Outfit, Arial",P.textAlign="center",P.textBaseline="middle",P.fillText(`CHANTIER \xB7 ${g.name.toUpperCase()}`,$/2,52),P.fillStyle="rgba(0,0,0,0.15)",P.fillRect(40,110,$-80,46),P.fillStyle="#1f6b4a",P.fillRect(40,110,($-80)*(ge??0),46),P.fillStyle="#1b2420",P.font="700 36px Outfit, Arial",P.fillText(`${Math.floor((ge??0)*100)} %`,$/2,205)}),ee=new G(new We(1.8,.9),new re({map:z.tex,roughness:.6}));ee.position.set(x,1.6,X+.05),b.add(ee);let Y=new Oe,ue=new G(new Xe(.28,.42,.7,16),Ft(16747546,{roughness:.5}));ue.rotation.z=1.1,ue.position.y=.8,Y.add(ue,Pt(.8,.5,.5,Ft(3817285))),Y.children[1].position.y=.3,Y.position.set(h.side<0?F+1.2:A-1.2,0,X-1),b.add(Y),v.drum=ue;let ve=new Oe;for(let P=0;P<12;P++){let $=Pt(.4,.2,.2,Ft(11119010,{roughness:.95}));$.position.set(P%3*.42-.42,.22+Math.floor(P/6)*.21,Math.floor(P/3)%2*.22-.11),ve.add($)}ve.add(Pt(1.3,.12,.5,Ft(11766621))),ve.children[ve.children.length-1].position.y=.06,ve.position.set(h.side<0?F+1.2:A-1.2,0,k+1.5),b.add(ve),b.visible=!1,M.add(b),v.site=b,v.siteSign=z;let ye=new Oe;M.add(ye),v.building=ye;let we=(P,$,Q,ge,Je,ut=!0)=>{let et=new Oe;return et.position.set($,Q,ge),et.add(P),ut&&(P.position.y+=P.geometry.parameters?.height/2||0),et.userData.stage=Je,ye.add(et),v.parts.push(et),et},me=Fa(),B=new re({map:me,roughness:.9});we(Pt(m+.4,.12,p+.4,B),x,0,_,[.02,.12]);let Z=wt(256,256,(P,$,Q)=>{P.fillStyle="#e9e4da",P.fillRect(0,0,$,Q),P.strokeStyle="#c9c2b4",P.lineWidth=3;for(let ge=0;ge<=4;ge++)P.beginPath(),P.moveTo(ge*64,0),P.lineTo(ge*64,Q),P.moveTo(0,ge*64),P.lineTo($,ge*64),P.stroke()},{repeat:[m/1.2,p/1.2]}),ae=new G(new We(m-.3,p-.3),new re({map:Z,roughness:.5}));ae.rotation.x=-Math.PI/2;let de=we(ae,x,.125,_,[.12,.16],!1);de.children[0].receiveShadow=!0;let Se=Ba().clone();Se.needsUpdate=!0,Se.wrapS=Se.wrapT=$t,Se.repeat.set(2,1);let Ce=new re({map:Se,color:f.wall,roughness:.75}),ze=Ft(16052714,{roughness:.9}),Ye=.25,j=[Ce,ze,Ce,Ce,Ce,ze];we(Pt(m,$n,Ye,j),x,.12,h.z0,[.18,.55]);let le=h.side<0?h.x0:h.x1;we(Pt(Ye,$n,p,j),le,.12,_,[.22,.6]);let L=h.door;we(Pt(Ye,$n,L.z0-h.z0,j),L.x,.12,(h.z0+L.z0)/2,[.24,.6]),we(Pt(Ye,$n,h.z1-L.z1,j),L.x,.12,(L.z1+h.z1)/2,[.26,.62]),we(Pt(Ye,$n-2.2,L.z1-L.z0,j),L.x,2.32,(L.z0+L.z1)/2,[.58,.64]);let ke=Ft(2764595,{metalness:.5,roughness:.4});for(let P of[h.x0+.12,h.x1-.12])we(Pt(.2,$n,.2,ke),P,.12,h.z1-.1,[.3,.62]);we(Pt(m,.5,.22,Ce),x,$n-.38,h.z1-.1,[.62,.68]),we(Pt(m+.6,.18,p+.8,Ft(3883077,{roughness:.8})),x,$n+.12,_-.1,[.66,.76]);let he=Sf(...f.stripe);he.wrapS=$t,he.repeat.set(m/2,1);let Pe=new G(new We(m+.4,1.5),new re({map:he,roughness:.8,side:Tt}));Pe.rotation.x=-Math.PI/2+.45,Pe.castShadow=!0;let Me=we(Pe,x,$n-.05,h.z1+.65,[.78,.86],!1);Me.children[0].position.y=-.3;let Ee=h.counter;we(Pt(m,Ee.top-.05,Ee.maxZ-Ee.minZ,[Ce,Ce,ze,ze,Ce,ze]),x,.12,(Ee.minZ+Ee.maxZ)/2,[.72,.82]);let Ie=Ft(16118767,{roughness:.3});we(Pt(m+.1,.06,Ee.maxZ-Ee.minZ+.14,Ie),x,Ee.top+.06,(Ee.minZ+Ee.maxZ)/2,[.8,.84],!1);let R=yr(1024,220,P=>{P.fillStyle="#1b2420",P.fillRect(0,0,1024,220),P.fillStyle="#"+f.accent.toString(16).padStart(6,"0"),P.fillRect(0,190,1024,30),P.fillStyle="#fff",P.font="800 130px Outfit, Arial",P.textAlign="center",P.textBaseline="middle",P.fillText(f.title,512,100)});R.redraw();let E=new G(new We(3.6,.78),new re({map:R.tex,emissive:16777215,emissiveMap:R.tex,emissiveIntensity:.3})),q=we(E,x,$n+.62,h.z1+.32,[.9,.95],!1);v.signMat=E.material;let ie=yr(512,384,(P,$,Q,ge)=>{P.fillStyle="#20262a",P.fillRect(0,0,$,Q),P.strokeStyle="#8a6b45",P.lineWidth=14,P.strokeRect(7,7,$-14,Q-14),P.fillStyle="#f4f1ea",P.font="700 40px Outfit, Arial",P.textAlign="center",P.fillText(u==="buvette"?"\xC0 BOIRE":"\xC0 MANGER",$/2,62),P.font="500 32px Outfit, Arial",f.items.forEach((Je,ut)=>{P.textAlign="left",P.fillStyle=t.level>=Fe[Je].level?"#f4f1ea":"rgba(244,241,234,0.35)",P.fillText(Fe[Je].short,40,130+ut*62),P.textAlign="right",P.fillText(ge?Ze(ge[Je]):"",$-40,130+ut*62)})}),oe=new G(new We(1.4,1.05),new re({map:ie.tex,roughness:.8}));we(oe,x,1.95,h.z0+.14,[.92,.96],!1),v.menu=ie;let ne=new G(new We(1.6,.5),new re({color:16777215,emissive:16773848,emissiveIntensity:1.1}));ne.rotation.x=Math.PI/2,we(ne,x,$n+.02,_,[.94,.97],!1);let Re=new Oe,be=Ft(14212578,{metalness:.9,roughness:.2});if(be.userData.reflective=!0,u==="buvette"){let P=new Oe;P.add(Pt(.5,.36,.14,be)),P.children[0].position.y=.18;for(let Q=0;Q<3;Q++){let ge=new G(new Xe(.018,.012,.2,10),Ft([12597547,15911244,2059082][Q]));ge.position.set(-.15+Q*.15,.46,.04);let Je=new G(new Xe(.012,.012,.08,8),be);Je.position.set(-.15+Q*.15,.28,.1),Je.rotation.x=Math.PI/2,P.add(ge,Je)}P.position.set(x-1.2,Ee.top+.09,(Ee.minZ+Ee.maxZ)/2),Re.add(P);let $=new re({color:16181160,roughness:.05,transparent:!0,opacity:.6});for(let Q=0;Q<4;Q++){let ge=new G(new Xe(.04,.032,.15,14),$);ge.position.set(x+.5+Q*.13,Ee.top+.165,(Ee.minZ+Ee.maxZ)/2+.1),Re.add(ge)}for(let[Q,ge]of[[-.6,.6],[.6,.65]]){let Je=new G(new Xe(.32,.32,.8,18),Ft(9067058,{roughness:.8}));Je.position.set((h.side<0?h.x0:h.x1)+Q*-h.side,.4,h.z1+ge),Je.castShadow=!0,Re.add(Je)}}else{let P=new re({color:14676471,roughness:.05,transparent:!0,opacity:.35,depthWrite:!1});P.userData.reflective=!0;let $=new G(new je(1.6,.42,.5),P);$.position.set(x+.9,Ee.top+.3,(Ee.minZ+Ee.maxZ)/2),Re.add($);for(let ge=0;ge<5;ge++){let Je=vr(["sandwich","panini","pizza","sandwich","cookie"][ge]);Je.position.set(x+.3+ge*.3,Ee.top+.1,(Ee.minZ+Ee.maxZ)/2),Re.add(Je)}let Q=new Oe;Q.add(Pt(.5,.12,.4,be),Pt(.5,.1,.4,Ft(1778720))),Q.children[0].position.y=.06,Q.children[1].position.y=.17,Q.position.set(x-1.3,Ee.top+.09,(Ee.minZ+Ee.maxZ)/2),Re.add(Q)}Re.traverse(P=>{P.isMesh&&(P.castShadow=!0)});let Te=new Oe;Te.add(Re),Te.userData.stage=[.96,1],ye.add(Te),v.parts.push(Te);let nt=new Oe,pe=Ft(10134440,{metalness:.6,roughness:.4}),Ne=Ft(11766621,{roughness:.9});for(let[P,$]of[[h.x0-.5,h.z0-.5],[h.x1+.5,h.z0-.5],[h.x0-.5,h.z1+.4],[h.x1+.5,h.z1+.4],[x,h.z0-.5],[x,h.z1+.4]]){let Q=Pt(.06,3.4,.06,pe);Q.position.set(P,1.7,$),nt.add(Q)}for(let P of[1.2,2.4])for(let $ of[h.z0-.5,h.z1+.4]){let Q=Pt(m+1,.05,.4,Ne);Q.position.set(x,P,$),nt.add(Q)}nt.visible=!1,M.add(nt),v.scaffold=nt;let Be=new Oe,$e=me.clone();$e.needsUpdate=!0,$e.wrapS=$e.wrapT=$t,$e.repeat.set(5,3);let Le=new G(new We(m+2,6.4),new re({map:$e,color:15262422,roughness:.9}));Le.rotation.x=-Math.PI/2,Le.position.set(x,.018,h.z1+3.2),Le.receiveShadow=!0,Be.add(Le);let N=Ft(10189386,{roughness:.8}),se=new re({map:Sf(...f.stripe),roughness:.85,side:Tt});for(let P of h.tables){let $=new Oe,Q=new G(new Xe(.5,.5,.05,24),N);Q.position.y=.74;let ge=new G(new Xe(.04,.06,.74,10),ke);ge.position.y=.37,$.add(Q,ge);for(let[et,Qt]of[[.85,0],[-.85,0],[0,.85],[0,-.85]]){let hn=new G(new Xe(.18,.18,.45,12),N);hn.position.set(et,.225,Qt),$.add(hn)}let Je=new G(new Xe(.025,.025,2.4,8),ke);Je.position.y=1.2;let ut=new G(new Zr(1.25,.45,16,1,!0),se);ut.position.y=2.3,$.add(Je,ut),$.traverse(et=>{et.isMesh&&(et.castShadow=!0,et.receiveShadow=!0)}),$.position.set(P.x,0,P.z),Be.add($)}let xe=new re({color:16773828,emissive:16765562,emissiveIntensity:.2}),D=[h.x0-.8,h.x1+.8];for(let P of D){let $=new G(new Xe(.05,.05,3.2,8),ke);$.position.set(P,1.6,h.z1+5.7),$.castShadow=!0,Be.add($)}for(let P=0;P<=16;P++){let $=P/16,Q=D[0]+(D[1]-D[0])*$,ge=new G(new Ht(.055,8,6),xe);ge.position.set(Q,3.05-Math.sin($*Math.PI)*.6,h.z1+5.7),Be.add(ge)}v.bulbs=xe,Be.visible=!1,M.add(Be),v.terrace=Be;let ce=new G(new je(m,.9,1.6),new on({visible:!1}));ce.position.set(x,Ee.top+.2,(Ee.minZ+Ee.maxZ)/2),ce.userData.interact={kind:"stand",stand:u},ce.visible=!0,v.hit=ce;let W=[{x:h.x0-1.2,z:_,rot:Math.PI/2},{x:h.x1+1.2,z:h.z0+1,rot:-Math.PI/2},{x,z:h.z1+1.4,rot:Math.PI},{x:x-1.5,z:h.z0-1.3,rot:0}];return v.makeWorkers=()=>{for(let P=0;P<3;P++){let $={id:-1-P,role:"worker",seed:(P+1)*.173+(h.side>0?.5:0),x:W[P].x,z:W[P].z,rot:W[P].rot,action:"hammer",path:[],look:null,k:P,t:Math.random()*6},Q=Ga($);Q.root.position.set($.x,0,$.z),M.add(Q.root),v.workers.push({p:$,view:Q})}},v}function o(u,h=!1){let f=n[u],g=t.facilities[u],M=Tn[u],m=g.built?1:g.building?g.progress:0;if(f.plot.visible=!g.built&&!g.building,f.plot.visible){let p=t.level>=M.level;f.plotSign.redraw([`EMPLACEMENT ${M.name.toUpperCase()}`,oi(M.price),p?"Ordinateur \u203A Club":`Niveau ${M.level} requis`])}if(f.site.visible=!!g.building,f.scaffold.visible=!!g.building&&m>.14&&m<.9,f.terrace.visible=!!g.built,g.building&&!f.workers.length&&f.makeWorkers(),!g.building&&f.workers.length){for(let p of f.workers)f.root.remove(p.view.root);f.workers.length=0}for(let p of f.parts){let[x,_]=p.userData.stage,v=lt((m-x)/(_-x),0,1);p.visible=v>0,p.scale.y=Math.max(.001,v)}g.building&&f.siteSign.redraw(m),g.built&&!f.built&&(f.built=!0,e.push(f.hit),f.root.add(f.hit),f.menu.redraw(t.prices))}function a(){let u=new Oe;i.add(u);let h=pr.barrierX,f=vs-.8,g=new Oe,M=Pt(.35,1.1,.35,Ft(15911244,{roughness:.5}));M.position.set(h,.55,f-1.9);let m=new Oe;m.position.set(h,1,f-1.9);let p=new re({map:wt(256,16,(y,A,F)=>{for(let k=0;k<8;k++)y.fillStyle=k%2?"#c0392b":"#ffffff",y.fillRect(k*32,0,32,F)}),roughness:.5}),x=Pt(.08,.08,3.6,p);x.position.z=1.8,m.add(x);let _=new Oe;_.add(Pt(.5,1.5,.35,Ft(2059082,{roughness:.5}))),_.children[0].position.y=.75;let v=yr(256,160,y=>{y.fillStyle="#c8e6c9",y.fillRect(0,0,256,160),y.fillStyle="#123",y.font="700 40px Outfit, Arial",y.textAlign="center",y.fillText("PARKING",128,60),y.font="600 30px Outfit, Arial",y.fillText("Ticket",128,115)});v.redraw();let I=new G(new We(.34,.22),new re({map:v.tex,emissive:16777215,emissiveMap:v.tex,emissiveIntensity:.4}));I.position.set(0,1.15,.18),_.add(I);let S=yr(256,256,y=>{y.fillStyle="#2f6fe0",y.fillRect(0,0,256,256),y.fillStyle="#fff",y.font="800 190px Outfit, Arial",y.textAlign="center",y.textBaseline="middle",y.fillText("P",128,140)});S.redraw();let w=new G(new We(.6,.6),new re({map:S.tex}));w.position.set(0,2.2,0),_.add(w);let C=Pt(.06,2,.06,Ft(10134440));C.position.y=1,C.position.z=-.1,_.add(C),_.position.set(gs.x,0,gs.z),_.rotation.y=Math.PI/2,g.add(M,m,_),g.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),u.add(g);let b=new Oe;for(let y=0;y<5;y++){let A=new G(new Zr(.18,.5,12),Ft(16738816,{roughness:.5}));A.position.set(h-2+y,.25,f-2.6),b.add(A)}return u.add(b),{group:g,arm:m,cones:b,open:0}}function l(){let u=t.facilities.parking;s.group.visible=!!u.built||u.building&&u.progress>.5,s.group.scale.y=u.built?1:lt((u.progress-.5)*2,.01,1),s.cones.visible=!!u.building}for(let u of Object.keys(n))o(u,!0);l();let c=null,d=0;return{refresh(u){u==="parking"?l():n[u]&&o(u)},refreshAll(){for(let u of Object.keys(n))o(u);l()},refreshMenus(){for(let u of Object.values(n))u.built&&u.menu.redraw(t.prices)},setBarrier(u){s.target=u?1:0},update(u,h){d+=u;for(let g of Object.values(n)){g.site.visible&&(g.drum.rotation.y+=u*2.5);for(let M of g.workers){if(M.p.t-=u,M.p.t<=0&&(M.p.t=4+Math.random()*5,M.p.action=M.p.action==="hammer"?"walk":"hammer",M.p.target={x:M.p.x+(Math.random()-.5)*2,z:M.p.z+(Math.random()-.5)*1.2}),M.p.action==="walk"&&M.p.target){let m=M.p.target.x-M.p.x,p=M.p.target.z-M.p.z,x=Math.hypot(m,p);x>.05?(M.p.x+=m/x*u*1.1,M.p.z+=p/x*u*1.1,M.p.rot=Math.atan2(m,p)):M.p.action="hammer"}M.view.update(u,M.p)}}s.open+=((s.target??0)-s.open)*(1-Math.exp(-4*u)),s.arm.rotation.x=-s.open*1.4;let f=h>.35;if(f!==c){c=f;for(let g of Object.values(n))g.bulbs.emissiveIntensity=f?2.2:.2,g.signMat.emissiveIntensity=f?1.1:.3}}}}function wf(i){let e=i.map(s=>s.index?s.toNonIndexed():s),t=Object.keys(e[0].attributes),n=new Kt;for(let s of t){let r=e[0].attributes[s].itemSize,o=e.reduce((c,d)=>c+d.attributes[s].array.length,0),a=new Float32Array(o),l=0;for(let c of e)a.set(c.attributes[s].array,l),l+=c.attributes[s].array.length;n.setAttribute(s,new sn(a,r))}return n}var m_=`
  varying vec3 vDir;
  void main() {
    vDir = normalize((modelMatrix * vec4(position, 0.0)).xyz);
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww;
  }`,g_=`
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
  }`,ai=[{h:6,top:2439782,hor:15312505,sun:16756848},{h:9,top:4949713,hor:13624306,sun:16773592},{h:13,top:4161488,hor:14018805,sun:16777215},{h:18,top:4882372,hor:15260868,sun:16769712},{h:20.3,top:3428492,hor:15769706,sun:16751184},{h:21.5,top:1450570,hor:5917290,sun:16742976},{h:23.5,top:659496,hor:1976130,sun:2241365}];function x_(i){let e=ai[0],t=ai[ai.length-1];for(let r=0;r<ai.length-1;r++)if(i>=ai[r].h&&i<=ai[r+1].h){e=ai[r],t=ai[r+1];break}i>ai[ai.length-1].h&&(e=t);let n=e===t?0:lt((i-e.h)/(t.h-e.h),0,1),s=(r,o)=>new tt(r).lerp(new tt(o),n);return{top:s(e.top,t.top),hor:s(e.hor,t.hor),sun:s(e.sun,t.sun)}}function Cf(i,e){let t=new Cn({uniforms:{uTop:{value:new tt},uHorizon:{value:new tt},uGround:{value:new tt(3820082)},uSunColor:{value:new tt},uSunDir:{value:new O(0,1,0)}},vertexShader:m_,fragmentShader:g_,side:nn,depthWrite:!1}),n=new G(new Ht(500,32,16),t);n.frustumCulled=!1,n.renderOrder=-1,i.add(n),i.fog=new da(13624306,90,260);let s=new ir(e),r=new sr,o=new G(new Ht(50,32,16),t);r.add(o);let a=null,l=new ba(16777215,3);l.castShadow=!0,l.shadow.mapSize.set(2048,2048),Object.assign(l.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:160}),l.shadow.bias=-4e-4,l.shadow.normalBias=.03,i.add(l,l.target);let c=new Ma(14675967,9077362,1);i.add(c);let d=new Ea(16774116,.9);i.add(d);let u=new G(new We(240,260),new re({map:uf(),roughness:.95}));u.rotation.x=-Math.PI/2,u.position.set(0,0,-25),u.receiveShadow=!0,i.add(u);let h=Fa(),f=(me,B,Z,ae,de=.015)=>{let Se=h.clone();Se.needsUpdate=!0,Se.wrapS=Se.wrapT=$t,Se.repeat.set(Math.max(1,(B-me)/2),Math.max(1,(ae-Z)/2));let Ce=new G(new We(B-me,ae-Z),new re({map:Se,roughness:.9}));Ce.rotation.x=-Math.PI/2,Ce.position.set((me+B)/2,de,(Z+ae)/2),Ce.receiveShadow=!0,i.add(Ce)};f(-13,13,14,21),f(-1.6,1.6,21,26),f(-37,37,-3.4,-.6),f(-1.5,1.5,-44,-3.4),f(-12,12,-43.6,-41),f(-24,-21,-42,-3.4),f(-26,-23,-42,-3.4,.016),f(23,26,-16,-3.4,.016),f(-10.4,10.4,-.6,.02,.02);let g=new G(new We(44,14),new re({map:zh(),roughness:.92}));g.rotation.x=-Math.PI/2,g.position.set(0,.01,31),g.receiveShadow=!0,i.add(g);let M=new re({color:15921902,roughness:.7});for(let me=-20;me<=20;me+=2.6)if(!(Math.abs(me)<2.5))for(let B of[26.2,35.8]){let Z=new G(new We(.12,4.6),M);Z.rotation.x=-Math.PI/2,Z.position.set(me,.02,B),i.add(Z)}let m=[],p=(me,B,Z,ae)=>m.push({minX:me-Z,maxX:me+Z,minZ:B-ae,maxZ:B+ae});for(let[me,B]of[[-90,-22],[22,90]]){let Z=zh().clone();Z.needsUpdate=!0,Z.wrapS=Z.wrapT=$t,Z.repeat.set((B-me)/8,1);let ae=new G(new We(B-me,5),new re({map:Z,roughness:.92}));ae.rotation.x=-Math.PI/2,ae.position.set((me+B)/2,.012,31),ae.receiveShadow=!0,i.add(ae);for(let de=me+2;de<B-2;de+=6){let Se=new G(new We(3,.14),M);Se.rotation.x=-Math.PI/2,Se.position.set(de+1.5,.02,31),i.add(Se)}}let x=new Xe(.18,.28,3.2,10).translate(0,1.6,0),_=new re({color:5980976,roughness:.9}),I=wf([[0,0,0,2.1],[1.3,-.4,.4,1.5],[-1.2,-.3,-.5,1.6],[.3,1.1,-.6,1.5],[-.4,.7,1.1,1.4],[.6,-.8,-1.2,1.3]].map(([me,B,Z,ae])=>new Ht(ae,20,14).translate(me,B,Z))),S=new re({color:4880946,roughness:.85}),w=[],C=(me,B)=>{if(me>-14&&me<14&&B>-4&&B<39||me>-25&&me<25&&B>-4&&B<39||Math.abs(B-31)<4.5)return!0;for(let Z of Object.values(cn))if(Math.abs(me-Z.cx)<14&&B<Z.cz+22&&B>Z.cz-22)return!0;return Math.abs(me)<3&&B<0};for(let me=0;me<400&&w.length<70;me++){let B=(Math.random()*2-1)*70,Z=-95+Math.random()*150;C(B,Z)||Math.abs(B)<44&&Z>-86&&Z<0&&Math.random()<.7||w.push([B,Z,.8+Math.random()*.6])}for(let me=-40;me<=40;me+=8)Math.abs(me)>16&&w.push([me,40,1.1]);let b=new qr(x,_,w.length),y=new qr(I,S,w.length),A=new yt,F=new ti,k=new O,X=new O,te=new tt;w.forEach(([me,B,Z],ae)=>{p(me,B,.32*Z,.32*Z),F.setFromAxisAngle(new O(0,1,0),Math.random()*6.28),A.compose(X.set(me,0,B),F,k.set(Z,Z,Z)),b.setMatrixAt(ae,A),A.compose(X.set(me,4.2*Z,B),F,k.set(Z,Z*(.9+Math.random()*.3),Z)),y.setMatrixAt(ae,A),y.setColorAt(ae,te.setHSL(.24+Math.random()*.06,.45,.3+Math.random()*.1))}),b.castShadow=y.castShadow=!0,y.receiveShadow=!0,i.add(b,y);let z=new re({color:4156204,roughness:.95});for(let[me,B]of[[-22,-2],[2,22]]){p((me+B)/2,22.6,(B-me)/2,.45);let Z=new G(new je(B-me,1.1,.9),z);Z.position.set((me+B)/2,.55,22.6),Z.castShadow=Z.receiveShadow=!0,i.add(Z)}let ee=_f("TENNIS CLUB DES PLATANES",{w:1024,h:160,bg:"#1f6b4a",fg:"#ffffff",font:"700 70px Outfit, Arial, sans-serif",accent:"#e4f05a"}),Y=new G(new je(5.2,.8,.12),[new re({color:2059082}),new re({color:2059082}),new re({color:2059082}),new re({color:2059082}),new re({map:ee,roughness:.5}),new re({map:ee,roughness:.5})]);Y.position.set(-6,2.2,23.2),Y.castShadow=!0;let ue=new re({color:2764595,metalness:.6,roughness:.4});for(let me of[-1,1]){let B=new G(new Xe(.06,.06,2.6,10),ue);B.position.set(-6+me*2.3,1.3,23.2),p(-6+me*2.3,23.2,.12,.12),i.add(B)}i.add(Y);let ve=-10,ye=new O;function we(me,B){let Z=me/60,ae=x_(Z);t.uniforms.uTop.value.copy(ae.top),t.uniforms.uHorizon.value.copy(ae.hor),t.uniforms.uSunColor.value.copy(ae.sun);let de=lt((Z-6)/15,0,1),Se=Math.sin(de*Math.PI)*ms.degToRad(62)-(Z>21?(Z-21)*.08:0),Ce=ro(ms.degToRad(100),ms.degToRad(265),de);ye.set(Math.sin(Ce)*Math.cos(Se),Math.sin(Se),-Math.cos(Ce)*Math.cos(Se)*.6+.35).normalize(),t.uniforms.uSunDir.value.copy(ye);let ze=lt(ye.y*6,0,1);if(l.color.copy(ae.sun),l.intensity=3.2*ze,c.intensity=ro(.35,.85,lt(ye.y*3+.15,0,1)),d.intensity=ro(.75,.9,ze),c.color.copy(ae.top).lerp(new tt(16777215),.55).lerp(new tt(16767400),lt(1-ye.y*6,0,1)*.6),i.fog.color.copy(ae.hor),l.position.copy(B).addScaledVector(ye,80),l.target.position.copy(B),Math.abs(Z-ve)>1.5){ve=Z;let Ye=a;a=s.fromScene(r,.04),i.traverse(j=>{if(j.material)for(let le of[].concat(j.material))le.userData.reflective&&(le.envMap=a.texture,le.needsUpdate=!le.userData.hadEnv,le.userData.hadEnv=!0)}),Ye?.dispose()}return{night:1-ze,hour:Z}}return{setTime:we,sun:l,colliders:m}}function Pf(i){let e=new si;return i.forEach(([t,n],s)=>s?e.lineTo(t,n):e.moveTo(t,n)),e}var v_=Pf([[-2.15,.3],[2.1,.3],[2.2,.55],[2.15,.85],[1.2,.98],[.6,1.42],[-1,1.45],[-1.9,1.05],[-2.2,.95],[-2.25,.5]]),y_=Pf([[1.05,1],[.52,1.36],[-.95,1.38],[-1.72,1.04]]),Af=null,Rf=null;function Vh(i,e,t,n){Af??(Af=new Hn(v_,{depth:1.6,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:5,curveSegments:8}).translate(0,0,-.8)),Rf??(Rf=new Hn(y_,{depth:1.66,bevelEnabled:!0,bevelSize:.04,bevelThickness:.04,bevelSegments:3}).translate(0,0,-.83));let s=new Oe,r=new re({color:t,roughness:.25,metalness:.5});r.userData.reflective=!0;let o=new re({color:1713200,roughness:.05,metalness:.6});o.userData.reflective=!0;let a=new G(Af,r),l=new G(Rf,o);s.add(a,l);let c=new re({color:1381653,roughness:.9}),d=new re({color:12106946,metalness:.8,roughness:.3});for(let u of[-1.35,1.35])for(let h of[-.86,.86]){let f=new G(new Xe(.34,.34,.24,20).rotateX(Math.PI/2),c);f.position.set(u,.34,h);let g=new G(new Xe(.2,.2,.25,16).rotateX(Math.PI/2),d);g.position.copy(f.position),s.add(f,g)}return s.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),s.position.set(i,0,e),s.rotation.y=n+Math.PI/2,s}var Wa=[13685977,1911354,9051164,15921906,3104158,3817285,3042106,14721056];function If(i){let e=new Map;for(let n of mr){let s=ln[n],r=Vh(s.x,s.z,Wa[n%Wa.length],0);t(r,{x:s.x,z:s.z,heading:s.row>0?Math.PI:0}),i.add(r)}function t(n,s){n.position.set(s.x,0,s.z),n.rotation.set(0,s.heading-Math.PI/2,0)}return{arrive(n){let s=Vh(0,0,Wa[n.color%Wa.length],0);i.add(s);let r=gr(ln[n.spot],!1);t(s,Oa(r,0)),e.set(n.id,{mesh:s,route:r,t:0,state:"arriving",car:n})},parked(n){let s=e.get(n.id);s&&(s.state="parked",t(s.mesh,Oa(s.route,1e9)))},leave(n){let s=e.get(n.id);s&&(s.route=gr(ln[n.spot],!0),s.t=0,s.state="leaving")},remove(n){let s=e.get(n.id);s&&(i.remove(s.mesh),e.delete(n.id))},clear(){for(let n of e.values())i.remove(n.mesh);e.clear()},update(n){let s=!1;for(let r of e.values()){if(r.state==="parked")continue;r.t+=n;let o=Oa(r.route,r.t);o&&t(r.mesh,o),r.state==="arriving"&&o&&o.x>pr.barrierX-14&&o.x<pr.barrierX+4&&(s=!0)}return s}}}var Yt=(i,e={})=>new re({color:i,roughness:.6,...e});function Et(i,e,t,n,s,r,o,{cast:a=!0,receive:l=!0}={}){let c=new G(new je(i,e,t),n);return c.position.set(s,r,o),c.castShadow=a,c.receiveShadow=l,c}function _r(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e;let s=n.getContext("2d"),r=new pn(n);r.colorSpace=Ct,r.anisotropy=4;let o={tex:r,redraw:(...a)=>{t(s,i,e,...a),r.needsUpdate=!0}};return o.redraw(),o}function Lf(i,e){let t=new Oe;i.add(t);let n=Ke.height,s=Ke.maxX-Ke.minX,r=Ke.maxZ-Ke.minZ,o=(Ke.minX+Ke.maxX)/2,a=(Ke.minZ+Ke.maxZ)/2,l=new G(new We(s,r),new re({map:df(),roughness:.45}));l.rotation.x=-Math.PI/2,l.position.set(o,.025,a),l.receiveShadow=!0,t.add(l);let c=new re({map:pf(),roughness:.9}),d=new re({map:Ba(),roughness:.75}),u=.25,h=to/2,f=N=>["+x","-x","+y","-y","+z","-z"].map(se=>se===N?d:c),g=(N,se,xe,D,ce,W,P)=>t.add(Et(N,se,xe,f(P),D,ce,W)),M=s/2-h;g(M,n,u,Ke.minX+M/2,n/2,Ke.minZ,"-z"),g(M,n,u,Ke.maxX-M/2,n/2,Ke.minZ,"-z"),g(to,n-2.5,u,0,2.5+(n-2.5)/2,Ke.minZ,"-z"),g(u,n,r,Ke.minX,n/2,a,"-x"),g(u,n,r,Ke.maxX,n/2,a,"+x");let m=Yt(2764595,{metalness:.7,roughness:.35});m.userData.reflective=!0;let p=new re({color:12572902,roughness:.05,metalness:.1,transparent:!0,opacity:.18,envMapIntensity:1.5,depthWrite:!1});p.userData.reflective=!0;let x=Ke.maxZ;for(let N=Ke.minX;N<=Ke.maxX+.01;N+=2.5)Math.abs(N)<h+.05||t.add(Et(.1,n,.14,m,N,n/2,x));for(let N of[-h,h])t.add(Et(.12,n,.16,m,N,n/2,x));t.add(Et(s,.14,.16,m,o,n-.07,x)),t.add(Et(s,.12,.16,m,o,2.55,x)),t.add(Et(M,.3,.16,m,Ke.minX+M/2,.15,x)),t.add(Et(M,.3,.16,m,Ke.maxX-M/2,.15,x));for(let N of[-1,1]){let se=new G(new We(M,n-.3),p);se.position.set(N*(h+M/2),.3+(n-.3)/2,x),t.add(se)}let _=new G(new We(to,n-2.55),p);_.position.set(0,2.55+(n-2.55)/2,x),t.add(_);for(let N of[-1,1]){let se=new Oe,xe=new G(new We(1.05,2.35),p);xe.position.set(0,1.25,0),se.add(xe);for(let[D,ce,W,P]of[[1.2,.07,0,.035],[1.2,.07,0,2.465],[.07,2.5,-.565,1.25],[.07,2.5,.565,1.25]])se.add(Et(D,ce,.05,m,W,P,0,{cast:!1}));se.position.set(N*(h+.6),0,x+.12),t.add(se)}let v=Yt(3883077,{roughness:.8});t.add(Et(s+1.4,.35,r+2.2,v,o,n+.17,a+.6));let I=new re({color:2059082,roughness:.5});t.add(Et(s+1.45,.5,.12,I,o,n+.15,Ke.maxZ+1.75));let S=_r(1024,160,(N,se,xe)=>{N.fillStyle="#1f6b4a",N.fillRect(0,0,se,xe),N.fillStyle="#ffffff",N.font="800 92px Outfit, Arial, sans-serif",N.textAlign="center",N.textBaseline="middle",N.fillText("TENNIS \xB7 PADEL",se/2,xe/2+4)}),w=new G(new We(4.6,.72),new re({map:S.tex,emissive:16777215,emissiveMap:S.tex,emissiveIntensity:.25}));w.position.set(0,n+.95,Ke.maxZ+1.6),t.add(w),t.add(Et(4.8,.85,.1,v,0,n+.95,Ke.maxZ+1.54));let C=new G(new We(s,r),Yt(16052974,{roughness:.95}));C.rotation.x=Math.PI/2,C.position.set(o,n-.01,a),t.add(C);let b=new re({color:16777215,emissive:16774888,emissiveIntensity:1.2});for(let N=-7;N<=7;N+=3.5)for(let se=2.5;se<=12;se+=3.2){let xe=new G(new We(1.2,1.2),b);xe.rotation.x=Math.PI/2,xe.position.set(N,n-.03,se),t.add(xe)}let y=Dt.maxX-Dt.minX,A=Dt.maxZ-Dt.minZ,F=(Dt.minX+Dt.maxX)/2,k=(Dt.minZ+Dt.maxZ)/2;t.add(Et(y,Dt.top-.04,A-.1,[d,d,c,c,d,c],F,(Dt.top-.04)/2,k+.05));let X=new re({color:16118767,roughness:.25});X.userData.reflective=!0,t.add(Et(y+.1,.05,A+.12,X,F,Dt.top-.02,k));let te=Et(1.5,.008,.5,Yt(2238251,{roughness:.9}),io.x,Dt.top+.004,io.z,{cast:!1});t.add(te);let z=new Oe;z.position.set(Mh.x,Dt.top,Mh.z),z.rotation.y=Math.PI;let ee=Yt(12172996,{metalness:.8,roughness:.3});ee.userData.reflective=!0,z.add(Et(.42,.02,.3,ee,0,.01,0));let Y=_r(512,320,(N,se,xe)=>{let D=N.createLinearGradient(0,0,se,xe);D.addColorStop(0,"#1f6b4a"),D.addColorStop(1,"#0f3d2a"),N.fillStyle=D,N.fillRect(0,0,se,xe),N.fillStyle="#e4f05a",N.beginPath(),N.arc(se/2,xe/2-30,38,0,Math.PI*2),N.fill(),N.strokeStyle="#ffffff",N.lineWidth=5,N.beginPath(),N.arc(se/2-52,xe/2-30,38,-.6,.6),N.stroke(),N.beginPath(),N.arc(se/2+52,xe/2-30,38,Math.PI-.6,Math.PI+.6),N.stroke(),N.fillStyle="#ffffff",N.font="700 40px Outfit, Arial",N.textAlign="center",N.fillText("ClubOS",se/2,xe/2+50),N.font="500 22px Outfit, Arial",N.fillStyle="rgba(255,255,255,0.7)",N.fillText("Appuie sur E",se/2,xe/2+88)}),ue=new Oe;ue.position.set(0,.02,-.15),ue.rotation.x=.28,ue.add(Et(.42,.28,.012,ee,0,.14,0));let ve=new G(new We(.39,.25),new re({map:Y.tex,emissive:16777215,emissiveMap:Y.tex,emissiveIntensity:.9}));ve.position.set(0,.14,.007),ue.add(ve),z.add(ue),t.add(z),z.traverse(N=>{N.isMesh&&(N.userData.interact={kind:"laptop"})}),e.push(z);let ye=new Oe;ye.position.set(Da.x,Dt.top,Da.z);let we=Yt(1974822,{roughness:.45});ye.add(Et(.06,.25,.06,we,0,.13,.05));let me=_r(512,384,$e),B=new Oe;B.position.set(0,.36,.02),B.rotation.y=Math.PI,B.rotation.x=-.15,B.add(Et(.44,.33,.04,we,0,0,0));let Z=new G(new We(.41,.3),new re({map:me.tex,emissive:16777215,emissiveMap:me.tex,emissiveIntensity:.85}));Z.position.z=.021,B.add(Z),ye.add(B),t.add(ye);let ae=Et(.46,.12,.42,we,Da.x,Dt.top-.12,Dt.minZ-.05);ae.userData.interact={kind:"cash"},e.push(ae),t.add(ae);let de=Et(.08,.14,.08,we,-5.7,Dt.top+.07,6.85);t.add(de);let Se=new G(new We(.05,.05),new on({color:16722474}));Se.position.set(-5.7,Dt.top+.1,6.895),t.add(Se);let Ce=new Oe;Ce.position.set(bh.x,Dt.top,bh.z),Ce.add(Et(.09,.03,.17,we,0,.015,0));let ze=_r(128,96,(N,se,xe,D="")=>{N.fillStyle="#c8e6c9",N.fillRect(0,0,se,xe),N.fillStyle="#123",N.font="700 22px monospace",N.textAlign="center",N.fillText(D||"CB",se/2,xe/2+8)}),Ye=new G(new We(.07,.05),new on({map:ze.tex}));Ye.rotation.x=-Math.PI/2+.3,Ye.position.set(0,.033,.04),Ce.add(Ye),Ce.traverse(N=>{N.isMesh&&(N.userData.interact={kind:"card"})}),e.push(Ce),t.add(Ce);let j=_r(512,256,(N,se,xe,D=!1)=>{N.fillStyle="#fbfaf6",N.fillRect(0,0,se,xe),N.strokeStyle=D?"#2e9c5d":"#c0392b",N.lineWidth=18,N.strokeRect(9,9,se-18,xe-18),N.fillStyle=D?"#2e9c5d":"#c0392b",N.font="800 120px Outfit, Arial",N.textAlign="center",N.textBaseline="middle",N.fillText(D?"OUVERT":"FERM\xC9",se/2,xe/2+6)}),le=new Oe;le.position.set(Eh.x,1.7,Eh.z-.08);let L=new G(new je(.8,.4,.02),[we,we,we,we,new re({map:j.tex,roughness:.5}),new re({map:j.tex,roughness:.5})]);le.add(L);for(let N of[-1,1]){let se=new G(new Xe(.003,.003,.6),we);se.position.set(N*.3,.5,0),le.add(se)}le.traverse(N=>{N.isMesh&&(N.userData.interact={kind:"sign"})}),e.push(le),t.add(le);let ke=Yt(9136709,{roughness:.6});t.add(Et(4,.05,.3,ke,-6,1.75,Ke.minZ+.3)),t.add(Et(4,.05,.3,ke,-6,2.35,Ke.minZ+.3));let he=new re({color:13936698,metalness:1,roughness:.22});he.userData.reflective=!0;let Pe=new Bi([[0,0],[.07,0],[.07,.02],[.02,.04],[.02,.12],[.08,.16],[.09,.26],[0,.26]].map(N=>new fe(N[0],N[1])),24);for(let N=0;N<7;N++){let se=new G(Pe,he),xe=.7+N%3*.25;se.scale.setScalar(xe),se.position.set(-7.6+N*.5,N%2?1.775:2.375,Ke.minZ+.3),se.castShadow=!0,t.add(se)}[["TOURNOI D'\xC9T\xC9","Simple & double \xB7 12 au 20 juillet","#d9673a"],["\xC9COLE DE TENNIS","Mini-tennis d\xE8s 5 ans","#2f6fe0"],["D\xC9COUVRE LE PADEL","S\xE9ance d'initiation gratuite","#1f6b4a"]].forEach(([N,se,xe],D)=>{let ce=wt(400,560,(P,$,Q)=>{P.fillStyle=xe,P.fillRect(0,0,$,Q),P.fillStyle="rgba(255,255,255,0.12)",P.beginPath(),P.arc($*.75,Q*.3,150,0,Math.PI*2),P.fill(),P.fillStyle="#e4f05a",P.beginPath(),P.arc($*.72,Q*.32,60,0,Math.PI*2),P.fill(),P.fillStyle="#ffffff",P.font="800 46px Outfit, Arial",P.textAlign="left",N.split(" ").forEach((Je,ut)=>P.fillText(Je,30,Q*.6+ut*50)),P.font="500 24px Outfit, Arial",P.fillText(se,30,Q-40)}),W=new G(new We(.8,1.12),new re({map:ce,roughness:.6}));W.position.set(Ke.minX+.14,2,9+D*1.2),W.rotation.y=Math.PI/2,t.add(W)});let Ee=_r(256,256,(N,se,xe,D=480)=>{N.clearRect(0,0,se,xe),N.fillStyle="#ffffff",N.beginPath(),N.arc(se/2,xe/2,120,0,Math.PI*2),N.fill(),N.strokeStyle="#1b2420",N.lineWidth=10,N.stroke();for(let P=0;P<12;P++){let $=P/12*Math.PI*2;N.lineWidth=6,N.beginPath(),N.moveTo(se/2+Math.sin($)*100,xe/2-Math.cos($)*100),N.lineTo(se/2+Math.sin($)*86,xe/2-Math.cos($)*86),N.stroke()}let ce=D/60%12/12*Math.PI*2,W=D%60/60*Math.PI*2;N.lineCap="round",N.lineWidth=10,N.beginPath(),N.moveTo(se/2,xe/2),N.lineTo(se/2+Math.sin(ce)*58,xe/2-Math.cos(ce)*58),N.stroke(),N.lineWidth=6,N.beginPath(),N.moveTo(se/2,xe/2),N.lineTo(se/2+Math.sin(W)*90,xe/2-Math.cos(W)*90),N.stroke()}),Ie=new G(new us(.3,32),new re({map:Ee.tex,transparent:!0,roughness:.4}));Ie.position.set(-2.2,3.1,Ke.minZ+.14),t.add(Ie);let R=Yt(2830131,{roughness:.5}),E=Yt(4160052,{roughness:.8}),q=new ya(.42,2);for(let{x:N,z:se}of Th){t.add(Et(.5,.55,.5,R,N,.275,se));let xe=new G(q,E);xe.position.set(N,.95,se),xe.scale.set(1,1.3,1),xe.castShadow=!0,t.add(xe)}t.add(Et(2,.012,1.2,Yt(3813926,{roughness:1}),0,.03,13.2,{cast:!1}));let ie=Yt(10517074,{roughness:.6}),oe=Yt(3159354,{metalness:.6,roughness:.4});{let N=wh;t.add(Et(N.w,.06,N.d,ie,N.x,.46,N.z));for(let se of[N.x-N.w/2+.2,N.x+N.w/2-.2])t.add(Et(.06,.44,.38,oe,se,.22,N.z))}let ne=new Oe;t.add(ne),e.push(ne);let Re={},be=(N,se)=>{Re[N]??(Re[N]=wt(256,160,(D,ce,W)=>{D.fillStyle="#fbfaf6",D.fillRect(0,0,ce,W),D.fillStyle=se,D.fillRect(0,0,ce,44),D.fillStyle="#ffffff",D.font="700 26px Outfit, Arial",D.textAlign="center",D.fillText(N.split("|")[0],ce/2,31),D.fillStyle="#1b2420",D.font="600 30px Outfit, Arial",D.fillText(N.split("|")[1]??"",ce/2,104)}));let xe=new G(new je(.16,.006,.1),[Yt(16777215),Yt(16777215),new re({map:Re[N]}),Yt(16777215),Yt(16777215),Yt(16777215)]);return xe.position.y=.004,xe.rotation.y=Math.PI,xe},Te=new Map;function nt(N){let se=new Set(N.items.map(D=>D.uid));for(let[D,ce]of Te)se.has(D)||(ne.remove(ce),Te.delete(D));let xe=N.items.length;N.items.forEach((D,ce)=>{let W=Te.get(D.uid);if(!W){D.kind==="product"?W=vr(D.product):D.kind==="booking"?W=be(`R\xC9SERVATION|${D.label.split(" \xB7")[0]}`,"#d9673a"):W=be("LICENCE|Saison 2026","#1f6b4a");let $=new Oe;$.add(W);let Q=new G(new je(.2,.28,.2),new on({visible:!1}));Q.position.y=.12,$.add(Q),(D.product==="racket"||D.product==="padelracket")&&(W.rotation.x=-Math.PI/2,W.position.y=.03),$.traverse(ge=>{ge.userData.interact={kind:"scan",uid:D.uid}}),$.userData.uid=D.uid,ne.add($),Te.set(D.uid,$),W=$}let P=io.x-.55+(xe===1?.55:ce/(xe-1)*1.1);W.userData.home=new O(P,Dt.top+.01,io.z+(ce%2?.08:-.06)),W.userData.placed||(W.position.copy(W.userData.home).add(new O(0,0,.4)),W.userData.placed=!0),W.userData.scanned=D.scanned,W.traverse($=>{$.userData.interact&&($.userData.interact.done=D.scanned)})}),me.redraw(N)}let pe=new O(-3.95,Dt.top+.02,7);function Ne(N){for(let se of Te.values()){let xe=se.userData.scanned?pe:se.userData.home;se.position.lerp(xe,1-Math.exp(-10*N));let D=se.userData.scanned?Math.max(.01,se.scale.x-N*2.5):1;se.scale.setScalar(D),se.visible=D>.02}}let Be=Et(.3,.32,.18,Yt(13214315,{roughness:.9}),pe.x,Dt.top+.16,pe.z);t.add(Be);function $e(N,se,xe,D=null){if(N.fillStyle="#0f1418",N.fillRect(0,0,se,xe),N.fillStyle="#1f6b4a",N.fillRect(0,0,se,44),N.fillStyle="#ffffff",N.font="700 24px Outfit, Arial",N.textAlign="left",N.fillText("CAISSE",16,30),!D||!D.cust){N.fillStyle="rgba(255,255,255,0.5)",N.font="500 26px Outfit, Arial",N.textAlign="center",N.fillText("En attente d'un client",se/2,xe/2+10);return}N.font="500 22px Outfit, Arial";let ce=76;for(let W of D.items.filter(P=>P.scanned).slice(-6))N.fillStyle="#d7dee3",N.textAlign="left",N.fillText(W.label,16,ce),N.textAlign="right",N.fillText(Ze(W.price),se-16,ce),ce+=32;N.fillStyle="#e4f05a",N.font="800 34px Outfit, Arial",N.textAlign="left",N.fillText("TOTAL",16,xe-80),N.textAlign="right",N.fillText(Ze(D.total),se-16,xe-80),D.phase==="pay"&&(N.font="600 24px Outfit, Arial",N.fillStyle="#ffffff",N.textAlign="left",D.method==="card"?N.fillText("Paiement par carte",16,xe-34):(N.fillText(`Donn\xE9 ${Ze(D.given)}`,16,xe-34),N.textAlign="right",N.fillStyle="#7ee39a",N.fillText(`\xC0 rendre ${Ze(D.given-D.total)}`,se-16,xe-34)))}let Le=-1;return{showCounter:nt,animateCounter:Ne,setOpen:N=>j.redraw(N),setTerminal:N=>ze.redraw(N),update(N,se){Math.floor(N)!==Le&&(Le=Math.floor(N),Ee.redraw(N)),w.material.emissiveIntensity=.25+se*1.2}}}var __=[.16,.72,1.28],Wi=2.1,Ei=.6,M_={balls:[5,2,.15,.2],padelballs:[5,2,.15,.2],water:[6,2,.13,.2],iso:[6,2,.13,.2],grip:[6,2,.14,.2],cap:[4,2,.32,.24],energy:[6,2,.15,.2],wristband:[6,2,.15,.2],strings:[5,2,.16,.2],towel:[4,2,.26,.24],tshirt:[4,2,.26,.24],shoes:[2,2,.6,.24],bag:[2,2,.95,.26],beer:[6,2,.13,.2],soda:[6,2,.13,.2],coffee:[6,2,.13,.2],juice:[6,2,.13,.2],sandwich:[4,2,.22,.2],panini:[4,2,.22,.2],pizza:[4,2,.22,.24],cookie:[6,2,.13,.2]},b_=[2,2,.8,.25],Gh=new re({color:2896182,metalness:.7,roughness:.35}),E_=new re({color:15921129,roughness:.5}),Df={shop:new re({color:2059082,roughness:.7}),bar:new re({color:16054264,roughness:.3,emissive:14677247,emissiveIntensity:.25}),snack:new re({color:13146722,roughness:.6})};function S_(){let i=document.createElement("canvas");i.width=512,i.height=96;let e=new pn(i);return e.colorSpace=Ct,e.anisotropy=4,{c:i,t:e}}function T_(i,e,t,n){let s=i.c.getContext("2d"),r=i.c.width,o=i.c.height;s.fillStyle=e?"#fbfaf6":"#e9e6df",s.fillRect(0,0,r,o),e?(s.fillStyle=Fe[e].color,s.fillRect(0,0,14,o),s.fillStyle="#1b2420",s.font="600 34px Outfit, Arial",s.textAlign="left",s.textBaseline="middle",s.fillText(Fe[e].short,30,o/2),s.textAlign="right",s.font="800 44px Outfit, Arial",s.fillStyle="#c0392b",s.fillText(Ze(t),r-18,o/2+2),n===0&&(s.fillStyle="rgba(192,57,43,0.12)",s.fillRect(0,0,r,o))):(s.fillStyle="#8a918d",s.font="500 30px Outfit, Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("Emplacement libre",r/2,o/2)),i.t.needsUpdate=!0}function Uf(i,e,t){let n=Zt.map((o,a)=>{let l=new Oe;l.position.set(o.x,0,o.z),l.rotation.y=o.facing,i.add(l);let c=new G(new We(Wi,Ei),new on({color:2059082,transparent:!0,opacity:.18}));return c.rotation.x=-Math.PI/2,c.position.y=.03,c.visible=o.zone==="shop",l.add(c),{slot:o,g:l,mark:c,built:null,levels:[]}});function s(o,a){let l=new Oe;o.g.add(l);let c=(d,u,h,f,g)=>{let M=new G(d,u);return M.position.set(h,f,g),M.castShadow=M.receiveShadow=!0,l.add(M),M};for(let d of[-Wi/2+.03,Wi/2-.03])for(let u of[-Ei/2+.03,Ei/2-.03])c(new je(.04,1.9,.04),Gh,d,.95,u);c(new je(Wi,1.75,.02),Df[o.slot.zone]??Df.shop,0,.98,-Ei/2+.01),c(new je(Wi,.06,Ei),Gh,0,1.9,0),o.levels=__.map((d,u)=>{c(new je(Wi-.02,.03,Ei-.04),E_,0,d-.015,.01);let h=S_(),f=new G(new We(.5,.094),new re({map:h.t,roughness:.5}));f.position.set(0,d-.05,Ei/2-.005),l.add(f);let g=new G(new je(Wi-.02,.05,.01),Gh);g.position.set(0,d-.05,Ei/2-.02),l.add(g);let M=new G(new je(Wi-.1,.5,Ei),new on({visible:!1}));M.position.set(0,d+.25,.02),M.userData.interact={kind:"shelf",shelf:a,level:u},l.add(M),e.push(M);let m=new Oe;return m.position.set(0,d,0),l.add(m),{tag:h,items:m,y:d,key:""}}),o.built=l,o.mark.visible=!1}function r(o){let a=n[o],l=t.shelves[o];l.built&&!a.built&&s(a,o),l.built&&l.levels.forEach((c,d)=>{let u=a.levels[d],h=c.product?t.prices[c.product]:0,f=`${c.product}|${c.qty}|${h}`;if(f===u.key||(u.key=f,T_(u.tag,c.product,h,c.qty),u.items.clear(),!c.product))return;let g=!!Fe[c.product].racket,[M,m,p,x]=g?b_:M_[c.product]??[5,2,.16,.2];for(let _=0;_<c.qty;_++){let v=Math.floor(_/M),I=_%M,S=vr(c.product),w=(I-(M-1)/2)*p,C=.12-v*x;g?(S.rotation.set(-Math.PI/2,0,Math.PI/2),S.position.set(w+.3,.025,C-.02)):S.position.set(w,0,C),u.items.add(S)}})}return n.forEach((o,a)=>r(a)),{refresh:r,refreshAll:()=>n.forEach((o,a)=>r(a)),invalidate:()=>{for(let o of n)for(let a of o.levels)a.key="";n.forEach((o,a)=>r(a))}}}var ys=(i,e={})=>new re({color:i,roughness:.6,...e}),Wh=ys(2046508,{metalness:.5,roughness:.45}),Xi=ys(1382427,{metalness:.5,roughness:.4}),Ln=ys(16053488,{roughness:.5});function Ut(i,e,t=0,n=0,s=0,r=!0){let o=new G(i,e);return o.position.set(t,n,s),o.castShadow=r,o.receiveShadow=!0,o}function w_(i,e,t=2){let n=new Oe;if(t>0){let o=new G(new We(i,t),ys(1919541,{roughness:.9,side:Tt}));o.position.y=t/2,o.castShadow=!0,n.add(o)}let s=ao("fence","rgba(40,60,50,0.9)",16,2).clone();s.needsUpdate=!0,s.wrapS=s.wrapT=$t,s.repeat.set(i*6,(e-t)*6);let r=new G(new We(i,e-t),new re({map:s,alphaTest:.3,side:Tt,roughness:.6}));return r.position.y=t+(e-t)/2,n.add(r),n}function Nf(i,e,t){let n=new Oe;n.add(Ut(new Xe(.09,.12,8,10),Xi,0,4,0));let s=Ut(new je(.9,.25,.45),Xi,0,8.1,.2);s.rotation.x=.5;let r=new G(new We(.8,.38),new on({color:3816768,side:Tt}));r.position.set(0,8,.44),r.rotation.x=-1.07;let o=new rr(new cs({map:R_(),color:16773584,transparent:!0,blending:jo,depthWrite:!1}));return o.scale.set(3.2,3.2,1),o.position.set(0,7.95,.5),o.visible=!1,r.userData.glow=o,n.add(s,r,o),n.position.set(i,0,e),n.rotation.y=t,{g:n,lens:r}}var A_=null;function R_(){return A_??(A_=wt(64,64,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,240,200,0.6)"),n.addColorStop(1,"rgba(255,240,200,0)"),i.fillStyle=n,i.fillRect(0,0,e,t)}))}function Xa(i,e){return wt(512,300,(t,n,s)=>{t.fillStyle="#fbfaf6",t.fillRect(0,0,n,s),t.fillStyle=e,t.fillRect(0,0,n,70),t.fillStyle="#ffffff",t.font="800 44px Outfit, Arial",t.textAlign="center",t.textBaseline="middle",t.fillText(i[0],n/2,37),t.fillStyle="#1b2420",t.font="600 38px Outfit, Arial",i.slice(1).forEach((r,o)=>t.fillText(r,n/2,130+o*62))})}function C_(i){let e=new Oe,t=Xn,n=i.surface==="clay"?gf():xf(),s=Ut(new We(t.w,t.l),new re({map:n,roughness:i.surface==="clay"?.95:.7}),0,.03,0,!1);s.rotation.x=-Math.PI/2,s.userData.interact={kind:"court",court:i.id},e.add(s);let r=new G(new We(t.w,t.l),new re({map:Fh(i.surface),transparent:!0,opacity:0,depthWrite:!1,roughness:1}));r.rotation.x=-Math.PI/2,r.position.y=.036,r.receiveShadow=!0,e.add(r);for(let x of[-1,1])e.add(Ut(new Xe(.04,.04,1.07,12),Wh,x*6.4,.535,0));let o=ao("net2","rgba(15,15,15,1)",16,1.5).clone();o.needsUpdate=!0,o.wrapS=o.wrapT=$t,o.repeat.set(12.8*4,.95*4);let a=new G(new We(12.8,.95),new re({map:o,transparent:!0,opacity:.9,depthWrite:!1,side:Tt}));a.position.y=.52,a.castShadow=!0,e.add(a),e.add(Ut(new je(12.8,.06,.03),Ln,0,.99,0)),e.add(Ut(new je(.05,.92,.02),Ln,0,.5,0));let l=3.5,c=-t.w/2,d=t.w/2,u=-t.l/2,h=t.l/2,f=(x,_,v,I)=>{let S=Math.hypot(v-x,I-_),w=w_(S,l,_===I?2:0);w.position.set((x+v)/2,0,(_+I)/2),w.rotation.y=Math.atan2(v-x,I-_)-Math.PI/2,e.add(w);let C=Math.ceil(S/3);for(let b=0;b<=C;b++)e.add(Ut(new Xe(.04,.04,l,8),Wh,x+(v-x)*b/C,l/2,_+(I-_)*b/C))};f(c,h,-.9,h),f(.9,h,d,h),f(c,u,d,u),f(c,u,c,h),f(d,u,d,h),e.add(Ut(new je(1.8,.06,.06),Wh,0,2.3,h));let g=new Oe;for(let[x,_]of[[-.3,-.3],[.3,-.3],[-.3,.3],[.3,.3]])g.add(Ut(new Xe(.025,.025,1.8),Ln,x,.9,_));g.add(Ut(new je(.7,.06,.7),Ln,0,1.8,0)),g.add(Ut(new je(.05,.5,.7),Ln,-.33,2.08,0)),g.position.set(-7.4,0,0),e.add(g);let M=ys(10517074,{roughness:.6});for(let x of[-2.2,2.2])e.add(Ut(new je(.42,.05,1.6),M,-7.9,.46,x)),e.add(Ut(new je(.06,.44,.06),Xi,-7.9,.22,x-.7)),e.add(Ut(new je(.06,.44,.06),Xi,-7.9,.22,x+.7));let m=new G(new We(1.2,.7),new re({map:Xa([i.label.toUpperCase()],i.surface==="clay"?"#d9673a":"#2f5d9e")}));m.position.set(2.2,2.6,h+.05),e.add(m);let p=[[c-.6,-9,Math.PI/2],[c-.6,9,Math.PI/2],[d+.6,-9,-Math.PI/2],[d+.6,9,-Math.PI/2]].map(([x,_,v])=>{let I=Nf(x,_,v);return e.add(I.g),I.lens});return{g:e,wear:r,lights:p,surface:s}}function P_(i){let e=new Oe,t=Ut(new We(xs.w,xs.l),ys(10132116,{roughness:.9}),0,.025,0,!1);t.rotation.x=-Math.PI/2,e.add(t);let n=Ut(new We(10,20),new re({map:vf(),roughness:.9}),0,.032,0,!1);n.rotation.x=-Math.PI/2,n.userData.interact={kind:"court",court:i.id},e.add(n);let s=new G(new We(10,20),new re({map:Fh("padel"),transparent:!0,opacity:0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.038,e.add(s);let r=new re({color:14085362,roughness:.05,metalness:.1,transparent:!0,opacity:.22,side:Tt,depthWrite:!1,envMapIntensity:1.6});r.userData.reflective=!0;let o=(h,f,g,M,m,p)=>{let x=new G(new We(h,f),r);x.position.set(g,M,m),x.rotation.y=p,e.add(x)},a=(h,f,g,M,m,p)=>{let x=ao("padelmesh","rgba(20,20,20,0.9)",12,2).clone();x.needsUpdate=!0,x.wrapS=x.wrapT=$t,x.repeat.set(h*6,f*6);let _=new G(new We(h,f),new re({map:x,alphaTest:.3,side:Tt}));_.position.set(g,M,m),_.rotation.y=p,e.add(_)};for(let h of[-1,1]){for(let f=0;f<5;f++)o(1.96,3,-4+f*2,1.5,h*10,0);a(10,1,0,3.5,h*10,0)}for(let h of[-1,1])for(let f of[-1,1])o(1.96,3,h*5,1.5,f*9,Math.PI/2),o(1.96,2,h*5,1,f*7,Math.PI/2),a(5.25,3,h*5,1.5,f*(.75+5.25/2+0),Math.PI/2);for(let h of[-1,1])for(let f=-10;f<=10;f+=2)e.add(Ut(new je(.08,f===-10||f===10?4:3,.08),Xi,h*5,(f===-10||f===10?4:3)/2,f));for(let h of[-1,1])for(let f=-4;f<=4;f+=2)e.add(Ut(new je(.08,4,.08),Xi,f,2,h*10));let l=ao("net2","rgba(15,15,15,1)",16,1.5).clone();l.needsUpdate=!0,l.wrapS=l.wrapT=$t,l.repeat.set(9.2*4,.86*4);let c=new G(new We(9.2,.86),new re({map:l,transparent:!0,opacity:.9,depthWrite:!1,side:Tt}));c.position.y=.48,e.add(c),e.add(Ut(new je(9.2,.05,.03),Ln,0,.9,0));for(let h of[-1,1])e.add(Ut(new Xe(.04,.04,.95),Xi,h*4.6,.47,0));let d=new G(new We(1.2,.7),new re({map:Xa([i.label.toUpperCase()],"#1f6b4a")}));d.position.set(0,3.5,10.06),e.add(d);let u=[[-5.8,-6,Math.PI/2],[-5.8,6,Math.PI/2],[5.8,-6,-Math.PI/2],[5.8,6,-Math.PI/2]].map(([h,f,g])=>{let M=Nf(h,f,g);return e.add(M.g),M.lens});return{g:e,wear:s,lights:u,surface:n}}function I_(i,e){let t=new Oe,n=e==="tennis"?Xn:xs,s=ff().clone();s.needsUpdate=!0,s.wrapS=s.wrapT=$t,s.repeat.set(n.w/3,n.l/3);let r=Ut(new We(n.w,n.l),new re({map:s,roughness:1}),0,.02,0,!1);r.rotation.x=-Math.PI/2,t.add(r);let o=ys(16738842,{roughness:.7}),a=[[-n.w/2,-n.l/2],[n.w/2,-n.l/2],[n.w/2,n.l/2],[-n.w/2,n.l/2]];a.forEach(([u,h],f)=>{t.add(Ut(new Xe(.04,.04,1),Ln,u,.5,h));let[g,M]=a[(f+1)%4],m=Math.hypot(g-u,M-h),p=Ut(new je(m,.06,.01),o,(u+g)/2,.85,(h+M)/2,!1);p.rotation.y=-Math.atan2(M-h,g-u),t.add(p)});let l=new Oe,c=new re({map:Xa([i.label.toUpperCase(),an[i.surface].name,"",""],"#d9673a"),roughness:.6}),d=new G(new je(1.8,1.05,.05),[Ln,Ln,Ln,Ln,c,Ln]);d.position.y=1.5,d.castShadow=!0,l.add(d);for(let u of[-1,1])l.add(Ut(new Xe(.035,.035,1.5),Xi,u*.75,.75,-.03));return l.position.set(0,0,n.l/2-1.2),t.add(l),{g:t,signMat:c,def:i}}function Of(i,e,t,n){let s={},r=null;for(let p of Lt){let x=cn[p.id],_=an[p.surface].sport,v=new Oe;v.position.set(x.cx,0,x.cz),i.add(v),s[p.id]={def:p,slot:x,sport:_,root:v,built:null,plot:null}}function o(p){let x=[p.def.label.toUpperCase(),an[p.def.surface].name,oi(p.def.price),e.level>=p.def.level?"\xC0 construire":`Niveau ${p.def.level} requis`];p.plot.signMat.map?.dispose(),p.plot.signMat.map=Xa(x,e.level>=p.def.level?"#1f6b4a":"#8a918d"),p.plot.signMat.needsUpdate=!0}function a(p){let x=s[p],_=e.courts[p];_.built&&!x.built&&(x.plot&&(x.root.remove(x.plot.g),x.plot=null),x.built=x.sport==="tennis"?C_(x.def):P_(x.def),x.root.add(x.built.g),t.push(x.built.surface)),!_.built&&!x.plot&&(x.plot=I_(x.def,x.sport),x.root.add(x.plot.g)),x.plot&&o(x),x.built&&(x.built.wear.material.opacity=lt(_.wear*1.1,0,1),m(x))}for(let p of Object.keys(s))a(p);let l=new Ht(.033,12,10),c=new re({color:15003738,roughness:.6,emissive:2107392}),d=new Map;function u(p,x,_,v){let I=new G(l,c);I.castShadow=!0,i.add(I);let S={id:p,persons:x,sport:_,viewOf:v,ball:I,hitter:0,receiver:1,t:0,dur:1,from:new O,bounce:new O,to:new O,pause:1.2};d.set(p,S),f(S,!0)}function h(p){let x=d.get(p);if(x){i.remove(x.ball);for(let _ of x.persons){let v=x.viewOf(_);v&&(v.offsetX=0,v.offsetZ=0)}d.delete(p)}}function f(p,x=!1){let _=cn[p.id],v=p.persons.map(te=>te.z>=_.cz?1:-1);x&&(p.hitter=0);let I=v[p.hitter],S=p.persons.map((te,z)=>z).filter(te=>v[te]!==I);p.receiver=S[Math.floor(Math.random()*S.length)];let w=p.persons[p.hitter],C=p.persons[p.receiver],b=p.viewOf(w),y=p.viewOf(C);p.from.set(w.x+(b?.offsetX??0),1,w.z);let A=p.sport==="tennis"?4.2:3.6,F=p.sport==="tennis"?mt(4,10.5):mt(2.5,8);p.bounce.set(_.cx+mt(-A,A),.03,_.cz-I*F);let k=p.sport==="tennis"?3.6:2.2;p.targetOffset=lt(p.bounce.x-C.x,-k,k),p.to.set(C.x+p.targetOffset,1,C.z);let X=p.from.distanceTo(p.to);p.dur=(p.sport==="tennis"?.9:.75)+X*.028,p.t=0,p.swung=!1,b&&b.swing(),n?.(p.from)}function g(p){for(let x of d.values()){if(x.pause>0){x.pause-=p,x.ball.visible=!1;continue}x.ball.visible=!0,x.t+=p;let _=lt(x.t/x.dur,0,1),v=.62;if(_<v){let w=_/v;x.ball.position.lerpVectors(x.from,x.bounce,w),x.ball.position.y=ms.lerp(x.from.y,.03,w)+Math.sin(w*Math.PI)*(x.sport==="tennis"?1.5:1.1)}else{let w=(_-v)/(1-v);x.ball.position.lerpVectors(x.bounce,x.to,w),x.ball.position.y=ms.lerp(.03,x.to.y,w)+Math.sin(w*Math.PI)*.7}let I=x.persons[x.receiver],S=x.viewOf(I);S&&(S.offsetX+=(x.targetOffset-S.offsetX)*(1-Math.exp(-4*p)));for(let w of x.persons){if(w===I)continue;let C=x.viewOf(w);C&&(C.offsetX*=Math.exp(-2*p))}!x.swung&&x.t>x.dur-.3&&(x.swung=!0,S?.swing()),_>=1&&(x.hitter=x.receiver,Math.random()<.12&&(x.pause=mt(1.5,3)),f(x))}}function M(p){if(p!==r){r=p;for(let x of Object.values(s))m(x)}}function m(p){if(!p.built)return;let x=!!r;for(let v of p.built.lights)v.material.color.set(x?16773846:3816768),v.userData.glow.visible=x;let _=p.built.surface.material;_.emissive.set(x?16777215:0),_.emissiveMap=x?_.map:null,_.emissiveIntensity=x?.45:0,_.needsUpdate=!0}return{refresh:a,refreshAll:()=>Object.keys(s).forEach(a),startSession:u,endSession:h,update:g,setNight:M,views:s}}function kf(i){let e=new Set,t={keys:e,lookX:0,lookY:0,locked:!1,fallback:!1,uiOpen:!1,onKey:null,onClick:null,onLockChange:null};addEventListener("keydown",c=>{t.uiOpen&&c.code!=="Escape"&&c.code!=="Tab"||(["Space","Tab","ArrowUp","ArrowDown"].includes(c.code)&&c.preventDefault(),c.repeat||t.onKey?.(c.code,c),e.add(c.code))}),addEventListener("keyup",c=>e.delete(c.code)),addEventListener("blur",()=>e.clear());let n=null,s=0,r=!1,o=()=>{t.locked||t.fallback||(s++,!r&&s>=2&&(t.fallback=!0),t.onLockChange?.(!1,"fail"))},a=()=>{if(t.locked||t.uiOpen||t.fallback)return;let c=!1,d=()=>{c||t.locked||(c=!0,clearTimeout(n),o())};try{if(!i.requestPointerLock)return d();clearTimeout(n),n=setTimeout(d,700);let u=i.requestPointerLock();u&&u.catch&&u.catch(d)}catch{d()}};t.requestLock=a,t.exitLock=()=>{try{document.pointerLockElement&&document.exitPointerLock()}catch{}},document.addEventListener("pointerlockchange",()=>{let c=t.locked;t.locked=document.pointerLockElement===i,t.locked&&(clearTimeout(n),s=0,r=!0,t.fallback=!1),t.onLockChange?.(t.locked,c&&!t.locked?"exit":"change")}),document.addEventListener("pointerlockerror",o);let l=null;return i.addEventListener("mousedown",c=>{if(!t.uiOpen){if(t.locked){t.onClick?.(c.button===2?"secondary":"primary","down");return}if(!t.fallback){a();return}l={x:c.clientX,y:c.clientY,moved:0,button:c.button}}}),addEventListener("mouseup",c=>{if(t.locked){t.onClick?.(c.button===2?"secondary":"primary","up");return}l&&l.moved<6&&!t.uiOpen&&t.onClick?.(l.button===2?"secondary":"primary","down"),l=null}),addEventListener("mousemove",c=>{if(!t.uiOpen){if(t.locked){if(Math.abs(c.movementX)>250||Math.abs(c.movementY)>250)return;t.lookX+=c.movementX,t.lookY+=c.movementY;return}if(l){let d=c.clientX-l.x,u=c.clientY-l.y;l.moved+=Math.abs(d)+Math.abs(u),l.x=c.clientX,l.y=c.clientY,l.moved>=6&&(t.lookX+=d*1.6,t.lookY+=u*1.6)}}}),i.addEventListener("contextmenu",c=>c.preventDefault()),t.down=(...c)=>c.some(d=>e.has(d)),t.consumeLook=()=>{let c=[t.lookX,t.lookY];return t.lookX=t.lookY=0,c},t}var L_=1.66,qi=.3,qa=class{constructor(e){this.camera=e,this.pos=new O(0,0,18),this.yaw=Math.PI,this.pitch=-.05,this.vel=new fe,this.y=0,this.vy=0,this.bob=0,this.held=null,this.ray=new Ta,this.sensitivity=.0022,e.rotation.order="YXZ"}update(e,t,n,s){let[r,o]=t.consumeLook();this.yaw-=r*this.sensitivity,this.pitch=lt(this.pitch-o*this.sensitivity,-1.45,1.45);let a=0,l=0;t.uiOpen||(t.down("KeyW","ArrowUp")&&(l-=1),t.down("KeyS","ArrowDown")&&(l+=1),t.down("KeyA","ArrowLeft")&&(a-=1),t.down("KeyD","ArrowRight")&&(a+=1));let c=Math.hypot(a,l)||1,d=t.down("ShiftLeft","ShiftRight")?5.6:3.6,u=Math.sin(this.yaw),h=Math.cos(this.yaw),f=(a*h+l*u)/c*d,g=(-a*u+l*h)/c*d;this.vel.x=Wt(this.vel.x,a||l?f:0,12,e),this.vel.y=Wt(this.vel.y,a||l?g:0,12,e),this.pos.x+=this.vel.x*e,this.resolve(n),this.pos.z+=this.vel.y*e,this.resolve(n),this.pos.x=lt(this.pos.x,s.minX,s.maxX),this.pos.z=lt(this.pos.z,s.minZ,s.maxZ);let M=this.y<=0;M&&!t.uiOpen&&t.down("Space")&&(this.vy=4.6),this.vy-=15*e,this.y=Math.max(0,this.y+this.vy*e),this.y===0&&this.vy<0&&(this.vy=0);let m=M?Math.hypot(this.vel.x,this.vel.y):0;this.bob+=e*m*2.2;let p=Math.sin(this.bob*2)*.03*Math.min(1,m/3);this.camera.position.set(this.pos.x,L_+this.y+p,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0),this.stepPhase=this.bob}pushFrom(e){for(let t of e){let n=this.pos.x-t.x,s=this.pos.z-t.z,r=Math.hypot(n,s),o=qi+.28;r<o&&r>1e-4&&(this.pos.x=t.x+n/r*o,this.pos.z=t.z+s/r*o)}}resolve(e){for(let t of e){let n=lt(this.pos.x,t.minX,t.maxX),s=lt(this.pos.z,t.minZ,t.maxZ),r=this.pos.x-n,o=this.pos.z-s,a=Math.hypot(r,o);if(a<qi)if(a>1e-6)this.pos.x=n+r/a*qi,this.pos.z=s+o/a*qi;else{let l=[[t.minX-qi-this.pos.x,0],[t.maxX+qi-this.pos.x,0],[0,t.minZ-qi-this.pos.z],[0,t.maxZ+qi-this.pos.z]];l.sort((c,d)=>Math.hypot(...c)-Math.hypot(...d)),this.pos.x+=l[0][0],this.pos.z+=l[0][1]}}}aim(e,t=3.2){this.ray.setFromCamera(new fe(0,0),this.camera),this.ray.far=t;let n=this.ray.intersectObjects(e,!0);for(let s of n){let r=s.object;for(;r&&!r.userData.interact;)r=r.parent;if(r)return{...r.userData.interact,point:s.point,distance:s.distance,object:r}}return null}floorPoint(e=3){this.ray.setFromCamera(new fe(0,0),this.camera);let t=this.ray.ray.direction,n=this.ray.ray.origin;if(t.y>-.05)return null;let s=-n.y/t.y;return s>e?null:new O(n.x+t.x*s,0,n.z+t.z*s)}hold(e,t){this.held={box:e,mesh:t},this.camera.add(t),t.position.set(0,-.38,-.62),t.rotation.set(.08,0,0),t.traverse(n=>{n.castShadow=!1})}release(){let e=this.held;return e?(this.camera.remove(e.mesh),e.mesh.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),this.held=null,e):null}animateHeld(e){if(!this.held)return;let t=this.held.mesh;t.position.y=Wt(t.position.y,-.38+Math.sin(this.bob*2)*.012,10,e)}};function zf(){let i=null,e=null,t=!1,n=null;function s(){if(i){i.state==="suspended"&&i.resume();return}let a=window.AudioContext||window.webkitAudioContext;a&&(i=new a,e=i.createGain(),e.gain.value=.8,e.connect(i.destination))}function r(a,l,{type:c="sine",vol:d=.2,slide:u=null,delay:h=0,attack:f=.005}={}){if(!i||t)return;let g=i.currentTime+h,M=i.createOscillator(),m=i.createGain();M.type=c,M.frequency.setValueAtTime(a,g),u&&M.frequency.exponentialRampToValueAtTime(u,g+l),m.gain.setValueAtTime(0,g),m.gain.linearRampToValueAtTime(d,g+f),m.gain.exponentialRampToValueAtTime(1e-4,g+l),M.connect(m).connect(e),M.start(g),M.stop(g+l+.05)}function o(a,{vol:l=.2,freq:c=1500,q:d=1,type:u="bandpass",delay:h=0}={}){if(!i||t)return;let f=i.currentTime+h,g=Math.ceil(i.sampleRate*a),M=i.createBuffer(1,g,i.sampleRate),m=M.getChannelData(0);for(let v=0;v<g;v++)m[v]=(Math.random()*2-1)*(1-v/g);let p=i.createBufferSource(),x=i.createBiquadFilter(),_=i.createGain();p.buffer=M,x.type=u,x.frequency.value=c,x.Q.value=d,_.gain.value=l,p.connect(x).connect(_).connect(e),p.start(f)}return{init:s,get muted(){return t},toggle(){return t=!t,e&&(e.gain.value=t?0:.8),t},beep:()=>r(1850,.09,{type:"square",vol:.06}),cash:()=>{o(.12,{vol:.25,freq:3e3}),r(2400,.4,{vol:.08,delay:.05}),r(3200,.5,{vol:.06,delay:.08})},card:()=>{r(1200,.08,{type:"square",vol:.05}),r(1600,.12,{type:"square",vol:.05,delay:.1})},error:()=>{r(220,.18,{type:"square",vol:.06}),r(180,.22,{type:"square",vol:.06,delay:.16})},click:()=>r(900,.03,{type:"square",vol:.03}),coin:()=>{r(2600,.08,{type:"triangle",vol:.06}),r(3400,.1,{type:"triangle",vol:.04,delay:.03})},note:()=>o(.08,{vol:.15,freq:4e3,q:.5}),pick:()=>o(.12,{vol:.18,freq:700,q:.7}),place:()=>{o(.05,{vol:.2,freq:1200}),r(320,.06,{vol:.05})},order:()=>{r(660,.1,{vol:.08}),r(880,.14,{vol:.08,delay:.1})},notify:()=>{r(880,.12,{vol:.07}),r(1320,.18,{vol:.06,delay:.1})},level:()=>[523,659,784,1046].forEach((a,l)=>r(a,.25,{type:"triangle",vol:.1,delay:l*.11})),build:()=>{o(.25,{vol:.25,freq:400}),[392,523,659].forEach((a,l)=>r(a,.3,{type:"triangle",vol:.08,delay:.2+l*.1}))},ball(a){let l=Math.max(0,1-a/45)**2*.35;l<.01||(o(.05,{vol:l,freq:1100,q:2}),r(420,.07,{vol:l*.4,slide:260}))},whistle:()=>{r(2900,.18,{type:"square",vol:.04,slide:3100}),r(2900,.32,{type:"square",vol:.04,delay:.22,slide:2700})},pour:()=>{o(.6,{vol:.12,freq:900,q:.6,type:"lowpass"}),o(.12,{vol:.2,freq:3e3,delay:.55}),r(2400,.35,{vol:.06,delay:.6})},step:()=>o(.06,{vol:.035,freq:500,q:.8}),bird(){let a=2400+Math.random()*1600;for(let l=0;l<3+Math.floor(Math.random()*3);l++)r(a*(1+Math.random()*.2),.08,{vol:.02,slide:a*1.3,delay:l*.12})},brushing(a){if(!i||t){n&&(n.stop(),n=null);return}if(a&&!n){let l=i.sampleRate,c=i.createBuffer(1,l,i.sampleRate),d=c.getChannelData(0);for(let g=0;g<l;g++)d[g]=(Math.random()*2-1)*(.5+.5*Math.sin(g/l*Math.PI*6)**2);let u=i.createBufferSource();u.buffer=c,u.loop=!0;let h=i.createBiquadFilter();h.type="bandpass",h.frequency.value=900;let f=i.createGain();f.gain.value=.12,u.connect(h).connect(f).connect(e),u.start(),n=u}else!a&&n&&(n.stop(),n=null)}}}var D_=i=>`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="16" rx="10" ry="13" fill="none" stroke="${i}" stroke-width="3"/><path d="M17 20h14M17 14h14M21 5v22M27 5v22" stroke="#c9cfcc" stroke-width="1"/><path d="M24 29v15" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>`,U_=i=>`<svg viewBox="0 0 48 48"><ellipse cx="24" cy="17" rx="11" ry="13" fill="#15171a" stroke="${i}" stroke-width="2.5"/><g fill="${i}"><circle cx="20" cy="13" r="1.6"/><circle cx="28" cy="13" r="1.6"/><circle cx="24" cy="18" r="1.6"/><circle cx="20" cy="22" r="1.6"/><circle cx="28" cy="22" r="1.6"/></g><path d="M24 30v14" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>`,$a={energy:'<svg viewBox="0 0 48 48"><rect x="6" y="18" width="36" height="12" rx="3" fill="#b5651d"/><rect x="16" y="18" width="16" height="12" fill="#ffe9a8"/><path d="M22 20l-2 5h4l-2 4" stroke="#b5651d" stroke-width="2" fill="none"/></svg>',wristband:'<svg viewBox="0 0 48 48"><ellipse cx="17" cy="26" rx="10" ry="7" fill="none" stroke="#e04a4a" stroke-width="6"/><ellipse cx="31" cy="22" rx="10" ry="7" fill="none" stroke="#f07a6a" stroke-width="6"/></svg>',strings:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#f2c94c"/><circle cx="24" cy="24" r="10" fill="none" stroke="#d9a520" stroke-width="2"/><circle cx="24" cy="24" r="5" fill="#1b2420"/></svg>',towel:'<svg viewBox="0 0 48 48"><rect x="8" y="14" width="32" height="20" rx="3" fill="#3fb7a6"/><rect x="8" y="28" width="32" height="3" fill="#ffffff"/><circle cx="24" cy="21" r="3" fill="#1f6b4a"/></svg>',tshirt:'<svg viewBox="0 0 48 48"><path d="M16 8l-10 6 4 8 5-2v20h18V20l5 2 4-8-10-6c-1 3-4 5-8 5s-7-2-8-5z" fill="#fff" stroke="#c9cfcc" stroke-width="1.5"/><circle cx="24" cy="22" r="3.5" fill="#1f6b4a"/></svg>',shoes:'<svg viewBox="0 0 48 48"><path d="M5 30c0-6 3-12 8-12l5 4c4 3 10 4 16 4 5 0 9 2 9 6v4H5z" fill="#f4f4f0" stroke="#c9cfcc" stroke-width="1.5"/><path d="M5 33h38" stroke="#f26b3a" stroke-width="3"/></svg>',bag:'<svg viewBox="0 0 48 48"><rect x="4" y="16" width="40" height="18" rx="9" fill="#1c1f24"/><rect x="21" y="16" width="6" height="18" fill="#e4f05a"/><path d="M16 16c0-5 16-5 16 0" stroke="#1c1f24" stroke-width="3" fill="none"/></svg>',beer:'<svg viewBox="0 0 48 48"><path d="M13 12h18v28a3 3 0 0 1-3 3H16a3 3 0 0 1-3-3z" fill="#f2b632"/><path d="M13 10c0-3 18-3 18 0v6H13z" fill="#fff"/><path d="M31 18h4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-4" fill="none" stroke="#d9d0b0" stroke-width="3"/></svg>',soda:'<svg viewBox="0 0 48 48"><rect x="15" y="8" width="18" height="34" rx="3" fill="#d62d2d"/><rect x="16" y="6" width="16" height="4" rx="2" fill="#b8bcc2"/><path d="M15 24c6-4 12 4 18 0" stroke="#fff" stroke-width="3" fill="none"/></svg>',coffee:'<svg viewBox="0 0 48 48"><path d="M12 16h22l-3 24H15z" fill="#f4efe6" stroke="#c9b9a0"/><rect x="11" y="12" width="24" height="5" rx="2" fill="#1b2420"/><rect x="14" y="24" width="18" height="7" fill="#6b4226"/></svg>',juice:'<svg viewBox="0 0 48 48"><path d="M16 12h16v30H16z" fill="#ffa31a"/><path d="M16 12l3-5h10l3 5z" fill="#ffffff"/><circle cx="24" cy="26" r="5" fill="#fff3d6"/></svg>',sandwich:'<svg viewBox="0 0 48 48"><path d="M6 36L24 10l18 26z" fill="#e9c46a" stroke="#c9a24a" stroke-width="2"/><path d="M10 31h28" stroke="#e76f51" stroke-width="3"/><path d="M13 27h22" stroke="#7cb342" stroke-width="2.5"/></svg>',panini:'<svg viewBox="0 0 48 48"><rect x="6" y="16" width="36" height="16" rx="6" fill="#d4a373"/><path d="M14 18v12M20 18v12M26 18v12M32 18v12" stroke="#6b3e1e" stroke-width="2"/></svg>',pizza:'<svg viewBox="0 0 48 48"><path d="M24 44L8 10c10-5 22-5 32 0z" fill="#f4c26b"/><path d="M24 40L11 13c8-3 18-3 26 0z" fill="#e76f51"/><circle cx="22" cy="20" r="3" fill="#9b2226"/><circle cx="28" cy="27" r="2.5" fill="#9b2226"/></svg>',cookie:'<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16" fill="#c08a4a"/><circle cx="18" cy="20" r="2.5" fill="#3b2414"/><circle cx="28" cy="18" r="2" fill="#3b2414"/><circle cx="26" cy="29" r="2.5" fill="#3b2414"/><circle cx="17" cy="29" r="1.8" fill="#3b2414"/></svg>',balls:'<svg viewBox="0 0 48 48"><rect x="15" y="6" width="18" height="36" rx="4" fill="#1d3f8f"/><rect x="14" y="4" width="20" height="5" rx="2" fill="#f5f5f2"/><circle cx="24" cy="16" r="6" fill="#e8f04a"/><circle cx="24" cy="29" r="6" fill="#e8f04a"/></svg>',padelballs:'<svg viewBox="0 0 48 48"><rect x="15" y="6" width="18" height="36" rx="4" fill="#0f7a54"/><rect x="14" y="4" width="20" height="5" rx="2" fill="#f5f5f2"/><circle cx="24" cy="16" r="6" fill="#c8f04a"/><circle cx="24" cy="29" r="6" fill="#c8f04a"/></svg>',water:'<svg viewBox="0 0 48 48"><path d="M20 6h8v5l4 5v24a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3V16l4-5z" fill="#cfe9f7" stroke="#7cb5d6" stroke-width="1.5"/><rect x="20" y="3" width="8" height="5" rx="1" fill="#2a7cc0"/><rect x="16" y="24" width="16" height="8" fill="#2a7cc0"/></svg>',iso:'<svg viewBox="0 0 48 48"><rect x="15" y="8" width="18" height="34" rx="3" fill="#ff8a3d"/><rect x="16" y="6" width="16" height="4" rx="2" fill="#b8bcc2"/><rect x="15" y="20" width="18" height="6" fill="#fff"/></svg>',grip:'<svg viewBox="0 0 48 48"><rect x="14" y="5" width="20" height="38" rx="2" fill="#fff" stroke="#c9cfcc"/><rect x="14" y="11" width="20" height="7" fill="#e04a4a"/><path d="M18 24l12 4M18 30l12 4M18 36l12 4" stroke="#1b2420" stroke-width="2"/></svg>',racket:'<svg viewBox="0 0 48 48"><ellipse cx="24" cy="16" rx="10" ry="13" fill="none" stroke="#2f6fe0" stroke-width="3"/><path d="M17 20h14M17 14h14M21 5v22M27 5v22" stroke="#c9cfcc" stroke-width="1"/><path d="M24 29v15" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>',padelracket:'<svg viewBox="0 0 48 48"><ellipse cx="24" cy="17" rx="11" ry="13" fill="#15171a"/><g fill="#c8f04a"><circle cx="20" cy="13" r="1.6"/><circle cx="28" cy="13" r="1.6"/><circle cx="24" cy="18" r="1.6"/><circle cx="20" cy="22" r="1.6"/><circle cx="28" cy="22" r="1.6"/></g><path d="M24 30v14" stroke="#222" stroke-width="5" stroke-linecap="round"/></svg>',cap:'<svg viewBox="0 0 48 48"><path d="M9 30a15 15 0 0 1 30 0z" fill="#1f8a5b"/><path d="M28 30h14a3 3 0 0 1-3 4H28z" fill="#167048"/><circle cx="24" cy="15" r="2" fill="#167048"/></svg>'},Si={cart:'<svg viewBox="0 0 24 24"><path d="M3 4h2l2.4 11h11l2-8H6.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="19.5" r="1.5" fill="currentColor"/><circle cx="17" cy="19.5" r="1.5" fill="currentColor"/></svg>',tag:'<svg viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="7.5" cy="8.5" r="1.5" fill="currentColor"/></svg>',court:'<svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><path d="M5 12h14M8 7h8M8 17h8M12 7v10" stroke="currentColor" stroke-width="1.5"/></svg>',club:'<svg viewBox="0 0 24 24"><path d="M3 10l9-6 9 6v10H3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 20v-6h6v6" fill="none" stroke="currentColor" stroke-width="2"/></svg>',stats:'<svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',people:'<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17" cy="9" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M16 14.5a5 5 0 0 1 6 5" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z" fill="currentColor"/></svg>',build:'<svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V10l7-5 7 5v11" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 21v-5h6v5" fill="none" stroke="currentColor" stroke-width="2"/></svg>',close:'<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>'};for(let[i,e]of Object.entries(Fe))e.racket&&i!=="racket"&&i!=="padelracket"&&($a[i]=e.racket==="padel"?U_(e.color):D_(e.color));var Jt=i=>document.getElementById(i),Ff=[{id:"order",text:"Ouvre l'ordinateur de l'accueil (E) et commande des tubes de balles"},{id:"pick",text:"R\xE9cup\xE8re le carton livr\xE9 devant le club (E)"},{id:"shelf",text:"Range les balles sur une \xE9tag\xE8re de la boutique (clic gauche)"},{id:"open",text:"Retourne la pancarte de l'entr\xE9e sur OUVERT (E) : la journ\xE9e commence"},{id:"serve",text:"Encaisse ton premier client au comptoir"},{id:"clean",text:"Brosse le court quand il est us\xE9 (maintiens E)"}];function Bf(){let i="",e=Jt("toasts");function t(n){let s="";for(let r=1;r<=5;r++){let o=Math.max(0,Math.min(1,n-(r-1)));s+=`<span class="star" style="--fill:${(o*100).toFixed(0)}%">${Si.star}</span>`}return s}return{update(n,s){let r=n.s,o=[Math.round(r.money*100),r.level,Math.floor(n.xpProgress()*100),r.licences,Math.round(r.satisfaction*50),Math.floor(r.minute),r.open,r.day,n.capacity,r.dayStarted].join("|");if(o!==i){i=o,Jt("hud-money").textContent=Ze(r.money),Jt("hud-level").textContent=r.level,Jt("hud-xp").style.width=`${(n.xpProgress()*100).toFixed(1)}%`,Jt("hud-licences").textContent=`${r.licences} / ${n.capacity}`,Jt("hud-stars").innerHTML=t(r.satisfaction*5),Jt("hud-day").textContent=`Jour ${r.day}`,Jt("hud-clock").textContent=rf(r.minute);let h=Jt("hud-status");h.textContent=r.open?"Ouvert":r.dayStarted?"Ferm\xE9":"Pr\xE9paration",h.className="status "+(r.open?"open":r.dayStarted?"closed":"prep"),Jt("prep").hidden=!!r.dayStarted;let f=yn[r.event?.id],g=Jt("hud-event");g.hidden=!f||r.event.id==="calm",f&&(g.textContent=f.name,g.title=f.desc)}let a=r.challenge;if(a){let h=Math.min(a.target,r.stats[hf[a.id]]??0),f=`${a.id}|${h}|${a.done}`;if(f!==this.lastCh){this.lastCh=f;let g=Jt("challenge");g.hidden=!1,g.classList.toggle("done",!!a.done),g.innerHTML=`<span>D\xE9fi du jour</span><b>${oo(a)}</b><div class="bar"><i style="width:${(h/a.target*100).toFixed(0)}%"></i></div><small>${a.done?"R\xE9ussi !":`${h} / ${a.target} \xB7 r\xE9compense ${a.reward} \u20AC`}</small>`}}let l=Jt("hint");s.hint!==this.lastHint&&(this.lastHint=s.hint,s.hint?(l.innerHTML=s.hint,l.hidden=!1):l.hidden=!0),!!s.target!==this.lastTarget&&(this.lastTarget=!!s.target,Jt("crosshair").classList.toggle("active",this.lastTarget));let c=Jt("progress");s.progress>0?(c.hidden=!1,c.style.setProperty("--p",`${(s.progress*100).toFixed(1)}%`)):c.hidden||(c.hidden=!0);let d=Jt("held"),u=s.held?`${s.held.product}|${s.held.qty}`:"";u!==this.lastHeld&&(this.lastHeld=u,s.held?(d.hidden=!1,d.innerHTML=`<b>${Fe[s.held.product].name}</b><span>${s.held.qty} / ${Fe[s.held.product].box}</span><small>G : poser le carton</small>`):d.hidden=!0)},checkout(n){let s=Jt("checkout");if(!n.cust){s.hidden=!0;return}s.hidden=!1;let r=n.items.map(a=>`<li class="${a.scanned?"done":""}"><span>${a.label}</span><b>${a.scanned?Ze(a.price):"\u2014"}</b></li>`).join(""),o;n.phase==="scan"?o="Clique sur chaque article pos\xE9 sur le comptoir pour le scanner":n.method==="card"?o="Paiement par carte : clique sur le terminal de paiement":o=`Esp\xE8ces : le client donne ${Ze(n.given)}. Clique sur le tiroir-caisse pour rendre la monnaie`,s.innerHTML=`<header><span>Client au comptoir</span><b>${Ze(n.total)}</b></header><ul>${r}</ul><p>${o}</p>`},challenge(){this.lastCh=null},notify(n,s="info"){let r=document.createElement("div");for(r.className=`toast ${s}`,r.textContent=n,e.prepend(r),setTimeout(()=>r.classList.add("out"),4200),setTimeout(()=>r.remove(),4700);e.children.length>5;)e.lastChild.remove()},objectives(n){let s=Jt("objectives"),r=Ff.filter(o=>!n.includes(o.id));if(!r.length){s.hidden=!0;return}s.hidden=!1,s.innerHTML=`<h3>Prise en main</h3><ol>${Ff.map(o=>`<li class="${n.includes(o.id)?"done":o===r[0]?"current":""}">${o.text}</li>`).join("")}</ol>`}}}var N_=i=>document.getElementById(i),Hf=[["shop","Commandes",Si.cart],["prices","Prix",Si.tag],["courts","Terrains",Si.court],["club","Club",Si.club],["report","Bilan",Si.stats]];function Vf(i,{onClose:e,onEndDay:t,sound:n}){let s=N_("computer"),r="shop",o={};function a(){let _=i.s.orders.map(v=>`<li>${v.boxes} \xD7 ${Fe[v.product].short} <span class="muted">livraison dans ${Math.ceil(v.eta)} s</span></li>`).join("");return _?`<h3>En cours de livraison</h3><ul class="pending">${_}</ul>`:""}function l(){return`<span class="pc-money">${Ze(i.s.money)}</span>`}let c=_=>i.unitCost(_)*Fe[_].box;function d(){let _=Object.entries(o).reduce((C,[b,y])=>C+c(b)*y,0),v=i.s.event?.id==="promo"?i.s.event.product:null,I=C=>{let b=Fe[C],y=o[C]||0,A=b.zone==="bar"&&!i.built("buvette")?"Construis la buvette":b.zone==="snack"&&!i.built("snack")?"Construis le snack":null;return`<article class="card ${i.s.level<b.level||A?"locked":""}">
        <div class="thumb">${$a[C]}</div>
        <div class="info"><h4>${b.name}</h4><p>Carton de ${b.box} \xB7 ${Ze(c(C))}${v===C?` <span class="promo">\u221240 % aujourd'hui</span>`:""}</p>
          <p class="muted">Prix conseill\xE9 ${Ze(b.market)} / unit\xE9</p></div>
        ${i.s.level<b.level?`<span class="lock">Niveau ${b.level}</span>`:A?`<span class="lock">${A}</span>`:`
        <div class="stepper"><button data-act="dec" data-id="${C}" aria-label="Retirer un carton">\u2212</button><span>${y}</span><button data-act="inc" data-id="${C}" aria-label="Ajouter un carton">+</button></div>`}
      </article>`},S=["shop","bar","snack"].map(C=>`<h3 class="zone-title">${xh[C]}</h3>`+Mi.filter(b=>Fe[b].zone===C).map(I).join("")).join(""),w=a();return`<div class="pc-split"><section class="grid">${S}</section>
      <aside class="cart"><h3>Panier</h3>
        ${Object.keys(o).filter(C=>o[C]>0).map(C=>`<div class="cart-line"><span>${o[C]} \xD7 ${Fe[C].short}</span><b>${Ze(c(C)*o[C])}</b></div>`).join("")||'<p class="muted">Ajoute des cartons avec +</p>'}
        <div class="cart-total"><span>Total</span><b>${Ze(_)}</b></div>
        <button class="primary" data-act="buy" ${_<=0||_>i.s.money?"disabled":""}>Commander</button>
        ${_>i.s.money?'<p class="warn">Fonds insuffisants</p>':""}
        <p class="muted small">Les cartons sont livr\xE9s sur la palette devant l'entr\xE9e. Boissons de la buvette et plats du snack se rangent dans leur b\xE2timent.</p>
        <div id="pc-pending">${w}</div>
      </aside></div>`}function u(_,v,I,S,w=""){let C=i.s.prices[_],b=I?(C-I)/C*100:null,y=C/S,A=y>1.3?["bad","Trop cher : les clients refusent"]:y>1.12?["mid","Un peu cher"]:y<.85?["mid","Bon march\xE9"]:["good","Prix juste"];return`<tr><td class="pname">${w}<span>${v}</span></td>
      <td>${I?Ze(I):"\u2014"}</td><td>${Ze(S)}</td>
      <td><div class="stepper price"><button data-act="p-" data-key="${_}" aria-label="Baisser">\u2212</button><input data-key="${_}" value="${C.toFixed(2).replace(".",",")}" inputmode="decimal" aria-label="Prix de ${v}"><button data-act="p+" data-key="${_}" aria-label="Augmenter">+</button></div></td>
      <td>${b===null?"\u2014":`${b.toFixed(0)} %`}</td><td><span class="pill ${A[0]}">${A[1]}</span></td></tr>`}function h(){let _=S=>Mi.filter(w=>Fe[w].zone===S&&i.productAvailable(w)).map(w=>u(w,Fe[w].name,i.unitCost(w),Fe[w].market,`<i class="mini">${$a[w]}</i>`)).join(""),v=["shop","bar","snack"].map(S=>{let w=_(S);return w?`<tr class="sep"><td colspan="6">${xh[S]}</td></tr>${w}`:""}).join(""),I=Object.keys(Wn).filter(S=>(S!=="padel"||i.builtSports().includes("padel"))&&(S!=="parking"||i.built("parking"))).map(S=>u(S,Wn[S].name,0,Wn[S].market)).join("");return`<table class="prices"><thead><tr><th>Article</th><th>Co\xFBt</th><th>Conseill\xE9</th><th>Ton prix</th><th>Marge</th><th></th></tr></thead>
      <tbody>${v}<tr class="sep"><td colspan="6">Prestations</td></tr>${I}</tbody></table>
      <p class="muted small">Au-del\xE0 de 30 % au-dessus du prix conseill\xE9, les clients n'ach\xE8tent plus. Les \xE9tiquettes en rayon se mettent \xE0 jour toutes seules.</p>`}function f(){return`<section class="grid courts">${Lt.map(_=>{let v=i.s.courts[_.id],I=i.court[_.id],S=an[_.surface],w=i.s.level<_.level,C;v.built?C=I.playing?'<span class="pill mid">Partie en cours</span>':I.reservedBy?'<span class="pill mid">R\xE9serv\xE9</span>':'<span class="pill good">Libre</span>':C=w?`<span class="lock">Niveau ${_.level}</span>`:'<span class="pill">\xC0 construire</span>';let b=v.built?`<div class="wear"><span>Usure</span><div class="bar"><i style="width:${(v.wear*100).toFixed(0)}%" class="${v.wear>.6?"bad":v.wear>.35?"mid":""}"></i></div></div>`:"";return`<article class="card court ${_.surface}">
        <div class="court-swatch"></div>
        <div class="info"><h4>${_.label}</h4><p>${S.name}${S.sport==="padel"?"":" \xB7 tennis"}</p>${b}</div>
        <div class="actions">${C}${!v.built&&!w?`<button class="primary" data-act="build" data-id="${_.id}" ${i.s.money<_.price?"disabled":""}>Construire \xB7 ${oi(_.price)}</button>`:""}</div>
      </article>`}).join("")}</section>
    <p class="muted small">Un terrain us\xE9 fait fuir les joueurs. Brosse-le en maintenant E dessus, ou embauche un agent d'entretien.</p>`}function g(){let _=i.s.shelves.filter((b,y)=>Zt[y].zone==="shop"),v=_.filter(b=>b.built).length,I=_.length,S=Object.entries(Vi).map(([b,y])=>{let A=i.s.upgrades[b],F=i.s.level<y.level;return`<article class="row-card"><div><h4>${y.name}</h4><p class="muted">${y.desc}</p></div>
        ${A?'<span class="pill good">Install\xE9</span>':F?`<span class="lock">Niveau ${y.level}</span>`:`<button class="primary" data-act="upgrade" data-id="${b}" ${i.s.money<y.price?"disabled":""}>${oi(y.price)}</button>`}</article>`}).join(""),w=Object.entries(vn).map(([b,y])=>{let A=i.s.staff[b],F=i.s.level<y.level,k=y.needs&&!i.built(y.needs)?`Il faut ${y.needs==="buvette"?"la buvette":"le snack"}`:null;return`<article class="row-card"><div><h4>${y.name}</h4><p class="muted">${y.desc} \xB7 ${oi(y.salary)} par jour</p></div>
        ${F?`<span class="lock">Niveau ${y.level}</span>`:k&&!A?`<span class="lock">${k}</span>`:`<button class="${A?"ghost":"primary"}" data-act="staff" data-id="${b}">${A?"Licencier":"Embaucher"}</button>`}</article>`}).join(""),C=Object.entries(Tn).map(([b,y])=>{let A=i.s.facilities[b],F=i.s.level<y.level,k;return A.built?k='<span class="pill good">Construit</span>':A.building?k=`<span class="pill mid">Chantier ${Math.floor(A.progress*100)} %</span>`:F?k=`<span class="lock">Niveau ${y.level}</span>`:k=`<button class="primary" data-act="facility" data-id="${b}" ${i.s.money<y.price?"disabled":""}>Construire \xB7 ${oi(y.price)}</button>`,`<article class="row-card"><div><h4>${y.name}</h4><p class="muted">${y.desc}</p>${A.building?`<div class="progress-bar"><i style="width:${(A.progress*100).toFixed(0)}%"></i></div>`:""}</div>${k}</article>`}).join("");return`<h3>Boutique</h3>
      <article class="row-card"><div><h4>\xC9tag\xE8res</h4><p class="muted">${v} sur ${I} install\xE9es</p></div>
        ${v<I?`<button class="primary" data-act="shelf" ${i.s.money<eo?"disabled":""}>Ajouter \xB7 ${oi(eo)}</button>`:'<span class="pill good">Complet</span>'}</article>
      <h3>Constructions</h3>${C}<h3>Am\xE9nagements</h3>${S}<h3>Personnel</h3>${w}`}function M(){let _=i.s,v=_.stats,I=v.courts+v.shop+v.licenceFees+v.bar+v.snack+v.parking+v.tips+v.bonus,S=v.orders+v.build,w=yn[_.event?.id]??yn.calm,C=ri[_.level]?`${_.xp} / ${ri[_.level]} XP`:`${_.xp} XP`,b=i.canEndDay();return`<div class="kpis">
        <div><span>Recettes du jour</span><b>${Ze(I)}</b></div>
        <div><span>D\xE9penses du jour</span><b>${Ze(S)}</b></div>
        <div><span>Licenci\xE9s</span><b>${_.licences} / ${i.capacity}</b></div>
        <div><span>Niveau ${_.level}</span><b>${C}</b></div>
      </div>
      <p class="muted"><b>${w.name}</b> \xB7 ${w.desc}${_.challenge?`<br>D\xE9fi du jour : ${oo(_.challenge)} (${_.challenge.done?"r\xE9ussi":`${_.challenge.reward} \u20AC \xE0 gagner`})`:""}</p>
      <table class="report"><tbody>
        <tr><td>Locations de terrains</td><td>${Ze(v.courts)}</td></tr>
        <tr><td>Boutique</td><td>${Ze(v.shop)}</td></tr>
        <tr><td>Licences</td><td>${Ze(v.licenceFees)}</td></tr>
        <tr><td>Buvette</td><td>${Ze(v.bar)}</td></tr>
        <tr><td>Snack</td><td>${Ze(v.snack)}</td></tr>
        <tr><td>Parking</td><td>${Ze(v.parking)}</td></tr>
        <tr><td>Pourboires, primes et d\xE9fis</td><td>${Ze(v.tips+v.bonus)}</td></tr>
        <tr><td>Commandes</td><td>\u2212${Ze(v.orders)}</td></tr>
        <tr><td>Travaux et \xE9quipements</td><td>\u2212${Ze(v.build)}</td></tr>
        <tr><td>Clients servis aujourd'hui</td><td>${v.customers}</td></tr>
        <tr><td>Parties jou\xE9es</td><td>${v.sessions}</td></tr>
      </tbody></table>
      <div class="end-day">
        <p class="muted">${b?"Le club est ferm\xE9 et vide : tu peux terminer la journ\xE9e.":_.open?"Retourne la pancarte sur FERM\xC9 et attends le d\xE9part des derniers clients pour terminer la journ\xE9e plus t\xF4t.":"Attends le d\xE9part des derniers clients."}</p>
        <button class="primary" data-act="endday" ${b?"":"disabled"}>Terminer la journ\xE9e</button>
      </div>`}function m(){let _={shop:d,prices:h,courts:f,club:g,report:M};s.innerHTML=`<div class="laptop"><div class="pc">
      <nav>${Hf.map(([v,I,S])=>`<button class="${v===r?"on":""}" data-tab="${v}">${S}<span>${I}</span></button>`).join("")}</nav>
      <main><header><h2>${Hf.find(v=>v[0]===r)[1]}</h2>${l()}<button class="close" data-act="close" aria-label="Fermer l'ordinateur">${Si.close}</button></header>
      <div class="pc-body">${_[r]()}</div></main></div></div>`}function p(_){let v=parseFloat(String(_.value).replace(",","."));Number.isFinite(v)&&v>0&&i.setPrice(_.dataset.key,lt(v,.1,9999)),m()}s.addEventListener("click",_=>{let v=_.target.closest("button");if(!v)return;if(n.click(),v.dataset.tab){r=v.dataset.tab,m();return}let I=v.dataset.act,S=v.dataset.id,w=v.dataset.key;if(I==="close")return e();if(I==="inc"&&(o[S]=Math.min(20,(o[S]||0)+1)),I==="dec"&&(o[S]=Math.max(0,(o[S]||0)-1)),I==="buy"){let C=!0;for(let[b,y]of Object.entries(o))y>0&&(C=i.order(b,y)&&C);for(let b of Object.keys(o))delete o[b];C||n.error()}if((I==="p-"||I==="p+")&&i.setPrice(w,qn(i.s.prices[w]+(I==="p+"?.1:-.1)*(_.shiftKey?10:1))),I==="build"&&(i.buildCourt(S)?n.build():n.error()),I==="shelf"&&(i.buyShelf()?n.build():n.error()),I==="upgrade"&&(i.buyUpgrade(S)?n.build():n.error()),I==="facility"&&(i.buyFacility(S)||n.error()),I==="staff"&&i.setStaff(S,!i.s.staff[S]),I==="endday"){t();return}m()}),s.addEventListener("change",_=>{_.target.matches("input[data-key]")&&p(_.target)}),s.addEventListener("keydown",_=>{_.key==="Enter"&&_.target.matches("input[data-key]")&&p(_.target)});let x=null;return{open(_){_&&(r=_),m(),s.hidden=!1,clearInterval(x);let v=i.canEndDay();x=setInterval(()=>{if(s.hidden)return;let I=s.querySelector(".pc-money");I&&(I.textContent=Ze(i.s.money));let S=s.querySelector("#pc-pending");S&&(S.innerHTML=a()),r==="report"&&i.canEndDay()!==v&&(v=i.canEndDay(),m()),r==="club"&&s.querySelectorAll(".progress-bar i").forEach((w,C)=>{let b=Object.values(i.s.facilities).filter(y=>y.building)[C];b&&(w.style.width=`${(b.progress*100).toFixed(0)}%`)})},500)},close(){s.hidden=!0,clearInterval(x)},get isOpen(){return!s.hidden},render:m}}var O_=i=>document.getElementById(i),k_=[50,20,10,5],z_=[2,1,.5,.2,.1];function Gf(i,{sound:e,onClose:t,notify:n,onPaid:s}){let r=O_("payment"),o=null,a="",l=[],c=()=>Math.round(l.reduce((x,_)=>x+_,0)*100)/100;function d(){return`<div class="terminal">
      <div class="term-screen"><small>Montant \xE0 d\xE9biter</small><b>${a?`${a.replace(".",",")} \u20AC`:"0,00 \u20AC"}</b></div>
      <div class="keypad">
        ${["1","2","3","4","5","6","7","8","9",",","0","\u232B"].map(_=>`<button data-key="${_}">${_}</button>`).join("")}
        <button class="red" data-key="esc">Annuler</button><button class="green wide" data-key="ok">Valider</button>
      </div>
      <p class="muted small">Le total s'affiche sur l'\xE9cran de la caisse : ${Ze(i.counter.total)}. Clavier : chiffres, virgule, Entr\xE9e.</p>
    </div>`}function u(){let x=i.counter,_=Math.round((x.given-x.total)*100)/100,v=c(),I=Math.abs(v-_)<.001?"good":v>_?"over":"short";return`<div class="drawer">
      <div class="drawer-head">
        <div><span>Total</span><b>${Ze(x.total)}</b></div>
        <div><span>Re\xE7u</span><b>${Ze(x.given)}</b></div>
        <div class="due"><span>\xC0 rendre</span><b>${Ze(_)}</b></div>
      </div>
      <div class="tray">
        ${k_.map(S=>`<button class="note n${S}" data-v="${S}"><span>${S} \u20AC</span></button>`).join("")}
        ${z_.map(S=>`<button class="coin c${String(S).replace(".","")}" data-v="${S}"><span>${S>=1?S+" \u20AC":Math.round(S*100)+" c"}</span></button>`).join("")}
      </div>
      <div class="given">
        <div class="chips">${l.map((S,w)=>`<button class="chip" data-i="${w}" title="Reprendre">${Ze(S)}</button>`).join("")||'<span class="muted">Clique sur les billets et les pi\xE8ces \xE0 rendre</span>'}</div>
        <div class="given-total ${I}"><span>Rendu</span><b>${Ze(v)}</b></div>
      </div>
      <div class="drawer-actions"><button class="ghost" data-act="clear">Tout reprendre</button><button class="green" data-act="ok">Rendre la monnaie</button></div>
    </div>`}function h(){r.innerHTML=`<div class="pay-card"><header><h2>${o==="card"?"Terminal de paiement":"Tiroir-caisse"}</h2>
      <button class="close" data-act="close" aria-label="Fermer">\xD7</button></header>${o==="card"?d():u()}</div>`}function f(x){if(x==="esc")return p();if(x==="ok")return g();if(x==="\u232B")a=a.slice(0,-1);else if(x===","||x===".")a.includes(".")||(a=(a||"0")+".");else if(/^\d$/.test(x)){let[,_]=a.split(".");if(_!==void 0&&_.length>=2||a.replace(".","").length>=6)return;a=a==="0"?x:a+x}e.click(),h()}function g(){let x=parseFloat(a||"0");i.payCard(x)?(e.card(),m()):(e.error(),n("Montant incorrect : v\xE9rifie le total affich\xE9 en caisse","bad"),a="",h())}function M(){let x=i.payCash(c());x==="ok"?n("Monnaie exacte, merci !","good"):x==="short"?n("Il manquait de la monnaie : le client est m\xE9content","bad"):x==="over"&&n("Tu as rendu trop de monnaie","bad"),m()}function m(){p(),s?.()}function p(){r.hidden=!0,o=null,t()}return r.addEventListener("click",x=>{let _=x.target.closest("button");if(_){if(_.dataset.act==="close")return p();if(o==="card"&&_.dataset.key)return f(_.dataset.key);o==="cash"&&(_.dataset.v?(l.push(parseFloat(_.dataset.v)),_.dataset.v>=5?e.note():e.coin(),h()):_.dataset.i?(l.splice(+_.dataset.i,1),e.click(),h()):_.dataset.act==="clear"?(l=[],h()):_.dataset.act==="ok"&&M())}}),addEventListener("keydown",x=>{if(!r.hidden){if(x.key==="Escape")return x.preventDefault(),p();o==="card"?/^\d$/.test(x.key)?f(x.key):x.key===","||x.key==="."?f(","):x.key==="Backspace"?f("\u232B"):x.key==="Enter"&&g():o==="cash"&&x.key==="Enter"&&M()}}),{open(x){o=x,a="",l=[],h(),r.hidden=!1},close:p,get isOpen(){return!r.hidden}}}var xt=i=>document.getElementById(i);function Zf(i){let e=xt("error");e&&(e.hidden=!1,e.querySelector("code").textContent=String(i).slice(0,400))}addEventListener("error",i=>Zf(i.message));addEventListener("unhandledrejection",i=>Zf(i.reason?.message??i.reason));var Zh="tennis-club-sim-save-v1",Un=new ua({antialias:!0,powerPreference:"high-performance"}),bs="high";try{bs=localStorage.getItem("tennis-club-quality")||"high"}catch{}function Yf(){Un.setPixelRatio(bs==="high"?Math.min(devicePixelRatio,1.25):.75),Un.shadowMap.enabled=bs==="high",mn?.traverse(i=>{i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(e=>{e.needsUpdate=!0})}),Yh?.()}Un.shadowMap.type=wa;Un.toneMapping=sh;Un.toneMappingExposure=1;xt("game").appendChild(Un.domElement);var mn=new sr,Zi=new fn(70,1,.05,600);mn.add(Zi);function Yh(){Un.setSize(innerWidth,innerHeight),Zi.aspect=innerWidth/innerHeight,Zi.updateProjectionMatrix()}addEventListener("resize",Yh);Yf();var Yn=[],qh=Cf(mn,Un),Ss=Lf(mn,Yn),gt=zf(),kt=Bf(),Mt=kf(Un.domElement),st=new qa(Zi);st.yaw=0;var Ue=null,Za=null,Ms=null,mo=null,br=null,$i=null,ho=If(mn),Zn=Ph(),Mr=new Map,fo=new Map,jt="menu",Dn={target:null,hint:"",progress:0,held:null};function Jf(){try{return!!localStorage.getItem(Zh)}catch{return!1}}function Ya(){if(!Ue)return!1;try{return localStorage.setItem(Zh,JSON.stringify(Ue.serialize())),!0}catch{return!1}}function F_(){try{let i=localStorage.getItem(Zh);if(!i)return null;let e=JSON.parse(i);return!e||!(e.version>=1&&e.version<=za)?null:(e.dayStarted??(e.dayStarted=e.minute>8*60+1),e)}catch{return null}}function _s(){Zn=[...Ph(),...qh.colliders],Ue.s.shelves.forEach((i,e)=>{i.built&&Zn.push(ef(Zt[e]))});for(let i of Lt)Ue.s.courts[i.id].built&&Zn.push(...tf(i.id,an[i.surface].sport));for(let i of Object.keys(Ot)){let e=Ue.s.facilities[i];(e.built||e.building)&&Zn.push(...jd(i,e.built))}Zn.push(...Qd(Ue.s.facilities.parking.built));for(let i of mr)Zn.push(Ih(ln[i]));for(let i of Ue.cars)i.state==="parked"&&Zn.push(Ih(ln[i.spot]))}function Kf(i){let e=Ef(i.product);e.position.set(i.x,(i.y??0)+e.userData.size[1]/2,i.z),e.rotation.y=i.id*1.7%.4-.2,e.userData.interact={kind:"box",id:i.id},mn.add(e),Yn.push(e),fo.set(i.id,e)}function B_(i){let e=fo.get(i.id);if(!e)return;st.held?.box===i&&st.release(),e.parent?.remove(e);let t=Yn.indexOf(e);t>=0&&Yn.splice(t,1),fo.delete(i.id)}function Es(i){!Ue||Ue.s.objectives.includes(i)||(Ue.s.objectives.push(i),kt.objectives(Ue.s.objectives))}var Wf={},jf={spawnPerson(i){let e=Ga(i);Mr.set(i.id,e),e.root.position.set(i.x,0,i.z),mn.add(e.root)},despawnPerson(i){let e=Mr.get(i.id);e&&(mn.remove(e.root),Mr.delete(i.id))},bubble(i,e,t){Mr.get(i.id)?.say(e,t)},shelfChanged(i){Za?.refresh(i)},shelfBuilt(i,e){Za?.refresh(i),_s(),e||kt.notify("Nouvelle \xE9tag\xE8re install\xE9e","good")},counterChanged(i){Ss.showCounter(i),kt.checkout(i)},boxAdded(i){Kf(i)},boxRemoved(i){B_(i)},boxMoved(i){let e=fo.get(i.id);e&&e.position.set(i.x,(i.y??0)+e.userData.size[1]/2,i.z)},courtChanged(i,e){Ms?.refresh(i),e&&_s()},courtSession(i,e,t,n){t?Ms.startSession(i,e,n,s=>Mr.get(s.id)):Ms.endSession(i)},notify(i,e){kt.notify(i,e),gt.notify()},sound(i){gt[i]?.(),i==="order"&&Es("order"),i==="cash"&&np()&&Es("serve")},levelUp(i,e){gt.level(),$h(i,e),Ms?.refreshAll(),$i?.refreshAll()},facilityChanged(i,e){$i?.refresh(i),_s(),e?(gt.level(),$i?.refreshMenus()):gt.build()},facilityProgress(i,e){let t=Math.floor(e*50);t!==Wf[i]&&(Wf[i]=t,$i?.refresh(i))},carArrive(i){ho.arrive(i)},carParked(i){ho.parked(i),_s(),Ue.s.facilities.parking.built&&gt.coin()},carLeave(i){ho.leave(i),_s()},carRemoved(i){ho.remove(i)},standChanged(){},standServed(){gt.pour()},challengeChanged(){kt.challenge(Ue)},dayEnded(i){H_(i)},openChanged(i){Ss.setOpen(i)},pricesChanged(){Za?.invalidate(),$i?.refreshMenus()},upgradeBought(i){kt.notify("Am\xE9nagement install\xE9","good")}};function Jh(i){Ue=new ka(i,jf),Za=Uf(mn,Yn,Ue.s),$i=Tf(mn,Yn,Ue.s),Ms=Of(mn,Ue.s,Yn,e=>gt.ball(e.distanceTo(Zi.position)));for(let e of Ue.s.boxes)e.held=!1,Kf(e);Ue.syncStaff(),_s(),Ss.setOpen(!1),Ss.showCounter(Ue.counter),mo=Vf(Ue,{onClose:uo,sound:gt,onEndDay:()=>{uo(),Ue.canEndDay()&&Ue.endDay()}}),br=Gf(Ue,{sound:gt,onClose:uo,notify:(e,t)=>kt.notify(e,t)}),st.pos.set(0,0,19),st.yaw=0,st.pitch=-.05,kt.objectives(Ue.s.objectives),jt="play",xt("menu").hidden=!0,xt("hud").hidden=!1,gt.init(),Mt.requestLock(),kt.notify(`Jour ${Ue.s.day} : le club ouvre \xE0 8 h. Retourne la pancarte quand tu es pr\xEAt.`,"info"),Qf()}function Qf(){kt.challenge(Ue);let i=Ue.s.event;if(i&&i.id!=="calm"){let e=yn[i.id],t=i.id==="promo"&&i.product?` Aujourd'hui : ${Fe[i.product].name}.`:"";setTimeout(()=>kt.notify(`${e.name} : ${e.desc}${t}`,"info"),900)}}function po(i){Mt.uiOpen=!0,Mt.exitLock(),i==="computer"&&mo.open(),(i==="card"||i==="cash")&&br.open(i)}function uo(){mo?.close(),br?.isOpen&&br.close(),jt==="play"&&(Mt.uiOpen=!1,Mt.requestLock())}function ep(){jt==="play"&&(jt="pause",Mt.uiOpen=!0,mo?.close(),xt("pause").hidden=!1,xt("save-status").textContent="")}function tp(){jt="play",xt("pause").hidden=!0,Mt.uiOpen=!1,Mt.requestLock()}function $h(i,e){let t=xt("levelup");t.innerHTML=`<div><span>Niveau ${i}</span><b>Le club grandit !</b>${e.length?`<p>D\xE9bloqu\xE9 : ${e.join(" \xB7 ")}</p>`:""}</div>`,t.hidden=!1,t.classList.remove("show"),t.offsetWidth,t.classList.add("show"),clearTimeout($h.t),$h.t=setTimeout(()=>{t.hidden=!0},5200)}function H_(i){jt="summary",Mt.uiOpen=!0,Mt.exitLock(),mo?.close(),br?.isOpen&&br.close();let e=i.courts+i.shop+i.licenceFees+i.bar+i.snack+i.parking+i.tips+i.bonus,t=i.orders+i.build+i.salaries+i.upkeep,n=(o,a)=>a?`<dt>${o}</dt><dd>${Ze(a)}</dd>`:"",s=yn[i.event]??yn.calm,r=i.licenceDrift;xt("summary").innerHTML=`<div class="sheet">
    <p class="kicker">Fin de journ\xE9e</p><h2>Bilan du jour ${i.day}</h2>
    <div class="sum-grid">
      <section><h3>Recettes</h3>
        <dl><dt>Locations de terrains</dt><dd>${Ze(i.courts)}</dd><dt>Boutique</dt><dd>${Ze(i.shop)}</dd><dt>Licences</dt><dd>${Ze(i.licenceFees)}</dd>
          ${n("Buvette",i.bar)}${n("Snack",i.snack)}${n("Parking",i.parking)}${n("Pourboires",i.tips)}${n("Primes et d\xE9fis",i.bonus)}</dl>
        <p class="total">${Ze(e)}</p></section>
      <section><h3>D\xE9penses</h3>
        <dl><dt>Commandes</dt><dd>${Ze(i.orders)}</dd><dt>Travaux</dt><dd>${Ze(i.build)}</dd><dt>Salaires</dt><dd>${Ze(i.salaries)}</dd><dt>Entretien et charges</dt><dd>${Ze(i.upkeep)}</dd></dl>
        <p class="total neg">\u2212${Ze(t)}</p></section>
    </div>
    <div class="sum-kpis">
      <div><span>R\xE9sultat</span><b class="${e-t>=0?"pos":"neg"}">${e-t>=0?"+":""}${Ze(e-t)}</b></div>
      <div><span>Clients</span><b>${i.customers}</b><small>${i.happy} satisfaits \xB7 ${i.angry} m\xE9contents</small></div>
      <div><span>Licenci\xE9s</span><b>${i.licences}</b><small>${i.newLicences} nouvelles licences${r?` \xB7 ${r>0?"+":""}${r} bouche-\xE0-oreille`:""}</small></div>
      <div><span>Satisfaction</span><b>${(i.satisfaction*5).toFixed(1)} / 5</b></div>
    </div>
    <p class="sum-extra">${s.name}${i.challenge?` \xB7 D\xE9fi \xAB ${i.challenge.text} \xBB : ${i.challenge.done?'<b class="pos">r\xE9ussi</b>':'<b class="neg">rat\xE9</b>'}`:""}${i.evictions?` \xB7 ${i.evictions} groupe${i.evictions>1?"s":""} sorti${i.evictions>1?"s":""} du terrain`:""}</p>
    <button class="primary" id="btn-next-day">Jour suivant</button>
    <p class="muted small" id="sum-save"></p>
  </div>`,xt("summary").hidden=!1,xt("sum-save").textContent=Ya()?"Partie sauvegard\xE9e.":"Sauvegarde impossible dans ce navigateur : la partie continue sans.",xt("btn-next-day").addEventListener("click",()=>{Ue.nextDay(),Ss.showCounter(Ue.counter),kt.checkout(Ue.counter),xt("summary").hidden=!0,jt="play",Mt.uiOpen=!1,Mt.requestLock(),Ya(),_s(),kt.notify(`Jour ${Ue.s.day} : bonne journ\xE9e !`,"info"),Qf()})}function V_(){for(let[i,e]of Object.entries(Ot))if(st.pos.x>e.x0&&st.pos.x<e.x1&&st.pos.z>e.z0&&st.pos.z<e.z1+1.2)return i;return null}function np(){return st.pos.x>-9.8&&st.pos.x<-2.6&&st.pos.z>3.8&&st.pos.z<6.6}Mt.onLockChange=(i,e)=>{e==="exit"&&jt==="play"&&!Mt.uiOpen&&ep()};Mt.onKey=i=>{if(i==="Escape")return jt==="pause"?tp():Mt.uiOpen&&jt==="play"?uo():jt==="play"&&Mt.fallback?ep():void 0;jt!=="play"||Mt.uiOpen||(i==="KeyE"&&rp(),i==="KeyG"&&op(),i==="Tab"&&po("computer"),i==="KeyM"&&(xt("btn-mute").textContent=gt.toggle()?"Activer le son":"Couper le son"))};Mt.onClick=(i,e)=>{if(jt!=="play"||Mt.uiOpen||e!=="down")return;let t=Dn.target;if(!t)return;let n=st.held?.box;if(i==="primary")if(n&&t.kind==="shelf"){let s=Ue.placeItem(n,t.shelf,t.level);s==="ok"?(gt.place(),Es("shelf")):s==="full"?(kt.notify("Cette tablette est pleine","bad"),gt.error()):s==="other"?(kt.notify("Un autre produit est d\xE9j\xE0 rang\xE9 ici","bad"),gt.error()):s==="none"?(kt.notify("Ach\xE8te d'abord cette \xE9tag\xE8re sur l'ordinateur","bad"),gt.error()):s==="zone"&&(kt.notify(ip(n.product),"bad"),gt.error())}else t.kind==="scan"&&!t.done?Ue.scan(t.uid):t.kind==="card"&&Ue.counter.phase==="pay"&&Ue.counter.method==="card"?po("card"):t.kind==="cash"&&Ue.counter.phase==="pay"&&Ue.counter.method==="cash"&&po("cash");else if(i==="secondary")if(n&&t.kind==="shelf"){let s=Ue.takeItem(n,t.shelf,t.level);s==="ok"?gt.pick():s==="full"&&kt.notify("Le carton est plein","bad")}else!n&&t.kind==="shelf"&&Ue.clearLevel(t.shelf,t.level)};function ip(i){let e=Fe[i].zone;return e==="bar"?"Ce produit se range dans le frigo de la buvette":e==="snack"?"Ce produit se range dans la vitrine du snack":"Ce produit se range dans la boutique du club-house"}function G_(i){return i.order.map(e=>`${e.qty} \xD7 ${Fe[e.product].short}`).join(" + ")}function sp(){for(let i of Lt){if(!Ue.court[i.id].overtime)continue;let e=cn[i.id],t=an[i.surface].sport==="padel"?{w:12,l:22}:{w:18.3,l:36.6};if(Math.abs(st.pos.x-e.cx)<t.w/2+2&&Math.abs(st.pos.z-e.cz)<t.l/2+2.5)return i.id}return null}function W_(i){let e=Ue.evict(i,"player");e==="ok"?(gt.whistle(),kt.notify("Les joueurs lib\xE8rent le terrain","good")):e==="refused"&&gt.error()}function rp(){let i=Dn.target;if(!i||i.kind==="court"){let e=sp();if(e)return W_(e)}if(i){if(i.kind==="stand"){let e=Ue.serveStand(i.stand);e==="none"?kt.notify("Personne n'attend au comptoir","info"):e==="ok"&&Es("serve");return}if(i.kind==="box"&&!st.held){let e=Ue.s.boxes.find(s=>s.id===i.id);if(!e||!Ue.pickBox(e))return;let t=fo.get(e.id);mn.remove(t);let n=Yn.indexOf(t);n>=0&&Yn.splice(n,1),st.hold(e,t),gt.pick(),Es("pick")}else if(i.kind==="laptop")po("computer");else if(i.kind==="sign"){let e=Ue.toggleOpen();gt.click(),e&&(Es("open"),kt.notify("Le club est ouvert : les premiers clients arrivent","good"))}}}function op(){if(!st.held)return;let i=st.held,e=st.floorPoint(2.2)??new O(st.pos.x-Math.sin(st.yaw)*.9,0,st.pos.z-Math.cos(st.yaw)*.9);for(let t of Zn)if(e.x>t.minX-.3&&e.x<t.maxX+.3&&e.z>t.minZ-.3&&e.z<t.maxZ+.3){e.set(st.pos.x-Math.sin(st.yaw)*.7,0,st.pos.z-Math.cos(st.yaw)*.7);break}st.release(),mn.add(i.mesh),Yn.push(i.mesh),i.mesh.rotation.set(0,st.yaw,0),Ue.dropBox(i.box,e.x,e.z,0),gt.place()}function X_(i){Dn.target=st.aim(Yn,3.4);let e=Dn.target,t=st.held?.box;Dn.held=t?{product:t.product,qty:t.qty}:null;let n="",s=r=>`<kbd>${r}</kbd>`;if(e){if(e.kind==="shelf"){let r=Ue.s.shelves[e.shelf].levels[e.level],o=r.product?`${Fe[r.product].short} \xB7 ${r.qty} / ${Fe[r.product].shelf}`:"Emplacement libre";t?Zt[e.shelf].zone!==Fe[t.product].zone?n=`${o}<br><span class="warn">${ip(t.product)}</span>`:r.product&&r.product!==t.product&&r.qty>0?n=`${o}<br><span class="warn">Un autre produit est rang\xE9 ici</span>`:n=`${o}<br>${s("Clic gauche")} Ranger \xB7 ${s("Clic droit")} Reprendre`:n=r.product&&r.qty===0?`${o}<br>${s("Clic droit")} Retirer l'\xE9tiquette`:o}else if(e.kind==="box"&&!t){let r=Ue.s.boxes.find(o=>o.id===e.id);r&&(n=`${s("E")} Prendre le carton \xB7 ${Fe[r.product].short} (${r.qty})`)}else if(e.kind==="laptop")n=`${s("E")} Utiliser l'ordinateur`;else if(e.kind==="sign")n=`${s("E")} ${Ue.s.open?"Fermer le club":"Ouvrir le club"}`;else if(e.kind==="scan"&&!e.done)n=`${s("Clic")} Scanner l'article`;else if(e.kind==="card")n=Ue.counter.phase==="pay"&&Ue.counter.method==="card"?`${s("Clic")} Encaisser par carte`:"Terminal de paiement";else if(e.kind==="cash")n=Ue.counter.phase==="pay"&&Ue.counter.method==="cash"?`${s("Clic")} Ouvrir le tiroir-caisse`:"Tiroir-caisse";else if(e.kind==="stand"){let r=Ue.standOrder(e.stand),o=e.stand==="buvette"?"Buvette":"Snack";if(r){let a=r.order.find(l=>Ue.standStock(e.stand,l.product)<l.qty);n=`${o} \xB7 commande : ${G_(r)}${a?`<br><span class="warn">Stock insuffisant : ${Fe[a.product].short}</span>`:""}<br>${s("E")} Servir`}else n=`${o} \xB7 personne n'attend`}else if(e.kind==="court"){let r=Ue.s.courts[e.court];Ue.canClean(e.court)?r.wear>.02?n=`${s("Maintenir E")} Brosser le terrain \xB7 usure ${(r.wear*100).toFixed(0)} %`:n="Terrain impeccable":n="Partie en cours"}}if(e?.kind==="court"&&Mt.down("KeyE")&&Ue.canClean(e.court)&&Ue.s.courts[e.court].wear>.02?(Dn.progress+=i/2.8,gt.brushing(!0),Dn.progress>=1&&(Ue.clean(e.court),Dn.progress=0,gt.brushing(!1),gt.place(),Es("clean"),kt.notify("Terrain bross\xE9","good"))):(Dn.progress=0,gt.brushing(!1)),!n||e?.kind==="court"){let r=sp();r&&(n=`<span class="warn">${Lt.find(o=>o.id===r).label} : cr\xE9neau d\xE9pass\xE9 !</span><br>${s("E")} Faire sortir les joueurs`)}Dn.hint=n}xt("btn-new").addEventListener("click",()=>{Jf()&&!q_()||Jh(Nh())});function q_(){let i=xt("btn-new");return i.dataset.confirm?!0:(i.dataset.confirm="1",i.textContent="\xC9craser la sauvegarde ?",setTimeout(()=>{i.dataset.confirm="",i.textContent="Nouvelle partie"},3e3),!1)}xt("btn-continue").addEventListener("click",()=>{let i=F_();i&&Jh(i)});xt("btn-continue").hidden=!Jf();xt("btn-resume").addEventListener("click",tp);xt("btn-save").addEventListener("click",()=>{xt("save-status").textContent=Ya()?"Partie sauvegard\xE9e.":"Sauvegarde impossible dans ce navigateur."});xt("btn-quit").addEventListener("click",()=>{Ya(),location.reload()});xt("click-to-play").addEventListener("click",()=>Mt.requestLock());xt("btn-mute").addEventListener("click",i=>{i.currentTarget.textContent=gt.toggle()?"Activer le son":"Couper le son"});var ap=xt("btn-quality"),lp=()=>{ap.textContent=bs==="high"?"Graphismes : haute qualit\xE9":"Graphismes : mode \xE9conomie"};lp();ap.addEventListener("click",()=>{bs=bs==="high"?"low":"high";try{localStorage.setItem("tennis-club-quality",bs)}catch{}Yf(),lp()});var $_=new Sa,co=0,Xh=4,Xf=0,qf=0,$f=0;function Z_(){let i=Math.min($_.getDelta(),.05);if((qf!==innerWidth||$f!==innerHeight)&&(qf=innerWidth,$f=innerHeight,Yh()),jt==="menu")co+=i*.05,Zi.position.set(Math.sin(co)*26,7+Math.sin(co*.7)*1.5,30+Math.cos(co)*8),Zi.lookAt(0,2,4),qh.setTime(10.5*60+Math.sin(co)*30,new O(0,0,5));else{jt==="play"&&(Ue.update(i,{playerAtCounter:np(),playerAtStand:V_()}),st.update(i,Mt,Zn,Kd),st.pushFrom(Ue.persons),st.resolve(Zn),X_(i),Math.floor(st.stepPhase/Math.PI)!==Xf&&(Xf=Math.floor(st.stepPhase/Math.PI),gt.step()),Xh-=i,Xh<=0&&(Xh=5+Math.random()*12,Ue.s.minute<20*60&&(st.pos.z<0||st.pos.z>14)&&gt.bird()));for(let s of Ue.persons)Mr.get(s.id)?.update(i,s);Ms.update(i),$i.setBarrier(ho.update(i)),Ss.animateCounter(i),st.animateHeld(i);let{night:e}=qh.setTime(Ue.s.minute,st.pos);Ss.update(Ue.s.minute,e),$i.update(i,e),Ms.setNight(e>.35&&Ue.s.upgrades.lights),kt.update(Ue,Dn);let t=Mt.locked||Mt.fallback||jt!=="play"||Mt.uiOpen;xt("click-to-play").hidden!==t&&(xt("click-to-play").hidden=t);let n=!(Mt.fallback&&jt==="play"&&!Mt.uiOpen);xt("look-help").hidden!==n&&(xt("look-help").hidden=n)}Un.render(mn,Zi)}Un.setAnimationLoop(Z_);xt("loading").hidden=!0;window.__club={get club(){return Ue},colliders:()=>Zn,renderer:Un,scene:mn,player:st,startGame:Jh,createState:Nh,hooks:jf,interact:rp,input:Mt,ui:Dn,openUi:po,closeUi:uo,dropHeld:op};})();

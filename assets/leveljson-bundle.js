(()=>{var bs=Object.create;var ai=Object.defineProperty;var ws=Object.getOwnPropertyDescriptor;var Os=Object.getOwnPropertyNames;var Es=Object.getPrototypeOf,Ns=Object.prototype.hasOwnProperty;var T=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var As=(i,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Os(e))!Ns.call(i,s)&&s!==t&&ai(i,s,{get:()=>e[s],enumerable:!(r=ws(e,s))||r.enumerable});return i};var Rs=(i,e,t)=>(t=i!=null?bs(Es(i)):{},As(e||!i||!i.__esModule?ai(t,"default",{value:i,enumerable:!0}):t,i));var lr=T((ra,fi)=>{"use strict";fi.exports=Ts;function Ts(i,e){for(var t=new Array(arguments.length-1),r=0,s=2,n=!0;s<arguments.length;)t[r++]=arguments[s++];return new Promise(function(f,a){t[r]=function(m){if(n)if(n=!1,m)a(m);else{for(var w=new Array(arguments.length-1),N=0;N<w.length;)w[N++]=arguments[N];f.apply(null,w)}};try{i.apply(e||null,t)}catch(l){n&&(n=!1,a(l))}})}});var ci=T(hi=>{"use strict";var Dt=hi;Dt.length=function(e){var t=e.length;if(!t)return 0;for(;t>0&&e.charAt(t-1)==="=";)--t;return Math.floor(t*3/4)};var at=new Array(64),qt=new Array(123);for(Ee=0;Ee<64;)qt[at[Ee]=Ee<26?Ee+65:Ee<52?Ee+71:Ee<62?Ee-4:Ee-59|43]=Ee++;var Ee;qt[45]=62;qt[95]=63;Dt.encode=function(e,t,r){for(var s=null,n=[],o=0,f=0,a;t<r;){var l=e[t++];switch(f){case 0:n[o++]=at[l>>2],a=(l&3)<<4,f=1;break;case 1:n[o++]=at[a|l>>4],a=(l&15)<<2,f=2;break;case 2:n[o++]=at[a|l>>6],n[o++]=at[l&63],f=0;break}o>8191&&((s||(s=[])).push(String.fromCharCode.apply(String,n)),o=0)}return f&&(n[o++]=at[a],n[o++]=61,f===1&&(n[o++]=61)),s?(o&&s.push(String.fromCharCode.apply(String,n.slice(0,o))),s.join("")):String.fromCharCode.apply(String,n.slice(0,o))};var li="invalid encoding";Dt.decode=function(e,t,r){for(var s=r,n=0,o,f=0;f<e.length;){var a=e.charCodeAt(f++);if(a===61&&n>1)break;if((a=qt[a])===void 0)throw Error(li);switch(n){case 0:o=a,n=1;break;case 1:t[r++]=o<<2|(a&48)>>4,o=a,n=2;break;case 2:t[r++]=(o&15)<<4|(a&60)>>2,o=a,n=3;break;case 3:t[r++]=(o&3)<<6|a,n=0;break}}if(n===1)throw Error(li);return r-s};var Ls=/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,Is=/[-_]/,xs=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2}(?:==)?|[A-Za-z0-9_-]{3}=?)?$/;Dt.test=function(e){return Ls.test(e)||Is.test(e)&&xs.test(e)}});var pi=T((na,di)=>{"use strict";di.exports=Ft;function Ft(){this._listeners=Object.create(null)}Ft.prototype.on=function(e,t,r){return(this._listeners[e]||(this._listeners[e]=[])).push({fn:t,ctx:r||this}),this};Ft.prototype.off=function(e,t){if(e===void 0)this._listeners=Object.create(null);else if(t===void 0)this._listeners[e]=[];else{var r=this._listeners[e];if(!r)return this;for(var s=0;s<r.length;)r[s].fn===t?r.splice(s,1):++s}return this};Ft.prototype.emit=function(e){var t=this._listeners[e];if(t){for(var r=[],s=1;s<arguments.length;)r.push(arguments[s++]);for(s=0;s<t.length;)t[s].fn.apply(t[s++].ctx,r)}return this}});var wi=T((sa,bi)=>{"use strict";bi.exports=gi(gi);function gi(i){return typeof Float32Array!="undefined"?(function(){var e=new Float32Array([-0]),t=new Uint8Array(e.buffer),r=t[3]===128;function s(a,l,m){e[0]=a,l[m]=t[0],l[m+1]=t[1],l[m+2]=t[2],l[m+3]=t[3]}function n(a,l,m){e[0]=a,l[m]=t[3],l[m+1]=t[2],l[m+2]=t[1],l[m+3]=t[0]}i.writeFloatLE=r?s:n,i.writeFloatBE=r?n:s;function o(a,l){return t[0]=a[l],t[1]=a[l+1],t[2]=a[l+2],t[3]=a[l+3],e[0]}function f(a,l){return t[3]=a[l],t[2]=a[l+1],t[1]=a[l+2],t[0]=a[l+3],e[0]}i.readFloatLE=r?o:f,i.readFloatBE=r?f:o})():(function(){function e(r,s,n,o){var f=s<0?1:0;if(f&&(s=-s),s===0)r(1/s>0?0:2147483648,n,o);else if(isNaN(s))r(2143289344,n,o);else if(s>34028234663852886e22)r((f<<31|2139095040)>>>0,n,o);else if(s<11754943508222875e-54)r((f<<31|Math.round(s/1401298464324817e-60))>>>0,n,o);else{var a=Math.floor(Math.log(s)/Math.LN2),l=Math.round(s*Math.pow(2,-a)*8388608)&8388607;r((f<<31|a+127<<23|l)>>>0,n,o)}}i.writeFloatLE=e.bind(null,mi),i.writeFloatBE=e.bind(null,vi);function t(r,s,n){var o=r(s,n),f=(o>>31)*2+1,a=o>>>23&255,l=o&8388607;return a===255?l?NaN:f*(1/0):a===0?f*1401298464324817e-60*l:f*Math.pow(2,a-150)*(l+8388608)}i.readFloatLE=t.bind(null,yi),i.readFloatBE=t.bind(null,_i)})(),typeof Float64Array!="undefined"?(function(){var e=new Float64Array([-0]),t=new Uint8Array(e.buffer),r=t[7]===128;function s(a,l,m){e[0]=a,l[m]=t[0],l[m+1]=t[1],l[m+2]=t[2],l[m+3]=t[3],l[m+4]=t[4],l[m+5]=t[5],l[m+6]=t[6],l[m+7]=t[7]}function n(a,l,m){e[0]=a,l[m]=t[7],l[m+1]=t[6],l[m+2]=t[5],l[m+3]=t[4],l[m+4]=t[3],l[m+5]=t[2],l[m+6]=t[1],l[m+7]=t[0]}i.writeDoubleLE=r?s:n,i.writeDoubleBE=r?n:s;function o(a,l){return t[0]=a[l],t[1]=a[l+1],t[2]=a[l+2],t[3]=a[l+3],t[4]=a[l+4],t[5]=a[l+5],t[6]=a[l+6],t[7]=a[l+7],e[0]}function f(a,l){return t[7]=a[l],t[6]=a[l+1],t[5]=a[l+2],t[4]=a[l+3],t[3]=a[l+4],t[2]=a[l+5],t[1]=a[l+6],t[0]=a[l+7],e[0]}i.readDoubleLE=r?o:f,i.readDoubleBE=r?f:o})():(function(){function e(r,s,n,o,f,a){var l=o<0?1:0;if(l&&(o=-o),o===0)r(0,f,a+s),r(1/o>0?0:2147483648,f,a+n);else if(isNaN(o))r(0,f,a+s),r(2146959360,f,a+n);else if(o>17976931348623157e292)r(0,f,a+s),r((l<<31|2146435072)>>>0,f,a+n);else{var m;if(o<22250738585072014e-324)m=o/5e-324,r(m>>>0,f,a+s),r((l<<31|m/4294967296)>>>0,f,a+n);else{var w=Math.floor(Math.log(o)/Math.LN2);w===1024&&(w=1023),m=o*Math.pow(2,-w),r(m*4503599627370496>>>0,f,a+s),r((l<<31|w+1023<<20|m*1048576&1048575)>>>0,f,a+n)}}}i.writeDoubleLE=e.bind(null,mi,0,4),i.writeDoubleBE=e.bind(null,vi,4,0);function t(r,s,n,o,f){var a=r(o,f+s),l=r(o,f+n),m=(l>>31)*2+1,w=l>>>20&2047,N=4294967296*(l&1048575)+a;return w===2047?N?NaN:m*(1/0):w===0?m*5e-324*N:m*Math.pow(2,w-1075)*(N+4503599627370496)}i.readDoubleLE=t.bind(null,yi,0,4),i.readDoubleBE=t.bind(null,_i,4,0)})(),i}function mi(i,e,t){e[t]=i&255,e[t+1]=i>>>8&255,e[t+2]=i>>>16&255,e[t+3]=i>>>24}function vi(i,e,t){e[t]=i>>>24,e[t+1]=i>>>16&255,e[t+2]=i>>>8&255,e[t+3]=i&255}function yi(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0}function _i(i,e){return(i[e]<<24|i[e+1]<<16|i[e+2]<<8|i[e+3])>>>0}});var Ni=T(Ei=>{"use strict";var Pt=Ei,Ct=new TextDecoder("utf-8",{ignoreBOM:!0}),wt,Oi=64;try{wt=new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0})}catch{wt=Ct}Pt.length=function(e){for(var t=0,r=0,s=0;s<e.length;++s)r=e.charCodeAt(s),r<128?t+=1:r<2048?t+=2:(r&64512)===55296&&(e.charCodeAt(s+1)&64512)===56320?(++s,t+=4):t+=3;return t};function ut(i,e,t,r){var s=t===0&&r===e.length?e:e.subarray(t,r);return i.decode(s)}Pt.read=function(e,t,r){if(r-t<1)return"";if(r-t>=Oi)return ut(Ct,e,t,r);for(var s="",n=t,o,f,a,l,m,w,N,R;n+7<r;n+=8){if(o=e[n],f=e[n+1],a=e[n+2],l=e[n+3],m=e[n+4],w=e[n+5],N=e[n+6],R=e[n+7],(o|f|a|l|m|w|N|R)&128)return s+ut(Ct,e,n,r);s+=String.fromCharCode(o,f,a,l,m,w,N,R)}for(;n<r;++n){if(o=e[n],o&128)return s+ut(Ct,e,n,r);s+=String.fromCharCode(o)}return s};Pt.readStrict=function(e,t,r){if(r-t<1)return"";if(r-t>=Oi)return ut(wt,e,t,r);for(var s="",n=t,o,f,a,l,m,w,N,R;n+7<r;n+=8){if(o=e[n],f=e[n+1],a=e[n+2],l=e[n+3],m=e[n+4],w=e[n+5],N=e[n+6],R=e[n+7],(o|f|a|l|m|w|N|R)&128)return s+ut(wt,e,n,r);s+=String.fromCharCode(o,f,a,l,m,w,N,R)}for(;n<r;++n){if(o=e[n],o&128)return s+ut(wt,e,n,r);s+=String.fromCharCode(o)}return s};Pt.write=function(e,t,r){for(var s=r,n,o,f=0;f<e.length;++f)n=e.charCodeAt(f),n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=n&63|128):(n&64512)===55296&&((o=e.charCodeAt(f+1))&64512)===56320?(n=65536+((n&1023)<<10)+(o&1023),++f,t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=n&63|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=n&63|128);return r-s}});var Ri=T((aa,Ai)=>{"use strict";Ai.exports=Ds;function Ds(i,e,t){var r=t||8192,s=r>>>1,n=null,o=r;return function(a){if(a<1||a>s)return i(a);o+a>r&&(n=i(r),o=0);var l=e.call(n,o,o+=a);return o&7&&(o=(o|7)+1),l}}});var Ti=T((ua,Si)=>{"use strict";Si.exports=re;var Ot;function re(i,e){this.lo=i>>>0,this.hi=e>>>0}var et=re.zero=new re(0,0);et.toNumber=function(){return 0};et.zzEncode=et.zzDecode=function(){return this};et.length=function(){return 1};var qs=re.zeroHash="\0\0\0\0\0\0\0\0";re.fromNumber=function(e){if(e===0)return et;var t=e<0;t&&(e=-e);var r=e>>>0,s=(e-r)/4294967296>>>0;return t&&(s=~s>>>0,r=~r>>>0,++r>4294967295&&(r=0,++s>4294967295&&(s=0))),new re(r,s)};re.from=function(e){if(typeof e=="number")return re.fromNumber(e);if(typeof e=="string"||e instanceof String)if(Ot)e=Ot.fromString(e);else return re.fromNumber(parseInt(e,10));return e.low||e.high?new re(e.low>>>0,e.high>>>0):et};re.prototype.toNumber=function(e){if(!e&&this.hi>>>31){var t=~this.lo+1>>>0,r=~this.hi>>>0;return t||(r=r+1>>>0),-(t+r*4294967296)}return this.lo+this.hi*4294967296};re.prototype.toLong=function(e){return Ot?new Ot(this.lo|0,this.hi|0,!!e):{low:this.lo|0,high:this.hi|0,unsigned:!!e}};var Je=String.prototype.charCodeAt;re.fromHash=function(e){return e===qs?et:new re((Je.call(e,0)|Je.call(e,1)<<8|Je.call(e,2)<<16|Je.call(e,3)<<24)>>>0,(Je.call(e,4)|Je.call(e,5)<<8|Je.call(e,6)<<16|Je.call(e,7)<<24)>>>0)};re.prototype.toHash=function(){return String.fromCharCode(this.lo&255,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,this.hi&255,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)};re.prototype.zzEncode=function(){var e=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^e)>>>0,this.lo=(this.lo<<1^e)>>>0,this};re.prototype.zzDecode=function(){var e=-(this.lo&1);return this.lo=((this.lo>>>1|this.hi<<31)^e)>>>0,this.hi=(this.hi>>>1^e)>>>0,this};re.prototype.length=function(){var e=this.lo,t=(this.lo>>>28|this.hi<<4)>>>0,r=this.hi>>>24;return r===0?t===0?e<16384?e<128?1:2:e<2097152?3:4:t<16384?t<128?5:6:t<2097152?7:8:r<128?9:10};re._configure=function(i){Ot=i}});var Li=T((Et,hr)=>{(function(i,e){function t(r){return r.default||r}typeof define=="function"&&define.amd?define([],function(){var r={};return e(r),t(r)}):typeof Et=="object"?(e(Et),typeof hr=="object"&&(hr.exports=t(Et))):(function(){var r={};e(r),i.Long=t(r)})()})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:Et,function(i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=null;try{e=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function t(d,u,_){this.low=d|0,this.high=u|0,this.unsigned=!!_}t.prototype.__isLong__,Object.defineProperty(t.prototype,"__isLong__",{value:!0});function r(d){return(d&&d.__isLong__)===!0}function s(d){var u=Math.clz32(d&-d);return d?31-u:u}t.isLong=r;var n={},o={};function f(d,u){var _,L,M;return u?(d>>>=0,(M=0<=d&&d<256)&&(L=o[d],L)?L:(_=l(d,0,!0),M&&(o[d]=_),_)):(d|=0,(M=-128<=d&&d<128)&&(L=n[d],L)?L:(_=l(d,d<0?-1:0,!1),M&&(n[d]=_),_))}t.fromInt=f;function a(d,u){if(isNaN(d))return u?y:ue;if(u){if(d<0)return y;if(d>=B)return be}else{if(d<=-K)return U;if(d+1>=K)return de}return d<0?a(-d,u).neg():l(d%I|0,d/I|0,u)}t.fromNumber=a;function l(d,u,_){return new t(d,u,_)}t.fromBits=l;var m=Math.pow;function w(d,u,_){if(d.length===0)throw Error("empty string");if(typeof u=="number"?(_=u,u=!1):u=!!u,d==="NaN"||d==="Infinity"||d==="+Infinity"||d==="-Infinity")return u?y:ue;if(_=_||10,_<2||36<_)throw RangeError("radix");var L;if((L=d.indexOf("-"))>0)throw Error("interior hyphen");if(L===0)return w(d.substring(1),u,_).neg();for(var M=a(m(_,8)),D=ue,Y=0;Y<d.length;Y+=8){var fe=Math.min(8,d.length-Y),ge=parseInt(d.substring(Y,Y+fe),_);if(fe<8){var te=a(m(_,fe));D=D.mul(te).add(a(ge))}else D=D.mul(M),D=D.add(a(ge))}return D.unsigned=u,D}t.fromString=w;function N(d,u){return typeof d=="number"?a(d,u):typeof d=="string"?w(d,u):l(d.low,d.high,typeof u=="boolean"?u:d.unsigned)}t.fromValue=N;var R=65536,S=1<<24,I=R*R,B=I*I,K=B/2,ee=f(S),ue=f(0);t.ZERO=ue;var y=f(0,!0);t.UZERO=y;var j=f(1);t.ONE=j;var V=f(1,!0);t.UONE=V;var W=f(-1);t.NEG_ONE=W;var de=l(-1,2147483647,!1);t.MAX_VALUE=de;var be=l(-1,-1,!0);t.MAX_UNSIGNED_VALUE=be;var U=l(0,-2147483648,!1);t.MIN_VALUE=U;var p=t.prototype;p.toInt=function(){return this.unsigned?this.low>>>0:this.low},p.toNumber=function(){return this.unsigned?(this.high>>>0)*I+(this.low>>>0):this.high*I+(this.low>>>0)},p.toString=function(u){if(u=u||10,u<2||36<u)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(U)){var _=a(u),L=this.div(_),M=L.mul(_).sub(this);return L.toString(u)+M.toInt().toString(u)}else return"-"+this.neg().toString(u);for(var D=a(m(u,6),this.unsigned),Y=this,fe="";;){var ge=Y.div(D),te=Y.sub(ge.mul(D)).toInt()>>>0,Q=te.toString(u);if(Y=ge,Y.isZero())return Q+fe;for(;Q.length<6;)Q="0"+Q;fe=""+Q+fe}},p.getHighBits=function(){return this.high},p.getHighBitsUnsigned=function(){return this.high>>>0},p.getLowBits=function(){return this.low},p.getLowBitsUnsigned=function(){return this.low>>>0},p.getNumBitsAbs=function(){if(this.isNegative())return this.eq(U)?64:this.neg().getNumBitsAbs();for(var u=this.high!=0?this.high:this.low,_=31;_>0&&(u&1<<_)==0;_--);return this.high!=0?_+33:_+1},p.isSafeInteger=function(){var u=this.high>>21;return u?this.unsigned?!1:u===-1&&!(this.low===0&&this.high===-2097152):!0},p.isZero=function(){return this.high===0&&this.low===0},p.eqz=p.isZero,p.isNegative=function(){return!this.unsigned&&this.high<0},p.isPositive=function(){return this.unsigned||this.high>=0},p.isOdd=function(){return(this.low&1)===1},p.isEven=function(){return(this.low&1)===0},p.equals=function(u){return r(u)||(u=N(u)),this.unsigned!==u.unsigned&&this.high>>>31===1&&u.high>>>31===1?!1:this.high===u.high&&this.low===u.low},p.eq=p.equals,p.notEquals=function(u){return!this.eq(u)},p.neq=p.notEquals,p.ne=p.notEquals,p.lessThan=function(u){return this.comp(u)<0},p.lt=p.lessThan,p.lessThanOrEqual=function(u){return this.comp(u)<=0},p.lte=p.lessThanOrEqual,p.le=p.lessThanOrEqual,p.greaterThan=function(u){return this.comp(u)>0},p.gt=p.greaterThan,p.greaterThanOrEqual=function(u){return this.comp(u)>=0},p.gte=p.greaterThanOrEqual,p.ge=p.greaterThanOrEqual,p.compare=function(u){if(r(u)||(u=N(u)),this.eq(u))return 0;var _=this.isNegative(),L=u.isNegative();return _&&!L?-1:!_&&L?1:this.unsigned?u.high>>>0>this.high>>>0||u.high===this.high&&u.low>>>0>this.low>>>0?-1:1:this.sub(u).isNegative()?-1:1},p.comp=p.compare,p.negate=function(){return!this.unsigned&&this.eq(U)?U:this.not().add(j)},p.neg=p.negate,p.add=function(u){r(u)||(u=N(u));var _=this.high>>>16,L=this.high&65535,M=this.low>>>16,D=this.low&65535,Y=u.high>>>16,fe=u.high&65535,ge=u.low>>>16,te=u.low&65535,Q=0,H=0,X=0,le=0;return le+=D+te,X+=le>>>16,le&=65535,X+=M+ge,H+=X>>>16,X&=65535,H+=L+fe,Q+=H>>>16,H&=65535,Q+=_+Y,Q&=65535,l(X<<16|le,Q<<16|H,this.unsigned)},p.subtract=function(u){return r(u)||(u=N(u)),this.add(u.neg())},p.sub=p.subtract,p.multiply=function(u){if(this.isZero())return this;if(r(u)||(u=N(u)),e){var _=e.mul(this.low,this.high,u.low,u.high);return l(_,e.get_high(),this.unsigned)}if(u.isZero())return this.unsigned?y:ue;if(this.eq(U))return u.isOdd()?U:ue;if(u.eq(U))return this.isOdd()?U:ue;if(this.isNegative())return u.isNegative()?this.neg().mul(u.neg()):this.neg().mul(u).neg();if(u.isNegative())return this.mul(u.neg()).neg();if(this.lt(ee)&&u.lt(ee))return a(this.toNumber()*u.toNumber(),this.unsigned);var L=this.high>>>16,M=this.high&65535,D=this.low>>>16,Y=this.low&65535,fe=u.high>>>16,ge=u.high&65535,te=u.low>>>16,Q=u.low&65535,H=0,X=0,le=0,ot=0;return ot+=Y*Q,le+=ot>>>16,ot&=65535,le+=D*Q,X+=le>>>16,le&=65535,le+=Y*te,X+=le>>>16,le&=65535,X+=M*Q,H+=X>>>16,X&=65535,X+=D*te,H+=X>>>16,X&=65535,X+=Y*ge,H+=X>>>16,X&=65535,H+=L*Q+M*te+D*ge+Y*fe,H&=65535,l(le<<16|ot,H<<16|X,this.unsigned)},p.mul=p.multiply,p.divide=function(u){if(r(u)||(u=N(u)),u.isZero())throw Error("division by zero");if(e){if(!this.unsigned&&this.high===-2147483648&&u.low===-1&&u.high===-1)return this;var _=(this.unsigned?e.div_u:e.div_s)(this.low,this.high,u.low,u.high);return l(_,e.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?y:ue;var L,M,D;if(this.unsigned){if(u.unsigned||(u=u.toUnsigned()),u.gt(this))return y;if(u.gt(this.shru(1)))return V;D=y}else{if(this.eq(U)){if(u.eq(j)||u.eq(W))return U;if(u.eq(U))return j;var Y=this.shr(1);return L=Y.div(u).shl(1),L.eq(ue)?u.isNegative()?j:W:(M=this.sub(u.mul(L)),D=L.add(M.div(u)),D)}else if(u.eq(U))return this.unsigned?y:ue;if(this.isNegative())return u.isNegative()?this.neg().div(u.neg()):this.neg().div(u).neg();if(u.isNegative())return this.div(u.neg()).neg();D=ue}for(M=this;M.gte(u);){L=Math.max(1,Math.floor(M.toNumber()/u.toNumber()));for(var fe=Math.ceil(Math.log(L)/Math.LN2),ge=fe<=48?1:m(2,fe-48),te=a(L),Q=te.mul(u);Q.isNegative()||Q.gt(M);)L-=ge,te=a(L,this.unsigned),Q=te.mul(u);te.isZero()&&(te=j),D=D.add(te),M=M.sub(Q)}return D},p.div=p.divide,p.modulo=function(u){if(r(u)||(u=N(u)),e){var _=(this.unsigned?e.rem_u:e.rem_s)(this.low,this.high,u.low,u.high);return l(_,e.get_high(),this.unsigned)}return this.sub(this.div(u).mul(u))},p.mod=p.modulo,p.rem=p.modulo,p.not=function(){return l(~this.low,~this.high,this.unsigned)},p.countLeadingZeros=function(){return this.high?Math.clz32(this.high):Math.clz32(this.low)+32},p.clz=p.countLeadingZeros,p.countTrailingZeros=function(){return this.low?s(this.low):s(this.high)+32},p.ctz=p.countTrailingZeros,p.and=function(u){return r(u)||(u=N(u)),l(this.low&u.low,this.high&u.high,this.unsigned)},p.or=function(u){return r(u)||(u=N(u)),l(this.low|u.low,this.high|u.high,this.unsigned)},p.xor=function(u){return r(u)||(u=N(u)),l(this.low^u.low,this.high^u.high,this.unsigned)},p.shiftLeft=function(u){return r(u)&&(u=u.toInt()),(u&=63)===0?this:u<32?l(this.low<<u,this.high<<u|this.low>>>32-u,this.unsigned):l(0,this.low<<u-32,this.unsigned)},p.shl=p.shiftLeft,p.shiftRight=function(u){return r(u)&&(u=u.toInt()),(u&=63)===0?this:u<32?l(this.low>>>u|this.high<<32-u,this.high>>u,this.unsigned):l(this.high>>u-32,this.high>=0?0:-1,this.unsigned)},p.shr=p.shiftRight,p.shiftRightUnsigned=function(u){return r(u)&&(u=u.toInt()),(u&=63)===0?this:u<32?l(this.low>>>u|this.high<<32-u,this.high>>>u,this.unsigned):u===32?l(this.high,0,this.unsigned):l(this.high>>>u-32,0,this.unsigned)},p.shru=p.shiftRightUnsigned,p.shr_u=p.shiftRightUnsigned,p.rotateLeft=function(u){var _;return r(u)&&(u=u.toInt()),(u&=63)===0?this:u===32?l(this.high,this.low,this.unsigned):u<32?(_=32-u,l(this.low<<u|this.high>>>_,this.high<<u|this.low>>>_,this.unsigned)):(u-=32,_=32-u,l(this.high<<u|this.low>>>_,this.low<<u|this.high>>>_,this.unsigned))},p.rotl=p.rotateLeft,p.rotateRight=function(u){var _;return r(u)&&(u=u.toInt()),(u&=63)===0?this:u===32?l(this.high,this.low,this.unsigned):u<32?(_=32-u,l(this.high<<_|this.low>>>u,this.low<<_|this.high>>>u,this.unsigned)):(u-=32,_=32-u,l(this.low<<_|this.high>>>u,this.high<<_|this.low>>>u,this.unsigned))},p.rotr=p.rotateRight,p.toSigned=function(){return this.unsigned?l(this.low,this.high,!1):this},p.toUnsigned=function(){return this.unsigned?this:l(this.low,this.high,!0)},p.toBytes=function(u){return u?this.toBytesLE():this.toBytesBE()},p.toBytesLE=function(){var u=this.high,_=this.low;return[_&255,_>>>8&255,_>>>16&255,_>>>24,u&255,u>>>8&255,u>>>16&255,u>>>24]},p.toBytesBE=function(){var u=this.high,_=this.low;return[u>>>24,u>>>16&255,u>>>8&255,u&255,_>>>24,_>>>16&255,_>>>8&255,_&255]},t.fromBytes=function(u,_,L){return L?t.fromBytesLE(u,_):t.fromBytesBE(u,_)},t.fromBytesLE=function(u,_){return new t(u[0]|u[1]<<8|u[2]<<16|u[3]<<24,u[4]|u[5]<<8|u[6]<<16|u[7]<<24,_)},t.fromBytesBE=function(u,_){return new t(u[4]<<24|u[5]<<16|u[6]<<8|u[7],u[0]<<24|u[1]<<16|u[2]<<8|u[3],_)},typeof BigInt=="function"&&(t.fromBigInt=function(u,_){var L=Number(BigInt.asIntN(32,u)),M=Number(BigInt.asIntN(32,u>>BigInt(32)));return l(L,M,_)},t.fromValue=function(u,_){return typeof u=="bigint"?t.fromBigInt(u,_):N(u,_)},p.toBigInt=function(){var u=BigInt(this.low>>>0),_=BigInt(this.unsigned?this.high>>>0:this.high);return _<<BigInt(32)|u});var ke=i.default=t})});var Ie=T(cr=>{"use strict";var O=cr;O.asPromise=lr();O.base64=ci();O.EventEmitter=pi();O.float=wi();O.utf8=Ni();O.pool=Ri();O.LongBits=Ti();function Ii(i){return i==="__proto__"||i==="prototype"||i==="constructor"}O.isUnsafeProperty=Ii;O.isNode=!!(typeof global!="undefined"&&global&&global.process&&global.process.versions&&global.process.versions.node);O.global=O.isNode&&global||typeof window!="undefined"&&window||typeof self!="undefined"&&self||typeof globalThis!="undefined"&&globalThis||cr;O.emptyArray=Object.freeze?Object.freeze([]):[];O.emptyObject=Object.freeze?Object.freeze({}):{};O.isInteger=Number.isInteger||function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e};O.isString=function(e){return typeof e=="string"||e instanceof String};O.isObject=function(e){return e&&typeof e=="object"};O.isset=O.isSet=function(e,t){var r=e[t];return r!=null&&Object.hasOwnProperty.call(e,t)?typeof r!="object"||(Array.isArray(r)?r.length:Object.keys(r).length)>0:!1};O.Buffer=(function(){try{var i=O.global.Buffer;return i.prototype.utf8Write||O.isNode?i:null}catch{return null}})();O.newBuffer=function(e){var t=O.Buffer;return typeof e=="number"?t?t.allocUnsafe(e):new Uint8Array(e):t?t.from(e):new Uint8Array(e)};O.rawField=function(e,t,r){var s=[],n=e<<3|t;for(n>>>=0;n>127;)s.push(n&127|128),n>>>=7;s.push(n);for(var o=0;o<r.length;++o)s.push(r[o]);return O.newBuffer(s)};O.Array=Uint8Array;O.Long=O.global.dcodeIO&&O.global.dcodeIO.Long||O.global.Long||(function(){try{var i=Li();return i&&i.isLong?i:null}catch{return null}})();O.key2Re=/^(?:true|false|0|1)$/;O.key32Re=/^-?(?:0|[1-9][0-9]*)$/;O.key64Re=/^(?:[\x00-\xff]{8}|-?(?:0|[1-9][0-9]*))$/;O.longToHash=function(e){return e?O.LongBits.from(e).toHash():O.LongBits.zeroHash};O.longFromHash=function(e,t){var r=O.LongBits.fromHash(e);return O.Long?O.Long.fromBits(r.lo,r.hi,t):r.toNumber(!!t)};O.longFromKey=function(e,t){return O.key64Re.test(e)&&!O.key32Re.test(e)?O.longFromHash(e,t):e};O.boolFromKey=function(e){return e==="true"||e==="1"};function xi(i){var e=typeof arguments[arguments.length-1]=="boolean",t=e?arguments.length-1:arguments.length;e=e&&arguments[arguments.length-1];for(var r=1;r<t;++r){var s=arguments[r];if(s)for(var n=Object.keys(s),o=0;o<n.length;++o)!Ii(n[o])&&(!e||!Object.prototype.hasOwnProperty.call(i,n[o])||i[n[o]]===void 0)&&(i[n[o]]=s[n[o]])}return i}O.merge=xi;O.nestingLimit=32;O.recursionLimit=100;O.makeProp=function(e,t,r){Object.prototype.hasOwnProperty.call(e,t)||Object.defineProperty(e,t,{enumerable:r===void 0?!0:r,configurable:!0,writable:!0})};O.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)};function Di(i){function e(t,r){if(!(this instanceof e))return new e(t,r);Object.defineProperty(this,"message",{get:function(){return t}}),Error.captureStackTrace?Error.captureStackTrace(this,e):Object.defineProperty(this,"stack",{value:new Error().stack||""}),r&&xi(this,r)}return e.prototype=Object.create(Error.prototype,{constructor:{value:e,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return i},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),e}O.newError=Di;O.ProtocolError=Di("ProtocolError");O.oneOfGetter=function(e){for(var t={},r=0;r<e.length;++r)t[e[r]]=1;return function(){for(var s=Object.keys(this),n=s.length-1;n>-1;--n)if(t[s[n]]===1&&this[s[n]]!==void 0&&this[s[n]]!==null)return s[n]}};O.oneOfSetter=function(e){return function(t){for(var r=0;r<e.length;++r)e[r]!==t&&delete this[e[r]]}};O.toJSONOptions={longs:String,enums:String,bytes:String,json:!0}});var Bt=T((la,ki)=>{"use strict";ki.exports=E;var xe=Ie(),pr,Be=xe.LongBits,qi=xe.base64,dr=xe.utf8;function E(){this.pos=0,this.buf=this.constructor.alloc(E.initialBufferSize),this.view=null,this.states=null}E.initialBufferSize=128;Object.defineProperty(E.prototype,"len",{configurable:!0,enumerable:!0,get:function(){return this.pos}});var Fi=function(){return xe.Buffer?function(){return(E.create=function(){return new pr})()}:function(){return new E}};E.create=Fi();E.alloc=function(e){return new Uint8Array(e)};E.alloc=xe.pool(E.alloc,Uint8Array.prototype.subarray);function gr(i){return i<128?1:i<16384?2:i<2097152?3:i<268435456?4:5}E.prototype._reserve=function(e){var t=this.pos+e;if(t>this.buf.length){var r=this.buf.length<<1;r<t&&(r=t);var s=this.constructor.alloc(r);s.set(this.buf.subarray(0,this.pos),0),this.buf=s,this.view=null}};function Fs(i,e,t){for(var r=0;r<i.length;)e[t++]=i.charCodeAt(r++)}function tt(i,e,t){for(;i>127;)e[t++]=i&127|128,i>>>=7;return e[t]=i,t+1}E.prototype.uint32=function(e){e=e>>>0,this._reserve(5);var t=this.pos;return this.pos=tt(e,this.buf,t),this};E.prototype.int32=function(e){return(e|=0)<0?(this._reserve(10),lt(Be.fromNumber(e),this.buf,this.pos),this.pos+=10,this):this.uint32(e)};E.prototype.sint32=function(e){return this.uint32((e<<1^e>>31)>>>0)};function lt(i,e,t){for(var r=i.lo,s=i.hi;s;)e[t++]=r&127|128,r=(r>>>7|s<<25)>>>0,s>>>=7;for(;r>127;)e[t++]=r&127|128,r=r>>>7;return e[t]=r,t+1}E.prototype.uint64=function(e){var t=Be.from(e);this._reserve(10);var r=this.pos;return this.pos=lt(t,this.buf,r),this};E.prototype.int64=E.prototype.uint64;E.prototype.sint64=function(e){var t=Be.from(e).zzEncode();this._reserve(10);var r=this.pos;return this.pos=lt(t,this.buf,r),this};E.prototype.bool=function(e){return this._reserve(1),this.buf[this.pos++]=e?1:0,this};function ft(i,e,t){e[t]=i&255,e[t+1]=i>>>8&255,e[t+2]=i>>>16&255,e[t+3]=i>>>24}E.prototype.fixed32=function(e){return this._reserve(4),ft(e>>>0,this.buf,this.pos),this.pos+=4,this};E.prototype.sfixed32=E.prototype.fixed32;E.prototype.fixed64=function(e){var t=Be.from(e);return this._reserve(8),ft(t.lo,this.buf,this.pos),ft(t.hi,this.buf,this.pos+4),this.pos+=8,this};E.prototype.sfixed64=E.prototype.fixed64;E.prototype.float=function(e){return this._reserve(4),xe.float.writeFloatLE(e,this.buf,this.pos),this.pos+=4,this};E.prototype.double=function(e){return this._reserve(8),xe.float.writeDoubleLE(e,this.buf,this.pos),this.pos+=8,this};E.prototype.bytes=function(e){var t=e.length>>>0;if(!t)return this._reserve(1),this.buf[this.pos++]=0,this;if(xe.isString(e)){var r=E.alloc(t=qi.length(e));qi.decode(e,r,0),e=r}return this.uint32(t),this._reserve(t),this.buf.set(e,this.pos),this.pos+=t,this};E.prototype.raw=function(e){var t=e.length>>>0;return t?(this._reserve(t),this.buf.set(e,this.pos),this.pos+=t,this):this};E.prototype._delim=function(e,t){var r=gr(t);return r>1&&this.buf.copyWithin(e+r,e+1,e+1+t),tt(t,this.buf,e),this.pos=e+r+t,this};E.prototype.string=function(e){var t=e.length;if(!t)return this._reserve(1),this.buf[this.pos++]=0,this;if(t<128){this._reserve(t*3+5);var r=this.pos;return this._delim(r,dr.write(e,this.buf,r+1))}var s=dr.length(e);return this.uint32(s),this._reserve(s),s===e.length?Fs(e,this.buf,this.pos):dr.write(e,this.buf,this.pos),this.pos+=s,this};E.prototype.uint32s=function(e){var t=e.length;this._reserve(t*5+5);for(var r=this.buf,s=this.pos,n=s+1,o=0;o<t;++o)n=tt(e[o]>>>0,r,n);return this._delim(s,n-s-1)};E.prototype.int32s=function(e){var t=e.length;this._reserve(t*10+5);for(var r=this.buf,s=this.pos,n=s+1,o,f=0;f<t;++f)(o=e[f]|0)<0?n=lt(Be.fromNumber(o),r,n):n=tt(o,r,n);return this._delim(s,n-s-1)};E.prototype.sint32s=function(e){var t=e.length;this._reserve(t*5+5);for(var r=this.buf,s=this.pos,n=s+1,o=0;o<t;++o)n=tt((e[o]<<1^e[o]>>31)>>>0,r,n);return this._delim(s,n-s-1)};E.prototype.uint64s=function(e){var t=e.length;this._reserve(t*10+5);for(var r=this.buf,s=this.pos,n=s+1,o=0;o<t;++o)n=lt(Be.from(e[o]),r,n);return this._delim(s,n-s-1)};E.prototype.int64s=E.prototype.uint64s;E.prototype.sint64s=function(e){var t=e.length;this._reserve(t*10+5);for(var r=this.buf,s=this.pos,n=s+1,o=0;o<t;++o)n=lt(Be.from(e[o]).zzEncode(),r,n);return this._delim(s,n-s-1)};E.prototype.bools=function(e){var t=e.length;this.uint32(t),this._reserve(t);for(var r=this.buf,s=this.pos,n=0;n<t;++n)r[s++]=e[n]?1:0;return this.pos+=t,this};var Ci=16,Pi=128;function kt(i,e,t){var r=i.view;if(r||e<t)return r;var s=i.buf;return i.view=new DataView(s.buffer,s.byteOffset,s.byteLength)}E.prototype.fixed32s=function(e){var t=e.length,r=t*4;this.uint32(r),this._reserve(r);var s=this.pos,n,o=kt(this,t,Pi);if(o)for(n=0;n<t;++n)o.setUint32(s,e[n]>>>0,!0),s+=4;else{var f=this.buf;for(n=0;n<t;++n)ft(e[n]>>>0,f,s),s+=4}return this.pos+=r,this};E.prototype.sfixed32s=E.prototype.fixed32s;E.prototype.fixed64s=function(e){var t=e.length,r=t*8;this.uint32(r),this._reserve(r);var s=this.pos,n,o,f=kt(this,t,Pi);if(f)for(n=0;n<t;++n)o=Be.from(e[n]),f.setUint32(s,o.lo,!0),f.setUint32(s+4,o.hi,!0),s+=8;else{var a=this.buf;for(n=0;n<t;++n)o=Be.from(e[n]),ft(o.lo,a,s),ft(o.hi,a,s+4),s+=8}return this.pos+=r,this};E.prototype.sfixed64s=E.prototype.fixed64s;E.prototype.floats=function(e){var t=e.length,r=t*4;this.uint32(r),this._reserve(r);var s=this.pos,n,o=kt(this,t,Ci);if(o)for(n=0;n<t;++n)o.setFloat32(s,e[n],!0),s+=4;else{var f=this.buf;for(n=0;n<t;++n)xe.float.writeFloatLE(e[n],f,s),s+=4}return this.pos+=r,this};E.prototype.doubles=function(e){var t=e.length,r=t*8;this.uint32(r),this._reserve(r);var s=this.pos,n,o=kt(this,t,Ci);if(o)for(n=0;n<t;++n)o.setFloat64(s,e[n],!0),s+=8;else{var f=this.buf;for(n=0;n<t;++n)xe.float.writeDoubleLE(e[n],f,s),s+=8}return this.pos+=r,this};E.prototype.fork=function(){return this._reserve(1),(this.states||(this.states=[])).push(this.pos),this.pos+=1,this};E.prototype.reset=function(){var e=this.states;return e&&e.length?this.pos=e.pop():this.pos=0,this};E.prototype.ldelim=function(){var e=this.states,t,r;if(e&&e.length){var s=e.pop();t=this.pos-s-1,r=gr(t),r>1?(this._reserve(r-1),this.buf.copyWithin(s+r,s+1,s+1+t),this.pos+=r-1,tt(t,this.buf,s)):this.buf[s]=t}else t=this.pos,r=gr(t),this._reserve(r),this.buf.copyWithin(r,0,t),tt(t,this.buf,0),this.pos+=r;return this};E.prototype.finish=function(e){if(e)return this.buf.subarray(0,this.pos);var t=this.constructor.alloc(this.pos);return t.set(this.buf.subarray(0,this.pos),0),t};E.prototype.finishInto=function(e,t){return t===void 0&&(t=0),e.set(this.buf.subarray(0,this.pos),t),e};E._configure=function(i){pr=i,E.create=Fi(),pr._configure()}});var Vi=T((ha,ji)=>{"use strict";ji.exports=We;var Bi=Bt();We.prototype=Object.create(Bi.prototype,{constructor:{value:We,writable:!0,enumerable:!1,configurable:!0}});var $e=Ie();function We(){Bi.call(this)}var mr;We._configure=function(){We.alloc=$e.Buffer&&$e.Buffer.allocUnsafe,mr=$e.Buffer&&$e.Buffer.prototype.utf8Write?function(e,t,r){return t.utf8Write(e,r)}:function(e,t,r){return t.write(e,r)}};We.prototype.bytes=function(e){$e.isString(e)&&(e=$e.Buffer.from(e,"base64"));var t=e.length>>>0;return this.uint32(t),t&&(this._reserve(t),this.buf.set(e,this.pos),this.pos+=t),this};We.prototype.string=function(e){var t=e.length;if(!t)return this._reserve(1),this.buf[this.pos++]=0,this;if(t<128){this._reserve(t*3+5);var r=this.pos,s=this.buf;return this._delim(r,t<40?$e.utf8.write(e,s,r+1):mr(e,s,r+1))}var n=$e.Buffer.byteLength(e);return this.uint32(n),this._reserve(n),mr(e,this.buf,this.pos),this.pos+=n,this};We._configure()});var Vt=T((ca,Zi)=>{"use strict";Zi.exports=x;var Ne=Ie(),yr,Gi=Ne.LongBits,Ji=Ne.utf8;function q(i,e){return RangeError("index out of range: "+i.pos+" + "+(e||1)+" > "+i.len)}function x(i){this.buf=i,this.pos=0,this.len=i.length,this.view=null,this.discardUnknown=x.discardUnknown}function Ui(i){if(Array.isArray(i)&&(i=new Uint8Array(i)),i instanceof Uint8Array)return new x(i);throw Error("illegal buffer")}var $i=function(){return Ne.Buffer?function(t){return(x.create=function(s){return Ne.Buffer.isBuffer(s)?new yr(s):Ui(s)})(t)}:Ui};x.create=$i();x.prototype.raw=function(e,t){return this.buf.subarray(e,t)};function Wi(i){for(var e=0,t=0;t<4;++t){if(i.pos>=i.len)throw q(i);var r=i.buf[i.pos++];if(e=(e|(r&127)<<t*7)>>>0,r<128)return e}throw q(i)}x.prototype.uint32=function(){if(this.len-this.pos<5){if(this.pos>=this.len)throw q(this);if(this.buf[this.pos]>=128)return Wi(this)}var e=this.buf,t=this.pos,r=(e[t]&127)>>>0;if(e[t++]<128)return this.pos=t,r;if(r=(r|(e[t]&127)<<7)>>>0,e[t++]<128)return this.pos=t,r;if(r=(r|(e[t]&127)<<14)>>>0,e[t++]<128)return this.pos=t,r;if(r=(r|(e[t]&127)<<21)>>>0,e[t++]<128)return this.pos=t,r;if(r=(r|(e[t]&15)<<28)>>>0,e[t++]<128)return this.pos=t,r;for(var s=0;s<5;++s){if(t>=this.len)throw this.pos=t,q(this);if(e[t++]<128)return this.pos=t,r}throw this.pos=t,Error("invalid varint encoding")};x.prototype.tag=function(){if(this.len-this.pos<5){if(this.pos>=this.len)throw q(this);if(this.buf[this.pos]>=128)return Wi(this)}var e=this.buf,t=this.pos,r=(e[t]&127)>>>0;if(e[t++]<128)return this.pos=t,r;if(r=(r|(e[t]&127)<<7)>>>0,e[t++]<128)return this.pos=t,r;if(r=(r|(e[t]&127)<<14)>>>0,e[t++]<128)return this.pos=t,r;if(r=(r|(e[t]&127)<<21)>>>0,e[t++]<128)return this.pos=t,r;if(r=(r|(e[t]&15)<<28)>>>0,e[t]<128&&(e[t]&112)===0)return this.pos=t+1,r;throw this.pos=t+1,Error("invalid tag encoding")};x.prototype.int32=function(){return this.uint32()|0};x.prototype.sint32=function(){var e=this.uint32();return e>>>1^-(e&1)|0};function vr(){var i=new Gi(0,0),e=0;if(this.len-this.pos>4){for(;e<4;++e)if(i.lo=(i.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return i;if(i.lo=(i.lo|(this.buf[this.pos]&127)<<28)>>>0,i.hi=(i.hi|(this.buf[this.pos]&127)>>4)>>>0,this.buf[this.pos++]<128)return i;e=0}else{for(;e<4;++e){if(this.pos>=this.len)throw q(this);if(i.lo=(i.lo|(this.buf[this.pos]&127)<<e*7)>>>0,this.buf[this.pos++]<128)return i}throw q(this)}if(this.len-this.pos>4){for(;e<5;++e)if(i.hi=(i.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return i}else for(;e<5;++e){if(this.pos>=this.len)throw q(this);if(i.hi=(i.hi|(this.buf[this.pos]&127)<<e*7+3)>>>0,this.buf[this.pos++]<128)return i}throw Error("invalid varint encoding")}x.prototype.bool=function(){for(var e=!1,t,r=0;r<10;++r){if(this.pos>=this.len)throw q(this);if(t=this.buf[this.pos++],t&127&&(e=!0),t<128)return e}throw Error("invalid varint encoding")};function ht(i,e){return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0}x.prototype.fixed32=function(){if(this.pos+4>this.len)throw q(this,4);return ht(this.buf,this.pos+=4)};x.prototype.sfixed32=function(){if(this.pos+4>this.len)throw q(this,4);return ht(this.buf,this.pos+=4)|0};function Mi(){if(this.pos+8>this.len)throw q(this,8);return new Gi(ht(this.buf,this.pos+=4),ht(this.buf,this.pos+=4))}x.prototype.float=function(){if(this.pos+4>this.len)throw q(this,4);var e=Ne.float.readFloatLE(this.buf,this.pos);return this.pos+=4,e};x.prototype.double=function(){if(this.pos+8>this.len)throw q(this,4);var e=Ne.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,e};x.prototype.uint32s=function(e){e===void 0&&(e=[]);var t=this.uint32()+this.pos,r=this.len,s=this.buf,n=this.pos,o;if(t>r)throw q(this,t-this.pos);for(this.len=t;n<t;)o=s[n++],o<128?e.push(o):(this.pos=n-1,e.push(this.uint32()),n=this.pos);if(this.pos=n,n!==t)throw RangeError("index out of range");return this.len=r,e};x.prototype.int32s=function(e){e===void 0&&(e=[]);var t=this.uint32()+this.pos,r=this.len,s=this.buf,n=this.pos,o;if(t>r)throw q(this,t-this.pos);for(this.len=t;n<t;)o=s[n++],o<128?e.push(o):(this.pos=n-1,e.push(this.int32()),n=this.pos);if(this.pos=n,n!==t)throw RangeError("index out of range");return this.len=r,e};x.prototype.sint32s=function(e){e===void 0&&(e=[]);var t=this.uint32()+this.pos,r=this.len;if(t>r)throw q(this,t-this.pos);for(this.len=t;this.pos<t;)e.push(this.sint32());if(this.pos!==t)throw RangeError("index out of range");return this.len=r,e};x.prototype.bools=function(e){e===void 0&&(e=[]);var t=this.uint32()+this.pos,r=this.len,s=this.buf,n=this.pos,o;if(t>r)throw q(this,t-this.pos);for(this.len=t;n<t;)o=s[n++],o<128?e.push(o!==0):(this.pos=n-1,e.push(this.bool()),n=this.pos);if(this.pos=n,n!==t)throw RangeError("index out of range");return this.len=r,e};var Hi=8,zi=128;function jt(i,e,t){var r=i.view;if(r||e<t)return r;var s=i.buf;return i.view=new DataView(s.buffer,s.byteOffset,s.byteLength)}x.prototype.fixed32s=function(e){e===void 0&&(e=[]);var t=this.uint32(),r=this.pos+t;if(r>this.len)throw q(this,t);var s=t>>>2,n=e.length,o=this.pos;e.length=n+s;var f=jt(this,s,zi);if(f)for(var a=0;a<s;++a,o+=4)e[n++]=f.getUint32(o,!0);else for(var l=this.buf,m=0;m<s;++m,o+=4)e[n++]=ht(l,o+4);if(this.pos=o,o!==r)throw q(this,4);return e};x.prototype.sfixed32s=function(e){e===void 0&&(e=[]);var t=this.uint32(),r=this.pos+t;if(r>this.len)throw q(this,t);var s=t>>>2,n=e.length,o=this.pos;e.length=n+s;var f=jt(this,s,zi);if(f)for(var a=0;a<s;++a,o+=4)e[n++]=f.getInt32(o,!0);else for(var l=this.buf,m=0;m<s;++m,o+=4)e[n++]=ht(l,o+4)|0;if(this.pos=o,o!==r)throw q(this,4);return e};x.prototype.floats=function(e){e===void 0&&(e=[]);var t=this.uint32(),r=this.pos+t;if(r>this.len)throw q(this,t);var s=t>>>2,n=e.length,o=this.pos;e.length=n+s;var f=jt(this,s,Hi);if(f)for(var a=0;a<s;++a,o+=4)e[n++]=f.getFloat32(o,!0);else for(var l=this.buf,m=0;m<s;++m,o+=4)e[n++]=Ne.float.readFloatLE(l,o);if(this.pos=o,o!==r)throw q(this,4);return e};x.prototype.doubles=function(e){e===void 0&&(e=[]);var t=this.uint32(),r=this.pos+t;if(r>this.len)throw q(this,t);var s=t>>>3,n=e.length,o=this.pos;e.length=n+s;var f=jt(this,s,Hi);if(f)for(var a=0;a<s;++a,o+=8)e[n++]=f.getFloat64(o,!0);else for(var l=this.buf,m=0;m<s;++m,o+=8)e[n++]=Ne.float.readDoubleLE(l,o);if(this.pos=o,o!==r)throw q(this,8);return e};x.prototype.uint64s=function(e){e===void 0&&(e=[]);var t=this.uint32()+this.pos,r=this.len;if(t>r)throw q(this,t-this.pos);for(this.len=t;this.pos<t;)e.push(this.uint64());if(this.pos!==t)throw RangeError("index out of range");return this.len=r,e};x.prototype.int64s=function(e){e===void 0&&(e=[]);var t=this.uint32()+this.pos,r=this.len;if(t>r)throw q(this,t-this.pos);for(this.len=t;this.pos<t;)e.push(this.int64());if(this.pos!==t)throw RangeError("index out of range");return this.len=r,e};x.prototype.sint64s=function(e){e===void 0&&(e=[]);var t=this.uint32()+this.pos,r=this.len;if(t>r)throw q(this,t-this.pos);for(this.len=t;this.pos<t;)e.push(this.sint64());if(this.pos!==t)throw RangeError("index out of range");return this.len=r,e};x.prototype.fixed64s=function(e){e===void 0&&(e=[]);var t=this.uint32(),r=this.pos+t,s=e.length;if(r>this.len)throw q(this,t);var n=t>>>3;e.length=s+n;for(var o=0;o<n;++o)e[s++]=this.fixed64();if(this.pos!==r)throw q(this,8);return e};x.prototype.sfixed64s=function(e){e===void 0&&(e=[]);var t=this.uint32(),r=this.pos+t,s=e.length;if(r>this.len)throw q(this,t);var n=t>>>3;e.length=s+n;for(var o=0;o<n;++o)e[s++]=this.sfixed64();if(this.pos!==r)throw q(this,8);return e};x.prototype.bytes=function(){var e=this.uint32(),t=this.pos,r=this.pos+e;if(r>this.len)throw q(this,e);return this.pos=r,this.raw(t,r)};x.prototype.string=function(){var e=this.uint32(),t=this.pos,r=this.pos+e;if(r>this.len)throw q(this,e);return this.pos=r,Ji.read(this.buf,t,r)};x.prototype.stringVerify=function(){var e=this.uint32(),t=this.pos,r=this.pos+e;if(r>this.len)throw q(this,e);return this.pos=r,Ji.readStrict(this.buf,t,r)};x.prototype.skip=function(e){if(typeof e=="number"){if(this.pos+e>this.len)throw q(this,e);this.pos+=e}else do if(this.pos>=this.len)throw q(this);while(this.buf[this.pos++]&128);return this};x.recursionLimit=Ne.recursionLimit;x.discardUnknown=!0;x.prototype.skipType=function(i,e,t){if(e===void 0&&(e=0),e>x.recursionLimit)throw Error("max depth exceeded");if(t===0)throw Error("illegal tag: field number 0");switch(i){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;;){var r=this.tag(),s=r>>>3;if(i=r&7,!s)throw Error("illegal tag: field number 0");if(i===4){if(t!==void 0&&s!==t)throw Error("invalid end group tag");break}this.skipType(i,e+1,s)}break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+i+" at offset "+this.pos)}return this};x._configure=function(i){yr=i,x.create=$i(),yr._configure();var e=Ne.Long?"toLong":"toNumber";Ne.merge(x.prototype,{int64:function(){return vr.call(this)[e](!1)},uint64:function(){return vr.call(this)[e](!0)},sint64:function(){return vr.call(this).zzDecode()[e](!1)},fixed64:function(){return Mi.call(this)[e](!0)},sfixed64:function(){return Mi.call(this)[e](!1)}})}});var Ki=T((da,Yi)=>{"use strict";Yi.exports=He;var Xi=Vt();He.prototype=Object.create(Xi.prototype,{constructor:{value:He,writable:!0,enumerable:!1,configurable:!0}});var Qi=Ie();function He(i){Xi.call(this,i)}He._configure=function(){Qi.Buffer&&(He.prototype._slice=Qi.Buffer.prototype.slice)};He.prototype.raw=function(e,t){return this._slice.call(this.buf,e,t)};He.prototype.string=function(){var e=this.uint32(),t=this.pos,r=this.pos+e;if(r>this.len)throw RangeError("index out of range: "+this.pos+" + "+e+" > "+this.len);return this.pos=r,this.buf.utf8Slice?this.buf.utf8Slice(t,r):this.buf.toString("utf-8",t,r)};He._configure()});var tn=T((pa,en)=>{"use strict";en.exports=Nt;var _r=Ie();Nt.prototype=Object.create(_r.EventEmitter.prototype,{constructor:{value:Nt,writable:!0,enumerable:!1,configurable:!0}});function Nt(i,e,t){if(typeof i!="function")throw TypeError("rpcImpl must be a function");_r.EventEmitter.call(this),this.rpcImpl=i,this.requestDelimited=!!e,this.responseDelimited=!!t}Nt.prototype.rpcCall=function i(e,t,r,s,n){if(!s)throw TypeError("request must be specified");var o=this;if(!n)return _r.asPromise(i,o,e,t,r,s);if(!o.rpcImpl){setTimeout(function(){n(Error("already ended"))},0);return}try{return o.rpcImpl(e,t[o.requestDelimited?"encodeDelimited":"encode"](s).finish(),function(a,l){if(a)return o.emit("error",a,e),n(a);if(l===null){o.end(!0);return}if(!(l instanceof r))try{l=r[o.responseDelimited?"decodeDelimited":"decode"](l)}catch(m){return o.emit("error",m,e),n(m)}return o.emit("data",l,e),n(null,l)})}catch(f){o.emit("error",f,e),setTimeout(function(){n(f)},0);return}};Nt.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this}});var br=T(rn=>{"use strict";var Cs=rn;Cs.Service=tn()});var wr=T((ma,nn)=>{"use strict";nn.exports=Object.create(null)});var on=T(pe=>{"use strict";pe.build="minimal";pe.Writer=Bt();pe.BufferWriter=Vi();pe.Reader=Vt();pe.BufferReader=Ki();pe.util=Ie();pe.rpc=br();pe.roots=wr();pe.configure=sn;function sn(){pe.util.LongBits._configure(pe.util.Long),pe.Writer._configure(pe.BufferWriter),pe.Reader._configure(pe.BufferReader)}sn()});var Er=T(an=>{"use strict";var Or=an;Or.numberRe=/^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;Or.typeRefRe=/^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;Or.reservedRe=/^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/});var fn=T((_a,un)=>{"use strict";un.exports=Nr;var Ps=Er(),ks=Ps.reservedRe;function Nr(i,e){typeof i=="string"&&(e=i,i=void 0);var t=[];function r(n){if(typeof n!="string"){var o=s();if(Nr.verbose&&console.log("codegen: "+o),o="return "+o,n){for(var f=Object.keys(n),a=new Array(f.length+1),l=new Array(f.length),m=0;m<f.length;)a[m]=f[m],l[m]=n[f[m++]];return a[m]=o,Function.apply(null,a).apply(null,l)}return Function(o)()}for(var w=new Array(arguments.length-1),N=0;N<w.length;)w[N]=arguments[++N];if(N=0,n=n.replace(/%([%dfijs])/g,function(S,I){var B=w[N++];switch(I){case"d":case"f":return B=Number(B),Object.is(B,-0)?"-0":String(B);case"i":return String(Math.floor(B));case"j":return JSON.stringify(B);case"s":return String(B)}return"%"}),N!==w.length)throw Error("parameter count mismatch");return t.push(n),r}function s(n){return"function "+Bs(n||e)+"("+(i&&i.join(",")||"")+`){
  `+t.join(`
  `)+`
}`}return Object.defineProperty(r,"toString",{value:s,writable:!0,enumerable:!0,configurable:!0}),r}Nr.verbose=!1;function Bs(i){return!i||(i=String(i).replace(/[^\w$]/g,""),!i)?"":(/^\d/.test(i)&&(i="_"+i),ks.test(i)?i+"_":i)}});var ln=T(()=>{});var Ar=T((Oa,hn)=>{"use strict";var ct=null;try{ct=ln(),(!ct||!ct.readFile||!ct.readFileSync)&&(ct=null)}catch{}hn.exports=ct});var dn=T((Ea,cn)=>{"use strict";cn.exports=At;var js=lr(),Rr=Ar();function At(i,e,t){return typeof e=="function"?(t=e,e={}):e||(e={}),t?!e.xhr&&Rr&&Rr.readFile?Rr.readFile(i,function(s,n){return s&&typeof XMLHttpRequest!="undefined"?At.xhr(i,e,t):s?t(s):t(null,e.binary?n:n.toString("utf8"))}):At.xhr(i,e,t):js(At,this,i,e)}At.xhr=function(e,t,r){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(s.readyState===4){if(s.status!==0&&s.status!==200)return r(Error("status "+s.status));if(t.binary){var o=s.response;if(!o){o=[];for(var f=0;f<s.responseText.length;++f)o.push(s.responseText.charCodeAt(f)&255)}return r(null,typeof Uint8Array!="undefined"?new Uint8Array(o):o)}return r(null,s.responseText)}},t.binary&&("overrideMimeType"in s&&s.overrideMimeType("text/plain; charset=x-user-defined"),s.responseType="arraybuffer"),s.open("GET",e),s.send()}});var mn=T(gn=>{"use strict";var Lr=gn,Tr=/^[a-zA-Z][a-zA-Z0-9+.-]+:\/\//;function Vs(i){if(typeof URL=="undefined"||!Tr.test(i))return null;try{return new URL(i).href}catch{return null}}function Us(i,e){if(typeof URL=="undefined"||!Tr.test(i)||Tr.test(e))return null;try{return new URL(e,i).href}catch{return null}}var pn=Lr.isAbsolute=function(e){return/^(?:\/|\w+:|\\\\\w+)/.test(e)},Sr=Lr.normalize=function(e){var t=Vs(e);if(t)return t;var r=e.substring(0,2),s="";r==="\\\\"&&(s=r,e=e.substring(2)),e=e.replace(/\\/g,"/").replace(/\/{2,}/g,"/");var n=e.split("/"),o=pn(e),f="";o&&(f=n.shift()+"/");for(var a=0;a<n.length;)n[a]===".."?a>0&&n[a-1]!==".."?n.splice(--a,2):o?n.splice(a,1):++a:n[a]==="."?n.splice(a,1):++a;return s+f+n.join("/")};Lr.resolve=function(e,t,r){var s=Us(e,t);return s||(r||(t=Sr(t)),pn(t)?t:(r||(e=Sr(e)),(e=e.replace(/(?:\/|^)[^/]+$/,"")).length?Sr(e+"/"+t):t))}});var pt=T((Aa,_n)=>{"use strict";_n.exports=k;var Ut=Qe();k.prototype=Object.create(Ut.prototype,{constructor:{value:k,writable:!0,enumerable:!1,configurable:!0}});k.className="Namespace";var Ir=Ze(),ze=ae(),Ms=nt(),rt,dt,it;k.fromJSON=function(e,t,r){if(r===void 0&&(r=0),r>ze.recursionLimit)throw Error("max depth exceeded");return new k(e,t.options).addJSON(t.nested,r)};function vn(i,e){if(i&&i.length){for(var t={},r=0;r<i.length;++r)t[i[r].name]=i[r].toJSON(e);return t}}k.arrayToJSON=vn;k.isReservedId=function(e,t){if(e){for(var r=0;r<e.length;++r)if(typeof e[r]!="string"&&e[r][0]<=t&&e[r][1]>=t)return!0}return!1};k.isReservedName=function(e,t){if(e){for(var r=0;r<e.length;++r)if(e[r]===t)return!0}return!1};function k(i,e){Ut.call(this,i,e),this.nested=void 0,this._nestedArray=null,this._lookupCache=Object.create(null),this._needsRecursiveFeatureResolution=!0,this._needsRecursiveResolve=!0}function yn(i){i._nestedArray=null,i._lookupCache=Object.create(null);for(var e=i;e=e.parent;)e._lookupCache=Object.create(null);return i}Object.defineProperty(k.prototype,"nestedArray",{get:function(){return this._nestedArray||(this._nestedArray=ze.toArray(this.nested))}});k.prototype.toJSON=function(e){return ze.toObject(["options",this.options,"nested",vn(this.nestedArray,e)])};k.prototype.addJSON=function(e,t){if(t===void 0&&(t=0),t>ze.recursionLimit)throw Error("max depth exceeded");var r=this;if(e)for(var s=Object.keys(e),n=0,o;n<s.length;++n)o=e[s[n]],r.add((o.fields!==void 0?rt.fromJSON:o.values!==void 0?it.fromJSON:o.methods!==void 0?dt.fromJSON:o.id!==void 0?Ir.fromJSON:k.fromJSON)(s[n],o,t+1));return this};k.prototype.get=function(e){return this.nested&&Object.prototype.hasOwnProperty.call(this.nested,e)?this.nested[e]:null};k.prototype.getEnum=function(e){if(this.nested&&Object.prototype.hasOwnProperty.call(this.nested,e)&&this.nested[e]instanceof it)return this.nested[e].values;throw Error("no such enum: "+e)};k.prototype.add=function(e){if(!(e instanceof Ir&&e.extend!==void 0||e instanceof rt||e instanceof Ms||e instanceof it||e instanceof dt||e instanceof k))throw TypeError("object must be a valid nested object");if(e.name==="__proto__")return this;if(!this.nested)this.nested={};else{var t=this.get(e.name);if(t)if(t instanceof k&&e instanceof k&&!(t instanceof rt||t instanceof dt)){for(var r=t.nestedArray,s=0;s<r.length;++s)e.add(r[s]);this.remove(t),this.nested||(this.nested={}),e.setOptions(t.options,!0)}else throw Error("duplicate name '"+e.name+"' in "+this)}this.nested[e.name]=e,this instanceof rt||this instanceof dt||this instanceof it||this instanceof Ir||e._edition||(e._edition=e._defaultEdition),this._needsRecursiveFeatureResolution=!0,this._needsRecursiveResolve=!0;for(var n=this;n=n.parent;)n._needsRecursiveFeatureResolution=!0,n._needsRecursiveResolve=!0;return e.onAdd(this),yn(this)};k.prototype.remove=function(e){if(!(e instanceof Ut))throw TypeError("object must be a ReflectionObject");if(e.parent!==this)throw Error(e+" is not a member of "+this);if(!ze.remove(this.nested,e,e.name))throw Error(e+" is not a member of "+this);return Object.keys(this.nested).length||(this.nested=void 0),e.onRemove(this),yn(this)};k.prototype.define=function(e,t){if(ze.isString(e))e=e.split(".");else if(!Array.isArray(e))throw TypeError("illegal path");if(e&&e.length&&e[0]==="")throw Error("path must be relative");if(e.length>ze.recursionLimit)throw Error("max depth exceeded");for(var r=this;e.length>0;){var s=e.shift();if(r.nested&&r.nested[s]){if(r=r.nested[s],!(r instanceof k))throw Error("path conflicts with non-namespace objects")}else r.add(r=new k(s))}return t&&r.addJSON(t),r};k.prototype.resolveAll=function(){if(!this._needsRecursiveResolve)return this;this._needsRecursiveFeatureResolution&&this._resolveFeaturesRecursive(this._edition);var e=this.nestedArray,t=0;for(this.resolve();t<e.length;)e[t]instanceof k?e[t++].resolveAll():e[t++].resolve();return this._needsRecursiveResolve=!1,this};k.prototype._resolveFeaturesRecursive=function(e){return this._needsRecursiveFeatureResolution?(this._needsRecursiveFeatureResolution=!1,e=this._edition||e,Ut.prototype._resolveFeaturesRecursive.call(this,e),this.nestedArray.forEach(t=>{t._resolveFeaturesRecursive(e)}),this):this};k.prototype.lookup=function(e,t,r){if(typeof t=="boolean"?(r=t,t=void 0):t&&!Array.isArray(t)&&(t=[t]),ze.isString(e)&&e.length){if(e===".")return this.root;e=e.split(".")}else if(!e.length)return this;var s=e.join(".");if(e[0]==="")return this.root.lookup(e.slice(1),t);var n=this._lookupImpl(e,s);if(n&&(!t||t.indexOf(n.constructor)>-1)||(n=this.root._fullyQualifiedObjects&&this.root._fullyQualifiedObjects["."+s],n&&(!t||t.indexOf(n.constructor)>-1)))return n;if(r)return null;for(var o=this;o.parent;){if(n=o.parent._lookupImpl(e,s),n&&(!t||t.indexOf(n.constructor)>-1))return n;o=o.parent}return null};k.prototype._lookupImpl=function(e,t){if(Object.prototype.hasOwnProperty.call(this._lookupCache,t))return this._lookupCache[t];var r=this.get(e[0]),s=null;if(r)e.length===1?s=r:r instanceof k&&(e=e.slice(1),s=r._lookupImpl(e,e.join(".")));else for(var n=0;n<this.nestedArray.length;++n)if(this._nestedArray[n]instanceof k&&(r=this._nestedArray[n]._lookupImpl(e,t))){s=r;break}return this._lookupCache[t]=s,s};k.prototype.lookupType=function(e){var t=this.lookup(e,[rt]);if(!t)throw Error("no such type: "+e);return t};k.prototype.lookupEnum=function(e){var t=this.lookup(e,[it]);if(!t)throw Error("no such Enum '"+e+"' in "+this);return t};k.prototype.lookupTypeOrEnum=function(e){var t=this.lookup(e,[rt,it]);if(!t)throw Error("no such Type or Enum '"+e+"' in "+this);return t};k.prototype.lookupService=function(e){var t=this.lookup(e,[dt]);if(!t)throw Error("no such Service '"+e+"' in "+this);return t};k._configure=function(i,e,t){rt=i,dt=e,it=t}});var Mt=T((Ra,bn)=>{"use strict";bn.exports=De;var xr=Ze();De.prototype=Object.create(xr.prototype,{constructor:{value:De,writable:!0,enumerable:!1,configurable:!0}});De.className="MapField";var Gs=Xe(),gt=ae();function De(i,e,t,r,s,n){if(xr.call(this,i,e,r,void 0,void 0,s,n),!gt.isString(t))throw TypeError("keyType must be a string");this.keyType=t,this.resolvedKeyType=null,this.map=!0}De.fromJSON=function(e,t){var r=new De(e,t.id,t.keyType,t.type,t.options,t.comment);return t.protoName&&(r.protoName=t.protoName),t.jsonName!==void 0?r.jsonName=t.jsonName:t.options&&t.options.json_name!==void 0&&(r.jsonName=t.options.json_name),r};De.prototype.toJSON=function(e){var t=e?!!e.keepComments:!1;return gt.toObject(["keyType",this.keyType,"type",this.type,"id",this.id,"extend",this.extend,"protoName",this.protoName!==this.name?this.protoName:void 0,"jsonName",this.jsonName!==gt.jsonName(this.protoName||this.name)?this.jsonName:void 0,"options",this.options,"comment",t?this.comment:void 0])};De.prototype.resolve=function(){if(this.resolved)return this;if(Gs.mapKey[this.keyType]===void 0)throw Error("invalid key type: "+this.keyType);return xr.prototype.resolve.call(this)};De.d=function(e,t,r){return typeof r=="function"?r=gt.decorateType(r).name:r&&typeof r=="object"&&(r=gt.decorateEnum(r).name),function(n,o){gt.decorateType(n.constructor).add(new De(o,e,t,r))}}});var Gt=T((Sa,wn)=>{"use strict";wn.exports=Ye;var Dr=Qe();Ye.prototype=Object.create(Dr.prototype,{constructor:{value:Ye,writable:!0,enumerable:!1,configurable:!0}});Ye.className="Method";var mt=ae();function Ye(i,e,t,r,s,n,o,f,a){if(mt.isObject(s)?(o=s,s=n=void 0):mt.isObject(n)&&(o=n,n=void 0),!(e===void 0||mt.isString(e)))throw TypeError("type must be a string");if(!mt.isString(t))throw TypeError("requestType must be a string");if(!mt.isString(r))throw TypeError("responseType must be a string");Dr.call(this,i,o),this.type=e||"rpc",this.requestType=t,this.requestStream=s?!0:void 0,this.responseType=r,this.responseStream=n?!0:void 0,this.path="/"+this.name,this.resolvedRequestType=null,this.resolvedResponseType=null,this.comment=f,this.parsedOptions=a}Ye.fromJSON=function(e,t){return new Ye(e,t.type,t.requestType,t.responseType,t.requestStream,t.responseStream,t.options,t.comment,t.parsedOptions)};Ye.prototype.toJSON=function(e){var t=e?!!e.keepComments:!1;return mt.toObject(["type",this.type!=="rpc"&&this.type||void 0,"requestType",this.requestType,"requestStream",this.requestStream,"responseType",this.responseType,"responseStream",this.responseStream,"options",this.options,"comment",t?this.comment:void 0,"parsedOptions",this.parsedOptions])};Ye.prototype.resolve=function(){if(this.resolved)return this;if(this.parent){var e=this.parent.fullName;e.charAt(0)==="."&&(e=e.substring(1)),this.path="/"+e+"/"+this.name}else this.path="/"+this.name;return this.resolvedRequestType=this.parent.lookupType(this.requestType),this.resolvedResponseType=this.parent.lookupType(this.responseType),Dr.prototype.resolve.call(this)}});var $t=T((Ta,Nn)=>{"use strict";Nn.exports=me;var je=pt();me.prototype=Object.create(je.prototype,{constructor:{value:me,writable:!0,enumerable:!1,configurable:!0}});me.className="Service";var qr=Gt(),Jt=ae(),On=br();function me(i,e){je.call(this,i,e),this.methods={},this._methodsArray=null}me.fromJSON=function(e,t,r){if(r===void 0&&(r=0),r>Jt.recursionLimit)throw Error("max depth exceeded");var s=new me(e,t.options);if(t.methods)for(var n=Object.keys(t.methods),o=0;o<n.length;++o)s.add(qr.fromJSON(n[o],t.methods[n[o]]));return t.nested&&s.addJSON(t.nested,r),t.edition&&(s._edition=t.edition),s.comment=t.comment,s._defaultEdition="proto3",s};me.prototype.toJSON=function(e){var t=je.prototype.toJSON.call(this,e),r=e?!!e.keepComments:!1;return Jt.toObject(["edition",this._editionToJSON(),"options",t&&t.options||void 0,"methods",je.arrayToJSON(this.methodsArray,e)||{},"nested",t&&t.nested||void 0,"comment",r?this.comment:void 0])};Object.defineProperty(me.prototype,"methodsArray",{get:function(){return this._methodsArray||(this._methodsArray=Jt.toArray(this.methods))}});function En(i){return i._methodsArray=null,i}me.prototype.get=function(e){return Object.prototype.hasOwnProperty.call(this.methods,e)?this.methods[e]:je.prototype.get.call(this,e)};me.prototype.resolveAll=function(){if(!this._needsRecursiveResolve)return this;je.prototype.resolve.call(this);for(var e=this.methodsArray,t=0;t<e.length;++t)e[t].resolve();return this};me.prototype._resolveFeaturesRecursive=function(e){return this._needsRecursiveFeatureResolution?(e=this._edition||e,je.prototype._resolveFeaturesRecursive.call(this,e),this.methodsArray.forEach(t=>{t._resolveFeaturesRecursive(e)}),this):this};me.prototype.add=function(e){if(this.get(e.name))throw Error("duplicate name '"+e.name+"' in "+this);return e instanceof qr?e.name==="__proto__"?this:(this.methods[e.name]=e,e.parent=this,En(this)):je.prototype.add.call(this,e)};me.prototype.remove=function(e){if(e instanceof qr){if(this.methods[e.name]!==e)throw Error(e+" is not a member of "+this);return delete this.methods[e.name],e.parent=null,En(this)}return je.prototype.remove.call(this,e)};me.prototype.create=function(e,t,r){for(var s=new On.Service(e,t,r),n=0,o;n<this.methodsArray.length;++n){var f=Jt.lcFirst((o=this._methodsArray[n]).resolve().name).replace(/[^$\w_]/g,"");s[f]=(function(a,l,m){return function(N,R){return On.Service.prototype.rpcCall.call(this,a,l,m,N,R)}})(o,o.resolvedRequestType.ctor,o.resolvedResponseType.ctor)}return s}});var Wt=T((La,An)=>{"use strict";An.exports=qe;var Js=Ie();function qe(i){if(i)for(var e=Object.keys(i),t=0;t<e.length;++t)i[e[t]]!=null&&e[t]!=="__proto__"&&(this[e[t]]=i[e[t]])}qe.create=function(e){return this.$type.create(e)};qe.encode=function(e,t){return this.$type.encode(e,t)};qe.encodeDelimited=function(e,t){return this.$type.encodeDelimited(e,t)};qe.decode=function(e){return this.$type.decode(e)};qe.decodeDelimited=function(e){return this.$type.decodeDelimited(e)};qe.verify=function(e){return this.$type.verify(e)};qe.fromObject=function(e){return this.$type.fromObject(e)};qe.toObject=function(e,t){return this.$type.toObject(e,t)};qe.prototype.toJSON=function(){return this.$type.toObject(this,Js.toJSONOptions)}});var Fr=T((Ia,Rn)=>{"use strict";Rn.exports=Ws;var Ht=Ae(),ie=Xe(),zt=ae();function $s(i){return"missing required '"+i.name+"'"}function Rt(i){return i._features.utf8_validation==="VERIFY"?"stringVerify":"string"}function vt(i,e){return i("if(!r.discardUnknown){")('util.makeProp(m,"$unknowns",false);')("(m.$unknowns||(m.$unknowns=[])).push(%s)",e)("}")}function Ws(i){for(var e=!1,t=!1,r=0;r<i.fieldsArray.length;++r){var s=i._fieldsArray[r];s.map&&(e=!0),(s.resolvedType instanceof Ht||!s.repeated&&!s.map&&!s.hasPresence)&&(t=!0)}var n=zt.codegen(["r","l","z","q","g"])("if(!(r instanceof Reader))")("r=Reader.create(r)")("if(q===undefined)q=0")("if(q>Reader.recursionLimit)")('throw Error("max depth exceeded")')("var c,m"+(e?",k,v":t?",v":""))("if(l===undefined)")("c=r.len")("else{")("c=r.pos+l")("if(c>r.len)")('throw RangeError("index out of range")')("l=r.len")("r.len=c")("}")("m=g||new C")("while(r.pos<c){")("var s=r.pos")("var t=r.tag()")("if(t===z){")("z=undefined")("break")("}");for(i.fieldsArray.length&&n("var u=t&7")("switch(t>>>=3){"),r=0;r<i.fieldsArray.length;++r){var o=i._fieldsArray[r].resolve(),f=o.resolvedType instanceof Ht?"int32":o.type,a="m"+zt.safeProp(o.name),l=o.resolvedType instanceof Ht&&o.resolvedType._features.enum_type==="CLOSED";if(o.map){n("case %i:{",o.id)("if(u!==2)")("break"),l||n("if(%s===util.emptyObject)",a)("%s={}",a),n("var c2=r.uint32()+r.pos")("if(c2>r.len)")('throw RangeError("index out of range")')("r.len=c2"),ie.defaults[o.keyType]!==void 0?n("k=%j",ie.defaults[o.keyType]):n("k=null"),ie.long[f]!==void 0?n("v=util.Long?util.Long.fromNumber(0,%j):0",f==="uint64"||f==="fixed64"):ie.defaults[f]!==void 0?n("v=%j",ie.defaults[f]):n("v=null"),n("while(r.pos<c2){")("var t2=r.tag()")("u=t2&7")("switch(t2>>>=3){")("case 1:")("if(u!==%i)",ie.mapKey[o.keyType])("break")("k=r.%s()",o.keyType==="string"?Rt(o):o.keyType)("continue")("case 2:")("if(u!==%i)",ie.basic[f]===void 0?2:ie.basic[f])("break"),ie.basic[f]===void 0?n("v=types[%i].decode(r,r.uint32(),undefined,q+1,v)",r):n("v=r.%s()",f==="string"?Rt(o):f),n("continue")("}")("r.skipType(u,q,t2)")("}"),n("if(r.pos!==c2)")('throw RangeError("index out of range")')("r.len=c"),l&&(n("if(types[%i].valuesById[v]===undefined){",r),vt(n,"r.raw(s,r.pos)")("continue")("}")("if(%s===util.emptyObject)",a)("%s={}",a));var m=ie.basic[f]===void 0?"v||new types["+r+"].ctor":"v";ie.long[o.keyType]!==void 0?n('%s[typeof k==="object"?util.longToHash(k):k]=%s',a,m):(o.keyType==="string"&&n('if(k==="__proto__")')("util.makeProp(%s,k)",a),n("%s[k]=%s",a,m))}else o.repeated?(n("case %i:",o.id)("{"),ie.packed[f]!==void 0&&(n("if(u===2){"),l?(n("var c2=r.uint32()+r.pos")("if(c2>r.len)")('throw RangeError("index out of range")')("r.len=c2")("while(r.pos<c2){")("s=r.pos")("v=r.%s()",f)("if(types[%i].valuesById[v]!==undefined){",r)("if(!(%s&&%s.length))",a,a)("%s=[]",a)("%s.push(v)",a)("}else"),vt(n,"util.rawField("+o.id+",0,r.raw(s,r.pos))")("}"),n("if(r.pos!==c2)")('throw RangeError("index out of range")')("r.len=c")):n("if(!(%s&&%s.length))",a,a)("%s=[]",a)("r.%ss(%s)",f,a),n("continue")("}")),n("if(u!==%i)",ie.basic[f]===void 0?o.delimited?3:2:ie.basic[f])("break"),l||n("if(!(%s&&%s.length))",a,a)("%s=[]",a),ie.basic[f]===void 0?o.delimited?n("%s.push(types[%i].decode(r,undefined,%i,q+1))",a,r,o.id*8+4):n("%s.push(types[%i].decode(r,r.uint32(),undefined,q+1))",a,r):l?(n("v=r.%s()",f)("if(types[%i].valuesById[v]!==undefined){",r)("if(!(%s&&%s.length))",a,a)("%s=[]",a)("%s.push(v)",a)("}else"),vt(n,"r.raw(s,r.pos)")):n("%s.push(r.%s())",a,f==="string"?Rt(o):f)):ie.basic[f]===void 0?(n("case %i:{",o.id)("if(u!==%i)",o.delimited?3:2)("break"),o.delimited?n("%s=types[%i].decode(r,undefined,%i,q+1,%s)",a,r,o.id*8+4,a):n("%s=types[%i].decode(r,r.uint32(),undefined,q+1,%s)",a,r,a)):o.hasPresence?(n("case %i:{",o.id)("if(u!==%i)",ie.basic[f])("break"),l?(n("v=r.%s()",f)("if(types[%i].valuesById[v]!==undefined){",r)("%s=v",a),o.partOf&&n("m%s=%j",zt.safeProp(o.partOf.name),o.name),n("}else"),vt(n,"r.raw(s,r.pos)")):n("%s=r.%s()",a,f==="string"?Rt(o):f)):(n("case %i:{",o.id)("if(u!==%i)",ie.basic[f])("break"),l?(n("v=r.%s()",f)("if(types[%i].valuesById[v]!==undefined){",r)("if(v!==%j)",o.typeDefault)("%s=v",a)("else")("delete %s",a)("}else{"),vt(n,"r.raw(s,r.pos)")("}")):(o.resolvedType instanceof Ht&&o.typeDefault!==0?n("if((v=r.%s())!==%j)",f,o.typeDefault):f==="string"?n("if((v=r.%s()).length)",Rt(o)):f==="bytes"?n("if((v=r.%s()).length)",f):ie.long[f]!==void 0?n('if(typeof(v=r.%s())==="object"?v.low||v.high:v!==0)',f):n(f==="double"||f==="float"?"if(!Object.is(v=r.%s(),0))":"if(v=r.%s())",f),n("%s=v",a)("else")("delete %s",a)));o.partOf&&!l&&n("m%s=%j",zt.safeProp(o.partOf.name),o.name),n("continue")("}")}for(r&&n("}"),n("r.skipType(%s,q,t)",r?"u":"t&7"),vt(n,"r.raw(s,r.pos)")("}")("if(l!==undefined){")("if(r.pos!==c)")('throw RangeError("index out of range")')("r.len=l")("}")("if(z!==undefined)")('throw Error("missing end group")'),r=0;r<i._fieldsArray.length;++r){var w=i._fieldsArray[r];w.required&&n("if(!Object.hasOwnProperty.call(m,%j))",w.name)("throw util.ProtocolError(%j,{instance:m})",$s(w))}return n("return m")}});var kr=T((xa,Sn)=>{"use strict";Sn.exports=Zs;var Hs=Ae(),Cr=ae();function _e(i,e){return i.name+": "+e+(i.repeated&&e!=="array"?"[]":i.map&&e!=="object"?"{k:"+i.keyType+"}":"")+" expected"}function Pr(i,e,t,r){var s=e.resolvedType;if(s)if(s instanceof Hs)if(s._features.enum_type==="CLOSED"){i("switch(%s){",r)("default:")("return%j",_e(e,"enum value"));for(var n=Object.keys(s.values),o=0;o<n.length;++o)i("case %i:",s.values[n[o]]);i("break")("}")}else i('if(typeof %s!=="number"||(%s|0)!==%s)',r,r,r)("return%j",_e(e,"enum value"));else i("{")("var e=types[%i].verify(%s,q+1);",t,r)("if(e)")("return%j+e",e.name+".")("}");else switch(e.type){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":i("if(!util.isInteger(%s))",r)("return%j",_e(e,"integer"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":i("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",r,r,r,r)("return%j",_e(e,"integer|Long"));break;case"float":case"double":i('if(typeof %s!=="number")',r)("return%j",_e(e,"number"));break;case"bool":i('if(typeof %s!=="boolean")',r)("return%j",_e(e,"boolean"));break;case"string":i("if(!util.isString(%s))",r)("return%j",_e(e,"string"));break;case"bytes":i('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',r,r,r)("return%j",_e(e,"buffer"));break}return i}function zs(i,e,t){switch(e.keyType){case"int32":case"uint32":case"sint32":case"fixed32":case"sfixed32":i("if(!util.key32Re.test(%s))",t)("return%j",_e(e,"integer key"));break;case"int64":case"uint64":case"sint64":case"fixed64":case"sfixed64":i("if(!util.key64Re.test(%s))",t)("return%j",_e(e,"integer|Long key"));break;case"bool":i("if(!util.key2Re.test(%s))",t)("return%j",_e(e,"boolean key"));break}return i}function Zs(i){var e=Cr.codegen(["m","q"])('if(typeof m!=="object"||m===null)')("return%j","object expected")("if(q===undefined)q=0")("if(q>util.recursionLimit)")("return%j","max depth exceeded"),t=i.oneofsArray,r={};t.length&&e("var p={}");for(var s=0;s<i.fieldsArray.length;++s){var n=i._fieldsArray[s].resolve(),o="m"+Cr.safeProp(n.name);if(n.optional&&e("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",o,n.name),n.map)e("if(!util.isObject(%s))",o)("return%j",_e(n,"object"))("var k=Object.keys(%s)",o)("for(var i=0;i<k.length;++i){"),zs(e,n,"k[i]"),Pr(e,n,s,o+"[k[i]]")("}");else if(n.repeated)e("if(!Array.isArray(%s))",o)("return%j",_e(n,"array"))("for(var i=0;i<%s.length;++i){",o),Pr(e,n,s,o+"[i]")("}");else{if(n.partOf){var f=Cr.safeProp(n.partOf.name);r[n.partOf.name]===1&&e("if(p%s===1)",f)("return%j",n.partOf.name+": multiple values"),r[n.partOf.name]=1,e("p%s=1",f)}Pr(e,n,s,o)}n.optional&&e("}")}return e("return null")}});var Ur=T(Ln=>{"use strict";var Tn=Ln,Ve=Ae(),Vr=Xe(),Re=ae();function Br(i,e,t,r,s){if(e.resolvedType)if(e.resolvedType instanceof Ve){var n=s?"m"+s+"[m"+s+".length]":"m"+r;i("switch(d%s){",r);for(var o=e.resolvedType.values,f=Object.keys(o),a=0;a<f.length;++a)i("case%j:",f[a])("case %i:",o[f[a]])("%s=%j",n,o[f[a]])("break");i("default:"),e.resolvedType._features.enum_type!=="CLOSED"&&i('if(typeof d%s==="number"&&(d%s|0)===d%s)',r,r,r)("%s=d%s",n,r),i("}")}else i("if(!util.isObject(d%s))",r)("throw TypeError(%j)",e.fullName+": object expected")("m%s=types[%i].fromObject(d%s,q+1)",r,t,r);else{var l=!1;switch(e.type){case"double":case"float":i("m%s=Number(d%s)",r,r);break;case"uint32":case"fixed32":i("m%s=d%s>>>0",r,r);break;case"int32":case"sint32":case"sfixed32":i("m%s=d%s|0",r,r);break;case"uint64":case"fixed64":l=!0;case"int64":case"sint64":case"sfixed64":i("if(util.Long)")("m%s=util.Long.fromValue(d%s,%j)",r,r,l)('else if(typeof d%s==="string")',r)("m%s=parseInt(d%s,10)",r,r)('else if(typeof d%s==="number")',r)("m%s=d%s",r,r)('else if(typeof d%s==="object")',r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",r,r,r,l?"true":"");break;case"bytes":i('if(typeof d%s==="string")',r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",r,r,r)("else if(d%s.length>=0)",r)("m%s=d%s",r,r);break;case"string":i("m%s=String(d%s)",r,r);break;case"bool":i("m%s=Boolean(d%s)",r,r);break}}return i}Tn.fromObject=function(e){var t=e.fieldsArray,r=Re.codegen(["d","q"])("if(d instanceof C)")("return d")("if(!util.isObject(d))")("throw TypeError(%j)",e.fullName+": object expected")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")');if(!t.length)return r("return new C");r("var m=new C");for(var s=0;s<t.length;++s){var n=t[s].resolve(),o=Re.safeProp(n.name),f=!n.hasPresence&&!n.repeated&&!n.map&&(n.resolvedType instanceof Ve||Vr.basic[n.type]!==void 0);n.map?(r("if(d%s){",o)("if(!util.isObject(d%s))",o)("throw TypeError(%j)",n.fullName+": object expected")("m%s={}",o)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",o),r('if(ks[i]==="__proto__")')("util.makeProp(m%s,ks[i])",o),Br(r,n,s,o+"[ks[i]]")("}")("}")):n.repeated?(r("if(d%s){",o)("if(!Array.isArray(d%s))",o)("throw TypeError(%j)",n.fullName+": array expected"),n.resolvedType instanceof Ve?r("m%s=[]",o):r("m%s=Array(d%s.length)",o,o),r("for(var i=0;i<d%s.length;++i){",o),Br(r,n,s,o+"[i]",n.resolvedType instanceof Ve?o:void 0)("}")("}")):(n.resolvedType instanceof Ve||r("if(d%s!=null){",o),f&&(n.resolvedType instanceof Ve?r('if(d%s!==%j&&(typeof d%s!=="string"||types[%i].values[d%s]!==%j)){',o,n.typeDefault,o,s,o,n.typeDefault):n.type==="string"?r('if(typeof d%s!=="string"||d%s.length){',o,o):n.type==="bytes"?r("if(d%s.length){",o):n.type==="bool"?r("if(d%s){",o):n.type==="double"||n.type==="float"?r("if(!Object.is(Number(d%s),0)){",o):Vr.long[n.type]!==void 0?r('if(typeof d%s==="object"?d%s.low||d%s.high:Number(d%s)!==0){',o,o,o,o):r("if(Number(d%s)!==0){",o)),Br(r,n,s,o),f&&r("}"),n.resolvedType instanceof Ve||r("}"))}return r("return m")};function jr(i,e,t,r,s){if(s||(s=r),e.resolvedType)e.resolvedType instanceof Ve?i("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s",r,t,s,s,t,s,s):i("d%s=types[%i].toObject(m%s,o,q+1)",r,t,s);else{var n=!1;switch(e.type){case"double":case"float":i("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",r,s,s,s);break;case"uint64":case"fixed64":n=!0;case"int64":case"sint64":case"sfixed64":i('if(typeof BigInt!=="undefined"&&o.longs===BigInt)')('d%s=typeof m%s==="number"?BigInt(m%s):util.Long.fromBits(m%s.low>>>0,m%s.high>>>0,%j).toBigInt()',r,s,s,s,s,n)('else if(typeof m%s==="number")',s)("d%s=o.longs===String?String(m%s):m%s",r,s,s)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",r,s,s,s,n?"true":"",s);break;case"bytes":i("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",r,s,s,s,s);break;default:i("d%s=m%s",r,s);break}}return i}Tn.toObject=function(e){var t=e.fieldsArray.slice().sort(Re.compareFieldsById);if(!t.length)return Re.codegen()("return {}");for(var r=Re.codegen(["m","o","q"])("if(!o)")("o={}")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")')("var d={}"),s=[],n=[],o=[],f=0;f<t.length;++f)t[f].partOf||(t[f].resolve().repeated?s:t[f].map?n:o).push(t[f]);if(s.length){for(r("if(o.arrays||o.defaults){"),f=0;f<s.length;++f)r("d%s=[]",Re.safeProp(s[f].name));r("}")}if(n.length){for(r("if(o.objects||o.defaults){"),f=0;f<n.length;++f)r("d%s={}",Re.safeProp(n[f].name));r("}")}if(o.length){for(r("if(o.defaults){"),f=0;f<o.length;++f){var a=o[f],l=Re.safeProp(a.name);if(a.resolvedType instanceof Ve)r("d%s=o.enums===String?%j:%j",l,a.resolvedType.valuesById[a.typeDefault],a.typeDefault);else if(a.long)r("if(util.Long){")("var n=new util.Long(%i,%i,%j)",a.typeDefault.low,a.typeDefault.high,a.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():typeof BigInt!=="undefined"&&o.longs===BigInt?n.toBigInt():n',l)("}else")('d%s=o.longs===String?%j:typeof BigInt!=="undefined"&&o.longs===BigInt?BigInt(%j):%i',l,a.typeDefault.toString(),a.typeDefault.toString(),a.typeDefault.toNumber());else if(a.bytes){var m=Array.prototype.slice.call(a.typeDefault);r("if(o.bytes===String)d%s=%j",l,Re.base64.encode(a.typeDefault,0,a.typeDefault.length))("else{")("d%s=%j",l,m)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",l,l)("}")}else(a.type==="double"||a.type==="float")&&typeof a.typeDefault=="number"&&(!isFinite(a.typeDefault)||Object.is(a.typeDefault,-0))?r("d%s=%f",l,a.typeDefault)("if(o.json&&!isFinite(d%s))d%s=String(d%s)",l,l,l):r("d%s=%j",l,a.typeDefault)}r("}")}var w=!1;for(f=0;f<t.length;++f){var a=t[f],N=e._fieldsArray.indexOf(a),l=Re.safeProp(a.name);if(a.map){w||(w=!0,r("var ks2")),r("if(m%s&&(ks2=Object.keys(m%s)).length){",l,l)("d%s={}",l);var R=Vr.long[a.keyType]!==void 0,S=l+"[ks2[j]]";r("for(var j=0;j<ks2.length;++j){"),R&&r("var k2=util.longFromKey(ks2[j],%j).toString()",a.keyType==="uint64"||a.keyType==="fixed64"),r('if(ks2[j]==="__proto__")')("util.makeProp(d%s,ks2[j])",l),jr(r,a,N,R?l+"[k2]":S,S)("}")}else a.repeated?(r("if(m%s&&m%s.length){",l,l)("d%s=Array(m%s.length)",l,l)("for(var j=0;j<m%s.length;++j){",l),jr(r,a,N,l+"[j]")("}")):(r("if(m%s!=null&&Object.hasOwnProperty.call(m,%j)){",l,a.name),jr(r,a,N,l),a.partOf&&!a.partOf.isProto3Optional&&r("if(o.oneofs)")("d%s=%j",Re.safeProp(a.partOf.name),a.name));r("}")}return r("return d")}});var Mr=T(xn=>{"use strict";var Qs=xn,Xs=Wt(),In=Ie();Qs[".google.protobuf.Any"]={fromObject:function(i,e){if(e===void 0&&(e=0),e>In.recursionLimit)throw Error("max depth exceeded");if(i&&i["@type"]){var t=i["@type"].substring(i["@type"].lastIndexOf("/")+1),r=this.lookup(t,[this.constructor]);if(r){var s=i["@type"].charAt(0)==="."?i["@type"].slice(1):i["@type"];return s.indexOf("/")===-1&&(s="/"+s),this.create({type_url:s,value:r.encode(r.fromObject(i,e+1)).finish()})}}return this.fromObject(i,e)},toObject:function(i,e,t){if(t===void 0&&(t=0),t>In.recursionLimit)throw Error("max depth exceeded");var r="type.googleapis.com/",s="",n="";if(e&&e.json&&i.type_url&&i.value){n=i.type_url.substring(i.type_url.lastIndexOf("/")+1),s=i.type_url.substring(0,i.type_url.lastIndexOf("/")+1);var o=this.lookup(n,[this.constructor]);o&&(i=o.decode(i.value,void 0,void 0,t+1))}if(!(i instanceof this.ctor)&&i instanceof Xs){var f=i.$type.toObject(i,e,t+1),a=i.$type.fullName[0]==="."?i.$type.fullName.slice(1):i.$type.fullName;return s===""&&(s=r),n=s+a,f["@type"]=n,f}return this.toObject(i,e,t)}}});var Xt=T((Fa,Fn)=>{"use strict";Fn.exports=G;var we=pt();G.prototype=Object.create(we.prototype,{constructor:{value:G,writable:!0,enumerable:!1,configurable:!0}});G.className="Type";var Ys=Ae(),$r=nt(),Zt=Ze(),Ks=Mt(),eo=$t(),Gr=Wt(),Jr=Vt(),qn=Bt(),ne=ae(),to=Wr(),ro=Fr(),io=kr(),Dn=Ur(),no=Mr();function G(i,e){i=i.replace(/\W/g,""),we.call(this,i,e),this.fields={},this.oneofs=void 0,this.extensions=void 0,this.reserved=void 0,this.group=void 0,this.visibility=void 0,this._fieldsById=null,this._fieldsArray=null,this._oneofsArray=null,this._ctor=null,this._fieldsByJsonName=null}Object.defineProperties(G.prototype,{fieldsById:{get:function(){if(this._fieldsById)return this._fieldsById;this._fieldsById={};for(var i=Object.keys(this.fields),e=0;e<i.length;++e){var t=this.fields[i[e]],r=t.id;if(this._fieldsById[r])throw Error("duplicate id "+r+" in "+this);this._fieldsById[r]=t}return this._fieldsById}},fieldsArray:{get:function(){return this._fieldsArray||(this._fieldsArray=ne.toArray(this.fields))}},oneofsArray:{get:function(){return this._oneofsArray||(this._oneofsArray=ne.toArray(this.oneofs))}},ctor:{get:function(){return this._ctor||(this.ctor=G.generateConstructor(this)())},set:function(i){var e=i.prototype;e instanceof Gr||(i.prototype=new Gr,Object.defineProperty(i.prototype,"constructor",{value:i,writable:!0,enumerable:!1,configurable:!0}),ne.merge(i.prototype,e)),i.$type=i.prototype.$type=this,ne.merge(i,Gr,!0),this._ctor=i,delete this.decode,delete this.fromObject;for(var t=0,r;t<this.fieldsArray.length;++t)r=this._fieldsArray[t].resolve(),i.prototype[r.name]=r.defaultValue;var s={};for(t=0;t<this.oneofsArray.length;++t)s[this._oneofsArray[t].resolve().name]={get:ne.oneOfGetter(this._oneofsArray[t].oneof),set:ne.oneOfSetter(this._oneofsArray[t].oneof)};t&&Object.defineProperties(i.prototype,s)}}});G.generateConstructor=function(e){for(var t=ne.codegen(["p"]),r=0,s;r<e.fieldsArray.length;++r)(s=e._fieldsArray[r]).map?t("this%s={}",ne.safeProp(s.name)):s.repeated&&t("this%s=[]",ne.safeProp(s.name));return t('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null&&ks[i]!=="__proto__")')("this[ks[i]]=p[ks[i]]")};function Qt(i){return i._fieldsById=i._fieldsArray=i._oneofsArray=i._fieldsByJsonName=null,delete i.encode,delete i.decode,delete i.verify,i}G.fromJSON=function(e,t,r){if(r===void 0&&(r=0),r>ne.nestingLimit)throw Error("max depth exceeded");var s=new G(e,t.options);s.extensions=t.extensions,s.reserved=t.reserved;for(var n=Object.keys(t.fields),o=0;o<n.length;++o)s.add((typeof t.fields[n[o]].keyType!="undefined"?Ks.fromJSON:Zt.fromJSON)(n[o],t.fields[n[o]]));if(t.oneofs)for(n=Object.keys(t.oneofs),o=0;o<n.length;++o)s.add($r.fromJSON(n[o],t.oneofs[n[o]]));if(t.nested)for(n=Object.keys(t.nested),o=0;o<n.length;++o){var f=t.nested[n[o]];s.add((f.id!==void 0?Zt.fromJSON:f.fields!==void 0?G.fromJSON:f.values!==void 0?Ys.fromJSON:f.methods!==void 0?eo.fromJSON:we.fromJSON)(n[o],f,r+1))}return t.extensions&&t.extensions.length&&(s.extensions=t.extensions),t.reserved&&t.reserved.length&&(s.reserved=t.reserved),t.group&&(s.group=!0),t.visibility&&(s.visibility=t.visibility),t.comment&&(s.comment=t.comment),t.edition&&(s._edition=t.edition),s._defaultEdition="proto3",s};G.prototype.toJSON=function(e){var t=we.prototype.toJSON.call(this,e),r=e?!!e.keepComments:!1;return ne.toObject(["edition",this._editionToJSON(),"options",t&&t.options||void 0,"oneofs",we.arrayToJSON(this.oneofsArray,e),"fields",we.arrayToJSON(this.fieldsArray.filter(function(s){return!s.declaringField}),e)||{},"extensions",this.extensions&&this.extensions.length?this.extensions:void 0,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"group",this.group||void 0,"visibility",this.visibility,"nested",t&&t.nested||void 0,"comment",r?this.comment:void 0])};G.prototype.resolveAll=function(){if(!this._needsRecursiveResolve)return this;we.prototype.resolveAll.call(this);var e=this.oneofsArray;for(r=0;r<e.length;)e[r++].resolve();for(var t=this.fieldsArray,r=0;r<t.length;)t[r++].resolve();return this};G.prototype._resolveFeaturesRecursive=function(e){return this._needsRecursiveFeatureResolution?(e=this._edition||e,we.prototype._resolveFeaturesRecursive.call(this,e),this.oneofsArray.forEach(t=>{t._resolveFeatures(e)}),this.fieldsArray.forEach(t=>{t._resolveFeatures(e)}),this):this};G.prototype.get=function(e){return Object.prototype.hasOwnProperty.call(this.fields,e)?this.fields[e]:this.oneofs&&Object.prototype.hasOwnProperty.call(this.oneofs,e)?this.oneofs[e]:this.nested&&Object.prototype.hasOwnProperty.call(this.nested,e)?this.nested[e]:null};G.prototype.add=function(e){if(this.get(e.name))throw Error("duplicate name '"+e.name+"' in "+this);if(e instanceof Zt&&e.extend===void 0){if(this._fieldsById?this._fieldsById[e.id]:this.fieldsById[e.id])throw Error("duplicate id "+e.id+" in "+this);if(this.isReservedId(e.id))throw Error("id "+e.id+" is reserved in "+this);if(this.isReservedName(e.name)||e.name.charAt(0)==="$")throw Error("name '"+e.name+"' is reserved in "+this);return e.name==="__proto__"?this:(e.parent&&e.parent.remove(e),this.fields[e.name]=e,e.message=this,e.onAdd(this),Qt(this))}if(e instanceof $r){if(e.name.charAt(0)==="$")throw Error("name '"+e.name+"' is reserved in "+this);return e.name==="__proto__"?this:(this.oneofs||(this.oneofs={}),this.oneofs[e.name]=e,e.onAdd(this),Qt(this))}return we.prototype.add.call(this,e)};G.prototype.remove=function(e){if(e instanceof Zt&&e.extend===void 0){if(!ne.remove(this.fields,e,e.name))throw Error(e+" is not a member of "+this);return e.parent=null,e.onRemove(this),Qt(this)}if(e instanceof $r){if(!ne.remove(this.oneofs,e,e.name))throw Error(e+" is not a member of "+this);return e.parent=null,e.onRemove(this),Qt(this)}return we.prototype.remove.call(this,e)};G.prototype.isReservedId=function(e){return we.isReservedId(this.reserved,e)};G.prototype.isReservedName=function(e){return we.isReservedName(this.reserved,e)};G.prototype.create=function(e){return new this.ctor(e)};G.prototype.setup=function(){var e=this.root;if(e&&e._needsRecursiveFeatureResolution){var t=e._edition||this._edition;t&&e._resolveFeaturesRecursive(t)}for(var r=this.fullName,s=[],n=0;n<this.fieldsArray.length;++n)s.push(this._fieldsArray[n].resolve().resolvedType);this.encode=to(this)({Writer:qn,types:s,util:ne}),this.decode=ro(this)({Reader:Jr,types:s,util:ne,C:this.ctor}),this.verify=io(this)({types:s,util:ne}),this.fromObject=Dn.fromObject(this)({types:s,util:ne,C:this.ctor}),this.toObject=Dn.toObject(this)({types:s,util:ne});var o=no[r];if(o){var f=Object.create(this);f._ctor=this.ctor,f.fromObject=this.fromObject,this.fromObject=o.fromObject.bind(f),f.toObject=this.toObject,this.toObject=o.toObject.bind(f)}return this};G.prototype.encode=function(e,t){return this.setup().encode.apply(this,arguments)};G.prototype.encodeDelimited=function(e,t){return this.encode(e,(t||qn.create()).fork()).ldelim()};G.prototype.decode=function(e,t){return this.setup().decode.apply(this,arguments)};G.prototype.decodeDelimited=function(e){return e instanceof Jr||(e=Jr.create(e)),this.decode(e,e.uint32())};G.prototype.verify=function(e){return this.setup().verify.apply(this,arguments)};G.prototype.fromObject=function(e){return this.setup().fromObject.apply(this,arguments)};G.prototype.toObject=function(e,t){return this.setup().toObject.apply(this,arguments)};G.prototype.getTypeUrl=function(e){e===void 0&&(e="type.googleapis.com");var t=this.fullName;return e+"/"+(t.charAt(0)==="."?t.substring(1):t)};G.d=function(e){return function(r){ne.decorateType(r,e)}}});var tr=T((Ca,kn)=>{"use strict";kn.exports=ve;var er=pt();ve.prototype=Object.create(er.prototype,{constructor:{value:ve,writable:!0,enumerable:!1,configurable:!0}});ve.className="Root";var Yt=Ze(),Hr=Ae(),so=nt(),Fe=ae(),zr,Zr,yt;function ve(i){er.call(this,"",i),this.deferred=[],this.files=[],this._edition="proto2",this._fullyQualifiedObjects={}}ve.fromJSON=function(e,t,r){if(r===void 0&&(r=0),r>Fe.recursionLimit)throw Error("max depth exceeded");return t||(t=new ve),e.options&&t.setOptions(e.options),t.addJSON(e.nested,r).resolveAll()};ve.prototype.resolvePath=Fe.path.resolve;ve.prototype.fetch=Fe.fetch;function Pn(){}ve.prototype.load=function i(e,t,r){typeof t=="function"&&(r=t,t=void 0);var s=this;if(!r)return Fe.asPromise(i,s,e,t);var n=r===Pn;function o(R,S){if(r){if(n)throw R;S&&S.resolveAll();var I=r;r=null,I(R,S)}}function f(R){var S=R.lastIndexOf("google/protobuf/");if(S>-1){var I=R.substring(S);if(Object.prototype.hasOwnProperty.call(yt,I))return I}return Object.prototype.hasOwnProperty.call(yt,R)?R:null}function a(R,S,I){I===void 0&&(I=0);try{if(I>Fe.recursionLimit)throw Error("max depth exceeded");if(Fe.isString(S)&&S.charAt(0)==="{"&&(S=JSON.parse(S)),!Fe.isString(S))s.setOptions(S.options).addJSON(S.nested);else{Zr.filename=R;var B=Zr(S,s,t),K,ee=0;if(B.imports)for(;ee<B.imports.length;++ee)(K=f(B.imports[ee])||s.resolvePath(R,B.imports[ee]))&&l(K,!1,I+1);if(B.weakImports)for(ee=0;ee<B.weakImports.length;++ee)(K=f(B.weakImports[ee])||s.resolvePath(R,B.weakImports[ee]))&&l(K,!0,I+1)}}catch(ue){o(ue)}!n&&!m&&o(null,s)}function l(R,S,I){if(I===void 0&&(I=0),R=f(R)||R,!(s.files.indexOf(R)>-1)){if(s.files.push(R),Object.prototype.hasOwnProperty.call(yt,R)){n?a(R,yt[R],I):(++m,setTimeout(function(){--m,a(R,yt[R],I)}));return}if(n){var B;try{B=Fe.fs.readFileSync(R).toString("utf8")}catch(K){S||o(K);return}a(R,B,I)}else++m,s.fetch(R,function(K,ee){if(--m,!!r){if(K){S?m||o(null,s):o(K);return}a(R,ee,I)}})}}var m=0;Fe.isString(e)&&(e=[e]);for(var w=0,N;w<e.length;++w)(N=s.resolvePath("",e[w]))&&l(N);return n?(s.resolveAll(),s):(m||o(null,s),s)};ve.prototype.loadSync=function(e,t){if(!Fe.isNode)throw Error("not supported");return this.load(e,t,Pn)};ve.prototype.resolveAll=function(){if(!this._needsRecursiveResolve)return this;if(this.deferred.length)throw Error("unresolvable extensions: "+this.deferred.map(function(e){return"'extend "+e.extend+"' in "+e.parent.fullName}).join(", "));return er.prototype.resolveAll.call(this)};var Kt=/^[A-Z]/;function Cn(i,e){var t=e.parent.lookup(e.extend);if(t){var r=new Yt(e.fullName,e.id,e.type,e.rule,void 0,e.options);return t.get(r.name)||(r.declaringField=e,e.extensionField=r,t.add(r)),!0}return!1}ve.prototype._handleAdd=function(e){if(e instanceof Yt)e.extend!==void 0&&!e.extensionField&&(Cn(this,e)||this.deferred.push(e));else if(e instanceof Hr)Kt.test(e.name)&&(e.parent[e.name]=e.values);else if(!(e instanceof so)){if(e instanceof zr)for(var t=0;t<this.deferred.length;)Cn(this,this.deferred[t])?this.deferred.splice(t,1):++t;for(var r=0;r<e.nestedArray.length;++r)this._handleAdd(e._nestedArray[r]);Kt.test(e.name)&&(e.parent[e.name]=e)}(e instanceof zr||e instanceof Hr||e instanceof Yt)&&(this._fullyQualifiedObjects[e.fullName]=e)};ve.prototype._handleRemove=function(e){if(e instanceof Yt){if(e.extend!==void 0)if(e.extensionField)e.extensionField.parent.remove(e.extensionField),e.extensionField=null;else{var t=this.deferred.indexOf(e);t>-1&&this.deferred.splice(t,1)}}else if(e instanceof Hr)Kt.test(e.name)&&delete e.parent[e.name];else if(e instanceof er){for(var r=0;r<e.nestedArray.length;++r)this._handleRemove(e._nestedArray[r]);Kt.test(e.name)&&delete e.parent[e.name]}delete this._fullyQualifiedObjects[e.fullName]};ve._configure=function(i,e,t){zr=i,Zr=e,yt=t}});var ae=T((Pa,Vn)=>{"use strict";var $=Vn.exports=Ie(),Bn=wr(),Qr,Xr;$.codegen=fn();$.fetch=dn();$.path=mn();$.patterns=Er();var jn=$.patterns.reservedRe;$.fs=Ar();$.toArray=function(e){if(e){for(var t=Object.keys(e),r=new Array(t.length),s=0;s<t.length;)r[s]=e[t[s++]];return r}return[]};$.toObject=function(e){for(var t={},r=0;r<e.length;){var s=e[r++],n=e[r++];n!==void 0&&(t[s]=n)}return t};$.remove=function(e,t,r){if(!e)return!1;if(r!==void 0&&Object.prototype.hasOwnProperty.call(e,r)&&e[r]===t)return delete e[r],!0;for(var s=Object.keys(e),n=0;n<s.length;++n)if(e[s[n]]===t)return delete e[s[n]],!0;return!1};$.isReserved=function(e){return jn.test(e)};$.safeProp=function(e){return!/^[$\w_]+$/.test(e)||jn.test(e)?"["+JSON.stringify(e)+"]":"."+e};$.ucFirst=function(e){return e.charAt(0).toUpperCase()+e.substring(1)};var oo=/_([a-z])/g;$.camelCase=function(e){return e.substring(0,1)+e.substring(1).replace(oo,function(t,r){return r.toUpperCase()})};$.jsonName=function(e){for(var t="",r=!1,s=0;s<e.length;++s){var n=e.charAt(s);n==="_"?r=!0:r?(t+=n.toUpperCase(),r=!1):t+=n}return t};$.compareFieldsById=function(e,t){return e.id-t.id};$.decorateType=function(e,t){if(e.$type)return t&&e.$type.name!==t&&($.decorateRoot.remove(e.$type),e.$type.name=t,$.decorateRoot.add(e.$type)),e.$type;Qr||(Qr=Xt());var r=new Qr(t||e.name);return $.decorateRoot.add(r),r.ctor=e,Object.defineProperty(e,"$type",{value:r,enumerable:!1}),Object.defineProperty(e.prototype,"$type",{value:r,enumerable:!1}),r};var ao=0;$.decorateEnum=function(e){if(e.$type)return e.$type;Xr||(Xr=Ae());var t=new Xr("Enum"+ao++,e);return $.decorateRoot.add(t),Object.defineProperty(e,"$type",{value:t,enumerable:!1}),t};$.setProperty=function(e,t,r,s){function n(o,f,a){var l=f.shift();if($.isUnsafeProperty(l))return o;if(f.length>0)o[l]=n(o[l]||{},f,a);else{var m=o[l];if(m&&s)return o;m&&(a=[].concat(m).concat(a)),o[l]=a}return o}if(typeof e!="object")throw TypeError("dst must be an object");if(!t)throw TypeError("path must be specified");if(t=t.split("."),t.length>$.recursionLimit)throw Error("max depth exceeded");return n(e,t,r)};Object.defineProperty($,"decorateRoot",{get:function(){return Bn.decorated||(Bn.decorated=new(tr()))}})});var Xe=T(Un=>{"use strict";var St=Un,uo=ae(),fo=["double","float","int32","uint32","sint32","fixed32","sfixed32","int64","uint64","sint64","fixed64","sfixed64","bool","string","bytes"];function Tt(i,e){var t=0,r=Object.create(null);for(e|=0;t<i.length;)r[fo[t+e]]=i[t++];return r}St.basic=Tt([1,5,0,0,0,5,5,0,0,0,1,1,0,2,2]);St.defaults=Tt([0,0,0,0,0,0,0,0,0,0,0,0,!1,"",uo.emptyArray,null]);St.long=Tt([0,0,0,1,1],7);St.mapKey=Tt([0,0,0,5,5,0,0,0,1,1,0,2],2);St.packed=Tt([1,5,0,0,0,5,5,0,0,0,1,1,0])});var Ze=T((Ba,Gn)=>{"use strict";Gn.exports=se;var It=Qe();se.prototype=Object.create(It.prototype,{constructor:{value:se,writable:!0,enumerable:!1,configurable:!0}});se.className="Field";var Mn=Ae(),rr=Xe(),Z=ae(),Lt,lo=/^(?:required|optional|repeated)$/;se.fromJSON=function(e,t){var r=new se(e,t.id,t.type,t.rule,t.extend,t.options,t.comment);return t.edition&&(r._edition=t.edition),t.protoName&&(r.protoName=t.protoName),t.jsonName!==void 0?r.jsonName=t.jsonName:t.options&&t.options.json_name!==void 0&&(r.jsonName=t.options.json_name),r._defaultEdition="proto3",r};function se(i,e,t,r,s,n,o){if(Z.isObject(r)?(o=s,n=r,r=s=void 0):Z.isObject(s)&&(o=n,n=s,s=void 0),It.call(this,i,n),!Z.isInteger(e)||e<0)throw TypeError("id must be a non-negative integer");if(!Z.isString(t))throw TypeError("type must be a string");if(r!==void 0&&!lo.test(r=r.toString().toLowerCase()))throw TypeError("rule must be a string rule");if(s!==void 0&&!Z.isString(s))throw TypeError("extend must be a string");this.rule=r&&r!=="optional"?r:void 0,this.type=t,this.id=e,this.extend=s||void 0,this.repeated=r==="repeated",this.map=!1,this.message=null,this.partOf=null,this.typeDefault=null,this.defaultValue=null,this.long=Z.Long?rr.long[t]!==void 0:!1,this.bytes=t==="bytes",this.resolvedType=null,this.extensionField=null,this.declaringField=null,this.comment=o,this.protoName=void 0,this.jsonName=void 0}Object.defineProperty(se.prototype,"required",{get:function(){return this._features.field_presence==="LEGACY_REQUIRED"}});Object.defineProperty(se.prototype,"optional",{get:function(){return!this.required}});Object.defineProperty(se.prototype,"delimited",{get:function(){return this.resolvedType instanceof Lt&&this._features.message_encoding==="DELIMITED"}});Object.defineProperty(se.prototype,"packed",{get:function(){return this._features.repeated_field_encoding==="PACKED"}});Object.defineProperty(se.prototype,"hasPresence",{get:function(){return this.repeated||this.map?!1:this.partOf||this.declaringField||this.extensionField||this._features.field_presence!=="IMPLICIT"}});se.prototype.setOption=function(e,t,r){return It.prototype.setOption.call(this,e,t,r)};se.prototype.toJSON=function(e){var t=e?!!e.keepComments:!1;return Z.toObject(["edition",this._editionToJSON(),"rule",this.rule!=="optional"&&this.rule||void 0,"type",this.type,"id",this.id,"extend",this.extend,"protoName",this.protoName!==this.name?this.protoName:void 0,"jsonName",this.jsonName!==Z.jsonName(this.protoName||this.name)?this.jsonName:void 0,"options",this.options,"comment",t?this.comment:void 0])};se.prototype.resolve=function(){if(this.resolved)return this;if((this.typeDefault=rr.defaults[this.type])===void 0?(this.resolvedType=(this.declaringField?this.declaringField.parent:this.parent).lookupTypeOrEnum(this.type),this.resolvedType instanceof Lt?this.typeDefault=null:this.typeDefault=this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]):this.options&&this.options.proto3_optional&&(this.typeDefault=null),this.options&&this.options.default!=null&&(this.typeDefault=this.options.default,this.resolvedType instanceof Mn&&typeof this.typeDefault=="string"&&(this.typeDefault=this.resolvedType.values[this.typeDefault])),this.options&&(this.options.packed!==void 0&&this.resolvedType&&!(this.resolvedType instanceof Mn)&&delete this.options.packed,Object.keys(this.options).length||(this.options=void 0)),this.long){var e=this.type==="uint64"||this.type==="fixed64";this.typeDefault=typeof this.typeDefault=="string"?Z.Long.fromString(this.typeDefault,e):Z.Long.fromNumber(this.typeDefault,e),Object.freeze&&Object.freeze(this.typeDefault)}else if(rr.long[this.type]!==void 0&&typeof this.typeDefault=="string")this.typeDefault=parseInt(this.typeDefault,10);else if(this.bytes&&typeof this.typeDefault=="string"){var t;Z.base64.test(this.typeDefault)?Z.base64.decode(this.typeDefault,t=Z.newBuffer(Z.base64.length(this.typeDefault)),0):Z.utf8.write(this.typeDefault,t=Z.newBuffer(Z.utf8.length(this.typeDefault)),0),this.typeDefault=t}return this.map?this.defaultValue=Z.emptyObject:this.repeated?this.defaultValue=Z.emptyArray:this.defaultValue=this.typeDefault,this.parent instanceof Lt&&this.parent._ctor&&(this.parent._ctor.prototype[this.name]=this.defaultValue),this.protoName===void 0&&(this.protoName=this.name),this.jsonName===void 0&&(this.jsonName=Z.jsonName(this.protoName)),It.prototype.resolve.call(this)};se.prototype._inferLegacyProtoFeatures=function(e){if(e!=="proto2"&&e!=="proto3")return{};var t={};if(this.rule==="required"&&(t.field_presence="LEGACY_REQUIRED"),this.parent&&rr.defaults[this.type]===void 0){var r=this.parent.get(this.type.split(".").pop());r&&r instanceof Lt&&r.group&&(t.message_encoding="DELIMITED")}return this.getOption("packed")===!0?t.repeated_field_encoding="PACKED":this.getOption("packed")===!1&&(t.repeated_field_encoding="EXPANDED"),t};se.prototype._resolveFeatures=function(e){return It.prototype._resolveFeatures.call(this,this._edition||e)};se.d=function(e,t,r,s){return typeof t=="function"?t=Z.decorateType(t).name:t&&typeof t=="object"&&(t=Z.decorateEnum(t).name),function(o,f){Z.decorateType(o.constructor).add(new se(f,e,t,r,{default:s}))}};se._configure=function(e){Lt=e}});var nt=T((ja,Wn)=>{"use strict";Wn.exports=ye;var nr=Qe();ye.prototype=Object.create(nr.prototype,{constructor:{value:ye,writable:!0,enumerable:!1,configurable:!0}});ye.className="OneOf";var Jn=Ze(),ir=ae();function ye(i,e,t,r){if(Array.isArray(e)||(t=e,e=void 0),nr.call(this,i,t),!(e===void 0||Array.isArray(e)))throw TypeError("fieldNames must be an Array");this.oneof=e||[],this.fieldsArray=[],this.comment=r}ye.fromJSON=function(e,t){return new ye(e,t.oneof,t.options,t.comment)};ye.prototype.toJSON=function(e){var t=e?!!e.keepComments:!1;return ir.toObject(["options",this.options,"oneof",this.oneof,"comment",t?this.comment:void 0])};function $n(i){if(i.parent)for(var e=0;e<i.fieldsArray.length;++e)i.fieldsArray[e].parent||i.parent.add(i.fieldsArray[e])}ye.prototype.add=function(e){if(!(e instanceof Jn))throw TypeError("field must be a Field");return e.parent&&e.parent!==this.parent&&e.parent.remove(e),this.oneof.push(e.name),this.fieldsArray.push(e),e.partOf=this,$n(this),this};ye.prototype.remove=function(e){if(!(e instanceof Jn))throw TypeError("field must be a Field");var t=this.fieldsArray.indexOf(e);if(t<0)throw Error(e+" is not a member of "+this);return this.fieldsArray.splice(t,1),t=this.oneof.indexOf(e.name),t>-1&&this.oneof.splice(t,1),e.partOf=null,this};ye.prototype.onAdd=function(e){nr.prototype.onAdd.call(this,e);for(var t=this,r=0;r<this.oneof.length;++r){var s=e.get(this.oneof[r]);s&&!s.partOf&&(s.partOf=t,t.fieldsArray.push(s))}$n(this)};ye.prototype.onRemove=function(e){for(var t=0,r;t<this.fieldsArray.length;++t)(r=this.fieldsArray[t]).parent&&r.parent.remove(r);nr.prototype.onRemove.call(this,e)};Object.defineProperty(ye.prototype,"isProto3Optional",{get:function(){if(this.fieldsArray==null||this.fieldsArray.length!==1)return!1;var i=this.fieldsArray[0];return i.options!=null&&i.options.proto3_optional===!0}});ye.d=function(){for(var e=new Array(arguments.length),t=0;t<arguments.length;)e[t]=arguments[t++];return function(s,n){ir.decorateType(s.constructor).add(new ye(n,e)),Object.defineProperty(s,n,{get:ir.oneOfGetter(e),set:ir.oneOfSetter(e)})}}});var Qe=T((Va,Hn)=>{"use strict";Hn.exports=ce;ce.className="ReflectionObject";var ho=nt(),Se=ae(),sr,co={enum_type:"CLOSED",field_presence:"EXPLICIT",json_format:"LEGACY_BEST_EFFORT",message_encoding:"LENGTH_PREFIXED",repeated_field_encoding:"EXPANDED",utf8_validation:"NONE",enforce_naming_style:"STYLE_LEGACY",default_symbol_visibility:"EXPORT_ALL"},po={enum_type:"OPEN",field_presence:"IMPLICIT",json_format:"ALLOW",message_encoding:"LENGTH_PREFIXED",repeated_field_encoding:"PACKED",utf8_validation:"VERIFY",enforce_naming_style:"STYLE_LEGACY",default_symbol_visibility:"EXPORT_ALL"},go={enum_type:"OPEN",field_presence:"EXPLICIT",json_format:"ALLOW",message_encoding:"LENGTH_PREFIXED",repeated_field_encoding:"PACKED",utf8_validation:"VERIFY",enforce_naming_style:"STYLE_LEGACY",default_symbol_visibility:"EXPORT_ALL"},mo={enum_type:"OPEN",field_presence:"EXPLICIT",json_format:"ALLOW",message_encoding:"LENGTH_PREFIXED",repeated_field_encoding:"PACKED",utf8_validation:"VERIFY",enforce_naming_style:"STYLE2024",default_symbol_visibility:"EXPORT_TOP_LEVEL"},vo={enum_type:"OPEN",field_presence:"EXPLICIT",json_format:"ALLOW",message_encoding:"LENGTH_PREFIXED",repeated_field_encoding:"PACKED",utf8_validation:"VERIFY",enforce_naming_style:"STYLE2026",default_symbol_visibility:"STRICT",enforce_proto_limits:"PROTO_LIMITS2026"};function ce(i,e){if(!Se.isString(i))throw TypeError("name must be a string");if(e&&!Se.isObject(e))throw TypeError("options must be an object");this.options=e,this.parsedOptions=null,this.name=i,this._edition=null,this._defaultEdition="proto2",this._features={},this._featuresResolved=!1,this.parent=null,this.resolved=!1,this.comment=null,this.filename=null}Object.defineProperties(ce.prototype,{root:{get:function(){for(var i=this;i.parent!==null;)i=i.parent;return i}},fullName:{get:function(){for(var i=[this.name],e=this.parent;e;)i.unshift(e.name),e=e.parent;return i.join(".")}}});ce.prototype.toJSON=function(){throw Error()};ce.prototype.onAdd=function(e){this.parent&&this.parent!==e&&this.parent.remove(this),this.parent=e,this.resolved=!1;var t=e.root;t instanceof sr&&t._handleAdd(this)};ce.prototype.onRemove=function(e){var t=e.root;t instanceof sr&&t._handleRemove(this),this.parent=null,this.resolved=!1};ce.prototype.resolve=function(){return this.resolved?this:(this.root instanceof sr&&(this.resolved=!0),this)};ce.prototype._resolveFeaturesRecursive=function(e){return this._resolveFeatures(this._edition||e)};ce.prototype._resolveFeatures=function(e){if(!this._featuresResolved){var t={};if(!e)throw new Error("Unknown edition for "+this.fullName);var r=Se.merge({},this.options&&this.options.features,this._inferLegacyProtoFeatures(e));if(this._edition){if(e==="proto2")t=Object.assign({},co);else if(e==="proto3")t=Object.assign({},po);else if(e==="2023")t=Object.assign({},go);else if(e==="2024")t=Object.assign({},mo);else if(e==="2026")t=Object.assign({},vo);else throw new Error("Unknown edition: "+e);this._features=Se.merge(t,r)}else if(this.partOf instanceof ho){var s=Se.merge({},this.partOf._features);this._features=Se.merge(s,r)}else if(!this.declaringField)if(this.parent){var n=Se.merge({},this.parent._features);this._features=Se.merge(n,r)}else throw new Error("Unable to find a parent for "+this.fullName);this.extensionField&&(this.extensionField._features=this._features),this._featuresResolved=!0}};ce.prototype._inferLegacyProtoFeatures=function(){return{}};ce.prototype.getOption=function(e){if(this.options&&Object.prototype.hasOwnProperty.call(this.options,e))return this.options[e]};ce.prototype.setOption=function(e,t,r){if(e==="__proto__")return this;if(this.options||(this.options={}),/^features\./.test(e))Se.setProperty(this.options,e,t,r);else{var s=this.getOption(e);(!r||s===void 0)&&(s!==t&&(this.resolved=!1),this.options[e]=t)}return this};ce.prototype.setParsedOption=function(e,t,r){if(e==="__proto__")return this;this.parsedOptions||(this.parsedOptions=[]);var s=this.parsedOptions;if(r){var n=s.find(function(a){return Object.prototype.hasOwnProperty.call(a,e)});if(n){var o=n[e];Se.setProperty(o,r,t)}else n={},n[e]=Se.setProperty({},r,t),s.push(n)}else{var f={};f[e]=t,s.push(f)}return this};ce.prototype.setOptions=function(e,t){if(e)for(var r=Object.keys(e),s=0;s<r.length;++s)this.setOption(r[s],e[r[s]],t);return this};Object.defineProperty(ce.prototype,"toString",{value:function(){var e=this.constructor.className,t=this.fullName;return t.length?e+" "+t:e},writable:!0,enumerable:!1,configurable:!0});ce.prototype._editionToJSON=function(){if(!(!this._edition||this._edition==="proto3"))return this._edition};ce._configure=function(i){sr=i}});var Ae=T((Ua,Zn)=>{"use strict";Zn.exports=Oe;var Yr=Qe();Oe.prototype=Object.create(Yr.prototype,{constructor:{value:Oe,writable:!0,enumerable:!1,configurable:!0}});Oe.className="Enum";var zn=pt(),_t=ae();function Oe(i,e,t,r,s,n){if(Yr.call(this,i,t),e&&typeof e!="object")throw TypeError("values must be an object");if(this.valuesById=Object.create(null),this.values=Object.create(this.valuesById),this.comment=r,this.comments=s||{},this.valuesOptions=n,this._valuesFeatures={},this.reserved=void 0,this.visibility=void 0,e)for(var o=Object.keys(e),f=0;f<o.length;++f)o[f]!=="__proto__"&&typeof e[o[f]]=="number"&&(this.values[o[f]]=e[o[f]],this.valuesById[e[o[f]]]===void 0&&(this.valuesById[e[o[f]]]=o[f]))}Oe.prototype._resolveFeatures=function(e){return e=this._edition||e,Yr.prototype._resolveFeatures.call(this,e),Object.keys(this.values).forEach(t=>{var r=_t.merge({},this._features);this._valuesFeatures[t]=_t.merge(r,this.valuesOptions&&this.valuesOptions[t]&&this.valuesOptions[t].features||{})}),this};Oe.fromJSON=function(e,t){var r=new Oe(e,t.values,t.options,t.comment,t.comments,t.valuesOptions);return r.reserved=t.reserved,t.visibility&&(r.visibility=t.visibility),t.edition&&(r._edition=t.edition),r._defaultEdition="proto3",r};Oe.prototype.toJSON=function(e){var t=e?!!e.keepComments:!1;return _t.toObject(["edition",this._editionToJSON(),"options",this.options,"valuesOptions",this.valuesOptions,"values",this.values,"reserved",this.reserved&&this.reserved.length?this.reserved:void 0,"visibility",this.visibility,"comment",t?this.comment:void 0,"comments",t?this.comments:void 0])};Oe.prototype.add=function(e,t,r,s){if(!_t.isString(e))throw TypeError("name must be a string");if(!_t.isInteger(t))throw TypeError("id must be an integer");if(e==="__proto__")return this;if(this.values[e]!==void 0)throw Error("duplicate name '"+e+"' in "+this);if(this.isReservedId(t))throw Error("id "+t+" is reserved in "+this);if(this.isReservedName(e))throw Error("name '"+e+"' is reserved in "+this);if(this.valuesById[t]!==void 0){if(!(this.options&&this.options.allow_alias))throw Error("duplicate id "+t+" in "+this);this.values[e]=t}else this.valuesById[this.values[e]=t]=e;return s&&(this.valuesOptions===void 0&&(this.valuesOptions={}),this.valuesOptions[e]=s||null),this.comments[e]=r||null,this};Oe.prototype.remove=function(e){if(!_t.isString(e))throw TypeError("name must be a string");var t=this.values[e];if(t==null)throw Error("name '"+e+"' does not exist in "+this);return delete this.valuesById[t],delete this.values[e],delete this.comments[e],this.valuesOptions&&delete this.valuesOptions[e],this};Oe.prototype.isReservedId=function(e){return zn.isReservedId(this.reserved,e)};Oe.prototype.isReservedName=function(e){return zn.isReservedName(this.reserved,e)}});var Wr=T((Ma,Xn)=>{"use strict";Xn.exports=yo;var Kr=Ae(),Ke=Xe(),ei=ae();function Qn(i,e,t,r){return e.delimited?i("types[%i].encode(%s,w.uint32(%i),q+1).uint32(%i)",t,r,(e.id<<3|3)>>>0,(e.id<<3|4)>>>0):i("types[%i].encode(%s,w.uint32(%i).fork(),q+1).ldelim()",t,r,(e.id<<3|2)>>>0)}function yo(i){for(var e=ei.codegen(["m","w","q"])("if(!w)")("w=Writer.create()")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")'),t,r,s=i.fieldsArray.slice().sort(ei.compareFieldsById),t=0;t<s.length;++t){var n=s[t].resolve(),o=i._fieldsArray.indexOf(n),f=n.resolvedType instanceof Kr?"int32":n.type,a=Ke.basic[f];r="m"+ei.safeProp(n.name),n.map?(e("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",r,n.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){",r),n.keyType==="bool"?e("w.uint32(%i).fork().uint32(%i).bool(util.boolFromKey(ks[i]))",(n.id<<3|2)>>>0,8|Ke.mapKey[n.keyType]):Ke.long[n.keyType]!==void 0?e("w.uint32(%i).fork().uint32(%i).%s(util.longFromKey(ks[i],%j))",(n.id<<3|2)>>>0,8|Ke.mapKey[n.keyType],n.keyType,n.keyType==="uint64"||n.keyType==="fixed64"):e("w.uint32(%i).fork().uint32(%i).%s(ks[i])",(n.id<<3|2)>>>0,8|Ke.mapKey[n.keyType],n.keyType),a===void 0?e("types[%i].encode(%s[ks[i]],w.uint32(18).fork(),q+1).ldelim().ldelim()",o,r):e(".uint32(%i).%s(%s[ks[i]]).ldelim()",16|a,f,r),e("}")("}")):n.repeated?(e("if(%s!=null&&%s.length){",r,r),n.packed&&Ke.packed[f]!==void 0?e("w.uint32(%i).%ss(%s)",(n.id<<3|2)>>>0,f,r):(e("for(var i=0;i<%s.length;++i)",r),a===void 0?Qn(e,n,o,r+"[i]"):e("w.uint32(%i).%s(%s[i])",(n.id<<3|a)>>>0,f,r)),e("}")):(n.required||(n.hasPresence||!(n.resolvedType instanceof Kr||Ke.basic[f]!==void 0)?e("if(%s!=null&&Object.hasOwnProperty.call(m,%j))",r,n.name):n.resolvedType instanceof Kr?e("if(%s!=null&&Object.hasOwnProperty.call(m,%j)&&%s!==%j)",r,n.name,r,n.typeDefault):f==="bool"?e("if(%s!=null&&Object.hasOwnProperty.call(m,%j)&&%s!==false)",r,n.name,r):f==="string"?e('if(%s!=null&&Object.hasOwnProperty.call(m,%j)&&%s!=="")',r,n.name,r):f==="bytes"?e("if(%s!=null&&Object.hasOwnProperty.call(m,%j)&&%s.length)",r,n.name,r):f==="double"||f==="float"?e("if(%s!=null&&Object.hasOwnProperty.call(m,%j)&&!Object.is(%s,0))",r,n.name,r):Ke.long[f]!==void 0?e('if(%s!=null&&Object.hasOwnProperty.call(m,%j)&&(typeof %s==="object"?%s.low||%s.high:%s!==0))',r,n.name,r,r,r,r):e("if(%s!=null&&Object.hasOwnProperty.call(m,%j)&&%s!==0)",r,n.name,r)),a===void 0?Qn(e,n,o,r):e("w.uint32(%i).%s(%s)",(n.id<<3|a)>>>0,f,r))}return e('if(m.$unknowns!=null&&Object.hasOwnProperty.call(m,"$unknowns"))')("for(var i=0;i<m.$unknowns.length;++i)")("w.raw(m.$unknowns[i])")("return w")}});var Kn=T((P,Yn)=>{"use strict";P=Yn.exports=on();P.build="light";function _o(i,e,t){return typeof e=="function"?(t=e,e=new P.Root):e||(e=new P.Root),e.load(i,t)}P.load=_o;function bo(i,e){return e||(e=new P.Root),e.loadSync(i)}P.loadSync=bo;P.encoder=Wr();P.decoder=Fr();P.verifier=kr();P.converter=Ur();P.ReflectionObject=Qe();P.Namespace=pt();P.Root=tr();P.Enum=Ae();P.Type=Xt();P.Field=Ze();P.OneOf=nt();P.MapField=Mt();P.Service=$t();P.Method=Gt();P.Message=Wt();P.wrappers=Mr();P.types=Xe();P.util=ae();P.ReflectionObject._configure(P.Root);P.Namespace._configure(P.Type,P.Service,P.Enum);P.Root._configure(P.Type,void 0,{});P.Field._configure(P.Type)});var ri=T((Ga,rs)=>{"use strict";rs.exports=ts;var ti=/[\s{}=;:[\],'"()<>]/g,wo=/(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,Oo=/(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,Eo=/^ *[*/]+ */,No=/^\s*\*?\/*/,Ao=/\n/g,Ro=/\s/,So=/\\(.?)/g,To={0:"\0",r:"\r",n:`
`,t:"	"};function es(i){return i.replace(So,function(e,t){switch(t){case"\\":case"":return t;default:return To[t]||""}})}ts.unescape=es;function ts(i,e){i=i.toString();var t=0,r=i.length,s=1,n=0,o={},f=[],a=null;function l(y){return Error("illegal "+y+" (line "+s+")")}function m(){var y=a==="'"?Oo:wo;y.lastIndex=t-1;var j=y.exec(i);if(!j)throw l("string");return t=y.lastIndex,B(a),a=null,es(j[1])}function w(y){return i.charAt(y)}function N(y,j,V){var W={type:i.charAt(y++),lineEmpty:!1,leading:V},de;e?de=2:de=3;var be=y-de,U;do if(--be<0||(U=i.charAt(be))===`
`){W.lineEmpty=!0;break}while(U===" "||U==="	");for(var p=i.substring(y,j).split(Ao),ke=0;ke<p.length;++ke)p[ke]=p[ke].replace(e?No:Eo,"").trim();W.text=p.join(`
`).trim(),o[s]=W,n=s}function R(y){var j=S(y),V=i.substring(y,j),W=/^\s*\/\//.test(V);return W}function S(y){for(var j=y;j<r&&w(j)!==`
`;)j++;return j}function I(){if(f.length>0)return f.shift();if(a)return m();var y,j,V,W,de,be,U=t===0;do{if(t===r)return null;for(y=!1;Ro.test(V=w(t));)if(V===`
`&&(U=!0,++s),++t===r)return null;if(w(t)==="/"){if(++t===r)throw l("comment");if(w(t)==="/")if(e){if(W=t,de=!1,R(t-1)){de=!0;do{if(t=S(t),t===r||(t++,!U))break;be=R(t),be&&s++}while(be)}else t=Math.min(r,S(t)+1);de&&(N(W,t,U),U=!0),s++,y=!0}else{for(de=w(W=t+1)==="/";w(++t)!==`
`;)if(t===r)return null;++t,de&&(N(W,t-1,U),U=!0),++s,y=!0}else if((V=w(t))==="*"){W=t+1,de=e||w(W)==="*";do{if(V===`
`&&++s,++t===r)throw l("comment");j=V,V=w(t)}while(j!=="*"||V!=="/");++t,de&&(N(W,t-2,U),U=!0),y=!0}else return"/"}}while(y);var p=t;ti.lastIndex=0;var ke=ti.test(w(p++));if(!ke)for(;p<r&&!ti.test(w(p));)++p;var d=i.substring(t,t=p);return(d==='"'||d==="'")&&(a=d),d}function B(y){f.push(y)}function K(){if(!f.length){var y=I();if(y===null)return null;B(y)}return f[0]}function ee(y,j){var V=K(),W=V===y;if(W)return I(),!0;if(!j)throw l("token '"+V+"', '"+y+"' expected");return!1}function ue(y){var j=null,V;return y===void 0?(V=o[s-1],delete o[s-1],V&&(e||V.type==="*"||V.lineEmpty)&&(j=V.leading?V.text:null)):(n<y&&K(),V=o[y],delete o[y],V&&!V.lineEmpty&&(e||V.type==="/")&&(j=V.leading?null:V.text)),j}return Object.defineProperty({next:I,peek:K,push:B,skip:ee,cmnt:ue},"line",{get:function(){return s}})}});var as=T((Ja,os)=>{"use strict";os.exports=Me;Me.filename=null;Me.defaults={keepCase:!1};var Lo=ri(),is=tr(),ns=Xt(),or=Ze(),Io=Mt(),ss=nt(),xo=Ae(),Do=$t(),qo=Gt(),Fo=Qe(),Co=Xe(),Ue=ae(),Po=/^[1-9][0-9]*$/,ko=/^-?[1-9][0-9]*$/,Bo=/^0[x][0-9a-fA-F]+$/,jo=/^-?0[x][0-9a-fA-F]+$/,Vo=/^0[0-7]+$/,Uo=/^-?0[0-7]+$/,Mo=/^(?:u?int|sint|s?fixed)(?:32|64)$/,Go=/^(?:uint|fixed)(?:32|64)$/,Jo=Ue.patterns.numberRe,Ce=/^[a-zA-Z_][a-zA-Z_0-9]*$/,Te=Ue.patterns.typeRefRe,$o=536870911,Wo=2147483647;function Me(i,e,t){e instanceof is||(t=e,e=new is),t||(t=Me.defaults);var r=t.preferTrailingComment||!1,s=Lo(i,t.alternateCommentMode||!1),n=s.next,o=s.push,f=s.peek,a=s.skip,l=s.cmnt,m=!0,w,N,R,S="proto2",I=e,B=[],K={},ee=t.keepCase?function(c){return c}:Ue.camelCase;function ue(){B.forEach(c=>{c._edition=S,Object.keys(K).forEach(h=>{c.getOption(h)===void 0&&c.setOption(h,K[h],!0)})})}function y(c,h,g){var v=Me.filename;return g||(Me.filename=null),Error("illegal "+(h||"token")+" '"+c+"' ("+(v?v+", ":"")+"line "+s.line+")")}function j(){var c=[],h;do{if((h=n())!=='"'&&h!=="'")throw y(h);c.push(n()),a(h),h=f()}while(h==='"'||h==="'");return c.join("")}function V(c){var h=n();switch(h){case"'":case'"':return o(h),j();case"true":case"TRUE":return!0;case"false":case"FALSE":return!1}try{return de(h,!0)}catch{if(c&&Te.test(h))return h;throw y(h,"value")}}function W(c,h,g,v){var b,A;do if(h&&((b=f())==='"'||b==="'")){var C=j();if(c.push(C),S>=2023)throw y(C,"id")}else try{c.push([A=U(n(),v,g),a("to",!0)?U(n(),v,g):A])}catch(J){if(h&&Te.test(b)&&S>=2023)c.push(b);else throw J}while(a(",",!0));var F={options:void 0};F.setOption=function(J,he){this.options===void 0&&(this.options={}),this.options[J]=he},L(F,function(he){if(he==="option")H(F,he),a(";");else throw y(he)},function(){xt(F)})}function de(c,h){var g=1;switch(c.charAt(0)==="-"&&(g=-1,c=c.substring(1)),c){case"inf":case"INF":case"Inf":return g*(1/0);case"nan":case"NAN":case"Nan":case"NaN":return NaN;case"0":return g*0}if(Po.test(c))return g*parseInt(c,10);if(Bo.test(c))return g*parseInt(c,16);if(Vo.test(c))return g*parseInt(c,8);if(Jo.test(c))return g*parseFloat(c);throw y(c,"number",h)}function be(c,h,g){if(c===null)throw y(c,"end of input");if(!h&&c.charAt(0)==="-")throw y(c,g||"integer");if(c==="0"||c==="-0")return 0;var v;if(ko.test(c))v=parseInt(c,10);else if(jo.test(c))v=parseInt(c,16);else if(Uo.test(c))v=parseInt(c,8);else throw y(c,g||"integer");return v||0}function U(c,h,g){switch(c){case"max":case"MAX":case"Max":return g||$o}return be(c,h,"id")}function p(){if(w!==void 0)throw y("package");if(w=n(),w===null||!Te.test(w))throw y(w,"name");I=I.define(w),a(";")}function ke(){var c=f(),h;switch(c){case"option":if(S<"2024")throw y("option");n(),j(),a(";");return;case"weak":h=R||(R=[]),n();break;case"public":n();default:h=N||(N=[]);break}c=j(),a(";"),h.push(c)}function d(){if(a("="),S=j(),S<2023)throw y(S,"syntax");a(";")}function u(){if(a("="),S=j(),!["2023","2024","2026"].includes(S))throw y(S,"edition");a(";")}function _(c,h,g){switch(g===void 0&&(g=0),h){case"option":return H(c,h),a(";"),!0;case"message":return M(c,h,g+1),!0;case"enum":return te(c,h),!0;case"export":case"local":if(S<"2024")return!1;var v=h;return h=n(),h==="export"||h==="local"||h!=="message"&&h!=="enum"?!1:((h==="message"?M(c,h,g+1):te(c,h)).visibility=v,!0);case"service":return vs(c,h,g+1),!0;case"extend":return _s(c,h,g),!0}return!1}function L(c,h,g){var v=s.line;if(c&&(typeof c.comment!="string"&&(c.comment=l()),c.filename=Me.filename),a("{",!0)){for(var b;(b=n())!=="}";)h(b);a(";",!0)}else g&&g(),a(";"),c&&(typeof c.comment!="string"||r)&&(c.comment=l(v)||c.comment)}function M(c,h,g){if(g===void 0&&(g=0),g>Ue.nestingLimit)throw Error("max depth exceeded");if((h=n())===null||!Ce.test(h))throw y(h,"type name");var v=new ns(h);return L(v,function(A){if(!_(v,A,g))switch(A){case";":break;case"map":fe(v,A);break;case"required":if(S!=="proto2")throw y(A);case"repeated":D(v,A,void 0,g+1);break;case"optional":if(S==="proto3")D(v,"proto3_optional",void 0,g+1);else{if(S!=="proto2")throw y(A);D(v,"optional",void 0,g+1)}break;case"oneof":ge(v,A,g+1);break;case"extensions":W(v.extensions||(v.extensions=[]));break;case"reserved":W(v.reserved||(v.reserved=[]),!0);break;default:if(S==="proto2"||!Te.test(A))throw y(A);o(A),D(v,"optional",void 0,g+1);break}}),c.add(v),c===I&&B.push(v),v}function D(c,h,g,v){var b=n();if(b===null)throw y(b,"end of input");if(b==="group"){Y(c,h,g,v);return}for(;b.endsWith(".")||(f()||"").startsWith(".");){var A=n();if(A===null)throw y(A,"end of input");b+=A}if(!Te.test(b))throw y(b,"type");var C=n();if(C===null)throw y(C,"end of input");if(!Ce.test(C))throw y(C,"name");var F=C;C=ee(C),a("=");var J=new or(C,U(n()),b,h==="proto3_optional"?"optional":h,g);if(F!==C&&(J.protoName=F),L(J,function(Ge){if(Ge==="option")H(J,Ge),a(";");else throw y(Ge)},function(){xt(J)}),h==="proto3_optional"){var he=new ss("_"+C);J.setOption("proto3_optional",!0),he.add(J),c.add(he)}else c.add(J);c===I&&B.push(J)}function Y(c,h,g,v){if(v===void 0&&(v=0),v>Ue.nestingLimit)throw Error("max depth exceeded");if(S>=2023)throw y("group");var b=n();if(b===null||!Ce.test(b))throw y(b,"name");var A=Ue.lcFirst(b);b===A&&(b=Ue.ucFirst(b)),a("=");var C=U(n()),F=new ns(b);F.group=!0;var J=new or(A,C,b,h,g);J.filename=Me.filename,L(F,function(oe){switch(oe){case";":break;case"map":fe(F);break;case"option":H(F,oe),a(";");break;case"required":case"repeated":D(F,oe,void 0,v+1);break;case"optional":S==="proto3"?D(F,"proto3_optional",void 0,v+1):D(F,"optional",void 0,v+1);break;case"message":M(F,oe,v+1);break;case"enum":te(F,oe);break;case"reserved":W(F.reserved||(F.reserved=[]),!0);break;case"export":case"local":if(S<"2024")throw y(oe);switch(oe=n(),oe){case"message":M(F,oe,v+1);break;case"enum":M(F,oe,v+1);break;default:throw y(oe)}break;default:throw y(oe)}}),c.add(F).add(J),c===I&&(B.push(F),B.push(J))}function fe(c){a("<");var h=n();if(Co.mapKey[h]===void 0)throw y(h,"type");a(",");var g=n();if(!Te.test(g))throw y(g,"type");a(">");var v=n();if(v===null||!Ce.test(v))throw y(v,"name");a("=");var b=v;v=ee(v);var A=new Io(v,U(n()),h,g);b!==v&&(A.protoName=b),L(A,function(F){if(F==="option")H(A,F),a(";");else throw y(F)},function(){xt(A)}),c.add(A)}function ge(c,h,g){if((h=n())===null||!Ce.test(h))throw y(h,"name");var v=new ss(ee(h));L(v,function(A){A==="option"?(H(v,A),a(";")):(o(A),D(v,"optional",void 0,g))}),c.add(v)}function te(c,h){if((h=n())===null||!Ce.test(h))throw y(h,"name");var g=new xo(h),v=[];L(g,function(C){switch(C){case";":break;case"option":H(g,C),a(";");break;case"reserved":W(g.reserved||(g.reserved=[]),!0,Wo,!0),g.reserved===void 0&&(g.reserved=[]);break;default:v.push(Q(C))}});for(var b=0;b<v.length;++b)g.add(v[b].name,v[b].id,v[b].comment,v[b].options);return c.add(g),c===I&&B.push(g),g}function Q(c){if(!Ce.test(c))throw y(c,"name");a("=");var h=U(n(),!0),g={options:void 0};return g.getOption=function(v){return this.options[v]},g.setOption=function(v,b){Fo.prototype.setOption.call(g,v,b)},g.setParsedOption=function(){},L(g,function(b){if(b==="option")H(g,b),a(";");else throw y(b)},function(){xt(g)}),{name:c,id:h,comment:g.comment,options:g.parsedOptions||g.options}}function H(c,h){var g,v,b=!0;for(h==="option"&&(h=n());h!=="=";){if(h===null)throw y(h,"end of input");if(h==="("){var A=n();a(")"),h="("+A+")"}if(b){if(b=!1,h.includes(".")&&!h.includes("(")){var C=h.split(".");g=C[0]+".",h=C[1];continue}g=h}else v=v?v+=h:h;h=n()}var F=v?g.concat(v):g,J=X(c,F);v=v&&v[0]==="."?v.slice(1):v,g=g&&g[g.length-1]==="."?g.slice(0,-1):g,ot(c,g,J,v)}function X(c,h,g){if(g===void 0&&(g=0),g>Ue.recursionLimit)throw Error("max depth exceeded");if(a("{",!0)){for(var v={};!a("}",!0);){z=n();var b;if(z===null)throw y(z,"end of input");if(z==="["){z=n();var A=z===null?-1:z.lastIndexOf("/");if(z===null||!Te.test(A<0?z:z.slice(A+1)))throw y(z,"name");b="["+z+"]",a("]")}else{if(!Ce.test(z))throw y(z,"name");b=z}var C;if(a(":",!0),f()==="{")C=X(c,h+"."+b,g+1);else if(f()==="["){C=[];var F,J;if(a("[",!0)&&!a("]",!0)){do J=f()==="{",F=J?X(c,h+"."+b,g+1):V(!0),C.push(F);while(a(",",!0));a("]"),typeof F!="undefined"&&(J||le(c,h+"."+b,F))}}else C=V(!0),le(c,h+"."+b,C);var he=Object.prototype.hasOwnProperty.call(v,b)?v[b]:void 0;he&&(C=[].concat(he).concat(C)),b!=="__proto__"&&(v[b]=C),a(",",!0),a(";",!0)}return v}var oe=h==="default"&&c instanceof or&&Mo.test(c.type)?be(n(),!Go.test(c.type)):V(!0);return le(c,h,oe),oe}function le(c,h,g){if(I===c&&/^features\./.test(h)){K[h]=g;return}h==="json_name"&&c instanceof or&&(c.jsonName=g),c.setOption&&c.setOption(h,g)}function ot(c,h,g,v){c.setParsedOption&&c.setParsedOption(h,g,v)}function xt(c){if(a("[",!0)){do H(c,"option");while(a(",",!0));a("]")}return c}function vs(c,h,g){if(g===void 0&&(g=0),g>Ue.recursionLimit)throw Error("max depth exceeded");if((h=n())===null||!Ce.test(h))throw y(h,"service name");var v=new Do(h);L(v,function(A){if(!_(v,A,g)&&A!==";")if(A==="rpc")ys(v,A);else throw y(A)}),c.add(v),c===I&&B.push(v)}function ys(c,h){var g=l(),v=h;if(!Ce.test(h=n()))throw y(h,"name");var b=h,A,C,F,J;if(a("("),a("stream",!0)&&(C=!0),!Te.test(h=n())||(A=h,a(")"),a("returns"),a("("),a("stream",!0)&&(J=!0),!Te.test(h=n())))throw y(h);F=h,a(")");var he=new qo(b,v,A,F,C,J);he.comment=g,L(he,function(Ge){if(Ge!==";")if(Ge==="option")H(he,Ge),a(";");else throw y(Ge)}),c.add(he)}function _s(c,h,g){if((h=n())===null||!Te.test(h))throw y(h,"reference");var v=h;L(null,function(A){switch(A){case"required":case"repeated":D(c,A,v,g+1);break;case"optional":S==="proto3"?D(c,"proto3_optional",v,g+1):D(c,"optional",v,g+1);break;default:if(S==="proto2"||!Te.test(A))throw y(A);o(A),D(c,"optional",v,g+1);break}})}for(var z;(z=n())!==null;)switch(z){case";":break;case"package":if(!m)throw y(z);p();break;case"import":ke();break;case"syntax":if(!m)throw y(z);d();break;case"edition":if(!m)throw y(z);u();break;case"option":H(I,z),a(";",!0);break;default:if(_(I,z,0)){m=!1;continue}throw y(z)}return ue(),Me.filename=null,{package:w,imports:N,weakImports:R,root:e}}});var ls=T(($a,fs)=>{"use strict";fs.exports=Le;var Ho=/\/|\./;function Le(i,e){Ho.test(i)||(i="google/protobuf/"+i+".proto",e={nested:{google:{nested:{protobuf:{nested:e}}}}}),Le[i]=e}Le("any",{Any:{fields:{type_url:{type:"string",id:1},value:{type:"bytes",id:2}}}});var us;Le("duration",{Duration:us={fields:{seconds:{type:"int64",id:1},nanos:{type:"int32",id:2}}}});Le("timestamp",{Timestamp:us});Le("empty",{Empty:{fields:{}}});Le("struct",{Struct:{fields:{fields:{keyType:"string",type:"Value",id:1}}},Value:{oneofs:{kind:{oneof:["nullValue","numberValue","stringValue","boolValue","structValue","listValue"]}},fields:{nullValue:{type:"NullValue",id:1,protoName:"null_value"},numberValue:{type:"double",id:2,protoName:"number_value"},stringValue:{type:"string",id:3,protoName:"string_value"},boolValue:{type:"bool",id:4,protoName:"bool_value"},structValue:{type:"Struct",id:5,protoName:"struct_value"},listValue:{type:"ListValue",id:6,protoName:"list_value"}}},NullValue:{values:{NULL_VALUE:0}},ListValue:{fields:{values:{rule:"repeated",type:"Value",id:1}}}});Le("wrappers",{DoubleValue:{fields:{value:{type:"double",id:1}}},FloatValue:{fields:{value:{type:"float",id:1}}},Int64Value:{fields:{value:{type:"int64",id:1}}},UInt64Value:{fields:{value:{type:"uint64",id:1}}},Int32Value:{fields:{value:{type:"int32",id:1}}},UInt32Value:{fields:{value:{type:"uint32",id:1}}},BoolValue:{fields:{value:{type:"bool",id:1}}},StringValue:{fields:{value:{type:"string",id:1}}},BytesValue:{fields:{value:{type:"bytes",id:1}}}});Le("field_mask",{FieldMask:{fields:{paths:{rule:"repeated",type:"string",id:1}}}});Le.get=function(e){return Le[e]||null}});var cs=T((Pe,hs)=>{"use strict";Pe=hs.exports=Kn();Pe.build="full";Pe.tokenize=ri();Pe.parse=as();Pe.common=ls();Pe.Root._configure(Pe.Type,Pe.parse,Pe.common)});var ps=T((Wa,ds)=>{"use strict";ds.exports=cs()});var ui=`syntax = "proto3";

package COD.Level;

// level.proto

message Level {
  uint32 formatVersion = 1;
  string title = 2;
  string creators = 3;
  string description = 4;
  repeated string tags = 9;
  uint32 maxCheckpointCount = 7;
  uint64 defaultSpawnPointID = 10;
  uint32 complexity = 5;

  AmbienceSettings ambienceSettings = 8;

  repeated LevelNode levelNodes = 6;

  bool unlisted = 11;
  bool showReplays = 12;
  bool disablePracticeMode = 13;
}

// types.proto

message Vector {
  float x = 1;
  float y = 2;
  float z = 3;
}

message Vector2 {
  float x = 1;
  float y = 2;
}

message Quaternion {
  float x = 1;
  float y = 2;
  float z = 3;
  float w = 4;
}

message Color {
  float r = 1;
  float g = 2;
  float b = 3;
  float a = 4;
}

message AmbienceSettings {
  Color skyZenithColor = 1;
  Color skyHorizonColor = 2;

  float sunAltitude = 3;
  float sunAzimuth = 4;
  float sunSize = 5;

  float fogDensity = 6;

  optional bool useAdvancedSunSettings = 7;
  Color sunColor = 8;
  optional float sunBrightness = 9;

  Color ambientColor = 10;
  optional float ambientBrightness = 11;
}

enum LevelNodeShape {
  START = 0;
  FINISH = 1;
  SIGN = 2;
  GRAVITY = 3;
  LOBBYTERMINAL = 4;
  PARTICLE_EMITTER = 5;
  SOUND = 6;
  GASM = 7;
  LIGHT = 8;

  __END_OF_SPECIAL_PARTS__ = 9;

  CUBE = 1000;
  SPHERE = 1001;
  CYLINDER = 1002;
  PYRAMID = 1003;
  PRISM = 1004;
  CONE = 1005;
  PYRAMIDSQUARE = 1006;

  // modded shapes
}

enum LevelNodeMaterial {
  DEFAULT = 0;
  GRABBABLE = 1;
  ICE = 2;
  LAVA = 3;
  WOOD = 4;
  GRAPPLABLE = 5;
  GRAPPLABLE_LAVA = 6;

  GRABBABLE_CRUMBLING = 7;
  DEFAULT_COLORED = 8;
  BOUNCING = 9;
  SNOW = 10;

  TRIGGER = 11;

  // modded materials
}

enum InterpolationType {
  LINEAR = 0;
  QUADRATIC_EASE_IN = 1;
  QUADRATIC_EASE_OUT = 2;
  QUADRATIC_EASE_IN_OUT = 3;
  SINUSOIDAL_EASE_IN = 4;
  SINUSOIDAL_EASE_OUT = 5;
  SINUSOIDAL_EASE_IN_OUT = 6;
  EXPONENTIAL_EASE_IN = 7;
  EXPONENTIAL_EASE_OUT = 8;
  EXPONENTIAL_EASE_IN_OUT = 9;
  CIRCULAR_EASE_IN = 10;
  CIRCULAR_EASE_OUT = 11;
  CIRCULAR_EASE_IN_OUT = 12;
  CUBIC_EASE_IN = 13;
  CUBIC_EASE_OUT = 14;
  CUBIC_EASE_IN_OUT = 15;
  QUARTIC_EASE_IN = 16;
  QUARTIC_EASE_OUT = 17;
  QUARTIC_EASE_IN_OUT = 18;
  QUINTIC_EASE_IN = 19;
  QUINTIC_EASE_OUT = 20;
  QUINTIC_EASE_IN_OUT = 21;
}

message LevelNodeGroup {
  Vector position = 1;
  Vector scale = 2;
  Quaternion rotation = 3;

  repeated LevelNode childNodes = 4;

  string name = 5;
  bool physicsObject = 6;
  bool localPhysicsObject = 7;
  float mass = 8;
}

message LevelNodeStart {
  Vector position = 1;
  Quaternion rotation = 2;
  float radius = 3;
  string name = 4;
  bool isHidden = 5;
}

message LevelNodeFinish {
  Vector position = 1;
  float radius = 2;
}

message LevelNodeStatic {
  LevelNodeShape shape = 1;
  LevelNodeMaterial material = 2;

  Vector position = 3;
  Vector scale = 4;
  Quaternion rotation = 5;

  Color color1 = 6;
  Color color2 = 9;
  Vector gradientDirection = 14;

  optional float specularBrightness = 15;

  bool isNeon = 7;
  bool isTransparent = 8;
  bool isGradient = 13;
  bool isAdditive = 16;

  bool isGrabbable = 10;
  bool isGrapplable = 11;
  bool isPassable = 12;
}

message LevelNodeCrumbling {
  LevelNodeShape shape = 1;
  LevelNodeMaterial material = 2;

  Vector position = 3;
  Vector scale = 4;
  Quaternion rotation = 5;

  float stableTime = 6;
  float respawnTime = 7;

  bool isLocal = 8;
}

message LevelNodeSign {
  enum SignFontWeight {
    REGULAR = 0;
    LIGHT = 1;
    SEMIBOLD = 2;
    BOLD = 3;
    ITALIC = 4;
  }

  Vector position = 1;
  Quaternion rotation = 2;
  float scale = 4;

  string text = 3;
  Color color = 5;
  SignFontWeight weight = 7;
  bool hideModel = 6;
  optional bool isNeon = 8;
}

message LevelNodeGravity {
  enum Mode {
    DEFAULT = 0;
    NOLEGS = 1;
  }

  Mode mode = 1;

  Vector position = 2;
  Vector scale = 3;
  Quaternion rotation = 4;

  Vector direction = 5;
}

message LevelNodeLobbyTerminal {
  Vector position = 2;
  Quaternion rotation = 4;
}

message LevelNodeParticleEmitter {
  Vector position = 1;
  Vector scale = 2;
  Quaternion rotation = 3;

  uint32 particlesPerSecond = 5;

  Vector2 lifeSpan = 6;
  Color startColor = 7;
  Color endColor = 8;
  Vector2 startSize = 9;
  Vector2 endSize = 10;

  Vector velocity = 14;
  Vector velocityMin = 15;
  Vector velocityMax = 16;
  Vector accelerationMin = 17;
  Vector accelerationMax = 18;
}

message TriggerSourceBasic {
  enum Type {
    HAND = 0;
    HEAD = 1;
    GRAPPLE = 2;
    FEET = 3;
    BLOCK = 4;
    SPAWN = 5;
  }

  Type type = 1;
}

message TriggerSourceBlockNames {
  repeated string names = 1;
}

message TriggerSource {
  oneof content {
    TriggerSourceBasic triggerSourceBasic = 1;
    TriggerSourceBlockNames triggerSourceBlockNames = 2;
  }
}

message TriggerTargetAnimation {
  enum Mode {
    STOP = 0;
    START = 1;
    TOGGLE = 2;
    TOGGLE_REVERSE = 3;
    RESTART = 4;
    RESET = 5;
  }

  uint64 objectID = 1;
  string animationName = 2;

  bool loop = 3;
  bool reverse = 4;

  Mode mode = 10;
}

message TriggerTargetSound {
  enum Mode {
    STOP = 0;
    START = 1;
    TOGGLE = 2;
    RESTART = 3;
    RESET = 4;
  }

  uint64 objectID = 1;

  Mode mode = 2;
  bool repeat = 3;
}

message TriggerTargetGASM {
  enum Mode {
    STOP = 0;
    START = 1;
    TOGGLE = 2;
    RESTART = 3;
    RESET = 4;
  }

  uint64 objectID = 1;

  Mode mode = 2;
}

message TriggerTargetLight {
  uint64 objectID = 1;
  Color color = 2;
  float range = 3;
  float brightness = 4;
  float fadeDuration = 5;
}

message TriggerTargetSubLevel {
  string levelIdentifier = 1;
  string spawnPoint = 2;
}

message TriggerTargetAmbience {
  Color skyColor0 = 1;
  Color skyColor1 = 2;

  float sunAltitude = 3;
  float sunAzimuth = 4;
  float sunSize = 5;

  float fogDensity = 6;

  float changeDuration = 7;
  InterpolationType interpolationType = 8;

  optional bool useAdvancedSunSettings = 9;
  Color sunColor = 10;
  optional float sunBrightness = 11;

  Color ambientColor = 12;
  optional float ambientBrightness = 13;
}

message TriggerTarget {
  enum Mode {
    ONENTER = 0;
    ONLEAVE = 1;
    ONENTERONLEAVE = 2;
    NONE = 3;
  }

  Mode mode = 4;

  oneof content {
    TriggerTargetAnimation triggerTargetAnimation = 1;
    TriggerTargetSubLevel triggerTargetSubLevel = 2;
    TriggerTargetSound triggerTargetSound = 3;
    TriggerTargetAmbience triggerTargetAmbience = 6;
    TriggerTargetGASM triggerTargetGASM = 7;
    TriggerTargetLight triggerTargetLight = 8;
  }
}

message LevelNodeTrigger {
  LevelNodeShape shape = 1;

  Vector position = 2;
  Vector scale = 3;
  Quaternion rotation = 4;

  bool isShared = 5;

  repeated TriggerSource triggerSources = 6;
  repeated TriggerTarget triggerTargets = 7;
}

message SoundGeneratorParameters {
  enum WaveType {
    Square = 0;
    Sawtooth = 1;
    Sine = 2;
    Noise = 3;
  }

  float volume = 1;

  WaveType waveType = 2;

  float envelopeAttack = 3;
  float envelopeSustain = 4;
  float envelopeRelease = 5;
  float envelopePunch = 6;

  float frequencyBase = 7;
  float frequencyLimit = 8;
  float frequencyRamp = 9;
  float frequencyDeltaRamp = 10;

  float vibratoStrength = 11;
  float vibratoSpeed = 12;

  float pitchJumpMod = 13;
  float pitchJumpSpeed = 14;

  float dutyCycle = 15;
  float dutyCycleRamp = 16;

  float repeatSpeed = 17;

  float flangerFrequency = 18;
  float flangerDepth = 19;

  float lowPassFilterFrequency = 20;
  float highPassFilterFrequency = 21;

  float reverbDelay = 22;
  float reverbDecayFactor = 23;
}

message LevelNodeSound {
  Vector position = 1;
  Quaternion rotation = 7;

  SoundGeneratorParameters parameters = 2;
  string name = 3;
  bool repeat = 4;
  float volume = 5;
  bool startActive = 6;
  float maxRangeFactor = 8;
}

message LevelNodeGASM {
  message Connection {
    enum Type {
      NODE = 0;
      PLAYER = 1;
      LOBBY = 2;
    }

    Type type = 4;
    uint64 objectID = 1;
    string name = 2;
    repeated ProgrammablePropertyData properties = 3;
  }

  Vector position = 1;
  Vector scale = 5;
  Quaternion rotation = 6;

  ProgramData program = 2;

  repeated Connection connections = 3;

  bool startActive = 4;
  bool isShared = 7;
  bool lateUpdate = 8;
}

message LevelNodeLight {
  enum Type {
    POINT = 0;
    SPOT = 1;
  }

  Vector position = 1;
  Quaternion rotation = 2;

  Type type = 3;
  Color color = 4;
  float intensity = 5;
  float range = 6;
  float angle = 7;
  optional float distanceFalloffShape = 8;
  optional float coneFalloffShape = 9;
}

message AnimationFrame {
  float time = 1;
  Vector position = 2;
  Quaternion rotation = 3;
}

message Animation {
  enum Direction {
    RESTART = 0;
    PINGPONG = 1;
  }

  enum Interpolation {
    LINEAR = 0;
    CATMULL_ROM = 1;
  }

  string name = 1;
  repeated AnimationFrame frames = 2;
  Direction direction = 3;
  float speed = 4;
  Interpolation interpolation = 5;
}

message LevelNode {
  bool isLocked = 6;

  oneof content {
    LevelNodeStart levelNodeStart = 1;
    LevelNodeFinish levelNodeFinish = 2;
    LevelNodeStatic levelNodeStatic = 3;
    LevelNodeSign levelNodeSign = 4;
    LevelNodeCrumbling levelNodeCrumbling = 5;
    LevelNodeGroup levelNodeGroup = 7;
    LevelNodeGravity levelNodeGravity = 8;
    LevelNodeLobbyTerminal levelNodeLobbyTerminal = 9;
    LevelNodeTrigger levelNodeTrigger = 10;
    LevelNodeParticleEmitter levelNodeParticleEmitter = 11;
    LevelNodeSound levelNodeSound = 12;
    LevelNodeGASM levelNodeGASM = 13;
    LevelNodeLight levelNodeLight = 14;
  }

  repeated Animation animations = 15;
  int32 activeAnimation = 16;
}

// MARK: gasm.proto

message OperandData {
  enum Type {
    OpInputRegister = 0;
    OpOutputRegister = 1;
    OpWorkingRegister = 2;
    OpSpecialRegister = 3;
    OpConstant = 4;
    OpLabel = 5;
    OpJumpAddress = 6;
    OpInOutRegister = 7;
  }
  Type type = 1;
  oneof content {
    uint32 index = 2;
    float value = 3;
  }
}

message InstructionData {
  enum Type {
    InNoop = 0;
    InSet = 1;
    InSwap = 2;
    InAdd = 3;
    InSub = 4;
    InMul = 5;
    InDiv = 6;
    InEqual = 7;
    InLess = 8;
    InGreater = 9;
    InAnd = 10;
    InOr = 11;
    InNot = 12;
    InLabel = 13;
    InGoto = 14;
    InIf = 15;
    InSleep = 16;
    InEnd = 17;
    InRand = 18;
    InFloor = 19;
    InMod = 20;
    InSin = 21;
    InCos = 22;
    InSqrt = 23;
    InAtan2 = 24;
    InPow = 25;
    InAbs = 26;
    InVecSet = 27;
    InVecAdd = 28;
    InVecSub = 29;
    InVecMul = 30;
    InVecScl = 31;
    InVecLen = 32;
    InVecDot = 33;
  }
  Type type = 1;
  repeated OperandData operands = 2;
}

message RegisterData {
  string name = 1;
}

message LabelData {
  string name = 1;
}

message ProgramData {
  repeated RegisterData inputRegisters = 1;
  repeated RegisterData outputRegisters = 2;
  repeated RegisterData workingRegisters = 3;
  repeated RegisterData inoutRegisters = 6;

  repeated LabelData labels = 4;

  repeated InstructionData instructions = 5;
}

message ProgrammablePositionData {}

message ProgrammableRotationData {}

message ProgrammableScaleData {}

message ProgrammableTriggerActive {}

message ProgrammablePlayerData {}

message ProgrammableSignData {}

message ProgrammableColorData {}

message ProgrammablePhysicsData {}

message ProgrammableLightData {}

message ProgrammablePlayerVariablesData {}

message ProgrammableLobbyVariablesData {}

message ProgrammablePropertyData {
  message Component {
    int32 inputRegisterIndex = 1;
    int32 outputRegisterIndex = 2;
    int32 inoutRegisterIndex = 3;
  }

  uint64 objectID = 1;
  repeated Component components = 2;

  oneof content {
    ProgrammablePositionData position = 3;
    ProgrammableTriggerActive triggerActive = 4;
    ProgrammableRotationData rotation = 5;
    ProgrammablePlayerData player = 6;
    ProgrammableSignData sign = 7;
    ProgrammableColorData color = 8;
    ProgrammableScaleData scale = 9;
    ProgrammablePhysicsData physics = 10;
    ProgrammableLightData light = 11;
    ProgrammablePlayerVariablesData playerVariables = 12;
    ProgrammableLobbyVariablesData lobbyVariables = 13;
  }
}
`;var ar=Rs(ps(),1),st=ui,za=ar.default.parse(st).root;st=Zo(st);zo(st);function ur(){var i;return(i=window._root)!=null?i:window._root=ar.default.parse(st).root}function zo(i){st=i,window._root=ar.default.parse(st).root}function Zo(i){let e=ur(),t="",r="",s=Object.values(e.COD.Level.LevelNodeMaterial),n=Object.values(e.COD.Level.LevelNodeShape);for(let o=-2e3;o<2e3;o++)s.includes(o)||(r+=`_M${o}=${o};`.replace("-","N")),n.includes(o)||(t+=`_S${o}=${o};`.replace("-","N"));return i=i.replace("// modded materials",`// modded materials
  ${r}`),i=i.replace("// modded shapes",`// modded shapes
  ${t}`),i}var gs={name:"grey-tools-build",version:"1.0.0",private:!0,type:"module",dependencies:{"@tonejs/midi":"^2.0.28",esbuild:"^0.28.2",protobufjs:"^8.8.0",three:"^0.185.1"}};var bt="grabvr.tools",Xa=`https://${bt}/`,Ya=`https://api.${bt}/`;var Ka=`https://discord.${bt}/`,eu=`https://stats.${bt}/`,ii="slin.dev",tu=`https://api.${ii}/grab/v1/`,ru=`https://grab-data.${ii}/`,iu=`https://grab-images.${ii}/`,Xo="https://grabvr.quest/",ms=`${Xo}levels/`,nu=`${ms}viewer?level=`,su=`${ms}?tab=tab_other_user&user_id=`;var ou=`support@${bt}`;var uu=gs.version;async function fr(i){try{let e=await new Promise((o,f)=>{let a=new FileReader;a.onload=()=>{let l=a.result;l instanceof ArrayBuffer?o(l):f(new Error("Unexpected FileReader result type"))},a.onerror=()=>{var l;f((l=a.error)!=null?l:new Error("FileReader error"))},a.readAsArrayBuffer(i)}),r=ur().lookupType("COD.Level.Level"),s=r.decode(new Uint8Array(e));return r.toObject(s,{longs:Number})}catch(e){return e instanceof Error&&window.toast("Invalid level data: "+e.message,"error"),null}}function ni(i){let t=ur().lookupType("COD.Level.Level"),r=t.verify(i);return r?(window.toast(r,"error"),null):t.encode(t.fromObject(i)).finish()}function si(i,e=Date.now().toString().slice(0,-3)){let t=new Blob([i],{type:"application/octet-stream"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.download=e+".level",r.click()}function oi(i,e=Date.now().toString().slice(0,-3)){let t=new Blob([JSON.stringify(i,null,2)],{type:"application/json"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.download=e+".json",r.click()}typeof window.toast!="function"&&(window.toast=(i,e)=>{e==="error"?console.error("[LEVELJSON]",i):console.log("[LEVELJSON]",i)});async function Yo(i){if(i.name.endsWith(".json")){let e=JSON.parse(await i.text()),t=await ni(e);if(t===null)return null;let r=i.name.replace(/\.(json|level)$/,"");return si(t,r),{kind:"level",name:r}}if(i.name.endsWith(".level")){let e=await fr(i);if(!e)return null;let t=i.name.replace(/\.(json|level)$/,"");return oi(e,t),{kind:"json",name:t}}return null}async function Ko(i){if(!i.name.endsWith(".level"))return null;let e=await fr(i);return e?JSON.stringify(e,null,2):null}window.LEVELJSON={convert:Yo,toJSONString:Ko,encodeLevel:ni,decodeLevel:fr,downloadJSON:oi,downloadLevel:si};})();
/*! Bundled license information:

long/umd/index.js:
  (**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   *)
*/

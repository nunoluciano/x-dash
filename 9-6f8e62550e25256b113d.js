(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{116:function(t,n){t.exports=function(){throw new Error("define cannot be used indirect")}},121:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},122:function(t,n){(function(n){t.exports=n}).call(this,{})},139:function(t,n,r){"use strict";t.exports=r(140)},140:function(t,n,r){"use strict";var e=r(141),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,u=o?Symbol.for("react.portal"):60106,s=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,c=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,h=o?Symbol.for("react.concurrent_mode"):60111,p=o?Symbol.for("react.forward_ref"):60112,v=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function x(t){for(var n=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+t,e=0;e<n;e++)r+="&args[]="+encodeURIComponent(arguments[e+1]);!function(t,n,r,e,o,i,u,s){if(!t){if(t=void 0,void 0===n)t=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var a=[r,e,o,i,u,s],l=0;(t=Error(n.replace(/%s/g,function(){return a[l++]}))).name="Invariant Violation"}throw t.framesToPop=1,t}}(!1,"Minified React error #"+t+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function H(t,n,r){this.props=t,this.context=n,this.refs=m,this.updater=r||b}function w(){}function T(t,n,r){this.props=t,this.context=n,this.refs=m,this.updater=r||b}H.prototype.isReactComponent={},H.prototype.setState=function(t,n){"object"!=typeof t&&"function"!=typeof t&&null!=t&&x("85"),this.updater.enqueueSetState(this,t,n,"setState")},H.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},w.prototype=H.prototype;var _=T.prototype=new w;_.constructor=T,e(_,H.prototype),_.isPureReactComponent=!0;var j={current:null,currentDispatcher:null},M=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function P(t,n,r){var e=void 0,o={},u=null,s=null;if(null!=n)for(e in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(u=""+n.key),n)M.call(n,e)&&!A.hasOwnProperty(e)&&(o[e]=n[e]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];o.children=l}if(t&&t.defaultProps)for(e in a=t.defaultProps)void 0===o[e]&&(o[e]=a[e]);return{$$typeof:i,type:t,key:u,ref:s,props:o,_owner:j.current}}function L(t){return"object"==typeof t&&null!==t&&t.$$typeof===i}var S=/\/+/g,k=[];function z(t,n,r,e){if(k.length){var o=k.pop();return o.result=t,o.keyPrefix=n,o.func=r,o.context=e,o.count=0,o}return{result:t,keyPrefix:n,func:r,context:e,count:0}}function O(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>k.length&&k.push(t)}function R(t,n,r){return null==t?0:function t(n,r,e,o){var s=typeof n;"undefined"!==s&&"boolean"!==s||(n=null);var a=!1;if(null===n)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(n.$$typeof){case i:case u:a=!0}}if(a)return e(o,n,""===r?"."+C(n,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(n))for(var l=0;l<n.length;l++){var c=r+C(s=n[l],l);a+=t(s,c,e,o)}else if(c=null===n||"object"!=typeof n?null:"function"==typeof(c=g&&n[g]||n["@@iterator"])?c:null,"function"==typeof c)for(n=c.call(n),l=0;!(s=n.next()).done;)a+=t(s=s.value,c=r+C(s,l++),e,o);else"object"===s&&x("31","[object Object]"==(e=""+n)?"object with keys {"+Object.keys(n).join(", ")+"}":e,"");return a}(t,"",n,r)}function C(t,n){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var n={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return n[t]})}(t.key):n.toString(36)}function E(t,n){t.func.call(t.context,n,t.count++)}function q(t,n,r){var e=t.result,o=t.keyPrefix;t=t.func.call(t.context,n,t.count++),Array.isArray(t)?F(t,e,r,function(t){return t}):null!=t&&(L(t)&&(t=function(t,n){return{$$typeof:i,type:t.type,key:n,ref:t.ref,props:t.props,_owner:t._owner}}(t,o+(!t.key||n&&n.key===t.key?"":(""+t.key).replace(S,"$&/")+"/")+r)),e.push(t))}function F(t,n,r,e,o){var i="";null!=r&&(i=(""+r).replace(S,"$&/")+"/"),R(t,q,n=z(n,i,e,o)),O(n)}var I={Children:{map:function(t,n,r){if(null==t)return t;var e=[];return F(t,e,null,n,r),e},forEach:function(t,n,r){if(null==t)return t;R(t,E,n=z(null,null,n,r)),O(n)},count:function(t){return R(t,function(){return null},null)},toArray:function(t){var n=[];return F(t,n,null,function(t){return t}),n},only:function(t){return L(t)||x("143"),t}},createRef:function(){return{current:null}},Component:H,PureComponent:T,createContext:function(t,n){return void 0===n&&(n=null),(t={$$typeof:f,_calculateChangedBits:n,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:t},t.Consumer=t},forwardRef:function(t){return{$$typeof:p,render:t}},lazy:function(t){return{$$typeof:y,_ctor:t,_status:-1,_result:null}},memo:function(t,n){return{$$typeof:d,type:t,compare:void 0===n?null:n}},Fragment:s,StrictMode:a,Suspense:v,createElement:P,cloneElement:function(t,n,r){null==t&&x("267",t);var o=void 0,u=e({},t.props),s=t.key,a=t.ref,l=t._owner;if(null!=n){void 0!==n.ref&&(a=n.ref,l=j.current),void 0!==n.key&&(s=""+n.key);var c=void 0;for(o in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),n)M.call(n,o)&&!A.hasOwnProperty(o)&&(u[o]=void 0===n[o]&&void 0!==c?c[o]:n[o])}if(1===(o=arguments.length-2))u.children=r;else if(1<o){c=Array(o);for(var f=0;f<o;f++)c[f]=arguments[f+2];u.children=c}return{$$typeof:i,type:t.type,key:s,ref:a,props:u,_owner:l}},createFactory:function(t){var n=P.bind(null,t);return n.type=t,n},isValidElement:L,version:"16.7.0",unstable_ConcurrentMode:h,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:j,assign:e}},U={default:I},$=U&&I||U;t.exports=$.default||$},141:function(t,n,r){"use strict";var e=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var n={},r=0;r<10;r++)n["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(n).map(function(t){return n[t]}).join(""))return!1;var e={};return"abcdefghijklmnopqrst".split("").forEach(function(t){e[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},e)).join("")}catch(o){return!1}}()?Object.assign:function(t,n){for(var r,u,s=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),a=1;a<arguments.length;a++){for(var l in r=Object(arguments[a]))o.call(r,l)&&(s[l]=r[l]);if(e){u=e(r);for(var c=0;c<u.length;c++)i.call(r,u[c])&&(s[u[c]]=r[u[c]])}}return s}},142:function(t,n,r){var e=r(143),o=r(144),i=r(145),u=r(146),s=r(147),a=r(148),l=r(149);l.alea=e,l.xor128=o,l.xorwow=i,l.xorshift7=u,l.xor4096=s,l.tychei=a,t.exports=l},143:function(t,n,r){(function(t){var e;!function(t,o,i){function u(t){var n,r=this,e=(n=4022871197,function(t){t=t.toString();for(var r=0;r<t.length;r++){var e=.02519603282416938*(n+=t.charCodeAt(r));e-=n=e>>>0,n=(e*=n)>>>0,n+=4294967296*(e-=n)}return 2.3283064365386963e-10*(n>>>0)});r.next=function(){var t=2091639*r.s0+2.3283064365386963e-10*r.c;return r.s0=r.s1,r.s1=r.s2,r.s2=t-(r.c=0|t)},r.c=1,r.s0=e(" "),r.s1=e(" "),r.s2=e(" "),r.s0-=e(t),r.s0<0&&(r.s0+=1),r.s1-=e(t),r.s1<0&&(r.s1+=1),r.s2-=e(t),r.s2<0&&(r.s2+=1),e=null}function s(t,n){return n.c=t.c,n.s0=t.s0,n.s1=t.s1,n.s2=t.s2,n}function a(t,n){var r=new u(t),e=n&&n.state,o=r.next;return o.int32=function(){return 4294967296*r.next()|0},o.double=function(){return o()+1.1102230246251565e-16*(2097152*o()|0)},o.quick=o,e&&("object"==typeof e&&s(e,r),o.state=function(){return s(r,{})}),o}o&&o.exports?o.exports=a:r(116)&&r(122)?void 0===(e=function(){return a}.call(n,r,n,o))||(o.exports=e):this.alea=a}(0,t,r(116))}).call(this,r(121)(t))},144:function(t,n,r){(function(t){var e;!function(t,o,i){function u(t){var n=this,r="";n.x=0,n.y=0,n.z=0,n.w=0,n.next=function(){var t=n.x^n.x<<11;return n.x=n.y,n.y=n.z,n.z=n.w,n.w^=n.w>>>19^t^t>>>8},t===(0|t)?n.x=t:r+=t;for(var e=0;e<r.length+64;e++)n.x^=0|r.charCodeAt(e),n.next()}function s(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n}function a(t,n){var r=new u(t),e=n&&n.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=r.next,o.quick=o,e&&("object"==typeof e&&s(e,r),o.state=function(){return s(r,{})}),o}o&&o.exports?o.exports=a:r(116)&&r(122)?void 0===(e=function(){return a}.call(n,r,n,o))||(o.exports=e):this.xor128=a}(0,t,r(116))}).call(this,r(121)(t))},145:function(t,n,r){(function(t){var e;!function(t,o,i){function u(t){var n=this,r="";n.next=function(){var t=n.x^n.x>>>2;return n.x=n.y,n.y=n.z,n.z=n.w,n.w=n.v,(n.d=n.d+362437|0)+(n.v=n.v^n.v<<4^t^t<<1)|0},n.x=0,n.y=0,n.z=0,n.w=0,n.v=0,t===(0|t)?n.x=t:r+=t;for(var e=0;e<r.length+64;e++)n.x^=0|r.charCodeAt(e),e==r.length&&(n.d=n.x<<10^n.x>>>4),n.next()}function s(t,n){return n.x=t.x,n.y=t.y,n.z=t.z,n.w=t.w,n.v=t.v,n.d=t.d,n}function a(t,n){var r=new u(t),e=n&&n.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=r.next,o.quick=o,e&&("object"==typeof e&&s(e,r),o.state=function(){return s(r,{})}),o}o&&o.exports?o.exports=a:r(116)&&r(122)?void 0===(e=function(){return a}.call(n,r,n,o))||(o.exports=e):this.xorwow=a}(0,t,r(116))}).call(this,r(121)(t))},146:function(t,n,r){(function(t){var e;!function(t,o,i){function u(t){var n=this;n.next=function(){var t,r,e=n.x,o=n.i;return t=e[o],r=(t^=t>>>7)^t<<24,r^=(t=e[o+1&7])^t>>>10,r^=(t=e[o+3&7])^t>>>3,r^=(t=e[o+4&7])^t<<7,t=e[o+7&7],r^=(t^=t<<13)^t<<9,e[o]=r,n.i=o+1&7,r},function(t,n){var r,e=[];if(n===(0|n))e[0]=n;else for(n=""+n,r=0;r<n.length;++r)e[7&r]=e[7&r]<<15^n.charCodeAt(r)+e[r+1&7]<<13;for(;e.length<8;)e.push(0);for(r=0;r<8&&0===e[r];++r);for(8==r?e[7]=-1:e[r],t.x=e,t.i=0,r=256;r>0;--r)t.next()}(n,t)}function s(t,n){return n.x=t.x.slice(),n.i=t.i,n}function a(t,n){null==t&&(t=+new Date);var r=new u(t),e=n&&n.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=r.next,o.quick=o,e&&(e.x&&s(e,r),o.state=function(){return s(r,{})}),o}o&&o.exports?o.exports=a:r(116)&&r(122)?void 0===(e=function(){return a}.call(n,r,n,o))||(o.exports=e):this.xorshift7=a}(0,t,r(116))}).call(this,r(121)(t))},147:function(t,n,r){(function(t){var e;!function(t,o,i){function u(t){var n=this;n.next=function(){var t,r,e=n.w,o=n.X,i=n.i;return n.w=e=e+1640531527|0,r=o[i+34&127],t=o[i=i+1&127],r^=r<<13,t^=t<<17,r^=r>>>15,t^=t>>>12,r=o[i]=r^t,n.i=i,r+(e^e>>>16)|0},function(t,n){var r,e,o,i,u,s=[],a=128;for(n===(0|n)?(e=n,n=null):(n+="\0",e=0,a=Math.max(a,n.length)),o=0,i=-32;i<a;++i)n&&(e^=n.charCodeAt((i+32)%n.length)),0===i&&(u=e),e^=e<<10,e^=e>>>15,e^=e<<4,e^=e>>>13,i>=0&&(u=u+1640531527|0,o=0==(r=s[127&i]^=e+u)?o+1:0);for(o>=128&&(s[127&(n&&n.length||0)]=-1),o=127,i=512;i>0;--i)e=s[o+34&127],r=s[o=o+1&127],e^=e<<13,r^=r<<17,e^=e>>>15,r^=r>>>12,s[o]=e^r;t.w=u,t.X=s,t.i=o}(n,t)}function s(t,n){return n.i=t.i,n.w=t.w,n.X=t.X.slice(),n}function a(t,n){null==t&&(t=+new Date);var r=new u(t),e=n&&n.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=r.next,o.quick=o,e&&(e.X&&s(e,r),o.state=function(){return s(r,{})}),o}o&&o.exports?o.exports=a:r(116)&&r(122)?void 0===(e=function(){return a}.call(n,r,n,o))||(o.exports=e):this.xor4096=a}(0,t,r(116))}).call(this,r(121)(t))},148:function(t,n,r){(function(t){var e;!function(t,o,i){function u(t){var n=this,r="";n.next=function(){var t=n.b,r=n.c,e=n.d,o=n.a;return t=t<<25^t>>>7^r,r=r-e|0,e=e<<24^e>>>8^o,o=o-t|0,n.b=t=t<<20^t>>>12^r,n.c=r=r-e|0,n.d=e<<16^r>>>16^o,n.a=o-t|0},n.a=0,n.b=0,n.c=-1640531527,n.d=1367130551,t===Math.floor(t)?(n.a=t/4294967296|0,n.b=0|t):r+=t;for(var e=0;e<r.length+20;e++)n.b^=0|r.charCodeAt(e),n.next()}function s(t,n){return n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,n}function a(t,n){var r=new u(t),e=n&&n.state,o=function(){return(r.next()>>>0)/4294967296};return o.double=function(){do{var t=((r.next()>>>11)+(r.next()>>>0)/4294967296)/(1<<21)}while(0===t);return t},o.int32=r.next,o.quick=o,e&&("object"==typeof e&&s(e,r),o.state=function(){return s(r,{})}),o}o&&o.exports?o.exports=a:r(116)&&r(122)?void 0===(e=function(){return a}.call(n,r,n,o))||(o.exports=e):this.tychei=a}(0,t,r(116))}).call(this,r(121)(t))},149:function(t,n,r){var e;!function(o,i){var u,s=(0,eval)("this"),a=256,l=6,c="random",f=i.pow(a,l),h=i.pow(2,52),p=2*h,v=a-1;function d(t,n,r){var e=[],v=x(function t(n,r){var e,o=[],i=typeof n;if(r&&"object"==i)for(e in n)try{o.push(t(n[e],r-1))}catch(u){}return o.length?o:"string"==i?n:n+"\0"}((n=1==n?{entropy:!0}:n||{}).entropy?[t,b(o)]:null==t?function(){try{var t;return u&&(t=u.randomBytes)?t=t(a):(t=new Uint8Array(a),(s.crypto||s.msCrypto).getRandomValues(t)),b(t)}catch(e){var n=s.navigator,r=n&&n.plugins;return[+new Date,s,r,s.screen,b(o)]}}():t,3),e),d=new y(e),m=function(){for(var t=d.g(l),n=f,r=0;t<h;)t=(t+r)*a,n*=a,r=d.g(1);for(;t>=p;)t/=2,n/=2,r>>>=1;return(t+r)/n};return m.int32=function(){return 0|d.g(4)},m.quick=function(){return d.g(4)/4294967296},m.double=m,x(b(d.S),o),(n.pass||r||function(t,n,r,e){return e&&(e.S&&g(e,d),t.state=function(){return g(d,{})}),r?(i[c]=t,n):t})(m,v,"global"in n?n.global:this==i,n.state)}function y(t){var n,r=t.length,e=this,o=0,i=e.i=e.j=0,u=e.S=[];for(r||(t=[r++]);o<a;)u[o]=o++;for(o=0;o<a;o++)u[o]=u[i=v&i+t[o%r]+(n=u[o])],u[i]=n;(e.g=function(t){for(var n,r=0,o=e.i,i=e.j,u=e.S;t--;)n=u[o=v&o+1],r=r*a+u[v&(u[o]=u[i=v&i+n])+(u[i]=n)];return e.i=o,e.j=i,r})(a)}function g(t,n){return n.i=t.i,n.j=t.j,n.S=t.S.slice(),n}function x(t,n){for(var r,e=t+"",o=0;o<e.length;)n[v&o]=v&(r^=19*n[v&o])+e.charCodeAt(o++);return b(n)}function b(t){return String.fromCharCode.apply(0,t)}if(i["seed"+c]=d,x(i.random(),o),t.exports){t.exports=d;try{u=r(150)}catch(m){}}else void 0===(e=function(){return d}.call(n,r,n,t))||(t.exports=e)}([],Math)},151:function(t,n){var r=r||{};r.Geometry=function(){},r.Geometry.intersectLineLine=function(t,n){var r=(t.intercept-n.intercept)/(n.slope-t.slope);return{x:r,y:t.slope*r+t.intercept}},r.Geometry.distanceFromOrigin=function(t){return Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2))},r.Geometry.distanceLineFromOrigin=function(t){return Math.abs(t.intercept)/Math.sqrt(Math.pow(t.slope,2)+1)},r.Geometry.perpendicularThroughPoint=function(t,n){var r=-1/t.slope;return{slope:r,intercept:n.y-r*n.x}},r.Geometry.angleFromOrigin=function(t){return Math.atan2(t.y,t.x)},r.Geometry.normalizeAngle=function(t){var n=2*Math.PI;return(t%n+n)%n},r.Geometry.lengthOfRayUntilIntersect=function(t,n){return n.intercept/(Math.sin(t)-n.slope*Math.cos(t))},r.Hsluv=function(){},r.Hsluv.getBounds=function(t){for(var n=[],e=Math.pow(t+16,3)/1560896,o=e>r.Hsluv.epsilon?e:t/r.Hsluv.kappa,i=0;i<3;)for(var u=i++,s=r.Hsluv.m[u][0],a=r.Hsluv.m[u][1],l=r.Hsluv.m[u][2],c=0;c<2;){var f=c++,h=(284517*s-94839*l)*o,p=(838422*l+769860*a+731718*s)*t*o-769860*f*t,v=(632260*l-126452*a)*o+126452*f;n.push({slope:h/v,intercept:p/v})}return n},r.Hsluv.maxSafeChromaForL=function(t){for(var n=r.Hsluv.getBounds(t),e=1/0,o=0;o<n.length;){var i=n[o];++o;var u=r.Geometry.distanceLineFromOrigin(i);e=Math.min(e,u)}return e},r.Hsluv.maxChromaForLH=function(t,n){for(var e=n/360*Math.PI*2,o=r.Hsluv.getBounds(t),i=1/0,u=0;u<o.length;){var s=o[u];++u;var a=r.Geometry.lengthOfRayUntilIntersect(e,s);a>=0&&(i=Math.min(i,a))}return i},r.Hsluv.dotProduct=function(t,n){for(var r=0,e=0,o=t.length;e<o;){var i=e++;r+=t[i]*n[i]}return r},r.Hsluv.fromLinear=function(t){return t<=.0031308?12.92*t:1.055*Math.pow(t,.4166666666666667)-.055},r.Hsluv.toLinear=function(t){return t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92},r.Hsluv.xyzToRgb=function(t){return[r.Hsluv.fromLinear(r.Hsluv.dotProduct(r.Hsluv.m[0],t)),r.Hsluv.fromLinear(r.Hsluv.dotProduct(r.Hsluv.m[1],t)),r.Hsluv.fromLinear(r.Hsluv.dotProduct(r.Hsluv.m[2],t))]},r.Hsluv.rgbToXyz=function(t){var n=[r.Hsluv.toLinear(t[0]),r.Hsluv.toLinear(t[1]),r.Hsluv.toLinear(t[2])];return[r.Hsluv.dotProduct(r.Hsluv.minv[0],n),r.Hsluv.dotProduct(r.Hsluv.minv[1],n),r.Hsluv.dotProduct(r.Hsluv.minv[2],n)]},r.Hsluv.yToL=function(t){return t<=r.Hsluv.epsilon?t/r.Hsluv.refY*r.Hsluv.kappa:116*Math.pow(t/r.Hsluv.refY,.3333333333333333)-16},r.Hsluv.lToY=function(t){return t<=8?r.Hsluv.refY*t/r.Hsluv.kappa:r.Hsluv.refY*Math.pow((t+16)/116,3)},r.Hsluv.xyzToLuv=function(t){var n=t[0],e=t[1],o=n+15*e+3*t[2],i=4*n,u=9*e;0!=o?(i/=o,u/=o):(i=NaN,u=NaN);var s=r.Hsluv.yToL(e);return 0==s?[0,0,0]:[s,13*s*(i-r.Hsluv.refU),13*s*(u-r.Hsluv.refV)]},r.Hsluv.luvToXyz=function(t){var n=t[0],e=t[1],o=t[2];if(0==n)return[0,0,0];var i=e/(13*n)+r.Hsluv.refU,u=o/(13*n)+r.Hsluv.refV,s=r.Hsluv.lToY(n),a=0-9*s*i/((i-4)*u-i*u);return[a,s,(9*s-15*u*s-u*a)/(3*u)]},r.Hsluv.luvToLch=function(t){var n,r=t[0],e=t[1],o=t[2],i=Math.sqrt(e*e+o*o);i<1e-8?n=0:(n=180*Math.atan2(o,e)/Math.PI)<0&&(n=360+n);return[r,i,n]},r.Hsluv.lchToLuv=function(t){var n=t[0],r=t[1],e=t[2]/360*2*Math.PI;return[n,Math.cos(e)*r,Math.sin(e)*r]},r.Hsluv.hsluvToLch=function(t){var n=t[0],e=t[1],o=t[2];return o>99.9999999?[100,0,n]:o<1e-8?[0,0,n]:[o,r.Hsluv.maxChromaForLH(o,n)/100*e,n]},r.Hsluv.lchToHsluv=function(t){var n=t[0],e=t[1],o=t[2];return n>99.9999999?[o,0,100]:n<1e-8?[o,0,0]:[o,e/r.Hsluv.maxChromaForLH(n,o)*100,n]},r.Hsluv.hpluvToLch=function(t){var n=t[0],e=t[1],o=t[2];return o>99.9999999?[100,0,n]:o<1e-8?[0,0,n]:[o,r.Hsluv.maxSafeChromaForL(o)/100*e,n]},r.Hsluv.lchToHpluv=function(t){var n=t[0],e=t[1],o=t[2];return n>99.9999999?[o,0,100]:n<1e-8?[o,0,0]:[o,e/r.Hsluv.maxSafeChromaForL(n)*100,n]},r.Hsluv.rgbToHex=function(t){for(var n="#",e=0;e<3;){var o=t[e++],i=Math.round(255*o),u=i%16,s=(i-u)/16|0;n+=r.Hsluv.hexChars.charAt(s)+r.Hsluv.hexChars.charAt(u)}return n},r.Hsluv.hexToRgb=function(t){t=t.toLowerCase();for(var n=[],e=0;e<3;){var o=e++,i=16*r.Hsluv.hexChars.indexOf(t.charAt(2*o+1))+r.Hsluv.hexChars.indexOf(t.charAt(2*o+2));n.push(i/255)}return n},r.Hsluv.lchToRgb=function(t){return r.Hsluv.xyzToRgb(r.Hsluv.luvToXyz(r.Hsluv.lchToLuv(t)))},r.Hsluv.rgbToLch=function(t){return r.Hsluv.luvToLch(r.Hsluv.xyzToLuv(r.Hsluv.rgbToXyz(t)))},r.Hsluv.hsluvToRgb=function(t){return r.Hsluv.lchToRgb(r.Hsluv.hsluvToLch(t))},r.Hsluv.rgbToHsluv=function(t){return r.Hsluv.lchToHsluv(r.Hsluv.rgbToLch(t))},r.Hsluv.hpluvToRgb=function(t){return r.Hsluv.lchToRgb(r.Hsluv.hpluvToLch(t))},r.Hsluv.rgbToHpluv=function(t){return r.Hsluv.lchToHpluv(r.Hsluv.rgbToLch(t))},r.Hsluv.hsluvToHex=function(t){return r.Hsluv.rgbToHex(r.Hsluv.hsluvToRgb(t))},r.Hsluv.hpluvToHex=function(t){return r.Hsluv.rgbToHex(r.Hsluv.hpluvToRgb(t))},r.Hsluv.hexToHsluv=function(t){return r.Hsluv.rgbToHsluv(r.Hsluv.hexToRgb(t))},r.Hsluv.hexToHpluv=function(t){return r.Hsluv.rgbToHpluv(r.Hsluv.hexToRgb(t))},r.Hsluv.m=[[3.240969941904521,-1.537383177570093,-.498610760293],[-.96924363628087,1.87596750150772,.041555057407175],[.055630079696993,-.20397695888897,1.056971514242878]],r.Hsluv.minv=[[.41239079926595,.35758433938387,.18048078840183],[.21263900587151,.71516867876775,.072192315360733],[.019330818715591,.11919477979462,.95053215224966]],r.Hsluv.refY=1,r.Hsluv.refU=.19783000664283,r.Hsluv.refV=.46831999493879,r.Hsluv.kappa=903.2962962,r.Hsluv.epsilon=.0088564516,r.Hsluv.hexChars="0123456789abcdef";var e={hsluvToRgb:r.Hsluv.hsluvToRgb,rgbToHsluv:r.Hsluv.rgbToHsluv,hpluvToRgb:r.Hsluv.hpluvToRgb,rgbToHpluv:r.Hsluv.rgbToHpluv,hsluvToHex:r.Hsluv.hsluvToHex,hexToHsluv:r.Hsluv.hexToHsluv,hpluvToHex:r.Hsluv.hpluvToHex,hexToHpluv:r.Hsluv.hexToHpluv,lchToHpluv:r.Hsluv.lchToHpluv,hpluvToLch:r.Hsluv.hpluvToLch,lchToHsluv:r.Hsluv.lchToHsluv,hsluvToLch:r.Hsluv.hsluvToLch,lchToLuv:r.Hsluv.lchToLuv,luvToLch:r.Hsluv.luvToLch,xyzToLuv:r.Hsluv.xyzToLuv,luvToXyz:r.Hsluv.luvToXyz,xyzToRgb:r.Hsluv.xyzToRgb,rgbToXyz:r.Hsluv.rgbToXyz,lchToRgb:r.Hsluv.lchToRgb,rgbToLch:r.Hsluv.rgbToLch};t.exports=e},152:function(t,n,r){"use strict";var e=r(153),o=r(157),i=r(158),u=function(t,n){for(var r=0,e=0;e<t.length;e++)r+=Math.pow(t[e]-n[e],2);return r},s=function(t,n,r,i,u){r=r||2*n,this.shape=t,this.dimension=this.shape.length,this.minDistance=n,this.squaredMinDistance=n*n,this.deltaDistance=r-n,this.cellSize=n/Math.sqrt(this.dimension),this.maxTries=i||30,this.rng=u||Math.random,this.neighbourhood=function(t){var n,r=o(2,t),e=[];for(n=0;n<t;n++)e.push(0);return r.push(e),r.sort(function(n,r){for(var e=0,o=0,i=0;i<t;i++)e+=Math.pow(n[i],2),o+=Math.pow(r[i],2);return e<o?-1:e>o?1:0}),r}(this.dimension),this.currentPoint=null,this.processList=[],this.samplePoints=[],this.gridShape=[];for(var s=0;s<this.dimension;s++)this.gridShape.push(Math.ceil(t[s]/this.cellSize));this.grid=e(this.gridShape,"uint32")};s.prototype.shape=null,s.prototype.dimension=null,s.prototype.minDistance=null,s.prototype.squaredMinDistance=null,s.prototype.deltaDistance=null,s.prototype.cellSize=null,s.prototype.maxTries=null,s.prototype.rng=null,s.prototype.neighbourhood=null,s.prototype.currentPoint=null,s.prototype.processList=null,s.prototype.samplePoints=null,s.prototype.gridShape=null,s.prototype.grid=null,s.prototype.addRandomPoint=function(){for(var t=new Array(this.dimension),n=0;n<this.dimension;n++)t[n]=this.rng()*this.shape[n];return this.directAddPoint(t)},s.prototype.addPoint=function(t){var n,r=!0;if(t.length===this.dimension)for(n=0;n<this.dimension&&r;n++)r=t[n]>=0&&t[n]<=this.shape[n];else r=!1;return r?this.directAddPoint(t):null},s.prototype.directAddPoint=function(t){var n,r=0,e=this.grid.stride;for(this.processList.push(t),this.samplePoints.push(t),n=0;n<this.dimension;n++)r+=(t[n]/this.cellSize|0)*e[n];return this.grid.data[r]=this.samplePoints.length,t},s.prototype.inNeighbourhood=function(t){var n,r,e,o,i,s=this.dimension,a=this.grid.stride;for(n=0;n<this.neighbourhood.length;n++){for(r=0,e=0;e<s;e++)(o=(t[e]/this.cellSize|0)+this.neighbourhood[n][e])>=0&&o<this.gridShape[e]&&(r+=o*a[e]);if(0!==this.grid.data[r]&&(i=this.samplePoints[this.grid.data[r]-1],u(t,i)<this.squaredMinDistance))return!0}return!1},s.prototype.next=function(){for(var t,n,r,e,o,u,s;this.processList.length>0;){for(null===this.currentPoint&&(this.currentPoint=this.processList.shift()),e=this.currentPoint,t=0;t<this.maxTries;t++){for(u=!0,r=this.minDistance+this.deltaDistance*this.rng(),2===this.dimension?(n=this.rng()*Math.PI*2,o=[Math.cos(n),Math.sin(n)]):o=i(this.dimension,this.rng),s=0;u&&s<this.dimension;s++)o[s]=e[s]+o[s]*r,u=o[s]>=0&&o[s]<=this.shape[s]-1;if(u&&!this.inNeighbourhood(o))return this.directAddPoint(o)}t===this.maxTries&&(this.currentPoint=null)}return null},s.prototype.fill=function(){for(0===this.samplePoints.length&&this.addRandomPoint();this.next(););return this.samplePoints},s.prototype.getAllPoints=function(){return this.samplePoints},s.prototype.reset=function(){var t=this.grid.data,n=0;for(n=0;n<t.length;n++)t[n]=0;this.samplePoints=[],this.currentPoint=null,this.processList.length=0},t.exports=s},153:function(t,n,r){"use strict";var e=r(154);t.exports=function(t,n){n=n||"float64";for(var r=1,o=0;o<t.length;++o)r*=t[o];return e(new(function(t){switch(t){case"uint8":return Uint8Array;case"uint16":return Uint16Array;case"uint32":return Uint32Array;case"int8":return Int8Array;case"int16":return Int16Array;case"int32":return Int32Array;case"float":case"float32":return Float32Array;case"double":case"float64":return Float64Array;case"uint8_clamped":return Uint8ClampedArray;case"generic":case"buffer":case"data":case"dataview":return ArrayBuffer;case"array":return Array}}(n))(r),t)}},154:function(t,n,r){var e=r(155),o=r(156),i="undefined"!=typeof Float64Array;function u(t,n){return t[0]-n[0]}function s(){var t,n=this.stride,r=new Array(n.length);for(t=0;t<r.length;++t)r[t]=[Math.abs(n[t]),t];r.sort(u);var e=new Array(r.length);for(t=0;t<e.length;++t)e[t]=r[t][1];return e}function a(t,n){var r=["View",n,"d",t].join("");n<0&&(r="View_Nil"+t);var o="generic"===t;if(-1===n){var i="function "+r+"(a){this.data=a;};var proto="+r+".prototype;proto.dtype='"+t+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+r+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+r+"(a){return new "+r+"(a);}";return new Function(i)()}if(0===n){i="function "+r+"(a,d) {this.data = a;this.offset = d};var proto="+r+".prototype;proto.dtype='"+t+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+r+"_copy() {return new "+r+"(this.data,this.offset)};proto.pick=function "+r+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+r+"_get(){return "+(o?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+r+"_set(v){return "+(o?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+r+"(a,b,c,d){return new "+r+"(a,d)}";return new Function("TrivialArray",i)(l[t][0])}i=["'use strict'"];var u=e(n),a=u.map(function(t){return"i"+t}),c="this.offset+"+u.map(function(t){return"this.stride["+t+"]*i"+t}).join("+"),f=u.map(function(t){return"b"+t}).join(","),h=u.map(function(t){return"c"+t}).join(",");i.push("function "+r+"(a,"+f+","+h+",d){this.data=a","this.shape=["+f+"]","this.stride=["+h+"]","this.offset=d|0}","var proto="+r+".prototype","proto.dtype='"+t+"'","proto.dimension="+n),i.push("Object.defineProperty(proto,'size',{get:function "+r+"_size(){return "+u.map(function(t){return"this.shape["+t+"]"}).join("*"),"}})"),1===n?i.push("proto.order=[0]"):(i.push("Object.defineProperty(proto,'order',{get:"),n<4?(i.push("function "+r+"_order(){"),2===n?i.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):3===n&&i.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):i.push("ORDER})")),i.push("proto.set=function "+r+"_set("+a.join(",")+",v){"),o?i.push("return this.data.set("+c+",v)}"):i.push("return this.data["+c+"]=v}"),i.push("proto.get=function "+r+"_get("+a.join(",")+"){"),o?i.push("return this.data.get("+c+")}"):i.push("return this.data["+c+"]}"),i.push("proto.index=function "+r+"_index(",a.join(),"){return "+c+"}"),i.push("proto.hi=function "+r+"_hi("+a.join(",")+"){return new "+r+"(this.data,"+u.map(function(t){return["(typeof i",t,"!=='number'||i",t,"<0)?this.shape[",t,"]:i",t,"|0"].join("")}).join(",")+","+u.map(function(t){return"this.stride["+t+"]"}).join(",")+",this.offset)}");var p=u.map(function(t){return"a"+t+"=this.shape["+t+"]"}),v=u.map(function(t){return"c"+t+"=this.stride["+t+"]"});i.push("proto.lo=function "+r+"_lo("+a.join(",")+"){var b=this.offset,d=0,"+p.join(",")+","+v.join(","));for(var d=0;d<n;++d)i.push("if(typeof i"+d+"==='number'&&i"+d+">=0){d=i"+d+"|0;b+=c"+d+"*d;a"+d+"-=d}");i.push("return new "+r+"(this.data,"+u.map(function(t){return"a"+t}).join(",")+","+u.map(function(t){return"c"+t}).join(",")+",b)}"),i.push("proto.step=function "+r+"_step("+a.join(",")+"){var "+u.map(function(t){return"a"+t+"=this.shape["+t+"]"}).join(",")+","+u.map(function(t){return"b"+t+"=this.stride["+t+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(d=0;d<n;++d)i.push("if(typeof i"+d+"==='number'){d=i"+d+"|0;if(d<0){c+=b"+d+"*(a"+d+"-1);a"+d+"=ceil(-a"+d+"/d)}else{a"+d+"=ceil(a"+d+"/d)}b"+d+"*=d}");i.push("return new "+r+"(this.data,"+u.map(function(t){return"a"+t}).join(",")+","+u.map(function(t){return"b"+t}).join(",")+",c)}");var y=new Array(n),g=new Array(n);for(d=0;d<n;++d)y[d]="a[i"+d+"]",g[d]="b[i"+d+"]";i.push("proto.transpose=function "+r+"_transpose("+a+"){"+a.map(function(t,n){return t+"=("+t+"===undefined?"+n+":"+t+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+r+"(this.data,"+y.join(",")+","+g.join(",")+",this.offset)}"),i.push("proto.pick=function "+r+"_pick("+a+"){var a=[],b=[],c=this.offset");for(d=0;d<n;++d)i.push("if(typeof i"+d+"==='number'&&i"+d+">=0){c=(c+this.stride["+d+"]*i"+d+")|0}else{a.push(this.shape["+d+"]);b.push(this.stride["+d+"])}");return i.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),i.push("return function construct_"+r+"(data,shape,stride,offset){return new "+r+"(data,"+u.map(function(t){return"shape["+t+"]"}).join(",")+","+u.map(function(t){return"stride["+t+"]"}).join(",")+",offset)}"),new Function("CTOR_LIST","ORDER",i.join("\n"))(l[t],s)}var l={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],buffer:[],generic:[]};t.exports=function(t,n,r,e){if(void 0===t)return(0,l.array[0])([]);"number"==typeof t&&(t=[t]),void 0===n&&(n=[t.length]);var u=n.length;if(void 0===r){r=new Array(u);for(var s=u-1,c=1;s>=0;--s)r[s]=c,c*=n[s]}if(void 0===e)for(e=0,s=0;s<u;++s)r[s]<0&&(e-=(n[s]-1)*r[s]);for(var f=function(t){if(o(t))return"buffer";if(i)switch(Object.prototype.toString.call(t)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped"}return Array.isArray(t)?"array":"generic"}(t),h=l[f];h.length<=u+1;)h.push(a(f,h.length-1));return(0,h[u+1])(t,n,r,e)}},155:function(t,n,r){"use strict";t.exports=function(t){for(var n=new Array(t),r=0;r<t;++r)n[r]=r;return n}},156:function(t,n){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},157:function(t,n){t.exports=function(t,n){n=n||2;for(var r=2*(t=t||1)+1,e=Math.pow(r,n)-1,o=new Array(e),i=0;i<e;i++)for(var u=o[i]=new Array(n),s=i<e/2?i:i+1,a=1;a<=n;a++){var l=s%Math.pow(r,a);u[a-1]=l/Math.pow(r,a-1)-t,s-=l}return o}},158:function(t,n,r){"use strict";t.exports=function(t,n){var r,e,o,i,u,s=new Array(t),a=Math.floor(t/2)<<1,l=0;for(u=0;u<a;u+=2)r=-2*Math.log(n()),e=Math.sqrt(r),o=2*Math.PI*n(),l+=r,s[u]=e*Math.cos(o),s[u+1]=e*Math.sin(o);if(t%2){var c=Math.sqrt(-2*Math.log(n()))*Math.cos(2*Math.PI*n());s[t-1]=c,l+=Math.pow(c,2)}for(i=1/Math.sqrt(l),u=0;u<t;++u)s[u]*=i;return s}},159:function(t,n){t.exports=function(t,n){for(var r=t[0],e=t[1],o=!1,i=0,u=n.length-1;i<n.length;u=i++){var s=n[i][0],a=n[i][1],l=n[u][0],c=n[u][1];a>e!=c>e&&r<(l-s)*(e-a)/(c-a)+s&&(o=!o)}return o}},160:function(t,n,r){"use strict";r.d(n,"a",function(){return o});const e=Math.pow(2,-52);class o{static from(t,n,r){n||(n=h),r||(r=p);const e=t.length,i=new Float64Array(2*e);for(let o=0;o<e;o++){const e=t[o];i[2*o]=n(e),i[2*o+1]=r(e)}return new o(i)}constructor(t){let n=1/0,r=1/0,o=-1/0,h=-1/0;const p=t.length>>1,v=this.ids=new Uint32Array(p);if(p>0&&"number"!=typeof t[0])throw new Error("Expected coords to contain numbers.");this.coords=t;for(let e=0;e<p;e++){const i=t[2*e],u=t[2*e+1];i<n&&(n=i),u<r&&(r=u),i>o&&(o=i),u>h&&(h=u),v[e]=e}const d=(n+o)/2,y=(r+h)/2;let g,x,b,m=1/0;for(let e=0;e<p;e++){const n=i(d,y,t[2*e],t[2*e+1]);n<m&&(g=e,m=n)}const H=t[2*g],w=t[2*g+1];m=1/0;for(let e=0;e<p;e++){if(e===g)continue;const n=i(H,w,t[2*e],t[2*e+1]);n<m&&n>0&&(x=e,m=n)}let T=t[2*x],_=t[2*x+1],j=1/0;for(let e=0;e<p;e++){if(e===g||e===x)continue;const n=s(H,w,T,_,t[2*e],t[2*e+1]);n<j&&(b=e,j=n)}let M=t[2*b],A=t[2*b+1];if(j===1/0)throw new Error("No Delaunay triangulation exists for this input.");if(u(H,w,T,_,M,A)){const t=x,n=T,r=_;x=b,T=M,_=A,b=t,M=n,A=r}const P=function(t,n,r,e,o,i){const u=r-t,s=e-n,a=o-t,l=i-n,c=u*u+s*s,f=a*a+l*l,h=u*l-s*a;return{x:t+.5*(l*c-s*f)/h,y:n+.5*(u*f-a*c)/h}}(H,w,T,_,M,A);this._cx=P.x,this._cy=P.y,function t(n,r,e,o,i,u){let s,a,l;if(o-e<=20)for(s=e+1;s<=o;s++){for(l=n[s],a=s-1;a>=e&&c(r,n[a],l,i,u)>0;)n[a+1]=n[a--];n[a+1]=l}else{const h=e+o>>1;for(a=o,f(n,h,s=e+1),c(r,n[e],n[o],i,u)>0&&f(n,e,o),c(r,n[s],n[o],i,u)>0&&f(n,s,o),c(r,n[e],n[s],i,u)>0&&f(n,e,s),l=n[s];;){do{s++}while(c(r,n[s],l,i,u)<0);do{a--}while(c(r,n[a],l,i,u)>0);if(a<s)break;f(n,s,a)}n[e+1]=n[a],n[a]=l,o-s+1>=a-e?(t(n,r,s,o,i,u),t(n,r,e,a-1,i,u)):(t(n,r,e,a-1,i,u),t(n,r,s,o,i,u))}}(v,t,0,v.length-1,P.x,P.y),this._hashSize=Math.ceil(Math.sqrt(p)),this._hash=new Array(this._hashSize);let L=this.hull=a(t,g);this._hashEdge(L),L.t=0,L=a(t,x,L),this._hashEdge(L),L.t=1,L=a(t,b,L),this._hashEdge(L),L.t=2;const S=2*p-5,k=this.triangles=new Uint32Array(3*S),z=this.halfedges=new Int32Array(3*S);this.trianglesLen=0,this._addTriangle(g,x,b,-1,-1,-1);for(let i,s,c=0;c<v.length;c++){const n=v[c],r=t[2*n],o=t[2*n+1];if(c>0&&Math.abs(r-i)<=e&&Math.abs(o-s)<=e)continue;if(i=r,s=o,n===g||n===x||n===b)continue;const f=this._hashKey(r,o);let h,p=f;do{h=this._hash[p],p=(p+1)%this._hashSize}while((!h||h.removed)&&p!==f);for(L=h=h.prev;!u(r,o,L.x,L.y,L.next.x,L.next.y);)if((L=L.next)===h){L=null;break}if(!L)continue;const d=L===h;let y=this._addTriangle(L.i,n,L.next.i,-1,-1,L.t);L.t=y,(L=a(t,n,L)).t=this._legalize(y+2);let m=L.next;for(;u(r,o,m.x,m.y,m.next.x,m.next.y);)y=this._addTriangle(m.i,n,m.next.i,m.prev.t,-1,m.t),m.prev.t=this._legalize(y+2),this.hull=l(m),m=m.next;if(d)for(m=L.prev;u(r,o,m.prev.x,m.prev.y,m.x,m.y);)y=this._addTriangle(m.prev.i,n,m.i,-1,m.t,m.prev.t),this._legalize(y+2),m.prev.t=y,this.hull=l(m),m=m.prev;this._hashEdge(L),this._hashEdge(L.prev)}this.triangles=k.subarray(0,this.trianglesLen),this.halfedges=z.subarray(0,this.trianglesLen)}_hashEdge(t){this._hash[this._hashKey(t.x,t.y)]=t}_hashKey(t,n){return Math.floor(function(t,n){const r=t/(Math.abs(t)+Math.abs(n));return(n>0?3-r:1+r)/4}(t-this._cx,n-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{triangles:n,coords:r,halfedges:e}=this,o=e[t],i=t-t%3,u=o-o%3,s=i+(t+1)%3,a=i+(t+2)%3,l=u+(o+2)%3;if(-1===o)return a;const c=n[a],f=n[t],h=n[s],p=n[l];if(function(t,n,r,e,o,i,u,s){const a=t-u,l=n-s,c=r-u,f=e-s,h=o-u,p=i-s,v=c*c+f*f,d=h*h+p*p;return a*(f*d-v*p)-l*(c*d-v*h)+(a*a+l*l)*(c*p-f*h)<0}(r[2*c],r[2*c+1],r[2*f],r[2*f+1],r[2*h],r[2*h+1],r[2*p],r[2*p+1])){n[t]=p,n[o]=c;const r=e[l];if(-1===r){let n=this.hull;do{if(n.t===l){n.t=t;break}n=n.next}while(n!==this.hull)}this._link(t,r),this._link(o,e[a]),this._link(a,l);const i=u+(o+1)%3;return this._legalize(t),this._legalize(i)}return a}_link(t,n){this.halfedges[t]=n,-1!==n&&(this.halfedges[n]=t)}_addTriangle(t,n,r,e,o,i){const u=this.trianglesLen;return this.triangles[u]=t,this.triangles[u+1]=n,this.triangles[u+2]=r,this._link(u,e),this._link(u+1,o),this._link(u+2,i),this.trianglesLen+=3,u}}function i(t,n,r,e){const o=t-r,i=n-e;return o*o+i*i}function u(t,n,r,e,o,i){return(e-n)*(o-r)-(r-t)*(i-e)<0}function s(t,n,r,e,o,i){const u=r-t,s=e-n,a=o-t,l=i-n,c=u*u+s*s,f=a*a+l*l,h=u*l-s*a,p=.5*(l*c-s*f)/h,v=.5*(u*f-a*c)/h;return c&&f&&h&&p*p+v*v||1/0}function a(t,n,r){const e={i:n,x:t[2*n],y:t[2*n+1],t:0,prev:null,next:null,removed:!1};return r?(e.next=r.next,e.prev=r,r.next.prev=e,r.next=e):(e.prev=e,e.next=e),e}function l(t){return t.prev.next=t.next,t.next.prev=t.prev,t.removed=!0,t.prev}function c(t,n,r,e,o){return i(t[2*n],t[2*n+1],e,o)-i(t[2*r],t[2*r+1],e,o)||t[2*n]-t[2*r]||t[2*n+1]-t[2*r+1]}function f(t,n,r){const e=t[n];t[n]=t[r],t[r]=e}function h(t){return t[0]}function p(t){return t[1]}}}]);
//# sourceMappingURL=9-6f8e62550e25256b113d.js.map
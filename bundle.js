// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).minmaxViewBufferIndex=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,u=n.__lookupSetter__;var f=r,c=function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||u.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},_=t()?f:c;var p=function(e,t,r){var n,o,i,a,l;for(n=e.length,o=r,i=r,l=0;l<n;l++){if(0===e[l])return[r,r];(a=t[l])>0?i+=a*(e[l]-1):a<0&&(o+=a*(e[l]-1))}return[o,i]};return function(e,t,r){_(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}(p,"assign",(function(e,t,r,n){var o,i,a,l,u;for(o=e.length,i=r,a=r,u=0;u<o;u++){if(0===e[u])return n[0]=r,n[1]=r,n;(l=t[u])>0?a+=l*(e[u]-1):l<0&&(i+=l*(e[u]-1))}return n[0]=i,n[1]=a,n})),p}));
//# sourceMappingURL=bundle.js.map

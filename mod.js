// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,l=n.__defineSetter__,i=n.__lookupGetter__,u=n.__lookupSetter__;function c(e,r,t){var n,o,a,l,i;for(n=e.length,o=t,a=t,i=0;i<n;i++){if(0===e[i])return[t,t];(l=r[i])>0?a+=l*(e[i]-1):l<0&&(o+=l*(e[i]-1))}return[o,a]}function _(e,r,t,n){var o,a,l,i,u;for(o=e.length,a=t,l=t,u=0;u<o;u++){if(0===e[u])return n[0]=t,n[1]=t,n;(i=r[u])>0?l+=i*(e[u]-1):i<0&&(a+=i*(e[u]-1))}return n[0]=a,n[1]=l,n}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,_,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((_="value"in t)&&(i.call(e,r)||u.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),f="get"in t,p="set"in t,_&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&a&&a.call(e,r,t.get),p&&l&&l.call(e,r,t.set),e},r(c,"assign",{configurable:!1,enumerable:!1,writable:!1,value:_});export{_ as assign,c as default};
//# sourceMappingURL=mod.js.map

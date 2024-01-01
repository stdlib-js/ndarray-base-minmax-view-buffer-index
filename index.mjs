// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function r(n,r,e){var t,s,i,o,a;for(t=n.length,s=e,i=e,a=0;a<t;a++){if(0===n[a])return[e,e];(o=r[a])>0?i+=o*(n[a]-1):o<0&&(s+=o*(n[a]-1))}return[s,i]}function e(n,r,e,t){var s,i,o,a,f;for(s=n.length,i=e,o=e,f=0;f<s;f++){if(0===n[f])return t[0]=e,t[1]=e,t;(a=r[f])>0?o+=a*(n[f]-1):a<0&&(i+=a*(n[f]-1))}return t[0]=i,t[1]=o,t}n(r,"assign",e);export{e as assign,r as default};
//# sourceMappingURL=index.mjs.map

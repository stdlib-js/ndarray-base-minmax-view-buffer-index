"use strict";var s=function(i,v){return function(){return v||i((v={exports:{}}).exports,v),v.exports}};var c=s(function(V,t){
function q(i,v,n){var e,x,m,a,r;for(e=i.length,x=n,m=n,r=0;r<e;r++){if(i[r]===0)return[n,n];a=v[r],a>0?m+=a*(i[r]-1):a<0&&(x+=a*(i[r]-1))}return[x,m]}t.exports=q
});var l=s(function(y,d){
function f(i,v,n,e){var x,m,a,r,u;for(x=i.length,m=n,a=n,u=0;u<x;u++){if(i[u]===0)return e[0]=n,e[1]=n,e;r=v[u],r>0?a+=r*(i[u]-1):r<0&&(m+=r*(i[u]-1))}return e[0]=m,e[1]=a,e}d.exports=f
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),B=l();w(g,"assign",B);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

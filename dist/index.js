"use strict";var s=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var c=s(function(V,t){
function q(i,e,n){var a,x,m,v,r;for(a=i.length,x=n,m=n,r=0;r<a;r++){if(i[r]===0)return[n,n];v=e[r],v>0?m+=v*(i[r]-1):v<0&&(x+=v*(i[r]-1))}return[x,m]}t.exports=q
});var l=s(function(y,d){
function f(i,e,n,a){var x,m,v,r,u;for(x=i.length,m=n,v=n,u=0;u<x;u++){if(i[u]===0)return a[0]=n,a[1]=n,a;r=e[u],r>0?v+=r*(i[u]-1):r<0&&(m+=r*(i[u]-1))}return a[0]=m,a[1]=v,a}d.exports=f
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=c(),B=l();w(g,"assign",B);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

import{a as l}from"./chunk-FDT3V673.js";import{b as f}from"./chunk-Y5E3HJHA.js";import{$ as o,Cc as C,K as p,a as h,b as g,ca as u,fa as m,ka as c,ob as d,u as s}from"./chunk-G6VS4OII.js";var w=(()=>{let i=class i{constructor(r,t){this.http=r,this.snackbar=t,this.apiCarriage="/api/carriage",this.carriages=d([]),this.carriagesMap=C(()=>this.carriages().reduce((e,a)=>g(h({},e),{[a.code]:a,[a.name]:a}),{}))}getCarriages(){return this.http.get(this.apiCarriage).pipe(u(r=>this.carriages.set(r)))}createCarriage(r){return this.http.post(this.apiCarriage,r).pipe(p(t=>(this.snackbar.open(t.error.message,"close",{duration:2e3}),s({error:t}))),o(()=>this.getCarriages()))}updateCarriage(r,t){return this.http.put(`${this.apiCarriage}/${r}`,t).pipe(p(e=>(this.snackbar.open(e.error.message,"close",{duration:2e3}),s({error:e}))),o(()=>this.getCarriages()))}deleteCarriage(r){return this.http.delete(`${this.apiCarriage}/${r}`).pipe(p(t=>(this.snackbar.open(t.error.message,"close",{duration:2e3}),s({error:t}))),o(()=>this.getCarriages()))}};i.\u0275fac=function(t){return new(t||i)(c(f),c(l))},i.\u0275prov=m({token:i,factory:i.\u0275fac,providedIn:"root"});let n=i;return n})();export{w as a};

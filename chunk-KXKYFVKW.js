import{b as I}from"./chunk-MY2BAZRV.js";import{j as f}from"./chunk-XNQEGZ6G.js";import{$ as c,I as p,Y as d,ca as l,ha as n,ib as h,qc as g,s,sc as k,w as a}from"./chunk-743WUKBY.js";var j=(()=>{let t=class t{constructor(i){this.http=i}loadUser(){return this.http.get("/api/profile")}editName(i){return this.http.put("/api/profile",{name:i})}editEmail(i){return this.http.put("/api/profile",{email:i}).pipe(a(e=>({profile:e})),p(e=>s({error:e})))}updatePassword(i){return this.http.put("/api/profile/password",{password:i})}};t.\u0275fac=function(e){return new(e||t)(n(f))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var m="token",U=(()=>{let t=class t{constructor(i,e){this.http=i,this.profileService=e,this.token=h(null),this.isAdmin=h(!1),this.isLoggedIn=g(()=>!!this.token());let o=localStorage.getItem(m);o&&this.token.set(o),k(()=>{let u=this.token();u?localStorage.setItem(m,u):localStorage.removeItem(m)})}login(i,e){return this.http.post("/api/signin",{email:i,password:e}).pipe(c(o=>{this.token.set(o.token)}),d(()=>this.profileService.loadUser()),c(o=>{o.role===I&&this.isAdmin.set(!0)}),a(o=>({user:o})),p(o=>s({error:o})))}logout(){return this.http.delete("/api/logout").pipe(c(()=>{this.token.set(null),this.isAdmin.set(!1)}))}signUp(i,e){return this.http.post("/api/signup",{email:i,password:e}).pipe(p(o=>s({error:o})))}};t.\u0275fac=function(e){return new(e||t)(n(f),n(j))},t.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{j as a,U as b};

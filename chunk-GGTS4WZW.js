import{k as m}from"./chunk-3QW477QG.js";import{Ac as h,J as r,_ as p,a as l,b as u,ba as g,ea as d,ja as f,mb as a,t as o}from"./chunk-BUUJEY2M.js";var y=(()=>{let s=class s{constructor(i){this.http=i,this.stations=a([]),this.stationsMap=h(()=>this.stations().reduce((t,n)=>u(l({},t),{[n.id]:n}),{})),this.lat=a(0),this.lng=a(0),this.relations=a([]),this.relationsLatLngs=h(()=>{let t=this.lat(),n=this.lng();return this.relations().map(j=>{let c=this.stationsMap()[j];return[{lat:t,lng:n},{lat:c.latitude,lng:c.longitude}]})})}getStations(){return this.http.get("/api/station").pipe(g(i=>{this.stations.set(i)}))}createStation(i){return this.http.post("/api/station",i).pipe(r(t=>o({error:t})),p(()=>this.getStations()))}deleteStation(i){return this.http.delete(`/api/station/${i}`).pipe(r(t=>o({error:t})),p(()=>this.getStations()))}};s.\u0275fac=function(t){return new(t||s)(f(m))},s.\u0275prov=d({token:s,factory:s.\u0275fac,providedIn:"root"});let e=s;return e})();export{y as a};

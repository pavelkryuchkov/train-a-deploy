import{$ as v,Ga as h,H as c,X as l,ea as a,ka as f,l as d,o as n}from"./chunk-BUUJEY2M.js";var b=class{constructor(e){this._box=e,this._destroyed=new n,this._resizeSubject=new n,this._elementObservables=new Map,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(s=>this._resizeSubject.next(s)))}observe(e){return this._elementObservables.has(e)||this._elementObservables.set(e,new d(s=>{let r=this._resizeSubject.subscribe(s);return this._resizeObserver?.observe(e,{box:this._box}),()=>{this._resizeObserver?.unobserve(e),r.unsubscribe(),this._elementObservables.delete(e)}}).pipe(c(s=>s.some(r=>r.target===e)),l({bufferSize:1,refCount:!0}),v(this._destroyed))),this._elementObservables.get(e)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},O=(()=>{let e=class e{constructor(){this._observers=new Map,this._ngZone=f(h),typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,r]of this._observers)r.destroy();this._observers.clear(),typeof ResizeObserver<"u"}observe(r,i){let o=i?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new b(o)),this._observers.get(o).observe(r)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{O as a};

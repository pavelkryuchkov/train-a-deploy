import{a as gt,c as Ct}from"./chunk-CVY2MJ75.js";import{a as ft}from"./chunk-LGNUFN6P.js";import{a as O}from"./chunk-MTZAX7NH.js";import{a as rt,g as at}from"./chunk-6S6244GH.js";import{f as J,g as K,i as X,l as Y,m as Z,n as tt,s as et,u as it}from"./chunk-A73FDB7P.js";import{a as st,b as ct}from"./chunk-EXM2XI3D.js";import"./chunk-PJI4OEZA.js";import"./chunk-YP3E4DFS.js";import{a as mt,b as lt,c as pt,d as dt,f as ut}from"./chunk-HAJTOM24.js";import{c as _t}from"./chunk-4D7OLZBK.js";import{a as I,b as $}from"./chunk-NFDW3DZI.js";import{a as P,b as ot,d as R}from"./chunk-4PPTANTY.js";import{a as Q,c as H,d as W}from"./chunk-YNWXQWJD.js";import"./chunk-QDL5SYJ2.js";import"./chunk-3X4PWRWX.js";import"./chunk-5POHLGBV.js";import{V as nt}from"./chunk-IP76CWZZ.js";import"./chunk-Y5E3HJHA.js";import{$b as m,Cb as g,Cc as w,Db as z,Eb as N,Ec as U,Fa as T,Fb as C,Gb as f,Hb as a,Ib as r,Ja as k,Jb as E,Lb as F,Ob as p,Qb as l,Tb as A,Vb as B,Wb as D,Xb as L,ac as y,bb as c,bc as j,cb as S,ic as b,jc as G,kc as q,ob as v,pa as M,vb as _,wa as V,xa as h,xb as d,ya as x}from"./chunk-G6VS4OII.js";var vt=(t,n)=>n.id,wt=(t,n)=>n.name;function Pt(t,n){if(t&1&&(a(0,"mat-option",12),m(1),r()),t&2){let e=n.$implicit;A("value",e.id),c(),y(e.city)}}function Rt(t,n){if(t&1&&C(0,Pt,2,2,"mat-option",12,vt),t&2){let e=l(3);f(e.routesService.stations())}}function Ot(t,n){if(t&1&&(a(0,"mat-option",12),m(1),r()),t&2){let e=n.$implicit;A("value",e.id),c(),y(e.city)}}function Tt(t,n){if(t&1&&C(0,Ot,2,2,"mat-option",12,vt),t&2){let e=l().$index,i=l(2);f(i.cityOptions()[e-1])}}function Et(t,n){if(t&1){let e=F();a(0,"div",4)(1,"mat-form-field",10)(2,"mat-label"),m(3,"Select station"),r(),a(4,"mat-select",11),p("selectionChange",function(){let o=h(e).$index,s=l(2);return x(s.addNewStation(o))}),_(5,Rt,2,0)(6,Tt,2,0),r()()()}if(t&2){let e=n.$index;c(4),d("formControlName",e),c(),g(e===0?5:6)}}function At(t,n){if(t&1&&(a(0,"mat-option",12),m(1),r()),t&2){let e=n.$implicit;A("value",e.name),c(),y(e.name)}}function It(t,n){if(t&1){let e=F();a(0,"div",5)(1,"mat-form-field",10)(2,"mat-label"),m(3,"Select carriage"),r(),a(4,"mat-select",11),p("selectionChange",function(){let o=h(e).$index,s=l(2);return x(s.addNewCarriage(o))}),C(5,At,2,2,"mat-option",12,wt),r()()()}if(t&2){let e=n.$index,i=l(2);c(4),d("formControlName",e),c(),f(i.routesService.carriages())}}function $t(t,n){t&1&&E(0,"mat-spinner",8)}function zt(t,n){if(t&1&&(a(0,"button",9),m(1,"Save route"),r()),t&2){let e=l(2);d("disabled",e.isSubmitDisabled())}}function Nt(t,n){if(t&1){let e=F();a(0,"form",1),p("ngSubmit",function(){h(e);let o=l();return x(o.onSubmit())}),a(1,"div",2)(2,"div",3)(3,"h4"),m(4,"Stations"),r(),C(5,Et,7,2,"div",4,N),r(),a(7,"div",3)(8,"h4"),m(9,"Carriages"),r(),C(10,It,7,1,"div",5,N),r()(),a(12,"div",6)(13,"button",7),p("click",function(){h(e);let o=l();return x(o.onCancel())}),m(14,"Cancel"),r(),_(15,$t,1,0,"mat-spinner",8)(16,zt,2,1,"button",9),r()()}if(t&2){let e=l();d("formGroup",e.form),c(5),f(e.stationsFormArray.controls),c(5),f(e.carriagesFormArray.controls),c(3),d("disabled",e.isLoading()),c(2),g(e.isLoading()?15:16)}}var Vt=3,kt=3,Ft=(()=>{let n=class n{constructor(i,o){this.formBuilder=i,this.routesService=o,this.route=null,this.closeForm=new T,this.selectedCities=v([]),this.selectedCarriages=v([]),this.selectedCarriageCodes=w(()=>this.selectedCarriages().map(s=>this.routesService.carriagesMap()[s].code)),this.cityOptions=w(()=>this.selectedCities().map(s=>this.routesService.stationsMap()[s].connectedTo?.map(u=>this.routesService.stationsMap()[u.id])||[])),this.isSubmitDisabled=w(()=>this.selectedCities().length<Vt||this.selectedCarriages().length<kt),this.isLoading=v(!1),this.form=this.formBuilder.group({selectStation:this.formBuilder.array([this.formBuilder.control("")]),selectCarriage:this.formBuilder.array([this.formBuilder.control("")])}),U(()=>{let s=this.routesService.routes();this.route&&!s.map(u=>u.id).includes(this.route.id)&&this.closeForm.emit()})}ngOnChanges(){this.route&&(this.selectedCities.set(this.route.path),this.selectedCarriages.set(this.route.carriages),this.stationsFormArray.clear(),this.selectedCities().forEach(i=>this.stationsFormArray.push(this.formBuilder.control(i.toString()))),this.stationsFormArray.push(this.formBuilder.control("")),this.carriagesFormArray.clear(),this.selectedCarriages().forEach(i=>this.carriagesFormArray.push(this.formBuilder.control(i))),this.carriagesFormArray.push(this.formBuilder.control("")))}get stationsFormArray(){return this.form.controls.selectStation}get carriagesFormArray(){return this.form.controls.selectCarriage}addNewStation(i){if(i<this.stationsFormArray.controls.length-1)for(let o=this.stationsFormArray.length-1;o>i;o-=1)this.stationsFormArray.removeAt(o);this.stationsFormArray.push(this.formBuilder.control("")),this.selectedCities.set(this.stationsFormArray.value.slice(0,-1).map(o=>Number(o)))}addNewCarriage(i){if(i<this.carriagesFormArray.controls.length-1)for(let o=this.carriagesFormArray.length-1;o>i;o-=1)this.carriagesFormArray.removeAt(o);this.carriagesFormArray.push(this.formBuilder.control("")),this.selectedCarriages.set(this.carriagesFormArray.value.slice(0,-1))}onSubmit(){if(this.isSubmitDisabled())return;this.isLoading.set(!0);let i=this.selectedCities(),o=this.selectedCarriageCodes();if(this.route){this.routesService.updateRoute(this.route.id,i,o).subscribe(()=>{this.isLoading.set(!1),this.closeForm.emit()});return}this.routesService.createRoute(i,o).subscribe(()=>{this.isLoading.set(!1),this.closeForm.emit()})}onCancel(){this.closeForm.emit()}};n.\u0275fac=function(o){return new(o||n)(S(et),S(O))},n.\u0275cmp=M({type:n,selectors:[["app-create-route-form"]],inputs:{route:"route"},outputs:{closeForm:"closeForm"},standalone:!0,features:[V,b],decls:1,vars:1,consts:[[1,"form",3,"formGroup"],[1,"form",3,"ngSubmit","formGroup"],[1,"wrapper"],[1,"form-wrapper"],["formArrayName","selectStation"],["formArrayName","selectCarriage"],[1,"buttons-wrapper"],["mat-button","","type","button",1,"button",3,"click","disabled"],["diameter","40"],["mat-flat-button","","type","submit",1,"button",3,"disabled"],["appearance","outline",1,"dense-5","form-field"],[3,"selectionChange","formControlName"],[3,"value"]],template:function(o,s){o&1&&_(0,Nt,17,3,"form",0),o&2&&g(s.form?0:-1)},dependencies:[at,rt,gt,nt,R,P,$,I,it,X,J,K,Y,tt,Z],styles:["[_nghost-%COMP%]{width:100%}.form[_ngcontent-%COMP%], .form-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:start;align-items:center;width:100%}.form[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .form-wrapper[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{align-self:start}.form-wrapper[_ngcontent-%COMP%]{align-items:stretch;min-width:0}.wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:30px;width:100%;max-width:830px}@media (max-width: 560px){.wrapper[_ngcontent-%COMP%]{gap:10px}}.buttons-wrapper[_ngcontent-%COMP%]{display:flex;gap:10px;margin-top:10px}.button[_ngcontent-%COMP%]{width:auto;font-size:18px}  .mat-mdc-text-field-wrapper{background-color:var(--mdc-outlined-card-container-color)!important}.form-field[_ngcontent-%COMP%]{width:100%;height:50px}"],changeDetection:0});let t=n;return t})();var Bt=t=>["/admin/routes",t],Dt=()=>({fromRoutesPage:!0});function Lt(t,n){if(t&1&&(a(0,"strong",6),m(1),r(),a(2,"strong"),m(3,"\xA0\xA0\u0336\xA0\xA0"),r()),t&2){let e=l().$implicit;c(),y(e)}}function jt(t,n){if(t&1&&(a(0,"strong",6),m(1),r()),t&2){let e=l().$implicit;c(),y(e)}}function Gt(t,n){if(t&1&&(a(0,"span",5),_(1,Lt,4,1)(2,jt,2,1,"strong",6),r()),t&2){let e=n.$index,i=n.$count;c(),g(e!==i-1?1:2)}}function qt(t,n){if(t&1&&(a(0,"strong",6),m(1),r(),a(2,"strong"),m(3,"\xA0\xA0\u0336\xA0\xA0"),r()),t&2){let e=l().$implicit;c(),y(e)}}function Ut(t,n){if(t&1&&(a(0,"strong",6),m(1),r()),t&2){let e=l().$implicit;c(),y(e)}}function Qt(t,n){if(t&1&&(a(0,"span",5),_(1,qt,4,1)(2,Ut,2,1,"strong",6),r()),t&2){let e=n.$index,i=n.$count;c(),g(e!==i-1?1:2)}}var yt=(()=>{let n=class n{constructor(i,o){this.routesService=i,this.dialog=o,this.update=new T}openDialog(){this.dialog.open(ft,{data:{heading:"Delete ride",content:"Would you like to delete this ride?",onDelete:()=>this.routesService.deleteRoute(this.route.id)},width:"350px",enterAnimationDuration:0,exitAnimationDuration:0})}onUpdate(){this.update.emit(this.route)}};n.\u0275fac=function(o){return new(o||n)(S(O),S(_t))},n.\u0275cmp=M({type:n,selectors:[["app-route-card"]],inputs:{route:"route"},outputs:{update:"update"},standalone:!0,features:[b],decls:26,vars:6,consts:[["appearance","outlined"],[1,"buttons-wrapper"],["mat-button","",1,"card-button",3,"click"],["mat-button","","aria-label","button",1,"card-button",3,"routerLink","state"],[1,"delete-icon"],[1,"route-item"],[1,"route-item__name"]],template:function(o,s){o&1&&(a(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),m(3),r(),a(4,"div",1)(5,"button",2),p("click",function(){return s.onUpdate()}),m(6," Update "),a(7,"mat-icon"),m(8,"edit"),r()(),a(9,"a",3)(10,"mat-icon"),m(11,"train"),r(),m(12," Assign\xA0ride "),r(),a(13,"button",2),p("click",function(){return s.openDialog()}),a(14,"mat-icon",4),m(15,"delete"),r()()()(),a(16,"mat-card-subtitle"),m(17,"Cities:"),r(),a(18,"mat-card-content"),C(19,Gt,3,1,"span",5,z),r(),a(21,"mat-card-subtitle"),m(22,"Carriage Types:"),r(),a(23,"mat-card-content"),C(24,Qt,3,1,"span",5,z),r()()),o&2&&(c(3),j("Route ",s.route.id,""),c(6),d("routerLink",q(3,Bt,s.route.id))("state",G(5,Dt)),c(10),f(s.route.cities),c(5),f(s.route.carriages))},dependencies:[mt,ut,lt,pt,dt,ct,st,R,ot,P,W],styles:["[_nghost-%COMP%]{width:100%}.mat-mdc-card-content[_ngcontent-%COMP%]{padding:10px 16px}.mat-mdc-card-header[_ngcontent-%COMP%]{padding:16px;align-items:center;justify-content:space-between}.mat-mdc-card-subtitle[_ngcontent-%COMP%]{padding-left:16px}.buttons-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.card-button[_ngcontent-%COMP%]{padding:10px;border:none;background-color:inherit;font-size:16px;color:#000}.card-button[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{font-size:20px}.delete-icon[_ngcontent-%COMP%]{margin:0}.route-item[_ngcontent-%COMP%]{display:inline-flex;align-items:center}.route-item__name[_ngcontent-%COMP%]{display:inline-block;max-width:270px;overflow:hidden;text-overflow:ellipsis}@media (max-width: 570px){.mat-mdc-card-header[_ngcontent-%COMP%]{flex-direction:column;align-items:start;gap:10px}.buttons-wrapper[_ngcontent-%COMP%]{align-self:center}}@media (max-width: 450px){.mat-mdc-card-content[_ngcontent-%COMP%], .mat-mdc-card-header[_ngcontent-%COMP%]{padding:10px}.mat-mdc-card-subtitle[_ngcontent-%COMP%]{padding-left:10px}.card-button[_ngcontent-%COMP%]{font-size:14px}.card-button[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{margin-right:4px;font-size:18px}}"],changeDetection:0});let t=n;return t})();var Ht=["form"],Wt=(t,n)=>n.id;function Jt(t,n){t&1&&E(0,"mat-spinner",2)}function Kt(t,n){if(t&1){let e=F();a(0,"app-create-route-form",6,0),p("closeForm",function(){h(e);let o=l(2);return x(o.onCloseForm())}),r()}if(t&2){let e=l(2);d("route",e.selectedRoute())}}function Xt(t,n){if(t&1){let e=F();a(0,"button",7),p("click",function(){h(e);let o=l(2);return x(o.showCreateForm())}),m(1,"Create"),r()}}function Yt(t,n){if(t&1){let e=F();a(0,"app-route-card",8),p("update",function(o){h(e);let s=l(2);return x(s.onUpdate(o))}),r()}if(t&2){let e=n.$implicit;d("route",e)}}function Zt(t,n){if(t&1){let e=F();a(0,"mat-paginator",9),p("page",function(o){h(e);let s=l(2);return x(s.onPageChange(o))}),r()}if(t&2){let e=l(2);d("pageIndex",e.currentPage())("length",n)("pageSize",e.pageSize())("pageSizeOptions",e.pageSizes)}}function te(t,n){if(t&1&&(_(0,Kt,2,1,"app-create-route-form",3)(1,Xt,2,0,"button",4),C(2,Yt,1,1,"app-route-card",3,Wt),_(4,Zt,1,4,"mat-paginator",5)),t&2){let e,i=l();g(i.isFormOpen()?0:1),c(2),f(i.paginatorRoutes()),c(2),g((e=i.routesService.routes().length)?4:-1,e)}}var Ne=(()=>{let n=class n{set form(i){i&&(this.formRef=i),i&&this.selectedRoute()&&i.nativeElement.scrollIntoView(!0)}constructor(i,o,s){this.routesService=i,this.router=o,this.activatedRoute=s,this.formRef=null,this.initialPageSize=10,this.pageSizes=[5,10,15],this.currentPage=v(Number(this.activatedRoute.snapshot.queryParamMap.get("page"))||0),this.pageSize=v(Number(this.activatedRoute.snapshot.queryParamMap.get("size"))||this.initialPageSize),this.isFormOpen=v(!1),this.selectedRoute=v(null),this.paginatorRoutes=w(()=>{let u=this.currentPage()*this.pageSize(),Mt=u+this.pageSize();return this.routesService.routes().slice(u,Mt)})}ngOnInit(){this.activatedRoute.queryParamMap.subscribe(i=>{i.has("page")&&this.currentPage.set(Number(i.get("page"))),i.has("size")&&this.pageSize.set(Number(i.get("size")))})}onPageChange(i){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{page:i.pageIndex,size:i.pageSize}})}showCreateForm(){this.isFormOpen.set(!0)}onCloseForm(){this.selectedRoute.set(null),this.isFormOpen.set(!1)}onUpdate(i){this.selectedRoute.set(i),this.isFormOpen.set(!0),this.formRef?.nativeElement.scrollIntoView(!0)}};n.\u0275fac=function(o){return new(o||n)(S(O),S(H),S(Q))},n.\u0275cmp=M({type:n,selectors:[["app-routes-page"]],viewQuery:function(o,s){if(o&1&&B(Ht,5,k),o&2){let u;D(u=L())&&(s.form=u.first)}},standalone:!0,features:[b],decls:3,vars:1,consts:[["form",""],[1,"wrapper"],[1,"spinner"],[3,"route"],["mat-flat-button","",1,"create-button"],["showFirstLastButtons","true",1,"paginator",3,"pageIndex","length","pageSize","pageSizeOptions"],[3,"closeForm","route"],["mat-flat-button","",1,"create-button",3,"click"],[3,"update","route"],["showFirstLastButtons","true",1,"paginator",3,"page","pageIndex","length","pageSize","pageSizeOptions"]],template:function(o,s){o&1&&(a(0,"main",1),_(1,Jt,1,0,"mat-spinner",2)(2,te,5,2),r()),o&2&&(c(),g(s.routesService.isLoading()?1:2))},dependencies:[yt,Ct,R,P,$,I,Ft],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px;width:90%;max-width:1300px;margin:20px auto}.create-button[_ngcontent-%COMP%]{align-self:start;font-size:18px}.paginator[_ngcontent-%COMP%]{margin-bottom:20px;font-size:16px}@media (max-width: 450px){.paginator[_ngcontent-%COMP%]{font-size:14px}}.spinner[_ngcontent-%COMP%]{margin:50px}"],changeDetection:0});let t=n;return t})();export{Ne as RoutesPageComponent};

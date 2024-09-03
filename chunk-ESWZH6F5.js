import{a as Oe,b as ke}from"./chunk-MSLJLYZ7.js";import{a as ue}from"./chunk-EXM2XI3D.js";import{a as we}from"./chunk-KFB3L3HK.js";import{a as Te}from"./chunk-PLFLKSHQ.js";import{a as Pe}from"./chunk-YP3E4DFS.js";import{a as ge,b as he,c as fe}from"./chunk-HAJTOM24.js";import{c as Se}from"./chunk-4D7OLZBK.js";import{a as xe,b as Ce}from"./chunk-NFDW3DZI.js";import{a as _e}from"./chunk-4PPTANTY.js";import{b as me}from"./chunk-EY4EVX2V.js";import"./chunk-NZ5F7AF7.js";import{a as le,c as pe}from"./chunk-YNWXQWJD.js";import"./chunk-QDL5SYJ2.js";import{a as be,b as ve,c as Me,g as Ie}from"./chunk-LJH35O3J.js";import"./chunk-3X4PWRWX.js";import"./chunk-5POHLGBV.js";import"./chunk-IP76CWZZ.js";import{a as H}from"./chunk-Y5E3HJHA.js";import{$ as X,$b as h,Ab as J,Cb as N,Cc as C,Db as R,Eb as te,Ec as re,Fa as ee,Fb as E,Gb as F,Hb as o,Ia as Y,Ib as c,Jb as K,Kc as oe,Lb as D,Lc as se,Ob as k,Oc as ce,Qb as u,Qc as de,a as G,ac as ie,bb as g,bc as M,ca as Z,cb as I,cc as ne,dc as ae,ic as $,jc as j,lc as Q,mc as U,nc as W,ob as b,pa as A,vb as y,xa as T,xb as L,ya as O}from"./chunk-G6VS4OII.js";var q=()=>[],ye=(i,a)=>({occupied:i,selected:a});function Ve(i,a){if(i&1){let n=D();o(0,"div",8),k("click",function(){let t=T(n).ngIf,d=u(3);return O(d.onClick(t))}),h(1),c()}if(i&2){let n,e=a.ngIf,t=u(3);J(Q(3,ye,t.card().occupiedSeats.includes(e),t.selected()&&((n=t.selected())==null?null:n.carId)===t.card().id&&((n=t.selected())==null?null:n.seatNumber)===e)),g(),M(" ",e," ")}}function De(i,a){if(i&1&&y(0,Ve,2,6,"div",7),i&2){let n=a.$index,e=u().$index,t=u();L("ngIf",n+1+e*(t.card().rightSeats+t.card().leftSeats)+t.card().leftSeats)}}function Le(i,a){if(i&1&&(o(0,"div",5),E(1,De,1,1,"div",6,R),c()),i&2){let n=u();g(),F(j(0,q).constructor(n.card().rightSeats))}}function Be(i,a){if(i&1){let n=D();o(0,"div",8),k("click",function(){let t=T(n).ngIf,d=u(3);return O(d.onClick(t))}),h(1),c()}if(i&2){let n,e=a.ngIf,t=u(3);J(Q(3,ye,t.card().occupiedSeats.includes(e),t.selected()&&((n=t.selected())==null?null:n.carId)===t.card().id&&((n=t.selected())==null?null:n.seatNumber)===e)),g(),M(" ",e," ")}}function Re(i,a){if(i&1&&y(0,Be,2,6,"div",7),i&2){let n=a.$index,e=u().$index,t=u();L("ngIf",n+1+e*(t.card().rightSeats+t.card().leftSeats))}}function je(i,a){if(i&1&&(o(0,"div",5),E(1,Re,1,1,"div",6,R),c()),i&2){let n=u();g(),F(j(0,q).constructor(n.card().leftSeats))}}var Ee=(()=>{let a=class a{constructor(){this.seatSelected=new ee,this.card=Y.required(),this.selected=Y.required(),this.seats=C(()=>(this.card().leftSeats+this.card().rightSeats)*this.card().rows-this.card().occupiedSeats.length)}onClick(e){this.card().occupiedSeats.includes(e)||this.seatSelected.emit({carId:this.card().id,seatNumber:e})}};a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=A({type:a,selectors:[["app-carriage-card"]],inputs:{card:[1,"card"],selected:[1,"selected"]},outputs:{seatSelected:"seatSelected"},standalone:!0,features:[$],decls:16,vars:4,consts:[["appearance","outlined",1,"card-wrapper"],[1,"title"],[1,"title__seats"],[1,"carriage-schema"],[1,"seats"],[1,"row"],[1,"seat",3,"class"],["class","seat",3,"class","click",4,"ngIf"],[1,"seat",3,"click"]],template:function(t,d){t&1&&(o(0,"mat-card",0)(1,"mat-card-title",1)(2,"span"),h(3),c(),o(4,"div",2),h(5),c()(),o(6,"mat-card-content")(7,"div",3)(8,"div",4),h(9," R "),E(10,Le,3,1,"div",5,R),c(),o(12,"div",4),h(13," L "),E(14,je,3,1,"div",5,R),c()()()()),t&2&&(g(3),M("Car ",d.card().id+1,""),g(2),M("",d.seats()," seats"),g(5),F(j(2,q).constructor(d.card().rows)),g(4),F(j(3,q).constructor(d.card().rows)))},dependencies:[ge,he,fe,ce],styles:[".card-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow-x:auto}.title[_ngcontent-%COMP%]{display:flex;justify-content:start;align-items:center;gap:10px;margin:16px;font-size:18px;font-weight:700}.title__seats[_ngcontent-%COMP%]{font-weight:400;padding:0 10px;border:solid 1px rgb(158,158,158);border-radius:50px}.carriage-schema[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;gap:20px;margin-right:16px;padding:16px 64px 16px 48px;border:1px solid rgb(201,201,201);border-radius:16px}.carriage-schema[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]{display:flex;gap:5px;align-items:center}.carriage-schema[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{display:flex;flex-direction:column-reverse;gap:5px}.carriage-schema[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:30px;height:30px;background-color:#003c7c;color:#fff;border-radius:5px;cursor:pointer;-webkit-user-select:none;user-select:none}@media (max-width: 650px){.carriage-schema[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .seat[_ngcontent-%COMP%]{width:20px;height:20px;font-size:.7rem}}.carriage-schema[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .occupied[_ngcontent-%COMP%]{background-color:#b4b4b4;cursor:default}.carriage-schema[_ngcontent-%COMP%]   .seats[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{background-color:#e6b412}@media (max-width: 650px){.carriage-schema[_ngcontent-%COMP%]{padding:10px 40px 10px 24px}}"],changeDetection:0});let i=a;return i})();var Ae=(i,a)=>a.id;function Ne(i,a){i&1&&K(0,"mat-spinner",0)}function $e(i,a){if(i&1&&(o(0,"div",17)(1,"span",18)(2,"span",19),h(3),c(),h(4),c(),o(5,"span",20),h(6),c()()),i&2){let n=u().$implicit,e=u(2);g(3),M("Carriage type ",e.carriagesMap()[n].name,""),g(),M(":\xA0",e.availableSeats()[n]," "),g(2),M("$",e.prices()[n],"")}}function He(i,a){if(i&1){let n=D();o(0,"app-carriage-card",21),k("seatSelected",function(t){T(n);let d=u(3);return O(d.onSeatSelect(t))}),c()}if(i&2){let n=a.$implicit,e=u(3);L("card",n)("selected",e.selectedSeat())}}function qe(i,a){if(i&1&&(o(0,"mat-tab",11),y(1,$e,7,3,"ng-template",14),o(2,"div",15),E(3,He,1,2,"app-carriage-card",16,Ae),c()()),i&2){let n=u(2);g(3),F(n.filteredCards())}}function ze(i,a){if(i&1&&(o(0,"span",13),h(1),c()),i&2){let n=u(2);g(),ie(n.bookingMessage())}}function Ge(i,a){i&1&&(o(0,"button",23),K(1,"mat-spinner",25),c()),i&2&&L("disabled",!0)}function Ye(i,a){if(i&1){let n=D();o(0,"button",26),k("click",function(){T(n);let t=u(3);return O(t.onBookSeat())}),h(1,"Book seat"),c()}}function Je(i,a){if(i&1&&(o(0,"div",22)(1,"span"),h(2),c(),o(3,"span"),h(4),c()(),y(5,Ge,2,1,"button",23)(6,Ye,2,0,"button",24)),i&2){let n,e=u(2);g(2),ne("Car\xA0",(((n=e.selectedSeat())==null?null:n.carId)||0)+1,",\xA0Seat\xA0",(n=e.selectedSeat())==null?null:n.seatNumber,""),g(2),M("$",e.prices()[e.carriageTypes()[e.selectedTab()]],""),g(),N(e.isBooking()?5:6)}}function Ke(i,a){if(i&1){let n=D();o(0,"header",1)(1,"button",2),k("click",function(){T(n);let t=u();return O(t.onGoBack())}),o(2,"mat-icon",3),h(3,"arrow_back"),c()(),o(4,"div",4)(5,"div",5),h(6),U(7,"date"),U(8,"date"),c(),o(9,"div",6)(10,"span"),h(11),c(),o(12,"button",7),k("click",function(){T(n);let t=u();return O(t.onOpenDialog())}),h(13," Route "),o(14,"mat-icon",8),h(15,"keyboard_arrow_down"),c()()()()(),o(16,"main",9)(17,"mat-tab-group",10),k("selectedIndexChange",function(t){T(n);let d=u();return O(d.onTabChange(t))}),E(18,qe,5,0,"mat-tab",11,te),c(),o(20,"div",12),y(21,ze,2,1,"span",13)(22,Je,7,4),c()()}if(i&2){let n=u();g(6),ae(" ",n.stations().from,"\xA0\u2192\xA0",n.stations().to,"\xA0(",W(7,6,n.tripTime().departure,"MMM d, HH:mm"),"\xA0\u2192\xA0",W(8,9,n.tripTime().arrival,"MMM d, HH:mm"),") "),g(5),M("Ride ",n.rideId(),""),g(7),F(n.carriageTypes()),g(3),N(n.selectedSeat()?22:21)}}var It=(()=>{let a=class a{constructor(e,t,d,w,B,S,V,v,f){this.stationsService=e,this.carriagesService=t,this.searchService=d,this.ordersService=w,this.authService=B,this.router=S,this.activatedRoute=V,this.location=v,this.dialog=f,this.rideId=b(null),this.fromId=b(null),this.toId=b(null),this.isLoadingStations=b(!1),this.isLoadingCarriages=b(!1),this.isLoadingRide=b(!1),this.isLoading=C(()=>this.isLoadingRide()||this.isLoadingStations()||this.isLoadingCarriages()),this.selectedTab=b(0),this.selectedSeat=b(null),this.isBooking=b(!1),this.bookingMessage=b("Please select an available seat"),this.ride=b(null),this.carriages=this.carriagesService.carriages,this.carriagesMap=this.carriagesService.carriagesMap,this.stations=C(()=>{let r=this.fromId(),s=this.toId(),l=this.stationsService.stationsMap(),p={from:"",to:""};return!r||!s||(p.from=l[r]?.city,p.to=l[s]?.city),p}),this.segmentIds=C(()=>{let r=this.fromId(),s=this.toId(),l=this.ride(),p={start:0,end:0};return!l||!r||!s||(p.start=l.path.findIndex(m=>m===r),p.end=l.path.findIndex(m=>m===s)),p}),this.tripTime=C(()=>{let r=this.segmentIds(),s=this.ride();return s?{departure:s.schedule.segments[r.start].time[0],arrival:s.schedule.segments[r.end-1].time[1]}:{departure:"",arrival:""}}),this.carriageTypes=C(()=>{let r=this.ride();return r?Array.from(new Set(r.carriages)):[]}),this.prices=C(()=>{let r=this.ride(),s=this.segmentIds();return r?r.schedule.segments.reduce((l,p,m)=>{if(m<s.start||m>=s.end)return l;let _=G({},l);return Object.entries(p.price).forEach(([x,P])=>{_[x]||(_[x]=0),_[x]+=P}),_},{}):{}}),this.seatOffsets=C(()=>{let r=this.ride(),s=this.carriagesMap();return r?r.carriages.reduce((l,p,m,_)=>{if(l.length===0)return[0];let x=s[_[m-1]],P=(x.leftSeats+x.rightSeats)*x.rows;return[...l,l[m-1]+P]},[]):[]}),this.occupiedSeatsSet=C(()=>{let r=this.ride(),s=this.segmentIds();return r?r.schedule.segments.reduce((l,p,m)=>(m<s.start||m>=s.end||p.occupiedSeats.forEach(_=>l.add(_)),l),new Set):new Set}),this.occupiedSeats=C(()=>{let r=this.ride(),s=this.seatOffsets(),l=this.occupiedSeatsSet();return r?r.carriages.map((p,m)=>{let[_,x]=[s[m]+1,s[m+1]||Number.POSITIVE_INFINITY],P=[];return l.forEach(z=>{z>=_&&z<=x&&P.push(z-_+1)}),P}):[]}),this.availableSeats=C(()=>{let r=this.occupiedSeats(),s=this.ride(),l=this.carriagesMap();return s?s.carriages.map((p,m)=>{let _=l[p],x=(_.leftSeats+_.rightSeats)*_.rows-r[m].length;return{code:p,seats:x}},[]).reduce((p,m)=>{let _=G({},p);return _[m.code]||(_[m.code]=0),_[m.code]+=m.seats,_},{}):{}}),this.carriageCards=C(()=>{let r=this.fromId(),s=this.toId(),l=this.ride(),p=this.carriagesMap(),m=this.occupiedSeats(),_=[];return!l||!r||!s||l.carriages.forEach((x,P)=>{_.push({id:P,code:x,rows:p[x]?.rows,leftSeats:p[x]?.leftSeats,rightSeats:p[x]?.rightSeats,occupiedSeats:m[P]||[]})}),_}),this.filteredCards=C(()=>{let r=this.carriageTypes()[this.selectedTab()];return this.carriageCards().filter(s=>s.code===r)}),re(()=>{let r=this.segmentIds();(r.start===-1||r.end===-1)&&this.router.navigate(["/"])})}ngOnInit(){let e=this.activatedRoute.snapshot.paramMap.get("rideId"),t=this.activatedRoute.snapshot.queryParamMap.get("from"),d=this.activatedRoute.snapshot.queryParamMap.get("to");if(this.rideId.set(e?Number(e):null),this.fromId.set(t?Number(t):null),this.toId.set(d?Number(d):null),!this.rideId()||!this.fromId()||!this.toId()){this.router.navigate(["/"]);return}this.isLoadingRide.set(!0),this.searchService.getRide(this.rideId()).subscribe(w=>{if(this.isLoadingRide.set(!1),w instanceof H){this.router.navigate(["/"]);return}this.ride.set(w)}),this.isLoadingStations.set(!0),this.stationsService.getStations().subscribe(()=>{this.isLoadingStations.set(!1)}),this.isLoadingCarriages.set(!0),this.carriagesService.getCarriages().subscribe(()=>{this.isLoadingCarriages.set(!1)})}onGoBack(){this.location.back()}onOpenDialog(){let e=this.ride(),t=this.segmentIds(),d=this.stations(),w=this.stationsService.stationsMap();if(!e)return;let B=e.path.slice(t.start,t.end+1).map(f=>w[f].city),S=e.schedule.segments.slice(t.start,t.end).flatMap(f=>f.time).map(f=>se(f,"MMM d, HH:mm","en")),V=[[S[0]]],v=["first station"];for(let f=1;f<S.length;f+=2)f!==S.length-1?(V.push([S[f],S[f+1]]),v.push(`${(new Date(S[f+1]).getTime()-new Date(S[f]).getTime())/1e3/60}m`)):(V.push([S[f]]),v.push("last station"));this.dialog.open(Oe,{data:{routeId:e.routeId,path:B,time:V,stopTime:v,from:d.from,to:d.to},enterAnimationDuration:0,exitAnimationDuration:0})}onTabChange(e){this.selectedTab.set(e)}onSeatSelect(e){this.selectedSeat.set(e)}onBookSeat(){let e=this.rideId(),t=this.fromId(),d=this.toId(),w=this.selectedSeat();if(!w||!e||!t||!d)return;if(!this.authService.isLoggedIn()){this.router.navigate(["/signin"]);return}let{carId:B,seatNumber:S}=w,V=this.seatOffsets()[B]+S;this.isBooking.set(!0),this.ordersService.createOrder(V,e,t,d).pipe(Z(v=>{v instanceof H?this.bookingMessage.set(v.error.message):this.bookingMessage.set("Seat has been successfully booked")}),X(()=>this.searchService.getRide(this.rideId()))).subscribe(v=>{this.selectedSeat.set(null),this.isBooking.set(!1),!(v instanceof H)&&this.ride.set(v)})}};a.\u0275fac=function(t){return new(t||a)(I(Pe),I(Te),I(ke),I(we),I(me),I(pe),I(le),I(oe),I(Se))},a.\u0275cmp=A({type:a,selectors:[["app-trip-page"]],standalone:!0,features:[$],decls:2,vars:1,consts:[[1,"spinner"],[1,"header"],["mat-button","",3,"click"],[1,"icon"],[1,"header__content"],[1,"header__route"],[1,"header__ride"],["mat-button","",1,"button","modal",3,"click"],[1,"icon","modal"],[1,"main"],["animationDuration","0ms",1,"tab-group",3,"selectedIndexChange"],[1,"tab"],[1,"book"],[1,"book__error"],["mat-tab-label",""],[1,"cards-list"],[3,"card","selected"],[1,"tab__label"],[1,"tab__heading"],[1,"tab__carriage"],[1,"tab__price"],[3,"seatSelected","card","selected"],[1,"book__title"],["mat-button","",3,"disabled"],["mat-flat-button",""],["diameter","35",1,"spinner"],["mat-flat-button","",3,"click"]],template:function(t,d){t&1&&y(0,Ne,1,0,"mat-spinner",0)(1,Ke,23,12),t&2&&N(d.isLoading()?0:1)},dependencies:[Ee,ue,_e,Ce,xe,Ie,be,ve,Me,de],styles:["[_nghost-%COMP%]{display:block;max-width:1300px;margin:0 auto;padding:20px}.spinner[_ngcontent-%COMP%]{margin:50px auto}.icon[_ngcontent-%COMP%]{width:24px!important;height:24px!important;margin:0!important;font-size:24px!important}.header[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:1px solid #ccc;font-weight:800}.main[_ngcontent-%COMP%]{display:flex;align-items:end;justify-content:space-around;gap:30px;margin:20px 0}@media (max-width: 920px){.main[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}}.tab-group[_ngcontent-%COMP%]{min-width:0}.tab__label[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:5px}.tab__heading[_ngcontent-%COMP%]{display:flex;align-items:center;font-weight:800}.tab__carriage[_ngcontent-%COMP%], .tab__price[_ngcontent-%COMP%]{display:inline-block;max-width:180px;overflow:hidden;text-overflow:ellipsis}.tab__price[_ngcontent-%COMP%]{max-width:150px}.cards-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px;margin-top:20px}.book[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:20px;gap:15px;border:1px solid #ccc;border-radius:12px;font-size:14px;position:sticky;bottom:24px;min-width:170px}.book__title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-bottom:7px;border-bottom:1px solid #ccc}.book__error[_ngcontent-%COMP%]{max-width:170px;text-align:center}@media (max-width: 920px){.book__error[_ngcontent-%COMP%]{max-width:100%}}@media (max-width: 920px){.book[_ngcontent-%COMP%]{padding:20px 50px;position:static}}@media (max-width: 600px){.book[_ngcontent-%COMP%]{padding:20px 30px}}.hidden[_ngcontent-%COMP%]{visibility:hidden}"],changeDetection:0});let i=a;return i})();export{It as TripPageComponent};

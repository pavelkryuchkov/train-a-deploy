import{a as te}from"./chunk-2ZYPYQTJ.js";import{a as ie}from"./chunk-DEIM6JNK.js";import{b as $,c as ee}from"./chunk-YOAMI3N4.js";import{a as K,b as W,c as X,d as z,g as J,h as Q}from"./chunk-IKMVUJNL.js";import{b as H,d as u,f as T,g as V,i as k,l as A,n as D,q as O,s as R,t as B,v as G,w as j,x as Y,y as Z}from"./chunk-KPGKNEKV.js";import{b as L}from"./chunk-XSO67NWP.js";import{a as q,c as F}from"./chunk-MY2BAZRV.js";import"./chunk-DRZVAW2P.js";import"./chunk-LMFO4SR4.js";import{r as U,s as N}from"./chunk-IY75RYOY.js";import{$b as i,Ab as d,Fb as t,Gb as r,Hb as v,Ob as b,ab as o,ac as w,bb as h,hc as x,ic as I,mb as S,oa as P,tb as _,ub as M,vb as s}from"./chunk-JJOTIYVZ.js";var E=class{isErrorState(a){return!!(a&&a.value&&a.invalid)}};var ne=()=>["/signin"];function ae(n,a){n&1&&(t(0,"mat-error"),i(1,"Account with this email already exists"),r())}function oe(n,a){n&1&&(t(0,"mat-error"),i(1,"Incorrect email"),r())}function me(n,a){n&1&&(t(0,"mat-error"),i(1,"Email is "),t(2,"strong"),i(3,"required"),r()())}function le(n,a){n&1&&(t(0,"mat-error"),i(1,"Password must be at least 8 characters long"),r())}function se(n,a){n&1&&(t(0,"mat-error"),i(1,"Password is "),t(2,"strong"),i(3,"required"),r()())}function de(n,a){n&1&&(t(0,"mat-error"),i(1,"Passwords do not match"),r())}var Le=(()=>{let a=class a{constructor(l,m,e){this.formBuilder=l,this.authService=m,this.router=e,this.hide=S(!0),this.confirmHide=S(!0),this.isLoading=S(!1),this.form=this.formBuilder.group({email:["",[u.required,u.pattern(q)]],password:["",[u.required,ie(8),this.matchValidator("confirmPassword",!0)]],confirmPassword:["",[u.required,this.matchValidator("password")]]}),this.onChangeMatcher=new E,this.onSubmitMatcher=new te}onSubmit(){if(this.form.invalid)return;let l=this.form.get("email").value,m=this.form.get("password").value;this.isLoading.set(!0),this.authService.signUp(l,m).subscribe(e=>{if(this.isLoading.set(!1),e.error?.error.reason===F.invalidUniqueKey){this.form.get("email")?.setErrors({userExists:!0});return}this.router.navigate(["/signin"])})}matchValidator(l,m){return e=>e.parent&&m?((e.parent?.controls)[l]?.updateValueAndValidity(),null):e.parent&&e.parent.value&&e.value===(e.parent?.controls)[l].value?null:{matching:!0}}};a.\u0275fac=function(m){return new(m||a)(h(O),h(L),h(U))},a.\u0275cmp=P({type:a,selectors:[["app-sign-up-page"]],standalone:!0,features:[x],decls:34,vars:21,consts:[[1,"form",3,"submit","formGroup"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com",3,"errorStateMatcher"],["matInput","","formControlName","password",3,"type","errorStateMatcher"],["type","button","mat-icon-button","","matSuffix","",3,"click"],[1,"example-full-width"],["matInput","","formControlName","confirmPassword",3,"type","errorStateMatcher"],[1,"wrapper"],["type","submit","mat-flat-button","",1,"submit-button",3,"disabled"],[3,"routerLink"]],template:function(m,e){if(m&1&&(t(0,"form",0),b("submit",function(){return e.onSubmit()}),t(1,"h2"),i(2,"Sign Up"),r(),t(3,"mat-form-field")(4,"mat-label"),i(5,"Email"),r(),v(6,"input",1),_(7,ae,2,0,"mat-error")(8,oe,2,0,"mat-error")(9,me,4,0,"mat-error"),r(),t(10,"mat-form-field")(11,"mat-label"),i(12,"Enter your password"),r(),v(13,"input",2),t(14,"mat-hint"),i(15,"Use at least 8 characters"),r(),_(16,le,2,0,"mat-error")(17,se,4,0,"mat-error"),t(18,"button",3),b("click",function(){return e.hide.set(!e.hide())}),t(19,"mat-icon"),i(20),r()()(),t(21,"mat-form-field",4)(22,"mat-label"),i(23,"Confirm your password"),r(),v(24,"input",5),_(25,de,2,0,"mat-error"),t(26,"button",3),b("click",function(){return e.confirmHide.set(!e.confirmHide())}),t(27,"mat-icon"),i(28),r()()(),t(29,"div",6)(30,"button",7),i(31," Register "),r(),t(32,"a",8),i(33,"Sign In"),r()()()),m&2){let p,c,C,f,y,g;s("formGroup",e.form),o(6),s("errorStateMatcher",e.onSubmitMatcher),o(),d((p=e.form.get("email"))!=null&&p.hasError("userExists")?7:-1),o(),d((c=e.form.get("email"))!=null&&c.hasError("pattern")&&!((c=e.form.get("email"))!=null&&c.hasError("required"))?8:-1),o(),d((C=e.form.get("email"))!=null&&C.hasError("required")?9:-1),o(4),s("type",e.hide()?"password":"text")("errorStateMatcher",e.onSubmitMatcher),o(3),d((f=e.form.get("password"))!=null&&f.hasError("minlength")&&!((f=e.form.get("password"))!=null&&f.hasError("required"))?16:-1),o(),d((y=e.form.get("password"))!=null&&y.hasError("required")?17:-1),o(),M("aria-label","Hide password")("aria-pressed",e.hide()),o(2),w(e.hide()?"visibility_off":"visibility"),o(4),s("type",e.confirmHide()?"password":"text")("errorStateMatcher",e.onChangeMatcher),o(),d((g=e.form.get("confirmPassword"))!=null&&g.hasError("matching")&&!((g=e.form.get("confirmPassword"))!=null&&g.hasError("required"))?25:-1),o(),M("aria-label","Hide password")("aria-pressed",e.confirmHide()),o(2),w(e.confirmHide()?"visibility_off":"visibility"),o(2),s("disabled",e.form.invalid||e.isLoading()),o(2),s("routerLink",I(20,ne))}},dependencies:[Q,J,K,X,W,z,ee,$,R,k,H,T,V,A,D,j,B,G,Z,Y,N],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin:0 auto;max-width:400px;padding:20px}.wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;gap:15px}.wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 10px;color:#000}.submit-button[_ngcontent-%COMP%]{flex-grow:1}"],changeDetection:0});let n=a;return n})();export{Le as SignUpPageComponent};

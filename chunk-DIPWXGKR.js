import{i as Z}from"./chunk-R2JWF2V3.js";import{A as K,B as U,E as Mt,F as Y,N as Bt,a as N,c as It,j as Dt,p as Rt,v as Pt,z as Lt}from"./chunk-GMA6RKRR.js";import{o as wt,q as Ct,r as xt}from"./chunk-RB7LEZIG.js";import{Aa as z,Ab as m,Ba as W,Bb as h,Cb as w,D as S,Da as T,E as dt,Eb as kt,F as O,G as lt,Gb as C,Ib as j,Ja as A,Jb as V,K as mt,Lb as Tt,Mb as x,Nb as v,Ob as y,Rb as I,Sb as L,W as bt,Wb as D,X as H,Xa as g,Y as ht,Ya as s,Z as b,da as pt,eb as vt,ec as G,fa as ut,ia as E,ic as f,jb as $,jc as q,k as rt,ka as k,la as _t,lb as R,ma as Q,n as B,o as ot,pb as F,q as st,qb as _,rb as yt,s as ct,sa as p,sb as P,ta as u,xa as ft,ya as gt}from"./chunk-3AKBKETS.js";var et=["*"];var Ht=["tabListContainer"],Qt=["tabList"],zt=["tabListInner"],Wt=["nextPaginator"],$t=["previousPaginator"];var Gt=["mat-tab-nav-bar",""],qt=["mat-tab-link",""];var X="mdc-tab-indicator--active",St="mdc-tab-indicator--no-transition",tt=class{constructor(i){this._items=i}hide(){this._items.forEach(i=>i.deactivateInkBar())}alignToElement(i){let M=this._items.find(e=>e.elementRef.nativeElement===i),t=this._currentItem;if(M!==t&&(t?.deactivateInkBar(),M)){let e=t?.elementRef.nativeElement.getBoundingClientRect?.();M.activateInkBar(e),this._currentItem=M}}},Kt=(()=>{let i=class i{constructor(){this._elementRef=E(T),this._fitToContent=!1}get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(X);return}let a=e.getBoundingClientRect(),n=t.width/a.width,r=t.left-a.left;e.classList.add(St),this._inkBarContentElement.style.setProperty("transform",`translateX(${r}px) scaleX(${n})`),e.getBoundingClientRect(),e.classList.remove(St),e.classList.add(X),this._inkBarContentElement.style.setProperty("transform","")}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(X)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement("span"),a=this._inkBarContentElement=t.createElement("span");e.className="mdc-tab-indicator",a.className="mdc-tab-indicator__content mdc-tab-indicator__content--underline",e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;let t=this._fitToContent?this._elementRef.nativeElement.querySelector(".mdc-tab__content"):this._elementRef.nativeElement;t.appendChild(this._inkBarElement)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=Q({type:i,inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",f]},features:[R]});let o=i;return o})();var Et=It({passive:!0}),Ut=650,Yt=100,Zt=(()=>{let i=class i{get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}constructor(t,e,a,n,r,c,d){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=a,this._dir=n,this._ngZone=r,this._platform=c,this._animationMode=d,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new B,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new B,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new z,this.indexFocused=new z,this._sharedResizeObserver=E(Bt),this._injector=E(gt),r.runOutsideAngular(()=>{S(t.nativeElement,"mouseleave").pipe(b(this._destroyed)).subscribe(()=>{this._stopInterval()})})}ngAfterViewInit(){S(this._previousPaginator.nativeElement,"touchstart",Et).pipe(b(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),S(this._nextPaginator.nativeElement,"touchstart",Et).pipe(b(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){let t=this._dir?this._dir.change:ct("ltr"),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(mt(32),b(this._destroyed)),a=this._viewportRuler.change(150).pipe(b(this._destroyed)),n=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new Pt(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(this._selectedIndex),vt(n,{injector:this._injector}),O(t,a,e,this._items.changes,this._itemsResized()).pipe(b(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),n()})}),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(r=>{this.indexFocused.emit(r),this._setTabFocus(r)})}_itemsResized(){return typeof ResizeObserver!="function"?st:this._items.changes.pipe(H(this._items),ht(t=>new rt(e=>this._ngZone.runOutsideAngular(()=>{let a=new ResizeObserver(n=>e.next(n));return t.forEach(n=>a.observe(n.elementRef.nativeElement)),()=>{a.disconnect()}}))),bt(1),lt(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Dt(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()=="ltr"?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()==="ltr"?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,a=(t=="before"?-1:1)*e/3;return this._scrollTo(this._scrollDistance+a)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let a=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:n,offsetWidth:r}=e.elementRef.nativeElement,c,d;this._getLayoutDirection()=="ltr"?(c=n,d=c+r):(d=this._tabListInner.nativeElement.offsetWidth-n,c=d-r);let l=this.scrollDistance,nt=this.scrollDistance+a;c<l?this.scrollDistance-=l-c:d>nt&&(this.scrollDistance+=Math.min(d-nt,c-l))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let t=this._tabListInner.nativeElement.scrollWidth,e=this._elementRef.nativeElement.offsetWidth,a=t-e>=5;a||(this.scrollDistance=0),a!==this._showPaginationControls&&(this._showPaginationControls=a,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){let t=this._tabListInner.nativeElement.scrollWidth,e=this._tabListContainer.nativeElement.offsetWidth;return t-e||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),dt(Ut,Yt).pipe(b(O(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:a,distance:n}=this._scrollHeader(t);(n===0||n>=a)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}};i.\u0275fac=function(e){return new(e||i)(s(T),s(G),s(Z),s(K,8),s(W),s(N),s(A,8))},i.\u0275dir=Q({type:i,inputs:{disablePagination:[2,"disablePagination","disablePagination",f],selectedIndex:[2,"selectedIndex","selectedIndex",q]},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[R]});let o=i;return o})();var Xt=new ut("MAT_TABS_CONFIG");var Ft=0,at=(()=>{let i=class i extends Zt{get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck()}get animationDuration(){return this._animationDuration}set animationDuration(t){let e=t+"";this._animationDuration=/^\d+$/.test(e)?t+"ms":e}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove("mat-tabs-with-background",`mat-background-${this.backgroundColor}`),t&&e.add("mat-tabs-with-background",`mat-background-${t}`),this._backgroundColor=t}constructor(t,e,a,n,r,c,d,l){super(t,n,r,e,a,c,d),this._fitInkBarToContent=new ot(!1),this.stretchTabs=!0,this.disableRipple=!1,this.color="primary",this.disablePagination=l&&l.disablePagination!=null?l.disablePagination:!1,this.fitInkBarToContent=l&&l.fitInkBarToContent!=null?l.fitInkBarToContent:!1,this.stretchTabs=l&&l.stretchTabs!=null?l.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new tt(this._items),this._items.changes.pipe(H(null),b(this._destroyed)).subscribe(()=>{this.updateActiveLink()}),super.ngAfterContentInit()}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this._changeDetectorRef.markForCheck(),this.tabPanel&&(this.tabPanel._activeTabId=t[e].id);return}this.selectedIndex=-1,this._inkBar.hide()}_getRole(){return this.tabPanel?"tablist":this._elementRef.nativeElement.getAttribute("role")}};i.\u0275fac=function(e){return new(e||i)(s(T),s(K,8),s(W),s(G),s(Z),s(N),s(A,8),s(Xt,8))},i.\u0275cmp=k({type:i,selectors:[["","mat-tab-nav-bar",""]],contentQueries:function(e,a,n){if(e&1&&Tt(n,it,5),e&2){let r;v(r=y())&&(a._items=r)}},viewQuery:function(e,a){if(e&1&&(x(Ht,7),x(Qt,7),x(zt,7),x(Wt,5),x($t,5)),e&2){let n;v(n=y())&&(a._tabListContainer=n.first),v(n=y())&&(a._tabList=n.first),v(n=y())&&(a._tabListInner=n.first),v(n=y())&&(a._nextPaginator=n.first),v(n=y())&&(a._previousPaginator=n.first)}},hostAttrs:[1,"mat-mdc-tab-nav-bar","mat-mdc-tab-header"],hostVars:17,hostBindings:function(e,a){e&2&&(F("role",a._getRole()),yt("--mat-tab-animation-duration",a.animationDuration),P("mat-mdc-tab-header-pagination-controls-enabled",a._showPaginationControls)("mat-mdc-tab-header-rtl",a._getLayoutDirection()=="rtl")("mat-mdc-tab-nav-bar-stretch-tabs",a.stretchTabs)("mat-primary",a.color!=="warn"&&a.color!=="accent")("mat-accent",a.color==="accent")("mat-warn",a.color==="warn")("_mat-animation-noopable",a._animationMode==="NoopAnimations"))},inputs:{fitInkBarToContent:[2,"fitInkBarToContent","fitInkBarToContent",f],stretchTabs:[2,"mat-stretch-tabs","stretchTabs",f],animationDuration:"animationDuration",backgroundColor:"backgroundColor",disableRipple:[2,"disableRipple","disableRipple",f],color:"color",tabPanel:"tabPanel"},exportAs:["matTabNavBar","matTabNav"],standalone:!0,features:[R,$,D],attrs:Gt,ngContentSelectors:et,decls:13,vars:8,consts:[["previousPaginator",""],["tabListContainer",""],["tabList",""],["tabListInner",""],["nextPaginator",""],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-before",3,"click","mousedown","touchend","matRippleDisabled","disabled"],[1,"mat-mdc-tab-header-pagination-chevron"],[1,"mat-mdc-tab-link-container",3,"keydown"],[1,"mat-mdc-tab-list",3,"cdkObserveContent"],[1,"mat-mdc-tab-links"],["aria-hidden","true","type","button","mat-ripple","","tabindex","-1",1,"mat-mdc-tab-header-pagination","mat-mdc-tab-header-pagination-after",3,"mousedown","click","touchend","matRippleDisabled","disabled"]],template:function(e,a){if(e&1){let n=kt();j(),m(0,"button",5,0),C("click",function(){return p(n),u(a._handlePaginatorClick("before"))})("mousedown",function(c){return p(n),u(a._handlePaginatorPress("before",c))})("touchend",function(){return p(n),u(a._stopInterval())}),w(2,"div",6),h(),m(3,"div",7,1),C("keydown",function(c){return p(n),u(a._handleKeydown(c))}),m(5,"div",8,2),C("cdkObserveContent",function(){return p(n),u(a._onContentChanges())}),m(7,"div",9,3),V(9),h()()(),m(10,"button",10,4),C("mousedown",function(c){return p(n),u(a._handlePaginatorPress("after",c))})("click",function(){return p(n),u(a._handlePaginatorClick("after"))})("touchend",function(){return p(n),u(a._stopInterval())}),w(12,"div",6),h()}e&2&&(P("mat-mdc-tab-header-pagination-disabled",a._disableScrollBefore),_("matRippleDisabled",a._disableScrollBefore||a.disableRipple)("disabled",a._disableScrollBefore||null),g(10),P("mat-mdc-tab-header-pagination-disabled",a._disableScrollAfter),_("matRippleDisabled",a._disableScrollAfter||a.disableRipple)("disabled",a._disableScrollAfter||null))},dependencies:[Y,Rt],styles:[".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;background:none;border:none;outline:0;padding:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-header-pagination-icon-color, var(--mat-app-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mdc-secondary-navigation-tab-container-height)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-header-divider-height);border-bottom-color:var(--mat-tab-header-divider-color, var(--mat-app-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-header-with-background-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-focus-indicator::before{border-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-header-with-background-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-header-with-background-foreground-color)}"],encapsulation:2});let o=i;return o})(),it=(()=>{let i=class i extends Kt{get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink())}get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}constructor(t,e,a,n,r,c){super(),this._tabNavBar=t,this.elementRef=e,this._focusMonitor=r,this._destroyed=new B,this._isActive=!1,this.disabled=!1,this.disableRipple=!1,this.tabIndex=0,this.id=`mat-tab-link-${Ft++}`,this.rippleConfig=a||{},this.tabIndex=parseInt(n)||0,c==="NoopAnimations"&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),t._fitInkBarToContent.pipe(b(this._destroyed)).subscribe(d=>{this.fitInkBarToContent=d})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute("aria-controls")}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?"true":"false":this.elementRef.nativeElement.getAttribute("aria-selected")}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?"page":null}_getRole(){return this._tabNavBar.tabPanel?"tab":this.elementRef.nativeElement.getAttribute("role")}_getTabIndex(){return this._tabNavBar.tabPanel?this._isActive&&!this.disabled?0:-1:this.disabled?-1:this.tabIndex}};i.\u0275fac=function(e){return new(e||i)(s(at),s(T),s(Mt,8),ft("tabindex"),s(Lt),s(A,8))},i.\u0275cmp=k({type:i,selectors:[["","mat-tab-link",""],["","matTabLink",""]],hostAttrs:[1,"mdc-tab","mat-mdc-tab-link","mat-mdc-focus-indicator"],hostVars:11,hostBindings:function(e,a){e&1&&C("focus",function(){return a._handleFocus()})("keydown",function(r){return a._handleKeydown(r)}),e&2&&(F("aria-controls",a._getAriaControls())("aria-current",a._getAriaCurrent())("aria-disabled",a.disabled)("aria-selected",a._getAriaSelected())("id",a.id)("tabIndex",a._getTabIndex())("role",a._getRole()),P("mat-mdc-tab-disabled",a.disabled)("mdc-tab--active",a.active))},inputs:{active:[2,"active","active",f],disabled:[2,"disabled","disabled",f],disableRipple:[2,"disableRipple","disableRipple",f],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:q(t)],id:"id"},exportAs:["matTabLink"],standalone:!0,features:[R,$,D],attrs:qt,ngContentSelectors:et,decls:5,vars:2,consts:[[1,"mdc-tab__ripple"],["mat-ripple","",1,"mat-mdc-tab-ripple",3,"matRippleTrigger","matRippleDisabled"],[1,"mdc-tab__content"],[1,"mdc-tab__text-label"]],template:function(e,a){e&1&&(j(),w(0,"span",0)(1,"div",1),m(2,"span",2)(3,"span",3),V(4),h()()),e&2&&(g(),_("matRippleTrigger",a.elementRef.nativeElement)("matRippleDisabled",a.rippleDisabled))},dependencies:[Y],styles:['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mdc-secondary-navigation-tab-container-height);font-family:var(--mat-tab-header-label-text-font, var(--mat-app-title-small-font));font-size:var(--mat-tab-header-label-text-size, var(--mat-app-title-small-size));letter-spacing:var(--mat-tab-header-label-text-tracking, var(--mat-app-title-small-tracking));line-height:var(--mat-tab-header-label-text-line-height, var(--mat-app-title-small-line-height));font-weight:var(--mat-tab-header-label-text-weight, var(--mat-app-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mdc-tab-indicator-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-tab-indicator-active-indicator-height);border-radius:var(--mdc-tab-indicator-active-indicator-shape)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-header-inactive-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-header-inactive-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-header-active-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-header-active-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-header-active-hover-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-hover-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-header-active-focus-label-text-color, var(--mat-app-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-header-active-focus-indicator-color, var(--mat-app-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-header-disabled-ripple-color)}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-header-inactive-label-text-color, var(--mat-app-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-header-inactive-ripple-color, var(--mat-app-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}'],encapsulation:2,changeDetection:0});let o=i;return o})(),jt=(()=>{let i=class i{constructor(){this.id=`mat-tab-nav-panel-${Ft++}`}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=k({type:i,selectors:[["mat-tab-nav-panel"]],hostAttrs:["role","tabpanel",1,"mat-mdc-tab-nav-panel"],hostVars:2,hostBindings:function(e,a){e&2&&F("aria-labelledby",a._activeTabId)("id",a.id)},inputs:{id:"id"},exportAs:["matTabNavPanel"],standalone:!0,features:[D],ngContentSelectors:et,decls:1,vars:0,template:function(e,a){e&1&&(j(),V(0))},encapsulation:2,changeDetection:0});let o=i;return o})(),Vt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=_t({type:i}),i.\u0275inj=pt({imports:[U,U]});let o=i;return o})();var qe=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=k({type:i,selectors:[["app-admin-page"]],standalone:!0,features:[D],decls:13,vars:4,consts:[["rlaStations","routerLinkActive"],["rlaCarriages","routerLinkActive"],["rlaRoutes","routerLinkActive"],["tabPanel",""],["mat-tab-nav-bar","",1,"nav-bar",3,"tabPanel"],["mat-tab-link","","routerLink","stations","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","carriages","routerLinkActive","",3,"active"],["mat-tab-link","","routerLink","routes","routerLinkActive","",3,"active"]],template:function(e,a){if(e&1&&(m(0,"nav",4)(1,"a",5,0),L(3,"Stations"),h(),m(4,"a",6,1),L(6,"Carriages"),h(),m(7,"a",7,2),L(9,"Routes"),h()(),m(10,"mat-tab-nav-panel",null,3),w(12,"router-outlet"),h()),e&2){let n=I(2),r=I(5),c=I(8),d=I(11);_("tabPanel",d),g(),_("active",n.isActive),g(3),_("active",r.isActive),g(3),_("active",c.isActive)}},dependencies:[Vt,at,jt,it,wt,Ct,xt],styles:[".nav-bar[_ngcontent-%COMP%]{width:90%;max-width:1300px;margin:10px auto}"],changeDetection:0});let o=i;return o})();export{qe as AdminPageComponent};

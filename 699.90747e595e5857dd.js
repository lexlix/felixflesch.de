"use strict";(self.webpackChunkfelixflesch=self.webpackChunkfelixflesch||[]).push([[699],{4218:(B,E,c)=>{c.d(E,{c:()=>T});var o=c(7587),u=c(3229),i=c(4187),V=c(9808);function O(y,F){if(1&y){const C=o.EpF();o.TgZ(0,"p")(1,"a",4),o.NdJ("click",function(){return o.CHM(C),o.oxw().onEnglishClick()}),o._uU(2,"English"),o.qZA(),o._uU(3," / "),o.TgZ(4,"b"),o._uU(5,"Deutsch"),o.qZA()()}}function p(y,F){if(1&y){const C=o.EpF();o.TgZ(0,"p")(1,"b"),o._uU(2,"English"),o.qZA(),o._uU(3," / "),o.TgZ(4,"a",4),o.NdJ("click",function(){return o.CHM(C),o.oxw().onGermanClick()}),o._uU(5,"Deutsch"),o.qZA()()}}const m=function(){return["/imprint"]},d=function(){return["/dataprotection"]},G=function(){return["/contact"]};let T=(()=>{class y{constructor(C){this.translate=C}getCurrentYear(){return(new Date).getFullYear()}onEnglishClick(){this.translate.use("en"),localStorage.setItem("lang","en")}onGermanClick(){this.translate.use("de"),localStorage.setItem("lang","de")}}return y.\u0275fac=function(C){return new(C||y)(o.Y36(u.sK))},y.\u0275cmp=o.Xpm({type:y,selectors:[["app-footer"]],decls:17,vars:18,consts:[[1,"footer"],[1,"content","has-text-centered"],[3,"routerLink"],[4,"ngIf"],[3,"routerLink","click"]],template:function(C,A){1&C&&(o.TgZ(0,"footer",0)(1,"div",1)(2,"a",2),o._uU(3),o.ALo(4,"translate"),o.qZA(),o._uU(5," - "),o.TgZ(6,"a",2),o._uU(7),o.ALo(8,"translate"),o.qZA(),o._uU(9," - "),o.TgZ(10,"a",2),o._uU(11),o.ALo(12,"translate"),o.qZA(),o.TgZ(13,"p"),o._uU(14),o.qZA(),o.YNc(15,O,6,0,"p",3),o.YNc(16,p,6,0,"p",3),o.qZA()()),2&C&&(o.xp6(2),o.Q6J("routerLink",o.DdM(15,m)),o.xp6(1),o.Oqu(o.lcZ(4,9,"imprint.title")),o.xp6(3),o.Q6J("routerLink",o.DdM(16,d)),o.xp6(1),o.Oqu(o.lcZ(8,11,"dataprotection.title")),o.xp6(3),o.Q6J("routerLink",o.DdM(17,G)),o.xp6(1),o.Oqu(o.lcZ(12,13,"contact.title")),o.xp6(3),o.hij(" \xa9 by Felix Flesch ",A.getCurrentYear()," "),o.xp6(1),o.Q6J("ngIf","de"===A.translate.currentLang),o.xp6(1),o.Q6J("ngIf","en"===A.translate.currentLang))},directives:[i.yS,V.O5],pipes:[u.X$],styles:[".footer[_ngcontent-%COMP%]{color:#727589}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aaabb8}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}"]}),y})()},5905:(B,E,c)=>{c.d(E,{_:()=>O});var o=c(9808),u=c(3229),i=c(4187),V=c(7587);let O=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=V.oAB({type:p}),p.\u0275inj=V.cJS({imports:[[o.ez,u.aw,i.Bz]]}),p})()},44:(B,E,c)=>{c.d(E,{C:()=>o});var o=(()=>{return(u=o||(o={}))[u.HOME=0]="HOME",u[u.PROJECTS=1]="PROJECTS",u[u.CHECKLISTS=2]="CHECKLISTS",u[u.CHANNELSORTER=3]="CHANNELSORTER",u[u.BPMDETECTOR=4]="BPMDETECTOR",u[u.BLOG=5]="BLOG",u[u.DATAPROTECTION=6]="DATAPROTECTION",u[u.IMPRINT=7]="IMPRINT",u[u.CONTACT=8]="CONTACT",o;var u})()},6497:(B,E,c)=>{c.d(E,{w:()=>H});var o=c(44),u=c(1777),i=c(7587),V=c(9808),O=c(4187),p=c(3229);const m=function(){return["/checklists"]},d=function(l){return{"is-active":l}};function G(l,b){if(1&l&&(i.TgZ(0,"a",8),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&l){const h=i.oxw();i.Q6J("routerLink",i.DdM(5,m))("ngClass",i.VKq(6,d,h.currentPage===h.CurrentPage.CHECKLISTS)),i.xp6(1),i.hij(" ",i.lcZ(2,3,"checklists.title")," ")}}const T=function(){return["/channelsorter"]};function y(l,b){if(1&l&&(i.TgZ(0,"a",8),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&l){const h=i.oxw();i.Q6J("routerLink",i.DdM(5,T))("ngClass",i.VKq(6,d,h.currentPage===h.CurrentPage.CHANNELSORTER)),i.xp6(1),i.hij(" ",i.lcZ(2,3,"channelsorter.title")," ")}}const F=function(){return["/bpmdetector"]};function C(l,b){if(1&l&&(i.TgZ(0,"a",8),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&l){const h=i.oxw();i.Q6J("routerLink",i.DdM(5,F))("ngClass",i.VKq(6,d,h.currentPage===h.CurrentPage.BPMDETECTOR)),i.xp6(1),i.hij(" ",i.lcZ(2,3,"bpmdetector.title")," ")}}const A=function(){return["/dataprotection"]};function M(l,b){if(1&l&&(i.TgZ(0,"a",8),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&l){const h=i.oxw();i.Q6J("routerLink",i.DdM(5,A))("ngClass",i.VKq(6,d,h.currentPage===h.CurrentPage.DATAPROTECTION)),i.xp6(1),i.hij(" ",i.lcZ(2,3,"dataprotection.title")," ")}}const L=function(){return["/imprint"]};function g(l,b){if(1&l&&(i.TgZ(0,"a",8),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&l){const h=i.oxw();i.Q6J("routerLink",i.DdM(5,L))("ngClass",i.VKq(6,d,h.currentPage===h.CurrentPage.IMPRINT)),i.xp6(1),i.hij(" ",i.lcZ(2,3,"imprint.title")," ")}}const D=function(){return["/contact"]};function X(l,b){if(1&l&&(i.TgZ(0,"a",8),i._uU(1),i.ALo(2,"translate"),i.qZA()),2&l){const h=i.oxw();i.Q6J("routerLink",i.DdM(5,D))("ngClass",i.VKq(6,d,h.currentPage===h.CurrentPage.CONTACT)),i.xp6(1),i.hij(" ",i.lcZ(2,3,"contact.title")," ")}}const Dt=function(){return["/"]},U=function(){return["/blog"]};let H=(()=>{class l{constructor(){this.CurrentPage=o.C,this.navBarMenuActive=!1}get titleState(){return l.showTitle?"show":"hide"}static checkShowTitle(){l.showTitle=l.currentPage!==o.C.HOME||window.innerWidth<1024||l.scrollPos>300}ngOnInit(){window.addEventListener("scroll",this.onScrollHandler,!0),window.addEventListener("resize",this.onResizeHandler,!0),l.checkShowTitle(),l.currentPage=this.currentPage,l.checkShowTitle()}toggleNavBarMenu(){this.navBarMenuActive=!this.navBarMenuActive}isNavBarMenuActive(){return this.navBarMenuActive}onScrollHandler(h){l.scrollPos=h.srcElement.scrollTop,l.checkShowTitle()}onResizeHandler(){l.checkShowTitle()}}return l.showTitle=!1,l.scrollPos=0,l.\u0275fac=function(h){return new(h||l)},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-nav-bar"]],inputs:{currentPage:"currentPage"},decls:24,vars:29,consts:[[1,"navbar-container"],["role","navigation","aria-label","main navigation",1,"navbar","is-dark"],[1,"navbar-brand"],["href","/",1,"navbar-item","navbar-title"],["role","button","aria-label","menu","aria-expanded","false","data-target","navbar",1,"navbar-burger","burger",3,"ngClass","click"],["aria-hidden","true"],["id","navbar",1,"navbar-menu",3,"ngClass"],[1,"navbar-start"],[1,"navbar-item",3,"routerLink","ngClass"],["class","navbar-item",3,"routerLink","ngClass",4,"ngIf"],[1,"navbar-spacer"]],template:function(h,f){1&h&&(i.TgZ(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),i._uU(4," FELIX FLESCH "),i.qZA(),i.TgZ(5,"a",4),i.NdJ("click",function(){return f.toggleNavBarMenu()}),i._UZ(6,"span",5)(7,"span",5)(8,"span",5),i.qZA()(),i.TgZ(9,"div",6)(10,"div",7)(11,"a",8),i._uU(12),i.ALo(13,"translate"),i.qZA(),i.TgZ(14,"a",8),i._uU(15),i.ALo(16,"translate"),i.qZA(),i.YNc(17,G,3,8,"a",9),i.YNc(18,y,3,8,"a",9),i.YNc(19,C,3,8,"a",9),i.YNc(20,M,3,8,"a",9),i.YNc(21,g,3,8,"a",9),i.YNc(22,X,3,8,"a",9),i.qZA()()()(),i._UZ(23,"div",10)),2&h&&(i.xp6(2),i.Q6J("@titleState",f.titleState),i.xp6(3),i.Q6J("ngClass",i.VKq(19,d,f.isNavBarMenuActive())),i.xp6(4),i.Q6J("ngClass",i.VKq(21,d,f.isNavBarMenuActive())),i.xp6(2),i.Q6J("routerLink",i.DdM(23,Dt))("ngClass",i.VKq(24,d,f.currentPage===f.CurrentPage.HOME)),i.xp6(1),i.hij(" ",i.lcZ(13,15,"home.title")," "),i.xp6(2),i.Q6J("routerLink",i.DdM(26,U))("ngClass",i.VKq(27,d,f.currentPage===f.CurrentPage.BLOG)),i.xp6(1),i.hij(" ",i.lcZ(16,17,"blog.title")," "),i.xp6(2),i.Q6J("ngIf",f.currentPage===f.CurrentPage.CHECKLISTS),i.xp6(1),i.Q6J("ngIf",f.currentPage===f.CurrentPage.CHANNELSORTER),i.xp6(1),i.Q6J("ngIf",f.currentPage===f.CurrentPage.BPMDETECTOR),i.xp6(1),i.Q6J("ngIf",f.currentPage===f.CurrentPage.DATAPROTECTION),i.xp6(1),i.Q6J("ngIf",f.currentPage===f.CurrentPage.IMPRINT),i.xp6(1),i.Q6J("ngIf",f.currentPage===f.CurrentPage.CONTACT))},directives:[V.mk,O.yS,V.O5],pipes:[p.X$],styles:[".navbar-container[_ngcontent-%COMP%]{top:0;position:fixed;width:100%;z-index:999}.navbar-title[_ngcontent-%COMP%]{font-weight:700}.navbar-spacer[_ngcontent-%COMP%]{height:52px}.navbar-menu[_ngcontent-%COMP%]{background-color:#f5f5f5;padding-top:0;padding-bottom:0}"],data:{animation:[(0,u.X$)("titleState",[(0,u.SB)("show",(0,u.oB)({opacity:1})),(0,u.SB)("hide",(0,u.oB)({opacity:0,width:0})),(0,u.eR)("show => hide",(0,u.jt)("300ms ease-out")),(0,u.eR)("hide => show",(0,u.jt)("300ms ease-in"))])]}}),l})()},8809:(B,E,c)=>{c.d(E,{R:()=>O});var o=c(9808),u=c(3229),i=c(4187),V=c(7587);let O=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=V.oAB({type:p}),p.\u0275inj=V.cJS({imports:[[o.ez,u.aw,i.Bz]]}),p})()},3075:(B,E,c)=>{c.d(E,{Fj:()=>A,JJ:()=>Ut,On:()=>mt,u5:()=>_n});var o=c(7587),u=c(9808),i=c(2076),V=c(4128),O=c(4004);let p=(()=>{class n{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),m=(()=>{class n extends p{}return n.\u0275fac=function(){let e;return function(r){return(e||(e=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const d=new o.OlP("NgValueAccessor"),y={provide:d,useExisting:(0,o.Gpc)(()=>A),multi:!0},C=new o.OlP("CompositionEventMode");let A=(()=>{class n extends p{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function F(){const n=(0,u.q)()?(0,u.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(t){this.setProperty("value",null==t?"":t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(C,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,r){1&t&&o.NdJ("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[o._Bn([y]),o.qOj]}),n})();const g=new o.OlP("NgValidators"),D=new o.OlP("NgAsyncValidators");function Ot(n){return null!=n}function Ft(n){const e=(0,o.QGY)(n)?(0,i.D)(n):n;return(0,o.CqO)(e),e}function Nt(n){let e={};return n.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function wt(n,e){return e.map(t=>t(n))}function St(n){return n.map(e=>function Ae(n){return!n.validate}(e)?e:t=>e.validate(t))}function et(n){return null!=n?function Tt(n){if(!n)return null;const e=n.filter(Ot);return 0==e.length?null:function(t){return Nt(wt(t,e))}}(St(n)):null}function nt(n){return null!=n?function Pt(n){if(!n)return null;const e=n.filter(Ot);return 0==e.length?null:function(t){const r=wt(t,e).map(Ft);return(0,V.D)(r).pipe((0,O.U)(Nt))}}(St(n)):null}function Bt(n,e){return null===n?[e]:Array.isArray(n)?[...n,e]:[n,e]}function rt(n){return n?Array.isArray(n)?n:[n]:[]}function q(n,e){return Array.isArray(n)?n.includes(e):n===e}function It(n,e){const t=rt(e);return rt(n).forEach(s=>{q(t,s)||t.push(s)}),t}function Rt(n,e){return rt(e).filter(t=>!q(n,t))}class kt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=et(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=nt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,t){return!!this.control&&this.control.hasError(e,t)}getError(e,t){return this.control?this.control.getError(e,t):null}}class N extends kt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class v extends kt{get formDirective(){return null}get path(){return null}}let Ut=(()=>{class n extends class Lt{constructor(e){this._cd=e}is(e){var t,r,s;return"submitted"===e?!!(null===(t=this._cd)||void 0===t?void 0:t.submitted):!!(null===(s=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===s?void 0:s[e])}}{constructor(t){super(t)}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(N,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,r){2&t&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})();function x(n,e){(function st(n,e){const t=function Gt(n){return n._rawValidators}(n);null!==e.validator?n.setValidators(Bt(t,e.validator)):"function"==typeof t&&n.setValidators([t]);const r=function xt(n){return n._rawAsyncValidators}(n);null!==e.asyncValidator?n.setAsyncValidators(Bt(r,e.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const s=()=>n.updateValueAndValidity();$(e._rawValidators,s),$(e._rawAsyncValidators,s)})(n,e),e.valueAccessor.writeValue(n.value),function Se(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&jt(n,e)})}(n,e),function Pe(n,e){const t=(r,s)=>{e.valueAccessor.writeValue(r),s&&e.viewToModelUpdate(r)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}(n,e),function Te(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&jt(n,e),"submit"!==n.updateOn&&n.markAsTouched()})}(n,e),function we(n,e){if(e.valueAccessor.setDisabledState){const t=r=>{e.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}(n,e)}function $(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function jt(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function ut(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const I="VALID",z="INVALID",P="PENDING",R="DISABLED";function dt(n){return(K(n)?n.validators:n)||null}function Zt(n){return Array.isArray(n)?et(n):n||null}function ht(n,e){return(K(e)?e.asyncValidators:n)||null}function $t(n){return Array.isArray(n)?nt(n):n||null}function K(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}const ft=n=>n instanceof gt;function zt(n){return(n=>n instanceof Xt)(n)?n.value:n.getRawValue()}function Kt(n,e){const t=ft(n),r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")}function Qt(n,e){ft(n),n._forEachChild((r,s)=>{if(void 0===e[s])throw new o.vHH(1002,"")})}class pt{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=e,this._rawAsyncValidators=t,this._composedValidatorFn=Zt(this._rawValidators),this._composedAsyncValidatorFn=$t(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===z}get pending(){return this.status==P}get disabled(){return this.status===R}get enabled(){return this.status!==R}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._rawValidators=e,this._composedValidatorFn=Zt(e)}setAsyncValidators(e){this._rawAsyncValidators=e,this._composedAsyncValidatorFn=$t(e)}addValidators(e){this.setValidators(It(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(It(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Rt(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Rt(e,this._rawAsyncValidators))}hasValidator(e){return q(this._rawValidators,e)}hasAsyncValidator(e){return q(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=P,!1!==e.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=R,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this._updateValue(),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){const t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},e),{skipPristineCheck:t})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===P)&&this._runAsyncValidator(e.emitEvent)),!1!==e.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?R:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=P,this._hasOwnPendingAsyncValidator=!0;const t=Ft(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(!1!==t.emitEvent)}get(e){return function Ie(n,e,t){if(null==e||(Array.isArray(e)||(e=e.split(t)),Array.isArray(e)&&0===e.length))return null;let r=n;return e.forEach(s=>{r=ft(r)?r.controls.hasOwnProperty(s)?r.controls[s]:null:(n=>n instanceof ke)(r)&&r.at(s)||null}),r}(this,e,".")}getError(e,t){const r=t?this.get(t):this;return r&&r.errors?r.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?R:this.errors?z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(P)?P:this._anyControlsHaveStatus(z)?z:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_isBoxedValue(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){K(e)&&null!=e.updateOn&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){return!e&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class Xt extends pt{constructor(e=null,t,r){super(dt(t),ht(r,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),K(t)&&t.initialValueIsDefault&&(this.defaultValue=this._isBoxedValue(e)?e.value:e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ut(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ut(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(e){this._isBoxedValue(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}}class gt extends pt{constructor(e,t,r){super(dt(t),ht(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,r={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Qt(this,e),Object.keys(e).forEach(r=>{Kt(this,r),this.controls[r].setValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(Object.keys(e).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((r,s)=>{r.reset(e[s],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,r)=>(e[r]=zt(t),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,r)=>!!r._syncPendingControls()||t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{const r=this.controls[t];r&&e(r,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(const t of Object.keys(this.controls)){const r=this.controls[t];if(this.contains(t)&&e(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e))}_reduceChildren(e,t){let r=e;return this._forEachChild((s,a)=>{r=t(r,s,a)}),r}_allControlsDisabled(){for(const e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}}class ke extends pt{constructor(e,t,r){super(dt(t),ht(r,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[e]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,r={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),t&&(this.controls.splice(e,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Qt(this,e),e.forEach((r,s)=>{Kt(this,s),this.at(s).setValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){null!=e&&(e.forEach((r,s)=>{this.at(s)&&this.at(s).patchValue(r,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((r,s)=>{r.reset(e[s],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>zt(e))}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_syncPendingControls(){let e=this.controls.reduce((t,r)=>!!r._syncPendingControls()||t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,r)=>{e(t,r)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(const e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}}const He={provide:N,useExisting:(0,o.Gpc)(()=>mt)},ne=(()=>Promise.resolve(null))();let mt=(()=>{class n extends N{constructor(t,r,s,a,_){super(),this._changeDetectorRef=_,this.control=new Xt,this._registered=!1,this.update=new o.vpe,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=function lt(n,e){if(!e)return null;let t,r,s;return Array.isArray(e),e.forEach(a=>{a.constructor===A?t=a:function xe(n){return Object.getPrototypeOf(n.constructor)===m}(a)?r=a:s=a}),s||r||t||null}(0,a)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){const r=t.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),function at(n,e){if(!n.hasOwnProperty("model"))return!1;const t=n.model;return!!t.isFirstChange()||!Object.is(e,t.currentValue)}(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){x(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(t){ne.then(()=>{var r;this.control.setValue(t,{emitViewToModelChange:!1}),null===(r=this._changeDetectorRef)||void 0===r||r.markForCheck()})}_updateDisabled(t){const r=t.isDisabled.currentValue,s=""===r||r&&"false"!==r;ne.then(()=>{var a;s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),null===(a=this._changeDetectorRef)||void 0===a||a.markForCheck()})}_getPath(t){return this._parent?function Y(n,e){return[...e.path,n]}(t,this._parent):[t]}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(v,9),o.Y36(g,10),o.Y36(D,10),o.Y36(d,10),o.Y36(o.sBO,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([He]),o.qOj,o.TTD]}),n})(),oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})(),gn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[oe]]}),n})(),_n=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[gn]}),n})()}}]);
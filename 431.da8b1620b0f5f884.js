"use strict";(self.webpackChunkfelixflesch=self.webpackChunkfelixflesch||[]).push([[431],{4218:(O,_,a)=>{a.d(_,{c:()=>f});var n=a(7587),o=a(3229),t=a(4187),d=a(9808);function C(m,T){if(1&m){const u=n.EpF();n.TgZ(0,"p")(1,"a",4),n.NdJ("click",function(){return n.CHM(u),n.oxw().onEnglishClick()}),n._uU(2,"English"),n.qZA(),n._uU(3," / "),n.TgZ(4,"b"),n._uU(5,"Deutsch"),n.qZA()()}}function s(m,T){if(1&m){const u=n.EpF();n.TgZ(0,"p")(1,"b"),n._uU(2,"English"),n.qZA(),n._uU(3," / "),n.TgZ(4,"a",4),n.NdJ("click",function(){return n.CHM(u),n.oxw().onGermanClick()}),n._uU(5,"Deutsch"),n.qZA()()}}const e=function(){return["/imprint"]},p=function(){return["/dataprotection"]},M=function(){return["/contact"]};let f=(()=>{class m{constructor(u){this.translate=u}getCurrentYear(){return(new Date).getFullYear()}onEnglishClick(){this.translate.use("en"),localStorage.setItem("lang","en")}onGermanClick(){this.translate.use("de"),localStorage.setItem("lang","de")}}return m.\u0275fac=function(u){return new(u||m)(n.Y36(o.sK))},m.\u0275cmp=n.Xpm({type:m,selectors:[["app-footer"]],decls:17,vars:18,consts:[[1,"footer"],[1,"content","has-text-centered"],[3,"routerLink"],[4,"ngIf"],[3,"routerLink","click"]],template:function(u,h){1&u&&(n.TgZ(0,"footer",0)(1,"div",1)(2,"a",2),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5," - "),n.TgZ(6,"a",2),n._uU(7),n.ALo(8,"translate"),n.qZA(),n._uU(9," - "),n.TgZ(10,"a",2),n._uU(11),n.ALo(12,"translate"),n.qZA(),n.TgZ(13,"p"),n._uU(14),n.qZA(),n.YNc(15,C,6,0,"p",3),n.YNc(16,s,6,0,"p",3),n.qZA()()),2&u&&(n.xp6(2),n.Q6J("routerLink",n.DdM(15,e)),n.xp6(1),n.Oqu(n.lcZ(4,9,"imprint.title")),n.xp6(3),n.Q6J("routerLink",n.DdM(16,p)),n.xp6(1),n.Oqu(n.lcZ(8,11,"dataprotection.title")),n.xp6(3),n.Q6J("routerLink",n.DdM(17,M)),n.xp6(1),n.Oqu(n.lcZ(12,13,"contact.title")),n.xp6(3),n.hij(" \xa9 by Felix Flesch ",h.getCurrentYear()," "),n.xp6(1),n.Q6J("ngIf","de"===h.translate.currentLang),n.xp6(1),n.Q6J("ngIf","en"===h.translate.currentLang))},directives:[t.yS,d.O5],pipes:[o.X$],styles:[".footer[_ngcontent-%COMP%]{color:#727589}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aaabb8}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}"]}),m})()},5905:(O,_,a)=>{a.d(_,{_:()=>C});var n=a(9808),o=a(3229),t=a(4187),d=a(7587);let C=(()=>{class s{}return s.\u0275fac=function(p){return new(p||s)},s.\u0275mod=d.oAB({type:s}),s.\u0275inj=d.cJS({imports:[[n.ez,o.aw,t.Bz]]}),s})()},44:(O,_,a)=>{a.d(_,{C:()=>n});var n=(()=>{return(o=n||(n={}))[o.HOME=0]="HOME",o[o.PROJECTS=1]="PROJECTS",o[o.CHECKLISTS=2]="CHECKLISTS",o[o.CHANNELSORTER=3]="CHANNELSORTER",o[o.BPMDETECTOR=4]="BPMDETECTOR",o[o.BLOG=5]="BLOG",o[o.DATAPROTECTION=6]="DATAPROTECTION",o[o.IMPRINT=7]="IMPRINT",o[o.CONTACT=8]="CONTACT",n;var o})()},6497:(O,_,a)=>{a.d(_,{w:()=>U});var n=a(44),o=a(1777),t=a(7587),d=a(9808),C=a(4187),s=a(3229);const e=function(){return["/checklists"]},p=function(r){return{"is-active":r}};function M(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,e))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.CHECKLISTS)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"checklists.title")," ")}}const f=function(){return["/channelsorter"]};function m(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,f))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.CHANNELSORTER)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"channelsorter.title")," ")}}const T=function(){return["/bpmdetector"]};function u(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,T))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.BPMDETECTOR)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"bpmdetector.title")," ")}}const h=function(){return["/dataprotection"]};function i(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,h))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.DATAPROTECTION)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"dataprotection.title")," ")}}const v=function(){return["/imprint"]};function g(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,v))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.IMPRINT)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"imprint.title")," ")}}const Z=function(){return["/contact"]};function E(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,Z))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.CONTACT)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"contact.title")," ")}}const A=function(){return["/"]},x=function(){return["/blog"]};let U=(()=>{class r{constructor(){this.CurrentPage=n.C,this.navBarMenuActive=!1}get titleState(){return r.showTitle?"show":"hide"}static checkShowTitle(){r.showTitle=r.currentPage!==n.C.HOME||window.innerWidth<1024||r.scrollPos>300}ngOnInit(){window.addEventListener("scroll",this.onScrollHandler,!0),window.addEventListener("resize",this.onResizeHandler,!0),r.checkShowTitle(),r.currentPage=this.currentPage,r.checkShowTitle()}toggleNavBarMenu(){this.navBarMenuActive=!this.navBarMenuActive}isNavBarMenuActive(){return this.navBarMenuActive}onScrollHandler(c){r.scrollPos=c.srcElement.scrollTop,r.checkShowTitle()}onResizeHandler(){r.checkShowTitle()}}return r.showTitle=!1,r.scrollPos=0,r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-nav-bar"]],inputs:{currentPage:"currentPage"},decls:24,vars:29,consts:[[1,"navbar-container"],["role","navigation","aria-label","main navigation",1,"navbar","is-dark"],[1,"navbar-brand"],["href","/",1,"navbar-item","navbar-title"],["role","button","aria-label","menu","aria-expanded","false","data-target","navbar",1,"navbar-burger","burger",3,"ngClass","click"],["aria-hidden","true"],["id","navbar",1,"navbar-menu",3,"ngClass"],[1,"navbar-start"],[1,"navbar-item",3,"routerLink","ngClass"],["class","navbar-item",3,"routerLink","ngClass",4,"ngIf"],[1,"navbar-spacer"]],template:function(c,l){1&c&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),t._uU(4," FELIX FLESCH "),t.qZA(),t.TgZ(5,"a",4),t.NdJ("click",function(){return l.toggleNavBarMenu()}),t._UZ(6,"span",5)(7,"span",5)(8,"span",5),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"a",8),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"a",8),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.YNc(17,M,3,8,"a",9),t.YNc(18,m,3,8,"a",9),t.YNc(19,u,3,8,"a",9),t.YNc(20,i,3,8,"a",9),t.YNc(21,g,3,8,"a",9),t.YNc(22,E,3,8,"a",9),t.qZA()()()(),t._UZ(23,"div",10)),2&c&&(t.xp6(2),t.Q6J("@titleState",l.titleState),t.xp6(3),t.Q6J("ngClass",t.VKq(19,p,l.isNavBarMenuActive())),t.xp6(4),t.Q6J("ngClass",t.VKq(21,p,l.isNavBarMenuActive())),t.xp6(2),t.Q6J("routerLink",t.DdM(23,A))("ngClass",t.VKq(24,p,l.currentPage===l.CurrentPage.HOME)),t.xp6(1),t.hij(" ",t.lcZ(13,15,"home.title")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(26,x))("ngClass",t.VKq(27,p,l.currentPage===l.CurrentPage.BLOG)),t.xp6(1),t.hij(" ",t.lcZ(16,17,"blog.title")," "),t.xp6(2),t.Q6J("ngIf",l.currentPage===l.CurrentPage.CHECKLISTS),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.CHANNELSORTER),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.BPMDETECTOR),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.DATAPROTECTION),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.IMPRINT),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.CONTACT))},directives:[d.mk,C.yS,d.O5],pipes:[s.X$],styles:[".navbar-container[_ngcontent-%COMP%]{top:0;position:fixed;width:100%;z-index:999}.navbar-title[_ngcontent-%COMP%]{font-weight:700}.navbar-spacer[_ngcontent-%COMP%]{height:52px}.navbar-menu[_ngcontent-%COMP%]{background-color:#f5f5f5;padding-top:0;padding-bottom:0}"],data:{animation:[(0,o.X$)("titleState",[(0,o.SB)("show",(0,o.oB)({opacity:1})),(0,o.SB)("hide",(0,o.oB)({opacity:0,width:0})),(0,o.eR)("show => hide",(0,o.jt)("300ms ease-out")),(0,o.eR)("hide => show",(0,o.jt)("300ms ease-in"))])]}}),r})()},8809:(O,_,a)=>{a.d(_,{R:()=>C});var n=a(9808),o=a(3229),t=a(4187),d=a(7587);let C=(()=>{class s{}return s.\u0275fac=function(p){return new(p||s)},s.\u0275mod=d.oAB({type:s}),s.\u0275inj=d.cJS({imports:[[n.ez,o.aw,t.Bz]]}),s})()},431:(O,_,a)=>{a.r(_),a.d(_,{ChecklistsModule:()=>h});var n=a(9808),o=a(3229),t=a(8809),d=a(5905),C=a(4187),s=a(44),e=a(7587),p=a(6497),M=a(4218);const u=C.Bz.forChild([{path:"",component:(()=>{class i{constructor(){this.CurrentPage=s.C}ngOnInit(){}}return i.\u0275fac=function(g){return new(g||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-checklists"]],decls:46,vars:1,consts:[[3,"currentPage"],[1,"wrapper"],[1,"columns","is-align-items-center"],["src","/assets/img/projects/checklists/icon.png","width","200px",1,"image-shadow","is-hidden-mobile"],["src","/assets/img/projects/checklists/icon.png","width","100px",1,"image-shadow","is-hidden-tablet","app-icon-mobile"],["translate","",1,"title"],[1,"tag","is-dark","is-medium"],[1,"darker"],[1,"column"],["translate",""],["src","/assets/img/projects/checklists/phone_screenshot_1.png","width","330",1,"center","image-shadow"],[1,"column","is-hidden-tablet"],["src","/assets/img/projects/checklists/phone_screenshot_2.png","width","330",1,"center","image-shadow"],[1,"column","is-hidden-mobile"],["src","/assets/img/projects/checklists/phone_screenshot_3.png","width","330",1,"center","image-shadow"],["src","/assets/img/projects/checklists/ipad_screenshot_1.png","width","660",1,"center","image-shadow"]],template:function(g,Z){1&g&&(e._UZ(0,"app-nav-bar",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"img",3)(4,"img",4),e.TgZ(5,"h1",5),e._uU(6,"checklists.title "),e.TgZ(7,"span",6),e._uU(8,"iOS"),e.qZA()()()(),e.TgZ(9,"div",7)(10,"div",1)(11,"div",2)(12,"div",8)(13,"p",9),e._uU(14,"checklists.text1"),e.qZA()(),e.TgZ(15,"div",8),e._UZ(16,"img",10),e.qZA()()()(),e.TgZ(17,"div",1)(18,"div",2)(19,"div",11)(20,"p",9),e._uU(21,"checklists.text2"),e.qZA()(),e.TgZ(22,"div",8),e._UZ(23,"img",12),e.qZA(),e.TgZ(24,"div",13)(25,"p",9),e._uU(26,"checklists.text2"),e.qZA()()()(),e.TgZ(27,"div",7)(28,"div",1)(29,"div",2)(30,"div",8)(31,"p",9),e._uU(32,"checklists.text3"),e.qZA()(),e.TgZ(33,"div",8),e._UZ(34,"img",14),e.qZA()()()(),e.TgZ(35,"div",1)(36,"div",2)(37,"div",11)(38,"p",9),e._uU(39,"checklists.text4"),e.qZA()(),e.TgZ(40,"div",8),e._UZ(41,"img",15),e.qZA(),e.TgZ(42,"div",13)(43,"p",9),e._uU(44,"checklists.text4"),e.qZA()()()(),e._UZ(45,"app-footer")),2&g&&e.Q6J("currentPage",Z.CurrentPage.CHECKLISTS)},directives:[p.w,o.Pi,M.c],styles:[".darker[_ngcontent-%COMP%]{background-color:#dcdcdc}.wrapper[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;max-width:1000px;padding:25px 50px}.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:-5px}.wrapper[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}.wrapper[_ngcontent-%COMP%]   .image-shadow[_ngcontent-%COMP%]{filter:drop-shadow(5px 5px 5px #464866)}.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:20px}.wrapper[_ngcontent-%COMP%]   .app-icon-mobile[_ngcontent-%COMP%]{padding:10px 10px 10px 0}.wrapper[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]{max-width:500px}"]}),i})()},{path:"privacypolicy",component:(()=>{class i{constructor(){this.CurrentPage=s.C}ngOnInit(){}}return i.\u0275fac=function(g){return new(g||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-privacypolicy"]],decls:18,vars:1,consts:[[3,"currentPage"],[1,"wrapper"],["translate",""],["src","/assets/img/projects/checklists/icon.png","width","200px"]],template:function(g,Z){1&g&&(e._UZ(0,"app-nav-bar",0),e.TgZ(1,"div",1)(2,"h1",2),e._uU(3,"checklists.privacyploicy.title"),e.qZA(),e._UZ(4,"img",3),e.TgZ(5,"p",2),e._uU(6,"checklists.privacyploicy.1"),e.qZA(),e.TgZ(7,"p",2),e._uU(8,"checklists.privacyploicy.2"),e.qZA(),e.TgZ(9,"p",2),e._uU(10,"checklists.privacyploicy.3"),e.qZA(),e.TgZ(11,"p",2),e._uU(12,"checklists.privacyploicy.4"),e.qZA(),e.TgZ(13,"p",2),e._uU(14,"checklists.privacyploicy.5"),e.qZA(),e.TgZ(15,"p",2),e._uU(16,"checklists.privacyploicy.6"),e.qZA()(),e._UZ(17,"app-footer")),2&g&&e.Q6J("currentPage",Z.CurrentPage.CHECKLISTS)},directives:[p.w,o.Pi,M.c],styles:[".wrapper[_ngcontent-%COMP%]{text-align:center;margin:25px}.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:25px}h1[_ngcontent-%COMP%]{font-size:40px;margin-bottom:30px}"]}),i})()}]);let h=(()=>{class i{}return i.\u0275fac=function(g){return new(g||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[n.ez,u,o.aw,t.R,d._]]}),i})()}}]);
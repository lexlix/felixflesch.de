"use strict";(self.webpackChunkfelixflesch=self.webpackChunkfelixflesch||[]).push([[712],{4218:(f,d,a)=>{a.d(d,{c:()=>M});var e=a(7587),o=a(3229),t=a(4187),n=a(9808);function m(u,T){if(1&u){const g=e.EpF();e.TgZ(0,"p")(1,"a",4),e.NdJ("click",function(){return e.CHM(g),e.oxw().onEnglishClick()}),e._uU(2,"English"),e.qZA(),e._uU(3," / "),e.TgZ(4,"b"),e._uU(5,"Deutsch"),e.qZA()()}}function i(u,T){if(1&u){const g=e.EpF();e.TgZ(0,"p")(1,"b"),e._uU(2,"English"),e.qZA(),e._uU(3," / "),e.TgZ(4,"a",4),e.NdJ("click",function(){return e.CHM(g),e.oxw().onGermanClick()}),e._uU(5,"Deutsch"),e.qZA()()}}const h=function(){return["/imprint"]},p=function(){return["/dataprotection"]},Z=function(){return["/contact"]};let M=(()=>{class u{constructor(g){this.translate=g}getCurrentYear(){return(new Date).getFullYear()}onEnglishClick(){this.translate.use("en"),localStorage.setItem("lang","en")}onGermanClick(){this.translate.use("de"),localStorage.setItem("lang","de")}}return u.\u0275fac=function(g){return new(g||u)(e.Y36(o.sK))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-footer"]],decls:17,vars:18,consts:[[1,"footer"],[1,"content","has-text-centered"],[3,"routerLink"],[4,"ngIf"],[3,"routerLink","click"]],template:function(g,C){1&g&&(e.TgZ(0,"footer",0)(1,"div",1)(2,"a",2),e._uU(3),e.ALo(4,"translate"),e.qZA(),e._uU(5," - "),e.TgZ(6,"a",2),e._uU(7),e.ALo(8,"translate"),e.qZA(),e._uU(9," - "),e.TgZ(10,"a",2),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"p"),e._uU(14),e.qZA(),e.YNc(15,m,6,0,"p",3),e.YNc(16,i,6,0,"p",3),e.qZA()()),2&g&&(e.xp6(2),e.Q6J("routerLink",e.DdM(15,h)),e.xp6(1),e.Oqu(e.lcZ(4,9,"imprint.title")),e.xp6(3),e.Q6J("routerLink",e.DdM(16,p)),e.xp6(1),e.Oqu(e.lcZ(8,11,"dataprotection.title")),e.xp6(3),e.Q6J("routerLink",e.DdM(17,Z)),e.xp6(1),e.Oqu(e.lcZ(12,13,"contact.title")),e.xp6(3),e.hij(" \xa9 by Felix Flesch ",C.getCurrentYear()," "),e.xp6(1),e.Q6J("ngIf","de"===C.translate.currentLang),e.xp6(1),e.Q6J("ngIf","en"===C.translate.currentLang))},directives:[t.yS,n.O5],pipes:[o.X$],styles:[".footer[_ngcontent-%COMP%]{color:#727589}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aaabb8}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}"]}),u})()},5905:(f,d,a)=>{a.d(d,{_:()=>m});var e=a(9808),o=a(3229),t=a(4187),n=a(7587);let m=(()=>{class i{}return i.\u0275fac=function(p){return new(p||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[e.ez,o.aw,t.Bz]]}),i})()},44:(f,d,a)=>{a.d(d,{C:()=>e});var e=(()=>{return(o=e||(e={}))[o.HOME=0]="HOME",o[o.PROJECTS=1]="PROJECTS",o[o.CHECKLISTS=2]="CHECKLISTS",o[o.CHANNELSORTER=3]="CHANNELSORTER",o[o.BPMDETECTOR=4]="BPMDETECTOR",o[o.BLOG=5]="BLOG",o[o.DATAPROTECTION=6]="DATAPROTECTION",o[o.IMPRINT=7]="IMPRINT",o[o.CONTACT=8]="CONTACT",e;var o})()},6497:(f,d,a)=>{a.d(d,{w:()=>U});var e=a(44),o=a(1777),t=a(7587),n=a(9808),m=a(4187),i=a(3229);const h=function(){return["/checklists"]},p=function(r){return{"is-active":r}};function Z(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,h))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.CHECKLISTS)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"checklists.title")," ")}}const M=function(){return["/channelsorter"]};function u(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,M))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.CHANNELSORTER)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"channelsorter.title")," ")}}const T=function(){return["/bpmdetector"]};function g(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,T))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.BPMDETECTOR)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"bpmdetector.title")," ")}}const C=function(){return["/dataprotection"]};function s(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,C))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.DATAPROTECTION)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"dataprotection.title")," ")}}const v=function(){return["/imprint"]};function _(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,v))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.IMPRINT)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"imprint.title")," ")}}const O=function(){return["/contact"]};function A(r,P){if(1&r&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&r){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,O))("ngClass",t.VKq(6,p,c.currentPage===c.CurrentPage.CONTACT)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"contact.title")," ")}}const E=function(){return["/"]},x=function(){return["/blog"]};let U=(()=>{class r{constructor(){this.CurrentPage=e.C,this.navBarMenuActive=!1}get titleState(){return r.showTitle?"show":"hide"}static checkShowTitle(){r.showTitle=r.currentPage!==e.C.HOME||window.innerWidth<1024||r.scrollPos>300}ngOnInit(){window.addEventListener("scroll",this.onScrollHandler,!0),window.addEventListener("resize",this.onResizeHandler,!0),r.checkShowTitle(),r.currentPage=this.currentPage,r.checkShowTitle()}toggleNavBarMenu(){this.navBarMenuActive=!this.navBarMenuActive}isNavBarMenuActive(){return this.navBarMenuActive}onScrollHandler(c){r.scrollPos=c.srcElement.scrollTop,r.checkShowTitle()}onResizeHandler(){r.checkShowTitle()}}return r.showTitle=!1,r.scrollPos=0,r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-nav-bar"]],inputs:{currentPage:"currentPage"},decls:24,vars:29,consts:[[1,"navbar-container"],["role","navigation","aria-label","main navigation",1,"navbar","is-dark"],[1,"navbar-brand"],["href","/",1,"navbar-item","navbar-title"],["role","button","aria-label","menu","aria-expanded","false","data-target","navbar",1,"navbar-burger","burger",3,"ngClass","click"],["aria-hidden","true"],["id","navbar",1,"navbar-menu",3,"ngClass"],[1,"navbar-start"],[1,"navbar-item",3,"routerLink","ngClass"],["class","navbar-item",3,"routerLink","ngClass",4,"ngIf"],[1,"navbar-spacer"]],template:function(c,l){1&c&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),t._uU(4," FELIX FLESCH "),t.qZA(),t.TgZ(5,"a",4),t.NdJ("click",function(){return l.toggleNavBarMenu()}),t._UZ(6,"span",5)(7,"span",5)(8,"span",5),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"a",8),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"a",8),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.YNc(17,Z,3,8,"a",9),t.YNc(18,u,3,8,"a",9),t.YNc(19,g,3,8,"a",9),t.YNc(20,s,3,8,"a",9),t.YNc(21,_,3,8,"a",9),t.YNc(22,A,3,8,"a",9),t.qZA()()()(),t._UZ(23,"div",10)),2&c&&(t.xp6(2),t.Q6J("@titleState",l.titleState),t.xp6(3),t.Q6J("ngClass",t.VKq(19,p,l.isNavBarMenuActive())),t.xp6(4),t.Q6J("ngClass",t.VKq(21,p,l.isNavBarMenuActive())),t.xp6(2),t.Q6J("routerLink",t.DdM(23,E))("ngClass",t.VKq(24,p,l.currentPage===l.CurrentPage.HOME)),t.xp6(1),t.hij(" ",t.lcZ(13,15,"home.title")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(26,x))("ngClass",t.VKq(27,p,l.currentPage===l.CurrentPage.BLOG)),t.xp6(1),t.hij(" ",t.lcZ(16,17,"blog.title")," "),t.xp6(2),t.Q6J("ngIf",l.currentPage===l.CurrentPage.CHECKLISTS),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.CHANNELSORTER),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.BPMDETECTOR),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.DATAPROTECTION),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.IMPRINT),t.xp6(1),t.Q6J("ngIf",l.currentPage===l.CurrentPage.CONTACT))},directives:[n.mk,m.yS,n.O5],pipes:[i.X$],styles:[".navbar-container[_ngcontent-%COMP%]{top:0;position:fixed;width:100%;z-index:999}.navbar-title[_ngcontent-%COMP%]{font-weight:700}.navbar-spacer[_ngcontent-%COMP%]{height:52px}.navbar-menu[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}"],data:{animation:[(0,o.X$)("titleState",[(0,o.SB)("show",(0,o.oB)({opacity:1})),(0,o.SB)("hide",(0,o.oB)({opacity:0,width:0})),(0,o.eR)("show => hide",(0,o.jt)("300ms ease-out")),(0,o.eR)("hide => show",(0,o.jt)("300ms ease-in"))])]}}),r})()},8809:(f,d,a)=>{a.d(d,{R:()=>m});var e=a(9808),o=a(3229),t=a(4187),n=a(7587);let m=(()=>{class i{}return i.\u0275fac=function(p){return new(p||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[e.ez,o.aw,t.Bz]]}),i})()},7712:(f,d,a)=>{a.r(d),a.d(d,{ChannelsorterModule:()=>C});var e=a(9808),o=a(4187),t=a(44),n=a(7587),m=a(6497),i=a(3229),h=a(4218);const u=o.Bz.forChild([{path:"",component:(()=>{class s{constructor(){this.CurrentPage=t.C}ngOnInit(){}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-channelsorter"]],decls:40,vars:1,consts:[[3,"currentPage"],[1,"wrapper"],[1,"columns","is-align-items-center"],["src","/assets/img/projects/channelsorter/icon.png","width","200px",1,"image-shadow","is-hidden-mobile","app-icon-desktop"],["src","/assets/img/projects/channelsorter/icon.png","width","100px",1,"image-shadow","is-hidden-tablet","app-icon-mobile"],["translate","",1,"title"],[1,"tag","is-android","is-medium"],["href","https://github.com/lexlix/FPV-Video-Channelsorter-5.8GHz","target","_blank"],[1,"subtitle"],[1,"darker"],["href","https://play.google.com/store/apps/details?id=florian.felix.flesch.fpvvideochannelsorter","target","_blank"],["alt","Get it on Google Play","src","assets/img/google-play-badge.png",1,"playstore-img"],[1,"column"],["translate",""],["src","/assets/img/projects/channelsorter/screenshot_1.png","width","400",1,"center","image-shadow"],[1,"column","is-hidden-tablet"],["src","/assets/img/projects/channelsorter/screenshot_2.png","width","400",1,"center","image-shadow"],[1,"column","is-hidden-mobile"]],template:function(_,O){1&_&&(n._UZ(0,"app-nav-bar",0),n.TgZ(1,"div",1)(2,"div",2),n._UZ(3,"img",3)(4,"img",4),n.TgZ(5,"h1",5),n._uU(6,"channelsorter.title "),n.TgZ(7,"span",6),n._uU(8,"Android"),n.qZA(),n._UZ(9,"br"),n.TgZ(10,"a",7)(11,"span",8),n._uU(12,"Open Source"),n.qZA()()()()(),n.TgZ(13,"div",9)(14,"div",1)(15,"a",10),n._UZ(16,"img",11),n.qZA(),n.TgZ(17,"div",2)(18,"div",12)(19,"p",13),n._uU(20,"channelsorter.text1"),n.qZA(),n.TgZ(21,"p",13),n._uU(22,"channelsorter.text2"),n.qZA(),n._UZ(23,"br"),n.TgZ(24,"a",7)(25,"b"),n._uU(26,"GitHub"),n.qZA()()(),n.TgZ(27,"div",12),n._UZ(28,"img",14),n.qZA()()()(),n.TgZ(29,"div",1)(30,"div",2)(31,"div",15)(32,"p",13),n._uU(33,"channelsorter.text3"),n.qZA()(),n.TgZ(34,"div",12),n._UZ(35,"img",16),n.qZA(),n.TgZ(36,"div",17)(37,"p",13),n._uU(38,"channelsorter.text3"),n.qZA()()()(),n._UZ(39,"app-footer")),2&_&&n.Q6J("currentPage",O.CurrentPage.CHANNELSORTER)},directives:[m.w,i.Pi,h.c],styles:[".darker[_ngcontent-%COMP%]{background-color:#dcdcdc}.wrapper[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto;max-width:1000px;padding:25px 50px}.wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-top:-5px}.wrapper[_ngcontent-%COMP%]   .playstore-img[_ngcontent-%COMP%]{height:65px;padding-top:0;padding-bottom:10px}.wrapper[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto}.wrapper[_ngcontent-%COMP%]   .image-shadow[_ngcontent-%COMP%]{filter:drop-shadow(5px 5px 5px #464866)}.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:10px 0}.wrapper[_ngcontent-%COMP%]   .app-icon-desktop[_ngcontent-%COMP%]{padding-right:20px}.wrapper[_ngcontent-%COMP%]   .app-icon-mobile[_ngcontent-%COMP%]{padding:10px 10px 10px 0}.wrapper[_ngcontent-%COMP%]   .textWrapper[_ngcontent-%COMP%]{max-width:500px}"]}),s})()},{path:"privacypolicy",component:(()=>{class s{constructor(){this.CurrentPage=t.C}ngOnInit(){}}return s.\u0275fac=function(_){return new(_||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["app-privacypolicy"]],decls:27,vars:7,consts:[[3,"currentPage"],[1,"wrapper"],["translate",""],["src","/assets/img/projects/channelsorter/icon.png","width","200px"],["href","mailto:dev@felixflesch.de","target","_blank","rel","noopener noreferrer"],["href","https://play.google.com/store/apps/details?id=florian.felix.flesch.fpvvideochannelsorter","target","_blank"]],template:function(_,O){1&_&&(n._UZ(0,"app-nav-bar",0),n.TgZ(1,"div",1)(2,"h1",2),n._uU(3,"channelsorter.privacyploicy.title"),n.qZA(),n._UZ(4,"img",3),n.TgZ(5,"p",2),n._uU(6,"channelsorter.privacyploicy.1"),n.qZA(),n.TgZ(7,"p",2),n._uU(8,"channelsorter.privacyploicy.2"),n.qZA(),n.TgZ(9,"p",2),n._uU(10,"channelsorter.privacyploicy.3"),n.qZA(),n.TgZ(11,"p",2),n._uU(12,"channelsorter.privacyploicy.4"),n.qZA(),n._UZ(13,"br"),n.TgZ(14,"p"),n._uU(15),n.ALo(16,"translate"),n.qZA(),n.TgZ(17,"p"),n._uU(18),n.ALo(19,"translate"),n.TgZ(20,"a",4),n._uU(21,"dev@felixflesch.de"),n.qZA()(),n.TgZ(22,"p"),n._uU(23,"Play Store: "),n.TgZ(24,"a",5),n._uU(25,"Link"),n.qZA()()(),n._UZ(26,"app-footer")),2&_&&(n.Q6J("currentPage",O.CurrentPage.CHANNELSORTER),n.xp6(15),n.hij("",n.lcZ(16,3,"channelsorter.privacyploicy.developer")," Felix-Florian Flesch"),n.xp6(3),n.hij("",n.lcZ(19,5,"channelsorter.privacyploicy.contact")," "))},directives:[m.w,i.Pi,h.c],pipes:[i.X$],styles:[".wrapper[_ngcontent-%COMP%]{text-align:center;margin:25px}.wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-bottom:25px}h1[_ngcontent-%COMP%]{font-size:40px;margin-bottom:30px}"]}),s})()}]);var T=a(8809),g=a(5905);let C=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[[e.ez,u,i.aw,T.R,g._]]}),s})()}}]);
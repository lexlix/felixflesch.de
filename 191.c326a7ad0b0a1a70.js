"use strict";(self.webpackChunkfelixflesch=self.webpackChunkfelixflesch||[]).push([[191],{4218:(f,p,a)=>{a.d(p,{c:()=>P});var n=a(7587),o=a(3229),t=a(4187),r=a(9808);function d(g,m){if(1&g){const _=n.EpF();n.TgZ(0,"p")(1,"a",4),n.NdJ("click",function(){return n.CHM(_),n.oxw().onEnglishClick()}),n._uU(2,"English"),n.qZA(),n._uU(3," / "),n.TgZ(4,"b"),n._uU(5,"Deutsch"),n.qZA()()}}function s(g,m){if(1&g){const _=n.EpF();n.TgZ(0,"p")(1,"b"),n._uU(2,"English"),n.qZA(),n._uU(3," / "),n.TgZ(4,"a",4),n.NdJ("click",function(){return n.CHM(_),n.oxw().onGermanClick()}),n._uU(5,"Deutsch"),n.qZA()()}}const C=function(){return["/imprint"]},l=function(){return["/dataprotection"]},A=function(){return["/contact"]};let P=(()=>{class g{constructor(_){this.translate=_}getCurrentYear(){return(new Date).getFullYear()}onEnglishClick(){this.translate.use("en"),localStorage.setItem("lang","en")}onGermanClick(){this.translate.use("de"),localStorage.setItem("lang","de")}}return g.\u0275fac=function(_){return new(_||g)(n.Y36(o.sK))},g.\u0275cmp=n.Xpm({type:g,selectors:[["app-footer"]],decls:17,vars:18,consts:[[1,"footer"],[1,"content","has-text-centered"],[3,"routerLink"],[4,"ngIf"],[3,"routerLink","click"]],template:function(_,E){1&_&&(n.TgZ(0,"footer",0)(1,"div",1)(2,"a",2),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5," - "),n.TgZ(6,"a",2),n._uU(7),n.ALo(8,"translate"),n.qZA(),n._uU(9," - "),n.TgZ(10,"a",2),n._uU(11),n.ALo(12,"translate"),n.qZA(),n.TgZ(13,"p"),n._uU(14),n.qZA(),n.YNc(15,d,6,0,"p",3),n.YNc(16,s,6,0,"p",3),n.qZA()()),2&_&&(n.xp6(2),n.Q6J("routerLink",n.DdM(15,C)),n.xp6(1),n.Oqu(n.lcZ(4,9,"imprint.title")),n.xp6(3),n.Q6J("routerLink",n.DdM(16,l)),n.xp6(1),n.Oqu(n.lcZ(8,11,"dataprotection.title")),n.xp6(3),n.Q6J("routerLink",n.DdM(17,A)),n.xp6(1),n.Oqu(n.lcZ(12,13,"contact.title")),n.xp6(3),n.hij(" \xa9 by Felix Flesch ",E.getCurrentYear()," "),n.xp6(1),n.Q6J("ngIf","de"===E.translate.currentLang),n.xp6(1),n.Q6J("ngIf","en"===E.translate.currentLang))},directives:[t.yS,r.O5],pipes:[o.X$],styles:[".footer[_ngcontent-%COMP%]{color:#727589}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aaabb8}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}"]}),g})()},5905:(f,p,a)=>{a.d(p,{_:()=>d});var n=a(9808),o=a(3229),t=a(4187),r=a(7587);let d=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[[n.ez,o.aw,t.Bz]]}),s})()},44:(f,p,a)=>{a.d(p,{C:()=>n});var n=(()=>{return(o=n||(n={}))[o.HOME=0]="HOME",o[o.PROJECTS=1]="PROJECTS",o[o.CHECKLISTS=2]="CHECKLISTS",o[o.CHANNELSORTER=3]="CHANNELSORTER",o[o.BPMDETECTOR=4]="BPMDETECTOR",o[o.BLOG=5]="BLOG",o[o.DATAPROTECTION=6]="DATAPROTECTION",o[o.IMPRINT=7]="IMPRINT",o[o.CONTACT=8]="CONTACT",n;var o})()},6497:(f,p,a)=>{a.d(p,{w:()=>I});var n=a(44),o=a(1777),t=a(7587),r=a(9808),d=a(4187),s=a(3229);const C=function(){return["/blog"]},l=function(e){return{"is-active":e}};function A(e,v){if(1&e&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,C))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.BLOG)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"blog.title")," ")}}const P=function(){return["/checklists"]};function g(e,v){if(1&e&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,P))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.CHECKLISTS)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"checklists.title")," ")}}const m=function(){return["/channelsorter"]};function _(e,v){if(1&e&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,m))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.CHANNELSORTER)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"channelsorter.title")," ")}}const E=function(){return["/bpmdetector"]};function u(e,v){if(1&e&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,E))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.BPMDETECTOR)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"bpmdetector.title")," ")}}const M=function(){return["/dataprotection"]};function T(e,v){if(1&e&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,M))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.DATAPROTECTION)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"dataprotection.title")," ")}}const O=function(){return["/imprint"]};function h(e,v){if(1&e&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,O))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.IMPRINT)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"imprint.title")," ")}}const D=function(){return["/contact"]};function L(e,v){if(1&e&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&e){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,D))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.CONTACT)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"contact.title")," ")}}const Z=function(){return["/"]};let I=(()=>{class e{constructor(){this.CurrentPage=n.C,this.navBarMenuActive=!1}get titleState(){return e.showTitle?"show":"hide"}static checkShowTitle(){e.showTitle=e.currentPage!==n.C.HOME||window.innerWidth<1024||e.scrollPos>300}ngOnInit(){window.addEventListener("scroll",this.onScrollHandler,!0),window.addEventListener("resize",this.onResizeHandler,!0),e.checkShowTitle(),e.currentPage=this.currentPage,e.checkShowTitle()}toggleNavBarMenu(){this.navBarMenuActive=!this.navBarMenuActive}isNavBarMenuActive(){return this.navBarMenuActive}onScrollHandler(c){e.scrollPos=c.srcElement.scrollTop,e.checkShowTitle()}onResizeHandler(){e.checkShowTitle()}}return e.showTitle=!1,e.scrollPos=0,e.\u0275fac=function(c){return new(c||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-nav-bar"]],inputs:{currentPage:"currentPage"},decls:22,vars:22,consts:[[1,"navbar-container"],["role","navigation","aria-label","main navigation",1,"navbar","is-dark"],[1,"navbar-brand"],["href","/",1,"navbar-item","navbar-title"],["role","button","aria-label","menu","aria-expanded","false","data-target","navbar",1,"navbar-burger","burger",3,"ngClass","click"],["aria-hidden","true"],["id","navbar",1,"navbar-menu",3,"ngClass"],[1,"navbar-start"],[1,"navbar-item",3,"routerLink","ngClass"],["class","navbar-item",3,"routerLink","ngClass",4,"ngIf"],[1,"navbar-spacer"]],template:function(c,i){1&c&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),t._uU(4," FELIX FLESCH "),t.qZA(),t.TgZ(5,"a",4),t.NdJ("click",function(){return i.toggleNavBarMenu()}),t._UZ(6,"span",5)(7,"span",5)(8,"span",5),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"a",8),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.YNc(14,A,3,8,"a",9),t.YNc(15,g,3,8,"a",9),t.YNc(16,_,3,8,"a",9),t.YNc(17,u,3,8,"a",9),t.YNc(18,T,3,8,"a",9),t.YNc(19,h,3,8,"a",9),t.YNc(20,L,3,8,"a",9),t.qZA()()()(),t._UZ(21,"div",10)),2&c&&(t.xp6(2),t.Q6J("@titleState",i.titleState),t.xp6(3),t.Q6J("ngClass",t.VKq(15,l,i.isNavBarMenuActive())),t.xp6(4),t.Q6J("ngClass",t.VKq(17,l,i.isNavBarMenuActive())),t.xp6(2),t.Q6J("routerLink",t.DdM(19,Z))("ngClass",t.VKq(20,l,i.currentPage===i.CurrentPage.HOME)),t.xp6(1),t.hij(" ",t.lcZ(13,13,"home.title")," "),t.xp6(2),t.Q6J("ngIf",i.currentPage===i.CurrentPage.BLOG),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.CHECKLISTS),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.CHANNELSORTER),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.BPMDETECTOR),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.DATAPROTECTION),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.IMPRINT),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.CONTACT))},directives:[r.mk,d.yS,r.O5],pipes:[s.X$],styles:[".navbar-container[_ngcontent-%COMP%]{top:0;position:fixed;width:100%;z-index:999}.navbar-title[_ngcontent-%COMP%]{font-weight:700}.navbar-spacer[_ngcontent-%COMP%]{height:52px}.navbar-menu[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}"],data:{animation:[(0,o.X$)("titleState",[(0,o.SB)("show",(0,o.oB)({opacity:1})),(0,o.SB)("hide",(0,o.oB)({opacity:0,width:0})),(0,o.eR)("show => hide",(0,o.jt)("300ms ease-out")),(0,o.eR)("hide => show",(0,o.jt)("300ms ease-in"))])]}}),e})()},8809:(f,p,a)=>{a.d(p,{R:()=>d});var n=a(9808),o=a(3229),t=a(4187),r=a(7587);let d=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[[n.ez,o.aw,t.Bz]]}),s})()},6191:(f,p,a)=>{a.r(p),a.d(p,{DataprotectionModule:()=>E});var n=a(9808),o=a(4187),t=a(44),r=a(7587),d=a(3229),s=a(2313),C=a(6497),l=a(4218);const g=o.Bz.forChild([{path:"",component:(()=>{class u{constructor(T,O){this.translate=T,this.titleService=O,this.CurrentPage=t.C}ngOnInit(){this.translate.get("dataprotection.title").subscribe(T=>{this.titleService.setTitle("Felix Flesch | "+T)})}}return u.\u0275fac=function(T){return new(T||u)(r.Y36(d.sK),r.Y36(s.Dx))},u.\u0275cmp=r.Xpm({type:u,selectors:[["app-dataprotection"]],decls:6,vars:4,consts:[[3,"currentPage"],[1,"section"],[1,"container"],[3,"innerHTML"]],template:function(T,O){1&T&&(r._UZ(0,"app-nav-bar",0),r.TgZ(1,"section",1)(2,"div",2),r._UZ(3,"p",3),r.ALo(4,"translate"),r.qZA()(),r._UZ(5,"app-footer")),2&T&&(r.Q6J("currentPage",O.CurrentPage.DATAPROTECTION),r.xp6(3),r.Q6J("innerHTML",r.lcZ(4,2,"dataprotection.content"),r.oJD))},directives:[C.w,l.c],pipes:[d.X$],styles:[""]}),u})()}]);var m=a(8809),_=a(5905);let E=(()=>{class u{}return u.\u0275fac=function(T){return new(T||u)},u.\u0275mod=r.oAB({type:u}),u.\u0275inj=r.cJS({imports:[[n.ez,g,d.aw,m.R,_._]]}),u})()}}]);
"use strict";(self.webpackChunkfelixflesch=self.webpackChunkfelixflesch||[]).push([[191],{4218:(f,g,e)=>{e.d(g,{c:()=>P});var n=e(7587),o=e(3229),t=e(4187),r=e(9808);function T(p,v){if(1&p){const _=n.EpF();n.TgZ(0,"p")(1,"a",4),n.NdJ("click",function(){return n.CHM(_),n.oxw().onEnglishClick()}),n._uU(2,"English"),n.qZA(),n._uU(3," / "),n.TgZ(4,"b"),n._uU(5,"Deutsch"),n.qZA()()}}function s(p,v){if(1&p){const _=n.EpF();n.TgZ(0,"p")(1,"b"),n._uU(2,"English"),n.qZA(),n._uU(3," / "),n.TgZ(4,"a",4),n.NdJ("click",function(){return n.CHM(_),n.oxw().onGermanClick()}),n._uU(5,"Deutsch"),n.qZA()()}}const C=function(){return["/imprint"]},l=function(){return["/dataprotection"]},A=function(){return["/contact"]};let P=(()=>{class p{constructor(_){this.translate=_}getCurrentYear(){return(new Date).getFullYear()}onEnglishClick(){this.translate.use("en"),localStorage.setItem("lang","en")}onGermanClick(){this.translate.use("de"),localStorage.setItem("lang","de")}}return p.\u0275fac=function(_){return new(_||p)(n.Y36(o.sK))},p.\u0275cmp=n.Xpm({type:p,selectors:[["app-footer"]],decls:17,vars:18,consts:[[1,"footer"],[1,"content","has-text-centered"],[3,"routerLink"],[4,"ngIf"],[3,"routerLink","click"]],template:function(_,E){1&_&&(n.TgZ(0,"footer",0)(1,"div",1)(2,"a",2),n._uU(3),n.ALo(4,"translate"),n.qZA(),n._uU(5," - "),n.TgZ(6,"a",2),n._uU(7),n.ALo(8,"translate"),n.qZA(),n._uU(9," - "),n.TgZ(10,"a",2),n._uU(11),n.ALo(12,"translate"),n.qZA(),n.TgZ(13,"p"),n._uU(14),n.qZA(),n.YNc(15,T,6,0,"p",3),n.YNc(16,s,6,0,"p",3),n.qZA()()),2&_&&(n.xp6(2),n.Q6J("routerLink",n.DdM(15,C)),n.xp6(1),n.Oqu(n.lcZ(4,9,"imprint.title")),n.xp6(3),n.Q6J("routerLink",n.DdM(16,l)),n.xp6(1),n.Oqu(n.lcZ(8,11,"dataprotection.title")),n.xp6(3),n.Q6J("routerLink",n.DdM(17,A)),n.xp6(1),n.Oqu(n.lcZ(12,13,"contact.title")),n.xp6(3),n.hij(" \xa9 by Felix Flesch ",E.getCurrentYear()," "),n.xp6(1),n.Q6J("ngIf","de"===E.translate.currentLang),n.xp6(1),n.Q6J("ngIf","en"===E.translate.currentLang))},directives:[t.yS,r.O5],pipes:[o.X$],styles:[".footer[_ngcontent-%COMP%]{color:#727589}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#aaabb8}.footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}"]}),p})()},5905:(f,g,e)=>{e.d(g,{_:()=>T});var n=e(9808),o=e(3229),t=e(4187),r=e(7587);let T=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[[n.ez,o.aw,t.Bz]]}),s})()},44:(f,g,e)=>{e.d(g,{C:()=>n});var n=(()=>{return(o=n||(n={}))[o.HOME=0]="HOME",o[o.PROJECTS=1]="PROJECTS",o[o.CHECKLISTS=2]="CHECKLISTS",o[o.CHANNELSORTER=3]="CHANNELSORTER",o[o.BPMDETECTOR=4]="BPMDETECTOR",o[o.BLOG=5]="BLOG",o[o.DATAPROTECTION=6]="DATAPROTECTION",o[o.IMPRINT=7]="IMPRINT",o[o.CONTACT=8]="CONTACT",n;var o})()},6497:(f,g,e)=>{e.d(g,{w:()=>Z});var n=e(44),o=e(1777),t=e(7587),r=e(4187),T=e(9808),s=e(3229);const C=function(){return["/checklists"]},l=function(a){return{"is-active":a}};function A(a,m){if(1&a&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,C))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.CHECKLISTS)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"checklists.title")," ")}}const P=function(){return["/channelsorter"]};function p(a,m){if(1&a&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,P))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.CHANNELSORTER)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"channelsorter.title")," ")}}const v=function(){return["/bpmdetector"]};function _(a,m){if(1&a&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,v))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.BPMDETECTOR)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"bpmdetector.title")," ")}}const E=function(){return["/dataprotection"]};function u(a,m){if(1&a&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,E))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.DATAPROTECTION)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"dataprotection.title")," ")}}const M=function(){return["/imprint"]};function d(a,m){if(1&a&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,M))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.IMPRINT)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"imprint.title")," ")}}const O=function(){return["/contact"]};function D(a,m){if(1&a&&(t.TgZ(0,"a",8),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const c=t.oxw();t.Q6J("routerLink",t.DdM(5,O))("ngClass",t.VKq(6,l,c.currentPage===c.CurrentPage.CONTACT)),t.xp6(1),t.hij(" ",t.lcZ(2,3,"contact.title")," ")}}const h=function(){return["/"]},L=function(){return["/blog"]};let Z=(()=>{class a{constructor(){this.CurrentPage=n.C,this.navBarMenuActive=!1}get titleState(){return a.showTitle?"show":"hide"}static checkShowTitle(){a.showTitle=a.currentPage!==n.C.HOME||window.innerWidth<1024||a.scrollPos>300}ngOnInit(){window.addEventListener("scroll",this.onScrollHandler,!0),window.addEventListener("resize",this.onResizeHandler,!0),a.checkShowTitle(),a.currentPage=this.currentPage,a.checkShowTitle()}toggleNavBarMenu(){this.navBarMenuActive=!this.navBarMenuActive}isNavBarMenuActive(){return this.navBarMenuActive}onScrollHandler(c){a.scrollPos=c.srcElement.scrollTop,a.checkShowTitle()}onResizeHandler(){a.checkShowTitle()}}return a.showTitle=!1,a.scrollPos=0,a.\u0275fac=function(c){return new(c||a)},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-nav-bar"]],inputs:{currentPage:"currentPage"},decls:24,vars:31,consts:[[1,"navbar-container"],["role","navigation","aria-label","main navigation",1,"navbar","is-dark"],[1,"navbar-brand"],[1,"navbar-item","navbar-title",3,"routerLink"],["role","button","aria-label","menu","aria-expanded","false","data-target","navbar",1,"navbar-burger","burger",3,"ngClass","click"],["aria-hidden","true"],["id","navbar",1,"navbar-menu",3,"ngClass"],[1,"navbar-start"],[1,"navbar-item",3,"routerLink","ngClass"],["class","navbar-item",3,"routerLink","ngClass",4,"ngIf"],[1,"navbar-spacer"]],template:function(c,i){1&c&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"div",2)(3,"a",3),t._uU(4," FELIX FLESCH "),t.qZA(),t.TgZ(5,"a",4),t.NdJ("click",function(){return i.toggleNavBarMenu()}),t._UZ(6,"span",5)(7,"span",5)(8,"span",5),t.qZA()(),t.TgZ(9,"div",6)(10,"div",7)(11,"a",8),t._uU(12),t.ALo(13,"translate"),t.qZA(),t.TgZ(14,"a",8),t._uU(15),t.ALo(16,"translate"),t.qZA(),t.YNc(17,A,3,8,"a",9),t.YNc(18,p,3,8,"a",9),t.YNc(19,_,3,8,"a",9),t.YNc(20,u,3,8,"a",9),t.YNc(21,d,3,8,"a",9),t.YNc(22,D,3,8,"a",9),t.qZA()()()(),t._UZ(23,"div",10)),2&c&&(t.xp6(2),t.Q6J("@titleState",i.titleState),t.xp6(1),t.Q6J("routerLink",t.DdM(20,h)),t.xp6(2),t.Q6J("ngClass",t.VKq(21,l,i.isNavBarMenuActive())),t.xp6(4),t.Q6J("ngClass",t.VKq(23,l,i.isNavBarMenuActive())),t.xp6(2),t.Q6J("routerLink",t.DdM(25,h))("ngClass",t.VKq(26,l,i.currentPage===i.CurrentPage.HOME)),t.xp6(1),t.hij(" ",t.lcZ(13,16,"home.title")," "),t.xp6(2),t.Q6J("routerLink",t.DdM(28,L))("ngClass",t.VKq(29,l,i.currentPage===i.CurrentPage.BLOG)),t.xp6(1),t.hij(" ",t.lcZ(16,18,"blog.title")," "),t.xp6(2),t.Q6J("ngIf",i.currentPage===i.CurrentPage.CHECKLISTS),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.CHANNELSORTER),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.BPMDETECTOR),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.DATAPROTECTION),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.IMPRINT),t.xp6(1),t.Q6J("ngIf",i.currentPage===i.CurrentPage.CONTACT))},directives:[r.yS,T.mk,T.O5],pipes:[s.X$],styles:[".navbar-container[_ngcontent-%COMP%]{top:0;position:fixed;width:100%;z-index:999}.navbar-title[_ngcontent-%COMP%]{font-weight:700}.navbar-spacer[_ngcontent-%COMP%]{height:52px}"],data:{animation:[(0,o.X$)("titleState",[(0,o.SB)("show",(0,o.oB)({opacity:1})),(0,o.SB)("hide",(0,o.oB)({opacity:0,width:0})),(0,o.eR)("show => hide",(0,o.jt)("300ms ease-out")),(0,o.eR)("hide => show",(0,o.jt)("300ms ease-in"))])]}}),a})()},8809:(f,g,e)=>{e.d(g,{R:()=>T});var n=e(9808),o=e(3229),t=e(4187),r=e(7587);let T=(()=>{class s{}return s.\u0275fac=function(l){return new(l||s)},s.\u0275mod=r.oAB({type:s}),s.\u0275inj=r.cJS({imports:[[n.ez,o.aw,t.Bz]]}),s})()},6191:(f,g,e)=>{e.r(g),e.d(g,{DataprotectionModule:()=>E});var n=e(9808),o=e(4187),t=e(44),r=e(7587),T=e(3229),s=e(2313),C=e(6497),l=e(4218);const p=o.Bz.forChild([{path:"",component:(()=>{class u{constructor(d,O){this.translate=d,this.titleService=O,this.CurrentPage=t.C}ngOnInit(){this.translate.get("dataprotection.title").subscribe(d=>{this.titleService.setTitle("Felix Flesch | "+d)})}}return u.\u0275fac=function(d){return new(d||u)(r.Y36(T.sK),r.Y36(s.Dx))},u.\u0275cmp=r.Xpm({type:u,selectors:[["app-dataprotection"]],decls:6,vars:4,consts:[[3,"currentPage"],[1,"section"],[1,"container"],[3,"innerHTML"]],template:function(d,O){1&d&&(r._UZ(0,"app-nav-bar",0),r.TgZ(1,"section",1)(2,"div",2),r._UZ(3,"p",3),r.ALo(4,"translate"),r.qZA()(),r._UZ(5,"app-footer")),2&d&&(r.Q6J("currentPage",O.CurrentPage.DATAPROTECTION),r.xp6(3),r.Q6J("innerHTML",r.lcZ(4,2,"dataprotection.content"),r.oJD))},directives:[C.w,l.c],pipes:[T.X$],styles:[""]}),u})()}]);var v=e(8809),_=e(5905);let E=(()=>{class u{}return u.\u0275fac=function(d){return new(d||u)},u.\u0275mod=r.oAB({type:u}),u.\u0275inj=r.cJS({imports:[[n.ez,p,T.aw,v.R,_._]]}),u})()}}]);
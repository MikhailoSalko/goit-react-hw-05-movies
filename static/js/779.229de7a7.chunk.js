"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[779],{4852:function(n,t,r){r.d(t,{FR:function(){return a},FY:function(){return f},KH:function(){return h},VQ:function(){return s},lG:function(){return c}});var e="https://api.themoviedb.org/3/trending/movie/week",o="https://api.themoviedb.org/3/search/movie",i="https://api.themoviedb.org/3/movie/",u={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjAwOTdiYTdkMGEwMjdhMWIwZmQ1MzE4ZDEwOWQyNiIsInN1YiI6IjY0NzMyNjgzOWFlNjEzMDBlNTk0ODMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZZFB21DrPYslGFOp2UJX2KSQ02EhM3eeP3-goKJHXAk"}},c=function(){return fetch("".concat(e),u).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},a=function(n){return fetch("".concat(o,"?query=").concat(n),u).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},s=function(n){return fetch("".concat(i).concat(n),u).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},f=function(n){return fetch("".concat(i).concat(n,"/credits"),u).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},h=function(n){return fetch("".concat(i).concat(n,"/reviews"),u).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},9779:function(n,t,r){r.r(t),r.d(t,{default:function(){return z}});var e,o,i,u,c,a=r(3433),s=r(5861),f=r(9439),h=r(7757),l=r.n(h),p=r(2791),d=r(4852),w=r(7689),v=r(1686),m=r(5291),x=r(966),Z=r(168),j=r(6444),g=j.ZP.ul(e||(e=(0,Z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  align-items: baseline;\n"]))),k=j.ZP.li(o||(o=(0,Z.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),y=j.ZP.div(i||(i=(0,Z.Z)(["\n  width: 300px;\n"]))),I=j.ZP.h1(u||(u=(0,Z.Z)(["\n  font-size: 30px;\n  margin-bottom: 20px;\n"]))),b=j.ZP.p(c||(c=(0,Z.Z)(["\n  font-size: 16px;\n"]))),E=r(184),z=function(){var n=(0,p.useState)([]),t=(0,f.Z)(n,2),r=t[0],e=t[1],o=(0,p.useState)(!1),i=(0,f.Z)(o,2),u=i[0],c=i[1],h=(0,p.useState)(null),Z=(0,f.Z)(h,2),j=Z[0],z=Z[1],J=(0,w.UO)().movieId;return(0,p.useEffect)((function(){var n=function(){var n=(0,s.Z)(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,d.KH)(J).then((function(n){var t=n.results;return e((0,a.Z)(t))})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();c(!0),n().catch((function(n){return z(n.message)})).finally((function(){return c(!1)}))}),[J]),(0,E.jsxs)(E.Fragment,{children:[j&&v.Report.failure("Something went wrong, please try again later",m.s),u?(0,E.jsx)(x.Q,{}):(0,E.jsx)(g,{children:0===r.length?(0,E.jsx)("p",{children:"There are no any reviews for this movie"}):r.map((function(n){var t=n.id,r=n.author,e=n.content;return(0,E.jsx)(k,{children:(0,E.jsxs)(y,{children:[(0,E.jsxs)(I,{children:["Author: ",r]}),(0,E.jsx)(b,{children:e})]})},t)}))})]})}},5291:function(n,t,r){r.d(t,{s:function(){return o}});var e=r(1686),o=r.n(e)().Report.init({width:"400px",titleFontSize:"16px",titleMaxLength:50})},5861:function(n,t,r){function e(n,t,r,e,o,i,u){try{var c=n[i](u),a=c.value}catch(s){return void r(s)}c.done?t(a):Promise.resolve(a).then(e,o)}function o(n){return function(){var t=this,r=arguments;return new Promise((function(o,i){var u=n.apply(t,r);function c(n){e(u,o,i,c,a,"next",n)}function a(n){e(u,o,i,c,a,"throw",n)}c(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=779.229de7a7.chunk.js.map
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{4852:function(n,t,r){r.d(t,{FR:function(){return a},FY:function(){return f},KH:function(){return h},VQ:function(){return s},lG:function(){return u}});var e="https://api.themoviedb.org/3/trending/movie/week",o="https://api.themoviedb.org/3/search/movie",i="https://api.themoviedb.org/3/movie/",c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjAwOTdiYTdkMGEwMjdhMWIwZmQ1MzE4ZDEwOWQyNiIsInN1YiI6IjY0NzMyNjgzOWFlNjEzMDBlNTk0ODMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZZFB21DrPYslGFOp2UJX2KSQ02EhM3eeP3-goKJHXAk"}},u=function(){return fetch("".concat(e),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},a=function(n){return fetch("".concat(o,"?query=").concat(n),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},s=function(n){return fetch("".concat(i).concat(n),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},f=function(n){return fetch("".concat(i).concat(n,"/credits"),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},h=function(n){return fetch("".concat(i).concat(n,"/reviews"),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},725:function(n,t,r){var e=r(2791),o=r(2269),i=r(184),c=function(n){var t=n.array,r=n.location;return t.map((function(n){var t=n.id,e=n.title;return(0,i.jsx)("li",{children:(0,i.jsx)(o.Fg,{to:"/movies/".concat(t),state:{from:r},children:e})},t)}))};t.Z=(0,e.memo)(c)},6608:function(n,t,r){r.d(t,{GB:function(){return s},Gq:function(){return a},W$:function(){return f}});var e,o,i,c=r(168),u=r(6444),a=u.ZP.form(e||(e=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n"]))),s=u.ZP.input(o||(o=(0,c.Z)(["\n  display: block;\n  width: 250px;\n  height: 30px;\n  border-radius: 5px;\n"]))),f=u.ZP.button(i||(i=(0,c.Z)(["\n  width: 100px;\n  height: 35px;\n  font-size: 15px;\n  border-radius: 5px;\n"])))},5291:function(n,t,r){r.d(t,{s:function(){return o}});var e=r(1686),o=r.n(e)().Report.init({width:"400px",titleFontSize:"16px",titleMaxLength:50})},680:function(n,t,r){r.r(t);var e=r(3433),o=r(9439),i=r(7689),c=r(2791),u=r(1686),a=r(5291),s=r(966),f=r(4852),h=r(2269),l=r(725),p=r(184);t.default=function(){var n=(0,c.useState)([]),t=(0,o.Z)(n,2),r=t[0],d=t[1],x=(0,c.useState)(!1),m=(0,o.Z)(x,2),Z=m[0],g=m[1],w=(0,c.useState)(null),v=(0,o.Z)(w,2),j=v[0],b=v[1],y=(0,i.TH)();return(0,c.useEffect)((function(){g(!0),(0,f.lG)().then((function(n){return d((0,e.Z)(n.results))})).catch((function(n){return b(n.message)})).finally((function(){return g(!1)}))}),[]),(0,p.jsxs)(p.Fragment,{children:[j&&u.Report.failure("Something went wrong, please try again later",a.s),Z?(0,p.jsx)(s.Q,{}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(h.CV,{children:"Trending movies today"}),(0,p.jsx)(h.HX,{children:(0,p.jsx)(l.Z,{array:r,location:y})})]})]})}},2269:function(n,t,r){r.d(t,{CV:function(){return d},E2:function(){return g},Fg:function(){return Z},HX:function(){return x},Xd:function(){return w},e2:function(){return m}});var e,o,i,c,u,a,s,f=r(168),h=r(6444),l=r(6608),p=r(1087),d=h.ZP.h1(e||(e=(0,f.Z)(["\n  font-size: 50px;\n  margin-bottom: 20px;\n  color: #32363d;\n"]))),x=h.ZP.ul(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),m=h.ZP.ul(i||(i=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n"]))),Z=(0,h.ZP)(p.rU)(c||(c=(0,f.Z)(["\n  font-size: 20px;\n  text-decoration: none;\n  color: #1261e0;\n  transition: color 250ms ease;\n\n  &:hover,\n  &:focus-visible {\n    color: #eb1b0c;\n    text-decoration: underline;\n  }\n"]))),g=(0,h.ZP)(l.W$)(u||(u=(0,f.Z)(["\n  margin-left: 10px;\n"]))),w=(0,h.ZP)(l.W$)(a||(a=(0,f.Z)(["\n  width: 150px;\n"])));(0,h.ZP)(l.W$)(s||(s=(0,f.Z)(["\n  margin-top: 10px;\n"])))}}]);
//# sourceMappingURL=680.a7f12e87.chunk.js.map
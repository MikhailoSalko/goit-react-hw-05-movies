"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[757],{4852:function(n,t,e){e.d(t,{FR:function(){return a},FY:function(){return s},KH:function(){return h},VQ:function(){return f},lG:function(){return u}});var r="https://api.themoviedb.org/3/trending/movie/week",i="https://api.themoviedb.org/3/search/movie",o="https://api.themoviedb.org/3/movie/",c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjAwOTdiYTdkMGEwMjdhMWIwZmQ1MzE4ZDEwOWQyNiIsInN1YiI6IjY0NzMyNjgzOWFlNjEzMDBlNTk0ODMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZZFB21DrPYslGFOp2UJX2KSQ02EhM3eeP3-goKJHXAk"}},u=function(){return fetch("".concat(r),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},a=function(n){return fetch("".concat(i,"?query=").concat(n),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},f=function(n){return fetch("".concat(o).concat(n),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},s=function(n){return fetch("".concat(o).concat(n,"/credits"),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))},h=function(n){return fetch("".concat(o).concat(n,"/reviews"),c).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}},4737:function(n,t,e){e.r(t),e.d(t,{default:function(){return E}});var r,i,o,c,u,a=e(5861),f=e(9439),s=e(7757),h=e.n(s),p=e(2791),d=e(4852),l=e(7689),w=e(1686),v=e(5291),x=e(966),g=e.p+"static/media/defaultPerson.dd9cbd8fe8e8b1faafe1.png",m=e(168),j=e(6444),Z=j.ZP.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n"]))),b=j.ZP.div(i||(i=(0,m.Z)(["\n  padding: 10px;\n  width: 240px;\n  height: 380px;\n  text-align: center;\n"]))),y=j.ZP.img(o||(o=(0,m.Z)(["\n  width: 100%;\n  height: 350px;\n  margin-bottom: 10px;\n"]))),k=j.ZP.p(c||(c=(0,m.Z)(["\n  font-weight: bold;\n  font-size: 20px;\n"]))),I=j.ZP.p(u||(u=(0,m.Z)(["\n  font-size: 15px;\n"]))),z=e(184),E=function(){var n=(0,p.useState)([]),t=(0,f.Z)(n,2),e=t[0],r=t[1],i=(0,p.useState)(!1),o=(0,f.Z)(i,2),c=o[0],u=o[1],s=(0,p.useState)(null),m=(0,f.Z)(s,2),j=m[0],E=m[1],J=(0,l.UO)().movieId;return(0,p.useEffect)((function(){var n=function(){var n=(0,a.Z)(h().mark((function n(){return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,d.FY)(J).then((function(n){var t=n.cast;return r(t)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();u(!0),n().catch((function(n){return E(n)})).finally((function(){return u(!1)}))}),[J]),(0,z.jsxs)(z.Fragment,{children:[j&&w.Report.failure("Something went wrong, please try again later",v.s),c?(0,z.jsx)(x.Q,{}):(0,z.jsx)(Z,{children:0===e.length?(0,z.jsx)("p",{style:{fontSize:"20px",fontWeight:"bold"},children:"We don't have any information about the cast"}):e.map((function(n){var t=n.id,e=n.name,r=n.character,i=n.profile_path;return(0,z.jsx)("li",{children:(0,z.jsxs)(b,{children:[(0,z.jsx)(y,{src:i?"".concat("https://image.tmdb.org/t/p/").concat("w500").concat(i):g,alt:e}),(0,z.jsx)(k,{children:e}),(0,z.jsx)(I,{children:r})]})},t)}))})]})}},5291:function(n,t,e){e.d(t,{s:function(){return i}});var r=e(1686),i=e.n(r)().Report.init({width:"400px",titleFontSize:"16px",titleMaxLength:50})},5861:function(n,t,e){function r(n,t,e,r,i,o,c){try{var u=n[o](c),a=u.value}catch(f){return void e(f)}u.done?t(a):Promise.resolve(a).then(r,i)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(i,o){var c=n.apply(t,e);function u(n){r(c,i,o,u,a,"next",n)}function a(n){r(c,i,o,u,a,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return i}})}}]);
//# sourceMappingURL=757.ce77cd55.chunk.js.map
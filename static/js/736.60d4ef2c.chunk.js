"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{8081:function(n,t,e){e.d(t,{RY:function(){return l},bI:function(){return f},fP:function(){return g},vw:function(){return s}});var r=e(5861),a=e(7757),c=e.n(a),i=e(4569),o=e.n(i),u="419c8d7d79cbcac22c5520f1ac14d2c7";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(t,"/").concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c,i,o,u=e(6373),s=e(3063),p=e(168),f=e(6031),d=f.ZP.section(r||(r=(0,p.Z)(["\n  width: 100%;\n  /* text-align: center; */\n  padding: 10px;\n  background-color: #aaf7bd;\n"]))),l=f.ZP.ul(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  text-align: center;\n"]))),h=f.ZP.li(c||(c=(0,p.Z)(["\n  background-color: yellow;\n  width: 120px;\n  list-style: none;\n  margin-right: 5px;\n  margin-bottom: 5px;\n"]))),g=f.ZP.p(i||(i=(0,p.Z)(["\n  height: 20px;\n  font-size: 14px;\n"]))),m=f.ZP.img(o||(o=(0,p.Z)(["\n  width: 100%;\n"]))),v=e(167),x=e(184),w=function(){var n=(0,s.i)("credits"),t=n.data,e=n.loading,r=t.cast;if(r){var a=r.slice(0,21);return(0,x.jsxs)(d,{children:[e&&(0,x.jsx)(u.g4,{color:"#00BFFF",height:60,width:60}),0!==r.length?(0,x.jsx)(l,{children:a.map((function(n){return(0,x.jsxs)(h,{children:[(0,x.jsx)(g,{children:n.name}),(0,x.jsx)(m,{src:(t=n.profile_path,null===t?v:"https://image.tmdb.org/t/p/w500/".concat(t)),alt:"photo cast"})]},n.id);var t}))}):(0,x.jsx)(g,{children:"We dont have any cast for this movie"})]})}}},3063:function(n,t,e){e.d(t,{i:function(){return u}});var r=e(885),a=e(2791),c=e(6871),i=e(5562),o=e(8081),u=function(n){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),u=e[0],s=e[1],p=(0,a.useState)(!1),f=(0,r.Z)(p,2),d=f[0],l=f[1],h=(0,c.UO)().movieId;return(0,a.useEffect)((function(){h&&(l(!0),(0,o.fP)(h,n).then((function(n){s(n)})).catch((function(n){return i.Notify.failure("Ooooops somthing went wrong")})).finally((function(){return l(!1)})))}),[h,n]),{data:u,loading:d}}},167:function(n,t,e){n.exports=e.p+"static/media/boy.3e0d298d08b219023d4d.jpg"}}]);
//# sourceMappingURL=736.60d4ef2c.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{8081:function(n,t,e){e.d(t,{RY:function(){return f},bI:function(){return l},fP:function(){return x},vw:function(){return u}});var r=e(5861),i=e(7757),a=e.n(i),o=e(4569),c=e.n(o),s="419c8d7d79cbcac22c5520f1ac14d2c7";function u(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(s));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5170:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var r,i,a,o,c,s,u,p,l,d,f,h,x,g=e(885),m=e(2791),Z=e(5562),v=e(9e3),w=e(6373),j=e(6871),y=e(168),b=e(6031),k=e(501),P=b.ZP.section(r||(r=(0,y.Z)(["\n  width: 100%;\n  display: flex;\n\n  background-color: yellow;\n"]))),_=b.ZP.h2(i||(i=(0,y.Z)(["\n  font-size: 30px;\n"]))),S=b.ZP.p(a||(a=(0,y.Z)(["\n  font-size: 16px;\n"]))),z=b.ZP.img(o||(o=(0,y.Z)(["\n  width: 300px;\n  background-color: yellowgreen;\n"]))),U=b.ZP.span(c||(c=(0,y.Z)(["\n  font-size: 20px;\n  font-weight: bold;\n"]))),F=b.ZP.div(s||(s=(0,y.Z)(["\n  margin-left: 20px;\n  padding: 10px;\n  width: 100%;\n"]))),N=b.ZP.div(u||(u=(0,y.Z)(["\n  width: 100%;\n  margin-left: 20px;\n  margin-top: 10px;\n  border-top: solid 3px grey;\n  border-bottom: solid 3px grey;\n"]))),O=b.ZP.p(p||(p=(0,y.Z)(["\n  font-size: 20px;\n  margin: 0px;\n"]))),C=b.ZP.ul(l||(l=(0,y.Z)([""]))),R=b.ZP.li(d||(d=(0,y.Z)([""]))),G=(0,b.ZP)(k.OL)(f||(f=(0,y.Z)(["\n  font-size: 14px;\n  margin-left: 10px;\n  text-decoration: none;\n  cursor: pointer;\n  &.active {\n    color: orange;\n  }\n"]))),I=(0,b.ZP)(k.rU)(h||(h=(0,y.Z)(["\n  font-size: 14px;\n  margin-left: 20px;\n  text-decoration: none;\n"]))),Y=b.ZP.span(x||(x=(0,y.Z)(["\n  margin-right: 5px;\n"]))),q=e(8081),A=e(184),B=function(){var n,t,e=(0,m.useState)(""),r=(0,g.Z)(e,2),i=r[0],a=r[1],o=(0,m.useState)(""),c=(0,g.Z)(o,2),s=c[0],u=c[1],p=(0,m.useState)([]),l=(0,g.Z)(p,2),d=l[0],f=l[1],h=(0,m.useState)(""),x=(0,g.Z)(h,2),y=x[0],b=x[1],k=(0,m.useState)(""),B=(0,g.Z)(k,2),E=B[0],H=B[1],L=(0,m.useState)(!1),T=(0,g.Z)(L,2),D=T[0],J=T[1],K=(0,j.UO)().movieId,M=null!==(n=null===(t=(0,j.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/";(0,m.useEffect)((function(){K&&(J(!0),(0,q.RY)(K).then((function(n){var t=n.title,e=n.overview,r=n.genres,i=n.poster_path,o=n.popularity;a(t),u(e),f(r),b(i),H(o)})).catch((function(n){return Z.Notify.failure("Ooooops somthing went wrong")})).finally((function(){return J(!1)})))}),[K]);var Q=d.map((function(n){return n.name})).join(", ");return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(I,{to:M,children:[(0,A.jsxs)(Y,{children:[" ",(0,A.jsx)(v.Nek,{})]}),"Go back"]}),(0,A.jsxs)(P,{children:[D&&(0,A.jsx)(w.g4,{color:"#00BFFF",height:60,width:60}),(0,A.jsx)(z,{src:function(n){if(""!==n)return null===n?Z.Notify.warning("No poster"):"https://image.tmdb.org/t/p/w500/".concat(n)}(y),alt:"photo movie"}),(0,A.jsxs)(F,{children:[(0,A.jsx)(_,{children:i}),(0,A.jsxs)(S,{children:[(0,A.jsx)(U,{children:"Popularity:"})," ",E]}),(0,A.jsx)(U,{children:"Overview"})," ",(0,A.jsxs)(S,{children:[" ",s]}),(0,A.jsx)(U,{children:"Genres"}),(0,A.jsx)(S,{children:Q})]})]}),(0,A.jsxs)(N,{children:[(0,A.jsx)(O,{children:"Additional information"}),(0,A.jsxs)(C,{children:[(0,A.jsx)(R,{children:(0,A.jsx)(G,{to:"cast",state:{from:M},children:"Cast"})}),(0,A.jsx)(R,{children:(0,A.jsx)(G,{to:"reviews",state:{from:M},children:"Reviews"})})]}),(0,A.jsx)(j.j3,{})]})]})}}}]);
//# sourceMappingURL=170.9443c7cd.chunk.js.map
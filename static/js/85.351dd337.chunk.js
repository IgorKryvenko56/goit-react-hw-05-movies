"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[85],{9544:function(t,e,A){A.r(e);var r=A(5861),a=A(9439),n=A(7757),o=A.n(n),i=A(2791),u=A(8831),s=A(97),c=A(184);e.default=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),A=e[0],n=e[1],p=(0,i.useState)(null),K=(0,a.Z)(p,2),g=K[0],U=K[1],B=(0,i.useState)(!1),l=(0,a.Z)(B,2),Q=l[0],F=l[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(o().mark((function t(){var e,A;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,F(!0),t.next=4,(0,u.JS)();case 4:e=t.sent,A=e.results,n(A),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),U(t.t0.message);case 12:return t.prev=12,F(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,c.jsxs)(c.Fragment,{children:[g&&(0,c.jsx)("div",{children:"Try to reload the page"}),Q&&(0,c.jsx)(s.aN,{}),Boolean(A.length)&&(0,c.jsx)(s.eW,{array:A})]})}},8831:function(t,e,A){A.d(e,{Gc:function(){return K},zD:function(){return p},Q_:function(){return c},jr:function(){return g},JS:function(){return s}});var r=A(5861),a=A(7757),n=A.n(a),o=A(1243),i=A.p+"static/media/default-photo.eb1c36c5b3a5d7a9ad52.jpeg",u="48a6f07a25987cf4ac63d30acb4cff08";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var t=(0,r.Z)(n().mark((function t(){var e,A,r,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={api_key:u},t.next=3,o.Z.get("/trending/movie/week",{params:e});case 3:return A=t.sent,r=A.data,a=r.results.map((function(t){return{id:t.id,title:t.title}})),t.abrupt("return",{results:a});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(n().mark((function t(e){var A,r,a,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A={api_key:u,language:"en-US",query:e},t.next=3,o.Z.get("/search/movie",{params:A});case 3:return r=t.sent,a=r.data,i=a.results.map((function(t){return{id:t.id,title:t.original_title}})),t.abrupt("return",{results:i});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(n().mark((function t(e){var A,r,a,s,c,p,K,g,U,B;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A={api_key:u},t.next=3,o.Z.get("/movie/".concat(e),{params:A});case 3:return r=t.sent,a=r.data,s=a.id,c=a.original_title,p=a.genres,K=a.overview,g=a.poster_path,U=a.release_date,B=a.vote_average,t.abrupt("return",{id:s,original_title:c,genres:p.length?(n=p,n.map((function(t){return t.name})).join(", ")):"Genres aren't given",overview:K,poster_path:g?"https://image.tmdb.org/t/p/w300"+g:i,release_date:new Date(U).getFullYear(),vote_average:Math.round(10*B)});case 7:case"end":return t.stop()}var n}),t)})));return function(e){return t.apply(this,arguments)}}(),K=function(){var t=(0,r.Z)(n().mark((function t(e){var A,r,a,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A={api_key:u,language:"en-US"},t.next=3,o.Z.get("/movie/".concat(e,"/credits"),{params:A});case 3:return r=t.sent,a=r.data,i=a.cast.map((function(t){var e=t.id,A=t.original_name,r=t.profile_path;return{id:e,original_name:A,profile_path:r?"https://image.tmdb.org/t/p/w300"+r:"data:image/jpeg;base64,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",character:t.character}})),t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(n().mark((function t(e){var A,r,a,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return A={api_key:u,language:"en-US"},t.next=3,o.Z.get("/movie/".concat(e,"/reviews"),{params:A});case 3:return r=t.sent,a=r.data,i=a.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})),t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=85.351dd337.chunk.js.map
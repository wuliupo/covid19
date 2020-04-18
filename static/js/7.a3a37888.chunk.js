(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[7],{105:function(e,t,n){"use strict";var a=n(74),r=n(77),c=n(0),o=n.n(c),i=n(130),u=n(128),l=n(82);t.a=function(e){var t=e.height,n=o.a.useState(),c=Object(r.a)(n,2),s=c[0],d=c[1],m=o.a.useState(!1),f=Object(r.a)(m,2),p=f[0],v=f[1],b=Object(l.c)().data;return o.a.useEffect((function(){if(b&&s&&!p){var e=new u.a({container:"trend-chart",autoFit:!0,height:null!==t&&void 0!==t?t:s/971*800});v(!0),e.data([].concat(Object(a.a)(b.map((function(e){return{number:e.totalConfirmed,reportDate:e.reportDate,type:"total confirmed"}}))),Object(a.a)(b.map((function(e){return{reportDate:e.reportDate,number:e.deaths.total,type:"total deaths"}}))))),e.scale({reportDate:{range:[0,1],sync:!0},totalConfirmed:{min:0,nice:!0,sync:!0},deaths:{min:0,nice:!0,sync:!0}}),e.tooltip({showCrosshairs:!0,shared:!0}),e.line().position("reportDate*number").shape("smooth").color("type",(function(e){return"total confirmed"===e?"blue":"red"})),e.render()}}),[b,s,p,t]),o.a.createElement(i.a,{bounds:!0,onResize:function(e){e.bounds&&d(e.bounds.width)}},(function(e){var t=e.measureRef;return o.a.createElement("div",{ref:t,id:"trend-chart"})}))}},307:function(e,t,n){e.exports={trendCard:"daily-trend_trendCard__M5OiD",trendTable:"daily-trend_trendTable__LvIiM",mainContent:"daily-trend_mainContent__1c30Q"}},313:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(167),o=n(12),i=n(131),u=n(306),l=n.n(u),s=n(10),d=n(127),m=n(307),f=n.n(m),p=n(105),v=n(86),b=n(82);t.default=function(){var e=Object(b.c)().data;return r.a.createElement(o.a,null,r.a.createElement(o.c,null,r.a.createElement(o.b,{span:12},r.a.createElement(v.a,null,r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement("span",null,"Daily Trend")))),r.a.createElement(o.c,{className:f.a.mainContent},r.a.createElement(o.b,{span:8},r.a.createElement(i.a,{stickyColumns:1,stickyRows:1,className:f.a.trendTable},r.a.createElement(i.d,null,r.a.createElement(i.e,null,r.a.createElement(i.g,null,r.a.createElement(i.f,null,"Date"),r.a.createElement(i.f,{isNumeric:!0},"Total Confirmed"),r.a.createElement(i.f,{isNumeric:!0},"New Cases"),r.a.createElement(i.f,{isNumeric:!0},"Total Deaths"))),r.a.createElement(i.b,null,e.sort((function(e,t){return l()(t.reportDate).toDate().valueOf()-l()(e.reportDate).toDate().valueOf()})).map((function(e){var t,n=e.reportDate,a=e.deltaConfirmed,c=e.deaths,o=e.totalConfirmed;return r.a.createElement(i.g,{key:n},r.a.createElement(i.c,null,r.a.createElement(s.b,{to:"/daily-trend/".concat(n)},r.a.createElement(d.a,{dense:!0},n))),r.a.createElement(i.c,{isNumeric:!0},null===o||void 0===o?void 0:o.toLocaleString()),r.a.createElement(i.c,{isNumeric:!0},null===a||void 0===a?void 0:a.toLocaleString()),r.a.createElement(i.c,{isNumeric:!0},null===c||void 0===c||null===(t=c.total)||void 0===t?void 0:t.toLocaleString()))})))))),r.a.createElement(o.b,{span:4},r.a.createElement(c.a,{className:f.a.trendCard},r.a.createElement(p.a,{height:300})))))}},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return D}));var a=n(77),r=n(132),c=n(133),o=n(129),i=n(0),u=n.n(i),l=n(117),s=n.n(l),d=n(125),m=n.n(d),f=n(126),p=n.n(f),v=n(96),b=n.n(v),h=n(97),E="https://covid19.mathdro.id";function O(){return(O=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(E).concat(t),{credentials:"same-origin"});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e){return O.apply(this,arguments)};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.a)("/api/daily",j,Object(c.a)({suspense:!0},e))}function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.a)("/api",j,Object(c.a)({suspense:!0},e))}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.a)("/api/confirmed",j,Object(c.a)({suspense:!0},e))}function _(){var e=D(),t=e.data,n=Object(r.a)(e,["data"]),o=u.a.useMemo((function(){return t?m()(s()(t,"countryRegion")).map((function(e){var t,n,r=Object(a.a)(e,2),c=r[0],o=r[1],i=p()(o.map((function(e){return e.confirmed}))),u=p()(o.map((function(e){return e.recovered}))),l=p()(o.map((function(e){return e.deaths}))),s=p()(o.map((function(e){return e.active})));return{country:c,list:o,confirmed:i,recovered:u,deaths:l,active:s,iso3:null===o||void 0===o||null===(t=o[0])||void 0===t?void 0:t.iso3,iso2:null===o||void 0===o||null===(n=o[0])||void 0===n?void 0:n.iso2}})):[]}),[t]);return Object(c.a)({data:o},n)}},86:function(e,t,n){"use strict";var a=n(74),r=n(0),c=n.n(r),o=n(71),i=n.n(o),u=n(87),l=n.n(u);t.a=function(e){var t=e.children;if(!i()(t))return c.a.createElement("div",{className:l.a.breadcrumb},t);var n=Object(a.a)(t);return c.a.createElement("div",{className:l.a.breadcrumb},n.reduce((function(e,t,a){return a<n.length-1?e=e.concat(t,c.a.createElement("span",{className:l.a.seperator},"/")):e.push(t),e}),[]))}},87:function(e,t,n){e.exports={breadcrumb:"breadcrumb_breadcrumb__3AUIj",seperator:"breadcrumb_seperator__4tXv5"}}}]);
//# sourceMappingURL=7.a3a37888.chunk.js.map
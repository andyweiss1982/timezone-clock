(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),c=n.n(o),i=(n(10),n(1)),u=Object(r.createContext)(),l=function(e){var t=Object(r.useState)(new Date),n=Object(i.a)(t,2),o=n[0],c=n[1],l=function(){c(new Date)};return Object(r.useEffect)(function(){var e=setInterval(l,100);return function(){clearInterval(e)}},[]),a.a.createElement(u.Provider,{value:{time:o}},e.children)},m=Object(r.createContext)(),s=function(e){var t=Intl.DateTimeFormat().resolvedOptions().timeZone,n=Object(r.useState)(t),o=Object(i.a)(n,2),c=o[0],u=o[1],l=Object(r.useState)([]),s=Object(i.a)(l,2),f=s[0],v=s[1];Object(r.useEffect)(function(){fetch("http://api.timezonedb.com/v2.1/list-time-zone?key=02GNRRUJEWYG&format=json").then(function(e){return e.json()}).then(function(e){var t=e.zones;v(t.filter(function(e){return!e.zoneName.startsWith("Antarctica")}).map(function(e){return e.zoneName}))})},[]);var d=function(e){var t=e.split("/"),n=t.slice(-1)[0].split("_").join(" "),r=t[0];return"".concat(n," (").concat(r,")")},E={timeZone:c,setTimeZone:u,getTimeZones:function(e){if(!e)return[];var t=f.filter(function(t){return d(t).toLowerCase().startsWith(e.toLowerCase())});return t.sort(function(e,t){return d(e)<d(t)?-1:d(t)>d(e)?1:0}),t},formatName:d};return a.a.createElement(m.Provider,{value:E},e.children)},f=function(){var e=Object(r.useContext)(u).time,t=Object(r.useContext)(m),n=t.timeZone,o=t.formatName;return a.a.createElement("main",null,a.a.createElement("div",{id:"current-date"},e.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:n})),a.a.createElement("div",{id:"current-time"},e.toLocaleTimeString("en-US",{timeZone:n})),a.a.createElement("div",{id:"current-zone"},o(n)))},v=function(){var e=Object(r.useContext)(m),t=e.getTimeZones,n=e.setTimeZone,o=e.formatName,c=Object(r.useContext)(u).time,l=Object(r.useState)([]),s=Object(i.a)(l,2),f=s[0],v=s[1],d=Object(r.useRef)();Object(r.useEffect)(function(){return document.addEventListener("click",E),function(){return document.removeEventListener("click",E)}},[]);var E=function(e){e.target.closest("#search")||v([])},h=function(){var e=d.current.value;v(t(e))};return a.a.createElement("div",{id:"search"},a.a.createElement("input",{id:"search-bar",type:"text",autoComplete:"off",placeholder:"Search",onChange:h,onFocus:h,ref:d}),a.a.createElement("ul",{id:"search-results"},f.map(function(e){var t=c.toLocaleTimeString("en-US",{timeZone:e}),r=o(e);return a.a.createElement("li",{key:e,onClick:function(){return function(e){n(e),v([]),d.current.value=""}(e)}},a.a.createElement("span",{className:"zone-name"},r),a.a.createElement("span",{className:"local-time"},t))})))},d=function(){return a.a.createElement(l,null,a.a.createElement(s,null,a.a.createElement(f,null),a.a.createElement(v,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},4:function(e,t,n){e.exports=n(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.0fe07849.chunk.js.map
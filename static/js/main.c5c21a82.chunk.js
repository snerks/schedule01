(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(o,r,e){},15:function(o,r,e){},17:function(o,r,e){"use strict";e.r(r);var n=e(0),t=e.n(n),u=e(2),c=e.n(u),l=(e(13),e(3)),i=e(4),a=e(6),h=e(5),g=e(7),s=(e(15),function(o){function r(){var o,e;Object(l.a)(this,r);for(var n=arguments.length,t=new Array(n),u=0;u<n;u++)t[u]=arguments[u];return(e=Object(a.a)(this,(o=Object(h.a)(r)).call.apply(o,[this].concat(t)))).timeUnits=[{hour:0,colour:"green"},{hour:1,colour:"green"},{hour:2,colour:"green"},{hour:3,colour:"green"},{hour:4,colour:"green"},{hour:5,colour:"red"},{hour:6,colour:"red"},{hour:7,colour:"orange"},{hour:8,colour:"green"},{hour:9,colour:"green"},{hour:10,colour:"green"},{hour:11,colour:"green"},{hour:12,colour:"green"},{hour:13,colour:"green"},{hour:14,colour:"green"},{hour:15,colour:"green"},{hour:16,colour:"green"},{hour:17,colour:"red"},{hour:18,colour:"red"},{hour:19,colour:"orange"},{hour:20,colour:"green"},{hour:21,colour:"green"},{hour:22,colour:"green"},{hour:23,colour:"green"}],e}return Object(g.a)(r,o),Object(i.a)(r,[{key:"zeroFill",value:function(o,r){return(r-=o.toString().length)>0?new Array(r+(/\./.test(o.toString())?2:1)).join("0")+o:o+""}},{key:"render",value:function(){var o=this,r=(new Date).getHours(),e=this.timeUnits.map(function(e,n){return t.a.createElement("div",{key:n,style:{paddingLeft:0,fontWeight:"bold",backgroundColor:e.colour,color:"white",border:r===e.hour?"3px solid black":""}},o.zeroFill(e.hour,2),":00")});return t.a.createElement("div",{className:"App"},t.a.createElement("div",{style:{margin:0,listStyleType:"none",listStylePosition:"inside"}},e))}}]),r}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(t.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(o){o.unregister()})},8:function(o,r,e){o.exports=e(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.c5c21a82.chunk.js.map
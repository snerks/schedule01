(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(o,r,e){},15:function(o,r,e){},17:function(o,r,e){"use strict";e.r(r);var n=e(0),t=e.n(n),c=e(2),l=e.n(c),a=(e(13),e(3)),u=e(4),i=e(6),h=e(5),g=e(7),d=(e(15),function(o){function r(){var o,e;Object(a.a)(this,r);for(var n=arguments.length,t=new Array(n),c=0;c<n;c++)t[c]=arguments[c];return(e=Object(i.a)(this,(o=Object(h.a)(r)).call.apply(o,[this].concat(t)))).timeUnits=[{hour:0,color:"white",backgroundColor:"green"},{hour:1,color:"white",backgroundColor:"green"},{hour:2,color:"white",backgroundColor:"green"},{hour:3,color:"white",backgroundColor:"green"},{hour:4,color:"white",backgroundColor:"green"},{hour:5,color:"white",backgroundColor:"red"},{hour:6,color:"white",backgroundColor:"red"},{hour:7,color:"black",backgroundColor:"orange"},{hour:8,color:"white",backgroundColor:"green"},{hour:9,color:"white",backgroundColor:"green"},{hour:10,color:"white",backgroundColor:"green"},{hour:11,color:"white",backgroundColor:"green"},{hour:12,color:"white",backgroundColor:"green"},{hour:13,color:"white",backgroundColor:"green"},{hour:14,color:"white",backgroundColor:"green"},{hour:15,color:"white",backgroundColor:"green"},{hour:16,color:"white",backgroundColor:"green"},{hour:17,color:"white",backgroundColor:"red"},{hour:18,color:"white",backgroundColor:"red"},{hour:19,color:"black",backgroundColor:"orange"},{hour:20,color:"white",backgroundColor:"green"},{hour:21,color:"white",backgroundColor:"green"},{hour:22,color:"white",backgroundColor:"green"},{hour:23,color:"white",backgroundColor:"green"}],e}return Object(g.a)(r,o),Object(u.a)(r,[{key:"zeroFill",value:function(o,r){return(r-=o.toString().length)>0?new Array(r+(/\./.test(o.toString())?2:1)).join("0")+o:o+""}},{key:"render",value:function(){var o=this,r=(new Date).getHours(),e=this.timeUnits.map(function(e,n){return t.a.createElement("div",{key:n,style:{fontWeight:"bold",fontSize:12,backgroundColor:e.backgroundColor,color:e.color,border:r===e.hour?"3px solid white":""}},o.zeroFill(e.hour,2),":00")});return t.a.createElement("div",{className:"App"},t.a.createElement("div",{style:{margin:0}},e))}}]),r}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(t.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(o){o.unregister()})},8:function(o,r,e){o.exports=e(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.d72a51dc.chunk.js.map
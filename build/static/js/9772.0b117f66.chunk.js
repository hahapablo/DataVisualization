(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9772],{79772:function(t,n,e){"use strict";e.d(n,{DZ:function(){return b},FA:function(){return U},RD:function(){return x},dk:function(){return T},rj:function(){return C}});var r=e(72791),i=e(54753),o=e(98037),u=e(82897),a=e(57027),c=e(92353),f=e(80184),s=e(52007),l=e.n(s);function d(){return d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},d.apply(this,arguments)}var g=function(t){var n,e=t.axis,r=t.scale,i=t.ticksPosition,u=t.tickValues,a=t.tickSize,f=t.tickPadding,s=t.tickRotation,l=t.engine,g=void 0===l?"svg":l,m=(0,c.xX)(r,u),v=o.a6[g],h="bandwidth"in r?(0,c.Gv)(r):r,x={lineX:0,lineY:0},y={textX:0,textY:0},p="object"==typeof document&&"rtl"===document.dir,T=v.align.center,M=v.baseline.center;return"x"===e?(n=function(t){var n;return{x:null!=(n=h(t))?n:0,y:0}},x.lineY=a*("after"===i?1:-1),y.textY=(a+f)*("after"===i?1:-1),M="after"===i?v.baseline.top:v.baseline.bottom,0===s?T=v.align.center:"after"===i&&s<0||"before"===i&&s>0?(T=v.align[p?"left":"right"],M=v.baseline.center):("after"===i&&s>0||"before"===i&&s<0)&&(T=v.align[p?"right":"left"],M=v.baseline.center)):(n=function(t){var n;return{x:0,y:null!=(n=h(t))?n:0}},x.lineX=a*("after"===i?1:-1),y.textX=(a+f)*("after"===i?1:-1),T="after"===i?v.align.left:v.align.right),{ticks:m.map((function(t){return d({key:"number"==typeof t||"string"==typeof t?t:""+t,value:t},n(t),x,y)})),textAlign:T,textBaseline:M}},m=function(t,n){if(void 0===t||"function"==typeof t)return t;if("time"===n.type){var e=(0,u.i$)(t);return function(t){return e(t instanceof Date?t:new Date(t))}}return(0,a.WU)(t)},v=function(t){var n,e=t.width,r=t.height,i=t.scale,o=t.axis,u=t.values,a=(n=u,(Array.isArray(n)?u:void 0)||(0,c.xX)(i,u)),f="bandwidth"in i?(0,c.Gv)(i):i,s="x"===o?a.map((function(t){var n,e;return{key:""+t,x1:null!=(n=f(t))?n:0,x2:null!=(e=f(t))?e:0,y1:0,y2:r}})):a.map((function(t){var n,r;return{key:""+t,x1:0,x2:e,y1:null!=(n=f(t))?n:0,y2:null!=(r=f(t))?r:0}}));return s},h=(0,r.memo)((function(t){var n,e=t.value,u=t.format,a=t.lineX,c=t.lineY,s=t.onClick,l=t.textBaseline,g=t.textAnchor,m=t.animatedProps,v=(0,o.Fg)(),h=null!=(n=null==u?void 0:u(e))?n:e,x=(0,r.useMemo)((function(){var t={opacity:m.opacity};return s?{style:d({},t,{cursor:"pointer"}),onClick:function(t){return s(t,h)}}:{style:t}}),[m.opacity,s,h]);return(0,f.jsxs)(i.animated.g,d({transform:m.transform},x,{children:[(0,f.jsx)("line",{x1:0,x2:a,y1:0,y2:c,style:v.axis.ticks.line}),(0,f.jsx)(i.animated.text,{dominantBaseline:l,textAnchor:g,transform:m.textTransform,style:v.axis.ticks.text,children:h})]}))})),x=(0,r.memo)((function(t){var n=t.axis,e=t.scale,u=t.x,a=void 0===u?0:u,c=t.y,s=void 0===c?0:c,l=t.length,v=t.ticksPosition,x=t.tickValues,y=t.tickSize,p=void 0===y?5:y,T=t.tickPadding,M=void 0===T?5:T,k=t.tickRotation,C=void 0===k?0:k,b=t.format,U=t.renderTick,w=void 0===U?h:U,D=t.legend,Y=t.legendPosition,F=void 0===Y?"end":Y,S=t.legendOffset,Z=void 0===S?0:S,P=t.onClick,O=t.ariaHidden,H=(0,o.Fg)(),j=(0,r.useMemo)((function(){return m(b,e)}),[b,e]),A=g({axis:n,scale:e,ticksPosition:v,tickValues:x,tickSize:p,tickPadding:M,tickRotation:C}),B=A.ticks,X=A.textAlign,E=A.textBaseline,_=null;if(void 0!==D){var z,W=0,R=0,V=0;"y"===n?(V=-90,W=Z,"start"===F?(z="start",R=l):"middle"===F?(z="middle",R=l/2):"end"===F&&(z="end")):(R=Z,"start"===F?z="start":"middle"===F?(z="middle",W=l/2):"end"===F&&(z="end",W=l)),_=(0,f.jsx)("text",{transform:"translate("+W+", "+R+") rotate("+V+")",textAnchor:z,style:d({dominantBaseline:"central"},H.axis.legend.text),children:D})}var I=(0,o.tf)(),G=I.animate,N=I.config,J=(0,i.useSpring)({transform:"translate("+a+","+s+")",lineX2:"x"===n?l:0,lineY2:"x"===n?0:l,config:N,immediate:!G}),Q=(0,i.useTransition)(B,{keys:function(t){return t.key},initial:function(t){return{opacity:1,transform:"translate("+t.x+","+t.y+")",textTransform:"translate("+t.textX+","+t.textY+") rotate("+C+")"}},from:function(t){return{opacity:0,transform:"translate("+t.x+","+t.y+")",textTransform:"translate("+t.textX+","+t.textY+") rotate("+C+")"}},enter:function(t){return{opacity:1,transform:"translate("+t.x+","+t.y+")",textTransform:"translate("+t.textX+","+t.textY+") rotate("+C+")"}},update:function(t){return{opacity:1,transform:"translate("+t.x+","+t.y+")",textTransform:"translate("+t.textX+","+t.textY+") rotate("+C+")"}},leave:{opacity:0},config:N,immediate:!G});return(0,f.jsxs)(i.animated.g,{transform:J.transform,"aria-hidden":O,children:[Q((function(t,n,e,i){return r.createElement(w,d({tickIndex:i,format:j,rotate:C,textBaseline:E,textAnchor:X,animatedProps:t},n,P?{onClick:P}:{}))})),(0,f.jsx)(i.animated.line,{style:H.axis.domain.line,x1:0,x2:J.lineX2,y1:0,y2:J.lineY2}),_]})})),y={ticksPosition:l().oneOf(["before","after"]),tickValues:l().oneOfType([l().number,l().arrayOf(l().oneOfType([l().number,l().string,l().instanceOf(Date)])),l().string]),tickSize:l().number,tickPadding:l().number,tickRotation:l().number,format:l().oneOfType([l().func,l().string]),renderTick:l().func,legend:l().node,legendPosition:l().oneOf(["start","middle","end"]),legendOffset:l().number,ariaHidden:l().bool},p=(l().shape(y),["top","right","bottom","left"]),T=(0,r.memo)((function(t){var n=t.xScale,e=t.yScale,r=t.width,i=t.height,o={top:t.top,right:t.right,bottom:t.bottom,left:t.left};return(0,f.jsx)(f.Fragment,{children:p.map((function(t){var u=o[t];if(!u)return null;var a="top"===t||"bottom"===t;return(0,f.jsx)(x,d({},u,{axis:a?"x":"y",x:"right"===t?r:0,y:"bottom"===t?i:0,scale:a?n:e,length:a?r:i,ticksPosition:"top"===t||"left"===t?"before":"after"}),t)}))})})),M=(0,r.memo)((function(t){var n=t.animatedProps,e=(0,o.Fg)();return(0,f.jsx)(i.animated.line,d({},n,e.grid.line))})),k=(0,r.memo)((function(t){var n=t.lines,e=(0,o.tf)(),u=e.animate,a=e.config,c=(0,i.useTransition)(n,{keys:function(t){return t.key},initial:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},from:function(t){return{opacity:0,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},enter:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},update:function(t){return{opacity:1,x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}},leave:{opacity:0},config:a,immediate:!u});return(0,f.jsx)("g",{children:c((function(t,n){return(0,r.createElement)(M,d({},n,{key:n.key,animatedProps:t}))}))})})),C=(0,r.memo)((function(t){var n=t.width,e=t.height,i=t.xScale,o=t.yScale,u=t.xValues,a=t.yValues,c=(0,r.useMemo)((function(){return!!i&&v({width:n,height:e,scale:i,axis:"x",values:u})}),[i,u,n,e]),s=(0,r.useMemo)((function(){return!!o&&v({width:n,height:e,scale:o,axis:"y",values:a})}),[e,n,o,a]);return(0,f.jsxs)(f.Fragment,{children:[c&&(0,f.jsx)(k,{lines:c}),s&&(0,f.jsx)(k,{lines:s})]})})),b=function(t,n){var e=n.xScale,r=n.yScale,i=n.width,u=n.height,a=n.top,c=n.right,f=n.bottom,s=n.left,l=n.theme,v={top:a,right:c,bottom:f,left:s};p.forEach((function(n){var a=v[n];if(!a)return null;var c="top"===n||"bottom"===n,f="top"===n||"left"===n?"before":"after",s=c?e:r,h=m(a.format,s);!function(t,n){var e,r=n.axis,i=n.scale,u=n.x,a=void 0===u?0:u,c=n.y,f=void 0===c?0:c,s=n.length,l=n.ticksPosition,d=n.tickValues,m=n.tickSize,v=void 0===m?5:m,h=n.tickPadding,x=void 0===h?5:h,y=n.tickRotation,p=void 0===y?0:y,T=n.format,M=n.legend,k=n.legendPosition,C=void 0===k?"end":k,b=n.legendOffset,U=void 0===b?0:b,w=n.theme,D=g({axis:r,scale:i,ticksPosition:l,tickValues:d,tickSize:v,tickPadding:x,tickRotation:p,engine:"canvas"}),Y=D.ticks,F=D.textAlign,S=D.textBaseline;t.save(),t.translate(a,f),t.textAlign=F,t.textBaseline=S,t.font=(w.axis.ticks.text.fontWeight?w.axis.ticks.text.fontWeight+" ":"")+w.axis.ticks.text.fontSize+"px "+w.axis.ticks.text.fontFamily,(null!=(e=w.axis.domain.line.strokeWidth)?e:0)>0&&(t.lineWidth=Number(w.axis.domain.line.strokeWidth),t.lineCap="square",w.axis.domain.line.stroke&&(t.strokeStyle=w.axis.domain.line.stroke),t.beginPath(),t.moveTo(0,0),t.lineTo("x"===r?s:0,"x"===r?0:s),t.stroke());var Z="function"==typeof T?T:function(t){return""+t};if(Y.forEach((function(n){var e;(null!=(e=w.axis.ticks.line.strokeWidth)?e:0)>0&&(t.lineWidth=Number(w.axis.ticks.line.strokeWidth),t.lineCap="square",w.axis.ticks.line.stroke&&(t.strokeStyle=w.axis.ticks.line.stroke),t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(n.x+n.lineX,n.y+n.lineY),t.stroke());var r=Z(n.value);t.save(),t.translate(n.x+n.textX,n.y+n.textY),t.rotate((0,o.Ht)(p)),w.axis.ticks.text.fill&&(t.fillStyle=w.axis.ticks.text.fill),t.fillText(String(r),0,0),t.restore()})),void 0!==M){var P=0,O=0,H=0,j="center";"y"===r?(H=-90,P=U,"start"===C?(j="start",O=s):"middle"===C?(j="center",O=s/2):"end"===C&&(j="end")):(O=U,"start"===C?j="start":"middle"===C?(j="center",P=s/2):"end"===C&&(j="end",P=s)),t.translate(P,O),t.rotate((0,o.Ht)(H)),t.font=(w.axis.legend.text.fontWeight?w.axis.legend.text.fontWeight+" ":"")+w.axis.legend.text.fontSize+"px "+w.axis.legend.text.fontFamily,w.axis.legend.text.fill&&(t.fillStyle=w.axis.legend.text.fill),t.textAlign=j,t.textBaseline="middle",t.fillText(M,0,0)}t.restore()}(t,d({},a,{axis:c?"x":"y",x:"right"===n?i:0,y:"bottom"===n?u:0,scale:s,format:h,length:c?i:u,ticksPosition:f,theme:l}))}))},U=function(t,n){var e=n.width,r=n.height,i=n.scale,o=n.axis,u=n.values;v({width:e,height:r,scale:i,axis:o,values:u}).forEach((function(n){t.beginPath(),t.moveTo(n.x1,n.y1),t.lineTo(n.x2,n.y2),t.stroke()}))}},92353:function(t,n,e){"use strict";e.d(n,{__:function(){return un},eW:function(){return an},Gv:function(){return gn},ZN:function(){return dn},_S:function(){return on},xX:function(){return xn}});e(72064),e(66339),e(64286),e(15727),e(36609);var r=e(82897),i=e(70885),o=e(92267),u=e(99571),a=1e3,c=6e4,f=36e5,s=864e5,l=6048e5,d=2592e6,g=31536e6,m=new Date,v=new Date;function h(t,n,e,r){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(e){return t(e=new Date(e-1)),n(e,1),t(e),e},i.round=function(t){var n=i(t),e=i.ceil(t);return t-n<e-t?n:e},i.offset=function(t,e){return n(t=new Date(+t),null==e?1:Math.floor(e)),t},i.range=function(e,r,o){var u,a=[];if(e=i.ceil(e),o=null==o?1:Math.floor(o),!(e<r)||!(o>0))return a;do{a.push(u=new Date(+e)),n(e,o),t(e)}while(u<e&&e<r);return a},i.filter=function(e){return h((function(n){if(n>=n)for(;t(n),!e(n);)n.setTime(n-1)}),(function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;n(t,-1),!e(t););else for(;--r>=0;)for(;n(t,1),!e(t););}))},e&&(i.count=function(n,r){return m.setTime(+n),v.setTime(+r),t(m),t(v),Math.floor(e(m,v))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(r?function(n){return r(n)%t===0}:function(n){return i.count(0,n)%t===0}):i:null}),i}var x=h((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}));x.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?h((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):x:null};var y=x,p=(x.range,h((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*a)}),(function(t,n){return(n-t)/a}),(function(t){return t.getUTCSeconds()}))),T=p,M=(p.range,h((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*a)}),(function(t,n){t.setTime(+t+n*c)}),(function(t,n){return(n-t)/c}),(function(t){return t.getMinutes()}))),k=M,C=(M.range,h((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*a-t.getMinutes()*c)}),(function(t,n){t.setTime(+t+n*f)}),(function(t,n){return(n-t)/f}),(function(t){return t.getHours()}))),b=C,U=(C.range,h((function(t){return t.setHours(0,0,0,0)}),(function(t,n){return t.setDate(t.getDate()+n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*c)/s}),(function(t){return t.getDate()-1}))),w=U;U.range;function D(t){return h((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*c)/l}))}var Y=D(0),F=D(1),S=D(2),Z=D(3),P=D(4),O=D(5),H=D(6),j=(Y.range,F.range,S.range,Z.range,P.range,O.range,H.range,h((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}))),A=j,B=(j.range,h((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()})));B.every=function(t){return isFinite(t=Math.floor(t))&&t>0?h((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,e){n.setFullYear(n.getFullYear()+e*t)})):null};var X=B,E=(B.range,h((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*c)}),(function(t,n){return(n-t)/c}),(function(t){return t.getUTCMinutes()}))),_=E,z=(E.range,h((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*f)}),(function(t,n){return(n-t)/f}),(function(t){return t.getUTCHours()}))),W=z,R=(z.range,h((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/s}),(function(t){return t.getUTCDate()-1}))),V=R;R.range;function I(t){return h((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/l}))}var G=I(0),N=I(1),J=I(2),Q=I(3),$=I(4),q=I(5),L=I(6),K=(G.range,N.range,J.range,Q.range,$.range,q.range,L.range,h((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()}))),tt=K,nt=(K.range,h((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()})));nt.every=function(t){return isFinite(t=Math.floor(t))&&t>0?h((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)})):null};var et=nt;nt.range;function rt(t,n,e,r,m,v){var h=[[T,1,a],[T,5,5e3],[T,15,15e3],[T,30,3e4],[v,1,c],[v,5,3e5],[v,15,9e5],[v,30,18e5],[m,1,f],[m,3,108e5],[m,6,216e5],[m,12,432e5],[r,1,s],[r,2,1728e5],[e,1,l],[n,1,d],[n,3,7776e6],[t,1,g]];function x(n,e,r){var a=Math.abs(e-n)/r,c=(0,o.Z)((function(t){return(0,i.Z)(t,3)[2]})).right(h,a);if(c===h.length)return t.every((0,u.ly)(n/g,e/g,r));if(0===c)return y.every(Math.max((0,u.ly)(n,e,r),1));var f=(0,i.Z)(h[a/h[c-1][2]<h[c][2]/a?c-1:c],2),s=f[0],l=f[1];return s.every(l)}return[function(t,n,e){var r=n<t;if(r){var i=[n,t];t=i[0],n=i[1]}var o=e&&"function"===typeof e.range?e:x(t,n,e),u=o?o.range(t,+n+1):[];return r?u.reverse():u},x]}var it=rt(et,tt,G,V,W,_),ot=(0,i.Z)(it,2),ut=ot[0],at=ot[1],ct=rt(X,A,Y,w,b,k),ft=(0,i.Z)(ct,2),st=ft[0],lt=ft[1],dt=e(86732),gt=e(37924);function mt(t,n){var e,r=0,i=(t=t.slice()).length-1,o=t[r],u=t[i];return u<o&&(e=r,r=i,i=e,e=o,o=u,u=e),t[r]=n.floor(o),t[i]=n.ceil(u),t}function vt(t){return new Date(t)}function ht(t){return t instanceof Date?+t:+new Date(+t)}function xt(t,n,e,r,i,o,u,a,c,f){var s=(0,dt.ZP)(),l=s.invert,d=s.domain,g=f(".%L"),m=f(":%S"),v=f("%I:%M"),h=f("%I %p"),x=f("%a %d"),y=f("%b %d"),p=f("%B"),T=f("%Y");function M(t){return(c(t)<t?g:a(t)<t?m:u(t)<t?v:o(t)<t?h:r(t)<t?i(t)<t?x:y:e(t)<t?p:T)(t)}return s.invert=function(t){return new Date(l(t))},s.domain=function(t){return arguments.length?d(Array.from(t,ht)):d().map(vt)},s.ticks=function(n){var e=d();return t(e[0],e[e.length-1],null==n?10:n)},s.tickFormat=function(t,n){return null==n?M:f(n)},s.nice=function(t){var e=d();return t&&"function"===typeof t.range||(t=n(e[0],e[e.length-1],null==t?10:t)),t?d(mt(e,t)):s},s.copy=function(){return(0,dt.JG)(s,xt(t,n,e,r,i,o,u,a,c,f))},s}var yt=e(57027);function pt(t){return Math.log(t)}function Tt(t){return Math.exp(t)}function Mt(t){return-Math.log(-t)}function kt(t){return-Math.exp(-t)}function Ct(t){return isFinite(t)?+("1e"+t):t<0?0:t}function bt(t){return function(n){return-t(-n)}}function Ut(t){var n,e,r=t(pt,Tt),i=r.domain,o=10;function a(){return n=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}(o),e=function(t){return 10===t?Ct:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}(o),i()[0]<0?(n=bt(n),e=bt(e),t(Mt,kt)):t(pt,Tt),r}return r.base=function(t){return arguments.length?(o=+t,a()):o},r.domain=function(t){return arguments.length?(i(t),a()):i()},r.ticks=function(t){var r,a=i(),c=a[0],f=a[a.length-1];(r=f<c)&&(g=c,c=f,f=g);var s,l,d,g=n(c),m=n(f),v=null==t?10:+t,h=[];if(!(o%1)&&m-g<v){if(g=Math.floor(g),m=Math.ceil(m),c>0){for(;g<=m;++g)for(l=1,s=e(g);l<o;++l)if(!((d=s*l)<c)){if(d>f)break;h.push(d)}}else for(;g<=m;++g)for(l=o-1,s=e(g);l>=1;--l)if(!((d=s*l)<c)){if(d>f)break;h.push(d)}2*h.length<v&&(h=(0,u.ZP)(c,f,v))}else h=(0,u.ZP)(g,m,Math.min(m-g,v)).map(e);return r?h.reverse():h},r.tickFormat=function(t,i){if(null==i&&(i=10===o?".0e":","),"function"!==typeof i&&(i=(0,yt.WU)(i)),t===1/0)return i;null==t&&(t=10);var u=Math.max(1,o*t/r.ticks().length);return function(t){var r=t/e(Math.round(n(t)));return r*o<o-.5&&(r*=o),r<=u?i(t):""}},r.nice=function(){return i(mt(i(),{floor:function(t){return e(Math.floor(n(t)))},ceil:function(t){return e(Math.ceil(n(t)))}}))},r}function wt(){var t=Ut((0,dt.l4)()).domain([1,10]);return t.copy=function(){return(0,dt.JG)(t,wt()).base(t.base())},gt.o.apply(t,arguments),t}var Dt=e(67869);function Yt(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function Ft(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function St(t){var n=1,e=t(Yt(n),Ft(n));return e.constant=function(e){return arguments.length?t(Yt(n=+e),Ft(n)):n},(0,Dt.Q)(e)}function Zt(){var t=St((0,dt.l4)());return t.copy=function(){return(0,dt.JG)(t,Zt()).constant(t.constant())},gt.o.apply(t,arguments)}var Pt=e(1925),Ot=e(97914),Ht=(0,Ot.Z)((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t}));Ht.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?(0,Ot.Z)((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,e){n.setTime(+n+e*t)}),(function(n,e){return(e-n)/t})):Ht:null};var jt=Ht,At=(Ht.range,e(20601)),Bt=(0,Ot.Z)((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+n*At.Ym)}),(function(t,n){return(n-t)/At.Ym}),(function(t){return t.getUTCSeconds()})),Xt=Bt,Et=(Bt.range,(0,Ot.Z)((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*At.Ym)}),(function(t,n){t.setTime(+t+n*At.yB)}),(function(t,n){return(n-t)/At.yB}),(function(t){return t.getMinutes()}))),_t=Et,zt=(Et.range,(0,Ot.Z)((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+n*At.yB)}),(function(t,n){return(n-t)/At.yB}),(function(t){return t.getUTCMinutes()}))),Wt=zt,Rt=(zt.range,(0,Ot.Z)((function(t){t.setTime(t-t.getMilliseconds()-t.getSeconds()*At.Ym-t.getMinutes()*At.yB)}),(function(t,n){t.setTime(+t+n*At.Y2)}),(function(t,n){return(n-t)/At.Y2}),(function(t){return t.getHours()}))),Vt=Rt,It=(Rt.range,(0,Ot.Z)((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+n*At.Y2)}),(function(t,n){return(n-t)/At.Y2}),(function(t){return t.getUTCHours()}))),Gt=It,Nt=(It.range,(0,Ot.Z)((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()}))),Jt=Nt,Qt=(Nt.range,(0,Ot.Z)((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()}))),$t=Qt,qt=(Qt.range,e(6817)),Lt=e(80438),Kt=e(36243),tn=e(13608);var nn=[function(t){return t.setMilliseconds(0)},function(t){return t.setSeconds(0)},function(t){return t.setMinutes(0)},function(t){return t.setHours(0)},function(t){return t.setDate(1)},function(t){return t.setMonth(0)}],en={millisecond:[],second:nn.slice(0,1),minute:nn.slice(0,2),hour:nn.slice(0,3),day:nn.slice(0,4),month:nn.slice(0,5),year:nn.slice(0,6)},rn=function(t){var n=t.format,e=void 0===n?"native":n,i=t.precision,o=void 0===i?"millisecond":i,u=t.useUTC,a=void 0===u||u,c=function(t){return function(n){return en[t].forEach((function(t){t(n)})),n}}(o);return function(t){if(void 0===t)return t;if("native"===e||t instanceof Date)return c(t);var n=a?(0,r.wp)(e):(0,r.Z1)(e);return c(n(t))}},on=function(t,n,e,r){var i,o,u,a,c=t.min,f=void 0===c?0:c,s=t.max,l=void 0===s?"auto":s,d=t.stacked,g=void 0!==d&&d,m=t.reverse,v=void 0!==m&&m,h=t.clamp,x=void 0!==h&&h,y=t.nice,p=void 0!==y&&y;i="auto"===f?!0===g?null!=(o=n.minStacked)?o:0:n.min:f,u="auto"===l?!0===g?null!=(a=n.maxStacked)?a:0:n.max:l;var T=(0,Dt.Z)().rangeRound("x"===r?[0,e]:[e,0]).domain(v?[u,i]:[i,u]).clamp(x);return!0===p?T.nice():"number"==typeof p&&T.nice(p),un(T,g)},un=function(t,n){void 0===n&&(n=!1);var e=t;return e.type="linear",e.stacked=n,e},an=function(t){var n=t;return n.type="point",n},cn=function(t){var n=t;return n.type="band",n},fn=function(t,n,e){var i,o,u=t.format,a=void 0===u?"native":u,c=t.precision,f=void 0===c?"millisecond":c,s=t.min,l=void 0===s?"auto":s,d=t.max,g=void 0===d?"auto":d,m=t.useUTC,v=void 0===m||m,h=t.nice,x=void 0!==h&&h,y=rn({format:a,precision:f,useUTC:v});i="auto"===l?y(n.min):"native"!==a?y(l):l,o="auto"===g?y(n.max):"native"!==a?y(g):g;var p=v?function(){return gt.o.apply(xt(ut,at,et,tt,G,V,W,_,T,r.g0).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}():function(){return gt.o.apply(xt(st,lt,X,A,Y,w,b,k,T,r.i$).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}();p.range([0,e]),i&&o&&p.domain([i,o]),!0===x?p.nice():"object"!=typeof x&&"number"!=typeof x||p.nice(x);var M=p;return M.type="time",M.useUTC=v,M},sn=function(t,n,e,r){var i,o=t.base,u=void 0===o?10:o,a=t.min,c=void 0===a?"auto":a,f=t.max,s=void 0===f?"auto":f;if(n.all.some((function(t){return 0===t})))throw new Error("a log scale domain must not include or cross zero");var l,d,g=!1;if(n.all.filter((function(t){return null!=t})).forEach((function(t){g||(void 0===i?i=Math.sign(t):Math.sign(t)!==i&&(g=!0))})),g)throw new Error("a log scale domain must be strictly-positive or strictly-negative");l="auto"===c?n.min:c,d="auto"===s?n.max:s;var m=wt().domain([l,d]).rangeRound("x"===r?[0,e]:[e,0]).base(u).nice();return m.type="log",m},ln=function(t,n,e,r){var i,o,u=t.constant,a=void 0===u?1:u,c=t.min,f=void 0===c?"auto":c,s=t.max,l=void 0===s?"auto":s,d=t.reverse,g=void 0!==d&&d;i="auto"===f?n.min:f,o="auto"===l?n.max:l;var m=Zt().constant(a).rangeRound("x"===r?[0,e]:[e,0]).nice();!0===g?m.domain([o,i]):m.domain([i,o]);var v=m;return v.type="symlog",v};function dn(t,n,e,r){switch(t.type){case"linear":return on(t,n,e,r);case"point":return function(t,n,e){var r=(0,Pt.x)().range([0,e]).domain(n.all);return r.type="point",r}(0,n,e);case"band":return function(t,n,e,r){var i=t.round,o=void 0===i||i,u=(0,Pt.Z)().range("x"===r?[0,e]:[e,0]).domain(n.all).round(o);return cn(u)}(t,n,e,r);case"time":return fn(t,n,e);case"log":return sn(t,n,e,r);case"symlog":return ln(t,n,e,r);default:throw new Error("invalid scale spec")}}var gn=function(t){var n=t.bandwidth();if(0===n)return t;var e=n/2;return t.round()&&(e=Math.round(e)),function(n){var r;return(null!=(r=t(n))?r:0)+e}},mn={millisecond:[jt,jt],second:[Xt,Xt],minute:[_t,Wt],hour:[Vt,Gt],day:[(0,Ot.Z)((function(t){return t.setHours(0,0,0,0)}),(function(t,n){return t.setDate(t.getDate()+n)}),(function(t,n){return(n.getTime()-t.getTime())/864e5}),(function(t){return Math.floor(t.getTime()/864e5)})),(0,Ot.Z)((function(t){return t.setUTCHours(0,0,0,0)}),(function(t,n){return t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n.getTime()-t.getTime())/864e5}),(function(t){return Math.floor(t.getTime()/864e5)}))],week:[qt.OM,Lt.Ox],sunday:[qt.OM,Lt.Ox],monday:[qt.wA,Lt.l6],tuesday:[qt.sy,Lt.J1],wednesday:[qt.zg,Lt.b3],thursday:[qt.bL,Lt.hB],friday:[qt.mC,Lt.QQ],saturday:[qt.EY,Lt.g4],month:[Jt,$t],year:[Kt.Z,tn.Z]},vn=Object.keys(mn),hn=new RegExp("^every\\s*(\\d+)?\\s*("+vn.join("|")+")s?$","i"),xn=function(t,n){if(Array.isArray(n))return n;if("string"==typeof n&&"useUTC"in t){var e=n.match(hn);if(e){var r=e[1],i=e[2],o=mn[i][t.useUTC?1:0];if("day"===i){var u,a,c=t.domain(),f=c[0],s=c[1],l=new Date(s);return l.setDate(l.getDate()+1),null!=(u=null==(a=o.every(Number(null!=r?r:1)))?void 0:a.range(f,l))?u:[]}if(void 0===r)return t.ticks(o);var d=o.every(Number(r));if(d)return t.ticks(d)}throw new Error("Invalid tickValues: "+n)}if("ticks"in t){if(void 0===n)return t.ticks();if("number"==typeof(g=n)&&isFinite(g)&&Math.floor(g)===g)return t.ticks(n)}var g;return t.domain()}},1925:function(t,n,e){"use strict";e.d(n,{Z:function(){return a},x:function(){return f}});var r=e(70885);function i(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o}var o=e(37924),u=e(51354);function a(){var t,n,e=(0,u.Z)().unknown(void 0),c=e.domain,f=e.range,s=0,l=1,d=!1,g=0,m=0,v=.5;function h(){var e=c().length,r=l<s,o=r?l:s,u=r?s:l;t=(u-o)/Math.max(1,e-g+2*m),d&&(t=Math.floor(t)),o+=(u-o-t*(e-g))*v,n=t*(1-g),d&&(o=Math.round(o),n=Math.round(n));var a=i(e).map((function(n){return o+t*n}));return f(r?a.reverse():a)}return delete e.unknown,e.domain=function(t){return arguments.length?(c(t),h()):c()},e.range=function(t){var n,e;return arguments.length?(n=t,e=(0,r.Z)(n,2),s=e[0],l=e[1],s=+s,l=+l,h()):[s,l]},e.rangeRound=function(t){var n,e;return n=t,e=(0,r.Z)(n,2),s=e[0],l=e[1],s=+s,l=+l,d=!0,h()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(d=!!t,h()):d},e.padding=function(t){return arguments.length?(g=Math.min(1,m=+t),h()):g},e.paddingInner=function(t){return arguments.length?(g=Math.min(1,t),h()):g},e.paddingOuter=function(t){return arguments.length?(m=+t,h()):m},e.align=function(t){return arguments.length?(v=Math.max(0,Math.min(1,t)),h()):v},e.copy=function(){return a(c(),[s,l]).round(d).paddingInner(g).paddingOuter(m).align(v)},o.o.apply(h(),arguments)}function c(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return c(n())},t}function f(){return c(a.apply(null,arguments).paddingInner(1))}},89931:function(t,n,e){var r=e(39066),i=e(43141);t.exports=function(t){return i(t)&&"[object Date]"==r(t)}},53849:function(t,n,e){var r=e(87927),i=e(21473);t.exports=function(t,n){var e=-1,o=i(t)?Array(t.length):[];return r(t,(function(t,r,i){o[++e]=n(t,r,i)})),o}},93226:function(t,n,e){var r=e(68950),i=e(98667),o=e(56025),u=e(53849),a=e(19179),c=e(16194),f=e(94480),s=e(2100),l=e(93629);t.exports=function(t,n,e){n=n.length?r(n,(function(t){return l(t)?function(n){return i(n,1===t.length?t[0]:t)}:t})):[s];var d=-1;n=r(n,c(o));var g=u(t,(function(t,e,i){return{criteria:r(n,(function(n){return n(t)})),index:++d,value:t}}));return a(g,(function(t,n){return f(t,n,e)}))}},19179:function(t){t.exports=function(t,n){var e=t.length;for(t.sort(n);e--;)t[e]=t[e].value;return t}},39602:function(t,n,e){var r=e(20692),i=e(59055),o=e(32683),u=e(60075),a=e(77730),c=e(22230);t.exports=function(t,n,e){var f=-1,s=i,l=t.length,d=!0,g=[],m=g;if(e)d=!1,s=o;else if(l>=200){var v=n?null:a(t);if(v)return c(v);d=!1,s=u,m=new r}else m=n?[]:g;t:for(;++f<l;){var h=t[f],x=n?n(h):h;if(h=e||0!==h?h:0,d&&x===x){for(var y=m.length;y--;)if(m[y]===x)continue t;n&&m.push(x),g.push(h)}else s(m,x,e)||(m!==g&&m.push(x),g.push(h))}return g}},88558:function(t,n,e){var r=e(70152);t.exports=function(t,n){if(t!==n){var e=void 0!==t,i=null===t,o=t===t,u=r(t),a=void 0!==n,c=null===n,f=n===n,s=r(n);if(!c&&!s&&!u&&t>n||u&&a&&f&&!c&&!s||i&&a&&f||!e&&f||!o)return 1;if(!i&&!u&&!s&&t<n||s&&e&&o&&!i&&!u||c&&e&&o||!a&&o||!f)return-1}return 0}},94480:function(t,n,e){var r=e(88558);t.exports=function(t,n,e){for(var i=-1,o=t.criteria,u=n.criteria,a=o.length,c=e.length;++i<a;){var f=r(o[i],u[i]);if(f)return i>=c?f:f*("desc"==e[i]?-1:1)}return t.index-n.index}},77730:function(t,n,e){var r=e(23924),i=e(19694),o=e(22230),u=r&&1/o(new r([,-0]))[1]==1/0?function(t){return new r(t)}:i;t.exports=u},36609:function(t,n,e){var r=e(89931),i=e(16194),o=e(49494),u=o&&o.isDate,a=u?i(u):r;t.exports=a},19694:function(t){t.exports=function(){}},64286:function(t,n,e){var r=e(55182),i=e(93226),o=e(58794),u=e(3195),a=o((function(t,n){if(null==t)return[];var e=n.length;return e>1&&u(t,n[0],n[1])?n=[]:e>2&&u(n[0],n[1],n[2])&&(n=[n[0]]),i(t,r(n,1),[])}));t.exports=a},72064:function(t,n,e){var r=e(39602);t.exports=function(t){return t&&t.length?r(t):[]}},66339:function(t,n,e){var r=e(56025),i=e(39602);t.exports=function(t,n){return t&&t.length?i(t,r(n,2)):[]}}}]);
//# sourceMappingURL=9772.0b117f66.chunk.js.map
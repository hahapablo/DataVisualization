"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[26],{30990:function(e,r,t){t.d(r,{H:function(){return o}});var o=[{value:"nivo",label:"Nivo",colors:["#ff0000","#234535"]},{value:"reds",label:"Reds",colors:["#00FF00","#236456"]},{value:"blues",label:"Blues",colors:["#00FFFF","#572535"]},{value:"spectral",label:"Spectral",colors:["#0FFFF0","#765436"]},{value:"accent",label:"Accent",colors:["#11FF22","#124535"]},{value:"paired",label:"Paired",colors:["#FF2344","#875797"]}]},30026:function(e,r,t){t.r(r),t.d(r,{default:function(){return z}});var o=t(70885),n=t(72791),i=t(98037),a=t(54753),s=t(80184),l=t(51153),u=t(79772),c=t(66706),d=t(92353);function h(){return h=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h.apply(this,arguments)}var m=function(e){var r=e.animatedProps,t=r.x,o=r.y,n=r.width,i=r.height,l=r.color,u=e.borderColor,c=e.borderWidth,d=e.data,h=e.onMouseEnter,m=e.onMouseMove,f=e.onMouseLeave,v=e.onClick;return(0,s.jsx)(a.animated.rect,{x:t,y:o,width:(0,a.to)(n,(function(e){return Math.max(e,0)})),height:(0,a.to)(i,(function(e){return Math.max(e,0)})),fill:l,strokeWidth:c,stroke:u,onMouseMove:function(e){return m(d,e)},onMouseEnter:function(e){return h(d,e)},onMouseLeave:function(e){return f(d,e)},onClick:function(e){return v(d,e)}})},f={layout:"horizontal",reverse:!1,spacing:30,minValue:0,maxValue:"auto",axisPosition:"after",titlePosition:"before",titleAlign:"middle",titleRotation:0,titleOffsetX:0,titleOffsetY:0,rangeComponent:m,rangeColors:"seq:cool",measureComponent:m,measureColors:"seq:red_purple",markers:[],markerComponent:function(e){var r=e.animatedProps,t=r.color,o=r.transform,n=r.x,i=r.y1,l=r.y2,u=e.data,c=e.onMouseEnter,d=e.onMouseMove,h=e.onMouseLeave,m=e.onClick;return(0,s.jsx)(a.animated.line,{transform:o,x1:n,x2:n,y1:i,y2:l,fill:"none",stroke:t,strokeWidth:"5",onMouseMove:function(e){return d(u,e)},onMouseEnter:function(e){return c(u,e)},onMouseLeave:function(e){return h(u,e)},onClick:function(e){return m(u,e)}})},markerColors:"seq:red_purple",rangeBorderWidth:0,rangeBorderColor:{from:"color"},measureSize:.4,measureBorderWidth:0,measureBorderColor:{from:"color"},markerSize:.6,isInteractive:!0,tooltip:function(e){var r=e.color,t=e.v0,o=e.v1;return(0,s.jsx)(l._5,{id:o?(0,s.jsxs)("span",{children:[(0,s.jsx)("strong",{children:t})," to ",(0,s.jsx)("strong",{children:o})]}):(0,s.jsx)("strong",{children:t}),enableChip:!0,color:r})},animate:i.sZ.animate,motionConfig:i.sZ.config,margin:i.KF,role:"img"},v=function(e,r,t,o,n){void 0===n&&(n=!1);var i=r.domain(),a=i[0],s=i[1];return[].concat(e,["measures"===o||e.includes(s)?0:s]).filter((function(e){return 0!==e})).sort((function(e,r){return e-r})).reduce((function(e,r,o){var i,s=e.slice(-1)[0],l=null!=(i=null==s?void 0:s.v1)?i:a,u=!0===n?l+(r-l)/2:r;return[].concat(e,[{index:o,v0:l,v1:r,color:t("sequential"===t.type?u:o)}])}),[])},g=["position"],x=function(e){var r=e.scale,t=e.layout,o=e.reverse,l=e.markers,u=e.height,c=e.markerSize,d=e.component,m=e.onMouseEnter,f=e.onMouseLeave,v=e.onClick,x=(0,n.useMemo)((function(){return function(e){var r=e.reverse,t=e.scale,o=e.height,n=e.markerSize;return"horizontal"===e.layout?function(e){return{x:t(e.value),y:o/2,size:n,rotation:!0===r?180:0}}:function(e){return{x:o/2,y:t(e.value),size:n,rotation:!0===r?270:90}}}({layout:t,reverse:o,scale:r,height:u,markerSize:c})}),[t,o,r,u,c]),p=(0,i.tf)(),C=p.animate,y=p.config,k=(0,a.useTransition)(l.map((function(e){return h({},e,{position:x(e)})})),{keys:function(e){return""+e.index},enter:function(e){var r=e.color,t=e.position;return{color:r,transform:"rotate("+t.rotation+", "+t.x+", "+t.y+")",x:t.x,y1:t.y-t.size/2,y2:t.y+t.size/2}},update:function(e){var r=e.color,t=e.position;return{color:r,transform:"rotate("+t.rotation+", "+t.x+", "+t.y+")",x:t.x,y1:t.y-t.size/2,y2:t.y+t.size/2}},config:y,immediate:!C});return(0,s.jsx)(s.Fragment,{children:k((function(e,r){var t=r.position,o=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(r,g);return n.createElement(d,h({key:o.index},o,t,{animatedProps:e,data:o,onMouseEnter:m,onMouseMove:m,onMouseLeave:f,onClick:v}))}))})},p=function(e){var r=e.animatedProps,t=e.data,o=e.layout,l=e.y,u=e.borderColor,d=e.borderWidth,m=e.component,f=e.reverse,v=e.scale,g=e.height,x=e.onMouseEnter,p=e.onMouseLeave,C=e.onClick,y=(0,n.useMemo)((function(){return function(e){var r=e.data,t=function(e){var r=e.reverse,t=e.scale,o=e.height;return"horizontal"===e.layout?!0===r?function(e){var r=t(e.v1);return{x:r,y:0,width:t(e.v0)-r,height:o}}:function(e){var r=t(e.v0);return{x:r,y:0,width:t(e.v1)-r,height:o}}:!0===r?function(e){var r=t(e.v0),n=t(e.v1)-r;return{x:0,y:r,width:o,height:n}}:function(e){var r=t(e.v1),n=t(e.v0)-r;return{x:0,y:r,width:o,height:n}}}({layout:e.layout,reverse:e.reverse,scale:e.scale,height:e.height});return r.map((function(e){return h({data:e},t(e))}))}({data:t,layout:o,reverse:f,scale:v,height:g})}),[t,o,f,v,g]),k=(0,i.Fg)(),M=(0,c.Bf)(u,k),j=function(e){return"translate("+("horizontal"===o?0:e)+","+("horizontal"===o?e:0)+")"},b=r?(0,a.to)(r.measuresY,j):j(l),z=(0,i.tf)(),w=z.animate,B=z.config,F=(0,a.useTransition)(y,{keys:function(e){return""+e.data.index},enter:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.data.color}},update:function(e){return{x:e.x,y:e.y,width:e.width,height:e.height,color:e.data.color}},config:B,immediate:!w});return(0,s.jsx)(a.animated.g,{transform:b,children:F((function(e,r){return(0,n.createElement)(m,{key:r.data.index,index:r.data.index,animatedProps:e,data:r.data,x:e.x.get(),y:e.y.get(),borderColor:M(r.data),borderWidth:d,width:(0,a.to)(e.width,(function(e){return Math.max(e,0)})).get(),height:(0,a.to)(e.height,(function(e){return Math.max(e,0)})).get(),color:e.color.get(),onMouseEnter:x,onMouseMove:x,onMouseLeave:p,onClick:C})}))})},C=function(e){var r,t=e.id,o=e.scale,c=e.layout,d=e.reverse,m=e.axisPosition,f=e.x,g=e.y,C=e.width,y=e.height,k=e.title,M=void 0===k?t:k,j=e.titlePosition,b=e.titleAlign,z=e.titleOffsetX,w=e.titleOffsetY,B=e.titleRotation,F=e.tooltip,P=e.rangeBorderColor,W=e.rangeBorderWidth,O=e.rangeComponent,_=e.rangeColors,S=e.ranges,E=e.measureBorderColor,L=e.measureBorderWidth,R=e.measureComponent,H=e.measureHeight,V=e.measureColors,A=e.measures,I=e.markerComponent,Y=e.markerColors,q=e.markerHeight,X=e.markers,T=void 0===X?[]:X,Z=e.onRangeClick,D=e.onMeasureClick,G=e.onMarkerClick,K=(0,i.Fg)(),N=(0,l.lL)(),J=N.showTooltipFromEvent,Q=N.hideTooltip,U=(0,n.useMemo)((function(){var e=(0,i.pI)(_,o,!0);return v(S,o,e,"range")}),[_,S,o]),$=(0,n.useMemo)((function(){var e=(0,i.pI)(V,o);return v(A,o,e,"measures")}),[V,A,o]),ee=(0,n.useMemo)((function(){var e=(0,i.pI)(Y,o);return T.map((function(r,t){return{value:r,index:t,color:e("sequential"===e.type?r:t)}}))}),[Y,T,o]),re=F,te=(0,s.jsx)(p,{data:U,scale:o,layout:c,reverse:d,x:0,y:0,width:C,height:y,component:O,borderColor:P,borderWidth:W,onMouseEnter:function(e,r){J((0,s.jsx)(re,{color:e.color,v0:e.v0,v1:e.v1}),r)},onMouseLeave:Q,onClick:function(e,r){null==Z||Z(h({id:t},e),r)}}),oe=(0,s.jsx)(x,{markers:ee,scale:o,layout:c,reverse:d,height:y,markerSize:q,component:I,onMouseEnter:function(e,r){J((0,s.jsx)(re,{color:e.color,v0:e.value}),r)},onMouseLeave:Q,onClick:function(e,r){null==G||G(h({id:t},e),r)}}),ne=(0,s.jsx)("g",{transform:"translate("+("vertical"===c&&"after"===m?y:0)+","+("horizontal"===c&&"after"===m?y:0)+")",children:(0,s.jsx)(u.RD,{axis:"horizontal"===c?"x":"y",length:"horizontal"===c?C:y,scale:o,ticksPosition:m})}),ie=(0,s.jsx)("g",{transform:"translate("+("horizontal"===c?"before"===j?z:C+z:y/2+z)+","+("horizontal"===c?y/2+w:"before"===j?w:C+w)+") rotate("+B+")",children:"string"==typeof M?(0,s.jsx)("text",{style:h({},null==K||null==(r=K.labels)?void 0:r.text,{dominantBaseline:"central",textAnchor:b}),children:M}):M}),ae=(0,i.tf)(),se=ae.animate,le=ae.config,ue=(0,a.useSpring)({measuresY:(y-H)/2,transform:"translate("+f+","+g+")",config:le,immediate:!se});return(0,s.jsxs)(a.animated.g,{transform:ue.transform,children:[te,(0,s.jsx)(p,{animatedProps:ue,data:$,scale:o,layout:c,reverse:d,x:0,y:0,width:C,height:H,component:R,borderColor:E,borderWidth:L,onMouseEnter:function(e,r){J((0,s.jsx)(re,{color:e.color,v0:e.v1}),r)},onMouseLeave:Q,onClick:function(e,r){null==D||D(h({id:t},e),r)}}),ne,oe,ie]})},y=function(e){var r=h({},f,e),t=r.data,o=r.layout,a=r.spacing,l=r.measureSize,u=r.markerSize,c=r.reverse,m=r.axisPosition,v=r.minValue,g=r.maxValue,x=r.margin,p=r.width,y=r.height,k=r.titlePosition,M=r.titleAlign,j=r.titleOffsetX,b=r.titleOffsetY,z=r.titleRotation,w=r.rangeBorderColor,B=r.rangeBorderWidth,F=r.rangeComponent,P=r.rangeColors,W=r.measureBorderColor,O=r.measureBorderWidth,_=r.measureComponent,S=r.measureColors,E=r.markerComponent,L=r.markerColors,R=r.theme,H=r.tooltip,V=void 0===H?f.tooltip:H,A=r.animate,I=r.motionConfig,Y=r.isInteractive,q=r.onRangeClick,X=r.onMeasureClick,T=r.onMarkerClick,Z=r.role,D=(0,i.Bs)(p,y,x),G=D.margin,K=D.innerWidth,N=D.innerHeight,J="horizontal"===o?(N-a*(t.length-1))/t.length:(K-a*(t.length-1))/t.length,Q=J*l,U=J*u,$=function(e,r){var t=r.layout,o=r.maxValue,i=r.minValue,a=r.reverse,s=r.height,l=r.width;return(0,n.useMemo)((function(){return e.map((function(e){var r,n=[].concat(e.ranges,e.measures,null!=(r=e.markers)?r:[]),u=null!=o?o:Math.max.apply(Math,n),c=null!=i?i:Math.min.apply(Math,n);return h({},e,{scale:(0,d._S)({clamp:!0,min:c,max:u,type:"linear"},{all:n,max:u,min:c},"horizontal"===t?l:s,"horizontal"===t?a?"y":"x":a?"x":"y")})}))}),[e,s,t,o,i,a,l])}(t,{height:N,layout:o,maxValue:"auto"===g?void 0:g,minValue:"auto"===v?void 0:v,reverse:c,width:K});return(0,s.jsx)(i.W2,{isInteractive:Y,theme:R,animate:A,motionConfig:I,children:(0,s.jsx)(i.tM,{width:p,height:y,margin:G,role:Z,children:$.map((function(e,r){return(0,s.jsx)(C,h({},e,{layout:o,reverse:c,x:"vertical"===o?J*r+a*r:0,y:"horizontal"===o?J*r+a*r:0,width:K,height:J,titlePosition:k,titleAlign:M,titleOffsetX:j,titleOffsetY:b,titleRotation:z,measureHeight:Q,markerHeight:U,rangeBorderColor:w,rangeBorderWidth:B,rangeComponent:F,rangeColors:P,measureBorderColor:W,measureBorderWidth:O,measureComponent:_,measureColors:S,markerComponent:E,markerColors:L,axisPosition:m,onRangeClick:q,onMeasureClick:X,onMarkerClick:T,tooltip:V}),e.id)}))})})},k=function(e){return(0,s.jsx)(i.d,{children:function(r){var t=r.width,o=r.height;return(0,s.jsx)(y,h({width:t,height:o},e))}})},M=t(78983),j=t(30990),b=t(21947),z=function(){var e=(0,n.useState)("spectral"),r=(0,o.Z)(e,2),t=r[0],i=r[1],a=function(e){var r=e.data,t=e.colorScheme;return(0,s.jsx)(k,{data:r,margin:{top:50,right:90,bottom:50,left:90},spacing:46,titleAlign:"start",titleOffsetX:-70,measureSize:.2,rangeColors:t})},l=function(e){e.value;var r=e.label,t=e.colors;return(0,s.jsxs)("div",{style:{display:"flex"},children:[(0,s.jsx)("div",{style:{minWidth:"80px"},children:r}),(0,s.jsx)("div",{style:{alignItems:"end"},children:t.map((function(e){return(0,s.jsx)("span",{style:{backgroundColor:e},children:"\xa0\xa0"},e)}))})]})},u=function(e){i(e.value)},c=function(){return(0,s.jsx)(b.ZP,{formatOptionLabel:l,defaultValue:Object.values(j.H)[0],options:Object.values(j.H),onChange:u})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(M.CCard,{children:[(0,s.jsx)(M.CCardHeader,{children:(0,s.jsxs)(M.CRow,{children:[(0,s.jsx)(M.CCol,{sm:6,children:(0,s.jsx)("h4",{children:"Bullet Graph"})}),(0,s.jsx)(M.CCol,{sm:3}),(0,s.jsx)(M.CCol,{sm:3,children:(0,s.jsx)(c,{})})]})}),(0,s.jsx)(M.CCardBody,{style:{height:"600px"},children:(0,s.jsx)(a,{colorScheme:t,data:[{id:"temp.",ranges:[6,11,84,0,120],measures:[79],markers:[85]},{id:"power",ranges:[1.7539488226374675,.07411831985925406,1.67694676808163,0,2],measures:[.40276831869437024,1.9303801399960938],markers:[1.3253535190186139]},{id:"volume",ranges:[56,1,38,16,3,12,0,60],measures:[20],markers:[56]},{id:"cost",ranges:[235840,3236,303703,0,5e5],measures:[128230,390596],markers:[417806]},{id:"revenue",ranges:[9,0,3,0,9],measures:[6],markers:[5.919910146123294,6.352503421611037]}]})})]})})}}}]);
//# sourceMappingURL=26.09d1f96c.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5941],{23838:function(e,t,r){"use strict";var o=r(13428),i=r(20791),n=r(2265),a=r(57042),s=r(95600),l=r(87927),c=r(35843),d=r(36579),u=r(93006),h=r(57437);let p=["children","className","focusVisibleClassName"],m=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},d.J,t)},f=(0,c.ZP)(u.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",[`&:hover .${d.Z.focusHighlight}`]:{opacity:(e.vars||e).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${d.Z.focusVisible} .${d.Z.focusHighlight}`]:{opacity:(e.vars||e).palette.action.focusOpacity}})),g=(0,c.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})(({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})),b=n.forwardRef(function(e,t){let r=(0,l.Z)({props:e,name:"MuiCardActionArea"}),{children:n,className:s,focusVisibleClassName:c}=r,d=(0,i.Z)(r,p),u=m(r);return(0,h.jsxs)(f,(0,o.Z)({className:(0,a.Z)(u.root,s),focusVisibleClassName:(0,a.Z)(c,u.focusVisible),ref:t,ownerState:r},d,{children:[n,(0,h.jsx)(g,{className:u.focusHighlight,ownerState:r})]}))});t.Z=b},36579:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var o=r(26520),i=r(25702);function n(e){return(0,i.Z)("MuiCardActionArea",e)}let a=(0,o.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);t.Z=a},8323:function(e,t,r){"use strict";var o=r(13428),i=r(20791),n=r(2265),a=r(57042),s=r(95600),l=r(35843),c=r(87927),d=r(35619),u=r(57437);let h=["className","component"],p=e=>{let{classes:t}=e;return(0,s.Z)({root:["root"]},d.N,t)},m=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=n.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiCardContent"}),{className:n,component:s="div"}=r,l=(0,i.Z)(r,h),d=(0,o.Z)({},r,{component:s}),f=p(d);return(0,u.jsx)(m,(0,o.Z)({as:s,className:(0,a.Z)(f.root,n),ownerState:d,ref:t},l))});t.Z=f},35619:function(e,t,r){"use strict";r.d(t,{N:function(){return n}});var o=r(26520),i=r(25702);function n(e){return(0,i.Z)("MuiCardContent",e)}let a=(0,o.Z)("MuiCardContent",["root"]);t.Z=a},76182:function(e,t,r){"use strict";var o=r(20791),i=r(13428),n=r(2265),a=r(57042),s=r(95600),l=r(87927),c=r(35843),d=r(4708),u=r(57437);let h=["children","className","component","image","src","style"],p=e=>{let{classes:t,isMediaComponent:r,isImageComponent:o}=e;return(0,s.Z)({root:["root",r&&"media",o&&"img"]},d.a,t)},m=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{isMediaComponent:o,isImageComponent:i}=r;return[t.root,o&&t.media,i&&t.img]}})(({ownerState:e})=>(0,i.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),f=["video","audio","picture","iframe","img"],g=["picture","img"],b=n.forwardRef(function(e,t){let r=(0,l.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:s,component:c="div",image:d,src:b,style:v}=r,Z=(0,o.Z)(r,h),x=-1!==f.indexOf(c),y=!x&&d?(0,i.Z)({backgroundImage:`url("${d}")`},v):v,C=(0,i.Z)({},r,{component:c,isMediaComponent:x,isImageComponent:-1!==g.indexOf(c)}),w=p(C);return(0,u.jsx)(m,(0,i.Z)({className:(0,a.Z)(w.root,s),as:c,role:!x&&d?"img":void 0,ref:t,style:y,ownerState:C,src:x?d||b:void 0},Z,{children:n}))});t.Z=b},4708:function(e,t,r){"use strict";r.d(t,{a:function(){return n}});var o=r(26520),i=r(25702);function n(e){return(0,i.Z)("MuiCardMedia",e)}let a=(0,o.Z)("MuiCardMedia",["root","media","img"]);t.Z=a},88938:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var o=r(20791),i=r(13428),n=r(2265),a=r(57042),s=r(61380),l=r(25702),c=r(95600),d=r(48153),u=r(39190),h=r(5825),p=r(57437);let m=["className","component","disableGutters","fixed","maxWidth","classes"],f=(0,h.Z)(),g=(0,u.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,s.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),b=e=>(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:f}),v=(e,t)=>{let{classes:r,fixed:o,disableGutters:i,maxWidth:n}=e,a={root:["root",n&&`maxWidth${(0,s.Z)(String(n))}`,o&&"fixed",i&&"disableGutters"]};return(0,c.Z)(a,e=>(0,l.Z)(t,e),r)};var Z=r(28702),x=r(35843),y=r(87927);let C=function(e={}){let{createStyledComponent:t=g,useThemeProps:r=b,componentName:s="MuiContainer"}=e,l=t(({theme:e,ownerState:t})=>(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}}),({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce((t,r)=>{let o=e.breakpoints.values[r];return 0!==o&&(t[e.breakpoints.up(r)]={maxWidth:`${o}${e.breakpoints.unit}`}),t},{}),({theme:e,ownerState:t})=>(0,i.Z)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}})),c=n.forwardRef(function(e,t){let n=r(e),{className:c,component:d="div",disableGutters:u=!1,fixed:h=!1,maxWidth:f="lg"}=n,g=(0,o.Z)(n,m),b=(0,i.Z)({},n,{component:d,disableGutters:u,fixed:h,maxWidth:f}),Z=v(b,s);return(0,p.jsx)(l,(0,i.Z)({as:d,ownerState:b,className:(0,a.Z)(Z.root,c),ref:t},g))});return c}({createStyledComponent:(0,x.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[`maxWidth${(0,Z.Z)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),useThemeProps:e=>(0,y.Z)({props:e,name:"MuiContainer"})});var w=C},46776:function(e,t,r){"use strict";var o=r(20791),i=r(13428),n=r(2265),a=r(57042),s=r(95600),l=r(89975),c=r(35843),d=r(87927),u=r(93006),h=r(28702),p=r(37953),m=r(57437);let f=["edge","children","className","color","disabled","disableFocusRipple","size"],g=e=>{let{classes:t,disabled:r,color:o,edge:i,size:n}=e,a={root:["root",r&&"disabled","default"!==o&&`color${(0,h.Z)(o)}`,i&&`edge${(0,h.Z)(i)}`,`size${(0,h.Z)(n)}`]};return(0,s.Z)(a,p.r,t)},b=(0,c.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,h.Z)(r.color)}`],r.edge&&t[`edge${(0,h.Z)(r.edge)}`],t[`size${(0,h.Z)(r.size)}`]]}})(({theme:e,ownerState:t})=>(0,i.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12}),({theme:e,ownerState:t})=>{var r;let o=null==(r=(e.vars||e).palette)?void 0:r[t.color];return(0,i.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,i.Z)({color:null==o?void 0:o.main},!t.disableRipple&&{"&:hover":(0,i.Z)({},o&&{backgroundColor:e.vars?`rgba(${o.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.Fq)(o.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${p.Z.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),v=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:s,className:l,color:c="default",disabled:u=!1,disableFocusRipple:h=!1,size:p="medium"}=r,v=(0,o.Z)(r,f),Z=(0,i.Z)({},r,{edge:n,color:c,disabled:u,disableFocusRipple:h,size:p}),x=g(Z);return(0,m.jsx)(b,(0,i.Z)({className:(0,a.Z)(x.root,l),centerRipple:!0,focusRipple:!h,disabled:u,ref:t,ownerState:Z},v,{children:s}))});t.Z=v},37953:function(e,t,r){"use strict";r.d(t,{r:function(){return n}});var o=r(26520),i=r(25702);function n(e){return(0,i.Z)("MuiIconButton",e)}let a=(0,o.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);t.Z=a},18580:function(e,t,r){Promise.resolve().then(r.bind(r,99741))},99741:function(e,t,r){"use strict";r.r(t);var o=r(57437),i=r(2265),n=r(88938),a=r(85269),s=r(38939),l=r(65984),c=r(23838),d=r(76182),u=r(8323),h=r(96507),p=r(46776),m=r(88220),f=r(53159);let g=[{id:1,title:"Top Fashion Trends for 2024",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPYgd6u9Bln7hSxqdreFeub2dFRUsNUoj6w&s",content:"\n      2024 is set to be an exciting year in fashion, with bold colors, sustainable fabrics, and retro styles making a comeback.\n      Get ready for oversized jackets, statement accessories, and the revival of Y2K fashion with a modern twist. \n      Don't miss our tips on how to style these trends effortlessly for any occasion.\n    "},{id:2,title:"The Best Sustainable Fabrics for Your Wardrobe",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPYgd6u9Bln7hSxqdreFeub2dFRUsNUoj6w&s",content:"\n      Sustainability is no longer just a buzzword; it’s a lifestyle. Learn about eco-friendly materials like organic cotton, bamboo,\n      and Tencel that are revolutionizing the industry. Discover why sustainable fashion is better for both your skin and the planet.\n    "},{id:3,title:"5 Must-Have Accessories for This Season",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPYgd6u9Bln7hSxqdreFeub2dFRUsNUoj6w&s",content:"\n      Accessories can make or break an outfit. This season, focus on chunky gold jewelry, silk scarves, and structured handbags.\n      Our experts guide you through selecting the perfect pieces to elevate your everyday looks and evening attire.\n    "}];t.default=()=>{let[e,t]=(0,i.useState)(!1),[r,b]=(0,i.useState)(null),v=e=>{b(e),t(!0)};return(0,o.jsxs)(n.Z,{maxWidth:"lg",sx:{py:6},children:[(0,o.jsx)(a.Z,{variant:"h3",component:"h1",align:"center",sx:{mb:4,fontWeight:"bold",color:"#01579b"},children:"Our Latest Blogs"}),(0,o.jsx)(s.ZP,{container:!0,spacing:4,children:g.map(e=>(0,o.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,o.jsx)(l.Z,{sx:{boxShadow:5,borderRadius:3,overflow:"hidden",position:"relative"},children:(0,o.jsxs)(c.Z,{onClick:()=>v(e),children:[(0,o.jsx)(d.Z,{component:"img",alt:e.title,height:"200",image:e.image,title:e.title,sx:{transition:"transform 0.3s","&:hover":{transform:"scale(1.05)"}}}),(0,o.jsxs)(u.Z,{children:[(0,o.jsx)(a.Z,{variant:"h6",component:"h2",sx:{mb:1},children:e.title}),(0,o.jsxs)(a.Z,{variant:"body2",color:"text.secondary",noWrap:!0,children:[e.content.substring(0,100),"..."]}),(0,o.jsxs)(h.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mt:2},children:[(0,o.jsx)(p.Z,{children:(0,o.jsx)(f.$0H,{color:"#e91e63"})}),(0,o.jsx)(p.Z,{children:(0,o.jsx)(f.PPi,{color:"#01579b"})})]})]})]})})},e.id))}),(0,o.jsx)(m.Z,{open:e,onClose:()=>{t(!1),b(null)},sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.jsx)(h.Z,{sx:{bgcolor:"white",p:4,borderRadius:2,width:"80%",maxWidth:600,boxShadow:24},children:r&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z,{variant:"h5",sx:{mb:2},children:r.title}),(0,o.jsx)(a.Z,{variant:"body1",children:r.content})]})})})]})}},91172:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var o=r(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=o.createContext&&o.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)0>t.indexOf(o[i])&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};function l(e){return function(t){return o.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return o.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,i=e.attr,n=e.size,l=e.title,c=s(e,["attr","size","title"]),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,c,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&o.createElement("title",null,l),e.children)};return void 0!==n?o.createElement(n.Consumer,null,function(e){return t(e)}):t(i)}}},function(e){e.O(0,[2420,3861,1050,1175,8220,2060,2971,2472,1744],function(){return e(e.s=18580)}),_N_E=e.O()}]);
exports.id=6786,exports.ids=[6786],exports.modules={23909:(e,r,i)=>{Promise.resolve().then(i.bind(i,83313)),Promise.resolve().then(i.bind(i,93890))},83313:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>eC});var s=i(53854),t=i(34218),n=i.n(t),o=i(34324),a=i.n(o),d=i(20610),l=i(90509),c=i(98300),p=i(59197),x=i(42477),h=i(18066),u=i(53778),m=i(96473),g=i(50477),j=i(18363),b=i(48391),f=i(63638),w=i(11815),Z=i(76948),y=i(4206),v=i(36375),S=i(11620),k=i(39034),C=i(96852),P=i(52721),z=i(43958),I=i(93072),D=i(55293),R=i(18157),q=i(99),M=i(30505),F=i(46558),O=i(83541),T=i(85143);let $=(0,d.ZP)(T.ZP)(({theme:e})=>({"& .MuiPopover-paper":{marginTop:e.spacing(1.5),marginLeft:e.spacing(.5),overflow:"inherit",background:e.palette.background.paper},"& .is-desktop":{paddingLeft:e.spacing(3),paddingRight:e.spacing(3),paddingTop:e.spacing(5),paddingBottom:e.spacing(3),right:e.spacing(16),m:"auto",borderRadius:e.spacing(2),overflow:"auto",display:"flex",gap:1,width:"calc(100vw - 44px)",border:`1px solid ${e.palette.divider}`}}));function A({...e}){let r=(0,p.Z)(),{children:i,open:t,sx:n,isDesktop:o,...a}=e;return s.jsx($,{anchorOrigin:{vertical:"bottom",horizontal:o?"center":"right"},transformOrigin:{vertical:"top",horizontal:o?"center":"right"},open:t,...a,PaperProps:{className:o&&"is-desktop",sx:{...n,border:`1px solid ${r.palette.divider}`}},children:i})}A.propTypes={open:a().bool.isRequired,sx:a().object,isDesktop:a().bool.isRequired,children:a().node.isRequired};var E=i(8051);let B=({item:e,onClose:r})=>{let i=(0,O.tv)();return console.log(e,"order id "),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(S.Z,{alignItems:"flex-start",onClick:()=>{i.push(`/dashboard/orders/${e?.orderId}`),r()},sx:{bgcolor:r=>e?.opened?r.palette.background.paper:"rgba(145, 158, 171, 0.08)"},children:[s.jsx(k.Z,{children:s.jsx(C.Z,{alt:e?.title.slice(3,4)||"",src:e?.avatar})}),s.jsx(P.Z,{secondary:(0,s.jsxs)(n().Fragment,{children:[s.jsx(z.Z,{variant:"body2",color:"text.primary",dangerouslySetInnerHTML:{__html:`${e?.title}`}}),(0,s.jsxs)(j.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,s.jsxs)(j.Z,{direction:"row",alignItems:"center",spacing:1,children:[s.jsx(f.xAN,{size:14}),s.jsx(z.Z,{variant:"body2",color:"text.secondary",children:(0,b.Z)(new Date(e?.createdAt),{enUS:F.Z})})]}),s.jsx(l.Z,{sx:{color:e?.opened?"primary.main":"text.secondary"},children:e?.opened?s.jsx(Z.nRd,{size:16}):s.jsx(Z.e6w,{size:16})})]})]})})]}),s.jsx(I.Z,{component:"li"})]})},U=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(D.ZP,{alignItems:"flex-start",children:[s.jsx(k.Z,{children:s.jsx(g.Z,{variant:"circular",width:40,height:40})}),s.jsx(P.Z,{secondary:(0,s.jsxs)(n().Fragment,{children:[s.jsx(z.Z,{variant:"body2",color:"text.primary",children:s.jsx(g.Z,{variant:"text"})}),(0,s.jsxs)(j.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,s.jsxs)(j.Z,{direction:"row",alignItems:"center",children:[s.jsx(g.Z,{variant:"circular",height:14,width:14,sx:{mr:.5}}),s.jsx(z.Z,{variant:"body2",color:"text.secondary",children:s.jsx(g.Z,{variant:"text",width:140})})]}),s.jsx(g.Z,{variant:"circular",height:14,width:14})]})]})})]}),s.jsx(I.Z,{component:"li"})]});function N(){let e=(0,t.useRef)(null),[r,i]=(0,t.useState)(!1),[n,o]=(0,t.useState)(1),[a,d]=(0,t.useState)([]),{data:c,isLoading:p}=(0,y.useQuery)(["notification",n],()=>v.getNotification(10*n),{refetchInterval:1e4,onSuccess:e=>{d([...e.data])}}),x=()=>{i(!1)};return(0,s.jsxs)(s.Fragment,{children:[s.jsx(m.Z,{ref:e,size:"large",color:r?"primary":"default",onClick:()=>{i(!0)},sx:{width:40,height:40},children:s.jsx(R.Z,{badgeContent:c?.totalUnread,color:"error",children:s.jsx(w.bI9,{size:24})})}),s.jsx(A,{open:r,onClose:x,anchorEl:e.current,sx:{width:360},children:(0,s.jsxs)(s.Fragment,{children:[s.jsx(l.Z,{sx:{display:"flex",alignItems:"center",py:2,px:2.5},children:s.jsx(l.Z,{sx:{flexGrow:1},children:s.jsx(z.Z,{variant:"subtitle1",children:"Notifications"})})}),s.jsx(I.Z,{}),a?.length<1?s.jsx(E.Z,{}):(0,s.jsxs)(l.Z,{sx:{height:{xs:340,sm:400,md:460},overflow:"auto"},children:[(0,s.jsxs)(q.Z,{disablePadding:!0,sx:{"& .MuiListItemAvatar-root":{mt:0}},children:[a?.map(e=>s.jsx(B,{isLoading:p,item:e,onClose:()=>x()},Math.random())),(p?Array.from(Array(7)):[]).map(e=>s.jsx(U,{},Math.random()||e))]}),s.jsx(l.Z,{textAlign:"center",children:!p&&c.totalNotifications>1&&c.totalNotifications!==n&&s.jsx(M.Z,{variant:"outlined",color:"primary",sx:{my:2},size:"small",onClick:()=>o(n+1),children:"View more"})})]})]})})]})}B.propTypes={item:a().object.isRequired,onClose:a().func.isRequired};var G=i(79061),_=i(51018),L=i(8465),H=i.n(L),W=i(49299),X=i(34986),K=i(42995),Q=i(9588),Y=i(54333),J=i(57314),V=i(74411),ee=i(3354),er=i(47844),ei=i(69983),es=i(49595),et=i(73209);let en=(0,d.ZP)("div")({flexGrow:1,height:"100%",overflow:"hidden"}),eo=(0,d.ZP)(et.Z)(({theme:e})=>({maxHeight:"100%","& .simplebar-scrollbar":{"&:before":{backgroundColor:(0,c.Fq)(e.palette.grey[600],.48)},"&.simplebar-visible:before":{opacity:1}},"& .simplebar-track.simplebar-vertical":{width:10},"& .simplebar-track.simplebar-horizontal .simplebar-scrollbar":{height:6},"& .simplebar-mask":{zIndex:"inherit"}}));function ea({children:e,sx:r,...i}){let t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return t?s.jsx(l.Z,{sx:{overflowX:"auto",...r},...i,children:e}):s.jsx(en,{children:s.jsx(eo,{timeout:500,clickOnTrack:!1,sx:r,...i,children:e})})}ea.propTypes={children:a().node.isRequired,sx:a().object};let ed=[{id:1,title:"Dashboard",slug:"",icon:s.jsx(V.D9E,{})},{id:2,title:"Categories",slug:"/categories",icon:s.jsx(Z.gz1,{}),isSearch:!0},{id:3,title:"Sub Categories",slug:"/sub-categories",icon:s.jsx(Z.gz1,{}),isSearch:!0},{id:3,title:"Brands",slug:"/brands",icon:s.jsx(ee.vxf,{}),isSearch:!0},{id:4,title:"Products",slug:"/products",icon:s.jsx(er.KMp,{}),isSearch:!0},{id:5,title:"Orders",slug:"/orders",icon:s.jsx(er.Nrh,{}),isSearch:!0},{id:6,title:"Users",slug:"/users",icon:s.jsx(V.zlQ,{}),isSearch:!0},{id:7,title:"Coupon codes",slug:"/coupon-codes",icon:s.jsx(es.Yt$,{}),isSearch:!0},{id:8,title:"Newsletter",slug:"/newsletter",icon:s.jsx(ei.Uzt,{}),isSearch:!1},{id:9,title:"Settings",slug:"/settings",icon:s.jsx(w.Fuo,{}),isSearch:!1}],el=e=>({width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden",borderRadius:0,[e.breakpoints.down("md")]:{position:"fixed"}}),ec=e=>({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"0px",borderRadius:0,[e.breakpoints.up("md")]:{width:`calc(${e.spacing(9)} + 1px)`},[e.breakpoints.down("md")]:{position:"fixed"}}),ep=(0,d.ZP)(K.ZP,{shouldForwardProp:e=>"open"!==e})(({theme:e,open:r})=>({width:240,zIndex:11,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...r&&{...el(e),"& .MuiDrawer-paper":el(e)},...!r&&{...ec(e),"& .MuiDrawer-paper":ec(e)}})),ex=(0,d.ZP)("div")(({theme:e})=>({display:"flex",alignItems:"center",padding:e.spacing(0,1),...e.mixins.toolbar}));function eh({handleDrawerClose:e,handleDrawerOpen:r,open:i}){let t=(0,p.Z)(),o=(0,O.tv)(),a=(0,_.usePathname)(),[d,h]=n().useState("/dashboard"),[u,m]=n().useState(!1),g=(0,x.Z)(t.breakpoints.down("md"));return n().useEffect(()=>{h(a),m(!0)},[a]),console.log("/dashboard/"+a.split("/")[2],"'/dashboard/' + pathname.split('/')[1]"),s.jsx("div",{children:(0,s.jsxs)(ep,{variant:"permanent",open:i,sx:{"&.MuiDrawer-root":{".MuiPaper-root":{overflow:{xs:"hidden",md:"unset"},zIndex:"998!important"}}},children:[s.jsx(ex,{}),s.jsx(l.Z,{sx:{position:"absolute",right:-15,top:85,zIndex:9999999,display:{xs:"none",md:"flex"}},children:s.jsx(X.Z,{size:"small","aria-label":"open drawer",onClick:i?e:r,edge:"start",sx:{bgcolor:t.palette.background.paper,border:"1px solid"+t.palette.divider,boxShadow:"none",height:25,minHeight:25,width:25,":hover":{bgcolor:t.palette.background.paper},svg:{color:t.palette.text.primary}},children:i?s.jsx(J.u1R,{}):s.jsx(J.hjJ,{})})}),s.jsx(ea,{sx:{height:1,"& .simplebar-content":{height:1,display:"flex",flexDirection:"column"}},children:s.jsx(q.Z,{sx:{px:1.5,gap:1,display:"flex",flexDirection:"column",py:2},children:ed.map(r=>s.jsx(D.ZP,{disablePadding:!0,sx:{display:"block",borderRadius:"8px",border:"1px solid transparent",...(a.split("/")?.length>3?"/dashboard/"+a.split("/")[2]:d)==="/dashboard"+r.slug&&u&&{bgcolor:e=>(0,c.Fq)(e.palette.primary.main,.2),border:e=>`1px solid ${e.palette.primary.main}`,color:t.palette.primary.main,"& .MuiTypography-root":{fontWeight:600}}},children:s.jsx(Q.Z,{title:i?"":r.title,placement:"left",arrow:!0,leaveDelay:200,children:(0,s.jsxs)(S.Z,{onClick:()=>{h("/dashboard"+r.slug),o.push("/dashboard"+r.slug),g&&e()},sx:{minHeight:48,justifyContent:i?"initial":"center",px:2.5,borderRadius:"8px"},children:[s.jsx(Y.Z,{sx:{minWidth:0,mr:i?2:"auto",justifyContent:"center"},children:r.icon}),s.jsx(P.Z,{primary:r.title,sx:{overflow:"hidden",height:i?"auto":0,textTransform:"capitalize"}})]})})},r.id))})})]})})}eh.propTypes={handleDrawerClose:a().func.isRequired,handleDrawerOpen:a().func.isRequired,open:a().bool.isRequired};var eu=i(75707),em=i(18723);let eg=(0,d.ZP)(l.Z)(({theme:e})=>({maxHeight:96,display:"flex",justifyContent:"space-between",padding:e.spacing(0,1,0,3),[e.breakpoints.down("md")]:{padding:e.spacing(0,1)}})),ej=(0,d.ZP)(eu.Z)(({theme:e})=>({width:190,transition:e.transitions.create(["box-shadow","width"],{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.shorter}),"&.Mui-focused":{width:230,boxShadow:e.customShadows.z8},"& fieldset":{borderWidth:"1px !important"},[e.breakpoints.down("sm")]:{width:150,"&.Mui-focused":{width:150}}}));function eb(){let e=(0,_.useRouter)(),r=(0,_.usePathname)(),i=(0,_.useSearchParams)(),n=i.get("search"),[o,a]=(0,t.useState)(n||""),d=(0,t.useCallback)((e,r)=>{let s=new URLSearchParams(i);return s.set(e,r),s.delete("page"),s.toString()},[i]);return(0,t.useEffect)(()=>{let i=setTimeout(()=>{o?e.push(`${r}?${d("search",o)}`):e.push(`${r}`)},1e3);return()=>clearTimeout(i)},[o]),s.jsx(eg,{children:s.jsx(ej,{size:"small",value:o,onChange:e=>{let r=e.target.value;a(r)},placeholder:"Search",startAdornment:s.jsx(em.Z,{position:"start",children:s.jsx(J.FKI,{size:20,style:{color:"text.disabled"}})})})})}let ef=H()(async()=>{},{loadableGenerated:{modules:["C:\\Users\\fashi\\OneDrive\\Desktop\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\commercehope\\sss\\fasion-needles\\src\\components\\layout\\_admin\\topbar\\index.jsx -> src/components/select/userSelect"]},ssr:!1,loading:()=>s.jsx(g.Z,{variant:"circular",width:50,height:50})}),ew=H()(async()=>{},{loadableGenerated:{modules:["C:\\Users\\fashi\\OneDrive\\Desktop\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\commercehope\\sss\\fasion-needles\\src\\components\\layout\\_admin\\topbar\\index.jsx -> src/components/settings/themeModeSetting"]},ssr:!1,loading:()=>s.jsx(g.Z,{variant:"circular",width:40,height:40})}),eZ=(0,d.ZP)(h.Z,{shouldForwardProp:e=>"open"!==e})(({theme:e})=>({zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",backgroundColor:(0,c.Fq)(e.palette.background.default,.72),borderBottom:"1px solid "+e.palette.divider}));function ey({open:e,handleDrawerOpen:r,handleDrawerClose:i}){let t=(0,p.Z)(),n=(0,_.usePathname)(),o=ed.filter(e=>"/dashboard"+e.slug===n),a=(0,x.Z)(t.breakpoints.down("md")),d=!!o[0]?.isSearch;return s.jsx(eZ,{position:"fixed",open:e,sx:{borderRadius:0,boxShadow:"none",zIndex:999},children:(0,s.jsxs)(u.Z,{sx:{justifyContent:"space-between"},children:[(0,s.jsxs)(j.Z,{direction:"row",alignItems:"center",children:[s.jsx(m.Z,{"aria-label":"open drawer",onClick:e?i:r,edge:"start",sx:{display:{xs:"flex",md:"none"}},size:"small",children:s.jsx(G.Bbf,{size:20})}),!a&&s.jsx(W.Z,{}),d&&s.jsx(eb,{})]}),(0,s.jsxs)(j.Z,{direction:"row",alignItems:"center",gap:1,children:[s.jsx(ew,{isAdmin:!0}),s.jsx(N,{}),s.jsx(ef,{})]})]})})}ey.propTypes={open:a().bool.isRequired,handleDrawerOpen:a().func.isRequired,handleDrawerClose:a().func.isRequired};var ev=i(57160),eS=i(75170);let ek=(0,d.ZP)("div")(({theme:e})=>({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1),...e.mixins.toolbar}));function eC({children:e}){let[r,i]=t.useState(!1),n=(0,ev.I0)(),o=()=>{i(!0),n((0,eS.GB)(!0))},a=()=>{i(!1),n((0,eS.GB)(!1))};return(0,s.jsxs)(l.Z,{sx:{display:"flex"},children:[s.jsx(ey,{open:r,handleDrawerOpen:o,handleDrawerClose:a}),s.jsx(eh,{handleDrawerOpen:o,handleDrawerClose:a,open:r}),(0,s.jsxs)(l.Z,{component:"main",sx:{flexGrow:1,p:3,position:"relative",overflow:"hidden"},children:[s.jsx(ek,{}),e]})]})}eC.propTypes={children:a().node.isRequired}},805:(e,r,i)=>{"use strict";i.d(r,{Z:()=>o});var s=i(53854);i(34218);var t=i(90509),n=i(38875);function o(){return s.jsx(t.Z,{sx:{position:"fixed",height:{md:"calc(100vh - 66px)",xs:"calc(100vh - 55px)"},top:{md:66,xs:0},bottom:{md:0,xs:55},left:0,width:"100%",bgcolor:"background.paper",display:"flex",alignItems:"center",justifyContent:"center",zIndex:111},children:s.jsx(t.Z,{sx:{width:"200px"},children:s.jsx(n.Z,{})})})}},93890:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>p});var s=i(53854),t=i(34218),n=i(34324),o=i.n(n),a=i(57160),d=i(85256),l=i(805),c=i(83541);function p({children:e}){let r=(0,c.tv)(),[i,n]=(0,t.useState)(!0),{isAuthenticated:o,user:p}=(0,a.v9)(({user:e})=>e);return((0,t.useEffect)(()=>{o&&p?.role!=="user"||(n(!1),d.Am.error("You re not allowed to access dashboard"),r.push("/"))},[]),i)?e:s.jsx(l.Z,{})}p.propTypes={children:o().node.isRequired}},91819:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>h});var s=i(4656);i(3542);var t=i(95153);let n=(0,t.createProxy)(String.raw`C:\Users\fashi\OneDrive\Desktop\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\commercehope\sss\fasion-needles\src\guards\admin.jsx`),{__esModule:o,$$typeof:a}=n,d=n.default,l=(0,t.createProxy)(String.raw`C:\Users\fashi\OneDrive\Desktop\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\commercehope\sss\fasion-needles\src\components\layout\_admin\index.jsx`),{__esModule:c,$$typeof:p}=l,x=l.default;function h({children:e}){return s.jsx(d,{children:s.jsx(x,{children:e})})}i(14732)}};
"use strict";exports.id=7346,exports.ids=[7346],exports.modules={83257:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i=r(53854);r(34218);var a=r(21703),s=r(38770),n=r(62355),l=r(18363),d=r(50477),c=r(34986),o=r(43958),h=r(11815),x=r(97399),m=r(30082),j=r(20610),g=r(98300),p=r(90509),Z=r(82464);let u=(0,j.ZP)(p.Z)(({theme:e})=>({"& .detail-card":{minHeight:226,position:"relative",background:(0,Z.F)(e.palette.primary.main,e.palette.primary.dark),color:e.palette.common.white,zIndex:0,"&:before":{content:"",position:"absolute",top:"-20%",left:"40%",transform:"translateX(-50%)",background:(0,g.Fq)(e.palette.primary.light,.5),height:80,width:80,borderRadius:"50px",zIndex:2},"&:after":{content:'""',position:"absolute",top:"50%",transform:"translateY(-50%)",right:"-14%",background:(0,g.Fq)(e.palette.primary.light,.5),height:80,width:80,borderRadius:"50px",zIndex:2},"& .detail-card-content":{position:"relative",zIndex:2,"&:before":{content:'""',position:"absolute",bottom:"-20%",left:"50%",transform:"translateX(-50%)",background:(0,g.Fq)(e.palette.primary.light,.5),height:80,width:80,borderRadius:"50px",zIndex:-1}},"& .detail-card-btn":{display:"block",minWidth:50,lineHeight:0,minHeight:50,color:e.palette.common.white,background:(0,g.Fq)(e.palette.primary.light,.5),"&:hover":{background:e.palette.primary.dark},"& .email-heading":{wordWrap:"break-word"}}},"& .skeleton":{marginLeft:"auto"}}));var v=r(34324),b=r.n(v);function y({...e}){let{data:t,isLoading:r}=e,j=t?.user;return i.jsx(u,{children:(0,i.jsxs)(a.ZP,{spacing:2,container:!0,children:[i.jsx(a.ZP,{item:!0,xs:12,md:12,children:i.jsx(s.Z,{className:"detail-card",children:(0,i.jsxs)(n.Z,{className:"detail-card-content",children:[i.jsx(l.Z,{spacing:2,direction:"row",justifyContent:"flex-start",alignItems:"center",children:r?(0,i.jsxs)(i.Fragment,{children:[i.jsx(d.Z,{variant:"rectangular",width:50,height:50}),i.jsx(d.Z,{variant:"text",width:150})]}):(0,i.jsxs)(i.Fragment,{children:[i.jsx(c.Z,{className:"detail-card-btn",variant:"contained",color:"primary",children:i.jsx(h.eTQ,{size:25})}),i.jsx(o.Z,{variant:"h6",children:"Customor Details"})]})}),i.jsx(l.Z,{spacing:r?0:1,mt:3,children:r?(0,i.jsxs)(i.Fragment,{children:[i.jsx(d.Z,{variant:"text",width:200}),i.jsx(d.Z,{variant:"text",width:200}),i.jsx(d.Z,{variant:"text",width:200}),i.jsx(d.Z,{variant:"text",width:200})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.Z,{variant:"body2",children:[i.jsx("strong",{children:"Name"}),": ",j?.firstName+" "+j?.lastName]}),(0,i.jsxs)(o.Z,{variant:"body2",children:[i.jsx("strong",{children:"Phone"}),": ",j?.phone]}),(0,i.jsxs)(o.Z,{className:"email-haeding",variant:"body2",children:[i.jsx("strong",{children:"Email"}),": ",j?.email]}),(0,i.jsxs)(o.Z,{variant:"body2",children:[i.jsx("strong",{children:"Address"}),": ",j?.address," ",j?.zip,", ",j?.city," ",j?.state,", ",j?.country]})]})})]})})}),i.jsx(a.ZP,{item:!0,xs:12,md:12,children:i.jsx(s.Z,{className:"detail-card",children:(0,i.jsxs)(n.Z,{className:"detail-card-content",children:[i.jsx(l.Z,{spacing:2,direction:"row",justifyContent:"flex-start",alignItems:"center",children:r?(0,i.jsxs)(i.Fragment,{children:[i.jsx(d.Z,{variant:"rectangular",width:50,height:50}),i.jsx(d.Z,{variant:"text",width:150})]}):(0,i.jsxs)(i.Fragment,{children:[i.jsx(c.Z,{className:"detail-card-btn",variant:"contained",color:"primary",children:i.jsx(x.tkr,{size:40})}),i.jsx(o.Z,{variant:"h6",children:"Payment Method"})]})}),i.jsx(l.Z,{spacing:r?0:1,mt:3,children:r?(0,i.jsxs)(i.Fragment,{children:[i.jsx(d.Z,{variant:"text",width:200}),i.jsx(d.Z,{variant:"text",width:200}),i.jsx(d.Z,{variant:"text",width:200}),i.jsx(d.Z,{variant:"text",width:200})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.Z,{variant:"body2",children:[i.jsx("strong",{children:"Method"}),": ",t?.paymentMethod==="COD"?"Cash On Delivery":"Online Payment"]}),t?.paymentMethod!=="COD"&&(0,i.jsxs)(o.Z,{variant:"body2",children:[i.jsx("strong",{children:"Payment Status"}),": ",t?.paymentStatus]}),t?.paymentId&&(0,i.jsxs)(o.Z,{variant:"body2",children:[i.jsx("strong",{children:"Payment ID"}),": ",t?.paymentId]}),"v",(0,i.jsxs)(o.Z,{variant:"body2",textTransform:"capitalize",children:[i.jsx("strong",{children:"Delivery Status"}),": ",t?.status]}),(0,i.jsxs)(o.Z,{variant:"body2",textTransform:"capitalize",children:[i.jsx("strong",{children:"Shipping Fee"}),": ",t?.currency," ",(0,m.e_)(t?.shipping)]}),(0,i.jsxs)(o.Z,{variant:"body2",children:[i.jsx("strong",{children:"Order Date"}),":"," ",t?.createdAt&&new Date(t?.createdAt).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",minute:"numeric",hour:"numeric"})]})]})})]})})})]})})}y.propTypes={data:b().object.isRequired,isLoading:b().bool.isRequired}},18176:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(53854),a=r(34324),s=r.n(a),n=r(41956),l=r.n(n),d=r(42477);function c({...e}){let t=(0,d.Z)("(min-width:600px)");return i.jsx(l(),{sizes:t?"14vw":"50vw",...e,src:e.src,alt:e.alt})}c.propTypes={src:s().string.isRequired,alt:s().string.isRequired,static:s().boolean}},65362:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var i=r(53854);r(34218);var a=r(50477),s=r(43958),n=r(93072),l=r(10201),d=r(24738),c=r(97586),o=r(90586),h=r(90509),x=r(84249),m=r(69466),j=r(18363),g=r(20610),p=r(30082),Z=r(18176),u=r(82464);let v=(0,g.ZP)("div")(({theme:e})=>({"& .table-main":{minWidth:450,"& .head-row":{background:(0,u.F)(e.palette.primary.main,e.palette.primary.dark),"& .head-row-cell":{color:e.palette.common.white}},"& .body-row-cell":{}},[e.breakpoints.down("sm")]:{"& .head-row-cell":{color:e.palette.common.white,"&.active":{display:"none"}},"& .body-column-cell":{display:"none"}}}));var b=r(34324),y=r.n(b);f.propTypes={data:y().arrayOf(y().shape({name:y().string.isRequired,images:y().arrayOf(y().shape({url:y().string.isRequired})).isRequired,color:y().string,size:y().string,quantity:y().number,priceSale:y().number,price:y().number})).isRequired,isLoading:y().bool.isRequired,currency:y().string.isRequired};let w=(0,g.ZP)(h.Z)(({theme:e})=>({width:64,height:64,objectFit:"cover",borderRadius:e.shape.borderRadius,border:"1px solid"+e.palette.divider,position:"relative",overflow:"hidden"}));function f({...e}){let{data:t,isLoading:r}=e;return i.jsx(v,{children:i.jsx(x.Z,{children:(0,i.jsxs)(l.Z,{className:"table-main",children:[i.jsx(m.Z,{children:(0,i.jsxs)(c.Z,{className:"head-row",children:[i.jsx(o.Z,{className:"head-row-cell",children:"Product"}),i.jsx(o.Z,{className:"head-row-cell active",children:"Color"}),i.jsx(o.Z,{className:"head-row-cell active",children:"Size"}),i.jsx(o.Z,{className:"head-row-cell",children:"Quantity"}),i.jsx(o.Z,{className:"head-row-cell",align:"right",children:"Price"})]})}),i.jsx(d.Z,{children:(r?Array.from([,,,]):t)?.map((e,t)=>i.jsxs(c.Z,{children:[i.jsx(o.Z,{children:e?i.jsxs(j.Z,{direction:"row",spacing:2,alignItems:"center",children:[i.jsx(w,{children:i.jsx(Z.Z,{priority:!0,fill:!0,alt:e?.name,src:e?.imageUrl})}),i.jsxs(j.Z,{spacing:.5,children:[i.jsx(s.Z,{variant:"subtitle2",noWrap:!0,fontSize:{xs:"12px",sm:"0.875rem"},children:e?.name.slice(0,50)}),i.jsxs(j.Z,{spacing:1,direction:"row",alignItems:"center",sx:{display:{xs:"flex",sm:"none"}},children:[i.jsxs(s.Z,{variant:"body2",fontSize:10,sx:{textTransform:"capitalize"},children:[i.jsx("b",{children:"Color :"})," ",e.color]}),i.jsxs(s.Z,{variant:"body2",fontSize:10,children:[i.jsx("b",{children:"Size :"})," ",e.size]})]})]})]}):i.jsxs(j.Z,{direction:"row",spacing:2,alignItems:"center",children:[i.jsx(a.Z,{variant:"rectangular",width:64,height:64}),i.jsx(a.Z,{variant:"text",width:100})]})}),i.jsx(o.Z,{className:"body-column-cell",sx:{textTransform:"capitalize"},children:e?e.color:i.jsx(a.Z,{variant:"text",width:100})}),i.jsx(o.Z,{className:"body-column-cell",sx:{textTransform:"uppercase"},children:e?e?.size:i.jsx(a.Z,{variant:"text",width:100})}),i.jsx(o.Z,{children:e?e?.quantity:i.jsx(a.Z,{variant:"text",width:100})}),i.jsx(o.Z,{align:"right",children:e?`${p.e_(e?.priceSale||e?.price)}`:i.jsx(a.Z,{variant:"text",width:100})})]},`row-${t}`))})]})})})}var N=r(98300),k=r(38770);let q=(0,g.ZP)(k.Z)(({theme:e})=>({"& .body-row":{"& .MuiTableCell-root":{background:(0,N.Fq)(e.palette.primary.main,.1)}},"& .skeleton-h5":{margin:e.spacing(2)},"&  .skeleton-text":{float:"right"}}));function R({...e}){let{data:t,isLoading:r}=e,h=t?.items;return(0,i.jsxs)(q,{children:[r?i.jsx(a.Z,{variant:"text",width:100,className:"skeleton-h5"}):(0,i.jsxs)(s.Z,{variant:"h5",p:2,children:[t?.totalItems," ",t?.totalItems>1?"Items":"Item"]}),i.jsx(f,{currency:"$",data:h,isLoading:r}),i.jsx(n.Z,{}),i.jsx(l.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsxs)(c.Z,{className:"body-row",children:[i.jsx(o.Z,{colSpan:4}),i.jsx(o.Z,{align:"right",children:r?i.jsx(a.Z,{variant:"text",className:"skeleton-text",width:100}):i.jsx("strong",{children:"Subtotal"})}),i.jsx(o.Z,{align:"right",children:r?i.jsx(a.Z,{variant:"text",className:"skeleton-text",width:100}):i.jsx("strong",{children:(0,p.e_)(t?.subTotal)})})]}),(0,i.jsxs)(c.Z,{children:[i.jsx(o.Z,{colSpan:4}),i.jsx(o.Z,{align:"right",children:r?i.jsx(a.Z,{variant:"text",className:"skeleton-text",width:100}):i.jsx("strong",{children:"Shipping Fee"})}),i.jsx(o.Z,{align:"right",children:r?i.jsx(a.Z,{variant:"text",className:"skeleton-text",width:100}):i.jsx("strong",{children:(0,p.e_)(t?.shipping)})})]}),(0,i.jsxs)(c.Z,{children:[i.jsx(o.Z,{colSpan:4}),i.jsx(o.Z,{align:"right",children:r?i.jsx(a.Z,{variant:"text",className:"skeleton-text",width:100}):i.jsx("strong",{children:"Discount"})}),i.jsx(o.Z,{align:"right",children:r?i.jsx(a.Z,{variant:"text",className:"skeleton-text",width:100}):(0,i.jsxs)("strong",{children:["-",(0,p.e_)(t?.discount)]})})]}),(0,i.jsxs)(c.Z,{children:[i.jsx(o.Z,{colSpan:4}),i.jsx(o.Z,{align:"right",children:r?i.jsx(a.Z,{variant:"text",className:"skeleton-text",width:100}):i.jsx("strong",{children:"Total"})}),i.jsx(o.Z,{align:"right",children:r?i.jsx(a.Z,{variant:"text",className:"skeleton-text",width:100}):i.jsx("strong",{children:(0,p.e_)(t?.total)})})]})]})})]})}R.propTypes={data:y().shape({items:y().array.isRequired,totalItems:y().number.isRequired,subTotal:y().number.isRequired,shipping:y().number.isRequired,discount:y().number.isRequired,total:y().number.isRequired}).isRequired,isLoading:y().bool.isRequired}},30082:(e,t,r)=>{r.d(t,{e_:()=>l,oe:()=>c,v1:()=>d});var i=r(9633),a=r.n(i),s=r(74292),n=r.n(s);function l(e){let t=new Intl.NumberFormat("en-US",{style:"currency",currency:process.env.CURRENCY||"USD"});return t.format(e).slice(0,-1)}function d(e){return a()(n()(e).format("0.00a"),".00","")}function c(e){return n()(e).format("0.0 b")}}};
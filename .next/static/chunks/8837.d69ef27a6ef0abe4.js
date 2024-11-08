"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8837,4763],{24763:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(57437),i=n(2265),s=n(59077),o=n(65984),l=n(8323),c=n(85269),a=n(13457),d=n(67248),u=n(54986),p=n(44551),x=n(64),h=n(3198),j=n(5925),m=n(37749),Z=n(74275),v=n.n(Z);function y(e){let{setCouponCode:t,setTotal:n}=e,{product:Z}=(0,h.v9)(e=>e),{total:v,shipping:y,subtotal:f}=Z.checkout,[g,b]=(0,i.useState)(""),[C,w]=(0,i.useState)(null),[S,_]=(0,i.useState)(null),{mutate:P,isLoading:E}=(0,s.useMutation)(m.applyCouponCode,{onSuccess:e=>{let{data:r}=e,i=function(e){let t=new Date;return t>=new Date(e)}(r.expire);if(i){j.ZP.error("Coupon code is expired!");return}if("percent"===r.type){let e=r.discount;t(g);let i=e/100*f,s=f-i;_(i),w(s+y),n(s+y),j.ZP.success("Coupon code applied. You have saved "+(0,x.e_)(i))}else{let e=f-r.discount;_(r.discount),n(e),t(g),j.ZP.success("Coupon code applied. You have saved "+(0,x.e_)(r.discount)),w(e+ +y)}},onError:()=>{j.ZP.error("Coupon code is not valid")}});return(0,r.jsx)(o.Z,{sx:{mb:2},children:(0,r.jsxs)(l.Z,{sx:{py:2},children:[(0,r.jsx)(c.Z,{variant:"h4",mb:1,children:"Payment Summary"}),(0,r.jsxs)(a.Z,{spacing:0,mt:1,mb:2,gap:1,children:[(0,r.jsxs)(a.Z,{direction:"row",alignItem:"center",justifyContent:"space-between",spacing:2,children:[(0,r.jsx)(c.Z,{variant:"subtitle2",color:"text.secondary",children:"Subtotal:"}),(0,r.jsx)(c.Z,{variant:"subtitle2",children:(0,x.e_)(f)})]}),(0,r.jsxs)(a.Z,{direction:"row",alignItem:"center",justifyContent:"space-between",spacing:2,children:[(0,r.jsx)(c.Z,{variant:"subtitle2",color:"text.secondary",children:"Discount:"}),(0,r.jsxs)(c.Z,{variant:"subtitle2",children:["-",(0,x.e_)(S||0)]})]}),(0,r.jsxs)(a.Z,{direction:"row",alignItem:"center",justifyContent:"space-between",spacing:2,children:[(0,r.jsx)(c.Z,{variant:"subtitle2",color:"text.secondary",children:"Shipping:"}),(0,r.jsx)(c.Z,{variant:"subtitle2",children:y?(0,x.e_)(y):"Free"})]}),(0,r.jsxs)(a.Z,{direction:"row",gap:1,children:[(0,r.jsx)(d.Z,{id:"coupon-field",fullWidth:!0,placeholder:"Enter coupon code",size:"small",value:g,disabled:!!C,onChange:e=>b(e.target.value)}),(0,r.jsx)(p.Z,{loading:E,onClick:()=>{g.length>3?P(g):j.ZP.error("Enter valid coupon code.")},variant:"contained",color:"primary",disabled:!!C||g.length<4,children:C?"Applied":"Apply"})]})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)(a.Z,{direction:"row",alignItem:"center",justifyContent:"space-between",spacing:2,mt:2,children:[(0,r.jsx)(c.Z,{variant:"subtitle1",children:"Total:"}),(0,r.jsx)(c.Z,{variant:"subtitle1",children:(0,x.e_)(C||v)})]})]})})}y.propTypes={setCouponCode:v().func.isRequired,setTotal:v().func.isRequired}},28837:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(57437);n(2265);var i=n(65984),s=n(8323),o=n(85269),l=n(13457),c=n(60529),a=n(27400),d=n(45099),u=n(34990),p=n(36468),x=n(96974),h=n(90250),j=n(89975),m=n(74275),Z=n.n(m);let v=e=>{let{children:t}=e;return(0,r.jsx)(h.Z,{sx:{bgcolor:e=>(0,j.Fq)(e.palette.error.main,.2),mt:1},severity:"error",children:t})};v.propTypes={children:Z().node.isRequired};var y=n(41101);let f=e=>{let{error:t}=e,n=(0,y.Z)(),s={base:{color:n.palette.text.primary,fontSize:"16px",iconColor:n.palette.text.primary,"::placeholder":{color:n.palette.text.secondary}},invalid:{iconColor:n.palette.error.main,color:n.palette.error.main},complete:{iconColor:n.palette.success.main,color:n.palette.text.primary}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{sx:{height:40,display:"flex",alignItems:"center","& .StripeElement":{width:"100%",padding:"15px"}},children:(0,r.jsx)(x.CardElement,{options:{iconStyle:"solid",style:s,hidePostalCode:!0},onChange:e=>{e.error}})}),t&&(0,r.jsx)(v,{children:t})]})};f.propTypes={error:Z().string},n(24763);var g=(0,n(38173).Z)((0,r.jsx)("path",{d:"M23 8v10c0 1.1-.9 2-2 2H5c-.55 0-1-.45-1-1s.45-1 1-1h16V8c0-.55.45-1 1-1s1 .45 1 1zM4 16c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3v7c0 1.1-.9 2-2 2H4zm3-6c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"}),"PaymentsRounded");function b(e){let{value:t,setValue:n,error:x}=e;return(0,r.jsx)(i.Z,{children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(o.Z,{variant:"h4",mb:1,children:"Payment Method"}),(0,r.jsx)(l.Z,{spacing:1,mt:1,children:(0,r.jsxs)(c.Z,{value:t,onChange:e=>{n(e.target.value)},sx:{pl:1},children:[(0,r.jsx)(a.Z,{value:"COD",control:(0,r.jsx)(d.Z,{}),label:(0,r.jsxs)(l.Z,{direction:"row",alignItem:"center",spacing:1,ml:1,children:[(0,r.jsx)(p.SG6,{size:20}),(0,r.jsx)(o.Z,{variant:"subtitle2",children:"Cash On Delivery"})]})}),(0,r.jsx)(a.Z,{value:"phonepe",control:(0,r.jsx)(d.Z,{}),label:(0,r.jsxs)(l.Z,{direction:"row",alignItem:"center",spacing:1,ml:1,sx:{svg:{color:"stripe"===t?"primary.main":"text.primary"}},children:[(0,r.jsx)(g,{size:20}),(0,r.jsx)(o.Z,{variant:"subtitle2",children:"Online"})]})})]})}),(0,r.jsxs)(u.Z,{in:"stripe"===t,children:[(0,r.jsx)(o.Z,{variant:"subtitle1",color:"text.secondary",mt:1,mb:1,children:"Creadit Card"}),(0,r.jsx)(f,{error:x})]})]})})}b.propTypes={value:Z().string.isRequired,setValue:Z().func.isRequired,error:Z().string}},64:function(e,t,n){n.d(t,{e_:function(){return c},oe:function(){return d},v1:function(){return a}});var r=n(82802),i=n.n(r),s=n(55194),o=n.n(s),l=n(25566);function c(e){let t=new Intl.NumberFormat("en-US",{style:"currency",currency:l.env.CURRENCY||"USD"});return t.format(e).slice(0,-1)}function a(e){return i()(o()(e).format("0.00a"),".00","")}function d(e){return o()(e).format("0.0 b")}}}]);
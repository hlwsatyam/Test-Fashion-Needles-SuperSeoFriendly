"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4763],{24763:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(57437),i=t(2265),o=t(59077),s=t(65984),c=t(8323),a=t(85269),l=t(13457),u=t(67248),d=t(54986),p=t(44551),h=t(64),f=t(3198),x=t(5925),Z=t(37749),j=t(74275),v=t.n(j);function b(e){let{setCouponCode:n,setTotal:t}=e,{product:j}=(0,f.v9)(e=>e),{total:v,shipping:b,subtotal:m}=j.checkout,[y,C]=(0,i.useState)(""),[g,w]=(0,i.useState)(null),[_,S]=(0,i.useState)(null),{mutate:k,isLoading:E}=(0,o.useMutation)(Z.applyCouponCode,{onSuccess:e=>{let{data:r}=e,i=function(e){let n=new Date;return n>=new Date(e)}(r.expire);if(i){x.ZP.error("Coupon code is expired!");return}if("percent"===r.type){let e=r.discount;n(y);let i=e/100*m,o=m-i;S(i),w(o+b),t(o+b),x.ZP.success("Coupon code applied. You have saved "+(0,h.e_)(i))}else{let e=m-r.discount;S(r.discount),t(e),n(y),x.ZP.success("Coupon code applied. You have saved "+(0,h.e_)(r.discount)),w(e+ +b)}},onError:()=>{x.ZP.error("Coupon code is not valid")}});return(0,r.jsx)(s.Z,{sx:{mb:2},children:(0,r.jsxs)(c.Z,{sx:{py:2},children:[(0,r.jsx)(a.Z,{variant:"h4",mb:1,children:"Payment Summary"}),(0,r.jsxs)(l.Z,{spacing:0,mt:1,mb:2,gap:1,children:[(0,r.jsxs)(l.Z,{direction:"row",alignItem:"center",justifyContent:"space-between",spacing:2,children:[(0,r.jsx)(a.Z,{variant:"subtitle2",color:"text.secondary",children:"Subtotal:"}),(0,r.jsx)(a.Z,{variant:"subtitle2",children:(0,h.e_)(m)})]}),(0,r.jsxs)(l.Z,{direction:"row",alignItem:"center",justifyContent:"space-between",spacing:2,children:[(0,r.jsx)(a.Z,{variant:"subtitle2",color:"text.secondary",children:"Discount:"}),(0,r.jsxs)(a.Z,{variant:"subtitle2",children:["-",(0,h.e_)(_||0)]})]}),(0,r.jsxs)(l.Z,{direction:"row",alignItem:"center",justifyContent:"space-between",spacing:2,children:[(0,r.jsx)(a.Z,{variant:"subtitle2",color:"text.secondary",children:"Shipping:"}),(0,r.jsx)(a.Z,{variant:"subtitle2",children:b?(0,h.e_)(b):"Free"})]}),(0,r.jsxs)(l.Z,{direction:"row",gap:1,children:[(0,r.jsx)(u.Z,{id:"coupon-field",fullWidth:!0,placeholder:"Enter coupon code",size:"small",value:y,disabled:!!g,onChange:e=>C(e.target.value)}),(0,r.jsx)(p.Z,{loading:E,onClick:()=>{y.length>3?k(y):x.ZP.error("Enter valid coupon code.")},variant:"contained",color:"primary",disabled:!!g||y.length<4,children:g?"Applied":"Apply"})]})]}),(0,r.jsx)(d.Z,{}),(0,r.jsxs)(l.Z,{direction:"row",alignItem:"center",justifyContent:"space-between",spacing:2,mt:2,children:[(0,r.jsx)(a.Z,{variant:"subtitle1",children:"Total:"}),(0,r.jsx)(a.Z,{variant:"subtitle1",children:(0,h.e_)(g||v)})]})]})})}b.propTypes={setCouponCode:v().func.isRequired,setTotal:v().func.isRequired}},64:function(e,n,t){t.d(n,{e_:function(){return a},oe:function(){return u},v1:function(){return l}});var r=t(82802),i=t.n(r),o=t(55194),s=t.n(o),c=t(25566);function a(e){let n=new Intl.NumberFormat("en-US",{style:"currency",currency:c.env.CURRENCY||"USD"});return n.format(e).slice(0,-1)}function l(e){return i()(s()(e).format("0.00a"),".00","")}function u(e){return s()(e).format("0.0 b")}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6201],{72970:function(e,n,r){Promise.resolve().then(r.bind(r,54430))},54430:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return g}});var a=r(57437);r(2265);var i=r(65916),s=r(96089),o=r(21654),t=r(74275),d=r.n(t);function u(e){let{data:n,isLoading:r}=e;return(0,a.jsx)("div",{children:(0,a.jsx)(o.default,{data:n,isLoading:r})})}u.propTypes={data:d().object.isRequired,isLoading:d().bool.isRequired};var l=r(37749),c=r(59077),f=r(5925);function g(e){var n;let{params:r}=e,{data:o,isLoading:t}=(0,c.useQuery)(["coupon-codes"],()=>l.getCategoryByAdmin(r.slug),{onError:e=>{f.ZP.error(e.response.data.message||"Something went wrong!")}});return(0,a.jsxs)("div",{children:[(0,a.jsx)(i.default,{children:(0,a.jsx)(s.default,{admin:!0,heading:"Categories List",links:[{name:"Dashboard",href:"/"},{name:"Categories",href:"/dashboard/categories"},{name:null==o?void 0:null===(n=o.data)||void 0===n?void 0:n.name}]})}),(0,a.jsx)(u,{isLoading:t,data:null==o?void 0:o.data})]})}g.propTypes={params:d().shape({slug:d().string.isRequired}).isRequired}}},function(e){e.O(0,[2400,3861,1050,1175,7971,8220,2060,6836,5616,7248,3220,2173,9066,9025,2072,5524,9499,2190,2440,548,6620,6639,1654,2971,2472,1744],function(){return e(e.s=72970)}),_N_E=e.O()}]);
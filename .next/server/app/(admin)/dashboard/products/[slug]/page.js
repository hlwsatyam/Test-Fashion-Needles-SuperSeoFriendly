(()=>{var e={};e.id=4369,e.ids=[4369],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},52433:(e,r,s)=>{"use strict";s.r(r),s.d(r,{GlobalError:()=>n.a,__next_app__:()=>l,originalPathname:()=>p,pages:()=>u,routeModule:()=>m,tree:()=>d});var t=s(67096),o=s(16132),a=s(37284),n=s.n(a),i=s(32564),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);s.d(r,c);let d=["",{children:["(admin)",{children:["dashboard",{children:["products",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,57566)),"C:\\Users\\fashi\\OneDrive\\Desktop\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\commercehope\\sss\\fasion-needles\\src\\app\\(admin)\\dashboard\\products\\[slug]\\page.jsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,91819)),"C:\\Users\\fashi\\OneDrive\\Desktop\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\commercehope\\sss\\fasion-needles\\src\\app\\(admin)\\dashboard\\layout.jsx"]}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(s.bind(s,51922))).default(e)],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,62513)),"C:\\Users\\fashi\\OneDrive\\Desktop\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\commercehope\\sss\\fasion-needles\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[async e=>(await Promise.resolve().then(s.bind(s,51922))).default(e)],twitter:[],manifest:void 0}}],u=["C:\\Users\\fashi\\OneDrive\\Desktop\\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\\commercehope\\sss\\fasion-needles\\src\\app\\(admin)\\dashboard\\products\\[slug]\\page.jsx"],p="/(admin)/dashboard/products/[slug]/page",l={require:s,loadChunk:()=>Promise.resolve()},m=new t.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(admin)/dashboard/products/[slug]/page",pathname:"/dashboard/products/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},78268:(e,r,s)=>{Promise.resolve().then(s.bind(s,10070)),Promise.resolve().then(s.bind(s,79764)),Promise.resolve().then(s.bind(s,22036))},10070:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>u});var t=s(53854);s(34218);var o=s(39946),a=s(34324),n=s.n(a),i=s(36375),c=s(4206),d=s(85256);function u({brands:e,categories:r,slug:s}){let{data:a,isLoading:n}=(0,c.useQuery)(["coupon-codes"],()=>i.getProductBySlug(s),{onError:e=>{d.ZP.error(e.response.data.message||"Something went wrong!")}});return t.jsx("div",{children:t.jsx(o.default,{brands:e,categories:r,currentProduct:a?.data,isLoading:n})})}u.propTypes={brands:n().array.isRequired,categories:n().array.isRequired,slug:n().string.isRequired}},57566:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>l});var t=s(4656);s(3542);var o=s(33779),a=s(46978),n=s(95153);let i=(0,n.createProxy)(String.raw`C:\Users\fashi\OneDrive\Desktop\codecanyon-yj1ceCeE-commercehope-reactjs-ecommerce-script\commercehope\sss\fasion-needles\src\components\_admin\products\editProduct.jsx`),{__esModule:c,$$typeof:d}=i,u=i.default;var p=s(20830);async function l({params:e}){let r=await p.tG(),s=await p.dY();!r&&s&&notFound();let{data:n}=r,{data:i}=s;return(0,t.jsxs)("div",{children:[t.jsx(o.ZP,{children:t.jsx(a.default,{admin:!0,heading:"Product List",links:[{name:"Dashboard",href:"/"},{name:"Products",href:"/dashboard/products"},{name:"Add Product"}]})}),t.jsx(u,{brands:i,categories:n,slug:e.slug})]})}}};var r=require("../../../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[3271,9188,1063,9242,3512,6391,1098,2276,3638,95,9595,9324,7844,4411,8091,9614,1753,4012,2549,6409,2035,8051,6786,550],()=>s(52433));module.exports=t})();
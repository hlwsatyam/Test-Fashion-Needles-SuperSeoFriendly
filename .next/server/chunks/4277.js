"use strict";exports.id=4277,exports.ids=[4277],exports.modules={74277:(e,s,t)=>{t.r(s),t.d(s,{default:()=>p});var r=t(53854),i=t(34218),o=t.n(i),n=t(83541),l=t(96473),u=t(18157),d=t(57314),h=t(6715),a=t(34324),c=t.n(a);function p({isAuth:e}){let s=(0,n.tv)(),[t,i]=o().useState(!0),{wishlist:a}=(0,h.v9)(({wishlist:e})=>e);return o().useEffect(()=>{i(!1)},[]),r.jsx(r.Fragment,{children:r.jsx(l.Z,{name:"wishlist",color:"default",onClick:()=>{e?s.push("/profile/wishlist"):s.push("/auth/login")},children:r.jsx(u.Z,{showZero:!0,badgeContent:t||!e?0:a?.length,color:"warning",children:r.jsx(d.AWH,{})})})})}p.propTypes={isAuth:c().bool.isRequired}}};
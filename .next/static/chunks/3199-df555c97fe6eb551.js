"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3199],{3199:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var i=r(57437),n=r(2265),a=r(59077),o=r(35843),s=r(44551),l=r(85269),c=r(96507),d=r(38939),u=r(65984),p=r(13457),h=r(21677),x=r(67248),g=r(5096),m=r(46349),j=r(14604),v=r(45564),Z=r(24033),y=r(35691),b=r(92173),f=r(5925),w=r(52072),C=r(37749),q=r(74275),D=r.n(q);S.propTypes={categories:D().arrayOf(D().shape({_id:D().string.isRequired,name:D().string.isRequired})).isRequired,data:D().object,isLoading:D().bool,isInitialized:D().bool};let _=(0,o.ZP)(l.Z)(e=>{let{theme:t}=e;return{...t.typography.subtitle2,color:t.palette.text.secondary,marginBottom:t.spacing(1),lineHeight:2.5}}),T=["active","deactive"];function S(e){var t;let{data:r,categories:o,isLoading:l,isInitialized:q=!1}=e,D=(0,Z.useRouter)(),[S,F]=(0,n.useState)({loading:!1,name:"",search:"",open:!1}),{mutate:R,isLoading:k}=(0,a.useMutation)(r?"update":"new",r?C.updateSubCategory:C.addSubCategory,{...r&&{enabled:!!r},retry:!1,onSuccess:e=>{f.ZP.success(e.message),D.push("/dashboard/sub-categories")},onError:e=>{f.ZP.error(e.response.data.message)}}),{mutate:P}=(0,a.useMutation)(C.singleDeleteFile,{onError:e=>{f.ZP.error(e.response.data.message)}}),W=y.Ry().shape({name:y.Z_().required("Name is required"),cover:y.nK().required("Cover is required"),slug:y.Z_().required("Slug is required"),description:y.Z_().required("Description is required"),metaTitle:y.Z_().required("Meta title is required"),metaDescription:y.Z_().required("Meta description is required"),parentCategory:y.Z_().required("Category is required")}),z=(0,w.TA)({initialValues:{name:(null==r?void 0:r.name)||"",metaTitle:(null==r?void 0:r.metaTitle)||"",cover:(null==r?void 0:r.cover)||null,description:(null==r?void 0:r.description)||"",metaDescription:(null==r?void 0:r.metaDescription)||"",file:(null==r?void 0:r.cover)||"",slug:(null==r?void 0:r.slug)||"",status:(null==r?void 0:r.status)||T[0],parentCategory:(null==r?void 0:r.category)||o&&(null===(t=o[0])||void 0===t?void 0:t._id)||""},enableReinitialize:!0,validationSchema:W,onSubmit:async e=>{let{...t}=e;try{R({...t,...r&&{currentSlug:r.slug}})}catch(e){console.error(e)}}}),{errors:I,values:M,touched:A,handleSubmit:E,setFieldValue:N,getFieldProps:U}=z,L=async e=>{F({...S,loading:2});let t=e[0];t&&Object.assign(t,{preview:URL.createObjectURL(t)}),N("file",t);let r=new FormData;r.append("file",t),r.append("upload_preset","fezrhfpj"),await b.Z.post("https://api.cloudinary.com/v1_1/docjvlprh/image/upload",r,{onUploadProgress:e=>{let{loaded:t,total:r}=e;F({...S,loading:Math.floor(100*t/r)})}}).then(e=>{let{data:t}=e;N("cover",{_id:t.public_id,url:t.secure_url}),F({...S,loading:!1})}).then(()=>{M.cover&&P(M.cover._id),F({...S,loading:!1})})};return(0,i.jsx)(c.Z,{position:"relative",children:(0,i.jsx)(w.Hy,{value:z,children:(0,i.jsx)(w.l0,{noValidate:!0,autoComplete:"off",onSubmit:E,children:(0,i.jsxs)(d.ZP,{container:!0,spacing:2,children:[(0,i.jsx)(d.ZP,{item:!0,xs:12,md:8,children:(0,i.jsx)(u.Z,{sx:{p:3},children:(0,i.jsxs)(p.Z,{spacing:3,children:[(0,i.jsxs)("div",{children:[l?(0,i.jsx)(h.Z,{variant:"text",width:140}):(0,i.jsxs)(_,{component:"label",htmlFor:"category-name",children:[" ","Category Name"," "]}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:56}):(0,i.jsx)(x.Z,{id:"category-name",fullWidth:!0,...U("name"),onChange:e=>{let t=e.target.value,r=t.toLowerCase().replace(/[^a-zA-Z0-9\s]+/g,"").replace(/\s+/g,"-");z.setFieldValue("slug",r),z.handleChange(e)},error:!!(A.name&&I.name),helperText:A.name&&I.name})]}),(0,i.jsxs)("div",{children:[l?(0,i.jsx)(h.Z,{variant:"text",width:100}):(0,i.jsx)(_,{component:"label",htmlFor:"meta-title",children:"Meta Title"}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:56}):(0,i.jsx)(x.Z,{id:"meta-title",fullWidth:!0,...U("metaTitle"),error:!!(A.metaTitle&&I.metaTitle),helperText:A.metaTitle&&I.metaTitle})]}),(0,i.jsx)("div",{children:(0,i.jsxs)(g.Z,{fullWidth:!0,children:[q?(0,i.jsx)(h.Z,{variant:"text",width:100}):(0,i.jsx)(_,{component:"label",htmlFor:"grouped-native-select",children:"Category"}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:56}):(0,i.jsx)(m.Z,{native:!0,...U("parentCategory"),value:M.parentCategory,id:"grouped-native-select",children:null==o?void 0:o.map(e=>(0,i.jsx)("option",{value:e._id,children:e.name},e._id))}),A.parentCategory&&I.parentCategory&&(0,i.jsx)(j.Z,{error:!0,sx:{px:2,mx:0},children:A.parentCategory&&I.parentCategory})]})}),(0,i.jsxs)("div",{children:[l?(0,i.jsx)(h.Z,{variant:"text",width:70}):(0,i.jsxs)(_,{component:"label",htmlFor:"slug",children:[" ","Slug"]}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:56}):(0,i.jsx)(x.Z,{fullWidth:!0,id:"slug",...U("slug"),error:!!(A.slug&&I.slug),helperText:A.slug&&I.slug})]}),(0,i.jsxs)("div",{children:[l?(0,i.jsx)(h.Z,{variant:"text",width:100}):(0,i.jsxs)(_,{component:"label",htmlFor:"description",children:[" ","Description"," "]}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:240}):(0,i.jsx)(x.Z,{fullWidth:!0,id:"description",...U("description"),error:!!(A.description&&I.description),helperText:A.description&&I.description,rows:9,multiline:!0})]})]})})}),(0,i.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,i.jsx)("div",{style:{position:"-webkit-sticky",position:"sticky",top:0},children:(0,i.jsxs)(p.Z,{spacing:3,children:[(0,i.jsx)(u.Z,{sx:{p:3},children:(0,i.jsxs)(p.Z,{spacing:3,children:[(0,i.jsxs)("div",{children:[l?(0,i.jsx)(h.Z,{variant:"text",width:150}):(0,i.jsxs)(_,{component:"label",htmlFor:"meta-description",children:[" ","Meta Description"," "]}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:240}):(0,i.jsx)(x.Z,{id:"meta-description",fullWidth:!0,...U("metaDescription"),error:!!(A.metaDescription&&I.metaDescription),helperText:A.metaDescription&&I.metaDescription,rows:9,multiline:!0})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)(p.Z,{direction:"row",justifyContent:"space-between",children:[l?(0,i.jsx)(h.Z,{variant:"text",width:150}):(0,i.jsx)(_,{variant:"body1",component:"label",color:"text.primary",children:"Image"}),l?(0,i.jsx)(h.Z,{variant:"text",width:150}):(0,i.jsx)(_,{component:"label",htmlFor:"file",children:(0,i.jsx)("span",{children:"512 * 512"})})]}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:225}):(0,i.jsx)(v.Z,{id:"file",file:M.cover,onDrop:L,error:!!(A.cover&&I.cover),category:!0,accept:"image/*",loading:S.loading}),A.cover&&I.cover&&(0,i.jsx)(j.Z,{error:!0,sx:{px:2,mx:0},children:A.cover&&I.cover})]}),(0,i.jsxs)(g.Z,{fullWidth:!0,sx:{select:{textTransform:"capitalize"}},children:[l?(0,i.jsx)(h.Z,{variant:"text",width:70}):(0,i.jsx)(_,{component:"label",htmlFor:"status",children:"Status"}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:56}):(0,i.jsxs)(m.Z,{id:"status",native:!0,...U("status"),error:!!(A.status&&I.status),children:[(0,i.jsx)("option",{value:"",style:{display:"none"}}),T.map(e=>(0,i.jsx)("option",{value:e,children:e},e))]}),A.status&&I.status&&(0,i.jsx)(j.Z,{error:!0,sx:{px:2,mx:0},children:A.status&&I.status})]})]})}),l?(0,i.jsx)(h.Z,{variant:"rectangular",width:"100%",height:56}):(0,i.jsx)(s.Z,{type:"submit",variant:"contained",size:"large",loading:k,sx:{ml:"auto",mt:3},children:r?"Edit Sub Category":"Create Sub Category"})]})})})]})})})})}},45564:function(e,t,r){r.d(t,{Z:function(){return g}});var i=r(57437),n=r(74275),a=r.n(n),o=r(35843),s=r(89975),l=r(18687),c=r(96507),d=r(85269),u=r(76639),p=r(22440),h=r(64);let x=(0,o.ZP)("div")(e=>{let{theme:t}=e;return{outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:t.spacing(5,0),borderRadius:t.shape.borderRadius,transition:t.transitions.create("padding"),backgroundColor:t.palette.background.neutral,border:"1px dashed ".concat(t.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"},[t.breakpoints.up("md")]:{textAlign:"left",flexDirection:"row"}}});function g(e){let{error:t,file:r,sx:n,onDrop:a,loading:o,...g}=e,{getRootProps:m,getInputProps:j,isDragActive:v,isDragReject:Z,fileRejections:y}=(0,p.uI)({multiple:!1,onDrop:a,...g});return(0,i.jsxs)(c.Z,{sx:{width:"100%",...n},children:[(0,i.jsxs)(x,{...m(),sx:{...v&&{opacity:.72},...(Z||t)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"},...g.category&&{padding:"8px 0"}},children:[o&&(0,i.jsx)(c.Z,{sx:{position:"absolute",top:0,left:0,width:o?"".concat(o,"%"):0,height:"100%",display:"flex",alignItems:"center",justifyContent:"center",bgcolor:e=>(0,s.Fq)(e.palette.primary.main,.8),zIndex:9999},children:(0,i.jsxs)(d.Z,{variant:"h6",color:"text.primary",children:[o,"%"]})}),(0,i.jsx)("input",{...j()}),!g.category&&(0,i.jsx)(u.A,{sx:{width:220}}),(0,i.jsxs)(c.Z,{sx:{p:2,ml:{md:2}},children:[(0,i.jsx)(d.Z,{variant:g.category?"subtitle1":"h5",children:"Drop or Select images"}),g.category?(0,i.jsx)(u.A,{sx:{width:160}}):(0,i.jsxs)(d.Z,{variant:"body2",sx:{color:"text.secondary"},children:["Drop image here or Click","\xa0",(0,i.jsx)(d.Z,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"Browse"}),"\xa0","Thorough your machine"]})]}),r&&(0,i.jsx)(c.Z,{component:"img",alt:"file preview",src:r.preview?r.preview:r.url,sx:{top:8,borderRadius:1,objectFit:"contain",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)",backgroundColor:"background.paper"}})]}),y.length>0&&(0,i.jsx)(()=>(0,i.jsx)(l.Z,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:e=>(0,s.Fq)(e.palette.error.main,.08)},children:y.map(e=>{let{file:t,errors:r}=e,{path:n,size:a}=t;return(0,i.jsxs)(c.Z,{sx:{my:1},children:[(0,i.jsxs)(d.Z,{variant:"subtitle2",noWrap:!0,children:[n," - ",(0,h.oe)(a)]}),r.map(e=>(0,i.jsxs)(d.Z,{variant:"caption",component:"p",children:["- ",e.message]},e.code))]},n)})}),{})]})}g.propTypes={error:a().bool,file:a().oneOfType([a().string,a().object]),sx:a().object,state:a().object,onDrop:a().func.isRequired,loading:a().number.isRequired}},64:function(e,t,r){r.d(t,{e_:function(){return l},oe:function(){return d},v1:function(){return c}});var i=r(82802),n=r.n(i),a=r(55194),o=r.n(a),s=r(25566);function l(e){let t=new Intl.NumberFormat("en-US",{style:"currency",currency:s.env.CURRENCY||"USD"});return t.format(e).slice(0,-1)}function c(e){return n()(o()(e).format("0.00a"),".00","")}function d(e){return o()(e).format("0.0 b")}}}]);
"use strict";exports.id=1753,exports.ids=[1753],exports.modules={92539:(e,t)=>{t.Z=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(function(e){var t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}},61753:(e,t,n)=>{n.d(t,{uI:()=>en});var r=n(34218),o=n.n(r),i=n(34324),a=n.n(i);function c(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function c(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,c)}u((r=r.apply(e,t||[])).next())})}function u(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function s(e,t,n){if(n||2==arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;var f=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function p(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=f.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var d=[".DS_Store","Thumbs.db"];function v(e){return"object"==typeof e&&null!==e}function m(e){return e.filter(function(e){return -1===d.indexOf(e.name)})}function g(e){if(null===e)return[];for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function y(e){if("function"!=typeof e.webkitGetAsEntry)return b(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?D(t):b(e)}function b(e){var t=e.getAsFile();return t?Promise.resolve(p(t)):Promise.reject("".concat(e," is not a File"))}function h(e){return c(this,void 0,void 0,function(){return u(this,function(t){return[2,e.isDirectory?D(e):function(e){return c(this,void 0,void 0,function(){return u(this,function(t){return[2,new Promise(function(t,n){e.file(function(n){t(p(n,e.fullPath))},function(e){n(e)})})]})})}(e)]})})}function D(e){var t=e.createReader();return new Promise(function(e,n){var r=[];!function o(){var i=this;t.readEntries(function(t){return c(i,void 0,void 0,function(){var i;return u(this,function(a){switch(a.label){case 0:if(t.length)return[3,5];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return e(a.sent()),[3,4];case 3:return n(a.sent()),[3,4];case 4:return[3,6];case 5:i=Promise.all(t.map(h)),r.push(i),o(),a.label=6;case 6:return[2]}})})},function(e){n(e)})}()})}var w=n(92539);function x(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||F(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){A(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||F(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var S=function(e){var t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?"one of ".concat(e.join(", ")):e;return{code:"file-invalid-type",message:"File type must be ".concat(t)}},P=function(e){return{code:"file-too-large",message:"File is larger than ".concat(e," ").concat(1===e?"byte":"bytes")}},C=function(e){return{code:"file-too-small",message:"File is smaller than ".concat(e," ").concat(1===e?"byte":"bytes")}},z={code:"too-many-files",message:"Too many files"};function R(e,t){var n="application/x-moz-file"===e.type||(0,w.Z)(e,t);return[n,n?null:S(t)]}function I(e,t,n){if(T(e.size)){if(T(t)&&T(n)){if(e.size>n)return[!1,P(n)];if(e.size<t)return[!1,C(t)]}else if(T(t)&&e.size<t)return[!1,C(t)];else if(T(n)&&e.size>n)return[!1,P(n)]}return[!0,null]}function T(e){return null!=e}function M(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function L(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(e){return"Files"===e||"application/x-moz-file"===e}):!!e.target&&!!e.target.files}function B(e){e.preventDefault()}function K(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return t.some(function(t){return!M(e)&&t&&t.apply(void 0,[e].concat(r)),M(e)})}}function _(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function U(e){return/^.*\.[\w]+$/.test(e)}var $=["children"],W=["open"],G=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],H=["refKey","onChange","onClick"];function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var i=[],a=!0,c=!1;try{for(o=o.call(e);!(a=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return i}}(e,t)||N(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Z(e,t)}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function V(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var X=(0,r.forwardRef)(function(e,t){var n=e.children,i=en(V(e,$)),a=i.open,c=V(i,W);return(0,r.useImperativeHandle)(t,function(){return{open:a}},[a]),o().createElement(r.Fragment,null,n(J(J({},c),{},{open:a})))});X.displayName="Dropzone";var ee={disabled:!1,getFilesFromEvent:function(e){return c(this,void 0,void 0,function(){return u(this,function(t){return v(e)&&v(e.dataTransfer)?[2,function(e,t){return c(this,void 0,void 0,function(){var n;return u(this,function(r){switch(r.label){case 0:if(!e.items)return[3,2];if(n=g(e.items).filter(function(e){return"file"===e.kind}),"drop"!==t)return[2,n];return[4,Promise.all(n.map(y))];case 1:return[2,m(function e(t){return t.reduce(function(t,n){return s(s([],l(t),!1),l(Array.isArray(n)?e(n):[n]),!1)},[])}(r.sent()))];case 2:return[2,m(g(e.files).map(function(e){return p(e)}))]}})})}(e.dataTransfer,e.type)]:v(e)&&v(e.target)?[2,g(e.target.files).map(function(e){return p(e)})]:Array.isArray(e)&&e.every(function(e){return"getFile"in e&&"function"==typeof e.getFile})?[2,function(e){return c(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(e){return e.getFile()}))];case 1:return[2,t.sent().map(function(e){return p(e)})]}})})}(e)]:[2,[]]})})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};X.defaultProps=ee,X.propTypes={children:a().func,accept:a().objectOf(a().arrayOf(a().string)),multiple:a().bool,preventDropOnDocument:a().bool,noClick:a().bool,noKeyboard:a().bool,noDrag:a().bool,noDragEventsBubbling:a().bool,minSize:a().number,maxSize:a().number,maxFiles:a().number,disabled:a().bool,getFilesFromEvent:a().func,onFileDialogCancel:a().func,onFileDialogOpen:a().func,useFsAccessApi:a().bool,autoFocus:a().bool,onDragEnter:a().func,onDragLeave:a().func,onDragOver:a().func,onDrop:a().func,onDropAccepted:a().func,onDropRejected:a().func,onError:a().func,validator:a().func};var et={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function en(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=J(J({},ee),e),n=t.accept,o=t.disabled,i=t.getFilesFromEvent,a=t.maxSize,c=t.minSize,u=t.multiple,l=t.maxFiles,s=t.onDragEnter,f=t.onDragLeave,p=t.onDragOver,d=t.onDrop,v=t.onDropAccepted,m=t.onDropRejected,g=t.onFileDialogCancel,y=t.onFileDialogOpen,b=t.useFsAccessApi,h=t.autoFocus,D=t.preventDropOnDocument,w=t.noClick,O=t.noKeyboard,F=t.noDrag,k=t.noDragEventsBubbling,S=t.onError,P=t.validator,C=(0,r.useMemo)(function(){return function(e){if(T(e))return Object.entries(e).reduce(function(e,t){var n=E(t,2),r=n[0],o=n[1];return[].concat(x(e),[r],x(o))},[]).filter(function(e){return _(e)||U(e)}).join(",")}(n)},[n]),$=(0,r.useMemo)(function(){return T(n)?[{description:"Files",accept:Object.entries(n).filter(function(e){var t=E(e,2),n=t[0],r=t[1],o=!0;return _(n)||(console.warn('Skipped "'.concat(n,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),o=!1),Array.isArray(r)&&r.every(U)||(console.warn('Skipped "'.concat(n,'" because an invalid file extension was provided.')),o=!1),o}).reduce(function(e,t){var n=E(t,2),r=n[0],o=n[1];return j(j({},e),{},A({},r,o))},{})}]:n},[n]),W=(0,r.useMemo)(function(){return"function"==typeof y?y:eo},[y]),Y=(0,r.useMemo)(function(){return"function"==typeof g?g:eo},[g]),X=(0,r.useRef)(null),en=(0,r.useRef)(null),ei=q((0,r.useReducer)(er,et),2),ea=ei[0],ec=ei[1],eu=ea.isFocused,el=ea.isFileDialogActive,es=(0,r.useRef)(!1),ef=function(){!es.current&&el&&setTimeout(function(){en.current&&!en.current.files.length&&(ec({type:"closeDialog"}),Y())},300)};(0,r.useEffect)(function(){return window.addEventListener("focus",ef,!1),function(){window.removeEventListener("focus",ef,!1)}},[en,el,Y,es]);var ep=(0,r.useRef)([]),ed=function(e){X.current&&X.current.contains(e.target)||(e.preventDefault(),ep.current=[])};(0,r.useEffect)(function(){return D&&(document.addEventListener("dragover",B,!1),document.addEventListener("drop",ed,!1)),function(){D&&(document.removeEventListener("dragover",B),document.removeEventListener("drop",ed))}},[X,D]),(0,r.useEffect)(function(){return!o&&h&&X.current&&X.current.focus(),function(){}},[X,h,o]);var ev=(0,r.useCallback)(function(e){S?S(e):console.error(e)},[S]),em=(0,r.useCallback)(function(e){var t;e.preventDefault(),e.persist(),ek(e),ep.current=[].concat(function(e){if(Array.isArray(e))return Z(e)}(t=ep.current)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||N(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[e.target]),L(e)&&Promise.resolve(i(e)).then(function(t){if(!M(e)||k){var n,r,o,i,f,p,d,v,m=t.length,g=m>0&&(r=(n={files:t,accept:C,minSize:c,maxSize:a,multiple:u,maxFiles:l,validator:P}).files,o=n.accept,i=n.minSize,f=n.maxSize,p=n.multiple,d=n.maxFiles,v=n.validator,(!!p||!(r.length>1))&&(!p||!(d>=1)||!(r.length>d))&&r.every(function(e){var t=E(R(e,o),1)[0],n=E(I(e,i,f),1)[0],r=v?v(e):null;return t&&n&&!r}));ec({isDragAccept:g,isDragReject:m>0&&!g,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}}).catch(function(e){return ev(e)})},[i,s,ev,k,C,c,a,u,l,P]),eg=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e);var t=L(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1},[p,k]),ey=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e);var t=ep.current.filter(function(e){return X.current&&X.current.contains(e)}),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),ep.current=t,!(t.length>0)&&(ec({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),L(e)&&f&&f(e))},[X,f,k]),eb=(0,r.useCallback)(function(e,t){var n=[],r=[];e.forEach(function(e){var t=q(R(e,C),2),o=t[0],i=t[1],u=q(I(e,c,a),2),l=u[0],s=u[1],f=P?P(e):null;if(o&&l&&!f)n.push(e);else{var p=[i,s];f&&(p=p.concat(f)),r.push({file:e,errors:p.filter(function(e){return e})})}}),(!u&&n.length>1||u&&l>=1&&n.length>l)&&(n.forEach(function(e){r.push({file:e,errors:[z]})}),n.splice(0)),ec({acceptedFiles:n,fileRejections:r,type:"setFiles"}),d&&d(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&v&&v(n,t)},[ec,u,C,c,a,l,d,v,m,P]),eh=(0,r.useCallback)(function(e){e.preventDefault(),e.persist(),ek(e),ep.current=[],L(e)&&Promise.resolve(i(e)).then(function(t){(!M(e)||k)&&eb(t,e)}).catch(function(e){return ev(e)}),ec({type:"reset"})},[i,eb,ev,k]),eD=(0,r.useCallback)(function(){if(es.current){ec({type:"openDialog"}),W(),window.showOpenFilePicker({multiple:u,types:$}).then(function(e){return i(e)}).then(function(e){eb(e,null),ec({type:"closeDialog"})}).catch(function(e){e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)?(Y(e),ec({type:"closeDialog"})):e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)?(es.current=!1,en.current?(en.current.value=null,en.current.click()):ev(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ev(e)});return}en.current&&(ec({type:"openDialog"}),W(),en.current.value=null,en.current.click())},[ec,W,Y,b,eb,ev,$,u]),ew=(0,r.useCallback)(function(e){X.current&&X.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),eD())},[X,eD]),ex=(0,r.useCallback)(function(){ec({type:"focus"})},[]),eO=(0,r.useCallback)(function(){ec({type:"blur"})},[]),ej=(0,r.useCallback)(function(){w||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/")}()?setTimeout(eD,0):eD())},[w,eD]),eA=function(e){return o?null:e},eE=function(e){return O?null:eA(e)},eF=function(e){return F?null:eA(e)},ek=function(e){k&&e.stopPropagation()},eS=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.role,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,c=e.onClick,u=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=V(e,G);return J(J(Q({onKeyDown:eE(K(r,ew)),onFocus:eE(K(i,ex)),onBlur:eE(K(a,eO)),onClick:eA(K(c,ej)),onDragEnter:eF(K(u,em)),onDragOver:eF(K(l,eg)),onDragLeave:eF(K(s,ey)),onDrop:eF(K(f,eh)),role:"string"==typeof n&&""!==n?n:"presentation"},void 0===t?"ref":t,X),o||O?{}:{tabIndex:0}),p)}},[X,ew,ex,eO,ej,em,eg,ey,eh,O,F,o]),eP=(0,r.useCallback)(function(e){e.stopPropagation()},[]),eC=(0,r.useMemo)(function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=e.onChange,r=e.onClick,o=V(e,H);return J(J({},Q({accept:C,multiple:u,type:"file",style:{display:"none"},onChange:eA(K(n,eh)),onClick:eA(K(r,eP)),tabIndex:-1},void 0===t?"ref":t,en)),o)}},[en,n,u,eh,o]);return J(J({},ea),{},{isFocused:eu&&!o,getRootProps:eS,getInputProps:eC,rootRef:X,inputRef:en,open:eA(eD)})}function er(e,t){switch(t.type){case"focus":return J(J({},e),{},{isFocused:!0});case"blur":return J(J({},e),{},{isFocused:!1});case"openDialog":return J(J({},et),{},{isFileDialogActive:!0});case"closeDialog":return J(J({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return J(J({},e),{},{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return J(J({},e),{},{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return J({},et);default:return e}}function eo(){}}};
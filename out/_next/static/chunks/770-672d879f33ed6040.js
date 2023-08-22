"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[770],{1245:function(e,t,n){n.d(t,{bd:function(){return v},Xe:function(){return x},bU:function(){return b},qb:function(){return y}});var r=n(6006),o=n(4436);class i{getStringForLocale(e,t){let n=this.strings[t];n||(n=function(e,t,n="en-US"){if(t[e])return t[e];let r=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[r])return t[r];for(let e in t)if(e.startsWith(r+"-"))return t[e];return t[n]}(t,this.strings,this.defaultLocale),this.strings[t]=n);let r=n[e];if(!r)throw Error(`Could not find intl message ${e} in ${t} locale`);return r}constructor(e,t="en-US"){this.strings={...e},this.defaultLocale=t}}let l=new Map,s=new Map;class a{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return"function"==typeof n?n(t,this):n}plural(e,t,n="cardinal"){let r=t["="+e];if(r)return"function"==typeof r?r():r;let o=this.locale+":"+n,i=l.get(o);return i||(i=new Intl.PluralRules(this.locale,{type:n}),l.set(o,i)),"function"==typeof(r=t[i.select(e)]||t.other)?r():r}number(e){let t=s.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),s.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return"function"==typeof n?n():n}constructor(e,t){this.locale=e,this.strings=t}}let u=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),c=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function d(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script;return u.has(t)}let t=e.split("-")[0];return c.has(t)}function f(){let e="undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:d(e)?"rtl":"ltr"}}let p=f(),m=new Set;function h(){for(let e of(p=f(),m))e(p)}function g(){let e=(0,o.Av)(),[t,n]=(0,r.useState)(p);return((0,r.useEffect)(()=>(0===m.size&&window.addEventListener("languagechange",h),m.add(n),()=>{m.delete(n),0===m.size&&window.removeEventListener("languagechange",h)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}let w=r.createContext(null);function v(e){let{locale:t,children:n}=e,o=g(),i=t?{locale:t,direction:d(t)?"rtl":"ltr"}:o;return r.createElement(w.Provider,{value:i},n)}function b(){let e=g();return(0,r.useContext)(w)||e}let E=new WeakMap;function y(e){let{locale:t}=b(),n=(0,r.useMemo)(()=>{let t;return(t=E.get(e))||(t=new i(e),E.set(e,t)),t},[e]);return(0,r.useMemo)(()=>new a(t,n),[t,n])}let L=new Map;function x(e){let{locale:t}=b(),n=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(L.has(n))return L.get(n);let r=new Intl.Collator(t,e);return L.set(n,r),r}},9770:function(e,t,n){n.d(t,{U4:function(){return W},aV:function(){return j},N3:function(){return H},RP:function(){return U},Ir:function(){return N},Bq:function(){return K},tN:function(){return I},IB:function(){return k}});var r=n(6006),o=n(7562),i=n(596),l=n(1245),s=n(1154),a=n(9755),u=n(8431),c=n(4436);let d={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function f(e){let{children:t,elementType:n="div",isFocusable:o,style:l,...s}=e,{visuallyHiddenProps:u}=function(e={}){let{style:t,isFocusable:n}=e,[o,i]=(0,r.useState)(!1),{focusWithinProps:l}=(0,a.L_)({isDisabled:!n,onFocusWithinChange:e=>i(e)}),s=(0,r.useMemo)(()=>o?t:t?{...d,...t}:d,[o]);return{visuallyHiddenProps:{...l,style:s}}}(e);return r.createElement(n,(0,i.dG)(s,u),t)}let p={top:"top",bottom:"top",left:"left",right:"left"},m={top:"bottom",bottom:"top",left:"right",right:"left"},h={top:"left",left:"top"},g={top:"height",left:"width"},w={width:"totalWidth",height:"totalHeight"},v={},b="undefined"!=typeof document&&window.visualViewport;function E(e,t,n,r,o){let i=r.scroll[e],l=r[g[e]],s=t-o-i,a=t+o-i+n;return s<0?-s:a>l?Math.max(l-a,-s):0}function y(e){if(v[e])return v[e];let[t,n]=e.split(" "),r=p[t]||"right",o=h[r];p[n]||(n="center");let i=g[r],l=g[o];return v[e]={placement:t,crossPlacement:n,axis:r,crossAxis:o,size:i,crossSize:l},v[e]}function L(e,t,n,r,i,l,s,a,u,c){let{placement:d,crossPlacement:f,axis:p,crossAxis:h,size:g,crossSize:v}=r,b={};b[h]=e[h],"center"===f?b[h]+=(e[v]-n[v])/2:f!==h&&(b[h]+=e[v]-n[v]),b[h]+=l;let E=e[h]-n[v]+u+c,y=e[h]+e[v]-u-c;if(b[h]=(0,o.uZ)(b[h],E,y),d===p){let n=a?s[g]:t[w[g]];b[m[p]]=Math.floor(n-e[p]+i)}else b[p]=Math.floor(e[p]+e[g]+i);return b}function x(e,t,n,r,o,i){let{placement:l,axis:s,size:a}=i;return l===s?Math.max(0,n[s]-e[s]-e.scroll[s]+t[s]-r[s]-r[m[s]]-o):Math.max(0,e[a]+e[s]+e.scroll[s]-t[s]-n[s]-n[a]-r[s]-r[m[s]]-o)}function S(e){let{top:t,left:n,width:r,height:o}=e.getBoundingClientRect(),{scrollTop:i,scrollLeft:l,clientTop:s,clientLeft:a}=document.documentElement;return{top:t+i-s,left:n+l-a,width:r,height:o}}function C(e,t){let n,r=window.getComputedStyle(e);if("fixed"===r.position){let{top:t,left:r,width:o,height:i}=e.getBoundingClientRect();n={top:t,left:r,width:o,height:i}}else{n=S(e);let r=S(t),o=window.getComputedStyle(t);r.top+=(parseInt(o.borderTopWidth,10)||0)-t.scrollTop,r.left+=(parseInt(o.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=r.top,n.left-=r.left}return n.top-=parseInt(r.marginTop,10)||0,n.left-=parseInt(r.marginLeft,10)||0,n}function T(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}let P=new WeakMap,O="undefined"!=typeof document&&window.visualViewport;function I(e){let{direction:t}=(0,l.bU)(),{arrowSize:n=0,targetRef:s,overlayRef:a,scrollRef:u=a,placement:c="bottom",containerPadding:d=12,shouldFlip:f=!0,boundaryElement:p="undefined"!=typeof document?document.body:null,offset:h=0,crossOffset:g=0,shouldUpdatePosition:w=!0,isOpen:v=!0,onClose:I,maxHeight:M,arrowBoundaryOffset:N=0}=e,[k,R]=(0,r.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),F=[w,c,a.current,s.current,u.current,d,f,p,h,g,v,t,M,N,n],z=(0,r.useCallback)(()=>{if(!1===w||!v||!a.current||!s.current||!u.current||!p)return;let e=function(e){let t,{placement:n,targetNode:r,overlayNode:i,scrollNode:l,padding:s,shouldFlip:a,boundaryElement:u,offset:c,crossOffset:d,maxHeight:f,arrowSize:p=0,arrowBoundaryOffset:h=0}=e,g=i instanceof HTMLElement?function(e){let t=e.offsetParent;if(t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!T(t)&&(t=document.documentElement),null==t)for(t=e.parentElement;t&&!T(t);)t=t.parentElement;return t||document.documentElement}(i):document.documentElement,w=g===document.documentElement,v=window.getComputedStyle(g).position,P=w?S(r):C(r,g);if(!w){let{marginTop:e,marginLeft:t}=window.getComputedStyle(r);P.top+=parseInt(e,10)||0,P.left+=parseInt(t,10)||0}let O=S(i),I={top:parseInt((t=window.getComputedStyle(i)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};return O.width+=I.left+I.right,O.height+=I.top+I.bottom,function(e,t,n,r,i,l,s,a,u,c,d,f,p,h,g){var w;let v=y(e),{size:b,crossAxis:S,crossSize:C,placement:T,crossPlacement:P}=v,O=L(t,a,n,v,c,d,u,f,h,g),I=c,M=x(a,u,t,i,l+c,v);if(s&&r[b]>M){let e=y(`${m[T]} ${P}`),r=L(t,a,n,e,c,d,u,f,h,g);x(a,u,t,i,l+c,e)>M&&(v=e,O=r,I=c)}let N=E(S,O[S],n[C],a,l);O[S]+=N;let k=null!=(w=O).top?Math.max(0,a.height+a.top+a.scroll.top-(u.top+w.top)-(i.top+i.bottom+l)):Math.max(0,t.top+u.top-(a.top+a.scroll.top)-(i.top+i.bottom+l));p&&p<k&&(k=p),n.height=Math.min(n.height,k),N=E(S,(O=L(t,a,n,v,I,d,u,f,h,g))[S],n[C],a,l),O[S]+=N;let R={},F=t[S]+.5*t[C]-n[S],z=h/2+g,H=n[C]-h/2-g,A=t[S]-n[S]+h/2,W=t[S]+t[C]-n[S]-h/2,D=(0,o.uZ)(F,A,W);return R[S]=(0,o.uZ)(D,z,H),{position:O,maxHeight:k,arrowOffsetLeft:R.left,arrowOffsetTop:R.top,placement:v.placement}}(n,P,O,{top:l.scrollTop,left:l.scrollLeft,width:l.scrollWidth,height:l.scrollHeight},I,s,a,function(e){let t=0,n=0,r=0,o=0,i=0,l=0,s={};if("BODY"===e.tagName){var a,u;let i=document.documentElement;r=i.clientWidth,o=i.clientHeight,t=null!==(a=null==b?void 0:b.width)&&void 0!==a?a:r,n=null!==(u=null==b?void 0:b.height)&&void 0!==u?u:o,s.top=i.scrollTop||e.scrollTop,s.left=i.scrollLeft||e.scrollLeft}else({width:t,height:n,top:i,left:l}=S(e)),s.top=e.scrollTop,s.left=e.scrollLeft,r=t,o=n;return{width:t,height:n,totalWidth:r,totalHeight:o,scroll:s,top:i,left:l}}(u),"BODY"===u.tagName?S(g):C(g,u),c,d,!!v&&"static"!==v,f,p,h)}({placement:"rtl"===t?c.replace("start","right").replace("end","left"):c.replace("start","left").replace("end","right"),overlayNode:a.current,targetNode:s.current,scrollNode:u.current,padding:d,shouldFlip:f,boundaryElement:p,offset:h,crossOffset:g,maxHeight:M,arrowSize:n,arrowBoundaryOffset:N});Object.keys(e.position).forEach(t=>a.current.style[t]=e.position[t]+"px"),a.current.style.maxHeight=null!=e.maxHeight?e.maxHeight+"px":void 0,R(e)},F);(0,i.bt)(z,F),(0,i.bt)(()=>(window.addEventListener("resize",z,!1),()=>{window.removeEventListener("resize",z,!1)}),[z]),(0,i.yU)({ref:a,onResize:z});let H=(0,r.useRef)(!1);(0,i.bt)(()=>{let e;let t=()=>{H.current=!0,clearTimeout(e),e=setTimeout(()=>{H.current=!1},500),z()};return null==O||O.addEventListener("resize",t),null==O||O.addEventListener("scroll",t),()=>{null==O||O.removeEventListener("resize",t),null==O||O.removeEventListener("scroll",t)}},[z]);let A=(0,r.useCallback)(()=>{H.current||I()},[I,H]);return function(e){let{triggerRef:t,isOpen:n,onClose:o}=e;(0,r.useEffect)(()=>{if(!n||null===o)return;let e=e=>{let n=e.target;if(!t.current||n instanceof Node&&!n.contains(t.current))return;let r=o||P.get(t.current);r&&r()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[n,o,t])}({triggerRef:s,isOpen:v,onClose:I&&A}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...k.position,maxHeight:k.maxHeight}},placement:k.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:k.arrowOffsetLeft,top:k.arrowOffsetTop}},updatePosition:z}}let M=[];function N(e,t){let{onClose:n,shouldCloseOnBlur:o,isOpen:i,isDismissable:l=!1,isKeyboardDismissDisabled:u=!1,shouldCloseOnInteractOutside:c}=e;(0,r.useEffect)(()=>(i&&M.push(t),()=>{let e=M.indexOf(t);e>=0&&M.splice(e,1)}),[i,t]);let d=()=>{M[M.length-1]===t&&n&&n()};(0,a.Fc)({ref:t,onInteractOutside:l?e=>{(!c||c(e.target))&&(M[M.length-1]===t&&(e.stopPropagation(),e.preventDefault()),d())}:null,onInteractOutsideStart:e=>{(!c||c(e.target))&&M[M.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:f}=(0,a.L_)({isDisabled:!o,onBlurWithin:e=>{!(e.relatedTarget&&(0,s.cW)(e.relatedTarget))&&(!c||c(e.relatedTarget))&&n()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||u||(e.stopPropagation(),e.preventDefault(),d())},...f},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}function k(e,t,n){let o,{type:l}=e,{isOpen:s}=t;(0,r.useEffect)(()=>{n&&n.current&&P.set(n.current,t.close)}),"menu"===l?o=!0:"listbox"===l&&(o="listbox");let a=(0,i.Me)();return{triggerProps:{"aria-haspopup":o,"aria-expanded":s,"aria-controls":s?a:null,onPress:t.toggle},overlayProps:{id:a}}}"undefined"!=typeof document&&window.visualViewport;let R=r.createContext(null);function F(e){let{children:t}=e,n=(0,r.useContext)(R),[o,i]=(0,r.useState)(0),l=(0,r.useMemo)(()=>({parent:n,modalCount:o,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,o]);return r.createElement(R.Provider,{value:l},t)}function z(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,r.useContext)(R))&&t.modalCount>0||null}};return r.createElement("div",{"data-overlay-container":!0,...e,...n})}function H(e){return r.createElement(F,null,r.createElement(z,e))}var A={};function W(e){var t;let{onDismiss:n,...o}=e,s=(0,l.qb)((t=A)&&t.__esModule?t.default:t),a=(0,i.bE)(o,s.format("dismiss"));return r.createElement(f,null,r.createElement("button",{...a,tabIndex:-1,onClick:()=>{n&&n()}}))}A={"ar-AE":{dismiss:`تجاهل`},"bg-BG":{dismiss:`Отхвърляне`},"cs-CZ":{dismiss:"Odstranit"},"da-DK":{dismiss:"Luk"},"de-DE":{dismiss:`Schlie\xdfen`},"el-GR":{dismiss:`Απόρριψη`},"en-US":{dismiss:"Dismiss"},"es-ES":{dismiss:"Descartar"},"et-EE":{dismiss:`L\xf5peta`},"fi-FI":{dismiss:`Hylk\xe4\xe4`},"fr-FR":{dismiss:"Rejeter"},"he-IL":{dismiss:`התעלם`},"hr-HR":{dismiss:"Odbaci"},"hu-HU":{dismiss:`Elutas\xedt\xe1s`},"it-IT":{dismiss:"Ignora"},"ja-JP":{dismiss:`閉じる`},"ko-KR":{dismiss:`무시`},"lt-LT":{dismiss:"Atmesti"},"lv-LV":{dismiss:`Nerādīt`},"nb-NO":{dismiss:"Lukk"},"nl-NL":{dismiss:"Negeren"},"pl-PL":{dismiss:"Zignoruj"},"pt-BR":{dismiss:"Descartar"},"pt-PT":{dismiss:"Dispensar"},"ro-RO":{dismiss:"Revocare"},"ru-RU":{dismiss:`Пропустить`},"sk-SK":{dismiss:`Zrušiť`},"sl-SI":{dismiss:"Opusti"},"sr-SP":{dismiss:"Odbaci"},"sv-SE":{dismiss:"Avvisa"},"tr-TR":{dismiss:"Kapat"},"uk-UA":{dismiss:`Скасувати`},"zh-CN":{dismiss:`取消`},"zh-TW":{dismiss:`關閉`}};let D=new WeakMap,B=[];function U(e,t=document.body){let n=new Set(e),r=new Set,o=e=>{for(let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))n.add(t);let t=e=>{if(n.has(e)||r.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),l=t(e);if(l===NodeFilter.FILTER_ACCEPT&&i(e),l!==NodeFilter.FILTER_REJECT){let e=o.nextNode();for(;null!=e;)i(e),e=o.nextNode()}},i=e=>{var t;let n=null!==(t=D.get(e))&&void 0!==t?t:0;("true"!==e.getAttribute("aria-hidden")||0!==n)&&(0===n&&e.setAttribute("aria-hidden","true"),r.add(e),D.set(e,n+1))};B.length&&B[B.length-1].disconnect(),o(t);let l=new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...n,...r].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?n.add(e):e instanceof Element&&o(e)}});l.observe(t,{childList:!0,subtree:!0});let s={observe(){l.observe(t,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return B.push(s),()=>{for(let e of(l.disconnect(),r)){let t=D.get(e);1===t?(e.removeAttribute("aria-hidden"),D.delete(e)):D.set(e,t-1)}s===B[B.length-1]?(B.pop(),B.length&&B[B.length-1].observe()):B.splice(B.indexOf(s),1)}}let _=r.createContext(null);function j(e){let t,n=(0,c.Av)(),{portalContainer:o=n?null:document.body,isExiting:i}=e,[l,a]=(0,r.useState)(!1),d=(0,r.useMemo)(()=>({contain:l,setContain:a}),[l,a]);return o?(t=e.disableFocusManagement?r.createElement(_.Provider,{value:d},e.children):r.createElement(_.Provider,{value:d},r.createElement(s.MT,{restoreFocus:!0,contain:l&&!i},e.children)),u.createPortal(t,o)):null}function K(){let e=(0,r.useContext)(_),t=null==e?void 0:e.setContain;(0,i.bt)(()=>{null==t||t(!0)},[t])}},7562:function(e,t,n){n.d(t,{uZ:function(){return i},zk:function(){return o}});var r=n(6006);function o(e,t,n){let[o,i]=(0,r.useState)(e||t),l=(0,r.useRef)(void 0!==e),s=void 0!==e;(0,r.useEffect)(()=>{let e=l.current;e!==s&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`),l.current=s},[s]);let a=s?e:o,u=(0,r.useCallback)((e,...t)=>{let r=(e,...t)=>{n&&!Object.is(a,e)&&n(e,...t),s||(a=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((n,...o)=>{let i=e(s?a:n,...o);return(r(i,...t),s)?n:i})):(s||i(e),r(e,...t))},[s,a,n]);return[a,u]}function i(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}}}]);
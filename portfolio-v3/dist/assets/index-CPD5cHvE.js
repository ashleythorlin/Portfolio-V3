import{a as St,r as M,j as s,P as h,R as an,c as Nt}from"./r3f-DFCVIf9P.js";import{V as jt,S as Pt}from"./shader-DaVZeEfF.js";import"./three-EpRQ9iTo.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const je=St(e=>({activeSection:0,setActiveSection:n=>e({activeSection:n})})),Et=["#a2c96e","#6bc99f","#4f889b","#4f6b89","#4f4d76","#6d4976","#54385b"],bn=[{type:"waterPlane",color1:"#a2c96e",color2:"#2b1c2e",color3:"#1a3a1a",uSpeed:.12,uStrength:1.5,cAzimuthAngle:180,cPolarAngle:90,cDistance:3.5},{type:"waterPlane",color1:"#6bc99f",color2:"#2b1c2e",color3:"#0d2e25",uSpeed:.1,uStrength:1.2,cAzimuthAngle:190,cPolarAngle:85,cDistance:3.5},{type:"waterPlane",color1:"#4f889b",color2:"#2b1c2e",color3:"#0d1f2e",uSpeed:.1,uStrength:1,cAzimuthAngle:200,cPolarAngle:80,cDistance:4},{type:"plane",color1:"#4f6b89",color2:"#2b1c2e",color3:"#101828",uSpeed:.08,uStrength:.8,cAzimuthAngle:210,cPolarAngle:75,cDistance:4},{type:"plane",color1:"#4f4d76",color2:"#2b1c2e",color3:"#150d2e",uSpeed:.08,uStrength:.8,cAzimuthAngle:200,cPolarAngle:80,cDistance:4},{type:"plane",color1:"#6d4976",color2:"#2b1c2e",color3:"#1e0d28",uSpeed:.1,uStrength:1,cAzimuthAngle:190,cPolarAngle:85,cDistance:3.5},{type:"sphere",color1:"#54385b",color2:"#2b1c2e",color3:"#180e1f",uSpeed:.15,uStrength:1.5,cAzimuthAngle:180,cPolarAngle:90,cDistance:3}];function Ct(){const e=je(t=>t.activeSection),n=M.useMemo(()=>bn[e]??bn[0],[e]);return s.jsx(jt,{style:{position:"fixed",inset:0,zIndex:0,width:"100%",height:"100%"},pixelDensity:1,pointerEvents:"none",children:s.jsx(Pt,{control:"props",type:n.type,animate:"on",uSpeed:n.uSpeed,uStrength:n.uStrength,color1:n.color1,color2:n.color2,color3:n.color3,cAzimuthAngle:n.cAzimuthAngle,cPolarAngle:n.cPolarAngle,cDistance:n.cDistance,grain:"on",grainBlending:.4,enableTransition:!0})})}const It=[{id:"homeNav",label:"home",href:"#home-container",icon:s.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M4,12 l8,-8 l8,8"}),s.jsx("path",{d:"M7,9 v10 h10 v-10"}),s.jsx("path",{d:"M10,19 v-6 h4 v6"})]})},{id:"aboutNav",label:"about me",href:"#about-me-container",icon:s.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M4,4 v12 h16 v -12 z"}),s.jsx("path",{d:"M17,13 v-6 h-10 v6 z"}),s.jsx("path",{d:"M12,16 v4"}),s.jsx("path",{d:"M6,20 h12"})]})},{id:"experienceNav",label:"experience",href:"#experience-container",icon:s.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M8,8 v-4 h8 v4"}),s.jsx("path",{d:"M4,18 v-10 h16 v10z"}),s.jsx("path",{d:"M20,12 h-16"}),s.jsx("path",{d:"M10,12 v2 h4 v-2"})]})},{id:"skillsNav",label:"skills",href:"#skills-container",icon:s.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M3.4,11.9l8.8,4.4l8.4-4.4"}),s.jsx("path",{d:"M3.4,16.2l8.8,4.5l8.4-4.5"}),s.jsx("path",{d:"M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z"})]})},{id:"projectsNav",label:"projects",href:"#projects-container",icon:s.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M7,8 l-4,4 l4,4"}),s.jsx("path",{d:"M17,8  l4,4 l-4,4"}),s.jsx("path",{d:"M10,19 l4,-14"})]})},{id:"educationNav",label:"education",href:"#education-container",icon:s.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M4,7.5 l8,-3.5 l8,3.5 l-8,3.5 l-8,-3.5"}),s.jsx("path",{d:"M8,9 l-1.5,8 c0,0,0,2,6,2 c0,0,4,0,6,-2 l-1.5,-8"})]})},{id:"contactNav",label:"contact",href:"#contact-container",icon:s.jsxs("svg",{className:"nav-icon",viewBox:"0 0 24 24","aria-hidden":"true",children:[s.jsx("path",{d:"M6.7,4.8 h10.7 c0.3,0,0.6,0.2,0.7,0.5 l2.8,7.3 c0,0.1,0,0.2,0,0.3 v5.6 c0,0.4-0.4,0.8-0.8,0.8 H3.8 C3.4,19.3,3,19,3,18.5 v-5.6 c0-0.1,0-0.2,0.1-0.3 L6,5.3C6.1,5,6.4,4.8,6.7,4.8z"}),s.jsx("path",{d:"M3.4,12.9 H8 l1.6,2.8 h4.9 l1.5-2.8 h4.6"})]})}];function Tt(){const e=je(t=>t.activeSection),n=je(t=>t.setActiveSection);return s.jsx("nav",{className:"nav-pill",role:"navigation","aria-label":"Main navigation",children:It.map((t,a)=>{const r=e===a,i=Et[a],o=s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"nav-item-icon",style:{color:r?i:void 0},children:t.icon}),s.jsx("span",{className:`nav-item-label${r?" visible":""}`,children:t.label})]}),l=()=>{var c;n(a),(c=document.getElementById(`section-${a}`))==null||c.scrollIntoView({behavior:"smooth"})};return s.jsx("button",{className:`nav-item${r?" active":""}`,"aria-label":t.label,"aria-current":r?"page":void 0,onClick:l,style:r?{"--nav-accent":i}:void 0,children:o},t.id)})})}const Mt="ashley thorlin",_t="software engineer",Lt="TODO: Replace with your about me paragraph.",Ue={name:Mt,title:_t,about:Lt},zt=[{company:"TODO: Company Name",role:"TODO: Role Title",dates:"TODO: Month Year – Month Year",location:"TODO: City, State",bullets:["TODO: Achievement or responsibility","TODO: Achievement or responsibility"]}],Dt=[{name:"Python",desc:["TODO: context or project","TODO: context or project"]}],Rt=[{name:"AWS",desc:["TODO: context or project"]},{name:"Docker",desc:["TODO: context or project"]}],yn={languages:Dt,technologies:Rt},Ft=[{name:"TODO: Project Name",desc:["TODO: Short description","TODO: Technologies used"],link:"https://github.com/ashleythorlin"}],$t=[{name:"TODO: University Name",degree:"TODO: B.S. Computer Science",dates:"TODO: 2019 – 2023",gpa:"TODO: 3.X / 4.0"}],Yt=["TODO: Data Structures","TODO: Algorithms","TODO: Operating Systems"],Ut=[{name:"TODO: Club Name",role:"TODO: Role",dates:"TODO: 2020 – 2023"}],Ht={schools:$t,coursework:Yt,organizations:Ut};function xn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?xn(Object(t),!0).forEach(function(a){S(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):xn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Pe(e){"@babel/helpers - typeof";return Pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Pe(e)}function Wt(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Vt(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Bt(e,n,t){return n&&Vt(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function rn(e,n){return Xt(e)||Kt(e,n)||Gn(e,n)||Jt()}function de(e){return Gt(e)||qt(e)||Gn(e)||Qt()}function Gt(e){if(Array.isArray(e))return He(e)}function Xt(e){if(Array.isArray(e))return e}function qt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Kt(e,n){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var a=[],r=!0,i=!1,o,l;try{for(t=t.call(e);!(r=(o=t.next()).done)&&(a.push(o.value),!(n&&a.length===n));r=!0);}catch(c){i=!0,l=c}finally{try{!r&&t.return!=null&&t.return()}finally{if(i)throw l}}return a}}function Gn(e,n){if(e){if(typeof e=="string")return He(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return He(e,n)}}function He(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Qt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kn=function(){},on={},Xn={},qn=null,Kn={mark:kn,measure:kn};try{typeof window<"u"&&(on=window),typeof document<"u"&&(Xn=document),typeof MutationObserver<"u"&&(qn=MutationObserver),typeof performance<"u"&&(Kn=performance)}catch{}var Zt=on.navigator||{},wn=Zt.userAgent,An=wn===void 0?"":wn,Y=on,y=Xn,On=qn,he=Kn;Y.document;var D=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Qn=~An.indexOf("MSIE")||~An.indexOf("Trident/"),ge,be,ye,xe,ke,_="___FONT_AWESOME___",We=16,Jn="fa",Zn="svg-inline--fa",X="data-fa-i2svg",Ve="data-fa-pseudo-element",ea="data-fa-pseudo-element-pending",sn="data-prefix",ln="data-icon",Sn="fontawesome-i2svg",na="async",ta=["HTML","HEAD","STYLE","SCRIPT"],et=function(){try{return!0}catch{return!1}}(),b="classic",x="sharp",cn=[b,x];function ve(e){return new Proxy(e,{get:function(t,a){return a in t?t[a]:t[b]}})}var le=ve((ge={},S(ge,b,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),S(ge,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ge)),ce=ve((be={},S(be,b,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(be,x,{solid:"fass",regular:"fasr",light:"fasl"}),be)),fe=ve((ye={},S(ye,b,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(ye,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ye)),aa=ve((xe={},S(xe,b,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(xe,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xe)),ra=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,nt="fa-layers-text",ia=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,oa=ve((ke={},S(ke,b,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(ke,x,{900:"fass",400:"fasr",300:"fasl"}),ke)),tt=[1,2,3,4,5,6,7,8,9,10],sa=tt.concat([11,12,13,14,15,16,17,18,19,20]),la=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ue=new Set;Object.keys(ce[b]).map(ue.add.bind(ue));Object.keys(ce[x]).map(ue.add.bind(ue));var ca=[].concat(cn,de(ue),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(tt.map(function(e){return"".concat(e,"x")})).concat(sa.map(function(e){return"w-".concat(e)})),oe=Y.FontAwesomeConfig||{};function fa(e){var n=y.querySelector("script["+e+"]");if(n)return n.getAttribute(e)}function ua(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(y&&typeof y.querySelector=="function"){var ma=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ma.forEach(function(e){var n=rn(e,2),t=n[0],a=n[1],r=ua(fa(t));r!=null&&(oe[a]=r)})}var at={styleDefault:"solid",familyDefault:"classic",cssPrefix:Jn,replacementClass:Zn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};oe.familyPrefix&&(oe.cssPrefix=oe.familyPrefix);var te=m(m({},at),oe);te.autoReplaceSvg||(te.observeMutations=!1);var v={};Object.keys(at).forEach(function(e){Object.defineProperty(v,e,{enumerable:!0,set:function(t){te[e]=t,se.forEach(function(a){return a(v)})},get:function(){return te[e]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(n){te.cssPrefix=n,se.forEach(function(t){return t(v)})},get:function(){return te.cssPrefix}});Y.FontAwesomeConfig=v;var se=[];function da(e){return se.push(e),function(){se.splice(se.indexOf(e),1)}}var Q=We,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function va(e){if(!(!e||!D)){var n=y.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e;for(var t=y.head.childNodes,a=null,r=t.length-1;r>-1;r--){var i=t[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(n,a),e}}var pa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function me(){for(var e=12,n="";e-- >0;)n+=pa[Math.random()*62|0];return n}function ae(e){for(var n=[],t=(e||[]).length>>>0;t--;)n[t]=e[t];return n}function fn(e){return e.classList?ae(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(n){return n})}function rt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ha(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,'="').concat(rt(e[t]),'" ')},"").trim()}function Te(e){return Object.keys(e||{}).reduce(function(n,t){return n+"".concat(t,": ").concat(e[t].trim(),";")},"")}function un(e){return e.size!==T.size||e.x!==T.x||e.y!==T.y||e.rotate!==T.rotate||e.flipX||e.flipY}function ga(e){var n=e.transform,t=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),c={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:u}}function ba(e){var n=e.transform,t=e.width,a=t===void 0?We:t,r=e.height,i=r===void 0?We:r,o="";return Qn?o+="translate(".concat(n.x/Q-a/2,"em, ").concat(n.y/Q-i/2,"em) "):o+="translate(calc(-50% + ".concat(n.x/Q,"em), calc(-50% + ").concat(n.y/Q,"em)) "),o+="scale(".concat(n.size/Q*(n.flipX?-1:1),", ").concat(n.size/Q*(n.flipY?-1:1),") "),o+="rotate(".concat(n.rotate,"deg) "),o}var ya=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function it(){var e=Jn,n=Zn,t=v.cssPrefix,a=v.replacementClass,r=ya;if(t!==e||a!==n){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(l,".".concat(a))}return r}var Nn=!1;function De(){v.autoAddCss&&!Nn&&(va(it()),Nn=!0)}var xa={mixout:function(){return{dom:{css:it,insertCss:De}}},hooks:function(){return{beforeDOMElementCreation:function(){De()},beforeI2svg:function(){De()}}}},L=Y||{};L[_]||(L[_]={});L[_].styles||(L[_].styles={});L[_].hooks||(L[_].hooks={});L[_].shims||(L[_].shims=[]);var I=L[_],ot=[],ka=function e(){y.removeEventListener("DOMContentLoaded",e),Ee=1,ot.map(function(n){return n()})},Ee=!1;D&&(Ee=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Ee||y.addEventListener("DOMContentLoaded",ka));function wa(e){D&&(Ee?setTimeout(e,0):ot.push(e))}function pe(e){var n=e.tag,t=e.attributes,a=t===void 0?{}:t,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?rt(e):"<".concat(n," ").concat(ha(a),">").concat(i.map(pe).join(""),"</").concat(n,">")}function jn(e,n,t){if(e&&e[n]&&e[n][t])return{prefix:n,iconName:t,icon:e[n][t]}}var Re=function(n,t,a,r){var i=Object.keys(n),o=i.length,l=t,c,u,f;for(a===void 0?(c=1,f=n[i[0]]):(c=0,f=a);c<o;c++)u=i[c],f=l(f,n[u],u,n);return f};function Aa(e){for(var n=[],t=0,a=e.length;t<a;){var r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<a){var i=e.charCodeAt(t++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),t--)}else n.push(r)}return n}function Be(e){var n=Aa(e);return n.length===1?n[0].toString(16):null}function Oa(e,n){var t=e.length,a=e.charCodeAt(n),r;return a>=55296&&a<=56319&&t>n+1&&(r=e.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Pn(e){return Object.keys(e).reduce(function(n,t){var a=e[t],r=!!a.icon;return r?n[a.iconName]=a.icon:n[t]=a,n},{})}function Ge(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=t.skipHooks,r=a===void 0?!1:a,i=Pn(n);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(e,Pn(n)):I.styles[e]=m(m({},I.styles[e]||{}),i),e==="fas"&&Ge("fa",n)}var we,Ae,Oe,J=I.styles,Sa=I.shims,Na=(we={},S(we,b,Object.values(fe[b])),S(we,x,Object.values(fe[x])),we),mn=null,st={},lt={},ct={},ft={},ut={},ja=(Ae={},S(Ae,b,Object.keys(le[b])),S(Ae,x,Object.keys(le[x])),Ae);function Pa(e){return~ca.indexOf(e)}function Ea(e,n){var t=n.split("-"),a=t[0],r=t.slice(1).join("-");return a===e&&r!==""&&!Pa(r)?r:null}var mt=function(){var n=function(i){return Re(J,function(o,l,c){return o[c]=Re(l,i,{}),o},{})};st=n(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){r[c.toString(16)]=o})}return r}),lt=n(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){r[c]=o})}return r}),ut=n(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(c){r[c]=o}),r});var t="far"in J||v.autoFetchSvg,a=Re(Sa,function(r,i){var o=i[0],l=i[1],c=i[2];return l==="far"&&!t&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:c}),r},{names:{},unicodes:{}});ct=a.names,ft=a.unicodes,mn=Me(v.styleDefault,{family:v.familyDefault})};da(function(e){mn=Me(e.styleDefault,{family:v.familyDefault})});mt();function dn(e,n){return(st[e]||{})[n]}function Ca(e,n){return(lt[e]||{})[n]}function G(e,n){return(ut[e]||{})[n]}function dt(e){return ct[e]||{prefix:null,iconName:null}}function Ia(e){var n=ft[e],t=dn("fas",e);return n||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function U(){return mn}var vn=function(){return{prefix:null,iconName:null,rest:[]}};function Me(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.family,a=t===void 0?b:t,r=le[a][e],i=ce[a][e]||ce[a][r],o=e in I.styles?e:null;return i||o||null}var En=(Oe={},S(Oe,b,Object.keys(fe[b])),S(Oe,x,Object.keys(fe[x])),Oe);function _e(e){var n,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.skipLookups,r=a===void 0?!1:a,i=(n={},S(n,b,"".concat(v.cssPrefix,"-").concat(b)),S(n,x,"".concat(v.cssPrefix,"-").concat(x)),n),o=null,l=b;(e.includes(i[b])||e.some(function(u){return En[b].includes(u)}))&&(l=b),(e.includes(i[x])||e.some(function(u){return En[x].includes(u)}))&&(l=x);var c=e.reduce(function(u,f){var d=Ea(v.cssPrefix,f);if(J[f]?(f=Na[l].includes(f)?aa[l][f]:f,o=f,u.prefix=f):ja[l].indexOf(f)>-1?(o=f,u.prefix=Me(f,{family:l})):d?u.iconName=d:f!==v.replacementClass&&f!==i[b]&&f!==i[x]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var p=o==="fa"?dt(u.iconName):{},g=G(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||g||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!J.far&&J.fas&&!v.autoFetchSvg&&(u.prefix="fas")}return u},vn());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===x&&(J.fass||v.autoFetchSvg)&&(c.prefix="fass",c.iconName=G(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=U()||"fas"),c}var Ta=function(){function e(){Wt(this,e),this.definitions={}}return Bt(e,[{key:"add",value:function(){for(var t=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){t.definitions[l]=m(m({},t.definitions[l]||{}),o[l]),Ge(l,o[l]);var c=fe[b][l];c&&Ge(c,o[l]),mt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,c=o.iconName,u=o.icon,f=u[2];t[l]||(t[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(t[l][d]=u)}),t[l][c]=u}),t}}]),e}(),Cn=[],Z={},ne={},Ma=Object.keys(ne);function _a(e,n){var t=n.mixoutsTo;return Cn=e,Z={},Object.keys(ne).forEach(function(a){Ma.indexOf(a)===-1&&delete ne[a]}),Cn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(t[o]=r[o]),Pe(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){t[o]||(t[o]={}),t[o][l]=r[o][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Z[o]||(Z[o]=[]),Z[o].push(i[o])})}a.provides&&a.provides(ne)}),t}function Xe(e,n){for(var t=arguments.length,a=new Array(t>2?t-2:0),r=2;r<t;r++)a[r-2]=arguments[r];var i=Z[e]||[];return i.forEach(function(o){n=o.apply(null,[n].concat(a))}),n}function q(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];var r=Z[e]||[];r.forEach(function(i){i.apply(null,t)})}function z(){var e=arguments[0],n=Array.prototype.slice.call(arguments,1);return ne[e]?ne[e].apply(null,n):void 0}function qe(e){e.prefix==="fa"&&(e.prefix="fas");var n=e.iconName,t=e.prefix||U();if(n)return n=G(t,n)||n,jn(vt.definitions,t,n)||jn(I.styles,t,n)}var vt=new Ta,La=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,q("noAuto")},za={i2svg:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(q("beforeI2svg",n),z("pseudoElements2svg",n),z("i2svg",n)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,wa(function(){Ra({autoReplaceSvgRoot:t}),q("watch",n)})}},Da={icon:function(n){if(n===null)return null;if(Pe(n)==="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:G(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){var t=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],a=Me(n[0]);return{prefix:a,iconName:G(a,t)||t}}if(typeof n=="string"&&(n.indexOf("".concat(v.cssPrefix,"-"))>-1||n.match(ra))){var r=_e(n.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:G(r.prefix,r.iconName)||r.iconName}}if(typeof n=="string"){var i=U();return{prefix:i,iconName:G(i,n)||n}}}},C={noAuto:La,config:v,dom:za,parse:Da,library:vt,findIconDefinition:qe,toHtml:pe},Ra=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=n.autoReplaceSvgRoot,a=t===void 0?y:t;(Object.keys(I.styles).length>0||v.autoFetchSvg)&&D&&v.autoReplaceSvg&&C.dom.i2svg({node:a})};function Le(e,n){return Object.defineProperty(e,"abstract",{get:n}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return pe(a)})}}),Object.defineProperty(e,"node",{get:function(){if(D){var a=y.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Fa(e){var n=e.children,t=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(un(o)&&t.found&&!a.found){var l=t.width,c=t.height,u={x:l/c/2,y:.5};r.style=Te(m(m({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function $a(e){var n=e.prefix,t=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(n,"-").concat(v.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function pn(e){var n=e.icons,t=n.main,a=n.mask,r=e.prefix,i=e.iconName,o=e.transform,l=e.symbol,c=e.title,u=e.maskId,f=e.titleId,d=e.extra,p=e.watchable,g=p===void 0?!1:p,A=a.found?a:t,j=A.width,k=A.height,P=r==="fak",w=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function(R){return d.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(d.classes).join(" "),O={children:[],attributes:m(m({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(k)})},E=P&&!~d.classes.indexOf("fa-fw")?{width:"".concat(j/k*16*.0625,"em")}:{};g&&(O.attributes[X]=""),c&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(f||me())},children:[c]}),delete O.attributes.title);var N=m(m({},O),{},{prefix:r,iconName:i,main:t,mask:a,maskId:u,transform:o,symbol:l,styles:m(m({},E),d.styles)}),W=a.found&&t.found?z("generateAbstractMask",N)||{children:[],attributes:{}}:z("generateAbstractIcon",N)||{children:[],attributes:{}},V=W.children,ze=W.attributes;return N.children=V,N.attributes=ze,l?$a(N):Fa(N)}function In(e){var n=e.content,t=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,l=e.watchable,c=l===void 0?!1:l,u=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(u[X]="");var f=m({},o.styles);un(r)&&(f.transform=ba({transform:r,width:t,height:a}),f["-webkit-transform"]=f.transform);var d=Te(f);d.length>0&&(u.style=d);var p=[];return p.push({tag:"span",attributes:u,children:[n]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ya(e){var n=e.content,t=e.title,a=e.extra,r=m(m(m({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),i=Te(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[n]}),t&&o.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),o}var Fe=I.styles;function Ke(e){var n=e[0],t=e[1],a=e.slice(4),r=rn(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:t,icon:o}}var Ua={found:!1,width:512,height:512};function Ha(e,n){!et&&!v.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(n,'" is missing.'))}function Qe(e,n){var t=n;return n==="fa"&&v.styleDefault!==null&&(n=U()),new Promise(function(a,r){if(z("missingIconAbstract"),t==="fa"){var i=dt(e)||{};e=i.iconName||e,n=i.prefix||n}if(e&&n&&Fe[n]&&Fe[n][e]){var o=Fe[n][e];return a(Ke(o))}Ha(e,n),a(m(m({},Ua),{},{icon:v.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}var Tn=function(){},Je=v.measurePerformance&&he&&he.mark&&he.measure?he:{mark:Tn,measure:Tn},ie='FA "6.4.2"',Wa=function(n){return Je.mark("".concat(ie," ").concat(n," begins")),function(){return pt(n)}},pt=function(n){Je.mark("".concat(ie," ").concat(n," ends")),Je.measure("".concat(ie," ").concat(n),"".concat(ie," ").concat(n," begins"),"".concat(ie," ").concat(n," ends"))},hn={begin:Wa,end:pt},Se=function(){};function Mn(e){var n=e.getAttribute?e.getAttribute(X):null;return typeof n=="string"}function Va(e){var n=e.getAttribute?e.getAttribute(sn):null,t=e.getAttribute?e.getAttribute(ln):null;return n&&t}function Ba(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(v.replacementClass)}function Ga(){if(v.autoReplaceSvg===!0)return Ne.replace;var e=Ne[v.autoReplaceSvg];return e||Ne.replace}function Xa(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function qa(e){return y.createElement(e)}function ht(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.ceFn,a=t===void 0?e.tag==="svg"?Xa:qa:t;if(typeof e=="string")return y.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(ht(o,{ceFn:a}))}),r}function Ka(e){var n=" ".concat(e.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}var Ne={replace:function(n){var t=n[0];if(t.parentNode)if(n[1].forEach(function(r){t.parentNode.insertBefore(ht(r),t)}),t.getAttribute(X)===null&&v.keepOriginalSource){var a=y.createComment(Ka(t));t.parentNode.replaceChild(a,t)}else t.remove()},nest:function(n){var t=n[0],a=n[1];if(~fn(t).indexOf(v.replacementClass))return Ne.replace(n);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,c){return c===v.replacementClass||c.match(r)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(l){return pe(l)}).join(`
`);t.setAttribute(X,""),t.innerHTML=o}};function _n(e){e()}function gt(e,n){var t=typeof n=="function"?n:Se;if(e.length===0)t();else{var a=_n;v.mutateApproach===na&&(a=Y.requestAnimationFrame||_n),a(function(){var r=Ga(),i=hn.begin("mutate");e.map(r),i(),t()})}}var gn=!1;function bt(){gn=!0}function Ze(){gn=!1}var Ce=null;function Ln(e){if(On&&v.observeMutations){var n=e.treeCallback,t=n===void 0?Se:n,a=e.nodeCallback,r=a===void 0?Se:a,i=e.pseudoElementsCallback,o=i===void 0?Se:i,l=e.observeMutationsRoot,c=l===void 0?y:l;Ce=new On(function(u){if(!gn){var f=U();ae(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Mn(d.addedNodes[0])&&(v.searchPseudoElements&&o(d.target),t(d.target)),d.type==="attributes"&&d.target.parentNode&&v.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Mn(d.target)&&~la.indexOf(d.attributeName))if(d.attributeName==="class"&&Va(d.target)){var p=_e(fn(d.target)),g=p.prefix,A=p.iconName;d.target.setAttribute(sn,g||f),A&&d.target.setAttribute(ln,A)}else Ba(d.target)&&r(d.target)})}}),D&&Ce.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qa(){Ce&&Ce.disconnect()}function Ja(e){var n=e.getAttribute("style"),t=[];return n&&(t=n.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),t}function Za(e){var n=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=_e(fn(e));return r.prefix||(r.prefix=U()),n&&t&&(r.prefix=n,r.iconName=t),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ca(r.prefix,e.innerText)||dn(r.prefix,Be(e.innerText))),!r.iconName&&v.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function er(e){var n=ae(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),t=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return v.autoA11y&&(t?n["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||me()):(n["aria-hidden"]="true",n.focusable="false")),n}function nr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:T,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Za(e),a=t.iconName,r=t.prefix,i=t.rest,o=er(e),l=Xe("parseNodeAttributes",{},e),c=n.styleParser?Ja(e):[];return m({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:T,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:c,attributes:o}},l)}var tr=I.styles;function yt(e){var n=v.autoReplaceSvg==="nest"?zn(e,{styleParser:!1}):zn(e);return~n.extra.classes.indexOf(nt)?z("generateLayersText",e,n):z("generateSvgReplacementMutation",e,n)}var H=new Set;cn.map(function(e){H.add("fa-".concat(e))});Object.keys(le[b]).map(H.add.bind(H));Object.keys(le[x]).map(H.add.bind(H));H=de(H);function Dn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var t=y.documentElement.classList,a=function(d){return t.add("".concat(Sn,"-").concat(d))},r=function(d){return t.remove("".concat(Sn,"-").concat(d))},i=v.autoFetchSvg?H:cn.map(function(f){return"fa-".concat(f)}).concat(Object.keys(tr));i.includes("fa")||i.push("fa");var o=[".".concat(nt,":not([").concat(X,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(X,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=ae(e.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var c=hn.begin("onTree"),u=l.reduce(function(f,d){try{var p=yt(d);p&&f.push(p)}catch(g){et||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(p){gt(p,function(){a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),c(),f()})}).catch(function(p){c(),d(p)})})}function ar(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;yt(e).then(function(t){t&&gt([t],n)})}function rr(e){return function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(n||{}).icon?n:qe(n||{}),r=t.mask;return r&&(r=(r||{}).icon?r:qe(r||{})),e(a,m(m({},t),{},{mask:r}))}}var ir=function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.transform,r=a===void 0?T:a,i=t.symbol,o=i===void 0?!1:i,l=t.mask,c=l===void 0?null:l,u=t.maskId,f=u===void 0?null:u,d=t.title,p=d===void 0?null:d,g=t.titleId,A=g===void 0?null:g,j=t.classes,k=j===void 0?[]:j,P=t.attributes,w=P===void 0?{}:P,O=t.styles,E=O===void 0?{}:O;if(n){var N=n.prefix,W=n.iconName,V=n.icon;return Le(m({type:"icon"},n),function(){return q("beforeDOMElementCreation",{iconDefinition:n,params:t}),v.autoA11y&&(p?w["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(A||me()):(w["aria-hidden"]="true",w.focusable="false")),pn({icons:{main:Ke(V),mask:c?Ke(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:W,transform:m(m({},T),r),symbol:o,title:p,maskId:f,titleId:A,extra:{attributes:w,styles:E,classes:k}})})}},or={mixout:function(){return{icon:rr(ir)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Dn,t.nodeCallback=ar,t}}},provides:function(n){n.i2svg=function(t){var a=t.node,r=a===void 0?y:a,i=t.callback,o=i===void 0?function(){}:i;return Dn(r,o)},n.generateSvgReplacementMutation=function(t,a){var r=a.iconName,i=a.title,o=a.titleId,l=a.prefix,c=a.transform,u=a.symbol,f=a.mask,d=a.maskId,p=a.extra;return new Promise(function(g,A){Promise.all([Qe(r,l),f.iconName?Qe(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var k=rn(j,2),P=k[0],w=k[1];g([t,pn({icons:{main:P,mask:w},prefix:l,iconName:r,transform:c,symbol:u,maskId:d,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},n.generateAbstractIcon=function(t){var a=t.children,r=t.attributes,i=t.main,o=t.transform,l=t.styles,c=Te(l);c.length>0&&(r.style=c);var u;return un(o)&&(u=z("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},sr={mixout:function(){return{layer:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Le({type:"layer"},function(){q("beforeDOMElementCreation",{assembler:t,params:a});var o=[];return t(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(de(i)).join(" ")},children:o}]})}}}},lr={mixout:function(){return{counter:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,l=o===void 0?[]:o,c=a.attributes,u=c===void 0?{}:c,f=a.styles,d=f===void 0?{}:f;return Le({type:"counter",content:t},function(){return q("beforeDOMElementCreation",{content:t,params:a}),Ya({content:t.toString(),title:i,extra:{attributes:u,styles:d,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(de(l))}})})}}}},cr={mixout:function(){return{text:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?T:r,o=a.title,l=o===void 0?null:o,c=a.classes,u=c===void 0?[]:c,f=a.attributes,d=f===void 0?{}:f,p=a.styles,g=p===void 0?{}:p;return Le({type:"text",content:t},function(){return q("beforeDOMElementCreation",{content:t,params:a}),In({content:t,transform:m(m({},T),i),title:l,extra:{attributes:d,styles:g,classes:["".concat(v.cssPrefix,"-layers-text")].concat(de(u))}})})}}},provides:function(n){n.generateLayersText=function(t,a){var r=a.title,i=a.transform,o=a.extra,l=null,c=null;if(Qn){var u=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();l=f.width/u,c=f.height/u}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([t,In({content:t.innerHTML,width:l,height:c,transform:i,title:r,extra:o,watchable:!0})])}}},fr=new RegExp('"',"ug"),Rn=[1105920,1112319];function ur(e){var n=e.replace(fr,""),t=Oa(n,0),a=t>=Rn[0]&&t<=Rn[1],r=n.length===2?n[0]===n[1]:!1;return{value:Be(r?n[0]:n),isSecondary:a||r}}function Fn(e,n){var t="".concat(ea).concat(n.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(t)!==null)return a();var i=ae(e.children),o=i.filter(function(V){return V.getAttribute(Ve)===n})[0],l=Y.getComputedStyle(e,n),c=l.getPropertyValue("font-family").match(ia),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!c)return e.removeChild(o),a();if(c&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),p=~["Sharp"].indexOf(c[2])?x:b,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ce[p][c[2].toLowerCase()]:oa[p][u],A=ur(d),j=A.value,k=A.isSecondary,P=c[0].startsWith("FontAwesome"),w=dn(g,j),O=w;if(P){var E=Ia(j);E.iconName&&E.prefix&&(w=E.iconName,g=E.prefix)}if(w&&!k&&(!o||o.getAttribute(sn)!==g||o.getAttribute(ln)!==O)){e.setAttribute(t,O),o&&e.removeChild(o);var N=nr(),W=N.extra;W.attributes[Ve]=n,Qe(w,g).then(function(V){var ze=pn(m(m({},N),{},{icons:{main:V,mask:vn()},prefix:g,iconName:O,extra:W,watchable:!0})),R=y.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?e.insertBefore(R,e.firstChild):e.appendChild(R),R.outerHTML=ze.map(function(Ot){return pe(Ot)}).join(`
`),e.removeAttribute(t),a()}).catch(r)}else a()}else a()})}function mr(e){return Promise.all([Fn(e,"::before"),Fn(e,"::after")])}function dr(e){return e.parentNode!==document.head&&!~ta.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ve)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function $n(e){if(D)return new Promise(function(n,t){var a=ae(e.querySelectorAll("*")).filter(dr).map(mr),r=hn.begin("searchPseudoElements");bt(),Promise.all(a).then(function(){r(),Ze(),n()}).catch(function(){r(),Ze(),t()})})}var vr={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=$n,t}}},provides:function(n){n.pseudoElements2svg=function(t){var a=t.node,r=a===void 0?y:a;v.searchPseudoElements&&$n(r)}}},Yn=!1,pr={mixout:function(){return{dom:{unwatch:function(){bt(),Yn=!0}}}},hooks:function(){return{bootstrap:function(){Ln(Xe("mutationObserverCallbacks",{}))},noAuto:function(){Qa()},watch:function(t){var a=t.observeMutationsRoot;Yn?Ze():Ln(Xe("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Un=function(n){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return a.flipX=!0,a;if(o&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(o){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},t)},hr={mixout:function(){return{parse:{transform:function(t){return Un(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-transform");return r&&(t.transform=Un(r)),t}}},provides:function(n){n.generateAbstractTransformGrouping=function(t){var a=t.main,r=t.transform,i=t.containerWidth,o=t.iconWidth,l={transform:"translate(".concat(i/2," 256)")},c="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:p};return{tag:"g",attributes:m({},g.outer),children:[{tag:"g",attributes:m({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),g.path)}]}]}}}},$e={x:0,y:0,width:"100%",height:"100%"};function Hn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||n)&&(e.attributes.fill="black"),e}function gr(e){return e.tag==="g"?e.children:[e]}var br={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-mask"),i=r?_e(r.split(" ").map(function(o){return o.trim()})):vn();return i.prefix||(i.prefix=U()),t.mask=i,t.maskId=a.getAttribute("data-fa-mask-id"),t}}},provides:function(n){n.generateAbstractMask=function(t){var a=t.children,r=t.attributes,i=t.main,o=t.mask,l=t.maskId,c=t.transform,u=i.width,f=i.icon,d=o.width,p=o.icon,g=ga({transform:c,containerWidth:d,iconWidth:u}),A={tag:"rect",attributes:m(m({},$e),{},{fill:"white"})},j=f.children?{children:f.children.map(Hn)}:{},k={tag:"g",attributes:m({},g.inner),children:[Hn(m({tag:f.tag,attributes:m(m({},f.attributes),g.path)},j))]},P={tag:"g",attributes:m({},g.outer),children:[k]},w="mask-".concat(l||me()),O="clip-".concat(l||me()),E={tag:"mask",attributes:m(m({},$e),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,P]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:gr(p)},E]};return a.push(N,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},$e)}),{children:a,attributes:r}}}},yr={provides:function(n){var t=!1;Y.matchMedia&&(t=Y.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||l.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},xr={hooks:function(){return{parseNodeAttributes:function(t,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return t.symbol=i,t}}}},kr=[xa,or,sr,lr,cr,vr,pr,hr,br,yr,xr];_a(kr,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;var en=C.parse;C.findIconDefinition;C.toHtml;var wr=C.icon;C.layer;C.text;C.counter;function Wn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function F(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Wn(Object(t),!0).forEach(function(a){ee(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Wn(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function Ie(e){"@babel/helpers - typeof";return Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ie(e)}function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ar(e,n){if(e==null)return{};var t={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function Or(e,n){if(e==null)return{};var t=Ar(e,n),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function nn(e){return Sr(e)||Nr(e)||jr(e)||Pr()}function Sr(e){if(Array.isArray(e))return tn(e)}function Nr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jr(e,n){if(e){if(typeof e=="string")return tn(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return tn(e,n)}}function tn(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Pr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Er(e){var n,t=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,o=e.shake,l=e.flash,c=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,p=e.fixedWidth,g=e.inverse,A=e.border,j=e.listItem,k=e.flip,P=e.size,w=e.rotation,O=e.pull,E=(n={"fa-beat":t,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":l,"fa-spin":c,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":p,"fa-inverse":g,"fa-border":A,"fa-li":j,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},ee(n,"fa-".concat(P),typeof P<"u"&&P!==null),ee(n,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),ee(n,"fa-pull-".concat(O),typeof O<"u"&&O!==null),ee(n,"fa-swap-opacity",e.swapOpacity),n);return Object.keys(E).map(function(N){return E[N]?N:null}).filter(function(N){return N})}function Cr(e){return e=e-0,e===e}function xt(e){return Cr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(n,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ir=["style"];function Tr(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Mr(e){return e.split(";").map(function(n){return n.trim()}).filter(function(n){return n}).reduce(function(n,t){var a=t.indexOf(":"),r=xt(t.slice(0,a)),i=t.slice(a+1).trim();return r.startsWith("webkit")?n[Tr(r)]=i:n[r]=i,n},{})}function kt(e,n){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var a=(n.children||[]).map(function(c){return kt(e,c)}),r=Object.keys(n.attributes||{}).reduce(function(c,u){var f=n.attributes[u];switch(u){case"class":c.attrs.className=f,delete n.attributes.class;break;case"style":c.attrs.style=Mr(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?c.attrs[u.toLowerCase()]=f:c.attrs[xt(u)]=f}return c},{attrs:{}}),i=t.style,o=i===void 0?{}:i,l=Or(t,Ir);return r.attrs.style=F(F({},r.attrs.style),o),e.apply(void 0,[n.tag,F(F({},r.attrs),l)].concat(nn(a)))}var wt=!1;try{wt=!0}catch{}function _r(){if(!wt&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Vn(e){if(e&&Ie(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(en.icon)return en.icon(e);if(e===null)return null;if(e&&Ie(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Ye(e,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?ee({},e,n):{}}var $=an.forwardRef(function(e,n){var t=e.icon,a=e.mask,r=e.symbol,i=e.className,o=e.title,l=e.titleId,c=e.maskId,u=Vn(t),f=Ye("classes",[].concat(nn(Er(e)),nn(i.split(" ")))),d=Ye("transform",typeof e.transform=="string"?en.transform(e.transform):e.transform),p=Ye("mask",Vn(a)),g=wr(u,F(F(F(F({},f),d),p),{},{symbol:r,title:o,titleId:l,maskId:c}));if(!g)return _r("Could not find icon",u),null;var A=g.abstract,j={ref:n};return Object.keys(e).forEach(function(k){$.defaultProps.hasOwnProperty(k)||(j[k]=e[k])}),Lr(A[0],j)});$.displayName="FontAwesomeIcon";$.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool};$.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Lr=kt.bind(null,an.createElement),zr={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Dr={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Rr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Fr={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function At(e){const[n,t]=M.useState(!1);return M.useEffect(()=>{const a=e.current;if(!a)return;const r=new IntersectionObserver(([i])=>{i.isIntersecting&&t(!0)},{threshold:.15});return r.observe(a),()=>r.disconnect()},[e]),n}function K({index:e,children:n,className:t=""}){const a=M.useRef(null),r=je(i=>i.setActiveSection);return M.useEffect(()=>{const i=a.current;if(!i)return;const o=new IntersectionObserver(([l])=>{l.isIntersecting&&r(e)},{threshold:.5,rootMargin:"0px"});return o.observe(i),()=>o.disconnect()},[e,r]),s.jsx("section",{ref:a,id:`section-${e}`,"data-index":e,className:`snap-section ${t}`,children:n})}function re({children:e,className:n=""}){const t=M.useRef(null),a=At(t);return s.jsx("div",{ref:t,className:`glass-card ${a?"in-view":""} ${n}`,children:e})}function $r(){const e=M.useRef(null),n=At(e);return s.jsx(K,{index:0,className:"section-home",children:s.jsxs("div",{ref:e,className:`home-content ${n?"in-view":""}`,children:[s.jsx("p",{className:"home-eyebrow",children:"portfolio"}),s.jsx("h1",{className:"home-name",children:Ue.name}),s.jsx("p",{className:"home-title",children:Ue.title}),s.jsx("div",{className:"home-line"})]})})}function Yr(){return s.jsx(K,{index:1,className:"section-about",children:s.jsxs(re,{className:"about-card",children:[s.jsx("h2",{className:"card-heading",children:"about me"}),s.jsx("p",{className:"card-body",children:Ue.about})]})})}function Ur(){return s.jsx(K,{index:2,className:"section-experience",children:s.jsxs(re,{className:"experience-card",children:[s.jsx("h2",{className:"card-heading",children:"experience"}),s.jsx("div",{className:"exp-list",children:zt.map(e=>s.jsxs("div",{className:"exp-entry",children:[s.jsxs("div",{className:"exp-header",children:[s.jsxs("div",{children:[s.jsx("p",{className:"exp-role",children:e.role}),s.jsx("p",{className:"exp-company",children:e.company})]}),s.jsxs("div",{className:"exp-meta",children:[s.jsx("span",{children:e.dates}),s.jsx("span",{children:e.location})]})]}),s.jsx("ul",{className:"exp-bullets",children:e.bullets.map((n,t)=>s.jsx("li",{children:n},t))})]},e.company+e.dates))})]})})}function Hr(){const e=yn.languages,n=yn.technologies;return s.jsx(K,{index:3,className:"section-skills",children:s.jsxs(re,{className:"skills-card",children:[s.jsxs("div",{className:"skills-col",children:[s.jsx("h2",{className:"card-heading",children:"languages"}),s.jsx("div",{className:"skill-grid",children:e.map(t=>s.jsx(Bn,{name:t.name,desc:t.desc},t.name))})]}),s.jsx("div",{className:"skills-divider"}),s.jsxs("div",{className:"skills-col",children:[s.jsx("h2",{className:"card-heading",children:"technologies"}),s.jsx("div",{className:"skill-grid",children:n.map(t=>s.jsx(Bn,{name:t.name,desc:t.desc},t.name))})]})]})})}function Bn({name:e,desc:n}){const[t,a]=M.useState(!1);return s.jsxs("div",{className:`skill-chip ${t?"open":""}`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[s.jsx("span",{className:"skill-chip-name",children:e}),t&&n.length>0&&!n[0].startsWith("TODO")&&s.jsx("div",{className:"skill-chip-tip",children:n.map((r,i)=>s.jsx("p",{children:r},i))})]})}function Wr(){return s.jsx(K,{index:4,className:"section-projects",children:s.jsxs(re,{className:"projects-card",children:[s.jsx("h2",{className:"card-heading",children:"projects"}),s.jsx("div",{className:"project-grid",children:Ft.map(e=>s.jsx(Vr,{project:e},e.name))})]})})}function Vr({project:e}){const[n,t]=M.useState(!1),a=s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"project-name",children:e.name}),n&&s.jsx("div",{className:"project-tip",children:e.desc.map((r,i)=>s.jsx("p",{children:r},i))})]});return e.link?s.jsx("a",{className:"project-card",href:e.link,target:"_blank",rel:"noreferrer noopener",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:a}):s.jsx("button",{className:"project-card",onClick:()=>t(r=>!r),onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:a})}function Br(){const e=Ht;return s.jsx(K,{index:5,className:"section-education",children:s.jsxs(re,{className:"education-card",children:[s.jsxs("div",{className:"edu-col",children:[s.jsx("h2",{className:"card-heading",children:"education"}),e.schools.map(n=>s.jsxs("div",{className:"edu-school",children:[s.jsx("p",{className:"edu-school-name",children:n.name}),s.jsx("p",{className:"edu-degree",children:n.degree}),s.jsxs("p",{className:"edu-dates",children:[n.dates,n.gpa?` · GPA ${n.gpa}`:""]})]},n.name)),s.jsx("h3",{className:"edu-subheading",children:"coursework"}),s.jsx("div",{className:"edu-tags",children:e.coursework.map(n=>s.jsx("span",{className:"edu-tag",children:n},n))})]}),s.jsx("div",{className:"skills-divider"}),s.jsxs("div",{className:"edu-col",children:[s.jsx("h2",{className:"card-heading",children:"organizations"}),e.organizations.map(n=>s.jsxs("div",{className:"edu-org",children:[s.jsx("p",{className:"edu-org-name",children:n.name}),s.jsx("p",{className:"edu-org-role",children:n.role}),s.jsx("p",{className:"edu-dates",children:n.dates})]},n.name))]})]})})}function Gr(){return s.jsx(K,{index:6,className:"section-contact",children:s.jsxs(re,{className:"contact-card",children:[s.jsx("h2",{className:"card-heading",children:"contact me"}),s.jsxs("div",{className:"contact-links",children:[s.jsx("a",{className:"contact-link",href:"https://www.github.com/ashleythorlin",target:"_blank",rel:"noreferrer noopener","aria-label":"GitHub",children:s.jsx($,{icon:Fr})}),s.jsx("a",{className:"contact-link",href:"https://www.linkedin.com/in/ashley-thorlin",target:"_blank",rel:"noreferrer noopener","aria-label":"LinkedIn",children:s.jsx($,{icon:Rr})}),s.jsx("a",{className:"contact-link",href:"mailto:ashleythorlin@gmail.com","aria-label":"Email",children:s.jsx($,{icon:Dr})})]}),s.jsxs("a",{className:"resume-btn",href:"https://docs.google.com/document/d/1yI4ytS8uV8nLnPgFpWSELHJcQo1wFoPgBaNN06RFNZk/edit?usp=sharing",target:"_blank",rel:"noreferrer noopener",children:["resume ",s.jsx($,{icon:zr,size:"xs"})]})]})})}function Xr(){return s.jsxs("div",{className:"scroll-container",children:[s.jsx($r,{}),s.jsx(Yr,{}),s.jsx(Ur,{}),s.jsx(Hr,{}),s.jsx(Wr,{}),s.jsx(Br,{}),s.jsx(Gr,{})]})}function qr(){return s.jsxs(s.Fragment,{children:[s.jsx(Ct,{}),s.jsx(Xr,{}),s.jsx(Tt,{})]})}const Kr=Nt.createRoot(document.getElementById("root"));Kr.render(s.jsx(an.StrictMode,{children:s.jsx(qr,{})}));

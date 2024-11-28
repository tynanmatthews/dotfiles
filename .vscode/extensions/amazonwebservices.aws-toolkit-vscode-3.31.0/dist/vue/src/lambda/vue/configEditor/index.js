(()=>{var se={163:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>T});var d=i(6758),c=i.n(d),h=i(935),V=i.n(h),b=V()(c());b.push([e.id,`
.preload-transition[data-v-3f832b9c] {
    transition: none !important;
}
.settings-title[data-v-3f832b9c] {
    font-size: calc(1.1 * var(--vscode-font-size)); /* TODO: make this configurable */
    font-weight: bold;
    margin: 0;
    padding: 0;
}
.sub-pane[data-v-3f832b9c] {
    transition:
        max-height 0.5s,
        padding 0.5s;
    padding: 1rem;
    overflow: hidden;
}
[data-v-3f832b9c] .sub-pane div:first-child {
    margin-top: 0;
}
.collapse-leave-from[data-v-3f832b9c] {
    max-height: var(--max-height);
}
.collapse-leave-active[data-v-3f832b9c] {
    transition:
        max-height 0.5s,
        visibility 0.5s,
        padding 0.5s;
    visibility: hidden;
    padding: 0 1rem;
    max-height: 0;
}
.collapse-enter-active[data-v-3f832b9c] {
    transition:
        max-height 0.5s,
        padding 0.5s;
    max-height: 0;
    padding: 0 1rem;
}
.collapse-enter-to[data-v-3f832b9c] {
    max-height: var(--max-height);
    padding: 1rem;
}
.collapse-button[data-v-3f832b9c] {
    display: none;
}
input[type='checkbox'] ~ label .collapse-button[data-v-3f832b9c] {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin: -4px 0 0 0;
    padding: 0;
    font-size: 2em;
    opacity: 0.8;
    color: var(--vscode-foreground);
    transition: transform 0.5s;
    transform: rotate(180deg);
    text-align: right;
}
input[type='checkbox']:checked ~ label .collapse-button[data-v-3f832b9c] {
    transform: rotate(90deg);
}
.settings-panel[data-v-3f832b9c] {
    background: var(--vscode-menu-background);
    margin: 16px 0;
}
.panel-header[data-v-3f832b9c] {
    display: flex;
    align-items: center;
    width: 100%;
}
`,""]);const T=b},5152:(e,n,i)=>{"use strict";i.r(n),i.d(n,{default:()=>T});var d=i(6758),c=i.n(d),h=i(935),V=i.n(h),b=V()(c());b.push([e.id,`.section-header[data-v-8e050856] {
    margin: 0px;
    margin-bottom: 10px;
    display: flex;
    justify-content: flex-start;
}
textarea[data-v-8e050856] {
    color: var(--vscode-settings-textInputForeground);
    background: var(--vscode-settings-textInputBackground);
    border: 1px solid var(--vscode-settings-textInputBorder);
}
.config-item[data-v-8e050856] {
    border-bottom: 1px solid var(--vscode-menubar-selectionBackground);
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 8px 0px;
}
.col2[data-v-8e050856] {
    grid-column: 2;
}
.data-view[data-v-8e050856] {
    display: none;
    border: dashed rgb(218, 31, 31) 1px;
    color: rgb(218, 31, 31);
}
.required[data-v-8e050856] {
    color: red;
}
#form-title[data-v-8e050856] {
    font-size: large;
    font-weight: bold;
}
.form-buttons[data-v-8e050856] {
    margin-left: 20px;
}
.margin-bottom-16[data-v-8e050856] {
    margin-bottom: 16px;
}
.header-buttons[data-v-8e050856] {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
#target-type-selector[data-v-8e050856] {
    margin-bottom: 15px;
    margin-left: 8px;
}
.form-row[data-v-8e050856] {
    display: grid;
    grid-template-columns: 150px 1fr;
    margin-bottom: 10px;
}
.form-control[data-v-8e050856] {
    min-width: 170%; /* Set a minimum width */
    width: 100%; /* Allow the width to adjust based on content */
    display: inline-block;
    flex-grow: 1;
    margin-right: 0.5rem;
}
.payload-options-button[data-v-8e050856] {
    display: grid;
    align-items: center;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.9em;
    margin-bottom: 10px;
}
.payload-options-buttons[data-v-8e050856] {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
.Icontainer[data-v-8e050856] {
    margin-inline: auto;
    margin-top: 5rem;
}
.container[data-v-8e050856] {
    width: 574px;
    height: 824px;
    top: 18px;
    gap: 20px;
    margin: auto;
    left: 688px;
    background-color: var(--vscode-editor-background);
}
.container em[data-v-8e050856] {
    display: block;
    text-align: justify;
}
.button-theme-primary[data-v-8e050856] {
    color: var(--vscode-button-foreground);
    background: var(--vscode-button-background);
    border: 1px solid var(--vscode-button-border);
    padding: 8px 12px;
}
.button-theme-primary[data-v-8e050856]:hover:not(:disabled) {
    background: var(--vscode-button-hoverBackground);
    cursor: pointer;
}
.button-theme-secondary[data-v-8e050856] {
    color: var(--vscode-button-secondaryForeground);
    background: var(--vscode-button-secondaryBackground);
    border: 1px solid var(--vscode-button-border);
    padding: 8px 12px;
}
.button-theme-secondary[data-v-8e050856]:hover:not(:disabled) {
    background: var(--vscode-button-secondaryHoverBackground);
    cursor: pointer;
}
.formfield[data-v-8e050856] {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
}
.payload-options-buttons[data-v-8e050856] {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
}
.radio-selector[data-v-8e050856] {
    width: 15px;
    height: 15px;
    border-radius: 50%;
}
.label-selector[data-v-8e050856] {
    padding-left: 7px;
    font-weight: 500;
    font-size: 13px;
    line-height: 15.51px;
    text-align: center;
}
.form-row-select[data-v-8e050856] {
    width: 387px;
    height: 28px;
    border: 1px;
    border-radius: 5px;
    gap: 4px;
    padding: 2px 8px;
}
.form-row-event-select[data-v-8e050856] {
    width: 244px;
    height: 28px;
    margin-bottom: 15px;
    margin-left: 8px;
}
.runtime-description[data-v-8e050856] {
    font-size: 12px;
    margin-top: 5px;
}
`,""]);const T=b},935:e=>{"use strict";e.exports=function(n){var i=[];return i.toString=function(){return this.map(function(c){var h="",V=typeof c[5]<"u";return c[4]&&(h+="@supports (".concat(c[4],") {")),c[2]&&(h+="@media ".concat(c[2]," {")),V&&(h+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),h+=n(c),V&&(h+="}"),c[2]&&(h+="}"),c[4]&&(h+="}"),h}).join("")},i.i=function(c,h,V,b,T){typeof c=="string"&&(c=[[null,c,void 0]]);var B={};if(V)for(var P=0;P<this.length;P++){var O=this[P][0];O!=null&&(B[O]=!0)}for(var D=0;D<c.length;D++){var v=[].concat(c[D]);V&&B[v[0]]||(typeof T<"u"&&(typeof v[5]>"u"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=T),h&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=h),b&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=b):v[4]="".concat(b)),i.push(v))}},i}},6758:e=>{"use strict";e.exports=function(n){return n[1]}},7433:(e,n)=>{"use strict";var i;i={value:!0},n.A=(d,c)=>{const h=d.__vccOpts||d;for(const[V,b]of c)h[V]=b;return h}},2671:(e,n,i)=>{var d=i(163);d.__esModule&&(d=d.default),typeof d=="string"&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals);var c=i(611).A,h=c("48160952",d,!1,{})},2180:(e,n,i)=>{var d=i(5152);d.__esModule&&(d=d.default),typeof d=="string"&&(d=[[e.id,d,""]]),d.locals&&(e.exports=d.locals);var c=i(611).A,h=c("93ab6d3e",d,!1,{})},611:(e,n,i)=>{"use strict";i.d(n,{A:()=>K});function d(s,g){for(var u=[],p={},r=0;r<g.length;r++){var N=g[r],_=N[0],I=N[1],M=N[2],L=N[3],C={id:s+":"+r,css:I,media:M,sourceMap:L};p[_]?p[_].parts.push(C):u.push(p[_]={id:_,parts:[C]})}return u}var c=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var h={},V=c&&(document.head||document.getElementsByTagName("head")[0]),b=null,T=0,B=!1,P=function(){},O=null,D="data-vue-ssr-id",v=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function K(s,g,u,p){B=u,O=p||{};var r=d(s,g);return F(r),function(_){for(var I=[],M=0;M<r.length;M++){var L=r[M],C=h[L.id];C.refs--,I.push(C)}_?(r=d(s,_),F(r)):r=[];for(var M=0;M<I.length;M++){var C=I[M];if(C.refs===0){for(var A=0;A<C.parts.length;A++)C.parts[A]();delete h[C.id]}}}}function F(s){for(var g=0;g<s.length;g++){var u=s[g],p=h[u.id];if(p){p.refs++;for(var r=0;r<p.parts.length;r++)p.parts[r](u.parts[r]);for(;r<u.parts.length;r++)p.parts.push(R(u.parts[r]));p.parts.length>u.parts.length&&(p.parts.length=u.parts.length)}else{for(var N=[],r=0;r<u.parts.length;r++)N.push(R(u.parts[r]));h[u.id]={id:u.id,refs:1,parts:N}}}}function J(){var s=document.createElement("style");return s.type="text/css",V.appendChild(s),s}function R(s){var g,u,p=document.querySelector("style["+D+'~="'+s.id+'"]');if(p){if(B)return P;p.parentNode.removeChild(p)}if(v){var r=T++;p=b||(b=J()),g=$.bind(null,p,r,!1),u=$.bind(null,p,r,!0)}else p=J(),g=q.bind(null,p),u=function(){p.parentNode.removeChild(p)};return g(s),function(_){if(_){if(_.css===s.css&&_.media===s.media&&_.sourceMap===s.sourceMap)return;g(s=_)}else u()}}var G=function(){var s=[];return function(g,u){return s[g]=u,s.filter(Boolean).join(`
`)}}();function $(s,g,u,p){var r=u?"":p.css;if(s.styleSheet)s.styleSheet.cssText=G(g,r);else{var N=document.createTextNode(r),_=s.childNodes;_[g]&&s.removeChild(_[g]),_.length?s.insertBefore(N,_[g]):s.appendChild(N)}}function q(s,g){var u=g.css,p=g.media,r=g.sourceMap;if(p&&s.setAttribute("media",p),O.ssrId&&s.setAttribute(D,g.id),r&&(u+=`
/*# sourceURL=`+r.sources[0]+" */",u+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s.styleSheet)s.styleSheet.cssText=u;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(u))}}}},X={};function S(e){var n=X[e];if(n!==void 0)return n.exports;var i=X[e]={id:e,exports:{}};return se[e](i,i.exports,S),i.exports}S.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return S.d(n,{a:n}),n},S.d=(e,n)=>{for(var i in n)S.o(n,i)&&!S.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},S.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),S.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var z={};(()=>{"use strict";const e=Vue,n=t=>((0,e.pushScopeId)("data-v-8e050856"),t=t(),(0,e.popScopeId)(),t),i={class:"container"},d={class:"invoke-lambda-form"},c=n(()=>(0,e.createElementVNode)("h1",null,"Local Invoke and Debug Configuration",-1)),h={class:"header-buttons",id:"invoke-button-container"},V=n(()=>(0,e.createElementVNode)("code",null,"type:aws-sam",-1)),b=n(()=>(0,e.createElementVNode)("strong",null,"Invoke",-1)),T=n(()=>(0,e.createElementVNode)("br",null,null,-1)),B=n(()=>(0,e.createElementVNode)("br",null,null,-1)),P=n(()=>(0,e.createElementVNode)("strong",null,"Note:",-1)),O=n(()=>(0,e.createElementVNode)("code",null,'{"KEY":"VALUE"}',-1)),D={class:"form-row"},v=n(()=>(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("label",null,"Payload:")],-1)),K={class:"payload-options"},F={class:"formfield"},J=n(()=>(0,e.createElementVNode)("label",{class:"label-selector",for:"sampleEvents"},"Inline",-1)),R=n(()=>(0,e.createElementVNode)("br",null,null,-1)),G={class:"formfield"},$=n(()=>(0,e.createElementVNode)("label",{class:"label-selector",for:"localFile"}," Local file",-1)),q=n(()=>(0,e.createElementVNode)("br",null,null,-1)),s={key:0,class:"form-row"},g=n(()=>(0,e.createElementVNode)("label",{style:{fontSize:"13px",fontWeight:500}},"Sample event",-1)),u=n(()=>(0,e.createElementVNode)("br",null,null,-1)),p={class:"data-view"},r={key:0,class:"input-validation"},N=n(()=>(0,e.createElementVNode)("br",null,null,-1)),_=n(()=>(0,e.createElementVNode)("br",null,null,-1)),I={key:1,class:"form-row"},M=n(()=>(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("label",null,"File")],-1)),L={class:"data-view"},C={key:0,class:"input-validation"},A={class:"config-item"},re=n(()=>(0,e.createElementVNode)("label",{for:"target-type-selector"},"Invoke target type",-1)),le=["value"],de={class:"data-view"},ce={key:2,class:"target-code"},pe={class:"config-item"},ue=n(()=>(0,e.createElementVNode)("label",{for:"select-directory"},"Project root",-1)),me={class:"data-view"},he={class:"config-item"},ge=n(()=>(0,e.createElementVNode)("label",{for:"lambda-handler"},"Lambda handler",-1)),ve={class:"data-view"},fe={class:"config-item"},_e=n(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),ye=n(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),be=["value"],Ee={class:"data-view"},Ve={key:3,class:"target-template"},Ne={class:"config-item"},ke=n(()=>(0,e.createElementVNode)("label",{for:"template-path"},"Template path",-1)),Ce={class:"data-view"},we={class:"config-item"},Se=n(()=>(0,e.createElementVNode)("label",{for:"logicalID"},"Resource (Logical ID)",-1)),Te={class:"form-row"},Me={style:{"margin-left":"105px"}},De={class:"data-view"},Be={class:"config-item"},Pe=n(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),Oe=n(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),Ie=["value"],Le={class:"data-view"},Ae=n(()=>(0,e.createElementVNode)("p",{class:"runtime-description",style:{width:"250%",marginBottom:"0.1%",marginLeft:"100%"}}," For invoke the runtime defined in the template is used. ",-1)),Ue={key:4,class:"target-apigw"},Fe=n(()=>(0,e.createElementVNode)("br",null,null,-1)),Je={class:"config-item"},Re=n(()=>(0,e.createElementVNode)("label",{for:"template-path"},"Template path",-1)),$e={class:"data-view"},xe={class:"config-item"},He=n(()=>(0,e.createElementVNode)("label",{for:"logicalID"},"Resource (Logical ID)",-1)),je={class:"config-item"},We=n(()=>(0,e.createElementVNode)("label",{for:"runtime-selector"},"Runtime",-1)),ze=n(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose a runtime...",-1)),Ke=["value"],Ge={class:"data-view"},qe={class:"config-item"},Xe=n(()=>(0,e.createElementVNode)("label",{for:"path"},"Path",-1)),Qe={class:"config-item"},Ye=n(()=>(0,e.createElementVNode)("label",{for:"http-method-selector"},"HTTP Method",-1)),Ze=n(()=>(0,e.createElementVNode)("option",{disabled:""},"Choose an HTTP Method",-1)),et=["value"],tt={class:"data-view"},at={class:"config-item"},ot=n(()=>(0,e.createElementVNode)("label",{for:"query-string"},"Query string",-1)),nt={class:"config-item"},it=n(()=>(0,e.createElementVNode)("label",{for:"headers"},"Headers",-1)),st=["data-invalid"],rt={key:0,class:"input-validation col2"},lt={key:5},dt=n(()=>(0,e.createElementVNode)("h3",null,"aws",-1)),ct={class:"config-item"},pt=n(()=>(0,e.createElementVNode)("label",{for:"awsConnection"},"Credentials:",-1)),ut={class:"config-item"},mt=n(()=>(0,e.createElementVNode)("label",{for:"region"},"Region",-1)),ht=n(()=>(0,e.createElementVNode)("h3",null,"lambda",-1)),gt={class:"config-item"},vt=n(()=>(0,e.createElementVNode)("label",{for:""},"Environment variables",-1)),ft=["data-invalid"],_t={key:0,class:"input-validation col2"},yt={class:"config-item"},bt=n(()=>(0,e.createElementVNode)("label",{for:"memory"},"Memory (MB)",-1)),Et={class:"config-item"},Vt=n(()=>(0,e.createElementVNode)("label",{for:"timeoutSec"},"Timeout (s)",-1)),Nt=n(()=>(0,e.createElementVNode)("h3",null,"sam",-1)),kt={class:"config-item"},Ct=n(()=>(0,e.createElementVNode)("label",{for:"buildArguments"},"Build arguments",-1)),wt={class:"config-item"},St=n(()=>(0,e.createElementVNode)("label",{for:"containerBuild"},"Container build",-1)),Tt={class:"config-item"},Mt=n(()=>(0,e.createElementVNode)("label",{for:"dockerNetwork"},"Docker network",-1)),Dt={class:"config-item"},Bt=n(()=>(0,e.createElementVNode)("label",{for:"localArguments"},"Local arguments",-1)),Pt={class:"config-item"},Ot=n(()=>(0,e.createElementVNode)("label",{for:"skipNewImageCheck"},"Skip new image Check",-1)),It={class:"config-item"},Lt=n(()=>(0,e.createElementVNode)("label",{for:"templateParameters"},"Template - parameters",-1)),At=["data-invalid"],Ut={key:0,class:"input-validation col2"},Ft=n(()=>(0,e.createElementVNode)("h3",null,"api",-1)),Jt={class:"config-item"},Rt=n(()=>(0,e.createElementVNode)("label",{for:"querystring"},"Query string",-1)),$t={class:"config-item"},xt=n(()=>(0,e.createElementVNode)("label",{for:"stageVariables"},"Stage variables",-1)),Ht=["data-invalid"],jt={key:0,class:"input-validation col2"},Wt={class:"config-item"},zt=n(()=>(0,e.createElementVNode)("label",{for:"clientCerificateId"},"Client certificate ID",-1)),Kt={class:"config-item"},Gt=n(()=>(0,e.createElementVNode)("label",{for:"apiPayload"},"API payload",-1)),qt=["data-invalid"],Xt={key:0,class:"input-validation col2"};function Qt(t,a,l,m,f,k){const y=(0,e.resolveComponent)("settings-panel");return(0,e.openBlock)(),(0,e.createElementBlock)("div",i,[(0,e.createElementVNode)("form",d,[c,(0,e.createElementVNode)("div",h,[(0,e.createElementVNode)("button",{class:"button-theme-primary",style:{width:"20%",marginRight:"27%"},onClick:a[0]||(a[0]=(0,e.withModifiers)((...o)=>t.launch&&t.launch(...o),["prevent"]))}," Invoke "),(0,e.createElementVNode)("button",{class:"button-theme-secondary",style:{marginLeft:"15px"},onClick:a[1]||(a[1]=(0,e.withModifiers)((...o)=>t.loadConfig&&t.loadConfig(...o),["prevent"]))}," Load Debug Config "),(0,e.createElementVNode)("button",{class:"button-theme-secondary",style:{marginLeft:"10px"},onClick:a[2]||(a[2]=(0,e.withModifiers)((...o)=>t.save&&t.save(...o),["prevent"]))}," Save Debug Config ")]),(0,e.createElementVNode)("p",null,[(0,e.createElementVNode)("em",null,[(0,e.createTextVNode)(" Using this form you can create, edit, and run launch-configs of "),V,(0,e.createTextVNode)(". When you "),b,(0,e.createTextVNode)(" the launch config, "+(0,e.toDisplayString)(t.company)+" Toolkit calls SAM CLI and attaches the debugger to the code running in a local Docker container. open ",1),(0,e.createElementVNode)("a",{href:"#",onClick:a[3]||(a[3]=(0,e.withModifiers)((...o)=>t.openLaunchJson&&t.openLaunchJson(...o),["prevent"]))},"launch.json"),(0,e.createTextVNode)("."),T,B,P,(0,e.createTextVNode)(' If you are accessing environment variables in your function code, ensure you input them in the "Additional fields -> Lambda -> Environment variables" section, following JSON format:'),O])]),(0,e.createVNode)(y,{id:"config-panel",title:"General configuration",description:"","start-collapsed":!1},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("div",D,[v,(0,e.createElementVNode)("div",K,[(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("form",null,[(0,e.createElementVNode)("div",F,[(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"radio-selector",type:"radio",id:"sampleEvents",value:"sampleEvents","onUpdate:modelValue":a[4]||(a[4]=o=>t.payloadOption=o),name:"payload_request",checked:""},null,512),[[e.vModelRadio,t.payloadOption]]),J,R]),(0,e.createElementVNode)("div",G,[(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"radio-selector",type:"radio",id:"localFile",value:"localFile","onUpdate:modelValue":a[5]||(a[5]=o=>t.payloadOption=o),name:"payload_request"},null,512),[[e.vModelRadio,t.payloadOption]]),$,q])])])])]),t.payloadOption==="sampleEvents"?((0,e.openBlock)(),(0,e.createElementBlock)("div",s,[g,(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{class:"button-theme-secondary",style:{width:"140px"},onClick:a[6]||(a[6]=(0,e.withModifiers)((...o)=>t.loadPayload&&t.loadPayload(...o),["prevent"]))}," Select an event"),u,(0,e.createElementVNode)("span",p,"payload from data: "+(0,e.toDisplayString)(t.payload),1),t.payload.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",r," Error parsing JSON: "+(0,e.toDisplayString)(t.payload.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0),N]),_,(0,e.withDirectives)((0,e.createElementVNode)("textarea",{style:{width:"100%","margin-bottom":"10px"},rows:"5",cols:"60","onUpdate:modelValue":a[7]||(a[7]=o=>t.payload.value=o)},null,512),[[e.vModelText,t.payload.value]])])):(0,e.createCommentVNode)("v-if",!0),t.payloadOption==="localFile"?((0,e.openBlock)(),(0,e.createElementBlock)("div",I,[M,(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("input",{type:"file",id:"file",onChange:a[8]||(a[8]=(...o)=>t.onFileChange&&t.onFileChange(...o)),style:{display:"none"},ref:"fileInput"},null,544),(0,e.createElementVNode)("button",{onClick:a[9]||(a[9]=(0,e.withModifiers)((...o)=>t.promptForFileLocation&&t.promptForFileLocation(...o),["prevent"])),class:"button-theme-secondary"}," Choose file"),(0,e.createTextVNode)("\xA0 "+(0,e.toDisplayString)(t.selectedFile||"No file selected")+" ",1),(0,e.createElementVNode)("span",L,"payload from data: "+(0,e.toDisplayString)(t.payload),1),t.payload.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",C," Error parsing JSON: "+(0,e.toDisplayString)(t.payload.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)])])):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",A,[re,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"target-types",id:"target-type-selector","onUpdate:modelValue":a[10]||(a[10]=o=>t.launchConfig.invokeTarget.target=o)},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.targetTypes,(o,E)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o.value,key:E},(0,e.toDisplayString)(o.name),9,le))),128))],512),[[e.vModelSelect,t.launchConfig.invokeTarget.target]]),(0,e.createElementVNode)("span",de,(0,e.toDisplayString)(t.launchConfig.invokeTarget.target),1)]),t.launchConfig.invokeTarget.target==="code"?((0,e.openBlock)(),(0,e.createElementBlock)("div",ce,[(0,e.createElementVNode)("div",pe,[ue,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"select-directory",type:"text","onUpdate:modelValue":a[11]||(a[11]=o=>t.launchConfig.invokeTarget.projectRoot=o),placeholder:"Enter a directory"},null,512),[[e.vModelText,t.launchConfig.invokeTarget.projectRoot]]),(0,e.createElementVNode)("span",me,"the selected directory: "+(0,e.toDisplayString)(t.launchConfig.invokeTarget.projectRoot),1)]),(0,e.createElementVNode)("div",he,[ge,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text",placeholder:"Enter the lambda handler",name:"lambda-handler",id:"lambda-handler","onUpdate:modelValue":a[12]||(a[12]=o=>t.launchConfig.invokeTarget.lambdaHandler=o)},null,512),[[e.vModelText,t.launchConfig.invokeTarget.lambdaHandler]]),(0,e.createElementVNode)("span",ve,"lamda handler :"+(0,e.toDisplayString)(t.launchConfig.invokeTarget.lambdaHandler),1)]),(0,e.createElementVNode)("div",fe,[_e,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":a[13]||(a[13]=o=>t.launchConfig.lambda.runtime=o)},[ye,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.runtimes,(o,E)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o,key:E},(0,e.toDisplayString)(o),9,be))),128))],512),[[e.vModelSelect,t.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",Ee,"runtime in data: "+(0,e.toDisplayString)(t.launchConfig.lambda.runtime),1)])])):t.launchConfig.invokeTarget.target==="template"?((0,e.openBlock)(),(0,e.createElementBlock)("div",Ve,[(0,e.createElementVNode)("div",Ne,[ke,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"template-path-button",type:"text","onUpdate:modelValue":a[14]||(a[14]=o=>t.launchConfig.invokeTarget.templatePath=o),placeholder:"Enter the template path..."},null,512),[[e.vModelText,t.launchConfig.invokeTarget.templatePath]]),(0,e.createElementVNode)("span",Ce,"Template path from data: "+(0,e.toDisplayString)(t.launchConfig.invokeTarget.templatePath),1)]),(0,e.createElementVNode)("div",we,[Se,(0,e.createElementVNode)("div",Te,[(0,e.createElementVNode)("div",null,[(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"template-logical-id",id:"template-logical-id",type:"text",placeholder:"Enter a resource","onUpdate:modelValue":a[15]||(a[15]=o=>t.launchConfig.invokeTarget.logicalId=o),class:"form-control"},null,512),[[e.vModelText,t.launchConfig.invokeTarget.logicalId]])]),(0,e.createElementVNode)("div",Me,[(0,e.createElementVNode)("button",{class:"button-theme-secondary",style:{width:"82%",marginLeft:"19%"},onClick:a[16]||(a[16]=(0,e.withModifiers)((...o)=>t.loadResource&&t.loadResource(...o),["prevent"]))}," Select Resource "),(0,e.createElementVNode)("span",De," Logical Id from data: "+(0,e.toDisplayString)(t.launchConfig.invokeTarget.logicalId),1)])])]),(0,e.createElementVNode)("div",Be,[Pe,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":a[17]||(a[17]=o=>t.launchConfig.lambda.runtime=o)},[Oe,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.runtimes,(o,E)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o,key:E},(0,e.toDisplayString)(o),9,Ie))),128))],512),[[e.vModelSelect,t.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",Le,"runtime in data: "+(0,e.toDisplayString)(t.launchConfig.lambda.runtime),1),Ae])])):t.launchConfig.invokeTarget.target==="api"?((0,e.openBlock)(),(0,e.createElementBlock)("div",Ue,[(0,e.createElementVNode)("button",{onClick:a[18]||(a[18]=(0,e.withModifiers)((...o)=>t.loadResource&&t.loadResource(...o),["prevent"]))},"Load resource"),Fe,(0,e.createElementVNode)("div",Je,[Re,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"template-path-button",type:"text","onUpdate:modelValue":a[19]||(a[19]=o=>t.launchConfig.invokeTarget.templatePath=o),placeholder:"Enter the template path..."},null,512),[[e.vModelText,t.launchConfig.invokeTarget.templatePath]]),(0,e.createElementVNode)("span",$e,"Template path from data: "+(0,e.toDisplayString)(t.launchConfig.invokeTarget.templatePath),1)]),(0,e.createElementVNode)("div",xe,[He,(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"template-logical-id",id:"template-logical-id",type:"text",placeholder:"Enter a resource","onUpdate:modelValue":a[20]||(a[20]=o=>t.launchConfig.invokeTarget.logicalId=o)},null,512),[[e.vModelText,t.launchConfig.invokeTarget.logicalId]])]),(0,e.createElementVNode)("div",je,[We,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"runtimeType","onUpdate:modelValue":a[21]||(a[21]=o=>t.launchConfig.lambda.runtime=o)},[ze,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.runtimes,(o,E)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o,key:E},(0,e.toDisplayString)(o),9,Ke))),128))],512),[[e.vModelSelect,t.launchConfig.lambda.runtime]]),(0,e.createElementVNode)("span",Ge,"runtime in data: "+(0,e.toDisplayString)(t.launchConfig.lambda.runtime),1)]),(0,e.createElementVNode)("div",qe,[Xe,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[22]||(a[22]=o=>t.launchConfig.api.path=o)},null,512),[[e.vModelText,t.launchConfig.api.path]])]),(0,e.createElementVNode)("div",Qe,[Ye,(0,e.withDirectives)((0,e.createElementVNode)("select",{name:"http-method","onUpdate:modelValue":a[23]||(a[23]=o=>t.launchConfig.api.httpMethod=o)},[Ze,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.httpMethods,(o,E)=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{value:o.toLowerCase(),key:E},(0,e.toDisplayString)(o),9,et))),128))],512),[[e.vModelSelect,t.launchConfig.api.httpMethod]]),(0,e.createElementVNode)("span",tt,(0,e.toDisplayString)(t.launchConfig.api.httpMethod),1)]),(0,e.createElementVNode)("div",at,[ot,(0,e.withDirectives)((0,e.createElementVNode)("input",{name:"query-string",id:"query-string",type:"text",cols:"15",rows:"2",placeholder:"Enter a query","onUpdate:modelValue":a[24]||(a[24]=o=>t.launchConfig.api.querystring=o)},null,512),[[e.vModelText,t.launchConfig.api.querystring]])]),(0,e.createElementVNode)("div",nt,[it,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[25]||(a[25]=o=>t.headers.value=o),placeholder:"Enter as valid JSON","data-invalid":!!t.headers.errorMsg},null,8,st),[[e.vModelText,t.headers.value]]),t.headers.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",rt," Error parsing JSON: "+(0,e.toDisplayString)(t.headers.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)])])):((0,e.openBlock)(),(0,e.createElementBlock)("div",lt,"Select an invoke target"))]),_:1}),(0,e.createVNode)(y,{id:"more-fields-panel",title:"Additional fields",description:"","start-collapsed":""},{default:(0,e.withCtx)(()=>[dt,(0,e.createElementVNode)("div",ct,[pt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[26]||(a[26]=o=>t.launchConfig.aws.credentials=o)},null,512),[[e.vModelText,t.launchConfig.aws.credentials]])]),(0,e.createElementVNode)("div",ut,[mt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[27]||(a[27]=o=>t.launchConfig.aws.region=o)},null,512),[[e.vModelText,t.launchConfig.aws.region]])]),ht,(0,e.createElementVNode)("div",gt,[vt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text",placeholder:"Enter as valid JSON","onUpdate:modelValue":a[28]||(a[28]=o=>t.environmentVariables.value=o),"data-invalid":!!t.environmentVariables.errorMsg},null,8,ft),[[e.vModelText,t.environmentVariables.value]]),t.environmentVariables.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",_t," Error parsing JSON: "+(0,e.toDisplayString)(t.environmentVariables.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",yt,[bt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"number","onUpdate:modelValue":a[29]||(a[29]=o=>t.launchConfig.lambda.memoryMb=o)},null,512),[[e.vModelText,t.launchConfig.lambda.memoryMb,void 0,{number:!0}]])]),(0,e.createElementVNode)("div",Et,[Vt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"number","onUpdate:modelValue":a[30]||(a[30]=o=>t.launchConfig.lambda.timeoutSec=o)},null,512),[[e.vModelText,t.launchConfig.lambda.timeoutSec,void 0,{number:!0}]])]),(0,e.createCommentVNode)(` <div class="config-item">
                    <label for="pathMappings">Path Mappings</label>
                    <input type="text" v-model="launchConfig.lambda.pathMappings" >
                </div> `),Nt,(0,e.createElementVNode)("div",kt,[Ct,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[31]||(a[31]=o=>t.launchConfig.sam.buildArguments=o),placeholder:"Enter as a comma separated list"},null,512),[[e.vModelText,t.launchConfig.sam.buildArguments]])]),(0,e.createElementVNode)("div",wt,[St,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"checkbox",name:"containerBuild",id:"containerBuild","onUpdate:modelValue":a[32]||(a[32]=o=>t.containerBuild=o)},null,512),[[e.vModelCheckbox,t.containerBuild]])]),(0,e.createElementVNode)("div",Tt,[Mt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[33]||(a[33]=o=>t.launchConfig.sam.dockerNetwork=o)},null,512),[[e.vModelText,t.launchConfig.sam.dockerNetwork]])]),(0,e.createElementVNode)("div",Dt,[Bt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[34]||(a[34]=o=>t.launchConfig.sam.localArguments=o),placeholder:"Enter as a comma separated list"},null,512),[[e.vModelText,t.launchConfig.sam.localArguments]])]),(0,e.createElementVNode)("div",Pt,[Ot,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"checkbox",name:"skipNewImageCheck",id:"skipNewImageCheck","onUpdate:modelValue":a[35]||(a[35]=o=>t.skipNewImageCheck=o)},null,512),[[e.vModelCheckbox,t.skipNewImageCheck]])]),(0,e.createElementVNode)("div",It,[Lt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[36]||(a[36]=o=>t.parameters.value=o),"data-invalid":!!t.parameters.errorMsg},null,8,At),[[e.vModelText,t.parameters.value]]),t.parameters.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",Ut," Error parsing JSON: "+(0,e.toDisplayString)(t.parameters.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),Ft,(0,e.createElementVNode)("div",Jt,[Rt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[37]||(a[37]=o=>t.launchConfig.api.querystring=o)},null,512),[[e.vModelText,t.launchConfig.api.querystring]])]),(0,e.createElementVNode)("div",$t,[xt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[38]||(a[38]=o=>t.stageVariables.value=o),"data-invalid":!!t.stageVariables.errorMsg,placeholder:"Enter as valid JSON"},null,8,Ht),[[e.vModelText,t.stageVariables.value]]),t.stageVariables.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",jt," Error parsing JSON: "+(0,e.toDisplayString)(t.stageVariables.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",Wt,[zt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[39]||(a[39]=o=>t.launchConfig.api.clientCertificateId=o)},null,512),[[e.vModelText,t.launchConfig.api.clientCertificateId]])]),(0,e.createElementVNode)("div",Kt,[Gt,(0,e.withDirectives)((0,e.createElementVNode)("input",{type:"text","onUpdate:modelValue":a[40]||(a[40]=o=>t.apiPayload.value=o),placeholder:"Enter as valid JSON","data-invalid":!!t.apiPayload.errorMsg},null,8,qt),[[e.vModelText,t.apiPayload.value]]),t.apiPayload.errorMsg?((0,e.openBlock)(),(0,e.createElementBlock)("div",Xt," Error parsing JSON: "+(0,e.toDisplayString)(t.apiPayload.errorMsg),1)):(0,e.createCommentVNode)("v-if",!0)])]),_:1})])])}const ua=t=>(_pushScopeId("data-v-3f832b9c"),t=t(),_popScopeId(),t),Yt=["id"],Zt={class:"header"},ea=["id"],ta=["for"],aa={class:"preload-transition collapse-button icon icon-vscode-chevron-up",ref:"icon"},oa={class:"settings-title"},na={class:"soft no-spacing mt-8"},ia={ref:"subPane",class:"sub-pane"};function sa(t,a,l,m,f,k){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:t.id,class:"settings-panel"},[(0,e.createElementVNode)("div",Zt,[t.collapseable||t.startCollapsed?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:0,id:t.buttonId,style:{display:"none"},type:"checkbox","onUpdate:modelValue":a[0]||(a[0]=y=>t.collapsed=y)},null,8,ea)),[[e.vModelCheckbox,t.collapsed]]):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("label",{for:t.buttonId,class:"panel-header"},[(0,e.createElementVNode)("i",aa,null,512),(0,e.createElementVNode)("span",oa,(0,e.toDisplayString)(t.title),1)],8,ta),(0,e.createElementVNode)("p",na,(0,e.toDisplayString)(t.description),1)]),(0,e.createVNode)(e.Transition,{onEnter:t.updateHeight,onBeforeLeave:t.updateHeight,name:t.collapseable||t.startCollapsed?"collapse":"",persisted:""},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",ia,[(0,e.renderSlot)(t.$slots,"default",{},void 0,!0)],512),[[e.vShow,!t.collapsed]])]),_:3},8,["onEnter","onBeforeLeave","name"])],8,Yt)}const x=new Set;window.addEventListener("remount",()=>x.clear());const Z={created(){if(this.$data===void 0)return;const t=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const a=this.id??`${this.name??`DEFAULT-${x.size}`}-${this.$options._count}`;if(this.$options._unid=a,x.has(a)){console.warn(`Component "${a}" already exists. State-saving functionality will be disabled.`);return}x.add(a);const l=t[a]??{};Object.keys(this.$data).forEach(m=>{this.$data[m]=l[m]??this.$data[m]}),Object.keys(this.$data).forEach(m=>{this.$watch(m,f=>{const k=vscode.getState()??{},y=Object.assign(k[a]??{},{[m]:f!==void 0?JSON.parse(JSON.stringify(f)):void 0});vscode.setState(Object.assign(k,{[a]:y}))},{deep:!0})})}};let ee=0;const ra=(0,e.defineComponent)({name:"settings-panel",props:{id:String,startCollapsed:Boolean,collapseable:Boolean,title:String,description:String},data(){return ee+=1,{collapsed:this.$props.startCollapsed??!1,buttonId:`settings-panel-button-${ee}`,lastHeight:void 0}},mixins:[Z],methods:{updateHeight(t){t.style&&(this.lastHeight=t.scrollHeight,t.style.setProperty("--max-height",`${this.lastHeight}px`))}},mounted(){this.subPane=this.$refs.subPane,this.lastHeight=this.collapsed?this.lastHeight:this.subPane?.scrollHeight??this.lastHeight,this.$nextTick(()=>{setTimeout(()=>{this.$refs.icon?.classList.remove("preload-transition")},100)})}});var ha=S(2671),te=S(7433);const la=(0,te.A)(ra,[["render",sa],["__scopeId","data-v-3f832b9c"]]);class H{static registerGlobalCommands(){const a=new Event("remount");window.addEventListener("message",l=>{const{command:m}=l.data;m==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(f=>this.removeListener(f)),window.dispatchEvent(a))})}static addListener(a){this.messageListeners.add(a),window.addEventListener("message",a)}static removeListener(a){this.messageListeners.delete(a),window.removeEventListener("message",a)}static sendRequest(a,l,m){const f=JSON.parse(JSON.stringify(m)),k=new Promise((y,o)=>{const E=W=>{const U=W.data;if(a===U.id)if(this.removeListener(E),window.clearTimeout(j),U.error===!0){const pa=JSON.parse(U.data);o(new Error(pa.message))}else U.event?(typeof m[0]!="function"&&o(new Error(`Expected frontend event handler to be a function: ${l}`)),y(this.registerEventHandler(l,m[0]))):y(U.data)},j=setTimeout(()=>{this.removeListener(E),o(new Error(`Timed out while waiting for response: id: ${a}, command: ${l}`))},3e5);this.addListener(E)});return vscode.postMessage({id:a,command:l,data:f}),k}static registerEventHandler(a,l){const m=f=>{const k=f.data;if(k.command===a){if(!k.event)throw new Error(`Expected backend handler to be an event emitter: ${a}`);l(k.data)}};return this.addListener(m),{dispose:()=>this.removeListener(m)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(a,l)=>{if(typeof l!="string"){console.warn(`Tried to index webview client with non-string property: ${String(l)}`);return}if(l==="init"){const f=vscode.getState()??{};if(f.__once)return()=>Promise.resolve();vscode.setState(Object.assign(f,{__once:!0}))}const m=(this.counter++).toString();return(...f)=>this.sendRequest(m,l,f)}})}}H.counter=0,H.initialized=!1,H.messageListeners=new Set;const w=H.create();function ae(t){return{type:"aws-sam",request:"direct-invoke",name:"",aws:{credentials:"",region:"",...t?.aws?t.aws:{}},invokeTarget:{target:"template",templatePath:"",logicalId:"",lambdaHandler:"",projectRoot:"",...t?.invokeTarget},lambda:{runtime:t?.lambda?.runtime,memoryMb:void 0,timeoutSec:void 0,environmentVariables:{},...t?.lambda,payload:{json:t?.lambda?.payload?.json?t.lambda.payload.json:{},path:t?.lambda?.payload?.path?t.lambda.payload.path:""}},sam:{buildArguments:void 0,containerBuild:!1,dockerNetwork:"",localArguments:void 0,skipNewImageCheck:!1,...t?.sam?t.sam:{},template:{parameters:t?.sam?.template?.parameters?t.sam.template.parameters:{}}},api:{path:"",httpMethod:"get",clientCertificateId:"",querystring:"",headers:{},stageVariables:{},...t?.api?t.api:{},payload:{json:t?.api?.payload?.json?t.api.payload.json:{},path:t?.api?.payload?.path?t.api.payload.path:""}}}}function oe(){return{containerBuild:!1,skipNewImageCheck:!1,launchConfig:ae(),payload:{value:"",errorMsg:""},apiPayload:{value:"",errorMsg:""},environmentVariables:{value:"",errorMsg:""},parameters:{value:"",errorMsg:""},headers:{value:"",errorMsg:""},stageVariables:{value:"",errorMsg:""},selectedConfig:{index:0,config:void 0,label:"new-config"},selectedTestEvent:"",TestEvents:[],showNameInput:!1,newTestEventName:""}}const da=(0,e.defineComponent)({name:"sam-invoke",components:{settingsPanel:la},created(){this.setUpWebView()},mixins:[Z],data(){return{...oe(),msg:"Hello",company:"",targetTypes:[{name:"Code",value:"code"},{name:"Template",value:"template"},{name:"API Gateway (Template)",value:"api"}],runtimes:[],httpMethods:["GET","POST","PUT","DELETE","HEAD","OPTIONS","PATCH"],payloadOption:"sampleEvents",selectedFile:"",selectedFilePath:"",resourceData:void 0}},methods:{resetJsonErrors(){this.payload.errorMsg="",this.environmentVariables.errorMsg="",this.headers.errorMsg="",this.stageVariables.errorMsg=""},async launch(){const t=this.formatConfig();if(!t)return;const a=this.resourceData?.source;w.invokeLaunchConfig(t,a).catch(l=>{console.error(`invokeLaunchConfig failed: ${l.message}`)})},save(){const t=this.formatConfig();t&&w.saveLaunchConfig(t).catch(a=>{console.error("saveLaunchConfig failed: %s",a.message)})},loadConfig(){w.loadSamLaunchConfig().then(t=>this.parseConfig(t),t=>{console.error("client.loadSamLaunchConfig failed: %s",t.message)})},async parseConfig(t){if(!t)return;const a=this.company;this.clearForm(),this.launchConfig=ae(t),t.lambda?.payload&&(this.payload.value=JSON.stringify(t.lambda.payload.json,void 0,4));const l=t.sam?.localArguments;if(!l&&this.payload.value&&(this.payloadOption="sampleEvents",this.selectedFile=""),l?.includes("-e")||l?.includes("--event")){const m=l.findIndex(f=>f==="-e"||f==="--event");m!==-1&&l[m+1]&&(this.payloadOption="localFile",this.selectedFile=await w.getFileName(l[m+1]))}t.lambda?.environmentVariables&&(this.environmentVariables.value=JSON.stringify(t.lambda?.environmentVariables)),t.sam?.template?.parameters&&(this.parameters.value=JSON.stringify(t.sam?.template?.parameters)),t.api?.headers&&(this.headers.value=JSON.stringify(t.api?.headers)),t.api?.stageVariables&&(this.stageVariables.value=JSON.stringify(t.api?.stageVariables)),this.containerBuild=t.sam?.containerBuild??!1,this.skipNewImageCheck=t.sam?.skipNewImageCheck??!1,this.msg=`Loaded config: ${t.name}`,this.company=a},loadPayload(){this.resetJsonErrors(),w.getSamplePayload().then(t=>{!t||(this.payload.value=JSON.stringify(JSON.parse(t),void 0,4))},t=>{console.error("client.getSamplePayload failed: %s",t.message)})},loadResource(){this.resetJsonErrors(),w.getTemplate().then(t=>{!t||(this.launchConfig.invokeTarget.target="template",this.launchConfig.invokeTarget.logicalId=t.logicalId,this.launchConfig.invokeTarget.templatePath=t.template)},t=>{console.error("client.getTemplate failed: %s",t.message)})},formatFieldToStringArray(t){if(!t)return;const a=/\s*,\s*/g;return t.trim().split(a)},formatStringtoJSON(t){if(t.errorMsg="",t.value)try{return JSON.parse(t.value)}catch(a){throw t.errorMsg=a.message,a}},async openLaunchJson(){await w.openLaunchConfig()},onFileChange(t){const a=t.target;if(a.files&&a.files.length>0){const l=a.files[0];this.selectedFile=l.name,l.text().then(m=>{this.payload.value=m}).catch(m=>{console.error("Error reading file:",m)})}},async promptForFileLocation(){const t=await w.promptFile();if(t){this.selectedFile=t.selectedFile,this.launchConfig.sam=this.launchConfig.sam||{},this.launchConfig.sam.localArguments=this.launchConfig.sam.localArguments||[];const a=this.launchConfig.sam.localArguments.findIndex(l=>l==="-e"||l==="--event");a!==-1&&this.launchConfig.sam.localArguments[a+1]?this.launchConfig.sam.localArguments[a+1]=t.selectedFilePath:this.launchConfig.sam.localArguments.push("-e",t.selectedFilePath)}},showNameField(){this.showNameInput=!0},setUpWebView(){w.init().then(t=>this.parseConfig(t),t=>{console.error("client.init failed: %s",t.message)}),this.launchConfig.invokeTarget.templatePath===""&&w.getResourceData().then(t=>{this.resourceData=t,this.launchConfig&&this.resourceData&&(this.launchConfig.invokeTarget.logicalId=this.resourceData.logicalId,this.launchConfig.invokeTarget.templatePath=this.resourceData.location,this.launchConfig.invokeTarget.lambdaHandler=this.resourceData.handler,this.launchConfig.lambda&&(this.launchConfig.lambda.runtime=this.resourceData.runtime))},t=>{console.error("client.getResourceData failed: %s",t.message)}),w.getRuntimes().then(t=>{this.runtimes=t},t=>{console.error("client.getRuntimes failed: %s",t.message)}),w.getCompanyName().then(t=>{this.company=t},t=>{console.error("client.getCompanyName failed: %s",t.message)})},formatConfig(){this.resetJsonErrors();let t,a,l,m,f,k;try{t=this.formatStringtoJSON(this.payload),a=this.formatStringtoJSON(this.environmentVariables),l=this.formatStringtoJSON(this.headers),m=this.formatStringtoJSON(this.stageVariables),f=this.formatStringtoJSON(this.parameters),k=this.formatStringtoJSON(this.apiPayload)}catch{return}const y=JSON.parse(JSON.stringify(this.launchConfig)),o=y.sam?.localArguments,E=()=>{if(o){const j=o?.findIndex(W=>W==="-e"||W==="--event");j!==-1&&o?.splice(j,2)}};return o&&(this.payload&&this.payloadOption!=="localFile"?E():this.payloadOption==="localFile"&&this.selectedFile?t=void 0:E()),{...y,lambda:{...y.lambda,payload:{...y.payload,json:t},environmentVariables:a},sam:{...y.sam,buildArguments:this.formatFieldToStringArray(y.sam?.buildArguments?.toString()),localArguments:this.formatFieldToStringArray(y.sam?.localArguments?.toString()),containerBuild:this.containerBuild,skipNewImageCheck:this.skipNewImageCheck,template:{parameters:f}},api:y.api?{...y.api,headers:l,stageVariables:m,payload:{json:k}}:void 0}},clearForm(){const t=oe();Object.keys(t).forEach(a=>{this[a]=t[a]})}}});var va=S(2180);const ca=(0,te.A)(da,[["render",Qt],["__scopeId","data-v-8e050856"]]);const ne=()=>(0,e.createApp)(ca),ie=ne();ie.mount("#vue-app"),window.addEventListener("remount",()=>{ie.unmount(),ne().mount("#vue-app")})})();var Q=this;for(var Y in z)Q[Y]=z[Y];z.__esModule&&Object.defineProperty(Q,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

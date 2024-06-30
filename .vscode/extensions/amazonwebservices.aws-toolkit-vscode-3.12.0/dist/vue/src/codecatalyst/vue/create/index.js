(()=>{var ne={362:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var o=s(9601),i=s.n(o),d=s(2609),g=s.n(d),h=g()(i());h.push([e.id,`
#compute-grid[data-v-6c191c15] {
    display: grid;
    justify-content: left;
    grid-template-areas:
        'size vpc'
        'timeout volume';
    gap: 16px 24px;
}
#edit-compute-settings[data-v-6c191c15] {
    margin-top: 16px;
}
`,""]);const b=h},8122:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var o=s(9601),i=s.n(o),d=s(2609),g=s.n(d),h=g()(i());h.push([e.id,`
html {
    overflow-y: scroll;
}
body {
    padding-right: 12px;
    max-width: 700px;
}
`,""]);const b=h},9020:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var o=s(9601),i=s.n(o),d=s(2609),g=s.n(d),h=g()(i());h.push([e.id,`
#configure-header[data-v-3bb2cf6f] {
    padding: 16px 0 0 0;
    background-color: var(--vscode-editor-background);
    z-index: 1;
    position: relative;
}
#alias-input[data-v-3bb2cf6f] {
    min-width: 300px;
}
#submit-buttons[data-v-3bb2cf6f] {
    display: flex;
    justify-content: end;
    column-gap: 16px;
}
`,""]);const b=h},6540:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var o=s(9601),i=s.n(o),d=s(2609),g=s.n(d),h=g()(i());h.push([e.id,`
.picker {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}
.source-pickers {
    margin-top: 16px;
    display: flex;
    flex-flow: wrap;
    column-gap: 16px;
}
.modes {
    display: flex;
    column-gap: 16px;
}
.flex-sizing {
    flex: 1;
}
.mode-container {
    display: flex;
    flex: 1;
    border: 1px solid gray;
    padding: 8px;
    max-width: calc((1 / 3 * 100%) - (2 / 3 * 32px));
    align-items: center;
}
.config-item {
    display: inline;
    margin-left: 8px;
}
.mode-container[data-disabled='false'] {
    border: 1px solid var(--vscode-focusBorder);
}
body.vscode-dark .mode-container[data-disabled='true'] .config-item {
    filter: brightness(0.8);
}
body.vscode-light .mode-container[data-disabled='true'] .config-item {
    filter: brightness(1.2);
}
#repository-url {
    min-width: 300px;
}
#branch-input {
    min-width: 300px;
    width: 100%;
    box-sizing: border-box;
}
.project-button {
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
    font-weight: bold;
}
.edit-icon {
    color: #0078d7;
}
`,""]);const b=h},9460:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>b});var o=s(9601),i=s.n(o),d=s(2609),g=s.n(d),h=g()(i());h.push([e.id,`
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
`,""]);const b=h},2609:e=>{"use strict";e.exports=function(a){var s=[];return s.toString=function(){return this.map(function(i){var d="",g=typeof i[5]<"u";return i[4]&&(d+="@supports (".concat(i[4],") {")),i[2]&&(d+="@media ".concat(i[2]," {")),g&&(d+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),d+=a(i),g&&(d+="}"),i[2]&&(d+="}"),i[4]&&(d+="}"),d}).join("")},s.i=function(i,d,g,h,b){typeof i=="string"&&(i=[[null,i,void 0]]);var M={};if(g)for(var O=0;O<this.length;O++){var $=this[O][0];$!=null&&(M[$]=!0)}for(var w=0;w<i.length;w++){var f=[].concat(i[w]);g&&M[f[0]]||(typeof b<"u"&&(typeof f[5]>"u"||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=b),d&&(f[2]&&(f[1]="@media ".concat(f[2]," {").concat(f[1],"}")),f[2]=d),h&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=h):f[4]="".concat(h)),s.push(f))}},s}},9601:e=>{"use strict";e.exports=function(a){return a[1]}},4407:(e,a)=>{"use strict";var s;s={value:!0},a.Z=(o,i)=>{const d=o.__vccOpts||o;for(const[g,h]of i)d[g]=h;return d}},7859:(e,a,s)=>{var o=s(362);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(4940).Z,d=i("816894a6",o,!1,{})},155:(e,a,s)=>{var o=s(8122);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(4940).Z,d=i("d43e02ce",o,!1,{})},9428:(e,a,s)=>{var o=s(9020);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(4940).Z,d=i("ecde1922",o,!1,{})},4743:(e,a,s)=>{var o=s(6540);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(4940).Z,d=i("1a19c2a8",o,!1,{})},47:(e,a,s)=>{var o=s(9460);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);var i=s(4940).Z,d=i("48160952",o,!1,{})},4940:(e,a,s)=>{"use strict";s.d(a,{Z:()=>H});function o(r,m){for(var c=[],u={},l=0;l<m.length;l++){var N=m[l],v=N[0],C=N[1],B=N[2],W=N[3],S={id:r+":"+l,css:C,media:B,sourceMap:W};u[v]?u[v].parts.push(S):c.push(u[v]={id:v,parts:[S]})}return c}var i=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},g=i&&(document.head||document.getElementsByTagName("head")[0]),h=null,b=0,M=!1,O=function(){},$=null,w="data-vue-ssr-id",f=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function H(r,m,c,u){M=c,$=u||{};var l=o(r,m);return j(l),function(v){for(var C=[],B=0;B<l.length;B++){var W=l[B],S=d[W.id];S.refs--,C.push(S)}v?(l=o(r,v),j(l)):l=[];for(var B=0;B<C.length;B++){var S=C[B];if(S.refs===0){for(var K=0;K<S.parts.length;K++)S.parts[K]();delete d[S.id]}}}}function j(r){for(var m=0;m<r.length;m++){var c=r[m],u=d[c.id];if(u){u.refs++;for(var l=0;l<u.parts.length;l++)u.parts[l](c.parts[l]);for(;l<c.parts.length;l++)u.parts.push(U(c.parts[l]));u.parts.length>c.parts.length&&(u.parts.length=c.parts.length)}else{for(var N=[],l=0;l<c.parts.length;l++)N.push(U(c.parts[l]));d[c.id]={id:c.id,refs:1,parts:N}}}}function I(){var r=document.createElement("style");return r.type="text/css",g.appendChild(r),r}function U(r){var m,c,u=document.querySelector("style["+w+'~="'+r.id+'"]');if(u){if(M)return O;u.parentNode.removeChild(u)}if(f){var l=b++;u=h||(h=I()),m=z.bind(null,u,l,!1),c=z.bind(null,u,l,!0)}else u=I(),m=T.bind(null,u),c=function(){u.parentNode.removeChild(u)};return m(r),function(v){if(v){if(v.css===r.css&&v.media===r.media&&v.sourceMap===r.sourceMap)return;m(r=v)}else c()}}var Z=function(){var r=[];return function(m,c){return r[m]=c,r.filter(Boolean).join(`
`)}}();function z(r,m,c,u){var l=c?"":u.css;if(r.styleSheet)r.styleSheet.cssText=Z(m,l);else{var N=document.createTextNode(l),v=r.childNodes;v[m]&&r.removeChild(v[m]),v.length?r.insertBefore(N,v[m]):r.appendChild(N)}}function T(r,m){var c=m.css,u=m.media,l=m.sourceMap;if(u&&r.setAttribute("media",u),$.ssrId&&r.setAttribute(w,m.id),l&&(c+=`
/*# sourceURL=`+l.sources[0]+" */",c+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),r.styleSheet)r.styleSheet.cssText=c;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(c))}}}},G={};function P(e){var a=G[e];if(a!==void 0)return a.exports;var s=G[e]={id:e,exports:{}};return ne[e](s,s.exports,P),s.exports}P.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return P.d(a,{a}),a},P.d=(e,a)=>{for(var s in a)P.o(a,s)&&!P.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},P.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),P.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var R={};(()=>{"use strict";P.r(R);const e=Vue,a=t=>((0,e.pushScopeId)("data-v-3bb2cf6f"),t=t(),(0,e.popScopeId)(),t),s=a(()=>(0,e.createElementVNode)("div",{id:"configure-header"},[(0,e.createElementVNode)("h1",null,"Create a CodeCatalyst Dev Environment"),(0,e.createCommentVNode)("TODO: add link"),(0,e.createElementVNode)("span",{style:{"font-size":"0.95em"}},[(0,e.createTextVNode)(" Create an on-demand AWS instance to work on your code in the cloud. "),(0,e.createElementVNode)("a",{href:"https://docs.aws.amazon.com/toolkit-for-vscode/latest/userguide/codecatalyst-devenvironment.html"}," Learn more about CodeCatalyst Dev Environments. ")])],-1)),o=a(()=>(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"alias-input"},"Alias",-1)),i={id:"submit-buttons",class:"mb-16"},d=["disabled"],g=["disabled"];function h(t,n,_,y,E,V){const p=(0,e.resolveComponent)("source-panel"),x=(0,e.resolveComponent)("settings-panel"),L=(0,e.resolveComponent)("compute-panel");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[s,(0,e.createVNode)(x,{id:"source-panel",title:"Source Code"},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(p,{modelValue:t.source,"onUpdate:modelValue":n[0]||(n[0]=D=>t.source=D)},null,8,["modelValue"])]),_:1}),(0,e.createVNode)(x,{id:"alias-panel",title:"Alias",description:"Enter an alias to identify the Dev Environment. (Optional but recommended)"},{default:(0,e.withCtx)(()=>[o,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"alias-input",type:"text","onUpdate:modelValue":n[1]||(n[1]=D=>t.alias=D)},null,512),[[e.vModelText,t.alias]])]),_:1}),(0,e.createVNode)(x,{id:"configuration-panel",title:"Dev Environment Configuration",description:"All settings except Storage can be changed in settings after creation."},{default:(0,e.withCtx)(()=>[(0,e.createVNode)(L,{modelValue:t.compute,"onUpdate:modelValue":n[2]||(n[2]=D=>t.compute=D),mode:"create",onEditSettings:t.editCompute},null,8,["modelValue","onEditSettings"])]),_:1}),(0,e.createElementVNode)("div",i,[(0,e.createElementVNode)("button",{class:"button-theme-secondary",onClick:n[3]||(n[3]=(...D)=>t.cancel&&t.cancel(...D)),disabled:t.creating},"Cancel",8,d),(0,e.createElementVNode)("button",{onClick:n[4]||(n[4]=(...D)=>t.submit&&t.submit(...D)),disabled:!t.canCreate},(0,e.toDisplayString)(t.creating?"Creating...":"Create Dev Environment"),9,g)])],64)}const b=t=>((0,e.pushScopeId)("data-v-6c191c15"),t=t(),(0,e.popScopeId)(),t),M={id:"compute-grid"},O={id:"size",style:{"grid-area":"size"}},$=b(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Compute",-1)),w=b(()=>(0,e.createElementVNode)("br",null,null,-1)),f={id:"timeout",style:{"grid-area":"timeout"}},H=b(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Timeout",-1)),j={id:"volume",style:{"grid-area":"volume"}},I=b(()=>(0,e.createElementVNode)("span",{class:"label-context soft"},"Storage",-1)),U={key:0,class:"mt-0 mb-0"},Z={key:1};function z(t,n,_,y,E,V){return(0,e.openBlock)(),(0,e.createElementBlock)("div",null,[(0,e.createElementVNode)("div",M,[(0,e.createElementVNode)("div",O,[(0,e.createElementVNode)("div",null,[$,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(t.instance.name),1),w,(0,e.createTextVNode)(" "+(0,e.toDisplayString)(t.instance.specs),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-size",class:"button-theme-secondary mt-8",onClick:n[0]||(n[0]=p=>t.$emit("editSettings","instanceType"))}," Edit Compute ")]),(0,e.createElementVNode)("div",f,[(0,e.createElementVNode)("div",null,[H,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(t.timeout),1)]),(0,e.createElementVNode)("button",{type:"button",id:"edit-timeout",class:"button-theme-secondary mt-8",onClick:n[1]||(n[1]=p=>t.$emit("editSettings","inactivityTimeoutMinutes"))}," Edit Timeout ")]),(0,e.createElementVNode)("div",j,[I,(0,e.createElementVNode)("b",null,(0,e.toDisplayString)(t.storage),1),t.mode==="update"?((0,e.openBlock)(),(0,e.createElementBlock)("p",U,(0,e.toDisplayString)(t.readonlyText),1)):((0,e.openBlock)(),(0,e.createElementBlock)("div",Z,[(0,e.createElementVNode)("button",{type:"button",id:"edit-storage",class:"button-theme-secondary mt-8",onClick:n[2]||(n[2]=p=>t.$emit("editSettings","persistentStorage"))}," Edit Storage Size ")]))])])])}class T{static registerGlobalCommands(){const n=new Event("remount");window.addEventListener("message",_=>{const{command:y}=_.data;y==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(E=>this.removeListener(E)),window.dispatchEvent(n))})}static addListener(n){this.messageListeners.add(n),window.addEventListener("message",n)}static removeListener(n){this.messageListeners.delete(n),window.removeEventListener("message",n)}static sendRequest(n,_,y){const E=JSON.parse(JSON.stringify(y)),V=new Promise((p,x)=>{const L=et=>{const A=et.data;if(n===A.id)if(this.removeListener(L),window.clearTimeout(D),A.error===!0){const tt=JSON.parse(A.data);x(new Error(tt.message))}else A.event?(typeof y[0]!="function"&&x(new Error(`Expected frontend event handler to be a function: ${_}`)),p(this.registerEventHandler(_,y[0]))):p(A.data)},D=setTimeout(()=>{this.removeListener(L),x(new Error(`Timed out while waiting for response: id: ${n}, command: ${_}`))},3e5);this.addListener(L)});return vscode.postMessage({id:n,command:_,data:E}),V}static registerEventHandler(n,_){const y=E=>{const V=E.data;if(V.command===n){if(!V.event)throw new Error(`Expected backend handler to be an event emitter: ${n}`);_(V.data)}};return this.addListener(y),{dispose:()=>this.removeListener(y)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(n,_)=>{if(typeof _!="string"){console.warn(`Tried to index webview client with non-string property: ${String(_)}`);return}if(_==="init"){const E=vscode.getState()??{};if(E.__once)return()=>Promise.resolve();vscode.setState(Object.assign(E,{__once:!0}))}const y=(this.counter++).toString();return(...E)=>this.sendRequest(y,_,E)}})}}T.counter=0,T.initialized=!1,T.messageListeners=new Set;const r=new Set;window.addEventListener("remount",()=>r.clear());const c={created(){if(this.$data===void 0)return;const t=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const n=this.id??`${this.name??`DEFAULT-${r.size}`}-${this.$options._count}`;if(this.$options._unid=n,r.has(n)){console.warn(`Component "${n}" already exists. State-saving functionality will be disabled.`);return}r.add(n);const _=t[n]??{};Object.keys(this.$data).forEach(y=>{this.$data[y]=_[y]??this.$data[y]}),Object.keys(this.$data).forEach(y=>{this.$watch(y,E=>{const V=vscode.getState()??{},p=Object.assign(V[n]??{},{[y]:E!==void 0?JSON.parse(JSON.stringify(E)):void 0});vscode.setState(Object.assign(V,{[n]:p}))},{deep:!0})})}};function u(t){return class{constructor(n={}){Object.assign(this,t,n)}}}function l(t){return Object}const N=T.create(),v={inactivityTimeoutMinutes:15,instanceType:"dev.standard1.small",persistentStorage:{sizeInGiB:16}},C=u(v),B=(0,e.defineComponent)({name:"compute-panel",props:{modelValue:{type:l(C),default:new C},mode:{type:String,default:"update"}},data(){return{changed:{},readonlyText:"Can't be changed after creation.",descriptions:{},originalData:void 0}},mixins:[c],created(){N.getAllInstanceDescriptions().then(t=>this.descriptions=t)},watch:{model(t){if(!(t===void 0||this.originalData===void 0))for(const[n,_]of Object.entries(t))this.changed[n]=this.originalData[n]!==_},modelValue(){this.originalData??=this.modelValue}},methods:{getNeedsRestartText(t){return this.mode==="update"&&this.changed[t]?" (needs restart)":""}},computed:{model(){return this.modelValue},instance(){const t=this.model.instanceType,n=this.descriptions[t]?{...this.descriptions[t]}:{name:"",specs:""},_=this.getNeedsRestartText("instanceType")||(t===v.instanceType?" (default)":"");return n.name=`${n.name}${_}`,n},timeout(){const t=this.model.inactivityTimeoutMinutes,n=`${t} minutes`,_=this.getNeedsRestartText("inactivityTimeoutMinutes")||(t===v.inactivityTimeoutMinutes?" (default)":"");return`${n}${_}`},storage(){const t=this.model.persistentStorage.sizeInGiB,n=`${t} GB`,_=t===v.persistentStorage.sizeInGiB?" (default)":"";return`${n}${_}`}},emits:{editSettings:t=>t!==void 0}});var W=P(7859),S=P(4407);const se=(0,S.Z)(B,[["render",z],["__scopeId","data-v-6c191c15"]]),oe={class:"modes mb-16"},ae=["data-disabled"],ie=(0,e.createElementVNode)("span",{class:"ml-8 option-label",style:{padding:"0px"}},"Use an existing CodeCatalyst repository",-1),re=["data-disabled"],de=(0,e.createElementVNode)("span",{class:"ml-8 option-label",style:{padding:"0px"}},"Create an empty Dev Environment",-1),le={key:0,class:"source-pickers"},ce={class:"modes flex-sizing mt-16"},ue={class:"flex-sizing mt-8"},_e=(0,e.createElementVNode)("label",{class:"option-label soft"},"Space",-1),pe=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),me={class:"flex-sizing mt-8"},he=(0,e.createElementVNode)("label",{class:"option-label soft"},"Project",-1),fe=["disabled"],ve=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),ge={class:"modes flex-sizing mt-16"},ye={class:"flex-sizing"},be=(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"branch-picker"},"Branch",-1),Ee=["disabled"],Pe={disabled:"",value:void 0},Se=["value"],Ne={class:"flex-sizing"},Ve=(0,e.createElementVNode)("label",{class:"options-label soft mb-8",style:{display:"block"},for:"branch-input"},"Create Branch - Optional for CodeCatalyst Repos",-1),Ce=["placeholder","disabled"],Be={key:0,class:"input-validation"},De={key:1,class:"source-pickers"},we={class:"modes flex-sizing mt-16"},Te={class:"flex-sizing mt-8"},Me=(0,e.createElementVNode)("label",{class:"option-label soft"},"Space",-1),Oe=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1),$e={class:"flex-sizing mt-8"},xe=(0,e.createElementVNode)("label",{class:"option-label soft"},"Project",-1),ke=["disabled"],Le=(0,e.createElementVNode)("span",{class:"icon icon-lg icon-vscode-edit edit-icon"},null,-1);function Ae(t,n,_,y,E,V){return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createElementVNode)("div",oe,[(0,e.createElementVNode)("label",{class:"mode-container","data-disabled":t.model.type!=="linked"},[(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"radio",type:"radio",name:"mode",id:"from-code-catalyst","onUpdate:modelValue":n[0]||(n[0]=p=>t.model.type=p),value:"linked"},null,512),[[e.vModelRadio,t.model.type]]),ie],8,ae),(0,e.createElementVNode)("label",{class:"mode-container","data-disabled":t.model.type!=="none"},[(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"radio",type:"radio",name:"mode",id:"from-none","onUpdate:modelValue":n[1]||(n[1]=p=>t.model.type=p),value:"none"},null,512),[[e.vModelRadio,t.model.type]]),de],8,re)]),t.model.type==="linked"?((0,e.openBlock)(),(0,e.createElementBlock)("div",le,[(0,e.createElementVNode)("div",ce,[(0,e.createElementVNode)("span",ue,[_e,(0,e.createElementVNode)("button",{class:"project-button",onClick:n[2]||(n[2]=p=>t.quickPickSpace())},[(0,e.createTextVNode)((0,e.toDisplayString)(t.selectedSpaceName)+" ",1),pe])]),(0,e.createElementVNode)("span",me,[he,(0,e.createElementVNode)("button",{class:"project-button",onClick:n[3]||(n[3]=p=>t.quickPickProject()),disabled:!t.isSpaceSelected},[(0,e.createTextVNode)((0,e.toDisplayString)(t.selectedProjectName)+" ",1),ve],8,fe)])]),(0,e.createElementVNode)("div",ge,[(0,e.createCommentVNode)(" Existing branch "),(0,e.createElementVNode)("span",ye,[be,(0,e.withDirectives)((0,e.createElementVNode)("select",{id:"branch-picker",class:"picker",disabled:!t.model.selectedProject,"onUpdate:modelValue":n[4]||(n[4]=p=>t.model.selectedBranch=p),onInput:n[5]||(n[5]=(...p)=>t.update&&t.update(...p))},[(0,e.createElementVNode)("option",Pe,(0,e.toDisplayString)(t.branchPlaceholder),1),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.availableBranches,p=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{key:p.id,value:p},(0,e.toDisplayString)(t.branchName(p)),9,Se))),128))],40,Ee),[[e.vModelSelect,t.model.selectedBranch]])]),(0,e.createCommentVNode)(" New Branch "),(0,e.createElementVNode)("span",Ne,[Ve,(0,e.withDirectives)((0,e.createElementVNode)("input",{id:"branch-input",type:"text",placeholder:t.newBranchNamePlaceholder,disabled:!t.newBranchNameAllowed,"onUpdate:modelValue":n[6]||(n[6]=p=>t.model.newBranch=p),onInput:n[7]||(n[7]=(...p)=>t.update&&t.update(...p))},null,40,Ce),[[e.vModelText,t.model.newBranch]]),t.branchError?((0,e.openBlock)(),(0,e.createElementBlock)("div",Be,(0,e.toDisplayString)(t.branchError),1)):(0,e.createCommentVNode)("v-if",!0)])])])):(0,e.createCommentVNode)("v-if",!0),t.model.type==="none"?((0,e.openBlock)(),(0,e.createElementBlock)("div",De,[(0,e.createElementVNode)("div",we,[(0,e.createElementVNode)("span",Te,[Me,(0,e.createElementVNode)("button",{class:"project-button",onClick:n[8]||(n[8]=p=>t.quickPickSpace())},[(0,e.createTextVNode)((0,e.toDisplayString)(t.selectedSpaceName)+" ",1),Oe])]),(0,e.createElementVNode)("span",$e,[xe,(0,e.createElementVNode)("button",{class:"project-button",onClick:n[9]||(n[9]=p=>t.quickPickProject()),disabled:!t.isSpaceSelected},[(0,e.createTextVNode)((0,e.toDisplayString)(t.selectedProjectName)+" ",1),Le],8,ke)])])])):(0,e.createCommentVNode)("v-if",!0)],64)}const F=T.create();function Y(t){return t.type==="linked"?!!t.selectedProject&&!!t.selectedBranch&&!t.branchError:t.type==="none"?!!t.selectedProject:!1}const X=u({type:"linked"}),Re=(0,e.defineComponent)({name:"source-code",props:{modelValue:{type:l(X),default:new X}},data(){return{projects:[],branches:{},loadingProjects:!1,loadingBranches:{},newBranchNameAllowed:!1,newBranchNamePlaceholder:"Select branch first..."}},async created(){this.loadingProjects=!0},watch:{async"model.selectedProject"(t){this.useFirstBranch(),t&&!this.branches[t.name]&&(this.loadingBranches[t.name]=!0,this.branches[t.name]??=await F.getBranches(t).finally(()=>{this.loadingBranches[t.name]=!1}),this.useFirstBranch())},async"model.selectedBranch"(t){if(this.model.type!=="linked"||t===void 0){this.newBranchNameAllowed=!1,this.newBranchNamePlaceholder="";return}this.newBranchNameAllowed=!1,this.newBranchNamePlaceholder="Loading...";const n=this.model.newBranch;this.$emit("update:modelValue",{...this.model,newBranch:void 0}),await F.isThirdPartyRepo({spaceName:t.org.name,projectName:t.project.name,sourceRepositoryName:t.repo.name})?(this.newBranchNamePlaceholder="Not Applicable for Linked Repo",this.newBranchNameAllowed=!1,this.$emit("update:modelValue",{...this.model,newBranch:void 0})):(this.newBranchNamePlaceholder="branch-name",this.newBranchNameAllowed=!0,this.$emit("update:modelValue",{...this.model,newBranch:n}))}},computed:{model(){return this.modelValue},loading(){return this.model.type!=="linked"||!this.model.selectedProject?!1:this.loadingBranches[this.model.selectedProject.name]??!1},branchPlaceholder(){return this.loading?"Loading...":(this.availableBranches?.length??0)===0?"No branches found":"Select a branch"},availableBranches(){return this.model.type!=="linked"||!this.model.selectedProject?[]:this.branches[this.model.selectedProject.name]},branchError(){if(this.model.type!=="linked"||!this.model.newBranch)return;const t=this.model.newBranch;if(!!t&&this.availableBranches?.find(n=>n.name===`refs/heads/${t}`)!==void 0)return"Branch already exists"},isSpaceSelected(){return!!this.model.selectedSpace},isProjectSelected(){return!!this.model.selectedProject},selectedSpaceName(){return this.model.selectedSpace===void 0?"Not Selected":this.model.selectedSpace.name},selectedProjectName(){return this.model.selectedProject===void 0?"Not Selected":this.model.selectedProject.name}},methods:{update(){this.model.branchError=this.branchError,this.$emit("update:modelValue",this.model)},branchName(t){return`${t.repo.name} / ${t.name.replace("refs/heads/","")}`},useFirstBranch(){this.model.type==="linked"&&(Object.assign(this.model,{selectedBranch:this.availableBranches?.[0]}),this.update())},async quickPickSpace(){const t=await F.quickPickSpace();t!==void 0&&this.$emit("update:modelValue",{...this.modelValue,selectedSpace:t,selectedProject:void 0})},async quickPickProject(){const t=this.modelValue.selectedSpace;if(t===void 0)return;const n=await F.quickPickProject(t.name);n!==void 0&&this.$emit("update:modelValue",{...this.modelValue,selectedProject:n})}},emits:{"update:modelValue":t=>!0}});var nt=P(4743);const je=(0,S.Z)(Re,[["render",Ae]]),ot=t=>(_pushScopeId("data-v-3f832b9c"),t=t(),_popScopeId(),t),Ie=["id"],Ue={class:"header"},ze=["id"],We=["for"],Ke={class:"preload-transition collapse-button icon icon-vscode-chevron-up",ref:"icon"},Fe={class:"settings-title"},He={class:"soft no-spacing mt-8"},Ze={ref:"subPane",class:"sub-pane"};function Xe(t,n,_,y,E,V){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{id:t.id,class:"settings-panel"},[(0,e.createElementVNode)("div",Ue,[t.collapseable||t.startCollapsed?(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("input",{key:0,id:t.buttonId,style:{display:"none"},type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=p=>t.collapsed=p)},null,8,ze)),[[e.vModelCheckbox,t.collapsed]]):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("label",{for:t.buttonId,class:"panel-header"},[(0,e.createElementVNode)("i",Ke,null,512),(0,e.createElementVNode)("span",Fe,(0,e.toDisplayString)(t.title),1)],8,We),(0,e.createElementVNode)("p",He,(0,e.toDisplayString)(t.description),1)]),(0,e.createVNode)(e.Transition,{onEnter:t.updateHeight,onBeforeLeave:t.updateHeight,name:t.collapseable||t.startCollapsed?"collapse":"",persisted:""},{default:(0,e.withCtx)(()=>[(0,e.withDirectives)((0,e.createElementVNode)("div",Ze,[(0,e.renderSlot)(t.$slots,"default",{},void 0,!0)],512),[[e.vShow,!t.collapsed]])]),_:3},8,["onEnter","onBeforeLeave","name"])],8,Ie)}let q=0;const Ge=(0,e.defineComponent)({name:"settings-panel",props:{id:String,startCollapsed:Boolean,collapseable:Boolean,title:String,description:String},data(){return q+=1,{collapsed:this.$props.startCollapsed??!1,buttonId:`settings-panel-button-${q}`,lastHeight:void 0}},mixins:[c],methods:{updateHeight(t){t.style&&(this.lastHeight=t.scrollHeight,t.style.setProperty("--max-height",`${this.lastHeight}px`))}},mounted(){this.subPane=this.$refs.subPane,this.lastHeight=this.collapsed?this.lastHeight:this.subPane?.scrollHeight??this.lastHeight,this.$nextTick(()=>{setTimeout(()=>{this.$refs.icon?.classList.remove("preload-transition")},100)})}});var at=P(47);const Je=(0,S.Z)(Ge,[["render",Xe],["__scopeId","data-v-3f832b9c"]]),k=T.create(),Qe={source:new X,compute:new C,creating:!1,alias:""},Ye=(0,e.defineComponent)({name:"create",components:{settingsPanel:Je,computePanel:se,sourcePanel:je},mixins:[c],data(){return Qe},computed:{canCreate(){return!this.creating&&Y(this.source)}},created(){},watch:{"source.selectedProject"(){this.compute=new C}},methods:{async editCompute(t){const n={...this.compute,alias:this.alias},_=await k.editSetting(n,t,this.source.selectedProject?.org);t!=="alias"?this.compute=new C(_):_.alias!==void 0&&(this.alias=_.alias)},async submit(){if(!(!this.canCreate||!Y(this.source))){this.creating=!0;try{const t={...this.compute,alias:this.alias};await k.submit(t,this.source),k.close()}catch(t){t.message.match(/cancelled/i)||k.showLogsMessage(`Failed to create Dev Environment: ${t.message}`)}finally{this.creating=!1}}},cancel(){k.close()}}});var rt=P(155),dt=P(9428);const qe=(0,S.Z)(Ye,[["render",h],["__scopeId","data-v-3bb2cf6f"]]);const ee=()=>(0,e.createApp)(qe),te=ee();te.mount("#vue-app"),window.addEventListener("remount",()=>{te.unmount(),ee().mount("#vue-app")})})();var J=this;for(var Q in R)J[Q]=R[Q];R.__esModule&&Object.defineProperty(J,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

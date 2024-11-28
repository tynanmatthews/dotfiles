(()=>{var ne={9811:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>N});var i=n(6758),a=n.n(i),d=n(935),E=n.n(d),v=n(6122),f=E()(a());f.i(v.A),f.push([e.id,`
.selectable-item {
    margin-bottom: 10px;
    margin-top: 10px;
    cursor: pointer;
}
.logoIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: auto;
}
.hint {
    color: #c6c6c6;
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: var(--font-size-sm);
    font-weight: 500;
}
.vscode-light .hint {
    color: #3d3a3a;
}
.vscode-dark .hint {
    color: #c6c6c6;
}
.auth-container {
    height: auto;
    margin: auto;
    position: absolute;
    top: var(--auth-container-top);
    max-width: 260px;
    width: 90vw;
}
.header {
    font-size: var(--font-size-base);
    font-weight: bold;
}
.vscode-dark .header {
    color: white;
}
.vscode-light .header {
    color: black;
}
.title {
    margin-bottom: 3px;
    margin-top: 3px;
    font-size: var(--font-size-base);
    font-weight: 500;
}
.vscode-dark .title {
    color: white;
}
.vscode-light .title {
    color: black;
}
.subHeader {
    font-size: var(--font-size-sm);
}
.continue-button {
    background-color: var(--vscode-button-background);
    color: white;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    margin-bottom: 3px;
    margin-top: 3px;
    cursor: pointer;
    font-size: var(--font-size-base);
}
.back-button {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--vscode-button-foreground);
    height: 13px;
    display: flex;
    align-items: center;
    padding-left: 0;
}
.back-button svg {
    margin-left: 0px;
}
.continue-button:disabled {
    background-color: var(--vscode-input-background);
    color: #6f6f6f;
    cursor: not-allowed;
}
body.vscode-high-contrast:not(body.vscode-high-contrast-light) .continue-button {
    background-color: white;
    color: var(--vscode-input-background);
}
body.vscode-high-contrast:not(body.vscode-high-contrast-light) .continue-button:disabled {
    background-color: #6f6f6f;
    color: var(--vscode-input-background);
}
body.vscode-high-contrast-light .continue-button {
    background-color: var(--vscode-button-background);
    color: white;
}
body.vscode-high-contrast-light .continue-button:disabled {
    background-color: #6f6f6f;
    color: var(--vscode-input-background);
}
.urlInput {
    background-color: var(--vscode-input-background);
    width: 244px;
    height: 28px;
    box-sizing: border-box;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: var(--font-size-base);
    font-weight: 400;
}
body.vscode-light .urlInput,
body.vscode-high-contrast-light .urlInput {
    color: black;
}
body.vscode-dark .urlInput,
body.vscode-high-contrast:not(body.vscode-high-contrast-light) .urlInput {
    color: #cccccc;
}
.iamInput {
    background-color: var(--vscode-input-background);
    width: 244px;
    height: 28px;
    box-sizing: border-box;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: var(--font-size-base);
    font-weight: 400;
}
body.vscode-light .iamInput,
body.vscode-high-contrast-light .iamInput {
    color: black;
}
body.vscode-dark .iamInput,
body.vscode-high-contrast:not(body.vscode-high-contrast-light) .iamInput {
    color: #cccccc;
}
.regionSelect {
    background-color: var(--vscode-input-background);
    width: 244px;
    margin-bottom: 5px;
    margin-top: 2px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
    font-size: var(--font-size-base);
    font-weight: 400;
}
body.vscode-light .regionSelect,
body.vscode-high-contrast-light .regionSelect {
    color: black;
}
body.vscode-dark .regionSelect,
body.vscode-high-contrast:not(body.vscode-high-contrast-light) .regionSelect {
    color: white;
}
.start-url-error {
    color: #ff0000;
    font-size: var(--font-size-sm);
}
#logo {
    fill: var(--vscode-button-foreground);
}
body.vscode-dark #logo-text {
    fill: white;
}
body.vscode-light #logo-text {
    fill: #232f3e; /* squid ink */
}
.bottomMargin {
    margin-bottom: 12px;
}
.topMargin {
    margin-top: 12px;
}
.help-link,
.help-link__icon {
    align-items: center;
    display: flex;
}
.help-link,
.help-link__label {
    font-size: 10px;
    font-weight: 400;
    margin: 4px 0 0;
    text-decoration: none;
}
.help-link__icon {
    border-radius: 50%;
    border: 1px solid var(--vscode-textLink-foreground);
    font-size: 8px;
    height: 10px;
    justify-content: center;
    width: 10px;
}
.help-link__label {
    margin: 0;
    padding: 0 0 0 2px;
}
`,""]);const N=f},6900:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>N});var i=n(6758),a=n.n(i),d=n(935),E=n.n(d),v=n(6122),f=E()(a());f.i(v.A),f.push([e.id,`
#reauthenticate-container {
    height: auto;
    margin: auto;
    position: absolute;
    top: var(--auth-container-top);
    width: 100%;
}

/* Immediate children */
#reauthenticate-container > * {
    margin-bottom: 2rem;
}
#content-container {
    display: flex;
    flex-direction: column;
    /* All items are centered vertically */
    justify-content: space-between;
    /** The overall height of the container, then spacing is automatic between child elements */
    height: 7rem;
    text-align: center;
}
#content-container > * {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
#icon-container {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}
#text-container {
    display: flex;
    flex-direction: column;
}
#button-container {
    display: flex;
    flex-direction: column;
}
button#reauthenticate {
    cursor: pointer;
    background-color: var(--vscode-button-background);
    color: white;
    border-radius: 3px;
    border: none;
    padding: 0.3rem;
    width: 80%;
    user-select: none;
    max-width: 260px;
}
button#signout {
    cursor: pointer;
    color: var(--vscode-textLink-foreground);
    border: none;
    background: none;
    user-select: none;
}
button#cancel {
    background-color: var(--vscode-button-background);
    color: white;
    border-radius: 3px;
    border: none;
    padding: 0.3rem;
    width: 80%;
    font-weight: bold;
    margin-top: 15px;
    cursor: pointer;
}
body.vscode-high-contrast:not(body.vscode-high-contrast-light) button#reauthenticate {
    background-color: white;
    color: black;
}
#title {
    font-weight: bold;
}
#call-to-action {
    font-weight: normal;
}
#error-message {
    text-align: center;
}
`,""]);const N=f},2745:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>f});var i=n(6758),a=n.n(i),d=n(935),E=n.n(d),v=E()(a());v.push([e.id,`
body {
    /**
     * Overriding the margin and padding defined by vscode
     * https://github.com/microsoft/vscode/blame/54e0cddffb51553e76fb8d65474ba855c30621e8/src/vs/workbench/contrib/webview/browser/pre/index.html
     */
    padding: 0;
}
.body {
    /* The container takes up the entire height of the screen */
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* All items are centered horizontally */
    align-items: center;
}
`,""]);const f=v},5917:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>f});var i=n(6758),a=n.n(i),d=n(935),E=n.n(d),v=E()(a());v.push([e.id,`
.item-container-base[data-v-458cca89] {
    display: flex;
    border-width: 1px;
    border-style: solid;
    border-color: #625f5f;
    user-select: none;
    /* Some items do not have itemText, so we need a consistent height for all items */
    height: 50px;
    position: relative;
}
.item-container-base.focussed[data-v-458cca89]::before {
    content: attr(title);
    cursor: default;
    display: block;
    font-size: var(--font-size-sm);
    height: auto;
    max-width: 130px;
    padding: 5px;
    position: absolute;
    right: 0;
    transform: translate(0, -100%);
    word-break: break-all;
}
.vscode-dark .item-container-base.focussed[data-v-458cca89]:before,
body.vscode-high-contrast:not(body.vscode-high-contrast-light) .item-container-base.focussed[data-v-458cca89]:before {
    background-color: white;
    color: rgba(0, 0, 0, 0.8);
}
.vscode-light .item-container-base.focussed[data-v-458cca89]:before,
body.vscode-high-contrast-light .item-container-base.focussed[data-v-458cca89]:before {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
}
.hovering[data-v-458cca89] {
    border-color: #0e639c;
}
.selected[data-v-458cca89] {
    border-color: #3675f4;
}
.title[data-v-458cca89] {
    font-size: var(--font-size-base);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.text[data-v-458cca89] {
    display: flex;
    flex-direction: column;
    font-size: var(--font-size-sm);
    justify-content: center;
    overflow: hidden;
}
.vscode-dark .text[data-v-458cca89] {
    color: white;
}
.vscode-light .text[data-v-458cca89] {
    color: black;
}
.icon[data-v-458cca89] {
    padding-left: 8px;
    padding-right: 11px;
    display: flex;
    align-items: center;
}
.vscode-dark .icon .svg-path[data-v-458cca89],
body.vscode-high-contrast:not(body.vscode-high-contrast-light) .icon .svg-path[data-v-458cca89] {
    fill: white;
}
.vscode-light .icon .svg-path[data-v-458cca89],
body.vscode-high-contrast-light .icon .svg-path[data-v-458cca89] {
    fill: black;
}
.item-container-base .text .p[data-v-458cca89] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
`,""]);const f=v},6122:(e,r,n)=>{"use strict";n.d(r,{A:()=>f});var i=n(6758),a=n.n(i),d=n(935),E=n.n(d),v=E()(a());v.push([e.id,`:root {
    /* Font-sizes */
    --font-size-sm: calc(0.75 * var(--font-size-base));
    --font-size-base: var(--vscode-font-size);
    --font-size-md: calc(1.25 * var(--font-size-base));
    --font-size-lg: calc(1.5 * var(--font-size-base));
    --font-size-xl: calc(1.75 * var(--font-size-base));

    /* Alignment */
    --auth-container-top: 15%;
}
`,""]);const f=v},935:e=>{"use strict";e.exports=function(r){var n=[];return n.toString=function(){return this.map(function(a){var d="",E=typeof a[5]<"u";return a[4]&&(d+="@supports (".concat(a[4],") {")),a[2]&&(d+="@media ".concat(a[2]," {")),E&&(d+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),d+=r(a),E&&(d+="}"),a[2]&&(d+="}"),a[4]&&(d+="}"),d}).join("")},n.i=function(a,d,E,v,f){typeof a=="string"&&(a=[[null,a,void 0]]);var N={};if(E)for(var D=0;D<this.length;D++){var V=this[D][0];V!=null&&(N[V]=!0)}for(var A=0;A<a.length;A++){var m=[].concat(a[A]);E&&N[m[0]]||(typeof f<"u"&&(typeof m[5]>"u"||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=f),d&&(m[2]&&(m[1]="@media ".concat(m[2]," {").concat(m[1],"}")),m[2]=d),v&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=v):m[4]="".concat(v)),n.push(m))}},n}},6758:e=>{"use strict";e.exports=function(r){return r[1]}},7433:(e,r)=>{"use strict";var n;n={value:!0},r.A=(i,a)=>{const d=i.__vccOpts||i;for(const[E,v]of a)d[E]=v;return d}},3671:(e,r,n)=>{var i=n(9811);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=n(611).A,d=a("7dca9f23",i,!1,{})},2568:(e,r,n)=>{var i=n(6900);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=n(611).A,d=a("49822175",i,!1,{})},5389:(e,r,n)=>{var i=n(2745);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=n(611).A,d=a("2eaa98b8",i,!1,{})},4825:(e,r,n)=>{var i=n(5917);i.__esModule&&(i=i.default),typeof i=="string"&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var a=n(611).A,d=a("09d2d4cb",i,!1,{})},611:(e,r,n)=>{"use strict";n.d(r,{A:()=>G});function i(l,h){for(var _=[],u={},c=0;c<h.length;c++){var L=h[c],b=L[0],M=L[1],w=L[2],P=L[3],k={id:l+":"+c,css:M,media:w,sourceMap:P};u[b]?u[b].parts.push(k):_.push(u[b]={id:b,parts:[k]})}return _}var a=typeof document<"u";if(typeof DEBUG<"u"&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d={},E=a&&(document.head||document.getElementsByTagName("head")[0]),v=null,f=0,N=!1,D=function(){},V=null,A="data-vue-ssr-id",m=typeof navigator<"u"&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function G(l,h,_,u){N=_,V=u||{};var c=i(l,h);return K(c),function(b){for(var M=[],w=0;w<c.length;w++){var P=c[w],k=d[P.id];k.refs--,M.push(k)}b?(c=i(l,b),K(c)):c=[];for(var w=0;w<M.length;w++){var k=M[w];if(k.refs===0){for(var F=0;F<k.parts.length;F++)k.parts[F]();delete d[k.id]}}}}function K(l){for(var h=0;h<l.length;h++){var _=l[h],u=d[_.id];if(u){u.refs++;for(var c=0;c<u.parts.length;c++)u.parts[c](_.parts[c]);for(;c<_.parts.length;c++)u.parts.push(z(_.parts[c]));u.parts.length>_.parts.length&&(u.parts.length=_.parts.length)}else{for(var L=[],c=0;c<_.parts.length;c++)L.push(z(_.parts[c]));d[_.id]={id:_.id,refs:1,parts:L}}}}function H(){var l=document.createElement("style");return l.type="text/css",E.appendChild(l),l}function z(l){var h,_,u=document.querySelector("style["+A+'~="'+l.id+'"]');if(u){if(N)return D;u.parentNode.removeChild(u)}if(m){var c=f++;u=v||(v=H()),h=$.bind(null,u,c,!1),_=$.bind(null,u,c,!0)}else u=H(),h=Q.bind(null,u),_=function(){u.parentNode.removeChild(u)};return h(l),function(b){if(b){if(b.css===l.css&&b.media===l.media&&b.sourceMap===l.sourceMap)return;h(l=b)}else _()}}var j=function(){var l=[];return function(h,_){return l[h]=_,l.filter(Boolean).join(`
`)}}();function $(l,h,_,u){var c=_?"":u.css;if(l.styleSheet)l.styleSheet.cssText=j(h,c);else{var L=document.createTextNode(c),b=l.childNodes;b[h]&&l.removeChild(b[h]),b.length?l.insertBefore(L,b[h]):l.appendChild(L)}}function Q(l,h){var _=h.css,u=h.media,c=h.sourceMap;if(u&&l.setAttribute("media",u),V.ssrId&&l.setAttribute(A,h.id),c&&(_+=`
/*# sourceURL=`+c.sources[0]+" */",_+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),l.styleSheet)l.styleSheet.cssText=_;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(_))}}}},Y={};function S(e){var r=Y[e];if(r!==void 0)return r.exports;var n=Y[e]={id:e,exports:{}};return ne[e](n,n.exports,S),n.exports}S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var n in r)S.o(r,n)&&!S.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),S.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var Z={};(()=>{"use strict";const e=Vue,r=["data-app"];function n(t,o,y,I,T,O){const g=(0,e.resolveComponent)("Login"),s=(0,e.resolveComponent)("Reauthenticate");return(0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,null,[(0,e.createCommentVNode)(" Body "),(0,e.createElementVNode)("div",{class:"body",style:{height:"100vh"},"data-app":t.app},[(0,e.createCommentVNode)(" Functionality "),t.authFlowState==="LOGIN"?((0,e.openBlock)(),(0,e.createBlock)(g,{key:0,app:t.app},null,8,["app"])):t.authFlowState==="REAUTHNEEDED"||t.authFlowState==="REAUTHENTICATING"?((0,e.openBlock)(),(0,e.createBlock)(s,{app:t.app,state:t.authFlowState,key:t.refreshKey},null,8,["app","state"])):(0,e.createCommentVNode)("v-if",!0)],8,r)],2112)}const i=["data-app"],a={class:"logoIcon bottomMargin"},d={key:0,width:"71",height:"71",viewBox:"0 0 71 71",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v=[(0,e.createStaticVNode)('<g clip-path="url(#clip0_331_37336)"><path d="M30.1307 1.46438L8.83068 13.7563C5.45818 15.7087 3.37256 19.3031 3.37256 23.2081V47.8067C3.37256 51.6969 5.45818 55.306 8.83068 57.2585L30.1307 69.5504C33.5032 71.5029 37.6596 71.5029 41.0321 69.5504L62.3321 57.2585C65.7046 55.306 67.7903 51.7117 67.7903 47.8067V23.2081C67.7903 19.3179 65.7046 15.7087 62.3321 13.7563L41.0321 1.46438C37.6596 -0.488125 33.5032 -0.488125 30.1307 1.46438Z" fill="url(#paint0_linear_331_37336)"></path><path d="M54.1966 21.6843L38.2364 12.469C37.5116 12.0401 36.5354 11.833 35.5739 11.833C34.6124 11.833 33.651 12.0401 32.9114 12.469L16.9512 21.6843C15.4868 22.5274 14.2887 24.5982 14.2887 26.2845V44.7149C14.2887 46.4011 15.4868 48.472 16.9512 49.3151L32.9114 58.5303C33.6362 58.9593 34.6124 59.1663 35.5739 59.1663C36.5354 59.1663 37.4968 58.9593 38.2364 58.5303L54.1966 49.3151C55.661 48.472 56.8591 46.4011 56.8591 44.7149V26.2845C56.8591 24.5982 55.661 22.5274 54.1966 21.6843ZM36.0029 54.7141C36.0029 54.7141 35.7958 54.7584 35.5887 54.7584C35.3816 54.7584 35.2337 54.7288 35.1745 54.7141L19.1699 45.4693C19.0072 45.3213 18.8002 44.9515 18.7558 44.7445V26.2549C18.8002 26.0478 19.022 25.678 19.1699 25.5301L35.1745 16.2853C35.1745 16.2853 35.3816 16.2409 35.5887 16.2409C35.7958 16.2409 35.9437 16.2705 36.0029 16.2853L52.0075 25.5301C52.1702 25.678 52.3772 26.0478 52.4216 26.2549V42.6588L40.0262 35.4997V33.5472C40.0262 33.1626 39.8191 32.8224 39.4937 32.6301L36.1212 30.6776C35.9585 30.5888 35.7662 30.5297 35.5887 30.5297C35.4112 30.5297 35.2189 30.574 35.0562 30.6776L31.6837 32.6301C31.3583 32.8224 31.1512 33.1774 31.1512 33.5472V37.4374C31.1512 37.822 31.3583 38.1622 31.6837 38.3545L35.0562 40.307C35.2189 40.3957 35.4112 40.4549 35.5887 40.4549C35.7662 40.4549 35.9585 40.4105 36.1212 40.307L37.8074 39.3307L50.2029 46.4899L36.0029 54.6845V54.7141Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_331_37336" x1="64.1515" y1="-5.31021" x2="10.5465" y2="71.2515" gradientUnits="userSpaceOnUse"><stop stop-color="#A7F8FF"></stop><stop offset="0.03" stop-color="#9DF1FF"></stop><stop offset="0.08" stop-color="#84E1FF"></stop><stop offset="0.15" stop-color="#5AC7FF"></stop><stop offset="0.22" stop-color="#21A2FF"></stop><stop offset="0.26" stop-color="#008DFF"></stop><stop offset="0.66" stop-color="#7F33FF"></stop><stop offset="0.99" stop-color="#39127D"></stop></linearGradient><clipPath id="clip0_331_37336"><rect width="71" height="71" fill="white"></rect></clipPath></defs>',2)],f={key:1,width:"100",height:"80",viewBox:"0 0 54 40",fill:"none",id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"},A=[(0,e.createElementVNode)("path",{id:"logo-text",d:"M14.09,10.85a4.7,4.7,0,0,0,.19,1.48,7.73,7.73,0,0,0,.54,1.19.77.77,0,0,1,.12.38.64.64,0,0,1-.32.49l-1,.7a.83.83,0,0,1-.44.15.69.69,0,0,1-.49-.23,3.8,3.8,0,0,1-.6-.77q-.25-.42-.51-1a6.14,6.14,0,0,1-4.89,2.3,4.54,4.54,0,0,1-3.32-1.19,4.27,4.27,0,0,1-1.22-3.2A4.28,4.28,0,0,1,3.61,7.75,6.06,6.06,0,0,1,7.69,6.46a12.47,12.47,0,0,1,1.76.13q.92.13,1.91.36V5.73a3.65,3.65,0,0,0-.79-2.66A3.81,3.81,0,0,0,7.86,2.3a7.71,7.71,0,0,0-1.79.22,12.78,12.78,0,0,0-1.79.57,4.55,4.55,0,0,1-.58.22l-.26,0q-.35,0-.35-.52V2a1.09,1.09,0,0,1,.12-.58,1.2,1.2,0,0,1,.47-.35A10.88,10.88,0,0,1,5.77.32,10.19,10.19,0,0,1,8.36,0a6,6,0,0,1,4.35,1.35,5.49,5.49,0,0,1,1.38,4.09ZM7.34,13.38a5.36,5.36,0,0,0,1.72-.31A3.63,3.63,0,0,0,10.63,12,2.62,2.62,0,0,0,11.19,11a5.63,5.63,0,0,0,.16-1.44v-.7a14.35,14.35,0,0,0-1.53-.28,12.37,12.37,0,0,0-1.56-.1,3.84,3.84,0,0,0-2.47.67A2.34,2.34,0,0,0,5,11a2.35,2.35,0,0,0,.61,1.76A2.4,2.4,0,0,0,7.34,13.38Zm13.35,1.8a1,1,0,0,1-.64-.16,1.3,1.3,0,0,1-.35-.65L15.81,1.51a3,3,0,0,1-.15-.67.36.36,0,0,1,.41-.41H17.7a1,1,0,0,1,.65.16,1.4,1.4,0,0,1,.33.65l2.79,11,2.59-11A1.17,1.17,0,0,1,24.39.6a1.1,1.1,0,0,1,.67-.16H26.4a1.1,1.1,0,0,1,.67.16,1.17,1.17,0,0,1,.32.65L30,12.39,32.88,1.25A1.39,1.39,0,0,1,33.22.6a1,1,0,0,1,.65-.16h1.54a.36.36,0,0,1,.41.41,1.36,1.36,0,0,1,0,.26,3.64,3.64,0,0,1-.12.41l-4,12.86a1.3,1.3,0,0,1-.35.65,1,1,0,0,1-.64.16H29.25a1,1,0,0,1-.67-.17,1.26,1.26,0,0,1-.32-.67L25.67,3.64,23.11,14.34a1.26,1.26,0,0,1-.32.67,1,1,0,0,1-.67.17Zm21.36.44a11.28,11.28,0,0,1-2.56-.29,7.44,7.44,0,0,1-1.92-.67,1,1,0,0,1-.61-.93v-.84q0-.52.38-.52a.9.9,0,0,1,.31.06l.42.17a8.77,8.77,0,0,0,1.83.58,9.78,9.78,0,0,0,2,.2,4.48,4.48,0,0,0,2.43-.55,1.76,1.76,0,0,0,.86-1.57,1.61,1.61,0,0,0-.45-1.16A4.29,4.29,0,0,0,43,9.22l-2.41-.76A5.15,5.15,0,0,1,38,6.78a3.94,3.94,0,0,1-.83-2.41,3.7,3.7,0,0,1,.45-1.85,4.47,4.47,0,0,1,1.19-1.37A5.27,5.27,0,0,1,40.51.29,7.4,7.4,0,0,1,42.6,0a8.87,8.87,0,0,1,1.12.07q.57.07,1.08.19t.95.26a4.27,4.27,0,0,1,.7.29,1.59,1.59,0,0,1,.49.41.94.94,0,0,1,.15.55v.79q0,.52-.38.52a1.76,1.76,0,0,1-.64-.2,7.74,7.74,0,0,0-3.2-.64,4.37,4.37,0,0,0-2.21.47,1.6,1.6,0,0,0-.79,1.48,1.58,1.58,0,0,0,.49,1.18,4.94,4.94,0,0,0,1.83.92L44.55,7a5.08,5.08,0,0,1,2.57,1.6A3.76,3.76,0,0,1,47.9,11a4.21,4.21,0,0,1-.44,1.93,4.4,4.4,0,0,1-1.21,1.47,5.43,5.43,0,0,1-1.85.93A8.25,8.25,0,0,1,42.05,15.62Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M45.19,23.81C39.72,27.85,31.78,30,25,30A36.64,36.64,0,0,1,.22,20.57c-.51-.46-.06-1.09.56-.74A49.78,49.78,0,0,0,25.53,26.4,49.23,49.23,0,0,0,44.4,22.53C45.32,22.14,46.1,23.14,45.19,23.81Z"},null,-1),(0,e.createElementVNode)("path",{fill:"#FF9900",class:"cls-1",d:"M47.47,21.21c-.7-.9-4.63-.42-6.39-.21-.53.06-.62-.4-.14-.74,3.13-2.2,8.27-1.57,8.86-.83s-.16,5.89-3.09,8.35c-.45.38-.88.18-.68-.32C46.69,25.8,48.17,22.11,47.47,21.21Z"},null,-1)],G=[(0,e.createElementVNode)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{d:"M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z",fill:"#21A2FF"})],-1)],K={class:"auth-container-section"},H={key:0,class:"imported-logins"},z=(0,e.createElementVNode)("div",{class:"header bottomMargin"},"Connect with an existing account:",-1),j=(0,e.createElementVNode)("div",{class:"header"},"Or, choose a sign-in option:",-1),$={key:1,class:"header bottomMargin"},Q=["disabled"],h=[(0,e.createElementVNode)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{d:"M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z",fill:"#21A2FF"})],-1)],_={class:"auth-container-section"},u={class:"header bottomMargin"},c=(0,e.createElementVNode)("br",null,null,-1),M=[(0,e.createElementVNode)("span",{class:"help-link__icon"},"?",-1),(0,e.createElementVNode)("span",{class:"help-link__label"},"Need help signing in?",-1)],w={key:0,class:"code-catalyst-login"},P=(0,e.createElementVNode)("div",{style:{"margin-bottom":"4px"}},null,-1),k={class:"subHeader"},F=(0,e.createElementVNode)("div",{class:"title topMargin"},"Start URL",-1),ie=(0,e.createElementVNode)("div",{class:"hint"},"Provided by your admin or help desk",-1),se={class:"start-url-error"},ae=(0,e.createElementVNode)("div",{class:"title topMargin"},"Region",-1),re=(0,e.createElementVNode)("div",{class:"hint"},"AWS Region that hosts identity directory",-1),le=["value"],de=["disabled"],ce={key:2,class:"auth-container-section"},pe={key:0,class:"header bottomMargin"},ue={key:1,class:"header bottomMargin"},_e=[(0,e.createElementVNode)("svg",{width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,e.createElementVNode)("path",{d:"M4.98667 0.0933332L5.73333 0.786666L1.57333 4.94667H12.0267V5.96H1.57333L5.73333 10.0667L4.98667 10.8133L0.0266666 5.8V5.10667L4.98667 0.0933332Z",fill:"#21A2FF"})],-1)],he=(0,e.createElementVNode)("div",{class:"header"},"IAM Credentials:",-1),ge=(0,e.createElementVNode)("div",{class:"hint"},"Credentials will be added to the appropriate ~/.aws/ files",-1),me=(0,e.createElementVNode)("div",{class:"title topMargin"},"Profile Name",-1),ve=(0,e.createElementVNode)("div",{class:"hint"},"The identifier for these credentials",-1),fe=(0,e.createElementVNode)("div",{class:"title"},"Access Key",-1),Ce=(0,e.createElementVNode)("div",{class:"title"},"Secret Key",-1),Ee=["disabled"];function be(t,o,y,I,T,O){const g=(0,e.resolveComponent)("SelectableItem");return t.stage!=="CONNECTED"?((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:0,class:(0,e.normalizeClass)([[t.disabled?"disabled-form":""],"auth-container"]),"data-app":t.app,onClick:o[20]||(o[20]=(...s)=>t.handleDocumentClick&&t.handleDocumentClick(...s))},[(0,e.createElementVNode)("div",a,[(0,e.createCommentVNode)(" Icon "),t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",d,v)):(0,e.createCommentVNode)("v-if",!0),t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",f,A)):(0,e.createCommentVNode)("v-if",!0)]),t.stage==="START"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:0},[t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createElementBlock)("button",{key:0,class:"back-button bottomMargin",onClick:o[0]||(o[0]=(...s)=>t.handleBackButtonClick&&t.handleBackButtonClick(...s))},G)):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("div",K,[t.importedLogins.length>0?((0,e.openBlock)(),(0,e.createElementBlock)("div",H,[z,((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.importedLogins,(s,R)=>((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:R},[(0,e.createVNode)(g,{onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.IMPORTED_LOGINS+R,itemId:t.LoginOption.IMPORTED_LOGINS+R,itemText:s.text,itemTitle:s.title,itemType:s.type,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemText","itemTitle","itemType"])]))),128)),j])):(0,e.createCommentVNode)("v-if",!0),t.importedLogins.length==0?((0,e.openBlock)(),(0,e.createElementBlock)("div",$,"Choose a sign-in option:")):(0,e.createCommentVNode)("v-if",!0),t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createBlock)(g,{key:2,onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.BUILDER_ID,itemId:t.LoginOption.BUILDER_ID,itemText:"with Builder ID, a personal profile from AWS",itemTitle:"Use for Free",itemType:t.LoginOption.BUILDER_ID,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemType"])):(0,e.createCommentVNode)("v-if",!0),t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createBlock)(g,{key:3,onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.ENTERPRISE_SSO,itemId:t.LoginOption.ENTERPRISE_SSO,itemText:"",itemTitle:"Use with Pro license",itemType:t.LoginOption.ENTERPRISE_SSO,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemType"])):(0,e.createCommentVNode)("v-if",!0),t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createBlock)(g,{key:4,onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.ENTERPRISE_SSO,itemId:t.LoginOption.ENTERPRISE_SSO,itemText:"Sign in to AWS with single sign-on",itemTitle:"Workforce",itemType:t.LoginOption.ENTERPRISE_SSO,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemType"])):(0,e.createCommentVNode)("v-if",!0),t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createBlock)(g,{key:5,onToggle:t.toggleItemSelection,isSelected:t.selectedLoginOption===t.LoginOption.IAM_CREDENTIAL,itemId:t.LoginOption.IAM_CREDENTIAL,itemText:"Store keys for use with AWS CLI tools",itemTitle:"IAM Credentials",itemType:t.LoginOption.IAM_CREDENTIAL,class:"selectable-item bottomMargin"},null,8,["onToggle","isSelected","itemId","itemType"])):(0,e.createCommentVNode)("v-if",!0),(0,e.createElementVNode)("button",{class:"continue-button",disabled:t.selectedLoginOption===0,onClick:o[1]||(o[1]=s=>t.handleContinueClick())}," Continue ",8,Q)])],64)):(0,e.createCommentVNode)("v-if",!0),t.stage==="SSO_FORM"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:1},[(0,e.createElementVNode)("button",{class:"back-button bottomMargin",onClick:o[2]||(o[2]=(...s)=>t.handleBackButtonClick&&t.handleBackButtonClick(...s))},h),(0,e.createElementVNode)("div",_,[(0,e.createElementVNode)("div",u,[(0,e.createTextVNode)(" Sign in with AWS IAM Identity Center:"),c,t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createElementBlock)("a",{key:0,class:"help-link",href:"https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/q-in-IDE-setup.html#q-in-IDE-setup-pro-auth",onClick:o[3]||(o[3]=(...s)=>t.handleHelpLinkClick&&t.handleHelpLinkClick(...s))},M)):(0,e.createCommentVNode)("v-if",!0)]),t.app==="TOOLKIT"?((0,e.openBlock)(),(0,e.createElementBlock)("div",w,[P,(0,e.createElementVNode)("div",k,[(0,e.createTextVNode)(" Using CodeCatalyst with AWS Builder ID? "),(0,e.createElementVNode)("a",{href:"#",onClick:o[4]||(o[4]=s=>t.handleCodeCatalystSignin())},"Skip to sign-in")])])):(0,e.createCommentVNode)("v-if",!0),F,ie,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"urlInput",type:"text",id:"startUrl",name:"startUrl",onInput:o[5]||(o[5]=(...s)=>t.handleUrlInput&&t.handleUrlInput(...s)),"onUpdate:modelValue":o[6]||(o[6]=s=>t.startUrl=s),onKeydown:o[7]||(o[7]=(0,e.withKeys)(s=>t.handleContinueClick(),["enter"]))},null,544),[[e.vModelText,t.startUrl]]),(0,e.createElementVNode)("h4",se,(0,e.toDisplayString)(t.startUrlError),1),ae,re,(0,e.withDirectives)((0,e.createElementVNode)("select",{class:"regionSelect",id:"regions",name:"regions","onUpdate:modelValue":o[8]||(o[8]=s=>t.selectedRegion=s),onChange:o[9]||(o[9]=s=>t.handleRegionInput(s))},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.regions,s=>((0,e.openBlock)(),(0,e.createElementBlock)("option",{key:s.id,value:s.id},(0,e.toDisplayString)(`${s.name} (${s.id})`),9,le))),128))],544),[[e.vModelSelect,t.selectedRegion]]),(0,e.createElementVNode)("button",{class:"continue-button topMargin",disabled:t.shouldDisableSsoContinue(),onClick:o[10]||(o[10]=s=>t.handleContinueClick())}," Continue ",8,de)])],64)):(0,e.createCommentVNode)("v-if",!0),t.stage==="AUTHENTICATING"?((0,e.openBlock)(),(0,e.createElementBlock)("div",ce,[t.app==="TOOLKIT"&&t.profileName.length>0?((0,e.openBlock)(),(0,e.createElementBlock)("div",pe," Connecting to IAM... ")):((0,e.openBlock)(),(0,e.createElementBlock)("div",ue,"Authenticating in browser...")),(0,e.createElementVNode)("button",{class:"continue-button",onClick:o[11]||(o[11]=s=>t.handleCancelButton())},"Cancel")])):(0,e.createCommentVNode)("v-if",!0),t.stage==="AWS_PROFILE"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:3},[(0,e.createElementVNode)("button",{class:"back-button bottomMargin",onClick:o[12]||(o[12]=(...s)=>t.handleBackButtonClick&&t.handleBackButtonClick(...s))},_e),he,ge,me,ve,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput bottomMargin",type:"text",id:"profileName",name:"profileName","onUpdate:modelValue":o[13]||(o[13]=s=>t.profileName=s),onKeydown:o[14]||(o[14]=(0,e.withKeys)(s=>t.handleContinueClick(),["enter"]))},null,544),[[e.vModelText,t.profileName]]),fe,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput bottomMargin",type:"text",id:"accessKey",name:"accessKey","onUpdate:modelValue":o[15]||(o[15]=s=>t.accessKey=s),onKeydown:o[16]||(o[16]=(0,e.withKeys)(s=>t.handleContinueClick(),["enter"]))},null,544),[[e.vModelText,t.accessKey]]),Ce,(0,e.withDirectives)((0,e.createElementVNode)("input",{class:"iamInput bottomMargin",type:"text",id:"secretKey",name:"secretKey","onUpdate:modelValue":o[17]||(o[17]=s=>t.secretKey=s),onKeydown:o[18]||(o[18]=(0,e.withKeys)(s=>t.handleContinueClick(),["enter"]))},null,544),[[e.vModelText,t.secretKey]]),(0,e.createElementVNode)("button",{class:"continue-button",disabled:t.shouldDisableIamContinue(),onClick:o[19]||(o[19]=s=>t.handleContinueClick())}," Continue ",8,Ee)],64)):(0,e.createCommentVNode)("v-if",!0)],10,i)):(0,e.createCommentVNode)("v-if",!0)}const X=t=>((0,e.pushScopeId)("data-v-458cca89"),t=t(),(0,e.popScopeId)(),t),ye=["title"],Ie={class:"icon"},Te={key:0,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Se=[X(()=>(0,e.createElementVNode)("path",{class:"svg-path","fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 2C6.68228 2 5.61 3.07228 5.61 4.39C5.61 5.70772 6.68228 6.78 8 6.78C9.31771 6.78 10.39 5.70772 10.39 4.39C10.39 3.07228 9.31772 2 8 2ZM3.61 4.39C3.61 1.96772 5.57771 0 8 0C10.4223 0 12.39 1.96771 12.39 4.39C12.39 5.66447 11.8453 6.81311 10.9762 7.61551C11.1666 7.71116 11.3535 7.81608 11.5368 7.93001C13.5215 9.15787 15 11.3598 15 14V15H1V14C1 11.147 2.63919 8.7213 4.99701 7.59061C4.14356 6.78943 3.61 5.65134 3.61 4.39ZM10.482 9.62922C9.71501 9.15233 8.88729 8.90797 8.00229 8.91L8 8.91C5.59623 8.91 3.5507 10.634 3.09474 13H12.8975C12.601 11.5742 11.6867 10.3744 10.484 9.63047L10.482 9.62922Z"},null,-1))],Le={key:1,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ke=[X(()=>(0,e.createElementVNode)("path",{class:"svg-path","fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3C3.44772 3 3 3.44772 3 4C3 4.55229 3.44772 5 4 5C4.55228 5 5 4.55229 5 4C5 3.44772 4.55228 3 4 3ZM1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4C7 5.65676 5.65701 6.99984 4.00029 7C6.21244 7.00016 8 8.78781 8 11C8 8.78772 9.78771 7 12 7C14.2123 7 16 8.78772 16 11V14C16 14.5523 15.5523 15 15 15H9C8.44771 15 8 14.5523 8 14C8 14.5523 7.55228 15 7 15H1C0.447715 15 0 14.5523 0 14V11C0 8.78772 1.78801 7 4.00029 7C2.34344 7 1 5.65685 1 4ZM12 7C10.3431 7 9 5.65685 9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7ZM11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4C13 4.55229 12.5523 5 12 5C11.4477 5 11 4.55229 11 4ZM10 11C10 9.89228 10.8923 9 12 9C13.1077 9 14 9.89228 14 11V13H10V11ZM2 11C2 9.89228 2.89228 9 4 9C5.10772 9 6 9.89228 6 11V13H2V11Z"},null,-1))],we={key:2,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne=[X(()=>(0,e.createElementVNode)("path",{class:"svg-path","fill-rule":"evenodd","clip-rule":"evenodd",d:"M10.0042 11C10.0042 11.009 10.002 11.0325 9.99974 11.0548L9.99979 11.0502L10 11L10 10.9993L9.99997 11L9.995 11.1L9.99652 11.0855L9.99974 11.0548C9.978 13.1703 8.62586 15.046 6.62064 15.7331C4.59789 16.4261 2.3583 15.7562 1.0483 14.0663C-0.261694 12.3764 -0.352147 10.0406 0.823246 8.25441C1.89701 6.62271 3.81005 5.77972 5.71121 6.05367L12.3412 0.24769C12.5235 0.0880192 12.7576 0 13 0H15C15.5523 0 16 0.447715 16 1V6C16 6.55228 15.5523 7 15 7H14V8C14 8.55229 13.5523 9 13 9H12V10C12 10.5523 11.5523 11 11 11H10.0042ZM13.376 2L6.65881 7.88231C6.41017 8.10005 6.07001 8.18087 5.75 8.09825C4.50783 7.77752 3.19918 8.28216 2.49395 9.35384C1.78871 10.4255 1.84298 11.827 2.62898 12.841C3.41498 13.8549 4.75873 14.2569 5.97239 13.841C7.18604 13.4252 8.00096 12.2837 8 11.0007L8.00502 10.9C8.03175 10.634 8.03175 10.366 8.00502 10.1C7.94583 9.51115 8.40818 9 9 9H10V8C10 7.44772 10.4477 7 11 7H12V6C12 5.44772 12.4477 5 13 5H14V2H13.376ZM6 10H4V12H6V10Z"},null,-1))],Oe={class:"text"},Ae={class:"title"},Me=["title"];function Be(t,o,y,I,T,O){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)(["item-container-base",{selected:t.isSelected,hovering:t.isHovering,focussed:t.isFocused}]),tabindex:"0",title:t.itemTitle,onBlur:o[0]||(o[0]=(...g)=>t.hideFocus&&t.hideFocus(...g)),onClick:o[1]||(o[1]=(...g)=>t.toggleSelection&&t.toggleSelection(...g)),onFocus:o[2]||(o[2]=(...g)=>t.showFocus&&t.showFocus(...g)),onKeydown:o[3]||(o[3]=(0,e.withKeys)((...g)=>t.toggleSelection&&t.toggleSelection(...g),["enter"])),onMouseover:o[4]||(o[4]=g=>t.isHovering=!0),onMouseout:o[5]||(o[5]=g=>t.isHovering=!1)},[(0,e.createElementVNode)("div",Ie,[t.itemType===t.LoginOption.BUILDER_ID?((0,e.openBlock)(),(0,e.createElementBlock)("svg",Te,Se)):(0,e.createCommentVNode)("v-if",!0),t.itemType===t.LoginOption.ENTERPRISE_SSO?((0,e.openBlock)(),(0,e.createElementBlock)("svg",Le,ke)):(0,e.createCommentVNode)("v-if",!0),t.itemType===t.LoginOption.IAM_CREDENTIAL?((0,e.openBlock)(),(0,e.createElementBlock)("svg",we,Ne)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",Oe,[(0,e.createElementVNode)("div",Ae,(0,e.toDisplayString)(t.itemTitle),1),t.itemText?((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:0,class:"p",title:t.itemText},(0,e.toDisplayString)(t.itemText),9,Me)):(0,e.createCommentVNode)("v-if",!0)])],42,ye)}const ut={TOOLKIT:"TOOLKIT",AMAZONQ:"AMAZONQ"},_t={LOGIN:"LOGIN",REAUTHNEEDED:"REAUTHNEEDED",REAUTHENTICATING:"REAUTHENTICATING"};var C=(t=>(t[t.NONE=0]="NONE",t[t.BUILDER_ID=1]="BUILDER_ID",t[t.ENTERPRISE_SSO=2]="ENTERPRISE_SSO",t[t.IAM_CREDENTIAL=3]="IAM_CREDENTIAL",t[t.IMPORTED_LOGINS=4]="IMPORTED_LOGINS",t))(C||{});const ht="userCancelled";function gt(t){return typeof t=="string"&&(t==="awsExplorer"||t==="codewhisperer"||t==="codecatalyst")}const Re=(0,e.defineComponent)({name:"SelectableItem",components:{},props:{itemId:Number,itemText:String,itemTitle:String,itemType:Number,isSelected:Boolean,isHovering:Boolean},data(){return{itemId:this.itemId,itemTitle:this.itemTitle,itemText:this.itemText,isSelected:this.isSelected,isHovering:!1,isFocused:!1,LoginOption:C}},async created(){},methods:{toggleSelection(){this.$emit("toggle",this.itemId)},hideFocus(t){t.stopPropagation(),this.isFocused=!1},showFocus(t){t.stopPropagation(),this.isHovering||(this.isFocused=!0)}}});var mt=S(4825),W=S(7433);const De=(0,W.A)(Re,[["render",Be],["__scopeId","data-v-458cca89"]]);class U{static registerGlobalCommands(){const o=new Event("remount");window.addEventListener("message",y=>{const{command:I}=y.data;I==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(T=>this.removeListener(T)),window.dispatchEvent(o))})}static addListener(o){this.messageListeners.add(o),window.addEventListener("message",o)}static removeListener(o){this.messageListeners.delete(o),window.removeEventListener("message",o)}static sendRequest(o,y,I){const T=JSON.parse(JSON.stringify(I)),O=new Promise((g,s)=>{const R=at=>{const x=at.data;if(o===x.id)if(this.removeListener(R),window.clearTimeout(st),x.error===!0){const rt=JSON.parse(x.data);s(new Error(rt.message))}else x.event?(typeof I[0]!="function"&&s(new Error(`Expected frontend event handler to be a function: ${y}`)),g(this.registerEventHandler(y,I[0]))):g(x.data)},st=setTimeout(()=>{this.removeListener(R),s(new Error(`Timed out while waiting for response: id: ${o}, command: ${y}`))},3e5);this.addListener(R)});return vscode.postMessage({id:o,command:y,data:T}),O}static registerEventHandler(o,y){const I=T=>{const O=T.data;if(O.command===o){if(!O.event)throw new Error(`Expected backend handler to be an event emitter: ${o}`);y(O.data)}};return this.addListener(I),{dispose:()=>this.removeListener(I)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(o,y)=>{if(typeof y!="string"){console.warn(`Tried to index webview client with non-string property: ${String(y)}`);return}if(y==="init"){const T=vscode.getState()??{};if(T.__once)return()=>Promise.resolve();vscode.setState(Object.assign(T,{__once:!0}))}const I=(this.counter++).toString();return(...T)=>this.sendRequest(I,y,T)}})}}U.counter=0,U.initialized=!1,U.messageListeners=new Set;const Ve=/^(https?:\/\/(.+)\.awsapps\.com\/start|https?:\/\/identitycenter\.amazonaws\.com\/ssoins-[\da-zA-Z]{16})\/?$/,Ue="URLs must start with http:// or https://. Example: https://d-xxxxxxxxxx.awsapps.com/start",p=U.create();function Pe(t){switch(t){case C.BUILDER_ID:return"awsId";case C.ENTERPRISE_SSO:return"iamIdentityCenter";case C.IAM_CREDENTIAL:return"sharedCredentials";default:return}}const Fe={[C.BUILDER_ID]:"auth_builderIdOption",[C.ENTERPRISE_SSO]:"auth_idcOption",[C.IAM_CREDENTIAL]:"auth_credentialsOption",[C.IMPORTED_LOGINS]:"auth_existingAuthOption"};function xe(t){return Fe[t]}const Ke=(0,e.defineComponent)({name:"Login",components:{SelectableItem:De},props:{disabled:{type:Boolean,default:!1},app:{type:String,default:"",required:!0}},data(){return{existingStartUrls:[],importedLogins:[],selectedLoginOption:C.NONE,stage:"START",regions:[],startUrlError:"",selectedRegion:"us-east-1",startUrl:"",app:this.app,LoginOption:C,profileName:"",accessKey:"",secretKey:""}},async created(){this.startUrl=await this.getDefaultStartUrl(),await this.emitUpdate("created")},async mounted(){this.fetchRegions(),await this.updateExistingStartUrls(),await this.updateImportedConnections(),p.resetStoredMetricMetadata(),await this.preselectLoginOption(),this.handleUrlInput()},methods:{toggleItemSelection(t){this.selectedLoginOption=t,p.storeMetricMetadata({credentialSourceId:Pe(t)});const o=xe(t);o!==void 0&&p.emitUiClick(o)},handleDocumentClick(t){t.target.closest(".selectable-item")||(this.selectedLoginOption=0)},async handleBackButtonClick(){this.stage==="START"?(p.emitUiClick("auth_toolkitCloseButton"),p.quitLoginScreen()):(await p.storeMetricMetadata({isReAuth:!1,result:"Cancelled"}),p.emitAuthMetric(),p.emitUiClick("auth_backButton"),this.stage="START")},async handleContinueClick(){if(this.stage==="START")if(this.selectedLoginOption===C.BUILDER_ID){this.stage="AUTHENTICATING";const t=await p.startBuilderIdSetup(this.app);t?(this.stage="START",p.errorNotification(t)):this.stage="CONNECTED"}else if(this.selectedLoginOption===C.ENTERPRISE_SSO)this.stage="SSO_FORM",this.$nextTick(()=>document.getElementById("startUrl").focus()),await p.storeMetricMetadata({awsRegion:this.selectedRegion});else if(this.selectedLoginOption>=C.IMPORTED_LOGINS){this.stage="AUTHENTICATING";const t=this.importedLogins[this.selectedLoginOption-C.IMPORTED_LOGINS],o=await p.startEnterpriseSetup(t.startUrl,t.region,this.app);o?(this.stage="START",p.errorNotification(o)):this.stage="CONNECTED"}else this.selectedLoginOption===C.IAM_CREDENTIAL&&(this.stage="AWS_PROFILE",this.$nextTick(()=>document.getElementById("profileName").focus()));else if(this.stage==="SSO_FORM"){if(this.shouldDisableSsoContinue())return;this.stage="AUTHENTICATING";const t=await p.startEnterpriseSetup(this.startUrl,this.selectedRegion,this.app);t?(this.stage="START",p.errorNotification(t)):this.stage="CONNECTED"}else if(this.stage==="AWS_PROFILE"){if(this.shouldDisableIamContinue())return;this.stage="AUTHENTICATING";const t=await p.startIamCredentialSetup(this.profileName,this.accessKey,this.secretKey);t?(this.stage="START",p.errorNotification(t)):this.stage="CONNECTED"}p.emitUiClick("auth_continueButton")},async handleCodeCatalystSignin(){p.emitUiClick("auth_codeCatalystSignIn"),this.stage="AUTHENTICATING";const t=await p.startBuilderIdSetup(this.app);t?(this.stage="START",p.errorNotification(t)):this.stage="CONNECTED"},handleUrlInput(){this.startUrl&&!Ve.test(this.startUrl)?this.startUrlError=Ue:this.startUrl&&this.existingStartUrls.some(t=>t===this.startUrl)?this.startUrlError="A connection for this start URL already exists. Sign out before creating a new one.":(this.startUrlError="",p.storeMetricMetadata({credentialStartUrl:this.startUrl}))},handleRegionInput(t){p.storeMetricMetadata({awsRegion:t.target.value}),p.emitUiClick("auth_regionSelection")},async handleCancelButton(){p.cancelAuthFlow(),await p.storeMetricMetadata({isReAuth:!1,result:"Cancelled"}),p.emitAuthMetric(),p.emitUiClick("auth_cancelButton"),this.stage="START"},async fetchRegions(){const t=await p.getRegions();this.regions=t},async emitUpdate(t){},async updateImportedConnections(){(await p.fetchConnections())?.filter(o=>!this.existingStartUrls.includes(o.startUrl)).forEach((o,y)=>{this.importedLogins.push({id:C.IMPORTED_LOGINS+y,text:this.app==="TOOLKIT"?"Used by Amazon Q":"Used by AWS Toolkit",title:`IAM Identity Center ${o.startUrl}`,type:C.ENTERPRISE_SSO,startUrl:o.startUrl,region:o.ssoRegion})}),this.$forceUpdate()},async updateExistingStartUrls(){this.existingStartUrls=(await p.listSsoConnections()).map(t=>t.startUrl)},async getDefaultStartUrl(){return await p.getDefaultStartUrl()},handleHelpLinkClick(){p.emitUiClick("auth_helpLink")},async preselectLoginOption(){this.importedLogins.length>0?this.selectedLoginOption=C.IMPORTED_LOGINS:this.app==="AMAZONQ"?this.selectedLoginOption=C.BUILDER_ID:this.app==="TOOLKIT"&&(this.selectedLoginOption=C.ENTERPRISE_SSO),this.$forceUpdate()},shouldDisableSsoContinue(){return this.startUrl.length==0||this.startUrlError.length>0||!this.selectedRegion},shouldDisableIamContinue(){return this.profileName.length<=0||this.accessKey.length<=0||this.secretKey.length<=0}}});var ft=S(3671);const He=(0,W.A)(Ke,[["render",be]]),ze=["data-app"],$e={id:"icon-container"},We={key:0,width:"71",height:"71",viewBox:"0 0 71 71",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ze=[(0,e.createStaticVNode)('<g clip-path="url(#clip0_331_37336)"><path d="M30.1307 1.46438L8.83068 13.7563C5.45818 15.7087 3.37256 19.3031 3.37256 23.2081V47.8067C3.37256 51.6969 5.45818 55.306 8.83068 57.2585L30.1307 69.5504C33.5032 71.5029 37.6596 71.5029 41.0321 69.5504L62.3321 57.2585C65.7046 55.306 67.7903 51.7117 67.7903 47.8067V23.2081C67.7903 19.3179 65.7046 15.7087 62.3321 13.7563L41.0321 1.46438C37.6596 -0.488125 33.5032 -0.488125 30.1307 1.46438Z" fill="url(#paint0_linear_331_37336)"></path><path d="M54.1966 21.6843L38.2364 12.469C37.5116 12.0401 36.5354 11.833 35.5739 11.833C34.6124 11.833 33.651 12.0401 32.9114 12.469L16.9512 21.6843C15.4868 22.5274 14.2887 24.5982 14.2887 26.2845V44.7149C14.2887 46.4011 15.4868 48.472 16.9512 49.3151L32.9114 58.5303C33.6362 58.9593 34.6124 59.1663 35.5739 59.1663C36.5354 59.1663 37.4968 58.9593 38.2364 58.5303L54.1966 49.3151C55.661 48.472 56.8591 46.4011 56.8591 44.7149V26.2845C56.8591 24.5982 55.661 22.5274 54.1966 21.6843ZM36.0029 54.7141C36.0029 54.7141 35.7958 54.7584 35.5887 54.7584C35.3816 54.7584 35.2337 54.7288 35.1745 54.7141L19.1699 45.4693C19.0072 45.3213 18.8002 44.9515 18.7558 44.7445V26.2549C18.8002 26.0478 19.022 25.678 19.1699 25.5301L35.1745 16.2853C35.1745 16.2853 35.3816 16.2409 35.5887 16.2409C35.7958 16.2409 35.9437 16.2705 36.0029 16.2853L52.0075 25.5301C52.1702 25.678 52.3772 26.0478 52.4216 26.2549V42.6588L40.0262 35.4997V33.5472C40.0262 33.1626 39.8191 32.8224 39.4937 32.6301L36.1212 30.6776C35.9585 30.5888 35.7662 30.5297 35.5887 30.5297C35.4112 30.5297 35.2189 30.574 35.0562 30.6776L31.6837 32.6301C31.3583 32.8224 31.1512 33.1774 31.1512 33.5472V37.4374C31.1512 37.822 31.3583 38.1622 31.6837 38.3545L35.0562 40.307C35.2189 40.3957 35.4112 40.4549 35.5887 40.4549C35.7662 40.4549 35.9585 40.4105 36.1212 40.307L37.8074 39.3307L50.2029 46.4899L36.0029 54.6845V54.7141Z" fill="white"></path></g><defs><linearGradient id="paint0_linear_331_37336" x1="64.1515" y1="-5.31021" x2="10.5465" y2="71.2515" gradientUnits="userSpaceOnUse"><stop stop-color="#A7F8FF"></stop><stop offset="0.03" stop-color="#9DF1FF"></stop><stop offset="0.08" stop-color="#84E1FF"></stop><stop offset="0.15" stop-color="#5AC7FF"></stop><stop offset="0.22" stop-color="#21A2FF"></stop><stop offset="0.26" stop-color="#008DFF"></stop><stop offset="0.66" stop-color="#7F33FF"></stop><stop offset="0.99" stop-color="#39127D"></stop></linearGradient><clipPath id="clip0_331_37336"><rect width="71" height="71" fill="white"></rect></clipPath></defs>',2)],Ge={id:"content-container"},je={id:"title"},Qe=(0,e.createElementVNode)("div",{id:"call-to-action"},"Please re-authenticate to continue",-1),Xe={key:0,id:"error-message",style:{color:"red"}},Je={key:1},Ye=(0,e.createElementVNode)("div",null,"Re-authentication in progress",-1);function qe(t,o,y,I,T,O){return(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",{id:"reauthenticate-container","data-app":t.app},[(0,e.createCommentVNode)(" Icon "),(0,e.createElementVNode)("div",$e,[t.app==="AMAZONQ"?((0,e.openBlock)(),(0,e.createElementBlock)("svg",We,Ze)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("div",Ge,[t.state==="REAUTHNEEDED"?((0,e.openBlock)(),(0,e.createElementBlock)(e.Fragment,{key:0},[(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("div",je,"Connection to "+(0,e.toDisplayString)(t.name)+" Expired",1),Qe]),(0,e.createElementVNode)("div",null,[(0,e.createElementVNode)("button",{id:"reauthenticate",onClick:o[0]||(o[0]=(...g)=>t.reauthenticate&&t.reauthenticate(...g))},"Re-authenticate"),t.errorMessage?((0,e.openBlock)(),(0,e.createElementBlock)("div",Xe,(0,e.toDisplayString)(t.errorMessage),1)):(0,e.createCommentVNode)("v-if",!0)]),(0,e.createElementVNode)("button",{id:"signout",onClick:o[1]||(o[1]=(...g)=>t.signout&&t.signout(...g))},"Sign Out")],64)):t.state==="REAUTHENTICATING"?((0,e.openBlock)(),(0,e.createElementBlock)("div",Je,[Ye,(0,e.createElementVNode)("button",{id:"cancel",style:{color:"#6f6f6f","background-color":"var(--vscode-input-background)"},onClick:o[2]||(o[2]=(...g)=>t.cancel&&t.cancel(...g))}," Cancel ")])):(0,e.createCommentVNode)("v-if",!0)])],8,ze)),[[e.vShow,t.doShow]])}const B=U.create(),et={AMAZONQ:"Amazon Q",TOOLKIT:"Toolkit"},tt=(0,e.defineComponent)({name:"Reauthenticate",data(){return{name:"",errorMessage:"",doShow:!1}},props:{app:{type:String,required:!0},state:{type:String,required:!0}},async created(){this.name=et[this.app];const t=await B.getReauthError();this.errorMessage=t?t.text:"",this.doShow=!0},methods:{async reauthenticate(){B.emitUiClick("auth_reauthenticate"),await B.reauthenticateConnection()},async signout(){B.emitUiClick("auth_signout"),await B.signout()},async cancel(){B.emitUiClick("auth_reauthCancelButton"),await B.cancelAuthFlow()}}});var bt=S(2568);const ot=(0,W.A)(tt,[["render",qe]]),J=U.create(),nt=(0,e.defineComponent)({name:"auth",components:{Login:He,Reauthenticate:ot},data(){return{authFlowState:"",refreshKey:0}},props:{app:{type:String,required:!0}},async created(){J.onActiveConnectionModified(()=>{this.refreshAuthState()}),await this.refreshAuthState()},methods:{async refreshAuthState(){await J.refreshAuthState(),this.authFlowState=await J.getAuthState(),this.refreshKey+=1}}});var It=S(5389);const it=(0,W.A)(nt,[["render",n]]);const te=()=>(0,e.createApp)(it,{app:"TOOLKIT"}),oe=te();oe.mount("#vue-app"),window.addEventListener("remount",()=>{oe.unmount(),te().mount("#vue-app")})})();var q=this;for(var ee in Z)q[ee]=Z[ee];Z.__esModule&&Object.defineProperty(q,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 *
 * This module is run within the webview, and will mount the Vue app.
 */
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

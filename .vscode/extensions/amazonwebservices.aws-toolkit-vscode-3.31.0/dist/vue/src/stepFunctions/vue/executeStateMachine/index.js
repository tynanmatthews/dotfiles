(()=>{"use strict";var y={7433:(n,e)=>{var i;i={value:!0},e.A=(s,o)=>{const r=s.__vccOpts||s;for(const[a,l]of o)r[a]=l;return r}}},m={};function v(n){var e=m[n];if(e!==void 0)return e.exports;var i=m[n]={exports:{}};return y[n](i,i.exports,v),i.exports}var p={};const t=Vue,V={id:"app"},N={class:"container button-container",style:{"justify-content":"space-between"}},x=(0,t.createElementVNode)("br",null,null,-1),S=(0,t.createElementVNode)("div",null,[(0,t.createElementVNode)("label",{class:"input-header"}," Execution Input ")],-1),$=(0,t.createElementVNode)("br",null,null,-1),C=(0,t.createElementVNode)("label",{for:"textarea"}," Provide JSON ",-1),L=(0,t.createElementVNode)("label",{for:"file"}," Select a file ",-1),k=(0,t.createElementVNode)("br",null,null,-1),I={class:"custom-file-upload"},O={class:"custom-file-name"},D=(0,t.createElementVNode)("br",null,null,-1),F=(0,t.createElementVNode)("br",null,null,-1),J=["readonly","placeholder"];function M(n,e,i,s,o,r){return(0,t.openBlock)(),(0,t.createElementBlock)("div",V,[(0,t.createElementVNode)("div",N,[(0,t.createElementVNode)("h1",null,(0,t.toDisplayString)(n.initialData.name),1),(0,t.createElementVNode)("div",null,[(0,t.createElementVNode)("input",{type:"submit",onClick:e[0]||(e[0]=(...a)=>n.sendInput&&n.sendInput(...a)),value:"Execute"})])]),x,S,$,(0,t.createElementVNode)("div",null,[(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"radio","onUpdate:modelValue":e[1]||(e[1]=a=>n.inputChoice=a),value:"textarea"},null,512),[[t.vModelRadio,n.inputChoice]]),C]),(0,t.createElementVNode)("div",null,[(0,t.withDirectives)((0,t.createElementVNode)("input",{type:"radio","onUpdate:modelValue":e[2]||(e[2]=a=>n.inputChoice=a),value:"file"},null,512),[[t.vModelRadio,n.inputChoice]]),L]),(0,t.createElementVNode)("div",{style:(0,t.normalizeStyle)({visibility:n.fileInputVisible?"visible":"hidden"})},[k,(0,t.createElementVNode)("label",I,[(0,t.createElementVNode)("input",{type:"file",onChange:e[3]||(e[3]=a=>n.processFile(a))},null,32),(0,t.createTextVNode)(" Choose File ")]),(0,t.createElementVNode)("span",O,(0,t.toDisplayString)(n.selectedFile),1),D,F],4),(0,t.createElementVNode)("div",{style:(0,t.normalizeStyle)({visibility:n.textAreaVisible?"visible":"hidden"})},[(0,t.withDirectives)((0,t.createElementVNode)("textarea",{style:{width:"100%","margin-bottom":"10px"},rows:"10","onUpdate:modelValue":e[4]||(e[4]=a=>n.executionInput=a),readonly:n.inputChoice=="file",placeholder:n.placeholderJson},null,8,J),[[t.vModelText,n.executionInput]])],4)])}class c{static registerGlobalCommands(){const e=new Event("remount");window.addEventListener("message",i=>{const{command:s}=i.data;s==="$clear"&&(vscode.setState({}),this.messageListeners.forEach(o=>this.removeListener(o)),window.dispatchEvent(e))})}static addListener(e){this.messageListeners.add(e),window.addEventListener("message",e)}static removeListener(e){this.messageListeners.delete(e),window.removeEventListener("message",e)}static sendRequest(e,i,s){const o=JSON.parse(JSON.stringify(s)),r=new Promise((a,l)=>{const h=U=>{const d=U.data;if(e===d.id)if(this.removeListener(h),window.clearTimeout(R),d.error===!0){const q=JSON.parse(d.data);l(new Error(q.message))}else d.event?(typeof s[0]!="function"&&l(new Error(`Expected frontend event handler to be a function: ${i}`)),a(this.registerEventHandler(i,s[0]))):a(d.data)},R=setTimeout(()=>{this.removeListener(h),l(new Error(`Timed out while waiting for response: id: ${e}, command: ${i}`))},3e5);this.addListener(h)});return vscode.postMessage({id:e,command:i,data:o}),r}static registerEventHandler(e,i){const s=o=>{const r=o.data;if(r.command===e){if(!r.event)throw new Error(`Expected backend handler to be an event emitter: ${e}`);i(r.data)}};return this.addListener(s),{dispose:()=>this.removeListener(s)}}static create(){return this.initialized||(this.initialized=!0,this.registerGlobalCommands()),new Proxy({},{set:()=>{throw new TypeError("Cannot set property to webview client")},get:(e,i)=>{if(typeof i!="string"){console.warn(`Tried to index webview client with non-string property: ${String(i)}`);return}if(i==="init"){const o=vscode.getState()??{};if(o.__once)return()=>Promise.resolve();vscode.setState(Object.assign(o,{__once:!0}))}const s=(this.counter++).toString();return(...o)=>this.sendRequest(s,i,o)}})}}c.counter=0,c.initialized=!1,c.messageListeners=new Set;const u=new Set;window.addEventListener("remount",()=>u.clear());const T={created(){if(this.$data===void 0)return;const n=vscode.getState()??{};this.$options._count=(this.$options._count??0)+1;const e=this.id??`${this.name??`DEFAULT-${u.size}`}-${this.$options._count}`;if(this.$options._unid=e,u.has(e)){console.warn(`Component "${e}" already exists. State-saving functionality will be disabled.`);return}u.add(e);const i=n[e]??{};Object.keys(this.$data).forEach(s=>{this.$data[s]=i[s]??this.$data[s]}),Object.keys(this.$data).forEach(s=>{this.$watch(s,o=>{const r=vscode.getState()??{},a=Object.assign(r[e]??{},{[s]:o!==void 0?JSON.parse(JSON.stringify(o)):void 0});vscode.setState(Object.assign(r,{[e]:a}))},{deep:!0})})}},_=`{
	"key1": "value1",
	"key2": "value2",
	"key3": "value3"
}`,f=c.create(),A={name:"",region:"",arn:""},j=(0,t.defineComponent)({async created(){this.initialData=await f.init()??this.initialData},data:()=>({initialData:A,executionInput:"",isReadOnly:!1,inputChoice:"textarea",placeholderJson:_,selectedFile:"",fileInputVisible:!1,textAreaVisible:!0}),watch:{inputChoice:function(n,e){this.handleInputChange(n)}},methods:{handleInputChange:function(n){switch(n){case"file":this.selectedFile="No file selected",this.placeholderJson="",this.executionInput="",this.fileInputVisible=!0;break;case"textarea":this.placeholderJson=_,this.executionInput="",this.fileInputVisible=!1;break}},processFile:function(n){console.log(n),console.log(n.target);const e=n.target;if(e.files&&e.files.length>0){const i=new FileReader;i.onload=s=>{if(s.target){const o=s.target.result;this.executionInput=o}},i.onerror=s=>{throw s},i.readAsText(e.files[0]),this.selectedFile=e.files[0].name,this.textAreaVisible=!0}},sendInput:function(){f.executeStateMachine(this.executionInput)}},mixins:[T]});var z=v(7433);const P=(0,z.A)(j,[["render",M]]);const w=()=>(0,t.createApp)(P),b=w();b.mount("#vue-app"),window.addEventListener("remount",()=>{b.unmount(),w().mount("#vue-app")});var E=this;for(var g in p)E[g]=p[g];p.__esModule&&Object.defineProperty(E,"__esModule",{value:!0})})();
/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
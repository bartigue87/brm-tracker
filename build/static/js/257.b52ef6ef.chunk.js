"use strict";(self.webpackChunkbrm_tracker=self.webpackChunkbrm_tracker||[]).push([[257],{729:function(e,n,a){a.d(n,{Z:function(){return t}});a(791);var r=a(184),t=function(e){return(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},342:function(e,n,a){a.r(n),a.d(n,{default:function(){return E}});var r=a(413),t=a(861),s=a(885),i=a(757),l=a.n(i),o=a(791),u=a(551),c=a(856),d=a(533),p=a(281),m=a(657),v=a(943),x=a(806),S=a(729),_=a(836),h=a(871),T=a(816),f=a(319),C=a(184);function E(){var e=(0,o.useState)(!0),n=(0,s.Z)(e,2),a=n[0],i=n[1],E=(0,o.useContext)(_.V),b=(0,v.x)(),O=b.isLoading,P=b.error,Z=b.sendRequest,g=b.clearError,j=(0,h.s0)(),k=(0,d.c)({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),w=(0,s.Z)(k,3),y=w[0],N=w[1],R=w[2];function A(){return(A=(0,t.Z)(l().mark((function e(n){var r,t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log(y.inputs),!a){e.next=15;break}return e.prev=3,e.next=6,Z("".concat({NODE_ENV:"production",PUBLIC_URL:"/brm-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL,"/users/login"),"POST",JSON.stringify({email:y.inputs.email.value,password:y.inputs.password.value}),{"Content-Type":"application/json"});case 6:r=e.sent,E.login(r.userId,r.token),j("/articles",{replace:!0}),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(3);case 13:e.next=25;break;case 15:return e.prev=15,e.next=18,Z("".concat({NODE_ENV:"production",PUBLIC_URL:"/brm-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_BACKEND_URL,"/users/signup"),"POST",JSON.stringify({name:y.inputs.name.value,email:y.inputs.email.value,password:y.inputs.password.value}),{"Content-Type":"application/json"});case 18:t=e.sent,j("/articles",{replace:!0}),E.login(t.userId,t.token),e.next=25;break;case 23:e.prev=23,e.t1=e.catch(15);case 25:case"end":return e.stop()}}),e,null,[[3,11],[15,23]])})))).apply(this,arguments)}return console.log(y.isValid),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(f.Z,{}),(0,C.jsx)(p.Z,{error:P,onClear:g}),(0,C.jsxs)(S.Z,{className:"authentication",children:[O&&(0,C.jsx)(m.Z,{asOverlay:!0}),(0,C.jsx)("h2",{children:a?"Login":"Sign Up"}),(0,C.jsx)("hr",{}),(0,C.jsxs)("form",{onSubmit:function(e){return A.apply(this,arguments)},children:[!a&&(0,C.jsx)(u.Z,{element:"input",id:"name",type:"text",label:"Username",onInput:N,errorText:"Please enter a valid username",validators:[(0,x.hg)()]}),(0,C.jsx)(u.Z,{id:"email",type:"email",element:"input",label:"Email",onInput:N,errorText:"Please enter a valid email",validators:[(0,x.hg)(),(0,x.Ox)()]}),(0,C.jsx)(u.Z,{id:"password",type:"password",element:"input",label:"Password",onInput:N,errorText:"Password must be at least 6 characters in length",validators:[(0,x.hg)(),(0,x.CP)(6)]}),(0,C.jsx)(c.Z,{type:"submit",disabled:!y.isValid,children:a?"LOGIN":"SIGN UP"})]}),(0,C.jsx)(c.Z,{inverse:!0,onClick:function(){a?R((0,r.Z)((0,r.Z)({},y.inputs),{},{name:{value:"",isValid:!1}}),!1):R((0,r.Z)((0,r.Z)({},y.inputs),{},{name:void 0}),y.inputs.email.isValid&&y.inputs.password.isValid),i((function(e){return!e}))},children:a?"Not a member? Create an account":"Already a member? Login"})]}),(0,C.jsx)(T.Z,{})]})}}}]);
//# sourceMappingURL=257.b52ef6ef.chunk.js.map
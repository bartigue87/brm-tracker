"use strict";(self.webpackChunkbrm_tracker=self.webpackChunkbrm_tracker||[]).push([[81],{445:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var a=t(861),n=t(885),l=t(757),i=t.n(l),s=t(791),o=t(319),c=t(816),u=(t(127),t(871)),d=t(551),p=t(806),h=t(856),m=t(533),x=t(943),v=t(836),f=t(281),b=t(657),j=t(184);function w(){var e=(0,s.useContext)(v.V),r=(0,u.s0)();(0,s.useEffect)((function(){window.scrollTo(0,0)}),[]);var t=(0,x.x)(),l=t.isLoading,w=t.error,y=t.sendRequest,k=t.clearError,Z=(0,m.c)({title:{value:"",isValid:!1},deposit:{value:"",isValid:!1},withdrawals:{value:"",isValid:!1},currentBalance:{value:"",isValid:!1}},!1),g=(0,n.Z)(Z,2),C=g[0],N=g[1];function T(){r("/".concat(e.userId,"/brm-tracker"),{replace:!0})}function B(){return(B=(0,a.Z)(i().mark((function r(t){return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),r.prev=1,r.next=4,y("https://dfshive.herokuapp.com/api/trackers","POST",JSON.stringify({title:C.inputs.title.value,deposit:C.inputs.deposit.value,withdrawals:C.inputs.withdrawals.value,currentBalance:C.inputs.currentBalance.value}),{"Content-Type":"application/json",Authorization:"Bearer ".concat(e.token)});case 4:T(),r.next=9;break;case 7:r.prev=7,r.t0=r.catch(1);case 9:case"end":return r.stop()}}),r,null,[[1,7]])})))).apply(this,arguments)}return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.Z,{}),(0,j.jsxs)("section",{className:"new-tracker-container",children:[(0,j.jsx)("h1",{className:"page-header",children:"Create a new Tracker"}),(0,j.jsx)(f.Z,{error:w,onClear:k}),(0,j.jsxs)("form",{className:"form",onSubmit:function(e){return B.apply(this,arguments)},children:[l&&(0,j.jsx)(b.Z,{asOverlay:!0}),(0,j.jsx)("div",{className:"form-controller",children:(0,j.jsx)(d.Z,{id:"title",element:"input",type:"text",label:"Title",placeholder:"Which site/app?",errorText:"Please enter a valid title",validators:[(0,p.hg)()],onInput:N})}),(0,j.jsx)("div",{className:"form-controller",children:(0,j.jsx)(d.Z,{id:"deposit",element:"input",type:"number",label:"Deposit",placeholder:"Enter amount... enter 0 if you didn't deposit",errorText:"Please enter a valid number",validators:[(0,p.hg)()],onInput:N})}),(0,j.jsx)("div",{className:"form-controller",children:(0,j.jsx)(d.Z,{id:"withdrawals",element:"input",type:"number",label:"Withdrawal",placeholder:"Enter amount... enter 0 if you didn't withdraw",errorText:"Please enter a valid number",validators:[(0,p.hg)()],onInput:N})}),(0,j.jsx)("div",{className:"form-controller",children:(0,j.jsx)(d.Z,{id:"currentBalance",element:"input",type:"number",label:"Current Balance",placeholder:"Enter the amount of money in your account",errorText:"Please enter a valid number",validators:[(0,p.hg)()],onInput:N})}),(0,j.jsxs)("div",{style:{display:"flex",gap:"25px"},children:[(0,j.jsx)(h.Z,{type:"submit",disabled:!C.isValid,children:"Submit"}),(0,j.jsx)("button",{onClick:T,className:"button",children:"Cancel"})]})]})]}),(0,j.jsx)(c.Z,{})]})}},127:function(){}}]);
//# sourceMappingURL=81.184a6d18.chunk.js.map
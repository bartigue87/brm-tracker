"use strict";(self.webpackChunkbrm_tracker=self.webpackChunkbrm_tracker||[]).push([[709],{856:function(n,e,t){t.d(e,{Z:function(){return i}});t(791);var r=t(504),a=t(184),i=function(n){return n.href?(0,a.jsx)("a",{className:"button button--".concat(n.size||"default"," ").concat(n.inverse&&"button--inverse"," ").concat(n.danger&&"button--danger"),href:n.href,children:n.children}):n.to?(0,a.jsx)(r.rU,{to:n.to,exact:n.exact,className:"button button--".concat(n.size||"default"," ").concat(n.inverse&&"button--inverse"," ").concat(n.danger&&"button--danger"),children:n.children}):(0,a.jsx)("button",{className:"button button--".concat(n.size||"default"," ").concat(n.inverse&&"button--inverse"," ").concat(n.danger&&"button--danger"),type:n.type,onClick:n.onClick,disabled:n.disabled,children:n.children})}},551:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(885),a=t(413),i=t(791),l=t(806),c=t(184),o=function(n,e){switch(e.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},n),{},{value:e.val,isValid:(0,l.Gu)(e.val,e.validators)});case"TOUCH":return(0,a.Z)((0,a.Z)({},n),{},{isTouched:!0});default:return n}},s=function(n){var e=(0,i.useReducer)(o,{value:n.initialValue||"",isTouched:!1,isValid:n.initialValid||!1}),t=(0,r.Z)(e,2),a=t[0],l=t[1],s=n.id,u=n.onInput,d=a.value,f=a.isValid;(0,i.useEffect)((function(){u(s,d,f)}),[s,f,d]);var h=function(e){l({type:"CHANGE",val:e.target.value,validators:n.validators})},m=function(){l({type:"TOUCH"})},v="input"===n.element?(0,c.jsx)("input",{id:n.id,type:n.type,placeholder:n.placeholder,onChange:h,onBlur:m,value:a.value}):(0,c.jsx)("textarea",{id:n.id,rows:n.rows||3,onChange:h,onBlur:m,value:a.value});return(0,c.jsxs)("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid"),children:[(0,c.jsx)("label",{htmlFor:n.id,children:n.label}),v,!a.isValid&&a.isTouched&&(0,c.jsx)("p",{children:n.errorText})]})}},281:function(n,e,t){t(791);var r=t(738),a=t(856),i=t(184);e.Z=function(n){return(0,i.jsx)(r.Z,{onCancel:n.onClear,header:"An Error Occurred!",show:!!n.error,footer:(0,i.jsx)(a.Z,{onClick:n.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:n.error})})}},738:function(n,e,t){t.d(e,{Z:function(){return u}});var r=t(413),a=t(791),i=t(164),l=t(776),c=t(184),o=function(n){return i.createPortal((0,c.jsx)("div",{className:"backdrop",onClick:n.onClick}),document.getElementById("backdrop-hook"))},s=function(n){var e=(0,c.jsxs)("div",{className:"modal ".concat(n.className),style:n.style,children:[(0,c.jsx)("header",{className:"modal__header ".concat(n.headerClass),children:(0,c.jsx)("h2",{children:n.header})}),(0,c.jsxs)("form",{onSubmit:n.onSubmit?n.onSubmit:function(n){return n.preventDefault()},children:[(0,c.jsx)("div",{className:"modal__content ".concat(n.contentClass),children:n.children}),(0,c.jsx)("footer",{className:"modal__footer ".concat(n.footerClass),children:n.footer})]})]});return i.createPortal(e,document.getElementById("modal-hook"))},u=function(n){return(0,c.jsxs)(a.Fragment,{children:[n.show&&(0,c.jsx)(o,{onClick:n.onCancel}),(0,c.jsx)(l.Z,{in:n.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,c.jsx)(s,(0,r.Z)({},n))})]})}},816:function(n,e,t){t.d(e,{Z:function(){return i}});t(791);var r=t.p+"static/media/twitter-icons-png-2.b4480425f8090d6d783b.png",a=t(184);function i(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("footer",{role:"contentinfo",className:"footer",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsxs)("ul",{className:"footer__social-links",children:[(0,a.jsx)("li",{className:"footer__social-link-item",children:(0,a.jsx)("a",{href:"mailto:bwartigue@gmail.com",children:(0,a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADaUlEQVR4nO2aPYgUSRiGn7cdlkVEBC8QEblAjFwV/IkUf1DQRQzcQFBBVkQu0APluEQw08DkONRATAy8xEAEMXBFRFwQEQR/7hANFAMRDhb1TvDv9r2gZ6Fdd7Z7anqm3Z16oGFZqr566536qqqrCyKRSCQSiUS6FI39YXsNsBmYCdQyzxhJ/RlPbYL/NcNo/QnhS2C9a5IuQ90A278DPwcGm6pcAPbOsL0fOF61mgpYCryR7dvAmqrVVMTTBJhTtYoK6UlofRKb0jSa2buGrjegRjkG/AsMAZ9I1/QvfL2+h67XY+mZZJ4eoBfYRLpnaYmyDJhFKuqwpJclxGuI7XnAGUroPJQ7/PuBB7YP2G5LWtneBTwCdpQVs2yhc4CzwA3bi8oKanuB7SvAH8APZcWFYgYMk+Z2M6wnHQ1HbAcvs7aT+k71EbCtyeqjwP0ijTz35OywvdT23Zxyjbhje0lA53+0fT2wzee2t9jelFeuiAHb6oJqtn+x/T5A0Efbx2z3FOh4Yvug7X8C2vls+5Tt2fVYG3PKFzKgf5zARbZvBoiz7Qe2V0/S+cW2bwXG/tPpK3023vqcOoUM2NLgV/rJ9tsAoZ9t/2Z7ViZeq6PruO3eCXQWMuBZTqFvDMg0sND21QDRdmr8dtsrbd8LjHHP9vJJ9LXXgMxo2GP778BO/BdQ573tX52zwriAAS3vAySNSroA9AEXA0I0q2EYWCHppKTQLXZw4w2R9FrSTmAAeFVW3AzvgEPAOklPygqaEP6iMiGSLpGOhvOEH3aOZwhYJum0pLJiAm16FZY0ImkQ2Aq8aCHUCDAIbJXUSpyGtPUsQNIQsAw4TfMj7RLQJ+l82b96lrYfhkh6J+kQsAH4q0CVV8CApAFJ7ZhLviIhP09LOTOUNAysAE4w8cvVKOm80VefRzpCEQNKQ9IHSUeBVaTL2RiPSfN8UNJIp/RARSfCkh4Ca23PJz1JetGmPM/tX6VH4p3I8Ty6+kQYim2EpvWHk+k+AnL7Fw3ohIrvmY7uA75HihgwlUdJ16dAbv+KLHGHbQ+UIKYKFuQVqJGfAtP6+kycBKsWUDXRgKoFVMynhPSbe7dyTk5vc5wD9lWtpsNcBHZnL0v3k14fnUt6/6aXqZ8ijS5iX5cU8hUrEolEIpFIZPrwP8VzVbW6ff4qAAAAAElFTkSuQmCC",className:"footer__social-image",alt:"Email"})})}),(0,a.jsx)("li",{className:"footer__social-link-item",children:(0,a.jsx)("a",{href:"https://twitter.com",title:"Link to Twitter",children:(0,a.jsx)("img",{src:r,className:"footer__social-image",alt:"Twitter"})})})]})})})})}},319:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(885),a=t(791);var i=t.p+"static/media/icon-hamburger.5273efa7c50e96ef3e51e7a2b54048ce.svg";var l=t.p+"static/media/icon-close.d47fda63cbd8b3fedbbc1b2a53f64470.svg",c=t(504),o=t(871),s=t(836),u=t(184);function d(){var n=(0,a.useContext)(s.V),e=(0,o.s0)();function t(){n.logout(),e("/login",{replace:!0})}var d=(0,a.useState)(!0),f=(0,r.Z)(d,2),h=f[0],m=f[1];var v={transform:h?"translateX(100%)":"translateX(0%)"},A={backgroundImage:"url(".concat(h?i:l,")"),backgroundRepeat:"no-repeat",backgroundColor:"transparent"};return(0,u.jsxs)("div",{className:"nav-container",children:[(0,u.jsx)("h1",{children:"DFS Hive"}),(0,u.jsx)("nav",{className:"active",children:(0,u.jsxs)("ul",{className:"nav-list",children:[(0,u.jsx)(c.OL,{to:"/".concat(n.userId,"/brm-tracker"),children:(0,u.jsx)("li",{className:"link",children:"Bankroll Manager"})}),(0,u.jsx)(c.OL,{to:"/articles",children:(0,u.jsx)("li",{className:"link",children:"Articles"})}),(0,u.jsx)(c.OL,{to:"/brandons-plays",children:(0,u.jsx)("li",{className:"link",children:"Brandon's Plays"})}),(0,u.jsx)(c.OL,{to:"/login",children:n.isLoggedIn?(0,u.jsx)("li",{className:"link",onClick:t,children:"Logout"}):(0,u.jsx)("li",{className:"link",children:"Login"})})]})}),(0,u.jsx)("nav",{className:"inactive",style:v,children:(0,u.jsxs)("ul",{className:"nav-list",children:[(0,u.jsx)(c.OL,{to:"/".concat(n.userId,"/brm-tracker"),children:(0,u.jsx)("li",{className:"link",children:"Bankroll Manager"})}),(0,u.jsx)(c.OL,{to:"/articles",children:(0,u.jsx)("li",{className:"link",children:"Articles"})}),(0,u.jsx)(c.OL,{to:"/brandons-plays",children:(0,u.jsx)("li",{className:"link",children:"Brandon's Plays"})}),(0,u.jsx)(c.OL,{to:"/login",children:n.isLoggedIn?(0,u.jsx)("li",{className:"link",onClick:t,children:"Logout"}):(0,u.jsx)("li",{className:"link",children:"Login"})})]})}),(0,u.jsx)("button",{className:"icon",style:A,onClick:function(){m((function(n){return!n}))}})]})}},533:function(n,e,t){t.d(e,{c:function(){return o}});var r=t(885),a=t(942),i=t(413),l=t(791),c=function(n,e){switch(e.type){case"INPUT_CHANGE":var t=!0;for(var r in n.inputs)n.inputs[r]&&(t=r===e.inputId?t&&e.isValid:t&&n.inputs[r].isValid);return(0,i.Z)((0,i.Z)({},n),{},{inputs:(0,i.Z)((0,i.Z)({},n.inputs),{},(0,a.Z)({},e.inputId,{value:e.value,isValid:e.isValid})),isValid:t});case"SET_DATA":return{inputs:e.inputs,isValid:e.formIsValid};default:return n}},o=function(n,e){var t=(0,l.useReducer)(c,{inputs:n,isValid:e}),a=(0,r.Z)(t,2),i=a[0],o=a[1];return[i,(0,l.useCallback)((function(n,e,t){o({type:"INPUT_CHANGE",value:e,isValid:t,inputId:n})}),[]),(0,l.useCallback)((function(n,e){o({type:"SET_DATA",inputs:n,formIsValid:e})}),[])]}},943:function(n,e,t){t.d(e,{x:function(){return o}});var r=t(861),a=t(885),i=t(757),l=t.n(i),c=t(791),o=function(){var n=(0,c.useState)(!1),e=(0,a.Z)(n,2),t=e[0],i=e[1],o=(0,c.useState)(),s=(0,a.Z)(o,2),u=s[0],d=s[1],f=(0,c.useRef)([]),h=(0,c.useCallback)(function(){var n=(0,r.Z)(l().mark((function n(e){var t,r,a,c,o,s,u=arguments;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,a=u.length>3&&void 0!==u[3]?u[3]:{},i(!0),c=new AbortController,f.current.push(c),n.prev=6,n.next=9,fetch(e,{method:t,body:r,headers:a,signal:c.signal});case 9:return o=n.sent,n.next=12,o.json();case 12:if(s=n.sent,f.current=f.current.filter((function(n){return n!==c})),o.ok){n.next=17;break}throw i(!1),new Error(s.message);case 17:return i(!1),n.abrupt("return",s);case 21:throw n.prev=21,n.t0=n.catch(6),d(n.t0.message),i(!1),n.t0;case 26:case"end":return n.stop()}}),n,null,[[6,21]])})));return function(e){return n.apply(this,arguments)}}(),[]);return(0,c.useEffect)((function(){return function(){f.current.forEach((function(n){return n.abort()}))}}),[]),{isLoading:t,error:u,sendRequest:h,clearError:function(){d(null)}}}},806:function(n,e,t){t.d(e,{Ox:function(){return u},CP:function(){return s},hg:function(){return o},Gu:function(){return d}});var r=t(192);var a="REQUIRE",i="MINLENGTH",l="MAXLENGTH",c="EMAIL",o=function(){return{type:a}},s=function(n){return{type:i,val:n}},u=function(){return{type:c}},d=function(n,e){var t,o=!0,s=function(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=(0,r.Z)(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var a=0,i=function(){};return{s:i,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,o=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){o=!0,l=n},f:function(){try{c||null==t.return||t.return()}finally{if(o)throw l}}}}(e);try{for(s.s();!(t=s.n()).done;){var u=t.value;u.type===a&&(o=o&&n.trim().length>0),u.type===i&&(o=o&&n.trim().length>=u.val),u.type===l&&(o=o&&n.trim().length<=u.val),"MIN"===u.type&&(o=o&&+n>=u.val),"MAX"===u.type&&(o=o&&+n<=u.val),u.type===c&&(o=o&&/^\S+@\S+\.\S+$/.test(n))}}catch(d){s.e(d)}finally{s.f()}return o}}}]);
//# sourceMappingURL=709.8c5e653f.chunk.js.map
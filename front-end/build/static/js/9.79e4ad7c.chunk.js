(this["webpackJsonpecommerce-project"]=this["webpackJsonpecommerce-project"]||[]).push([[9],{128:function(n,e,t){},129:function(n,e,t){},151:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(54),i=t(5),c=t(3),l=t.n(c),u=t(42);var s=t(56);function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],a=!0,r=!1,o=void 0;try{for(var i,c=n[Symbol.iterator]();!(a=(i=c.next()).done)&&(t.push(i.value),!e||t.length!==e);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return t}}(n,e)||Object(s.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=t(22),f=t(53),d=(t(128),t(10)),b=t(11);function g(){var n=Object(d.a)(["\n    color: gray;\n    font-size: 16px;\n    font-weight: normal;\n    position: absolute;\n    pointer-events: none;\n    left: 5px;\n    top: 10px;\n    transition: 300ms ease all;\n    \t&.shrink {\n      \t\t@include shrinkLabel();\n    \t}\n  \t}\n"]);return g=function(){return n},n}function x(){var n=Object(d.a)(["\n    background: none;\n    background-color: white;\n    color: gray;\n    font-size: 18px;\n    padding: 10px 10px 10px 5px;\n    display: block;\n    width: 100%;\n    border: none;\n    border-radius: 20px;\n    border-bottom: 1px solid gray;\n    margin: 25px -7px;\n        &:focus {\n            outline: none;\n        }\n        &:focus ~ .form-input-label {\n            @include shrinkLabel();\n        }\n    }\n    input[type='password'] {\n        letter-spacing: 0.3em;\n    }\n"]);return x=function(){return n},n}function v(){var n=Object(d.a)(["\n    position: relative;\n    margin: 45px 0;\n"]);return v=function(){return n},n}var h=b.c.div(v()),y=b.c.input(x()),w=b.c.label(g()),j=function(n){var e=n.handleChange,t=n.label,a=Object(f.a)(n,["handleChange","label"]);return r.a.createElement(h,{className:"group"},r.a.createElement(y,Object.assign({className:"form-input",onChange:e},a)),t?r.a.createElement(w,{className:"".concat(a.value.length?"shrink":""," form-input-label")},t):null)},O=t(51);function E(){var n=Object(d.a)(["\n  \twidth: 100%;\n    color: #2871a4 !important;\n\ttext-align: center !important;\n    margin: auto;\n    font-size: 28px;\n    justify-content: center;\n  \t@media screen and (max-width: 800px) {\n    \tpadding: 10px;\n    \tmargin-bottom: -10px;\n    \tfont-size: 10px;\n  \t}\n"]);return E=function(){return n},n}function S(){var n=Object(d.a)(["\n    width: 70%;\n    color: white;\n    padding: 30px;\n    background-color: #8E8E93;\n    color: #333;\n    box-shadow: 3px 3px 18px -8px #8b8b8b;\n"]);return S=function(){return n},n}function k(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n"]);return k=function(){return n},n}function N(){var n=Object(d.a)(["\n    text-align: center;\n    margin: auto;\n    font-size: 22px;\n    padding-bottom: 30px;\n    color: #2871a4;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);return N=function(){return n},n}var C=b.c.span(N()),I=b.c.div(k()),z=b.c.form(S()),U=b.c.h2(E()),P=t(14),q=Object(m.b)(null,(function(n){return{googleSignInStart:function(){return n(Object(P.c)())},emailSignInStart:function(e,t){return n(Object(P.b)({email:e,password:t}))}}}))((function(n){var e=n.emailSignInStart,t=n.googleSignInStart,c=p(Object(a.useState)({email:"",password:""}),2),s=c[0],m=c[1],f=s.email,d=s.password,b=function(){var n=Object(u.a)(l.a.mark((function n(t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e(f,d);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(n){var e=n.target,t=e.value,a=e.name;m(Object(i.a)(Object(i.a)({},s),{},Object(o.a)({},a,t)))};return r.a.createElement(I,null,r.a.createElement(U,null," Welcome Back "),r.a.createElement(C,null),r.a.createElement(z,{onSubmit:b},r.a.createElement(j,{className:"form-input",name:"email",type:"email",handleChange:g,value:f,label:"email",required:!0}),r.a.createElement(j,{name:"password",type:"password",value:d,handleChange:g,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(O.a,{type:"submit"}," Sign in "),r.a.createElement(O.a,{type:"button",onClick:t,isGoogleSignIn:!0},"Sign in with Google"))))}));function D(){var n=Object(d.a)(["\n    width: 70%;\n    color: white;\n    padding: 30px;\n    background-color: #8E8E93;\n    color: #333;\n    box-shadow: 3px 3px 18px -8px #8b8b8b;\n"]);return D=function(){return n},n}function G(){var n=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n"]);return G=function(){return n},n}function B(){var n=Object(d.a)(["\n    text-align: center;\n    margin: auto;\n    font-size: 22px;\n    padding-bottom: 30px;\n    color: #2871a4;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);return B=function(){return n},n}function A(){var n=Object(d.a)(["\n  \twidth: 100%;\n    display: flex;\n    color: #2871a4;\n\ttext-align: center !important;\n    margin: auto;\n    font-size: 28px;\n    justify-content: center;\n  \tmargin-bottom: 25px;\n  \t@media screen and (max-width: 800px) {\n    \tpadding: 10px;\n    \tmargin-bottom: -10px;\n    \tfont-size: 10px;\n  \t}\n"]);return A=function(){return n},n}var F=b.c.h2(A()),H=b.c.span(B()),J=b.c.div(G()),L=b.c.form(D()),M=Object(m.b)(null,(function(n){return{signUpStart:function(e){return n(Object(P.j)(e))}}}))((function(n){var e=n.signUpStart,t=p(Object(a.useState)({displayName:"",email:"",password:"",confirmPassword:""}),2),c=t[0],s=t[1],m=c.email,f=c.displayName,d=c.password,b=c.confirmPassword,g=function(){var n=Object(u.a)(l.a.mark((function n(t){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),d===b){n.next=4;break}return alert("passwords don't match"),n.abrupt("return");case 4:e({displayName:f,email:m,password:d});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(n){var e=n.target,t=e.name,a=e.value;s(Object(i.a)(Object(i.a)({},c),{},Object(o.a)({},t,a)))};return r.a.createElement(J,{className:"sign-up"},r.a.createElement(F,null,r.a.createElement("b",null,"Don't have an account yet?")," "),r.a.createElement(H,null,"SIGN UP"),r.a.createElement(L,{className:"sign-up-form",onSubmit:g},r.a.createElement(j,{type:"text",name:"displayName",value:f,onChange:x,label:"Display Name",required:!0}),r.a.createElement(j,{type:"email",name:"email",value:m,onChange:x,label:"Email",required:!0}),r.a.createElement(j,{type:"password",name:"password",value:d,onChange:x,label:"Password",required:!0}),r.a.createElement(j,{type:"password",name:"confirmPassword",value:b,onChange:x,label:"Confirm Password",required:!0}),r.a.createElement(O.a,{type:"submit"},"SIGN UP")))}));t(129),e.default=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(q,{className:"signin",rel:"nofollow"}),r.a.createElement(M,{rel:"nofollow"}))}}}]);
//# sourceMappingURL=9.79e4ad7c.chunk.js.map
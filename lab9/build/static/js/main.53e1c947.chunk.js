(this.webpackJsonplab9=this.webpackJsonplab9||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(16),r=c.n(s),i=(c(24),c(7)),l=c(19),j=c(2),o=c(1);var u=function(e){var t,c=e.onSearch,n=Object(a.useState)(""),s=Object(i.a)(n,2),r=s[0],l=s[1],u=Object(j.g)(),d="/"===(t=Object(j.h)().url).charAt(t.length-1)?t.slice(0,-1):t;function b(e){c(e),u.push("".concat(d,"/user"))}return Object(o.jsxs)("div",{className:"container center-align",children:[Object(o.jsx)("div",{className:"input-field-container s12",children:Object(o.jsxs)("div",{className:"input-field",children:[Object(o.jsx)("i",{className:"material-icons prefix",children:"account_circle"}),Object(o.jsx)("input",{id:"icon_prefix",type:"text",className:"validate",onChange:function(e){return l(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&b(r)}}),Object(o.jsx)("label",{htmlFor:"icon_prefix",children:"Github Account"})]})}),Object(o.jsx)("button",{className:"waves-effect waves-light btn-large",onClick:function(){return b(r)},children:"Search"})]})},d=c(14),b=c.n(d),h=c(18);var O=function(e){var t=e.userData;function c(e){return e&&e}return Object(o.jsxs)("div",{className:"card col z-depth-4",children:[Object(o.jsxs)("div",{className:"waves-effect waves-block waves-light center-align",children:[Object(o.jsx)("img",{className:"circle card-img",src:t.avatar_url}),Object(o.jsx)("div",{className:"card-title",children:t.login}),Object(o.jsx)("div",{className:"card-title",children:t.updated_at})]}),Object(o.jsxs)("div",{className:"card-content col m7",children:[Object(o.jsx)("span",{className:"card-title",children:c(t.name)}),Object(o.jsx)("span",{className:"card-title",children:c(t.location)}),Object(o.jsxs)("span",{className:"card-title",children:[c(t.followers)," followers"]}),Object(o.jsxs)("span",{className:"card-title",children:[c(t.following)," following"]}),Object(o.jsxs)("span",{className:"card-title",children:["Repositories: ",c(t.public_repos)]}),Object(o.jsxs)("span",{className:"card-title",children:["Created: ",t.created_at]}),Object(o.jsx)("span",{className:"card-title",children:Object(o.jsx)("a",{href:t.html_url,children:t.html_url})})]})]})};var x=function(e){var t=e.userName,c=Object(a.useState)({}),n=Object(i.a)(c,2),s=n[0],r=n[1],l=Object(a.useState)(!0),j=Object(i.a)(l,2),u=j[0],d=j[1];return Object(a.useEffect)(Object(h.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,fetch("https://api.github.com/users/".concat(t),{headers:{authorization:"token ".concat("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")}}).then((function(e){if(e.ok)return d(!1),e.json()}));case 3:(c=e.sent)&&r(c);case 5:case"end":return e.stop()}}),e)}))),[t]),u?Object(o.jsx)("div",{children:"There is no such a github account..."}):Object(o.jsx)(O,{userData:s})};var f=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(j.d,{children:[Object(o.jsx)(j.b,{path:"/",exact:!0,children:Object(o.jsx)(u,{onSearch:function(e){return n(e)}})}),Object(o.jsx)(j.b,{path:"/user",exact:!0,children:Object(o.jsx)(x,{userName:c})}),Object(o.jsx)(j.a,{to:"/"})]})})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),m()}},[[32,1,2]]]);
//# sourceMappingURL=main.53e1c947.chunk.js.map
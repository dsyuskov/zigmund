(this.webpackJsonpzigmund=this.webpackJsonpzigmund||[]).push([[0],{30:function(e,t,a){e.exports=a(65)},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),s=a(13),i=a(9),u=a(29),l=a(6),m={isLoading:!1},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADING":return Object(l.a)(Object(l.a)({},e),{},{isLoading:!e.isLoading});default:return e}},d={totalCount:0,arrayRepos:[],query:{companyName:"",perPage:10,page:1}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_SEARCH_QUERY":return Object(l.a)(Object(l.a)({},e),{},{query:t.payload});case"ADD_REPOSITORIES":return Object(l.a)(Object(l.a)({},e),{},{arrayRepos:t.payload});case"ADD_TOTAL_REPOSITORIES":return Object(l.a)(Object(l.a)({},e),{},{totalCount:t.payload});default:return e}},E=Object(i.c)({UIState:p,repositoryState:h}),f=a(10),v=a.n(f),y=a(7),O=a(18),g=a.n(O),_=v.a.mark(N),b=v.a.mark(I),S="https://api.github.com",C=function(e){return g()("".concat(S,"/orgs/").concat(e.companyName,"/repos?per_page=").concat(e.perPage,"&page=").concat(e.page)).then((function(e){return e.data}))},j=function(e){return g()("".concat(S,"/orgs/").concat(e.companyName)).then((function(e){return e.data.public_repos}))};function N(e){var t,a,n;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(y.b)({type:"IS_LOADING"});case 3:return r.next=5,Object(y.b)({type:"CHANGE_SEARCH_QUERY",payload:e.payload});case 5:return r.next=7,Object(y.a)(C,e.payload);case 7:return t=r.sent,r.next=10,Object(y.a)(j,e.payload);case 10:return a=r.sent,n=[],t.forEach((function(e){n.push({id:e.id,name:e.name,url:e.html_url,forksCount:e.forks_count,watchersCount:e.watchers_count,stargazersCount:e.stargazers_count,description:e.description})})),r.next=15,Object(y.b)({type:"ADD_REPOSITORIES",payload:n});case 15:return r.next=17,Object(y.b)({type:"ADD_TOTAL_REPOSITORIES",payload:a});case 17:return r.next=19,Object(y.b)({type:"IS_LOADING"});case 19:r.next=29;break;case 21:return r.prev=21,r.t0=r.catch(0),r.next=25,Object(y.b)({type:"ADD_REPOSITORIES",payload:[]});case 25:return r.next=27,Object(y.b)({type:"ADD_TOTAL_REPOSITORIES",payload:0});case 27:return r.next=29,Object(y.b)({type:"IS_LOADING"});case 29:case"end":return r.stop()}}),_,null,[[0,21]])}function I(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.c)("GET_REPOSITORIES",N);case 2:case"end":return e.stop()}}),b)}var R=Object(u.a)(),w=Object(i.e)(E,Object(i.a)(R));R.run(I);var L=w,A=(a(59),a(14)),k=(a(60),function(e){var t=e.classesList,a=Object(n.useState)(""),c=Object(A.a)(a,2),o=c[0],s=c[1],i=function(){e.onSearch({companyName:o,page:1,perPage:10})};return r.a.createElement("div",{className:"search ".concat(t)},r.a.createElement("input",{value:o,onChange:function(e){s(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&i()},className:"search__input",type:"text",placeholder:"Enter company name"}),r.a.createElement("button",{className:"search__button",onClick:i},"Search"))}),x=function(e){return r.a.createElement("div",{className:"icon"},r.a.createElement("svg",{height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"})),r.a.createElement("span",{className:"icon__count"},e.starCount))},D=function(e){return r.a.createElement("div",{className:"icon"},r.a.createElement("svg",{"aria-label":"fork",height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true"},r.a.createElement("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})),r.a.createElement("span",{className:"icon__count"},e.forkCount))},T=function(e){return r.a.createElement("div",{className:"icon"},r.a.createElement("svg",{height:"16",viewBox:"0 0 16 16",version:"1.1",width:"16","aria-hidden":"true"},r.a.createElement("path",{d:"M1.679 7.932c.412-.621 1.242-1.75 2.366-2.717C5.175 4.242 6.527 3.5 8 3.5c1.473 0 2.824.742 3.955 1.715 1.124.967 1.954 2.096 2.366 2.717a.119.119 0 010 .136c-.412.621-1.242 1.75-2.366 2.717C10.825 11.758 9.473 12.5 8 12.5c-1.473 0-2.824-.742-3.955-1.715C2.92 9.818 2.09 8.69 1.679 8.068a.119.119 0 010-.136zM8 2c-1.981 0-3.67.992-4.933 2.078C1.797 5.169.88 6.423.43 7.1a1.619 1.619 0 000 1.798c.45.678 1.367 1.932 2.637 3.024C4.329 13.008 6.019 14 8 14c1.981 0 3.67-.992 4.933-2.078 1.27-1.091 2.187-2.345 2.637-3.023a1.619 1.619 0 000-1.798c-.45-.678-1.367-1.932-2.637-3.023C11.671 2.992 9.981 2 8 2zm0 8a2 2 0 100-4 2 2 0 000 4z"})),r.a.createElement("span",{className:"icon__count"},e.watcherCount))},z=(a(61),function(e){var t=e.classesList,a=e.repos,n=a.name,c=a.url,o=a.forksCount,s=a.watchersCount,i=a.stargazersCount,u=a.description;return r.a.createElement("div",{className:"rep-item ".concat(t)},r.a.createElement("div",{className:"rep-item__name"},r.a.createElement("a",{href:c},n)),r.a.createElement("div",{className:"rep-item__description"},u),r.a.createElement("div",{className:"rep-item__info"},r.a.createElement(x,{starCount:i}),r.a.createElement(D,{forkCount:o}),r.a.createElement(T,{watcherCount:s})))}),P=(a(62),function(e){var t=e.classesList;return r.a.createElement("div",{className:"loader ".concat(t)})}),G=(a(63),function(e){var t=e.classesList,a=e.totalCount,c=e.query,o=e.onSearch,s=c.perPage,i=c.page,u=Object(n.useState)([]),m=Object(A.a)(u,2),p=m[0],d=m[1],h=a%s!==0?(a-a%s)/s+1:a/s,E=function(e){var t=[];if(h>1&&h<=10)for(var a=1;a<=10;a++)t.push(a);else for(var n=1;n<=h;n++)n<=2||e<=5&&n<=5||n>=e-1&&n<=e+1||e>h-5&&n>h-5||n>h-2?t.push(n):(e>5&&3===n||e<h-4&&n===h-3)&&t.push(0);return t};return Object(n.useEffect)((function(){d(E(c.page))}),[]),r.a.createElement("ul",{className:"pagination ".concat(t)},h>1&&p.map((function(e){var t=[];return e===i&&t.push("pagination__item--active"),0===e&&t.push("pagination__item--no-click"),r.a.createElement("li",{key:"".concat(e).concat(Math.random()).concat(Math.random()),className:"pagination__item ".concat(t.join(" ")),onClick:function(){var t;0!==(t=e)&&(d(E(t)),o(Object(l.a)(Object(l.a)({},c),{},{page:t})))}},0!==e?e:"...")})))}),q=(a(64),Object(s.b)((function(e){return{repositoryState:e.repositoryState,UIState:e.UIState}}),(function(e){return{getRepositories:function(t){return e({type:"GET_REPOSITORIES",payload:t})}}}))((function(e){var t=e.repositoryState,a=e.UIState,n=e.getRepositories;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(k,{classesList:"search--margin",onSearch:n}),a.isLoading&&r.a.createElement(P,null),!a.isLoading&&r.a.createElement("div",{className:"repository-list"},t.arrayRepos.map((function(e){return r.a.createElement(z,{repos:e,key:e.id})})),t.totalCount>0&&r.a.createElement(G,{totalCount:t.totalCount,query:t.query,onSearch:n}),""!==t.query.companyName&&0===t.totalCount&&r.a.createElement("div",{className:"no-result"},"Company"," ",r.a.createElement("span",{className:"no-result__company-name"},t.query.companyName)," ","not found."))))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:L},r.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.9bc1a462.chunk.js.map
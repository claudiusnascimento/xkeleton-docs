(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{180:function(e,a,t){"use strict";t(23);var n=t(0),c=t.n(n),r=t(174),o=t.n(r),l=t(173),s=t(176),i=t(177);t(126);a.a=e=>{const[a,r]=Object(n.useState)(!1),d=Object(n.useRef)(null),{siteConfig:h={}}=Object(l.a)(),{themeConfig:{algolia:u}}=h,p=Object(s.b)(),{navigateToSearchPage:m}=Object(i.a)();const b=(e=!0)=>{a||Promise.all([Promise.all([t.e(4),t.e(38)]).then(t.t.bind(null,181,7)),t.e(25).then(t.t.bind(null,182,7))]).then(([{default:a}])=>{r(!0),window.docsearch=a,function(e){window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:(e,a,t)=>{a.stopPropagation();const n=document.createElement("a");n.href=t.url;const c="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;p.push(c)}}),e&&d.current.focus()}(e)})},f=Object(n.useCallback)(()=>{b(),a&&d.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),E=Object(n.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),g=Object(n.useCallback)(e=>{const a="mouseover"!==e.type;b(a)}),w=Object(n.useCallback)(e=>{e.defaultPrevented||"Enter"!==e.key||m(e.target.value)});return c.a.createElement("div",{className:"navbar__search",key:"search-box"},c.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:o()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),c.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:o()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:g,onFocus:g,onBlur:E,onKeyDown:w,ref:d}))}},208:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(179);a.default=function(){return c.a.createElement(r.a,{title:"Page Not Found"},c.a.createElement("div",{className:"container margin-vert--xl"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col col--6 col--offset-3"},c.a.createElement("h1",{className:"hero__title"},"Page Not Found"),c.a.createElement("p",null,"We could not find what you were looking for."),c.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);
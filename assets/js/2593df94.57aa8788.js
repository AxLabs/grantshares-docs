"use strict";(self.webpackChunkgrantshares_docs=self.webpackChunkgrantshares_docs||[]).push([[337],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7693:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),s=["components"],i={},l="Overview",c={unversionedId:"System Design/overview",id:"System Design/overview",title:"Overview",description:"GrantShares consists of four parts:",source:"@site/docs/2_System Design/1_overview.md",sourceDirName:"2_System Design",slug:"/System Design/overview",permalink:"/docs/System Design/overview",draft:!1,editUrl:"https://github.com/axlabs/grantshares-docs/tree/main/docs/2_System Design/1_overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Grants Categories",permalink:"/docs/General/grants_categories"},next:{title:"Proposals",permalink:"/docs/System Design/proposals"}},u={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"GrantShares consists of four parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Smart contracts"),(0,o.kt)("li",{parentName:"ul"},"GitHub issues"),(0,o.kt)("li",{parentName:"ul"},"Web Frontend"),(0,o.kt)("li",{parentName:"ul"},"Backend")),(0,o.kt)("p",null,"The smart contracts are at the core. They execute the proposals, control the voting mechanism, determine who can vote,\nand maintain the treasury. The other three parts are exchangable, but are nontheless important to make GrantShares\nusable. The frontend and backend make sure that the proposal process and information is accessible and appealing to\neveryone. GitHub is used to discuss proposals created on GrantShares."),(0,o.kt)("p",null,"Here are some properties of the GrantShares application that will be discussed in more details:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GrantShares is permissioned. Becoming a member requires a proposal and, therefore, approval of the existing members."),(0,o.kt)("li",{parentName:"ul"},"Anyone can create proposals but it is up to the members to decide which ones get executed."),(0,o.kt)("li",{parentName:"ul"},"Each member has equal voting power, i.e., one vote per member per proposal."),(0,o.kt)("li",{parentName:"ul"},"The GrantShares treasury smart contract owns the assets used for grants. The assets will initially be provided by Neo\nFoundation."),(0,o.kt)("li",{parentName:"ul"},"The treasury can only receive funding from addresses that were previously whitelisted via a proposal. Transfers from\nother addresses will fail."),(0,o.kt)("li",{parentName:"ul"},"The treasury can only receive tokens that were previously whitelisted via a proposal. Transfers of other tokens will\nfail. "),(0,o.kt)("li",{parentName:"ul"},"The smart contracts can handle generic proposals, meaning, they can include any intents that can be executed on-chain.")))}d.isMDXComponent=!0}}]);
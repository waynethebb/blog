(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{87079:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});n(67294);var r=n(41664),o=n(56645),a=n.n(o),c=n(34651),i=n(85893);function s(e){var t=e.menu,n=(0,c.useRouter)();return(0,i.jsx)("li",{className:n.pathname===t.path?a().list_item_active:a().list_item,children:(0,i.jsx)(r.default,{href:t.path,className:a().link,children:t.name})})}var u=n(25216),l=n.n(u);function f(){return(0,i.jsxs)("div",{className:l().container,children:[(0,i.jsx)("p",{className:l().name,children:"WayneChoi.dev"}),(0,i.jsx)("ul",{className:l().list,children:[{name:"HOME",path:"/"},{name:"ABOUT",path:"/about"},{name:"BLOG",path:"/blog"},{name:"PORTFOLIO",path:"/work"}].map((function(e,t){return(0,i.jsx)(s,{menu:e},t)}))})]})}var d=n(23102),p=n.n(d);function h(e){return(0,i.jsxs)("div",{className:p().container,children:[(0,i.jsx)("header",{className:p().header,children:(0,i.jsx)(f,{})}),(0,i.jsx)("section",{className:p().contents,children:e.children}),(0,i.jsxs)("footer",{className:p().footer,children:["(C) ",e.year,". Wonjun Choi. All rights reserved."]})]})}},13064:function(e){e.exports={reactStrictMode:!0,assetPrefix:"https://waynechoi.dev/"}},92167:function(e,t,n){"use strict";var r=n(53848);t.default=void 0;var o,a=(o=n(67294))&&o.__esModule?o:{default:o},c=n(21063),i=n(34651),s=n(7426);var u={};function l(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,_=e.shallow,m=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,j=s.useIntersection({rootMargin:"200px"}),O=r(j,2),g=O[0],w=O[1],x=a.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);a.default.useEffect((function(){var e=w&&n&&c.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&l(o,d,p,{locale:t})}),[p,d,w,y,n,o]);var E={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}))}(e,o,d,p,v,_,m,y)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof y?y:o&&o.locale,N=o&&o.isLocaleDomain&&c.getDomainLocale(p,P,o&&o.locales,o&&o.domainLocales);E.href=N||c.addBasePath(c.addLocale(p,P,o&&o.defaultLocale))}return a.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(53848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=o.useRef(),u=o.useState(!1),l=r(u,2),f=l[0],d=l[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(67294),a=n(73447),c="undefined"!==typeof IntersectionObserver;var i=new Map},7672:function(e,t,n){"use strict";n.r(t);var r=n(92809),o=(n(89645),n(87079)),a=n(13064),c=n(85893);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps,r=new Date;return(0,c.jsx)(o.Z,{year:r.getFullYear(),children:(0,c.jsx)(t,s(s({},n),{},{prefix:a.assetPrefix}))})}},81780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7672)}])},25216:function(e){e.exports={container:"header_container__2Vvjg",name:"header_name__2PEvs",desc:"header_desc__3Cwo2",list:"header_list__2sooW"}},56645:function(e){e.exports={list_item_active:"header_item_list_item_active__3nSjh",list_item:"header_item_list_item__33J-y"}},23102:function(e){e.exports={container:"layout_container__1ROar",header:"layout_header__MPs9E",contents:"layout_contents__wGaub",footer:"layout_footer__2KiKH"}},89645:function(){},41664:function(e,t,n){e.exports=n(92167)},92809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(81780),t(34651)}));var n=e.O();_N_E=n}]);
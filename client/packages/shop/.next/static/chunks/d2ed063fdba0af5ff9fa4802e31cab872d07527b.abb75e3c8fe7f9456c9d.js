(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/QYh":function(e,t,r){"use strict";var n=r("O5Wi"),o=r("zQIG"),a=r("8mBC");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.__esModule=!0,t.default=void 0;var l,f=(l=r("ERkP"))&&l.__esModule?l:{default:l},d=r("D3Vl"),p=r("4smK");var h=[],y=[],m=!1;function b(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}function v(e){var t={loading:!1,loaded:{},error:null},r=[];try{Object.keys(e).forEach((function(n){var o=b(e[n]);o.loading?t.loading=!0:(t.loaded[n]=o.loaded,t.error=o.error),r.push(o.promise),o.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(r).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function g(e,t){return f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function O(e,t){var r=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:g,webpack:null,modules:null},t),n=null;function o(){if(!n){var t=new w(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!m&&"function"===typeof r.webpack){var a=r.webpack();y.push((function(e){var t,r=c(a);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(-1!==e.indexOf(n))return o()}}catch(i){r.e(i)}finally{r.f()}}))}var i=function(e,t){o();var a=f.default.useContext(p.LoadableContext),i=(0,d.useSubscription)(n);return f.default.useImperativeHandle(t,(function(){return{retry:n.retry}}),[]),a&&Array.isArray(r.modules)&&r.modules.forEach((function(e){a(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.render(i.loaded,e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",f.default.forwardRef(i)}var w=function(){function e(t,r){o(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=u(u({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function j(e){return O(b,e)}function _(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return _(e,t)}))}j.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return O(v,e)},j.preloadAll=function(){return new Promise((function(e,t){_(h).then(e,t)}))},j.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return m=!0,t()};_(y,e).then(r,r)}))},window.__NEXT_PRELOADREADY=j.preloadReady;var k=j;t.default=k},"4smK":function(e,t,r){"use strict";var n;t.__esModule=!0,t.LoadableContext=void 0;var o=((n=r("ERkP"))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},"5l48":function(e,t,r){"use strict";r.d(t,"i",(function(){return n})),r.d(t,"g",(function(){return o})),r.d(t,"k",(function(){return a})),r.d(t,"e",(function(){return i})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"l",(function(){return l})),r.d(t,"s",(function(){return f})),r.d(t,"o",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"n",(function(){return h})),r.d(t,"r",(function(){return m})),r.d(t,"a",(function(){return v})),r.d(t,"d",(function(){return g})),r.d(t,"m",(function(){return O})),r.d(t,"q",(function(){return w})),r.d(t,"p",(function(){return j})),r.d(t,"j",(function(){return _}));var n="/",o="/grocery",a="/makeup",i="/clothing",u="/bags",c="/book",s="/furniture",l="/medicine",f="/restaurant",d="/profile",p={id:"nav.help",defaultMessage:"Help",href:"/help"},h={id:"nav.offer",defaultMessage:"Offer",href:"/offer"},y={id:"nav.order",href:"/order",defaultMessage:"Order"},m={id:"nav.request_medicine",defaultMessage:"Request Medicine",href:"/request-medicine"},b={id:"nav.profile",defaultMessage:"Profile",href:d},v=[b,{id:"nav.checkout",defaultMessage:"Checkout",href:"/checkout"},{id:"nav.checkout_two",href:"/checkout-alternative",defaultMessage:"Checkout Alternative"},y,{id:"nav.order_received",href:"/order-received",defaultMessage:"Order invoice"},{id:"nav.terms_and_services",defaultMessage:"Terms and Services",href:"/terms"},{id:"nav.privacy_policy",defaultMessage:"Privacy Policy",href:"/privacy"}],g=[{id:"nav.grocery",href:o,defaultMessage:"Grocery",icon:"FruitsVegetable",dynamic:!0},{id:"nav.makeup",defaultMessage:"Makeup",href:a,icon:"FacialCare",dynamic:!0},{id:"nav.bags",defaultMessage:"Bags",href:u,icon:"Handbag",dynamic:!0},{id:"nav.clothing",defaultMessage:"Clothing",href:i,icon:"DressIcon",dynamic:!0},{id:"nav.furniture",defaultMessage:"Furniture",href:s,icon:"FurnitureIcon",dynamic:!0},{id:"nav.book",defaultMessage:"Book",href:c,icon:"BookIcon",dynamic:!0},{id:"nav.medicine",defaultMessage:"Medicine",href:l,icon:"MedicineIcon",dynamic:!0},{id:"nav.foods",defaultMessage:"Foods",href:f,icon:"Restaurant"}],O=[{id:"nav.home",defaultMessage:"Home",href:n}].concat(v,[p,h]),w=[y,p],j=[b],_=[{id:"ar",defaultMessage:"Arabic",icon:"SAFlag"},{id:"zh",defaultMessage:"Chinese",icon:"CNFlag"},{id:"en",defaultMessage:"English",icon:"USFlag"},{id:"de",defaultMessage:"German",icon:"DEFlag"},{id:"he",defaultMessage:"Hebrew",icon:"ILFlag"},{id:"es",defaultMessage:"Spanish",icon:"ESFlag"}]},AU4o:function(e,t,r){"use strict";var n=r("O5Wi");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.__esModule=!0,t.noSSR=l,t.default=function(e,t){var r=u.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=a(a({},n),e));if(n=a(a({},n),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(n.render=function(t,r){return e.render(r,t)}),e.modules)){r=u.default.Map;var o={},i=e.modules();Object.keys(i).forEach((function(e){var t=i[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),n.loader=o}n.loadableGenerated&&delete(n=a(a({},n),n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};var i=c(r("ERkP")),u=c(r("/QYh"));function c(e){return e&&e.__esModule?e:{default:e}}var s=!1;function l(e,t){if(delete t.webpack,delete t.modules,!s)return e(t);var r=t.loading;return function(){return i.default.createElement(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}}},Ek28:function(e,t,r){"use strict";var n=r("ERkP"),o=r.n(n),a=r("j/s1"),i=r("jvFD"),u=r.n(i),c=r("7xIC"),s=r("2SGB"),l=o.a.createElement,f=a.e.span.withConfig({displayName:"nav-link__Icon",componentId:"sc-6likiw-0"})(["min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;"]);t.a=Object(c.withRouter)((function(e){var t=e.href,r=e.label,n=e.intlId,o=e.router,a=e.icon,i=e.className,c=e.onClick,d=e.iconClass,p=e.dynamic,h=o.pathname===t||o.asPath===t;return l("div",{onClick:c,className:i||""},l(u.a,p?{href:"/[type]",as:t}:{href:t},l("a",{className:h?" current-page":"",style:{display:"flex",alignItems:"center"}},a?l(f,{className:d},a):"",l("span",{className:"label"},n?l(s.a,{id:n||"defaultNavLinkId",defaultMessage:r}):r))))}))},J7Kp:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("cxan"),o=r("HbGN"),a=r("ERkP"),i=r.n(a).a.createElement,u=function(e){var t=e.color,r=void 0===t?"currentColor":t,a=e.width,u=void 0===a?"14px":a,c=e.height,s=void 0===c?"14px":c,l=Object(o.a)(e,["color","width","height"]);return i("svg",Object(n.a)({xmlns:"http://www.w3.org/2000/svg",width:u,height:s,viewBox:"0 0 14 14"},l),i("path",{d:"M14.771,12.752,11.32,9.286a5.519,5.519,0,0,0,1.374-3.634A5.763,5.763,0,0,0,6.839,0,5.763,5.763,0,0,0,.984,5.652,5.763,5.763,0,0,0,6.839,11.3a5.936,5.936,0,0,0,3.354-1.023l3.477,3.492a.783.783,0,0,0,1.08.02A.72.72,0,0,0,14.771,12.752ZM6.839,1.475a4.259,4.259,0,0,1,4.327,4.178A4.259,4.259,0,0,1,6.839,9.83,4.259,4.259,0,0,1,2.511,5.652,4.259,4.259,0,0,1,6.839,1.475Z",transform:"translate(-0.984)",fill:r}))}},KeDb:function(e,t,r){"use strict";var n=r("zQIG"),o=r("8mBC"),a=r("I/kN"),i=r("cMav"),u=r("pSQP");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}var s=r("Y3ZS"),l=r("pONU");t.__esModule=!0,t.default=void 0;var f,d=l(r("ERkP")),p=r("cRaD"),h=r("fvxO"),y=s(r("7xIC")),m=r("L9lV");function b(e){return e&&"object"===typeof e?(0,h.formatWithValidation)(e):e}var v=new Map,g=window.IntersectionObserver,O={};function w(){return f||(g?f=new g((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var j=function(e){a(r,e);var t=c(r);function r(e){var o;return n(this,r),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,r=null,n=null;return function(o,a){if(n&&o===t&&a===r)return n;var i=e(o,a);return t=o,r=a,n=i,i}}((function(e,t){return{href:(0,m.addBasePath)(b(e)),as:t?(0,m.addBasePath)(b(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,r=t.nodeName,n=t.target;if("A"!==r||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),i=a.href,u=a.as;if(function(e){var t=(0,p.parse)(e,!1,!0),r=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var c=window.location.pathname;i=(0,p.resolve)(c,i),u=u?(0,p.resolve)(c,u):i,e.preventDefault();var s=o.props.scroll;null==s&&(s=u.indexOf("#")<0),y.default[o.props.replace?"replace":"push"](i,u,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(r,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),r=t.href,n=t.as,o=(0,p.resolve)(e,r);return[o,n?(0,p.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),O[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var r=w();return r?(r.observe(e),v.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();y.default.prefetch(t[0],t[1],e).catch((function(e){0})),O[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var a=d.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||n),d.default.cloneElement(a,i)}}]),r}(d.Component);t.default=j},O5Wi:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},Td6B:function(e,t,r){"use strict";var n=r("cxan"),o=r("zjfJ"),a=r("HbGN"),i=r("ERkP"),u=r.n(i),c=r("j/s1"),s=r("OBVT"),l=r("GkOb"),f=c.e.form.withConfig({displayName:"search-boxstyle__StyledForm",componentId:"x0hjfp-0"})((function(e){return Object(s.a)({display:"flex",alignItems:"center",borderRadius:"base",overflow:"hidden",width:e.minimal?"100%":700,color:"text.regular",backgroundColor:e.minimal?"gray.400":"white"})}),l.g),d=c.e.input.withConfig({displayName:"search-boxstyle__StyledInput",componentId:"x0hjfp-1"})(Object(s.a)({flexGrow:1,fontSize:"base",px:20,height:48,color:"text.regular",backgroundColor:"inherit"}),{border:0,"&:focus":{outline:0},"&::-webkit-input-placeholder, &::-moz-placeholder, &::-moz-placeholder, &::-ms-input-placeholder":{fontSize:"base",color:"text.regular",whiteSpace:"nowrap",textOverflow:"ellipsis"}}),p=c.e.span.withConfig({displayName:"search-boxstyle__StyledCategoryName",componentId:"x0hjfp-2"})(Object(s.a)({fontSize:14,fontWeight:"bold",lineHeight:"38px",px:15,color:"primary.regular",backgroundColor:"gray.200",borderRadius:"base"}),{margin:"5px",whiteSpace:"nowrap",textTransform:"capitalize"}),h=c.e.button.withConfig({displayName:"search-boxstyle__StyledSearchButton",componentId:"x0hjfp-3"})(Object(s.a)({backgroundColor:"primary.regular",color:"white",fontSize:"base",fontWeight:"bold"}),{display:"flex",height:48,alignItems:"center",border:0,outline:0,paddingLeft:30,paddingRight:30,cursor:"pointer",flexShrink:0}),y=r("J7Kp"),m=u.a.createElement,b=function(e){var t=e.onEnter,r=e.onChange,o=e.value,i=e.name,c=e.minimal,s=e.categoryType,l=e.buttonText,b=e.className,v=e.showButtonText,g=void 0===v||v,O=e.shadow,w=Object(a.a)(e,["onEnter","onChange","value","name","minimal","categoryType","buttonText","className","showButtonText","shadow"]);return m(f,{onSubmit:t,className:b,boxShadow:O,minimal:c},c?m(u.a.Fragment,null,m(y.a,{style:{marginLeft:16,marginRight:16}}),m(d,Object(n.a)({type:"search",onChange:r,value:o,name:i},w))):m(u.a.Fragment,null,m(p,null,s),m(d,Object(n.a)({type:"search",onChange:r,value:o,name:i},w)),m(h,null,m(y.a,{style:{marginRight:10}}),g&&l)))},v=r("xZKy"),g=r("7xIC"),O=r("yVh0"),w=u.a.createElement;function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onSubmit,r=Object(a.a)(e,["onSubmit"]),o=Object(v.c)("searchTerm"),i=Object(v.b)(),u=Object(g.useRouter)(),c=Object(O.a)(),s=u.pathname,l=u.query;return w(b,Object(n.a)({onEnter:function(e){e.preventDefault();var r=l.type,n=Object(a.a)(l,["type"]);r?u.push({pathname:s,query:_(_({},n),{},{text:o})},{pathname:"/".concat(r),query:_(_({},n),{},{text:o})}):u.push({pathname:s,query:_(_({},n),{},{text:o})}),i({type:"SET_SEARCH_TERM",payload:""}),t&&t()},onChange:function(e){var t=e.target.value;i({type:"SET_SEARCH_TERM",payload:t})},value:o,name:"search",placeholder:c.formatMessage({id:"searchPlaceholder",defaultMessage:"Search your products from here"}),categoryType:l.type||"restaurant",buttonText:c.formatMessage({id:"searchButtonText",defaultMessage:"Search"})},r))}},jvFD:function(e,t,r){e.exports=r("KeDb")},xZKy:function(e,t,r){"use strict";r.d(t,"c",(function(){return y})),r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return b}));var n=r("zygG"),o=r("ERkP"),a=r.n(o),i=a.a.createElement;var u=r("zjfJ");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e,t){var r=Object(o.createContext)(t),u=Object(o.createContext)((function(){return t}));return[function(e){return Object(o.useContext)(r)[e]},function(){return Object(o.useContext)(u)},function(o){var c=a.a.useReducer(e,t),s=Object(n.a)(c,2),l=s[0],f=s[1];return i(u.Provider,{value:f},i(r.Provider,{value:l},o.children))}]}((function(e,t){switch(t.type){case"SET_SEARCH_TERM":return s(s({},e),{},{searchTerm:t.payload});case"SET_STICKY":return s(s({},e),{},{isSticky:!0});case"REMOVE_STICKY":return s(s({},e),{},{isSticky:!1});case"SET_SIDEBAR_STICKY":return s(s({},e),{},{isSidebarSticky:!0});case"REMOVE_SIDEBAR_STICKY":return s(s({},e),{},{isSidebarSticky:!1});case"TOGGLE_DRAWER":return s(s({},e),{},{isDrawerOpen:!e.isDrawerOpen});default:throw new Error("Unsupported action type at App Reducer")}}),{searchTerm:"",isSticky:!1,isSidebarSticky:!0,isDrawerOpen:!1}),f=Object(n.a)(l,3),d=f[0],p=f[1],h=f[2],y=d,m=p,b=h},yVh0:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("ERkP"),o=r("YQpL"),a=r("R56p");function i(){var e=n.useContext(o.a);return Object(a.f)(e),e}}}]);